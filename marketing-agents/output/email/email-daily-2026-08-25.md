## Email Daily — 2026-08-25

Checked the live admin API on 2026-08-25. No email send or blast endpoint was triggered.

### Drip Campaign

- Emails sent (24h): 0; the live `drip_emails_sent` aggregate is empty, so 0 recorded sends ever
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: Not exposed by `/api/admin/drip-stats`
- Pending queue: 20 users returned; all have `last_email_sent: 0`
- Schedule: E1 day 3, E2 day 7, E3 day 14, E4 day 21, E5 day 30

**Escalation:** The drip campaign has no recorded delivery activity. `/api/admin/drip-run` was not called because it performs real sends and has no dry-run option. Verify cron execution and the configured Resend/SMTP provider before manually triggering a catch-up run.

### Price Alerts

- Alerts triggered (24h): 0 observed; platform stats report 0 triggered alerts ever
- Events with drops: None observable
- Delivery failures: Not determinable
- Active alerts: 0

**Escalation:** `/api/admin/alerts` returned HTTP 500 (`Failed to get alerts`). The deployed query references `triggered_at` and `email_sent`, while the local schema definition uses `sent_at` and does not define `email_sent`. This blocks reliable alert-volume and delivery-failure reporting.

### Subscriber Growth

- New subscribers today: 0 (source breakdown: none)
- Unsubscribes today: 0
- Net: 0
- Total active: 5
- All-time source mix: site-footer 2, homepage 1, test 1, api-test 1

### Watchlist Digest Readiness

- Watchlist items: 238 across 140 users
- Items with target prices: 0
- Upcoming items from Aug 25 through Sep 7: 33 across 18 users
- Price status: unavailable for the watchlist; latest matching price-history record is Jul 24, 2026
- Recommendation changes: none can be calculated

The send-ready digest is in `watchlist-digest-2026-08-25.md`. It uses “still tracking” language, asks users to set a target price, and does not claim a price drop or buy-now signal.

### Subject Line & CTA A/B Test

- Version A: `Your TicketScan watchlist update — [X] events tracked`
- Version B: `Your tickets are getting close — here’s what to watch`
- Preview: `You have [X] upcoming events. Set a target price so TicketScan knows what a deal looks like.`
- Primary CTA for both: `Open my watchlist` → https://www.ticketscan.io/watchlist

Keep the CTA above the fold. Do not use “Buy now” until current prices and recommendation status are available.

### Delivery / Data Issues

1. Drip campaign has 0 recorded sends and no failure telemetry.
2. Alert reporting is broken in production because of the deployed/schema column mismatch.
3. No watchlist item currently has a target price, so price alerts cannot arm.
4. Price history for watchlisted events is stale; digest personalization is limited to event/date/venue.

### Analytics Handoff (Agent 7)

- Registered users: 239; users today: 4; users this week: 17
- Watchlist items: 238; unique users with watchlist items: 140
- Active subscribers: 5; new today: 0; net today: 0
- Active alerts: 0; triggered alerts ever: 0
- Drip emails sent ever: 0
- Upcoming digest subset: 33 items / 18 users through Sep 7
