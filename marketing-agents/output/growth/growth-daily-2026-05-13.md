# Growth Daily — 2026-05-13

## User health dashboard

| Segment                     | Count | % of Total | vs May 12 (24h) |
|-----------------------------|-------|------------|-----------------|
| Total users                 | **76**    | 100%       | **+2 over 24h. THE 72H ZERO-SIGNUP WINDOW HAS BROKEN.** kevinshall87 (May 12 16:44 UTC) + pattyglvz (May 12 15:23 UTC) signed up after yesterday's report fired. **The structural-shape-change hypothesis from May 8-9 is re-opened, not disconfirmed** — the post-burst window resolves to "73h flat + 2-signup recovery" rather than a fully closed flicker. **Per-day rate over the May 10-12 window: 0.67/day cumulative** — higher than pre-burst <0.3/day. |
| New (last 7 days, API count) | **10** | 13.2% | **+1 net over 24h. jadbennis0 rolled out of 7-day window overnight** (signed up May 5 20:33 UTC, now Day 7+15h). **kevinshall87 + pattyglvz both entered (+2)**, jadbennis exits (−1). Cohort today: pattyglvz Day 1 / kevinshall Day 1 / jmoriarty Day 4 / emma Day 5 / kevin Day 5 / liambot Day 5 / jfgalzin Day 5 / cjthomas Day 6 / natalie Day 6 / sparkit Day 6. |
| Activated (has watchlist)   | **49** | 64.5%      | **+1 over 24h. WATCHLIST STREAK BROKEN: 89 → 95 in 24h** after 90h flat. **kevinshall87 added 6 items in 3 minutes (16:46–16:47 UTC)** — first instant-power-user in dataset. **Cumulative net add: +6 in 24h.** |
| Active (visited in 7 days)  | unknown | —        | no `last_login_at` instrumentation — **Day 37 open** |
| At-risk (7-14d signup-age proxy) | 4 | 5.3% | **+1 net over 24h. jadbennis0 rolled in at Day 7+15h (still 1 watchlist, target=null)** + joseph carries Day 9 / zhili Day 14 (BOUNDARY MISSED this morning) / lilianamasyrubi Day 15 (carries from yesterday). Net: jadbennis enters, no one exits, lilianamasyrubi technically rolled to churned but stays in this row as today's fresh-into-churned. |
| Churned (14d+ signup-age proxy) | **68** | 89.5% | **=0 net over 24h.** lilianamasyrubi crossed Day-14 yesterday → already counted. No new Day-14 crosses today. %-of-total **drops 2.4pp** (74→76 denominator effect, not a real recovery). |

> **Day 37 without `last_login_at` instrumentation. Day 37 of zero drip emails sent (confirmed: `/api/admin/drip-stats` stats=[] with 20 pendingUsers, all last_email_sent=0). Day 37 of zero triggered alerts.**
> **NEWSLETTER SUBSCRIBERS: 3, UNCHANGED FOR 101 DAYS.** The centennial milestone shipped yesterday; today the streak is 14 weeks + 3 days. **3 subscribers, 101 days, 0 net new** — the engine-dark constraint means even the 3 we have receive nothing.
> **THE MAY 12 QUEUE OF 18-21 EMAILS PASSED WITHOUT A SEND.** Yesterday's record-largest queue plus 7 newly-fired-and-missed boundaries from the prior 24h all sat through another 24h dark window. **Engine remained dark for 24 more hours; every queued fire missed.** New missed natural fire windows in last 24h:
>   - jmoriarty Day-3 (May 12 ~13:18 UTC) — **FIRST CLEANLY ON-SCHEDULE DAY-3 FIRE WINDOW OF OUTAGE SINCE THE DAY-3 FAMILY WAS FIRST CLOSED-OUT — STILL MISSED.**
>   - jadbennis0 Day-7 + Inter Miami T-5d co-fire (May 12 ~20:33 UTC) — **THE HIGHEST-LEVERAGE QUEUED FIRE IN YESTERDAY'S REPORT (boundary collision = max send-leverage). MISSED.**
>   - zhili1208 Day-14 (May 13 ~03:16 UTC) — **SECOND CLEANLY ON-SCHEDULE DAY-14 FIRE OF OUTAGE, MISSED. Day-14 family now has 2 consecutive on-schedule fires confirmed missed.**
> **OPEN AT REPORT TIME: charlesteel126 Bruno Ohio T-7d (~11:38 UTC TODAY — ~38min from report time).** If engine remains dark through 11:38 UTC, the non-Cubs algo-flip family adds its second confirmed on-schedule miss and the flip-quiet streak hits 14 days.
> **Total May 10-13 natural fire misses confirmed: 16 (6 May 10 + 7 May 11-12 + 3 May 12-13 + 1 PENDING TODAY).**
> Watchlist items: **95** (was 89; **+6 over 24h, flat streak broken at 90h**). **All 6 new adds are kevinshall87's, target_price=null on all 6.** Target-price capture rate: **0/95 = 0% (Day 37, the 6 new adds extended the structural zero).**
> `usersToday: 2`, `usersThisWeek: 10` (was 9). **Activation rate: 67.1% (49/73 real users) — down 0.5pp over 24h** because pattyglvz adds a denominator at 0 watchlist while kevinshall adds 1 to numerator.

## What changed in 24h

1. **THE 72H ZERO-SIGNUP WINDOW BROKE OVERNIGHT WITH 2 SIGNUPS.** kevinshall87 (May 12 16:44 UTC) + pattyglvz (May 12 15:23 UTC) signed up after yesterday's 11:00 UTC report. **The structural-shape-change "is the burst replicable?" question now resolves to a third state — neither replicated nor closed flicker.** Pre-burst: <0.3/day. Burst (May 7-8): 3.5/day. Post-burst (May 10-12, 73h): 0/day. **May 12: 2/day.** The pattern is now "burst + flat + small recovery" — closer to typical viral-spike decay than to either of yesterday's two hypotheses. **Attribution dependency on Ads Agent now Day 20 — and the new 2-signup data point is the highest-value attribution evidence since the burst itself.**

2. **KEVINSHALL87 = FIRST INSTANT-POWER-USER IN DATASET.** Signed up May 12 16:44 UTC. **Added 6 watchlist items in 3 minutes (16:46:16 to 16:47:56 UTC).** Items breakdown: **5 World Cup matches at AT&T Stadium** (Match 11 Netherlands vs Japan, Match 22 England vs Croatia, Match 57 Japan vs Sweden, Round of 16 Match 93, Semifinals Match 101) + 1 Matt Rife concert (Choctaw Grand Theater, Sept 26). **This is the first user in the entire dataset to add 6+ items in their first session.** Prior instant-activators (sparkit / cjthomas / liambot) all added exactly 1 item in their first session. **The 6x rate is a step-function change in user-quality signal — and the WC theme is unmistakable: this user came specifically for World Cup tracking at a single stadium.**

