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
  if (!Array.isArray(candidates) || !want) return null;
  const wantName = normalizeVenueName(want.name);
  const wantCity = String(want.city ?? '').toLowerCase();
  const wantState = String(want.state ?? '').toUpperCase();
  if (!wantName || !wantCity) return null;

  const qualified = candidates.filter((c) => {
    if (cityOf(c) !== wantCity) return false;
    if (wantState && stateOf(c) && stateOf(c) !== wantState) return false;
    const got = normalizeVenueName(c && c.name);
    if (!got) return false;
    return got === wantName || got.includes(wantName) || wantName.includes(got);
  });
  if (!qualified.length) return null;

  qualified.sort((a, b) => upcoming(b) - upcoming(a) || String(a.id).localeCompare(String(b.id)));
  return qualified[0];
}
