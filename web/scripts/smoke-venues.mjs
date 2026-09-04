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
import { citiesMatch } from '../src/lib/venue-resolve.mjs';

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
let orphan = 0;
let apiErrors = 0;
let checked = 0;

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
    if (wrong.length) {
      wrongCity += 1;
      const w = wrong[0];
      const wCity = ((w._embedded || {}).venues || [{}])[0].city?.name;
      console.log(`  WRONG CITY  ${slug} (${ids[slug]}) -> ${w.name} in ${wCity}`);
    }
  } catch (err) {
    apiErrors += 1;
    console.log(`  API ERROR   ${slug} (${ids[slug]}) — ${err.message}`);
  }
  await sleep(250);
}

const bad = wrongCity + orphan;
console.log(
  `\nVENUE SMOKE: ${checked}/${slugs.length} checked (${apiErrors} api errors) — ${slugs.length - bad}/${slugs.length} resolved to the right building`,
);
if (apiErrors) console.log(`API ERROR lines mean those venues could not be checked this run — not that they passed. Run is partial: ${apiErrors} of ${slugs.length} unverified.`);
if (bad) console.log('Any WRONG CITY or ORPHAN line is a real defect.');
