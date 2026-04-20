# SEO Weekly Deep-Dive — Week of 2026-04-20

**Agent:** SEO Specialist (Agent 2)
**Site:** https://www.ticketscan.io
**Date:** Tuesday, April 20, 2026 (weekly cadence)
**Prior audit:** 2026-04-13 — [seo-audit-week-2026-04-13.md](./seo-audit-week-2026-04-13.md)
**Severity scale:** P0 (Critical) > P1 (High) > P2 (Medium) > P3 (Low)

---

## Executive Summary

**Seven days after the P0 canonical-domain call-out, the fix has not landed.** `sitemap.ts` still emits `https://ticketscan.io`, `robots.ts` still advertises the non-www sitemap, and `layout.tsx` `metadataBase` is still non-www — meanwhile Vercel is serving `https://www.ticketscan.io`. Every programmatic page's implicit canonical (derived from `metadataBase`) resolves to a URL that disagrees with the one Googlebot is actually crawling. Until this is fixed, every downstream schema/metadata improvement is fighting an uphill battle.

**What did improve this week:** A large schema bundle (Article @graph on blog posts, HowTo on `/how-it-works`, FAQPage on `/`, a brand-new `WebApplication` + `BreadcrumbList` layout on `/compare`, World Cup stadium schema fixes, Canadian `addressCountry` fix) was built in the working tree between 2026-04-17 and 2026-04-19 but **none of it has been committed or deployed yet.** It's 3 days stalled.

**Two separate release-blocker threads need to land this week:**
1. Fix canonical domain (sitemap + robots + metadataBase).
2. Commit and deploy the uncommitted schema bundle sitting in the working tree.

Everything else in this audit is lower priority and should queue behind those two deploys.

---

## 1. Full Technical SEO Audit

### Current sitemap inventory (counted from data files)

| Page type | Count | Source |
|-----------|-------|--------|
| Static | 10 | `sitemap.ts` lines 15–76 |
| Blog posts | 21 | `blog.ts` (21 `slug:` entries) |
| Venues `/venues/[slug]` | 23 | `venues.ts` |
| City pages `/tickets/[slug]` | 24 | `cities.ts` |
| Category pages `/tickets/[slug]` | 13 | `categories.ts` |
| World Cup main | 1 | `sitemap.ts` line 113 |
| World Cup stadiums | 16 | `worldcup.ts` |
| **Total** | **108** | |

Note: the CLAUDE.md header says 24 venues / 37 cities / 17 World Cup pages. The data files currently hold **23 venues / 24 cities + 13 categories on the same `/tickets/[slug]` route / 16 stadium pages + 1 main WC**. The 37-city figure is outdated in docs; actual is 24 city + 13 category = 37 `/tickets/[slug]` pages combined. Clarify CLAUDE.md in a future pass — not urgent.

### Findings (ordered by priority)

#### P0 — CRITICAL: www/non-www canonical mismatch (carried over from 2026-04-13, STILL UNFIXED)

**Evidence — three files, all misaligned with the serving domain:**

1. `web/src/app/sitemap.ts` line 8:
   ```ts
   const BASE_URL = 'https://ticketscan.io';
   ```
   Every one of the 108 sitemap URLs points at non-www.

2. `web/src/app/robots.ts` line 17:
   ```ts
   sitemap: 'https://ticketscan.io/sitemap.xml',
   ```
   Robots.txt advertises a non-www sitemap URL.

3. `web/src/app/layout.tsx` line 41:
   ```ts
   metadataBase: new URL("https://ticketscan.io"),
   ```
   Every relative canonical (via `alternates.canonical: '/some-path'` or OG `url`) resolves against non-www. Even the `/compare/layout.tsx` fix that explicitly sets `alternates.canonical: 'https://ticketscan.io/compare'` uses non-www.

