## Email Daily — 2026-08-18

Data window: 2026-08-17 00:00–23:59 UTC for daily growth metrics; API checks completed 2026-08-18. All checks were read-only.

### Drip Campaign

- Emails sent (24h): 0 (the API returned no `drip_emails_sent` rows)
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: unavailable — the current success-tracking table has no failure/bounce fields
- Open rate / click rate: unavailable — no engagement telemetry is stored or exposed
- Pending users reported by the API: 20; several are at Day 3+ eligibility with `last_email_sent: 0`

### Price Alerts

- Alerts triggered (24h): 0
- Events with drops: none recorded
- Delivery failures: unavailable — no failed-delivery log is stored
- Current alert audience: 0 watchlist items have a target price
- Total recorded price alerts: 0
- Alert detail endpoint: failed with HTTP 500; route references `triggered_at` / `email_sent`, while the initialized table uses `sent_at`

### Subscriber Growth

- New subscribers: 0 (sources: none)
- Unsubscribes: 0
- Net: 0
- Total active: 4
- Current active sources: site-footer 1, homepage 1, test 1, api-test 1

### Watchlist Digest Readiness

- Total watchlist items: 219
- Future watchlist items: 64
- Active users with future watchlist items: 38
- Events within the next 14 days (including today, Aug 18–Sep 1): 21
- Users with an event in that window: 14
- Watchlist items with target prices: 0
- Current price snapshots: unavailable for the current watchlist window; the newest exposed history is July 24 for an event not in the current urgency window
- Recommendation changes: none determinable. Do not claim BUY NOW, HOLD, price-up, or price-down.
- Ready-to-send content: [watchlist-digest-2026-08-18.md](watchlist-digest-2026-08-18.md)

### Subject / CTA A/B Test

The active newsletter audience is only four subscribers, so log variants for future testing rather than claiming a statistically valid test today.

- Version A: `Your TicketScan watchlist update: 21 events need a price check`
- Version B: `Your tickets are getting close — here’s what to check`
- Preview: `You’re tracking events in the next 14 days. We found the ones that need attention before prices move.`
- Primary CTA: `View my watchlist`
- CTA URL: `https://ticketscan.io/watchlist`
- CTA placement: above the fold, with one repeat after the event summary

### Delivery Issue Escalation

Escalate to engineering: eligible drip users are accumulating without recorded sends; `/api/admin/alerts` returns HTTP 500 because its selected column names do not match the `price_alerts` table; and the system lacks provider response, bounce, complaint, open, and click telemetry. Add these fields and expose 24-hour aggregates before treating deliverability as healthy.

### Analytics Handoff

Subscriber growth for 2026-08-18: 0 new, 0 unsubscribed, net 0, 4 active total. Watchlist digest audience: 38 users / 64 future events, including 14 users with 21 events in the next 14 days. No price movement, alert conversion, opens, or clicks can be measured from the available data.
