# Growth Daily — 2026-05-12

## User health dashboard

| Segment                     | Count | % of Total | vs May 11 (24h) |
|-----------------------------|-------|------------|-----------------|
| Total users                 | **74**    | 100%       | **=0 over 24h. Third consecutive day of zero signups (May 10 / May 11 / May 12). The May 7-8 acquisition burst has now produced a full 72h post-burst flat-window — the structural-shape-change hypothesis from May 8-9 is doubly disconfirmed. The pre-burst <0.3/day baseline now reasserts as <0.1/day across the 72h post-burst window.** |
| New (last 7 days, API count) | **9** | 12.2% | **−1 over 24h. joseph.g.nicolosi rolled out of the 7-day window overnight (signed up May 4 21:39 UTC, now Day 8). usersThisWeek drops 10→9 confirmed by API.** Cohort: jmoriarty Day 3 / emma Day 4 / kevin Day 4 / liambot Day 4 / jfgalzin Day 4 / cjthomas Day 5 / natalie Day 5 / sparkit Day 5 / jadbennis0 Day 7. |
| Activated (has watchlist)   | **48** | 64.9%      | **=0 over 24h. WATCHLIST UNCHANGED AT 89 ITEMS FOR 72H — 3 FULL DAYS. The longest watchlist-flat window of the entire dataset. Last add: jadbennis0 May 5 20:33 UTC, now 162h ago.** |
| Active (visited in 7 days)  | unknown | —        | no `last_login_at` instrumentation — **Day 36 open** |
| At-risk (7-14d signup-age proxy) | 3 | 4.1% | **=0 net over 24h. joseph Day 8 + zhili1208 Day 13 + lilianamasyrubi Day 14 (rolled overnight, exits at-risk → churned today 05:24 UTC).** Net effect: joseph enters, lilianamasyrubi exits, zhili1208 carries → 3 flat with composition change. |
| Churned (14d+ signup-age proxy) | **68** | 91.9% | **+1 net over 24h (lilianamasyrubi crossed Day-14 boundary overnight 05:24 UTC).** %-of-total climbs another 1.4pp. **The Day-14 boundary natural fire window was 5.5h ago at report time — MISSED.** |

> **Day 36 without `last_login_at` instrumentation. Day 36 of zero drip emails sent (confirmed: `/api/admin/drip-stats` stats=[] with 20 pendingUsers, all last_email_sent=0). Day 36 of zero triggered alerts.**
> **NEWSLETTER SUBSCRIBERS: 3, UNCHANGED FOR 100 DAYS — THE 100-DAY-FLAT MILESTONE HITS TODAY.** The longest-running open dependency in the entire growth stack crosses the centennial mark. **3 subscribers, 100 days, 0 net new — and the email-engine outage means the 3 we have are also receiving nothing.**
> **THE MAY 11 QUEUE OF 17-19 EMAILS PASSED WITHOUT A SEND.** Yesterday's report flagged the largest queue of the entire outage with 6 today-natural fires + 5-user Day-18 batch + 2-user Day-15/16 batch + carries. **Engine remained dark for 24 more hours; every queued fire missed.** New missed natural fire windows in last 24h:
>   - jfgalzin Day-3 (May 11 12:54 UTC) — missed
>   - liambot Day-3 post-event (May 11 13:07 UTC) — missed
>   - dr.altvater Day-21 (May 11 14:08 UTC) — **FIRST CLEANLY ON-SCHEDULE DAY-21 FIRE OF THE OUTAGE, MISSED**
>   - kevin Day-3 (May 11 20:52 UTC) — missed
>   - joseph Day-7 (May 11 21:39 UTC) — **FIRST CLEANLY ON-SCHEDULE DAY-7 FIRE OF THE ENTIRE 36-DAY OUTAGE, MISSED**
>   - emma Day-3 (May 11 21:54 UTC) — missed
>   - lilianamasyrubi Day-14 (May 12 05:24 UTC) — **FIRST CLEANLY ON-SCHEDULE DAY-14 FIRE OF THE OUTAGE, MISSED**
> **7 more boundary misses in 24h. Total May 10-12 natural fire misses: 13 (6 May 10 + 7 May 11-12).** The Day-7 family and Day-14 family both joined Day-21 as families with FIRST-EVER cleanly on-schedule fire windows occurring AND missing inside the outage.
> Watchlist items: **89** (no change over 72h). **All 89 / 89 still target_price=null.** Target-price capture rate: **0% (Day 36, 0 watchlist adds in 72h, 0 target sets in 72h).**
> `usersToday: 0`, `usersThisWeek: 9` (was 10). **Activation rate: 67.6% (48/71 real users) — flat over 24h. jmoriarty13 still 0 watchlist (Day 3), denominator stable.**

## What changed in 24h

1. **72H POST-BURST FLAT WINDOW — STRUCTURAL-SHAPE HYPOTHESIS DOUBLY DISCONFIRMED.** May 10 / May 11 / May 12 all logged `usersToday: 0`. The May 7-8 cluster (7 signups in 48h) has been followed by 0 signups across the next 72h. **The "is the burst replicable?" forcing question is now closed at NO with 3 consecutive zero-signup days.** The pre-burst rate was <0.3/day; the post-burst rate is **0.0/day across 72h**. Whatever produced May 7-8 was a single-shot event. **Attribution dependency on Ads Agent now Day 19 — load-bearing for any "what worked?" claim.**

