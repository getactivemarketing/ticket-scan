// Picks the right Ticketmaster venue for one of our venue slugs.
//
// Same invisible failure as the attraction resolver: a wrong venue id does
// not error, it just fills the page with another building's events. Stadium
// names repeat heavily across the country — there are two Memorial Stadiums
// in the Big Ten alone — so the city is a hard requirement, not a tiebreak.
//
// No imports, by design: runs under `node --test` with no loader.

// Deliberately does NOT strip "memorial": "Memorial Stadium" would normalize to
// the empty string, and an empty name resolves to null for every candidate.
const NOISE = /\b(stadium|field|arena|center|centre|park|coliseum|dome)\b/g;

// Punctuation that varies between our stored names and Ticketmaster's
// listing for the same building (hyphens, en/em dashes, periods,
// apostrophes, slashes) — normalized to a space so "Bryant-Denny" and
// "Bryant Denny" compare equal. Deliberately does NOT include "&": AT&T
// Stadium must keep its ampersand (see the test that pins this).
const PUNCTUATION = /[-\u2010-\u2015.'\u2019/]/g;

/** Strips the words and punctuation that differ between our name and Ticketmaster's. */
export function normalizeVenueName(name) {
  return String(name ?? '')
    .toLowerCase()
    .replace(PUNCTUATION, ' ')
    .replace(NOISE, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Many FBS stadiums are stored under their full donor-naming convention
 * ("Bobby Bowden Field at Doak S. Campbell Stadium"), which Ticketmaster's
 * search indexes as zero results — it lists the plain traditional name only.
 * Returns the portion after the last " at " (the traditional name), or null
 * when there's no such separator to fall back to. Used by the builder as a
 * second search/match attempt when the full name comes up empty; the full
 * name is always tried first since it's the more precise query when it works.
 */
export function nameAfterAt(name) {
  const s = String(name ?? '');
  const idx = s.lastIndexOf(' at ');
  return idx === -1 ? null : s.slice(idx + 4).trim() || null;
}

// A small number of our venues' mailing-address city legitimately differs
// from the city Ticketmaster files the venue under. Each entry is a real,
// evidenced metro-naming difference — not a general "be lenient" escape
// hatch. The state check (kept intact everywhere this is used) still has to
// pass, so an alias can never bridge two unrelated states.
const CITY_ALIASES = {
  // Allegiant Stadium's mailing address is the unincorporated town of
  // Paradise, NV; Ticketmaster files it under Las Vegas, the city everyone
  // (including Ticketmaster) actually calls it.
  paradise: 'las vegas',
  // Hard Rock Stadium's mailing address is Miami Gardens, FL; Ticketmaster
  // files it under the metro's better-known name, Miami.
  'miami gardens': 'miami',
  // Vaught-Hemingway Stadium's mailing address is Oxford, MS, but the
  // stadium sits on the Ole Miss campus, which Ticketmaster's venue record
  // files under "University, MS".
  oxford: 'university',
  // Davis Wade Stadium's mailing address is Starkville, MS, but the
  // stadium sits on the Mississippi State campus — its own recognized
  // place name — which is where Ticketmaster's venue and event records
  // file it. Same pattern as Oxford/University above, confirmed against
  // the Mississippi State Bulldogs Football attraction's own event feed.
  starkville: 'mississippi state',
  // Notre Dame Stadium's mailing address is South Bend, IN (our stored
  // city), but the stadium sits on the university's own campus place,
  // Notre Dame, IN — an unincorporated census-designated place — same
  // pattern as Oxford/University and Starkville/Mississippi State above.
  // Ticketmaster's own data is inconsistent about it: football event
  // records for this venue id say "Notre Dame IN" while a concert at the
  // same venue id says "South Bend IN" — confirmed against the venue's
  // live event feed on 2026-09-04.
  'south bend': 'notre dame',
  // Falcon Stadium's mailing address is Colorado Springs, CO (our stored
  // city and also what the venue's own Ticketmaster record says), but
  // some event records for this same venue id instead carry "USAF
  // Academy CO" — the academy's own campus place name. Confirmed against
  // the venue endpoint directly (address "2169 United States Afa",
  // city "Colorado Springs") on 2026-09-04.
  'colorado springs': 'usaf academy',
  // Jordan-Hare Stadium's mailing address is Auburn, AL — matching both
  // our stored city and the venue's own Ticketmaster record exactly —
  // but some event records for this same venue id instead carry "Auburn
  // University AL". Confirmed against the venue endpoint directly
  // (address "251 South Donahue Drive", city "Auburn") on 2026-09-04.
  auburn: 'auburn university',
};

/** Strips punctuation and a trailing "Township" so city strings compare fairly. */
function normalizeCityName(city) {
  return String(city ?? '')
    .toLowerCase()
    .replace(PUNCTUATION, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/ township$/, '');
}

/**
 * True when two city strings name the same place, once punctuation, a
 * trailing "Township" (Piscataway vs Piscataway Township), and the small
 * evidenced metro-alias list (Paradise vs Las Vegas, etc.) are accounted
 * for. This is deliberately narrow — it is not a fuzzy match, and it never
 * substitutes for the state check.
 */
export function citiesMatch(wantCityRaw, candidateCityRaw) {
  const want = normalizeCityName(wantCityRaw);
  const got = normalizeCityName(candidateCityRaw);
  if (!want || !got) return false;
  if (want === got) return true;
  return CITY_ALIASES[want] === got;
}

const upcoming = (c) => (c && c.upcomingEvents && Number(c.upcomingEvents._total)) || 0;
const cityOf = (c) => (c && c.city && typeof c.city.name === 'string' ? c.city.name : '');
const stateOf = (c) => (c && c.state && typeof c.state.stateCode === 'string' ? c.state.stateCode.toUpperCase() : '');

/**
 * Returns the best Ticketmaster venue for `want`, or null when none qualifies.
 * Never falls back to "the first result".
 */
export function pickVenue(candidates, want) {
  return pickVenueDetailed(candidates, want).picked;
}

/**
 * Same match as pickVenue, but also reports when the pick was a judgement
 * call: `ambiguousWith` lists the other distinct venue names that also
 * qualified (city/state matched, name matched by substring containment),
 * so a human can scan the builder's output for suspicious picks instead of
 * trusting a confident-looking wrong answer. Empty when the pick was unique.
 */
export function pickVenueDetailed(candidates, want) {
  if (!Array.isArray(candidates) || !want) return { picked: null, ambiguousWith: [] };
  const wantName = normalizeVenueName(want.name);
  const wantCityRaw = want.city;
  const wantState = String(want.state ?? '').toUpperCase();
  if (!wantName || !normalizeCityName(wantCityRaw)) return { picked: null, ambiguousWith: [] };

  const qualified = candidates
    .filter((c) => {
      if (!citiesMatch(wantCityRaw, cityOf(c))) return false;
      if (wantState && stateOf(c) && stateOf(c) !== wantState) return false;
      return true;
    })
    .map((c) => ({ c, got: normalizeVenueName(c && c.name) }))
    .filter(({ got }) => got && (got === wantName || got.includes(wantName) || wantName.includes(got)));
  if (!qualified.length) return { picked: null, ambiguousWith: [] };

  // Prefer an exact normalized-name match over one that merely contains (or
  // is contained by) the wanted name — "AT&T Stadium" beats "AT&T Stadium
  // Parking Garage" when both qualify. Busiest candidate breaks remaining
  // ties, then id for determinism.
  qualified.sort((a, b) => {
    const exactA = a.got === wantName ? 1 : 0;
    const exactB = b.got === wantName ? 1 : 0;
    return exactB - exactA || upcoming(b.c) - upcoming(a.c) || String(a.c.id).localeCompare(String(b.c.id));
  });

  const picked = qualified[0].c;
  const seenNames = new Set([qualified[0].got]);
  const ambiguousWith = [];
  for (const { c, got } of qualified.slice(1)) {
    if (!seenNames.has(got)) {
      seenNames.add(got);
      ambiguousWith.push((c && c.name) || got);
    }
  }
  return { picked, ambiguousWith };
}

/**
 * Fallback path for the ~19 venues name search cannot reach (Ticketmaster
 * still indexes the building under a former name, or the search endpoint
 * simply has no listing for it). Instead of searching by name, this resolves
 * through a home team's already-verified attractionId: fetch the team's
 * upcoming events and read the venue off each one.
 *
 * A team's schedule is mostly away games, so the venue of the first event —
 * or even the most-listed venue overall — is not necessarily the team's own
 * stadium. This filters every event's venue down to ones whose city/state
 * match `want` (the same normalization and alias rules pickVenue uses, so
 * "Paradise" still matches "Las Vegas"), then picks whichever surviving
 * venue id appears most often. A team that never plays a home game in the
 * fetched window (a short or fully-away schedule slice) legitimately yields
 * no match — null, never a guess. Ties break on id for determinism.
 *
 * `want` only carries city/state, not a name: the whole point of this path
 * is that the venue's own name is not a reliable search key here, so this
 * never re-checks it — only where the game was played, not what our data
 * calls the building.
 */
export function pickVenueFromEvents(events, want) {
  if (!Array.isArray(events) || !want) return { picked: null, count: 0, evidence: [] };
  const wantCityRaw = want.city;
  const wantState = String(want.state ?? '').toUpperCase();
  if (!normalizeCityName(wantCityRaw)) return { picked: null, count: 0, evidence: [] };

  const counts = new Map();
  for (const event of events) {
    const venues = event && event._embedded && Array.isArray(event._embedded.venues) ? event._embedded.venues : null;
    const venue = venues && venues.length ? venues[0] : null;
    if (!venue || typeof venue.id !== 'string' || !venue.id) continue;
    if (!citiesMatch(wantCityRaw, cityOf(venue))) continue;
    if (wantState && stateOf(venue) && stateOf(venue) !== wantState) continue;
    const entry = counts.get(venue.id) || { venue, count: 0 };
    entry.count += 1;
    counts.set(venue.id, entry);
  }
  if (!counts.size) return { picked: null, count: 0, evidence: [] };

  const ranked = [...counts.values()].sort(
    (a, b) => b.count - a.count || String(a.venue.id).localeCompare(String(b.venue.id)),
  );
  return { picked: ranked[0].venue, count: ranked[0].count, evidence: ranked };
}
