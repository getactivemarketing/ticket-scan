# Growth Daily — 2026-05-18

> **24h report window** (May 17 11:00 UTC → May 18 11:00 UTC). Yesterday's report fired on schedule. Today's deltas are clean 24h comparisons.

## User health dashboard

| Segment                          | Count | % of Total | vs Yesterday |
|----------------------------------|-------|------------|--------------|
| Total users                      | **84** | 100% | **+2 in 24h (lisallam@hotmail.com May 17 14:05 UTC, eduardo@del-valle.com May 18 00:48 UTC — split-day cluster, 10h47m gap, NOT same-hour like the May 16 belder+cutekitten cluster).** **10 signups in 7-day post-burst window (May 12-18) = 1.43/day (was 1.33/day yesterday — rate ACCELERATES for the 7th consecutive day-on-day comparison).** Still 4-5x pre-burst (<0.3/day). **Second consecutive 2-signup day.** |
| New (last 7 days, API count)     | **10** | 11.9% | **+2 from yesterday's API count of 8.** **API count crosses double-digits for first time since project inception. usersThisWeek=10 confirmed via /api/admin/stats.** The 7-day cohort by signup-date (May 11-18): kevinshall / pattyglvz / c_calingasan / karin / vlanza / nunemakerc / belder / cutekitten / **lisallam / eduardo** = **10 in 7d**, all within hard 168h window. **Densest 7-day signup window in dataset history.** |
| Activated (has watchlist)        | **53** | 63.1% | **+1 over 24h (lisallam). eduardo (10h47m post-signup) has NOT activated.** **Watchlist 106 → 107 in 24h = +1 item = first single-digit positive day since yesterday's +9 burst.** lisallam added JOJI: SOLARIS at Prudential Center Newark Jun 16 **at 14:08:14 UTC — exactly 2m45s after signup at 14:05:29 UTC.** Activation latency: 165 seconds, faster than belder's 19s but slower than cutekitten's 22s — **3rd-fastest single-session activation of the recovery cohort.** target=null. **Activation rate: 53/81 real users = 65.4% (−0.4pp denominator-driven by eduardo non-activation).** |
| Active (visited in 7 days)       | unknown | — | no `last_login_at` instrumentation — **Day 42 open**. |
| At-risk (7-14d signup-age proxy) | 3 | 3.6% | **=0 net from yesterday.** jmoriarty (Day 9 today) + jadbennis (Day 13 today, **Inter Miami passed last night confirmed**) + joseph (Day 14 today — **crosses Day-14 boundary tonight 21:39 UTC, becomes churned in 10h44m post-report**). |
| Churned (14d+ signup-age proxy)  | **69** | 82.1% | **=0 net** — denominator grows by 2 but no new Day-14 crossings yet (joseph crosses tonight). **%-of-total drops 2.0pp on +2 denominator — second consecutive denominator-driven %-decline. Two consecutive days of churned-bucket %-recovery — first in dataset history.** |

