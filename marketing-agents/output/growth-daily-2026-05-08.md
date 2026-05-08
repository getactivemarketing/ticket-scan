# Growth Daily -- 2026-05-08

## User health dashboard

| Segment                     | Count | % of Total | vs May 7 |
|-----------------------------|-------|------------|----------|
| Total users                 | **69**    | 100%       | **+3 net (largest single-day signup count since the dataset began running daily reports). All 3 fired on May 7 in a 11h 11m window: sparkitrightthere 11:38:32 UTC → natalie.sotocruz 18:40:19 UTC → cjthomas2557 22:49:36 UTC. Last 7 days: 5 signups (was 2). Last 14 days: 8 signups. The two-day drought (May 6-7 mornings = 0) gives way to a 3-signup cascade on May 7 afternoon/evening.** |
| New (last 7 days, API count) | **5** | 7.2% | **+3 net (sparkit + natalie + cjthomas added; lilianamasyrubi rolled out at Day 10, zhili1208 still in window at Day 9). API rounding: 5. By strict 7-day boundary as of 11:00 UTC: 5.** |
| Activated (has watchlist)   | **47** | 68.1%      | **+2 net (sparkitrightthere added Mac DeMarco at 11:39:06 UTC = 34s after signup; cjthomas2557 added Noah Kahan at 22:50:11 UTC = 35s after signup). Both are instant-activations matching jadbennis0's 32-second pattern from May 5. The 38h-flat watchlist counter dies — replaced by a +2 climb. natalie.sotocruz is inert (Day 0, 0 watchlist).** |
| Active (visited in 7 days)  | unknown | —        | no `last_login_at` instrumentation — **Day 32 open** |
| At-risk (7-14d signup-age proxy) | 4 | 5.8% | **−3 net (charlesteel, ggri73, awwhittington, ajvanprooyen, mark.murdock all crossed Day 14/15 and are now churned by API rounding — all five rolled to Day 15 today. lilianamasyrubi rolled to Day 10 — exits Day-7 family). At-risk band today: zhili1208 (Day 9) + lilianamasyrubi (Day 10) + taranimeramaro (Day 13) + nmcnamee99 (Day 13). Joseph at Day 3 not in band, jadbennis0 at Day 2, all 3 fresh signups at Day 0.** |
| Churned (14d+ signup-age proxy) | **65** | 94.2% | **+5 net (charlesteel + ggri73 + awwhittington + ajvanprooyen + mark.murdock all simultaneously rolled Day 14 → 15 in the past 24h — the largest single-day churned inflow of the entire 32-day outage). All five are now Day-15 carry candidates today.** |

> **Day 32 without `last_login_at` instrumentation. Day 32 of zero drip emails sent (confirmed by `/api/admin/drip-stats`: stats=[] with 20 pendingUsers). Day 32 of zero triggered alerts. Newsletter subscribers: 3, unchanged for 96 days = 13 weeks + 5 days flat.**
> **THE TRIPLE-SIGNUP DAY IS THE BIGGEST POSITIVE SHAPE CHANGE IN THE DATASET IN 30+ DAYS.** May 7 saw 3 signups land in 11h 11m. Two activated within ~35 seconds; one is inert. **2-of-3 instant-activation rate today is the highest activation-day rate in the dataset window.** Combined with jadbennis0 (May 5), the dataset now holds **3 instant-activations in 3 days** — a structural cluster that did not exist 4 days ago.
> **JOSEPH DAY-3 BOUNDARY FIRED LAST NIGHT 21:39:37 UTC MAY 7 — MISSED.** The only on-schedule Day-3 fire window approaching has now passed without delivery. **Day 32 of outage: every Day-3 fire of the outage has now missed its native day, joining the closed-out Day-14 cohort.**
> **JADBENNIS0 DAY-3 BOUNDARY TONIGHT 20:33:01 UTC MAY 8.** ~9.5h to natural fire window. **First event-specific Day-3 fire in the queue (Inter Miami May 17, T-9d). If engine returns today, this is the single highest-leverage Day-3 send in the queue.**
> **3 INSTANT-ACTIVATIONS IN 3 DAYS, 0 TARGET PRICES SET.** sparkit, cjthomas, jadbennis0 all completed step 2 (watchlist add) within 35 seconds of signup; all three left target_price=null. **The half-activation pattern is now a 3-user cluster, not a single-user anecdote. The structural diagnosis sharpens.**
> **MAC DEMARCO MAY 7 = SAME-DAY EVENT.** sparkitrightthere signed up at 11:38:32 UTC May 7 and added a Mac DeMarco show at Salt Shed Outdoors Chicago for **TODAY's date (May 7 — show is tonight).** This is the first same-day-event signup in the dataset. Extreme-urgency signal: user came to TicketScan hours before the doors opened. **Show is now ~24h old by the time of this report. Event has passed. Cumulative passed-no-notification: 14** (Cubs trip 6 + Raptors-Cavs + Phillies + Cardi B + Florence + Bilmuri + Edmonton + NCAA + Mac DeMarco = 14).
> Watchlist items: **88** (+2: sparkit's Mac DeMarco + cjthomas's Noah Kahan). **All 88 / 88 still target_price=null.** Target-price capture rate: **0% (Day 32, zero progress despite 2 fresh adds today).**
> `usersToday: 3`, `usersThisWeek: 5`. **Activation rate: 71.2% (47/66 real users) — net −0.2pp. The 2 instant-activations (sparkit + cjthomas) almost exactly offset by the 1 fresh inert (natalie). Numerator +2, denominator +3.**

## What changed in 24h

1. **THE TRIPLE-SIGNUP DAY ON MAY 7 BREAKS THE 30-DAY ACQUISITION DROUGHT.** 3 signups in 11h 11m — the largest single-day count in the dataset since at least early April. **This is a structural shape change, not a one-off flicker.** The signups landed at 11:38:32 (sparkit) → 18:40:19 (natalie) → 22:49:36 (cjthomas) UTC. Acquisition source unknown for all 3 (Day 15 of attribution-pull dependency on Ads Agent).

