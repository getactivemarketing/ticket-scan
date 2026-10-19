# Programmatic SEO expansion plan — 2026-10-19

## Recommendation

Do not add a broad new page family this week. The deployed site already has 744 sitemap URLs and 745 discovered internal URLs. First clean stale product claims, reconcile the sitemap, and prove that each generated page has verified data and a distinct search purpose.

## Prioritized opportunities

| Priority | Page type | Search potential | Competition | Template feasibility | Data requirement | Decision |
|---|---|---:|---:|---:|---|---|
| 1 | City + venue guide links, not a new route by default | High for venue-intent searches | Medium | High | Existing verified venue slug, city slug, capacity/sections, live events | Add as a stronger cross-link/module; only create `/tickets/{city}/{venue}` when it has unique, verified content |
| 2 | Event-type hubs such as `/tickets/nfl-playoffs` and `/tickets/music-festivals-2026` | Medium-high seasonal | High | Medium | Category taxonomy plus a qualifying live event feed and editorial facts | Pilot one or two hubs with 5+ upcoming events and unique FAQs; omit empty/expired hubs |
| 3 | Artist/team pages | High for named entities | High | Medium | Stable Ticketmaster attraction ID, name agreement, upcoming event feed, canonical entity data | Team pages already exist at scale; extend to artists only after attraction-ID coverage and a no-guess resolver are ready |
| 4 | Dedicated high-volume event pages `/compare/{event-slug}` | High for marquee events | Very high | Low-medium | Stable event ID, live seller availability, event-specific venue/date facts | Defer while cross-platform price data is unavailable; use discovery/event pages with seller links instead |
| 5 | “Best time to buy” pages | High but volatile | High | Low | Reliable TicketScan price history and defensible longitudinal analysis | Defer. Do not publish data-driven or TicketScan-derived timing claims while price tracking is down |
| 6 | `/tickets/{city}/{venue}` for every venue | Medium | Medium | High | Verified city/venue relationship plus substantial unique facts | Do not mass-generate; current venue pages already cover this intent and city pages link to them |

## Template specs for the two safe pilots

### Event-type hub

URL: `/tickets/{event-type}`

Required fields:

- One-sentence definition of the event type.
- Current upcoming event count and “last checked” timestamp.
- Event cards with event name, date/time, venue, city, and seller links.
- Links to qualifying city hubs and venue guides.
- General buyer guidance: onsale/presale timing, all-in total, delivery, and buyer protection.
- FAQPage only for visible questions and answers.

Omission rules: fewer than five upcoming events, expired season, missing verified category mapping, or no unique explanatory content.

### Artist entity page

URL: `/artists/{slug}` (prefer plural to align with `/teams` and avoid singular-family inconsistency)

Required fields:

- Stable attraction ID and resolved canonical name.
- Upcoming events with date, city, venue, onsale/presale information, and seller links.
- Tour or event-type context derived from verified API fields.
- Venue guide links where available.
- Explicit statement that availability and final checkout details are on the linked seller site.

Omission rules: unresolved attraction ID, weak name agreement, no upcoming event, or duplicate/ambiguous attraction.

## Content briefs for Content Agent

1. **“How to compare tickets without getting surprised at checkout”** — cover same event/date, section/row, delivery, buyer guarantee, and final all-in total. No TicketScan price-history or alert claims.
2. **“How presales and onsales work”** — explain artist/team/venue presales, public onsale, account preparation, and calendar reminders. Link to `/onsales`, city pages, and venue guides.
3. **“How to read a venue guide”** — explain capacity, named seating tiers, sightlines, access, and event-specific configuration changes. Use three verified venue examples.
4. **World Cup 2026 archive** — turn the completed tournament into a results, host-stadium, access, and seating reference. Remove expired acquisition CTAs and historical resale-price assertions that cannot be substantiated now.

## CRO requests

- Homepage: change the hero CTA/supporting line to “Search events and save what you want to revisit” plus “See onsale dates.”
- Venue pages: CTA should be “See upcoming events” / “Check seller availability,” with a visible external-link disclosure.
- City pages: add “Browse venues in {city}” and “See upcoming onsales” modules.
- Event pages: make the seller/source, event date, venue, and final-checkout disclaimer prominent; do not show price-chart or alert UI while unavailable.
- World Cup archive: replace “buy now” and “set an alert” with “Browse match results,” “Explore host stadiums,” and “Read ticket-buying guidance.”
