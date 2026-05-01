# Growth Daily -- 2026-05-01

## User health dashboard

| Segment                     | Count | % of Total | vs Apr 30 |
|-----------------------------|-------|------------|-----------|
| Total users                 | 64    | 100%       | +0 (second consecutive zero-signup day; **the Apr 28 + Apr 29 pulse looks more like 2-day noise inside a flat baseline now**) |
| New (last 7 days, API count) | 4 | 6.3% | +0 (window holds the same 4: zhili1208, lilianamasyrubi, taranimeramaro, nmcnamee99 — mark.murdock + awwhittington roll out at Day 8 today) |
| Activated (has watchlist)   | 44    | 68.8%      | +0 (**6th consecutive day with zero new watchlist adds — 144h cumulative; this NOW ties the prior record (Mar 16-22, 6 days) and 24h from breaking it**) |
| Active (visited in 7 days)  | unknown | —        | no `last_login_at` instrumentation — **Day 25 open** |
| At-risk (7-14d signup-age proxy) | 6 | 9.4% | +0 net (**nicklib crosses Day 14 and rolls into churned at 22:43 UTC tonight**; mark.murdock, awwhittington, ggri73, charlesteel, dr.altvater, josh remain in band) |
| Churned (14d+ signup-age proxy) | 54 | 84.4% | **+1 (nicklib253 — first new churn-bucket entry in 6 days; predicted yesterday with intra-hour precision)** |

> Day 25 without `last_login_at` instrumentation. **Day 25 of zero drip emails.**
> Active alerts across **85** watchlist items: **0**. Target-price capture rate: **0% (Day 25).**
> `usersToday: 0`, `usersThisWeek: 4` — **0-signup streak now 2 days.** Apr 26 = 2, Apr 27 = 0, Apr 28 = 1, Apr 29 = 1, Apr 30 = 0, May 1 = 0. The "two-day pulse" framing from yesterday now reads as "two coin-flip days inside a longer flat run." `usersThisWeek` held at 4 vs yesterday's 4 — confirms the Apr 30 8→4 drop was a calendar-week boundary, not a buggy metric (signups in band are ids 61, 62, 63, 64; ids 60 and earlier rolled out 7+ days ago). Analytics question (j) on this resolves itself.
> Watchlist items: **85, unchanged for the SIXTH consecutive day.** This **ties** the Mar 16-22 record (6 days). **One more day breaks it — at 24h from now this becomes the longest engagement-flat streak in the dataset.** No adds, no removes since taranimeramaro's third Bruno Mars entry on Apr 25 18:27 UTC — 144h ago.
> **Activation rate held at 72.1%** for the second straight day (44/61 real-user activations against 61 real users). Flat is structurally better than declining — but two flat days is not a recovery; it is the absence of a decline. Recovery is a known-source signup who activates, and today produced no signup at all.

## What changed in 24h

1. **NICKLIB CROSSES DAY 14 TONIGHT — FIRST CHURN ENTRY IN 6 DAYS.** Forecast hit (predicted yesterday with 22:43 UTC precision). nicklib253@gmail.com signed up Apr 17 22:43 UTC + 14d = May 1 22:43 UTC, which is later today. **Day-14 win-back is the single piece of pre-queued copy with the most forecasting signal behind it** — drafted Apr 29, carried through Apr 30, fires today (or stays queued behind the engine outage). The 1 watchlist item is the passed Phillies-Braves Apr 17 game — **the framing pivot from "your event is coming up" to "your event happened 14 days ago, but here's why staying with us still pays off" is the only honest copy at this point.**

2. **PETE.UZELAC CROSSES DAY 21 TODAY — THE 3-WEEK BOUNDARY.** Forecast hit. Signup Apr 10 15:38 UTC + 21d = May 1 15:38 UTC, ~7h from this report. The drafted Day-21 rewrite from yesterday is the precise framing: "three weeks since you set up six events, none with target prices, ~850 price checks, 0 emails to you." **This is the moment where pete is no longer late — pete is structurally past the moment when any Day-14 framing remains honest.** All 6 events (4 World Cup + 2 Darts Masters) still 50-67d out — the runway saves the cohort relationship, but **only if the engine returns this week**.

3. **LILIANAMASYRUBI HITS DAY 3 TODAY — FIRST DAY-3 CANDIDATE IN 6 DAYS.** Signup Apr 28 05:24 UTC + 3d = May 1 05:24 UTC, ~6h before this report. **Day-3 fires today, on-schedule, *if engine returns.*** This is the first user since taranimeramaro (Apr 25 → Apr 28 Day-3) who has the chance to receive a Day-3 send within its Day-3 window. **If the engine remains silent, lilianamasyrubi joins the carried-late pile starting tomorrow** — the first user where the engine outage causes the lateness from Day 0, rather than the user inheriting a multi-day carry. **This is the engine-outage clock striking the "fresh cohort" wall.** All carries until now are users who signed up before the engine became a known dependency-block; lilianamasyrubi is the first user signed up *during* the outage who is now hitting their first scheduled drip touchpoint.

4. **ZHILI1208 HITS DAY 2 TODAY.** Day-3 fires tomorrow May 2 at 03:16 UTC. **Pre-queue tomorrow** — same exact dynamic as lilianamasyrubi: a fresh-cohort first-touchpoint where the engine outage will determine whether Day-3 fires on-time or on-Day-4 (which is the first edge of "a few days ago" framing). zhili1208 has 0 watchlist; lilianamasyrubi has 0 watchlist; both are unknown-source signups (ids 63 + 64 sit in the 6-of-9 unknown band). **The recovery signal we keep needing — known-source + activates — neither user is a candidate for unless attribution resolves.**