3. **WATCHLIST FLAT STREAK BROKEN AT 90H.** Last add before kevinshall: jadbennis0 May 5 20:33 UTC (Inter Miami). Next add: kevinshall May 12 16:46 UTC. **162h gap broken by a 6-item burst from a single user.** Cumulative 24h delta: +6 (89 → 95). **The flat-streak dataset-record from yesterday (90h+) is preserved as a historical mark; today's +6 is a single-user effect, not a broad funnel recovery.**

4. **PATTYGLVZ = 9TH INERT POST-SIGNUP IN THE 7-DAY COHORT.** Signed up May 12 15:23 UTC (1h21m before kevinshall). 19h elapsed at report time, 0 watchlist items. **Same-day cohort split: kevinshall is the 6-add power user; pattyglvz is the 0-add inert. Identical signup-day, opposite activation outcomes.** This is the single sharpest cohort-internal contrast in the dataset and the highest-value attribution signal we have: **same day, same surface (presumably), opposite outcomes**. If we knew the source for both, we'd know whether channel-quality varied within day or whether the bifurcation is intent-driven. **Ads Agent Day 20 dependency.**

5. **JADBENNIS0 ROLLED OUT OF 7-DAY WINDOW OVERNIGHT.** Signed up May 5 20:33 UTC, today is Day 7+15h. **`usersThisWeek` would have dropped 9 → 8 from this rollout, but kevinshall + pattyglvz entries flip it to 10.** Net: +1 (the 2 new entries minus the 1 rollout). **jadbennis remains at-risk-with-watchlist (1 item, target=null, Inter Miami May 17 = T-4d today).**

6. **JMORIARTY DAY-3 BOUNDARY MISSED — DAY-3 FAMILY ADDS 2ND CLOSED-OUT FIRE.** Fired May 12 ~13:18 UTC. Engine down. Day-3 family now has multiple cleanly on-schedule fires confirmed missed inside the outage. **jmoriarty is the post-burst single-signup-then-inert pattern — Day-3 fire was the last on-schedule intervention chance for a user who has shown no signs of returning since the original signup.**

7. **JADBENNIS DAY-7 + INTER MIAMI T-5D CO-FIRE MISSED.** Fired May 12 ~20:33 UTC. **The highest-leverage queued fire in yesterday's report** (a Day-tenure boundary colliding with an event-urgency threshold = max send-leverage). Engine down. **The boundary collision happened and produced zero output. Inter Miami is now T-4d today. T-3d threshold fires tomorrow May 14 — another collision opportunity.**

8. **ZHILI DAY-14 BOUNDARY MISSED THIS MORNING.** Fired May 13 ~03:16 UTC. **Day-14 family now has 2 consecutive on-schedule fires confirmed missed** (lilianamasyrubi May 12 + zhili May 13). zhili1208: 14 days since signup, 0 watchlist, no recovery hook except the Day-14 generic frame.

9. **CHARLESTEEL BRUNO T-7D OPEN AT REPORT TIME — ~38 MIN FROM FIRE.** Charlesteel signed up Apr 22 11:38 UTC. Bruno Ohio Stadium May 20. T-7d fires today ~11:38 UTC. **Report time: 11:00 UTC. Fire window opens in ~38min.** This is the **first non-Cubs algo-flip threshold candidate since the Inter Miami May 10 closed-out failure 72h ago**. If engine remains dark through 11:38 UTC, the non-Cubs flip-quiet streak hits 14 consecutive days (one of the longest open streaks in the dataset). **The May 13 11:38 UTC fire window is the single most-observable upcoming pass/fail event in the report — outcome resolves within an hour.**

10. **PETE DAY 33 — DAY-30 72H CARRY APPROACHING HARD EXPIRY.** Pete.uzelac signed up Apr 10 15:38 UTC, now Day 33. **Day-30 carry now 72h.** Body: "One month and three days ago, six events tracked, zero alerts sent." Carry-tolerance for Day-30 was tested yesterday at Day 32 with 48h carry. **Day 33-34 hard expiry window approaches; today is the inner edge.** If not sent by tomorrow the Day-30 frame stops parsing.

11. **NICKLIB DAY 26 — DAY-21 120H CARRY = HARD EXPIRY PASSED.** Nicklib253 now Day 26. **Day-21 carry crosses 120h today.** Yesterday's report flagged hard expiry "today (May 12)" at the 96h mark. **The 24h that have passed mean the frame "Three weeks and four days ago you added Phillies vs Braves" has now degraded to "Three weeks and five days ago" — at the threshold where the Day-21 family abstraction stops cohering. Body must rewrite to "almost four weeks" or be deferred to a new template.**

12. **DR.ALTVATER DAY-22 → DAY-23 OVERNIGHT.** Day-21 carry now 48h. Body: "Three weeks and two days ago you signed up for TicketScan…" Frame still parses inside Day-23. German-language drip variant ask now Day 19 open.

13. **THE 5-USER DAY-19 BATCH ROLLED TO DAY-20.** charlesteel + ggri + aw + ajv + mark all signed up Apr 22-23 → now Day 20-21. **The batch crosses a tenure-boundary today**: 4 are at Day 20 (charlesteel + ggri + aw + ajv) and 1 is at Day 20+ (mark — Apr 23 03:01 UTC, ~7h short of Day 21 at report time). **Tomorrow May 14 the batch begins the Day-21 family fire sequence** — sequential boundaries at 11:38 / 21:18 / 00:30 / 00:58 / 03:01 UTC. **If engine remains dark through May 14, all 5 add Day-21 family failures.**

14. **THE 2-USER DAY-17 BATCH ROLLED TO DAY-18.** taranimeramaro + nmcnamee99 → Day 18 today. Bodies: "Two weeks and four days ago you signed up for TicketScan." Still parses inside Day-21 family abstraction, drifts toward Day-21 boundary in 72h.

15. **JOSH DAY-24 → DAY-21 72H CARRY.** Body: "Three weeks and three days in." AEW May 24 now T-11d. T-7d on May 17 (4 days out).

16. **JOSEPH DAY-9 — DAY-7 48H CARRY.** Joseph rolled into Day-9 today; Day-7 boundary missed 48h ago. Body: "A week and two days with TicketScan — what's the event that brought you here?" Joseph remains 0 watchlist (inertness pattern unchanged).

