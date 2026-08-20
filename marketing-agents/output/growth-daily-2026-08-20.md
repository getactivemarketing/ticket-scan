# Growth Daily — 2026-08-20

> Live audit against the production admin API at 2026-08-20 11:00 UTC. Visit recency, alert clicks, and unsubscribe history are not fully exposed; unavailable metrics are marked as such rather than estimated.

## User Health

| Segment | Count | % of Total | vs Yesterday |
|---|---:|---:|---|
| New (last 7 days) | 18 | 8.0% | 0 |
| Activated (has watchlist) | 131 | 58.0% | 0 |
| Active (visited in 7 days) | N/A | N/A | Not measurable — no visit field/event |
| At-risk (no visit 7–14d) | N/A | N/A | Not measurable — no visit field/event |
| Churned (no visit 14d+) | N/A | N/A | Not measurable — no visit field/event |

Platform totals: **226 users**, **219 watchlist items**, **4 active newsletter subscribers**, and **0 active/triggered alerts** reported by `/api/admin/stats`. The stats zero is not proof of email delivery or engagement.

## Activation Gap

- **10** users signed up in the last seven days with zero watchlist items (**55.6%** of the cohort).
- **8/18** new users activated (**44.4%**). The gap is up from 9 yesterday while total activated users are unchanged.
- Top reasons are not determinable from the current API. Working CRO hypotheses: no relevant event found, unclear watchlist value, or signup-to-first-watch friction.
- Handoff: [activation-gap-handoff-2026-08-20.md](activation-gap-handoff-2026-08-20.md)

## Churn Signals

- Unsubscribes in the last 24 hours: **0 observed**. The newsletter endpoint exposes current state, not a complete unsubscribe event stream; all 4 returned subscribers are active.
- Users entering at-risk today: **N/A** — no `last_login_at`, `last_seen_at`, or equivalent visit field.
- Alert-fatigue candidates: **N/A** — `/api/admin/alerts` returned HTTP 500 (`Failed to get alerts`) and no click/open data exists.
- Drip delivery: **0 recorded sends**, **20 pending users**. Treat this as missing/broken send instrumentation, not confirmed non-delivery.

## Actions Triggered

- Win-back emails queued: **0**. No production churn-send endpoint exists and eligibility cannot be established safely.
- Re-engagement nudges sent: **0**.
- Handoff-ready tiered copy: [churn-interventions-2026-08-20.md](churn-interventions-2026-08-20.md). Drafts are not sent.

## Psychology-Driven Micro-Optimization

**Principle:** Commitment and consistency.

**Where:** Empty watchlist state immediately after signup.

**Exact copy/UX:**

> You’re one step from your first price alert. Track an event now, then set the price you’d actually pay.

Use one primary CTA: **Track my first event**. After the first event is saved, show a three-step progress indicator: `Event tracked → Target price set → Alert ready`.

**Expected impact:** Reduce signup-to-first-watchlist friction and improve first-alert activation; validate with signup → first watchlist within 24 hours, target +10% relative lift.

## Handoffs

- **CRO Agent (Agent 6):** 18 new users, 8 activated, 10 unactivated. Implement and instrument the one-primary-CTA empty state.
- **Email Agent (Agent 5):** Use the tiered drafts only after adding last-visit, verified price movement, consent/suppression, deduplicated send, and click tracking.

## Instrumentation Blockers

1. Add `last_seen_at` or a reliable activity event for active/at-risk/churned segmentation.
2. Repair `/api/admin/alerts` and add alert open/click attribution.
3. Record unsubscribe events with timestamps and expose a 24-hour query.
4. Repair drip send logging before triggering a campaign run.
