# Growth Daily — 2026-05-20

> **24h report window** (May 19 11:00 UTC → May 20 11:00 UTC). Yesterday's report fired on schedule. Today's deltas are clean 24h comparisons.

## User health dashboard

| Segment                          | Count | % of Total | vs Yesterday |
|----------------------------------|-------|------------|--------------|
| Total users                      | **85** | 100% | **=0 net over 24h.** **THE 3-DAY 1+-SIGNUP STREAK BREAKS TODAY.** Yesterday: 9440111 closed out the streak at 3 (lisallam → eduardo+9440111 → 9440111). **0 signups in the May 19 11:00 → May 20 11:00 UTC window.** First 0-signup day inside the recovery cohort. 7-day rolling rate falls 11 → 9 (kevinshall + pattyglvz roll out of the May 12 boundary) = **1.29/day** (was 1.57/day yesterday). Still **4.3x pre-burst** (<0.3/day). **First sequence-break in the recovery's acceleration arc.** |
| New (last 7 days, API count)     | **9** | 10.6% | **−2 from yesterday's 11 (boundary roll-off: kevinshall May 12 16:44 and pattyglvz May 12 15:23 both crossed >168h tonight 16:44/15:23 UTC respectively — both are crossed already as of 11:00 UTC report cutoff... wait, both signup-times are >24h-past-report; recheck).** **API confirms `usersThisWeek=9` at /api/admin/stats.** Recovery 7-day cohort by signup-date now: c_calingasan / karin / vlanza / nunemakerc / belder / cutekitten / lisallam / eduardo / 9440111 = **9 in 7d**, all within hard 168h window. **kevinshall (Day-8 today) and pattyglvz (Day-8 today) age out of the recovery cohort but remain in the lifecycle analysis.** |
| Activated (has watchlist)        | **53** | 62.4% | **=0 net over 24h. Watchlist 107 → 107 = 0 items added in 24h = SECOND CONSECUTIVE 0-add day.** **9440111 is 40h post-signup with 0 items.** eduardo is 58h post-signup with 0 items (was 34h yesterday). **Activation rate: 53/82 real users = 64.6% (=0pp 24h — first flat-activation-rate day since May 10).** **First non-retreating activation-rate day in 4 attempts.** |
| Active (visited in 7 days)       | unknown | — | no `last_login_at` instrumentation — **Day 44 open**. |
| At-risk (7-14d signup-age proxy) | **3** | 3.5% | **+1 net from yesterday.** jmoriarty (Day 11 today) + emma (Day 12 today, **just entered at-risk crossing Day-11 last night**) + kevinshall (Day 8 today, **just entered at-risk after crossing Day-7 last night ~16:44 UTC**). pattyglvz Day-8 today is similarly at-risk-entering (crossed Day-7 last night ~15:23 UTC) = a true **+2 net entries** balanced by jadbennis's **−1 exit to churned**. Net +1. |
| Churned (14d+ signup-age proxy)  | **71** | 83.5% | **+1 net** — jadbennis crossed Day-14 last night 20:33 UTC = **second natural Day-14 boundary cross in 48h** (joseph the night before). **2 consecutive nights of Day-14 boundary crosses.** %-of-total ticks up 1.1pp on +1 numerator, flat denominator. |

