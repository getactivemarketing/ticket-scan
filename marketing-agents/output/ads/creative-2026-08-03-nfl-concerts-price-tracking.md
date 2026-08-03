# Ad Creative — 2026-08-03 — NFL, Concerts, and Price Tracking

Drafts only; no live campaign or top performer was available. Claims are limited to TicketScan's documented comparison workflow.

## Variation 1 — NFL comparison

**Angle:** Football buyers should check the market before choosing a listing.

**Google Search Ad**

```text
Headline 1 (30): Compare NFL Ticket Prices
Headline 2 (30): Check 3 Ticket Sources
Headline 3 (30): See Options Side by Side
Description 1 (90): Compare NFL tickets from Ticketmaster, SeatGeek and StubHub in one place.
Description 2 (90): Before kickoff, check the market side by side. Your wallet gets a vote.
```

**Meta Ad**

```text
Primary text (125): Buying NFL tickets? Check Ticketmaster, SeatGeek and StubHub together before you settle for the first price.
Headline (40): Compare NFL Tickets First
Description (30): More context before kickoff.
```

**Landing page:** `/tickets/nfl-tickets` only after route and content QA; otherwise `/`.

## Variation 2 — Concert comparison

**Angle:** Reduce the annoying four-tab routine for tour shoppers.

**Google Search Ad**

```text
Headline 1 (30): Compare Concert Tickets
Headline 2 (30): Shop 3 Ticket Sources
Headline 3 (30): Check Before Checkout
Description 1 (90): See concert ticket options from Ticketmaster, SeatGeek and StubHub together.
Description 2 (90): Same event, different listings. Compare first, then choose where to buy.
```

**Meta Ad**

```text
Primary text (125): Four ticket tabs for one concert? TicketScan puts three major sources together so you can compare before checkout.
Headline (40): Stop Opening Four Tabs
Description (30): Compare the market first.
```

**Landing page:** `/dashboard` only after anonymous-search QA; otherwise `/`.

## Variation 3 — Price tracking

**Angle:** Make price movement easier to follow without promising an alert until delivery is proven.

**Google Search Ad**

```text
Headline 1 (30): Track Ticket Prices
Headline 2 (30): Compare 3 Ticket Sources
Headline 3 (30): Watch Your Event
Description 1 (90): Compare ticket prices, then track the event you have your eye on.
Description 2 (90): Keep market context in one place before deciding when to buy.
```

**Meta Ad**

```text
Primary text (125): Ticket prices move. Compare the major sources, track your event, and make the next ticket decision with context.
Headline (40): Track Tickets With Context
Description (30): Compare first. Watch prices.
```

**Landing page:** `/dashboard` only after target-price capture and alert-delivery QA; otherwise `/`.

## Launch notes

- Add `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, and `utm_term` to every destination.
- Start optimization on `price_comparison` only after the event fires reliably; test `watchlist_add` next.
- Hold Variation 3 until price history is current and `/api/admin/alerts` is healthy.