5. **TWO EVENTS PASS WITHOUT NOTIFICATION TODAY — THE OVERHANG INCREMENT WE'VE BEEN FORECASTING.** ajvanprooyen Cubs vs Diamondbacks May 1 (Wrigley) and tate.sheppard Florence + The Machine May 1 (State Farm Arena Atlanta) both pass within the next ~24h. **The "passed-event without notification" cumulative count moves from 5 → 7 by tomorrow morning.** The largest single-day jump in the metric since I started tracking (the prior daily increment was 1 at most). The remaining 5 increments from the ajvanprooyen trip (May 2-6) follow over the next 5 days — the cumulative count will sit at **12** by next Wednesday May 6. **This is the visible cost of the drip-engine outage in a way that "drafted, queued, undelivered" emails are not** — a fan attended a game that we tracked the price for, and we didn't tell them.

6. **DR.ALTVATER NOW DAY 11.** Day-14 forcing question pivoted from yesterday's send (assuming engine delay still). The "nine days, no events" subject must edit to "eleven days, no events" if it ships today — small but the kind of edit that compounds with the "fixed at draft time" timing problem. **If engine returns today, send unchanged with subject edit.** German .de domain language question still unanswered (Email Agent, **Day 6 unanswered**).

7. **JOSH NOW DAY 12.** "Eleven days in" copy from yesterday now needs "twelve days in" — same edit-cadence problem as last week, and now compounded across two consecutive days of late-shifting. AEW Double or Nothing May 24 still 23d out.

8. **TARANIMERAMARO NOW DAY 6 — DAY-3 HARD EXPIRY.** As pre-decided yesterday: this is the last honest day for "a few days ago you added three Bruno dates." Day 7 tomorrow forces the kill-or-pivot. **Decision applies tomorrow EOD:** if engine has not returned by then, kill Day-3 and queue Day-7 for May 2 18:25 UTC firing. Less than 36h to that decision.

9. **NMCNAMEE99 NOW DAY 6.** Same hard-expiry tomorrow. The Game 3 placeholder edit problem from yesterday now needs Game 4 facts — Toronto Game 3 result is 2 days old. The framing has aged a step deeper: not "the next game" but "the series in its current state." **Either ship today with current-state language, or pivot to Day-7 framing along with taranimeramaro.**

10. **MARK.MURDOCK + AWWHITTINGTON NOW DAY 8.** Day-7 sends carried 24h late. The B2B Day-7 framing for mark.murdock absorbs 1 day of slip ("a week and a day in" reads as "about a week in"); the standard Day-7 for awwhittington is the same. **Send today if engine returns; otherwise both join the 48h-late carry pile by tomorrow.**

11. **GGRI73 + CHARLESTEEL NOW DAY 9.** Day-7 carried 48h late. The "a week ago" framing is starting to age out — Day 9 still reads as "about a week ago" but **Day 10 (tomorrow) is the boundary** where Day-7 framing officially expires and Day-14 starts being too early. The two-user pair runs the same dr.altvater-style hard-expiry decision tomorrow. **48h until pivot decision on this pair.**

12. **NEWSLETTER SUBSCRIBERS: 3, unchanged since Feb 1 — now 89 days flat.** Still no movement. **89 days = 12 weeks 5 days.** The form audit has been carried for 12 weeks 5 days as the longest open dependency in the entire growth stack.

13. **STILL NO NEW ALGO-FLIPS.** Second consecutive flip-quiet day. The next flip threshold is charlesteel Bruno Ohio May 20 hitting T-7d on May 13 (12 days out) and josh AEW May 24 hitting T-7d on May 17 (16 days out). **24-day quiet window on algo-flips ahead — confirmed 2 days into it.** Cycles freed for retention copy and drip-engine fix.

14. **INSTRUMENTATION GAP: DAY 8 OF ATTRIBUTION ASK, +1 DAY ON DEEPENING SIGNAL.** Same flat data point: 6-of-9 unknown / 3-of-9 known, no progress. Today is the second consecutive zero-signup day — no new data point to refresh the dependency, but the structural correlation (3 known = 100% activation; 6 unknown = 0% activation) is **8 days unaddressed** and remains the highest-leverage open dependency in the stack.

15. **THE 8-FIRING DENSITY DAY YESTERDAY DID NOT MATERIALIZE INTO 8 SENDS.** Engine did not return. **Day 25 of outage; 11 emails compounding-late as of today's morning.** If engine returns tomorrow (lilianamasyrubi Day-3 + zhili1208 Day-2 both want Day-3 sends in the next 24h), the firing density jumps to **13 emails in 48h** — adding nicklib Day-14 today, lilianamasyrubi Day-3 today, pete Day-21 today, zhili1208 Day-3 tomorrow on top of yesterday's 8.

## Activation gap

**Users signed up in last 7 days with 0 watchlist items: 2** (down from 4 yesterday — mark.murdock + awwhittington both rolled out of the 7-day band at Day 8; they remain at-risk in absolute time, just not "in last 7 days"):

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| zhili1208@gmail.com | Apr 29 03:16 UTC | 2d | 0 | ~50h post-signup. Day-3 fires tomorrow. **Pre-queue tonight; this user is a fresh-cohort first-touchpoint case.** |
| lilianamasyrubi@gmail.com | Apr 28 05:24 UTC | 3d | 0 | ~74h post-signup. **Day-3 fires today on-schedule** — first on-schedule Day-3 candidate in 6 days. |

