# Growth Daily -- 2026-04-25

## User health dashboard

| Segment                     | Count | % of Total | vs Apr 24 |
|-----------------------------|-------|------------|-----------|
| Total users                 | 60    | 100%       | **+0 (second consecutive zero-signup 24h window)** |
| New (last 7 days)           | 7     | 11.7%      | **-1 (nicklib253 rolled out of 7-day window today; no inflows to replace)** |
| Activated (has watchlist)   | 41    | 68.3%      | +0 (third 24h window flat — no new watchlist adds since ajvanprooyen 01:01 UTC Apr 23) |
| Active (visited in 7 days)  | unknown | —        | no `last_login_at` instrumentation — Day 19 open |
| At-risk (7-14d signup-age proxy) | 2 | 3.3% | +0 (nicklib still at Day 7 per drip API; dylanbaldy at Day 9) |
| Churned (14d+ signup-age proxy) | 52 | 86.7% | +0 (no new crossings today; next is bhaygood already there at Day 22) |

> Day 19 without `last_login_at` instrumentation.
> Active alerts across **81** watchlist items: **0**. Target-price capture rate: **0% (Day 19).**
> `usersToday: 0`, `usersThisWeek: 7` — the drop from 8→7 confirms zero acquisition in the rolling window, not just zero in the calendar day.
> Watchlist items held at **81** for 48h 0m. Activity log shows no new entries since ajvanprooyen's session closed Apr 23 01:01:19 UTC — **52h 30m of zero behavioral signal** across signup, watchlist-add, and (still) target-set axes.

## What changed in 24h

1. **Second consecutive zero-signup calendar day. `usersThisWeek` drops 8→7 confirming the rolling read is also empty.** Yesterday I flagged the zero-day as a single point of noise and asked for the analytics attribution pull on ids 57–60. The pull has not landed; today the second zero-day arrived and the 7-day window started shedding members. Today is Saturday — historically the lowest-traffic acquisition day of the week — so a low number is not surprising. **A zero is.** The two-day combined read: yesterday's 4-signup cluster looks more anomalous, not less. **Analytics Agent: the attribution pull is now blocking three separate calls — was Apr 22 a repeatable channel, was the audience low-intent, and is today's zero a Saturday effect or the start of a longer dry stretch.**

2. **GOLDY.PEC ALGO FLIP HAS ARRIVED.** Bilmuri at The Sylvee, May 2, is **7 days out today** — `daysUntilEvent <= 7` triggers, and the recommendation engine now hardcodes "buy now" for this event. Forecast was made nine consecutive days running from Apr 17 forward; copy was queued seven consecutive days; sent zero times. **This is the second documented post-mortem case of the month, exactly nine days after tate.sheppard's.** The pattern is now durable enough to write a procedure around: (a) flag at 14d-out, (b) draft at 10d-out, (c) escalate at 8d-out, (d) **the only thing that breaks the cycle is an actual delivery vehicle**, not better forecasting. We have great forecasting.

3. **AJVANPROOYEN'S FIRST CUBS GAME HAS ALSO ALGO-FLIPPED TODAY.** Cubs vs. Diamondbacks, May 1, is 6 days out today — already inside the 7-day window. His May 2 game (Kerry Wood Bobblehead night) is 7 days out and algo-flips today as well. The forecast yesterday was that this would happen "tomorrow"; tomorrow has arrived. Of the 6 events in his cluster, **2 of 6 are now algo-overridden**. The remaining 4 flip Apr 26 (May 3), Apr 27 (May 4), Apr 28 (May 5), Apr 29 (May 6) — **one per day for the next four days**. He has received zero emails since signup Apr 23. **The most winnable account on the platform is being lost in slow motion in a publicly visible queue.**

4. **CHARLESTEEL'S DAY-3 DRIP THRESHOLD FIRES TODAY.** Bruno Mars at Ohio Stadium May 20 (25 days out — comfortable runway). This is the **fifth consecutive Day-3 threshold to silently miss** in the current cycle (prior misses: dr.altvater Apr 23, then daily slippage of all newer signups). Bruno-specific copy queued since Apr 22; engine off.

5. **Bhaygood's Day-21 threshold passed yesterday — engine off.** Day 22 today, Day 30 in 8 days. The **standard Day-21 "savings report" frame is wrong** for a user whose only event already happened (Cardi B passed Apr 12). Pre-queued bespoke copy from yesterday remains the right send if the engine ever returns.

