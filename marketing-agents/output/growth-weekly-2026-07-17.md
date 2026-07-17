# Growth & Retention — Weekly, Week of 2026-07-17 (Agent 8)

> **Discipline note:** All metrics from `/api/admin/stats` (live API call). Churn rate, open/CTR, traffic/funnel %, and visit-based segments are **not reported** — no `last_login` column, no GA4, no analytics layer. Any such figure would be fabricated.

---

## Live Platform Snapshot (2026-07-17)

| Metric | This Week | 2026-06-26 (last weekly) | Delta (3 wk) |
|---|---|---|---|
| Total registered users | **168** | 132 | +36 |
| New users this week | **17** | 10 | +7 |
| Total watchlist items | **178** | 160 | +18 |
| Active price alerts | **0** | 0 | → |
| Alerts ever triggered | **0** | 0 | → |
| Active newsletter subscribers | **3** | 3 | → |
| Total favorites | **0** | 0 | → |

**Three weeks elapsed since last growth weekly.** +36 users at ~12/week average; this week's 17 signups is the highest weekly rate observed. No drip, no alerts, no subscriber growth — the acquisition engine is the only thing working.

---

## 1. Churn Analysis

**Churn rate: not computable.** No `last_login` column. No session data. Churn percentages cannot be derived from available data.

**What is observable:**

- **17 new users this week** — highest ever. WC semifinal / final window is driving intent traffic.
- **Active alerts: still 0.** All 168 users have a fully inert account post-signup. No drip. No price alerts. Nothing.
- **WC Final is July 19** — 2 days from now. Every user who signed up during the WC has never received a single email or alert. The entire WC cohort (~50 new users acquired June 11–July 19) will have no reason to return after the Final unless alerts ship.

**Churn prevention — same 3 actions, still unshipped:**

| Priority | Action | What it unlocks | Effort |
|---|---|---|---|
| 1 | **Ship target-price input on EventCard** | Arms 178 watchlist items; enables first real price alert | ~2h front-end |
| 2 | **Human-approved drip send to 20+ overdue users** | First lifecycle touchpoint; do NOT auto-blast | Human approval needed |
| 3 | **Add `last_login` capture** | Makes churn measurable for the first time | ~10 lines auth middleware |

The diagnosis has not changed in 6+ weeks. The bottleneck is shipping, not analysis. No further churn analysis is warranted until one of these three ships.

---

## 2. Referral Program

**Status: does not exist.** No referral code in the backend.

**WC window closes Sunday (July 19).** A referral program that launches after the Final has no WC benefit. If the referral build hasn't started by now, defer it cleanly:

**Post-WC build plan (start week of July 20):**
- DB: `referrals (id, referrer_code, referrer_id, referee_id, created_at)`
- URL: `ticketscan.io/?ref=[CODE]` captured on signup
- Reward: "Power User" status badge + priority alerts (no monetary infra)
- Surface: one share widget on the post-signup success screen and dashboard
- Track from day one: referred-signup count only

**Next organic sharing spike: NFL Kickoff (September 5, 2026).** That is the next window where building referral mechanics pays off. A clean 6-week build from July 20 lands it exactly on time for NFL season.

---

## 3. Pricing & Monetization

**Revenue: $0. No Stripe, no affiliate params, no subscription.**

**Recommendation unchanged: affiliate first, freemium never (yet).**

**Why not freemium:**
- Active alerts: 0. Price alerts, extended history, and buy recommendations are the proposed premium features. None of these work reliably in production. Charging for broken features generates chargebacks, not MRR.
- No base of 500+ active users to convert. At 168 total (most of whom are dormant), a conversion funnel doesn't exist.

**Affiliate path — what's still blocking it (human actions required):**
1. Apply to Ticketmaster Partner Network (Impact.com)
2. Apply to SeatGeek affiliate (Commission Junction)
3. Apply to StubHub Partner program
4. Once approved (~1 week): ~1h eng to append affiliate UTM/tracking params to all existing buy links

The WC Final in 2 days is peak commercial intent. An affiliate approval submitted today would miss the Final but would land right on NFL kickoff — still a meaningful window. The longer this is deferred, the longer revenue stays at $0.

---

## 4. Feature Launch Planning — Post-WC Pivot

**WC window (June 11 – July 19): 2 days left.** Any feature launch tied to WC is not viable. Focus shifts.

**The one honest launch still pending:**
When the target-price input ships and the first real alert fires, send one announcement email:

> "Price alerts are live — set your target price for NFL, NBA, and concert tickets"

This reframes from WC to evergreen. Do not send before alerts work in production.

**Post-WC calendar:**

| Window | Date | Hook |
|---|---|---|
| WC wind-down | July 20–31 | Win-back email to WC signups; "track your team's next match" angle |
| MLB All-Star stretch | Aug (ongoing) | Playoff seeding content; price tracking for high-demand games |
| NFL Kickoff | Sep 5, 2026 | Largest US sports re-engagement event; referral program + alerts should be live |
| NBA/NHL preseason | Sep–Oct 2026 | Secondary wave; multi-sport angle |

**Immediate: WC win-back sequence**
Draft a 2-email sequence for the ~50 WC cohort users (July 20 + July 27 send):
- Email 1: "The World Cup is over — here's what TicketScan tracks year-round" (re-engage with NFL/NBA hook)
- Email 2: "Set your first price target" (direct CTA; requires target-price input to be shipped first)

→ Handoff to Agent 5 (Email) for copy. Do not send Email 2 until the input control exists.

---

## 5. Paywall / Upgrade Flow

N/A — freemium deferred (§3). Revisit when: alerts work, price history is meaningful (>100 rows per event), and active user base exceeds 500. None are true today.

---

## WC 2026 — Final Countdown

| Milestone | Date | Status |
|---|---|---|
| Group stage | June 11–26 | Complete |
| Round of 16 | June 28–July 4 | Complete |
| Quarterfinals | July 4–5 | Complete |
| Semifinals | July 14 | Complete |
| Third place | July 18 | Tomorrow |
| **Final** | **July 19** | **2 days** |

The entire WC cycle acquired ~50 users into a product that delivered nothing after signup. That is the compounding cost of the unshipped target-price input. Post-Final, the win-back window for this cohort is July 20–31.

---

## Cross-Agent Handoffs

- **→ Agent 5 (Email):** Draft WC win-back sequence (2 emails, July 20 + July 27 target sends). Email 1 is sendable now. Email 2 requires target-price input to exist — hold it until that ships. As always: no auto-blast; human-approved only.
- **→ Agent 6 (CRO):** Target-price input on EventCard is still the #1 task. Post-WC is the moment to ship it while traffic briefly dips. It unblocks the entire retention and monetization stack.
- **→ Agent 1 (Content):** WC Final coverage July 19. Then pivot immediately to NFL Kickoff content calendar (Sep 5). Post-WC lull (late July) is the time to produce evergreen guides (NFL venue pricing, NBA season ticket comparison) that will rank by September.
- **→ Agent 3 (Social):** WC Final real-time content July 19. No invented price figures. Then shift to NFL/NBA preview content the week of July 20.

---

## The one-line truth for 2026-07-17

Signups hit a new weekly high (17) driven by WC Finals traffic — but every retention system is still unshipped, and the entire WC cohort (~50 users) will churn with no intervention before NFL season.
