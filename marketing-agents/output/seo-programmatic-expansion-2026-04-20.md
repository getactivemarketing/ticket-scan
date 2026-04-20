# Programmatic SEO Expansion Plan — 2026-04-20 (Week 2)

**Agent:** SEO Specialist (Agent 2)
**Prior plan:** 2026-04-13 — [seo-programmatic-expansion-2026-04-13.md](./seo-programmatic-expansion-2026-04-13.md)
**Status:** STILL GATED on indexation fix. See `seo-audit-week-2026-04-20.md` §1 (P0s).

---

## What changed this week

1. **Reprioritization:** World Cup country pages leapfrogged "Best Time to Buy" to Tier 1 Phase 1 because (a) the tournament is 52 days out and search demand is ramping *now*, (b) we already have the core data in `worldcup.ts`, and (c) competition is thinner for `[country] world cup tickets` than evergreen purchase-timing queries.
2. **New Tier 1 addition:** Hub pages (`/venues`, `/tickets`) are now prerequisite infrastructure — they unblock BreadcrumbList navigation and distribute PageRank to the leaf pages we're about to multiply.
3. **Deferred to Tier 2:** `/compare/[event-slug]` pushed to Q3. Needs ISR plumbing we don't yet have, and the new `WebApplication` schema on the generic `/compare` page may capture most of the comparison-search-intent value in the meantime.

---

## Current inventory (108 pages across 7 patterns)

| Pattern | Count | Template | In sitemap? | In navigation? |
|---------|-------|----------|-------------|----------------|
| `/venues/[slug]` | 23 | Venue guide | ✓ | Via footer only |
| `/tickets/[city]` | 24 | City guide | ✓ | Via footer only |
| `/tickets/[category]` | 13 | Category guide | ✓ | Via footer only |
| `/world-cup-2026/` | 1 | Tournament hub | ✓ | ✓ (navbar) |
| `/world-cup-2026/[stadium]` | 16 | Stadium guide | ✓ | Via hub |
| `/blog/[slug]` | 21 | Article | ✓ | Via `/blog` hub |
| Static (home, dashboard, compare, etc.) | 10 | — | ✓ | ✓ |

---

## Expansion roadmap

### Tier 1 — launch in May 2026 (after P0 indexation fix deploys)

| Phase | Pattern | Count | Blocker | Content Agent dep | Backend dep |
|-------|---------|-------|---------|-------------------|-------------|
| 1a | `/venues` hub | 1 | — | None (reuse existing venue copy) | None |
| 1a | `/tickets` hub | 1 | — | None | None |
| 1b | `/tickets/[country]-world-cup-2026` | 10 | Content briefs | 10 × (150w intro + FAQ) | None |
| 1c | `/best-time-to-buy/[category]` | 8 | Backend aggregation endpoint | 8 × (quotable + playbook + FAQ) | Price-history aggregation endpoint |

**Target ship dates:**
- Phase 1a: 2026-05-04 (hub pages, no content blocker)
- Phase 1b: 2026-05-15 (WC country pages)
- Phase 1c: 2026-05-22 (best-time-to-buy pages)

**Total new pages in Tier 1:** 20 (1 + 1 + 10 + 8).

### Tier 2 — Q3 2026

| Pattern | Count | Notes |
|---------|-------|-------|
| `/compare/[event-slug]` | 20–30 | Needs ISR for price freshness |
| Non-WC artist/team pages | 25 | High competition; wait for DA rise |
| `/tickets/[city]/[venue]` combos | 24 | Re-evaluate cannibalization after hubs ship |

### Tier 3 — Q4 2026 / deferred

| Pattern | Decision |
|---------|----------|
| Festival pages | Maybe — 5–10 major festivals as a test |
| `/tickets/near/[location]` | SKIP — Google's Event listings dominate |
| Non-English WC country pages | Consider if international traffic grows |

---

## Phase 1a — Hub pages (no content-agent dependency)

### `/venues/page.tsx`

**Route:** `web/src/app/venues/page.tsx` (new file).

**Template:**
- **H1:** "All Venues — Ticket Prices & Guides"
- **Intro** (reuse/remix from venue index copy): "Compare ticket prices at 23+ venues across the US and Canada. See upcoming events, seating tier estimates, and venue-specific buying tips." (30 words, cite-friendly.)
- **Section 1: Arenas** — Grid of arena-type venues (filter on `venue.type === 'arena'`). Card content: name, city, capacity, primary tenants, "View guide →" CTA.
- **Section 2: Stadiums** — Same shape, `venue.type === 'stadium'`.
- **Section 3: Theaters & Other** — remaining venue types.
- **Section 4: Browse by City** — Chip row linking to each `/tickets/[city]` page where a venue exists. Creates 20+ cross-cluster internal links from one hub page.
- **CTA:** "Track prices at any venue — set a free alert"
- **JSON-LD:** `CollectionPage` + `BreadcrumbList` (Home → Venues). `CollectionPage.hasPart` lists all 23 venue URLs — strong PageRank distribution signal.

