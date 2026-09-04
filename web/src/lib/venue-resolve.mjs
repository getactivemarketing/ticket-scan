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

/** Strips the words that differ between our name and Ticketmaster's. */
export function normalizeVenueName(name) {
  return String(name ?? '')
    .toLowerCase()
    .replace(NOISE, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const upcoming = (c) => (c && c.upcomingEvents && Number(c.upcomingEvents._total)) || 0;
const cityOf = (c) => (c && c.city && typeof c.city.name === 'string' ? c.city.name.toLowerCase() : '');
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
  const wantCity = String(want.city ?? '').toLowerCase();
  const wantState = String(want.state ?? '').toUpperCase();
  if (!wantName || !wantCity) return { picked: null, ambiguousWith: [] };

  const qualified = candidates
    .filter((c) => {
      if (cityOf(c) !== wantCity) return false;
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
