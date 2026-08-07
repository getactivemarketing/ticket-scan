## Email Daily — 2026-08-07

Production snapshot checked against the admin API on 2026-08-07. The current endpoints expose cumulative drip records and aggregate alert counts, but not a 24-hour filter, opens, clicks, bounces, or provider-level delivery failures. Metrics below distinguish recorded data from data that is not observable.

### Drip Campaign

- Emails sent (24h): **0 recorded**; `/api/admin/drip-stats` returned no campaign rows
- By email #: **E1: 0, E2: 0, E3: 0, E4: 0, E5: 0 recorded**
- Failures: **Not measurable**; no failure, bounce, or delivery-log endpoint is exposed
- Pending users returned: **20** with no recorded drip email; **17** are at least 3 days from signup and appear due/overdue under the configured schedule
- Oldest pending users: **14 days since signup**, still showing `last_email_sent: 0`
- Action: **Drip run not triggered.** `POST /api/admin/drip-run` sends real email; this monitoring task did not authorize a production send.

### Price Alerts

- Alerts triggered (24h): **Not measurable**; `/api/admin/stats` reports **0 triggered alerts platform-wide** and **0 active alerts**
- Events with drops: **None observable**
- Delivery failures: **Not measurable**; `/api/admin/alerts?limit=500&offset=0` returned **HTTP 500: Failed to get alerts**
- Data quality: **0 of 203 watchlist items has a target price**, so target-hit recommendations cannot be calculated from the admin data

### Subscriber Growth

- New subscribers today: **0** (sources: none)
- Unsubscribes today: **0 observed**; no subscriber record has an Aug 7 unsubscribe timestamp
- Net: **0**
- Total active: **4**
- All-time subscriber total: **4**

### Watchlist Digest Inputs

- Total users: **200**
- Total watchlist items: **203**
- Future-dated items: **56**
- Items within 14 days (Aug 7–Aug 21, inclusive): **10 across 9 users**
- Items with target prices: **0**
- Recommendation changes: **None computable**; no target prices and no current-price movement payload are available through the admin endpoints
- Digest status: **Ready for review, not sent** in [watchlist-digest-2026-08-07.md](watchlist-digest-2026-08-07.md)

### Subject-Line and CTA A/B Test

Use only if a send is approved and volume supports a split test. Keep sender, body, audience, and CTA constant.

- Version A — urgency: `Your watchlist has 10 events coming up soon`
- Version B — consumer advocate: `10 tickets are getting close — here’s the honest update`
- Preview A: `Four events are this weekend. Here’s what’s coming up and what to do next.`
- Preview B: `No fake “buy now” panic: we’re tracking the dates, and we’ll flag real price movement when data is fresh.`
- Primary CTA: `Review My Watchlist` → https://ticketscan.io/watchlist
- CTA placement: Above the fold, repeated once after the event summary

### Delivery Issue Escalation

1. Repair `/api/admin/alerts`; its production query fails with HTTP 500, blocking alert and delivery auditing.
2. Restore or verify fresh price tracking; the admin surface exposes no current movement for the 203 watchlist rows.
3. Add provider-level send, bounce, open, and click telemetry before optimizing deliverability.
4. Verify SMTP configuration and approve a controlled drip run; 17 users are at least 3 days old with no recorded drip email.
5. Analytics handoff: **0 recorded drip sends, 0 triggered alerts, 0 net subscribers, 4 active subscribers, 10 near-term watchlist items across 9 users**.