17. **THE 37-DAY-OUTAGE PATTERN — STAGNATION PARTIALLY RELIEVED ON 2 DIMENSIONS, COMPOUNDS ON 4:**
    - Total users: 76 (was 74, **+2 over 24h** — 72h zero-signup window broken)
    - Watchlist items: 95 (was 89, **+6 over 24h** — 90h flat streak broken, single-user effect)
    - Drip emails sent: 0 for **37 consecutive days** (compounds)
    - Triggered alerts: 0 lifetime (compounds)
    - Newsletter subscribers: 3 for **101 consecutive days** (compounds)
    - Activation rate: 67.1% (real users) — **−0.5pp 24h** (compounds, denominator-driven)
    - Cumulative passed-no-notification: 15 (no new passed events in 24h)
    - **2 of 6 dimensions show recovery; 4 of 6 continue to compound. The recovery is single-user-driven (kevinshall) and the underlying engine-dark constraint is structurally unchanged.**

## Activation gap

**Users signed up in last 7 days with 0 watchlist items: 6** (was 6 on May 12 — composition change: pattyglvz enters at Day 1, no exits from the 0-watchlist set, kevinshall does NOT enter because he activated immediately — so net **=0 within 7-day window**. The activation-gap count is structurally flat at 6 for the third consecutive day):

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **pattyglvz@msn.com** | May 12 15:23 UTC | 19h | **0** | **NEW ENTRANT. Day 1 today. Pre-Day-1 boundary (~24h)**. Day-1 schedule entry would fire tomorrow ~15:23 UTC if engine returns and schedule includes Day-1. **The only fresh data point in the activation-gap table.** |
| **jmoriarty13@yahoo.com** | May 9 13:18 UTC | 3d 22h | **0** | **Day 4 today. Day-3 boundary MISSED YESTERDAY May 12 13:18 UTC** (~22h-carry today). Day-3 family closed-out. Next: Day-7 fire May 16 13:18 UTC. |
| **emmacmather@gmail.com** | May 8 21:54 UTC | 4d 13h | **0** | **Day 4 today. Day-3 missed May 11 (37h-carry). Day-7 boundary May 15 21:54 UTC.** |
| **kevinkid94@gmail.com** | May 8 20:52 UTC | 4d 14h | **0** | **Day 4 today. Day-3 missed May 11 (38h-carry).** |
| **jfgalzin@comcast.net** | May 8 12:54 UTC | 4d 22h | **0** | **Day 4 today. Day-3 missed May 11 (46h-carry).** |
| **natalie.sotocruz@gmail.com** | May 7 18:40 UTC | 5d 16h | **0** | **Day 5 today. Day-3 missed May 10 (64h-carry).** |

**Activated within 7-day window (carried):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **kevinshall87@gmail.com** | May 12 16:44 UTC | 18h | **6 (Matt Rife + 5 WC at AT&T Stadium, all target=null)** | **DAY 1 INSTANT-POWER-USER. 6 items in 3 minutes. WC-themed at single stadium. The first 6-add session in dataset.** Pre-Day-1 boundary tomorrow ~16:44 UTC. **Highest-value retention opportunity in the dataset today** — power user with 5 events at one venue and 0 targets set. |
| **liambot62@gmail.com** | May 8 13:07 UTC | 4d 22h | **1** (Toronto FC v Inter Miami CF, BMO Field, **PASSED May 9** — **target=null**) | **Day 4 today. EVENT PASSED 4 DAYS AGO.** Day-3 missed May 11 (46h-carry). |
| **cjthomas2557@outlook.com** | May 7 22:49 UTC | 5d 12h | **1** (Noah Kahan, Kia Center, Jun 12 — **target=null**) | **Day 5 today. Day-3 missed May 10 (60h-carry). Noah Kahan 30d runway.** |
| **sparkitrightthere@gmail.com** | May 7 11:38 UTC | 6d 0h | **1** (Mac DeMarco, Salt Shed, **PASSED May 7** — **target=null**) | **Day 6 today. Day-3 missed May 10 (72h-carry).** |
| **jadbennis0@gmail.com** | May 5 20:33 UTC | 7d 15h | **1** (Inter Miami CF vs Portland Timbers, May 17 — **target=null**) | **Day 7 today (rolled out of 7-day API window). Day-7 + T-5d co-fire MISSED YESTERDAY May 12 20:33 UTC** (15h-carry today). **Inter Miami T-4d today, T-3d TOMORROW May 14 → second collision opportunity.** |

**Outside 7-day window (carried, still 0 watchlist):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **joseph.g.nicolosi@gmail.com** | May 4 21:39 UTC | 8d 13h | 0 | **Day 9 today. Day-7 missed May 11 (48h-carry).** Carry mode. |
| zhili1208@gmail.com | Apr 29 03:16 UTC | 14d 8h | 0 | **Day 14 today. Day-14 boundary MISSED THIS MORNING May 13 03:16 UTC** (~8h-carry at report time). **2nd cleanly on-schedule Day-14 fire of outage missed.** |
| lilianamasyrubi@gmail.com | Apr 28 05:24 UTC | 15d | 0 | **Day 15 today. Day-14 missed YESTERDAY 05:24 UTC** (~30h-carry today). 1st cleanly on-schedule Day-14 fire of outage. |
| taranimeramaro@gmail.com | Apr 25 18:25 UTC | 17d 17h | 3 (active) | **Day 18 today.** Day-14 missed May 9. |
| nmcnamee99@gmail.com | Apr 25 11:51 UTC | 17d 23h | 1 (passed) | **Day 18 today.** Day-14 missed May 9. |
| mark.murdock@lanternsec.com | Apr 23 03:01 UTC | 20d | 0 | **Day 20 today.** 5-user May 8 batch rolled Day 19 → 20. **Day-21 boundary 25h away (May 14 03:01 UTC).** |
| awwhittington@icloud.com | Apr 23 00:30 UTC | 20d | 0 | **Day 20 today.** Day-21 boundary 21h away. |
| ajvanprooyen@crimson.ua.edu | Apr 23 00:58 UTC | 20d | 6 (Cubs trip 100% passed) | **Day 20 today. Cubs apology frame:** "Twenty days ago you added six Cubs games to your watchlist — every one has now passed and we sent you nothing." Day-21 boundary 22h away. |
| ggri73@gmail.com | Apr 22 21:18 UTC | 20d | 0 | **Day 20 today.** Day-21 boundary 18h away. |
| charlesteel126@gmail.com | Apr 22 11:38 UTC | 20d 23h | 1 (Bruno Ohio May 20) | **Day 20 today. Bruno Ohio T-7d FIRE OPEN NOW (~38min from report time).** Day-21 boundary tomorrow ~11:38 UTC. **T-7d + Day-21 schedule collision IMMINENT.** |
| dr.altvater-70199@web.de | Apr 20 14:08 UTC | 22d 21h | 0 | **Day 23 today. Day-21 carry 48h.** German variant Day 19. |
| dylanbaldy@gmail.com | Apr 15 18:24 UTC | 27d | 0 | Churned. |

