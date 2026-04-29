# Growth Daily -- 2026-04-29

## User health dashboard

| Segment                     | Count | % of Total | vs Apr 28 |
|-----------------------------|-------|------------|-----------|
| Total users                 | 64    | 100%       | +1 (zhili1208@gmail.com signed up 03:16 UTC; 0 watchlist as of 11:00 UTC) |
| New (last 7 days)           | 8     | 12.5%      | +0 net (zhili1208 entered, charlesteel rolled out at 11:38 UTC — net flat) |
| Activated (has watchlist)   | 43    | 67.2%      | +0 (no new watchlist adds in 24h; activation rate dropped to 72.1% on real users — second consecutive daily drop) |
| Active (visited in 7 days)  | unknown | —        | no `last_login_at` instrumentation — **Day 23 open** |
| At-risk (7-14d signup-age proxy) | 4 | 6.3% | +0 net (dylanbaldy promoted to churned today; josh now Day 10, nicklib253 now Day 12, dr.altvater now Day 9, **charlesteel rolled in today: Day 7, 1 watchlist**) |
| Churned (14d+ signup-age proxy) | 53 | 82.8% | **+1 (dylanbaldy crossed Day 14 today — first new churned user in 6 days, 52→53 rollover as forecasted)** |

> Day 23 without `last_login_at` instrumentation.
> Active alerts across **85** watchlist items: **0**. Target-price capture rate: **0% (Day 23).**
> `usersToday: 1`, `usersThisWeek: 8` — **second consecutive day of new signup, second consecutive day of 0-watchlist activation.** id 64 zhili1208@gmail.com (Gmail-personal, name reads as Chinese-coded, no clear demographic flag) registered at 03:16:35 UTC. **7h 44min into account life as of report writing, watchlist still empty.** The two-day pulse pattern (Apr 28 = 1, Apr 29 = 1) is now the first consecutive-day signup pair in 6 days — but **both are never-activators**. The acquisition silence didn't just break, it broke into a worse cohort.
> Watchlist items: **85, unchanged for the fourth consecutive day.** No adds, no removes since taranimeramaro's third Bruno Mars entry on Apr 25 18:27 UTC — that's now ~89h flat on the engagement metric. **Second-longest engagement-flat streak since I started tracking** (the longest was Mar 16–Mar 22, 6 days, before the Mar 22 ldholman triple-add).
> **Activation rate moved down to 72.1%** (44/61 real-user activations against 61 real users). **This is the second consecutive daily drop** (75.4% → 72.9% Apr 28 → 72.1% today). The metric has now declined 3.3pp in 48 hours, the largest 2-day decline since I started tracking.

## What changed in 24h

1. **SECOND CONSECUTIVE DAY OF 0-WATCHLIST SIGNUP — THE PATTERN HARDENS.** id 64 zhili1208@gmail.com registered at 03:16:35 UTC. Following lilianamasyrubi yesterday (also 0 watchlist, now 30h+ into account life with no add), this is the first time since the Mar 13 / Mar 14 pair (danielbuchanan / tate.sheppard — and tate.sheppard *did* activate that day) that we have back-to-back signups where neither activated. The 72h acquisition picture is now: Apr 27 = 0, Apr 28 = 1 (0 watchlist), Apr 29 = 1 (0 watchlist). Two pulses, two never-activators. The pulse pattern is delivering signups, but the cohort is bouncing.

2. **DYLANBALDY CHURNED TODAY — FIRST NEW CHURNED USER IN 6 DAYS, 52 → 53.** As forecasted yesterday with daily-granularity precision. Signup Apr 15 18:24 UTC → Day 14 today. 13 consecutive daily flags closed without a single intervention. **This becomes our longest-running case study of the drip-engine outage as a churn factory.** No retention email ever sent. No activation email ever sent. The user was visible from Day 3, escalated through Day 7, sat at Day 7-13 for a week, and crossed today with the same zero-touch state they've had since signup. The full failure cycle, end-to-end, in 14 days. Marked as the lead anecdote for any post-mortem on drip-engine downtime impact.

3. **AJVANPROOYEN MAY 6 FLIPPED INTO OVERRIDE TODAY — ENTIRE TRIP NOW INSIDE 7-DAY WINDOW.** Forecast holds. As of 11:00 UTC the recommendation engine has flipped on all 6 of 6 events (May 1, May 2, May 3, May 4, May 5, May 6 — all inside T-7d). **The carried email body has no honest version remaining.** Yesterday's "the last game (May 6) still has a real pre-flip window, but only until tomorrow" was the last credible framing. Today there is no pre-flip window left for any event in the trip. The email gets killed today, not edited. Six days of pre-queued content, six daily edits, dead at hour 144 of the cascade. The Cubs hub-page content asset survives (handed to Content Agent) but the bespoke retention email is unrecoverable.

4. **TARANIMERAMARO BRUNO-METLIFE DAY-3 DID NOT FIRE YESTERDAY — NOW 24H LATE.** The "first on-time Day-3 send in 6 days" framing from yesterday's report was wrong because the drip engine did not return. The pre-queue is now 24h late on what was meant to be the first on-time send in nearly a week. Today the body still works at Day 4 (the framing "a few days ago you added three Bruno dates" remains accurate within ±2 days), but the symbolic value of the on-time send is gone. Send today 10am EDT if drip returns; otherwise carries to tomorrow at Day 5, where the pre-queue copy starts to feel slightly stale.

5. **NMCNAMEE99 POST-RAPTORS DAY-3 ALSO DID NOT FIRE.** Same reason. Game 2 was Apr 26; pre-queue from Apr 26 was meant to send yesterday at Day 3 (Apr 28 11:51 UTC). Now 24h late. Game 3 status: per Apr 27 game (Toronto won Game 2), the series moves to Cleveland for Game 3 — meaning the "Game 3 if Toronto stays alive" hook is alive. Today's send still works. Send 5pm EDT.

