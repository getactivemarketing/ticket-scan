# TicketScan weekly technical SEO audit — 2026-10-05

## Executive summary

The public site is crawlable and structurally healthy, but its indexable copy is
not yet aligned with the current product state. The deployed site still
promises price comparison, price history, price alerts, and buy-timing guidance
even though price tracking has produced no usable data since 2026-07-24.

The live sitemap returned HTTP 200 and contains 749 unique URLs. This is no
longer a 78-page site: the current programmatic surface is 261 team pages, 242
venue URLs including the hub, 196 city/category ticket URLs including the hub,
22 blog URLs including the hub, 17 World Cup URLs including the hub, and 11
other public/core URLs. Search Console is not connected, so true index coverage,
rankings, crawl errors, and Core Web Vitals cannot be verified here.

## Impact-ranked findings

### P0 — stale product promises are live on indexable pages

Evidence:

- Live homepage copy says “Find it. Track it.” and includes a watchlist/chart
  treatment that visually implies price monitoring.
- `/how-it-works` advertises side-by-side prices, target-price alerts, price
  trends, and savings examples.
- The venue and ticket hubs advertise “Compare ticket prices” and “Track Ticket
  Prices.” Venue detail pages expose “Track Price” and a price-based CTA.
- `/compare` metadata and JSON-LD describe a live price-comparison tool and
  savings callouts.
- Multiple blog posts still claim TicketScan price history, price alerts, or
  data-backed timing recommendations.

This is a trust, quality, and eligibility problem: crawlers can index claims
that the product cannot currently substantiate, and users may arrive through a
page whose primary CTA is unavailable. Remove or rewrite those claims before
publishing more pages. Keep event discovery, onsale/presale dates, venue facts,
seller links, and general fee/checkout education.

### P0 — stale pages are amplified by the 749-URL sitemap

The sitemap intentionally exposes hundreds of venue, team, city/category, blog,
and World Cup pages. That scale is valuable only if every template instance is
fact-specific and operationally accurate. A stale shared template can repeat a
false promise across hundreds of URLs. Add a release gate that scans rendered
SEO text and metadata for prohibited claims before deployment.

Suggested denylist for public rendered copy while tracking is down:

```text
price history, price trends, price-drop alert, target price, buy now,
buy/wait/hold, track price, lowest recorded, savings callout, never overpay
```

Allow “onsale alert” or “presale date” only when it clearly refers to sale
timing, not price movement.

### P1 — programmatic scale is substantially larger than the brief

The brief says 78 SEO pages, while the deployed sitemap contains 749 unique
URLs. The current source data includes 261 teams and 156 city/category combo
records, in addition to venue, city, category, blog, and World Cup pages.

Action: maintain a generated inventory report with URL count by template,
render status, event count, unique fact count, last data refresh, and canonical.
Use it to identify pages with no upcoming events, no venue-specific facts, or
only boilerplate text. Omit or noindex pages that cannot meet the content bar.

### P1 — World Cup content has temporal inconsistency

The live World Cup hub says the tournament has wrapped, but its schedule still
labels fixtures “preliminary and subject to change,” and the live CTA says
“Explore WC 2026 Prices.” The post-tournament pages should be treated as a
historical/venue reference cluster, not as current ticket inventory pages.

Action: make tournament status, schedule status, and CTA language consistent;
remove price/inventory prompts; preserve verified stadium facts and a clearly
labeled historical schedule only after its source is confirmed.

### P1 — sitemap freshness needs an explicit policy

The deployed sitemap uses a shared `2026-08-24` last-modified stamp for static
venue/city/category/World Cup data while generated team/combo entries use a
newer build timestamp. This is not a duplicate URL issue, but it creates noisy
freshness signals if the underlying pages change independently.

Action: use per-data-file revision timestamps, or document that the shared stamp
changes only on a verified content revision. Do not use the deployment date as
`lastmod` for unchanged pages.

