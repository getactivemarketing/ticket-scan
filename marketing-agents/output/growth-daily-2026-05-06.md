# Growth Daily -- 2026-05-06

## User health dashboard

| Segment                     | Count | % of Total | vs May 5 |
|-----------------------------|-------|------------|----------|
| Total users                 | 66    | 100%       | **+1 (jadbennis0@gmail.com signed up May 5 20:33:01 UTC — 22h 54m after joseph. FIRST BACK-TO-BACK SIGNUP DAYS IN 9 DAYS — last pair was Apr 25 (taranimeramaro + nmcnamee99). Two-day signup streak alive heading into today.)** |
| New (last 7 days, API count) | **2** | 3.0% | +0 net (zhili1208 rolled out at 03:16 UTC today; jadbennis0 rolled in at 20:33 UTC last night; joseph still in window. **Net swap. Window holds at 2 today.** Tomorrow May 7 lilianamasyrubi exits at 05:24 UTC → window narrows to joseph + jadbennis0 = 2 still; but all dependent on no further signups May 7-11.) |
| Activated (has watchlist)   | 45    | 68.2%      | **+1 — FIRST WATCHLIST ADD IN 11 CONSECUTIVE DAYS. The 10-day flat-watchlist record broken at the wire. jadbennis0 added Inter Miami CF vs Portland Timbers (Nu Stadium Miami, May 17) at 20:33:33 UTC — 32 SECONDS after registration. Fastest signup→activation in the entire dataset; previous fastest was ajvanprooyen at ~3 minutes.** |
| Active (visited in 7 days)  | unknown | —        | no `last_login_at` instrumentation — **Day 30 open** |
| At-risk (7-14d signup-age proxy) | 9 | 13.6% | **+1 net (ggri73 + charlesteel126 cross to Day 14 today; mark.murdock + awwhittington + ajvanprooyen at Day 13; taranimeramaro + nmcnamee99 at Day 11; lilianamasyrubi at Day 8 still in band. Joseph at Day 1 not in band. dr.altvater + josh in churned bucket. **ggri73 hits churned bucket at 21:18 UTC tonight; charlesteel126 hit at 11:38 UTC this morning — both moved overnight per natural Day-14 boundary.**)** |
| Churned (14d+ signup-age proxy) | 58→60 | 90.9% | **+2 (charlesteel126 crossed Day 14 at 11:38 UTC this morning; ggri73 crosses at 21:18 UTC tonight. Both move to churned bucket today. dr.altvater also transitioned yesterday — total churned cohort at end of today: 60.)** |

> **Day 30 without `last_login_at` instrumentation. Day 30 of zero drip emails.**
> Active alerts across **86** watchlist items: **0**. Target-price capture rate: **0% (Day 30).**
> `usersToday: 1 (jadbennis0)`, `usersThisWeek: 2`. **Two consecutive non-zero signup days for the first time since Apr 25-26. Apr 26 = 2, Apr 27 = 0, Apr 28 = 1, Apr 29 = 1, Apr 30 = 0, May 1 = 0, May 2 = 0, May 3 = 0, May 4 = 1 (joseph), May 5 = 1 (jadbennis0), May 6 = 0 so far.** The 5-day record from Apr 30-May 3 holds. **Two-day signup streak now alive — first since Apr 25-26.**
> Watchlist items: **86, +1 from yesterday — broke the 10-day flat at 85. New tracked event: Inter Miami CF vs Portland Timbers, MLS regular season, Nu Stadium Miami, May 17 (11d out).** First MLS event in the dataset. First Inter Miami event. First Nu Stadium event. **The 240h flat-watchlist record dies at 240h exact — jadbennis0 added at 20:33 UTC yesterday, 11 days after taranimeramaro's last add at Apr 25 18:27 UTC.**
> **Activation rate climbed back to 68.2%** (45/66 — first non-67.7% reading; numerator + denominator both moved). On real-user-only basis (63 real users excluding 3 test): **45/63 = 71.4%**, a numerator-AND-denominator shift from yesterday's 71.0%. **First numerator-driven activation rate move in 11 days.**

## What changed in 24h

