# Paid-to-CRO Handoff — 2026-10-19

## Current state

No paid landing-page performance data is available because Google Ads and Meta
are not connected and paid conversion events are not verified. This is a
measurement handoff, not a performance conclusion.

## Recommended destination mapping

| Query/ad intent | Destination | Above-fold proof |
|---|---|---|
| Event discovery | `/dashboard` or matching event page | Event, date, venue, seller link |
| Onsale/presale | `/onsales` | Verified onsale/presale timing |
| Venue intent | Matching venue guide | Sections, capacity, practical tips |
| World Cup 2026 | `/world-cup-2026/` or stadium page | Match/venue facts and next step |

## Instrumentation required

Persist UTMs and verify these events in production: `search_submit`,
`signup_complete`, `watchlist_add`, `newsletter_success`, and
`outbound_ticket_click`. Do not optimize toward a paid conversion until event
payloads include source, campaign, landing page, and event ID where applicable.

## Copy guardrail

Keep the page and ads free of price tracking, price history, trend charts,
price-drop alerts, target-price alerts, buy/wait calls, savings statistics, and
TicketScan price-data claims while product status remains unchanged.
