# Growth Daily — 2026-08-23

> Live audit against the production admin API at 2026-08-23 11:00 UTC. The API exposes signup and watchlist counts, but not login/visit recency, alert delivery/click telemetry, or a reliable unsubscribe event stream. Unsupported metrics are marked N/A rather than estimated.

## User Health

| Segment | Count | % of Total | vs Yesterday |
|---|---:|---:|---|
| New (last 7 days) | 17 | 7.3% | +1 vs 8/22 |
| Activated (has watchlist) | 135 | 57.9% | 0 vs 8/22 |
| Active (visited in 7 days) | N/A | N/A | Not measurable — no visit field/event |
| At-risk (no visit 7–14d) | N/A | N/A | Not measurable — no visit field/event |
| Churned (no visit 14d+) | N/A | N/A | Not measurable — no visit field/event |

Platform totals: **233 users**, **223 watchlist items**, **0 active price alerts**, **0 recorded triggered alerts**, **4 active newsletter subscribers**, and **1 favorite**. “Activated” is a unique-user count, not a count of items.

## Activation Gap

- **9** users signed up in the last seven days with zero watchlist items (**52.9%** of the cohort).
- **8/17** new users activated (**47.1%**), down from 9/16 (**56.3%**) in the 8/22 snapshot. This is a cohort mix signal, not proof of a product regression.
- Top reasons are not determinable from the available data. CRO hypotheses: no relevant event found, unclear value of tracking, or signup-to-first-watch friction.
- Handoff: [activation-gap-handoff-2026-08-23.md](activation-gap-handoff-2026-08-23.md)

## Churn Signals

- Unsubscribes in the last 24 hours: **N/A**. Four subscriber rows are active, but no event history is exposed.
- Users entering “at-risk” today: **N/A**. No `last_login_at`, `last_seen_at`, or equivalent activity field.
- Alert-fatigue candidates: **N/A**. `/api/admin/alerts` returned HTTP 500, and no open/click data exists. There are currently **0** active alerts and **0** triggered alerts in the stats response.
- Drip delivery: **0 recorded sends** and **20 pending users** in `/api/admin/drip-stats`. Treat this as absent send logging or delivery, not confirmed inbox delivery failure.

## Actions Triggered

- Win-back emails queued: **0**. No production targeted-send/queue endpoint exists, and eligibility cannot be established safely without visit data.
- Re-engagement nudges sent: **0**.
- Draft tiered intervention copy: [churn-interventions-2026-08-23.md](churn-interventions-2026-08-23.md)
- Email handoff: [email-handoff-win-back-2026-08-23.md](email-handoff-win-back-2026-08-23.md)

## Psychology-Driven Micro-Optimization

**Principle:** Commitment and consistency.

**Where:** Empty watchlist state immediately after signup.

**Exact copy/UX:**

> You’re one step from your first price alert. Track an event now, then set the price you’d actually pay.

Primary CTA: **Track my first event**. After the first event is saved, show: `Event tracked → Target price set → Alert ready`.

**Expected impact:** Reduce choice friction and target a **10% relative lift** in first-watch within 24 hours, measured against today’s 47.1% new-cohort activation baseline. Instrument `signup_completed`, `watchlist_add`, and `target_price_set` by cohort.

## Instrumentation Blockers

1. Add `last_seen_at` or reliable activity events for active, at-risk, and churned segmentation.
2. Repair `/api/admin/alerts`; add alert delivery, open, click, and unsubscribe attribution.
3. Add a safe targeted email queue with suppression checks and send status before enabling win-back sends.
4. Repair drip send logging before manually triggering `/api/admin/drip-run`.
