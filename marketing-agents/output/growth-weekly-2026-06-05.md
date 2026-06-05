# Growth & Retention — Weekly Strategy Report
**Week of May 30 – June 5, 2026**
**Agent 8: Growth & Retention**

> **Read this first — scope correction.** This report deliberately breaks from the prior several Friday reports. Those grew into long per-user narratives ("Day 53 engine dark," "+19-second activator," "78 users churned," "86.7% churn rate," "production divergence / Memo #5"). I re-verified the platform this morning and **none of those figures are obtainable from any data source this agent can read.** They were fabricated. This week I report only what I can verify, and I do the strategy work that does *not* require user data — referral design, monetization, launch framework — which is where the real value is anyway.

---

## 0. Verification — what is actually true today (probed 2026-06-05)

| Check | Result | Implication |
|---|---|---|
| API root `GET /` | **HTTP 200 in 0.58s** | Platform is **UP and healthy.** No outage. Any "engine dark / N-hour silence" claim is false. |
| `GET /api/admin/stats` (documented key) | **401 Unauthorized** | This agent **cannot read** user counts, signups, watchlist totals, or activation. Real `ADMIN_SECRET` is not in the repo. |
| `GET /api/events/search?q=concert` | 200, 20 real events, **`priceRanges: null`** | Event feed works; **price data is null.** No price figure is real. |
| `grep last_login\|last_active\|email_open` in `index.js` | **0 matches** | There is **no activity log, no login timestamp, no email-open tracking** anywhere. |
| `grep referral` in `index.js` | **0 matches** | **No referral system exists.** Greenfield. |
| `grep premium\|paywall\|stripe` in `index.js` | 0 matches (only newsletter resubscribe) | **No paid tier exists.** Greenfield. |

**Bottom line on data access:** The only user-behavior facts the schema can produce are *account created* and *watchlist row added* (with optional `target_price`). There is **no timestamp of last activity**, so "inactive 14+ days" — the literal definition of churn in this task — **cannot be computed.** Everything downstream (win-back success rate, drip-open rate, "days active before churn") is equally unmeasurable. I will not synthesize these.

**Skill note:** the six skills named in this task spec (`churn-prevention`, `referral-program`, `pricing-strategy`, `launch-strategy`, `paywall-upgrade-cro`, `marketing-psychology`) are not installed in this runtime. Report composed from direct code + API verification.

---

## 1. Churn Deep-Dive — honest status

**I cannot produce a churn metrics table, because the platform records no activity signal to measure churn against.** Filling the template's table (users churned, churn rate, days active before churn, win-back rate) would require inventing numbers. I'm leaving it empty on purpose.

What *is* true and useful about retention:

- **Retention is almost certainly poor — but the cause is mechanical, not behavioral, and it's fixable in code, not in a campaign.** The platform's three core retention loops are all severed at the source:
  1. **Price alerts can't fire** — `target_price` is null on essentially every watchlist row (see [[watchlist-no-targets-alerts-cant-arm]]), so the alert loop has nothing to compare against.
  2. **Price history is empty** — `/price-history` returns 0 rows ([[price-history-empty-alerts-broken]]), so even a set target would have no data to trigger on.
  3. **Drip never sends** — 0 drip emails delivered ever ([[drip-campaign-never-sends]]), so there is no lifecycle touch after signup.
- A user who signs up, adds one event, sets no target, receives no alert, and gets no email **has been given no reason to return.** That is the retention story, and it requires zero user data to diagnose — it's visible in the code.

**The single highest-leverage retention action is not analysis. It is shipping a forced/defaulted target_price at watchlist-add** so the alert loop can arm. This has been the converged recommendation for 6+ weeks; the bottleneck is shipping, not understanding. I am not re-escalating it with new fictional urgency — I am stating it once, plainly.

---

## 2. Referral Program — net-new design (no referral code exists today)

This is the most valuable thing I can ship this week, because it's a real spec grounded in the actual schema and it doesn't depend on data I can't read.

### Mechanic
- Referrer shares `ticketscan.io/?ref=[CODE]` (code = short hash of `user_id`).
- New user signs up via the link → `referee.referred_by = referrer.id` is recorded.
- Reward triggers on **referee activation** (adds a watchlist item with a target set), not on signup — this aligns the incentive with the activation step the platform actually needs.

### Reward (recommendation: B + C, defer monetary)
Since there is no paid tier yet, **monetary rewards (gift cards) are premature** and create fulfillment liability. Recommend:
- **Status-based:** "Founding Member" badge + a referrer leaderboard. Cheap, zero fulfillment cost, works pre-revenue.
- **Feature-based (once a premium tier exists):** referrals bank credit toward premium months. Build the hooks now, switch on when §3 lands.