**Metadata:**
```ts
title: 'All Venues — Compare Ticket Prices & Seating Guides | Ticket Scan'
description: 'Ticket prices, seating tier estimates, and buying tips for 23+ arenas, stadiums, and theaters across the US and Canada. Compare prices across Ticketmaster, SeatGeek, and StubHub.'
alternates: { canonical: 'https://www.ticketscan.io/venues' }
```

**Sitemap:** add `/venues` with priority 0.7, changeFrequency 'weekly'.

### `/tickets/page.tsx`

**Route:** `web/src/app/tickets/page.tsx` (new file — doesn't collide with `[slug]` because static routes take precedence in Next.js App Router).

**Template:**
- **H1:** "Tickets by City & Category"
- **Intro** (~40 words, quotable): "Browse tickets and compare prices for 37 categories — from NBA playoffs to Broadway, from Orlando to New York. Every page compares prices across Ticketmaster, SeatGeek, StubHub, and 60+ resale sites."
- **Section 1: Popular now** (manually curated, 4–6 cards — e.g., during April 2026: `nba-tickets`, `nhl-tickets`, `baseball-tickets`, `world-cup-2026-tickets`)
- **Section 2: By City** — 24 city cards, alphabetical, with a jump-link alphabet
- **Section 3: By Category** — 13 category cards grouped by type (sports / music / theater / other)
- **Section 4: By World Cup team** (post-Phase 1b): 10 country chips
- **JSON-LD:** `CollectionPage` + `BreadcrumbList`.

**Sitemap:** add `/tickets` with priority 0.7.

---

## Phase 1b — World Cup country pages

### Slug strategy & routing

Use the existing `/tickets/[slug]` route. Treat each country as a special `tickets` entry — cleanest option given we already route there and it keeps the URL pattern consistent with our main ticket-intent pages.

**Slugs (10):**
- `usmnt-world-cup-2026` (US men's national team)
- `mexico-world-cup-2026`
- `canada-world-cup-2026`
- `brazil-world-cup-2026`
- `argentina-world-cup-2026`
- `england-world-cup-2026`
- `france-world-cup-2026`
- `germany-world-cup-2026`
- `spain-world-cup-2026`
- `portugal-world-cup-2026`

### Data file

New file: `web/src/data/worldCupTeams.ts`. Shape:

```ts
export interface WorldCupTeam {
  slug: string;                    // e.g., 'usmnt-world-cup-2026'
  country: string;                 // e.g., 'United States'
  displayName: string;             // e.g., 'USMNT'
  fifaGroup: string;               // 'A' | 'B' | ...
  groupStageMatches: {
    opponent: string;
    date: string;                  // ISO
    stadiumSlug: string;           // keys into worldCupVenues
    kickoffLocal: string;          // 'TBD' or 'HH:MM'
  }[];
  keyPlayers: string[];            // 3–5 names
  recentFormBlurb: string;         // 2 sentences, human-written
  priceTier: 'low' | 'medium' | 'high';  // drives price-expectations section
  description: string;             // 150 words, human-written
  faq: { question: string; answer: string }[];  // 5–7 pairs
}
```

### Template integration

Hook into `tickets/[slug]/page.tsx`'s `getPageData()`. Add a third branch:

```ts
function getPageData(slug: string): PageData | null {
  const city = getCityBySlug(slug);
  if (city) return { type: 'city', data: city };

  const category = getCategoryBySlug(slug);
  if (category) return { type: 'category', data: category };

  const team = getWorldCupTeamBySlug(slug);
  if (team) return { type: 'wcTeam', data: team };

  return null;
}
```

### Content structure (per page)

- **H1:** "[Display Name] World Cup 2026 Tickets"
- **Lead paragraph** (150 words, written by Content Agent): Team's WC history (last appearance, best finish, qualifying path, current form). Optimized for quotability.
- **Group stage schedule table** (generated from `groupStageMatches`): date | opponent | stadium (linked) | kickoff local time
- **Price expectations section** (generated from `priceTier` + rolled-up `tierEstimates` from backend): expected ranges for group-stage / R16 / QF / SF / Final with "we're currently seeing" pricing pulled from API
- **How to buy** (shared across all 10 pages, ~200 words, written once by Content Agent, templated): FIFA official lottery windows + resale platforms + fan-token allocations
- **Stadiums where [team] plays** — Auto-generated chip links to `/world-cup-2026/[stadium]` from `groupStageMatches.stadiumSlug`
- **FAQ** (5–7 Q&A per team from `worldCupTeams[i].faq`, with `FAQPage` JSON-LD): common questions like "Where do [team] fans sit?", "Are [team] tickets sold out?", "What sections are cheapest for [team] matches?"
- **CTA:** "Get price alerts for [team] tickets" → dashboard search prefill

### JSON-LD payload (per page)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SportsTeam",
      "name": "United States men's national soccer team",
      "sport": "Soccer"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [/* from worldCupTeams.faq */]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "position": 1, "name": "Home", "item": "https://www.ticketscan.io" },
        { "position": 2, "name": "Tickets", "item": "https://www.ticketscan.io/tickets" },
        { "position": 3, "name": "USMNT World Cup 2026" }
      ]
    }
  ]
}
```

### Metadata

```ts
title: `${team.displayName} World Cup 2026 Tickets — Schedule, Prices, Where to Buy`
description: `Compare ticket prices for every ${team.displayName} World Cup 2026 match. Group stage schedule, stadium guides, price expectations, and alerts.`
alternates: { canonical: `https://www.ticketscan.io/tickets/${team.slug}` }
keywords: [`${team.displayName} world cup 2026 tickets`, `${team.country} world cup tickets`, ...]
```

### Internal linking

- Each WC stadium page (`/world-cup-2026/[stadium]`) lists teams playing there → link to `/tickets/[team]-world-cup-2026`
- Main WC hub (`/world-cup-2026`) adds a "By Team" section with 10 chips
- New `/tickets` hub Section 4 (per Phase 1a) shows all 10 country chips

---

## Phase 1c — Best Time to Buy

**Gated on backend aggregation endpoint** (see `seo-audit-week-2026-04-20.md` §7).

### Route

New dynamic segment: `web/src/app/best-time-to-buy/[category]/page.tsx` + `web/src/app/best-time-to-buy/page.tsx` (hub).

### Slugs (8)

`concert-tickets`, `nfl-tickets`, `nba-tickets`, `mlb-tickets`, `nhl-tickets`, `broadway-tickets`, `world-cup-2026-tickets`, `college-football-tickets`.

### Template

- **H1:** "Best Time to Buy [Category] Tickets — 2026 Data"
- **Quotable insight** (40–60 words, first paragraph, Content Agent):
  > "Based on TicketScan's price history of [X] events tracked in 2025–26, [category] tickets are cheapest [best window] before the event, when prices drop [%] from release-day highs. The single worst time to buy is [worst window], when prices run [%] above baseline."
- **Price-over-time chart** — Recharts line chart pulling from `/api/public/price-history/aggregate?category=X`. X-axis: days-until-event (inverted — 180 on left, 0 on right). Y-axis: price index (100 = baseline).
- **Key windows callout card** — Best window, worst window, typical savings.
- **Category playbook** (Content Agent): 4–6 tactical tips specific to category.
- **FAQ** (5 Q&A with FAQPage schema).
- **CTA:** "Get price alerts for [category] events" → dashboard prefill with category filter.

### Hub page — `/best-time-to-buy`

- **H1:** "When to Buy Tickets — Data-Backed Guides"
- Intro: quotable summary of cross-category findings
- Grid of 8 category cards, each teasing the "best window" stat
- CollectionPage + BreadcrumbList schema

---

## Rollout sequencing (recommended)

```
Week of 2026-04-20 (this week)
  └── Land P0 indexation fix + uncommitted bundle
  └── Backend: kick off price-history aggregation endpoint
  └── Content Agent: start on WC country briefs

