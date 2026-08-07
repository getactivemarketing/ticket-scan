## TicketScan Tracking Validation — 2026-08-07

The requested `analytics-tracking` skill is not installed in this session. This validation uses direct production checks, source inspection, and authenticated admin endpoint checks instead.

### Checks

| Check | Result | Evidence |
|---|---|---|
| GTM loads on site | PASS (static/live presence) | `web/src/app/layout.tsx` includes `GTM-T476F9S4`; live homepage, `/compare`, `/register`, and `/watchlist` HTML each contains the container. |
| Signup event | PARTIAL | Backend activity exposes signup records, but no explicit frontend `dataLayer.push` conversion event was found. |
| Watchlist-add event | PARTIAL | Backend activity exposes watchlist records, but no explicit frontend conversion event was found. |
| Price-comparison event | FAIL / UNVERIFIABLE | No comparison event appears in the activity feed or frontend instrumentation search. |
| Newsletter-subscribe event | FAIL / UNVERIFIABLE | Newsletter endpoint has 4 active subscribers, but no frontend conversion event was found. |
| UTM capture | FAIL / UNVERIFIABLE | No UTM capture, persistence, or source-reporting path was found in the checked frontend/API code. |
| New-page coverage | PASS for container / PARTIAL for events | Root layout places GTM site-wide; named conversion-event coverage cannot be confirmed. |
| Alert endpoint | FAIL | `/api/admin/alerts` returned HTTP 500 with `{ success: false, error: "Failed to get alerts" }`. |
| Price-tracking freshness | FAIL | `/api/admin/price-history?limit=10000` reports 202 records; newest is `2026-07-24T20:01:07Z`. |
| Drip send reporting | FAIL / GAP | `/api/admin/drip-stats` returned an empty sent-statistics array and 20 pending users. |

### Recommended fixes

1. Add named `dataLayer` events for `signup`, `watchlist_add`, `price_comparison`, and `newsletter_subscribe`, with event IDs and persisted UTM context.
2. Add an analytics aggregation endpoint for visitors, sources, pages, bounce, comparisons, and conversions.
3. Repair `/api/admin/alerts` and investigate the price-tracking scheduler/API failure after July 24.
4. Verify the drip scheduler and send log before using lifecycle performance in campaign decisions.
