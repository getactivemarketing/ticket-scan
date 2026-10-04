# Analytics Anomaly Alerts — 2026-10-04

1. **Admin alerts endpoint is broken:** `/api/admin/alerts` returned HTTP 500. Investigate before reporting alert volume.
2. **Price data has a hard stop:** the newest returned price-history row is 2026-07-24. Price tracking and alert claims remain prohibited by `marketing-agents/PRODUCT-STATUS.md`.
3. **Conversion tracking is absent:** GTM bootstrap code loads, but signup, watchlist, comparison, and newsletter actions do not emit explicit conversion events.
4. **Drip reporting is empty:** `drip-stats.stats` is empty while 20 users appear pending; delivery status needs a direct database or mail-provider check.
5. **Low recent activity:** 0 signups and 0 watchlist additions on each of 2026-10-03 and 2026-10-04 to the time of the run, below the preceding seven-day averages.
