# Ad Creative — 2026-08-08 — Comparison, Fall Concerts, and Sports

Drafts only. No live top performer was available, so these are launch candidates rather than performance winners. Copy uses TicketScan's documented comparison workflow and avoids unsupported savings, alert-delivery, lowest-price, and audience-size claims.

## Variation 1 — Core comparison

**Google Search Ads**

```text
Headline 1 (30): Compare Ticket Prices
Headline 2 (30): Check 3 Ticket Sources
Headline 3 (30): Choose With More Context
Description 1 (90): Compare Ticketmaster, SeatGeek and StubHub for the same event in one place.
Description 2 (90): Stop opening tabs at random. Check the market side by side before you buy.
```

**Meta Ads**

```text
Primary text (125): Ticket prices are weird enough. Compare Ticketmaster, SeatGeek and StubHub together before you choose a listing.
Headline (40): Compare Before You Buy
Description (30): More market context.
```

**Destination:** `/compare` after anonymous-access QA; otherwise `/`.

## Variation 2 — Concert shopper

**Google Search Ads**

```text
Headline 1 (30): Compare Concert Tickets
Headline 2 (30): Same Event, 3 Sources
Headline 3 (30): Check Before Checkout
Description 1 (90): See concert ticket options from Ticketmaster, SeatGeek and StubHub together.
Description 2 (90): One concert, multiple marketplaces. Compare first, then decide where to buy.
```

**Meta Ads**

```text
Primary text (125): Four tabs for one concert? TicketScan brings three major ticket sources together so shopping takes less guesswork.
Headline (40): Stop Opening Four Tabs
Description (30): Compare the market first.
```

**Destination:** `/` until the concert category route is confirmed live and conversion-tracked.

## Variation 3 — Fall sports intent

**Google Search Ads**

```text
Headline 1 (30): Compare NFL Ticket Prices
Headline 2 (30): Check Every Major Source
Headline 3 (30): See Options Side by Side
Description 1 (90): Compare NFL ticket listings from Ticketmaster, SeatGeek and StubHub in one place.
Description 2 (90): Before kickoff, get a clearer view of the market. Your wallet gets a vote.
```

**Meta Ads**

```text
Primary text (125): Buying NFL tickets? Check Ticketmaster, SeatGeek and StubHub together before you settle for the first price.
Headline (40): Compare NFL Tickets First
Description (30): Context before kickoff.
```

**Destination:** `/` until the NFL landing route is confirmed live and conversion-tracked.

## Test notes

- Test one angle at a time for at least three days or 100 clicks once reporting exists.
- Primary conversion: `price_comparison`; secondary: `signup` and `watchlist_add`.
- Add `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, and `utm_term` to every destination.
- Do not use price-drop-alert or savings claims until price history, target-price capture, and alert delivery are verified.
