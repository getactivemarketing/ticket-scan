# Growth Daily -- 2026-04-16

## User health dashboard

| Segment                     | Count | % of Total | vs Apr 15    |
|-----------------------------|-------|------------|--------------|
| Total users                 | 52    | 100%       | **+1**       |
| New (last 7 days)           | 4     | 7.7%       | +1           |
| Activated (has watchlist)   | 37    | 71.2%      | 0            |
| Active (visited in 7 days)  | ~4    | ~7.7%      | +1 (new signup) |
| At-risk (no visit 7-14d)    | 2     | 3.8%       | 0 (rotated)  |
| Churned (no visit 14d+)     | 47    | 90.4%      | **+1**       |

> Still no login/session tracking. "Active" and "churned" are estimates from signup dates and watchlist timestamps. Day 10 of flagging `last_login_at` as missing.

## What changed since Apr 15

1. **First signup in 5 days.** dylanbaldy@gmail.com registered April 15 at 18:24 UTC. Breaks the Apr 11-15 drought. No watchlist items yet -- classic Day 0 activation risk. This user is in the zone where an immediate welcome email (not the Day 3 drip) would determine whether they ever come back.

2. **laye.aurelien crossed to churned today.** 14 days since signup. Yesterday's report flagged this as "URGENT: last day before churned." The Tier 1 nudge didn't go out. This is now a Tier 3 win-back, and the two Shakira shows in July are 95 days out -- still salvageable, but the cheap save is gone.

3. **bhaygood728 now 13 days inactive.** One day from churned. Cardi B passed Apr 12 (4 days ago). Post-event pivot window is closing fast. Same user flagged 2 reports in a row. If we don't contact today, becomes churn #48 tomorrow.

4. **blubberboi enters at-risk.** 7 days since signup (Apr 9), never returned. Small watchlist (1 item: Metallica at SoFi, Jul 26). Still in the cheap-save window.

5. **tate.sheppard: Day 6.** Florence + The Machine is 15 days out. Six reports in a row recommending the same email. Nothing sent. We are now in the price-volatility window where this email would actually matter, and we're watching it close.

6. **goldy.pec.2012: Day 6 post-signup.** Bilmuri at The Sylvee is 16 days out. Second-ever flag. Still salvageable with a Day 6 email, but past the ideal Day 3-5 window.

7. **Drip campaign: 0 emails sent, Day 10.** 20 users pending. ldholman still waiting 43 days (wait -- ldholman not in current pending list, replaced by id 33 edithdionne at 42 days). Queue composition is shifting as users churn past any drip utility.

## Activation gap

- **1 user** signed up in last 7 days with 0 watchlist items (dylanbaldy, Day 1)
- **14 users** total have never added a watchlist item (26.9%)
- 3 test/demo accounts = **11 real non-activated** users (21.2%, down from 23.4% yesterday as denominator grew)
- dylanbaldy is the only recent non-activated user. Other 13 are deep churned (27-87 days).

## Churn signals

- Unsubscribes today: 0
- Users entering churned today: **1 (laye.aurelien)** -- predicted yesterday, happened today
- Users entering at-risk today: 1 (blubberboi, 7 days)
- Alert fatigue candidates: 0 (still zero alerts ever triggered)
- Drip emails sent: 0 (Day 10)
- Target prices set: 0 across all 72 watchlist items
- Events passed without notification: 4 cumulative (unchanged -- no new events passed in the last 24h)

## At-risk users (7-14 days inactive)

| User | Days since last activity | Watchlist events | Recommended intervention |
|------|--------------------------|-----------------|--------------------------|
| bhaygood728@gmail.com | 13d | Cardi B (Apr 12 -- PASSED) | **URGENT:** Tier 2 post-event pivot TODAY or churns tomorrow |
| blubberboi@yahoo.com | 7d | Metallica at SoFi (Jul 26) | Tier 1 gentle nudge, cheap save window |

laye.aurelien rotated off this list into churned. bhaygood728 moves up to urgent. blubberboi replaces them at the bottom.

## Churned users with re-engagement potential

