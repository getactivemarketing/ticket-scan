## TicketScan Anomaly Alerts — 2026-08-15

- **Critical:** Price history has no record newer than 2026-07-24 20:01 UTC; the expected four-hour tracker appears stalled.
- **High:** `/api/admin/alerts` returns HTTP 500, preventing independent validation of fired alerts.
- **High:** No explicit GTM conversion events or UTM capture were found in the frontend source.
- **Medium:** 3 signups in 24h vs. 1.9/day seven-day average.
- **Medium:** 5 watchlist adds in 24h vs. 0.7/day seven-day average; review for bot/duplicate activity.

See [the daily dashboard](analytics-daily-2026-08-15.md) and [tracking validation log](tracking-validation-2026-08-15.md) for evidence and remediation notes.
