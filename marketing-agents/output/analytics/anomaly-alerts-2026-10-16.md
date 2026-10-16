## TicketScan Anomaly Alerts — 2026-10-16

Severity: high

- **Price-history freshness:** newest record is 2026-07-24 20:01 UTC; expanded admin query returned 202 rows, all from Ticketmaster and one event.
- **Alert endpoint failure:** `GET /api/admin/alerts` returned an application error. `/api/admin/stats` reports zero triggered alerts, but the discrepancy requires backend investigation.
- **Drip delivery gap:** drip statistics are empty while pending users include accounts past scheduled send days. Verify the cron, SMTP configuration, and `drip_emails_sent` writes before sending any campaign claims.
- **Analytics attribution gap:** GTM loads on the main tested pages, but signup, watchlist, comparison, newsletter, and UTM telemetry are not explicitly verifiable from the deployed page/source checks.
- **Broken route:** `/newsletter` returned 404 during the deployed smoke check.

Recommended owners: backend for alerts/price/drip; frontend/analytics for event and UTM instrumentation; web routing for `/newsletter`.
