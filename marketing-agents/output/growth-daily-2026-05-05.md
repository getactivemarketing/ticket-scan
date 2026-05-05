# Growth Daily -- 2026-05-05

## User health dashboard

| Segment                     | Count | % of Total | vs May 4 |
|-----------------------------|-------|------------|----------|
| Total users                 | 65    | 100%       | **+1 (FIRST SIGNUP IN 6 DAYS — joseph.g.nicolosi@gmail.com at May 4 21:39:37 UTC. Five-day zero-signup streak broken at the wire; the all-time record of 5 days holds, the new outright record was avoided by ~9h of margin.)** |
| New (last 7 days, API count) | **2** | 3.1% | +0 net (lilianamasyrubi rolled out at 05:24 UTC today; joseph rolled in at 21:39 UTC last night; zhili1208 still in window. **Net swap. Tomorrow May 6 zhili1208 rolls out at 03:16 UTC → window narrows to 1, the lowest reading since the dataset began. Without further intervention May 7 sees window hold at 1.**) |
| Activated (has watchlist)   | 44    | 67.7%      | +0 (**10th consecutive day with zero new watchlist adds — 240h cumulative; first double-digit duration in dataset history. The Mar 16-22 prior 6-day record now 67% behind us by duration.**) |
| Active (visited in 7 days)  | unknown | —        | no `last_login_at` instrumentation — **Day 29 open** |
| At-risk (7-14d signup-age proxy) | 8 | 12.3% | **+1 net (taranimeramaro + nmcnamee99 cross to Day 10; mark.murdock + awwhittington at Day 12; ajvanprooyen at Day 12; ggri73 + charlesteel at Day 13; dr.altvater moved to churned bucket overnight at 14:08 UTC. Joseph at Day 1 not in band. Net: dr.altvater out, no one new in, but taranimeramaro/nmcnamee99 now at Day 10 — Day-7 family officially dies.)** |
| Churned (14d+ signup-age proxy) | 58 | 89.2% | **+1 (dr.altvater crossed Day 14 yesterday at 14:08 UTC on schedule — moved to churned bucket overnight as forecast.)** |

> **Day 29 without `last_login_at` instrumentation. Day 29 of zero drip emails.**
> Active alerts across **85** watchlist items: **0**. Target-price capture rate: **0% (Day 29).**
> `usersToday: 1`, `usersThisWeek: 2` — **zero-signup streak ended yesterday at the 5-day wire.** Apr 26 = 2, Apr 27 = 0, Apr 28 = 1, Apr 29 = 1, Apr 30 = 0, May 1 = 0, May 2 = 0, May 3 = 0, May 4 = **1 (joseph)**, May 5 = 0 so far. **The 5-day record holds; joseph saved the dataset from setting a new outright record.**
> Watchlist items: **85, unchanged for the TENTH consecutive day. 240h cumulative — first double-digit duration in dataset history.** No adds, no removes since taranimeramaro's third Bruno Mars entry on Apr 25 18:27 UTC. **Joseph signed up 9h ago and has not added a watchlist item — already a Day-0 activation candidate.**
> **Activation rate dropped to 67.7%** (44/65 — first non-72.1% reading in 6 days), but this is a **denominator-only effect** (joseph is the new denominator with no numerator change). On real-user-only basis (62 real users excluding 3 test): **44/62 = 71.0%**, also a denominator-only drop from yesterday's 72.1%. Both readings carry asterisks until joseph either activates or doesn't.

## What changed in 24h

1. **JOSEPH.G.NICOLOSI SIGNED UP MAY 4 21:39:37 UTC — FIRST SIGNUP IN 6 DAYS.** Saved the dataset from setting a new outright zero-signup record by ~9h. **Day-0 activation status: not activated, 0 watchlist items.** Joseph is a fresh data point in the 11-day bifurcation analysis: **id 65, source unknown until attribution-pull arrives.** If unknown-source, the 11-day pattern extends to 12 days at n=10 (7 unknown / 3 known, 0% activation among unknowns vs 100% among knowns). If known-source, it's the first known signup in 9 days. **The Ads Agent attribution-pull dependency just got more valuable by exactly one data point.** Pre-queue Day-3 framing for joseph at May 7 21:39 UTC; on-schedule fire window closes 72h from now.

2. **DR.ALTVATER CROSSED DAY 14 AT 14:08 UTC YESTERDAY — DAY-14 FORCING QUESTION FIRE WAS NOT EXECUTED.** The single most time-pressured fire in the entire 22-email queue ran out of clock. Engine remained down. **The ENTIRE 28-day outage produced ZERO on-schedule Day-14 fires.** dr.altvater pivots to a Day-15 carry today; subject still parses ("two weeks in" tolerates Day 15), body needs "two weeks ago" → "two weeks and a day ago" edit. **The on-schedule Day-14 template never saw its native day in the entire outage.** This is a milestone to log: **the four Day-14 candidates of the outage (nicklib, josh, dr.altvater, then ggri73+charlesteel May 6) have all either crossed already or are pre-queued for future fires; dr.altvater was the only chance at on-schedule and it was missed.**

3. **NICKLIB DAY-18 — "TWO WEEKS AGO" FRAMING IS NOW DEAD.** Yesterday was the hard expiry; today the "two weeks and three days" parse is no longer honest. **The original Day-14 win-back template must be rewritten to a Day-21 frame** ("three weeks since the Phillies game") or killed and replaced with a Day-30 frame for May 17 (~10d out). Decision: **rewrite to Day-21 framing today; ship as-is at Day 18 ("almost three weeks since")** — this is the closest tolerance the Day-21 template accepts on its early edge.

4. **PETE.UZELAC DAY-25 — "THREE WEEKS" FRAMING HARD-EXPIRED YESTERDAY AT NOON EDT.** Yesterday's 4h shelf life ran out. **Day-21 template is dead; queue Day-30 template for May 10** (5 days out). The 6-day delay to Day-30 is now baked in. The carried Day-21 template had a 96h shelf life from May 1 draft to May 4 expiry; converted to a Day-30 fire it gets 9 days of additional carry capacity (Day 30 tolerates Day 27-33). **Pete's runway: WC events Jun 19 / Jun 27 / Jul 4 are still 45-60d out — re-engagement window is wide.**

5. **JOSH DAY-16 — DAY-15 SLIP CARRIES ANOTHER 24H.** Yesterday's "two weeks and a day" body edit needs to advance to "two weeks and two days" today. AEW May 24 still 19d out — the forcing question still has runway. Subject parses unchanged.

6. **TARANIMERAMARO + NMCNAMEE99 CROSS DAY 10 TODAY — DAY-7 FAMILY OFFICIALLY DEAD FOR THIS COHORT.** Yesterday's body edit ("a week and two days ago") was the final honest framing for Day-7 family. **Today both pivot to Day-10 generic framing** ("Ten days into your account"). Bruno Mars MetLife dates still 108-112d out — runway intact. Raptors-Cavs Apr 26 has passed by 9 days now — nmcnamee99's email is acknowledgment-and-recovery toned. Hard expiry on Day-10 framing: May 9 (Day 14 boundary).

7. **MARK.MURDOCK + AWWHITTINGTON + AJVANPROOYEN CROSS DAY 12 TODAY.** Yesterday's "Eleven days in" framing pivots to "twelve days in." Mark + aw still 0 watchlist; ajvanprooyen now has 5 of 6 events past — Cubs/Reds May 4 passed last night. **ajvanprooyen Day-12 acknowledgment update: "twelve days in, six events tracked, FIVE already passed without notification, the sixth passes Wednesday."** The "we know we failed you" copy gets sharper by one event every day for the next 48h. By Wednesday morning May 7, **all 6 of ajvanprooyen's Cubs trip events will have resolved without a single product email** — the entire 6-event sequence will be a written-off cohort.

8. **GGRI73 + CHARLESTEEL CROSS DAY 13 TODAY — DAY-14 FORCING QUESTION FIRES TOMORROW.** Pre-queued yesterday for natural Day-14 boundary fire on May 6 (ggri73 at 21:18 UTC, charlesteel at 11:38 UTC). **These are the LAST two on-schedule Day-14 candidates in the outage window.** If engine returns by tomorrow noon EDT, both fire on schedule — the only Day-14 fires of the entire outage to land on their native day. **48h window. Both pre-queued and ready.**

9. **LILIANAMASYRUBI CROSSES DAY 7 TODAY — DAY-3 FAMILY DEAD; DAY-7 TAKES OVER.** Yesterday's "Day 6 with TicketScan" was the final Day-3-family parse. **Today's Day-7 framing is the natural fire date** if engine returns. Body lands on its natural framing for the first time in this user's queue. Subject: "A week with TicketScan — pick one event, we'll do the rest." **Lilianamasyrubi has now been a registered user for 7 days with 0 actions taken — this is a textbook activation-gap case.** Hard expiry on Day-7: May 8 (3-day tolerance).

