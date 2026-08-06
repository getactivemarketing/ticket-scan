## TicketScan Anomaly Alerts — 2026-08-06

### Priority 1

- Price-history freshness breach: latest record is July 24, 2026, despite the expected four-hour tracker.
- Admin alerts query is failing; alert-detail reporting is unavailable.

### Priority 2

- GTM container exists, but explicit conversion instrumentation is absent for the four requested conversion actions.
- Drip stats show zero sent statistics and 20 pending users; verify cron execution and write/read paths.
- Visitor, attribution, page, bounce, and price-comparison reporting is absent from the available API response set.

### Suggested owner handoff

- Backend: price-tracking cron, price-history endpoint freshness, and `/api/admin/alerts`.
- Frontend/analytics: dataLayer conversion events and UTM persistence.
- Lifecycle/email: drip scheduler and sent-log reconciliation.
