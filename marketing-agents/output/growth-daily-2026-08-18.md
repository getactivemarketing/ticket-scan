# Growth Daily — 2026-08-18

> Live admin API audit run on 2026-08-18. Counts are based on the API's rolling 7-day user cohort where available. Visit recency, email engagement, and alert-click data are not exposed; unavailable values are intentionally not estimated.

## User Health

| Segment | Count | % of Total | vs Yesterday |
|---|---:|---:|---|
| New (last 7 days) | 17 | 7.7% | +2 |
| Activated (has watchlist) | 131 | 59.0% | +2 |
| Active (visited in 7 days) | n/a | n/a | unavailable — no visit field/event |
| At-risk (no visit 7–14d) | n/a | n/a | unavailable — no visit field/event |
| Churned (no visit 14d+) | n/a | n/a | unavailable — no visit field/event |

Platform total: **222 users**, **219 watchlist items**, **131 users with at least one watchlist item**. The API reports **0 active alerts** and **0 triggered alerts**.

## Activation Gap

- **8** users in the rolling 7-day signup cohort have zero watchlist items (**47.1%** of the cohort); 9/17 activated (**52.9%**).
- New zero-watchlist accounts: `braydon.meixell@gmail.com`, `reynolds_leanne@yahoo.com`, `noelvas13@gmail.com`, `thiswing@gmail.com`, `miller.zach294@gmail.com`, `kngill@msn.com`, `coach.byrd@icloud.com`, `kevin.wang19@yahoo.com`.
- Top reason: **not determinable**. Signup, watchlist, search-result, onboarding-step, and bounce events are not joined in the admin API.
- CRO handoff: add a post-signup empty state with a one-click “Track my first event” CTA, then measure signup → first watchlist within 24 hours.

## Churn Signals

- Unsubscribes in the last 24 hours: **0 observed**. The newsletter endpoint exposes current rows and unsubscribe timestamps, but no event history.
- Users entering at-risk today: **n/a** — no `last_login_at`, `last_seen_at`, or visit event.
- Alert fatigue candidates: **n/a** — `/api/admin/alerts` returned HTTP 500 and no click/open data exists.
- Drip delivery: **0 recorded sends** in `/api/admin/drip-stats`; treat this as missing send telemetry, not proof that no email was delivered.

## Actions Triggered

- Win-back emails queued: **0**. No approved churn-send endpoint or visit eligibility signal is available.
- Re-engagement nudges sent: **0**. Tiered drafts are prepared in [growth-churn-queue-2026-08-18.md](growth-churn-queue-2026-08-18.md).
- Social/admin publishing: **not called**; no social post was requested by this task.

## Psychology-Driven Micro-Optimization

**Principle:** Commitment and consistency.

**Where:** Empty watchlist state immediately after signup.

**Exact copy/UX:**

> You’re one step from your first price alert. Track an event now, then set the price you’d actually pay.

Button: **Track my first event**

After the first add: **1 of 2 steps complete — add a target price and let TicketScan do the watching.**

Expected impact: improve signup-to-first-watchlist activation by reducing blank-page friction. Measure first-watchlist completion within 24 hours, target-price completion, and 7-day return; monitor unsubscribe and error rates as guardrails.

## Open Measurement Blockers

1. Add privacy-safe `last_seen_at` updates on authenticated activity.
2. Repair `/api/admin/alerts`; expose sent, delivered, opened, clicked, and suppressed states.
3. Add a consent-aware, idempotent churn-intervention endpoint with suppression and audit logging.
4. Add search → signup → watchlist funnel events to identify activation causes.
