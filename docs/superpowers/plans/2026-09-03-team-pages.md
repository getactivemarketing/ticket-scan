# Team Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A page per team keyed on `attractionId` rather than city, so the site covers inventory the city-keyed pages structurally cannot reach.

**Architecture:** A roster seed generated once from Ticketmaster and then owned by hand; a committed index resolving each team to a Ticketmaster `attractionId` and a TicketNetwork performer slug; one new backend parameter; and a `/teams/[slug]` page built from the combo page's construction. Resolution logic lives in a dependency-free `.mjs` module so Node's built-in test runner can cover the disambiguation that is this feature's only invisible failure mode.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind v4, Node 24 (`node --test`, no new dependencies).

**Spec:** `docs/superpowers/specs/2026-09-03-team-pages-design.md`

## Global Constraints

- **No new npm dependencies.** `CLAUDE.md` forbids frameworks or major dependencies without discussion. Tests use `node --test`; the suite currently reports 17 passing.
- **All npm commands run from `web/`** unless stated. Paths in **Files:** blocks are relative to the repo root.
- **Never guess an attraction id.** A wrong id does not error — it renders a working page showing another entity's events. Candidates are filtered by classification and ranked by upcoming-event count; a team with no qualifying candidate is **omitted from the index**, never guessed.
- **Every page must carry team-specific facts** — home venue, capacity, real schedule, onsale status, price range. Not adjectives rearranged 250 times.
- **The seed is generated once, reviewed, then owned by hand.** It is never regenerated on a schedule; only `teams.generated.json` refreshes.
- **Index builders run on a schedule, never at build time**, and leave the previous index intact on any failure.
- **Ticketmaster allows 5,000 calls/day.** Current worst case is ~1,920 (24 city pages hourly, 180 combos 6-hourly, 25 venue pages hourly, onsales hourly). Team pages use `revalidate = 21600` (6h); at ~250 pages that adds ~1,000/day for a ~2,900 total. Do not shorten this window.
- **Affiliate rules carry over:** links are `rel="sponsored nofollow noopener"`, labelled "Resale tickets" never "Buy tickets", and any page rendering `TicketNetworkLink` must also render `AffiliateDisclosure` (an existing checker rule enforces this).
- **`npm run check:design` must pass** (currently 21 invariants) before every commit.

---

### Task 1: Team resolution logic

The only part of this feature whose correctness is genuinely uncertain, so it is built first and tested hardest. A wrong attraction id is invisible in production.

**Files:**
- Create: `web/src/lib/team-resolve.mjs`
- Create: `web/src/lib/team-resolve.test.mjs`

**Interfaces:**
- Consumes: nothing.
- Produces:
  - `LEAGUE_CLASSIFICATION: Record<string, { genre: string, subGenre: string }>`
  - `pickAttraction(candidates, league) => candidate | null`
  - `teamSlug(name) => string`

- [ ] **Step 1: Write the failing test**

Create `web/src/lib/team-resolve.test.mjs`:

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { LEAGUE_CLASSIFICATION, pickAttraction, teamSlug } from './team-resolve.mjs';

// Shapes mirror Ticketmaster's attractions payload, trimmed to what we use.
const att = (name, genre, subGenre, upcoming, id) => ({
  id,
  name,
  upcomingEvents: { _total: upcoming },
  classifications: [{ genre: { name: genre }, subGenre: { name: subGenre } }],
});

test('every league we seed has a classification', () => {
  for (const league of ['nfl', 'nba', 'nhl', 'mlb', 'college-football']) {
    assert.ok(LEAGUE_CLASSIFICATION[league], `no classification for ${league}`);
    assert.ok(LEAGUE_CLASSIFICATION[league].genre);
    assert.ok(LEAGUE_CLASSIFICATION[league].subGenre);
  }
});

test('rejects a same-named act from the wrong classification', () => {
  // Real case: Ticketmaster returns a Pop/Electro Pop act called
  // "The Dallas Cowboys" alongside the NFL team.
  const candidates = [
    att('The Dallas Cowboys', 'Pop', 'Electro Pop', 0, 'K8vZ917Ok3V'),
    att('Dallas Cowboys', 'Football', 'NFL', 16, 'K8vZ9171oG0'),
  ];
  assert.equal(pickAttraction(candidates, 'nfl').id, 'K8vZ9171oG0');
});

test('prefers the candidate with more upcoming events within the right class', () => {
  // Real case: "Ohio State Buckeyes Football" (13 upcoming) vs a thinner
  // "Ohio State Buckeyes" entry.
  const candidates = [
    att('Ohio State Buckeyes', 'Football', 'College', 1, 'THIN'),
    att('Ohio State Buckeyes Football', 'Football', 'College', 13, 'FULL'),
  ];
  assert.equal(pickAttraction(candidates, 'college-football').id, 'FULL');
});

