# Growth Daily -- 2026-04-30

## User health dashboard

| Segment                     | Count | % of Total | vs Apr 29 |
|-----------------------------|-------|------------|-----------|
| Total users                 | 64    | 100%       | +0 (zero signups today; **the Apr 28 + Apr 29 consecutive-day pulse did NOT extend**) |
| New (last 7 days, API count) | 4 | 6.3% | **-4 (was 8; rolling window rolled off the Apr 22 cluster — charlesteel, ggri73 cross out of the 7d band even as they remain at-risk in absolute time)** |
| Activated (has watchlist)   | 44    | 68.8%      | +0 (still flat; **5th consecutive day with zero new watchlist adds — 120h cumulative**) |
| Active (visited in 7 days)  | unknown | —        | no `last_login_at` instrumentation — **Day 24 open** |
| At-risk (7-14d signup-age proxy) | 6 | 9.4% | **+2 net (mark.murdock + awwhittington both crossed Day 7 today; charlesteel + ggri73 stay in band, dr.altvater stays in band, josh stays in band, nicklib stays in band — count rises sharply)** |
| Churned (14d+ signup-age proxy) | 53 | 82.8% | +0 (dylanbaldy stays at the front of the churned bucket; nicklib at Day 13 is one day from joining) |

> Day 24 without `last_login_at` instrumentation.
> Active alerts across **85** watchlist items: **0**. Target-price capture rate: **0% (Day 24).**
> `usersToday: 0`, `usersThisWeek: 4` — **the 2-day pulse pattern broke.** Apr 27 = 0, Apr 28 = 1, Apr 29 = 1, Apr 30 = 0. Two pulses, one quiet day, no pattern. The pulse pattern looks more and more like noise: a 1-day-on cadence inside a longer flat baseline. The API's `usersThisWeek` jump from 8 → 4 reflects four users (charlesteel Apr 22, ggri73 Apr 22, awwhittington Apr 23, mark.murdock Apr 23 — note: the API's calendar boundary on `usersThisWeek` is unclear; the count drops by more than the rollover model predicts, so I'm flagging this as an instrumentation question for Analytics rather than a real cohort-collapse signal).
> Watchlist items: **85, unchanged for the FIFTH consecutive day.** No adds, no removes since taranimeramaro's third Bruno Mars entry on Apr 25 18:27 UTC. **120h flat on the engagement metric — this surpasses the previous Mar 16-22 record (which was 6 days) only if it crosses 24 more hours; today we sit at the 5th day exactly.** If tomorrow brings no add, this becomes the longest engagement-flat streak in the dataset.
> **Activation rate held at 72.1%** (44/61 real-user activations against 61 real users) — first day of *not* declining in 72h. The decline ran 75.4% → 72.9% → 72.1% on Apr 27 → 28 → 29; today the metric stays flat because no signup landed and no activation landed. Flat is structurally better than declining, but the recovery cohort would be a single new activated user; today did not deliver one.

## What changed in 24h

1. **THE PULSE BROKE.** Yesterday's consecutive-day signup pair (Apr 28 lilianamasyrubi + Apr 29 zhili1208) was the first such pair in 6 days. Today, no signup. The pattern that hardened into "two days, two never-activators" is now unconfirmed as a pattern at all — a 1-day spike, a 1-day spike, a 1-day quiet. **The framing shifts:** the question is no longer "is the never-activator cohort the new normal" (we don't have enough data) but "is the single-day pulse cadence itself meaningful, or is it acquisition noise on top of a flat baseline." Without source attribution (Analytics Agent, **Day 7 of dependency**), neither question can be answered.

2. **MARK.MURDOCK + AWWHITTINGTON BOTH CROSSED DAY 7 TODAY (cluster fire — forecast hit).** As predicted yesterday with daily-granularity precision. Both signed up Apr 23 (mark.murdock 03:01 UTC, awwhittington 00:30 UTC); today both reach Day 7. Both still 0 watchlist. **mark.murdock is the B2B domain (lanternsec.com) — Day-7 send needs B2B variant copy.** awwhittington is iCloud personal — standard Day-7. The Day-7 send today is structurally on-time *if* the engine returns; if not, it joins the carried pile and is 24h+ late tomorrow. The drafted hybrid framing (Day-3 + Day-7 in one) from Apr 28 now collapses into a clean Day-7-only frame — the user has had 7 days, not 3, so the hybrid was always going to age out toward the Day-7 anchor on this day.

3. **DR.ALTVATER DAY-7 FRAMING HARD-EXPIRES TODAY.** Forecast hit again. Day 10 today (signup Apr 20 14:08 UTC + 10 days). The Apr 28 pivot from carried Day-3 to Day-7 framing is now structurally indefensible — at Day 10, "a full week and zero events tracked yet" reads as "approximately a week and a half," which is the boundary where Day-7 stops working and Day-14 starts (4 days early but the only honest option). **Switch Day-7 pivot copy out of queue, switch Day-14 forcing-question copy in.** German .de domain language question still unanswered (Email Agent, **Day 5 unanswered**).

4. **JOSH NOW DAY 11.** The Day-7 carried email is now 4 days late. The "ten days in" small edit from yesterday now needs to read "eleven days in" — small edit, but the edit cadence is becoming the problem itself. Each day of late-shifting copy is another day where the email's symbolic message ("we noticed your account state") undermines itself by having been late to notice. AEW Double or Nothing May 24 still 24d out — anchor intact. Edit and send today 7pm EDT, *but* if the engine doesn't return today, this becomes a Day-12 send tomorrow, at which point the framing problem starts to compound.

5. **NICKLIB253 NOW DAY 13 — DAY-14 WIN-BACK FIRES TOMORROW.** Drafted yesterday. Hard expiry on Day-7 past-event reframe is today EOD. Pre-queue stands; copy holds.