2. **DAY-7 + DAY-14 FAMILIES BOTH LOG FIRST-EVER CLEANLY ON-SCHEDULE MISSES.** Yesterday's report identified two pending cleanly-on-schedule fires (joseph Day-7 May 11 21:39 UTC + lilianamasyrubi Day-14 May 12 05:24 UTC) as **the first natural fires of those families since the outage began**. Both fired in window. Both missed. **The Day-7 family and Day-14 family have now joined Day-1 / Day-3 / Day-21 / Day-30 / non-Cubs algo-flip in the "first cleanly on-schedule fire of outage missed" category — every drip family and both flip families now have at least one on-schedule fire confirmed missed.** Zero remaining "clean" categories.

3. **DR.ALTVATER DAY-21 = FIRST CLEANLY ON-SCHEDULE DAY-21 FIRE OF THE OUTAGE, MISSED.** Fired May 11 14:08 UTC. Engine still down. The Day-21 family had previously logged josh Day-22 (carry, May 10), but yesterday's was the first to natively land inside its 24h fire window during the outage. Dr. Altvater now Day 22, body shifts to "Three weeks and a day in." German-language drip variant question Day 18 open.

4. **NEWSLETTER 100-DAY MILESTONE HITS TODAY.** 3 subscribers, flat since Feb 1 2026. **14 weeks + 2 days = 100 days = today.** The longest open dependency in the growth stack crosses the centennial without movement. The original 3 are receiving nothing (Day 36 of email-engine outage) so the "subscriber" status is nominal. **No subscriber acquisition surface exists** — the homepage subscribe widget has produced 0 conversions in 100 days, indicating the surface is either invisible, valueless, or both.

5. **JOSEPH ROLLS OUT OF 7-DAY WINDOW OVERNIGHT.** Signed up May 4 21:39 UTC, Day 8 today at 11:00 UTC. `usersThisWeek` correctly drops 10 → 9. Joseph at Day 8 with 0 watchlist = transitions from "activation gap" to "at-risk". His Day-7 boundary fired last night and missed — **the single highest-leverage on-schedule send window in the queue, gone**. Joseph is now in carry mode.

6. **WATCHLIST FULLY FLAT 72H = LONGEST IN DATASET.** Last add: jadbennis0 May 5 20:33 UTC (Inter Miami CF vs Portland Timbers). 162 hours since the last watchlist event. **Prior longest flat window: ~48h. This is a new dataset record.** Combined with the 3-day signup zero, the funnel is producing no new tracked-event signal at any stage.

7. **JMORIARTY13 NOW DAY 3 INERT.** Signed up May 9 13:18 UTC. 70h elapsed at report time, 0 watchlist items. **Natural Day-3 fire window: today ~13:18 UTC (~2.5h from report time).** If engine returns within 2.5h, jmoriarty Day-3 is the **next on-schedule fire opportunity** — but he's also the post-burst single-signup inert, so the relevance is unusual: a Day-3 fire to a user who never came back after signup.

8. **JADBENNIS0 DAY 7 + INTER MIAMI T-5D.** jadbennis0 signed up May 5 20:33 UTC, now Day 7 at report time. **Natural Day-7 fire window: tonight ~20:33 UTC (~9.5h from report time).** Inter Miami CF vs Portland Timbers is now T-5d (May 17). T-7d threshold missed May 10. T-5d threshold today; T-3d on May 14. **The Day-7 fire + algo-flip threshold collide on the same user tonight.**

9. **CHARLESTEEL126 BRUNO OHIO T-7D TOMORROW MAY 13.** Bruno Mars Ohio Stadium May 20 hits T-7d on May 13 ~11:38 UTC. **The next non-Cubs algo-flip threshold candidate is ~24h out.** 13 flip-quiet days as of today; flip-quiet streak NEVER ENDED through the May 10 Inter Miami T-7d miss. **Tomorrow's charlesteel Bruno T-7d is the next-best candidate to end the streak — but if the engine is still down it joins the closed-out-failure list as #2 non-Cubs algo-flip miss.**

10. **CARRIED DAY-18 BATCH NOW DAY-19.** The 5-user May 8 cohort (charlesteel + ggri + aw + ajv + mark) rolled from Day 18 → Day 19 overnight. Body edit forward: "Two weeks and five days ago you signed up." ajvanprooyen's Cubs-trip-passed apology compounds another day. **The 5-user batch is still uniformly addressable but freshness drops another rung.**

11. **TARANIMERAMARO + NMCNAMEE99 DAY-15/16 BATCH NOW DAY 16/17.** Yesterday they were Day 15/16 (rolled overnight from Day 14). Today another roll: taranimeramaro Day 17 / nmcnamee99 Day 17. Bodies: "Two weeks and three days ago" + "Two weeks and two days ago." **The 2-user Day-15/16 batch is now a Day-17 batch.**

12. **PETE DAY 32 — DAY-30 48H CARRY.** Pete.uzelac now Day 32. **Day-30 carry now 48h.** Body: "One month and two days ago, six events tracked, zero alerts sent." Frame still parses but carry-tolerance for Day-30 is being tested — hard expiry approaches Day 33-34 in the queue.

13. **NICKLIB DAY 25 — DAY-21 96H CARRY.** Nicklib253 now Day 25. **Day-21 carry crosses 96h today.** Body: "Three weeks and four days ago you added Phillies vs Braves. The game has been over for 25 days and we never sent you a price update." **Hard expiry at Day 25 is today** — the frame becomes implausible as a Day-21 family send beyond this point.

14. **JOSH DAY-23 — DAY-21 48H CARRY.** joshdguillemette now Day 23. Body: "Three weeks and two days in." AEW May 24 now T-12d. T-7d on May 17 (5 days out).

15. **ZHILI1208 DAY-13 TODAY, DAY-14 BOUNDARY TOMORROW MAY 13 03:16 UTC.** **Next cleanly on-schedule Day-14 fire window: ~16h from report time.** zhili1208 0 watchlist. If engine returns by then, this is the closest pending on-schedule fire that hasn't already missed.

