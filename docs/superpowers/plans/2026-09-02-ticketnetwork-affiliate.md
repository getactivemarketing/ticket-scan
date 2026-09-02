# TicketNetwork Affiliate Links Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Put attributed TicketNetwork affiliate links on the SEO surface — venue guides, city pages and the 160 city × category combo pages — so traffic those pages already earn can convert.

**Architecture:** A committed slug index built from TicketNetwork's public sitemaps, a server-only resolver that never invents a slug, and a first-party `/go/tn/{kind}/{slug}` redirect that rebuilds the destination server-side and wraps it in a CJ click URL. All matching and URL-building logic lives in two dependency-free `.mjs` modules so it can be tested with Node's built-in runner; the React and route layers are thin adapters over them.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind v4, Node 24 (`node --test`, no new dependencies).

**Spec:** `docs/superpowers/specs/2026-09-02-ticketnetwork-affiliate-design.md`

## Global Constraints

- **No new dependencies.** `CLAUDE.md` forbids introducing frameworks or major dependencies without discussion. Tests use Node 24's built-in `node --test`. The repo has no test framework today; Task 1 establishes one with zero packages.
- **All commands run from `web/`** unless stated otherwise. Paths in **Files:** blocks are relative to the repo root.
- **Never construct a TicketNetwork slug that is not in the index.** A fabricated slug is a 404: it earns nothing and looks broken.
- **The redirect never accepts a destination URL**, only a `kind` and a `slug`. This is what makes an open redirect impossible by construction.
- **`kind`** is exactly one of `performers`, `venues`, `category`, `top`. **`slug`** must match `/^[a-z0-9][a-z0-9-]{0,119}$/`.
- **`sid`** is sanitized to `[A-Za-z0-9_-]` and truncated to 64 characters. It carries a page identity, never a user identity — CJ prohibits PII in this field.
- **Link label is "Resale tickets"**, never "Buy tickets". TicketNetwork is a resale marketplace.
- **Every affiliate link carries `rel="sponsored nofollow noopener"` and `target="_blank"`.**
- **No CJ click domain** (`anrdoezrs.net`, `tkqlhce.com`, `jdoqocy.com`, `dpbolvw.net`, `kqzyfj.com`) may appear literally anywhere under `web/src`.
- **Absent `CJ_PID` or `CJ_TN_AID`, nothing renders and the route 404s.** The feature ships dark.
- **Styling matches each page's current surroundings.** City pages and venue guides are still Design 1.0 (`bg-white`, `shadow-md`, `bg-brand`); combo pages are 2.0 (`bg-navy-raised`, `text-bone`). Do not migrate a page inside this work.
- **`npm run check:design` must pass** before every commit from Task 11 onward.

---

### Task 1: Slug matching core

The pure functions that decide which TicketNetwork page an event points at. Everything else depends on this, and it is the only part whose correctness is genuinely uncertain, so it is tested first and hardest.

**Files:**
- Create: `web/src/lib/tn-slug.mjs`
- Create: `web/src/lib/tn-slug.test.mjs`
- Modify: `web/package.json` (add `test` script)

**Interfaces:**
- Consumes: nothing.
- Produces:
  - `normalizeName(input: string) => string`
  - `keyFromSlug(slug: string) => string`
  - `performerKeys(name: string) => string[]`
  - `resolveFromIndex(index, { name?, venue?, category? }) => { kind, slug } | null`
  - `CATEGORY_MAP: Record<string, { kind, slug }>`
  - Index shape: `{ performers: Record<key, slug>, venues: Record<key, slug> }`

- [ ] **Step 1: Write the failing test**

Create `web/src/lib/tn-slug.test.mjs`:

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  normalizeName,
  keyFromSlug,
  performerKeys,
  resolveFromIndex,
  CATEGORY_MAP,
} from './tn-slug.mjs';

test('normalizeName lowercases, strips punctuation and drops a leading "the"', () => {
  assert.equal(normalizeName('The Weeknd'), 'weeknd');
  assert.equal(normalizeName('Guns N\' Roses'), 'guns n roses');
  assert.equal(normalizeName('Beyoncé'), 'beyonce');
  assert.equal(normalizeName('AC/DC'), 'ac dc');
  assert.equal(normalizeName('  Hall   &  Oates '), 'hall and oates');
});

test('normalizeName is total — non-strings and empties do not throw', () => {
  assert.equal(normalizeName(undefined), '');
  assert.equal(normalizeName(null), '');
  assert.equal(normalizeName(''), '');
  assert.equal(normalizeName('!!!'), '');
});

test('keyFromSlug reverses a TicketNetwork slug onto the same key as the name', () => {
  assert.equal(keyFromSlug('bruno-mars-tickets'), normalizeName('Bruno Mars'));
  assert.equal(keyFromSlug('the-weeknd-tickets'), normalizeName('The Weeknd'));
  // Not every category slug ends in -tickets; only a trailing one is dropped.
  assert.equal(keyFromSlug('music-festivals'), 'music festivals');
  assert.equal(keyFromSlug('tickets-for-less-tickets'), 'tickets for less');
});

test('performerKeys splits the sports "A at B" and "A vs B" forms', () => {
  const keys = performerKeys('Chicago Bears at Green Bay Packers');
  assert.ok(keys.includes('chicago bears at green bay packers'));
  assert.ok(keys.includes('chicago bears'));
  assert.ok(keys.includes('green bay packers'));

  const vs = performerKeys('Lakers vs. Celtics');
  assert.ok(vs.includes('lakers'));
  assert.ok(vs.includes('celtics'));
});

test('performerKeys strips a tour subtitle but keeps the full name first', () => {
  const keys = performerKeys('Bruno Mars: The 24K Magic Tour');
  assert.equal(keys[0], 'bruno mars the 24k magic tour');
  assert.ok(keys.includes('bruno mars'));
});

const INDEX = {
  performers: { 'bruno mars': 'bruno-mars-tickets', 'chicago bears': 'chicago-bears-tickets' },
  venues: { 'madison square garden': 'madison-square-garden-tickets' },
};

test('resolveFromIndex prefers an exact performer match', () => {
  assert.deepEqual(
    resolveFromIndex(INDEX, { name: 'Bruno Mars', venue: 'Madison Square Garden' }),
    { kind: 'performers', slug: 'bruno-mars-tickets' },
  );
});

test('resolveFromIndex falls back through performer part, then venue, then category', () => {
  assert.deepEqual(
    resolveFromIndex(INDEX, { name: 'Chicago Bears at Green Bay Packers' }),
    { kind: 'performers', slug: 'chicago-bears-tickets' },
  );
  assert.deepEqual(
    resolveFromIndex(INDEX, { name: 'Some Unknown Act', venue: 'Madison Square Garden' }),
    { kind: 'venues', slug: 'madison-square-garden-tickets' },
  );
  assert.deepEqual(
    resolveFromIndex(INDEX, { name: 'Some Unknown Act', category: 'comedy' }),
    { kind: 'category', slug: 'comedy-tickets' },
  );
});

