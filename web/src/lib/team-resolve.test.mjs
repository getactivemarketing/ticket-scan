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

test('name agreement rejects a same-classification, wrong-team candidate (Washington State / Houston)', () => {
  const candidates = [
    att('University of Houston Cougars Football', 'Football', 'College', 20, 'HOUSTON'),
  ];
  assert.equal(pickAttraction(candidates, 'college-football', 'Washington State Cougars Football'), null);
});

test('name agreement rejects an unrelated same-classification team (Charlotte Hornets / Pelicans)', () => {
  const candidates = [
    att('New Orleans Pelicans', 'Basketball', 'NBA', 30, 'PELICANS'),
  ];
  assert.equal(pickAttraction(candidates, 'nba', 'Charlotte Hornets'), null);
});

test('name agreement rejects a same-city decoy college team (Miami Hurricanes / Miami OH)', () => {
  const candidates = [
    att('Miami University of Ohio Red Hawks Football', 'Football', 'College', 10, 'OHIO'),
  ];
  assert.equal(pickAttraction(candidates, 'college-football', 'Miami Hurricanes Football'), null);
});

test('name agreement rejects a same-state decoy college team (Louisiana Tech / LSU)', () => {
  const candidates = [
    att('Louisiana State University Football', 'Football', 'College', 25, 'LSU'),
  ];
  assert.equal(pickAttraction(candidates, 'college-football', 'Louisiana Tech Bulldogs Football'), null);
});

test('name agreement accepts an exact match despite ampersand punctuation (Texas A&M)', () => {
  const candidates = [
    att('Texas A&M Aggies Football', 'Football', 'College', 12, 'AGGIES'),
  ];
  assert.equal(
    pickAttraction(candidates, 'college-football', 'Texas A&M Aggies Football').id,
    'AGGIES',
  );
});

test('name agreement accepts an identically-named attraction using an abbreviated seed name (Univ of South Carolina)', () => {
  const candidates = [
    att('Univ of South Carolina Gamecocks Football', 'Football', 'College', 8, 'GAMECOCKS'),
  ];
  assert.equal(
    pickAttraction(candidates, 'college-football', 'Univ of South Carolina Gamecocks Football').id,
    'GAMECOCKS',
  );
});

test('name agreement picks the correct team over a higher-event decoy in the same classification', () => {
  const candidates = [
    att('University of Houston Cougars Football', 'Football', 'College', 40, 'HOUSTON'),
    att('Washington State Cougars Football', 'Football', 'College', 5, 'WSU'),
  ];
  assert.equal(
    pickAttraction(candidates, 'college-football', 'Washington State Cougars Football').id,
    'WSU',
  );
});

test('omitting expectedName preserves prior two-argument behaviour', () => {
  const candidates = [
    att('University of Houston Cougars Football', 'Football', 'College', 40, 'HOUSTON'),
    att('Washington State Cougars Football', 'Football', 'College', 5, 'WSU'),
  ];
  // No third argument: falls back to busiest-in-classification, matching the
  // committed Task 1 behaviour exactly.
  assert.equal(pickAttraction(candidates, 'college-football').id, 'HOUSTON');
});

test('a single-token name prefers the candidate carrying no extra tokens (Utah)', () => {
  // Live candidates for utah-football, all Football/College, all containing
  // "utah", and tied at 11-12 upcoming events. Containment alone qualifies
  // every one of them; before this ranking we held the right attraction only
  // because "K8vZ917Bt0" sorts before "K8vZ917r-o7" and "K8vZ917uo7f".
  const candidates = [
    att('Utah Tech Trailblazers Football', 'Football', 'College', 12, 'K8vZ917r-o7'),
    att('Southern Utah Thunderbirds Football', 'Football', 'College', 12, 'K8vZ917uo7f'),
    att('Utah State University Aggies Football', 'Football', 'College', 11, 'K8vZ9171zq7'),
    att('Utah Football', 'Football', 'College', 12, 'K8vZ917Bt0'),
  ];
  assert.equal(pickAttraction(candidates, 'college-football', 'Utah Football').id, 'K8vZ917Bt0');
});

test('extras outrank event count, so a busier decoy cannot win on a single-token name (Utah)', () => {
  // The failure mode that made this urgent: the index rebuilds nightly, so one
  // extra Utah Tech game used to be enough to flip the page.
  const candidates = [
    att('Utah Tech Trailblazers Football', 'Football', 'College', 99, 'TECH'),
    att('Utah Football', 'Football', 'College', 1, 'UTAH'),
  ];
  assert.equal(pickAttraction(candidates, 'college-football', 'Utah Football').id, 'UTAH');
});

test('a second single-token name resolves the same way (Tulane / UMass)', () => {
  const tulane = [
    att('Tulane Green Wave Football', 'Football', 'College', 20, 'GREENWAVE'),
    att('Tulane University Football', 'Football', 'College', 6, 'TULANE'),
  ];
  assert.equal(
    pickAttraction(tulane, 'college-football', 'Tulane University Football').id,
    'TULANE',
  );

  const umass = [
    att('UMass Minutemen Football', 'Football', 'College', 30, 'MINUTEMEN'),
    att('UMass Football', 'Football', 'College', 5, 'UMASS'),
  ];
  assert.equal(pickAttraction(umass, 'college-football', 'UMass Football').id, 'UMASS');
});

test('extras never override classification or name agreement', () => {
  // A zero-extras candidate in the wrong classification still loses to a
  // correctly-classified one, and a non-agreeing name still cannot qualify.
  const candidates = [
    att('Utah Football', 'Basketball', 'NBA', 40, 'WRONGCLASS'),
    att('Utah Utes Football', 'Football', 'College', 3, 'RIGHTCLASS'),
  ];
  assert.equal(
    pickAttraction(candidates, 'college-football', 'Utah Utes Football').id,
    'RIGHTCLASS',
  );
  assert.equal(pickAttraction(candidates, 'college-football', 'Ohio State Buckeyes'), null);
});

test('matchesClass survives a truthy non-array classifications field', () => {
  // A malformed row must not throw and kill the whole nightly index build.
  const candidates = [
    { id: 'BAD', name: 'Broken', classifications: 'nope', upcomingEvents: { _total: 9 } },
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
