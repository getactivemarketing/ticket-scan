## Win-back email handoff — 2026-10-11

No recipients were selected and no messages were sent. Visit-level churn cannot be computed from the current admin API. Use the Tier 3 draft in [churn-interventions-2026-10-11.md](churn-interventions-2026-10-11.md) only after `last_seen` or equivalent activity data, consent state, and suppression checks are available.

Recommended audience rule:

`last_seen <= now - 14 days` AND `has_saved_event = true` AND `is_subscribed = true` AND `not_contacted_in_30_days`

Do not substitute account creation date for `last_seen`; that would misclassify users and create avoidable spam risk.

Suggested value proposition: review saved events, upcoming onsale/presale timing, venue guides, and outbound buying links. Do not mention price tracking, price history, price changes, alerts, or buy/wait recommendations.
