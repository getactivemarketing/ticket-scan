# SEO opportunity handoff — 2026-08-03

SeatGeek's current indexable event pages lead with a crawlable “tour dates and ticket prices” table containing date, city, venue, and lowest price, plus seating-chart references. Build or strengthen TicketScan event landing pages around these search patterns:

- `[artist/team] tickets [year]`
- `[artist/team] tour dates and ticket prices`
- `cheapest [artist/team] tickets`
- `[venue] events and tickets`

Recommended page structure: server-rendered event/date/venue/lowest-price summary, all-in price comparison CTA, price-history explanation, and FAQ content. Keep prices null-safe and never publish `InStock` or a price range when the API has no current inventory.

Reference: https://seatgeek.com/all-tickets
