# TicketScan — Social Media Strategy + Site Redesign

**Date:** 2026-04-10
**Status:** Approved

---

## Part 1: Social Media Strategy (Blotato Integration)

### Channels

| Channel | Status | Handle | Content Type |
|---------|--------|--------|-------------|
| Twitter/X | Exists | (current handle) | Text, links, deal alerts |
| TikTok | Create | TBD — use `@ticketscan` or `@ticketscanio` | Short-form video (Remotion + Blotato tools) |
| Instagram | Create | TBD — use `@ticketscan.io` or `@ticketscanapp` | Reels (cross-post TikTok), feed posts, Stories |
| Threads | Create | Auto-linked from Instagram | Text posts (adapted from Twitter) |

### Content Pillars

1. **Deal Alerts** — "Lakers tickets just dropped 40% — $89 right now." Real-time price drop notifications. All platforms.
2. **Price Intelligence** — Charts, trends, buy/wait/hold recommendations. Best for Instagram feed and Twitter.
3. **World Cup 2026** — Countdown content, stadium guides, ticket availability updates. Heavy on TikTok and Instagram.
4. **Tips & Education** — "Best time to buy NBA playoff tickets" style content sourced from blog. Twitter, Threads, Instagram carousels.
5. **Savings Wins** — User savings stories or simulated examples showing the product working. TikTok and Instagram Reels.

### Posting Cadence

- **Twitter/X:** 2–3x daily (AI agents already generate this content)
- **TikTok:** 3–5x weekly (Remotion-generated videos + Blotato video tools)
- **Instagram:** 1x daily (mix of Reels cross-posted from TikTok + feed posts)
- **Threads:** 1x daily (adapted from Twitter with minor tweaks)

### Technical Integration

**Retire Typefully:**
- Remove `twitter-api-v2` dependency from backend `package.json`
- Remove Typefully API endpoint(s) from `index.js`
- All posting moves through Blotato

**New Scripts (in `marketing-agents/scripts/`):**

1. **`fetch-blotato-accounts.js`** — Calls `GET https://backend.blotato.com/v2/users/me/accounts`, filters by platform, writes `marketing-agents/blotato-accounts.json`. Same pattern as Cadence's `cadence-marketing/scripts/fetch-blotato-accounts.js`.

2. **`schedule-blotato-posts.js`** — Reads `marketing-agents/content-calendar.json`, validates accounts, POSTs to `https://backend.blotato.com/v2/posts` with platform-specific config. Supports `--dry-run`, `--filter`, `--only-platform` flags. Same pattern as Cadence's `cadence-marketing/scripts/schedule-posts.js`.

**Content Calendar Format (`marketing-agents/content-calendar.json`):**
```json
[
  {
    "id": "deal-alert-twitter-001",
    "platform": "twitter",
    "scheduledTime": "2026-04-11T13:00:00.000Z",
    "text": "Lakers tickets just dropped 40%...",
    "mediaUrls": []
  },
  {
    "id": "deal-alert-tiktok-001",
    "platform": "tiktok",
    "scheduledTime": "2026-04-11T14:00:00.000Z",
    "text": "Check this price drop...",
    "mediaUrls": ["https://..."],
    "target": {
      "privacyLevel": "PUBLIC_TO_EVERYONE",
      "disabledComments": false,
      "disabledDuet": false,
      "isBrandedContent": false
    }
  }
]
```

**AI Agent 3 (Social Media Agent) Update:**
- Update Agent 3's daily prompt to output content in the calendar JSON format above
- Each run appends new entries to `content-calendar.json`
- Schedule script reads and publishes them

**Environment:**
- Add `BLOTATO_API_KEY` to `.env` (and `.env.example`)

**npm Scripts (add to root `package.json`):**
```json
{
  "scripts": {
    "fetch-accounts": "node marketing-agents/scripts/fetch-blotato-accounts.js",
    "schedule": "node marketing-agents/scripts/schedule-blotato-posts.js",
    "schedule:dry": "node marketing-agents/scripts/schedule-blotato-posts.js --dry-run"
  }
}
```

