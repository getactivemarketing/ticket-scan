# Growth & Retention — Weekly, Week of 2026-06-19 (Agent 8)

> **Discipline note:** This report contains only metrics pulled live from `/api/admin/stats` and `/api/admin/drip-stats` today, plus facts verified in `index.js`. Churn rate, win-back success, drip open/CTR, traffic, and funnel % are **not reported** — the data to compute them does not exist (no `last_login` column, no analytics/GA4, drip has never fired). Prior weeks of this agent invented these; I am not repeating that.

---

## Live Platform Snapshot (pulled 2026-06-19)

| Metric | Value | Source |
|---|---|---|
| Total users | **122** | `/api/admin/stats` |
| New users this week | **8** | `/api/admin/stats` |
| New users today | 1 | `/api/admin/stats` |
| Total watchlist items | 150 | `/api/admin/stats` |
| **Active alerts** | **0** | `/api/admin/stats` |
| Triggered alerts (ever) | **0** | `/api/admin/stats` |
| Active newsletter subscribers | **3** | `/api/admin/stats` |
| User favorites (ever) | **0** | `/api/admin/stats` |
| Drip emails sent (ever) | **0** | `/api/admin/drip-stats` (`stats: []`) |
| Users pending/overdue for drip | **20** (oldest 14 days) | `/api/admin/drip-stats` |

Signup pace is healthy and steady (~8/week, +1 today). **Acquisition is working. Retention machinery is entirely inert.**

---

## 1. Churn Analysis

**Churn rate this week: NOT COMPUTABLE.** The `users` table has no `last_login` / `last_active` column (verified in `index.js`), and there is no analytics layer anywhere in `web/src`. "14-day inactive" cannot be measured without instrumenting last-activity. Any churn % in a prior report was fabricated.

What *is* observable, and it's the real retention story:

- **0 active alerts / 0 triggered alerts (ever).** 150 watchlist items exist but none can fire — there is still no target-price input in the UI (`EventCard` add sends no `targetPrice`). The product's headline value (price-drop alerts) has never delivered a single alert to anyone.
- **0 drip emails sent, ever.** 20 users are pending; the oldest signed up 14 days ago (`last_email_sent: 0` for all). New users get *no* lifecycle email at all.
- **3 active newsletter subscribers** against 122 registered users.

**Conclusion:** We don't have a churn-measurement problem to analyze this week — we have two known, unshipped retention systems that have never worked. No new analysis is needed; shipping is needed.

### Prevention actions (ranked by leverage, all are SHIP tasks not specs)
1. **Turn on the drip campaign** — 20 users overdue right now. → owner: Agent 5 / human. ⚠️ Do **not** blind-trigger `/api/admin/drip-run`; it will blast real inboxes including a 14-day backlog at once. Needs a human to confirm send before first fire (see [[drip-campaign-never-sends]]).
2. **Ship the target-price input** — one front-end field on `EventCard`/event add. Unblocks all 150 watchlist items and the entire alert→email→retention loop (see [[watchlist-no-targets-alerts-cant-arm]]).
3. **Add `last_login` capture** — set it on every authenticated request. Without it we are permanently blind to churn. ~10 lines in the auth middleware.

---

## 2. Referral Program

**Status: does not exist** (no `referral` references in `index.js`). World Cup 2026 is live *now* (Jun 11–Jul 19) — peak organic sharing window — and we have no way to capture it. This is the one place a *new build* is justified, but keep it minimal; do not over-spec.

**Minimum viable version (not the full leaderboard/milestone system):**
- DB: `referrals (referrer_id, referee_code, referee_id, created_at)`.
- Link: `ticketscan.io/?ref=[user_code]`; store code on signup; attribute referee.
- Reward (pick the zero-infra one): **status-based "Founding Member" badge + early access to new features.** No monetary/raffle (no payments infra, no budget). Avoids the freemium dependency.
- Surface: one share button on the dashboard + a count of "friends joined."
- Success metric to instrument from day one: referred-signup count (everything else is vanity until volume exists).

**Recommendation:** Build the MV version *only if* it can ship before the WC final (Jul 19). If it can't ship in ~2 weeks, defer — a referral program with no working alerts behind it just funnels friends into the same dead retention loop. Fix retention (§1) first.

---

## 3. Pricing & Monetization

Current revenue from users: $0. No Stripe / subscription / paywall code exists.

**Recommendation: Path B (affiliate) only, for now. Do NOT build freemium.**

- **Why not freemium:** A paywall gates value behind a tier. Our core paid-tier value props (extended price history, real-time alerts, buy recommendations) are **all currently broken or empty** — price history returns 0 rows, alerts never fire (see [[price-history-empty-alerts-broken]]). Charging for features that don't work is the fastest way to refunds and churn. Building Stripe + paywall + upgrade CRO now is effort spent on infra the product can't honor.
- **Why affiliate:** Zero user-facing friction, zero new billing infra, works *today* on existing traffic. We already deep-link to Ticketmaster/SeatGeek/StubHub — the only task is registering affiliate IDs and appending them to outbound buy links.
- **Action:** Apply to Ticketmaster Partner Network / Impact, SeatGeek affiliate, StubHub Partner program. Append tracking params to existing outbound links. → owner: human (account signups), then ~1 hr eng to wire params.
- **Revisit freemium** only after alerts + price history actually work and we have >1,000 active users. Not this quarter.

---

## 4. Feature Launch Planning

**Honest assessment:** There is no shippable new feature in the pipeline to *launch* this week. The "features" repeatedly planned (mobile app, seat maps, ML pricing, push) don't exist, and the ones that do (alerts, drip) don't work. Marketing a launch of a broken feature damages trust.

**The only launch worth planning** is the relaunch of the **price-drop alert** once §1.2 (target-price input) + §1.1 (alert firing) ship — because that's the actual product promise and it would be the first time it's ever been true.

Lean relaunch plan (trigger: alerts verified firing in prod):
- Email the full list (incl. the 20 drip-pending) once: "Price alerts are live — set your target."
- One blog post + one social post per platform showing the set-a-target flow.
- Success metric: # of watchlist items with a target set (target: >30% of the 150 existing items within 1 week), then # alerts actually triggered.

No Product Hunt / press until alerts have demonstrably fired for real users.

---

## 5. Paywall / Upgrade Flow

**N/A this week.** Freemium not adopted (§3). No paywall to design. Designing upgrade CRO for a tier we've decided not to build would be fabricated work.

---

## Cross-Agent Handoffs

- **→ Agent 5 (Email):** 20 users overdue for drip (oldest 14 days), 0 ever sent. Coordinate a *human-confirmed* first send — do not auto-blast the backlog. Win-back sequence is moot until lifecycle email fires at all.
- **→ Agent 6 (CRO):** Highest-leverage onboarding fix remains the target-price input (unships alerts). No new onboarding spec from me — it's a shipping task already specced for 6+ weeks.
- **→ Agent 1 (Content) & Agent 3 (Social):** Hold launch content. Trigger is "alerts verified firing in prod," not a date. Don't pre-announce.

## The one-line truth for this week
Acquisition works (122 users, +8/wk). Every retention and monetization lever is either un-built (referral, affiliate, premium) or built-but-broken (alerts: 0 fired, drip: 0 sent). The bottleneck is **shipping three small fixes**, not more strategy. No more specs until something ships.