**Why this is still P0:** Vercel serves `https://www.ticketscan.io` (per CLAUDE.md "Live URLs" and the entire codebase's reference URLs). Googlebot's canonical-selection algorithm sees:
- Crawled URL: `https://www.ticketscan.io/venues/msg`
- Sitemap URL: `https://ticketscan.io/venues/msg`
- OG url meta: `https://ticketscan.io/venues/msg`

When the sitemap URL and the crawled URL disagree, Google can either (a) ignore the sitemap entry, (b) pick one URL as canonical and let the other languish, or (c) treat them as duplicate-content candidates. All three outcomes suppress indexation and ranking.

**The fix is three one-line changes:**
```ts
// sitemap.ts line 8
const BASE_URL = 'https://www.ticketscan.io';

// robots.ts line 17
sitemap: 'https://www.ticketscan.io/sitemap.xml',

// layout.tsx line 41
metadataBase: new URL("https://www.ticketscan.io"),
```
Plus: audit the hand-rolled full-URL references (e.g., `venues/[slug]/page.tsx` line 45 hard-codes `https://ticketscan.io/venues/${slug}` in the OG url, same for `tickets/[slug]/page.tsx` line 78, `venues/[slug]/page.tsx` line 103 in the `StadiumOrArena` JSON-LD `url` field). All of these need to switch to `www.ticketscan.io` — or better, read from a single constant.

**Effort:** 30 min (change 3 constants + sweep hard-coded URLs).
**Impact:** Unblocks everything downstream. This was the #1 P0 last week and remains the #1 P0 this week.

**Verification after deploy:**
- `curl -I https://ticketscan.io/venues/msg` must return 301 to `https://www.ticketscan.io/venues/msg` (or the opposite direction, if we reverse the canonical choice — but pick one).
- `curl https://www.ticketscan.io/sitemap.xml | grep -c 'www.ticketscan.io'` should equal 108; `grep -c '>https://ticketscan.io'` should equal 0.
- Re-submit sitemap in Google Search Console after deploy.

#### P0 — CRITICAL: 3-day uncommitted SEO bundle (rolled into this week's release)

The 2026-04-19 daily flagged a 3-day stall on a large schema/metadata bundle. As of 2026-04-20, the same files are still in the working tree:

- `web/src/app/world-cup-2026/page.tsx`, `[stadium]/page.tsx`, `WorldCupSchedule.tsx` (new)
- `web/src/app/venues/[slug]/page.tsx` (Ball Arena refresh + Canadian country fix — partly delivered via commit `7c5d637`, partly still uncommitted)
- `web/src/app/blog/page.tsx`, `blog/[slug]/page.tsx` (Article @graph)
- `web/src/app/how-it-works/page.tsx` (HowTo JSON-LD)
- `web/src/app/page.tsx` (FAQPage @graph on homepage)
- `web/src/app/compare/layout.tsx` (new file, WebApplication + BreadcrumbList)
- `web/src/data/venues.ts`, `web/src/data/blog.ts`
- `web/public/logo.png` (512×512 Organization-logo asset)

**Recommended action this week:** Bundle the canonical-domain fix with the existing working-tree bundle, one PR, one deploy, clears both P0s.

#### P1 — HIGH: Canonical tags missing on most page types

A grep for the string `canonical` across `web/src/app/` matches only **one file**: `compare/layout.tsx`. None of the venue, city/category, blog list, FAQ, how-it-works, or World Cup pages set an explicit `alternates.canonical`.

Next.js will synthesize a canonical from `metadataBase` + the request path, but this is implicit and (a) doesn't render an explicit `<link rel="canonical">` in some scenarios, (b) is fragile with dynamic routes that might be crawled with trailing slashes / capitalized slugs / trailing query strings, and (c) is locked to the (currently wrong) `metadataBase`.

**Fix:** Add explicit canonical to every `generateMetadata()`:
```ts
alternates: { canonical: `https://www.ticketscan.io/venues/${slug}` }
```
Apply to `venues/[slug]/page.tsx`, `tickets/[slug]/page.tsx`, `world-cup-2026/[stadium]/page.tsx`, `world-cup-2026/page.tsx`, `blog/page.tsx`, `blog/[slug]/page.tsx`, `faq/page.tsx`, `how-it-works/page.tsx`, `page.tsx` (homepage).

**Effort:** ~1 hr — 9 files, one `alternates` block each.

#### P1 — HIGH: `/dashboard` is the new `/compare` (naked metadata)

`web/src/app/dashboard/page.tsx` is marked `'use client'` and there is **no `dashboard/layout.tsx`** to provide server-side metadata. This is the exact problem `/compare` had before the 2026-04-19 fix. `/dashboard` is linked from every navbar (it's one of the primary CTAs) and is in the sitemap with priority 0.9 — it's almost certainly Googlebot's first crawl target after the homepage.

**Current state:** Its `<title>` falls back to the root template `"Ticket Scan - Compare Ticket Prices"`, the description is the generic root description, and there is no dashboard-specific JSON-LD.

**Fix:** Mirror the `/compare/layout.tsx` pattern — new file `web/src/app/dashboard/layout.tsx` with:
- `title`: "Search Concert, Sports & Theater Tickets — Ticket Scan"
- `description`: Explicit mention of search use-cases, artist/team/venue lookup, multi-platform comparison
- `alternates.canonical: 'https://www.ticketscan.io/dashboard'`
- JSON-LD `@type: SearchAction` scoped to dashboard + `BreadcrumbList` (Home → Search)

**Effort:** ~45 min, same shape as the compare fix.

#### P1 — HIGH: BreadcrumbList schema missing from 60+ pages

Grep for `BreadcrumbList` matches **3 files**: `compare/layout.tsx`, `blog/[slug]/page.tsx`, `world-cup-2026/page.tsx`. Missing from:
- `/venues/[slug]` (23 pages) — visual breadcrumbs present
- `/tickets/[slug]` (37 pages) — visual breadcrumbs present
- `/world-cup-2026/[stadium]` (16 pages) — visual breadcrumbs present
- `/faq`, `/how-it-works`, `/blog` (list page)

**Fix:** Inject BreadcrumbList JSON-LD as a second `<script type="application/ld+json">` alongside the existing schema on each page. Example for venue pages:

```ts
const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ticketscan.io' },
    { '@type': 'ListItem', position: 2, name: 'Venues', item: 'https://www.ticketscan.io/venues' },
    { '@type': 'ListItem', position: 3, name: venue.name }
  ]
};
```
Note: `/venues` index page does not exist today (see P2 below) — if it still doesn't exist at deploy time, skip the middle breadcrumb and go Home → Venue.

**Effort:** ~2 hrs for all four templates.

#### P2 — MEDIUM: No `/venues` or `/tickets` hub/index pages

Clicking "Venues" in a breadcrumb has nowhere to go. There is no `/venues` page listing all 23 venues, and no `/tickets` page listing all 37 city+category pages. This is both a UX gap and a PageRank gap — hub pages are a standard programmatic-SEO pattern because they concentrate incoming link equity and then distribute it to the cluster children.

**Fix:** Build two hub pages:
- `/venues` — grid of all 23 venue cards, group by type (arena, stadium, theater) or by city. Link internally.
- `/tickets` — grid of all 37 city/category pages, group by "By City" and "By Category." Link internally.

Both are pure static, no API dependency, and they establish a clean Home → Hub → Leaf architecture that also supplies the middle breadcrumb for children.

**Effort:** ~3 hrs. Detailed spec in Section 4 (Site Architecture).

#### P2 — MEDIUM: Navbar still missing `/how-it-works` and `/faq`

Per the 2026-04-13 audit. `Navbar.tsx` lists: Dashboard/Search, Compare, Watchlist, Favorites, Blog, World Cup, Login, Sign Up. **Neither `/how-it-works` nor `/faq` appears in either the authenticated or unauthenticated nav**, despite both pages now carrying rich schema (HowTo in the working tree, FAQPage already live). These are trust/conversion pages; nav linkage is one of the strongest discovery and priority signals.

**Fix options, in order of preference:**
1. Add "How It Works" to the unauthenticated desktop nav between "Blog" and "World Cup 2026," matching the existing `text-white/80` link style. Mobile menu: same treatment.
2. Add "FAQ" to the Footer under a Help/Support column.

**Effort:** ~15 min for nav change (filed as CRO Agent request — see Section 6).

#### P2 — MEDIUM: World Cup main page still `'use client'`

`/world-cup-2026/page.tsx` still starts with `'use client'` (first line). `world-cup-2026/layout.tsx` does exist and provides metadata, so the naked-metadata problem is solved for this route — but the body content is still client-rendered. High-priority, high-content landing page; server-rendering the static content would speed crawl and reduce TBT.

**Fix:** Refactor the WC landing to a Server Component. Extract the interactive filter controls (stadium selector, date filter, country chip filter) into a small client island. Keep the 400+ lines of stadium copy server-rendered.

**Effort:** ~3 hrs. Not urgent — the layout file means metadata is fine — but worth queuing.

#### P2 — MEDIUM: Login/Register still in sitemap

`sitemap.ts` lines 52–63 still include `/login` and `/register` with priority 0.3. These are conversion flows, not SEO targets. Remove.

**Effort:** 2 min.

#### P3 — LOW: City/category slug collision — verify

Cities and categories share the `/tickets/[slug]` route space. With 24 city slugs and 13 category slugs, there's collision potential. Quick audit:
```bash
cd web && grep -E "^\s+['\"][a-z-]+['\"]:" src/data/cities.ts src/data/categories.ts | awk -F\' '{print $2}' | sort | uniq -d
```
Should return empty. If not, the build will silently prefer one over the other (see `getPageData()` in `tickets/[slug]/page.tsx` line 28 — cities are checked first, so a collision would hide the category page).

**Effort:** 5 min to run the check.

#### P3 — LOW: Image alt-text + Core Web Vitals

Can't verify from code alone. Next rotation item — a Lighthouse run on the top 10 pages (by sitemap priority) via the Vercel deploy preview.

---

## 2. Programmatic SEO Expansion — Update to 2026-04-13 Plan

**Status:** still gated on indexation fix. Once the P0 canonical-domain fix is deployed and GSC confirms uplift, kick off Tier 1.

### Recalibrated priority given World Cup proximity (52 days out)

The original plan had "Best Time to Buy" as Tier 1 Phase 1 and World Cup team pages as Tier 1 Phase 2. **Swap them.** World Cup is in 52 days, the search-volume curve for "[team] world cup tickets" is ramping *now*, and competition is thinner for WC team pages than for evergreen "best time to buy concert tickets" queries. The WC pages also have near-zero content production risk because we already have the match schedule and venue data — they're 80% template-assembled from existing `worldcup.ts` data plus team-specific group-stage schedules.

### Updated Tier 1 (launch target: May 2026 — after P0 deploys clear)

| # | Pattern | Pages | Priority | Rationale |
|---|---------|-------|----------|-----------|
| 1 | `/tickets/[team]-world-cup-2026` | 10 countries | HIGH NOW | Timely, low comp, reuse existing WC data |
| 2 | `/best-time-to-buy/[category]` | 8 categories | HIGH | Evergreen, data-backed, differentiator |
| 3 | `/venues/` + `/tickets/` hub pages | 2 | HIGH | Site architecture prereq (P2 above) |

**Tier 1 additions:** I'm deprioritizing `/compare/[event-slug]` and artist/team pages for now — the former requires ISR plumbing we don't yet have, the latter is in a competitive tier-1 battleground where we won't win until our domain authority climbs.

### Template specs for Tier 1

#### Pattern 1: World Cup team pages — `/tickets/[country]-world-cup-2026`

**Slugs (10):** `usmnt`, `mexico`, `canada`, `brazil`, `argentina`, `england`, `france`, `germany`, `spain`, `portugal`.

**Why these 10:** Host nations (3) drive home-country demand. The remaining 7 are the highest-volume tournament favorites in US English-language search. (Non-English queries not addressed in this phase.)

**Route:** Use the existing `/tickets/[slug]` route pattern to reuse the file-routing investment. This means we treat each team as a "category" entry, not a new dynamic segment.

**Data model addition:** Extend `categories.ts` with a new `team` field or add a new `worldCupTeams.ts` that plugs into `tickets/[slug]/page.tsx`'s `getPageData()` switch. Leaning toward a separate data file so it doesn't pollute categories semantically.

**Template structure (each page ~800 words unique):**
- H1: "[Country] World Cup 2026 Tickets"
- Intro: Team's WC history (last appearance, best finish, current roster highlights) — 150 words
- **Group stage schedule table:** From `worldcup.ts` — match date, venue, time, link to stadium page
- **Price expectations:** By phase (group, R16, QF, SF, Final) — seed with tier-estimate ranges
- **How to buy:** FIFA official + resale comparison + fan token lottery — 200 words
- **Stadiums where [country] plays:** Linked grid to `/world-cup-2026/[stadium]` pages
- **FAQ:** 5–7 questions with FAQPage schema (e.g., "Are [country] World Cup tickets sold out?", "What sections do [country] fans sit in?")
- **CTA:** Watchlist signup for country-specific price alerts

**Content Agent ask:** 150-word intro + 5–7 FAQ Q&A pairs per country. See Section 5.

#### Pattern 2: Best Time to Buy — `/best-time-to-buy/[category]`

**Slugs (8):** `concert-tickets`, `nfl-tickets`, `nba-tickets`, `mlb-tickets`, `nhl-tickets`, `broadway-tickets`, `world-cup-2026-tickets`, `college-football-tickets`.

**Route:** New dynamic segment `/best-time-to-buy/[category]/page.tsx`. Static gen via `generateStaticParams` from a new `bestTimeToBuy.ts` data file.

**Template structure:**
- H1: "Best Time to Buy [Category] Tickets — 2026 Data"
- **The quotable insight** (first paragraph, 40–60 words, designed to be pulled as a featured snippet / AI citation):
  > "Based on [TicketScan's price history of X events / our analysis of Y prices tracked in 2025–26], the cheapest time to buy [category] tickets is typically [window] before the event, when prices drop an average of [%] from release-day highs. The single worst time is [window], when [X]% of fans panic-buy."
- **Data visualization:** Line chart — price index vs. days-before-event (built from `price_history` table aggregates)
- **Category-specific playbook:** 4–6 tactical tips (e.g., NFL: "Monday after schedule release drops primary prices 8%"; Concerts: "Verified-resale prices bottom out 24h before show")
- **FAQ with FAQPage schema** (5 Q&A)
- **CTA:** "Set a price alert for [category] events" → dashboard search prefill

**Prereq data pipeline:** Requires an aggregation query on `price_history` grouped by `category` and `days_until_event`. That's a backend ticket (Railway/index.js), not a frontend one. Filing as a backend request — see Section 5.

#### Pattern 3: Hub pages — `/venues` and `/tickets`

Covered in Section 4 (Site Architecture).

### Deferred to Tier 2 (Q3)

- Artist/team evergreen pages (non-WC): still planned, but wait for DA improvement.
- `/compare/[event-slug]` per-event comparison pages: needs ISR + on-demand revalidation infrastructure.
- `/tickets/[city]/[venue]` city+venue combos: cannibalization risk vs. existing venue pages — re-evaluate after hub pages ship.
- Festival pages: low priority.

---

## 3. AI Search Optimization

**Context:** TicketScan wants to be cited when users ask ChatGPT, Perplexity, Gemini, Claude.ai, or Google's AI Overviews: "where can I compare ticket prices," "what's the cheapest way to buy concert tickets," "World Cup 2026 ticket tips," "Ticketmaster vs SeatGeek fees."

### What helps AI assistants cite us

1. **Quotable answer paragraphs** — 40–80 words, self-contained, opening the content section. AI retrieval pulls short extractable blocks.
2. **Entity clarity** — `Organization` schema with `sameAs`, `FAQPage` schema, `Article` schema, unique factual claims tied to named data sources.
3. **Original data & numbers** — Assistants favor content that cites concrete statistics over generic tips. "Prices drop 18% in the final 72 hours before a concert" beats "prices usually drop closer to the event."
4. **Structured FAQ content** — FAQPage schema with direct Q→A pairs is a top source of RAG-retrieved snippets.
5. **llms.txt** — emerging convention; not required but signals AI-friendliness.

### Current state assessment

**Good (after the 2026-04-19 working-tree bundle lands):**
- Homepage FAQPage (3 Q&A scoped to `/`)
- `/faq` FAQPage (16 Q&A across 5 categories)
- Organization schema with `sameAs` to social profiles
- `/compare` now has `WebApplication` schema with quotable `description` + `featureList`

**Gaps:**

#### P1 — No `llms.txt` at the domain root
Convention: `https://www.ticketscan.io/llms.txt` — a markdown file that summarizes the site for LLM crawlers. Adoption is still early but Anthropic, Vercel, and most AI-friendly SaaS companies are publishing one.

