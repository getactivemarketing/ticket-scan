## Email Daily — 2026-10-13

Checked the production admin API on 2026-10-13. Checks were read-only. The API exposes recorded drip sends and subscriber/watchlist records, but not opens, clicks, bounces, or provider-level delivery failures.

### Drip Campaign

- Emails sent (24h): **0 recorded**; `/api/admin/drip-stats` returned `stats: []`
- By email #: E1: **0**, E2: **0**, E3: **0**, E4: **0**, E5: **0 recorded**
- Failures: **Not measurable** — no failure, bounce, or delivery-log endpoint is exposed
- Pending users returned: **20**
- Pending users at least 7 days old: **18**
- Pending users at least 14 days old: **14**
- Pending users at least 21 days old: **9**
- Pending users at least 30 days old: **3**
- Oldest pending user: **37 days since signup**, with `last_email_sent: 0`
- Action: Drip run **not triggered**. `POST /api/admin/drip-run` sends real email and was outside this read-only monitoring task.
- Opens/clicks: **Unavailable** — no engagement fields are exposed.

### Price Alerts

- Alerts triggered (24h): **Not measurable**; platform-wide `triggeredAlerts` is **0**, but the stats endpoint has no 24-hour filter.
- Events with drops: **Not applicable / unavailable**. Price tracking has been down since July 24, so no current movement or recommendation can be reported.
- Delivery failures: **Not measurable**.
- Reporting issue: `GET /api/admin/alerts?limit=1000` returned **HTTP 500** (`Failed to get alerts`). The route currently queries columns not present in the deployed `price_alerts` schema (`triggered_at` / `email_sent`; the table uses `sent_at`).

### Subscriber Growth

- New subscribers today: **0**
- Sources today: **none**
- Unsubscribes today: **0 observed**; the endpoint returned 7 active records and no inactive records.
- Net: **0**
- Total active: **7**
- Source mix, all active: `site-footer` 3; `onsales` 1; `homepage` 1; `test` 1; `api-test` 1

### Watchlist Digest Readiness

- Total watchlist items: **256**
- Upcoming items from 2026-10-13 through 2026-10-27: **10 across 9 users**
- Items with target prices: **0** in the full watchlist export
- Current price movement: **Unavailable**; do not include price or buy/wait language.
- Recommendation changes: **Unavailable**.
- Digest copy: [watchlist-digest-2026-10-13.md](watchlist-digest-2026-10-13.md)

### Subject-Line and CTA A/B Test

Use only if a send is approved and volume supports a split test. Keep sender, body, audience, and CTA constant.

- Version A — utility: `Your TicketScan watchlist update — 10 events coming up`
- Version B — consumer advocate: `Your next ticket dates, plus one checkout sanity check`
- Preview A: `Your next watchlist dates and venues, in one quick scan.`
- Preview B: `Before you buy, check the all-in total, delivery method, and seller policies.`
- Primary CTA: `View my watchlist` → `https://www.ticketscan.io/watchlist`
- CTA placement: Above the fold, repeated once after the event summary.

### Delivery Escalation

1. Investigate the drip scheduler and SMTP/send logging. Twenty users are pending, including three at least 30 days old, but the database records zero sends.
2. Repair `/api/admin/alerts`; it currently returns HTTP 500 and blocks alert-delivery auditing.
3. Restore or verify fresh price tracking before resuming any price-based email copy.
4. Add explicit sent, bounced, opened, and clicked events so deliverability can be measured.
5. Remove test addresses from the newsletter audience before any production send.

### Analytics Handoff

- Users: **266 total**, **2 registered in the last 7 days**, **1 today**
- Watchlist items: **256 total**
- Active newsletter subscribers: **7**, **0 added today**
- Recorded drip sends: **0**
- Platform-wide triggered alerts: **0**, with no 24-hour breakdown available
- Digest-ready upcoming events: **10 across 9 users**