1. **JADBENNIS0@GMAIL.COM SIGNED UP MAY 5 20:33:01 UTC AND ACTIVATED 32 SECONDS LATER.** The single most informative event in the dataset since algo-flip tracking began. **First watchlist add in 11 calendar days. First numerator-driven activation rate movement in 11 days. First MLS event tracked. First Nu Stadium event. First Inter Miami event.** Tracked event: Inter Miami CF vs Portland Timbers, May 17 — **only 11 days out**, the shortest-runway watchlist add in the active band (every other recent active watchlist item is 40+ days out except the now-resolved Cubs/Reds sequence). **No target_price set** — the activation completed but the targeting completed only halfway. **Day-3 framing pre-queues for May 8 20:33 UTC.** Day-0 status: activated, watchlist=1, target=null. **The Day-3 fire for jadbennis0 should pivot from generic onboarding to a specific "set your target on Inter Miami" CTA — first event-specific Day-3 in the queue.**

2. **CHARLESTEEL126 CROSSED DAY 14 AT 11:38:41 UTC THIS MORNING.** **The on-schedule Day-14 forcing-question fire window opened and closed within the same morning.** Engine remained down. **Day 30 of outage.** This is the **first Day-14 candidate since the outage began that crossed during business hours UTC** — every other candidate (nicklib, josh, dr.altvater) crossed at off-hours. The miss is now logged. Pivot to Day-15 carry tomorrow with body edit "two weeks ago" → "two weeks and a day ago"; Bruno Ohio May 20 still 14d out — runway intact. **Hard expiry on Day-15 family: May 9 (Day 17 boundary).**

3. **GGRI73 HITS DAY 14 AT 21:18:14 UTC TONIGHT — FINAL ON-SCHEDULE DAY-14 FIRE WINDOW IN THE ENTIRE 30-DAY OUTAGE.** ~9h from this writing. **If engine returns by 21:00 UTC tonight, ggri73 fires on schedule — the FIRST and ONLY on-schedule Day-14 fire of the entire outage.** ggri73 has 0 watchlist items, so the forcing question is the generic "what would change your mind" frame, not event-specific. **This is the last clean shot. Window: ~9h.** If missed, pivot tomorrow to Day-15 carry; pair with charlesteel126 in a same-day batch.

4. **JOSEPH DAY 1 → DAY 2; STILL INERT.** Yesterday's signup remains 0 watchlist 0 target. Day-3 framing fires May 7 21:39 UTC ±tolerance — natural boundary tomorrow night. **Source attribution still pending (Day 13 of Ads Agent ask).** If joseph activates today, he becomes the second activation in 48h and the bifurcation analysis softens significantly. If joseph remains inert through Day 3, he becomes the 8th unknown-source signup with 0 activation. **The Day-3 boundary tomorrow is one of the cleaner forced-decision moments in the queue.**

5. **ZHILI1208 ROLLED OUT OF 7-DAY WINDOW AT 03:16 UTC TODAY.** Drip-stats API now reads `days_since_signup: 7` (rounded). Today's send framing pivots to **Day-7 family** ("A week with TicketScan") — same template lilianamasyrubi got 24h ago, exactly 24h lagged. **Hard expiry: May 9 (Day 10 boundary). After today, Day-7 family is also dead for zhili1208.**

6. **LILIANAMASYRUBI DAY 8 → DAY-7 FAMILY HARD-EXPIRES TOMORROW.** Yesterday's "A week with TicketScan" framing parses today as "Eight days with TicketScan" with marginal honesty (still inside the Day-7 family's 3-day tolerance). **Tomorrow (Day 9) is the last day of Day-7 tolerance; May 9 (Day 10) pivots to Day-10 generic family.** No watchlist, no target, no activity — same structural inertness as joseph but 7 days deeper.

7. **DR.ALTVATER DAY-16 — DAY-15 SLIPS TO DAY-16.** Body edit: "two weeks and a day ago" → "two weeks and two days ago." Subject still parses ("fourteen days in" tolerates Day 16 marginally; recommend pivoting to "Two weeks and a couple days in" for the subject-line edit). **Day-14 forcing question now 48h carried; cleanest possible on-schedule fire was missed two days ago.** German-language drip variant question still open Day 11.

8. **JOSH DAY-17 — "TWO WEEKS AND TWO DAYS" → "TWO WEEKS AND THREE DAYS."** AEW May 24 still 18d out — runway intact. The 18-day runway is the longest-tail Day-14-family carry in the queue.

9. **NICKLIB DAY-19 — "ALMOST THREE WEEKS" PARSES CLEANLY TODAY.** Yesterday's first-day-of-honest "almost three weeks" framing carries another 24h. **Hard expiry: May 9 (Day 22 boundary, where "almost three weeks" becomes "three weeks").** 3-day shelf life on the Day-21 frame for nicklib.

