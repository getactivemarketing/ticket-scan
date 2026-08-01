# Ad Creative — 2026-08-01 — Price Comparison, Sports, and Concerts

Claims are intentionally conservative: TicketScan compares Ticketmaster, SeatGeek, and StubHub in one place. No savings amount, user count, “lowest price,” or live alert guarantee is claimed.

## Variation 1 — Core comparison

**Angle:** Stop tab-hopping before buying.

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

**Landing page:** `/dashboard` after public-access QA; otherwise `/`.

## Variation 2 — Sports / NFL preseason

**Angle:** Check the market before football demand moves.

**Google Search Ad**

```text
Headline 1 (30): Compare NFL Ticket Prices
Headline 2 (30): Check 3 Ticket Sources
Headline 3 (30): Find Your Best Option
Description 1 (90): Compare NFL ticket options across Ticketmaster, SeatGeek and StubHub in one search.
Description 2 (90): Before kickoff, check the market side by side. Your wallet will notice.
```

**Meta Ad**

```text
Primary text (125): Football is back. Before buying your team's tickets, check what the major ticket sites show in one comparison.
Headline (40): Compare NFL Tickets First
Description (30): One search. More context.
```

**Landing page:** `/tickets/nfl-tickets` only if live; otherwise `/dashboard`.

## Variation 3 — Summer concerts

**Angle:** Make the comparison the easy part.

**Google Search Ad**

```text
Headline 1 (30): Compare Concert Tickets
Headline 2 (30): Ticket Prices Side by Side
Headline 3 (30): Shop With Better Data
Description 1 (90): Search concert ticket options from Ticketmaster, SeatGeek and StubHub in one place.
Description 2 (90): Skip the four-tab routine. Compare first, then choose where to buy.
```

**Meta Ad**

```text
Primary text (125): Four ticket tabs? There is a less annoying way. Compare major sources in one place before checkout.
Headline (40): Stop Opening Four Tabs
Description (30): Compare the market first.
```

**Landing page:** `/dashboard` after public-access QA.

## Test notes

- Add UTMs for platform, campaign, variation, and landing page.
- Optimize first to `search_initiated` or `compare_completed` only after those events are firing and deduplicated.
- Hold alert-led variants until price tracking is current and `/api/admin/alerts` is healthy.