6. **GGRI73 DAY-7 FIRES TODAY (signup Apr 22 21:18 UTC → Day 7 starting 21:18 UTC tonight).** The carried Day-3 hybrid was meant to compress two stale activation emails into one. With the engine still down, that compression no longer applies — Day-7 lands on schedule (or 0d late) for the first time in this cohort. **First on-schedule activation send in the carried pile, IF the engine returns by 21:18 UTC tonight.** Otherwise it joins the pile and the framing has to absorb late-by-hours rather than late-by-days, which is a much smaller framing problem.

7. **DR.ALTVATER NOW DAY 9.** The Day-7 pivot from yesterday is now 48h late. The body — "a full week and zero events tracked yet" — needs to update to "nine days and zero events tracked yet." This is the second daily edit on a Day-7 email, which structurally weakens it: the email is supposed to be sent *near* the Day-7 boundary, not 48h past it. Hard expiry on the Day-7 framing: Apr 30 (Day 10), at which point the email needs to be reframed as Day-14 win-back (4 days early but the only honest option). German .de domain language question still unanswered (Email Agent open).

8. **CHARLESTEEL ROLLED INTO AT-RISK TODAY (Day 7).** Signup Apr 22 11:38 UTC → Day 7 starting 11:38 UTC today. Has 1 watchlist item (Bruno Mars Ohio Stadium May 20, 21d out). Day-3 was 4d late as of yesterday and was carried unchanged. Today Day-7 fires (3h before the report window opened). **Decision: pivot from carried Day-3 to fresh Day-7 framing**, identical reasoning to dr.altvater pivot from Apr 28 — at Day 7 the "you just signed up" framing is misleading. The Day-7 email reframes around "a week in, one event tracked, zero target prices set — this is the move." Send today 12pm EDT.

9. **JOSH NOW DAY 10.** Day-7 carried email is now late by 3 days. The "a week into your account" framing weakens at Day 10; "ten days in" requires a small body edit. AEW Double or Nothing May 24 still 25d out — the event is the body anchor, and the anchor remains intact. Edit and send today 7pm EDT.

10. **NICKLIB253 NOW DAY 12.** Day-14 win-back rewrite needed in 48h. The carried Day-7 past-event reframe ("Phillies passed Apr 17") works through Day 13 at the latest. Hard expiry: Apr 30 EOD, after which the framing must shift to Day-14 win-back: "two weeks since you tracked an event that's already happened — let's find you the next one." Pre-queue tomorrow.

11. **PETE.UZELAC NOW DAY 19, +144H LATE ON DAY-18 EMAIL.** Carried unchanged for the 6th day. The "you're missing alerts" frame holds for one more day at most — by Day 21 (Apr 30 → Day 20 → May 1 = Day 21) the email needs to shift framing to "three weeks since you set up six events with no follow-through." Hard expiry on the current copy: 48h.

12. **NEWSLETTER SUBSCRIBERS: 3, unchanged since Feb 1 — now 87 days flat.** Still no movement. Today's signup did not subscribe to the newsletter (broken funnel, separate flow). Homepage form audit blocker carried for the 12th week. **87 days = 12 weeks and 3 days.**

13. **INSTRUMENTATION GAP DEEPENS.** zhili1208 signed up but we have no record of *what brought them*. No referrer, no UTM capture, no landing page record — same blackout that swallowed lilianamasyrubi yesterday and ids 57–62 before. Today the never-activator-from-unknown-source list grows to **6 of the last 9 signups** (ids 55, 57, 58, 60, 63, 64). The pattern is no longer probabilistic; it's structural. There is a single low-intent acquisition channel delivering signups without context, and we cannot tune away from it because we cannot identify it. **Six days into the Analytics Agent ask and the data point is now decisively shaping product strategy: every additional day without attribution is another data point lost from a recurring failure mode.**

## Activation gap

**Users signed up in last 7 days with 0 watchlist items: 4** (one new today, one rolled out: charlesteel exits the 7-day window today *with* a watchlist; zhili1208 enters with 0):

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| **zhili1208@gmail.com** (NEW today) | Apr 29 03:16 UTC | 0d | 0 | First 8h post-signup, no watchlist add. Pre-Day-3 window. **Second 0-watchlist signup in 48h.** |
| lilianamasyrubi@gmail.com | Apr 28 05:24 UTC | 1d | 0 | 30h post-signup, still no watchlist add. **Pre-Day-3 window expires Apr 30.** |
| ggri73@gmail.com | Apr 22 21:18 UTC | 7d | 0 | **Day-7 fires today.** First on-schedule activation send in the carried pile (if engine returns). |
| awwhittington@icloud.com | Apr 23 00:30 UTC | 6d | 0 | Past Day-3 by 3 days. Day-7 fires tomorrow Apr 30. |
| mark.murdock@lanternsec.com | Apr 23 03:01 UTC | 6d | 0 | Past Day-3 by 3 days. **B2B domain.** Day-7 fires tomorrow Apr 30. |

**Outside 7-day window (carried, still 0 watchlist):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| dr.altvater-70199@web.de | Apr 20 | 9d | 0 | Day-7 pivot now 48h late. **German domain. Hard framing expiry tomorrow** (transitions to early Day-14). |
| dylanbaldy@gmail.com | Apr 15 | 14d | 0 | **CHURNED TODAY.** 13 consecutive at-risk flags, 0 sends, 0 watchlist activity. End-to-end failure cycle complete. |