**Fix — add this file (`web/public/llms.txt`):**
```markdown
# TicketScan
> Compare ticket prices across Ticketmaster, SeatGeek, StubHub, and Vivid Seats. Track price history, get price-drop alerts, and see data-backed buy/wait recommendations.

## About
TicketScan is a free ticket-price comparison tool. We query multiple primary-market and resale platforms in parallel and show all-in (fee-inclusive) prices side-by-side so fans can see the true cost at each source.

## Key features
- Side-by-side price comparison: Ticketmaster, SeatGeek, StubHub, Vivid Seats, and 60+ resale sites
- Price history charts with buy/wait/hold recommendations
- Free price-drop email alerts (no account required to browse; account required for alerts)
- All-in fee pricing (primary and resale)
- Tier-level price estimates (floor, club, lower, upper)

## World Cup 2026
We track ticket availability for all 104 matches across 16 stadiums in the US, Canada, and Mexico.

## Pricing
Free. No paid tier. Affiliate-revenue funded.

## Primary entry points
- https://www.ticketscan.io/ — home
- https://www.ticketscan.io/dashboard — search
- https://www.ticketscan.io/compare — price comparison tool
- https://www.ticketscan.io/world-cup-2026 — World Cup hub
- https://www.ticketscan.io/faq — frequently asked questions
- https://www.ticketscan.io/how-it-works — product explainer

## Contact
hello@ticketscan.io
```

