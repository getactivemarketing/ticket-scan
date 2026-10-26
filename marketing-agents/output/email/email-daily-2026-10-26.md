# Email Daily — 2026-10-26

Checked the deployed admin API on 2026-10-26. No send endpoint was triggered.

## Drip Campaign

- Emails sent (24h): 0 recorded
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0 recorded
- Failures: not exposed by `/api/admin/drip-stats`
- Open and click rates: not exposed by the deployed API
- Pending users: 20 returned; all have `last_email_sent: 0`
- Schedule: E1 day 3, E2 day 7, E3 day 14, E4 day 21, E5 day 30

**Escalation:** Do not trigger `/api/admin/drip-run`. It performs real sends, has
no dry-run mode, and the existing templates include unavailable price-alert and
price-data claims. Rewrite and approve the templates, then run a controlled send.

## Price Alerts

- Alerts triggered (24h): 0 recorded; platform stats report 0 triggered alerts ever
- Events with drops: unavailable — TicketScan price tracking is down
- Delivery failures: not determinable; `/api/admin/alerts` returned HTTP 500
- Active alerts: 0

Public or customer-facing email must not promise price tracking, price history,
price-drop alerts, target alerts, or buy/wait recommendations.

## Subscriber Growth

- New subscribers today: 0 visible; latest active subscription is 2026-10-12
- Source breakdown today: none
- Unsubscribes today: not exposed by the API
- Net: not determinable from the available endpoint
- Total active: 7
- All-time active source mix: site-footer 4, onsales 1, homepage 1, test 1, api-test 1

## Watchlist Digest Readiness

- Watchlist rows: 257 across the admin dataset; user count is not exposed by this endpoint
- Events from 2026-10-26 through 2026-11-09: 6 across 5 email recipients
- Personalization available: event name, date, venue, and city
- Price status and recommendation changes: unavailable; no price claims included
- Digest content: [watchlist-digest-2026-10-26.md](watchlist-digest-2026-10-26.md)
- Status: prepared for review, not sent; no documented bulk-send endpoint or user-specific send approval was available

## Subject Line & CTA A/B Test

No campaign was sent, so no live A/B test ran.

- Version A: `Your TicketScan watchlist — [X] events coming up`
- Version B: `Your next ticket dates, in one quick scan`
- Preview: `[X] events on your list are coming up soon. Here are the dates and venues.`
- Primary CTA: `View my watchlist` → `https://www.ticketscan.io/watchlist`
- CTA review: clear, above the fold, and points to the watchlist page. Do not use a price-alert or “buy now” CTA while tracking is unavailable.

## Delivery Issue Escalation

1. The drip campaign has 0 recorded sends and no delivery telemetry.
2. Rewrite all five drip templates before any catch-up send; remove price-alert, price-history, buy/wait, and TicketScan price-savings claims.
3. Repair `/api/admin/alerts`, which returns HTTP 500.
4. Add timestamped SMTP failure, bounce, open, and click reporting.

## Analytics Handoff

- Registered users: 268; users today: 1; users this week: 2
- Watchlist rows: 257
- Active subscribers: 7; new subscribers today: 0 visible; unsubscribes: unavailable
- Active alerts: 0; triggered alerts ever: 0
- Drip emails sent ever: 0 recorded
