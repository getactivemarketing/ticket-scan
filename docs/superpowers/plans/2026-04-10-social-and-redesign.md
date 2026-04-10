# TicketScan Social Media + Site Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrate Blotato for multi-platform social posting (Twitter, TikTok, Instagram, Threads), redesign the homepage with a split hero + product preview, and refresh the blog/article pages with proper markdown rendering and consistent styling.

**Architecture:** Three independent workstreams — (1) Blotato scripts + Agent 3 prompt update + Typefully removal, (2) homepage redesign with transparent navbar, dark hero, floating dashboard card, and tighter below-fold sections, (3) blog pages with `marked` library and navy header. Profile image generation as a final step.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, TypeScript, Node.js, Express, Blotato API, `marked`, `sharp`

**Spec:** `docs/superpowers/specs/2026-04-10-social-and-redesign-design.md`

---

## File Map

### New Files
- `marketing-agents/scripts/fetch-blotato-accounts.js` — Fetch connected Blotato accounts
- `marketing-agents/scripts/schedule-blotato-posts.js` — Schedule posts via Blotato API
- `marketing-agents/blotato-accounts.json` — Platform → account ID mapping (generated)
- `marketing-agents/content-calendar.json` — Scheduled post entries (seeded empty)
- `marketing-agents/scripts/generate-profile-images.js` — Crop profile pics for each platform
- `logos/social/` — Output directory for cropped profile images
- `web/src/components/SocialIcons.tsx` — Inline SVG social icons for footer

### Modified Files
- `package.json` — Add npm scripts, add `sharp` devDependency
- `.env.example` — Add `BLOTATO_API_KEY`
- `marketing-agents/prompts/03-social-media-daily.md` — Update to use Blotato + calendar format
- `index.js` — Remove Typefully endpoints and cron, remove Twitter direct endpoints
- `web/package.json` — Add `marked` dependency
- `web/src/app/page.tsx` — Full homepage redesign
- `web/src/app/globals.css` — Add scroll-based navbar styles
- `web/src/components/Navbar.tsx` — Transparent → solid on scroll, remove gradient
- `web/src/app/blog/[slug]/page.tsx` — Replace formatContent with marked, restyle
- `web/src/app/blog/page.tsx` — Navy header, updated card styles
- `web/src/components/NewsletterSignup.tsx` — May need minor style updates for dark sections

---

## Task 1: Blotato Account Fetching Script

**Files:**
- Create: `marketing-agents/scripts/fetch-blotato-accounts.js`
- Create: `marketing-agents/blotato-accounts.json`
- Modify: `.env.example`

- [ ] **Step 1: Add BLOTATO_API_KEY to .env.example**

Add this line to the end of `/Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/.env.example`:

```env
# Blotato API (multi-platform social posting)
BLOTATO_API_KEY=your_blotato_api_key
```

- [ ] **Step 2: Create the fetch-blotato-accounts script**

Create `marketing-agents/scripts/fetch-blotato-accounts.js`:

```javascript
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

  const accounts = await res.json();
  console.log(`Found ${accounts.length} total accounts`);

  // Filter for ticketscan-related accounts
  const PLATFORM_MAP = {
    twitter: 'twitter',
    tiktok: 'tiktok',
    instagram: 'instagram',
    threads: 'threads',
  };

  const result = {
    _note: `Auto-refreshed ${new Date().toISOString()}`,
  };

  // Find ticketscan accounts — match by username containing "ticketscan"
  for (const account of accounts) {
    const platform = (account.platform || '').toLowerCase();
    if (!PLATFORM_MAP[platform]) continue;

    const username = (account.username || account.name || '').toLowerCase();
    if (!username.includes('ticketscan')) continue;

    const key = PLATFORM_MAP[platform];
    // Take the first match per platform
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
```

- [ ] **Step 3: Create empty blotato-accounts.json placeholder**

Create `marketing-agents/blotato-accounts.json`:

```json
{
  "_note": "Run `npm run fetch-accounts` to populate"
}
```

- [ ] **Step 4: Commit**

```bash
git add .env.example marketing-agents/scripts/fetch-blotato-accounts.js marketing-agents/blotato-accounts.json
git commit -m "feat: add Blotato account fetching script"
```

---

## Task 2: Blotato Post Scheduling Script

**Files:**
- Create: `marketing-agents/scripts/schedule-blotato-posts.js`
- Create: `marketing-agents/content-calendar.json`
- Modify: `package.json`

- [ ] **Step 1: Create empty content calendar**

Create `marketing-agents/content-calendar.json`:

```json
[]
```

- [ ] **Step 2: Create the schedule-blotato-posts script**

Create `marketing-agents/scripts/schedule-blotato-posts.js`:

```javascript
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

  const payload = {
    accountId: account.accountId,
    content: {
      text: entry.text,
      mediaUrls: entry.mediaUrls || [],
    },
    scheduledTime: entry.scheduledTime,
  };

  // Platform-specific fields
  if (entry.platform === 'twitter' && entry.additionalPosts) {
    payload.content.additionalPosts = entry.additionalPosts;
  }
  if (entry.platform === 'tiktok' && entry.target) {
    payload.target = entry.target;
  }
  if (entry.platform === 'youtube' && entry.title) {
    payload.content.title = entry.title;
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
    // Throttle: 200ms between requests
    if (!dryRun) await new Promise((r) => setTimeout(r, 200));
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
```

- [ ] **Step 3: Add npm scripts to root package.json**

In `/Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/package.json`, add to the `"scripts"` block:

```json
"fetch-accounts": "node marketing-agents/scripts/fetch-blotato-accounts.js",
"schedule": "node marketing-agents/scripts/schedule-blotato-posts.js",
"schedule:dry": "node marketing-agents/scripts/schedule-blotato-posts.js --dry-run"
```

