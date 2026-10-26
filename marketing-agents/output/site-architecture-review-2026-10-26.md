# TicketScan site architecture review — 2026-10-26

## Current map

```text
Home
├── Search / dashboard
├── Onsale Calendar
├── Ticket Guides
│   ├── City pages: /tickets/[city]
│   ├── Category pages: /tickets/[category]
│   └── Qualified city×category: /tickets/[city]/[category]
├── Venue Guides
│   └── /venues/[venue]
├── Teams
│   └── /teams/[team]
├── World Cup 2026
│   └── /world-cup-2026/[stadium]
├── Blog / Guides
├── How it works / FAQ / Contact
└── Account surfaces: compare, watchlist, favorites, login, register
```

The sitemap is materially larger than the weekly brief: 746 URLs. The URL
namespaces are understandable and the main public hubs are linked in navbar,
footer, and homepage sections. Venue pages link to city pages; city/category
pages link to venues and qualified combinations; World Cup stadiums link back
to the tournament hub.

## Findings

### Keep

- `/venues/[slug]`, `/teams/[slug]`, and `/tickets/[slug]` are intuitive,
  descriptive, and already supported by entity-specific metadata.
- `/tickets/[city]/[category]` is a reasonable child route because the
  qualifying set is data-backed rather than a full Cartesian product.
- `/world-cup-2026/[stadium]` makes the tournament cluster legible and gives
  the hub a clear parent.
- Account and operational pages are separated from public SEO surfaces and are
  disallowed in robots where appropriate.

### Improve

1. Add a dedicated `/guides` or `/learn` hub for evergreen buyer education,
   onsale/presale definitions, fee literacy, and venue-reading guides. Keep
   `/blog` for dated news/opinion. This gives AI/search crawlers a stable
   knowledge cluster without mixing volatile event feeds and evergreen advice.
2. Add a visible “Browse by city / category / venue / team” module to each hub,
   not only footer links. This improves PageRank distribution and discovery on
   mobile.
3. Make the homepage’s most important public paths reachable within two clicks:
   Homepage → Ticket Guides/Venue Guides/Onsale Calendar; hub → entity page.
4. Treat `/compare` as an authenticated/product route until comparison is
   operational and indexable content is real. Do not build SEO landing pages
   around it while price data is unavailable.
5. Add a future `/events/[slug]` only for curated high-demand event hubs with
   stable IDs and verified facts; do not create it for every feed result.

## Recommended information architecture additions

```text
Home
├── Explore
│   ├── Ticket Guides
│   ├── Venue Guides
│   ├── Team pages
│   └── Onsale Calendar
├── Guides (/guides)
│   ├── Onsale vs presale
│   ├── Fees and checkout totals
│   ├── Reading seating charts
│   └── Buyer-protection basics
├── Seasonal hubs
│   ├── World Cup 2026
│   └── Curated playoffs/festival hubs
└── Blog (/blog)
```

## Internal-link rules

- Every indexable entity page: parent hub link, one contextual sibling link,
  and one relevant operational CTA (onsale calendar, event search, or seller
  page).
- Every city page: top venues, qualified categories, prominent onsale link.
- Every venue page: city, home teams, related venues, seating/guide articles.
- Every team page: home venue, city, league/category, and onsale link.
- Every guide article: one relevant city/venue/team example and one current
  operational page.
- Avoid sitewide footer-only discovery as the sole internal link to an entity.

## Crawl/index controls

- Keep unresolved entities out of the sitemap.
- Keep thin teams `noindex,follow` until they have a meaningful schedule or
  venue guide, as the current source attempts to do.
- Do not index empty city×category combinations.
- Monitor canonical and robots output for every route family.
- Keep `/api/`, `/event/`, account pages, and redirect/affiliate helper routes
  out of organic index unless there is a deliberate product reason.

## Architecture acceptance criteria

1. Full crawl shows no indexable URL with zero internal inbound links.
2. Every sitemap URL has one canonical URL and a 200 response.
3. Every public template has a parent/child/sibling link pattern.
4. No new route family is generated without a data-quality gate and a removal
   rule for thin pages.
5. Page copy, metadata, JSON-LD, and CTA language match the current product
   status.