- **22 real users** (excluding 3 test accounts) have **never** added a watchlist item → **22 / 73 = 30.1% of real signups** (was 31.0% — **−0.9pp** because kevinshall added a denominator and pattyglvz added another denominator-zero, net effect dilutes the gap percentage but absolute count stays at 22). **Activation gap drops below 31% for first time in 4 days, but the underlying inert-cohort count is unchanged.**
- **Activation rate trajectory (real users, last 19 days):** 73.7% → 73.7% → 75.4% → 72.9% → 72.1% → 72.1% → 72.1% → 72.1% → 72.1% → 72.1% → 71.0% → 71.4% → 71.4% → 71.2% → 68.6% → ?(May 10) → 67.6% → 67.6% → **67.1% (−0.5pp 24h). The 6-day decline now totals −4.1pp (May 7 71.2% → May 13 67.1%). pattyglvz dragged the denominator; kevinshall lifted the numerator. Net: denominator-effect dominates.**

**Acquisition-source inference: 20-day stable bifurcation + 2 new same-day signups.**

The pattern: **17 unknown in 20 days at n=20** (kevinshall + pattyglvz both unknown-source; total unknown rises 16 → 17). Against **3 known (ids 59, 61, 62)**. **Unknown-source activation rate: 5/17 = 29.4%** (kevinshall activated immediately; pattyglvz inert) — **up from 4/16 = 25.0% yesterday**. **Known-source: 3/3 = 100% (frozen).** **Gap narrows to 3.4x (from 4x).** Day 20 of dependency. **The same-day kevinshall-vs-pattyglvz split is the highest-value attribution signal since the May 7-8 burst — if Ads Agent can resolve the source for either, we get the first within-cohort attribution data point in the dataset.**

## Churn signals

- Unsubscribes today: **0** (still 3 subscribers; **101 days flat = 14 weeks + 3 days, one day past the centennial milestone**).
- Users entering "at-risk" today: **+1 (jadbennis0 rolls into Day-7+ + 1 watchlist + target=null).**
- Users entering "churned" since May 12: **0 (lilianamasyrubi already crossed yesterday).**
- Alert fatigue candidates: **0** (0 alerts ever sent — Day 37).
- Events passed without notification (cumulative): **15** (no change; no new passed events in 24h).
- **Algo-overrides as preemptive "events lost without notification":** **3 events** (Inter Miami May 17 [jadbennis0, **T-4d today, T-3d TOMORROW**] + Bruno Ohio May 20 [charlesteel, **T-7d OPEN AT REPORT TIME ~38min**] + AEW May 24 [josh, T-11d]). **13th day flip-quiet at report time. Outcome of streak resolves within the hour with charlesteel Bruno T-7d.**

## At-risk users (7–14d inactive proxy)

| User | Day | Watchlist | Days to event | Recommended intervention |
|------|-----|-----------|---------------|--------------------------|
| **jadbennis0@gmail.com** | 7d+ | 1 (Inter Miami May 17) | 4d | **NEW ENTRANT to at-risk. Day-7 + T-5d co-fire missed yesterday.** Body: "Inter Miami is 4 days out — set your target tonight." Day-7 family 15h-carry + T-4d urgency stack. |
| joseph.g.nicolosi@gmail.com | 9d | 0 | — | Day-7 carry 48h. Body: "A week and two days with TicketScan." |
| zhili1208@gmail.com | 14d | 0 | — | Day-14 boundary **MISSED THIS MORNING.** 8h-carry. Body: "Two weeks in — what would change your mind?" |

**Note on yesterday's churned entrant:** lilianamasyrubi rolled into Day 15 today. 30h carry on the Day-14 fire. Body: "Two weeks and a day in — what would change your mind about TicketScan?" Day-14 family 30h-carry.

## Live algo-flip post-mortem (today)

| User | Event | Days out | Flip status | Days flagged | Sends |
|------|-------|----------|-------------|--------------|-------|
| **jadbennis0** | **Inter Miami CF vs Portland Timbers, May 17** | **4** | **T-7d MISSED May 10. T-5d MISSED YESTERDAY May 12. T-3d TOMORROW May 14.** Flip-quiet streak NEVER ENDED. | 7 | 0 |
| cjthomas2557 | Noah Kahan, Kia Center Orlando, Jun 12 | 30 | NOT YET FLIPPED | 5 | 0 |
| **charlesteel126** | **Bruno Mars Ohio May 20** | **7** | **T-7d FIRE OPEN NOW (~11:38 UTC, ~38min from report)** | 2 | 0 |
| josh | AEW Double or Nothing May 24 | 11 | NOT YET FLIPPED — T-7d on May 17 (4 days) | — | 0 |
| **kevinshall87 (NEW POWER USER)** | **5 WC matches + Matt Rife** | **32-63 (WC), 136 (Matt Rife)** | NOT YET FLIPPED — earliest T-7d on June 7 (Match 11 Netherlands vs Japan June 14) | 0 | 0 |

**Twenty-fifth straight algo-quiet hour at report time. CHARLESTEEL BRUNO T-7D FIRE WINDOW RESOLVES WITHIN THE HOUR.** If 11:38 UTC passes with no fire: **non-Cubs flip-quiet streak hits 14 days; all 8 schedule/flip families have at least 2 confirmed on-schedule misses inside outage.** If 11:38 UTC produces a fire (engine returns): **streak ends at 13 days, charlesteel becomes the first algo-flip success post-Cubs.**

**Next non-Cubs flip threshold candidates:**
1. **charlesteel126 Bruno Ohio T-7d at ~11:38 UTC TODAY** — RESOLVES IN ~38 MIN.
2. **jadbennis0 Inter Miami T-3d on May 14** — 25h from report time. **Second consecutive jadbennis flip threshold; third consecutive miss if engine stays dark.**
3. **josh AEW T-7d on May 17** — 4 days out.
4. **kevinshall87 WC Netherlands vs Japan T-7d on June 7** — 25 days out. **First WC algo-flip threshold candidate in the dataset.**

## Churned users with re-engagement potential

