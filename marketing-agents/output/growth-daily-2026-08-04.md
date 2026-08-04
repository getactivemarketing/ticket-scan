## Growth Daily — 2026-08-04

**Snapshot time:** 2026-08-04, 12:00 UTC reporting cutoff  
**Sources:** live `/api/admin/stats`, `/api/admin/users?limit=1000`, `/api/admin/watchlist?limit=1000`, `/api/admin/newsletter`, `/api/admin/alerts`, and `/api/admin/drip-stats`  
**Data note:** the API exposes signup and watchlist timestamps, but no `last_login_at`/`last_seen_at`, email click data, or alert delivery events. Unsupported segments are marked N/A.

### User Health

| Segment | Count | % of Total | vs Yesterday |
|---|---:|---:|---|
| New (last 7 days) | 7 | 3.6% | -2 users (9 → 7) |
| Activated (has watchlist) | 116 | 58.9% | +1 user (115 → 116) |
| Active (visited in 7 days) | N/A | N/A | Not instrumented |
| At-risk (no visit 7–14d) | N/A | N/A | Not instrumented |
| Churned (no visit 14d+) | N/A | N/A | Not instrumented |

Platform totals: **197** registered users, **200** watchlist rows, **4** active newsletter subscribers, and **1** favorite row. “Activated” is a user-level count (`watchlist_count > 0`), not a count of watchlist rows.

### Activation Gap

- **3** users signed up in the last 7 days with 0 watchlist items (**42.9%** of the cohort).
- **4 of 7** recent signups activated by adding at least one watchlist item.
- Candidate records: `alexalcole@gmail.com`, `dbrenterprises1@gmail.com`, and `dlosie@me.com`.
- Top reason: **not determinable**. Search, compare, onboarding-view, and exit-reason telemetry is not exposed.
- Activation handoff: [`activation-gap-handoff-2026-08-04.md`](activation-gap-handoff-2026-08-04.md).

### Churn Signals

- Unsubscribes today: **0 observed**. The newsletter endpoint returned 4 active records and no inactive/unsubscribe records.
- Users entering “at-risk” today: **N/A**. No last-visit field exists.
- Alert-fatigue candidates: **N/A**. Alert sends and clicks are not exposed; `/api/admin/alerts` returned **HTTP 500**.
- Active target-price alerts: **0**; triggered alerts lifetime: **0**.
- Drip emails recorded: **0** (`stats: []`); pending list is capped at 20 and is not a delivery log.

### Actions Triggered

- Win-back emails queued: **0** — no safe inactivity cohort or send endpoint exists.
- Re-engagement nudges sent: **0** — eligibility and suppression cannot be verified.
- Tiered intervention drafts prepared for approval in [`churn-interventions-2026-08-04.md`](churn-interventions-2026-08-04.md).
- Psychology recommendation prepared in [`psychology-optimization-2026-08-04.md`](psychology-optimization-2026-08-04.md).

### Handoffs

**CRO Agent (Agent 6):** 3 of 7 recent signups reached registration but not watchlist activation. Add a post-signup state reading “You’re 1 step from your first alert” with one `Find an event` CTA, preserve the last search, and instrument `activation_step_viewed`, `event_search_after_signup`, `watchlist_added_after_signup`, and `first_alert_configured`.

**Email Agent (Agent 5):** Use the three intervention drafts only after last-visit, unsubscribe, bounce, delivery, click, and recent-send suppression fields exist. Current drip data does not prove delivery.

### Data Quality / Engineering Priorities

1. Repair `/api/admin/alerts` (currently HTTP 500) and expose alert delivery/open/click events.
2. Add privacy-safe `last_seen_at` or `last_login_at` to the admin user view.
3. Add campaign suppression for unsubscribed users, hard bounces, recent sends, and recent purchases.
4. Add a paginated drip-health/delivery endpoint; `/api/admin/drip-stats` currently returns no sent rows and only 20 pending users.
