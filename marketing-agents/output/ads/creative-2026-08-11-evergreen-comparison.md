# Ad Creative — 2026-08-11 — Evergreen Comparison

Drafts only. No live top-performing campaign was available. Copy uses verified product functionality and avoids unsupported savings, audience-size, lowest-price, live-alert, and urgency claims.

## Variation 1 — Stop the tab marathon

**Google Search Ads**

```text
Headline 1 (30): Compare Ticket Prices
Headline 2 (30): Check 3 Ticket Sources
Headline 3 (30): Compare Before You Buy
Description 1 (90): Compare Ticketmaster, SeatGeek and StubHub for the same event in one place.
Description 2 (90): Skip the tab marathon. See ticket options side by side before choosing a listing.
```

**Meta Ads**

```text
Primary text (125): Ticket shopping should not require tab archaeology. Compare Ticketmaster, SeatGeek and StubHub in one place.
Headline (40): Compare Before You Buy
Description (30): Three sources. One view.
```

**Destination:** `/compare` after anonymous-flow QA.

## Variation 2 — Consumer advocate

**Google Search Ads**

```text
Headline 1 (30): Your First Listing Isn't
Headline 2 (30): Compare Ticket Sources
Headline 3 (30): Check Before Checkout
Description 1 (90): The first ticket listing is a starting point, not a verdict. Compare three sources first.
Description 2 (90): Put the market in one view, then choose the ticket option that fits your plans.
```

**Meta Ads**

```text
Primary text (125): The first listing is not a law of nature. Compare three ticket sources before committing to a price.
Headline (40): Check Before Checkout
Description (30): Context beats guesswork.
```

**Destination:** `/compare` after anonymous-flow QA.

## Variation 3 — Sports and concerts

**Google Search Ads**

```text
Headline 1 (30): Compare Sports Tickets
Headline 2 (30): Concert Prices Side By Side
Headline 3 (30): Search Smarter Today
Description 1 (90): Compare sports and concert ticket options from Ticketmaster, SeatGeek and StubHub.
Description 2 (90): One search, three sources, less tab-juggling before you choose a listing.
```

**Meta Ads**

```text
Primary text (125): Sports night or concert night? Compare ticket options across three major sources before you pick a listing.
Headline (40): Compare Tickets Side By Side
Description (30): One search, three sources.
```

**Destination:** `/compare`, or a verified event/venue page once available.

## Test and CRO Handoff

- Keep all variants paused until conversion-event QA and price-data freshness are repaired.
- Test one angle for at least 3 days or 100 clicks, whichever comes later, once reporting is connected.
- Primary conversion: `price_comparison`; secondary: `signup_complete` and `watchlist_add`.
- Add `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, and `utm_term` to every destination after UTM persistence is implemented.
- CRO should validate the comparison-first route, anonymous access, mobile interaction, and event instrumentation before launch.
