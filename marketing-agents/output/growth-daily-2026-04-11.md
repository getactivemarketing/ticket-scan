# Growth Daily --- 2026-04-11

## User Health Dashboard

| Segment                     | Count | % of Total | vs Apr 10    |
|-----------------------------|-------|------------|--------------|
| Total Users                 | 51    | 100%       | +2           |
| New (last 7 days)           | 3     | 5.9%       | +1           |
| Activated (has watchlist)   | 37    | 72.5%      | +3 (+3.1pp)  |
| Active (visited in 7 days)  | ~3    | ~5.9%      | +1           |
| At-risk (no visit 7-14d)    | 5     | 9.8%       | +2           |
| Churned (no visit 14d+)     | 43    | 84.3%      | -1           |

> **Note:** No login/session tracking exists. Activity estimated from signup dates and last watchlist additions. `last_login_at` still not implemented --- Day 5 of flagging.

## What Changed Since Apr 10

1. **+2 new users** (both signed up Apr 10 after previous report at 11:00 UTC):
   - **pete.uzelac77+ticketscan@gmail.com** --- Added 6 watchlist items within 12 minutes (4 World Cup matches at Lincoln Financial Field + 2 U.S. Darts Masters at MSG). Strongest activation signal we've seen --- a genuine power user in the making.
   - **goldy.pec.2012@gmail.com** --- Added Bilmuri at The Sylvee (May 2) within 40 seconds of signup. Fast activation.

2. **bhaygood728@gmail.com has Cardi B TOMORROW (Apr 12).** This user signed up Apr 3, added the event immediately, and hasn't been back in 8 days. High probability of organic return, but a "your event is tomorrow" nudge would guarantee it. We still have no automated system for this.

3. **Watchlist items jumped from 65 to 72 (+7).** Pete's 6 items account for most of the increase. World Cup interest continues to drive engagement.

4. **Drip campaign still at 0 emails sent.** Day 5 of flagging. 51 users, 0 drip emails ever delivered.

5. **Target prices still at 0.** 72 watchlist items, not a single target price set.

## Activation Gap

- **0 users** signed up in last 7 days with 0 watchlist items (100% activation rate for recent signups)
- **14 users** total have never added a watchlist item (27.5% lifetime non-activation)
- 3 are test/demo accounts --- **11 real non-activated users** (23.4% of real user base)
- Down from 12 on Apr 10 --- improvement from new activated users diluting the pool

### Activation Quality: New User Deep Dive

| User | Signup | Time to First Watchlist | Items Added | Quality |
|------|--------|------------------------|-------------|---------|
| pete.uzelac77 | Apr 10 15:38 | 10 min | 6 | Power user |
| goldy.pec.2012 | Apr 10 12:53 | 40 sec | 1 | Standard |
| blubberboi | Apr 9 23:56 | 2 min | 1 | Standard |

**Pete is our highest-engagement new user since tosophiameyer (11 items).** World Cup + niche events (darts) suggests a serious live events fan. This user should be nurtured carefully.

## Churn Signals

- **Unsubscribes today:** 0
- **Users entering "at-risk" today:** 2 (bhaygood728 crossed 7d mark; laye.aurelien crossed 9d)
- **Users entering "churned" today:** 0 (next transition: chocolateyu1083 on Apr 14)
- **Alert fatigue candidates:** 0 (still 0 alerts triggered --- system is inert)
- **Drip emails sent:** 0 to ANY user (BROKEN --- Day 5)
- **Target prices set:** 0 across all 72 watchlist items

## At-Risk Users (7-14 days inactive)

| User | Days Since Last Activity | Watchlist Events | Recommended Intervention |
|------|--------------------------|-----------------|--------------------------|
| bhaygood728@gmail.com | 8d | Cardi B (Apr 12 --- **TOMORROW**) | **URGENT: "Your event is tomorrow" email** |
| laye.aurelien@wanadoo.fr | 9d | Shakira (Jul 20 + Jul 23) | Tier 1: "Shakira prices are moving --- 100 days out" |
| chocolateyu1083@yahoo.com | 11d | Oilers vs Kraken (3/31 --- passed) | Tier 1: Event passed, suggest NHL playoff matchups |
| arin.gelbaugh@outlook.com | 12d | NCAA Final Four (4/4 --- passed) | Tier 1: Event passed, suggest NFL Draft or NBA Playoffs |
| lvasub6@gmail.com | 13d | Flyleaf 20th Anniversary (7/17-18) | Tier 1: "96 days out --- prices shifting on Flyleaf" |

> **chocolateyu1083 and arin.gelbaugh** both had events that already passed. Their watchlist items are now stale. Without a "suggest similar events" flow, these users have no reason to return.

## Churned Users with High Re-engagement Potential

