#!/usr/bin/env node

/**
 * Fetches connected Blotato accounts and writes platform → accountId mapping.
 * Usage: node marketing-agents/scripts/fetch-blotato-accounts.js
 */

import { readFileSync, writeFileSync } from 'fs';
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
  // .env may not exist in CI
}

const API_KEY = process.env.BLOTATO_API_KEY;
if (!API_KEY) {
  console.error('Error: BLOTATO_API_KEY not set in environment or .env');
  process.exit(1);
}

const BLOTATO_BASE = 'https://backend.blotato.com/v2';

async function fetchAccounts() {
  console.log('Fetching Blotato accounts...');

  const res = await fetch(`${BLOTATO_BASE}/users/me/accounts`, {
    headers: { 'blotato-api-key': API_KEY },
  });

  if (!res.ok) {
    const body = await res.text();
    console.error(`Blotato API error ${res.status}: ${body}`);
    process.exit(1);
  }

  const data = await res.json();
  const accounts = Array.isArray(data) ? data : data.items || [];
  console.log(`Found ${accounts.length} total accounts`);

  const PLATFORM_MAP = {
    twitter: 'twitter',
    tiktok: 'tiktok',
    instagram: 'instagram',
    threads: 'threads',
  };

  const result = {
    _note: `Auto-refreshed ${new Date().toISOString()}`,
  };

  for (const account of accounts) {
    const platform = (account.platform || '').toLowerCase();
    if (!PLATFORM_MAP[platform]) continue;

    const username = (account.username || account.name || '').toLowerCase();
    if (!username.includes('ticketscan')) continue;

    const key = PLATFORM_MAP[platform];
    if (!result[key]) {
      result[key] = {
        accountId: String(account.id),
        username: account.username || account.name,
      };
      console.log(`  ${key}: ${result[key].username} (ID: ${result[key].accountId})`);
    }
  }

  const platforms = Object.keys(result).filter((k) => k !== '_note');
  if (platforms.length === 0) {
    console.warn('Warning: No ticketscan accounts found. Make sure accounts are connected in Blotato.');
    console.warn('Available accounts:');
    for (const a of accounts) {
      console.warn(`  ${a.platform}: ${a.username || a.name} (ID: ${a.id})`);
    }
  }

  const outPath = resolve(__dirname, '../blotato-accounts.json');
  writeFileSync(outPath, JSON.stringify(result, null, 2) + '\n');
  console.log(`\nWritten to ${outPath}`);
}

fetchAccounts().catch((err) => {
  console.error('Failed:', err.message);
  process.exit(1);
});
