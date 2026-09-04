import { test } from 'node:test';
import assert from 'node:assert/strict';
import { pickVenue, pickVenueDetailed, normalizeVenueName, nameAfterAt } from './venue-resolve.mjs';

const v = (name, city, state, upcoming, id) => ({
  id,
  name,
  city: { name: city },
  state: { stateCode: state },
  upcomingEvents: { _total: upcoming },
});

test('requires the city to match, not just the name', () => {
  // Real hazard: same name, same state — only the city can disambiguate.
  // (Both candidates share stateCode 'TX', so a regression that dropped the
  // city check but kept the state check would still pass unless this fixture
  // forces the state check alone to be insufficient.)
  const candidates = [
    v('Memorial Stadium', 'Houston', 'TX', 8, 'HOUSTON'),
    v('Memorial Stadium', 'Austin', 'TX', 6, 'AUSTIN'),
  ];
  assert.equal(pickVenue(candidates, { name: 'Memorial Stadium', city: 'Austin', state: 'TX' }).id, 'AUSTIN');
});

test('prefers the busier candidate when city and name both match', () => {
  const candidates = [
    v('Rose Bowl Stadium', 'Pasadena', 'CA', 1, 'THIN'),
    v('Rose Bowl', 'Pasadena', 'CA', 12, 'FULL'),
  ];
  assert.equal(pickVenue(candidates, { name: 'Rose Bowl', city: 'Pasadena', state: 'CA' }).id, 'FULL');
});

test('returns null rather than guessing', () => {
  assert.equal(pickVenue([v('Some Arena', 'Boston', 'MA', 9, 'X')], { name: 'Kyle Field', city: 'College Station', state: 'TX' }), null);
  assert.equal(pickVenue([], { name: 'Kyle Field', city: 'College Station', state: 'TX' }), null);
  assert.equal(pickVenue(null, { name: 'Kyle Field', city: 'College Station', state: 'TX' }), null);
});

test('tolerates malformed candidates without throwing', () => {
  const candidates = [{}, { name: 'No city' }, { name: 'Kyle Field', city: {} }, v('Kyle Field', 'College Station', 'TX', 7, 'GOOD')];
  assert.equal(pickVenue(candidates, { name: 'Kyle Field', city: 'College Station', state: 'TX' }).id, 'GOOD');
});

test('normalizeVenueName drops the noise words that block a match', () => {
  assert.equal(normalizeVenueName('Rose Bowl Stadium'), 'rose bowl');
  assert.equal(normalizeVenueName('AT&T Stadium'), 'at&t');
  assert.equal(normalizeVenueName('  Kyle   Field  '), 'kyle');
});

test('ties break deterministically', () => {
  const candidates = [
    v('Kyle Field', 'College Station', 'TX', 5, 'BBB'),
    v('Kyle Field', 'College Station', 'TX', 5, 'AAA'),
  ];
  assert.equal(pickVenue(candidates, { name: 'Kyle Field', city: 'College Station', state: 'TX' }).id, 'AAA');
});

test('pickVenueDetailed reports ambiguity when a differently-named candidate also qualifies', () => {
  // Both are in the right city/state and both satisfy the containment rule,
  // but only one is an exact normalized-name match. The exact match should
  // win the pick, and the other name should surface as a judgement call for
  // a human to double check — a resolver that stays silent here would be
  // exactly the "confidently wrong" failure this diagnostic exists to catch.
  const candidates = [
    v('Kyle Field', 'College Station', 'TX', 5, 'EXACT'),
    v('Kyle Field Annex', 'College Station', 'TX', 3, 'OTHER'),
  ];
  const { picked, ambiguousWith } = pickVenueDetailed(candidates, {
    name: 'Kyle Field',
    city: 'College Station',
    state: 'TX',
  });
  assert.equal(picked.id, 'EXACT');
  assert.deepEqual(ambiguousWith, ['Kyle Field Annex']);
});

test('pickVenueDetailed reports no ambiguity when only one candidate qualifies', () => {
  // The inverse failure mode is just as dangerous: a reporter that cries
  // wolf on every venue trains a human to stop reading it.
  const candidates = [v('Kyle Field', 'College Station', 'TX', 5, 'ONLY')];
  const { picked, ambiguousWith } = pickVenueDetailed(candidates, {
    name: 'Kyle Field',
    city: 'College Station',
    state: 'TX',
  });
  assert.equal(picked.id, 'ONLY');
  assert.deepEqual(ambiguousWith, []);
});

test('pickVenueDetailed does not flag two listings of the same normalized name as ambiguous', () => {
  // Two Ticketmaster listings for the same building are not a judgement
  // call — they're a duplicate, and reporting them as ambiguous would bury
  // the genuinely suspicious picks in noise.
  const candidates = [
    v('Kyle Field', 'College Station', 'TX', 5, 'AAA'),
    v('Kyle Field', 'College Station', 'TX', 5, 'BBB'),
  ];
  const { picked, ambiguousWith } = pickVenueDetailed(candidates, {
    name: 'Kyle Field',
    city: 'College Station',
    state: 'TX',
  });
  assert.equal(picked.id, 'AAA');
  assert.deepEqual(ambiguousWith, []);
});

// --- Bug 2: punctuation blocks a match that would otherwise succeed --------

