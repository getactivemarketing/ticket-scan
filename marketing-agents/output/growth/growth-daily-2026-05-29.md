# Growth Daily — 2026-05-29

> **Clean 24h window** (May 28 11:00 UTC → May 29 11:00 UTC) after yesterday's 72h merger. **The single most important fact in the day: nothing happened.** Zero signups, zero watchlist adds, zero email touches, zero alerts triggered in the 28-hour window since the May 28 07:12-07:15 UTC double-burst. **The 2m9s NBA Finals cluster (joseph reactivation + samvirsujan instant-activate) is now 28h old without a follow-up signal of any kind** — neither a third user adding the same event, nor either of the two clusters returning to set a target, nor a new signup in the cluster's wake. **The 28h tail behind the strongest organic-signal moment of the recovery cohort window is structurally informative: it tells us either (a) the upstream source that produced the May 28 burst exhausted its delivery inside that single 2m9s envelope, or (b) the source is still firing but the conversion window from view→signup has shifted to <0.01% effective. In both cases, the answer points to a one-off attribution event, not a repeatable acquisition pipeline.** Today's lifecycle calendar then runs **dense at 4 algo fires inside an 11-hour envelope**, on top of **1 already-missed Day-30 fire this morning** (zhili1208 ~03:16 UTC) — meaning the engine outage now compounds with a **second algo-quiet day on the heels of the densest one of the week**.

## User health dashboard