6. **Drip engine: Day 19 inactive.** `pendingUsers: 20` — same 20 users as yesterday, all `last_email_sent: 0`. **Threshold convergence today: charlesteel Day-3, plus standing past-threshold backlog of dr.altvater (Day-3, 4d late), josh (Day-3, 5d late), nicklib (Day-7, hit Apr 24), dylanbaldy (Day-7, 2d late), pete + goldy (Day-14, 1d late), blubberboi (Day-14, hit Apr 24), bhaygood (Day-21, 1d late), billstromkel (Day-30, hit Apr 23), tucwildcat (Day-30, 4d late), leofearon (Day-30, 5d late).** Twelve users have at least one missed threshold; nothing fires.

7. **Zero new activity in 52h 30m across all behavioral logs.** No signups, no watchlist adds, no targets set, no subscribes. The activity feed today reads identically to yesterday's pull. This is the **longest behavioral silence on record**. Whether the cause is (a) the drip-engine-driven retention failure choking re-activation, (b) the acquisition firehose temporarily off, or (c) instrumentation drift — the data alone can't distinguish, but the most parsimonious explanation is (b). The frontend is up and serving (own checks); the API is up (we just queried it); something in the funnel above the signup page is producing fewer visitors.

8. **Newsletter subscribers: 3, unchanged since Feb 1 — now 83 days flat.** Homepage form audit unresolved. Adds another consecutive-day axis to the silence pattern.

## Activation gap

- **5 users** signed up in last 7 days with 0 watchlist items:
  - **dylanbaldy@gmail.com** — Day 9 (drip API), 10 calendar days. **Ninth consecutive day flagged.** At-risk for 2+ days.
  - **dr.altvater-70199@web.de** — Day 4 (drip API), 5 calendar days. Past Day-3 by 1 day.
  - **ggri73@gmail.com** — Day 2 (drip API), ~54h post-signup, no watchlist. Window closing.
  - **awwhittington@icloud.com** — Day 2 (drip API), ~50h post-signup, no watchlist.
  - **mark.murdock@lanternsec.com** — Day 2 (drip API), ~46h post-signup, no watchlist. B2B domain (Lantern Security) — evaluation signup remains plausible.
- **15 real users** (excluding 3 test accounts) have never added a watchlist item → **26.3% of real signups** — identical to yesterday for the second consecutive day. The denominator is frozen because nothing landed.
- **Acquisition-source inference still blocked.** Yesterday's call: pull referrer/UTM data on ids 57–60. Today's call: same, plus add ids 1–60 cohort velocity over the rolling 30 days so we can frame today's silence against an empirical distribution. **Bayesian read with what we have:** if we'd seen one zero-day in the prior 30, today's two-zero stretch is mildly surprising; if we'd seen five zero-days in the prior 30, this is unremarkable. We don't currently know which.

## Churn signals

