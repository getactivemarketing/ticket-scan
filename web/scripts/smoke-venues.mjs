// Samples resolved venues and asserts the events actually happen there. A wrong
// venue id renders a working page listing another building's events — nothing
// else in the pipeline catches that.
//
// Every network call is wrapped so a single failure (timeout, non-2xx,
// malformed body) is reported as an API ERROR and skipped, never left to
// throw and kill the run mid-sample, and never allowed to silently read as a
// WRONG CITY or ORPHAN finding — an API hiccup and a real defect must never
// look the same in the output.
import { readFileSync } from 'node:fs';
import { citiesMatch, normalizeVenueName } from '../src/lib/venue-resolve.mjs';
import { loadEnv } from './load-env.mjs';

loadEnv(); // run-daily.sh does not export the key; see load-env.mjs
const KEY = process.env.TICKETMASTER_API_KEY;
if (!KEY) { console.error('TICKETMASTER_API_KEY is required.'); process.exit(1); }

const { ids } = JSON.parse(readFileSync(new URL('../../data/venue-ids.json', import.meta.url), 'utf8'));
const { venues } = await import('../src/data/venues.ts');

const SAMPLE = Number(process.env.SAMPLE || 30);

// A real Fisher-Yates shuffle, not `sort(() => Math.random() - 0.5)` — that
// comparator is inconsistent and biases heavily toward the array's original
// head, which would under-sample whatever batch file happens to load last.
function shuffle(items) {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

const slugs = shuffle(Object.keys(ids)).slice(0, SAMPLE);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let wrongCity = 0;
let wrongBuilding = 0;
let orphan = 0;
let apiErrors = 0;
let checked = 0;
// Counted ONLY when a venue returned events and was actually compared. The
// summary used to divide by the sample size, so a run where every venue was
// out of season printed "30/30 resolved to the right building" having verified
// nothing at all — a claim that could not fail.
let verified = 0;

for (const slug of slugs) {
  const want = venues[slug];
  if (!want) {
    orphan += 1;
    console.log(`  ORPHAN      ${slug} — in the id map but not in venues`);
    continue;
  }

  try {
    const res = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${KEY}&venueId=${ids[slug]}&size=3`,
    );
    const json = await res.json().catch(() => null);
    if (!res.ok || !json) {
      apiErrors += 1;
      console.log(`  API ERROR   ${slug} (${ids[slug]}) — events fetch failed (status ${res.status})`);
      continue;
    }
    checked += 1;
    const events = (json._embedded && json._embedded.events) || [];
    if (!events.length) {
      console.log(`  no events   ${slug} — offseason or stale id`);
      continue;
    }
    // Naive string equality flagged campus stadiums as WRONG CITY whenever
    // Ticketmaster's own city label for the venue differs harmlessly from
    // ours (Starkville vs Mississippi State, Notre Dame vs South Bend —
    // sometimes even within the same venue id depending on the event).
    // Reuse the resolver's citiesMatch so this check trusts the same
    // evidenced alias list the builder does, instead of re-litigating it.
    const wrong = events.filter((e) => {
      const v = ((e._embedded && e._embedded.venues) || [])[0] || {};
      return !v.city || !citiesMatch(want.city, v.city.name);
    });
    verified += 1;
    if (wrong.length) {
      wrongCity += 1;
      const w = wrong[0];
      const wCity = ((w._embedded || {}).venues || [{}])[0].city?.name;
      console.log(`  WRONG CITY  ${slug} (${ids[slug]}) -> ${w.name} in ${wCity}`);
    }

    // Name check. 18 ids were resolved through a home team's attraction rather
    // than by name, and that path never compares names at all — it filters a
    // team's events by city and state and takes the venue they most often play
    // at. City alone is not enough: Houston holds four of our venues and
    // Atlanta four, and two of the attraction-resolved ids sit in exactly those
    // clusters. Without this, no stage of the pipeline ever checks that those
    // ids point at the building we named.
    const ourName = normalizeVenueName(want.name);
    const mismatched = events.filter((e) => {
      const v = ((e._embedded && e._embedded.venues) || [])[0] || {};
      if (!v.name) return false;
      const theirName = normalizeVenueName(v.name);
      return !theirName.includes(ourName) && !ourName.includes(theirName);
    });
    if (mismatched.length) {
      wrongBuilding += 1;
      const m = ((mismatched[0]._embedded || {}).venues || [{}])[0].name;
      console.log(`  WRONG BUILDING ${slug} (${ids[slug]}) -> events at "${m}", we call it "${want.name}"`);
    }
  } catch (err) {
    apiErrors += 1;
    console.log(`  API ERROR   ${slug} (${ids[slug]}) — ${err.message}`);
  }
  await sleep(250);
}

const bad = wrongCity + wrongBuilding + orphan;
console.log(
  `\nVENUE SMOKE: ${slugs.length} sampled, ${checked} reachable, ${verified} actually verified ` +
    `(${apiErrors} api errors) — ${verified - wrongCity - wrongBuilding}/${verified} resolved to the right building`,
);
if (apiErrors) console.log(`API ERROR lines mean those venues could not be checked this run — not that they passed. Run is partial: ${apiErrors} of ${slugs.length} unverified.`);
if (checked > verified) console.log(`${checked - verified} venue(s) returned no events and were NOT verified — offseason, or a stale id. They are not counted as passing.`);
if (bad) console.log('Any WRONG CITY, WRONG BUILDING or ORPHAN line is a real defect.');

// Exit non-zero on a CONFIRMED defect only. API errors stay at exit 0 on
// purpose — Ticketmaster being slow is not a reason to fail a deploy, but a
// wrong id is, and an always-zero exit means any future attempt to wire this
// into a gate would silently do nothing.
if (bad) process.exit(1);
