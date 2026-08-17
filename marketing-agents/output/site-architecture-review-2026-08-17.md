# Site Architecture Review — 2026-08-17

## Assessment

The current URL hierarchy is understandable and mostly shallow: homepage → hub → detail. `/venues/[slug]`, `/tickets/[slug]`, and `/world-cup-2026/[stadium]` are sensible clusters. The main architectural weakness is that city and category pages share one slug namespace and one route, while the sitemap and static-param generation assemble them independently.

## Recommended information architecture

```text
/
├── /compare                 product/comparison pillar
├── /tickets                 ticket-intent hub
│   ├── /tickets/[city]      city hubs
│   ├── /tickets/[category]  category hubs
│   └── /tickets/[city]/[venue]  curated local intent
├── /venues                  venue hub
│   └── /venues/[slug]       venue guides
├── /artists/[slug]          entity cluster (pilot)
├── /teams/[slug]            entity cluster (pilot)
├── /best-time-to-buy/[category]  data guides
├── /world-cup-2026          archive/current-event pillar
├── /blog                    editorial hub
├── /faq and /how-it-works   trust/methodology
└── app routes               noindex, excluded from sitemap
```

## Actions

- Add a public Browse menu linking `/tickets`, `/venues`, and `/world-cup-2026`; put FAQ and How It Works in the footer/trust cluster.
- Add reciprocal links between city ↔ venue, city ↔ category, venue ↔ relevant teams/artists, and every programmatic page ↔ methodology/best-time guide.
- Keep detail pages no more than two clicks from a hub; expose the full venue/city/category index on hub pages, with pagination only when needed.
- Introduce a typed registry that owns route type, slug, canonical URL, indexability, last meaningful update, and parent hub. Use it to generate both sitemap and static params.
- Add an automated crawler that starts at `/`, follows internal links, compares discovered URLs with the sitemap, and reports orphan pages, non-200 links, duplicate canonicals, and app-shell 200s.
- Keep World Cup as an archive after 2026, with an explicit status banner and a new current tournament/major-event pillar when a real opportunity exists.

## PageRank and conversion notes

The homepage already links to all venue cards and city/category browse tabs, and the footer links to both major hubs. The highest-value improvement is consistent contextual linking, not adding more navigation chrome: every page should offer one discovery link, one evidence/methodology link, and one product CTA. Keep affiliate/outbound links distinct from internal navigation.
