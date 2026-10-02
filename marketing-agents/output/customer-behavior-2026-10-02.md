# Customer Behavior Analysis — 2026-10-02

## Data quality

This analysis uses current registered-user and watchlist tables plus the admin endpoints. Anonymous searches, compare events, sessions, return visits, alert delivery/clicks, and email engagement are not stored or exposed. “Power user” and “casual user” are operational watchlist-row proxies, not engagement or retention measures.

## User segments

| Segment | Definition | Current supportable size | Interpretation / action |
|---|---|---:|---|
| Power users | 3+ watchlist rows | 17 | Interview; understand multi-date and multi-event behavior |
| Casual users | 1–2 watchlist rows | 136 | Prompt a second save and show onsale/presale context |
| One-time anonymous visitors | Searched once, never returned | N/A | Add privacy-safe anonymous/session and return events |
| No-watchlist registrants | Registered with 0 rows | 110 | Improve post-signup activation and first-value guidance |
| Newsletter-only | Active subscriber with no verified user match | 6 records; linkage unavailable | Separate test records and add consent-safe identity linkage |

## Required questions

1. **Average time from signup to first watchlist add:** among 153 users who have ever added an item, mean **0.198 days (~4.75 hours)** and median **0 days**. **151/153 (98.7%)** added within 24 hours. This is all-time and uses first database row timestamps; it does not measure anonymous-to-signup time.

2. **Registered vs. anonymous popularity:** registered demand is observable only through watchlist rows. This week’s additions were Denver Broncos vs. Seattle Seahawks, JOHN SUMMIT – CTRL ESCAPE ARENA TOUR, and Philadelphia Eagles v Jacksonville Jaguars. Anonymous popularity is unavailable because searches are not stored.

3. **Correlation between price-alert emails and return visits:** not measurable. There are zero triggered alerts, no alert-delivery telemetry, no email engagement telemetry, and no return-session events.

4. **Target-price adoption:** **0% (0/255 watchlist rows)** and **0 users**. This is consistent with the current product-status outage and/or missing input path; it is not evidence that users do not want the feature.

5. **Most engaged user journey:** the observable pattern is signup → same-day first watchlist add → multiple event rows, often across dates or events. We cannot verify comparison frequency, daily returns, ticket-outbound clicks, or purchase intent.

## Behavioral implications

- The highest-confidence activation opportunity is immediately after signup: guide the user to one event, show available listing/source links and onsale/presale information, then confirm the save.
- The 110-user no-watchlist segment is the clearest measurable growth surface. It should receive a short, product-status-compliant activation sequence focused on event discovery and onsale information.
- Do not use “active,” “churned,” or “returning” labels until session/last-seen events exist.
- Normalize repeated event records by event name + venue + date while retaining provider IDs as aliases; current popular-event counts can otherwise exaggerate demand.

## Measurement requests

Implement consent-safe events: `search_submit`, `compare_view`, `signup_complete`, `watchlist_add`, `onsale_view`, `newsletter_subscribe`, `return_session`, and `outbound_ticket_click`. Add `target_price_set`, `price_alert_sent`, and `price_alert_click` only when those product flows are operational again. Attach a pseudonymous session ID; attach `user_id` only after authentication and consent requirements are satisfied.

## Interview plan

1. Interview 3–5 users with 3+ watchlist rows: what did they expect after saving, which details made them return, and what would make the saved-event page useful?
2. Interview 3 recent signups with no watchlist row: where did the flow stall, and did they understand what “save” provides today?
3. Ask newsletter-only subscribers how they discovered TicketScan and whether they want event/onsale updates; do not frame the conversation around unavailable price alerts.
