import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('event page does not publish unavailable price-tracking claims', async () => {
  const source = await readFile(new URL('./[id]/page.tsx', import.meta.url), 'utf8');

  assert.doesNotMatch(source, /Price History|Price tracking|price trends|Good Time to Buy|Consider Waiting|Monitor Prices/);
});
