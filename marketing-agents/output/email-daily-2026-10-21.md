# Email Daily — 2026-10-21

Checked against the live admin API on 2026-10-21. The API exposes send records and subscriber/watchlist records, but not opens, clicks, bounces, or a reliable 24-hour alert-delivery series.

## Drip Campaign

- Emails sent (24h): **0 reported**. `GET /api/admin/drip-stats` returned no send rows.
- By email #: E1: **0**, E2: **0**, E3: **0**, E4: **0**, E5: **0**.
- Failures/bounces: **Unavailable** — no delivery-status fields are exposed.
- Pending users: **20** in the endpoint's capped pending-user list; all show `last_email_sent: 0`.
- Opens/clicks: **Unavailable** — no tracking fields are exposed.
- Status: **Action required.** Do not manually trigger the drip until the SMTP/scheduler path is verified.

## Price Alerts

- Alerts triggered (24h): **Not measurable**. `/api/admin/stats` reports **0 total triggered alerts**, consistent with the documented price-tracking outage but not a 24-hour series.
- Events with drops: **None reported**.
- Delivery failures: **Unavailable**.
- Health check: `GET /api/admin/alerts` returned **HTTP 500**. The route still queries the stale `triggered_at` and `email_sent` columns instead of the live schema's `sent_at`.
- Product-status note: price tracking, price history, price comparisons, recommendations, and price-drop alerts remain unavailable. Do not mention them in public email copy.

## Subscriber Growth

- New subscribers (last 24h): **0**.
- Source breakdown (active total): **site-footer 3**, **api-test 1**, **homepage 1**, **onsales 1**, **test 1**.
- Unsubscribes (last 24h): **0 observed**. The API returned 7 active subscribers and no inactive records.
- Net growth: **0**.
- Total active: **7**.
- Platform context: **0 users today**, **267 total users**, **256 total watchlist records**. Watchlist records are not price tracking.

## Watchlist Digest Readiness

- Future watchlist events: **19** across **13** users.
- Events within the next 14 days (2026-10-21 through 2026-11-04): **9** across **7** users.
- Current price status: **Unavailable**.
- Recommendation changes and target prices: **Unavailable / none exposed**.
- Digest draft: [watchlist-digest-2026-10-21.md](watchlist-digest-2026-10-21.md)
- Status: **Ready for review, not sent.** It contains only event/date/venue reminders and checkout-safety advice.

## Subject Line and CTA A/B Test

- Version A (control): `Your TicketScan watchlist update — {{event_count}} events coming up`
- Version B (urgency/personalization): `Your next ticket date is coming up — {{event_count}} events to check`
- Recommended preview: `Your event dates and venues, in one quick scan.`
- Primary CTA: **View my watchlist**
- CTA URL: `https://www.ticketscan.io/watchlist`
- Test note: Use A as control and B as the variant only if the send volume supports a split. Keep the CTA above the fold. Neither version uses price or alert language.

## Escalations

1. **High:** Investigate the drip scheduler and Gmail SMTP/send logging. Twenty users remain pending and no sends are recorded.
2. **High:** Repair `/api/admin/alerts` to match the live `price_alerts` schema and add explicit delivery-status/failure logging.
3. **Medium:** Add event tracking for sent, bounced, opened, and clicked.
4. **Medium:** Rewrite drip templates that promise price alerts or price-based savings until tracking is restored.

## Analytics Handoff

- New signups in the last 24 hours: **0**.
- Watchlist items added in the last 24 hours: **Not exposed by the current aggregate endpoint**.
- Newsletter subscribers added in the last 24 hours: **0**.
- Email-attributed conversions: **Unavailable**.
