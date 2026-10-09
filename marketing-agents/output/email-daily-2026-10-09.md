## Email Daily — 2026-10-09

Checked the deployed admin API on 2026-10-09. Checks were read-only. The API exposes drip send records and subscriber/watchlist records, but not opens, clicks, bounces, SMTP failures, or a timestamp-filtered alert report.

### Drip Campaign

- Emails sent (24h): **0 recorded**; `/api/admin/drip-stats` returned `stats: []`
- By email #: E1: **0**, E2: **0**, E3: **0**, E4: **0**, E5: **0 recorded**
- Failures: **Not measurable** — no failure, bounce, or provider-delivery log is exposed
- Pending users returned: **20**
- Pending users at least 3 days old: **20**
- Pending users at least 7 days old: **19**
- Pending users at least 14 days old: **11**
- Pending users at least 21 days old: **8**
- Pending users at least 30 days old: **4**
- Oldest pending user: **40 days since signup**, with `last_email_sent: 0`
- Action: **Drip run not triggered.** The current templates contain unavailable price-monitoring, alert, savings, and recommendation claims. Rewrite and approve them before sending.
- Opens/clicks: **Unavailable** — no engagement fields are exposed.

### Price Alerts

- Alerts triggered (24h): **Not measurable**; `/api/admin/stats` reports `triggeredAlerts: 0` platform-wide, but provides no 24-hour filter.
- Events with drops: **Unavailable / none reportable.** Price tracking has been down since July 24, so no current price movement or recommendation can be included.
- Delivery failures: **Not measurable**.
- Reporting issue: `GET /api/admin/alerts` still returns HTTP 500 (`Failed to get alerts`).

### Subscriber Growth

- New subscribers today: **0 observed**
- Source breakdown today: **none observed**
- Unsubscribes today: **0 observed**; the newsletter endpoint returned 6 active records and no inactive records
- Net: **0 observed**
- Total active: **6**
- Active list by source: `site-footer` 2, `homepage` 1, `onsales` 1, `test` 1, `api-test` 1

### Watchlist Digest Readiness

- Total watchlist items: **256**
- Upcoming events from **2026-10-09 through 2026-10-23**: **6 across 6 users**
- Items with target prices: **0**
- Price movement, target status, and recommendation changes: **Unavailable**; excluded from the digest.
- Digest copy: [watchlist-digest-2026-10-09.md](watchlist-digest-2026-10-09.md)

### Subject-Line and CTA A/B Test

No campaign was sent, so no live A/B test was run. Use only if a send is approved and volume supports a split test.

- Version A — utility: `Your TicketScan watchlist update — 1 event coming up`
- Version B — consumer advocate: `Six ticket plans, one quick check before checkout`
- Preview A: `Your next event date and venue, in one quick scan.`
- Preview B: `Before you buy, check the all-in total, delivery method, and seller policies.`
- Primary CTA: `View my watchlist` → `https://www.ticketscan.io/watchlist`
- CTA review: clear, above the fold, and points to the correct watchlist page. Repeat once after the event summary.

### Delivery Escalation

1. Investigate the drip scheduler and SMTP/send logging. Twenty users are pending, including four at least 30 days old, but the database records zero sends.
2. Repair `/api/admin/alerts`; it currently returns HTTP 500 and blocks alert-delivery auditing.
3. Keep price-based email copy paused until fresh, working price data is restored.
4. Add explicit sent, bounced, opened, and clicked events so deliverability can be measured.
5. Remove test addresses from the newsletter audience before any production send.

### Analytics Handoff

- Users: **264 total**, **0 today**; the stats endpoint reports **1 in the last 7 days**
- Watchlist items: **256 total**, **6 digest-ready upcoming items** in the next 14-day window
- Active newsletter subscribers: **6**, **0 observed today**
- Recorded drip sends: **0**
- Platform-wide triggered alerts: **0**, with no 24-hour breakdown available
