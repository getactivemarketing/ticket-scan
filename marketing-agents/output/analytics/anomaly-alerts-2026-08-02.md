## TicketScan Anomaly Alerts — 2026-08-02

- **P0:** Price history has been stale since 2026-07-24 20:01 UTC; expected four-hour writes are absent.
- **P0:** `/api/admin/alerts` returns HTTP 500, preventing alert-volume and delivery validation.
- **P0:** GTM is installed, but the four requested conversion events are not explicitly emitted.
- **P1:** UTM/source attribution is not captured or persisted.
- **P1:** Drip stats report no sent rows despite pending users crossing scheduled thresholds.

Owner recommendations: backend/cron owner for price tracking and alerts; frontend/analytics owner for dataLayer events and UTM persistence; email owner for drip scheduler/SMTP verification.
