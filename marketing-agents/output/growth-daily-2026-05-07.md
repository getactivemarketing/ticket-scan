# Growth Daily -- 2026-05-07

## User health dashboard

| Segment                     | Count | % of Total | vs May 6 |
|-----------------------------|-------|------------|----------|
| Total users                 | 66    | 100%       | **+0 (no signup May 6, no signup May 7 by 11:00 UTC. The two-day signup streak from May 4-5 is dead. Streak length: exactly 2 days. Pattern returns to the May 1-3 zero-day mode. Apr 26 = 2, Apr 27 = 0, Apr 28 = 1, Apr 29 = 1, Apr 30 = 0, May 1 = 0, May 2 = 0, May 3 = 0, May 4 = 1, May 5 = 1, May 6 = 0, May 7 = 0 so far. Last 7 days: 2 signups. Last 14 days: 5 signups.)** |
| New (last 7 days, API count) | **2** | 3.0% | =0 net (jadbennis0 + joseph still in window. lilianamasyrubi rolled out May 5 → 8d → today Day 9; zhili1208 rolled out May 6 → 7d → today Day 8. **Window holds at 2 by API count. By strict 7-day boundary it's also 2.**) |
| Activated (has watchlist)   | 45    | 68.2%      | **=0. The 24h numerator-driven climb from yesterday holds for one full day. jadbennis0 still watchlist=1, target=null. No new activations and no new watchlist adds in 38h 27m since jadbennis0's May 5 20:33 UTC entry — the 240h flat record dies, replaced by a 38h flat that is just starting.** |
| Active (visited in 7 days)  | unknown | —        | no `last_login_at` instrumentation — **Day 31 open** |
| At-risk (7-14d signup-age proxy) | 7 | 10.6% | **−2 net. mark.murdock + awwhittington + ajvanprooyen all crossed Day 14 overnight (00:30 / 00:58 / 03:01 UTC May 7), moving to churned. ggri73 also crossed Day 14 last night at 21:18 UTC May 6. Inflows to at-risk: zero (no Day-7 entrants — joseph at Day 2 not in band, jadbennis0 at Day 1 not in band, lilianamasyrubi rolled past 7d to Day 9, zhili1208 rolled past 7d to Day 8). At-risk band drains to 7: zhili1208 + lilianamasyrubi + taranimeramaro + nmcnamee99 + (charlesteel at exactly Day 14) — wait, charlesteel rolls to Day 15 today at 11:38 UTC ±. Including charlesteel for the morning: 7. Excluding (PM): 6. Net: −2 to −3 over the day.** |
| Churned (14d+ signup-age proxy) | 60→63 | 95.5% | **+3 today (mark, aw, ajv all crossed Day 14 overnight). Plus ggri73 crossed last night at 21:18 UTC (already counted in May 6's end-of-day total of 60). Plus charlesteel rolls Day 14 → 15 at 11:38 UTC today. Net daily inflow: +3 fresh Day-14 transitions — the largest single-day churned inflow since the outage began.** |

> **Day 31 without `last_login_at` instrumentation. Day 31 of zero drip emails. Day 31 of zero triggered alerts. Newsletter subscribers: 3, unchanged for 95 days = 13 weeks + 4 days flat.**
> **THE FINAL ON-SCHEDULE DAY-14 FIRE WINDOW OF THE ENTIRE OUTAGE WAS MISSED.** ggri73 crossed Day 14 at 21:18:14 UTC May 6. Engine remained down. **Every single Day-14 fire of the 31-day outage has now missed its native day. Closed-out failure mode locked in.** The Day-14 cohort that should have received the forcing-question email on schedule is now: charlesteel (May 6 11:38 missed) + ggri73 (May 6 21:18 missed) + awwhittington (May 7 00:30 missed) + ajvanprooyen (May 7 00:58 missed) + mark.murdock (May 7 03:01 missed). **5 users in 39 hours, every one missed.**
> **3 fresh Day-14 transitions overnight — the largest single-night churned inflow of the outage.** awwhittington 00:30 UTC, ajvanprooyen 00:58 UTC, mark.murdock 03:01 UTC. All within a 2h 31m window. None reached on schedule. All now on Day-15 carry trajectory tomorrow.
> **AJVANPROOYEN'S CUBS TRIP IS 100% RESOLVED WITHOUT A SINGLE PRODUCT EMAIL.** Cubs/Reds May 6 passed last night. **Cumulative passed-no-notification: 13** (was 12 at end of yesterday). The full 6-event Cubs sequence (May 1, 2, 3, 4, 5, 6) is now closed. Plus Raptors-Cavs Apr 26 (nmcnamee99) + Phillies Apr 17 (nicklib) + Cardi B Apr 12 (bhaygood) + Florence May 1 (tate) + Bilmuri May 2 (goldy) + Edmonton Mar 31 (chocolate) + NCAA passed (multiple) = 13 cumulative. **Cubs trip dies as the single largest passed-no-notification event in dataset history.**
> **JADBENNIS0 STILL TARGET=NULL.** Day 2 today. 38h since signup, 38h since the 32-second activation. **Target-price capture rate on the only fresh activation in 11 days: 0%.** Day-3 fires May 8 20:33 UTC ±tolerance — pivot to event-specific "set your target on Inter Miami" CTA, pre-queued from yesterday.
> **JOSEPH STILL INERT — DAY 3 TODAY 21:39 UTC ±TOLERANCE.** ~10h to natural Day-3 boundary. Still 0 watchlist 0 target. **Source attribution still unknown (Day 14 of Ads Agent ask).**
> Watchlist items: **86** (38h flat — new flat counter starts today). Active alerts across **86** items: **0**. Target-price capture rate: **0% (Day 31).**
> `usersToday: 0`, `usersThisWeek: 2`. **Activation rate flat at 71.4% (real users) for the second consecutive day after yesterday's first numerator-driven climb in 11 days.**

## What changed in 24h

1. **THE FINAL ON-SCHEDULE DAY-14 FIRE WINDOW WAS MISSED.** ggri73 21:18:14 UTC May 6. Engine did not return. **The 31-day outage now has zero on-schedule Day-14 fires — every single Day-14 candidate (charlesteel, ggri73, awwhittington, ajvanprooyen, mark.murdock, plus earlier dr.altvater/josh/nicklib/dylanbaldy/pete/goldy/blubberboi/bhaygood) crossed the boundary without an email.** This is now a definitionally-closed failure mode: the Day-14 forcing question, designed to fire at exact T+14d boundaries, has zero on-schedule deliveries in the entire outage. **The closed-out cohort is locked.**

2. **THREE FRESH DAY-14 TRANSITIONS OVERNIGHT — THE LARGEST SINGLE-NIGHT CHURNED INFLOW OF THE OUTAGE.** awwhittington 00:30 UTC, ajvanprooyen 00:58 UTC, mark.murdock 03:01 UTC. All within a 2h 31m window starting at midnight UTC. **All three fired their natural Day-14 boundary inside the same overnight session — and none of the three fires was sent.** This is the single most concentrated batch of missed Day-14 fires in the outage.

3. **THE 5-USER DAY-14 COHORT IS NOW IN ITS FINAL TRANSITIONAL DAY.** Today (May 7) all 5 users (charlesteel, ggri73, awwhittington, ajvanprooyen, mark.murdock) are simultaneously at API-rounded Day 14. **Charlesteel rolls to Day 15 at 11:38 UTC today; the others roll to Day 15 overnight tomorrow May 8.** This is the only day in the calendar where the Day-14 cohort holds 5 simultaneously — a peak that will not repeat unless a similar 39-hour clustering happens again. **By 11:38 UTC today, charlesteel is the first to roll out; by 03:01 UTC May 8, the cohort is fully drained to Day 15+.**

4. **AJVANPROOYEN'S CUBS TRIP CLOSES — CUMULATIVE PASSED-NO-NOTIFICATION HITS 13.** Cubs/Reds May 6 passed last night ~21:00-23:00 local Chicago time. The full 6-event sequence (May 1-6) is fully resolved without a single product email or alert. **The Cubs trip is the single largest passed-no-notification event cluster in dataset history — 6 events for one user, all flagged as algo-overrides, all dead without notification.** The "we know we failed you" copy parses with maximum honesty as of today, since every event in the trip has a confirmed-passed status enumerable.

5. **JADBENNIS0 STILL TARGET=NULL ON DAY 2.** 38h since the 32-second activation. **Target-price capture rate on the only fresh activation in 11 days: still 0%.** No second action — no second watchlist add, no target set, no return visit instrumentable. **The half-completed activation pattern is now 38h carried.** Day-3 framing pre-queues for May 8 20:33 UTC ± tolerance with the event-specific "set your target on Inter Miami" CTA — first event-specific Day-3 fire in the queue.

6. **JOSEPH DAY 3 TODAY 21:39 UTC ±TOLERANCE.** ~10h from natural boundary. **Joseph remains the only Day-1-onward inert candidate in the band today.** If joseph activates today, he becomes the second activation in the May 4-7 cohort and the bifurcation analysis softens further. If joseph remains inert through Day 3, he becomes the 8th unknown-source signup with 0 activation. **The Day-3 boundary tonight is one of the cleaner forced-decision moments in the queue — and it's currently the only on-schedule Day-3 fire window of the outage that is approaching.**

7. **LILIANAMASYRUBI DAY 9 — DAY-7 FAMILY HARD EXPIRY TODAY.** Yesterday's "Eight days with TicketScan" body parses today as "Nine days with TicketScan" — at the outer edge of Day-7 family tolerance. **Tomorrow May 8 (Day 10) pivots to Day-10 generic family.** Last day to ship Day-7 framing for lilianamasyrubi.

8. **ZHILI1208 DAY 8 — DAY-7 FAMILY 24h CARRIED.** Body edit "A week with TicketScan" → "Eight days with TicketScan." Hard expiry tomorrow (Day 9) by lilianamasyrubi's pivot rule, then Day-10 family. **Cleaner parse than lilianamasyrubi's because zhili1208 is +1d behind in the calendar — same template, 24h-lagged.**

9. **TARANIMERAMARO + NMCNAMEE99 DAY 12 — DAY-10 FAMILY 24h CARRIED.** "Twelve days into your account." Bruno Mars MetLife dates 106-110d out — runway intact. Raptors-Cavs Apr 26 has now passed by 11 days for nmcnamee99 — bespoke acknowledgment-and-recovery framing continues. **Hard expiry on Day-10 family: May 8 (Day 14 boundary, where forcing-question pre-queues for May 9-10 fire).**

10. **CHARLESTEEL126 DAY 15 BY 11:38 UTC TODAY.** Day-15 carry begins. Body edit: "two weeks ago" → "two weeks and a day ago." Bruno Ohio May 20 still 13d out — runway intact. **Hard expiry on Day-15 family: May 9 (Day 17 boundary).** Pair with ggri73 if engine returns today.

11. **GGRI73 DAY-15 CARRY TODAY.** Body edit: identical "two weeks and a day ago" frame, but ggri73 has 0 watchlist items — generic forcing-question only. **Same-day pair with charlesteel makes operational sense if the engine returns: two emails, same template, two distinct CTAs.**

12. **AWWHITTINGTON + AJVANPROOYEN + MARK.MURDOCK DAY-14 BODY TODAY.** All three sit at API Day 14 today. Body parses cleanly as "Two weeks ago you signed up for TicketScan but haven't tracked an event yet" (mark + aw, both 0 watchlist) and "Two weeks ago you signed up and added [N] events but haven't set a target price on any" (ajvanprooyen, 6 watchlist). **The ajvanprooyen edit is the highest-leverage variant in the queue — it's the only Day-14 forcing question with a passed-event acknowledgment as primary frame.** Hard expiry: May 9 (Day 16 boundary).

13. **DR.ALTVATER DAY-17 — "TWO WEEKS AND THREE DAYS AGO."** Body edit one day forward. Subject pivots to "Two weeks and a few days in" by Friday. German-language drip variant question still open Day 12.

14. **JOSH DAY-18 — "TWO WEEKS AND FOUR DAYS AGO."** AEW May 24 still 17d out — runway intact. The 17-day runway remains the longest-tail Day-14-family carry in the queue.

15. **NICKLIB DAY-20 — "ALMOST THREE WEEKS" PARSES CLEANLY TODAY.** Day 19 yesterday → Day 20 today, third day of the "almost three weeks" frame. **Hard expiry: May 9 (Day 22 boundary, where "almost three weeks" becomes "three weeks").** 2-day shelf life remaining on the Day-21 frame.

16. **PETE.UZELAC DAY-27 — DAY-30 PIVOT QUEUED FOR MAY 10.** Yesterday's Day-26 framing carries 24h. **3 days to fire.** Pete's WC events still 43-58d out (Jun 19 / Jun 27 / Jul 4) — runway is wide. Darts Masters Jun 25-26 at 49-50d out.

17. **NEWSLETTER SUBSCRIBERS: 3, UNCHANGED FOR 95 DAYS = 13 WEEKS + 4 DAYS FLAT.** Form audit carried for one full quarter + 5 days. **The longest open dependency in the entire growth stack continues to lengthen.**

18. **EIGHTH CONSECUTIVE FLIP-QUIET DAY.** No new algo-flips. Cubs/Reds May 6 passed last night (already-flipped); after that, **next non-Cubs flip threshold candidates are: jadbennis0 Inter Miami May 17 hits T-7d on May 10 (3 days out, NEW shortest-runway candidate); charlesteel126 Bruno Ohio May 20 hits T-7d on May 13 (6 days out).** The 26-day quiet window on **new** algo-flips is **8 days into it** — extending by another day each day.

19. **ATTRIBUTION ASK NOW DAY 14.** ids 65 + 66 both have unknown source. The bifurcation extends to **8 unknown / 3 known across 14 days, n=11.** Unknown-source activation rate: 1/8 = 12.5% (broken from 0% by jadbennis0). Known-source: 3/3 = 100%. **The 0% / 100% binary is still dead at n=11. Speed-of-activation (32 seconds vs several minutes) remains the more informative metric.** Day 14 of dependency.

20. **THE 31-DAY-OUTAGE PATTERN HOLDS FIRM — NO DIMENSION ADDED MOTION TODAY.** Yesterday's watchlist-add dimension flicker (jadbennis0) is now 38h frozen with no follow-up:
    - Total users: 66 (was 66, +0)
    - Watchlist items: 86 for **38h frozen** (new flat counter started 24h ago)
    - Drip emails sent: 0 for **31 consecutive days** (no movement)
    - Triggered alerts: 0 for the entire dataset (no movement)
    - Newsletter subscribers: 3 for **95 consecutive days** (no movement)
    - Activation rate: 71.4% (real users) — frozen at +0pp from yesterday
    - **The structural-inertness equilibrium reasserts itself in all 6 dimensions today. The 24h flicker was real but contained. The dataset returns to the steady-state inertness pattern.**

## Activation gap

**Users signed up in last 7 days with 0 watchlist items: 1** (was 1 yesterday — **net 0**: jadbennis0 remains activated, joseph remains inert, no new entrants today):

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **joseph.g.nicolosi@gmail.com** | May 4 21:39 UTC | 2d 13h | **0** | Day 2 today, **Day-3 boundary tonight at 21:39 UTC ±tolerance (~10h).** Source attribution still unknown (Day 14). **Day-3 framing fires tonight** — the only on-schedule Day-3 fire window currently approaching in the outage. |

**Activated within 7-day window (carried):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **jadbennis0@gmail.com** | May 5 20:33 UTC | 1d 14h | **1** (Inter Miami May 17, **target=null**) | **DAY 1 — half-activation locked at 38h. The 32-second watchlist-add is celebrated; the missing target_price is uncelebrated.** Day-3 framing pre-queues for May 8 20:33 UTC. **Inter Miami event hits T-10d today — the single shortest-runway watchlist event in the dataset.** |

**Outside 7-day window (carried, still 0 watchlist):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| zhili1208@gmail.com | Apr 29 03:16 UTC | 8d | 0 | **Day 8 today.** Day-7 family 24h carried ("Eight days with TicketScan"). **Hard expiry tomorrow May 8 (Day 9 = lilianamasyrubi's last day).** |
| lilianamasyrubi@gmail.com | Apr 28 05:24 UTC | 9d | 0 | **Day 9 today, last day of Day-7 family tolerance.** "Nine days with TicketScan" parses but at outer edge. **Tomorrow May 8 = Day 10 family pivot.** |
| taranimeramaro@gmail.com | Apr 25 18:25 UTC | 12d | 3 (active) | Day 12, Day-10 family ("Twelve days into your account"). |
| nmcnamee99@gmail.com | Apr 25 11:51 UTC | 12d | 1 (passed) | Day 12, Day-10 family with passed-event acknowledgment. |
| mark.murdock@lanternsec.com | Apr 23 03:01 UTC | 14d 8h | 0 | **CROSSED DAY 14 OVERNIGHT AT 03:01 UTC TODAY. Day-14 forcing question fire missed by ~8h at the time of this report.** |
| awwhittington@icloud.com | Apr 23 00:30 UTC | 14d 10h | 0 | **CROSSED DAY 14 OVERNIGHT AT 00:30 UTC TODAY. Day-14 forcing question fire missed by ~10h.** |
| ggri73@gmail.com | Apr 22 21:18 UTC | 14d 14h | 0 | **CROSSED DAY 14 LAST NIGHT AT 21:18 UTC MAY 6. The final on-schedule Day-14 window. Missed.** Day-15 carry begins today. |
| dr.altvater-70199@web.de | Apr 20 14:08 UTC | 17d | 0 | Day 17 today. Body: "two weeks and three days ago." |
| dylanbaldy@gmail.com | Apr 15 18:24 UTC | 22d | 0 | Churned. No realistic intervention. |

- **17 real users** (excluding 3 test accounts) have **never** added a watchlist item → **17 / 63 = 27.0% of real signups** (numerator unchanged from yesterday; denominator unchanged. **Frozen at 27.0% for the first 24h since the activation rate moved 24h ago.**). The activation gap is **stable** today: yesterday's question "will joseph cross by May 7?" gets its answer tonight at 21:39 UTC. **Joseph's Day-3 boundary is the next forcing event in the activation-gap dataset.**
- **Activation rate trajectory (real users, last 13 days):** 73.7% → 73.7% → 75.4% → 72.9% → 72.1% → 72.1% → 72.1% → 72.1% → 72.1% → 72.1% → 71.0% → 71.4% → **71.4% (frozen, +0.0pp). The 24h numerator-driven climb holds for one full day. The next tests: joseph Day-3 tonight + the 5 outstanding Day-13/Day-14/Day-15 candidates if they ever activate (none have in their inert windows).**

**Acquisition-source inference: 14-day stable bifurcation.**

The pattern: **6 in 12 days unknown** (ids 55, 57, 58, 60, 63, 64) plus **joseph (id 65, source unknown, inert)** plus **jadbennis0 (id 66, source unknown, half-activated)** → **8 unknown in 14 days at n=11**, against **3 known (ids 59, 61, 62, all activated)**. **Unknown-source activation rate: 1/8 = 12.5% (frozen). Known-source: 3/3 = 100% (frozen). The 7.5x gap holds for the second day.** Day 14 of the dependency on Ads Agent attribution-pull. **The bifurcation is now stable enough to be considered structural rather than a small-sample artifact — the 12.5% / 100% reading is more robust than yesterday's by virtue of holding 24h.**

## Churn signals

- Unsubscribes today: **0** (still 3 subscribers; **95 days flat = 13 weeks + 4 days**)
- Users entering "at-risk" today: **0 net** (no Day-7 entrants — joseph at Day 2, jadbennis0 at Day 1, lilianamasyrubi rolled to Day 9, zhili1208 rolled to Day 8 — both already past Day 7 and remaining in at-risk band)
- Users entering "churned" today: **+3 incremental** (mark.murdock at 03:01 UTC, awwhittington at 00:30 UTC, ajvanprooyen at 00:58 UTC). **Plus charlesteel126 rolls Day 14 → 15 at 11:38 UTC today — internal at-risk → churned transition by API rounding rule (already counted churned in some accounts).**
- Alert fatigue candidates: **0** (0 alerts ever sent — Day 31)
- Events passed without notification (cumulative): **13** (Cubs/Reds May 6 passed last night → +1 from yesterday's 12). **The full 6-event ajvanprooyen Cubs trip is now CLOSED at 13 cumulative — a 9-event jump from the May 1 baseline of 4.**
- **Algo-overrides as preemptive "events lost without notification":** **8 events** structurally unchanged (now closed: Cubs trip resolved; future-flip candidates: Inter Miami May 17 [jadbennis0, T-10d today] + Bruno Ohio May 20 [charlesteel, T-13d]). **Eighth consecutive flip-quiet day.**

## At-risk users (7–14d inactive proxy)

| User | Day | Watchlist | Days to event | Recommended intervention |
|------|-----|-----------|---------------|--------------------------|
| zhili1208@gmail.com | 8d | 0 | — | Day-7 family 24h carried. **Hard expiry tomorrow May 8 (Day 9).** |
| lilianamasyrubi@gmail.com | 9d | 0 | — | Day-7 family last day. **Tomorrow → Day-10 pivot.** |
| taranimeramaro@gmail.com | 12d | 3 (Bruno MetLife Aug 21/22/25) | 106-110d | Day-10 family, "Twelve days into your account." Hard expiry May 9. |
| nmcnamee99@gmail.com | 12d | 1 (Raptors-Cavs Apr 26 — passed -11d) | -11d | Day-10 family with passed-event acknowledgment. |
| mark.murdock@lanternsec.com | 14d 8h | 0 | — | **CROSSED DAY 14 OVERNIGHT. Day-15 carry from tomorrow.** |
| awwhittington@icloud.com | 14d 10h | 0 | — | **CROSSED DAY 14 OVERNIGHT. Day-15 carry from tomorrow.** |
| **ajvanprooyen@crimson.ua.edu** | 14d 10h | 6 (Cubs trip 100% passed) | -6d to -1d | **CROSSED DAY 14 OVERNIGHT. Sharpest "we failed you" frame in the queue — body edit "Two weeks ago you signed up and added six events; ALL SIX have now passed without notification." Highest-leverage Day-14/15 send in the dataset.** |

**Note on charlesteel126 + ggri73:** Both already crossed Day 14 (charlesteel May 6 11:38, ggri73 May 6 21:18). **Day-15 carry begins today.** Body edit: "two weeks and a day ago." Pair these two with the 3 fresh Day-14 transitions in a single 5-user batch send if engine returns. **5-user same-day Day-14/15 batch is the largest possible cleanup batch the queue can ever deliver.**

## Live algo-flip post-mortem (today)

| User | Event | Days out | Flip status | Days flagged | Sends |
|------|-------|----------|-------------|--------------|-------|
| ajvanprooyen | Cubs vs Reds, May 6 | **PASSED last night** | flipped Apr 29 | 14 | 0 (event resolved) |
| **jadbennis0** | **Inter Miami CF vs Portland Timbers, May 17** | **10** | NOT YET FLIPPED | 1 | 0 |

**No new flip today. Eighth flip-quiet day in a row.** The Cubs trip is now fully closed — **all 6 Cubs/Reds events between May 1-6 have passed without a single email or alert.** Cumulative passed-no-notification: **13.** **Next non-Cubs flip threshold candidates:**
1. **jadbennis0 Inter Miami May 17 hits T-7d on May 10 (3 days out)** — shortest runway active watchlist event, NEW first-non-Cubs candidate.
2. **charlesteel126 Bruno Ohio May 20 hits T-7d on May 13 (6 days out).**

**The first-non-Cubs flip is now 3 days away. jadbennis0's instant-activation event added structural urgency to the algo-flip pipeline — and the urgency compounds as Day-3 frame approaches the same calendar day.** May 10 is double-loaded: jadbennis0 Day-3 fire window + Inter Miami T-7d flip threshold.

## Churned users with re-engagement potential

| User | ~Days inactive | Watchlist items | Upcoming hook? | Priority |
|------|----------------|-----------------|----------------|----------|
| **mark.murdock@lanternsec.com** (churned May 7 03:01 UTC) | 14d 8h | **0** | — | **HIGH-NEW — fresh Day-14 transition; Day-15 carry tomorrow with generic forcing question.** |
| **awwhittington@icloud.com** (churned May 7 00:30 UTC) | 14d 10h | **0** | — | **HIGH-NEW — fresh Day-14 transition; Day-15 carry tomorrow with generic forcing question.** |
| **ajvanprooyen@crimson.ua.edu** (churned May 7 00:58 UTC) | 14d 10h | **6** (all 6 Cubs events passed) | passed -6d to -1d | **HIGHEST-NEW — sharpest "we failed you" Day-14 frame in the queue. The full 6-event trip enumerable. Day-15 carry must lead with passed-event acknowledgment.** |
| **ggri73@gmail.com** (churned May 6 21:18 UTC) | 14d 14h | **0** | — | **HIGH — final on-schedule Day-14 window missed last night. Day-15 carry today, pair with charlesteel.** |
| **charlesteel126@gmail.com** (churned May 6 11:38 UTC) | 14d 23h | **1** (Bruno Ohio May 20, 13d out) | 13d | **HIGH — 13d of runway on a real watchlist event. Day-15 carry today, pair with ggri.** |
| dr.altvater-70199@web.de | 17d | **0** | — | Day-17 today. Body: "two weeks and three days ago." German-language drip variant question still open Day 12. |
| josh (joshdguillemette@gmail.com) | 18d | **1** (AEW May 24, 17d out) | 17d | Day-18 send today. "Two weeks and four days in, AEW 17 days out, no target set." |
| nicklib253@gmail.com | 20d | **1** (Phillies passed Apr 17) | passed -20d | Day-20 send today. "Almost three weeks." Day-21 framing carries another 2 days. |
| pete.uzelac77 | 27d | **6** (WC + Darts) | 43-58d | Day-30 template queued for May 10 (3 days out). |
| dylanbaldy@gmail.com | 22d | **0** | — | LOW (no hook). |
| goldy.pec | 27d | 1 (Bilmuri passed May 2) | — | CLOSED. |
| blubberboi | 28d | 1 (Ed Sheeran Aug 8) | 93d | MEDIUM. |
| tate.sheppard | 54d | 1 (Florence passed May 1) | — | CLOSED (Florence passed). |
| **tosophiameyer** | 58d | **11** Harry Styles MSG | 109-133d | **HIGH — power user, deepest re-engagement runway.** |
| **brigitte.theisen** | 71d | **10** Backstreet Sphere | 71-91d | **HIGH — power user.** |
| laye.aurelien | 35d | 2 (Shakira Jul 20+23) | 74-77d | HIGH. |
| lvasub6 | 39d | 2 (Flyleaf Jul 17-18) | 71-72d | HIGH. |
| krusesin2023 | 69d | 2 (Flyleaf Jul) | Yes | MEDIUM. |
| ldholman | 65d | 3 (Bad Omens passed; 2× MIW Aug 11) | Partial | MEDIUM. |
| spcoog83 | 60d | 1 (Olivia Dean Aug 25) | 110d | MEDIUM. |
| edithdionne | 64d | 1 (A7X Centre Bell Aug 8) | 93d | MEDIUM. |
| bhaygood728 | 34d | 1 (Cardi B passed Apr 12) | No | LOW. |
| chocolateyu1083 | 37d | 1 (Oilers passed Mar 31) | No | LOW. |
| arin.gelbaugh | 37d | 1 (NCAA Final Four passed) | No | LOW. |
| missbrookeshep | 65d | 1 (Warriors/Rockets passed Apr 5) | No | LOW. |
| billstromkel | 44d | 1 (RAYE passed) | No | LOW. |
| jkaiser | 52d | 1 (NCAA 2nd Rd passed) | No | LOW. |
| tucwildcat | 46d | 1 (NCAA 2nd Rd passed) | No | LOW. |

**Passed-event overhang:** **13 churned/at-risk users + dr.altvater + josh** whose only tracked event has either passed or carries no immediate re-engagement hook. **Today: 13 cumulative passed-no-notification events stand. The Cubs trip is fully closed.** Cohort dies without a re-engagement product — engineering ask remains carried Day 31.

## Churn intervention: email content (ready to queue when drip engine returns)

### TODAY's pre-queue fire — joseph Day-3 (NATURAL ON-SCHEDULE WINDOW TONIGHT 21:39 UTC ±)

**Subject:** Day 3 with TicketScan — what would you track?
**Body:**
> Three days ago you signed up for TicketScan. We don't know what brought you here, and you haven't tracked an event yet — so let us help.
>
> The fastest way to value: pick one event you're already thinking about buying tickets for. Concert, sports, theater. Search the name on [ticketscan.io](https://www.ticketscan.io), tap "Track price," set the price you'd pay. We'll email you the moment Ticketmaster, SeatGeek, or StubHub drops below your number.
>
> If nothing's grabbing you, we have 24 venue guides and 16 World Cup 2026 stadium pages — browse by location to spark something.
>
> Or just reply with one sentence on what brought you here. We read every response.
>
> [Browse events](https://www.ticketscan.io)

**Send timing:** Tonight 21:39 UTC ±15min — natural Day-3 boundary fire. **~10h window.** **THE ONLY ON-SCHEDULE DAY-3 FIRE WINDOW CURRENTLY APPROACHING IN THE OUTAGE.**

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

**Send timing:** Today (Day-14 boundary missed by 10h overnight). Pair with the 4 other Day-14/15 sends in a same-day batch.

#### mark.murdock + awwhittington — Day-15 generic forcing question (MISSED OVERNIGHT FIRES)

**Subject:** Two weeks in — what would change your mind about TicketScan?
**Body:**
> Two weeks and a day ago you signed up for TicketScan but haven't tracked an event yet. We'd rather know why than keep guessing.
>
> If the events you searched weren't the right ones, we have 24 venue guides and 16 World Cup 2026 stadium pages where you can browse by location. If the price-tracking concept didn't click, here's the 30-second version: pick an event, set the price you'd pay, and we'll email you the moment Ticketmaster, SeatGeek, or StubHub drops below your number.
>
> Or just reply and tell us what's missing. We read every response.
>
> [Browse events](https://www.ticketscan.io)

**Send timing:** Today (boundaries missed 8-10h overnight). Pair as a 2-user duplicate-template send.

#### ggri73 — Day-15 generic forcing question (FINAL ON-SCHEDULE WINDOW MISSED)

Same template as mark/aw above. **Send timing:** Today, paired in 5-user batch.

#### charlesteel126 — Day-15 with active watchlist event

**Subject:** Two weeks in — Bruno Mars Ohio is 13 days out
**Body:**
> Two weeks and a day ago you added Bruno Mars at Ohio Stadium (May 20) to your watchlist. The event is 13 days out and you haven't set a target price yet.
>
> Stadium tour seats are still moving — Ticketmaster, SeatGeek, and StubHub all have inventory and the price spread is wide. Set your number and we'll email you the moment any source drops below it.
>
> [Set your target](https://www.ticketscan.io/event/vv1AAZkCfGkdl2qZg)

**Send timing:** Today, paired in 5-user batch.

---

### TODAY's pre-queue fire — jadbennis0 Day-3 (PRE-QUEUED FOR MAY 8 — first event-specific Day-3 in queue)

**Subject:** Day 3 with TicketScan — set your target on Inter Miami?
**Body:**
> Three days ago you signed up and added Inter Miami CF vs Portland Timbers (May 17, Nu Stadium) to your watchlist. Nice — you're already past the first hurdle.
>
> One thing left: set a target price. We'll email you the moment Ticketmaster, SeatGeek, or StubHub drops below your number. Without a target, we can show you trends but can't proactively alert you.
>
> Match day is 9 days away. Most price drops happen in the final 7 days — set your number now so you don't miss them.
>
> [Set your target](https://www.ticketscan.io/event/vvG1VZbMCqxULm)

**Send timing:** Tomorrow May 8 20:33 UTC ±tolerance. **First event-specific Day-3 fire in the queue. Same calendar day as Inter Miami's T-7d algo-flip threshold (May 10) is 2 days later — pre-flip context worth surfacing.**

---

### Carries from yesterday (continue)

- **dr.altvater Day-17:** body "two weeks and three days ago"; subject pivots to "Two weeks and a few days in."
- **josh Day-18:** body "two weeks and four days ago"; AEW May 24 still 17d out.
- **nicklib Day-20:** Day-21 frame "almost three weeks since the Phillies game" parses cleanly. 2-day shelf life.
- **pete Day-27:** Day-30 template queued for May 10. 3 days out.
- **lilianamasyrubi Day-9:** last day of Day-7 family tolerance. **Tomorrow → Day-10 pivot.**
- **zhili1208 Day-8:** Day-7 family 24h carried. Hard expiry tomorrow.
- **taranimeramaro / nmcnamee99 Day-12:** Day-10 family, "Twelve days in." Hard expiry May 9.

---

## Psychology-driven micro-optimization (today)

**Principle:** Loss aversion (Kahneman & Tversky)
**Where to apply:** Event detail page banner (web/src/app/event/[id]/page.tsx) when a logged-in user has the event on their watchlist with `target_price=null`; also surface in the `/watchlist` list view as a per-row state indicator.

**The diagnosis:** jadbennis0 is the cleanest possible test case. They activated 32 seconds after signup (fastest in the dataset) but did NOT set a target price. As of today, the activation has been frozen in a half-state for 38 hours. The product behavior without a target is silent — the user feels like they "did their part" by adding the watchlist item, but they have effectively opted out of price alerts. The current UX makes this invisible.

**Specific change:** Render a persistent, dismissable warning state on every watchlist item (event detail page top + watchlist list row) when `target_price IS NULL`:

```
⚠️ You won't get price alerts for this event.
   Without a target price, we can show you trends — but we can't email
   you when prices drop. [Set target →]
```

The framing is intentionally **loss-aversion** rather than gain-promise:
- ❌ Gain frame: "Set a target price to get alerts" (status quo, hides the problem)
- ✅ Loss frame: "You **won't** get alerts" (makes the silent failure visible)

**Why this works (loss aversion):**
1. **Loss is felt 2x as strongly as equivalent gain** (Kahneman-Tversky prospect theory). Surfacing the loss state activates a stronger urge to resolve than promising an upside.
2. **Default vulnerability aversion** — users react more strongly to "you are currently exposed to a risk" than to "you could improve your setup."
3. **Specificity of the loss** — "we can't email you when prices drop" is concrete and contextual. The user knows exactly what they're forgoing.
4. **Action friction is minimal** — one CTA, one input. The loss → resolution path is single-click.

**Pairs naturally with yesterday's commitment/consistency 3-step indicator:** Step 3 ("Set a target price") becomes the resolution path for this loss-aversion banner. The banner is the in-product mirror of Step 3's incomplete state — same gap, two surfaces.

**Quantitative target:** Currently 86 / 86 watchlist items have `target_price=null` = **100% capture failure on target price.** Aim for 30-day capture rate of 40-60% on the *new* watchlist items created post-deploy. This is a fix that has cumulative gain — every non-null target unlocks a future alert.

**Implementation cost:** ~1.5h frontend (one component, two surfaces, one optional dismissal-with-localStorage). Backend: no change required — `target_price` already exists on watchlist rows; the UI just needs to read NULL vs not-NULL and conditionally render.

**Cross-agent route:** **CRO Agent (Agent 6)** to scope/implement. **Highest-leverage micro-fix in the queue today** because:
- It addresses the only fresh activation in 11 days (jadbennis0) that completed half-way.
- It addresses the structural 100% target_price-null pattern across all 86 watchlist items.
- It has the cleanest possible single-user A/B test in the next month: jadbennis0 + every new activation that follows.

---

## Cross-agent dependencies

1. **→ Email Agent (Agent 5):** Win-back email content above is queued and ready. **5-user batch for Day-14/15 cleanup is the largest possible single-batch cleanup the queue can ever deliver.** Plus joseph Day-3 tonight and jadbennis0 Day-3 tomorrow. **If engine returns today: 6 emails clear in 24h.** This would be the single largest send batch of the entire 31-day outage.

2. **→ CRO Agent (Agent 6):** Two stacked high-leverage fixes:
   - **Loss-aversion target-price banner (TODAY's recommendation)** — directly addresses jadbennis0's 38h-frozen half-activation and the structural 100% target-null pattern.
   - **3-step onboarding progress indicator (yesterday's recommendation)** — still queued; complements the banner by surfacing the same Step 3 gap pre-watchlist-add.
   - **Inline target-price capture on watchlist add** (yesterday's secondary) — make `target_price` a required-or-explicitly-skipped field at watchlist creation, not a separate post-add step.

3. **→ Ads Agent (Agent 4):** Attribution-pull priority holds at "still valuable, no longer load-bearing." 14 days carried. **New question worth answering: what was different about jadbennis0's source that produced 32-second activation but zero follow-up actions?** The instant-activation-then-freeze pattern is a new shape in the dataset. If attribution is high-intent (e.g., direct from a comparison article), the freeze suggests the next-step UX is failing them; if it's low-intent (e.g., a random social share), the freeze is consistent with low engagement.

4. **→ Content Agent (Agent 3):** **MLS / Inter Miami / Nu Stadium / Miami market** are NEW categories in the dataset since May 5. None have content coverage in the 24 venue / 37 city / 17 World Cup pages. **First MLS-specific content opportunity remains open.** Inter Miami CF, Nu Stadium Miami, MLS regular season (Messi proximity to Miami market). Recommend scoping a venue page for Nu Stadium and a city/category page for Miami MLS. **The Inter Miami event hits T-7d on May 10 — content live by then would catch the algo-flip threshold organically.**

5. **→ Engineering / Drip-Engine:** Day 31 of outage. **Final on-schedule Day-14 fire window of the entire outage was missed last night (ggri73 21:18 UTC May 6).** Every Day-14 fire of the outage has now missed its native day. **Closed-out failure mode is locked in.** Today's 3 fresh overnight Day-14 transitions (mark/aw/ajv) extend the missed-cohort to 5 users. **Same-day 5-user Day-14/15 cleanup batch is queued for delivery the moment engine returns.** This would also serve as the post-mortem case study for the outage.

---

## Summary metrics

```
Total users:              66 (=)
Real users:               63 (=)
Activated:                45 (=)
Activation rate:          71.4% (real, =) — 24h numerator-driven climb holds
Watchlist items:          86 (=, 38h flat — new flat counter started)
Newsletter subscribers:   3 (95 days flat = 13 weeks + 4 days)
Active alerts:            0 (Day 31)
Triggered alerts:         0 (lifetime)
Drip emails sent:         0 (Day 31)
Cumulative passed-no-notify: 13 (+1, Cubs/Reds May 6 last night — Cubs trip 100% CLOSED)
Algo-flip-quiet streak:   8 days
Activation gap (real):    17/63 = 27.0% (=)
Unknown-source activation: 1/8 = 12.5% (=)
Day-14 missed cohort:     5 users (charlesteel + ggri + aw + ajv + mark) — peak today
Day-14 fresh transitions today: 3 (aw, ajv, mark — all overnight)
Two-day signup streak:    DEAD (May 6 = 0, May 7 = 0 so far)
Target-price capture:     0/86 watchlist items = 0%
```

**Headline:** The final on-schedule Day-14 fire window of the entire 31-day outage was missed last night (ggri73 21:18 UTC May 6). Three more Day-14 transitions overnight bring the missed-cohort to 5 users — the largest single-night churned inflow of the outage. The full ajvanprooyen Cubs trip closed without a single product email — cumulative passed-no-notification: 13. **Tonight's joseph Day-3 fire is the only on-schedule fire window currently approaching. If engine returns today, a 6-email batch clears in 24h: joseph Day-3 tonight + 5-user Day-14/15 cleanup + jadbennis0 Day-3 tomorrow.**