**Effort:** 5 min to create + deploy. Place in `web/public/llms.txt` so Next.js serves it at the root.

#### P1 — Answer paragraphs need to lead, not trail

Spot-check of `venues/[slug]/page.tsx` structure: the visible content opens with a hero block (venue name, city, capacity) and then event listings. The long-form "guide" copy tends to be further down the page. Move a 40–80 word "quotable" opener to the very top of the page body — this is the block AI assistants will cite.

**Recommended answer-paragraph template for venue pages (Content Agent ask):**

> "[Venue Name] is a [capacity]-seat [arena/stadium/theater] in [City], home to [primary tenants]. Tickets at [venue] range from about $[low] for upper-level seats to $[high] for floor sections at marquee events, with the cheapest typical listings for weeknight concerts and NHL games. Most fans save 15–25% by comparing prices across Ticketmaster, SeatGeek, and StubHub before buying."

Three sentences, names the entity, gives concrete numbers, mentions comparators. Exactly the shape AI retrieval pulls.

#### P2 — Make FAQPage answers longer and more declarative

Current `/faq` answers are plain text — good. But a skim suggests some are short ("Yes." / "No, we don't do that."). AI retrieval pulls richer blocks better. Aim for 40–100 word answers that each stand alone as a quotable paragraph. Content Agent ask to audit and expand.

