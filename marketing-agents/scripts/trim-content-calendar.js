#!/usr/bin/env node

/**
 * Drops content-calendar.json entries whose scheduledTime is more than
 * KEEP_DAYS in the past. Usage:
 *   node marketing-agents/scripts/trim-content-calendar.js
 *   node marketing-agents/scripts/trim-content-calendar.js --dry-run
 *
 * The Social Media agent appends to the calendar every day and nothing ever
 * removed an entry, so it only grew. run-daily.sh now commits the calendar
 * (a tracked file left uncommitted is wiped by any checkout, which is how the
 * 2026-08-27 reset lost a day's entries), and an ever-growing file would put
 * every old post in every daily diff.
 *
 * Trimming cannot cause a re-send: schedule-blotato-posts.js never sends a
 * post more than STALE_AFTER_HOURS old, and anything trimmed here is weeks
 * past that. Entries with no parseable scheduledTime are kept. An unreadable
 * calendar is left untouched and the script exits 1.
 */

import { readFileSync, renameSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CALENDAR = resolve(__dirname, '../content-calendar.json');
const KEEP_DAYS = Number(process.env.CALENDAR_KEEP_DAYS || 30);
const dryRun = process.argv.includes('--dry-run');

let entries;
try {
  entries = JSON.parse(readFileSync(CALENDAR, 'utf8'));
  if (!Array.isArray(entries)) throw new Error('calendar is not an array');
} catch (err) {
  console.error(`Calendar unreadable, not trimming: ${err.message}`);
  process.exit(1);
}

const cutoff = Date.now() - KEEP_DAYS * 24 * 60 * 60 * 1000;
const kept = entries.filter((e) => {
  const t = Date.parse(e?.scheduledTime);
  return Number.isNaN(t) || t >= cutoff;
});
const dropped = entries.length - kept.length;

console.log(`Calendar: ${entries.length} entries, dropping ${dropped} older than ${KEEP_DAYS} days, keeping ${kept.length}`);
if (dropped === 0 || dryRun) process.exit(0);

// Write-then-rename so a crash mid-write cannot leave a truncated calendar.
const tmp = `${CALENDAR}.tmp`;
writeFileSync(tmp, JSON.stringify(kept, null, 2) + '\n');
renameSync(tmp, CALENDAR);
