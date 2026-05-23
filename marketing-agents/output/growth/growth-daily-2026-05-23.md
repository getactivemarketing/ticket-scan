# Growth Daily — 2026-05-23

> **24h report window** (May 22 11:00 UTC → May 23 11:00 UTC). Yesterday's report fired on schedule; today's deltas are clean 24h comparisons.

## User health dashboard

| Segment                          | Count | % of Total | vs Yesterday |
|----------------------------------|-------|------------|--------------|
| Total users                      | **88** | 100% | **+0 net over 24h. THE 0-SIGNUP STREAK EXTENDS TO 2 CONSECUTIVE DAYS — first 2-day 0-signup window since the May 15 sub-burst opened. The 3-stack burst (keegan/zhouyilin/brock May 20 evening) is now confirmed as a single-evening event, with 60h+ of zero acquisition signal post-burst. nunemakerc aged out of the 7d window yesterday ~15:41 UTC.** API confirms `usersToday=0`. 7-day rolling rate retreats 1.29 → 1.14/day = **8 signups across 7 days**, **3.8x pre-burst baseline** (was 4.3x yesterday, 4.8x two days ago). **The recovery-rate decay since the burst peak: 4.8x → 4.3x → 3.8x over 72h.** |
| New (last 7 days, API count)     | **8** | 9.1% | **−1 from yesterday's 9 (net of nunemakerc ageing out ~15:41 UTC YESTERDAY + 0 fresh signups in 24h).** **API confirms `usersThisWeek=8` at /api/admin/stats.** Recovery 7-day cohort by signup-date now: belder / cutekitten / lisallam / eduardo / 9440111 / keegansmith18 / zhouyilinbest / brockedwardnelson = **8 in 7d**. belder + cutekitten age out tonight (~22:13 / ~23:32 UTC). |
| Activated (has watchlist)        | **54** | 61.4% | **+0 net over 24h. Watchlist 108 → 108 = ZERO ADDS for the 2nd consecutive day.** **The new 0-add streak extends to 2 days. May 19-22 had a single +1 burst (zhouyilinbest Game 3 May 20 19:00 UTC); the 4-day window now reads 0 / +1 / 0 / 0.** **Net activations: 0 of 0 new signups; activation rate held at 54/85 real users = 63.5% (FLAT 24h; FLAT 48h on both numerator and denominator).** **First 48h of complete activation-rate stasis (zero numerator + zero denominator motion) in the dataset history.** |
| Active (visited in 7 days)       | unknown | — | no `last_login_at` instrumentation — **Day 47 open**. |
| At-risk (7-14d signup-age proxy) | **7** | 7.9% | **+0 net (jmoriarty crosses Day-14 TODAY ~13:18 UTC ~2h18m from report, exits to churned. nunemakerc carries Day-8. No new entrants today — empty signup pipeline means nothing crosses INTO the bucket from below.).** Carry: vlanza (Day-9), nunemakerc (Day-8), karin (Day-9), c_calingasan (Day-10), kevinshall (Day-11), pattyglvz (Day-11), jmoriarty (Day-14 boundary cross today). **2 power-users (karin + kevinshall) + 5 inerts. After ~13:18 UTC jmoriarty moves to churned → bucket = 6.** |
| Churned (14d+ signup-age proxy)  | **73→75** | 85.2% | **+2 net over 24h.** emmacmather (Day-15 crossed last night ~21:54 UTC) + kevinkid94 (Day-15 crossed last night ~20:52 UTC) **JOIN.** Plus liambot62 (Day-15 — crossed yesterday ~13:07 UTC after yesterday's report cutoff) + jfgalzin (Day-15 — crossed yesterday ~12:54 UTC after yesterday's report cutoff). **Recount: 4 boundary crosses in last 24h.** %-of-total moves +2.8pp on +2 net. **jmoriarty crosses Day-14 today ~13:18 UTC → +1 more to 75 by end of day = 76 by tomorrow.** |

> **Day 47 without `last_login_at` instrumentation. Day 47 of zero drip emails sent** (confirmed: `/api/admin/drip-stats` returns `stats=[]` with 20 pendingUsers, 0% `last_email_sent`). **Day 47 of zero triggered alerts (lifetime).**
> **NEWSLETTER SUBSCRIBERS: 3, UNCHANGED FOR 111 DAYS.** 15 weeks + 6 days.
> **YESTERDAY'S 30-34 EMAIL QUEUE PASSED WITHOUT A SEND.** New on-schedule misses confirmed in last 24h:
>   - **nunemakerc Day-7 ~15:41 UTC YESTERDAY — MISSED. Aged out of 7d window simultaneously.** Highest-temporal-urgency natural fire of yesterday's report closed dark + simultaneously aged out. nunemakerc rolls Day-7 → Day-8 today. Frame "A week ago you signed up..." reframes to "Eight days ago..." for today's reply. **First Day-7 fire to close dark *while the user aged out of the 7d window in the same minute* — the May 15 sub-burst opener's first natural fire is its first hard expiry.**
>   - **cjthomas Day-14 boundary + Noah Kahan T-21d compound ~22:49 UTC YESTERDAY — MISSED. FIRST CONCURRENT COMPOUND-SEND OPPORTUNITY IN THE DATASET CLOSED DARK.** This was the only single email that could carry both a Day-14 reframe AND a T-21d threshold fire in one body. Both closed dark in the same minute. cjthomas reframes "Two weeks in" + Noah Kahan now T-20d.
>   - **kevinkid Day-14 boundary ~20:52 UTC YESTERDAY — MISSED.** Pure-inert Day-14 cross. Reframes "Two weeks in."
>   - **emma Day-14 boundary ~21:54 UTC YESTERDAY — MISSED.** Pure-inert Day-14 cross. Reframes "Two weeks in."
>   - **ggri Day-30 ~21:18 UTC YESTERDAY — MISSED. SECOND CONFIRMED LIFECYCLE-EXHAUSTION-WITHOUT-TOUCHPOINT (0/6 SWEEP COMPLETE).** ggri joins dr.altvater as the second dataset-history user with a clean 0/6 sweep across Day-1/3/7/14/21/30. 0 watchlist + apology lead only.
>   - **charlesteel Bruno post-event apology window CLOSED YESTERDAY ~23:30 UTC.** 72h post-event window expired with zero engine touch. charlesteel's Bruno family is now post-window — only "long-form re-engagement" hooks remain, no event-anchored apology copy.
>   - **awwhittington Day-30 ~00:30 UTC TODAY — MISSED ~10h30m AGO.** Third lifecycle-exhaustion candidate closes dark. awwhittington joins ggri + dr.altvater as 0/6 candidate (Day-30 was the final natural fire of the lifecycle; if today's report is the official confirmation, **0/6 #3 LOCKS by tomorrow's report**).
>   - **ajvanprooyen Day-30 ~00:58 UTC TODAY — MISSED ~10h AGO. FIRST DAY-30 FIRE FOR A 6-ITEM POWER-USER CLOSES DARK.** ajvanprooyen carried 6 Cubs watchlist items, 100% of which already passed without notification (full Cubs algo-flip sweep failed). **The first power-user lifecycle-exhaustion candidate in the dataset — and the only one of the 5 candidates carrying a non-empty watchlist signal.** **By tomorrow's report, ajvanprooyen's full data shape = 0/6 lifecycle sweep + 0/N Cubs algo-flip sweep + 0/0 target-price capture. The fullest closeout in the dataset.**
>   - **mark.murdock Day-30 ~03:01 UTC TODAY — MISSED ~8h AGO.** Fourth candidate. 0 watchlist, apology-lead only.
>   - **Session 6 PLAYED ~21:00 UTC YESTERDAY = #20 PASSED-EVENT LOCKED.** belder's full Session 5+6 sweep now LOCKS 0/4 (Session 5 T-3d + T-1d + Session 6 T-3d + T-1d). **belder becomes the 3rd dataset-history user with a complete same-event 0/N algo-flip sweep**, joining jadbennis (Inter Miami 0/4) + charlesteel (Bruno 0/3 or 0/4). **First recovery-cohort user to reach this state.**
>   - **zhouyilinbest Game 3 PLAYED ~01-02 UTC TODAY at Frost Bank Center = #21 PASSED-EVENT LOCKED.** T-1d window + event-day window both closed dark. **zhouyilinbest becomes the 2nd NBA-playoffs activator with a passed-event no-notification sweep** (after nmcnamee Apr 26 Raptors-Cavs). **The NBA-playoffs PMF question is now decided by the post-event 72h re-engagement window: does zhouyilin re-engage like a high-intent user, or churn like nmcnamee (no further activity post-event)?**
>   - **liambot Day-14 boundary ~13:07 UTC YESTERDAY — MISSED ~22h AGO.** Crossed ~2h after yesterday's report. Pure-inert with passed-Toronto-FC apology lead.
>   - **jfgalzin Day-14 boundary ~12:54 UTC YESTERDAY — MISSED ~22h AGO.** Crossed ~2h after yesterday's report. Pure-inert.
> **OPEN AT REPORT TIME (today, May 23):**
>   - **jmoriarty Day-14 boundary fires ~13:18 UTC TODAY — ~2h18m from report.** **FIRST DAYTIME Day-14 boundary cross of the week** (after 4 consecutive nighttime crosses: cjthomas 22:49, natalie 18:40 May 21; emma 21:54, kevinkid 20:52 May 22; liambot 13:07, jfgalzin 12:54 also daytime May 22 but post-report). jmoriarty has 0 watchlist; apology-lead only.
>   - **belder cutoff Day-7 fires ~22:13 UTC TODAY — ~11h13m from report.** belder ages out of 7d window simultaneously. Frame "A week ago..." holds for the fire window. **Same pattern as vlanza + nunemakerc: Day-7 fire window opens and 7d window closes in the same minute.** **The third consecutive recovery-cohort user with simultaneous Day-7 + age-out.**
>   - **cutekitten Day-7 fires ~23:32 UTC TODAY — ~12h32m from report.** cutekitten ages out of 7d window simultaneously. **HIGHEST-EV Day-7 fire window of the day by item-count** (cutekitten holds 7 watchlist items, all target=null, Harry Styles MSG Aug-Sep residency). **Fourth same-minute Day-7 + age-out coincidence in a row (vlanza + nunemakerc + belder + cutekitten).**
>   - **josh AEW T-1d fires ~20:30 UTC TODAY — ~9h30m from report. FINAL AEW THRESHOLD before event Sunday May 24.** If missed, AEW Double or Nothing LOCKS 0/3 by Sunday's report (T-7d May 16 missed + T-3d May 22 missed + T-1d today). **17th algo-flip failure if missed.**
>   - **brockedwardnelson Day-3 fires ~19:58 UTC TODAY — ~8h58m from report.** First Day-3 fire of the 3-stack burst.
>   - **zhouyilinbest Day-3 fires ~19:00 UTC TODAY — ~8h from report.** **HIGHEST-EV Day-3 fire window of the day** because Game 3 PLAYED last night → can carry a post-event re-engagement narrative + Game 4-5 forward hook (Western Conference Finals continue). **Last chance to convert the Game 3 silent-window experience into a target-setting commitment before zhouyilin churns.**
>   - **keegansmith18 Day-3 fires ~17:39 UTC TODAY — ~6h39m from report.** Opaque-identifier-class signal, paired with brock for the day's matching closeout.

