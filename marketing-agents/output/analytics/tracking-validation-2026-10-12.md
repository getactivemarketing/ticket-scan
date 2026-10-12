# Tracking Validation Log — 2026-10-12

The requested `analytics-tracking` skill is not installed in this environment. This fallback used live admin endpoint checks, live HTML checks on five public routes, and source inspection of `web/src`.

## Results

| Check | Result | Evidence / limitation |
|---|---|---|
| GTM loads on app layout | PASS | `web/src/app/layout.tsx` includes container `GTM-T476F9S4` and the noscript iframe. |
| GTM present on live homepage | PASS | `https://www.ticketscan.io/` returned the container four times. |
| GTM present on live dashboard | PASS | `/dashboard` returned the container four times. |
| GTM present on live compare page | PASS | `/compare` returned the container four times. |
| GTM present on live venue page | PASS | `/venues/metlife-stadium` returned the container four times. |
| GTM present on live World Cup page | PASS | `/world-cup-2026` returned the container four times. |
| Signup conversion event | FAIL / not found | No explicit frontend `dataLayer.push` or analytics helper was found in `web/src`; one signup appears in the admin data, but that is not an analytics event report. |
| Watchlist-add conversion event | FAIL / not found | Watchlist UI/API calls exist, but no explicit analytics event dispatch was found. |
| Price-comparison event | FAIL / not found | Compare UI/API calls exist, but no explicit analytics event dispatch was found. Price tracking remains down and must not be presented as operational. |
| Newsletter-subscribe event | FAIL / not found | Newsletter form/API path exists, but no explicit analytics event dispatch was found. |
| Outbound ticket-click event | FAIL / not found | No explicit outbound-click event dispatch was found. |
| UTM capture | NOT VERIFIABLE | No UTM reporting endpoint or explicit first-party persistence path was found in the inspected source. |
| Runtime event firing | NOT VERIFIABLE | No browser/GTM Preview session or GA4 export is available in the workspace. |
| Admin stats endpoint | PASS | HTTP 200; reports 265 users, 256 watchlist records, 7 active subscribers, 1 favorite. |
| Admin alerts endpoint | FAIL | HTTP 500: `Failed to get alerts`. |
| Admin drip stats | PASS WITH GAP | HTTP 200, but `stats` is empty and 20 users are pending; sends cannot be verified. |
| Price-history freshness | FAIL | HTTP 200, 202 records returned, newest record is 2026-07-24 20:01 UTC. |

## Immediate Follow-up

Add one shared analytics helper that dispatches named events for registration success, watchlist add, listing comparison, newsletter subscription, and outbound seller clicks. Capture UTM parameters in the event payload or a first-party session record, expose privacy-safe aggregates for visitors/sources/pageviews/bounce/conversions, then re-run this check in a browser/GTM Preview session after deployment.

