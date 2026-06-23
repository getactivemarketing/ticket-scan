# Growth Daily — 2026-06-23

> All figures pulled live from `/api/admin/stats`, `/api/admin/users`, `/api/admin/drip-stats` today. Segments that depend on visit recency are marked **n/a** — there is no `last_login` column in the schema, so "active / at-risk / churned by visit" cannot be computed. Not estimated, not invented.

## User Health

| Segment                              | Count | Source / Notes |
|--------------------------------------|-------|----------------|
| Total users                          | 128   | `stats.totalUsers` |
| New (last 7 days)                     | 9     | `stats.usersThisWeek` |
| New (today)                          | 2     | `stats.usersToday` |
| Activated (≥1 watchlist item)        | 33*   | *of the 50 most-recent users the API returns; full-base figure not exposed |
| With 0 watchlist (activation gap)    | 17*   | *same 50-user window |
| With an active price alert           | **0** | `alerts_count=0` for every user; `stats.activeAlerts=0` |
| Active / At-risk / Churned by visit  | n/a   | no `last_login` field exists — uncomputable |

\* The `/api/admin/users` endpoint returns only the 50 most recent accounts, so per-user joins (watchlist/alert counts) cover that window, not all 128. Aggregate counts (128 / 9 / 2) are whole-base and reliable.

## Activation Gap

- **Last-7-day cohort is healthy:** 8 of 9 new signups added a watchlist item. Only **1** new user (id 126, signed up 6/21) has 0 watchlist items. Onboarding-to-first-watchlist is *not* today's leak.
- The real gap is one step downstream: **33 users have watchlists but 0 of them have an armed alert.** Watchlist → alert conversion is 0%. Root cause is known and unchanged — there is no target-price input control in the watchlist/EventCard UI, so no alert can ever arm (every watchlist row has `target_price: null`). This is a shipping fix, not an analysis gap. See `watchlist-no-targets-alerts-cant-arm`.

## Churn Signals

- **Unsubscribes today:** 0 (active subscribers 3 / total 3, unchanged).
- **At-risk / new-churn today:** n/a (no visit data).
- **Alert fatigue:** 0 — impossible by construction; no alerts have ever fired (`triggeredAlerts: 0`).
- **Drip is the live retention leak:** 20 users sit in the drip queue with `last_email_sent: 0` — *no drip email has ever sent to anyone.* 8 of them are already past the Day-3 trigger (up to 15 days since signup, e.g. id 109 eneuman729). New users get zero lifecycle touches. This is the single biggest fixable retention hole and it is an infra/sender failure, not a content problem. See `drip-campaign-never-sends`.

## Actions Triggered

- **Win-back / nudge emails sent: 0.** There is no working send path — the drip sender itself delivers nothing, so queuing win-back mail on top of it would also no-op. I am **not** blind-triggering `drip-run` (risk of blasting real inboxes once a fix lands). Correct next action is to verify and repair the drip/email sender, then let the existing schedule drain the backlog. Flagged to Email Agent (Agent 5), not auto-fired.

## Psychology-Driven Optimization (1)

- **Principle:** Commitment / consistency (+ endowment framing).
- **Where:** Watchlist page and EventCard "added" state.
- **The change:** After a user adds an event, show a 2-step progress cue — **"Step 1 of 2: tracking ✓ — Step 2: set your target price to arm an alert"** — with an inline price input right there (the input that currently doesn't exist). A half-finished progress indicator pulls people to complete it, and "your target price" reinforces ownership of the watchlist they already built.
- **Why this one, grounded in today's data:** 33 users have watchlists and **0** have alerts. The product's entire value prop (price-drop alerts) is unreachable because the arming step has no UI. This nudge is worthless until the target-price input ships — so the recommendation is really: *ship the input, wrap it in the progress cue.* Highest-leverage retention change available, and the numbers say the audience (33 already-activated users) is sitting right at the cliff edge.
- **Expected impact:** Converts the 0% watchlist→alert rate into something non-zero; alerts are the only mechanism that gives a user a reason to return, so this directly feeds repeat visits.

## Handoffs

- **→ CRO (Agent 6):** Activation-to-first-watchlist is fine (8/9). Focus onboarding effort on the watchlist→alert step (ship target-price input), not the signup→watchlist step.
- **→ Email (Agent 5):** Drip sender delivers 0; 20 queued, 8 overdue. Fix the sender before any win-back content — content is not the bottleneck.

---
*Notes: No visit-based segments fabricated (no `last_login`). No alert/savings figures reported as working (none are). No drip-run triggered.*
