# TicketScan Analytics Anomaly Alerts — 2026-08-04

Severity: **critical/high**

- Conversion events are not instrumented or observable for signup, watchlist add, price comparison, or newsletter subscription.
- UTM capture and persistence are absent; channel performance cannot be attributed.
- Visitor, pageview, bounce-rate, and comparison-completion reporting is unavailable.
- Price history is stale: latest record `2026-07-24T20:01:07Z`; expected four-hour updates are missing.
- `/api/admin/alerts` returns HTTP 500, so alert reporting is not reliable.
- Drip stats show no sent rows and 20 pending users, including users who have reached scheduled milestones.

Recommended owner order: backend/cron and alerts first, then frontend/GTM event and UTM instrumentation, then analytics reporting export.
