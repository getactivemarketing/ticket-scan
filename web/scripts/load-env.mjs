// Loads the repo-root .env into process.env for scripts that talk to
// Ticketmaster directly.
//
// Why this exists: build:teams and build:venue-ids read
// process.env.TICKETMASTER_API_KEY, and run-daily.sh never provided it. They
// worked when run by hand from a shell that already had the key and failed
// every night with "TICKETMASTER_API_KEY is required." — silently, because both
// are deliberately non-fatal in the runner. First observed 2026-09-17, the
// first nightly run that got far enough to reach them.
//
// build:combos is unaffected: it calls the deployed API, which holds the key
// server-side. Only the scripts that call Ticketmaster themselves need this.
//
// An already-set variable always wins, so an explicit `KEY=... npm run ...`
// still overrides the file.
import { readFileSync } from 'node:fs';

export function loadEnv(url = new URL('../../.env', import.meta.url)) {
  let contents;
  try {
    contents = readFileSync(url, 'utf8');
  } catch {
    return; // No .env is fine; the caller's own check reports a missing key.
  }
  for (const line of contents.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    // Strip surrounding quotes, matching how the shell would read the value.
    const value = trimmed.slice(eq + 1).trim().replace(/^(['"])(.*)\1$/, '$2');
    if (!process.env[key]) process.env[key] = value;
  }
}
