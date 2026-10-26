# TicketScan SEO audit — week of 2026-10-26

Scope: deployed `https://www.ticketscan.io` plus the Next.js source in
`web/src`. This is an internal report. The 2026-10-01 product-status file
overrides marketing prompts: price tracking, price history, price trends,
price-drop alerts, and buy/wait/hold recommendations are not current product
capabilities and are not recommended in copy.

## Executive summary

1. **P0 — public-copy integrity.** The deployed site still exposes unsupported
   claims and CTAs in legacy/cached surfaces: the homepage links to a
   “price trends” article, and the homepage/how-it-works/world-cup/venue
   templates expose “Get Onsale Alerts.” The World Cup data also contains
   stale cross-platform pricing and price-alert language. Remove or rewrite
   these before further acquisition work.
2. **P1 — mobile performance.** Lighthouse mobile on the homepage scored 83
   performance, with LCP 4.7s and TTI 4.8s. The measured opportunity is 166 KiB
   unused JavaScript, mostly Google Tag Manager/Google Analytics and one
   Next.js chunk.
3. **P1 — accessibility.** Lighthouse found contrast failures in event-status
   badges, venue labels, and low-contrast date labels. The SEO score was 100,
   but accessibility defects reduce usability and can damage conversion.
4. **P2 — crawl/index scale.** The live sitemap contains 746 unique URLs (not
   the 78-page brief). Every sitemap URL returned HTTP 200 in a 20-worker
   fetch check. Firecrawl mapped 496 URLs with a 500-URL crawl cap, so that
   crawl is not evidence of orphaning; use a sitemap-vs-link audit with a
   larger crawl budget before declaring orphans.
5. **P2 — freshness signals.** The sitemap has 305 URLs at the shared
   2026-09-30 content stamp and 416 generated team/combo URLs with
   2026-10-24 timestamps. This is defensible for data-generated pages, but the
   team index should only advance `lastmod` when the underlying entity or feed
   meaningfully changes.

## Evidence and checks

| Check | Result | Evidence |
|---|---|---|
| Sitemap availability | Pass | `https://www.ticketscan.io/sitemap.xml` returned 200; 746 `<loc>` entries; no duplicates detected. |
| Sitemap URL status | Pass | 746/746 URLs returned HTTP 200 on 2026-10-26. This does not verify thinness or correctness. |
| Robots | Pass with review | `https://www.ticketscan.io/robots.txt` allows `/`, disallows account/event/admin/API paths, and points to the sitemap. |
| Canonical | Pass on tested public pages | Homepage, venue, city/category, team, World Cup and blog templates emit canonical metadata in source; Lighthouse homepage canonical passed. |
| Titles/descriptions | Pass on tested pages | Representative pages have unique title/description metadata; team and venue templates generate entity-specific titles. |
| Structured data | Good foundation | Organization/WebSite site-wide; venue Place/FAQ/Breadcrumb; team SportsTeam; city/category ItemList/Event; World Cup/Breadcrumb. Validate with Rich Results Test after copy cleanup. |
| Mobile CWV proxy | Needs work | Lighthouse mobile homepage: performance 83, LCP 4.7s, TBT 70ms, CLS not reported as a failing audit, INP proxy max potential FID 150ms. |
| Mobile accessibility | Needs work | Lighthouse 96; contrast audit failed for `ON SALE`, venue label, `PRESALE`, and small date labels. |
| Broken sitemap URLs | Pass | No 4xx/5xx responses across sitemap URLs in this run. |
| AI/SERP visibility | Weak/uncertain | Site search queries surfaced the homepage and venue pages, but no reliable evidence of visibility for the target “where compare tickets” or “World Cup ticket tips” questions. Treat this as a baseline, not a ranking claim. |

## Findings ranked by impact

### P0 — remove unsupported product claims from live SEO surfaces

Observed live/source locations include:

- `web/src/components/NewsletterSignup.tsx`: “Get Onsale Alerts” is currently
  rendered site-wide. If the newsletter only delivers editorial/onsale
  information, rename the CTA to “Get the weekly onsale guide” and describe
  exactly what is sent; otherwise remove it until delivery is verified.
- `web/src/data/blog.ts`: homepage-facing article metadata still says “price
  trends” and “Save hundreds.” Rewrite the title, excerpt, and article body
  around general ticket-buying process, fees, official onsales, or venue
  choice; do not imply TicketScan data.
- `web/src/data/worldcup.ts`: World Cup venue descriptions and tips contain
  resale prices, cross-platform spread claims, “TicketScan shows” language,
  and price-alert CTAs. Remove those sections or replace with sourced venue,
  official-ticketing, seating, transit, and buyer-protection guidance.
- `web/src/components/PriceChart.tsx` and `BuyRecommendation.tsx` remain
  capability-risk surfaces even if not linked from the public crawl. Gate
  them behind the actual data contract or remove their public route usage.

