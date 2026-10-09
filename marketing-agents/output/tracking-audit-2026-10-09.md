# TicketScan Tracking Audit — 2026-10-09

## Overall Result

**P1: GTM is present, but conversion measurement is not operational.** The deployed site exposes the GTM container `GTM-T476F9S4` and initializes `dataLayer`, but source/deployed checks found no custom event pushes for the key conversion boundaries.

## Checks

| Check | Result | Evidence / impact |
|---|---|---|
| GTM container | PASS | Present in root layout and live homepage HTML. |
| Signup event | FAIL | No custom `dataLayer.push`/`gtag` success event in `web/src`; signup counts cannot be tied to sessions. |
| Watchlist-add event | FAIL | Database rows exist, but no frontend conversion event exists. |
| Comparison event | FAIL | Compare UI exists, but no start/result event or counter is queryable. |
| Newsletter event | FAIL | POST path exists, but no success event exists. |
| Outbound seller click | FAIL | No custom outbound-click event found. |
| UTM capture | NOT VERIFIED / apparently absent | No persistence path or analytics export exposes source, medium, campaign, or landing page. |
| Cross-domain tracking | NOT APPLICABLE / not evidenced | Public product is a single primary domain; outbound seller attribution is not instrumented. |
| Admin/API reconciliation | PARTIAL | User/watchlist/newsletter counts are queryable; visitors, comparisons, alerts, and return visits are not. |
| Alert history health | FAIL | `/api/admin/alerts` returns HTTP 500. |

## Required Implementation

Add one small typed client helper, for example `track(eventName, params)`, that no-ops safely when `window.dataLayer` is unavailable. Call it only after successful outcomes at:

1. signup completion;
2. watchlist save completion;
3. comparison request start and successful response;
4. newsletter subscription success;
5. outbound seller-link click.

Persist UTM fields on first landing in a consent-compliant first-party session/local-storage layer, then attach them to signup and newsletter records or a dedicated attribution table. Add date-bounded admin queries for each event class.

## GTM Configuration

Create matching Custom Event triggers and GA4 tags for the five events above. Use stable event names and minimal parameters:

| Event | Suggested parameters |
|---|---|
| `sign_up_success` | method, landing_page, utm_source, utm_medium, utm_campaign |
| `watchlist_add_success` | event_id, venue, city, source_surface |
| `comparison_success` | event_id/search context, source_surface, result_count |
| `newsletter_subscribe_success` | source, landing_page, UTM fields |
| `seller_outbound_click` | seller, event_id, placement |

Do not send raw email addresses or secrets to analytics.

## Verification Plan

- Use GTM Preview on signup, watchlist, compare, newsletter, and event seller-link flows.
- Verify one browser event per successful action and no duplicate push on rerender.
- Verify UTM persistence from a tagged URL through signup/newsletter.
- Compare event counts against date-bounded first-party records for a controlled test window.
- Add a daily health check that fails when GTM is absent, event coverage is zero, or activity is stale for more than 24 hours.

## Product-Status Guardrail

This audit must not be used to claim that TicketScan currently tracks prices, records price history, sends price alerts, or provides buy/wait/hold recommendations. Those capabilities remain unavailable until the price feed and alert path are repaired.

