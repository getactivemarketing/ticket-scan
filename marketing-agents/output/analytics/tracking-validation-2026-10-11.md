# Tracking Validation Log — 2026-10-11

The requested `analytics-tracking` skill is not installed in this environment. This fallback validation used live endpoint checks plus source inspection of `web/src`.

## Results

| Check | Result | Evidence / limitation |
|---|---|---|
| GTM loads on app layout | PASS (static) | `web/src/app/layout.tsx` includes GTM container `GTM-T476F9S4` and the noscript iframe. Runtime browser confirmation was not available. |
| Signup conversion event | FAIL / not found | No explicit frontend `dataLayer.push` or event helper was found in `web/src`; registration API activity is not an analytics event report. |
| Watchlist-add conversion event | FAIL / not found | Watchlist UI/API calls exist, but no explicit analytics event dispatch was found in `web/src`. |
| Price-comparison event | FAIL / not found | Compare UI/API calls exist, but no explicit analytics event dispatch was found. Price tracking itself is currently down and must not be presented as operational. |
| Newsletter-subscribe event | FAIL / not found | Newsletter component/API path exists, but no explicit analytics event dispatch was found. |
| UTM capture | NOT VERIFIABLE | No UTM reporting endpoint is exposed by the admin API; no explicit UTM persistence/reporting path was found in the inspected source. |
| Runtime event firing | NOT VERIFIABLE | No browser/GTM preview session or GA4 export is available in the workspace. |
| Admin stats endpoint | PASS | HTTP 200; reports 264 users, 256 watchlist records, 6 active subscribers, 1 favorite. |
| Admin alerts endpoint | FAIL | HTTP 500: `Failed to get alerts`. |
| Admin drip stats endpoint | PASS WITH GAP | HTTP 200, but `stats` is empty; no sent rows are available to validate daily delivery. |
| Price-history freshness | FAIL | HTTP 200, but latest returned record is 2026-07-24 20:01 UTC and response is capped at 50 rows. |

## Immediate follow-up

Add one shared analytics helper that pushes named events for registration success, watchlist add, listing comparison, and newsletter subscription; include UTM parameters in the event payload or a first-party session record; then expose GA4/GTM aggregates (or a privacy-safe internal report) for visitors, sources, pageviews, bounce rate, and conversions. Re-run this validation in a browser/GTM preview session after deployment.
