## Email Daily — 2026-08-12

Checked live admin endpoints at approximately 2026-08-12 (America/New_York). No email send endpoint was triggered.

### Drip Campaign

- Emails sent (24h): 0 (the live `drip_emails_sent` aggregate is empty, so 0 sent ever)
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: Not exposed by `/api/admin/drip-stats`; no recorded sends means no recorded delivery failures
- Pending queue: 20 users returned by the endpoint; all have `last_email_sent: 0`
- Visible overdue users: at least 15 due for E1 (signup age ≥3 days), 10 due for E2 (≥7 days), and 2 due for E3 (≥14 days). The endpoint returns only the newest 20, so the full overdue count is higher.

**Escalation:** The drip campaign still appears not to be delivering. `/api/admin/drip-run` was not called because it performs real sends and has no preview/dry-run option. Verify SMTP configuration, cron execution, and next-due logic before manually triggering it; otherwise a catch-up blast is possible.

### Price Alerts

- Alerts triggered (24h): 0; platform total triggered alerts: 0
- Events with drops: None observed
- Delivery failures: Not determinable. `/api/admin/alerts` returned HTTP 500 because the deployed query references `triggered_at` and `email_sent`, while the schema in `index.js` defines `sent_at` and does not define `email_sent`.
- Active alerts: 0
- Watchlist items: 208 total; all sampled records have `target_price: null`

**Escalation:** Price alerts cannot arm until users can set target prices and the alert admin query is corrected. No alert digest should claim a price drop today.

### Subscriber Growth

- New subscribers today: 0 (newest live subscriber is 2026-07-21)
- Source breakdown today: none
- Unsubscribes today: 0; all 4 records are active
- Net: 0
- Total active: 4
- All-time source mix: site-footer 1, homepage 1, test 1, api-test 1

### Watchlist Digest Prep

The admin API returned 208 watchlist items. Within 2026-08-12 through 2026-08-26, there are 10 items across 8 users. No current price, price delta, target, or recommendation status is available, so the send-ready copy should use “still tracking” rather than inventing movement.

Use the personalized blocks in `watchlist-digest-2026-08-12.md`. Primary CTA: `https://ticketscan.io/watchlist`.

Recommended preview text:

> Your upcoming tickets are still on watch. Here’s what’s next.

### Subject Line & CTA A/B Test

For today’s digest, test:

- Version A — `Your TicketScan watchlist update`
- Version B — `Your tickets are getting close`
- Version C — `8 events, 14 days, one less thing to monitor`

CTA recommendation: `Review my watchlist` → `https://ticketscan.io/watchlist`. Keep one primary CTA above the fold, with a minimum 44px tap target. Do not use “Buy now” until price data and recommendation status are available.

### Delivery / Data Issues to Escalate

1. Drip campaign has 0 recorded sends and no visible failure telemetry.
2. `/api/admin/alerts` is failing in production due to a deployed/schema column mismatch.
3. Watchlist has 0 active price alerts because target prices are null across the returned records.
4. Add a read-only watchlist digest endpoint that returns user-grouped current price, prior price, target, and recommendation fields.

### Analytics Handoff (Agent 7)

- Registered users: 208; users today: 3; users this week: 10
- Watchlist items: 208
- Active subscribers: 4; total subscribers: 4
- Active alerts: 0; triggered alerts ever: 0
- Drip emails sent ever: 0
- Upcoming watchlist window: 10 items / 8 users through 2026-08-26

