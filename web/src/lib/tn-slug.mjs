// Pure, dependency-free slug matching for TicketNetwork deep links.
//
// Imported by BOTH scripts/build-tn-index.mjs (which writes the index) and
// src/lib/ticketnetwork.ts (which reads it), so the key a slug is stored
// under and the key it is looked up by cannot drift apart. If you change
// normalizeName, the index must be rebuilt.
//
// No imports, by design: this file has to run under `node --test` with no
// loader, no transpiler and no bundler.

/** Fold a performer or venue name into an index key. */
export function normalizeName(input) {
  if (typeof input !== 'string') return '';
  return input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // combining diacritics
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/^the /, '')
    .trim();
}

/**
 * Fold a TicketNetwork slug onto the same key its display name folds to.
 * Only a TRAILING "-tickets" is dropped: "music-festivals" is a real
 * category slug with no suffix, and "tickets-for-less-tickets" is a real
 * performer whose name genuinely contains the word.
 */
export function keyFromSlug(slug) {
  return normalizeName(String(slug ?? '').replace(/-tickets$/, ''));
}

/**
 * Event names are not performer names. The feeds ship "Chicago Bears at
 * Green Bay Packers" and "Bruno Mars: The 24K Magic Tour"; neither is a
 * TicketNetwork performer. Return progressively narrower candidate keys,
 * most specific first, so an exact match always wins over a fragment.
 */
export function performerKeys(name) {
  const raw = String(name ?? '');
  const keys = new Set();
  const add = (s) => {
    const k = normalizeName(s);
    if (k) keys.add(k);
  };

  add(raw);

  // "A at B", "A vs B", "A vs. B" — the home/away form every sports feed uses.
  const sides = raw.split(/\s+(?:at|vs\.?|v\.?)\s+/i);
  if (sides.length > 1) {
    add(sides[0]);
    add(sides[sides.length - 1]);
  }

  // "Performer: Tour Name", "Performer - Tour Name". Colon and en/em dashes
  // may be tight on the left (real titles read "Bruno Mars: The 24K Magic
  // Tour" with no space before the colon); a bare hyphen still requires
  // spaces on both sides so a name like "Spider-Man" is not split.
  const head = raw.split(/\s*[:–—]\s+|\s+-\s+/)[0];
  if (head !== raw) add(head);

  return [...keys];
}

/**
 * Our category slugs to TicketNetwork pages. Every value was verified
 * present in their sitemaps on 2026-09-02. `top` is their three top-level
 * pages, which live at the root rather than under /category/.
 */
export const CATEGORY_MAP = {
  nba: { kind: 'category', slug: 'nba-tickets' },
  nhl: { kind: 'category', slug: 'sports-hockey-nhl-tickets' },
  mlb: { kind: 'category', slug: 'sports-baseball-mlb-tickets' },
  nfl: { kind: 'category', slug: 'sports-football-nfl-tickets' },
  'college-football': { kind: 'category', slug: 'college-football-tickets' },
  ufc: { kind: 'category', slug: 'ufc-tickets' },
  wwe: { kind: 'category', slug: 'wwe-tickets' },
  tennis: { kind: 'category', slug: 'tennis-tickets' },
  soccer: { kind: 'category', slug: 'soccer-tickets' },
  comedy: { kind: 'category', slug: 'comedy-tickets' },
  festivals: { kind: 'category', slug: 'music-festivals' },
  family: { kind: 'category', slug: 'children-family-tickets' },
  concerts: { kind: 'top', slug: 'concert-tickets' },
  theater: { kind: 'top', slug: 'theater-tickets' },
};

/**
 * Performer, then venue, then category. Returns null rather than guessing —
 * a slug we have not seen in the index is a 404, and a 404 earns nothing.
 */
export function resolveFromIndex(index, { name, venue, category } = {}) {
  const performers = index?.performers ?? {};
  for (const key of performerKeys(name)) {
    if (performers[key]) return { kind: 'performers', slug: performers[key] };
  }

  const venueKey = normalizeName(venue);
  const venues = index?.venues ?? {};
  if (venueKey && venues[venueKey]) return { kind: 'venues', slug: venues[venueKey] };

  if (category && CATEGORY_MAP[category]) return { ...CATEGORY_MAP[category] };

  return null;
}
