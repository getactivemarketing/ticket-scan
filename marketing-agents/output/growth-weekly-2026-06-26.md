# Growth & Retention — Weekly, Week of 2026-06-26 (Agent 8)

> **Discipline note:** All metrics pulled from `/api/admin/stats` via today's Agent 7 daily dashboard (analytics-daily-2026-06-26.md). Churn rate, open/CTR, traffic, funnel %, and visit-based segments are **not reported** — no `last_login` column, no GA4 conversion events, no analytics layer exists. Any such figure would be fabricated. This report contains only what is verifiably true.

---

## Live Platform Snapshot (2026-06-26)

| Metric | This Week | Last Week (2026-06-19) | Delta |
|---|---|---|---|
| Total registered users | **132** | 122 | +10 |
| New users this week | **10** | 8 | +2 |
| Total watchlist items | **160** | 150 | +10 |
| Active price alerts | **0** | 0 | → |
| Alerts ever triggered | **0** | 0 | → |
| Price history records | **31** | 0 | ⬆ NEW |
| Active newsletter subscribers | **3** | 3 | → |
| Drip emails sent (ever) | **0** | 0 | 🚨 |
| Users overdue for drip | **20+** | 20 | → |

**One material change this week:** Price history has 31 records — the cron is running every 4h and capturing price data. This is new. Everything else is unchanged.

---

## 1. Churn Analysis

**Churn rate: NOT COMPUTABLE.** No `last_login` column. No analytics. "14-day inactive" is unmeasurable. Prior-week reports that showed churn percentages invented them.

What is observable and directly relevant:

- **Signup pace is healthy and accelerating slightly:** 10 this week vs 8 last week, ~1.4/day sustained. Acquisition is not the problem.
- **World Cup R16 is live as of today** (AT&T Stadium match already being tracked per daily log). This is the peak organic window for WC ticket search — the users arriving this week have the highest intent of any cohort we've seen.
- **Every user who signed up still gets nothing.** 0 drip emails. 0 alerts. 0 value delivery after the account creation screen. The 10 users who joined this week will churn before next Friday with no intervention.
- **Price history now accumulating** (31 rows). This means the *infrastructure* for price alerts is partially working — prices are being captured. The missing piece remains the front-end target-price input; without it, the cron captures data but has no target to compare against and no alert to fire.

### Prevention Actions (unchanged from last week — still unshipped)

| Priority | Action | What it unlocks | Effort |
|---|---|---|---|
| 1 | **Ship target-price input on EventCard** | Arms all 150+ watchlist items; enables first real alert | ~2h front-end |
| 2 | **Turn on drip (human-confirmed send)** | First lifecycle email to 20+ overdue users | Human approval needed; don't auto-blast |
| 3 | **Add `last_login` capture** | Makes churn measurable for the first time | ~10 lines auth middleware |

No new churn analysis is warranted this week. The analysis has been the same for 5 weeks. The bottleneck is shipping #1 and #2, not deeper diagnosis.

---

## 2. Referral Program

**Status: does not exist.** No `referral` code anywhere in `index.js`.

**World Cup timing update:** R16 started today. Group stage is over. We are now in the highest-drama, highest-sharing moment of WC 2026 — knockout rounds. Organic sharing intent for "where to watch / how to get tickets" peaks in R16 and goes into overdrive at semifinals and the final (July 14–19). We have 3 weeks left of WC peak.

**Revised recommendation:** A referral program in the next 3 weeks is only worth building if it can ship this week, which requires the back-end work (~4-6h) plus front-end share UI. A half-built referral system that launches after the WC final has almost no impact. Make the call now or defer to a post-WC build.

**If building this week — minimum viable spec (unchanged from last week):**
- DB: `referrals (id, referrer_id, referee_code, referee_id, created_at)`
- URL: `ticketscan.io/?ref=[code]`; capture on signup, attribute referee
- Reward: "Founding Member" badge + early-feature access — zero monetary/infra dependency
- Surface: one share button on the dashboard + friend count
- Track one metric from day one: referred-signup count

**If not building this week:** the WC window closes July 19. Next organic sharing spike: NFL kickoff (September). Defer cleanly, don't half-build.

---

## 3. Pricing & Monetization

