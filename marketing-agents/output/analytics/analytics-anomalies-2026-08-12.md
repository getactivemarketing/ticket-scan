## TicketScan Analytics Anomaly Alerts — 2026-08-12

### Immediate action required

1. Investigate the price-tracking cron/database write path. Last recorded price snapshot: **2026-07-24 20:01 UTC**.
2. Fix `/api/admin/alerts`, currently returning **HTTP 500**.
3. Confirm drip cron execution and email transport; the stats array is empty despite eligible users.
4. Implement and test explicit GTM conversion events; current source inspection found only the container bootstrap.

### Monitoring limitations

Visitor counts, pageviews, bounce rate, traffic sources, UTM attribution, and comparison counts are not available from the supplied admin endpoints. These should be treated as data gaps, not zero performance.