- [ ] **Step 4: Commit**

```bash
git add marketing-agents/scripts/schedule-blotato-posts.js marketing-agents/content-calendar.json package.json
git commit -m "feat: add Blotato post scheduling script and content calendar"
```

---

## Task 3: Update Agent 3 Prompt + Retire Typefully

**Files:**
- Modify: `marketing-agents/prompts/03-social-media-daily.md`
- Modify: `index.js` (remove Typefully + Twitter direct endpoints)
- Modify: `package.json` (remove `twitter-api-v2`)

- [ ] **Step 1: Update Agent 3's daily prompt**

Replace the contents of `marketing-agents/prompts/03-social-media-daily.md`. The key changes are:
- Replace Typefully/Instagram API endpoint references with Blotato content calendar output
- Update platform list: Twitter/X, TikTok, Instagram, Threads (was Twitter, Instagram, LinkedIn)
- Agent now appends entries to `marketing-agents/content-calendar.json` instead of calling API endpoints
- Add content pillar guidance (Deal Alerts, Price Intelligence, World Cup, Tips, Savings Wins)

New prompt content:

```markdown
# Agent 3: Social Media Manager — Daily Tasks

## Context
You are the Social Media Manager for TicketScan (ticketscan.io), a ticket price comparison platform. Your job is to create daily social content across 4 platforms and output it to the content calendar for scheduling via Blotato.

## Brand Voice
Helpful, data-driven, slightly irreverent. You're a consumer advocate who helps fans find the best ticket deals. Casual but credible. Use numbers and data when possible.

## Platforms & Cadence
- **Twitter/X:** 2-3 posts per day. Short, punchy, real-time. Links to ticketscan.io.
- **TikTok:** 3-5 posts per week. Video descriptions for Remotion-generated content. Action-oriented.
- **Instagram:** 1 post per day. Mix of Reels captions (cross-posted TikTok) and feed post captions.
- **Threads:** 1 post per day. Adapted from best Twitter post with conversational tone.

## Content Pillars
1. **Deal Alerts** — Price drops, best current deals, "X tickets just dropped Y%"
2. **Price Intelligence** — Buy/wait/hold recommendations, trend charts, data insights
3. **World Cup 2026** — Stadium guides, ticket availability, countdown content
4. **Tips & Education** — Best time to buy, how to compare, money-saving strategies
5. **Savings Wins** — Examples of savings, before/after prices, user stories

## Daily Tasks

### 1. Create Today's Posts
Generate content for each platform. For each post, create a JSON entry in this format:

```json
{
  "id": "YYYY-MM-DD-platform-topic",
  "platform": "twitter|tiktok|instagram|threads",
  "scheduledTime": "ISO 8601 timestamp",
  "text": "Post content here",
  "mediaUrls": []
}
```

For TikTok posts, add a `target` field:
```json
{
  "target": {
    "privacyLevel": "PUBLIC_TO_EVERYONE",
    "disabledComments": false,
    "disabledDuet": false,
    "isBrandedContent": false
  }
}
```

### 2. Scheduling Guidelines
- Twitter: Space posts 3-4 hours apart (9 AM, 1 PM, 5 PM ET)
- Instagram: Post at 11 AM or 6 PM ET
- Threads: Post 30 min after the corresponding Twitter post
- TikTok: Post at 12 PM or 7 PM ET

### 3. Output
Append all new entries to: `marketing-agents/content-calendar.json`

After generating, run: `npm run schedule:dry` to validate, then `npm run schedule` to publish.

### 4. Log Output
Write a daily summary to: `marketing-agents/output/social/social-daily-YYYY-MM-DD.md`
```

- [ ] **Step 2: Remove Typefully integration from index.js**

In `/Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/index.js`, remove:
- Lines ~162-227: Typefully setup, `TYPEFULLY_API_KEY`, `TYPEFULLY_SOCIAL_SET_ID`, `postViaTypefully()` function
- Lines ~110-160: Twitter API v2 setup, `postToTwitter()` function
- The daily tweet cron at line ~3235 (`0 14 * * *`)
- Admin endpoint `POST /api/admin/typefully/post` at line ~3785
- Admin endpoint `POST /api/admin/typefully/daily-tip` at line ~3808
- Admin endpoint `POST /api/admin/twitter/post` at line ~3642
- Admin endpoint `POST /api/admin/twitter/daily-tip` at line ~3665

Search for these patterns and remove each block:
- `TYPEFULLY` (all references)
- `postViaTypefully` (all references)
- `postToTwitter` (all references)
- `TwitterApi` (the import and setup)
- `twitterClient` (all references)

- [ ] **Step 3: Remove twitter-api-v2 from package.json**

In `/Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/package.json`, remove:
```json
"twitter-api-v2": "^1.29.0"
```

- [ ] **Step 4: Remove Typefully/Twitter env vars from .env.example**

In `.env.example`, remove these blocks:
```env
# Twitter/X API
TWITTER_API_KEY=your_twitter_api_key
TWITTER_API_SECRET=your_twitter_api_secret
TWITTER_ACCESS_TOKEN=your_twitter_access_token
TWITTER_ACCESS_SECRET=your_twitter_access_secret
TWITTER_BEARER_TOKEN=your_twitter_bearer_token

# Typefully API (for Twitter posting — bypasses Free tier write restrictions)
TYPEFULLY_API_KEY=your_typefully_api_key
TYPEFULLY_SOCIAL_SET_ID=

# Instagram API
INSTAGRAM_ACCESS_TOKEN=your_long_lived_instagram_token
INSTAGRAM_ACCOUNT_ID=your_instagram_user_id
```