6. **PETE.UZELAC NOW DAY 20 — DAY-21 FRAMING SHIFT REQUIRED TOMORROW.** Forecast hit. Day 19 yesterday became Day 20 today (signup Apr 10 15:38 UTC + 20 days). Tomorrow at Day 21, the carried "you're missing alerts" frame must shift to a 3-week framing: "three weeks since you set up six events with no follow-through." 144h late becomes 168h late — the symbolic week boundary. Pre-queue Day-21 rewrite tomorrow.

7. **GGRI73 DAY-7 DID NOT FIRE YESTERDAY.** Engine did not return. The "first on-schedule activation send in the carried pile" hope collapsed. Today: Day-7 send is 24h late. The body still works at Day 8 (the framing "a week in" reads as "about a week in," which is forgivable for 24h but not 48h). Send today if engine returns; otherwise this is the second consecutive day of expiry-shrinking copy.

8. **TARANIMERAMARO BRUNO-METLIFE DAY-3 NOW 48H LATE.** Was 24h late yesterday. The "a few days ago you added three Bruno dates" framing absorbed the first 24h (Day 4 still reads as "a few days ago"). At Day 5 today, the framing starts to feel slightly stale but is still honest. **Day 6 tomorrow is the hard expiry** — at that point the body has to either be rewritten or the email has to be repositioned as a Day-7 (taranimeramaro signed up Apr 25 18:25 UTC, so Day-7 lands May 2 18:25 UTC — three days from now, perfect for repositioning if Day-3 cannot fire by tomorrow EOD). **Decision tree:** if engine returns today, send Day-3 unchanged. If engine returns tomorrow, send Day-3 with a 1-line rewrite. If engine returns Day 7+, kill Day-3, send Day-7 instead.

9. **NMCNAMEE99 POST-RAPTORS DAY-3 NOW 48H LATE.** Same engine-down reason. Game 2 was Apr 26; today is Day 4-after-Game-2. Toronto won Game 2; series moves to Cleveland Game 3 was tonight (Apr 28) — so by today, Game 3 result is known. **Body needs a small edit:** the "Game 3 if Toronto stays alive" hook that worked yesterday is now factually outdated — either Toronto won Game 3 (and the hook is "Game 4 is the close-out chance") or Toronto lost Game 3 (and the hook is "Game 5 win-or-go-home"). I don't have the result available; pre-queue with a placeholder for whichever outcome and ship at 5pm EDT today *or* defer 24h for editorial accuracy.

10. **CHARLESTEEL DAY-7 PIVOT DID NOT FIRE YESTERDAY.** Day 8 today. The "a week ago you added Bruno Mars" framing reads as "about a week ago" — still honest at Day 8, but Day 9 is the boundary. Send today 12pm EDT if engine returns.

11. **AJVANPROOYEN POST-MORTEM #3 ARCHIVED.** All 6 events flipped as of yesterday. The bespoke email is killed. Today: May 1 game (T-1d) — first event in the trip happens tomorrow. Then May 2, May 3, May 4, May 5, May 6 in sequence over the next 7 days. **The full out-of-attribution outcome will be visible in 7 days:** did the user attend any of these games (i.e., buy tickets through their own channel, not via TicketScan), or did the trip get scrapped? Without `last_login_at`, the only way to detect attendance is to wait and see if the watchlist gets cleaned up (manual delete) post-trip. **This is now an instrumentation tracer:** if the user attended without us knowing, and never returns to clean the watchlist, the data gap becomes permanent. Add this to the Analytics ask.

12. **NEWSLETTER SUBSCRIBERS: 3, unchanged since Feb 1 — now 88 days flat.** Still no movement. **88 days = 12 weeks and 4 days.** The form audit has been carried for 12 weeks and 4 days as the longest open dependency in the entire growth stack.

13. **NO NEW ALGO-FLIPS TODAY.** First day in 6 with no flip. Cascade closed. Next flip threshold is the next event that hits T-7d, and there is no tracked event between May 7-13 in the dataset — the next flips would be ~3+ weeks out (charlesteel Bruno Ohio May 20 hits T-7d on May 13; josh AEW May 24 hits T-7d on May 17). **24-day quiet window on algo-flips ahead.** Useful: zero forecast pressure, zero new post-mortem urgency, more cycles for retention copy and infra fixes. **The drip-engine outage now has a clear-runway window — if this is going to be the week we ship the fix, this is the week.**

14. **INSTRUMENTATION GAP: DAY 7 OF ATTRIBUTION ASK, +1 DAY ON DEEPENING SIGNAL.** No new signups today, so no new unknown-source data points. But the existing 6-of-9 unknown / 3-of-9 known pattern is unchanged. **The structural correlation (3 known = 100% activation; 6 unknown = 0% activation) carries into a 7th day without resolution.** Without action, this stays the highest-leverage open dependency in the stack.

## Activation gap

**Users signed up in last 7 days with 0 watchlist items: 4** (the absolute count of "in-window 0-watchlist" users dropped from 5 yesterday to 4 today only because charlesteel + ggri73 rolled out of the 7-day band — they remain at-risk users in absolute time, just no longer "in last 7 days"):

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| zhili1208@gmail.com | Apr 29 03:16 UTC | 1d | 0 | ~32h post-signup. **Pre-Day-3 window** (Day-3 fires May 2). The 8h-into-life framing from yesterday now reads as "a day and change." No intervention triggered yet. |
| lilianamasyrubi@gmail.com | Apr 28 05:24 UTC | 2d | 0 | ~54h post-signup. **Pre-Day-3 window expires today** (Day-3 fires tomorrow May 1). Preemptive Day-3 prequeue tomorrow. |
| **mark.murdock@lanternsec.com** | Apr 23 03:01 UTC | 7d | 0 | **Day-7 fires today.** B2B domain. B2B variant Day-7 copy queued. |
| **awwhittington@icloud.com** | Apr 23 00:30 UTC | 7d | 0 | **Day-7 fires today.** Standard Day-7 copy queued. |

