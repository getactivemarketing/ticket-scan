## Email Daily — 2026-10-15

Checked the production admin API on 2026-10-15. Checks were read-only. No emails were sent.

### Drip Campaign

- Emails sent (24h): **0 recorded**; `/api/admin/drip-stats` returned an empty `stats` array.
- By email #: E1: **0**, E2: **0**, E3: **0**, E4: **0**, E5: **0 recorded**.
- Failures, bounces, opens and clicks: **Not measurable**; the API exposes no provider-delivery or engagement fields.
- Pending users: **20**; 19 are at least 3 days from signup, 18 at least 7 days, 16 at least 14 days, 9 at least 21 days, and 5 at least 30 days.
- Oldest pending users: **39 days since signup**, all with `last_email_sent: 0`.
- Action: Drip run **not triggered** because `POST /api/admin/drip-run` sends real email.

### Price Alerts

- Alerts triggered (24h): **Not measurable**. The stats endpoint reports **0 total recorded triggered alerts**, but has no 24-hour filter.
- Events with drops: **Not applicable / unavailable**. Price tracking has been down since July 24; no current movement or recommendation is reportable.
- Delivery failures: **Not measurable**.
- Reporting issue: `GET /api/admin/alerts` returned **HTTP 500** (`Failed to get alerts`), matching the known deployed-schema mismatch.

### Subscriber Growth

- New subscribers today: **0 observed**; no subscriber record has a 2026-10-15 subscription timestamp.
- Sources today: **none**.
- Unsubscribes today: **0 observed**; the endpoint returned 7 active records and no inactive records.
- Net: **0 observed**.
- Total active: **7**.
- Source mix, all active: `site-footer` 3; `onsales` 1; `homepage` 1; `test` 1; `api-test` 1.

### Watchlist Digest Readiness

- Total watchlist items: **256**.
- Upcoming items from 2026-10-15 through 2026-10-29: **10 across 9 users**.
- Items with target prices: **0** in the full watchlist export.
- Current price movement and recommendation changes: **Unavailable**; the digest contains only event, date, venue, city, and general checkout-safety advice.
- Send-ready draft: [watchlist-digest-2026-10-15.md](watchlist-digest-2026-10-15.md).

### Subject-Line and CTA A/B Test

Use only if a send is approved and volume supports a split test. Keep sender, body, audience, and CTA constant.

- Version A — utility: `Your TicketScan watchlist update — [X] events coming up`
- Version B — consumer advocate: `Your next ticket dates, plus one checkout sanity check`
- Preview A: `Your next watchlist dates and venues, in one quick scan.`
- Preview B: `Before you buy, check the all-in total, delivery method, and seller policies.`
- Primary CTA: `View my watchlist` → `https://www.ticketscan.io/watchlist`
- CTA placement: Above the fold, repeated once after the event summary.

### Delivery Escalation

1. Investigate the drip scheduler and SMTP/send logging. The database records zero sends despite 20 pending users, including 5 at least 30 days old.
2. Repair `/api/admin/alerts`; it currently returns HTTP 500 and blocks alert-delivery auditing.
3. Restore or verify fresh price tracking before resuming any price-based email copy.
4. Add explicit sent, bounced, opened, and clicked events so deliverability can be measured.
5. Remove or suppress test addresses (`test@example.com` and the `api-test` / `test` sources) before any production newsletter send.

### Analytics Handoff

- Users: **266 total**; **2 registered in the last 7 days**; **0 today**.
- Watchlist items: **256 total**.
- Active newsletter subscribers: **7**; **0 added today**.
- Recorded drip sends: **0**.
- Platform-wide triggered alerts: **0 recorded**, with no 24-hour breakdown available.
- Digest-ready upcoming events: **10 across 9 users**.
