# Customer Behavior Analysis — July 31, 2026

## Executive readout

TicketScan has a clear activation signal but weak measurement and no functioning alert loop. Of 195 registered users, 114 have a watchlist item and 14 have three or more. The median time from signup to first watchlist add is 0 days; the mean is 0.27 days. This supports a same-session activation strategy.

## Segments

| Segment | Definition used | Size | Share of users | Action |
|---|---|---:|---:|---|
| Power users | 3+ watchlist items | 14 | 7.2% | Interview, invite to beta feedback, show price history |
| Casual users | 1–2 watchlist items | 100 | 51.3% | Prompt target price and second event |
| No-watchlist registrants | 0 watchlist items | 81 | 41.5% | First-watchlist onboarding sequence |
| Newsletter-only | Subscriber with no registered-user match | Not determinable | n/a | Add consent/user identity linkage |
| One-time anonymous visitors | Anonymous search/no return | Not determinable | n/a | Add GA4 user/session and return events |

The casual/power split is database-based and does not prove frequency. Daily return behavior cannot be answered because page views and authenticated sessions are not logged.

## Answers to requested questions

1. **Signup → first watchlist add:** mean 0.27 days, median 0 days; 112 of 114 users with a first add did so within 24 hours. Nine users in the July 24–31 signup cohort added a first item during the reporting window.
2. **Popular events/venues/cities:** music is the strongest category in the watchlist snapshot. Leading records are Harry Styles (19 rows, fragmented across duplicate IDs), Backstreet Boys at Sphere Las Vegas (10), Ariana Grande (8), Noah Kahan (7), and Bruno Mars at MetLife (6). Registered-vs-anonymous comparison is impossible because anonymous behavior is not stored.
3. **Price-alert email vs. return visits:** not measurable. There are no triggered alerts, no alert emails, no email engagement telemetry, and no return-visit events. The only safe conclusion is that the intended correlation cannot occur yet.
4. **Target-price adoption:** 0% — 0 of 198 watchlist items has a target price. This is consistent with the known missing target-price input in the UI.
5. **Power-user journey:** the observable path is signup → first watchlist add on the same day → add multiple event instances. We cannot verify comparison frequency or return cadence. Power users add breadth, but they currently receive no differentiated price-history or alert value.

## Behavioral implications

- The highest-probability activation intervention is immediately after signup: suggest one event, show the comparison result, then ask for a target price.
- The main retention promise is unproven because alerts cannot be armed. Avoid “we’ll alert you” copy until the full path is tested.
- Duplicate event IDs make popularity counts unreliable. Normalize by event name + venue + date, with source IDs retained as aliases.

## Measurement requests

Implement events: `search_submit`, `compare_view`, `signup_complete`, `watchlist_add`, `target_price_set`, `newsletter_subscribe`, `price_alert_sent`, `price_alert_click`, `return_session`, and `outbound_ticket_click`. Attach `user_id` only after consent/authentication; otherwise use an anonymous session ID.
