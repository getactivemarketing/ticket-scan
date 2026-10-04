# Paid Ads → CRO Handoff — 2026-10-04

## Priority

Paid optimization remains blocked by missing platform access and missing conversion attribution. The immediate CRO task is measurement, not a visual redesign.

## Requested checks

1. Verify `/compare` and `/dashboard` mobile load and CTA behavior.
2. Instrument `comparison_started`, `outbound_ticket_click`, `signup_completed`, `watchlist_added`, and `newsletter_subscribe`.
3. Persist first-touch and last-touch UTM values through signup and outbound seller clicks.
4. Confirm event pages expose current onsale/presale dates and seller links without implying live price tracking or alerts.
5. Report funnel counts by landing page and campaign once a reporting connection exists.

## Current evidence

- Live smoke check on 2026-10-04: `/`, `/compare`, `/dashboard`, and `/world-cup-2026/` returned HTTP 200.
- Analytics handoff: visitor, pageview, bounce, UTM, comparison, and paid-attribution metrics unavailable.
- Product status: price tracking, price history, price trends, price-drop alerts, and buy/wait recommendations are not publishable claims.

## Recommended test

Use `/compare` for a discovery-led ad test with one primary CTA: **Find an event** or **See where to buy**. The success event should be `outbound_ticket_click`; signup and watchlist additions are secondary until their events are queryable.
