# TicketScan SEO audit — week of 2026-10-12

Audit date: 2026-10-12 (America/New_York)

Site: https://www.ticketscan.io

Platform: Next.js 16 on Vercel, static and server-rendered routes

## Executive summary

The site is crawlable and substantially larger than the weekly brief says: the
live sitemap contains 744 unique URLs. Sampled indexable pages return 200,
have a single H1, page-specific titles/descriptions, and canonical URLs.

The highest-impact issues are:

1. **P0 — public claim mismatch.** Live copy still promises disabled price
   tracking/alerts and price comparison in places where the product-status file
   forbids those claims. This is a trust, conversion, and search-quality risk.
2. **P1 — four discovered 404s.** The live map found four city/category URLs
   that return 404 and are not in the current sitemap. They appear to be stale
   or orphaned links, but should be traced and removed or redirected.
3. **P1 — `/compare` is indexable but absent from the sitemap.** It is linked in
   the footer and returns 200, yet the sitemap's static-page list omits it.
4. **P1 — freshness signals are uneven.** 261 team URLs use a build timestamp,
   while 305 programmatic URLs share the 2026-09-30 revision stamp. That is
   acceptable only when the underlying content really changed at those times;
   do not use `lastmod` as a heartbeat.
5. **P2 — the “78 pages” operating brief is stale.** The current index includes
   242 venue URLs, 191 ticket URLs, 261 team URLs, 22 blog URLs, and 17 World
   Cup URLs. Reporting and crawl budgets should use the deployed sitemap.

PageSpeed Insights could not be measured: the API returned “Quota exceeded” for
the mobile request. Core Web Vitals therefore remain **unverified**, not failed.
Run the check in Search Console/PageSpeed with a quota-enabled account.

## Technical findings

### Crawlability and indexation

| Check | Result | Evidence | Priority |
|---|---|---|---|
| Robots | Pass | `/robots.txt` returns 200; allows `/`, disallows account/event/admin/redirect paths, and names the sitemap | — |
| Sitemap availability | Pass | `/sitemap.xml` returns 200 XML with 744 unique `<loc>` values | — |
| Sitemap duplication | Pass | No duplicate URLs found in the deployed XML | — |
| Sitemap coverage | Partial | `/compare` is a 200 indexable route but is absent from `web/src/app/sitemap.ts` | P1 |
| Map versus sitemap | Partial | Firecrawl map found 747 URLs; four map-only URLs return 404, and login is intentionally not in the sitemap | P1 |
| Canonicals | Pass on samples | Homepage, city, venue, team, and World Cup stadium pages emit self-referencing canonical URLs | — |
| Orphan risk | Partial | Primary hubs are linked from navigation/footer, but `/compare` is footer-only and several high-value clusters are not represented in the top nav | P2 |

Deployed URL inventory:

- 242 `/venues/...` URLs (24 core venue guides plus the larger stadium/team-
  venue inventory).
- 191 `/tickets/...` URLs, including city/category combinations.
- 261 `/teams/...` URLs; the generated index reports 261 resolved and 0
  unresolved.
- 22 `/blog/...` URLs.
- 17 World Cup URLs including the hub.
- 744 total sitemap URLs.

### Broken and suspicious URLs

These URLs were discovered by the live map and directly returned 404:

- `/tickets/chicago/soccer`
- `/tickets/dallas/college-football`
- `/tickets/miami/festivals`
- `/tickets/new-orleans/nfl`

They are not present in the current `combos.generated.json` and are not in the
current sitemap. No current parent-page link to them was found in the sampled
city pages, so the likely cause is stale cached content or an old crawl path.
Still, they should be investigated in Vercel logs and Search Console, then
either removed from the source that emits them or redirected only if a true
replacement exists. Do not create thin pages solely to make the URLs 200.

The requested `/venues/madison-square-garden` URL also returns 404, while the
canonical production slug `/venues/msg` returns 200. This is not a sitemap
defect, but it reinforces the need for a stable alias/redirect policy for venue
name variants.

### On-page metadata and structure

Sampled production pages:

- `/`: title, description, canonical, and H1 present.
- `/tickets/new-york`: page-specific title/description/canonical and a single
  H1; includes city, event, venue, category, and guide links.
- `/venues/msg`: page-specific title/description/canonical and a single H1;
  includes venue facts and city links.
- `/teams/new-york-yankees`: page-specific title/description/canonical and a
  single H1.
- `/world-cup-2026/metlife-stadium`: page-specific title/description/canonical
  and a single H1.

Structured data is present on sampled collection/detail pages: Organization and
WebSite site-wide, ItemList/BreadcrumbList on hubs, and Place/Article/list
entities on relevant detail pages. Validate the JSON-LD in Rich Results Test
after the next content cleanup, especially where legacy price fields remain.

### Mobile and performance

