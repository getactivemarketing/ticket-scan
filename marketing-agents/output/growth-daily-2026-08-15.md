# Growth Daily — 2026-08-15

Source: live production admin API queried 2026-08-15. Counts use the UTC trailing-7-day boundary `2026-08-08T00:00:00Z`; total percentages use 215 registered users. The API exposes signup and watchlist data, but not last visit, alert clicks, or unsubscribe event history.

## User Health

| Segment | Count | % of Total | vs Yesterday |
|---|---:|---:|---|
| New (last 7 days) | 15 | 7.0% | +3 users vs 2026-08-14 snapshot (12) |
| Activated (has watchlist) | 126 | 58.6% | +2 users vs prior snapshot (124) |
| Active (visited in 7 days) | N/A | N/A | Not measurable: no login/session timestamp |
| At-risk (no visit 7–14d) | N/A | N/A | Not measurable |
| Churned (no visit 14d+) | N/A | N/A | Not measurable |

Additional counters: 214 total watchlist items, 0 active target-price alerts, 4 active newsletter subscribers, and 0 triggered alerts reported by `/api/admin/stats`.

## Activation Gap

- **8** users signed up in the last 7 days with 0 watchlist items (**53.3%** of the new cohort).
- **7 of 15** new users activated (46.7%). The prior report’s cohort was 5/12 activated; today’s cohort is larger and currently lower by 19.9 percentage points.
- Reasons are not determinable. CRO hypotheses: no relevant event found, unclear watchlist value, or signup-to-first-watch friction. These are hypotheses, not observed reasons.

## Churn Signals

- Unsubscribes in the last 24 hours: **0 currently inactive records observed**. This is not a complete event count; `/api/admin/newsletter` exposes current state only and all 4 records are active.
- Users entering “at-risk” today: **N/A**. No `last_login`, `last_seen_at`, or equivalent visit field is exposed.
- Alert-fatigue candidates: **N/A**. `/api/admin/alerts` returns HTTP 500 (`Failed to get alerts`), and no click/open telemetry exists. Do not interpret the stats endpoint’s zero as proof that no alerts were delivered.

## Actions Triggered

- Win-back emails queued: **0**. No production churn-email queue/send endpoint exists, and reliable recipient eligibility cannot be established.
- Re-engagement nudges sent: **0**.
- Tiered drafts are prepared in `churn-interventions-2026-08-15.md`; they are not sent.

## Psychology Optimization

See `psychology-optimization-2026-08-15.md`.

## Handoffs

- **CRO Agent (Agent 6):** 15 new users, 7 activated, 8 unactivated. Test the post-signup progress indicator and one-primary-CTA empty state described in the psychology handoff.
- **Email Agent (Agent 5):** Use the intervention drafts only after adding last-visit, verified price movement, consent/suppression, and delivery/click tracking. Do not send a generic win-back blast.

## Instrumentation Blockers

1. Add privacy-conscious `last_seen_at` or equivalent authenticated activity timestamp.
2. Repair `/api/admin/alerts` schema drift; it is currently HTTP 500.
3. Add alert delivery, click, unsubscribe, bounce, and suppression event records.
4. Add an idempotent churn-email queue with campaign, recipient, eligibility, suppression, and audit fields.

The requested `churn-prevention` and `marketing-psychology` skills were unavailable; the specified tiering and commitment/consistency framework were applied directly.
