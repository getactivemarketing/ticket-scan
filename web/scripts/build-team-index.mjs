// Resolves each seeded team to a Ticketmaster attractionId and a TicketNetwork
// performer slug, and commits the result.
//
// Scheduled, never run at build time — the same rule as the combo and
// TicketNetwork indexes, for the same reason. On any failure the previous
// index is left exactly as it was: a stale index points at pages that mostly
// still exist, a truncated one silently deletes every page it dropped.
import { readFileSync, writeFileSync } from 'node:fs';
import { pickAttraction, LEAGUE_CLASSIFICATION } from '../src/lib/team-resolve.mjs';
import { normalizeName } from '../src/lib/tn-slug.mjs';

const KEY = process.env.TICKETMASTER_API_KEY;
if (!KEY) {
  console.error('TICKETMASTER_API_KEY is required.');
  process.exit(1);
}

const OUT = new URL('../src/data/teams.generated.json', import.meta.url);
const TN = JSON.parse(readFileSync(new URL('../src/data/ticketnetwork.generated.json', import.meta.url), 'utf8'));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Read team slugs and names straight out of the TS source rather than importing
// it, the same trick build-combo-index.mjs uses to avoid a TS loader.
const src = readFileSync(new URL('../src/data/teams.ts', import.meta.url), 'utf8');
const seeded = [...src.matchAll(/^\s*'([a-z0-9-]+)': \{ slug: '[a-z0-9-]+', name: ("(?:[^"\\]|\\.)*"), league: '([a-z-]+)'/gm)]
  .map((m) => ({ slug: m[1], name: JSON.parse(m[2]), league: m[3] }));

async function fetchCandidates(name) {
  for (let attempt = 0; attempt < 4; attempt += 1) {
    const url =
      `https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=${KEY}` +
      `&keyword=${encodeURIComponent(name)}&size=20&countryCode=US`;
    const res = await fetch(url);
    if (res.ok) {
      const json = await res.json();
      return (json._embedded && json._embedded.attractions) || [];
    }
    if (res.status < 500 && res.status !== 429) throw new Error(`HTTP ${res.status} for ${name}`);
    await sleep(500 * 2 ** attempt + Math.random() * 250);
  }
  throw new Error(`giving up on ${name}`);
}

async function main() {
  if (!seeded.length) throw new Error('parsed zero teams from teams.ts — refusing to write an empty index');

  const index = { builtAt: new Date().toISOString(), counts: { resolved: 0, unresolved: 0 }, teams: {} };
  const unresolved = [];

  for (const team of seeded) {
    if (!LEAGUE_CLASSIFICATION[team.league]) {
      throw new Error(`team ${team.slug} has unknown league "${team.league}"`);
    }
    const picked = pickAttraction(await fetchCandidates(team.name), team.league);
    if (!picked) {
      // Omitted, never guessed. An unresolved team simply has no page.
      unresolved.push(team.slug);
      index.counts.unresolved += 1;
    } else {
      const tnSlug = TN.performers[normalizeName(team.name)];
      index.teams[team.slug] = tnSlug
        ? { attractionId: picked.id, tnSlug }
        : { attractionId: picked.id };
      index.counts.resolved += 1;
    }
    await sleep(250);
  }

  if (index.counts.resolved === 0) throw new Error('resolved zero teams; refusing to write an empty index');

  writeFileSync(OUT, `${JSON.stringify(index, null, 2)}\n`);
  console.log(`Resolved ${index.counts.resolved}, unresolved ${index.counts.unresolved}`);
  if (unresolved.length) console.log(`Unresolved: ${unresolved.join(', ')}`);
}

main().catch((error) => {
  console.error(`Team index refresh FAILED: ${error.message}`);
  console.error('Previous index left intact.');
  process.exit(1);
});