- [ ] **Step 5: Run npm install to update lockfile**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
npm install
```

Expected: `twitter-api-v2` removed from `node_modules` and `package-lock.json` updated.

- [ ] **Step 6: Commit**

```bash
git add marketing-agents/prompts/03-social-media-daily.md index.js package.json package-lock.json .env.example
git commit -m "feat: migrate social posting from Typefully to Blotato

Remove Typefully API integration, Twitter API v2, and Instagram direct
API from the backend. Agent 3 now outputs to content-calendar.json for
Blotato scheduling."
```

---

## Task 4: Homepage Redesign — Navbar (Transparent → Solid)

**Files:**
- Modify: `web/src/components/Navbar.tsx`
- Modify: `web/src/app/globals.css`

- [ ] **Step 1: Add scroll-aware navbar styles to globals.css**

Add to the end of `web/src/app/globals.css`:

```css
/* Navbar scroll behavior */
.navbar-transparent {
  background: transparent !important;
}

.navbar-solid {
  background: #0D1B3D !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}
```

- [ ] **Step 2: Rewrite Navbar.tsx with scroll detection**

Replace the contents of `web/src/components/Navbar.tsx`:

```tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useRouter, usePathname } from 'next/navigation';
import Logo from '@/components/Logo';

export default function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Only use transparent navbar on homepage
  const isHomepage = pathname === '/';

  useEffect(() => {
    if (!isHomepage) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomepage]);

  const handleLogout = () => {
    logout();
    router.push('/');
    setIsMenuOpen(false);
  };

  const closeMenu = () => setIsMenuOpen(false);

  const navClass = isHomepage && !scrolled ? 'navbar-transparent' : 'navbar-solid';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <Logo size={28} className="text-white" />
              <span className="text-white font-heading font-bold text-xl tracking-tight">TicketScan</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-5">
            {user ? (
              <>
                <Link href="/dashboard" className="text-white/80 hover:text-white transition-colors text-sm">
                  Search
                </Link>
                <Link href="/compare" className="text-white/80 hover:text-white transition-colors text-sm">
                  Compare
                </Link>
                <Link href="/watchlist" className="text-white/80 hover:text-white transition-colors text-sm">
                  Watchlist
                </Link>
                <Link href="/favorites" className="text-white/80 hover:text-white transition-colors text-sm">
                  Favorites
                </Link>
                <Link href="/blog" className="text-white/80 hover:text-white transition-colors text-sm">
                  Tips
                </Link>
                <Link href="/world-cup-2026" className="text-white/80 hover:text-white transition-colors text-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full inline-block"></span>
                  World Cup 2026
                </Link>
                <span className="text-white/50 text-xs hidden lg:inline">{user.email}</span>
                <button
                  onClick={handleLogout}
                  className="bg-white/10 hover:bg-white/20 text-white px-4 py-1.5 rounded-lg transition-colors text-sm"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/dashboard" className="text-white/80 hover:text-white transition-colors text-sm">
                  Search
                </Link>
                <Link href="/blog" className="text-white/80 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
                <Link href="/world-cup-2026" className="text-white/80 hover:text-white transition-colors text-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full inline-block"></span>
                  World Cup 2026
                </Link>
                <Link href="/login" className="text-white/80 hover:text-white transition-colors text-sm">
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-white text-navy hover:bg-gray-100 px-4 py-1.5 rounded-lg font-medium transition-colors text-sm"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-navy shadow-lg border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {user ? (
              <>
                <div className="text-white/50 text-sm pb-2 border-b border-white/10">
                  {user.email}
                </div>
                <Link href="/dashboard" className="block text-white hover:text-white/80 py-2 transition-colors" onClick={closeMenu}>
                  Search Events
                </Link>
                <Link href="/compare" className="block text-white hover:text-white/80 py-2 transition-colors" onClick={closeMenu}>
                  Compare Prices
                </Link>
                <Link href="/watchlist" className="block text-white hover:text-white/80 py-2 transition-colors" onClick={closeMenu}>
                  My Watchlist
                </Link>
                <Link href="/favorites" className="block text-white hover:text-white/80 py-2 transition-colors" onClick={closeMenu}>
                  Favorites
                </Link>
                <Link href="/blog" className="block text-white hover:text-white/80 py-2 transition-colors" onClick={closeMenu}>
                  Tips & Guides
                </Link>
                <Link href="/world-cup-2026" className="block text-white hover:text-white/80 py-2 transition-colors flex items-center gap-1.5" onClick={closeMenu}>
                  <span className="w-2 h-2 bg-green-400 rounded-full inline-block"></span>
                  World Cup 2026
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full mt-2 bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg transition-colors text-center"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/dashboard" className="block text-white hover:text-white/80 py-2 transition-colors" onClick={closeMenu}>
                  Search Events
                </Link>
                <Link href="/blog" className="block text-white hover:text-white/80 py-2 transition-colors" onClick={closeMenu}>
                  Blog & Tips
                </Link>
                <Link href="/world-cup-2026" className="block text-white hover:text-white/80 py-2 transition-colors flex items-center gap-1.5" onClick={closeMenu}>
                  <span className="w-2 h-2 bg-green-400 rounded-full inline-block"></span>
                  World Cup 2026
                </Link>
                <Link href="/login" className="block text-white hover:text-white/80 py-2 transition-colors" onClick={closeMenu}>
                  Login
                </Link>
                <Link
                  href="/register"
                  className="block bg-white text-navy hover:bg-gray-100 py-3 rounded-lg font-medium transition-colors text-center mt-2"
                  onClick={closeMenu}
                >
                  Sign Up Free
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
```

- [ ] **Step 3: Verify the dev server builds without errors**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/web
npm run build
```

Expected: Build succeeds. The navbar is now fixed-position, transparent on homepage, solid navy on all other pages, and transitions on scroll.

- [ ] **Step 4: Commit**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
git add web/src/components/Navbar.tsx web/src/app/globals.css
git commit -m "feat: navbar transparent on hero, solid navy on scroll"
```

---

## Task 5: Homepage Redesign — Hero + Stats + Below Fold

**Files:**
- Modify: `web/src/app/page.tsx`
- Create: `web/src/components/SocialIcons.tsx`

- [ ] **Step 1: Create SocialIcons component**

Create `web/src/components/SocialIcons.tsx`:

```tsx
export function TwitterIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function TikTokIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.89a8.15 8.15 0 004.77 1.53V7a4.84 4.84 0 01-1-.31z" />
    </svg>
  );
}

