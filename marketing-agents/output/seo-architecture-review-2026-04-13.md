# Site Architecture Review — 2026-04-13

**Agent:** SEO Specialist (Agent 2)
**Site:** https://www.ticketscan.io

---

## Current Architecture

```
ticketscan.io/
├── /                          ← Homepage (indexed)
├── /dashboard                 ← Search (auth-required, in sitemap)
├── /compare                   ← Comparison (auth-required, in sitemap)
├── /watchlist                 ← User feature (blocked in robots.txt)
├── /how-it-works              ← Conversion page (NOT in navbar)
├── /faq                       ← Trust page (NOT in navbar)
├── /blog/                     ← Blog listing
│   └── /blog/[slug]           ← Blog posts (~8)
├── /venues/[slug]             ← 24 venue pages
├── /tickets/[slug]            ← 37 city + ~10 category pages (SHARED route)
├── /world-cup-2026/           ← WC hub
│   └── /world-cup-2026/[stadium]  ← 16 stadium pages
├── /privacy                   ← Legal
├── /terms                     ← Legal
├── /login                     ← Auth
├── /register                  ← Auth
├── /admin                     ← Admin (blocked in robots.txt)
└── /event/[id]                ← Event detail (blocked in robots.txt)
```

---

## Issues Identified

### 1. Missing Hub/Index Pages

**Problem:** Venue pages (`/venues/[slug]`) have no parent index page. There's no `/venues` page that lists all venues. Same for ticket categories — no `/tickets` hub page.

**Impact:** 
- No internal linking hub to distribute PageRank to venue/city pages
- Users can't browse all venues or cities from one page
- Google can't discover the full set of venue pages from a single crawl path

**Recommendation:** Create two hub pages:
- `/venues` — "Compare Ticket Prices at Top Venues" — grid of all 24 venues with links
- `/tickets` — "Find Tickets by City or Category" — grid of all 37 cities + categories

These hubs become pillar pages for their respective content clusters.

---

### 2. Shared `/tickets/` Route for Cities AND Categories

**Problem:** Both city pages (e.g., `/tickets/orlando`) and category pages (e.g., `/tickets/concerts`) share the same `/tickets/[slug]` route. This creates:
- Potential slug collisions
- Confusing URL taxonomy (is `/tickets/nba` a city or a category?)
- No clear hierarchy for Google

**Recommendation (long-term):** Consider separating:
- `/cities/[slug]` for city pages
- `/categories/[slug]` or `/tickets/[category]` for category pages

**Recommendation (short-term):** Keep current structure but ensure no slug collisions exist. Add explicit breadcrumbs that differentiate ("Home > Cities > Orlando" vs "Home > Categories > NBA").

---

### 3. Click Depth Analysis

**How many clicks to reach each page type from the homepage:**

| Page Type | Clicks from Homepage | Notes |
|-----------|---------------------|-------|
| Blog listing | 1 (navbar) | Good |
| World Cup hub | 1 (navbar) | Good |
| Featured venues | 1 (homepage section) | Good — but only 5 of 24 |
| Featured cities | 1 (homepage section) | Good — but only 5 of 37 |
| Non-featured venues | 2+ (homepage → city → venue) | OK but indirect |
| Non-featured cities | NOT REACHABLE from nav | Bad — only via homepage |
| World Cup stadiums | 2 (WC hub → stadium) | Good |
| FAQ | 2+ (footer only) | Needs navbar link |
| How It Works | 2+ (footer/in-page links) | Needs navbar link |
| Blog posts | 2 (blog listing → post) | Good |
| Individual event | blocked by robots.txt | N/A |

**Problem:** 19 of 24 venues and 32 of 37 cities are 2+ clicks deep with no direct discovery path from the main navigation. The homepage features ~5 of each, but the rest require users to find them via internal links on other pages.

**Fix:** The hub pages (`/venues` and `/tickets`) would solve this. Link them from the navbar.

---

### 4. Internal Linking Scorecard

| From → To | Status | Quality |
|-----------|--------|---------|
| Homepage → Venues | 5 featured venues | Needs hub link |
| Homepage → Cities | 5 featured cities | Needs hub link |
| Homepage → WC | Direct link | Good |
| Homepage → Blog | Direct link | Good |
| Venue → City | Breadcrumb link | Good |
| Venue → Blog | 2-3 blog links | Good |
| City → Venues | Related venues section | Good |
| City → Categories | Related categories | Good |
| City → Blog | 3-4 blog links | Good |
| WC Hub → Stadiums | All 16 linked | Good |
| WC Stadium → Other Stadiums | Same-country stadiums | Good |
| Blog → Venues/Cities | None | Needs improvement |
| Venues → Other Venues | None | Needs "Similar Venues" section |
| FAQ → Product Pages | None | Needs relevant links |

