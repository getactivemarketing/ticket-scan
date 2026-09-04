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
function citiesMatch(wantCityRaw, candidateCityRaw) {
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