---

## Part 2: Homepage Redesign

### Design Language

- **Dark navy hero** (`#0D1B3D`) transitioning to white content below the fold
- **Typography:** Poppins headings with tighter letter-spacing (`-0.03em`), Inter body
- **Colors:** Brand blue (`#1E63FF`) primary, teal (`#22C1C3`) as accent/highlight only (not in gradients), navy as dark primary. Green (`#16C784`) for "buy" signals, amber for "hold," red for "wait."
- **Icons:** Replace emoji icons with inline SVG icons (Lucide icon paths — no new dependency)
- **Cards:** 10–12px border-radius (down from 16px), subtle `border border-gray-200` on white backgrounds, `box-shadow` only for elevated/floating elements
- **Spacing:** Tighter sections — reduce `py-24` to `py-16`, `py-16` to `py-12` where appropriate

### Navbar

- **Default (on hero):** Transparent background, white text, logo visible
- **On scroll:** Solid navy (`#0D1B3D`) background — no gradient
- World Cup 2026 badge: Small green dot indicator next to text link instead of full green button
- Add scroll listener in `Navbar.tsx` to toggle between transparent and solid states

### Hero Section

**Layout:** Two-column flex, dark navy background

**Left column:**
- Eyebrow text: "Real-time price intelligence" in teal, uppercase, tracked
- Headline: "Compare. Track. Save." — bold, stacked, with "Track" in teal
- Subtitle: One line — "Real-time prices from every major ticket platform."
- CTA: Gradient button (`brand → teal`), "Get Started Free"
- Secondary CTA: Ghost button (white border), "See How It Works" — smooth-scrolls to the "How It Works" section below the fold

**Right column:**
- Floating dashboard preview card with `box-shadow: 0 8px 32px rgba(0,0,0,0.3)`
- White card, 12px border-radius
- Shows 2 tracked events with:
  - Event name + BUY/HOLD/WAIT badge
  - Mini SVG sparkline chart
  - Price with percentage change and direction arrow
- Card should use realistic-looking placeholder data

**Stats bar:**
- Sits at the dark→white transition line
- 3 stats: events tracked, avg savings, sites compared
- Stat numbers in brand blue, labels in gray

### Below the Fold

**How It Works (white background):**
- 3-step horizontal flow: Search → Track → Save
- Each step: SVG icon + heading + short description
- Thin connecting lines or arrows between steps
- Replaces current emoji-based feature cards

**Live Deals Preview (white background):**
- 3 event cards showing sample data
- Each card: event name, date, venue, current price, trend indicator (up/down arrow + percentage), source badges (TM, SG, SH)
- Replaces current generic feature descriptions — shows the product in action

**Popular Venues (subtle gray background `gray-50`):**
- Keep the grid layout
- Add subtle hover effect: left border accent in brand blue on hover
- Keep venue name + city/state

**Browse by City + Category (white background):**
- Consolidate into a single section with tab switcher (Cities | Categories)
- Same grid layout within each tab
- Reduces page length by removing one full section

**World Cup 2026 (white background):**
- Horizontal banner/callout instead of nav button
- Navy background with gradient accent border (left or top)
- Tournament dates, "Explore Venues" CTA
- Integrated into page flow

**Testimonials (navy background `#0D1B3D`):**
- Dark section for visual contrast
- Larger quote text, white on dark
- Remove star ratings (they look artificial on a new product)
- Keep 3 testimonials in a grid

**Blog / Tips:**
- Keep current layout — it works well

**FAQ:**
- Keep current layout — it works well

**Final CTA (navy background):**
- Same dark section treatment as current
- Gradient CTA button (brand → teal) instead of solid blue

**Footer:**
- Add social media links: Twitter, TikTok, Instagram, Threads
- Use inline SVG social icons
- Keep existing venue/city/category link columns

---

## Part 3: Blog/Article Page Redesign

### New Dependency

Add `marked` (8KB, zero deps) to `web/package.json`:
```bash
npm install marked
```

### Article Header