The production HTML is server-rendered and the templates use responsive Tailwind
classes. A real mobile Lighthouse/PageSpeed run was not available because the
PageSpeed API quota was exhausted. Required follow-up:

1. Run PageSpeed mobile for `/`, one city page, one venue page, one team page,
   and one World Cup page.
2. Capture field data from Search Console if available.
3. Check event-feed hydration and third-party scripts separately; the homepage
   includes Google Tag Manager and live event content.

### Content quality and product-truth audit

This is the most urgent issue. The deployed homepage still says “Track it,”
“we watch them for you,” and “Get Told”; the registration page says “Start
tracking ticket prices today”; and the live venue metadata says “TicketScan
tracks when tickets ... go on sale” in some places but other data still carries
price comparison/alert language. The source scan also found legacy claims in
`web/src/data/blog.ts`, `web/src/data/worldcup.ts`, `PriceChart.tsx`,
`BuyRecommendation.tsx`, and `compare/page.tsx`.

Per `marketing-agents/PRODUCT-STATUS.md`, public copy must not claim price
tracking, price history/trends, price-drop alerts, target-price alerts,
buy/wait/hold advice, or TicketScan-derived pricing statistics. The audit
recommendation is to remove or noindex affected public content until rewritten
around verified event discovery, seller links, onsale/presale dates, venue
facts, and general ticket-buying guidance.

## Search visibility and competitor check

Firecrawl searches on 2026-10-12 returned no TicketScan result in the first six
results for:

- “where can I compare ticket prices” — results led with TicketWhiz, SeatPick,
  TicketData, SeatGeek, and Ticket-Compare.
- “cheapest way to buy concert tickets” — results led with TickPick, SeatGeek,
  Billboard, and Ticketmaster.
- “World Cup 2026 ticket tips” — results led with FIFA, Ticketmaster, SeatGeek,
  Goal, and specialist guides.

This is a directional SERP snapshot, not a ranking report. ChatGPT, Perplexity,
Google AI Overviews, Search Console, and GSC query data were not directly
available, so brand citation status there is **unverified**.

The practical gap is not another generic “compare prices” promise. It is a
clear, current explanation of what TicketScan actually provides, supported by
venue/city/team facts and seller-link workflows that do not overstate pricing
coverage.

## Prioritized recommendations

### P0 — remove false product claims before publishing or expanding pages

- Replace homepage/register/watchlist/compare/world-cup/blog claims about price
  tracking and alerts with event discovery, onsale/presale dates, venue facts,
  seller terms, and current checkout verification.
- Remove affected JSON-LD `Offer`/price assertions if they are not backed by
  current inventory.
- Add a release gate that scans `web/src` for forbidden status terms before a
  marketing/content deploy.

### P1 — fix crawl integrity

- Trace the four 404 combo URLs in Vercel/Search Console logs.
- Add `/compare` to the sitemap if it is intended to rank; otherwise mark it
  `noindex,follow` and keep it as a product route.
- Decide whether common venue-name aliases should 301 to canonical slugs.

### P1 — validate programmatic pages at scale

- Sample every template family for title uniqueness, H1 uniqueness, canonical,
  content-specific facts, and current event count.
- Keep the existing combo threshold of five qualifying upcoming events and omit
  pages that no longer meet it.
- Noindex thin team pages as the route already supports; monitor the percentage
  of team pages with meaningful event content.

### P2 — strengthen clusters and entity signals

- Link venue ↔ city ↔ team pages using descriptive anchors and a visible
  breadcrumb trail.
- Add a “Compare listings”/research route link to primary navigation only after
  the product claim is accurate; currently `/compare` is footer-only.
- Add `dateModified` and source notes to venue/tournament facts where the data
  can change, especially post-event World Cup pages.

### P2 — performance and accessibility verification

- Run mobile PSI/Lighthouse with a quota-enabled account.
- Check CLS around live event modules, image dimensions/alt text, and hydration
  cost from third-party scripts.
- Monitor 404s and soft-404s weekly from Search Console rather than relying on
  a single crawler pass.

## Sources checked

- https://www.ticketscan.io/
- https://www.ticketscan.io/robots.txt
- https://www.ticketscan.io/sitemap.xml
- https://www.ticketscan.io/tickets
- https://www.ticketscan.io/tickets/new-york
- https://www.ticketscan.io/venues/msg
- https://www.ticketscan.io/teams/new-york-yankees
- https://www.ticketscan.io/world-cup-2026/metlife-stadium
- https://www.ticketscan.io/faq
- Firecrawl map and scrapes performed 2026-10-12; PageSpeed API attempted and
  rejected for quota exhaustion.

## Rerun inputs

```text
workflow: firecrawl-seo-audit
site: https://www.ticketscan.io
date: 2026-10-12
output: marketing-agents/output/seo-audit-week-2026-10-12.md
```
