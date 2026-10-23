import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('blog content does not promise unavailable price-tracking features', async () => {
  const source = await readFile(new URL('./blog.ts', import.meta.url), 'utf8');

  assert.doesNotMatch(source, /set price alerts|price alerts built-in|track resale prices/i);
  assert.doesNotMatch(source, /TicketScan[^\n]*(?:track prices|monitor prices|live prices|compare prices across)/i);
  assert.doesNotMatch(source, /(?:our data shows|we compared \d+|actual last-minute savings from our users)/i);
  assert.doesNotMatch(source, /we(?:'ll| will) notify you when (?:prices|tickets) (?:drop|hit)/i);
});
