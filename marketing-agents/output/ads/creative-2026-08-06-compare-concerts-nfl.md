# Ad Creative — 2026-08-06 — Compare, Concerts, NFL

Drafts only; no live top-performing campaign was available. Character counts are intended platform limits and should be rechecked in the ad editor.

## Variation 1 — Price comparison

**Angle:** Consumer advocate; check the market before checkout.

**Google Search Ad**

```text
Headline 1 (30): Compare Ticket Prices
Headline 2 (30): Check 3 Ticket Sources
Headline 3 (30): Compare Before Checkout
Description 1 (90): Compare Ticketmaster, SeatGeek and StubHub in one place before you buy.
Description 2 (90): Same event, different listings. Get market context before choosing a ticket.
```

**Meta Ad**

```text
Primary text (125): One event. Three ticket sources. Compare the market before checkout and stop paying the first price you see.
Headline (40): Compare Before Checkout
Description (30): Check the market first.
```

**Landing page:** `/` or a QA-verified `/compare` page.

## Variation 2 — Concert shoppers

**Angle:** Eliminate the four-tab routine.

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

**Landing page:** `/` or a validated venue/city page.

## Variation 3 — NFL season prep

**Angle:** Plan before the market gets noisy; avoid unsupported savings claims.

**Google Search Ad**

```text
Headline 1 (30): Compare NFL Ticket Prices
Headline 2 (30): Check 3 Sources At Once
Headline 3 (30): Plan Your Game Day
Description 1 (90): Compare NFL ticket listings from Ticketmaster, SeatGeek and StubHub in one place.
Description 2 (90): Check the market before you commit to a seat, section, or checkout price.
```

**Meta Ad**

```text
Primary text (125): NFL season is coming. Compare the same game across major ticket sources before you lock in a seat.
Headline (40): Compare NFL Tickets First
Description (30): Plan smarter game days.
```

**Landing page:** `/tickets/nfl` only after confirming the page exists and tracks conversions; otherwise use `/`.

## Test Notes

- Add `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, and `utm_term` to every destination.
- Optimize to `price_comparison` only after the event fires reliably; test `watchlist_add` next.
- Do not claim “lowest price,” “save $X,” or guaranteed alerts until price data and alert delivery are verified.
- Start with Variation 1 for the clearest product promise; use Variation 3 only in a dedicated seasonal ad group.
