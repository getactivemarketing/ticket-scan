# Growth Daily — 2026-06-17

> **Reality check up front.** This series has a documented spiral: inventing visit-based churn % from signup age. There is **no `last_login_at`** in the schema, so active/at-risk/churned are genuinely **uncomputable** — any % there would be fabricated. Every number below is from a live `/api/admin/*` response pulled today. The admin key now authenticates (it 401'd in earlier runs), so for the first time these are first-party counts, not guesses.
>
> Skills `churn-prevention` and `marketing-psychology` are named in the task but are **not installed** in this environment, so they were not invoked. Reasoning below is done inline and labeled.

## User health dashboard

| Segment | Count | Source / note |
|---|---|---|
| Total users | **121** | `/admin/stats` (live) |
| New today | **2** | `usersToday=2` |
| New (≤7d) | **10** | `usersThisWeek=10` |
| Activated (≥1 watchlist item) | **149 items across 121 users** | `/admin/stats`; user-list endpoint caps at 50 rows, so no clean lifetime per-user rate |
| Active (visited ≤7d) | **uncomputable** | no `last_login_at` field — **unknown, not zero** |
| At-risk / Churned (visit-based) | **uncomputable** | same instrumentation gap |

**Other live counters:** active alerts **0** · triggered alerts (lifetime) **0** · newsletter subscribers **3** · favorites **0**.

> Growth is alive: +10 users this week, +2 today. This directly contradicts the old "0 signups forever / engine outage" spiral — do not resurrect it.

## Activation gap (measurable, from the 50 most-recent users)

The `/admin/users` endpoint returns the 50 newest users with per-user `watchlist_count`. Of those 50:

- **21 / 50 (42%)** have **0 watchlist items** — never activated.
- Of the **10** signups in the last 7 days, **5 have 0 watchlist items** (ids 117, 116, and 3 others). The other 5 added exactly 1 item each.
- Power-user ceiling is low: max watchlist_count across all 50 is **9**; almost everyone with a list has just 1.

This is the one retention lever that's real, measurable, and actionable. Most users who do activate add a single event and stop.

## Two dead retention loops (this is the actual story)

Win-back/drip/alert "interventions" can't be "queued" because the machinery that would send them does not run. Both confirmed live today:

### 1. Price alerts can't arm — `activeAlerts = 0`, every `target_price` is null
`/admin/stats` shows `activeAlerts: 0` and `triggeredAlerts: 0` lifetime. `/admin/watchlist` shows `target_price: null` on every item inspected. Nobody sets a target, so the 4-hour price-drop loop has nothing to fire on. The headline retention feature is severed at the data-entry step. ([[watchlist-no-targets-alerts-cant-arm]]) Also: `/admin/alerts` returns **HTTP 500** — the alerts admin view itself is broken ([[price-history-empty-alerts-broken]]).

### 2. Drip has sent 0 emails, ever — 20 users overdue
`/admin/drip-stats` returns `stats: []` and **all 20 pending users show `last_email_sent: 0`**, including users at Day 9, 10, 11, and 12 well past their Email-1 (Day 3) and Email-2 (Day 7) triggers. Matches the standing [[drip-campaign-never-sends]] finding. This is an engineering yes/no (does the 10am-UTC cron fire? does `drip_emails_sent` get rows?), not a marketing task.
- **Do not blind-trigger `/admin/drip-run`** — 20 real inboxes would blast at once.

## Actions triggered

- Win-back emails queued: **0** — the drip sender doesn't run; queuing fiction helps no one.
- Re-engagement nudges sent: **0** — same.
- **Real action → Backend/Eng:** (a) confirm the daily drip cron fires and writes `drip_emails_sent`; (b) capture a `last_login_at` so churn becomes measurable; (c) fix the `/admin/alerts` 500.

## Psychology-driven optimization (1 recommendation)

**Principle:** Commitment/consistency + endowment effect.
**Where:** the add-to-watchlist flow (frontend) + `target_price` capture.
**Problem it attacks:** 42% activation gap *and* `activeAlerts=0` share one root — adding a watchlist item asks for no commitment and sets no target, so the user gets no follow-up value and never comes back.
**Exact change:** Make the watchlist add a 2-field micro-commitment instead of a 1-click bookmark. After "Add to watchlist," immediately show: *"We'll watch **[Event]** for you. Tell us your price and we'll email you the second it drops below it →"* with a pre-filled suggested target (e.g. current low − 15%) the user can accept or edit. Frame ownership: *"Your alert is armed."*
**Why this and not a win-back email:** a win-back email can't be sent (drip is dead), but this change requires no backend cron — it just writes a non-null `target_price` at add time, which is the single value that makes the *existing* 4-hour alert loop start producing the emails that drive return visits. It converts a dead bookmark into an armed alert, the platform's core retention promise.
**Expected impact:** moves `activeAlerts` off 0 for the first time; gives every new activated user a concrete reason to return (a price-drop email). Unmeasurable in % until alerts actually fire — no fabricated lift number.

## Handoffs

- **→ CRO (Agent 6):** 42% of recent users never add a watchlist item; the highest-leverage onboarding fix is folding a target-price prompt into the add flow (see recommendation above).
- **→ Email (Agent 5):** drip remains a no-op (0 sent, 20 overdue). No new win-back copy is worth writing until the sender runs — the blocker is the cron, not the content.
