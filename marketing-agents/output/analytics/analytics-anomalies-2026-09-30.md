# TicketScan Analytics Anomalies — 2026-09-30

1. **Critical:** GTM loads (`GTM-T476F9S4`), but no explicit frontend conversion pushes were found for signup, watchlist add, price comparison, or newsletter subscription. Visitor, source, pageview, and bounce metrics are unavailable.
2. **Critical:** price history is stale. The newest of 50 records is `2026-07-24T20:01:07Z`, despite the documented four-hour tracker.
3. **High:** `/api/admin/alerts` returns HTTP 500 (`Failed to get alerts`), so the reported zero alerts is not independently verifiable.
4. **High:** no returned watchlist item has a target price, leaving the target-price alert path unused.
5. **Medium:** `/api/admin/drip-stats` reports no sent statistics while showing pending users; email delivery cannot be confirmed.
6. **Medium:** current-window activity is zero after 5 signups and 2 watchlist adds in the available seven-day sample; investigate feed freshness versus a real acquisition lull.

Recommended owner order: restore price tracking and alert endpoint, instrument conversion events/UTMs, then reconcile drip delivery.
