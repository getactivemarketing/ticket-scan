## Growth Daily — 2026-08-05

**Snapshot time:** 2026-08-05, 12:00 UTC reporting cutoff  
**Sources:** live `/api/admin/stats`, `/api/admin/users?limit=500`, `/api/admin/watchlist?limit=500`, `/api/admin/newsletter`, `/api/admin/alerts`, `/api/admin/activity`, and `/api/admin/drip-stats`.

**Data note:** the admin API exposes signup and watchlist timestamps, but not `last_login_at`/`last_seen_at`, email delivery/click events, or a complete unsubscribe history. Unsupported segments are marked N/A rather than guessed.

### User Health

| Segment | Count | % of Total | vs Yesterday |
|---|---:|---:|---|
| New (last 7 days) | 8 | 4.0% | +1 user (7 → 8) |
| Activated (has watchlist) | 117 | 59.1% | +1 user (116 → 117) |
| Active (visited in 7 days) | N/A | N/A | Not instrumented |
| At-risk (no visit 7–14d) | N/A | N/A | Not instrumented |
| Churned (no visit 14d+) | N/A | N/A | Not instrumented |

Platform totals: **198** registered users, **201** watchlist rows, **4** active newsletter subscribers, and **1** favorite row. “Activated” is a user-level count (`watchlist_count > 0`), not a watchlist-row count.

### Activation Gap

- **3** users signed up in the last 7 days with 0 watchlist items (**37.5%** of the cohort).
- **5 of 8** recent signups activated by adding at least one watchlist item.
- Candidate records: `alexalcole@gmail.com`, `dbrenterprises1@gmail.com`, and `dlosie@me.com`.
- Top reason: **not determinable**. Search, compare, onboarding-view, and exit-reason telemetry is not exposed.
- CRO handoff: [`activation-gap-handoff-2026-08-05.md`](activation-gap-handoff-2026-08-05.md).

### Churn Signals

- Unsubscribes today: **0 observed**, but the newsletter endpoint returned only active subscribers; recent inactive records cannot be verified.
- Users entering “at-risk” today: **N/A**. No last-visit or login field exists.
- Alert-fatigue candidates: **N/A**. Alert delivery/click data is not exposed and `/api/admin/alerts` returned HTTP 500.
- Active target-price alerts: **0**; triggered alerts lifetime: **0**.
- Drip emails recorded: **0** (`stats: []`); the pending list is capped at 20 and is not a delivery log.

### Actions Triggered

- Win-back emails queued: **0** — no safe inactivity cohort, suppression check, or approved send endpoint exists.
- Re-engagement nudges sent: **0** — eligibility and consent cannot be verified.
- Tiered intervention drafts prepared for Agent 5 in [`churn-interventions-2026-08-05.md`](churn-interventions-2026-08-05.md).
- Psychology recommendation prepared in [`psychology-optimization-2026-08-05.md`](psychology-optimization-2026-08-05.md).

### Handoffs

**CRO Agent (Agent 6):** 3 of 8 recent signups reached registration but not watchlist activation. Add a post-signup state reading “You’re 1 step from your first alert,” keep one primary `Find an event` CTA, preserve the prior search, and instrument `activation_step_viewed`, `event_search_after_signup`, `watchlist_added_after_signup`, and `first_alert_configured`.

**Email Agent (Agent 5):** Use the intervention drafts only after last-visit, unsubscribe, bounce, delivery, click, and recent-send suppression fields exist. Current drip data does not prove delivery.

### Data Quality / Engineering Priorities

1. Repair `/api/admin/alerts` (currently HTTP 500) and expose alert delivery/open/click events.
2. Add privacy-safe `last_seen_at` or `last_login_at` to the admin user view.
3. Add campaign suppression for unsubscribed users, hard bounces, recent sends, and recent purchases.
4. Add a paginated drip-health/delivery endpoint; `/api/admin/drip-stats` currently returns no sent rows and only 20 pending users.

**Skill note:** `churn-prevention` and `marketing-psychology` are not installed in this workspace; this run applies the task’s specified tier framework and rotating-principle brief directly.
