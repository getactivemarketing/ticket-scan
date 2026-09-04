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
  // Array.isArray, not a truthiness check: a truthy non-array
  // `classifications` would throw on .some() and kill the whole nightly
  // index build, not just this one candidate.
  const list = attraction && Array.isArray(attraction.classifications) ? attraction.classifications : [];
  return list.some((c) => {
    const genre = c && c.genre && c.genre.name;
    const subGenre = c && c.subGenre && c.subGenre.name;
    return genre === want.genre && subGenre === want.subGenre;
  });
}

// Tokens too generic to help tell one program from another. Deliberately
// small: this is a floor, not an attempt to strip every stopword.
const GENERIC_NAME_TOKENS = new Set(['football', 'university', 'univ', 'of', 'the', 'and']);

function nameTokens(str) {
  return String(str ?? '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

/**
 * True when `candidateName` contains every distinctive token of
 * `expectedName` — expectedName's tokens minus GENERIC_NAME_TOKENS. Case-
 * insensitive, punctuation-stripped (so "Texas A&M" and "Texas A M" agree).
 * A name with zero distinctive tokens (all generic, or empty) can't
 * discriminate, so it agrees with anything.
 */
export function nameAgrees(expectedName, candidateName) {
  const distinctive = nameTokens(expectedName).filter((t) => !GENERIC_NAME_TOKENS.has(t));
  if (!distinctive.length) return true;
  const candidateTokenSet = new Set(nameTokens(candidateName));
  return distinctive.every((t) => candidateTokenSet.has(t));
}

/**
 * How many distinctive tokens `candidateName` carries that `expectedName` does
 * not. Zero means the candidate says nothing beyond the expected name.
 *
 * nameAgrees is containment, so a seed name whose only distinctive token is
 * "utah" qualifies every Football/College attraction containing "utah" —
 * "Utah Football", "Utah Tech Trailblazers Football", "Southern Utah
 * Thunderbirds Football" and "Utah State University Aggies Football" all pass,
 * and they were tied on upcoming-event count too. Ranking by extras first
 * makes the right one win on merit instead of on an id tiebreak that one extra
 * Utah Tech game would flip, on an index that rebuilds and deploys nightly.
 */
export function extraDistinctiveTokens(expectedName, candidateName) {
  const expected = new Set(nameTokens(expectedName).filter((t) => !GENERIC_NAME_TOKENS.has(t)));
  const extras = new Set(
    nameTokens(candidateName).filter((t) => !GENERIC_NAME_TOKENS.has(t) && !expected.has(t)),
  );
  return extras.size;
}

/**
 * Returns the best attraction for `league`, or null when none qualifies.
 * Never falls back to "the first result" — that is how a band becomes a team.
 *
 * `expectedName` is optional. When omitted (or empty), candidates are ranked
 * by classification and event count alone — the original behaviour. When
 * supplied, a candidate must also agree by name (see nameAgrees) to qualify:
 * classification and event count alone let Houston's busier program outrank
 * Washington State, and let the Pelicans outrank the Hornets, in the same
 * genre/subGenre bucket.
 */
export function pickAttraction(candidates, league, expectedName) {
  const want = LEAGUE_CLASSIFICATION[league];
  if (!want || !Array.isArray(candidates)) return null;

  let qualified = candidates.filter((c) => matchesClass(c, want));
  if (expectedName) {
    qualified = qualified.filter((c) => nameAgrees(expectedName, c && c.name));
  }
  if (!qualified.length) return null;

  // Rank: fewest extra distinctive tokens, then busiest, then id.
  //
  // Extras first because containment alone gives near-zero protection to a
  // single-token name (see extraDistinctiveTokens). Extras are all zero when
  // no expectedName was supplied, so the two-argument call still ranks by
  // event count exactly as before. Ties still broken by id so a rebuild picks
  // the same attraction every time.
  const extras = new Map(
    qualified.map((c) => [c, expectedName ? extraDistinctiveTokens(expectedName, c && c.name) : 0]),
  );
  qualified.sort(
    (a, b) =>
      extras.get(a) - extras.get(b) ||
      upcoming(b) - upcoming(a) ||
      String(a.id).localeCompare(String(b.id)),
  );
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
