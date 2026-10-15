## Analytics Anomaly Alerts — 2026-10-15

- **P1:** Price history remains stale at 2026-07-24; 202 rows exist but do not represent current product performance.
- **P1:** `/api/admin/alerts` returns HTTP 500, preventing alert-volume validation.
- **P1:** GTM loads, but conversion events are not observable in the frontend source or admin activity feed.
- **P2:** Drip stats show no sent rows while multiple users are pending at campaign thresholds; delivery is unverified.
- **P2:** Visitor, page, bounce, source, UTM, and comparison telemetry is unavailable, preventing a complete daily funnel read.