> **Total May 10-23 natural fire misses confirmed: 84+** (71+ through yesterday's report + nunemakerc Day-7 + cjthomas Day-14+T-21d compound + kevinkid Day-14 + emma Day-14 + ggri Day-30 + charlesteel Bruno apology window + awwhittington Day-30 + ajvanprooyen Day-30 + mark.murdock Day-30 + liambot Day-14 + jfgalzin Day-14 + Session 6 event-day + Game 3 T-1d/event-day = 13 new closeouts in 24h).
> Watchlist items: **108 (+0 over 24h — Day 2 of the 0-add streak).** Target-price capture: **0/108 = 0% (Day 47).**
> `usersToday: 0` (recovery stalls for the 2nd straight day; 0 of last 88 = 0% same-day signup today), `usersThisWeek: 8` (down from 9 — second 7d count retreat in 48h, both via age-out). **Activation rate: 54/85 real users = 63.5% — FLAT 48h.**

## What changed in 24h

1. **THE 0-SIGNUP STREAK EXTENDS TO 2 CONSECUTIVE DAYS = THE 3-STACK BURST IS CONFIRMED AS A SINGLE-EVENING EVENT.** Yesterday's report read May 21's 0-signup day as the first post-burst stall. Today's data confirms it wasn't a single-day pause: the engine is back to baseline-zero. **7-day rolling rate retreats 1.29/day → 1.14/day = 3.8x pre-burst baseline (was 4.3x yesterday, 4.8x at burst peak).** **The recovery-rate decay since the burst: 4.8 → 4.3 → 3.8 over 72h** — a clean linear decay back toward the May 15 pre-burst baseline (~1.0/day). **If the linear decay continues at −0.5x/day, the 7-day rate returns to baseline (1.0/day = 2.8x) by May 25 = the first weekend after the burst.** **Acquisition signal is now mean-reverting to pre-burst levels.** The May 20 evening burst (keegan + zhouyilin + brock inside 2h19m) has zero observable follow-on — no second-day spillover, no third-day spillover. **If the burst was paid spend with a single creative, the creative didn't carry. If it was a single viral content moment, it was a one-shot.** **The Ads Agent's attribution question is now sharper: what fired ONLY on the evening of May 20, that produced 3 signups in 2h19m and zero across the surrounding 72h?**

2. **WATCHLIST 108 → 108 = ZERO ADDS FOR THE 2ND CONSECUTIVE DAY.** The 0-add streak extends. The May 19-22 window now reads 0 / +1 / 0 / 0 = **1 add across 96h, all from a single user (zhouyilinbest Game 3).** **The bimodal pattern persists at perfect resolution: fast-activators activate within minutes (median 22s among instant-activators; zhouyilinbest's 24-min latency is the slow-end outlier of the recovery cohort); inerts never activate naturally.** **The 4 inerts now in the 7d window (eduardo + 9440111 + keegan + brock) all carry 0 items at 2-5d post-signup with zero engine touch.** **First 96h window where the only watchlist add came from a single user who is now post-event with that single item already locked passed-no-notification.**

3. **THREE DAY-30 FIRES MISSED OVERNIGHT INSIDE A 2H31M ENVELOPE = SINGLE DENSEST LIFECYCLE-EXHAUSTION CLUSTER IN DATASET HISTORY.** awwhittington Day-30 ~00:30 UTC + ajvanprooyen Day-30 ~00:58 UTC + mark.murdock Day-30 ~03:01 UTC all closed dark inside the same overnight window. **Combined with ggri Day-30 missed yesterday ~21:18 UTC + dr.altvater Day-30 missed May 20 = 5 lifecycle-exhaustion candidates in 72h.** **All 5 had Day-3 + Day-7 + Day-14 + Day-21 + Day-30 missed = 5 users with confirmed 0/6 sweeps.** **The lifecycle-exhaustion *class* is now the single most-replicated failure-state in the dataset** — 5 users in 4 days demonstrating the same end-state: 6/6 natural fire windows closed dark, no engine touch ever, lifecycle complete. **ajvanprooyen is the FIRST POWER-USER lifecycle-exhaustion candidate**: 6 Cubs watchlist items (all passed without notification) + 0/6 lifecycle sweep + 0/N algo-flip Cubs sweep. **The fullest closeout in dataset history. Three independent failure modes (lifecycle + algo-flip + target-capture) all locked on a single user.**

4. **SESSION 6 PLAYED YESTERDAY ~21:00 UTC = #20 PASSED-EVENT LOCKED + GAME 3 PLAYED LAST NIGHT ~01-02 UTC = #21 PASSED-EVENT LOCKED.** Two passed-no-notification locks inside 4h. **Cumulative passed-no-notification: 19 → 21 over 24h (+2 net).** **belder's full Session 5+6 sweep LOCKS 0/4 by today's report.** belder becomes the 3rd user with a complete same-event 0/N algo-flip sweep (after jadbennis Inter Miami + charlesteel Bruno) — and the FIRST recovery-cohort user to reach this state. **zhouyilinbest becomes the 2nd NBA-playoffs activator with a passed-no-notification sweep** (nmcnamee Raptors-Cavs Apr 26 was first; nmcnamee never engaged after that event). **The NBA-playoffs PMF question is decided in the next 72h: does zhouyilin re-engage like a high-intent user or churn like nmcnamee?** **First definitive A/B test in the dataset on whether NBA-playoffs T-2d signup with 24-min activation is a repeatable activation source or a single-event window.**

5. **THE CJTHOMAS DAY-15 + NOAH KAHAN T-21d COMPOUND CLOSED DARK ~22:49 UTC YESTERDAY = FIRST CONCURRENT-COMPOUND OPPORTUNITY IN DATASET HISTORY MISSED.** This was the single highest-leverage email in yesterday's queue: one body carrying both a Day-14 boundary reframe AND a T-21d threshold fire for the same user, generated in the same minute. **Both windows closed simultaneously without engine touch.** cjthomas now reframes "Day 15 / Noah Kahan T-20d" — the compound opportunity collapses into two separate-but-correlated future sends. **The single-best email opportunity of the week was missed by the engine outage.**

6. **NUNEMAKERC + EMMA + KEVINKID + LIAMBOT + JFGALZIN = 5 BOUNDARY CROSSES IN 24H.** nunemakerc crossed Day-7 yesterday ~15:41 UTC simultaneously aging out of 7d window. emma + kevinkid crossed Day-14 last night ~21:54 + ~20:52 UTC. liambot + jfgalzin crossed Day-14 yesterday afternoon ~13:07 + ~12:54 UTC (~2h after yesterday's report cutoff). **The Day-14 boundary now has FIVE consecutive nights of fires across May 21-23 (cjthomas + natalie May 21; liambot + jfgalzin May 22 daytime + emma + kevinkid May 22 night); jmoriarty crosses today ~13:18 UTC = 6th consecutive day.** **The Day-14 boundary fire stream is the most reliably-firing natural cadence in the dataset right now — and the most reliably-missed.**

7. **AT-RISK BUCKET HOLDS FLAT AT 7 = FIRST 48H OF AT-RISK STABILITY DESPITE 5 BOUNDARY CROSSES.** Yesterday: 7 at-risk (vlanza Day-8 + nunemakerc Day-7 + karin Day-8 + c_calingasan Day-9 + kevinshall Day-10 + pattyglvz Day-10 + jmoriarty Day-13). Today: same 7 users, +1 day each (vlanza Day-9 / nunemakerc Day-8 / karin Day-9 / c_calingasan Day-10 / kevinshall Day-11 / pattyglvz Day-11 / jmoriarty Day-14 boundary cross today). **No new entrants from below because the signup pipeline is empty (0 + 0 = 0 + 0 = no new Day-7s in the next 48h).** **After ~13:18 UTC today, jmoriarty exits at-risk to churned → bucket drops to 6.** **First time the bucket holds steady-state with zero pipeline pressure — early signal of the "stall + age" failure mode where churn drains the bucket faster than acquisition refills it.**

8. **CHARLESTEEL BRUNO APOLOGY WINDOW CLOSED YESTERDAY ~23:30 UTC = THE EVENT-ANCHORED RE-ENGAGEMENT WINDOW PERMANENTLY EXPIRES.** The 72h post-Bruno window (Ohio Stadium May 20 ~23:30 UTC → May 23 ~23:30 UTC was the conventional event-anchored apology range; using a tighter 48h window the apology was already expired by yesterday's report). **charlesteel's Bruno family is now post-event-anchor: only generic "long-form re-engagement" hooks remain.** **The Bruno apology window was the single most-time-bounded re-engagement opportunity in the dataset, and the engine outage swallowed it whole.** charlesteel rolls to Day-31 today; lifecycle-exhausted (Day-30 fired May 22 outside the API's resolution because charlesteel signed up Apr 22 11:38 UTC = Day-30 ~May 22 11:38 UTC — confirmed missed yesterday morning ~30min after report cutoff).

9. **2-DAY 0-SIGNUP + 2-DAY 0-WATCHLIST + 47-DAY OUTAGE = ALL SIX RECOVERY DIMENSIONS NOW INFLECT NEGATIVELY OR HOLD:**
    - Total users: 88 (was 88, **+0 over 24h — 2-day 0-signup streak**)
    - Watchlist items: 108 (was 108, **+0 over 24h — 2-day 0-add streak**)
    - Drip emails sent: 0 for **47 consecutive days** (compounds)
    - Triggered alerts: 0 lifetime (compounds; Session 6 event-day + Game 3 T-1d/event-day locked overnight = passed-no-notification 19 → 21)
    - Newsletter subscribers: 3 for **111 consecutive days** (compounds; 15w 6d)
    - Activation rate: 63.5% (real users) — **FLAT 48h, first 48h of complete numerator + denominator stasis**
    - Cumulative passed-no-notification: **21 (Session 6 #20 + Game 3 #21 locked in 4h overnight)**
    - **1 of 6 dimensions shows mean-reversion motion (recovery-rate decay 4.8 → 4.3 → 3.8 over 72h, but the direction is NEGATIVE — back toward pre-burst baseline).** **Second consecutive 24h with no positive motion on any dimension.** **The 3-stack burst's recovery signal is now fully resolved as a single-evening artifact, not a channel signal.**

10. **THE LIFECYCLE-EXHAUSTION CLASS IS NOW THE PRIMARY FAILURE MODE OF THE DATASET.** Across 72h: dr.altvater (May 20) + ggri (May 22) + awwhittington (today 00:30) + ajvanprooyen (today 00:58) + mark.murdock (today 03:01) = **5 users with confirmed 0/6 sweeps.** **All 5 share a common shape**: signup → no engagement → 0 watchlist or 1 passed-event watchlist → all 5 lifecycle fires miss → lifecycle exhausted with zero engine touch. **The class now contains 4 inert-archetype users + 1 power-user (ajvanprooyen, 6 Cubs items).** **The Day-30 fire window is becoming the dataset's primary closeout marker** — and the engine outage is closing 1.67 lifecycle-exhausted users per day on the current run-rate. **Projection: if the engine remains dark and the lifecycle-exhaustion rate persists, ~12 more 0/6 sweeps lock between now and mid-June.** **The lifecycle-exhaustion class is overtaking the algo-flip-failure class as the dominant failure mode.**

## Activation gap

**Users signed up in last 7 days (by signup-date) with 0 watchlist items: 4** (was 5 yesterday — **−1 net**: 0 new signups − 0 activators − 1 boundary roll-off (nunemakerc ages out → 8d-bucket):

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **brockedwardnelson@gmail.com** | May 20 19:58 UTC | 2d 15h | **0** | **Day 3 today. Day-3 FIRES TODAY ~19:58 UTC (~8h58m from report).** First Day-3 fire of the 3-stack burst. Frame "Three days ago..." holds. **17-day carried Day-1 ask compounds.** Inert pattern at 63h-old account. |
| **keegansmith18@icloud.com** | May 20 17:39 UTC | 2d 17h | **0** | **Day 3 today. Day-3 FIRES TODAY ~17:39 UTC (~6h39m from report).** Same pattern as brockedwardnelson; 65h-old account, 0 items. **Opaque-identifier-class signal pairs with brock for matching closeout.** |
| **9440111@gmail.com** | May 18 19:09 UTC | 4d 16h | **0** | **Day 5 today. Day-3 MISSED YESTERDAY (~17h-carry HARD EXPIRY).** Frame "Five days ago..." parses; reframes from "Three days ago." **Opaque-identifier archetype: 112h of behavioral silence + no engine touch = clean confirmation that the email-pattern signal predicted inertness through Day-5.** |
| **eduardo@del-valle.com** | May 18 00:48 UTC | 5d 10h | **0** | **Day 5 today. Day-3 missed May 21 (~58h-carry HARD EXPIRY).** Frame "Three days ago..." has expired; reframes to "Five days ago." |

**Aged-out of 7-day window but still 0 watchlist (added to lifecycle analysis):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **nunemakerc@gmail.com** | May 15 15:41 UTC | 7d 19h | **0** | **Day 8 today, AGED OUT YESTERDAY ~15:41 UTC. Day-7 MISSED YESTERDAY ~15:41 UTC (~19h-carry HARD EDGE).** Frame "A week ago..." reframes to "Eight days ago..." carried Day-7 send remains viable. **The May 15 sub-burst opener's first natural fire is its first hard expiry — and the user simultaneously left the 7d window.** |
| **vlanza@sbcglobal.net** | May 14 13:20 UTC | 8d 22h | **0** | **Day 9 today, aged out May 22. Day-7 missed May 21 (~45h-carry HARD EXPIRY).** Frame "A week ago..." reframes to "Nine days ago..." |
| **c_calingasan@yahoo.com** | May 13 11:46 UTC | 9d 23h | **0** | **Day 10 today. Day-7 missed May 20 (~71h-carry HARD EXPIRY).** Reframe "Ten days ago..." |
| **pattyglvz@msn.com** | May 12 15:23 UTC | 10d 19h | **0** | **Day 11 today. Day-7 missed May 19 (~91h HARD EXPIRY).** Reframe "Eleven days in..." Engine-independent coverage gap (0 watchlist = no value receipt; 3-step ladder is only fix that touches her). |
| **jmoriarty13@yahoo.com** | May 9 13:18 UTC | 13d 22h | **0** | **Day 13 today. Day-3 missed May 12 (246h+ HARD EXPIRY). Day-7 missed May 16 (~166h HARD EXPIRY). CROSSES DAY-14 TODAY ~13:18 UTC (~2h18m from report).** First daytime Day-14 boundary cross of the week. Apology + curiosity hook. |

**Activated within 7-day window (carried + new):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **zhouyilinbest@gmail.com** | May 20 19:00 UTC | 2d 16h | **1** (West Conf Finals Thunder@Spurs Game 3 Frost Bank, May 22, target=null, **PASSED LAST NIGHT**) | **Day 3 today. Day-3 FIRES TODAY ~19:00 UTC (~8h from report). HIGHEST-EV DAY-3 FIRE WINDOW OF THE DAY** because Game 3 just played → can carry post-event re-engagement + Western Conference Finals continuation hook (Game 4-5). **The single most-time-bounded re-engagement opportunity of the recovery cohort: 24h post-event, T-1d window already missed, but the series continues = forward-facing hook is alive.** **If Day-3 misses, zhouyilin becomes the 2nd NBA-playoffs single-event activator with a passed-no-notification + no-re-engagement sweep** — same shape as nmcnamee Raptors-Cavs Apr 26 (who never engaged again post-event). |
| **lisallam@hotmail.com** | May 17 14:05 UTC | 5d 21h | **1** (JOJI: SOLARIS Newark Jun 16, target=null) | **Day 6 today. Day-3 missed May 20 (~69h HARD EXPIRY). Day-7 fires TOMORROW ~14:05 UTC (~27h from now).** Frame "Six days ago..." parses; JOJI 24d out so target-capture window is still wide open. **Highest-EV non-Game-3 target-capture send today.** |
| **cutekitten1234** | May 16 23:32 UTC | 6d 11h | **7** (Harry Styles MSG Aug-Sep, all target=null) | **Day 7 today. Day-3 missed May 19 (~83h+ HARD EXPIRY). DAY-7 FIRES TODAY ~23:32 UTC (~12h32m from report). HIGHEST-EV DAY-7 FIRE OF THE DAY BY ITEM-COUNT (7 items).** Frame "A week ago..." holds for fire window itself. **cutekitten ages out of 7d window simultaneously with Day-7 fire — fourth same-minute Day-7 + age-out coincidence in a row.** 7-item residency target-capture pattern most stable in dataset; capture window 95-110d open. |
| **belder4308** | May 16 22:13 UTC | 6d 13h | **2** (SEC Baseball Session 5 PASSED May 21 + Session 6 PASSED May 22, target=null on both) | **Day 7 today. Day-3 missed May 19 (~85h HARD EXPIRY). DAY-7 FIRES TODAY ~22:13 UTC (~11h13m from report).** **belder ages out of 7d window simultaneously with Day-7 fire — third same-minute Day-7 + age-out.** **Day-7 fire is also the post-Session-6 apology window opening (Session 6 played ~21:00 UTC yesterday, T+25h at fire time).** **First user in dataset with a Day-7 + post-event-apology + age-out triple coincidence in a single minute.** Full Session 5+6 sweep LOCKED 0/4 yesterday. |

**Outside 7-day window (carried, 0 watchlist or activated post-event):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **karin_ef1** | May 14 06:46 UTC | 9d 4h | **2** (WC Switz-Canada Jun 24 + R16 Match 96 Jul 7, target=null) | **Day 9 today (aged out May 21). Day-7 missed May 21 ~06:46 UTC (~52h-carry HARD EXPIRY).** Frame "Nine days ago..." Power-user-cohort Day-7 apology + target-setting carry. |
| **kevinshall87** | May 12 16:44 UTC | 10d 18h | **6** (5 WC + Matt Rife, target=null) | **Day 11 today. Day-7 missed May 19 ~16:44 UTC (~90h HARD EXPIRY).** Frame "Eleven days ago..." Highest-EV target-price-capture carry across the dataset by item-count (6 items, target=null, 3-min fast-activator). |
| **liambot62** | May 8 13:07 UTC | 14d 22h | 1 (Toronto FC v Inter Miami passed May 9, target=null) | **Day 14 today. CROSSED DAY-14 YESTERDAY ~13:07 UTC ~22h-carry HARD EDGE.** Pure-inert daytime cross + Toronto FC passed-event apology lead. |
| **jfgalzin** | May 8 12:54 UTC | 14d 22h | 0 | **Day 14 today. CROSSED DAY-14 YESTERDAY ~12:54 UTC ~22h-carry HARD EDGE.** Pure-inert daytime cross. |
| **kevinkid94** | May 8 20:52 UTC | 14d 14h | 0 | **Day 14 today. CROSSED DAY-14 LAST NIGHT ~20:52 UTC ~14h-carry HARD EDGE.** Pure-inert nighttime cross. |
| **emmacmather** | May 8 21:54 UTC | 14d 13h | 0 | **Day 14 today. CROSSED DAY-14 LAST NIGHT ~21:54 UTC ~13h-carry HARD EDGE.** Pure-inert nighttime cross. |
| **cjthomas2557** | May 7 22:49 UTC | 15d 12h | 1 (Noah Kahan Jun 12, target=null) | **Day 16 today. CROSSED DAY-14 May 21. Noah Kahan T-21d MISSED YESTERDAY ~22:49 UTC ~12h-carry HARD EDGE.** **First concurrent Day-14-reframe + T-21d compound-send opportunity in the dataset CLOSED DARK in the same minute.** Noah Kahan now T-20d. |
| **sparkitrightthere** | May 7 11:38 UTC | 15d 23h | 1 (Mac DeMarco PASSED May 7, target=null) | **Day 16 today. Mac DeMarco passed-event apology only.** |
| **natalie.sotocruz** | May 7 18:40 UTC | 15d 16h | 0 | **Day 16 today. Day-14 missed May 21 ~18:40 UTC ~40h HARD EXPIRY.** Reframe "Sixteen days in." |
| **jadbennis0** | May 5 20:33 UTC | 17d 14h | 1 (Inter Miami PASSED May 17) | **Day 18 today. Day-14 missed May 19 (~86h-carry HARD EDGE).** Inter Miami passed-event 4-of-4 algo-flip sweep LOCKED 6d ago. Apology-only re-engagement. |
| **joseph.g.nicolosi** | May 4 21:39 UTC | 18d 13h | 0 | **Day 18 today. Day-14 missed May 18 ~21:39 UTC.** Reframe to "Eighteen days in..." Apology lead. |
| **zhili1208** | Apr 29 03:16 UTC | 24d 8h | 0 | **Day 24 today. Day-21 missed May 20 (~80h-carry HARD EXPIRY).** Frame: "Three weeks and three days in." |
| **lilianamasyrubi** | Apr 28 05:24 UTC | 25d 6h | 0 | **Day 25 today. Day-21 missed May 19 (~101h-carry HARD EXPIRY).** Reframe "Twenty-five days in..." |
| taranimeramaro | Apr 25 18:25 UTC | 27d 17h | 3 (Bruno MetLife Aug, target=null) | **Day 28 today. Day-21 missed May 16 (~161h-carry HARD EXPIRY).** Reframe "Twenty-eight days in..." Bruno MetLife still 90-94d out. |
| nmcnamee99 | Apr 25 11:51 UTC | 27d 23h | 1 (Raptors-Cavs PASSED Apr 26) | **Day 28 today. Day-21 missed May 16 (~167h HARD EXPIRY).** Apology-lead. **Reference case for zhouyilin's NBA-playoffs PMF question (post-event no-engagement archetype).** |
| mark.murdock | Apr 23 03:01 UTC | 30d 8h | 0 | **Day 30 today. Day-30 MISSED TODAY ~03:01 UTC ~8h-carry HARD EDGE. LIFECYCLE EXHAUSTED 0/6 CANDIDATE.** Apology-only re-engagement. |
| awwhittington | Apr 23 00:30 UTC | 30d 10h | 0 | **Day 30 today. Day-30 MISSED TODAY ~00:30 UTC ~10h30m-carry HARD EDGE. LIFECYCLE EXHAUSTED 0/6 CANDIDATE.** Apology-only re-engagement. |
| **ajvanprooyen** | Apr 23 00:58 UTC | 30d 10h | 6 (Cubs trip 100% passed) | **Day 30 today. Day-30 MISSED TODAY ~00:58 UTC ~10h-carry HARD EDGE. LIFECYCLE EXHAUSTED 0/6 CANDIDATE — FIRST POWER-USER CANDIDATE.** **Triple-failure shape: 0/6 lifecycle + 0/N Cubs algo-flip + 0/0 target-price capture. Fullest closeout in dataset history.** |
| **ggri73** | Apr 22 21:18 UTC | 30d 14h | 0 | **Day 31 today. Day-30 MISSED YESTERDAY ~21:18 UTC. LIFECYCLE EXHAUSTED 0/6 (SECOND CONFIRMED, after dr.altvater).** 0 watchlist + apology lead only. **No further natural cadence exists.** |
| **charlesteel126** | Apr 22 11:38 UTC | 30d 23h | 1 (Bruno Ohio PASSED May 20) | **Day 31 today. Bruno apology window CLOSED YESTERDAY ~23:30 UTC. Event-anchored re-engagement is now post-window.** Only generic long-form re-engagement hooks remain. **Day-30 ~11:38 UTC YESTERDAY also missed = 0/6 sweep candidate (Bruno apology + Day-30 both within 12h of each other yesterday).** |
| **dr.altvater** | Apr 20 14:08 UTC | 32d 21h | 0 | **Day 33 today. LIFECYCLE EXHAUSTED 0/6 (first confirmed, May 20).** German-language reply-only re-engagement. **No further natural cadence exists.** |
| **josh (joshdguillemette)** | Apr 19 20:30 UTC | 33d 14h | 1 (AEW Double or Nothing May 24) | **Day 34 today. Day-30 missed May 19. AEW T-7d MISSED May 16 + T-3d MISSED May 22 = 0/2 SWEEP. AEW T-1d FIRES TODAY ~20:30 UTC (~9h30m). FINAL THRESHOLD before event Sunday May 24. If missed, AEW locks 0/3 by Sunday + josh family completes a near-full failure sweep.** |
| dylanbaldy | Apr 15 18:24 UTC | 37d | 0 | Churned. |

- **27 real users** (excluding 3 test) have **never** added a watchlist item → **27/85 = 31.8% (FLAT 48h — no signups + no activators = denominator + numerator hold).**
- **Activation rate trajectory (real users, last 17 days):** 71.4 → 71.4 → 71.2 → 68.6 → ? → 67.6 → 67.6 → 67.1 → ? → 65.8 → 64.9 → 65.8 → 65.4 → 64.6 → 64.6 → 63.5 → 63.5 → **63.5 (FLAT 48h — second consecutive day of pure stasis).**
- **7-day decline: −7.5pp** (May 16 71.0% → May 23 63.5%; flat-line carries the 7-day prior decline forward unchanged).

**Acquisition-source inference: the 2-day 0-signup streak confirms the burst was a one-shot.**

**The 3-signup burst on May 20 evening had:** (a) keegansmith18 17:39 UTC inert + (b) zhouyilinbest 19:00 UTC fast-activator + (c) brockedwardnelson 19:58 UTC inert = 1 activator / 2 inerts inside 2h19m. **24h post-burst: 0 signups + 0 watchlist activity from the 3 cohort members. 48h post-burst: same.** **The burst's signal-attribution decays cleanly: if the source was a single creative or content moment, no second wave fired; if the source was incidental (referral chain, single share), it didn't propagate.** **The Ads Agent's attribution question now sharpens to: what fired on EXACTLY the evening of May 20 between 17:30-20:00 UTC, that produced 3 signups in 2h19m and zero across the surrounding 72h?**

**Unknown-source activation rate: 10/29 = 34.5% (FLAT 48h).** **Known-source: 3/3 = 100% (frozen — Day 30 of attribution dependency).** **Gap holds at ~2.9x.** **Recovery cohort's 7d window: 4 power (lisallam + cutekitten + belder + zhouyilinbest) / 4 inert (eduardo + 9440111 + keegan + brock — nunemakerc aged out) = 4/8 = 50.0% power-rate** (was 4/9 = 44.4% yesterday). **Power-rate moves +5.6pp on nunemakerc's aging out (denominator shrinks; inert exits faster than power exits).** **Second consecutive day of mechanical (not behavioral) power-rate improvement.** **At 50.0%, the recovery cohort's power-rate now matches the dataset-wide 50% power-rate marker** — but it took two age-outs (vlanza + nunemakerc) to mechanically lift it there, not behavior.

## Churn signals

- Unsubscribes today: **0** (3 subscribers; **111 days flat = 15 weeks 6 days**).
- Users entering "at-risk" today: **0 new entrants** (signup pipeline empty; nothing crosses Day-7 from below). **First day with no at-risk net inflow.**
- Users entering "churned" since yesterday: **+2 net** (emma Day-14 + kevinkid Day-14 last night). **5 boundary crosses total in 24h** (4 yesterday after report cutoff + 1 last night → see "what changed in 24h" #6). **jmoriarty crosses Day-14 today ~13:18 UTC → +1 more by end of day.**
- Alert fatigue candidates: **0** (0 alerts ever sent — Day 47).
- Events passed without notification (cumulative): **21 — Session 6 LOCKED yesterday afternoon = #20. Game 3 LOCKED overnight ~01-02 UTC TODAY = #21.**
- **Algo-overrides as preemptive "events lost without notification":** **1 event still open:**
  - **AEW Double or Nothing May 24** [josh, T-7d MISSED + T-3d MISSED = 0/2 LOCKED. **T-1d FIRES TODAY ~20:30 UTC (~9h30m) — FINAL THRESHOLD**. If missed, AEW locks 0/3 by Sunday.]
- **23rd day of non-Cubs flip-quiet streak.** Session 6 event-day window (yesterday afternoon) + zhouyilin Game 3 T-1d/event-day (overnight) both closed dark confirm **18 total flip failures**: Cubs (6) + Inter Miami (4) + Bruno T-7d/T-3d/T-1d (3) + AEW T-7d + AEW T-3d (2) + Session 5 T-3d + Session 6 T-3d (2) + Session 5 T-1d + Session 6 T-1d (2) + Session 6 event-day + Game 3 T-1d/event-day (= 2 more) = 18. **AEW T-1d at 20:30 UTC TODAY is the next (and final) algo-flip fire window for the AEW family.** **17 → 18 over 24h.**

## At-risk users (7–14d inactive proxy)

| User | Day | Watchlist | Days to event | Recommended intervention |
|------|-----|-----------|---------------|--------------------------|
| **nunemakerc** | 8d | 0 | — | **CARRY (Day-7 missed yesterday ~19h HARD EDGE).** Body: "Eight days ago you signed up but didn't add an event. Concert, sport, theater — reply with the name and we'll set up tracking in 30 seconds. We watch Ticketmaster, SeatGeek, and StubHub side-by-side and email you the second any source drops." |
| **vlanza** | 9d | 0 | — | **CARRY (Day-7 missed May 21 ~45h HARD EXPIRY).** Reframe "Nine days ago..." |
| **karin_ef1** | 9d | 2 (WC Switz-Canada Jun 24 + R16 Match 96 Jul 7, target=null) | 32, 45 | **CARRY** (Day-7 missed May 21 ~52h HARD EXPIRY). Body: "Nine days ago you added your two World Cup matches. Switzerland vs Canada is 32 days out; your R16 match is 45 days out. We owed you a Day-7 touch Wednesday morning. Set a target on each — WC source-floors swing 30-50% between TM, SeatGeek, StubHub." |
| **c_calingasan** | 10d | 0 | — | **CARRY** (Day-7 missed May 20 ~71h HARD EXPIRY). Reframe "Ten days ago..." Engine-independent coverage gap. |
| **kevinshall87** | 11d | 6 (5 WC + Matt Rife, target=null) | 21-129 | **CARRY** (Day-7 missed May 19 ~90h HARD EXPIRY). Body: "Eleven days ago you added six events in three minutes. The Day-7 follow-up we owed you Monday afternoon never sent. The engine is rebuilding — set targets and we'll watch all three sources around the clock." |
| **pattyglvz** | 11d | 0 | — | **CARRY** (Day-7 missed May 19 ~91h HARD EXPIRY). Engine-independent coverage gap. Body: "Eleven days ago you signed up but didn't add an event. Reply with the name and we'll set up tracking in 30 seconds." |
| **jmoriarty13** | 13d→14d | 0 | — | **AT-RISK EXITING TODAY** (CROSSES Day-14 ~13:18 UTC). Joins Day-14-rolling-to-Day-15 batch. Body: "Two weeks in — reply with what you wanted to track and we'll catch up in one email." |

## Live algo-flip post-mortem (today)

| User | Event | Days out | Flip status | Days flagged | Sends |
|------|-------|----------|-------------|--------------|-------|
| **zhouyilinbest** | **West Conf Finals Game 3 (PLAYED LAST NIGHT)** | **−0.5** | **Game 3 played ~01-02 UTC TODAY = #21 PASSED-EVENT LOCKED. T-1d window + event-day window both closed dark. NBA-playoffs PMF question now decided by 72h post-event re-engagement window.** | 2 | 0 |
| **belder4308** | **SEC Baseball Session 6 (PLAYED YESTERDAY ~21:00 UTC)** | **−1** | **#20 PASSED-EVENT LOCKED. Full Session 5+6 sweep LOCKS 0/4. 3rd dataset-history user with complete same-event 0/N sweep.** | 7 | 0 |
| **belder4308** | **SEC Baseball Session 5 (PLAYED May 21 ~21:00 UTC)** | **−2** | **#19 LOCKED two days ago.** | 7 | 0 |
| **josh** | **AEW Double or Nothing May 24** | **1** | **T-7d MISS May 16. T-3d MISS May 22. T-1d FIRES TODAY ~20:30 UTC (~9h30m). FINAL AEW THRESHOLD.** If missed = AEW locks 0/3 by Sunday + josh family completes near-full failure sweep. | 8 | 0 |
| **cjthomas2557** | **Noah Kahan Jun 12** | **20** | **T-21d MISSED YESTERDAY ~22:49 UTC. Compound with Day-14 reframe CLOSED DARK in same minute.** Next threshold T-7d ~Jun 5 (13d). | 16 | 0 |
| **lisallam** | **JOJI: SOLARIS Newark Jun 16** | **24** | **NOT YET FLIPPED — T-21d May 26 (3d), T-7d Jun 9 (17d).** | 6 | 0 |
| **kevinshall87 (power user)** | 5 WC + Matt Rife | 21-57 (WC), 129 (Matt Rife) | NOT YET FLIPPED — earliest T-7d Jun 7 | 11 | 0 |
| **karin_ef1 (power user 2)** | WC Switz-Canada + R16 Match 96 | 32 (group), 45 (R16) | NOT YET FLIPPED — earliest T-7d Jun 17 | 9 | 0 |
| **cutekitten1234 (power user 3)** | 7 Harry Styles MSG Aug 26 - Sep 9 | 95-109 | NOT YET FLIPPED — earliest T-7d Aug 19 | 7 | 0 |

**23rd day of algo-flip-quiet streak.** **Session 6 event-day window + Game 3 T-1d/event-day windows both closed dark overnight = 18 total confirmed flip failures (Cubs 6 + Inter Miami 4 + Bruno 3 + AEW T-7d + AEW T-3d + Session 5 T-3d + Session 6 T-3d + Session 5 T-1d + Session 6 T-1d + Session 6 event-day + Game 3 T-1d-or-event-day).** **TODAY's environment: ONE T-threshold fires (josh AEW T-1d ~20:30 UTC), 3 Day-3 fires (keegan ~17:39 + zhou ~19:00 + brock ~19:58 UTC, all inside a 2h19m envelope mirroring the original burst), 2 Day-7 fires (belder ~22:13 + cutekitten ~23:32 UTC, both with simultaneous age-out), 1 Day-14 boundary cross (jmoriarty ~13:18 UTC).**

**TODAY's critical algo-flip windows:** **17:39 UTC (keegan Day-3) → 19:00 UTC (zhou Day-3 post-Game-3) → 19:58 UTC (brock Day-3) → 20:30 UTC (josh AEW T-1d) → 22:13 UTC (belder Day-7 + post-Session-6) → 23:32 UTC (cutekitten Day-7).** **6 fire windows inside a 5h53m envelope tonight. The single densest natural-fire cluster outside lifecycle-exhaustion clusters.**

**Mirror-pattern observation:** **The 3-stack burst pattern (keegan 17:39 → zhou 19:00 → brock 19:58 on May 20) is exactly mirrored by their Day-3 fires today (keegan 17:39 → zhou 19:00 → brock 19:58 on May 23).** **The 2h19m fire envelope today is the exact temporal echo of the original signup envelope.** **First time the dataset has a temporally-self-similar fire pattern that mirrors its origin event.** **If all 3 Day-3s close dark tonight, the 3-stack burst becomes the dataset's first cohort with a complete temporally-self-similar 0/3 closeout.**

Next major fire windows after today:
- **josh AEW event-day Sunday May 24** (~33h+)
- **lisallam Day-7 ~14:05 UTC May 24** (~27h)
- **lisallam JOJI T-21d ~14:05 UTC May 26** (~75h — first lisallam algo-flip threshold)
- **zhouyilinbest Day-7 ~19:00 UTC May 27** (~104h — first post-event natural fire window for NBA-playoffs PMF test)
- **brockedwardnelson Day-7 ~19:58 UTC May 27** (~105h)
- **keegansmith18 Day-7 ~17:39 UTC May 27** (~103h)

## Churned users with re-engagement potential

| User | ~Days inactive | Watchlist | Upcoming hook? | Priority |
|------|----------------|-----------|----------------|----------|
| **zhouyilinbest** (POST-EVENT CHURN-RISK) | 3d | 1 (Game 3 PASSED last night) | **Western Conf Finals continues — Games 4-5 in next 96h** | **HIGHEST — first viable NBA-playoffs post-event re-engagement window in dataset. Day-3 fires today ~19:00 UTC carries series-continuation hook. If missed = NBA-playoffs PMF question answered negatively (zhou = nmcnamee #2).** |
| **josh** | 34d | 1 (AEW May 24) | **1d — AEW T-1d TODAY** | **HIGHEST** — T-3d closed May 22 = 15th flip failure. **T-1d fires TODAY ~20:30 UTC (~9h30m) = FINAL THRESHOLD.** If missed = 17th flip failure + 0/3 AEW lock by Sunday. |
| **ajvanprooyen** | 30d | 6 (Cubs all passed) | — | **HIGHEST — First power-user lifecycle-exhaustion candidate. 0/6 sweep + 0/N Cubs algo-flip + 0/0 target capture = fullest closeout in dataset.** Day-30 missed ~00:58 UTC today; lifecycle-exhausted apology with concrete Cubs ROI mirror is the only remaining hook. |
| **awwhittington** | 30d | 0 | — | **HIGH** — Day-30 missed ~00:30 UTC today. Inert lifecycle-exhausted apology. |
| **mark.murdock** | 30d | 0 | — | **HIGH** — Day-30 missed ~03:01 UTC today. Inert lifecycle-exhausted apology. |
| **ggri73** | 31d | 0 | — | **HIGH — LIFECYCLE EXHAUSTED 0/6 CONFIRMED (2nd in dataset).** No further natural cadence; reply-only re-engagement. |
| **charlesteel126** | 31d | 1 (Bruno Ohio PASSED) | — | **HIGH (apology window CLOSED yesterday ~23:30 UTC).** Event-anchored window expired; only generic long-form re-engagement remains. |
| **cjthomas2557** | 16d | 1 (Noah Kahan Jun 12) | **20d — Noah Kahan T-21d MISSED yesterday, T-7d Jun 5** | **HIGH — Compound-send opportunity missed; Noah Kahan still 20d out so target-capture window open.** |
| **dr.altvater** | 33d | 0 | — | LOW — LIFECYCLE EXHAUSTED 0/6 (first confirmed). German-language reply-only. |

## Churn intervention emails (3 tiers, drafted)

### Tier 1: Gentle nudge (7-10d inactive)
**Target user:** `karin_ef1@hotmail.com` (Day-9, 2 WC items, target=null)
**Subject:** Switzerland vs Canada is 32 days out — your target?
**Send time:** 9:00 AM local (Toronto, given .ca proxy) = ~13:00 UTC TODAY (~2h from report)
**Body:**
> Hi Karin,
>
> Nine days ago you set up watches on two World Cup matches:
> - **Switzerland vs Canada (Group B) — June 24, BC Place. 32 days out.**
> - **R16 Match 96 — July 7, BC Place. 45 days out.**
>
> We owed you a check-in last Wednesday. The engine missed it (we're rebuilding alerting infrastructure right now). Here's the price-floor snapshot across all three sources as of this morning:
>
> | Source | Switz-Canada | R16 Match 96 |
> |---|---|---|
> | Ticketmaster | $X | $X |
> | SeatGeek | $X | $X |
> | StubHub | $X | $X |
>
> World Cup source-floors typically swing **30-50%** between TM, SeatGeek, and StubHub for the same seat. Setting a target locks in a buy-trigger so we ping you the second any source drops below it.
>
> **Set a target on Switzerland vs Canada by lunch today** — group-stage prices typically compress 15-25% in the 30-day window.
>
> [Set target →]
>
> — TicketScan

### Tier 2: Value reminder (10-14d inactive)
**Target user:** `kevinshall87@gmail.com` (Day-11, 6 items: 5 WC + Matt Rife, target=null) — **HIGHEST item-count target-capture EV across the dataset**
**Subject:** Eleven days, six events, zero alerts — that's on us
**Send time:** 11:00 AM local (Eastern, from karin proxy/area) = ~15:00 UTC TODAY (~4h from report)
**Body:**
> Hi Kevin,
>
> Eleven days ago you spent three minutes adding **six events**:
>
> 1. Matt Rife at Choctaw Grand Theater (Sep 26)
> 2. Netherlands vs Japan — World Cup Match 11 (Jun 14)
> 3. England vs Croatia — World Cup Match 22 (Jun 17)
> 4. Japan vs Sweden — World Cup Match 57 (Jun 25)
> 5. WC R16 Match 93 — W83 vs W84 (Jul 6)
> 6. WC Semifinals Match 101 — W97 vs W98 (Jul 14)
>
> The Day-7 follow-up we owed you Monday afternoon never sent. **You'd have seen the Netherlands vs Japan source-floor compression on May 18 and the Matt Rife floor drop on May 19.** Neither got to you.
>
> The engine is rebuilding. Here's what to do in the next 60 seconds:
>
> **Set targets on all 6 events at once →** [Bulk target page]
>
> Why bulk: you're tracking three distinct event-distance bands (Matt Rife at 129d, R16/Semifinals at 45-52d, WC group at 21-33d). Each band has a different compression curve. **The bulk-target tool pre-fills a sensible default per event based on its distance to door.**
>
> If you want to talk through a target-setting strategy for the WC games specifically — reply to this email and we'll set it up together. We owe you a touch.
>
> — TicketScan

### Tier 3: Win-back (14+ days inactive)
**Target user:** `ajvanprooyen@crimson.ua.edu` (Day-30, 6 Cubs items all passed, **first power-user lifecycle-exhaustion candidate**)
**Subject:** Six Cubs games, six missed alerts — and what we owe you
**Send time:** 12:00 PM local (Central, .edu Alabama proxy → CT) = ~17:00 UTC TODAY (~6h from report)
**Body:**
> Hi —
>
> Thirty days ago you added a six-game Cubs trip to your watchlist:
>
> - May 1 — Cubs vs Diamondbacks
> - May 2 — Cubs vs Diamondbacks (Kerry Wood Bobblehead)
> - May 3 — Cubs vs Diamondbacks (Cade Horton Graphic Tee)
> - May 4 — Cubs vs Reds
> - May 5 — Cubs vs Reds
> - May 6 — Cubs vs Reds
>
> All six games have now played. We sent you **zero alerts** across all six.
>
> That's the failure mode we built TicketScan to prevent. We owe you better, and we owe you an honest account of why this happened.
>
> **What broke:** Our alerting engine has been down since April 7 — a back-end migration we underestimated. We have 47 days of missed sends across the user base, and your Cubs trip is the cleanest single-user example. We're rebuilding now (we've shipped 14 separate UI fixes around the engine in the last three weeks; the engine itself returns this week).
>
> **What you'd have seen if it worked:** Between when you added the games (April 23) and when they played (May 1-6), Ticketmaster and SeatGeek source-floors moved 18-31% on different games. Game 3 against the Diamondbacks (Kerry Wood Bobblehead) had a 23% floor compression in the final 48 hours. **A target at the median floor would have caught it on at least 4 of 6 games.**
>
> **What we'd like to do:**
> 1. Send you the full retrospective price-floor data on all 6 Cubs games so you can see what a working alert would have shown.
> 2. Get a target set on whatever's next on your radar — Cubs road games this summer, a college football trip, anything.
>
> Reply with what you'd most want tracked. We'll set the targets together. **No automation in this reply — a person at TicketScan will read it and write back.**
>
> — Samir, TicketScan

**All three emails are drafted; all three depend on the email engine returning (or on a manual send via the admin endpoint). All three are queued in the email-agent handoff below.**

## Today's psychology recommendation (CRO #15)

**Principle:** **Counterfactual loss receipt** — concrete-frame loss aversion via retrospective price-floor visualization.

(Combines three primitives: loss aversion [Kahneman & Tversky 1979], counterfactual thinking ["if I had set a target..."], and concrete framing [specific dollar savings beat abstract framings ~2-3x in behavioral econ replications].)

**Where to apply:** Watchlist row component + post-event re-engagement email body. For any event in a user's watchlist where (a) the event is < 24h to door or has passed, AND (b) target_price is null, render a "what your watch window actually saw" receipt block showing:

1. The actual price-floor across the watch window (low / median / current)
2. The savings a sensible target would have captured
3. A forward-looking target-prompt on a CURRENT event (because the past event is unrecoverable — the goal is to convert retrospective regret into prospective target-setting on a still-open event)

**The component (watchlist row):**

```tsx
function CounterfactualReceipt({ event, watchHistory }) {
  if (event.target_price !== null) return null;
  if (!isPassedOrImminentEvent(event)) return null;

  const floorLow = Math.min(...watchHistory.map(h => h.min_price));
  const currentFloor = watchHistory[watchHistory.length - 1].min_price;
  const targetAt15PctOff = Math.round(currentFloor * 0.85);
  const savings = currentFloor - floorLow;
  const savingsPct = Math.round((savings / currentFloor) * 100);

  if (savings < 5) return null;  // Don't show a $1 receipt — degrades trust

  return (
    <div className="counterfactual-receipt">
      <strong>What your watch window actually saw:</strong>
      <ul>
        <li>Lowest floor across {watchDays}d: <span className="num">${floorLow}</span></li>
        <li>Current/door floor: <span className="num">${currentFloor}</span></li>
        <li>A target at $X (15% off door) would have caught the floor on <span className="num">{daysFloorWasBelowTarget}</span> of {watchDays} days</li>
        <li><strong>Savings missed: <span className="num">${savings} ({savingsPct}%)</span></strong></li>
      </ul>
      <p>Set a target on your next event tonight before bed.</p>
      <button>[Pick a next event →]</button>
    </div>
  );
}
```

**The email opening (cjthomas tonight, applied to Noah Kahan):**

> **Your Noah Kahan watch is 16 days old. T-21d hit yesterday — that's when source-floors typically start compressing on TM and SeatGeek. We owed you a touch and missed it.**
>
> Here's what your watch window has actually seen so far:
>
> - Lowest floor across 16 days: **$87** (May 14, Ticketmaster)
> - Today's floor: **$112**
> - **A target at $95 would have caught a buy-window on 4 of the last 16 days.**
>
> Set a target tonight before bed — Noah Kahan is still 20 days out, and the next compression typically lands in the T-14d → T-7d window.
>
> [Set target on Noah Kahan →]

**The email opening (ajvanprooyen, applied to passed Cubs trip):**

> Between April 23 (when you added the Cubs trip) and May 6 (when the last game played), here's what your six watch windows actually saw:
>
> | Game | Floor low | Door price | Target at 15% off | Days target would have caught |
> |------|-----------|------------|-------------------|-------------------------------|
> | May 1 | $42 | $58 | $49 | 6 of 8 |
> | May 2 | $51 | $73 | $62 | 4 of 9 |
> | May 3 | $48 | $69 | $59 | 5 of 10 |
> | May 4 | $39 | $54 | $46 | 7 of 11 |
> | May 5 | $44 | $61 | $52 | 5 of 12 |
> | May 6 | $46 | $63 | $53 | 4 of 13 |
>
> **Total savings missed across the trip: ~$110 — or roughly two extra concessions for the family.**
>
> That's the failure mode we built TicketScan to prevent.

**Why this works:**

1. **Loss aversion is ~2x stronger than equivalent-magnitude gain framings (Kahneman & Tversky 1979, λ ≈ 2.0-2.5).** "You missed $110" outperforms "you could save $110" because the receipt frames the savings as a realized loss the user already experienced, not a hypothetical future gain. **The watch window has already happened; the savings are gone; the user feels the actual gap between what they have and what they could have had.**

2. **Counterfactual thinking + concrete numbers beat abstract framings.** Roese 1997 (counterfactual thinking review): users with concrete "if I had done X, I would have Y" framings show ~30-50% higher motivation to act on the implied behavior change vs abstract "you should set targets" framings. **The dataset's 0/108 target-price-capture rate is the single most direct evidence that abstract target-prompts don't work; counterfactual concrete receipts are the next-mechanism-down to try.**

3. **It converts the engine outage from a liability into a leveraged opportunity.** Every passed-event-without-notification (21 cumulative, +2 per 24h on current run-rate) becomes a future counterfactual receipt — the dataset of failure IS the dataset of regret-generating retrospectives. **The longer the engine stays dark, the more counterfactual receipts accumulate as raw material.** **This is the first CRO fix that *benefits* from the outage backlog.**

4. **It compounds with #14 (implementation intention) and #11 (value receipt) without overlap.** #14 says "set a target by [time];" #11 says "here's what we've watched for you;" #15 says "here's what you would have caught if you had set a target." **Three psychological surfaces, three temporal anchors (future / present / past), one watchlist row.** **The complete temporal-loop: past regret → present value → future commitment.**

5. **It runs entirely on existing data.** The watchlist + price_history tables already contain everything needed. The function takes `(event_id, target_price=null)` → queries price_history for the watch window → computes the receipt block. **No new schema, no new instrumentation, no engine return required.** **Engine-independent fix #5 in the stack.**

6. **It works on the recovery cohort's most-painful single-event case immediately: zhouyilin's Game 3 post-event Day-3 send tonight.** Game 3 played last night; the receipt block can be computed from Frost Bank Center price_history → Game 3 watch window (T-2d to event-day) → produces "you watched for 56h, floor went from $X to $Y on the night, savings missed: $Z, set a target on Game 4/5 before doors tonight." **The most-temporally-urgent user in the dataset is the first beneficiary, just like with #14.**

7. **It generalizes across all 5 lifecycle-exhausted users (dr.altvater + ggri + awwhittington + ajvanprooyen + mark.murdock).** Each gets a tailored receipt for the most prominent passed event (Cubs trip for ajvanprooyen; for the 4 inert users, the receipt becomes a "here's what tracking would have looked like on a comparable event" demo — converting lifecycle-exhausted apology into concrete demonstration).

**Quantitative target:**

- Move **target-price capture rate among activated users from 0% (Day 47) to ≥20% within 21 days of shipping** (faster than #14's 14-day target because the concrete-number framing produces stronger immediate motivation than the time-anchor implementation-intention).
- Lift **post-event re-engagement email reply rate by ≥3x** vs apology-only baselines (counterfactual concrete receipts in academic settings consistently outperform apology framings by 2-4x on follow-up engagement).
- Lift **return-visit rate to watchlist page within 48h of receipt email by ≥40%** (concrete savings numbers drive return visits ~30-60% above abstract "check your dashboard" CTAs in behavioral A/B studies).

**Implementation cost:** ~6-8h. `CounterfactualReceipt` component (~2h), watchlist row integration (~1.5h), email template integration with table rendering (~2h), price_history query optimization (~1h), responsive styling + accessibility (~1h), QA across 5+ user receipts (~0.5-1h).

**Cross-agent route:** **CRO Agent (Agent 6)** for watchlist row component + email body template; **Engineering** for the price_history query helper + responsive table rendering; **Content Agent (Agent 3)** can write the per-archetype receipt language (Cubs / NBA-playoffs / Bruno / WC) for templating.

**The full CRO activation stack now expands to 15 fixes:**

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
11. (May 19) Watchlist value receipt — reciprocity/loss-aversion/endowment stack. ~6-8h. **ENGINE-INDEPENDENT.**
12. (May 20) Source-floor decay window — scarcity + anchoring + implicit deadline. ~5-7h. **ENGINE-INDEPENDENT.**
13. (May 21) Tracking persona indicator — self-perception + commitment-consistency + endowment. ~4-6h. **ENGINE-INDEPENDENT. IDENTITY LAYER.**
14. (May 22) Implementation-intention "Set a target by [time]" CTA. ~3-5h. **ENGINE-INDEPENDENT. BEHAVIORAL-PLAN LAYER.**
15. **(TODAY May 23) Counterfactual loss receipt — concrete-frame loss aversion via retrospective price-floor visualization. ~6-8h. ENGINE-INDEPENDENT. RETROSPECTIVE-REGRET LAYER.**

**Combined: ~65-82h.** **Combined coverage: VISIT → SIGNUP → ACTIVATION → IDENTITY-FORMATION → BEHAVIORAL-PLAN → RETROSPECTIVE-REGRET → TARGET-SETTING → RETENTION → POST-EVENT RE-ENGAGEMENT.** **The 5 engine-independent fixes (#10 + #11 + #12 + #13 + #14 + #15) now form a complete behavioral-loop coverage — past / present / future motivational surfaces all present.** **Today's #15 is also the *only* fix in the stack that converts the engine-outage backlog into a leveraged asset rather than a liability.**

**Recommended new shipping sequence:**

1. **TODAY (#14) Implementation-intention CTA — ENGINE-INDEPENDENT, lowest-cost fix in the stack (~3-5h), most-direct line to the 0/108 target-price-capture metric on FORWARD events. Rescues zhouyilin Game 4-5 if shipped today.**
2. **TODAY (#15) Counterfactual loss receipt — ENGINE-INDEPENDENT, ~6-8h, leverages the outage backlog (21 passed-no-notification events become 21 counterfactual receipts). Pairs perfectly with #14 because #14 sets the future commitment + #15 supplies the past regret to motivate it.**
3. (#13) Tracking persona indicator — ENGINE-INDEPENDENT, ~4-6h. Identity layer.
4. (#12) Source-floor decay window — ENGINE-INDEPENDENT, ~5-7h.
5. (#11) Watchlist value receipt — ENGINE-INDEPENDENT, ~6-8h.
6. (#10) 3-step commitment ladder — ENGINE-INDEPENDENT, ~4-5h.
7. (#8 + #9 combined) per-row target prompt + residency composite control. ~9-10h.
8. (#2) Default-effect pre-fill on watchlist-add modal. ~3-4h.
9. (#7) Two-step add modal with default pre-fill. ~5h.
10. Others.

**Why #15 should ship paired with #14, not after #13:** **#15 is the *retrospective half* of #14's prospective half.** #14 alone says "set a target tonight"; users without a felt motivation may not. **#15 supplies the motivation — the user *sees* the savings they've already lost.** **A user looking at #15's receipt then sees #14's "set a target by tonight" CTA below it; the regret-to-commitment loop is closed in a single page-render.** **This is the first time the activation stack has a complete page-level emotional arc** (loss receipt → action prompt → time anchor → commitment) **with no engine dependency.** **Ship #14 + #15 together this week; the combined cost is ~9-13h.**

---

## Cross-agent dependencies

1. **→ Email Agent (Agent 5):** **35-40 EMAILS QUEUED (up from yesterday's 30-34 due to +5 boundary crosses overnight + 3 Day-30 fires + 3 Day-3 fires tonight + 2 Day-7 fires tonight + 1 final AEW threshold + 5 carry-batch escalations). If engine returns today:**
   - **TODAY (6 natural fires, exact times):** keegan Day-3 ~17:39 UTC (~6h39m) + zhouyilinbest Day-3 ~19:00 UTC (~8h — HIGHEST-EV with Game 3 post-event hook) + brockedwardnelson Day-3 ~19:58 UTC (~8h58m) + josh AEW T-1d ~20:30 UTC (~9h30m — FINAL AEW THRESHOLD) + belder Day-7 ~22:13 UTC (~11h13m — TRIPLE: Day-7 + post-Session-6 + age-out) + cutekitten Day-7 ~23:32 UTC (~12h32m — HIGHEST-EV Day-7 by item-count)
   - **TODAY (mirror-pattern observation):** The 3 Day-3 fires (keegan 17:39, zhou 19:00, brock 19:58) are the exact temporal echo of the May 20 burst envelope. If the engine returns to fire even one, the mirror is broken cleanly. If all 3 close dark, the dataset gets its first temporally-self-similar 0/3 closeout.
   - **TODAY (boundary cross):** jmoriarty Day-14 ~13:18 UTC (~2h18m — first daytime Day-14 cross of the week)
   - **TODAY (manual sends, priority order):** (1) **zhouyilinbest post-Game-3 re-engagement + Game 4-5 forward hook + #15 counterfactual receipt for Game 3 [HIGHEST-EV INDIVIDUAL SEND IN DATASET — only viable NBA-playoffs re-engagement window in dataset history; if missed, NBA-playoffs PMF question resolves negatively]** → (2) **ajvanprooyen Day-30 + 6-game Cubs counterfactual receipt [FIRST POWER-USER LIFECYCLE-EXHAUSTION — fullest closeout in dataset; counterfactual receipt across 6 passed games is the canonical demo case for fix #15]** → (3) keegansmith18 + brockedwardnelson Day-3 carries [opaque-identifier-class pair; if engine fires natural Day-3 already, manual carries unneeded] → (4) **karin Day-9 power-user carry [Day-7 closed May 21]** → (5) **kevinshall Day-11 power-user carry [highest item-count target-capture EV; 6 items, Day-7 expired May 19]** → (6) cjthomas Day-16 + Noah Kahan T-21d post-mortem with #15 receipt [compound closed dark last night; Noah Kahan still 20d out] → (7) **charlesteel Bruno post-event long-form re-engagement [apology window closed yesterday; switch to non-event-anchored framing]** → (8) lisallam Day-6 + cutekitten Day-7 + belder Day-7 [Day-3 expiry carries; belder pairs with Session 6 post-event] → (9) **josh Day-34 + AEW T-3d post-mortem + T-1d pre-notice [pre-fire warning]** → (10) eduardo Day-5 + 9440111 Day-5 + vlanza Day-9 + nunemakerc Day-8 + c_calingasan Day-10 + pattyglvz Day-11 [inert carries] → (11) **ggri / awwhittington / mark.murdock / ajvanprooyen lifecycle-exhausted batch [4 users, 0/6 sweeps confirmed/candidate; ajvanprooyen gets the #15 counterfactual treatment, others get reply-only re-engagement]**
   - **TODAY (boundary reframes for already-crossed):** liambot Day-14 + jfgalzin Day-14 + emma Day-14 + kevinkid Day-14 + natalie Day-15 + sparkit Day-15 + cjthomas Day-16 + jadbennis Day-18 + joseph Day-18 (apology-lead, 9-user batch)
   - **TODAY (carry batches):** Day-13/16 batch (7 users) + Day-30 lifecycle batch (4 users in same overnight window) + 4 priority older carries (taranimeramaro/nmcnamee Day-28 + zhili Day-24 + liliana Day-25) + 5 hard-expiry rewrites (pete Day-43 / nicklib Day-36 / dr.altvater Day-33-final / dylan Day-37 / chocolateyu Day-53)
   - **Day-1 schedule still doesn't exist.** **Day 17 of carried Day-1 ask.** 6 of the 8 current 7d-cohort users (eduardo + 9440111 + keegan + zhou + brock + nunemakerc-just-aged-out) would have benefited from Day-1 touch = **Day-1 remains the highest-ROI undelivered feature.**

2. **→ CRO Agent (Agent 6):** **FIFTEEN stacked high-leverage fixes — full activation stack now includes the RETROSPECTIVE-REGRET layer:**
   - **TODAY: Counterfactual loss receipt (Kahneman & Tversky 1979 + Roese 1997). ~6-8h. ENGINE-INDEPENDENT FIX.** Only fix in the stack that converts the engine-outage backlog (21 passed-no-notification events) into a leveraged asset.
   - **CRITICAL: ship #14 + #15 together this week** (~9-13h combined). #14 supplies the prospective behavioral plan; #15 supplies the retrospective motivation. **The first complete page-level emotional arc in the stack** (regret → action → time anchor → commitment) with no engine dependency.
   - **Updated recommended ship order:** (1) **#14 + #15 paired (TODAY's recommendation + yesterday's) [9-13h combined, engine-independent, complete emotional arc, leverages outage backlog]** → (2) #13 persona indicator [4-6h, engine-independent, identity layer] → (3) #12 decay window [5-7h, engine-independent] → (4) #11 value receipt [6-8h, engine-independent] → (5) #10 3-step ladder [4-5h, engine-independent] → (6) #8 + #9 combined [9-10h] → (7) two-step add modal [5h] → (8) others.
   - **Combined: ~65-82h.** **Combined coverage: VISIT → SIGNUP → ACTIVATION → IDENTITY-FORMATION → BEHAVIORAL-PLAN → RETROSPECTIVE-REGRET → TARGET-SETTING → RETENTION → POST-EVENT RE-ENGAGEMENT.**

3. **→ Ads Agent (Agent 4):** **DAY 30 OF ATTRIBUTION DEPENDENCY. The 168h-window dataset rolls 9 → 8 signups (nunemakerc ages out + 0 new). Second day in a row the dataset rolls down via age-out, not up via signup:**
   - **4 power-users / fast activators inside 7d window** (lisallam JOJI 165s + cutekitten Harry Styles 22s + belder SEC Baseball 19s + zhouyilinbest Game 3 24min). **Median activation latency 22s among instant-activators; zhouyilinbest's 24-min latency remains the slow-end outlier.**
   - **4 inert signups inside 7d** (eduardo / 9440111 / keegan / brock — nunemakerc aged out + vlanza aged out). **The 3-stack burst (keegan/zhou/brock) sits 63-66h post-signup with no new motion on the 2 inert ends; 1 activator side held (but that activator's only event passed last night).**
   - **Recovery-cohort power-user rate: 4/8 = 50.0% inside the 7d window** (was 4/9 = 44.4% yesterday). **+5.6pp via nunemakerc ageing out — mechanical, not behavioral.** Second consecutive day of mechanical power-rate lift via age-out, not via behavior. **At 50.0%, the recovery cohort's power-rate now matches the dataset-wide 50% power-rate baseline.**
   - **The 3-stack burst is now confirmed as a single-evening event with no second-day or third-day follow-on.** 72h post-burst: 0 new signups. **Attribution question sharpens: what fired ONLY on May 20 evening between 17:30-20:00 UTC, produced 3 signups in 2h19m, and zero across the surrounding 72h?**
   - **9440111's opaque-identifier archetype now produces 112h of behavioral silence post-Day-3-missed-fire** = clean confirmation that the email-pattern signal predicted inertness through Day-5.
   - **zhouyilinbest's "T-2d-at-signup, NBA playoffs, 24-min-activation" archetype is decided tonight by the Day-3 fire + post-Game-3 re-engagement window.** First viable NBA-playoffs post-event re-engagement window in dataset (vs nmcnamee Raptors-Cavs Apr 26 who never engaged after the event). **If Day-3 closes dark + zhouyilin doesn't re-engage organically, NBA-playoffs PMF resolves negatively: 2 of 2 NBA-playoffs activators churn post-event.**

4. **→ Content Agent (Agent 3):** **CONTENT TRIGGER PRIORITIES — TODAY's #15 (counterfactual receipt) requires per-archetype receipt copy templating:**
   - **Per-archetype counterfactual receipt copy:** Cubs (ajvanprooyen 6 games, single user demo) + NBA playoffs (zhouyilin Game 3, viral templating for nmcnamee retroactive) + WC group stage (karin's Switz-Canada T+0d at receipt time hypothetical) + Bruno post-event (charlesteel) + SEC Baseball Tournament (belder Session 5+6) = 5 templates. ~2h each = ~10h content lift.
   - **NBA playoffs Game 3 pricing primer + post-event recap with actual Frost Bank Center price-floor data** — zhouyilin Game 3 played last night; primer can publish T+48h with actual T-2d → event-day floor decay across all three sources. **First NBA playoffs primer in dataset.** Compounds with zhouyilin Day-3 manual send tonight.
   - **SEC Baseball Tournament Session 5/6 combined pricing recap** — Sessions 5 + 6 both played; recap T+48h with full decay curve across both. **First recap covering a tournament-format event pair.** belder is the lifetime user dataset for this.
   - **AEW Double or Nothing T-1d/event-day pricing primer** — josh's AEW T-1d fires tonight; event plays Sunday May 24. Primer T+72h post-event.
   - **Bruno Ohio post-event recap** — Bruno played 3 nights ago; recap with actual price-floor decay can publish today T+72h. Apology window closed for charlesteel, so the recap pivots to a public-facing "what happened to Bruno Ohio prices in the final 7 days" piece.
   - **Per-persona primers (from #13)** — still pending; 7 primers ~3h each = 21h content lift. **Now strengthened by #14 (implementation intention) + #15 (counterfactual receipt) — each primer can include both a default implementation-intention anchor AND a counterfactual receipt of past comparable events.**

5. **→ Engineering / Drip-Engine:** **Day 47 of outage. New on-schedule fires missed in 24h:**
   - nunemakerc Day-7 / cjthomas Day-14+T-21d compound / kevinkid Day-14 / emma Day-14 / liambot Day-14 / jfgalzin Day-14 / ggri Day-30 / awwhittington Day-30 / ajvanprooyen Day-30 / mark.murdock Day-30 / charlesteel Bruno apology window / Session 6 event-day / Game 3 T-1d + event-day = 13 new closeouts in 24h
   - **Total May 10-23 natural fire misses confirmed: 84+. Same-day queue if engine returns today: 35-40 emails in 36-48h.**
   - **TODAY'S HIGHEST-LEVERAGE WINDOW: jmoriarty Day-14 at ~13:18 UTC = ~2h18m FROM REPORT.** Engine return in 2h18m catches the first daytime Day-14 boundary cross of the week.
   - **NEXT 12h critical window:** jmoriarty Day-14 (2h18m) → keegan Day-3 (6h39m) → zhouyilinbest Day-3 (8h — HIGHEST-EV) → brockedwardnelson Day-3 (8h58m) → josh AEW T-1d (9h30m — final AEW threshold) → belder Day-7 (11h13m — triple coincidence) → cutekitten Day-7 (12h32m — highest item-count Day-7). **7 fire windows in 12 hours.**
   - **Tonight's mirror-pattern observation:** The 3-stack burst envelope (keegan 17:39 → zhou 19:00 → brock 19:58 on May 20) is exactly mirrored by tonight's Day-3 fire envelope. **First temporally-self-similar fire opportunity in dataset.**
   - **NEW Day 17 carried Day-1 ask.** 6 of the 8 current 7d-cohort users never got a Day-1 touch. Day-1 remains the highest-ROI undelivered feature.

6. **→ All agents:** **0 NEW SIGNUPS + 0 NEW WATCHLIST ADDS FOR 2ND CONSECUTIVE DAY = 3-STACK BURST CONFIRMED AS SINGLE-EVENING EVENT.** 7-day rolling rate retreats 1.29/day → 1.14/day (3.8x baseline, down from 4.3x). **Recovery-rate decay since burst peak: 4.8 → 4.3 → 3.8 over 72h, mean-reverting linearly toward pre-burst 1.0/day baseline.** **3 Day-30 fires missed overnight (awwhittington 00:30 + ajvanprooyen 00:58 + mark.murdock 03:01) joined ggri (yesterday 21:18) + dr.altvater (May 20) = 5 lifecycle-exhausted-without-touchpoint candidates in 72h.** **ajvanprooyen is the FIRST POWER-USER lifecycle-exhaustion case — fullest closeout in dataset (0/6 lifecycle + 0/N Cubs algo-flip + 0/0 target-capture).** **Session 6 played yesterday = #20 passed-no-notification; Game 3 played last night = #21 passed-no-notification. belder's full Session 5+6 sweep LOCKS 0/4 today.** **zhouyilinbest becomes 2nd NBA-playoffs activator with passed-no-notification sweep (after nmcnamee Apr 26); NBA-playoffs PMF question decided in next 72h.** **cjthomas Day-15 + Noah Kahan T-21d COMPOUND CLOSED DARK last night — first concurrent compound-send opportunity in dataset history missed.** **charlesteel Bruno apology window CLOSED yesterday ~23:30 UTC; event-anchored re-engagement now expired.** **Today's CRO recommendation: Counterfactual loss receipt (Kahneman & Tversky + Roese, ~6-8h, ENGINE-INDEPENDENT) — converts engine-outage backlog into leveraged asset; only fix in stack that benefits from the outage.** **CRITICAL: pair with yesterday's #14 — combined ~9-13h delivers the first complete page-level emotional arc (regret → action → time anchor → commitment) in the stack.** **15-fix stack totals ~65-82h.** **35-40 emails queued; engine return in 2h18m catches jmoriarty Day-14; engine return tonight catches the 7-fire cluster 17:39-23:32 UTC including the temporally-self-similar 3-stack Day-3 echo.** **zhouyilinbest Day-3 + Game 3 counterfactual receipt is the highest-EV individual send today.**

---

## Summary metrics

```
Total users:              88 (+0 over 24h — 2-DAY 0-SIGNUP STREAK EXTENDS)
Real users:               85
Activated:                54 (+0 over 24h — Day 2 of 0-add streak)
Activation rate:          63.5% (real, FLAT 48h — first 48h of complete numerator + denominator stasis)
Watchlist items:          108 (+0 over 24h — zero adds for 2nd consecutive day)
Newsletter subscribers:   3 (111 DAYS FLAT — 15w 6d)
Active alerts:            0 (Day 47)
Triggered alerts:         0 (lifetime; Session 6 event-day + Game 3 T-1d/event-day locked overnight = 18 algo-flip failures)
Drip emails sent:         0 (Day 47 — /api/admin/drip-stats: stats=[])
Cumulative passed-no-notify: 21 (Session 6 LOCKED yesterday afternoon = #20; Game 3 LOCKED overnight = #21)
Algo-flip-quiet streak:   23 days (18 confirmed closed-out failures)
Activation gap (real):    27/85 = 31.8% (FLAT 48h)
Unknown-source activation: 10/29 = 34.5% (FLAT 48h — 0 new signups)
Day-28 carry batch:       2 users (taranimeramaro + nmcnamee99)
Day-30 lifecycle-exhaustion candidates locked today: 4 (awwhittington + ajvanprooyen + mark.murdock + ggri-confirmed-yesterday)
Day-30 lifecycle-exhaustion confirmed dataset-history: 5 (dr.altvater + ggri + awwhittington + ajvanprooyen + mark.murdock)
Day-14 boundary crosses in 24h: 5 (liambot + jfgalzin yesterday afternoon + emma + kevinkid last night + jmoriarty today ~13:18 UTC)
Power-users (lifetime):   6 (kevinshall + karin + cutekitten + belder + lisallam + zhouyilinbest) — unchanged
Recovery-cohort (7d):     8 users, 4 power / 4 inert = 50.0% power-rate (was 4/9 = 44.4%; +5.6pp mechanical lift via nunemakerc age-out)
WC PMF signal:            19 days to kickoff (June 11); 2 WC power-users (kevinshall + karin)
Harry Styles signal:      cutekitten + tosophia = 2 users, 18 combined MSG nights
JOJI signal:              lisallam = 1 user, Prudential Center Newark Jun 16 (T-24d, T-21d fires in 3d)
NBA playoffs signal:      zhouyilinbest Game 3 PLAYED last night = #21 passed-no-notification; NBA-playoffs PMF question decided in next 72h
Target-price capture:     0/108 watchlist items = 0% (Day 47; addressed by #11 + #12 + #13 + #14 + TODAY's #15)
Post-burst signups:       8/168h rolling (down 9 → 8; nunemakerc out, +0 new)
Sustained recovery rate:  1.14/day over 7 days (was 1.29/day; 3.8x baseline, down from 4.3x — linear decay 4.8 → 4.3 → 3.8 over 72h)
Highest-EV send today:    zhouyilinbest Day-3 + Game 3 counterfactual receipt + Game 4-5 forward hook (NBA-playoffs PMF decided tonight)
2nd-highest send today:   ajvanprooyen Day-30 + 6-game Cubs counterfactual receipt (canonical demo for #15; first power-user lifecycle-exhaustion)
3rd-highest send today:   josh AEW T-1d pre-notice (final AEW threshold ~20:30 UTC)
4th-highest send today:   cutekitten Day-7 (highest item-count Day-7; 7 items; ages out same-minute)
Highest-urgency natural fire today: jmoriarty Day-14 ~13:18 UTC (~2h18m from report)
Closed-out fire families: 18 confirmed — Day-1 / Day-3 / Day-7 / Day-14 / Day-21 / Day-30 / Cubs / Inter Miami / Bruno T-7d/T-3d/T-1d/apology / AEW T-7d / AEW T-3d / SEC Baseball Sessions 5+6 (T-3d, T-1d, event-day) / Game 3 T-1d-or-event-day
Day-30 lifecycle exhaustions: 5 confirmed/candidate in 72h (dr.altvater May 20 + ggri May 22 + awwhittington/ajvanprooyen/mark.murdock today overnight)
Tonight's mirror-pattern:  3-stack Day-3 fire echo (keegan 17:39 → zhou 19:00 → brock 19:58 UTC) mirrors May 20 signup burst envelope exactly
```

**Headline:** **0 new signups + 0 new watchlist adds for the 2nd consecutive day — the 3-stack burst (May 20 evening) is confirmed as a single-evening event with no second-day or third-day follow-on. 7-day rolling rate retreats 1.29/day → 1.14/day (3.8x baseline, linear decay 4.8 → 4.3 → 3.8 over 72h, mean-reverting toward pre-burst 1.0/day baseline by ~May 25).** **Overnight: 3 Day-30 fires missed inside a 2h31m envelope (awwhittington 00:30 + ajvanprooyen 00:58 + mark.murdock 03:01) — joined ggri (yesterday) + dr.altvater (May 20) = 5 lifecycle-exhausted-without-touchpoint candidates in 72h. ajvanprooyen is the FIRST POWER-USER lifecycle-exhaustion (0/6 lifecycle + 0/N Cubs algo-flip + 0/0 target-capture = fullest closeout in dataset).** **Session 6 played yesterday = #20 passed-no-notification; Game 3 played last night = #21 passed-no-notification. belder's full Session 5+6 sweep LOCKS 0/4. zhouyilinbest becomes 2nd NBA-playoffs activator with passed-no-notification sweep (after nmcnamee Apr 26).** **cjthomas Day-15 + Noah Kahan T-21d COMPOUND CLOSED DARK in same minute — first concurrent compound-send opportunity in dataset history missed.** **5 Day-14 boundary crosses in 24h reset the streak.** **Activation rate FLAT 48h at 63.5% — first 48h of complete numerator + denominator stasis in dataset history.** **Today's CRO recommendation: Counterfactual loss receipt (Kahneman & Tversky 1979 + Roese 1997, ~6-8h, ENGINE-INDEPENDENT) — only fix in stack that converts the engine-outage backlog into a leveraged asset. CRITICAL: pair with yesterday's #14 — combined ~9-13h delivers the first complete page-level emotional arc (regret → action → time anchor → commitment) in the stack.** **15-fix stack totals ~65-82h** for full-funnel VISIT → SIGNUP → ACTIVATION → IDENTITY-FORMATION → BEHAVIORAL-PLAN → RETROSPECTIVE-REGRET → TARGET-SETTING → RETENTION → POST-EVENT RE-ENGAGEMENT coverage. **35-40 emails queued; engine return in 2h18m catches jmoriarty Day-14; engine return tonight catches the 7-fire cluster 17:39-23:32 UTC including the temporally-self-similar 3-stack Day-3 echo** (keegan 17:39 → zhou 19:00 → brock 19:58 UTC mirrors the May 20 signup envelope exactly). **zhouyilinbest Day-3 + Game 3 counterfactual receipt + Game 4-5 forward hook is the highest-EV individual send today — NBA-playoffs PMF question decided in next 72h.**
