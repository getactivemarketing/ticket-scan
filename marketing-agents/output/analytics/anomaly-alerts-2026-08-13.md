## TicketScan Anomaly Alerts — 2026-08-13

### Critical

- **Price history has stopped updating.** Latest record: 2026-07-24 20:01 UTC. Expected four-hour cadence is absent throughout August.
- **Price-alert detail endpoint is failing.** `GET /api/admin/alerts?limit=1000` returned HTTP 500. Stats report zero triggered alerts, but that result is not independently trustworthy until the endpoint is repaired.

### High

- **Drip campaign has no evidenced sends.** `/api/admin/drip-stats` returned `stats: []` and 20 pending users.
- **Conversion event instrumentation is incomplete.** Signup, watchlist, compare, and newsletter UI/API paths were checked; explicit dataLayer conversion pushes were not found.

### Medium

- Visitor, page, bounce, traffic-source, and UTM reporting is unavailable from the current admin surface.
- Aug 13 has 0 signups and 0 watchlist adds so far, but the UTC day is incomplete.

### Recommended owner order

1. Backend/ops: repair price tracking cron and `/api/admin/alerts`.
2. Email/backend: reconcile drip eligibility and delivery logs.
3. Frontend/analytics: implement typed conversion events and UTM persistence.
4. Admin/reporting: expose GA/GTM aggregates needed by the marketing team.

