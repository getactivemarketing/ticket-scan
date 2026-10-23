## Email Daily — 2026-10-23

Live checks completed against the production admin API.

### Drip Campaign

- Emails sent (24h): 0 recorded in `drip_emails_sent`
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0 recorded
- Failures: unavailable from the current endpoint; no failure field or delivery log is exposed
- Pending users returned by `/api/admin/drip-stats`: 20
- Action: do not trigger the existing campaign until E2/E3/E5 are rewritten. They contain unavailable price-alert, price-history, or data-backed savings claims.

### Price Alerts

- Alerts triggered (24h): 0 recorded
- Events with drops: none available
- Delivery failures: unavailable
- `/api/admin/alerts`: HTTP 500 (`Failed to get alerts`), matching the open issue in `docs/HANDOFF.md`
- Product status: price tracking has been down since 2026-07-24. No public email should claim price monitoring, price history, target alerts, or buy/wait recommendations.

### Subscriber Growth

- New subscribers today: 0
- Sources today: none
- Unsubscribes today: 0 visible in the subscriber endpoint
- Net: 0
- Total active: 7
- Total records: 7; all 7 are active
- Latest visible signup: 2026-10-12 (`site-footer`)

### Additional operating metrics

- Registered users: 267
- New users in the last 7 days: 1
- Users today: 0
- Watchlist items: 256 (saved events, not price-tracked events)
- Watchlist items with target prices: 0

### Watchlist Digest Readiness

Eight saved events fall between 2026-10-23 and 2026-11-06. The send-ready content is in [watchlist-digest-2026-10-23.md](watchlist-digest-2026-10-23.md). It contains dates, venues, and cities only; no unsupported price status or recommendation.

### Subject-line / CTA test

No campaign was sent today, so no live A/B test ran. Recommended digest test:

- A: `Your TicketScan watchlist: 8 dates coming up`
- B: `Eight saved events are nearly here — check the details`
- Preview: `Your next two weeks of saved events, venues, and event links — without the ticket-buying guesswork.`
- Primary CTA: `View your watchlist`
- CTA destination: authenticated TicketScan watchlist page

### Analytics handoff

Analytics Agent should record: 0 new subscribers, 0 visible unsubscribes, 7 active subscribers, 267 registered users, 1 user added in the last 7 days, 256 watchlist items, and 0 target-price watchlist items. These are API counts, not price-performance metrics.

### Escalation

1. Fix `/api/admin/alerts` (HTTP 500).
2. Add delivery/bounce/open/click instrumentation; the current drip endpoint reports database send rows only.
3. Rewrite or pause drip emails that promote price alerts or TicketScan price data before the next scheduled run.
