# Email Daily — 2026-08-26

Data checked against the production admin API on 2026-08-26. No email was sent and no drip run or blast was triggered.

## Drip Campaign

- Emails sent (24h): **0 observed**; `/api/admin/drip-stats` returned an empty send aggregate.
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0 observed.
- Pending users returned by the endpoint: **20** (the endpoint returns only its latest 20 pending users).
- Failures/bounces: **Not exposed** by the current API.
- Open rates/click rates: **Not tracked or exposed** by the current API.
- Delivery note: 20 recent users remain pending, including users at or beyond the Day 3 threshold. Verify the scheduler/provider before any manual send.

## Price Alerts

- Alerts triggered (24h): **0 recorded**; aggregate `triggeredAlerts` is 0.
- Events with drops: **None verifiable**. The newest price-history record is `2026-07-24T20:01:07Z`; no current 24-hour price observations are available.
- Delivery failures: **Not exposed**.
- Audit issue: `/api/admin/alerts` returned HTTP 500 because the route requests `triggered_at` and `email_sent`, while the initialized `price_alerts` table uses `sent_at`.

## Subscriber Growth

- New subscribers today: **0** (no subscriber record in the last 24 hours; source breakdown: none).
- Unsubscribes today: **0 observed**; unsubscribe events are not separately exposed.
- Net: **0**.
- Total active: **5**.
- Active source mix: `site-footer` 2, `homepage` 1, `test` 1, `api-test` 1.

## Watchlist Digest Readiness

- Upcoming cohort: **33 rows across 16 users**, events dated Aug 26–Sep 9, 2026.
- Rows with a target price: **0**.
- Price movement/recommendation changes: **Unavailable** because the price feed is stale and no target prices are set.
- Recipient-ready copy: [watchlist-digest-2026-08-26.md](./watchlist-digest-2026-08-26.md)
- Do not claim a price drop, price rise, target hit, or buy-now recommendation.

## Subject-Line and CTA Test

- Version A: `Your TicketScan watchlist update — [X] events coming up`
- Version B: `[Event] is [X] days away — check prices before they move`
- Recommended CTA: `Open my watchlist` → https://www.ticketscan.io/watchlist
- Preview: `Some events are coming up soon. Set a target price so TicketScan knows what a deal looks like.`
- Test note: with 16 digest-ready recipients and no open/click telemetry, this is a copy test only. Split 50/50 if approved and instrument opens/clicks before judging a winner.

## Escalation

1. **P1:** Restore price tracking; the newest observation is more than a month old.
2. **P1:** Repair `/api/admin/alerts` to use the live `price_alerts.sent_at` schema, or migrate the table and route together.
3. **P2:** Add provider message IDs and sent/delivered/bounced/opened/clicked/unsubscribed events.
4. **P2:** Confirm the daily drip scheduler and provider configuration; current aggregate sends are empty.

## Analytics Handoff

Agent 7: **0 new subscribers, 0 observed unsubscribes, net 0, 5 active subscribers**. Source mix: site-footer 2, homepage 1, test 1, api-test 1. Upcoming digest cohort: **33 rows, 16 users, 0 target prices**.

