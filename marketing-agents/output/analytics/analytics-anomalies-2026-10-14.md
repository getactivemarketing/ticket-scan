## Analytics Anomalies — 2026-10-14

- **Critical:** `/api/admin/alerts` returned HTTP 500 (`Failed to get alerts`); alert volume is unavailable.
- **Critical:** Price-history data is stale. The latest of 202 returned records is 2026-07-24 20:01 UTC. Do not use it for current price, trend, or recommendation claims.
- **Tracking:** GTM is present on the five checked deployed routes, but signup, watchlist-add, comparison, newsletter, and UTM events could not be verified from source or available reports.
- **Measurement:** Unique visitors, top pages, bounce rate, traffic-source attribution, and comparison-run counts are unavailable.
- **Drip:** Drip stats returned no sent rows; delivery is unverified without mail-provider logs.
