# TicketScan Tracking Audit — 2026-10-16

## Result

**P1: GTM loads, but conversion measurement is not operationally verifiable.** The deployed site exposes container `GTM-T476F9S4` and initializes `dataLayer` on sampled routes. Repository inspection found no explicit typed analytics helper or custom `dataLayer.push` for the core conversion boundaries.

## Checks

| Check | Result | Evidence / impact |
|---|---|---|
| GTM container | PASS | Present in root layout and sampled deployed HTML for `/`, `/dashboard`, `/compare`, and `/watchlist`. |
| Signup event | NOT VERIFIABLE | Live admin data records signups, but no explicit success event/helper was found; session attribution is impossible. |
| Watchlist-add event | NOT VERIFIABLE | Database rows exist, but no explicit success event/helper was found. |
| Comparison event | NOT VERIFIABLE | No queryable comparison counter or event export; price-tracking features remain excluded from public claims. |
| Newsletter event | NOT VERIFIABLE | Subscriber rows exist, but no explicit success event/helper was found. |
| Outbound seller click | NOT VERIFIABLE | No event or affiliate-click attribution query is available. |
| UTM capture | FAIL / NOT FOUND | No explicit UTM parsing, persistence, or forwarding was found in the inspected frontend. |
| Cross-domain tracking | NOT VERIFIED | Seller-domain handoff is not instrumented; no cross-domain attribution result is available. |
| Admin/API reconciliation | PARTIAL | Users, watchlist rows, and subscribers are queryable; visitors, searches, comparisons, return visits, and email engagement are not. |
| Alert endpoint health | FAIL | `GET /api/admin/alerts` returns HTTP 500. |
| Newsletter route | FAIL / CONFIRM INTENT | Deployed `/newsletter` returns HTTP 404; root layout still loads GTM on the error response. |

## Required Implementation

Add one small client-safe helper, for example `track(eventName, params)`, that no-ops when `window.dataLayer` is unavailable. Call it only after successful outcomes at:

1. signup completion: `sign_up_success`;
2. watchlist save completion: `watchlist_add_success`;
3. comparison initiation/result if the flow remains part of the product: `comparison_started` / `comparison_success`;
4. newsletter subscription success: `newsletter_subscribe_success`;
5. outbound seller-link click: `seller_outbound_click`.

Persist first-touch and last-touch UTM fields in a consent-compliant first-party session layer, then attach them to event payloads and/or first-party conversion records. Never send raw email addresses or secrets to analytics.

## Event Parameters

| Event | Suggested parameters |
|---|---|
| `sign_up_success` | method, landing_page, utm_source, utm_medium, utm_campaign |
| `watchlist_add_success` | event_id, venue, city, source_surface |
| `comparison_success` | event/search context, source_surface, result_count |
| `newsletter_subscribe_success` | source, landing_page, UTM fields |
| `seller_outbound_click` | seller, event_id, placement |

## GTM / GA4 Verification Plan

- Create matching Custom Event triggers and GA4 tags.
- Use GTM Preview and GA4 DebugView for one controlled test of each event.
- Verify no duplicate push on React rerender and no event before the backend success response.
- Verify a tagged landing URL carries UTM fields through signup and newsletter submission.
- Compare event counts to date-bounded first-party rows for a seven-day integrity window.
- Add a health check that fails when GTM is absent, event coverage is zero, or activity is stale for more than 24 hours.

## Priority Fixes

1. **P0:** Add the typed helper and five success events, then validate in production.
2. **P0:** Add a date-bounded first-party event query/API surface for weekly reporting.
3. **P1:** Fix `/api/admin/alerts` and separate alert-health status from the zero count returned by `/api/admin/stats`.
4. **P1:** Verify drip sender, SMTP, suppression, and send logging before evaluating email performance.
5. **P1:** Resolve `/newsletter` 404 or remove the route reference if newsletter signup is intentionally footer/component-only.

## Guardrail

This audit must not be used to claim that TicketScan currently tracks prices, records price history, sends price alerts, or provides buy/wait/hold recommendations. Those capabilities remain unavailable until the feed and alert path are repaired.

## Method

Repository inspection plus deployed route smoke checks and the live admin API snapshot on 2026-10-16. The requested `analytics-tracking` skill is not installed in this session; this is the documented fallback audit.
