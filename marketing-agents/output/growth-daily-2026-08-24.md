# Growth Daily — 2026-08-24

> Production admin API audit at 2026-08-24 10:19 UTC. The API reports signup and watchlist data, but does not expose login/visit recency, alert click telemetry, or unsubscribe event history. Unsupported metrics are marked N/A rather than guessed.

## User Health

| Segment | Count | % of Total | vs Yesterday |
|---|---:|---:|---|
| New (last 7 days) | 16 | 6.8% | -1 (rolling-window effect) |
| Activated (has watchlist) | 137 | 58.3% | +2 |
| Active (visited in 7 days) | N/A | N/A | Not measurable — no visit field/event |
| At-risk (no visit 7–14d) | N/A | N/A | Not measurable — no visit field/event |
| Churned (no visit 14d+) | N/A | N/A | Not measurable — no visit field/event |

Platform totals: **235 users**, **227 watchlist items**, **0 active alerts**, **0 recorded triggered alerts**, **5 active newsletter subscribers**, and **1 favorite**. “Activated” is a unique-user count. The new-user cohort is the API’s rolling `NOW() - 7 days` window; 8 of 16 are activated and 8 have no watchlist item.

## Activation Gap

- **8** users signed up in the last seven days with zero watchlist items (**50.0%** of the cohort).
- The API shows **8/16 activated**. The gap is up from 8/17’s report of 9 users in the gap, but cohort boundaries differ; this is not evidence of a product regression.
- Top reasons are not determinable. CRO hypotheses: no relevant event found, unclear value of tracking, or signup-to-first-watch friction.
- Handoff: [activation-gap-handoff-2026-08-24.md](activation-gap-handoff-2026-08-24.md)

## Churn Signals

- Unsubscribes in the last 24 hours: **N/A**. Subscriber rows expose current state, not unsubscribe events.
- Users entering “at-risk” today: **N/A**. No `last_login_at`, `last_seen_at`, or equivalent event stream is available.
- Alert-fatigue candidates: **N/A**. `/api/admin/alerts?limit=10000` returned HTTP 500 (`Failed to get alerts`); no open/click telemetry exists. Stats report 0 active and 0 triggered alerts.
- Price-change evidence is unavailable for current interventions: latest `/api/admin/price-history` record is **2026-07-24 20:01 UTC**, before today’s review window.
- Drip delivery: **0 recorded sends** and **20 pending users**. Treat this as missing send logging or delivery, not proof that no email was delivered.

## Actions Triggered

- Win-back emails queued: **0**. No safe targeted-send/queue endpoint exists, and eligibility cannot be established without visit data.
- Re-engagement nudges sent: **0**.
- Draft tiered intervention copy: [churn-interventions-2026-08-24.md](churn-interventions-2026-08-24.md)
- Email handoff: [email-handoff-win-back-2026-08-24.md](email-handoff-win-back-2026-08-24.md)

## Psychology-Driven Micro-Optimization

**Principle:** Commitment and consistency.

**Where:** Empty watchlist state immediately after signup.

**Exact copy/UX change:**

> You’re one step from your first price alert. Track an event now, then set the price you’d actually pay.

Primary CTA: **Track my first event**. After the first save, show: `Event tracked → Target price set → Alert ready`.

**Expected impact:** Target a **10% relative lift** in first-watch conversion against today’s 50.0% cohort activation baseline. Instrument `signup_completed`, `watchlist_add`, and `target_price_set` by cohort.

## Instrumentation Blockers

1. Add `last_seen_at` or reliable activity events for active, at-risk, and churned segmentation.
2. Repair `/api/admin/alerts`; add alert delivery, open, click, and unsubscribe attribution.
3. Add a suppression-aware targeted email queue with send status before enabling win-back sends.
4. Repair drip send logging before manually triggering `/api/admin/drip-run`.

## Skill Note

The requested `churn-prevention` and `marketing-psychology` skills were not installed in this session. The intervention tiers and commitment/consistency recommendation follow the task specification directly.
