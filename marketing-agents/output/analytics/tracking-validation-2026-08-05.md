# TicketScan Tracking Validation — 2026-08-05

## Result

**Partial pass with critical instrumentation gaps.** The live production site delivered GTM container `GTM-T476F9S4` on every sampled route, but source inspection found none of the required conversion events or UTM persistence logic. The requested `analytics-tracking` skill was not available in this session; this validation used direct live HTTP checks and repository inspection.

## Checks

| Check | Result | Evidence |
|---|---|---|
| GTM loads on homepage | PASS | `https://www.ticketscan.io/` returned HTTP 200 and contained `GTM-T476F9S4` |
| GTM loads on dashboard | PASS | `/dashboard` returned 200 and contained the container |
| GTM loads on compare | PASS | `/compare` returned 200 and contained the container |
| GTM loads on watchlist | PASS | `/watchlist` returned 200 and contained the container |
| GTM loads on World Cup page | PASS | `/world-cup-2026` returned 200 and contained the container |
| GTM loads on register | PASS | `/register` returned 200 and contained the container |
| GTM loads on blog | PASS | `/blog` returned 200 and contained the container |
| Signup conversion event | FAIL / not found | No `dataLayer.push`, `gtag`, or equivalent conversion call found in frontend source |
| Watchlist-add conversion event | FAIL / not found | `EventCard` calls the API but emits no analytics event |
| Price-comparison conversion event | FAIL / not found | Compare API flow has no analytics event emission |
| Newsletter-subscribe conversion event | FAIL / not found | `NewsletterSignup` posts successfully but emits no analytics event |
| UTM capture/persistence | FAIL / not found | No UTM query parsing, storage, or attribution payload found |
| API alert validation | FAIL | `/api/admin/alerts` returned HTTP 500 |
| Price-tracker freshness | FAIL | Latest `/api/admin/price-history` record: `2026-07-24T20:01:07.151Z` |

## Immediate actions

1. Add standardized `dataLayer.push` events for `signup`, `watchlist_add`, `price_comparison`, and `newsletter_subscribe`, with non-PII context.
2. Capture first-touch and last-touch UTM parameters and persist them through signup and newsletter conversion.
3. Add GA4/GTM reporting or an admin analytics endpoint for visitors, sources, pageviews, engagement/bounce, and comparison completions.
4. Repair `/api/admin/alerts` and verify the four-hour price-tracking cron and database writes.
5. Re-run browser-level event validation after deployment; container presence alone does not prove runtime event firing.

