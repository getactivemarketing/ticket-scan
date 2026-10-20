# Email Daily — 2026-10-20

Checked against the live admin API on 2026-10-20. The API reports sends and
subscriber records, but does not expose opens, clicks, bounces, or a reliable
24-hour alert-delivery view.

## Drip Campaign

- Emails sent (24h): **0 reported**. `GET /api/admin/drip-stats` returned no send rows.
- By email #: E1: **0**, E2: **0**, E3: **0**, E4: **0**, E5: **0**.
- Failures/bounces: **Unavailable** — no delivery-status fields are exposed.
- Pending users: **20** in the endpoint's capped pending-user list. All have `last_email_sent: 0`, including users at 30+ days since signup.
- Opens/clicks: **Unavailable** — no tracking fields are exposed.
- Status: **Action required.** The daily drip appears not to have recorded a send since the last check. Do not manually trigger until the SMTP/scheduler path is verified.

## Price Alerts

- Alerts triggered (24h): **Not measurable**. `/api/admin/stats` reports **0 total triggered alerts**, which is consistent with the documented price-tracking outage but is not a 24-hour series.
- Events with drops: **None reported**.
- Delivery failures: **Unavailable**.
- Health check: `GET /api/admin/alerts` still returns **HTTP 500** because the route queries `triggered_at` and `email_sent`, while the current table uses `sent_at` and has no `email_sent` column.
- Product-status note: price tracking, price history, price comparisons, recommendations, and price-drop alerts remain unavailable. No public email copy should mention them.

## Subscriber Growth

- New subscribers (last 24h): **0**.
- Source breakdown (active total): **site-footer 3**, **onsales 1**, **homepage 1**, **test 1**, **api-test 1**.
- Unsubscribes (last 24h): **0 observed**. The API returned 7 active subscribers and no inactive records.
- Net growth: **0**.
- Total active: **7**.
- Platform context: **1 new user** in the last 24 hours; **256 total watchlist records**. Watchlist records are not price tracking.

## Watchlist Digest Readiness

- Future watchlist events: **20** across **14** users.
- Events within the next 14 days: **10** across **8** users.
- Current price status: **Unavailable**.
- Recommendation changes: **Unavailable**.
- Target prices: **None** on the 10 near-term records.
- Digest draft: [watchlist-digest-2026-10-20.md](watchlist-digest-2026-10-20.md)
- Status: **Ready for review, not sent.** The draft contains event/date/venue reminders and checkout-safety advice only.

## Subject Line and CTA A/B Test

- Version A (control): `Your TicketScan watchlist update — {{event_count}} events coming up`
- Version B (personalized urgency): `Your next ticket date is coming up — {{event_count}} events to check`
- Recommended preview: `Your event dates and venues, in one quick scan.`
- Primary CTA: **View my watchlist**
- CTA URL: `https://www.ticketscan.io/watchlist`
- Test note: Use A as the control and B as the urgency variant only if the send volume supports a split. Keep the CTA above the fold. Do not use price/alert language in either variant.

## Escalations

1. **High:** Investigate the drip scheduler and Gmail SMTP/send logging. Twenty users are pending and no sends are recorded.
2. **High:** Repair `/api/admin/alerts` to match the live `price_alerts` schema and add explicit delivery status/failure logging.
3. **Medium:** Add email event tracking for sent, bounced, opened, and clicked so deliverability can be measured.
4. **Medium:** Remove or rewrite drip templates that promise price alerts or price-based savings until tracking is restored.

## Analytics Handoff

- New signups in the last 24 hours: **1**.
- Watchlist items added in the last 24 hours: **Not exposed by the current aggregate endpoint**.
- Newsletter subscribers added in the last 24 hours: **0**.
- Email-attributed conversions: **Unavailable**.
