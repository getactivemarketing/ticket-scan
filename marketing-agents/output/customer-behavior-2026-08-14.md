# Customer Behavior Analysis — 2026-08-14

**Data quality:** user and watchlist timestamps are available; anonymous search, comparison, login/session, alert-click, and email-delivery events are not. Findings distinguish observed facts from hypotheses.

## Segments

| Segment | Current evidence | Action |
|---|---|---|
| Power users | 14-user proxy with 3+ watchlist rows in the latest segmentation | Interview; prioritize multi-event views and price history |
| Casual users | 1–2 watchlist rows; current count not freshly exposed | Ask for a target price and second tracked event |
| One-time/anonymous | Not measurable; no anonymous identity or return event | Add privacy-safe anonymous/session IDs |
| Newsletter-only | 4 active subscribers; account linkage and consent quality need review | Exclude test records; link consent to account safely |
| No-watchlist registrants | 88 in the latest adjacent snapshot; 7 of 12 new users are currently unactivated | Run first-value checklist and 24-hour reminder |

## Questions Answered

1. **Signup to first watchlist add:** prior complete cohort analysis found median **0 days** and mean **0.27 days**, with 112/114 first adds within 24 hours. No fresh complete cohort export is available; current 5/12 new-cohort activation is the reliable directional signal.
2. **Registered vs. anonymous popularity:** registered demand clusters around Harry Styles, Backstreet Boys, Ariana Grande, Noah Kahan, and Bruno Mars. Anonymous popularity is unavailable because searches are not stored.
3. **Alert emails and return visits:** not measurable. No validated alert delivery/click or return-session events exist.
4. **Target-price adoption:** **0% (0/209 watchlist rows)** in the latest snapshot. This likely reflects a missing/unclear input path, not a proven lack of demand.
5. **Power-user journey:** the observable path is signup → same-day first watchlist add → multiple event rows, often across tour dates. Comparison frequency, return cadence, and outbound purchase intent are unknown.

## Strategic Readout

The highest-value behavior is not merely adding an event; it is completing the alert setup. The activation funnel currently stops at watchlist creation. Make target price a first-class step, then measure whether power users return after a price observation or email.

## Actions

- Add `target_price_set` during or immediately after watchlist creation with a visible saved state.
- Instrument `signup_complete`, `first_search`, `watchlist_add`, `target_price_set`, `compare_view`, `return_session`, `price_alert_sent`, `price_alert_click`, and `outbound_ticket_click`.
- Add `last_seen_at` or privacy-safe activity events before labeling users dormant/churned.
- Interview 3–5 power-user proxies and 3 new unactivated users; ask what they expected after signup and why they did or did not set a price.
