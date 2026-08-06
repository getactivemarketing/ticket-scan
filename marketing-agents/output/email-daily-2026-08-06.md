## Email Daily — 2026-08-06

Checked the production admin API on 2026-08-06. The available endpoints expose cumulative send/record counts, but not opens, clicks, SMTP bounces, or provider-level delivery failures. The drip endpoint also does not provide a 24-hour filter, so all-time zeroes are reported as recorded totals rather than definitive 24-hour delivery telemetry.

### Drip Campaign

- Emails sent (24h): 0 recorded; `/api/admin/drip-stats` returned no campaign rows
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0 recorded
- Failures: Not measurable; no failure, bounce, or delivery-log endpoint is exposed
- Pending users returned: 16 are at least 3 days from signup and have no recorded drip email
- Due/overdue concern: the oldest pending users are 13 days from signup; all pending users show `last_email_sent: 0`
- Action: Drip run not triggered. `POST /api/admin/drip-run` sends real email and was not authorized by this monitoring task.

### Price Alerts

- Alerts triggered (24h): Not measurable; `/api/admin/stats` reports 0 triggered alerts platform-wide and 0 active alerts
- Events with drops: None observable
- Delivery failures: Not measurable; `/api/admin/alerts?limit=100` still returns HTTP 500 (`Failed to get alerts`)
- Price status warning: No watchlist item has a target price, so no target-hit recommendation can be computed. Current price movement and buy/hold changes are not exposed by the admin endpoints used here.

### Subscriber Growth

- New subscribers today: 0 (no subscriber record dated 2026-08-06)
- Sources today: none
- Unsubscribes today: 0 observed
- Net: 0
- Total active: 4
- All-time subscriber total: 4

### Watchlist Digest Inputs

- Total users: 200
- Total watchlist items: 203
- Future-dated watchlist items: 56
- Items within 14 days (2026-08-06 through 2026-08-20 UTC): 9 across 8 users
- Items with target prices: 0
- Recommendation changes: None computable; no target prices and no current price snapshot are available through the admin API
- Send status: Digest copy is ready for review in [watchlist-digest-2026-08-06.md](watchlist-digest-2026-08-06.md). It uses upcoming-event urgency only and does not claim prices are up, down, stable, or buy-now.

### Subject-Line and CTA A/B Test

Use only if a send is approved and volume supports a split test. Keep sender, body, audience, and CTA constant.

- Version A — urgency: `Your watchlist has 9 events coming up soon`
- Version B — consumer advocate: `9 tickets are getting close — here’s the honest update`
- Preview A: `Four events are this weekend. Here’s what’s coming up and what we can—and can’t—say about price.`
- Preview B: `No fake “buy now” panic: your watchlist is ready, but price data needs a refresh.`
- Primary CTA: `Review My Watchlist` → `https://ticketscan.io/watchlist`
- CTA placement: Above the fold, repeated once after the event summary

### Delivery Escalation

1. Repair `/api/admin/alerts`; its production query still fails, blocking alert and delivery auditing.
2. Restore or verify fresh price tracking; the admin surface exposes no current movement for the 203 watchlist rows.
3. Add provider-level send, bounce, open, and click telemetry before optimizing deliverability.
4. Verify SMTP configuration and approve a controlled drip run; 16 users are at least 3 days old with no recorded drip email.
5. Analytics handoff: 0 recorded drip sends, 0 platform-wide triggered alerts, 0 net subscribers, 4 active subscribers, and 9 near-term watchlist events across 8 users.
