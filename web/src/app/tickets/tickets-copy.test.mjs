import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('ticket landing pages do not promise unavailable price comparison features', async () => {
  const source = await readFile(new URL('./[slug]/page.tsx', import.meta.url), 'utf8');

  assert.doesNotMatch(source, /Find the Best Ticket Prices|Compare .* Ticket Prices/);
  assert.doesNotMatch(source, /Ticketmaster, SeatGeek and other major ticket sites/);
});
