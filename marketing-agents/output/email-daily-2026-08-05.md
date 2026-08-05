## Email Daily — 2026-08-05

Checked production admin API at 2026-08-05 10:13 UTC. The API exposes send counts and subscriber/watchlist records, but not opens, clicks, SMTP bounces, or provider-level delivery errors.

### Drip Campaign

- Emails sent (24h): 0 recorded in `drip_emails_sent` (the endpoint returned no campaign rows)
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0 recorded
- Failures: Not measurable from the current API; no failure/bounce table or delivery log is exposed
- Pending users: 20 returned by `/api/admin/drip-stats`; the oldest pending signup is 14 days old
- Action: Drip run not triggered. It sends real email in bulk, and this task requested monitoring and prep rather than an unconfirmed send.

### Price Alerts

- Alerts triggered (24h): 0 observable; `/api/admin/stats` reports 0 triggered alerts and 0 active alerts platform-wide
- Events with drops: None observable
- Delivery failures: Not measurable. `/api/admin/alerts` returns HTTP 500 (`Failed to get alerts`), preventing audit of `triggered_at`/`email_sent` records
- Price-data warning: The latest price-history record is 2026-07-24 20:01 UTC. All 202 records are Ticketmaster-only, so current movement and recommendation changes cannot be claimed.

### Subscriber Growth

- New subscribers today: 0 (no records since the latest signup on 2026-07-21)
- Sources today: none
- Unsubscribes today: 0 observed; the API returned 4 active records and no inactive records
- Net: 0
- Total active: 4

### Watchlist Digest Inputs

- Total users: 198
- Total watchlist items: 201
- Future-dated watchlist items: 55 across 36 users
- Items within 14 days (2026-08-05 through 2026-08-19): 11
- Items with target prices: 0
- Recommendation changes: None computable because price data is stale and no target prices are set
- Send status: Digest copy is ready for review in [watchlist-digest-2026-08-05.md](watchlist-digest-2026-08-05.md). Do not describe any item as up, down, or buy-now until price tracking is fresh.

### Subject-Line and CTA A/B Test

Use only if a send is approved and volume supports a split test. Hold sender, body, audience, and CTA constant.

- Version A — urgency: `Your watchlist has 11 events coming up soon`
- Version B — curiosity/personalization: `11 tickets you’re watching — here’s the honest update`
- Preview A: `We’re tracking the dates. Fresh price data is the next piece of the puzzle.`
- Preview B: `No fake “buy now” panic: see what’s coming up and what to watch next.`
- Primary CTA: `Review My Watchlist` → `https://ticketscan.io/watchlist`
- CTA placement: Above the fold, repeated once after the event summary

### Delivery Escalation

1. Repair `/api/admin/alerts`; its production query currently fails, blocking alert and delivery auditing.
2. Run or repair the price-tracking job; the newest price snapshot is 11 days old.
3. Add provider-level send, bounce, open, and click telemetry before optimizing deliverability.
4. Verify the configured email provider before running the overdue drip campaign.
5. Analytics handoff: 0 drip sends, 0 triggered alerts, 0 net subscribers, 4 active subscribers, and 55 future watchlist items across 36 users.
