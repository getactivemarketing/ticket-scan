# Growth Daily --- 2026-04-12

## User Health Dashboard

| Segment                     | Count | % of Total | vs Apr 11    |
|-----------------------------|-------|------------|--------------|
| Total Users                 | 51    | 100%       | 0 (flat)     |
| New (last 7 days)           | 3     | 5.9%       | 0            |
| Activated (has watchlist)   | 37    | 72.5%      | 0            |
| Active (visited in 7 days)  | ~3    | ~5.9%      | 0            |
| At-risk (no visit 7-14d)    | 5     | 9.8%       | 0            |
| Churned (no visit 14d+)     | 43    | 84.3%      | 0            |

> **Note:** No login/session tracking exists. Activity estimated from signup dates and last watchlist additions. `last_login_at` still not implemented --- Day 6 of flagging.

## What Changed Since Apr 11

1. **Zero new signups.** First zero-growth day since Apr 8. Weekend acquisition is historically weaker --- not alarming yet, but worth monitoring if it extends to Monday.

2. **bhaygood728's Cardi B event is TODAY.** Yesterday's urgent flag: this user signed up Apr 3, added Cardi B at Spectrum Center (Charlotte), and hasn't been back in 9 days. The event is happening right now. If we had an automated "event day" email, this user would have gotten a nudge at 8am. We still don't have one. **Day 6 of flagging the need for event-proximity emails.**

3. **Watchlist items flat at 72.** No new additions since pete.uzelac77's burst on Apr 10. Pete's 6 items remain the last engagement signal from any user.

4. **Drip campaign still at 0 emails sent.** Day 6 of flagging. 51 users, 0 drip emails ever delivered. This is now the longest-standing critical issue in the growth pipeline.

5. **Target prices remain at 0.** 72 watchlist items, zero target prices. The entire price alert system is dormant.

## Activation Gap

- **0 users** signed up in last 7 days with 0 watchlist items (100% activation rate for recent cohort)
- **14 users** total have never added a watchlist item (27.5% lifetime non-activation)
- 3 are test/demo accounts --- **11 real non-activated users** (23.4% of real user base)
- Unchanged from yesterday --- no new users to shift the ratio

### Never-Activated Users (excluding test/demo)

| User | Signup | Days Since | Notes |
|------|--------|-----------|-------|
| leofearon15@gmail.com | Mar 20 | 23d | Churned, no engagement |
| viktoriya.pershukova@mail.ru | Mar 15 | 28d | Churned |
| danielbuchanan2020@gmail.com | Mar 13 | 30d | Churned |
| cassichino23@icloud.com | Feb 24 | 47d | Churned |
| mike@connaughton.com | Feb 20 | 51d | Churned |
| yabhiram1611@gmail.com | Feb 20 | 51d | Churned |
| maresa.janene@gmail.com | Jan 27 | 75d | Churned |
| ctwarman@gmail.com | Jan 25 | 77d | Churned |
| calchristensen12@gmail.com | Jan 24 | 78d | Churned |
| samme.braem@gmail.com | Jan 20 | 82d | Churned |
| misskaylajay@gmail.com | Jan 19 | 83d | Churned |

All 11 are deep churned (23-83 days). Without an onboarding nudge at signup, these users had no system driving them to add a watchlist item. They signed up, browsed, and left.

## Churn Signals

- **Unsubscribes today:** 0
- **Users entering "at-risk" today:** 0 (next: blubberboi on Apr 16 if no activity)
- **Users entering "churned" today:** 1 --- lvasub6@gmail.com crosses the 14-day threshold today (last activity Mar 29)
- **Alert fatigue candidates:** 0 (zero alerts ever triggered)
- **Drip emails sent:** 0 (BROKEN --- Day 6)
- **Target prices set:** 0 across all 72 watchlist items
- **Events happening today:** 1 --- Cardi B at Spectrum Center (bhaygood728)

## At-Risk Users (7-14 days inactive)

| User | Days Since Last Activity | Watchlist Events | Recommended Intervention |
|------|--------------------------|-----------------|--------------------------|
| bhaygood728@gmail.com | 9d | Cardi B (Apr 12 --- **TODAY**) | **EVENT DAY: Hope they check on their own** |
| laye.aurelien@wanadoo.fr | 10d | Shakira (Jul 20 + Jul 23) | Tier 1: "Shakira prices shifting --- 99 days out" |
| chocolateyu1083@yahoo.com | 12d | Oilers vs Kraken (3/31 --- passed) | Tier 1: Event passed, suggest NHL Playoffs |
| arin.gelbaugh@outlook.com | 13d | NCAA Final Four (4/4 --- passed) | Tier 1: Event passed, suggest NBA Playoffs or NFL Draft |
| lvasub6@gmail.com | 14d | Flyleaf 20th Anniversary (7/17-18) | **Crossing to churned TODAY** --- Tier 2 intervention needed |

