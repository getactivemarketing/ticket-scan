# Growth Daily — 2026-08-19

> Live audit of the admin API on 2026-08-19. Counts use UTC boundaries and the API's rolling seven-day cohort. Visit recency, email clicks, and alert delivery engagement are not reliably exposed; unavailable values are not estimated.

## User Health

| Segment | Count | % of Total | vs Yesterday |
|---|---:|---:|---|
| New (last 7 days) | 18 | 8.1% | +1 |
| Activated (has watchlist) | 131 | 58.7% | 0 |
| Active (visited in 7 days) | n/a | n/a | unavailable — no visit field/event |
| At-risk (no visit 7–14d) | n/a | n/a | unavailable — no visit field/event |
| Churned (no visit 14d+) | n/a | n/a | unavailable — no visit field/event |

Platform total: **223 users**, **219 watchlist items**, and **131 unique users with at least one watchlist item**. The stats endpoint reports 0 active and triggered alerts, but alert detail verification is blocked by the alerts route failure.

## Activation Gap

- **9** users signed up in the last seven days with zero watchlist items (**50.0%** of the cohort); 9/18 activated (**50.0%**).
- Change from yesterday: the gap increased from 8 to 9 while the activated-user total remained 131.
- Top reason: **not determinable**. The API has signup/watchlist activity, but no joined search-result, onboarding-step, error, or bounce data.
- CRO handoff (Agent 6): use the empty-state intervention from yesterday — “You’re one step from your first price alert. Track an event now, then set the price you’d actually pay.” Add a one-click “Track my first event” CTA and measure signup → first watchlist within 24 hours.

## Churn Signals

- Unsubscribes in the last 24 hours: **0 observed**. The newsletter response contains no recent unsubscribe rows; it is not a complete unsubscribe-event stream.
- Users entering at-risk today: **n/a** — no `last_login_at`, `last_seen_at`, or visit event.
- Alert fatigue candidates: **n/a** — `/api/admin/alerts?limit=10000` returned HTTP 500, and there is no click/open event data.
- Drip delivery: **0 recorded sends** and 20 pending users in `/api/admin/drip-stats`. Treat this as missing/broken send instrumentation, not proof that no email was delivered.

## Actions Triggered

- Win-back emails queued: **0**. No approved churn-send endpoint or reliable eligibility signal is available.
- Re-engagement nudges sent: **0**. Tiered copy is prepared in [growth-churn-queue-2026-08-19.md](growth-churn-queue-2026-08-19.md).
- Social/admin publishing: **not called**; this task did not request a social post.

## Psychology-Driven Micro-Optimization

**Principle:** Commitment and consistency.

**Where:** Empty watchlist state immediately after signup, and the first post-add state.

**Exact copy/UX:**

> You’re one step from your first price alert. Track an event now, then set the price you’d actually pay.

Button: **Track my first event**

After the first add: **1 of 2 steps complete — add a target price and let TicketScan do the watching.**

**Expected impact:** improve signup-to-first-watchlist activation by making the next action concrete. Measure first-watchlist completion within 24 hours, target-price completion, and seven-day return; watch unsubscribe and error rates as guardrails. This is a hypothesis, not a measured lift.

## Measurement Blockers / Handoffs

1. Add privacy-safe `last_seen_at` updates on authenticated activity.
2. Repair `/api/admin/alerts` (`triggered_at` is queried while the current schema uses `sent_at`), then expose sent, delivered, opened, clicked, and suppressed states.
3. Add a consent-aware, idempotent churn-intervention endpoint with suppression and audit logging.
4. Add search → signup → watchlist funnel events so activation-gap causes can be distinguished.
5. Email Agent (Agent 5): use the prepared Tier 1–3 drafts only after eligibility, consent, unsubscribe suppression, and delivery instrumentation are available.

