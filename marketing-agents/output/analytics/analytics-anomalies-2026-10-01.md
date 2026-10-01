## TicketScan Anomaly Alerts — 2026-10-01

- **P0 — Price tracker stale:** newest `price_history.checked_at` is 2026-07-24 20:01 UTC; 0 records landed in the last 7 days.
- **P0 — Alerts reporting broken:** `/api/admin/alerts` returns HTTP 500 because the route selects `price_alerts.triggered_at`, while the live schema exposes `sent_at`.
- **P0 — Conversion tracking missing:** GTM loads, but explicit signup, watchlist, comparison, and newsletter events are absent from the app source.
- **P1 — Watchlist activation lull:** 0 adds in the current 24h window versus 0.29/day over the preceding seven days.
- **P1 — Drip delivery gap:** 0 rows in `drip_emails_sent` over the current and preceding seven-day windows; `/api/admin/drip-stats` also returns no sent-statistics rows.
