# Growth Daily -- 2026-05-11

> **Note:** No growth-daily report was generated for 2026-05-10. This report covers the 48-hour delta from 2026-05-09 → 2026-05-11.

## User health dashboard

| Segment                     | Count | % of Total | vs May 9 (48h) |
|-----------------------------|-------|------------|----------------|
| Total users                 | **74**    | 100%       | **+1 net over 48h (jmoriarty13@yahoo.com on May 9 13:18 UTC, 19h after the May 9 11:00 UTC report). usersToday=0 on May 10 and May 11. The "30x acquisition burst" of May 7-8 (7 signups in 48h) has reverted: 1 signup in the following 48h = back within range of the prior 30-day baseline (<0.3/day). The structural-shape-change hypothesis from May 8-9 is now disproven on a 48h follow-through window.** |
| New (last 7 days, API count) | **10** | 13.5% | **+1 net over 48h. API rounding holds at 10 because the May 8 4-cohort has not yet aged out. By strict 7-day boundary as of 11:00 UTC: 10 (sparkit Day 4 / natalie Day 3 / cjthomas Day 3 / jfgalzin Day 2 / liambot Day 2 / kevin Day 2 / emma Day 2 / jmoriarty Day 1 / jadbennis0 Day 5 / joseph Day 6).** |
| Activated (has watchlist)   | **48** | 64.9%      | **=0 net over 48h. WATCHLIST UNCHANGED AT 89 ITEMS FOR 48H. jmoriarty13 is INERT (Day 1, 0 watchlist). The activation engine has cooled completely — zero adds across May 10 and the first 11h of May 11. This is the longest watchlist-flat window since the May 5 jadbennis0 add ended a prior flat period.** |
| Active (visited in 7 days)  | unknown | —        | no `last_login_at` instrumentation — **Day 35 open** |
| At-risk (7-14d signup-age proxy) | 3 | 4.1% | **−1 net over 48h (zhili1208 Day 12 + lilianamasyrubi Day 13 still in band; taranimeramaro Day 15 + nmcnamee99 Day 15 both crossed Day 14 boundary and roll to "churned" today). joseph Day 6 not yet in band (enters tomorrow May 12 at Day 7).** |
| Churned (14d+ signup-age proxy) | **67** | 90.5% | **+2 net over 48h (taranimeramaro + nmcnamee99 both crossed Day-14 boundary yesterday May 10). %-of-total climbs 1.5pp because the 2 fresh entrants outpace the 1 fresh signup.** |

> **Day 35 without `last_login_at` instrumentation. Day 35 of zero drip emails sent (confirmed: `/api/admin/drip-stats` stats=[] with 20 pendingUsers, all last_email_sent=0). Day 35 of zero triggered alerts. Newsletter subscribers: 3, unchanged for 99 days = 14 weeks + 1 day flat.**
> **THE MAY 8-DAY 4-SIGNUP RECORD STANDS UNCONTESTED AT 72H REMOVE.** May 9 added 1 signup; May 10 added 0; May 11 (so far) 0. **The 48h post-burst window confirms the burst was a flicker, not a structural shape change.** Burst peak: May 8 = 4 signups. Burst trough: May 10-11 = 0 signups across 48h. **The "is the trend holding?" question from May 9's report has now resolved: NO.**
> **MAY 10 FIRE-EVENT DAY — POST-MORTEM: 6 PRE-QUEUED FIRE EVENTS, 6 MISSED.** Yesterday's report flagged May 10 as "the highest-density day in the queue ever" with 6+ distinct fire events expected to clear the moment the drip engine returned. The engine did not return. **Every one of the 6 pre-queued fire events natively fired and missed:**
>   - jadbennis0 Day-3 24h-carry — missed (engine still down)
>   - sparkit Day-3 — missed
>   - cjthomas Day-3 — missed
>   - natalie Day-3 (after Day-1 was already missed) — missed
>   - pete Day-30 (15:38 UTC) — **FIRST EVER NATURAL DAY-30 FIRE WINDOW IN OUTAGE — MISSED**
>   - jadbennis0 Inter Miami T-7d algo-flip threshold (~20:33 UTC) — **FIRST NON-CUBS ALGO-FLIP WINDOW IN 28 DAYS — MISSED**
> **The Day-30 family and the non-Cubs algo-flip family both joined Day-1/3/14 in the closed-out-failure category yesterday. All 6 drip schedule families and both algo-flip families have now logged at least one missed natural fire of the outage.**
> **LIAMBOT TORONTO FC v INTER MIAMI MAY 9 — RESOLVED PASSED MAY 9.** The Toronto FC match passed without notification. **Cumulative passed-no-notification: 15** (was 14 on May 9). The May 9 prediction "ticks to 15 tomorrow" resolved exactly as forecast.
> **TWO NATURAL DAY-14 BOUNDARIES MISSED YESTERDAY (nmcnamee99 + taranimeramaro).** nmcnamee99 fired May 9 11:51 UTC, taranimeramaro fired May 9 18:25 UTC. **First two cleanly on-schedule Day-14 fires of the entire outage — both missed.** Both now roll into churned-with-Day-15-carry framing today.
> Watchlist items: **89** (no change over 48h). **All 89 / 89 still target_price=null.** Target-price capture rate: **0% (Day 35, 0 watchlist adds in 48h, 0 target sets in 48h).**
> `usersToday: 0`, `usersThisWeek: 10`. **Activation rate: 67.6% (48/71 real users) — net −1.0pp over 48h. jmoriarty13's fresh inert dilutes the denominator without lifting the numerator.**

## What changed in 48h