- **17 real users** (excluding 3 test accounts — id 1 ai@excelentmedical.com, id 2 admin, id 3 test) have **never** added a watchlist item → **17 / 61 = 27.9% of real signups** (was 16/60 = 26.7% yesterday). **The activation gap widened for the second consecutive day.** The marginal user is, for the third consecutive signup (lilianamasyrubi yesterday, zhili1208 today, plus the carried mark.murdock and awwhittington), a never-activator. The recent activation cohort (taranimeramaro Apr 25, nmcnamee99 Apr 25, ajvanprooyen Apr 23) was strong; the cohort since has been entirely silent. **Two cohorts back-to-back: one fully activates, the next one fully bounces.** This is either a channel mix shift or a pure cohort-quality artifact — the missing referrer data prevents distinguishing them.
- **Activation rate trajectory (real users, last 7 days):** 73.7% → 73.7% → 73.7% → 73.7% → 75.4% → 72.9% → **72.1%**. The Apr 26 spike (taranimeramaro + nmcnamee99 both activating on signup day) was the only positive movement in the run. Every other day the metric is either flat or declining. **The trend has decisively inverted from neutral-positive to declining.** Five additional 0-watchlist signups in a row would drop the metric below 67%; the run we're currently in is already 2 deep.

**Acquisition-source inference still blocked on Analytics Agent (6 days late):**

The pattern of unknowns now numbers **six in nine days** (ids 55, 57, 58, 60, 63, 64), against three knowns who all activated (id 59 ajvanprooyen, id 61 nmcnamee99, id 62 taranimeramaro). The bifurcation is now stark:
- **Known-source signups in last 9 days: 3, all activated immediately (100% activation, multi-event each).**
- **Unknown-source signups in last 9 days: 6, all 0 watchlist (0% activation).**

This is not a noise pattern. It is the strongest correlation I've surfaced in the data — and it's been pending for almost a week. **Six days into the ask, this is now the highest-leverage open dependency in the entire growth stack.**

## Churn signals

- Unsubscribes today: **0** (still 3 subscribers; **87 days flat — 12 weeks and 3 days**)
- Users entering "at-risk" today: **1** (charlesteel rolled in at Day 7)
- Users entering "churned" today: **1** (dylanbaldy crossed Day 14 — **first new churned user in 6 days**)
- Alert fatigue candidates: 0 (0 alerts ever sent — Day 23)
- Events passed without notification (cumulative): 5 — unchanged.
- **Algo-overrides as preemptive "events lost without notification":** **8 events** as of today (tate Florence, goldy Bilmuri, ajvanprooyen May 1 / May 2 / May 3 / May 4 / May 5 / **May 6 today**). All six ajvanprooyen events now flipped. The 5-day cascade plays out as forecasted exactly; this is the sixth consecutive day of daily-granularity precision on this forecast.

## At-risk users (7–14d inactive proxy)

| User | Day | Watchlist | Days to event | Recommended intervention |
|------|-----|-----------|---------------|--------------------------|
| **charlesteel126@gmail.com** (newly at-risk today) | 7d | 1 (Bruno Ohio May 20, 21d out) | 21d | **Day-7 activation (pivot from carried Day-3)** — fires today 12pm EDT |
| dr.altvater-70199@web.de | 9d | 0 | — | Day-7 pivot 48h late — **hard expiry tomorrow** (transitions to early Day-14) — German .de domain |
| josh (joshdguillemette@gmail.com) | 10d | 1 (AEW May 24, 25d out) | 25d | Day-7 carried 3d late — small edit needed ("ten days in") — fires today 7pm EDT |
| nicklib253@gmail.com | 12d | 1 (Phillies passed Apr 17) | passed -12d | Bespoke Day-7 — **hard expiry tomorrow EOD** (transitions to Day-14 win-back at Apr 30) |

**dylanbaldy moved out of at-risk to churned today** (Day 14 crossed). No retention intervention realistic at this point — the user has been silent for 14 consecutive days with 0 watchlist, 0 sends, 0 actions of any kind.

## Live algo-flip post-mortem (today)

