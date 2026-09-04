import { test } from 'node:test';
import assert from 'node:assert/strict';

// Node 24 strips types on import, so these run against the real module.
const { cleanEvents, cleanTeamEvents } = await import('./events.ts');

const ev = (id, name) => ({ id, name });

test('cleanEvents still collapses repeats of the same title', () => {
  // The city and combo pages depend on this. A residency must not crowd out
  // every other act on a mixed listing.
  const out = cleanEvents([ev('1', 'Adele'), ev('2', 'Adele'), ev('3', 'Bruce Springsteen')]);
  assert.deepEqual(out.map((e) => e.id), ['1', '3']);
});

test('cleanTeamEvents keeps repeated matchups — a series is not a duplicate', () => {
  // The real defect: st-louis-cardinals returned 40 events with 18 unique
  // names, so two of every three-game series vanished from the schedule.
  const series = [
    ev('a', 'St. Louis Cardinals at Chicago Cubs'),
    ev('b', 'St. Louis Cardinals at Chicago Cubs'),
    ev('c', 'St. Louis Cardinals at Chicago Cubs'),
  ];
  assert.equal(cleanEvents(series).length, 1);
  assert.deepEqual(cleanTeamEvents(series).map((e) => e.id), ['a', 'b', 'c']);
});

test('cleanTeamEvents still drops non-events and true duplicate rows', () => {
  const out = cleanTeamEvents([
    ev('a', 'Cardinals vs Cubs'),
    ev('a', 'Cardinals vs Cubs'),
    ev('b', 'Busch Stadium Parking'),
    ev('c', 'Cardinals Hospitality Package'),
    ev('d', ''),
    ev('e', 'Cardinals vs Cubs'),
  ]);
  assert.deepEqual(out.map((e) => e.id), ['a', 'e']);
});

test('cleanTeamEvents keeps a row that has no id rather than dropping it', () => {
  const out = cleanTeamEvents([{ name: 'Cardinals vs Cubs' }, ev('a', 'Cardinals vs Cubs')]);
  assert.equal(out.length, 2);
});