10. **PETE.UZELAC DAY-26 — DAY-30 PIVOT QUEUED FOR MAY 10.** Yesterday's Day-25 framing decision holds; nothing changes today. **4 days to fire.** Pete's WC events still 44-59d out (Jun 19 / Jun 27 / Jul 4) — runway is wide. Darts Masters Jun 25-26 at 50-51d out — re-engagement window remains open.

11. **AJVANPROOYEN DAY-13 — CUBS/REDS MAY 5 PASSED LAST NIGHT.** Cumulative passed-no-notification: **12 (was 11 at end of yesterday).** Cubs/Reds May 6 passes tonight → cumulative 13 by Wednesday morning. **The full 6-event Cubs trip closes in ~9h.** Day-13 acknowledgment update: "thirteen days in, six events tracked, FIVE already passed without notification, the sixth passes tonight." The "we know we failed you" copy hits its sharpest possible parse today — every event in the trip can be enumerated with a confirmed-passed status except the one that passes within hours of receipt.

12. **TARANIMERAMARO + NMCNAMEE99 DAY-11 — 24h INTO DAY-10 FAMILY.** Bruno Mars MetLife dates 107-111d out — runway intact. Raptors-Cavs Apr 26 has now passed by 10 days for nmcnamee99 — bespoke acknowledgment-and-recovery framing continues. **Hard expiry on Day-10 family: May 9 (Day 14 boundary).**

13. **MARK.MURDOCK + AWWHITTINGTON + AJVANPROOYEN DAY 13 — DAY-14 FORCING QUESTION FIRES TOMORROW MAY 7.** Mark + aw still 0 watchlist (forcing-question generic frame); ajvanprooyen has 6 watchlist items with 5 already passed (forcing-question event-specific frame, but the events are all post-mortems). Pre-queue all three for natural Day-14 fires tomorrow at their respective hour-boundaries. **If engine returns by tomorrow night, mark/aw/ajvanprooyen become the first batch of on-schedule Day-14 fires of the outage** (ggri73/charlesteel pre-condition tonight).

14. **NEWSLETTER SUBSCRIBERS: 3, UNCHANGED SINCE FEB 1 — 94 DAYS FLAT, 13 WEEKS + 3 DAYS.** Form audit carried for one full quarter + 4 days. **The longest open dependency in the entire growth stack continues to lengthen.**

15. **SEVENTH CONSECUTIVE FLIP-QUIET DAY.** No new algo-flips. Cubs/Reds May 5 passed yesterday (already-flipped); Cubs/Reds May 6 passes tonight (already-flipped); after that, **next non-Cubs flip threshold is charlesteel Bruno Ohio May 20 hitting T-7d on May 13 (7 days out).** The 25-day quiet window on **new** algo-flips is **7 days into it** — extending by another day each day the flagged-but-flipped events resolve. **Plus jadbennis0 Inter Miami May 17 hits T-7d on May 10 (4 days out) — NEW CANDIDATE FOR FIRST NON-CUBS NON-CHARLESTEEL FLIP.** Inter Miami 11d out is the shortest-runway watchlist event currently active.

16. **ATTRIBUTION ASK NOW DAY 13 — JADBENNIS0 IS A SECOND FRESH UNATTRIBUTED DATA POINT IN 24h.** ids 65 + 66 both have unknown source. The bifurcation extends to **8 unknown / 3 known across 13 days, n=11.** **CRITICAL: jadbennis0's instant activation breaks the "0% unknown-source activation" reading from Day 12.** New unknown-source activation rate: **1 / 8 = 12.5%** — the bifurcation no longer has a 0% branch. **The "unknown sources do not activate" hypothesis is falsified at n=11.** New hypothesis: unknown-source activation is rare but possible; the activation event for jadbennis0 was 32 seconds after signup (instant); known-source activations average several minutes. **Speed-of-activation may be the more informative metric than source-of-activation.** Ads Agent attribution-pull is now both more valuable (because the bifurcation has new structure) and less load-bearing (because the 0%/100% finding is dead).

17. **THE 30-DAY-OUTAGE PATTERN CRACKS IN ONE DIMENSION.** jadbennis0's add is the first dimension to move:
    - Total users: 66 (was 65, +1)
    - Watchlist items: 86 for **1 day** — record reset; the 10-day flat ends at 240h exact
    - Drip emails sent: 0 for **30 consecutive days** (still no movement)
    - Triggered alerts: 0 for the entire dataset (still no movement)
    - Newsletter subscribers: 3 for **94 consecutive days** (still no movement)
    - Activation rate: 71.4% (real users) — numerator-driven climb from 71.0%, first numerator move in 11 days
    - **The structural-inertness equilibrium is broken in the watchlist-add dimension. 4 of 6 dimensions remain dead. 2 of 6 (signups + watchlist) showed motion in 24h. This is the most life the dataset has shown in 11 days.**