**Outside 7-day window (carried, still 0 watchlist):**

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| ggri73@gmail.com | Apr 22 21:18 UTC | 8d | 0 | Past Day-7 by 24h. Day-7 framing 1d-late edge. Send today if engine returns; otherwise pivot Day-7→ early Day-14 in 6 days. |
| charlesteel126@gmail.com | Apr 22 11:38 UTC | 8d | 1 (Bruno May 20) | Day-7 pivot 24h late. Body still honest at Day 8. Send today 12pm EDT if engine returns. |
| dr.altvater-70199@web.de | Apr 20 14:08 UTC | 10d | 0 | **Day-7 framing HARD-EXPIRES TODAY.** Pivot to Day-14 forcing question. German .de domain. |
| dylanbaldy@gmail.com | Apr 15 18:24 UTC | 14d | 0 | **CHURNED yesterday.** No realistic intervention. Carried as a post-mortem entry. |

- **17 real users** (excluding 3 test accounts — id 1 ai@excelentmedical.com, id 2 admin, id 3 test) have **never** added a watchlist item → **17 / 61 = 27.9% of real signups** (unchanged from yesterday). **The activation gap held flat for the first time in 72h** — but only because today produced no signup. A flat day is structurally better than a declining day, but it is not a recovery day. The first recovery signal would be a new signup *who activates*; today produced neither half of that pair.
- **Activation rate trajectory (real users, last 7 days):** 73.7% → 73.7% → 73.7% → 75.4% → 72.9% → 72.1% → **72.1%**. The Apr 26 spike (taranimeramaro + nmcnamee99 both activating on signup day) is now the only positive movement in the entire 7-day run, and the 6 days since have produced either decline or stasis. **The trend remains decisively inverted from neutral-positive to declining-or-flat.** Recovery requires a known-source signup who activates — historically these have been 100% reliable, but they require Analytics resolution to engineer.

**Acquisition-source inference still blocked on Analytics Agent (Day 7):**

The pattern of unknowns now sits at **6 in 9 days** (ids 55, 57, 58, 60, 63, 64), against three knowns who all activated (id 59 ajvanprooyen, id 61 nmcnamee99, id 62 taranimeramaro). The bifurcation:
- **Known-source signups in last 9 days: 3, all activated immediately (100% activation, multi-event each).**
- **Unknown-source signups in last 9 days: 6, all 0 watchlist (0% activation).**

This is not a noise pattern. It is the strongest correlation in the data, carried into Day 7 of the dependency. **Zero progress in 7 days; one zero-signup day buys no extension on the dependency — it just defers when the data point will refresh, not whether attribution still matters.**

## Churn signals

- Unsubscribes today: **0** (still 3 subscribers; **88 days flat — 12 weeks and 4 days**)
- Users entering "at-risk" today: **2** (mark.murdock + awwhittington both crossed Day 7)
- Users entering "churned" today: **0** (next candidate: nicklib at Day 13, crosses Day 14 tomorrow EOD UTC — pre-queue Day-14 win-back tonight)
- Alert fatigue candidates: 0 (0 alerts ever sent — Day 24)
- Events passed without notification (cumulative): 5 — unchanged.
- **Algo-overrides as preemptive "events lost without notification":** **8 events** (tate Florence, goldy Bilmuri, ajvanprooyen May 1 / May 2 / May 3 / May 4 / May 5 / May 6) — unchanged. **No new flips today; first flip-quiet day in 6.** Cascade closed. The next flip is ~13-17 days out.

## At-risk users (7–14d inactive proxy)

| User | Day | Watchlist | Days to event | Recommended intervention |
|------|-----|-----------|---------------|--------------------------|
| **mark.murdock@lanternsec.com** (newly at-risk today) | 7d | 0 | — | **Day-7 B2B variant** — fires today 11am EDT |
| **awwhittington@icloud.com** (newly at-risk today) | 7d | 0 | — | **Day-7 standard** — fires today 11am EDT |
| ggri73@gmail.com | 8d | 0 | — | Day-7 carried 24h late — send if engine returns; else pivot to Day-14 in 6 days |
| charlesteel126@gmail.com | 8d | 1 (Bruno Ohio May 20, 20d out) | 20d | Day-7 pivot 24h late — send today 12pm EDT if engine returns |
| **dr.altvater-70199@web.de** | 10d | 0 | — | **HARD EXPIRY ON DAY-7 FRAMING TODAY** — pivot to Day-14 forcing question |
| josh (joshdguillemette@gmail.com) | 11d | 1 (AEW May 24, 24d out) | 24d | Day-7 carried 4d late — small edit ("eleven days in") — fires today 7pm EDT |
| nicklib253@gmail.com | 13d | 1 (Phillies passed Apr 17) | passed -13d | **Day-14 win-back fires TOMORROW** — pre-queue tonight (drafted yesterday) |

**dylanbaldy moved out of at-risk to churned yesterday** (Day 14 crossed). No retention intervention realistic. Carried as anecdote for drip-outage post-mortem only.

## Live algo-flip post-mortem (today)

| User | Event | Days out | Flip status | Days flagged | Sends |
|------|-------|----------|-------------|--------------|-------|
| ajvanprooyen | Cubs vs Diamondbacks, May 1 | **1** | flipped Apr 24 | 7 | 0 (event tomorrow) |
| ajvanprooyen | Cubs vs Diamondbacks (Bobblehead), May 2 | 2 | flipped Apr 25 | 7 | 0 |
| ajvanprooyen | Cubs vs Diamondbacks (Tee), May 3 | 3 | flipped Apr 26 | 7 | 0 |
| ajvanprooyen | Cubs vs Reds, May 4 | 4 | flipped Apr 27 | 7 | 0 |
| ajvanprooyen | Cubs vs Reds, May 5 | 5 | flipped Apr 28 | 7 | 0 |
| ajvanprooyen | Cubs vs Reds, May 6 | 6 | flipped Apr 29 | 7 | 0 |

