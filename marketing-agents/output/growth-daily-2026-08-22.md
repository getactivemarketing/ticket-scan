# Growth Daily — 2026-08-22

> Live audit against the production admin API at 2026-08-22 11:00 UTC. Visit recency, alert engagement, and unsubscribe-event history are not exposed by the current admin API; unavailable metrics are marked N/A rather than estimated.

## User Health

| Segment | Count | % of Total | vs Yesterday |
|---|---:|---:|---|
| New (last 7 days) | 16 | 6.9% | -2 vs last recorded 8/20 snapshot |
| Activated (has watchlist) | 135 | 58.4% | +4 vs last recorded 8/20 snapshot |
| Active (visited in 7 days) | N/A | N/A | Not measurable — no visit field/event |
| At-risk (no visit 7–14d) | N/A | N/A | Not measurable — no visit field/event |
| Churned (no visit 14d+) | N/A | N/A | Not measurable — no visit field/event |

Platform totals: **231 users**, **223 watchlist items**, **0 active alerts**, **0 triggered alerts**, **4 active newsletter subscribers**, and **1 favorite**. The zero-alert figures are API-reported state, not proof of delivery or engagement.

## Activation Gap

- **7** users signed up in the last seven days with zero watchlist items (**43.8%** of the cohort).
- **9/16** new users activated (**56.3%**). The gap is down from 10 in the last recorded 8/20 snapshot; total activated users are up from 131 to 135.
- Top reasons are not determinable. CRO hypotheses: no relevant event found, unclear value of tracking, or signup-to-first-watch friction.
- Handoff: [activation-gap-handoff-2026-08-22.md](activation-gap-handoff-2026-08-22.md)

## Churn Signals

- Unsubscribes in the last 24 hours: **0 observed**. All 4 returned newsletter subscribers are active, but the endpoint does not provide a reliable unsubscribe event stream.
- Users entering “at-risk” today: **N/A** — no `last_login_at`, `last_seen_at`, or equivalent activity field.
- Alert-fatigue candidates: **N/A** — `/api/admin/alerts` returned HTTP 500 (`Failed to get alerts`), and no click/open data exists.
- Drip delivery: **0 recorded sends**, **20 pending users**. Treat this as missing/broken send instrumentation, not confirmed non-delivery.

## Actions Triggered

- Win-back emails queued: **0**. No production churn-send endpoint exists and eligibility cannot be established safely.
- Re-engagement nudges sent: **0**.
- Draft-only tiered intervention copy: [churn-interventions-2026-08-22.md](churn-interventions-2026-08-22.md)
- Email handoff: [email-handoff-win-back-2026-08-22.md](email-handoff-win-back-2026-08-22.md)

## Psychology-Driven Micro-Optimization

**Principle:** Commitment and consistency.

**Where:** Empty watchlist state immediately after signup.

**Exact copy/UX:**

> You’re one step from your first price alert. Track an event now, then set the price you’d actually pay.

Use one primary CTA: **Track my first event**. After the first event is saved, show: `Event tracked → Target price set → Alert ready`.

**Expected impact:** Improve signup-to-first-watchlist activation by reducing choice friction; target a **10% relative lift** in first-watch within 24 hours, measured against the current 56.3% new-cohort activation baseline.

## Instrumentation Blockers

1. Add `last_seen_at` or a reliable activity event for active, at-risk, and churned segmentation.
2. Repair `/api/admin/alerts`; add alert delivery, open, and click attribution.
3. Record unsubscribe events with timestamps and expose a 24-hour query.
4. Repair drip send logging before triggering a campaign run.

