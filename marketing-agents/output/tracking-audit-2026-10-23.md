# TicketScan Tracking Audit — 2026-10-23

## Result

**P1: GTM is present, but conversion measurement is not operational.** The deployed site exposes `GTM-T476F9S4`, but source/deployed checks and admin reconciliation do not show a reliable event stream for core conversion boundaries.

## Checks

| Check | Result | Evidence / impact |
|---|---|---|
| GTM container | PASS | Present in the application layout and deployed pages. |
| Signup event | NOT VERIFIABLE | Admin rows exist, but no explicit success event/helper or attribution join is available. |
| Saved-event add | NOT VERIFIABLE | Database rows exist, but no explicit success event/helper is available. |
| Search / comparison event | NOT VERIFIABLE | No queryable event or comparison counter exists. |
| Newsletter event | NOT VERIFIABLE | Subscriber rows exist, but no success event or UTM join is available. |
| Outbound seller click | NOT VERIFIABLE | No event or affiliate-click attribution query is available. |
| UTM capture | NOT FOUND | No explicit persistence path or export exposes source, medium, campaign, or landing page. |
| Cross-domain tracking | NOT VERIFIED | Seller-domain handoff is not instrumented. |
| Admin/API reconciliation | PARTIAL | Users, saved-event rows, and subscribers are queryable; visitors, searches, comparisons, return visits, and email engagement are not. |
| Alert endpoint health | FAIL | `GET /api/admin/alerts` returns HTTP 500. |
| Drip health | FAIL / EMPTY | `drip-stats` reports no sent rows even though pending users exist. |

## Required Implementation

Add a small client-safe typed helper, for example `track(eventName, params)`, that no-ops when `window.dataLayer` is unavailable. Call it only after successful outcomes at:

1. `sign_up_success`;
2. `watchlist_add_success`;
3. `search_submitted` and `comparison_success` if the flow remains part of the product;
4. `newsletter_subscribe_success`;
5. `seller_outbound_click`;
6. `event_viewed` and `session_started` / `session_returned`.

Persist first-touch and last-touch UTM fields in a consent-compliant first-party session layer. Never send raw email addresses or secrets to analytics.

## Verification Plan

- Create matching GTM Custom Event triggers and GA4 tags.
- Use GTM Preview and GA4 DebugView for one controlled test of each event.
- Verify one event per successful action and no duplicate push on React rerender.
- Verify UTM persistence from a tagged URL through signup and newsletter submission.
- Compare event counts to date-bounded first-party rows for a seven-day integrity window.
- Add a health check that fails when GTM is absent, event coverage is zero, or activity is stale for more than 24 hours.

## Priority Fixes

1. **P0:** Add the helper and success events, then validate in production.
2. **P0:** Add a date-bounded first-party event query/API surface for weekly reporting.
3. **P1:** Fix `/api/admin/alerts` and distinguish endpoint failure from a genuine zero count.
4. **P1:** Verify drip SMTP, scheduler, suppression, and send logging before evaluating copy.
5. **P1:** Capture seller outbound clicks with seller, event ID, placement, and consent-safe attribution.

## Guardrail

This audit must not be used to claim that TicketScan currently tracks prices, records price history, sends price alerts, or provides buy/wait/hold recommendations. Those capabilities remain unavailable until the feed and alert path are repaired.

## Method

Repository inspection, deployed-route checks, and live admin API snapshot on 2026-10-23. The requested `analytics-tracking` skill is not installed; this is the documented fallback audit.
