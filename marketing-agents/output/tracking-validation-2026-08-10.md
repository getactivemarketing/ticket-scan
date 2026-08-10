## TicketScan Tracking Validation — 2026-08-10

**Method:** source inspection plus authenticated admin API checks. The requested `analytics-tracking` skill is not installed in this environment.

### Results

| Check | Result | Evidence |
|---|---|---|
| GTM loads site-wide | PASS (source) | `web/src/app/layout.tsx` includes `GTM-T476F9S4`, `gtm.js`, and the noscript iframe in the root layout |
| Signup conversion event | UNVERIFIED / likely missing | No named `dataLayer.push` event found in `web/src`; signup API exists |
| Watchlist-add conversion event | UNVERIFIED / likely missing | `EventCard.tsx` calls the watchlist API but no explicit analytics event was found |
| Price-comparison conversion event | UNVERIFIED / likely missing | No explicit comparison event or `dataLayer.push` found in `web/src` |
| Newsletter conversion event | UNVERIFIED / likely missing | Newsletter component/API exists but no explicit analytics event was found |
| UTM capture | FAIL | No local UTM persistence or attribution fields found |
| Pageviews / bounce rate | UNAVAILABLE | Not exposed by admin API; no analytics export available |
| Admin alert reporting | FAIL | `/api/admin/alerts` returned HTTP failure payload |
| Price-tracking freshness | FAIL | Latest returned record: 2026-07-24 20:01:07 UTC |
| Drip email telemetry | FAIL / gap | `/api/admin/drip-stats` returned an empty sent-statistics array; no delivery/open/click metrics exposed |

### Required follow-ups

1. Repair the four-hour price tracker and `/api/admin/alerts`; verify with a fresh `price_history` row and an alert regression test.
2. Add typed `dataLayer` events for `signup_complete`, `watchlist_add`, `compare_view`, and `newsletter_subscribe`.
3. Persist first-touch and last-touch `utm_source`, `utm_medium`, `utm_campaign`, and landing page through signup/newsletter flows.
4. Connect GA4 reporting or add daily aggregate endpoints for visitors, sessions, pageviews, sources, comparisons, funnel conversions, and bounce rate.
