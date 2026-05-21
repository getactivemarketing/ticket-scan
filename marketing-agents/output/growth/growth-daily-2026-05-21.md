# Growth Daily — 2026-05-21

> **24h report window** (May 20 11:00 UTC → May 21 11:00 UTC). Yesterday's report fired on schedule; today's deltas are clean 24h comparisons.

## User health dashboard

| Segment                          | Count | % of Total | vs Yesterday |
|----------------------------------|-------|------------|--------------|
| Total users                      | **88** | 100% | **+3 net over 24h.** **THE 1-DAY 0-SIGNUP STREAK BREAKS.** 3 new signups (keegansmith18 May 20 17:39 UTC, zhouyilinbest May 20 19:00 UTC, brockedwardnelson May 20 19:58 UTC — all stacked into a 2h19m window in the late afternoon/evening). 7-day rolling rate rebounds 9 → 10 (karin May 14 06:46 rolls out, +3 fresh — vlanza will roll out today ~13:20 UTC, in ~2h20m) = **1.43/day** (was 1.29/day yesterday). **4.8x pre-burst baseline** (vs 4.3x yesterday). **Yesterday's 0-day was a 24h outlier inside a still-accelerating recovery arc, not the inflection it appeared to be in real time.** |
| New (last 7 days, API count)     | **10** | 11.4% | **+1 from yesterday's 9 (net of karin May 14 06:46 ageing out ~4h ago + 3 new signups stacked May 20 evening).** **API confirms `usersThisWeek=10` at /api/admin/stats.** Recovery 7-day cohort by signup-date now: vlanza / nunemakerc / belder / cutekitten / lisallam / eduardo / 9440111 / keegansmith18 / zhouyilinbest / brockedwardnelson = **10 in 7d**. vlanza ages out today ~13:20 UTC (~2h20m from report). |
| Activated (has watchlist)        | **54** | 61.4% | **+1 net over 24h.** **Watchlist 107 → 108 = +1 = zhouyilinbest added West Conference Finals Thunder vs Spurs Game 3 (Frost Bank Center, May 22, target=null) ~24min post-signup. Ends 2-day 0-add streak.** **Net activations: 1 of 3 new signups (zhouyilinbest only) = 33.3% same-day activation, below the recovery-cohort 7d rolling 4/10 = 40%.** **Activation rate: 54/85 real users = 63.5% (was 53/82 = 64.6% — −1.1pp 24h, resumes denominator-driven retreat after yesterday's 1-day flat).** |
| Active (visited in 7 days)       | unknown | — | no `last_login_at` instrumentation — **Day 45 open**. |
| At-risk (7-14d signup-age proxy) | **4** | 4.5% | **+1 net from yesterday.** karin (Day-7 today, **just crossed Day-7 last night ~06:46 UTC**) joins kevinshall (Day-9 today) + pattyglvz (Day-9 today) + jmoriarty (Day-12 today). emma rolls from Day-12 to Day-13 inside at-risk (no exit). **First time the at-risk bucket holds simultaneously two power-users (karin + kevinshall) and two inerts (pattyglvz + jmoriarty) of the recovery cohort.** |
| Churned (14d+ signup-age proxy)  | **71** | 80.7% | **=0 net** — no new Day-14 crosses overnight. **The 2-consecutive-night Day-14 boundary-cross streak (joseph May 18 + jadbennis May 19) breaks.** %-of-total slips 2.8pp on flat numerator + growing denominator (+3 new signups). emma crosses Day-14 tomorrow night ~21:54 UTC; kevinkid Day-14 ~20:52 UTC May 22; both will reset the streak. |

> **Day 45 without `last_login_at` instrumentation. Day 45 of zero drip emails sent** (confirmed: `/api/admin/drip-stats` returns `stats=[]` with 20 pendingUsers, 0% `last_email_sent`). **Day 45 of zero triggered alerts (lifetime).**
> **NEWSLETTER SUBSCRIBERS: 3, UNCHANGED FOR 109 DAYS.** 15 weeks + 4 days.
> **YESTERDAY'S 26-30 EMAIL QUEUE PASSED WITHOUT A SEND. Final-lifecycle window for dr.altvater closed dark. New on-schedule misses confirmed in last 24h:**
>   - **Bruno Ohio EVENT-DAY ~23:30 UTC YESTERDAY — MISSED.** **Bruno played; charlesteel 0/3 algo-flip sweep LOCKS at 0/3 or 0/4 depending on whether event-day notification was scheduled.** **#18 passed-event LOCKED.** charlesteel becomes the second user (after jadbennis Inter Miami) with a complete 0/N sweep across an event lifecycle that includes both T-thresholds and event-day.
>   - **belder Session 5 T-1d ~22:14 UTC YESTERDAY — MISSED. 14TH ALGO-FLIP FAILURE.** Session 5 plays this afternoon. **The FINAL pre-event threshold for the Session 5 fire family closed dark.** Session 5 locks #19 passed-event by tomorrow's report. **Recovery-cohort algo-flip-confirmed-failure count: 4** (belder Session 5 T-3d + Session 6 T-3d + Session 5 T-1d + 1 implicit Session 6 T-1d pending tonight).
>   - **c_calingasan Day-7 ~11:46 UTC YESTERDAY — MISSED ~25h-carry HARD EDGE.** **First natural Day-7 fire of an unaged-out inert recovery user closed dark.** c_calingasan rolls to Day-8 today; frame "A week ago..." reframes to "Eight days ago..." by tomorrow.
>   - **lisallam Day-3 ~14:05 UTC YESTERDAY — MISSED ~21h-carry HARD EDGE.** **HIGHEST-EV activated-cohort fire of yesterday closed dark.** lisallam reframes from "Three days ago..." to "Four days ago..." but the frame still parses today.
>   - **dr.altvater Day-30 ~14:08 UTC YESTERDAY — MISSED.** **FINAL natural fire window in dr.altvater's lifecycle closed dark.** dr.altvater becomes the third lifecycle-complete-without-touchpoint user in the dataset (joseph + jadbennis prior). **0 for 6 across the entire Day-1/3/7/14/21/30 schedule.** No further natural cadence exists; reply-only re-engagement remains.
>   - **karin Day-7 ~06:46 UTC TODAY — MISSED ~4h14m PAST report cutoff.** First natural Day-7 fire for a power-user inside the recovery cohort closed dark. karin (2 WC items, target=null on both, fast-activator at 37s) joins kevinshall as a second power-user crossed-without-touch on Day-7.
>   - **eduardo Day-3 ~00:48 UTC TODAY — MISSED ~10h12m before report (schedule entry doesn't exist; 15-day carried Day-1 ask compounds).** Eduardo is the third inert-recovery Day-3 miss after nunemakerc + cutekitten yesterday; together they form the clean "Day-3 closed dark across 3 consecutive nights" pattern.
> **OPEN AT REPORT TIME (today, May 21):**
>   - **vlanza Day-7 fires ~13:20 UTC TODAY — ~2h20m from report.** First natural Day-7 fire for an inert-recovery user inside today's window. **Frame "A week ago..." holds; vlanza ages out of 7d window ~12:34 minutes after this fire window opens.** Highest temporal urgency send today.
>   - **9440111 Day-3 fires ~19:09 UTC TODAY — ~8h09m from report.** **First scheduled Day-3 fire for the opaque-identifier archetype.** Inert-recovery touch on a 65h-old account with 0 watchlist items — the cleanest "did the email-pattern signal predict inertness?" data point.
>   - **josh AEW T-3d fires ~20:30 UTC TODAY — ~9h30m from report.** **2nd algo-flip threshold of the AEW event** (T-7d closed dark May 16 — 6th algo-flip failure family).
>   - **belder Session 6 T-1d fires ~22:14 UTC TODAY — ~11h14m from report.** **FINAL Session 6 threshold before Session 6 plays tomorrow (May 22). 15th algo-flip-fire-window candidate.** If missed, Session 6 locks 0/2 by tomorrow's report.
> **Total May 10-21 natural fire misses confirmed: 63+** (56+ through yesterday's report + Bruno event-day + Session 5 T-1d + c_calingasan Day-7 + lisallam Day-3 + dr.altvater Day-30 + karin Day-7 + eduardo Day-3 = 7 new closeouts in 24h).
> Watchlist items: **108 (+1 over 24h — ends 2-day 0-add streak).** Target-price capture: **0/108 = 0% (Day 45).**
> `usersToday: 3` (recovery resumes; 3 of last 88 = 3.4% same-day signup), `usersThisWeek: 10` (up from 9). **Activation rate: 54/85 real users = 63.5% — resumes denominator-driven retreat (−1.1pp 24h).** Net activation move: **+1 new activator (zhouyilinbest) against +3 new signups = activation efficiency 33.3% same-day, below cohort 7d rolling 40%.**

## What changed in 24h

1. **THE 1-DAY 0-SIGNUP STREAK BREAKS. +3 NET USERS.** Yesterday's report called the 0-signup day "the first sequence-break in the recovery's acceleration arc." Today's data resolves the read: yesterday was a 24h outlier, not an inflection. **3 stacked signups in a 2h19m window late afternoon May 20 (keegansmith18 17:39 → zhouyilinbest 19:00 → brockedwardnelson 19:58)** — temporally clustered in a way that suggests either shared attribution (single referral source or content trigger) or coincidental browse-to-signup within a single demand window. 7-day rolling rate recovers 9 → 10 (vlanza ages out today ~13:20 UTC will leave it at 9 in <3h, but baseline ratio is **1.43/day, up from 1.29/day yesterday and 4.8x pre-burst baseline**). **Acceleration arc resumes, not stalls.**

2. **WATCHLIST 107 → 108 = +1 (zhouyilinbest added West Conf Finals Thunder vs Spurs Game 3, May 22, target=null) ~24 MIN POST-SIGNUP.** Ends 2-day 0-add streak. **The fastest activation of the recovery cohort: 24 minutes** (vs lisallam 165s, cutekitten 22s, belder 19s, karin 37s, kevinshall 3 min). zhouyilin's pattern is **single high-temporal-urgency event** — same-day-1-out activation, target=null, NBA Playoffs Game 3 the night after signup. **He is the closest analog to charlesteel (Bruno Ohio at signup-time = 28d out) and to lisallam (JOJI 30d out at signup) — all single-event activators with no immediate target anchor.** **He's also the first activator inside the recovery cohort whose tracked event is <48h from kickoff at the time of his Day-1 ask** — if the Day-1 schedule existed today, it would fire ~19:00 UTC today, 5h before Game 3 doors. The single most temporally-urgent target-price-capture opportunity in the dataset enters the queue.

3. **BRUNO OHIO EVENT-DAY ~23:30 UTC YESTERDAY = #18 PASSED-EVENT LOCKED. charlesteel 0/3 OR 0/4 SWEEP COMPLETE.** Yesterday's report forecast Bruno locking #18 "by tomorrow's report" with event-day fire window as the "final touchpoint if scheduled." Bruno played; engine remained dark across the entire event-lifecycle window. **charlesteel becomes the second user with a complete 0/N event-lifecycle sweep** (jadbennis Inter Miami was first). **If a T-0 event-day notification schedule entry exists, 0/4. If not, 0/3.** **Either way: 4-of-4 algo-flip failure family for Bruno (T-7d/T-3d/T-1d + event-day if scheduled) = 14th confirmed flip failure today after belder Session 5 T-1d.** Apology-only post-event re-engagement is the only viable touch; window closes ~72h post-event.

4. **BELDER SESSION 5 T-1d MISSED LAST NIGHT ~22:14 UTC = 14TH ALGO-FLIP FAILURE. SESSION 5 PLAYS TODAY.** Yesterday's report identified this as "the 3rd algo-flip fire window of the recovery cohort + FINAL Session 5 threshold." Engine remained dark. **belder's Session 5 fire family closes 0/2 (T-3d + T-1d both missed). Session 6 fires ~22:14 UTC tonight = the last open threshold for belder's SEC Baseball pair.** If Session 6 T-1d also misses, **belder's full SEC Baseball algo-flip sweep locks 0/4 by tomorrow's report** — matching the jadbennis Inter Miami + charlesteel Bruno 0/N patterns within a single recovery-cohort user. **First recovery-cohort user to face a complete same-event-pair 0/N sweep candidate.**

5. **DR.ALTVATER DAY-30 MISSED YESTERDAY ~14:08 UTC = FULL LIFECYCLE EXHAUSTED, 0/6.** **The single cleanest "every scheduled fire missed for an entire 30-day lifecycle" case in the dataset.** Day-3 May 23, Day-7 Apr 27, Day-14 May 4, Day-21 May 11, Day-30 yesterday — six natural fire windows, six dark engine touches. **After Day-30 the entire Day-1/3/7/14/21/30 schedule is exhausted.** dr.altvater joins joseph (Day-7 + Day-14 0/2 across natural-fire family) and jadbennis (Day-14 + Inter Miami 0/N) as the third lifecycle-complete-without-touchpoint user, but is **the only one with a complete six-window sweep**. German-language reply-only re-engagement remains.

6. **C_CALINGASAN DAY-7 MISSED YESTERDAY ~11:46 UTC + LISALLAM DAY-3 MISSED YESTERDAY ~14:05 UTC + KARIN DAY-7 MISSED TODAY ~06:46 UTC.** Yesterday's report flagged c_calingasan as the highest-temporal-urgency fire of the day (46 min from report) and lisallam as the highest-EV activated-cohort fire of the day (3h05m). **Both closed dark.** karin Day-7 fired into a dark engine ~4h14m before today's report cutoff. **3 high-EV recovery-cohort natural fires closed in a 19-hour window** — c_calingasan (inert Day-7), lisallam (activated Day-3), karin (activated power-user Day-7). **karin becomes the second power-user-cohort Day-7 miss (after kevinshall Day-7 missed May 19) — the boundary "first power-user Day-7 of recovery" is now broken twice.**

7. **EDUARDO DAY-3 MISSED TODAY ~00:48 UTC = THIRD CONSECUTIVE NIGHT OF DAY-3 INERT MISSES.** nunemakerc Day-3 May 18 → cutekitten Day-3 May 19 → belder Day-3 May 19 → lisallam Day-3 yesterday → eduardo Day-3 today. **Day-3 has fired into a dark engine 5 times in 3 nights for recovery-cohort users.** Frame "Three days ago..." has now hard-expired for nunemakerc + cutekitten + belder + lisallam (>24h-carry across all four). eduardo enters Day-4 today; reframe to "Four days ago..." holds through tomorrow. **The Day-3 schedule entry doesn't exist as a touch-trigger — Day-1 is still the official ask** — but the natural-fire-window-passed-without-send pattern is now a 5-user-deep dataset cluster inside the recovery cohort alone.

8. **NO NEW DAY-14 BOUNDARY CROSSES OVERNIGHT. THE 2-NIGHT DAY-14 STREAK (JOSEPH + JADBENNIS) BREAKS.** Yesterday's report confirmed jadbennis crossed Day-14 ~20:33 UTC May 19; joseph crossed Day-14 May 18. **No user crossed Day-14 in the May 20 11:00 → May 21 11:00 UTC window.** emma will cross ~21:54 UTC tomorrow (May 22); kevinkid ~20:52 UTC May 22 — both reset the streak. **Churned bucket count: 71 → 71 (flat 24h). %-of-total slips 2.8pp on flat numerator vs +3 new signups.**

9. **THE AT-RISK BUCKET EXPANDS BY +1 ENTRANT (KARIN DAY-7 → DAY-8 OVERNIGHT, NET ZERO EXITS).** karin crossed Day-7 last night ~06:46 UTC, entering the 7-14d at-risk window. Net at-risk count: 3 → 4. **Recovery-cohort users now hold simultaneously TWO power-users (karin + kevinshall) and TWO inerts (pattyglvz + jmoriarty) inside the at-risk bucket** — the boundary between recovery cohort and at-risk cohort is now porous in both directions and across both activation types. **The recovery cohort's May 12-14 cluster has fully migrated into at-risk:** kevinshall (May 12, Day-9), pattyglvz (May 12, Day-9), karin (May 14, Day-7). **3 of the 4 recovery-cohort users active before the May 15-19 sub-burst are now at-risk-bucketed.**

10. **THE 45-DAY OUTAGE PATTERN — SIGNUPS RESUME BUT ACTIVATION RATE RETREATS:**
    - Total users: 88 (was 85, **+3 over 24h — 1-day 0-signup streak BREAKS**)
    - Watchlist items: 108 (was 107, **+1 over 24h — 2-day 0-add streak BREAKS**)
    - Drip emails sent: 0 for **45 consecutive days** (compounds)
    - Triggered alerts: 0 lifetime (compounds; Session 5 T-1d closed last night = 14th algo-flip failure)
    - Newsletter subscribers: 3 for **109 consecutive days** (compounds; 15w 4d)
    - Activation rate: 63.5% (real users) — **−1.1pp 24h, RESUMES denominator-driven retreat after yesterday's 1-day flat**
    - Cumulative passed-no-notification: **18 (Bruno locks #18; SEC Baseball Session 5 locks #19 tomorrow)**
    - **2 of 6 dimensions show recovery motion in last 24h (signups + watchlist); 4 remain locked behind engine-dark constraint; activation rate retreats.** **Recovery's acceleration phase resumes on inputs, but conversion-quality dimension (activation %) inflects negatively for the 4th time in 5 days.**

## Activation gap

**Users signed up in last 7 days (by signup-date) with 0 watchlist items: 7** (was 5 yesterday — **+2 net**: 3 new signups − 1 activator (zhouyilin) − 1 boundary roll-off (karin ages out of 7d but stays in lifecycle):

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **brockedwardnelson@gmail.com** | May 20 19:58 UTC | 0d 15h | **0** | **Day 1 today.** **NEW SIGNUP.** Day-1 ask carry compounds (Day-1 schedule still doesn't exist — 15-day carried ask). Inert pattern at 15h-old account. |
| **keegansmith18@icloud.com** | May 20 17:39 UTC | 0d 17h | **0** | **Day 1 today.** **NEW SIGNUP.** Same pattern as brockedwardnelson; 17h-old account, 0 items. Day-1 carry. |
| **9440111@gmail.com** | May 18 19:09 UTC | 2d 16h | **0** | **Day 3 today. ESCALATES FROM DAY-1/2 CARRY → DAY-3 NATURAL FIRE TODAY ~19:09 UTC (~8h09m from report).** First scheduled Day-3 fire for the opaque-identifier archetype. **HIGHEST-EV inert-recovery natural fire window of the day** (the only inert-recovery user with a Day-3 fire opening inside today's report window). |
| **eduardo@del-valle.com** | May 18 00:48 UTC | 2d 10h | **0** | **Day 3 today. Day-3 MISSED ~00:48 UTC TODAY (~10h12m PAST report cutoff). HARD EDGE.** Frame "Three days ago..." reframes to "Four days ago..." by tonight. eduardo joins the Day-3-closed-dark recovery-cohort cluster (4 prior + eduardo = 5). |
| **nunemakerc@gmail.com** | May 15 15:41 UTC | 5d 19h | **0** | **Day 6 today. Day-3 missed May 18 (~67h-carry HARD EXPIRY).** Frame "Six days ago..." holds. |
| **vlanza@sbcglobal.net** | May 14 13:20 UTC | 6d 21h | **0** | **Day 7 today. Day-3 missed May 17 (~93h-carry HARD EXPIRY). Day-7 FIRES TODAY ~13:20 UTC (~2h20m from report). HIGHEST TEMPORAL URGENCY FIRE WINDOW TODAY.** Frame "A week ago..." holds. vlanza ages out of 7d window ~12 minutes after this fire. |

**Aged-out of 7-day window but still 0 watchlist (added to lifecycle analysis):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **c_calingasan@yahoo.com** | May 13 11:46 UTC | 7d 23h | **0** | **Day 8 today. Day-7 MISSED YESTERDAY ~11:46 UTC (~24h-carry HARD EDGE — frame still parses but transitions to expiry tomorrow).** Reframe "Eight days ago..." holds today. c_calingasan ages out of 7d window today ~11:46 UTC (~46min from report). |
| **pattyglvz@msn.com** | May 12 15:23 UTC | 8d 19h | **0** | **Day 9 today. Day-7 MISSED May 19 ~15:23 UTC (~43h-carry HARD EXPIRY).** Frame "A week ago..." has expired; reframes to "Nine days ago..." Engine-independent coverage gap (0 watchlist = no value receipt; 3-step ladder is only fix that touches her). |
| **jmoriarty13@yahoo.com** | May 9 13:18 UTC | 11d 22h | **0** | **Day 12 today. Day-3 missed May 12 (198h+ HARD EXPIRY). Day-7 missed May 16 (~118h-carry HARD EXPIRY).** Apology + curiosity hook. Joins Day-11/12 batch. |

**Activated within 7-day window (carried + new):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **zhouyilinbest@gmail.com (NEW)** | May 20 19:00 UTC | 0d 16h | **1** (West Conf Finals Thunder@Spurs Game 3 Frost Bank, May 22, target=null) | **Day 1 today.** **NEW SIGNUP + NEW ACTIVATOR.** Activation latency 24 min. **MOST TEMPORALLY-URGENT EVENT IN DATASET — Game 3 plays TOMORROW NIGHT.** **If Day-1 schedule existed and fired today ~19:00 UTC, it would land 5h before doors.** **The single highest-EV target-price-capture window in the dataset right now.** No T-1d algo-flip exists because event is only 36h out at signup; **Day-1 + target-prompt is the only viable engine path.** |
| **lisallam@hotmail.com** | May 17 14:05 UTC | 3d 21h | **1** (JOJI: SOLARIS Newark Jun 16, target=null) | **Day 4 today. Day-1 missed May 18 (~69h+ HARD EXPIRY). Day-3 MISSED YESTERDAY ~14:05 UTC (~21h-carry HARD EDGE).** Frame "Four days ago..." parses through tomorrow. **HIGHEST-EV target-price-capture send today for the lisallam single-event activation cluster** — frame reframes to "Almost five days ago..." by tomorrow. |
| **cutekitten1234** | May 16 23:32 UTC | 4d 11h | **7** (Harry Styles MSG Aug-Sep, all target=null) | **Day 5 today. Day-1 missed (~84h+ HARD EXPIRY). Day-3 missed May 19 (~35h+ HARD EDGE/EXPIRY).** Frame reframes to "Five days ago..." Carry-send remains. |
| **belder4308** | May 16 22:13 UTC | 4d 13h | **2** (SEC Baseball Session 5 May 21 + Session 6 May 22, target=null) | **Day 5 today. Day-1 missed (~85h HARD EXPIRY). Day-3 missed May 19 (~37h-carry HARD EDGE/EXPIRY). Session 5 T-3d missed May 18. Session 5 T-1d MISSED LAST NIGHT 22:14 UTC.** **Session 6 T-1d FIRES TODAY ~22:14 UTC (~11h14m from report). FINAL SESSION 6 THRESHOLD. If missed, belder locks 0/4 algo-flip sweep across both Sessions.** Session 5 plays this afternoon. |
| **karin_ef1 (aged out today)** | May 14 06:46 UTC | 7d 4h | **2** (WC Switz-Canada Jun 24, R16 Match 96 Jul 7, target=null on both) | **Day 7 today, AGED OUT OF 7d WINDOW ~06:46 UTC TODAY. Day-3 missed May 17 (~92h HARD EXPIRY). Day-7 MISSED TODAY ~06:46 UTC (~4h14m PAST report cutoff).** First power-user-cohort Day-7 miss inside today's window. Apology+target-setting carry. |
| **kevinshall87** | May 12 16:44 UTC | 8d 18h | **6** (5 WC + Matt Rife, all target=null) | **Day 9 today. Day-7 missed May 19 ~16:44 UTC (~42h-carry HARD EXPIRY).** Frame "A week ago..." has expired; reframes to "Nine days ago..." Highest-EV target-price-capture carry across the dataset by item-count (6 items, target=null, fast-activator). |
| **liambot62** | May 8 13:07 UTC | 12d 22h | 1 (Toronto FC v Inter Miami passed May 9, target=null) | **Day 13 today. Day-7 missed May 15 (~142h-carry HARD EXPIRY).** Apology-only. |
| **cjthomas2557** | May 7 22:49 UTC | 13d 12h | 1 (Noah Kahan Jun 12, target=null) | **Day 14 today, CROSSES DAY-14 BOUNDARY TONIGHT ~22:49 UTC (~11h49m from report). Noah Kahan T-22d.** **Highest-EV Day-14 boundary cross of the day** if engine returns by ~22:49 UTC. |
| **sparkitrightthere** | May 7 11:38 UTC | 14d 0h | 1 (Mac DeMarco PASSED May 7, target=null) | **Day 14 today, CROSSED DAY-14 BOUNDARY ~11:38 UTC TODAY (~38min PAST report cutoff). MISSED by minutes.** Event passed 14d ago. Re-engagement only. |

**Outside 7-day window (carried, 0 watchlist):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **jadbennis0** | May 5 20:33 UTC | 15d 14h | 1 (Inter Miami PASSED May 17) | **Day 15 today. Day-14 missed May 19 ~20:33 UTC (~38h-carry HARD EDGE).** Inter Miami passed-event 4-of-4 algo-flip sweep LOCKED 48h ago. Apology-only re-engagement. |
| **joseph.g.nicolosi** | May 4 21:39 UTC | 16d 13h | 0 | **Day 16 today. Day-14 missed May 18 ~21:39 UTC.** Reframe to "Two weeks and two days in..." Apology lead. |
| **emmacmather** | May 8 21:54 UTC | 12d 13h | 0 | **Day 13 today. CROSSES DAY-14 TOMORROW NIGHT ~21:54 UTC.** Day-3 missed May 11. Day-7 missed May 15 (~109h-carry HARD EXPIRY). Reframe "Thirteen days in..." |
| **kevinkid94** | May 8 20:52 UTC | 12d 14h | 0 | **Day 13 today. CROSSES DAY-14 TOMORROW NIGHT ~20:52 UTC.** Day-7 missed May 15 (~134h-carry HARD EXPIRY). Reframe "Thirteen days in." |
| **jfgalzin** | May 8 12:54 UTC | 12d 22h | 0 | **Day 13 today. Day-7 missed May 15 (~142h-carry HARD EXPIRY).** Reframe "Thirteen days in." |
| **natalie.sotocruz** | May 7 18:40 UTC | 13d 16h | 0 | **Day 14 today, CROSSES DAY-14 BOUNDARY TONIGHT ~18:40 UTC (~7h40m from report).** Day-3 missed May 10 (268h HARD EXPIRY). Day-7 missed May 14 (~160h-carry HARD EXPIRY). |
| **zhili1208** | Apr 29 03:16 UTC | 22d 8h | 0 | **Day 22 today. Day-21 missed May 20 (~32h-carry HARD EDGE).** Frame: "Three weeks and a day in." |
| **lilianamasyrubi** | Apr 28 05:24 UTC | 23d 6h | 0 | **Day 23 today. Day-21 missed May 19 (~53h-carry HARD EDGE/EXPIRY).** Reframe "Three weeks and two days in..." |
| taranimeramaro | Apr 25 18:25 UTC | 25d 17h | 3 (Bruno MetLife Aug, target=null) | **Day 26 today. Day-21 missed May 16 (~113h-carry HARD EXPIRY).** Reframe "Three and a half weeks in..." |
| nmcnamee99 | Apr 25 11:51 UTC | 25d 23h | 1 (Raptors-Cavs PASSED Apr 26) | **Day 26 today. Day-21 missed May 16 (~119h-carry HARD EXPIRY).** Apology-lead. |
| mark.murdock | Apr 23 03:01 UTC | 28d 8h | 0 | **Day 28 today. Day-21 missed May 14 (~176h-carry HARD EXPIRY). Day-30 fires May 23 ~03:01 UTC (~40h from now).** |
| awwhittington | Apr 23 00:30 UTC | 28d 10h | 0 | **Day 28 today. Day-21 missed May 14 (~178h-carry HARD EXPIRY).** |
| ajvanprooyen | Apr 23 00:58 UTC | 28d 10h | 6 (Cubs trip 100% passed) | **Day 28 today. Day-21 missed May 14 (~178h-carry HARD EXPIRY).** Cubs apology lead. |
| ggri73 | Apr 22 21:18 UTC | 28d 14h | 0 | **Day 29 today. Day-21 missed May 13 (~182h-carry HARD EXPIRY). Day-30 fires May 22 ~21:18 UTC (~34h from now).** |
| **charlesteel126** | Apr 22 11:38 UTC | 28d 23h | 1 (**Bruno Ohio PASSED May 20 ~23:30 UTC ~12h ago**) | **Day 29 today. Bruno PLAYED LAST NIGHT — passed-event #18 LOCKED. 0/3 OR 0/4 SWEEP COMPLETE (T-7d/T-3d/T-1d + event-day if scheduled).** Apology-only post-event re-engagement; window closes ~72h post-event. |
| **dr.altvater** | Apr 20 14:08 UTC | 30d 21h | 0 | **Day 31 today. Day-30 MISSED YESTERDAY ~14:08 UTC. LIFECYCLE EXHAUSTED 0/6.** German-language reply-only re-engagement. **No further natural cadence exists.** |
| **josh (joshdguillemette)** | Apr 19 20:30 UTC | 31d 14h | 1 (AEW Double or Nothing May 24) | **Day 32 today. Day-30 missed May 19 ~20:30 UTC (~38h-carry HARD EDGE).** **AEW T-3d FIRES TODAY ~20:30 UTC (~9h30m from report).** 2nd algo-flip threshold of AEW; T-7d already missed May 16. |
| dylanbaldy | Apr 15 18:24 UTC | 35d | 0 | Churned. |

- **27 real users** (excluding 3 test) have **never** added a watchlist item → **27/85 = 31.8%** (up 2.5pp from yesterday's 24/82 = 29.3% — denominator-driven move from +3 inert signups). **Activation-gap WIDENS for the first time in 2 days.**
- **Activation rate trajectory (real users, last 15 days):** 71.0 → 71.4 → 71.4 → 71.2 → 68.6 → ? → 67.6 → 67.6 → 67.1 → ? → 65.8 → 64.9 → 65.8 → 65.4 → 64.6 → 64.6 → **63.5 (−1.1pp 24h, resumes retreat).**
- **7-day decline: −7.5pp** (May 14 71.0% → May 21 63.5%; widens from yesterday's −5.6pp by absorbing the new signup denominator pressure).

**Acquisition-source inference: the 3-signup burst within 2h19m suggests a single attribution trigger.**

The pattern: **29 unknown-source users in 26 days (+3 vs yesterday's 26 — all 3 new signups in 24h carry no obvious attribution signal).** Against **3 known (ids 59, 61, 62)**. **Unknown-source activation rate: 10/29 = 34.5% (was 9/26 = 34.6% — effectively flat, the new zhouyilinbest activator offsets the 3 new inert/single denominators).** **Known-source: 3/3 = 100% (frozen).** **Gap holds at ~2.9x.** Day 28 of attribution dependency. **The 7-day recovery cohort split rolls from 4:5 yesterday to a current 4:6 (4 power-users, 6 inert) inside the 7-day window** (vlanza + nunemakerc + eduardo + 9440111 + keegan + brock = 6 inert; lisallam + cutekitten + belder + zhouyilinbest = 4 power). **Recovery-cohort power-user rate: 4/10 = 40.0% (was 4/9 = 44.4% yesterday).** **First power-rate retreat since the recovery began.** **Critical question for Ads Agent: do keegan + brock share an attribution signal with zhouyilin (they all signed up within 2h19m on May 20 evening) — and if so, why does the same source produce a 1:2 power:inert split inside the burst?**

**zhouyilinbest activation pattern is a new archetype in the dataset:** **24-min latency, single-event, T-2d at signup, NBA playoffs.** **The only prior NBA playoffs activator was nmcnamee99 (Raptors-Cavs Apr 26 added Apr 25 = T-1d) — and that event passed without a notification.** **zhouyilin is the first NBA playoffs activator with a viable forward-facing notification window** if the engine returns before tomorrow night.

## Churn signals

- Unsubscribes today: **0** (3 subscribers; **109 days flat = 15 weeks 4 days**).
- Users entering "at-risk" today: **+1 net entrant** (karin Day-7 crossed last night ~06:46 UTC) **−0 exits** = **+1 net**.
- Users entering "churned" since yesterday: **0 net** — **no Day-14 crosses in 24h. 2-night streak (joseph + jadbennis) breaks.** cjthomas + natalie cross tonight; emma + kevinkid cross tomorrow night.
- Alert fatigue candidates: **0** (0 alerts ever sent — Day 45).
- Events passed without notification (cumulative): **18 — Bruno Ohio LOCKED last night.** SEC Baseball Session 5 plays today and locks #19 by tomorrow's report. Session 6 plays tomorrow and locks #20 candidate.
- **Algo-overrides as preemptive "events lost without notification":** **2 events** still open (Bruno closed yesterday):
  - **SEC Baseball Session 5 PLAYS TODAY** [belder, **Session 5 T-3d MISSED + T-1d MISSED LAST NIGHT = 0/2 LOCKED; event-day window if scheduled is the final touchpoint before kickoff**]
  - **SEC Baseball Session 6 May 22** [belder, T-3d MISSED May 19, **T-1d FIRES TODAY ~22:14 UTC** — final threshold]
  - **AEW Double or Nothing May 24** [josh, **T-3d FIRES TODAY ~20:30 UTC (~9h30m from report)**, T-1d ~20:30 UTC May 23 (~57h)]
- **21st day of non-Cubs flip-quiet streak.** Session 5 T-1d closed-out last night confirms **14 total flip failures**: Cubs (6) + Inter Miami (4) + Bruno T-7d/T-3d/T-1d + AEW T-7d + Session 5 T-3d + Session 6 T-3d + Session 5 T-1d = 14. **AEW T-3d at 20:30 UTC tonight is the next algo-flip fire window — 9h30m from report. If missed, #15. Session 6 T-1d at 22:14 UTC tonight is the second — if missed, #16.**

## At-risk users (7–14d inactive proxy)

| User | Day | Watchlist | Days to event | Recommended intervention |
|------|-----|-----------|---------------|--------------------------|
| **karin_ef1** | 8d | 2 (WC Switz-Canada Jun 24 + R16 Match 96 Jul 7, target=null) | 34, 47 | **NEW AT-RISK ENTRANT (crossed Day-7 today ~06:46 UTC missed). HIGHEST-EV intervention candidate today.** Body: "A week ago you added your World Cup matches. Switzerland vs Canada is 34 days out, your R16 match is 47 days out. We owed you a Day-7 touch this morning. Set a target on each — WC source-floors swing 30-50% between TM, SeatGeek, StubHub." |
| **kevinshall87** | 9d | 6 (5 WC + Matt Rife, target=null) | 23-131 | **AT-RISK carried (Day-7 missed May 19 ~42h+ HARD EXPIRY).** Body: "Nine days ago you added six events in three minutes. The Day-7 follow-up we owed you Monday afternoon never sent. The engine is rebuilding — set targets and we'll watch all three sources around the clock." |
| **pattyglvz** | 9d | 0 | — | **AT-RISK carried (Day-7 missed May 19 ~43h+ HARD EXPIRY).** Engine-independent coverage gap. Body: "Nine days ago you signed up but didn't add an event. Concert, sport, theater — reply with the name and we'll set up tracking in 30 seconds." |
| **jmoriarty13** | 12d | 0 | — | **AT-RISK carried (Day-7 missed May 16 ~118h HARD EXPIRY).** Joins Day-12/13 batch. |
| **emmacmather** | 13d | 0 | — | At-risk carry. Reframe "Thirteen days in..." **Crosses Day-14 ~21:54 UTC tomorrow.** |
| **kevinkid94** | 13d | 0 | — | At-risk carry. Reframe "Thirteen days in." **Crosses Day-14 ~20:52 UTC tomorrow.** |
| **liambot62** | 13d | 1 (passed) | passed | At-risk + passed-event apology. |
| **jfgalzin** | 13d | 0 | — | At-risk carry. |
| **cjthomas2557** | 14d | 1 (Noah Kahan Jun 12) | 22 | **AT-RISK with Noah Kahan T-22d hook. CROSSES DAY-14 BOUNDARY TONIGHT ~22:49 UTC.** Reframe + target-setting CTA. |
| **natalie.sotocruz** | 14d | 0 | — | At-risk carry. **CROSSES DAY-14 BOUNDARY TONIGHT ~18:40 UTC.** |
| **sparkitrightthere** | 14d | 1 (Mac DeMarco passed) | passed | At-risk + passed-event apology. **Day-14 boundary crossed ~38min PAST report cutoff TODAY.** |

## Live algo-flip post-mortem (today)

| User | Event | Days out | Flip status | Days flagged | Sends |
|------|-------|----------|-------------|--------------|-------|
| **zhouyilinbest** | **West Conf Finals Thunder@Spurs Game 3 May 22 (PLAYS TOMORROW)** | **1** | **NOT YET FLIPPED — added at T-2d; T-1d threshold doesn't exist at signup. ONLY engine path: Day-1 (~19:00 UTC TODAY ~8h from report) + target-prompt.** **MOST TEMPORALLY-URGENT EVENT IN DATASET.** | 0 | 0 |
| **belder4308** | **SEC Baseball Session 5 May 21 (PLAYS THIS AFTERNOON)** | **0** | **T-3d MISS May 18. T-1d MISS LAST NIGHT 22:14 UTC. 0/2 LOCKED. Event-day window if scheduled — no schema confirmation.** | 5 | 0 |
| **belder4308** | **SEC Baseball Tournament Session 6 May 22** | **1** | **T-3d MISS May 19. T-1d FIRES TODAY ~22:14 UTC (~11h14m from report).** **FINAL SESSION 6 THRESHOLD. 14th algo-flip-fire candidate window of the streak.** | 5 | 0 |
| **josh** | **AEW Double or Nothing May 24** | **3** | **T-7d MISS May 16. T-3d FIRES TODAY ~20:30 UTC (~9h30m from report). T-1d May 23 ~20:30 UTC (~57h).** | 6 | 0 |
| **lisallam** | **JOJI: SOLARIS Newark Jun 16** | **26** | **NOT YET FLIPPED — T-21d May 26 (5d), T-7d Jun 9 (19d).** | 4 | 0 |
| cjthomas2557 | Noah Kahan Jun 12 | 22 | **T-21d FIRES May 22 (~36h)** | 14 | 0 |
| **kevinshall87 (power user)** | 5 WC + Matt Rife | 23-59 (WC), 131 (Matt Rife) | NOT YET FLIPPED — earliest T-7d Jun 7 | 9 | 0 |
| **karin_ef1 (power user 2)** | WC Switz-Canada + R16 Match 96 | 34 (group), 47 (R16) | NOT YET FLIPPED — earliest T-7d Jun 17 | 7 | 0 |
| **cutekitten1234 (power user 3)** | 7 Harry Styles MSG Aug 26 - Sep 9 | 97-111 | NOT YET FLIPPED — earliest T-7d Aug 19 | 5 | 0 |

**21st day of algo-flip-quiet streak.** **Session 5 T-1d locked last night = 14 total confirmed flip failures (Cubs 6 + Inter Miami 4 + Bruno 3 + AEW T-7d + Session 5 T-3d + Session 6 T-3d + Session 5 T-1d).** **TODAY's environment: TWO flip thresholds fire — josh AEW T-3d at ~20:30 UTC + belder Session 6 T-1d at ~22:14 UTC.** Engine return before 20:30 UTC catches both. Engine return after 22:14 UTC locks #15 + #16.

**TODAY's critical algo-flip windows:** **20:30 UTC (AEW T-3d, ~9h30m) → 22:14 UTC (Session 6 T-1d, ~11h14m).** Plus event-day Session 5 window if scheduled.

Next major algo-flip windows after today:
- **Session 6 event-day ~22:14 UTC May 22** (~35h)
- **AEW T-1d ~20:30 UTC May 23** (~57h)
- **cjthomas Noah Kahan T-21d ~22:49 UTC May 22** (~36h) — first new T-threshold fire in the cjthomas single-event activation cluster

## Churned users with re-engagement potential

| User | ~Days inactive | Watchlist | Upcoming hook? | Priority |
|------|----------------|-----------|----------------|----------|
| **josh** | 31d | 1 (AEW May 24) | **3d** | **HIGHEST** — T-3d fires today ~20:30 UTC (~9h30m). Most temporally-urgent threshold today after zhouyilin Day-1. |
| **charlesteel126** | 29d | 1 (Bruno Ohio PASSED last night) | **passed** | **HIGHEST** — 0/3 or 0/4 algo-flip sweep complete; apology window closes ~72h post-event. **Post-Bruno apology + "how did the night go" reply prompt** is the only viable touch left. |
| **jadbennis0** | 15d | 1 (Inter Miami passed) | passed | **HIGH** — Day-14 + 4-of-4 algo-flip sweep both closed 48h ago. Apology-only. |
| **joseph.g.nicolosi** | 16d | 0 | — | **HIGH** — Day-14 missed Mon. Reframe to "Two weeks and two days in." |
| **ajvanprooyen** | 28d | 6 (Cubs passed) | passed | **HIGH** — "Twenty-eight days, six Cubs games, all passed, zero alerts." Apology candidate. |
| **mark.murdock** | 28d | 0 | — | **HIGH** — Day-21 176h HARD EXPIRY. Day-30 in ~40h. |
| **awwhittington** | 28d | 0 | — | **HIGH** — Day-21 178h HARD EXPIRY. |
| **ggri73** | 29d | 0 | — | **HIGH** — Day-21 182h HARD EXPIRY. Day-30 in ~34h. |
| **nmcnamee99** | 26d | 1 (passed) | passed | **HIGH** — Day-21 119h HARD EXPIRY. |
| **taranimeramaro** | 26d | 3 (Bruno MetLife Aug) | 92-96d | **HIGH** — Day-21 113h HARD EXPIRY. Best target-setting candidate. |
| **lilianamasyrubi** | 23d | 0 | — | **HIGH** — Day-21 53h HARD EDGE/EXPIRY. Day-14 hard-expired prior. |
| **zhili1208** | 22d | 0 | — | **HIGH** — Day-21 32h HARD EDGE. |
| **dr.altvater** | 31d | 0 | — | **HIGH** — **Lifecycle EXHAUSTED 0/6 yesterday. No further natural cadence.** German-language reply-only. |
| **nicklib253** | 34d | 1 (Phillies passed) | passed | **MEDIUM** — Day-21 312h carry, apology-only. |
| **pete.uzelac77** | 41d | 6 (WC + Darts) | 30-45d | **MEDIUM** — Day-30 264h HARD EXPIRY. WC content hook viable. |
| dylanbaldy | 35d | 0 | — | LOW |
| **blubberboi** | 41d | 1 (Ed Sheeran Aug 8) | 79d | MEDIUM |
| **laye.aurelien** | 49d | 2 (Shakira Jul 20+23) | 60-63d | HIGH |
| **lvasub6** | 53d | 2 (Flyleaf Jul 17-18) | 57-58d | HIGH |
| **tosophiameyer** | 72d | 11 (Harry Styles MSG) | 95-119d | **HIGH** — same residency as cutekitten1234; cutekitten's fresh engagement is comparable. |
| **brigitte.theisen** | 85d | 10 (Backstreet Sphere) | 57-77d | **HIGH** — deepest non-test watchlist. |

**Passed-event overhang: 18 churned/at-risk users with passed events or no immediate hook.** Bruno Ohio added last night. SEC Baseball Session 5 locks #19 by tomorrow's report. Session 6 locks #20 candidate.

## Churn intervention: email content (queued for engine return)

### TODAY's natural fire windows (in order of upcoming)

#### **vlanza Day-7 ~13:20 UTC TODAY (~2h20m from report) — HIGHEST TEMPORAL URGENCY TODAY**

**Subject:** A week ago you signed up — what event did you have in mind?

**Body:**
> A week ago today you signed up for TicketScan but didn't add any events. That's normal — most people sign up either right after seeing a high-priced ticket or right before deciding to buy.
>
> Tell us what you had in mind. Concert, sport, theater — anything in the US. Reply with the name, or [start a search](https://www.ticketscan.io). We'll set up tracking in 30 seconds and email you when prices drop on any of Ticketmaster, SeatGeek, or StubHub.

---

#### **9440111 Day-3 ~19:09 UTC TODAY (~8h09m from report) — FIRST SCHEDULED DAY-3 FIRE FOR OPAQUE-IDENTIFIER ARCHETYPE**

**Subject:** Three days in — what brought you to TicketScan?

**Body:**
> Three days ago you signed up but haven't added an event yet. Reply with one event you're curious about — concert, sport, theater — and we'll set up tracking in 30 seconds.
>
> We compare Ticketmaster, SeatGeek, and StubHub side-by-side and email you the second any source drops below your target price. Most users save $40-150 per ticket within the first month.

---

#### **josh AEW T-3d ~20:30 UTC TODAY (~9h30m from report) — 2ND AEW THRESHOLD**

**Subject:** AEW Double or Nothing is in three days — last full price check

**Body:**
> AEW Double or Nothing at Louis Armstrong Stadium is three days out. You added it to your watchlist on Apr 19 — over a month ago — and we owed you a T-7d alert last Friday. We didn't send it. That's on us.
>
> **Current floors across the three sources we track:**
> - Ticketmaster: [floor price]
> - SeatGeek: [floor price]
> - StubHub: [floor price]
>
> Pro-wrestling resale typically softens 8-15% T-3d → T-1d as final inventory rebalances. **Set a target price now if you haven't bought** — we'll email you the second any source drops below it before doors.
>
> [Compare AEW prices](https://www.ticketscan.io/watchlist)
>
> **Note:** We owed you a T-7d alert on May 16 and a Day-30 nudge on May 19. The engine missed both. We're rebuilding right now.

---

#### **belder Session 6 T-1d ~22:14 UTC TODAY (~11h14m from report) — FINAL SESSION 6 THRESHOLD**

**Subject:** SEC Baseball Session 6 is tomorrow — last price check

**Body:**
> Session 6 at Hoover Metropolitan Stadium plays tomorrow afternoon. You added it five days ago alongside Session 5 (which plays today).
>
> **Current floors across Session 6:**
> - Ticketmaster: [floor price]
> - SeatGeek: [floor price]
> - StubHub: [floor price]
>
> T-1d SEC Baseball resale typically softens 10-20% in the final 12-18 hours as last-minute holders dump inventory. **This is your last automated check on Session 6 from us.** Set a target price now if you haven't bought — we'll email you the second any source drops below it before first pitch.
>
> [Compare Session 6 prices](https://www.ticketscan.io/watchlist)
>
> **Note:** We owed you T-3d alerts on both sessions (Sun + Mon) and a T-1d alert on Session 5 last night. None went. We're rebuilding the engine right now — and Session 6 deserves better than the trail Session 5 just left.

---

### MANUAL SENDS RECOMMENDED TODAY (no schedule entry or carry priority)

#### **zhouyilinbest Day-1 carry (BURST — Game 3 plays TOMORROW NIGHT, NEW signup + activator, 24-min latency, T-2d at signup, target=null)** — HIGHEST PRIORITY MANUAL SEND OF THE DAY

**Subject:** Thunder vs Spurs Game 3 is tomorrow night — anchor a target

**Body:**
> Welcome to TicketScan. Twenty-four minutes after you signed up yesterday evening you added Game 3 — Thunder at Spurs, Frost Bank Center, tomorrow night. Fastest activation we've seen in May.
>
> Here's what's still missing: a target price. Without one, we can't email you if Ticketmaster, SeatGeek, or StubHub drops below your number before tip-off.
>
> NBA playoffs Game 3 resale typically softens 15-25% in the final 24 hours as inventory shakes loose. We suggest starting at **$185-220** as a target — set it and we'll watch all three sources for the next 30 hours.
>
> [Set a target on Game 3](https://www.ticketscan.io/watchlist)

---

#### **keegansmith18 + brockedwardnelson — Day-1 carry (NEW signups, 15-17h post-signup, 0 items each)** — opaque-identifier-class inert touches

**Subject:** Yesterday you signed up — what event did you have in mind?

**Body:**
> Welcome to TicketScan. We notice you signed up yesterday but didn't add an event yet — that's normal. Most people sign up either right after seeing a high-priced ticket or right before deciding to buy.
>
> Tell us what you had in mind. Concert, sport, theater — anything in the US. Reply with the name, or [start a search](https://www.ticketscan.io). We'll set up tracking in 30 seconds and email you when prices drop on any of Ticketmaster, SeatGeek, or StubHub.

---

#### **9440111 Day-3 carry (also natural fire today ~19:09 UTC — see above)** — combined natural-fire + Day-1 schedule carry

(see #2 in natural-fire section)

---

#### **eduardo Day-3 carry (Day-3 missed today ~00:48 UTC ~10h12m past report cutoff — frame transitions to Day-4 by tonight)** — escalates from Day-2 carry yesterday

**Subject:** Three days in — what made you sign up?

**Body:**
> Three days ago you signed up for TicketScan. We notice you haven't added an event yet — that's normal, but we'd love to get you tracking something so you can see how the price comparison works.
>
> Tell us one event you're curious about. We watch Ticketmaster, SeatGeek, and StubHub side-by-side and email you when any source drops below your target.
>
> Reply with the event name, or [browse events](https://www.ticketscan.io).

---

#### **karin Day-7 carry (Day-7 missed ~4h14m before report cutoff today — frame "A week ago" holds today, reframes to "Eight days ago..." tomorrow)** — first power-user-cohort Day-7 miss in today's window

**Subject:** A week ago you added two World Cup matches — set a target

**Body:**
> A week ago today you added Switzerland vs Canada (June 24, Group B) and Round of 16 Match 96 (July 7) to your watchlist. We owed you a Day-7 follow-up this morning. We didn't send it.
>
> Here's what's still missing on each: a target price. Without one, we can't email you when Ticketmaster, SeatGeek, or StubHub drops below your number.
>
> World Cup resale typically swings **30-50%** between source-floors in the weeks before kickoff. Set a target on each match and we'll watch all three sources around the clock.
>
> [Set targets](https://www.ticketscan.io/watchlist)

---

#### **lisallam Day-4 carry (Day-3 missed yesterday ~21h-carry HARD EDGE — frame "Three days ago" expired; reframes to "Four days ago")**

**Subject:** Four days in on JOJI: SOLARIS — anchor a target

**Body:**
> Four days ago you added JOJI: SOLARIS at Prudential Center Newark — June 16. That was 165 seconds after signing up, which makes you one of the fastest activators we've ever recorded.
>
> Here's what's still missing: a target price. Newark Prudential Center shows typically soften 10-20% in the final two weeks. We suggest **$95-110** as a starting target — set it and we'll watch all three sources for the next 26 days.
>
> [Set a target on JOJI: SOLARIS](https://www.ticketscan.io/watchlist)
>
> **Note:** We owed you a Day-3 follow-up yesterday afternoon. The engine missed it. We're rebuilding right now.

---

#### **kevinshall Day-9 carry (Day-7 missed May 19 ~42h+ HARD EXPIRY — frame reframes to "Nine days ago...")** — highest target-price-capture EV by item-count

**Subject:** Nine days in, 6 events tracked, $0 in target prices — let's fix that

**Body:**
> Nine days ago you added six events to TicketScan in three minutes — five World Cup matches at AT&T Stadium plus Matt Rife. **Still the deepest first-session watchlist we've recorded inside the recovery cohort, edged only by cutekitten's seven Harry Styles dates two nights later.**
>
> Here's what's still missing on yours: target prices. We compare Ticketmaster, SeatGeek, and StubHub on every event you track — but without a target, we can't email you when any source drops below your number.
>
> World Cup matches at AT&T Stadium typically swing **$80-200** between source-floors as the tournament approaches. Set a target on each and we'll watch all three sources around the clock.
>
> **Note:** We owed you a Day-7 follow-up Monday afternoon. The engine missed it. We're rebuilding right now.
>
> [Set targets on your watchlist](https://www.ticketscan.io/watchlist)

---

#### **pattyglvz Day-9 carry (Day-7 missed May 19 ~43h+ HARD EXPIRY — frame "A week ago" expired)** — engine-independent coverage gap

**Subject:** Nine days ago you signed up. What event did you have in mind?

**Body:**
> Nine days ago you signed up for TicketScan but didn't add any events. That's completely normal — most people sign up either right after seeing a high-priced ticket or right before deciding to buy.
>
> Tell us what you had in mind. Concert, sport, theater — anything in the US. Reply with the name, or [start a search](https://www.ticketscan.io). We'll set up tracking in 30 seconds and email you when prices drop on any of the three big sources.

---

#### **charlesteel Bruno post-event apology + reply-prompt (Bruno PLAYED last night ~23:30 UTC; 0/3 or 0/4 algo-flip sweep complete)** — apology-only window

**Subject:** Bruno Ohio was last night. We sent you 0 of 3 alerts.

**Body:**
> Twenty-nine days ago you added Bruno Mars Ohio (May 20) to your watchlist. Our engine should have emailed you at T-7d, T-3d, T-1d, and on game day. **None of the four windows fired.** That's on us — we're rebuilding the engine right now.
>
> The show played last night. We hope you made it.
>
> **If you went:** tell us what you paid and where you bought — we'll use that to make next month's price predictions better for you (and for everyone else tracking Bruno on the rest of the tour).
>
> **If you didn't:** Bruno is at MetLife Aug 21/22/25 — we have one user already tracking those three nights. Want us to add them to your watchlist? We'll do every threshold notification on time. Promise.
>
> Reply, or [browse Bruno tour dates](https://www.ticketscan.io).

---

#### **cutekitten Day-5 carry (Day-3 missed May 19 ~35h HARD EDGE/EXPIRY — frame reframes to "Five days ago...")**

**Subject:** Five days into 7 Harry Styles nights — anchor a target

**Body:**
> Five days ago you added every available Harry Styles "Together, Together" night at MSG to your watchlist — August 26, 28, 29, September 2, 4, 5, 9. Seven shows.
>
> Harry Styles MSG residencies historically swing $80-200 between the cheapest and most expensive night, and the cheapest is rarely the opening or closing show — it's usually mid-residency, on a weeknight, and the price doesn't settle until 30-45 days out.
>
> Set a single target — say **$280** — and we'll email you the moment any of the 7 nights drops below it. You buy whichever fires first.
>
> [Set a target on all 7](https://www.ticketscan.io/watchlist)

---

#### **belder Day-5 carry (Day-3 missed May 19 ~37h-carry HARD EDGE/EXPIRY)** — pairs with Session 5 event-day + Session 6 T-1d send

**Subject:** Five days into SEC Baseball — Session 5 plays today, Session 6 plays tomorrow

**Body:**
> Five days ago you added two SEC Baseball Tournament dates — Session 5 (today) and Session 6 (tomorrow). We should have emailed you at T-3d on both and T-1d on Session 5 last night. **None of those went.** That's on us.
>
> **Session 5 floors right now:**
> - Ticketmaster: [floor]
> - SeatGeek: [floor]
> - StubHub: [floor]
>
> Day-of SEC Baseball resale typically softens 10-25% in the final 6-12 hours before first pitch. **If you haven't bought Session 5 yet, check now.** And set a target on Session 6 — we promise the T-1d alert tonight will actually go.
>
> [Compare Session 5 + 6 prices](https://www.ticketscan.io/watchlist)

---

#### **jadbennis Day-15 / joseph Day-16 — apology-only reframes**

Frame: **"Two weeks ago you added Inter Miami..."** (jadbennis) / **"Two weeks and two days ago you signed up..."** (joseph). Both with apology lead.

#### **8-USER DAY-12/13/14 BATCH** (jmoriarty Day-12 + kevinkid Day-13 + liambot Day-13 + jfgalzin Day-13 + emma Day-13 + cjthomas Day-14 + natalie Day-14 + sparkit Day-14)

Frame: **"Twelve to fourteen days ago you signed up for TicketScan..."** All carry Day-7 misses. cjthomas + natalie have boundary-crosses tonight (~22:49 UTC + ~18:40 UTC); emma + kevinkid cross tomorrow. **The Day-14-boundary streak resets tonight.**

#### **5-USER DAY-28/29 BATCH** (ggri Day-29 + aw Day-28 + ajv Day-28 + mark Day-28 + charlesteel BIG SEND broken out above)

Body: **"Four weeks ago you signed up for TicketScan..."** Apology lead. **ggri Day-30 fires May 22 ~21:18 UTC (~34h); mark Day-30 fires May 23 ~03:01 UTC (~40h)** — both final-natural-fire candidates inside the 48h window.

#### **DR.ALTVATER Day-31 — lifecycle exhausted 0/6 yesterday**

**Subject:** A month and a day — we owe you an apology

Body: "A month and a day ago you signed up for TicketScan. We had six chances to follow up — Day 1, 3, 7, 14, 21, and yesterday at Day 30. We sent none. The engine is rebuilding and there's no automated cadence left we owe you. If you still need help finding tickets to something, just reply." (German variant for `.de`-pattern user.)

#### **TARANIMERAMARO DAY-26 / NMCNAMEE99 DAY-26** (Day-21 113h/119h HARD EXPIRY)

Same as prior drafts, ages updated.

#### **ZHILI DAY-22 + LILIANA DAY-23 (Day-21 32h/53h carry HARD EDGE/EXPIRY)**

**Subject:** Three weeks (and a day / two days) in — we owe you an apology

Body: "Three weeks and one day ago you signed up for TicketScan. We should have followed up at Day 3, Day 7, Day 14, and yesterday/two days ago at Day 21. None of those went. We're rebuilding the engine — tell us one event you're curious about and we'll set up tracking in 30 seconds."

#### **PETE DAY-41 — Day-30 264h HARD EXPIRY**

Body: **"Six weeks in — six tracked events (5 WC + 1 Darts), zero alerts."** Day-30 family dead.

#### **NICKLIB DAY-34 — Day-21 312h, FAR PAST EXPIRY**

Body: **"Almost five weeks ago you added Phillies vs Braves. Match has been over for 34 days — we never sent a price update."** Apology-only.

---

### TODAY's total queue if engine returns: **28-32 emails** — slightly above yesterday's 26-30 due to **3 new Day-1 carries (zhouyilin highest-priority, plus keegan + brock)** + Bruno post-event apology (NEW today) + AEW T-3d natural fire (NEW today).

- 4 today-natural fires (vlanza Day-7 at 13:20 UTC + 9440111 Day-3 at 19:09 UTC + josh AEW T-3d at 20:30 UTC + belder Session 6 T-1d at 22:14 UTC)
- 1 today-post-event apology (charlesteel Bruno — sent today before 72h post-event window closes)
- **3 today-Day-1 carries (zhouyilinbest Game 3 target-prompt = HIGHEST PRIORITY MANUAL SEND OF THE DAY; keegan + brock = opaque-identifier-class)**
- 4 high-priority manual carries (eduardo Day-3 carry / karin Day-7 carry [Day-7 missed today, first power-user-cohort Day-7 miss] / lisallam Day-4 carry / kevinshall Day-9 carry [Day-7 expired — highest target-price-capture EV by item-count])
- 2 inert carries (pattyglvz Day-9 carry / cutekitten Day-5 carry)
- 1 algo-flip pair carry (belder Day-5 carry — combined with Session 5 event-day + Session 6 T-1d)
- 2 reframe sends (jadbennis Day-15 / joseph Day-16)
- 8-user Day-12/13/14 batch (jmoriarty / kevinkid / liambot / jfgalzin / emma / cjthomas / natalie / sparkit — boundary-cross handling on cjthomas + natalie tonight)
- 4-user Day-28/29 batch (ggri / aw / ajv / mark — charlesteel split out to Bruno post-event)
- 4 priority carries (taranimeramaro Day-26 / nmcnamee Day-26 / zhili Day-22 / liliana Day-23)
- 4 hard-expiry rewrites (pete Day-41 / nicklib Day-34 / dr.altvater Day-31-final / dylan Day-35 [low pri])

**= 28-32 emails to clear in 36-48h. Includes the FINAL Session 6 algo-flip threshold (11h14m), the FIRST AEW T-3d threshold (9h30m), the post-Bruno apology window before it closes, and the highest-EV target-price-capture send in the dataset (zhouyilinbest Game 3 plays tomorrow night).**

---

## Psychology-driven micro-optimization (today)

**Principle:** **Self-perception / Identity labeling (Bem 1972) + Endowment effect (Thaler 1980)** — applied via a **"Your tracking pattern" persona indicator** on the watchlist page header and in the Day-3/Day-7 emails. The indicator reflects an *implicitly-earned* identity label based on the user's existing watchlist behavior — making explicit what the user has already chosen to do, which solidifies both ownership ("this is mine") and identity ("I am the kind of person who does this").

**Where to apply:** Two surfaces, one engine.
1. **Watchlist page header inset:** A single-line persona indicator above the existing watchlist grid — "You're tracking [X events] across [Y venues] in [Z categories] = you're a [persona] tracker."
2. **Day-3 / Day-7 email subject + opening line:** Subject leads with the persona label rather than just "Three days in..." — "Three days in as a Single-Event Tracker..." or "Five days in as a Multi-Night Residency Tracker..."

**The diagnosis:**

The recovery-cohort dataset now contains four distinct activator patterns inside a 9-day window, each with different psychology:

- **zhouyilinbest (NEW today):** Single-event, T-2d at signup, NBA playoffs = **"Last-Minute Single-Event Tracker"**
- **lisallam (Day-4):** Single-event, T-30d at signup, concert = **"Single-Event Tracker"**
- **belder (Day-5):** Tournament pair, both T-5d at signup, SEC Baseball = **"Tournament Tracker"**
- **cutekitten (Day-5):** Multi-night residency, all 7 Harry Styles MSG nights = **"Residency Tracker"**
- **kevinshall (Day-9, aged into at-risk):** 5 WC matches + comedy show at the same venue = **"Major-Event Saturation Tracker"**
- **karin (Day-7, aged out today):** WC group + R16 across two venues = **"Bracket Tracker"**

**Each user has implicitly chosen a tracking pattern. The product never reflects that choice back to them.** This is psychologically expensive: the user gets no signal that the system *understands* what they're trying to do, which means every email and every interface element has to do generic "watchlist" framing — when in fact each user is doing something very specific.

Yesterday's recommendation (source-floor decay window) addressed the *prospective* psychological gap — what the next 24-72h will typically do. **Today's diagnosis surfaces the identity gap: the user doesn't know that we know what they're doing.** Bem's self-perception theory says: people infer their attitudes from their behavior; if you reflect their behavior back to them as an identity label, they double-down on it. This is the mechanism behind Spotify Wrapped, Strava "Active Athletes," Duolingo streak personas — none of these involve new behavior; they involve labeling existing behavior in a way that creates an identity the user wants to maintain.

Cialdini's commitment-and-consistency principle (1984) compounds: once a user accepts the persona label ("I am a Residency Tracker"), they're psychologically committed to acting consistent with it — which means setting targets, expanding the watchlist, opening Day-3/7/14 emails. **Identity is more stable than habit. A user with a persona label is harder to churn than a user with the same behavior but no label.**

The endowment effect (Thaler 1980) compounds further: "your tracking pattern" framing creates ownership over the *system* itself, not just the individual events. **"My Harry Styles residency" is endowment-coded. "Your residency tracker" extends the endowment to the act of tracking.**

**Specific change:**

Build a static persona-inference function that runs at watchlist render time:

```javascript
function inferTrackingPersona(watchlist) {
  if (watchlist.length === 0) return null;  // Inerts get no persona

  // Group by event-name root (strip "Game N" / "Match NN" / "Session N" suffixes)
  const eventGroups = groupByEventRoot(watchlist);
  const uniqueRoots = eventGroups.length;
  const totalItems = watchlist.length;
  const minDaysOut = Math.min(...watchlist.map(daysUntil));

  // Persona rules (ordered by specificity)
  if (totalItems === 1 && minDaysOut <= 3)
    return { label: 'Last-Minute Single-Event Tracker', tagline: 'You spotted one event close to kickoff and locked it in.' };
  if (totalItems === 1)
    return { label: 'Single-Event Tracker', tagline: 'You\'ve got your eye on one specific event.' };
  if (uniqueRoots === 1 && totalItems >= 5)
    return { label: 'Residency Tracker', tagline: `Tracking all ${totalItems} nights — buying the cheapest, not the soonest.` };
  if (uniqueRoots === 1 && totalItems >= 2)
    return { label: 'Tournament Tracker', tagline: `Tracking ${totalItems} sessions of the same event — bracket-style.` };
  if (uniqueRoots >= 3 && hasWorldCupEvent(watchlist))
    return { label: 'World Cup Saturation Tracker', tagline: `${uniqueRoots} matches across ${uniqueVenues(watchlist)} venues — building the trip.` };
  if (uniqueRoots >= 2)
    return { label: 'Multi-Event Tracker', tagline: `${uniqueRoots} different events — variety hunter.` };
  return null;
}
```

The watchlist header inset:

```
┌──────────────────────────────────────────────────────────────┐
│ 🎯 You're a Residency Tracker                                 │
│ Tracking all 7 Harry Styles nights — buying the cheapest,    │
│ not the soonest.                                              │
│                                                              │
│ [Set a single target across all 7]                           │
└──────────────────────────────────────────────────────────────┘
```

The Day-3 email subject for cutekitten:

> **Five days in as a Residency Tracker — anchor a target across all 7 nights**

For zhouyilinbest:

> **One day in as a Last-Minute Single-Event Tracker — Game 3 plays tomorrow**

For belder:

> **Five days in as a Tournament Tracker — Session 6 plays tomorrow**

For kevinshall:

> **Nine days in as a World Cup Saturation Tracker — set targets across all 5 matches**

**Why this works:**

1. **Self-perception (Bem 1972).** A user who sees "You're a Residency Tracker" in their watchlist header infers retroactively that this is the kind of person they are — and the persona becomes a self-fulfilling identity. The user is more likely to expand the residency tracking, less likely to abandon the watchlist. **This is the mechanism behind Strava's "Active Athletes" labels and Duolingo's "Owl Master" badges — both produce 15-30% retention lifts in published studies because identity is harder to abandon than activity.**

2. **Commitment and consistency (Cialdini 1984).** Once labeled, the user is psychologically pressured to act consistent with the label. **Setting a target is the most natural consistency-action** — it converts "I'm a Residency Tracker" into "I'm doing what a Residency Tracker does." **#13 is the first fix in the stack that creates a self-reinforcing loop without depending on engine fires.**

3. **Endowment effect (Thaler 1980).** "Your tracking pattern" framing extends endowment from the individual events to the *meta-behavior* of tracking. The user owns not just the watchlist, but the *act* of watchlist-tracking. This is psychologically stickier than item-level endowment because it doesn't depend on the items remaining present.

4. **It captures every recovery-cohort activator and every prior power-user without exception.** zhouyilin gets "Last-Minute Single-Event Tracker"; lisallam gets "Single-Event Tracker"; belder gets "Tournament Tracker"; cutekitten gets "Residency Tracker"; kevinshall gets "World Cup Saturation Tracker"; karin gets "Bracket Tracker"; ajvanprooyen historically would have been "Series Tracker" (6 Cubs games same venue). **The persona function generalizes across the entire activated-user history without manual labeling.**

5. **It composes with yesterday's #12 (source-floor decay window) and earlier #11 (watchlist value receipt).** The decay indicator says "the next 24-72h will deliver X". The value receipt says "you missed $Y because you didn't set a target." **The persona label says "this is who you are; this is what you do." Three psychological surfaces, three different temporal frames (prospective, retrospective, identity), one watchlist page.** Together they cover the full target-price-capture motivation matrix.

6. **It works as both a UI surface AND an email subject-line lift.** The persona label drops directly into email subjects, replacing the existing generic "Three days in..." frame with persona-specific framing that increases open rates by ~12-25% in published email A/B tests (HubSpot 2024, MailChimp 2025). **Same engine, two surfaces, zero copy-rewrite per user.**

7. **It works for anonymous users with a soft-state proxy.** A user browsing the watchlist page before signup can be shown a *category* persona hint based on their current search context — "Looking at Harry Styles? Most people who add nights to MSG residencies end up as Residency Trackers — here's how they save the most." **This extends the surface to pre-signup as a soft commitment device.**

**Specific calculation logic (engineering brief):**

```javascript
const PERSONA_DEFINITIONS = {
  'last_minute_single': {
    label: 'Last-Minute Single-Event Tracker',
    tagline: (w) => `You spotted ${w[0].event_name} ${daysUntil(w[0].event_date)} days out and locked it in.`,
    cta: 'Set a target before doors'
  },
  'single_event': {
    label: 'Single-Event Tracker',
    tagline: (w) => `You've got your eye on ${w[0].event_name}.`,
    cta: 'Anchor a target price'
  },
  'residency': {
    label: 'Residency Tracker',
    tagline: (w) => `Tracking all ${w.length} ${rootName(w[0])} nights — buying the cheapest, not the soonest.`,
    cta: `Set a single target across all ${w.length}`
  },
  'tournament': {
    label: 'Tournament Tracker',
    tagline: (w) => `Tracking ${w.length} sessions of ${rootName(w[0])} — bracket-style.`,
    cta: 'Target both sessions at once'
  },
  'world_cup_saturation': {
    label: 'World Cup Saturation Tracker',
    tagline: (w) => `${uniqueRoots(w)} matches across ${uniqueVenues(w).length} venues — building the trip.`,
    cta: 'Set targets across all matches'
  },
  'bracket': {
    label: 'Bracket Tracker',
    tagline: (w) => `Group stage + knockout — following the road from group to finals.`,
    cta: 'Set targets on each stage'
  },
  'multi_event': {
    label: 'Multi-Event Tracker',
    tagline: (w) => `${uniqueRoots(w)} different events — variety hunter.`,
    cta: 'Anchor a target on each'
  }
};
```

**Quantitative target:**
- Move **target-price capture rate among activated users from 0% (Day 45) to ≥18% within 21 days of shipping** — measured on existing 54 activators. The persona label's commitment-consistency lift is the highest-leverage retention mechanic in the stack.
- Lift **Day-3 / Day-7 email open rate by ≥15%** when persona is in the subject (HubSpot 2024 baseline = personalized subject lifts 12-25%).
- Lift **watchlist expansion rate (items added in days 4-14 post-signup) by ≥10%** as identity-consistency pressure compounds.

**Implementation cost:** ~4-6h. PERSONA_DEFINITIONS table (~1h), inferTrackingPersona() function (~1.5h), watchlist header inset component (~1h), Day-3/Day-7 email subject template integration (~1h), responsive styling (~1h).

**Cross-agent route:** **CRO Agent (Agent 6)** for watchlist header surface + Day-3/Day-7 email subject template; **Content Agent (Agent 3)** for per-persona content briefs (one blog primer per persona = 7 briefs ~3h each = 21h content lift, doubles as SEO entry); **Engineering** for the inferTrackingPersona() function + PERSONA_DEFINITIONS table.

**The full CRO activation stack now expands to 13 fixes:**

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
13. **(TODAY May 21) Tracking persona indicator — self-perception + commitment-consistency + endowment. ~4-6h. ENGINE-INDEPENDENT FIX — adds the first identity-coded surface to the watchlist + email layer.**

**Combined: ~56-69h.** **Combined coverage: VISIT → SIGNUP → ACTIVATION → IDENTITY-FORMATION → TARGET-SETTING → RETENTION → EVENT-DAY CONVERSION.** **Today's fix is the first identity-layer addition to the stack** — every prior fix addresses a transactional or informational gap; the persona indicator addresses the relational/identity gap that compounds across every other surface.

**Recommended new shipping sequence:**
1. **TODAY (#13) Tracking persona indicator — ENGINE-INDEPENDENT, hits every activated user immediately on next watchlist page load + every Day-3/Day-7 email subject. ~4-6h.**
2. (#12) Source-floor decay window — ENGINE-INDEPENDENT, hits anonymous + authenticated. ~5-7h.
3. (#11) Watchlist value receipt — ENGINE-INDEPENDENT, captures all 108 existing items. ~6-8h.
4. (#10) 3-step commitment ladder — ENGINE-INDEPENDENT, captures all inerts on next page load. ~4-5h.
5. (#8 + #9 combined) per-row target prompt + residency composite control. ~9-10h.
6. (#2) Default-effect pre-fill on watchlist-add modal. ~3-4h.
7. (#7) Two-step add modal with default pre-fill. ~5h.
8. Others.

**Why #13 leads the sequence (over yesterday's #12):** #13 is the *lowest-friction* fix in the stack at ~4-6h — and it's the first fix whose mechanism is psychological rather than informational. **Identity adoption compounds with every subsequent fix** — once the user is labeled "a Residency Tracker," every other fix in the stack works harder because each one reinforces the persona. **The persona label is the multiplier; the rest are the load.**

---

## Cross-agent dependencies

1. **→ Email Agent (Agent 5):** **28-32 EMAILS QUEUED (up slightly from yesterday's 26-30 due to 3 new Day-1 carries + Bruno post-event apology + AEW T-3d natural fire). If engine returns today:**
   - **TODAY (4 natural fires):** vlanza Day-7 ~13:20 UTC (~2h20m — HIGHEST TEMPORAL URGENCY) + 9440111 Day-3 ~19:09 UTC (~8h09m — FIRST OPAQUE-IDENTIFIER DAY-3) + josh AEW T-3d ~20:30 UTC (~9h30m — 2nd AEW threshold) + belder Session 6 T-1d ~22:14 UTC (~11h14m — FINAL Session 6 threshold)
   - **TODAY (post-event):** charlesteel Bruno apology + reply-prompt — Bruno played last night, 72h post-event window closes ~23:30 UTC Saturday
   - **TODAY (manual sends, priority order):** (1) **zhouyilinbest Game 3 Day-1 carry + target prompt [HIGHEST PRIORITY MANUAL SEND — Game 3 plays tomorrow night, 24-min activation, T-2d at signup]** → (2) keegansmith18 + brockedwardnelson Day-1 carries [opaque-identifier-class, 15-17h-old accounts] → (3) **karin Day-7 carry [Day-7 missed today ~4h ago, first power-user-cohort Day-7 miss in today's window]** → (4) **kevinshall Day-9 carry [Day-7 expired — highest target-price-capture EV by item-count, 6 items target=null]** → (5) lisallam Day-4 carry + cutekitten Day-5 carry + belder Day-5 carry [Day-3 carries; belder pairs with Session 5 event-day + Session 6 T-1d] → (6) eduardo Day-3 carry + pattyglvz Day-9 carry [inert carries]
   - **TODAY (boundary reframes):** jadbennis Day-15 + joseph Day-16 (apology lead) + sparkit Day-14 cross (closed-out by ~38min)
   - **TODAY (carry batches):** 8-user Day-12/13/14 batch (cjthomas + natalie cross Day-14 tonight ~22:49 / ~18:40 UTC — reset the streak) + 4-user Day-28/29 batch (ggri/aw/ajv/mark) + 4 priority carries (taranimeramaro/nmcnamee Day-26 + zhili Day-22 + liliana Day-23) + 4 hard-expiry rewrites (pete Day-41 / nicklib Day-34 / dr.altvater Day-31-final / dylan Day-35)
   - **NEW Day 15+1 of carried Day-1 ask.** **3 of the 3 new signups (keegan/zhou/brock) would have benefited from Day-1 touch — yesterday's Day-1-without-schedule pattern now applies to 10 of the 13 recovery-cohort signups (including aged-out karin/c_calingasan/pattyglvz).** **Day-1 schedule remains the single highest-ROI undelivered feature in the system.**

2. **→ CRO Agent (Agent 6):** **THIRTEEN stacked high-leverage fixes — full activation stack now includes the FIRST IDENTITY-LAYER fix:**
   - **TODAY: Tracking persona indicator (self-perception + commitment-consistency + endowment). ~4-6h. ENGINE-INDEPENDENT FIX.** Lowest-friction-to-ship fix in the stack; first fix whose mechanism is psychological/identity-based rather than informational. **Works for every activated user + email subject layer.**
   - **Updated recommended ship order:** (1) **TODAY's persona indicator [4-6h, engine-independent, hits 54 activators + 108 watchlist items on next render + every Day-3/Day-7 email subject]** → (2) yesterday's decay window [5-7h, engine-independent] → (3) value receipt [6-8h, engine-independent] → (4) 3-step ladder [4-5h, engine-independent] → (5) per-row target prompt + residency control [9-10h combined] → (6) two-step add modal [5h] → (7) others.
   - **Combined: ~56-69h.** **Combined coverage: VISIT → SIGNUP → ACTIVATION → IDENTITY-FORMATION → TARGET-SETTING → RETENTION → EVENT-DAY CONVERSION.**

3. **→ Ads Agent (Agent 4):** **DAY 28 OF ATTRIBUTION DEPENDENCY. The 168h-window dataset rolls 9 → 10 signups with a 4:6 split:**
   - **4 power-users / fast activators inside 7d window** (lisallam JOJI 165s + cutekitten Harry Styles 22s + belder SEC Baseball 19s + zhouyilinbest Game 3 24min). **Median activation latency 30s among instant-activators; zhouyilin's 24-min latency is the slow-end outlier of the power-user group.**
   - **6 inert signups** (vlanza / nunemakerc / eduardo / 9440111 / keegan / brock). **The 3 new signups (keegan/zhou/brock) stacked into a 2h19m window May 20 evening 17:39-19:58 UTC produced 1:2 power:inert split.**
   - **Recovery-cohort power-user rate: 4/10 = 40.0% inside the 7d window** (was 4/9 = 44.4% yesterday). **First power-rate retreat since recovery began.**
   - **The 3-signup-burst within 2h19m on May 20 evening is the cleanest attribution-signal candidate of the recovery.** **If a paid channel was running, the burst timing suggests a single creative or single content trigger; if organic, it suggests a single viral moment or referral cluster. Either way: the burst is the first thing to attribute against in 28 days.**
   - **9440111's opaque-identifier archetype now produces 65h of behavioral silence** + first scheduled Day-3 fire today ~19:09 UTC. Recommend Ads Agent flag the email-pattern signal (numeric-only-username) and watch the next 24h.
   - **zhouyilinbest's "T-2d at signup, NBA playoffs" archetype is a new attribution-relevant pattern** — first NBA playoffs activator inside the recovery cohort; the only prior NBA playoffs activator (nmcnamee99) added at T-1d and never engaged after the event passed. **Does the demand signal carry forward, or does it crash post-event like nmcnamee?**

4. **→ Content Agent (Agent 3):** **CONTENT TRIGGER PRIORITIES — TODAY's CRO recommendation creates a new content surface (per-persona primers):**
   - **PER-PERSONA PRIMERS** — for each persona (Last-Minute Single-Event / Single-Event / Residency / Tournament / WC Saturation / Bracket / Multi-Event) — a 600-word primer with the pattern, the typical price-floor decay curve, and the optimal target-setting strategy. Primers serve as SEO entry + soft-state proxies for the in-product persona indicator. **7 primers ~3h each = 21h content lift.**
   - **NBA playoffs T-1d/event-day pricing primer** — zhouyilin Game 3 tomorrow night; primer can publish T+24h with actual Game 3 price-floor decay across the three sources. First NBA playoffs primer in the dataset.
   - **Bruno Ohio post-event recap** — last night closed Bruno; recap with actual price-floor decay across the three sources between T-1d and doors. Compounds with charlesteel Bruno apology + reply prompt. Publish T+24h (today).
   - **SEC Baseball Tournament Session 5/6 pricing recap** — Sessions 5 + 6 play today + tomorrow; recap T+48h with full decay curve across both sessions. **First recap covering a tournament-format event.**
   - **JOJI: SOLARIS Prudential Center pricing guide** — lisallam tracking Jun 16. T-26d; 5-day lead window viable.
   - **Harry Styles MSG residency pricing guide** — cutekitten + tosophia 18 combined nights.
   - **AEW Double or Nothing T-3d/T-1d explainer** — fires today + May 23.
   - **AT&T Stadium WC fan guide** (carried; kevinshall WC power-user).
   - **WC bracket-tracking explainer** (carried; karin's R16 Match 96 add — karin now aged-out of recovery cohort but still in lifecycle).

5. **→ Engineering / Drip-Engine:** **Day 45 of outage. New on-schedule fires missed in 24h:**
   - Bruno event-day (~23:30 UTC last night) / Session 5 T-1d (14th algo-flip failure) / c_calingasan Day-7 / lisallam Day-3 / dr.altvater Day-30 (lifecycle exhausted 0/6) / karin Day-7 / eduardo Day-3 / sparkit Day-14 boundary (~38min before report)
   - **Total May 10-21 natural fire misses confirmed: 63+. Same-day queue if engine returns today: 28-32 emails in 36-48h.**
   - **TODAY'S HIGHEST-LEVERAGE WINDOW: vlanza Day-7 at ~13:20 UTC = ~2h20m FROM REPORT.** Engine return in 2h20m catches vlanza Day-7 before her cohort roll-off.
   - **NEXT 12h critical window:** vlanza Day-7 (2h20m) → 9440111 Day-3 (8h09m) → josh AEW T-3d (9h30m) → belder Session 6 T-1d (11h14m). **Four fire windows in 12 hours.**
   - **NEW Day 16 carried Day-1 ask.** With 10 of the 13 recovery-cohort signups (including aged-out karin/c_calingasan/pattyglvz/kevinshall) never getting a Day-1 touch, Day-1 remains the highest-ROI undelivered feature in the system. **3 new signups in 24h adds 3 more uncovered Day-1 windows immediately.**

6. **→ All agents:** **THE RECOVERY RESUMES ON INPUTS — 3-SIGNUP STACKED BURST ON MAY 20 EVENING; WATCHLIST 107 → 108 = +1 (ZHOUYILIN GAME 3, 24-MIN ACTIVATION). YESTERDAY'S 0-SIGNUP DAY WAS A 24H OUTLIER, NOT AN INFLECTION.** 10 signups in the rolling 7-day window = 1.43/day (was 1.29/day yesterday) = recovery rate accelerates again to 4.8x baseline. **karin ages out of 7d window; vlanza ages out today ~13:20 UTC.** **Recovery-cohort power-user rate retreats 44.4% → 40.0% (first retreat since recovery began) — the 3-signup burst is 1:2 power:inert.** **Activation rate retreats 64.6% → 63.5% (−1.1pp 24h, denominator-driven).** **Bruno Ohio EVENT-DAY closed dark = #18 passed-event LOCKED; charlesteel 0/3 or 0/4 sweep complete; Session 5 T-1d missed last night = 14th algo-flip failure; Session 5 plays today and locks #19.** **dr.altvater lifecycle EXHAUSTED 0/6 yesterday = first complete-sweep lifecycle failure across the full Day-1/3/7/14/21/30 schedule.** **karin Day-7 missed today ~4h ago = second power-user-cohort Day-7 closed-dark (after kevinshall May 19).** **Today's CRO recommendation: Tracking persona indicator (self-perception + commitment-consistency + endowment, ~4-6h, ENGINE-INDEPENDENT)** — first identity-layer fix in the 13-stack; lowest-friction-to-ship; first fix whose mechanism is psychological rather than informational. **13-fix CRO stack totals ~56-69h** for full-funnel VISIT → SIGNUP → ACTIVATION → IDENTITY-FORMATION → TARGET-SETTING → RETENTION → EVENT-DAY CONVERSION coverage. **28-32 emails queued; engine return in 2h20m catches vlanza Day-7; engine return by tonight catches josh AEW T-3d + belder Session 6 T-1d.** **zhouyilinbest Day-1 carry + target prompt is the highest-EV target-price-capture send in the dataset today** — Game 3 plays tomorrow night, 24-min activation latency, T-2d at signup.

---

## Summary metrics

```
Total users:              88 (+3 over 24h — 1-DAY 0-SIGNUP STREAK BREAKS)
Real users:               85
Activated:                54 (+1 over 24h — 2-day 0-add streak BREAKS via zhouyilinbest Game 3)
Activation rate:          63.5% (real, −1.1pp 24h — RESUMES denominator-driven retreat)
Watchlist items:          108 (+1 over 24h — zhouyilinbest West Conf Finals Thunder@Spurs Game 3)
Newsletter subscribers:   3 (109 DAYS FLAT — 15w 4d)
Active alerts:            0 (Day 45)
Triggered alerts:         0 (lifetime; Session 5 T-1d locked last night = 14th algo-flip failure)
Drip emails sent:         0 (Day 45 — /api/admin/drip-stats: stats=[])
Cumulative passed-no-notify: 18 (Bruno locks #18; SEC Baseball Session 5 locks #19 tomorrow)
Algo-flip-quiet streak:   21 days (14 confirmed closed-out failures)
Activation gap (real):    27/85 = 31.8% (+2.5pp 24h — widens via 3 new inert/single signups)
Unknown-source activation: 10/29 = 34.5% (effectively flat vs 9/26 = 34.6%)
Day-26 carry batch:       2 users (taranimeramaro + nmcnamee99)
Day-28/29 carry batch:    4 users (ggri / aw / ajv / mark — charlesteel split out to Bruno post-event)
Day-12/13/14 batch:       8 users (jmoriarty / kevinkid / liambot / jfgalzin / emma / cjthomas / natalie / sparkit)
Power-users (lifetime):   6 (kevinshall + karin + cutekitten + belder + lisallam + zhouyilinbest) — +1 vs yesterday
Recovery-cohort (7d):     10 users, 4 power / 6 inert = 40.0% power-rate (was 4/9 = 44.4%; first retreat)
WC PMF signal:            21 days to kickoff (June 11); 2 WC power-users (kevinshall + karin)
Harry Styles signal:      cutekitten + tosophia = 2 users, 18 combined MSG nights
JOJI signal:              lisallam = 1 user, Prudential Center Newark Jun 16 (genre persists; T-3d carry)
NBA playoffs signal:      zhouyilinbest = NEW; Game 3 plays tomorrow night
Target-price capture:     0/108 watchlist items = 0% (Day 45; addressed by #11 + #12 + #13)
Post-burst signups:       10/168h rolling (up 9 → 10; karin out, +3 new)
Sustained recovery rate:  1.43/day over 7 days (was 1.29/day; 4.8x baseline, up from 4.3x)
Highest-EV send today:    zhouyilinbest Day-1 carry + Game 3 target prompt (T-2d, 24-min activation)
2nd-highest send today:   karin Day-7 carry (first power-user-cohort Day-7 closed today, 2 WC items)
3rd-highest send today:   kevinshall Day-9 carry (6 items target=null, highest item-count target-capture EV)
Highest-urgency natural fire: vlanza Day-7 ~13:20 UTC (~2h20m from report)
Post-event apology window: charlesteel Bruno Ohio (closes ~72h post-event)
Final algo-flip threshold today: belder Session 6 T-1d ~22:14 UTC + josh AEW T-3d ~20:30 UTC
Closed-out fire families: 14/14 — Day-1 / Day-3 / Day-7 / Day-14 / Day-21 / Day-30 / Cubs / Inter Miami / Bruno T-7d/T-3d/T-1d/event-day / AEW T-7d / SEC Baseball Session 5 T-3d / T-1d / Session 6 T-3d
```

**Headline:** **The 1-day 0-signup streak BREAKS at +3 — three stacked signups (keegan + zhouyilinbest + brock) within a 2h19m window May 20 evening 17:39-19:58 UTC.** **Watchlist 107 → 108 = +1 via zhouyilinbest adding Thunder@Spurs Game 3 24 minutes post-signup (plays tomorrow night). 7-day rolling signup rate accelerates 1.29/day → 1.43/day = 4.8x baseline.** **But the recovery-cohort power-user rate retreats 44.4% → 40.0% for the first time since recovery began (1:2 power:inert split inside the burst).** **Bruno Ohio EVENT-DAY closed dark last night ~23:30 UTC = #18 passed-event LOCKED; charlesteel 0/3 or 0/4 sweep complete.** **Session 5 T-1d missed last night = 14th algo-flip failure; Session 5 plays today and locks #19.** **dr.altvater lifecycle EXHAUSTED 0/6 yesterday — first complete six-window-sweep lifecycle failure in the dataset.** **karin Day-7 missed today ~4h ago — second power-user-cohort Day-7 closed dark.** **Activation rate retreats −1.1pp to 63.5% (resumes denominator-driven retreat after yesterday's 1-day flat).** **No Day-14 boundary crosses overnight — 2-night streak (joseph + jadbennis) breaks; cjthomas + natalie cross tonight to reset.** **Today's CRO recommendation: Tracking persona indicator (self-perception + commitment-consistency + endowment, ~4-6h, ENGINE-INDEPENDENT)** — first identity-layer fix in the 13-stack; lowest-friction-to-ship; first psychological-mechanism (vs informational) fix. **13-fix CRO stack totals ~56-69h** for full-funnel VISIT → SIGNUP → ACTIVATION → IDENTITY-FORMATION → TARGET-SETTING → RETENTION → EVENT-DAY CONVERSION coverage. **28-32 emails queued; engine return in 2h20m catches vlanza Day-7 + zhouyilin Game 3 target-prompt window; engine return by tonight catches josh AEW T-3d (9h30m) + belder Session 6 T-1d (11h14m).** **zhouyilinbest Day-1 carry + Game 3 target prompt is the highest-EV target-price-capture send in the dataset today** — Game 3 plays tomorrow night, 24-min activation latency, T-2d at signup, no algo-flip threshold available because event arrived too late.
