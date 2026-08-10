# Programmatic SEO Expansion Plan — 2026-08-10

## Decision

Strengthen the existing templates and add hubs before launching a large page batch. The next scalable page must have a distinct entity, current or durable first-party data, a visible update date, methodology, and at least three contextual internal links.

| Rank | Page type | Demand potential | Difficulty | Template feasibility | Data requirement | Decision |
|---:|---|---|---|---|---|---|
| 1 | `/best-time-to-buy/[category]` | Medium-high | Medium | High | Historical price snapshots by category, days-to-event, sample size | Pilot with concerts, NFL, NBA, MLB, and theater. Best fit for TicketScan’s price-history differentiator. |
| 2 | `/artist/[slug]` and `/team/[slug]` | High | High | High | Stable entity IDs, aliases, upcoming events, normalized venue/city, price history | Pilot 20–30 entities already returned by the API; do not generate from arbitrary search strings. |
| 3 | `/compare-guides/[platform-a]-vs-[platform-b]` | Medium-high | Medium | High | Fee policy, buyer protection, primary/resale distinction, dated examples | Create editorial comparison pages for Ticketmaster, SeatGeek, StubHub, and Vivid Seats. |
| 4 | `/tickets/[city]/[venue-or-category]` | Medium | Medium | Medium | Venue-city mapping, local facts, sufficient inventory, unique copy | Launch only for cities with multiple qualifying venues and data; avoid full Cartesian expansion. |
| 5 | `/compare/[event-slug]` | High but volatile | High | Medium | Stable event ID, like-for-like listings, fees, availability, expiry | Use only for high-volume events with a clear retention/noindex policy. |
| 6 | `/tickets/[seasonal-intent]` | Medium | Medium | High | Current season dates, inventory, editorial refresh owner | Use for active demand such as NFL playoffs or music festivals; not evergreen placeholders. |

## Template specifications

### `/best-time-to-buy/[category]`

- Title: `Best Time to Buy [Category] Tickets — Data-Backed Guide`.
- Above fold: one-sentence answer, current sample size/date range, and “Track a price” CTA.
- Sections: methodology; median and percentile movement by days-to-event; exceptions; platform/fee caveats; FAQ; related city/category links.
- Structured data: `Article`, `BreadcrumbList`, and `FAQPage` only when visible FAQs match.
- Guardrail: state confidence/sample size; never promise one universal buying day.

### `/artist/[slug]` or `/team/[slug]`

- Title: `[Entity] Tickets: Compare Prices, Track Drops & Upcoming Events`.
- Above fold: next events, source coverage, lowest observed price with timestamp, and watch/alert CTA.
- Sections: upcoming events, price history, venues/cities, best-time summary, FAQs, related entities.
- Structured data: `Person` or `SportsTeam`, real future `Event` nodes, and `BreadcrumbList`.
- Guardrail: no alias-only pages, fabricated popularity, or pages with no event and no editorial value.

### `/compare-guides/[platform-a]-vs-[platform-b]`

- Above fold: who each platform suits, whether displayed prices are all-in, and a dated verdict.
- Sections: inventory model, fees, buyer protection, delivery, like-for-like example, limitations, and TicketScan comparison CTA.
- Add a visible “last reviewed” date and source links. This is an editorial page, not a claim that one platform is always cheapest.

### City + venue/category

- Require local value: transit/venue context, competing venues, real inventory, and local price observations.
- Link parent city, venue/category, and at least two related pages.
- Use one canonical URL per intent and reject alternate slug spellings/query variants.

### Event comparison

- Require stable event ID/date and comparable section/row/quantity where possible.
- Show timestamp, fee basis, source, availability, and external-checkout disclaimer.
- Remove from sitemap and return 404 or `noindex` after a documented post-event retention window.

## Data and quality gates

1. No page publishes a price without timestamp, currency, source, and “may change at checkout” context.
2. A page with no events must still have unique durable value or be excluded from indexation.
3. Every new route has canonical, breadcrumb, last-updated, source/methodology, and parent/related links.
4. CI checks route-to-sitemap parity, slug collisions, expired events, and duplicate titles.
5. Measure impressions, CTR, indexed status, event-empty rate, alert registrations, and newsletter conversion for 28 days before scaling.

