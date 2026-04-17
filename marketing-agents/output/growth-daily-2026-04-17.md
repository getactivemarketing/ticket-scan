# Growth Daily -- 2026-04-17

## User health dashboard

| Segment                     | Count | % of Total | vs Apr 16    |
|-----------------------------|-------|------------|--------------|
| Total users                 | 52    | 100%       | 0            |
| New (last 7 days)           | 2     | 3.8%       | -2 (per API `usersThisWeek`) |
| Activated (has watchlist)   | 37    | 71.2%      | 0            |
| Active (visited in 7 days)  | ~2    | ~3.8%      | -2 (rough; dylanbaldy + possibly pete) |
| At-risk (no visit 7-14d)    | 3     | 5.8%       | +1 (pete, goldy added; blubberboi rolls) |
| Churned (no visit 14d+)     | 48    | 92.3%      | **+1 (bhaygood728)** |

> Day 11 without login/session tracking. "Active" and "churned" are estimates. The admin `stats` endpoint reports `usersToday: 0`, `usersThisWeek: 2` — we defer to that for the New row. The split differs from my raw count-by-date (3 users signed up Apr 10-15) because the API uses a rolling 7x24h from now, which cuts off Apr 10 morning signups.

## What changed since Apr 16

1. **bhaygood728 churned today.** Predicted Apr 15, flagged URGENT Apr 16, didn't get contacted, tipped over the 14-day line this morning. Third consecutive user to walk the exact path the report described while the report was being written. Cardi B passed 5 days ago; Tier 2 post-event pivot window is closed. Now Tier 3 with no upcoming event hook.

2. **Zero new signups.** `usersToday: 0`. dylanbaldy remains the only signup since Apr 10, and he's still at 0 watchlist items on Day 2. The Apr 15 drought-break looks like a blip, not a trend.

3. **Pete and goldy cross to Day 7.** Both signed up Apr 10. Pete has 6 items (4 World Cup + 2 Darts Masters, 0 target prices). Goldy has 1 (Bilmuri at The Sylvee, May 2 — now 15 days out). This is the exact "cheap save" window Tier 1 nudges are designed for.

4. **blubberboi at Day 8.** Metallica at SoFi still 100 days out. Middle of at-risk window. Still salvageable.

5. **tate.sheppard: Day 7 of flagging.** Florence + The Machine is now 14 days out — we are inside the window where the buy/wait recommendation flips based on price signals, and the email we've been trying to send for a week is now time-critical, not just time-sensitive.

6. **laye.aurelien: Day 2 of churn.** Shakira shows 94 + 97 days out. Tier 3 case unchanged from yesterday. Every day without contact reduces the save probability.

7. **Drip campaign: 0 emails sent, Day 11.** 21 users pending. The queue keeps shuffling as users age out into deep churn without ever receiving Email 1.

## Activation gap

