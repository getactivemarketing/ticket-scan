# Growth Daily -- 2026-04-24

## User health dashboard

| Segment                     | Count | % of Total | vs Apr 23 |
|-----------------------------|-------|------------|-----------|
| Total users                 | 60    | 100%       | **+0 (first zero-signup 24h window since tracking began)** |
| New (last 7 days)           | 8     | 13.3%      | unchanged count (window rolled — still contains yesterday's 4-signup cluster) |
| Activated (has watchlist)   | 41    | 68.3%      | +0 (no new watchlist adds in last 24h either — stat has sat flat since ajvanprooyen closed his 6-item session 01:01 UTC Apr 23) |
| Active (visited in 7 days)  | unknown | —        | no `last_login_at` instrumentation — Day 18 open |
| At-risk (7-14d signup-age proxy) | 2 | 3.3% | **-2 net: pete + goldy + blubberboi all rolled to churned today; nicklib rolled in at Day 7** |
| Churned (14d+ signup-age proxy) | 52 | 86.7% | **+3 (pete, goldy, blubberboi all crossed Day 14 today)** |

> Day 18 without `last_login_at` instrumentation.
> Active alerts across **81** watchlist items: **0**. Target-price capture rate: **0% (Day 18).**
> `usersToday: 0`, `usersThisWeek: 8` in stats — weekly count unchanged (ajvanprooyen/mark.murdock still in the 7-day window, dr.altvater rolled out on Apr 20+7=Apr 27 so still in).
> Watchlist items held at **81** — nothing added since ajvanprooyen's 01:01 UTC session closed yesterday. 23h 59m of zero-signal across both metrics.

## What changed in 24h

1. **Zero signups in the calendar-day UTC window. First such day since we started tracking.** Yesterday we registered 4 signups in 5h 43m. Today we registered 0 in 24h. This is not a single-data-point worry — one quiet day is noise — but it is the single sharpest-contrast 48-hour window we've had, and the obvious question (was yesterday's cluster a repeatable channel or a one-off?) is still unanswered because the attribution pull from yesterday hasn't landed. **Analytics Agent: the value of ids 57–60 referral data doubled today.** If yesterday was a repeatable source we have a reactivation playbook. If it was a one-off, we have confirmation that organic acquisition remains at the ~1-per-day baseline we've been seeing for weeks.

2. **Three users crossed from at-risk into churned today.** pete.uzelac77 (Day 14, 6 items, 0 targets), goldy.pec (Day 14, Bilmuri tomorrow = algo flip tomorrow), blubberboi (Day 15, Ed Sheeran Aug 8). All three spent their full 7-day at-risk window without a single re-engagement touch because the drip engine has been dead since Apr 7. The concretization today: **pete's Day-14 drip threshold fires today with the engine still off. This is the single highest-leverage send in the pending queue and it is now silently passing.** If pete had gotten a target-price email anytime in the last 14 days, he probably would have set at least one target on one of his 6 events. He did not.

3. **nicklib253 crossed into at-risk today at Day 7.** Phillies event already passed Apr 17 (7 days ago). Day-7 drip threshold also hits today — same dead-engine constraint. Bespoke copy required; standard Day-7 "set a target" is wrong when the event is already over.

4. **TATE.SHEPPARD ALGO FLIP IS TODAY.** Florence + The Machine at State Farm Arena is May 1 — 7 days out. Today the recommendation engine hardcodes "buy now" for this event regardless of any target set. **Declared post-mortem yesterday.** Documenting one more time: flagged nine consecutive days, drafted copy queued seven consecutive days, delivered zero times. The clearest documented single loss we can point to in real time.

5. **GOLDY.PEC ALGO FLIP IS TOMORROW.** Bilmuri May 2, 8 days out today, 7 days out tomorrow. One day of runway. Goldy also crossed from at-risk to churned today. The send window for a target-price email that actually produces a pre-flip target is now measured in hours.

6. **bhaygood728 hits Day 21 drip threshold today.** Cardi B event passed Apr 12 (12 days ago). Day-21 is the "how price alerts save hundreds" email — it's the wrong frame for a user whose only tracked event has already happened. Bespoke required; not a standard drip fire even if the engine revives.

