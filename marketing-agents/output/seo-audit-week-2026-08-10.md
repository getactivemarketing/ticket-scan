# TicketScan SEO Audit — Week of 2026-08-10

## Executive summary

The site is technically crawlable and the current production build succeeds. Live checks returned HTTP 200 for the homepage, `/venues`, `/tickets`, `/faq`, `robots.txt`, and `sitemap.xml`; the sitemap contains 110 unique URLs. The highest-impact opportunity is not a broken crawl layer: it is improving topical authority and differentiation before adding more programmatic URLs. The World Cup section is now correctly post-event in its hub metadata/body, but the stadium metadata, global navigation, footer, and several recent blog entries still use active-ticket language and deserve one consistent archive policy.

## Findings ranked by impact

| Priority | Finding | Evidence | Action |
|---|---|---|---|
| P0 | World Cup archive messaging is inconsistent. | `world-cup-2026/page.tsx` says the event “just wrapped,” while `world-cup-2026/[stadium]/page.tsx` titles pages as “Tickets” and promises finding deals; the global navbar/footer still give World Cup prominent evergreen navigation. | Keep URLs, change stadium title/H1/CTA to results, venue, and observed-price archive intent. Add `Updated August 2026` and remove active inventory promises. Move the global link below evergreen discovery links or relabel it “World Cup 2026 archive.” |
| P1 | Programmatic pages can be thin when the API returns no events. | `/tickets/[slug]` and venue pages use shared templates and render an empty event state when the API is unavailable or has no inventory. | Add data coverage, last checked, price methodology, local/venue facts, and useful empty-state links. Set `noindex` only for pages with no demand and no durable editorial value. |
| P1 | Public site navigation is not aligned to the highest-value search clusters. | Anonymous navbar exposes Search, Blog, World Cup, Login, and Sign Up; `/venues` and `/tickets` are mainly discovered through the footer. No public comparison-guide or best-time hub exists. | Add `/compare-guides` and `/best-time-to-buy` hubs, link from homepage, FAQ, blog, tickets, and venue pages. Add direct “Venue Guides” and “Ticket Guides” links to the anonymous nav or a prominent browse module. |
| P1 | City/category route semantics are implicit. | Both use `/tickets/[slug]`; the page determines type by looking up city first, then category. | Add explicit breadcrumbs and visible page-type labels. Add a collision test so a city and category cannot silently share one slug/canonical. |
| P2 | Sitemap freshness is centrally stamped. | `sitemap.ts` uses `new Date('2026-08-01')` for all static/programmatic URLs. Live sitemap reports that value. | Use per-entity revision dates where practical; bump the stamp whenever the World Cup archive or template changes. Do not use “today” on every crawl. |
| P2 | Next.js build has a workspace-root warning. | `npm run build` passes but Next 16 detects root `package-lock.json` plus `web/package-lock.json`. | Set `turbopack.root` to the intended frontend root or standardize install ownership, then verify the Vercel build. |
| P2 | Event detail SEO is intentionally forfeited but not documented. | `robots.ts` disallows `/event/`, while watchlist links users to `/event/[id]`. | Confirm the decision. If public event pages are desired, create stable public metadata/canonical/expiry rules before allowing crawl. Otherwise keep blocked and avoid presenting them as SEO landing pages. |
| P3 | Core Web Vitals are unmeasured. | A source/build review cannot establish LCP, CLS, or INP; no Search Console/PageSpeed dataset was available in this run. | Pull field CWV from Search Console/CrUX and run PageSpeed on five representative mobile pages. Record LCP, INP, CLS, TTFB and slowest assets. |
| P3 | External 404 coverage is unverified. | Sitemap URLs are reachable; no authenticated Search Console or backlink crawl was available. | Reconcile Search Console Page indexing/404 reports with a rendered internal-link crawl weekly. |

## Technical checklist

- **Core Web Vitals:** Not measured. Do not infer pass/fail from build success.
- **Mobile usability:** Responsive breakpoints and a mobile menu are present in source. Validate on a real device for homepage, one city, one venue, one blog post, and one World Cup archive page.
- **Canonical tags:** Implemented for the main static pages and dynamic city/category, venue, blog, and World Cup stadium routes. Verify host/trailing-slash normalization in a crawler.
- **Robots:** Public clusters are allowed; account, admin, API, and event routes are disallowed. This is coherent if event detail is private/unstable.
- **Sitemap:** 110 live entries, unique locs, HTTP 200 on sampled public URLs. It includes legal pages and excludes several product/account pages.
- **Rendering:** Build completed successfully; 122 routes were generated. Dynamic API-backed pages revalidate hourly and can publish an empty state on upstream failure.
- **Duplicate content:** Moderate risk from shared tips, short data descriptions, and same route template for city/category. Run phrase-overlap scoring before scaling combinations.
- **Orphans:** Not proven. Sitemap inclusion is not the same as HTML discoverability. Crawl depth and inbound-link counts still need a rendered crawler/Search Console.

## Recommended sequence

1. Make World Cup hub, stadium pages, navigation, footer, and related blog links consistently archive-oriented.
2. Add durable content blocks and an API-failure/empty-state policy to city, category, and venue templates.
3. Launch the two evergreen hubs: `/compare-guides` and `/best-time-to-buy`.
4. Obtain field CWV and Search Console data; fix the top two measured bottlenecks.
5. Only then pilot artist/team or high-volume event pages.

## Verification notes

Live: [homepage](https://www.ticketscan.io/), [robots.txt](https://www.ticketscan.io/robots.txt), [sitemap.xml](https://www.ticketscan.io/sitemap.xml), [FAQ](https://www.ticketscan.io/faq). Local evidence: `web/src/app/sitemap.ts`, `robots.ts`, `tickets/[slug]/page.tsx`, `venues/[slug]/page.tsx`, `world-cup-2026/page.tsx`, and `world-cup-2026/[stadium]/page.tsx`.

