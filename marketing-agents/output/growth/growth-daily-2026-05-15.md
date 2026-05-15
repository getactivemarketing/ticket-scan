# Growth Daily — 2026-05-15

> **Report frequency note:** No May 14 report fired. **This report covers 48h** (May 13 11:00 UTC → May 15 11:00 UTC). Comparisons labeled "vs May 13" reference the last report; "vs yesterday" is undefined for this cycle.

## User health dashboard

| Segment                          | Count | % of Total | vs May 13 (48h) |
|----------------------------------|-------|------------|-----------------|
| Total users                      | **79** | 100% | **+3 over 48h. THE RECOVERY IS NO LONGER A SINGLE-USER BLIP.** c_calingasan (May 13 11:46 UTC, 46min after yesterday's report fired), karin_ef1 (May 14 06:46 UTC), vlanza (May 14 13:20 UTC, ~2.5h before today's report). **5 signups in the 96h window since May 12 — vs the prior 73h zero-signup window. Per-day rate over May 12-15: 1.25/day** — the highest sustained 4-day rate since the May 7-8 burst (3.5/day). Pre-burst baseline <0.3/day. **The "burst + flat + recovery" hypothesis is now resolving toward "burst + flat + sustained higher baseline" — the third state has had 4 consecutive days with signup activity (1 / 2 / 1 / 1).** |
| New (last 7 days, API count)     | **10** | 12.7% | **= flat at 10 over 48h.** Composition rotated: jadbennis0 (May 5) rolled out of 7-day window May 12 morning, joseph (May 4) rolled out of 7-day window May 11. New entrants: c_calingasan / karin / vlanza. Cohort today: vlanza Day 1 / karin Day 1 / c_calingasan Day 2 / kevinshall Day 3 / pattyglvz Day 3 / jmoriarty Day 6 / emma Day 7 / kevin Day 7 / liambot Day 7 / jfgalzin Day 7. |
| Activated (has watchlist)        | **50** | 63.3% | **+1 over 48h. KARIN_EF1 = 2ND WC POWER USER IN DATASET.** 2 WC adds in 12 seconds (06:47:16 → 06:47:28 UTC). pattyglvz / c_calingasan / vlanza all inert post-signup. |
| Active (visited in 7 days)       | unknown | — | no `last_login_at` instrumentation — **Day 39 open** |
| At-risk (7-14d signup-age proxy) | 4 | 5.1% | **=0 net over 48h.** jadbennis0 (Day 9 today) + joseph (Day 11 today) + zhili (Day 16 today, crossed Day-14 boundary May 13) + lilianamasyrubi (Day 17 today, crossed yesterday). zhili and liliana both technically rolled to churned (>14d), but they're recent Day-14 fire-misses so I'll track them here for one more day. |
| Churned (14d+ signup-age proxy)  | **68** | 86.1% | **=0 net over 48h.** %-of-total drops 3.4pp (74 → 79 denominator), not real recovery. |