#### P2 — Cross-link branded competitor comparisons

When AI assistants answer "Ticketmaster vs SeatGeek fees," they want a source that has named both. Our `/compare/layout.tsx` title now says "Compare Ticket Prices — Ticketmaster vs SeatGeek" which is correct. Extend this pattern:

- Write a blog post: "Ticketmaster vs SeatGeek: Fees, Selection & User Experience (2026 Guide)" — ~1,500 words, data-backed, with a comparison table. Links to `/compare`.
- Write: "StubHub vs Vivid Seats: Which Resale Site Is Cheaper?"
- Write: "All-In Pricing: Why the Sticker Price Isn't Real"

These bracketed-comparison posts are disproportionately cited by AI assistants because they're the exact shape of the user's question. Filed as Content Agent requests — see Section 5.

#### P2 — Presence check (manual, this week)

Run these queries in ChatGPT (4.5), Perplexity, and Google AI Overviews:
- "compare ticket prices"
- "cheapest way to buy World Cup 2026 tickets"
- "is Ticketmaster cheaper than SeatGeek"
- "best time to buy concert tickets"

Log which results cite TicketScan and which don't. Next week's audit should carry a tracking table.

---

## 4. Site Architecture Review

### Current structure (flat, no hubs)

```
/
├── /dashboard (search, CSR, naked metadata — P1)
├── /compare (CSR, has layout.tsx as of 2026-04-19)
├── /watchlist (auth, noindex via robots.txt)
├── /favorites (auth)
├── /event/[id] (noindex via robots.txt)
├── /venues/[slug] (23 pages, no hub)
├── /tickets/[slug] (37 pages, no hub, city+category collision risk)
├── /world-cup-2026/ (has hub, 16 stadium children)
├── /blog/ (has hub at /blog, 21 posts)
├── /how-it-works (no nav link — P2)
├── /faq (no nav link)
├── /login, /register (in sitemap — remove)
└── /privacy, /terms
```

