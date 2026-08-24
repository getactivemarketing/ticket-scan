# Programmatic SEO Expansion Plan — 2026-08-24

## Recommendation

Do not launch all proposed page families at once. Fix freshness and add a quality gate first. The best next test is a small set of entity pages for high-demand artists/teams, followed by city+venue pages where both sides have robust data.

| Priority | Page type | Demand potential | Competition | Template feasibility | Data requirement | Decision |
|---|---|---:|---:|---:|---:|---|
| 1 | `/artist/[slug]` and `/team/[slug]` | High | High | Medium | Entity ID, aliases, current events, source prices, historical observations | Pilot 10–20 entities only |
| 2 | `/tickets/[city]/[venue]` | Medium-high | Medium-high | High | Venue/city relationship, live events, seating facts, unique local copy | Build after route separation |
| 3 | `/best-time-to-buy/[category]` | Medium-high | Medium | High | Aggregated price history by category and event lead time | Build 5 evidence-led guides |
| 4 | `/compare/[event-slug]` | High for named events | Very high | Low-medium | Stable event identity, synchronized cross-marketplace listings, canonical expiry | Only for verified high-volume events |
| 5 | `/tickets/nfl-playoffs`, `/tickets/music-festivals-2026` | Medium-high seasonal | High | High | Category taxonomy, seasonal inventory, editorial content | Add as curated category pages |

## Template specifications

### 1. Artist/team entity page — pilot

**URL:** `/artist/taylor-swift` or `/team/new-york-knicks`

**Required content:** one-sentence direct answer; entity overview; next 6–12 future events; minimum/average price range with timestamp; platform comparison CTA; price-history chart only when sample size is sufficient; venue/city links; 4–6 entity-specific FAQs; “data last checked” and “prices change” disclosure.

**Indexation gate:** index only when there are at least 3 future events or a meaningful historical dataset plus unique editorial copy. Otherwise return `noindex,follow`.

**Data model:** stable normalized entity ID, canonical name, aliases, entity type, image/license status, event IDs, venue IDs, city IDs, and source URLs. Never use a free-text query as the canonical identity.

### 2. City + venue page

**URL:** `/tickets/new-york/madison-square-garden`

**Required content:** city/venue relationship, event list, venue capacity and seating guidance, city-specific buying guidance, nearby/related venues, category links, FAQ, BreadcrumbList, and canonical. Keep the existing `/tickets/[slug]` city/category namespace separate from this nested namespace.

**Quality gate:** at least 3 future events or strong venue content (description, seating, FAQs, and stable source links). Avoid generating all 24×25 combinations.

### 3. Best-time-to-buy guide

**URL:** `/best-time-to-buy/concert-tickets`, `/best-time-to-buy/nfl-tickets`

**Required content:** direct answer with a confidence range; methodology; chart showing lead time vs. observed price; caveats for playoffs, onsales, scarcity, and resale; links to relevant category/city/entity pages; alert CTA.

**Data gate:** do not publish numeric timing advice until the backend has enough historical observations by category and lead-time bucket. Current generic FAQ advice (“2–3 weeks”) should be labeled as a heuristic until validated.

### 4. Event comparison page

**URL:** `/compare/[event-slug]`

**Required content:** exact event date/venue, normalized listing comparison, all-in estimate vs. base price, timestamp, availability disclaimer, source links, FAQ, and buy/track CTA.

**Lifecycle:** event pages need an expiry policy. After the event, 301 to the relevant venue/entity page only when intent is equivalent; otherwise return a useful archive page with `noindex`.

### 5. Seasonal/curated category page

**URL:** `/tickets/nfl-playoffs`, `/tickets/music-festivals-2026`

**Required content:** editorial introduction, taxonomy, event inventory, city/venue links, price/timing guidance, FAQs, update date, and an archive rule after the season. Curated category data should not be indistinguishable from the generic API category.

## Rollout and measurement

1. Build the entity normalization and indexation gates.
2. Launch 10 artist/team pages across concerts, NFL, NBA, NHL, and World Cup archive demand.
3. Measure impressions, indexed pages, clicks, CTR, engaged sessions, registration, watchlist adds, and stale/empty-page rate for 28 days.
4. Expand only page types with non-brand impressions and conversion lift, while pruning pages below the quality threshold.

## Content briefs for Content Agent

- “How to compare the same concert seat across Ticketmaster, SeatGeek, and StubHub” — fee-inclusive comparison methodology and a worked example.
- “Best time to buy concert tickets: what TicketScan’s price history can and cannot tell you” — evidence-first, no blanket promise.
- “New York tickets by venue: MSG, Barclays Center, and Prudential Center” — hub linking cities, venues, and event categories.
- “Ticket fees explained in 2026” — base vs. all-in, estimates, checkout verification, and source disclosures.
- “World Cup 2026 ticket archive: what buyers learned from the tournament” — update the now-past campaign into evergreen lessons and link to venue pages.

