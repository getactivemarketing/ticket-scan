# Email Daily — 2026-10-12

Source window: live production admin API checked 2026-10-12. No email was sent or triggered by this run.

## Drip Campaign

- Emails sent (24h): **0 recorded**
- By email #: E1: **0**, E2: **0**, E3: **0**, E4: **0**, E5: **0**
- Failures: **Unavailable** — the stats endpoint exposes send rows but no failure/bounce telemetry; it returned an empty `stats` array.
- Pending cohort: **20 users returned by the endpoint**, all with `last_email_sent: 0`. This is a capped list, not the full pending population.
- Action: **Escalate to engineering.** The drip campaign has no recorded sends, and the endpoint provides no delivery diagnostics. Do not trigger a live drip run from this report.

## Price Alerts

- Alerts triggered (24h): **0 recorded**; the aggregate `triggeredAlerts` count is 0.
- Events with drops: **N/A** — price tracking is currently unavailable.
- Delivery failures: **Unavailable** — `/api/admin/alerts` returned HTTP 500 (`Failed to get alerts`).
- Product-status note: do not send or draft public copy promising price tracking, price history, price movement, target-price alerts, or buy/wait/hold recommendations.

## Subscriber Growth

- New subscribers: **1** (source: `site-footer`)
- Unsubscribes: **0 visible** in the live subscriber data; all 7 returned records are active and have `unsubscribed_at: null`.
- Net: **+1**
- Total active: **7**
- Total records, including inactive: **7**

## Subject-Line A/B Test

No campaign is confirmed as sending today, so this is a draft test for the next watchlist digest:

- Version A — **Your TicketScan Watchlist Update — [X] events coming up**
- Version B — **Your saved events are getting close**

Recommended primary CTA: **View your watchlist** → `https://www.ticketscan.io/watchlist`

## Analytics Handoff

- Subscriber growth to pass to Analytics Agent: **+1 net today; 7 active total; source `site-footer` accounted for the new subscriber.**
- Email telemetry gap: no send, bounce, open, click, or unsubscribe attribution is available from the current admin endpoints.

