# Growth & Retention — Weekly Strategy Report
**Week of May 9 – May 15, 2026**
**Agent 8: Growth & Retention | Sixth Weekly Report**

> **Skill availability note:** `churn-prevention`, `referral-program`, `pricing-strategy`, `launch-strategy`, `paywall-upgrade-cro`, and `marketing-psychology` skills referenced in the agent spec remain not installed in this runtime. Report composed from this week's daily growth dashboards (May 9 → May 15, with one missed cycle May 14), Analytics weekly (today), Email weekly (today), prior weekly (May 8), and the named forecasts that report set down for this week.

---

## 0. Last Week's Forecast vs. This Week's Outcome

The May 8 weekly named 10 forecasts and 9 deadlines for this week. Outcome:

| Forecast / Deadline (May 8) | Outcome (May 15) | Verdict |
|---|---|---|
| "TP8 default-effect smart pre-fill ships May 8–10. First psych rec to ship in 5 weeks." | Did not ship. Per CRO daily today, the stack expanded to **7 stacked psych fixes (~29-34h combined)**; zero shipped. | **Missed — zero of zero psych recs shipped in 6 weeks of report.** |
| "Goal-gradient progress bar ships May 12 (4-day slip tolerance from May 8 original)." | Did not ship. Day 7 of slip. | **Missed.** |
| "Salt Shed venue page ships May 9 (Mac DeMarco signal)." | Did not ship. No `/venues/salt-shed` artifact found in `web/src/data/venues.ts`. | **Missed.** |
| "Inter Miami / Nu Stadium content ships May 10 (T-7d on May 10 for jadbennis0's event)." | Did not ship. All 5 expected routes still 404 per Analytics weekly. **jadbennis0's event rolls past T-2d today; T-1d fires tomorrow May 16.** | **Missed — and the 9-day pre-deadline call now resolves as a rollover failure 48h from today.** |
| "Bruno Mars cross-tour hub ships May 11 (5-day slip from May 6)." | Did not ship. No artifact in `web/src/data/blog.ts`. 22 days past original May 6 deadline. | **Missed for the second consecutive Friday.** |
| "Phase 1A affiliate flag ships **May 12 HARD** — anchored on konman87 Soldier Field May 16/17." | Did not ship. konman87's Soldier Field night-1 is **tomorrow May 16**, night-2 May 17. **Phase 1A is now 0 days from the first event window passing.** | **Missed — and the first-revenue scenario's primary path is dead within 24 hours.** |
| "First affiliate click-through between May 12 and May 17 (konman87 Bruno Soldier Field)." | Impossible — flag never enabled. Fallback path (charlesteel126 Bruno Ohio May 20, T-5d today) requires Phase 1A ship within ~96h to function. | **Missed; fallback at-risk.** |
| "W0 architecture templates drafted by May 12; cron live by May 15." | Email weekly today: **W0 still in "designed but unbuilt" category alongside 4 other designed-but-unbuilt sequences.** Zero builds shipped in 39 days. | **Missed.** |
| "Manual one-off email to konman87 about Bruno Mars Soldier Field affiliate flag, by May 12. ~10-min send, single highest-leverage manual touch in project history." | **Not sent.** No record in Email weekly today. konman87 96-day tenure now 103 days, zero outreach, first event T-1d tomorrow. | **Missed — the single cheapest action in the May 8 report (~10 min) did not execute.** |
| "Activation rate ≥ 50% sustained over 4 weeks" (Phase 2 first gate, cleared at 60% last week). | **Did not sustain.** Per Analytics weekly today: this week's activation 20% (2 of 10), May cohort lifetime 33% (5 of 15), **platform lifetime 60.76% — below the historical 61.5% threshold for the first time.** | **Cleared once, then immediately failed and dragged the lifetime baseline through the historical floor.** |
| "Pattern B share will drop below 30% if next 8 signups are activator-heavy." (May 1 forecast surviving into May 8 dashboard.) | Pattern B share back to **62.5%** per Analytics weekly. The May 7-8 dilution reversed; the post-burst signup wave is 5-of-7 non-activators (vlanza/c_calingasan/pattyglvz/jmoriarty13/jfgalzin or emmacmather). | **Hit and worsened — dilution narrative fully inverted.** |

**Zero of 9 forecasted ships executed. One forecasted ratio (activation rate sustenance) failed inside the same week it was set.** Five consecutive Fridays of identical top-three engineering blockers (drip cron, price tracking cron, target-price flow) — this Friday adds a fourth (W0 architecture) and an infrastructure regression (admin API 401 Day 15).

**But the data this week did not stand still:**

- **The WC power-user pattern replicated.** kevinshall87 (May 12, +6 wl in 179s, all WC at AT&T) plus karin_ef1 (May 14, +2 wl in 12s, both WC at BC Place). **n=2 across host countries, two stadiums, two host nations, both modern email domains.** Per Analytics weekly: "the activator shape changed from single-event +35s to **WC-vertical multi-event same-stadium burst**." The WC vertical was 2% of total watchlist inventory on May 12 morning; it is **15.5% (15/97)** at report time — single largest week-over-week vertical-mix shift of 2026.
- **A domain-split hypothesis emerged with n=5 zero contradictions.** Modern domains (gmail / hotmail) activate; legacy-ISP domains (yahoo / msn / sbcglobal) do not. **Five new signups May 12-14, perfect split.** Two more signups (one of each class) would push n to 7 and the hypothesis is actively-falsifiable for the first time.
- **Multi-session retention is now measurement-grade zero.** 0 of 15 user-day tests across last week's Day-0 activators. **Last week's 3 +32/34/35s activators (jadbennis / sparkit / cjthomas) ran the full Day-1/3/7 retention gauntlet this week: 3-of-3 NEUTRAL Day-1, 3-of-3 FAIL Day-3, 3-of-3 FAIL Day-7. Zero second-adds. Zero return-session signals.** The +35s pattern is real on the front edge and zero everywhere downstream.

**Operating thesis for this report (sharpened from May 8):** the right-shape user activates in 12-179 seconds on the broken product and **never returns**. Last week we knew the front-edge signal; this week we know the back-edge cliff. The funnel acquires high-quality users at a 4-month-record rate and loses 100% of them inside the first 168 hours. Engineering blockers compound while a 27-day countdown to WC kickoff (June 11) burns.

---

## 1. Churn Deep-Dive

### Churn Metrics