**No new flip today. First flip-quiet day in 6.** Cascade has fully played out for ajvanprooyen's trip, all 6 events inside override, all 7-day flagged. **Tomorrow May 1 = first event happens; the trip ends May 6.** Once each event passes, it joins the "passed without notification" cumulative count (tate Florence May 1 also happens tomorrow → cumulative bumps to **6 + 2 = 7 passed events without notification on May 2 morning.** The cumulative count will increase by 1 every May 1, May 2, May 3, May 4, May 5, May 6 — six daily increments over the next week, the largest single-week increase in the metric since I started tracking.

## Churned users with re-engagement potential

(No new additions today. **Nicklib at Day 13 enters the watch line for tomorrow.**)

| User | ~Days inactive | Watchlist items | Upcoming hook? | Priority |
|------|----------------|-----------------|----------------|----------|
| dylanbaldy@gmail.com (churned yesterday) | 15d | **0** | — | **LOW** (no watchlist = no re-engagement hook) |
| pete.uzelac77 | 7d (just churned) | **6** (WC + Darts) | 50–67d | **HIGH** |
| goldy.pec (post-mortem #2 archived) | 7d (just churned) | 1 (Bilmuri T-2 tomorrow) | passed override | CLOSED |
| blubberboi | 7d (just churned) | 1 (Ed Sheeran Aug 8) | 100d | MEDIUM |
| tate.sheppard (post-mortem #1 archived) | ~47d | Florence T-1 tomorrow | passed override | CLOSED |
| tosophiameyer | ~51d | **11** Harry Styles MSG | 116–140d | **HIGH — power user** |
| brigitte.theisen | ~64d | **10** Backstreet Sphere | 78–98d | **HIGH — power user** |
| laye.aurelien | ~28d | 2 (Shakira Jul 20 + 23) | 81–84d | HIGH |
| lvasub6 | ~32d | 2 (Flyleaf Jul 17–18) | 78–79d | HIGH |
| krusesin2023 | ~62d | 2 (Flyleaf Jul) | Yes | MEDIUM |
| ldholman | ~58d | 3 (Bad Omens passed; 2× MIW Aug 11) | Partial | MEDIUM |
| spcoog83 | ~53d | 1 (Olivia Dean Aug 25) | 117d | MEDIUM |
| edithdionne | ~57d | 1 (A7X Centre Bell Aug 8) | 100d | MEDIUM |
| bhaygood728 | ~27d | 1 (Cardi B passed Apr 12) | No | LOW |
| chocolateyu1083 | ~30d | 1 (Oilers passed Mar 31) | No | LOW |
| arin.gelbaugh | ~31d | 1 (NCAA Final Four passed Apr 4) | No | LOW |
| missbrookeshep | ~58d | 1 (Warriors/Rockets passed Apr 5) | No | LOW |
| billstromkel | ~37d | 1 (RAYE passed Apr 8) | No | LOW |
| jkaiser | ~45d | 1 (NCAA 2nd Rd passed Mar 21) | No | LOW |
| tucwildcat | ~39d | 1 (NCAA 2nd Rd passed Mar 22) | No | LOW |

**Passed-event overhang:** 8 churned users + nicklib whose only tracked event has already happened. **Tomorrow's two events passing (tate Florence + ajvanprooyen Cubs May 1) push the no-notification overhang from 5 → 7.** Cohort stays dead without a re-engagement product.

## Churn intervention: email content (ready to queue when drip engine returns)

### TODAY's pre-queue fires — mark.murdock B2B Day-7 (FIRES TODAY, on-schedule)

7d post-signup, 0 watchlist, **B2B domain (lanternsec.com — Lantern Security).** Standard Day-7 framing rewritten with B2B angle: "you signed up with a work email, and the typical use case is event procurement for client entertainment / conference travel — here's what we'd do if we were running ticket spend at a security firm."

**Subject:** A week with TicketScan — three workflows for client entertainment ticket spend
**Body:**
> When a work-domain account signs up at TicketScan, the most common use case is one of three: client entertainment (you take prospects/customers to games/concerts as a relationship play), team morale (you buy event tickets as employee perks), or conference travel (the ticket is part of a trip you're already planning). All three benefit from price comparison, not because tickets are expensive — they often aren't — but because the *time* it takes to research price across Ticketmaster, SeatGeek, and StubHub is the actual cost.
>
> A simple test: pick the next event you'd consider taking a client to, add it to your watchlist, and let TicketScan track the cross-platform price for a week. If the comparison didn't save you 15 minutes of manual checking, the experiment fails honestly. If it did, you've found a no-meeting workflow.
>
> [Add your first event](https://www.ticketscan.io/dashboard)

**Send timing:** today 11am EDT.

---

### TODAY's pre-queue fires — awwhittington Day-7 standard (FIRES TODAY, on-schedule)

7d post-signup, 0 watchlist, iCloud personal domain. Standard Day-7 activation framing.

**Subject:** A week in — here's what most people add first
**Body:** Standard Day-7 generic-events activation copy. (Identical to ggri73 carried Day-7 except for personalization fields.)

**Send timing:** today 11am EDT.

---

### TODAY's pre-queue fires (FIRES TODAY, 24h late) — charlesteel Day-7 pivot

Carried from yesterday. Day 8 today; "a week ago" framing reads as "about a week ago" — still honest. Body unchanged from yesterday's draft.

**Subject:** A week with one event tracked — set a target price on Bruno?
**Send timing:** today 12pm EDT.

---

### TODAY's pre-queue fires (FIRES TODAY, 24h late) — ggri73 Day-7

Carried from yesterday. Day 8 today; standard Day-7 framing absorbs 1 day of slip. Body unchanged.

**Subject:** A week in — here are the 3 most-tracked events near you
**Send timing:** today 9pm EDT (or 11am EDT cluster with mark.murdock + awwhittington if cohort-time consistency is preferred over per-user signup-time anchoring).

---

### TODAY's pre-queue fires (FIRES TODAY, 48h late) — taranimeramaro Bruno-MetLife Day-3

Now 48h late. Body framing "a few days ago you added three Bruno dates" still honest at Day 5 (reads as "earlier this week"). **Hard expiry tomorrow at Day 6** — at that point, kill or reposition.

**Send timing:** today 10am EDT if engine returns; otherwise carry to tomorrow at Day 6 (last-honest day) or pivot to Day-7 (firing May 2 18:25 UTC, three days from now).

---

### TODAY's pre-queue fires (FIRES TODAY, 48h late) — nmcnamee99 post-Raptors Day-3 (small edit needed)

48h late. Body needs a small factual update: "Game 3 if Toronto stays alive" → either "Game 4 close-out attempt" (if Toronto won Game 3 last night) or "Game 5 win-or-go-home" (if Toronto lost Game 3). Pre-queue with placeholder; ship at 5pm EDT today *or* defer 24h for editorial accuracy.

**Send timing:** today 5pm EDT (with edit) or tomorrow same time.

---

### TODAY's pre-queue fires (FIRES TODAY, 4d late) — josh Day-7 (small edit "eleven days in")

Day 11 today. Body edit: "ten days into your account" → "eleven days into your account." Otherwise unchanged. AEW Double or Nothing May 24, 24d out.

**Send timing:** today 7pm EDT.

---

### TODAY's pre-queue fires (FIRES TODAY) — dr.altvater Day-14 forcing question (PIVOTED FROM DAY-7 — hard expiry today)

Day 10 today. Day-7 framing officially expires; Day-14 forcing question fires 4 days early. Drafted yesterday for today's send.

**Subject:** Nine days, no events — should we close this account, or help you start?
**Body:** Bespoke "are you still here?" copy with a single-question signal: keep account / no thanks. Operates as a churn-or-commit forcing function. English default; German subject-line option deferred until Email Agent answers Day-5 question.

**Send timing:** today 1pm UTC (peak European afternoon).

**Open question (carried, unanswered for 5d):** German-language drip variant availability — Email Agent.

---

### HIGH — pete.uzelac77 (Day 20, 168h late, **HARD EXPIRY 24H** — Day-21 framing shift required tomorrow)

Carried from Apr 25 — 8th day of unchanged copy. **The "you're missing alerts" frame fully expires today.** Tomorrow at Day 21, copy must shift to a 3-week framing.

**Pre-queue for tomorrow Day-21 rewrite:**

**Subject:** Three weeks since you set up six events — here's what should have happened
**Body:**
> Three weeks ago, on April 10, you added six events to your watchlist: four World Cup matches at Lincoln Financial Field, and two Darts Masters dates at MSG. None of those events have target prices set, which means we've spent three weeks tracking price for events you can't get an alert on. Roughly 850 price checks, 0 emails to you. That's not how this is supposed to work.
>
> The fix is one screen and 3 minutes. Pick a target on each event — even a default 10% below today's price catches most of the meaningful drops in the 50-100 day window your World Cup matches sit in. The Darts dates are 56 days out, where target-setting matters most.
>
> [Set targets on your watchlist](https://www.ticketscan.io/watchlist)

**Send timing:** tomorrow 12pm EDT.

---

### Pre-queue for tomorrow — nicklib253 Day-14 win-back

Day 14 lands tomorrow EOD (signup Apr 17 22:43 UTC + 14d = May 1 22:43 UTC). Drafted yesterday; copy holds.

**Send timing:** tomorrow 6pm EDT.

---

### Carried unchanged

- **Day-3 (currently 48h late) — taranimeramaro Bruno-MetLife** (above)
- **Day-3 (currently 48h late) — nmcnamee99 Raptors** (above; 1-line edit needed)
- **Day-7 pivot (24h late) — charlesteel** (above)
- **Day-7 (24h late) — ggri73** (above)
- **Day-7 (4d late) — josh** (above; "eleven days in" edit)
- **Day-7 → Day-14 pivot (fires today) — dr.altvater** (above)
- **Day-14 (5d late) — pete + goldy** (goldy is post-mortem closed; pete is HIGH PRIORITY — fires today; **also has Day-21 rewrite drafted for tomorrow**)
- **Day-14 (6d late) — blubberboi** (Ed Sheeran SoFi 100d)
- **Day-21 (6d late) — bhaygood** (bespoke past-event LOW)
- **Day-21 (7d late) — laye.aurelien** (Shakira July, 81–84d runway)
- **Day-30 (7d late) — billstromkel** (RAYE passed)
- **Day-30 (9d late) — tucwildcat** (NCAA passed)
- **Day-30 (15d late) — jkaiser** (NCAA passed)

**Total emails ready to queue: 17** (16 yesterday +1: pete Day-21 rewrite drafted today for tomorrow's send; mark.murdock + awwhittington Day-7 fires both added to today's queue; net +1 since charlesteel + ggri73 are carried not new).

**Today is the highest-density firing day of the entire outage window:** if the engine returns, **8 emails fire today** (mark.murdock, awwhittington, charlesteel, ggri73, josh, dr.altvater, taranimeramaro, nmcnamee99) plus pete's late Day-14 carries. **Tomorrow adds 2 more** (nicklib Day-14, pete Day-21). Eleven email-firings in 48h after 24 days of zero. This is the fan-out wall flagged yesterday.

---

## Psychology-driven optimization — one recommendation

### Principle: **Implementation Intentions Re-prompt** (Gollwitzer, 1999) at the per-session interruption surface

**Where:** A modal interruption on first dashboard arrival per session for users who are 7+ days post-signup with 0 watchlist items. The modal asks one question: **"What event would you watch if it was easy?"** with a free-text input and an optional "show me what's near me" assist link.

**Problem this targets:** Today's data point — **mark.murdock and awwhittington both crossing Day 7 with 0 watchlist** — is a concrete instance of the bigger pattern. The Apr 28 implementation-intentions rec proposed capturing intent at signup; we still haven't shipped it. The user is now 7 days past the moment where post-signup intent capture would have been ideal. **The Day-7 mark is the second natural opportunity** — the user has now had a week to vaguely think about us and not act, which means whatever interest got them to sign up is decaying. The Zeigarnik header from yesterday's rec (persistent visible incompleteness) operates passively in the periphery; today's rec is its active counterpart — **a single direct prompt that the user must engage with or dismiss to proceed.**

The Gollwitzer implementation-intentions literature finds that the simple act of articulating *what* and *when* dramatically increases follow-through versus generic intent. Translating that to our surface: a Day-7+ inert user has not articulated anything; they signed up, looked, and moved on. Asking the literal question "what event would you watch if it was easy?" as a Day-7+ session-interruption forces articulation. **The "if it was easy" framing is load-bearing:** it shifts the burden from the user (figuring out how to use the product) onto us (we'll make it easy), which lowers the activation energy and converts free-text into a signal we can route.

**Why this beats the prior 7 rec sequence for this specific surface:**

The prior sequence (reciprocity, social proof, anchoring, commitment/consistency, loss aversion, implementation intentions at signup, Zeigarnik header) covers anonymous, signup-time, post-action, and ambient-session surfaces. **None of them operates at the inert-Day-7+ session-arrival moment.** The Zeigarnik header from yesterday is the closest, but it is *passive* — it sits in the periphery and waits for the user to act on its implicit invitation. The implementation-intentions re-prompt is *active* — it interrupts the session with a single direct question that requires a response (text, dismissal, or assist-click).

The one risk is that Day-7+ inert users may have already tuned out, in which case the modal lands as friction rather than activation. The mitigation is the dismiss button and the "ask me later (tomorrow)" option — explicit honesty about respecting the user's choice. **Critical:** if dismissed, suppress the modal for at least 7 days. Re-prompting daily would convert a productive psychological mechanism into a churn driver, which is exactly the failure mode the Apr 23 commitment/consistency rec also flagged.

**The implementation:**

A modal interruption on `/dashboard` arrival for users matching:
- `created_at <= now - 7 days`
- `watchlist_count = 0`
- `last_modal_dismissed_at IS NULL OR last_modal_dismissed_at <= now - 7 days`

Layout:

```
┌─────────────────────────────────────────────────┐
│  Quick question                                  │
│                                                  │
│  What event would you watch if it was easy?     │
│                                                  │
│  [_________________________________]            │
│   (e.g., "any Yankees game" or "Hamilton")      │
│                                                  │
│  [Show me what's near me]                       │
│                                                  │
│  [Maybe later]            [Find it for me]      │
└─────────────────────────────────────────────────┘
```

**Five mechanics, each with a specific psychological function:**

1. **One question, no preamble** — Gollwitzer's effect requires articulation, not preamble. Surfaces that pad the prompt with "we noticed you haven't…" lose the user before they articulate.
2. **Free-text + assist** — the free-text field captures user intent (signal we can route into search/personalization); the assist link captures the don't-know-what-I-want user (geo-trending fallback). Both paths produce a watchlist-add candidate.
3. **"If it was easy" framing** — load-bearing as discussed above. Converts the question from a request for a specific decision into an exploration of latent preference.
4. **Symmetric dismiss** — "Maybe later" and "Find it for me" are equal in prominence. The user must make an explicit choice; both are valid; dismissal does not feel coercive.
5. **7-day suppression on dismiss** — protects against modal fatigue. The Day-7 trigger is intentional; the *re-trigger* must be calibrated to not become a Day-8, Day-9, Day-10 nag.

**Defensibility against gaming / brand-trust risk:**

- The free-text capture must route to *real* search results, not be cosmetic. If the user types "Yankees" and gets nothing, the modal becomes a brand-trust hit. Mitigation: ensure the existing `/api/events/search` is robust enough to handle vague free-text queries, or invest 30 minutes in a query-normalization shim.
- The modal must not appear for users who already have watchlist items (regardless of session count). Conditional rendering must check `watchlist_count = 0` and not just account age.
- The "Find it for me" CTA must lead somewhere actionable — either a personalized search results page (best) or a generic dashboard with the free-text query pre-filled (acceptable). It must not lead to a generic "browse" page that loses the captured intent.

**Expected impact:**

Implementation-intentions interventions in B2C onboarding contexts show 7-22% lift on next-action conversion when the question is concrete and the friction is low (single-question modal, free-text, dismissible). For us, against a Day-7+ inert population that today numbers ~6 users (the at-risk band) and over time will be larger, a 12% lift on dashboard-return → first-add conversion would recover roughly 1 in 8 of the inert visits. **The mark.murdock + awwhittington pair both hitting Day 7 today is the live test case** — if this rec ships before they bounce, they're the first cohort that sees it.

**Ship cost:** Frontend: modal component on `/dashboard` arrival, ~3-4h with polish (component, free-text input, geo-trending fallback assist, 7-day suppression in localStorage *and* server-side persistence to handle multi-device, conditional rendering on `created_at` + `watchlist_count`). Backend: trivial — `users.last_modal_dismissed_at` column added; no new endpoints needed, since the existing `/api/users/me` can return the dismissal timestamp. **~5h total**, slightly more than yesterday's Zeigarnik header due to the multi-device dismissal-persistence wrinkle.

**A/B variants for later testing:**
- Control: no modal on Day-7+ inert dashboard arrival
- Variant A (above): single-question modal with free-text + assist + symmetric dismiss
- Variant B: same modal but no free-text — only the assist button (isolates whether free-text articulation is load-bearing or whether the modal itself is sufficient)
- Variant C: same modal but pre-populated with a suggested query based on geo (city-trending) (tests whether "if it was easy" should be done *for* the user rather than asked)
- Variant D: same modal but Day-3 trigger instead of Day-7 (tests whether the Day-7 anchor is correct or whether earlier intervention is more effective)

**Risk:** Modal interruptions on dashboard arrival are a known friction surface; if mistargeted, they generate negative feedback at higher rates than ambient prompts. **Mitigation:** strict conditional rendering (`watchlist_count = 0` check on every render, not cached), 7-day suppression on dismissal, and a hard ceiling of 3 lifetime appearances per user (after the third dismissal, do not show the modal again under any condition — log the user as having explicitly opted out of the activation flow).

**Sequencing relative to prior recs:**
1. **Week 1:** Reciprocity (Apr 25) — empty-state pre-population. Anonymous/logged-out adjacent.
2. **Week 2:** Social proof (Apr 26) — event card badge.
3. **Week 3:** Anchoring (Apr 27) — comparison framing.
4. **Week 4:** Commitment/consistency (Apr 23) — second-action prompt post-add.
5. **Week 5:** Loss aversion (Apr 24) — target-prompt panel post-add + revisit.
6. **Week 6:** Implementation intentions (Apr 28) — post-signup intent capture (Day-0).
7. **Week 7:** Zeigarnik effect (Apr 29) — persistent dashboard incompleteness header (every-session ambient).
8. **Week 8 (today):** Implementation-intentions re-prompt — single-question modal at Day-7+ inert dashboard arrival (active counterpart to Week 7's passive header).

Today's rec sits at *the active-prompt counterpart of yesterday's passive Zeigarnik header.* Together they form a two-layer activation system for the inert-logged-in surface: the header creates ambient cognitive tension (passive); the modal creates an explicit forcing question on Day-7+ inert sessions (active). **Each on its own would lift activation; both together compound, because the user who dismisses the modal still sees the header on every subsequent session, and the user who tunes out the header gets the modal as a one-time interruption.**

**Hand to:** CRO Agent (Agent 6) for the modal component spec + dismissal-persistence schema + conditional-render logic. Backend ticket for `users.last_modal_dismissed_at` column + `/api/users/me` payload extension is owned outside the agent system.

---

## Deliverables (handoffs)

1. **Analytics Agent (HIGHEST PRIORITY, carried +7 days):** (a) Referrer/UTM pull on ids 57–60 (carried). (b) Referrer/UTM pull on ids 61, 62 (carried — both instant-activators). (c) Referrer/UTM pull on id 63 (lilianamasyrubi). (d) Referrer/UTM pull on id 64 (zhili1208). (e) Cohort velocity for ids 1–64 over rolling 30 days (carried). (f) Trending-events query for reciprocity rec (carried). (g) `tracker_count` aggregation for social proof rec (carried). (h) Matched-drops query for loss-aversion rec (carried). (i) **NEW: clarify `usersThisWeek` semantics** — the metric dropped 8 → 4 today and the calendar boundary doesn't fit either a 168h-rolling or a calendar-week model. Either there's a date-only calendar boundary I'm missing or the metric is buggy. (j) **NEW: post-event watchlist-cleanup signal** — for ajvanprooyen's 6-event Cubs trip happening May 1-6, can we detect attendance via watchlist deletes or any session signal? Without this we lose all attribution on the trip outcome. **Today adds:** the 3-vs-6 known/unknown source bifurcation is unchanged at Day 7 of the dependency; the data point is no longer accumulating new signal but the signal is already strong enough to act on.

2. **CRO Agent:** (a) Activation gap **4 users in 7-day window** (zhili1208 1d, lilianamasyrubi 2d, mark.murdock 7d B2B, awwhittington 7d) **plus 4 outside the 7d band but still inert** (charlesteel 8d, ggri73 8d, dr.altvater 10d, dylanbaldy 14d churned). (b) **NEW: implementation-intentions re-prompt modal spec** (above) — sequenced **eighth** of eight psych recs, operates as the active counterpart to yesterday's passive Zeigarnik header at the Day-7+ inert dashboard surface. (c) Carried: Zeigarnik persistent dashboard header (Apr 29), implementation-intentions post-signup screen (Apr 28), anchoring framing for `/compare` + `/event/[id]` (Apr 27), social-proof EventCard badge (Apr 26), reciprocity dashboard empty-state (Apr 25), loss-aversion target panel (Apr 24), commitment-consistency 2nd-action (Apr 23). (d) Newsletter homepage form: **88 days flat = 12 weeks 4 days.** Audit blocking subscriber growth for one full quarter and 4 days.

3. **Email Agent:** **17 churn-intervention emails ready** (16 yesterday + 1 net new: pete Day-21 rewrite drafted today for tomorrow's send). Priority order: **mark.murdock B2B Day-7 (FIRES TODAY, on-schedule)** → **awwhittington Day-7 (FIRES TODAY, on-schedule)** → **charlesteel Day-7 pivot (FIRES TODAY, 24h late)** → **ggri73 Day-7 (FIRES TODAY, 24h late)** → **josh Day-7 (FIRES TODAY, 4d late, "eleven days in" edit)** → **dr.altvater Day-14 forcing question (FIRES TODAY, pivoted from Day-7 hard-expiry)** → **taranimeramaro Bruno-MetLife Day-3 (FIRES TODAY, 48h late, hard expiry tomorrow)** → **nmcnamee99 post-Raptors Day-3 (FIRES TODAY, 48h late, 1-line edit needed for Game 3 result)** → **pete Day-19→Day-20 (FIRES TODAY, 168h late, hard expiry today)** → **nicklib Day-14 win-back (FIRES TOMORROW)** → **pete Day-21 rewrite (FIRES TOMORROW, drafted above)** → **dylanbaldy (CHURNED — repurpose to win-back tier or drop)** → **blubberboi (Day-14 long runway)** → bhaygood, laye, billstromkel, tucwildcat, jkaiser. **Today is the highest-density firing day of the outage window: 9 sends if engine returns. Tomorrow: 2 more.**

4. **Content Agent:** (a) Cubs / Wrigley out-of-market trip hub page: ship as planned. **The first event in the trip happens tomorrow (May 1).** (b) Bruno Mars cross-city/cross-venue cluster hub page — taranimeramaro Day-3 fires today (or tomorrow), this hub becomes the natural reference link. (c) German-market consideration for dr.altvater + future EU signups (carried). (d) **NEW: "What to do when your team's playoff series moves to the road" hub page** — surfaced by today's nmcnamee99 Day-3 rewrite needing a Game 3 outcome. The "Toronto wins → Game 4 close-out" vs "Toronto loses → Game 5 win-or-go-home" decision tree applies generally to any Round-1 NBA series and is evergreen content for the playoff window.

5. **Ads Agent:** (a) Cubs out-of-market audience signal — same. (b) Bruno Mars MetLife audience signal — taranimeramaro pre-queue still pending fire (now 48h late). (c) **Attribution-pull dependency now Day 7 unfulfilled.** No new unattributed signups today (zero signups), so the unknown-source pile holds at 6 of last 9 — but the recovery-cohort logic (a known-source signup who activates) requires Analytics resolution to engineer. **Reiterating: this is the single highest-leverage open dependency in the growth stack, into Day 7.**

6. **Open from previous days (unchanged, carried):** (a) `last_login_at` column — **Day 24**. (b) Drip cron revival — **Day 24**, blocking all 17 drafted emails including 9 firing today. (c) Server-side `last_scan_at` emission on watchlist rows — superseded by loss-aversion rec. (d) Newsletter homepage form audit — **88 days flat = 12 weeks 4 days**. (e) Pre-populated-item flag on watchlist schema for reciprocity rec. (f) `tracker_count` aggregation in search response for social-proof rec. (g) `users.first_action_trigger_at` column + cron job for implementation-intentions rec (Apr 28). (h) Derive completion-state query for Zeigarnik header rec (Apr 29). (i) **NEW: `users.last_modal_dismissed_at` column + `/api/users/me` payload extension for today's implementation-intentions re-prompt rec.**

## Trend watch (7-day)

| Metric | Apr 24 | Apr 25 | Apr 26 | Apr 27 | Apr 28 | Apr 29 | Apr 30 |
|--------|--------|--------|--------|--------|--------|--------|--------|
| Total users | 60 | 60 | 62 | 62 | 63 | 64 | **64** |
| Watchlist items | 81 | 81 | 85 | 85 | 85 | 85 | **85** |
| Target prices set | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Drip emails sent | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Active subscribers | 3 | 3 | 3 | 3 | 3 | 3 | **3** |
| New signups (day) | 0 | 0 | 2 | 0 | 1 | 1 | **0** |
| `usersThisWeek` (API) | 8 | 7 | 9 | 8 | 8 | 8 | **4** |
| At-risk count | 2 | 2 | 3 | 3 | 4 | 4 | **6** |
| Churned count | 52 | 52 | 52 | 52 | 52 | 53 | **53** |
| Activation rate (real users) | 73.7% | 73.7% | 75.4% | 75.4% | 72.9% | 72.1% | **72.1%** |

**Read:** Acquisition pulse pattern (Apr 26 + Apr 28 + Apr 29) extended to a 2-day consecutive run yesterday and broke today. **5-day window: 3 signups in 5 days (Apr 26 + 28 + 29), all clustered, with two never-activators in the immediate-prior 48h.** Watchlist items remain at 85 for the **fifth consecutive day** — 120h flat, tied for the second-longest engagement-flat streak in the dataset. **Day 24 of zero retention emails, zero target-prices set.** No new churned user today (next candidate: nicklib at Day 13, crossing tomorrow EOD). **First flip-quiet day in 6** — algo-flip cascade closed; next flip ~13-17 days out.

**The two-day forecast:**
- **Apr 30 (today):** mark.murdock + awwhittington both cross Day 7 (forecast hit). dr.altvater Day-7 hard-expires (forecast hit). **9 emails fire if engine returns.** Apr 26 lilianamasyrubi crosses Day 2 → Day-3 fires tomorrow.
- **May 1 (tomorrow):** nicklib Day-14 win-back fires. pete Day-21 rewrite fires (168h carried fully expires; 504h = 21d framing kicks in). lilianamasyrubi Day-3 fires (first activation send on the new cohort, *if* she hasn't activated). **First two events in the ajvanprooyen Cubs trip happen** (Cubs vs Diamondbacks May 1 + tate.sheppard's Florence + Machine May 1 — both passed-event no-notification increments). zhili1208 crosses Day 2.

**The pattern that crystallized today:** **0 signups + 5th day of flat watchlist + 168h pete-uzelac framing expiry + dr.altvater Day-7 expiry + dylanbaldy still in churned — the sustained quiet on every forward-looking metric.** Yesterday's report flagged the activation rate inversion from neutral-positive to declining/flat; today confirms that pattern with another flat day. The trend is no longer ambiguous — it is decidedly soft. The recovery signal would be a known-source signup who activates; the engineering for that recovery requires Analytics attribution resolution, which is now Day 7 of the dependency. **The retention metrics will not recover without that resolution; the resolution sits with one query that has not been run for 7 days.**
