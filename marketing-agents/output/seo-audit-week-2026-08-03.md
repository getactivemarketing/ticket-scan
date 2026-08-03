# TicketScan SEO Audit — Week of 2026-08-03

## Executive summary

The deployed site is crawlable and technically healthy at the URL level: `robots.txt` is reachable, the sitemap is reachable, all 110 sitemap URLs returned HTTP 200 in a parallel crawl, programmatic routes are prerendered, and the local Next.js production build completes. The largest SEO risk is content freshness and intent mismatch around the completed 2026 World Cup, followed by thin/low-differentiation risk across the city/category templates and a weak hub-to-cluster architecture.

## Findings ranked by impact

| Priority | Finding | Evidence | Recommendation |
|---|---|---|---|
| P0 | World Cup page still contains live-buying guidance after the tournament ended July 19, 2026. | [Live World Cup hub](https://www.ticketscan.io/world-cup-2026/) includes “Act Fast — The Tournament Is Live,” “lock in your seats,” and “prices spike.” Repository source confirms the stale copy in `web/src/app/world-cup-2026/page.tsx`. | Change the hub and 16 stadium pages to a post-event/results/archive intent. Remove active purchase CTAs and “actual prices will vary” language where it implies future inventory. Link to current concerts, sports, and evergreen ticket-buying guides. Preserve URLs and add a visible “Updated August 2026” note. |
| P1 | Programmatic pages have limited unique evidence beyond one description, an event list, and shared tips. | `/tickets/[slug]` uses the same layout for 24 cities and 13 categories; API failures silently render “No upcoming events found.” | Add data-backed sections: event-count/update timestamp, venue coverage, price-range methodology, local buying FAQ, nearby venue links, and a useful empty-state explanation. Noindex only pages that genuinely lack demand/content; do not mass-index empty templates. |
| P1 | Site architecture does not expose a dedicated public hub for artists, teams, comparison guides, or “best time to buy” content. | Primary navigation exposes Search/Blog/World Cup; public hubs are mainly `/venues`, `/tickets`, and `/blog`. | Add pillar hubs and contextual cluster links before expanding page count. Prioritize `/compare-guides`, `/best-time-to-buy`, and team/artist landing pages backed by real event data. |
| P1 | World Cup content and blog inventory now compete for a past-event intent while evergreen ticket demand has higher value. | [Live homepage](https://www.ticketscan.io/) still promotes World Cup 2026 as a prominent current section; [World Cup hub](https://www.ticketscan.io/world-cup-2026/) has post-event and live-event copy mixed together. | Reframe World Cup as an archive/case study and move the homepage module to a lower “2026 results” position. Refresh title, H1, FAQ, and internal anchors. |
| P2 | Sitemap revision stamp is stale relative to the current content state. | Live sitemap reports `2026-07-20` for static/programmatic URLs, while the audit date is 2026-08-03 and the World Cup copy changed after the event. | Bump the revision when the post-event refresh ships; use per-page `lastModified` for material updates where practical. |
| P2 | Build reports a workspace-root warning caused by two lockfiles. | `npm run build` succeeds but Next.js selects `/Applications/.../ticketscan/package-lock.json` and detects `web/package-lock.json`. | Set `turbopack.root` explicitly in `web/next.config.ts` or standardize the intended workspace/install model. Verify Vercel build behavior after the change. |
| P2 | Event detail URLs are disallowed from crawling. | `robots.txt` disallows `/event/`. This is appropriate if event pages require authentication or are unstable, but it forfeits long-tail event indexing. | Confirm the product decision. If event pages can be public, create stable metadata/canonicals and allow only public event URLs; otherwise keep blocked and ensure no indexable internal links imply they are SEO landing pages. |
| P3 | No measured Core Web Vitals were available in this run. | Google PageSpeed Insights API returned HTTP 429 for both mobile and desktop requests. | Pull field data from Search Console/CrUX and run PageSpeed manually or with an authenticated quota. Record LCP, CLS, INP, TTFB, and page-level outliers. |

## Technical checklist

- Core Web Vitals: **Not measured**; PSI endpoint rate-limited with HTTP 429. Do not infer scores from the static build.
- Mobile usability: **Code appears responsive** (`sm`, `md`, `lg` breakpoints and mobile menu are present); run a real-device sweep across representative city, venue, category, blog, and World Cup pages.
- Internal linking: **Partially strong**. City pages link to related venues; venue pages link back to city pages; tickets and venues hubs link to clusters. Category pages only link to the first four cities/categories, which creates shallow and uneven distribution.
- Orphan pages: **No sitemap-level orphans observed**. The 110 sitemap URLs all returned 200. Crawl-depth and link graph still need Search Console or a rendered crawler to confirm every route is linked from HTML.
- Canonicals: **Implemented** on city/category, venue, World Cup stadium, blog, and major static layouts. Spot-check canonical host and trailing-slash normalization in a browser crawler.
- Sitemap: **Reachable and valid enough for URL checks**. 110 URLs returned; all tested URLs were HTTP 200. Inventory is broader than the stated 78 SEO pages because it includes blogs, hubs, and legal/static pages.
- Robots: **Reachable and not blocking public SEO clusters**. It blocks account, admin, API, and event routes. [Live robots.txt](https://www.ticketscan.io/robots.txt).
- Page speed: **Unknown from PSI**; Next build succeeds. Inspect fonts, GTM, hero media, and API render latency when field data is available.
- Duplicate content: **Moderate risk**. Shared templates, repeated price-tip copy, and short city descriptions could create near-duplicate pages. Compare rendered word/phrase overlap before adding more combinations.
- 404s: **No sitemap 404s**. A deliberately guessed non-existent venue slug returned 404, confirming not-found handling. Keep a weekly internal/external broken-link crawl because dynamic API event links are a separate risk.

## Inventory snapshot

- 25 venue detail pages plus `/venues`.
- 24 city pages and 13 category pages under `/tickets`, plus `/tickets`.
- 17 World Cup pages including the hub.
- 23 blog posts plus `/blog`.
- Supporting indexable pages include home, FAQ, how-it-works, contact, privacy, and terms.

## Next 7 days

1. Ship the World Cup archive refresh and update the sitemap revision stamp.
2. Add a reusable “last updated / data coverage / price methodology” block to city, category, and venue templates.
3. Create a public compare-guides hub and link it from homepage, tickets hub, venue pages, FAQ, and relevant blog posts.
4. Obtain field CWV data and test five representative mobile URLs.
5. Run a rendered link crawler with authenticated and unauthenticated sessions, then reconcile with Search Console 404 and indexing reports.

## Source notes

Live evidence: [homepage](https://www.ticketscan.io/), [World Cup hub](https://www.ticketscan.io/world-cup-2026/), [robots.txt](https://www.ticketscan.io/robots.txt), [sitemap.xml](https://www.ticketscan.io/sitemap.xml). Repository evidence: `web/src/app/sitemap.ts`, `web/src/app/robots.ts`, `web/src/app/tickets/[slug]/page.tsx`, `web/src/app/venues/[slug]/page.tsx`, and `web/src/app/world-cup-2026/page.tsx`.
