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
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/&/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
