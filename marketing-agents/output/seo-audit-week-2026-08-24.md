# TicketScan SEO Audit — Week of 2026-08-24

## Executive summary

TicketScan has a sound crawl foundation: HTTPS is live, `robots.txt` points to the sitemap, programmatic pages emit canonicals, and key templates include BreadcrumbList/ItemList/FAQ structured data. The highest-impact work is freshness and programmatic quality control, not adding more URLs immediately.

Priority findings:

1. **P0 — Stale event inventory on venue pages.** The live Madison Square Garden page displays June 8–13, 2026 events even though the audit date is August 24. A user-facing “upcoming” list with past events damages trust and can make event markup ineligible or misleading. Add event-date filtering at render time, show an explicit empty-state when the API has no future inventory, and add freshness timestamps.
2. **P1 — Sitemap/page-count governance is out of sync.** The live sitemap contains 110 URLs: 25 venue pages, 37 `/tickets/*` pages, 16 World Cup stadium pages, 22 blog posts, and 10 static/section URLs. The operating brief says 78 SEO pages and 24 venues/17 World Cup pages. Reconcile the inventory source of truth and add an automated sitemap-vs-route count test.
3. **P1 — World Cup pages are now post-event content.** The tournament window ended July 19, 2026. Keep evergreen venue/ticket history only if it is updated to “archive,” and redirect or consolidate time-sensitive buying pages that now make future-ticket claims.
4. **P1 — Internal linking is good at the directory level but shallow between clusters.** City pages link to a few venues/categories and venue pages link to their city. Add explicit city↔venue↔category relationship blocks and hub links so every high-value page has contextual links beyond the footer.
5. **P2 — Core Web Vitals are not measurable from this crawl alone.** Vercel serves cached HTML, but no field/lab LCP, CLS, or INP values were available in the accessible responses. Establish Search Console/CrUX/PageSpeed monitoring before making performance claims.

## Crawl and technical checks

| Check | Result | Evidence / action |
|---|---|---|
| HTTPS/status | Pass | Homepage, FAQ, `/tickets/new-york`, and `/venues/msg` returned HTTP 200 in the live check. |
| Robots | Pass with review | `/robots.txt` allows `/`, blocks account/admin/API paths, and references `/sitemap.xml`. Confirm `/event/` is intentionally non-indexable; otherwise this blocks useful event-detail pages. |
| Sitemap | Pass, governance issue | `/sitemap.xml` returned HTTP 200 and 110 `<loc>` entries. No duplicate URLs were observed in a count check. |
| Canonicals | Good on sampled templates | Local source defines canonicals for home, tickets, venues, FAQ, blog, World Cup, and index pages. Keep canonical generation tied to the same route data used by `generateStaticParams`. |
| Mobile viewport | Likely pass structurally | `layout.tsx` uses a device-width viewport and responsive Tailwind classes are present. Run automated viewport screenshots across representative city, venue, blog, and World Cup templates. |
| Structured data | Good foundation | Homepage has Organization/WebSite; FAQ has FAQPage; ticket pages have ItemList/BreadcrumbList; venue pages have BreadcrumbList/FAQPage. Validate rendered JSON-LD after every template change. |
| 404s | Not fully audited | A complete link crawler and external Search Console export were unavailable. Add a CI link checker covering every sitemap URL and every internal `href`. |
| Page speed | Unknown | Vercel headers show cached HTML (`x-vercel-cache: HIT` on home, tickets, FAQ; `STALE` on MSG). Cache status is not a Core Web Vitals measurement. |

## On-page and template findings

### Homepage

The homepage has a clear value proposition, three-step explanation, venue/city/category links, FAQ content, and newsletter CTA. It is unusually extractable for AI systems because the key answer is stated plainly: TicketScan compares Ticketmaster, SeatGeek, and other platforms and sends price-drop alerts. Replace unsupported or weakly qualified proof points such as “50K+ events tracked,” “$127 average savings,” and “users save an average of $127” with a dated methodology note or verified data source.

### City/category template: `/tickets/[slug]`

The source has static params, metadata, canonical URLs, ItemList and BreadcrumbList JSON-LD, event deduplication, related links, related venues, and blog links. Main risks are template similarity and unstable API content. Add a unique, data-backed “What to know before buying in [city/category]” section, clearly label live inventory time, and suppress empty or stale event lists. Because city and category pages share one namespace, add collision tests for all slugs.