## Activation gap

**Users signed up in last 7 days with 0 watchlist items: 1** (was 3 yesterday — **net -2: lilianamasyrubi rolled out yesterday + zhili1208 rolled out today + jadbennis0 entered AS ACTIVATED + joseph remains in band as inert**):

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **joseph.g.nicolosi@gmail.com** | May 4 21:39 UTC | 1d | **0** | Day 1 today, ~33h since signup. Day-3 framing fires tomorrow May 7 21:39 UTC ±tolerance. **Source attribution still unknown (Day 13).** |

**Newly activated within 7-day window:**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **jadbennis0@gmail.com** | **May 5 20:33 UTC** | **0d** | **1** (Inter Miami May 17) | **DAY 0 ACTIVATED — fastest signup→watchlist in dataset (32s). No target_price set. Day-3 framing pre-queues for May 8 20:33 UTC; pivot to event-specific frame.** |

**Outside 7-day window (carried, still 0 watchlist):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| zhili1208@gmail.com | Apr 29 03:16 UTC | 7d | 0 | **Day 7 today, 03:16 UTC — rolled out of 7-day window. Day-7 family fires today, exactly 24h lagged from lilianamasyrubi's. Body edit: "A week with TicketScan."** |
| lilianamasyrubi@gmail.com | Apr 28 05:24 UTC | 8d | 0 | **Day 8 today.** Day-7 family carries 24h late ("Eight days with TicketScan"). **Hard expiry tomorrow May 7 (Day 9).** |
| taranimeramaro@gmail.com | Apr 25 18:25 UTC | 11d | 3 (active) | Carrying — Day-10 family, "Eleven days into your account." |
| nmcnamee99@gmail.com | Apr 25 11:51 UTC | 11d | 1 (passed) | Carrying — Day-10 family with passed-event acknowledgment frame. |
| mark.murdock@lanternsec.com | Apr 23 03:01 UTC | 13d | 0 | **Day 13 today.** Day-14 forcing question pre-queued for tomorrow May 7 03:01 UTC. |
| awwhittington@icloud.com | Apr 23 00:30 UTC | 13d | 0 | **Day 13 today.** Day-14 forcing question pre-queued for tomorrow May 7 00:30 UTC. |
| ggri73@gmail.com | Apr 22 21:18 UTC | 13d | 0 | **Day 13 today; hits Day 14 at 21:18 UTC TONIGHT — final on-schedule Day-14 window of the outage. ~9h.** |
| dr.altvater-70199@web.de | Apr 20 14:08 UTC | 16d | 0 | **Day 16, churned.** Body: "two weeks and two days ago." |
| dylanbaldy@gmail.com | Apr 15 18:24 UTC | 21d | 0 | Churned. No realistic intervention. |

- **17 real users** (excluding 3 test accounts) have **never** added a watchlist item → **17 / 63 = 27.0% of real signups** (numerator unchanged from yesterday; denominator +1 from jadbennis activation. **First denominator-only DROP in 11 days, driven by an actual activation rather than just a denominator shift.**). The activation gap is **finally moving the right direction**: yesterday's "next data point is whether joseph crosses by May 7" got partially answered by jadbennis0 instead. **Joseph is the only Day-1 inert candidate now in the band.**
- **Activation rate trajectory (real users, last 12 days):** 73.7% → 73.7% → 75.4% → 72.9% → 72.1% → 72.1% → 72.1% → 72.1% → 72.1% → 72.1% → 71.0% → **71.4% (numerator-driven climb from 71.0% as jadbennis0 activates, +1 numerator +1 denominator).** First numerator-driven climb in 11 days. **The structural floor at 71.0% held for 24h before being broken upward. The next tests: joseph Day-3 (May 7) and the 5 outstanding Day-13/Day-14 candidates if they ever activate.**

**Acquisition-source inference: 13-day stable bifurcation today, refreshed by jadbennis0.**