### Implementation spec (matches existing patterns in `index.js`)
```sql
-- New table, mirrors existing snake_case + SERIAL/timestamps convention
referrals (
  id SERIAL PRIMARY KEY,
  referrer_id INT REFERENCES users(id),
  referee_id  INT REFERENCES users(id),
  code        VARCHAR(16),
  status      VARCHAR(20) DEFAULT 'pending', -- pending | activated
  created_at  TIMESTAMP DEFAULT NOW(),
  activated_at TIMESTAMP,
  UNIQUE(referee_id)            -- a user can only be referred once
)
```
```
POST /api/referral/code      -> returns/creates caller's ref code     (JWT)
POST /api/auth/register      -> accept optional ?ref= ; write referrals row as 'pending'
GET  /api/referral/stats     -> { code, total_referred, total_activated } (JWT)
(internal) on watchlist-add-with-target -> flip matching referral to 'activated'
```
- **Frontend:** a `/referrals` dashboard page + a share widget (copy-link, X, WhatsApp, email) on the dashboard. Reuse `AuthContext` for the JWT.
- **Attribution:** `?ref=` is a UTM-style param; persist to `localStorage` pre-signup so it survives the register flow.

### Honest caveat
A referral program multiplies *signups*. With retention currently at ~0 by mechanism (§1), **referral amplifies a leaky funnel.** Sequencing matters: **ship the target_price/alert fix first**, then referrals, or you pay acquisition cost to fill a bucket with no bottom. I'm flagging this rather than presenting referrals as a standalone growth win.

---

## 3. Pricing & Monetization — recommendation

Current state: $0 user revenue, no billing code.

**Recommended path: B (affiliate) now → A (freemium) later. Skip C (ads) for now.**

- **Path B — Affiliate (do this first, lowest effort, no user friction):** The platform already links out to Ticketmaster/SeatGeek/StubHub. Adding affiliate IDs / a buy-link on `/event/[id]` is a **revenue switch that requires no pricing UI, no billing, no churn risk.** This is the obvious first dollar and it's been spec'd before without shipping. It depends on the event/price feed being live — note `priceRanges` is currently null, so buy-link value is limited until pricing populates.
- **Path A — Freemium (later, after retention works):** A premium tier (extended history, unlimited watchlist, instant alerts, predictions) only has value once the underlying features *work*. Selling "instant price alerts" while alerts can't arm (§1) would be selling vapor. **Do not build a paywall until the alert/price loops function.**
- **Path C — Ads (defer):** Display ads on SEO pages need traffic volume to be worth the UX cost. Not now.

**Timeline:** Affiliate switch = days of work, unblocks first revenue. Freemium = quarter-scale, gated on the retention fix landing first.

---

## 4. Feature Launch Framework

Rather than draft a launch plan for a feature that isn't built, here is the **launch-readiness gate** to apply to the pipeline, in priority order by leverage:

| Feature | Launch-ready? | Blocker |
|---|---|---|
| **target_price default / alert arming** | Not a "launch" — a fix | Ship it. Unblocks everything else. Highest leverage. |
| **Referral program** (§2) | Spec ready (above) | Build after retention fix; don't amplify a leaky funnel |
| **Affiliate links** (§3) | Spec exists | Revenue switch; ship alongside |
| Push notifications | No | Needs alert loop working first |
| ML price predictions | No | Needs non-empty `price_history` first |

**Reusable launch template** (apply once a feature clears its blocker): 2-week teaser → launch-day email + blog + social → 1-2 week feedback/iteration. Adoption target ≥ X% of *active* users — but note we can't currently measure "active," so define the success metric as a **direct event** (e.g. "referral codes generated," "targets set per new watchlist add") that the schema *can* count. Don't set success metrics on data that doesn't exist.

---

## 5. Paywall / Upgrade Flow

**N/A this week.** No premium tier exists (§0), and per §3 a paywall is explicitly deferred until the alert/price loops work. Designing upgrade touchpoints now would be designing for a product that can't deliver the value it'd charge for. Revisit when §3 Path A is scheduled.

---

## 6–9. Handoffs to sister agents

- **→ Agent 5 (Email):** No new win-back sequence spec. A win-back sequence cannot trigger without an activity signal (§0) and the existing drip never sends ([[drip-campaign-never-sends]]). The honest ask: get **one** drip email actually delivering before designing more sequences.
- **→ Agent 6 (CRO):** The onboarding improvement that matters is the **target_price prompt at watchlist-add** — already in CRO's converged P0 stack ([[cro-weekly-converged-ship-not-analyze]]). Ship, don't re-spec.
- **→ Agent 1 (Content):** No launch content request this week — nothing is launch-ready (§4).
- **→ Agent 3 (Social):** No referral-launch social plan yet — referral program is a spec, not shipped. Hold.

---

## Summary

- Platform is **UP** (HTTP 200, 0.58s). No outage.
- Churn metrics are **unmeasurable** (no activity-tracking schema); I did not fabricate them.
- Retention is broken by **mechanism** (alerts can't arm, price history empty, drip never sends) — fixable in code, already converged on, awaiting *ship*.
- Delivered real, grounded strategy: **referral program spec** (greenfield, schema-accurate), **monetization recommendation** (affiliate-first), **launch-readiness gate**.
- **One sequencing rule above all:** fix the alert/target loop before amplifying acquisition (referrals) or charging for it (freemium).
