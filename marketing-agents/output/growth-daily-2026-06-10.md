# Growth Daily — 2026-06-10

> All figures pulled live from `/api/admin/stats`, `/api/admin/users`, `/api/admin/watchlist`, `/api/admin/drip-stats` at run time. Where a metric is not instrumented, it is marked **Not measurable** rather than estimated. (`churn-prevention` / `marketing-psychology` skills are not installed in this environment; their principles are applied directly below.)

## User Health

| Segment                       | Count | Source / Notes |
|-------------------------------|-------|----------------|
| Total users                   | 111   | stats.totalUsers |
| New (last 7 days)             | 15    | stats.usersThisWeek |
| New (today)                   | 2     | stats.usersToday |
| Activated (has ≥1 watchlist)  | 30 of most-recent 50 visible (60%) | users endpoint caps at 50 rows |
| Active (visited in 7d)        | **Not measurable** | no `last_login`/session column exists |
| At-risk (no visit 7–14d)      | **Not measurable** | same — cannot compute visit recency |
| Churned (no visit 14d+)       | **Not measurable** | same |
| Watchlist items (total)       | 136   | stats.totalWatchlistItems |
| **Active price alerts**       | **0** | stats.activeAlerts |
| **Alerts ever triggered**     | **0** | stats.triggeredAlerts |
| Newsletter subscribers        | 3     | stats.activeSubscribers |
| Favorites set                 | 0     | stats.totalFavorites |

**Honesty note:** The user record has no last-seen/login timestamp, so the at-risk/churned ladder this task asks for cannot be built from real data. I am not inventing it. (This is the same gap that produced a fabricated "0-signups outage" narrative in a prior run — flagged in memory.) Signups are healthy and ongoing: 15/wk, 2 today.

## Activation Gap (the part I *can* measure)

Activation — signup → first watchlist item — is **not** the bottleneck:

- Of 15 signups in the last 7 days, **13 added a watchlist item (87%)**. Only 2 have zero:
  - `mbhall99@icloud.com` (2026-06-05)
  - `belles_hayride_4b@icloud.com` (2026-06-03)

The recent activation funnel is working. The retention failure is **one step later**.

## The real retention killer: watchlist → alert is severed at the source

- **0 of 136 watchlist items have a `target_price` set** (verified: 0 of 50 sampled rows, and stats.activeAlerts = 0 confirms it holds for all).
- Because no targets exist, the price-drop alert engine **has never fired for a single user** (triggeredAlerts = 0, all-time).
- This means every activated user hits a dead end: they add an event, then receive **nothing** that pulls them back. The core retention mechanism is structurally inert — not underperforming, *never armed*.

Second retention engine is also down:
- **Drip campaign: 0 emails sent, all-time** (`drip-stats.stats = []`). Pending users are stacking up (everyone shows `last_email_sent: 0`), several now 5–6 days past signup with nothing delivered.

So both designed retention loops (price alerts + drip) are currently non-functional. No amount of new-user growth retains while both are off.

## Churn Signals

- Unsubscribes (24h): **0** (3 of 3 subscribers still active).
- New at-risk users today: **Not measurable** (no visit data).
- Alert-fatigue candidates: **0** — impossible by construction, since 0 alerts have ever been sent.

## Actions Triggered (honest accounting)

- Win-back emails queued: **0.** I cannot queue them truthfully — (a) there is no last-login signal to identify who is actually inactive, and (b) the email send path itself (drip) delivers nothing. Reporting "N queued" would be fiction.
- Re-engagement nudges sent: **0**, same reason.

Instead of fabricating sends, the high-leverage interventions are infrastructure fixes, handed off below.

## Psychology-Driven Optimization — today's pick

**Principle:** Commitment / Consistency (with a Goal-Gradient progress cue).

**Where:** The watchlist item card + the post-add confirmation state (web), and the watchlist empty-to-armed transition.

**Why this one:** The single biggest retention lever is the 0% target-price rate. Users complete step 1 (add event) but never complete step 2 (set a target), so they never enter the alert loop that brings them back. A commitment cue on the item they *already own* (endowment framing — "Your watchlist") is the cheapest path to arming alerts.

**Exact change:**
- On every watchlist card with no target, show an inline prompt:
  > **You're 1 step from your first price alert.** Set a target price and we'll email you the moment it drops. → `[Set target ▸]`
- Pre-fill the input with a sensible default (e.g. current lowest − 15%) so the action is one tap, not a blank field.
- After they set it, flip the card to a "✓ Alert armed — watching for you" state (consistency reinforcement + ownership language).

**Expected impact:** Moves target-price coverage off 0%. Even a 25–30% set-rate on the 136 existing items would arm ~35–40 alert loops — the first time the platform's core retention mechanism would actually run. Caveat: this only retains if the price-tracking cron is genuinely writing prices and alerts fire (see hand-off #2 — price_history has been reported empty, so verify the pipeline end-to-end before celebrating).

## Hand-offs

1. **→ CRO Agent (6):** Activation is fine (87%); stop optimizing signup→watchlist. Redirect onboarding effort to **watchlist→target_price**. Ship the "1 step from your first alert" inline prompt above.
2. **→ Email Agent (5) / Eng:** Two infra blockers gate all retention, both pre-existing:
   - Drip pipeline sends 0 emails — diagnose the send path before any win-back work; win-back rides the same rails.
   - Confirm the price-tracking cron actually writes to `price_history` and that target-price alerts fire end-to-end. If price data is empty, arming targets still produces no alerts.
3. **→ Product:** Add a `last_login` / `last_active_at` timestamp to users. Until it exists, every "at-risk / churned / re-engagement" metric in this agent's brief is unmeasurable, and any number reported for them would be invented.

## One-line summary

Growth is healthy (111 users, +15/wk, 87% activate). Retention is structurally broken: **both** designed loops are off — 0/136 watchlist items have a target price so price alerts have never fired, and the drip campaign has sent 0 emails all-time. Fix the two loops before adding more top-of-funnel.
