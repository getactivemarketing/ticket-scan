// Resolves every venue slug to a Ticketmaster venue id and commits the result.
//
// Scheduled, never run at build time — the same rule as the other indexes. On
// any failure the previous map is left exactly as it was: a stale id points at
// a building that mostly still hosts the same events, a missing one empties a
// page with no error at all.
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pickVenueDetailed, nameAfterAt, pickVenueFromEvents } from '../src/lib/venue-resolve.mjs';

const KEY = process.env.TICKETMASTER_API_KEY;
if (!KEY) {
  console.error('TICKETMASTER_API_KEY is required.');
  process.exit(1);
}

// Repo root `data/` does not exist yet — this script creates it.
const OUT = new URL('../../data/venue-ids.json', import.meta.url);
mkdirSync(dirname(fileURLToPath(OUT)), { recursive: true });
const { venues } = await import('../src/data/venues.ts');
const { teams } = await import('../src/data/teams.ts');
const { default: teamIndex } = await import('../src/data/teams.generated.json', { with: { type: 'json' } });

// Name search cannot reach every venue: some buildings are only just
// renamed for the 2026 season and Ticketmaster still indexes the old name;
// others simply have no listing under any name we try. For those, resolve
// through a home team instead — every team in teams.generated.json already
// carries a hand-verified attractionId, and an attraction's own event
// schedule names its venue directly, sidestepping venue naming entirely.
// Built once, by exact `name` string, from the reviewed-by-hand teams.ts.
const teamSlugByName = new Map(Object.values(teams).map((t) => [t.name, t.slug]));