test('normalizeVenueName strips hyphens, en-dashes, periods, apostrophes and slashes', () => {
  // Real hazard from the FBS stadium expansion: our data and Ticketmaster's
  // listing use different punctuation for the same building, and the old
  // normalizer treated the punctuation as a literal character difference.
  assert.equal(normalizeVenueName('Bryant-Denny Stadium'), normalizeVenueName('Bryant Denny Stadium'));
  assert.equal(normalizeVenueName('Jordan-Hare Stadium'), normalizeVenueName('Jordan Hare Stadium'));
  assert.equal(normalizeVenueName('Kelly/Shorts Stadium'), normalizeVenueName('Kelly Shorts Stadium'));
  assert.equal(normalizeVenueName('Dowdy–Ficklen Stadium'), normalizeVenueName('Dowdy-Ficklen Stadium'));
  assert.equal(normalizeVenueName('Joan C. Edwards Stadium'), normalizeVenueName('Joan C Edwards Stadium'));
  assert.equal(
    normalizeVenueName('Navy–Marine Corps Memorial Stadium'),
    normalizeVenueName('Navy-Marine Corps Memorial Stadium'),
  );
  // Ampersand handling must survive unchanged — this is not punctuation we strip.
  assert.equal(normalizeVenueName('AT&T Stadium'), 'at&t');
});

test('pickVenue resolves a hyphenated name against Ticketmaster\'s space-separated listing', () => {
  const candidates = [v('Bryant Denny Stadium', 'Tuscaloosa', 'AL', 4, 'BDS')];
  assert.equal(pickVenue(candidates, { name: 'Bryant-Denny Stadium', city: 'Tuscaloosa', state: 'AL' }).id, 'BDS');
});

// --- Bug 1: donor-name prefixes Ticketmaster's search does not index -------

test('nameAfterAt extracts the portion following the last " at " for donor-prefixed venues', () => {
  assert.equal(nameAfterAt('Bobby Bowden Field at Doak S. Campbell Stadium'), 'Doak S. Campbell Stadium');
  assert.equal(nameAfterAt('Alaska Airlines Field at Husky Stadium'), 'Husky Stadium');
  assert.equal(nameAfterAt('Pratt & Whitney Stadium at Rentschler Field'), 'Rentschler Field');
  // No " at " separator at all: nothing to fall back to.
  assert.equal(nameAfterAt('Kyle Field'), null);
});

test('pickVenue resolves the after-" at " name against Ticketmaster\'s plain listing', () => {
  const candidates = [v('Husky Stadium', 'Seattle', 'WA', 6, 'HUSKY')];
  const want = { name: nameAfterAt('Alaska Airlines Field at Husky Stadium'), city: 'Seattle', state: 'WA' };
  assert.equal(pickVenue(candidates, want).id, 'HUSKY');
});

// --- Bug 3: exact city equality is too strict for real metro naming --------

test('city matching tolerates Ticketmaster\'s known metro-area aliases', () => {
  const allegiant = [v('Allegiant Stadium', 'Las Vegas', 'NV', 10, 'ALL')];
  assert.equal(pickVenue(allegiant, { name: 'Allegiant Stadium', city: 'Paradise', state: 'NV' }).id, 'ALL');

  const hardRock = [v('Hard Rock Stadium', 'Miami', 'FL', 10, 'HRS')];
  assert.equal(pickVenue(hardRock, { name: 'Hard Rock Stadium', city: 'Miami Gardens', state: 'FL' }).id, 'HRS');

  const vaught = [v('Vaught-Hemingway Stadium', 'University', 'MS', 5, 'VHS')];
  assert.equal(pickVenue(vaught, { name: 'Vaught-Hemingway Stadium', city: 'Oxford', state: 'MS' }).id, 'VHS');
});

test('city matching tolerates punctuation and a trailing "Township" suffix', () => {
  const winston = [v('Allegacy Federal Credit Union Stadium', 'Winston Salem', 'NC', 3, 'WS')];
  assert.equal(
    pickVenue(winston, { name: 'Allegacy Federal Credit Union Stadium', city: 'Winston-Salem', state: 'NC' }).id,
    'WS',
  );

  const piscataway = [v('SHI Stadium', 'Piscataway Township', 'NJ', 3, 'SHI')];
  assert.equal(pickVenue(piscataway, { name: 'SHI Stadium', city: 'Piscataway', state: 'NJ' }).id, 'SHI');
});

// --- Safety: the city check must still block cross-matches -----------------

test('safety: the alias/punctuation fixes do not let same-named venues in different cities cross-match', () => {
  // Nebraska's Memorial Stadium must still resolve to Nebraska's, never
  // Illinois's — this is the exact hazard the city check exists to prevent.
  const candidates = [
    v('Memorial Stadium', 'Lincoln', 'NE', 20, 'NEBRASKA'),
    v('Memorial Stadium', 'Champaign', 'IL', 5, 'ILLINOIS'),
  ];
  assert.equal(pickVenue(candidates, { name: 'Memorial Stadium', city: 'Lincoln', state: 'NE' }).id, 'NEBRASKA');
  assert.equal(pickVenue(candidates, { name: 'Memorial Stadium', city: 'Champaign', state: 'IL' }).id, 'ILLINOIS');
});

test('safety: a metro alias does not spill over to an unrelated same-named venue', () => {
  // "Paradise" only aliases to "Las Vegas" for our data; it must not act as
  // a general "accept any city" loophole for other Nevada venues.
  const candidates = [v('Some Arena', 'Reno', 'NV', 10, 'WRONG')];
  assert.equal(pickVenue(candidates, { name: 'Some Arena', city: 'Paradise', state: 'NV' }), null);
});
