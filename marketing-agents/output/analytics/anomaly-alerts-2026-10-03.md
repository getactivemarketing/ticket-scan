# TicketScan Analytics Anomaly Alerts — 2026-10-03

## Critical

- **Price ingestion remains down/stale.** `/api/admin/price-history` contains 50 records, with the latest at 2026-07-24 20:01:07 UTC. The documented four-hour tracker cadence is not producing current data.
- **Alerts detail endpoint is broken.** `/api/admin/alerts` returns `Failed to get alerts`, so the reported zero alert count cannot be independently verified.

## High

- **Conversion tracking is incomplete.** GTM loads, but the frontend has no explicit events for signup, watchlist add, comparison, or newsletter subscription.
- **Attribution and traffic reporting are unavailable.** No visitor, source, UTM, pageview, bounce, or comparison-event data is queryable through the supplied admin endpoints.

## Medium

- **Drip reporting is empty.** `/api/admin/drip-stats` reports no sent statistics, while pending users have `last_email_sent: 0`.
- **Popular-events ranking needs cleanup.** Results are tied at 2 watches and include event dates already past the reporting date; add an upcoming filter and document whether the ranking is per performance or normalized event.
- **Activation is soft.** Latest window: 1 signup, 0 watchlist adds, 0 newsletter subscriptions. Watchlist adds are 100% below the seven-day average, but the average is only 0.43/day.

