## TicketScan Tracking Validation — 2026-08-06

### Checks

| Check | Result | Evidence |
|---|---|---|
| GTM loads on site | PASS (static/rendered presence) | `web/src/app/layout.tsx` includes `GTM-T476F9S4`; homepage HTML includes the GTM script and noscript iframe. |
| Signup event | PARTIAL | Signup activity is present in `/api/admin/activity` (2 in the window), but no explicit frontend `dataLayer.push` conversion event was found. |
| Watchlist-add event | PARTIAL | Watchlist activity is present (2 in the window), but no explicit frontend `dataLayer.push` conversion event was found. |
| Price-comparison event | FAIL / UNVERIFIABLE | No comparison event appears in the activity feed or frontend event instrumentation search. |
| Newsletter-subscribe event | FAIL / UNVERIFIABLE | Newsletter endpoint has subscribers, but no conversion event appears in frontend instrumentation. |
| UTM capture | FAIL / UNVERIFIABLE | No UTM capture/persistence or source reporting was found in the checked frontend/API code. |
| New-page coverage | PARTIAL | Root layout places GTM site-wide; event-level page/conversion coverage cannot be confirmed. |
| Alert endpoint | FAIL | `/api/admin/alerts` returned `Failed to get alerts`. |
| Price-tracking freshness | FAIL | Latest `/api/admin/price-history` record is 2026-07-24 20:01 UTC. |

### Recommended fixes

1. Define and push named events for `signup`, `watchlist_add`, `price_comparison`, and `newsletter_subscribe`, including event IDs and UTM context where applicable.
2. Add a durable UTM/session attribution path and an admin aggregation endpoint for visitors, sources, pages, bounce, and conversions.
3. Repair `/api/admin/alerts` and investigate why price history stopped updating after July 24.