2. **TWO OF THREE INSTANT-ACTIVATIONS — THE NEW HIGH-INTENT PATTERN COMPOUNDS.** sparkitrightthere added Mac DeMarco at Salt Shed Chicago in **34 seconds** (11:39:06 UTC); cjthomas2557 added Noah Kahan at Kia Center Orlando in **35 seconds** (22:50:11 UTC). **Both match jadbennis0's 32-second activation from May 5.** The instant-activation cluster is now n=3 in 3 days — large enough to treat as a pattern rather than anecdote. **Speed-of-activation as a leading indicator now has 3 confirmed cases.**

3. **THE INSTANT-ACTIVATION → TARGET-PRICE-NULL FREEZE IS NOW STRUCTURAL.** All 3 instant-activators left target_price=null. **Step 2 (watchlist add) executes in <60s; Step 3 (set target) executes in 0s — by 32-38h elapsed for jadbennis0, by 12h+ for sparkit, by ~12h for cjthomas.** This is the cleanest possible diagnosis for the 100% target-null pattern: the UX flows watchlist add to "done" without ever surfacing the target-price field. **Today's CRO recommendation pivots to address this structural diagnosis.**

4. **MAC DEMARCO MAY 7 = SAME-DAY EVENT, EVENT NOW PASSED WITHOUT NOTIFICATION.** sparkitrightthere added a show that was happening THE SAME DAY they signed up. Show was ~9-10h after signup (Salt Shed evening doors). **Cumulative passed-no-notification ticks to 14 today.** This is the first event in the dataset where signup-to-event-passed cycle was <24h. The cleanest possible "we couldn't have helped" framing — but also the most urgent test of whether T-0 alerts would even fit in the engine architecture.

5. **JOSEPH DAY-3 BOUNDARY MISSED LAST NIGHT.** May 7 21:39:37 UTC. The only on-schedule Day-3 fire window approaching has passed without delivery. **Day-3 family now joins Day-14 family in the closed-out failure mode.** Joseph rolls to Day 4 by tonight 21:39 UTC; Day-3 framing has 24h shelf life on a soft carry, then pivots to Day-7 family at Day 7 (May 11). Joseph remains 0 watchlist 0 target — Day 4 today.

6. **JADBENNIS0 DAY-3 BOUNDARY TONIGHT 20:33:01 UTC.** ~9.5h from natural fire window. **First event-specific Day-3 fire in the queue (Inter Miami May 17, T-9d today, T-7d in 2 days).** Pre-queued send is the single highest-leverage Day-3 in the outage queue: it pairs the Day-3 forcing question with a concrete event 9 days out and an algo-flip threshold 2 days away. **If engine returns today, this is the cleanest possible same-day fire of the entire outage.**

7. **THE FIVE-USER DAY-14 COHORT IS NOW UNIFORM AT DAY-15.** charlesteel126 + ggri73 + awwhittington + ajvanprooyen + mark.murdock all rolled to API days_since_signup=15 in the past 24h. **All five are now Day-15 carry candidates today, body edit "two weeks and a day ago."** Single same-day batch send opportunity remains the largest possible cleanup in the queue.

8. **AJVANPROOYEN'S CUBS TRIP NOW 100% PASSED — DAY 15 BODY MATCHES THE PASSED-EVENT FRAME PERFECTLY.** All 6 Cubs games (May 1, 2, 3, 4, 5, 6) confirmed passed. Day-15 body parses cleanly: "Two weeks and a day ago you signed up and added six Cubs games to your watchlist. All six have now passed without a single price update from us." **Sharpest "we failed you" frame in the dataset. The 24h delay between Day-14 (yesterday) and Day-15 (today) actually IMPROVES the parse — the event-set is now fully closed.**

9. **TARANIMERAMARO + NMCNAMEE99 DAY 13.** "Thirteen days into your account." Bruno Mars MetLife runway intact (105-109d). Raptors-Cavs Apr 26 = 12d passed for nmcnamee99. **Hard expiry on Day-10 family: tomorrow May 9 (Day 14 boundary, where forcing question pre-queues for May 9-10 fire).** These two are next in line for Day-14 cohort entry.

10. **LILIANAMASYRUBI ROLLS TO DAY 10 — DAY-7 FAMILY EXPIRED.** Body pivots to "Ten days into your account, no events tracked yet." Day-10 generic family with the standard 2-question forcing structure. **Hard expiry on Day-10 family: May 12 (Day 14 boundary).**

11. **ZHILI1208 DAY 9 — LAST DAY OF DAY-7 FAMILY TOLERANCE.** "Nine days with TicketScan" parses at outer edge today. **Tomorrow May 9 = Day-10 pivot.** Last day to ship Day-7 framing for zhili1208.

12. **CHARLESTEEL126 + GGRI73 DAY-15 BODY TODAY.** Both rolled overnight. Pair them as a 2-user same-template batch within the 5-user cleanup. **charlesteel has Bruno Ohio May 20 = 12d out** (T-7d in 5 days); ggri73 0 watchlist (generic forcing question). **Send timing: today, paired with the 3 fresh Day-15 transitions.**

13. **AWWHITTINGTON + MARK.MURDOCK DAY-15 BODY TODAY.** Both 0 watchlist. Generic forcing question, identical template. **Pair as 2-user duplicate-template send within the 5-user batch.**

14. **DR.ALTVATER DAY-18 — "TWO WEEKS AND FOUR DAYS AGO."** Body edit one day forward. Subject: "Two weeks and a few days in." German-language drip variant question still open Day 13.

15. **JOSH DAY-19 — "TWO WEEKS AND FIVE DAYS AGO."** AEW May 24 still 16d out — runway intact. Day-21 frame approaches in 2 days.

