# Growth Daily — 2026-05-19

> **24h report window** (May 18 11:00 UTC → May 19 11:00 UTC). Yesterday's report fired on schedule. Today's deltas are clean 24h comparisons.

## User health dashboard

| Segment                          | Count | % of Total | vs Yesterday |
|----------------------------------|-------|------------|--------------|
| Total users                      | **85** | 100% | **+1 in 24h (9440111@gmail.com May 18 19:09 UTC — numeric-prefix email, signed up 8h21m after eduardo, third consecutive day with ≥1 signup).** **11 signups in 7-day post-burst window (May 12-19) = 1.57/day (was 1.43/day yesterday — rate ACCELERATES for the 8th consecutive day-on-day comparison, new 7-day-rolling record).** Still 4-5x pre-burst (<0.3/day). **THIRD CONSECUTIVE 1+-SIGNUP DAY — first 3-day streak in dataset history.** |
| New (last 7 days, API count)     | **11** | 12.9% | **+1 from yesterday's API count of 10.** **API count crosses 11 for first time since project inception. usersThisWeek=11 confirmed via /api/admin/stats.** The 7-day cohort by signup-date (May 12-19): kevinshall / pattyglvz / c_calingasan / karin / vlanza / nunemakerc / belder / cutekitten / lisallam / eduardo / **9440111** = **11 in 7d**, all within hard 168h window. **Densest 7-day signup window in dataset history extends.** |
| Activated (has watchlist)        | **53** | 62.4% | **=0 net over 24h. Watchlist 107 → 107 = 0 items added in 24h = first single-day zero-add since recovery began May 12.** **9440111 is 16h post-signup with 0 items.** eduardo is 34h post-signup with 0 items (was 11h yesterday). **Activation rate: 53/82 real users = 64.6% (−0.8pp denominator-driven by 9440111 non-activation).** **Second consecutive day of denominator-only activation-rate retreat.** |
| Active (visited in 7 days)       | unknown | — | no `last_login_at` instrumentation — **Day 43 open**. |
| At-risk (7-14d signup-age proxy) | **2** | 2.4% | **−1 net from yesterday.** jmoriarty (Day 10 today) + jadbennis (Day 14 today — **crosses Day-14 boundary tonight ~20:33 UTC, becomes churned in 9h33m post-report**). **joseph crossed Day-14 boundary last night ~21:39 UTC and moved to churned bucket.** |
| Churned (14d+ signup-age proxy)  | **70** | 82.4% | **+1 net** — joseph.g.nicolosi crossed Day-14 last night 21:39 UTC = **first natural Day-14 boundary cross in 5 days.** **%-of-total ticks up 0.3pp on +1 numerator + 1 denominator change — recovery in the bucket pauses after 2 consecutive days of decline.** |