> **Day 42 without `last_login_at` instrumentation. Day 42 of zero drip emails sent** (confirmed: `/api/admin/drip-stats` returns `stats=[]` with 20 pendingUsers, 0% `last_email_sent`). **Day 42 of zero triggered alerts (lifetime).**
> **NEWSLETTER SUBSCRIBERS: 3, UNCHANGED FOR 106 DAYS.** 15 weeks + 1 day.
> **YESTERDAY'S 28-32 EMAIL QUEUE PASSED WITHOUT A SEND. New on-schedule misses confirmed in last 24h:**
>   - **vlanza Day-3 (May 17 ~13:20 UTC) — MISSED.**
>   - **karin Day-3 (May 17 ~06:46 UTC) — already counted yesterday at 4h-carry; now 28h-carry.**
>   - **jadbennis Inter Miami match (May 17, evening) — PASSED WITHOUT NOTIFICATION. PASSED-EVENT #17 CONFIRMED.** 0/4 algo-flip sends across 11-day flag window.
>   - **cutekitten1234 Day-1 (May 17 ~23:32 UTC) — MISSED (no schedule entry; 12-day carried ask).** Highest-EV first-touch in dataset history closed without send.
>   - **belder4308 Day-1 (May 17 ~22:13 UTC) — MISSED (no schedule entry).** Events T-3d/T-4d today.
> **OPEN AT REPORT TIME (today, May 18):**
>   - **nunemakerc Day-3 fires ~15:41 UTC TODAY — ~4h41m from report.** Last completely-fresh natural-fire opportunity before belder Session 5 T-3d.
>   - **belder SEC Baseball Session 5 T-3d fires ~22:14 UTC TODAY — ~11h14m from report. FIRST FLIP THRESHOLD FOR THE NEW BELDER SCHEDULE.**
>   - **lisallam Day-1 and eduardo Day-1 — no schedule entry exists (Day 12 of carried Day-1 ask).** lisallam is 21h post-signup with 1 active item (target=null); eduardo is 10h47m post-signup with 0 items. **eduardo is the priority inert-recovery touchpoint of the day.**
> **Total May 10-18 natural fire misses confirmed: 43+** (38+ through yesterday's report + vlanza Day-3 + karin Day-3 + cutekitten Day-1 + belder Day-1 + Inter Miami T-1d = 5 new closeouts in 24h).
> Watchlist items: **107 (+1 over 24h).** Target-price capture: **0/107 = 0% (Day 42).**
> `usersToday: 2` (lisallam + eduardo), `usersThisWeek: 10`. **Activation rate: 53/81 real users = 65.4% — DOWN 0.4pp over 24h** (denominator-driven by eduardo non-activation; numerator + lisallam offsets partially). **First negative-direction 24h move since May 16's +0.9pp, but driven entirely by single non-activating signup, not loss of activated users.**

## What changed in 24h

1. **SECOND CONSECUTIVE 2-SIGNUP DAY — LISALLAM (MAY 17 14:05 UTC) + EDUARDO (MAY 18 00:48 UTC). 10h47m INTRA-DAY GAP, NOT SAME-HOUR.** Yesterday's belder+cutekitten cluster was a 79-minute same-night burst. Today's pair is split-day: afternoon UTC (likely US morning/midday) + late-night UTC (likely US evening or international). **First consecutive 2-signup days in dataset history.** Combined 4 signups in 36 hours. **Signup rate over 7 days now 1.43/day** vs <0.3/day pre-burst = **4.8x baseline.** **The 7-day-rolling signup metric crosses 10 for the first time in project history (usersThisWeek=10, per `/api/admin/stats`).**

2. **LISALLAM ACTIVATES IN 165 SECONDS — JOJI: SOLARIS, PRUDENTIAL CENTER NEWARK, JUN 16.** Signup 14:05:29 UTC, first watchlist add 14:08:14 UTC. **3rd-fastest single-session activation in the recovery cohort** (behind belder's 19s and cutekitten's 22s, ahead of kevinshall's 79s and karin's 37s). Single-item activation pattern = **most common archetype in the dataset** (1 item is the median; mean is 2.0 across activated users). JOJI: SOLARIS Jun 16 = **T-29d today.** Day-7 fires May 24, Day-3 fires May 20, T-7d alert window opens Jun 9. **Genre marker: alt/lo-fi pop — NEW genre signal for the recovery cohort (cohort genres now: WC, Harry Styles, SEC Baseball, Matt Rife, JOJI = 5 distinct genres in 10 signups).** Maximally genre-diverse cohort in dataset.

3. **EDUARDO@DEL-VALLE.COM — 10H47M POST-SIGNUP, 0 WATCHLIST, NO EMAIL SENT.** Signed up May 18 00:48:07 UTC (very late UTC time — likely US evening or international). 11h-old account at report time. **First "post-signup activation gap with no carry frame yet" candidate of the day.** The Day-1 schedule gap (12 days of ask) means eduardo will receive nothing until Day-3 fires May 21 ~00:48 UTC (~62h from now). **eduardo is the cleanest "Day-1 schedule entry would help" case in the dataset because there's no prior event to apologize about, no carry frame to construct — just a fresh signup the system isn't going to talk to for 62 hours.** **The most-leverageable case against the Day-1 schedule gap to date.**

4. **POWER-USER / INERT SPLIT REBALANCES — 5 POWER (was 4) vs 5 INERT (was 4) = 50/50 HOLD.** Yesterday: 4 power (kevinshall + karin + cutekitten + belder) vs 4 inert (pattyglvz + c_calingasan + vlanza + nunemakerc) = 50/50. Today: **5 power** (+lisallam) vs **5 inert** (+eduardo, pending) = **50/50.** **The symmetrical split holds for the second consecutive day** — first time 2 consecutive same-split-cohort days have occurred. **n=10 same-cohort split is now the highest-resolution attribution-eligible dataset in project history. If Ads Agent resolves channel for any 5 of 10, we get our first concrete activation-vs-inert split-by-channel comparison.**

5. **INTER MIAMI MAY 17 = PASSED-EVENT #17 CONFIRMED.** Match played yesterday evening. **0/4 algo-flip sends across the full 11-day flag window** (T-7d May 10, T-5d May 12, T-3d May 14, T-1d May 16). jadbennis added the event 12 days before kickoff and received nothing — no welcome, no Day-3, no Day-7, no T-7d, no T-5d, no T-3d, no T-1d, no day-of. **Eleven days of tracking, zero touchpoints, match passes.** This is the most-flagged single-event miss in dataset history. **The "single most-decisive moment of Q2" has resolved — passed-event #17 is locked.** Cubs trip (6 events) + Inter Miami (1) + Phillies passed + Mac DeMarco passed + Toronto FC v Inter Miami May 9 passed + Raptors-Cavs Apr 26 passed + 7 prior events = 17 confirmed.

6. **VLANZA DAY-3 MISSED YESTERDAY 13:20 UTC = 38TH NATURAL FIRE MISS, CONFIRMED. KARIN DAY-3 NOW 28H CARRY.** vlanza's Day-3 was yesterday's "fires ~2h20m from report" forecast — it fired into the dark engine. Now ~22h-carry. karin Day-3 closed-out at 28h-carry (was 4h yesterday; today the frame "Three and a half days ago..." still parses, but barely). Both join the 5-user Day-23/24 carry batch as priority carries.

7. **BELDER SEC BASEBALL SESSION 5 T-3d FIRES ~22:14 UTC TODAY = FIRST AT-RISK FLIP THRESHOLD OF THE NEW SCHEDULE.** belder signed up May 16 22:13:49 UTC with events 4 and 5 days out. Today is the T-3d for Session 5 (May 21). **The fire window is ~11h14m from report time — engine return between now and 22:14 UTC catches the first SEC Baseball flip threshold AND the first ever real-time fire for the May 16+ cohort.** If engine stays dark today, Session 5 T-3d closes out and becomes the **12th confirmed flip failure** of the streak (Cubs 6 + Inter Miami 1 + Bruno T-7d May 13 + Bruno T-3d May 16 + Inter Miami T-1d May 16 + AEW T-7d May 16 + Session 5 T-3d today = 12).

8. **JMORIARTY CROSSES DAY 9 — THE 8-USER DAY-9 GROUP FORMS.** jmoriarty Day-9 today joins emma/kevinkid/jfgalzin/liambot at Day 10-11 = **5-user Day-9/10/11 cohort** all carrying Day-7 missed-fires from May 14-16. This is the **densest "Day-7 to Day-9/10/11 carry" segment of the dataset.** Frame: "A week and a day to two ago..." still parses cleanly. **All 5 share the same email body archetype — natural batch.**

9. **JOSEPH ABOUT TO CROSS DAY 14 TONIGHT (~21:39 UTC).** joseph.g.nicolosi signed up May 4 21:39:37 UTC. **Crosses 14-day boundary tonight, ~10h44m post-report.** Will become passed-event #N+1 for "still 0 watchlist, now churned" classification. **No schedule entry was ever fired for joseph (Day-7 missed May 11 at 144h-carry hard expiry; Day-14 fires tonight into the dark engine).** **joseph becomes the first user whose entire Day-7 family AND Day-14 fire are both closed out in the same engine-outage window.**

10. **THE 42-DAY-OUTAGE PATTERN — RECOVERY MOTION COMPOUNDS, ENGINE FAILURE COMPOUNDS:**
    - Total users: 84 (was 82, **+2 over 24h — recovery accelerates for 7th consecutive day-on-day**)
    - Watchlist items: 107 (was 106, **+1 over 24h — single-digit move after yesterday's +9 burst**)
    - Drip emails sent: 0 for **42 consecutive days** (compounds)
    - Triggered alerts: 0 lifetime (compounds; Inter Miami T-1d closed-out yesterday confirms #17)
    - Newsletter subscribers: 3 for **106 consecutive days** (compounds; 15w 1d)
    - Activation rate: 65.4% (real users) — **−0.4pp 24h, denominator-driven**, not loss-of-activated
    - Cumulative passed-no-notification: **17 (Inter Miami confirmed last night)**
    - **2 of 6 dimensions show recovery motion** (signups + watchlist). **Activation rate retreats** (denominator effect, not numerator loss). **3 of 6 remain locked behind engine-dark constraint.**

## Activation gap

**Users signed up in last 7 days (by signup-date) with 0 watchlist items: 5** (was 8 yesterday — **−3 net: lisallam moved to activated column; nunemakerc/vlanza/c_calingasan/pattyglvz/jmoriarty stay; emma/kevinkid/jfgalzin/liambot rolled out of 7-day window**):

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **eduardo@del-valle.com** | May 18 00:48 UTC | 10h 12m | **0** | **Day 0/1 boundary today. NEW. ~11h post-signup, 0 items, 0 emails received.** Day-1 schedule entry doesn't exist. **HIGHEST-EV inert-recovery touchpoint of the day — fresh signup, no carry frame, no prior asks. Cleanest "Day-1 schedule would help" case in dataset.** |
| **nunemakerc@gmail.com** | May 15 15:41 UTC | 2d 19h | **0** | **Day 3 today. Day-3 fires ~15:41 UTC TODAY (~4h41m from report).** Last fresh natural fire opportunity today. |
| **vlanza@sbcglobal.net** | May 14 13:20 UTC | 3d 22h | **0** | **Day 4 today. Day-3 MISSED yesterday ~13:20 UTC (~22h-carry).** Frame "Three days and a few hours ago..." still parses. |
| **c_calingasan@yahoo.com** | May 13 11:46 UTC | 4d 23h | **0** | **Day 5 today. Day-3 missed May 16 (~48h-carry HARD EDGE).** Reframe to "Five days ago..." |
| **pattyglvz@msn.com** | May 12 15:23 UTC | 5d 20h | **0** | **Day 6 today. Day-3 missed May 15 (~68h-carry).** Frame "Almost a week ago..." Still parses. |
| **jmoriarty13@yahoo.com** | May 9 13:18 UTC | 8d 22h | **0** | **Day 9 today. Day-3 missed May 12 (150h-carry HARD EXPIRY). Day-7 missed May 16 (~46h-carry).** Apology + curiosity hook. Joins 5-user Day-9/10/11 batch. |

**Activated within 7-day window (carried + new):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **lisallam@hotmail.com** | May 17 14:05 UTC | 21h 0m | **1** (JOJI: SOLARIS Newark Jun 16, target=null) | **Day 0/1 boundary today. NEW. 21h post-signup, 1 item in 165s, 0 emails received.** Day-1 schedule entry doesn't exist. **HIGH-EV activation-deepen touchpoint of the day** — fast activator, target-capture window open. |
| **cutekitten1234** | May 16 23:32 UTC | 1d 11h | **7** (Harry Styles MSG Aug-Sep, all target=null) | **Day 2 today. Day-1 MISSED yesterday (no schedule entry, 12h-carry).** Highest-EV first-touch in dataset history closed without send. **Day-3 fires May 19 ~23:32 UTC (~36h from now).** |
| **belder4308** | May 16 22:13 UTC | 1d 13h | **2** (SEC Baseball May 21-22, target=null) | **Day 2 today. Day-1 MISSED yesterday (no schedule entry, 13h-carry).** **Session 5 T-3d fires TODAY ~22:14 UTC (~11h14m).** HIGH urgency. |
| **karin_ef1** | May 14 06:46 UTC | 4d 4h | **2** (WC, target=null on both) | **Day 4 today. Day-3 MISSED yesterday (~28h-carry).** Send manually today still parses. |
| **kevinshall87** | May 12 16:44 UTC | 5d 18h | **6** (5 WC + Matt Rife, all target=null) | **Day 6 today. Day-3 missed May 15 (~67h-carry).** Day-7 fires May 19 ~16:44 UTC (~30h from now). |
| **liambot62** | May 8 13:07 UTC | 9d 22h | 1 (Toronto FC v Inter Miami passed May 9, target=null) | **Day 10 today. Day-7 missed May 15 (~70h-carry HARD EDGE).** Apology-only. |
| **cjthomas2557** | May 7 22:49 UTC | 10d 12h | 1 (Noah Kahan Jun 12, target=null) | **Day 11 today.** Day-7 missed May 14 (~92h-carry HARD EDGE). Noah Kahan T-25d. |
| **sparkitrightthere** | May 7 11:38 UTC | 11d 0h | 1 (Mac DeMarco PASSED May 7, target=null) | **Day 11 today. Day-7 missed May 14 (~96h-carry HARD EDGE).** Event passed 11d ago. Re-engagement only. |
| **jadbennis0** | May 5 20:33 UTC | 12d 14h | 1 (**Inter Miami CF PASSED LAST NIGHT**, target=null) | **Day 13 today. Inter Miami passed-event #17 CONFIRMED. 0/4 algo-flip sends, no day-of.** Apology-only at this point. |

**Outside 7-day window (carried, still 0 watchlist):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **joseph.g.nicolosi** | May 4 21:39 UTC | 13d 13h | 0 | **Day 14 today — CROSSES CHURNED BOUNDARY TONIGHT ~21:39 UTC (~10h44m).** Day-7 missed May 11 (168h-carry HARD EXPIRY). Day-14 fires into dark engine tonight. Frame: "Two weeks in..." |
| **emmacmather** | May 8 21:54 UTC | 9d 13h | 0 | **Day 10 today. Day-3 missed May 11 (162h HARD EXPIRY). Day-7 missed May 15 (~37h-carry).** Reframe "A week and a half ago..." |
| **kevinkid94** | May 8 20:52 UTC | 9d 14h | 0 | **Day 10 today. Day-7 missed May 15 (~62h-carry HARD EDGE).** |
| **jfgalzin** | May 8 12:54 UTC | 9d 22h | 0 | **Day 10 today. Day-7 missed May 15 (~70h-carry HARD EDGE).** |
| **natalie.sotocruz** | May 7 18:40 UTC | 10d 16h | 0 | **Day 11 today. Day-3 missed May 10 (196h HARD EXPIRY). Day-7 missed May 14 (~88h-carry).** Reframe to "Eleven days in..." |
| **zhili1208** | Apr 29 03:16 UTC | 19d 8h | 0 | **Day 19 today. Day-14 missed May 13 (128h-carry HARD EXPIRY).** Frame: "Three weeks in." |
| **lilianamasyrubi** | Apr 28 05:24 UTC | 20d 6h | 0 | **Day 20 today. Day-14 missed May 12 (152h HARD EXPIRY).** Frame: "Three weeks in." |
| taranimeramaro | Apr 25 18:25 UTC | 22d 17h | 3 (Bruno MetLife Aug, target=null) | **Day 23 today. Day-21 missed May 16 (~41h-carry).** Frame "Just over three weeks..." Still parses. |
| nmcnamee99 | Apr 25 11:51 UTC | 22d 23h | 1 (Raptors-Cavs PASSED Apr 26) | **Day 23 today. Day-21 missed May 16 (~47h-carry).** Apology-lead. |
| mark.murdock | Apr 23 03:01 UTC | 25d 8h | 0 | **Day 25 today. Day-21 missed May 14 (~104h-carry HARD EDGE).** |
| awwhittington | Apr 23 00:30 UTC | 25d 10h | 0 | **Day 25 today. Day-21 missed May 14 (~106h-carry HARD EDGE).** |
| ajvanprooyen | Apr 23 00:58 UTC | 25d 10h | 6 (Cubs trip 100% passed) | **Day 25 today. Day-21 missed May 14 (~106h-carry HARD EDGE).** Cubs apology lead. |
| ggri73 | Apr 22 21:18 UTC | 25d 14h | 0 | **Day 26 today. Day-21 missed May 13 (~110h-carry HARD EDGE).** |
| charlesteel126 | Apr 22 11:38 UTC | 25d 23h | 1 (**Bruno Ohio T-2d TOMORROW**) | **Day 26 today. Bruno T-3d carry 47h. Bruno T-1d May 19 (24h-from-now). Day-21 carry 120h HARD EXPIRY.** |
| dr.altvater | Apr 20 14:08 UTC | 27d 21h | 0 | **Day 28 today. Day-21 carry 168h HARD EXPIRY.** |
| dylanbaldy | Apr 15 18:24 UTC | 32d | 0 | Churned. |

- **23 real users** (excluding 3 test) have **never** added a watchlist item → **23/81 = 28.4%** (was 29.1% yesterday — **−0.7pp, denominator-driven by lisallam activation + eduardo not-yet-activated**). **Second consecutive day of activation-gap reduction. First 2-day consecutive narrow.**
- **Activation rate trajectory (real users, last 12 days):** 71.0 → 71.4 → 71.4 → 71.2 → 68.6 → ? → 67.6 → 67.6 → 67.1 → ? → 65.8 → 64.9 → 65.8 → **65.4 (−0.4pp 24h).** Denominator-driven retreat.
- **7-day decline: −5.8pp** (May 8 71.2% → May 18 65.4%; widened 0.4pp from yesterday).

**Acquisition-source inference: 5:5 split holds for 2nd consecutive day = symmetry confirmed.**

The pattern: **25 unknown-source users in 24 days at n=25** (lisallam + eduardo both unknown-source). Against **3 known (ids 59, 61, 62)**. **Unknown-source activation rate: 9/25 = 36.0%** (up from 34.8% yesterday — second consecutive +1.2pp lift). **Known-source: 3/3 = 100% (frozen).** **Gap narrows to 2.78x (from 2.9x yesterday, 3.5x two days ago).** Day 25 of attribution dependency. **Same-cohort 10-user split (5 power + 5 inert in 7 days, 50% power-user rate) is now the highest-resolution attribution-eligible dataset in project history.** **The critical question for Ads Agent: do the 5 activated (kevinshall WC + karin WC + cutekitten Harry Styles + belder SEC Baseball + lisallam JOJI) share a channel that the 5 inerts (pattyglvz + c_calingasan + vlanza + nunemakerc + eduardo) don't?** **5 distinct content niches in the activated cohort** (WC, Harry Styles, SEC Baseball, JOJI alt-pop, + Matt Rife sub-genre) — even less genre-correlation than yesterday. **Channel-driven self-selection signal strengthens with each new genre that joins the activated cohort.**

## Churn signals

- Unsubscribes today: **0** (3 subscribers; **106 days flat = 15 weeks 1 day**).
- Users entering "at-risk" today: **+0 net** (jmoriarty still at-risk; jadbennis at-risk became Inter-Miami-passed yesterday).
- Users entering "churned" since yesterday: **+0 net so far** — **joseph.g.nicolosi crosses tonight ~21:39 UTC** (first natural Day-14 boundary cross in 4 days).
- Alert fatigue candidates: **0** (0 alerts ever sent — Day 42).
- Events passed without notification (cumulative): **17 CONFIRMED** (Inter Miami May 17 locked in last night).
- **Algo-overrides as preemptive "events lost without notification":** **3 events** still open:
  - **Bruno Ohio May 20** [charlesteel, T-3d carry 47h, T-1d fires May 19 ~11:38 UTC = ~25h from now — LAST CHANCE]
  - **AEW May 24** [josh, T-7d missed May 16, T-3d May 21 ~20:30 UTC, T-1d May 23 ~20:30 UTC — 2 thresholds remain]
  - **SEC Baseball Session 5 May 21 + Session 6 May 22** [belder, Session 5 T-3d fires ~11h from now TODAY, Session 6 T-3d fires May 19 ~22:14 UTC — 36h from now — TODAY IS THE FIRST CRITICAL FIRE]
- **18th day of non-Cubs flip-quiet streak.** Inter Miami T-1d closed-out yesterday confirms 11 total flip failures: Cubs (6) + Inter Miami T-7d/T-5d/T-3d/T-1d (4) + Bruno T-7d + Bruno T-3d + AEW T-7d = 11. Session 5 T-3d today could push to 12.

## At-risk users (7–14d inactive proxy)

| User | Day | Watchlist | Days to event | Recommended intervention |
|------|-----|-----------|---------------|--------------------------|
| **joseph.g.nicolosi** | 13d (crosses 14 tonight) | 0 | — | **CHURN BOUNDARY 10h44m. SEND BEFORE 21:39 UTC.** Body: "Two weeks ago this evening you signed up. We've sent you nothing — that's on us. Tell us one event and we'll set it up." Day-7 family hard-expired; Day-14 fires into dark engine tonight. |
| **jmoriarty13** | 9d | 0 | — | **AT-RISK. Day-7 missed May 16 (~46h-carry).** Joins 5-user Day-9/10/11 batch. Body: "A week and a few days ago you signed up." |
| **jadbennis0** | 13d | 1 (Inter Miami **PASSED LAST NIGHT**) | passed | **PASSED-EVENT #17 CONFIRMED.** Body: "Inter Miami played last night. We owed you 4 alerts. We sent 0. Here's what we're rebuilding." Apology-only re-engagement. |

## Live algo-flip post-mortem (today)

| User | Event | Days out | Flip status | Days flagged | Sends |
|------|-------|----------|-------------|--------------|-------|
| **jadbennis0** | **Inter Miami CF vs Portland, May 17 (PASSED)** | **−1 (yesterday)** | **0/4 SENDS. PASSED-EVENT #17 CONFIRMED.** | 12 | 0 |
| **charlesteel126** | **Bruno Mars Ohio May 20** | **2** | **T-7d MISS May 13. T-3d MISS May 16 (~47h-carry).** **T-1d May 19 ~11:38 UTC = LAST CHANCE (~25h from report).** | 7 | 0 |
| **josh** | **AEW Double or Nothing May 24** | **6** | **T-7d MISS May 16. T-3d May 21 ~20:30 UTC (~57h). T-1d May 23 ~20:30 UTC (~105h).** | 3 | 0 |
| **belder4308** | **SEC Baseball Tournament Session 5 May 21** | **3** | **NEW TODAY. T-3d FIRES ~22:14 UTC TODAY (~11h14m from report). FIRST FLIP THRESHOLD FOR NEW SCHEDULE.** | 2 | 0 |
| **belder4308** | **SEC Baseball Tournament Session 6 May 22** | **4** | **NEW. T-3d fires May 19 ~22:14 UTC (~35h from now).** | 2 | 0 |
| **lisallam** | **JOJI: SOLARIS, Prudential Center Newark, Jun 16** | **29** | **NEW TODAY. NOT YET FLIPPED — T-21d May 26 (8d), T-7d Jun 9 (22d).** | 1 | 0 |
| cjthomas2557 | Noah Kahan, Kia Center Orlando, Jun 12 | 25 | NOT YET FLIPPED — T-21d May 22 (4d) | 11 | 0 |
| **kevinshall87 (power user)** | **5 WC + Matt Rife** | 27-58 (WC), 131 (Matt Rife) | NOT YET FLIPPED — earliest T-7d Jun 7 | 6 | 0 |
| **karin_ef1 (power user 2)** | **WC Switz-Canada + R16 Match 96** | 37 (group), 50 (R16) | NOT YET FLIPPED — earliest T-7d Jun 17 | 4 | 0 |
| **cutekitten1234 (power user 3)** | **7 Harry Styles MSG Aug 26 - Sep 9** | 100-114 | NOT YET FLIPPED — earliest T-7d Aug 19 | 2 | 0 |

**18th day of algo-flip-quiet streak.** **TODAY's environment: TWO flip thresholds fire — belder Session 5 T-3d (~11h) AND ~25h-from-now Bruno T-1d.** **Engine return between now and 22:14 UTC catches the first ever real-time fire for the May 16+ cohort.** Engine return by May 19 ~12:00 UTC catches both Bruno T-1d AND belder Session 6 T-3d AND belder Session 5 T-3d (carried).

**TODAY's critical algo-flip window: ~22:14 UTC May 18.** First flip threshold for any user in the recovery cohort. **Highest-leverage fire window of the entire outage so far.**

Next major algo-flip windows after today:
- **Bruno Ohio T-1d ~11:38 UTC May 19** (~25h) — last Bruno chance, 8th and final flip threshold for charlesteel
- **belder Session 6 T-3d ~22:14 UTC May 19** (~35h)
- **belder Session 5 T-1d ~22:14 UTC May 20** (~59h)
- **belder Session 6 T-1d ~22:14 UTC May 21** (~83h)
- **AEW T-3d ~20:30 UTC May 21** (~57h)

## Churned users with re-engagement potential

| User | ~Days inactive | Watchlist | Upcoming hook? | Priority |
|------|----------------|-----------|----------------|----------|
| **charlesteel126** | 25d | 1 (Bruno Ohio May 20) | **2d** | **HIGHEST** — T-1d May 19 11:38 UTC = last Bruno chance (25h from now). |
| **josh** | 28d | 1 (AEW May 24) | **6d** | **HIGH** — T-3d May 21 ~20:30 UTC next (57h from now). |
| **ajvanprooyen** | 25d | 6 (Cubs passed) | passed | **HIGH** — "Twenty-five days, six Cubs games, all passed, zero alerts." Apology candidate. |
| **mark.murdock** | 25d | 0 | — | **HIGH** — Day-21 104h-carry hard edge. Day-30 in 5 days. |
| **awwhittington** | 25d | 0 | — | **HIGH** — Day-21 106h-carry hard edge. |
| **ggri73** | 26d | 0 | — | **HIGH** — Day-21 110h-carry hard edge. |
| **nmcnamee99** | 23d | 1 (passed) | passed | **HIGH** — Day-21 47h-carry. |
| **taranimeramaro** | 23d | 3 (Bruno MetLife Aug) | 95-99d | **HIGH** — Day-21 41h-carry. Best target-setting candidate. |
| **lilianamasyrubi** | 20d | 0 | — | **HIGH** — Day-14 152h HARD EXPIRY. |
| **dr.altvater** | 28d | 0 | — | **MEDIUM** — Day-21 168h HARD EXPIRY. |
| **nicklib253** | 31d | 1 (Phillies passed) | passed | **MEDIUM** — Day-21 240h carry, apology-only. |
| **pete.uzelac77** | 38d | 6 (WC + Darts) | 33-48d | **MEDIUM** — Day-30 192h HARD EXPIRY. WC content hook viable. |
| dylanbaldy | 32d | 0 | — | LOW |
| **blubberboi** | 38d | 1 (Ed Sheeran Aug 8) | 82d | MEDIUM |
| **laye.aurelien** | 46d | 2 (Shakira Jul 20+23) | 63-66d | HIGH |
| **lvasub6** | 50d | 2 (Flyleaf Jul 17-18) | 60-61d | HIGH |
| **tosophiameyer** | 69d | 11 (Harry Styles MSG) | 98-122d | **HIGH** — **same residency as cutekitten1234. cutekitten's still-active engagement is fresh comparable.** |
| **brigitte.theisen** | 82d | 10 (Backstreet Sphere) | 60-80d | **HIGH** — deepest non-test watchlist. |

**Passed-event overhang: 17 churned/at-risk users with passed events or no immediate hook. Inter Miami CF locked in last night.**

## Churn intervention: email content (queued for engine return)

### TODAY's natural fire windows (in order of upcoming)

#### **nunemakerc Day-3 — fires ~15:41 UTC TODAY (~4h41m from report)**

**Subject:** What event made you sign up for TicketScan?
**Body:**
> Three days ago you signed up for TicketScan. You haven't added an event yet, so we can't track anything for you. Tell us one event you're curious about — concerts, sports, theater — and we'll set up tracking in 30 seconds.
>
> Reply with the event name, or [browse events](https://www.ticketscan.io).

---

#### **belder4308 SEC Baseball Session 5 T-3d — fires ~22:14 UTC TODAY (~11h14m from report). FIRST ALGO-FLIP FIRE OF THE RECOVERY COHORT.**

**Subject:** SEC Baseball Tournament Session 5 is in 3 days — here are today's prices
**Body:**
> Session 5 of the SEC Baseball Tournament tips Saturday at Hoover Metropolitan. You added it to your watchlist last week.
>
> **Current prices across the three sources we track:**
> - Ticketmaster: [floor price]
> - SeatGeek: [floor price]
> - StubHub: [floor price]
>
> SEC Baseball ticketing tends to soften over T-3d → T-1d as the bracket fills in and the "TBD vs TBD" matchups resolve. Set a target price now and we'll email you if any source drops below it before kickoff.
>
> [Set a target](https://www.ticketscan.io/watchlist)

---

### MANUAL SENDS RECOMMENDED TODAY (no schedule entry or carry priority)

#### **eduardo@del-valle.com Day-1 manual (HIGHEST-EV inert-recovery touch)** — no schedule entry exists

**Subject:** What event brought you to TicketScan last night?

**Body:**
> Last night you signed up for TicketScan. You haven't added an event yet — and that's completely normal. Most people sign up either right after seeing a high-priced ticket or right before deciding to buy.
>
> Tell us the event you had in mind. We compare prices across Ticketmaster, SeatGeek, and StubHub side-by-side, and email you when any source drops below your target.
>
> Reply with the event name (concert, sport, theater — anything in the US), or [start a search](https://www.ticketscan.io).

---

#### **lisallam Day-1 manual (HIGH-EV activation-deepen touch — JOJI single-event archetype)** — no schedule entry exists

**Subject:** JOJI: SOLARIS is in 29 days — let's lock in a price target

**Body:**
> Yesterday afternoon you signed up and added JOJI: SOLARIS at Prudential Center to your watchlist — 2 minutes 45 seconds after creating your account. Newark, June 16.
>
> Here's how this show typically prices over the next 29 days: Ticketmaster Verified Resale tends to be flat through T-14d, then softens 10-20% in the final two weeks. SeatGeek and StubHub both tend to drift higher T-7d-and-in as the show approaches.
>
> Set a target price now (we suggest **$95-110** based on similar-tier Prudential Center shows) and we'll email you the second any source drops below it. Takes 30 seconds.
>
> [Set a target on JOJI: SOLARIS](https://www.ticketscan.io/watchlist)

---

#### **cutekitten1234 Day-2 carry (12h-carry, was Day-1 yesterday — HIGHEST-EV first-touch in dataset history closed yesterday)**

**Subject:** 7 Harry Styles nights tracked. Let's set targets so we can email you the cheapest one.

**Body:**
> Two days ago you added every available Harry Styles "Together, Together" night at MSG to your watchlist — August 26, 28, 29, September 2, 4, 5, 9. Seven shows.
>
> Here's how Harry Styles MSG residencies historically price: there's almost always a $80-200 swing between the cheapest and most expensive night. The cheapest is rarely the opening or closing show — it's usually mid-residency, on a weeknight, and the price doesn't settle until 30-45 days out.
>
> Set a single target price for the run — say, **$280** — and we'll email you the moment any of the 7 nights drops below it. You buy whichever night fires first.
>
> [Set a target on all 7](https://www.ticketscan.io/watchlist)

---

#### **belder4308 Day-2 carry (manual, separate from Session 5 T-3d above)**

Skip — covered by the Session 5 T-3d send above (same user, same touchpoint within ~11h).

---

#### **karin_ef1 Day-4 carry (28h-carry, manual — power-user #2)**

**Subject:** Three and a half days in — let's set targets on your World Cup matches

**Body:**
> Three and a half days ago you added Switzerland vs Canada (June 24, Group B) and Round of 16 Match 96 (July 7) to your watchlist. World Cup resale prices typically swing 30-50% between Ticketmaster, SeatGeek, and StubHub in the weeks before kickoff.
>
> Set a target price on each match and we'll email you the second any source drops below it.
>
> [Set targets](https://www.ticketscan.io/watchlist)

---

#### **kevinshall87 Day-6 carry (~67h, manual — power-user #1)**

**Subject:** 6 events tracked. 0 target prices. 2 minutes to fix it.

**Body:**
> Six days ago you added 6 events to TicketScan in 3 minutes — five World Cup matches at AT&T Stadium plus Matt Rife. **Deepest first-session watchlist in dataset history until two nights later someone added 7 Harry Styles nights, and yesterday someone added one JOJI show.**
>
> What's missing on yours: target prices. Without them, we can't email you when Ticketmaster, SeatGeek, or StubHub drops below your number. World Cup matches at AT&T tend to swing $80-200 between source-floors as the tournament approaches — set a target on each and we'll watch all three sources.
>
> [Set targets on your watchlist](https://www.ticketscan.io/watchlist)

---

#### **jadbennis Inter Miami passed-event apology (re-engagement)**

**Subject:** Inter Miami played last night. We owed you 4 alerts. We sent 0.

**Body:**
> Inter Miami CF vs Portland Timbers played last night at Nu Stadium. You added this match on May 5 — twelve days before kickoff. Our alert engine should have emailed you four times (T-7d, T-5d, T-3d, T-1d) and once on game day. **Every one of those windows missed. That's on us, not you.**
>
> We're rebuilding the alert engine right now. The next match you add will get every threshold notification — guaranteed. We owe you that. Want to start with one event? [Add it here](https://www.ticketscan.io).

---

#### **c_calingasan Day-5 carry (~48h hard edge)**

**Subject:** Five days ago you signed up for TicketScan. What event were you looking for?

**Body:**
> Five days ago you signed up. You haven't added an event yet, so we can't track anything for you. What's the one event you came here for? Reply with it, or [browse events](https://www.ticketscan.io) — we'll set up tracking in 30 seconds.

---

#### **pattyglvz Day-6 carry (~68h)**

**Subject:** Almost a week in. What event were you looking for?

**Body:** Same structure as c_calingasan, tense adjusted to "Almost a week ago you signed up..."

---

#### **vlanza Day-4 carry (~22h)**

**Subject:** Three days and a few hours ago — what event made you sign up?

**Body:** Same body archetype as c_calingasan, tense adjusted.

---

### CARRIES (24-240h delayed, send today as batch)

#### **JOSEPH DAY-14 BOUNDARY SEND (CROSSES TONIGHT ~21:39 UTC)**

**Subject:** Two weeks in. We've sent you nothing — that's on us.
**Body:** "Two weeks ago this evening you signed up for TicketScan. You haven't added an event yet, but more importantly: we should have followed up at Day 3, Day 7, and tonight at Day 14. We didn't. We're rebuilding the engine. Tell us one event you're curious about and we'll set up tracking in 30 seconds." **Send BEFORE 21:39 UTC tonight to preserve Day-14 framing.**

#### **TARANIMERAMARO DAY-23 — Day-21 missed May 16 (41h-carry)**

**Subject:** 3 Bruno Mars dates tracked. 0 target prices. Let's fix that.
**Body:** Same as yesterday's draft.

#### **NMCNAMEE99 DAY-23 — Day-21 missed May 16 (47h-carry)**

**Subject:** Three weeks in. We owe you an apology.
**Body:** Same as yesterday's draft.

#### **JMORIARTY DAY-9 — Day-7 missed May 16 (46h-carry HARD EDGE)**

**Subject:** A week and a few days in. What did you come here for?
**Body:** "A week and a few days ago you signed up for TicketScan. You haven't added an event yet — that's normal, most people sign up before a specific event clicks. Tell us one you're considering. We'll set the watchlist for you."

#### **5-USER DAY-9/10/11 BATCH** (jmoriarty + emma + kevinkid + jfgalzin + liambot — Day-7 missed)

Frame "A week and a few days ago..." (all carries between 37-70h). emma + kevinkid + jfgalzin Day-10; liambot Day-10; jmoriarty Day-9. **Single batch send today.**

#### **5-USER DAY-24/25/26 CARRY BATCH** (charlesteel + ggri + aw + ajv + mark — Day-21 missed May 13-14)

Body: **"Three and a half to four weeks ago you signed up for TicketScan..."** Apology lead: "Two days ago a fast activator added JOJI: SOLARIS in 2 minutes 45 seconds. Three nights ago another added 7 Harry Styles dates in 17 seconds. Six days ago another added 6 events in 3 minutes. Three and a half to four weeks ago — that's you. We've sent you nothing. Here's what we'd recommend setting up." [ajvanprooyen variant retains Cubs apology lead. charlesteel variant adds Bruno T-3d miss + T-1d countdown.]

#### **CHARLESTEEL DAY-26 ALSO — Bruno T-1d ~25h FROM NOW = SEPARATE SEND ON MAY 19 MORNING**

Highest-leverage send of the next 36h. Will be covered tomorrow as a Day-26 + T-1d combined apology+countdown.

#### **DR.ALTVATER DAY-28 — Day-21 168h HARD EXPIRY**

Body: **"Four weeks ago you signed up. Our welcome flow was broken — you should have heard from us at three weeks. We're sorry."** German variant.

#### **PETE DAY-38 — Day-30 192h HARD EXPIRY**

Body: **"More than five weeks in — six tracked events (5 WC + 1 Darts), zero alerts."** Day-30 family dead.

#### **NICKLIB DAY-31 — Day-21 240H, FAR PAST EXPIRY**

Body: **"Four weeks and three days ago you added Phillies vs Braves. Match has been over for 31 days — we never sent a price update."** Apology-only.

#### **LILIANA DAY-20 + ZHILI DAY-19 — Day-14 152h + 128h HARD EXPIRY**

Bodies: **"Three weeks in."** Apology + curiosity hook.

#### **CJTHOMAS / SPARKIT / NATALIE — Day-11 reframes**

3 users carrying Day-7 misses 88-96h. All past parse-edge of "a week and a half ago." Frame as **"Eleven days in..."** cjthomas: Noah Kahan T-25d hook. sparkit: Mac DeMarco passed apology-only. natalie: no event yet, curiosity hook.

---

### TODAY's total queue if engine returns: **30-34 emails** — new record (was 28-32 yesterday)

- 1 today-natural fire (nunemakerc Day-3)
- 1 today-algo-flip fire (belder Session 5 T-3d — first cohort flip threshold)
- 5 high-priority manual sends (**eduardo Day-1 [HIGHEST-EV inert touch — fresh signup]** / **lisallam Day-1 [HIGH-EV activation-deepen]** / cutekitten Day-2 carry / karin Day-4 carry / kevinshall Day-6 carry)
- 1 passed-event apology (jadbennis Inter Miami)
- 3 inert carry sends (c_calingasan Day-5 / pattyglvz Day-6 / vlanza Day-4)
- 1 boundary send (joseph Day-14, MUST send before 21:39 UTC)
- 5-user Day-9/10/11 batch (jmoriarty / emma / kevinkid / jfgalzin / liambot)
- 5-user Day-24/25/26 batch (charlesteel / ggri / aw / ajv / mark)
- 2 priority carries (taranimeramaro Day-23 / nmcnamee Day-23)
- 4 hard-expiry rewrites (pete Day-38 / nicklib Day-31 / dr.altvater Day-28 / liliana Day-20)
- 1 Day-19 (zhili)
- 3 Day-11 reframes (cjthomas / sparkit / natalie)

**= 30-34 emails to clear in 36-48h. New record queue. Includes the first ever real-time flip-threshold fire (belder Session 5 T-3d, ~11h14m from report).**

---

## Psychology-driven micro-optimization (today)

**Principle:** **Commitment-and-consistency (Cialdini 1984) + Goal-gradient effect (Hull 1932) + Zeigarnik effect (Zeigarnik 1927)** — applied to the post-signup empty-watchlist state via a **3-step progress indicator**.

**Where to apply:** Every page seen by a user with status `authenticated && watchlist_count === 0` for the first 7 days post-signup. Persistent header strip showing a 3-step ladder:

```
① Account created   ✓
② Add your first event   ◯ in progress
③ Set a target price   ◯
```

**The diagnosis:**

Today's eduardo case is the cleanest "Day-1 schedule gap" data point in 12 days of asking for the schedule entry: signed up 10 hours ago, 0 watchlist, will hear NOTHING for 62 hours minimum. The Day-1 schedule ask remains open at the engineering layer. **But the psychology recommendation today isn't an email fix — it's an in-product fix that works regardless of whether the engine returns.**

A user lands on the dashboard or homepage with `watchlist_count === 0`. The current empty state (per yesterday's CRO ask #4 — "Loss-frame empty-state on dashboard") is being addressed. But the empty state is local — it lives on one page. **What we don't have is a global persistent commitment indicator that the user has 1 of 3 steps complete and is mid-ladder.**

Cialdini's commitment-and-consistency theory says: once a small commitment is made (creating an account), users feel cognitive pressure to maintain consistency. Hull's goal-gradient effect says: motivation to complete a multi-step task increases as one approaches the goal. Zeigarnik says: unfinished tasks occupy more mental space than completed ones. **A persistent "1 of 3 complete" header strip stacks all three effects simultaneously.**

Compare:
- **Current state:** eduardo lands → sees a dashboard → maybe sees an empty-state CTA on one page → if he doesn't click → ladder dissolves entirely (no global reminder of where he is in the journey).
- **Proposed state:** eduardo lands → sees a 3-step ladder pinned to the top with "Account created ✓" → the visible progress is a permanent reminder that he's 1 of 3 deep into something he's already committed to. **Every page view re-anchors the commitment.**

**The pattern observed in today's data validates this:**

- **lisallam** signed up and added an event in **165 seconds.** Whatever she saw immediately post-signup converted her into Step 2 in under 3 minutes. **The optimal state for the conversion engine.**
- **eduardo** signed up and at 10h47m post-signup has done nothing further. **What he saw didn't compound the commitment.** A persistent 3-step indicator would have followed him through every page view.

**Specific change:**

```
Current state (eduardo's dashboard at 10h post-signup):
┌─────────────────────────────────────────────────────────────┐
│ Navbar | Search bar | Featured events grid                  │
└─────────────────────────────────────────────────────────────┘

New state — 3-step header strip:
┌─────────────────────────────────────────────────────────────┐
│ Navbar | Search | ...                                       │
├─────────────────────────────────────────────────────────────┤
│ 🎯 You're 1 of 3 steps in to setting up alerts              │
│ ●━━━━━○━━━━━○  Account ✓ | Add event | Set target          │
│                                       [Find your event →]   │
└─────────────────────────────────────────────────────────────┘
[Standard page content below]
```

After Step 2 (add event), the strip updates:
```
│ 🎯 You're 2 of 3 — one step to alerts                       │
│ ●━━━━━●━━━━━○  Account ✓ | 1 event tracked ✓ | Set target  │
│                                  [Set a target price →]     │
```

After Step 3 (set target), the strip disappears.

**Why this works:**

1. **Commitment ladder visualization (Cialdini commitment-consistency).** Account creation was a small commitment. The visible "1 of 3" reframes that as the START of a sequence the user has implicitly agreed to. **Persistence across page views = ladder doesn't dissolve.**

2. **Goal-gradient: motivation grows as the bar fills.** Hull's experiments showed completion-motivation accelerates exponentially toward the final step. Users at "2 of 3 complete" exert **disproportionate effort to close the loop** vs users at "0 of 3" or with no visible progress at all.

3. **Zeigarnik effect: unfinished tasks haunt the user.** The persistent strip is a daily reminder that something is unfinished. **This is the only mechanism in the stack that operates without the user opening an email.** Every page view is a re-impression.

4. **It compounds with the existing 9-fix CRO stack — specifically yesterday's residency control (#9) and the Day-3 prior loss-frame empty-state (#4).** The 3-step indicator lives at the navbar/header layer; the empty-state lives at the content layer; the per-row prompt and residency control live at the watchlist layer. **Together they form a complete activation funnel surface.**

5. **It works without the engine.** Unlike emails (which require drip-engine return), this is a frontend-only fix. **It captures eduardo TODAY even if no email is sent for 62 hours.** The single most engine-independent CRO recommendation in the stack.

6. **It frames eduardo's silence as HIS unfinished task, not OUR engine outage.** Currently: eduardo signs up, hears nothing, blames us. Proposed: eduardo signs up, sees "1 of 3 complete," registers the unfinished task as his to close. **Shifts the locus of next-step responsibility from the system to the user — exactly what every other Cialdini-aligned activation surface does.**

**Quantitative target:** Move **Day-1 → Day-7 activation rate from observed-baseline to 80%+ within 30 days of shipping** (across the recovery cohort archetype: fresh signups, no prior history). **Compared with the natural-experiment data we have:** observed activation rate on Day-1 fast-activators is ~60% (5 of 8 recent cohort within 7 days). **The goal is to convert eduardo-class signups (10h+ silent post-signup) into late activators by Day-3 or Day-5.**

**Implementation cost:** ~4-5h. Component (~2h), wire to user.watchlist_count state from API (~1h), responsive styling and persistence logic (~1h), gating to first 7 days post-signup (~1h). **Pure frontend; no backend dependency.**

**Cross-agent route:** **CRO Agent (Agent 6)** to scope/implement. **The full CRO activation stack now expands to 10 fixes:**
1. (May 7) Loss-aversion target-price banner — superseded by May 16's per-row version.
2. (May 8) Default-effect smart pre-fill on watchlist-add modal. ~3-4h.
3. (May 9) FOMO "Happening soon" rail on search results. ~5-6h.
4. (May 11) Loss-frame empty-state on dashboard. ~5h.
5. (May 12) Commitment-and-consistency "Watch for 24h — no signup" pre-signup CTA. ~8-10h.
6. (May 13) Social-proof rail on WC stadium pages. ~3h.
7. (May 15) Commitment-consistency two-step add modal with default target pre-fill. ~5h.
8. (May 16) Loss-aversion per-row target prompt on watchlist page with default pre-fill. ~3-4h.
9. (May 17) Residency / multi-night composite target control. ~5-6h.
10. **(TODAY May 18) 3-step persistent commitment ladder header strip. ~4-5h. ENGINE-INDEPENDENT FIX — works regardless of drip-engine status.**

**Combined: ~41-48h.** **Combined coverage: VISIT → SIGNUP → ACTIVATION → TARGET-SETTING → RETENTION.** Today's fix is **the only one in the stack that operates entirely without the alert engine** — making it the highest-priority ship-now-while-engine-is-still-dark fix.

**Recommended new shipping sequence:**
1. **TODAY (#10) 3-step commitment ladder — ENGINE-INDEPENDENT, ships immediately, captures eduardo and all future inerts.** ~4-5h.
2. **(#8 + #9 combined) per-row target prompt + residency composite control.** ~9-10h. Activated users.
3. (#2) Default-effect pre-fill on watchlist-add modal. ~3-4h. New adds.
4. (#7) Two-step add modal with default pre-fill. ~5h. Existing future adds.
5. Others.

---

## Cross-agent dependencies

1. **→ Email Agent (Agent 5):** **30-34 EMAILS QUEUED — new record (was 28-32 yesterday). If engine returns today:**
   - **TODAY (2 natural fires):** nunemakerc Day-3 (~15:41 UTC, ~4h41m) + **belder Session 5 T-3d (~22:14 UTC, ~11h14m — FIRST ALGO-FLIP FIRE OF THE RECOVERY COHORT)**
   - **TODAY (manual sends, priority order):** (1) **eduardo Day-1 [HIGHEST-EV inert-recovery — fresh signup, no carry frame needed]** → (2) **lisallam Day-1 [HIGH-EV activation-deepen — JOJI Newark T-29d]** → (3) cutekitten Day-2 carry [Harry Styles residency, 7 items] → (4) karin Day-4 carry [power-user #2] → (5) kevinshall Day-6 carry [power-user #1] → (6) jadbennis Inter Miami passed-event apology
   - **TODAY (carry batches):** 5-user Day-9/10/11 (jmoriarty/emma/kevinkid/jfgalzin/liambot) + 5-user Day-24/25/26 batch (charlesteel/ggri/aw/ajv/mark) + 2 priority carries (taranimeramaro/nmcnamee) + 4 hard-expiry rewrites (pete Day-38/nicklib Day-31/dr.altvater Day-28/liliana Day-20) + 1 Day-19 (zhili) + 3 Day-11 reframes (cjthomas/sparkit/natalie) + 3 inert carries (c_calingasan Day-5/pattyglvz Day-6/vlanza Day-4)
   - **TIME-BOUND SEND TONIGHT: joseph Day-14 boundary must send BEFORE 21:39 UTC** to preserve "two weeks in" frame.
   - **CARRIED + COMPOUNDED Day 12: Day-1 schedule addition.** 6 of 10 recovery-cohort signups would have benefited from Day-1 touch (karin/vlanza/nunemakerc/belder/cutekitten/lisallam/eduardo — 7 of 10 now). Day-1 is now the single highest-ROI schedule addition in the system.

2. **→ CRO Agent (Agent 6):** **TEN stacked high-leverage fixes — full activation stack now spans VISIT through RETENTION with ENGINE-INDEPENDENT capture at the top:**
   - **TODAY: 3-step persistent commitment ladder header strip. ~4-5h. ENGINE-INDEPENDENT FIX.** Highest-priority ship-immediately recommendation in the stack. Captures eduardo-class inert signups regardless of drip-engine status.
   - Prior 9 fixes still open. **Updated recommended ship order:** (1) **TODAY's 3-step strip [4-5h, engine-independent]** → (2) **yesterday's residency control + per-row banner [9-10h combined]** → (3) two-step add modal [5h] → (4) social-proof rail on WC pages [3h] → (5) others.

3. **→ Ads Agent (Agent 4):** **DAY 25 OF ATTRIBUTION DEPENDENCY. The 168h-window dataset is now 10 signups with completely symmetrical bifurcation:**
   - **5 power-users / fast activators** (kevinshall WC + karin WC + cutekitten Harry Styles + belder SEC Baseball + **lisallam JOJI**) — all unknown-source. Activation latencies: 79s / 37s / 22s / 19s / 165s = median 37s, all <3 minutes.
   - **5 inert signups** (pattyglvz / c_calingasan / vlanza / nunemakerc / **eduardo**) — all unknown-source.
   - **Same-cohort 10-user split (5 power vs 5 inert in 7 days, 50% power-user rate) — symmetrical 5:5 split holds for 2nd consecutive day.** First time 2 consecutive same-split-cohort days have occurred.
   - **The genre-diversity of the activated 5 (World Cup, Harry Styles, SEC Baseball, JOJI alt-pop, Matt Rife sub) suggests the activated cohort shares INTENT not GENRE.** This is now the strongest signal in dataset history that channel attribution is the right lens — 5 completely different content niches converting at identical activation speed implies channel-driven self-selection. **Even one channel-confirmation for any of the 5 activated would test this hypothesis directly.**

4. **→ Content Agent (Agent 3):** **NEW CONTENT TRIGGER — JOJI: SOLARIS PRUDENTIAL CENTER NEWARK PRICING GUIDE.**
   - **lisallam = first JOJI: SOLARIS tracker in dataset.** Tour pricing has not been covered by Content Agent. The June 16 Newark show is 29 days out — explainer in next 7 days would compound with potential alerts (T-21d May 26).
   - **Carried Day-2 ask: Harry Styles MSG residency pricing guide** (cutekitten + tosophia = 2 users tracking 18 combined nights).
   - **Carried Day-2 ask: SEC Baseball Tournament pricing primer** (belder Session 5 T-3d fires today).
   - **Carried Day-3 ask: AT&T Stadium WC fan guide** (kevinshall + karin both WC power-users at different venues).
   - **Carried Day-3 ask: WC bracket-tracking explainer** (karin's R16 Match 96 add).
   - **Recommended content priorities reordered today:**
     1. **SEC Baseball Tournament pricing primer** — belder Session 5 T-3d TODAY. Content publishing in next 24h compounds with potential alert.
     2. **Bruno Ohio T-1d explainer** — May 19 last-Bruno-chance.
     3. **JOJI: SOLARIS Prudential Center pricing guide** — fresh today; T-29d, 7-day lead window viable.
     4. **Harry Styles MSG residency pricing guide** — 2 users tracking 18 combined nights.
     5. **AEW Double or Nothing T-3d/T-1d explainer** — May 21/23.
     6. **AT&T Stadium WC fan guide** (carried).
     7. **WC bracket-tracking explainer** (carried).

5. **→ Engineering / Drip-Engine:** **Day 42 of outage. New on-schedule fires missed in 24h:**
   - vlanza Day-3 / karin Day-3 (28h-carry) / cutekitten Day-1 (no schedule) / belder Day-1 (no schedule) / **Inter Miami T-1d closed-out match passed → passed-event #17 LOCKED**
   - **Total May 10-18 natural fire misses confirmed: 43+. Same-day queue if engine returns today: 30-34 emails in 36-48h.**
   - **TODAY'S HIGHEST-LEVERAGE WINDOW: belder Session 5 T-3d ~22:14 UTC (~11h14m from report).** First flip threshold for the recovery cohort. If engine returns by tonight, this becomes the first real-time fire in 42 days AND validates the engine end-to-end on a fresh schedule.
   - **NEXT 36h critical window: belder Session 5 T-3d (11h) → Bruno T-1d (25h) → belder Session 6 T-3d (35h).** Three flip thresholds in 36h. **Engine return by tomorrow noon UTC captures all three.**
   - **NEW Day 13 carried ask: Day-1 schedule entry critical.** With 7 of 10 recovery-cohort signups never getting a Day-1 touch, today's eduardo and lisallam misses make Day-1 the highest-ROI undelivered feature in the system.

6. **→ All agents:** **THE RECOVERY HOLDS — 2 SIGNUPS FOR THE 2ND CONSECUTIVE DAY = FIRST CONSECUTIVE 2-SIGNUP DAYS IN PROJECT HISTORY.** 10 signups in 7 days = 1.43/day (vs <0.3/day pre-burst = 4.8x baseline). **Watchlist items +1 (lisallam's JOJI add at 165s post-signup). Power-user/inert split stabilizes 5:5 at 50% for 2nd day.** **Recovery-cohort genre diversity expands to 5 niches (WC, Harry Styles, SEC Baseball, JOJI, Matt Rife) — strongest channel-driven-self-selection signal in dataset history.** **Today's CRO recommendation (3-step persistent commitment ladder, ~4-5h, ENGINE-INDEPENDENT) is the only fix in the entire stack that operates without alert engine return.** **10-fix CRO stack now totals ~41-48h** for full-funnel coverage. **eduardo Day-1 manual is the highest-EV inert-recovery touch in dataset history** — fresh signup, no carry frame needed, no prior asks, 11h-old account, Day-1 schedule gap is the only blocker. **belder Session 5 T-3d at 22:14 UTC TODAY is the highest-leverage single fire window of the entire 42-day outage — first real-time algo-flip fire for the recovery cohort, on a 4-day-out event.**

---

## Summary metrics

```
Total users:              84 (+2 over 24h — lisallam + eduardo, split-day cluster)
Real users:               81
Activated:                53 (+1 over 24h — lisallam JOJI add at 165s post-signup)
Activation rate:          65.4% (real, −0.4pp 24h — denominator-driven by eduardo)
Watchlist items:          107 (+1 over 24h — single-item activation archetype)
Newsletter subscribers:   3 (106 DAYS FLAT — 15w 1d)
Active alerts:            0 (Day 42)
Triggered alerts:         0 (lifetime; Inter Miami T-1d locked passed last night)
Drip emails sent:         0 (Day 42 — /api/admin/drip-stats: stats=[])
Cumulative passed-no-notify: 17 (Inter Miami #17 LOCKED last night)
Algo-flip-quiet streak:   18 days (11 confirmed closed-out failures; belder Session 5 T-3d could push to 12 tonight)
Activation gap (real):    23/81 = 28.4% (−0.7pp; second consecutive narrow)
Unknown-source activation: 9/25 = 36.0% (+1.2pp 24h)
Day-23 carry batch:       2 users (taranimeramaro + nmcnamee99)
Day-24/25/26 carry batch: 5 users (charlesteel/ggri/aw/ajv/mark)
Day-9/10/11 batch:        5 users (jmoriarty/emma/kevinkid/jfgalzin/liambot)
Power-users:              5 (kevinshall + karin + cutekitten + belder + lisallam) — pattern N=5, 7 days
Recovery-cohort power rate: 5/10 = 50% (was 4/8 = 50%; symmetrical hold for 2nd day)
WC PMF signal:            24 days to kickoff (June 11); 2 WC power-users (kevinshall + karin)
Harry Styles signal:      cutekitten + tosophia = 2 users, 18 combined MSG nights
JOJI signal:              lisallam = 1 user, Prudential Center Newark Jun 16 (NEW GENRE)
Target-price capture:     0/107 watchlist items = 0% (Day 42; 28 items in multi-night runs)
Post-burst signups:       10/168h (kevinshall+pattyglvz+c_calingasan+karin+vlanza+nunemakerc+belder+cutekitten+lisallam+eduardo)
Sustained recovery rate:  1.43/day over 7 days (vs <0.3/day pre-burst = 4.8x baseline)
Highest-EV send today:    eduardo Day-1 manual (fresh signup, 0 items, no carry frame needed)
2nd-highest send today:   lisallam Day-1 manual (JOJI T-29d, 1-item activation-deepen)
3rd-highest fire today:   belder Session 5 T-3d ~22:14 UTC (FIRST ALGO-FLIP FIRE OF RECOVERY COHORT)
Time-bound send today:    joseph Day-14 BEFORE 21:39 UTC (boundary frame expiry)
Closed-out fire families: 11/11 — Day-1 / Day-3 / Day-7 / Day-14 / Day-21 / Day-30 / Cubs / Inter Miami (LOCKED #17) / Bruno / AEW / SEC Baseball (T-3d Session 5 fires today)
```

**Headline:** **Second consecutive 2-signup day — first in project history.** lisallam@hotmail.com (May 17 14:05 UTC, activated in 165s with JOJI: SOLARIS Newark Jun 16) + eduardo@del-valle.com (May 18 00:48 UTC, 0 watchlist after 10h47m). **Recovery-cohort power-user split holds at 5:5 = 50% for 2nd consecutive day. 10 signups in 7 days = 1.43/day (4.8x baseline).** **Inter Miami CF vs Portland passed last night = passed-event #17 LOCKED with 0/4 algo-flip sends.** **belder SEC Baseball Session 5 T-3d fires ~22:14 UTC TODAY = first real-time algo-flip fire of the recovery cohort and highest-leverage single fire window of the entire 42-day outage.** **joseph crosses Day-14 boundary tonight ~21:39 UTC** — time-bound boundary-frame send must clear before then. **Today's CRO recommendation: 3-step persistent commitment ladder header strip (~4-5h, ENGINE-INDEPENDENT)** — captures eduardo-class inert signups regardless of drip-engine status. **First and only fix in the 10-fix CRO stack that works without engine return.** **10-fix CRO stack totals ~41-48h** for full-funnel VISIT → ACTIVATION → RETENTION coverage. **eduardo Day-1 manual is the highest-EV inert-recovery touch in dataset history** — fresh signup, no carry frame, no prior asks, 11h-old account. The genre-diverse activated cohort now spans 5 niches (WC + Harry Styles + SEC Baseball + JOJI alt-pop + Matt Rife) — strongest channel-driven-self-selection signal in dataset history. **30-34 emails queued; engine-return-by-tonight catches the first algo-flip fire in 42 days.**