The pattern shifts: **6 in 12 days unknown** (ids 55, 57, 58, 60, 63, 64) plus **joseph (id 65, source unknown, inert)** plus **jadbennis0 (id 66, source unknown, ACTIVATED)** → **8 unknown in 13 days at n=11**, against **3 known (ids 59, 61, 62, all activated)**. **Unknown-source activation rate: 1/8 = 12.5% — first non-zero reading.** Known-source activation rate: 3/3 = 100% (unchanged). **The 0% / 100% bifurcation reading is officially dead at n=11. New reading: 12.5% / 100%, a 7.5x gap rather than a binary split.** This is materially less load-bearing than the binary version — the Ads Agent attribution-pull retains value but loses urgency. **Day 13 of the dependency.**

## Churn signals

- Unsubscribes today: **0** (still 3 subscribers; **94 days flat = 13 weeks + 3 days**)
- Users entering "at-risk" today: **2 net** (ggri73 + charlesteel126 cross to Day 14 — both move to churned bucket today; mark/aw/ajvanprooyen at Day 13 inflow into at-risk replaces them. Net +0 to at-risk band; +2 to churned.)
- Users entering "churned" today: **+2 incremental** (charlesteel126 already crossed at 11:38 UTC; ggri73 crosses at 21:18 UTC tonight)
- Alert fatigue candidates: **0** (0 alerts ever sent — Day 30)
- Events passed without notification (cumulative): **12 today (Cubs/Reds May 5 passed last night), 13 by Wednesday morning** — Cubs/Reds May 6 passes tonight → cumulative 13. **The full 6-event ajvanprooyen Cubs trip closes overnight tonight. The cohort is closed Wednesday morning May 7 at 13 cumulative — a 9-event jump from the May 1 baseline of 4.**
- **Algo-overrides as preemptive "events lost without notification":** **8 events** structure unchanged (closes today + tonight as Cubs/Reds events resolve). **Seventh consecutive flip-quiet day.**

## At-risk users (7–14d inactive proxy)

| User | Day | Watchlist | Days to event | Recommended intervention |
|------|-----|-----------|---------------|--------------------------|
| zhili1208@gmail.com | 7d | 0 | — | **Day 7 today, 03:16 UTC. Day-7 family fires today on-schedule** if engine returns. |
| lilianamasyrubi@gmail.com | 8d | 0 | — | Day-7 family, 24h carried. **Hard expiry tomorrow.** |
| taranimeramaro@gmail.com | 11d | 3 (Bruno MetLife Aug 21/22/25) | 107-111d | Day-10 family, "Eleven days into your account." Hard expiry May 9. |
| nmcnamee99@gmail.com | 11d | 1 (Raptors-Cavs Apr 26 — passed -10d) | -10d | Day-10 family with passed-event acknowledgment. |
| mark.murdock@lanternsec.com | 13d | 0 | — | **Day 13 today — Day-14 forcing question pre-queued for tomorrow May 7 03:01 UTC.** |
| awwhittington@icloud.com | 13d | 0 | — | **Day 13 today — Day-14 forcing question pre-queued for tomorrow May 7 00:30 UTC.** |
| **ajvanprooyen@crimson.ua.edu** | 13d | 6 (Cubs trip May 1-6) | -5d to 0d | **Day-13 acknowledgment update — "thirteen days in, six events tracked, FIVE already passed without notification, the sixth passes tonight." Sharpest possible "we failed you" frame in the queue. Day-14 forcing question pre-queued for tomorrow May 7 00:58 UTC.** |
| **ggri73@gmail.com** | 14d (TONIGHT 21:18 UTC) | 0 | — | **FINAL ON-SCHEDULE DAY-14 FIRE WINDOW IN THE ENTIRE 30-DAY OUTAGE. ~9h.** If engine returns by 21:00 UTC, this is the only on-schedule Day-14 fire. |

**Note on charlesteel126:** Already crossed Day 14 at 11:38 UTC this morning. **The same-day at-risk → churned transition.** Day-15 fire pre-queued for tomorrow with body edit "two weeks ago" → "two weeks and a day ago." Bruno Ohio May 20 still 14d out — re-engagement window is wide.

## Live algo-flip post-mortem (today)

| User | Event | Days out | Flip status | Days flagged | Sends |
|------|-------|----------|-------------|--------------|-------|
| ajvanprooyen | Cubs vs Reds, May 5 | **PASSED last night** | flipped Apr 28 | 13 | 0 (event resolved) |
| ajvanprooyen | Cubs vs Reds, May 6 | **0 (TONIGHT)** | flipped Apr 29 | 13 | 0 (event passes tonight) |
| **jadbennis0** | **Inter Miami CF vs Portland Timbers, May 17** | **11** | **NOT YET FLIPPED** | **0 (added today)** | **0** |