Acceptance test: crawl homepage, all template types, blog, World Cup, and
venue pages; assert absence of forbidden product-status phrases and confirm
the rendered HTML, metadata, JSON-LD, and CTA labels all agree.

### P1 — lower homepage LCP and third-party script cost

Lighthouse mobile measured LCP at 4.7s. The unused-JS opportunity estimated
166 KiB / 790ms, with the largest contributors Google Analytics/GTM and a
Next.js chunk. Recommended sequence:

1. Load GTM after consent/interaction or after the first meaningful paint;
   preserve required affiliate verification separately.
2. Audit the homepage chunk and remove client-only code from server-rendered
   SEO sections where possible.
3. Capture a real-user CWV sample in Vercel/CrUX after deployment; Lighthouse
   is a lab result, not field data.

### P1 — fix contrast failures

The failing classes are visible and localized: green `text-success` on pale
backgrounds, amber `text-amber-600` on amber-100, gray venue labels, and
11–12px gray date labels. Use darker accessible tokens or a stronger
background, then rerun Lighthouse and axe on mobile widths.

### P2 — protect programmatic pages from stale or unsupported feed states

The source already has useful protections: shared pacing, entity-specific
metadata, thin-team noindex logic, and sitemap generation from resolved data.
Keep those. Add monitoring for:

- event cards that show “Price TBA” versus any price claim in surrounding copy;
- World Cup dates/results that are explicitly marked final or historical;
- generated pages whose event list is empty for several refreshes;
- sitemap URLs whose canonical, `noindex`, and HTTP status disagree.

### P2 — improve image/alt and content-quality validation

The representative venue and city pages are fact-rich, but use a template
pattern. Add a CI audit that checks each indexable programmatic page has:

- one entity-specific H1 and title;
- a unique description that contains verified entity facts;
- at least one internal link to its parent hub and one relevant sibling/child;
- a non-empty FAQ only when facts are actually available;
- no unsupported product-status phrase;
- no empty ItemList or fabricated offer.

## Internal linking and architecture observations

The current graph is directionally good: navbar/footer expose Tickets, Venues,
Teams, Blog and Onsale Calendar; venue pages link to their city and related
venues; city/category pages link to combo pages and venues; World Cup pages
link back to the hub and sibling stadiums. The 500-URL Firecrawl map cap means
orphan detection is inconclusive this week.

Run the following next week with a full crawl: collect all HTML `<a href>`
links, normalize trailing slashes/query strings, compare the set of indexable
sitemap URLs against inbound-link counts, and report zero-inbound pages
separately from nofollow/disallowed URLs.

## New content briefs for Content Agent

1. **“How to read a venue seating chart before buying a ticket”** — use three
   verified venue examples; explain section labels, sightline caveats, and
   event-specific configurations; CTA: browse the venue guide.
2. **“Onsale vs presale vs general sale: what each ticket date means”** —
   define each term, how to verify time zone and seller, and how to avoid
   speculative listings; CTA: browse the onsale calendar.
3. **“Ticket fees checklist: compare the final checkout total”** — general,
   non-TicketScan advice; no TicketScan price statistics or live comparisons.
4. **“World Cup 2026 host-stadium guide after the tournament”** — historical
   venue facts, seating, access, and match recap; do not present historical
   resale prices as current or make alert claims.

## Landing-page requests for CRO Agent

- Replace alert language with a verifiable onsale/presale newsletter promise,
  or pause the form until delivery is confirmed.
- Replace “compare prices”/“best deals” claims on informational pages with
  “find events,” “review availability,” “check onsale dates,” and “open seller
  pages,” unless live price data has been restored and tested.
- Add a short affiliate disclosure near outbound seller links, not only below
  the event list.
- On empty-feed states, offer the venue/city guide and onsale calendar rather
  than implying a future price alert.

## Sources and rerun inputs

- Deployed site: https://www.ticketscan.io/
- Sitemap: https://www.ticketscan.io/sitemap.xml
- Robots: https://www.ticketscan.io/robots.txt
- Representative venue: https://www.ticketscan.io/venues/metlife-stadium
- Representative city/category: https://www.ticketscan.io/tickets/new-york and
  https://www.ticketscan.io/tickets/new-york/nfl
- Representative team: https://www.ticketscan.io/teams/new-york-giants
- World Cup hub: https://www.ticketscan.io/world-cup-2026
- Local product guardrail: `marketing-agents/PRODUCT-STATUS.md`
- Local source reviewed: `web/src/app`, `web/src/components`, `web/src/data`
- Lab run: Lighthouse 13.5.0, mobile homepage, 2026-10-26 13:03:59 UTC.

Rerun: live URL + sitemap crawl + Lighthouse mobile/desktop + source phrase
audit after P0 copy changes.
