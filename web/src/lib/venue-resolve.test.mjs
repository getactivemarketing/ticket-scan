import { test } from 'node:test';
import assert from 'node:assert/strict';
import { pickVenue, normalizeVenueName } from './venue-resolve.mjs';

const v = (name, city, state, upcoming, id) => ({
  id,
  name,
  city: { name: city },
  state: { stateCode: state },
  upcomingEvents: { _total: upcoming },
});

test('requires the city to match, not just the name', () => {
  // Real hazard: many stadiums share a name fragment across states.
  const candidates = [
    v('Memorial Stadium', 'Lincoln', 'NE', 8, 'NEBRASKA'),
    v('Memorial Stadium', 'Champaign', 'IL', 6, 'ILLINOIS'),
  ];
  assert.equal(pickVenue(candidates, { name: 'Memorial Stadium', city: 'Champaign', state: 'IL' }).id, 'ILLINOIS');
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