Week of 2026-04-27
  └── GSC telemetry check — did indexation unlock?
  └── Ship /venues + /tickets hub pages (Phase 1a)
  └── Backend: aggregation endpoint in review

Week of 2026-05-04
  └── Content Agent: WC country copy delivered
  └── Ship /tickets/[country]-world-cup-2026 × 10 (Phase 1b)
  └── Content Agent: start best-time-to-buy briefs

Week of 2026-05-11
  └── Tier 1b live — monitor GSC indexation curve
  └── Content Agent: best-time-to-buy copy delivered

Week of 2026-05-18
  └── Ship /best-time-to-buy/* × 8 + hub (Phase 1c)
  └── Total Tier 1 launched: 20 new pages
```

---

## Success metrics (check post-launch)

| Metric | Baseline | Target by 2026-06-20 |
|--------|----------|----------------------|
| Indexation rate (GSC coverage) | Unknown (likely <10%) | 60%+ of 128 total pages |
| Organic clicks/week (GSC) | Unknown | Baseline capture needed first |
| "world cup 2026 [country] tickets" SERP rank | Not ranking | Top 20 for 5+ countries |
| "best time to buy [category] tickets" SERP rank | Not ranking | Top 30 for 3+ categories |
| AI-assistant citation rate (manual check) | 0 | Cited in 2+ assistants for WC queries |

---

*Next review: 2026-04-27 (pending P0 canonical fix deploying this week).*