export function InstagramIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export function ThreadsIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.086.718 5.496 2.057 7.164 1.432 1.781 3.632 2.695 6.54 2.717 2.227-.017 4.074-.638 5.49-1.846 1.385-1.18 2.17-2.8 2.33-4.83h.003c.088-1.074-.057-2.118-.432-3.108a5.675 5.675 0 00-1.774-2.38c-.81-.63-1.79-1.042-2.876-1.2a8.536 8.536 0 00-.084-.003 5.39 5.39 0 00-1.7.262 4.127 4.127 0 00-1.47.82c-.41.375-.733.839-.948 1.362-.217.53-.328 1.114-.328 1.735 0 .616.11 1.186.328 1.693.214.497.535.936.944 1.298a4.03 4.03 0 001.45.826c.555.194 1.162.291 1.803.291.563 0 1.097-.076 1.588-.226a3.665 3.665 0 001.277-.672l1.327 1.572c-.56.474-1.235.842-2.01 1.095a7.793 7.793 0 01-2.182.31 7.37 7.37 0 01-2.703-.489 6.098 6.098 0 01-2.168-1.378 6.242 6.242 0 01-1.422-2.094 6.718 6.718 0 01-.506-2.601c0-.932.17-1.8.506-2.584a6.06 6.06 0 011.422-2.07 6.233 6.233 0 012.168-1.39 7.218 7.218 0 012.703-.503c.104 0 .21.002.315.007 1.525.065 2.883.473 4.041 1.21a7.673 7.673 0 012.726 3.135c.576 1.296.808 2.7.69 4.174l-.003.035c-.21 2.645-1.266 4.82-3.144 6.422C17.395 23.18 15.073 23.98 12.186 24z" />
    </svg>
  );
}
```

- [ ] **Step 2: Rewrite the homepage**

Replace the contents of `web/src/app/page.tsx`. This is a large file — the full replacement:

```tsx
import Link from 'next/link';
import { Metadata } from 'next';
import HomeHeroButtons from '@/components/HomeHeroButtons';
import NewsletterSignup from '@/components/NewsletterSignup';
import Logo from '@/components/Logo';
import { TwitterIcon, TikTokIcon, InstagramIcon, ThreadsIcon } from '@/components/SocialIcons';
import { getAllVenues } from '@/data/venues';
import { getAllCities } from '@/data/cities';
import { getAllCategories } from '@/data/categories';
import { getFeaturedPosts } from '@/data/blog';
import BrowseTabsClient from '@/components/BrowseTabsClient';

export const metadata: Metadata = {
  title: 'TicketScan - Compare Ticket Prices Across Multiple Sites',
  description: 'Find the best deals on concert, sports, and theater tickets. Compare prices from Ticketmaster, SeatGeek, and more. Track price trends and get alerts when prices drop.',
  keywords: 'ticket prices, compare tickets, cheap tickets, concert tickets, sports tickets, NBA tickets, NHL tickets, Ticketmaster, SeatGeek',
  openGraph: {
    title: 'TicketScan - Compare Ticket Prices',
    description: 'Never overpay for tickets again. Compare prices across multiple platforms and find the best deals.',
    type: 'website',
    url: 'https://ticketscan.io',
  },
};

