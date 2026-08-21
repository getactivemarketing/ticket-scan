## TicketScan Anomaly Alerts — 2026-08-21

Severity: **High**

1. **Conversion tracking is not verifiable.** GTM is present, but no explicit dataLayer/gtag conversion events were found for signup, watchlist add, price comparison, or newsletter subscription. Campaign and CRO decisions should pause until these are instrumented and tested.
2. **Price tracking appears stale.** The latest record from `/api/admin/price-history` is 2026-07-24 20:01 UTC, while the platform has 221 watchlist items. Investigate the price-tracking cron, provider failures, and retention/query behavior.
3. **Drip sends are not reported.** `/api/admin/drip-stats` returned no sent-stat rows even though users are reaching Day 3 and Day 7 thresholds. Verify scheduler execution, SMTP delivery, and insert logging.
4. **Alert funnel is empty.** Production totals show zero active target-price alerts and zero triggered alerts. Confirm whether target prices are being set and whether the alert job has run successfully.

No destructive action or external post was taken.