// Buildings that were renamed after their URL was published. The slug must keep
// working, so the id is pinned by hand and never re-resolved from the name.
//
// scotiabank-arena is pinned for a different reason: fetchCandidates scopes
// every search to countryCode=US, so a Canadian venue can never appear in the
// candidate list no matter how well pickVenue would match it. Without this
// pin the venue silently drops out of the map on every run, even though its
// id is hand-verified and was already serving correctly-attributed events
// via the old hardcoded map.
const PINNED = {
  'footprint-center': 'KovZpZAE617A',
  'wells-fargo-center': 'KovZ917AiMF',
  'scotiabank-arena': 'KovZpZAFFE1A',
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchCandidates(name, state) {
  for (let attempt = 0; attempt < 4; attempt += 1) {
    const url =
      `https://app.ticketmaster.com/discovery/v2/venues.json?apikey=${KEY}` +
      `&keyword=${encodeURIComponent(name)}&countryCode=US&size=50` +
      (state ? `&stateCode=${encodeURIComponent(state)}` : '');
    const res = await fetch(url);
    if (res.ok) {
      const json = await res.json();
      return (json._embedded && json._embedded.venues) || [];
    }
    if (res.status < 500 && res.status !== 429) throw new Error(`HTTP ${res.status} for ${name}`);
    await sleep(500 * 2 ** attempt + Math.random() * 250);
  }
  throw new Error(`giving up on ${name}`);
}

async function fetchAttractionEvents(attractionId) {
  for (let attempt = 0; attempt < 4; attempt += 1) {
    const url =
      `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${KEY}` +
      `&attractionId=${encodeURIComponent(attractionId)}&size=20`;
    const res = await fetch(url);
    if (res.ok) {
      const json = await res.json();
      return (json._embedded && json._embedded.events) || [];
    }
    if (res.status < 500 && res.status !== 429) throw new Error(`HTTP ${res.status} for attraction ${attractionId}`);
    await sleep(500 * 2 ** attempt + Math.random() * 250);
  }
  throw new Error(`giving up on attraction ${attractionId}`);
}

const out = {
  builtAt: new Date().toISOString(),
  counts: { resolved: 0, unresolved: 0, ambiguous: 0, viaAttraction: 0 },
  ids: {},
  viaAttraction: {},
};
const unresolved = [];
const ambiguous = [];
const attractionResolved = [];

for (const [slug, v] of Object.entries(venues)) {
  if (PINNED[slug]) {
    out.ids[slug] = PINNED[slug];
    out.counts.resolved += 1;
    continue;
  }
  let want = { name: v.name, city: v.city, state: v.state };
  let { picked, ambiguousWith } = pickVenueDetailed(await fetchCandidates(want.name, want.state), want);

  // Many FBS stadiums are stored under a full donor-naming convention
  // ("Bobby Bowden Field at Doak S. Campbell Stadium") that Ticketmaster's
  // search indexes as zero results — it lists the plain traditional name
  // only. When the full name comes up empty, retry once with the portion
  // after the last " at ", both as the search keyword and as the name
  // pickVenueDetailed matches against.
  if (!picked) {
    const fallbackName = nameAfterAt(v.name);
    if (fallbackName) {
      await sleep(250);
      want = { name: fallbackName, city: v.city, state: v.state };
      ({ picked, ambiguousWith } = pickVenueDetailed(await fetchCandidates(want.name, want.state), want));
    }
  }

  // Name search exhausted. Fall back to resolving through a home team's
  // already-verified attraction: fetch its schedule and read the venue off
  // the events that were actually played in this venue's own city/state.
  // Tried in `homeTeams` order, first team that yields a match wins.
  let viaAttraction = null;
  if (!picked && Array.isArray(v.homeTeams)) {
    for (const teamName of v.homeTeams) {
      const teamSlug = teamSlugByName.get(teamName);
      const attractionId = teamSlug && teamIndex.teams[teamSlug] && teamIndex.teams[teamSlug].attractionId;
      if (!attractionId) continue;
      await sleep(250);
      const events = await fetchAttractionEvents(attractionId);
      const { picked: eventPicked, count } = pickVenueFromEvents(events, { city: v.city, state: v.state });
      if (eventPicked) {
        picked = eventPicked;
        viaAttraction = {
          teamName,
          teamSlug,
          attractionId,
          matchedCity: (eventPicked.city && eventPicked.city.name) || v.city,
          count,
          totalEvents: events.length,
        };
        break;
      }
    }
  }

  if (picked) {
    out.ids[slug] = picked.id;
    out.counts.resolved += 1;
    if (viaAttraction) {
      out.counts.viaAttraction += 1;
      out.viaAttraction[slug] = viaAttraction;
      attractionResolved.push(
        `ATTRACTION ${slug} — picked "${picked.name}" (${picked.id}) via team "${viaAttraction.teamName}" ` +
          `matching city ${viaAttraction.matchedCity} (${viaAttraction.count}/${viaAttraction.totalEvents} events)`,
      );
    }
    // Not fatal — the pick still stands — but the qualifying set had more
    // than one distinct venue name, so this was a judgement call worth a
    // human's eyes before ~167 more unverified venues run through it.
    if (ambiguousWith.length) {
      out.counts.ambiguous += 1;
      ambiguous.push(`AMBIGUOUS ${slug} — picked "${picked.name}" over: ${ambiguousWith.join(', ')}`);
    }
  } else {
    unresolved.push(`${slug} (${v.name}, ${v.city} ${v.state})`);
    out.counts.unresolved += 1;
  }
  await sleep(250);
}

if (out.counts.resolved === 0) throw new Error('resolved zero venues; refusing to write an empty map');

writeFileSync(OUT, `${JSON.stringify(out, null, 2)}\n`);
console.log(
  `Resolved ${out.counts.resolved} (${out.counts.viaAttraction} via attraction), ` +
    `unresolved ${out.counts.unresolved}, ambiguous ${out.counts.ambiguous}`,
);
if (attractionResolved.length) console.log(`${attractionResolved.join('\n')}`);
if (unresolved.length) console.log(`Unresolved:\n  ${unresolved.join('\n  ')}`);
if (ambiguous.length) console.log(`${ambiguous.join('\n')}`);
