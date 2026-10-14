## Email Daily — 2026-10-14

Checked the production admin API on 2026-10-14. Checks were read-only. No emails were sent.

### Drip Campaign

- Emails sent (24h): **0 recorded**; `/api/admin/drip-stats` returned an empty `stats` array.
- By email #: E1: **0**, E2: **0**, E3: **0**, E4: **0**, E5: **0 recorded**.
- Failures: **Not measurable** — the API exposes no failure, bounce, or provider-delivery log.
- Pending users returned: **20**; 18 are at least 7 days from signup, 14 at least 14 days, 9 at least 21 days, and 3 at least 30 days.
- Oldest pending user: **38 days since signup**, with `last_email_sent: 0`.
- Action: Drip run **not triggered** because `POST /api/admin/drip-run` sends real email.
- Opens/clicks: **Unavailable** — no engagement fields are exposed.

### Price Alerts

- Alerts triggered (24h): **Not measurable**. The stats endpoint reports **0 total recorded triggered alerts**, but has no 24-hour filter.
- Events with drops: **Not applicable / unavailable**. Price tracking has been down since July 24; no current movement or recommendation is reportable.
- Delivery failures: **Not measurable**.
- Reporting issue: `GET /api/admin/alerts` returned **HTTP 500** (`Failed to get alerts`), matching the known deployed-schema mismatch documented in the handoff.

### Subscriber Growth

- New subscribers today: **0 observed**; no subscriber record has a 2026-10-14 subscription timestamp.
- Sources today: **none**.
- Unsubscribes today: **0 observed**; the endpoint returned 7 active records and no inactive records.
- Net: **0 observed**.
- Total active: **7**.
- Source mix, all active: `site-footer` 3; `onsales` 1; `homepage` 1; `test` 1; `api-test` 1.

### Watchlist Digest Readiness

- Total watchlist items: **256**.
- Upcoming items from 2026-10-14 through 2026-10-28: **10 across 9 users**.
- Items with target prices: **0** in the full watchlist export.
- Current price movement: **Unavailable**; digest copy contains only event, date, venue, city, and general checkout-safety advice.
- Recommendation changes: **Unavailable**.
- Send-ready draft: [watchlist-digest-2026-10-14.md](watchlist-digest-2026-10-14.md).

### Subject-Line and CTA A/B Test

Use only if a send is approved and volume supports a split test. Keep sender, body, audience, and CTA constant.

- Version A — utility: `Your TicketScan watchlist update — 10 events coming up`
- Version B — consumer advocate: `Your next ticket dates, plus one checkout sanity check`
- Preview A: `Your next watchlist dates and venues, in one quick scan.`
- Preview B: `Before you buy, check the all-in total, delivery method, and seller policies.`
- Primary CTA: `View my watchlist` → `https://www.ticketscan.io/watchlist`
- CTA placement: Above the fold, repeated once after the event summary.

### Delivery Escalation

1. Investigate the drip scheduler and SMTP/send logging. The database records zero sends despite 20 pending users, including 3 at least 30 days old.
2. Repair `/api/admin/alerts`; it currently returns HTTP 500 and blocks alert-delivery auditing.
3. Restore or verify fresh price tracking before resuming any price-based email copy.
4. Add explicit sent, bounced, opened, and clicked events so deliverability can be measured.
5. Remove or suppress test addresses (`test@example.com` and the `api-test` / `test` sources) before any production newsletter send.

### Analytics Handoff

- Users: **266 total**; **2 registered in the last 7 days**; **0 today** according to the live stats endpoint.
- Watchlist items: **256 total**.
- Active newsletter subscribers: **7**; **0 added today**.
- Recorded drip sends: **0**.
- Platform-wide triggered alerts: **0 recorded**, with no 24-hour breakdown available.
- Digest-ready upcoming events: **10 across 9 users**.
