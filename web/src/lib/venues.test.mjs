import { test } from 'node:test';
import assert from 'node:assert/strict';

// Node 24 strips types on import, so this asserts against the real data
// rather than a regex over the source. Relative path: `@/` is a Next alias
// the test runner does not resolve.
const { venues } = await import('../data/venues.ts');
const { stadiums, batches } = await import('../data/stadiums/index.ts');

const TIERS = new Set(['floor', 'lower', 'club', 'upper', 'suite']);

test('every venue key matches its own id', () => {
  for (const [key, v] of Object.entries(venues)) {
    assert.equal(v.id, key, `venue "${key}" has id "${v.id}"`);
  }
});

test('every venue carries the facts its page renders', () => {
  for (const [key, v] of Object.entries(venues)) {
    assert.ok(v.name && v.name.trim(), `${key}: no name`);
    assert.ok(v.city && v.city.trim(), `${key}: no city`);
    assert.ok(v.state && v.state.trim(), `${key}: no state`);
    assert.ok(Number.isInteger(v.capacity) && v.capacity > 0, `${key}: bad capacity`);
    assert.ok(['arena', 'stadium', 'theater'].includes(v.type), `${key}: bad type`);
  }
});

test('every venue has a usable section map', () => {
  for (const [key, v] of Object.entries(venues)) {
    assert.ok(Array.isArray(v.sections) && v.sections.length >= 4, `${key}: under 4 sections`);
    for (const s of v.sections) {
      assert.ok(s.name && s.name.trim(), `${key}: unnamed section`);
      assert.ok(TIERS.has(s.tier), `${key}: section "${s.name}" has tier "${s.tier}"`);
    }
  }
});

test('stadiums compose into venues without collisions', () => {
  for (const key of Object.keys(stadiums)) {
    assert.ok(venues[key], `stadium "${key}" is missing from the composed venues record`);
  }
});

// A slug collision between two batches is invisible in `stadiums` (and in
// `venues`) by definition: object keys are unique, so the spread that
// composes the batches together silently keeps one school's venue and
// drops the other's, with no error and no failing assertion. The only place
// a collision can be seen is by comparing the batches pairwise, before
// they're composed. Do not "simplify" this back into a check on the
// composed record.
test('no two batches define the same slug', () => {
  const seen = new Map();
  for (const [batchName, record] of Object.entries(batches)) {
    for (const slug of Object.keys(record)) {
      const prior = seen.get(slug);
      assert.ok(
        !prior,
        `slug "${slug}" is defined in both ${prior} and ${batchName} — one silently overwrites the other`,
      );
      seen.set(slug, batchName);
    }
  }
});

test('football stadiums do not use the floor tier', () => {
  // tierPricing labels `floor` "Floor/Courtside". There is no floor at a
  // football game, and the label would render as a price tier on the page.
  for (const [key, v] of Object.entries(stadiums)) {
    for (const s of v.sections) {
      assert.notEqual(s.tier, 'floor', `${key}: section "${s.name}" uses the floor tier`);
    }
  }
});