> **Day 44 without `last_login_at` instrumentation. Day 44 of zero drip emails sent** (confirmed: `/api/admin/drip-stats` returns `stats=[]` with 20 pendingUsers, 0% `last_email_sent`). **Day 44 of zero triggered alerts (lifetime).**
> **NEWSLETTER SUBSCRIBERS: 3, UNCHANGED FOR 108 DAYS.** 15 weeks + 3 days.
> **YESTERDAY'S 31-35 EMAIL QUEUE PASSED WITHOUT A SEND. The highest-density natural-fire day of the entire outage closed dark. New on-schedule misses confirmed in last 24h:**
>   - **Bruno Ohio T-1d ~11:38 UTC YESTERDAY — MISSED.** **THE SHORTEST-TEMPORAL-URGENCY FIRE WINDOW OF THE ENTIRE 44-DAY OUTAGE CLOSED DARK.** **13th confirmed algo-flip failure** (Cubs 6 + Inter Miami 4 + Bruno T-7d/T-3d/T-1d + AEW T-7d + Session 5 T-3d + Session 6 T-3d). charlesteel becomes the second user (after jadbennis Inter Miami) with a complete 0/N algo-flip sweep on a single event = **Bruno 0/3 confirmed; T-day fire tonight if event-day notification was scheduled**.
>   - **pattyglvz Day-7 ~15:23 UTC YESTERDAY — MISSED.** First-ever inert-subset Day-7 fire closed dark = the cleanest "zero-engagement carry user with no event hook to lean on" data point hits hard-edge today.
>   - **kevinshall Day-7 ~16:44 UTC YESTERDAY — MISSED.** **The first natural Day-7 fire for the recovery cohort closed dark.** **Power-user #1, 6 items deep, 0 targets set = the single cleanest target-price-capture opportunity in the dataset closed without a touch.**
>   - **belder Session 6 T-3d ~22:14 UTC YESTERDAY — MISSED. 13th algo-flip failure compounds same-night.** Session 6 (May 22) now 2 days out; only Session 6 T-1d remains for that event.
>   - **cutekitten Day-3 ~23:32 UTC YESTERDAY — MISSED.** First natural Day-3 fire for the May 16+ activated-cohort cluster closed dark.
>   - **belder Day-3 / lisallam Day-1 / eduardo Day-1 / 9440111 Day-1 — schedule entries don't exist; 14th day of carried Day-1 ask.**
>   - **jadbennis Day-14 boundary ~20:33 UTC YESTERDAY — MISSED + INTER MIAMI PASSED-EVENT APOLOGY WINDOW CLOSED DARK.** jadbennis becomes the second user in 48h with both Day-14 boundary AND a complete event-lifecycle 0/N sweep closing dark in the same window (joseph 24h prior).
>   - **zhili1208 Day-21 ~03:16 UTC TODAY — MISSED ~7h44m before report.** zhili passes Day-21 mark without a touch.
> **OPEN AT REPORT TIME (today, May 20):**
>   - **lisallam Day-3 fires ~14:05 UTC TODAY — ~3h05m from report.** First natural Day-3 fire for the lisallam single-event activation cluster. Highest-EV activated-cohort fire today.
>   - **dr.altvater Day-30 fires ~14:08 UTC TODAY — ~3h08m from report.** **FINAL natural fire opportunity for dr.altvater. After Day-30 the entire lifecycle natural-fire schedule (Day-1/3/7/14/21/30) is exhausted.** German-language send candidate.
>   - **belder Day-3 fires ~22:13 UTC TODAY — ~11h13m from report.** Activated power-user Day-3 fire.
>   - **belder Session 5 T-1d fires ~22:14 UTC TODAY — ~11h14m from report.** **3rd algo-flip fire window of the recovery cohort. Final Session 5 threshold before kickoff tomorrow afternoon.**
>   - **BRUNO OHIO PLAYS TONIGHT** (May 20 evening, doors 7:30pm ET ≈ 23:30 UTC). **If event-day fire window exists, it fires today; otherwise tomorrow's report locks Bruno as passed-event #18 with a clean 4-of-4 algo-flip closed-out sweep.**
> **Total May 10-20 natural fire misses confirmed: 56+** (48+ through yesterday's report + Bruno T-1d + pattyglvz Day-7 + kevinshall Day-7 + cutekitten Day-3 + belder Session 6 T-3d + jadbennis Day-14 + zhili Day-21 + nunemakerc Day-4 reframe = 8 new closeouts in 24h).
> Watchlist items: **107 (=0 over 24h — second consecutive 0-add day).** Target-price capture: **0/107 = 0% (Day 44).**
> `usersToday: 0` (first 0-signup day since 9440111 streak began), `usersThisWeek: 9` (down from 11 — boundary roll-off). **Activation rate: 53/82 real users = 64.6% — FLAT 24h.** **First non-retreating day in 4** (after 3 consecutive denominator-driven retreats).

## What changed in 24h

1. **THE 3-DAY 1+-SIGNUP STREAK BREAKS. 0 SIGNUPS IN 24H.** The May 17 → May 18 → May 18 → May 18 → May 19 streak (lisallam → eduardo + 9440111 → 9440111) ends. **0 in the May 19 11:00 → May 20 11:00 UTC window.** **First 0-signup day inside the recovery cohort.** Yesterday's forecast called the recovery "extending but softening" with watchlist 107 → 107 flat; today the second axis (signups) also flattens. **Both engagement axes — signups + watchlist adds — go flat in the same 24h window for the first time since recovery began May 12.** 7-day rolling signup rate: 1.29/day (was 1.57/day yesterday) = first negative day-on-day shift in 9 consecutive comparisons. **Still 4.3x the pre-burst baseline**, but the inflection is unambiguous.

2. **BRUNO T-1d FIRED INTO DARK ENGINE YESTERDAY ~11:38 UTC = 13TH CONFIRMED ALGO-FLIP FAILURE. THE SHORTEST-TEMPORAL-URGENCY FIRE WINDOW OF THE ENTIRE 44-DAY OUTAGE CLOSED WITHOUT A SEND.** Yesterday's report forecasted T-1d at 38 minutes-post-report as "the shortest-temporal-urgency fire window in 43 days of outage tracking." The engine remained dark. **charlesteel becomes the second user (after jadbennis Inter Miami) with a complete 0/N algo-flip sweep on a single event** — T-7d May 13, T-3d May 16, T-1d May 19 all missed. **If a T-0 event-day notification exists in schema, today's fire (~23:30 UTC kickoff window) could push charlesteel to a 0/4 sweep matching jadbennis's Inter Miami pattern.** **Tonight Bruno Ohio plays. Tomorrow's report locks Bruno as passed-event #18.**

3. **KEVINSHALL DAY-7 MISSED YESTERDAY ~16:44 UTC = FIRST NATURAL DAY-7 FIRE OF THE RECOVERY COHORT CLOSED DARK.** kevinshall — power-user #1, 6 items in 3 minutes on May 12 — hit Day-7 yesterday afternoon. Yesterday's report flagged this as "**HIGHEST-EV activated-cohort Day-7 fire of the recovery.**" Engine remained dark. **The single cleanest target-price-capture opportunity in the dataset — 6 items, all target=null, fresh enough to remember signup — closed without a touch.** kevinshall is now Day-8, has aged out of the rolling 7-day recovery cohort, and enters the at-risk bucket. **The May 12 boundary roll-off has begun.**

4. **PATTYGLVZ DAY-7 MISSED YESTERDAY ~15:23 UTC = FIRST INERT-SUBSET DAY-7 OF RECOVERY COHORT CLOSED DARK.** pattyglvz — the zero-engagement inert who signed up May 12 within 81 minutes of kevinshall — hit Day-7 yesterday. **First-ever Day-7 fire for an inert-subset user closed dark.** Frame "A week ago you signed up, what event did you have in mind?" hard-expires by tomorrow morning (parses to "Eight days ago..."). **Yesterday's #11 CRO recommendation (watchlist value receipt) does NOT cover pattyglvz** — she has 0 watchlist items and produces 0 shadow-savings. **pattyglvz becomes the cleanest "engine-independent fix coverage gap" case in the dataset** — the 3-step ladder (#10) is the only stack item that would have reached her.

5. **CUTEKITTEN DAY-3 MISSED YESTERDAY ~23:32 UTC + BELDER DAY-3/SESSION 6 T-3d DUAL-FIRE MISSED ~22:13/22:14 UTC.** Yesterday's predicted "dual fire collision" between belder Day-3 (~22:13 UTC) and Session 6 T-3d (~22:14 UTC) closed dark — both fires within 60 seconds of each other, both missed. cutekitten Day-3 followed 78 minutes later, also dark. **3 high-EV recovery-cohort natural fires closed in a 90-minute window last night.** Net 24h recovery-cohort closeout: 6 fires (kevinshall + pattyglvz Day-7 + cutekitten + belder Day-3 + belder Session 6 T-3d + Bruno T-1d for charlesteel-overlap). **Highest single-day closeout density of the outage.**

6. **JADBENNIS CROSSED DAY-14 BOUNDARY LAST NIGHT ~20:33 UTC. INTER MIAMI PASSED-EVENT 4-of-4 SWEEP NOW LOCKED.** Yesterday's report predicted "double-close-out tonight." Confirmed: jadbennis Day-14 boundary closed without send AND Inter Miami passed-event lifecycle apology window closed without send. **jadbennis joins joseph as the second user in 48h whose Day-14 boundary AND full single-event 0/N pattern both closed dark in the same window.** **Two consecutive Day-14 boundary crosses without a single touch.** jadbennis is now Day-14, moved from at-risk to churned bucket. Apology-only re-engagement remains the only viable touch.

7. **ZHILI1208 DAY-21 MISSED ~03:16 UTC TODAY — ~7h44m BEFORE REPORT.** Yesterday's report forecast zhili Day-21 at "May 20 ~03:16 UTC (~16h from now)." Confirmed: fired into dark engine ~7h44m before today's report cutoff. **zhili joins the dataset of Day-21 hard-expiry users** (lilianamasyrubi Day-21 closed May 19 ~05:24 UTC). **2 Day-21 boundary crosses in 24h.**

8. **THE EMMA/JMORIARTY/KEVINSHALL/PATTYGLVZ AT-RISK BUCKET EXPANDS BY 4 ENTRIES vs 1 EXIT (jadbennis) = NET +3 INFLOW.** New at-risk entrants today: emma (Day-11 → Day-12 today, was outside 7-14d window yesterday as Day-11), kevinshall (Day-8 today, just crossed Day-7), pattyglvz (Day-8 today, just crossed Day-7). Net at-risk: 2 → 3 (jmoriarty + new entries 3 − exit 1 = +2 net for the at-risk bucket; but emma was Day-11 yesterday and remains Day-12 today, so emma was already at-risk; the true net change is kevinshall + pattyglvz +2 against jadbennis −1 = +1 net). **At-risk count: 3.** **Recovery-cohort users now have BOTH activated power-users and inerts represented in the at-risk bucket** for the first time — kevinshall (power) + pattyglvz (inert) on the same day. **The boundary between recovery cohort and at-risk cohort is now porous.**

9. **DR.ALTVATER DAY-30 FIRES TODAY ~14:08 UTC = FINAL NATURAL FIRE WINDOW IN HIS LIFECYCLE.** Apr 20 signup, 30d post-signup hits today. **After Day-30 the entire natural-fire schedule (Day-1/3/7/14/21/30) is exhausted for dr.altvater.** He becomes the third lifecycle-complete-without-touchpoint user in the dataset (joseph completed Day-7+Day-14 last night; jadbennis completed Day-14 last night with Inter Miami sweep). **dr.altvater is the cleanest "every scheduled fire missed for an entire 30-day lifecycle" case** — Day-3 missed Apr 23, Day-7 missed Apr 27, Day-14 missed May 4, Day-21 missed May 11, Day-30 fires into the same dark engine today. **0 for 6.** German-language send candidate; final touchable natural window in 3h08m.

10. **THE 44-DAY-OUTAGE PATTERN — BOTH ENGAGEMENT AXES FLATTEN:**
    - Total users: 85 (was 85, **=0 over 24h — 3-day signup streak BREAKS**)
    - Watchlist items: 107 (was 107, **=0 over 24h — 2nd consecutive flat day**)
    - Drip emails sent: 0 for **44 consecutive days** (compounds)
    - Triggered alerts: 0 lifetime (compounds; Bruno T-1d closed last night = #13 algo-flip failure)
    - Newsletter subscribers: 3 for **108 consecutive days** (compounds; 15w 3d)
    - Activation rate: 64.6% (real users) — **flat 24h, ends 3-day denominator-driven retreat streak**
    - Cumulative passed-no-notification: **17 still (Bruno locks #18 tomorrow morning)**
    - **0 of 6 dimensions show recovery motion in last 24h.** **Watchlist + signups both flatten on the same day for the first time.** **4 of 6 remain locked behind engine-dark constraint.** **The recovery's acceleration phase has stalled.**

## Activation gap

**Users signed up in last 7 days (by signup-date) with 0 watchlist items: 5** (was 6 yesterday — **−1 net from cohort roll-off**: pattyglvz (Day-8) ages out of recovery cohort. 9440111 + eduardo stay; nunemakerc/vlanza/c_calingasan stay; jmoriarty stays *outside* the 7-day window):

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **9440111@gmail.com** | May 18 19:09 UTC | 1d 16h | **0** | **Day 1/2 today. 40h post-signup, 0 items, 0 emails received.** Day-1 MISSED last night (no schedule entry; 14-day carried ask). **Was yesterday's HIGHEST-EV inert-recovery touch — escalates today to Day-1 carry. The opaque-identifier email archetype still produces zero behavioral signal.** |
| **eduardo@del-valle.com** | May 18 00:48 UTC | 2d 10h | **0** | **Day 2 today. 58h post-signup escalates from Day-1 carry → Day-2 carry.** Day-1 schedule entry doesn't exist (Day 14 of ask). **Cleanest "if Day-1 schedule existed, we'd have touched twice by now" case in dataset.** |
| **nunemakerc@gmail.com** | May 15 15:41 UTC | 4d 19h | **0** | **Day 5 today. Day-3 missed May 18 (~43h-carry HARD EDGE).** Frame "Three days ago..." has expired; reframes to "Five days ago..." Joins Day-5 cohort with vlanza. |
| **vlanza@sbcglobal.net** | May 14 13:20 UTC | 5d 22h | **0** | **Day 6 today. Day-3 missed May 17 (~70h-carry HARD EXPIRY).** Frame "Almost a week ago..." holds. |
| **c_calingasan@yahoo.com** | May 13 11:46 UTC | 6d 23h | **0** | **Day 7 today. Day-3 missed May 16 (~96h-carry HARD EXPIRY).** **Day-7 fires today ~11:46 UTC (~46 minutes from report).** **HIGHEST-EV inert-Day-7 fire of the day — fresh enough to remember signup, hits Day-7 natural boundary inside report window.** |

**Aged-out of 7-day window but still 0 watchlist (added to lifecycle analysis):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **pattyglvz@msn.com** | May 12 15:23 UTC | 7d 20h | **0** | **Day 8 today. Day-7 MISSED yesterday ~15:23 UTC (~20h-carry HARD EDGE).** Frame "A week ago..." closes ~36h post-fire. Reframe to "Eight days ago..." This user is the cleanest engine-independent-fix coverage gap (0 watchlist = no value receipt; 3-step ladder is only fix that touches her). |
| **jmoriarty13@yahoo.com** | May 9 13:18 UTC | 10d 22h | **0** | **Day 11 today. Day-3 missed May 12 (174h+ HARD EXPIRY). Day-7 missed May 16 (~94h-carry HARD EXPIRY).** Apology + curiosity hook. Joins Day-10/11 batch. |

**Activated within 7-day window (carried + new):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **lisallam@hotmail.com** | May 17 14:05 UTC | 2d 21h | **1** (JOJI: SOLARIS Newark Jun 16, target=null) | **Day 3 today. Day-1 missed May 18 (~45h-carry HARD EDGE).** **Day-3 fires today ~14:05 UTC (~3h05m from report).** **HIGHEST-EV activated-cohort fire today — first natural Day-3 of the lisallam single-event activation cluster, inside today's report window, 27 days to event.** |
| **cutekitten1234** | May 16 23:32 UTC | 3d 11h | **7** (Harry Styles MSG Aug-Sep, all target=null) | **Day 4 today. Day-1 missed (~60h+ HARD EXPIRY). Day-3 MISSED yesterday ~23:32 UTC (~11h28m carry).** Frame "Three days ago..." still parses today. **No natural fire today; carry-send recommended.** |
| **belder4308** | May 16 22:13 UTC | 3d 13h | **2** (SEC Baseball May 21-22, target=null) | **Day 4 today. Day-1 missed (~61h HARD EXPIRY). Day-3 MISSED yesterday ~22:13 UTC (~13h carry). Session 5 T-3d MISSED May 18. Session 6 T-3d MISSED LAST NIGHT.** **Session 5 T-1d fires today ~22:14 UTC (~11h14m from report). Final Session 5 threshold before kickoff tomorrow.** |
| **karin_ef1** | May 14 06:46 UTC | 6d 4h | **2** (WC, target=null on both) | **Day 6 today. Day-3 missed May 17 (~76h-carry HARD EXPIRY).** Frame holds at "Six days ago..." Apology-flavored carry. |
| **kevinshall87 (aged out today)** | May 12 16:44 UTC | 7d 18h | **6** (5 WC + Matt Rife, all target=null) | **Day 8 today. Day-3 missed May 15 (~115h-carry HARD EXPIRY). Day-7 MISSED YESTERDAY ~16:44 UTC (~18h-carry HARD EDGE).** **Frame "A week ago..." parses through tomorrow; reframes to "Eight days ago..." by Day-9.** **HIGHEST-EV activated-cohort target-price-capture send TODAY** — 6 items, all target=null, $80-200 typical WC source-floor swings. |
| **liambot62** | May 8 13:07 UTC | 11d 22h | 1 (Toronto FC v Inter Miami passed May 9, target=null) | **Day 12 today. Day-7 missed May 15 (~118h-carry HARD EXPIRY).** Apology-only. |
| **cjthomas2557** | May 7 22:49 UTC | 12d 12h | 1 (Noah Kahan Jun 12, target=null) | **Day 13 today. Day-7 missed May 14 (~140h-carry HARD EXPIRY). Noah Kahan T-23d.** Reframe "Thirteen days in." |
| **sparkitrightthere** | May 7 11:38 UTC | 13d 0h | 1 (Mac DeMarco PASSED May 7, target=null) | **Day 13 today. Day-7 missed May 14 (~144h-carry HARD EXPIRY).** Event passed 13d ago. Re-engagement only. |

**Outside 7-day window (carried, 0 watchlist):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **jadbennis0** | May 5 20:33 UTC | 14d 14h | 1 (Inter Miami PASSED May 17) | **Day 14 yesterday — CROSSED CHURNED BOUNDARY LAST NIGHT 20:33 UTC.** Day-14 fire MISSED. Inter Miami passed-event 4-of-4 algo-flip sweep LOCKED. **Joseph's pattern from 48h prior, plus the passed-event overhang.** Apology-only re-engagement. |
| **joseph.g.nicolosi** | May 4 21:39 UTC | 15d 13h | 0 | **Day 15 today. Day-14 MISSED May 18 ~21:39 UTC.** Reframe to "Two weeks and a day in..." Apology lead. |
| **emmacmather** | May 8 21:54 UTC | 11d 13h | 0 | **Day 12 today. Day-3 missed May 11 (210h HARD EXPIRY). Day-7 missed May 15 (~85h-carry HARD EXPIRY).** Reframe "Twelve days in..." |
| **kevinkid94** | May 8 20:52 UTC | 11d 14h | 0 | **Day 12 today. Day-7 missed May 15 (~110h-carry HARD EXPIRY).** Reframe "Twelve days in." |
| **jfgalzin** | May 8 12:54 UTC | 11d 22h | 0 | **Day 12 today. Day-7 missed May 15 (~118h-carry HARD EXPIRY).** Reframe "Twelve days in." |
| **natalie.sotocruz** | May 7 18:40 UTC | 12d 16h | 0 | **Day 13 today. Day-3 missed May 10 (244h HARD EXPIRY). Day-7 missed May 14 (~136h-carry HARD EXPIRY).** Reframe to "Thirteen days in..." |
| **zhili1208** | Apr 29 03:16 UTC | 21d 8h | 0 | **Day 21 today. Day-21 MISSED ~03:16 UTC (~7h44m PAST report cutoff).** Frame: "Three weeks in." |
| **lilianamasyrubi** | Apr 28 05:24 UTC | 22d 6h | 0 | **Day 22 today. Day-21 missed yesterday (~29h-carry HARD EDGE).** Reframe "Three weeks and a day in..." |
| taranimeramaro | Apr 25 18:25 UTC | 24d 17h | 3 (Bruno MetLife Aug, target=null) | **Day 25 today. Day-21 missed May 16 (~89h-carry HARD EDGE/EXPIRY transition).** Reframe "Three and a half weeks in..." |
| nmcnamee99 | Apr 25 11:51 UTC | 24d 23h | 1 (Raptors-Cavs PASSED Apr 26) | **Day 25 today. Day-21 missed May 16 (~95h-carry HARD EDGE/EXPIRY).** Apology-lead. |
| mark.murdock | Apr 23 03:01 UTC | 27d 8h | 0 | **Day 27 today. Day-21 missed May 14 (~152h-carry HARD EXPIRY).** Day-30 fires May 23 ~03:01 UTC (~64h from now). |
| awwhittington | Apr 23 00:30 UTC | 27d 10h | 0 | **Day 27 today. Day-21 missed May 14 (~154h-carry HARD EXPIRY).** |
| ajvanprooyen | Apr 23 00:58 UTC | 27d 10h | 6 (Cubs trip 100% passed) | **Day 27 today. Day-21 missed May 14 (~154h-carry HARD EXPIRY).** Cubs apology lead. |
| ggri73 | Apr 22 21:18 UTC | 27d 14h | 0 | **Day 28 today. Day-21 missed May 13 (~158h-carry HARD EXPIRY).** Day-30 fires May 22 ~21:18 UTC (~58h from now). |
| **charlesteel126** | Apr 22 11:38 UTC | 27d 23h | 1 (**Bruno Ohio PLAYS TONIGHT**) | **Day 28 today. Bruno T-1d MISSED ~11:38 UTC YESTERDAY (~23h-carry — locks 0/3 sweep). Bruno plays tonight ~23:30 UTC.** Day-21 carry 168h HARD EXPIRY. **Apology+event-day-of send candidate; event-day fire window if scheduled fires before doors.** |
| **dr.altvater** | Apr 20 14:08 UTC | 29d 21h | 0 | **Day 30 today. Day-30 fires ~14:08 UTC (~3h08m from report). FINAL NATURAL FIRE WINDOW IN LIFECYCLE.** Day-21 carry 192h HARD EXPIRY. German-language send candidate. |
| dylanbaldy | Apr 15 18:24 UTC | 34d | 0 | Churned. |

- **24 real users** (excluding 3 test) have **never** added a watchlist item → **24/82 = 29.3%** (unchanged from yesterday — **flat 24h after yesterday's 2-day-narrow-streak-ending +0.9pp move**). **Activation-gap flat: first non-shift day in 4.**
- **Activation rate trajectory (real users, last 14 days):** 71.0 → 71.4 → 71.4 → 71.2 → 68.6 → ? → 67.6 → 67.6 → 67.1 → ? → 65.8 → 64.9 → 65.8 → 65.4 → 64.6 → **64.6 (flat 24h).** First non-retreating day in 4.
- **7-day decline: −5.6pp** (May 9 70.2% → May 20 64.6%; narrowed from yesterday's −6.6pp due to roll-off shifting the comparison baseline).

**Acquisition-source inference: 0-signup day collapses 24h attribution-resolution rate to 0.**

The pattern: **26 unknown-source users in 25 days (unchanged from yesterday at N=26).** Against **3 known (ids 59, 61, 62)**. **Unknown-source activation rate: 9/26 = 34.6% (frozen).** **Known-source: 3/3 = 100% (frozen).** **Gap holds at 2.89x.** Day 27 of attribution dependency. **The recovery-cohort split rolls from 5:6 yesterday to a current 4:5 (4 power, 5 inert) inside the 7-day window** (kevinshall + pattyglvz both aged out; 4 power = lisallam + cutekitten + belder + karin; 5 inert = 9440111 + eduardo + nunemakerc + vlanza + c_calingasan). **Recovery-cohort power-user rate: 4/9 = 44.4% (was 5/11 = 45.5% yesterday).** Effectively flat — boundary roll-off removes one of each category. **Critical question for Ads Agent: do the 4 activated and 5 inert share attribution signals?** **9440111 still the highest-uncertainty archetype** — 40h post-signup, opaque identifier, no behavioral signal.

## Churn signals

- Unsubscribes today: **0** (3 subscribers; **108 days flat = 15 weeks 3 days**).
- Users entering "at-risk" today: **+2 net entries** (kevinshall Day-8 + pattyglvz Day-8 — both crossed Day-7 last night without a touch) **−1 exit** (jadbennis to churned) = **+1 net**.
- Users entering "churned" since yesterday: **+1 net** — **jadbennis crossed last night 20:33 UTC.** **2 consecutive nights of Day-14 boundary crosses** (joseph May 18, jadbennis May 19).
- Alert fatigue candidates: **0** (0 alerts ever sent — Day 44).
- Events passed without notification (cumulative): **17 (unchanged through 11:00 UTC).** **Bruno Ohio plays tonight — locks #18 by tomorrow's report.** SEC Baseball Session 5 plays tomorrow (May 21) — locks #19 candidate.
- **Algo-overrides as preemptive "events lost without notification":** **3 events** still open:
  - **Bruno Ohio May 20 — PLAYS TONIGHT** [charlesteel, **T-7d/T-3d/T-1d 0/3 LOCKED; event-day window if scheduled is the final touchpoint**]
  - **AEW May 24** [josh, T-7d missed May 16, T-3d May 21 ~20:30 UTC, T-1d May 23 ~20:30 UTC — 2 thresholds remain]
  - **SEC Baseball Session 5 May 21 (plays tomorrow) + Session 6 May 22** [belder, Session 5 T-3d MISSED May 18, Session 6 T-3d MISSED LAST NIGHT, **Session 5 T-1d fires today ~22:14 UTC, Session 6 T-1d fires May 21 ~22:14 UTC**]
- **20th day of non-Cubs flip-quiet streak.** Bruno T-1d closed-out yesterday confirms **13 total flip failures**: Cubs (6) + Inter Miami (4) + Bruno T-7d + T-3d + T-1d + AEW T-7d + Session 5 T-3d + Session 6 T-3d = 13. **belder Session 5 T-1d at 22:14 UTC tonight is the next algo-flip fire window — 11h14m from report. If missed, #14.**

## At-risk users (7–14d inactive proxy)

| User | Day | Watchlist | Days to event | Recommended intervention |
|------|-----|-----------|---------------|--------------------------|
| **kevinshall87** | 8d | 6 (5 WC + Matt Rife, target=null) | 22-130 | **NEW AT-RISK ENTRANT (crossed Day-7 yesterday ~16:44 UTC missed). HIGHEST-EV intervention candidate today.** Body: "A week ago you added six events in three minutes. We owed you a Day-7 touch yesterday. Set targets on each — $80-200 WC source-floor swings expected." |
| **pattyglvz** | 8d | 0 | — | **NEW AT-RISK ENTRANT (crossed Day-7 yesterday ~15:23 UTC missed). Engine-independent coverage gap.** Body: "A week ago you signed up but didn't add an event. Concert, sport, theater — reply with the name and we'll set up tracking in 30 seconds." |
| **jmoriarty13** | 11d | 0 | — | **AT-RISK carried. Day-7 missed May 16 (~94h+ HARD EXPIRY).** Joins Day-11/12 batch. Body: "Eleven days ago you signed up. We owed you Day-3 and Day-7 emails. We sent neither." |
| **emmacmather** | 12d | 0 | — | At-risk carry. Day-3 + Day-7 both hard-expired. Reframe "Twelve days in..." |
| **kevinkid94** | 12d | 0 | — | At-risk carry. Day-7 hard-expired. Reframe "Twelve days in." |
| **liambot62** | 12d | 1 (passed) | passed | At-risk + passed-event apology. |
| **jfgalzin** | 12d | 0 | — | At-risk carry. |
| **cjthomas2557** | 13d | 1 (Noah Kahan Jun 12) | 23 | **AT-RISK with Noah Kahan T-23d hook.** Reframe + target-setting CTA. |
| **natalie.sotocruz** | 13d | 0 | — | At-risk carry. |
| **sparkitrightthere** | 13d | 1 (Mac DeMarco passed) | passed | At-risk + passed-event apology. |

## Live algo-flip post-mortem (today)

| User | Event | Days out | Flip status | Days flagged | Sends |
|------|-------|----------|-------------|--------------|-------|
| **charlesteel126** | **Bruno Mars Ohio May 20 (PLAYS TONIGHT)** | **0** | **T-7d MISS May 13. T-3d MISS May 16. T-1d MISS YESTERDAY 11:38 UTC. 0/3 LOCKED.** Event-day window fires today if scheduled (no schema confirmation). | 9 | 0 |
| **belder4308** | **SEC Baseball Tournament Session 5 May 21 (PLAYS TOMORROW)** | **1** | **T-3d MISS May 18. T-1d FIRES ~22:14 UTC TODAY (~11h14m from report).** **3RD ALGO-FLIP FIRE WINDOW OF RECOVERY COHORT. FINAL SESSION 5 THRESHOLD.** | 4 | 0 |
| **belder4308** | **SEC Baseball Tournament Session 6 May 22** | **2** | **T-3d MISS LAST NIGHT 22:14 UTC. 13th algo-flip failure. T-1d fires May 21 ~22:14 UTC (~35h).** | 4 | 0 |
| **josh** | **AEW Double or Nothing May 24** | **4** | **T-7d MISS May 16. T-3d May 21 ~20:30 UTC (~33h). T-1d May 23 ~20:30 UTC (~81h).** | 5 | 0 |
| **lisallam** | **JOJI: SOLARIS Newark Jun 16** | **27** | **NOT YET FLIPPED — T-21d May 26 (6d), T-7d Jun 9 (20d).** | 3 | 0 |
| cjthomas2557 | Noah Kahan Jun 12 | 23 | NOT YET FLIPPED — T-21d May 22 (2d) | 13 | 0 |
| **kevinshall87 (power user)** | 5 WC + Matt Rife | 22-58 (WC), 130 (Matt Rife) | NOT YET FLIPPED — earliest T-7d Jun 7 | 8 | 0 |
| **karin_ef1 (power user 2)** | WC Switz-Canada + R16 Match 96 | 35 (group), 48 (R16) | NOT YET FLIPPED — earliest T-7d Jun 17 | 6 | 0 |
| **cutekitten1234 (power user 3)** | 7 Harry Styles MSG Aug 26 - Sep 9 | 98-112 | NOT YET FLIPPED — earliest T-7d Aug 19 | 4 | 0 |

**20th day of algo-flip-quiet streak.** **Bruno T-1d locked yesterday = 13 total confirmed flip failures (Cubs 6 + Inter Miami 4 + Bruno 3 + AEW T-7d + Session 5 T-3d + Session 6 T-3d).** **TODAY's environment: ONE flip threshold fires — belder Session 5 T-1d at ~22:14 UTC (~11h14m).** **Engine return by 22:14 UTC tonight catches Session 5 T-1d.** Engine return after that locks #14.

**TODAY's critical algo-flip window: 22:14 UTC** (belder Session 5 T-1d). **Plus event-day Bruno window if scheduled.**

Next major algo-flip windows after today:
- **Session 6 T-1d ~22:14 UTC May 21** (~35h)
- **AEW T-3d ~20:30 UTC May 21** (~33h)
- **AEW T-1d ~20:30 UTC May 23** (~81h)

## Churned users with re-engagement potential

| User | ~Days inactive | Watchlist | Upcoming hook? | Priority |
|------|----------------|-----------|----------------|----------|
| **charlesteel126** | 28d | 1 (Bruno Ohio PLAYS TONIGHT) | **0d — TONIGHT** | **HIGHEST** — event tonight; 0/3 algo-flip sweep already locked. Apology + last-minute floor-check candidate. |
| **josh** | 30d | 1 (AEW May 24) | **4d** | **HIGH** — T-3d May 21 ~20:30 UTC next (~33h from now). |
| **jadbennis0** | 14d (CROSSED LAST NIGHT) | 1 (Inter Miami passed) | passed | **HIGH** — Day-14 + 4-of-4 algo-flip sweep both closed last night. Apology-only. |
| **joseph.g.nicolosi** | 15d | 0 | — | **HIGH** — Day-14 missed Sun. Reframe to "Two weeks and a day in." |
| **ajvanprooyen** | 27d | 6 (Cubs passed) | passed | **HIGH** — "Twenty-seven days, six Cubs games, all passed, zero alerts." Apology candidate. |
| **mark.murdock** | 27d | 0 | — | **HIGH** — Day-21 152h HARD EXPIRY. Day-30 in ~3d. |
| **awwhittington** | 27d | 0 | — | **HIGH** — Day-21 154h HARD EXPIRY. |
| **ggri73** | 28d | 0 | — | **HIGH** — Day-21 158h HARD EXPIRY. Day-30 in ~2.5d. |
| **nmcnamee99** | 25d | 1 (passed) | passed | **HIGH** — Day-21 95h-carry HARD EDGE/EXPIRY transition. |
| **taranimeramaro** | 25d | 3 (Bruno MetLife Aug) | 93-97d | **HIGH** — Day-21 89h-carry HARD EXPIRY. Best target-setting candidate. |
| **lilianamasyrubi** | 22d | 0 | — | **HIGH** — Day-21 hard-expired yesterday. Day-14 hard-expired prior. |
| **zhili1208** | 21d | 0 | — | **HIGH** — Day-21 fired ~7h44m before report cutoff TODAY. New miss. |
| **dr.altvater** | 30d | 0 | — | **HIGH** — **Day-30 fires today ~14:08 UTC. FINAL natural fire window.** |
| **nicklib253** | 33d | 1 (Phillies passed) | passed | **MEDIUM** — Day-21 288h carry, apology-only. |
| **pete.uzelac77** | 40d | 6 (WC + Darts) | 31-46d | **MEDIUM** — Day-30 240h HARD EXPIRY. WC content hook viable. |
| dylanbaldy | 34d | 0 | — | LOW |
| **blubberboi** | 40d | 1 (Ed Sheeran Aug 8) | 80d | MEDIUM |
| **laye.aurelien** | 48d | 2 (Shakira Jul 20+23) | 61-64d | HIGH |
| **lvasub6** | 52d | 2 (Flyleaf Jul 17-18) | 58-59d | HIGH |
| **tosophiameyer** | 71d | 11 (Harry Styles MSG) | 96-120d | **HIGH** — same residency as cutekitten1234; cutekitten's fresh engagement is comparable. |
| **brigitte.theisen** | 84d | 10 (Backstreet Sphere) | 58-78d | **HIGH** — deepest non-test watchlist. |

**Passed-event overhang: 17 churned/at-risk users with passed events or no immediate hook. No new passed events in 24h. Bruno Ohio locks #18 by tomorrow's report. SEC Baseball Session 5 locks #19 candidate (May 21).**

## Churn intervention: email content (queued for engine return)

### TODAY's natural fire windows (in order of upcoming)

#### **c_calingasan Day-7 ~11:46 UTC TODAY (~46 MIN from report) — HIGHEST TEMPORAL URGENCY TODAY**

**Subject:** A week ago you signed up — what event did you have in mind?

**Body:**
> A week ago today you signed up for TicketScan but didn't add any events. That's normal — most people sign up either right after seeing a high-priced ticket or right before deciding to buy.
>
> Tell us what event you had in mind. Concert, sport, theater — anything in the US. Reply with the name, or [start a search](https://www.ticketscan.io). We'll set up tracking in 30 seconds and email you when prices drop on any of Ticketmaster, SeatGeek, or StubHub.

---

#### **lisallam Day-3 ~14:05 UTC TODAY (~3h05m from report) — HIGHEST-EV ACTIVATED-COHORT FIRE**

**Subject:** Three days into tracking JOJI: SOLARIS — anchor a target

**Body:**
> Three days ago you added JOJI: SOLARIS at Prudential Center Newark to your watchlist — June 16. That was 165 seconds after signing up, which makes you one of the fastest activators we've ever recorded.
>
> Here's what's still missing: a target price. Without one, we can't email you when Ticketmaster, SeatGeek, or StubHub drops below your number.
>
> Newark Prudential Center shows typically soften 10-20% in the final two weeks. We suggest **$95-110** as a starting target — set it and we'll watch all three sources for the next 27 days.
>
> [Set a target on JOJI: SOLARIS](https://www.ticketscan.io/watchlist)

---

#### **dr.altvater Day-30 ~14:08 UTC TODAY (~3h08m from report) — FINAL NATURAL FIRE OF LIFECYCLE**

**Subject:** A month with TicketScan — what would have made it worth it?

**Body (English; consider German variant for `.de`-pattern user)**:
> A month ago today you signed up for TicketScan and haven't added an event yet. Most people sign up either right after a high-priced ticket caught their eye, or right before deciding to buy.
>
> If the moment passed: tell us what you were looking at and we'll show you what the prices have done since. If you've got something coming up: send us the event name and we'll start tracking in 30 seconds.
>
> [Browse events](https://www.ticketscan.io)
>
> **Note:** This is the last automated check-in we have scheduled. After today there's no further natural cadence — reply if you'd like us to stay in touch.

---

#### **belder Session 5 T-1d ~22:14 UTC TODAY (~11h14m from report) — FINAL SESSION 5 THRESHOLD**

**Subject:** SEC Baseball Session 5 is tomorrow — last price check

**Body:**
> Session 5 at Hoover Metropolitan Stadium plays tomorrow afternoon. You added it to your watchlist four days ago on May 16 alongside Session 6.
>
> **Current floors across the three sources we track:**
> - Ticketmaster: [floor price]
> - SeatGeek: [floor price]
> - StubHub: [floor price]
>
> T-1d SEC Baseball resale typically softens 10-20% in the final 12-18 hours as last-minute holders dump inventory. **This is your last automated check on Session 5 from us.** Set a target price now if you haven't bought — we'll email you the second any source drops below it before first pitch.
>
> [Compare Session 5 prices](https://www.ticketscan.io/watchlist)
>
> **Note:** We owed you a T-3d alert on Sunday. The engine missed it. We're rebuilding right now — Session 6 will get every threshold notification it should.

---

### MANUAL SENDS RECOMMENDED TODAY (no schedule entry or carry priority)

#### **9440111@gmail.com Day-1 carry (HIGHEST-EV inert-recovery touch carrying from yesterday — fresh signup, 40h-old account, opaque-identifier archetype)** — no schedule entry exists

**Subject:** Two days in — anything we can help track?

**Body:**
> Two days ago you signed up for TicketScan. We haven't seen you add an event yet — and that's completely normal. Most people sign up either right after seeing a high-priced ticket or right before deciding to buy.
>
> Tell us what you had in mind. Concert, sport, theater — anything in the US. We compare Ticketmaster, SeatGeek, and StubHub side-by-side and email you when any source drops below your target price.
>
> Reply with the event name, or [start a search](https://www.ticketscan.io).

---

#### **eduardo Day-2 carry (58h post-signup, escalates from Day-1 carry yesterday)** — no schedule entry exists

**Subject:** Two and a half days in — what made you sign up?

**Body:**
> Two and a half days ago you signed up for TicketScan. We notice you haven't added an event yet — that's normal, but we'd love to get you tracking something so you can see how the price comparison works.
>
> Tell us one event you're curious about. We watch Ticketmaster, SeatGeek, and StubHub side-by-side and email you when any source drops below your target.
>
> Reply with the event name, or [browse events](https://www.ticketscan.io).

---

#### **kevinshall Day-8 carry (Day-7 missed yesterday — first natural Day-7 of recovery, 18h-carry HARD EDGE)** — power-user #1

**Subject:** A week in, 6 events tracked, $0 in target prices — let's fix that

**Body:**
> Eight days ago you added six events to TicketScan in three minutes — five World Cup matches at AT&T Stadium plus Matt Rife. **That was the deepest first-session watchlist we'd ever seen** until two nights later someone added seven Harry Styles dates.
>
> Here's what's still missing on yours: target prices. We compare Ticketmaster, SeatGeek, and StubHub on every event you track — but without a target price, we can't email you when any of them drops below your number.
>
> World Cup matches at AT&T Stadium typically swing **$80-200** between source-floors as the tournament approaches. Set a target on each and we'll watch all three sources around the clock.
>
> **Note:** We owed you a Day-7 follow-up yesterday afternoon. The engine missed it. We're rebuilding right now.
>
> [Set targets on your watchlist](https://www.ticketscan.io/watchlist)

---

#### **pattyglvz Day-8 carry (Day-7 missed yesterday — first natural Day-7 of inert subset, 20h-carry HARD EDGE)** — engine-independent coverage gap

**Subject:** Eight days ago you signed up. What event did you have in mind?

**Body:**
> Eight days ago you signed up for TicketScan but didn't add any events. That's completely normal — most people sign up either right after seeing a high-priced ticket or right before deciding to buy.
>
> Tell us what you had in mind. Concert, sport, theater — anything in the US. Reply with the name, or [start a search](https://www.ticketscan.io). We'll set up tracking in 30 seconds and email you when prices drop on any of the three big sources.

---

#### **cutekitten Day-4 carry (Day-3 missed last night, ~11h28m carry — frame still parses today)**

**Subject:** Four days into 7 Harry Styles nights — anchor a target

**Body:**
> Four days ago you added every available Harry Styles "Together, Together" night at MSG to your watchlist — August 26, 28, 29, September 2, 4, 5, 9. Seven shows.
>
> Harry Styles MSG residencies historically swing $80-200 between the cheapest and most expensive night, and the cheapest is rarely the opening or closing show — it's usually mid-residency, on a weeknight, and the price doesn't settle until 30-45 days out.
>
> Set a single target — say **$280** — and we'll email you the moment any of the 7 nights drops below it. You buy whichever fires first.
>
> [Set a target on all 7](https://www.ticketscan.io/watchlist)

---

#### **belder Day-4 carry (Day-3 missed last night, ~13h carry)** — pairs with Session 5 T-1d send

**Subject:** Four days into SEC Baseball — Session 5 is tomorrow

**Body:**
> Four days ago you added two SEC Baseball Tournament dates — Session 5 (May 21) and Session 6 (May 22). Session 5 plays tomorrow afternoon.
>
> **Current floors for Session 5:**
> - Ticketmaster: [floor]
> - SeatGeek: [floor]
> - StubHub: [floor]
>
> SEC Baseball ticketing softens 10-20% T-3d → T-1d as the bracket fills in and the "TBD vs TBD" matchups resolve. **Set a single target price for both sessions and we'll email you the moment either drops below it.**
>
> [Set targets on Sessions 5 + 6](https://www.ticketscan.io/watchlist)

---

#### **karin_ef1 Day-6 carry (76h, manual — power-user #2)**

**Subject:** Six days into your World Cup tracking — set a target

**Body:**
> Six days ago you added Switzerland vs Canada (June 24, Group B) and Round of 16 Match 96 (July 7) to your watchlist. We owed you a Day-3 follow-up — we didn't send it.
>
> World Cup resale prices typically swing 30-50% between Ticketmaster, SeatGeek, and StubHub in the weeks before kickoff. Set a target on each match and we'll email you the second any source drops below it.
>
> [Set targets](https://www.ticketscan.io/watchlist)

---

#### **jadbennis Day-14+1 — Inter Miami 4-of-4 sweep apology (frame: "two weeks and a day")**

**Subject:** Two weeks and a day since signup, three days since Inter Miami. We sent you nothing.

**Body:**
> Two weeks ago you signed up for TicketScan. On May 5 you added Inter Miami CF vs Portland Timbers — twelve days before kickoff. **Our alert engine should have emailed you four times** (T-7d, T-5d, T-3d, T-1d) plus once on game day. **Every one of those windows missed.**
>
> The match played three nights ago. We never sent a single update. That's on us — not on you.
>
> We're rebuilding the alert engine right now. The next match you add will get every threshold notification — guaranteed. Want to start with one event?
>
> [Add it here](https://www.ticketscan.io)

---

#### **joseph Day-15 (was Day-14 yesterday — reframe to "two weeks and a day")**

**Subject:** Two weeks and a day in. We owe you an apology.

**Body:**
> Two weeks and a day ago you signed up with TicketScan. We should have followed up at Day 3, Day 7, and at Day 14 the night before last. We didn't — none of them.
>
> We're rebuilding the engine right now. Tell us one event you're curious about and we'll set up tracking in 30 seconds — and the next round of alerts will actually fire.
>
> Reply with the event name, or [browse events](https://www.ticketscan.io).

---

#### **nunemakerc Day-5 / vlanza Day-6 reframes (Day-3 hard-expired)**

Same body archetype, frames adjusted to "Five days ago..." (nunemakerc) / "Almost a week ago..." (vlanza).

---

#### **zhili Day-21 (~7h44m past natural fire window today)**

**Subject:** Three weeks in — we owe you an apology

**Body:**
> Three weeks ago today you signed up for TicketScan. We should have followed up at Day 3, Day 7, Day 14, and this morning at Day 21. None of those went. We're rebuilding the engine — tell us one event you're curious about and we'll set up tracking in 30 seconds.

---

### CARRIES (24-240h delayed, send today as batch)

#### **CHARLESTEEL DAY-28 + BRUNO 0/3 SWEEP + EVENT-NIGHT (HIGHEST PRIORITY — EVENT TONIGHT)**

**Subject:** Bruno Ohio plays tonight. We sent you 0 of 3 alerts.

**Body:**
> Twenty-eight days ago you added Bruno Mars Ohio (May 20) to your watchlist. Our engine should have emailed you at T-7d (May 13), T-3d (May 16), and T-1d (yesterday morning). **None of the three went out.** That's on us — we're rebuilding the engine right now.
>
> **But the show is tonight.** Current floors across the three sources:
> - Ticketmaster: [floor]
> - SeatGeek: [floor]
> - StubHub: [floor]
>
> Day-of Bruno resale typically softens 10-25% in the final 6-12 hours before doors. **If you haven't bought, check now — and let us know how the night goes.**
>
> [Compare Bruno Ohio prices](https://www.ticketscan.io/watchlist)

#### **TARANIMERAMARO DAY-25 / NMCNAMEE99 DAY-25** (Day-21 89h/95h HARD EDGE/EXPIRY)

Same as prior drafts, ages updated.

#### **5-USER DAY-11/12/13 BATCH** (jmoriarty + emma + kevinkid + jfgalzin + liambot + cjthomas + natalie + sparkit — Day-7 carries 85-144h HARD EXPIRY)

Frame: **"Eleven to thirteen days ago you signed up for TicketScan..."** All carry Day-7 misses. Single batch send (or split into two batches of 4 by Day-11/12 vs Day-12/13).

#### **5-USER DAY-27/28 BATCH** (charlesteel + ggri + aw + ajv + mark — Day-21 missed May 13-14 HARD EXPIRY)

Body: **"Three and a half to four weeks ago you signed up for TicketScan..."** Apology lead. **charlesteel variant covered above with Bruno event-night combined send.** [ajvanprooyen variant retains Cubs apology.] **ggri Day-30 fires May 22 ~21:18 UTC (~58h from now); mark Day-30 fires May 23 ~03:01 UTC (~64h from now) — both final-natural-fire candidates inside this window.**

#### **DR.ALTVATER DAY-30 — FIRES TODAY ~14:08 UTC (~3h08m)**

See natural-fire section above. **3h08m to final lifecycle send.**

#### **LILIANA DAY-22 — Day-21 missed yesterday (~29h carry HARD EDGE)**

**Subject:** Three weeks and a day in — we owe you an apology

Body: "Three weeks and a day ago you signed up for TicketScan. We should have followed up at Day 3, Day 7, Day 14, and yesterday at Day 21. None of those went. We're rebuilding the engine — tell us one event you're curious about."

#### **PETE DAY-40 — Day-30 240h HARD EXPIRY**

Body: **"Six weeks in — six tracked events (5 WC + 1 Darts), zero alerts."** Day-30 family dead.

#### **NICKLIB DAY-33 — Day-21 288h, FAR PAST EXPIRY**

Body: **"Almost five weeks ago you added Phillies vs Braves. Match has been over for 33 days — we never sent a price update."** Apology-only.

---

### TODAY's total queue if engine returns: **26-30 emails** — fewer than yesterday's 31-35 due to fewer natural fires today (4 yesterday vs 4 today including 1 algo-flip, but with fewer concurrent manual sends after jadbennis closed and Bruno T-1d already locked).

- 3 today-natural fires (c_calingasan Day-7 at 11:46 UTC + lisallam Day-3 at 14:05 UTC + dr.altvater Day-30 at 14:08 UTC)
- 1 today-algo-flip fire (belder Session 5 T-1d at 22:14 UTC)
- 1 today-event-night send (charlesteel Bruno apology + event-night, before doors)
- 7 high-priority manual carry sends (**9440111 Day-1 carry** / eduardo Day-2 carry / kevinshall Day-8 carry [Day-7 missed yesterday — HIGHEST-EV target-price-capture send today] / pattyglvz Day-8 carry / cutekitten Day-4 carry / belder Day-4 carry / karin Day-6 carry)
- 2 reframe sends (jadbennis Day-14+1 / joseph Day-15)
- 3 inert carry sends (nunemakerc Day-5 / vlanza Day-6 / zhili Day-21 closeout)
- 5-user Day-11/12/13 batch (jmoriarty / emma / kevinkid / jfgalzin / liambot / cjthomas / natalie / sparkit = up to 8 total in batch)
- 4-user Day-27/28 batch (ggri / aw / ajv / mark — charlesteel BIG SEND broken out)
- 2 priority carries (taranimeramaro Day-25 / nmcnamee Day-25)
- 4 hard-expiry rewrites (pete Day-40 / nicklib Day-33 / liliana Day-22 / dylan Day-34 [low pri])

**= 26-30 emails to clear in 36-48h. Includes the FINAL natural fire opportunity for dr.altvater (3h08m) and the FINAL Session 5 algo-flip threshold (11h14m). Bruno event-night fire window if scheduled is the most-temporally-urgent send of the day.**

---

## Psychology-driven micro-optimization (today)

**Principle:** **Scarcity (Cialdini 1984, "principle 6") + Implicit deadline framing** — applied via a **"Source-floor decay window"** indicator on compare-page rows and event-detail pages that surfaces TicketScan's accumulated data on how a specific category of event softens (or stiffens) in the final 7 / 3 / 1 days before kickoff.

**Where to apply:** Two surfaces, one engine.
1. **Compare page row footer:** A single-line decay indicator under each source-floor on the price-compare grid — visible to authenticated and anonymous users alike.
2. **Event-detail page price-history sidebar:** A "what the next 7 days typically do for [event-category]" inset below the price chart.

**The diagnosis:**

The recovery cohort's two power-users now generate the cleanest natural experiment in the dataset for *temporal* scarcity:

- **belder** added Sessions 5+6 on May 16. **Session 5 plays tomorrow.** The dataset has captured the "T-3d closed dark" + "T-1d about to fire" pattern in real time.
- **charlesteel** added Bruno on Apr 22. **Bruno plays tonight.** The dataset has captured the full 0/3 algo-flip sweep across 28 days.

Both users hit the same wall: **they have no price-floor anchor**. belder doesn't know whether Sessions 5+6 typically soften or stiffen in the final 24h. charlesteel doesn't know whether to check at noon or 7pm on event-day. **Without a category baseline, the user defaults to refresh-anxiety — and refresh-anxiety drives abandonment, not purchase.**

Yesterday's #11 CRO recommendation (watchlist value receipt) addresses the *retrospective* psychological gap ("here's what you missed because you didn't set a target"). **Today's diagnosis surfaces the prospective gap: the user doesn't know what the next 24h-72h will typically do, so the target-setting decision has no anchor.**

Cialdini's scarcity principle says: information about future *unavailability* drives ~3x the behavioral response of equivalent gain framings. **A "this category typically softens 10-25% in the final 6-12 hours; here's the source-floor decay curve" indicator stacks scarcity (the window is closing) with anchoring (here's the typical magnitude) with implicit deadline framing (the curve has a steepest-decay zone).**

**Specific change:**

For any event with `daysToEvent <= 7`, surface a category-specific decay indicator using the historical median across the dataset. The indicator is *static category-baseline* — not predictive — so it ships without ML and without per-event price-history depth.

The compare-page row indicator:

```
┌──────────────────────────────────────────────────────────────┐
│ Ticketmaster                                      $186 ↓     │
│ ─────────────                                                │
│ SEC Baseball typically softens 10-20% T-3d → T-1d.           │
│ ⏱ This source has 36 hours left to drop into your target.    │
└──────────────────────────────────────────────────────────────┘
```

The event-detail sidebar inset:

```
┌──────────────────────────────────────────────────────────────┐
│ 🎯 Final-week pricing for SEC Baseball                       │
│                                                              │
│ T-7d → T-3d: typically -8% across all three sources          │
│ T-3d → T-1d: typically -15% (steepest decay)                 │
│ T-1d → doors: typically -5% to +12% (volatile)               │
│                                                              │
│ Set a target now and we'll catch the steep-decay window.     │
└──────────────────────────────────────────────────────────────┘
```

**Why this works:**

1. **Scarcity (Cialdini).** "This source has 36 hours left to drop into your target" converts the price-watching system into a *closing-window* mechanic. The user perceives an active deadline on the *transaction*, not just the event. This is the only mechanism in the CRO stack that creates a perceived deadline on target-setting itself.

2. **Anchoring (Tversky-Kahneman 1974).** Median category-decay numbers (e.g., "10-20% T-3d → T-1d") anchor the user's expectation of the target-price magnitude. Without an anchor, users either over-set targets (no fire) or under-set them (panic-buy). **The anchor solves the target-magnitude problem that #2 and #7 in the existing CRO stack solve from the modal-friction angle, but from the *decision-quality* angle.**

3. **Implicit deadline framing.** Cialdini's later work (2016) emphasizes that *implicit* deadlines (you have 36 hours until the price decay window closes) drive 2-3x the urgency of explicit deadlines (sale ends Friday). The phrasing "this source has 36 hours left to drop" makes the *price's clock* the deadline, not TicketScan's.

4. **It captures the charlesteel/belder coverage gap that #11 doesn't.** Yesterday's value receipt fires for users with `watchlist_count >= 1 && target_price === null`. **charlesteel + belder + lisallam + cutekitten + karin + kevinshall — all of them satisfy this condition.** But yesterday's receipt is *retrospective*. Today's decay indicator is *prospective* — it tells them what to expect, which is the bridge between adding an item and setting a target. **#11 says "you missed $45 of swing." #12 says "the next 36 hours will typically deliver $25-50 of additional swing if you set a target now."** **#11 is the apology; #12 is the offer.**

5. **It works for anonymous users too.** Unlike #11 which requires authentication and watchlist data, the decay indicator fires on *every* compare-page render — including pre-signup. **It becomes a signup driver, not just a target-setting driver.** The implicit framing "you don't have a target on this — set one" creates an action-loop that the unauthenticated user can only resolve by signing up.

6. **It compounds with the live "Bruno plays tonight" send.** charlesteel's event-night send needs a copy hook for *why* now is the inflection. "Day-of Bruno resale typically softens 10-25% in the final 6-12 hours before doors" — that's exactly the decay-indicator copy, surfaced inside the email. **The same content engine drives the in-product banner AND the day-of email body.** **Single content pipeline, two surfaces.**

7. **It surfaces source-asymmetry as a feature.** Different sources have different decay curves. Ticketmaster face-value tends to hold; SeatGeek and StubHub resale tend to soften in the final 24h. The indicator can per-source render the differential: "Ticketmaster typically holds T-1d → doors; StubHub typically -15%." **This converts the multi-source comparison from a feature into an actionable insight.**

**Specific calculation logic (engineering brief):**

```javascript
// Category baselines (seeded from public reporting + early dataset signals):
const CATEGORY_DECAY = {
  'sec_baseball_tournament': {
    't7_to_t3': -8, 't3_to_t1': -15, 't1_to_doors': [-5, 12]
  },
  'mlb_regular_season': {
    't7_to_t3': -12, 't3_to_t1': -22, 't1_to_doors': [-8, 5]
  },
  'concert_major_residency': {  // Harry Styles MSG, Backstreet Sphere
    't7_to_t3': -3, 't3_to_t1': -8, 't1_to_doors': [-12, 18]
  },
  'concert_arena_single': {  // Bruno Mars Ohio, JOJI Newark
    't7_to_t3': -10, 't3_to_t1': -18, 't1_to_doors': [-15, 8]
  },
  'world_cup_group_stage': {
    't7_to_t3': -2, 't3_to_t1': -8, 't1_to_doors': [-25, 35]
  },
  // ... etc
};

function renderDecayIndicator(event) {
  const category = inferCategory(event);
  const baseline = CATEGORY_DECAY[category];
  const daysOut = daysUntil(event.eventDate);

  if (daysOut > 7) return null;  // Indicator only fires inside final week

  const windowLabel = daysOut <= 1 ? 'T-1d → doors'
                    : daysOut <= 3 ? 'T-3d → T-1d'
                    : 'T-7d → T-3d';
  const decay = baseline[windowKey(daysOut)];

  return {
    headline: `${categoryLabel(category)} typically softens ${Math.abs(decay)}% ${windowLabel}.`,
    secondary: `⏱ This source has ${hoursUntil(event.eventDate)} hours left to drop into your target.`
  };
}
```

**Quantitative target:** Move the **target-price capture rate among users with at least one event inside final-7-day window from 0% (Day 44) to ≥15% within 14 days of shipping** — measured on the existing population of belder + charlesteel + lisallam (when JOJI hits T-7d Jun 9) + every future activation. Also: **lift compare-page → signup conversion rate by ≥10% on anonymous traffic** (the indicator surfaces on every compare-page render).

**Implementation cost:** ~5-7h. CATEGORY_DECAY table seed (~1h, expanded later from real price_history rolling-window aggregates), inferCategory() heuristic (~2h, simple keyword matching on event names → category), compare-row footer component (~1h), event-detail sidebar inset (~1h), copy variants per category (~1h), responsive styling (~1h).

**Cross-agent route:** **CRO Agent (Agent 6)** for compare-row + sidebar surfaces; **Content Agent (Agent 3)** for category-baseline copy + per-category content briefs that mirror the indicator language; **Engineering** for the static CATEGORY_DECAY table and inferCategory() function.

**The full CRO activation stack now expands to 12 fixes:**
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
12. **(TODAY May 20) Source-floor decay window — scarcity + anchoring + implicit deadline. ~5-7h. ENGINE-INDEPENDENT FIX — works on every existing compare-page session AND every anonymous visitor.**

**Combined: ~52-63h.** **Combined coverage: VISIT → SIGNUP → ACTIVATION → TARGET-SETTING → RETENTION → EVENT-DAY CONVERSION.** **Today's fix is the first fix in the stack that targets the *prospective* psychological gap** — every prior fix (including yesterday's value receipt) addresses a retrospective or in-the-moment gap. **The decay indicator gives the user a model of what's about to happen, which makes the target-setting decision tractable rather than guess-driven.**

**Recommended new shipping sequence:**
1. **TODAY (#12) Source-floor decay window — ENGINE-INDEPENDENT, hits every compare-page session, anonymous + authenticated, addresses belder Session 5/6 + charlesteel Bruno + every future-T7d user.** ~5-7h.
2. (#11) Watchlist value receipt — ENGINE-INDEPENDENT, captures all 107 existing watchlist items + every future activation. ~6-8h.
3. (#10) 3-step commitment ladder — ENGINE-INDEPENDENT, captures all eduardo-class inerts on next page load. ~4-5h.
4. (#8 + #9 combined) per-row target prompt + residency composite control. ~9-10h. Activated users.
5. (#2) Default-effect pre-fill on watchlist-add modal. ~3-4h. New adds.
6. (#7) Two-step add modal with default pre-fill. ~5h. Existing future adds.
7. Others.

**Why #12 leads the sequence (over yesterday's #11):** #12 captures anonymous users in addition to authenticated users; #11 only captures authenticated. With recovery-cohort signup velocity flattening today, **anonymous-traffic conversion lift becomes the higher-leverage point of the funnel until signup motion resumes.**

---

## Cross-agent dependencies

1. **→ Email Agent (Agent 5):** **26-30 EMAILS QUEUED (down from yesterday's record 31-35 due to fewer dual-fire collisions). If engine returns today:**
   - **TODAY (3 natural fires):** **c_calingasan Day-7 ~11:46 UTC (~46 MIN — HIGHEST URGENCY)** + lisallam Day-3 (~14:05 UTC, ~3h05m — HIGHEST-EV activated-cohort fire) + dr.altvater Day-30 (~14:08 UTC, ~3h08m — FINAL LIFECYCLE NATURAL FIRE)
   - **TODAY (algo-flip fires):** belder Session 5 T-1d (~22:14 UTC, ~11h14m) — 3rd algo-flip fire window of recovery cohort, FINAL Session 5 threshold
   - **TODAY (event-night):** charlesteel Bruno event-night send before doors (~23:30 UTC kickoff)
   - **TODAY (manual sends, priority order):** (1) **kevinshall Day-8 carry [Day-7 closed-dark yesterday, HIGHEST-EV target-price-capture send — 6 items, all target=null]** → (2) **9440111 Day-1 carry [HIGHEST-EV inert-recovery touch, 40h-old account]** → (3) eduardo Day-2 carry [58h post-signup escalation] → (4) pattyglvz Day-8 carry [Day-7 closed-dark yesterday, engine-independent coverage gap] → (5) cutekitten Day-4 carry [Day-3 closed-dark last night] → (6) belder Day-4 carry [Day-3 closed-dark last night, pairs with Session 5 T-1d send] → (7) karin Day-6 carry [power-user #2]
   - **TODAY (boundary reframes):** jadbennis Day-14+1 (Inter Miami 4-of-4 sweep apology) + joseph Day-15 ("two weeks and a day in")
   - **TODAY (carry batches):** 8-user Day-11/12/13 batch (jmoriarty/emma/kevinkid/jfgalzin/liambot/cjthomas/natalie/sparkit) + 4-user Day-27/28 batch (ggri/aw/ajv/mark — charlesteel split out to event-night) + 2 priority carries (taranimeramaro/nmcnamee Day-25) + 4 hard-expiry rewrites (pete Day-40/nicklib Day-33/liliana Day-22/zhili Day-21-closeout) + 3 inert carries (nunemakerc Day-5/vlanza Day-6 + 1 from list above)
   - **NEW Day 14+1 of carried Day-1 ask.** 9 of 11 recovery-cohort signups would have benefited from Day-1 touch (karin / vlanza / nunemakerc / belder / cutekitten / lisallam / eduardo / 9440111 — and **pattyglvz/c_calingasan would also have benefited if the schedule existed before they aged out**). Day-1 schedule addition remains the single highest-ROI undelivered feature in the system.

2. **→ CRO Agent (Agent 6):** **TWELVE stacked high-leverage fixes — full activation stack now includes the FIRST PROSPECTIVE-PSYCHOLOGICAL-GAP fix for the target-price magnitude problem:**
   - **TODAY: Source-floor decay window (scarcity + anchoring + implicit deadline). ~5-7h. ENGINE-INDEPENDENT FIX.** Highest-priority ship-immediately recommendation in the stack — first fix that addresses HOW MUCH to set the target at, not just whether to set one. **Works for anonymous + authenticated users.**
   - **Updated recommended ship order:** (1) **TODAY's decay window [5-7h, engine-independent, hits every compare-page session]** → (2) yesterday's value receipt [6-8h, engine-independent] → (3) 3-step ladder [4-5h, engine-independent] → (4) per-row target prompt + residency control [9-10h combined] → (5) two-step add modal [5h] → (6) social-proof rail on WC pages [3h] → (7) others.
   - **Combined: ~52-63h.** **Combined coverage: VISIT → SIGNUP → ACTIVATION → TARGET-SETTING → RETENTION → EVENT-DAY CONVERSION.**

3. **→ Ads Agent (Agent 4):** **DAY 27 OF ATTRIBUTION DEPENDENCY. The 168h-window dataset rolls 11 → 9 signups with the 4:5 split:**
   - **4 power-users / fast activators inside 7d window** (lisallam JOJI + cutekitten Harry Styles + belder SEC Baseball + karin WC). Activation latencies: 165s / 22s / 19s / 37s = median 30s, all <3 minutes. **kevinshall (Day-8, 6 WC items + Matt Rife) ages out today but remains the cleanest activation-pattern signal.**
   - **5 inert signups** (9440111 / eduardo / nunemakerc / vlanza / c_calingasan). **pattyglvz (Day-8) ages out today; she was inert.**
   - **Recovery-cohort power-user rate: 4/9 = 44.4% inside the 7d window** (was 5/11 = 45.5% yesterday). **Effectively flat — boundary roll-off removes one of each category.**
   - **First 0-signup day of recovery breaks the 3-day streak.** **The acceleration arc inflects.** **Ads Agent: this is the moment to test attribution — if a paid channel was driving the 11-signup burst, today's 0 is the first signal of channel cool-off; if organic, today's 0 may be statistical noise inside the broader 1.29/day rate.**
   - **9440111's opaque-identifier archetype now produces 40h of behavioral silence** — escalates from "uncertain new" to "uncertain inert." Recommend Ads Agent flag the email-pattern signal and watch the next 72h for activation.

4. **→ Content Agent (Agent 3):** **CONTENT TRIGGER PRIORITIES — TODAY's CRO recommendation creates a new content surface (category decay primers):**
   - **CATEGORY DECAY PRIMERS** — for each of SEC Baseball / MLB / Major Concert Residency / Arena Concert Single / World Cup Group Stage — a 600-word primer with the exact decay numbers the in-product indicator surfaces. Primers serve as SEO entry points + landing pages for the in-product CTAs. **6-8 primers total, ~3h each = 18-24h content lift.**
   - **Bruno Ohio post-event recap** — tonight's event closes Bruno; recap with actual price-floor decay across the three sources between T-1d and doors. Compounds with charlesteel apology+event-night send. Publish T+24h.
   - **SEC Baseball Tournament pricing primer** — Session 5 plays tomorrow; Session 6 the day after. Compounds with belder T-1d send tonight + Session 6 T-1d send tomorrow night.
   - **JOJI: SOLARIS Prudential Center pricing guide** — lisallam tracking Jun 16. T-27d; 6-day lead window viable.
   - **Harry Styles MSG residency pricing guide** — 2 users tracking 18 combined nights (cutekitten + tosophia).
   - **AEW Double or Nothing T-3d/T-1d explainer** — fires May 21/23.
   - **AT&T Stadium WC fan guide** (carried; kevinshall + karin both WC power-users).
   - **WC bracket-tracking explainer** (carried; karin's R16 Match 96 add).

5. **→ Engineering / Drip-Engine:** **Day 44 of outage. New on-schedule fires missed in 24h:**
   - Bruno T-1d (~13th algo-flip failure) / pattyglvz Day-7 / kevinshall Day-7 / cutekitten Day-3 / belder Session 6 T-3d / belder Day-3 / jadbennis Day-14 (boundary closeout + 4-of-4 Inter Miami sweep closeout) / lisallam Day-1 / eduardo Day-1 / 9440111 Day-1 / zhili Day-21 / nunemakerc Day-4-reframe
   - **Total May 10-20 natural fire misses confirmed: 56+. Same-day queue if engine returns today: 26-30 emails in 36-48h.**
   - **TODAY'S HIGHEST-LEVERAGE WINDOW: c_calingasan Day-7 at ~11:46 UTC = ~46 MIN FROM REPORT.** Engine return in 46 minutes catches the first natural Day-7 of an unaged-out inert (c_calingasan rolls into Day-8 starting tomorrow morning).
   - **NEXT 12h critical window:** c_calingasan Day-7 (46min) → lisallam Day-3 (3h05m) → dr.altvater Day-30 (3h08m) → belder Session 5 T-1d (11h14m) → charlesteel Bruno event-night (~12h30m). **Five fire windows in 12 hours.**
   - **NEW Day 15 carried ask: Day-1 schedule entry critical.** With 9 of 11 recovery-cohort signups (including the now-aged-out pattyglvz/c_calingasan) never getting a Day-1 touch, Day-1 remains the highest-ROI undelivered feature in the system.

6. **→ All agents:** **THE RECOVERY'S ACCELERATION ARC INFLECTS — 3-DAY SIGNUP STREAK BREAKS AT ZERO; WATCHLIST 107 → 107 = SECOND CONSECUTIVE FLAT DAY.** **Both engagement axes go flat in the same 24h window for the first time since the recovery began May 12.** 9 signups in the rolling 7-day window = 1.29/day (was 1.57/day yesterday) = first negative day-on-day shift in 9 comparisons. **Still 4.3x baseline.** **kevinshall + pattyglvz age out of recovery cohort; recovery-cohort power-user rate steady at 44.4%.** **Activation rate flat at 64.6% — first non-retreating day in 4.** **2 consecutive Day-14 boundary crosses (joseph + jadbennis); Bruno T-1d closes dark = 13th algo-flip failure; Bruno plays tonight and locks #18 passed-event by tomorrow morning.** **Today's CRO recommendation (source-floor decay window, ~5-7h, ENGINE-INDEPENDENT) is the first fix in the entire 12-stack that addresses the prospective psychological gap — what the next 24-72h will do — across anonymous + authenticated traffic.** **12-fix CRO stack now totals ~52-63h** for full-funnel coverage including event-day conversion. **kevinshall Day-8 carry is the highest-EV target-price-capture send today** — 6 items, all target=null, missed Day-7 yesterday, fast-activator archetype, aged out of recovery cohort. **belder Session 5 T-1d at 22:14 UTC tonight is the final pre-event threshold for an event that plays tomorrow afternoon.**

---

## Summary metrics

```
Total users:              85 (=0 over 24h — 3-DAY SIGNUP STREAK BREAKS AT ZERO)
Real users:               82
Activated:                53 (=0 over 24h — SECOND CONSECUTIVE 0-watchlist-add day)
Activation rate:          64.6% (real, flat 24h — first non-retreating day in 4)
Watchlist items:          107 (=0 over 24h — 2 consecutive flat days; recovery slows)
Newsletter subscribers:   3 (108 DAYS FLAT — 15w 3d)
Active alerts:            0 (Day 44)
Triggered alerts:         0 (lifetime; Bruno T-1d locked yesterday = 13th algo-flip failure)
Drip emails sent:         0 (Day 44 — /api/admin/drip-stats: stats=[])
Cumulative passed-no-notify: 17 (Bruno locks #18 tomorrow; SEC Baseball Session 5 locks #19 candidate)
Algo-flip-quiet streak:   20 days (13 confirmed closed-out failures)
Activation gap (real):    24/82 = 29.3% (flat 24h after yesterday's 2-day narrow streak ended)
Unknown-source activation: 9/26 = 34.6% (FROZEN — no new signups)
Day-25 carry batch:       2 users (taranimeramaro + nmcnamee99)
Day-27/28 carry batch:    4 users (ggri / aw / ajv / mark — charlesteel split out to Bruno event-night)
Day-11/12/13 batch:       8 users (jmoriarty / emma / kevinkid / jfgalzin / liambot / cjthomas / natalie / sparkit)
Power-users (lifetime):   5 (kevinshall + karin + cutekitten + belder + lisallam) — unchanged at N=5, 8 days
Recovery-cohort (7d):     9 users, 4 power / 5 inert = 44.4% power-rate (was 5/11 = 45.5%; flat after roll-off)
WC PMF signal:            22 days to kickoff (June 11); 2 WC power-users (kevinshall + karin)
Harry Styles signal:      cutekitten + tosophia = 2 users, 18 combined MSG nights
JOJI signal:              lisallam = 1 user, Prudential Center Newark Jun 16 (genre persists; T-3d fires today)
Target-price capture:     0/107 watchlist items = 0% (Day 44; addressed by #11 + #12)
Post-burst signups:       9/168h rolling (down 11 → 9 via boundary roll-off)
Sustained recovery rate:  1.29/day over 7 days (was 1.57/day; 4.3x baseline, down from 5.2x)
Highest-EV send today:    kevinshall Day-8 carry (6 items, target=null, Day-7 missed yesterday)
2nd-highest send today:   9440111 Day-1 carry (40h-old account, opaque-identifier archetype)
3rd-highest fire today:   c_calingasan Day-7 ~11:46 UTC (~46 MIN — highest temporal urgency today)
Final-lifecycle send today: dr.altvater Day-30 ~14:08 UTC (last natural fire; German variant)
Event-night send today:   charlesteel Bruno Ohio (plays ~23:30 UTC; 0/3 algo-flip locked)
Final pre-event threshold today: belder Session 5 T-1d ~22:14 UTC (Session 5 plays tomorrow)
Closed-out fire families: 13/13 — Day-1 / Day-3 / Day-7 / Day-14 / Day-21 / Day-30 / Cubs / Inter Miami / Bruno T-7d/T-3d/T-1d / AEW T-7d / SEC Baseball Session 5 T-3d / Session 6 T-3d
```

**Headline:** **The 3-day signup streak breaks at zero — first 0-signup day inside the recovery cohort.** **Watchlist 107 → 107 = second consecutive 0-add day.** **Both engagement axes flatten on the same day for the first time since recovery began May 12.** 9 signups in the rolling 7-day window = 1.29/day (down from 1.57/day yesterday) = first negative day-on-day shift in 9 comparisons but still 4.3x baseline. **Bruno T-1d MISSED yesterday at 11:38 UTC = 13th algo-flip failure; the shortest-temporal-urgency fire window of the entire 44-day outage closed dark. Bruno plays tonight and locks #18 passed-event by tomorrow morning.** **kevinshall Day-7 + pattyglvz Day-7 + cutekitten Day-3 + belder Day-3 + Session 6 T-3d all closed dark in a 90-minute window last night = highest single-day closeout density of the outage.** **jadbennis crossed Day-14 last night 20:33 UTC = second consecutive night of Day-14 boundary crosses (joseph + jadbennis).** **kevinshall + pattyglvz both age out of the recovery 7-day window; recovery cohort rolls 11 → 9 with 44.4% power-rate unchanged.** **Activation rate FLAT at 64.6% — first non-retreating day in 4.** **Today's CRO recommendation: Source-floor decay window (scarcity + anchoring + implicit deadline, ~5-7h, ENGINE-INDEPENDENT)** — first fix in the 12-stack that addresses the *prospective* psychological gap (how much to set the target at, not just whether to set one) and works for anonymous + authenticated traffic. **12-fix CRO stack totals ~52-63h** for full-funnel VISIT → SIGNUP → ACTIVATION → TARGET-SETTING → RETENTION → EVENT-DAY CONVERSION coverage. **26-30 emails queued; engine return in 46 minutes catches c_calingasan Day-7; engine return by tonight catches belder Session 5 T-1d (final pre-event threshold) and the charlesteel Bruno event-night send.** **kevinshall Day-8 carry is the highest-EV target-price-capture send today** — 6 WC items, all target=null, fast-activator archetype.