### Venue template: `/venues/[slug]`

The sampled MSG page has useful venue facts, seat-tier guidance, city cross-linking, FAQs, and buying-tip links. The critical defect is the displayed past inventory. Venue descriptions also mix evergreen advice with dated event claims; move dated claims into API-driven, freshness-labeled modules. Ensure every venue's city link uses `citySlug`, including Washington DC and any other exceptions.

### FAQ and how-it-works

FAQ JSON-LD is present and answers are direct. The FAQ includes fee estimates and “best time to buy” claims; each should carry “estimated,” “typical,” or “varies by event” wording and an updated date. The how-it-works page is highly quotable and explains the product in three steps. Add a compact “What TicketScan does not do” answer: it is not the seller, and final prices/availability are confirmed on the marketplace.

## Internal linking, orphan risk, and architecture observations

The main navigation reaches Search, Compare, Blog, World Cup, Login/Sign Up, and account features. The homepage/footer link all 25 venues, 24 cities, and 13 categories. Venue pages link to their city; ticket pages link to related venues and categories. This makes the core directory crawlable, but the contextual graph is uneven:

- Most city pages expose only a small slice of relevant venues/categories.
- Category pages appear to use a generic subset of cities, not the best data-driven matches.
- Blog posts link to product pages but do not consistently link into city/venue clusters.
- There is no dedicated artist/team/event hub route, so high-intent entities rely on search/dashboard flows that are less crawlable.
- Account, event-detail, and admin paths are blocked appropriately if they are not intended as landing pages.

Build a crawl report with in-degree counts. Flag any indexable URL with zero contextual internal links outside the sitemap/footer.

## Duplicate/thin-content risks

The current static datasets are small but page templates are shared. City descriptions are short and structurally similar; category pages may become thin when the API returns no events. Avoid indexing a page that contains only a heading, generic description, and “no events” message. Options: enrich with local buying guidance and real venue relationships, or return `noindex,follow` until meaningful inventory/content exists. Do not mass-produce artist pages without current entity-specific data.

## Recommended action plan

### P0, this week

- Filter `event.date` against the current date before rendering “upcoming” cards and Event JSON-LD.
- Add `last checked` and `inventory through` labels to API-backed sections.
- Mark post-July-19 World Cup pages as archive content and remove future-tense buying claims.

### P1, next 2 weeks

- Add a route/data inventory test: expected sitemap URLs = static routes + unique venue/city/category/WC/blog slugs.
- Add city↔venue↔category modules with explicit, relevant links.
- Add CI checks for duplicate slugs, missing metadata/canonical, invalid JSON-LD, and internal links returning non-2xx.
- Measure mobile LCP/CLS/INP with PageSpeed Insights or CrUX for homepage, one city, one venue, one blog post, and World Cup hub.

### P2, next month

- Add entity pages only after search-demand and data thresholds are met.
- Add author/editorial trust signals, update dates, methodology pages, and source disclosures for price/fee claims.
- Consider `WebPage`/`CollectionPage` graph relationships and `sameAs` only where entity identity is unambiguous.

## Sources checked

- [TicketScan homepage](https://www.ticketscan.io/) — crawlable copy, links, FAQ, CTA, footer.
- [TicketScan sitemap](https://www.ticketscan.io/sitemap.xml) — live URL inventory and metadata.
- [TicketScan robots.txt](https://www.ticketscan.io/robots.txt) — crawl rules and sitemap declaration.
- [Madison Square Garden venue guide](https://www.ticketscan.io/venues/msg) — live venue template and freshness issue.
- [How TicketScan Works](https://www.ticketscan.io/how-it-works) — product explanation and structured answer opportunities.
- Local source: `web/src/app/sitemap.ts`, `robots.ts`, `layout.tsx`, ticket/venue templates, and `web/src/data/*.ts`.

## Limitations

This audit did not have Google Search Console, Analytics, PageSpeed API credentials, a full external backlink export, or a browser crawler session. Core Web Vitals, actual rankings, true orphan status, and external 404 referrals therefore remain follow-up measurements rather than confirmed findings.

