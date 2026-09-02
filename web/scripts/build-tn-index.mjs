// Builds the TicketNetwork slug index from their public sitemaps.
//
// This runs on a SCHEDULE, not at build time. A cold Next build already
// prerenders 160 combo pages against a rate-limited events feed; adding a
// second third-party dependency to the build path repeats a failure this
// project has already had. Pages import the committed JSON.
//
// On any failure the previous index is left exactly as it was: a stale index
// links to pages that mostly still exist, while a truncated one silently
// deletes revenue from every page that no longer resolves.
import { writeFileSync } from 'node:fs';
import { keyFromSlug } from '../src/lib/tn-slug.mjs';

const OUT = new URL('../src/data/ticketnetwork.generated.json', import.meta.url);
const UA = 'Mozilla/5.0 (compatible; TicketScanIndexer/1.0; +https://www.ticketscan.io)';

const SOURCES = [
  { field: 'performers', prefix: '/performers/', sitemaps: ['performers'] },
  { field: 'venues', prefix: '/venues/', sitemaps: ['venues'] },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Fetches `url` with retry/backoff on transient failures (5xx, 429), so a
 * single flaky response from TicketNetwork does not abort an unattended
 * scheduled run. A 404 is not transient — it means "page missing" — so it is
 * returned as `null` immediately rather than retried; every other non-OK
 * status is treated as permanent and thrown.
 */
async function fetchText(url) {
  for (let attempt = 0; attempt < 4; attempt += 1) {
    const res = await fetch(url, { headers: { 'user-agent': UA } });
    if (res.status === 404) return null;
    if (res.ok) return res.text();
    if (res.status < 500 && res.status !== 429) throw new Error(`HTTP ${res.status} for ${url}`);
    await sleep(500 * 2 ** attempt + Math.random() * 250);
  }
  throw new Error(`giving up on ${url}`);
}

/** Every <loc> in a sitemap whose path sits under `prefix`, as its last segment. */
function slugsFrom(xml, prefix) {
  const slugs = [];
  for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const path = new URL(match[1]).pathname;
    if (!path.startsWith(prefix)) continue;
    const slug = path.slice(prefix.length).replace(/\/$/, '');
    if (slug && !slug.includes('/')) slugs.push(slug);
  }
  return slugs;
}

/**
 * A sitemap family is paginated as /sitemap/<name>/1, /2, ... TicketNetwork
 * never 404s an out-of-range page — it returns HTTP 200 with zero <loc>
 * entries (verified live 2026-09-02: /sitemap/performers/2, /3 and /999 all
 * come back 200 and empty). So the real stop condition is "this page had no
 * slugs", not the page's HTTP status. The 404 check is kept anyway in case
 * some other sitemap family does behave that way; the 50-page bound is a
 * hard safety cap either way.
 */
async function allPages(name, prefix) {
  const pages = [];
  for (let page = 1; page <= 50; page += 1) {
    const xml = await fetchText(`https://www.ticketnetwork.com/sitemap/${name}/${page}`);
    if (xml === null) break; // 404: page missing
    if (slugsFrom(xml, prefix).length === 0) break; // R4: empty page, not a 404
    pages.push(xml);
    await sleep(250);
  }
  if (!pages.length) throw new Error(`no sitemap pages found for ${name}`);
  return pages;
}

async function main() {
  const index = { builtAt: new Date().toISOString(), counts: {}, performers: {}, venues: {} };

  for (const source of SOURCES) {
    let found = 0;
    for (const name of source.sitemaps) {
      for (const xml of await allPages(name, source.prefix)) {
        for (const slug of slugsFrom(xml, source.prefix)) {
          const key = keyFromSlug(slug);
          // First slug wins. The sitemaps are alphabetical, so collisions
          // resolve the same way on every run rather than flapping.
          if (key && !index[source.field][key]) {
            index[source.field][key] = slug;
            found += 1;
          }
        }
      }
    }
    if (found === 0) throw new Error(`resolved zero ${source.field}; refusing to write an empty index`);
    index.counts[source.field] = found;
  }

  writeFileSync(OUT, `${JSON.stringify(index)}\n`);
  console.log(`Wrote ${index.counts.performers} performers, ${index.counts.venues} venues`);
}

main().catch((error) => {
  console.error(`TicketNetwork index refresh FAILED: ${error.message}`);
  console.error('Previous index left intact.');
  process.exit(1);
});
