# Site Architecture Review — 2026-08-03

## Assessment

The current URL structure is understandable and mostly crawlable, but it is organized around data buckets rather than search journeys. The public site should make the relationship explicit: broad problem → category/city hub → venue/entity/event → comparison and alert conversion.

## Recommended visual sitemap

```text
/
├── /compare                         Core product/value proposition
│   ├── /compare-guides              Platform, fees, all-in pricing
│   └── /compare/[event-slug]        Only stable, high-demand events
├── /tickets                         Ticket discovery hub
│   ├── /tickets/[city]              City cluster
│   │   └── /venues/[venue-slug]     Venue cluster
│   ├── /tickets/[category]          Category cluster
│   └── /tickets/[city]/[child]      Only qualified combinations
├── /artist/[slug]                   Entity cluster
├── /team/[slug]                     Entity cluster
├── /best-time-to-buy/[category]     Data-backed research cluster
├── /venues                         Venue index
├── /blog                            Editorial hub
├── /faq
├── /how-it-works
└── /world-cup-2026                  Archive/results hub
    └── /world-cup-2026/[stadium]
```

## Changes to make

- Add `/compare-guides` and `/best-time-to-buy` hubs; link them from homepage, FAQ, blog, venue pages, and relevant ticket pages.
- Keep `/tickets/[slug]` for current city/category pages, but add an explicit type in the page model and breadcrumbs so city and category intent cannot be confused.
- Keep venue pages under `/venues/[slug]`; the existing venue ↔ city relationship is good. Add “Other venues in this city” where more than one venue exists.
- Add entity pages only after a stable entity data model exists. Do not create a route for every API string.
- Keep World Cup URLs live as archive pages, but remove active inventory language and reduce homepage prominence.
- Do not expose `/admin`, `/watchlist`, `/favorites`, login, or registration as SEO hubs. The current robots exclusions are appropriate pending a public event-page decision.

## PageRank and click-depth rules

- Every indexable leaf should be reachable from a hub in ≤2 internal clicks and from a related leaf in ≤3.
- Every city page should link to its venues and top categories; every venue should link to its city, related guides, and at least two nearby/related venues.
- Every category page should link to a guide, relevant cities, and at least one comparison explainer.
- Every blog post should link to one product page and one relevant programmatic page; every programmatic page should link back to one authoritative guide.
- Add HTML links, not only client-side filtering/buttons, for critical discovery paths.

## Risks to avoid

- Do not generate all city × venue × category combinations without unique inventory and copy.
- Do not let event query parameters become indexable URLs.
- Do not keep completed event pages in the sitemap as if they were current offers.
- Do not use a generic “No upcoming events” page as the only body content on a large URL set.
