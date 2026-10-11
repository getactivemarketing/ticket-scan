## Email Daily — 2026-10-11

Checked against the deployed admin API on 2026-10-11 (America/New_York). No sends or external posts were triggered.

### Drip Campaign

- Emails sent (24h): 0 confirmed. `/api/admin/drip-stats` returned no sent-email rows.
- By email #: E1: 0 reported, E2: 0 reported, E3: 0 reported, E4: 0 reported, E5: 0 reported.
- Failures: unknown. The endpoint reports aggregate sent rows and pending users, but no delivery-failure or bounce field.
- Pending users returned by the endpoint: 20. Several are past the scheduled day, and all returned rows show `last_email_sent: 0`.
- Do not run the existing drip copy unchanged: E2 and E3 make price-alert/price-data claims that are currently false.

### Price Alerts

- Alerts triggered (24h): unknown.
- Events with drops: unavailable. Price tracking has been down since 2026-07-24.
- Delivery failures: unknown.
- Delivery check failed: `GET /api/admin/alerts` returned `{"success":false,"error":"Failed to get alerts"}` (HTTP 500).
- Escalation: fix `/api/admin/alerts` and add a date-filtered count plus delivery-failure fields before resuming alert reporting or sending alert copy.

### Subscriber Growth

- New subscribers today: 0 observed in the returned subscriber list.
- Sources for new subscribers: none observed.
- Unsubscribes today: 0 observed; no returned row has an `unsubscribed_at` value dated today.
- Net: 0 observed.
- Total active: 6.
- Caveat: `/api/admin/newsletter` returns the current list, not a date-aggregated growth report, so these are observed counts rather than a database-side daily aggregate.

### Watchlist Digest Prep

- Total watchlist rows: 256.
- Personalized price status: unavailable and intentionally omitted. TicketScan is not recording usable price data.
- Recommendation changes: unavailable and intentionally omitted.
- Upcoming-event urgency: not safe to calculate from the current admin response without filtering out stale/past rows and resolving event times.
- Send status: hold. Use `watchlist-digest-2026-10-11.md` as the safe template after recipient-level event/date data is filtered.

### Subject-Line A/B Test

- Version A: `Your TicketScan watchlist update`
- Version B: `A cleaner way to plan your next ticket outing`
- Test hook: personalization/event utility vs. curiosity. Neither version promises price movement, alerts, or recommendations.

### CTA Review

- Primary CTA: `View your watchlist` → link to the authenticated TicketScan watchlist page.
- Secondary CTA: `Browse upcoming events` → link to the event search/dashboard page.
- Keep both CTAs above the fold on mobile. Do not use “Set a price alert,” “Buy now,” or similar language until the underlying systems are verified.

### Analytics Agent Handoff

- Active subscribers: 6.
- New subscribers observed today: 0.
- Net growth observed today: 0.
- Drip sends confirmed today: 0.
- Watchlist rows: 256.
- Open/click rates: not available from the current admin endpoint.
