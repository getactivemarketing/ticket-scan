## Email Daily — 2026-10-07

Production snapshot pulled from the deployed admin API on 2026-10-07. Checks were read-only. The API exposes recorded drip sends and pending users, but not opens, clicks, bounces, or provider-level delivery failures.

### Drip Campaign

- Emails sent (24h): **0 recorded**; `/api/admin/drip-stats` returned `stats: []`
- By email #: E1: **0**, E2: **0**, E3: **0**, E4: **0**, E5: **0 recorded**
- Failures: **Not measurable** — no failure, bounce, or delivery-log endpoint is exposed
- Pending users returned: **20**
- Pending users at least 7 days old: **13**
- Pending users at least 14 days old: **11**
- Pending users at least 21 days old: **6**
- Pending users at least 30 days old: **2**
- Oldest pending user: **38 days since signup**, with `last_email_sent: 0`
- Action: Drip run **not triggered**. `POST /api/admin/drip-run` sends real email and was outside this read-only monitoring task.
- Opens/clicks: **Unavailable** — no engagement fields are exposed.

### Price Alerts

- Alerts triggered (24h): **Not measurable**; platform-wide `triggeredAlerts` is **0**, but the stats endpoint has no 24-hour filter.
- Events with drops: **Not applicable / unavailable**. Price tracking has been down since July 24; no current movement or recommendation should be included in email.
- Delivery failures: **Not measurable**.
- Reporting issue: `GET /api/admin/alerts` returned **HTTP 500** (`Failed to get alerts`).

### Subscriber Growth

- New subscribers today: **0**
- Sources today: **none**
- Unsubscribes today: **0 observed**; all 6 returned newsletter records are active. There is no unsubscribe-event audit, so this is not proof that no unsubscribe occurred.
- Net: **0 observed**
- Total active: **6**
- Source mix, all active: `site-footer` 2; `onsales` 1; `homepage` 1; `test` 1; `api-test` 1

### Watchlist Digest Readiness

- Total watchlist items: **256**
- Future-dated items: **24**
- Events from 2026-10-07 through 2026-10-21: **5 across 5 users**
- Items with target prices: **0** in the returned watchlist data
- Current price movement: **Unavailable**; do not include price or buy/wait language.
- Recommendation changes: **Unavailable**.
- Digest copy: [watchlist-digest-2026-10-07.md](watchlist-digest-2026-10-07.md)

### Subject-Line and CTA A/B Test

Use only if a send is approved and volume supports a split test. Keep sender, body, audience, and CTA constant.

- Version A — utility: `Your TicketScan watchlist update — 5 events coming up`
- Version B — consumer advocate: `Five ticket plans, one quick check before checkout`
- Preview A: `Your next watchlist dates and venues, in one quick scan.`
- Preview B: `Before you buy, check the all-in total, delivery method, and seller policies.`
- Primary CTA: `View my watchlist` → `https://www.ticketscan.io/watchlist`
- CTA placement: Above the fold, repeated once after the event summary.

### Delivery Escalation

1. Investigate the drip scheduler and SMTP/send logging. Twenty users are pending, including two at least 30 days old, but the database records zero sends.
2. Repair `/api/admin/alerts`; it currently returns HTTP 500 and blocks alert-delivery auditing.
3. Restore or verify fresh price tracking before resuming any price-based email copy.
4. Add explicit sent, bounced, opened, and clicked events so deliverability can be measured.
5. Remove test addresses from the newsletter audience before any production send.

### Analytics Handoff

- Users: **264 total**, **4 registered in the last 7 days**, **0 today**
- Watchlist items: **256 total**, **1 added in the last 24 hours**
- Active newsletter subscribers: **6**, **0 added today**
- Recorded drip sends: **0**
- Platform-wide triggered alerts: **0**, with no 24-hour breakdown available
- Digest-ready upcoming events: **5 across 5 users**
