## Email Daily — 2026-08-11

Checked at 2026-08-11 10:10 UTC. The live admin API was used for the read-only checks below.

### Drip Campaign

- Emails sent (24h): **0**
- By email #: E1: **0**, E2: **0**, E3: **0**, E4: **0**, E5: **0**
- Failures: **Unavailable** — the current stats endpoint exposes sends only, not failures or bounces.
- Campaign status: **Action required.** The API reports 20 pending users and no recorded drip sends in any email number. Confirm the scheduler/SMTP path before manually triggering a campaign.
- Opens/clicks: **Unavailable** — no open or click tracking fields are exposed by the current backend.

### Price Alerts

- Alerts triggered (24h): **0 reported** (`/api/admin/stats` reports `triggeredAlerts: 0`)
- Events with drops: **None reported**
- Delivery failures: **Unavailable**
- Reporting issue: **`GET /api/admin/alerts` returns HTTP 500.** The route selects `triggered_at` and `email_sent`, but the `price_alerts` table created in `index.js` defines `sent_at` and has no `email_sent` column. Alert reporting needs a schema/route fix before delivery health can be trusted.

### Subscriber Growth

- New subscribers (24h): **0** (no new sources)
- Unsubscribes (24h): **0 observed**; the endpoint returned 4 active subscribers and no inactive records in scope
- Net: **0**
- Total active: **4**

### Watchlist Digest Readiness

- Active watchlist records: **207**
- Upcoming events within 14 days: **7**
- Current price movement: **Unavailable** from the admin watchlist endpoint
- Recommendation changes: **Unavailable**
- Target prices: **Not set on the 7 upcoming records**, so buy-now/hold decisions cannot be personalized from the current data
- Digest-ready copy: [watchlist-digest-2026-08-11.md](watchlist-digest-2026-08-11.md)

### Subject Line and CTA A/B Test

- Version A: `Your Ticket Watchlist Update — {{event_count}} events tracked`
- Version B: `Prices changed? Your watchlist knows first`
- Recommended primary CTA: `Open my watchlist`
- CTA URL: `https://www.ticketscan.io/watchlist`
- Test note: Use A for the control and B for the curiosity/urgency variant if the send volume supports a split. Keep the CTA above the fold.

### Escalations

1. **High priority:** Investigate the drip scheduler and SMTP/send logging. Twenty users are pending, but the database records zero sends.
2. **High priority:** Repair `/api/admin/alerts` to use the actual `price_alerts.sent_at` schema, then add explicit delivery status and failure logging.
3. **Medium priority:** Add email events for sent, bounced, opened, and clicked so daily reporting can measure deliverability and conversion.

### Analytics Handoff

- New signups observed in the last 24 hours: **1**
- Watchlist items added in the last 24 hours: **1**
- Newsletter subscribers added in the last 24 hours: **0**
- Email-attributed conversions: **Unavailable**