16. **THE 36-DAY-OUTAGE PATTERN — STAGNATION DEEPENS ACROSS ALL DIMENSIONS:**
    - Total users: 74 (was 74, **+0 over 24h** — 3rd consecutive zero-signup day)
    - Watchlist items: 89 (was 89, **+0 over 24h, +0 over 72h** — dataset-record flat)
    - Drip emails sent: 0 for **36 consecutive days**
    - Triggered alerts: 0 lifetime
    - Newsletter subscribers: 3 for **100 consecutive days** — milestone hit
    - Activation rate: 67.6% (real users) — flat 24h
    - Cumulative passed-no-notification: 15 (no new passed events in 24h)
    - **All 6 dimensions back to stagnation. The 72h post-burst window deepens vs the 48h finding.**

## Activation gap

**Users signed up in last 7 days with 0 watchlist items: 6** (was 6 on May 11 — composition change: joseph rolls out of 7-day window, no new entrants, so net **−1 to 5 within 7-day window** — but joseph still at-risk-with-0-watchlist so the overall inert post-signup cohort is **stable at 6**):

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **jmoriarty13@yahoo.com** | May 9 13:18 UTC | 2d 22h | **0** | **Day 2 today, Day-3 boundary TODAY ~13:18 UTC (~2.5h from report time).** Day-1 missed May 10. **First cleanly on-schedule Day-3 fire window remaining in the queue.** |
| **emmacmather@gmail.com** | May 8 21:54 UTC | 3d 13h | **0** | **Day 3 today. Day-3 boundary missed last night May 11 21:54 UTC.** Day-3 family 13h-carry. |
| **kevinkid94@gmail.com** | May 8 20:52 UTC | 3d 14h | **0** | **Day 3 today. Day-3 boundary missed last night May 11 20:52 UTC.** Day-3 family 14h-carry. |
| **jfgalzin@comcast.net** | May 8 12:54 UTC | 3d 22h | **0** | **Day 3 today. Day-3 boundary missed YESTERDAY May 11 12:54 UTC.** Day-3 family 22h-carry. |
| **natalie.sotocruz@gmail.com** | May 7 18:40 UTC | 4d 16h | **0** | **Day 4 today. Day-3 missed May 10 (40h carry).** Next: Day-7 fire May 14 18:40 UTC. |
| **joseph.g.nicolosi@gmail.com** | May 4 21:39 UTC | 7d 13h | **0** | **Day 7 (rolled out of 7-day API window). Day-7 boundary MISSED LAST NIGHT May 11 21:39 UTC** (~13.5h ago). **First cleanly on-schedule Day-7 fire of the entire outage — missed.** Day-7 family enters 24h-carry. |

**Activated within 7-day window (carried):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **liambot62@gmail.com** | May 8 13:07 UTC | 3d 22h | **1** (Toronto FC v Inter Miami CF, BMO Field, **PASSED May 9** — **target=null**) | **Day 3 today. EVENT PASSED. Day-3 boundary missed YESTERDAY May 11 13:07 UTC.** Day-3 family 22h-carry, post-event generic frame. |
| **cjthomas2557@outlook.com** | May 7 22:49 UTC | 4d 12h | **1** (Noah Kahan, Kia Center, Jun 12 — **target=null**) | **Day 4 today. Day-3 missed May 10 (36h carry). Noah Kahan 31d runway.** |
| **sparkitrightthere@gmail.com** | May 7 11:38 UTC | 5d 0h | **1** (Mac DeMarco, Salt Shed, **PASSED May 7** — **target=null**) | **Day 5 today. Day-3 missed May 10 (48h carry).** Event resolved 5 days ago. |
| **jadbennis0@gmail.com** | May 5 20:33 UTC | 6d 14h | **1** (Inter Miami CF vs Portland Timbers, May 17 — **target=null**) | **DAY 6 today. Day-3 missed May 8, Day-3 carry now 96h. Day-7 boundary TONIGHT ~20:33 UTC (~9.5h). Inter Miami T-5d today, T-3d May 14.** Day-7 + T-5d collide tonight. |

**Outside 7-day window (carried, still 0 watchlist):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| zhili1208@gmail.com | Apr 29 03:16 UTC | 13d | 0 | **Day 13 today. Day-14 boundary TOMORROW May 13 03:16 UTC** (~16h from report time). **Next cleanly on-schedule Day-14 fire in the queue.** |
| lilianamasyrubi@gmail.com | Apr 28 05:24 UTC | 14d | 0 | **Day 14 (rolled overnight). Day-14 boundary MISSED 05:24 UTC** (5.5h ago at report time). First cleanly on-schedule Day-14 fire of the outage — missed. |
| taranimeramaro@gmail.com | Apr 25 18:25 UTC | 16d 17h | 3 (active) | **Day 17 today.** Day-14 missed May 9. Carry batch w/ nmcnamee99. |
| nmcnamee99@gmail.com | Apr 25 11:51 UTC | 16d 23h | 1 (passed) | **Day 17 today.** Day-14 missed May 9. |
| mark.murdock@lanternsec.com | Apr 23 03:01 UTC | 19d | 0 | **Day 19 today.** 5-user May 8 batch (now Day 19). |
| awwhittington@icloud.com | Apr 23 00:30 UTC | 19d | 0 | **Day 19 today.** Same template. |
| ajvanprooyen@crimson.ua.edu | Apr 23 00:58 UTC | 19d | 6 (Cubs trip 100% passed) | **Day 19 today. Cubs apology frame: "Two weeks and five days ago you added six Cubs games to your watchlist — every one has now passed and we sent you nothing."** |
| ggri73@gmail.com | Apr 22 21:18 UTC | 19d | 0 | **Day 19 today.** |
| charlesteel126@gmail.com | Apr 22 11:38 UTC | 19d 23h | 1 (Bruno Ohio May 20) | **Day 19 today. Bruno Ohio T-8d. T-7d TOMORROW May 13 ~11:38 UTC. Next non-Cubs algo-flip threshold candidate.** |
| dr.altvater-70199@web.de | Apr 20 14:08 UTC | 21d 21h | 0 | **Day 22 today. Day-21 missed YESTERDAY May 11 14:08 UTC** (21h-carry today). German variant Day 18. |
| dylanbaldy@gmail.com | Apr 15 18:24 UTC | 26d | 0 | Churned. No realistic intervention. |

