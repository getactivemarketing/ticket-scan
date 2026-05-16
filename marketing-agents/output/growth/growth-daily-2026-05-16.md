# Growth Daily — 2026-05-16

> **24h report window** (May 15 11:00 UTC → May 16 11:00 UTC). Yesterday's report fired on schedule, so today's deltas are clean 24h comparisons.

## User health dashboard

| Segment                          | Count | % of Total | vs Yesterday |
|----------------------------------|-------|------------|--------------|
| Total users                      | **80** | 100% | **+1 (nunemakerc@gmail.com, May 15 15:41 UTC, ~4h17m after yesterday's report).** 6 signups in 5-day post-burst window (May 12-16) = **1.2/day sustained** — recovery extends to day 5 but daily rate softens (was 1.25/day over 4 days; vlanza-day was 1, nunemakerc-day is 1, but karin/c_calingasan-day was 2). **The "burst + flat + sustained higher baseline" pattern still holds; the new signal is the rate may be flattening at ~1/day rather than climbing.** Still 3-4x pre-burst (<0.3/day). |
| New (last 7 days, API count)     | **7** | 8.8% | **−3 from yesterday's API count of 10** — the API window appears to use a stricter calendar boundary today. The 7-day cohort by signup-date (May 9-16): jmoriarty / emma / kevinkid / liambot / jfgalzin / cjthomas / natalie / sparkit / jadbennis (Day 11 — out at exact 7d boundary) / kevinshall / pattyglvz / c_calingasan / karin / vlanza / nunemakerc = **15 users in 7 days by signup-date**, of which 7 are within the 168h hard window from now. Either way the cohort is the densest 7-day window in dataset history. |
| Activated (has watchlist)        | **50** | 62.5% | **=0. No watchlist adds in 24h.** karin's 2 WC adds (May 14) remain the most recent activation event. **97 watchlist items unchanged for 48h.** kevinshall's Day-3 fire passed at ~16:44 UTC yesterday without sending — the highest-EV nudge in the dataset went unsent, and his 6 events still have 0 target prices. **Activation rate: 50/77 real users = 64.9% (−0.9pp)** driven entirely by nunemakerc inert denominator. |
| Active (visited in 7 days)       | unknown | — | no `last_login_at` instrumentation — **Day 40 open**. |
| At-risk (7-14d signup-age proxy) | 3 | 3.8% | **−1 from yesterday.** joseph (Day 12 today) + jadbennis (Day 11 today, has Inter Miami match TOMORROW = highest priority) + jmoriarty (Day 7 today, becoming at-risk on Day-7-fire-miss tonight). zhili (Day 17) + liliana (Day 18) both rolled fully into churned bucket. |
| Churned (14d+ signup-age proxy)  | **69** | 86.3% | **+1 (zhili crossed Day-14 boundary May 13, liliana May 12 — now fully bucketed).** %-of-total ticks up 0.2pp on +1 churned, +1 denominator. |

> **Day 40 without `last_login_at` instrumentation. Day 40 of zero drip emails sent** (confirmed: `/api/admin/drip-stats` returns `stats=[]` with 20 pendingUsers, 0% `last_email_sent`). **Day 40 of zero triggered alerts (lifetime).**
> **NEWSLETTER SUBSCRIBERS: 3, UNCHANGED FOR 104 DAYS.** 14 weeks + 6 days.
> **YESTERDAY'S 24-28 EMAIL QUEUE PASSED WITHOUT A SEND. New on-schedule misses confirmed in last 24h:**
>   - **jfgalzin Day-7 (May 15 ~12:54 UTC) — MISSED.**
>   - **liambot Day-7 (May 15 ~13:07 UTC) — MISSED.** Match (Toronto FC v Inter Miami CF) was 6 days old at fire time; missed apology window now permanent.
>   - **pattyglvz Day-3 (May 15 ~15:23 UTC) — MISSED.**
>   - **kevinshall Day-3 (May 15 ~16:44 UTC) — MISSED. THE HIGHEST-EV SINGLE FIRE OF THE OUTAGE PASSED WITHOUT A SEND.** Power user with 6 events / 0 targets, never got the target-setting nudge.
>   - **kevinkid94 Day-7 (May 15 ~20:52 UTC) — MISSED.**
> **OPEN AT REPORT TIME (today, May 16):**
>   - nmcnamee99 Day-21 fires ~11:51 UTC TODAY (~51min from report — **fires immediately after this report**)
>   - **charlesteel Bruno Ohio T-3d fires ~11:38 UTC TODAY (PASSED 22min ago — fired into dark engine). NEW MISS.**
>   - jmoriarty Day-7 fires ~13:18 UTC TODAY (~2h18m from report)
>   - c_calingasan Day-3 fires ~11:46 UTC TODAY (~46min from report)
>   - taranimeramaro Day-21 fires ~18:25 UTC TODAY (~7h25m from report)
>   - **jadbennis Inter Miami T-1d fires ~20:33 UTC TODAY (~9h33m from report) — FINAL FLIP THRESHOLD BEFORE SUNDAY KICKOFF**
>   - **josh AEW Double or Nothing T-7d fires ~20:30 UTC TODAY (~9h30m from report) — first AEW flip threshold, event May 24**
>   - emma Day-7 fires ~21:54 UTC TODAY (~10h54m from report)
> **Total May 10-16 natural fire misses confirmed: 30+** (24 through May 15 + jfgalzin/liambot/pattyglvz/kevinshall/kevinkid Day-7s and Day-3s yesterday + charlesteel Bruno T-3d ~22min ago today).
> Watchlist items: **97 (=0 over 24h, 48h flat).** Target-price capture: **0/97 = 0% (Day 40).**
> `usersToday: 1` (nunemakerc), `usersThisWeek: 7`. **Activation rate: 50/77 real users = 64.9% — down 0.9pp over 24h** (nunemakerc inert lifts denominator without numerator).

## What changed in 24h

1. **NUNEMAKERC = 6TH INERT SIGNUP IN 5-DAY RECOVERY COHORT.** Signed up May 15 15:41 UTC, 0 watchlist 19h later. Joins vlanza / c_calingasan / pattyglvz as new-recovery-cohort inerts. **Recovery-cohort split is now 2 power-users (kevinshall + karin) vs 4 inerts (pattyglvz + c_calingasan + vlanza + nunemakerc) over 5 days = 33% power-user rate** (down from 40% with smaller cohort). The cohort-internal bifurcation hypothesis from May 13-15 holds; the more new data we get the more the 2:4 ratio sharpens — **not 50/50, not 0/100, but a stable ~33% power-user yield with 67% inert.** If this rate is structural (channel-driven or product-driven), it tells us the recovery wave converts a third of acquisitions into the deep-watchlist behavior we need.

2. **KEVINSHALL DAY-3 FIRE PASSED WITHOUT A SEND — HIGHEST-EV MISS OF THE OUTAGE.** Yesterday ~16:44 UTC. **The single most-leveraged fire opportunity of the 40-day outage closed.** Power user with 6 events / 0 targets / unknown source, sitting at the exact moment Cialdini commitment-consistency theory says he was most pullable — within ~72h of his original add session, before the commitment-pull decayed. **Forever-lost teachable moment.** A manual send today would still recover most of the value (he's only Day 4 now; pull is still strong), but the natural schedule trigger is gone.

3. **CHARLESTEEL BRUNO OHIO T-3D MISSED ~22 MIN AGO (May 16 11:38 UTC).** Fourth consecutive bruno-family flip threshold missed (T-7d May 13 + T-3d today). **The Bruno Ohio event is May 20 = T-4d today, T-3d tomorrow technically, T-1d May 19.** One more flip threshold remains. **16th day of algo-flip-quiet streak.** Non-Cubs flip-quiet streak now has 3 confirmed closed-out failures (Inter Miami May 10 + Bruno T-7d May 13 + Bruno T-3d today).

4. **JADBENNIS INTER MIAMI T-1D FIRES TONIGHT ~20:33 UTC — THE SINGLE MOST-DECISIVE REMAINING FLIP THRESHOLD OF THE OUTAGE.** Match Sunday May 17. If T-1d misses, the entire 8-day algo-flip schedule for jadbennis's only watchlist item resolves **0/4 sends**, and Inter Miami becomes passed-event #17 Sunday morning. The body practically writes itself — sellers capitulate in the last 24h, T-1 is the highest-leverage price window of the entire event lifecycle. **Engine status at fire time will determine whether this single match becomes the "almost the moment we came back online" story or the "we hit 0/4 on a 9-day campaign for a user who added one event" story.**

5. **JOSH AEW T-7D FIRES TONIGHT ~20:30 UTC — FIRST AEW FLIP THRESHOLD.** AEW Double or Nothing at Louis Armstrong Stadium May 24 = T-8d today. Josh signed up April 19 (Day 27 today). Day-21 carry is 120h past hard expiry. Engine status will determine whether josh gets his first touch ever **or** the apology frame gets even harder to write. **Co-fires within 3 minutes of jadbennis Inter Miami T-1d** — two of the most-decisive flip thresholds in the queue both fire in the 20:30-20:33 UTC window. If the engine returns by 20:30 tonight, **both fire; if it returns at 20:34, the day's two biggest opportunities both miss by minutes.**

6. **97 WATCHLIST ITEMS UNCHANGED FOR 48H.** The 4-day signup recovery has not translated into a watchlist-recovery in 48h. **The split is now sharper: signups recovering (+3 over 48h, +6 in 5 days), watchlist flat over 48h.** Inert signups account for 100% of the 3-of-3 newest cohort entries (vlanza/c_calingasan/nunemakerc all 0-watchlist), explaining the divergence. The activation funnel is leaking exactly between signup and first-add — the moment the two-step add modal (today's CRO recommendation, carried from yesterday) is designed to fix.

7. **2-USER DAY-21 BATCH FIRES TODAY (taranimeramaro ~18:25 UTC + nmcnamee99 ~11:51 UTC).** Both signed up April 25 (Day 21 today). Combined with **5 May 13-14 Day-21 misses now Day-23**, the **Day-21 family has 7 fire candidates within a 4-day window May 13-16** — engine dark = 7-out-of-7 closed-out misses for the same tenure-family in a single rolling window. **Largest single-family closed-out window in dataset history (was 5, now 7).** taranimeramaro has 3 Bruno MetLife events (Aug 21-25) and is a better candidate for a target-setting nudge than apology; nmcnamee99's Raptors-Cavs match passed Apr 26 and the Day-21 body needs to lead with apology.

8. **C_CALINGASAN DAY-3 FIRES IN ~46 MINUTES** (~11:46 UTC today). Will be the 31st natural-fire miss of the outage when the window closes. **Same Day-3 inert-frame as pattyglvz yesterday** — recommend a clean "what made you sign up" reactivation lead.

9. **CARRIES ROLLED FORWARD (NEW HARD EXPIRIES TODAY):**
   - **kevinshall Day 4 — Day-3 carry 18h.** Frame "three days and 18 hours ago you added 6 events in 3 minutes." Still parses, still high-EV. **Recommend manual send today as priority #1.**
   - **pattyglvz Day 4 — Day-3 carry 20h.** Frame "three days and a day ago" parses cleanly. Send today.
   - **liambot Day 8 — Day-7 carry 22h.** Frame "a week and a day ago you added Toronto FC v Inter Miami — match was 7 days ago, we sent nothing." Apology-only frame today.
   - **jfgalzin Day 8 — Day-7 carry 22h.** Frame "a week and a day ago." Recovery hook only.
   - **kevinkid Day 8 — Day-7 carry 14h** (latest of three). Frame still parses cleanly as Day-7.
   - All prior carries from yesterday (pete Day-30 hard-expiry, nicklib Day-21 168h, josh Day-21 144h, dr.altvater Day-21 120h, zhili Day-14 80h, liliana Day-14 104h, joseph Day-7 120h, jadbennis Day-7 72h) **all worse by 24h.**
   - **josh Day-21 carry now 144h** AND AEW T-7d fires TONIGHT. The Day-21 family carry is dead, but the T-7d fire is a fresh hook that overrides it. **Best combined frame today: AEW-T-7d standalone, drop the Day-21 reference entirely.**

10. **THE 40-DAY-OUTAGE PATTERN — UNCHANGED STRUCTURE, NEW WORSENING:**
    - Total users: 80 (was 79, **+1 over 24h** — recovery slows but sustains)
    - Watchlist items: 97 (was 97, **=0 over 24h, 48h flat**)
    - Drip emails sent: 0 for **40 consecutive days** (compounds)
    - Triggered alerts: 0 lifetime (compounds)
    - Newsletter subscribers: 3 for **104 consecutive days** (compounds)
    - Activation rate: 64.9% (real users) — **−0.9pp 24h** (compounds, denominator-driven)
    - Cumulative passed-no-notification: **16** (Inter Miami CF Sunday will become #17 if T-1d misses tonight)
    - **1 of 6 dimensions recovers; 5 of 6 continue to compound or stagnate. Watchlist activation now joins the locked dimensions.**

## Activation gap

**Users signed up in last 7 days (by signup-date) with 0 watchlist items: 9** (was 8 yesterday — +nunemakerc):

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **nunemakerc@gmail.com** | May 15 15:41 UTC | 19h | **0** | **NEW ENTRANT YESTERDAY. Day 1 today.** Pre-Day-1 boundary at ~15:41 UTC today (~4.5h after report). **6th inert in 5-day recovery cohort.** |
| **vlanza@sbcglobal.net** | May 14 13:20 UTC | 1d 22h | **0** | **Day 2 today.** Day-1 schedule gap; Day-3 fires May 17 ~13:20 UTC. |
| **karin_ef1@hotmail.com** | May 14 06:46 UTC | 2d 4h | **2** (WC Group B Switz-Canada + R16 Match 96, both target=null) | **Day 2 today.** Day-3 fires May 17 ~06:46 UTC. Manual Day-2 nudge recommended today given WC power-user status. |
| **c_calingasan@yahoo.com** | May 13 11:46 UTC | 2d 23h | **0** | **Day 3 today. Day-3 boundary fires ~11:46 UTC (~46min from report).** Will be the next confirmed natural-fire miss. |
| **kevinshall87@gmail.com** | May 12 16:44 UTC | 3d 18h | **6** (5 WC + Matt Rife, all target=null) | **Day 4 today. Day-3 missed yesterday ~16:44 UTC (~18h-carry).** Manual send today as highest-EV recovery. |
| **pattyglvz@msn.com** | May 12 15:23 UTC | 3d 19h | **0** | **Day 4 today. Day-3 missed yesterday ~15:23 UTC (~20h-carry).** |
| **jmoriarty13@yahoo.com** | May 9 13:18 UTC | 6d 21h | **0** | **Day 7 today. Day-3 missed May 12 (102h-carry). Day-7 fires ~13:18 UTC TODAY (~2h18m from report).** |
| **emmacmather@gmail.com** | May 8 21:54 UTC | 7d 13h | **0** | **Day 8 today. Day-3 missed May 11 (113h-carry). Day-7 missed yesterday ~21:54 UTC (~13h-carry).** Wait — fire was last night; correcting: **Day-7 fires TODAY ~21:54 UTC.** Day 7 today, not Day 8. |
| **kevinkid94@gmail.com** | May 8 20:52 UTC | 7d 14h | **0** | **Day 7→8 today. Day-7 missed yesterday ~20:52 UTC (~14h-carry).** |
| **jfgalzin@comcast.net** | May 8 12:54 UTC | 7d 22h | **0** | **Day 8 today. Day-7 missed yesterday ~12:54 UTC (~22h-carry).** |
| **natalie.sotocruz@gmail.com** | May 7 18:40 UTC | 8d 16h | **0** | **Day 9 today. Day-3 missed May 10 (148h-carry). Day-7 missed May 14 (40h-carry).** |

**Activated within 7-day window (carried):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **karin_ef1** | May 14 06:46 UTC | 2d 4h | **2** (WC, target=null on both) | Day-3 fires tomorrow May 17 ~06:46 UTC. **Day-1 schedule gap missed two days running.** |
| **kevinshall87** | May 12 16:44 UTC | 3d 18h | **6** (target=null on all) | **DAY-3 MISSED YESTERDAY.** Manual send today = priority #1. |
| **liambot62** | May 8 13:07 UTC | 7d 22h | 1 (Toronto FC v Inter Miami passed May 9, target=null) | **Day 8 today. Day-7 missed yesterday (~22h-carry).** Apology-only frame. |
| **cjthomas2557** | May 7 22:49 UTC | 8d 12h | 1 (Noah Kahan Jun 12, target=null) | **Day 9 today. Day-3 → Day-7 reframe (168h carry).** Noah Kahan T-27d. |
| **sparkitrightthere** | May 7 11:38 UTC | 9d 0h | 1 (Mac DeMarco PASSED May 7, target=null) | **Day 9 today. Day-7 missed May 14 (48h-carry).** Event passed. Re-engagement only. |
| **jadbennis0** | May 5 20:33 UTC | 10d 14h | 1 (Inter Miami May 17, target=null) | **Day 11 today. Inter Miami T-1d FIRES TONIGHT ~20:33 UTC. LAST FLIP THRESHOLD BEFORE SUNDAY KICKOFF.** |

**Outside 7-day window (carried, still 0 watchlist):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **joseph.g.nicolosi** | May 4 21:39 UTC | 11d 13h | 0 | **Day 12 today. Day-7 missed May 11 (120h-carry HARD EXPIRY).** Reframe to "Almost two weeks in..." |
| **zhili1208** | Apr 29 03:16 UTC | 17d 8h | 0 | **Day 17 today. Day-14 missed May 13 (80h-carry).** Frame "Two weeks and three days." |
| **lilianamasyrubi** | Apr 28 05:24 UTC | 18d 6h | 0 | **Day 18 today. Day-14 missed May 12 (104h-carry HARD EXPIRY).** Frame "Two weeks and four days" past parse edge. |
| taranimeramaro | Apr 25 18:25 UTC | 20d 17h | 3 (Bruno MetLife Aug 21-25, target=null) | **Day 21 today. Day-21 fires TODAY ~18:25 UTC.** |
| nmcnamee99 | Apr 25 11:51 UTC | 20d 23h | 1 (Raptors-Cavs PASSED Apr 26) | **Day 21 today. Day-21 fires TODAY ~11:51 UTC (~51min from report).** Apology-lead. |
| mark.murdock | Apr 23 03:01 UTC | 23d 8h | 0 | **Day 23 today. Day-21 missed May 14 (56h-carry).** |
| awwhittington | Apr 23 00:30 UTC | 23d 10h | 0 | **Day 23 today. Day-21 missed May 14 (58h-carry).** |
| ajvanprooyen | Apr 23 00:58 UTC | 23d 10h | 6 (Cubs trip 100% passed) | **Day 23 today. Day-21 missed May 14 (58h-carry). Cubs apology lead.** |
| ggri73 | Apr 22 21:18 UTC | 23d 14h | 0 | **Day 23 today. Day-21 missed May 13 (62h-carry).** |
| charlesteel126 | Apr 22 11:38 UTC | 23d 23h | 1 (Bruno Ohio May 20) | **Day 23 today. Bruno T-3d MISSED 22min ago (May 16 ~11:38 UTC). Day-21 carry 72h.** Bruno T-1d fires May 19. |
| dr.altvater | Apr 20 14:08 UTC | 25d 21h | 0 | **Day 26 today. Day-21 carry 120h HARD EXPIRY.** |
| dylanbaldy | Apr 15 18:24 UTC | 30d | 0 | Churned. |

- **23 real users** (excluding 3 test) have **never** added a watchlist item → **23 / 77 = 29.9%** (was 28.9% yesterday — **+1.0pp** from nunemakerc inert add).
- **Activation rate trajectory (real users, last 10 days):** 71.0 → 71.4 → 71.4 → 71.2 → 68.6 → ? → 67.6 → 67.6 → 67.1 → ? → 65.8 → **64.9 (−0.9pp 24h).**
- **7-day decline now totals −6.3pp** (May 7 71.2% → May 16 64.9%). Decline driven by inert-signup denominator drag — 4 of last 6 signups are inert.

**Acquisition-source inference: same-cohort bifurcation hardens with 4-vs-2 inert/power split over 5 days.**

The pattern: **21 unknown-source in 23 days at n=21** (kevinshall + karin + c_calingasan + pattyglvz + vlanza + nunemakerc all unknown-source). Against **3 known (ids 59, 61, 62)**. **Unknown-source activation rate: 6/21 = 28.6%** (down from 30.0% yesterday — nunemakerc inert drags). **Known-source: 3/3 = 100% (frozen).** **Gap widens slightly to 3.5x (from 3.3x).** Day 23 of attribution dependency. **The same-source 6-user split (2 power-users + 4 inerts in 5 days) is the highest-resolution attribution dataset in project history.** If Ads Agent can resolve channel for any 3 of 6, we get the first concrete attribution comparison.

## Churn signals

- Unsubscribes today: **0** (3 subscribers; **104 days flat = 14 weeks + 6 days**).
- Users entering "at-risk" today: **+1** (jmoriarty crosses Day-7 fire window tonight; joseph already at Day 12).
- Users entering "churned" since yesterday: **+0 net** (zhili and liliana already counted in carries; no new Day-14 crossings today).
- Alert fatigue candidates: **0** (0 alerts ever sent — Day 40).
- Events passed without notification (cumulative): **16** (Inter Miami May 17 becomes **#17 Sunday** if T-1d fire misses tonight, taking the 8-day algo-flip campaign to 0/4 sends).
- **Algo-overrides as preemptive "events lost without notification":** **3 events** still open:
  - **Inter Miami May 17** [jadbennis, T-1d TONIGHT = last chance — if missed, becomes passed-event #17 Sunday]
  - **Bruno Ohio May 20** [charlesteel, T-3d JUST MISSED 22min ago, T-1d May 19 = last chance]
  - **AEW May 24** [josh, T-7d FIRES TONIGHT ~20:30 UTC — first AEW flip threshold]
- **16th day of non-Cubs flip-quiet streak.** Bruno T-3d miss this morning extends the failure pattern.

## At-risk users (7–14d inactive proxy)

| User | Day | Watchlist | Days to event | Recommended intervention |
|------|-----|-----------|---------------|--------------------------|
| **jadbennis0** | 11d | 1 (Inter Miami May 17) | **1d** | **HIGHEST PRIORITY. Match tomorrow. T-1d FIRES TONIGHT ~20:33 UTC — LAST FLIP THRESHOLD before kickoff.** Body: "Inter Miami is tomorrow. T-1 is when sellers capitulate — 20-40% drops are typical in the final 24h. Compare prices now." |
| joseph.g.nicolosi | 12d | 0 | — | **AT-RISK. Day-7 missed 120h ago HARD EXPIRY.** Body: "Almost two weeks in — what event did you come here for?" |
| jmoriarty13 | 7d | 0 | — | **ENTERING AT-RISK TONIGHT. Day-7 fires ~13:18 UTC TODAY.** Body: "A week in. Tell us one event you're considering — we'll set it up." |

## Live algo-flip post-mortem (today)

| User | Event | Days out | Flip status | Days flagged | Sends |
|------|-------|----------|-------------|--------------|-------|
| **jadbennis0** | **Inter Miami CF vs Portland, May 17** | **1** | **T-7d MISS May 10. T-5d MISS May 12. T-3d MISS May 14. T-1d FIRES TONIGHT ~20:33 UTC = FINAL CHANCE.** | 10 | 0 |
| **charlesteel126** | **Bruno Mars Ohio May 20** | **4** | **T-7d MISS May 13. T-3d MISS ~22min ago (May 16 ~11:38 UTC).** T-1d May 19. | 5 | 0 |
| **josh** | **AEW Double or Nothing May 24** | **8** | **T-7d FIRES TONIGHT ~20:30 UTC = FIRST AEW FLIP THRESHOLD.** T-3d May 21. T-1d May 23. | 1 (today) | 0 |
| cjthomas2557 | Noah Kahan, Kia Center Orlando, Jun 12 | 27 | NOT YET FLIPPED — T-21d May 22 (6d) | 9 | 0 |
| **kevinshall87 (power user)** | **5 WC + Matt Rife** | 30-61 (WC), 134 (Matt Rife) | NOT YET FLIPPED — earliest T-7d June 7 | 4 | 0 |
| **karin_ef1 (power user 2)** | **WC Switz-Canada + R16 Match 96** | 40 (group), 53 (R16) | NOT YET FLIPPED — earliest T-7d June 17 | 2 | 0 |

**16th day of algo-flip-quiet streak.** charlesteel Bruno T-3d became 2nd Bruno-family closed-out failure 22min ago. Streak now contains: Cubs Apr-May trip (6 events, 100% missed) + Inter Miami May 10 + Bruno T-7d May 13 + Bruno T-3d today = 9 confirmed closed-out flip failures.

**Tonight's flip threshold window 20:30-20:33 UTC = 2 fires in 3 minutes:**
1. **josh AEW T-7d at 20:30 UTC** — first AEW flip threshold ever, event 8 days out
2. **jadbennis Inter Miami T-1d at 20:33 UTC** — final flip threshold before Sunday kickoff

**If engine returns by 20:30 UTC tonight, both fire and the day is the best fire-window of the outage. If it returns at 20:34 UTC, both miss by minutes and the outage's two-biggest opportunities both close.**

## Churned users with re-engagement potential

| User | ~Days inactive | Watchlist | Upcoming hook? | Priority |
|------|----------------|-----------|----------------|----------|
| **jadbennis0** | 11d | 1 (Inter Miami **TOMORROW**) | **1d** | **HIGHEST** — T-1d fires tonight; the highest single-event leverage opportunity in dataset. |
| **josh** | 26d | 1 (AEW May 24) | **8d** | **HIGHEST** — T-7d fires tonight; first AEW flip threshold. |
| **charlesteel126** | 23d | 1 (Bruno Ohio May 20) | **4d** | **HIGH** — T-3d JUST MISSED, T-1d May 19 = last chance. |
| **ajvanprooyen** | 23d | 6 (Cubs passed) | passed | **HIGH** — "Twenty-three days, six Cubs games, all passed, zero alerts." Strongest apology candidate. |
| **mark.murdock** | 23d | 0 | — | **HIGH** — Day-21 56h-carry. Day-30 in 7 days. |
| **awwhittington** | 23d | 0 | — | **HIGH** — Day-21 58h-carry. |
| **ggri73** | 23d | 0 | — | **HIGH** — Day-21 62h-carry. |
| **nmcnamee99** | 21d | 1 (passed) | passed | **HIGH** — Day-21 fires TODAY ~11:51 UTC. |
| **taranimeramaro** | 21d | 3 (Bruno MetLife Aug) | 97-101d | **HIGH** — Day-21 fires TODAY ~18:25 UTC. **Best target-setting candidate of the day** — 3 high-value events all without targets. |
| **lilianamasyrubi** | 18d | 0 | — | **HIGH** — Day-14 104h carry HARD EXPIRY. |
| **dr.altvater** | 26d | 0 | — | **MEDIUM** — Day-21 120h carry HARD EXPIRY. |
| **nicklib253** | 29d | 1 (Phillies passed) | passed | **MEDIUM** — Day-21 192h carry, apology-only. |
| **pete.uzelac77** | 36d | 6 (WC + Darts) | 35-50d | **MEDIUM** — Day-30 144h carry HARD EXPIRY. WC content hook still viable. |
| dylanbaldy | 30d | 0 | — | LOW |
| **blubberboi** | 36d | 1 (Ed Sheeran Aug 8) | 84d | MEDIUM |
| **laye.aurelien** | 44d | 2 (Shakira Jul 20+23) | 65-68d | HIGH |
| **lvasub6** | 48d | 2 (Flyleaf Jul 17-18) | 62-63d | HIGH |
| **tosophiameyer** | 67d | 11 (Harry Styles MSG) | 100-124d | **HIGH** — 2nd-deepest watchlist in dataset. |
| **brigitte.theisen** | 80d | 10 (Backstreet Sphere) | 62-82d | **HIGH** — deepest non-test watchlist. |

**Passed-event overhang: 16 churned/at-risk users with passed events or no immediate hook. Inter Miami May 17 becomes #17 Sunday if T-1d misses tonight.**

## Churn intervention: email content (queued for engine return)

### TODAY's natural fire windows (in order of upcoming)

#### **c_calingasan Day-3 — fires ~11:46 UTC TODAY (~46min from report)**

**Subject:** What event made you sign up for TicketScan?
**Body:**
> Three days ago you signed up for TicketScan. You haven't added an event yet, so we can't track anything for you. Tell us one event you're curious about — concerts, sports, theater — and we'll set up tracking in 30 seconds.
>
> Reply with the event name, or [browse events](https://www.ticketscan.io).

---

#### **nmcnamee99 Day-21 — fires ~11:51 UTC TODAY (~51min from report)**

**Subject:** Three weeks in. We owe you an apology.
**Body:**
> Three weeks ago you added Toronto Raptors vs Cleveland Cavaliers to your watchlist. The match was April 26 — almost a month ago — and we never sent you a price update.
>
> That's a failure on our end. The price-alert engine that should have emailed you when StubHub or SeatGeek dropped below your target was offline. We're fixing it.
>
> What we owe you: a second chance. Add one event for the next month — playoffs, summer concerts, your team's road games. We'll be the first to email when prices move.
>
> [Add an event](https://www.ticketscan.io)

---

#### **jmoriarty Day-7 — fires ~13:18 UTC TODAY (~2h18m from report)**

**Subject:** A week in. What did you come here for?
**Body:**
> A week ago you signed up for TicketScan. You haven't added an event yet — that's normal, most people sign up before a specific event clicks. Tell us one you're considering. We'll set the watchlist for you.
>
> [Browse events](https://www.ticketscan.io)

---

#### **taranimeramaro Day-21 — fires ~18:25 UTC TODAY (~7h25m from report) — HIGH-VALUE TARGET-SETTING CANDIDATE**

**Subject:** 3 Bruno Mars dates tracked. 0 target prices. Let's fix that.
**Body:**
> Three weeks ago you added all three Bruno Mars MetLife Stadium nights (Aug 21, 22, 25) to TicketScan. You haven't set a target price on any of them.
>
> Without a target, we can't email you when Ticketmaster, SeatGeek, or StubHub drops below your number. Bruno Mars stadium shows typically swing $120-300 per ticket between sources in the 2-4 weeks before the show — that's the window where target alerts pay off most.
>
> Takes 30 seconds per show. [Set targets](https://www.ticketscan.io/watchlist).

---

#### **josh AEW T-7d — fires ~20:30 UTC TONIGHT (~9h30m from report) — FIRST AEW FLIP**

**Subject:** AEW Double or Nothing is a week away — prices usually drop now
**Body:**
> AEW Double or Nothing is May 24 — a week from tonight. T-7 is the window where most resale inventory starts to soften — sellers see the clock ticking and float prices down to move inventory.
>
> You added this event 27 days ago and we've sent you nothing. That's on us. Here's the live comparison across Ticketmaster, SeatGeek, and StubHub right now:
>
> [Compare AEW prices](https://www.ticketscan.io)

---

#### **jadbennis Inter Miami T-1d — fires ~20:33 UTC TONIGHT (~9h33m from report) — FINAL FLIP THRESHOLD BEFORE SUNDAY**

**Subject:** Inter Miami is tomorrow — last price-drop window
**Body:**
> Inter Miami CF vs Portland Timbers is tomorrow. T-1 is when resale prices typically capitulate — sellers who haven't moved their inventory drop 20-40% to clear it in the final 24 hours.
>
> [Compare Inter Miami prices now](https://www.ticketscan.io)

---

#### **emma Day-7 — fires ~21:54 UTC TONIGHT (~10h54m from report)**

**Subject:** A week in. What event would change your mind?
**Body:**
> A week ago you signed up for TicketScan. You haven't tracked an event yet — that's normal. Tell us one event you're curious about. We'll set the watchlist for you.

---

### MANUAL SENDS RECOMMENDED TODAY (no schedule entry)

#### **kevinshall Day-4 carry — Day-3 missed yesterday, 18h-carry — PRIORITY #1**

**Subject:** 6 events tracked. 0 target prices. 2 minutes to fix it.
**Body:**
> Four days ago you added 6 events to TicketScan in 3 minutes — five World Cup matches at AT&T Stadium plus Matt Rife. Deepest first-session watchlist in our records.
>
> What's missing: target prices. Without them, we can't email you when Ticketmaster, SeatGeek, or StubHub drops below your number. World Cup matches at AT&T tend to swing $80-200 between source-floors as the tournament approaches — set a target on each and we'll watch all three sources.
>
> [Set targets on your watchlist](https://www.ticketscan.io/watchlist)

---

#### **karin Day-2 manual — schedule gap (Day-1 entry doesn't exist)**

**Subject:** 2 World Cup matches tracked — let's set targets so we can email you
**Body:**
> Two days ago you added two World Cup matches: Switzerland vs Canada (June 24, Group B) and Round of 16 Match 96 (July 7). World Cup resale prices typically swing 30-50% between Ticketmaster, SeatGeek, and StubHub in the weeks before kickoff.
>
> Set a target price on each match and we'll email you the second any source drops below it.
>
> [Set targets](https://www.ticketscan.io/watchlist)

---

#### **pattyglvz Day-4 carry — Day-3 missed yesterday, 20h-carry**

Same body as c_calingasan above, light tense adjustment ("Four days ago...").

---

#### **vlanza Day-2 / nunemakerc Day-1 — schedule gap, fresh inerts**

Recommend a 2-line "what brought you here" probe. Defer to Day-3 natural fires if they trigger by then.

---

### CARRIES (24-168h delayed, send today as batch)

#### **5-USER DAY-23 CARRY BATCH** (charlesteel + ggri + aw + ajv + mark — Day-21 missed May 13-14)

Body: **"Three weeks and a day ago you signed up for TicketScan..."** Apology lead: "Two days ago a new signup added 2 World Cup matches in 12 seconds. Four days ago another added 6 events in 3 minutes. Three weeks ago — that's you. We've sent you nothing." [ajvanprooyen variant retains Cubs apology lead. charlesteel variant adds Bruno T-3d miss apology.] **Send today as 1 batch send.**

#### **DR.ALTVATER DAY-26 — Day-21 120h HARD EXPIRY**

Body must rewrite to: **"Almost four weeks ago you signed up. Our welcome flow was broken — you should have heard from us at three weeks. We're sorry."** German variant.

#### **PETE DAY-36 — Day-30 144h HARD EXPIRY**

Body: **"More than a month in — five weeks, six tracked events (5 WC + 1 Darts), zero alerts."** Day-30 family is over for pete.

#### **NICKLIB DAY-29 — Day-21 192H, FAR PAST EXPIRY**

Body: **"Four weeks and a day ago you added Phillies vs Braves. Match has been over for 29 days — we never sent a price update."** Apology-only.

#### **LILIANA DAY-18 + ZHILI DAY-17 — Day-14 104h + 80h carries**

Bodies: "Two weeks and four/three days in." Apology + curiosity hook. Liliana at 104h is past parse-edge → reframe to **"Almost three weeks in."**

#### **JOSEPH DAY-12 — Day-7 120H HARD EXPIRY**

Body: **"Almost two weeks in. What event were you hoping to track?"** Day-7 family expired.

#### **CJTHOMAS / SPARKIT / NATALIE / LIAMBOT / JFGALZIN / KEVINKID — Day-7+ reframes**

5 users in 5 Day-7 carry frames between 22h (jfgalzin) and 168h (cjthomas). Standard Day-7 body parses cleanly for the first three (under 96h). cjthomas / sparkit / natalie need **"A week and X days ago..."** rewrites with appropriate event hooks (cjthomas: Noah Kahan T-27d; sparkit: Mac DeMarco passed; natalie: no event yet).

---

### TODAY's total queue if engine returns: **26-30 emails** — new record (was 24-28 yesterday)

- 7 today-natural fires (c_calingasan Day-3 / nmcnamee Day-21 / jmoriarty Day-7 / taranimeramaro Day-21 / josh AEW T-7d / jadbennis Inter Miami T-1d / emma Day-7)
- 5-user Day-23 carry batch (Day-21 missed May 13-14)
- 4 high-priority manual sends (kevinshall Day-4 power-user / karin Day-2 / pattyglvz Day-4 / vlanza Day-2)
- 1 manual for nunemakerc Day-1
- 4 individual hard-expiry rewrites (pete Day-36 / nicklib Day-29 / dr.altvater Day-26 / liliana Day-18)
- 2 Day-14 carries (zhili 80h, liliana now reframed)
- 1 Day-12 reframe (joseph)
- 6 Day-7+ reframes (cjthomas / sparkit / natalie / liambot / jfgalzin / kevinkid)

**= 26-30 emails to clear in 36-48h. New record queue.**

---

## Psychology-driven micro-optimization (today)

**Principle:** **Loss aversion** (Kahneman & Tversky, 1979) — applied to the empty-state of the watchlist page for users who already have items tracked but no target prices set.

**Where to apply:** The watchlist page itself (`/watchlist`) when displaying tracked events without target_price set. Specifically the empty-target-state per event row.

**The diagnosis:**
- **97/97 watchlist items have target_price = null. 0% target capture, Day 40.**
- Yesterday's recommendation (commitment-consistency two-step add modal) addresses *future* watchlist additions — defaults a target into the add flow.
- **But it doesn't solve the 97 existing null-target items**, which include the 8 added by the two WC power-users (kevinshall + karin) — exactly the highest-value cohort we have. Even if the two-step modal ships tomorrow, those 8 items remain at target=null unless we get the existing users to set targets on items they've already added.
- The May 7 target-price banner (carried CRO ask, Day 9) is the loss-aversion fix for existing items — but it's been described abstractly. Today's recommendation **sharpens the loss-aversion frame to a specific, measurable price-drop-they-missed prompt per row.**

**The pattern:** Kahneman-Tversky's prospect theory shows people feel losses ~2x as strongly as equivalent gains. A user who sees "you could have paid $X less" feels a sharper pull than "set a target to potentially save $Y." The current watchlist page (per the dashboard wireframes we've reviewed) shows event info without any per-row target prompt. **Most users don't even know they need to set a target.** A loss-framed per-row banner makes the missing target feel like an active cost, not a passive omission.

**Specific change:** Per-row inline loss-aversion banner on every watchlist item without a target price set.

```
Current row state (target_price = null):
┌─────────────────────────────────────────────────────────────┐
│ World Cup: Match 11 Group F — Netherlands vs Japan         │
│ June 14, 2026 • AT&T Stadium                                │
│                                                              │
│ Current: $385 low / $410 avg / $480 high                    │
│ [ View comparison ]                                          │
└─────────────────────────────────────────────────────────────┘

New row state (target_price = null) — loss-framed:
┌─────────────────────────────────────────────────────────────┐
│ World Cup: Match 11 Group F — Netherlands vs Japan         │
│ June 14, 2026 • AT&T Stadium                                │
│                                                              │
│ Current: $385 low / $410 avg / $480 high                    │
│                                                              │
│ ⚠ No target set                                              │
│ Prices on this event have dropped $XX in the last 7 days.  │
│ You weren't notified.                                       │
│                                                              │
│ [ Set target ($308 — 80% of current low) ]  skip            │
└─────────────────────────────────────────────────────────────┘
```

**Why this works:**

1. **"You weren't notified" is the loss frame in concrete terms.** It quantifies the specific opportunity the user missed — for items where price_history has actual drops, this writes itself. For items with no price drops yet, the banner reads "We're watching — set a target and we'll email you the moment any source drops below it" (forward-looking gain frame, since there's no loss to quantify).

2. **The one-click default ("$308 — 80% of current low") combines loss aversion with default effect.** Per yesterday's commitment-consistency analysis, default acceptance rates run 60-80%. **Even at 50% acceptance across 97 items = 48 actionable targets.**

3. **The "skip" link is a small text concession, not a button.** Same Cialdini principle as yesterday's add-modal fix — keeps the path-of-least-resistance pointed at "set target."

4. **It compounds with the two-step add modal.** New adds get default targets (yesterday's fix). Existing 97 items get loss-framed per-row prompts (today's fix). Together they push the target capture rate from 0% toward 50-70% across the entire watchlist surface.

5. **Highest dollar-leverage on the two power-users.** kevinshall's 6 events + karin's 2 events = 8 items with the deepest engagement signal in the dataset. If 4 of 8 power-user targets get set via this banner, the price-alert engine has its first real cohort to alert against the moment it returns.

**Quantitative target:** **Move existing-item target capture from 0% → 30% within 1 week of shipping** (40% within 2 weeks). Combined with the two-step add modal (yesterday's fix), the full target-capture surface should reach **50%+ within 3 weeks of both shipping.**

**Implementation cost:** ~3-4h. Frontend: per-row banner component (~1.5h), default pre-fill logic from existing price data (~1h, reuses logic from yesterday's modal recommendation), loss-frame copy with conditional gain-frame fallback (~30min), styling (~1h).

**Cross-agent route:** **CRO Agent (Agent 6)** to scope/implement. **The full CRO activation stack now expands to 8 fixes:**
1. (May 7) Loss-aversion target-price banner — generic. **Now sharpened by today's per-row loss-framed banner spec.** Marked superseded by today's #8.
2. (May 8) Default-effect smart pre-fill on watchlist-add modal. ~3-4h.
3. (May 9) FOMO "Happening soon" rail on search results. ~5-6h.
4. (May 11) Loss-frame empty-state on dashboard. ~5h.
5. (May 12) Commitment-and-consistency "Watch for 24h — no signup" pre-signup CTA. ~8-10h.
6. (May 13) Social-proof rail on WC stadium pages. ~3h.
7. (May 15) Commitment-consistency two-step add modal with default target pre-fill. ~5h.
8. **(TODAY May 16) Loss-aversion per-row target prompt on watchlist page with default pre-fill.** ~3-4h. **Supersedes the generic May 7 banner ask.**

**Combined: ~32-37h** (subtracting the superseded May 7 ask). **Combined coverage: pre-signup (1-click watch) → search-surface (FOMO time-decay) → WC stadium pages (social proof) → empty-state (loss frame) → add-flow (default target capture) → existing-items recovery (per-row loss-framed target prompt, TODAY's fix).** **Full funnel coverage from VISIT through retention with target capture at every step.**

**Today's fix is the lowest-cost / highest-coverage of the stack** — fastest to ship (~3-4h), addresses the 97 existing items, and directly enables the price-alert engine's first real cohort of triggers. **Recommended shipping sequence: today's loss-frame row banner first → then yesterday's two-step add modal → then the rest.**

---

## Cross-agent dependencies

1. **→ Email Agent (Agent 5):** **26-30 EMAILS QUEUED — new record-largest queue (was 24-28 yesterday). If engine returns today:**
   - **TODAY (7 natural fires):** c_calingasan Day-3 (~11:46 UTC) / nmcnamee99 Day-21 (~11:51 UTC) / jmoriarty Day-7 (~13:18 UTC) / taranimeramaro Day-21 (~18:25 UTC, **best target-setting candidate of day**) / josh AEW T-7d (~20:30 UTC, **first AEW flip threshold**) / jadbennis Inter Miami T-1d (~20:33 UTC, **FINAL flip threshold before Sunday**) / emma Day-7 (~21:54 UTC)
   - **TODAY (manual sends, priority order):** (1) kevinshall Day-4 carry [highest-EV recovery in dataset] → (2) karin Day-2 manual [2nd power-user, schedule gap] → (3) pattyglvz Day-4 carry → (4) vlanza Day-2 → (5) nunemakerc Day-1
   - **TODAY (carry batches):** 5-user Day-23 (charlesteel/ggri/aw/ajv/mark) + 4 hard-expiry rewrites (pete Day-36/nicklib Day-29/dr.altvater Day-26/liliana Day-18) + 2 Day-14 carries (zhili/liliana reframed) + 1 Day-12 (joseph) + 6 Day-7+ reframes (cjthomas/sparkit/natalie/liambot/jfgalzin/kevinkid)
   - **CARRIED + COMPOUNDED Day 11: Day-1 schedule addition.** Both power-users in dataset (kevinshall + karin) had Day-1 boundary miss because schedule entry doesn't exist. **3 of 6 recovery-cohort signups would have benefited from Day-1 touch (karin / vlanza / nunemakerc). Day-1 is now the single highest-ROI schedule addition in the system.**
   - **HIGHEST-EV send today: jadbennis Inter Miami T-1d at 20:33 UTC** (Sunday kickoff) **or** **josh AEW T-7d at 20:30 UTC** (first AEW threshold, deeper apology owed) — both fire in the same 3-minute window.

2. **→ CRO Agent (Agent 6):** **EIGHT stacked high-leverage fixes — full activation stack now spans VISIT through RETENTION with full target-capture coverage:**
   - **TODAY: Loss-aversion per-row target prompt on watchlist page with default pre-fill** — addresses the 97 existing null-target items (kevinshall's 6 + karin's 2 included). **~3-4h. Lowest-cost / highest-coverage fix in stack.**
   - Prior 7 fixes still open. **Recommended ship order if work-bandwidth-constrained:** (1) **today's per-row loss banner [3-4h, fixes existing 97 items]** → (2) yesterday's two-step add modal [5h, fixes future adds] → (3) social-proof rail on WC pages [3h, amplifies WC PMF] → (4) others.
   - **The May 7 generic target-price banner ask is now superseded by today's per-row loss-framed version. Mark complete-as-evolved.**

3. **→ Ads Agent (Agent 4):** **DAY 23 OF ATTRIBUTION DEPENDENCY. The 120h-window dataset is now 6 signups with hardened internal bifurcation:**
   - **2 WC power-users** (kevinshall + karin) — both unknown-source.
   - **4 inert signups** (pattyglvz / c_calingasan / vlanza / nunemakerc) — all unknown-source.
   - **Same-cohort 6-user split (2 power vs 4 inert in 5 days, 33% power-user rate) is the highest-resolution attribution dataset in project history.** If channel data resolves for any 3 of 6, we get the first concrete attribution comparison.
   - **Critical question: does one channel produce both kinds (intent variance), or do different channels produce them (channel-quality bifurcation)?** With a 33% power-user rate sustained over 5 days, the WC PMF signal is real — but we can't scale acquisition without knowing which lever to pull.

4. **→ Content Agent (Agent 3):** **WORLD CUP CONTENT — Day 3 of WC PMF signal. Power-user pattern (kevinshall + karin) holds.**
   - **AT&T Stadium WC fan guide** (kevinshall's intent surface) — Day 3 carried ask.
   - **WC R16 / Bracket-tracking explainer** (karin's R16 Match 96 add) — Day 2 carried ask.
   - **Recommended content priorities reordered today:**
     1. **AEW Double or Nothing T-7d explainer** — josh's T-7d fires tonight; companion content on the AEW resale pattern would compound the alert if engine returns.
     2. **Inter Miami CF vs Portland T-1d explainer** — Sunday match, T-1 capitulation pattern article would compound jadbennis's alert.
     3. **AT&T Stadium WC fan guide** (Day 3 carry).
     4. **WC bracket-tracking explainer** (Day 2 carry).
   - Carried signals still unaddressed: Mac DeMarco / Noah Kahan / Matt Rife / Bruno Mars (with the Ohio T-3d miss today adding urgency).

5. **→ Engineering / Drip-Engine:** **Day 40 of outage. New on-schedule fires missed in 24h:**
   - jfgalzin / liambot / pattyglvz / kevinshall / kevinkid (5 fires May 15)
   - charlesteel Bruno T-3d (May 16 ~11:38 UTC, 22min ago — **9th confirmed closed-out flip failure**)
   - **Total May 10-16 natural fire misses confirmed: 30+. Same-day queue if engine returns today: 26-30 emails in 36-48h.**
   - **Tonight's 20:30-20:33 UTC window is the highest-leverage fire window of the entire outage** — 2 flip thresholds in 3 minutes (josh AEW T-7d + jadbennis Inter Miami T-1d). Engine status at 20:30 UTC tonight = single-most-decisive moment of Q2.
   - **CARRIED ASK Day 11: Day-1 schedule addition.** With 3 of 6 recovery-cohort signups never getting a Day-1 touch (karin + vlanza + nunemakerc), the structural cost compounds daily.
   - **CARRIED ASK Day 2: hard-expiry rewrite logic / carry-cap trigger** — 4 carries now at hard expiry (pete Day-30, nicklib Day-21, dr.altvater Day-21, liliana Day-14), 1 more (josh Day-21) suppressed by tonight's AEW T-7d fire.

6. **→ All agents:** **THE RECOVERY HOLDS BUT THE WATCHLIST DOESN'T.** 6 signups in 5 days = 1.2/day sustained (vs <0.3/day pre-burst). But **watchlist items 48h flat at 97** — the new cohort is signing up and walking away. **Today's CRO recommendation (per-row loss-framed target banner) is the cheapest available recovery for the 97 existing items.** **Tonight's 20:30-20:33 UTC fire window is the highest-leverage engine-return moment of the outage.** **The 33% power-user rate in the recovery cohort holds — kevinshall + karin still the only two, but the denominator grows faster than the numerator, so the WC PMF signal is statistically sharper without being directionally weaker.**

---

## Summary metrics

```
Total users:              80 (+1 over 24h, nunemakerc inert — recovery sustains at 1.2/day over 5 days)
Real users:               77
Activated:                50 (=0 over 24h, 48h flat at 50)
Activation rate:          64.9% (real, −0.9pp 24h — nunemakerc inert denominator drag)
Watchlist items:          97 (=0 over 24h, 48h FLAT — first 48h-flat window in recovery)
Newsletter subscribers:   3 (104 DAYS FLAT — 14 weeks + 6 days)
Active alerts:            0 (Day 40)
Triggered alerts:         0 (lifetime)
Drip emails sent:         0 (Day 40 — /api/admin/drip-stats: stats=[])
Cumulative passed-no-notify: 16 (Inter Miami #17 if T-1d misses tonight)
Algo-flip-quiet streak:   16 days (Bruno T-3d closed-out 22min ago = 9th total flip failure, 3rd non-Cubs)
Activation gap (real):    23/77 = 29.9% (+1.0pp; nunemakerc inert add)
Unknown-source activation: 6/21 = 28.6% (−1.4pp; nunemakerc inert)
Day-23 cohort:            5 users (charlesteel/ggri/aw/ajv/mark) — rolled forward
Day-21 fires today:       2 (taranimeramaro 18:25 UTC + nmcnamee99 11:51 UTC)
Instant-power-users:      2 (kevinshall + karin) — pattern N=2 holds, 5 days
Recovery-cohort power rate: 2/6 = 33% (was 40%; statistically sharper, directionally same)
WC PMF signal:            27 days to kickoff (June 11); 2 WC power-users hold
Target-price capture:     0/97 watchlist items = 0% (Day 40; kevinshall's 6 + karin's 2 still null)
Post-burst signups:       6/120h (kevinshall + pattyglvz + c_calingasan + karin + vlanza + nunemakerc)
Sustained recovery rate:  1.2/day over 5 days (vs <0.3/day pre-burst, 0/day flat window)
Highest-EV fire today:    jadbennis Inter Miami T-1d ~20:33 UTC (final threshold before Sunday)
2nd-highest fire today:   josh AEW T-7d ~20:30 UTC (first AEW threshold, co-fires 3min before)
Highest-EV manual today:  kevinshall Day-4 power-user (Day-3 missed yesterday, 18h-carry)
Closed-out fire families: 9/9 — Day-1 (schedule gap, never existed) / Day-3 / Day-7 / Day-14 / Day-21 (now 7-user batch) / Day-30 (HARD EXPIRY) / Cubs algo-flip / non-Cubs algo-flip (NEW: Bruno T-3d today) / Inter Miami algo-flip
```

**Headline:** Nunemakerc is the 6th inert signup in the 5-day recovery cohort (2 power-users + 4 inerts = stable 33% power-user yield). **Watchlist items 48h flat at 97 — the recovery is leaking between signup and first-add.** kevinshall's Day-3 fire passed yesterday without a send (highest-EV miss of the 40-day outage); **charlesteel Bruno Ohio T-3d missed 22 minutes ago** (9th total flip failure, 3rd non-Cubs). **Tonight's 20:30-20:33 UTC window is the highest-leverage fire window of the entire outage** — josh AEW T-7d (first AEW threshold) + jadbennis Inter Miami T-1d (final threshold before Sunday kickoff) co-fire in 3 minutes. If engine returns by 20:30 tonight, both fire and the day is saved; if it returns at 20:34, both miss by minutes and Inter Miami becomes passed-event #17 Sunday morning. **Today's CRO recommendation: per-row loss-framed target prompt on watchlist page with default pre-fill (~3-4h)** — addresses all 97 existing null-target items, supersedes the May 7 generic banner ask, complements yesterday's two-step add modal. **8-fix CRO stack now totals ~32-37h for full-funnel coverage VISIT → ACTIVATION → RETENTION with full target-capture surface.** 5-of-6 dimensions still structurally locked behind engine-dark constraint at Day 40.
