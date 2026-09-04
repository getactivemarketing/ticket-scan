import { test } from 'node:test';
import assert from 'node:assert/strict';
import { pickVenue, pickVenueDetailed, normalizeVenueName } from './venue-resolve.mjs';

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