- **22 real users** (excluding 3 test accounts) have **never** added a watchlist item → **22 / 71 = 31.0% of real signups** (flat vs May 11). **Activation gap holds at 31.0% — 3rd consecutive day above 30%. The post-burst inert pattern (jmoriarty + the 3 May 8 inerts) has compounded for 5 consecutive days.**
- **Activation rate trajectory (real users, last 18 days):** 73.7% → 73.7% → 75.4% → 72.9% → 72.1% → 72.1% → 72.1% → 72.1% → 72.1% → 72.1% → 71.0% → 71.4% → 71.4% → 71.2% → 68.6% → ?(May 10) → 67.6% → **67.6% (flat). The 5-day decline holds (May 7 71.2% → May 12 67.6% = −3.6pp cumulative); 24h delta is zero today as no signups + no activations means no movement.**

**Acquisition-source inference: 19-day stable bifurcation.**

The pattern: **16 unknown in 19 days at n=19** (carried — no new signups in 72h). Against **3 known (ids 59, 61, 62, all activated)**. **Unknown-source activation rate: 4/16 = 25.0% (flat). Known-source: 3/3 = 100% (frozen).** Gap holds at 4x. **Day 19 of dependency. With 0 signups in 72h, attribution is purely retrospective now — no new data is arriving against which to test the hypothesis.**

## Churn signals

- Unsubscribes today: **0** (still 3 subscribers; **100 days flat = 14 weeks + 2 days = CENTENNIAL MILESTONE TODAY**).
- Users entering "at-risk" today: **+1 (joseph rolls in at Day 8 + 0 watchlist)**.
- Users entering "churned" since May 11: **+1 (lilianamasyrubi crossed Day-14 boundary 05:24 UTC).** Total churned: 68/74 (+1.4pp).
- Alert fatigue candidates: **0** (0 alerts ever sent — Day 36).
- Events passed without notification (cumulative): **15** (no change; no new passed events in 24h).
- **Algo-overrides as preemptive "events lost without notification":** **3 events** (Inter Miami May 17 [jadbennis0, **T-5d today**] + Bruno Ohio May 20 [charlesteel, **T-7d TOMORROW May 13**] + AEW May 24 [josh, T-12d]). **13th consecutive flip-quiet day. Tomorrow's charlesteel Bruno T-7d is the next-most-likely streak-breaker candidate.**

## At-risk users (7–14d inactive proxy)

| User | Day | Watchlist | Days to event | Recommended intervention |
|------|-----|-----------|---------------|--------------------------|
| **joseph.g.nicolosi@gmail.com** | 8d | 0 | — | **NEW ENTRANT to at-risk. Day-7 boundary missed last night.** Body: "A week and a day with TicketScan — what's the event that brought you here?" Day-7 family 14h-carry. |
| zhili1208@gmail.com | 13d | 0 | — | Day-10 family carried. **Day-14 boundary TOMORROW May 13 03:16 UTC.** Next clean on-schedule Day-14 fire in queue (~16h). |

**Note on the new churned entrant:** lilianamasyrubi crossed Day-14 boundary 05:24 UTC today. 0 watchlist, 14 days, signed up Apr 28. Body: "Two weeks in — what would change your mind about TicketScan?" Day-14 family 5.5h-carry.

## Live algo-flip post-mortem (today)

| User | Event | Days out | Flip status | Days flagged | Sends |
|------|-------|----------|-------------|--------------|-------|
| **jadbennis0** | **Inter Miami CF vs Portland Timbers, May 17** | **5** | **T-7d MISSED May 10. T-5d threshold today. Flip-quiet streak NEVER ENDED.** | 6 | 0 |
| cjthomas2557 | Noah Kahan, Kia Center Orlando, Jun 12 | 31 | NOT YET FLIPPED | 4 | 0 |
| **charlesteel126** | **Bruno Mars Ohio May 20** | **8** | NOT YET FLIPPED — **T-7d TOMORROW May 13 ~11:38 UTC (24h out — IMMINENT THRESHOLD)** | 1 | 0 |
| josh | AEW Double or Nothing May 24 | 12 | NOT YET FLIPPED — T-7d on May 17 (5 days) | — | 0 |

**No new flip in 24h. Thirteenth flip-quiet day in a row. CHARLESTEEL BRUNO T-7D TOMORROW IS THE NEXT-MOST-LIKELY STREAK-BREAKER CANDIDATE.** If the engine remains dark through May 13 ~11:38 UTC, charlesteel joins jadbennis0 in the closed-out-failure-mode list and the flip-quiet streak hits 14 days.

**Next non-Cubs flip threshold candidates:**
1. **charlesteel126 Bruno Ohio T-7d on May 13 ~11:38 UTC** — ~24h from report time. **Imminent threshold.**
2. **jadbennis0 Inter Miami T-3d on May 14** — 48h from report time.
3. **josh AEW T-7d on May 17** — 5 days out.

