# Programmatic SEO Expansion Plan — 2026-08-17

Prioritize quality and data availability over URL count. Current inventory is 24 venues, 23 cities, 12 categories, 17 World Cup URLs, and 25 blog posts.

## Prioritized page types

| Priority | Page type | Demand / competition | Template feasibility | Data required | Recommendation |
|---|---|---|---|---|---|
| 1 | `/artist/[slug]` and `/team/[slug]` | High demand, high competition; strongest repeat intent | Medium-high | Stable entity ID, aliases, upcoming events, price history | Pilot with 20 entities already visible in API/search data |
| 2 | `/tickets/[city]/[venue]` | High local intent, medium competition | High | Venue-city mapping, events, transit/section facts | Build only for venues with unique inventory and editorial facts |
| 3 | `/best-time-to-buy/[category]` | Medium-high informational demand, medium competition | High | Historical snapshots by category, event lead time, methodology | Strong differentiator; publish only where sample size is disclosed |
| 4 | `/compare/[event-slug]` | High commercial intent, very volatile SERPs | Medium | Stable event ID, normalized listings, all-in prices, refresh timestamps | Server-render high-volume events with expiry/noindex rules |
| 5 | `/tickets/nfl-playoffs`, `/tickets/music-festivals-2026` | Seasonal demand, medium-high competition | High | Category taxonomy, season dates, event feeds | Add as curated category records, not free-form generated pages |

## Template specifications

### Artist/team entity page

H1: “{Entity} Tickets — Compare Prices and Track Drops”. Above the fold: next three events, lowest available price with timestamp, sources compared, and alert CTA. Body: entity overview, home venues/cities, price-history chart, buy/wait methodology, FAQs, related cities/venues/blogs. Schema: `Person` or `SportsTeam`, `ItemList`, `BreadcrumbList`, and only real `Event` offers. Require at least two future events or 500 words of unique editorial content; otherwise do not index.

### City + venue page

H1: “{Venue} Tickets in {City}”. Include venue-specific access/section facts, upcoming events, local category links, price tips, and a link to the parent city hub. Schema: `StadiumOrArena`/`PerformingArtsTheater`, `Event` list, and breadcrumbs. Avoid duplicating `/venues/[slug]`; make one URL canonical and cross-link the other as a related guide.

### Best-time-to-buy guide

H1 should answer the query directly: “When Is the Best Time to Buy {Category} Tickets?”. Start with a 40–60 word answer paragraph, followed by a chart/table of lead-time bands, sample size, caveats, and an actionable alert CTA. Schema: `Article`, `Dataset` only if the dataset is genuinely downloadable/documented, and FAQ where visible FAQ content exists.

### Event comparison page

Use a stable event ID slug plus canonical event date. Show last refreshed time, comparable quantity/section, primary versus resale label, fee treatment, price history, and outbound purchase links. Expire pages after the event and redirect only when a true successor exists; otherwise return 410 or noindex archive content. Never create indexable pages from a single source or stale price.

## Rollout

1. Build a typed entity/page registry and collision test.
2. Pilot 10 team/artist pages, 5 city-venue pages, and 3 category timing guides.
3. Measure impressions, indexed rate, organic CTR, assisted registration, and data freshness for 28 days.
4. Expand only templates meeting content, event availability, and conversion thresholds.
