# Growth Daily — 2026-06-04

> **Reality check up front.** This series has a documented failure mode: it spirals into invented churn-percentage narratives ("Day 56 of zero drip / 90.3% churned / colee's deadline tightened") derived from *signup age* as a fake engagement proxy. There is no `last_login_at` in the schema, so active/at-risk/churned are genuinely **uncomputable** — any % there is fabricated. The 06-02 report reset to honest reporting; this one continues it. Every number below comes straight from a live `/admin/*` response.

## User health dashboard

| Segment | Count | Source / note |
|---|---|---|
| Total users | **98** | `/admin/stats` (live) — was 95 on 06-02, **+3 in 2 days** |
| New signups today | **2** | `usersToday=2` |
| New (signed up ≤7d) | **8** | `usersThisWeek=8` |
| Activated (≥1 watchlist item, lifetime) | **117 items across 98 users** | `/admin/stats`; user-list cap makes a clean per-user rate unreliable, so I report the raw totals |
| Active (visited ≤7d) | **uncomputable** | no `last_login_at` field exists — **not zero, unknown** |
| At-risk / Churned (visit-based) | **uncomputable** | same instrumentation gap |

**Other live counters:** active alerts **0** · triggered alerts (lifetime) **0** · newsletter subscribers **3** (unchanged) · favorites **0**.

> **Do not report visit-based active/at-risk/churned percentages.** Signup age ≠ engagement. Reporting it as churn is the exact spiral this series fell into.

## Activation gap (real, small, actionable)

Of the **8** users who signed up in the last 7 days (ids 91–98), **3 have zero watchlist items:**

| User | Age | Watchlist | Note |
|---|---|---|---|
| belles_hayride_4b@icloud.com | ~0.5d | 0 | brand new — too early to nudge, normal |
| doggycj6@gmail.com | ~1.3d | 0 | new — still inside normal first-session window |
| griffin@griffinli.com | ~2d | 0 | **primary nudge target** — flagged "brand new" on 06-02, now 2 days in with still no add |

The other 5 (paradajoseph, mdawg1981, officialrizk72, coleesparrago, mattfleischer) all have ≥1 item. In-window activation is healthy; the gap is 3 users, only 1 of whom (griffin) is past the "give it a day" threshold.

> Note: **pika4696@gmail.com** (id 89, 7d, 0 items) was the 06-02 primary nudge target and remains uninert at Day 7 — the only aged-out new signup that never activated this cohort.

## Two verifiable problems (everything else is noise)

### 1. Drip campaign is sending nothing — confirmed, not new
`/admin/drip-stats` returns `stats: []` and **all 20 pending users show `last_email_sent: 0`**, including users at Day 3, 5, 7, 14, and 20 who are well past their drip triggers. This matches the standing [[drip-campaign-never-sends]] finding: the drip has delivered **0 emails ever**. This is an engineering yes/no (is the 10am-UTC cron firing? does `drip_emails_sent` have rows?), **not** a marketing question.
- **Action → Backend/Eng:** confirm the daily drip job runs and records sends. **Do not blind-trigger `/admin/drip-run`** — 20 real inboxes are queued; a manual fire risks blasting all of them at once.

### 2. No `last_login_at` instrumentation
Without it this agent cannot do its core job — separate active from at-risk from churned. This is the single highest-leverage unblock for retention metrics.
- **Action → CRO/Eng:** add `last_login_at` to `users`, update it in `/api/auth/login` and `/api/auth/me`. One column + two UPDATEs.

### Known backend signal (not escalating)
`/admin/alerts` still returns `{"success":false,"error":"Failed to get alerts"}`. `/admin/stats` independently confirms `activeAlerts:0, triggeredAlerts:0`, so the number is trustworthy regardless. Noting for continuity, not dramatizing.

## Churn signals (today)
- **Unsubscribes today:** 0 (`totalSubscribers=3`, `activeSubscribers=3` → none unsubscribed).
- **At-risk / alert-fatigue candidates:** 0 measurable — `activeAlerts=0` means no user has received a price alert, so alert fatigue cannot exist yet, and at-risk requires login data we don't have.

## Actions triggered today
- **Win-back emails queued:** 0. The drip/alert engine is offline; queuing into a dark engine is theater. Real action is the Eng unblock above.
- **Re-engagement nudges:** 1 candidate — griffin@griffinli.com (Day 2, no watchlist). Handed to Email Agent (Agent 5) as a *manual* first-watchlist nudge, contingent on a working send path. Not auto-sent.

## Psychology recommendation (1 today)
**Principle:** Commitment / consistency (Zeigarnik / progress framing).
**Where:** Post-signup dashboard empty state — the moment a new user lands with 0 watchlist items (currently 3 of 8 recent signups).
**Change:** Replace the generic empty watchlist with a 1-step progress prompt: a single-line "You're 1 step from your first price alert — add an event to start tracking" with a pre-filled example search (e.g. a trending World Cup or NBA Finals event already in the dataset, like the Knicks Gm3 that 3 users independently watch). Ownership framing: label it "Your watchlist" not "Watchlist."
**Why it fits today's data:** the activation gap is small and concentrated in the first 48h, exactly where a low-friction "add one thing" nudge has the most leverage. No invented metric attached — this is a hypothesis to A/B, and we can't measure lift until `last_login_at` and a basic event log exist.

## Handoffs
- **→ CRO Agent (6):** activation gap is 3/8 recent signups with 0 watchlist; only griffin (Day 2) is actionable. Onboarding empty-state nudge recommended above.
- **→ Email Agent (5):** griffin first-watchlist nudge (manual, pending working send path); 20 drip-pending users blocked on the cron, do not blast.
- **→ Eng (both problems):** drip cron not recording sends; add `last_login_at`.
