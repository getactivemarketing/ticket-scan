# Tracking Audit Findings — 2026-08-07

**Skill note:** `analytics-tracking` was unavailable. Audit uses source inspection, live checks, and authenticated admin snapshots.

## Findings

| Check | Result | Evidence / impact |
|---|---|---|
| GTM container | Pass | `GTM-T476F9S4` is loaded from `web/src/app/layout.tsx` site-wide |
| Conversion events | Fail | No explicit `dataLayer.push` for signup, watchlist add, compare, or newsletter success |
| UTM capture | Fail | No persistence or attributed-signup path found |
| Cross-domain | Unverified | Frontend/API are separate origins; no documented linker or shared attribution key |
| Admin/API reconciliation | Fail | Admin has signup/watchlist totals, but no visitor/pageview funnel; alerts endpoint is HTTP 500 |
| Price data freshness | Fail | Latest known price row is 2026-07-24 20:01:07 UTC |
| Drip telemetry | Fail | Empty sent statistics; pending list capped at 20; no delivery/open/click data |

## Implementation Recommendations

1. Define a single event taxonomy: `search_submit`, `compare_view`, `signup_complete`, `watchlist_add`, `target_price_set`, `newsletter_subscribe`, `price_alert_sent`, `price_alert_click`, `return_session`, `outbound_ticket_click`.
2. Persist first-touch and last-touch UTMs in a consent-aware cookie/session and attach attribution to signup/watchlist records.
3. Add `event_id`, `anonymous_id`, `user_id` after authentication, page path, referrer, source, campaign, and timestamp to every event.
4. Add daily aggregate tables/endpoints for users, sessions, pageviews, searches, compares, conversions, channel, campaign, and landing page.
5. Add a provider-backed email event table keyed by message ID (`sent`, `delivered`, `bounced`, `opened`, `clicked`, `unsubscribed`).
6. Repair `/api/admin/alerts`, add regression coverage for alert creation and email dispatch, and restore the four-hour price tracker before reporting price movement.

## Priority Order

**P0:** alert endpoint + price tracker; **P1:** conversion events + UTMs; **P1:** email delivery events; **P2:** daily aggregates and cross-domain linker validation.