test('returns null rather than guessing when nothing qualifies', () => {
  const candidates = [att('Some Band', 'Pop', 'Electro Pop', 40, 'BAND')];
  assert.equal(pickAttraction(candidates, 'nfl'), null);
  assert.equal(pickAttraction([], 'nfl'), null);
  assert.equal(pickAttraction(null, 'nfl'), null);
  assert.equal(pickAttraction([att('X', 'Football', 'NFL', 1, 'Y')], 'not-a-league'), null);
});

test('does not confuse the two football subgenres', () => {
  const candidates = [
    att('Michigan Wolverines Football', 'Football', 'College', 7, 'COLLEGE'),
    att('Detroit Lions', 'Football', 'NFL', 12, 'NFL'),
  ];
  assert.equal(pickAttraction(candidates, 'college-football').id, 'COLLEGE');
  assert.equal(pickAttraction(candidates, 'nfl').id, 'NFL');
});

test('tolerates malformed candidates without throwing', () => {
  const candidates = [
    {},
    { name: 'No classifications' },
    { name: 'Empty', classifications: [] },
    att('Dallas Cowboys', 'Football', 'NFL', 16, 'GOOD'),
  ];
  assert.equal(pickAttraction(candidates, 'nfl').id, 'GOOD');
});

test('teamSlug produces stable url-safe slugs', () => {
  assert.equal(teamSlug('Dallas Cowboys'), 'dallas-cowboys');
  assert.equal(teamSlug('Texas A&M Aggies'), 'texas-am-aggies');
  assert.equal(teamSlug('Ohio State Buckeyes Football'), 'ohio-state-buckeyes-football');
  assert.equal(teamSlug('  San Francisco 49ers '), 'san-francisco-49ers');
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test`
Expected: FAIL — `Cannot find module './team-resolve.mjs'`.

- [ ] **Step 3: Write the implementation**

Create `web/src/lib/team-resolve.mjs`:

```js
// Picks the right Ticketmaster attraction for a team.
//
// This is the feature's only invisible failure mode. A wrong attraction id
// does not error: the page renders, it just lists somebody else's events.
// Ticketmaster really does return a Pop/Electro Pop act named "The Dallas
// Cowboys", and really does carry both "Ohio State Buckeyes" and "Ohio State
// Buckeyes Football". So we filter by classification first and only then
// prefer the busier candidate — and return null rather than guess.
//
// No imports, by design: this has to run under `node --test` with no loader.

export const LEAGUE_CLASSIFICATION = {
  nfl: { genre: 'Football', subGenre: 'NFL' },
  'college-football': { genre: 'Football', subGenre: 'College' },
  nba: { genre: 'Basketball', subGenre: 'NBA' },
  nhl: { genre: 'Hockey', subGenre: 'NHL' },
  mlb: { genre: 'Baseball', subGenre: 'MLB' },
};

const upcoming = (a) => (a && a.upcomingEvents && Number(a.upcomingEvents._total)) || 0;

function matchesClass(attraction, want) {
  const list = (attraction && attraction.classifications) || [];
  return list.some((c) => {
    const genre = c && c.genre && c.genre.name;
    const subGenre = c && c.subGenre && c.subGenre.name;
    return genre === want.genre && subGenre === want.subGenre;
  });
}

/**
 * Returns the best attraction for `league`, or null when none qualifies.
 * Never falls back to "the first result" — that is how a band becomes a team.
 */
export function pickAttraction(candidates, league) {
  const want = LEAGUE_CLASSIFICATION[league];
  if (!want || !Array.isArray(candidates)) return null;

  const qualified = candidates.filter((c) => matchesClass(c, want));
  if (!qualified.length) return null;

  // Ties broken by id so a rebuild picks the same one every time.
  qualified.sort((a, b) => upcoming(b) - upcoming(a) || String(a.id).localeCompare(String(b.id)));
  return qualified[0];
}

/** Stable, url-safe slug. Mirrors the slug style used across the site's data files. */
export function teamSlug(name) {
  return String(name ?? '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
```

- [ ] **Step 4: Run the tests to verify they pass**

Run: `npm test`
Expected: PASS, 24 tests total (17 existing + 7 new).

- [ ] **Step 5: Commit**

```bash
git add web/src/lib/team-resolve.mjs web/src/lib/team-resolve.test.mjs
git commit -m "Add team attraction resolution, classification-first

A wrong attraction id is this feature's only invisible failure: the page
renders and simply lists another entity's events. Ticketmaster really
does return a Pop/Electro Pop act named 'The Dallas Cowboys'. So filter
by classification before preferring the busier candidate, and return null
rather than guess.

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>"
```

---

### Task 2: The roster seed

**Files:**
- Create: `web/scripts/seed-teams.mjs`
- Create: `web/src/data/teams.ts` (produced by running the script, then reviewed)

**Interfaces:**
- Consumes: `LEAGUE_CLASSIFICATION`, `pickAttraction`, `teamSlug` from `team-resolve.mjs`.
- Produces:
  - `export interface Team { slug: string; name: string; league: string; homeVenueSlug?: string }`
  - `export const teams: Record<string, Team>`
  - `getTeamBySlug(slug): Team | undefined`
  - `getAllTeams(): Team[]`
  - `getTeamsByLeague(league): Team[]`

- [ ] **Step 1: Write the seed script**

Create `web/scripts/seed-teams.mjs`. This runs ONCE. Its output is reviewed by a human and committed as source; it is never wired into the daily run.

```js
// Generates the initial roster seed by walking Ticketmaster's attractions for
// each league classification. Run once, review the output, commit it as
// src/data/teams.ts, then own that file by hand.
//
// Deliberately NOT scheduled: regenerating rosters on every run is what makes
// resolution depend on whatever the attractions endpoint ranks highest today.
import { writeFileSync } from 'node:fs';
import { LEAGUE_CLASSIFICATION, teamSlug } from '../src/lib/team-resolve.mjs';

const KEY = process.env.TICKETMASTER_API_KEY;
if (!KEY) {
  console.error('TICKETMASTER_API_KEY is required. Export it from the repo root .env.');
  process.exit(1);
}

const OUT = new URL('../src/data/teams.ts', import.meta.url);
const COLLEGE_MIN_EVENTS = 3;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function attractionsPage(league, page) {
  const { genre, subGenre } = LEAGUE_CLASSIFICATION[league];
  const url =
    `https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=${KEY}` +
    `&classificationName=${encodeURIComponent(subGenre)}` +
    `&size=200&page=${page}&countryCode=US`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${league} page ${page}`);
  const json = await res.json();
  const list = (json._embedded && json._embedded.attractions) || [];
  return list.filter((a) =>
    (a.classifications || []).some(
      (c) => c.genre && c.genre.name === genre && c.subGenre && c.subGenre.name === subGenre,
    ),
  );
}

async function collect(league) {
  const out = [];
  for (let page = 0; page < 5; page += 1) {
    const list = await attractionsPage(league, page);
    if (!list.length) break;
    out.push(...list);
    await sleep(250);
  }
  const min = league === 'college-football' ? COLLEGE_MIN_EVENTS : 1;
  const seen = new Set();
  return out
    .filter((a) => ((a.upcomingEvents && a.upcomingEvents._total) || 0) >= min)
    .filter((a) => {
      const s = teamSlug(a.name);
      if (!s || seen.has(s)) return false;
      seen.add(s);
      return true;
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

const entries = [];
for (const league of Object.keys(LEAGUE_CLASSIFICATION)) {
  const list = await collect(league);
  console.log(`${league}: ${list.length}`);
  for (const a of list) entries.push({ slug: teamSlug(a.name), name: a.name, league });
}

const body = entries
  .map(
    (t) =>
      `  '${t.slug}': { slug: '${t.slug}', name: ${JSON.stringify(t.name)}, league: '${t.league}' },`,
  )
  .join('\n');

writeFileSync(
  OUT,
  `// Roster seed. Generated once by scripts/seed-teams.mjs, reviewed by hand, and
// owned by hand from then on — it is NOT regenerated on a schedule. Only
// teams.generated.json refreshes. Add homeVenueSlug where a venue guide exists
// in src/data/venues.ts; the team page links to it.
export interface Team {
  slug: string;
  name: string;
  league: string;
  /** Slug in src/data/venues.ts, when this team's home venue has a guide. */
  homeVenueSlug?: string;
}

export const teams: Record<string, Team> = {
${body}
};

export function getTeamBySlug(slug: string): Team | undefined {
  return teams[slug];
}

export function getAllTeams(): Team[] {
  return Object.values(teams);
}

export function getTeamsByLeague(league: string): Team[] {
  return getAllTeams().filter((t) => t.league === league);
}
`,
);
console.log(`Wrote ${entries.length} teams`);
```

- [ ] **Step 2: Run it and review the output**

Run from `web/`:

```bash
TICKETMASTER_API_KEY=$(grep -hoE "TICKETMASTER[A-Z_]*=.*" ../.env | head -1 | cut -d= -f2 | tr -d '"'"'"' ') node scripts/seed-teams.mjs
```

Expected: roughly 32 NFL, 30 NBA, 32 NHL, 30 MLB and 40–80 college-football entries.

**Now actually read the file.** This is the review the spec requires, and it is the point of seeding once rather than deriving continuously. Check for and delete: entries that are clearly not teams, duplicates that survived slugging, and anything whose league looks wrong. Report in your task report how many entries you removed and why. If the totals are wildly off the numbers above (say NFL returns 12 or 300), stop and report rather than committing.

- [ ] **Step 3: Add home venue links**

`src/data/venues.ts` defines 25 venues, each with a `homeTeams` array. For every venue that lists a team, set that team's `homeVenueSlug` to the venue's key. Read the venue file and do this by matching `homeTeams` names against team names — do not guess from memory.

- [ ] **Step 4: Verify it compiles and the accessors work**

Run: `npx tsc --noEmit`
Expected: clean.

Run:

```bash
node --input-type=module -e "
const m = await import('./src/data/teams.ts');
console.log('total', m.getAllTeams().length);
for (const l of ['nfl','nba','nhl','mlb','college-football']) console.log(l, m.getTeamsByLeague(l).length);
console.log('with venue guide', m.getAllTeams().filter(t=>t.homeVenueSlug).length);
"
```

Expected: sensible per-league counts and a non-zero venue-guide count.

- [ ] **Step 5: Commit**

```bash
git add web/scripts/seed-teams.mjs web/src/data/teams.ts
git commit -m "Seed the team roster, reviewed by hand

Generated once from Ticketmaster's attractions by league classification,
then read and corrected. Rosters are stable and finite, so this is source
from here on — regenerating it on a schedule is what would make the site
depend on whatever the attractions endpoint ranks highest that day.

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>"
```

---

### Task 3: The resolution index

**Files:**
- Create: `web/scripts/build-team-index.mjs`
- Create: `web/src/data/teams.generated.json` (produced by running the script)
- Modify: `web/package.json` (add `build:teams`)

**Interfaces:**
- Consumes: `pickAttraction`, `LEAGUE_CLASSIFICATION` from `team-resolve.mjs`; `normalizeName` from `tn-slug.mjs`; `teams.ts`; `ticketnetwork.generated.json`.
- Produces: `teams.generated.json` shaped `{ builtAt, counts: { resolved, unresolved }, teams: { [slug]: { attractionId, tnSlug?: string } } }`.

- [ ] **Step 1: Write the builder**

Create `web/scripts/build-team-index.mjs`. Model it on `scripts/build-tn-index.mjs`, which already solves the same problem — a scheduled index that must never truncate.

```js
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

if (!seeded.length) throw new Error('parsed zero teams from teams.ts — refusing to write an empty index');

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
```

- [ ] **Step 2: Add the npm script and run it**

In `web/package.json` `"scripts"`, after `"build:tn-index"`:

```json
    "build:teams": "node scripts/build-team-index.mjs",
```

Run from `web/`:

```bash
TICKETMASTER_API_KEY=$(grep -hoE "TICKETMASTER[A-Z_]*=.*" ../.env | head -1 | cut -d= -f2 | tr -d '"'"'"' ') npm run build:teams
```

Expected: most teams resolved, a small unresolved list. Report both counts and the unresolved slugs.

- [ ] **Step 3: Spot-check the resolution**

Run:

```bash
node -e "
const i = require('./src/data/teams.generated.json');
console.log('dallas-cowboys ->', JSON.stringify(i.teams['dallas-cowboys']));
console.log('with tnSlug:', Object.values(i.teams).filter(t=>t.tnSlug).length, 'of', Object.keys(i.teams).length);
"
```

Expected: `dallas-cowboys` resolves to attraction `K8vZ9171oG0` (verified 2026-09-03), and most teams carry a `tnSlug`. If `dallas-cowboys` resolves to a different id, STOP — that is the disambiguation failing, and it is exactly the invisible bug this design exists to prevent.

- [ ] **Step 4: Record affiliate coverage**

The spec asks for a test that the seed maps to TicketNetwork slugs. That cannot be a unit test
here: the mapping is data, not logic, and it changes whenever either index refreshes. Instead
the builder already counts it, Step 3 prints it, and Task 8 records the teams lacking a `tnSlug`
in the follow-ups note. Report the number in your task report. Teams without a `tnSlug` still get
a page and still get per-row links; they lose only the team-level affiliate link.

- [ ] **Step 5: Commit**

```bash
git add web/scripts/build-team-index.mjs web/src/data/teams.generated.json web/package.json
git commit -m "Resolve teams to attraction ids and TicketNetwork slugs

Unresolved teams are omitted rather than guessed: a wrong attraction id
renders a working page listing another entity's events, which no test or
error would catch.

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>"
```

---

### Task 4: The backend parameter

**Files:**
- Modify: `index.js` (the `/api/public/events` filter block)

**Interfaces:**
- Produces: `/api/public/events?attractionId=<id>` returns that attraction's events.

- [ ] **Step 1: Add the parameter**

In `index.js`, the handler destructures its query near the top of `/api/public/events`:

```js
const { venue, city, category, onsaleDate, country, sort, limit = 10 } = req.query;
```

Add `attractionId`:

```js
const { venue, city, category, attractionId, onsaleDate, country, sort, limit = 10 } = req.query;
```

Then, in the filter block alongside the existing `venue` and `city` handling, add:

```js
    // Keyed on who is playing rather than where. NFL stadiums sit in suburbs —
    // Arlington, East Rutherford, Foxborough — so a city filter returns zero
    // for the biggest markets while the attraction returns the whole schedule.
    if (attractionId) {
      if (/^[A-Za-z0-9]{1,40}$/.test(attractionId)) tmParams.attractionId = attractionId;
      else invalid.push({ param: 'attractionId', value: attractionId, valid: ['alphanumeric Ticketmaster attraction id'] });
    }
```

- [ ] **Step 2: Verify syntax and behaviour locally**

Run from the repo root: `node --check index.js`
Expected: no output.

The endpoint cannot be exercised locally without the API's database, so verification happens against the deployed API in Task 8 after this ships. Note that in your report rather than claiming it was tested here.

- [ ] **Step 3: Commit**

```bash
git add index.js
git commit -m "Let the events endpoint filter by attraction

Keyed on who is playing rather than where. The city filter returns zero
NFL events for New York, Dallas, Boston, Los Angeles, San Francisco and
Washington, because those stadiums are in suburbs; the attraction returns
the full schedule, home and away.

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>"
```

---

### Task 5: The team page

**Files:**
- Create: `web/src/app/teams/[slug]/page.tsx`

**Interfaces:**
- Consumes: `getTeamBySlug`, `Team` from `@/data/teams`; `teams.generated.json`; `OnsaleRow`, `TicketNetworkLink`, `AffiliateDisclosure`; `findVenue` from `@/data/venues`; `cleanEvents`, `FeedEvent` from `@/lib/events`.
- Produces: the `/teams/[slug]` route.

- [ ] **Step 1: Write the page**

Create `web/src/app/teams/[slug]/page.tsx`. Read `web/src/app/tickets/[slug]/[category]/page.tsx` first and follow its construction exactly — the paced fetch, the metadata shape, the JSON-LD block, the light page ground with navy `OnsaleRow` cards.

```tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTeamBySlug } from '@/data/teams';
import { venues } from '@/data/venues';
import { FeedEvent, cleanEvents } from '@/lib/events';
import teamIndex from '@/data/teams.generated.json';
import OnsaleRow from '@/components/OnsaleRow';
import TicketNetworkLink from '@/components/TicketNetworkLink';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';

// Six hours, matching the combo pages. Ticketmaster allows 5,000 calls/day;
// the site's current worst case is ~1,920 and ~250 team pages on this window
// add ~1,000. A shorter window would not fit.
export const revalidate = 21600;

interface PageProps {
  params: Promise<{ slug: string }>;
}

const RESOLVED: Record<string, { attractionId: string; tnSlug?: string }> = teamIndex.teams;

// Football only. A cold build already prerenders 304 pages against a feed with
// a 5 req/s spike arrest; prerendering every league would roughly double that
// against a limit that has already broken one deploy. The rest render on
// demand and are cached for the revalidate window.
export async function generateStaticParams() {
  return Object.keys(RESOLVED)
    .filter((slug) => {
      const t = getTeamBySlug(slug);
      return t && (t.league === 'nfl' || t.league === 'college-football');
    })
    .map((slug) => ({ slug }));
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://tickethawk-api-production.up.railway.app';

let gate: Promise<void> = Promise.resolve();
function paced<T>(fn: () => Promise<T>): Promise<T> {
  const run = gate.then(fn);
  const cool = () => new Promise<void>((r) => setTimeout(r, 220));
  gate = run.then(cool, cool);
  return run;
}

async function getEvents(attractionId: string): Promise<FeedEvent[]> {
  const url = `${API_URL}/api/public/events?attractionId=${attractionId}&limit=40&sort=date`;
  // Rethrows deliberately. Swallowing it would let ISR cache a wrong "no games
  // scheduled" page for six hours; a sustained outage should fail loudly.
  const res = await paced(() => fetch(url, { next: { revalidate } }));
  if (!res.ok) throw new Error(`HTTP ${res.status} for attraction ${attractionId}`);
  const data = await res.json();
  return cleanEvents(data.events || []);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const team = getTeamBySlug(slug);
  if (!team || !RESOLVED[slug]) return {};
  return {
    title: `${team.name} Tickets — Schedule and Onsale Dates | Ticket Scan`,
    description: `Every upcoming ${team.name} game, home and away, with onsale and presale dates and where to buy.`,
    alternates: { canonical: `https://www.ticketscan.io/teams/${slug}` },
  };
}

export default async function TeamPage({ params }: PageProps) {
  const { slug } = await params;
  const team = getTeamBySlug(slug);
  const resolved = RESOLVED[slug];
  if (!team || !resolved) notFound();

  const events = await getEvents(resolved.attractionId);
  const homeVenue = team.homeVenueSlug ? venues[team.homeVenueSlug] : undefined;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SportsTeam',
    name: team.name,
    url: `https://www.ticketscan.io/teams/${slug}`,
    ...(homeVenue
      ? { location: { '@type': 'Place', name: homeVenue.name, address: `${homeVenue.city}, ${homeVenue.state}` } }
      : {}),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-br from-navy via-brand to-teal text-white py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">{team.name} Tickets</h1>
            {homeVenue && (
              <p className="text-xl text-blue-100">
                Home: {homeVenue.name} — {homeVenue.city}, {homeVenue.state} · Capacity{' '}
                {homeVenue.capacity.toLocaleString()}
              </p>
            )}
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <TicketNetworkLink name={team.name} sid={`team-${slug}`} label={`Resale tickets for ${team.name}`} />
            <AffiliateDisclosure />
          </div>

          {events.length > 0 ? (
            <>
              <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">
                Upcoming {team.name} games
              </h2>
              <div className="space-y-3">
                {events.map((event) => (
                  <OnsaleRow
                    key={event.id}
                    event={event}
                    action={
                      <TicketNetworkLink
                        name={team.name}
                        venue={event.venue}
                        sid={`team-${slug}`}
                        surface="navy"
                      />
                    }
                  />
                ))}
              </div>
            </>
          ) : (
            // Offseason. Render rather than 404: the URL stays indexed, the
            // team-level resale link still works, and the venue content is
            // evergreen. The schedule section is omitted, never rendered empty.
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-xl font-bold font-heading text-gray-900 mb-2">
                No {team.name} games scheduled yet
              </h2>
              <p className="text-gray-600">
                The schedule for the next season has not been released. Resale listings are
                available now for games as they are announced.
              </p>
            </div>
          )}

          <div className="mt-10 flex flex-wrap gap-4 text-sm">
            {homeVenue && (
              <Link href={`/venues/${team.homeVenueSlug}`} className="text-brand hover:text-brand-dark font-medium">
                {homeVenue.name} seating guide →
              </Link>
            )}
            {homeVenue && (
              <Link href={`/tickets/${homeVenue.citySlug ?? homeVenue.city.toLowerCase().replace(/\s+/g, '-')}`} className="text-brand hover:text-brand-dark font-medium">
                More in {homeVenue.city} →
              </Link>
            )}
            <Link href={`/tickets/${team.league}`} className="text-brand hover:text-brand-dark font-medium">
              All {team.league.toUpperCase().replace('-', ' ')} tickets →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
```

- [ ] **Step 2: Verify it type-checks**

Run: `npx tsc --noEmit`
Expected: clean. `src/data/venues.ts` exports `venues` as a `Record<string, Venue>` at line 26, so the lookup above works as written; it also exports `getVenueBySlug`, `findVenue`, `getAllVenues` and `tierPricing` if you need them. Do not add a new export.

- [ ] **Step 3: Verify in a browser**

Run: `CJ_PID=1234567 CJ_TN_AID=98765432 npm run dev` on a port other than 3000 (3000 is an unrelated pre-existing process; kill only your own by PID).

Check `/teams/dallas-cowboys`:
- the schedule lists home games at AT&T Stadium in Arlington **and** away games at other stadiums — this is the whole point of the design;
- the team-level resale link and the disclosure render;
- each row carries a resale link;
- the venue, city and league links resolve to real pages.

Check a team with no upcoming games (pick one from a league out of season) and confirm the offseason panel renders instead of an empty list.

- [ ] **Step 4: Commit**

```bash
git add web/src/app/teams
git commit -m "Add the team page

Keyed on attraction rather than city, so the Cowboys page lists games at
AT&T Stadium in Arlington alongside every away game — inventory the
city-keyed pages structurally cannot reach.

Prerenders football only; the other leagues render on demand. A cold
build already prerenders 304 pages against a rate-limited feed.

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>"
```

---

### Task 6: The teams index, and sitemap entries

**This task adds a `/teams` index the spec does not name.** Without it every team page is orphaned — reachable only from the sitemap, with no internal link path from the site itself. That is a poor crawl signal for ~250 pages whose entire purpose is to rank. Flagged as an addition rather than smuggled in.

**Files:**
- Create: `web/src/app/teams/page.tsx`
- Modify: `web/src/app/sitemap.ts`

- [ ] **Step 1: Write the index page**

Create `web/src/app/teams/page.tsx`, listing resolved teams grouped by league, following the construction of `web/src/app/venues/page.tsx`:

```tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { getAllTeams } from '@/data/teams';
import teamIndex from '@/data/teams.generated.json';

export const metadata: Metadata = {
  title: 'Team Tickets — Schedules and Onsale Dates | Ticket Scan',
  description: 'Every team we track, with full schedules, onsale and presale dates, and where to buy.',
  alternates: { canonical: 'https://www.ticketscan.io/teams' },
};

const LEAGUE_NAMES: Record<string, string> = {
  nfl: 'NFL',
  'college-football': 'College Football',
  nba: 'NBA',
  nhl: 'NHL',
  mlb: 'MLB',
};

export default function TeamsIndex() {
  const resolved = new Set(Object.keys(teamIndex.teams));
  const byLeague = Object.keys(LEAGUE_NAMES).map((league) => ({
    league,
    teams: getAllTeams()
      .filter((t) => t.league === league && resolved.has(t.slug))
      .sort((a, b) => a.name.localeCompare(b.name)),
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-navy via-brand to-teal text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold font-heading">Teams</h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {byLeague.map(({ league, teams }) =>
          teams.length ? (
            <section key={league} className="mb-10">
              <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">
                {LEAGUE_NAMES[league]}
              </h2>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {teams.map((t) => (
                  <li key={t.slug} className="bg-white rounded-lg p-4">
                    <Link href={`/teams/${t.slug}`} className="text-brand hover:text-brand-dark font-medium">
                      {t.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null,
        )}
      </div>
    </div>
  );
}
```

Note this page renders no `TicketNetworkLink`, so it needs no `AffiliateDisclosure` — the checker rule only binds pages that carry affiliate links.

- [ ] **Step 2: Add sitemap entries**

`web/src/app/sitemap.ts` already builds `venuePages`, `cityPages`, `categoryPages` and `comboPages` the same way. Add an import and a block matching the file's existing style, then spread it into the returned array beside the others:

```ts
import teamIndex from '@/data/teams.generated.json';

  // Only teams present in the generated index. An unresolved team has no page,
  // and advertising a URL that 404s is worse than omitting it. Dated from the
  // index's own build stamp, the way comboPages uses comboIndexGeneratedAt,
  // rather than the static CONTENT_LAST_MODIFIED — this data really does change.
  const teamLastModified = new Date(teamIndex.builtAt);
  const teamPages: MetadataRoute.Sitemap = Object.keys(teamIndex.teams).map((slug) => ({
    url: `${BASE_URL}/teams/${slug}`,
    lastModified: teamLastModified,
    changeFrequency: 'daily' as const,
    priority: 0.6,
  }));
```

The file defines `BASE_URL` at line 9, a static `CONTENT_LAST_MODIFIED` at line 17 for data files with no date of their own, and `comboLastModified` at line 127 derived from the combo index's generation stamp. Teams follow the combo pattern, not the static one. Spread `teamPages` into the returned array beside `comboPages`, and add a `/teams` entry to `staticPages` using `CONTENT_LAST_MODIFIED`.

- [ ] **Step 3: Verify**

Run: `npx tsc --noEmit` (clean), then `npm run dev` and check `/teams` lists teams grouped by league, each linking to a working page.

Run: `curl -s localhost:PORT/sitemap.xml | grep -c "/teams/"` and confirm it matches the resolved team count.

- [ ] **Step 4: Commit**

```bash
git add web/src/app/teams/page.tsx web/src/app/sitemap.ts
git commit -m "Add the teams index and sitemap entries

Without an index every team page is orphaned, reachable only from the
sitemap. Only teams present in the generated index are listed or
advertised — an unresolved team has no page, and a sitemap URL that 404s
is worse than an omission.

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>"
```

---

### Task 7: Resolution smoke check

The spec names wrong attraction ids as the worst failure because they are invisible. This is the check that would catch one.

**Files:**
- Create: `web/scripts/smoke-teams.mjs`
- Modify: `web/package.json` (add `smoke:teams`)

- [ ] **Step 1: Write the script**

Create `web/scripts/smoke-teams.mjs`:

```js
// Samples resolved teams and asserts each attraction's events actually belong
// to that team's league. A wrong attraction id renders a working page listing
// someone else's events — no test or error catches that, so this does.
//
// Not wired into any gate: Ticketmaster being slow is not a reason to fail a
// deploy.
import { readFileSync } from 'node:fs';
import { LEAGUE_CLASSIFICATION } from '../src/lib/team-resolve.mjs';

const KEY = process.env.TICKETMASTER_API_KEY;
if (!KEY) { console.error('TICKETMASTER_API_KEY is required.'); process.exit(1); }

const index = JSON.parse(readFileSync(new URL('../src/data/teams.generated.json', import.meta.url), 'utf8'));
const src = readFileSync(new URL('../src/data/teams.ts', import.meta.url), 'utf8');
const leagueOf = {};
for (const m of src.matchAll(/^\s*'([a-z0-9-]+)': \{ slug: '[a-z0-9-]+', name: "(?:[^"\\]|\\.)*", league: '([a-z-]+)'/gm)) {
  leagueOf[m[1]] = m[2];
}

const SAMPLE = Number(process.env.SAMPLE || 25);
const slugs = Object.keys(index.teams).sort(() => Math.random() - 0.5).slice(0, SAMPLE);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let bad = 0;
for (const slug of slugs) {
  const { attractionId } = index.teams[slug];
  const want = LEAGUE_CLASSIFICATION[leagueOf[slug]];
  const res = await fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${KEY}&attractionId=${attractionId}&size=3`,
  );
  const json = await res.json();
  const events = (json._embedded && json._embedded.events) || [];
  if (!events.length) { console.log(`  no events  ${slug} (${attractionId}) — offseason or stale id`); continue; }
  const wrong = events.filter((e) => {
    const c = (e.classifications || [])[0] || {};
    return !(c.genre && c.genre.name === want.genre && c.subGenre && c.subGenre.name === want.subGenre);
  });
  if (wrong.length) {
    bad += 1;
    console.log(`  WRONG CLASS  ${slug} (${attractionId}) -> ${wrong[0].name}`);
  }
  await sleep(250);
}

console.log(`\nTEAM SMOKE: ${slugs.length - bad}/${slugs.length} resolved to the right league`);
if (bad) console.log('Any WRONG CLASS line is a real defect: that page lists another entity’s events.');
```

- [ ] **Step 2: Add the npm script and run it**

In `web/package.json` `"scripts"`, after `"smoke:tn"`:

```json
    "smoke:teams": "node scripts/smoke-teams.mjs",
```

Run from `web/`:

```bash
TICKETMASTER_API_KEY=$(grep -hoE "TICKETMASTER[A-Z_]*=.*" ../.env | head -1 | cut -d= -f2 | tr -d '"'"'"' ') npm run smoke:teams
```

Expected: every sampled team resolves to the right league. **Any `WRONG CLASS` line is a real defect** — report it and stop rather than continuing.

- [ ] **Step 3: Commit**

```bash
git add web/scripts/smoke-teams.mjs web/package.json
git commit -m "Add the team resolution smoke check

A wrong attraction id renders a working page listing another entity's
events. Nothing else in the pipeline would catch it, so sample resolved
teams and assert their events carry the right league classification.

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>"
```

---

### Task 8: Daily refresh, deployed verification, and follow-ups

**Files:**
- Modify: `marketing-agents/scripts/run-daily.sh`
- Create: `docs/superpowers/plans/2026-09-03-team-pages-followups.md`

- [ ] **Step 1: Wire the daily refresh**

In `marketing-agents/scripts/run-daily.sh`, find the `npm run build:tn-index` block by content (line numbers are stale) and add an equivalent block immediately after it, matching its structure exactly — including the `PIPESTATUS[0]` check and the non-fatal `WARNING:` that lets the day's run continue:

```bash
    # Same scheduling rationale as the indexes above: refreshed daily, left
    # uncommitted here so it flows through the COMMIT_PATHS block and inherits
    # its branch guard and push.
    ( cd "$PROJECT_DIR/web" && npm run build:teams ) 2>&1 | tee -a "$LOG_FILE"
    if [ "${PIPESTATUS[0]}" -ne 0 ]; then echo "WARNING: team index refresh failed; previous index left intact" | tee -a "$LOG_FILE"; fi
```

Then add `web/src/data/teams.generated.json` to the `COMMIT_PATHS` array.

The script's env: confirm `TICKETMASTER_API_KEY` is available to it. If the script does not already export the repo root `.env`, note that in your report — the refresh will fail nightly without it, and that is worth knowing before it happens.

Run `bash -n marketing-agents/scripts/run-daily.sh` from the repo root and confirm it is clean. Do not execute the script.

- [ ] **Step 2: Verify the deployed API accepts the new parameter**

Task 4's backend change cannot be exercised locally. After it deploys (Railway builds from `main`), confirm:

```bash
curl -s "https://tickethawk-api-production.up.railway.app/api/public/events?attractionId=K8vZ9171oG0&limit=5" | head -c 300
```

Expected: Dallas Cowboys events including venues outside Dallas. If it returns a 400 listing valid params, the backend change has not deployed yet — wait and retry rather than editing anything.

- [ ] **Step 3: Write the follow-ups note**

Create `docs/superpowers/plans/2026-09-03-team-pages-followups.md` recording:

- the resolved and unresolved team counts, and the unresolved slugs by name;
- how many teams carry a `tnSlug` and which do not (these pages render without a team-level affiliate link);
- that `Texas A&M Aggies` did not resolve in the TicketNetwork index, most likely because `normalizeName` turns `&` into "and" while the slug drops it — worth checking, since it affects every ampersand name;
- that the seed is source and is NOT regenerated by the daily run: a franchise move or rename needs a hand edit;
- that only football prerenders, and what it would cost to prerender more (the 5,000/day Ticketmaster limit and the current ~2,900 usage);
- that city pages still under-report the NFL, since this design supersedes city aliasing for teams but not for city pages.

- [ ] **Step 4: Full verification and commit**

```bash
cd web && npm test && npm run check:design && npx tsc --noEmit && npm run build
```

Expected: 24 tests passing, 21 invariants, clean types, and a build that prerenders the football team pages while leaving other leagues dynamic. Confirm in the build's route table that `/teams/[slug]` appears with a revalidate window and that the page count rose by roughly the football team count, not by 250.

```bash
cd .. && git add marketing-agents/scripts/run-daily.sh docs/superpowers/plans/2026-09-03-team-pages-followups.md
git commit -m "Refresh the team index daily, and record the follow-ups

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>"
```

---

## Verification checklist

- [ ] `npm test` passes (24 tests: 17 existing + 7 new).
- [ ] `npm run check:design` passes at 21 invariants.
- [ ] `npx tsc --noEmit` is clean.
- [ ] `npm run build` completes; `/teams/[slug]` prerenders football only and the total page count rose by roughly 90, not 250.
- [ ] `npm run smoke:teams` reports every sampled team resolving to the right league — no `WRONG CLASS` lines.
- [ ] `/teams/dallas-cowboys` lists home games in Arlington **and** away games elsewhere.
- [ ] A team with no upcoming games renders the offseason panel, not an empty list, and still shows its team-level resale link.
- [ ] `/teams` lists only resolved teams, and every link resolves.
- [ ] `sitemap.xml` contains one entry per resolved team and no entry for an unresolved one.
- [ ] With `CJ_PID`/`CJ_TN_AID` unset, no resale link and no disclosure renders on any team page.