**Outside 7-day window (carried, still 0 watchlist):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| mark.murdock@lanternsec.com | Apr 23 03:01 UTC | 8d | 0 | Day-7 B2B carried 24h late. Body framing "a week and a day in" still honest. |
| awwhittington@icloud.com | Apr 23 00:30 UTC | 8d | 0 | Day-7 standard carried 24h late. |
| ggri73@gmail.com | Apr 22 21:18 UTC | 9d | 0 | Day-7 carried 48h late. **Day 10 tomorrow forces pivot decision** (Day-7 framing expires, Day-14 too early). |
| dr.altvater-70199@web.de | Apr 20 14:08 UTC | 11d | 0 | Day-14 forcing-question copy pivoted from Day-7 yesterday. Subject edit "nine days" → "eleven days" required if shipping today. |
| dylanbaldy@gmail.com | Apr 15 18:24 UTC | 16d | 0 | Churned. No realistic intervention. Carried as anecdote. |

- **17 real users** (excluding 3 test accounts) have **never** added a watchlist item → **17 / 61 = 27.9% of real signups** (unchanged 4th consecutive day). The activation gap is **structurally sticky** — every new at-risk user that crosses Day 7 without activating reinforces the gap; every signup-then-immediate-activate user (the Apr 26 pattern) is the only thing that compresses it.
- **Activation rate trajectory (real users, last 7 days):** 73.7% → 73.7% → 75.4% → 72.9% → 72.1% → 72.1% → **72.1%**. Three consecutive flat days at 72.1%. **The Apr 26 spike is now a 5-day-old isolated event** with no follow-on. The trend is "stuck at the post-decline floor" — neither recovering nor decaying further. **Recovery requires a known-source signup who activates** — which today did not produce, and which is still gated on Analytics resolution at Day 8.

**Acquisition-source inference still blocked on Analytics Agent (Day 8):**

The pattern of unknowns sits at **6 in 9 days** (ids 55, 57, 58, 60, 63, 64), against three knowns who all activated (ids 59, 61, 62). The bifurcation (3 known → 100% activation; 6 unknown → 0% activation) carries into Day 8 of the dependency. **Two consecutive zero-signup days have produced zero new data points to either confirm or weaken the pattern; the existing pattern is unchanged and still the strongest correlation in the data.**

## Churn signals

- Unsubscribes today: **0** (still 3 subscribers; **89 days flat — 12 weeks and 5 days**)
- Users entering "at-risk" today: **0** (no new Day-7 crossings in band today; mark.murdock + awwhittington crossed yesterday)
- Users entering "churned" today: **1** (nicklib253 crosses Day 14 at 22:43 UTC tonight — first new churn entry in 6 days)
- Alert fatigue candidates: 0 (0 alerts ever sent — Day 25)
- Events passed without notification (cumulative): **5 today, will be 7 by tomorrow morning** — ajvanprooyen Cubs May 1 + tate Florence May 1 both pass. **The largest single-day jump in this metric since tracking began.**
- **Algo-overrides as preemptive "events lost without notification":** **8 events** (tate Florence, goldy Bilmuri, ajvanprooyen May 1 / May 2 / May 3 / May 4 / May 5 / May 6) — unchanged. **Two consecutive flip-quiet days.**

## At-risk users (7–14d inactive proxy)

| User | Day | Watchlist | Days to event | Recommended intervention |
|------|-----|-----------|---------------|--------------------------|
| mark.murdock@lanternsec.com | 8d | 0 | — | Day-7 B2B carried 24h late — send today 11am EDT; otherwise hits 48h late tomorrow |
| awwhittington@icloud.com | 8d | 0 | — | Day-7 standard carried 24h late — send today 11am EDT |
| ggri73@gmail.com | 9d | 0 | — | Day-7 carried 48h late — **last day this framing works**; Day 10 tomorrow forces pivot |
| charlesteel126@gmail.com | 9d | 1 (Bruno Ohio May 20, 19d out) | 19d | Day-7 pivot carried 48h late — last day this framing works; pivot tomorrow |
| **dr.altvater-70199@web.de** | 11d | 0 | — | **Day-14 forcing question (pivoted from Day-7 yesterday)** — subject edit needed: "nine days" → "eleven days" |
| josh (joshdguillemette@gmail.com) | 12d | 1 (AEW May 24, 23d out) | 23d | Day-7 carried 5d late — small edit "twelve days into your account" — fires today 7pm EDT if engine returns |

**nicklib253 moves to churned tonight** (Day 14 crossed at 22:43 UTC). Day-14 win-back drafted Apr 29, carried Apr 30, **fires today** if engine returns, otherwise becomes a Day-15+ send tomorrow.

## Live algo-flip post-mortem (today)

| User | Event | Days out | Flip status | Days flagged | Sends |
|------|-------|----------|-------------|--------------|-------|
| ajvanprooyen | Cubs vs Diamondbacks, May 1 | **0 (TODAY)** | flipped Apr 24 | 8 | 0 (event passes today) |
| ajvanprooyen | Cubs vs Diamondbacks (Bobblehead), May 2 | 1 | flipped Apr 25 | 8 | 0 |
| ajvanprooyen | Cubs vs Diamondbacks (Tee), May 3 | 2 | flipped Apr 26 | 8 | 0 |
| ajvanprooyen | Cubs vs Reds, May 4 | 3 | flipped Apr 27 | 8 | 0 |
| ajvanprooyen | Cubs vs Reds, May 5 | 4 | flipped Apr 28 | 8 | 0 |
| ajvanprooyen | Cubs vs Reds, May 6 | 5 | flipped Apr 29 | 8 | 0 |
| tate.sheppard | Florence + The Machine, May 1 | **0 (TODAY)** | (passed without flip — under override window threshold) | — | 0 |