| User | Days Inactive | Watchlist Items | Upcoming Events? | Win-Back Priority |
|------|---------------|-----------------|------------------|-------------------|
| tosophiameyer@gmail.com | 31d | **11** (Harry Styles, Aug-Sep) | Yes - 4+ months out | **HIGH** --- power user |
| brigitte.theisen@gmail.com | 44d | **10** (Backstreet Boys, Jul-Aug) | Yes - 3+ months out | **HIGH** --- power user |
| tate.sheppard@gmail.com | 27d | 1 (Florence + Machine, May 1) | **Yes - 20 days out** | **HIGH** --- event approaching |
| krusesin2023@gmail.com | 42d | 2 (Flyleaf, Jul) | Yes | MEDIUM |
| ldholman@ymail.com | 38d | 3 (Motionless In White, Aug) | Yes | MEDIUM |
| spcoog83@gmail.com | 33d | 1 (Olivia Dean, Aug) | Yes | MEDIUM |
| edithdionne@hotmail.com | 37d | 1 (A7X + Good Charlotte, Aug) | Yes | MEDIUM |

> **New flag: tate.sheppard@gmail.com.** Florence + The Machine at State Farm Arena is May 1 --- just 20 days out. This user has been churned for 27 days but has a reason to come back. Time-sensitive win-back opportunity.

## Churn Intervention: Email Content