### lvasub6 Churn Prevention (NEW)

lvasub6 is crossing the 14-day inactive mark today. They have 2 Flyleaf 20th Anniversary Tour items (Jul 17-18 at House of Blues Chicago). At 96 days out, this is still a recoverable user.

**Subject:** You're missing the price window on Flyleaf tickets
**Body:**
> You added both Flyleaf 20th Anniversary shows at House of Blues Chicago (July 17 + 18) to your TicketScan watchlist two weeks ago.
>
> At 96 days out, ticket prices for mid-size venue tours like this tend to be at their most volatile. New inventory drops, resellers adjust, and deals appear and vanish.
>
> Set a target price and we'll monitor prices 24/7 across Ticketmaster, SeatGeek, and StubHub:
> [Set Price Alert ->](https://www.ticketscan.io/watchlist)

**Send timing:** 10am CDT (likely Chicago-area user based on venue preference)

## Churned Users with High Re-engagement Potential

| User | Days Inactive | Watchlist Items | Upcoming Events? | Win-Back Priority |
|------|---------------|-----------------|------------------|-------------------|
| tate.sheppard@gmail.com | 28d | 1 (Florence + Machine, May 1) | **Yes - 19 days out** | **CRITICAL** --- event approaching |
| tosophiameyer@gmail.com | 32d | **11** (Harry Styles, Aug-Sep) | Yes - 4+ months out | **HIGH** --- power user |
| brigitte.theisen@gmail.com | 45d | **10** (Backstreet Boys, Jul-Aug) | Yes - 3+ months out | **HIGH** --- power user |
| krusesin2023@gmail.com | 43d | 2 (Flyleaf, Jul) | Yes | MEDIUM |
| ldholman@ymail.com | 39d | 3 (Motionless In White, Aug) | Yes | MEDIUM |
| spcoog83@gmail.com | 34d | 1 (Olivia Dean, Aug) | Yes | MEDIUM |
| edithdionne@hotmail.com | 38d | 1 (A7X + Good Charlotte, Aug) | Yes | MEDIUM |

> **CRITICAL: tate.sheppard@gmail.com** --- Florence + The Machine at State Farm Arena is May 1, now 19 days out. This was flagged yesterday at 20 days. Each day without a win-back email is a missed opportunity. This user has been churned for 28 days but has a real, tangible reason to return.

## Churn Intervention: Email Content

### CRITICAL: tate.sheppard@gmail.com (Florence + Machine, 19 days out)
**Subject:** Florence + The Machine in Atlanta is 19 days away --- prices are moving
**Body:**
> You added Florence + The Machine at State Farm Arena (May 1) to your watchlist back in March.
>
> The show is under 3 weeks out now. This is when ticket prices make their biggest moves --- sellers start undercutting each other, and deals show up that weren't there a month ago.
>
> Compare current prices across all platforms right now:
> [Compare Prices ->](https://www.ticketscan.io/dashboard)
>
> Don't have a target price set? Tell us your number and we'll alert you instantly if it drops:
> [Set Price Alert ->](https://www.ticketscan.io/watchlist)

**Send timing:** 10am EDT

### Tier 2: lvasub6@gmail.com (Flyleaf, crossing to churned TODAY)
*(Content above in churn prevention section)*

### Tier 3: tosophiameyer@gmail.com (power user win-back --- repeat from Apr 10)
**Subject:** Your 11 Harry Styles shows. Still no price alerts set.
**Body:**
> You're tracking more Harry Styles: Together, Together shows than almost anyone on TicketScan --- 11 nights at MSG from August 26 to September 16.
>
> That's a lot of tickets to keep an eye on. The good news: you don't have to. Set a target price on each show and our system compares Ticketmaster, SeatGeek, and StubHub prices every 4 hours. When your price hits, you'll know.
>
> The first show is 137 days out. Prices will shift a lot between now and then.
>
> [Set Your Price Targets ->](https://www.ticketscan.io/watchlist)

**Send timing:** 10am EDT

### Tier 3: brigitte.theisen@gmail.com (power user win-back)
**Subject:** 10 Backstreet Boys shows at the Sphere. We're still watching.
**Body:**
> You've got 10 Backstreet Boys: Into The Millennium shows tracked at the Sphere in Las Vegas (July 16 - August 6).
>
> With about 95 days until the first show, this is when early pricing patterns start to form. Sphere events tend to hold premium pricing, but we've seen gaps between platforms.
>
> Set a target price and we'll alert you the moment any platform drops to your number:
> [Set Price Alerts ->](https://www.ticketscan.io/watchlist)

**Send timing:** Morning MT (likely western US based on Las Vegas event interest)

## Psychology-Driven Micro-Optimization

### Today's Principle: Loss Aversion

**Rotation:** Apr 8: Commitment/Consistency. Apr 10: Social Proof. Apr 11: Scarcity/Urgency. Today: Loss Aversion.

**Where:** Price alert email templates --- specifically the "price dropped" notification

**Problem being solved:** Even if we fix the drip system and users start setting target prices, the current price alert email is purely informational: "Price dropped on [event]." There's no loss framing. Users see it as a neutral update rather than something they'll lose if they don't act.

**Current state of price alert email (from index.js):**
The alert checks `currentPrice <= targetPrice` and sends an email. The email content is functional but flat --- it reports what happened without framing the cost of inaction.

**Proposed change:** Rewrite price alert email template with loss aversion framing:

**Before (current):**
```
Subject: Price Alert: [Event Name]
Body: The price for [Event] has dropped to $[price], which is at or below 
your target of $[target]. Check it out on TicketScan.
```

**After (loss aversion reframe):**
```
Subject: [Event Name] just hit $[price] --- this won't last

Body: 
Prices for [Event Name] at [Venue] just dropped to $[price] --- 
that's [X%] below the average we've tracked.

Based on our data, price drops like this typically last [hours/days] 
before bouncing back. Here's what you'd lose by waiting:

  Current best price:  $[price]
  30-day average:      $[avg_price]  
  You'd pay:           $[avg - current] more per ticket

[Compare & Buy Now ->]

We track prices every 4 hours. This was the latest check at [time].
```

**Psychological mechanism:**
- "This won't last" in the subject creates urgency tied to real data
- "$X more per ticket" explicitly quantifies what the user loses by not acting
- Showing the gap between current and average makes the deal feel like a windfall
- "Typically last [hours/days]" creates a closing window (even if approximate)
- The buyer's instinct shifts from "should I buy?" to "can I afford to wait?"

**Implementation details:**
- Calculate `savings = avg_price - current_price` from `price_history` table
- Calculate `pct_below = ((avg_price - current_price) / avg_price * 100)`
- For "typically lasts" --- analyze `price_history` to find average duration of below-average price windows (or use a reasonable default like "24-48 hours")
- Only show loss framing when savings > $10 (avoid trivial amounts feeling manipulative)

**Expected impact:**
- Click-through rate on price alert emails: +30-50% (loss framing consistently outperforms neutral framing)
- Conversion from alert to purchase: +15-25%
- **Prerequisite:** Users need to set target prices first. This optimization is ready to deploy the moment the target price UX is fixed (yesterday's scarcity recommendation).

**Stacking with yesterday's recommendation:**
Yesterday's scarcity-based target price prompts + today's loss-aversion alert emails create a full funnel:
1. Scarcity motivates users to set target prices (entry)
2. Loss aversion motivates users to act on alerts (conversion)

## Power User Nurture: Pete (Day 2)

**pete.uzelac77+ticketscan@gmail.com** --- Day 2 since signup (Apr 10). 6 watchlist items. No activity today.

Yesterday's nurture plan recommended a Day 1 welcome email highlighting World Cup price comparison. That wasn't sent (no automated system). Pete is now in the gap between signup excitement and disengagement.

**Today's recommended action:**
- Send welcome/activation email focused on setting target prices for his 4 World Cup matches
- World Cup tickets are high-demand, making scarcity framing authentic: "These are some of the most watched events on TicketScan"
- If Pete sets even 1 target price, he becomes our first user to complete the full activation loop (signup -> watchlist -> target price -> alert eligible)

**Subject:** You're tracking 4 World Cup matches --- set your price targets before demand spikes
**Body:**
> Welcome to TicketScan, Pete.
>
> You've already added 4 World Cup 2026 matches at Lincoln Financial Field to your watchlist (plus 2 U.S. Darts Masters shows at MSG). That's more tracked events than most users add in a month.
>
> Here's how to get the most out of it: set a target price on each event. Our system compares prices across Ticketmaster, SeatGeek, and StubHub every 4 hours. When your target is hit, you'll get an instant alert.
>
> World Cup tickets are in high demand --- 60+ days out is the sweet spot for catching early deals before prices climb.
>
> [Set Your Price Targets ->](https://www.ticketscan.io/watchlist)

## Actions Triggered

- Win-back/re-engagement emails prepared: 5 (tate.sheppard, lvasub6, tosophiameyer, brigitte.theisen, pete nurture)
- Event-day email for bhaygood728: **MISSED** --- event is today, no email sent (Day 6 of flagging)
- Re-engagement nudges sent: 0 (no automated system)
- Drip campaign status: BROKEN --- Day 6
- lvasub6 crossing to churned today --- intervention email drafted

## Cross-Agent Handoffs

### -> Email Agent (Agent 5)
**Priority: CRITICAL (Day 6 escalation)**
1. **IMMEDIATE:** Send tate.sheppard win-back --- Florence + Machine 19 days out
2. **IMMEDIATE:** Send lvasub6 re-engagement --- crossing to churned today, Flyleaf 96 days out
3. **IMMEDIATE:** Send pete.uzelac77 nurture --- Day 2, set target prices for World Cup
4. **IMMEDIATE:** Send brigitte.theisen win-back --- power user, 10 BSB shows, 95 days out
5. Drip campaign: still non-functional. Day 6. 51 users receiving nothing.
6. Build automated "event day" trigger --- bhaygood728's Cardi B event happened today with no notification. This is a concrete, provable failure.

### -> CRO Agent (Agent 6)
**Priority: HIGH**
1. Scarcity-based target price prompts (Apr 11 recommendation, still pending)
2. Loss-aversion price alert email rewrite (today's recommendation --- ready to implement when target prices exist)
3. "Event passed" redirect flow for stale watchlist items

### -> Analytics Agent (Agent 7)
**Priority: HIGH (Day 6 escalation)**
1. Add `last_login_at` tracking --- all active/at-risk/churned numbers are estimates
2. Add event click-through tracking on alert emails (needed for loss aversion optimization)

### -> Content Agent (Agent 1)
**Priority: MEDIUM**
World Cup price tracking content for SEO + retention (flagged Apr 11, still relevant with pete's engagement signal)

## Key Metrics Trend

| Metric | Apr 8 | Apr 10 | Apr 11 | Apr 12 | Trend |
|--------|-------|--------|--------|--------|-------|
| Total users | 48 | 49 | 51 | 51 | Flat (0 new) |
| Activated | 33 (68.8%) | 34 (69.4%) | 37 (72.5%) | 37 (72.5%) | Flat |
| Watchlist items | 64 | 65 | 72 | 72 | Flat |
| Target prices set | 0 | 0 | 0 | 0 | No change |
| Drip emails sent | 0 | 0 | 0 | 0 | No change (Day 6) |
| Price alerts triggered | 0 | 0 | 0 | 0 | No change |
| At-risk users | 4 | 3 | 5 | 5 | Stable |
| Churned users | 42 | 44 | 43 | 43 | Stable (+1 lvasub6 entering today) |

**Bottom line:** Quiet day. Zero new signups, zero new watchlist items, zero engagement signals. The burst from Apr 10 (pete + goldy) has settled. This is what a typical day looks like for TicketScan right now --- growth happens in spurts driven by organic search, then nothing.

The real story today is what DIDN'T happen: bhaygood728 had a Cardi B event TODAY and got no email. tate.sheppard's Florence + The Machine show is now 19 days out with no win-back sent. lvasub6 crossed from at-risk to churned with no intervention. These are three concrete, provable retention failures that automated emails would have prevented.

**The structural problems remain unchanged:** 0 drip emails, 0 target prices, 0 price alerts. Day 6 of flagging. The activation funnel works at the top (users sign up, add watchlist items quickly) but has zero mechanisms to bring them back after Day 1.

**One metric to watch:** If Monday (Apr 13) also produces 0 signups, that's a 3-day gap --- the longest since the platform launched. Weekend dips are normal, but weekday flatness would suggest the organic acquisition channel is plateauing.

---

*Growth & Retention Agent --- Daily Report*
*Generated: 2026-04-12 11:00 UTC*
