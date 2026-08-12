# Ad Creative — 2026-08-12 — Comparison + Alerts

Drafts for the comparison-led campaign. No unsupported savings, audience-size, or live-price claims are used. Keep paused until conversion and UTM tracking are verified.

## Variation 1 — Compare before checkout

**Google Search Ads**

```text
Headline 1 (30): Compare Ticket Prices
Headline 2 (30): Check 3 Ticket Sources
Headline 3 (30): Compare Before Checkout
Description 1 (90): Compare Ticketmaster, SeatGeek and StubHub for the same event in one place.
Description 2 (90): Skip tab archaeology. See options side by side before choosing a ticket listing.
```

**Meta Ads**

```text
Primary text (125): The first ticket listing is not a law of nature. Compare three sources before committing to a price.
Headline (40): Compare Before Checkout
Description (30): Three sources. One view.
```

**Destination:** `/compare`

## Variation 2 — Price-drop awareness

**Google Search Ads**

```text
Headline 1 (30): Track Ticket Prices
Headline 2 (30): Watch Your Event
Headline 3 (30): Shop With Better Timing
Description 1 (90): Compare ticket options, then track an event so you can make a smarter buying decision.
Description 2 (90): Ticket prices move. Your plan should have more context than one checkout tab.
```

**Meta Ads**

```text
Primary text (125): Ticket prices move. Compare sources and keep an eye on your event before you decide when to buy.
Headline (40): Track Prices With Context
Description (30): Compare first. Decide smarter.
```

**Destination:** `/dashboard` after watchlist-flow QA; otherwise `/compare`

## Variation 3 — Consumer advocate

**Google Search Ads**

```text
Headline 1 (30): Your First Listing Isn't
Headline 2 (30): Compare Ticket Sources
Headline 3 (30): Check Before You Buy
Description 1 (90): The first listing is a starting point, not a verdict. Compare three sources first.
Description 2 (90): Get the market in one view, then choose the option that fits your plans.
```

**Meta Ads**

```text
Primary text (125): Why pay for guesswork? Put Ticketmaster, SeatGeek and StubHub side by side before you choose.
Headline (40): Check Before You Buy
Description (30): Context beats guesswork.
```

**Destination:** `/compare`

## Test notes

- Primary conversion: `price_comparison`; secondary conversions: `signup_complete`, `watchlist_add`.
- Test one angle at a time for at least 3 days or 100 clicks after instrumentation is live.
- Add complete UTMs and verify anonymous mobile flow before launch.
