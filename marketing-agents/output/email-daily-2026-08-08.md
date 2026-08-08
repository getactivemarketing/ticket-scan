## Email Daily — 2026-08-08

Checked the production admin API on 2026-08-08. The available endpoints expose counts and records, but not opens, clicks, SMTP bounces, or provider-level delivery failures. `/api/admin/drip-stats` has no campaign rows and no 24-hour filter, so the figures below are recorded totals or observable snapshots—not proof of inbox delivery.

### Drip Campaign

- Emails sent (24h): 0 recorded; `/api/admin/drip-stats` returned no campaign rows
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0 recorded
- Failures: Not measurable; no failure, bounce, or delivery-log endpoint is exposed
- Pending users: 20 shown; 16 are at least 3 days from signup and have no recorded drip email
- Oldest pending user: 14 days since signup; every pending user has `last_email_sent: 0`
- Action: Drip run not triggered. `POST /api/admin/drip-run` sends real email and was not authorized by this monitoring task.

### Price Alerts

- Alerts triggered (24h): Not measurable; `/api/admin/stats` reports 0 triggered alerts platform-wide and 0 active alerts
- Events with drops: None observable
- Delivery failures: Not measurable; `/api/admin/alerts?limit=1000` returned HTTP 500 / `Failed to get alerts`
- Price status warning: 0 of 204 watchlist items has a target price, and the admin API exposes no current price snapshot or movement by item. Buy/hold changes cannot be computed.

### Subscriber Growth

- New subscribers today: 0
- Sources today: none
- Unsubscribes today: 0 observed; unsubscribe history is not exposed by the admin endpoint
- Net: 0 observed
- Total active: 4
- All-time subscriber total: 4
- Source note: active records are `site-footer: 1`, `homepage: 1`, `test: 1`, `api-test: 1`

### Watchlist Digest Inputs

- Total users: 202
- Total watchlist items: 204
- Users represented in watchlist: 120
- Future-dated watchlist items: 57
- Items within 14 days (2026-08-08 through 2026-08-22 UTC): 11 across 9 users
- Events today: 4
- Upcoming items: ZZ Top (Aug 8), Raja 50 (Aug 8), Ed Sheeran (Aug 8), Avenged Sevenfold/Good Charlotte (Aug 8), Motionless In White (Aug 11, two listings), Mötley Crüe (Aug 14), Noah Kahan (Aug 17), MAMAMOO (Aug 18), Bruno Mars (Aug 21 and Aug 22)
- Recommendation changes: None computable; all 204 target prices are null and current prices are not available through the admin API
- Send status: Digest copy is ready in [watchlist-digest-2026-08-08.md](watchlist-digest-2026-08-08.md). It uses event-date urgency only and does not claim prices moved or recommend buying without price evidence.

### Subject-Line and CTA A/B Test

Use only if a send is approved and volume supports a split test. Keep sender, body, audience, and CTA constant.

- Version A — urgency: `Your watchlist has 11 events coming up soon`
- Version B — consumer advocate: `11 tickets are getting close — here’s the honest update`
- Preview A: `Four watched events are today. Here’s what’s urgent—and what the data still can’t tell us.`
- Preview B: `No fake “buy now” panic: your watchlist is ready, but price tracking needs a refresh.`
- Primary CTA: `Review My Watchlist` → `https://ticketscan.io/watchlist`
- CTA placement: Above the fold, repeated once after the event summary
- Test note: With only 4 active newsletter subscribers, do not split the newsletter audience. Use the variants for a future sufficiently large send or a controlled internal preview.

### Delivery Escalation

1. Repair `/api/admin/alerts`; its production query still fails, blocking alert and delivery auditing.
2. Restore or verify fresh price tracking; the admin surface exposes no current movement for the 204 watchlist rows.
3. Add provider-level send, bounce, open, and click telemetry before optimizing deliverability.
4. Verify SMTP configuration and approve a controlled drip run; 16 users are at least 3 days old with no recorded drip email.
5. Analytics handoff: 0 recorded drip sends, 0 platform-wide triggered alerts, 0 net subscribers, 4 active subscribers, and 11 near-term watchlist items across 9 users.
