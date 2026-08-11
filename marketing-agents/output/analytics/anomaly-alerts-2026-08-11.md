## TicketScan Anomaly Alerts — 2026-08-11

### 🚨 High priority

1. **Price tracker stale:** latest price-history record is 2026-07-24 20:01 UTC; there are no records in the 2026-08-11 reporting window.
2. **Alert endpoint failing:** `/api/admin/alerts` returns HTTP 500, so triggered-alert reporting cannot be trusted.
3. **Marketing attribution unavailable:** GTM bootstraps, but explicit conversion and UTM instrumentation is absent from the source audit.

### Watch items

- 1 signup in the rolling 24-hour window versus a 1.14/day prior-seven-day average.
- 1 watchlist add in the rolling 24-hour window versus a 1.00/day prior-seven-day average.
- 0 active target-price alerts in the stats snapshot and 0 recorded drip sends; validate whether this is expected or telemetry failure.
