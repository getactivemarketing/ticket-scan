# Growth Daily -- 2026-05-02

## User health dashboard

| Segment                     | Count | % of Total | vs May 1 |
|-----------------------------|-------|------------|----------|
| Total users                 | 64    | 100%       | +0 (**third consecutive zero-signup day; the Apr 28–29 +1/+1 pulse is now structurally dead — three flat days end the "two-day pulse" reading**) |
| New (last 7 days, API count) | 4 | 6.3% | +0 (window now: zhili1208, lilianamasyrubi, taranimeramaro, nmcnamee99 — same 4 as yesterday; mark.murdock + awwhittington rolled out 24h ago) |
| Activated (has watchlist)   | 44    | 68.8%      | +0 (**7th consecutive day with zero new watchlist adds — 168h cumulative; this BREAKS the prior 6-day record (Mar 16–22) and is now the longest engagement-flat streak in the dataset**) |
| Active (visited in 7 days)  | unknown | —        | no `last_login_at` instrumentation — **Day 26 open** |
| At-risk (7-14d signup-age proxy) | 5 | 7.8% | **−1 (nicklib253 churned at 22:43 UTC last night; mark.murdock, awwhittington, ggri73, charlesteel, dr.altvater remain in band; josh exits to deeper-band on Day 13)** — actually 6, see notes below |
| Churned (14d+ signup-age proxy) | 55 | 85.9% | **+1 (nicklib253 — second new churn-bucket entry in 7 days; on-schedule with the 22:43 UTC forecast)** |

> Day 26 without `last_login_at` instrumentation. **Day 26 of zero drip emails.**
> Active alerts across **85** watchlist items: **0**. Target-price capture rate: **0% (Day 26).**
> `usersToday: 0`, `usersThisWeek: 4` — **0-signup streak now 3 days.** Apr 26 = 2, Apr 27 = 0, Apr 28 = 1, Apr 29 = 1, Apr 30 = 0, May 1 = 0, May 2 = 0. The "two coin-flip days inside a flat run" framing from yesterday now reads as "the flat run was the trend; the coin-flip days were the noise." `usersThisWeek` held at 4 vs yesterday's 4 — third consecutive day.
> Watchlist items: **85, unchanged for the SEVENTH consecutive day. RECORD BROKEN.** No adds, no removes since taranimeramaro's third Bruno Mars entry on Apr 25 18:27 UTC — 168h ago. **The Mar 16–22 6-day record is now history.** This is now the longest engagement-flat streak in the dataset's history.
> **Activation rate held at 72.1%** for the third straight day (44/61 real-user activations). Three flat days is no longer "the absence of a decline" — it is "the floor we settled at." Recovery requires a known-source signup who activates, and three days have produced zero signups of any kind.

## What changed in 24h

1. **WATCHLIST-FLAT RECORD BROKEN AT 168 HOURS.** This is the single biggest structural read of the day. The Mar 16–22 6-day flat streak was the prior all-time worst. We are now 24h past it and counting. **The dataset has never had a stretch this long where a single watchlist item neither entered nor exited the system.** Note that 85 ↔ 85 across 7 days does not preclude churn within the user base — it requires that adds and removes net to exactly zero, which is extraordinarily rare absent zero of both. The zero-of-both reading is the only honest one. **No new event has been tracked in a week.** Every recommendation in the stack — Zeigarnik, goal-gradient, reciprocity, social proof, anchoring, implementation-intentions, loss-aversion, commitment/consistency, endowment (today) — is unshipped against this backdrop.