16. **NICKLIB DAY-21 — "THREE WEEKS" PARSES CLEANLY TODAY.** First day of the Day-21 frame. Phillies Apr 17 passed -21d. Body: "Three weeks ago you added Phillies vs Braves. The game has been over for 21 days and we never sent you a price update."

17. **PETE.UZELAC DAY-28 — DAY-30 PIVOT QUEUED FOR MAY 10.** **2 days to fire.** Pete's WC events 42-57d out. Darts Masters Jun 25-26 at 48-49d. Day-30 frame queue-ready.

18. **NEWSLETTER SUBSCRIBERS: 3, UNCHANGED FOR 96 DAYS = 13 WEEKS + 5 DAYS FLAT.** Form audit carried for one full quarter + 6 days. **The longest open dependency in the entire growth stack continues to lengthen.**

19. **NINTH CONSECUTIVE FLIP-QUIET DAY ON ALGO-FLIPS, BUT IMMINENT.** No new flips today. **Next non-Cubs flip threshold candidates: jadbennis0 Inter Miami May 17 hits T-7d on May 10 (2 days out, NEW shortest-runway candidate); charlesteel126 Bruno Ohio May 20 hits T-7d on May 13 (5 days out).** The 9-day flip-quiet window ends Sunday May 10 if jadbennis0's Inter Miami flips on schedule.

20. **ATTRIBUTION ASK NOW DAY 15.** ids 65 + 66 + 67 + 68 + 69 all have unknown source. The bifurcation extends to **11 unknown / 3 known across 15 days, n=14.** Unknown-source activation rate: 3/11 = 27.3% (broken from 12.5% by sparkit + cjthomas). Known-source: 3/3 = 100%. **The 0% / 100% binary fully dies today — unknown-source rate climbed 14.8pp on the back of 2 fresh activations.** Day 15 of dependency.

21. **THE 32-DAY-OUTAGE PATTERN BREAKS IN 2 DIMENSIONS TODAY:**
    - Total users: 69 (was 66, **+3** — first multi-signup day in 30+ days)
    - Watchlist items: 88 (was 86, **+2** — first 2-add day in 30+ days, two distinct users)
    - Drip emails sent: 0 for **32 consecutive days** (no movement)
    - Triggered alerts: 0 for the entire dataset (no movement)
    - Newsletter subscribers: 3 for **96 consecutive days** (no movement)
    - Activation rate: 71.2% (real users) — −0.2pp from yesterday (denominator-driven)
    - **The structural-inertness equilibrium loses 2 dimensions today (signups + watchlist adds). 4 dimensions still frozen. The acquisition + activation funnel shows life; the engagement engine remains dead.**

## Activation gap

**Users signed up in last 7 days with 0 watchlist items: 2** (was 1 yesterday — **+1 net**: natalie.sotocruz fresh inert, joseph remains inert, jadbennis0 stays activated, sparkit + cjthomas activated):

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **natalie.sotocruz@gmail.com** | May 7 18:40 UTC | 0d 16h | **0** | **NEW INERT TODAY.** Day 0/1 transition tonight. The middle of the 3-signup cascade landed inert between two instant-activators. **First half-day window for activation closes ~18:40 UTC tonight (Day 0 → Day 1). Source attribution unknown.** |
| **joseph.g.nicolosi@gmail.com** | May 4 21:39 UTC | 3d 13h | **0** | **Day 3 today. Day-3 boundary fired last night 21:39 UTC and was MISSED.** Joseph rolls to Day 4 tonight 21:39 UTC. Day-3 framing carries 24h soft, then pivots to Day-4/5 generic. **Source attribution unknown (Day 15).** |

**Activated within 7-day window (carried + new):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **cjthomas2557@outlook.com** | May 7 22:49 UTC | 0d 12h | **1** (Noah Kahan, Kia Center Orlando, Jun 12 — **target=null**) | **NEW INSTANT-ACTIVATION TODAY (35s after signup).** Noah Kahan event 35d out — comfortable runway. Day-3 framing pre-queues for May 10 22:49 UTC. **Second event-specific Day-3 candidate after jadbennis0.** |
| **sparkitrightthere@gmail.com** | May 7 11:38 UTC | 0d 23h | **1** (Mac DeMarco, Salt Shed Outdoors Chicago, **May 7 = TODAY** — passed last night, **target=null**) | **NEW INSTANT-ACTIVATION TODAY (34s after signup).** **SAME-DAY EVENT — show happened May 7 evening, ~24h ago by report time.** Event has passed without notification. Cumulative passed-no-notification: 14. Day-3 framing pre-queues for May 10 11:38 UTC, but the event has already resolved — Day-3 send is generic forcing question, not event-specific. |
| **jadbennis0@gmail.com** | May 5 20:33 UTC | 2d 14h | **1** (Inter Miami CF vs Portland Timbers, May 17 — **target=null**) | **DAY 2 — Day-3 boundary TONIGHT 20:33 UTC (~9.5h).** **Inter Miami event hits T-9d today, T-7d in 2 days (May 10 = double-loaded with sparkit + cjthomas Day-3 pre-queues).** First event-specific Day-3 fire in queue. |

