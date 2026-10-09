## TicketScan Analytics Anomaly Alerts — 2026-10-09

1. **P1 — Conversion tracking absent.** GTM is present, but signup, watchlist, comparison, newsletter, and outbound-click events are not implemented or queryable.
2. **P1 — Alert admin endpoint failing.** `GET /api/admin/alerts` returned HTTP 500. This blocks alert-history validation.
3. **P1 — Price-history data stale.** Newest returned record: 2026-07-24 20:01 UTC. Price tracking remains unavailable for public claims.
4. **P1 — Drip sends appear empty.** Drip stats returned no sent rows; pending users include accounts 6–24 days old with no email sent.
5. **P2 — Activity silence.** No signup, watchlist, or newsletter activity in the last 24 hours; latest activity record is 2026-10-04. Could be genuine inactivity or a coverage/query gap.

These alerts are internal operational findings. They must not be converted into public claims about price tracking, alerts, or performance.
