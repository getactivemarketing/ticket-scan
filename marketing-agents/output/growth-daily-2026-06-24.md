# Growth Daily — 2026-06-24

> All figures pulled live today from `/api/admin/stats`, `/api/admin/users`, `/api/admin/drip-stats`. Segments that depend on visit recency are marked **n/a** — there is no `last_login` column in the schema, so "active / at-risk / churned by visit" cannot be computed. Not estimated, not invented.

## User Health

| Segment                              | Count | vs 6/23 | Source / Notes |
|--------------------------------------|-------|---------|----------------|
| Total users                          | 130   | +2      | `stats.totalUsers` |
| New (last 7 days)                     | 9     | 0       | `stats.usersThisWeek` |
| New (today)                          | 2     | 0       | `stats.usersToday` |
| Total watchlist items                | 159   | +0\*    | `stats.totalWatchlistItems` |
| With an active price alert           | **0** | 0       | `alerts_count=0` for every user; `stats.activeAlerts=0` |
| Active subscribers                   | 3     | 0       | `stats.activeSubscribers` |
| Active / At-risk / Churned by visit  | n/a   | —       | no `last_login` field exists — uncomputable |

\* 2 new signups today, but watchlist total held at 159 — both of today's accounts (ids 130, 129) added 0 events.

## Activation Gap

- **Last-7-day cohort (9 users):** 6 added a watchlist item, **3 have 0** — ids **130** and **129** (both signed up today) and **126** (6/21). Today's two signups both bounced before adding anything; worth watching whether it's a one-day blip or a re-opening of the onboarding leak.
- The structural gap is still one step downstream: **everyone who built a watchlist has 0 armed alerts.** Watchlist → alert conversion is **0% across the whole base** (every `target_price` is `null`). Root cause unchanged — no target-price input control exists in the watchlist/EventCard UI, so no alert can arm. This is a shipping fix, not an analysis gap. See `watchlist-no-targets-alerts-cant-arm`.

## Churn Signals

- **Unsubscribes today:** 0 (subscribers 3/3, unchanged).
- **At-risk / new-churn today:** n/a (no visit data).
- **Alert fatigue:** 0 — impossible by construction; no alert has ever fired (`triggeredAlerts: 0`).
- **Drip is still the live retention leak:** 20 users sit in the queue with `last_email_sent: 0`; `drip-stats.stats` is an empty array — **no drip email has ever sent to anyone.** **15** of those 20 are already past the Day-3 trigger (up to 14 days since signup, e.g. id 111 brickin8tor). Every new user gets zero lifecycle touches. Infra/sender failure, not a content problem. See `drip-campaign-never-sends`.

## Actions Triggered

- **Win-back / nudge emails sent: 0.** There is no working send path — the drip sender itself delivers nothing, so layering win-back mail on top would also no-op. I am **not** blind-triggering `drip-run` (risk of blasting real inboxes once a fix lands). Correct next action: verify and repair the drip/email sender, then let the existing schedule drain the 20-user backlog. Flagged to Email Agent (Agent 5), not auto-fired.

## Psychology-Driven Optimization (1)

- **Principle:** Commitment / consistency (+ endowment framing).
- **Where:** Watchlist page and EventCard "added" state.
- **The change:** After a user adds an event, show a 2-step progress cue — **"Step 1 of 2: tracking ✓ — Step 2: set your target price to arm an alert"** — with the inline price input right there (the input that currently doesn't exist). A half-finished progress indicator pulls people to complete it, and "your target price" reinforces ownership of the watchlist they already built.
- **Why this one, grounded in today's data:** every watchlist user has **0** armed alerts. The product's core value (price-drop alerts) is literally unreachable because the arming step has no UI. The recommendation is therefore: *ship the target-price input, wrap it in the progress cue.* Highest-leverage retention change available — the already-activated cohort is sitting right at the cliff edge.

---
### Handoffs
- **→ Agent 6 (CRO):** Onboarding fix = build the watchlist target-price input + 2-step progress cue. Unblocks 0% watchlist→alert conversion for the entire base.
- **→ Agent 5 (Email):** Repair the drip sender (0 sent, ever; 20 queued, 15 past Day-3). No win-back content is worth queuing until a send path exists.
