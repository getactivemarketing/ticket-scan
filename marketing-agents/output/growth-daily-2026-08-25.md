# Growth Daily — 2026-08-25

Production admin API audit at 2026-08-25 11:00 UTC. Signup and watchlist data are measurable; login recency, alert clicks, and unsubscribe event history are not exposed. Unsupported metrics are marked N/A rather than guessed.

## User Health

| Segment | Count | % of Total | vs Yesterday |
|---|---:|---:|---|
| New (last 7 days) | 17 | 7.1% | +1 rolling-window count |
| Activated (has watchlist) | 140 | 58.6% | +3 |
| Active (visited in 7 days) | N/A | N/A | Not measurable — no visit field/event |
| At-risk (no visit 7–14d) | N/A | N/A | Not measurable — no visit field/event |
| Churned (no visit 14d+) | N/A | N/A | Not measurable — no visit field/event |

Platform totals: **239 users**, **238 watchlist rows**, **0 active target-price alerts**, **0 recorded triggered alerts**, **5 active newsletter subscribers**, and **1 favorite**. Activated is a unique-user count, not a recent-visit measure.

## Activation Gap

- **8** users signed up in the rolling seven-day cohort with zero watchlist items (**47.1%** of the cohort).
- CRO handoff cohort: `vazcor@gmail.com`, `sethleslie@gmail.com`, `jake.bartley4@gmail.com`, `drewshim10@gmail.com`, `dominicmarlatt@gmail.com`, `holden.hickson@icloud.com`, `diana_thao_nguyen@yahoo.com`, `spinels-71.pleased@icloud.com`.
- Top reason: not determinable. Signup, search, onboarding-step, bounce, and last-seen events are not exposed. Test a post-signup event picker and a one-step “Track my first event” flow.

## Churn Signals

- Unsubscribes in the last 24 hours: **0 observed**, but current subscriber rows do not provide a complete unsubscribe-event audit.
- Users entering “at-risk” today: **N/A** — no `last_login_at`, `last_seen_at`, or equivalent activity stream.
- Alert-fatigue candidates: **N/A** — `/api/admin/alerts?limit=10000` returned HTTP 500; delivery, open, and click telemetry are unavailable. Stats show 0 active and 0 triggered alerts.
- Fresh price-change evidence: **unavailable**. Latest `/api/admin/price-history` record is 2026-07-24 20:01 UTC, so intervention emails must not claim current price movement.
- Drip delivery: **0 recorded sends**; `/api/admin/drip-stats` still shows pending users. Do not use the broad drip runner as a win-back substitute.

## Actions Triggered

- Win-back emails queued: **0** — no scoped retention-send endpoint and no reliable inactivity predicate.
- Re-engagement nudges sent: **0** — same consent, eligibility, and telemetry blockers.
- Tiered intervention drafts: [churn-interventions-2026-08-25.md](churn-interventions-2026-08-25.md)
- Activation-gap handoff: [cro-handoff-2026-08-25.md](cro-handoff-2026-08-25.md)
- Email handoff: [email-handoff-2026-08-25.md](email-handoff-2026-08-25.md)

## Psychology-Driven Micro-Optimization

**Principle:** Commitment and consistency.

**Where:** Empty watchlist state immediately after signup.

**Exact copy/UX change:**

> You’re one step from your first price alert. Track an event now, then set the price you’d actually pay.

Primary CTA: **Track my first event**. After the first save, show: `Event tracked → Target price set → Alert ready`.

**Expected impact:** Target a **10% relative lift** against today’s 52.9% activated baseline within the current 17-user cohort. Instrument `signup_completed`, `watchlist_add`, and `target_price_set`; treat the lift as a test target, not a result.

## Instrumentation Blockers

1. Add privacy-safe `last_seen_at` or reliable activity events.
2. Repair `/api/admin/alerts`; add delivery, open, click, and unsubscribe attribution.
3. Add a suppression-aware targeted email queue with send status.
4. Repair drip send logging before manually triggering `/api/admin/drip-run`.
5. Persist daily segment snapshots for real day-over-day comparisons.

## Skill Note

The requested `churn-prevention` and `marketing-psychology` skills are not installed in this session. The intervention tiers and commitment/consistency recommendation follow the task specification directly.