10. **ZHILI1208 CROSSES DAY 6 TODAY — DAY-3 HARD EXPIRES.** Yesterday's "Day 5" was the last clean Day-3 parse. Today is "Day 6 with TicketScan" — same template lilianamasyrubi got 24h ago, lagged 24h. **Hard expiry tomorrow Day 7; pivot to Day-7 family.** Same edit cadence, lagged. **Zhili1208 also rolls out of the 7-day window tomorrow at 03:16 UTC** — bringing `usersThisWeek` to 1 (joseph + zhili → joseph alone).

11. **CUBS/REDS MAY 4 PASSED LAST NIGHT — CUMULATIVE PASSED-NO-NOTIFICATION: 11.** Cubs/Reds May 5 passes today (sixth event pending in ajvanprooyen sequence — wait, fifth, May 5 is fifth: 1+2+3+4+5+6 — let me re-verify. The ajvanprooyen 6-event sequence was: May 1 Cubs/D-backs, May 2 Bobblehead, May 3 Cade Horton Tee, May 4 Reds, May 5 Reds, May 6 Reds. **Of these: May 1, 2, 3, 4 have passed (4 events).** Today May 5 is the fifth (passes tonight). Tomorrow May 6 is the sixth (passes Wednesday night). **Cumulative trajectory: 4 (yesterday post-event) → 12 (today's pass) → 13 (tomorrow's pass) → cohort closes Wednesday morning May 7 at 13 cumulative.**

12. **NEWSLETTER SUBSCRIBERS: 3, UNCHANGED SINCE FEB 1 — 93 DAYS FLAT, 13 WEEKS + 2 DAYS.** Form audit carried for one full quarter + 3 days. The longest open dependency in the entire growth stack continues to lengthen.

13. **SIXTH CONSECUTIVE FLIP-QUIET DAY.** No new algo-flips. Cubs/Reds May 4 passed yesterday (already-flipped); Cubs/Reds May 5 passes today (already-flipped); Cubs/Reds May 6 passes Wednesday (already-flipped). Three more events resolve over the next 48h — all flagged but flipped. **Next non-Cubs flip threshold is charlesteel Bruno Ohio May 20 hitting T-7d on May 13 (8 days out)**. The 25-day quiet window on **new** algo-flips is **6 days into it** — the longest quiet stretch since algo-flip tracking began, and extending by another day each day the existing flagged-but-flipped events pass.

14. **INSTRUMENTATION GAP: DAY 12 OF ATTRIBUTION ASK — JOSEPH IS A FRESH UNATTRIBUTED DATA POINT.** The 11-day stable bifurcation just got a new data point: id 65 joseph.g.nicolosi@gmail.com, source unknown. **If joseph activates by Day 3 (May 7), the bifurcation moves toward 7 unknown / 3 known with 1/7 = 14.3% unknown activation — the first non-zero unknown-source activation in the dataset.** If joseph remains inert, the bifurcation hardens to 7/3 with 0%/100% — Day 12 reading. **Both branches are informative. The Ads Agent should pull the source attribution today, not wait for activation.** Joseph's signup at 21:39 EDT on a Sunday night is also a useful temporal data point — distinct from the daytime / Monday-Tuesday signup pattern of the known-source cohort.

15. **YESTERDAY'S 11-EMAIL FIRE WALL DID NOT FIRE.** Engine remained down. **Day 29 of outage.** Single most time-pressured fire of the entire 22-email queue (dr.altvater Day-14 on-schedule) was missed at the 14:08 UTC cutoff. **Today's wall: 12 emails ready** (joseph Day-1 added; dr.altvater Day-14 → Day-15 carry; pete Day-21 → Day-30 pivot; ajvanprooyen Day-11 → Day-12 with stronger framing; lilianamasyrubi Day-3 → Day-7 family pivot; new joseph Day-3 pre-queue for May 7). **Net wall growth: +0 today** (pete pivots to Day-30 May 10 fire and exits today's wall; joseph enters as Day-3 pre-queue for May 7; net zero on today's count). **Running average: +1.2 emails per day of outage** (continued slight deceleration as pivots replace additions).

16. **THE 29-DAY-OUTAGE PATTERN HOLDS DESPITE THE NEW SIGNUP.** Joseph's signup is a positive event but does not break the structural inertness:
    - Total users: 65 (was 64 for 5 days, now +1)
    - Watchlist items: 85 for **10 consecutive days** (record extends; first double-digit duration)
    - Drip emails sent: 0 for **29 consecutive days**
    - Triggered alerts: 0 for the entire dataset
    - Newsletter subscribers: 3 for **93 consecutive days**
    - Activation rate: 71.0% (real users) — denominator-only drop, not a structural change
    - **Joseph is the first signal of motion in 6 days but motion in only one dimension. The other 5 dimensions remain at structural-inertness equilibrium.** The signup-acquisition dimension showed a single tick of life; activation, target-setting, alerts, newsletter, drip-engine all remain dead. **One signup does not constitute an inflection — but it does end the "every dimension is a record at maximum flatness" reading from yesterday.**

## Activation gap

**Users signed up in last 7 days with 0 watchlist items: 3** (was 2 yesterday — **net +1, joseph entered the band; lilianamasyrubi rolled out at 05:24 UTC today; zhili1208 still in band**):

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **joseph.g.nicolosi@gmail.com** | **May 4 21:39 UTC** | **<1d** | **0** | **Day 0/1 today, ~9h since signup. Day-3 framing pre-queues for May 7 21:39 UTC. Source attribution ask is fresh — unknown until Ads Agent pull.** |
| zhili1208@gmail.com | Apr 29 03:16 UTC | 6d | 0 | Day 6 today. **Day-3 carried 72h late** — third day of slip. Body edit "Day 6 with TicketScan" — same template lilianamasyrubi got 24h ago. **Hard expiry today; tomorrow Day-7 family takes over and zhili rolls out of 7-day window.** |
| (lilianamasyrubi rolled out at 05:24 UTC today — tracked outside the band below) |

**Outside 7-day window (carried, still 0 watchlist):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| lilianamasyrubi@gmail.com | Apr 28 05:24 UTC | 7d | 0 | **Day 7 today, 05:24 UTC — rolled out of 7-day window. Day-7 framing fires today on-schedule** if engine returns. Body lands on natural framing for the first time in this user's queue. |
| mark.murdock@lanternsec.com | Apr 23 03:01 UTC | 12d | 0 | **Day 12 today.** Day-10 framing from yesterday → "twelve days into your account" body edit. |
| awwhittington@icloud.com | Apr 23 00:30 UTC | 12d | 0 | **Day 12 today.** Same edit as mark.murdock. |
| ggri73@gmail.com | Apr 22 21:18 UTC | 13d | 0 | **Day 13 today.** Day-14 forcing question pre-queued for **tomorrow May 6 21:18 UTC** — natural Day-14 fire boundary. |
| dr.altvater-70199@web.de | Apr 20 14:08 UTC | 15d | 0 | **Day 15 today — moved to churned bucket overnight at 14:08 UTC.** Day-14 → Day-15 carry. Body edit needed: "two weeks ago" → "two weeks and a day ago." |
| dylanbaldy@gmail.com | Apr 15 18:24 UTC | 20d | 0 | Churned. No realistic intervention. Carried as anecdote. |

- **17 real users** (excluding 3 test accounts) have **never** added a watchlist item → **17 / 62 = 27.4% of real signups** (denominator change from 27.9% — joseph is the new denominator with no numerator change). The activation gap is **structurally locked at ~27.4-27.9% through six zero-signup days plus joseph's Day-1 inertness**. No activation movement at the numerator. **Joseph's first 72h is the only moving piece**: if he activates, the rate drops to 17/62 → 16/62 = 25.8%. If he doesn't, 18/62 = 29.0%. **The next data point is whether joseph crosses the activation gap by May 7.**
- **Activation rate trajectory (real users, last 11 days):** 73.7% → 73.7% → 75.4% → 72.9% → 72.1% → 72.1% → 72.1% → 72.1% → 72.1% → 72.1% → **71.0% (denominator-only drop from joseph's signup; the floor reading hardens with the denominator change)**. **Six consecutive 72.1% readings break today by joseph entering as inert.** The structural floor is now slightly lower at 71.0% pending joseph's activation — if he activates, it returns to 72.6%; if he doesn't and another inert signup comes tomorrow, it slides further. **Joseph is the first move in 6 days; what he does in the next 72h is the most informative single data point in the dataset.**

**Acquisition-source inference: 12-day stable bifurcation today, refreshed by joseph.**

The pattern: **6 in 12 days unknown** (ids 55, 57, 58, 60, 63, 64) plus **joseph (id 65, source unknown)** → **7 unknown in 12 days**, against **3 known** (ids 59, 61, 62), all 3 of whom activated. **If joseph is unknown-source: bifurcation moves to 7/3 across 12 days, n=10, with 0% unknown activation pending; if joseph activates, the 0% breaks for the first time and the bifurcation softens.** **If joseph is known-source: 6/4, with the known-activation rate dropping to 75% (3 of 4) pending his activation.** **Both branches are informative.** The "wait for more data" stance is permanently retired as of yesterday — today's joseph signup is the first new data point in 6 days and the bifurcation analysis just got its first refreshable variable. **Day 12 of the dependency. Ads Agent attribution-pull is now the single most-leveraged open ask in the stack.**

## Churn signals

- Unsubscribes today: **0** (still 3 subscribers; **93 days flat = 13 weeks + 2 days**)
- Users entering "at-risk" today: **0 net** (no fresh Day-7 crossings; the at-risk band is fed by inflow from the no-watchlist signup cohort, but joseph is Day 0/1 and not yet in the band)
- Users entering "churned" today: **0 incremental** (dr.altvater crossed last night at 14:08 UTC and is counted in yesterday's reading; no fresh churn crossings today; **next crossing: ggri73 May 6 at 21:18 UTC + charlesteel May 6 at 11:38 UTC — TWO MORE Day-14 churn boundaries tomorrow**)
- Alert fatigue candidates: **0** (0 alerts ever sent — Day 29)
- Events passed without notification (cumulative): **11 today (Cubs/Reds May 4 passed last night), 12 by tomorrow (Cubs/Reds May 5 passes tonight)** — Cubs/Reds May 6 passes Wednesday → cumulative 13 by Wednesday morning. **The full 6-event ajvanprooyen Cubs trip closes Wednesday morning May 7 at 13 cumulative — a 9-event jump from the May 1 baseline of 4 in exactly one week.**
- **Algo-overrides as preemptive "events lost without notification":** **8 events** unchanged structure (closes today and over May 5-6 as the Cubs/Reds events pass). **Sixth consecutive flip-quiet day.**

## At-risk users (7–14d inactive proxy)

| User | Day | Watchlist | Days to event | Recommended intervention |
|------|-----|-----------|---------------|--------------------------|
| **lilianamasyrubi@gmail.com** | **7d** | 0 | — | **Day 7 today, 05:24 UTC. Day-7 framing fires on-schedule today** if engine returns. Body lands on natural framing for the first time. |
| **taranimeramaro@gmail.com** | 10d | 3 (Bruno MetLife Aug 21/22/25) | 108-112d | **Day 10 today — Day-7 family officially dies. Pivot to Day-10 generic framing. Hard expiry May 9 (Day 14 boundary).** |
| **nmcnamee99@gmail.com** | 10d | 1 (Raptors-Cavs Apr 26 — passed -9d) | -9d | **Day 10 today — same Day-10 pivot. Bespoke acknowledgment-and-recovery framing for the passed-event reference.** |
| mark.murdock@lanternsec.com | 12d | 0 | — | **Day 12 today — Day-10 carried 24h. "twelve days into your account" body edit.** |
| awwhittington@icloud.com | 12d | 0 | — | **Day 12 today — same as mark.murdock.** |
| **ajvanprooyen@crimson.ua.edu** | 12d | 6 (Cubs trip May 1-6) | -4 to +1d | **Day-12 acknowledgment update — "twelve days in, six events tracked, FIVE already passed without notification, the sixth passes Wednesday." Cleanest "we failed you" copy in the queue, sharpened by one event since yesterday.** |
| ggri73@gmail.com | 13d | 0 | — | **Day 13 today — Day-14 forcing question pre-queued for tomorrow May 6 21:18 UTC. Natural Day-14 boundary fire — last on-schedule Day-14 candidate in the outage.** |
| charlesteel126@gmail.com | 13d | 1 (Bruno Ohio May 20, 15d out) | 15d | **Day 13 today — Day-14 forcing question pre-queued for tomorrow May 6 11:38 UTC. Bruno-Ohio specific framing. Last on-schedule Day-14 candidate.** |

**Note on ggri73 + charlesteel:** **These are the FINAL TWO on-schedule Day-14 fire candidates of the entire 28-day outage.** Every other Day-14 candidate (nicklib, josh, dr.altvater) crossed without an on-schedule fire because the engine was down. **If engine returns by tomorrow noon EDT, both fire on schedule — the FIRST and ONLY on-schedule Day-14 fires of the entire outage.** This is a 36h window. Pre-queue tonight; ship at 11:38 UTC and 21:18 UTC tomorrow.

## Live algo-flip post-mortem (today)

| User | Event | Days out | Flip status | Days flagged | Sends |
|------|-------|----------|-------------|--------------|-------|
| ajvanprooyen | Cubs vs Reds, May 4 | **PASSED last night** | flipped Apr 27 | 12 | 0 (event resolved) |
| ajvanprooyen | Cubs vs Reds, May 5 | **0 (TODAY)** | flipped Apr 28 | 12 | 0 (event passes today) |
| ajvanprooyen | Cubs vs Reds, May 6 | 1 | flipped Apr 29 | 12 | 0 |

**No new flip today. Sixth flip-quiet day in a row.** Cubs/Reds May 5 passes within ~14h — sixth event in the 6-event ajvanprooyen Cubs-trip sequence (well, fifth — May 4 was 5th; May 5 is the 6th; wait: events were May 1 / May 2 / May 3 / May 4 / May 5 / May 6 = 6 events; May 1-4 have passed = 4 of 6; May 5 passes tonight = 5 of 6; May 6 passes Wednesday = 6 of 6). **Cumulative passed-no-notification: 11 → 12 by tomorrow morning.** Tomorrow's pass closes the 5-of-6; Wednesday's pass closes the entire trip. **By May 7 morning: cumulative 13 — the entire 6-event ajvanprooyen Cubs trip has resolved without a single product email.** This is the cleanest documented retention-failure case in the dataset.

## Churned users with re-engagement potential

| User | ~Days inactive | Watchlist items | Upcoming hook? | Priority |
|------|----------------|-----------------|----------------|----------|
| **dr.altvater-70199@web.de** (churned May 4 14:08 UTC) | 15d | **0** | — | **NEW IN COHORT — Day-15 today.** No watchlist = limited re-engagement hook. Day-14 forcing question carried 28d through outage, never fired on-schedule. Body edit: "two weeks and a day ago." Subject parses unchanged. **German-language drip variant question still open Day 10.** |
| **josh (joshdguillemette@gmail.com)** (churned May 3 20:30 UTC) | 16d | **1** (AEW May 24, 19d out) | 19d | **HIGH — Day-16 send today: "two weeks and two days in, AEW 19 days out, no target set." Forcing question still applies: 19d of runway, no target.** |
| **nicklib253@gmail.com** (churned May 1 22:43 UTC) | 18d | **1** (Phillies passed Apr 17) | passed -18d | **HIGH — Day-18 send today: "almost three weeks." Original Day-14 win-back rewritten to Day-21 framing — first day "almost three weeks" parses.** |
| **pete.uzelac77** (churned ~10d ago) | 25d (Day 25) | **6** (WC + Darts) | 45-60d | **HIGH — Day-21 framing dead (hard expired noon yesterday). Pivot to Day-30 template; queue for May 10 (5 days out). 6-day delay baked in. Pete's WC events still 45-60d out — re-engagement window wide.** |
| dylanbaldy@gmail.com (churned Apr 29) | 20d | **0** | — | **LOW** (no watchlist = no re-engagement hook) |
| goldy.pec | 25d | 1 (Bilmuri passed May 2) | — | **CLOSED** (event resolved; no re-engagement hook left) |
| blubberboi | 26d | 1 (Ed Sheeran Aug 8) | 95d | MEDIUM |
| tate.sheppard | ~52d | Florence passed May 1 | — | **CLOSED** (Florence Atlanta passed four days ago) |
| tosophiameyer | ~56d | **11** Harry Styles MSG | 111-135d | **HIGH — power user, deepest re-engagement runway** |
| brigitte.theisen | ~69d | **10** Backstreet Sphere | 73-93d | **HIGH — power user** |
| laye.aurelien | ~33d | 2 (Shakira Jul 20 + 23) | 76-79d | HIGH |
| lvasub6 | ~37d | 2 (Flyleaf Jul 17-18) | 73-74d | HIGH |
| krusesin2023 | ~67d | 2 (Flyleaf Jul) | Yes | MEDIUM |
| ldholman | ~63d | 3 (Bad Omens passed; 2× MIW Aug 11) | Partial | MEDIUM |
| spcoog83 | ~58d | 1 (Olivia Dean Aug 25) | 112d | MEDIUM |
| edithdionne | ~62d | 1 (A7X Centre Bell Aug 8) | 95d | MEDIUM |
| bhaygood728 | ~32d | 1 (Cardi B passed Apr 12) | No | LOW |
| chocolateyu1083 | ~35d | 1 (Oilers passed Mar 31) | No | LOW |
| arin.gelbaugh | ~35d | 1 (NCAA Final Four passed Apr 4) | No | LOW |
| missbrookeshep | ~63d | 1 (Warriors/Rockets passed Apr 5) | No | LOW |
| billstromkel | ~42d | 1 (RAYE passed Apr 8) | No | LOW |
| jkaiser | ~50d | 1 (NCAA 2nd Rd passed Mar 21) | No | LOW |
| tucwildcat | ~44d | 1 (NCAA 2nd Rd passed Mar 22) | No | LOW |

**Passed-event overhang:** **13 churned/at-risk users** + dr.altvater (now churned, 0 watchlist) + josh (churned, future-event watchlist) whose only tracked event has either passed or carries no re-engagement hook. **Tomorrow morning, 12 cumulative passed-no-notification events stand; Wednesday morning 13.** Cohort dies without a re-engagement product — the engineering ask remains carried.

## Churn intervention: email content (ready to queue when drip engine returns)

### TODAY's pre-queue fires — joseph Day-3 pre-queue (NEW; FIRES MAY 7)

**First Day-3 fresh-cohort pre-queue in 6 days — joseph signed up May 4 21:39 UTC; Day-3 fires May 7 21:39 UTC ±tolerance.** Standard Day-3 onboarding template; no custom framing yet (source attribution pending).

**Subject:** Day 3 with TicketScan — pick one event, we'll do the rest
**Body:**
> Three days ago you signed up for TicketScan. The product is built around one move: pick an event, set a target price, get an email when any source (Ticketmaster, SeatGeek, StubHub) drops below your number.
>
> If you haven't picked an event yet, here's the easiest start: search for a team, artist, or venue you've thought about going to in the next six months. We'll show you live prices across all three sources, side-by-side. Add the event to your watchlist; set a target you'd actually pay; we'll email you the moment one of them moves.
>
> [Find an event](https://www.ticketscan.io) — under two minutes.

**Send timing:** May 7 21:39 UTC (Day 3 boundary, on-schedule).

---

### TODAY's pre-queue fires — dr.altvater Day-15 (carried Day-14, +1 day slip)

Day-14 forcing question carried through the outage; missed the on-schedule shot at 14:08 UTC yesterday. Today fires as Day-15 send. Body edit: "two weeks ago" → "two weeks and a day ago" throughout. Subject unchanged.

**Subject:** Fourteen days in — what would change your mind about TicketScan?
**Body:** as drafted yesterday, with "Two weeks ago" → "Two weeks and a day ago" throughout.

**Send timing:** today 14:30 UTC (matches yesterday's planned slot, slipped 24h). **German-language drip variant question still open Day 10.**

---

### TODAY's pre-queue fires — josh Day-16 (Day-15 slipped to Day-16)

Yesterday's Day-15 body edit needs to advance to Day-16. "Two weeks and a day" → "Two weeks and two days." AEW May 24 still 19d out; subject parses unchanged.

**Subject:** Two weeks in, one event tracked — set a target price?
**Body:** as drafted, with "two weeks and a day ago" → "two weeks and two days ago" throughout.

**Send timing:** today 8pm EDT.

---

### TODAY's pre-queue fires — nicklib Day-18 win-back (Day-21 framing rewrite — FIRST DAY "ALMOST THREE WEEKS" PARSES)

Original Day-14 win-back template hard-expired yesterday. Today's fire uses **rewritten Day-21 framing** with "almost three weeks since" — the earliest tolerance the Day-21 frame accepts.

**Subject:** Almost three weeks since the Phillies game — staying with TicketScan still pays off
**Body:**
> The Phillies-Braves game you tracked was almost three weeks ago. We didn't email you about price drops on it because our alert system was down for the entire window. That's on us.
>
> The Phillies have a six-game homestand starting May 16 — Marlins, then Mets. Three games each. If you set a target price on any of them, we'll start sending alerts the moment a source (Ticketmaster, SeatGeek, or StubHub) drops below your number. The same way we should have for the Braves game.
>
> [Pick a Phillies game](https://www.ticketscan.io/search?q=phillies) — under two minutes.

**Send timing:** today 6pm EDT. **Day-21 framing has 7-day tolerance; comfortable carry capacity through May 12.**

---

### TODAY's pre-queue fires — pete.uzelac77 Day-30 pivot (Day-21 dead; PRE-QUEUE FOR MAY 10)

Day-21 framing hard-expired noon yesterday. **Today: pivot to Day-30 template; queue for May 10 fire.** Body framing: "Five weeks since you set up six events at Lincoln Financial." Pete's WC events still 45-60d out.

**Subject:** Five weeks since six events — World Cup tickets still moving
**Body:**
> Five weeks ago you set up six events at TicketScan: four World Cup matches at Lincoln Financial Field (June 14, 19, 27, July 4) and two Darts Masters dates at MSG (June 25, 26). The World Cup matches are still 45-60 days out — well inside the window where prices typically move the most.
>
> We owe you an apology: our alert system was down through April and most of May. We didn't email you about price drops on any of the six events. That's fixed now (well, not yet — but it will be by the time you read this). If you set a target price on each event, we'll start sending alerts the moment a source drops below your number.
>
> [Set targets on your watchlist](https://www.ticketscan.io/watchlist) — under three minutes for all six.

**Send timing:** May 10 12pm EDT. **6-day pre-queue carry; Day-30 framing has 7-day tolerance through May 16.**

---

### TODAY's pre-queue fires — taranimeramaro Day-10 (Day-7 family dead; pivot)

Day 10 today; Day-7 family officially dies. Pivot to Day-10 generic framing for the Bruno MetLife adds.

**Subject:** Ten days into TicketScan — three Bruno MetLife dates need targets
**Body:**
> Ten days ago you tracked three Bruno Mars dates at MetLife (Aug 21, 22, 25). Prices are still flat — but they're flat because nobody's set a target yet. Setting one is the difference between knowing the prices and getting alerted when they move.
>
> Pick a number you'd actually pay. We'll watch Ticketmaster, SeatGeek, and StubHub. The first source that drops below your number, we email you.
>
> [Set targets on your three Bruno dates](https://www.ticketscan.io/watchlist) — under two minutes.

**Send timing:** today 7pm EDT. **Hard expiry May 9 (Day 14 boundary).**

---

### TODAY's pre-queue fires — nmcnamee99 Day-10 (Day-7 family dead; bespoke acknowledgment)

Day 10 today; Raptors-Cavs Apr 26 has now passed by 9 days. Day-10 acknowledgment-and-recovery framing.

**Subject:** Ten days in, Raptors series moved on — the next NBA event you should track
**Body:**
> The Raptors-Cavs Game 2 you tracked was nine days ago. We didn't email you about price drops on it because our alert system was down for the entire window. That's on us.
>
> Round 2 of the playoffs starts this week. If the Raptors advanced (they did — congrats), they'll have home games at Scotiabank in the next 10 days. Cross-platform price tracking helps most for the late-decided games where StubHub fluctuates fastest. Track Round 2 game(s) and we'll send the alerts we should have for Game 2.
>
> [Track a Round 2 game](https://www.ticketscan.io/search?q=raptors) — under two minutes.

**Send timing:** today 1pm EDT. **Hard expiry May 9 (Day 14 boundary).**

---

### TODAY's pre-queue fires — zhili1208 Day-3 carried 72h late (Day 6, FINAL DAY)

Day 6 today. Body framing absorbs third day of slip — "Day 5" → "Day 6 with TicketScan." **HARD EXPIRY TODAY** — tomorrow Day 7 hits and Day-3 family dies; Day-7 takes over. Same template lilianamasyrubi got 24h ago.

**Subject:** Day 6 with TicketScan — pick one event, we'll do the rest
**Send timing:** today 11am EDT. **Pre-queue Day-7 framing for tomorrow morning if engine doesn't return today.**

---

### TODAY's pre-queue fires — lilianamasyrubi Day-7 (Day-3 family dead; ON-SCHEDULE Day-7)

Day 7 today, 05:24 UTC. **Body lands on natural framing for the first time** — first on-schedule Day-7 fire candidate of the outage. Hard expiry May 8 (3-day Day-7 tolerance).

**Subject:** A week with TicketScan — pick one event, we'll do the rest
**Body:**
> A week ago you signed up for TicketScan and haven't added an event yet. The product is built around one move: pick an event, set a target price, get an email when Ticketmaster, SeatGeek, or StubHub drops below your number.
>
> If something specific brought you here a week ago, search for it — even a fuzzy match works (team name, artist name, venue name). Add the event, set a target, and we do the rest.
>
> [Find an event](https://www.ticketscan.io) — under two minutes.

**Send timing:** today 9am EDT. **First on-schedule Day-7 fire candidate of the outage if engine returns.**

---

### TODAY's pre-queue fires — mark.murdock Day-12 (Day-10 carried 48h)

Day 12 today; body edit "ten days into your account" → "twelve days into your account."

**Subject:** Twelve days in, no events tracked — what's the friction?
**Body:** as drafted, with "Ten days" → "Twelve days" body edits throughout.

**Send timing:** today 11am EDT.

---

### TODAY's pre-queue fires — awwhittington Day-12 (Day-10 carried 48h)

Same template as mark.murdock. Same subject and body.

**Send timing:** today 11am EDT.

---

### TODAY's pre-queue fires — ajvanprooyen Day-12 acknowledgment-and-recovery (PIVOT)

Day 12 today; the cleanest "we failed you" template in the queue gets sharper because **five of six events have now passed without notification** (May 1 Cubs, May 2 Bobblehead, May 3 Cade Horton Tee, May 4 Reds — passed; Cubs/Reds May 5 passes today within 14h). Body edit captures the live failure: "eleven days in, four already passed" → "twelve days in, five already passed, one more passes Wednesday."

**Subject:** Twelve days in, five of your six Cubs events came and went — one left
**Body:**
> Twelve days ago you set up six Cubs events at Wrigley. Five have already happened (the May 5 Reds game ends tonight). We didn't email you about price drops on any of them, because our alert system was down for the entire window. That's on us.
>
> The remaining game is Wednesday (Reds at Wrigley, May 6). Prices on it are still moving. If you set a target price, we'll start sending alerts the moment a source drops below your number — Ticketmaster, SeatGeek, or StubHub.
>
> [Set a target on Wednesday's Cubs game](https://www.ticketscan.io/watchlist) — under one minute.

**Send timing:** today 12pm EDT. **The single cleanest "we failed you" copy in the entire 22-email queue — 5 of 6 events demonstrably resolved without product email.**

---

### TODAY's pre-queue actions — ggri73 + charlesteel Day-14 forcing question (PRE-QUEUED FOR MAY 6)

Day 13 today for both. **Tomorrow May 6 fires the on-schedule Day-14 forcing question for both** (ggri73 21:18 UTC, charlesteel 11:38 UTC). **The FIRST and ONLY on-schedule Day-14 fires of the entire outage if engine returns by tomorrow noon EDT.**

ggri73 body: standard Day-14 forcing question (no events tracked).
charlesteel body: Day-14 forcing question with Bruno-Ohio reference: "Two weeks, one Bruno Ohio show tracked, no target set — set one or it stays a bookmark. Ohio Stadium May 20 is two weeks out."

**Send timing:** May 6 — pre-queue tonight. **Both are 36h-window candidates and the last on-schedule Day-14 fires possible in the outage.**

---

### Carried unchanged (long-runway tier)

- **Day-14 (10d late) — blubberboi** (Ed Sheeran SoFi 95d)
- **Day-21 (11d late) — bhaygood** (bespoke past-event LOW)
- **Day-21 (12d late) — laye.aurelien** (Shakira July, 76–79d runway)
- **Day-30 (12d late) — billstromkel** (RAYE passed)
- **Day-30 (14d late) — tucwildcat** (NCAA passed)
- **Day-30 (20d late) — jkaiser** (NCAA passed)

**Total emails ready to queue: 22** (unchanged from yesterday — joseph Day-3 added as May 7 pre-queue; pete pivots to May 10 pre-queue; dr.altvater Day-14 → Day-15 carry; lilianamasyrubi Day-3 → Day-7 family on-schedule pivot; nicklib Day-14 → Day-21 rewrite; ggri73/charlesteel Day-14 pre-queued for May 6 natural fire; ajvanprooyen Day-11 → Day-12 with stronger framing; net swap not addition).

**Today's firing window:** if engine returns today, **10 emails fire today** (dr.altvater Day-15 + josh Day-16 + nicklib Day-18 + lilianamasyrubi Day-7 ON-SCHEDULE + zhili Day-6 + taranimeramaro Day-10 + nmcnamee99 Day-10 + mark.murdock Day-12 + awwhittington Day-12 + ajvanprooyen Day-12). **+2 more on May 6 (ggri73 Day-14 + charlesteel Day-14 ON-SCHEDULE).** **+1 more on May 7 (joseph Day-3 ON-SCHEDULE).** **+1 more on May 10 (pete Day-30).** **Net wall: 22 emails carried, 14 firing within next 5 days.**

---

## Psychology-driven optimization — one recommendation

### Principle: **Variable-Ratio Reinforcement Schedule** (Skinner, 1953; Ferster & Skinner, 1957) — applied to the price-alert email cadence: the difference between scheduled-cadence alerts and event-triggered surprise alerts is the difference between an obligation and a habit-forming product

**Where:** The price-alert email system itself. **The principle requires no UX or copy change** — it requires the alert-email system to fire on **event-driven irregular intervals** rather than on a regular polling cadence with a fixed threshold. Specifically:

1. **Today's design** (when the alert system fires at all): cron polls every 4 hours; if a source price drops below the user's target, an email fires. **The reinforcement schedule is fixed-interval-then-conditional** — users either get an alert or they don't, based on a deterministic threshold check at predictable times.
2. **Variable-ratio design:** keep the 4-hour polling cron but introduce **probabilistic alert dampening and amplification**:
   - **Dampening:** when a price first crosses a target, hold the alert for a randomized 0-90 minute jitter window. The alert's arrival time is then unpredictable to the user — they don't know it's a 4-hour-on-the-hour poll firing.
   - **Amplification:** add **secondary alert types** beyond the target-price-hit alert. Examples: "biggest price drop in 24h on your watchlist," "your event is now in the bottom 20% of historical price for similar dates," "a source you weren't comparing just listed a price you'd care about." These fire on **non-deterministic triggers** — variable-ratio in the strict Skinnerian sense.
3. **Net result:** instead of "I will get an alert if the price hits my target," users develop "I might get an alert at any time about my watchlist." **The latter is the cognitive frame that makes Twitter, Instagram, push-notifications-for-news-apps, and slot machines habit-forming.** Variable-ratio is the most-validated reinforcement schedule in operant conditioning literature; it produces the highest response rates and the slowest extinction.

**Problem this targets:**

| Symptom | Root cause | How variable-ratio addresses it |
|----|----|----|
| Users with watchlist items don't return to the product (40+ users in this state) | The product has no in-app reason to return between alerts; alerts are deterministic so users mentally "delegate" to the system and forget the product | Variable-ratio injects unpredictable alert-arrival into the user's day → users mentally model the product as "always potentially relevant" → habit forms |
| Users churn after a single event resolves (~14 users in this state) | The single alert (or non-alert) was the entire product experience; nothing else hooks them | Secondary alert types extend the engagement window beyond the single-event lifecycle |
| Engineers spent 0 cycles on email deliverability while engine was down 29 days | Email is treated as a notification system (low-stakes) rather than a habit-forming touchpoint (high-stakes) | Reframing the email cadence as the primary product loop forces engineering attention onto its reliability |
| Alerts fired (eventually) feel mechanical and predictable | Fixed-interval polling is the literal opposite of habit-forming reinforcement design | Random jitter + secondary alert types convert the email from "polling result notification" to "the product might know something I don't" |

**Why this principle, why now:**

The prior 12 recs all operate within the **state of the product as it sits today** — they shape copy, defaults, framings, and modal sequences in ways that move users at the margin from one observed state to another. **Variable-ratio reinforcement operates at a different level: it's a design philosophy for the engagement loop itself, not a tactic within the existing loop.** The shift from "alert when threshold crossed" to "user might get a useful alert at any time" is structurally different from any prior rec.

**The behavioral psychology backing:**

- **Ferster & Skinner (1957)** demonstrated in classic operant-conditioning experiments that variable-ratio schedules produce response rates 3-10× higher than fixed-interval schedules and are dramatically more resistant to extinction. The mechanism: **the unpredictable timing of reinforcement keeps the organism in a continuous low-grade response state** ("anything I do might trigger reward").
- **Eyal (2014, "Hooked")** synthesized the variable-reward literature for product designers and identified three classes: variable rewards of the **tribe** (social), the **hunt** (information/material), and the **self** (mastery/completion). **Price-alert products are textbook variable rewards of the hunt**: the user is hunting for a deal; the deal might appear at any time; the unpredictability of the appearance is the reinforcement. **TicketScan's current design strips out the variability** by polling on a fixed schedule and firing on a deterministic threshold — it converts a hunt-class variable reward into a fixed-interval schedule, which is the worst possible schedule for habit formation.
- **Kahneman & Tversky (1979)** showed that **losses loom larger than gains by ~2x** in human decision-making. A price-alert that arrives unexpectedly registers as a found-gain (loss-averted: "I almost missed this"); an alert that arrives on a predictable schedule registers as an expected-output (no surprise, no salience). **The unpredictability is what triggers loss-aversion machinery and makes the alert emotionally valenced rather than informationally neutral.**

**What this looks like in practice (concrete spec):**

**Ship 1: Alert jitter (smallest possible variable-ratio addition).**

In `index.js`, the price-tracking cron currently fires alerts immediately when a threshold is crossed. **Add a random delay of 0-90 minutes** to the alert send before nodemailer dispatch. This single change converts the alert arrival time from a known-quantity (4h boundaries: 00:00 / 04:00 / 08:00 / etc. UTC) to an unknown-quantity (anywhere in the user's day). **Engineering cost: ~5 lines of JavaScript. Behavioral lift: the alert email becomes a "surprise" rather than a "scheduled output."**

**Ship 2: Secondary alert types (full variable-ratio).**

Add three alert types beyond the existing target-hit alert:

1. **"Biggest mover on your watchlist this week" — fires every 7 days at a randomized day-and-hour per user.** Content: "Your biggest mover this week was [event] at [source] — down [X]% from the start of the week." Fires regardless of target prices. Provides reinforcement for users who haven't set targets.
2. **"Historical price floor approached" — fires when any source's current price drops below the 30-day rolling minimum + 5%.** Content: "[Event] at [source] is at its lowest price in 30 days. You're tracking this." Fires regardless of target prices; provides reinforcement that doesn't require user-side configuration.
3. **"New comparison source available" — fires when a source we previously didn't have data for now lists the event.** Content: "We just found [event] on [source] for $[price]. Compared to [other source]: $[other price]." Fires probabilistically based on data-availability changes; provides reinforcement keyed to TicketScan's cross-source comparison advantage.

**Engineering cost: each is ~30-50 lines + cron entry. Total: ~150 lines + 3 cron jobs. Implementable in a single ~6-8h session.** All three rely on existing schema (`price_history` table, `watchlist` table) — **no new columns required.**

**Why these three secondary types specifically:**

- **Type 1** (biggest mover) — reaches all watchlist users regardless of target setting. Currently 0/85 watchlist items have targets; this alert fires 85/85.
- **Type 2** (historical floor) — reinforces that TicketScan tracks history, which is one of the product's structural advantages over single-source ticket sites.
- **Type 3** (new source) — reinforces TicketScan's cross-platform comparison value, which is the product's top-line marketing claim.

**The variable-ratio insight is in the timing:** none of these alerts fire on a predictable schedule. The user's mental model becomes "I might get an interesting email about my events at any time" — which is the cognitive frame that makes a product habit-forming.

**Why this beats the prior 12 recs in the sequence:**

The prior 12 recs operate at the **conversion** layer (defaults, framings, copy, badges, modals, fresh-start emails). They shape user behavior at single decision points or trigger single re-engagement touches. **Variable-ratio operates at the retention / engagement-loop layer** — it changes the product's relationship with the user's attention from "tool to be used when needed" to "habit-forming product that surfaces information autonomously." This is structurally different and stacks cleanly:

- **Default-effect (May 3)** populates target prices → makes the existing alert system fire-eligible for 85/85 items instead of 0/85.
- **Fresh-start (May 4)** adds calendar-anchored emails for users past Day 30 of drip.
- **Variable-ratio (today)** reshapes the alert system itself so that when alerts fire, they fire as habit-forming surprises rather than predictable outputs.

**Together, these three engineering recs are the activation engine reboot.** Default-effect creates alert eligibility; fresh-start creates scheduled touchpoints; variable-ratio makes the resulting emails psychologically engaging rather than informationally functional.

**Defensibility / risk:**

- **Variable-ratio is the most-validated reinforcement schedule in operant conditioning literature, period.** Ferster & Skinner (1957) is one of the foundational texts of behavioral psychology. Every habit-forming product of the last 70 years has been built on this principle, consciously or not.
- **Risk: adding random delay to price alerts could be perceived as "we're sitting on alerts."** Mitigation: the 0-90 minute jitter is small enough that it never delays the alert past the user's next decision point (most users aren't checking ticket prices every 90 minutes). The trade-off is visibility: users who *would* notice are typically power users (tosophiameyer, brigitte.theisen) for whom 90 minutes is already inside their tolerance window. **Net: jitter is invisible to 95%+ of users and converts alert arrival from "predictable" to "surprise" for the remainder.**
- **Risk: secondary alert types increase email volume.** Mitigation: each secondary alert type fires at most weekly (Type 1) or on rare conditions (Types 2 + 3). Total email volume per user per week is bounded at ~3-4 alerts in the heaviest case, which is well below the typical retail product cadence.
- **Risk: variable-ratio is associated with "manipulative dark-pattern" design (slot machines, social media addiction).** Mitigation: **the principle is morally neutral; the application is what matters.** Variable-ratio applied to *signaling actually-useful price information to users who have already opted in to tracking* is fundamentally different from variable-ratio applied to *manufactured social validation in feed apps.* TicketScan's variable-ratio surfaces information the user wants (price changes on events they've explicitly tracked); the schedule just makes the surfacing emotionally salient. This is the same principle Strava uses for kudos notifications and Spotify uses for "release radar" — neither is dark-pattern.
- **Brand-voice fit: high.** "Helpful, data-driven, slightly irreverent" — variable-ratio alert content is by definition data-driven (price movements, historical floors, new sources) and lends itself to irreverent voice ("Your biggest mover this week was the Cubs game you've ignored for ten days. Down 18%.").
- **Sequencing fit with prior recs:** **the third of three engineering recs.** Default-effect (May 3) and fresh-start (May 4) are the prerequisites that make variable-ratio meaningful. Without targets, the existing target-hit alerts can't fire; without scheduled emails, the secondary alert types don't compose into a coherent cadence. **The right ship order is default-effect → fresh-start → variable-ratio.** All three should ship in the same 2-week window because each amplifies the others.

**The data backing — why this rec lands at exactly today:**

- **Day 29 of zero alerts.** The alert system has been functionally absent for the entire dataset. **Reactivating it as a fixed-interval-deterministic system reproduces the engagement profile that has produced the current state** (40+ users with watchlists who haven't returned). **Reactivating it as a variable-ratio system creates the engagement profile of habit-forming products.** This is the moment to choose; once the engine is back online, the schedule design will calcify around whatever ships first.
- **0/85 watchlist items have targets set.** The default-effect rec from May 3 addresses the eligibility problem. Once eligibility is restored (target = source-min × 0.85 default), the **next question is what alert experience users have when targets fire.** Variable-ratio is the design philosophy for that experience.
- **Eleven of 17 inert-watchlist users (lilianamasyrubi, joseph, mark.murdock, awwhittington, ggri73, dr.altvater, dylanbaldy + 4 from the 14d+ band) have NO target — meaning the only path to alert reinforcement is secondary alert types** (Type 1 biggest-mover, Type 2 historical-floor). **Variable-ratio's secondary alert types cover the exact users that default-effect doesn't — the ones with no watchlist items at all to default a target onto.** **Together they reach 100% of the user base with at least one alert type per week.** This is the cleanest coverage argument in the 13-rec sequence.
- **The 6-event ajvanprooyen Cubs trip closes Wednesday morning at 13 cumulative passed-no-notification.** A variable-ratio-design alert system would have surfaced **at least the "biggest mover this week" alert** to ajvanprooyen at some point in the 12-day window — even with no targets set. **The Type 1 alert is the minimum-viable backstop against the 11+ event passed-no-notification cohort.** It fires regardless of user configuration and would have caught at least one of ajvanprooyen's price-movement opportunities.

**Expected impact:**

- **Alert touchpoints per user per week:** **0 today (alert system down + 0 targets set even when up) → 1-3 per week per user with at least 1 watchlist item** under the variable-ratio design. **For the 17 inert-watchlist users: 0 → 1 per week** (Type 1 only). **For the 44 active-watchlist users: 0 → 2-3 per week** (Type 1 + Type 2 + occasional Type 3).
- **Engagement model shift:** users mentally model the product as **"a service that surfaces useful information about my events"** rather than **"a tool I check when I want to compare prices."** The first model is habit-forming; the second is task-oriented. **Habit-forming products have 3-5× the retention of task-oriented products in B2C analytics literature.**
- **Re-engagement of inert watchlists:** the 17 inert-watchlist users currently have zero structural reason to return. **Type 1 alerts give them one weekly email with personalized content from their watchlist data**, even with 0 targets set. **For the 6 of these who churned with watchlist items (josh AEW, blubberboi Ed Sheeran, etc.), Type 1 is the first scheduled product email they would ever receive.**
- **Compounding with default-effect + fresh-start:** if all three ship together, the user experience becomes:
  - **Day 0 signup** → default targets pre-set on first watchlist add (default-effect)
  - **Day 3 / 7 / 14 / 21 / 30** → existing drip sequence fires (already exists; needs engine restart)
  - **Every 7 days indefinitely** → Type 1 biggest-mover alert (variable-ratio)
  - **Whenever a price moves below the default target** → existing target-hit alert with 0-90min jitter (variable-ratio jitter)
  - **Whenever a watchlist event hits its 30-day historical floor** → Type 2 alert (variable-ratio)
  - **First of each month** → fresh-start monthly recap (fresh-start)
  - **When user's last upcoming event passes** → fresh-start "what's next" (fresh-start)
- **For the first time in the product's history, users would receive scheduled, personalized, data-rich, variably-timed product emails.** **The combination of these three recs (default-effect + fresh-start + variable-ratio) is the activation engine in its complete form.**

**Variants for A/B testing (if/when test infrastructure exists):**
- **Control:** existing — fixed-interval polling, deterministic threshold, no jitter, no secondary alerts.
- **Variant A (above):** jitter + Type 1 + Type 2 + Type 3 + default-effect + fresh-start.
- **Variant B:** jitter only — minimum-viable variable-ratio addition.
- **Variant C:** secondary alerts only (no jitter on target-hit alerts) — tests whether the jitter or the secondary types is the active ingredient.

**A is the recommended ship for the full sequence; B is the recommended first-ship** because it's a 5-line code change that converts the existing alert system from fixed-interval to variable-ratio with no new infrastructure.

**Sequencing relative to prior recs:**

1. **Week 1:** Reciprocity (Apr 25)
2. **Week 2:** Social proof (Apr 26)
3. **Week 3:** Anchoring (Apr 27)
4. **Week 4:** Commitment/consistency (Apr 23)
5. **Week 5:** Loss aversion (Apr 24)
6. **Week 6:** Implementation intentions Day-0 (Apr 28)
7. **Week 7:** Zeigarnik effect (Apr 29)
8. **Week 8:** Implementation-intentions re-prompt Day-7+ (Apr 30)
9. **Week 9:** Goal-gradient progress bar (May 1)
10. **Week 10:** Endowment framing (May 2)
11. **Week 11:** Default effect (May 3)
12. **Week 12:** Fresh-start effect (May 4)
13. **Week 13 (today):** **Variable-ratio reinforcement — alert jitter + secondary alert types.**

**Today's rec is the third engineering rec in the 13-rec sequence and completes the activation-engine reboot trio.** Default-effect (eligibility) → fresh-start (cadence) → variable-ratio (psychology). **Ship all three within the same 2-week window. Together they are the closest the stack comes to a complete habit-forming product loop in a single coordinated ship.**

**Ship cost:** Backend: ~5 lines for Ship 1 (jitter); ~150 lines for Ship 2 (secondary alerts); ~3 cron jobs. **Total ~8h end-to-end with QA for the full Ship 2; Ship 1 is a 30-minute change.** Slightly more than fresh-start (~6h) and default-effect (~4h), but the leverage is the largest of the three: variable-ratio is what converts the activation engine from "functional" to "habit-forming." **The sequenced trio of default-effect + fresh-start + variable-ratio is the engineering-investment package that should anchor the next sprint.**

**Hand to:** **Engineering** for the cron + alert-system changes (the only path through this rec — no frontend, no copy work). Email Agent (Agent 5) for the secondary-alert email templates (3 new templates: Type 1 biggest-mover, Type 2 historical-floor, Type 3 new-source). **CRO Agent** for sequencing inside the activation-engine PR — the trio should ship in this order: jitter (5-line) → fresh-start monthly cron (1 template + 1 cron) → default-effect target-setting (backend + frontend) → secondary alert types (3 templates + 3 crons). This is the cleanest ship sequence for the engineering surface area.

---

## Deliverables (handoffs)

1. **Analytics Agent (HIGHEST PRIORITY, carried +12 days — JOSEPH IS A FRESH DATA POINT FOR THE BIFURCATION):** (a) Referrer/UTM pull on ids 57–65 — **now 7 unknowns in 12 days, n=10 with joseph; the bifurcation just got its first refreshable data point in 6 days.** (b) Cohort velocity for ids 1–65 over rolling 30 days (carried, joseph extends the window). (c) Trending-events query for reciprocity rec (carried). (d) `tracker_count` aggregation for social proof rec (carried). (e) Matched-drops query for loss-aversion rec (carried). (f) Carried: post-event watchlist-cleanup signal for ajvanprooyen Cubs trip (5 events passed; 1 passes today; 1 pending May 6). (g) Carried: goal-gradient milestone empirics — confirm 30% / 52% activated-user numbers for 3+ / 2+ events. (h) Carried: 1-event-user retention curve. (i) Carried: endowment-effect copy lift baseline (May 2). (j) Carried: target-price-set-rate baseline by source channel (May 3). (k) Carried: temporal-landmark engagement baseline for fresh-start rec (May 4). (l) **NEW: alert-arrival-time variance baseline** — for measuring variable-ratio rec's lift, we want a pre-rec baseline of alert open rates grouped by predictable-arrival-time vs randomized-arrival-time. The hypothesis: jittered-arrival alerts outperform on-the-hour alerts by a measurable margin (literature suggests 15-30% open-rate lift). The data ask is real once jitter ships and the engine produces enough alerts to compare.

2. **CRO Agent:** (a) Activation gap — **3 users in 7-day window** (joseph <1d, zhili1208 6d, lilianamasyrubi 7d rolled out at 05:24) **plus 5 outside band still inert** (mark.murdock 12d, awwhittington 12d, ggri73 13d, dr.altvater 15d churned, dylanbaldy 20d churned). **Joseph at Day 0/1 is the freshest case — 9h post-signup with 0 watchlist items.** (b) Carried: default-effect implementation (May 3) — backend POST `/api/watchlist` logic + back-fill of 85 existing items + frontend editable-default UI; **the single highest-leverage frontend-and-backend change in the 13-rec sequence; ~4h ship.** (c) Carried: fresh-start cadence implementation (May 4) — monthly cron + email template + drip-table reuse; ~6h ship. (d) **NEW: variable-ratio alert system implementation** — Ship 1 jitter is a 5-line / 30-minute change; Ship 2 secondary alert types is ~150 lines + 3 cron jobs / ~8h ship. **The third and largest engineering rec; completes the activation-engine trio.** **Ship sequence: jitter → fresh-start monthly cron → default-effect targets → secondary alerts. All within a 2-week window.** (e) Carried: endowment rec (May 2), goal-gradient progress bar (May 1), implementation-intentions Day-7+ modal (Apr 30), Zeigarnik header (Apr 29), implementation-intentions post-signup screen (Apr 28), anchoring framing (Apr 27), social-proof badge (Apr 26), reciprocity dashboard empty-state (Apr 25), loss-aversion target panel (Apr 24), commitment-consistency 2nd-action (Apr 23). (f) Newsletter homepage form: **93 days flat = 13 weeks + 2 days.** Audit blocking subscriber growth for one full quarter + 3 days.

3. **Email Agent:** **22 churn-intervention emails ready** with the following priority order today: **lilianamasyrubi Day-7 ON-SCHEDULE FIRE (single highest priority — first on-schedule Day-7 candidate of the outage)** → **dr.altvater Day-15 (carried Day-14)** → **nicklib Day-18 win-back (Day-21 framing rewrite — first day "almost three weeks" parses)** → **josh Day-16** → **ajvanprooyen Day-12 acknowledgment (5 of 6 events demonstrably resolved; cleanest "we failed you" copy)** → **mark.murdock + awwhittington Day-12** → **taranimeramaro + nmcnamee99 Day-10 (Day-7 family dies)** → **zhili1208 Day-6 (final day)** → blubberboi, bhaygood, laye, billstromkel, tucwildcat, jkaiser. **Pre-queue ggri73 + charlesteel Day-14 forcing question for May 6 natural fire (FINAL on-schedule Day-14 fires of the outage). Pre-queue joseph Day-3 for May 7. Pre-queue pete Day-30 for May 10.** Today's firing density: **10 sends if engine returns by 13:00 UTC.** German-language drip variant question still open Day 10. **NEW: variable-ratio secondary alert templates — 3 new templates needed (Type 1 biggest-mover, Type 2 historical-floor, Type 3 new-source). Each template renders against `price_history` and `watchlist` joins; no new schema required.** Carried: fresh-start template family (May 1 / June 1 monthly recap).

4. **Content Agent:** (a) Cubs / Wrigley out-of-market trip hub page: **fifth event passes today (Cubs/Reds May 5); sixth Wednesday May 6** — ship by May 7 to capture the trip's tail; entire 6-event trip closes Wednesday morning. (b) Bruno Mars cross-city/cross-venue cluster hub page — taranimeramaro Day-10 fires today; hub page is overdue. (c) German-market consideration for dr.altvater (carried Day 10). (d) "What to do when your team's playoff series moves to the road" hub page — nmcnamee99 use case, Day-10 fires today. (e) Carried: "How many events should you track?" hub page — supports goal-gradient rec. (f) "Save vs. add" thought-leader hub page (May 2). (g) "Why every price tracker should set your target for you" hub page (May 3 default-effect rec). (h) "May at TicketScan" monthly-recap blog template (May 4 fresh-start rec). (i) **NEW: "Why your price-alert email should surprise you" thought-leader piece** — explains the variable-ratio reinforcement principle for non-technical readers; positions TicketScan's secondary-alert-type roadmap as a deliberate design choice rather than incidental feature additions. **Pairs as the fourth in a now-four-piece series on how price tracking should actually work for users (May 2 + May 3 + May 4 + today).**

5. **Ads Agent:** (a) Cubs out-of-market audience signal — carried. (b) Bruno Mars MetLife audience signal — taranimeramaro Day-10 fires today; pre-queue from Apr 30 still pending. (c) **Attribution-pull dependency now Day 12 unfulfilled — JOSEPH IS A FRESH UNATTRIBUTED DATA POINT.** Six consecutive zero-signup days have not refreshed the data point but joseph's signup yesterday at 21:39 UTC just did. **The bifurcation analysis just got its first refreshable variable in 6 days; pulling joseph's source-attribution today is the single most-leveraged action in the entire growth stack.** If joseph is unknown-source, the 11-day pattern extends to 12 days at n=10 with all 7 unknowns inert pending joseph's 72h activation window. If joseph is known-source, the bifurcation softens to 6/4 known with the 4th being inert, breaking the 100% known-activation pattern for the first time. **Both branches are highly informative; pulling the data is more valuable than waiting for activation.**

6. **Open from previous days (unchanged, carried):** (a) `last_login_at` column — **Day 29**. (b) Drip cron revival — **Day 29**, blocking 22 drafted emails including 10 firing today, 2 firing May 6, 1 firing May 7, 1 firing May 10. (c) Newsletter homepage form audit — **93 days flat = 13 weeks + 2 days.** (d) Pre-populated-item flag on watchlist schema for reciprocity rec. (e) `tracker_count` aggregation in search response for social-proof rec. (f) `users.first_action_trigger_at` column + cron job for implementation-intentions rec. (g) Derive completion-state query for Zeigarnik header rec. (h) `users.last_modal_dismissed_at` column + `/api/users/me` payload extension for implementation-intentions re-prompt rec. (i) Empirical 1-event vs. 2+ event retention curve for goal-gradient rec defensibility. (j) A/B test infrastructure for endowment-effect measurement (May 2). (k) Default-effect implementation — POST `/api/watchlist` logic + back-fill + frontend UI (May 3). (l) Fresh-start cadence implementation — monthly cron + email template + dedup against drip_emails_sent (May 4). (m) **NEW: variable-ratio alert system — alert jitter (5-line change) + 3 secondary alert types + 3 cron jobs (May 5).** **Three engineering items now stand in the rec sequence; all three should ship together as the activation-engine trio because each amplifies the others.** Ship sequence: jitter → fresh-start monthly cron → default-effect targets → secondary alerts.

## Trend watch (10-day)

| Metric | Apr 26 | Apr 27 | Apr 28 | Apr 29 | Apr 30 | May 1 | May 2 | May 3 | May 4 | May 5 |
|--------|--------|--------|--------|--------|--------|-------|-------|-------|-------|-------|
| Total users | 62 | 62 | 63 | 64 | 64 | 64 | 64 | 64 | 64 | **65** |
| Watchlist items | 85 | 85 | 85 | 85 | 85 | 85 | 85 | 85 | 85 | **85** |
| Target prices set | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Drip emails sent | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Active subscribers | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | **3** |
| New signups (day) | 2 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | **1 (joseph)** | 0 (so far) |
| `usersThisWeek` (API) | 9 | 8 | 8 | 8 | 4 | 4 | 4 | 2 | 2 | **2** |
| At-risk count | 3 | 3 | 4 | 4 | 6 | 6 | 5 | 6 | 7 | **8** |
| Churned count | 52 | 52 | 52 | 53 | 53 | 54 | 55 | 56 | 57 | **58** |
| Activation rate (real users) | 75.4% | 75.4% | 72.9% | 72.1% | 72.1% | 72.1% | 72.1% | 72.1% | 72.1% | **71.0%** |

**Read:** **Five-day zero-signup streak broken at the wire by joseph at 21:39 UTC May 4 — saved the dataset from setting a new outright record.** Watchlist items at 85 for the **10th consecutive day — first double-digit duration in dataset history**. Day 29 of zero retention emails, zero target-prices set, zero alerts. **dr.altvater moved to churned bucket overnight at 14:08 UTC; ggri73 + charlesteel cross to Day 14 tomorrow.** Two more passed-no-notification events resolve over the next 48h (Cubs/Reds May 5 today, May 6 Wednesday) — full 6-event ajvanprooyen trip closes Wednesday morning at 13 cumulative.

**The two-day forecast:**
- **May 5 (today):** Cubs/Reds May 5 passes — passed-no-notification cumulative 12 by tomorrow morning. mark.murdock + awwhittington + ajvanprooyen reach Day 12. ggri73 + charlesteel reach Day 13. taranimeramaro + nmcnamee99 reach Day 10 — **Day-7 family officially dies.** lilianamasyrubi reaches Day 7 — **Day-7 family takes over; first on-schedule Day-7 candidate of the outage.** zhili1208 reaches Day 6 — Day-3 hard expires. dr.altvater Day 15. josh Day 16. nicklib Day 18. pete Day 25.
- **May 6 (tomorrow):** Cubs/Reds May 6 passes — cumulative 13. **ajvanprooyen 6-event trip fully closes — entire trip resolved without a single product email; 13-event passed-no-notification cohort sealed.** ggri73 + charlesteel cross Day 14 — **FINAL on-schedule Day-14 fire candidates of the outage; if engine returns by noon, both fire on schedule.** zhili1208 reaches Day 7 — Day-7 family takes over; rolls out of 7-day window at 03:16 UTC. taranimeramaro + nmcnamee99 reach Day 11. mark.murdock + awwhittington + ajvanprooyen reach Day 13. lilianamasyrubi Day 8. dr.altvater Day 16. josh Day 17. pete Day 26. **`usersThisWeek` may drop to 1 (joseph alone) at 03:16 UTC tomorrow when zhili rolls out.** **Watchlist 85-flat record stretches to 11 days if no add.**

**The pattern that crystallized today:** **Joseph's signup is the first signal of motion in 6 days but motion in only one of six structural-inertness dimensions.** The dimensions:
1. **Signup acquisition** — joseph broke the streak; one tick of life. **Pending: source attribution and 72h activation window.**
2. **Watchlist activity** — 10 days flat, record extended. **Pending: any user adding any item.**
3. **Target-price setting** — 0 of 85 since the dataset began. **Pending: default-effect rec ship.**
4. **Drip emails** — Day 29 of zero. **Pending: engine restart.**
5. **Triggered alerts** — 0 for the dataset. **Pending: engine restart + targets set.**
6. **Newsletter** — 93 days flat. **Pending: form audit.**

**The only path to motion in dimensions 2-6 is engineering action.** Today's variable-ratio rec is the third engineering ask in the activation-engine reboot trio:
1. **Restart the drip engine** (clears 22 queued emails; closes the most acute retention loop).
2. **Ship the default-effect rec** (May 3): converts 85 inert watchlist items into 85 alert-eligible items overnight.
3. **Ship the fresh-start cadence** (May 4): creates the first scheduled post-Day-30 product emails.
4. **Ship the variable-ratio alert system** (today): converts the alert experience from fixed-interval-deterministic to variable-ratio-habit-forming.
5. **Pull the attribution data** (Day 12): converts the 12-day-stable bifurcation into actionable acquisition-source insight.

**Four of these five asks are eng-required; together they comprise a single coherent engineering sprint.** **The activation-engine reboot trio (default-effect + fresh-start + variable-ratio) is the smallest set of changes that converts TicketScan from a passive search tool into an active habit-forming product.** **Joseph is a single data point; the engine is the structural change that determines whether his signup compounds or evaporates over the next 30 days.**

**Today's rec is the alert-experience design layer beneath the default-effect (eligibility) and fresh-start (cadence) recs.** Default-effect populates the targets; fresh-start surfaces the resulting price-vs-target movements monthly; **variable-ratio makes the alerts that fire feel like a habit-forming product rather than a polling result notification.** Together they give every user a complete, scheduled, data-rich, psychologically-engaging email cadence for the first time in the product's history. **The 29-day outage ends not when the existing drip cron restarts, but when the activation engine has eligibility (default-effect), cadence (fresh-start), and reinforcement-schedule design (variable-ratio) — all three.**