### URGENT: bhaygood728@gmail.com (event is TOMORROW)
**Subject:** Cardi B in Charlotte is TOMORROW --- are you ready?
**Body:**
> Your tracked event is here! Cardi B's Little Miss Drama Tour hits Spectrum Center tomorrow, April 12.
>
> Last-minute tickets are still available across multiple platforms. Prices can shift fast this close to showtime --- here's how they compare right now:
> [Compare Cardi B Ticket Prices ->](https://www.ticketscan.io/dashboard)
>
> Have a great show.

**Send timing:** ASAP (event is Apr 12)

### Tier 1: laye.aurelien@wanadoo.fr (Shakira, 100 days out)
**Subject:** Shakira ticket prices are shifting --- 100 days to your show
**Body:**
> You're tracking 2 Shakira shows --- Barclays Center (July 20) and UBS Arena (July 23).
>
> With about 100 days to go, this is when new inventory tends to hit the market. Prices can swing 20-30% in either direction from here.
>
> Set a target price and we'll alert you the moment tickets drop to your number:
> [Set Price Alerts ->](https://www.ticketscan.io/watchlist)

**Send timing:** 10am CEST (France timezone)

### Tier 3: tate.sheppard@gmail.com (Florence + Machine, 20 days out --- NEW)
**Subject:** Florence + The Machine in Atlanta is 20 days away
**Body:**
> You added Florence + The Machine at State Farm Arena (May 1) to your watchlist back in March.
>
> The show is just 20 days out now. Ticket prices typically make their biggest moves in the final 2-3 weeks as sellers adjust. This is prime time to compare and buy.
>
> Check current prices across Ticketmaster, SeatGeek, and StubHub:
> [Compare Prices ->](https://www.ticketscan.io/dashboard)

**Send timing:** 10am EDT

### Tier 3: tosophiameyer@gmail.com (power user win-back --- repeat from Apr 10)
**Subject:** 11 Harry Styles shows. 0 price alerts. We can fix that.
**Body:**
> You've got 11 Harry Styles: Together, Together shows on your TicketScan watchlist --- more than almost anyone.
>
> Here's the thing: without a target price, our alert system can't ping you when deals pop up. And with the first show 139 days out, now's the time to set your numbers before the pre-sale rush.
>
> Set your price targets and we'll watch 24/7:
> [Set Price Alerts ->](https://www.ticketscan.io/watchlist)
>
> Tip: Set your target at 10-15% below the current average. We'll do the rest.

**Send timing:** 10am EDT

## Psychology-Driven Micro-Optimization

### Today's Principle: Scarcity + Urgency

**Rotation:** Apr 8 was Commitment/Consistency + Loss Aversion. Apr 10 was Social Proof. Today: Scarcity.

**Where:** Watchlist page --- the "target price" input field

**Problem being solved:** 72 watchlist items, 0 target prices. Users add events to their watchlist but never complete the second step of setting a target price. The current UX shows an empty input field with no motivation to fill it.

**Proposed change:** Add a dynamic scarcity message next to the target price input based on event proximity:

```
----------------------------------------------------
| Cardi B - Little Miss Drama Tour                  |
| Apr 12, 2026 --- Spectrum Center, Charlotte        |
|                                                   |
| Target Price: $______                             |
| [!] Event is TOMORROW --- last chance to set alert |
----------------------------------------------------

| Flyleaf 20th Anniversary Tour                     |
| Jul 17, 2026 --- House of Blues, Chicago           |
|                                                   |
| Target Price: $______                             |
| [clock] 97 days left --- prices shift most in     |
|         the 60-90 day window. Set your target now. |
----------------------------------------------------

| Harry Styles: Together, Together                   |
| Aug 26, 2026 --- Madison Square Garden, NYC        |
|                                                   |
| Target Price: $______                             |
| [chart] 137 days out --- set your price and we'll |
|         track 24/7 across 3 ticket platforms       |
----------------------------------------------------
```

**Implementation details:**
- Calculate `daysUntilEvent` from `event_date`
- < 3 days: Red urgent banner "Event is [tomorrow/in X days] --- last chance"
- 3-30 days: Orange "Prices move fast in the final weeks. Set your target."
- 30-90 days: Blue "Sweet spot for price alerts. Set your number."
- 90+ days: Gray "Set your target early --- we'll watch for months."
- Events that have passed: "This event has passed. [Find similar events ->]"

**Psychological mechanism:**
- Creates time pressure tied to real event dates (not artificial)
- The "window" framing (60-90 days) gives users a reason to act NOW
- Different urgency levels prevent alarm fatigue
- Passed-event handling redirects churned interest to new events

**Expected impact:**
- Target price completion rate: currently 0% --- even a 10% completion rate would be transformative
- Price alerts triggered: currently 0 --- any target prices at all unblocks the entire alert system
- Secondary: users who set targets have a reason to return (anticipation of alerts)

## New User Nurture: Pete (Power User Candidate)

Pete (pete.uzelac77+ticketscan) shows power user behavior:
- 6 watchlist items in 12 minutes
- Mix of World Cup (4 matches) and niche events (U.S. Darts Masters)
- All events at 2 venues (Lincoln Financial Field, MSG) --- likely lives in the Philadelphia/NYC corridor

**Recommended nurture sequence:**
1. **Day 1 (today):** Welcome email highlighting price comparison for World Cup tickets specifically
2. **Day 3:** "Set target prices on your 6 tracked events" --- use the scarcity framing (World Cup tickets are high-demand)
3. **Day 7:** "Other World Cup matches at Lincoln Financial Field" --- surface events they might have missed

**Why this matters:** Pete's behavior mirrors tosophiameyer's early pattern (multiple items, single artist/venue focus). tosophiameyer churned at Day 31 with 0 target prices. If we can get Pete to set targets in the first week, we break the pattern.

## Actions Triggered

- Win-back/re-engagement emails prepared: 4 (content above, requires manual send)
- **URGENT email:** bhaygood728 event-is-tomorrow nudge --- needs immediate send
- Re-engagement nudges sent: 0 (no automated system)
- Drip campaign status: BROKEN --- Day 5 of flagging
- New power user identified: pete.uzelac77 (nurture plan above)

## Cross-Agent Handoffs

### -> CRO Agent (Agent 6)
**Priority: CRITICAL**
1. Scarcity-based target price prompts (today's psychology recommendation)
2. "Event passed" redirect flow for stale watchlist items (chocolateyu1083, arin.gelbaugh pattern)
3. Social proof badges (Apr 10 recommendation, still pending)

### -> Email Agent (Agent 5)
**Priority: CRITICAL (Day 5 escalation)**
1. **IMMEDIATE:** Send bhaygood728 "event is tomorrow" email --- Cardi B Apr 12
2. **IMMEDIATE:** Send tate.sheppard win-back --- Florence + Machine 20 days out
3. Drip campaign is non-functional --- 5 days flagged, 0 progress, 51 users receiving nothing
4. Queue remaining intervention emails (laye.aurelien, tosophiameyer)
5. Build automated "event approaching" trigger (Day X-1, Day X-7, Day X-30)

### -> Analytics Agent (Agent 7)
**Priority: HIGH (Day 5 escalation)**
Add `last_login_at` tracking. All active/at-risk/churned numbers are estimates without it.

### -> Content Agent (Agent 1)
**Priority: MEDIUM**
Pete's World Cup interest suggests demand for World Cup price tracking content. "When to Buy World Cup 2026 Tickets: A Price Data Guide" would serve both SEO and retention.

## Key Metrics Trend

| Metric | Apr 8 | Apr 10 | Apr 11 | Trend |
|--------|-------|--------|--------|-------|
| Total users | 48 | 49 | 51 | +2 (best day) |
| Activated | 33 (68.8%) | 34 (69.4%) | 37 (72.5%) | +3 (strong) |
| Watchlist items | 64 | 65 | 72 | +7 (best day) |
| Target prices set | 0 | 0 | 0 | No change |
| Drip emails sent | 0 | 0 | 0 | No change |
| Price alerts triggered | 0 | 0 | 0 | No change |
| At-risk users | 4 | 3 | 5 | +2 (concerning) |
| Churned users | 42 | 44 | 43 | -1 (dilution from growth) |

**Bottom line:** Best acquisition day yet --- 2 new users, 7 new watchlist items, and a potential power user in Pete. But the growth is masking the same structural problems: zero drip emails, zero target prices, zero price alerts. We're filling a leaky bucket. The 3 users who signed up this week are on the same trajectory as the 43 who've already churned --- unless we fix the email system and target price UX in the next 7 days.

**Bright spot:** 100% activation rate for new signups this week. Users who find TicketScan are finding value immediately. The problem isn't acquisition or first-session experience --- it's everything after Day 1.

---

*Growth & Retention Agent --- Daily Report*
*Generated: 2026-04-11 11:00 UTC*
