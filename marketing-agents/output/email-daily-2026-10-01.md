## Email Daily — 2026-10-01

Checked the production admin API on 2026-10-01. The available endpoints expose cumulative drip records and subscriber records, but not opens, clicks, SMTP bounces, or provider-level delivery failures. The drip stats endpoint returned no sent rows, so 24-hour send volume is reported as zero recorded sends, not as proof that the SMTP provider delivered nothing.

### Drip Campaign

- Emails sent (24h): 0 recorded
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0 recorded
- Failures: Not measurable; no failure, bounce, or delivery-log endpoint is exposed
- Pending users returned: 20; 15 are at least 3 days from signup and have no recorded drip email
- Oldest pending user: 36 days since signup, with `last_email_sent: 0`
- Action: Drip run not triggered. `POST /api/admin/drip-run` sends real email; this monitoring task did not authorize a live campaign send.

### Price Alerts

- Alerts triggered (24h): Not measurable; `/api/admin/stats` reports 0 triggered alerts platform-wide and 0 active target-price alerts
- Events with drops: None observable
- Delivery failures: Not measurable; `/api/admin/alerts?limit=500` returned HTTP 500 (`Failed to get alerts`)
- Watchlist warning: All 254 watchlist rows currently have `target_price: null`, so target-hit recommendations cannot be evaluated.
- Price movement warning: Per-user price history and recommendation routes require a user JWT; the admin surface does not expose current movement or recommendation changes.

### Subscriber Growth

- New subscribers today: 0 (no new records on 2026-10-01)
- Sources today: none
- Unsubscribes today: 0 observed
- Net: 0
- Total active: 6
- All-time subscriber total: 6

### Watchlist Digest Inputs

- Total users: 262
- Total watchlist items: 254
- Future-dated watchlist items: 26 across 20 users
- Items within 14 days (2026-10-01 through 2026-10-15): 5 across 5 users
- Items with target prices: 0
- Recommendation changes: None computable; no target prices or admin-accessible current price snapshots are available
- Send status: Digest copy is ready for review in [watchlist-digest-2026-10-01.md](watchlist-digest-2026-10-01.md). It uses upcoming-event urgency only and does not claim prices are up, down, stable, or buy-now.

### Subject-Line and CTA A/B Test

Use only if a send is approved and volume supports a split test. Keep sender, body, audience, and CTA constant.

- Version A — urgency: `Five events are getting close on your watchlist`
- Version B — consumer advocate: `Your tickets are on the clock — here’s the honest update`
- Preview A: `Five watched events land in the next 14 days. Here’s what’s coming up and what we can—and can’t—say about price.`
- Preview B: `No fake “buy now” panic: your watchlist is ready, but price targets aren’t set yet.`
- Primary CTA: `Review My Watchlist` → `https://ticketscan.io/watchlist`
- CTA placement: Above the fold, repeated once after the event summary

### Delivery Escalation

1. Repair `/api/admin/alerts`; its production query still fails, blocking alert and delivery auditing.
2. Add an admin-safe price-history summary so digest prep can see current movement without borrowing user JWTs.
3. Add provider-level send, bounce, open, and click telemetry before optimizing deliverability.
4. Verify SMTP configuration and approve a controlled drip run; 15 users are at least 3 days old with no recorded drip email.
5. Analytics handoff: 0 recorded drip sends, 0 platform-wide triggered alerts, 0 net subscribers, 6 active subscribers, and 5 near-term watchlist events across 5 users.
