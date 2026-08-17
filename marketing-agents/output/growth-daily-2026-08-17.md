# Growth Daily — 2026-08-17

> Audit run against the live admin API on 2026-08-17. Visit recency, alert clicks, and delivery events are not currently exposed; unavailable metrics are marked as such rather than estimated.

## User Health

| Segment | Count | % of Total | vs Yesterday |
|---|---:|---:|---|
| New (last 7 days) | 15 | 6.8% | unavailable — no prior report snapshot |
| Activated (has watchlist) | 129 | 58.9% | unavailable — no prior report snapshot |
| Active (visited in 7 days) | n/a | n/a | no `last_login_at` or visit event |
| At-risk (no visit 7–14d) | n/a | n/a | no visit recency instrumentation |
| Churned (no visit 14d+) | n/a | n/a | no visit recency instrumentation |

Platform total: **219 users**, **217 watchlist items**, **129 unique watchlist users**. The API reports 0 active alerts and 0 triggered alerts, but alert detail verification is blocked because `/api/admin/alerts` returned HTTP 500.

## Activation Gap

- **7** users signed up in the last 7 days with 0 watchlist items (7/15 = **46.7%** of the new cohort).
- **8/15** new users activated (53.3%).
- Top reason: **not determinable** from the available data. Signup and watchlist events exist, but there is no search-result, error, onboarding-step, or bounce instrumentation.
- CRO handoff: instrument the post-signup path and offer a one-click “track this event” CTA before asking users to search from scratch.

## Churn Signals

- Unsubscribes today: **0 observed** in `/api/admin/newsletter`; the endpoint currently exposes only 4 active subscribers and no 24-hour unsubscribe query.
- Users entering at-risk today: **n/a** — no last-visit field.
- Alert fatigue candidates: **n/a** — `/api/admin/alerts` returned HTTP 500 and no click/open event data exists.
- Drip status: `/api/admin/drip-stats` returned `stats: []`; no sends are recorded. Do not treat this as proof of delivery success.

## Actions Triggered

- Win-back emails queued: **0**. Eligibility cannot be computed without visit recency and there is no approved churn-send endpoint.
- Re-engagement nudges sent: **0**. Drafts are prepared in `churn-interventions-2026-08-17.md` for controlled launch after instrumentation and consent/suppression checks.
- Social/admin POST endpoints were not called; this task has no approved social publishing requirement.

## Psychology-Driven Micro-Optimization

**Principle:** Commitment and consistency.

**Where:** First-run dashboard/watchlist empty state.

**Exact UX copy:**

> You’re one step from your first price alert. Track an event now, then set the price you’d actually pay.

Button: **Track my first event**

After the first add: **1 of 2 steps complete — add a target price to let TicketScan do the watching.**

**Expected impact:** Increase signup-to-first-watchlist activation by reducing the blank-page decision. Treat as a hypothesis; measure first-watchlist completion within 24 hours, target-price completion, and 7-day return, with unsubscribe/error rate as guardrails.

## Open Measurement Blockers

1. Add `last_login_at` or a privacy-safe `last_seen_at` update on authenticated activity.
2. Repair `/api/admin/alerts` (currently HTTP 500); expose sent, delivered, opened, clicked, and suppressed states.
3. Add a controlled churn-intervention endpoint with consent, suppression, idempotency, and audit logging.
4. Add search → signup → watchlist funnel events so activation-gap causes can be distinguished.

