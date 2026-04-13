#!/usr/bin/env node

/**
 * Reads content-calendar.json and schedules posts via Blotato API.
 * Usage:
 *   node marketing-agents/scripts/schedule-blotato-posts.js
 *   node marketing-agents/scripts/schedule-blotato-posts.js --dry-run
 *   node marketing-agents/scripts/schedule-blotato-posts.js --filter deal-alert-twitter-001
 *   node marketing-agents/scripts/schedule-blotato-posts.js --only-platform twitter
 */

import { readFileSync } from 'fs';
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

console.log(`${dryRun ? '[DRY RUN] ' : ''}Scheduling ${entries.length} posts...`);

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
    console.log(`  OK   ${entry.id} → ${entry.platform} (${account.username}) — scheduled`);
    return { id: entry.id, status: 'scheduled', postId: result.id };
  } catch (err) {
    console.error(`  FAIL ${entry.id}: ${err.message}`);
    return { id: entry.id, status: 'error', error: err.message };
  }
}

async function run() {
  const results = [];
  for (const entry of entries) {
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
