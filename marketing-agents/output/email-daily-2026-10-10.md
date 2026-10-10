## Email Daily — 2026-10-10

Data checked against the deployed admin API on 2026-10-10. No email send was triggered.

### Drip Campaign

- Emails sent (24h): 0 recorded
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0 recorded
- Failures: not exposed by the endpoint
- Pending users: 20
- Status: `GET /api/admin/drip-stats` returned an empty `stats` array and 20 pending users, all with `last_email_sent: 0`. This indicates no successful drip sends are recorded; it does not distinguish a scheduler failure from a send/query failure.
- Content note: the existing drip subjects that promote price alerts or price data must not be sent unchanged while price tracking is down.

### Price Alerts

- Alerts triggered (24h): 0 recorded; platform `triggeredAlerts`: 0
- Events with drops: unavailable — price tracking is down
- Delivery failures: unavailable
- API issue: `GET /api/admin/alerts` returned HTTP 500 (`Failed to get alerts`). Escalate to backend owner before describing alert delivery as healthy.

### Subscriber Growth

- New subscribers today: 0
- Sources today: none
- Unsubscribes today: 0 recorded; the newsletter endpoint exposes no unsubscribe event history
- Net: 0
- Total active: 6
- Source breakdown, all active: `site-footer` 2, `homepage` 1, `onsales` 1, `test` 1, `api-test` 1

### Watchlist Digest Prep

- Watchlist rows: 256
- Users with at least one watchlist row: 153
- Upcoming events in the next 14 days: 6 rows / recipients
- Prepared copy: [watchlist-digest-2026-10-10.md](watchlist-digest-2026-10-10.md)
- The digest uses only event, date, venue, and city fields. It does not mention prices, price movement, targets, recommendations, or alerts.

### Subject Line / CTA Test

For the event-only digest:

- Version A: `Your TicketScan watchlist: 6 events coming up`
- Version B: `Your next ticket dates, venues, and a little less chaos`
- Primary CTA: `View your watchlist`
- CTA destination: `https://www.ticketscan.io/watchlist`
- Test recommendation: use Version A for the first send because it is clearer and more descriptive; reserve Version B as the curiosity variant when volume supports a real split.

### Escalations

1. Investigate why the drip campaign has 20 pending users but no recorded sends.
2. Fix `/api/admin/alerts` HTTP 500 and verify the alert-delivery path after price data is restored.
3. Add provider-level delivery, bounce, open, and click telemetry; the current admin endpoints cannot report those metrics.
4. Review and pause any drip templates that promise price alerts, price history, price trends, or buy/wait recommendations.

