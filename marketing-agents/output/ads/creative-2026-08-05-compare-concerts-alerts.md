# Ad Creative — 2026-08-05 — Compare, Concerts, Tracking

Drafts only; no live top-performing campaign was available. Character limits are intended platform limits and should be rechecked in the ad editor.

## Variation 1 — Price comparison

**Angle:** Consumer advocate; stop accepting the first price shown.

**Google Search Ad**

```text
Headline 1 (30): Compare Ticket Prices
Headline 2 (30): Check 3 Ticket Sources
Headline 3 (30): Compare Before Checkout
Description 1 (90): Compare Ticketmaster, SeatGeek and StubHub in one place before you buy.
Description 2 (90): Same event, different listings. Get useful market context before choosing a ticket.
```

**Meta Ad**

```text
Primary text (125): One event. Three ticket sources. Compare the market before checkout and stop paying the first price you see.
Headline (40): Compare Before Checkout
Description (30): Check the market first.
```

**Landing page:** `/` until anonymous `/compare` or `/dashboard` access is QA-verified.

## Variation 2 — Concert shoppers

**Angle:** Remove the four-tab routine for concert buyers.

**Google Search Ad**

```text
Headline 1 (30): Compare Concert Tickets
Headline 2 (30): Shop 3 Sources Together
Headline 3 (30): Find Your Best Option
Description 1 (90): See concert listings from Ticketmaster, SeatGeek and StubHub side by side.
Description 2 (90): Tour prices vary by source. Compare first, then choose where to buy.
```

**Meta Ad**

```text
Primary text (125): Four tabs for one concert? TicketScan puts three major ticket sources together so you can compare first.
Headline (40): Stop Opening Four Tabs
Description (30): Compare the concert market.
```

**Landing page:** `/` or a validated city/venue page; do not send traffic to an unverified auth wall.

## Variation 3 — Track an event

**Angle:** Price-movement awareness without promising an alert that has not been verified.

**Google Search Ad**

```text
Headline 1 (30): Track Ticket Prices
Headline 2 (30): Compare 3 Ticket Sources
Headline 3 (30): Watch Your Event
Description 1 (90): Compare ticket prices, then track the event you have your eye on.
Description 2 (90): Keep the market in one place while you decide when to buy.
```

**Meta Ad**

```text
Primary text (125): Ticket prices move. Compare major sources, track your event, and make your next ticket decision with more context.
Headline (40): Track Tickets With Context
Description (30): Compare first. Watch prices.
```

**Landing page:** Hold until price-history freshness and `/api/admin/alerts` are repaired; then test `/dashboard`.

## Test notes

- Add `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, and `utm_term` to every destination.
- Optimize to `price_comparison` only after it fires reliably; test `watchlist_add` next.
- Do not use “save $X,” “lowest price,” or guaranteed-alert language without verified supporting data.