## Churned users with re-engagement potential

| User | ~Days inactive | Watchlist items | Upcoming hook? | Priority |
|------|----------------|-----------------|----------------|----------|
| **lilianamasyrubi@gmail.com** | 14d (NEW) | 0 | — | **HIGH — Day-14 boundary MISSED 05:24 UTC. Apology lead.** |
| **mark.murdock@lanternsec.com** | 19d | 0 | — | **HIGH — Day-19 carry; pair in cleanup batch.** |
| **awwhittington@icloud.com** | 19d | 0 | — | **HIGH — Day-19 carry.** |
| **ajvanprooyen@crimson.ua.edu** | 19d | 6 (all 6 Cubs events passed) | passed -6d to -11d | **HIGHEST — Cubs-trip-passed frame: "Two weeks and five days ago."** |
| **ggri73@gmail.com** | 19d | 0 | — | **HIGH — Day-19 carry.** |
| **charlesteel126@gmail.com** | 19d | 1 (Bruno Ohio May 20, 8d out) | 8d | **HIGHEST — Bruno Ohio T-7d TOMORROW. Algo-flip + Day-19 batch overlap.** |
| **nmcnamee99@gmail.com** | 17d | 1 (passed) | passed | **HIGH — Day-17 carry batch. Apology frame.** |
| **taranimeramaro@gmail.com** | 17d | 3 (Bruno MetLife Aug 21-25) | 101-105d | **HIGH — 3 active events, target=null all 3.** |
| dr.altvater-70199@web.de | 22d | 0 | — | **Day-21 missed YESTERDAY. Body: "Three weeks and a day."** German variant Day 18. |
| josh (joshdguillemette) | 23d | 1 (AEW May 24, 12d out) | 12d | **Day-23 today. Day-21 carry 48h. Body: "Three weeks and two days."** |
| nicklib253 | 25d | 1 (Phillies passed Apr 17) | passed -25d | **Day-21 carry 96h. HARD EXPIRY TODAY.** Body: "Three weeks and four days ago." Beyond today the Day-21 frame becomes implausible. |
| pete.uzelac77 | 32d | 6 (WC + Darts) | 38-53d | **Day 32 today. Day-30 carry 48h.** Body: "One month and two days ago, six events tracked, zero alerts sent." |
| dylanbaldy | 27d | 0 | — | LOW (no hook). |
| goldy.pec | 32d | 1 (Bilmuri passed May 2) | — | CLOSED. |
| blubberboi | 33d | 1 (Ed Sheeran Aug 8) | 88d | MEDIUM. |
| tate.sheppard | 59d | 1 (Florence passed May 1) | — | CLOSED. |
| **tosophiameyer** | 63d | 11 Harry Styles MSG | 104-128d | **HIGH — power user, deepest re-engagement runway.** |
| **brigitte.theisen** | 76d | 10 Backstreet Sphere | 66-86d | **HIGH — power user.** |
| laye.aurelien | 40d | 2 (Shakira Jul 20+23) | 69-72d | HIGH. |
| lvasub6 | 44d | 2 (Flyleaf Jul 17-18) | 66-67d | HIGH. |

**Passed-event overhang:** **15 churned/at-risk users** with passed events or no immediate hook (no change in 24h, since no new passed events). Cohort dies without a re-engagement product — engineering ask carried Day 36.

## Churn intervention: email content (ready to queue when drip engine returns)

### TODAY's natural fire windows (in order of upcoming)

#### **jmoriarty13 Day-3 — fires ~13:18 UTC today (~2.5h from report time)**

