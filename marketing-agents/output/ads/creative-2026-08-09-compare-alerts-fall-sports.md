# Ad Creative — 2026-08-09 — Compare, Alerts, and Fall Sports

Drafts only. No live top performer was available, so these are launch candidates. Copy avoids unsupported savings, audience-size, lowest-price, or guaranteed-alert claims.

## Variation 1 — Comparison utility

**Google Search Ads**

```text
Headline 1 (30): Compare Ticket Prices
Headline 2 (30): Check 3 Ticket Sources
Headline 3 (30): Compare Before You Buy
Description 1 (90): Compare Ticketmaster, SeatGeek and StubHub for the same event in one place.
Description 2 (90): Skip the tab marathon. Check the market side by side before choosing a listing.
```

**Meta Ads**

```text
Primary text (125): Ticket shopping should not require tab archaeology. Compare Ticketmaster, SeatGeek and StubHub in one place.
Headline (40): Compare Before You Buy
Description (30): More market context.
```

**Destination:** `/compare` after anonymous-access and conversion-event QA.

## Variation 2 — Price-alert intent

**Google Search Ads**

```text
Headline 1 (30): Watch Ticket Prices
Headline 2 (30): Track Events You Want
Headline 3 (30): Set Your Target Price
Description 1 (90): Compare ticket options, then track an event and set a target price for your budget.
Description 2 (90): Make your ticket search less frantic. Keep the event on your radar as prices move.
```

**Meta Ads**

```text
Primary text (125): Have a ticket budget? Compare the market, save the event, and keep an eye on price movement.
Headline (40): Keep Your Budget in View
Description (30): Track before checkout.
```

**Destination:** `/dashboard` only after watchlist and target-price tracking are verified end to end.

## Variation 3 — Fall sports and concerts

**Google Search Ads**

```text
Headline 1 (30): Compare Fall Tickets
Headline 2 (30): Sports And Concerts
Headline 3 (30): Check Before Kickoff
Description 1 (90): Compare fall sports and concert ticket options from three major sources in one place.
Description 2 (90): Your first search result is not automatically your best context. Compare first.
```

**Meta Ads**

```text
Primary text (125): Fall schedules are filling up. Compare sports and concert ticket options before you commit to a price.
Headline (40): Compare Fall Tickets First
Description (30): Context before checkout.
```

**Destination:** `/compare` or a verified event/venue page; do not route to the ended World Cup campaign.

## Test notes

- Test one angle at a time for at least 3 days or 100 clicks once reporting is live.
- Primary conversion: `price_comparison`; secondary: `sign_up` and `watchlist_add`.
- Add `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, and `utm_term` to every destination.
- Do not claim savings or guaranteed price drops until price history and alert delivery are operationally verified.