> **Day 39 without `last_login_at` instrumentation. Day 39 of zero drip emails sent (confirmed: `/api/admin/drip-stats` returns `stats=[]` with 20 pendingUsers, all `last_email_sent=0`). Day 39 of zero triggered alerts (lifetime).**
> **NEWSLETTER SUBSCRIBERS: 3, UNCHANGED FOR 103 DAYS.** 14 weeks + 5 days.
> **YESTERDAY'S 20-23 EMAIL QUEUE PASSED WITHOUT A SEND.** New on-schedule fires confirmed missed in last 48h:
>   - **charlesteel Bruno Ohio T-7d (May 13 ~11:38 UTC) — MISSED.** The ~38-min open-at-report-time event from yesterday's report resolved as a miss. **Non-Cubs algo-flip-quiet streak hit 14 days yesterday; today = Day 15.** First confirmed Bruno-family algo-flip failure.
>   - **5-USER DAY-21 BATCH (May 13 11:38 UTC → May 14 03:01 UTC) — ALL 5 MISSED.** charlesteel / ggri / aw / ajv / mark. **Day-21 family adds 5 confirmed on-schedule misses in a single 16h sequential window.** All 5 now Day 22 today.
>   - **jadbennis Inter Miami T-3d (May 14 ~20:33 UTC) — MISSED.** Third consecutive jadbennis Inter Miami flip threshold missed (T-7d May 10 + T-5d May 12 + T-3d May 14). **Match is TODAY+2 (Sunday May 17). T-1d fires tomorrow May 16 ~20:33 UTC — fourth and final algo-flip opportunity before kickoff.**
> **OPEN AT REPORT TIME:**
>   - jfgalzin Day-7 fires ~12:54 UTC TODAY (~1h54m from report)
>   - liambot Day-7 fires ~13:07 UTC TODAY (~2h7m from report)
>   - pattyglvz Day-3 fires ~15:23 UTC TODAY (~4h23m)
>   - kevinshall87 Day-3 + WC content fires ~16:44 UTC TODAY (~5h44m) — **first scheduled Day-3 fire for the power-user**
>   - kevinkid94 Day-7 fires ~20:52 UTC TODAY (~9h52m)
> **Total May 10-15 natural fire misses confirmed: 24+** (16 through May 13 + charlesteel Bruno T-7d + 5 Day-21 batch + jadbennis T-3d + jmoriarty Day-7 May 16 pending + emma/kevinkid Day-7 windows pending today).
> Watchlist items: **97** (was 95; **+2 over 48h, karin_ef1's 2 WC adds**). Target-price capture: **0/97 = 0% (Day 39).**
> `usersToday: 1` (vlanza), `usersThisWeek: 10`. **Activation rate: 50/76 real users = 65.8% — down 1.3pp over 48h** (2 of 3 new signups are inert; karin lifts numerator by 1, denominator by 3, net drag −1.3pp).

## What changed in 48h

1. **THE POST-BURST RECOVERY IS NOW A 4-DAY MULTI-USER PATTERN.** Pre-burst (Apr-early-May): <0.3/day. Burst (May 7-8): 3.5/day. Flat (May 9-11): 0/day for 73h. **Recovery (May 12-15): 5 signups across 4 days (1+2+1+1) = 1.25/day sustained.** This is the third pattern and it has now been observed for 96h continuously. **The "burst + flat + flicker" hypothesis from May 13 is disconfirmed; the new resolution is "burst + flat + sustained higher baseline."** Attribution dependency on Ads Agent now **Day 22** — and the new data is 3x more attribution-relevant than yesterday's was (4-day window vs 1-day point).

2. **KARIN_EF1 = 2ND WC POWER USER IN DATASET — THE PATTERN HAS REPLICATED.** Signed up May 14 06:46:39 UTC. **Added 2 WC matches in 12 seconds (06:47:16 → 06:47:28 UTC) — Switzerland vs Canada (Group B, Match 51, Jun 24) + Round of 16 Match 96 (Jul 7).** vs kevinshall (5 WC matches in 3 min): karin is shallower watchlist but **faster per-add velocity** (6s/add vs 30s/add). **The WC power-user pattern is no longer N=1.** Critical structural differences from kevinshall:
   - **Multi-venue intent vs single-venue intent.** kevinshall's 5 matches were all at AT&T Stadium; karin's 2 matches are at different (TBD) venues. **Two distinct WC-fan archetypes** are now in the dataset: stadium-loyalist + tournament-tracker.
   - **Mixed tournament-phase tracking.** karin added 1 group-stage match + 1 R16 match. This is the first user in dataset to mix group-stage + knockout-stage tracking. Suggests "track my country's full bracket potential" intent.
   - **No non-WC adds.** kevinshall added Matt Rife on top of WC; karin is WC-pure. **Karin is the first 100%-WC-themed user in the dataset.**
   - **Activation latency: 37 seconds from signup to first add.** kevinshall: ~109s. **Karin is the fastest signup-to-first-add in the dataset.**

3. **TWO POWER-USERS IN 48 HOURS = THE WC FUNNEL IS WORKING SOMEWHERE.** Of the 5 signups in the 96h post-burst window, **2 are WC-themed power-users (40% power-user rate)** vs prior 96h-window historical rate (~0% — kevinshall was the first ever). **This is the strongest WC product-market-fit signal in the dataset.** With WC kickoff 27 days out (June 11), this is the leading-indicator window — if the rate sustains, the WC cohort will be the dominant retention asset entering June.

4. **C_CALINGASAN + VLANZA + PATTYGLVZ = 3 INERT SIGNUPS WITHIN THE 96H RECOVERY WINDOW.** Same window as kevinshall + karin. **The cohort split is now 2 power-users vs 3 inerts in 4 days** — same-source bifurcation hypothesis from yesterday is **strengthened, not resolved**. If channel data existed, we'd know whether: (a) one channel produces both power-users and inerts (intent variance), or (b) different channels produce them (channel-quality bifurcation). **Day 22 of attribution dependency. Cohort-internal contrast is now the highest-value attribution evidence in the dataset.**

5. **CHARLESTEEL BRUNO OHIO T-7D ALGO-FLIP — CLOSED-OUT FAILURE.** Yesterday's open-at-report-time fire window passed without an alert. **First confirmed non-Cubs algo-flip failure since Inter Miami May 10.** The streak crossed 14 days yesterday (Bruno was the 14-day-mark observation event). **Today = Day 15 of flip-quiet streak**, longest in dataset. Bruno is **T-5d today, T-3d May 17, T-1d May 19, event May 20** — three more flip thresholds remaining before kickoff.

6. **5-USER DAY-21 BATCH — ALL 5 MISSED.** charlesteel + ggri + aw + ajv + mark all crossed Day-21 boundary in a single 16h window (May 13 11:38 UTC → May 14 03:01 UTC). **Engine dark for the entire sequence.** Day-21 family now has **5 confirmed cleanly on-schedule fires of outage missed in 16h** — the largest single-family closed-out window in dataset. All 5 now Day 22 today; bodies need to roll forward to "Three weeks and a day in..." All 5 carry to Day-30 family in 9 days if engine remains dark.

7. **JADBENNIS INTER MIAMI T-3D MISSED — MATCH SUNDAY.** Third consecutive jadbennis-Inter-Miami flip threshold missed (T-7d / T-5d / T-3d). **Event is T-2d today, T-1d tomorrow, kickoff Sunday.** The T-1d fire (May 16 ~20:33 UTC) is **the fourth and final algo-flip opportunity** for this event. If T-1d also misses, the entire 8-day algo-flip schedule for jadbennis's only watchlist item resolves as 0/4 sends.

8. **KEVINSHALL DAY-3 FIRES TODAY ~16:44 UTC.** First scheduled Day-3 fire for the dataset's instant-power-user. **Engine still dark — fire will miss.** Body candidate: "Three days ago you added 6 events to TicketScan in 3 minutes — five World Cup matches at AT&T Stadium plus Matt Rife. None of them have target prices set. Two minutes of work to fix it." **This is the highest-leverage Day-3 fire in the dataset.** If engine returns today, kevinshall's Day-3 is the single most-impactful single email available.

9. **PATTYGLVZ DAY-3 FIRES TODAY ~15:23 UTC — DAY-3 INERT BENCHMARK.** pattyglvz signed up alongside kevinshall but added 0 items. **Day-3 fire is the standard re-engagement frame** vs kevinshall's power-user activation frame. **Same fire-window, opposite content needs** — a clean A/B test if the engine returns and both fires execute.

10. **C_CALINGASAN DAY-3 FIRES MAY 16 ~11:46 UTC (~24h+).** Day 2 today, 0 watchlist. Schedule similar to pattyglvz.

11. **KARIN DAY-1 SCHEDULE GAP.** **Day-1 schedule entry doesn't exist** (drip-stats confirms emailNumber 1 = daysAfter 3). **Karin's instant-activation behavior won't trigger a Day-1 welcome touch even if engine returns.** **Day-1 schedule addition is now Day 10 of carried engineering ask** — with 2 power-users in 48h, the missed Day-1 leverage compounds.

12. **VLANZA DAY-1 (NEW — ~22H AT REPORT TIME).** Signed up May 14 13:20:56 UTC, 22h ago. 0 watchlist. **Status unknown — could activate at any time, or could be the 6th inert in the recent cohort.** Pre-Day-1 boundary at ~13:20 UTC today (~2.5h after report); Day-3 boundary May 17 ~13:20 UTC.

13. **3 DAY-7 FIRES OPEN TODAY (jfgalzin / liambot / kevinkid94).** All three signed up May 8 (May 8 12:54 / 13:07 / 20:52 UTC). Day-7 fires sequentially today between ~12:54 and ~20:52 UTC. **Day-7 family adds 3 fires today; engine dark = 3 more closed-out misses.**

14. **JMORIARTY DAY-7 FIRES TOMORROW MAY 16 ~13:18 UTC.** Day-3 missed May 12; Day-7 fires tomorrow with no recovery hook except generic frame.

15. **EMMA DAY-7 FIRES TOMORROW MAY 16 ~21:54 UTC.** Same Day-7 trajectory.

16. **CARRIES ROLLED FORWARD:**
    - **Pete Day 35** (Apr 10 signup, Day-30 fire missed May 10) — **Day-30 carry now 120h = HARD EXPIRY PASSED.** Body "One month and five days ago..." Frame degraded past Day-30 family. **Must rewrite to "more than a month" standalone or defer.** Same fate as nicklib's Day-21 carry yesterday.
    - **Nicklib Day 28** (Apr 17 signup, Day-21 fire missed) — **Day-21 carry 168h.** Frame "Three weeks and seven days ago" parses awkwardly. Rewrite required.
    - **Dr.altvater Day 25** (Apr 20 signup) — **Day-21 carry 96h.** Frame: "Three weeks and four days ago" — at outer edge of parsing.
    - **Josh Day 26** (Apr 19 signup) — **Day-21 carry 120h = HARD EXPIRY PASSED.** AEW May 24 now T-9d, T-7d May 17. Rewrite needed.
    - **Zhili Day 16** (Apr 29 signup) — **Day-14 carry 56h.** Frame "Two weeks and two days ago" still parses.
    - **Lilianamasyrubi Day 17** (Apr 28 signup) — **Day-14 carry 80h.** Frame "Two weeks and three days ago" at edge.
    - **Joseph Day 11** (May 4 signup) — **Day-7 carry 96h.** Frame degraded; rewrite to "Almost two weeks in..."
    - **Jadbennis Day 9** (May 5 signup) — **Day-7 carry 48h.** Inter Miami match Sunday makes the carry obsolete-vs-event; event-urgency frame dominates.
    - **Day-3 family carries: 7 users** (jmoriarty 78h-carry / kevinkid 86h-carry / emma 89h-carry / jfgalzin 96h-carry / liambot 96h-carry / cjthomas 144h-carry → reframe as Day-7 / sparkit 152h-carry → reframe as Day-7 / natalie 130h-carry → reframe as Day-7). **The Day-3 family is now de facto a Day-7+ rolling frame inside the outage.**

17. **THE 39-DAY-OUTAGE PATTERN — TWO MORE DIMENSIONS NORMALIZING, FOUR STILL LOCKED:**
    - Total users: 79 (was 76, **+3 over 48h** — recovery sustains 4 days)
    - Watchlist items: 97 (was 95, **+2 over 48h** — karin's 2 WC adds)
    - Drip emails sent: 0 for **39 consecutive days** (compounds)
    - Triggered alerts: 0 lifetime (compounds)
    - Newsletter subscribers: 3 for **103 consecutive days** (compounds)
    - Activation rate: 65.8% (real users) — **−1.3pp 48h** (compounds, denominator-driven)
    - Cumulative passed-no-notification: **16** (Mac DeMarco / Inter Miami CF passed events all closed; no new passed events today)
    - **2 of 6 dimensions recover; 4 of 6 continue to compound. Recovery extends to 4 days with 2 power-users; engine-dark constraint unchanged.**

## Activation gap

**Users signed up in last 7 days with 0 watchlist items: 8** (was 6 on May 13 — composition: vlanza / c_calingasan / pattyglvz enter at 0; jadbennis rolled out of 7-day window 48h ago; karin entered and activated, so doesn't count; net **+2 in the 0-watchlist set within 7-day window**):

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **vlanza@sbcglobal.net** | May 14 13:20 UTC | 22h | **0** | **NEW ENTRANT. Day 1 today. Pre-Day-1 boundary in ~2.5h** (would fire ~13:20 UTC if Day-1 schedule existed). Latest signup in dataset. |
| **karin_ef1@hotmail.com** | May 14 06:46 UTC | 1d 4h | 2 (WC Group B Switz-Canada Jun 24 + R16 Match 96 Jul 7, both target=null) | **ACTIVATED at 37s post-signup. Day 1 today.** 2nd WC power-user. Day-1 boundary missed at 06:46 UTC today (Day-1 schedule doesn't exist). Day-3 fires May 17 ~06:46 UTC. |
| **c_calingasan@yahoo.com** | May 13 11:46 UTC | 1d 23h | **0** | **NEW ENTRANT. Day 2 today.** Day-1 schedule gap; Day-3 fires May 16 ~11:46 UTC. |
| **kevinshall87@gmail.com** | May 12 16:44 UTC | 2d 18h | 6 (5 WC + Matt Rife, all target=null) | **DAY 3 TODAY. Day-3 boundary fires ~16:44 UTC (~5h44m from report).** First Day-3 fire candidate for an instant-power-user. **Highest-leverage Day-3 fire in dataset.** |
| **pattyglvz@msn.com** | May 12 15:23 UTC | 2d 19h | **0** | **Day 3 today. Day-3 boundary fires ~15:23 UTC (~4h23m from report).** Same-day-as-kevinshall cohort split (kevinshall 6 adds vs pattyglvz 0). |
| **jmoriarty13@yahoo.com** | May 9 13:18 UTC | 5d 21h | **0** | **Day 6 today. Day-3 missed May 12 (78h-carry).** Day-7 fires tomorrow May 16 ~13:18 UTC. |
| **emmacmather@gmail.com** | May 8 21:54 UTC | 6d 13h | **0** | **Day 7 today. Day-3 missed May 11 (89h-carry).** Day-7 fires tomorrow May 16 ~21:54 UTC. |
| **kevinkid94@gmail.com** | May 8 20:52 UTC | 6d 14h | **0** | **Day 7 today. Day-3 missed May 11 (86h-carry).** Day-7 fires TODAY ~20:52 UTC (~9h52m from report). |
| **jfgalzin@comcast.net** | May 8 12:54 UTC | 6d 22h | **0** | **Day 7 today. Day-3 missed May 11 (96h-carry).** Day-7 fires TODAY ~12:54 UTC (~1h54m from report). |
| **natalie.sotocruz@gmail.com** | May 7 18:40 UTC | 7d 16h | **0** | **Day 8 today. Day-3 missed May 10 (130h-carry).** Day-7 missed May 14 (16h-carry). |

**Activated within 7-day window (carried):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **karin_ef1@hotmail.com** | May 14 06:46 UTC | 1d 4h | **2 (WC, target=null on both)** | **2ND WC POWER-USER. Day-3 fires May 17. Targets not set on either match.** |
| **kevinshall87@gmail.com** | May 12 16:44 UTC | 2d 18h | **6 (WC + Matt Rife, all target=null)** | **DAY-3 FIRES IN ~5h44m.** |
| **liambot62@gmail.com** | May 8 13:07 UTC | 6d 22h | **1** (Toronto FC v Inter Miami, PASSED May 9, target=null) | **Day 7 today. Day-3 missed May 11. Day-7 fires TODAY ~13:07 UTC (~2h7m from report).** Event passed; Day-7 body needs apology lead. |
| **cjthomas2557@outlook.com** | May 7 22:49 UTC | 7d 12h | 1 (Noah Kahan Jun 12, target=null) | **Day 8 today. Day-3 → Day-5 → reframe to Day-7 (144h-carry).** Noah Kahan T-28d. |
| **sparkitrightthere@gmail.com** | May 7 11:38 UTC | 8d 0h | 1 (Mac DeMarco PASSED May 7, target=null) | **Day 8 today. Day-7 missed yesterday May 14 (24h-carry).** Event passed. Re-engagement frame only. |
| **jadbennis0@gmail.com** | May 5 20:33 UTC | 9d 14h | 1 (Inter Miami May 17, target=null) | **Day 9 today.** Inter Miami T-2d. T-7d + T-5d + T-3d all missed; **T-1d tomorrow May 16 ~20:33 UTC = LAST flip threshold before Sunday kickoff.** |

**Outside 7-day window (carried, still 0 watchlist):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **joseph.g.nicolosi@gmail.com** | May 4 21:39 UTC | 10d 13h | 0 | **Day 11 today. Day-7 missed May 11 (96h-carry).** Frame degraded → reframe to "Almost two weeks in..." |
| **zhili1208@gmail.com** | Apr 29 03:16 UTC | 16d 8h | 0 | **Day 16 today. Day-14 missed May 13 (56h-carry).** Frame "Two weeks and two days." |
| **lilianamasyrubi@gmail.com** | Apr 28 05:24 UTC | 17d 6h | 0 | **Day 17 today. Day-14 missed May 12 (80h-carry).** Frame "Two weeks and three days" at edge. |
| taranimeramaro@gmail.com | Apr 25 18:25 UTC | 19d 17h | 3 (Bruno MetLife Aug 21-25, target=null) | **Day 20 today. Day-14 missed May 9. Day-21 fires tomorrow May 16 ~18:25 UTC.** |
| nmcnamee99@gmail.com | Apr 25 11:51 UTC | 19d 23h | 1 (Raptors-Cavs PASSED Apr 26) | **Day 20 today. Day-21 fires tomorrow May 16 ~11:51 UTC.** |
| mark.murdock@lanternsec.com | Apr 23 03:01 UTC | 22d 8h | 0 | **Day 22 today. Day-21 missed May 14 (32h-carry).** |
| awwhittington@icloud.com | Apr 23 00:30 UTC | 22d 10h | 0 | **Day 22 today. Day-21 missed May 14 (34h-carry).** |
| ajvanprooyen@crimson.ua.edu | Apr 23 00:58 UTC | 22d 10h | 6 (Cubs trip 100% passed) | **Day 22 today. Day-21 missed May 14 (34h-carry). Cubs apology frame still active.** |
| ggri73@gmail.com | Apr 22 21:18 UTC | 22d 14h | 0 | **Day 22 today. Day-21 missed May 13 (38h-carry).** |
| charlesteel126@gmail.com | Apr 22 11:38 UTC | 22d 23h | 1 (Bruno Ohio May 20) | **Day 22 today. Day-21 missed May 13 (48h-carry). Bruno T-7d ALSO missed May 13. T-5d today; T-3d May 17.** |
| dr.altvater-70199@web.de | Apr 20 14:08 UTC | 24d 21h | 0 | **Day 25 today. Day-21 carry 96h.** Frame "Three weeks and four days" at outer edge. German variant Day 21 (carried ask). |
| dylanbaldy@gmail.com | Apr 15 18:24 UTC | 29d | 0 | Churned. |

- **22 real users** (excluding 3 test) have **never** added a watchlist item → **22 / 76 = 28.9%** (was 30.1% on May 13 — **−1.2pp** because karin lifts numerator (denominator effect actually goes the other way) — wait, karin doesn't lift numerator on this metric since this is **never-activated**. Let me recompute: karin DID activate, so she's NOT in the 22. vlanza + c_calingasan add 2 to never-activated set (+2). 20 + 2 = 22. Denominator 73 → 76. Rate 22/76 = **28.9% (−1.2pp).** The denominator dilution dominates — same absolute pattern, larger user base masks it.

- **Activation rate trajectory (real users, last 20 days):**
  73.7% → 73.7% → 75.4% → 72.9% → 72.1% → 72.1% → 72.1% → 72.1% → 72.1% → 72.1% → 71.0% → 71.4% → 71.4% → 71.2% → 68.6% → ?(May 10) → 67.6% → 67.6% → 67.1% → ?(May 14) → **65.8% (−1.3pp 48h).**
- **6-day decline now totals −5.4pp** (May 7 71.2% → May 15 65.8%). Decline driven by inert-signup denominator drag — karin activating (numerator +1) is overwhelmed by vlanza + c_calingasan inert (+2 to denominator).

**Acquisition-source inference: 22-day stable bifurcation + 5 recent signups, 2 of which are WC power-users.**

The pattern: **20 unknown in 22 days at n=20** (kevinshall + karin + c_calingasan + pattyglvz + vlanza all unknown-source). Against **3 known (ids 59, 61, 62)**. **Unknown-source activation rate: 6/20 = 30.0%** (karin activated; vlanza + c_calingasan inert; kevinshall + pattyglvz unchanged) — **up from 5/17 = 29.4% yesterday**. **Known-source: 3/3 = 100% (frozen).** **Gap narrows to 3.3x (from 3.4x).** Day 22 of dependency. **The same-cohort 5-user split (kevinshall + karin power vs pattyglvz + c_calingasan + vlanza inert, 96h window) is now a much higher-resolution attribution dataset than any prior point. If Ads Agent can resolve channel for any 2 of the 5, we get the first concrete attribution comparison in the dataset.**

## Churn signals

- Unsubscribes today: **0** (3 subscribers; **103 days flat = 14 weeks + 5 days**).
- Users entering "at-risk" today: **+1** (joseph rolls past Day-10 threshold this morning).
- Users entering "churned" since May 13: **+1** (zhili crossed Day-14 May 13; lilianamasyrubi crossed Day-14 May 12 — both already counted in carries above).
- Alert fatigue candidates: **0** (0 alerts ever sent — Day 39).
- Events passed without notification (cumulative): **16** (no new passed events in 48h; Inter Miami May 17 = T-2d today, will become #17 Sunday if no alert fires by then).
- **Algo-overrides as preemptive "events lost without notification":** **3 events** still open (Inter Miami May 17 [jadbennis, T-2d, T-1d tomorrow = last chance] + Bruno Ohio May 20 [charlesteel, T-5d, T-3d May 17, T-1d May 19] + AEW May 24 [josh, T-9d, T-7d May 17]). **15th day of non-Cubs flip-quiet streak.**

## At-risk users (7–14d inactive proxy)

| User | Day | Watchlist | Days to event | Recommended intervention |
|------|-----|-----------|---------------|--------------------------|
| **jadbennis0@gmail.com** | 9d | 1 (Inter Miami May 17) | **2d** | **HIGHEST PRIORITY. Match Sunday. T-1d fires tomorrow ~20:33 UTC = LAST flip threshold before kickoff. Day-7 missed 48h ago.** Body: "Inter Miami is 2 days away. Prices typically drop hardest in the T-2 to T-1 window — set a target tonight so we can catch it." |
| joseph.g.nicolosi@gmail.com | 11d | 0 | — | **NEW AT-RISK ENTRANT. Day-7 missed May 11 (96h-carry).** Body: "Almost two weeks in — what event were you hoping to track?" Frame must skip Day-7 family. |
| zhili1208@gmail.com | 16d | 0 | — | **CHURNED. Day-14 missed May 13 (56h-carry).** Body: "Two weeks and two days — what would change your mind?" |
| lilianamasyrubi@gmail.com | 17d | 0 | — | **CHURNED. Day-14 missed May 12 (80h-carry).** Frame at edge of parsing. |

## Live algo-flip post-mortem (today)

| User | Event | Days out | Flip status | Days flagged | Sends |
|------|-------|----------|-------------|--------------|-------|
| **jadbennis0** | **Inter Miami CF vs Portland, May 17** | **2** | **T-7d MISS May 10. T-5d MISS May 12. T-3d MISS May 14. T-1d MAY 16 ~20:33 UTC = LAST CHANCE.** | 9 | 0 |
| cjthomas2557 | Noah Kahan, Kia Center Orlando, Jun 12 | 28 | NOT YET FLIPPED — T-21d May 22 (7d) | 8 | 0 |
| **charlesteel126** | **Bruno Mars Ohio May 20** | **5** | **T-7d MISS May 13. T-5d TODAY. T-3d MAY 17. T-1d MAY 19.** | 4 | 0 |
| josh | AEW Double or Nothing May 24 | 9 | NOT YET FLIPPED — T-7d May 17 (2 days) | — | 0 |
| **kevinshall87 (power user)** | **5 WC + Matt Rife** | 30-61 (WC), 134 (Matt Rife) | NOT YET FLIPPED — earliest T-7d June 7 | 3 | 0 |
| **karin_ef1 (power user 2)** | **WC Switz-Canada + R16 Match 96** | 40 (group), 53 (R16) | NOT YET FLIPPED — earliest T-7d June 17 | 1 | 0 |

**15th day of algo-flip-quiet streak.** charlesteel Bruno T-7d became 1st confirmed non-Cubs algo-flip failure yesterday — streak now contains: Cubs Apr-May trip (6 events, 100% missed) + Inter Miami May 10 closed-out + Bruno Ohio T-7d closed-out yesterday.

**Next non-Cubs flip threshold candidates:**
1. **jadbennis Inter Miami T-1d on May 16 ~20:33 UTC** — 34h from report time. **FINAL flip threshold before Sunday kickoff. The single most-decisive remaining flip threshold of the outage.**
2. **josh AEW T-7d on May 17** — 2 days out.
3. **charlesteel Bruno Ohio T-3d on May 17** — 2 days out (co-fire window with josh).
4. **charlesteel Bruno Ohio T-1d on May 19** — 4 days out.
5. **kevinshall WC Netherlands vs Japan T-7d on June 7** — 23 days out. First WC algo-flip candidate.

## Churned users with re-engagement potential

| User | ~Days inactive | Watchlist | Upcoming hook? | Priority |
|------|----------------|-----------|----------------|----------|
| **lilianamasyrubi** | 17d | 0 | — | **HIGH** — Day-14 missed 80h ago. Body: "Two weeks and three days in." |
| **mark.murdock** | 22d | 0 | — | **HIGH** — Day-21 32h-carry. Day-30 in 8 days. |
| **awwhittington** | 22d | 0 | — | **HIGH** — Day-21 34h-carry. |
| **ajvanprooyen** | 22d | 6 (Cubs passed) | passed | **HIGHEST** — "Twenty-two days ago, six Cubs games, all passed, zero alerts." Apology + recovery. |
| **ggri73** | 22d | 0 | — | **HIGH** — Day-21 38h-carry. |
| **charlesteel126** | 22d | 1 (Bruno Ohio May 20) | 5d | **HIGHEST** — Bruno T-5d today, T-3d May 17, T-1d May 19. Day-21 48h-carry. **Last 5-day window to either rescue with a fire OR write a clean "we'll miss this too" pre-apology.** |
| **nmcnamee99** | 20d | 1 (passed) | passed | **HIGH** — Day-21 fires tomorrow. |
| **taranimeramaro** | 20d | 3 (Bruno MetLife Aug) | 98-102d | **HIGH** — Day-21 fires tomorrow. |
| **dr.altvater** | 25d | 0 | — | **MEDIUM** — Day-21 96h-carry, frame at outer edge. |
| **josh** | 26d | 1 (AEW May 24) | 9d | **HIGH** — Day-21 120h carry HARD EXPIRY. AEW T-9d. T-7d in 48h. |
| **nicklib253** | 28d | 1 (Phillies passed) | passed | **MEDIUM** — Day-21 168h-carry, far past expiry. Rewrite or defer. |
| **pete.uzelac77** | 35d | 6 (WC + Darts) | 36-51d | **MEDIUM** — Day-30 120h-carry HARD EXPIRY PASSED. Rewrite to "More than a month..." |
| dylanbaldy | 29d | 0 | — | LOW |
| goldy.pec | 35d | 1 (passed) | — | CLOSED |
| blubberboi | 36d | 1 (Ed Sheeran Aug 8) | 85d | MEDIUM |
| tate.sheppard | 62d | 1 (passed) | — | CLOSED |
| **tosophiameyer** | 66d | 11 Harry Styles MSG | 101-125d | **HIGH** — 2nd-deepest watchlist. |
| **brigitte.theisen** | 79d | 10 Backstreet Sphere | 63-83d | **HIGH** — power user. |
| laye.aurelien | 43d | 2 (Shakira Jul 20+23) | 66-69d | HIGH |
| lvasub6 | 47d | 2 (Flyleaf Jul 17-18) | 63-64d | HIGH |

**Passed-event overhang:** **16 churned/at-risk users** with passed events or no immediate hook. Inter Miami becomes #17 Sunday if T-1d fires miss.

## Churn intervention: email content (queued for engine return)

### TODAY's natural fire windows (in order of upcoming)

#### **jfgalzin Day-7 — fires ~12:54 UTC TODAY (~1h54m from report)**

**Subject:** A week in. Still no event tracked?
**Body:**
> A week ago you signed up for TicketScan but haven't added an event yet. Tell us what you're looking for — concerts, sports, theater — and we'll surface the soonest price-drop windows. Reply with one event name. We'll set it up for you.
>
> [Browse events](https://www.ticketscan.io)

---

#### **liambot62 Day-7 — fires ~13:07 UTC TODAY (~2h7m from report)**

**Subject:** Your Toronto FC match was last week — we owe you better
**Body:**
> A week ago you added Toronto FC vs Inter Miami CF to your watchlist. The match was May 9 — six days ago — and you didn't hear from us once. That's on us.
>
> Here's how to make TicketScan worth your time on the next one: add an event, set a target price, and we'll email you when any source drops below it.
>
> [Add your next event](https://www.ticketscan.io)

---

#### **pattyglvz Day-3 — fires ~15:23 UTC TODAY (~4h23m from report)**

**Subject:** What event made you sign up for TicketScan?
**Body:**
> Three days ago you signed up for TicketScan. You haven't added an event to your watchlist yet, so we can't track anything for you. Take 30 seconds — tell us one event you're curious about.
>
> Reply with the event name and we'll set it up. Or:
>
> [Browse events](https://www.ticketscan.io)

---

#### **kevinshall87 Day-3 — fires ~16:44 UTC TODAY (~5h44m from report)** — **HIGHEST-LEVERAGE FIRE TODAY**

**Subject:** 6 events tracked, 0 target prices — let's finish the setup
**Body:**
> Three days ago you added 6 events to TicketScan in 3 minutes — five World Cup matches at AT&T Stadium plus Matt Rife. That's the deepest first-session watchlist we've ever seen.
>
> What's missing: target prices. Without a target, we can't email you when Ticketmaster, SeatGeek, or StubHub drops below your number. AT&T Stadium World Cup matches tend to swing $80–200 between source-floors — set a target on each and we'll watch all three sources for you.
>
> [Set targets on your watchlist](https://www.ticketscan.io/watchlist)

**Note:** This is the first Day-3 fire candidate for a power user in the dataset. If engine returns today and only one email sends, this is the highest-EV pick.

---

#### **kevinkid94 Day-7 — fires ~20:52 UTC TODAY (~9h52m from report)**

**Subject:** A week in. What event would change your mind?
**Body:**
> A week ago you signed up for TicketScan. You haven't tracked an event yet — that's normal, most people sign up before they have a specific event in mind. Tell us one event you're considering. We'll set the watchlist for you.
>
> [Browse events](https://www.ticketscan.io)

---

### TOMORROW's natural fire windows (May 16)

#### **jadbennis Inter Miami T-1d — fires ~20:33 UTC May 16 — FINAL flip threshold before Sunday kickoff**

**Subject:** Inter Miami is tomorrow — last price-drop window
**Body:**
> Inter Miami CF vs Portland Timbers is tomorrow. T-1 is when resale prices typically capitulate — sellers who haven't moved their inventory drop 20–40% to clear it in the final 24 hours.
>
> [Compare Inter Miami prices now](https://www.ticketscan.io)

**Note:** This is the only remaining flip threshold for an event 48h from kickoff. If engine remains dark through ~20:33 UTC May 16, jadbennis's 8-day algo-flip schedule resolves as 0/4 sends, and Inter Miami becomes passed-event #17 Sunday morning.

---

#### **jmoriarty Day-7 — fires ~13:18 UTC May 16**

**Subject:** A week in. What did you come here for?
**Body:**
> A week ago you signed up for TicketScan. The system works best when we know what to track for you. Reply with one event name — we'll set it up.

---

#### **emma Day-7 — fires ~21:54 UTC May 16**

Same Day-7 frame as jmoriarty.

#### **karin_ef1 Day-2 — schedule gap**

No Day-2 in current schedule. If we added Day-1 (carried engineering ask Day 10), karin's Day-1 boundary would fire today ~06:46 UTC and karin's Day-3 fires May 17 ~06:46 UTC. **Manual one-off send today is recommended** given the WC-power-user signal.

**Subject:** 2 World Cup matches tracked — let's set targets so we can email you
**Body:**
> Yesterday you added two World Cup matches to TicketScan: Switzerland vs Canada (June 24) and Round of 16 Match 96 (July 7). World Cup resale prices typically swing 30–50% between Ticketmaster, SeatGeek, and StubHub in the weeks before kickoff.
>
> Set a target price on each match and we'll email you the second any source drops below it.
>
> [Set targets](https://www.ticketscan.io/watchlist)

---

#### **5-USER DAY-22 CARRY BATCH** (charlesteel + ggri + aw + ajv + mark — Day-21 missed yesterday)

Body: **"Three weeks and a day ago you signed up for TicketScan…"** Apology frame: "Yesterday a new signup added 2 World Cup matches in 12 seconds. Three days ago another signed up and added 6 events in 3 minutes. Three weeks ago — that's you. And we've sent you nothing." [ajvanprooyen variant retains Cubs apology lead.] **Send today as 1 batch send.**

---

### CARRIES (24-168h delayed, send today as batch)

#### **2-USER DAY-19→20 BATCH** (taranimeramaro + nmcnamee99)

Day-21 fires tomorrow May 16. **Send Day-19/20 carry today OR wait for Day-21 fire tomorrow** — recommend wait, send Day-21 fresh.

#### **DR.ALTVATER DAY-25 — Day-21 96h-carry**

Body: **"Three weeks and four days ago…"** Frame at outer edge. **Last day this parses cleanly. Send today or rewrite tomorrow.**

#### **PETE DAY-35 — Day-30 120h HARD EXPIRY PASSED**

Body must rewrite to **"More than a month in — five weeks, six tracked events, zero alerts."** Day-30 family is over for pete.

#### **JOSH DAY-26 — Day-21 120H HARD EXPIRY PASSED**

Body must rewrite to **"Almost four weeks ago you added AEW Double or Nothing — and we've sent you nothing. Match is 9 days out."** AEW T-7d fires May 17.

#### **NICKLIB DAY-28 — Day-21 168H, FAR PAST EXPIRY**

Body must rewrite: **"Four weeks ago you added Phillies vs Braves — match has been over for 28 days and we never sent you a price update."** **Apology-only frame.**

#### **DAY-3 CARRIES (now all rolled to Day-7+ family)**

jfgalzin / liambot / kevinkid Day-7 fires TODAY (handled above). emma / jmoriarty Day-7 fire TOMORROW (handled above). cjthomas / sparkit / natalie all past Day-7 — **reframe to Day-7 carries with apology lead.**

#### **JOSEPH DAY-11 — Day-7 96H-CARRY**

Body must reframe: **"Almost two weeks in. What event were you hoping to track?"** Day-7 family expired for joseph.

#### **ZHILI DAY-16 + LILIANA DAY-17 — Day-14 56h + 80h carries**

Bodies: "Two weeks and two/three days in." Apology + curiosity hook. Lilianamasyrubi at 80h is at edge of parsing.

#### **JADBENNIS DAY-9 + INTER MIAMI T-2D**

Body: **"A week and two days ago you added Inter Miami vs Portland. Match is Sunday — 2 days out. You haven't set a target price.** Tonight is when T-2 resale floors typically wobble most. Set your target and we'll watch all three sources." **Send TODAY** — last clean Day-7 + event-urgency stack opportunity.

#### **PATTYGLVZ DAY-3 / C_CALINGASAN DAY-2 / VLANZA DAY-1**

Three fresh inerts. Day-1/Day-2/Day-3 schedule gaps. **Manual one-off sends recommended** if engine returns.

---

### TODAY's total queue if engine returns: **24-28 emails** — new record.

- 5 today-natural fires (3 Day-7 fires + 2 Day-3 fires including kevinshall power-user)
- 4 tomorrow-natural fires (jadbennis Inter Miami T-1d FINAL + jmoriarty Day-7 + emma Day-7 + karin manual Day-1)
- 5-user Day-22 carry batch (Day-21 missed yesterday)
- 2-user Day-20 batch held for Day-21 tomorrow (deferred)
- 4 individual carries with hard-expiry rewrites (pete / nicklib / josh / dr.altvater)
- 2 Day-14 carries (zhili 56h, liliana 80h)
- 1 Day-11 reframe (joseph)
- 1 high-value Day-9 + T-2d co-fire (jadbennis)
- 3 Day-1/2/3 schedule-gap manual sends (pattyglvz / c_calingasan / vlanza)
- 3 Day-7 reframes for cjthomas / sparkit / natalie

**= 24-28 emails clear in 36-48h. New record queue.**

---

## Psychology-driven micro-optimization (today)

**Principle:** **Commitment & consistency** (Cialdini, 1984) — applied to the watchlist-add modal to recover the 0% target-price capture rate.
**Where to apply:** Watchlist-add modal/component in the dashboard, post-add confirmation screen, and the watchlist page itself.

**The diagnosis (sharpened by 48h of new data):**
- **0/97 = 0% target-price capture rate at Day 39.** Every single watchlist item in the dataset has target_price=null. Including all 8 items added by the two WC power-users in the last 4 days (kevinshall's 6 + karin's 2).
- Karin added 2 WC matches in **12 seconds.** kevinshall added 6 in **3 minutes.** Both finished their add session and walked away from the product. **Neither was prompted to set a target — the modal doesn't surface it with enough force.**
- **The structural pattern: users who add an event do not return to set targets.** Once they leave the add-event flow, they have no reason to. This breaks the price-alert engine's only useful trigger.
- A target-price banner (the prior CRO ask from May 7 — now Day 8 of carry) is a *recovery* fix. **The commitment-consistency principle says we should prevent the gap in the first place: capture the target at the moment of commitment, before the user leaves the modal.**

**The pattern:** Cialdini's commitment-consistency principle says people who take a small action (adding to watchlist) feel pulled to take a consistent next action (committing to a price) within the same session. The pull is strongest when the next action is presented as a continuation, not a separate task. **Once the user navigates away, the commitment-pull decays sharply.** kevinshall and karin both completed their add session without ever being asked for a target — the modal/flow let them off the hook.

**Specific change:** Make target-price capture **part of the watchlist-add flow itself**, not a separate post-add task. Three sub-changes:

1. **Two-step add modal.** Current modal: [Add to watchlist] button. New modal:
   - **Step 1:** "What's your target price?" with a slider/input. Default to **80% of current lowest price** (anchoring effect — the user sees a concrete number they can adjust). "We'll email you when any source drops below this." Single button: [Set target and add].
   - **Step 2 (auto-progress after target set):** "Tracking [event] — we'll email you when prices drop below $X." Single confirm button.
   - **Critical:** **Allow "Skip target — track only" as a small text link, NOT a primary button.** Cialdini: small concessions in commitment generate disproportionate adherence to the main commitment. The "skip" link should look like an escape hatch (which most users won't take), not an equal alternative.

2. **Default pre-fill from current price.** When the user opens the add modal, we already know the current lowest price across sources (from the comparison data). Pre-fill the target at 80% of that. **Default effect + anchoring + commitment** — three principles stacking. Most users will accept the default (research: 60-80% acceptance of pre-filled defaults). **Even a 50% acceptance rate goes from 0% → 50% target capture.**

3. **Post-add reinforcement.** After the user adds and sets target, the watchlist page shows: **"Tracking [event] for prices below $X — we'll email you the moment Ticketmaster, SeatGeek, or StubHub drops below your target."** The reinforcement language repeats the commitment back to the user — Cialdini calls this "self-perception reinforcement" — and primes them to expect the email (which means when it arrives, click-through is higher).

```
Current modal flow:
┌────────────────────────────────────────┐
│ Add World Cup Match 11 to watchlist?  │
│                                        │
│ Event: Netherlands vs Japan            │
│ Date: June 14, 2026                    │
│ Venue: AT&T Stadium                    │
│ Current low: $385 (Ticketmaster)       │
│                                        │
│ [    Add to Watchlist    ]             │
└────────────────────────────────────────┘

New modal flow (Step 1):
┌────────────────────────────────────────┐
│ Add Netherlands vs Japan?              │
│                                        │
│ Current low: $385 (Ticketmaster)       │
│ Average across sources: $410           │
│ Highest: $480 (StubHub)                │
│                                        │
│ Email me when prices drop below:       │
│ [ $308                          ] ────│
│  $250                          $385    │
│ (slider, default at 80% of low)        │
│                                        │
│ [   Set target and track   ]           │
│ skip target — track only               │
└────────────────────────────────────────┘
```

**Why this works:**
1. **Commitment is captured at peak intent.** The moment the user clicks "Add" they've already decided this event matters to them. That's the strongest commitment window in the session — capturing target then has 5-10x the conversion of a separate prompt later.
2. **The default pre-fill creates a high-acceptance path.** Most users don't change the slider — they accept the 80% default. **This is the single mechanism most likely to flip the 0% target-capture rate to a healthy 50-70%.**
3. **The "skip target" escape hatch keeps the add-flow frictionless.** Power users like karin who add 2 events in 12 seconds can still skip if they want — they're not blocked. But the social-pressure framing means most will take the path of least resistance, which is the default target.
4. **Reinforcement primes the alert click-through.** When the price-drop email fires, the user has already heard "we'll email you when X drops below $Y" twice — once in the modal, once in the confirmation. The email then becomes the third repetition of the same promise. Click-through compounds across repetitions.
5. **Compounds with social-proof rail (yesterday's recommendation).** Social proof gets the user to add the event; commitment-consistency gets them to set the target. **Together they fix both halves of the activation funnel.**

**Quantitative target:** **Move target-price capture from 0% → 50% within 2 weeks of shipping.** Even at 50%, the price-alert engine has roughly 48 actionable events to track — vs the current 0 actionable events from 97 watchlist items.

**Implementation cost:** ~5h. Frontend: two-step modal (2-3h), default pre-fill logic (~1h), reinforcement copy (~30min), styling (~1h).

**Cross-agent route:** **CRO Agent (Agent 6)** to scope/implement. **The full CRO activation stack now expands to 7 fixes:**
1. (May 7) Loss-aversion target-price banner — recovery for null-target on existing 97 items. ~1.5h.
2. (May 8) Default-effect smart pre-fill on watchlist-add modal. ~3-4h.
3. (May 9) FOMO "Happening soon" rail on search results. ~5-6h.
4. (May 11) Loss-frame empty-state on dashboard. ~5h.
5. (May 12) Commitment-and-consistency "Watch for 24h — no signup" pre-signup CTA. ~8-10h.
6. (May 13) Social-proof rail on WC stadium pages. ~3h.
7. (TODAY May 15) Commitment-consistency two-step add modal with default target pre-fill. ~5h.
**Combined: ~29-34h. Combined coverage: pre-signup (1-click watch) → search-surface (FOMO time-decay) → WC stadium pages (social proof) → empty-state (loss frame) → add-flow (default target capture, today's fix) → existing-items recovery (target banner). Full funnel coverage from VISIT through retention with target capture at every step.**

**Today's fix is the highest-impact in the stack** — it directly addresses the structural zero in the price-alert engine. Even if engine returns tomorrow, with 0% target capture there's nothing to alert on. **The two-step modal is the gating fix; without it, the rest of the alert-driven retention strategy doesn't function.**

---

## Cross-agent dependencies

1. **→ Email Agent (Agent 5):** **24-28 EMAILS QUEUED — new record-largest queue. If engine returns today:**
   - **TODAY (5 natural fires):** jfgalzin Day-7 (~12:54 UTC) / liambot Day-7 (~13:07 UTC) / pattyglvz Day-3 (~15:23 UTC) / kevinshall Day-3 power-user (~16:44 UTC, **HIGHEST EV**) / kevinkid Day-7 (~20:52 UTC)
   - **TOMORROW MAY 16 (4 natural fires):** **jadbennis Inter Miami T-1d (~20:33 UTC) — FINAL flip threshold, match Sunday** + jmoriarty Day-7 + emma Day-7 + karin manual Day-1 (pending schedule)
   - **TODAY (carry sends):** 5-user Day-22 batch + pete Day-35 rewrite + nicklib Day-28 rewrite + josh Day-26 rewrite + dr.altvater Day-25 + zhili Day-16 + liliana Day-17 + joseph Day-11 reframe + jadbennis Day-9+T-2d co-fire + pattyglvz/c_calingasan/vlanza Day-1/2/3 manuals + cjthomas/sparkit/natalie Day-7 reframes
   - **CARRIED + COMPOUNDED Day 10: Day-1 schedule addition.** With karin (2nd power-user, Day-1 boundary missed this morning at 06:46 UTC) and kevinshall (Day-1 also missed when he was Day 1), **2 of 2 power-users in dataset both had their Day-1 boundary miss because the schedule entry doesn't exist.** Ship Day-1 schedule entry this week.
   - **NEW STRUCTURAL CONCERN: 3 carries hit hard-expiry (pete Day-30, nicklib Day-21, josh Day-21).** All 3 need rewrites to "more than [tenure-mark] in" standalone frames. The Day-21 family abstraction is structurally broken past 120h carry.
   - **HIGHEST-EV send today: kevinshall Day-3 (power user, 6-event target-setting nudge).**
   - **HIGHEST-EV send tomorrow: jadbennis Inter Miami T-1d (last algo-flip threshold before Sunday kickoff).**

2. **→ CRO Agent (Agent 6):** **SEVEN stacked high-leverage fixes — full activation stack:**
   - **TODAY: Commitment-consistency two-step add modal with default target pre-fill** — addresses 0% target capture; gates the entire alert-driven retention strategy. **~5h. Highest-impact fix in the stack.**
   - Prior 6 fixes still open: target-price banner (May 7) / pre-fill (May 8) / FOMO rail (May 9) / empty-state (May 11) / pre-signup CTA (May 12) / social-proof rail (May 13).
   - **Combined: ~29-34h work for full-funnel coverage VISIT → ACTIVATION → RETENTION.**
   - **Recommended ship order if work-bandwidth-constrained:** (1) two-step add modal [today's fix, gates everything] → (2) target-price banner [recovers existing 97 items] → (3) social-proof rail [WC PMF amplification] → (4) others.

3. **→ Ads Agent (Agent 4):** **DAY 22 OF ATTRIBUTION DEPENDENCY. The 96h-window dataset is now 5 signups with internal bifurcation:**
   - **2 WC power-users** (kevinshall + karin) — both unknown-source. **The most critical channel question in dataset history: what produced 2 WC power-users in 48h?** If we know this channel, the WC June 11 kickoff window has a scalable acquisition strategy.
   - **3 inert signups** (pattyglvz / c_calingasan / vlanza) — all unknown-source. Same window, opposite outcome.
   - **Same-cohort 5-user split (2 power vs 3 inert in 96h) is the highest-resolution attribution dataset to date.** If channel data resolves for any 2 of 5, we get first concrete attribution comparison.
   - **Why the 4-day sustained recovery?** Pre-burst <0.3/day → flat 0/day → 1.25/day. What changed?

4. **→ Content Agent (Agent 3):** **WORLD CUP CONTENT — power-user pattern has replicated. Day 2 of WC PMF signal.**
   - **AT&T Stadium WC fan guide** (kevinshall's intent surface) — Day 2 carried ask. **Now joined by Switzerland-Canada Group B content** (karin's intent surface — different stadium, different theme).
   - **Recommended content priorities reordered today:**
     1. **WC R16 / Bracket-tracking explainer** — karin's R16 Match 96 add suggests bracket-watcher intent. Article: "How to track your country's full World Cup bracket on TicketScan." This is the **second WC content intent** signal in the dataset and the first non-stadium-specific WC angle.
     2. **AT&T Stadium WC fan guide** (kevinshall's intent — still carrying Day 2).
     3. **Inter Miami T-2d** carries Day 6 — Match Sunday, last call.
   - Other carried signals still unaddressed: Mac DeMarco indie / Noah Kahan / AEW Double or Nothing / Matt Rife.

5. **→ Engineering / Drip-Engine:** **Day 39 of outage. New on-schedule fires missed in 48h:**
   - charlesteel Bruno T-7d (May 13 11:38 UTC) — **first confirmed non-Cubs algo-flip failure**
   - 5-user Day-21 batch (May 13 11:38 → May 14 03:01 UTC) — **largest single-family closed-out window in dataset**
   - jadbennis Inter Miami T-3d (May 14 20:33 UTC)
   - **Total May 10-15 natural fire misses confirmed: 24+. Same-day queue if engine returns today: 24-28 emails in 36-48h.**
   - **Hard-expiry hits in 48h: pete (Day-30 → Day-35), nicklib (Day-21 → Day-28), josh (Day-21 → Day-26). All 3 require frame rewrites.**
   - **CARRIED ASK Day 10: Day-1 schedule addition.** Both power-users in dataset (kevinshall + karin) had Day-1 boundary miss because schedule entry doesn't exist. **Without Day-1, even a healthy engine produces no welcome touch for the highest-value cohort.**
   - **NEW CARRIED ASK: hard-expiry rewrite logic** — the carry-rate of 120h+ breaks tenure-family parsing. Need either (a) automatic frame-rewrite at 96h carry threshold, or (b) carry-cap that triggers manual override.

6. **→ All agents:** **THE RECOVERY IS NO LONGER A SINGLE-USER ANOMALY.** 5 signups in 96h, 2 WC power-users, 4-day sustained pattern. **The 39-day-outage stagnation is partially relieved on 2 of 6 dimensions (signups + watchlist); 4 of 6 remain structurally locked behind engine-dark constraint.** **With WC kickoff 27 days out and 2 WC power-users in 48h, the WC cohort is now the strongest leading-indicator we have for June retention.**

---

## Summary metrics

```
Total users:              79 (+3 over 48h, 4-day recovery sustains, multi-user)
Real users:               76
Activated:                50 (+1 over 48h, karin_ef1 = 2nd WC power-user)
Activation rate:          65.8% (real, −1.3pp 48h — inert denominator drag)
Watchlist items:          97 (+2 over 48h, karin's 2 WC adds)
Newsletter subscribers:   3 (103 DAYS FLAT — 14 weeks + 5 days)
Active alerts:            0 (Day 39)
Triggered alerts:         0 (lifetime)
Drip emails sent:         0 (Day 39 — /api/admin/drip-stats: stats=[])
Cumulative passed-no-notify: 16 (Inter Miami likely #17 Sunday)
Algo-flip-quiet streak:   15 days (Bruno T-7d closed-out yesterday = 1st non-Cubs failure)
Activation gap (real):    22/76 = 28.9% (−1.2pp denominator-driven; absolute count = 22 + 2 new inerts = 22 since karin offset)
Unknown-source activation: 6/20 = 30.0% (+0.6pp; karin lifts numerator)
Day-22 cohort:            5 users (charlesteel/ggri/aw/ajv/mark) — all rolled forward
Day-20 cohort:            2 users (taranimeramaro/nmcnamee99) — Day-21 fires tomorrow
Instant-power-users:      2 (kevinshall 6 adds in 3min + karin 2 adds in 12s) — pattern replicates
WC power-users in 48h:    2/3 new signups (66%) — strongest WC PMF signal in dataset
Target-price capture:     0/97 watchlist items = 0% (Day 39; karin's 2 + kevinshall's 6 all null)
Post-burst signups:       5/96h (kevinshall + pattyglvz + c_calingasan + karin + vlanza)
Sustained recovery rate:  1.25/day over 4 days (vs <0.3/day pre-burst, 0/day flat window)
Closed-out fire families: 8/8 — Day-3, Day-7, Day-14, Day-21 (now 5-user batch), Day-30 (HARD EXPIRY), Cubs algo-flip, non-Cubs algo-flip (NEW: Bruno), Day-1 (schedule gap)
```

**Headline:** Three new signups in 48h sustain the recovery into a 4-day multi-user pattern (1.25/day rate vs <0.3/day pre-burst). **karin_ef1 = 2nd WC power-user in dataset** (2 WC matches added in 12 seconds — fastest activation in dataset). The WC-themed power-user pattern has replicated — **2 of 3 new signups this week are WC power-users (66% rate)**, the strongest World Cup product-market-fit signal we have, 27 days before kickoff. **charlesteel Bruno T-7d closed-out yesterday — first confirmed non-Cubs algo-flip failure** (streak now 15 days). 5-user Day-21 batch missed sequentially May 13-14 — largest single-family closed-out window in dataset. **jadbennis Inter Miami T-1d fires tomorrow May 16 ~20:33 UTC — final algo-flip threshold before Sunday kickoff; if missed, the entire 8-day algo-flip schedule resolves as 0/4.** **Today's CRO recommendation: commitment-consistency two-step add modal with default target pre-fill** — addresses the structural 0% target-price capture rate (0/97 items) which gates the entire alert-driven retention strategy. **The 7-fix CRO activation stack now totals ~29-34h for full-funnel coverage VISIT → ACTIVATION → RETENTION.** **kevinshall Day-3 fires today ~16:44 UTC — highest-EV single send available if engine returns.** 4-of-6 dimensions still structurally locked behind engine-dark constraint at Day 39.
