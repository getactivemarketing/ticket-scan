# TicketScan SEO Audit — Week of 2026-08-17

Audit date: 2026-08-17  
Scope: `https://www.ticketscan.io` (live checks) and `web/` source review  
Primary conversions: newsletter signup, registration, watchlist add

## Executive summary

The site is crawlable and the core SEO plumbing is in place: live robots.txt and sitemap.xml return 200, representative pages return 200, canonical tags are rendered, and the production build completes successfully. The largest issue is freshness and intent mismatch: on 2026-08-17, the World Cup ended on 2026-07-19, but the homepage, hub, stadium pages, navigation, and several blog assets continue to frame the tournament as upcoming. This is a high-impact trust and AI-citation risk.

The second priority is technical quality debt: lint has four errors, the build warns about multiple lockfiles/root inference, and the public API-backed SEO pages can render thin event sections when upstream data is empty. Internal linking is decent for hubs, but the anonymous navbar does not expose `/venues`, `/tickets`, `/faq`, or `/how-it-works`, and there is no first-class artist/team or comparison landing-page architecture.

## Findings ranked by impact

### P0 — Correct expired World Cup messaging and structured data

Observed: current date is 2026-08-17; tournament end date in source is 2026-07-19. The homepage still says “June 11 – July 19, 2026” and “Compare prices across all venues”; anonymous navigation still labels World Cup 2026 as live; the hub and stadium templates retain “Find World Cup Tickets” and ticket-search CTAs. The stadium template correctly changes EventStatus to `EventCompleted`, but the visible copy and title still promise tickets.

Action: add an explicit completed-tournament state. Change titles/H1s/meta descriptions to historical/recap intent, remove active `InStock`/buy CTAs, link to a 2026 results/price-analysis hub, and keep only verified archival data. Add a 2027/next-tournament plan only when supported by real data.

### P1 — Verify all programmatic pages have useful inventory or a strong editorial fallback

The venue and city/category pages fetch events at build/revalidation time. On API failure or an empty response they still publish indexable pages with the template shell, title, breadcrumbs, and limited static copy. This creates thin or near-duplicate variants, especially for city pages with one venue and no current events.

Action: render a meaningful “How we track prices / what to expect” fallback with unique local facts, last-checked timestamp, related venue/category links, and a clear data limitation. Set `noindex` for pages with no qualifying inventory and insufficient editorial content, or do not generate them until content thresholds are met.

### P1 — Repair SEO quality gate failures before the next release

`npm run lint --prefix web` reports four errors: an unescaped apostrophe in `compare/page.tsx`, `@ts-ignore` in `app/layout.tsx`, synchronous state-setting in `components/Navbar.tsx`, and a render-created tooltip component in `components/PriceChart.tsx`. It also reports nine warnings, including an unoptimized `<img>` in `EventCard`.

Action: make lint part of CI; fix errors, then address the image and hook warnings because they can affect stability and performance. The production build itself completed and generated 122 static pages.

### P1 — Confirm sitemap coverage against one canonical route inventory

The live sitemap contains 110 unique URLs. Source review shows 24 venue URLs, 23 city URLs, 12 category URLs, 17 World Cup URLs including the hub, 25 blog URLs, and 9 static URLs. The same dynamic route `/tickets/[slug]` resolves either a city or category based on lookup order.

Action: generate one typed `seoPages` inventory used by both `generateStaticParams()` and `sitemap.ts`; assert unique slugs across cities/categories and fail the build on collisions. Add an automated sitemap test that checks every generated URL returns 200 and has a self-canonical.

### P2 — Improve discovery of SEO hubs for anonymous users

The homepage links to venue cards and city/category browse tabs; the footer links to `/venues`, `/tickets`, and World Cup. The anonymous desktop navbar exposes Search, Blog, World Cup, Login, and Sign Up, but not the primary browse hubs, FAQ, or How It Works. Venue pages link back to a city; city/category pages link to related entities. This is adequate but uneven PageRank distribution.

Action: add Browse (with Venues, Cities, Categories) to the public navbar and footer; add a compact “Related city / venues / categories” module to every programmatic page. Keep the important landing pages within two clicks from the homepage.

### P2 — Validate mobile layout and CWV with field data

Representative live requests returned 200: `/`, `/venues/msg`, `/tickets/new-york`, `/tickets/nba`, `/world-cup-2026/metlife-stadium`, `/blog/best-time-to-buy-concert-tickets`, and protected/app routes. The public PageSpeed Insights API was quota-exhausted during this run, so LCP, CLS, and INP are not measured here.

Action: pull CrUX/Search Console field data and run PageSpeed/Lighthouse from CI for homepage, one city, one venue, one category, one blog post, and the World Cup archive. Watch the fixed navbar, large hero, inline SVGs, GTM, and event images as likely LCP/INP contributors.

### P2 — Clean up crawl/index policy for app routes

robots.txt disallows `/watchlist`, `/favorites`, `/event/`, `/api/`, `/admin`, `/login`, and `/register`, and references the sitemap. This is directionally correct. The live `/event/foo` and `/admin` responses return 200 application shells; robots disallow is not a substitute for `noindex`.

Action: add `noindex, nofollow` metadata for authenticated/admin/error shells, confirm `/event/[id]` has a controlled not-found response for unknown IDs, and keep those routes out of the sitemap.

### P3 — Remove stale/unsupported metadata claims

The homepage exposes large proof points such as “50K+ Events Tracked,” “$127 Avg. Savings,” and “5+ Sites Compared” without an adjacent methodology or date. Several pages use generic “best prices” language while the data model can contain estimates or API gaps.

Action: attach “as of” dates and methodology links to quantitative claims; use “compare available listings” rather than an absolute best-price promise unless the evidence supports it.

## Checklist

| Area | Status | Evidence / next action |
|---|---|---|
| Core Web Vitals | Not measured | PageSpeed API quota exhausted; collect field/lab data |
| Mobile usability | Partial | Responsive Tailwind classes present; run device matrix |
| Internal linking | Needs improvement | Hubs exist, but public navbar omits browse hubs |
| Orphans | Partial | Sitemap coverage is broad; add crawler-based inbound-link test |
| Canonicals | Pass on sampled pages | Self-canonicals observed on homepage, venue, city, category, blog, WC |
| Sitemap | Pass, with automation gap | 110 unique live URLs; add URL/status/canonical test |
| Robots | Pass with hardening | Correct sitemap and app-route disallows; add noindex too |
| Page speed | Unverified | Run Lighthouse/PageSpeed in CI |
| Duplicate content | Risk | Empty API responses and templated city/category pages |
| 404s | Needs test | Add internal-link crawl; unknown app shells currently return 200 |

## Verification sources

- Live site: https://www.ticketscan.io/
- Robots: https://www.ticketscan.io/robots.txt
- Sitemap: https://www.ticketscan.io/sitemap.xml
- Search result visibility sample: https://www.ticketscan.io/how-it-works
- Build command: `npm run build --prefix web` (passed on audit date)
- Lint command: `npm run lint --prefix web` (failed with four errors)
