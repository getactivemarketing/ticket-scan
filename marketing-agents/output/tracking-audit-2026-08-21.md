# Tracking Audit Findings — 2026-08-21

**Skill note:** `analytics-tracking` was unavailable. This audit uses source inspection, live-route validation, and the production dashboard snapshot.

## Findings

| Check | Result | Evidence / impact |
|---|---|---|
| GTM container | Pass for presence | `GTM-T476F9S4` is in the shared layout and sampled public routes |
| Conversion events | Fail/unverified | No explicit `dataLayer.push`/`gtag` found for signup, watchlist, compare, newsletter, target price, or outbound click |
| UTM consistency | Fail/unverified | No persistence or attributed signup path found |
| Cross-domain tracking | Unverified | Frontend and API use separate origins; linker/shared attribution key is undocumented |
| GTM vs admin reconciliation | Fail | Visitors/pageviews/funnel are absent; alert detail endpoint fails |
| Price data freshness | Critical fail | Latest known price row: 2026-07-24 20:01 UTC |
| Email telemetry | Fail | No provider delivery/open/click/bounce model; drip sent rows are empty |

## Implementation Recommendations

1. Define and fire: `page_view`, `search_submit`, `compare_started`, `compare_completed`, `signup_complete`, `watchlist_add`, `target_price_set`, `newsletter_subscribe`, `price_alert_sent`, `price_alert_click`, `return_session`, `outbound_ticket_click`.
2. Persist consent-aware first/last-touch `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, and `utm_term`.
3. Include `anonymous_id`, `user_id` after auth, page path, referrer, event ID, and timestamp.
4. Add daily aggregates and reconciliation checks for sessions, searches, comparisons, signups, watchlist adds, and channels.
5. Add email provider message IDs for sent, delivered, bounced, opened, clicked, complained, and unsubscribed.
6. Repair `/api/admin/alerts` and the tracker; add regression tests for tracking, alert creation, dispatch, and reporting.

## Priority

**P0:** restore price tracking and alert reporting.  
**P1:** instrument conversions, UTMs, and email delivery.  
**P2:** daily aggregates, cross-domain linker, and dashboard reconciliation.