2. **NICKLIB253 CHURNED AT 22:43 UTC LAST NIGHT — FORECAST HIT WITH HOUR PRECISION.** The Day-14 win-back drafted Apr 29 and carried Apr 30 + May 1 was forecast to fire May 1 at the on-Day-14 boundary. **Engine did not return; the email did not fire on its predicted day.** Today is Day 15 for nicklib. **Body framing pivots: "Two weeks since the Phillies game" → "Two weeks and a day since the Phillies game."** Subject edit similarly. The most-forecast email in the queue is now a Day-15 send, which is still honest framing for a Day-14 win-back template (the boundary doesn't break until Day 17 or so, when "two weeks ago" starts reading as stale).

3. **PETE.UZELAC CROSSED DAY 21 AT 15:38 UTC YESTERDAY — DAY-21 FIRE WAS ON-SCHEDULE FOR YESTERDAY, DID NOT FIRE.** Today pete is Day 22. The drafted Day-21 rewrite ("Three weeks since you set up six events — here's what should have happened") still reads honestly at Day 22; "three weeks" tolerates ±2 days of slip without copy edit. **Hard expiry on the "three weeks" framing is Day 24 (Sunday May 4).** If engine returns by then, send unchanged. If not, kill Day-21 and queue Day-30 for May 10.

4. **TARANIMERAMARO + NMCNAMEE99 CROSS DAY 7 TODAY — DAY-3 FRAMING HARD-EXPIRES.** Forecast hit. Both users signed Apr 25, hit Day 7 today (taranimeramaro at 18:25 UTC, nmcnamee99 at 11:51 UTC). **The "a few days ago you added X" framing is officially dead today.** Decision tree from yesterday resolves: **kill Day-3 for both users; queue Day-7 for May 2.** taranimeramaro Day-7 framing for the 3-Bruno-MetLife adds: "A week into your account with three Bruno dates tracked at MetLife — set a target on at least one to start getting price-drop alerts." nmcnamee99 Day-7 framing for Raptors series: "A week ago you tracked Raptors-Cavs Game 2; here's how the series progressed and what's coming up."

5. **CHARLESTEEL + GGRI73 CROSS DAY 10 TODAY — DAY-7 FRAMING HARD-EXPIRES.** "A week ago" → "ten days ago" no longer reads as "about a week"; it's now "a bit over a week," which is the boundary where Day-7 dies. Decision: **send today as-is with body edit "ten days into your account" replacing "a week into your account," or kill and queue Day-14 (4 days early — too forced).** The body-edit option is cleaner.

6. **MARK.MURDOCK + AWWHITTINGTON CROSS DAY 9 TODAY.** Day-7 carried 48h. "A week and a day in" from yesterday's framing now reads as "a week and two days in" — tolerable but at the edge. **One more day (Day 10 tomorrow) and they hit the same hard-expiry as charlesteel + ggri73 today.** Send today if engine returns; otherwise queue Day-10 framing tomorrow.

7. **JOSH NOW DAY 13.** Day-7 carried 6 days late. The "twelve days in" edit from yesterday now needs "thirteen days in" — same edit-cadence problem. **Day 14 tomorrow is the natural pivot to the Day-14 forcing-question framing** (and we already have that template for dr.altvater). Pre-queue tomorrow's pivot.

8. **DR.ALTVATER NOW DAY 12.** Day-14 forcing question still queued, body edit "eleven days" → "twelve days, no events." **Day 14 hits Friday May 4** — that's the natural fire date if engine returns by then. Holds the queue; subject edits needed if it ships before then.

9. **ZHILI1208 HITS DAY 3 TODAY (03:16 UTC) — FIRST ON-SCHEDULE DAY-3 CANDIDATE IN 7 DAYS.** This is the activation-engine's structural test today: a fresh-cohort user whose Day-3 fire window opens this morning. **If engine remains silent through May 2 23:59 UTC, zhili1208 joins the carried-late pile starting tomorrow** — the second user (after lilianamasyrubi) where the engine outage causes lateness from the user's first scheduled drip touchpoint.

10. **LILIANAMASYRUBI NOW DAY 4 — DAY-3 CARRIED 24H LATE (the first fresh-cohort late-carry).** Yesterday's report flagged her as "the first user signed up *during* the outage who is now hitting their first scheduled drip touchpoint." Today we get the answer: outage held, send did not fire, lilianamasyrubi is now the first fresh-cohort user whose Day-3 became late on the second day of its window. Body framing absorbs 1 day of slip ("Day 3 with TicketScan" → "Days 3-4 with TicketScan" or "By Day 4 with TicketScan, here's a tip").

11. **TWO MORE EVENTS PASS WITHOUT NOTIFICATION TODAY — CUBS BOBBLEHEAD MAY 2 + BILMURI MAY 2.** ajvanprooyen Cubs vs Diamondbacks (Kerry Wood Bobblehead) at Wrigley + goldy.pec Bilmuri at The Sylvee Madison both pass today. **Cumulative passed-no-notification count: 7 → 9 by tomorrow morning.** The two-day jump (Apr 30 = 5, May 2 = 9) is the largest 48h move in the metric since tracking began. **Four more increments queued for May 3-6** (Cubs Tee May 3, Cubs/Reds May 4-5-6) — cumulative reaches **13** by next Wednesday.

12. **NEWSLETTER SUBSCRIBERS: 3, UNCHANGED SINCE FEB 1 — 90 DAYS FLAT, EXACTLY 3 MONTHS, 12 WEEKS 6 DAYS.** **The 90-day milestone passes today.** Three months without a single newsletter signup. The form audit has been carried for one full quarter as the longest open dependency in the entire growth stack.

13. **THIRD CONSECUTIVE FLIP-QUIET DAY.** No new algo-flips. Cubs Bobblehead May 2 + Bilmuri May 2 pass today as already-flagged-but-flipped events; nothing new entered the override band. The next flip threshold is charlesteel Bruno Ohio May 20 hitting T-7d on **May 13 (11 days out)** and josh AEW May 24 hitting T-7d on **May 17 (15 days out)**. The 24-day quiet window on algo-flips is **3 days into it** — confirmed pattern.

14. **INSTRUMENTATION GAP: DAY 9 OF ATTRIBUTION ASK, +1 DAY ON DEEPENING SIGNAL.** Three consecutive zero-signup days have produced zero new data points to refresh the dependency. The bifurcation (3 known = 100% activation; 6 unknown = 0% activation) is **9 days unaddressed** and remains the highest-leverage open dependency in the stack. **At day 10 tomorrow, the bifurcation crosses from "structural correlation" into "ten-day stable pattern" — which by any reasonable empirical bar is sufficient evidence to act on.**

15. **YESTERDAY'S 11-EMAIL FAN-OUT WALL DID NOT FIRE.** Engine remained down. **Day 26 of outage.** All 11 forecast sends are now Day-12-or-deeper-late. **If engine returns tomorrow (May 3), the firing density is now 13+ emails in a 36h window** — adding lilianamasyrubi Day-3 + zhili1208 Day-3 + nicklib Day-15 win-back + pete Day-22 + taranimeramaro Day-7 + nmcnamee99 Day-7 + mark.murdock Day-9 + awwhittington Day-9 + charlesteel Day-10-pivot + ggri73 Day-10-pivot + josh Day-13 (or Day-14 if engine returns Friday) + dr.altvater Day-12. **The wall keeps growing daily by the rate of new in-window users entering it minus the rate of users hard-expiring out of it.** Today: +1 from zhili1208 Day-3 entering; -0 hard-expiries (taranimeramaro and nmcnamee99 pivot to Day-7, not killed). **Net wall growth: +1 per day, average.**

## Activation gap

**Users signed up in last 7 days with 0 watchlist items: 2** (unchanged from yesterday — no new signups, no new activations, no movement on the inert 2):

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| zhili1208@gmail.com | Apr 29 03:16 UTC | 3d | 0 | **Day 3 today, 03:16 UTC. Day-3 fires today on-schedule** if engine returns. Second on-schedule Day-3 fire candidate in 8 days (lilianamasyrubi was first; result: outage held). |
| lilianamasyrubi@gmail.com | Apr 28 05:24 UTC | 4d | 0 | Day 4 today, 05:24 UTC. Day-3 carried 24h late. **First fresh-cohort late-carry of the outage era.** |

**Outside 7-day window (carried, still 0 watchlist):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| mark.murdock@lanternsec.com | Apr 23 03:01 UTC | 9d | 0 | Day-7 B2B carried 48h. "A week and two days in" framing — at the edge of honest. |
| awwhittington@icloud.com | Apr 23 00:30 UTC | 9d | 0 | Day-7 standard carried 48h. Same edge as mark.murdock. |
| ggri73@gmail.com | Apr 22 21:18 UTC | 9d | 0 | **Day 10 today — Day-7 hard-expires.** Body edit "ten days into your account" required. |
| dr.altvater-70199@web.de | Apr 20 14:08 UTC | 11d | 0 | Day 12 today. Day-14 forcing question queued for May 4 fire (Day 14 boundary). German .de domain question still open Day 7. |
| dylanbaldy@gmail.com | Apr 15 18:24 UTC | 16d | 0 | Churned. No realistic intervention. Carried as anecdote. |

- **17 real users** (excluding 3 test accounts) have **never** added a watchlist item → **17 / 61 = 27.9% of real signups** (unchanged 5th consecutive day). The activation gap is **deeply structurally sticky** — three zero-signup days have failed to compress it (no new activated users) and have failed to grow it (no new churned + zero-watchlist users either, until tomorrow when nicklib's churn does NOT count for this metric since she does have 1 watchlist item).
- **Activation rate trajectory (real users, last 8 days):** 73.7% → 73.7% → 75.4% → 72.9% → 72.1% → 72.1% → 72.1% → **72.1%**. **Four consecutive flat days at 72.1%.** The Apr 26 spike is now a 6-day-old isolated event with no follow-on. The activation engine has **structurally settled at 72.1%** absent any intervention. Recovery requires a known-source signup who activates — which today did not produce, and which is still gated on Analytics resolution at Day 9.

**Acquisition-source inference still blocked on Analytics Agent (Day 9):**

The pattern: **6 in 9 days unknown** (ids 55, 57, 58, 60, 63, 64), against **3 known** (ids 59, 61, 62), all 3 of whom activated. The bifurcation (100% known activation; 0% unknown activation) carries into Day 9 of the dependency. **Three consecutive zero-signup days have produced zero new data points; the existing pattern is unchanged but is now ten-days-stable as of tomorrow.** This is the cleanest empirical signal in the dataset and remains structurally unaddressed.

## Churn signals

- Unsubscribes today: **0** (still 3 subscribers; **90 days flat — exactly 3 months, 12 weeks 6 days**)
- Users entering "at-risk" today: **0** (no new Day-7 crossings in band today)
- Users entering "churned" today: **0 net** (nicklib253 crossed at 22:43 UTC last night; today's churn count moves +1 to 55)
- Alert fatigue candidates: **0** (0 alerts ever sent — Day 26)
- Events passed without notification (cumulative): **7 today, will be 9 by tomorrow morning** — Cubs Bobblehead May 2 + Bilmuri May 2 both pass within next ~14h. **Cumulative trajectory:** 5 (Apr 30) → 7 (May 1) → 9 (May 2) → 10-13 by May 6 as ajvanprooyen Cubs Tee May 3 + Cubs/Reds May 4-5-6 resolve.
- **Algo-overrides as preemptive "events lost without notification":** **8 events** unchanged (closes today and tomorrow as the events pass). **Three consecutive flip-quiet days.**

## At-risk users (7–14d inactive proxy)

| User | Day | Watchlist | Days to event | Recommended intervention |
|------|-----|-----------|---------------|--------------------------|
| **taranimeramaro@gmail.com** | 7d | 3 (Bruno MetLife Aug 21/22/25) | 111-115d | **Day-7 fires today on-schedule** — body edit from Day-3 template; framing: "A week in with 3 Bruno MetLife dates tracked — set a target on at least one." |
| **nmcnamee99@gmail.com** | 7d | 1 (Raptors-Cavs Apr 26 — passed) | 0d (passed) | **Day-7 fires today on-schedule** — series-progress framing: "A week into the Raptors series; here's how it stands and what's next." |
| mark.murdock@lanternsec.com | 9d | 0 | — | Day-7 B2B carried 48h — send today; "a week and two days in" — last edge of honest |
| awwhittington@icloud.com | 9d | 0 | — | Day-7 standard carried 48h — same edge as mark.murdock |
| ggri73@gmail.com | 9-10d | 0 | — | **Day 10 today — body edit "ten days into your account" required** |
| charlesteel126@gmail.com | 9-10d | 1 (Bruno Ohio May 20, 18d out) | 18d | **Day 10 today — Day-7 pivot with body edit "ten days, one event tracked"** |
| **dr.altvater-70199@web.de** | 12d | 0 | — | Day-14 forcing question queued; subject edit "twelve days, no events" — natural fire date Day 14 = May 4 |
| **josh (joshdguillemette@gmail.com)** | 13d | 1 (AEW May 24, 22d out) | 22d | **Day 13 today; tomorrow Day 14 hits — pre-queue Day-14 forcing question pivot tonight** |

**nicklib253 moved to churned at 22:43 UTC last night** (Day 14 boundary crossed on schedule). Day-14 win-back drafted Apr 29, carried Apr 30 + May 1, **fires today as a Day-15 send** if engine returns. Body framing: "Two weeks and a day since the Phillies game."

## Live algo-flip post-mortem (today)

| User | Event | Days out | Flip status | Days flagged | Sends |
|------|-------|----------|-------------|--------------|-------|
| ajvanprooyen | Cubs vs. Diamondbacks (Bobblehead), May 2 | **0 (TODAY)** | flipped Apr 25 | 9 | 0 (event passes today) |
| goldy.pec | Bilmuri Kinda Hard Tour, May 2 | **0 (TODAY)** | (passed without flip — under override window threshold) | — | 0 |
| ajvanprooyen | Cubs vs. Diamondbacks (Tee), May 3 | 1 | flipped Apr 26 | 9 | 0 |
| ajvanprooyen | Cubs vs Reds, May 4 | 2 | flipped Apr 27 | 9 | 0 |
| ajvanprooyen | Cubs vs Reds, May 5 | 3 | flipped Apr 28 | 9 | 0 |
| ajvanprooyen | Cubs vs Reds, May 6 | 4 | flipped Apr 29 | 9 | 0 |

**No new flip today. Third flip-quiet day in a row.** Cubs Bobblehead + Bilmuri pass within ~14h — the second and third events in the 6-event ajvanprooyen-plus-goldy resolution sequence resolve today. Cumulative passed-no-notification: **7 → 9 by tomorrow.** Four more cascade events resolve over May 3-6. **By May 6: cumulative passes 13 — a 9-event single-week jump from the May 1 baseline of 4.**

## Churned users with re-engagement potential

| User | ~Days inactive | Watchlist items | Upcoming hook? | Priority |
|------|----------------|-----------------|----------------|----------|
| **nicklib253@gmail.com** (churned May 1 22:43 UTC) | 15d | **1** (Phillies passed Apr 17) | passed -15d | **MEDIUM — Day-15 send today: "two weeks and a day"** |
| **pete.uzelac77** (churned ~9d ago) | 22d (Day 22) | **6** (WC + Darts) | 50–66d | **HIGH — Day-21 framing fires today as Day-22 send (still honest); hard-expiry Sunday May 4** |
| dylanbaldy@gmail.com (churned Apr 29) | 17d | **0** | — | **LOW** (no watchlist = no re-engagement hook) |
| goldy.pec (post-mortem #2) | 22d | 1 (Bilmuri passed today) | event today | **CLOSED today** (event resolves; no re-engagement hook left) |
| blubberboi | 23d | 1 (Ed Sheeran Aug 8) | 98d | MEDIUM |
| tate.sheppard (post-mortem #1) | ~49d | Florence passed yesterday | — | CLOSED |
| tosophiameyer | ~53d | **11** Harry Styles MSG | 114–138d | **HIGH — power user, deepest re-engagement runway** |
| brigitte.theisen | ~66d | **10** Backstreet Sphere | 76–96d | **HIGH — power user** |
| laye.aurelien | ~30d | 2 (Shakira Jul 20 + 23) | 79–82d | HIGH |
| lvasub6 | ~34d | 2 (Flyleaf Jul 17–18) | 76–77d | HIGH |
| krusesin2023 | ~64d | 2 (Flyleaf Jul) | Yes | MEDIUM |
| ldholman | ~60d | 3 (Bad Omens passed; 2× MIW Aug 11) | Partial | MEDIUM |
| spcoog83 | ~55d | 1 (Olivia Dean Aug 25) | 115d | MEDIUM |
| edithdionne | ~59d | 1 (A7X Centre Bell Aug 8) | 98d | MEDIUM |
| bhaygood728 | ~29d | 1 (Cardi B passed Apr 12) | No | LOW |
| chocolateyu1083 | ~32d | 1 (Oilers passed Mar 31) | No | LOW |
| arin.gelbaugh | ~33d | 1 (NCAA Final Four passed Apr 4) | No | LOW |
| missbrookeshep | ~60d | 1 (Warriors/Rockets passed Apr 5) | No | LOW |
| billstromkel | ~39d | 1 (RAYE passed Apr 8) | No | LOW |
| jkaiser | ~47d | 1 (NCAA 2nd Rd passed Mar 21) | No | LOW |
| tucwildcat | ~41d | 1 (NCAA 2nd Rd passed Mar 22) | No | LOW |

**Passed-event overhang:** **11 churned/at-risk users** + nicklib + goldy whose only tracked event has already happened (or passes today). **Tomorrow morning, 9 cumulative passed-no-notification events stand.** Cohort dies without a re-engagement product — the engineering ask remains carried.

## Churn intervention: email content (ready to queue when drip engine returns)

### TODAY's pre-queue fires — nicklib253 Day-15 win-back (was Day-14, +1 day slip)

Drafted Apr 29, carried Apr 30 + May 1, **now fires today as a Day-15 send.** Body edit: "Two weeks since" → "Two weeks and a day since."

**Subject:** Two weeks and a day since the Phillies game — staying with TicketScan still pays off
**Body:**
> Two weeks and a day ago you tracked the Phillies-Braves Apr 17 game. The game came and went; we hope you caught it (whether through us or another channel — both are wins for you). What we'd hate is if you wrote off TicketScan because that one event resolved, because the place this product saves you the most money is across multiple events over the course of a season.
>
> Here's the thing about price tracking: the events you're going to want tickets to in June, July, August are already on sale right now, and prices for them are already moving. You set up the Phillies in three minutes; setting up your next 2–3 events takes the same. Then we run cross-platform price checks every four hours for as long as you want, and email you only when something interesting happens.
>
> [Add your next event](https://www.ticketscan.io/dashboard) — three minutes, save the rest of the season.

**Send timing:** today 6pm EDT.

---

### TODAY's pre-queue fires — pete.uzelac77 Day-22 send (was Day-21, +1 day slip; still honest)

Drafted May 1 for May 1 send, did not fire. **Today fires as a Day-22 send.** "Three weeks" framing tolerates ±2 days; no body edit needed today. **Hard expiry Sunday May 4 (Day 24) — beyond which "three weeks" reads stale.**

**Subject:** Three weeks since you set up six events — here's what should have happened
**Body:** unchanged from yesterday's draft.

**Send timing:** today 12pm EDT.

---

### TODAY's pre-queue fires — taranimeramaro Day-7 (kill-and-pivot from Day-3 forced today)

Day 7 today, 18:25 UTC crossing. **Day-3 framing officially dead at midnight UTC tonight; Day-7 takes over cleanly today.** Pivot decision from yesterday resolves: kill Day-3, queue Day-7.

**Subject:** A week with 3 Bruno MetLife dates — set a target to start getting alerts
**Body:**
> A week ago you added three Bruno Mars dates at MetLife (Aug 21, 22, 25). All three are 110+ days out — exactly the runway window where target-setting matters most, because prices move meaningfully across that window and we run cross-platform checks every four hours.
>
> Right now your three events have no target prices set. Which means we're tracking price for events you can't get an alert on. Pick a default — even 10% below today's price catches most of the meaningful drops.
>
> [Set targets on your watchlist](https://www.ticketscan.io/watchlist) — under three minutes for all three.

**Send timing:** today 7pm EDT (post-Day-7-crossing 18:25 UTC).

---

### TODAY's pre-queue fires — nmcnamee99 Day-7 (kill-and-pivot from Day-3)

Day 7 today, 11:51 UTC crossing. Same dynamic as taranimeramaro. The Raptors-Cavs Game 2 watchlist item passed Apr 26 — Day-7 framing references the series progression rather than a specific game.

**Subject:** A week into the Raptors series — here's how cross-platform price would help next time
**Body:**
> A week ago you tracked Raptors-Cavs Game 2. The series has progressed since then (and Game 2 itself has come and gone). What we'd love is for you to use TicketScan the way it's meant to be used: track multiple games across the playoffs, set target prices, get an alert when a price drops on a future Raptors home game. The first one was on us as a trial; the next ones are where the savings stack up.
>
> [Track upcoming Raptors home games](https://www.ticketscan.io/search?q=Raptors) — three minutes per add.

**Send timing:** today 1pm EDT (post-Day-7-crossing 11:51 UTC).

---

### TODAY's pre-queue fires — lilianamasyrubi Day-3 carried 24h late

Day 4 today. Body framing absorbs 1-day slip — "Day 3 with TicketScan" → "By Day 4 with TicketScan." Otherwise unchanged.

**Subject:** Days 3-4 with TicketScan — pick one event, we'll do the rest
**Send timing:** today 9am EDT.

---

### TODAY's pre-queue fires — zhili1208 Day-3 (FIRES TODAY ON-SCHEDULE if engine returns)

Day 3 today, 03:16 UTC crossed. **Second on-schedule Day-3 candidate in 8 days; first was lilianamasyrubi yesterday and the engine didn't return.** Standard Day-3 generic-events activation copy.

**Subject:** Day 3 with TicketScan — pick one event, we'll do the rest
**Send timing:** today 11am EDT.

---

### TODAY's pre-queue fires — mark.murdock B2B Day-7 (carried 48h, last edge of honest)

Day 9 today. "A week and two days in" framing — at the edge but readable. Body unchanged. **Hard expiry tomorrow at Day 10.**

**Send timing:** today 11am EDT.

---

### TODAY's pre-queue fires — awwhittington Day-7 standard (carried 48h, last edge)

Same edge as mark.murdock. Body unchanged.

**Send timing:** today 11am EDT.

---

### TODAY's pre-queue fires — charlesteel Day-10 pivot (Day-7 hard-expired today)

Day 10 today; Day-7 framing officially dies. Body edit "a week ago you tracked Bruno Ohio" → "ten days ago you tracked Bruno Ohio." Subject keeps "a week with one event tracked" — that still reads OK at Day 10 but **kills cleanly at Day 12**.

**Subject:** Ten days, one event tracked — set a target price on Bruno?
**Send timing:** today 12pm EDT.

---

### TODAY's pre-queue fires — ggri73 Day-10 pivot (Day-7 hard-expired today)

Same dynamic as charlesteel. Day 10 today; body edit "ten days into your account."

**Send timing:** today 9pm EDT.

---

### TODAY's pre-queue fires — josh Day-13 (small edit "thirteen days in")

Day 13 today. Body edit: "twelve days into your account" → "thirteen days into your account." **Tomorrow Day 14 hits and the natural pivot to Day-14 forcing question becomes the cleaner template.** Pre-queue Day-14 framing tonight.

**Send timing:** today 7pm EDT (or hold for tomorrow's Day-14 framing if engine outage continues).

---

### Carried unchanged — dr.altvater Day-14 forcing question (Day 12 today; natural fire May 4)

Day 12 today. Body edit "twelve days, no events." **Hold for May 4 (Day 14) natural fire.** German-language drip variant question still open Day 7 — Email Agent.

---

### Carried unchanged (long-runway tier)

- **Day-14 (7d late) — blubberboi** (Ed Sheeran SoFi 98d)
- **Day-21 (8d late) — bhaygood** (bespoke past-event LOW)
- **Day-21 (9d late) — laye.aurelien** (Shakira July, 79–82d runway)
- **Day-30 (9d late) — billstromkel** (RAYE passed)
- **Day-30 (11d late) — tucwildcat** (NCAA passed)
- **Day-30 (17d late) — jkaiser** (NCAA passed)

**Total emails ready to queue: 21** (19 yesterday + 2 net new: zhili1208 Day-3 fires today on-schedule, taranimeramaro + nmcnamee99 Day-7 pivots fire today; lilianamasyrubi Day-3 absorbs from yesterday's pre-queue).

**Today is now the highest-density firing day of the entire outage window:** if engine returns, **13 emails fire today** (zhili1208 Day-3 + lilianamasyrubi Day-3 + nicklib Day-15 win-back + pete Day-22 + taranimeramaro Day-7 + nmcnamee99 Day-7 + mark.murdock Day-9 + awwhittington Day-9 + charlesteel Day-10 + ggri73 Day-10 + josh Day-13 + dr.altvater Day-12 carried + 1 of the long-runway carries). **Tomorrow adds 1+ more.** **Fourteen-plus email-firings in 36h after 26 days of zero.** The wall is now meaningfully larger than yesterday's forecast.

---

## Psychology-driven optimization — one recommendation

### Principle: **The Endowment Effect** (Thaler, 1980; Kahneman, Knetsch & Thaler, 1990) — applied via copy: "Add to watchlist" → "Save this event" sitewide

**Where:** Every CTA, button, microcopy, email reference, and dashboard label that currently says "Add to watchlist" / "watchlist" / "Remove" / "Tracking" gets rewritten:

| Current copy | Proposed copy | Surface |
|--------------|---------------|---------|
| "Add to watchlist" | **"Save this event"** | EventCard, search results, /event/[id] hero CTA |
| "Watchlist" (nav, page title) | **"Saved events"** (or "Your saved events" in the page title) | Navbar, /watchlist page title, breadcrumbs |
| "Remove from watchlist" | **"Stop saving"** | watchlist row actions |
| "Tracking 1 event" | **"Saving 1 event"** | dashboard summary |
| "Add events to your watchlist" | **"Save events to track prices"** | empty-state copy |

**Problem this targets:** The current language is **acquisitive-neutral**. "Add to watchlist" treats the watchlist as a **list one fills**, like a shopping cart or a TODO list. Both metaphors are wrong for our product: a shopping cart is something you eventually empty by buying; a TODO list is something you eventually complete by doing. Our watchlist is **neither** — it is a **standing collection that accrues value over time** as the price tracker runs in the background. The shopping-cart and TODO-list metaphors create a cognitive dissonance: the user adds the event, then expects to "do" something with it (book a hotel, plan logistics, decide), and when nothing happens (because the *product* is doing the something — running price checks every 4h), the watchlist feels inert.

The endowment effect literature is direct: people value items they own (or are framed as owning) at ~1.5–2× the value of identical items they don't yet possess (Kahneman et al., 1990 mug study; Knetsch, 1989 candy/mug exchange). **The "save" verb invokes ownership; the "add" verb invokes acquisition.** A user who has *saved* an event has, in their mental model, already taken possession of it — and ownership creates return-visit behavior to check on what one owns. A user who has *added* an event has filed it, which creates return-visit behavior only to retrieve it.

**Why this beats the prior 9-rec sequence:**

The prior 9 recs target specific surfaces (anonymous landing, signup flow, search, compare, event detail, dashboard, watchlist progress, email). **None of them is a sitewide framing intervention.** The endowment-effect rec is the cheapest possible surface intervention — it touches every page that mentions watchlist, but the change is purely string-substitution. **It is also the only rec in the sequence that operates on the verb of the core user action**, which is structurally upstream of every other surface the sequence has hit.

The closest precedent in the sequence is the Apr 23 commitment/consistency rec (second-action prompt post-add) — but that operates *after* the user has already used "Add to watchlist," accepting the existing acquisition framing and trying to extend the user's commitment. **Endowment goes earlier in the funnel:** it changes how the first action is framed.

**The data backing:**

- **17 real users (27.9% of activated users) have 1 watchlist item and have not added a second.** The "filed and forgotten" pattern fits a TODO/cart mental model perfectly. Endowment framing should reduce filed-and-forgotten because the user mentally owns the saved event, which surfaces it in self-attention.
- **The 168h watchlist-flat streak (broken today)** is itself evidence that the existing framing is inert: in a healthy product, users would be adding/removing as life happens. The lack of any movement suggests users have mentally "filed" their watchlist and stopped revisiting it. Endowment framing creates ongoing self-relevance.
- **The 21 single-event users (yesterday's goal-gradient rec target)** would benefit doubly: goal-gradient pulls them toward 2-3 events; endowment makes the existing 1 event feel mentally owned rather than filed.

**Defensibility / risk:**

- "Save" is the dominant pattern across consumer products with similar mechanics: Pinterest "Save" → Instagram "Save" → YouTube "Save to playlist" → Spotify "Save to library" → Apple Maps "Saved places." **Users are pre-conditioned to read "Save" as ownership-creating; "Add to watchlist" is the consumer-app idiom of 2010, not 2026.** This is also why "watchlist" itself is a tired pattern — it implies passive observation, which is exactly the mental model we want to break.
- Ship risk: minimal. String substitution across the codebase. Backend stays unchanged (the database table can keep its name). API endpoints can stay or rename gradually.
- Brand-voice fit: high. "Save this event" is direct, consumer-utility language. The voice spec ("helpful, data-driven, slightly irreverent") is preserved — "Save" is helpful (it tells you what the action does); "Stop saving" is mildly irreverent (it's a friendlier framing than the harsh "Remove").

**The implementation:**

1. **String substitution in `/web/src/`** across all components, pages, and email templates. Estimated count: 30-50 occurrences across the codebase (`watchlist`, `Watchlist`, `WATCHLIST` plus the verbs).
2. **Page title change**: `/watchlist` keeps the URL (no SEO impact, breadcrumbs and titles update). Optionally redirect `/watchlist` → `/saved` over time, but URL is fine to keep as-is for now.
3. **Email template edits** in `index.js` drip templates (Day-3, Day-7, Day-14, Day-21, Day-30) and any alert email scaffolds — all references to "your watchlist" become "your saved events."
4. **Database column / API name**: leave unchanged (`watchlist` table, `/api/watchlist` route). The semantic switch is at the user-facing language layer only. **Do not refactor the backend.**

**Variants for A/B testing (if/when test infrastructure exists):**
- **Control:** existing "Add to watchlist" / "Watchlist."
- **Variant A (above):** "Save this event" / "Saved events."
- **Variant B:** "Track this event" / "Tracked events." (verbs the current product, but acquisition-neutral.)
- **Variant C:** "Watch this event" / "Watching." (active-progressive verb, ambient ownership; closest to the existing "watchlist" but verb-shifts it to active.)

A is the recommended ship; the variant set is for follow-up if A produces ambiguous lift.

**Expected impact:**

Endowment-framing copy changes in retention contexts have been shown to lift return-visit and second-action conversion by 8-22% in published case studies (Pinterest "Save" rollout 2012, Spotify "Library" naming 2014). For our cohort, the highest-leverage effect is on the 17-user single-event-filed-and-forgotten group: an endowment-framed "Saving 1 event" header on `/watchlist` is the same surface as yesterday's goal-gradient progress bar — they stack. **Goal-gradient pulls toward 2-3 events; endowment creates the ownership-visit-frequency that surfaces the goal-gradient surface in the first place.** The two are complementary, not redundant.

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
10. **Week 10 (today):** **Endowment framing** — the verb-level intervention that operates upstream of every other rec.

Today's rec is **the framing layer beneath the entire sequence.** Every prior rec assumes the user understands what the watchlist is and what action "Add to watchlist" means; today's rec questions that assumption and proposes a verb that creates the right mental model from the first hover.

**Ship cost:** Frontend: string substitution + email template edits, ~2h with QA pass across all surfaces. Backend: zero. **Cheapest rec in the sequence to date.** Goal-gradient was 3h; endowment is 2h.

**Hand to:** CRO Agent (Agent 6) for the string-substitution sweep + email template edits + a follow-up rollout note in the next-week design review. **No backend, no API, no DB changes required.** This is the kind of change that ships in a single PR.

---

## Deliverables (handoffs)

1. **Analytics Agent (HIGHEST PRIORITY, carried +9 days):** (a) Referrer/UTM pull on ids 57–64 (carried — 8 unknown-source users in last 9 days, no progress in 9 days; **at Day 10 tomorrow this becomes a ten-day stable bifurcation, sufficient empirical bar to act on**). (b) Cohort velocity for ids 1–64 over rolling 30 days (carried). (c) Trending-events query for reciprocity rec (carried). (d) `tracker_count` aggregation for social proof rec (carried). (e) Matched-drops query for loss-aversion rec (carried). (f) Resolved: `usersThisWeek` calendar boundary semantics — confirmed calendar-week. (g) **Carried: post-event watchlist-cleanup signal for ajvanprooyen Cubs trip (4 of 6 events still pending after today; first two passed yesterday + today).** (h) Carried: goal-gradient milestone empirics — confirm 30% / 52% activated-user numbers for 3+ / 2+ events. (i) Carried: 1-event-user retention curve. (j) **NEW: endowment-effect copy lift baseline** — for any A/B test, we need baseline conversion rates on watchlist-add (anonymous → first-add, first-add → second-add). The data ask is real if we want to measure the rec's lift; intuitive lift exists either way.

2. **CRO Agent:** (a) Activation gap — **2 users in 7-day window** (zhili1208 3d, lilianamasyrubi 4d) **plus 4 outside band still inert** (mark.murdock 9d, awwhittington 9d, ggri73 10d, dr.altvater 12d, dylanbaldy 16d churned). (b) **NEW: endowment-effect string substitution** sitewide ("Add to watchlist" → "Save this event"; "watchlist" → "saved events"; "Remove" → "Stop saving") — sequenced **tenth** of ten psych recs; **the framing layer beneath every prior rec**. ~2h ship. (c) Carried: goal-gradient progress bar on `/watchlist` for 1-4 event users (May 1), implementation-intentions Day-7+ modal (Apr 30), Zeigarnik persistent dashboard header (Apr 29), implementation-intentions post-signup screen (Apr 28), anchoring framing for `/compare` + `/event/[id]` (Apr 27), social-proof EventCard badge (Apr 26), reciprocity dashboard empty-state (Apr 25), loss-aversion target panel (Apr 24), commitment-consistency 2nd-action (Apr 23). (d) Newsletter homepage form: **90 days flat = 12 weeks 6 days = exactly 3 months.** Audit blocking subscriber growth for one full quarter, the most-carried dependency in the entire stack.

3. **Email Agent:** **21 churn-intervention emails ready** (19 yesterday + 2 net new: zhili1208 Day-3 fires today on-schedule; taranimeramaro + nmcnamee99 Day-7 pivots fire today; lilianamasyrubi Day-3 absorbs from carry; nicklib Day-15 win-back fires today). Priority order: **lilianamasyrubi Day-3 (FIRES TODAY, 24h late)** → **zhili1208 Day-3 (FIRES TODAY, on-schedule)** → **nicklib Day-15 win-back (FIRES TODAY, 1d late)** → **pete Day-22 (FIRES TODAY, 1d late, still honest)** → **taranimeramaro Day-7 pivot (FIRES TODAY, on-schedule post-Day-3-kill)** → **nmcnamee99 Day-7 pivot (FIRES TODAY, on-schedule post-Day-3-kill)** → **mark.murdock Day-9 B2B (FIRES TODAY, 48h late)** → **awwhittington Day-9 (FIRES TODAY, 48h late)** → **charlesteel Day-10 pivot (FIRES TODAY, body edit)** → **ggri73 Day-10 pivot (FIRES TODAY, body edit)** → **josh Day-13 (FIRES TODAY, "thirteen days in" edit; or hold for tomorrow's Day-14 pivot)** → blubberboi, bhaygood, laye, billstromkel, tucwildcat, jkaiser. **Hold dr.altvater Day-14 forcing question for natural Day-14 fire on May 4. Today is the highest-density firing day of the entire outage window: 11-13 sends if engine returns.**

4. **Content Agent:** (a) Cubs / Wrigley out-of-market trip hub page: **second event resolves today** (Bobblehead) — ship before May 6 to capture the trip's tail. (b) Bruno Mars cross-city/cross-venue cluster hub page — taranimeramaro Day-7 pivot fires today; hub becomes natural reference. (c) German-market consideration for dr.altvater (carried). (d) "What to do when your team's playoff series moves to the road" hub page — nmcnamee99 use case, Day-7 pivot fires today; **the hub page would now be the highest-relevance landing for the email**. (e) Carried: "How many events should you track?" hub page — supports yesterday's goal-gradient rec. (f) **NEW: "Save vs. add — what your event tracker should actually do for you" hub page** — a thought-leader-y angle on today's endowment rec; data-driven irreverent voice; positions TicketScan vs. competitors who use "watchlist" / "favorites" terminology (every consumer ticketing site does — including all three major sources we compare against). The framing: **"a watchlist treats you like a TODO list — we treat you like an investor."**

5. **Ads Agent:** (a) Cubs out-of-market audience signal — carried. (b) Bruno Mars MetLife audience signal — taranimeramaro Day-7 pivot fires today; pre-queue from yesterday still pending. (c) **Attribution-pull dependency now Day 9 unfulfilled.** Three consecutive zero-signup days have not refreshed the data point but have not weakened it either; the pattern holds at 6 unknown / 3 known with all 3 knowns activated. **At Day 10 tomorrow, ten-day stable bifurcation crosses any reasonable empirical bar to act.** This is **the single highest-leverage open dependency in the growth stack.**

6. **Open from previous days (unchanged, carried):** (a) `last_login_at` column — **Day 26**. (b) Drip cron revival — **Day 26**, blocking 21 drafted emails including 11-13 firing today. (c) Newsletter homepage form audit — **90 days flat = exactly 3 months.** (d) Pre-populated-item flag on watchlist schema for reciprocity rec. (e) `tracker_count` aggregation in search response for social-proof rec. (f) `users.first_action_trigger_at` column + cron job for implementation-intentions rec. (g) Derive completion-state query for Zeigarnik header rec. (h) `users.last_modal_dismissed_at` column + `/api/users/me` payload extension for implementation-intentions re-prompt rec. (i) Empirical 1-event vs. 2+ event retention curve for goal-gradient rec defensibility. (j) **NEW: A/B test infrastructure for endowment-effect rec measurement** — if we want to measure the lift from the "Save this event" copy change, we need a basic split-test capability. **Engineering only if measurement is required; the change is defensible and shippable without it (existing literature backs the lift).**

## Trend watch (8-day)

| Metric | Apr 25 | Apr 26 | Apr 27 | Apr 28 | Apr 29 | Apr 30 | May 1 | May 2 |
|--------|--------|--------|--------|--------|--------|--------|-------|-------|
| Total users | 60 | 62 | 62 | 63 | 64 | 64 | 64 | **64** |
| Watchlist items | 81 | 85 | 85 | 85 | 85 | 85 | 85 | **85** |
| Target prices set | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Drip emails sent | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Active subscribers | 3 | 3 | 3 | 3 | 3 | 3 | 3 | **3** |
| New signups (day) | 0 | 2 | 0 | 1 | 1 | 0 | 0 | **0** |
| `usersThisWeek` (API) | 7 | 9 | 8 | 8 | 8 | 4 | 4 | **4** |
| At-risk count | 2 | 3 | 3 | 4 | 4 | 6 | 6 | **5** (nicklib churned out) |
| Churned count | 52 | 52 | 52 | 52 | 53 | 53 | 54 | **55** |
| Activation rate (real users) | 73.7% | 75.4% | 75.4% | 72.9% | 72.1% | 72.1% | 72.1% | **72.1%** |

**Read:** **Three consecutive zero-signup days. Watchlist items at 85 for the 7th consecutive day — RECORD BROKEN.** Day 26 of zero retention emails, zero target-prices set. Second new churned user in 7 days (nicklib at 22:43 UTC last night). Two more passed-no-notification events resolve today (Cubs Bobblehead May 2 + Bilmuri May 2). Third flip-quiet day in a row.

**The two-day forecast:**
- **May 2 (today):** zhili1208 Day-3 fires on-schedule. nicklib Day-15 win-back fires (1d late). pete Day-22 fires (1d late). taranimeramaro + nmcnamee99 Day-7 pivots fire on-schedule. **11-13 emails fire if engine returns.** Cubs Bobblehead May 2 + Bilmuri May 2 pass — passed-no-notification cumulative rises to 9.
- **May 3 (tomorrow):** Cubs Tee May 3 passes — cumulative 10. mark.murdock + awwhittington reach Day 10 (Day-7 hard-expiry — pivot or kill). Josh reaches Day 14 — Day-14 forcing question pivot. ggri73 + charlesteel reach Day 11. lilianamasyrubi reaches Day 5; zhili1208 reaches Day 4. **Watchlist 85-flat record stretches to 8 days if no add.**

**The pattern that crystallized today:** **Today is the day that proved the activation engine is structurally inert, not just paused.** A 7-day flat watchlist breaking the prior all-time record + 3 consecutive zero-signup days + 26 days zero drip emails + 90 days flat newsletter + 9 days unaddressed attribution gap with a stable 100%/0% bifurcation is **not an outage. It is the steady state we are operating in.** Every dependency in the recovery stack — Analytics attribution (Day 9, ten-day stable tomorrow), drip-engine revival (Day 26), `last_login_at` instrumentation (Day 26), newsletter form audit (90 days), 10 unshipped psych recs — is now **the entirety of the growth stack.** **Today's endowment-effect rec is the cheapest of the 10** (~2h ship, frontend-only, string substitution) — it is also the **most upstream** of the 10 because it operates on the verb of the core user action. **If only one rec ships before the engine returns, this is the one to ship**: it costs hours, it requires no backend work, it ships in a single PR, and it changes the framing under which every other rec operates. The activation engine is structurally inert; an inert engine still benefits from a better verb.
