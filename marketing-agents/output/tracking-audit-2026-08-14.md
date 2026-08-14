# Tracking Audit Findings — 2026-08-14

**Skill note:** `analytics-tracking` was unavailable in this environment. This audit uses source inspection and the latest authenticated admin snapshots.

## Findings

| Check | Result | Evidence / impact |
|---|---|---|
| GTM container | Pass, implementation presence only | `GTM-T476F9S4` loads site-wide from `web/src/app/layout.tsx`; firing is not independently verified |
| Conversion events | Fail | No explicit `dataLayer.push` found for signup, watchlist, compare, newsletter, target-price, or outbound click |
| UTM capture | Fail | No persistence or attributed-signup path found |
| Cross-domain | Unverified | Frontend and API are separate origins; no documented linker or shared attribution key |
| Admin/API reconciliation | Fail | Product totals exist, but visitors/pageviews/funnel are absent and `/api/admin/alerts` fails |
| Price data freshness | Fail/P0 | Latest known row: 2026-07-24 20:01 UTC despite four-hour tracking design |
| Email telemetry | Fail | No reliable provider delivery/open/click event model; drip stats are empty/incomplete |

## Implementation Recommendations

1. Adopt one event taxonomy: `page_view`, `search_submit`, `compare_started`, `compare_completed`, `signup_complete`, `watchlist_add`, `target_price_set`, `newsletter_subscribe`, `price_alert_sent`, `price_alert_click`, `return_session`, `outbound_ticket_click`.
2. Persist first-touch and last-touch `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, and `utm_term` in a consent-aware cookie/session, then attach attribution to signup and watchlist records.
3. Include `event_id`, `anonymous_id`, `user_id` after authentication, page path, referrer, source, campaign, and timestamp in each event.
4. Add daily aggregates for sessions, pageviews, searches, comparisons, conversions, channel, campaign, and landing page, with reconciliation checks against admin totals.
5. Add provider message ID events for sent, delivered, bounced, opened, clicked, unsubscribed, and complaint.
6. Repair `/api/admin/alerts`, restore the tracker, and add regression tests for alert creation, email dispatch, and alert reporting.

## Priority order

**P0:** repair alert endpoint and price tracker.  
**P1:** conversion events, UTMs, and email delivery telemetry.  
**P2:** daily aggregates, cross-domain linker, and dashboard reconciliation.