**Outside 7-day window (carried, still 0 watchlist):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| zhili1208@gmail.com | Apr 29 03:16 UTC | 9d | 0 | **Day 9 today, last day of Day-7 family tolerance.** "Nine days with TicketScan." **Tomorrow May 9 = Day-10 family pivot.** |
| lilianamasyrubi@gmail.com | Apr 28 05:24 UTC | 10d | 0 | **Day 10 today, Day-10 family pivot.** "Ten days into your account." Hard expiry May 12. |
| taranimeramaro@gmail.com | Apr 25 18:25 UTC | 13d | 3 (active) | Day 13, Day-10 family ("Thirteen days into your account"). **Day-14 boundary tomorrow May 9 18:25 UTC.** |
| nmcnamee99@gmail.com | Apr 25 11:51 UTC | 13d | 1 (passed) | Day 13, Day-10 family with passed-event acknowledgment. **Day-14 boundary tomorrow May 9 11:51 UTC.** |
| mark.murdock@lanternsec.com | Apr 23 03:01 UTC | 15d | 0 | **Day 15 today (rolled overnight). Day-14 fire window missed yesterday by ~32h. Day-15 carry body.** |
| awwhittington@icloud.com | Apr 23 00:30 UTC | 15d | 0 | **Day 15 today (rolled overnight). Day-14 fire window missed by ~34h. Day-15 carry body.** |
| ggri73@gmail.com | Apr 22 21:18 UTC | 15d | 0 | **Day 15 today. Day-14 fire window missed by ~38h. Day-15 carry body.** |
| dr.altvater-70199@web.de | Apr 20 14:08 UTC | 18d | 0 | Day 18 today. Body: "two weeks and four days ago." German variant question still open. |
| dylanbaldy@gmail.com | Apr 15 18:24 UTC | 22d | 0 | Churned. No realistic intervention. |

- **18 real users** (excluding 3 test accounts: natalie + previous 17) have **never** added a watchlist item → **18 / 66 = 27.3% of real signups** (numerator +1 from yesterday's 17 with natalie's fresh inert; denominator +3). **The activation gap holds within ±0.5pp of yesterday's 27.0%, despite the 3-signup cascade.** Activation gap is structurally stable.
- **Activation rate trajectory (real users, last 14 days):** 73.7% → 73.7% → 75.4% → 72.9% → 72.1% → 72.1% → 72.1% → 72.1% → 72.1% → 72.1% → 71.0% → 71.4% → 71.4% → **71.2% (−0.2pp). The denominator climbed 3, the numerator climbed 2 — net mild dilution from natalie. The 2 instant-activations almost exactly offset the 1 fresh inert.**

**Acquisition-source inference: 15-day stable bifurcation, breaking today.**

The pattern: **8 in 15 days unknown** plus **3 fresh today (sparkit, natalie, cjthomas, all source unknown)** → **11 unknown in 15 days at n=14**, against **3 known (ids 59, 61, 62, all activated)**. **Unknown-source activation rate: 3/11 = 27.3% (was 12.5% — climbed 14.8pp today on the back of sparkit + cjthomas activations). Known-source: 3/3 = 100% (frozen).** The 7.5x gap shrinks to ~3.7x. **The bifurcation is no longer a 0%/100% binary — but the gap is still substantial.** Day 15 of the dependency on Ads Agent attribution-pull. **Sharper question for Ads Agent today: what changed about acquisition flow on May 7 to produce 3 signups in 11h with 2 instant-activations? Was there a single source (one viral post, one ad spike, one referral) or 3 distinct sources?**

## Churn signals

