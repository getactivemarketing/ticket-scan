## TicketScan Anomaly Alerts — 2026-08-01

### P1 — Fix before relying on marketing reporting

- Price history has stopped updating: newest record is 2026-07-24 20:01 UTC despite a four-hour tracking schedule.
- `/api/admin/alerts` returns HTTP 500.
- Conversion events and UTM attribution are not instrumented, so funnel and campaign performance are unavailable.

### P2 — Investigate today

- Drip stats show no sent emails and 20 pending users.
- Visitor, page, source, bounce, comparison, and retention metrics are not exposed by the current admin analytics surface.