### Issues

1. **Orphaned clusters:** `/venues/*` and `/tickets/*` (city+category) have no parent hub. Crawl path is Homepage → (footer link?) → leaf. This doesn't distribute PageRank well, and it leaves breadcrumbs pointing at non-existent pages.
2. **Route namespace collision:** `/tickets/[slug]` serves cities, categories, and (per the Tier 1 plan) soon World Cup team pages. If we scale this to 37 + 10 = 47 slugs without hierarchy, the namespace gets crowded.
3. **`/dashboard` and `/compare` are peers in the nav** but have different roles (free-text search vs. comparison-specific). Users often don't know which to click. This is a CRO concern more than SEO.
4. **World Cup is the only cluster with a clean architecture** (hub `/world-cup-2026` + children `/world-cup-2026/[stadium]`). This is the template the other clusters should follow.

### Recommended architecture

```
/ (home)
├── /dashboard (search)
├── /compare (comparison tool)
├── /venues (NEW HUB — 23 venue cards, grouped by type)
│   └── /venues/[slug]
├── /tickets (NEW HUB — city & category index, grouped)
│   ├── /tickets/[city-slug] (24 cities)
│   ├── /tickets/[category-slug] (13 categories)
│   └── /tickets/[team]-world-cup-2026 (10 team pages — Tier 1)
├── /best-time-to-buy (NEW HUB — 8 category guides)
│   └── /best-time-to-buy/[category]
├── /world-cup-2026 (hub)
│   └── /world-cup-2026/[stadium] (16 stadiums)
├── /blog (hub)
│   └── /blog/[slug]
├── /how-it-works (add to nav)
├── /faq (add to footer)
├── /privacy, /terms
```

### Hub page template spec

