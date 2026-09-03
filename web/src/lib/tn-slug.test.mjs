import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  normalizeName,
  keyFromSlug,
  performerKeys,
  resolveFromIndex,
  CATEGORY_MAP,
} from './tn-slug.mjs';

test('normalizeName lowercases, strips punctuation and drops a leading "the"', () => {
  assert.equal(normalizeName('The Weeknd'), 'weeknd');
  assert.equal(normalizeName('Guns N\' Roses'), 'guns n roses');
  assert.equal(normalizeName('Beyoncé'), 'beyonce');
  assert.equal(normalizeName('AC/DC'), 'ac dc');
  assert.equal(normalizeName('  Hall   &  Oates '), 'hall and oates');
});

test('normalizeName is total — non-strings and empties do not throw', () => {
  assert.equal(normalizeName(undefined), '');
  assert.equal(normalizeName(null), '');
  assert.equal(normalizeName(''), '');
  assert.equal(normalizeName('!!!'), '');
});

test('keyFromSlug reverses a TicketNetwork slug onto the same key as the name', () => {
  assert.equal(keyFromSlug('bruno-mars-tickets'), normalizeName('Bruno Mars'));
  assert.equal(keyFromSlug('the-weeknd-tickets'), normalizeName('The Weeknd'));
  // Not every category slug ends in -tickets; only a trailing one is dropped.
  assert.equal(keyFromSlug('music-festivals'), 'music festivals');
  assert.equal(keyFromSlug('tickets-for-less-tickets'), 'tickets for less');
});

test('performerKeys splits the sports "A at B" and "A vs B" forms', () => {
  const keys = performerKeys('Chicago Bears at Green Bay Packers');
  assert.ok(keys.includes('chicago bears at green bay packers'));
  assert.ok(keys.includes('chicago bears'));
  assert.ok(keys.includes('green bay packers'));

  const vs = performerKeys('Lakers vs. Celtics');
  assert.ok(vs.includes('lakers'));
  assert.ok(vs.includes('celtics'));
});

test('performerKeys strips a tour subtitle but keeps the full name first', () => {
  const keys = performerKeys('Bruno Mars: The 24K Magic Tour');
  assert.equal(keys[0], 'bruno mars the 24k magic tour');
  assert.ok(keys.includes('bruno mars'));
});

const INDEX = {
  performers: { 'bruno mars': 'bruno-mars-tickets', 'chicago bears': 'chicago-bears-tickets' },
  venues: { 'madison square garden': 'madison-square-garden-tickets' },
};

test('resolveFromIndex prefers an exact performer match', () => {
  assert.deepEqual(
    resolveFromIndex(INDEX, { name: 'Bruno Mars', venue: 'Madison Square Garden' }),
    { kind: 'performers', slug: 'bruno-mars-tickets' },
  );
});

test('resolveFromIndex falls back through performer part, then venue, then category', () => {
  assert.deepEqual(
    resolveFromIndex(INDEX, { name: 'Chicago Bears at Green Bay Packers' }),
    { kind: 'performers', slug: 'chicago-bears-tickets' },
  );
  assert.deepEqual(
    resolveFromIndex(INDEX, { name: 'Some Unknown Act', venue: 'Madison Square Garden' }),
    { kind: 'venues', slug: 'madison-square-garden-tickets' },
  );
  assert.deepEqual(
    resolveFromIndex(INDEX, { name: 'Some Unknown Act', category: 'comedy' }),
    { kind: 'category', slug: 'comedy-tickets' },
  );
});

test('resolveFromIndex returns null rather than inventing a slug', () => {
  assert.equal(resolveFromIndex(INDEX, { name: 'Nobody At All' }), null);
  assert.equal(resolveFromIndex(INDEX, {}), null);
  assert.equal(resolveFromIndex({}, { name: 'Bruno Mars' }), null);
  assert.equal(resolveFromIndex(INDEX, { category: 'not-a-category' }), null);
});

test('every category on the site maps to a TicketNetwork page', () => {
  const ours = ['nba', 'nhl', 'concerts', 'theater', 'mlb', 'nfl', 'college-football', 'ufc', 'wwe', 'comedy', 'festivals', 'soccer', 'tennis', 'family'];
  for (const slug of ours) {
    assert.ok(CATEGORY_MAP[slug], `no TicketNetwork mapping for category "${slug}"`);
    assert.match(CATEGORY_MAP[slug].slug, /^[a-z0-9][a-z0-9-]*$/);
  }
});
