# TicketScan Anomaly Alerts — 2026-08-05

## Severity: Critical

- Required conversion events are not instrumented in frontend source: signup, watchlist add, price comparison, and newsletter subscription.
- UTM parameters are not captured or persisted, so channel performance cannot be trusted.

## Severity: High

- Price history is stale: latest observed record is `2026-07-24T20:01:07.151Z`, despite the expected four-hour tracker cadence.
- `/api/admin/alerts` returns HTTP 500, preventing validation of fired alerts.
- Drip stats show zero sent rows and 20 pending users; the campaign appears inactive.
- Visitor, traffic-source, pageview, bounce-rate, and comparison-completion metrics are not available.

## Severity: Watch

- One watchlist add in the run window is 75% above the seven-day average of 0.57, but the absolute volume is too small to treat as a meaningful surge.