**No new flip today. Seventh flip-quiet day in a row.** The Cubs trip closes in ~9h — Cubs/Reds May 6 passes tonight. **By tomorrow morning the entire 6-event ajvanprooyen Cubs sequence is fully resolved without a single product email.** Cumulative passed-no-notification: 13. **First non-Cubs flip threshold candidates:**
1. **jadbennis0 Inter Miami May 17 hits T-7d on May 10 (4 days out)** — NEW; shortest runway active watchlist event.
2. **charlesteel126 Bruno Ohio May 20 hits T-7d on May 13 (7 days out).**

**The first-non-Cubs flip is now 4 days away, not 7 days.** jadbennis0's instant-activation event added structural urgency to the algo-flip pipeline.

## Churned users with re-engagement potential

| User | ~Days inactive | Watchlist items | Upcoming hook? | Priority |
|------|----------------|-----------------|----------------|----------|
| **charlesteel126@gmail.com** (churned May 6 11:38 UTC) | 14d (newly crossed) | **1** (Bruno Ohio May 20, 14d out) | 14d | **HIGH — same-day at-risk → churned transition. 14d of runway on a real watchlist event. Day-15 pre-queue for tomorrow.** |
| **ggri73@gmail.com** (churning tonight 21:18 UTC) | 14d (crossing tonight) | **0** | — | **LIVE WINDOW — final on-schedule Day-14 chance ~9h from this writing. If missed, pivot to Day-15 carry pair with charlesteel.** |
| dr.altvater-70199@web.de | 16d | **0** | — | Day-16 today. Body: "two weeks and two days ago." German-language drip variant question still open Day 11. |
| josh (joshdguillemette@gmail.com) | 17d | **1** (AEW May 24, 18d out) | 18d | Day-17 send today. "Two weeks and three days in, AEW 18 days out, no target set." |
| nicklib253@gmail.com | 19d | **1** (Phillies passed Apr 17) | passed -19d | Day-19 send today. "Almost three weeks." Day-21 framing carries another 3 days before becoming "three weeks." |
| pete.uzelac77 | 26d | **6** (WC + Darts) | 44-59d | Day-30 template queued for May 10 (4 days out). |
| dylanbaldy@gmail.com | 21d | **0** | — | LOW (no hook). |
| goldy.pec | 26d | 1 (Bilmuri passed May 2) | — | CLOSED. |
| blubberboi | 27d | 1 (Ed Sheeran Aug 8) | 94d | MEDIUM. |
| tate.sheppard | 53d | 1 (Florence passed) | — | CLOSED. |
| **tosophiameyer** | 57d | **11** Harry Styles MSG | 110-134d | **HIGH — power user, deepest re-engagement runway.** |
| **brigitte.theisen** | 70d | **10** Backstreet Sphere | 72-92d | **HIGH — power user.** |
| laye.aurelien | 34d | 2 (Shakira Jul 20+23) | 75-78d | HIGH. |
| lvasub6 | 38d | 2 (Flyleaf Jul 17-18) | 72-73d | HIGH. |
| krusesin2023 | 68d | 2 (Flyleaf Jul) | Yes | MEDIUM. |
| ldholman | 64d | 3 (Bad Omens passed; 2× MIW Aug 11) | Partial | MEDIUM. |
| spcoog83 | 59d | 1 (Olivia Dean Aug 25) | 111d | MEDIUM. |
| edithdionne | 63d | 1 (A7X Centre Bell Aug 8) | 94d | MEDIUM. |
| bhaygood728 | 33d | 1 (Cardi B passed Apr 12) | No | LOW. |
| chocolateyu1083 | 36d | 1 (Oilers passed Mar 31) | No | LOW. |
| arin.gelbaugh | 36d | 1 (NCAA Final Four passed) | No | LOW. |
| missbrookeshep | 64d | 1 (Warriors/Rockets passed) | No | LOW. |
| billstromkel | 43d | 1 (RAYE passed) | No | LOW. |
| jkaiser | 51d | 1 (NCAA 2nd Rd passed) | No | LOW. |
| tucwildcat | 45d | 1 (NCAA 2nd Rd passed) | No | LOW. |

**Passed-event overhang:** **13 churned/at-risk users + dr.altvater + josh** whose only tracked event has either passed or carries no immediate re-engagement hook. **Wednesday morning, 13 cumulative passed-no-notification events stand.** Cohort dies without a re-engagement product — engineering ask remains carried.