### P1 — Search Console and real-user performance are unverified

No Search Console property or rank-tracking export is available in the
workspace. PageSpeed Insights, field Core Web Vitals, mobile interaction, and
Google crawl coverage therefore remain unknown rather than clean.

Action: connect Search Console and CrUX/PageSpeed reporting; export weekly
landing pages, indexed/not-indexed reasons, Core Web Vitals, and query data.

### P2 — direct non-qualifying combo routes return 404

`/tickets/new-york/nfl` returned 404 while `/tickets/new-york` returned 200.
This is likely intentional because combo pages are generated only for qualifying
city/category pairs. Confirm that no internal links, sitemap entries, or old
external links point to omitted combos. If useful, return a helpful 404 with
links to the city page and category hub; do not generate thin fallback pages.

### P2 — social identity has a stale TikTok link

The live footer exposes a TikTok link, while the operational handoff says there
is no TicketScan TikTok account and TikTok was removed from social prompts.
Remove the link or verify the account before continuing to expose it in sitewide
navigation.

## Verified positives

- `/`, `/sitemap.xml`, `/robots.txt`, venue, city, team, and 404 sample routes
  responded successfully over HTTPS.
- `robots.txt` allows public content, blocks account/admin/API/private event
  paths, and references the deployed sitemap.
- The sitemap has no duplicate `<loc>` entries in the current operational
  report.
- Sampled public pages have a single primary H1, explicit canonicals, and
  index/follow behavior.
- Venue, city/category, team, and World Cup routes use stable slugs and have
  internal linking between hub/detail pages.
- Frontend tests passed: 76 passed, 0 failed.

## Core Web Vitals and mobile

Not measured. A curl spot check is not a browser performance test. Run PageSpeed
Insights or Lighthouse against the homepage, a venue page, a team page, a city
page, a combo page, and a blog post on both mobile and desktop. Prioritize LCP
hero media/font loading, image optimization, hydration cost on event lists, and
the client-side dashboard/compare routes.

## Schema and metadata review

The source includes Organization/WebSite, BreadcrumbList, FAQPage, CollectionPage,
StadiumOrArena, Event, and Article JSON-LD in appropriate templates. Validate
rendered JSON-LD after the stale-copy remediation. Do not emit price offers,
availability, low-price, savings, or price-history properties unless the page
has current, verifiable source data.

## Lint status

`npm test` passed 76/76. `npm run lint` failed with five existing errors and
eight warnings, including unescaped apostrophes in compare/home, the existing
`@ts-ignore` in layout, a script `require()` issue, a missing hook dependency,
and an unused image optimization warning. These are not all SEO blockers, but
the compare/home errors should be fixed alongside the stale-copy pass because
those routes are SEO/conversion-critical.

## Ordered remediation

1. Remove stale public price/tracking claims from shared templates, metadata,
   JSON-LD, homepage visuals, and blog CTAs.
2. Make the World Cup cluster historical and fact-consistent.
3. Add a rendered-copy denylist test to the production build.
4. Generate the 749-URL inventory and thin-page report on every content build.
5. Connect Search Console and PageSpeed/CrUX reporting.
6. Fix the TikTok footer link and confirm internal links do not target omitted
   city/category combos.
7. Resolve the five lint errors on SEO-critical routes.

## Evidence checked

- https://www.ticketscan.io/
- https://www.ticketscan.io/sitemap.xml
- https://www.ticketscan.io/robots.txt
- https://www.ticketscan.io/venues
- https://www.ticketscan.io/venues/metlife-stadium
- https://www.ticketscan.io/tickets
- https://www.ticketscan.io/tickets/new-york
- https://www.ticketscan.io/tickets/new-york/nfl
- https://www.ticketscan.io/faq
- https://www.ticketscan.io/world-cup-2026
- `web/src/app/`, `web/src/data/`, `web/next.config.ts`