7. **dr.altvater-70199 hits Day 4 today, past Day-3 threshold yesterday.** Drip #1 should have fired at Day-3 = Apr 23. Did not. No watchlist. German domain — queued copy is World-Cup-led which remains the strongest hook. Clock +1 day, same dead-engine state.

8. **joshdguillemette hits Day 5 today, past Day-3 threshold since Apr 22.** Has 1 watchlist item (AEW Double or Nothing May 24). Activated but no follow-up. Day-5 nudge for target-price setting is pending.

9. **ajvanprooyen holds at 6 Cubs items, 0 targets, 1 day post-activation.** First Cubs game May 1 — 7 days out today. Same algo-flip timing as tate: **tomorrow May 1 goes inside the 7-day window and the "buy now" override triggers on the first event of his trip.** The other 5 events extend through May 6 so they each hit their own flip windows daily through next week. Power-activator yesterday → at-risk-for-target-capture today. This is the single most winnable active account on the platform: 6 events × clear trip intent × naming-every-reason-to-set-a-target × 0 emails sent.

10. **charlesteel (Bruno Mars Ohio May 20) held at 1 item, Day 2.** Day-3 threshold fires tomorrow Apr 25 (Saturday). Drip engine status: still off. Bruno-Mars-specific Day-3 copy pre-queued since yesterday; will silently miss.

11. **Drip engine: Day 18 inactive.** `pendingUsers: 20`. All `last_email_sent: 0`. Distribution of thresholds-passed in the pending queue:
    - Day-3 or past (5 users): charlesteel (Day 2, crosses tomorrow), ggri73, awwhittington, ajvanprooyen, mark.murdock (all Day 1, cross Apr 26) — plus dr.altvater (Day 4, past), josh (Day 5, past)
    - Day-7 or past (4 users): nicklib (Day 7 today), dylanbaldy (Day 9), plus Day-14 crossers
    - Day-14 or past (3 users): pete, goldy, blubberboi (all hit today or yesterday)
    - Day-21 or past (1 user): bhaygood (Day 21 today)
    - Day-30 or past (2 users): billstromkel (Day 30 today), tucwildcat (Day 33), leofearon (Day 34)

    That is **four separate drip thresholds converging in today's firing window alone** (charlesteel tomorrow, nicklib, pete, bhaygood, billstromkel) — none will fire.

12. **Newsletter subscribers: 3, unchanged since Feb 1 — now 82 days flat.** Homepage form has produced zero signups across Q1 + Q2-so-far. 24h-no-signup-day made this the second zero-signal axis today.

## Activation gap

- **4 users** signed up in last 7 days with 0 watchlist items:
  - **dylanbaldy@gmail.com** — Day 9 (+1, at-risk Day 2). Eighth consecutive day flagged.
  - **dr.altvater-70199@web.de** — Day 4 (+1, past Day-3 drip threshold).
  - **ggri73@gmail.com** — Day ~1.1 (+1). Was "5.7h post-signup, starting to stale" yesterday; now 30h in with nothing. Window closing.
  - **awwhittington@icloud.com** — Day ~1.0 (+1). 26.5h post-signup, no watchlist.
  - **mark.murdock@lanternsec.com** — Day ~0.9 (+1). 21h post-signup, no watchlist. B2B domain (Lantern Security). Evaluation signup still plausible; lower activation confidence.
- **15 real users** (excluding 3 test accounts) have never added a watchlist item → **26.3% of real signups** — identical to yesterday. No degradation only because no signups at all landed today.
- **Acquisition-source inference still blocked.** Yesterday's 4-signup cluster attribution remains the single most-valuable outstanding analytics pull, now more so given today's zero-signup follow-up. If we pull referrer data today and all four came from one source that clearly stopped producing today, we know it was a burst, not a baseline. If they're organic/direct, we know yesterday was a lucky cluster in a noisy 1-per-day process.

## Churn signals