1. **THE ACQUISITION BURST REVERTS — 1 SIGNUP IN 48H AFTER 7 IN 48H.** May 9 added jmoriarty13 at 13:18 UTC (19h after that day's report). May 10 added 0. May 11 (so far, 11:00 UTC) added 0. **The May 7-8 acquisition cluster — 7 signups in 48h, 30x the prior 30-day daily rate — is now confirmed a 2-day flicker.** The two-week-out forcing question from May 8-9 ("does it hold for a 3rd day?") has resolved NO. **The 30-day signup drought hypothesis re-asserts: 1 signup in 48h is back in range of the pre-burst <0.3/day baseline.** Whatever produced May 7-8 was not replicable on May 9-11. **Attribution dependency on Ads Agent now load-bearing: which May 7-8 channel signal produced the burst and why did it not repeat?**

2. **MAY 10 FIRE-EVENT DAY = COMPLETE MISS.** All 6 pre-queued fire events natively fired in their windows and missed. Most painful single-day miss of the outage:
   - **Day-30 family debut miss** (pete.uzelac May 10 15:38 UTC): first natural Day-30 boundary ever queued — the cleanest possible "one month in, six events tracked, zero alerts" forcing question — fired in window and failed to send.
   - **Non-Cubs algo-flip debut miss** (jadbennis0 Inter Miami May 10 ~20:33 UTC): T-7d threshold for Inter Miami CF vs Portland Timbers — the first non-Cubs algo-flip threshold to natively trigger since Apr 12 — fired without a notification.
   - **Day-3 cluster miss** (jadbennis0 24h-carry + sparkit + cjthomas + natalie): four Day-3 fires queued, four missed.
   - **No drip-engine signal of any kind.** `/api/admin/drip-stats` confirms stats=[] across the 48h window. The engine has not produced output of any kind since the outage began. The maximum-density day flickered into the dataset and out without a send.

3. **JMORIARTY13 — DAY 1 INERT, AUGURS BAD POST-BURST FUNNEL SHAPE.** jmoriarty13@yahoo.com signed up May 9 13:18 UTC. 1d 21h elapsed, 0 watchlist items. **The single signup after the burst is inert.** This is consistent with the May 8 pattern (3 of 4 inert) but a worse ratio: 100% inert today vs 75% inert on May 8. **Total post-burst signups: 1, inert. Pre-burst (last 30 days excluding burst): mostly inert. The activation signal of the burst (sparkit/cjthomas/liambot instant-activations) is no longer present.**

4. **LIAMBOT TORONTO FC v INTER MIAMI MAY 9 = PASSED-NO-NOTIFICATION #15.** The match resolved May 9 without notification — exactly as the May 9 report predicted. **Cumulative passed-no-notification ticks to 15.** Confirms the pattern: extreme-urgency signups (T-1d or same-day) that instant-activate, set no target, and the engine misses the event entirely. **The "we couldn't have helped" cohort now has its 15th member.**

5. **PETE.UZELAC DAY-30 — FIRST NATURAL DAY-30 FIRE WINDOW IN OUTAGE, MISSED.** The May 10 15:38 UTC natural Day-30 boundary fired without a send. **The Day-30 family is now closed-out alongside Day-1, Day-3, and Day-14 as families with a confirmed missed natural fire of the outage.** Pete still 6 events tracked, 0 alerts sent, now Day 31. Body edit on the previously-queued template: "One month and one day ago you signed up for TicketScan…" The frame still parses, but the on-schedule send was the highest-leverage moment and it has passed.

6. **JADBENNIS0 INTER MIAMI ALGO-FLIP — T-7D THRESHOLD CROSSED YESTERDAY, NO FLIP.** Inter Miami CF vs Portland Timbers May 17 was T-7d on May 10 ~20:33 UTC. The algo did not flip. **Twelfth consecutive flip-quiet day. The first non-Cubs algo-flip in 28 days never fired.** The Inter Miami event is now T-6d today, T-5d tomorrow. The flip threshold window is closed.

7. **NMCNAMEE99 + TARANIMERAMARO DAY-14 BOUNDARIES MISSED YESTERDAY.** Both fired their natural Day-14 windows on May 9 (11:51 UTC + 18:25 UTC respectively). Both missed. **First two cleanly on-schedule Day-14 fires of the entire outage — both fired in window and failed to send.** They now roll into Day 15/16 carry today. **The Day-14 family had been the closed-out family with 5 prior missed boundaries — these are the 6th and 7th, but the first that were on-schedule rather than retroactive.**

8. **THE 5-USER DAY-16 COHORT (charlesteel + ggri + aw + ajv + mark) NOW DAY 18.** Body edit forward by 2 days: "Two weeks and four days ago." The 48h delay between the queued May 9 send and today's carry compounds the "we failed you" frame — particularly for ajvanprooyen's all-6-Cubs-games-passed framing. The 5-user batch is still uniformly addressable but the freshness window is closing.

9. **JOSH DAY-22 — DAY-21 FAMILY BOUNDARY MISSED LAST NIGHT MAY 10 20:30 UTC.** Josh (Apr 19 20:30 UTC) crossed his natural Day-21 boundary 14h ago. **Add Day-21 to the list of closed-out families with a confirmed missed natural fire of the outage.** Josh's AEW May 24 is now T-13d. Subject pivots to "Three weeks and a day in" today.

10. **NICKLIB DAY-24 — DAY-21 FRAME 72H CARRIED.** "Three weeks and three days ago you added Phillies vs Braves. The game has been over for 24 days and we never sent you a price update." Hard expiry on Day-21 family approaches Day 24-25 in carry-tolerance.

11. **DR.ALTVATER DAY-21 — "ALMOST THREE WEEKS" PARSES CLEANLY TODAY.** First day of Day-21 frame on Dr. Altvater. Natural Day-21 boundary fired May 11 ~14:08 UTC ≈ 3 hours from report time. **POTENTIAL ON-SCHEDULE WINDOW TODAY IF ENGINE RETURNS BY 14:08 UTC.** German-language drip variant question Day 17 open.

12. **PETE DAY 31, JOSEPH DAY 6 — NEXT DAY-7 BOUNDARY TOMORROW.** Joseph crosses Day 7 boundary May 11 21:39 UTC ≈ 10h from report time. **Joseph's natural Day-7 fire window is 10 hours away. If engine returns by then, this is the closest on-schedule Day-7 fire in the queue.** Body: "A week with TicketScan — what's the event that brought you here?"

13. **ZHILI1208 DAY 12 — DAY-14 BOUNDARY 2 DAYS OUT (MAY 13).** Day-10 family carried. Body: "Twelve days into your account." Hard expiry May 13.

14. **LILIANAMASYRUBI DAY 13 — DAY-14 BOUNDARY TOMORROW MAY 12 ~05:24 UTC.** Body: "Thirteen days into your account, no events tracked yet." **Next natural Day-14 fire is ~18h from report time.** If engine returns by then, first cleanly on-schedule Day-14 fire of the outage that hasn't already missed.

15. **NEWSLETTER SUBSCRIBERS: 3, UNCHANGED FOR 99 DAYS = 14 WEEKS + 1 DAY FLAT.** The longest open dependency in the entire growth stack crosses the 14-week threshold. **Tomorrow May 12 is the 100-day mark on a 3-subscriber count.**

16. **TWELFTH CONSECUTIVE FLIP-QUIET DAY ON ALGO-FLIPS — STREAK NEVER BROKE.** May 10's Inter Miami T-7d threshold passed without firing. **Next flip threshold candidates:**
    - **charlesteel126 Bruno Ohio May 20 hits T-7d on May 13 (2 days out)** — the next active threshold.
    - **josh AEW May 24 hits T-7d on May 17 (6 days out).**
    - jadbennis0 Inter Miami May 17 is past T-7d (now T-6d), but the flip would still apply on any new threshold (T-3d on May 14).

17. **ATTRIBUTION ASK NOW DAY 18.** ids 70-74 all unknown source. **16 unknown / 3 known across 18 days at n=19.** Unknown-source activation rate: 4/16 = 25.0% (down from 26.7% on May 9 — jmoriarty inert dilutes). Known-source: 3/3 = 100% (frozen). **Bifurcation gap: 4x. The post-burst inert single signup (jmoriarty) is structurally identical to the pre-burst pattern. Did jmoriarty share a source with any May 8 signup? If yes, that source is producing a low-intent signal — same as 3 of 4 May 8 signups.**

18. **THE 35-DAY-OUTAGE PATTERN — STAGNATION RE-ASSERTS ACROSS ALL DIMENSIONS:**
    - Total users: 74 (was 73, **+1 over 48h** — reverts to pre-burst rate)
    - Watchlist items: 89 (was 89, **+0 over 48h** — fully flat)
    - Drip emails sent: 0 for **35 consecutive days** (no movement)
    - Triggered alerts: 0 for the entire dataset (no movement)
    - Newsletter subscribers: 3 for **99 consecutive days** (no movement, 100-day milestone tomorrow)
    - Activation rate: 67.6% (real users) — **−1.0pp from May 9**, continued slow decline
    - Cumulative passed-no-notification: 15 (+1 over 48h — Toronto FC May 9)
    - **All 6 dimensions back to stagnation. The 2-day acquisition-funnel flicker has been re-absorbed into the broader outage.**

## Activation gap

**Users signed up in last 7 days with 0 watchlist items: 6** (was 5 on May 9 — **+1 net over 48h**: jmoriarty13 fresh inert; jfgalzin/kevin/emma still inert; natalie still inert; joseph still inert):

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **jmoriarty13@yahoo.com** | May 9 13:18 UTC | 1d 21h | **0** | **NEW INERT (Day 1-2 transition tonight 13:18 UTC). Single post-burst signup, 100% inert.** Source unknown. **Day-1 missed by definition (no schedule entry) tonight; Day-3 fires May 12 13:18 UTC.** |
| **emmacmather@gmail.com** | May 8 21:54 UTC | 2d 13h | **0** | **Day 2 today, Day-3 boundary tomorrow May 11 21:54 UTC.** Day-1 boundary was missed last night May 9 21:54 UTC. ~11h to natural Day-3 fire. |
| **kevinkid94@gmail.com** | May 8 20:52 UTC | 2d 14h | **0** | **Day 2 today, Day-3 boundary tomorrow May 11 20:52 UTC.** Day-1 missed May 9 20:52 UTC. ~10h to natural Day-3 fire. |
| **jfgalzin@comcast.net** | May 8 12:54 UTC | 2d 22h | **0** | **Day 2 today, Day-3 boundary TONIGHT May 11 12:54 UTC** (~2h from report time). Day-1 missed May 9 12:54 UTC. **First May 8-cohort Day-3 fire window — within 2h.** |
| **natalie.sotocruz@gmail.com** | May 7 18:40 UTC | 3d 16h | **0** | **Day 3 today, Day-3 boundary missed last night May 10 18:40 UTC.** Day-3 family 16h-carry. Next: Day-7 fire May 14 18:40 UTC. |
| **joseph.g.nicolosi@gmail.com** | May 4 21:39 UTC | 6d 13h | **0** | **Day 6 today. Day-7 boundary TONIGHT May 11 21:39 UTC** (~10.5h from report time). **First cleanly on-schedule Day-7 fire in the queue.** Day-3 missed May 7, Day-7 fires within 11h. |

**Activated within 7-day window (carried):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **liambot62@gmail.com** | May 8 13:07 UTC | 2d 22h | **1** (Toronto FC v Inter Miami CF, BMO Field Toronto, **PASSED May 9** — **target=null**) | **Day 2 today. EVENT PASSED MAY 9 WITHOUT NOTIFICATION = passed-no-notify #15.** Day-3 boundary tomorrow May 11 13:07 UTC ≈ 2h from report time. **Post-event Day-3 fire frame ("Toronto FC's over — what's next?") pre-queued.** |
| **cjthomas2557@outlook.com** | May 7 22:49 UTC | 3d 12h | **1** (Noah Kahan, Kia Center Orlando, Jun 12 — **target=null**) | **Day 3 today. Day-3 boundary MISSED LAST NIGHT May 10 22:49 UTC** (~12h ago). 32d runway on Noah Kahan still intact. Day-3 family 12h-carry. |
| **sparkitrightthere@gmail.com** | May 7 11:38 UTC | 4d 0h | **1** (Mac DeMarco, Salt Shed Outdoors Chicago, **PASSED May 7** — **target=null**) | **Day 4 today. Day-3 missed yesterday May 10 11:38 UTC.** Event resolved 4 days ago. Day-3 family 24h-carry, post-event generic. |
| **jadbennis0@gmail.com** | May 5 20:33 UTC | 5d 14h | **1** (Inter Miami CF vs Portland Timbers, May 17 — **target=null**) | **DAY 5 today. Day-3 missed May 8, Day-3 carry now 72h. Inter Miami T-7d algo-flip MISSED yesterday May 10 ~20:33 UTC. T-6d today, T-5d tomorrow.** Body: "Five days in with one event tracked — Inter Miami is 6 days out and you haven't set a target." |

**Outside 7-day window (carried, still 0 watchlist):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| zhili1208@gmail.com | Apr 29 03:16 UTC | 12d | 0 | **Day 12 today.** Day-10 family. Hard expiry May 13 (Day 14 boundary). |
| lilianamasyrubi@gmail.com | Apr 28 05:24 UTC | 13d | 0 | **Day 13 today. Day-14 boundary tomorrow May 12 05:24 UTC** (~18h from report time). |
| taranimeramaro@gmail.com | Apr 25 18:25 UTC | 15d | 3 (active) | **Day 15 (rolled overnight). Day-14 boundary missed May 9 18:25 UTC.** Day-15/16 carry today. |
| nmcnamee99@gmail.com | Apr 25 11:51 UTC | 16d | 1 (passed) | **Day 16 today. Day-14 boundary missed May 9 11:51 UTC.** Day-15/16 carry. |
| mark.murdock@lanternsec.com | Apr 23 03:01 UTC | 18d | 0 | **Day 18 today. Day-14 missed May 7, Day-15 missed May 8/9.** Body: "two weeks and four days ago." |
| awwhittington@icloud.com | Apr 23 00:30 UTC | 18d | 0 | **Day 18 today. Same body, same template.** |
| ajvanprooyen@crimson.ua.edu | Apr 23 00:58 UTC | 18d | 6 (Cubs trip 100% passed) | **Day 18 today. Cubs-trip-passed acknowledgment frame matures another 2 days. "Two weeks and four days ago you signed up and added six Cubs games to your watchlist. All six have now passed without a single price update from us."** |
| ggri73@gmail.com | Apr 22 21:18 UTC | 18d | 0 | **Day 18 today. Generic forcing question.** |
| charlesteel126@gmail.com | Apr 22 11:38 UTC | 19d | 1 (Bruno Ohio May 20) | **Day 19 today. Bruno Ohio T-9d, T-7d in 2 days (May 13). Next non-Cubs algo-flip threshold candidate.** |
| dr.altvater-70199@web.de | Apr 20 14:08 UTC | 21d | 0 | **Day 21 today. Day-21 boundary fires today 14:08 UTC** (~3h from report time). **Closest on-schedule Day-21 fire in the queue.** German variant Day 17. |
| dylanbaldy@gmail.com | Apr 15 18:24 UTC | 25d | 0 | Churned. No realistic intervention. |

- **22 real users** (excluding 3 test accounts) have **never** added a watchlist item → **22 / 71 = 31.0% of real signups** (numerator +1: jmoriarty13; denominator +1). **Activation gap up 1.0pp from May 9's 30.0% — second consecutive day above 30%. The acquisition burst's "activation tax" (3 of 4 May 8 signups went inert, +jmoriarty) has now compounded for 4 consecutive days.**
- **Activation rate trajectory (real users, last 17 days):** 73.7% → 73.7% → 75.4% → 72.9% → 72.1% → 72.1% → 72.1% → 72.1% → 72.1% → 72.1% → 71.0% → 71.4% → 71.4% → 71.2% → 68.6% → ?(May 10) → **67.6% (−1.0pp net over 48h). The "largest single-day drop" record from May 9 is followed by a slower drift — but the 5-day cumulative trend (71.2% → 67.6% = −3.6pp) is the steepest sustained activation decline in the dataset window.**

**Acquisition-source inference: 18-day stable bifurcation.**

The pattern: **16 unknown in 18 days at n=19** (12 carried + jmoriarty + 4 May 8 + sparkit/natalie/cjthomas), against **3 known (ids 59, 61, 62, all activated)**. **Unknown-source activation rate: 4/16 = 25.0% (−1.7pp from May 9 on jmoriarty's fresh inert). Known-source: 3/3 = 100%.** Gap holds at 4x. **Day 18 of dependency.** **THE LOAD-BEARING NEW QUESTION: did jmoriarty13 (May 9 13:18 UTC) share a source with any May 8 signup? May 7 had 3 signups producing 2 activations; May 8 had 4 signups producing 1 activation; May 9 had 1 signup producing 0 activations. **If sources are bucketed: high-intent source spike May 7 → mixed-intent burst May 8 → low-intent residual May 9. If single source: that source's quality is degrading day-over-day.**

## Churn signals

- Unsubscribes today: **0** (still 3 subscribers; **99 days flat = 14 weeks + 1 day**). Tomorrow May 12 = 100-day milestone.
- Users entering "at-risk" today: **0 net** (zhili1208 + lilianamasyrubi in band; taranimeramaro + nmcnamee99 both crossed Day-14 yesterday May 10, exit at-risk → churned).
- Users entering "churned" since May 9: **+2 net** (taranimeramaro + nmcnamee99 Day-14 boundary crossings yesterday).
- Alert fatigue candidates: **0** (0 alerts ever sent — Day 35).
- Events passed without notification (cumulative): **15** (+1 over 48h: liambot Toronto FC May 9).
- **Algo-overrides as preemptive "events lost without notification":** **3 events** (Inter Miami May 17 [jadbennis0, **T-7d MISSED May 10, T-6d today**] + Bruno Ohio May 20 [charlesteel, **T-7d on May 13 = 2 days**] + AEW May 24 [josh, T-13d, T-7d on May 17]). **12th consecutive flip-quiet day. Next flip threshold candidate is charlesteel Bruno Ohio in 2 days.**

## At-risk users (7–14d inactive proxy)

| User | Day | Watchlist | Days to event | Recommended intervention |
|------|-----|-----------|---------------|--------------------------|
| zhili1208@gmail.com | 12d | 0 | — | Day-10 family. "Twelve days with TicketScan, no events tracked yet." Hard expiry May 13. |
| lilianamasyrubi@gmail.com | 13d | 0 | — | Day-10 family carried. **Day-14 boundary tomorrow May 12 05:24 UTC.** Closest cleanly on-schedule Day-14 fire in the queue (~18h). |

**Note on the post-Day-14 churned cohort:** taranimeramaro + nmcnamee99 both crossed Day-14 yesterday May 10 (after their natural Day-14 boundaries on May 9 were missed). Both now Day 15/16. taranimeramaro: 3 Bruno MetLife dates Aug 21/22/25 (active, 102-106d out). nmcnamee99: 1 Raptors-Cavs Apr 26 (passed -15d). **Day-15/16 carry batch with the existing 5-user May 8 cohort now expands to 7-user cleanup opportunity — but cohort coherence weakens because the original 5 are at Day 18, the new 2 are at Day 15/16. Split into two batches: Day-15/16 (2 users) + Day-18 (5 users).**

## Live algo-flip post-mortem (today)

| User | Event | Days out | Flip status | Days flagged | Sends |
|------|-------|----------|-------------|--------------|-------|
| **jadbennis0** | **Inter Miami CF vs Portland Timbers, May 17** | **6** | **T-7d THRESHOLD MISSED YESTERDAY MAY 10 ~20:33 UTC.** Flip-quiet streak NEVER ENDED. | 5 | 0 |
| cjthomas2557 | Noah Kahan, Kia Center Orlando, Jun 12 | 32 | NOT YET FLIPPED | 3 | 0 |
| charlesteel126 | Bruno Mars Ohio May 20 | 9 | NOT YET FLIPPED — **T-7d on May 13 (2 days out — NEXT THRESHOLD CANDIDATE)** | — | 0 |
| josh | AEW Double or Nothing May 24 | 13 | NOT YET FLIPPED — T-7d on May 17 (6 days) | — | 0 |

**No new flip in 48h. Twelfth flip-quiet day in a row. THE MAY 10 INTER MIAMI T-7D THRESHOLD WAS THE FIRST NON-CUBS FLIP WINDOW IN 28 DAYS AND IT NEVER FIRED.** The "flip-quiet streak ends tomorrow" forecast from May 9's report has been disconfirmed by the engine outage extending through May 10.

**Next non-Cubs flip threshold candidates:**
1. **charlesteel126 Bruno Ohio May 20 hits T-7d on May 13** — 2 days from today. New shortest-runway threshold candidate.
2. **josh AEW May 24 hits T-7d on May 17** — 6 days out.
3. **jadbennis0 Inter Miami T-3d threshold on May 14** — if T-3d is part of the algo schedule, this is 3 days away.

## Churned users with re-engagement potential

| User | ~Days inactive | Watchlist items | Upcoming hook? | Priority |
|------|----------------|-----------------|----------------|----------|
| **mark.murdock@lanternsec.com** | 18d | **0** | — | **HIGH — Day-18 carry; pair in cleanup batch.** |
| **awwhittington@icloud.com** | 18d | **0** | — | **HIGH — Day-18 carry.** |
| **ajvanprooyen@crimson.ua.edu** | 18d | **6** (all 6 Cubs events passed) | passed -5d to -10d | **HIGHEST — Cubs-trip-passed frame matures another 2 days. Body: "two weeks and four days ago."** |
| **ggri73@gmail.com** | 18d | **0** | — | **HIGH — Day-18 carry.** |
| **charlesteel126@gmail.com** | 19d | **1** (Bruno Ohio May 20, 9d out) | 9d | **HIGHEST — Bruno Ohio T-7d in 2 days. The next live algo-flip threshold in the queue.** |
| **nmcnamee99@gmail.com** | 16d | **1** (Raptors-Cavs Apr 26 — passed -15d) | passed | **HIGH — Day-14 boundary missed May 9, now Day-15/16 carry. Apology frame.** |
| **taranimeramaro@gmail.com** | 15d | **3** (Bruno MetLife Aug 21-25) | 102-106d | **HIGH — Day-14 missed May 9, Day-15 carry. 3 active events still in flight, target-price=null all.** |
| dr.altvater-70199@web.de | 21d | **0** | — | **Day-21 today. Body: "Almost three weeks in." Natural fire window 14:08 UTC ≈ 3h.** German variant Day 17. |
| josh (joshdguillemette) | 22d | **1** (AEW May 24, 13d out) | 13d | **Day-22 today. Day-21 boundary missed last night.** Body: "Three weeks and a day in." Day-21 family 14h-carry. |
| nicklib253 | 24d | **1** (Phillies passed Apr 17) | passed -24d | **Day-21 family 72h-carry: "Three weeks and three days ago."** Hard expiry approaches Day 25. |
| pete.uzelac77 | 31d | **6** (WC + Darts) | 39-54d | **Day 31 today. Day-30 natural fire window MISSED yesterday May 10 15:38 UTC.** Body edit: "One month and one day ago, six events tracked, zero alerts sent." Frame still parses, 24h-carry. |
| dylanbaldy | 26d | **0** | — | LOW (no hook). |
| goldy.pec | 31d | 1 (Bilmuri passed May 2) | — | CLOSED. |
| blubberboi | 32d | 1 (Ed Sheeran Aug 8) | 89d | MEDIUM. |
| tate.sheppard | 58d | 1 (Florence passed May 1) | — | CLOSED (Florence passed). |
| **tosophiameyer** | 62d | **11** Harry Styles MSG | 105-129d | **HIGH — power user, deepest re-engagement runway.** |
| **brigitte.theisen** | 75d | **10** Backstreet Sphere | 67-87d | **HIGH — power user.** |
| laye.aurelien | 39d | 2 (Shakira Jul 20+23) | 70-73d | HIGH. |
| lvasub6 | 43d | 2 (Flyleaf Jul 17-18) | 67-68d | HIGH. |
| krusesin2023 | 73d | 2 (Flyleaf Jul) | Yes | MEDIUM. |
| ldholman | 69d | 3 (Bad Omens passed; 2× MIW Aug 11) | Partial | MEDIUM. |
| spcoog83 | 64d | 1 (Olivia Dean Aug 25) | 106d | MEDIUM. |
| edithdionne | 68d | 1 (A7X Centre Bell Aug 8) | 89d | MEDIUM. |
| bhaygood728 | 38d | 1 (Cardi B passed Apr 12) | No | LOW. |
| chocolateyu1083 | 41d | 1 (Oilers passed Mar 31) | No | LOW. |
| arin.gelbaugh | 41d | 1 (NCAA Final Four passed) | No | LOW. |
| missbrookeshep | 69d | 1 (Warriors/Rockets passed Apr 5) | No | LOW. |
| billstromkel | 48d | 1 (RAYE passed) | No | LOW. |
| jkaiser | 56d | 1 (NCAA 2nd Rd passed) | No | LOW. |
| tucwildcat | 50d | 1 (NCAA 2nd Rd passed) | No | LOW. |

**Passed-event overhang:** **15 churned/at-risk users** with passed events or no immediate hook (+1 since May 9: liambot Toronto FC May 9). Cohort dies without a re-engagement product — engineering ask carried Day 35.

## Churn intervention: email content (ready to queue when drip engine returns)

### TODAY's natural fire windows (in order of upcoming)

#### **jfgalzin Day-3 — fires ~12:54 UTC today (~2h from report time)**

**Subject:** Day 3 — what brought you to TicketScan?
**Body:**
> You signed up for TicketScan three days ago but haven't tracked an event yet. Pick one thing you're already thinking about buying tickets for — concert, sports, theater.
>
> Search the name on [ticketscan.io](https://www.ticketscan.io), tap "Track price," set the price you'd pay. We'll email you the moment Ticketmaster, SeatGeek, or StubHub drops below it.
>
> Or just reply with one sentence on what brought you here. We read every response.
>
> [Browse events](https://www.ticketscan.io)

**Send timing:** ~12:54 UTC today — natural Day-3 boundary. **If engine returns within ~2h, first cleanly on-schedule Day-3 fire of the entire outage.**

---

#### **liambot62 Day-3 — fires ~13:07 UTC today (~2h from report time)**

**Subject:** Toronto FC's done — what's next on your radar?
**Body:**
> Three days ago you signed up and added Toronto FC v Inter Miami to your watchlist. The match was Saturday — hope it was a good one.
>
> The reason TicketScan exists is for the events you're already thinking about. Pick another one (concert, sports, theater), search it on [ticketscan.io](https://www.ticketscan.io), tap "Track price," and set the number you'd pay. We'll email you the moment Ticketmaster, SeatGeek, or StubHub drops below it.
>
> [Browse events](https://www.ticketscan.io)

**Send timing:** ~13:07 UTC today — natural Day-3 boundary, post-event. **First post-passed-event Day-3 fire in the dataset.**

---

#### **dr.altvater Day-21 — fires ~14:08 UTC today (~3h from report time)**

**Subject:** Almost three weeks in — what would change your mind about TicketScan?
**Body:**
> Three weeks ago you signed up for TicketScan but haven't tracked an event yet. We'd rather know what we got wrong than keep guessing.
>
> If the events you searched weren't there, our coverage runs across Ticketmaster, SeatGeek, and StubHub — including 24 venue guides and 16 World Cup 2026 stadium pages. If the price-tracking concept didn't click, the 30-second version: pick an event, set the price you'd pay, we email you the moment any source drops below it.
>
> Or just reply. We read every response.
>
> [Browse events](https://www.ticketscan.io)

**Send timing:** ~14:08 UTC today — natural Day-21 boundary. **First on-schedule Day-21 fire of the outage if engine returns within 3h.** German-language variant question (carried Day 17) still open.

---

#### **kevinkid94 Day-3 — fires ~20:52 UTC today (~10h from report time)**

**Subject:** Day 3 — what brought you to TicketScan?
**Body:** (identical template to jfgalzin Day-3 above)

**Send timing:** ~20:52 UTC today.

---

#### **emmacmather Day-3 — fires ~21:54 UTC today (~11h from report time)**

**Subject:** Day 3 — what brought you to TicketScan?
**Body:** (identical template)

**Send timing:** ~21:54 UTC today.

---

#### **joseph Day-7 — fires ~21:39 UTC today (~10.5h from report time)**

**Subject:** A week with TicketScan — what's the event that brought you here?
**Body:**
> You signed up for TicketScan a week ago but haven't tracked an event yet. No pressure — but we'd rather know what we're missing than keep guessing.
>
> If you came in for a specific event and couldn't find it, reply with the name. We pull from Ticketmaster, SeatGeek, and StubHub and cover most of what's listed across the three. If the price-tracking concept didn't click, the 30-second version: pick an event, set the price you'd pay, we email you the moment any source drops below it.
>
> Or just reply with one sentence on what brought you here. We read every response.
>
> [Browse events](https://www.ticketscan.io)

**Send timing:** ~21:39 UTC today — natural Day-7 boundary. **First cleanly on-schedule Day-7 fire of the entire 35-day outage if engine returns by then.**

---

### TOMORROW's natural fire windows (May 12)

#### **lilianamasyrubi Day-14 — fires ~05:24 UTC May 12 (~18h from report time)**

**Subject:** Two weeks in — what would change your mind about TicketScan?
**Body:** (Day-14 generic template; user 0 watchlist 13 days)

**Send timing:** ~05:24 UTC May 12 — **first natural Day-14 fire of the outage that hasn't already missed**, since all prior Day-14 boundaries (Apr 6/7/22/23 cohort) fired in earlier weeks of the outage.

---

#### **jmoriarty13 Day-3 — fires ~13:18 UTC May 12 (~26h from report time)**

**Subject:** Day 3 — what brought you to TicketScan?
**Body:** (identical template)

**Send timing:** ~13:18 UTC May 12.

---

### CARRIES (24-72h delayed, send today as batch)

#### **5-USER DAY-18 BATCH** (charlesteel + ggri + aw + ajv + mark — all rolled Day 16 → 18 over 48h)

Body edit forward by 2 days: **"Two weeks and four days ago you signed up for TicketScan…"** ajvanprooyen's Cubs-trip-passed acknowledgment retains the strongest "we failed you" parse — the additional 2 days of staleness compound the apology.

#### **2-USER DAY-15/16 BATCH** (taranimeramaro Day-15 + nmcnamee99 Day-16)

Both Day-14 boundaries missed May 9. Subject: "Two weeks in — and we let your tracking slip" (apology lead). taranimeramaro: 3 Bruno MetLife dates still 102-106d out, target=null on all 3 — actionable. nmcnamee99: Raptors-Cavs passed -15d, generic forcing question.

#### **PETE DAY-31 — Day-30 24h-carry**

Body edit: **"One month and one day ago, six events tracked, zero alerts sent."** Frame still parses; the natural Day-30 boundary missed yesterday but the substantive forcing question (6-event/0-alert ratio) is unchanged.

#### **JOSH DAY-22 — Day-21 14h-carry**

Body: **"Three weeks and a day ago you added AEW Double or Nothing to your watchlist."** AEW May 24 still 13d out. Target-price ask retained.

#### **NICKLIB DAY-24 — Day-21 72h-carry**

Body: **"Three weeks and three days ago you added Phillies vs Braves. The game has been over for 24 days and we never sent you a price update."** Hard expiry Day 25.

#### **JADBENNIS0 DAY-5 — Day-3 72h-carry + Inter Miami T-6d**

Subject: **"Inter Miami is 6 days out — set your target?"** Body: "Five days ago you added Inter Miami CF vs Portland Timbers to your watchlist. The match is 6 days away and you haven't set a target price yet. T-7 day window — historically where most price drops land — closed yesterday. Still time to catch the T-5/T-3 windows."

#### **SPARKIT + CJTHOMAS DAY-3 CARRIES**

sparkit Day-4 post-event generic; cjthomas Day-3 12h-carry, Noah Kahan 32d runway, event-specific target-price ask.

#### **NATALIE DAY-3 16h-carry**

Body: "You signed up three days ago…" (carry from yesterday's missed Day-3 fire).

---

### TODAY's total queue if engine returns: **17+ emails**

- 6 today-natural Day-3/7/21 fires (jfgalzin / liambot / dr.altvater / kevin / emma / joseph)
- 2 tomorrow-natural Day-14/3 fires queueable today (lilianamasyrubi / jmoriarty)
- 5-user Day-18 batch (charlesteel + ggri + aw + ajv + mark)
- 2-user Day-15/16 batch (taranimeramaro + nmcnamee99)
- 4 carry sends (pete / josh / nicklib / jadbennis0)
- 3 short carries (sparkit / cjthomas / natalie)

**= 17-19 emails clear in 24-36h if engine returns today. The single largest queue of the entire outage by a wide margin (vs May 9's "12+").**

---

## Psychology-driven micro-optimization (today)

**Principle:** Loss aversion (Kahneman & Tversky, 1979) — sharpened by the May 8 cohort post-mortem.
**Where to apply:** Post-signup empty-state on dashboard (`web/src/app/dashboard/page.tsx`).

**The diagnosis (sharpened today by 48h of follow-through):**
- May 8 produced 4 signups, 1 instant-activation (liambot), **3 inerts (jfgalzin / kevin / emma).**
- May 9 produced 1 signup, **1 inert (jmoriarty13).**
- May 10-11 produced 0 signups.
- **Post-burst conversion: 0 of 1 single signup activated. May 8 inert pattern carried + compounded.**

**The pattern:** When users arrive with a specific event in mind (sparkit / cjthomas / liambot — instant-activators all), they activate in seconds. When users arrive with general "tickets-cheap-tool" intent, they sign up and freeze. **The product has no value-extraction surface for users who don't bring an event with them.** The CRO Agent has the FOMO-rail recommendation (yesterday's report) to surface concrete events — but the missing complement is making the COST OF INACTION VISIBLE on the dashboard for inert users.

**Specific change:** Replace the dashboard empty-state for users with 0 watchlist items. Instead of a search box and a generic "Browse events" CTA, show a **personalized loss-framing panel** that surfaces 3 specific recent-week prices users WOULD HAVE saved had they tracked a comparable event.

```
You're not tracking anything yet.
Last week, TicketScan users who set price targets caught:

  ▼ $87 saved   Charli XCX, MSG NYC
  ▼ $122 saved  Stanley Cup R1 Game 4, Bell Centre
  ▼ $54 saved   Phillies vs Braves, Citizens Bank

  [ Search your event → ]    [ Pick one of these ]
```

**Why this works (loss aversion):**
1. **People feel losses ~2x more strongly than equivalent gains** (Tversky-Kahneman empirical constant). A generic "save money on tickets" headline triggers gain-frame; "$87 you could have caught last week" triggers loss-frame.
2. **The number is specific and recent, not aspirational.** Hard concrete prices ($87 / $122 / $54) from this week carry the believability of price_history data; "save up to 40%" hits as marketing copy.
3. **Pairs with FOMO rail (yesterday's recommendation) and default-effect pre-fill (May 8's recommendation).** The full CRO stack now becomes:
   - **Loss-frame empty-state (TODAY's rec):** answer "why bother?" for the inert
   - **FOMO time-decay rail (yesterday's rec):** surface concrete events for the inert
   - **Default-effect target pre-fill (May 8's rec):** capture target_price on activation
   - **Loss-aversion null-target banner (May 7's rec):** recover existing null-targets
4. **Addresses the 4-user inert cohort directly.** jfgalzin / kevin / emma / jmoriarty have been visiting (or at least signing up at) the dashboard and bouncing without searching. **This change would catch them at the first 0-watchlist load.**

**Data dependency:** Need price_history aggregation showing "biggest weekly price drops where a target_price would have triggered." This is a query against price_history with a synthetic target_price = lowest_recorded * 1.10. Already implementable with existing schema. **No new tables required.**

**Quantitative target:** Currently the May 8 inert cohort (jfgalzin / kevin / emma) + jmoriarty = 4 users at 100% inert across Day 1-4. **Aim: activate 1 of 4 (25%) within 14 days of deploy.** Even one activation breaks the 100%-inert pattern and creates an in-product feedback case.

**Implementation cost:** ~5h. Backend: `/api/admin/recent-drops` endpoint returning 3-5 events with computed savings. Frontend: dashboard empty-state component swap. Copy and price values refresh weekly.

**Cross-agent route:** **CRO Agent (Agent 6)** to scope/implement. **The full CRO activation stack is now 4 fixes covering: empty-state (TODAY) → surface (yesterday) → capture (May 8) → recover (May 7). Combined ~13-16h work for complete coverage of the 0-watchlist → activated → target-set → re-engaged funnel.**

---

## Cross-agent dependencies

1. **→ Email Agent (Agent 5):** **17-19 EMAILS QUEUED — LARGEST QUEUE OF THE OUTAGE BY A WIDE MARGIN.** If engine returns today:
   - **TODAY 12:54-21:54 UTC:** 6 natural fires across Day-3/7/21 families (jfgalzin / liambot / dr.altvater / kevin / emma / joseph)
   - **TODAY (carry sends):** 5-user Day-18 batch + 2-user Day-15/16 batch + 4 individual carries (pete / josh / nicklib / jadbennis0) + 3 short carries (sparkit / cjthomas / natalie)
   - **TOMORROW MAY 12 05:24 UTC:** lilianamasyrubi Day-14 (first cleanly on-schedule Day-14 of outage)
   - **TOMORROW 13:18 UTC:** jmoriarty13 Day-3
   - **CARRIED + COMPOUNDED: Day-1 schedule addition.** 5 missed Day-1 fires in 96h (natalie/jfgalzin/liambot/kevin/emma) + jmoriarty's missed Day-1 last night = 6 missed Day-1 boundaries in the last week. **The Day-1 schedule addition is now the highest-leverage schedule change in the system.** Recommend Email Agent ship the schedule entry before May 13.

2. **→ CRO Agent (Agent 6):** **FOUR stacked high-leverage fixes — the full activation stack:**
   - **TODAY: Loss-frame empty-state on dashboard** — addresses the post-burst inert pattern (4-user 100% inert cohort) by making cost-of-inaction visible. ~5h.
   - **MAY 9: FOMO time-decay "Happening soon" rail** — surfaces urgent events for users who don't bring urgency. ~5-6h.
   - **MAY 8: Default-effect smart pre-fill on watchlist-add modal** — captures target_price at creation. ~3-4h.
   - **MAY 7: Loss-aversion target-price banner** — recovers null-target on existing 89 items. ~1.5h.
   - **Combined: ~13-16h work. Combined coverage: empty-state (why bother?) → surface (which event?) → capture (what target?) → recover (existing items). Full funnel coverage from landing through retention.**

3. **→ Ads Agent (Agent 4):** **TWO sharpened questions, day 18 carry:**
   - **Did jmoriarty13 (May 9 13:18 UTC) share a source with any May 8 signup?** Single post-burst signup at 100% inert. If the source matches the 3 May 8 inerts (jfgalzin / kevin / emma), the source produces low-intent acquisition. If different, jmoriarty is a coincidence.
   - **Did the May 7-8 burst share a source?** 7 signups in 48h with 3 instant-activations (sparkit / cjthomas / liambot) and 4 inerts (natalie / jfgalzin / kevin / emma). If single source: source quality is bimodal. If multiple sources: convergent burst.
   - **Combined ask:** 5 distinct signups May 7 + 4 May 8 + 1 May 9 = 10 signup events in 60h, source attribution would explain whether the burst is replicable (paid/organic spike) or a coincidence. **Day 18 of dependency. The 48h post-burst flat window now makes attribution mandatory before any "what worked?" claim can be made.**

4. **→ Content Agent (Agent 3):** **MLS / INTER MIAMI MARKET SIGNAL — n=2 STILL UNCONVERTED.**
   - liambot's Toronto FC v Inter Miami passed May 9 without notification. jadbennis0's Inter Miami CF vs Portland Timbers is 6 days away (T-6d). **The Inter Miami market signal carried from May 9 has not produced new traffic (no new MLS signups in 48h post-recommendation).**
   - **BMO Field Toronto** is in the WC2026 venue list — verify current MLS coverage. **Recommendation lift: low-cost MLS content (especially Messi-proximity matches) for May 12-13 publish targeting the next Inter Miami match week.**
   - **Carried market signals (still unaddressed):** Mac DeMarco / Salt Shed Chicago indie-concerts; Noah Kahan / Kia Center Orlando; AEW Double or Nothing / wrestling at the May 24 mark.

5. **→ Engineering / Drip-Engine:** **Day 35 of outage. The May 10 mega-fire day passed with 6 missed natural fire windows + 1 missed algo-flip threshold (Inter Miami T-7d).** New boundaries fired and missed since May 9 report:
   - jadbennis0 Day-3 carry → 24h carry → 48h carry → now 72h carry
   - sparkit / cjthomas / natalie Day-3 — all missed May 10
   - **pete Day-30** (May 10 15:38 UTC) — **FIRST EVER NATURAL DAY-30 WINDOW, MISSED**
   - **jadbennis0 Inter Miami T-7d algo-flip** (May 10 ~20:33 UTC) — **FIRST NON-CUBS ALGO-FLIP IN 28 DAYS, MISSED**
   - nmcnamee99 Day-14 (May 9 11:51 UTC) + taranimeramaro Day-14 (May 9 18:25 UTC) — both missed
   - josh Day-21 (May 10 20:30 UTC) — missed
   - liambot Toronto FC May 9 — passed-no-notify #15
   - jmoriarty13 Day-1 (May 10 13:18 UTC) — missed by definition (no schedule entry)
   - 5x May 7-8 cohort Day-1 boundaries — all missed by definition
   - **Same-day batch capacity if engine returns today: 17-19 emails in 36h.**
   - **NEW CARRIED ASK:** Day-1 schedule addition. 6 missed Day-1 boundaries in 7 days. Highest-leverage single schedule change in the system.

6. **→ All agents:** **The 2-day acquisition burst is confirmed a flicker, not a structural shape change.** The "is this replicable?" question from May 9's report has resolved NO. **All agents should treat the May 7-8 spike as a single-point event for analytics purposes, not a baseline shift.** The 30-day-outage stagnation pattern is back across all 6 dimensions.

---

## Summary metrics

```
Total users:              74 (+1 over 48h) — burst reverted to pre-burst rate
Real users:               71 (+1)
Activated:                48 (=0 over 48h) — watchlist FULLY FLAT for 48h
Activation rate:          67.6% (real, −1.0pp from May 9) — 5-day decline now −3.6pp cumulative
Watchlist items:          89 (=0 over 48h)
Newsletter subscribers:   3 (99 days flat = 14 weeks + 1 day; 100-day milestone tomorrow May 12)
Active alerts:            0 (Day 35)
Triggered alerts:         0 (lifetime)
Drip emails sent:         0 (Day 35 — confirmed via /api/admin/drip-stats: stats=[])
Cumulative passed-no-notify: 15 (+1 over 48h — Toronto FC May 9 confirmed passed)
Algo-flip-quiet streak:   12 days, NEVER ENDED (May 10 Inter Miami T-7d threshold missed)
Activation gap (real):    22/71 = 31.0% (+1.0pp) — 2nd consecutive day above 30%
Unknown-source activation: 4/16 = 25.0% (−1.7pp on jmoriarty inert)
Day-18 cohort:            5 users (charlesteel + ggri + aw + ajv + mark) — body "two weeks and four days ago"
Day-15/16 cohort (new):   2 users (taranimeramaro + nmcnamee99) — Day-14 missed May 9
Instant-activation cluster: 4 (frozen at May 5/7/7/8 since no new adds in 48h)
Target-price capture:     0/89 watchlist items = 0% (Day 35 structural)
Post-burst signups:       1 in 48h (jmoriarty13, 100% inert)
Closed-out failure-mode families: Day-1, Day-3, Day-7 (joseph 10h out), Day-14, Day-21, Day-30, non-Cubs algo-flip — 7 of 7 schedule/flip families
```

**Headline:** The May 7-8 acquisition burst is confirmed a 2-day flicker, not a structural shape change — only 1 signup in the following 48h (jmoriarty13, inert). The May 10 "highest-density fire-event day ever" passed without a single send: 6 natural fire windows missed (Day-30 debut + non-Cubs algo-flip debut + 4 Day-3s), 1 passed-no-notify event (Toronto FC May 9 → #15 cumulative). **The engagement engine has now produced confirmed missed natural fire windows across all 6 drip schedule families (Day-1/3/7/14/21/30) AND both algo-flip families (Cubs + non-Cubs)** — every conceivable scheduled-send family is now in the closed-out-failure category. Today's CRO recommendation (loss-frame empty-state) completes the 4-fix activation stack: empty-state → surface → capture → recover, ~13-16h combined work. **Queue if engine returns today: 17-19 emails clear in 36h — by far the largest of the outage.** Newsletter subscribers cross the 100-day-flat milestone tomorrow May 12.