export default function Home() {
  const venues = getAllVenues();
  const cities = getAllCities();
  const categories = getAllCategories();
  const featuredPosts = getFeaturedPosts().slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TicketScan',
    url: 'https://ticketscan.io',
    description: 'Compare ticket prices across multiple platforms. Find the best deals on concerts, sports, and theater events.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://ticketscan.io/dashboard?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does TicketScan help me find cheaper tickets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TicketScan compares ticket prices from Ticketmaster, SeatGeek, and other major ticket sites in real-time. We track price trends so you can see if prices are going up or down, and alert you when tickets drop to your target price.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is TicketScan free to use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, TicketScan is completely free. Create an account to track events, compare prices, and get alerts when prices drop.',
        },
      },
      {
        '@type': 'Question',
        name: 'What events can I track with TicketScan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can track any event available on major ticket platforms including concerts, NBA games, NHL hockey, NFL football, MLB baseball, theater shows, and more.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="min-h-screen">
        {/* Hero Section — dark navy, split layout */}
        <div className="bg-navy text-white pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              {/* Left — headline + CTA */}
              <div className="flex-1 text-center lg:text-left">
                <p className="text-teal text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                  Real-time price intelligence
                </p>
                <h1 className="text-5xl lg:text-6xl font-heading font-bold tracking-tight leading-[1.1] mb-5">
                  Compare.<br />
                  <span className="text-teal">Track.</span><br />
                  Save.
                </h1>
                <p className="text-white/50 text-lg mb-8 max-w-md mx-auto lg:mx-0">
                  Real-time prices from every major ticket platform. Get alerts when prices drop.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Link
                    href="/register"
                    className="inline-block bg-gradient-to-r from-brand to-teal text-white px-7 py-3 rounded-lg font-semibold transition-opacity hover:opacity-90"
                  >
                    Get Started Free
                  </Link>
                  <a
                    href="#how-it-works"
                    className="inline-block border border-white/20 text-white px-7 py-3 rounded-lg font-medium hover:bg-white/5 transition-colors text-center"
                  >
                    See How It Works
                  </a>
                </div>
              </div>

              {/* Right — floating dashboard preview */}
              <div className="flex-shrink-0 w-full max-w-sm">
                <div className="bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-5 text-charcoal">
                  <p className="font-heading font-bold text-sm text-navy mb-4">Price Tracker</p>

                  {/* Event 1 */}
                  <div className="bg-gray-50 rounded-lg p-3 mb-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-sm text-navy">NBA Finals G1</span>
                      <span className="text-xs font-bold bg-success/10 text-success px-2 py-0.5 rounded">BUY</span>
                    </div>
                    <svg viewBox="0 0 200 40" className="w-full h-8 mb-1">
                      <polyline points="0,30 25,28 50,32 75,25 100,20 125,22 150,15 175,12 200,8" fill="none" stroke="#1E63FF" strokeWidth="2" />
                      <circle cx="200" cy="8" r="3" fill="#16C784" />
                    </svg>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>$340 → <span className="text-success font-bold">$198</span></span>
                      <span className="text-success">▼ 42%</span>
                    </div>
                  </div>

                  {/* Event 2 */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-sm text-navy">Kendrick Lamar</span>
                      <span className="text-xs font-bold bg-amber-100 text-amber-600 px-2 py-0.5 rounded">HOLD</span>
                    </div>
                    <p className="text-xs text-gray-500">$156 avg · trending down</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar — at the dark→white transition */}
        <div className="bg-white py-10 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center gap-16 md:gap-24 text-center">
              <div>
                <div className="text-3xl font-heading font-bold text-brand">50K+</div>
                <div className="text-gray-500 text-xs mt-1">Events Tracked</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-brand">$127</div>
                <div className="text-gray-500 text-xs mt-1">Avg. Savings</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-brand">5+</div>
                <div className="text-gray-500 text-xs mt-1">Sites Compared</div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div id="how-it-works" className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-heading font-bold text-center text-navy mb-12 tracking-tight">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connecting lines (desktop only) */}
              <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-px bg-gray-200" />

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-brand/5 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-brand" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-navy mb-2">Search</h3>
                <p className="text-gray-500 text-sm">Search Ticketmaster, SeatGeek, and StubHub from one place.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-teal/5 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-navy mb-2">Track</h3>
                <p className="text-gray-500 text-sm">Add events to your watchlist and we monitor prices 24/7.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-success/5 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-success" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-navy mb-2">Save</h3>
                <p className="text-gray-500 text-sm">Get alerts when prices drop to your target and buy at the right time.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Deals Preview */}
        <div className="bg-white py-12 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-heading font-bold text-navy mb-8 tracking-tight">
              Trending Deals
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { name: 'Lakers vs Celtics', date: 'Fri, Jun 12', venue: 'Crypto.com Arena', price: '$89', change: '▼ 12%', changeColor: 'text-success', sources: ['TM', 'SG', 'SH'] },
                { name: 'Taylor Swift', date: 'Sat, Jul 5', venue: 'SoFi Stadium', price: '$245', change: '▲ 8%', changeColor: 'text-red-500', sources: ['TM', 'SG'] },
                { name: 'World Cup — USA vs Mexico', date: 'Jun 15', venue: 'MetLife Stadium', price: '$175', change: '▼ 5%', changeColor: 'text-success', sources: ['TM', 'SG', 'SH'] },
              ].map((deal) => (
                <div key={deal.name} className="border border-gray-200 rounded-xl p-5 hover:border-brand/30 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-navy text-sm">{deal.name}</h3>
                      <p className="text-xs text-gray-400 mt-0.5">{deal.date} · {deal.venue}</p>
                    </div>
                    <span className={`text-sm font-bold ${deal.changeColor}`}>{deal.change}</span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-heading font-bold text-navy">{deal.price}</span>
                    <div className="flex gap-1">
                      {deal.sources.map((s) => (
                        <span key={s} className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded font-medium">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Popular Venues */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-heading font-bold text-navy mb-8 tracking-tight">
              Popular Venues
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {venues.map((venue) => (
                <Link
                  key={venue.id}
                  href={`/venues/${venue.id}`}
                  className="bg-white border border-gray-200 hover:border-brand/40 p-4 rounded-xl transition-colors group"
                >
                  <p className="font-medium text-navy text-sm group-hover:text-brand transition-colors">{venue.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{venue.city}, {venue.state}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Browse by City + Category — tabbed */}
        <BrowseTabs cities={cities} categories={categories} />

        {/* World Cup 2026 Banner */}
        <div className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-navy rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-teal">
              <div>
                <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-2">June 11 – July 19, 2026</p>
                <h3 className="text-white text-2xl font-heading font-bold tracking-tight">FIFA World Cup 2026</h3>
                <p className="text-white/50 text-sm mt-1">16 stadiums · 104 matches · Compare prices across all venues</p>
              </div>
              <Link
                href="/world-cup-2026"
                className="bg-gradient-to-r from-brand to-teal text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Explore Venues
              </Link>
            </div>
          </div>
        </div>

        {/* Testimonials — dark section */}
        <div className="bg-navy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-heading font-bold text-center text-white mb-12 tracking-tight">
              What Fans Are Saying
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { quote: 'Saved $200 on Lakers tickets by waiting for the price drop alert. This tool pays for itself!', name: 'Marcus T.', location: 'Los Angeles, CA', initial: 'M', initialBg: 'bg-brand/20 text-brand-light' },
                { quote: 'Finally, one place to compare all the ticket sites. No more opening 10 tabs to find the best deal.', name: 'Sarah K.', location: 'Chicago, IL', initial: 'S', initialBg: 'bg-teal/20 text-teal-light' },
                { quote: 'Got floor seats to a concert for less than upper deck prices. The price alerts are a game changer.', name: 'Jason R.', location: 'Miami, FL', initial: 'J', initialBg: 'bg-success/20 text-success' },
              ].map((t) => (
                <div key={t.name} className="border border-white/10 rounded-xl p-6">
                  <p className="text-white/80 text-base leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold ${t.initialBg}`}>{t.initial}</div>
                    <div>
                      <div className="font-medium text-white text-sm">{t.name}</div>
                      <div className="text-xs text-white/40">{t.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Section */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-heading font-bold text-navy tracking-tight">
                Ticket Buying Tips & Guides
              </h2>
              <Link href="/blog" className="text-brand hover:text-brand-dark font-medium text-sm">
                View All →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-white border border-gray-200 rounded-xl p-5 hover:border-brand/30 transition-colors group"
                >
                  <span className="text-xs bg-brand/10 text-brand-dark px-2 py-0.5 rounded-full font-medium">
                    {post.readTime} min read
                  </span>
                  <h3 className="font-bold text-navy text-sm mt-3 mb-2 group-hover:text-brand transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-xs line-clamp-2">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-heading font-bold text-navy mb-8 text-center tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                { q: 'How does TicketScan help me find cheaper tickets?', a: 'TicketScan compares ticket prices from Ticketmaster, SeatGeek, and other major ticket sites in real-time. We track price trends so you can see if prices are going up or down, and alert you when tickets drop to your target price.' },
                { q: 'Is TicketScan free to use?', a: 'Yes, TicketScan is completely free. Create an account to track events, compare prices, and get alerts when prices drop.' },
                { q: 'What events can I track with TicketScan?', a: 'You can track any event available on major ticket platforms including concerts, NBA games, NHL hockey, NFL football, MLB baseball, theater shows, and more.' },
              ].map((faq) => (
                <div key={faq.q} className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-navy text-sm mb-2">{faq.q}</h3>
                  <p className="text-gray-500 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-white py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <NewsletterSignup source="homepage" />
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4 tracking-tight">
              Ready to save on your next event?
            </h2>
            <p className="text-white/40 mb-8">
              Join thousands of fans who never miss a deal.
            </p>
            <Link
              href="/register"
              className="inline-block bg-gradient-to-r from-brand to-teal text-white px-8 py-4 rounded-lg font-bold text-lg transition-opacity hover:opacity-90"
            >
              Create Free Account
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-navy text-gray-400 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-5 gap-8 mb-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <Logo size={28} className="text-white" />
                  <span className="text-white font-heading font-bold text-xl tracking-tight">TicketScan</span>
                </div>
                <p className="text-sm mb-4">
                  Compare ticket prices across multiple platforms and find the best deals on concerts, sports, and events.
                </p>
                {/* Social Links */}
                <div className="flex gap-3 mb-6">
                  <a href="https://twitter.com/ticketscan" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                    <TwitterIcon />
                  </a>
                  <a href="https://tiktok.com/@ticketscan" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                    <TikTokIcon />
                  </a>
                  <a href="https://instagram.com/ticketscan" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                    <InstagramIcon />
                  </a>
                  <a href="https://threads.net/@ticketscan" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                    <ThreadsIcon />
                  </a>
                </div>
                <NewsletterSignup source="footer" variant="footer" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-4 text-sm">Popular Venues</h3>
                <ul className="space-y-2 text-sm">
                  {venues.slice(0, 5).map((venue) => (
                    <li key={venue.id}>
                      <Link href={`/venues/${venue.id}`} className="hover:text-brand-light transition-colors">{venue.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-4 text-sm">Cities</h3>
                <ul className="space-y-2 text-sm">
                  {cities.slice(0, 5).map((city) => (
                    <li key={city.slug}>
                      <Link href={`/tickets/${city.slug}`} className="hover:text-brand-light transition-colors">{city.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-4 text-sm">Categories</h3>
                <ul className="space-y-2 text-sm">
                  {categories.map((category) => (
                    <li key={category.slug}>
                      <Link href={`/tickets/${category.slug}`} className="hover:text-brand-light transition-colors">{category.icon} {category.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm">&copy; 2026 TicketScan. All rights reserved.</p>
              <div className="flex gap-6 text-sm">
                <Link href="/privacy" className="hover:text-brand-light transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-brand-light transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

/* Client component for tabbed browse section — imported at top of file */
function BrowseTabs({ cities, categories }: { cities: { slug: string; name: string; state: string }[]; categories: { slug: string; name: string; icon: string }[] }) {
  return <BrowseTabsClient cities={cities} categories={categories} />;
}
```

- [ ] **Step 3: Create the BrowseTabsClient component**

Create `web/src/components/BrowseTabsClient.tsx`:

```tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

interface BrowseTabsClientProps {
  cities: { slug: string; name: string; state: string }[];
  categories: { slug: string; name: string; icon: string }[];
}

export default function BrowseTabsClient({ cities, categories }: BrowseTabsClientProps) {
  const [tab, setTab] = useState<'cities' | 'categories'>('cities');

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 mb-8">
          <button
            onClick={() => setTab('cities')}
            className={`text-2xl font-heading font-bold tracking-tight transition-colors ${
              tab === 'cities' ? 'text-navy' : 'text-gray-300 hover:text-gray-400'
            }`}
          >
            Browse by City
          </button>
          <button
            onClick={() => setTab('categories')}
            className={`text-2xl font-heading font-bold tracking-tight transition-colors ${
              tab === 'categories' ? 'text-navy' : 'text-gray-300 hover:text-gray-400'
            }`}
          >
            Categories
          </button>
        </div>

        {tab === 'cities' && (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/tickets/${city.slug}`}
                className="bg-gray-50 border border-gray-200 hover:border-brand/40 p-4 rounded-xl transition-colors group"
              >
                <p className="font-medium text-navy text-sm group-hover:text-brand transition-colors">{city.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{city.state}</p>
              </Link>
            ))}
          </div>
        )}

        {tab === 'categories' && (
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/tickets/${category.slug}`}
                className="bg-gray-50 border border-gray-200 hover:border-brand/40 p-4 rounded-xl text-center transition-colors group"
              >
                <span className="text-2xl block mb-1">{category.icon}</span>
                <p className="font-medium text-navy text-sm group-hover:text-brand transition-colors">{category.name}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Verify the build**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/web
npm run build
```

Expected: Build succeeds with the new homepage layout.

- [ ] **Step 5: Commit**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
git add web/src/app/page.tsx web/src/components/SocialIcons.tsx web/src/components/BrowseTabsClient.tsx
git commit -m "feat: redesign homepage with split hero + product preview

Dark navy hero with bold headline + floating dashboard card,
SVG icons replacing emojis, tabbed city/category section,
dark testimonials, World Cup banner, social links in footer."
```

---

## Task 6: Blog Article Page — Markdown + Restyling

**Files:**
- Modify: `web/package.json` (add `marked`)
- Modify: `web/src/app/blog/[slug]/page.tsx`

- [ ] **Step 1: Install marked**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/web
npm install marked
```

- [ ] **Step 2: Rewrite the blog article page**

Replace the contents of `web/src/app/blog/[slug]/page.tsx`:

```tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { marked } from 'marked';
import { getAllBlogPosts, getBlogPostBySlug, getRelatedPosts } from '@/data/blog';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: 'Article Not Found' };
  }

  return {
    title: `${post.title} | Ticket Scan Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author],
      url: `https://ticketscan.io/blog/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

const categoryColors: Record<string, string> = {
  guides: 'bg-blue-100 text-blue-700',
  tips: 'bg-green-100 text-green-700',
  news: 'bg-brand/10 text-brand-dark',
  comparisons: 'bg-amber-100 text-amber-700',
};

const categoryLabels: Record<string, string> = {
  guides: 'Guide',
  tips: 'Tips',
  news: 'News',
  comparisons: 'Comparison',
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);
  const htmlContent = marked.parse(post.content) as string;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ticket Scan',
      url: 'https://ticketscan.io',
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://ticketscan.io/blog/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* Header — solid navy */}
        <div className="bg-navy text-white py-12 pt-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm mb-6">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              <span className="mx-2 text-gray-600">/</span>
              <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
              <span className="mx-2 text-gray-600">/</span>
              <span className="text-white">{post.title.slice(0, 30)}...</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs px-3 py-1 rounded-full font-medium ${categoryColors[post.category]}`}>
                {categoryLabels[post.category]}
              </span>
              <span className="text-gray-400 text-sm">{post.readTime} min read</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold font-heading tracking-tight mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span>By {post.author}</span>
              <span>|</span>
              <span>{formatDate(post.publishedAt)}</span>
              {post.updatedAt && post.updatedAt !== post.publishedAt && (
                <>
                  <span>|</span>
                  <span>Updated {formatDate(post.updatedAt)}</span>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Content — no card wrapper */}
            <article className="lg:col-span-2">
              <div
                className="prose prose-lg max-w-none
                  prose-headings:text-navy prose-headings:font-bold prose-headings:tracking-tight
                  prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-5
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                  prose-ul:my-6 prose-li:text-gray-700 prose-li:my-2
                  prose-strong:text-navy prose-strong:font-semibold
                  prose-table:my-6 prose-th:bg-gray-50 prose-th:p-3 prose-th:text-navy prose-td:p-3 prose-td:border prose-td:text-gray-700
                  prose-a:text-brand prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />

              {/* Tags */}
              <div className="mt-12 pt-6 border-t border-gray-200">
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-50 border border-gray-200 text-gray-500 px-3 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA — dark navy */}
              <div className="mt-12 bg-navy rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold font-heading text-white mb-2 tracking-tight">
                  Ready to Find Cheap Tickets?
                </h3>
                <p className="text-white/50 text-sm mb-5">
                  Start comparing prices across multiple platforms and track your favorite events.
                </p>
                <Link
                  href="/register"
                  className="inline-block bg-gradient-to-r from-brand to-teal text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
                >
                  Create Free Account
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {relatedPosts.length > 0 && (
                <div className="border border-gray-200 rounded-xl p-5 mb-5">
                  <h3 className="font-bold font-heading text-navy text-sm mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((related) => (
                      <Link key={related.slug} href={`/blog/${related.slug}`} className="block group">
                        <h4 className="font-medium text-navy text-sm group-hover:text-brand transition-colors mb-1">
                          {related.title}
                        </h4>
                        <p className="text-xs text-gray-400">{related.readTime} min read</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="border border-gray-200 rounded-xl p-5 mb-5">
                <h3 className="font-bold font-heading text-navy text-sm mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/dashboard" className="text-brand text-sm hover:text-brand-dark">Search Events</Link></li>
                  <li><Link href="/compare" className="text-brand text-sm hover:text-brand-dark">Compare Prices</Link></li>
                  <li><Link href="/register" className="text-brand text-sm hover:text-brand-dark">Create Account</Link></li>
                </ul>
              </div>

              <div className="bg-navy rounded-xl p-5 text-white">
                <h3 className="font-bold font-heading text-sm mb-2">Get More Tips</h3>
                <p className="text-white/50 text-xs mb-4">
                  Subscribe for ticket buying tips and exclusive deals.
                </p>
                <Link
                  href="/"
                  className="block bg-white text-navy text-center py-2 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </Link>
              </div>
            </aside>
          </div>

          <div className="mt-12 text-center">
            <Link href="/blog" className="inline-flex items-center text-brand font-medium text-sm hover:text-brand-dark">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Articles
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
```

- [ ] **Step 3: Verify the build**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/web
npm run build
```

Expected: Build succeeds. Blog articles now use `marked` for proper markdown rendering, have a solid navy header, no card wrapper around content, improved prose spacing, and restyled sidebar/CTA.

- [ ] **Step 4: Commit**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
git add web/package.json web/package-lock.json web/src/app/blog/\\[slug\\]/page.tsx
git commit -m "feat: blog article page — marked library + navy header + spacing fixes

Replace regex formatContent with marked for proper markdown rendering.
Solid navy header, remove card wrapper, increase prose spacing,
sidebar uses borders instead of shadows, dark CTA block."
```

---

## Task 7: Blog Index Page Restyling

**Files:**
- Modify: `web/src/app/blog/page.tsx`

- [ ] **Step 1: Update the blog index page**

In `web/src/app/blog/page.tsx`, make these changes:

1. Replace the hero gradient `bg-gradient-to-br from-navy via-brand to-teal` with `bg-navy`
2. Add `pt-24` to the header (for fixed navbar offset)
3. Update text colors from `text-blue-*` to `text-gray-*` and `text-white`
4. Update post cards: replace `shadow-sm` and `shadow-md` with `border border-gray-200`
5. Add `hover:border-brand/30` to post card links
6. Change heading colors from `text-gray-900` to `text-navy`

The specific replacements in the header section:

```tsx
// OLD:
<div className="bg-gradient-to-br from-navy via-brand to-teal text-white py-12">

// NEW:
<div className="bg-navy text-white py-12 pt-24">
```

For post cards throughout the page:

```tsx
// OLD pattern:
className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow group"

// NEW pattern:
className="bg-white border border-gray-200 rounded-xl p-5 hover:border-brand/30 transition-colors group"
```

- [ ] **Step 2: Verify the build**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/web
npm run build
```

Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
git add web/src/app/blog/page.tsx
git commit -m "feat: blog index page — navy header + border cards to match redesign"
```

---

## Task 8: Profile Image Generation Script

**Files:**
- Modify: `package.json` (add `sharp` devDependency)
- Create: `marketing-agents/scripts/generate-profile-images.js`

- [ ] **Step 1: Install sharp**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
npm install --save-dev sharp
```

- [ ] **Step 2: Create the profile image generation script**

Create `marketing-agents/scripts/generate-profile-images.js`:

```javascript
#!/usr/bin/env node

/**
 * Generates platform-specific profile images from the master 1024x1024 source.
 * Usage: node marketing-agents/scripts/generate-profile-images.js
 */

import sharp from 'sharp';
import { mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '../..');

// Note: the logos directory has a trailing space in its name
const SOURCE = resolve(rootDir, 'logos /ticketscan_profile_1024_v2.png');
const OUT_DIR = resolve(rootDir, 'logos/social');

const SIZES = [
  { name: 'twitter_400x400.png', width: 400, height: 400 },
  { name: 'instagram_320x320.png', width: 320, height: 320 },
  { name: 'tiktok_200x200.png', width: 200, height: 200 },
];

async function generate() {
  if (!existsSync(SOURCE)) {
    console.error(`Source not found: ${SOURCE}`);
    process.exit(1);
  }

  if (!existsSync(OUT_DIR)) {
    mkdirSync(OUT_DIR, { recursive: true });
  }

  for (const size of SIZES) {
    const outPath = resolve(OUT_DIR, size.name);
    await sharp(SOURCE)
      .resize(size.width, size.height, { fit: 'cover' })
      .png()
      .toFile(outPath);
    console.log(`Created: ${size.name} (${size.width}x${size.height})`);
  }

  console.log(`\nAll images saved to ${OUT_DIR}`);
}

generate().catch((err) => {
  console.error('Failed:', err.message);
  process.exit(1);
});
```

- [ ] **Step 3: Run the script to generate images**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
node marketing-agents/scripts/generate-profile-images.js
```

Expected output:
```
Created: twitter_400x400.png (400x400)
Created: instagram_320x320.png (320x320)
Created: tiktok_200x200.png (200x200)

All images saved to /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/logos/social
```

- [ ] **Step 4: Add generate-profiles npm script to package.json**

In `package.json`, add to the `"scripts"` block:

```json
"generate-profiles": "node marketing-agents/scripts/generate-profile-images.js"
```

- [ ] **Step 5: Commit**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
git add marketing-agents/scripts/generate-profile-images.js logos/social/ package.json package-lock.json
git commit -m "feat: add profile image generation script + social platform assets"
```

---

## Task 9: Final Verification

- [ ] **Step 1: Full build check**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/web
npm run build
```

Expected: Clean build, no errors.

- [ ] **Step 2: Verify all new scripts run**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
npm run schedule:dry
```

Expected: "Content calendar is empty. Nothing to schedule." (confirms script loads and runs)

- [ ] **Step 3: Visual spot check**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/web
npm run dev
```

Open `http://localhost:3000` and verify:
- Navbar is transparent on homepage, solid navy on scroll
- Hero has dark navy background with headline left + dashboard card right
- Stats bar shows at the transition
- How It Works section has SVG icons and connecting lines
- Trending Deals shows 3 event cards with borders
- Popular Venues grid with hover effects
- City/Category tabs work
- World Cup banner with teal left border
- Testimonials on dark background
- Blog link opens to navy-header index page
- Individual blog post has navy header, proper markdown spacing, no card wrapper

- [ ] **Step 4: Final commit if any fixes needed**

If any visual adjustments were needed during the spot check, commit them:

```bash
git add -A
git commit -m "fix: visual polish from spot check"
```
