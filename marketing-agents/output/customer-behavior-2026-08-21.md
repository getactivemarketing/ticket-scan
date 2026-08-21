# Customer Behavior Analysis — 2026-08-21

**Data quality:** registered-user and watchlist totals are available; anonymous searches, comparison events, sessions, alert delivery/clicks, and email engagement are not.

## Segments

| Segment | Current evidence | Size | Action |
|---|---|---:|---|
| Power users | Prior complete segmentation: 3+ watchlist rows | 14 last verified | Interview; prioritize multi-event history |
| Casual users | 1–2 watchlist rows | Not freshly exposed | Prompt a second event and target price |
| One-time/anonymous | No anonymous ID or return event | N/A | Add privacy-safe session/return tracking |
| Newsletter-only | Four active records; account linkage absent | 4 records, not verified users | Exclude test records; link consent safely |
| New unactivated registrants | Current rolling seven-day cohort | Up to 16; exact activation unavailable | Send first-value checklist within 24h |

## Answers to Required Questions

1. **Signup to first watchlist add:** the last complete cohort analysis found median **0 days**, mean **0.27 days**, and 112/114 first adds within 24 hours. This week cannot be recomputed from available exports.
2. **Registered vs. anonymous popularity:** registered watchlist leaders are Noah Kahan, Flyleaf, World Cup Match 93, and Ariana Grande in the latest result. Anonymous popularity is unavailable because anonymous searches are not stored.
3. **Alert email vs. return visits:** not measurable. There are no validated alert delivery/click or return-session events.
4. **Target-price adoption:** **0% (0/221 rows)**. Treat this as an onboarding/input or data-path failure, not proof of absent demand.
5. **Power-user journey:** observable pattern is signup → same-day watchlist add → multiple rows, often across event dates. Comparison frequency, return cadence, and outbound purchase intent remain unknown.

## Actions

- Add `target_price_set` and a visible saved-state confirmation after every watchlist add.
- Instrument `signup_complete`, `watchlist_add`, `target_price_set`, `compare_view`, `return_session`, `price_alert_sent`, `price_alert_click`, and `outbound_ticket_click`.
- Interview 3–5 power-user proxies and 3 newly registered users with no watchlist item.
- Normalize event identity by name + venue + date while retaining provider IDs as aliases.

