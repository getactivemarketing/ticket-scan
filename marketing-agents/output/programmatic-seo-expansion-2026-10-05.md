# Programmatic SEO expansion plan — 2026-10-05

## Decision rule

Do not expand the indexable surface until the current shared templates stop
making unavailable price/alert claims. New pages must contain verified facts,
an event or venue data source, a canonical, meaningful internal links, and a
clear reason to exist beyond swapping a city or category token.

## Prioritized page types

| Priority | Page type | Demand potential | Difficulty | Template feasibility | Data readiness | Decision |
|---|---|---:|---:|---:|---:|---|
| 1 | Onsale/presale guides by city, category, team, or venue | High, time-sensitive | Medium | High | High for confirmed feed dates | Build/expand carefully |
| 2 | Venue + city landing pages | Medium-high, high intent | Medium | High | High where venue/city/id facts are verified | Pilot on top venues |
| 3 | Team pages with home/away event schedules | High for sports | High | High | Existing 261-team index and attraction IDs | Improve quality before adding more |
| 4 | Artist pages | High for named artists | High | Medium | Low-medium; no stable artist index/identity workflow | Pilot only from verified feed |
| 5 | Event-type hubs such as NFL playoffs or music festivals | Medium-high seasonal | Medium-high | Medium | Medium; season/date facts must be current | Build evergreen hubs with dated feeds |
| 6 | Dedicated event pages | High for major events | Very high | Medium | Medium; public event data exists but event routes are blocked | Do not index yet |
| 7 | Best-time-to-buy pages | High, but risky | High | Medium | Not ready; TicketScan price history is unavailable | General advice only, no data claims |
| 8 | Price-comparison pages | Commercially attractive | Very high | Low now | Not ready; current comparison/pricing feeds are unreliable | Defer |

## 1. Onsale/presale cluster

### Template

`/onsales/[city-or-category]` or an improved existing `/tickets/[slug]` page.

Required content:

- date-stamped list of confirmed upcoming events;
- public onsale and presale date/time, timezone, and source label;
- event, venue, city, category, and seller-link fields;
- “what to check before buying” guidance: section, delivery, fees, and final
  checkout total;
- links to the city hub, category hub, venue guide, team/artist page, and the
  global onsale calendar;
- `ItemList`, `Event`, and `BreadcrumbList` only when their data is complete.

Quality gate: omit a page with no confirmed events or no unique local facts.

## 2. City + venue combinations

### Candidate URL

`/tickets/new-york/madison-square-garden` is readable but conflicts with the
current `/tickets/[city]/[category]` route. Prefer `/venues/msg/new-york-events`
or a single canonical convention chosen before launch. Do not create two URLs
for the same intent.

### Template

- venue identity, city, capacity, seating sections, access/transit facts;
- upcoming events at that venue from the verified feed;
- confirmed onsale/presale windows;
- links to the parent city hub, venue guide, relevant team pages, and global
  onsale calendar;
- seller links with a clear disclosure that availability and checkout totals are
  confirmed on the third-party seller page.

Pilot with 10 venues across different cities and categories. Require a unique
venue fact block and at least one current event or a useful “no upcoming events
currently listed” explanation.

## 3. Artist pages

### Decision

Potentially valuable, but not ready for bulk generation. The repository has
team identity data and attraction IDs, but no equivalent verified artist index.
Do not generate pages from raw event titles; that creates duplicate tour-name,
tribute-act, and venue-event pages.

### Template spec for a future pilot

`/artists/[slug]`

- stable source identity and canonical artist name;
- next confirmed events, date, venue, city, and seller links;
- onsale/presale status with timezone;
- tour/artist FAQ generated only from sourced facts;
- related venue and city links;
- no price-history, cheapest-source, or alert claims.

Start with 25 identities that have at least three confirmed upcoming events and
an authoritative source ID. Evaluate indexed impressions and event-link clicks
before expanding.

## 4. Event-type hubs

Build seasonal hubs such as `/tickets/nfl-playoffs` or
`/tickets/music-festivals-2026` only when the page can show a current season,
specific dates, and a meaningful event set. A hub should include:

- what the event type is and who it is for;
- confirmed schedule or onsale milestones;
- participating teams/venues/cities;
- links to live event and venue pages;
- a short neutral ticket-buying checklist.

Do not use “best prices,” “price trends,” or “buy now” as the differentiator.

## 5. Dedicated event pages

High search value, but the current event route is disallowed in `robots.txt` and
requires client/API behavior. If reopened later, the page must have a stable
public event ID, a server-renderable title/date/venue block, a canonical, seller
links, onsale/presale details, and a useful fallback when the event is gone.

Do not index a page that renders only a loading state or requires authentication.

## Deferred page types

### Price comparison pages

Defer `/compare/[event-slug]`. The feature currently cannot provide reliable
cross-platform pricing. Revisit only after the data pipeline is healthy and the
page can show current, timestamped, source-labeled inventory.

### Best-time-to-buy pages

Do not create “data-driven” pages from TicketScan data while price history is
down. A safe future format is a general buying guide with explicit source dates,
no guaranteed timing, and no TicketScan-derived statistics.

## Expansion rollout

1. Fix and test shared copy.
2. Build URL inventory and thin-page report.
3. Pilot 10 venue-city pages and 5 current onsale/category hubs.
4. Measure Search Console impressions, clicks, indexed status, and outbound
   seller clicks for 28 days.
5. Expand only the templates that earn impressions and provide distinct utility.

