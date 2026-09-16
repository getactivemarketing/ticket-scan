#!/usr/bin/env node

/**
 * Reads content-calendar.json and schedules posts via Blotato API.
 * Usage:
 *   node marketing-agents/scripts/schedule-blotato-posts.js
 *   node marketing-agents/scripts/schedule-blotato-posts.js --dry-run
 *   node marketing-agents/scripts/schedule-blotato-posts.js --filter deal-alert-twitter-001
 *   node marketing-agents/scripts/schedule-blotato-posts.js --only-platform twitter
 *
 * Three guards run before anything reaches Blotato. Each one alone prevents the
 * failure it names; they are independent on purpose.
 *
 * 1. Already scheduled. content-calendar.json is APPENDED to every day (see
 *    prompts/03-social-media-daily.md) and never trimmed, so without a record
 *    of what was sent, every run re-sends every post ever written.
 *    scheduled-log.json is that record: one row per post Blotato accepted.
 *    This logic ran on 2026-08-26 ("Skipping 213 entries already in
 *    scheduled-log.json") but was never committed, and was lost when tracked
 *    files were reset on 2026-08-27. The committed version sent everything.
 *
 * 2. Stale. A post whose scheduledTime passed more than STALE_AFTER_HOURS ago
 *    is never sent, whatever the log says. As of 2026-09-16 the calendar held
 *    64 posts from April about April events; with guard 1 gone, the first
 *    successful run would have handed all of them to Blotato at once.
 *
 * 3. Media not live. mediaUrls point at www.ticketscan.io, which only serves a
 *    new image after the day's push to main has deployed (~16 min). A post is
 *    held until every one of its images answers 200, or skipped — and left
 *    out of the log so the next run retries it, subject to guard 2.
 */