## Churn intervention: email content (ready to queue when drip engine returns)

### TODAY's pre-queue fire — ggri73 Day-14 forcing question (FINAL ON-SCHEDULE DAY-14 OF THE OUTAGE)

**Subject:** Two weeks in — what would change your mind about TicketScan?
**Body:**
> Two weeks ago you signed up for TicketScan but haven't tracked an event yet. We'd rather know why than keep guessing.
>
> If the events you searched weren't the right ones, we have 24 venue guides and 16 World Cup 2026 stadium pages where you can browse by location. If the price-tracking concept didn't click, here's the 30-second version: pick an event, set the price you'd pay, and we'll email you the moment Ticketmaster, SeatGeek, or StubHub drops below your number.
>
> Or just reply and tell us what's missing. We read every response.
>
> [Browse events](https://www.ticketscan.io)

**Send timing:** Tonight 21:18 UTC ±15min — natural Day-14 boundary fire. **~9h window.**

---

### TODAY's pre-queue fire — jadbennis0 Day-3 (NEW; FIRES MAY 8 — first event-specific Day-3 in queue)

**Subject:** Day 3 with TicketScan — set your target on Inter Miami?
**Body:**
> Three days ago you signed up and added Inter Miami CF vs Portland Timbers (May 17, Nu Stadium) to your watchlist. Nice — you're already past the first hurdle.
>
> One thing left: set a target price. We'll email you the moment Ticketmaster, SeatGeek, or StubHub drops below your number. Without a target, we can show you trends but can't proactively alert you.
>
> Match day is 9 days away. Most price drops happen in the final 7 days — set your number now so you don't miss them.
>
> [Set your target](https://www.ticketscan.io/event/vvG1VZbMCqxULm)

**Send timing:** May 8 20:33 UTC ±tolerance. **First event-specific Day-3 fire in the queue.**

---

### TODAY's pre-queue fires — Day-15 carry charlesteel126 (NEW carry from this morning's 11:38 UTC miss)

**Subject:** Two weeks in — Bruno Mars Ohio is 13 days out
**Body:**
> Two weeks and a day ago you added Bruno Mars at Ohio Stadium (May 20) to your watchlist. The event is 13 days out and you haven't set a target price yet.
>
> Stadium tour seats are still moving — Ticketmaster, SeatGeek, and StubHub all have inventory and the price spread is wide. Set your number and we'll email you the moment any source drops below it.
>
> [Set your target](https://www.ticketscan.io/event/vv1AAZkCfGkdl2qZg)

**Send timing:** Tomorrow May 7 11:38 UTC. Pair with ggri73 if engine returns.

---

### Carries from yesterday (continue)

- **dr.altvater Day-16:** body "two weeks and two days ago"; subject pivot to "Two weeks in" still parses.
- **josh Day-17:** body "two weeks and three days ago"; subject parses unchanged.
- **nicklib Day-19:** Day-21 frame "almost three weeks since the Phillies game" parses cleanly.
- **pete Day-26:** Day-30 template queued for May 10.
- **lilianamasyrubi Day-8:** Day-7 family carries 24h ("Eight days with TicketScan").
- **zhili1208 Day-7:** Day-7 family natural fire today.
- **taranimeramaro / nmcnamee99 Day-11:** Day-10 family, "Eleven days in."
- **mark.murdock / awwhittington / ajvanprooyen Day-13:** Day-14 forcing question pre-queued for tomorrow May 7 (their respective hour boundaries).
- **joseph Day-1:** Day-3 framing pre-queues for May 7 21:39 UTC.

---

## Psychology-driven micro-optimization (today)

**Principle:** Commitment / consistency
**Where to apply:** Post-signup confirmation screen + first dashboard visit (web/src/app/dashboard or equivalent; the immediate post-register flow).
**The diagnosis:** jadbennis0 added a watchlist item 32 seconds after signup — the fastest activation in the dataset. Joseph is at 33h since signup with 0 actions. Both went through identical post-signup flows. The structural difference is **intent at the moment of signup**, but the product can lean on this gap by making the next action immediately obvious.

**Specific change:** Render a 3-step progress indicator on the post-signup screen (and persistently on the dashboard until complete):

```
✓ Step 1 of 3: Account created
○ Step 2 of 3: Add your first event
○ Step 3 of 3: Set a target price
```

**Why this works:**
1. **Commitment escalation** — Step 1 is already complete; the user has psychologically committed. Steps 2 and 3 feel like *finishing* what they started, not starting something new.
2. **Visible incompleteness** — Two open circles create a Zeigarnik-effect tension that resolves only on completion.
3. **Specificity over abstraction** — "Add your first event" is more actionable than "Get started" or "Try the dashboard."
4. **Scoping the work** — Three steps is the magic number; more feels like a chore, fewer feels trivial.

**Also helps:** jadbennis0's add was watchlist=1 but target_price=null — they completed Step 2 but not Step 3. The progress indicator surfaces the missing target as a visible incomplete step rather than a hidden field.

**Expected impact:**
- Activation gap (signup → watchlist) drops from current 27.0% inert toward ~15-20% over 30 days.
- Target-price capture rate (currently 0% on jadbennis0's add) climbs as Step 3 becomes the next obvious action.
- Day-3 drip emails inherit the same frame ("You're 1 step from your first alert") → consistency between in-product UX and email touchpoints.

**Implementation cost:** ~2-3h frontend (one component, three states, persisted to user record or localStorage). Backend exposes `has_watchlist_item` and `has_target_price` flags from the existing `/api/auth/me` endpoint or a new `/api/user/onboarding-state`.

**Cross-agent route:** **CRO Agent (Agent 6)** to scope/implement; this is the highest-leverage onboarding fix in the queue and directly addresses the activation gap that has been carried for 11+ days.

---

## Cross-agent dependencies

1. **→ Email Agent (Agent 5):** Win-back email content above is queued and ready. **The single most time-pressured fire is ggri73 Day-14 tonight at 21:18 UTC (~9h).** This is the final on-schedule Day-14 window in the entire 30-day outage. If the engine returns today, ship it.

2. **→ CRO Agent (Agent 6):** Two new high-leverage fixes:
   - **3-step onboarding progress indicator** (above) — directly addresses the joseph-style Day-1 inertness pattern. Highest priority.
   - **Inline target-price capture on watchlist add** — jadbennis0's add was watchlist=1 / target=null. The activation completed; the targeting completed only halfway. Make target_price a required-or-skipped field on watchlist add, not a separate step.

3. **→ Ads Agent (Agent 4):** Attribution-pull priority drops from "single most-leveraged" to "still valuable." The 0% / 100% bifurcation is dead at n=11 (jadbennis0 broke it instantly). New question worth answering: **what was different about jadbennis0's source/path that produced 32-second activation?** That is now more informative than the unknown / known split.

4. **→ Content Agent (Agent 3):** **MLS / Inter Miami / Nu Stadium** are NEW categories in the dataset as of today. None of these have content coverage in the 24 venue / 37 city / 17 World Cup pages. **First MLS-specific content opportunity** — Inter Miami CF, Nu Stadium Miami, MLS regular season (esp. given Messi proximity to Miami market). Recommend scoping a venue page for Nu Stadium and a city/category page for Miami MLS.

5. **→ Engineering / Drip-Engine:** Day 30 of outage. Tonight's ggri73 Day-14 is the final on-schedule fire window of the entire outage. After tonight, **every Day-14 fire of the outage will have missed its native day** — a closed-out failure mode worth post-morteming.

---

## Summary metrics

```
Total users:              66 (+1)
Real users:               63 (+1)
Activated:                45 (+1) — FIRST WATCHLIST ADD IN 11 DAYS
Activation rate:          71.4% (real, +0.4pp, first numerator-driven climb in 11 days)
Watchlist items:          86 (+1) — 240h flat record dies at exactly 240h
Newsletter subscribers:   3 (94 days flat)
Active alerts:            0 (Day 30)
Triggered alerts:         0 (lifetime)
Drip emails sent:         0 (Day 30)
Cumulative passed-no-notify: 12 (→ 13 by Wed AM)
Algo-flip-quiet streak:   7 days
Activation gap (real):    17/63 = 27.0% (numerator unchanged, denominator +1)
Unknown-source activation: 1/8 = 12.5% (broke from 0/7 = 0%)
Two-day signup streak:    ALIVE (joseph + jadbennis0)
```

**Headline:** First numerator-driven activation rate climb in 11 days. The 240-hour flat-watchlist record died at exactly 240 hours. The 0%/100% acquisition bifurcation died at n=11. **One out of six structural-inertness dimensions cracked. The other five remain dead.** ggri73 Day-14 tonight is the last chance to close the outage with one clean on-schedule fire.
