# TicketScan Tracking Validation — 2026-08-04

## Result

**Partial pass with critical instrumentation gaps.** GTM container `GTM-T476F9S4` is present in the live homepage HTML and in the shared frontend layout. Static/source checks do not show the required conversion events or UTM persistence logic.

## Checks

| Check | Result | Evidence |
|---|---|---|
| GTM loads on homepage | PASS | `GTM-T476F9S4` found in live HTML |
| GTM loads on dashboard | PASS | Shared `web/src/app/layout.tsx` injects the container for the app; live homepage spot-check confirms container delivery |
| GTM loads on compare | PASS | Shared root layout covers `/compare`; no route-specific layout removes it |
| GTM loads on watchlist | PASS | Shared root layout covers `/watchlist`; no route-specific layout removes it |
| GTM loads on World Cup page | PASS | Shared root layout covers `/world-cup-2026`; no route-specific layout removes it |
| Signup conversion event | FAIL / not found | No `dataLayer.push`, `gtag`, or equivalent conversion call found in frontend source |
| Watchlist-add conversion event | FAIL / not found | `EventCard` calls the API but has no analytics event push |
| Price-comparison conversion event | FAIL / not found | API client has compare calls but no analytics event push |
| Newsletter-subscribe conversion event | FAIL / not found | Newsletter component/API flow has no analytics event push |
| UTM capture/persistence | FAIL / not found | No UTM query parsing, storage, or attribution payload found |
| API alert validation | FAIL | `/api/admin/alerts` returned HTTP 500 |
| Price-tracker freshness | FAIL | Latest `/api/admin/price-history` record: `2026-07-24T20:01:07Z` |

## Immediate actions

1. Add standardized `dataLayer.push` events for `signup`, `watchlist_add`, `price_comparison`, and `newsletter_subscribe`, using event IDs and non-PII context.
2. Capture first-touch and last-touch UTM parameters and persist them through signup/newsletter conversion.
3. Add GA4/GTM reporting or an admin analytics endpoint for visitors, sources, pageviews, engagement/bounce, and comparison completions.
4. Repair `/api/admin/alerts` and verify the four-hour price-tracking cron and database writes.
5. Re-run browser-level event validation after deployment; static HTML confirms container presence only, not runtime firing.

## Skill note

The requested `analytics-tracking` skill was not available in this session. This log is based on direct API checks, frontend source inspection, and live HTML validation.