**Subject:** Day 3 — what brought you to TicketScan?
**Body:**
> You signed up for TicketScan three days ago but haven't tracked an event yet. Pick one thing you're already thinking about buying tickets for — concert, sports, theater.
>
> Search the name on [ticketscan.io](https://www.ticketscan.io), tap "Track price," set the price you'd pay. We'll email you the moment Ticketmaster, SeatGeek, or StubHub drops below it.
>
> Or just reply with one sentence on what brought you here. We read every response.
>
> [Browse events](https://www.ticketscan.io)

**Send timing:** ~13:18 UTC today — natural Day-3 boundary. **The last cleanly on-schedule Day-3 fire opportunity in the current queue.**

---

#### **jadbennis0 Day-7 + Inter Miami T-5d — fires ~20:33 UTC today (~9.5h from report time)**

**Subject:** Inter Miami is 5 days out — set your target?
**Body:**
> A week ago you added Inter Miami CF vs Portland Timbers to your watchlist. Match day is May 17 — five days away — and you haven't set a target price yet.
>
> Resale-market price drops cluster in the T-5 to T-3 day window. If you set a target now, we can catch the cheapest moment from Ticketmaster, SeatGeek, or StubHub and email you the second it drops below your number.
>
> [Set target for Inter Miami](https://www.ticketscan.io)

**Send timing:** ~20:33 UTC today — natural Day-7 boundary co-firing with T-5d algo-flip threshold. **The collision is intentional: Day-7 is the highest-tenure forcing question; T-5d is the highest-urgency price window. Co-fire = maximum send-leverage in current queue.**

---

### TOMORROW's natural fire windows (May 13)

#### **zhili1208 Day-14 — fires ~03:16 UTC May 13 (~16h from report time)**

**Subject:** Two weeks in — what would change your mind about TicketScan?
**Body:** (Day-14 generic; 0 watchlist for 13 days)

**Send timing:** ~03:16 UTC May 13. **Next cleanly on-schedule Day-14 fire after lilianamasyrubi missed this morning.** If engine remains down through May 13 03:16 UTC, the Day-14 family logs its second consecutive missed clean fire.

---

#### **charlesteel126 Bruno Ohio T-7d algo-flip — fires ~11:38 UTC May 13 (~24h from report time)**

**Subject:** Bruno Ohio is 7 days out — price-drop window opens now
**Body:**
> Bruno Mars at Ohio Stadium hits the T-7d mark tomorrow. From here through Sunday, resale prices typically wobble 15-30% as Ticketmaster, SeatGeek, and StubHub respond to each other.
>
> You haven't set a target price yet. Set one now and we'll email you the second any source drops below it.
>
> [Set target for Bruno Mars](https://www.ticketscan.io)

**Send timing:** ~11:38 UTC May 13 — **the next algo-flip threshold candidate; tomorrow is the most-likely streak-breaker if engine returns.**

---

### CARRIES (24-96h delayed, send today as batch)

#### **5-USER DAY-19 BATCH** (charlesteel + ggri + aw + ajv + mark — all rolled Day 18 → 19 overnight)

Body edit forward: **"Two weeks and five days ago you signed up for TicketScan…"** ajvanprooyen's Cubs-trip-passed acknowledgment retains the apology lead.

#### **2-USER DAY-17 BATCH** (taranimeramaro + nmcnamee99 — rolled Day 15/16 → 17 overnight)

Subject: "Two weeks and three days in — your watchlist needs attention." taranimeramaro: 3 Bruno MetLife dates still 101-105d out, target=null on all 3. nmcnamee99: Raptors-Cavs passed -16d.

#### **DR.ALTVATER DAY-22 — Day-21 21h-carry**

Body: **"Three weeks and a day ago you signed up for TicketScan…"** Frame still parses cleanly within Day-22.

#### **PETE DAY-32 — Day-30 48h-carry**

Body: **"One month and two days ago, six events tracked, zero alerts sent."** Frame still parses; carry-tolerance test approaching Day-33-34 hard expiry.

#### **JOSH DAY-23 — Day-21 48h-carry**

Body: **"Three weeks and two days in."** AEW May 24 now T-12d.

#### **NICKLIB DAY-25 — Day-21 96h-carry — HARD EXPIRY TODAY**

Body: **"Three weeks and four days ago you added Phillies vs Braves. The game has been over for 25 days and we never sent you a price update."** **Beyond today the Day-21 frame becomes implausible. SEND TODAY OR REWRITE.**

#### **DAY-3 CARRIES (5 users)**

jfgalzin Day-3 22h-carry / liambot Day-3 22h-carry post-event / kevin Day-3 14h-carry / emma Day-3 13h-carry / cjthomas Day-3 60h-carry / sparkit Day-3 72h-carry / natalie Day-3 64h-carry / jadbennis0 Day-3 96h-carry (folded into Day-7 send tonight).

#### **LILIANAMASYRUBI DAY-14 5.5H-CARRY**

Body: "Two weeks ago you signed up for TicketScan but haven't tracked an event yet." Apology lead acknowledging the 5.5h delay.

#### **JOSEPH DAY-7 14H-CARRY (NEW ENTRANT)**

Body: "A week and a day with TicketScan — what's the event that brought you here?" Joseph's natural Day-7 fire missed last night; carry into 14h is acceptable.

---

### TODAY's total queue if engine returns: **18+ emails**

- 2 today-natural fires (jmoriarty Day-3, jadbennis0 Day-7+T-5d)
- 2 tomorrow-natural fires queueable today (zhili Day-14, charlesteel T-7d)
- 5-user Day-19 batch (charlesteel + ggri + aw + ajv + mark)
- 2-user Day-17 batch (taranimeramaro + nmcnamee99)
- 4 individual carries (pete / josh / nicklib / dr.altvater)
- 1 NEW carry (lilianamasyrubi Day-14 5.5h)
- 1 NEW carry (joseph Day-7 14h)
- 5 Day-3 carries (jfgalzin / liambot / kevin / emma / cjthomas / sparkit / natalie)

**= 18-21 emails clear in 24-36h if engine returns today. Matches yesterday's record-largest queue at the high end.**

---

## Psychology-driven micro-optimization (today)

**Principle:** Commitment & Consistency (Cialdini, 1984) — applied to convert the **3-day 0-signup window** into a forced-conversion moment for visitors who hesitate at the signup step.
**Where to apply:** Homepage hero CTA + post-search results modal (`web/src/app/page.tsx` + `web/src/app/dashboard/page.tsx`).

**The diagnosis (sharpened today by 72h flat acquisition window):**
- May 10 / May 11 / May 12 each logged 0 signups.
- The May 7-8 burst produced 7 signups in 48h — many of whom **searched** before signing up (sparkit, cjthomas, liambot were instant-activators, suggesting search-first → signup-with-intent → activate-immediately).
- The "no signup this week" pattern combined with 0 new watchlist adds means the **search-to-signup conversion has dried up entirely** — visitors are either not searching, or searching and bouncing without committing.
- **Yesterday's CRO recommendation was loss-frame empty-state for users who signed up but didn't add anything.** That fix addresses the post-signup inert state. **Today's recommendation addresses the pre-signup state — visitors who search but don't commit.**

**The pattern:** Visitors arrive, search for an event, see prices, and leave without signing up. The current flow asks them to commit to "creating an account" before they've made any micro-commitment to TicketScan as a tool. **Commitment-and-consistency says small commitments lead to bigger ones.** The signup ask is too big for a first interaction.

**Specific change:** Add a **"Watch this event for 24h free — no signup"** CTA on every event-detail and search-result card. When tapped, browser-local storage captures the event and a session-bound watcher polls prices. After the first detected drop (or 24h), the prompt becomes "Save this watcher to your account so we don't lose it" — a much easier ask because the user has already invested a small commitment in the watcher.

```
Event card surface:
  [Bruno Mars, Ohio Stadium — May 20]
  Best price now: $245
  ▼ $87 below MSRP

  [ Watch price for 24h — no signup ]
  [ Sign up to track forever ]

After 24h or first price drop:
  Modal: "We caught a $12 drop on this event.
          Save this watcher to your account so
          you don't lose it (1 click)."
  [ Save watcher ]   [ Forget it ]
```

**Why this works (commitment & consistency):**
1. **Micro-commitment first, macro-commitment second.** The user invests 1 click in "watch for 24h" — a small consistent step. The follow-up signup ask aligns with their already-revealed preference.
2. **Loss aversion stacks (the watcher exists and would be lost).** Once the user has a 24h watcher running, the signup ask is reframed as "don't lose this watcher" rather than "create an account from scratch."
3. **Addresses the 72h zero-signup window directly.** Visitors aren't avoiding the product — they're avoiding the commitment threshold. Lowering the threshold from "account-create" to "1-click watch" matches the search-first → signup-second flow that the instant-activators (sparkit / cjthomas / liambot) exhibited.
4. **Pairs with the existing CRO activation stack.** Once the watcher converts to a signup, the user lands on the dashboard with a pre-populated watchlist — the empty-state inert pattern (which yesterday's loss-frame recommendation addresses) is partially short-circuited because the user lands *already activated*.

**Quantitative target:** Currently 0 signups in 72h. **Aim: convert 1 of every 30 watcher-creators to a signup within 24h (3.3%) and recover the pre-burst <0.3/day rate.** Even 1 signup/day from the new surface would 3x the post-burst rate.

**Implementation cost:** ~8-10h. Frontend: browser-local watcher state, modal flow, polling service. Backend: lightweight unauthenticated polling endpoint that returns current event prices (no user-binding required for 24h). Migration to authenticated watchlist at signup time.

**Cross-agent route:** **CRO Agent (Agent 6)** to scope/implement. **The full CRO activation stack now expands to 5 fixes covering: pre-signup commitment (TODAY) → empty-state (May 11) → surface (May 9) → capture (May 8) → recover (May 7). Combined ~21-26h work for end-to-end funnel coverage from visit through retention.**

---

## Cross-agent dependencies

1. **→ Email Agent (Agent 5):** **18-21 EMAILS QUEUED — matches yesterday's record at the high end.** If engine returns today:
   - **TODAY 13:18-20:33 UTC:** 2 natural fires (jmoriarty Day-3 + jadbennis0 Day-7+T-5d co-fire)
   - **TODAY (carry sends):** 5-user Day-19 batch + 2-user Day-17 batch + 4 individual carries (pete / josh / nicklib HARD EXPIRY / dr.altvater) + 2 NEW carries (lilianamasyrubi Day-14 / joseph Day-7) + 5 Day-3 carries + 2 short carries (sparkit / natalie)
   - **TOMORROW MAY 13 03:16 UTC:** zhili1208 Day-14 (next cleanly on-schedule Day-14 fire)
   - **TOMORROW MAY 13 ~11:38 UTC:** charlesteel Bruno Ohio T-7d (next algo-flip threshold — most-likely streak-breaker)
   - **CARRIED + COMPOUNDED: Day-1 schedule addition.** 6 missed Day-1 boundaries in 7 days. The Day-1 schedule entry is the highest-leverage schedule change in the system. Recommend Email Agent ship the schedule entry before May 14.
   - **NEW HARD EXPIRY TODAY: nicklib253 Day-21 96h-carry.** If not sent today, the "three weeks and four days" frame stops parsing as a Day-21 family send.

2. **→ CRO Agent (Agent 6):** **FIVE stacked high-leverage fixes — the full activation stack:**
   - **TODAY: Commitment-and-consistency "Watch for 24h — no signup" pre-signup CTA** — addresses the 72h zero-signup window by lowering the commitment threshold. ~8-10h.
   - **MAY 11: Loss-frame empty-state on dashboard** — addresses post-signup inert pattern. ~5h.
   - **MAY 9: FOMO time-decay "Happening soon" rail** — surfaces urgent events for empty-search-intent users. ~5-6h.
   - **MAY 8: Default-effect smart pre-fill on watchlist-add modal** — captures target_price at creation. ~3-4h.
   - **MAY 7: Loss-aversion target-price banner** — recovers null-target on existing 89 items. ~1.5h.
   - **Combined: ~21-26h work. Combined coverage: pre-signup (1-click watch) → empty-state (why bother?) → surface (which event?) → capture (what target?) → recover (existing items). Full funnel coverage from VISIT through retention.**

3. **→ Ads Agent (Agent 4):** **DAY 19 OF ATTRIBUTION DEPENDENCY. With 0 signups in 72h, attribution is purely retrospective — no new data to test the hypothesis.** Sharpened ask:
   - **What channel produced the May 7-8 burst?** 7 signups in 48h, 3 instant-activations + 4 inerts. If we don't know the source, we can't replicate the activations or avoid the inerts.
   - **What channel produced jmoriarty (May 9, inert)?** Single post-burst signup, 100% inert. If different source than May 7-8, jmoriarty is a coincidence; if same source, it's a degraded-quality follow-on.
   - **Why has the source(s) produced 0 signups for 72h?** Whether budget, fatigue, or algorithmic dampening — the cause matters more than the source now that the burst is decisively a flicker.
   - **Day 19 of dependency. No new acquisition data has arrived in 72h. The 30-day funnel-stagnation pattern + the 72h post-burst flat is now a single coherent signal.**

4. **→ Content Agent (Agent 3):** **MLS / INTER MIAMI MARKET SIGNAL — Day 4 carry, no new traffic.**
   - liambot's Toronto FC v Inter Miami passed May 9 without notification (passed-no-notify #15). jadbennis0's Inter Miami CF vs Portland Timbers is **5 days out** (T-5d). **The Inter Miami market signal carried from May 9-11 has produced 0 new MLS signups across 72h** — the market exists but TicketScan's coverage surface for it is not converting.
   - **Recommendation:** Publish an Inter Miami / Messi-proximity content piece by May 14 to target the May 17 match. Also: Bruno Mars Ohio Stadium May 20 has T-7d tomorrow — content piece on Bruno Mars resale-pricing patterns by May 14 would align with the algo-flip threshold.
   - **Carried market signals (still unaddressed):** Mac DeMarco indie-concerts; Noah Kahan / Kia Center Orlando; AEW Double or Nothing.

5. **→ Engineering / Drip-Engine:** **Day 36 of outage. New boundaries fired and missed since May 11 report:**
   - jfgalzin Day-3 (May 11 12:54 UTC) — missed
   - liambot Day-3 post-event (May 11 13:07 UTC) — missed
   - **dr.altvater Day-21 (May 11 14:08 UTC) — FIRST CLEANLY ON-SCHEDULE DAY-21 FIRE OF OUTAGE, MISSED**
   - kevin Day-3 (May 11 20:52 UTC) — missed
   - **joseph Day-7 (May 11 21:39 UTC) — FIRST CLEANLY ON-SCHEDULE DAY-7 FIRE OF OUTAGE, MISSED**
   - emma Day-3 (May 11 21:54 UTC) — missed
   - **lilianamasyrubi Day-14 (May 12 05:24 UTC) — FIRST CLEANLY ON-SCHEDULE DAY-14 FIRE OF OUTAGE, MISSED**
   - **Total May 10-12 natural fire misses: 13.** Every drip family (Day-1/3/7/14/21/30) and both algo-flip families (Cubs + non-Cubs) now have at least one cleanly on-schedule fire confirmed missed inside the outage. **Zero remaining "clean" categories.**
   - **NEW HARD EXPIRY: nicklib253 Day-21 96h-carry expires today.** Beyond today the Day-21 frame stops parsing.
   - **Same-day batch capacity if engine returns today: 18-21 emails in 36h.**
   - **CARRIED ASK: Day-1 schedule addition.** 6 missed Day-1 boundaries in 7 days.

6. **→ All agents:** **The 72h post-burst flat window confirms the May 7-8 spike is a single-shot event.** All agents should treat May 7-8 as point-data, not a baseline. **The 36-day-outage stagnation pattern is the operative state across all 6 dimensions, with newsletter subscribers crossing the 100-day-flat centennial today.**

---

## Summary metrics

```
Total users:              74 (+0 over 24h, +0 over 72h) — 3rd zero-signup day in a row
Real users:               71
Activated:                48 (=0 over 72h) — watchlist FULLY FLAT for 72h (dataset record)
Activation rate:          67.6% (real, flat 24h) — 5-day cumulative −3.6pp
Watchlist items:          89 (=0 over 72h)
Newsletter subscribers:   3 (100 DAYS FLAT — CENTENNIAL MILESTONE TODAY = 14 weeks + 2 days)
Active alerts:            0 (Day 36)
Triggered alerts:         0 (lifetime)
Drip emails sent:         0 (Day 36 — confirmed via /api/admin/drip-stats: stats=[])
Cumulative passed-no-notify: 15 (no new in 24h)
Algo-flip-quiet streak:   13 days, NEVER ENDED
Activation gap (real):    22/71 = 31.0% (flat) — 3rd consecutive day ≥30%
Unknown-source activation: 4/16 = 25.0% (flat, n unchanged)
Day-19 cohort:            5 users (charlesteel + ggri + aw + ajv + mark)
Day-17 cohort:            2 users (taranimeramaro + nmcnamee99) — rolled overnight
Instant-activation cluster: 4 (frozen since May 8, no adds in 96h)
Target-price capture:     0/89 watchlist items = 0% (Day 36 structural)
Post-burst signups (72h): 1 (jmoriarty13, 100% inert) — back to <0.1/day post-burst
Closed-out failure-mode families: Day-1, Day-3, Day-7, Day-14, Day-21, Day-30, Cubs algo-flip, non-Cubs algo-flip — 8 of 8 schedule/flip families = ALL FAMILIES CLOSED-OUT
```

**Headline:** Three consecutive zero-signup days. Watchlist fully flat for 72h — a dataset record. Newsletter subscribers cross the 100-day flat milestone today. **The May 11 record-largest queue of 17-19 emails passed without a single send — and the queue today expands to 18-21 emails after 7 additional natural fire windows fired and missed in the last 24h, including the first cleanly on-schedule fires of the Day-7 family (joseph), Day-14 family (lilianamasyrubi), and Day-21 family (dr.altvater) of the entire 36-day outage.** Every conceivable scheduled-send family now has at least one cleanly on-schedule fire confirmed missed inside the outage — zero remaining "clean" categories. Today's CRO recommendation (commitment-and-consistency 1-click pre-signup watcher) addresses the 72h zero-signup window by lowering the commitment threshold; combined with the prior 4 fixes the activation stack is now 5 fixes / ~21-26h work for end-to-end funnel coverage. **Tomorrow May 13 has 2 pending cleanly on-schedule fire windows (zhili Day-14 at 03:16 UTC + charlesteel Bruno T-7d at ~11:38 UTC) — if the engine remains dark through tomorrow, both join the closed-out-failure category and the flip-quiet streak hits 14 days.** Nicklib253 Day-21 96h-carry hits hard expiry today.
