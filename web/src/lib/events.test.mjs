import { test } from 'node:test';
import assert from 'node:assert/strict';

// Node 24 strips types on import, so these run against the real module.
const { cleanEvents, cleanTeamEvents, formatEventDayParts, isThinTeamPage } = await import('./events.ts');

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

// --- Calendar dates must not be timezone-shifted -------------------------

test('formatEventDayParts renders a plain calendar date as itself', () => {
  // The feed's `date` is always a plain YYYY-MM-DD local calendar date, never
  // a timestamp. `new Date('2026-09-05')` reads that as UTC midnight, which is
  // Sep 4 8pm Eastern, so every date-only event rendered one day early:
  // Alabama's home opener is Saturday Sep 5 and the page said Fri Sep 4.
  assert.deepEqual(formatEventDayParts('2026-09-05'), { day: '5', month: 'SEP' });
  assert.deepEqual(formatEventDayParts('2026-01-01'), { day: '1', month: 'JAN' });
  assert.deepEqual(formatEventDayParts('2026-12-31'), { day: '31', month: 'DEC' });
});

test('formatEventDayParts still pins a real timestamp to Eastern', () => {
  // Onsale timestamps are genuine UTC instants and must keep converting, or a
  // 1am ET onsale would be labelled with the wrong day for the whole country.
  assert.deepEqual(formatEventDayParts('2026-09-05T02:30:00Z'), { day: '4', month: 'SEP' });
});

test('formatEventDayParts rejects junk instead of inventing a date', () => {
  assert.equal(formatEventDayParts(''), null);
  assert.equal(formatEventDayParts(null), null);
  assert.equal(formatEventDayParts('not-a-date'), null);
  assert.equal(formatEventDayParts('2026-13-45'), null);
});

// --- Thin team pages -----------------------------------------------------

test('isThinTeamPage is true only with no venue AND no games', () => {
  // The offseason case this exists for: MLB in November.
  assert.equal(isThinTeamPage(undefined, 0), true);

  // A schedule carries the page even with no venue guide.
  assert.equal(isThinTeamPage(undefined, 12), false);
  // A venue panel carries the page even out of season — this is the shape the
  // spec's offseason clause describes, and it must stay indexable.
  assert.equal(isThinTeamPage('att-stadium', 0), false);
  assert.equal(isThinTeamPage('att-stadium', 12), false);
  // An empty-string slug is absent, not a venue.
  assert.equal(isThinTeamPage('', 0), true);
});