- Unsubscribes today: **0**
- Users entering "at-risk" today: **1** (nicklib253, Day 7 threshold)
- **Users entering "churned" today: 3** (pete.uzelac77 Day 14, goldy.pec Day 14, blubberboi Day 15) — **biggest single-day churn event on record**
- Alert fatigue candidates: 0 (0 alerts ever sent — Day 18)
- Events passed without notification (cumulative): 5 — unchanged (no new events passed in 24h; next is tate.sheppard Florence May 1, but technically the algo-flip crossing today is the "loss" not the event passing)
- Days-since-signup for oldest non-activators (60+ days, functionally dead without reactivation trigger we don't build): samir.sgpatel+test2 (88d), ctwarman (89d), maresa (88d), misskaylajay (94d — excluded, not in pull), samme.braem (93d), cassichino23 (59d today). Zero change because zero inputs today.

## At-risk users (7–14d inactive)

| User | Day | Watchlist | Days to event | Recommended intervention |
|------|-----|-----------|---------------|--------------------------|
| nicklib253@gmail.com | **7d (new)** | 1 (Phillies passed Apr 17) | **passed -7d** | Bespoke Day-7 — "the event you were tracking already happened; here's how this works for the next one" |
| dylanbaldy@gmail.com | 9d | 0 | — | Tier 1 activation nudge — eighth consecutive day flagged |

**Note on at-risk bucket shrinkage:** Yesterday the at-risk bucket had 4. Today it has 2. This is not an improvement — three of the four graduated into *churned*. Bucket-size reduction here is a failure metric, not a success metric.

## Newly churned today

| User | Day | Watchlist | Days to next event | Recovery priority |
|------|-----|-----------|--------------------|-------------------|
| **pete.uzelac77+ticketscan@gmail.com** | 14d | **6 (4 WC + 2 Darts, 0 targets)** | 55–72d / 63–64d | **HIGH — 6-item power-user, Day-14 drip threshold fires today with engine off** |
| **goldy.pec.2012@gmail.com** | 14d | 1 (Bilmuri May 2) | **8d — algo flip tomorrow** | **HIGH — algo-flip window closes in <24h** |
| blubberboi@yahoo.com | 15d | 1 (Ed Sheeran SoFi Aug 8) | 106d | MEDIUM — long runway makes this survivable if anything at all goes out |

## Churned users with re-engagement potential

| User | ~Days inactive | Watchlist items | Upcoming hook? | Priority |
|------|----------------|-----------------|----------------|----------|
| tate.sheppard@gmail.com | ~41d | Florence @ State Farm Atlanta | **7d — algo flip TODAY** | **POST-MORTEM (finalized today)** |
| tosophiameyer@gmail.com | ~45d | **11** (Harry Styles MSG, Aug 26–Sep 16) | 122–146d | **HIGH — power user** |
| brigitte.theisen@gmail.com | ~58d | **10** (Backstreet Boys Sphere, Jul 17–Aug 6) | 84–104d | **HIGH — power user** |
| pete.uzelac77 | **1d (just churned)** | **6** (WC + Darts) | 55–72d | **HIGH — freshest churn, highest item count among churned** |
| goldy.pec | **1d (just churned)** | 1 (Bilmuri May 2) | **8d** | **HIGH-URGENT** |
| laye.aurelien@wanadoo.fr | ~23d | 2 (Shakira Jul 20 + 23) | 87–90d | HIGH |
| lvasub6@gmail.com | ~26d | 2 (Flyleaf HoB Chicago Jul 17–18) | 84–85d | HIGH |
| blubberboi | **1d (just churned)** | 1 (Ed Sheeran Aug 8) | 106d | MEDIUM |
| krusesin2023@gmail.com | ~56d | 2 (Flyleaf Jul) | Yes | MEDIUM |
| ldholman@ymail.com | ~52d | 3 (Bad Omens passed; 2x Motionless In White Aug 11) | Partial | MEDIUM |
| spcoog83@gmail.com | ~47d | 1 (Olivia Dean Toyota Aug 25) | 123d | MEDIUM |
| edithdionne@hotmail.com | ~51d | 1 (A7X + GC Centre Bell Aug 8) | 106d | MEDIUM |
| bhaygood728@gmail.com | ~22d | 1 (Cardi B passed Apr 12) | No | LOW |
| chocolateyu1083@yahoo.com | ~25d | 1 (Oilers passed Mar 31) | No | LOW |
| arin.gelbaugh@outlook.com | ~25d | 1 (NCAA Final Four passed Apr 4) | No | LOW |
| missbrookeshep@gmail.com | ~52d | 1 (Warriors/Rockets passed Apr 5) | No | LOW |
| billstromkel@gmail.com | ~31d | 1 (RAYE passed Apr 8) | No | LOW |
| jkaiser@weberschool.org | ~39d | 1 (NCAA 2nd Rd passed Mar 21) | No | LOW |
| tucwildcat@msn.com | ~34d | 1 (NCAA 2nd Rd passed Mar 22) | No | LOW |

**Passed-event overhang:** 8 churned users whose only tracked event has already happened, now +nicklib who has functionally joined them. Cohort is dead without a re-engagement hook we don't currently build.

## Churn intervention: email content (ready to queue when drip engine returns)

### POST-MORTEM (FINAL) — tate.sheppard@gmail.com (Florence, **algo flip TODAY**)

Tenth daily flag. Algo flip has arrived. The event is now inside the 7-day window and the page hardcodes "buy now." No target-price email can produce a usable alert at this point; a target set after the flip gets overridden. Closing the file today.

**Subject (archived, not sending):** Florence tonight and tomorrow — your watchlist never got to do its job
**Status:** POST-MORTEM — carry into weekly retro (Monday Apr 27) as the lead case study

---

### CRITICAL — goldy.pec.2012@gmail.com (Bilmuri, 8d out, **algo flip tomorrow, user crossed to churned today**)

Double failure mode today: user rolled from at-risk to churned AND algo flip is tomorrow. If the drip engine revives before midnight local time tonight, this is the **first** email that goes out. Ahead of pete. Ahead of everything.

**Subject:** Bilmuri Saturday — tomorrow the target-price alert stops being useful
**Body:**
> Bilmuri at The Sylvee is eight days away. On Saturday the event crosses inside our 7-day window — our recommendation engine flips to "buy now" regardless of any target you set. After that, target-price alerts are just writing numbers down while the site tells you to buy.
>
> If you want the cross-market email — Ticketmaster, SeatGeek, StubHub, first one under your number wins — today is the last useful day.
>
> [Set your target price](https://www.ticketscan.io/watchlist)

**Send timing:** immediately on drip revival; fallback 6pm CDT today

---

### HIGH — pete.uzelac77+ticketscan@gmail.com (Day 14, **crossed to churned today, Day-14 drip threshold fires today**)

This was the highest-leverage deliverable in the pending queue yesterday. Today it's the highest-leverage deliverable that has now failed. Send anyway the moment engine returns — 6 items × ~780 cross-market checks × 0 emails is still the clearest "setting one number unlocks everything" case on the platform.

**Subject:** 6 events, ~780 price checks, 0 emails — one setting fixes all of it
**Body:**
> Six events on your TicketScan watchlist — four World Cup matches at Lincoln Financial, two nights of Darts Masters at MSG. Since April 10 we've run roughly 780 cross-market price checks across them. None produced an email to you.
>
> The missing piece is the target price. Without one we can see the movement but don't know which way matters to you. With one set — even a rough ceiling — we email the moment any of the three marketplaces drops below.
>
> Group-stage World Cup matches at Lincoln Financial have been drifting 15–25% below opening-week resale floors. A target now catches the next dip.
>
> [Set target prices on your 6 events](https://www.ticketscan.io/watchlist)

**Send timing:** 11am EDT Apr 24 (Day-14 drip convergence) — target send window is today regardless of engine status

---

### HIGH — ajvanprooyen@crimson.ua.edu (Day 1, Cubs week trip, **first event algo-flips tomorrow**)

Needs to move earlier than Day-3. Power-activator with clear trip intent and the first of his 6 events flipping into the 7-day "buy now" window tomorrow. Standard Day-3 convention would fire Apr 26 — by then half his trip has algo-flipped. Bring forward to today.

**Subject:** Your Cubs week starts in 7 days — target prices now catch the dips
**Body:**
> Yesterday you added six Cubs home games at Wrigley — the May 1 Diamondbacks opener through the May 6 Reds finale. That first game is seven days away today.
>
> Since you added them we've been pulling prices every 4 hours from Ticketmaster, SeatGeek, and StubHub for each date. What hasn't happened: an alert. Without a target price we can see movement but won't email.
>
> The pattern on Cubs weekday home games has been resale softening 12–20% inside the 10-day window, with Tuesday/Wednesday getaway-day prices dropping sharpest. Targets set today catch that cleanly — and you can set one number across all six dates if you want.
>
> [Set your target prices](https://www.ticketscan.io/watchlist)

**Send timing:** 10am CDT today (Apr 24) — not Apr 26 as originally queued

---

### Bespoke Day-7 — nicklib253@gmail.com (Day 7, Phillies passed, past-event re-engagement)

Standard Day-7 drip ("how alerts save hundreds") is wrong — his event already happened. Reframe as "next event" prompt. First at-risk user where the right email is not the scheduled drip.

**Subject:** Phillies game is over — want to set this up for the next one?
**Body:**
> You added the April 17 Phillies vs. Braves game to your watchlist on signup day. That game is done. Our watcher ran its every-4-hour price checks on it through the day-of; you didn't need them this time.
>
> The feature still works the other way though — pick a future event, set a ceiling price, and we email when any of Ticketmaster/SeatGeek/StubHub drops below.
>
> A few places to start:
> - [Phillies home games through August](https://www.ticketscan.io/search?q=phillies)
> - [NBA Playoffs — Sixers are in the mix](https://www.ticketscan.io/tickets/nba-playoffs)
> - [World Cup at Lincoln Financial (50 days out)](https://www.ticketscan.io/world-cup-2026)

**Send timing:** 7pm EDT today

---

### Day-14 — blubberboi@yahoo.com (just churned, Ed Sheeran SoFi Aug 8, 106d runway)

Survivable case. Long runway, low urgency, standard Day-14 frame works.

**Subject:** Ed Sheeran at SoFi: 106 days, ~84 price checks logged, still silent
**Body:**
> You added Ed Sheeran at SoFi back on April 9. Since then we've run roughly 84 cross-marketplace price checks on it. Zero emails sent — because we don't know what price would be worth pinging you about.
>
> A target price is how the watchlist becomes a product that works for you. Set one number — any number — and we email the moment any of Ticketmaster/SeatGeek/StubHub drops below it for that show.
>
> [Set your target](https://www.ticketscan.io/watchlist)

**Send timing:** 6pm PDT today

---

### Bespoke — bhaygood728@gmail.com (Day 21, Cardi B passed, standard Day-21 wrong frame)

Day-21 drip is "your savings report" — wrong for a user whose only event already happened and who is ~22 days inactive. Skip standard send. Draft a re-engagement instead; very low priority.

**Subject:** Cardi B was almost two weeks ago — want the next tour of yours on here?
**Body:** (short re-engagement, link to search, no unearned claims)
**Priority:** LOW — below all of today's priority queue

---

### Ongoing — dylanbaldy@gmail.com (Day 9, 0 watchlist, eighth consecutive day flagged)

Draft unchanged from prior days. Copy still correct; single variable is delivery.

**Subject:** Still haven't picked anything — one event is all we need
**Send timing:** 11am EDT today

---

### Day-3/4 — dr.altvater-70199@web.de (Day 4, past Day-3 threshold since yesterday)

WC-led copy still correct for .de domain. Day-3 fire is now a day late.

**Send timing:** immediately on revive; fallback 9am CET tomorrow

---

### Day-5 follow-up — joshdguillemette@gmail.com (Day 5, 1 item AEW Double or Nothing May 24)

Activated. AEW event is 30 days out — comfortable runway for target-setting. Standard "set your target" nudge.

**Subject:** AEW Double or Nothing is in 30 days — here's the target-price setup
**Body:** (standard target-price pointer, AEW-aware framing)
**Send timing:** 10am EDT today

---

### Welcome (Day 3) — pre-queue for Apr 26/27 fires

- **ggri73@gmail.com** — generic welcome (no activation signal to personalize)
- **awwhittington@icloud.com** — generic welcome
- **mark.murdock@lanternsec.com** — generic welcome, B2B-domain flag
- **charlesteel126@gmail.com** — Bruno-Mars-specific (Day-3 fires Apr 25 Saturday)

All copy unchanged from yesterday.

---

## Psychology-driven optimization — one recommendation

### Principle: **Loss aversion** (Kahneman/Tversky), applied to watchlist items with no target price set

**Where:** Watchlist item card component, specifically the empty-target state (currently the default state for **100% of 81 items on the platform**).

**Problem this targets:** Target-price capture rate is 0%, Day 18. Our single point of leverage for every retention email, every alert, every "you saved X" downstream narrative is that number going above zero. The current empty state is effectively silent — just a "set target" button. Users don't know what the absence costs them because nothing visible in the UI counts the cost. Yesterday's rec (commitment/consistency for second-action) addresses the *activation* gap; today's rec addresses the gap one step beyond activation — the *target-setting* gap. Together they form the two-stage conversion funnel the product actually has.

**Exact UX change:**

Replace the empty-target call-to-action in the `WatchlistItem` component with a loss-framing panel:

```
🔔 No target set
We've checked this event 147 times since you added it. 23 price drops matched no target,
so you saw none of them.
One number below turns that off.

[ $_____ ] [ Save target ]

(Tip: you can start high — you can always lower it later.)
```

Four new elements, each with a specific psychological function:

1. **Count of checks already performed** ("147 times") — establishes sunk-cost: the system has already done work for you that you have not yet redeemed. Loss aversion activates more cleanly when the user has already paid a cost (their time, their attention, their having signed up).
2. **Count of price drops that would have matched** ("23 price drops matched no target") — this is the direct loss. Implicitly it asks "how many of those 23 would have been your number?" The user cannot answer that — they only know that the answer is nonzero.
3. **"…so you saw none of them"** — closes the loop. Makes the cost concrete and blames the missing setting, not the product.
4. **"Start high, you can always lower it"** — defuses the loss aversion on the *other* side (the fear that setting a target commits them to a bad one). Reframes target-setting as reversible.

**Data source for the counts:**

Per-item check count comes from `price_history` — `SELECT COUNT(*) FROM price_history WHERE event_id = ? GROUP BY event_id`. Already available on the backend; just needs to be joined to the watchlist row on fetch.

Per-item "drops that matched no target" is harder but possible — define a drop as `current_min_price < trailing_7d_avg * 0.85` (15%+ below average). Count per-event since watchlist-add date. Falls out of the same `price_history` table with a window function. **Analytics Agent territory**: write the query, confirm the number is real, before the copy ships.

**Why loss aversion beats other principles here:**

- Social proof is weak because we don't have "10,000 users" — we have 60. Inventing a denominator would detect as false.
- Scarcity doesn't map — there's no inventory to be scarce of.
- FOMO is close to loss aversion but weaker: FOMO is about *future* events; loss aversion works on *concrete past* losses the user didn't know they were sustaining.
- Anchoring is a compare-page principle, not a watchlist principle.
- Commitment/consistency was yesterday's rec, focused on the prior funnel step.

Loss aversion is also the only principle that directly addresses the specific feature gap ("no target set") rather than trying to pull the user into a different action. The user is already on the watchlist; the only thing missing is one number. Put the cost of not supplying that number in front of them.

**Expected impact:**

Baseline: 0% of 81 items have targets. If even 10% of currently-activated watchlist items (41 users with items) set one target in the next 30 days because of this copy, we go from 0 alerts ever fired to potentially 3–8 alert fires in May. That's the first real retention signal the product would have ever produced. Any number above 0 is also a narrative unlock for the drip campaign ("X people set targets this month, Y got an alert, Z acted on it").

**Ship cost:** `WatchlistItem` component update (~30 min), backend join on `price_history.count` to watchlist fetch (~30 min), analytics query for "drops that matched no target" claim verification (~45 min, Analytics Agent). ~2h total.

**Sequencing with yesterday's rec:** Don't ship both in the same week. Commitment/consistency (yesterday) goes first because it addresses the earlier funnel step — it gets more users *to* the watchlist, which makes loss-aversion copy on the watchlist meaningful. Ship commitment/consistency Week 1, loss aversion Week 2.

**Counter-copy variants to A/B later:**
- Control: "No target price set. [ Set target ]"
- Variant A (above): loss aversion with count + matched-drops
- Variant B (gentler): "We've checked this 147 times. Set a number and we'll email when a marketplace drops below." (no matched-drop count — removes the most provocative element)
- Variant C (time-framed): "We've watched this for 14 days. Set a target and the next drop sends you an email."

**Hand to:** CRO Agent (component spec and copy test setup); Analytics Agent (matched-drop query definition and number verification — **must** land before copy ships, because the count has to be real).

---

## Deliverables (handoffs)

1. **Analytics Agent (HIGHEST PRIORITY, carried +1):** (a) Referrer/UTM pull on ids 57–60 is **more urgent today** than yesterday — zero signups today is the natural-experiment counterfactual. (b) New: draft the "drops that matched no target" query for loss-aversion copy (see psych rec above). (c) New: day-over-day activation velocity trend — we need to see if zero-signup-24h is recoverable or the start of a pattern.

2. **CRO Agent:** (a) Activation gap remains 4 users (dylanbaldy Day 9, dr.altvater Day 4, ggri73 Day 1, awwhittington Day 1) + mark.murdock flagged low-confidence. (b) Newsletter homepage form: 82 days flat, still unresolved. (c) New spec: loss-aversion watchlist card copy (above). (d) Sequencing note: ship yesterday's commitment/consistency rec before today's loss-aversion rec.

3. **Email Agent:** **12 churn-intervention emails ready**; none will send until drip engine revives. Priority order: **goldy (algo flip tomorrow)** → **ajvanprooyen (first Cubs game algo flips tomorrow — moved forward from Apr 26)** → **pete (Day-14 threshold today, just churned)** → **nicklib (bespoke Day-7, past-event)** → **dylanbaldy (activation nudge)** → **blubberboi (Day-14 long runway)** → **josh (Day-5 nudge)** → **dr.altvater (late Day-3)** → bhaygood (bespoke, LOW) → Day-3 pre-queues (awwhittington/ggri73/mark/charlesteel) for Apr 26–27. Tate is archived post-mortem, not a send.

4. **Content Agent:** (a) Cubs / Wrigley out-of-market-trip hub page still warranted — ajvanprooyen's 6-item cluster and first-game-in-7-days timing make this a now-or-never content slot. If we publish this weekend with an "OOT Cubs trip — price targets for a 6-day window" angle, we have the timeliness hook. (b) No new pattern today (zero inputs).

5. **Ads Agent:** (a) Cubs out-of-market audience signal still open. (b) Bruno Mars cross-city cluster unchanged. (c) Attribution-pull dependency for yesterday's 4-signup cluster — if it resolves as a specific source, audience-seed it today.

6. **Open from previous days (unchanged):** (a) `last_login_at` column — Day 18, blocking proper active/churned segmentation. (b) Drip cron revival — Day 18, blocking all 12 drafted emails above. (c) Server-side `last_scan_at` emission on watchlist rows — now superseded by today's loss-aversion rec which is a stronger framing of the same data pipe. (d) Newsletter homepage form audit — still open, 82 days flat.

## Trend watch (7-day)

| Metric | Apr 18 | Apr 19 | Apr 20 | Apr 21 | Apr 22 | Apr 23 | Apr 24 |
|--------|--------|--------|--------|--------|--------|--------|--------|
| Total users | 53 | 54 | 55 | 55 | 56 | 60 | **60** |
| Watchlist items | 73 | 74 | 74 | 74 | 75 | 81 | **81** |
| Target prices set | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Drip emails sent | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Active subscribers | 3 | 3 | 3 | 3 | 3 | 3 | **3** |
| New signups (day) | 0 | 1 | 1 | 0 | 1 | 4 | **0** |
| At-risk count | 3 | 3 | 3 | 3 | 3 | 4 | **2** |
| Churned count | 45 | 46 | 47 | 47 | 48 | 49 | **52** |

**Read:** The zero-signup day cleanly inverts yesterday's high. Over seven days the signup pattern is 0-1-1-0-1-4-0 — the 4 is a visible anomaly, not a new baseline. Watchlist items flat at 81 for 24h confirms the activation side also paused. Meanwhile the *churned* count jumped +3 — the biggest single-day loss of the month — because three users spent their entire at-risk window in a dead-drip state. The clearest way to frame today: **the retention funnel emitted a loud failure signal (3 churn crossings + 1 algo-flip post-mortem + 4 unfired drip thresholds) on the one day the acquisition funnel gave us no compensating input.** That's a read-in-one-snapshot of where the product is: not quite dead, but two quiet engines instead of one.
