## TicketScan Analytics Anomalies — 2026-10-24

### Critical

- Price history is stale. The latest record is 2026-07-24 20:01:07 UTC; current price tracking is not operational.
- `/api/admin/alerts` returns HTTP 500, preventing trustworthy alert reporting.

### High

- Drip stats report zero sent rows and 20 pending users, including cohorts beyond the configured day-3/day-7/day-14/day-21/day-30 schedule.
- GTM is installed on tested pages, but signup, watchlist, comparison, newsletter, and UTM instrumentation cannot be verified from source or admin reporting.
- Legacy public-copy claims about price tracking and alerts remain in repository content and should be removed or quarantined under the current product-status guardrail.

### Monitoring

- No signups, watchlist additions, or newsletter subscriptions occurred in the 24-hour run window.
- The platform has 267 users, 256 watchlist items, 7 active subscribers, and 27 favorites.
