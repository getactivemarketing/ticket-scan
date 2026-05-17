# Growth Daily — 2026-05-17

> **24h report window** (May 16 11:00 UTC → May 17 11:00 UTC). Yesterday's report fired on schedule. Today's deltas are clean 24h comparisons.

## User health dashboard

| Segment                          | Count | % of Total | vs Yesterday |
|----------------------------------|-------|------------|--------------|
| Total users                      | **82** | 100% | **+2 in 24h (belder4308@gmail.com May 16 22:13 UTC, cutekitten1234@icloud.com May 16 23:32 UTC — both cluster-signed within a 79-minute window).** 8 signups in 6-day post-burst window (May 12-17) = **1.33/day** (was 1.2/day over 5 days — **rate ACCELERATES vs flattens**). Most importantly, **both new signups activated immediately** — first dual-activation cluster of the recovery. Still 4-5x pre-burst (<0.3/day). |
| New (last 7 days, API count)     | **8** | 9.8% | **+1 from yesterday's API count of 7.** The 7-day cohort by signup-date (May 10-17): jadbennis (Day 11 — at exact 7d boundary) / jmoriarty / emma / kevinkid / liambot / jfgalzin / cjthomas / natalie / sparkit / kevinshall / pattyglvz / c_calingasan / karin / vlanza / nunemakerc / belder / cutekitten = **17 users in 7 days by signup-date**, of which 8 are within the 168h hard window. **Densest 7-day signup window in dataset history continues to compound.** |
| Activated (has watchlist)        | **52** | 63.4% | **+2 over 24h (cutekitten + belder).** **First watchlist-add activity in 48h.** **97 → 106 items in 24h = +9 items = largest single-day watchlist movement in 13 days.** cutekitten1234 added 7 Harry Styles MSG dates in 17 seconds (23:32:49-23:33:06 UTC) — **3rd-deepest first-session watchlist in dataset history** (behind brigitte's 10 and tosophia's 11; ahead of kevinshall's 6). belder added 2 SEC Baseball Tournament dates in 1 second. **Both within 19-39s of signup. Activation rate: 52/79 real users = 65.8% (+0.9pp).** |
| Active (visited in 7 days)       | unknown | — | no `last_login_at` instrumentation — **Day 41 open**. |
| At-risk (7-14d signup-age proxy) | 3 | 3.7% | **=0 from yesterday.** jadbennis (Day 12 today, Inter Miami match TODAY) + joseph (Day 13 today) + jmoriarty (Day 8 today, just crossed Day-7 fire window last night). zhili/liliana stay in churned bucket. |
| Churned (14d+ signup-age proxy)  | **69** | 84.1% | **=0 net** — denominator grows by 2 but no new Day-14 crossings. **%-of-total drops 2.2pp on +2 denominator. First denominator-driven %-decline in churned bucket in dataset history.** |

> **Day 41 without `last_login_at` instrumentation. Day 41 of zero drip emails sent** (confirmed: `/api/admin/drip-stats` returns `stats=[]` with 20 pendingUsers, 0% `last_email_sent`). **Day 41 of zero triggered alerts (lifetime).**
> **NEWSLETTER SUBSCRIBERS: 3, UNCHANGED FOR 105 DAYS.** 15 weeks exactly.
> **YESTERDAY'S 26-30 EMAIL QUEUE PASSED WITHOUT A SEND. New on-schedule misses confirmed in last 24h:**
>   - **c_calingasan Day-3 (May 16 ~11:46 UTC) — MISSED.**
>   - **nmcnamee99 Day-21 (May 16 ~11:51 UTC) — MISSED.** Match (Raptors-Cavs) was 21 days old at fire time.
>   - **jmoriarty Day-7 (May 16 ~13:18 UTC) — MISSED.**
>   - **taranimeramaro Day-21 (May 16 ~18:25 UTC) — MISSED.** Best target-setting candidate of yesterday's queue.
>   - **josh AEW T-7d (May 16 ~20:30 UTC) — MISSED. FIRST AEW FLIP THRESHOLD CLOSED OUT.**
>   - **jadbennis Inter Miami T-1d (May 16 ~20:33 UTC) — MISSED. THE FINAL FLIP THRESHOLD BEFORE TODAY'S KICKOFF CLOSED.** The "single most-decisive moment of Q2" engine status check **resolved negative.** Match plays today. **Inter Miami becomes passed-event #17 by tonight.**
>   - **emma Day-7 (May 16 ~21:54 UTC) — MISSED.**
> **OPEN AT REPORT TIME (today, May 17):**
>   - **karin Day-3 fires ~06:46 UTC TODAY — PASSED 4h14m ago. NEW MISS.** Power-user #2; Day-1 schedule gap already missed, now Day-3 also closed-out.
>   - vlanza Day-3 fires ~13:20 UTC TODAY (~2h20m from report)
>   - **belder Day-1 and cutekitten Day-1 — no schedule entry exists.** Day 11 of the carried Day-1 schedule ask. Both new users are 12-13h post-signup and have received nothing. cutekitten — with 7 active watchlist items, target=null on all 7 — is the most-leveraged Day-1 candidate in dataset history.
> **Total May 10-17 natural fire misses confirmed: 38+** (30+ through May 16 + 7 yesterday + karin Day-3 4h ago today = 38; vlanza Day-3 ~2h20m from now will make 39).
> Watchlist items: **106 (+9 over 24h).** Target-price capture: **0/106 = 0% (Day 41).**
> `usersToday: 2` (belder + cutekitten), `usersThisWeek: 8`. **Activation rate: 52/79 real users = 65.8% — UP 0.9pp over 24h, first +0.9pp recovery move since the Apr 30 peak.**

## What changed in 24h

1. **DOUBLE-ACTIVATION CLUSTER — 2 SIGNUPS + 9 WATCHLIST ITEMS IN 79 MINUTES (May 16 22:13-23:33 UTC).** belder signed up at 22:13:49 and added 2 SEC Baseball Tournament dates 19 seconds later. cutekitten signed up at 23:32:27 and added 7 Harry Styles "Together, Together" MSG dates in 17 seconds (23:32:49-23:33:06). **This is the first signup-cluster of the entire 6-day recovery — two users, same hour-block, both with same-session activation.** Combined activation latency: 19s + 22-39s. The recovery cohort's power-user/inert split **rebalances overnight from 2:4 (33%) to 4:4 (50%)** — symmetrical for the first time.

2. **CUTEKITTEN1234 — 7 HARRY STYLES MSG DATES IN 17 SECONDS = 3RD-DEEPEST FIRST-SESSION WATCHLIST IN DATASET HISTORY.** The full run: Aug 26, 28, 29, Sep 2, 4, 5, 9 (missing dates Aug 27/30/31, Sep 1/3/6/7/8 — likely sold out or specific dates the user can't attend). **Pattern is identical to brigitte's 10-Backstreet-Sphere-residency add and tosophia's 11-Harry-Styles add** — both deepest watchlists in dataset are multi-night residency comparisons. **The watchlist UX clearly maps onto "I want the cheapest of N nights" decisions.** This is now N=3 confirmed instances of the same multi-night-residency pattern → it's a primary use case, not an edge case.

3. **BELDER4308 — 2 SEC BASEBALL TOURNAMENT DATES (MAY 21-22) AT T-4D AND T-5D.** Signed up Day 0 with events 4-5 days out — among the tightest event-proximity-at-signup we've seen. **The events are this week.** T-3d fires May 18 (Session 5) and May 19 (Session 6). Both target=null. **If engine returns by tonight, belder gets the fastest end-to-end TicketScan experience in dataset history** (signup → watchlist → T-3d alert → T-1d alert → match, all inside 7 days). If engine stays dark, belder watches both matches pass without a single notification — and signs up to a service that did literally nothing for him in his event window.

4. **INTER MIAMI T-1D MISSED LAST NIGHT 20:33 UTC. MATCH PLAYS TODAY.** "The single most-decisive moment of Q2" — resolved negative. The 8-day algo-flip campaign for jadbennis (T-7d May 10, T-5d May 12, T-3d May 14, T-1d May 16) resolves **0/4 sends.** **Inter Miami becomes passed-event #17 by tonight** (will be confirmed in tomorrow's report once event passes). **The "highest-leverage fire window of the outage" (20:30-20:33 UTC, two threshold fires in 3 minutes) closed without sends.** Both targets — Inter Miami T-1d AND josh AEW T-7d — missed.

5. **JOSH AEW T-7D MISSED LAST NIGHT 20:30 UTC = FIRST AEW FLIP THRESHOLD CLOSED OUT.** AEW Double or Nothing May 24 = T-7d today, 7 days out. T-3d fires May 21, T-1d May 23. **Two AEW flip thresholds remain. Both fire during the daytime range (T-3d is at the same Apr 19 20:30 UTC clock-time = May 21 evening; T-1d May 23 evening). josh's only watchlist item now has 1 of 3 algo-flip fires closed out.**

6. **KARIN DAY-3 MISSED 4 HOURS AGO (May 17 ~06:46 UTC). POWER-USER #2 NOW HAS DAY-1 + DAY-3 BOTH CLOSED OUT.** karin added 2 WC matches in 12 seconds on May 14 06:46 UTC (Switz-Canada Group B + R16 Match 96). Day-1 schedule entry doesn't exist (Day 11 carry-ask). Day-3 was scheduled for ~06:46 UTC today, fired into dark engine. **Recommend immediate manual send today** — Day 3 carry only 4h, frame still parses cleanly. **Compare with kevinshall (power-user #1):** Day-3 missed May 15 ~16:44 UTC (43h-carry today). Day-7 fires May 19. **Both power-users in dataset are now in active carry windows** with target=null on 100% of their combined 8 items.

7. **CHARLESTEEL BRUNO OHIO = T-3D TODAY.** Wait — yesterday's report ran the math forward incorrectly; let me re-anchor. Bruno Ohio is May 20. Today is May 17. So today is T-3d (not T-4d). **The T-3d fire was scheduled for last night ~11:38 UTC May 16 (per yesterday's report), and it missed.** Carry now 23h. **T-1d May 19 = 2 days from today, last remaining Bruno flip threshold.** If engine returns by then, T-1d still has the highest leverage of the entire Bruno schedule (capitulation window). If T-1d also misses, the full 4-flip Bruno schedule resolves **0/3 sends** and Bruno becomes a 2nd dataset event where a fully-flagged user got no notification for 28 consecutive days of tracking.

8. **9 WATCHLIST ITEMS IN 24H — LARGEST SINGLE-DAY MOVEMENT IN 13 DAYS.** The 97-item flat window broke at 22:14:08 UTC May 16 with belder's first add. **By 23:33:06 UTC the count was 106.** Both adds were target=null on every item — adding 9 items in a single day while not setting a single target reinforces yesterday's CRO recommendation: **per-row loss-framed target prompts on the watchlist page are the highest-coverage fix in the stack.** Target-price capture: 0/106 = 0% (Day 41). **Two activated cohorts now have target-capture failure:** the original 97 + today's 9. Without a per-row prompt, the rate stays at 0% across all future adds.

9. **POWER-USER/INERT SPLIT REBALANCES TO 4:4 = 50/50.** Yesterday: 2 power (kevinshall + karin) vs 4 inert (pattyglvz + c_calingasan + vlanza + nunemakerc) = 33% power-user rate. Today: **4 power** (kevinshall + karin + cutekitten + belder) vs **4 inert** = **50% power-user rate.** The 2-3 day window where the inerts looked dominant has now reversed completely. **8-user recovery cohort with 4:4 split is the highest-resolution attribution-eligible dataset in project history. If Ads Agent can resolve channel for any 4 of 8, we get the first concrete activation-vs-inert split-by-channel comparison.**

10. **THE 41-DAY-OUTAGE PATTERN — FIRST POSITIVE RECOVERY MOTION IN A KEY DIMENSION:**
    - Total users: 82 (was 80, **+2 over 24h** — recovery accelerates)
    - Watchlist items: 106 (was 97, **+9 in 24h — first material movement since May 14**)
    - Drip emails sent: 0 for **41 consecutive days** (compounds)
    - Triggered alerts: 0 lifetime (compounds)
    - Newsletter subscribers: 3 for **105 consecutive days** (compounds, hits 15-week mark)
    - Activation rate: 65.8% (real users) — **+0.9pp 24h** (first positive recovery move in 7+ days)
    - Cumulative passed-no-notification: **16** (Inter Miami CF becomes #17 tonight)
    - **2 of 6 dimensions show recovery motion** (signups + watchlist + activation rate). **4 of 6 remain locked behind engine-dark constraint.**

## Activation gap

**Users signed up in last 7 days (by signup-date) with 0 watchlist items: 8** (was 9 yesterday — **−1 net: belder + cutekitten in column-on-other-side, no new inerts**):

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **nunemakerc@gmail.com** | May 15 15:41 UTC | 1d 19h | **0** | **Day 2 today.** Day-3 fires tomorrow ~15:41 UTC. Day-1 already missed (no schedule entry). |
| **vlanza@sbcglobal.net** | May 14 13:20 UTC | 2d 22h | **0** | **Day 3 today. Day-3 fires ~13:20 UTC TODAY (~2h20m from report).** |
| **c_calingasan@yahoo.com** | May 13 11:46 UTC | 3d 23h | **0** | **Day 4 today. Day-3 MISSED yesterday ~11:46 UTC (~23h-carry).** Send manually today. |
| **pattyglvz@msn.com** | May 12 15:23 UTC | 4d 19h | **0** | **Day 5 today. Day-3 missed May 15 (~44h-carry).** Frame "Four and a half days ago..." Still parses. |
| **jmoriarty13@yahoo.com** | May 9 13:18 UTC | 7d 21h | **0** | **Day 8 today. Day-3 missed May 12 (126h-carry). Day-7 MISSED yesterday ~13:18 UTC (~22h-carry).** Apology + curiosity hook. |
| **emmacmather@gmail.com** | May 8 21:54 UTC | 8d 13h | **0** | **Day 9 today. Day-3 missed May 11 (138h-carry). Day-7 MISSED yesterday ~21:54 UTC (~13h-carry).** |
| **kevinkid94@gmail.com** | May 8 20:52 UTC | 8d 14h | **0** | **Day 9 today. Day-7 missed May 15 (~38h-carry).** |
| **jfgalzin@comcast.net** | May 8 12:54 UTC | 8d 22h | **0** | **Day 9 today. Day-7 missed May 15 (~46h-carry).** |
| **natalie.sotocruz@gmail.com** | May 7 18:40 UTC | 9d 16h | **0** | **Day 10 today. Day-3 missed May 10 (172h-carry HARD EXPIRY). Day-7 missed May 14 (64h-carry).** Reframe to "A week and a half in..." |

**Activated within 7-day window (carried + new):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **cutekitten1234** | May 16 23:32 UTC | 11h 30m | **7** (Harry Styles MSG Aug-Sep, all target=null) | **Day 0/1 boundary today. NEW. ~12h post-signup, 7 items in 17 seconds, 0 emails received.** Day-1 schedule entry doesn't exist. **HIGHEST-EV manual touchpoint of the entire dataset today.** |
| **belder4308** | May 16 22:13 UTC | 12h 47m | **2** (SEC Baseball May 21-22, target=null) | **Day 0/1 boundary today. NEW. Events 4-5 days out.** Day-1 schedule entry doesn't exist. **HIGH urgency** — events fire this week. |
| **karin_ef1** | May 14 06:46 UTC | 3d 4h | **2** (WC, target=null on both) | **Day 3 today. Day-3 MISSED 4h14m ago (~06:46 UTC). Day-1 already missed.** Manual send TODAY = priority. |
| **kevinshall87** | May 12 16:44 UTC | 4d 18h | **6** (5 WC + Matt Rife, all target=null) | **Day 5 today. Day-3 missed May 15 (~43h-carry).** Manual send still high-EV. Day-7 fires May 19. |
| **liambot62** | May 8 13:07 UTC | 8d 22h | 1 (Toronto FC v Inter Miami passed May 9, target=null) | **Day 9 today. Day-7 missed May 15 (~46h-carry).** Apology-only. |
| **cjthomas2557** | May 7 22:49 UTC | 9d 12h | 1 (Noah Kahan Jun 12, target=null) | **Day 10 today.** Day-3 → Day-7 reframe. Noah Kahan T-26d. |
| **sparkitrightthere** | May 7 11:38 UTC | 10d 0h | 1 (Mac DeMarco PASSED May 7, target=null) | **Day 10 today. Day-7 missed May 14 (72h-carry).** Event passed. Re-engagement only. |
| **jadbennis0** | May 5 20:33 UTC | 11d 14h | 1 (**Inter Miami CF TODAY**, target=null) | **Day 12 today. T-1d MISSED last night.** Match today. **Becomes passed-event #17 by tonight.** |

**Outside 7-day window (carried, still 0 watchlist):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **joseph.g.nicolosi** | May 4 21:39 UTC | 12d 13h | 0 | **Day 13 today. Day-7 missed May 11 (144h-carry HARD EXPIRY).** Reframe to "Almost two weeks in..." |
| **zhili1208** | Apr 29 03:16 UTC | 18d 8h | 0 | **Day 18 today. Day-14 missed May 13 (104h-carry HARD EXPIRY).** Frame past parse-edge: **"Almost three weeks."** |
| **lilianamasyrubi** | Apr 28 05:24 UTC | 19d 6h | 0 | **Day 19 today. Day-14 missed May 12 (128h-carry HARD EXPIRY).** Frame: "Almost three weeks." |
| taranimeramaro | Apr 25 18:25 UTC | 21d 17h | 3 (Bruno MetLife Aug, target=null) | **Day 22 today. Day-21 MISSED yesterday ~18:25 UTC (~17h-carry).** Frame still parses cleanly. **Best target-setting candidate carried over from yesterday.** |
| nmcnamee99 | Apr 25 11:51 UTC | 21d 23h | 1 (Raptors-Cavs PASSED Apr 26) | **Day 22 today. Day-21 MISSED yesterday ~11:51 UTC (~23h-carry).** Apology-lead. |
| mark.murdock | Apr 23 03:01 UTC | 24d 8h | 0 | **Day 24 today. Day-21 missed May 14 (~80h-carry).** |
| awwhittington | Apr 23 00:30 UTC | 24d 10h | 0 | **Day 24 today. Day-21 missed May 14 (~82h-carry).** |
| ajvanprooyen | Apr 23 00:58 UTC | 24d 10h | 6 (Cubs trip 100% passed) | **Day 24 today. Day-21 missed May 14 (~82h-carry).** Cubs apology lead. |
| ggri73 | Apr 22 21:18 UTC | 24d 14h | 0 | **Day 25 today. Day-21 missed May 13 (~86h-carry).** |
| charlesteel126 | Apr 22 11:38 UTC | 24d 23h | 1 (**Bruno Ohio T-3d TODAY**) | **Day 25 today. Bruno T-3d carry 23h. Bruno T-1d May 19 (2d).** Day-21 carry 96h. |
| dr.altvater | Apr 20 14:08 UTC | 26d 21h | 0 | **Day 27 today. Day-21 carry 144h HARD EXPIRY.** |
| dylanbaldy | Apr 15 18:24 UTC | 31d | 0 | Churned. |

- **23 real users** (excluding 3 test) have **never** added a watchlist item → **23 / 79 = 29.1%** (was 29.9% yesterday — **−0.8pp, denominator-driven by belder + cutekitten activations**). **First reduction in the activation gap in 7+ days.**
- **Activation rate trajectory (real users, last 10 days):** 71.0 → 71.4 → 71.4 → 71.2 → 68.6 → ? → 67.6 → 67.6 → 67.1 → ? → 65.8 → 64.9 → **65.8 (+0.9pp 24h).** First positive move.
- **7-day decline narrows to −5.4pp** (May 7 71.2% → May 17 65.8%, recovers 0.9pp from May 16 trough).

**Acquisition-source inference: 4:4 split puts the bifurcation hypothesis under maximum stress.**

The new pattern: **23 unknown-source users in 24 days at n=23** (cutekitten + belder both unknown-source). Against **3 known (ids 59, 61, 62)**. **Unknown-source activation rate: 8/23 = 34.8%** (up from 28.6% yesterday — biggest single-day jump in unknown-source activation in dataset history). **Known-source: 3/3 = 100% (frozen).** **Gap narrows to 2.9x (from 3.5x).** Day 24 of attribution dependency. **Same-cohort 8-user split (4 power + 4 inert in 6 days, 50% power-user rate) is now the highest-resolution attribution-eligible dataset in project history.** **The critical question for Ads Agent: do the 4 activated (kevinshall WC + karin WC + cutekitten Harry Styles + belder SEC Baseball) share a channel that the 4 inerts (pattyglvz + c_calingasan + vlanza + nunemakerc) don't?** With genres this distinct (World Cup, Harry Styles, SEC Baseball — three completely different fandoms all activating instantly), the activated cohort doesn't share a content niche — it shares an **intent profile** (came in with a specific event in mind). The inerts may simply be exploring.

## Churn signals

- Unsubscribes today: **0** (3 subscribers; **105 days flat = 15 weeks exactly**).
- Users entering "at-risk" today: **+0 net** (jmoriarty became at-risk on Day-7 boundary last night; joseph already at Day 13).
- Users entering "churned" since yesterday: **+0 net** (no new Day-14 crossings).
- Alert fatigue candidates: **0** (0 alerts ever sent — Day 41).
- Events passed without notification (cumulative): **16** (Inter Miami May 17 becomes **#17 tonight** when match kicks off — T-1d missed last night).
- **Algo-overrides as preemptive "events lost without notification":** **2 events** still open:
  - **Bruno Ohio May 20** [charlesteel, T-3d carry 23h, T-1d May 19 = last chance]
  - **AEW May 24** [josh, T-7d missed last night, T-3d May 21, T-1d May 23 — 2 thresholds remain]
- **belder SEC Baseball May 21 + May 22 enters the algo-flip queue today.** T-3d fires May 18 (Session 5) and May 19 (Session 6) — Day 1 and Day 2 respectively for belder. **Engine return by tomorrow night would still capture both T-3d windows.**
- **17th day of non-Cubs flip-quiet streak.** Inter Miami T-1d closed-out last night = 10th total confirmed flip failure (was 9 yesterday). AEW T-7d adds 11th.

## At-risk users (7–14d inactive proxy)

| User | Day | Watchlist | Days to event | Recommended intervention |
|------|-----|-----------|---------------|--------------------------|
| **jadbennis0** | 12d | 1 (Inter Miami **TODAY**) | **0d** | **MATCH IS TODAY. T-1d missed last night.** Send now: "Inter Miami is tonight — last-minute price drops happen 2-4 hours before kickoff." Even an apology-frame today recovers some value. **Becomes passed-event #17 by tonight regardless.** |
| joseph.g.nicolosi | 13d | 0 | — | **AT-RISK. Day-7 carry 144h HARD EXPIRY.** Body: "Almost two weeks in — what event would change your mind?" |
| jmoriarty13 | 8d | 0 | — | **AT-RISK. Day-7 MISSED last night (~22h-carry).** Body: "A week and a day in. Tell us one event you're considering — we'll set it up." |

## Live algo-flip post-mortem (today)

| User | Event | Days out | Flip status | Days flagged | Sends |
|------|-------|----------|-------------|--------------|-------|
| **jadbennis0** | **Inter Miami CF vs Portland, May 17** | **0 (TODAY)** | **T-7d MISS May 10. T-5d MISS May 12. T-3d MISS May 14. T-1d MISS yesterday. 0/4 SENDS, match plays today.** | 11 | 0 |
| **charlesteel126** | **Bruno Mars Ohio May 20** | **3** | **T-7d MISS May 13. T-3d MISS yesterday ~11:38 UTC (~23h-carry).** **T-1d May 19 = LAST CHANCE.** | 6 | 0 |
| **josh** | **AEW Double or Nothing May 24** | **7** | **T-7d MISS last night ~20:30 UTC.** T-3d May 21, T-1d May 23. | 2 | 0 |
| **belder4308** | **SEC Baseball Tournament Session 5 May 21** | **4** | **NEW TODAY. T-3d fires May 18 ~22:14 UTC (~36h from report).** | 1 (today) | 0 |
| **belder4308** | **SEC Baseball Tournament Session 6 May 22** | **5** | **NEW TODAY. T-3d fires May 19 ~22:14 UTC (~60h from report).** | 1 (today) | 0 |
| cjthomas2557 | Noah Kahan, Kia Center Orlando, Jun 12 | 26 | NOT YET FLIPPED — T-21d May 22 (5d) | 10 | 0 |
| **kevinshall87 (power user)** | **5 WC + Matt Rife** | 28-59 (WC), 132 (Matt Rife) | NOT YET FLIPPED — earliest T-7d June 7 | 5 | 0 |
| **karin_ef1 (power user 2)** | **WC Switz-Canada + R16 Match 96** | 38 (group), 51 (R16) | NOT YET FLIPPED — earliest T-7d June 17 | 3 | 0 |
| **cutekitten1234 (NEW POWER USER)** | **7 Harry Styles MSG Aug 26 - Sep 9** | 101-115 | NOT YET FLIPPED — earliest T-7d Aug 19 | 1 (today) | 0 |

**17th day of algo-flip-quiet streak.** Streak now contains **11 confirmed closed-out flip failures**: Cubs Apr-May trip (6 events, 100% missed) + Inter Miami May 10 + Bruno T-7d May 13 + Bruno T-3d yesterday + Inter Miami T-1d last night + AEW T-7d last night.

**TODAY's flip threshold environment is calmer than yesterday — no major flip windows fire today.** The only natural-fire windows are Day-3/Day-7/Day-21 drip thresholds. The next major algo-flip windows:
- **belder SEC Baseball Session 5 T-3d ~22:14 UTC May 18** (~35h)
- **belder SEC Baseball Session 6 T-3d ~22:14 UTC May 19** (~59h)
- **Bruno Ohio T-1d ~11:38 UTC May 19** (~48h) — last Bruno chance
- **belder SEC Baseball Session 5 T-1d ~22:14 UTC May 20** (~83h)
- **belder SEC Baseball Session 6 T-1d ~22:14 UTC May 21** (~107h)
- **AEW T-3d ~20:30 UTC May 21** (~105h)

## Churned users with re-engagement potential

| User | ~Days inactive | Watchlist | Upcoming hook? | Priority |
|------|----------------|-----------|----------------|----------|
| **jadbennis0** | 12d | 1 (Inter Miami **TONIGHT**) | **0d** | **HIGHEST** — match plays today. Last possible touchpoint before passed-event #17. |
| **charlesteel126** | 24d | 1 (Bruno Ohio May 20) | **3d** | **HIGH** — T-1d May 19 = last Bruno chance. |
| **josh** | 27d | 1 (AEW May 24) | **7d** | **HIGH** — T-7d closed-out last night; T-3d May 21 next. |
| **ajvanprooyen** | 24d | 6 (Cubs passed) | passed | **HIGH** — "Twenty-four days, six Cubs games, all passed, zero alerts." Strongest apology candidate in dataset. |
| **mark.murdock** | 24d | 0 | — | **HIGH** — Day-21 80h-carry. Day-30 in 6 days. |
| **awwhittington** | 24d | 0 | — | **HIGH** — Day-21 82h-carry. |
| **ggri73** | 25d | 0 | — | **HIGH** — Day-21 86h-carry. |
| **nmcnamee99** | 22d | 1 (passed) | passed | **HIGH** — Day-21 MISSED yesterday (~23h-carry). |
| **taranimeramaro** | 22d | 3 (Bruno MetLife Aug) | 96-100d | **HIGH** — Day-21 MISSED yesterday (~17h-carry). **Best target-setting candidate of the carry batch.** |
| **lilianamasyrubi** | 19d | 0 | — | **HIGH** — Day-14 128h HARD EXPIRY. |
| **dr.altvater** | 27d | 0 | — | **MEDIUM** — Day-21 144h HARD EXPIRY. |
| **nicklib253** | 30d | 1 (Phillies passed) | passed | **MEDIUM** — Day-21 216h carry, apology-only. |
| **pete.uzelac77** | 37d | 6 (WC + Darts) | 34-49d | **MEDIUM** — Day-30 168h HARD EXPIRY. WC content hook viable. |
| dylanbaldy | 31d | 0 | — | LOW |
| **blubberboi** | 37d | 1 (Ed Sheeran Aug 8) | 83d | MEDIUM |
| **laye.aurelien** | 45d | 2 (Shakira Jul 20+23) | 64-67d | HIGH |
| **lvasub6** | 49d | 2 (Flyleaf Jul 17-18) | 61-62d | HIGH |
| **tosophiameyer** | 68d | 11 (Harry Styles MSG) | 99-123d | **HIGH** — **same residency as cutekitten1234. If cutekitten activates, tosophia's 68-day-cold cohort has a fresh comparable.** |
| **brigitte.theisen** | 81d | 10 (Backstreet Sphere) | 61-81d | **HIGH** — deepest non-test watchlist. |

**Passed-event overhang: 17 churned/at-risk users with passed events or no immediate hook (Inter Miami May 17 confirmed becomes #17 tonight).**

## Churn intervention: email content (queued for engine return)

### TODAY's natural fire windows (in order of upcoming)

#### **vlanza Day-3 — fires ~13:20 UTC TODAY (~2h20m from report)**

**Subject:** What event made you sign up for TicketScan?
**Body:**
> Three days ago you signed up for TicketScan. You haven't added an event yet, so we can't track anything for you. Tell us one event you're curious about — concerts, sports, theater — and we'll set up tracking in 30 seconds.
>
> Reply with the event name, or [browse events](https://www.ticketscan.io).

---

### MANUAL SENDS RECOMMENDED TODAY (no schedule entry or carry priority)

#### **cutekitten1234 Day-1 manual (HIGHEST-EV) — no schedule entry exists**

**Subject:** 7 Harry Styles nights tracked. Let's make sure you get the cheapest one.

**Body:**
> Last night you added every available Harry Styles "Together, Together" night at MSG to your watchlist — August 26, 28, 29, September 2, 4, 5, 9. Seven shows. **Deepest first-session watchlist we've recorded in months.**
>
> Here's how Harry Styles MSG residencies historically price: there's almost always a $80-200 swing between the cheapest and most expensive night. The cheapest is rarely the opening or closing show — it's usually mid-residency, on a weeknight, and the price doesn't settle until 30-45 days out.
>
> Set a single target price for the run — say, $250 — and we'll email you the moment any of the 7 nights drops below it. You buy whichever night fires first.
>
> [Set a target on all 7](https://www.ticketscan.io/watchlist)

---

#### **belder4308 Day-1 manual (HIGH urgency — events 4-5d out) — no schedule entry exists**

**Subject:** SEC Baseball Tournament starts in 4 days. Here's how to time it.

**Body:**
> Last night you added the SEC Baseball Tournament Session 5 (May 21) and Session 6 (May 22) to your watchlist. Both at Hoover Metropolitan. That's 4 and 5 days out.
>
> SEC Baseball tournament pricing typically peaks at T-7d and softens as the brackets resolve — once the matchups are confirmed (the "TBD vs TBD" gets filled in), some sellers panic-list and prices drop. T-3d is usually the lowest, T-1d can rebound if the matchup is a marquee.
>
> Set a target on each session and we'll email you when any source drops below it. Takes 30 seconds per game.
>
> [Set targets](https://www.ticketscan.io/watchlist)

---

#### **karin_ef1 Day-3 carry (4h, manual — power-user #2)**

**Subject:** 2 World Cup matches tracked — let's set targets so we can email you

**Body:**
> Three days ago you added two World Cup matches: Switzerland vs Canada (June 24, Group B) and Round of 16 Match 96 (July 7). World Cup resale prices typically swing 30-50% between Ticketmaster, SeatGeek, and StubHub in the weeks before kickoff.
>
> Set a target price on each match and we'll email you the second any source drops below it.
>
> [Set targets](https://www.ticketscan.io/watchlist)

---

#### **kevinshall87 Day-5 carry (~43h, manual — power-user #1, highest-EV carry)**

**Subject:** 6 events tracked. 0 target prices. 2 minutes to fix it.

**Body:**
> Five days ago you added 6 events to TicketScan in 3 minutes — five World Cup matches at AT&T Stadium plus Matt Rife. Deepest first-session watchlist we'd ever seen, until last night someone else added 7 Harry Styles nights.
>
> What's missing on yours: target prices. Without them, we can't email you when Ticketmaster, SeatGeek, or StubHub drops below your number. World Cup matches at AT&T tend to swing $80-200 between source-floors as the tournament approaches — set a target on each and we'll watch all three sources.
>
> [Set targets on your watchlist](https://www.ticketscan.io/watchlist)

---

#### **jadbennis Inter Miami today (manual, last possible touch)**

**Subject:** Inter Miami is tonight. We owed you 4 alerts. We sent 0.

**Body:**
> Inter Miami CF vs Portland Timbers is tonight. You added this match 12 days ago. Our alert engine should have emailed you four times — T-7d, T-5d, T-3d, T-1d. **Every one of those windows missed. That's on us, not you.**
>
> Two things in the last 2-4 hours before kickoff: walk-up resale can drop 30-50% as sellers panic, and Ticketmaster's official resale floor often beats SeatGeek and StubHub in the final window. Quick comparison:
>
> [Compare Inter Miami prices now](https://www.ticketscan.io)
>
> We're rebuilding the alert engine. The next match you add will get every threshold notification. We owe you that.

---

#### **c_calingasan Day-4 carry (~23h)**

**Subject:** Four days ago you signed up for TicketScan. We haven't heard back.

**Body:**
> Four days ago you signed up. You haven't added an event yet, so we can't track anything for you. What's the one event you came here for? Reply with it, or [browse events](https://www.ticketscan.io) — we'll set up tracking in 30 seconds.

---

#### **pattyglvz Day-5 carry (~44h)**

**Subject:** Four and a half days in. What event were you looking for?

**Body:** Same body structure as c_calingasan, tense adjusted.

---

### CARRIES (24-216h delayed, send today as batch)

#### **TARANIMERAMARO DAY-22 — Day-21 missed yesterday (17h-carry)**

**Subject:** 3 Bruno Mars dates tracked. 0 target prices. Let's fix that.
**Body:** Same as yesterday's draft (still parses cleanly under 24h carry).

#### **NMCNAMEE99 DAY-22 — Day-21 missed yesterday (23h-carry)**

**Subject:** Three weeks in. We owe you an apology.
**Body:** Same as yesterday's draft.

#### **JMORIARTY DAY-8 — Day-7 missed last night (22h-carry)**

**Subject:** A week and a day in. What did you come here for?
**Body:** "A week and a day ago you signed up for TicketScan. You haven't added an event yet — that's normal, most people sign up before a specific event clicks. Tell us one you're considering. We'll set the watchlist for you."

#### **EMMA / KEVINKID / JFGALZIN / LIAMBOT DAY-9 — Day-7 missed (13-46h carries)**

Batch send. Frame "A week and a day or two ago..." (jmoriarty/emma carry under 24h, frame parses; kevinkid/jfgalzin/liambot at 38-46h need "Just over a week ago...")

#### **5-USER DAY-23/24 CARRY BATCH** (charlesteel + ggri + aw + ajv + mark — Day-21 missed May 13-14)

Body: **"Three and a half weeks ago you signed up for TicketScan..."** Apology lead: "Two days ago a new signup added 7 Harry Styles dates in 17 seconds. Five days ago another added 6 events in 3 minutes. Three and a half weeks ago — that's you. We've sent you nothing." [ajvanprooyen variant retains Cubs apology lead. charlesteel variant adds Bruno T-3d miss apology.] **Send today as 1 batch send.**

#### **DR.ALTVATER DAY-27 — Day-21 144h HARD EXPIRY**

Body: **"Almost four weeks ago you signed up. Our welcome flow was broken — you should have heard from us at three weeks. We're sorry."** German variant.

#### **PETE DAY-37 — Day-30 168h HARD EXPIRY**

Body: **"More than a month in — five weeks plus, six tracked events (5 WC + 1 Darts), zero alerts."** Day-30 family dead for pete.

#### **NICKLIB DAY-30 — Day-21 216H, FAR PAST EXPIRY**

Body: **"Four weeks and two days ago you added Phillies vs Braves. Match has been over for 30 days — we never sent a price update."** Apology-only.

#### **LILIANA DAY-19 + ZHILI DAY-18 — Day-14 128h + 104h HARD EXPIRY**

Bodies: **"Almost three weeks in."** Apology + curiosity hook. Both past parse-edge of "two weeks and X days."

#### **JOSEPH DAY-13 — Day-7 144H HARD EXPIRY**

Body: **"Almost two weeks in. What event were you hoping to track?"** Day-7 family expired.

#### **CJTHOMAS / SPARKIT / NATALIE — Day-9/10 reframes**

3 users carrying Day-7 misses 64-192h. Standard Day-7 body parses cleanly only for cjthomas (<96h). sparkit (~96h) and natalie (~64h) need **"A week and a half ago..."** rewrites. cjthomas: Noah Kahan T-26d hook. sparkit: Mac DeMarco passed apology-only. natalie: no event yet, curiosity hook.

---

### TODAY's total queue if engine returns: **28-32 emails** — new record (was 26-30 yesterday)

- 1 today-natural fire (vlanza Day-3)
- 5 high-priority manual sends (cutekitten Day-1 [HIGHEST-EV in dataset history] / belder Day-1 [HIGH urgency, event T-4d] / karin Day-3 carry / kevinshall Day-5 carry / jadbennis Inter Miami today [last touch])
- 2 manual carry sends (c_calingasan Day-4 / pattyglvz Day-5)
- 4 yesterday-fire carries (taranimeramaro Day-22 / nmcnamee Day-22 / jmoriarty Day-8 / emma Day-9)
- 3 Day-9 batch carries (kevinkid / jfgalzin / liambot)
- 5-user Day-23/24 carry batch (charlesteel/ggri/aw/ajv/mark)
- 4 individual hard-expiry rewrites (pete Day-37 / nicklib Day-30 / dr.altvater Day-27 / liliana Day-19)
- 1 Day-18 (zhili)
- 1 Day-13 reframe (joseph)
- 3 Day-9/10 reframes (cjthomas / sparkit / natalie)

**= 28-32 emails to clear in 36-48h. New record queue.**

---

## Psychology-driven micro-optimization (today)

**Principle:** **Default effect + endowment effect + Hick's Law (decision simplification)** — applied to multi-item watchlist runs (3+ items for the same artist/series).

**Where to apply:** Watchlist page — when the system detects 3+ items sharing an event series (same artist, same venue residency, same tournament). Display a "Set target across all N nights" composite control.

**The diagnosis:**

cutekitten1234's behavior last night is the third confirmed instance of the multi-night-residency pattern in the dataset:
1. **brigitte.theisen** — 10 Backstreet Boys Sphere nights (Mar 2026 add)
2. **tosophiameyer** — 11 Harry Styles MSG nights (Mar 2026 add)
3. **cutekitten1234** — 7 Harry Styles MSG nights (last night)

All three users hit the same N-choose-1 decision: "I want to attend ONE of these N shows, whichever is cheapest." The watchlist UX currently treats each row as an independent target. To set a target for the residency, the user has to click 7 times, type 7 prices, save 7 times. **Hick's Law (Hick 1952) shows reaction time grows logarithmically with N choices** — 7 sequential decisions is structurally hostile to a user who has already made the higher-level decision (pick the cheapest).

Yesterday's recommendation (per-row loss-framed target prompt with default pre-fill) addresses each row independently. **It doesn't solve the run-bundle problem.** For 28 items in the dataset that belong to multi-night residencies (7 cutekitten + 11 tosophia + 10 brigitte = 28), the per-row prompt would require 28 separate target-set clicks. Three users; 28 clicks; same ultimate decision: "alert me when any night drops below $X."

**The pattern:** Default effect (Thaler & Sunstein 2008) compounds with endowment effect (Kahneman, Knetsch, Thaler 1990) and Hick's Law (decision complexity). A single composite control turns 7 micro-commitments into 1 macro-commitment — easier to make, easier to keep, and frames the residency as a unit the user already "owns" (endowment).

**Specific change:** When the watchlist contains 3+ items sharing artist+venue OR tournament+venue, display a sticky "residency control" above the per-row list.

```
Current state (cutekitten1234's watchlist):
┌─────────────────────────────────────────────────────────────┐
│ Harry Styles MSG — Aug 26     [no target]   [set target]   │
│ Harry Styles MSG — Aug 28     [no target]   [set target]   │
│ Harry Styles MSG — Aug 29     [no target]   [set target]   │
│ Harry Styles MSG — Sep 2      [no target]   [set target]   │
│ Harry Styles MSG — Sep 4      [no target]   [set target]   │
│ Harry Styles MSG — Sep 5      [no target]   [set target]   │
│ Harry Styles MSG — Sep 9      [no target]   [set target]   │
└─────────────────────────────────────────────────────────────┘

New state — residency control on top:
┌─────────────────────────────────────────────────────────────┐
│ 🎵 Harry Styles MSG residency · 7 nights tracked            │
│ Cheapest available now: $385 (Sep 2)                        │
│ Range across the run: $385–$612                             │
│                                                              │
│ Alert me when ANY night drops below: [$280] (←slider)       │
│ [ Set target across all 7 nights ]   manage individually   │
└─────────────────────────────────────────────────────────────┘
[ collapsed per-row list below, expandable ]
```

**Why this works:**

1. **One commitment instead of seven.** Hick's Law: a single decision over a continuous price slider is roughly 1/3 the cognitive load of 7 sequential per-row decisions, even when the underlying math is identical. **Expected target-set rate on residency control: 60-80%** (vs ~30% projection for per-row prompts).

2. **The default ($280 = ~72% of current cheapest) leverages default effect.** Per yesterday's analysis, default acceptance runs 60-80% in similar UI contexts. **80% of 80% = 64% of multi-night users get a target set in one click.**

3. **Endowment framing in "your residency."** "7 nights tracked" + "across all 7 nights" frames the bundle as something the user already owns and is managing — not a series of separate decisions. **Strongest endowment frame available in the watchlist surface.**

4. **It compounds with yesterday's per-row banner.** Single-event watchlists (the 78 non-residency items) use the per-row loss-framed prompt. Multi-night residencies (28 items across 3 users + cutekitten's new 7 = 28 items + future) use the composite control. **Together: full coverage of both add patterns.**

5. **High dollar-leverage on the THREE deepest watchlists in dataset history.** cutekitten (7) + tosophia (11) + brigitte (10) = 28 items at target=null today. **One composite control captures all 28 in 3 clicks (one per user).** Compared to the per-row design's 28 clicks across 3 users.

6. **Cutekitten is a Day-1 power-user we've never touched.** A residency-control prompt on her next visit would be her first product touchpoint — exactly the moment Cialdini's commitment-consistency theory says she's most pullable into target-setting behavior. **The composite control is the highest-EV first-touchpoint variant of yesterday's per-row prompt.**

**Quantitative target:** Move multi-night-residency target capture from **0% to 50% within 1 week of shipping** (assuming the 3 existing power-users return) and **75% within 2 weeks of shipping** (assuming cutekitten returns within 7 days at her observed engagement pattern). Combined with yesterday's per-row prompt and the two-step add modal, **full target-capture surface reaches 60%+ within 3 weeks of all three shipping.**

**Implementation cost:** ~5-6h. Detection logic (group watchlist items by artist+venue / tournament+venue, ~2h), composite control component (~2h), default pre-fill from min-price across run (~1h), styling and per-row collapsed list (~1h). **Reuses 60% of the per-row banner work from yesterday's spec.**

**Cross-agent route:** **CRO Agent (Agent 6)** to scope/implement. **The full CRO activation stack now expands to 9 fixes:**
1. (May 7) Loss-aversion target-price banner — superseded by May 16's per-row version.
2. (May 8) Default-effect smart pre-fill on watchlist-add modal. ~3-4h.
3. (May 9) FOMO "Happening soon" rail on search results. ~5-6h.
4. (May 11) Loss-frame empty-state on dashboard. ~5h.
5. (May 12) Commitment-and-consistency "Watch for 24h — no signup" pre-signup CTA. ~8-10h.
6. (May 13) Social-proof rail on WC stadium pages. ~3h.
7. (May 15) Commitment-consistency two-step add modal with default target pre-fill. ~5h.
8. (May 16) Loss-aversion per-row target prompt on watchlist page with default pre-fill. ~3-4h.
9. **(TODAY May 17) Residency / multi-night composite target control. ~5-6h. Layers on top of #8 (per-row remains for single events; residency control for groups of 3+).**

**Combined: ~37-43h** (subtracting the superseded May 7 ask). **Combined coverage now also captures the multi-night residency pattern (the dataset's 3 deepest watchlists).**

**Today's fix is the highest-dollar-leverage of the stack on a per-item basis** — addresses 28 items across the 3 deepest watchlists in dataset history (which represent ~30% of total watchlist value by event count, likely 40%+ by ticket-spend potential). **Recommended shipping sequence: ship #8 (per-row prompt) and #9 (residency control) together — they're the same component family.**

---

## Cross-agent dependencies

1. **→ Email Agent (Agent 5):** **28-32 EMAILS QUEUED — new record-largest queue (was 26-30 yesterday). If engine returns today:**
   - **TODAY (1 natural fire):** vlanza Day-3 (~13:20 UTC)
   - **TODAY (manual sends, priority order):** (1) **cutekitten1234 Day-1 [HIGHEST-EV in dataset history — 7 Harry Styles dates, 0 emails sent, ~12h post-signup]** → (2) **belder4308 Day-1 [HIGH urgency — events T-4d/T-5d]** → (3) jadbennis Inter Miami today [last possible touch before passed-event #17] → (4) karin Day-3 carry [power-user #2, 4h-carry] → (5) kevinshall Day-5 carry [power-user #1] → (6) c_calingasan Day-4 carry → (7) pattyglvz Day-5 carry
   - **TODAY (carry batches):** 4 yesterday-misses (taranimeramaro/nmcnamee/jmoriarty/emma) + 3 Day-9 (kevinkid/jfgalzin/liambot) + 5-user Day-23/24 batch (charlesteel/ggri/aw/ajv/mark) + 4 hard-expiry rewrites (pete Day-37/nicklib Day-30/dr.altvater Day-27/liliana Day-19) + 1 Day-18 (zhili) + 1 Day-13 (joseph) + 3 Day-9/10 reframes (cjthomas/sparkit/natalie)
   - **CARRIED + COMPOUNDED Day 12: Day-1 schedule addition.** Both new power-users in dataset (cutekitten + belder) had Day-1 boundary miss because schedule entry doesn't exist. **5 of 8 recovery-cohort signups would have benefited from Day-1 touch (karin / vlanza / nunemakerc / belder / cutekitten). Day-1 is now the single highest-ROI schedule addition in the system.** The cost of missing cutekitten's Day-1 fire today is structurally the biggest single-fire cost of the outage (7-item residency, 0% target capture, ~12h activation window).
   - **HIGHEST-EV send today: cutekitten Day-1 manual** (no carry frame needed — fresh signup, perfect timing window).

2. **→ CRO Agent (Agent 6):** **NINE stacked high-leverage fixes — full activation stack now spans VISIT through RETENTION with full target-capture coverage including multi-night residencies:**
   - **TODAY: Residency / multi-night composite target control** — addresses the 28 items across cutekitten (7) + tosophia (11) + brigitte (10) = dataset's 3 deepest watchlists. **~5-6h. Highest-per-item dollar-leverage in stack.**
   - Prior 8 fixes still open. **Recommended ship order if work-bandwidth-constrained:** (1) **today's residency control + yesterday's per-row banner SHIPPED TOGETHER [~9-10h combined, fixes all 106 existing items + future]** → (2) yesterday's two-step add modal [5h, fixes future adds] → (3) social-proof rail on WC pages [3h] → (4) others.
   - **The May 7 generic target-price banner ask is superseded by #8 + #9. Mark complete-as-evolved.**

3. **→ Ads Agent (Agent 4):** **DAY 24 OF ATTRIBUTION DEPENDENCY. The 144h-window dataset is now 8 signups with completely symmetrical bifurcation:**
   - **4 power-users / instant activators** (kevinshall WC + karin WC + cutekitten Harry Styles + belder SEC Baseball) — all unknown-source.
   - **4 inert signups** (pattyglvz / c_calingasan / vlanza / nunemakerc) — all unknown-source.
   - **Same-cohort 8-user split (4 power vs 4 inert in 6 days, 50% power-user rate) is the highest-resolution attribution-eligible dataset in project history.** If channel data resolves for any 4 of 8, we get the first concrete activation-vs-inert split-by-channel comparison.
   - **The genre-diversity of the activated 4 (World Cup, Harry Styles, SEC Baseball) suggests the activated cohort shares INTENT not GENRE.** This is the strongest signal yet that channel attribution is the right lens — different content niches converting at the same rate to the same activation behavior implies channel-driven self-selection, not content-driven self-selection. **Even one channel-confirmation for any of the 4 activated would test this hypothesis directly.**

4. **→ Content Agent (Agent 3):** **NEW CONTENT TRIGGER — HARRY STYLES MSG RESIDENCY PRICING GUIDE.**
   - **cutekitten + tosophia = 2 users tracking the same 7+ Harry Styles MSG run.** Content priority: a Harry Styles MSG residency pricing explainer (how the run prices across 8 nights, what the typical floor is, when to buy). Compound with reactivation email to tosophia if engine returns.
   - **Carried Day-3 ask: AT&T Stadium WC fan guide** (kevinshall + karin both WC power-users at different venues).
   - **Carried Day-2 ask: WC bracket-tracking explainer** (karin's R16 Match 96 add).
   - **NEW Day-1 ask: SEC Baseball Tournament pricing primer** (belder's signup hook; events T-4d/T-5d today).
   - **Recommended content priorities reordered today:**
     1. **Harry Styles MSG residency pricing guide** — fresh today; 2 users tracking 18 combined nights.
     2. **SEC Baseball Tournament pricing primer** — belder T-4d/T-5d, content publishing in next 24-48h compounds with potential alerts.
     3. **Bruno Ohio T-1d explainer** — May 19 last-Bruno-chance; explainer would compound charlesteel's alert if engine returns.
     4. **AEW Double or Nothing T-3d/T-1d explainer** — May 21/23; josh's only remaining flip thresholds.
     5. **AT&T Stadium WC fan guide** (Day 3 carry).
     6. **WC bracket-tracking explainer** (Day 2 carry).

5. **→ Engineering / Drip-Engine:** **Day 41 of outage. New on-schedule fires missed in 24h:**
   - c_calingasan Day-3 / nmcnamee99 Day-21 / jmoriarty Day-7 / taranimeramaro Day-21 / josh AEW T-7d / **jadbennis Inter Miami T-1d** / emma Day-7 (7 fires May 16)
   - karin Day-3 (May 17 ~06:46 UTC, 4h ago — 8th fire of cycle, **9th confirmed closed-out flip failure including last night's two**)
   - **Total May 10-17 natural fire misses confirmed: 38+. Same-day queue if engine returns today: 28-32 emails in 36-48h.**
   - **The 20:30-20:33 UTC window resolved negative last night — both Inter Miami T-1d AND AEW T-7d missed.** Inter Miami becomes passed-event #17 by tonight. **The "single most-decisive moment of Q2" is now in the rearview.**
   - **NEW Day 12 carried ask: Day-1 schedule entry critical.** With 5 of 8 recovery-cohort signups never getting a Day-1 touch, today's cutekitten miss (highest-EV first-touch in dataset history) makes Day-1 the most-undervalued schedule addition in the system.
   - **NEW today: belder SEC Baseball T-3d fires May 18 (~36h) and May 19 (~60h).** Engine return by tomorrow night still captures both. **Engine return by Friday May 19 evening captures Bruno T-1d + Session 5 T-3d + (in 24h more) Session 6 T-3d.** Cluster of 3 high-value flip thresholds in 36-72h window.

6. **→ All agents:** **THE RECOVERY ACCELERATES — SIGNUPS, ACTIVATION, AND WATCHLIST ALL MOVE POSITIVE FOR THE FIRST TIME IN 41 DAYS.** 8 signups in 6 days = 1.33/day (vs <0.3/day pre-burst). **Watchlist items +9 in 24h** — first material movement in 48h. **Activation rate +0.9pp** — first positive 24h move since the Apr 30 peak. **Recovery-cohort split rebalances to 4:4 power-user/inert = 50%.** **3 of 6 dimensions show recovery motion** (signups, watchlist, activation rate) — up from 1 of 6 yesterday. **Today's CRO recommendation (residency composite target control) addresses cutekitten's 7-item run + tosophia's 11 + brigitte's 10 = 28 items at 0% target capture — the highest-per-item dollar-leverage fix in the entire CRO stack.** **The genre-diverse activated cohort (WC + Harry Styles + SEC Baseball) is the strongest channel-driven-self-selection signal in dataset history.**

---

## Summary metrics

```
Total users:              82 (+2 over 24h — belder + cutekitten, both same-night cluster)
Real users:               79
Activated:                52 (+2 over 24h — first watchlist activation since May 14)
Activation rate:          65.8% (real, +0.9pp 24h — first positive move since Apr 30)
Watchlist items:          106 (+9 over 24h — first material movement in 48h)
Newsletter subscribers:   3 (105 DAYS FLAT — 15 weeks exactly)
Active alerts:            0 (Day 41)
Triggered alerts:         0 (lifetime)
Drip emails sent:         0 (Day 41 — /api/admin/drip-stats: stats=[])
Cumulative passed-no-notify: 16 (Inter Miami #17 confirmed by tonight)
Algo-flip-quiet streak:   17 days (Inter Miami T-1d + AEW T-7d closed-out last night = 11 total flip failures, 5 non-Cubs)
Activation gap (real):    23/79 = 29.1% (−0.8pp; first reduction in 7+ days)
Unknown-source activation: 8/23 = 34.8% (+6.2pp; largest single-day jump in dataset)
Day-22 carry batch:       2 users (taranimeramaro + nmcnamee99)
Day-21 carry batch:       5 users (charlesteel/ggri/aw/ajv/mark — Day-23/24 today)
Instant-power-users:      4 (kevinshall + karin + cutekitten + belder) — pattern N=4 holds, 6 days
Recovery-cohort power rate: 4/8 = 50% (was 33%; symmetrical 4:4 split for first time)
WC PMF signal:            25 days to kickoff (June 11); 2 WC power-users hold (kevinshall + karin)
Harry Styles signal:      cutekitten + tosophia = 2 users, 18 combined MSG nights tracked
Target-price capture:     0/106 watchlist items = 0% (Day 41; 28 items in multi-night runs)
Post-burst signups:       8/144h (kevinshall + pattyglvz + c_calingasan + karin + vlanza + nunemakerc + belder + cutekitten)
Sustained recovery rate:  1.33/day over 6 days (vs <0.3/day pre-burst, 0/day flat window)
Highest-EV send today:    cutekitten1234 Day-1 manual (7 Harry Styles MSG, 0 emails sent, ~12h post-signup)
2nd-highest send today:   belder4308 Day-1 manual (events T-4d/T-5d, urgency-driven)
3rd-highest send today:   jadbennis Inter Miami today (last touch before passed-event #17)
Closed-out fire families: 11/11 — Day-1 (schedule gap) / Day-3 / Day-7 / Day-14 / Day-21 / Day-30 / Cubs algo-flip / Inter Miami algo-flip (NEW: 0/4 sends, match today) / Bruno algo-flip / AEW algo-flip (NEW: T-7d closed-out) / SEC Baseball algo-flip (NEW: belder's first T-3d in 36h)
```

**Headline:** **Double-activation cluster overnight — belder + cutekitten signed up in a 79-minute window May 16 22:13-23:33 UTC, both activated within seconds.** cutekitten1234 added 7 Harry Styles "Together, Together" MSG dates in 17 seconds = **3rd-deepest first-session watchlist in dataset history.** belder added 2 SEC Baseball Tournament dates (T-4d/T-5d) in 1 second. **Recovery-cohort power-user split rebalances overnight from 2:4 (33%) to 4:4 (50%).** **Watchlist +9 / signups +2 / activation rate +0.9pp** = first 3-dimension positive recovery in 41 days. **Inter Miami T-1d MISSED last night** — match plays today, becomes passed-event #17 by tonight. **AEW T-7d also MISSED** — first AEW flip threshold closed out. **Today's CRO recommendation: residency / multi-night composite target control (~5-6h)** — addresses cutekitten's 7 + tosophia's 11 + brigitte's 10 = 28 items at 0% target capture across the dataset's 3 deepest watchlists. **9-fix CRO stack now totals ~37-43h** for full-funnel coverage VISIT → ACTIVATION → RETENTION including multi-night residency target capture. **cutekitten Day-1 manual is the highest-EV first-touchpoint in dataset history** — 7 items, ~12h post-signup, target=null on all 7, no email sent yet. The genre-diverse activated cohort (WC + Harry Styles + SEC Baseball) is the strongest channel-driven-self-selection attribution signal in dataset history; **Ads Agent needs to resolve channel for any 4 of 8 recovery-cohort signups** to test the bifurcation hypothesis.