- Replace `bg-gradient-to-br from-navy via-brand to-teal` with solid `bg-navy` (`#0D1B3D`)
- Breadcrumb: white/`text-gray-400` on navy (instead of blue-200/blue-300)
- Title: Poppins bold, tighter letter-spacing to match homepage
- Category badge + read time + author + date stay, just restyle for navy background

### Article Content Area

- Change page background from `bg-gray-50` to `bg-white`
- **Remove the card wrapper** (`bg-white rounded-2xl shadow-md p-6 md:p-10`) around the article — let content sit directly on the white page with appropriate max-width
- Replace `formatContent()` regex parser with `marked` library:
  ```tsx
  import { marked } from 'marked';
  // ...
  dangerouslySetInnerHTML={{ __html: marked.parse(post.content) }}
  ```
- Delete the `formatContent` function entirely

### Prose Spacing Fixes

Update the prose classes on the article container:
```
prose-h2:mt-12 prose-h2:mb-5    (was mt-8, mb-4)
prose-h3:mt-8 prose-h3:mb-4     (was mt-6, mb-3)
prose-p:mb-6                     (was mb-4)
prose-li:my-2                    (was my-1)
prose-ul:my-6                    (was my-4)
```

### Sidebar

- Remove `shadow-md` from all sidebar cards
- Add `border border-gray-200` instead
- Newsletter CTA sidebar: change from `bg-gradient-to-br from-brand to-navy` to solid `bg-navy`

### In-Article CTA

- Change from `bg-gradient-to-br from-blue-50 to-blue-100` to `bg-navy text-white`
- CTA button: gradient (brand → teal) to match homepage

### Blog Index Page (`/blog/page.tsx`)

- Same navy header treatment (replace gradient)
- Post cards: use subtle borders instead of shadows, match homepage card style

---

## Part 4: Social Media Profile Assets & Bios

### Profile Images

The 1024x1024 profile image (`logos/ticketscan_profile_1024_v2.png`) is the source. Generate platform-specific crops:

| Platform | Asset | Dimensions | Source |
|----------|-------|-----------|--------|
| Twitter/X | Profile pic | 400x400 | Crop from `ticketscan_profile_1024_v2.png` |
| Twitter/X | Banner | 1500x500 | Already exists: `ticketscan_twitter_1500x500.png` |
| TikTok | Profile pic | 200x200 | Crop from `ticketscan_profile_1024_v2.png` |
| Instagram | Profile pic | 320x320 | Crop from `ticketscan_profile_1024_v2.png` |
| Threads | Profile pic | N/A | Inherits from Instagram |
| LinkedIn | Banner | 1584x396 | Already exists: `ticketscan_linkedin_1584x396.png` |

Generate the cropped images using `sharp` (add to root `package.json` devDependencies) via a `marketing-agents/scripts/generate-profile-images.js` script. Output to `logos/social/`.

### Bios

**Twitter/X (160 chars):**
> Compare ticket prices across Ticketmaster, SeatGeek & StubHub. Track trends. Get price drop alerts. Never overpay again. ticketscan.io

**TikTok (80 chars):**
> Stop overpaying for tickets. We find the best deals. Link below.

**Instagram (150 chars):**
> Compare prices across ticket sites
> Track trends & get price drop alerts
> Concerts | Sports | World Cup 2026
> ticketscan.io

**Threads (150 chars):**
> We compare ticket prices so you don't have to open 10 tabs. Concerts, sports, World Cup 2026. Free at ticketscan.io

### Setup Checklist (Manual Steps)

1. Create TikTok account — set profile pic + bio
2. Create Instagram account — set profile pic + bio
3. Threads account auto-created from Instagram — set bio
4. Update Twitter/X bio if different from current
5. Connect all 4 accounts to Blotato
6. Run `npm run fetch-accounts` to populate `blotato-accounts.json`

---

## Out of Scope

- Interior app pages (dashboard, compare, watchlist, event detail, venues)
- Remotion video template creation
- Social account creation on TikTok/Instagram/Threads (manual step)
- Populating initial content calendar entries
- World Cup countdown timer widget
- Mobile app
