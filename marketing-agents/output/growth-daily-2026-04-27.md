# Growth Daily -- 2026-04-27

## User health dashboard

| Segment                     | Count | % of Total | vs Apr 26 |
|-----------------------------|-------|------------|-----------|
| Total users                 | 62    | 100%       | +0 (silence resumed — yesterday's 2 signups were a 24h blip, not a return to baseline) |
| New (last 7 days)           | 8     | 12.9%      | -1 (rolling 7d: 9→8; josh rolled out at 11am UTC, dr.altvater rolls out 14:08 UTC today) |
| Activated (has watchlist)   | 43    | 69.4%      | +0 (no new watchlist adds in 24h; the 4 zero-watchlist users from the Apr 22–23 cohort still at 0) |
| Active (visited in 7 days)  | unknown | —        | no `last_login_at` instrumentation — **Day 21 open** |
| At-risk (7-14d signup-age proxy) | 3 | 4.8% | +0 net (josh crossed Day-7 today as forecasted; nicklib + dylanbaldy carry; pool stable at 3) |
| Churned (14d+ signup-age proxy) | 52 | 83.9% | +0 (next crossing is **dylanbaldy → Day 14 on Apr 29**) |

> Day 21 without `last_login_at` instrumentation.
> Active alerts across **85** watchlist items: **0**. Target-price capture rate: **0% (Day 21).**
> `usersToday: 0`, `usersThisWeek: 8` — **the 24h Apr 26 recovery did not extend.** Two-day window now reads: 2 signups Apr 26, 0 signups Apr 27. The Apr 25 11:51 UTC inflow stays the most recent; we're back at ~24h+ of silence and counting.
> Watchlist items: **85, unchanged from yesterday.** No adds, no removes. The two new users from Apr 25 made their adds within minutes of signup and have been silent since.

## What changed in 24h

1. **THE ACQUISITION RECOVERY DID NOT HOLD.** Apr 26 brought 2 signups; Apr 27 brings 0. The "silence broke" framing in yesterday's report was correct *for that day* but wrong as a forward signal. The honest read on the last 72h is: 0 + 0 + 2 + 0 = 2 signups across four full days. The 1-day pulse looks more like noise than a state change. The acquisition firehose remains substantially off.

2. **AJVANPROOYEN MAY 4 FLIPPED INSIDE OVERRIDE TODAY — 4 OF 6 EVENTS NOW INSIDE.** Forecast holding to the day. Cubs vs. Reds May 4 (Brewers/Reds series opener) crossed T-7d at 13:08 CDT today and the recommendation engine is now serving "buy now" on it. **Two events still have a usable pre-flip window: May 5 (flips Apr 28) and May 6 (flips Apr 29).** Drafted email body needs a one-number update from yesterday — "three of them" → "four of them" and "three games (May 4 → May 6)" → "two games (May 5 and May 6)." Third consecutive day requiring this update; if the engine doesn't return by Apr 29, the email is meaningless because every event is inside override.

3. **JOSH CROSSED DAY-7 TODAY — NEWLY AT-RISK, AS FORECASTED.** joshdguillemette@gmail.com signed up Apr 19 20:30 UTC; Day-7 threshold hit ~21:00 UTC today. 1 watchlist item (AEW Double or Nothing May 24, 28d out — comfortable runway). Pre-queued Day-7 email from Apr 24 still works as drafted. **Carried into the immediate-on-revival queue.**

4. **APR 23 COHORT DAY-3 CLUSTER ALL PASSED THRESHOLD YESTERDAY WITH ZERO SENDS.** mark.murdock, ajvanprooyen, and awwhittington — all crossed Day-3 on Apr 26, all received nothing. ajvanprooyen activated organically (6 watchlist items added on signup day, the algo-flip cascade is the bigger story for him). mark.murdock and awwhittington are the unactivated half: now Day-4, ~24h past their Day-3 threshold, still at 0 watchlist. **Two clean cases of the engine missing its primary engagement window with no second chance until Day-7 on Apr 30.**

5. **DYLANBALDY 11TH CONSECUTIVE DAILY FLAG.** Day 11. 0 watchlist. Day-14 churned threshold fires Apr 29 (48h from now). This is the longest-running activation-gap user in the cohort and the next user to reset the "churned" count from 52 → 53. The email queued for him on Apr 17 is now 9 days late. There is essentially no realistic intervention path left here.

6. **GOLDY BILMURI T-5 TODAY** (post-mortem #2 archived). Bilmuri @ The Sylvee, May 2 — 5 days out. Inside override since Apr 25. No state change on the file; flagging here only because the event date marches on regardless of whether we reopened post-mortem #2. Will close again at T-0 (Apr 30) if nothing in the underlying retention infrastructure changes.

7. **NMCNAMEE99'S RAPTORS GAME WAS YESTERDAY (Apr 26).** Toronto Raptors v Cleveland Game 2 happened. Outcome (whether the user bought, watched, or bounced) remains unknowable without `last_login_at` and conversion tracking. **Pre-queued post-event Day-3 from yesterday is still the right move** — the email assumes nothing about whether they purchased and offers Game 3 as an organic next-watchlist-add. Fires Apr 28.

8. **TARANIMERAMARO DAY-3 FIRES TOMORROW (Apr 28).** Bruno Mars MetLife pre-queue from yesterday is ready as drafted. Three-date cluster (Aug 21/22/25), 116–120d out as of tomorrow — still the longest runway on the platform.

9. **NEWSLETTER SUBSCRIBERS: 3, unchanged since Feb 1 — now 85 days flat.** Homepage form audit still unresolved. The Feb 1 → Apr 27 stretch is now 12 weeks without a single net-new email subscriber. This is no longer a gradual decay; it's a broken funnel that has been broken for an entire quarter.

10. **ONE NEW DATA POINT WORTH FLAGGING:** the activation rate held steady at 75.4% with no new signups today — meaning yesterday's 1.7pp uplift was real (not a measurement artifact) but the trajectory now depends entirely on the next signup behaving like nmcnamee99/taranimeramaro rather than like dylanbaldy/dr.altvater. With n=2 instant-activators against n=15 never-activators in the historical cohort, the priors are still weighted toward the latter outcome.

## Activation gap

**Users signed up in last 7 days with 0 watchlist items: 4** (up from 3 yesterday by yesterday's count, but the methodology I used today is cleaner — the rolling window includes everyone Apr 20+):

| User | Signup day | Days since | Watchlist | Status today |
|------|------------|------------|-----------|--------------|
| dr.altvater-70199@web.de | Apr 20 | 7d | 0 | Past Day-3 by 4 days. Day-7 fires today. |
| ggri73@gmail.com | Apr 22 | 5d | 0 | Past Day-3 by 2 days. |
| awwhittington@icloud.com | Apr 23 | 4d | 0 | Past Day-3 by 1 day (yesterday). |
| mark.murdock@lanternsec.com | Apr 23 | 4d | 0 | Past Day-3 by 1 day. **B2B domain.** |

Plus **dylanbaldy@gmail.com** outside the 7d window: Day 11, 0 watchlist, **eleventh consecutive daily flag.** No realistic path remaining.

- **15 real users** (excluding 3 test accounts) have **never** added a watchlist item → **25.4% of real signups** (15/59). Yesterday's report quoted 24.6%; the math is 15/59 = 25.4%, so the figure is unchanged from yesterday in absolute terms (no new activations, no new signups).
- **Yesterday's "first downward movement on activation rate in 6 days" stands**, but only because the underlying data didn't change in either direction today. The next data point will arrive with the next signup — whenever that is.

**Acquisition-source inference still blocked on Analytics Agent (4 days late):**

The attribution question hasn't moved. Carried verbatim from yesterday: ids 57–60 unexplained, ids 61–62 instant-activators with single-event intent — **what is the channel?** Today adds one more data point: **0 signups in 24h** suggests the Apr 25–26 inflow was a single tweet/post/share landing once, not a channel that continues to deliver. If we can identify it, we can re-seed before it goes cold permanently.

## Churn signals

- Unsubscribes today: **0** (still 3 subscribers; **85 days flat**)
- Users entering "at-risk" today: **1** (josh crossed Day-7 ~21:00 UTC)
- Users entering "churned" today: **0** (next crossing is **dylanbaldy → Day 14 on Apr 29**)
- Alert fatigue candidates: 0 (0 alerts ever sent — Day 21)
- Events passed without notification (cumulative): 5 — unchanged.
- **Algo-overrides as preemptive "events lost without notification":** **6 events** as of today (tate Florence, goldy Bilmuri, ajvanprooyen May 1 / May 2 / May 3 / May 4). Will become 7 tomorrow (May 5 flip) and 8 Apr 29 (May 6 flip). The cascade plays out as forecasted four days running.

## At-risk users (7–14d inactive proxy)

| User | Day | Watchlist | Days to event | Recommended intervention |
|------|-----|-----------|---------------|--------------------------|
| nicklib253@gmail.com | 9d | 1 (Phillies passed Apr 17) | passed -10d | Bespoke Day-7 — past-event reframe (carried 4th day) |
| dylanbaldy@gmail.com | 11d | 0 | — | Tier 1 activation nudge — **eleventh consecutive daily flag.** Day-14 churned on Apr 29. |
| **josh** (newly at-risk today, as forecasted) | 7d | 1 (AEW May 24, 28d out) | 27d | Day-7 fires today — pre-queue from Apr 24 ready |

## Live algo-flip post-mortem (today)

| User | Event | Days out | Flip status | Days flagged | Sends |
|------|-------|----------|-------------|--------------|-------|
| ajvanprooyen | Cubs vs Diamondbacks, May 1 | 4 | flipped Apr 24 | 4 | 0 |
| ajvanprooyen | Cubs vs Diamondbacks (Bobblehead), May 2 | 5 | flipped Apr 25 | 4 | 0 |
| ajvanprooyen | Cubs vs Diamondbacks (Tee), May 3 | 6 | flipped Apr 26 | 4 | 0 |
| **ajvanprooyen** | Cubs vs Reds, May 4 | **7** | **flipped today** | 4 | 0 |
| ajvanprooyen | Cubs vs Reds, May 5 | 8 | flips Apr 28 | 4 | 0 |
| ajvanprooyen | Cubs vs Reds, May 6 | 9 | flips Apr 29 | 4 | 0 |
| **goldy.pec** (post-mortem #2 closed) | Bilmuri @ Sylvee, May 2 | 5 | flipped Apr 25 | 11 | 0 (closed) |
| tate.sheppard (post-mortem #1 closed) | Florence + Machine, May 1 | 4 | flipped Apr 24 | 12 | 0 (closed) |
| **nmcnamee99** (post-event closed) | Raptors Game 2, Apr 26 | -1 (passed) | event passed | 2 | 0 (closed) |

**Read:** 4 of 6 ajvanprooyen events now inside override; 2 to go in the next 2 days. By Apr 29 the entire 6-event trip is inside override and the email becomes meaningless. Today is the last day where the email body can credibly say "two of your events still have a real pre-flip window" — tomorrow it's "one event," day after it's "none." The send timing is no longer a discretionary call; it's a hard expiry.

## Churned users with re-engagement potential

(Carried from Apr 26, no movement on this list. **dylanbaldy will join in 48h.**)

| User | ~Days inactive | Watchlist items | Upcoming hook? | Priority |
|------|----------------|-----------------|----------------|----------|
| pete.uzelac77 | 4d (just churned) | **6** (WC + Darts) | 53–70d | **HIGH** |
| **goldy.pec** (post-mortem #2 archived) | 4d (just churned) | 1 (Bilmuri T-5 today) | passed override | CLOSED |
| blubberboi | 4d (just churned) | 1 (Ed Sheeran Aug 8) | 103d | MEDIUM |
| tate.sheppard (post-mortem #1 archived) | ~44d | Florence T-4 today | passed override | CLOSED |
| tosophiameyer | ~48d | **11** Harry Styles MSG | 119–143d | **HIGH — power user** |
| brigitte.theisen | ~61d | **10** Backstreet Sphere | 81–101d | **HIGH — power user** |
| laye.aurelien | ~25d | 2 (Shakira Jul 20 + 23) | 84–87d | HIGH |
| lvasub6 | ~29d | 2 (Flyleaf Jul 17–18) | 81–82d | HIGH |
| krusesin2023 | ~59d | 2 (Flyleaf Jul) | Yes | MEDIUM |
| ldholman | ~55d | 3 (Bad Omens passed; 2× MIW Aug 11) | Partial | MEDIUM |
| spcoog83 | ~50d | 1 (Olivia Dean Aug 25) | 120d | MEDIUM |
| edithdionne | ~54d | 1 (A7X Centre Bell Aug 8) | 103d | MEDIUM |
| bhaygood728 | ~24d | 1 (Cardi B passed Apr 12) | No | LOW |
| chocolateyu1083 | ~27d | 1 (Oilers passed Mar 31) | No | LOW |
| arin.gelbaugh | ~28d | 1 (NCAA Final Four passed Apr 4) | No | LOW |
| missbrookeshep | ~55d | 1 (Warriors/Rockets passed Apr 5) | No | LOW |
| billstromkel | ~34d | 1 (RAYE passed Apr 8) | No | LOW |
| jkaiser | ~42d | 1 (NCAA 2nd Rd passed Mar 21) | No | LOW |
| tucwildcat | ~36d | 1 (NCAA 2nd Rd passed Mar 22) | No | LOW |

**Passed-event overhang:** 8 churned users + nicklib whose only tracked event has already happened. Cohort stays dead without a re-engagement product.

## Churn intervention: email content (ready to queue when drip engine returns)

### HIGHEST PRIORITY — ajvanprooyen@crimson.ua.edu (Cubs trip, **4 of 6 events flipped, 2 more flip in next 2 days**)

Carried from Apr 26 — **the body needs another one-number swap.** "Three of them — May 1, May 2, and May 3" is now "four of them — May 1, May 2, May 3, and May 4." "The other three games (May 4 → May 6)" is now "the other two games (May 5 and May 6)." Otherwise unchanged.

**Subject:** Cubs trip update — 4 of 6 games are already inside our "buy now" window
**Body:**
> Four days ago you added six Cubs home games at Wrigley. Four of them — May 1, May 2, May 3, and May 4 — are now inside the seven-day window where our recommendation engine flips to "buy now" automatically. After that, the target-price email can't beat what the page is already telling you.
>
> The other two games (May 5 and May 6) still have a real pre-flip window. Targets set today catch the cleanest pricing on resale; targets set Tuesday catch only May 6; by Wednesday the whole trip is inside override.
>
> One number applied across both still-watchable dates is the move:
>
> [Set your target prices](https://www.ticketscan.io/watchlist)

**Send timing:** immediately on drip revival; fallback **today 11am CDT.** Tomorrow this email needs another number swap; the day after, it needs to be deleted because every event will be inside override.

---

### Day-7 fires today — josh (joshdguillemette@gmail.com)

AEW Double or Nothing May 24 (27d out). Pre-queue from Apr 24 still works as drafted. Send today 7pm EDT.

---

### Carried — taranimeramaro@gmail.com Day-3 fires tomorrow (Apr 28)

Bruno Mars MetLife three-date cluster pre-queue from Apr 26 is ready. No update needed — body remains accurate (116–120 days out tomorrow vs. 117–121 yesterday). Send Apr 28 10am EDT.

---

### Carried — nmcnamee99@gmail.com post-event Day-3 fires tomorrow (Apr 28)

Post-Raptors-Game-2 re-engagement pre-queue from Apr 26 is ready. Game happened yesterday; the email's "Saturday you signed up" framing remains correct. Send Apr 28 5pm EDT.

---

### HIGH — pete.uzelac77+ticketscan@gmail.com (Day 16, **threshold missed Apr 24, now 96h late**)

Carried from Apr 25 — copy unchanged, **96h late** on the highest-leverage send in the queue. The window where this user still feels recently engaged is closing — by Apr 30 (Day 19) the email shifts from "you're missing alerts" to "we lost you and we're trying to win you back," which is a different psychological frame and a worse-converting one.

**Subject:** 6 events, ~810 price checks, 0 emails — one setting fixes all of it
**Send timing:** immediately on revival; fallback **today 12pm EDT**

---

### Day-3 cluster (now 24h late) — mark.murdock, awwhittington

Both crossed Day-3 yesterday with no sends. Standard send today, with B2B variant for mark.murdock (carried from Apr 26).

**mark.murdock@lanternsec.com (Day 4, 0 watchlist, B2B domain Lantern Security):** B2B variant unchanged from yesterday's draft.
**awwhittington@icloud.com (Day 4, 0 watchlist):** standard Day-3 copy, 24h late.

**Send timing:** today 11am EDT (both).

---

### Carried unchanged

- **Bespoke Day-7 — nicklib253** (Phillies passed, past-event reframe): **Day-9, 2d late.** Today 7pm EDT.
- **Day-3 (3d late) — dr.altvater** (.de domain, 0 watchlist). **Day-7 fires today** — at this point the Day-3 email is more anachronistic than useful; consider swapping for a Day-7 activation nudge.
- **Day-3 (2d late) — ggri73.**
- **Day-3 (2d late) — charlesteel** (Bruno Ohio).
- **Day-7 (4d late) — dylanbaldy** (11th consecutive flag, 0 watchlist). **Day-14 churned threshold fires Apr 29.**
- **Day-14 (2d late) — pete + goldy** (goldy is post-mortem; pete is HIGH PRIORITY above).
- **Day-14 (3d late) — blubberboi** (Ed Sheeran SoFi 103d).
- **Day-21 (3d late) — bhaygood** (bespoke past-event LOW).
- **Day-21 (4d late) — laye.aurelien** (Shakira July, 84–87d runway).
- **Day-30 (4d late) — billstromkel** (RAYE passed).
- **Day-30 (6d late) — tucwildcat** (NCAA passed).
- **Day-30 (12d late) — jkaiser** (NCAA passed).

**Total emails ready to queue: 16** (15 carried + josh's Day-7 firing today).

---

## Psychology-driven optimization — one recommendation

### Principle: **Anchoring** (Tversky & Kahneman), applied to the price comparison view on `/compare` and `/event/[id]`

**Where:** The price comparison block on the event detail and `/compare` pages. Currently the three sources (Ticketmaster, SeatGeek, StubHub) are presented in a flat row with the cheapest typically highlighted as "best price." The savings calculation is implicit — the user has to subtract one number from another to see what they're saving by using TicketScan.

**Problem this targets:** Conversion intent on the comparison page. A user who searches for an event and sees three prices needs a reason to stay on TicketScan rather than just clicking through to the cheapest source and bouncing. The savings number is the reason — but it's currently presented as a *result* of the comparison, not as the *salient framing* of the comparison. Anchoring fixes this by making the most expensive price the reference point against which all the others are interpreted.

**The anchoring move:** Restructure the price comparison so the **highest** price renders first (largest, most prominent) with a strikethrough, and TicketScan's recommended best price renders second with the savings delta in a high-contrast badge.

```
$487  ← StubHub        [strikethrough, gray, large]
$312  ← TicketScan finds this on SeatGeek
SAVE $175 (36%)         [green pill, prominent]
```

(vs. current flat row of three prices with one quietly tagged "best.")

**Three mechanics, each with a specific psychological function:**

1. **Anchor selection** — the highest available price becomes the reference. Tversky-Kahneman classic: the first number a person sees calibrates their internal scale for "what an expensive ticket costs." If the user's reference is $487, then $312 feels cheap; if their reference is $312 (current presentation, sorted ascending), then $312 just feels like the price.
2. **Salient delta** — the savings amount and percent are pre-computed and rendered with visual weight. The user does not have to do arithmetic to feel saved-from-something. This is the move retail catalogs (Amazon, Costco) use universally — and it's the single highest-ROI psychology move in e-commerce, repeatedly shown to lift conversion in A/B tests across categories.
3. **Honest anchoring (the brand differentiator)** — the high anchor here is **a real price that the user could actually pay** (not a marketing-inflated MSRP). This is critical: the brand voice is "data-driven consumer advocate." A fabricated anchor would betray that. A real-marketplace anchor enforces it. The savings displayed are savings the user actually realizes by using us.

**Why anchoring beats other untouched principles for this specific surface:**

- **Scarcity** — unverifiable across 3 marketplaces. Already ruled out twice this week.
- **FOMO** — could surface "this event had X price drops this week" but requires historical data we don't aggregate to that surface today; longer ship.
- **Endowment effect** — requires post-add ownership framing; wrong surface (compare is pre-add).
- **Goal gradient** — better fit for activation flow than comparison view.
- **Anchoring** — the only principle that operates *during* the price comparison itself, which is the highest-intent moment in the entire funnel. The user is on the page **specifically to compare prices**. The principle that reframes how prices feel is the principle that wins here.

**Defensibility against gaming / brand-trust risk:**

- Anchor must be the actual highest live price across our three sources, not a marketed MSRP or face value. No fabricated comparisons.
- If only two sources return a price, the high anchor is the higher of the two. If only one source returns, no anchor displayed (no fake "compared to" line).
- Strikethrough on the high anchor is convention; users read it as "this is what someone else is charging" not "this is what we used to charge." Visual semantics matter.
- Cap the percent savings display at 50% — beyond that, the number starts to look unbelievable and triggers brand suspicion ("if it's 70% cheaper here, what's wrong with the ticket?"). Above 50%, render dollar-only without percent.

**Expected impact:**

The compare page is the highest-intent moment in the funnel (user is mid-decision). A salient savings frame here lifts both **bounce-to-purchase conversion** (user buys through us instead of leaving) and **watchlist-add conversion** (user stays to track other dates). A 5–8 point lift on either is realistic given the literature on anchoring in e-commerce. With current cohort sizes, the absolute number of additional activations this generates is small (call it 0.5 watchlist adds per day for our traffic level), but it sticks structurally as the platform scales.

**Ship cost:** Frontend: restructure the price comparison component to surface high anchor + savings delta (~1.5h). Backend: no change — the data is already in the response. Visual polish + small-screen layout (~45min). **~2.25h total.** No schema changes, no new endpoints, no migration risk.

**A/B variants for later testing:**
- Control: current flat three-source row
- Variant A (above): high anchor strikethrough + savings delta in badge
- Variant B (anchor + percent only): "Save 36% vs. StubHub"
- Variant C (anchor + dollar only): "Save $175 vs. StubHub"
- Variant D (cumulative): "Saved $X across X tracked events" on logged-in dashboard

**Risk:** Anchoring can backfire if the high anchor is *only* slightly higher (e.g., $487 vs $479) — the savings then look trivial, undercutting the move. **Mitigation:** suppress the strikethrough/savings frame when delta is under 5% or under $10. Just show the prices flat, as today. The anchoring move only fires when there's a real story to tell.

**Sequencing relative to prior recs:**
1. **Week 1:** Reciprocity (Apr 25 rec) — empty-state pre-population. Operates *before* search.
2. **Week 2:** Social proof (Apr 26 rec) — event card badge. Operates *during* search.
3. **Week 3:** Anchoring (today's rec) — comparison framing. Operates *during* the compare/event view.
4. **Week 4:** Commitment/consistency (Apr 23 rec) — second-action prompt. Operates *after first add*.
5. **Week 5:** Loss aversion (Apr 24 rec) — target-prompt panel. Operates *after first add + page revisit*.

Each one occupies a different funnel position. None compete. Ship in order. Today's anchoring rec is structurally upstream of last week's recs because the compare page sits between search results (where social proof lives) and the watchlist add (where commitment/consistency and loss aversion live).

**Hand to:** CRO Agent (Agent 6) for the price-comparison component restructure. No backend dependency.

---

## Deliverables (handoffs)

1. **Analytics Agent (HIGHEST PRIORITY, carried +4 days, scope unchanged):** (a) Referrer/UTM pull on ids 57–60. (b) Referrer/UTM pull on ids 61, 62 — both instant-activators. (c) Cohort velocity for ids 1–62 over rolling 30 days. (d) Trending-events query for reciprocity rec. (e) `tracker_count` aggregation for social proof rec. (f) Carried: matched-drops query for loss-aversion rec. **Today adds:** confirm whether the Apr 25 inflow shared a source — answer matters more now that the recovery did not extend to Apr 27.

2. **CRO Agent:** (a) Activation gap **4 users today** (dr.altvater 7d, ggri73 5d, awwhittington 4d, mark.murdock 4d B2B-domain). Plus dylanbaldy 11d outside the 7-day window (next-to-churn on Apr 29). (b) **NEW: anchoring framing spec** for `/compare` and `/event/[id]` price block (above) — sequenced **third** of five psych recs. (c) Carried: reciprocity dashboard empty-state, social-proof EventCard badge, commitment-consistency 2nd-action, loss-aversion target panel. (d) Newsletter homepage form: **85 days flat. Audit blocking subscriber growth for an entire quarter.**

3. **Email Agent:** **16 churn-intervention emails ready** (15 carried + josh's Day-7 firing today). Priority order: **ajvanprooyen (URGENT — 4 of 6 events flipped, 2 left, body needs daily number update)** → **pete (Day-16, 96h late, window closing toward win-back frame)** → **mark.murdock + awwhittington (Day-3 24h late, B2B variant for mark)** → **josh (Day-7 fires today)** → **nicklib (bespoke Day-7, 2d late)** → **dylanbaldy (activation, 11th consecutive, churned in 48h)** → **dr.altvater (Day-3 3d late OR pivot to Day-7 today)** → **ggri73, charlesteel (Day-3 2d late)** → **blubberboi (Day-14 long runway)** → bhaygood, laye, billstromkel, tucwildcat, jkaiser → **pre-queues fire tomorrow: taranimeramaro Bruno-MetLife Day-3, nmcnamee99 post-Raptors Day-3.**

4. **Content Agent:** (a) Cubs / Wrigley out-of-market trip hub page: **timeliness window now 2 days remaining** before ajvanprooyen is fully inside override. (b) Carried: Bruno Mars cross-city/cross-venue cluster hub page. (c) **NEW context:** the "12 weeks of zero net subscriber growth" data point may indicate the homepage's content/value-proposition is failing to convert visitors who aren't already convinced — different problem from form audit, longer-cycle fix.

5. **Ads Agent:** (a) Cubs out-of-market audience signal — same. (b) Bruno Mars MetLife audience signal — carried, **now zero new evidence today** since taranimeramaro hasn't returned. (c) **Attribution-pull dependency now 4 days unfulfilled** — and now more important because the 1-day Apr 26 recovery looks more like a single channel pulse than a sustained inflow. **If we don't identify the source of ids 61/62 within the week, we lose any chance of seeding adjacent audiences.**

6. **Open from previous days (unchanged, carried):** (a) `last_login_at` column — **Day 21**. (b) Drip cron revival — **Day 21**, blocking all 16 drafted emails. (c) Server-side `last_scan_at` emission on watchlist rows — superseded by loss-aversion rec. (d) Newsletter homepage form audit — **85 days flat**. (e) Pre-populated-item flag on watchlist schema for reciprocity rec. (f) `tracker_count` aggregation in search response for social-proof rec.

## Trend watch (7-day)

| Metric | Apr 21 | Apr 22 | Apr 23 | Apr 24 | Apr 25 | Apr 26 | Apr 27 |
|--------|--------|--------|--------|--------|--------|--------|--------|
| Total users | 55 | 56 | 60 | 60 | 60 | 62 | **62** |
| Watchlist items | 74 | 75 | 81 | 81 | 81 | 85 | **85** |
| Target prices set | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Drip emails sent | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Active subscribers | 3 | 3 | 3 | 3 | 3 | 3 | **3** |
| New signups (day) | 0 | 1 | 4 | 0 | 0 | 2 | **0** |
| `usersThisWeek` | 4 | 5 | 8 | 8 | 7 | 9 | **8** |
| At-risk count | 3 | 3 | 4 | 2 | 2 | 3 | **3** |
| Churned count | 47 | 48 | 49 | 52 | 52 | 52 | **52** |
| Activation rate (real users) | — | — | — | 73.7% | 73.7% | 75.4% | **75.4%** |

**Read:** The 7-day window now shows a clean shape: 7 signups concentrated on Apr 23 + Apr 26 (4 + 2 = 6 of the 7), with five days at 0 or 1. The acquisition channel is not steady — it's pulsing. Yesterday's "back" framing was wrong because back means "delivering at baseline frequency," and the channel is delivering in clumps with multi-day gaps. Watchlist items moved with signups (74 → 85, all from new-user adds; existing users contributed zero new watchlist activity in 7 days). The retention infrastructure metrics — targets, emails, subscribers — have been flat for the entire 7-day window. Acquisition pulses; retention is a flat line at zero. **Day 21 of zero retention emails.**

**Three confirmed algo-flip post-mortems:** tate (Apr 24, archived), goldy (Apr 25, archived), ajvanprooyen (in progress, **4 of 6 events flipped, 2 more flips queued in next 2 days**). The cascade has played out for four days exactly as forecasted, which is unusual — forecasting precision at the daily granularity is rare. Useful as evidence that the failure mode is mechanical (the engine is off; events tick into override on schedule), not stochastic (some unknown user behavior gating things). Mechanical problems have mechanical fixes.

**Two-day forecast (Apr 28 – Apr 29):**
- **Apr 28:** ajvanprooyen May 5 flips into override (5 of 6). taranimeramaro Day-3 threshold fires (Bruno Mars MetLife pre-queue ready). nmcnamee99 Day-3 threshold fires (post-Raptors pre-queue ready). dr.altvater crosses Day-8.
- **Apr 29:** ajvanprooyen May 6 flips (6 of 6 — **trip fully inside override, drafted email becomes meaningless**). dylanbaldy crosses Day 14 → **first new churned user in 5 days, total churned: 52 → 53.** josh crosses Day-8.

If the drip engine doesn't ship by Apr 29 EOD, the ajvanprooyen email cannot be sent at all — there's no honest version of it left. That's the next hard expiry on the calendar.