**Key gaps:**
1. No venue-to-venue cross-linking ("Similar Venues" or "Nearby Venues")
2. Blog posts don't link to relevant venue/city pages
3. FAQ doesn't link to relevant product pages
4. No hub pages to aggregate internal links

---

### 5. Navigation Recommendations

**Current navbar (unauthenticated):** Dashboard | Blog | World Cup 2026 | Login | Sign Up

**Recommended navbar (unauthenticated):**
```
Venues | Cities | World Cup 2026 | Blog | How It Works | Login | Sign Up
```

**Rationale:**
- `Venues` and `Cities` are new hub pages — highest SEO value
- `How It Works` is critical for conversion of new visitors
- `Dashboard` can be reached after login — doesn't need prime nav real estate for anonymous users
- Keep `World Cup 2026` — timely and high-interest

**Current navbar (authenticated):** Dashboard | Compare | Watchlist | Favorites | Blog | World Cup 2026

**Recommended (authenticated):**
```
Dashboard | Compare | Watchlist | Venues | World Cup 2026 | Blog
```

---

## Proposed Architecture (Visual Sitemap)

```
ticketscan.io/
│
├── /                              ★ Homepage (pillar)
│   ├── → /venues                  ★ NEW: Venue Hub
│   ├── → /tickets                 ★ NEW: City/Category Hub
│   ├── → /world-cup-2026         ★ WC Hub
│   └── → /blog                   ★ Blog Hub
│
├── /venues                        ★ NEW: All Venues Index
│   ├── /venues/madison-square-garden
│   ├── /venues/crypto-arena
│   ├── /venues/chase-center
│   └── ... (24 total)
│
├── /tickets                       ★ NEW: Cities & Categories Index
│   ├── /tickets/orlando           (city)
│   ├── /tickets/new-york          (city)
│   ├── /tickets/concerts          (category)
│   ├── /tickets/nba               (category)
│   └── ... (47 total)
│
├── /world-cup-2026               ★ WC Hub (existing)
│   ├── /world-cup-2026/metlife-stadium
│   ├── /world-cup-2026/sofi-stadium
│   └── ... (16 total)
│
├── /blog                          Blog Hub (existing)
│   ├── /blog/best-time-to-buy-tickets
│   └── ... (~8 posts)
│
├── /best-time-to-buy/             ★ NEW: Data Hub (Phase 1)
│   ├── /best-time-to-buy/concert-tickets
│   ├── /best-time-to-buy/nfl-tickets
│   └── ... (8-12 pages)
│
├── /how-it-works                  Conversion (add to navbar)
├── /faq                           Trust (add to footer nav)
├── /dashboard                     Product (auth)
├── /compare                       Product (auth)
└── /watchlist                     Product (auth, noindex)
```

---

## Implementation Roadmap

### Week 1 (April 13-19): Quick Wins
- [ ] Fix sitemap BASE_URL (www)
- [ ] Fix robots.txt sitemap URL (www)
- [ ] Add canonical tags to all pages
- [ ] Submit sitemap to Google Search Console
- [ ] Add How It Works to navbar

### Week 2 (April 20-26): Hub Pages
- [ ] Create `/venues` index page
- [ ] Create `/tickets` index page
- [ ] Update navbar to include Venues and Cities links
- [ ] Add "Similar Venues" cross-links to venue pages

### Week 3 (April 27 - May 3): Schema & Content
- [ ] Add BreadcrumbList schema to all page types
- [ ] Add FAQPage schema to venue/city pages
- [ ] Add answer-target paragraphs to all pages
- [ ] Enrich thin city pages with more unique content

### Week 4+ (May): New Page Types
- [ ] Build "Best Time to Buy" page template
- [ ] Launch first 8-12 data-driven pages
- [ ] Begin World Cup team pages

---

## Cross-Agent Handoffs

**To Content Agent (Agent 1):**
- Need 300-500 words unique content for `/venues` hub page
- Need 300-500 words unique content for `/tickets` hub page
- Need FAQ content for venue pages (3-5 Qs per venue)

**To CRO Agent (Agent 6):**
- Navbar restructure recommendation above — evaluate for conversion impact
- Hub pages should include newsletter signup CTA
- "How It Works" needs prominent placement for new visitors

---

*Next architecture review: Week of 2026-05-04 (monthly cadence)*