**`/venues/page.tsx` (server component, static):**
- H1: "All Venues — Ticket Prices & Guides"
- Intro paragraph (60 words, mentions concert, sports, theater)
- Section: "Arenas" — grid of 12+ venues, each card: name, city, capacity, tenants, "View Guide" CTA
- Section: "Stadiums" — grid of 4+ venues
- Section: "Theaters & Other" — remaining
- Section: "Browse by City" — linked chips to `/tickets/[city]`
- CTA: "Track tickets at any venue"
- BreadcrumbList JSON-LD: Home → Venues
- CollectionPage JSON-LD with `hasPart` referencing all 23 venue URLs (strong PageRank distribution signal)

**`/tickets/page.tsx` (server component, static):**
- H1: "Tickets by City & Category"
- Tabs or sections: "By City" (24 city cards), "By Category" (13 category cards)
- Highlight upcoming-playoff categories at top (`nba-tickets`, `nhl-tickets` — currently playoffs)
- BreadcrumbList + CollectionPage schema

### Internal linking improvements

Beyond hubs, wire these cross-links (high-impact, easy wins):

1. **Venue pages → City pages:** Every `/venues/[slug]` page's visible content references the city (e.g., "Kia Center in Orlando, FL"). Wrap that city reference in a `<Link href="/tickets/${citySlug}">` so every venue page links out to its city. Gives city pages 23 new internal links without adding a single visual element.
2. **City pages → Venue pages in that city:** Already partial. Ensure every `/tickets/[city]` page lists all venues in that city with links to `/venues/[slug]`.
3. **Blog posts → programmatic pages:** Audit the 21 blog posts. Any post mentioning a venue, city, or category should link to the corresponding programmatic page. Content Agent ask — see Section 5.
4. **WC stadium pages → team pages (post-Tier 1):** When `/tickets/[country]-world-cup-2026` pages ship, link every WC stadium page to the 3–4 teams playing there.

### URL structure recommendation

Keep existing URLs — no breaking changes. The current `/tickets/[slug]` ambiguity is tolerable at 37 slugs and with the World Cup team addition reaches ~47. If we ever scale to 100+ slugs in this namespace, break out to `/tickets/cities/[slug]`, `/tickets/category/[slug]`, `/tickets/teams/[slug]` — but not this quarter, since URL changes are costly post-indexation.

---

## 5. Content Agent Handoff (new briefs)

Filed as separate docs in `marketing-agents/output/seo-requests/`. Summary of what's being handed over this week:

### This week (priority, small)
1. **AI-citation opener paragraphs for venue pages** — 23 × 60-word openers following the template in Section 3. Target delivery: 2026-05-01.
2. **FAQ expansion audit on `/faq`** — review the 16 existing Q&A, expand any answer shorter than 40 words to 40–100 words. Target: 2026-04-27.

### Next 30 days (Tier 1 programmatic support)
3. **World Cup country page copy** — 10 countries × (150-word intro + 5–7 FAQ Q&A pairs). Target: 2026-05-10 (launch with the team pages in mid-May).
4. **Best-time-to-buy copy** — 8 categories × (40–60-word quotable insight + 4–6 playbook tips + 5 FAQ Q&A). Target: 2026-05-15. **Blocked until backend delivers the price-history aggregation.**
5. **Bracketed-comparison blog posts** (AI SEO): 3 posts — "Ticketmaster vs SeatGeek (2026)", "StubHub vs Vivid Seats", "All-In Pricing Explained". Target: one per week, starting 2026-04-27.
6. **Blog-to-programmatic internal link audit** — Review 21 blog posts, add links to venue/city/category pages where natural. Target: 2026-05-05.

Brief files will be dropped in `seo-requests/2026-04-20-*.md` as the individual asks are fully scoped.

---

## 6. CRO Agent Handoff

1. **Navbar: add "How It Works"** to the unauthenticated desktop nav between `/blog` and `/world-cup-2026`, and to the unauthenticated mobile menu. Style: match existing `text-white/80 hover:text-white transition-colors text-sm`. ~15 min diff in `Navbar.tsx` lines 87–107 and 167–190. Provides both UX trust signal and a strong internal-link priority boost to a schema-rich page.