- Unsubscribes today: **0** (still 3 subscribers; 83 days flat)
- Users entering "at-risk" today: **0** (nobody crossed Day 7 today; next is josh on Apr 26)
- Users entering "churned" today: **0** (yesterday's spike of 3 was the inflection; next crossing is dylanbaldy → Day 14 on Apr 29)
- Alert fatigue candidates: 0 (0 alerts ever sent — Day 19)
- Events passed without notification (cumulative): 5 — unchanged. **Tate's Florence event is now 6 days out — the algo-override is doing what the algo-override was always going to do; whether to count this as a 6th "event passed without notification" preemptively is partly philosophical.**

## At-risk users (7–14d inactive proxy)

| User | Day | Watchlist | Days to event | Recommended intervention |
|------|-----|-----------|---------------|--------------------------|
| nicklib253@gmail.com | 7d | 1 (Phillies passed Apr 17) | passed -8d | Bespoke Day-7 — past-event reframe (carried from Apr 24) |
| dylanbaldy@gmail.com | 9d | 0 | — | Tier 1 activation nudge — **ninth consecutive daily flag** |

## Live algo-flip post-mortem (today)

| User | Event | Days out | Flip status | Days flagged | Sends |
|------|-------|----------|-------------|--------------|-------|
| **goldy.pec.2012** | Bilmuri @ The Sylvee, May 2 | **7** | **flipped today** | 9 | 0 |
| **ajvanprooyen** | Cubs vs Diamondbacks, May 1 | 6 | flipped yesterday | 2 | 0 |
| **ajvanprooyen** | Cubs vs Diamondbacks (Bobblehead), May 2 | 7 | **flipped today** | 2 | 0 |
| ajvanprooyen | Cubs vs Diamondbacks (Tee), May 3 | 8 | flips Apr 26 | 2 | 0 |
| ajvanprooyen | Cubs vs Reds, May 4 | 9 | flips Apr 27 | 2 | 0 |
| ajvanprooyen | Cubs vs Reds, May 5 | 10 | flips Apr 28 | 2 | 0 |
| ajvanprooyen | Cubs vs Reds, May 6 | 11 | flips Apr 29 | 2 | 0 |
| tate.sheppard (already churned) | Florence + The Machine, May 1 | 6 | flipped Apr 24 | 10 | 0 (closed) |

**Read:** The next 5 consecutive days each contain at least one ajvanprooyen algo-flip. By Apr 29 his entire trip will be inside the override window. The cleanest "single-account real-time loss" we can document this month is in progress.

## Churned users with re-engagement potential

(Carried from Apr 24, no movement.)

| User | ~Days inactive | Watchlist items | Upcoming hook? | Priority |
|------|----------------|-----------------|----------------|----------|
| pete.uzelac77 | 2d (just churned) | **6** (WC + Darts) | 55–72d | **HIGH** |
| **goldy.pec** | 2d (just churned) | 1 (Bilmuri May 2) | **7d — flipped today** | **POST-MORTEM (closing today)** |
| blubberboi | 2d (just churned) | 1 (Ed Sheeran Aug 8) | 105d | MEDIUM |
| tate.sheppard | ~42d | Florence | 6d — flipped Apr 24 | **POST-MORTEM (final, archived)** |
| tosophiameyer | ~46d | **11** Harry Styles MSG | 121–145d | **HIGH — power user** |
| brigitte.theisen | ~59d | **10** Backstreet Sphere | 83–103d | **HIGH — power user** |
| laye.aurelien | ~24d | 2 (Shakira Jul 20 + 23) | 86–89d | HIGH |
| lvasub6 | ~27d | 2 (Flyleaf Jul 17–18) | 83–84d | HIGH |
| krusesin2023 | ~57d | 2 (Flyleaf Jul) | Yes | MEDIUM |
| ldholman | ~53d | 3 (Bad Omens passed; 2× MIW Aug 11) | Partial | MEDIUM |
| spcoog83 | ~48d | 1 (Olivia Dean Aug 25) | 122d | MEDIUM |
| edithdionne | ~52d | 1 (A7X Centre Bell Aug 8) | 105d | MEDIUM |
| bhaygood728 | ~23d | 1 (Cardi B passed Apr 12) | No | LOW |
| chocolateyu1083 | ~26d | 1 (Oilers passed Mar 31) | No | LOW |
| arin.gelbaugh | ~26d | 1 (NCAA Final Four passed Apr 4) | No | LOW |
| missbrookeshep | ~53d | 1 (Warriors/Rockets passed Apr 5) | No | LOW |
| billstromkel | ~32d | 1 (RAYE passed Apr 8) | No | LOW |
| jkaiser | ~40d | 1 (NCAA 2nd Rd passed Mar 21) | No | LOW |
| tucwildcat | ~35d | 1 (NCAA 2nd Rd passed Mar 22) | No | LOW |

**Passed-event overhang:** 8 churned users + nicklib (functionally same cohort) whose only tracked event has already happened. Cohort is dead without a re-engagement product we don't currently build.

## Churn intervention: email content (ready to queue when drip engine returns)

### POST-MORTEM (CLOSING) — goldy.pec.2012@gmail.com (Bilmuri, **flipped today**)

Tenth daily flag. Algo-override has activated; any target set after this point is overridden by the page itself. Closing the file. **Two consecutive post-mortem closures in 24h** (tate yesterday, goldy today) — both forecasted, both queued, both undelivered.

**Subject (archived, not sending):** Bilmuri tonight is inside the override window — your watchlist never got a turn
**Status:** POST-MORTEM — second case study for Monday Apr 27 weekly retro

---

### CRITICAL — ajvanprooyen@crimson.ua.edu (Cubs trip, **2 of 6 events flipped, 4 more flip in next 4 days**)

Brought forward from Apr 26 yesterday — should now be **today's first send the moment the engine returns**. Yesterday's draft is largely correct but the framing has hardened: this is no longer "your trip starts in 7 days" but "the first two games are already inside the override window." The remaining 4 dates still benefit from a target — May 3 (8d) through May 6 (11d) all have a usable pre-flip window of 1 to 4 days.

**Subject:** Cubs trip update — 2 of 6 games are already inside our "buy now" window
**Body:**
> Three days ago you added six Cubs home games at Wrigley. Two of them — May 1 and May 2 — are now inside the seven-day window where our recommendation engine flips to "buy now" automatically. After that, the target-price email can't beat what the page is already telling you.
>
> The other four games (May 3 → May 6) still have a real pre-flip window. Targets set today catch the cleanest pricing on resale; targets set Tuesday catch only the last two; by Wednesday the whole trip is inside override.
>
> One number applied across all four still-watchable dates is the move:
>
> [Set your target prices](https://www.ticketscan.io/watchlist)

**Send timing:** immediately on drip revival; fallback **today 11am CDT**

---

### HIGH — pete.uzelac77+ticketscan@gmail.com (Day 14, **threshold missed yesterday, freshly churned**)

Now **48h late** on the highest-leverage send in the queue. Same draft as yesterday — copy unchanged, one calendar day older.

**Subject:** 6 events, ~810 price checks, 0 emails — one setting fixes all of it
**Send timing:** immediately on revival; fallback **today 12pm EDT**

---

### Bespoke Day-7 — nicklib253@gmail.com (Day 7, Phillies passed, past-event re-engagement)

Carried from Apr 24, copy unchanged — past-event reframe still correct.

**Send timing:** today 7pm EDT on revival; otherwise queued

---

### Day-3 — charlesteel126@gmail.com (Day 3 fires today, Bruno Mars Ohio May 20)

Bruno-specific Day-3 copy pre-queued since Apr 22. **Today is the threshold day.** Comfortable runway (25 days to event); save factor is high if engine returns within ~10 days.

**Subject:** Bruno Mars at Ohio Stadium — here's how the cross-market alert works
**Body:**
> You added the May 20 Bruno Mars show at Ohio Stadium on Tuesday. Since then we've been pulling Ticketmaster, SeatGeek, and StubHub prices on it every four hours.
>
> Set a target price (any number — start high, drop it later) and you'll get an email the second any of the three drops below it.
>
> Bruno's full Romantic Tour has been showing pretty consistent resale softening 14–21 days out, which means a target set today gives you a 10-day runway to catch a dip before the algo flips on May 13.
>
> [Set your target on Bruno Mars](https://www.ticketscan.io/watchlist)

**Send timing:** today 11am EDT (Saturday morning)

---

### Day-14 (1d late) — blubberboi@yahoo.com (Ed Sheeran SoFi, 105d runway)

Carried from Apr 24 — long runway makes this survivable.

**Send timing:** today 6pm PDT or whenever revives

---

### Day-3 (5d late) — josh, dr.altvater; Day-3 (today) — charlesteel above

joshdguillemette (Day 5, AEW Double or Nothing 30d out) and dr.altvater (Day 4, .de domain, 0 watchlist) — both carried unchanged from Apr 24.

---

### Bespoke past-event Day-21 — bhaygood728@gmail.com

Standard Day-21 wrong frame. Skip standard send; bespoke re-engagement queued, LOW priority.

---

### Welcome (Day 3) — pre-queue for Apr 26/27/28 fires

- **ggri73** — Day-3 fires Apr 25 (today, within hours of midnight UTC depending on threshold definition)
- **awwhittington** — Day-3 fires Apr 26 tomorrow
- **mark.murdock** — Day-3 fires Apr 26 tomorrow (B2B-domain flag)

All copy unchanged.

---

### Ongoing — dylanbaldy@gmail.com (Day 9, 0 watchlist, **ninth consecutive day flagged**)

Single variable remains delivery, not copy. Send-time draft unchanged.

**Send timing:** today 11am EDT

---

## Psychology-driven optimization — one recommendation

### Principle: **Reciprocity** (Cialdini), applied to the post-signup empty-watchlist state

**Where:** `/dashboard` page on first authenticated visit when `watchlist.length === 0`. Specifically: the empty state of the dashboard / search-landing page.

**Problem this targets:** Activation gap = 26.3% of real users have never added a watchlist item, frozen at this rate for the second consecutive day. Yesterday's loss-aversion rec addressed users who already have a watchlist (target-setting). The day prior's commitment/consistency rec addressed second-action prompting (1 → 2+ items). Neither addresses the **cold-start activation gap** itself: users who land in the post-signup state with no event in mind, see a search box, and bounce. We have 5 of these right now (dylanbaldy 9d, dr.altvater 4d, ggri73 2d, awwhittington 2d, mark.murdock 2d) plus 10 more from prior weeks who never recovered.

**The reciprocity move:** Pre-populate the empty watchlist with **3 trending events you've already been tracking for them** before they arrived. Frame the gift explicitly:

```
👋 We've been watching these for you while you've been deciding.

[card 1: NBA Playoffs Round 1 — most-tracked event on the platform this week]
[card 2: Bruno Mars summer tour — tracked across 4 cities by other users this week]
[card 3: World Cup 2026 (49 days out) — top searched event]

Keep any of these on your watchlist with one click. Or swap them out for something we haven't found yet.

[ Search for something else ]
```

Three new mechanics, each with a specific psychological function:

1. **The system has already acted on the user's behalf** ("we've been watching these for you") — the reciprocity activation. The user receives unearned value before being asked for any action. This is the canonical Cialdini setup: free sample → felt obligation → conversion.
2. **One-click "keep" rather than zero-click bounce** — turns the default-deny behavior (do nothing → leave) into default-accept (do nothing → keep all 3). Reframes inaction so it produces an activated state instead of an empty one.
3. **Swap-out option preserves agency** — defuses the "you're forcing this on me" reactance that pure pre-population would trigger. The user is still in control; they're just starting from a populated state instead of a blank one.

**Why reciprocity beats other principles here:**

- Loss aversion (yesterday's rec) requires the user to already have something to lose; users in the activation gap have nothing in their watchlist yet.
- Commitment/consistency (day-before rec) requires a first action to build on; activation-gap users haven't taken the first action.
- Social proof would be weak — we don't have "10,000 users tracking this." We have at most "3 other users tracked this Bruno Mars show," which feels small.
- Scarcity has no inventory hook on this surface.
- Reciprocity is the one principle that actually works on the **first interaction**, before the user has done anything for themselves yet.

**Choice of 3 trending events — the data already exists:**

- "Most-tracked this week" = `SELECT event_name, COUNT(*) AS adds FROM watchlist WHERE created_at > NOW() - INTERVAL '7 days' GROUP BY event_name ORDER BY adds DESC LIMIT 1`. With 81 items and the recent Cubs/Bruno/WC clustering, this returns a real, defensible number. Today the answer is "Cubs at Wrigley (6)" and "Bruno Mars (2)" and "WC at Lincoln Financial (4)."
- "Cross-city tracked" gives us a different cluster — Bruno Mars across 4 venues, Backstreet at Sphere, Harry Styles MSG.
- "Top searched" requires the search-log instrumentation that doesn't exist yet — fall back to "trending nationally" (handpicked WC since we always lean on it).

**Expected impact:**

Baseline: ~26% of real signups never activate. If pre-population converts even 30% of currently non-activating users to "kept ≥1 of 3" we go from 0 watchlist items per signup (in this cohort) to ~1 item per signup — which then becomes the predicate for yesterday's loss-aversion target-setting copy and the day-before's commitment-consistency 2nd-add copy. **Reciprocity is upstream of both prior recommendations and unlocks them.** Sequencing matters: ship reciprocity first (Week 1), commitment-consistency second (Week 2), loss-aversion third (Week 3) — each builds on the funnel state the previous one produces.

**Ship cost:** New empty-state component on `/dashboard` (~1.5h frontend). Backend endpoint for "trending events" (~45 min — query already 90% there from the search endpoint). Quick visual treatment to distinguish "we picked these for you" cards from organic search results — small but matters (~30 min). ~3h total.

**A/B variants for later testing:**
- Control: current empty state ("Search for an event")
- Variant A (above): explicit reciprocity ("we've been watching these for you")
- Variant B (curation framing): "Top 3 events on TicketScan this week — tap to track" (lighter reciprocity, emphasizes editorial picks)
- Variant C (personalization tease): "Tell us your favorite team or artist — we'll pre-populate" (skips reciprocity, requires more work from user)

**Risk:** Pre-populated items dilute the watchlist signal. If a user "keeps" 3 events but never returns, we have 3 items × 0 targets × 0 emails — the same dead state as today, just inflated. Mitigation: mark pre-populated items separately on the backend so they don't pollute the activation rate metric. We measure activation as "added at least one item ourselves," not "has any item."

**Hand to:** CRO Agent (Agent 6) for component spec and pre-populated-item flag in the schema. Analytics Agent (Agent 7) for the trending-events query plus the activation-metric definition update so we don't lie to ourselves about uplift.

---

## Deliverables (handoffs)

1. **Analytics Agent (HIGHEST PRIORITY, carried +2 days):** (a) Referrer/UTM pull on ids 57–60 — now blocking three reads, not one. (b) Cohort velocity for ids 1–60 over rolling 30 days — what is the empirical distribution of zero-signup days? (c) Trending-events query for reciprocity rec (above). (d) Carried: matched-drops query for yesterday's loss-aversion rec.

2. **CRO Agent:** (a) Activation gap **5 users** today (dylanbaldy 9d, dr.altvater 4d, ggri73 2d, awwhittington 2d, mark.murdock 2d). (b) **New today: reciprocity-driven dashboard empty-state spec** (above) — sequenced *first* of the three psych recs from this week. (c) Carried: commitment-consistency 2nd-action prompt + loss-aversion target panel. (d) Newsletter homepage form: 83 days flat.

3. **Email Agent:** **12 churn-intervention emails ready** (carried + 2 new post-mortems closing today). Priority order: **ajvanprooyen (urgent — 2 of 6 events already flipped, 4 more in 4 days)** → **pete (Day-14 + 48h late)** → **charlesteel (Day-3 today)** → **nicklib (bespoke Day-7)** → **dylanbaldy (activation, 9th consecutive flag)** → **blubberboi (Day-14 long runway)** → **josh (Day-5)** → **dr.altvater (Day-3 5d late)** → bhaygood (bespoke past-event LOW) → Day-3 pre-queues for ggri73/awwhittington/mark.murdock for Apr 25–26. **goldy is now post-mortem #2, archived alongside tate.**

4. **Content Agent:** (a) Cubs / Wrigley out-of-market-trip hub page is now in **last-effective-window territory** — the algo-flip cascade starts today. If we publish before Apr 29 we capture ajvanprooyen plus future cluster of similar trip-planners; after Apr 29 the timeliness hook is gone for this user. (b) Pattern unchanged from Apr 24 — no new behavior to feed the calendar.

5. **Ads Agent:** (a) Cubs out-of-market audience signal still open — same. (b) Bruno Mars cross-city cluster unchanged. (c) Attribution-pull dependency now **2 days unfulfilled** — if it resolves to a Reddit/Twitter/community thread for the Apr 22 cluster, audience-seed it before the source goes cold.

6. **Open from previous days (unchanged, carried):** (a) `last_login_at` column — Day 19. (b) Drip cron revival — Day 19, blocking all 12 drafted emails above. (c) Server-side `last_scan_at` emission on watchlist rows — superseded by yesterday's loss-aversion rec. (d) Newsletter homepage form audit — 83 days flat. (e) **New today: pre-populated-item flag on watchlist schema** for reciprocity rec.

## Trend watch (7-day)

| Metric | Apr 19 | Apr 20 | Apr 21 | Apr 22 | Apr 23 | Apr 24 | Apr 25 |
|--------|--------|--------|--------|--------|--------|--------|--------|
| Total users | 54 | 55 | 55 | 56 | 60 | 60 | **60** |
| Watchlist items | 74 | 74 | 74 | 75 | 81 | 81 | **81** |
| Target prices set | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Drip emails sent | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| Active subscribers | 3 | 3 | 3 | 3 | 3 | 3 | **3** |
| New signups (day) | 1 | 1 | 0 | 1 | 4 | 0 | **0** |
| `usersThisWeek` | 4 | 4 | 4 | 5 | 8 | 8 | **7** |
| At-risk count | 3 | 3 | 3 | 3 | 4 | 2 | **2** |
| Churned count | 46 | 47 | 47 | 48 | 49 | 52 | **52** |

**Read:** Three of seven days had zero signups; the most recent two are consecutive. The Apr 23 cluster of 4 is the only break in an otherwise 0–1-per-day signup baseline. The retention side stayed flat across every metric except `usersThisWeek` which dropped a member out of the rolling window. **Today is the cleanest possible "stationary state" snapshot the platform has ever produced** — not because the system is healthy but because every input went to zero in the same window. The risk: a stationary state with 0% target capture and 0 emails sent is a stationary state on a path to permanent silence, not equilibrium.

**Two confirmed algo-flip post-mortems (tate Apr 24, goldy Apr 25) in two consecutive days.** This is now a forecasted-and-realized failure mode with replay value: the next case (ajvanprooyen, May 1 game) is also forecasted, also queued, and trending toward the same outcome. The forecasting works. The delivery doesn't.
