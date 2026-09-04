import { test } from 'node:test';
import assert from 'node:assert/strict';
import { LEAGUE_CLASSIFICATION, pickAttraction, teamSlug } from './team-resolve.mjs';

// Shapes mirror Ticketmaster's attractions payload, trimmed to what we use.
const att = (name, genre, subGenre, upcoming, id) => ({
  id,
  name,
  upcomingEvents: { _total: upcoming },
  classifications: [{ genre: { name: genre }, subGenre: { name: subGenre } }],
});

test('every league we seed has a classification', () => {
  for (const league of ['nfl', 'nba', 'nhl', 'mlb', 'college-football']) {
    assert.ok(LEAGUE_CLASSIFICATION[league], `no classification for ${league}`);
    assert.ok(LEAGUE_CLASSIFICATION[league].genre);
    assert.ok(LEAGUE_CLASSIFICATION[league].subGenre);
  }
});

test('rejects a same-named act from the wrong classification', () => {
  // Real case: Ticketmaster returns a Pop/Electro Pop act called
  // "The Dallas Cowboys" alongside the NFL team.
  const candidates = [
    att('The Dallas Cowboys', 'Pop', 'Electro Pop', 0, 'K8vZ917Ok3V'),
    att('Dallas Cowboys', 'Football', 'NFL', 16, 'K8vZ9171oG0'),
  ];
  assert.equal(pickAttraction(candidates, 'nfl').id, 'K8vZ9171oG0');
});

test('prefers the candidate with more upcoming events within the right class', () => {
  // Real case: "Ohio State Buckeyes Football" (13 upcoming) vs a thinner
  // "Ohio State Buckeyes" entry.
  const candidates = [
    att('Ohio State Buckeyes', 'Football', 'College', 1, 'THIN'),
    att('Ohio State Buckeyes Football', 'Football', 'College', 13, 'FULL'),
  ];
  assert.equal(pickAttraction(candidates, 'college-football').id, 'FULL');
});

test('returns null rather than guessing when nothing qualifies', () => {
  const candidates = [att('Some Band', 'Pop', 'Electro Pop', 40, 'BAND')];
  assert.equal(pickAttraction(candidates, 'nfl'), null);
  assert.equal(pickAttraction([], 'nfl'), null);
  assert.equal(pickAttraction(null, 'nfl'), null);
  assert.equal(pickAttraction([att('X', 'Football', 'NFL', 1, 'Y')], 'not-a-league'), null);
});

test('does not confuse the two football subgenres', () => {
  const candidates = [
    att('Michigan Wolverines Football', 'Football', 'College', 7, 'COLLEGE'),
    att('Detroit Lions', 'Football', 'NFL', 12, 'NFL'),
  ];
  assert.equal(pickAttraction(candidates, 'college-football').id, 'COLLEGE');
  assert.equal(pickAttraction(candidates, 'nfl').id, 'NFL');
});

test('tolerates malformed candidates without throwing', () => {
  const candidates = [
    {},
    { name: 'No classifications' },
    { name: 'Empty', classifications: [] },
    att('Dallas Cowboys', 'Football', 'NFL', 16, 'GOOD'),
  ];
  assert.equal(pickAttraction(candidates, 'nfl').id, 'GOOD');
});

test('teamSlug produces stable url-safe slugs', () => {
  assert.equal(teamSlug('Dallas Cowboys'), 'dallas-cowboys');
  assert.equal(teamSlug('Texas A&M Aggies'), 'texas-am-aggies');
  assert.equal(teamSlug('Ohio State Buckeyes Football'), 'ohio-state-buckeyes-football');
  assert.equal(teamSlug('  San Francisco 49ers '), 'san-francisco-49ers');
});