| User | Days inactive | Watchlist items | Upcoming events? | Win-back priority |
|------|---------------|-----------------|------------------|-------------------|
| laye.aurelien@wanadoo.fr | **14d (NEW)** | Shakira (Jul 20 + Jul 23) | 95 days out | **HIGH (fresh churn)** |
| tate.sheppard@gmail.com | 32d | 1 (Florence + Machine, **15 days out**) | Yes | **CRITICAL -- Day 6, event very soon** |
| goldy.pec.2012@gmail.com | 6d* | 1 (Bilmuri, **16 days out**) | Yes | **HIGH -- pre-event nudge still possible** |
| arin.gelbaugh@outlook.com | 17d | 1 (NCAA -- passed) | No | LOW |
| chocolateyu1083@yahoo.com | 16d | 1 (Oilers -- passed) | No | LOW |
| tosophiameyer@gmail.com | 36d | **11** (Harry Styles, Aug-Sep) | Yes -- 4+ mo | **HIGH** -- power user |
| brigitte.theisen@gmail.com | 49d | **10** (BSB, Jul-Aug) | Yes -- 3+ mo | **HIGH** -- power user |
| lvasub6@gmail.com | 18d | 2 (Flyleaf, Jul 17-18) | Yes -- 92 days | HIGH |
| krusesin2023@gmail.com | 47d | 2 (Flyleaf, Jul) | Yes | MEDIUM |
| ldholman@ymail.com | 43d | 3 (Motionless In White, Aug) | Yes | MEDIUM |
| spcoog83@gmail.com | 38d | 1 (Olivia Dean, Aug) | Yes | MEDIUM |
| edithdionne@hotmail.com | 42d | 1 (A7X + Good Charlotte, Aug) | Yes | MEDIUM |

*goldy.pec is technically "recent churned" at 6 days but drip pending, so I'm listing with pre-event priority.

## Churn intervention: email content

### NEW: dylanbaldy@gmail.com (Day 1 welcome / activation nudge)

First signup in 5 days. Zero watchlist items, one day in. Every other recent signup except two went 0-for-watchlist, and we need to establish a different pattern with this user.

