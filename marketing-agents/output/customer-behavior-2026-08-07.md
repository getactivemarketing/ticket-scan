# Customer Behavior Analysis — 2026-08-07

## Readout

TicketScan has a measurable activation proxy but not measurable engagement. The latest verified user snapshot is 200 registered users, 203 watchlist rows, and 4 active newsletter subscribers. A prior full segmentation snapshot counted 117 users with a watchlist and 81 without one; daily return behavior cannot be calculated because login/session events are not stored.

## Segments

| Segment | Operational definition | Latest supportable size | Action |
|---|---|---:|---|
| Power users | 3+ watchlist rows | 14 in Jul 31 snapshot | Interview; show normalized multi-event views and history |
| Casual users | 1–2 watchlist rows | 100 in Jul 31 snapshot | Ask for target price and a second event |
| One-time/anonymous | Anonymous search with no return | N/A | Add anonymous session and return events |
| No-watchlist registrants | Registered with 0 rows | 81 in Jul 31 snapshot | Post-signup “Find an event” activation sequence |
| Newsletter-only | Subscriber with no user match | N/A | Link consent and account identity safely |

## Questions Answered

1. **Signup → first watchlist add:** the last complete cohort analysis found a median of 0 days and mean of 0.27 days; 112 of 114 first adds occurred within 24 hours. Recompute from a fresh full export after the weekly snapshot endpoint exists.
2. **Registered vs anonymous popularity:** registered watchlist signals favor Harry Styles, Backstreet Boys, Ariana Grande, Noah Kahan, and Bruno Mars. Anonymous popularity is not stored, so the comparison is unavailable.
3. **Alert email vs return visit:** not measurable. No validated alert rows, delivery/click data, or return-session events exist.
4. **Target-price adoption:** 0% (0/203 rows). This is likely a product/input gap, not evidence that users do not want alerts.
5. **Power-user journey:** observable path is same-day signup → first watchlist add → multiple event rows, often across tour dates. Comparison frequency, return cadence, and downstream purchase intent are unknown.

## Actions

- Add target price during watchlist creation and expose a clear saved state.
- Instrument `signup_complete`, `watchlist_add`, `target_price_set`, `compare_view`, `return_session`, `price_alert_sent`, `price_alert_click`, and `outbound_ticket_click`.
- Normalize event identity by event name + venue + date while retaining source IDs as aliases.
- Add `last_seen_at` or privacy-safe activity events; do not label age-based watchlist proxies as churn.