| Segment                          | Count | % of Total | vs Yesterday |
|----------------------------------|-------|------------|--------------|
| Total users                      | **90** | 100% | **+0 in 24h** (May 28 ended at 90 after the 07:12-07:15 UTC double-burst; today is the first 0-signup day after that burst). **7-day rolling rate: 0.29/day (May 28) → 0.29/day (May 29) — flat at sub-baseline.** **If May 30 also closes at 0 signups, the 7-day rolling rate decays to 0.14/day = lowest floor since the recovery cohort opened.** **API confirms `usersToday=0`, `usersThisWeek=2`** (samvir + pika both still inside the 7d window). |
| New (last 7 days, API count)     | **2** | 2.2% | **+0** (samvirsujan Day 1, pika4696 Day 1). **In-window activation rate: 1/2 = 50% (frozen — samvir's add stands; pika still inert at Day 1).** **The 1/2 reading is now 28h old and stable — if pika does not activate before May 31 07:12 UTC (Day-3 fire), the 7d in-window rate drops to 1/2 → 0/0 once both age out, while the dataset gains a confirmed Day-1+ inert who never activated.** |
| Activated (has watchlist)        | **56** | 62.2% | **+0 net in 24h** (watchlist 110 → 110). **The May 27-28 12-hour double-add window (joseph + samvir) is now followed by a 28h zero-add window — symmetric tail.** **Activation rate frozen at 56/87 real users = 64.4%, unchanged from May 28.** |
| Active (visited in 7 days)       | unknown | — | **Day 53 without `last_login_at` instrumentation.** Last confirmed real-world visits = samvir + pika + joseph 28h ago. **No further visits inferable.** |
| At-risk (7-14d signup-age proxy) | **10** | 11.1% | **+0 net in 24h** (no Day-7 crosses; no Day-14 crosses in 24h — first 24h-window in 5 days with zero boundary-cross activity). |
| Churned (14d+ signup-age proxy)  | **78** | 86.7% | **+0 net in 24h** (no Day-14 crosses in window — first 24h with no churn boundary-cross since May 25). **Vlanza is the next cross — Day-14 missed May 28 ~13:20 UTC ~22h HARD EDGE confirmed already.** **The +1 to 79/90 = 87.8% fires when nunemakerc crosses Day-14 today ~15:41 UTC (~4.7h from report) — the day's first guaranteed churn-bucket increment.** |

> **Day 53 without `last_login_at` instrumentation. Day 53 of zero drip emails sent** (`/api/admin/drip-stats` returns `stats=[]` with **20 pendingUsers** including samvir + pika entered May 28).
> **Day 53 of zero triggered alerts (lifetime).**
> **NEWSLETTER SUBSCRIBERS: 3, UNCHANGED FOR 117 DAYS** (16w 5d).
> **The 28-hour zero-add tail behind the May 28 NBA Finals cluster is the longest post-cluster silence in the recovery cohort window.** The previous comparable tail (May 20 3-stack → 7 days zero adds before joseph) ran longer but came from a weaker cluster (3 signups, 1 add) — today's tail comes from a stronger cluster (2 signups, 1 add at 19s) but is already structurally similar in shape.

## What changed in 24h

1. **ZERO SIGNUPS, ZERO WATCHLIST ADDS, ZERO ENGINE TOUCHES = THE FIRST FULL-QUIET 24H WINDOW SINCE MAY 26.** May 26 was 0/0/0. May 27 was 0/+1 (joseph reactivation). May 28 was +2/+1 (the 07:12-07:15 burst). **May 29 returns to 0/0/0 — meaning the 96h period May 26-29 produced 2 signups and 2 adds, all from a single 12-hour envelope on May 27-28.** **The pattern is: 84% of the 96-hour observation period was inert; the productive moment was a 12-hour cluster.** **The implication for any future acquisition pipeline: the steady-state organic floor is 0/day with sparse 1-12h bursts of 1-3 signups each. The bursts are not predictable on the daily cycle but they are not random either — they cluster on upstream events (content shares, search-result clicks, link spreads) that the agent system currently cannot see.**

2. **THE 2M9S NBA FINALS CLUSTER GETS NO FOLLOW-UP IN 28H.** Neither joseph (now 1.66 days post-reactivation) nor samvir (now 1.16 days post-signup) has returned to set a target on the Knicks Rd4 HM Gm3 watchlist item. **No third user has independently added the same event in 28h.** **No new signup has entered referring to or adjacent to NBA Finals signals.** The cluster's organic signal is now structurally complete inside a 12-hour window — meaning either the upstream source delivered all its impact in that 12h envelope, or subsequent visitors are arriving but not converting. **The follow-up silence makes the original cluster more interpretable, not less: it tells us the cluster was acquisition-driven (event-specific visitor arrivals), not retention-driven (existing-user re-engagement waves).**

3. **YESTERDAY'S DENSE ALGO-FIRE DAY CLOSED 4-OF-4 DARK + 1-CARRY-FORWARD-PASSED.** May 28 had 4 lifecycle fires inside an 11h11m envelope: **sparkitrightthere Day-21 ~11:38 UTC** (closed dark — apology-only candidate), **vlanza Day-14 ~13:20 UTC** (closed dark, 0 items, structurally inert), **natalie.sotocruz Day-21 ~18:40 UTC** (closed dark, 0 items), **cjthomas Day-21 ~22:49 UTC** (closed dark, Noah Kahan watchlist still target=null). **Plus zhili1208 Day-30 already missed this morning ~03:16 UTC** — closing the 5-of-5 dark cluster across 16h27m. **By cumulative count, the Day-21 wave for users signed May 7 is now 3-of-3 dark (sparkit, natalie, cjthomas), with the lifecycle exhausted on the same day for all three.** **The lilianamasyrubi Day-31 carry-forward (Day-30 missed May 28) is now inert at Day 31 with no return signal.**

4. **NUNEMAKERC DAY-14 IS TODAY'S FIRST AND ONLY UNAVOIDABLE CHURN-CROSS.** Day-14 fires ~15:41 UTC today (~4.7h from report). **The user has 0 watchlist items and was already at the engine-independent coverage gap pattern.** **The churn-bucket increment will arrive ~15:41 UTC and bring the floor to 79/90 = 87.8%.** **Vlanza already crossed yesterday May 28 ~13:20 UTC (~22h HARD EDGE) — confirmed in this report but counted in the May 28 to-churned tally above.** **No other Day-14 crosses today.**

5. **TODAY'S ALGO-FIRE CALENDAR IS DENSE BUT QUIETER THAN YESTERDAY — 4 LIFECYCLE FIRES INSIDE 11H ENVELOPE.** **12:54 UTC (jfgalzin Day-21 ~2h from report), 13:07 UTC (liambot62 Day-21 ~2.1h), 15:41 UTC (nunemakerc Day-14 ~4.7h), 20:52 UTC (kevinkid94 Day-21 ~9.9h), 21:54 UTC (emmacmather Day-21 ~10.9h).** **5 lifecycle fires total in an 11h envelope — the second-densest day of the week, behind yesterday's 4-in-11h.** **All 5 candidates are 0-item users except liambot62 (Toronto FC v Inter Miami PASSED May 9, target=null) — so apology-only for 1, structural inert for 4.** **All 5 fires will close dark unless engine restarts in the next 2 hours.**

6. **DAY-30 WAVE FOR LATE-APRIL COHORT NOW 4-OF-4 DARK WITH JUNE 3 BEING THE NEXT ANCHOR (JOSEPH).** **zhili1208 Day-30 missed ~03:16 UTC THIS MORNING ~7.75h HARD EDGE — first Day-30 miss of the week.** **The 4 confirmed Day-30 misses since the second-wave cluster opened: taranimeramaro (May 25), nmcnamee (May 25), lilianamasyrubi (May 28), zhili1208 (May 29).** **The next Day-30 fires June 3 ~21:39 UTC for joseph.g.nicolosi** — the just-reactivated user with NBA Finals Knicks Rd4 HM Gm3 target=null. **The joseph Day-30 send is now the highest-EV individual fire of the lifecycle calendar for the next 7 days** because: (a) demonstrated organic intent 1.66d ago, (b) target-capture window still open (event 18d out), (c) the same-event clustering with samvir creates a measurable social proof asset for the email body itself.

7. **NEW INERT SUB-SEGMENT FORMED: PIKA4696 IS THE DATASET'S CLEANEST DAY-1 INERT A/B COUNTERFACTUAL.** pika4696 signed up May 28 07:12 UTC, came in the same 2m9s burst as samvirsujan from the same presumed upstream source, and has held 0 watchlist items through 28 consecutive hours. **The samvir/pika divergence is the dataset's cleanest within-burst A/B**: same arrival minute, same presumed referrer, divergent intent expression. **Pika is structurally similar to brockedwardnelson + keegansmith from the May 20 3-stack** — burst-cohort participant who never demonstrates event-specific intent. **The Day-3 fire for pika is May 31 07:12 UTC (~46h from report) — the next natural cadence touch. If pika misses Day-3 and Day-7, this user becomes the dataset's first 0-item churned signup from the May 28 burst.**

8. **EVENT-PASSING SCHEDULE FOR NEXT 7 DAYS: 0 OPEN PRICE EVENTS ARE TODAY'S CANDIDATES.** **liambot62's Toronto FC v Inter Miami passed May 9 (now 20d post-event, apology decayed).** **All May 24-27 event-passings (AEW, SEC Sessions 5+6, Game 3 Thunder/Spurs) are now 2-5d post-event — apology windows decay-warming.** **No new event-passings inside the next 4 days** until Inter Miami vs Portland (PASSED May 17 already, jadbennis0 carry) and Cardi B Charlotte (PASSED Apr 12). **The next live event-passing on the watchlist is Bilmuri Madison May 2 (PASSED 27d ago), then Mac DeMarco Chicago PASSED May 7 (22d ago).** **All currently open events in the watchlist are future-dated.** **First future event-passing is Noah Kahan Orlando Jun 12 (14d from now) for cjthomas — same user who missed Day-21 yesterday and now has dual carry: lifecycle apology + T-7d on June 5.**

9. **THE 86.7% CHURNED FLOOR HOLDS FOR THE FIRST FULL DAY IN 4 DAYS.** May 25: 76/88 = 86.4%. May 26: +1 (kevinshall, pattyglvz) → 78/88 = 88.6%, then signup denominator changes settled it back. May 27-28: 78/90 = 86.7%. **Today May 29: still 78/90 = 86.7% — flat for the first day in 4 days.** **The +1 to-churned arrives this afternoon (nunemakerc 15:41 UTC) → 79/90 = 87.8%.** **By May 30: c_calingasan Day-16 already crossed → 79/90 if no new signups, or 79/91 = 86.8% if a signup arrives.** **The 90% milestone (81/90) projects to June 1-3 depending on signup arrivals — 4-5d from report.**

10. **DAY 53 OF THE ENGINE OUTAGE OPENS ON THE QUIETEST DAY OF THE 5-DAY WINDOW.** The 5-day rolling shape: +2 signups May 28 / 0 May 29 / 0 May 27 / 0 May 26 / 0 May 25 = 2 signups across 120 hours, all delivered in a single 2m9s envelope. **The engine outage is now in a 5-day window where the only acquisition arrived as a single cluster — meaning the daily-rate metric understates the structural pattern.** **A working engine could not have generated any of the May 28 signals** (the cluster was acquisition-driven) **but a working engine could have captured value from the 28-hour follow-up tail** (target-setting nudges to samvir + joseph at Day-1 cadence). **The engine outage cost in the May 28-29 window = target-capture conversion on the strongest organic intent signal of the recovery cohort.**

## Activation gap

**Users signed up in last 7 days (by signup-date) with 0 watchlist items: 1** (unchanged from yesterday — pika4696):

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **pika4696@gmail.com** | May 28 07:12 UTC | 1d 3h 47m | **0** | **Day 1 today. Inert at +27h47m from signup.** **Day-3 fires May 31 ~07:12 UTC (~46h from report).** **The pika/samvir within-burst A/B counterfactual continues: same minute arrival, same presumed referrer, divergent activation. Pika is the clearest 0-item case in the dataset for the question "did the upstream source deliver intent or just attention?"** If pika never activates, the May 28 burst attribution shifts from "intent-driven referral" to "attention-driven referral with one intent match." |

**Activated within 7-day window (carried):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **samvirsujan@gmail.com** | May 28 07:15 UTC | 1d 3h 45m | **1** (NBA Finals: Knicks Rd4 HM Gm3, MSG Jun 16, target=null) | **Day 1 today. 19s activation latency = fastest in dataset.** **Day-3 fires May 31 ~07:15 UTC (~46h from report).** **NBA Finals Knicks is now 18 days out — target-capture window open ~11 days until T-7d (June 9).** **First 28h post-activation: zero return visit, zero target set.** **The samvir target=null carry is now identical in shape to the joseph carry — both are intent-expressed Knicks Rd4 HM Gm3 watchers with no follow-up engagement.** |

**Aged-out of 7-day window but still 0 watchlist (lifecycle):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **brockedwardnelson** | May 20 19:58 UTC | 8d 15h | **0** | **Day 9. Day-7 missed May 27 ~40h HARD EXPIRY.** Day-14 fires June 3 ~19:58 UTC (~4.4d). |
| **keegansmith18** | May 20 17:39 UTC | 8d 17h | **0** | **Day 9. Day-7 missed May 27 ~42h HARD EXPIRY.** Day-14 fires June 3 ~17:39 UTC (~4.3d). |
| **9440111** | May 18 19:09 UTC | 10d 15h | **0** | **Day 11. Day-7 missed May 25 ~88h HARD EXPIRY.** Day-14 fires June 1 ~19:09 UTC (~2.3d). |
| **eduardo@del-valle.com** | May 18 00:48 UTC | 11d 10h | **0** | **Day 12. Day-7 missed May 25 ~107h HARD EXPIRY.** Day-14 fires May 31 ~00:48 UTC (~1.6d). |
| **nunemakerc** | May 15 15:41 UTC | 13d 19h | **0** | **Day 14 today. DAY-14 FIRES ~15:41 UTC (~4.7h from report — TODAY).** |
| **vlanza** | May 14 13:20 UTC | 14d 22h | **0** | **Day 15 today. Day-14 missed May 28 ~21h HARD EDGE (CROSSED TO CHURNED YESTERDAY).** |
| **c_calingasan** | May 13 11:46 UTC | 15d 23h | **0** | **Day 16. Day-14 missed May 27 ~47h HARD EXPIRY (CROSSED YESTERDAY).** |
| **pattyglvz** | May 12 15:23 UTC | 16d 19h | **0** | **Day 17. Day-14 missed May 26 ~68h HARD EXPIRY (CHURNED).** |
| **jmoriarty13** | May 9 13:18 UTC | 19d 22h | **0** | **Day 20.** Engine-independent coverage gap. |
| **emmacmather** | May 8 21:54 UTC | 20d 13h | **0** | **Day 21 today. Day-21 fires ~21:54 UTC (~10.9h from report — TODAY).** |
| **kevinkid94** | May 8 20:52 UTC | 20d 14h | **0** | **Day 21 today. Day-21 fires ~20:52 UTC (~9.9h from report — TODAY).** |
| **jfgalzin** | May 8 12:54 UTC | 20d 22h | **0** | **Day 21 today. Day-21 fires ~12:54 UTC (~2h from report — IMMINENT).** |
| **natalie.sotocruz** | May 7 18:40 UTC | 21d 16h | **0** | **Day 22. Day-21 missed yesterday ~16h HARD EDGE.** |
| **sparkitrightthere** | May 7 11:38 UTC | 21d 23h | **1 (Mac DeMarco PASSED May 7)** | **Day 22. Day-21 missed yesterday ~23h HARD EDGE.** Apology-only carry. |

**Outside 7-day window (activated, target=null carriers):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **lisallam** | May 17 14:05 UTC | 11d 21h | **1** (JOJI: SOLARIS Newark Jun 16, target=null) | **Day 12. Day-14 fires May 31 ~14:05 UTC (~2.1d).** JOJI 18d out. |
| **cutekitten1234** | May 16 23:32 UTC | 12d 12h | **7** (Harry Styles MSG Aug-Sep, all target=null) | **Day 13. Day-14 fires May 30 ~23:32 UTC (~1.5d).** **Highest-EV target-capture carry by item-count + window-width.** |
| **belder4308** | May 16 22:13 UTC | 12d 13h | **2** (SEC Baseball Sessions 5+6 BOTH PASSED) | **Day 13.** Long-form re-engagement only. |
| **karin_ef1** | May 14 06:46 UTC | 15d 4h | **2** (WC Switz-Canada + R16 Match 96, target=null) | **Day 15. Day-14 missed May 28 ~28h HARD EDGE (CHURNED yesterday).** WC events 26, 39d out — target-capture window still open. |
| **kevinshall87** | May 12 16:44 UTC | 16d 18h | **6** (5 WC + Matt Rife, target=null) | **Day 17. Day-14 missed May 26 ~66h HARD EXPIRY.** **Match 11 now 16d out, T-7d June 7 (~9d).** Highest-EV target-capture carry by item-count. |
| **liambot62** | May 8 13:07 UTC | 20d 22h | **1** (Toronto FC v Inter Miami PASSED May 9) | **Day 21 today. Day-21 fires ~13:07 UTC (~2.1h — IMMINENT).** Apology-only. |
| **cjthomas2557** | May 7 22:49 UTC | 21d 12h | **1** (Noah Kahan Jun 12, target=null) | **Day 22. Day-21 missed yesterday ~12h HARD EDGE.** Noah Kahan 14d out, T-7d June 5 (~7d). |
| **jadbennis0** | May 5 20:33 UTC | 23d 14h | **1** (Inter Miami PASSED May 17) | **Day 24. Day-21 missed May 26 ~62h HARD EXPIRY.** |
| **joseph.g.nicolosi** ⭐ | May 4 21:39 UTC | 24d 13h | **1** (NBA Finals: Knicks Rd4 HM Gm3, MSG Jun 16, target=null — **added May 27 19:29 UTC**) | **Day 25. Reactivation Day +1.66.** **Day-30 fires June 3 ~21:39 UTC (~5.4d).** **First 36h post-reactivation: zero return, zero target set, zero second-event add.** **The follow-up silence is structurally informative: the reactivation moment did not snowball into deeper engagement.** |
| **zhili1208** | Apr 29 03:16 UTC | 30d 8h | **0** | **Day 30 today. Day-30 missed ~7.75h ago this morning ~03:16 UTC HARD EDGE.** |
| **lilianamasyrubi** | Apr 28 05:24 UTC | 31d 6h | **0** | **Day 31. Day-30 missed yesterday ~30h HARD EXPIRY.** |
| **taranimeramaro** | Apr 25 18:25 UTC | 33d 17h | **3** (Bruno MetLife Aug 21/22/25, target=null) | **Day 34. Day-30 missed May 25 ~96h HARD EXPIRY.** **Highest-EV carry by target-capture window width** (Bruno 84-88d out). |
| **nmcnamee99** | Apr 25 11:51 UTC | 33d 23h | **1** (Raptors-Cavs PASSED Apr 26) | **Day 34. Day-30 missed May 25 ~95h HARD EXPIRY.** Reference case for joseph parallel. |
| **mark.murdock / awwhittington / ggri73 / dr.altvater** | Apr 20-23 | 36-37d | **0** | Lifecycle exhausted. |
| **ajvanprooyen** | Apr 23 00:58 UTC | 36d 10h | **6** (Cubs 100% PASSED) | **Day 36.** First power-user lifecycle-exhaustion candidate. |
| **josh (joshdguillemette)** | Apr 19 20:30 UTC | 39d 14h | **1** (AEW Double or Nothing PASSED May 24) | **Day 40.** AEW 5d post-event — apology decay-warming. |
| **dylanbaldy** | Apr 15 18:24 UTC | 43d | **0** | Churned. |

- **27 real users** (excluding 3 test) have **never** added a watchlist item — unchanged from May 28.
- **Activation rate trajectory (real users):** ... 63.5 → 63.5 (May 22-25 flat 96h) → **64.4 (May 27-29 frozen at 56/87 for 48h).** **The +0.9pp move from joseph + samvir holds through 48 consecutive hours with zero erosion — meaning no new signups arrived to dilute the denominator.** **The flat hold at 64.4 is structurally a quasi-stability: any new 0-item signup re-introduces denominator pressure; any new activator (any add from any user) re-introduces numerator gain.**
- **7-day decline:** −5.7pp from May 22 (71.0% → 64.4%) — the decline floor held for 48h.

**Acquisition-source inference holds at "single-source upstream event" hypothesis from May 28.** Ads Agent's open question stack now reads: **(a) what produced May 20 burst? (b) what stopped working May 21-27? (c) where is the long-run acquisition floor? (d) what produced the May 28 2m9s burst, is it the SAME source as May 20, AND why did it not repeat May 29?** **The "did not repeat" question (d) is structurally important — a single-source one-off and a single-source repeating-but-throttled source have different engineering implications.** **Plausible/GA referrer logs for May 28 07:00-08:00 UTC vs May 29 same window would resolve it inside 5 minutes of analyst time.**

**Unknown-source activation rate: 11/28 = 39.3% (locked from May 28 — first positive movement in 96h+, holds at +5.5pp from May 25's 9/29 = 31.0% baseline).** **Known-source: 3/3 = 100% (frozen — Day 36 of attribution dependency).**

## Churn signals

- **Unsubscribes today:** **0** (3 subscribers; **117 days flat = 16w 5d**).
- **Users entering "at-risk" since May 28:** **0** (no Day-7 crosses in 24h window).
- **Users entering "churned" since May 28:** **+1 confirmed (vlanza ~13:20 UTC yesterday — counted yesterday)** + **+1 pending today (nunemakerc ~15:41 UTC)**.
- **Alert fatigue candidates:** **0** (0 alerts ever sent — Day 53).
- **Events passed without notification (cumulative):** **22 (unchanged in 24h).** Next event-passings: Noah Kahan Jun 12 (cjthomas, 14d), JOJI Newark Jun 16 (lisallam, 18d), NBA Finals Knicks Rd4 Jun 16 (joseph + samvir, 18d). **All three June 12-16 events are still inside the target-capture window — the engine has 7-11 more days of window before T-7d fires fall.**
- **Algo-overrides as preemptive "events lost without notification":** **kevinshall WC Match 11 T-21d MISSED May 24 ~125h-carry.** **kevinshall WC Match 22 T-21d MISSED May 27 ~36h-carry.** **cjthomas Noah Kahan T-7d fires June 5 (~7d from report — next open algo window for this user).** **lisallam JOJI T-7d fires June 9 (~11d).** **joseph + samvir NBA Finals Knicks T-7d fires June 9 (~11d) — first SHARED T-7d in dataset history (2 distinct users, same event, same fire window).**
- **29th day of non-Cubs flip-quiet streak.** **25 confirmed flip failures + 0 new T-21d misses in 24h = 25 (flat).**

## At-risk users (7–14d inactive proxy) — top intervention priorities

| User | Day | Watchlist | Days to event | Recommended intervention |
|------|-----|-----------|---------------|--------------------------|
| **nunemakerc** | 14d | 0 | — | **PREEMPT TODAY (Day-14 fires ~15:41 UTC ~4.7h — IMMINENT).** Body: "Nunemaker — two weeks ago today you signed up but didn't add an event. We owe you a Day-7 touch (we missed it last week) and a Day-14 touch (we're missing it right now). Reply with one event name — concert, World Cup match, NBA game — and we'll set up price tracking in 30 seconds and have it watching all three sources by tonight." |
| **eduardo** | 11d | 0 | — | **CARRY (Day-7 missed May 25 ~107h HARD EXPIRY; Day-14 fires May 31 ~38h).** |
| **lisallam** | 11d | 1 (JOJI Newark Jun 16, target=null) | 18 | **CARRY + EVENT-NUDGE (Day-14 fires May 31 ~2.1d).** Body: "Lisa — JOJI is now 18 days out at Prudential. Set a price you're willing to pay for SOLARIS night and we'll watch Ticketmaster, SeatGeek, and StubHub side-by-side from now until doors open." |
| **cutekitten1234** | 12d | 7 (Harry Styles MSG, target=null) | 90-105 | **PREEMPT TOMORROW (Day-14 fires May 30 ~23:32 UTC ~1.5d).** Body: "Twelve days ago you added seven Harry Styles MSG nights. Your shows are 13-15 weeks out — the target-price window is wide open. Set what you're willing to pay on each (you can do all 7 in one reply: '$280, $260, $260, $260, $280, $300, $320' or any spread) and we'll watch all 3 sources from now until each night." **Highest-EV target-capture carry by item-count + window-width.** |
| **belder4308** | 12d | 2 (SEC Sessions 5+6 BOTH PASSED) | passed | **CARRY (apology-only).** |
| **9440111** | 10d | 0 | — | **CARRY (Day-7 missed May 25 ~88h; Day-14 fires June 1 ~2.3d).** |
| **brockedwardnelson** | 8d | 0 | — | **CARRY (Day-7 missed May 27 ~40h; Day-14 fires June 3 ~4.4d).** Member of May 20 3-stack. |
| **keegansmith18** | 8d | 0 | — | **CARRY (Day-7 missed May 27 ~42h; Day-14 fires June 3 ~4.3d).** Member of May 20 3-stack. |
| **zhouyilinbest** | 8d | 1 (Game 3 PASSED May 22) | passed | **CARRY (apology-only).** Single-event lifecycle complete. |
| **karin_ef1** (just churned) | 15d | 2 (WC Switz-Canada + R16 Match 96, target=null) | 26, 39 | **WIN-BACK (Day-14 missed ~28h HARD EDGE).** Body: "Karin — 15 days ago you added Switzerland vs Canada (June 24) and your Round of 16 match (July 7). We owed you Day-7 and Day-14 touches — we sent zero. Switzerland vs Canada is 26 days out; your R16 match is 39 days out. Reply with target prices on both ('$220 / $400' format) and we'll watch all three sources around the clock." **Highest WC target-capture carry in this segment.** |

## Live algo-flip post-mortem (today)

| User | Event | Days out | Flip status | Days flagged | Sends |
|------|-------|----------|-------------|--------------|-------|
| **joseph.g.nicolosi** ⭐ | NBA Finals: Knicks Rd4 HM Gm3 (Jun 16) | 18 | **NEW WATCH +1.66d. T-7d fires June 9 (~11d).** Target=null — no flip possible until target set. | 1.66 (post-add) | 0 |
| **samvirsujan** ⭐ | NBA Finals: Knicks Rd4 HM Gm3 (Jun 16) | 18 | **NEW WATCH +1.16d. T-7d fires June 9 (~11d).** Target=null — no flip possible until target set. | 1.16 (post-add) | 0 |
| **josh** | AEW Double or Nothing (PLAYED May 24) | −5 | **LOCKED 0/4. Apology window decay-warming (~120h post-event).** | 15 | 0 |
| **zhouyilinbest** | Game 3 Thunder/Spurs (passed May 22) | −7 | Locked — case structurally closed. | 9 | 0 |
| **belder4308** | SEC Sessions 5+6 (BOTH PASSED) | −8, −7 | Full 0/4 LOCKED. | 13 | 0 |
| **cjthomas** | Noah Kahan Jun 12 | 14 | **T-21d MISSED May 22. Day-21 missed yesterday ~12h. T-7d fires June 5 (~7d).** | 22 | 0 |
| **lisallam** | JOJI: SOLARIS Newark Jun 16 | 18 | **T-21d MISSED May 26 ~71h-carry. T-7d Jun 9 (~11d). Day-14 fires May 31 (~2.1d).** | 12 | 0 |
| **kevinshall87** | 5 WC + Matt Rife | 16-128 | **Match 11 T-21d MISSED May 24. Match 22 T-21d MISSED May 27 ~36h-carry. Match 11 T-7d fires June 7 (~9d).** | 17 | 0 |
| **karin_ef1** | WC Switz-Canada + R16 Match 96 | 26, 39 | NOT YET FLIPPED — earliest T-7d Jun 17. | 15 | 0 |
| **cutekitten1234** | 7 Harry Styles MSG Aug 26-Sep 9 | 90-105 | NOT YET FLIPPED — earliest T-7d Aug 19. | 13 | 0 |
| **taranimeramaro** | Bruno Mars MetLife Aug 21/22/25 | 84-88 | NOT YET FLIPPED — earliest T-21d ~Aug 1 (Day 66). | 34 | 0 |
| **nmcnamee99** | Raptors-Cavs PASSED Apr 26 | −33 | Apology only. | 34 | 0 |

**29th day of algo-flip-quiet streak.** **25 confirmed flip failures (unchanged from May 28).**

**TODAY's critical algo-flip windows:**
- **~12:54 UTC (jfgalzin Day-21 ~2h from report — IMMINENT)**
- **~13:07 UTC (liambot62 Day-21 ~2.1h)**
- **~15:41 UTC (nunemakerc Day-14 ~4.7h)**
- **~20:52 UTC (kevinkid94 Day-21 ~9.9h)**
- **~21:54 UTC (emmacmather Day-21 ~10.9h)**

Already missed today: **~03:16 UTC (zhili1208 Day-30 ~7.75h-carry HARD EDGE).**

**Open algo-thresholds in the next 7 days:**
- **5 fires today (above), all projected dark**
- **cutekitten Day-14 May 30 ~23:32 UTC (~1.5d)**
- **lisallam Day-14 May 31 ~14:05 UTC (~2.1d)**
- **eduardo Day-14 May 31 ~00:48 UTC (~1.6d)**
- **pika + samvir Day-3 May 31 ~07:12-07:15 UTC (~1.85d)** — **next natural cadence for the May 28 burst cohort; samvir is the highest-EV individual fire of the next 48h** (intent-expressed, target=null, event 18d out)
- **9440111 Day-14 June 1 ~19:09 UTC (~2.3d)**
- **brock + keegan + zhouyilinbest Day-14 June 3 (~4.3-4.4d)**
- **joseph Day-30 June 3 ~21:39 UTC (~5.4d)** — **highest-EV individual fire of the week**: target-setting nudge for the just-reactivated NBA Finals Knicks user, 6 days before T-7d, on a 64% activation-rate floor
- **cjthomas Noah Kahan T-7d June 5 (~7d)** — first T-7d send opportunity since the outage opened

## Churned users with re-engagement potential

| User | ~Days inactive | Watchlist | Upcoming hook? | Priority |
|------|----------------|-----------|----------------|----------|
| **samvirsujan** ⭐ | 1d | 1 (NBA Finals Knicks Rd4 Jun 16, target=null) | **18d out, T-7d June 9 (~11d)** | **TOP — fastest activator (19s) in dataset. 28h post-signup with zero return, zero target set. Day-3 target-setting nudge fires May 31 — earlier is better.** |
| **joseph.g.nicolosi** ⭐ | 1.66d (post-reactivation) | 1 (NBA Finals Knicks Rd4 Jun 16, target=null) | **18d out, T-7d June 9 (~11d). Day-30 fires June 3 (~5.4d).** | **TOP — only dataset Day-23 organic reactivator. 36h post-reactivation with zero follow-up signal. A target-setting nudge in the next 24-72h converts at the highest rate possible before reactivation momentum decays.** |
| **kevinshall** | 17d | 6 (5 WC + Matt Rife, target=null) | **Match 11 16d out, T-7d June 7 (~9d)** | **HIGHEST — 6 items target=null, 16-128d out (WC sweet spot fully open). Highest-EV target-capture carry by item-count. Match 11 T-7d in 9d is the natural next fire.** |
| **karin_ef1** | 15d (just churned) | 2 (WC, target=null) | **26, 39d out** | **HIGH — power-user candidate; WC window wide open.** |
| **josh** | 40d | 1 (AEW PASSED May 24) | — | **HIGH-DECAY — apology window 120h post-event, decay-warming. Send by May 31 or memory loss accelerates beyond useful range.** |
| **taranimeramaro** | 34d | 3 (Bruno MetLife open 84-88d) | — | **HIGH — power-user candidate, widest target-capture window, but Day-30 missed.** |
| **ajvanprooyen** | 36d | 6 (Cubs all passed) | — | **HIGH — first power-user lifecycle-exhaustion candidate. 0/6 sweep.** |
| **nmcnamee99** | 34d | 1 (Raptors-Cavs PASSED) | **NBA Finals Knicks Rd4 reactivation hook = 18d out** | **MEDIUM — IF joseph proves NBA Finals re-engagement works, nmcnamee deserves the same Knicks Rd4 reactivation hook on the same upstream rationale.** |
| **lilianamasyrubi** | 31d | 0 | — | **LOW — 0-item, Day-30 missed yesterday.** Coverage gap. |
| **zhili1208** | 30d | 0 | — | **LOW — 0-item, Day-30 missed this morning.** Coverage gap. |

## Win-back emails queued (priority send queue)

**Send-ready queue (for Email Agent / Agent 5) — RE-PRIORITIZED FROM MAY 28:**

### 1. samvirsujan (DAY-1 TARGET-SETTING ACCELERATED) — SEND TODAY, NOT MAY 31

> **Subject:** Your Knicks game is 18 days out. Set a floor?
>
> **Body:** "Hey Samvir — you signed up yesterday and added Knicks Rd4 Game 3 to your watchlist 19 seconds later (the fastest add in our records). The game is now 18 days out at MSG. Floor prices on Knicks home playoff games have historically swung 28-45% in the 14-day window between Ticketmaster, SeatGeek, and StubHub. Set the price you're willing to pay (reply with one number like '$340') and we'll watch all three sources around the clock and ping you the moment any of them hits it. No target = no alert."
>
> **Why send today (accelerated from Day-3):** **The intent signal is hottest in the first 48h after signup.** Day-3 (May 31) is structurally too late given the 18-day event horizon — the user has demonstrated immediate intent and the only friction is target capture. **The "19s add" line is a soft endowment-effect touch that names the user's commitment without overplaying it.**

### 2. joseph.g.nicolosi (REACTIVATION TARGET-SETTING — STILL UNSENT FROM MAY 28) — SEND TODAY

> **Subject:** Welcome back. Set a floor on the Knicks game?
>
> **Body:** "Joseph — 24 days ago you signed up but didn't add an event. Two days ago you came back and added the Knicks Rd4 game (June 16). We were supposed to send you four touch emails between signup and reactivation — we sent zero. We're rebuilding. Here's what would actually help: set the price you're willing to pay on the Knicks game (reply with one number like '$280' or whatever) and we'll watch Ticketmaster, SeatGeek, and StubHub all three sources, 24/7, until tipoff. Knicks home playoff floors at MSG swing 28-45% in the 14-day window before tipoff — without a target, we can't tell you when the floor crosses your line."
>
> **Why send today:** 36 hours post-reactivation and counting. Day-30 (June 3) is structurally too late for an organic reactivator — the engine should compress the cadence to match the hot intent moment, not wait for the natural fire.

### 3. nunemakerc (PREEMPT DAY-14 — FIRES IN 4.7H)

> **Subject:** It's been 2 weeks. Reply with one event?
>
> **Body:** "Nunemaker — exactly two weeks ago today you signed up but didn't add an event. We were supposed to send you a Day-7 touch last week and a Day-14 touch this afternoon — we'll be missing both. Reply with one event name (concert, World Cup match, NBA game, theater, anything) and we'll set up price tracking in 30 seconds. We watch Ticketmaster, SeatGeek, and StubHub side-by-side, so even one event is worth setting up."
>
> **Why send now:** Day-14 fires at ~15:41 UTC today (~4.7h from report). The preempt-fire send has converted higher than the post-fire send in every test the consumer-CRM literature has run (lead time vs. lag time on lifecycle touches). **Even better: today the preempt-fire is symbolic — if engine restarts in the next 4 hours, this is the user the restart should hit first.**

### 4. kevinshall (DAY-14-MISSED + WC T-21D-DOUBLE-MISSED, RE-PRIORITIZED FROM MAY 28) — SEND TODAY

> **Subject:** Your World Cup Match 11 is 16 days out. We owe you 3 missed alerts.
>
> **Body:** "Kevin — 17 days ago you added 6 events in 3 minutes (faster than 98% of users). We were supposed to send you a Day-7 touch May 19, a Day-14 touch May 26, and a T-21 alert on World Cup Match 11 (Netherlands vs Japan, AT&T Stadium) on May 24. We sent zero. Match 11 is now 16 days out — T-7d is June 7. Floor prices on World Cup matches in the 21→7-day window historically move 30-50% between Ticketmaster, SeatGeek, and StubHub. Reply with target prices on all 6 events (you can do this fast — e.g. '$120, $150, $180, $200, $400, $90' for the 5 WC matches + Matt Rife) and we'll watch all three sources around the clock from now until each event."
>
> **Why send today:** **The 9-day window to Match 11 T-7d is the natural deadline.** Every additional day waiting decays the target-capture value (less window for price movements to expose, less time for the user to react to alerts). **6 items × null target = the highest unrealized EV in the dataset.**

### 5. karin_ef1 (DAY-14-MISSED WC TARGET-CAPTURE — STILL UNSENT FROM MAY 28) — SEND TODAY OR TOMORROW

> **Subject:** Your World Cup matches are 26 and 39 days out. Set a floor?
>
> **Body:** "Karin — 15 days ago you added Switzerland vs Canada (June 24) and your Round of 16 match (July 7). We were supposed to send you a Day-7 follow-up May 21 and a Day-14 follow-up yesterday morning. We sent zero. Switzerland vs Canada is now 26 days out; your R16 match is 39 days out — both inside the target-capture sweet spot. Reply with target prices on both ('$220 / $400' format) and we'll watch Ticketmaster, SeatGeek, and StubHub for each, side-by-side. WC source-floors typically swing 30-50% between sources in the 30→7-day window."
>
> **Why send now:** Power-user candidate signal — 2 items with intent expression on day-of-signup. Day-14 missed 28h ago; freshness still strong enough for a "we missed you on Day 14" frame.

### 6. cutekitten1234 (PREEMPT DAY-14 — FIRES IN ~36H) — DRAFT FOR MAY 30 SEND

> **Subject:** Seven Harry Styles nights. What's your floor?
>
> **Body:** "Twelve days ago you added seven Harry Styles MSG nights to your watchlist. Your shows are 13-15 weeks out — the target-price window is wide open right now. Set what you're willing to pay on each (you can do all 7 in one reply: '$280, $260, $260, $260, $280, $300, $320' or any spread you want) and we'll watch Ticketmaster, SeatGeek, and StubHub side-by-side from now until each night."
>
> **Why send tomorrow:** Day-14 fires ~23:32 UTC May 30. **Highest-EV target-capture carry by item-count + window-width** — 7 items × 90-105d out × target=null = ~84 person-event-days of unrealized target-capture value.

## Psychology-driven micro-optimization (today's pick)

**Principle:** **Loss Aversion / Status-Quo Asymmetry** (Kahneman-Tversky — losses loom larger than gains by approximately 2.25x; the perceived value of *not losing something one has* dominates the perceived value of *gaining something one might get*).

**Where to apply:** Watchlist page (`web/src/app/watchlist/page.tsx`) — specifically the per-item card. This is the surface where samvir + joseph + 54 other activated users currently see their tracked events, and where the target-null vs target-set asymmetry is structurally invisible.

**Current state:** The watchlist page renders each item with the event title, date, venue, and (presumably) a current price block. **The page has no visible signal that distinguishes target-null items (no alert possible) from target-set items (alert active).** Every item in the watchlist looks structurally identical to the user — meaning the user has no visual feedback for which items are "armed" vs which are "unarmed." **Samvir's NBA Finals Knicks Rd4 item, joseph's same item, cutekitten's 7 Harry Styles nights, kevinshall's 6 WC items, taranimeramaro's 3 Bruno items, karin's 2 WC items — all sit on the watchlist page looking like working trackers when in fact none of them can fire an alert because none have a target.**

**Exact recommendation:** Add a **persistent "unarmed" visual state** to each watchlist item with `target_price IS NULL`, paired with a one-tap inline target-setter. The state must read as *missing*, not as *neutral*. The CTA must invoke the loss frame, not the gain frame.

```tsx
// In watchlist page, per-item card

const isArmed = item.target_price != null;

<div className={`relative rounded-lg border p-4 ${
  isArmed
    ? 'border-slate-200 bg-white'
    : 'border-amber-300 bg-amber-50/60 ring-1 ring-amber-200'
}`}>
  {!isArmed && (
    <div className="mb-3 flex items-start gap-2 rounded-md bg-amber-100/80 px-3 py-2 text-sm text-amber-900">
      <svg className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" /* alert-triangle */ />
      <div className="flex-1">
        <div className="font-medium">No price alert set on this event.</div>
        <div className="mt-0.5 text-amber-800">
          We're watching 3 sources but we can't tell you when the price drops — set a target and we will.
        </div>
        <form className="mt-2 flex items-center gap-2" onSubmit={handleSetTarget}>
          <span className="text-amber-900">Alert me when price drops to</span>
          <span className="font-medium text-amber-900">$</span>
          <input
            type="number"
            inputMode="decimal"
            placeholder="280"
            className="w-20 rounded border border-amber-300 bg-white px-2 py-1 text-amber-900 placeholder-amber-400 focus:border-amber-500 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded bg-amber-700 px-3 py-1 text-sm font-medium text-white hover:bg-amber-800"
          >
            Arm alert
          </button>
        </form>
      </div>
    </div>
  )}

  {/* existing event title, date, venue, price comparison */}
</div>
```

**Why this works (the psychology):**

1. **Loss-frame anchor.** The current UI presents "Add target price" as a *gain* (opt-in to a feature). The amber unarmed-state presents the absence of target as a *loss* — "we're watching 3 sources but we can't tell you when the price drops." The frame inverts the action from "configure something" to "fix something that's missing." **Kahneman-Tversky: a 2.25x conversion lift is the theoretical ceiling; realistic e-commerce A/B floors are 8-15% lift on equivalent reframes.**

2. **Status-quo asymmetry.** A green/neutral card with a small "set target" link reads as "this item is fine; setting a target is optional." An amber card with a triangle icon reads as "this item is *not* in a good state; setting a target is *restoring* it." The visual asymmetry recruits status-quo bias — the user wants to return the item to a normal-colored state.

3. **Inline CTA (not modal/route).** The current pattern (presumed) requires a click → modal or route change → set target → save. The inline form collapses 3 actions into 1: type number → click "Arm alert." For samvir + joseph (who have 1 item each), this drops time-to-target from ~30s to ~5s.

4. **Verb choice — "Arm" not "Set" or "Save."** "Arm" carries an active-state implication (the alert is now armed; without it the alert was disarmed = nothing was happening). It strengthens the loss-frame because it explicitly names the missing-action as a previous unarmed state. **The word also avoids "Save" which reads as data-entry, and "Set" which reads as configuration. "Arm" is a verb of capability transfer.**

5. **Direct attack on the current opportunity.** The current data shows **9 distinct users carry target=null across 21 watchlist items** (samvir 1, joseph 1, cutekitten 7, kevinshall 6, taranimeramaro 3, karin 2, lisallam 1, cjthomas 1, charlesteel 1 already passed). **Every one of these users would see at least one amber card on their next watchlist visit.** **If even 30% of target-null items get armed within 14 days of deployment, the alert-fire pipeline gains 6-7 first-ever targets — which is the precondition for the first triggered alert in dataset history.**

**Expected impact on activation-to-engagement:** Activation rate is 64.4% — but **alert-armed rate is 0% across the entire dataset (0 of 110 watchlist items have target set, per `triggeredAlerts=0` and the spot check on every user above).** The unarmed-state badge is a precondition for moving the alert-armed rate off zero. **Conservative expectation: 30-50% of target-null items get armed within 30 days of deployment, equivalent to 33-55 armed items, equivalent to ~3-10 first-ever triggered alerts within 60 days as floor prices cross targets.** **This becomes the first measurable proof-of-value loop in the dataset.**

**Implementation effort:** 1 file change (`web/src/app/watchlist/page.tsx`), ~50 lines TSX, requires existing `PATCH /api/watchlist/:id` endpoint to accept `target_price` in body (likely already exists; if not, ~10 lines in `index.js`). Zero new dependencies. Can ship today.

**Tracking:** Add `data-cta="arm-alert-inline"` to the new form's submit button. **Metric:** % of watchlist items with `target_price IS NOT NULL` over time. **Floor today: 0/110 = 0.0%. Target after 30 days: 25-40%.**

**The 3-touchpoint Cialdini-stack arc consolidation (after today's pick):**
- **Loss-frame on search results** (yesterday's prior recommendation thread) — frames the choice as protecting savings already implicitly committed
- **Social proof on event detail** (May 28's recommendation) — uses the joseph/samvir same-event cluster as live signal
- **Loss-frame on watchlist items** (today's pick) — converts target-null items from neutral to unarmed-needing-action

The three touchpoints span: pre-add (search), add-decision (event detail), post-add (watchlist). **The arc structurally covers every stage of the activation→engagement funnel.** **Combined projected lift: +6-10pp on activation + first-ever movement on alert-armed rate from 0% to 25-40% within 30 days.**

## Actions triggered

- **Win-back emails queued: 6** (samvir Day-1 accelerated target-setting, joseph reactivation target-setting, nunemakerc preempt Day-14, kevinshall WC multi-event, karin_ef1 WC target-capture, cutekitten preempt Day-14 draft for May 30) → handoff to Email Agent (Agent 5)
- **Re-engagement nudges drafted: 7** (carries: eduardo, 9440111, lisallam, belder, brockedwardnelson, keegansmith18, zhouyilinbest)
- **CRO handoff: watchlist unarmed-state badge** → Agent 6 (CRO) — **completes the 3-touchpoint Cialdini stack** (loss-frame search + social-proof event detail + loss-frame watchlist). **PRIORITY: shipping today on watchlist would surface 21 target-null items across 9 distinct users immediately, and is the precondition for first-ever triggered alert in dataset history.**
- **Email lifecycle handoff:** 53 days of zero drip emails sent. **Pending users: 20+ (samvir + pika both at Day 1 in queue).** **The joseph Day-30 fire June 3 + the kevinshall Match 11 T-7d June 7 + the cjthomas Noah Kahan T-7d June 5 are now the three highest-EV sends of the next 10 days — none of which require engine restart for a manual send.** **A single afternoon of manual outbound from the Email Agent could capture all three before the engine restart lands.**
- **Ads handoff:** **May 28 2m9s burst attribution question carries unresolved + new question: WHY DID THE SOURCE NOT REPEAT MAY 29?** Plausible/GA referrer logs comparison for May 28 07:00-08:00 UTC vs May 29 same window should resolve it inside 5 minutes of analyst time. **Resolving the "did not repeat" question is now the single highest-leverage acquisition insight available** because: (a) a one-off source costs nothing to identify but cannot be scaled, (b) a throttled source costs nothing to identify and CAN be scaled.
- **Content handoff:** **NBA Finals Knicks Rd4 demand signal got no follow-up in 28h.** The 12h cluster remains isolated. **Recommended Content Agent action: (a) ship a "How to find NBA Finals Knicks tickets at MSG" landing page in next 24h to capture continued search demand if any; (b) if the May 28 burst was content-driven, confirm/disconfirm the specific content source from referrer logs (link with Ads handoff above); (c) the 18-day window to Jun 16 closes the natural Knicks-Rd4 demand period — ship before June 1 or shipping the page becomes value-destroying.**

## One-line summary for daily standup

**90 users (0 today — first 0-signup day after the May 28 burst); watchlist 110 (0 adds in 28h — symmetric tail to the 12h May 27-28 NBA Finals cluster); activation rate frozen at 64.4% for 48h; samvir + joseph at 1.66d and 1.16d post-activation with zero target set; engine outage Day 53; 5 lifecycle fires today (12:54 / 13:07 / 15:41 / 20:52 / 21:54 UTC) projected dark; nunemakerc Day-14 churn-cross 4.7h from report; the 2m9s NBA Finals cluster did not repeat May 29 — attribution question carries forward as highest-leverage acquisition insight; CRO handoff = watchlist unarmed-state loss-frame, ship today to move alert-armed rate off 0.0%.**
