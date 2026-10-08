# TicketScan Analytics Alerts — 2026-10-08

## Critical

- **Conversion tracking is uninstrumented.** GTM loads, but frontend code has no signup, watchlist-add, comparison, newsletter, outbound-click, or UTM events.
- **Product activity is stale.** The newest `/api/admin/activity` record is 2026-10-04 21:07 UTC; no records exist for October 5–8.
- **Price data remains stale.** The newest of 202 price-history records is 2026-07-24 20:01 UTC.
- **`/api/admin/alerts` is failing.** The endpoint returned HTTP 500.

## Reporting gaps

- Unique visitors, traffic sources, top pages, bounce rate, price-comparison volume, and drip-send counts are unavailable.
- `/api/admin/drip-stats` returned an empty sent-stat array while listing 20 pending users.

## Interpretation

Observed signup and watchlist activity is zero for the current and previous day, but the stale activity feed means this should be treated as a telemetry/data-health alert—not a confirmed demand collapse.
