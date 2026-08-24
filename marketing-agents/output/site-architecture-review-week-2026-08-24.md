# Site Architecture Review — 2026-08-24

## Verdict

The existing top-level structure is understandable and crawlable. Keep `/venues/[slug]`, `/tickets/[slug]`, `/world-cup-2026/[stadium]`, `/blog/[slug]`, and product routes. Add hub pages and a nested city/venue namespace only when supported by real content. Do not put artist/team/event pages into the overloaded `/tickets/[slug]` namespace.

## Recommended information architecture

```text
/
├── /compare/                         product comparison/search
├── /dashboard/                       interactive search
├── /tickets/                         guide hub
│   ├── /tickets/[city]
│   ├── /tickets/[category]
│   ├── /tickets/[city]/[venue]       curated intersection pages
│   └── /tickets/[seasonal-category]
├── /venues/                          venue hub
│   └── /venues/[venue]
├── /artists/                         optional entity hub
│   └── /artists/[artist]
├── /teams/                            optional entity hub
│   └── /teams/[team]
├── /best-time-to-buy/[category]      evidence-led guides
├── /compare/[event-slug]              only verified, high-volume events
├── /world-cup-2026/                   archive/pillar hub
│   └── /world-cup-2026/[stadium]
├── /blog/                             editorial hub
│   └── /blog/[slug]
├── /faq/ and /how-it-works/
└── account/admin routes               blocked from indexing
```

## PageRank and navigation actions

- Keep footer links to the directory hubs, but add contextual “related city,” “related venue,” and “related category” links in the body.
- On every venue page: link to its city, relevant teams/artists/categories, 2–4 nearby or comparable venues, and methodology.
- On every city page: link to all materially relevant venues in that city, top categories with current inventory, and the venue hub.
- On category pages: link to cities with inventory, not an arbitrary first four cities.
- On blog posts: add a “Related ticket guides” module keyed to the post topic.
- Add breadcrumbs visually and in JSON-LD on every indexable leaf page.

## Click-depth target

Homepage → hub → leaf should be two clicks for all priority venue/city/category pages. Artist/team/event pages should be reachable from the relevant hub and from contextual links, not only the sitemap. Use an automated in-degree/click-depth report to catch future orphans.

## URL and canonical rules

- Use lowercase, stable slugs with one canonical spelling.
- Keep city/category collision tests because both currently occupy `/tickets/[slug]`.
- Do not create query-parameter indexable variants for dashboard searches.
- Give event pages an expiry/archive policy before launch.
- Ensure `generateStaticParams`, sitemap generation, and visible hub links derive from one registry.

## CRO handoff: Agent 6

- Add a persistent “Compare prices” CTA on venue and city pages after the first useful content block.
- Test a compact price-alert CTA beside each event card, with “set target price” as the primary action.
- On stale/empty inventory states, offer “get notified when events appear” rather than showing a dead end.
- Put the all-in-price explanation beside comparison results, not only in FAQ.
- Test newsletter copy that promises a concrete benefit (“price drops for this city/venue”) and preserves unsubscribe language.