**Subject:** One thing to do before you leave TicketScan
**Body:**
> You signed up yesterday. Thanks.
>
> Here's the one move that makes TicketScan useful: add a show you're already considering. We'll start comparing prices across Ticketmaster, SeatGeek, and StubHub every 4 hours. If prices drop, you get an email.
>
> Not sure what to track? Try something coming up:
> - [NBA Playoffs](https://www.ticketscan.io/tickets/nba-playoffs)
> - [World Cup 2026](https://www.ticketscan.io/world-cup-2026) (56 days out)
> - [Concerts in your city](https://www.ticketscan.io/dashboard)
>
> Two clicks. Takes 10 seconds.

**Send timing:** 11am EDT

### URGENT: bhaygood728@gmail.com (last day before churned)

Cardi B passed 4 days ago. 13 days inactive. Churns tomorrow. Post-event pivot must happen today.

**Subject:** Your Cardi B show passed -- here's what's next
**Body:**
> Your Cardi B at Spectrum Center watchlist item is in the books. Hope the show was good.
>
> Since you're already watching ticket prices, worth pointing out: NBA Playoffs are underway, NFL Draft is April 23, and prices across Ticketmaster, SeatGeek, and StubHub can swing 30%+ for the same section.
>
> [Browse live events](https://www.ticketscan.io/dashboard)

**Send timing:** 10am EDT

### NEW at-risk: blubberboi@yahoo.com (gentle nudge, 7 days)

First day at-risk. Metallica at SoFi, 101 days out. Still tons of runway. Light touch, curiosity hook.

**Subject:** Metallica at SoFi is 101 days out -- here's what's moved
**Body:**
> You added Metallica at SoFi Stadium (Jul 26) to your watchlist a week ago.
>
> We've been comparing Ticketmaster, SeatGeek, and StubHub every 4 hours since. Worth setting a target price -- we'll email you the moment it drops to your number. Usually takes about 10 seconds.
>
> [Set your target price](https://www.ticketscan.io/watchlist)

**Send timing:** 6pm PDT (evening send for a likely West Coast user on an SoFi show)

### FRESH CHURN: laye.aurelien@wanadoo.fr (Tier 3 win-back)

Crossed to churned today. Two Shakira NY shows still 95 days out. Predicted yesterday -- didn't prevent it. Now need a stronger hook.

**Subject:** Shakira prices moved 12% this week -- you weren't watching
**Body:**
> You've been away 2 weeks. In that time, prices on your two Shakira shows in New York moved (Barclays Center Jul 20, UBS Arena Jul 23).
>
> We can't send you an alert when they drop to the price you'd pay, because you haven't told us what that price is. Takes 10 seconds per show.
>
> [Set your target prices](https://www.ticketscan.io/watchlist)

**Send timing:** 11am CET (French domain)

> Note: the "12% this week" figure is illustrative for the email draft. If our price_history table doesn't have two weeks of data on these specific events, swap for the actual observed delta or remove the claim. Never fabricate price movement in a user-facing email.

### ONGOING CRITICAL: tate.sheppard@gmail.com (Florence + Machine, 15 days out)

Day 6 of flagging. Same email six days running. Event is 15 days out.

**Subject:** Florence + The Machine -- 15 days, prices getting interesting
**Body:** (See Apr 15 report, unchanged -- still the right email)

**Send timing:** 10am EDT

### ONGOING: goldy.pec.2012 (Bilmuri, 16 days out), Pete Day 6, tosophiameyer power user

Same emails as Apr 15 report -- all still the correct send. None went out yesterday.

## Psychology-driven micro-optimization

### Today's principle: Endowment Effect

**Rotation so far:** Commitment/Consistency (Apr 8), Social Proof (Apr 10), Scarcity (Apr 11), Loss Aversion (Apr 12), Reciprocity (Apr 13), FOMO (Apr 14), Anchoring (Apr 15). Today: Endowment Effect. Completes the 8-principle rotation. Tomorrow loops back to Commitment/Consistency with new application.

**Where:** Watchlist page -- the space where users see their tracked events

**The problem:** The current watchlist page labels the section "Your Watchlist" but treats each item as a passive line entry: event name, date, venue, target price, delete button. There's no signal that ownership has accumulated. A user's first watchlist item and their tenth look the same visually, and returning to the page feels like opening a to-do list, not checking on something they own.

**Current state:** Flat list of events. No indication of how long an item has been tracked, how many price checks we've run on their behalf, or what they'd have gained by being here sooner.

**Proposed change:** Add personal-investment markers to each watchlist item.

For each row, surface:
1. **Tracking duration:** "Tracking for 23 days"
2. **Price checks performed:** "47 price checks run"
3. **Observed price range since adding:** "Low: $142 | High: $218 (Jan 18)"

And at the top of the page, an aggregate ownership summary:
> You're tracking 11 events. We've run 312 price checks for you since March 10.

The goal: make the user feel they've built something. The more they perceive investment on our end, the more they feel investment on their end. Endowment effect says people value what they own more than what they don't -- and "having TicketScan watching things for you" is a form of ownership.

**Why this works:**
- Endowment effect: Thaler's classic mug study showed people demand 2x more to sell an item they own than they'd pay to buy the same item. The asymmetry is about perceived ownership, not price.
- Tracking duration and price check counts convert invisible background work into visible accumulated value. Loss aversion (if you leave, you lose this) layers on top naturally.
- The aggregate summary turns the watchlist from a list into an investment dashboard. Dashboards pull return visits.
- Power users (tosophiameyer, brigitte.theisen) with 10-11 items benefit disproportionately. Those two are currently our highest-value churned users.

**Implementation:**
- Query `price_history` for count by event_id per user on load
- Add `added_at` as "X days tracking" on each card
- Compute min/max/current from price_history for the display range
- Cache aggregate counts (refresh on watchlist change) to keep the header snappy
- Track: does adding these markers reduce the delete rate and increase session duration on the page?

**Expected impact:**
- Reduced watchlist deletions: 20-30% (users less willing to trash items they've "invested" in)
- Return visits to watchlist page: +15% (ownership signals create pull)
- Target price setting rate: +10% (users who see 47 price checks feel compelled to complete the setup by giving us a target)

## Actions triggered

- Win-back/re-engagement emails prepared: 7 (dylanbaldy welcome, bhaygood728 urgent, blubberboi gentle, laye.aurelien Tier 3, tate.sheppard Day 6, goldy.pec Day 6, pete Day 6)
- New user welcome flag: 1 (dylanbaldy)
- New at-risk flag: 1 (blubberboi)
- Fresh churn flag: 1 (laye.aurelien, first day churned)
- Re-engagement emails actually sent: 0 (no automated system)
- Drip campaign status: BROKEN -- Day 10

## Cross-agent handoffs

### -> Email Agent (Agent 5)
**Priority: CRITICAL (Day 10)**
1. **IMMEDIATE:** dylanbaldy welcome email -- only new signup in 5 days, Day 1 window closing
2. **IMMEDIATE:** bhaygood728 post-event pivot -- churns tomorrow if no contact
3. **IMMEDIATE:** tate.sheppard win-back -- Florence + Machine now 15 days out (Day 6 asking)
4. **IMMEDIATE:** laye.aurelien Tier 3 win-back -- fresh churn today, prevent slide to deep churn
5. Send blubberboi Tier 1 gentle nudge -- new at-risk today
6. Send goldy.pec Day 6 pre-event email -- Bilmuri 16 days out
7. Send Pete Day 6 target-price nudge -- 4 WC matches, 2 Darts Masters, 0 targets
8. Drip campaign: non-functional. Day 10. 52 users, 20 pending, 0 emails ever sent.
9. Build automated event-proximity triggers (watchlist events < 21 days out should auto-send)

### -> CRO Agent (Agent 6)
**Priority: HIGH**
1. Endowment: watchlist page -- tracking duration, price check counts, aggregate summary (today)
2. Anchoring: reorder compare page results highest-to-lowest with savings badge (Apr 15, pending)
3. FOMO: price activity line on event cards (Apr 14, pending)
4. Reciprocity: value summary on compare page (Apr 13, pending)
5. Scarcity: target price prompts (Apr 11, pending)
6. Loss aversion: alert email rewrite (Apr 12, pending)
7. "Event passed" redirect flow for stale watchlist items

### -> Analytics Agent (Agent 7)
**Priority: HIGH (Day 10)**
1. Add `last_login_at` tracking -- every user health metric is still an estimate without it
2. Track compare page click-throughs by source (feeds anchoring optimization)
3. Track watchlist -> target price setting conversion
4. Attribution for dylanbaldy signup -- where did our one new user come from?

### -> Content Agent (Agent 1)
**Priority: MEDIUM**
- NBA Playoffs, NFL Draft (Apr 23) content for re-engagement hooks
- World Cup 56-day countdown content (matches start June 11)

## Key metrics trend

| Metric | Apr 13 | Apr 14 | Apr 15 | Apr 16 | Trend |
|--------|--------|--------|--------|--------|-------|
| Total users | 51 | 51 | 51 | **52** | **+1 (drought broken)** |
| Activated | 37 (72.5%) | 37 (72.5%) | 37 (72.5%) | 37 (71.2%) | Flat (ratio dropped w/ new signup) |
| Watchlist items | 72 | 72 | 72 | 72 | Flat |
| Target prices set | 0 | 0 | 0 | 0 | Flat |
| Drip emails sent | 0 | 0 | 0 | 0 | Day 10 broken |
| Price alerts triggered | 0 | 0 | 0 | 0 | Flat |
| At-risk users | 4 | 2 | 2 | 2 | Stable but rotating |
| Churned users | 44 | 46 | 46 | **47** | +1 (laye.aurelien) |
| Events passed w/o outreach | 2 | 3 | 4 | 4 | Flat (no new passes) |

## Bottom line

**The drought broke. laye.aurelien didn't. Net zero.**

dylanbaldy is our first new user in 5 days. That's the good news. The bad news is we just lost laye.aurelien to churn in exactly the way yesterday's report predicted -- flagged as urgent, Tier 1 nudge recommended, didn't happen. Now she's a Tier 3 case with Shakira 95 days out and we have to work harder for the same save.

bhaygood728 is on the same trajectory. Flagged urgent today, will churn tomorrow if we repeat the pattern. At some point, this stops being a notification problem and becomes evidence that the report itself doesn't trigger action.

tate.sheppard is Day 6. Florence + The Machine is 15 days out. We're about to document a seventh consecutive day of recommending the same unsent email. The cost isn't just this user -- it's the credibility of the "urgent" tag when nothing urgent actually triggers a send.

The drip campaign is Day 10. dylanbaldy just entered the queue. She'll sit there until we rebuild the send mechanism. The pending queue is shuffling as churned users age out, but nobody ever gets an email.

The psychology rotation completed 8 principles today. Anchoring, endowment, FOMO, loss aversion, reciprocity, scarcity, social proof, commitment -- all drafted, zero built. Tomorrow we loop back to Commitment/Consistency with a different application, but the question is whether documenting another principle matters when nothing from the first eight shipped.

**Week priority (unchanged):**
1. Fix drip campaign delivery -- 20 users pending, Day 10
2. Send the bhaygood728 pivot email TODAY or that's churn #48 tomorrow
3. Send dylanbaldy welcome email -- first new signup in 5 days, don't waste it
4. Add target price prompts to the watchlist page -- still 0/72 items have targets
5. Start an active acquisition channel -- 52 users is not a trajectory

---

*Growth & Retention Agent -- Daily Report*
*Generated: 2026-04-16 11:00 UTC*