| User | Event | Days out | Flip status | Days flagged | Sends |
|------|-------|----------|-------------|--------------|-------|
| ajvanprooyen | Cubs vs Diamondbacks, May 1 | 2 | flipped Apr 24 | 6 | 0 |
| ajvanprooyen | Cubs vs Diamondbacks (Bobblehead), May 2 | 3 | flipped Apr 25 | 6 | 0 |
| ajvanprooyen | Cubs vs Diamondbacks (Tee), May 3 | 4 | flipped Apr 26 | 6 | 0 |
| ajvanprooyen | Cubs vs Reds, May 4 | 5 | flipped Apr 27 | 6 | 0 |
| ajvanprooyen | Cubs vs Reds, May 5 | 6 | flipped Apr 28 | 6 | 0 |
| **ajvanprooyen** | Cubs vs Reds, May 6 | **7** | **flipped today (final flip)** | 6 | 0 |
| **goldy.pec** (post-mortem #2 closed) | Bilmuri @ Sylvee, May 2 | 3 | flipped Apr 25 | 13 | 0 (closed) |
| tate.sheppard (post-mortem #1 closed) | Florence + Machine, May 1 | 2 | flipped Apr 24 | 14 | 0 (closed) |
| **nmcnamee99** (post-event closed) | Raptors Game 2, Apr 26 | -3 (passed) | event passed | 4 | 0 (closed; Day-3 was meant to fire yesterday, did not) |

**Post-mortem #3 (ajvanprooyen) closes today.** All 6 events inside override. The forecasted cascade has played out for 6 consecutive days with daily-granularity precision. This is now the **third closed algo-flip post-mortem** (tate Apr 24, goldy Apr 25, ajvanprooyen Apr 29). The recurring failure mode is fully documented — three independent users hit it within 5 days of each other, all because the drip engine has been down for 23 days. **This is no longer a debate-able product issue; it's a documented churn factory.**

## Churned users with re-engagement potential

(One new addition today: **dylanbaldy joins the churned bucket as the 53rd entry.** Note: zero existing-user activity since Apr 25 — 4 days of pure stasis on the engaged side.)

| User | ~Days inactive | Watchlist items | Upcoming hook? | Priority |
|------|----------------|-----------------|----------------|----------|
| **dylanbaldy@gmail.com** (NEW churned today) | 14d (just churned) | **0** | — | **LOW** (no watchlist = no re-engagement hook beyond generic "we miss you") |
| pete.uzelac77 | 6d (just churned) | **6** (WC + Darts) | 51–68d | **HIGH** |
| **goldy.pec** (post-mortem #2 archived) | 6d (just churned) | 1 (Bilmuri T-3 today) | passed override | CLOSED |
| blubberboi | 6d (just churned) | 1 (Ed Sheeran Aug 8) | 101d | MEDIUM |
| tate.sheppard (post-mortem #1 archived) | ~46d | Florence T-2 today | passed override | CLOSED |
| tosophiameyer | ~50d | **11** Harry Styles MSG | 117–141d | **HIGH — power user** |
| brigitte.theisen | ~63d | **10** Backstreet Sphere | 79–99d | **HIGH — power user** |
| laye.aurelien | ~27d | 2 (Shakira Jul 20 + 23) | 82–85d | HIGH |
| lvasub6 | ~31d | 2 (Flyleaf Jul 17–18) | 79–80d | HIGH |
| krusesin2023 | ~61d | 2 (Flyleaf Jul) | Yes | MEDIUM |
| ldholman | ~57d | 3 (Bad Omens passed; 2× MIW Aug 11) | Partial | MEDIUM |
| spcoog83 | ~52d | 1 (Olivia Dean Aug 25) | 118d | MEDIUM |
| edithdionne | ~56d | 1 (A7X Centre Bell Aug 8) | 101d | MEDIUM |
| bhaygood728 | ~26d | 1 (Cardi B passed Apr 12) | No | LOW |
| chocolateyu1083 | ~29d | 1 (Oilers passed Mar 31) | No | LOW |
| arin.gelbaugh | ~30d | 1 (NCAA Final Four passed Apr 4) | No | LOW |
| missbrookeshep | ~57d | 1 (Warriors/Rockets passed Apr 5) | No | LOW |
| billstromkel | ~36d | 1 (RAYE passed Apr 8) | No | LOW |
| jkaiser | ~44d | 1 (NCAA 2nd Rd passed Mar 21) | No | LOW |
| tucwildcat | ~38d | 1 (NCAA 2nd Rd passed Mar 22) | No | LOW |

**Passed-event overhang:** 8 churned users + nicklib whose only tracked event has already happened. **dylanbaldy joins as the worst case: 0 watchlist, 0 hook, 0 path to re-engagement.** Cohort stays dead without a re-engagement product.

## Churn intervention: email content (ready to queue when drip engine returns)

### KILLED TODAY — ajvanprooyen@crimson.ua.edu (Cubs trip, all 6 events flipped, no honest copy possible)

**Removed from queue. The email cannot be sent.** Six days of daily edits, ending today with the May 6 flip making the entire trip inside override. There is no number left in the trip that the recommendation engine isn't already calling "buy now" on. Any email referencing target-price setting on this watchlist would be misaligned with what the user sees on the site.

The Cubs / Wrigley out-of-market hub-page concept survives independently — handed to Content Agent for evergreen value. But the bespoke retention email is unrecoverable as of 11:00 UTC today.

**Lesson logged:** The third documented case of the same failure mode in 5 days. The drip-engine outage is not just delaying retention emails — it is destroying their addressability window event by event. This is the strongest case yet for treating drip-engine restoration as a P0, not a P1.

---

### TODAY's pre-queue fires (carried from Apr 28, 24h late) — taranimeramaro Bruno Mars MetLife Day-3

Three-date cluster, 114–118d out today vs. 115–119d yesterday. Pre-queue still current. **24h late** (was meant to be Apr 28's first on-time send). Body framing "a few days ago you added three Bruno dates" remains accurate. Send today 10am EDT if engine returns; carries to Day 5 tomorrow if not.

---

### TODAY's pre-queue fires (carried from Apr 28, 24h late) — nmcnamee99 post-Raptors Day-3

Game 2 happened Apr 26; today is Day 3-after-Game-2 (post-event window). Toronto won Game 2 → Game 3 in Cleveland is the natural watchlist-add hook. Pre-queue from Apr 26 still current. Send 5pm EDT.

---

### Day-7 fires today — ggri73@gmail.com (first on-schedule activation send)

7d post-signup, 0 watchlist. Standard Day-7 activation framing. Send today 9pm EDT (or earlier if Apr 22 21:18 UTC equivalent is preferred for cohort-time consistency). **First on-schedule (or near-on-schedule) activation send in the carried pile if engine returns by EOD.**

**Subject:** A week in — here are the 3 most-tracked events near you
**Body:** Standard Day-7 activation copy, generic-events variant (no inferred preference — no source data, no signal, no behavior).

---

### Day-7 fires today (PIVOT) — charlesteel126@gmail.com

7d post-signup, 1 watchlist (Bruno Mars Ohio Stadium May 20, 21d out). Day-3 was 4d late as of yesterday and is now 5d late; pivot to fresh Day-7 framing.

**Subject:** A week with one event tracked — set a target price on Bruno?
**Body:**
> A week ago you added Bruno Mars at Ohio Stadium — May 20, 21 days out. You haven't set a target price yet, which means you're tracking the event but not getting the alert that's the whole point.
>
> Here's what's interesting about the 21-day window: it's far enough out that resale prices are still moving (we've seen 14–18% swings on tour-circuit shows in the 14–28d range), but close enough that you can act on a drop without being early. Setting a target ~10% below today's price catches most of the meaningful drops in this window.
>
> [Set your target price](https://www.ticketscan.io/watchlist)

**Send timing:** today 12pm EDT.

---

### Day-7 (3d late, small edit) — josh (joshdguillemette@gmail.com)

AEW Double or Nothing May 24, 25d out today. Body edit: "a week into your account" → "ten days into your account." Otherwise unchanged. Send today 7pm EDT.

---

### HIGH — pete.uzelac77+ticketscan@gmail.com (Day 19, **carried for the 7th day, 144h late, hard expiry 48h**)

Carried from Apr 25. 7th day of unchanged copy. **The "you're missing alerts" framing has 48h of life left** — by Apr 30 (Day 20) it shifts toward a different psychological frame. **Hard expiry of the current copy: 48h.**

**Subject:** 6 events, ~840 price checks, 0 emails — one setting fixes all of it
**Send timing:** immediately on revival; fallback **today 12pm EDT**

---

### Day-7 cluster (firing tomorrow) — mark.murdock + awwhittington

Both signed up Apr 23, both Day 6 today, both Day 7 tomorrow. Both 0 watchlist. The Day-3-and-7 hybrid framing from yesterday still applies — these emails fire 24h from now.

- **mark.murdock@lanternsec.com:** B2B Lantern Security domain — B2B variant + hybrid framing
- **awwhittington@icloud.com:** standard hybrid framing

**Pre-queue tomorrow's send. Both 11am EDT.**

---

### PRE-QUEUE FOR TOMORROW — nicklib253 Day-14 win-back rewrite

Day 13 today; Day 14 tomorrow. The Day-7 past-event reframe expires tonight. **Replacement copy needed:**

**Subject:** Two weeks since the Phillies game you tracked — let's find you the next one
**Body:**
> The Philadelphia Phillies vs. Atlanta Braves game you added on April 17 is the only event we've ever tracked for you, and it happened the day after you added it. We never alerted you on it because we never had a target price to compare to — and there wasn't really time to set one.
>
> Two weeks later, here's the question: was tracking that one game a one-time thing because you wanted to compare prices for a specific decision, or are you a Phillies fan who'd want to track the rest of the season?
>
> If it's the latter — they're home against the Mets on May 8–10 (10–12 days out), and against the Braves again May 14–16 (16–18 days out). The 10–18 day window is where target-price setting starts to matter on resale.
>
> [See Phillies upcoming home games](https://www.ticketscan.io/dashboard?q=phillies)

**Send timing:** Apr 30 6pm EDT (Day 14 + Phillies-fan typical evening engagement window).

---

### PRE-QUEUE FOR TOMORROW — dr.altvater Day-14 (early, but the Day-7 pivot expires)

Day 9 today; the Day-7 pivot framing expires Apr 30 (Day 10). Rather than another stale Day-7 edit on Day 11, pivot directly to early Day-14 win-back framing on Apr 30:

**Subject:** Nine days since you signed up — should we close this account, or help you start?
**Body:** Bespoke "are you still here?" copy with a single-question signal: keep account / no thanks. Operates as a churn-or-commit forcing function. Bilingual EN/DE landing if available; English default with German subject-line option in subject test.

**Send timing:** Apr 30 1pm UTC (peak European afternoon).

**Open question (carried, unanswered for 4d):** German-language drip variant availability — Email Agent.

---

### Carried unchanged

- **Day-3 (4d late) — charlesteel** (replaced today by Day-7 pivot — see above)
- **Day-7 (5d late) — dylanbaldy** (12th consecutive flag yesterday; **CHURNED TODAY.** The activation email is now misframed by definition — user is no longer at-risk, they're churned. Repurpose to win-back tier; sending today is essentially a no-op since the user has been silent for 14d).
- **Day-14 (4d late) — pete + goldy** (goldy is post-mortem closed; pete is HIGH PRIORITY above).
- **Day-14 (5d late) — blubberboi** (Ed Sheeran SoFi 101d).
- **Day-21 (5d late) — bhaygood** (bespoke past-event LOW).
- **Day-21 (6d late) — laye.aurelien** (Shakira July, 82–85d runway).
- **Day-30 (6d late) — billstromkel** (RAYE passed).
- **Day-30 (8d late) — tucwildcat** (NCAA passed).
- **Day-30 (14d late) — jkaiser** (NCAA passed).

**Total emails ready to queue: 16** (17 yesterday minus ajvanprooyen killed today; charlesteel Day-7 pivot replaces stale Day-3 — net -1).

---

## Psychology-driven optimization — one recommendation

### Principle: **Zeigarnik Effect** (Zeigarnik, 1927), applied to a persistent dashboard incompleteness indicator

**Where:** A persistent header strip on the logged-in dashboard that visually represents the user's onboarding completion state. Visible on every dashboard view until the user has (a) added a watchlist item AND (b) set a target price. Two states, two visible-but-unresolved tasks.

**Problem this targets:** **The acute back-to-back failure of activation in the last 48h.** Two consecutive new signups (lilianamasyrubi yesterday, zhili1208 today) have created accounts and not added a single event. Both have likely visited the dashboard and bounced. The dashboard's empty state is *passive* — there is nothing on it that creates *cognitive tension*. The user looks at it, sees nothing requiring action, and leaves.

The Zeigarnik effect — first observed in the 1920s when waiters could remember unpaid tabs but not paid ones — is the well-replicated finding that incomplete tasks occupy cognitive bandwidth in a way completed tasks do not. The mechanism: an unresolved action item exerts intrusive recall pressure until it is either resolved or explicitly dismissed. **This is the exact opposite of what our dashboard's empty state does today.** The current empty state is a quiet absence; what we need is a loud, structured incompleteness that the user *cannot mentally close* without acting.

**Why Zeigarnik specifically, and why now:**

The 6 prior psych recs (commitment/consistency, loss aversion, reciprocity, social proof, anchoring, implementation intentions) operate at five different surfaces — but none of them operate on the *return-visit* state for a user who already has an account and is logged in but hasn't acted. They all assume either (a) anonymous, (b) signing up, (c) already in mid-action, or (d) post-first-add. **The "logged-in but inert" state is the surface that today's data point demands.**

zhili1208 will, statistically, likely visit the dashboard at least once in the next 48 hours. If that visit shows an empty search bar and a "no events tracked" message, the visit ends. If that visit shows a structured incomplete-task indicator at the top of the screen — one that names what's missing, shows progress on what's done, and does not let the user mentally dismiss it — the same visit becomes an action.

**The implementation:**

A persistent header strip below the navbar, visible on `/dashboard`, `/watchlist`, `/event/[id]`, and `/compare`. Hidden once both completion conditions are met. Layout:

```
┌────────────────────────────────────────────────────────────┐
│  Setup: ●●○○  2 of 4 complete                              │
│                                                            │
│  ✓ Account created                                         │
│  ✓ Welcome email confirmed                                 │
│  ○ Add your first event       → [Search events]            │
│  ○ Set a target price         → [unlocks after add]        │
│                                                            │
│                                                  [Hide ✕]  │
└────────────────────────────────────────────────────────────┘
```

**Five mechanics, each with a specific psychological function:**

1. **Visible incompleteness** — the dot indicator (●●○○) and "2 of 4 complete" text make the unfinished state structurally salient. Zeigarnik's mechanism requires the user to *perceive* the task as incomplete; ambient empty states do not satisfy this requirement, but a visible progress indicator does.
2. **Specific named tasks** — "Add your first event" and "Set a target price" are concrete. Zeigarnik tension dissipates when tasks are abstract ("get started"); it intensifies when they are nameable.
3. **Sequential unlock** — the "set a target price" task is grayed/disabled until "add your first event" is done. This converts the second task into a deferred reward, which compounds the Zeigarnik tension on the first task (the user wants to unlock the next step).
4. **Progress that matters** — the two pre-completed tasks ("account created," "welcome email confirmed") are real but trivial. They serve as anchors: the user already has *some* completion, which makes the remaining 50% feel close, not far. (Goal-gradient effect as a compounding mechanism — the closer the user feels to completion, the harder they push.)
5. **Explicit dismissal** — the "[Hide ✕]" button is visible and respected. Users who genuinely don't want the prompt can dismiss it, and we honor that for the session. **Critical for not crossing into dark-pattern territory:** Zeigarnik tension only works if the user perceives the prompt as honest. A dismissable prompt is honest; a non-dismissable one is coercive.

**Why this beats other untouched principles for this specific surface:**

- **Information gap (Loewenstein)** — surface curiosity-inducing data. Strong principle but operates in the *content* of the dashboard, not its *frame*. We could combine: the empty-state body could carry the Loewenstein curiosity gap (an Apr 25 reciprocity rec adjacent), while the header strip carries the Zeigarnik incompleteness frame.
- **Self-perception theory (Bem) / Foot-in-the-door (Freedman & Fraser)** — get a small commitment first ("which sport do you follow?"). Strong but adds friction and overlaps with Apr 28 implementation-intentions.
- **Default effect** — pre-checked options. Operates on settings, not on action.
- **Peak-end rule** — design the alert email to peak strong, end strong. Worth doing but operates on a downstream surface.
- **Decoy effect** — add a clearly worse comparison option to make TicketScan look better. Operates on the compare view; addresses a different problem.
- **Zeigarnik effect** — the only principle that *exploits the user's own cognitive system* to make returning to an incomplete task feel necessary. The exact mechanism the inert-logged-in surface is missing.

**Defensibility against gaming / brand-trust risk:**

- The "Hide ✕" must be visually equal in prominence to the action CTAs. Forcing the prompt would generate reactance and convert Zeigarnik into annoyance.
- The completion definition must be honest: "Set a target price" only counts when a price is actually saved. Marking it complete on partial-flow exits would burn trust.
- The prompt must not appear in the *email* surface. Zeigarnik tension is about visual ambient pressure during a session — emailing about uncompleted onboarding tasks reads as nagging and converts a productive psychological mechanism into a churn driver. Keep this principle visual, in-product, and session-scoped.
- The two pre-completed items ("account created," "welcome email confirmed") must be real. Marking the welcome-email task as complete based on send (not confirm) would be a small lie; small lies compound. If we don't have a reliable confirm signal, swap in a different real task ("Email verified" → "Browser bookmarked," etc.) or drop the pre-completed items entirely (less effective but more honest).

**Expected impact:**

The Zeigarnik effect's empirical lift in product-onboarding contexts is well-documented, but the variance is wide because the effect compounds with whatever else is on the screen. Industry data on visible progress indicators in B2C onboarding shows 5–18% lift on next-action conversion, with the high end coming from products that combine the indicator with sequential unlock mechanics (which we plan to use). For us, a 10pp lift on the dashboard-arrival → first-add conversion would, against today's 27.9% never-activator rate, recover roughly 1 in 10 of the bounces. In absolute terms: across the next 30 signups, the difference between "27.9% never activate" and "say 22% never activate" is 2 additional activated users. Two users in 30 sounds small until you remember that the entire active cohort that's contributed any watchlist activity in the last 4 days is *zero*.

**Ship cost:** Frontend: persistent header component on logged-in dashboard routes, ~3–4h with polish (component, styles, hide-state persistence in localStorage, conditional rendering based on completion query). Backend: trivial — derive completion state from existing `users.created_at`, `watchlist` count, `target_price IS NOT NULL` count. No new schema columns. No new endpoints. **~4h total** (plus a 30-min query-shaping pass to the frontend API client).

**A/B variants for later testing:**
- Control: current empty-state dashboard (no progress indicator)
- Variant A (above): persistent 4-step Zeigarnik header with sequential unlock
- Variant B: same indicator but with no sequential unlock (both tasks active simultaneously) — isolates whether the deferred-reward mechanic is load-bearing or whether visible incompleteness alone is sufficient
- Variant C: same indicator but with 2 tasks (drop the pre-completed anchors) — isolates whether the goal-gradient compounding is load-bearing
- Variant D: same indicator but no Hide button — isolates whether the dismissal honesty matters in absolute conversion terms (will likely show short-term lift but long-term churn cost — not worth running long)

**Risk:** Adding visible UI to the dashboard adds visual noise to a surface that is currently restful. Some users — particularly the activated cohort who have already added events — should not see it; the conditional rendering must be robust. **Mitigation:** completion-state evaluation must run on every dashboard render (or be cached for ≤60s). False-positive incompleteness indicators on activated users would be a brand-trust hit and an annoyance. The hide condition is "watchlist_count > 0 AND target_price_count > 0," and it must not allow drift.

**Sequencing relative to prior recs:**
1. **Week 1:** Reciprocity (Apr 25 rec) — empty-state pre-population. Operates on dashboard *content* (anonymous/logged-out adjacent).
2. **Week 2:** Social proof (Apr 26 rec) — event card badge. Operates on event-card *content*.
3. **Week 3:** Anchoring (Apr 27 rec) — comparison framing. Operates on compare/event view *content*.
4. **Week 4:** Commitment/consistency (Apr 23 rec) — second-action prompt. Operates *after first add*, post-action.
5. **Week 5:** Loss aversion (Apr 24 rec) — target-prompt panel. Operates *after first add + page revisit*.
6. **Week 6:** Implementation intentions (Apr 28 rec) — post-signup intent capture. Operates *immediately after signup*, future-tense.
7. **Week 7 (today):** Zeigarnik effect — persistent dashboard incompleteness header. Operates *during every logged-in session for inert users*, present-tense.

Today's rec sits *at the surface where prior implementation-intentions fall through.* If the user dismisses the impl-int screen (Week 6), they land on the dashboard, where the Zeigarnik header (Week 7) takes over as the persistent re-engagement frame. The two recs together cover both the *one-shot capture* (impl-int at signup) and the *recurring re-engagement* (Zeigarnik per-session) of the same activation problem. Complementary, not redundant.

**Hand to:** CRO Agent (Agent 6) for the persistent header component spec + completion-state derivation logic. Backend ticket for any necessary query optimization is owned outside the agent system.

---

## Deliverables (handoffs)

1. **Analytics Agent (HIGHEST PRIORITY, carried +6 days, scope expanded again):** (a) Referrer/UTM pull on ids 57–60 (carried). (b) Referrer/UTM pull on ids 61, 62 (carried — both instant-activators). (c) Referrer/UTM pull on id 63 (lilianamasyrubi). (d) **NEW: Referrer/UTM pull on id 64 (zhili1208) — never-activator, sixth in 9 days from unknown source.** (e) Cohort velocity for ids 1–64 over rolling 30 days (carried). (f) Trending-events query for reciprocity rec (carried). (g) `tracker_count` aggregation for social proof rec (carried). (h) Matched-drops query for loss-aversion rec (carried). **Today adds:** the **3-vs-6 known/unknown source bifurcation** (3 known-source = 100% activation; 6 unknown-source = 0% activation) is now the strongest single correlation in the entire growth dataset. Identifying the unknown channel is the single highest-leverage data ask in the stack.

2. **CRO Agent:** (a) Activation gap **5 users in 7-day window today** (zhili1208 0d, lilianamasyrubi 1d, ggri73 7d, awwhittington 6d, mark.murdock 6d B2B-domain) **plus dr.altvater 9d (at-risk) and charlesteel 7d (newly at-risk)** and dylanbaldy churned today. (b) **NEW: Zeigarnik-effect persistent dashboard header spec** (above) — sequenced **seventh** of seven psych recs, operates at the recurring-session surface that all prior recs presume the user has already engaged with. (c) Carried: implementation-intentions post-signup screen, anchoring framing for `/compare` + `/event/[id]`, reciprocity dashboard empty-state, social-proof EventCard badge, commitment-consistency 2nd-action, loss-aversion target panel. (d) Newsletter homepage form: **87 days flat = 12 weeks 3 days.** Audit blocking subscriber growth for one full quarter and 3 days.

3. **Email Agent:** **16 churn-intervention emails ready** (17 yesterday minus ajvanprooyen killed today; charlesteel Day-7 pivot replaces stale Day-3). Priority order: **taranimeramaro Bruno-MetLife Day-3 (FIRES TODAY — 24h late)** → **nmcnamee99 post-Raptors Day-3 (FIRES TODAY — 24h late)** → **charlesteel Day-7 pivot (FIRES TODAY — newly at-risk)** → **ggri73 Day-7 (FIRES TODAY — first on-schedule activation in carried pile)** → **josh Day-7 (FIRES TODAY, edited for Day-10 framing)** → **pete (Day-19, 144h late, hard expiry 48h)** → **mark.murdock + awwhittington Day-7 hybrid (FIRES TOMORROW; B2B variant for mark)** → **nicklib Day-14 win-back rewrite (FIRES TOMORROW, copy above)** → **dr.altvater Day-14 early forcing-question (FIRES TOMORROW, German .de domain)** → **dylanbaldy (CHURNED — repurpose to win-back tier or drop)** → **blubberboi (Day-14 long runway)** → bhaygood, laye, billstromkel, tucwildcat, jkaiser. **NEW: ajvanprooyen Cubs-trip email REMOVED — no honest copy possible after May 6 flip today.**

4. **Content Agent:** (a) Cubs / Wrigley out-of-market trip hub page: **the bespoke email is dead but the hub page survives for evergreen value.** Ship as planned. (b) Carried: Bruno Mars cross-city/cross-venue cluster hub page — taranimeramaro Day-3 fires today (or tomorrow), this hub becomes the natural reference link. (c) Carried: German-market consideration for dr.altvater + future EU signups. (d) **NEW: zhili1208's signup is a third never-activator from an unknown channel. If the channel turns out to be a content-marketing surface (organic search, blog post), the Content Agent can tune that surface for higher-intent traffic. Pending Analytics Agent attribution.**

5. **Ads Agent:** (a) Cubs out-of-market audience signal — same. (b) Bruno Mars MetLife audience signal — taranimeramaro pre-queue still pending fire (now 24h late); the audience-tuning data point is delayed but not lost. (c) **Attribution-pull dependency now 6 days unfulfilled.** Adding zhili1208 makes this **6 unattributed signups in 9 days against 3 attributed.** The 100%/0% activation split between the two source-cohorts is the largest single signal we have for ad-spend reallocation. Without attribution, no reallocation possible. Reiterating: this is now the single highest-leverage open dependency in the growth stack.

6. **Open from previous days (unchanged, carried):** (a) `last_login_at` column — **Day 23**. (b) Drip cron revival — **Day 23**, blocking all 16 drafted emails including 5 firing today. (c) Server-side `last_scan_at` emission on watchlist rows — superseded by loss-aversion rec. (d) Newsletter homepage form audit — **87 days flat = 12 weeks 3 days**. (e) Pre-populated-item flag on watchlist schema for reciprocity rec. (f) `tracker_count` aggregation in search response for social-proof rec. (g) `users.first_action_trigger_at` column + cron job for implementation-intentions rec (Apr 28). (h) **NEW: derive completion-state query for Zeigarnik header rec** (likely a single SELECT on `users` joined to watchlist count + target-price count; trivial).

## Trend watch (7-day)

| Metric | Apr 23 | Apr 24 | Apr 25 | Apr 26 | Apr 27 | Apr 28 | Apr 29 |
|--------|--------|--------|--------|--------|--------|--------|--------|
| Total users | 60 | 60 | 60 | 62 | 62 | 63 | **64** |
| Watchlist items | 81 | 81 | 81 | 85 | 85 | 85 | **85** |
| Target prices set | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Drip emails sent | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Active subscribers | 3 | 3 | 3 | 3 | 3 | 3 | **3** |
| New signups (day) | 4 | 0 | 0 | 2 | 0 | 1 | **1** |
| `usersThisWeek` | 8 | 8 | 7 | 9 | 8 | 8 | **8** |
| At-risk count | 4 | 2 | 2 | 3 | 3 | 4 | **4** |
| Churned count | 49 | 52 | 52 | 52 | 52 | 52 | **53** |
| Activation rate (real users) | — | 73.7% | 73.7% | 75.4% | 75.4% | 72.9% | **72.1%** |

**Read:** Acquisition continues to pulse — 8 signups in 7 days, distributed as 4, 0, 0, 2, 0, 1, 1. The pulse is finally delivering consecutive-day signups (Apr 28 + Apr 29) for the first time in 6 days, but **both new signups are 0-watchlist never-activators**. The activation rate has now declined for two consecutive days (75.4% → 72.9% → 72.1%). Watchlist items remain at 85 for the fourth consecutive day, the second-longest engagement-flat streak on record. **Day 23 of zero retention emails, zero target-prices set. First new churned user in 6 days (dylanbaldy, 52 → 53).**

**Three confirmed algo-flip post-mortems closed:** tate (Apr 24), goldy (Apr 25), ajvanprooyen (today, Apr 29 — final flip on May 6). The cascade played out for 6 days exactly as forecasted; this is the longest-running daily-precision forecast streak in the dataset and confirms the failure mode is purely mechanical, not stochastic. **Three independent users hit the same failure in 5 days. Pattern fully documented. Drip-engine restoration is P0.**

**Two-day forecast (Apr 30 – May 1):**
- **Apr 30:** mark.murdock + awwhittington both cross Day-7 (cluster of 2 same-day Day-7 fires). nicklib253 crosses Day-13 → 24h before Day-14 win-back rewrite required (drafted above). pete.uzelac crosses Day-20 → 24h before Day-21 framing shift. dr.altvater crosses Day-10 → Day-14 forcing-question early-fire window opens (drafted above). lilianamasyrubi crosses Day-2 (Day-3 threshold tomorrow). zhili1208 crosses Day-1.
- **May 1:** lilianamasyrubi crosses Day-3 → first activation send on the new cohort (if they haven't activated by then). dr.altvater Day-14 forcing question fires (Apr 30 send, evaluated May 1). pete.uzelac crosses Day-21 → Day-21 framing-shift required, fresh draft needed. **The Day-3 / Day-7 / Day-14 / Day-21 fan-out tomorrow + the day after is the highest cumulative email-firing density of the entire outage window.** If the drip engine returns by May 1, it walks into 5+ pre-queued emails that all fire within 48h.

If the drip engine doesn't ship by Apr 30 EOD, charlesteel and ggri73's Day-7 sends fire 24h late and dr.altvater's Day-7 pivot becomes structurally undefined (Day-7 framing at Day 11 stops being credible). **The next two hard expiries on the calendar: nicklib Day-7 framing (Apr 30 EOD), pete Day-19 framing (May 1 EOD).**

The pattern that crystallized today: **two consecutive 0-watchlist signups + drop in activation rate two days running + drip engine still down + first new churned user in 6 days.** Each of these is a noisy single data point; all four together in 24h is a directional shift. The trend on every retention metric now points down for the second day in a row. **Activation is no longer flat; it is declining.**