test('resolveFromIndex returns null rather than inventing a slug', () => {
  assert.equal(resolveFromIndex(INDEX, { name: 'Nobody At All' }), null);
  assert.equal(resolveFromIndex(INDEX, {}), null);
  assert.equal(resolveFromIndex({}, { name: 'Bruno Mars' }), null);
  assert.equal(resolveFromIndex(INDEX, { category: 'not-a-category' }), null);
});

test('every category on the site maps to a TicketNetwork page', () => {
  const ours = ['nba', 'nhl', 'concerts', 'theater', 'mlb', 'nfl', 'ufc', 'wwe', 'comedy', 'festivals', 'soccer', 'tennis', 'family'];
  for (const slug of ours) {
    assert.ok(CATEGORY_MAP[slug], `no TicketNetwork mapping for category "${slug}"`);
    assert.match(CATEGORY_MAP[slug].slug, /^[a-z0-9][a-z0-9-]*$/);
  }
});
```

- [ ] **Step 2: Run the test to verify it fails**

First add the script. In `web/package.json`, inside `"scripts"`, after the `"lint"` line:

```json
    "test": "node --test src/lib",
```

Run: `npm test`
Expected: FAIL — `Cannot find module './tn-slug.mjs'`.

- [ ] **Step 3: Write the implementation**

Create `web/src/lib/tn-slug.mjs`:

```js
// Pure, dependency-free slug matching for TicketNetwork deep links.
//
// Imported by BOTH scripts/build-tn-index.mjs (which writes the index) and
// src/lib/ticketnetwork.ts (which reads it), so the key a slug is stored
// under and the key it is looked up by cannot drift apart. If you change
// normalizeName, the index must be rebuilt.
//
// No imports, by design: this file has to run under `node --test` with no
// loader, no transpiler and no bundler.

/** Fold a performer or venue name into an index key. */
export function normalizeName(input) {
  if (typeof input !== 'string') return '';
  return input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // combining diacritics
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/^the /, '')
    .trim();
}

/**
 * Fold a TicketNetwork slug onto the same key its display name folds to.
 * Only a TRAILING "-tickets" is dropped: "music-festivals" is a real
 * category slug with no suffix, and "tickets-for-less-tickets" is a real
 * performer whose name genuinely contains the word.
 */
export function keyFromSlug(slug) {
  return normalizeName(String(slug ?? '').replace(/-tickets$/, ''));
}

/**
 * Event names are not performer names. The feeds ship "Chicago Bears at
 * Green Bay Packers" and "Bruno Mars: The 24K Magic Tour"; neither is a
 * TicketNetwork performer. Return progressively narrower candidate keys,
 * most specific first, so an exact match always wins over a fragment.
 */
export function performerKeys(name) {
  const raw = String(name ?? '');
  const keys = new Set();
  const add = (s) => {
    const k = normalizeName(s);
    if (k) keys.add(k);
  };

  add(raw);

  // "A at B", "A vs B", "A vs. B" — the home/away form every sports feed uses.
  const sides = raw.split(/\s+(?:at|vs\.?|v\.?)\s+/i);
  if (sides.length > 1) {
    add(sides[0]);
    add(sides[sides.length - 1]);
  }

  // "Performer: Tour Name", "Performer - Tour Name".
  const head = raw.split(/\s+[:–—-]\s+/)[0];
  if (head !== raw) add(head);

  return [...keys];
}

/**
 * Our category slugs to TicketNetwork pages. Every value was verified
 * present in their sitemaps on 2026-09-02. `top` is their three top-level
 * pages, which live at the root rather than under /category/.
 */
export const CATEGORY_MAP = {
  nba: { kind: 'category', slug: 'nba-tickets' },
  nhl: { kind: 'category', slug: 'sports-hockey-nhl-tickets' },
  mlb: { kind: 'category', slug: 'sports-baseball-mlb-tickets' },
  nfl: { kind: 'category', slug: 'sports-football-nfl-tickets' },
  ufc: { kind: 'category', slug: 'ufc-tickets' },
  wwe: { kind: 'category', slug: 'wwe-tickets' },
  tennis: { kind: 'category', slug: 'tennis-tickets' },
  soccer: { kind: 'category', slug: 'soccer-tickets' },
  comedy: { kind: 'category', slug: 'comedy-tickets' },
  festivals: { kind: 'category', slug: 'music-festivals' },
  family: { kind: 'category', slug: 'children-family-tickets' },
  concerts: { kind: 'top', slug: 'concert-tickets' },
  theater: { kind: 'top', slug: 'theater-tickets' },
};

/**
 * Performer, then venue, then category. Returns null rather than guessing —
 * a slug we have not seen in the index is a 404, and a 404 earns nothing.
 */
export function resolveFromIndex(index, { name, venue, category } = {}) {
  const performers = index?.performers ?? {};
  for (const key of performerKeys(name)) {
    if (performers[key]) return { kind: 'performers', slug: performers[key] };
  }

  const venueKey = normalizeName(venue);
  const venues = index?.venues ?? {};
  if (venueKey && venues[venueKey]) return { kind: 'venues', slug: venues[venueKey] };

  if (category && CATEGORY_MAP[category]) return { ...CATEGORY_MAP[category] };

  return null;
}
```

- [ ] **Step 4: Run the tests to verify they pass**

Run: `npm test`
Expected: PASS, 9 tests.

- [ ] **Step 5: Commit**

```bash
git add web/src/lib/tn-slug.mjs web/src/lib/tn-slug.test.mjs web/package.json
git commit -m "Add TicketNetwork slug matching, and a test runner to check it

