# Programmatic SEO Expansion — 2026-06-01

**Agent:** SEO Specialist (Agent 2) · Companion to [seo-audit-week-2026-06-01.md](./seo-audit-week-2026-06-01.md)
**Context:** WC opening 10 days out (2026-06-11). Tournament runs through 2026-07-19.

## Current programmatic surface (verified)
- `/venues/[slug]` — 25 pages (venue + events + seating tiers + JSON-LD Place/Breadcrumb)
- `/tickets/[slug]` — 24 city + 13 category = 37 pages (events + ItemList/Breadcrumb JSON-LD)
- `/world-cup-2026/[stadium]` — 16 pages (StadiumOrArena + AggregateOffer JSON-LD; **no Breadcrumb** — see audit P2)

All driven by `web/src/data/*.ts` + `generateStaticParams`. The template machinery is solid — adding a page type is a new route file + a data array.

## Time-boxed by the calendar
With the tournament 10 days out, **only WC-adjacent pages have indexing runway** (Google needs days–weeks to rank a new URL; anything not WC won't mature before the event). Everything else is a post-7/19 backlog item. Prioritize accordingly.

## Ranked opportunities

### NOW (ship before 6/11) — WC country/team landing pages
**Route:** `/world-cup-2026/[country]` (e.g. `/world-cup-2026/usa`, `/mexico`, `/canada`, plus top qualified nations: Argentina, Brazil, England, France, Germany, Spain, Netherlands, Portugal).
**Why:** "[country] world cup 2026 tickets" is the highest-volume WC query cluster and we have **zero** pages targeting it. Each is a single new file + a `worldcupCountries` data array.
**Template (reuse stadium shape):** country header + flag → group-stage match list (which of our 16 stadiums they play in, deep-linking to existing stadium pages) → "cheapest get-in by stadium" table (reuse `extractLowestPrice`) → FAQ block → CTA.
**Data we already have:** stadium pages + capacities + price ranges in `worldcup.ts`. **Need:** match-by-country mapping (Content Agent can supply group draw; brief filed).
**Effort:** 1 data file + 1 route template, then ~12 countries auto-generate. ~4 hr. **Highest-leverage item on the board.**
**Risk:** thin runway — even shipped today, ~10 days to index. Ship the top 4 (USA/Mexico/Canada + one marquee) first.

### NOW-ISH — `/world-cup-2026/cheapest-tickets` (lead-magnet anchor)
Carried from Content Agent's prior handoff. Single landing page aggregating the cheapest get-in across all 16 stadiums into one sortable table; email-capture CTA → `/api/newsletter/subscribe` with `source: 'wc-cheapest-tickets-landing'`. Sitemap entry priority 0.9. **This is the single best on-site newsletter-conversion fix** given [[newsletter-conversion-rootcause]] (signup form currently lives only on homepage). ~3 hr. Coordinate CTA with CRO.

### POST-TOURNAMENT BACKLOG (build after 7/19, ranked)
1. **Artist pages `/artist/[slug]`** — "Taylor Swift tickets compare", top ~50 touring artists. Highest evergreen volume. Needs an artist data array + events-by-artist API param (confirm `/api/public/events` supports `artist=`). Template mirrors venue page.
2. **City × venue combos `/tickets/[city]/[venue]`** — long-tail ("madison square garden new york tickets"). Cheap to generate from existing cities+venues join; watch for thin-content / near-duplicate risk vs the standalone venue page — gate on having ≥3 distinct upcoming events.
3. **`/best-time-to-buy/[category]`** — data-backed guides. **Blocked** on a backend price-history aggregation endpoint (not yet built). Real differentiator for AI citations once data exists.
4. **Event-type pages** (`/tickets/nfl-playoffs`, `/tickets/music-festivals-2026`) — seasonal; queue to the relevant season.

## Template-quality guardrail
Current city/category and venue pages render fine but the prose SEO block is near-identical boilerplate ("Ticket Scan compares prices from Ticketmaster, SeatGeek..."). Before scaling page *count*, vary the templated copy (pull a unique sentence from each data record) to avoid thin/duplicate-content risk as the namespace grows. Filed to Content Agent.

## Handoff to Content Agent
1. WC group-stage **match-by-country mapping** (which stadiums each nation plays in) — unblocks country pages.
2. 1–2 unique sentences per venue/city record to de-boilerplate templated prose.
3. Confirm `/world-cup-2026/cheapest-tickets` copy + FAQ.
Filed: [seo-requests/2026-06-01-content-agent-briefs.md](./seo-requests/2026-06-01-content-agent-briefs.md)