2. **Footer: add "FAQ"** link to the Help/Support footer column (create the column if it doesn't exist — verify `Footer.tsx`).

3. **Consider consolidating the `/dashboard` and `/compare` CTAs** on the homepage — users don't know which to click. Propose A/B test: merge into a single "Find & Compare Tickets" button that defaults to `/dashboard` with a toggle to `/compare`. Out of SEO scope but flagging the UX friction.

---

## 7. Backend Agent Handoff (new this week)

**Price-history aggregation endpoint** — Required for `/best-time-to-buy/[category]` pages. Spec:

```
GET /api/public/price-history/aggregate?category=nfl&group_by=days_until_event
→ {
    success: true,
    data: {
      category: 'nfl',
      sampleSize: 1234,                       // number of events in aggregate
      points: [
        { daysUntilEvent: 180, priceIndex: 100 },  // baseline
        { daysUntilEvent: 90, priceIndex: 104 },
        { daysUntilEvent: 30, priceIndex: 112 },
        { daysUntilEvent: 7, priceIndex: 94 },
        { daysUntilEvent: 1, priceIndex: 87 }
      ],
      bestWindow: { min: 7, max: 14, savingsPct: 16 },
      worstWindow: { min: 30, max: 45, savingsPct: -12 }
    }
  }
```

Aggregation query runs against the existing `price_history` table grouped by category-mapped events. Caching is OK — refresh daily. Tagging this as a Backend-Agent request (not SEO scope to build, but SEO is the consumer).

---

## 8. Action Priority Matrix (rolling)

| # | Priority | Issue | Owner | Effort | Impact |
|---|----------|-------|-------|--------|--------|
| 1 | P0 | Fix www/non-www canonical (sitemap + robots + metadataBase + hard-coded refs) | Eng | 30 min | UNBLOCKS ALL SEO |
| 2 | P0 | Commit & deploy 3-day uncommitted schema bundle | Eng | 15 min | 40+ schema upgrades go live |
| 3 | P1 | Add `/dashboard/layout.tsx` (mirror `/compare`) | Eng | 45 min | Core page gets real metadata |
| 4 | P1 | Explicit canonical tags on all 9 templates | Eng | 1 hr | Removes implicit-canonical fragility |
| 5 | P1 | BreadcrumbList schema on venues/cities/WC stadiums/FAQ/HIW/blog list | Eng | 2 hrs | SERP breadcrumb display |
| 6 | P1 | Publish `/llms.txt` | Eng | 5 min | AI-assistant surface eligibility |
| 7 | P2 | Build `/venues` and `/tickets` hub pages | Eng | 3 hrs | Site architecture + PageRank |
| 8 | P2 | Add "How It Works" to navbar | CRO | 15 min | Discovery + priority signal |
| 9 | P2 | Remove `/login` + `/register` from sitemap | Eng | 2 min | Sitemap hygiene |
| 10 | P2 | Refactor WC main page to Server Component | Eng | 3 hrs | Faster crawl |
| 11 | P2 | Backend: price-history aggregation endpoint | Backend | 2 hrs | Tier 1 programmatic prereq |
| 12 | P3 | City/category slug collision check | Eng | 5 min | Sitemap hygiene |
| 13 | ONGOING | GSC API connection for rank tracking | Ops | - | Audit quality |

**This week's release train (recommended):** Items 1, 2, 3, 6, 8, 9 in one PR. Items 4, 5 in a follow-up PR. Items 7, 11 next week.

---

## 9. Appendix: Verification commands (post-deploy)

```bash
# P0.1 — canonical-domain fix verification
curl -sI https://ticketscan.io/ | grep -i location           # expect 301 → www
curl -s  https://www.ticketscan.io/sitemap.xml | grep -c 'https://www.ticketscan.io'  # expect 108
curl -s  https://www.ticketscan.io/sitemap.xml | grep -c '>https://ticketscan.io<'    # expect 0
curl -s  https://www.ticketscan.io/robots.txt | grep -i sitemap                       # expect www URL

# P0.2 — working-tree bundle verification
curl -s https://www.ticketscan.io/compare | grep -c 'WebApplication'    # expect 1
curl -s https://www.ticketscan.io/ | grep -c 'FAQPage'                  # expect 1
curl -s https://www.ticketscan.io/how-it-works | grep -c 'HowTo'        # expect 1
curl -s https://www.ticketscan.io/blog/any-slug | grep -c 'Article'     # expect 1+

# P1 — dashboard metadata after fix
curl -s https://www.ticketscan.io/dashboard | grep -oE '<title>[^<]+'   # expect dashboard-specific, not fallback
```

---

## Next rotation: Week of 2026-04-27

Assuming P0.1 and P0.2 land this week, the next weekly should focus on:
1. Indexation telemetry — how many of 108 pages did Google pick up after the canonical fix?
2. Tier 1 programmatic launch kickoff (WC country pages).
3. Hub page build (`/venues`, `/tickets`).
4. AI-citation presence check across ChatGPT/Perplexity/Gemini.
5. First Lighthouse/CWV pass on top-10 pages.

If P0.1 has not landed by 2026-04-27, escalate — the weekly audit ceiling is capped until canonical domain is correct.