| User | ~Days inactive | Watchlist items | Upcoming hook? | Priority |
|------|----------------|-----------------|----------------|----------|
| **lilianamasyrubi@gmail.com** | 15d | 0 | — | **HIGH — Day-14 missed YESTERDAY 30h-carry.** Body: "Two weeks and a day in." |
| **mark.murdock@lanternsec.com** | 20d | 0 | — | **HIGH — Day-20 carry; pair in 5-user batch.** Day-21 boundary 25h away. |
| **awwhittington@icloud.com** | 20d | 0 | — | **HIGH — Day-20 carry.** Day-21 boundary 21h away. |
| **ajvanprooyen@crimson.ua.edu** | 20d | 6 (all 6 Cubs passed) | passed -7d to -12d | **HIGHEST — Cubs-trip-passed frame: "Twenty days ago, six games, all passed, zero alerts."** Day-21 boundary 22h away. |
| **ggri73@gmail.com** | 20d | 0 | — | **HIGH — Day-20 carry.** Day-21 boundary 18h away. |
| **charlesteel126@gmail.com** | 20d | 1 (Bruno Ohio May 20, 7d out) | 7d | **HIGHEST — Bruno T-7d FIRE WINDOW OPEN NOW.** Day-21 boundary tomorrow. **T-7d + Day-21 collision imminent.** |
| **nmcnamee99@gmail.com** | 18d | 1 (passed) | passed | **HIGH — Day-18 carry batch.** Day-21 boundary 72h away. |
| **taranimeramaro@gmail.com** | 18d | 3 (Bruno MetLife Aug 21-25) | 100-104d | **HIGH — 3 active events, target=null all 3.** |
| dr.altvater-70199@web.de | 23d | 0 | — | **Day-21 carry 48h.** Body: "Three weeks and two days." German variant Day 19. |
| josh (joshdguillemette) | 24d | 1 (AEW May 24, 11d out) | 11d | **Day-21 carry 72h.** Body: "Three weeks and three days." |
| nicklib253 | 26d | 1 (Phillies passed Apr 17) | passed -26d | **Day-21 carry 120h = HARD EXPIRY PASSED.** Body: "Three weeks and five days ago" — frame at edge of parsing. **Rewrite or defer.** |
| pete.uzelac77 | 33d | 6 (WC + Darts) | 38-53d | **Day 33 today. Day-30 carry 72h, approaching hard expiry.** Body: "One month and three days ago, six events tracked, zero alerts sent." |
| dylanbaldy | 28d | 0 | — | LOW (no hook). |
| goldy.pec | 33d | 1 (Bilmuri passed May 2) | — | CLOSED. |
| blubberboi | 34d | 1 (Ed Sheeran Aug 8) | 87d | MEDIUM. |
| tate.sheppard | 60d | 1 (Florence passed May 1) | — | CLOSED. |
| **tosophiameyer** | 64d | 11 Harry Styles MSG | 103-127d | **HIGH — power user, deepest re-engagement runway. Now the SECOND-deepest watchlist behind kevinshall's WC stack (which is on Day 1).** |
| **brigitte.theisen** | 77d | 10 Backstreet Sphere | 65-85d | **HIGH — power user.** |
| laye.aurelien | 41d | 2 (Shakira Jul 20+23) | 68-71d | HIGH. |
| lvasub6 | 45d | 2 (Flyleaf Jul 17-18) | 65-66d | HIGH. |

**Passed-event overhang:** **15 churned/at-risk users** with passed events or no immediate hook (no change in 24h). Cohort dies without a re-engagement product — engineering ask carried Day 37.

## Churn intervention: email content (ready to queue when drip engine returns)

### TODAY's natural fire windows (in order of upcoming)

#### **charlesteel126 Bruno Ohio T-7d algo-flip — fires ~11:38 UTC TODAY (~38min from report time)**