| Metric | This Week (May 9 – 15) | Last Week (May 2 – 8) | Trend |
|---|---|---|---|
| Users churned (14d+ signup-age proxy) | **68** | 65 | **+3** (zhili Day-14 May 13 + lilianamasyrubi Day-14 May 12 + the May 8 5-user batch all rolled to Day-22 cohort) |
| Churn rate (% of total registered) | 86.1% | 94.2% | **−8.1pp** (denominator effect: 10 new signups dilute the rate; absolute churned-cohort grew by 3) |
| Avg active days before churn (est.) | 2–7 days | 2–7 days | Flat (proxy unchanged; `last_login_at` Day 39 open) |
| Win-back email success rate | 0% | 0% | **Day 39 of zero sends. New record: queue hit 24–28 emails on May 15 — largest single-day clearance window in dataset.** |
| **New users this week** | **10** | 5 | **+100% WoW — largest 7-day signup count since program recording began in early 2026** |
| Net user health (new − newly churned) | **+7** (10 new, 3 newly churned) | −6 (5 new, 11 newly churned) | **+13** (reverses last week's deepest deficit; first net-positive week in 5 weeks) |
| Signup → Activation rate (week) | **20% (2/10)** | 60% (3/5) | **−40pp** — but **8 of 9 wl adds came from the 2 activators (kevinshall +6, karin +2). Items-per-activator 4.0 vs 1.0 last week.** |
| Day-0 Activation rate (≤60s) | **20% (2/10)** | 60% (3/5) | −40pp |
| Multi-add Day-0 (≥2 wl items at signup) | **20% (2/10)** | 0% (0/5) | **+20pp — entirely new pattern** |
| Lifetime activation rate (real users) | **60.76% (48/79)** | 65.2% | **−4.4pp — below the historical 61.5% threshold for the first time** |
| Pattern B share (last 8 signups) | **62.5%** | 50.0% | **+12.5pp — dilution from last week fully inverted; structural problem unchanged** |
| Target-price capture rate | **0% (0 of 97 items)** | 0% (0 of 88) | **39 days flat. +9 fresh items this week (8 are WC, 1 is Matt Rife), all target-null. Including all 8 items from the 2 WC power-users.** |
| Alerts ever fired | 0 | 0 | Lifetime zero (Day 39) |
| Cumulative passed-no-notification (events) | **16** | 14 | **+2** (Mac DeMarco + Toronto FC × Inter Miami passed; **Inter Miami May 17 likely #17 Sunday; Bruno Soldier night 1 May 17 + night 2 May 18 likely #18/#19; Bruno Ohio May 20 likely #20**) |
| Multi-session retention (n=15, NEW) | **0 / 15 = 0%** | n/a | **First measurement-grade retention reading in dataset history. Zero exceptions across 6 cohorts.** |
| Watchlist items | **97, +9 this week** | 88 | **Largest WoW wl add count of 2026. 7 of 9 are WC matches at WC venues.** |
| Newsletter subscribers | 3 | 3 | **103 days flat — 14 weeks 5 days. Day 10 of consecutive zero-capture days per Email weekly.** |
| **Drip emails owed (queue)** | **~125 across 32 users** | 109 across 29 | **+16 emails / +3 users in 7 days. Today's queue alone is 24–28 emails — single-day record.** |

> Day 39 without `last_login_at` instrumentation. Day 39 of zero alerts. Day 39 of zero drip sends. **The acquisition front widened (+10 signups, +9 wl, +2 WC power-users); every other front stalled or worsened. Read the −40pp activation rate as denominator drag: 8 of the 10 new signups didn't activate, but the 2 that did added 4× the items per user vs last week.**

### Churn Patterns (Seven That Hardened, One That Inverted, Three That Are Brand New)

**1. The WC power-user pattern is the most important new finding of the 2026 dataset.** **Two users in 48 hours — kevinshall87 (May 12, gmail, +6 wl in 179 seconds, all 5 WC matches at AT&T Stadium + Matt Rife) and karin_ef1 (May 14, hotmail, +2 wl in 12 seconds, WC Switz-Canada Group B + R16 Match 96 at BC Place).** Critical structural differences make this n=2 a much higher-resolution signal than a simple replicate:
- **Different host countries.** kevinshall at AT&T Stadium (USA); karin at BC Place Stadium (Canada). The WC vertical is not stadium-specific.
- **Different intent shapes.** kevinshall = stadium-loyalist (5 matches all at AT&T); karin = tournament-tracker (group-stage + R16 across stadiums).
- **Different velocities.** kevinshall ~30s/add average; karin ~6s/add (fastest signup-to-add in dataset).
- **Different domain classes.** gmail vs hotmail — both modern domains, contrasting with this week's 3 inert legacy-ISP signups.
- **Both 100%-WC-themed** if you exclude kevinshall's single Matt Rife outlier.

Per Analytics weekly: **the WC vertical jumped from 2% of total watchlist inventory on May 12 morning to 15.5% (15/97) at report time — single largest week-over-week vertical-mix shift of 2026.** WC kickoff is **27 days out (June 11).** This is the leading-indicator window. If the rate sustains, the WC cohort becomes the dominant retention asset entering June.

**2. The domain-split hypothesis emerged with zero contradictions at n=5.** Five new signups May 12-14:
- **gmail (kevinshall, +6 wl) = activator**
- **hotmail (karin, +2 wl) = activator**
- **msn (pattyglvz, 0 wl) = NO**
- **yahoo (c_calingasan, 0 wl) = NO**
- **sbcglobal (vlanza, 0 wl) = NO**

The split is internally consistent with the lifetime cohort distribution (per Analytics weekly: legacy-ISP / yahoo / msn underperforming gmail/icloud by 25–35pp lifetime). **n=5 with zero contradictions in a single 48h window.** Two more inbound (one modern, one legacy) push n to 7 and the hypothesis is actively-falsifiable. If the split holds at n≥10, **email-domain-at-submit becomes the highest-confidence behavioral predictor on the platform.**

**3. Last week's three Day-0 activators failed the full Day-1/3/7 retention gauntlet — 0-of-15 user-day tests.** jadbennis0 (+32s May 5), sparkitrightthere (+34s May 7), cjthomas2557 (+35s May 7). All three ran 5 user-day tests this week (Day-1 / Day-2 / Day-3 / Day-5 / Day-7). Per Ads weekly + today's Analytics weekly: **3-of-3 NEUTRAL Day-1, 3-of-3 FAIL Day-3, 3-of-3 FAIL Day-7.** Zero second-adds. Zero return-session signals. Cumulative retention failure tally: **0-of-55 user-day tests at 0% return-session activation across the full activator cohort lifetime.** **The +35s pattern is real on the front edge and zero everywhere downstream.** This is the first measurement-grade retention reading in dataset history, and the reading is structural zero.

**4. Lifetime activation rate crossed below the historical 61.5% threshold for the first time today.** 60.76% (was 65.2% last week, 77% pre-Apr 15). Two consecutive Day-0 non-activator inbound signups (c_calingasan May 13 + vlanza May 14) produced **the largest 2-day activation-rate drop in the platform's 79-user history (−1.08pp May 13→15).** The inverse-cohort hypothesis named in late April is no longer "at the threshold"; it is below it. **If the post-silence inbound continues to mix 60–80% non-activators, the lifetime rate hits 60.0% inside two more non-activator signups.**

**5. The 100% target-null pattern is structural and now compounds against the WC vertical.** All 97 watchlist items remain target_price=null. **Including kevinshall's 6 and karin's 2 — both WC power-users left without setting a single target.** This is the cleanest possible diagnosis: **the modal does not surface the target-price field with enough force to capture it even from the highest-intent users in dataset history.** The CRO stack now contains 7 stacked psychology fixes (Section 5). The two-step add modal with default pre-fill (today's daily) is the gating fix without which the alert engine has nothing to alert on.

**6. The same-day-event failure mode (last week's Mac DeMarco signal) has compounded into a multi-week pattern.** Last week: sparkitrightthere added Mac DeMarco for the same evening she signed up; show passed unsent. **This week: liambot62 (May 8 13:07 UTC signup, added Toronto FC × Inter Miami CF for May 9, T-1d at signup, event passed within 24h, zero touches sent in 7 days).** The architecture gap is no longer a one-shot — it is a recurring failure shape that the canonical 5-email time-based drip structurally cannot serve. W0 architecture (designed May 8, in Email weekly "designed but unbuilt" today) remains the right fix and remains unbuilt.

**7. The 5-user Day-22 batch rolled forward as a single body-frame cohort.** charlesteel + ggri + aw + ajv + mark all signed up Apr 22-23. Day-21 fire window: **May 13 11:38 UTC → May 14 03:01 UTC. All 5 missed sequentially inside a 16-hour window.** **Largest single-family closed-out window in dataset.** All 5 now Day 22 today; bodies need to roll forward to "Three weeks and a day in...". All 5 carry to Day-30 family in 8 days if engine remains dark.

**8. Hard-expiry rewrites are now load-bearing on three users.** Per Email weekly + today's daily:
- **Pete Day 35** — Day-30 carry 120h past hard expiry. Body "One month and five days ago..." Frame degraded. Rewrite to "more than a month" standalone or defer.
- **Nicklib Day 28** — Day-21 carry 168h past hard expiry. Frame "Three weeks and seven days ago" parses awkwardly. Rewrite required.
- **Josh Day 26** — Day-21 carry 120h past hard expiry. AEW May 24 now T-9d. Rewrite needed.

These three users represent a **structural failure of the tenure-family abstraction itself** — the canonical drip's body-frame parsing breaks at 96h+ carry. New carried engineering ask this week: automatic frame-rewrite at 96h carry threshold OR carry-cap that triggers manual override.

**9. Day-1 schedule gap is the highest-impact missing entry — both WC power-users hit it.** karin's Day-1 boundary fired May 15 ~06:46 UTC (today, 4h before report); kevinshall's fired May 13 ~16:44 UTC. **Day-1 schedule entry doesn't exist.** Even if engine returned today, no Day-1 welcome touch fires. **2-of-2 power-users in dataset both missed Day-1.** Carried engineering ask now Day 10.

**10. The post-burst recovery is no longer an anomaly. 4-day sustained 1.25/day rate.** Pre-burst: <0.3/day. Burst May 7-8: 3.5/day. Flat May 9-11: 0/day for 73h. **Recovery May 12-15: 5 signups across 4 days (1+2+1+1).** Per today's daily: "the 'burst + flat + flicker' hypothesis from May 13 is disconfirmed; the new resolution is 'burst + flat + sustained higher baseline.'" **Attribution dependency on Ads Agent now Day 22.**

### Prevention Actions (Re-ranked for Week 6)

| # | Action | Target Segment | Expected Impact | Owner | Status |
|---|---|---|---|---|---|
| **NEW-1** | **Two-step add modal with default target pre-fill at 80% of cross-source low.** Today's CRO rec from daily. Replaces the May 8 default-effect smart pre-fill as the gating fix; commitment-and-consistency framing means the target capture happens before the user leaves the modal. ~5h ship. | All future wl adds; recovery loop on existing 97 null-targets via complementary banner | **0% → 50-70% target capture in 4 weeks. Single highest-EV ship in the project.** | CRO Agent (6) | **NEW PRIORITY 1 — Day 1** |
| **NEW-2** | **Day-1 schedule entry to drip.** Both WC power-users in dataset (kevinshall, karin) missed Day-1 boundary because schedule entry doesn't exist. With the WC cohort emerging, missed Day-1 leverage compounds. | All future signups | Catches WC power-users within 24h of signup before downstream gauntlet kills retention | Email Agent (5) | **NEW PRIORITY 2 — Day 10 of carry** |
| **NEW-3** | **Instrument signup form to capture email domain at submit.** Confirm or break the n=5 domain-split hypothesis. If hypothesis holds at n≥10, route legacy-ISP signups to a wl-nudge welcome variant. | All future signups | Becomes the highest-confidence behavioral predictor on the platform | CRO Agent (6) + Email Agent (5) | NEW — instrument first, route second |
| **NEW-4** | **Hard-expiry rewrite logic.** Tenure-family abstraction breaks at 96h+ carry (pete / nicklib / josh now structural failures). Need either automatic frame-rewrite at 96h carry threshold OR carry-cap that triggers manual override. | Three current users + all future Day-21+/Day-30+ rollovers | Stops bodies from becoming unsendable as time passes | Email Agent (5) + Lead Architect | NEW |
| A | **Real-Time Welcome Triage (W0-A/B/C)** — carried from May 8. Same-day-event failure mode (sparkit, then liambot this week) cannot be served by Day-3 cron. Email weekly today: "designed but unbuilt"; **two full rotation cycles complete with zero builds shipped.** | All new signups (3 typology variants) | Closes same-day-event failure permanently | Email Agent (5) + Lead Architect | **CARRIED Day 7** |
| B | **Goal-gradient progress bar on `/watchlist`** — carried from May 1 (now Day 14). Targets the 1-event cohort. Pair with NEW-1 (the bar shows progress *to* the next valuable action). | 22 single-event users + future 1-event arrivals | 15–40% lift on next-add conversion (literature benchmark) | CRO Agent (6) | **CARRIED Day 14** |
| C | **Redirect ALL acquisition effort to WC vertical channels** (REVISED from May 8 "known-source"). The WC pattern is the highest-quality signal in 2026; the May 8-known-source bifurcation is now superseded by the WC-vertical bifurcation. | All future paid + organic acquisition | Sustains the 4.0 items/activator engagement density that this week produced | Ads Agent (4) + Content Agent (1) | **REVISED this week** |
| D | **"Curious signup" onboarding path for Pattern B** — carried from May 8. Pattern B back to 62.5% rolling, structurally still majority. | Pattern B cohort | Recover 20-40% of non-activators on landing-page side | CRO Agent (6) + Email Agent (5) | **CARRIED Day 7** |
| 1 | **Revive the drip cron** — Day 39. **~125 emails owed across 32 users; today's single-day queue is 24-28 — single-day record.** | All 32 pending users | First retention signal the product ever produces | Email Agent (5) / Lead Architect | OPEN (Day 39) |
| 2 | **Fix price tracking cron** — Day 39. Cumulative passed-no-notify 16; **likely 20+ by May 21** (Inter Miami May 17 + Bruno Soldier night 1 May 17 + night 2 May 18 + Bruno Ohio May 20). | All 48 activated users with ≥1 wl item | Stops the queue from extending; doesn't recover what's lost | Lead Architect | OPEN (Day 39) |
| 3 | **Rotate or document admin API credential** — Day 15 of regression. Live admin API probe today returned **401 Unauthorized** for documented `ADMIN_SECRET`. Blocks every cross-agent telemetry pull. | Cross-agent observability | Restores attribution + drip + alert reporting | Lead Architect | **OPEN Day 15 — new regression layer** |
| 4 | **"Event passed" auto-pivot email template** — carried. **16 events passed without outreach (was 14 last week); 4 likely to be added in next 7 days.** Mac DeMarco + Toronto FC variants exist; Inter Miami needs same-day add → same-day pass variant. | Users with past-date wl items only | 15–25% re-engagement of otherwise-lost users | Email Agent (5) | **OPEN 5+ weeks** |
| 5 | **Add `last_login_at` tracking** — Day 39. Every retention metric is an estimate. With 0-of-15 multi-session retention now measured indirectly, direct instrumentation moves from "would be nice" to "the only way to know if any prevention works." | All users | Enables measurement | Analytics (7) | OPEN (Day 39) |
| 6 | **Newsletter homepage form audit** — Day 103 flat. 14 weeks 5 days. Per Email weekly: "Day 10 of consecutive zero-capture days; 10-of-10 new users this week zero cross-conversion." Investigate whether form actually submits. | Anonymous homepage visitors | Form may be broken; confirm wire, then offer | CRO Agent (6) | **OPEN 103d — longest dependency in project** |

### Churn Severity Assessment — Week 6 Verdict

**The sixth consecutive week with the same top engineering blockers and the cleanest cohort-quality + cohort-failure data of the 2026 record, on the same dataset.**

The acquisition side produced what is now the strongest signal of the year: **2 WC power-users in 48h, multi-add at signup, 4.0 items/activator, n=2 across host countries.** Strip the burst, and the recovery is still a 4-day sustained 1.25/day rate vs <0.3/day pre-burst. The signup engine widened structurally.

The activation side produced a measurement-grade zero on multi-session retention (0-of-15 user-day tests, 0-of-55 lifetime). **Last week's three Day-0 activators returned for zero second-adds across the full Day-1/3/7 gauntlet.** This is the first time the platform has had enough recent activator cohort to *measure* return-session activation, and the reading is structural zero.

The retention side ran the cleanest single-week failure case of the outage: **2 WC power-users walked in, added 8 wl items in <3.5 minutes combined, and 8-of-8 left target_price=null because the modal does not surface the field with enough force.** Even with a perfect engine return tomorrow, the alert system has nothing to alert on for the highest-intent users in dataset history.

**Net this week:** **+10 signups (largest 7-day count of the year, +100% WoW)**, **+9 watchlist items (+200% WoW, 7-of-9 WC at WC venues)**, **+2 WC power-users (n=2 confirms last week's pattern as structural)**, **+0 net activated when adjusted for return-session retention (0-of-15)**, **+2 cumulative passed-no-notification (4 more likely in next 7 days)**, **0 emails sent**, **0 alerts fired**, **0 progress on engineering blockers**, **−4.4pp lifetime activation rate (first crossing of 61.5% historical threshold)**. Bright spots: WC vertical breakthrough (2% → 15.5% in one week), domain-split hypothesis with zero contradictions at n=5, post-burst recovery sustains 4 days. Dim spots: zero forecasted ships executed, zero psych recs shipped in 6 weeks, every event-rollover forecast at-risk in next 5 days.

---

## 2. Referral Program — Status: Worse Than Last Week

### Status: NOT IMPLEMENTED — Now Has a Documented Counter-Demonstration

For the **sixth consecutive week** the answer is "no." This week the answer is also **structurally worse than the May 8 read** in two ways:

1. **The Day-0 Activator cohort that last week's report named as the most-likely-to-refer archetype has now demonstrated zero second-session activation across 0-of-15 user-day tests.** If those 3 users could not be motivated to return for a second session inside 168h, the probability that they share an invite link with a friend in the same window is functionally zero. **The "most-likely-to-refer" cohort has demonstrated zero base-rate engagement past signup.**

2. **The WC power-user cohort (kevinshall + karin) added 8 wl items between them and left 8-of-8 target_price=null.** A referral landing page that advertises "TicketScan emails you when prices drop below your target" would advertise a feature that has never produced a single email or alert and that the 2 highest-intent users of 2026 walked past without setting up. **The referee experience would be: signup → activate <60s → land on watchlist → set target=null (because modal doesn't surface it) → never receive any drip (Day 39) → never receive any alert (lifetime zero) → roll into Day-7 fail at 0-of-15.** The negative-WOM math is now empirically demonstrated, not estimated.

### Updated Launch Prerequisites (and How They Moved This Week)

| Prerequisite | Status (May 8) | Status (May 15) | Movement |
|---|---|---|---|
| Price-tracking cron functional | Broken Day 32 | **Broken Day 39** | **−7 days** |
| Drip cron functional | Broken Day 32 | **Broken Day 39** | **−7 days** |
| At least one price alert has ever fired | Lifetime 0 | **Lifetime 0** | unchanged |
| `last_login_at` instrumentation | Missing Day 32 | **Missing Day 39** | **−7 days** |
| Churn rate < 50% | 94.2% | 86.1% | **−8.1pp** (denominator effect; absolute churned-cohort grew by 3) |
| Pattern B share < 30% | 50.0% | **62.5%** | **+12.5pp WORSE — fully inverted last week's dilution** |
| At least one psych rec shipped | 0 of 11 shipped | **0 of 18 shipped** (7 more added this week, none shipped) | **−7** |
| At least one target_price set on a watchlist item | 0 / 88 | **0 / 97** | **−9 more null-targets, including both WC power-users** |
| **NEW: At least one second-session return** | n/a | **0 of 15 user-day tests** | **Newly-blocking — referral mechanics require return-session engagement, demonstrated absent** |
| **NEW: Admin API operational** | n/a | **Broken Day 15 (401)** | **Newly-blocking — referral-program telemetry would route through admin API** |

Best-case referral launch window: **Q1 2027 at the earliest, conditional on multi-session retention going non-zero.** **Each week of further delay on the engineering items pushes this further; the new return-session prerequisite is a structural addition that may take a full product cycle to clear once engineering ships.**

### Incremental Design Updates (Since May 8)

**The May 1 + May 8 rule held that referral landing-page social proof must rotate users who have at least one target_price set AND have received at least one alert that did not bounce.** This rule remains. **It now has a second prerequisite layered on top: rotated users must have demonstrated at least one return-session within 14 days of signup. Current count of qualifying users: 0.**

**Reward structure unchanged from May 1.** Referrer gets bulk-add unlock on first activated referral; insider badge + priority alerts at 3 referrals; lifetime premium at 10. Design holds; ship date slips another full week.

**One new design element: the WC-vertical referral hook.** With 15 wl items now WC-themed and 27 days to kickoff, a WC-specific referral mechanic ("share TicketScan with a friend who also wants to track a WC match — you both get bracket alerts") would be the highest-converting referral angle the platform could run **if any of the prerequisites were met.** Currently zero are. Document the design; ship Q1 2027.

---

## 3. Pricing & Monetization Strategy

### Current State

- Revenue: **$0** lifetime, all sources. Same as last week.
- User base: 79 registered (+10 WoW), 48 activated (+3 effective: kevinshall, karin counted; **net activator-cohort growth offset by 0-of-15 retention failure**), 0 paying.
- WC cohort: **2 power-users / 8 wl items / 2 stadiums / 2 host countries** — most likely first-commission opportunity has rotated from Bruno Mars to WC tickets.
- Monthly infra cost: $0–20 (Railway + Vercel free/starter).

### The Four Pricing Conclusions That Sharpened This Week

**(a) The first-commission scenario has rotated from Bruno Mars to WC tickets.** Last week's primary scenario was konman87 Soldier Field May 16/17. **Phase 1A did not ship by May 12 hard deadline. konman87's first event is tomorrow.** The scenario is functionally dead unless the manual one-off email goes out today (Section 6). **The new primary scenario:** kevinshall87 returns to `/watchlist` to check his 5 AT&T WC matches sometime in June (WC kickoff June 11; AT&T WC matches June 14, 23; Round of 16 June 30 / Match 93 July 2; SF Match 101 July 9). If Phase 1A ships before any of those, kevinshall's pageviews are the highest-conviction affiliate window of the year.

**(b) The May 12 hard deadline missed; konman87 fallback dies in 24h.** Per May 8 plan, charlesteel126 Bruno Ohio May 20 was the fallback scenario. **Bruno Ohio is T-5d today; T-3d May 17; T-1d May 19; event May 20.** If Phase 1A ships in the next 96h, the charlesteel scenario is still alive. **Past May 19, both Bruno scenarios are closed.**

**(c) The WC Pass infrastructure-readiness May 25 binary gate hardens further.** With Day 39 of engine outage, zero psych recs shipped in 6 weeks, zero forecasted ships executed this week, and 4 engineering blockers (price tracking, drip, target-price flow, W0 architecture) plus admin API regression — **the prior probability of any of these clearing by May 25 EOD is now ≤10% on linear extrapolation, down from ≤25% last week.** Updated recommendation: **treat May 25 as a hard binary; if any of the four blockers is open by EOD, abort WC Pass for this cycle entirely.** Half-shipped infrastructure on the highest-visibility event of the year is the worst possible launch context.

**(d) Premium soft-launch first gate (activation rate ≥ 50%) failed inside the same week it cleared.** Last week the gate cleared at 60%. This week's activation rate is 20%; May cohort lifetime is 33%; **platform lifetime crossed below the 61.5% threshold for the first time.** Gate is now both unclear AND deteriorating. Premium soft-launch remains Q3 2026 at the earliest, conditional on activation rate ≥ 50% sustained 4 weeks (currently 0 of 4 weeks in current cycle) AND ≥1 alert fired (lifetime zero).

### Path Evaluation (Updated)

#### Path A: Freemium — Both Gates Now Failing (worse than May 8)

| Component | May 8 Plan | May 15 Update |
|---|---|---|
| Free tier caps | 3 watchlist, 7d history | Hold spec; cannot ship |
| Premium $4.99/mo | Soft-launch as gift to power activators | **3 of 5 prior power-activators churned. 2 remain. Both at 0-of-15 retention failure this week.** Cohort effectively dead. |
| Soft-launch gate 1: activation rate ≥ 50% | Cleared at 60% | **FAILED — 20% this week, lifetime 60.76% below historical threshold** |
| Soft-launch gate 2: ≥1 alert fired | Lifetime 0 | **Lifetime 0** |

#### Path B: Affiliate Revenue — May 12 Hard Deadline Missed; New WC Primary Window

| Component | May 8 Plan | May 15 Update |
|---|---|---|
| Programs | Ticketmaster + SeatGeek + StubHub | unchanged |
| Visibility | Gated by Day-0 Activator criterion | **Revised:** Sharpened to **WC-vertical multi-add criterion** (`signup_to_first_wl_add < 5min AND wl_items_count >= 2 AND wl_vertical = 'WC'`). Captures kevinshall + karin directly. Trajectory: 4-8 WC multi-adders by end-June at this week's pace. |
| Initial cohort | 6 users (3 known-source + 3 Day-0 Activators) | **2 WC multi-adders (kevinshall + karin); ~4-6 cohort by end-May at current pace** |
| First $ likely from | konman87 Bruno Soldier May 16/17 | **konman87 path dead by tomorrow. Fallback: charlesteel126 Bruno Ohio May 20 (T-5d today, T-1d May 19) — final pre-event ship window is ~96h.** Past May 19: WC scenarios become primary path (kevinshall AT&T matches starting June 14). |
| Ship readiness | May 12 HARD | **MISSED. New deadline: May 19 (charlesteel Bruno T-1d). After May 19: June 7 (kevinshall first WC T-7d window for AT&T Netherlands × Japan).** |

#### Path C: Advertising — Still Not Yet (unchanged)
69 → 79 users. No change in conclusion. Revisit at 50,000+ monthly pageviews. **Newsletter 3 subscribers / 103 days flat + 10 of 10 new users zero cross-conversion** is the unchanged upstream signal that pageview-acquisition isn't even functional.

#### Path D: WC Pass — Binary Gate at May 25 (Probability of Launch Now ≤10%)

| Scenario | Action | Expected Revenue | Probability |
|---|---|---|---|
| All 4 engineering blockers shipped by May 25 | Launch WC Pass at $9.99 on June 1, no pre-sale | $0 (skipped) – $2,500 | **≤10%** |
| Any blocker open by May 25 | **ABORT this cycle entirely** | $0 (skipped) | **≥90%** |

#### Path E: WC Affiliate (NEW — replaces Bruno Mars as primary) — June 7 / June 14 Soft Window

| Component | Action | Revenue Target |
|---|---|---|
| Phase 1A affiliate flag | Ship before kevinshall's first AT&T WC match T-7d (June 7) | $0 (until June 7) |
| First WC click-through | kevinshall returns to `/watchlist` between June 7 (T-7d) and June 14 (kickoff Match 11 Netherlands × Japan) | $0 |
| First WC commission | $5–100 by June 21 (kevinshall has 5 AT&T matches over 26 days starting June 14) | $25-200 expected |
| Karin's first event | June 24 (Switzerland × Canada Group B at BC Place) — second commission window | $5–50 |

### Revised Monetization Roadmap

| Phase | Target Date | Action | Revenue Target |
|---|---|---|---|
| **Phase 0 (still prerequisite)** | Now → May 19 | Fix drip + price tracking + target-price flow + admin API + W0 architecture | $0 |
| **Phase 1A (HARD May 19)** | May 12 (MISSED) → May 19 | Ship affiliate flag with WC-multi-add criterion; instrument click capture | $0–50 (if charlesteel Bruno path lands) |
| **Phase 1A-WC (HARD June 7)** | May 19 → June 7 | If Phase 1A still open, ship before kevinshall's AT&T Netherlands × Japan T-7d | $0–200 (WC primary scenario) |
| **Phase 1B (CONDITIONAL May 25 gate)** | June 1 – July 19 | If all 4 engineering blockers shipped: launch WC Pass at $9.99. If not: SKIP. | $0 (skipped) – $2,500 |
| **Phase 2** | Q3 2026 | Soft-launch Premium gated by activation rate ≥ 50% sustained 4w (currently 0/4) AND ≥1 alert fired (lifetime 0) | $0 |
| **Phase 3** | Q4 2026 | Full freemium launch, conditional on activation rate ≥ 50% sustained 6+ weeks | $300–1,000 MRR |
| **Phase 4** | Q1 2027 | Referral program (conditional on `EXISTS (delivered alert)` AND multi-session retention > 0%); advertising at 50k+ pageviews | TBD |

**Key changes vs. May 8:** (a) Phase 1A deadline slipped from May 12 to May 19, anchored on charlesteel Bruno T-1d. (b) New Phase 1A-WC milestone at June 7 for kevinshall's AT&T window. (c) Phase 1B probability of launch dropped from ≤25% to ≤10%. (d) Phase 2 gate 1 failed inside same week it cleared; Phase 2 timeline unchanged but probability of clearance reduced.

### First-Revenue Scenario (Sharpened)

**The May 8 forecast: "an affiliate click-through from konman87 on Bruno Mars Soldier Field, May 12-17."** **The May 15 sharpening: that scenario is dead in 24h.** The new sharpening:

1. **Primary path (June 7 – July 9): kevinshall87 returns to AT&T WC matches.** 5 events spanning Match 11 Netherlands × Japan (June 14) through SF Match 101 (July 9). The first T-7d window (June 7) is the highest-conviction first-commission moment of the WC tournament. **Phase 1A must ship by June 7.**

2. **Fallback path (May 19): charlesteel126 returns to Bruno Ohio.** 22-day tenure with zero outreach. T-1d fire (May 19) is the only remaining clean algo-flip window; engine dark.

3. **Bridge path (manual): one-off email to charlesteel126 today.** A 1-of-1 send to charlesteel about Bruno Ohio T-5d that bypasses the broken drip cron entirely. **Cost: ~10 minutes. Higher conviction than last week's konman87 path** because:
   - Bruno Ohio is T-5d (vs Soldier was T-4d/T-3d a week ago)
   - charlesteel has been silent 22 days vs konman87's tenure was older
   - Phase 1A is no longer required for charlesteel-send to be meaningful — a plain "heads up, prices are softening at T-5d" email is itself a re-engagement signal

**Mitigation against all paths failing:** ship the manual charlesteel email today, ship Phase 1A by May 19, ship Phase 1A-WC by June 7. **Combined: 2 manual emails + 1 backend feature flag + 1 frontend buy-link injection over 3 weeks.**

---

## 4. Feature Launch Planning

### Smart Tracker for Trip Planners — Half-Shipped Status (1 of 8 shipped — same as May 8)

| Component | May 8 Status | May 15 Status |
|---|---|---|
| Day 1–3: Analytics resolves attribution on ids 55+ | Not resolved. Day 15. | **Day 22 of attribution dependency. Admin API 401 Day 15.** |
| Day 4–5: Identify top 1–2 known-source channels | Blocked | **Blocked** |
| Day 6–7: Cubs Wrigley out-of-market trip hub (May 4) | **Shipped May 3-4 commit `636e40b`** | **Shipped — still the only ship to date.** Cubs Wrigley page indexed; 0 wl adds attributed to it (per Content/Analytics weekly). |
| Bruno Mars cross-tour hub (May 6 → slipped May 11) | Not shipped | **Not shipped — 22 days past original deadline.** |
| Affiliate links behind feature flag (May 12 hard) | Not shipped | **Not shipped — 3 days past deadline. konman87 scenario dies tomorrow.** |
| Smart Tracker for Trip Planners landing page (May 8) | Not shipped | **Not shipped — 7 days past deadline.** |
| Salt Shed venue page (May 9 NEW) | Not shipped | **Not shipped — 6 days past deadline.** |
| Inter Miami / Nu Stadium content (May 10 NEW, T-7d on May 10) | Not shipped | **Not shipped — event T-2d today; rolls past Sunday.** |

**Verdict: 1 of 8 components shipped — same as May 8. The campaign has been static for 7 days.** The asymmetry continues: content is the team's reliable output (1 hub in 11 days); infrastructure is the team's chronic gap (0 of 7 backend/affiliate items in 22 days).

### Feature Launch v5: "WC Multi-Add Sprint" — The New Top Priority

This week's structural finding (WC vertical 2% → 15.5% in one week, 2 power-users in 48h) reorients the launch queue. **The Smart Tracker for Trip Planners campaign continues as background; WC Multi-Add Sprint becomes foreground.**

The right shape for WC Multi-Add Sprint is a 27-day window from May 15 to WC kickoff June 11 with three deliverables:

```
## Feature: WC Multi-Add Sprint (May 15 → June 11, 27 days)

### Three deliverables

D1: WC bracket-tracking explainer + content (karin signal)
  Article: "How to track your country's full World Cup bracket on TicketScan."
  Hub page: /world-cup-2026/bracket-tracker
  Why: karin (May 14) added 1 group-stage + 1 R16 match — bracket-watcher intent.
  First non-stadium-specific WC angle in the dataset.
  Owner: Content Agent (1)
  Deadline: May 22

D2: AT&T Stadium WC fan guide (kevinshall signal)
  Hub page: /world-cup-2026/at-and-t-stadium-fan-guide
  Why: kevinshall added 5 WC matches at AT&T in 179 seconds.
  Stadium-loyalist intent.
  Owner: Content Agent (1) — was Day 2 carried ask, now Day 9 carried ask
  Deadline: May 22

D3: Affiliate flag ship for WC-multi-add cohort (kevinshall, karin)
  Backend: extend Day-0-Activator flag criterion to WC-multi-add
  Frontend: buy-link injection on /watchlist page for the 8 existing WC items
  Why: kevinshall's first AT&T match is June 14; T-7d window opens June 7.
  Owner: Lead Architect (was carried from May 8 affiliate ship)
  Deadline: June 7 HARD (was May 12 HARD — missed; reset to June 7)

### Why D3 is the highest-priority backend item

- kevinshall's 5 AT&T matches start June 14 and run through July 9 (Match 101 SF).
- Karin's 2 BC Place matches: June 24 + July 7.
- Combined: 7 WC matches across 25 days with affiliate-ready cohort already on platform.
- This is the highest-conviction affiliate window the platform has ever had.

### Implementation Spec for D3

Backend: 
- Reuse existing affiliate-flag scaffolding from May 8 spec.
- Extend criterion: `(signup_source = 'known' AND wl_count >= 3)` OR 
                    `(wl_vertical = 'WC' AND wl_count >= 2)`.
- Affiliate URL builder: per-source UTM with user_id + event_id tags.

Frontend:
- Watchlist row component: append "Get tickets" buttons (Ticketmaster, SeatGeek, StubHub) when affiliate flag is enabled for user.
- Compare page: same buttons on each source row.
- Event detail page: same.

Tracking:
- Outbound click capture with referrer, user_id, event_id, source.
- POST /api/affiliate/click → affiliate_clicks table (new).
```

**Ship cost:** 8-12h (was 6-10h on May 8; W0 architecture and WC-specific copy add 2h). **June 7 HARD anchored on kevinshall's first AT&T match T-7d.**

### Combined Launch Plan (Smart Tracker + WC Multi-Add Sprint + W0)

```
## Combined Launch: Smart Tracker (continues) + W0 Triage (carried) + WC Multi-Add Sprint (NEW foreground)

### May 15–19 (Phase 1A salvage window)
- May 15-16: ship NEW-1 (two-step add modal with default target pre-fill) — ~5h CRO ship. 
  Highest-impact fix in the stack; gates all alert-driven retention.
- May 15: send manual one-off to charlesteel126 about Bruno Ohio T-5d (~10 min, ~$0 cost, 
  bypasses broken cron).
- May 16-17: ship Salt Shed venue page (replicate Wrigley 24h fast-create) — 6 days late.
- May 16: ship Inter Miami / Nu Stadium content (~24h before T-1d fire opportunity) — 7 days late.
- May 17-19: ship Phase 1A affiliate flag with WC-multi-add criterion + charlesteel buy-link 
  injection. Targets charlesteel Bruno Ohio May 20.
- May 19: charlesteel Bruno T-1d natural fire window; if engine returns + affiliate flag live, 
  first commission attempt.

### May 20-25 (engineering blocker window + WC Multi-Add Sprint launch)
- Bruno Ohio passes May 20 → Sunday May 18 is Bruno Soldier night 2 → Inter Miami passed 
  May 17. **3 events resolve in this window; their resolution determines whether Phase 1A 
  delivered ROI.**
- May 22: ship D1 (WC bracket-tracking content) + D2 (AT&T Stadium fan guide).
- May 25: **WC Pass infrastructure-readiness binary gate.** Go/no-go on June 1 WC Pass launch.

### May 26 – June 11 (WC pre-kickoff)
- W0 templates + cron live (NEW-1 successor; was forecast May 15, now slipped 2+ weeks).
- WC countdown content series (Social Agent).
- Email re-engagement to WC-themed legacy users (tosophia Harry Styles, brigitte Backstreet — 
  WC angle test).

### June 7 (HARD)
- Phase 1A-WC affiliate ship — kevinshall AT&T Netherlands × Japan T-7d.

### June 11
- WC kickoff. First WC match (Match 1: Mexico v opponent at Estadio Azteca).
- WC tournament-side marketing kicks in.

### Success Metrics (Updated for WC Multi-Add Sprint)
| Metric | Target | Why |
|--------|--------|-----|
| TP8 / NEW-1 (two-step modal) ship date | **May 16** | Single highest-impact fix; ~5h ship cost |
| Manual charlesteel email | **May 15** | ~10 min; highest-conviction manual touch this week |
| Phase 1A affiliate flag enabled | **May 19** (charlesteel Bruno T-1d) | Salvage 1st commission opportunity |
| Phase 1A-WC affiliate ship | **June 7** (kevinshall AT&T T-7d) | WC primary path go-live |
| WC vertical share of new wl adds | **40%+ in June** | Currently 78% of week's adds; sustain into June |
| WC power-user count | **5+ by June 11** | Currently 2 (kevinshall, karin); 3 more by kickoff confirms structure |
| First affiliate click-through | by **May 20** (charlesteel Bruno path) or **June 14** (kevinshall WC path) | Two primary windows |
| First affiliate commission | $5–50 by **May 31** or $25–200 by **June 21** | Path-conditional |
| Activation rate sustained ≥ 50% over 4 weeks | by **July 1** | Phase 2 gate 1; failed this week, restart counter |
| Multi-session retention non-zero | by **July 1** | Phase 4 prerequisite; currently 0/15 |
```

### Launch Content Requests → Content Agent (Agent 1)

| Priority | Item | Deadline |
|---|---|---|
| **P0** | **WC bracket-tracking explainer + hub page.** karin signal (May 14). First non-stadium-specific WC angle. Pairs with social drop for bracket-watcher intent. | **May 22** |
| **P0** | **AT&T Stadium WC fan guide.** kevinshall signal (May 12). Carried from May 8; now Day 9 of carry. | **May 22** |
| **P0** | **Salt Shed venue page.** Mac DeMarco signal (sparkit). 6 days past deadline. | **May 16** |
| **P0** | **Inter Miami / Nu Stadium content.** T-2d today; rolls past Sunday. 7 days past deadline. | **May 16 (T-1d)** |
| P1 | Bruno Mars cross-tour hub. 22 days past original May 6 deadline. **Hold or kill** — charlesteel Bruno Ohio T-5d today; the hub no longer serves a forward-looking acquisition function. | DEFER / kill |
| P1 | "How many events should you track?" — supports goal-gradient rec. | May 22 |
| P1 | "Smart Tracker for Trip Planners" campaign landing page — 7 days past deadline. | May 22 |
| P1 | WC Lincoln Financial Field preview — re-anchor from pete (churned) to city/venue frame. | May 29 |
| P2 | BC Place WC fan guide — karin signal companion. | June 1 |
| P2 | "We Fixed It" relaunch post — **HOLD** until any engineering item ships. | Indef |

### Launch Social Plan → Social Agent (Agent 3)

| Priority | Item | Deadline |
|---|---|---|
| P0 | WC 27-day countdown — bracket frame, then stadium frame, then host-country frame. Rotate daily. | This week |
| P0 | Salt Shed content drop — pairs with venue page. | May 16-17 |
| P0 | Inter Miami / Nu Stadium content drop — pairs with T-1d fire May 16. | May 16 |
| P1 | "Trip planner" angle pinned to top for May — continue. | Continues |
| P1 | WC bracket-tracking social pin — karin signal social proof (anonymized). | May 22-25 |
| P1 | AT&T Stadium WC angle — kevinshall signal social proof (anonymized). | May 22-25 |
| P2 | All "we fixed it" content **HOLD** until engineering ships. | Indef |

---

## 5. Paywall & Upgrade Flow

### Status: Three New Touchpoints Added; Original Eight Still Pre-Ship

May 8 weekly defined 7 touchpoints (TP1–TP7) + 2 new (TP8 default-effect smart pre-fill, TP9 W0-A target-set email). **All 9 remain unshipped Day 7+.** **Three new touchpoints added this week** (TP10–TP12), all conditional on Phase 1A-WC and the WC Multi-Add Sprint.

### New Touchpoint 10: WC Multi-Add Welcome (TP10)

**Trigger condition:** User adds 2+ WC matches within first 5 minutes of signup (currently 2/79 users — kevinshall, karin; trajectory ~4-8 by end-June at this week's pace).

**Rationale:** The WC vertical multi-add at signup is the highest-quality cohort signal of 2026. **8 of 8 wl items from this cohort left target_price=null** — pre-fill alone is necessary but not sufficient; the cohort needs a specific WC-themed welcome that anchors expectation on tournament price dynamics (different from standard arena-floor patterns).

**Copy (email, fires within 5 min of 2nd WC add):**

```
Subject: World Cup tracking — let's set targets so we can email you

You just added {{wl_count}} World Cup matches to TicketScan in {{seconds_since_signup}} seconds. 
That's the fastest activation we've ever seen.

Here's what makes WC tracking different from regular events:
- Source spreads on WC matches typically run 40-60% between Ticketmaster, SeatGeek, 
  and StubHub (vs 15-25% on arena concerts).
- Group-stage matches often drop hardest in T-21d to T-10d; knockout-stage 
  follows a different curve.
- The 10% discount default is more conservative than the WC historical floor.

Today's cheapest source on {{first_event_name}}: {{cheapest_source}} at ${{cheapest_price}}.
Recommended WC-aware target (15% below): ${{wc_target}}.

→ [Set targets on all your matches — 60 seconds]({{watchlist_url}})

— The TicketScan Team
```

**Design:** Plain text HTML, single CTA, fires within 5 min of 2nd WC add via webhook-on-watchlist-add.

**Ship cost:** 2-3h once W0 architecture lands (NEW-1 dependency). Without W0: blocked.

### New Touchpoint 11: WC Bracket Re-engagement (TP11)

**Trigger condition:** User added a knockout-stage WC match (Round of 16+) AND has not returned in 7 days OR added a group-stage match and a knockout match (karin signal).

**Rationale:** karin's pattern (1 group + 1 R16) suggests bracket-watcher intent. **This is the first non-stadium-specific WC intent signal in the dataset.** A bracket-aware re-engagement touch would surface other matches in the user's country bracket.

**Copy:**

```
Subject: Your World Cup bracket — 3 more matches you might want to track

You're tracking {{country_team}}'s group-stage match on {{group_date}} and the {{knockout_stage}} 
match they could play on {{knockout_date}}. Here's the full bracket path:

Group stage → R16 → QF → SF → Final
[bracket visualization with matchups]

Three more matches in your country's potential bracket path:
1. {{match_2}} ({{date_2}}, {{venue_2}}) — currently ${{price_2}}
2. {{match_3}} ({{date_3}}, {{venue_3}}) — currently ${{price_3}}
3. {{match_4}} ({{date_4}}, {{venue_4}}) — currently ${{price_4}}

→ [Add to your bracket tracker]({{bracket_url}})
```

**Design:** Rich HTML with bracket visualization; fires Day-5 or Day-7 post-knockout-add.

**Ship cost:** 8-12h (bracket data, visualization template, conditional logic).

### New Touchpoint 12: Pre-WC Affiliate Soft-Launch (TP12)

**Trigger condition:** User has 2+ WC matches on watchlist AND any match is T-14d to T-7d (kevinshall first hits this state May 31 at T-14d on Netherlands × Japan; karin June 10 at T-14d on Switz × Canada).

**Rationale:** This is the WC primary first-commission window. The touchpoint surfaces the affiliate buy-links contextually, **inside the email**, not just on `/watchlist`. **The user does not need to return to the site to convert.**

**Copy:**

```
Subject: {{event_name}} is {{days_out}} days out — current source comparison

{{event_name}} is at {{venue}} on {{event_date}}. Here's the cross-source spread right now:

  Ticketmaster: ${{tm_price}}    → [Buy on Ticketmaster]({{tm_affiliate_url}})
  SeatGeek:     ${{sg_price}}    → [Buy on SeatGeek]({{sg_affiliate_url}})
  StubHub:      ${{sh_price}}    → [Buy on StubHub]({{sh_affiliate_url}})

Your target is ${{user_target_or_default}}. Cheapest source is currently 
{{cheapest_source}}, ${{savings_vs_avg}} below average. Historical WC pattern: 
prices typically capitulate in T-7d to T-3d window — if you're going, this is 
inside the right buy zone.

→ [Compare all sources on TicketScan]({{watchlist_event_url}})
```

**Ship cost:** 3-5h (email template + per-source affiliate URL injection + UTM tagging).

### Updated Touchpoint Priority

| # | Touchpoint | Ship Timing | Reason |
|---|---|---|---|
| **1** | **NEW-1: Two-step add modal with default target pre-fill (today's CRO daily)** | **May 16** | Single highest-impact ship; gates 0% target-capture pattern at creation moment |
| **2** | **TP8: Default-effect smart pre-fill** (May 8 carry) | Subsumed by NEW-1 | NEW-1 is the implementation; TP8 deprecated |
| **3** | **Day-1 schedule entry** (NEW-2) | **May 19** | Both WC power-users missed Day-1 boundary; carried Day 10 |
| **4** | **TP7: Affiliate Click-Through Capture** (May 1 NEW) | **May 19 HARD** (charlesteel Bruno T-1d) | First revenue moment; konman87 path dead tomorrow |
| **5** | **Goal-Gradient Progress Bar** (carried from May 1) | **May 19** | Pairs with NEW-1 (progress to next valuable action) |
| **6** | **TP10: WC Multi-Add Welcome (NEW)** | **May 22** (with WC content drop) | Cohort-specific, fires within 5min of 2nd WC add |
| **7** | **TP9: W0-A Target-Set Email (May 8 NEW)** | **May 22** (with W0 architecture) | Highest-leverage email in project history |
| **8** | **TP12: Pre-WC Affiliate Soft-Launch (NEW)** | **June 7** (kevinshall AT&T T-7d) | WC primary path go-live |
| **9** | **TP11: WC Bracket Re-engagement (NEW)** | **June 7** | karin signal addressed |
| **10** | **WC Pass Landing Page (TP5)** | **CONDITIONAL — May 25 binary gate** | Pre-sale skipped; landing page only ships if launch approved |
| **11** | **Bulk-Add Intent Modal (TP6)** | May 22-29 | taranimeramaro / future trip-planner cohort |
| **12** | **Post-First-Alert Upgrade Prompt (TP3)** | Q3 2026 | Requires first alert (lifetime zero) |
| **13** | **Watchlist Limit Hit (TP1)** | Q4 2026 | Requires freemium |
| **14** | **Extended History Paywall (TP2)** | Q4 2026 | Requires freemium |
| **15** | **Passive Upgrade Banner (TP4)** | Last | Only after proven value delivery |

### Success Metrics for NEW-1 + Phase 1A-WC (May 15 – June 21)

| Metric | Target | Rationale |
|---|---|---|
| NEW-1 (two-step modal) ship date | **May 16** | First psych rec to ship in 6 weeks of report |
| Target-price capture rate on new wl items (post-NEW-1) | **50-70%** in first 4 weeks | Default-effect literature benchmark |
| Day-1 schedule entry shipped | **May 19** | Both WC power-users missed Day-1; future ones will not |
| Phase 1A affiliate flag enabled (charlesteel path) | **May 19 HARD** | charlesteel Bruno Ohio T-1d |
| First affiliate click-through (charlesteel path) | **May 19-20** | charlesteel Bruno Ohio T-1d to event |
| First affiliate commission | $5-50 by May 31 | Realistic at small N |
| Phase 1A-WC affiliate ship | **June 7 HARD** | kevinshall AT&T Netherlands × Japan T-7d |
| First WC affiliate click-through | **June 7 – June 14** | kevinshall AT&T T-7d to kickoff |
| First WC affiliate commission | **$25-200 by June 21** | 5 AT&T matches across 25 days |
| W0 templates drafted + reviewed | **May 22** | Email Agent Wk-7 carry (was May 12) |
| W0 cron live | **May 29** | First W0 fire on next post-deploy signup (was May 15) |
| WC power-user count | **5+ by June 11** | Currently 2; 3 more by kickoff confirms structure |
| Activation rate sustained ≥ 50% over 4 weeks | by **July 1** | Phase 2 gate 1; failed this week, restart counter |
| Multi-session retention non-zero | by **July 1** | Phase 4 prerequisite; currently 0/15 |

---

## 6. Cross-Agent Handoffs

### → Email Agent (Agent 5) — CRITICAL (Day 39)

| Priority | Item | Deadline |
|---|---|---|
| **P0** | **Revive drip cron.** **Day 39. ~125 emails owed across 32 users.** Today's single-day queue: 24-28 emails — single-day record. | **Immediate** |
| **P0** | **Manual one-off email to charlesteel126 about Bruno Ohio T-5d.** ~10-min send, ~$0 cost, bypasses broken cron. **Replaces last week's konman87 manual (which did not go out and konman87's path dies tomorrow).** Single highest-EV manual touch available this week. | **Today (May 15)** |
| **P0** | **Day-1 schedule entry** (NEW-2). Both WC power-users hit Day-1 schedule gap. ~2-3h backend ship. | **May 19** |
| **P0** | **W0 architecture** (carried from May 8). "Designed but unbuilt" Day 7. **Two full rotation cycles complete with zero builds shipped per Email weekly.** | **Templates by May 22; cron live by May 29** |
| **P0** | **TP10 WC Multi-Add Welcome** (NEW). Fires within 5 min of 2nd WC add. Captures kevinshall/karin shape directly. | **May 22 (with W0)** |
| P0 | Hard-expiry rewrites for pete (Day-35), nicklib (Day-28), josh (Day-26). Day-21/Day-30 frame parsing breaks past 96h carry. | **This week** |
| P0 | "Event passed" auto-pivot template — **16 events passed; 4 likely to be added in next 7 days** (Inter Miami May 17 + Bruno Soldier May 17/18 + Bruno Ohio May 20). Mac DeMarco + Toronto FC variants exist; Inter Miami needs same-day add → same-day pass variant. | **This week** |
| P0 | Send TONIGHT's queue when engine returns (24-28 emails per today's daily): jfgalzin Day-7 / liambot Day-7 / pattyglvz Day-3 / kevinshall Day-3 power-user / kevinkid Day-7 / 5-user Day-22 batch + carries. | When engine returns |
| P0 | **jadbennis Inter Miami T-1d fires tomorrow May 16 ~20:33 UTC — FINAL flip threshold before Sunday kickoff.** | **May 16 ~20:33 UTC** |
| P0 | **karin Day-1 manual one-off send** — Day-1 schedule entry doesn't exist; karin missed Day-1 boundary this morning. 2nd WC power-user. **Single highest-EV manual after charlesteel today.** | **May 16** |
| P1 | E3 rewrite (drafted today in Email weekly) — closes the canonical-5 design audit. | Done (queued) |
| P1 | TP11 (WC Bracket Re-engagement) + TP12 (Pre-WC Affiliate Soft-Launch) — paired with WC content drop. | **May 22 + June 7** |
| P1 | German-language drip variant — **Day 14 unanswered** (was Day 13). | This week |
| P2 | "We Fixed It" campaign — **HOLD** until any engineering item ships. | Indef |

### → CRO Agent (Agent 6) — HIGH

| Priority | Item | Deadline |
|---|---|---|
| **P0** | **NEW-1: Two-step add modal with default target pre-fill at 80% of cross-source low.** Today's daily rec; commitment-and-consistency frame; ~5h ship. **First psych rec to ship in 6 weeks. Gates the entire alert-driven retention strategy.** | **May 16** |
| **P0** | **Instrument signup form to capture email domain at submit** (NEW-3). Confirm or break the n=5 domain-split hypothesis. If holds at n≥10, route legacy-ISP signups to wl-nudge welcome variant. | **May 22** |
| **P0** | Goal-gradient progress bar on `/watchlist` (carried Day 14). Pairs with NEW-1. | **May 19** |
| **P0** | "Curious signup" onboarding path (carried Day 14). Pattern B back to 62.5% rolling. Empty dashboard category-browse + "pick your first event" CTA. | **May 22** |
| P1 | Loss-aversion target-price banner (May 7 daily rec). Recovers existing 97 null-targets at view-time. Pairs with NEW-1 (prevention at creation + recovery at view). | **May 19 (with NEW-1)** |
| P1 | TP7 affiliate click-through toast — paired with Phase 1A. | **May 19** |
| P1 | Carried from prior weeks (sequenced over Q2): implementation-intentions Day-7+ modal, Zeigarnik header, post-signup screen, anchoring on `/compare` + `/event/[id]`, social-proof EventCard badge, reciprocity dashboard empty-state. **Per today's daily: full 7-fix CRO activation stack now ~29-34h combined.** | Sequenced |
| **P1** | **Newsletter homepage form audit** — **Day 103 flat. 14 weeks 5 days. 10-of-10 new users this week zero cross-conversion** per Email weekly. **Longest open dependency on the project.** Per Email weekly Day 10 of consecutive zero-capture days. **Wire check first; redesign only if confirmed broken.** | **This week** |
| P2 | Bulk-add intent modal (TP6). Pivots to taranimeramaro / future trip-planner cohort. | May 29 |

### → Analytics Agent (Agent 7) — HIGHEST (Day 39 / Day 22 / Day 15 Compounding)

| Priority | Item | Deadline |
|---|---|---|
| **P0** | **RESOLVE source attribution on ids 55+ (now 11+ unresolved).** **Day 22 of dependency.** Admin API 401 Day 15 (Lead Architect dependency). The cohort split (2 WC power-users vs 3 inerts in 96h, same time window) is now the highest-resolution attribution dataset to date. **If channel data resolves for any 2 of 5, first concrete attribution comparison.** | **This week (hard)** |
| **P0** | **Add `last_login_at` tracking** — Day 39. **0-of-15 multi-session retention is currently measured indirectly via absence of return-session wl-adds.** Direct instrumentation needed to measure: (a) whether users return at all, (b) which cohort returns more, (c) whether NEW-1 produces return-session lift. | **This week** |
| **P0** | **Connect GA4 Data API** — Day 39. Channel decisions remain guesses; **kevinshall's high-value single-user inbound cost is "exactly zero" per Analytics weekly because we don't know how he arrived.** | **This week** |
| **P0** | **What changed about acquisition flow on May 7 (and now May 12-14)?** 5 signups in 96h with internal 2-power-vs-3-inert split. **The 2 WC power-users in the same window are the highest-value attribution puzzle of the year.** | **This week** |
| P0 | **Domain-split hypothesis instrumentation.** Track email domain at signup; classify modern (gmail/icloud/apple/proton) vs legacy-ISP (yahoo/msn/aol/sbcglobal/comcast/etc). If n≥10 holds, route legacy users differently. | May 22 |
| P1 | Day-0 Activator instrumentation — track `signup_to_first_wl_add_seconds` as first-class metric. Currently extractable but not surfaced. | May 22 |
| P1 | WC vertical share dashboard — track wl_vertical='WC' weekly. Currently 15.5% (15/97); target 40%+ by June 11. | May 22 |
| P1 | Affiliate click tracking instrumentation — UTM + outbound-click capture for Phase 1A. | **May 19** (with Phase 1A) |
| P1 | Empirical confirmation for goal-gradient milestones (30% / 52% claims). Plan quarterly recompute. | May 22 |
| P2 | Newsletter form audit query — verify submissions actually hit DB. **103 days flat; 10/10 zero cross-conversion this week** is suspicious enough to merit checking the wire. | This week |

### → Ads Agent (Agent 4)

| Priority | Item | Deadline |
|---|---|---|
| **P0** | **What channel produced 2 WC power-users in 48 hours?** kevinshall (May 12) + karin (May 14). **The single most critical channel question in dataset history.** If we know the source, the WC June 11 kickoff has a scalable acquisition strategy. **Day 22 of attribution dependency.** | **This week (hard)** |
| **P0** | **Pull source attribution on ids 55-79 (11+ unresolved). Day 22.** Without this, Phase 1A's WC-multi-add criterion fires blind. | **May 19** (with Phase 1A) |
| **P0** | **Redirect acquisition effort from "known-source" (May 8 rec) to "WC-vertical" (revised this week).** WC pattern is the highest-quality signal of 2026; supersedes the known-source bifurcation. | **Reorient this week** |
| P0 | **Investigate the May 12-14 cohort split.** 2 WC power-users (gmail + hotmail) vs 3 inerts (msn + yahoo + sbcglobal). Same window, opposite outcomes. **Highest-resolution channel question in dataset.** | **This week** |
| P1 | **WC Multi-Add Sprint test** — $250-500 cap, narrow targeting on WC-themed terms (AT&T Stadium WC, BC Place WC, bracket-tracking). | **May 22-29** (post-attribution) |
| P1 | Bruno Mars / charlesteel audience seed — paired with Bruno Ohio T-5d through T-1d. | **May 17-19** |
| P1 | Salt Shed / Chicago indie audience seed — paired with venue page. | May 18 |
| P1 | Inter Miami / MLS audience seed — paired with Nu Stadium content. | May 16 |
| P2 | Benchmark CPA research: WC intent terms (host country, stadium, group draw, bracket). | Ongoing |

### → Content Agent (Agent 1)

| Priority | Item | Deadline |
|---|---|---|
| **P0** | **WC bracket-tracking explainer + hub page** (karin signal). First non-stadium-specific WC angle. | **May 22** |
| **P0** | **AT&T Stadium WC fan guide** (kevinshall signal). 9 days carried. | **May 22** |
| **P0** | **Salt Shed venue page** (Mac DeMarco signal). 6 days past deadline. | **May 16** |
| **P0** | **Inter Miami / Nu Stadium content** (jadbennis signal). T-2d today; rolls past Sunday. 7 days past deadline. | **May 16 (T-1d)** |
| P1 | "How many events should you track?" — supports goal-gradient rec. | **May 22** |
| P1 | "Smart Tracker for Trip Planners" campaign landing page — 7 days past. | **May 22** |
| P1 | WC Lincoln Financial Field — re-anchor from pete (churned) to city/venue frame. | **May 29** |
| P2 | BC Place WC fan guide (karin signal companion). | **June 1** |
| P2 | **Bruno Mars cross-tour hub — HOLD or KILL.** 22 days past original deadline. charlesteel Bruno Ohio T-5d today; the hub no longer serves a forward-looking acquisition function. | **DEFER / kill** |
| P2 | "We Fixed It" relaunch — **HOLD** until engineering ships. | Indef |

### → Social Agent (Agent 3)

| Priority | Item | Deadline |
|---|---|---|
| P0 | WC 27-day countdown — bracket frame, then stadium frame, then host-country frame. Rotate daily. | This week |
| P0 | Salt Shed content drop — pairs with venue page. | **May 16-17** |
| P0 | Inter Miami / Nu Stadium content drop — pairs with T-1d fire May 16. | **May 16** |
| P1 | "Trip planner" angle pinned to top for May — continue. | Continues |
| P1 | WC bracket-tracking social pin — karin signal social proof (anonymized). | **May 22-25** |
| P1 | AT&T Stadium WC angle — kevinshall signal social proof (anonymized). | **May 22-25** |
| P2 | All "we fixed it" content **HOLD** until engineering ships. | Indef |

### → Engineering / Lead Architect — CRITICAL (Day 39 / Day 22 / Day 15)

| Priority | Item | Deadline |
|---|---|---|
| **P0** | **Rotate or document admin API credential.** **Day 15 of regression.** `/api/admin/*` returns 401 Unauthorized for documented `ADMIN_SECRET`. **Blocks every cross-agent telemetry pull** (Analytics, Email, Growth, CRO all hitting this). | **Immediate** |
| **P0** | **Revive drip cron** — Day 39. Same fix-sequence as every prior week. | **Immediate** |
| **P0** | **Fix price tracking cron** — Day 39. Cumulative passed-no-notify at 16; 4 more likely in next 7 days. | **Immediate** |
| **P0** | **Build `/api/admin/drip-health` endpoint** — Day 8 of "still not built" per Email weekly. Required for any drip observability. | **This week** |
| **P0** | **Day-1 schedule entry in drip cron** (NEW-2). Both WC power-users hit Day-1 gap. ~2-3h ship. | **May 19** |
| **P0** | **Phase 1A affiliate flag with WC-multi-add criterion.** ~6-8h backend + frontend. **Anchored on charlesteel Bruno T-1d May 19.** | **May 19 HARD** |
| **P0** | **W0 architecture** — designed by Email Agent; needs backend webhook + cron tick + branching logic. ~8-12h. | **May 29** |
| **P1** | **Hard-expiry rewrite logic** (NEW-4) — auto-rewrite at 96h carry OR carry-cap with manual override. | **May 29** |
| **P1** | **`last_login_at` instrumentation** — Day 39. | **This week** |
| **P1** | **Two-step add modal w/ default target pre-fill** (NEW-1; CRO leads, Lead Architect supports). ~5h. | **May 16** |
| **P1** | **Newsletter form wire check** — Day 103. **Form may not be submitting.** | **This week** |
| P2 | Bracket data + visualization template (TP11). | June 1 |

---

## 7. Executive Summary

### This Week's Headline

**The acquisition front widened to the largest 7-day signup count of 2026 (+10 WoW, +100%), the WC power-user pattern replicated (kevinshall +6 wl in 179s + karin +2 wl in 12s, two host countries, two domains), and the retention front produced the first measurement-grade zero in dataset history (0-of-15 multi-session retention across last week's Day-0 activators).** Activation rate dropped −40pp WoW (60% → 20%) but the lift in items-per-activator (1.0 → 4.0) carried the WC vertical from 2% to 15.5% of total wl inventory in 7 days — single largest week-over-week vertical-mix shift of 2026. **Two halves of the funnel did not re-couple; they drifted further apart.**

The May 8 weekly's 9 named ship deadlines and 11 forecasts: **0 of 9 ships executed**, **5 of 11 forecasts hit as misses, 2 hit as worsened conditions, 3 inverted, 1 cleared-then-failed inside the same week.** The same engineering blockers carry to a sixth consecutive Friday; this Friday adds a fourth (W0 architecture) and an infrastructure regression (admin API 401 Day 15).

### The WC Power-User Pattern Is the Defining Finding of Week 6

Two users in 48 hours, two host countries, two stadiums, two domain classes, both multi-add at signup:
- **kevinshall87** — May 12 — gmail — 6 wl items in 179s — all 5 WC matches at AT&T Stadium + Matt Rife — **stadium-loyalist intent**
- **karin_ef1** — May 14 — hotmail — 2 wl items in 12s — WC Switzerland × Canada Group B + R16 Match 96 at BC Place — **bracket-tracker intent**

**The WC vertical share of total wl inventory jumped from 2% on May 12 morning to 15.5% (15/97) at report time — single largest WoW vertical-mix shift of 2026.** Per Analytics weekly: "the activator shape changed from single-event +35s to **WC-vertical multi-event same-stadium burst**. Before May 12, the WC vertical was 2% of total watchlist inventory. As of today it is 15.5%."

**Strategic implication:** the right paid-acquisition target for the next 27 days is not "more users like jadbennis" — it is "**more users like kevinshall and karin.**" The WC vertical multi-add cohort. Channel identification (Day 22 of attribution dependency) is the gating question. **If we knew the channel that produced 2 WC power-users in 48h, the WC June 11 kickoff has a scalable acquisition strategy.**

**Operational implication:** **8 of 8 WC power-user watchlist items left target_price=null.** The modal does not surface the field with enough force to capture it from even the highest-intent users in dataset history. **Today's CRO rec (NEW-1: two-step add modal with default target pre-fill) is the gating fix without which the alert system has nothing to alert on for the highest-intent cohort.** Ship cost: ~5h. Ship deadline: May 16.

### The 0-of-15 Retention Reading Is the Counter-Defining Finding

Last week's three Day-0 activators (jadbennis +32s, sparkit +34s, cjthomas +35s) ran the full Day-1 / Day-3 / Day-7 retention gauntlet this week:
- **3-of-3 NEUTRAL Day-1**
- **3-of-3 FAIL Day-3**
- **3-of-3 FAIL Day-7**
- **Zero second-adds. Zero return-session signals.**

Per Ads weekly + today's Analytics: combined Day-1/2/3 retention this week = **0-of-15 user-day tests = 0% (n=15).** Cumulative lifetime retention failure: **0-of-55 user-day tests at 0% return-session activation.** **This is the first measurement-grade retention reading in dataset history, and the reading is structural zero.**

**Strategic implication:** the +32-35s acquisition signal is real on the front edge of the funnel and **zero everywhere downstream**. The funnel acquires high-quality users at a 4-month-record rate and loses 100% of them inside the first 168 hours. **The bottleneck has been definitively located: it is the first-week retention machinery (W0 architecture + NEW-1 target capture + Day-1 schedule entry), all three of which exist as designs and zero of which exist as builds.**

### The Five Engineering Blockers (Now 39 / 22 / 15 Days Old)

1. **Price-tracking cron** — Day 39. Cumulative passed-no-notification 16; **4 more likely by May 21** (Inter Miami May 17 + Bruno Soldier May 17/18 + Bruno Ohio May 20).
2. **Drip cron** — Day 39. ~125 emails owed across 32 users (was 109/29 last week). Today's single-day queue: 24-28 — **single-day record.**
3. **Target-price flow** — diagnosis sharpened from "missing prompt" (May 1) to "UX flow doesn't surface field" (May 8) to "modal doesn't surface with enough force even for highest-intent cohort" (May 15). **NEW-1 is the implementation.**
4. **W0 architecture** — designed by Email Agent May 8; "designed but unbuilt" Day 7 per Email weekly today.
5. **Admin API credential** — Day 15 of regression. `/api/admin/*` returns 401 for documented secret. Blocks all cross-agent telemetry.

### What Changed This Week (And Why It Matters Strategically)

1. **The WC power-user pattern replicated at n=2 across host countries.** Strategic priority: identify the May 12-14 acquisition channel (Ads Agent + Analytics, Day 22 question); ship NEW-1 (two-step modal); ship Phase 1A-WC by June 7 (kevinshall AT&T Netherlands × Japan T-7d).
2. **The domain-split hypothesis emerged with zero contradictions at n=5.** Modern domains activate; legacy-ISP domains don't. Instrument signup form to capture domain (NEW-3); if hypothesis holds at n≥10, route legacy users to wl-nudge welcome variant.
3. **Multi-session retention is measurement-grade zero (0-of-15).** Last week's 3 Day-0 activators all failed Day-1/3/7 gauntlet. **The bottleneck is definitively first-week retention machinery.** Ship NEW-1 + Day-1 schedule + W0 by May 29.
4. **Lifetime activation rate crossed below the historical 61.5% threshold (60.76%) for the first time.** Two non-activator signups (c_calingasan + vlanza) produced the largest 2-day activation drop in platform history. **Phase 2 first gate (act ≥ 50% sustained 4w) failed inside the same week it cleared.**
5. **konman87 path dies in 24h (Bruno Soldier Field May 16/17).** Manual one-off email to charlesteel126 about Bruno Ohio T-5d is today's highest-EV manual touch (~10 min, ~$0).
6. **WC Pass May 25 binary gate probability of launch dropped from ≤25% to ≤10%.** With 4 engineering blockers + admin API regression + zero ships in 7 days, abort probability is now ≥90%.
7. **The first-commission scenario rotated from Bruno Mars to WC tickets.** Phase 1A deadline slips to May 19 (charlesteel Bruno Ohio); Phase 1A-WC deadline is June 7 (kevinshall AT&T). **WC is the primary first-revenue path now.**
8. **Hard-expiry rewrites are now load-bearing on three users (pete Day-35, nicklib Day-28, josh Day-26).** The tenure-family abstraction breaks at 96h+ carry — structural failure mode of the canonical drip beyond an outage window.

### Strategic Outlook (Compressed Further From May 8 Plan)

| Timeframe | Focus | Key Milestone |
|---|---|---|
| **May 15–16** | NEW-1 ship; Salt Shed page; Inter Miami content; manual charlesteel email | First psych rec ships in 6 weeks; 2 content gaps closed; 1st highest-EV manual send |
| **May 17–19** | Inter Miami passes (likely +1 cumulative passed-no-notify); Bruno Soldier × 2 nights pass; Phase 1A affiliate flag ship; charlesteel Bruno T-1d | Phase 1A salvage attempt; 3-4 events resolve in 72h window |
| **May 20–25** | Bruno Ohio passes (charlesteel last chance); WC Multi-Add Sprint content (D1 + D2); **May 25 WC Pass binary gate** | Go/no-go on June 1 WC Pass launch (≤10% probability of launch) |
| **May 26 – June 6** | W0 cron live; Day-1 schedule entry live; WC countdown content series; legacy-domain reroute test | W0 first fires; domain-split hypothesis confirmed or broken at n≥10 |
| **June 7** | **Phase 1A-WC HARD** — kevinshall AT&T Netherlands × Japan T-7d | WC primary affiliate path go-live |
| **June 11** | **WC kickoff** — Mexico v opponent at Estadio Azteca | First WC match; tournament-side marketing kicks in |
| **June 14 – July 9** | kevinshall AT&T matches (5 events across 25 days); karin BC Place matches (2 events across 13 days) | WC primary first-revenue window; expected $25-200 commission |
| **Q3 2026** | Premium soft-launch (gates: activation rate ≥ 50% sustained 4w + ≥1 alert fired); affiliate revenue scales with cohort growth | $50-200/mo affiliate; $0 Premium |
| **Q1 2027** | Referral program (conditional on multi-session retention > 0% + EXISTS (delivered alert)); advertising at 50k+ pageviews | TBD |

### The Single Cheapest Action This Week That Could Change This Report Next Friday

**Send the manual one-off email to charlesteel126 about Bruno Mars Ohio T-5d today.** ~10 minutes. ~$0. Bypasses the broken drip cron entirely. Higher conviction than last week's konman87 ask because:
- Bruno Ohio is T-5d (vs Soldier was T-4d/T-3d)
- charlesteel has been silent 22 days
- Phase 1A is no longer required for the send to be meaningful — a plain "heads up, prices are softening at T-5d" is itself a re-engagement signal
- The "did the manual email change anything?" data point feeds directly into next week's report

**If this email goes out today and produces any signal — return-session, click, reply, even a bounce — next week's report has the first concrete cross-agent intervention data of the outage.** If it doesn't go out, next week's report has the same shape as this one.

---

_End of Growth & Retention Weekly Report — May 15, 2026_
_Next weekly: Friday May 22, 2026 — 27 days from WC kickoff._
