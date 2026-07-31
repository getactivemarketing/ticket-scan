# Analytics Handoffs — July 31, 2026

## Content / Agent 1

Build `/compare/ticketscan-vs-seatgeek` from [the comparison spec](./compare-ticketscan-vs-seatgeek-spec-2026-07-31.md). Keep claims neutral and emphasize cross-source, fee-adjusted, historical comparison.

## SEO / Agent 2

Target “SeatGeek vs TicketScan,” “compare ticket prices with fees,” and “last-minute ticket price tracker.” Reconcile duplicate event/page inventory before using watchlist counts as demand proof.

## Paid / Agent 4

No scaling recommendation is supportable: spend, CPA, ROAS, and channel conversions are unmeasured. Prepare an event + city test but wait for GA4/UTM validation.

## Email / Agent 5

Pause any manual drip blast. The endpoint shows 20 pending users and 0 sent emails. Add delivery/open/click telemetry and use the observed same-day activation pattern for the post-signup sequence.

## CRO / Agent 6

P0: add target-price input, alert status, and a single post-signup “track this event” path. Instrument the complete funnel and verify no duplicate events.

## Growth / Agent 8

Recruit the 14 users with 3+ watchlist items for interviews. Test a first-session guided add, then a target-price prompt. Define return-session measurement before claiming retention lift.

## Engineering / product owner

Fix the alert endpoint, target-price flow, and price-tracker coverage. Current history has 202 rows for one Ticketmaster event and none from SeatGeek/StubHub, so the comparison intelligence promise is not yet credible at scale.