import { existsSync, readFileSync, renameSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env from project root
const envPath = resolve(__dirname, '../../.env');
try {
  const envContent = readFileSync(envPath, 'utf8');
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIndex = trimmed.indexOf('=');
    if (eqIndex === -1) continue;
    const key = trimmed.slice(0, eqIndex).trim();
    const value = trimmed.slice(eqIndex + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
} catch {
  // .env may not exist
}

const API_KEY = process.env.BLOTATO_API_KEY;
if (!API_KEY) {
  console.error('Error: BLOTATO_API_KEY not set');
  process.exit(1);
}

const BLOTATO_BASE = 'https://backend.blotato.com/v2';

// Guard 2: how long after its scheduledTime a post is still worth sending.
// Generous enough to cover the push + deploy + media wait on the same run.
const STALE_AFTER_HOURS = Number(process.env.STALE_AFTER_HOURS || 2);
// Guard 3: how long to wait for the day's deploy to make new images live.
const MEDIA_WAIT_SECONDS = Number(process.env.MEDIA_WAIT_SECONDS || 1800);
const MEDIA_POLL_SECONDS = 30;

// Parse CLI args
const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const filterIdx = args.indexOf('--filter');
const filterId = filterIdx !== -1 ? args[filterIdx + 1] : null;
const platformIdx = args.indexOf('--only-platform');
const onlyPlatform = platformIdx !== -1 ? args[platformIdx + 1] : null;
const calendarIdx = args.indexOf('--calendar');
const calendarPath = calendarIdx !== -1
  ? resolve(args[calendarIdx + 1])
  : resolve(__dirname, '../content-calendar.json');
// Overridable so the guards can be tested against a scratch log.
const logPath = process.env.SCHEDULED_LOG
  ? resolve(process.env.SCHEDULED_LOG)
  : resolve(__dirname, '../scheduled-log.json');

// Load accounts
const accountsPath = resolve(__dirname, '../blotato-accounts.json');
let accounts;
try {
  accounts = JSON.parse(readFileSync(accountsPath, 'utf8'));
} catch {
  console.error(`Error: Could not read ${accountsPath}. Run fetch-accounts first.`);
  process.exit(1);
}

// Load calendar
let calendar;
try {
  calendar = JSON.parse(readFileSync(calendarPath, 'utf8'));
} catch {
  console.error(`Error: Could not read ${calendarPath}`);
  process.exit(1);
}

// Load the scheduled log (guard 1). A missing log is survivable — guard 2 still
// blocks old posts — but an unreadable one is not: treating a corrupt log as
// empty is precisely how the whole calendar gets re-sent.
let scheduledLog = [];
if (existsSync(logPath)) {
  try {
    scheduledLog = JSON.parse(readFileSync(logPath, 'utf8'));
    if (!Array.isArray(scheduledLog)) throw new Error('not an array');
  } catch (err) {
    console.error(`Error: ${logPath} is unreadable (${err.message}). Refusing to schedule without the dedupe record.`);
    process.exit(1);
  }
} else {
  console.warn(`Warning: ${logPath} not found — only the staleness guard will prevent re-sends.`);
}

function appendToLog(row) {
  scheduledLog.push(row);
  // Written after EVERY accepted post, via temp file + rename, so a crash
  // mid-run cannot lose the record of posts Blotato already has.
  const tmp = `${logPath}.tmp`;
  writeFileSync(tmp, `${JSON.stringify(scheduledLog, null, 2)}\n`);
  renameSync(tmp, logPath);
}

if (calendar.length === 0) {
  console.log('Content calendar is empty. Nothing to schedule.');
  process.exit(0);
}

// Filter entries
let entries = calendar;
if (filterId) {
  entries = entries.filter((e) => e.id === filterId);
}
if (onlyPlatform) {
  entries = entries.filter((e) => e.platform === onlyPlatform);
}

// Guard 1: already scheduled
const alreadyScheduled = new Set(scheduledLog.map((row) => row.id));
const beforeDedupe = entries.length;
entries = entries.filter((e) => !alreadyScheduled.has(e.id));
const dedupedCount = beforeDedupe - entries.length;
if (dedupedCount) console.log(`Skipping ${dedupedCount} entries already in scheduled-log.json.`);

// Guard 2: stale
const staleCutoff = Date.now() - STALE_AFTER_HOURS * 3600 * 1000;
const stale = entries.filter((e) => e.scheduledTime && !(Date.parse(e.scheduledTime) >= staleCutoff));
if (stale.length) {
  console.log(`Skipping ${stale.length} entries whose scheduledTime passed more than ${STALE_AFTER_HOURS}h ago (or is invalid):`);
  for (const e of stale.slice(0, 5)) console.log(`  STALE ${e.id} (${e.scheduledTime})`);
  if (stale.length > 5) console.log(`  ...and ${stale.length - 5} more`);
}
const staleIds = new Set(stale.map((e) => e.id));
entries = entries.filter((e) => !staleIds.has(e.id));

console.log(`${dryRun ? '[DRY RUN] ' : ''}Scheduling ${entries.length} posts...`);

// Guard 3: media live
async function isLive(url) {
  try {
    let res = await fetch(url, { method: 'HEAD' });
    if (res.status === 405) res = await fetch(url, { method: 'GET' });
    return res.ok;
  } catch {
    return false;
  }
}

async function waitForMedia(urls) {
  const pending = new Set(urls);
  const deadline = Date.now() + (dryRun ? 0 : MEDIA_WAIT_SECONDS * 1000);
  for (;;) {
    for (const url of [...pending]) {
      if (await isLive(url)) pending.delete(url);
    }
    if (pending.size === 0 || Date.now() >= deadline) break;
    console.log(`  waiting for ${pending.size} image(s) to go live...`);
    await new Promise((r) => setTimeout(r, MEDIA_POLL_SECONDS * 1000));
  }
  return pending; // URLs that never went live
}

async function schedulePost(entry) {
  const account = accounts[entry.platform];
  if (!account) {
    console.warn(`  SKIP ${entry.id}: No ${entry.platform} account in blotato-accounts.json`);
    return { id: entry.id, status: 'skipped', reason: 'no account' };
  }

  const content = {
    text: entry.text,
    mediaUrls: entry.mediaUrls || [],
    platform: entry.platform,
  };

  // Twitter threads
  if (entry.platform === 'twitter' && Array.isArray(entry.additionalPosts) && entry.additionalPosts.length) {
    content.additionalPosts = entry.additionalPosts.map((text) => ({ text, mediaUrls: [] }));
  }

  // YouTube Shorts title
  if (entry.platform === 'youtube' && entry.title) {
    content.title = entry.title;
  }

  // Platform-specific target fields
  const target = { targetType: entry.platform };

  if (entry.platform === 'tiktok') {
    Object.assign(target, {
      privacyLevel: 'PUBLIC_TO_EVERYONE',
      disabledComments: false,
      disabledDuet: false,
      disabledStitch: false,
      isBrandedContent: false,
      isYourBrand: true,
      isAiGenerated: false,
      ...(entry.target || {}),
    });
  }

  if (entry.platform === 'youtube') {
    Object.assign(target, {
      title: entry.title || entry.text?.slice(0, 100) || 'TicketScan',
      privacyStatus: 'public',
      shouldNotifySubscribers: true,
      isMadeForKids: false,
    });
  }

  const payload = {
    post: {
      accountId: account.accountId,
      content,
      target,
    },
  };

  if (entry.scheduledTime) {
    payload.scheduledTime = entry.scheduledTime;
  }

  if (dryRun) {
    console.log(`  [DRY] ${entry.id} → ${entry.platform} (${account.username}) at ${entry.scheduledTime}`);
    console.log(`         "${entry.text.slice(0, 80)}${entry.text.length > 80 ? '...' : ''}"`);
    return { id: entry.id, status: 'dry-run' };
  }

  try {
    const res = await fetch(`${BLOTATO_BASE}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'blotato-api-key': API_KEY,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error(`  FAIL ${entry.id}: ${res.status} — ${body}`);
      return { id: entry.id, status: 'error', error: body };
    }

    const result = await res.json();
    appendToLog({ id: entry.id, postId: result.id ?? null, scheduledAt: new Date().toISOString(), seeded: false });
    console.log(`  OK   ${entry.id} → ${entry.platform} (${account.username}) — scheduled`);
    return { id: entry.id, status: 'scheduled', postId: result.id };
  } catch (err) {
    console.error(`  FAIL ${entry.id}: ${err.message}`);
    return { id: entry.id, status: 'error', error: err.message };
  }
}

async function run() {
  const results = [];

  const mediaUrls = [...new Set(entries.flatMap((e) => e.mediaUrls || []))];
  const notLive = mediaUrls.length ? await waitForMedia(mediaUrls) : new Set();

  for (const entry of entries) {
    const missing = (entry.mediaUrls || []).filter((url) => notLive.has(url));
    if (missing.length) {
      console.warn(`  SKIP ${entry.id}: image not live — ${missing[0]}${missing.length > 1 ? ` (+${missing.length - 1})` : ''}`);
      results.push({ id: entry.id, status: 'skipped', reason: 'media not live' });
      continue;
    }
    results.push(await schedulePost(entry));
    // Throttle: 2s between requests to avoid Blotato rate limits
    if (!dryRun) await new Promise((r) => setTimeout(r, 2000));
  }

  const scheduled = results.filter((r) => r.status === 'scheduled').length;
  const skipped = results.filter((r) => r.status === 'skipped').length;
  const errors = results.filter((r) => r.status === 'error').length;
  const dry = results.filter((r) => r.status === 'dry-run').length;

  console.log(`\nDone: ${scheduled} scheduled, ${skipped} skipped, ${errors} errors${dry ? `, ${dry} dry-run` : ''}`);
}

run().catch((err) => {
  console.error('Failed:', err.message);
  process.exit(1);
});