Node's built-in runner, so the repo gains tests without gaining a
dependency. The matching core is a plain .mjs module for the same
reason: it has to run with no loader and no bundler.

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>"
```

---

### Task 2: CJ click URL builder

**Files:**
- Create: `web/src/lib/tn-click.mjs`
- Create: `web/src/lib/tn-click.test.mjs`

**Interfaces:**
- Consumes: nothing.
- Produces:
  - `isValidKind(kind) => boolean`
  - `isValidSlug(slug) => boolean`
  - `destinationUrl(kind, slug) => string | null`
  - `sanitizeSid(sid) => string`
  - `buildClickUrl({ pid, aid, domain?, kind, slug, sid }) => string | null`

- [ ] **Step 1: Write the failing test**

Create `web/src/lib/tn-click.test.mjs`:

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isValidKind, isValidSlug, destinationUrl, sanitizeSid, buildClickUrl } from './tn-click.mjs';

test('only the four known kinds are valid', () => {
  for (const k of ['performers', 'venues', 'category', 'top']) assert.equal(isValidKind(k), true);
  for (const k of ['', 'Performers', '../etc', 'events', undefined]) assert.equal(isValidKind(k), false);
});

test('slugs are lowercase, hyphenated and bounded', () => {
  assert.equal(isValidSlug('bruno-mars-tickets'), true);
  assert.equal(isValidSlug('nba-tickets'), true);
  for (const s of ['', '-leading', 'Upper-Case', 'has space', 'has/slash', 'has.dot', 'a'.repeat(121), undefined]) {
    assert.equal(isValidSlug(s), false, `expected ${JSON.stringify(s)} to be rejected`);
  }
});

test('destinationUrl builds ticketnetwork.com paths and nothing else', () => {
  assert.equal(destinationUrl('performers', 'bruno-mars-tickets'), 'https://www.ticketnetwork.com/performers/bruno-mars-tickets');
  assert.equal(destinationUrl('venues', 'msg-tickets'), 'https://www.ticketnetwork.com/venues/msg-tickets');
  assert.equal(destinationUrl('category', 'comedy-tickets'), 'https://www.ticketnetwork.com/category/comedy-tickets');
  assert.equal(destinationUrl('top', 'concert-tickets'), 'https://www.ticketnetwork.com/concert-tickets');
});

test('destinationUrl cannot be steered off ticketnetwork.com', () => {
  for (const [kind, slug] of [
    ['performers', '../../evil.com'],
    ['performers', 'evil.com'],
    ['https://evil.com', 'x'],
    ['top', '//evil.com'],
    ['performers', 'a/b'],
  ]) {
    assert.equal(destinationUrl(kind, slug), null, `${kind}/${slug} should not resolve`);
  }
});

test('sanitizeSid strips everything CJ disallows and caps at 64 characters', () => {
  assert.equal(sanitizeSid('combo-atlanta-comedy'), 'combo-atlanta-comedy');
  assert.equal(sanitizeSid('venue/madison sq. garden'), 'venuemadisonsqgarden');
  assert.equal(sanitizeSid('a'.repeat(80)).length, 64);
  assert.equal(sanitizeSid(undefined), '');
});

test('buildClickUrl wraps the destination with the PID, AID and sid', () => {
  const url = buildClickUrl({ pid: '1234567', aid: '98765432', kind: 'performers', slug: 'bruno-mars-tickets', sid: 'city-chicago' });
  assert.ok(url.startsWith('https://www.anrdoezrs.net/click-1234567-98765432?'));
  assert.ok(url.includes('url=https%3A%2F%2Fwww.ticketnetwork.com%2Fperformers%2Fbruno-mars-tickets'));
  assert.ok(url.includes('sid=city-chicago'));
});

test('buildClickUrl returns null when credentials or the target are missing', () => {
  const ok = { pid: '1', aid: '2', kind: 'performers', slug: 'x-tickets', sid: 's' };
  assert.equal(buildClickUrl({ ...ok, pid: undefined }), null);
  assert.equal(buildClickUrl({ ...ok, aid: '' }), null);
  assert.equal(buildClickUrl({ ...ok, kind: 'nope' }), null);
  assert.equal(buildClickUrl({ ...ok, slug: 'NOPE' }), null);
});

test('the click domain is overridable, since CJ rotates them', () => {
  const url = buildClickUrl({ pid: '1', aid: '2', domain: 'tkqlhce.com', kind: 'top', slug: 'concert-tickets' });
  assert.ok(url.startsWith('https://www.tkqlhce.com/click-1-2?'));
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test`
Expected: FAIL — `Cannot find module './tn-click.mjs'`.

- [ ] **Step 3: Write the implementation**

Create `web/src/lib/tn-click.mjs`:

```js
// Builds CJ click URLs. Pure and dependency-free so `node --test` can run it,
// and so the route handler stays a thin adapter with no logic to get wrong.

const KINDS = new Set(['performers', 'venues', 'category', 'top']);
const SLUG_RE = /^[a-z0-9][a-z0-9-]{0,119}$/;

export function isValidKind(kind) {
  return KINDS.has(kind);
}

export function isValidSlug(slug) {
  return typeof slug === 'string' && SLUG_RE.test(slug);
}

/**
 * The destination is CONSTRUCTED from a kind and a slug, never accepted as a
 * URL. There is deliberately no code path here that can emit a host supplied
 * by the caller — that is what makes /go/tn/ safe from being turned into an
 * open redirect on a domain that ranks.
 */
export function destinationUrl(kind, slug) {
  if (!isValidKind(kind) || !isValidSlug(slug)) return null;
  const path = kind === 'top' ? `/${slug}` : `/${kind}/${slug}`;
  return `https://www.ticketnetwork.com${path}`;
}

/** CJ truncates sid at 64 characters and forbids PII. Pages only, never users. */
export function sanitizeSid(sid) {
  return String(sid ?? '').replace(/[^A-Za-z0-9_-]/g, '').slice(0, 64);
}

export function buildClickUrl({ pid, aid, domain = 'anrdoezrs.net', kind, slug, sid }) {
  const destination = destinationUrl(kind, slug);
  if (!destination || !pid || !aid) return null;

  const params = new URLSearchParams({ url: destination });
  const cleanSid = sanitizeSid(sid);
  if (cleanSid) params.set('sid', cleanSid);

  return `https://www.${domain}/click-${pid}-${aid}?${params.toString()}`;
}
```

- [ ] **Step 4: Run the tests to verify they pass**

Run: `npm test`
Expected: PASS, 17 tests total across both files.

- [ ] **Step 5: Commit**

```bash
git add web/src/lib/tn-click.mjs web/src/lib/tn-click.test.mjs
git commit -m "Build CJ click URLs from a kind and a slug, never from a URL

The destination is constructed, not accepted, so there is no code path
that can emit a caller-supplied host. An open redirect on a domain that
ranks is worth real money to a phisher.

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>"
```

---

### Task 3: The index builder

**Files:**
- Create: `web/scripts/build-tn-index.mjs`
- Create: `web/src/data/ticketnetwork.generated.json` (produced by running the script)
- Modify: `web/package.json` (add `build:tn-index` script)

**Interfaces:**
- Consumes: `keyFromSlug` from `web/src/lib/tn-slug.mjs`.
- Produces: `web/src/data/ticketnetwork.generated.json` shaped `{ builtAt, counts: { performers, venues }, performers: {key: slug}, venues: {key: slug} }`.

- [ ] **Step 1: Write the script**

Create `web/scripts/build-tn-index.mjs`. Model it on `scripts/build-combo-index.mjs`, which runs on a schedule and preserves the previous file on failure for the same reason:

```js
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
import { readFileSync, writeFileSync } from 'node:fs';
import { keyFromSlug } from '../src/lib/tn-slug.mjs';