**No new flip today. Second flip-quiet day in a row.** Cubs May 1 + Florence May 1 both pass within ~24h — **first events in the 6-event ajvanprooyen cascade resolve today.** Cumulative passed-no-notification: **5 → 7 by tomorrow.** Five more cascade events resolve over May 2-6. **By May 6: cumulative passes 12 — a 7-event single-week jump.**

## Churned users with re-engagement potential

**Nicklib added today as the newest entry.**

| User | ~Days inactive | Watchlist items | Upcoming hook? | Priority |
|------|----------------|-----------------|----------------|----------|
| **nicklib253@gmail.com** (churned today 22:43 UTC) | 14d | **1** (Phillies passed Apr 17) | passed -14d | **MEDIUM — re-engagement hook is "your team played, here's what you missed and what's coming up"** |
| dylanbaldy@gmail.com (churned Apr 29) | 16d | **0** | — | **LOW** (no watchlist = no re-engagement hook) |
| pete.uzelac77 | 8d (just churned) | **6** (WC + Darts) | 50–67d | **HIGH — Day-21 framing fires today** |
| goldy.pec (post-mortem #2 archived) | 8d | 1 (Bilmuri passed yesterday) | passed override | CLOSED |
| blubberboi | 8d | 1 (Ed Sheeran Aug 8) | 99d | MEDIUM |
| tate.sheppard (post-mortem #1 archived) | ~48d | Florence T-0 today | event today | CLOSED |
| tosophiameyer | ~52d | **11** Harry Styles MSG | 115–139d | **HIGH — power user** |
| brigitte.theisen | ~65d | **10** Backstreet Sphere | 77–97d | **HIGH — power user** |
| laye.aurelien | ~29d | 2 (Shakira Jul 20 + 23) | 80–83d | HIGH |
| lvasub6 | ~33d | 2 (Flyleaf Jul 17–18) | 77–78d | HIGH |
| krusesin2023 | ~63d | 2 (Flyleaf Jul) | Yes | MEDIUM |
| ldholman | ~59d | 3 (Bad Omens passed; 2× MIW Aug 11) | Partial | MEDIUM |
| spcoog83 | ~54d | 1 (Olivia Dean Aug 25) | 116d | MEDIUM |
| edithdionne | ~58d | 1 (A7X Centre Bell Aug 8) | 99d | MEDIUM |
| bhaygood728 | ~28d | 1 (Cardi B passed Apr 12) | No | LOW |
| chocolateyu1083 | ~31d | 1 (Oilers passed Mar 31) | No | LOW |
| arin.gelbaugh | ~32d | 1 (NCAA Final Four passed Apr 4) | No | LOW |
| missbrookeshep | ~59d | 1 (Warriors/Rockets passed Apr 5) | No | LOW |
| billstromkel | ~38d | 1 (RAYE passed Apr 8) | No | LOW |
| jkaiser | ~46d | 1 (NCAA 2nd Rd passed Mar 21) | No | LOW |
| tucwildcat | ~40d | 1 (NCAA 2nd Rd passed Mar 22) | No | LOW |

**Passed-event overhang:** 10 churned/at-risk users + nicklib whose only tracked event has already happened (or passes today). **Tomorrow morning, 7 cumulative passed-no-notification events stand.** Cohort dies without a re-engagement product — the engineering ask remains carried.

## Churn intervention: email content (ready to queue when drip engine returns)

### TODAY's pre-queue fires — nicklib253 Day-14 win-back (FIRES TODAY, on-Day-14)

Drafted Apr 29, carried Apr 30, **fires today.** This is the most-forecast email in the queue — drafted 48h ahead with 14-day-precise timing.

**Subject:** Two weeks since the Phillies game — staying on TicketScan still pays off
**Body:**
> Two weeks ago you tracked the Phillies-Braves Apr 17 game. The game came and went; we hope you caught it (whether through us or another channel — both are wins for you). What we'd hate is if you wrote off TicketScan because that one event resolved, because the place this product saves you the most money is across multiple events over the course of a season.
>
> Here's the thing about price tracking: the events you're going to want tickets to in June, July, August are already on sale right now, and prices for them are already moving. You set up the Phillies in three minutes; setting up your next 2–3 events takes the same. Then we run cross-platform price checks every four hours for as long as you want, and email you only when something interesting happens.
>
> [Add your next event](https://www.ticketscan.io/dashboard) — three minutes, save the rest of the season.

**Send timing:** today 6pm EDT.

---

### TODAY's pre-queue fires — pete.uzelac77 Day-21 rewrite (FIRES TODAY, on-Day-21)

Drafted yesterday for today's send. **Hard expiry on Day-14 framing was yesterday at midnight UTC; today the 21-day framing kicks in cleanly.**

**Subject:** Three weeks since you set up six events — here's what should have happened
**Body:**
> Three weeks ago, on April 10, you added six events to your watchlist: four World Cup matches at Lincoln Financial Field, and two Darts Masters dates at MSG. None of those events have target prices set, which means we've spent three weeks tracking price for events you can't get an alert on. Roughly 850 price checks, 0 emails to you. That's not how this is supposed to work.
>
> The fix is one screen and 3 minutes. Pick a target on each event — even a default 10% below today's price catches most of the meaningful drops in the 50-100 day window your World Cup matches sit in. The Darts dates are 56 days out, where target-setting matters most.
>
> [Set targets on your watchlist](https://www.ticketscan.io/watchlist)

**Send timing:** today 12pm EDT.

---

### TODAY's pre-queue fires — lilianamasyrubi Day-3 (FIRES TODAY, on-schedule — first on-time Day-3 in 6 days)

3d post-signup, 0 watchlist. Standard Day-3 generic-events activation copy. **First user since taranimeramaro to be a same-day Day-3 candidate.**

**Subject:** Day 3 with TicketScan — pick one event, we'll do the rest
**Body:** Standard Day-3 activation copy with a one-liner geo-trending fallback ("if you don't have one in mind, here's what's hot near you").

**Send timing:** today 9am EDT.

---

### Pre-queue for tomorrow — zhili1208 Day-3 (FIRES TOMORROW, on-schedule)

Same template as lilianamasyrubi, fires tomorrow May 2 at ~3:16 UTC + 24h shift to morning EDT.

**Send timing:** tomorrow 9am EDT.

---

### TODAY's pre-queue fires (FIRES TODAY, 24h late) — mark.murdock B2B Day-7

Carried from yesterday. Day 8 today; "a week and a day" framing absorbs 1 day of slip. Body unchanged. **Hard expiry tomorrow at Day 9.**

**Send timing:** today 11am EDT.

---

### TODAY's pre-queue fires (FIRES TODAY, 24h late) — awwhittington Day-7 standard

Carried from yesterday. Day 8 today; standard Day-7 framing absorbs 1 day of slip. Body unchanged.

**Send timing:** today 11am EDT.

---

### TODAY's pre-queue fires (FIRES TODAY, 48h late, last honest day) — charlesteel Day-7 pivot

Carried 48h. Day 9 today; "a week ago" reads as "about a week ago" — last day this is honest. **Day 10 tomorrow forces pivot to Day-14 (which would be 4 days early).**

**Subject:** A week with one event tracked — set a target price on Bruno?
**Send timing:** today 12pm EDT.

---

### TODAY's pre-queue fires (FIRES TODAY, 48h late, last honest day) — ggri73 Day-7

Same dynamic as charlesteel. Day 9 today; last honest day for Day-7 framing.

**Send timing:** today 9pm EDT.

---

### TODAY's pre-queue fires (FIRES TODAY, 5d late) — josh Day-7 (small edit "twelve days in")

Day 12 today. Body edit: "eleven days into your account" → "twelve days into your account." Otherwise unchanged. AEW Double or Nothing May 24, 23d out.

**Send timing:** today 7pm EDT.

---

### TODAY's pre-queue fires (FIRES TODAY) — dr.altvater Day-14 forcing question (subject edit)

Day 11 today. Subject edit: "Nine days, no events" → "Eleven days, no events." Body otherwise unchanged.

**Subject:** Eleven days, no events — should we close this account, or help you start?
**Send timing:** today 1pm UTC.

**Open question (carried, unanswered for 6d):** German-language drip variant availability — Email Agent.

---

### TODAY's pre-queue fires (FIRES TODAY, 72h late, hard expiry tomorrow) — taranimeramaro Bruno-MetLife Day-3

Day 6 today — last honest day for Day-3 framing. **Decision tree resolves tomorrow:** if engine returns today, send Day-3 unchanged. If engine returns tomorrow at Day 7, kill Day-3 and queue Day-7 for May 2 18:25 UTC.

**Send timing:** today 10am EDT (last honest opportunity).

---

### TODAY's pre-queue fires (FIRES TODAY, 72h late) — nmcnamee99 post-Raptors Day-3 (current-state edit)

Day 6 today. Body edit: original "Game 3 if Toronto stays alive" hook is now ~2-day-stale. Rewrite to "wherever the Raptors series stands as of today, here's what watching cross-platform price would tell you." More generic but no longer factually wrong.

**Send timing:** today 5pm EDT.

---

### Carried unchanged (long-runway tier)

- **Day-14 (6d late) — blubberboi** (Ed Sheeran SoFi 99d)
- **Day-21 (7d late) — bhaygood** (bespoke past-event LOW)
- **Day-21 (8d late) — laye.aurelien** (Shakira July, 80–83d runway)
- **Day-30 (8d late) — billstromkel** (RAYE passed)
- **Day-30 (10d late) — tucwildcat** (NCAA passed)
- **Day-30 (16d late) — jkaiser** (NCAA passed)

**Total emails ready to queue: 19** (17 yesterday + 2 net new: nicklib Day-14 fires today on-schedule, lilianamasyrubi Day-3 fires today on-schedule, zhili1208 Day-3 pre-queued for tomorrow).

**Today is the new highest-density firing day of the entire outage window:** if engine returns, **11 emails fire today** (lilianamasyrubi Day-3 + nicklib Day-14 + pete Day-21 + mark.murdock + awwhittington + charlesteel + ggri73 + josh + dr.altvater + taranimeramaro + nmcnamee99). **Tomorrow adds zhili1208 Day-3.** **Twelve email-firings in 48h after 25 days of zero.** This is now bigger than yesterday's "fan-out wall" forecast — the wall grew taller overnight.

---

## Psychology-driven optimization — one recommendation

### Principle: **Goal-Gradient Effect** (Hull, 1932; Kivetz, Urminsky & Zheng, 2006) on the watchlist screen for users with 1 event tracked

**Where:** A persistent micro-progress component on `/watchlist` for users with `watchlist_count = 1`. Displays as a thin horizontal progress bar across the top of the watchlist with explicit milestone markers: "1 event · 3 events recommended · 5 events power user." The user's current 1-event position is rendered as a filled segment one-fifth of the way; the next milestone (3 events) is a bright marker; the final milestone (5+ events) sits faded at the right.

**Problem this targets:** **The 1-event-only user is a structurally distinct cohort from the 0-event user.** Today's data: of 44 activated real users, 21 have exactly 1 event (47% of activated). This is the largest single sub-segment in the activated population and it is the most-likely to churn — a single-event user who never adds a second is functionally a one-shot user, and we have eight such users in today's churned tier with exactly 1 watchlist item where the event has passed and they never came back. **The goal-gradient literature finds that perceived proximity to a goal accelerates effort toward it disproportionately to actual distance** — a user shown "you're 1/3 of the way to becoming a power user" exerts more effort than a user shown a flat list of empty slots. The rec leverages this: the user with 1 event sees a small filled bar with a near-marker (3 events) and a far-marker (5+ events). The near-marker is the load-bearing element — Kivetz et al.'s coffee-card experiment showed that artificial progress (marking the first 2 stamps as "free") accelerated completion vs. a 0-stamp baseline by ~38%, even though the actual task was identical.

**Why this beats the prior 8 rec sequence for this specific surface:**

The prior sequence (reciprocity, social proof, anchoring, commitment/consistency, loss aversion, implementation intentions at signup, Zeigarnik header, implementation-intentions Day-7+ modal) covers anonymous, signup-time, post-action, ambient-session, and Day-7+ inert surfaces. **None of them operates on the activated-but-shallow user** — the 1-event-only cohort that constitutes 47% of all activated users. The Zeigarnik header (Apr 29) is closest in spirit (visible incompleteness), but it is calibrated for the 0-event surface; for the 1-event user, "you have 1 event tracked" is not visibly incomplete in the same way that an empty watchlist is. Goal-gradient solves this by *creating* the incompleteness — the milestones make the 1-event state legible as "early, with progress to be made" rather than "done, content with current state."

**The 1-event-user is the missing target in the prior sequence**, and goal-gradient is the canonical psychological mechanism for accelerating progress toward already-started goals.

**The implementation:**

A horizontal progress component at the top of `/watchlist` for users matching `watchlist_count >= 1 AND watchlist_count <= 4`. Above 5, the component changes copy to "Power user — keep going" and shows a different visual (no progression bar, just an affirmation badge — preserves the ceiling effect without becoming meaningless).

```
Tracking 1 event ━━━━━━━━━○──────────────●──────────●
                          ▲              ▲          ▲
                          You          3 events   5+ events
                                       (recommended) (power user)

Most TicketScan users track 3+ events. Each adds <60s.
[+ Add your next event]
```

**Five mechanics, each with a specific psychological function:**

1. **Visible filled segment + near-marker** — the goal-gradient effect requires perceived progress *and* a near-target. A bar with no markers is just a UI element; a bar with explicit "you are here, here's the next milestone" framing is a goal anchor.
2. **Concrete, not abstract, milestone copy** — "3 events recommended" beats "next level." Power-user identity language ("5+ events power user") beats gamification points. The framing is *user-as-archetype*, not *user-as-game-character*.
3. **Honest data backing** — the "Most TicketScan users track 3+ events" claim must be empirically true. Today's data: of 44 activated users, 23 have 2+ events (52%) and 13 have 3+ events (30%). **The 3+ claim is currently true at 30% — close enough to "most" if we phrase it carefully ("a third of TicketScan users") but a stretch as "most." Either round the claim down to "many TicketScan users" or shift the milestone to 2 events ("most users track 2+" — true at 52%).** The cleanest version is: replace the "3 events recommended" milestone with "2 events" and keep "5+ power user" — both empirically defensible.
4. **Single CTA below the bar** — the bar communicates the goal; the CTA enables the action. No friction between them; one click to add.
5. **Decay-to-affirmation at 5+** — at the power-user ceiling, the bar disappears and is replaced with a non-prompting badge ("Power user · 5 events tracked"). Goal-gradient at the ceiling becomes counterproductive (no near-target to accelerate toward); affirmation preserves the identity reward without nagging.

**Defensibility against gaming / brand-trust risk:**

- The "most users track 2+" or "many users track 3+" copy must be true today and remain true. **Action item: include in the spec a re-check cadence** — quarterly recompute and update the milestone numbers.
- The progress bar must not appear for `watchlist_count = 0` users — that's the Zeigarnik-header surface from Apr 29, a different problem. Conditional rendering is `>= 1 AND <= 4`.
- The "+ Add your next event" CTA must lead somewhere actionable (search-with-context, not a generic dashboard) — consistent with yesterday's "Find it for me" design constraint.

**Expected impact:**

Goal-gradient interventions in retention contexts show 15-40% lift on next-action conversion when the near-milestone is concrete and the action friction is low. For our 1-event-only cohort (21 users today and growing), a 25% lift on watchlist-revisit → second-add conversion would compound across the cohort lifecycle; **the more important effect is on churn**, since users who add a second event have substantially lower churn risk than single-event users (this is intuitive but requires the `last_login_at` + retention curve instrumentation to verify rigorously). **The Apr 25 cohort (taranimeramaro 3 Bruno dates added at signup) is the closest empirical case** — that user's signup-day add of three events looks structurally healthier than nicklib's signup-day add of one event that has now churned at Day 14. Goal-gradient pulls the nicklib-shaped users toward the taranimeramaro shape.

**Ship cost:** Frontend: progress bar component on `/watchlist`, ~3h with polish (component, milestone markers, conditional rendering on `watchlist_count`, CTA wiring, copy variants for 1/2/3/4 events). Backend: zero — `watchlist_count` is already available. **~3h total**, the cheapest of the recent recs.

**A/B variants for later testing:**
- Control: no progress bar
- Variant A (above): 3-tier progress bar (1 → 2 or 3 → 5+) with milestone copy
- Variant B: same bar but no milestone labels (only the user's current segment) — isolates whether the milestone framing is load-bearing or whether the visual is sufficient
- Variant C: same bar but with social-proof anchor instead of identity-archetype ("Most TicketScan users save more by tracking multiple events") — tests whether identity framing or savings framing is more effective for this cohort
- Variant D: variant A but with a count-up animation on first render — tests whether the "you're already on the way" felt-progress effect compounds

**Risk:** Progress bars in retention contexts can feel infantilizing if mistargeted; the "power user" ceiling language must read as recognition, not flattery. **Mitigation:** copy review for tone (we are a price-comparison utility, not a fitness app — the language should match the site voice: helpful, data-driven, slightly irreverent). The "data-driven" voice is load-bearing here — the milestone numbers should feel like factual benchmarks, not arbitrary game targets.

**Sequencing relative to prior recs:**
1. **Week 1:** Reciprocity (Apr 25) — empty-state pre-population. Anonymous/logged-out adjacent.
2. **Week 2:** Social proof (Apr 26) — event card badge.
3. **Week 3:** Anchoring (Apr 27) — comparison framing.
4. **Week 4:** Commitment/consistency (Apr 23) — second-action prompt post-add.
5. **Week 5:** Loss aversion (Apr 24) — target-prompt panel post-add + revisit.
6. **Week 6:** Implementation intentions (Apr 28) — post-signup intent capture (Day-0).
7. **Week 7:** Zeigarnik effect (Apr 29) — persistent dashboard incompleteness header (every-session ambient).
8. **Week 8:** Implementation-intentions re-prompt (Apr 30) — single-question modal at Day-7+ inert dashboard arrival.
9. **Week 9 (today):** Goal-gradient — progress bar on watchlist for 1-4 event users.

Today's rec extends the sequence into **the activated-but-shallow surface for the first time.** The prior 8 recs target the path from anonymous → signup → first add. Today's rec targets first add → second/third add — the segment that has been invisible in the rec sequence and which today's data reveals as 47% of activated users. **The goal-gradient and Zeigarnik together form a complete activation depth ladder:** Zeigarnik triggers the first add (0 → 1); goal-gradient pulls the 1-event user toward 2-3 events (1 → power user). **Each is necessary; neither is sufficient on its own.**

**Hand to:** CRO Agent (Agent 6) for the progress-bar component spec + milestone copy + conditional render logic. Backend has zero new requirements; this is a frontend-only ship.

---

## Deliverables (handoffs)

1. **Analytics Agent (HIGHEST PRIORITY, carried +8 days):** (a) Referrer/UTM pull on ids 57–64 (carried — 8 unknown-source users in last 9 days, no progress in 8 days). (b) Cohort velocity for ids 1–64 over rolling 30 days (carried). (c) Trending-events query for reciprocity rec (carried). (d) `tracker_count` aggregation for social proof rec (carried). (e) Matched-drops query for loss-aversion rec (carried). (f) Resolved: `usersThisWeek` calendar boundary semantics (yesterday's question (i)) — confirmed calendar-week, not bug. (g) **Carried: post-event watchlist-cleanup signal for ajvanprooyen Cubs trip (5 of 6 events still pending; first event passes today).** (h) **NEW: goal-gradient milestone empirics** — confirm the 30% / 52% activated-user numbers for 3+ / 2+ events; recompute quarterly. (i) **NEW: 1-event-user retention curve** — for the goal-gradient rec to be defensibly motivated, we need empirical confirmation that 1-event users churn at materially higher rates than 2+ event users. The intuition is strong but the data ask is real.

2. **CRO Agent:** (a) Activation gap — **2 users in 7-day window** (zhili1208 2d, lilianamasyrubi 3d) **plus 5 outside the 7d band still inert** (mark.murdock 8d, awwhittington 8d, ggri73 9d, dr.altvater 11d, dylanbaldy 16d churned). (b) **NEW: goal-gradient progress bar on `/watchlist` for 1-4 event users** (above) — sequenced **ninth** of nine psych recs; first to address the activated-but-shallow surface. (c) Carried: implementation-intentions Day-7+ modal (Apr 30), Zeigarnik persistent dashboard header (Apr 29), implementation-intentions post-signup screen (Apr 28), anchoring framing for `/compare` + `/event/[id]` (Apr 27), social-proof EventCard badge (Apr 26), reciprocity dashboard empty-state (Apr 25), loss-aversion target panel (Apr 24), commitment-consistency 2nd-action (Apr 23). (d) Newsletter homepage form: **89 days flat = 12 weeks 5 days.** Audit blocking subscriber growth for one full quarter and 5 days.

3. **Email Agent:** **19 churn-intervention emails ready** (17 yesterday + 2 net new: nicklib Day-14 fires today on-schedule, lilianamasyrubi Day-3 fires today on-schedule, zhili1208 Day-3 pre-queued for tomorrow). Priority order: **lilianamasyrubi Day-3 (FIRES TODAY, on-schedule)** → **nicklib Day-14 (FIRES TODAY, on-Day-14)** → **pete Day-21 (FIRES TODAY, on-Day-21)** → **mark.murdock Day-7 B2B (FIRES TODAY, 24h late)** → **awwhittington Day-7 (FIRES TODAY, 24h late)** → **charlesteel Day-7 pivot (FIRES TODAY, 48h late, last honest day)** → **ggri73 Day-7 (FIRES TODAY, 48h late, last honest day)** → **josh Day-7 (FIRES TODAY, 5d late, "twelve days in" edit)** → **dr.altvater Day-14 forcing question (FIRES TODAY, "eleven days" subject edit)** → **taranimeramaro Day-3 (FIRES TODAY, 72h late, last honest day)** → **nmcnamee99 Day-3 (FIRES TODAY, 72h late, current-state edit)** → **zhili1208 Day-3 (FIRES TOMORROW, on-schedule)** → blubberboi, bhaygood, laye, billstromkel, tucwildcat, jkaiser. **Today is the highest-density firing day of the entire outage window: 11 sends if engine returns. Tomorrow: 1 more (zhili1208).**

4. **Content Agent:** (a) Cubs / Wrigley out-of-market trip hub page: **first event resolves today** — ship before May 6 to capture the trip's tail. (b) Bruno Mars cross-city/cross-venue cluster hub page — taranimeramaro Day-3 hard-expires tomorrow, hub becomes the natural reference. (c) German-market consideration for dr.altvater (carried). (d) "What to do when your team's playoff series moves to the road" hub page — nmcnamee99 use case (carried from yesterday). (e) **NEW: "How many events should you track?" hub page** — surfaced by today's goal-gradient rec, builds the empirical case for 2-3 events that the progress-bar copy needs. Anchor on the 30% / 52% data; voice: helpful, data-driven, slightly irreverent.

5. **Ads Agent:** (a) Cubs out-of-market audience signal — same. (b) Bruno Mars MetLife audience signal — taranimeramaro Day-3 fires today (or tomorrow); pre-queue still pending. (c) **Attribution-pull dependency now Day 8 unfulfilled.** Two consecutive zero-signup days have not refreshed the data point but have not weakened it either; the pattern holds at 6 unknown / 3 known with all 3 knowns activated. **Reiterating: this is the single highest-leverage open dependency in the growth stack, into Day 8.**

6. **Open from previous days (unchanged, carried):** (a) `last_login_at` column — **Day 25**. (b) Drip cron revival — **Day 25**, blocking all 19 drafted emails including 11 firing today. (c) Server-side `last_scan_at` emission on watchlist rows — superseded by loss-aversion rec. (d) Newsletter homepage form audit — **89 days flat = 12 weeks 5 days**. (e) Pre-populated-item flag on watchlist schema for reciprocity rec. (f) `tracker_count` aggregation in search response for social-proof rec. (g) `users.first_action_trigger_at` column + cron job for implementation-intentions rec. (h) Derive completion-state query for Zeigarnik header rec. (i) `users.last_modal_dismissed_at` column + `/api/users/me` payload extension for implementation-intentions re-prompt rec. (j) **NEW: empirical 1-event vs. 2+ event retention curve** for goal-gradient rec defensibility (Analytics ask; engineering only if the curve isn't trivially queryable).

## Trend watch (7-day)

| Metric | Apr 25 | Apr 26 | Apr 27 | Apr 28 | Apr 29 | Apr 30 | May 1 |
|--------|--------|--------|--------|--------|--------|--------|-------|
| Total users | 60 | 62 | 62 | 63 | 64 | 64 | **64** |
| Watchlist items | 81 | 85 | 85 | 85 | 85 | 85 | **85** |
| Target prices set | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Drip emails sent | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Active subscribers | 3 | 3 | 3 | 3 | 3 | 3 | **3** |
| New signups (day) | 0 | 2 | 0 | 1 | 1 | 0 | **0** |
| `usersThisWeek` (API) | 7 | 9 | 8 | 8 | 8 | 4 | **4** |
| At-risk count | 2 | 3 | 3 | 4 | 4 | 6 | **6** |
| Churned count | 52 | 52 | 52 | 52 | 53 | 53 | **54** |
| Activation rate (real users) | 73.7% | 75.4% | 75.4% | 72.9% | 72.1% | 72.1% | **72.1%** |

**Read:** Two consecutive zero-signup days. Watchlist items at 85 for the **6th consecutive day — TIES the prior 6-day record**, breaks tomorrow if no add. **Day 25 of zero retention emails, zero target-prices set.** First new churned user in 6 days (nicklib at 22:43 UTC tonight). Two passed-no-notification events resolve today (Cubs May 1 + Florence May 1). **Second flip-quiet day in a row** — algo-flip cascade closed; next flip 12-16 days out.

**The two-day forecast:**
- **May 1 (today):** nicklib churns. pete crosses Day 21. lilianamasyrubi Day-3 fires (first on-schedule Day-3 in 6 days). **11 emails fire if engine returns.** Cubs May 1 + Florence May 1 pass — passed-no-notification cumulative rises to 7.
- **May 2 (tomorrow):** zhili1208 Day-3 fires. **Watchlist 85-flat record broken at 7 days if no add.** taranimeramaro + nmcnamee99 Day-3 frames hard-expire (kill-or-pivot decision). charlesteel + ggri73 Day-7 frames hard-expire. ajvanprooyen Cubs May 2 (Bobblehead) passes — cumulative no-notification rises to 8. mark.murdock + awwhittington reach Day 9.

**The pattern that crystallized today:** **The activation engine isn't moving** — 6 days flat at 85 watchlist items, 25 days zero drip emails, 89 days flat at 3 newsletter subscribers, 2 days flat at 0 signups, 3 days flat at 72.1% activation rate. Every single forward-looking metric has stalled. **The recovery dependency stack — Analytics attribution (Day 8), drip-engine revival (Day 25), `last_login_at` instrumentation (Day 25), newsletter form audit (89 days), 9 unshipped psych recs — is now the entirety of the growth stack.** The inertia is no longer noise; it is the load-bearing reading of the system. The single highest-leverage unblock remains the Analytics attribution query, which has now been Day-8 unaddressed against a pattern that has accumulated to a structural correlation we can confidently act on.
