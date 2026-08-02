# Ad Creative — 2026-08-02 — Comparison, Alerts, and NFL

Claims are intentionally conservative. These variations do not claim a specific savings amount, user count, lowest price, or guaranteed alert delivery. Validate the alert flow before running alert-led copy.

## Variation 1 — Evergreen comparison

**Angle:** Reduce tab-hopping and add market context before checkout.

**Google Search Ad**

```text
Headline 1 (30): Compare Ticket Prices
Headline 2 (30): See 3 Sources Together
Headline 3 (30): Check Before You Buy
Description 1 (90): Compare Ticketmaster, SeatGeek and StubHub in one place before you buy.
Description 2 (90): Spend less time opening tabs. See your ticket options side by side.
```

**Meta Ad**

```text
Primary text (125): Same event, different sites. TicketScan puts Ticketmaster, SeatGeek and StubHub side by side before you buy.
Headline (40): Compare Before You Buy
Description (30): Three sources. One search.
```

**Landing page:** `/dashboard` after anonymous-search QA; otherwise `/`.

## Variation 2 — Price-alert intent

**Angle:** Track a target price, without promising a live alert until delivery is verified.

**Google Search Ad**

```text
Headline 1 (30): Track Ticket Prices
Headline 2 (30): Compare 3 Ticket Sources
Headline 3 (30): Watch Your Event
Description 1 (90): Compare Ticketmaster, SeatGeek and StubHub, then track the event you want.
Description 2 (90): Set a target price when the alert flow is available and watch the market with context.
```

**Meta Ad**

```text
Primary text (125): Ticket prices move. Compare the major sources, track your event, and shop with more context before checkout.
Headline (40): Track Tickets With Context
Description (30): Compare first. Watch prices.
```

**Landing page:** `/dashboard` only after target-price capture and alert delivery QA.

## Variation 3 — NFL preseason

**Angle:** Capture football intent while avoiding unsupported price or urgency claims.

**Google Search Ad**

```text
Headline 1 (30): Compare NFL Ticket Prices
Headline 2 (30): Check 3 Ticket Sources
Headline 3 (30): Shop Smarter For Football
Description 1 (90): Compare NFL ticket options across Ticketmaster, SeatGeek and StubHub in one search.
Description 2 (90): Before kickoff, check the market side by side, then choose where to buy.
```

**Meta Ad**

```text
Primary text (125): Football is back on the calendar. Before buying your team's tickets, check the major sources in one comparison.
Headline (40): Compare NFL Tickets First
Description (30): One search. More context.
```

**Landing page:** `/tickets/nfl-tickets` only if the route is live and current; otherwise `/dashboard`.

## Test notes

- Add UTMs for platform, campaign, variation, and landing page.
- Start with `search_initiated`; move to `compare_completed` or `watchlist_added` only after events are firing and deduplicated.
- Do not run the World Cup angle until `/world-cup-2026/` is rewritten as a post-tournament archive.

