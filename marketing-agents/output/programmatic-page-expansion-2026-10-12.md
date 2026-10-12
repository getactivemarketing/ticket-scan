# Programmatic SEO expansion plan — 2026-10-12

## Current baseline

The deployed sitemap has 744 URLs, not 78. Current families are venues,
cities/categories, city/category combos, teams, blog posts, and World Cup
venues. The combo index contains 153 qualifying city/category pages and uses a
threshold of five upcoming events.

Expansion rule: every new URL must have a verified fact set, a real data source,
and a reason to exist beyond swapping a city or keyword into a template. Pages
that fall below the evidence threshold should be omitted or noindexed.

## Prioritized opportunities

| Rank | Page type | Search potential | Competition | Template feasibility | Data requirement | Decision |
|---|---|---:|---:|---:|---|---|
| 1 | City + venue `/tickets/{city}/{venue}` | Medium/high for venue-intent queries | Medium | High | Verified city/venue mapping, current event feed, venue guide facts | Pilot with 10–20 high-demand city/venue pairs |
| 2 | Seasonal event-type hubs `/tickets/nfl-playoffs`, `/tickets/music-festivals-2026` | High when timely | High | Medium | Explicit season dates, current event feed, editorial freshness owner | Build only for verified seasonal demand; sunset or archive after season |
| 3 | Artist pages `/artists/{slug}` | High for major touring artists | Very high | Medium | Stable attraction/performer IDs, event feed, artist identity, duplicate-name handling | Defer broad launch; pilot only with verified top performers |
| 4 | Event-series pages `/events/{series-slug}` | Medium/high for playoffs, residencies, tours | High | Medium | Canonical series grouping across dates, venue/date data, stable IDs | Pilot after event grouping is deterministic |
| 5 | “How to buy” editorial hubs `/best-time-to-buy/{category}` | Medium | Medium/high | High as editorial, low as data-driven | Official seller rules, general guidance, no TicketScan price-history claims | Build as clearly labeled evergreen guides, not data pages |
| 6 | Dedicated `/compare/{event-slug}` pages | High commercial intent | Very high | Low today | Current multi-source listing data, fee handling, stable event identity | Defer until price/listing integrations are restored and verified |

## Template specifications

### 1. City + venue combo

URL: `/tickets/{city}/{venue}`

Required modules:

- Unique title: `{Venue} tickets in {City} — events, seating and onsale dates`.
- One paragraph combining a city fact, a venue fact, and the reason the pair is
  useful.
- Upcoming events limited to verified events whose venue and city match.
- Link to the canonical venue guide, city hub, onsale calendar, and relevant
  team pages.
- Venue capacity/sections/access facts from the owned data record.
- FAQ covering venue location, event types, seller checkout, and onsale dates.
- `ItemList`, `Place`, and `BreadcrumbList` only when every item is real.

Admission rules: at least five upcoming matching events, an existing venue
guide, a stable city mapping, and at least two unique facts not inherited from
the city template. No page for a pair that is only inferred from a team's home
venue.

### 2. Seasonal event-type hub

URL examples: `/tickets/nfl-playoffs`, `/tickets/music-festivals-2026`

Required modules:

- Season/tournament dates and a visible “last updated” date.
- Current event list sourced from the event feed.
- Participating venues/cities with links to their canonical pages.
- Official source links for rules, onsale windows, and event details.
- A post-season policy: archive, update, or redirect when the season ends.

Do not use unavailable TicketScan price history or alert promises as the hook.
The value proposition should be discovery, schedule clarity, venue context, and
seller verification.

### 3. Artist page pilot

URL: `/artists/{slug}` (use the plural namespace to align with `/teams`)

Required data contract:

- Stable attraction/performer ID.
- Normalized canonical artist name and aliases.
- At least three upcoming events in at least two markets, or an editorial
  reason to keep the page live.
- Duplicate-artist collision handling and a no-guess resolver.
- Tour/venue/date facts that differ from other artist pages.

The page should link to city, venue, event, onsale, and general ticket-buying
guides. Do not launch thousands of thin performer pages from a raw affiliate
directory.

### 4. Event-series page

URL: `/events/{series-slug}`

Use for a deterministic group such as a playoff round, residency, or tour. The
series key must come from a source field or a reviewed mapping; never group by
similar title text alone. Show dates, venues, city links, official onsale facts,
and seller links to individual event pages.

### 5. Best-time editorial guide

URL: `/best-time-to-buy/{category}`

This is feasible as an editorial guide, but not as a “data-driven” TicketScan
product page while tracking is down. Cover general factors: onsale/presale
windows, seat selection tradeoffs, fee disclosure, seller guarantees, and the
risk of waiting. Cite official seller/tournament guidance and label all examples
as general advice or third-party research.

## Explicitly deferred

`/compare/{event-slug}` and price-history/buy-window pages should wait until
current inventory, fees, and source authentication are working end to end. A
large new URL family built around unavailable data would create both thin pages
and product-trust debt.

## Measurement plan

For any pilot, measure indexed pages, impressions, clicks, qualified event-page
clicks, registration, and 404/soft-404 rate by template. Hold expansion if
unique-content coverage falls below 100%, if more than 1% of URLs 404, or if the
event feed cannot support fresh content on the intended revalidation window.

## Handoff to engineering

- Add a route-level content contract test for unique title, description, H1,
  canonical, and minimum verified facts.
- Add a pre-deploy forbidden-claims scan using `PRODUCT-STATUS.md` terms.
- Add sitemap tests that assert every listed dynamic URL passes the route's
  resolver and that intended indexable routes such as `/compare` are included.