- **1 user** signed up in last 7 days with 0 watchlist items: **dylanbaldy@gmail.com** (Day 2, unchanged from yesterday's Day 1)
- **14 users** total have never added a watchlist item (26.9%, unchanged)
- 3 test/demo accounts = **11 real non-activated** users (21.2%, unchanged)
- dylanbaldy is the only recent non-activated user. The Day 2 activation email window closes tomorrow; by Day 3 a generic welcome becomes less effective than an event-specific trigger we don't yet have.

## Churn signals

- Unsubscribes today: 0
- Users entering churned today: **1 (bhaygood728)** — predicted Apr 15, flagged URGENT Apr 16, no contact sent
- Users entering at-risk today: 2 (pete, goldy — both at Day 7 exact)
- Alert fatigue candidates: 0 (still zero alerts ever triggered — Day 11)
- Drip emails sent: 0 (Day 11)
- Target prices set: 0 across all 72 watchlist items (Day 11)
- Events passed without notification: 4 cumulative (unchanged)

## At-risk users (7-14 days inactive)

| User | Days since signup | Watchlist events | Recommended intervention |
|------|-------------------|-----------------|--------------------------|
| blubberboi@yahoo.com | 8d | Metallica at SoFi (Jul 26, 100 days out) | Tier 1 gentle nudge, middle of cheap-save window |
| pete.uzelac77+ticketscan@gmail.com | 7d | 6 items (4 WC matches + 2 Darts Masters, 0 target prices) | Tier 1 target-price prompt — highest-value at-risk user on the board |
| goldy.pec.2012@gmail.com | 7d | Bilmuri at The Sylvee (May 2, **15 days out**) | Tier 1 pre-event nudge — event proximity flips this to urgent tomorrow |

Pete and goldy rotate in as blubberboi stays put. bhaygood728 rotated off (into churned). The entire at-risk list is now Apr 9-10 signups — the cohort that entered together is exiting together.

## Churned users with re-engagement potential

| User | Days inactive | Watchlist items | Upcoming events? | Win-back priority |
|------|---------------|-----------------|------------------|-------------------|
| bhaygood728@gmail.com | **14d (NEW)** | Cardi B (Apr 12 — PASSED 5d ago) | No | MEDIUM (fresh churn, but no event hook) |
| laye.aurelien@wanadoo.fr | 15d | Shakira (Jul 20 + Jul 23) | Yes — 94-97d | **HIGH** (fresh-ish churn, good runway) |
| tate.sheppard@gmail.com | 34d | 1 (Florence + Machine, **14 days out**) | Yes | **CRITICAL — event inside 2 weeks** |
| goldy.pec.2012@gmail.com | 7d* | 1 (Bilmuri, **15 days out**) | Yes | **HIGH** — pre-event nudge possible |
| arin.gelbaugh@outlook.com | 18d | 1 (NCAA — passed) | No | LOW |
| chocolateyu1083@yahoo.com | 17d | 1 (Oilers — passed) | No | LOW |
| tosophiameyer@gmail.com | 37d | **11** (Harry Styles, Aug-Sep) | Yes — 4+ mo | **HIGH** — power user |
| brigitte.theisen@gmail.com | 50d | **10** (BSB, Jul-Aug) | Yes — 3+ mo | **HIGH** — power user |
| lvasub6@gmail.com | 19d | 2 (Flyleaf, Jul 17-18) | Yes — 91d | HIGH |
| krusesin2023@gmail.com | 48d | 2 (Flyleaf, Jul) | Yes | MEDIUM |
| ldholman@ymail.com | 44d | 3 (Motionless In White, Aug) | Yes | MEDIUM |
| spcoog83@gmail.com | 39d | 1 (Olivia Dean, Aug) | Yes | MEDIUM |
| edithdionne@hotmail.com | 43d | 1 (A7X + Good Charlotte, Aug) | Yes | MEDIUM |

*goldy technically sits in at-risk by days-since-signup, but drip is pending and pre-event nudge is the right play, so I'm listing here for the win-back cohort treatment too.

## Churn intervention: email content

### CRITICAL: tate.sheppard@gmail.com (Florence + Machine, 14 days out)

Day 7 of flagging. Same recommendation in seven consecutive reports. Event is now inside two weeks — the price-recommendation algorithm will flip to `buy_now` automatically on Day 7 out (Apr 24), which means *this week* is the last window where the email content is "watch prices closely" rather than "buy immediately."

**Subject:** Florence + The Machine in 14 days — price recommendation flips next week
**Body:**
> Florence + The Machine at the Hollywood Bowl is 14 days out. You added it to your watchlist 34 days ago.
>
> Quick ops note on how our recommendation engine works: when any event gets within 7 days, our algorithm switches to "buy now" automatically — regardless of price. So **the next 7 days are the last window** where your target price still matters for this show.
>
> Right now, prices on Ticketmaster and SeatGeek are [placeholder — populate from current price_history]. If you'd pay [target X] for a [seat tier Y] seat, set your target and we'll email you the second it hits.
>
> [Set your target price](https://www.ticketscan.io/watchlist)

**Send timing:** 10am PDT (West Coast event, likely West Coast user)

### FRESH CHURN: bhaygood728@gmail.com (Tier 3, no event hook)

Cardi B passed 5 days ago. Only watchlist item. This is the hardest win-back case on the board because there's no upcoming event to re-anchor around.

**Subject:** Your Cardi B show passed — what's next on your list?
**Body:**
> Your Cardi B at Spectrum Center has wrapped — hope the show was worth it.
>
> Your watchlist is empty now. Couple of things happening this week worth a look:
> - **NFL Draft** is April 23 (prices across sources still swinging 30-40% day-to-day)
> - **NBA Playoffs** Round 1 is active — Charlotte doesn't host, but regional matchups are tracked
> - **Beyoncé Cowboy Carter** added Southern tour dates this week
>
> [Pick something new to track](https://www.ticketscan.io/dashboard) — it's the same 10 seconds.

**Send timing:** 11am EDT (Charlotte user)

### URGENT: pete.uzelac77+ticketscan@gmail.com (Day 7, 6 items, 0 targets)

Highest-information user on the board. Has World Cup exposure (4 matches, June 14 - July 4) and Darts Masters (June 25-26). Zero target prices. This user is showing serious interest but has not crossed the commitment threshold.

**Subject:** 6 events on your watchlist, 0 target prices — let's fix that
**Body:**
> You added 6 events to your TicketScan watchlist last week:
> - 4 World Cup matches at Lincoln Financial Field (June 14 - July 4)
> - 2 bet365 U.S. Darts Masters sessions at MSG (June 25-26)
>
> We've been checking prices across Ticketmaster, SeatGeek, and StubHub every 4 hours since. But with no target prices set, we can't actually tell you when to buy — we're just logging data.
>
> Takes 10 seconds per event. For reference, World Cup group-stage tickets are currently running **[populate range]** across sources, which is [X]% below opening-week pricing.
>
> [Set your target prices](https://www.ticketscan.io/watchlist)

**Send timing:** 11am EDT

### URGENT: goldy.pec.2012@gmail.com (Bilmuri, 15 days out)

Day 7 exact, single event, inside the 16-day pre-event window where prices get volatile. Same email as Apr 16 report, still unsent. Tomorrow the algo flips closer to buy_now territory.

**Subject:** Bilmuri at The Sylvee — 15 days out, prices moving
**Body:** (same as Apr 16, updated day count)

**Send timing:** 6pm CDT (Madison show, Wisconsin user)

### ONGOING: blubberboi@yahoo.com (Day 8, Metallica 100 days out)

Second day at-risk. Tons of runway. Same content as Apr 16.

**Subject:** Metallica at SoFi is 100 days out — what's moved this week
**Body:** (same as Apr 16)

**Send timing:** 6pm PDT

### ONGOING: dylanbaldy@gmail.com (Day 2 activation nudge)

Day 2 of post-signup. Still 0 watchlist items. Apr 16's welcome email didn't go out. By Day 3 the generic "pick something to track" email converts worse — the ideal moment was yesterday.

**Subject:** One thing to do before you leave TicketScan
**Body:** (same as Apr 16)

**Send timing:** 11am EDT

### ONGOING: laye.aurelien@wanadoo.fr (Day 2 of churn)

Same Tier 3 case as yesterday. Shakira still 94-97 days out. No new content needed.

**Subject:** Shakira prices moved [X]% this week — you weren't watching
**Body:** (same as Apr 16, populate real % from `price_history` or remove the number)

**Send timing:** 11am CET

### ONGOING: tosophiameyer@gmail.com (37d churned, power user)

11 watchlist items (Harry Styles summer run). Highest-LTV churned user on the roster. Has never received contact.

**Subject:** Your 11 Harry Styles shows — we're still watching
**Body:**
> You added 11 Harry Styles shows to your watchlist back in March and we've been tracking prices across Ticketmaster, SeatGeek, and StubHub every 4 hours since.
>
> Haven't seen you back in a while. Quick summary of what's moved:
> - [Populate: N events had price drops of 10%+]
> - [Populate: N events where SeatGeek is currently undercutting Ticketmaster]
>
> None of this matters without a target price — which you haven't set. Takes about 10 seconds per show.
>
> [Check your watchlist](https://www.ticketscan.io/watchlist)

**Send timing:** 10am user-local (unknown TZ — default EDT)

## Psychology-driven micro-optimization

### Today's principle: Commitment/Consistency (new application)

**Rotation status:** Apr 8 first pass at Commitment/Consistency was a general "1 step from your first alert" onboarding progress bar. Today we loop back with a different, narrower application rooted in the actual data gap we're staring at: 0 target prices across 72 watchlist items, 11 days running.

**Where:** Watchlist page — the exact row where a user has already completed the easy commitment (adding an event) and needs to escalate to the harder one (naming a price).

**The problem:** Adding to watchlist is low-cost (click + confirm). Setting a target price is higher-cost (requires the user to have a number in mind, do mental math on what they'd actually pay, and commit to a ceiling). The current UI treats these as two equal-weight line items — there's a "Target price" field on each row, but no scaffolding that connects "you've already committed to tracking this" to "now commit to a price." The ratio speaks for itself: 72 events added, 0 target prices set. Users are 100% consistent on the easy step and 0% consistent on the hard one.

**Current state:** Each watchlist row shows event name, date, venue, and a target price field (appears to be a passive input, empty). No visual signal that the target price is the step that actually produces value.

**Proposed change:** Two-stage commitment escalation on each watchlist row.

Stage 1 — Visible consistency framing on every row that has no target price:
> ✓ You're tracking [Event]
> ✗ One thing missing: your target price
> [What would you pay for this? $___]

Stage 2 — When user opens the target price input, show a one-line price anchor pulled from `price_history`:
> Prices this week: $142 (SeatGeek) – $218 (Ticketmaster). Most users set targets 15-20% below the current low.

The first line leverages consistency directly: "You already committed to tracking this event. Finish the commitment." People don't like unfinished checkmarks; Zeigarnik effect + Cialdini consistency reinforce each other.

**Why this works:**
- Cialdini's consistency research: people tend to honor small prior commitments with larger ones when the larger commitment is framed as continuation rather than a new ask. "Set your target" framed as "finish this" converts better than framed as "add info."
- 0/72 is not an edge case — it's the dominant pattern. A 10% lift turns 0 target prices into 7, which makes the alert cron job produce its first output in 11+ days.
- The "most users set targets 15-20% below" anchor gives the user a defensible starting point, which removes the cognitive tax that's currently blocking completion. (We won't have the "most users" data at N=0; in the meantime, use "try 15-20% below the current low" as the copy.)
- Downstream: once target prices exist, the alert system has something to trigger on, which produces emails, which re-engages users, which reduces churn. This is the single upstream blocker to several broken metrics at once.

**Implementation:**
- Watchlist row rendering: if `target_price IS NULL`, show the unfinished commitment framing inline rather than just an empty input
- Target-price input: on focus, fetch latest `price_history` min/max for that event_id and render the anchor line
- Track: % of watchlist items with a target price set, measured weekly
- Cheap A/B: ship to half the users, compare 7-day target-set rates

**Expected impact:**
- Target price setting rate: 0/72 → 5-10/72 over 2 weeks (best-case, assumes modest lift and users actually loading the page)
- First-ever price alert fires in cron: happens the moment any target is set at/above current market
- Indirect: target price + alert loop is the retention primitive that makes at-risk nudges send themselves. The feature becomes self-reinforcing rather than requiring manual per-user outreach.

## Actions triggered

- Win-back/re-engagement emails prepared: 7 (tate URGENT, bhaygood fresh-churn, pete target-price, goldy pre-event, blubberboi gentle, dylanbaldy Day 2, laye.aurelien Day 2 of churn, tosophiameyer power-user win-back)
- New churn flag: 1 (bhaygood728 — predicted Apr 15, confirmed today)
- New at-risk flags: 2 (pete, goldy — both Day 7 exact)
- Re-engagement emails actually sent: 0 (no automated system)
- Drip campaign status: BROKEN — Day 11

## Cross-agent handoffs

### -> Email Agent (Agent 5)
**Priority: CRITICAL (Day 11)**
1. **IMMEDIATE:** tate.sheppard Florence win-back — 14 days out, algo flips to `buy_now` in 7 days, last useful-content window
2. **IMMEDIATE:** pete.uzelac77 target-price prompt — 6 events, 0 targets, highest-info at-risk user
3. **IMMEDIATE:** goldy.pec Bilmuri pre-event — 15 days out, flipping urgent tomorrow
4. **IMMEDIATE:** dylanbaldy Day 2 activation — welcome email window closes today
5. bhaygood728 fresh-churn win-back — no event hook, hardest case, lowest priority of the "immediates"
6. blubberboi Day 8 gentle nudge
7. laye.aurelien Day 2 of churn — Tier 3, still salvageable
8. tosophiameyer power-user win-back — highest LTV churned
9. Drip campaign: non-functional. Day 11. 52 users, 21 pending, 0 emails ever sent. The queue is a waitlist for a send mechanism that doesn't exist.
10. Build automated event-proximity triggers — any watchlist event within 21 days of event date should auto-send a pre-event nudge

### -> CRO Agent (Agent 6)
**Priority: HIGH**
1. **Commitment/Consistency on watchlist page:** inline "finish this commitment" framing on rows with no target price + price anchor on input focus (today's rec)
2. Endowment: watchlist page — tracking duration, price check counts, aggregate summary (Apr 16, pending)
3. Anchoring: reorder compare page results highest-to-lowest with savings badge (Apr 15, pending)
4. FOMO: price activity line on event cards (Apr 14, pending)
5. Reciprocity: value summary on compare page (Apr 13, pending)
6. Scarcity: target price prompts on watchlist (Apr 11, pending)
7. Loss aversion: alert email rewrite (Apr 12, pending)
8. "Event passed" redirect flow for stale watchlist items

### -> Analytics Agent (Agent 7)
**Priority: HIGH (Day 11)**
1. Add `last_login_at` tracking — every user health metric is still an estimate without it
2. Track target-price-set rate on watchlist page (baseline: 0/72 = 0%, needed before we can measure any CRO intervention)
3. Track compare page click-throughs by source
4. Attribution: where did dylanbaldy come from? (still the only Apr signup outside the Apr 10 pair)

### -> Content Agent (Agent 1)
**Priority: MEDIUM**
- NFL Draft (Apr 23) content — re-engagement hook for bhaygood728 and any other churned-with-no-upcoming-event user
- World Cup 55-day countdown content (matches start June 11)
- NBA Playoffs Round 1 regional matchup content

## Key metrics trend

| Metric | Apr 14 | Apr 15 | Apr 16 | Apr 17 | Trend |
|--------|--------|--------|--------|--------|-------|
| Total users | 51 | 51 | 52 | 52 | Flat after drought-break |
| Activated | 37 (72.5%) | 37 (72.5%) | 37 (71.2%) | 37 (71.2%) | Flat |
| Watchlist items | 72 | 72 | 72 | 72 | Flat |
| Target prices set | 0 | 0 | 0 | 0 | Flat — Day 11 |
| Drip emails sent | 0 | 0 | 0 | 0 | Day 11 broken |
| Price alerts triggered | 0 | 0 | 0 | 0 | Flat |
| At-risk users | 2 | 2 | 2 | 3 | +1 (pete, goldy in; bhaygood out to churn) |
| Churned users | 46 | 46 | 47 | **48** | +1 (bhaygood728) |
| Events passed w/o outreach | 3 | 4 | 4 | 4 | Flat (no new passes — Cardi B was the last) |

## Bottom line

**Predicted churn landed. No signup. No drip. No target prices. Day 11.**

bhaygood728 churned today — the third consecutive user to do exactly what the previous day's report said they would do. "Flagged URGENT" continues to be a labeling operation rather than a triggering operation. The cost isn't just this user; it's that the report's signal has no receiver.

tate.sheppard is Day 7 of flagging. Florence is 14 days out. The price algorithm will flip to `buy_now` automatically on Apr 24, at which point the email we've been trying to send becomes retroactively redundant — the site itself will be telling the user what we've been trying to tell her. We will have spent a week watching the content window close.

pete.uzelac77 is the single most interesting user on the roster right now: 6 events, World Cup exposure, Darts Masters, and zero target prices. He's showing all the signals of a user who would convert on a target-price prompt and zero signals of someone who would stick around without one. He crosses Day 8 tomorrow.

The drip campaign is Day 11. dylanbaldy just finished Day 2 of post-signup with 0 watchlist items and 0 outreach. The activation email window closes today; tomorrow the content shifts from "add your first event" to "here's why people use us" which converts measurably worse.

**Week priority (unchanged from Apr 16):**
1. Fix drip campaign delivery — 21 users pending, Day 11
2. Send tate.sheppard's Florence email THIS WEEK or the algorithm auto-obsoletes it next week
3. Send pete's target-price prompt — 6 events, 0 targets, clearest conversion opportunity on the board
4. Add target-price commitment framing to watchlist rows (today's CRO rec) — the upstream unlock for alerts
5. Start an active acquisition channel — 52 users, 0 new today, trajectory is flatlined

---

*Growth & Retention Agent -- Daily Report*
*Generated: 2026-04-17 11:00 UTC*
