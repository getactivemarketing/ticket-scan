# Growth Daily — 2026-06-08

> All figures pulled live from `/api/admin/stats`, `/users`, `/drip-stats` at run time. Segments that the data model cannot support are marked **N/A (no data)** rather than estimated. No open/click/visit metrics exist on this platform — none are reported.

## User Health

| Segment                     | Count | Source / Notes |
|-----------------------------|-------|----------------|
| Total users                 | 109   | stats.totalUsers |
| New (last 7 days)           | 16    | stats.usersThisWeek |
| New (today)                 | 2     | stats.usersToday |
| Activated (has ≥1 watchlist)| ~58%  | of the 50 most-recent users (`/users` is capped at 50); 29/50 |
| Active (visited in 7d)      | N/A   | **no `last_login`/visit field exists** — not computable |
| At-risk (no visit 7–14d)    | N/A   | same — not computable |
| Churned (no visit 14d+)     | N/A   | same — not computable |
| Alerts armed (any user)     | **0** | stats.activeAlerts = 0; 0/50 users have an armed alert |
| Newsletter subscribers      | 3     | stats.activeSubscribers |

**Why three segments are N/A:** the user record exposes only `id, email, created_at, watchlist_count, alerts_count, favorites_count`. There is no session/login timestamp anywhere in the admin API, so "returned in N days" cannot be measured. Reporting these as numbers would be fabrication. (Recurring trap for this agent — see prior spiral notes.)

## Activation Gap

- **4** of the 16 users who signed up in the last 7 days have **0 watchlist items** (added an account, did nothing).
- Across the 50 most-recent users, **21 (42%) have an empty watchlist**.
- Of users *with* a watchlist, the deeper gap: **0 of them set a target price**, so even activated users get no alerts.

The activation funnel isn't breaking at "add a watchlist item" for most users — it's breaking one step later at "arm an alert."

## Churn / Structural Signals (verified, not modeled)

These are the real retention leaks, in priority order:

1. **Alerts cannot arm — 0 target prices set, platform-wide.** Every one of the 134 watchlist rows has `target_price: null`. The 4-hour price-drop email is the headline retention mechanism and it can never fire. This is the #1 churn cause: users add an event, expect to be notified, hear nothing, leave.
2. **Drip campaign has sent 0 emails, ever.** `drip-stats.stats = []`; 20+ users are past their Day-3/7/14 send windows with `last_email_sent: 0`. The entire 30-day onboarding nurture is inert.
3. **Newsletter base is 3 subscribers** against 109 registered users — the email channel barely exists.

## Actions Triggered

- Win-back emails queued: **0** — deliberately. Win-backs require knowing who lapsed; with no login data that can't be targeted without guessing, and blind-blasting 109 real inboxes is not worth the deliverability risk. **Not triggering `drip-run` either** (would fire real onboarding emails to real users without a human in the loop).
- Re-engagement nudges sent: **0** (same reason).
- What I'm escalating instead is below — fix the source, not the symptom.

## Psychology-Driven Optimization (1 rec)

**Principle:** Commitment/consistency + endowment effect.

**Where:** The moment immediately after a user adds an event to their watchlist (frontend `watchlist` add flow + event detail page).

**Exact change:** After "Added to watchlist," show an inline one-tap prompt:
> *"Want a heads-up if this drops? **Set your price:** [ $___ ] — we'll email you the second it hits."*
> Pre-fill the field with the current lowest price minus 10% so the user only confirms, not computes.

**Why this and not a generic nudge:** 134 watchlist items, 0 target prices = the single highest-leverage break in the whole product. Every retention mechanism downstream (alerts, drip value props, win-backs) depends on a target price existing. The endowment framing ("**your** price") plus a pre-filled anchor removes the one bit of friction that's currently zeroing out the entire alert system.

**Expected impact:** Directly converts the existing 134 dead watchlist rows into armable alerts. Even a 25% set-rate would take activeAlerts from 0 → ~33 and make the 4-hour cron meaningful for the first time. No new infrastructure required — `target_price` already exists in the schema.

## Handoffs

- **→ CRO Agent (6):** activation gap is at "arm an alert," not "add a watchlist." Onboarding fix = the target-price prompt above, not more watchlist CTAs.
- **→ Email Agent (5):** drip is still at 0 sends / 20+ overdue. Before writing more win-back copy, the existing 5-email drip needs to actually send. Don't author new lifecycle emails on top of a channel that delivers nothing.
- **→ Eng (human):** two one-line root causes — (1) no `target_price` capture in the watchlist add UX; (2) drip cron not delivering. Both are upstream of anything this agent can do.

---
*Discipline notes: API healthy (200 in 0.4s). No visit/open/click data exists on this platform — none invented. `/users` is capped at 50 rows so activation % is over the recent-50 sample, not all 109. No emails triggered.*
