## TicketScan Tracking Validation — 2026-08-11

**Method:** source inspection plus authenticated live admin API checks. The requested `analytics-tracking` skill is not installed in this environment.

| Check | Result | Evidence |
|---|---|---|
| GTM loads site-wide | PASS | `web/src/app/layout.tsx` includes `GTM-T476F9S4`, async `gtm.js`, and the noscript iframe in the root layout |
| Signup conversion event | UNVERIFIED / likely missing | Signup flow/API exists, but no named `dataLayer.push` event was found in `web/src` |
| Watchlist-add conversion event | UNVERIFIED / likely missing | Watchlist API is called from the UI, but no explicit analytics event was found |
| Price-comparison conversion event | UNVERIFIED / likely missing | No explicit comparison event or `dataLayer.push` was found |
| Newsletter conversion event | UNVERIFIED / likely missing | Newsletter component/API exists, but no explicit analytics event was found |
| GTM on representative pages | PASS (source) | All App Router pages inherit the root layout |
| UTM capture | FAIL | No local UTM persistence or attribution fields found |
| Unique visitors/pageviews/bounce | UNAVAILABLE | No GA4 export or admin endpoint is wired into this reporting workflow |
| Admin alerts endpoint | FAIL | HTTP 500: `Failed to get alerts` |
| Price-tracking freshness | FAIL | Latest `/api/admin/price-history` record: 2026-07-24 20:01:07 UTC |
| Drip email telemetry | FAIL / gap | Empty sent-statistics array; delivery/open/click data is not exposed |

### Required follow-ups

1. Repair the four-hour price tracker and `/api/admin/alerts`; verify with a fresh `price_history` row and alert regression test.
2. Add typed `dataLayer` events for `signup_complete`, `watchlist_add`, `compare_view`, and `newsletter_subscribe`.
3. Persist first-touch and last-touch `utm_source`, `utm_medium`, `utm_campaign`, and landing page.
4. Connect GA4 reporting or add daily aggregate endpoints for visitors, sessions, pageviews, sources, comparisons, funnel conversions, and bounce rate.
5. Add provider-backed email delivery events keyed by message ID.