const OUT = new URL('../src/data/ticketnetwork.generated.json', import.meta.url);
const UA = 'Mozilla/5.0 (compatible; TicketScanIndexer/1.0; +https://www.ticketscan.io)';

const SOURCES = [
  { field: 'performers', prefix: '/performers/', sitemaps: ['performers'] },
  { field: 'venues', prefix: '/venues/', sitemaps: ['venues'] },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchText(url) {
  for (let attempt = 0; attempt < 4; attempt += 1) {
    const res = await fetch(url, { headers: { 'user-agent': UA } });
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

/** A sitemap family is paginated as /sitemap/<name>/1, /2, ... until one 404s. */
async function allPages(name) {
  const pages = [];
  for (let page = 1; page <= 50; page += 1) {
    const res = await fetch(`https://www.ticketnetwork.com/sitemap/${name}/${page}`, { headers: { 'user-agent': UA } });
    if (res.status === 404) break;
    if (!res.ok) throw new Error(`HTTP ${res.status} for sitemap ${name}/${page}`);
    pages.push(await res.text());
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
      for (const xml of await allPages(name)) {
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
```

- [ ] **Step 2: Add the npm script and run it**

In `web/package.json` `"scripts"`, after `"build:combos"`:

```json
    "build:tn-index": "node scripts/build-tn-index.mjs",
```

Run: `npm run build:tn-index`
Expected: `Wrote 27104 performers, 10407 venues` (counts will drift; anything in the tens of thousands and thousands respectively is correct). Takes a minute or two.

- [ ] **Step 3: Verify the output is usable**

Run:

```bash
node -e "
const i = require('./src/data/ticketnetwork.generated.json');
console.log('performers', Object.keys(i.performers).length);
console.log('venues', Object.keys(i.venues).length);
console.log('msg ->', i.venues['madison square garden']);
console.log('size', (JSON.stringify(i).length/1e6).toFixed(1)+'MB');
"
```

Expected: non-zero counts, a real slug for Madison Square Garden, and a size around 1–3MB. If the venue lookup prints `undefined`, `normalizeName` and `keyFromSlug` have drifted — fix Task 1 and rebuild rather than special-casing here.

- [ ] **Step 4: Commit**

```bash
git add web/scripts/build-tn-index.mjs web/src/data/ticketnetwork.generated.json web/package.json
git commit -m "Build the TicketNetwork slug index from their sitemaps

Committed and refreshed on a schedule, never fetched during a build. On
failure the previous index is left intact: stale links mostly still
resolve, a truncated index silently deletes revenue.

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>"
```

---

### Task 4: The server resolver

**Files:**
- Create: `web/src/lib/ticketnetwork.ts`

**Interfaces:**
- Consumes: `resolveFromIndex` from `tn-slug.mjs`; `web/src/data/ticketnetwork.generated.json`.
- Produces:
  - `type TnTarget = { kind: 'performers' | 'venues' | 'category' | 'top'; slug: string }`
  - `tnEnabled(): boolean`
  - `resolveTicketNetwork(input: { name?: string; venue?: string; category?: string }): TnTarget | null`
  - `tnHref(target: TnTarget, sid: string): string`

- [ ] **Step 1: Write the implementation**

Create `web/src/lib/ticketnetwork.ts`:

```ts
import 'server-only';
import index from '@/data/ticketnetwork.generated.json';
import { resolveFromIndex } from './tn-slug.mjs';

export type TnKind = 'performers' | 'venues' | 'category' | 'top';
export interface TnTarget {
  kind: TnKind;
  slug: string;
}

/**
 * The whole feature is gated on the CJ credentials. Absent them nothing
 * resolves, so no affiliate link can render and the site is exactly as it
 * was — which is what lets this merge before the numbers arrive.
 */
export function tnEnabled(): boolean {
  return Boolean(process.env.CJ_PID && process.env.CJ_TN_AID);
}

export function resolveTicketNetwork(input: {
  name?: string;
  venue?: string;
  category?: string;
}): TnTarget | null {
  if (!tnEnabled()) return null;
  return resolveFromIndex(index, input) as TnTarget | null;
}

/** The first-party href. Credentials never appear in rendered HTML. */
export function tnHref(target: TnTarget, sid: string): string {
  return `/go/tn/${target.kind}/${target.slug}?sid=${encodeURIComponent(sid)}`;
}
```

If TypeScript complains that `./tn-slug.mjs` has no declarations, add `web/src/lib/tn-slug.d.mts` alongside it:

```ts
export function normalizeName(input: unknown): string;
export function keyFromSlug(slug: unknown): string;
export function performerKeys(name: unknown): string[];
export const CATEGORY_MAP: Record<string, { kind: string; slug: string }>;
export function resolveFromIndex(
  index: unknown,
  input: { name?: string; venue?: string; category?: string },
): { kind: string; slug: string } | null;
```

- [ ] **Step 2: Verify it type-checks and the JSON import resolves**

Run: `npx tsc --noEmit`
Expected: no errors. If the JSON import fails, confirm `resolveJsonModule` is still true in `tsconfig.json` — `src/data/combos.ts` imports its generated JSON the same way, so the pattern is already proven in this repo.

- [ ] **Step 3: Commit**

```bash
git add web/src/lib/ticketnetwork.ts web/src/lib/tn-slug.d.mts
git commit -m "Add the server-only TicketNetwork resolver

Gated on CJ_PID and CJ_TN_AID, so with no credentials set nothing
resolves and no affiliate link can render.

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>"
```

---

### Task 5: The redirect route

**Files:**
- Create: `web/src/app/go/tn/[kind]/[slug]/route.ts`

**Interfaces:**
- Consumes: `buildClickUrl` from `tn-click.mjs`.
- Produces: `GET /go/tn/{kind}/{slug}?sid={sid}` → 302 to CJ, or 404.

- [ ] **Step 1: Write the implementation**

Create `web/src/app/go/tn/[kind]/[slug]/route.ts`:

```ts
import { buildClickUrl } from '@/lib/tn-click.mjs';

// A click is a side effect, never a cached page.
export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ kind: string; slug: string }> },
) {
  const { kind, slug } = await params;
  const sid = new URL(request.url).searchParams.get('sid') ?? '';

  const target = buildClickUrl({
    pid: process.env.CJ_PID,
    aid: process.env.CJ_TN_AID,
    domain: process.env.CJ_CLICK_DOMAIN || 'anrdoezrs.net',
    kind,
    slug,
    sid,
  });

  // No credentials, or an unrecognised kind or slug. 404 rather than falling
  // back to ticketnetwork.com unattributed: an unattributed click earns
  // nothing and would hide a broken configuration behind working links.
  if (!target) return new Response('Not found', { status: 404 });

  return new Response(null, {
    status: 302,
    headers: { location: target, 'cache-control': 'no-store' },
  });
}
```

Add `web/src/lib/tn-click.d.mts`:

```ts
export function isValidKind(kind: unknown): boolean;
export function isValidSlug(slug: unknown): boolean;
export function destinationUrl(kind: unknown, slug: unknown): string | null;
export function sanitizeSid(sid: unknown): string;
export function buildClickUrl(input: {
  pid?: string;
  aid?: string;
  domain?: string;
  kind?: string;
  slug?: string;
  sid?: string;
}): string | null;
```

- [ ] **Step 2: Verify by hand against a dev server**

The spec asks for automated tests of the route's rejection behaviour. All of that logic lives
in `buildClickUrl`, which Task 2 tests exhaustively; this handler only reads env vars and
awaits `params`. Testing the handler itself would mean resolving Next's `@/` alias and TS under
`node --test` for no additional coverage, so it is verified by hand here instead. If this file
ever grows real logic, that trade stops holding.

Run in one shell: `CJ_PID=1234567 CJ_TN_AID=98765432 npm run dev`

Then in another:

```bash
curl -sI "http://localhost:3000/go/tn/performers/bruno-mars-tickets?sid=city-chicago" | head -5
curl -sI "http://localhost:3000/go/tn/evil/x" | head -2
curl -sI "http://localhost:3000/go/tn/performers/..%2F..%2Fevil.com" | head -2
```

Expected: the first returns `HTTP/1.1 302` with a `location` of `https://www.anrdoezrs.net/click-1234567-98765432?url=https%3A%2F%2Fwww.ticketnetwork.com%2Fperformers%2Fbruno-mars-tickets&sid=city-chicago`. The second and third both return `404`.

Then stop the server, restart it with **no** `CJ_PID`, and confirm the first URL now also returns 404.

- [ ] **Step 3: Commit**

```bash
git add web/src/app/go/tn web/src/lib/tn-click.d.mts
git commit -m "Add the /go/tn redirect

404s rather than falling back to an unattributed link: an unattributed
click earns nothing and would hide a broken configuration behind links
that still appear to work.

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>"
```

---

### Task 6: The link and disclosure components

**Files:**
- Create: `web/src/components/TicketNetworkLink.tsx`
- Create: `web/src/components/AffiliateDisclosure.tsx`

**Interfaces:**
- Consumes: `resolveTicketNetwork`, `tnHref`, `TnTarget` from `@/lib/ticketnetwork`.
- Produces:
  - `<TicketNetworkLink name? venue? category? sid surface />` — renders `null` when nothing resolves.
  - `<AffiliateDisclosure surface />` — renders `null` when `tnEnabled()` is false.

- [ ] **Step 1: Write the components**

Create `web/src/components/TicketNetworkLink.tsx`:

```tsx
import { resolveTicketNetwork, tnHref } from '@/lib/ticketnetwork';

// Two visual treatments, because this component lands on both design
// generations at once: the city pages and venue guides are still 1.0
// (bg-white cards, bg-brand buttons) and the combo pages are 2.0 (navy
// grounds, Bone text). Migrating those pages is the Design 2.0 content
// pass, not this task.
const SURFACE_CLASS = {
  legacy:
    'inline-flex items-center border border-brand text-brand hover:bg-brand hover:text-white ' +
    'px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap',
  navy:
    'inline-flex items-center border border-navy-hairline text-beacon hover:border-brand ' +
    'px-3 py-1.5 rounded-[6px] text-[13px] font-medium transition-colors motion-reduce:transition-none',
} as const;

export default function TicketNetworkLink({
  name,
  venue,
  category,
  sid,
  surface = 'legacy',
  label = 'Resale tickets',
}: {
  name?: string;
  venue?: string;
  category?: string;
  sid: string;
  surface?: keyof typeof SURFACE_CLASS;
  label?: string;
}) {
  const target = resolveTicketNetwork({ name, venue, category });
  // No match, or no credentials. Render nothing rather than a link to a page
  // TicketNetwork may not have.
  if (!target) return null;

  return (
    <a
      href={tnHref(target, sid)}
      target="_blank"
      rel="sponsored nofollow noopener"
      className={SURFACE_CLASS[surface]}
    >
      {label}
    </a>
  );
}
```

Create `web/src/components/AffiliateDisclosure.tsx`:

```tsx
import { tnEnabled } from '@/lib/ticketnetwork';

// The TicketNetwork affiliate agreement requires FTC compliance, and the FTC
// standard is clear and conspicuous — next to the links, not in the footer.
const SURFACE_CLASS = {
  legacy: 'text-sm text-gray-500',
  navy: 'text-[13px] text-muted',
} as const;

export default function AffiliateDisclosure({
  surface = 'legacy',
}: {
  surface?: keyof typeof SURFACE_CLASS;
}) {
  if (!tnEnabled()) return null;

  return (
    <p className={SURFACE_CLASS[surface]}>
      Resale links are affiliate links — we may earn a commission if you buy, at no extra cost to you.
    </p>
  );
}
```

- [ ] **Step 2: Verify it type-checks**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add web/src/components/TicketNetworkLink.tsx web/src/components/AffiliateDisclosure.tsx
git commit -m "Add the resale link and its FTC disclosure

Both render null when the credentials are absent, and the link renders
null when nothing resolves, so a miss is invisible rather than broken.

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>"
```

---

### Task 7: Venue guides

The highest-quality links on the site: a venue name matches TicketNetwork's venue slugs exactly, where a performer name often will not.

**Files:**
- Modify: `web/src/app/venues/[slug]/page.tsx`

**Interfaces:**
- Consumes: `TicketNetworkLink`, `AffiliateDisclosure`.
- Produces: nothing for later tasks.

- [ ] **Step 1: Add the imports**

At the top of `web/src/app/venues/[slug]/page.tsx`, alongside the existing component imports:

```tsx
import TicketNetworkLink from '@/components/TicketNetworkLink';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
```

- [ ] **Step 2: Add the hero link**

In the hero, immediately after the closing `</p>` of the `{venue.city}, {venue.state} - Capacity:` line (around line 241), insert:

```tsx
            <div className="mb-6">
              <TicketNetworkLink
                venue={venue.name}
                sid={`venue-${slug}`}
                label={`Resale tickets for ${venue.name}`}
              />
            </div>
```

- [ ] **Step 3: Add the disclosure above the event list**

Replace the `<h2>` that reads `Upcoming Events at {venue.name}` (around line 259) and its `mb-6` with:

```tsx
              <h2 className="text-2xl font-bold font-heading text-gray-900 mb-2">
                Upcoming Events at {venue.name}
              </h2>
              <div className="mb-6">
                <AffiliateDisclosure />
              </div>
```

- [ ] **Step 4: Add the per-row link**

In the events map, inside the `<div className="flex items-center gap-4">` that holds the price and the Track Price link (around line 281), add the resale link immediately **before** the existing `<Link href="/register">`:

```tsx
                          <TicketNetworkLink
                            name={event.name}
                            venue={venue.name}
                            sid={`venue-${slug}`}
                          />
```

- [ ] **Step 5: Verify both states render**

Run: `CJ_PID=1234567 CJ_TN_AID=98765432 npm run dev`, then open `http://localhost:3000/venues/madison-square-garden`.
Expected: a "Resale tickets for Madison Square Garden" link in the hero, the disclosure line under the heading, and a "Resale tickets" link on rows whose performer or the venue resolves. Click one and confirm it 302s to `anrdoezrs.net`.

Restart with no env vars and reload.
Expected: no resale links, no disclosure line, and the page otherwise identical to before this task.

- [ ] **Step 6: Commit**

```bash
git add web/src/app/venues/\[slug\]/page.tsx
git commit -m "Put resale links on the venue guides

The venue name matches TicketNetwork's venue slugs exactly, so these are
the highest-quality links on the site.

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>"
```

---

### Task 8: City pages

**Files:**
- Modify: `web/src/app/tickets/[slug]/page.tsx`

- [ ] **Step 1: Add the imports**

```tsx
import TicketNetworkLink from '@/components/TicketNetworkLink';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
```

- [ ] **Step 2: Add the disclosure above the event list**

Immediately above the `{events.length > 0 ? (` block (around line 289), insert:

```tsx
              <div className="mb-4">
                <AffiliateDisclosure />
              </div>
```

- [ ] **Step 3: Add the per-row link**

Inside the events map, in the `<div className="flex items-center gap-4">` holding the price and Track Price link (around line 307), immediately **before** the existing `<Link href="/register">`:

```tsx
                          <TicketNetworkLink
                            name={event.name}
                            venue={event.venue}
                            sid={`city-${slug}`}
                          />
```

- [ ] **Step 4: Verify**

Run: `CJ_PID=1234567 CJ_TN_AID=98765432 npm run dev`, open `http://localhost:3000/tickets/chicago`.
Expected: the disclosure line, and resale links on rows that resolve. Some rows will have none — that is the design, not a bug. Note roughly what fraction of rows get a link; Task 12 measures this properly.

- [ ] **Step 5: Commit**

```bash
git add web/src/app/tickets/\[slug\]/page.tsx
git commit -m "Put resale links on the city pages

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>"
```

---

### Task 9: OnsaleRow action slot and the combo pages

`OnsaleRow`'s whole row is a `<Link>`, and an anchor cannot contain an anchor. The row becomes a div with a stretched-link overlay for the internal navigation, and the action renders as a sibling above it.

**Files:**
- Modify: `web/src/components/OnsaleRow.tsx`
- Modify: `web/src/app/tickets/[slug]/[category]/page.tsx`

**Interfaces:**
- Produces: `OnsaleRow` gains an optional `action?: React.ReactNode` prop. Absent, the rendered output is unchanged.

- [ ] **Step 1: Restructure OnsaleRow**

In `web/src/components/OnsaleRow.tsx`, replace the signature and the final return block. The signature becomes:

```tsx
export default function OnsaleRow({
  event,
  action,
}: {
  event: FeedEvent;
  action?: React.ReactNode;
}) {
```

And replace everything from `const shell =` to the end of the function with:

```tsx
  const shell =
    'flex items-center gap-5 rounded-[6px] bg-navy-raised px-5 py-4 transition-colors ' +
    'motion-reduce:transition-none';

  // The row used to BE the anchor. It cannot stay one: an anchor may not
  // contain an anchor, and the resale link is an anchor. The internal
  // navigation becomes a stretched overlay instead — the whole row is still
  // clickable — and the action sits above it at z-10 so it wins the click on
  // its own area. With no action passed, the rendered result is unchanged,
  // which is what keeps /onsales identical.
  if (!event.id) {
    return <div className={shell}>{body}</div>;
  }

  return (
    <div className={`${shell} group relative hover:bg-navy-raised-hover`}>
      <Link
        href={`/event/${event.id}`}
        className={`after:absolute after:inset-0 after:rounded-[6px] ${FOCUS_RING_ON_DEEP_VOID}`}
        aria-label={event.name ? `${event.name} details` : 'Event details'}
      >
        <span className="sr-only">{event.name ?? 'Event'}</span>
      </Link>
      {body}
      {action && <div className="relative z-10 flex-none">{action}</div>}
    </div>
  );
}
```

- [ ] **Step 2: Verify /onsales is unchanged**

Run: `npm run dev` and open `http://localhost:3000/onsales`.
Expected: rows look and behave exactly as before — clicking anywhere on a row still opens the event, hover still lifts one tonal step, keyboard focus still shows the ring.

- [ ] **Step 3: Pass the action on the combo pages**

In `web/src/app/tickets/[slug]/[category]/page.tsx`, add the imports:

```tsx
import TicketNetworkLink from '@/components/TicketNetworkLink';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
```

Replace the events map (line 275) with:

```tsx
              {events.map((event) => (
                <OnsaleRow
                  key={event.id}
                  event={event}
                  action={
                    <TicketNetworkLink
                      name={event.name}
                      venue={event.venue}
                      category={categorySlug}
                      sid={`combo-${citySlug}-${categorySlug}`}
                      surface="navy"
                    />
                  }
                />
              ))}
```

Then add the disclosure directly above the `<div>` that wraps that map:

```tsx
              <div className="mb-4">
                <AffiliateDisclosure surface="navy" />
              </div>
```

`citySlug` and `categorySlug` are already in scope on this page (destructured from `params` at line 157) — use them rather than reaching into the `city` and `category` objects.

- [ ] **Step 4: Verify the combo pages**

Run: `CJ_PID=1234567 CJ_TN_AID=98765432 npm run dev`, open `http://localhost:3000/tickets/atlanta/comedy`.
Expected: every row carries a resale link (the category fallback guarantees one), the disclosure reads in Signal Muted on navy, and clicking the row body still opens the event while clicking the link goes to CJ.

- [ ] **Step 5: Commit**

```bash
git add web/src/components/OnsaleRow.tsx web/src/app/tickets/\[slug\]/\[category\]/page.tsx
git commit -m "Give OnsaleRow an action slot, and use it for resale links

The row was a whole-row anchor and an anchor cannot contain an anchor.
The internal navigation becomes a stretched-link overlay; with no action
passed the output is unchanged, so /onsales is untouched.

This is deliberately NOT the shared row primitive the Design 2.0
follow-ups park — that needs one agreed data shape first.

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>"
```

---

### Task 10: Index pages and the terms disclosure

**Files:**
- Modify: `web/src/app/tickets/page.tsx`
- Modify: `web/src/app/venues/page.tsx`
- Modify: `web/src/app/terms/page.tsx`

- [ ] **Step 1: Add a category-level link to each index**

In both `web/src/app/tickets/page.tsx` and `web/src/app/venues/page.tsx`, add the imports:

```tsx
import TicketNetworkLink from '@/components/TicketNetworkLink';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
```

and place this immediately below the page's `<h1>`, using `sid="index-tickets"` on the tickets page and `sid="index-venues"` on the venues page:

```tsx
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <TicketNetworkLink category="concerts" sid="index-tickets" label="Browse resale tickets" />
          <AffiliateDisclosure />
        </div>
```

- [ ] **Step 2: Add the full statement to the terms page**

`web/src/app/terms/page.tsx` numbers its sections 1–13, with "13. Contact Us" last. Insert a
new section **before** it, and renumber Contact Us to 14:

```tsx
            <section className="mb-8">
              <h2 className="font-heading text-xl font-bold text-gray-900 mb-4">13. Affiliate Disclosure</h2>
              <p className="text-gray-600">
                Some links on Ticket Scan are affiliate links, including links to TicketNetwork, a
                resale marketplace. If you buy tickets after following one of these links we may
                earn a commission. This costs you nothing extra, and it does not affect which
                events we list, how we rank them, or the prices and price history we show.
                Affiliate links are labelled &quot;Resale tickets&quot; and marked as sponsored in
                the page markup.
              </p>
            </section>
```

Then change the final section's heading from `13. Contact Us` to `14. Contact Us`.

- [ ] **Step 3: Verify**

Run `CJ_PID=1234567 CJ_TN_AID=98765432 npm run dev` and check `/tickets`, `/venues` and `/terms`.
Expected: one resale link and the disclosure on each index; the affiliate section reads correctly on the terms page in both credential states (the terms text is static and always shows).

- [ ] **Step 4: Commit**

```bash
git add web/src/app/tickets/page.tsx web/src/app/venues/page.tsx web/src/app/terms/page.tsx
git commit -m "Add index-page resale links and the affiliate terms section

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>"
```

---

### Task 11: Checker rules

`web/scripts/check-design.mjs` expresses design rules as greppable assertions. These three make the affiliate rules mechanical.

**Files:**
- Modify: `web/scripts/check-design.mjs`

- [ ] **Step 1: Add the rules**

Append these three objects to the end of the `RULES` array in `web/scripts/check-design.mjs`, matching the file's existing `{ name, check }` shape and its `read()` helper:

```js
  {
    name: 'affiliate: no CJ click domain appears in src',
    check: () => {
      const domains = ['anrdoezrs.net', 'tkqlhce.com', 'jdoqocy.com', 'dpbolvw.net', 'kqzyfj.com'];
      const problems = [];
      for (const file of walk('src')) {
        if (!/\.(ts|tsx|mjs|js)$/.test(file)) continue;
        const src = read(file);
        const found = domains.filter((d) => src.includes(d));
        if (found.length) problems.push(`${file}: ${found.join(', ')}`);
      }
      // The redirect route builds these at runtime from env vars; a literal
      // in a page means credentials are baked into prerendered HTML.
      return problems.length ? problems.join(' | ') : null;
    },
  },
  {
    name: 'affiliate: the resale link is sponsored, nofollow and opens safely',
    check: () => {
      const src = read('src/components/TicketNetworkLink.tsx');
      if (!src.includes('rel="sponsored nofollow noopener"')) {
        return 'TicketNetworkLink must carry rel="sponsored nofollow noopener"';
      }
      if (!src.includes('target="_blank"')) return 'TicketNetworkLink must open in a new tab';
      if (src.includes('Buy tickets') || src.includes('Buy Tickets')) {
        return 'TicketNetwork is a resale marketplace; the label must say Resale, not Buy';
      }
      return null;
    },
  },
  {
    name: 'affiliate: every page with resale links also discloses them',
    check: () => {
      const problems = [];
      for (const file of walk('src/app')) {
        if (!file.endsWith('page.tsx')) continue;
        const src = read(file);
        if (src.includes('TicketNetworkLink') && !src.includes('AffiliateDisclosure')) {
          problems.push(`${file}: renders affiliate links with no FTC disclosure`);
        }
      }
      return problems.length ? problems.join(' | ') : null;
    },
  },
```

The file has no `walk()` helper. Widen its existing import (line 4) to
`import { readFileSync, readdirSync, statSync } from 'node:fs';` and add this next to `read()`:

```js
function walk(dir) {
  const out = [];
  for (const entry of readdirSync(new URL(`../${dir}/`, import.meta.url))) {
    const rel = `${dir}/${entry}`;
    const path = new URL(`../${rel}`, import.meta.url);
    if (statSync(path).isDirectory()) out.push(...walk(rel));
    else out.push(rel);
  }
  return out;
}
```

Also correct the file's header comment, which opens "There is no test runner in this project" —
Task 1 added one. It should now read that the checker covers what a unit test cannot: rules
about how files are written rather than how functions behave.

- [ ] **Step 2: Run the checker**

Run: `npm run check:design`
Expected: PASS, including the three new rules.

- [ ] **Step 3: Prove each rule actually fires**

Temporarily break each one and confirm the checker fails, then revert:
1. Add `// anrdoezrs.net` to `src/components/TicketNetworkLink.tsx` → rule 1 fails.
2. Change `rel="sponsored nofollow noopener"` to `rel="noopener"` → rule 2 fails.
3. Remove the `AffiliateDisclosure` import and usage from `src/app/tickets/[slug]/page.tsx` → rule 3 fails.

A rule that cannot fail is not a rule. Revert all three edits before committing.

- [ ] **Step 4: Commit**

```bash
git add web/scripts/check-design.mjs
git commit -m "Check the affiliate rules mechanically

No CJ domain in src, sponsored rel on the link, and no page carrying
affiliate links without an FTC disclosure. Each verified to fail when
broken.

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>"
```

---

### Task 12: Smoke script, daily refresh, and the follow-ups note

Measures the thing the spec names as the main unknown: what fraction of event rows actually resolve, and whether the links that do resolve return 200.

**Files:**
- Create: `web/scripts/smoke-tn-links.mjs`
- Modify: `web/package.json` (add `smoke:tn`)
- Modify: `marketing-agents/scripts/run-daily.sh`
- Create: `docs/superpowers/plans/2026-09-02-ticketnetwork-affiliate-followups.md`

- [ ] **Step 1: Write the smoke script**

Create `web/scripts/smoke-tn-links.mjs`:

```js
// Samples generated deep links and reports any that do not return 200.
// A silently 404ing destination earns nothing, and without this we would
// never learn it. Deliberately NOT wired into any gate: TicketNetwork being
// slow is not a reason to fail a deploy.
import index from '../src/data/ticketnetwork.generated.json' with { type: 'json' };
import { destinationUrl } from '../src/lib/tn-click.mjs';
import { CATEGORY_MAP } from '../src/lib/tn-slug.mjs';

const SAMPLE = Number(process.env.SAMPLE || 50);
const UA = 'Mozilla/5.0 (compatible; TicketScanSmoke/1.0; +https://www.ticketscan.io)';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function sample(object, n) {
  const values = Object.values(object);
  const picked = [];
  for (let i = 0; i < n && values.length; i += 1) {
    picked.push(values[Math.floor(Math.random() * values.length)]);
  }
  return picked;
}

const targets = [
  ...sample(index.performers, SAMPLE).map((slug) => ['performers', slug]),
  ...sample(index.venues, Math.ceil(SAMPLE / 2)).map((slug) => ['venues', slug]),
  ...Object.values(CATEGORY_MAP).map((t) => [t.kind, t.slug]),
];

let bad = 0;
for (const [kind, slug] of targets) {
  const url = destinationUrl(kind, slug);
  const res = await fetch(url, { headers: { 'user-agent': UA }, redirect: 'follow' });
  if (!res.ok) {
    bad += 1;
    console.log(`  ${res.status}  ${url}`);
  }
  await sleep(200);
}

console.log(`\nTN LINK SMOKE: ${targets.length - bad}/${targets.length} returned 200`);
if (bad) console.log('Non-200s above. If category links fail, the CATEGORY_MAP is stale.');
```

- [ ] **Step 2: Add the npm script and run it**

In `web/package.json` `"scripts"`:

```json
    "smoke:tn": "node scripts/smoke-tn-links.mjs",
```

Run: `npm run smoke:tn`
Expected: a high pass rate and, critically, **all 13 category links returning 200**. A failing category link means `CATEGORY_MAP` is wrong — fix it in `tn-slug.mjs` and rerun. Some sampled performers legitimately 404 as TicketNetwork retires pages; that is what the daily index refresh is for.

- [ ] **Step 3: Wire the daily refresh**

In `marketing-agents/scripts/run-daily.sh`, immediately after the `npm run build:combos` block (around line 171), add:

```bash
    # Same scheduling rationale as the combo index above: refreshed daily, left
    # uncommitted here so it flows through the COMMIT_PATHS block and inherits
    # its branch guard and push.
    ( cd "$PROJECT_DIR/web" && npm run build:tn-index ) 2>&1 | tee -a "$LOG_FILE"
    if [ "${PIPESTATUS[0]}" -ne 0 ]; then echo "WARNING: TicketNetwork index refresh failed; previous index left intact" | tee -a "$LOG_FILE"; fi
```

Then add the generated file to `COMMIT_PATHS` (around line 227):

```bash
COMMIT_PATHS=(marketing-agents/output web/src web/src/data/combos.generated.json web/src/data/ticketnetwork.generated.json)
```

- [ ] **Step 4: Write the follow-ups note**

Create `docs/superpowers/plans/2026-09-02-ticketnetwork-affiliate-followups.md`:

```markdown
# TicketNetwork affiliate — follow-ups

## Before this earns anything

1. **Confirm a TicketNetwork link ID permits deep linking.** CJ deep links only work through
   a creative that allows them. If none does, every link falls back to the category level and
   the per-row placement loses most of its value.
2. **Set `CJ_PID` and `CJ_TN_AID`** on the **`web`** Vercel project (`prj_GKAPI3uzA7IASFRHTl9RMYpaDWrB`),
   which owns `www.ticketscan.io` and `ticketscan.io` — verified 2026-09-02. Not `tickethawk`,
   which is the git-linked project and owns only `.vercel.app` URLs.
3. **Deploy `web` explicitly** or wait for the daily agent run. A git push does not update the
   live site. See the `ticketscan-deploy-split` note.
4. **Verify a real click registers in CJ** before trusting any of the reporting.

## Known and accepted

- **Match rate is unmeasured.** How often a Ticketmaster or SeatGeek event name folds onto a
  TicketNetwork performer slug is unknown. Combo pages always get a link via the category
  fallback; city pages and venue guides will have rows with none. If the performer rate is
  poor, the CJ data feed moves up the list.
- **The index goes stale between refreshes.** A performer page TicketNetwork retires becomes a
  404 that still renders until the next daily run. `npm run smoke:tn` is how you find out.
- **`marketing-agents/scripts/run-daily.sh` carries a stale comment** claiming the `web` project
  "no longer owns the live domain". It does own it, confirmed against the Vercel API on
  2026-09-02. The comment should be corrected; it was left alone here to keep this change
  focused.

## Next

The CJ **data feed**: real TicketNetwork inventory and prices, event-level deep links instead of
performer-level, and the path to TicketNetwork as a fourth priced source in compare. Explicitly
out of scope for this pass.
```

- [ ] **Step 5: Run the full check and commit**

```bash
cd web && npm test && npm run check:design && npx tsc --noEmit && npm run build
```

Expected: tests pass, checker passes, no type errors, and the build completes with the combo pages still prerendering.

```bash
cd .. && git add web/scripts/smoke-tn-links.mjs web/package.json marketing-agents/scripts/run-daily.sh docs/superpowers/plans/2026-09-02-ticketnetwork-affiliate-followups.md
git commit -m "Add the link smoke check, daily index refresh, and follow-ups

The smoke script measures the spec's main unknown: whether generated
deep links actually resolve. Not wired into any gate — TicketNetwork
being slow is not a reason to fail a deploy.

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>"
```

---

## Verification checklist

Before calling this done, with `CJ_PID` and `CJ_TN_AID` set locally:

- [ ] `npm test` passes.
- [ ] `npm run check:design` passes, and each new rule was proven to fail when broken.
- [ ] `npx tsc --noEmit` is clean.
- [ ] `npm run build` completes and still prerenders the combo pages.
- [ ] `npm run smoke:tn` shows all 13 category links returning 200.
- [ ] `/onsales` is visually and behaviourally identical to before Task 9.
- [ ] With the env vars **unset**, no resale link and no disclosure renders anywhere, and `/go/tn/performers/bruno-mars-tickets` returns 404.
- [ ] `/go/tn/evil/x` and a slug containing `../` both return 404.
- [ ] A resale link's `rel` is `sponsored nofollow noopener` in the rendered HTML (view source, do not trust the JSX).
