import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('homepage describes the watchlist without implying price monitoring', async () => {
  const source = await readFile(new URL('./page.tsx', import.meta.url), 'utf8');

  assert.match(source, /Save it\./);
  assert.doesNotMatch(source, /Track it\.|we watch them for you|<polyline/);
});