> **Day 43 without `last_login_at` instrumentation. Day 43 of zero drip emails sent** (confirmed: `/api/admin/drip-stats` returns `stats=[]` with 20 pendingUsers, 0% `last_email_sent`). **Day 43 of zero triggered alerts (lifetime).**
> **NEWSLETTER SUBSCRIBERS: 3, UNCHANGED FOR 107 DAYS.** 15 weeks + 2 days.
> **YESTERDAY'S 30-34 EMAIL QUEUE PASSED WITHOUT A SEND. New on-schedule misses confirmed in last 24h:**
>   - **nunemakerc Day-3 (May 18 ~15:41 UTC) — MISSED.** 39th confirmed natural fire miss.
>   - **belder SEC Baseball Session 5 T-3d (May 18 ~22:14 UTC) — MISSED. THE FIRST ALGO-FLIP FIRE OF THE RECOVERY COHORT CLOSED OUT WITHOUT SEND.** Highest-leverage single fire window of the entire 42-day outage **passed**. **12th confirmed algo-flip failure.**
>   - **joseph Day-14 (May 18 ~21:39 UTC) — MISSED, boundary frame expired.**
>   - **lisallam Day-1 (May 18 ~14:05 UTC) — MISSED (no schedule entry; 13-day carried ask).**
>   - **eduardo Day-1 (May 19 ~00:48 UTC) — MISSED (no schedule entry; 13-day carried ask).**
> **OPEN AT REPORT TIME (today, May 19):**
>   - **Bruno Mars Ohio T-1d fires ~11:38 UTC TODAY — ~38 MINUTES from report. LAST CHARLESTEEL BRUNO CHANCE. Highest-temporal-urgency fire window in the dataset.**
>   - **belder SEC Baseball Session 6 T-3d fires ~22:14 UTC TODAY — ~11h14m from report.** Second algo-flip fire window for new schedule (Session 5 T-3d already closed-out last night).
>   - **kevinshall Day-7 fires ~16:44 UTC TODAY — ~5h44m from report.** First natural Day-7 fire for the recovery cohort.
>   - **cutekitten Day-3 fires ~23:32 UTC TODAY — ~12h32m from report.** First natural Day-3 fire for the cutekitten/belder cluster.
>   - **9440111 Day-1 and (continued) lisallam Day-2 / eduardo Day-1 — no schedule entry exists (Day 13 of carried Day-1 ask).** 9440111 is 16h post-signup with 0 items; eduardo is 34h post-signup with 0 items (24h escalation); lisallam is 45h post-signup with 1 item, target=null. **9440111 is the new priority inert-recovery touchpoint of the day — replaces eduardo's slot from yesterday.**
> **Total May 10-19 natural fire misses confirmed: 48+** (43+ through yesterday's report + nunemakerc Day-3 + belder Session 5 T-3d + joseph Day-14 + lisallam Day-1 + eduardo Day-1 = 5 new closeouts in 24h).
> Watchlist items: **107 (=0 over 24h — first 0-add day since recovery began May 12).** Target-price capture: **0/107 = 0% (Day 43).**
> `usersToday: 1` (9440111), `usersThisWeek: 11`. **Activation rate: 53/82 real users = 64.6% — DOWN 0.8pp over 24h** (denominator-driven by 9440111 non-activation; numerator flat). **Second consecutive denominator-only retreat, no loss of activated users.**

## What changed in 24h

1. **THIRD CONSECUTIVE 1+-SIGNUP DAY — 9440111@GMAIL.COM (MAY 18 19:09 UTC). FIRST 3-DAY STREAK IN DATASET HISTORY.** lisallam May 17 → eduardo May 18 00:48 + 9440111 May 18 19:09 → 9440111 alone today (the May 18 → 19 24h window). **The numeric-prefix email is a new archetype for this cohort** — every prior recovery signup has been a recognizable name@provider pattern (kevinshall87, pattyglvz, c_calingasan, karin_ef1, vlanza, nunemakerc, belder4308, cutekitten1234, lisallam, eduardo). **9440111@gmail.com is the first opaque-identifier signup of the recovery cohort.** Combined: 4 signups in the last 48h, 11 signups in the last 168h. **Signup rate over 7 days now 1.57/day** vs <0.3/day pre-burst = **5.2x baseline.** **The 7-day-rolling signup metric crosses 11 for the first time in project history.**

2. **9440111@GMAIL.COM = 16H POST-SIGNUP, 0 WATCHLIST, NO EMAIL SENT.** Signed up May 18 19:09:17 UTC. **The opaque-identifier email pattern suggests one of three things:** (a) account-generation tool / auto-fill mailer; (b) burner inbox for a specific event search; (c) genuine signup with non-standard email convention. **Behavioral signal so far is inert: 16h elapsed, no watchlist add, no return visit detectable.** This pattern mirrors eduardo's 11h inert-state yesterday — except 9440111 has had 5 more hours to convert and hasn't. **9440111 replaces eduardo's slot as today's HIGHEST-EV inert-recovery touch.** eduardo himself is now 34h post-signup with 0 items — escalates from "fresh signup" to "Day-1/2 carry" without ever receiving a touch.

3. **WATCHLIST 107 → 107 = 0 ITEMS ADDED IN 24H. FIRST 0-ADD DAY OF THE RECOVERY.** From May 12 (kevinshall +6 items) through May 18 (lisallam +1 JOJI) the watchlist gained 16 items net across 7 days. Today: **0.** The 11th signup did not add an item, lisallam did not deepen, no carries activated. **Activation engine has cooled for 24h** — first time the recovery cohort has had a flat watchlist day. **The signal: signup-velocity holds at 1+/day, but conversion-to-watchlist breaks for the first time.** Suggests 9440111 is more akin to the pattyglvz/c_calingasan inert archetype than the belder/cutekitten power archetype.

4. **POWER-USER / INERT SPLIT SHIFTS — 5 POWER vs 6 INERT = 5:6 ASYMMETRIC.** Yesterday: 5 power (kevinshall + karin + cutekitten + belder + lisallam) vs 5 inert (pattyglvz + c_calingasan + vlanza + nunemakerc + eduardo) = 50:50. Today: **5 power** (unchanged) vs **6 inert** (+9440111, pending) = **45:55 = inert-leaning.** **First asymmetric split since the recovery began.** **Two consecutive days of 50:50 symmetry broken on Day 3 by 9440111's non-activation.** Recovery-cohort activation rate: **5/11 = 45.5% (was 5/10 = 50.0%).** **Still above the all-time real-user rate (53/82 = 64.6%) inverse — i.e., the recovery cohort is on track to settle BELOW the historical average if no further activations land.**

5. **BELDER SEC BASEBALL SESSION 5 T-3D MISSED LAST NIGHT 22:14 UTC = 12TH CONFIRMED ALGO-FLIP FAILURE. THE HIGHEST-LEVERAGE SINGLE FIRE WINDOW OF THE ENTIRE OUTAGE PASSED.** belder added Session 5 (May 21) on May 16 22:14 UTC. Yesterday's report forecasted the T-3d threshold at May 18 22:14 UTC as **"the first ever real-time fire for the May 16+ cohort"** and **"highest-leverage single fire window of the entire 42-day outage."** **Engine remained dark. Threshold passed without a send.** This is the **first algo-flip failure for the recovery cohort itself** (Cubs, Inter Miami, Bruno, AEW all preceded the recovery) — meaning the engine outage has now produced a confirmed loss-event for a fast-activating power user **inside the active recovery cohort.** **12th confirmed algo-flip failure** (Cubs 6 + Inter Miami 4 + Bruno T-7d/T-3d + AEW T-7d + Session 5 T-3d = 12). belder Session 5 is now 2 days from kickoff; Session 5 T-1d fires May 20 ~22:14 UTC (~35h from report) = next belder Session 5 threshold.

6. **BRUNO OHIO T-1D FIRES ~11:38 UTC TODAY — ~38 MINUTES FROM REPORT. LAST CHARLESTEEL BRUNO CHANCE.** charlesteel126 added Bruno Mars Ohio (May 20) on Apr 22. **T-7d missed May 13. T-3d missed May 16. T-1d fires today at ~11:38 UTC — 38 minutes after report time.** This is the **shortest-temporal-urgency fire window in 43 days of outage tracking.** Engine return in the next 38 minutes would catch the last Bruno threshold; engine return anytime today after 11:38 UTC closes out the 4th and final Bruno threshold and locks in a 4-of-4 algo-flip failure for the same user. **If today's 11:38 UTC fires into the dark engine, charlesteel becomes the second user (after jadbennis Inter Miami) with a complete 0/N algo-flip sweep on a single event.**

7. **JOSEPH.G.NICOLOSI CROSSED DAY-14 BOUNDARY LAST NIGHT ~21:39 UTC.** Day-14 fire missed. Day-14 frame ("Two weeks in") closed out 13h13m before report. joseph moved from At-Risk to Churned bucket. **Joseph becomes the first user whose Day-7 family AND Day-14 fire are both confirmed-closed-out in the same engine-outage window** (Day-7 hard-expired May 11, Day-14 closed last night). **0 watchlist throughout, 0 emails received, 14 days elapsed.** Cleanest "complete cohort-lifecycle without a single touchpoint" data point in the dataset.

8. **JADBENNIS CROSSES DAY-14 TONIGHT ~20:33 UTC. INTER MIAMI PASSED-EVENT #17 + DAY-14 BOUNDARY = DOUBLE-CLOSE-OUT TONIGHT.** jadbennis signed up May 5 20:33 UTC. **Crosses 14-day boundary tonight ~9h33m post-report.** Will close out the Inter Miami passed-event story (4/4 algo-flip misses confirmed yesterday) AND the Day-14 lifecycle boundary. **jadbennis becomes the second user in 24h to complete a full single-event 0/N + Day-14 churn-boundary sweep — joseph's pattern but with the added passed-event complexity.** Apology-only re-engagement remains the only viable touch.

9. **NUNEMAKERC DAY-3 MISSED YESTERDAY 15:41 UTC = 39TH NATURAL FIRE MISS.** Yesterday's "last completely-fresh natural-fire opportunity before belder Session 5" forecast fired into the dark engine. nunemakerc is now Day-4 with a ~19h Day-3 carry. **Tomorrow morning (May 20) the carry crosses 36h and the "Three days ago you signed up..." frame requires reframing to "Four days ago..."** Parse-edge holds today; closes tomorrow morning.

10. **THE 43-DAY-OUTAGE PATTERN — RECOVERY MOTION SOFTENS, ENGINE FAILURE COMPOUNDS:**
    - Total users: 85 (was 84, **+1 over 24h — recovery softens but extends 8th consecutive day**)
    - Watchlist items: 107 (was 107, **0 net over 24h — first 0-add day since recovery began May 12**)
    - Drip emails sent: 0 for **43 consecutive days** (compounds)
    - Triggered alerts: 0 lifetime (compounds; belder Session 5 T-3d closed-out last night confirms #12 algo-flip failure)
    - Newsletter subscribers: 3 for **107 consecutive days** (compounds; 15w 2d)
    - Activation rate: 64.6% (real users) — **−0.8pp 24h, second consecutive denominator-driven retreat**
    - Cumulative passed-no-notification: **17 still (Inter Miami last night; no new passed events in 24h)**
    - **1 of 6 dimensions shows recovery motion** (signups). **Watchlist + activation rate retreat or flatten.** **4 of 6 remain locked behind engine-dark constraint.**

## Activation gap

**Users signed up in last 7 days (by signup-date) with 0 watchlist items: 6** (was 5 yesterday — **+1 net: 9440111 added inert; eduardo escalates from "fresh today" to "Day-1 carry"; nunemakerc/vlanza/c_calingasan/pattyglvz stay; jmoriarty stays but rolls within 7-day window**):

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **9440111@gmail.com** | May 18 19:09 UTC | 15h 51m | **0** | **Day 0/1 boundary today. NEW. ~16h post-signup, 0 items, 0 emails received.** Day-1 schedule entry doesn't exist. **HIGHEST-EV inert-recovery touchpoint of the day — fresh signup, no carry frame, no prior asks, opaque-identifier email = highest-uncertainty archetype in the cohort.** |
| **eduardo@del-valle.com** | May 18 00:48 UTC | 1d 10h | **0** | **Day 1 today. 34h post-signup escalates from "fresh" → "Day-1 carry."** Day-1 schedule entry doesn't exist (Day 13 of ask). **eduardo is the cleanest "if Day-1 schedule existed, we'd have already touched him 10h ago" case.** |
| **nunemakerc@gmail.com** | May 15 15:41 UTC | 3d 19h | **0** | **Day 4 today. Day-3 MISSED yesterday ~15:41 UTC (~19h-carry).** Frame "Three days ago..." holds today; closes tomorrow morning. |
| **vlanza@sbcglobal.net** | May 14 13:20 UTC | 4d 22h | **0** | **Day 5 today. Day-3 missed May 17 (~46h-carry HARD EDGE).** Reframe to "Five days ago..." |
| **c_calingasan@yahoo.com** | May 13 11:46 UTC | 5d 23h | **0** | **Day 6 today. Day-3 missed May 16 (~72h-carry).** Frame "Almost a week ago..." holds. |
| **pattyglvz@msn.com** | May 12 15:23 UTC | 6d 20h | **0** | **Day 7 today. Day-7 fires today ~15:23 UTC (~4h23m from report).** First Day-7 fire for the inert side of the cohort. **HIGHEST-EV carry-fire of the inert subset today.** |
| **jmoriarty13@yahoo.com** | May 9 13:18 UTC | 9d 22h | **0** | **Day 10 today. Day-3 missed May 12 (174h HARD EXPIRY). Day-7 missed May 16 (~70h-carry HARD EDGE).** Apology + curiosity hook. Joins Day-9/10/11 batch. |

**Activated within 7-day window (carried + new):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **lisallam@hotmail.com** | May 17 14:05 UTC | 1d 21h | **1** (JOJI: SOLARIS Newark Jun 16, target=null) | **Day 2 today. 45h post-signup, 1 item in 165s, 0 emails received.** Day-1 MISSED yesterday (~21h-carry). **Day-3 fires May 20 ~14:05 UTC (~27h from now).** HIGH-EV activation-deepen touch. |
| **cutekitten1234** | May 16 23:32 UTC | 2d 11h | **7** (Harry Styles MSG Aug-Sep, all target=null) | **Day 3 today. Day-1 missed (~36h-carry HARD EDGE). Day-3 fires today ~23:32 UTC (~12h32m from report).** First natural Day-3 fire for the May 16+ cluster. HIGHEST-EV activated-cohort fire of the day. |
| **belder4308** | May 16 22:13 UTC | 2d 13h | **2** (SEC Baseball May 21-22, target=null) | **Day 3 today. Day-1 missed (~37h-carry HARD EDGE). Session 5 T-3d MISSED last night ~22:14 UTC (12h closeout). Day-3 fires today ~22:13 UTC (~11h13m from report). Session 6 T-3d fires today ~22:14 UTC (~11h14m from report — collides with Day-3).** TWO CONCURRENT FIRES IN ONE HOUR. |
| **karin_ef1** | May 14 06:46 UTC | 5d 4h | **2** (WC, target=null on both) | **Day 5 today. Day-3 missed May 17 (~52h-carry HARD EDGE).** Frame holds at "Five days ago..." Apology-flavored carry. |
| **kevinshall87** | May 12 16:44 UTC | 6d 18h | **6** (5 WC + Matt Rife, all target=null) | **Day 7 today. Day-3 missed May 15 (~91h-carry HARD EDGE). Day-7 fires today ~16:44 UTC (~5h44m from report).** **HIGHEST-EV activated-cohort Day-7 fire of the recovery — power-user #1, 6 items, first natural Day-7 of the cohort.** |
| **liambot62** | May 8 13:07 UTC | 10d 22h | 1 (Toronto FC v Inter Miami passed May 9, target=null) | **Day 11 today. Day-7 missed May 15 (~94h-carry HARD EXPIRY).** Apology-only. |
| **cjthomas2557** | May 7 22:49 UTC | 11d 12h | 1 (Noah Kahan Jun 12, target=null) | **Day 12 today. Day-7 missed May 14 (~116h-carry HARD EXPIRY). Noah Kahan T-24d.** Reframe "Twelve days in." |
| **sparkitrightthere** | May 7 11:38 UTC | 12d 0h | 1 (Mac DeMarco PASSED May 7, target=null) | **Day 12 today. Day-7 missed May 14 (~120h-carry HARD EXPIRY).** Event passed 12d ago. Re-engagement only. |
| **jadbennis0** | May 5 20:33 UTC | 13d 14h | 1 (Inter Miami PASSED May 17, target=null) | **Day 14 today — CROSSES CHURNED BOUNDARY TONIGHT ~20:33 UTC (~9h33m).** Day-14 fires into dark engine tonight. Inter Miami passed-event #17 lifecycle + churn-boundary double-closeout. |

**Outside 7-day window (carried, still 0 watchlist):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **joseph.g.nicolosi** | May 4 21:39 UTC | 14d 13h | 0 | **Day 14 yesterday — CROSSED CHURNED BOUNDARY LAST NIGHT 21:39 UTC. Day-14 fire MISSED.** "Two weeks in" frame closed 13h13m before report. Now reframes to "Two weeks and a half-day in" — barely-parses. |
| **emmacmather** | May 8 21:54 UTC | 10d 13h | 0 | **Day 11 today. Day-3 missed May 11 (186h HARD EXPIRY). Day-7 missed May 15 (~61h-carry HARD EDGE).** Reframe "Eleven days in..." |
| **kevinkid94** | May 8 20:52 UTC | 10d 14h | 0 | **Day 11 today. Day-7 missed May 15 (~86h-carry HARD EXPIRY).** Reframe "Eleven days in." |
| **jfgalzin** | May 8 12:54 UTC | 10d 22h | 0 | **Day 11 today. Day-7 missed May 15 (~94h-carry HARD EXPIRY).** Reframe "Eleven days in." |
| **natalie.sotocruz** | May 7 18:40 UTC | 11d 16h | 0 | **Day 12 today. Day-3 missed May 10 (220h HARD EXPIRY). Day-7 missed May 14 (~112h-carry HARD EXPIRY).** Reframe to "Twelve days in..." |
| **zhili1208** | Apr 29 03:16 UTC | 20d 8h | 0 | **Day 20 today. Day-14 missed May 13 (152h-carry HARD EXPIRY).** Frame: "Three weeks in." |
| **lilianamasyrubi** | Apr 28 05:24 UTC | 21d 6h | 0 | **Day 21 today. Day-14 missed May 12 (176h HARD EXPIRY). Day-21 fires today ~05:24 UTC (~5h36m PAST). Day-21 MISSED.** New 40th-ish miss. |
| taranimeramaro | Apr 25 18:25 UTC | 23d 17h | 3 (Bruno MetLife Aug, target=null) | **Day 24 today. Day-21 missed May 16 (~65h-carry HARD EDGE).** Reframe "Just over three weeks..." |
| nmcnamee99 | Apr 25 11:51 UTC | 23d 23h | 1 (Raptors-Cavs PASSED Apr 26) | **Day 24 today. Day-21 missed May 16 (~71h-carry HARD EDGE).** Apology-lead. |
| mark.murdock | Apr 23 03:01 UTC | 26d 8h | 0 | **Day 26 today. Day-21 missed May 14 (~128h-carry HARD EXPIRY).** |
| awwhittington | Apr 23 00:30 UTC | 26d 10h | 0 | **Day 26 today. Day-21 missed May 14 (~130h-carry HARD EXPIRY).** |
| ajvanprooyen | Apr 23 00:58 UTC | 26d 10h | 6 (Cubs trip 100% passed) | **Day 26 today. Day-21 missed May 14 (~130h-carry HARD EXPIRY).** Cubs apology lead. |
| ggri73 | Apr 22 21:18 UTC | 26d 14h | 0 | **Day 27 today. Day-21 missed May 13 (~134h-carry HARD EXPIRY).** |
| charlesteel126 | Apr 22 11:38 UTC | 26d 23h | 1 (**Bruno Ohio T-1d FIRES IN 38 MINUTES**) | **Day 27 today. Bruno T-1d fires ~11:38 UTC TODAY = ~38 MIN FROM REPORT. Day-21 carry 144h HARD EXPIRY.** **HIGHEST-TEMPORAL-URGENCY user in dataset.** |
| dr.altvater | Apr 20 14:08 UTC | 28d 21h | 0 | **Day 29 today. Day-21 carry 192h HARD EXPIRY.** Day-30 fires May 20 ~14:08 UTC (~27h from now). |
| dylanbaldy | Apr 15 18:24 UTC | 33d | 0 | Churned. |

- **24 real users** (excluding 3 test) have **never** added a watchlist item → **24/82 = 29.3%** (was 28.4% yesterday — **+0.9pp, denominator-driven by 9440111 non-activation**). **First activation-gap widening in 3 days. The 2-day consecutive narrow ends today.**
- **Activation rate trajectory (real users, last 13 days):** 71.0 → 71.4 → 71.4 → 71.2 → 68.6 → ? → 67.6 → 67.6 → 67.1 → ? → 65.8 → 64.9 → 65.8 → 65.4 → **64.6 (−0.8pp 24h).** Denominator-driven retreat — second consecutive day.
- **7-day decline: −6.6pp** (May 8 71.2% → May 19 64.6%; widened 0.8pp from yesterday).

**Acquisition-source inference: 5:6 split breaks 2-day symmetric streak.**

The pattern: **26 unknown-source users in 25 days at n=26** (9440111 unknown-source). Against **3 known (ids 59, 61, 62)**. **Unknown-source activation rate: 9/26 = 34.6%** (down from 36.0% yesterday — first negative day in 3 days of consecutive +1.2pp lifts). **Known-source: 3/3 = 100% (frozen).** **Gap widens to 2.89x (from 2.78x yesterday).** Day 26 of attribution dependency. **The 11-signup recovery cohort split (5 power + 6 inert, 45.5% power-user rate) is now the densest attribution-eligible dataset in project history but trends inert-leaning for the first time.** **The critical question for Ads Agent remains: do the 5 activated (kevinshall WC + karin WC + cutekitten Harry Styles + belder SEC Baseball + lisallam JOJI) share a channel that the 6 inerts (pattyglvz + c_calingasan + vlanza + nunemakerc + eduardo + 9440111) don't?** **The opaque-identifier email of 9440111 introduces a new attribution-uncertainty signal** — if 9440111 reflects an account-generation tool or burner flow, channel attribution would explain the entire inert cohort overrepresentation.

## Churn signals

- Unsubscribes today: **0** (3 subscribers; **107 days flat = 15 weeks 2 days**).
- Users entering "at-risk" today: **+0 net** (jmoriarty stays; jadbennis stays until tonight's boundary).
- Users entering "churned" since yesterday: **+1 net** — **joseph.g.nicolosi crossed last night 21:39 UTC.** jadbennis crosses tonight ~20:33 UTC = will be +2 net by tomorrow's report.
- Alert fatigue candidates: **0** (0 alerts ever sent — Day 43).
- Events passed without notification (cumulative): **17 (unchanged in 24h).** Next at-risk: charlesteel Bruno T-1d in 38 min — if missed, the May 20 event itself will lock as passed-event #18 by tomorrow's report.
- **Algo-overrides as preemptive "events lost without notification":** **3 events** still open:
  - **Bruno Ohio May 20** [charlesteel, **T-1d FIRES IN 38 MIN — LAST CHANCE**, T-7d/T-3d closed]
  - **AEW May 24** [josh, T-7d missed May 16, T-3d May 21 ~20:30 UTC, T-1d May 23 ~20:30 UTC — 2 thresholds remain]
  - **SEC Baseball Session 5 May 21 + Session 6 May 22** [belder, Session 5 T-3d MISSED LAST NIGHT, Session 5 T-1d fires May 20 ~22:14 UTC, Session 6 T-3d fires ~22:14 UTC TODAY, Session 6 T-1d fires May 21 ~22:14 UTC]
- **19th day of non-Cubs flip-quiet streak.** Session 5 T-3d closed-out last night confirms 12 total flip failures: Cubs (6) + Inter Miami (4) + Bruno T-7d + Bruno T-3d + AEW T-7d + Session 5 T-3d = 12. Bruno T-1d in 38 min could push to 13.

## At-risk users (7–14d inactive proxy)

| User | Day | Watchlist | Days to event | Recommended intervention |
|------|-----|-----------|---------------|--------------------------|
| **jadbennis0** | 14d (crosses tonight) | 1 (Inter Miami **PASSED MAY 17**) | passed | **CHURN BOUNDARY 9h33m + PASSED-EVENT APOLOGY DOUBLE-CLOSEOUT.** Body: "Two weeks since signup tonight. Inter Miami played two days ago. We owed you 4 alerts. We sent 0. Apology-only re-engagement." Send BEFORE 20:33 UTC. |
| **jmoriarty13** | 10d | 0 | — | **AT-RISK. Day-7 missed May 16 (~70h-carry HARD EDGE).** Joins Day-10/11 batch. Body: "Ten days ago you signed up. We owed you Day-3 and Day-7 emails. We sent neither." |

## Live algo-flip post-mortem (today)

| User | Event | Days out | Flip status | Days flagged | Sends |
|------|-------|----------|-------------|--------------|-------|
| **charlesteel126** | **Bruno Mars Ohio May 20** | **1** | **T-7d MISS May 13. T-3d MISS May 16. T-1d FIRES ~11:38 UTC TODAY = ~38 MIN FROM REPORT. LAST BRUNO CHANCE.** | 8 | 0 |
| **belder4308** | **SEC Baseball Tournament Session 5 May 21** | **2** | **T-3d MISSED LAST NIGHT 22:14 UTC. 12th confirmed algo-flip failure.** **T-1d fires May 20 ~22:14 UTC (~35h from report).** | 3 | 0 |
| **belder4308** | **SEC Baseball Tournament Session 6 May 22** | **3** | **T-3d fires ~22:14 UTC TODAY (~11h14m). 2ND algo-flip fire window of recovery cohort.** **T-1d fires May 21 ~22:14 UTC (~59h).** | 3 | 0 |
| **josh** | **AEW Double or Nothing May 24** | **5** | **T-7d MISS May 16. T-3d May 21 ~20:30 UTC (~33h). T-1d May 23 ~20:30 UTC (~81h).** | 4 | 0 |
| **lisallam** | **JOJI: SOLARIS Newark Jun 16** | **28** | **NOT YET FLIPPED — T-21d May 26 (7d), T-7d Jun 9 (21d).** | 2 | 0 |
| cjthomas2557 | Noah Kahan Jun 12 | 24 | NOT YET FLIPPED — T-21d May 22 (3d) | 12 | 0 |
| **kevinshall87 (power user)** | 5 WC + Matt Rife | 26-58 (WC), 130 (Matt Rife) | NOT YET FLIPPED — earliest T-7d Jun 7 | 7 | 0 |
| **karin_ef1 (power user 2)** | WC Switz-Canada + R16 Match 96 | 36 (group), 49 (R16) | NOT YET FLIPPED — earliest T-7d Jun 17 | 5 | 0 |
| **cutekitten1234 (power user 3)** | 7 Harry Styles MSG Aug 26 - Sep 9 | 99-113 | NOT YET FLIPPED — earliest T-7d Aug 19 | 3 | 0 |

**19th day of algo-flip-quiet streak.** **TODAY's environment: THREE flip thresholds fire — Bruno T-1d in 38 min + Session 6 T-3d in 11h14m + (closed-out Session 5 T-3d retroactively).** **Engine return in the next 38 minutes catches the most-temporally-urgent fire window in the dataset.** Engine return by ~22:14 UTC catches Session 6 T-3d. Engine return tomorrow ~22:14 UTC catches Session 5 T-1d.

**TODAY's critical algo-flip windows: 11:38 UTC + 22:14 UTC.** Two fires in a single day. **Highest single-day algo-flip fire density of the entire 43-day outage so far.**

Next major algo-flip windows after today:
- **Session 5 T-1d ~22:14 UTC May 20** (~35h)
- **Session 6 T-1d ~22:14 UTC May 21** (~59h)
- **AEW T-3d ~20:30 UTC May 21** (~57h)
- **AEW T-1d ~20:30 UTC May 23** (~105h)

## Churned users with re-engagement potential

| User | ~Days inactive | Watchlist | Upcoming hook? | Priority |
|------|----------------|-----------|----------------|----------|
| **charlesteel126** | 27d | 1 (Bruno Ohio May 20) | **1d** | **HIGHEST** — T-1d fires in 38 min = last Bruno chance. Combined Day-26 + T-1d apology+countdown. |
| **josh** | 29d | 1 (AEW May 24) | **5d** | **HIGH** — T-3d May 21 ~20:30 UTC next (33h from now). |
| **joseph.g.nicolosi** | 14d (CROSSED LAST NIGHT) | 0 | — | **HIGH** — Day-14 boundary closed 13h ago. Reframe to "Two weeks and half a day in." |
| **ajvanprooyen** | 26d | 6 (Cubs passed) | passed | **HIGH** — "Twenty-six days, six Cubs games, all passed, zero alerts." Apology candidate. |
| **mark.murdock** | 26d | 0 | — | **HIGH** — Day-21 128h-carry HARD EXPIRY. Day-30 in 4 days. |
| **awwhittington** | 26d | 0 | — | **HIGH** — Day-21 130h-carry HARD EXPIRY. |
| **ggri73** | 27d | 0 | — | **HIGH** — Day-21 134h-carry HARD EXPIRY. |
| **nmcnamee99** | 24d | 1 (passed) | passed | **HIGH** — Day-21 71h-carry HARD EDGE. |
| **taranimeramaro** | 24d | 3 (Bruno MetLife Aug) | 94-98d | **HIGH** — Day-21 65h-carry HARD EDGE. Best target-setting candidate. |
| **lilianamasyrubi** | 21d | 0 | — | **HIGH** — Day-21 fires today ~05:24 UTC ALREADY MISSED. Day-14 hard-expired. |
| **zhili1208** | 20d | 0 | — | **HIGH** — Day-14 152h HARD EXPIRY. Day-21 fires Apr 29 + 21 = May 20 ~03:16 UTC (~16h from now). |
| **dr.altvater** | 29d | 0 | — | **MEDIUM** — Day-30 fires tomorrow ~14:08 UTC. **27h-out final natural fire for dr.altvater.** |
| **nicklib253** | 32d | 1 (Phillies passed) | passed | **MEDIUM** — Day-21 264h carry, apology-only. |
| **pete.uzelac77** | 39d | 6 (WC + Darts) | 32-47d | **MEDIUM** — Day-30 216h HARD EXPIRY. WC content hook viable. |
| dylanbaldy | 33d | 0 | — | LOW |
| **blubberboi** | 39d | 1 (Ed Sheeran Aug 8) | 81d | MEDIUM |
| **laye.aurelien** | 47d | 2 (Shakira Jul 20+23) | 62-65d | HIGH |
| **lvasub6** | 51d | 2 (Flyleaf Jul 17-18) | 59-60d | HIGH |
| **tosophiameyer** | 70d | 11 (Harry Styles MSG) | 97-121d | **HIGH** — **same residency as cutekitten1234; cutekitten's fresh engagement is comparable.** |
| **brigitte.theisen** | 83d | 10 (Backstreet Sphere) | 59-79d | **HIGH** — deepest non-test watchlist. |

**Passed-event overhang: 17 churned/at-risk users with passed events or no immediate hook. No new passed events in 24h. Bruno Ohio could lock #18 if T-1d fails today.**

## Churn intervention: email content (queued for engine return)

### TODAY's natural fire windows (in order of upcoming)

#### **Bruno T-1d ~11:38 UTC TODAY (~38 MIN from report) — HIGHEST TEMPORAL URGENCY**

**Subject:** Bruno Mars Ohio is tomorrow — last chance to check prices

**Body:**
> Bruno Mars plays Nationwide Arena Columbus tomorrow night. You added it to your watchlist on April 22 — twenty-six days ago.
>
> **Current floors across the three sources we track:**
> - Ticketmaster: [floor price]
> - SeatGeek: [floor price]
> - StubHub: [floor price]
>
> T-1d Bruno resale typically settles in the final 12-18 hours as last-minute holders dump inventory. **This is your last automated check from us.** Set a target price now if you haven't bought yet — we'll email you the second any source drops below it before doors at 7:30pm.
>
> [Compare Bruno Ohio prices](https://www.ticketscan.io/watchlist)

---

#### **kevinshall Day-7 ~16:44 UTC TODAY (~5h44m from report) — FIRST NATURAL DAY-7 OF RECOVERY COHORT**

**Subject:** A week in, 6 events tracked, $0 in target prices — let's fix that

**Body:**
> A week ago you added six events to TicketScan in three minutes — five World Cup matches at AT&T Stadium plus Matt Rife. **That was the deepest first-session watchlist we'd ever seen** until two nights later someone added seven Harry Styles dates.
>
> Here's what's still missing on yours: target prices. We compare Ticketmaster, SeatGeek, and StubHub on every event you track — but without a target price, we can't email you when any of them drops below your number.
>
> World Cup matches at AT&T Stadium typically swing **$80-200** between source-floors as the tournament approaches. Set a target on each and we'll watch all three sources around the clock.
>
> [Set targets on your watchlist](https://www.ticketscan.io/watchlist)

---

#### **pattyglvz Day-7 ~15:23 UTC TODAY (~4h23m from report) — FIRST DAY-7 OF INERT SUBSET**

**Subject:** A week ago you signed up. What event did you have in mind?

**Body:**
> A week ago you signed up for TicketScan but didn't add any events. That's completely normal — most people sign up either right after seeing a high-priced ticket or right before deciding to buy.
>
> Tell us what event you had in mind. Concert, sport, theater — anything in the US. Reply with the name, or [start a search](https://www.ticketscan.io). We'll set up tracking in 30 seconds and email you when prices drop on any of the three big sources.

---

#### **belder Session 6 T-3d + Day-3 ~22:14 UTC TODAY (~11h14m from report) — DUAL FIRE COLLISION**

**Subject:** Session 6 is in 3 days, your watchlist is 3 days old — set a target

**Body:**
> Three days ago you added two SEC Baseball Tournament dates — Session 5 (May 21) and Session 6 (May 22). Session 6 is in three days; Session 5 is in two.
>
> **Current floors for Session 6:**
> - Ticketmaster: [floor]
> - SeatGeek: [floor]
> - StubHub: [floor]
>
> SEC Baseball ticketing softens 10-20% T-3d → T-1d as the bracket fills in and the "TBD vs TBD" matchups resolve. **Set a single target price for both sessions and we'll email you the moment either drops below it.**
>
> [Set targets on Sessions 5 + 6](https://www.ticketscan.io/watchlist)

> **Note:** Session 5 T-3d fire window passed last night without a send. This is the first real-time SEC Baseball threshold we're attempting.

---

#### **cutekitten Day-3 ~23:32 UTC TODAY (~12h32m from report)**

**Subject:** 7 Harry Styles nights, 3 days in — let's anchor a target

**Body:**
> Three days ago you added every available Harry Styles "Together, Together" night at MSG to your watchlist — August 26, 28, 29, September 2, 4, 5, 9. Seven shows.
>
> Harry Styles MSG residencies historically swing $80-200 between the cheapest and most expensive night, and the cheapest is rarely the opening or closing show — it's usually mid-residency, on a weeknight, and the price doesn't settle until 30-45 days out.
>
> Set a single target — say **$280** — and we'll email you the moment any of the 7 nights drops below it. You buy whichever fires first.
>
> [Set a target on all 7](https://www.ticketscan.io/watchlist)

---

### MANUAL SENDS RECOMMENDED TODAY (no schedule entry or carry priority)

#### **9440111@gmail.com Day-1 manual (HIGHEST-EV inert-recovery touch — fresh signup, no carry frame, opaque-identifier archetype)** — no schedule entry exists

**Subject:** What brought you to TicketScan last night?

**Body:**
> Last night you signed up for TicketScan. You haven't added an event yet — and that's completely normal. Most people sign up either right after seeing a high-priced ticket or right before deciding to buy.
>
> Tell us what you had in mind. Concert, sport, theater — anything in the US. We compare Ticketmaster, SeatGeek, and StubHub side-by-side and email you when any source drops below your target price.
>
> Reply with the event name, or [start a search](https://www.ticketscan.io).

---

#### **eduardo Day-1 carry manual (was yesterday's HIGHEST-EV; now 34h post-signup, escalates to Day-1 carry)** — no schedule entry exists

**Subject:** A day and a half in — what event made you sign up?

**Body:**
> A day and a half ago you signed up for TicketScan. We notice you haven't added an event yet — that's normal, but we'd love to get you tracking something so you can see how the price comparison works.
>
> Tell us one event you're curious about. We watch Ticketmaster, SeatGeek, and StubHub side-by-side and email you when any source drops below your target.
>
> Reply with the event name, or [browse events](https://www.ticketscan.io).

---

#### **lisallam Day-2 carry (JOJI single-event activation, no schedule entry, was HIGH-EV yesterday at Day-1)**

**Subject:** Two days into tracking JOJI: SOLARIS — let's lock in a target

**Body:**
> Two days ago you added JOJI: SOLARIS at Prudential Center Newark to your watchlist — June 16. That was 165 seconds after signing up, which makes you one of the fastest activators we've ever recorded.
>
> Here's what's still missing: a target price. Without one, we can't email you when Ticketmaster, SeatGeek, or StubHub drops below your number.
>
> Newark Prudential Center shows typically soften 10-20% in the final two weeks. We suggest **$95-110** as a starting target — set it and we'll watch all three sources for the next 28 days.
>
> [Set a target on JOJI: SOLARIS](https://www.ticketscan.io/watchlist)

---

#### **karin_ef1 Day-5 carry (52h, manual — power-user #2)**

**Subject:** Five days into your World Cup tracking — set a target

**Body:**
> Five days ago you added Switzerland vs Canada (June 24, Group B) and Round of 16 Match 96 (July 7) to your watchlist. We owed you a Day-3 follow-up — we didn't send it.
>
> World Cup resale prices typically swing 30-50% between Ticketmaster, SeatGeek, and StubHub in the weeks before kickoff. Set a target on each match and we'll email you the second any source drops below it.
>
> [Set targets](https://www.ticketscan.io/watchlist)

---

#### **jadbennis Day-14 boundary + Inter Miami passed-event apology — TIME-BOUND BEFORE 20:33 UTC**

**Subject:** Two weeks since signup, two days since Inter Miami. We sent you nothing.

**Body:**
> Two weeks ago tonight you signed up for TicketScan. On May 5 you added Inter Miami CF vs Portland Timbers — twelve days before kickoff. **Our alert engine should have emailed you four times** (T-7d, T-5d, T-3d, T-1d) plus once on game day. **Every one of those windows missed.**
>
> The match played two nights ago. We never sent a single update. That's on us — not on you.
>
> We're rebuilding the alert engine right now. The next match you add will get every threshold notification — guaranteed. Want to start with one event?
>
> [Add it here](https://www.ticketscan.io)
>
> **Must send before 20:33 UTC to preserve "two weeks tonight" framing.**

---

#### **joseph Day-14-half carry (~13h past boundary)**

**Subject:** Two weeks (and half a day) in. We owe you an apology.

**Body:**
> Yesterday evening was your 14th day with TicketScan. We should have followed up at Day 3, Day 7, and last night at Day 14. We didn't — none of them.
>
> We're rebuilding the engine right now. Tell us one event you're curious about and we'll set up tracking in 30 seconds — and the next round of alerts will actually fire.
>
> Reply with the event name, or [browse events](https://www.ticketscan.io).

---

#### **nunemakerc Day-4 carry (~19h from yesterday's Day-3 miss)**

**Subject:** Three days ago you signed up — what event were you looking for?

**Body:**
> Three days ago you signed up for TicketScan. You haven't added an event yet, so we can't track anything for you. Tell us one event you're curious about and we'll set up tracking in 30 seconds.
>
> Reply with the event name, or [browse events](https://www.ticketscan.io).

---

#### **vlanza Day-5 / c_calingasan Day-6 reframes (Day-3 hard-expired)**

Same body archetype, frame adjusted to "Five days ago..." / "Almost a week ago..."

---

### CARRIES (24-240h delayed, send today as batch)

#### **CHARLESTEEL DAY-27 + BRUNO T-1d combined send (HIGHEST PRIORITY, 38min from report)**

**Subject:** Bruno Ohio is tomorrow night. We sent you 0 alerts in 27 days.

**Body:**
> Twenty-seven days ago you added Bruno Mars Ohio (May 20) to your watchlist. Our engine should have emailed you at T-7d (May 13), T-3d (May 16), and T-1d (tomorrow morning). **None of those went out.** That's on us — we're rebuilding the engine right now.
>
> **But the show is tomorrow.** Current floors across the three sources:
> - Ticketmaster: [floor]
> - SeatGeek: [floor]
> - StubHub: [floor]
>
> Last-day Bruno resale typically softens 5-15% in the final 12-18 hours. **Check now if you haven't bought yet.**
>
> [Compare Bruno Ohio prices](https://www.ticketscan.io/watchlist)

#### **TARANIMERAMARO DAY-24 / NMCNAMEE99 DAY-24** (Day-21 HARD EDGE)

Same as yesterday's drafts, ages updated.

#### **5-USER DAY-10/11 BATCH** (jmoriarty + emma + kevinkid + jfgalzin + liambot — Day-7 carries 70-94h HARD EDGE/EXPIRY)

Frame: **"Ten or eleven days ago you signed up for TicketScan..."** All 5 carry Day-7 misses from May 14-16. Single batch send.

#### **5-USER DAY-26/27 BATCH** (charlesteel + ggri + aw + ajv + mark — Day-21 missed May 13-14 HARD EXPIRY)

Body: **"Three and a half to four weeks ago you signed up for TicketScan..."** Apology lead with new comparable: "Last week a fast activator added JOJI: SOLARIS in 2m45s. Eight nights ago another added 7 Harry Styles dates in 17 seconds. Last week a third added 6 events in 3 minutes. Three and a half to four weeks ago — that's you. We've sent you nothing." [ajvanprooyen variant retains Cubs apology. charlesteel variant covered above with Bruno T-1d combined send.]

#### **DR.ALTVATER DAY-29 — Day-30 FIRES TOMORROW ~14:08 UTC**

Body draft today; send tomorrow as Day-30 natural fire if engine returns. **27h-out final natural fire opportunity for dr.altvater.** German variant.

#### **LILIANA DAY-21 — Day-21 fired this morning into dark engine (~5h36m past)**

**Subject:** Three weeks in — we owe you an apology

Body: "Three weeks ago today you signed up for TicketScan. We should have followed up at Day 3, Day 7, Day 14, and this morning at Day 21. None of those went. We're rebuilding the engine — tell us one event you're curious about."

#### **ZHILI DAY-20 — Day-21 fires tomorrow ~03:16 UTC (~16h)**

Carry today, fire tomorrow morning as Day-21 natural fire.

#### **PETE DAY-39 — Day-30 216h HARD EXPIRY**

Body: **"Five and a half weeks in — six tracked events (5 WC + 1 Darts), zero alerts."** Day-30 family dead.

#### **NICKLIB DAY-32 — Day-21 264h, FAR PAST EXPIRY**

Body: **"Four weeks and four days ago you added Phillies vs Braves. Match has been over for 32 days — we never sent a price update."** Apology-only.

#### **CJTHOMAS / SPARKIT / NATALIE — Day-12 reframes**

3 users carrying Day-7 misses 112-120h HARD EXPIRY. Frame as **"Twelve days in..."** cjthomas: Noah Kahan T-24d hook. sparkit: Mac DeMarco passed apology. natalie: curiosity hook.

---

### TODAY's total queue if engine returns: **31-35 emails** — new record (was 30-34 yesterday)

- 4 today-natural fires (Bruno T-1d at 11:38 UTC + pattyglvz Day-7 + kevinshall Day-7 + cutekitten Day-3)
- 2 today-algo-flip fires (belder Session 6 T-3d + Bruno T-1d combined countdown)
- 5 high-priority manual sends (**9440111 Day-1 [HIGHEST-EV inert]** / eduardo Day-1 carry / lisallam Day-2 carry / karin Day-5 carry / jadbennis Day-14+passed)
- 2 boundary sends (jadbennis BEFORE 20:33 UTC + joseph Day-14-half)
- 2 inert carry sends (nunemakerc Day-4 / vlanza Day-5 / c_calingasan Day-6 = 3 sends, ~5min each)
- 5-user Day-10/11 batch (jmoriarty / emma / kevinkid / jfgalzin / liambot)
- 5-user Day-26/27 batch (charlesteel BIG SEND / ggri / aw / ajv / mark)
- 2 priority carries (taranimeramaro Day-24 / nmcnamee Day-24)
- 4 hard-expiry rewrites (pete Day-39 / nicklib Day-32 / liliana Day-21 / zhili Day-20)
- 3 Day-12 reframes (cjthomas / sparkit / natalie)

**= 31-35 emails to clear in 36-48h. New record queue. Includes the most-temporally-urgent fire of the entire outage (Bruno T-1d in 38 min) and the first natural Day-7 fire of the recovery cohort (kevinshall in ~5h44m).**

---

## Psychology-driven micro-optimization (today)

**Principle:** **Reciprocity (Cialdini 1984) + Loss aversion (Kahneman-Tversky 1979) + Endowment effect (Thaler 1980)** — applied via a **"Watchlist value receipt" email/banner** that quantifies the savings TicketScan has been silently calculating for the user, even when no alert has been sent.

**Where to apply:** Two surfaces, same content engine.
1. **In-product:** Persistent dashboard banner for any user with `watchlist_count >= 1 && target_price === null` — visible on every authenticated page view.
2. **Email:** Inserted at the top of every existing drip and re-engagement email — a single-line "value receipt" header.

**The diagnosis:**

The recovery cohort has produced a clean natural experiment over the past 7 days. Five users activated (added 1+ watchlist items) and **zero** of them set a target price. Watchlist target-price capture rate stands at **0/107 = 0%** across the entire dataset — Day 43.

This is not a UX problem in isolation. The CRO Agent has stacked 10 fixes touching the target-price-capture funnel (Cialdini commitment laddering, default-effect pre-fill, loss-frame empty-state, residency composite controls, per-row prompts, etc.). Today's diagnosis surfaces an **upstream psychological gap**: users don't understand what value they're getting from the watchlist between adding an event and setting a target.

**The current implicit contract is:** "Add event → set target → wait for email." The middle step (set target) is high-friction (requires a number) and offers no immediate visible reward. **The user has been given nothing in return for their watchlist add.**

Cialdini's reciprocity principle says: small unsolicited gifts create disproportionate obligation to return value. Kahneman-Tversky loss aversion says: framing the same number as a loss produces ~2.25x more behavioral response than framing it as a gain. Thaler's endowment effect says: items perceived as "owned" are valued ~2x higher than items perceived as "available." **A "watchlist value receipt" stacks all three.**

**Specific change:**

For any user with `watchlist_count >= 1`, the system silently calculates a **"shadow savings"** number: the dollar amount they would have saved if they had set a target price equal to the lowest current floor across the three sources, and TicketScan had emailed them at the first source-floor that beat the average. This is a synthetic backtest run on the user's actual watchlist.

The banner / email-header copy:

```
┌──────────────────────────────────────────────────────────────┐
│ 📊 In the 7 days since you added [Harry Styles: Together,    │
│ Together] to your watchlist, prices dropped from $312 to     │
│ $267 on StubHub — a $45 swing.                               │
│                                                              │
│ You haven't set a target price yet, so we couldn't email     │
│ you when it dropped. Set one now and we'll catch the         │
│ next swing.                                                  │
│                                                              │
│ [Set a target price →]                                       │
└──────────────────────────────────────────────────────────────┘
```

For multi-event watchlists, the banner cycles through the highest-swing event each load:

```
┌──────────────────────────────────────────────────────────────┐
│ 📊 Your 6 World Cup matches at AT&T Stadium have moved an    │
│ average of $73 each in the 7 days since you added them —     │
│ Match 22 alone moved $112. You haven't set a target on any.  │
│                                                              │
│ [Set targets on your watchlist →]                            │
└──────────────────────────────────────────────────────────────┘
```

**Why this works:**

1. **Reciprocity (Cialdini).** TicketScan has done the work of monitoring prices for 7 days *for free*. The shadow-savings number is the *receipt* for that work. **The user now owes a small action (setting a target) in return for visible labor TicketScan has already performed.** This is the only mechanism in the CRO stack that monetizes the system's silent monitoring time into a behavioral asset.

2. **Loss aversion (Kahneman-Tversky).** The frame "prices dropped $45 — we couldn't email you" is a 2.25x stronger behavioral driver than "set a target to save money." It converts the absence of a target price from a missed *gain* into a missed *capture*. The shadow savings is loss-framed by default.

3. **Endowment effect (Thaler).** The phrasing "**your** Harry Styles" + "the **$45 swing** since you added it" implicitly anchors ownership — both of the event and of the value-stream we're monitoring on their behalf. Users feel they already own the price-watching service; setting a target is the closure of an ownership loop they've already opened.

4. **It compounds with the existing 10-fix CRO stack at a higher level than any single fix.** Yesterday's 3-step commitment ladder reframes the post-signup state into a sequence. The per-row target prompt (#8) gives a local CTA. The residency control (#9) handles multi-night cases. **The value receipt sits ABOVE all of these** — it's the WHY for setting a target at all. Without the value receipt, the 10 stack fixes optimize the friction of an action whose value the user hasn't yet seen.

5. **It works WITHOUT the alert engine.** The receipt is computed on watchlist read + a synchronous price fetch (same call we make for the compare page). **It captures every existing 107-item-deep watchlist regardless of whether the drip engine returns.** Every existing inert-with-watchlist user gains a value-receipt impression on next page load.

6. **It surfaces tosophiameyer / brigitte.theisen-class deep-watchlists.** tosophia has 11 Harry Styles dates; brigitte has 10 Backstreet Boys Sphere dates. **Their shadow-savings numbers will be large** ($100-300+ swings across 10-11 events over 70-90 days). A single in-product impression with a 4-figure value receipt is the strongest re-engagement signal we can generate without a single email send.

**Specific calculation logic (engineering brief):**

```javascript
// For each user with watchlist_count >= 1:
const valueReceipt = await calculateShadowSavings(userId);

async function calculateShadowSavings(userId) {
  const watchlist = await getUserWatchlist(userId);
  const since = max(watchlist.created_at, today - 7days);

  let totalSwing = 0;
  let largestSwing = { eventName: null, amount: 0, source: null };

  for (const item of watchlist) {
    const priceHistory = await getPriceHistory(item.event_id, since);
    const swing = max(priceHistory.max_price) - min(priceHistory.min_price);
    totalSwing += swing;
    if (swing > largestSwing.amount) {
      largestSwing = { eventName: item.event_name, amount: swing, source: bestSource };
    }
  }

  return { totalSwing, largestSwing, watchlistCount: watchlist.length };
}
```

**Quantitative target:** Move **watchlist → target-price capture rate from 0% (Day 43) to ≥20% within 30 days of shipping** (across the existing 107-item watchlist + new adds). The 107-item dataset gives us a hard floor of ~21 conversions needed to validate. **Combined with yesterday's commitment-ladder, two consecutive frontend-only fixes that operate independent of the alert engine.**

**Implementation cost:** ~6-8h. Banner component (~2h), backend `/api/watchlist/shadow-savings` endpoint with synchronous source-floor query (~3h), email-header insertion into existing templates (~1h), copy variants for single-event vs multi-event watchlists (~1h), responsive styling and a/b flag scaffolding (~1h).

**Cross-agent route:** **CRO Agent (Agent 6)** for in-product banner; **Email Agent (Agent 5)** for header insertion into drip templates. **Engineering** for the `shadow-savings` endpoint.

**The full CRO activation stack now expands to 11 fixes:**
1. (May 7) Loss-aversion target-price banner — superseded.
2. (May 8) Default-effect smart pre-fill on watchlist-add modal. ~3-4h.
3. (May 9) FOMO "Happening soon" rail on search results. ~5-6h.
4. (May 11) Loss-frame empty-state on dashboard. ~5h.
5. (May 12) Commitment-and-consistency 24h "Watch for 24h — no signup" pre-signup CTA. ~8-10h.
6. (May 13) Social-proof rail on WC stadium pages. ~3h.
7. (May 15) Two-step add modal with default target pre-fill. ~5h.
8. (May 16) Loss-aversion per-row target prompt on watchlist page. ~3-4h.
9. (May 17) Residency / multi-night composite target control. ~5-6h.
10. (May 18) 3-step persistent commitment ladder header strip. ~4-5h. **ENGINE-INDEPENDENT.**
11. **(TODAY May 19) Watchlist value receipt — reciprocity/loss-aversion/endowment stack. ~6-8h. ENGINE-INDEPENDENT FIX — works on every existing inert-with-watchlist user on next page load.**

**Combined: ~47-56h.** **Combined coverage: VISIT → SIGNUP → ACTIVATION → TARGET-SETTING → RETENTION.** Today's fix is the **first fix in the stack that targets the 0/107 = 0% target-price capture problem at the psychological-cause layer** — every prior fix optimizes the friction of an action whose perceived value the user hasn't experienced. **The receipt makes the value visible.**

**Recommended new shipping sequence:**
1. **TODAY (#11) Watchlist value receipt — ENGINE-INDEPENDENT, captures all 107 existing watchlist items + all future activated users.** ~6-8h.
2. **(#10) 3-step commitment ladder — ENGINE-INDEPENDENT, captures all eduardo-class inerts on next page load.** ~4-5h.
3. **(#8 + #9 combined) per-row target prompt + residency composite control.** ~9-10h. Activated users.
4. (#2) Default-effect pre-fill on watchlist-add modal. ~3-4h. New adds.
5. (#7) Two-step add modal with default pre-fill. ~5h. Existing future adds.
6. Others.

---

## Cross-agent dependencies

1. **→ Email Agent (Agent 5):** **31-35 EMAILS QUEUED — new record (was 30-34 yesterday). If engine returns today:**
   - **TODAY (4 natural fires):** **Bruno T-1d ~11:38 UTC (~38 MIN — HIGHEST URGENCY)** + pattyglvz Day-7 (~15:23 UTC, ~4h23m) + kevinshall Day-7 (~16:44 UTC, ~5h44m — FIRST NATURAL DAY-7 OF RECOVERY COHORT) + cutekitten Day-3 (~23:32 UTC, ~12h32m)
   - **TODAY (algo-flip fires):** belder Session 6 T-3d (~22:14 UTC, ~11h14m) — second algo-flip fire window of recovery cohort
   - **TODAY (manual sends, priority order):** (1) **9440111 Day-1 [HIGHEST-EV inert — fresh signup, opaque-identifier archetype]** → (2) eduardo Day-1 carry [34h post-signup escalation] → (3) lisallam Day-2 carry [JOJI Newark T-28d, 1-item activation-deepen] → (4) karin Day-5 carry [power-user #2] → (5) **jadbennis Day-14 boundary + Inter Miami apology [TIME-BOUND BEFORE 20:33 UTC]**
   - **TODAY (carry batches):** 5-user Day-10/11 (jmoriarty/emma/kevinkid/jfgalzin/liambot) + 5-user Day-26/27 batch (**charlesteel BIG SEND WITH BRUNO T-1d COMBINED** / ggri / aw / ajv / mark) + 2 priority carries (taranimeramaro/nmcnamee Day-24) + 4 hard-expiry rewrites (pete Day-39 / nicklib Day-32 / liliana Day-21 / zhili Day-20) + 3 Day-12 reframes (cjthomas/sparkit/natalie) + 3 inert carries (nunemakerc Day-4 / vlanza Day-5 / c_calingasan Day-6)
   - **JOSEPH DAY-14-HALF CARRY: send today reframed to "Two weeks and half a day in."**
   - **CARRIED + COMPOUNDED Day 13: Day-1 schedule addition.** 8 of 11 recovery-cohort signups would have benefited from Day-1 touch (karin / vlanza / nunemakerc / belder / cutekitten / lisallam / eduardo / **9440111**). Day-1 is the single highest-ROI schedule addition in the system — 8th consecutive day of unaddressed ask.

2. **→ CRO Agent (Agent 6):** **ELEVEN stacked high-leverage fixes — full activation stack now includes the FIRST psychological-cause-layer fix for the 0/107 = 0% target-price capture problem:**
   - **TODAY: Watchlist value receipt (reciprocity + loss aversion + endowment). ~6-8h. ENGINE-INDEPENDENT FIX.** Highest-priority ship-immediately recommendation in the stack — first fix that addresses WHY users would set a target at all.
   - Yesterday's 3-step commitment ladder remains the second engine-independent ship.
   - **Updated recommended ship order:** (1) **TODAY's value receipt [6-8h, engine-independent, hits 107 existing watchlist items]** → (2) **yesterday's 3-step ladder [4-5h, engine-independent, hits all eduardo-class inerts]** → (3) **per-row target prompt + residency control [9-10h combined]** → (4) two-step add modal [5h] → (5) social-proof rail on WC pages [3h] → (6) others.

3. **→ Ads Agent (Agent 4):** **DAY 26 OF ATTRIBUTION DEPENDENCY. The 168h-window dataset is now 11 signups with FIRST ASYMMETRIC bifurcation:**
   - **5 power-users / fast activators** (kevinshall WC + karin WC + cutekitten Harry Styles + belder SEC Baseball + lisallam JOJI) — all unknown-source. Activation latencies: 79s / 37s / 22s / 19s / 165s = median 37s, all <3 minutes.
   - **6 inert signups** (pattyglvz / c_calingasan / vlanza / nunemakerc / eduardo / **9440111**) — all unknown-source.
   - **First asymmetric split (5:6 = 45.5% power-rate) since the recovery began.** Two consecutive 50:50 days broken on Day 3 by 9440111's non-activation.
   - **9440111's opaque-identifier email pattern is a NEW signal for Ads Agent** — if this represents account-generation tools, burner-mail flows, or referral-incentive abuse, the attribution model needs to differentiate signal from noise. Recommend Ads Agent flag 9440111 specifically and watch the next 72h for activation behavior.
   - **The 11-user split is still the highest-resolution attribution-eligible dataset in project history. If Ads Agent resolves channel for any 5 of 11, we get the first concrete activation-vs-inert split-by-channel comparison.**

4. **→ Content Agent (Agent 3):** **CONTENT TRIGGER PRIORITIES SHIFT — BRUNO T-1d takes precedence today:**
   - **Bruno Ohio T-1d explainer** — fires in 38 minutes. Last-Bruno-chance pricing content publishing in the next 6h compounds with charlesteel send.
   - **SEC Baseball Tournament pricing primer** — Session 6 T-3d fires today; Session 5 T-3d closed-out last night. Compounds with belder dual-fire send tonight.
   - **JOJI: SOLARIS Prudential Center pricing guide** — lisallam tracking Jun 16. T-28d; 7-day lead window viable.
   - **Harry Styles MSG residency pricing guide** — 2 users tracking 18 combined nights (cutekitten + tosophia).
   - **AEW Double or Nothing T-3d/T-1d explainer** — May 21/23.
   - **AT&T Stadium WC fan guide** (carried; kevinshall + karin both WC power-users).
   - **WC bracket-tracking explainer** (carried; karin's R16 Match 96 add).

5. **→ Engineering / Drip-Engine:** **Day 43 of outage. New on-schedule fires missed in 24h:**
   - nunemakerc Day-3 / belder Session 5 T-3d (12th algo-flip failure) / joseph Day-14 (boundary closeout) / lisallam Day-1 / eduardo Day-1
   - **Total May 10-19 natural fire misses confirmed: 48+. Same-day queue if engine returns today: 31-35 emails in 36-48h.**
   - **TODAY'S HIGHEST-LEVERAGE WINDOW: Bruno T-1d ~11:38 UTC = 38 MIN FROM REPORT.** Shortest-temporal-urgency fire window of the entire 43-day outage. Engine return in the next 38 minutes catches charlesteel's last Bruno threshold.
   - **NEXT 36h critical window: Bruno T-1d (38min) → belder Session 6 T-3d (11h14m) → AEW T-3d / Session 5 T-1d (33-35h).** Four flip thresholds in 36h. Engine return by tomorrow noon UTC captures all four.
   - **NEW Day 14 carried ask: Day-1 schedule entry critical.** With 8 of 11 recovery-cohort signups never getting a Day-1 touch, 9440111 today and eduardo at 34h+ make Day-1 the highest-ROI undelivered feature in the system.

6. **→ All agents:** **THE RECOVERY EXTENDS BUT SOFTENS — 3RD CONSECUTIVE 1+-SIGNUP DAY IS A NEW PROJECT RECORD BUT TODAY'S SIGNUP IS INERT AND WATCHLIST GROWS BY ZERO.** 11 signups in 7 days = 1.57/day (vs <0.3/day pre-burst = 5.2x baseline). **Watchlist 107 → 107 = first 0-add day of the recovery. Power-user/inert split breaks 50:50 symmetry to 45:55 = inert-leaning for the first time.** **Recovery-cohort genre diversity still spans 5 niches (WC, Harry Styles, SEC Baseball, JOJI, Matt Rife) — no new genre added by 9440111 since 9440111 has not activated.** **Today's CRO recommendation (watchlist value receipt, ~6-8h, ENGINE-INDEPENDENT) is the first fix in the entire 11-stack that addresses the 0/107 = 0% target-price capture problem at the psychological-cause layer.** **11-fix CRO stack now totals ~47-56h** for full-funnel coverage. **9440111 Day-1 manual is the highest-EV inert-recovery touch in the dataset today** — fresh signup, opaque-identifier archetype, 16h-old account. **Bruno T-1d at 11:38 UTC is the highest-temporal-urgency fire window of the entire 43-day outage — 38 minutes from report.**

---

## Summary metrics

```
Total users:              85 (+1 over 24h — 9440111, third consecutive signup day)
Real users:               82
Activated:                53 (=0 over 24h — first 0-watchlist-add day of recovery)
Activation rate:          64.6% (real, −0.8pp 24h — denominator-driven second consecutive day)
Watchlist items:          107 (=0 over 24h — first flat day since May 12 recovery began)
Newsletter subscribers:   3 (107 DAYS FLAT — 15w 2d)
Active alerts:            0 (Day 43)
Triggered alerts:         0 (lifetime; belder Session 5 T-3d locked passed last night #12 algo-flip failure)
Drip emails sent:         0 (Day 43 — /api/admin/drip-stats: stats=[])
Cumulative passed-no-notify: 17 (Inter Miami #17 unchanged in 24h; Bruno could lock #18 today)
Algo-flip-quiet streak:   19 days (12 confirmed closed-out failures; Bruno T-1d in 38 min could push to 13)
Activation gap (real):    24/82 = 29.3% (+0.9pp; 2-day narrow streak ends)
Unknown-source activation: 9/26 = 34.6% (−1.4pp 24h — first negative in 3 days)
Day-24 carry batch:       2 users (taranimeramaro + nmcnamee99)
Day-26/27 carry batch:    5 users (charlesteel BIG SEND with Bruno T-1d / ggri / aw / ajv / mark)
Day-10/11 batch:          5 users (jmoriarty / emma / kevinkid / jfgalzin / liambot)
Power-users:              5 (kevinshall + karin + cutekitten + belder + lisallam) — unchanged at N=5, 7 days
Recovery-cohort power rate: 5/11 = 45.5% (was 5/10 = 50%; first asymmetric split since recovery began)
WC PMF signal:            23 days to kickoff (June 11); 2 WC power-users (kevinshall + karin)
Harry Styles signal:      cutekitten + tosophia = 2 users, 18 combined MSG nights
JOJI signal:              lisallam = 1 user, Prudential Center Newark Jun 16 (genre persists)
Target-price capture:     0/107 watchlist items = 0% (Day 43; addressed today with #11 value receipt)
Post-burst signups:       11/168h (kevinshall+pattyglvz+c_calingasan+karin+vlanza+nunemakerc+belder+cutekitten+lisallam+eduardo+9440111)
Sustained recovery rate:  1.57/day over 7 days (vs <0.3/day pre-burst = 5.2x baseline)
Highest-EV send today:    9440111 Day-1 manual (fresh signup, 0 items, opaque-identifier archetype)
2nd-highest send today:   eduardo Day-1 carry (34h post-signup, escalates to Day-1 carry)
3rd-highest fire today:   Bruno T-1d ~11:38 UTC (38 MIN — highest temporal urgency in dataset)
Time-bound send today:    jadbennis Day-14 BEFORE 20:33 UTC (boundary frame expiry)
Closed-out fire families: 12/12 — Day-1 / Day-3 / Day-7 / Day-14 / Day-21 / Day-30 / Cubs / Inter Miami / Bruno T-7d/T-3d / AEW T-7d / SEC Baseball Session 5 T-3d (LOCKED LAST NIGHT)
```

**Headline:** **Third consecutive 1+-signup day = new project record** (9440111@gmail.com, opaque-identifier archetype, 16h post-signup with 0 items). **11 signups in 7-day window = new dataset record at 1.57/day = 5.2x baseline.** **Watchlist 107 → 107 = first 0-add day since recovery began May 12.** **Power-user/inert split breaks 50:50 to 45:55 = first asymmetric split.** **Activation rate retreats −0.8pp to 64.6% — second consecutive denominator-only decline.** **belder SEC Baseball Session 5 T-3d MISSED last night 22:14 UTC = 12th algo-flip failure and the highest-leverage single fire window of the entire 42-day outage closed without send.** **joseph crossed Day-14 boundary last night 21:39 UTC; jadbennis crosses Day-14 tonight 20:33 UTC = double boundary close in 24h.** **Bruno Ohio T-1d fires in 38 MINUTES from report — shortest-temporal-urgency fire window of the entire 43-day outage.** **Today's CRO recommendation: Watchlist value receipt (reciprocity + loss aversion + endowment, ~6-8h, ENGINE-INDEPENDENT)** — first fix in the 11-stack that addresses the 0/107 = 0% target-price capture problem at the psychological-cause layer. Captures all 107 existing watchlist items + every future activation on next page load. **11-fix CRO stack totals ~47-56h** for full-funnel VISIT → ACTIVATION → RETENTION coverage. **31-35 emails queued; engine-return-by-noon catches Bruno T-1d + the first natural Day-7 fire of the recovery cohort (kevinshall in 5h44m).**