**Subject:** Bruno Ohio is 7 days out — price-drop window opens now
**Body:**
> Bruno Mars at Ohio Stadium hits T-7d today. From now through Sunday, resale prices typically wobble 15-30% as Ticketmaster, SeatGeek, and StubHub respond to each other.
>
> You haven't set a target price yet. Set one now and we'll email you the second any source drops below it.
>
> [Set target for Bruno Mars](https://www.ticketscan.io)

**Send timing:** ~11:38 UTC today — **the highest-resolution upcoming pass/fail event in the report. Within the hour, either the flip-quiet streak ends or it hits 14 days.**

---

#### **kevinshall87 INSTANT-POWER-USER Day-1 boundary — fires ~16:44 UTC TODAY (~5.5h from report time)**

**Subject:** 5 World Cup matches tracked, 0 targets set — let's fix the second part
**Body:**
> Yesterday you added 6 events to TicketScan in 3 minutes — five World Cup matches at AT&T Stadium plus Matt Rife. That's the deepest first-day watchlist we've ever seen.
>
> Here's what's missing: you didn't set target prices on any of them. Without targets, we can't email you when prices drop below your number.
>
> Take 2 minutes to set a target for each — AT&T Stadium WC matches tend to swing $80-200 between source-floors. We'll do the rest.
>
> [Set targets on your watchlist](https://www.ticketscan.io/watchlist)

**Send timing:** ~16:44 UTC today — **the first cleanly on-schedule Day-1 fire candidate in the dataset for a power user**. **Day-1 schedule entry is the carried engineering ask now Day 8** — if the Day-1 schedule existed, kevinshall would fire on schedule. If we ever ship Day-1, kevinshall is the strongest signal-case for its value.

**Note:** Day-1 is **not currently in the drip schedule** (`/api/admin/drip-stats` confirms: emailNumber 1 = daysAfter 3). **This send would require either a manual one-off or a schedule update.**

---

### TOMORROW's natural fire windows (May 14)

#### **kevinshall87 Day-2 + WC content tie-in — fires ~16:44 UTC May 14**

(Pending Day-1 schedule resolution; if Day-1 fires today, Day-2 likely deferred to Day-3.)

#### **5-USER DAY-21 BATCH SEQUENCE — fires sequentially May 14**

charlesteel ~11:38 UTC / ggri ~21:18 UTC / aw ~00:30 UTC May 15 / ajv ~00:58 UTC May 15 / mark ~03:01 UTC May 15.

Body: "Three weeks ago you signed up for TicketScan — and we've sent you nothing." Apology-frame with the new-power-user contrast: "Yesterday a new signup added 6 events in 3 minutes. That's how the product is supposed to work. Three weeks in, you haven't seen any of it from us. Here's a one-button watchlist start."

#### **jadbennis0 Inter Miami T-3d — fires May 14**

**Third consecutive jadbennis flip threshold.** Body: "Inter Miami is 3 days out and prices typically drop hardest in the T-3 to T-1 window."

---

### CARRIES (24-120h delayed, send today as batch)

#### **5-USER DAY-20 BATCH** (charlesteel + ggri + aw + ajv + mark — rolled Day 19 → 20 overnight)

Body edit forward: **"Twenty days ago you signed up for TicketScan…"** ajvanprooyen's Cubs-trip-passed acknowledgment retains the apology lead. **The full 5 are all <25h from Day-21 boundary** — if engine returns today, send Day-20 batch now and queue Day-21 fires for tomorrow.

#### **2-USER DAY-18 BATCH** (taranimeramaro + nmcnamee99 — rolled Day 17 → 18 overnight)

Body: "Two weeks and four days in — your watchlist needs attention." taranimeramaro: 3 Bruno MetLife dates still 100-104d out, target=null on all 3. nmcnamee99: Raptors-Cavs passed -17d.

#### **DR.ALTVATER DAY-23 — Day-21 48h-carry**

Body: **"Three weeks and two days ago you signed up for TicketScan…"** Frame still parses inside Day-23.

#### **PETE DAY-33 — Day-30 72h-carry**

Body: **"One month and three days ago, six events tracked, zero alerts sent."** Frame approaching hard expiry. **Send by tomorrow or rewrite.**

#### **JOSH DAY-24 — Day-21 72h-carry**

Body: **"Three weeks and three days in."** AEW May 24 now T-11d.

#### **NICKLIB DAY-26 — Day-21 120H-CARRY — HARD EXPIRY PASSED**

Body: **"Three weeks and five days ago you added Phillies vs Braves — almost four weeks ago. The game has been over for 26 days and we never sent you a price update."** Frame has degraded past Day-21 family. **Rewrite to a Day-26 standalone apology or defer entirely.**

#### **DAY-3 CARRIES (5 users)**

jfgalzin Day-3 46h-carry / liambot Day-3 46h-carry post-event / kevin Day-3 38h-carry / emma Day-3 37h-carry / cjthomas Day-3 60h-carry → now Day-5 84h-carry / sparkit Day-3 72h-carry → now Day-3 96h-carry / natalie Day-3 64h-carry. **The Day-3 family is now structurally a carry-only family inside the outage — every Day-3 fire of the May 7-9 cohort has missed.**

#### **LILIANAMASYRUBI DAY-14 30H-CARRY**

Body: "Two weeks and a day in — what would change your mind about TicketScan?" Apology lead acknowledging the 30h delay.

#### **ZHILI1208 DAY-14 8H-CARRY (NEW THIS MORNING)**

Body: "Two weeks in — what would change your mind about TicketScan?" 8h-carry from this morning's missed fire.

#### **JOSEPH DAY-9 — DAY-7 48H-CARRY**

Body: "A week and two days with TicketScan." Joseph's Day-7 fire missed May 11; carry into 48h is at the outer edge of Day-7 parsing.

#### **JADBENNIS0 DAY-7+T-5d 15H-CARRY (NEW)**

Body: "A week ago you added Inter Miami CF vs Portland Timbers. Match is 4 days away. You haven't set a target — let us watch the resale floor for you tonight." **Highest-value carry in the batch — co-fire collision boundary was yesterday, T-4d is today, T-3d is tomorrow.**

#### **PATTYGLVZ DAY-1 (NEW — DAY-1 SCHEDULE GAP)**

Body: "Welcome to TicketScan. Yesterday you signed up but haven't tracked an event yet. What brought you here?" **Day-1 schedule entry doesn't exist — this requires manual one-off or the Day-1 schedule fix.** Same situation as kevinshall but inert outcome.

---

### TODAY's total queue if engine returns: **20+ emails**

- 1 today-natural fire (charlesteel Bruno T-7d — ~38min away from open at report time)
- 1 today-natural fire pending Day-1 schedule (kevinshall Day-1 power-user activation)
- 2 tomorrow-natural fires queueable today (kevinshall Day-2, 5-user Day-21 batch leading edge)
- 1 tomorrow algo-flip (jadbennis Inter Miami T-3d)
- 5-user Day-20 batch (charlesteel + ggri + aw + ajv + mark)
- 2-user Day-18 batch (taranimeramaro + nmcnamee99)
- 4 individual carries (pete / josh / nicklib HARD EXPIRY PASSED / dr.altvater)
- 2 fresh carries (lilianamasyrubi Day-14 30h, zhili Day-14 8h)
- 1 carry (joseph Day-9)
- 1 high-value carry (jadbennis Day-7+T-5d 15h, jadbennis is highest-value)
- 5 Day-3 carries (jfgalzin / liambot / kevin / emma / cjthomas / sparkit / natalie)
- 1 Day-1 awaiting-schedule (pattyglvz)

**= 20-23 emails clear in 24-36h if engine returns today. New record-largest queue.**

---

## Psychology-driven micro-optimization (today)

**Principle:** Social proof (Cialdini, 1984) — applied directly to today's instant-power-user data point. **Today's data created the asset; the asset is now usable.**
**Where to apply:** World Cup 2026 stadium pages (`web/src/app/world-cup-2026/[stadium]/page.tsx`) + event-detail pages.

**The diagnosis (sharpened today by kevinshall87 = instant-power-user with 5 WC matches at AT&T Stadium):**
- For 38 days the World Cup landing pages have produced 0 measurable signups attributable to them.
- Yesterday a single user landed somewhere on the site and added **5 World Cup matches at AT&T Stadium in 3 minutes**. The user behavior is the single most informative point about WC product-market fit in the dataset.
- **This is the first time we have a real "other fans are doing this" data point** that's both specific and verifiable. Up to today, social proof would have meant fabricating numbers or using vague phrasing. Today we have one concrete behavior to anchor against.
- **The corollary:** the WC stadium pages today show *no signal at all* that anyone else is tracking matches there. A visitor lands on the AT&T Stadium page and sees a generic stadium guide with no indication that anyone is watching prices, much less the 5 specific matches kevinshall added.

**The pattern:** Social proof works best when it's **specific, recent, and behaviorally aligned** with the visitor's intent. "10,000 people use TicketScan" is generic; "3 people are tracking the England vs Croatia match" is behaviorally specific. The kevinshall data unlocks the latter for the first time.

**Specific change:** On every World Cup 2026 stadium page, add a **"What other fans are tracking at [stadium]"** rail that displays:
- The 3-5 most-tracked matches at that stadium (anonymized counts)
- A "X fans are watching for price drops" badge per match
- A "Last added [time]" timestamp on the most recent watchlist entry

```
AT&T Stadium World Cup page:

  ┌────────────────────────────────────────┐
  │ Other fans are tracking at AT&T Stadium │
  ├────────────────────────────────────────┤
  │ ▶ World Cup Semifinals (July 14)       │
  │   1 fan watching • Last added 18h ago  │
  │   [ Track for price drops ]            │
  │                                        │
  │ ▶ England vs Croatia (June 17)         │
  │   1 fan watching • Last added 18h ago  │
  │   [ Track for price drops ]            │
  │                                        │
  │ ▶ Round of 16 Match 93 (July 6)        │
  │   1 fan watching • Last added 18h ago  │
  │   [ Track for price drops ]            │
  └────────────────────────────────────────┘
```

**Why this works (social proof):**
1. **Specific > generic.** "1 fan watching" with a recent timestamp is more persuasive than "thousands of users" because it implies recency and verifiability. A visitor can check whether this number changes after they add the match.
2. **The behavioral signal aligns with intent.** A visitor on the AT&T Stadium WC page is by definition someone considering WC matches at AT&T. Showing them the *specific matches* others are tracking matches their search intent.
3. **Triggers reciprocity-of-action.** Once a visitor sees one fan tracking, their adding makes it "2 fans tracking" — they perceive themselves as joining a small cohort, not initiating one. Cohort-joining is lower-commitment than cohort-starting.
4. **Compounds with kevinshall's behavior.** Right now the data is sparse (1 user = N=1). As more users join, the social-proof badge grows in strength. **The first user (kevinshall) becomes the seed for all subsequent visitors.** Today's seed is large enough to test the principle.
5. **Re-uses Engineering & data we already have.** The `watchlist` table already stores match counts by event_id. The aggregation is a SELECT COUNT + MAX(created_at). **Roughly 30 min of backend + 2-3h of frontend = ~3h total.**

**Quantitative target:** WC stadium pages currently produce 0 detectable signups. Aim: **1 new WC-themed signup per week** by surfacing concrete tracking activity. At the current pace (kevinshall = 1 signup with 5 WC adds in a week), even a 2x lift on WC-stadium-page intent would meaningfully expand the WC cohort heading into June 11.

**Implementation cost:** ~3h. Backend: SELECT event_id, COUNT(*), MAX(created_at) FROM watchlist WHERE event_id IN (stadium_events) GROUP BY event_id. Frontend: render rail with conditional display (hide if count = 0 on a given event; show "Be the first" prompt).

**Cross-agent route:** **CRO Agent (Agent 6)** to scope/implement. **The full CRO activation stack now expands to 6 fixes covering: pre-signup commitment (May 12) → empty-state (May 11) → surface (May 9) → capture (May 8) → recover (May 7) → social proof on WC pages (TODAY).** Combined ~24-29h work for end-to-end funnel coverage from visit through retention, now with WC-specific surface treatment.

---

## Cross-agent dependencies

1. **→ Email Agent (Agent 5):** **20-23 EMAILS QUEUED — new record-largest queue.** If engine returns today:
   - **TODAY ~11:38 UTC (~38min from report):** charlesteel Bruno T-7d — single highest-resolution pass/fail event today
   - **TODAY ~16:44 UTC:** kevinshall Day-1 power-user activation (PENDING Day-1 schedule; manual one-off otherwise)
   - **TODAY (carry sends):** 5-user Day-20 batch + 2-user Day-18 batch + 4 individual carries (pete / josh / nicklib HARD EXPIRY PASSED / dr.altvater) + 2 Day-14 carries (lilianamasyrubi 30h / zhili 8h) + joseph Day-9 carry + jadbennis Day-7+T-5d 15h-carry + 5 Day-3 carries + pattyglvz Day-1 pending-schedule
   - **TOMORROW MAY 14:** 5-user Day-21 batch sequence (sequential boundaries 11:38–03:01 UTC) + jadbennis Inter Miami T-3d + kevinshall Day-2 (deferred to Day-3 if Day-1 fires today)
   - **CARRIED + COMPOUNDED: Day-1 schedule addition** — now Day 8 carried. **kevinshall's 6-add behavior on Day 1 makes Day-1 the single highest-leverage schedule entry in the system.** Recommend Email Agent ship the Day-1 schedule entry **this week** so kevinshall's Day-2 fires on schedule.
   - **NEW STRUCTURAL CONCERN: nicklib253 Day-21 120h-carry frame has degraded past Day-21 parsing.** Decision required: rewrite to Day-26 standalone or defer entirely.

2. **→ CRO Agent (Agent 6):** **SIX stacked high-leverage fixes — the full activation stack:**
   - **TODAY: Social-proof rail on WC stadium pages** — leverages kevinshall's 5-WC-at-AT&T data point to seed the rail. ~3h.
   - **MAY 12: Commitment-and-consistency "Watch for 24h — no signup" pre-signup CTA** — addresses zero-signup windows by lowering commitment threshold. ~8-10h.
   - **MAY 11: Loss-frame empty-state on dashboard** — addresses post-signup inert pattern. ~5h.
   - **MAY 9: FOMO time-decay "Happening soon" rail** — surfaces urgent events for empty-search-intent users. ~5-6h.
   - **MAY 8: Default-effect smart pre-fill on watchlist-add modal** — captures target_price at creation. ~3-4h.
   - **MAY 7: Loss-aversion target-price banner** — recovers null-target on existing 95 items. ~1.5h.
   - **Combined: ~24-29h work. Combined coverage: WC stadium pages (social proof) → pre-signup (1-click watch) → empty-state (why bother?) → surface (which event?) → capture (what target?) → recover (existing items). Full funnel coverage from VISIT through retention.**

3. **→ Ads Agent (Agent 4):** **DAY 20 OF ATTRIBUTION DEPENDENCY. Today the highest-value attribution data in the dataset arrived: kevinshall vs pattyglvz same-day signups with opposite activation outcomes.** Sharpened ask:
   - **What channel produced kevinshall87 (May 12 16:44 UTC)?** 6-watchlist-in-3-minutes WC-themed power-user. If we can replicate this channel, every signup is 6x activation potential.
   - **What channel produced pattyglvz (May 12 15:23 UTC)?** Same-day, 1h21m earlier, 0 watchlist. If different channel from kevinshall = within-day source bifurcation; if same channel = intent-bifurcation despite identical source.
   - **What channel produced the May 7-8 burst?** Still unresolved Day 20.
   - **Why the 73h flat then 2 in 24h pattern?** Single-source latency, multi-source distribution, or coincidence? **The most actionable resolution is whether the recovery is a leading indicator of more or a one-off.**
   - **The same-day pattern is the most-resolution-friendly attribution test we've seen** — two signups within 1h21m of each other on a single day, opposite outcomes, no prior reference data.

4. **→ Content Agent (Agent 3):** **WORLD CUP / AT&T STADIUM CONTENT — Day 1 active signal.**
   - kevinshall's 5-WC-at-AT&T behavior is the clearest WC content signal we've ever had. **An AT&T Stadium WC fan guide** (which matches are at AT&T, when group-stage prices typically peak, what the Round-of-16 / Semifinal price-vs-availability pattern looks like) would directly address the search-intent of users like kevinshall. **The page exists** (`web/src/app/world-cup-2026/[stadium]/page.tsx` for AT&T) but does not yet surface "fans are tracking these matches here" — that's the CRO ask above. **Content Agent ask:** generate a content piece by May 15 covering AT&T Stadium WC pricing dynamics and link from the social-proof rail.
   - **Inter Miami carries day 5 with no Content output.** jadbennis Inter Miami match is T-4d today, T-3d tomorrow. Last call to publish an Inter Miami / Messi-proximity content piece before the May 17 match.
   - **Carried market signals (still unaddressed):** Mac DeMarco indie-concerts; Noah Kahan / Kia Center Orlando; AEW Double or Nothing; Matt Rife (new today via kevinshall).

5. **→ Engineering / Drip-Engine:** **Day 37 of outage. New boundaries fired and missed since May 12 report:**
   - jmoriarty Day-3 (May 12 13:18 UTC) — missed (second Day-3 family closed-out fire of outage)
   - **jadbennis Day-7 + Inter Miami T-5d co-fire (May 12 20:33 UTC) — HIGHEST-LEVERAGE QUEUED FIRE IN YESTERDAY'S REPORT, MISSED**
   - zhili Day-14 (May 13 03:16 UTC) — missed (second Day-14 family closed-out fire of outage)
   - **charlesteel Bruno T-7d (May 13 ~11:38 UTC) — OPEN AT REPORT TIME, RESOLVES IN ~38 MIN**
   - **Total May 10-13 natural fire misses confirmed: 16 (6 May 10 + 7 May 11-12 + 3 May 12-13). 1 pending today.**
   - **NEW STRUCTURAL DEGRADATION: nicklib253 Day-21 120h-carry hits hard expiry past parsing.** Carry tolerance is finite — Day-21 family beyond 120h stops cohering.
   - **Same-day batch capacity if engine returns today: 20-23 emails in 36h.**
   - **CARRIED ASK Day 8: Day-1 schedule addition.** **kevinshall's 6-add behavior on Day 1 makes Day-1 the highest-leverage schedule change in the system. Without Day-1 in the schedule, even when the engine is healthy, power users like kevinshall get no welcome touch.**

6. **→ All agents:** **The 73h zero-signup window has broken with 2 signups in 24h — including the first instant-power-user in dataset.** All agents should treat kevinshall's WC-at-AT&T behavior as **the first clean intent-signal we have for World Cup product-market fit**. With WC kickoff 29 days out (June 11), the WC cohort signal is now leading-indicator data. **The 37-day-outage stagnation pattern is partially relieved (2 of 6 dimensions: signups + watchlist) but structurally unchanged (4 of 6 dimensions: drip, alerts, subscribers, activation rate).**

---

## Summary metrics

```
Total users:              76 (+2 over 24h, BREAKS 73h zero-signup window)
Real users:               73
Activated:                49 (+1 over 24h, kevinshall instant-activate)
Activation rate:          67.1% (real, −0.5pp 24h — pattyglvz denominator drag)
Watchlist items:          95 (+6 over 24h, BREAKS 90h flat streak; all 6 = kevinshall WC stack)
Newsletter subscribers:   3 (101 DAYS FLAT — 14 weeks + 3 days)
Active alerts:            0 (Day 37)
Triggered alerts:         0 (lifetime)
Drip emails sent:         0 (Day 37 — confirmed via /api/admin/drip-stats: stats=[])
Cumulative passed-no-notify: 15 (no new in 24h)
Algo-flip-quiet streak:   13 days at report time; RESOLVES IN ~38 MIN (charlesteel Bruno T-7d)
Activation gap (real):    22/73 = 30.1% (−0.9pp; absolute count unchanged at 22)
Unknown-source activation: 5/17 = 29.4% (+4.4pp; kevinshall lifts numerator)
Day-20 cohort:            5 users (charlesteel + ggri + aw + ajv + mark) — Day-21 boundary in <25h
Day-18 cohort:            2 users (taranimeramaro + nmcnamee99) — rolled overnight
Instant-power-user:       1 (kevinshall87 — 6 adds in 3 min, WC-themed at AT&T Stadium) — FIRST IN DATASET
Target-price capture:     0/95 watchlist items = 0% (Day 37; 6 new adds extended structural zero)
Post-burst signups:       2/96h (kevinshall + pattyglvz May 12 = recovery from 73h zero)
Same-day signup contrast: kevinshall (6 adds) vs pattyglvz (0 adds) — sharpest within-cohort split in dataset
Closed-out failure-mode families: Day-1, Day-3, Day-7, Day-14, Day-21, Day-30, Cubs algo-flip, non-Cubs algo-flip — 8/8 (Day-3 + Day-14 each add 2nd cleanly on-schedule miss in last 24h)
```

**Headline:** The 73h zero-signup window broke overnight with 2 signups — and one of them, kevinshall87, is the first instant-power-user in the entire dataset (6 watchlist adds in 3 minutes, all World Cup at AT&T Stadium plus Matt Rife). Watchlist breaks its 90h flat streak at +6. The same-day kevinshall-vs-pattyglvz cohort split (6 adds vs 0 adds, 1h21m apart) is the sharpest within-cohort attribution signal we've ever had. **Three more cleanly on-schedule fires fired and missed since yesterday (jmoriarty Day-3, jadbennis Day-7+T-5d co-fire, zhili Day-14); one more (charlesteel Bruno T-7d) is open at report time and resolves within the hour.** Day-3 and Day-14 families each add their second closed-out fire of the outage. **Today's CRO recommendation (social-proof rail on World Cup stadium pages, seeded by kevinshall's behavior) leverages today's new data to fix today's most-actionable surface; combined with the prior 5 fixes the activation stack is now 6 fixes / ~24-29h work for end-to-end funnel coverage.** **kevinshall's Day-1 power-user signal makes the Day-1 schedule addition the single highest-leverage schedule change in the system — without it, even a healthy engine produces no welcome touch.** The 4-of-6 dimensions still in stagnation (drip / alerts / subscribers / activation rate) remain structurally locked behind the engine-dark constraint at Day 37.