Current revenue: $0. No Stripe, no subscription, no paywall code.

**Recommendation: affiliate only. No freemium.**

**Why not freemium (still true this week):**
The premium-tier value props are alerts, extended price history, and buy recommendations. Price history now has 31 rows (good progress) but zero alerts have fired ever and the buy recommendation is UI-only with no live data backing it. Charging for these features while they are broken generates refund requests, not revenue.

**Why affiliate (still the right path):**
- Zero user friction, zero new billing infra
- Already deep-linking to Ticketmaster/SeatGeek/StubHub on event cards
- WC R16 is live — highest commercial intent we will ever see on this platform

**Action required (human only — no code needed initially):**
1. Apply to Ticketmaster Partner Network (Impact.com) — free, takes ~1 week to approve
2. Apply to SeatGeek affiliate (Commission Junction)
3. Apply to StubHub Partner program
4. Once approved: ~1h eng to append affiliate tracking params to all outbound buy links

This is the only monetization path that can generate real revenue before the WC final. Everything else requires shipping and user trust we have not yet earned.

---

## 4. Feature Launch Planning

**Context:** World Cup R16 is live. This is not a normal week. Any launch should connect to WC intent.

**The launch worth doing right now (not a new feature — a product-is-working announcement):**

When the target-price input ships and the first real alert fires in production, send one announcement email:

> "Price alerts are live on TicketScan — here's how to set your target for World Cup tickets"

This is the only honest launch we have. It does not require a new feature — it requires shipping the 2h fix that has been in the backlog for 6+ weeks.

**Secondary: WC moment content** (already flagged to Agent 1 and Agent 3):
- Bracket tracker posts as each R16 game concludes
- "Best seats still available" content for semifinals (July 14) and Final (July 19)
- These are organic, timely, and require no new infrastructure

**No Product Hunt / press / influencer push** until alerts have verifiably fired for real users in prod. A "compare ticket prices" platform that doesn't actually track prices credibly is not a Product Hunt moment.

---

## 5. Paywall / Upgrade Flow

N/A — freemium not adopted (§3). Designing upgrade CRO for a tier we've decided not to build is wasted effort. Revisit when: (a) alerts work, (b) price history is meaningful (>100 rows per event), (c) user base exceeds 500 active users. None of those are true today.

---

## WC 2026 Growth Window — Countdown

| Milestone | Date | Status |
|---|---|---|
| Group stage | June 11–26 | Complete |
| Round of 16 | June 28–July 4 | 🔴 Live now |
| Quarterfinals | July 4–5 | Upcoming |
| Semifinals | July 14 | 3 weeks |
| Third place | July 18 | 3 weeks |
| **Final** | **July 19** | **3 weeks** |

After July 19, organic WC ticket search drops to near zero. The users arriving now are the highest-intent cohort we will see until NFL season. They are arriving into a product that delivers nothing post-signup. This is the week to ship the target-price input and trigger the first real drip send — not for strategic reasons but because the window is literal and closing.

---

## Cross-Agent Handoffs

- **→ Agent 5 (Email):** 20+ users overdue for drip, oldest ~21 days. Do NOT auto-blast. Coordinate a human-confirmed first send before next week's WC quarterfinals. Win-back sequencing is premature until lifecycle email fires at all.
- **→ Agent 6 (CRO):** Target-price input on EventCard is the single highest-leverage task in the product. It unblocks alerts, drip triggers, retention data, and any honest feature launch. It has been the #1 shipping task for 6+ weeks. No new spec from me — ship it.
- **→ Agent 1 (Content):** Hold launch content. Produce WC bracket / R16 outcome content now — that's timely and does not require alerts to be working. Trigger the relaunch email only when alerts fire in prod.
- **→ Agent 3 (Social):** WC R16 is peak sharing moment. Post game outcome / ticket-buying angle content per match result. No invented price figures (price feed null values confirmed). Real: team names, dates, venues, approximate market prices from SeatGeek API if available.

---

## The one-line truth for 2026-06-26

Acquisition is steady (+10/wk), the price-history cron is now running (31 rows — real progress), but every retention and monetization system remains broken or un-built. Three weeks of World Cup peak traffic remain. The one task that unblocks everything is still the same: ship the target-price input field.
