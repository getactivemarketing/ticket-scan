## Email Daily — 2026-08-04

Checked production admin API on 2026-08-04. The API exposes send counts and subscriber records, but not opens, clicks, SMTP bounces, or per-alert delivery errors.

### Drip Campaign

- Emails sent (24h): 0 recorded in `drip_emails_sent` (the endpoint returned no rows)
- By email #: E1: 0 recorded, E2: 0 recorded, E3: 0 recorded, E4: 0 recorded, E5: 0 recorded
- Failures: Not measurable from the current API. No failure/bounce table or delivery log is exposed.
- Pending users: 20 are shown by the endpoint; several are already at day 3+ and appear due for campaign processing.
- Action: Drip run was not triggered because it sends real email in bulk and the daily brief requested monitoring/prep, not an unconfirmed send.

### Price Alerts

- Alerts triggered (24h): 0 observed; platform total is 0.
- Events with drops: None observable. There are 0 active target-price alerts.
- Delivery failures: Not measurable. `/api/admin/alerts` currently returns HTTP 500 (`Failed to get alerts`), likely due to a production schema/query mismatch.
- Price-data warning: Latest available price-history row is 2026-07-24 20:01 UTC; 202 rows are Ticketmaster-only. This is too stale to claim current movement.

### Subscriber Growth

- New subscribers today: 0
- Source breakdown: site-footer 0 today; homepage 0 today; test 0 today; api-test 0 today
- Unsubscribes today: 0 observed; 4 total subscribers are active and there are no inactive rows in the returned dataset.
- Net: 0
- Total active: 4

### Watchlist Digest Inputs

- Total users: 197
- Total watchlist items: 200
- Upcoming tracked items within 14 days (2026-08-04 through 2026-08-18): 10
- Items with target prices: 0
- Recommendation changes: None computable because current price data is stale and no target prices are set.

Upcoming items are listed in [watchlist-digest-2026-08-04.md](watchlist-digest-2026-08-04.md).

### Subject-Line and CTA A/B Test

Use only if a send is approved and volume supports a split test.

- Version A (urgency): `Prices changed on your watchlist — here’s what to do`
- Version B (personalization/curiosity): `Your tickets are being watched. Are any worth buying now?`
- Preview A: `A quick look at upcoming events, price movement, and the next smart move.`
- Preview B: `No guesswork, no ticket-marketplace scavenger hunt — just your watchlist in one place.`
- Primary CTA: `Review My Watchlist` → `https://ticketscan.io/watchlist`
- CTA placement: Above the fold, repeated once after the event summary.
- Test variable: subject/preview only; hold sender, body, CTA, and audience constant.

### Delivery Escalation

1. Repair `/api/admin/alerts` so triggered alerts and `email_sent` status can be audited.
2. Add a daily price-tracking freshness check; the last recorded check is 11 days old.
3. Add provider-level send/bounce/open/click telemetry before optimizing deliverability.
4. Confirm SMTP health before running the overdue drip campaign.
