# Growth Daily — 2026-06-09

_All figures pulled live from `/api/admin/stats`, `/users`, `/drip-stats`, `/activity` at run time. Nothing here is modeled or projected. Segments that the schema cannot measure are marked **n/a**, not guessed._

## User Health

| Segment                      | Count | Source / Notes |
|------------------------------|-------|----------------|
| Total users                  | 109   | stats.totalUsers |
| New (signed up this week)    | 14    | stats.usersThisWeek |
| New today                    | 0     | stats.usersToday (day is young, UTC) |
| Activated (has ≥1 watchlist) | 29 of 50 most-recent (58%) | computed from `/users` (endpoint caps at 50) |
| Active (visited in 7d)       | **n/a** | no `last_login` column exists — not measurable |
| At-risk (no visit 7–14d)     | **n/a** | same — do not fabricate |
| Churned (no visit 14d+)      | **n/a** | same |
| Active subscribers           | 3     | stats.activeSubscribers |
| Active alerts                | **0** | stats.activeAlerts |
| Triggered alerts (all time)  | **0** | stats.triggeredAlerts |

**Activation, not retention, is the only lifecycle stage this platform can currently see.** There is no session/visit tracking, so "active / at-risk / churned" cannot be reported. Stop expecting those rows to fill in until login events are logged.

## Activation Gap

4 users signed up in the last 7 days with **0 watchlist items**:

| Email | Days since signup |
|-------|-------------------|
| mbhall99@icloud.com | 4 |
| belles_hayride_4b@icloud.com | 6 |
| doggycj6@gmail.com | 7 |
| griffin@griffinli.com | 7 |

The other 11 of the last-7-days cohort did add at least one watchlist item, so the signup→first-watchlist funnel is actually working reasonably (≈73% of recent signups activate). The leak is **downstream of activation**, not at it (see below).

## Churn Signals

- Unsubscribes today: **0** (totalSubscribers 3 = activeSubscribers 3)
- Users entering "at-risk": **n/a** (no visit data)
- Alert fatigue candidates: **0** — impossible by construction. 0 alerts have ever triggered, so no one can have alert fatigue.

## The real retention story (verified, not narrative)

Three structural facts, each confirmed against the API this run — these are the same root causes flagged for weeks, still unfixed, **not a new outage**:

1. **0 alerts armed across 134 watchlist items.** Every watchlist row returns `target_price: null`. The alert loop has nothing to fire on. `activeAlerts: 0`, `triggeredAlerts: 0`. Retention mechanism #1 (price-drop emails) is severed at the source.
2. **Drip campaign has sent 0 emails, ever.** `/drip-stats` returns `stats: []` and `last_email_sent: 0` for all 15+ pending users — including users 96/95/94 who are 6–7 days past signup and overdue for Email 1 (Day 3). Retention mechanism #2 is inert.
3. **Only 3 active subscribers.** The newsletter list is effectively empty, so broadcast re-engagement has almost no reach.

**Conclusion:** Signups are healthy and steady (14 this week, activation ~73%), but *every post-activation retention mechanism is currently non-functional*. We are filling a bucket with no bottom. Adding more growth tactics on top of broken retention plumbing wastes the acquisition.

## Recommended action (priority order)

1. **Set a default `target_price` on watchlist add** (e.g. current price, or current − 10%). One-line change that arms the entire existing alert system for all 134 items. This is the single highest-leverage retention fix and it's a shipping task, not an analysis task. → owner: backend.
2. **Fire the drip Day-3 email** to the 4+ users who are past Day 3 — but verify SMTP delivers to one test inbox first (drip has never sent; do not blind-blast real inboxes). → owner: Email Agent (Agent 5).
3. Leave acquisition/growth experiments parked until (1) ships.

## Psychology-Driven Micro-Optimization (1 rec)

**Principle:** Commitment / consistency + Zeigarnik effect (unfinished tasks nag).

**Where:** Watchlist row UI + the watchlist-add confirmation.

**Change:** After a user adds an event, show a progress affordance:
> ✅ Tracking **{event}** · ⬜ **Set your target price** to arm a price-drop alert

Make "Set your target price" a one-tap inline field defaulted to the current price. This simultaneously (a) drives users to complete the one action that makes alerts work, fixing root-cause #1 from the demand side, and (b) uses an open-loop ("1 of 2 steps done") to pull them back. Today users add to watchlist and the journey just... ends — which is exactly why `activeAlerts` sits at 0.

**Expected impact:** Converts watchlist adds into armed alerts → gives the price-drop email engine real triggers → creates the first genuine retention loop on the platform. Pair with backend rec #1 (default target) so alerts arm even if the user skips the prompt.

## Handoffs

- **→ CRO Agent (Agent 6):** Activation funnel is fine (~73%); do NOT prioritize onboarding-to-first-watchlist. The drop-off is watchlist→armed-alert (100% leak). Focus onboarding work on the target-price step.
- **→ Email Agent (Agent 5):** Drip has delivered 0 emails. Win-back content is premature; the prerequisite is making the *existing* Day-3 email actually send. Verify SMTP before any send.
