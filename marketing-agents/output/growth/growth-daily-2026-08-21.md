## Growth Daily — 2026-08-21

Production snapshot pulled from the admin API on 2026-08-21. The requested `churn-prevention` and `marketing-psychology` skills are not installed; their workflows were applied manually.

### User Health

| Segment | Count | % of Total | vs Yesterday |
|---|---:|---:|---:|
| New (last 7 days) | 16 | 7.0% | N/A — no daily snapshot |
| Activated (has watchlist) | 133 | 58.3% | N/A — no daily snapshot |
| Active (visited in 7 days) | N/A | N/A | Visit telemetry unavailable |
| At-risk (no visit 7–14d) | N/A | N/A | Visit telemetry unavailable |
| Churned (no visit 14d+) | N/A | N/A | Visit telemetry unavailable |

“Activated” means at least one watchlist row. The API reports 228 total users and 221 watchlist items; a user-level count is calculated from `/api/admin/users`.

### Activation Gap

- **7** users signed up in the rolling seven-day cohort with zero watchlist items (**43.8%** of the cohort).
- Gap cohort for CRO: `dominicmarlatt@gmail.com`, `holden.hickson@icloud.com`, `diana_thao_nguyen@yahoo.com`, `spinels-71.pleased@icloud.com`, `braydon.meixell@gmail.com`, `reynolds_leanne@yahoo.com`, `noelvas13@gmail.com`.
- Top reason: not determinable. Signup, search, onboarding, bounce, and last-seen events are not exposed. The latest activity feed shows signup/watchlist events only.

### Churn Signals

- Unsubscribes in the last 24 hours: **0 observed**. The newsletter endpoint returned four active subscribers and no inactive rows; this is not a complete unsubscribe-event audit.
- Users entering “at-risk” today: **N/A** — no login or last-visit field exists.
- Alert-fatigue candidates: **N/A** — `/api/admin/alerts?limit=10000` returned HTTP 500. Stats report 0 triggered alerts and 0 active target-price rows, but delivery/open/click data is unavailable.

### Actions Triggered

- Win-back emails queued: **0**.
- Re-engagement nudges sent: **0**.
- Reason: no scoped retention-send endpoint, last-seen field, consent-suppression join, or verified individualized price-movement feed. Do not run the broad drip endpoint as a substitute.
- Tiered intervention drafts: `churn-interventions-2026-08-21.md`.
- Activation-gap handoff: `cro-handoff-2026-08-21.md`.
- Email handoff: `email-handoff-2026-08-21.md`.
- Psychology recommendation: `psychology-optimization-2026-08-21.md`.

### Psychology-Driven Micro-Optimization

**Principle:** Commitment and consistency.

**Where:** First-run dashboard and empty-watchlist state.

**Exact change:** Show `Account created ✓ → Pick an event → Set your price ceiling` with primary CTA **Track my first event**. Supporting copy: “You’re one event away from your first price alert. We’ll keep watch while ticket prices do their usual little dance.”

**Expected impact:** Reduce activation friction and convert more of the 43.8% empty-watchlist cohort. A/B test watchlist creation within 24 hours and target-price completion within seven days; no lift is claimed until measured.

### Data Quality / Next Instrumentation

1. Add privacy-safe `last_seen_at` or authenticated activity events.
2. Add delivery, open, click, unsubscribe, and stable message-ID telemetry.
3. Repair `/api/admin/alerts` before calculating alert fatigue.
4. Add a scoped, suppression-aware retention-send endpoint.
5. Persist daily segment snapshots for real day-over-day comparisons.
