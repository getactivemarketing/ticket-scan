## Analytics Anomaly Alerts — 2026-10-23

- **High:** `/api/admin/alerts` returns HTTP 500. Alert counts are not trustworthy until fixed.
- **High:** No price-history records have appeared since 2026-07-24; the returned 50-row sample confirms the stale cutoff.
- **High:** GTM loads, but conversion events and UTM capture are not implemented or verifiable in the frontend source.
- **Medium:** Drip statistics are empty while 20 users are reported pending; verify scheduler execution and delivery logs.
- **Medium:** Current 24h activity is zero for signups, watchlist adds, and newsletter subscriptions. This may be real, but without visitor analytics it cannot be distinguished from a tracking gap.

