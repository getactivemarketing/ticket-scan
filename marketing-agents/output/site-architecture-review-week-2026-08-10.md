# Site Architecture Review — 2026-08-10

## Assessment

The URL structure is understandable and the existing venue ↔ city relationships are useful. The weakness is that the information architecture is organized around data buckets rather than search journeys. High-value public pages should follow: broad problem → topical hub → city/category/venue/entity → comparison or alert conversion.

## Recommended sitemap

```text
/
├── /compare
│   ├── /compare-guides
│   └── /compare/[event-slug]
├── /tickets
│   ├── /tickets/[city]
│   │   └── /venues/[venue-slug]
│   ├── /tickets/[category]
│   └── /tickets/[city]/[qualified-child]
├── /artist/[slug]
├── /team/[slug]
├── /best-time-to-buy/[category]
├── /venues
├── /blog
├── /faq
├── /how-it-works
└── /world-cup-2026                 archive/results hub
    └── /world-cup-2026/[stadium]
```

## Recommendations

- Add `/compare-guides` and `/best-time-to-buy` as public pillar hubs before adding dozens of leaves.
- Add “Venue Guides” and “Ticket Guides” to the anonymous navigation or to a prominent homepage browse module. They are currently much easier to find in the footer than the main nav.
- Make breadcrumbs explicit: Home → Tickets → New York → Madison Square Garden, or Home → Best Time to Buy → Concerts.
- Keep `/tickets/[slug]` for compatibility, but expose page type in the UI and test city/category slug collisions.
- Every city should link to its venues and top categories; every venue should link to its city, related guides, and nearby venues; every category should link to a methodology/comparison guide.
- Every indexable leaf should be reachable from a hub in two clicks or fewer and from a related leaf in three clicks or fewer.
- Keep account, admin, watchlist, favorites, login, and registration out of SEO hubs. Revisit `/event/[id]` only after stable public metadata and expiry rules exist.
- Relabel World Cup links as an archive/results destination and reduce their prominence in global navigation.

## PageRank flow

```text
Homepage
  ├─ Compare hub ── platform/fee guides ── live comparison CTA
  ├─ Ticket hub ── city/category ── venue/entity ── alert CTA
  ├─ Best-time hub ── category research ── price-history CTA
  └─ Blog ── guides ── relevant hub/leaf ── alert CTA
```

## Architecture acceptance criteria

- No orphaned indexable page; each has one parent hub and at least two relevant sibling/cluster links.
- One canonical URL per intent; query parameters are not indexable alternatives.
- New clusters ship with the hub and internal links in the same release as the first leaves.
- Expired event pages leave the sitemap according to a documented retention policy.

