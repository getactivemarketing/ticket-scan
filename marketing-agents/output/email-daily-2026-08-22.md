# Email Daily — 2026-08-22

Data checked against the production admin API on 2026-08-22. The API exposes cumulative drip totals, not a 24-hour rollup, and does not expose open/click, bounce, or send-failure telemetry.

## Drip Campaign

- Emails sent (24h): **0 observed**; `drip_emails_sent` currently returns no rows.
- By email #: **E1: 0, E2: 0, E3: 0, E4: 0, E5: 0 observed**.
- Failures: **Not reported by the endpoint**.
- Pending users: **20 returned by the API**, including users aged 3+ days who have received no drip email. This is an operational escalation: investigate the scheduled job/provider before triggering a bulk run.

## Price Alerts

- Alerts triggered (24h): **0 observed**; platform total is 0.
- Events with drops: **None verifiable**.
- Delivery failures: **Not measurable**. `/api/admin/alerts?limit=1000` returned HTTP 500 (`Failed to get alerts`).
- Important data gap: **0 watchlist rows have a target price**, so there are currently no eligible target-price alerts.

## Subscriber Growth

- New subscribers: **0 today**.
- Source breakdown: **none today**. Active base by source: `site-footer` 1, `homepage` 1, `test` 1, `api-test` 1.
- Unsubscribes: **0 today**.
- Net: **0**.
- Total active: **4**.

## Watchlist Digest Readiness

- Watchlist items: **223** across **135** users.
- Future-dated items: **64**.
- Items in the next 14 days (Aug 22–Sep 5): **30** across **14** recipients.
- Fresh price movement: **not available**. The price-history endpoint returned 202 records, but the newest record is from **2026-07-24**, so no down/up/stable claim or buy-now recommendation is safe.
- Digest status: **HOLD for price-movement send**. A transparent watchlist reminder is drafted in `watchlist-digest-2026-08-22.md`.

## Subject-Line / CTA Test

- Version A: `Your TicketScan watchlist update — [X] events coming up`
- Version B: `Your tickets are on the clock — here’s what we can verify`
- Preview: `We found [X] upcoming events on your watchlist. We’ll flag real price movement when fresh data arrives.`
- Primary CTA: `View my watchlist` → https://www.ticketscan.io/watchlist
- Test note: volume is too low for a meaningful statistical A/B test; use this as a copy test only and keep the CTA above the fold.

## Escalation

1. Investigate why drip tracking is empty despite 20 pending users, and confirm the scheduler/email provider before sending.
2. Repair `/api/admin/alerts` (HTTP 500) and add delivery-failure telemetry.
3. Run price tracking and confirm a fresh `price_history` record before sending price claims.
4. Remove or label the two test newsletter records before lifecycle reporting.

## Analytics Handoff (Agent 7)

Production snapshot: 231 users, 223 watchlist items, 135 watchlist users, 64 future events, 0 target prices, 0 triggered alerts, 4 active newsletter subscribers, +0 net subscribers today, 0 observed drip sends, and price-history freshness lag of 29 days.
