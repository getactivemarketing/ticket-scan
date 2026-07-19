## Growth Daily — 2026-07-19

**Source:** Live `/admin/stats`, `/admin/users` (3 pages, 150/171 sampled), `/admin/drip-stats`  
**Note:** No `last_login` column → Active / At-risk / Churned segments genuinely n/a; not reported.

---

### User Health

| Segment                        | Count | Notes                              |
|--------------------------------|-------|------------------------------------|
| Total users                    | 171   | +25 vs 7/8 (146), +13 this week, +2 today |
| Activated (has ≥1 watchlist)   | ~103  | 90/150 sampled = 60% all-time      |
| Not activated (0 watchlist)    | ~68   | 40% all-time                       |
| Active / At-risk / Churned     | n/a   | No `last_login` column             |
| Power users (3+ watchlist)     | 13    | ids 170,125,112,105,103,82,76,62,59,51,36,32,29 |
| Total watchlist items          | 184   | +16 vs 7/8                         |
| Active price alerts            | 0     | Platform-wide (no target prices set) |
| Email subscribers              | 3     | Unchanged                          |

---

### Activation Gap — Last 7 Days

**14 signups** from 7/12–7/19; **7 (50%) have 0 watchlist items**:

| User ID | Signup | Days Ago | Watchlist |
|---------|--------|----------|-----------|
| 168     | 7/16   | 2        | 0         |
| 167     | 7/16   | 2        | 0         |
| 166     | 7/15   | 3        | 0         |
| 161     | 7/13   | 5        | 0         |
| 160     | 7/13   | 6        | 0 ⚠️ bad domain: `.con` — undeliverable |
| 159     | 7/13   | 6        | 0         |
| 158     | 7/12   | 7        | 0         |

For CRO Agent: 50% new-cohort activation gap is unchanged from prior weeks. The fix is a "set your first alert" prompt immediately after watchlist-add — still unshipped.

---

### Drip Campaign Status

**0 emails sent all-time.** Drip cron is dead. API returns 20 most-recent pending users:

| Overdue threshold          | Count | Action needed              |
|----------------------------|-------|----------------------------|
| Email 1 due (≥ day 3)      | 15    | ids 152–166 (days 3–8)     |
| Email 2 due (≥ day 7)      | 7     | ids 152–158 (days 7–8)     |
| Pre-threshold (< day 3)    | 5     | ids 167–171 (days 0–2)     |

Actual backlog is larger — many users with ids < 152 also have `last_email_sent=0` and are 30+ days overdue for all 5 emails. The API's `pendingUsers` caps at 20 most recent.

**Churn risk from dead drip:** Every user who signed up expecting follow-up communication has received nothing. No win-back mechanism exists. Without drip or alerts, there is zero automated re-engagement platform-wide.

---

### Churn Signals

- Unsubscribes today: n/a (no unsubscribe tracking in API)
- Alert fatigue: n/a (0 alerts have ever fired)
- At-risk / churned segments: n/a (no `last_login`)

One concrete signal: id 160 registered with `danielldk930@gmail.con` (`.con` TLD) — that address cannot receive any email. Minor data-quality note for the email agent.

---

### Psychology Optimization — Loss Aversion on Watchlist Empty State

**Principle:** Loss Aversion (people weight losses ~2× more than equivalent gains)

**Where to apply:** `web/src/app/watchlist/page.tsx` — the empty state shown to activated users with 0 watchlist items, and the post-add state shown to users with 1 item and no target price.

**Current state:** Generic "Add events to your watchlist" prompt. No consequence framing.

**Recommended copy change:**

*Empty state (0 items):*  
`"Ticket prices are moving right now. Without a watchlist, you'll have no way to know when to buy."`  
→ CTA: "Track your first event"

*Post-add, no target price (1 item, target=null):*  
`"You're watching this event — but without a target price, we can't alert you if it drops. Set a target and you'll be the first to know."`  
→ inline input: "Alert me at $___"

**Why this works here:** The feature framing today is all gain ("save money"), which is easy to ignore. Flipping to what the user *loses without acting* (a price drop they'll miss) is more viscerally motivating. It also directly arms the alert pipeline — the only path to retention value.

**Expected impact:** Higher target-price set rate → activeAlerts > 0 for first time → price-drop emails start firing → first real retention loop closes.

---

### Actions Triggered

- Win-back emails queued: 0 (no mechanism to queue; drip cron must be fixed first)
- Re-engagement nudges sent: 0 (same)
- Data anomaly flagged: id 160 undeliverable email address

### Handoffs

- **→ CRO Agent:** Activation gap 7/14 = 50% in new cohort. Loss-aversion empty-state copy above addresses both activation and alert-arming in one change.
- **→ Email Agent:** Drip cron still dead; 15 users overdue for Email 1 now. Top priority before any new email creative.