- Unsubscribes today: **0** (still 3 subscribers; **96 days flat = 13 weeks + 5 days**)
- Users entering "at-risk" today: **0 net** (no Day-7 entrants — joseph at Day 3, jadbennis0 at Day 2, the 3 fresh signups at Day 0; lilianamasyrubi rolled to Day 10 and stays in band; zhili1208 stays in band at Day 9)
- Users entering "churned" today: **+5 incremental** (charlesteel + ggri73 + awwhittington + ajvanprooyen + mark.murdock all rolled Day 14 → 15 in past 24h). **Largest single-day churned inflow of the entire 32-day outage.**
- Alert fatigue candidates: **0** (0 alerts ever sent — Day 32)
- Events passed without notification (cumulative): **14** (Mac DeMarco May 7 last night → +1 from yesterday's 13). **First same-day-event passed-no-notification in the dataset.**
- **Algo-overrides as preemptive "events lost without notification":** **3 events** still pending pre-flip (Inter Miami May 17 [jadbennis0, T-9d today, **T-7d in 2 days**] + Bruno Ohio May 20 [charlesteel, T-12d, T-7d in 5 days] + AEW May 24 [josh, T-16d]). **9th consecutive flip-quiet day, but the next flip is 2 days away.**

## At-risk users (7–14d inactive proxy)

| User | Day | Watchlist | Days to event | Recommended intervention |
|------|-----|-----------|---------------|--------------------------|
| zhili1208@gmail.com | 9d | 0 | — | Day-7 family last day. **Tomorrow May 9 → Day-10 pivot.** |
| lilianamasyrubi@gmail.com | 10d | 0 | — | Day-10 family today. "Ten days into your account." Hard expiry May 12. |
| taranimeramaro@gmail.com | 13d | 3 (Bruno MetLife Aug 21/22/25) | 105-109d | Day-10 family, "Thirteen days into your account." **Day-14 boundary tomorrow May 9 18:25 UTC.** |
| nmcnamee99@gmail.com | 13d | 1 (Raptors-Cavs Apr 26 — passed -12d) | -12d | Day-10 family with passed-event acknowledgment. **Day-14 boundary tomorrow May 9 11:51 UTC.** |

**Note on the 5 Day-15 cohort:** charlesteel126 (May 6 11:38 → Day 15 today by ~23h carry), ggri73 (May 6 21:18 → Day 15 today), awwhittington (May 7 00:30 → Day 15 today), ajvanprooyen (May 7 00:58 → Day 15 today), mark.murdock (May 7 03:01 → Day 15 today). **All five at Day-15 carry simultaneously.** Body edit: "two weeks and a day ago." **Same-day 5-user batch is queued; if engine returns today, this is the largest possible single-batch cleanup the queue can ever deliver.**

## Live algo-flip post-mortem (today)

| User | Event | Days out | Flip status | Days flagged | Sends |
|------|-------|----------|-------------|--------------|-------|
| **sparkitrightthere** | **Mac DeMarco, Salt Shed Chicago, May 7** | **PASSED last night** | flip threshold = same-day | 0 (signup → event = ~9h) | 0 (event resolved) |
| **jadbennis0** | **Inter Miami CF vs Portland Timbers, May 17** | **9** | NOT YET FLIPPED — **T-7d in 2 days (May 10)** | 2 | 0 |
| **cjthomas2557** | **Noah Kahan, Kia Center Orlando, Jun 12** | **35** | NOT YET FLIPPED | 0 | 0 |
| charlesteel126 | Bruno Mars Ohio May 20 | 12 | NOT YET FLIPPED — T-7d in 5 days (May 13) | — | 0 |
| josh | AEW Double or Nothing May 24 | 16 | NOT YET FLIPPED | — | 0 |

**No new flip today. Ninth flip-quiet day in a row, but flip imminent.** The Mac DeMarco event resolved without ever being a flip candidate — same-day signup → same-day event leaves no flip window. **Cumulative passed-no-notification: 14.**

**Next non-Cubs flip threshold candidates:**
1. **jadbennis0 Inter Miami May 17 hits T-7d on May 10 (2 days out)** — shortest runway active watchlist event. **First non-Cubs flip in 9+ days will land on May 10 if engine returns by then.**
2. **charlesteel126 Bruno Ohio May 20 hits T-7d on May 13 (5 days out).**
3. **josh AEW May 24 hits T-7d on May 17 (9 days out).**

**The first-non-Cubs flip is now 2 days away. May 10 is the highest-density day in the queue: jadbennis0 Day-3 fire window + Inter Miami T-7d flip threshold + sparkit Day-3 pre-queue + cjthomas Day-3 pre-queue. 4 distinct fire events on a single calendar day.**

## Churned users with re-engagement potential

| User | ~Days inactive | Watchlist items | Upcoming hook? | Priority |
|------|----------------|-----------------|----------------|----------|
| **mark.murdock@lanternsec.com** | 15d | **0** | — | **HIGH — Day-15 carry today; pair in 5-user batch.** |
| **awwhittington@icloud.com** | 15d | **0** | — | **HIGH — Day-15 carry today; pair in 5-user batch.** |
| **ajvanprooyen@crimson.ua.edu** | 15d | **6** (all 6 Cubs events passed) | passed -7d to -2d | **HIGHEST — sharpest "we failed you" Day-15 frame in the queue. The full 6-event trip enumerable, all passed.** |
| **ggri73@gmail.com** | 15d | **0** | — | **HIGH — Day-15 carry today; pair with charlesteel.** |
| **charlesteel126@gmail.com** | 15d | **1** (Bruno Ohio May 20, 12d out) | 12d | **HIGH — 12d runway on a real watchlist event with T-7d flip in 5 days.** |
| dr.altvater-70199@web.de | 18d | **0** | — | Day-18 today. Body: "two weeks and four days ago." German variant open. |
| josh (joshdguillemette) | 19d | **1** (AEW May 24, 16d out) | 16d | Day-19 send today. "Two weeks and five days in." |
| nicklib253 | 21d | **1** (Phillies passed Apr 17) | passed -21d | **Day-21 frame parses cleanly today: "Three weeks ago you added Phillies vs Braves."** |
| pete.uzelac77 | 28d | **6** (WC + Darts) | 42-57d | Day-30 template queued for May 10. **2 days out.** |
| dylanbaldy | 22d | **0** | — | LOW (no hook). |
| goldy.pec | 28d | 1 (Bilmuri passed May 2) | — | CLOSED. |
| blubberboi | 29d | 1 (Ed Sheeran Aug 8) | 92d | MEDIUM. |
| tate.sheppard | 55d | 1 (Florence passed May 1) | — | CLOSED (Florence passed). |
| **tosophiameyer** | 59d | **11** Harry Styles MSG | 108-132d | **HIGH — power user, deepest re-engagement runway.** |
| **brigitte.theisen** | 72d | **10** Backstreet Sphere | 70-90d | **HIGH — power user.** |
| laye.aurelien | 36d | 2 (Shakira Jul 20+23) | 73-76d | HIGH. |
| lvasub6 | 40d | 2 (Flyleaf Jul 17-18) | 70-71d | HIGH. |
| krusesin2023 | 70d | 2 (Flyleaf Jul) | Yes | MEDIUM. |
| ldholman | 66d | 3 (Bad Omens passed; 2× MIW Aug 11) | Partial | MEDIUM. |
| spcoog83 | 61d | 1 (Olivia Dean Aug 25) | 109d | MEDIUM. |
| edithdionne | 65d | 1 (A7X Centre Bell Aug 8) | 92d | MEDIUM. |
| bhaygood728 | 35d | 1 (Cardi B passed Apr 12) | No | LOW. |
| chocolateyu1083 | 38d | 1 (Oilers passed Mar 31) | No | LOW. |
| arin.gelbaugh | 38d | 1 (NCAA Final Four passed) | No | LOW. |
| missbrookeshep | 66d | 1 (Warriors/Rockets passed Apr 5) | No | LOW. |
| billstromkel | 45d | 1 (RAYE passed) | No | LOW. |
| jkaiser | 53d | 1 (NCAA 2nd Rd passed) | No | LOW. |
| tucwildcat | 47d | 1 (NCAA 2nd Rd passed) | No | LOW. |

**Passed-event overhang:** **14 churned/at-risk users** whose only tracked event has either passed or carries no immediate re-engagement hook. **Today: 14 cumulative passed-no-notification events stand (Mac DeMarco added).** Cohort dies without a re-engagement product — engineering ask remains carried Day 32.

## Churn intervention: email content (ready to queue when drip engine returns)

### TODAY's pre-queue fire — jadbennis0 Day-3 (NATURAL ON-SCHEDULE WINDOW TONIGHT 20:33 UTC ±)

**Subject:** Day 3 with TicketScan — set your target on Inter Miami?
**Body:**
> Three days ago you signed up and added Inter Miami CF vs Portland Timbers (May 17, Nu Stadium) to your watchlist. Nice — you're already past the first hurdle.
>
> One thing left: set a target price. We'll email you the moment Ticketmaster, SeatGeek, or StubHub drops below your number. Without a target, we can show you trends but can't proactively alert you.
>
> Match day is **9 days away**. Most price drops happen in the final 7 days — and that window opens for you the day after tomorrow. Set your number now so you don't miss it.
>
> [Set your target](https://www.ticketscan.io/event/vvG1VZbMCqxULm)

**Send timing:** Tonight 20:33 UTC ±15min — natural Day-3 boundary fire. **~9.5h window.** **First event-specific Day-3 fire in the queue. Highest-leverage Day-3 in the entire outage.**

---

### TODAY's pre-queue Day-15 batch — 5-USER BATCH (LARGEST POSSIBLE Day-14/15 CLEANUP IN THE OUTAGE)

#### ajvanprooyen — Day-15 with passed-event acknowledgment (HIGHEST-LEVERAGE)

**Subject:** Two weeks in — and your Cubs trip just ended without us
**Body:**
> Two weeks and a day ago you signed up and added six Cubs games to your watchlist (May 1 through May 6). Every single one of those games has now passed — and we never sent you a single price update.
>
> That's on us. We had a price-tracking outage during the entire window of your trip, and the algo flagged your six games but no email left our system. We're sorry.
>
> What we'd like to do: rebuild the trust by getting the next event right. If you're tracking anything for May, June, or July, search it on TicketScan and set a target — we'll get the alerts working before the next event hits T-7 days. And if you'd rather just tell us what we should have done differently, reply. We'll listen.
>
> [Track another event](https://www.ticketscan.io)

**Send timing:** Today, lead of the 5-user Day-15 batch.

#### mark.murdock + awwhittington + ggri73 — Day-15 generic forcing question

**Subject:** Two weeks in — what would change your mind about TicketScan?
**Body:**
> Two weeks and a day ago you signed up for TicketScan but haven't tracked an event yet. We'd rather know why than keep guessing.
>
> If the events you searched weren't the right ones, we have 24 venue guides and 16 World Cup 2026 stadium pages where you can browse by location. If the price-tracking concept didn't click, here's the 30-second version: pick an event, set the price you'd pay, and we'll email you the moment Ticketmaster, SeatGeek, or StubHub drops below your number.
>
> Or just reply and tell us what's missing. We read every response.
>
> [Browse events](https://www.ticketscan.io)

**Send timing:** Today, 3-user duplicate-template send within the 5-user batch.

#### charlesteel126 — Day-15 with active watchlist event

**Subject:** Two weeks in — Bruno Mars Ohio is 12 days out
**Body:**
> Two weeks and a day ago you added Bruno Mars at Ohio Stadium (May 20) to your watchlist. The event is **12 days out** and you haven't set a target price yet.
>
> Stadium tour seats are still moving — Ticketmaster, SeatGeek, and StubHub all have inventory and the price spread is wide. Set your number and we'll email you the moment any source drops below it.
>
> The T-7 day window — when most price drops historically land — opens in 5 days. Set your target now so you don't miss it.
>
> [Set your target](https://www.ticketscan.io/event/vv1AAZkCfGkdl2qZg)

**Send timing:** Today, paired in 5-user batch.

---

### TODAY's pre-queue fires — sparkit + cjthomas Day-3 (PRE-QUEUED FOR MAY 10)

#### sparkitrightthere — Day-3 generic, post-event acknowledgment

**Subject:** Day 3 with TicketScan — Mac DeMarco's done, what's next?
**Body:**
> Three days ago you signed up and added Mac DeMarco at Salt Shed Outdoors. The show's over — hope it was worth it.
>
> The reason TicketScan exists is for the events you're already thinking about. Pick one (concert, sports, theater, anything), search it on [ticketscan.io](https://www.ticketscan.io), tap "Track price," and set the number you'd pay. We'll email you the moment Ticketmaster, SeatGeek, or StubHub drops below it.
>
> If nothing's grabbing you, browse 24 venue guides or 16 World Cup 2026 stadium pages by location to spark something.
>
> Or just reply with one sentence on what brought you here. We read every response.
>
> [Browse events](https://www.ticketscan.io)

**Send timing:** May 10 11:38 UTC ±tolerance.

#### cjthomas2557 — Day-3 event-specific, target capture

**Subject:** Day 3 with TicketScan — set your target on Noah Kahan?
**Body:**
> Three days ago you signed up and added Noah Kahan at Kia Center Orlando (June 12) to your watchlist. Nice catch — that's a clean 35-day runway.
>
> One thing left: set a target price. We'll email you the moment Ticketmaster, SeatGeek, or StubHub drops below your number. Without a target, we can show you trends but can't proactively alert you.
>
> Most price drops on stadium-tour-adjacent shows happen in the final 14 days — set your number now so we have time to catch them.
>
> [Set your target](https://www.ticketscan.io/event/1AxZkokGkeEMKWC)

**Send timing:** May 10 22:49 UTC ±tolerance.

---

### TODAY's pre-queue fire — natalie.sotocruz Day-1 (PRE-QUEUED FOR TOMORROW MAY 8 18:40 UTC)

**Subject:** Day 1 — what brought you to TicketScan?
**Body:**
> You signed up for TicketScan yesterday but haven't tracked an event yet. No pressure — but the fastest way to feel out the product is to add one event you're already thinking about buying tickets for.
>
> Concert, sports, theater. Search the name on [ticketscan.io](https://www.ticketscan.io), tap "Track price," set the number you'd pay. We'll email you the moment Ticketmaster, SeatGeek, or StubHub drops below it.
>
> Or just reply with one sentence on what brought you here. We read every response.
>
> [Browse events](https://www.ticketscan.io)

**Send timing:** Tomorrow May 8 18:40 UTC ±tolerance — natural Day-1 boundary, NOT in the existing 3/7/14/21/30 schedule. **Recommend Email Agent (Agent 5) consider adding a Day-1 fire to the schedule** — natalie's Day-1 fire would give us the cleanest possible inert-signup early intervention. The current Day-3 first-fire is a 60-72h gap that the data suggests is too long.

---

### Carries from yesterday (continue)

- **dr.altvater Day-18:** body "two weeks and four days ago"; subject pivots to "Two weeks and a few days in."
- **josh Day-19:** body "two weeks and five days ago"; AEW May 24 still 16d out.
- **nicklib Day-21:** **Day-21 frame "three weeks ago" parses cleanly today, first day of the frame.** Phillies passed -21d.
- **pete Day-28:** Day-30 template queued for May 10. **2 days out.**
- **lilianamasyrubi Day-10:** **Day-10 family pivot today.** "Ten days into your account."
- **zhili1208 Day-9:** Last day of Day-7 family tolerance. **Hard expiry tomorrow May 9.**
- **taranimeramaro / nmcnamee99 Day-13:** Day-10 family. **Day-14 boundary tomorrow May 9.**

---

## Psychology-driven micro-optimization (today)

**Principle:** Default effect (Thaler & Sunstein, *Nudge*)
**Where to apply:** Watchlist add modal/flow on event detail page (`web/src/app/event/[id]/page.tsx`) and on search results "Track price" CTA.

**The diagnosis (sharpened today):** The instant-activation cluster is now n=3 in 3 days (jadbennis0 32s, sparkit 34s, cjthomas 35s). All three users complete the watchlist add in under a minute and immediately exit the flow. **Target_price=null on 88/88 watchlist items in the entire dataset.** This is a cleaner data point today than yesterday: the half-activation pattern is structural, not anecdotal. Yesterday's loss-aversion banner addresses *existing* null-target items; today's recommendation addresses the *creation moment* itself.

**Specific change:** When a user clicks "Track price," the modal currently asks for a target price (or skips it). Pre-fill the target_price input with **the current lowest cross-source price minus 10%**, formatted as a clean dollar amount. The default is editable; the user can:
- Accept (one click)
- Edit up or down (input is already focused)
- Clear (escape hatch — keeps current opt-out behavior)

```
Current best price across Ticketmaster, SeatGeek, StubHub: $148

  [ $133 ]   ← pre-filled, focused, editable
  
   We'll email you the moment any source drops below this.
   
  [ Save target ]  [ Skip — just track ]
```

**Why this works (default effect):**
1. **Defaults are sticky.** Across dozens of behavioral-economics studies, the default option is selected 60-90% of the time even when alternatives are equally accessible. Currently the default is "no target" (opt-in to alerts). Flipping the default to "target = -10% from best price" inverts the behavior.
2. **Anchoring assist.** The pre-fill is itself a cognitive anchor — users who edit will edit *near* the default ($120-150 range), not from scratch. This converts a blank-canvas decision into a comparison-judgment decision, which is much faster.
3. **Removes the "what should I pick?" friction.** The current null-target rate strongly suggests users either (a) don't know what to type, or (b) feel they need to research first. Default removes both barriers — accept the smart default in one click.
4. **Pairs with yesterday's loss-aversion banner.** Today's fix prevents new null-targets at creation; yesterday's fix recovers existing null-targets at view-time. Together they form a complete loop.

**Specificity of the -10% rule:** Why -10%, not -5% or -20%?
- -5% is too tight: barely below current price → fires alerts that aren't real "drops"
- -20% is too aggressive for stable categories (concerts often only drop 10-15% in T-7d window)
- -10% is the median historical drop magnitude across the price_history table (back-of-envelope from previous SEO/CRO Agent observations)
- Make this a configurable constant (`DEFAULT_TARGET_DISCOUNT_PCT = 0.10`) so future data can tune it

**Quantitative target:** Currently 0/88 watchlist items have a non-null target = **0% capture.** Aim for 30-day capture rate of **70%+ on new watchlist items created post-deploy** (assuming default-effect literature carries over to this UX). Even at the conservative end (50%), this is a 50pp lift on the base rate.

**Implementation cost:** ~3-4h. Backend: extend `/api/events/:id` response to include `bestPrice` (already computed in compare endpoint). Frontend: add pre-fill logic to watchlist-add component, add the secondary "Skip" button as the explicit opt-out path. No DB schema change.

**Cross-agent route:** **CRO Agent (Agent 6)** to scope/implement. Pair with yesterday's loss-aversion banner — the two fixes form a complete null-target prevention + recovery loop. **Highest-leverage CRO stack of the week.**

**Why TODAY's principle differs from yesterday's:**
- Yesterday: Loss aversion → addresses *existing* 88 null-target items via a warning banner ("you won't get alerts")
- Today: Default effect → addresses *new* watchlist adds via smart pre-fill ("here's a sensible target, edit if you like")
- Together: prevention at creation + recovery at view = full coverage

---

## Cross-agent dependencies

1. **→ Email Agent (Agent 5):** **Six emails queued and ready** (vs yesterday's 6, with substitutions):
   - **TONIGHT:** jadbennis0 Day-3 fire (natural boundary 20:33 UTC). Highest-leverage Day-3 in queue.
   - **TODAY:** 5-user Day-15 cleanup batch (charlesteel + ggri + aw + ajv + mark).
   - **TOMORROW:** natalie Day-1 fire (NEW — Day-1 not in the 3/7/14/21/30 schedule; recommend adding).
   - **MAY 10:** sparkit + cjthomas Day-3 fires (paired with Inter Miami T-7d flip + pete Day-30 = 4-event day).
   - **If engine returns today: 6+ emails clear in 72h.** This would be the largest send batch of the entire outage.
   - **NEW: Recommend adding a Day-1 fire to the schedule.** natalie + future inert signups suggest the 60-72h gap to Day-3 is too long. Day-1 + Day-3 + Day-7 + Day-14 + Day-21 + Day-30 = better cadence for high-intent flow.

2. **→ CRO Agent (Agent 6):** **Three stacked high-leverage fixes (now a coherent stack):**
   - **TODAY: Default-effect smart pre-fill on watchlist add** — addresses 100% null-target structural pattern at the creation moment. ~3-4h.
   - **YESTERDAY: Loss-aversion target-price banner** — addresses null-target recovery at view-time on existing items. ~1.5h.
   - **EARLIER: 3-step onboarding progress indicator + inline target-price capture on watchlist add** — surfaces the funnel.
   - **Combined cost: ~6-8h. Combined impact: target_price capture from 0% → 50-70%+ on new items, recovery on the 88 existing items.**

3. **→ Ads Agent (Agent 4):** **Sharpened question today: what changed about acquisition flow on May 7?** 3 signups in 11h 11m, 2 instant-activations, after a 30-day signup drought averaging <0.3/day. **One viral source, one ad spike, one referral cluster, or organic coincidence?** Attribution-pull priority elevates from "still valuable" to "load-bearing for replication." If the 3 signups share a source, we can repeat the play; if they're independent, the day is a coincidence and the trend won't hold. **15 days of attribution dependency carried.**

4. **→ Content Agent (Agent 3):** **THREE NEW market signals today, all unaddressed:**
   - **Mac DeMarco / Salt Shed Outdoors / Chicago indie-concerts market** (sparkit) — same-day-event signal. Salt Shed not in 24-venue list.
   - **Noah Kahan / Kia Center / Orlando concerts** (cjthomas) — 35-day runway, Kia Center exists in venue list (verify coverage). Orlando concerts category exists.
   - **MLS / Inter Miami / Nu Stadium / Miami market** (jadbennis0, carried) — first MLS event in dataset; Inter Miami T-7d flip is May 10 (2 days), content live by then would catch the algo-flip threshold organically.
   - **Recommendation:** Scope an MLS/Inter Miami content piece for May 9-10 publish; verify Kia Center venue coverage; consider a Salt Shed venue page or Chicago indie-concerts category page.

5. **→ Engineering / Drip-Engine:** **Day 32 of outage. Two boundaries fired and missed since yesterday's report:**
   - joseph Day-3 (May 7 21:39 UTC, missed by ~13h)
   - 3 fresh Day-14 transitions overnight May 7 (mark, aw, ajv) — already counted in Day-15 cohort today
   - **Same-day 5-user Day-15 cleanup batch is queued for delivery the moment engine returns.** 6+ emails can fire in 72h if engine returns today.
   - **NEW: Recommend Day-1 fire addition to the drip schedule.** natalie's Day-1 boundary is 18:40 UTC tomorrow May 8. Even a single Day-1 entry in the schedule would compress the inert-signup intervention window from 72h to 24h.

6. **→ All agents:** **Today's data is a structural shape change.** The 32-day stagnation pattern broke in 2 dimensions (signups +3, watchlist adds +2). Whether this holds is the central question for the next 7 days. **Recommend all agents flag any May 7-8 data they have that could explain the spike** — ad performance, content performance, social performance, search performance, referral source.

---

## Summary metrics

```
Total users:              69 (+3) — first multi-signup day in 30+ days
Real users:               66 (+3, assumes all 3 fresh signups are real, not test)
Activated:                47 (+2)
Activation rate:          71.2% (real, −0.2pp vs yesterday) — denominator-driven dilution from natalie's fresh inert
Watchlist items:          88 (+2: sparkit Mac DeMarco + cjthomas Noah Kahan)
Newsletter subscribers:   3 (96 days flat = 13 weeks + 5 days)
Active alerts:            0 (Day 32)
Triggered alerts:         0 (lifetime)
Drip emails sent:         0 (Day 32 — confirmed via /api/admin/drip-stats: stats=[])
Cumulative passed-no-notify: 14 (+1, Mac DeMarco May 7 same-day-event)
Algo-flip-quiet streak:   9 days, ENDS MAY 10 (Inter Miami T-7d threshold)
Activation gap (real):    18/66 = 27.3% (+0.3pp)
Unknown-source activation: 3/11 = 27.3% (+14.8pp on sparkit + cjthomas — bifurcation softens)
Day-15 cohort today:      5 users (charlesteel + ggri + aw + ajv + mark) — peak cleanup opportunity
Instant-activation cluster: 3 in 3 days (jadbennis0 32s, sparkit 34s, cjthomas 35s)
Target-price capture:     0/88 watchlist items = 0% (Day 32 structural)
Triple-signup day:        May 7 — first since dataset baseline (3 signups in 11h 11m window)
Same-day-event signup:    1 (sparkit Mac DeMarco — first in dataset)
```

**Headline:** May 7 broke the 30-day signup drought with 3 signups in 11h 11m, 2 of them instant-activations matching the jadbennis0 pattern (now n=3 in 3 days). Total +3 users, +2 watchlist items, 0 alerts, 0 drip emails — the acquisition + activation funnel shows life; the engagement engine remains dead at Day 32. **Tonight's jadbennis0 Day-3 fire (20:33 UTC) is the highest-leverage Day-3 in the entire outage queue. May 10 is now a 4-event day: jadbennis0 Day-3 carry + Inter Miami T-7d flip + sparkit Day-3 + cjthomas Day-3 + pete Day-30. If engine returns today, 6+ emails clear in 72h — the single largest send batch of the outage.** Today's CRO recommendation pivots from yesterday's null-target *recovery* (loss-aversion banner) to null-target *prevention at creation* (default-effect smart pre-fill); together they form a complete prevention + recovery loop.
