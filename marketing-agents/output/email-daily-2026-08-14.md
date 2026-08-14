## Email Daily — 2026-08-14

Checked at 2026-08-14 against the production admin API. Counts use the API's current UTC data. No email was sent or drip run was triggered.

### Drip Campaign

- Emails sent (24h): **0 observed** — `/api/admin/drip-stats` returned an empty `stats` array.
- By email #: **E1: 0, E2: 0, E3: 0, E4: 0, E5: 0 observed**.
- Failures: **Not measurable**. The endpoint exposes sent counts only and does not expose SMTP failures, bounces, opens, or clicks.
- Pending users returned by the endpoint: **20**. The oldest visible pending user is at day 14; the campaign should be checked because no sends are recorded.

### Price Alerts

- Alerts triggered (24h): **0 observed**. Platform stats currently report `triggeredAlerts: 0`.
- Events with drops: **None observable**. There is no current price history for the active watchlist; the latest returned history is July 24 and concerns one event.
- Delivery failures: **Not measurable**. `/api/admin/alerts` returned `Failed to get alerts` (HTTP 500), so alert-level delivery status could not be queried.

### Subscriber Growth

- New subscribers today: **0** (sources: none).
- Unsubscribes today: **0 observed**. No active subscriber has an unsubscribe timestamp in the returned dataset; the endpoint does not provide a daily unsubscribe aggregate.
- Net: **0 observed**.
- Total active: **4**.
- Active source breakdown: **site-footer 1, homepage 1, test 1, api-test 1**. The two test-source records should be excluded from campaign sends or cleaned up before reporting deliverability.

### Watchlist Digest Readiness

- Future watchlist events: **56**, across **33** users.
- Events within the next 14 days, inclusive of today: **13**.
- Personal price status: **Unavailable**. Current target prices are null across the returned watchlist rows, and the price-history feed is stale. Do not label any event as up, down, stable, buy-now, or hold until the price-tracking job repopulates current observations.
- Send recommendation: **Hold digest sends** until current prices and target prices are available. A date-only upcoming-event reminder is safe as a fallback.

### Subject Line and CTA A/B Test

Use only after current price data is available:

- Version A — `Your TicketScan watchlist update: prices moved`
- Version B — `You may be closer to a deal than you think`
- Primary CTA — `View my watchlist` → `https://ticketscan.io/watchlist`
- CTA review — Clear and action-oriented; keep above the fold. Do not use a buy-now CTA while price data is stale.

### Escalation

1. Investigate the drip scheduler/SMTP path: the campaign has 20 pending users and zero recorded sends.
2. Fix the `/api/admin/alerts` 500 response and verify `price_alerts.email_sent` reporting.
3. Run the price-tracking job or inspect its cron logs; the latest history is July 24 despite the documented four-hour schedule.
4. Confirm bounce/open/click instrumentation. It is not available from the current admin endpoints.

### Analytics Handoff — Agent 7

Report: **0 new newsletter subscribers today; 4 active total; 0 observed drip sends; 0 observed triggered alerts; 33 users have future watchlist items; 13 events fall within 14 days.** Attribution is noisy because two active records have test sources.
