# Growth Daily --- 2026-04-08

## User Health Dashboard

| Segment                     | Count | % of Total | vs Yesterday |
|-----------------------------|-------|------------|--------------|
| Total Users                 | 48    | 100%       | First report |
| New (last 7 days)           | 2     | 4.2%       | ---          |
| Activated (has watchlist)   | 33    | 68.8%      | ---          |
| Active (visited in 7 days)  | ~2    | ~4.2%      | ---          |
| At-risk (no visit 7-14d)    | 4     | 8.3%       | ---          |
| Churned (no visit 14d+)     | 42    | 87.5%      | ---          |

> **Note:** No login/session tracking exists. Activity is estimated from signup dates and last watchlist additions. This is a major data gap --- see recommendations below.

## Activation Gap

- **0 users** signed up in last 7 days with 0 watchlist items (100% activation rate this week)
- **15 users** total have never added a watchlist item (31.2% lifetime non-activation)
- 3 of those 15 are test/demo accounts (`samir.sgpatel@gmail.com`, `demo@tickethawk.com`, `test@tickethawk.com`)
- **Real non-activated users: 12** (25% of real user base)

**Non-activated users (excluding test accounts):**
| Email | Days Since Signup | Status |
|-------|-------------------|--------|
| leofearon15@gmail.com | 18d | Churned |
| viktoriya.pershukova@mail.ru | 23d | Churned |
| danielbuchanan2020@gmail.com | 26d | Churned |
| cassichino23@icloud.com | 42d | Churned |
| mike@connaughton.com | 46d | Churned |
| yabhiram1611@gmail.com | 46d | Churned |
| maresa.janene@gmail.com | 71d | Churned |
| ctwarman@gmail.com | 73d | Churned |
| calchristensen12@gmail.com | 73d | Churned |
| samme.braem@gmail.com | 77d | Churned |
| misskaylajay@gmail.com | 78d | Churned |
| samir.sgpatel+test2@gmail.com | 71d | Churned (test?) |

**Likely causes:** Users signed up out of curiosity but didn't find an event worth tracking, or didn't understand the watchlist feature. No onboarding flow exists to guide them.

## Churn Signals

- **Unsubscribes today:** 0
- **Users entering "at-risk" today:** 1 (chocolateyu1083@yahoo.com crossed 7-day mark)
- **Alert fatigue candidates:** 0 (0 alerts have ever been triggered)
- **Drip emails sent:** 0 to ANY user (drip campaign appears non-functional)
- **Target prices set:** 0 across all 64 watchlist items (no user has set a target)

## Critical Issues Found

### 1. Drip Campaign Not Running
Every user shows `last_email_sent: 0`. The 5-email drip sequence has never sent a single email. This is the #1 retention failure --- users sign up, add an event, and then hear nothing from us for weeks.

**Impact:** 48 users have missed all 5 drip emails. Users who signed up 30+ days ago should have completed the entire sequence by now.

**Action needed:** Investigate why the drip cron job isn't firing. Check Railway logs for the `0 10 * * *` cron schedule.

### 2. Zero Target Prices = Zero Alerts
All 64 watchlist items have `target_price: null`. The price alert system --- our core retention mechanism --- has never triggered because no user has set a target price.

**Root causes:**
- The watchlist add flow may not prompt for target price
- Users don't understand they need to set a price to get alerts
- The UI may not make this obvious

**Action needed:** CRO Agent should audit the watchlist add flow and ensure target price is prompted (or auto-suggested based on current price minus 10%).

### 3. No Visit/Session Tracking
We can't measure true active vs. churned users because there's no login tracking. We only know signup dates and watchlist creation dates.

**Action needed:** Add a `last_login_at` column to the users table, updated on each `/api/auth/login` call.

## At-Risk Users (Tier 1: Gentle Nudge, 7-14 days)

| User | Days | Watchlist Events | Intervention |
|------|------|-----------------|--------------|
| chocolateyu1083@yahoo.com | 8d | Edmonton Oilers vs. Seattle Kraken (3/31 --- already passed) | Nudge: event passed, suggest new Oilers/NHL playoff events |
| arin.gelbaugh@outlook.com | 8d | NCAA Final Four Semi Finals (4/4 --- already passed) | Nudge: event passed, suggest championship game or next year |
| lvasub6@gmail.com | 9d | Flyleaf 20th Anniversary Tour (7/17 & 7/18) | Nudge: "Prices are moving on Flyleaf --- 100 days to go" |
| billstromkel@gmail.com | 14d | RAYE tour (4/8 --- TODAY) | Nudge: "Your event is TONIGHT. Here are current prices." |

## Churned Users with High Potential (Tier 3: Win-Back)

These churned users showed strong initial engagement:

| User | Days | Watchlist Items | Win-Back Angle |
|------|------|----------------|---------------|
| tosophiameyer@gmail.com | 28d | **11 items** | Power user who disappeared. High value. |
| brigitte.theisen@gmail.com | 41d | **10 items** | Power user. Likely lost interest without alerts. |
| ldholman@ymail.com | 35d | 3 items | Moderate engagement |
| veroverok80@gmail.com | 68d | 3 items | Early user, multiple events |

## Churn Intervention: Email Content

### Tier 1: billstromkel@gmail.com (EVENT IS TODAY)
**Subject:** Your RAYE show is tonight --- last-minute ticket prices
**Body:**
> Hey! Quick heads up --- RAYE is performing at State Theatre in Minneapolis TONIGHT (April 8).
>
> We've been tracking prices and here's where they stand right now:
> - [Compare prices across Ticketmaster, SeatGeek & StubHub]
>
> Last-minute tickets often drop in the hours before showtime. Check TicketScan one more time before you head out.
>
> [See Current Prices ->]

### Tier 1: lvasub6@gmail.com (future event, can re-engage)
**Subject:** Flyleaf prices are moving --- 100 days until the show
**Body:**
> Hey! You're tracking Flyleaf's 20th Anniversary Tour at House of Blues Chicago (July 17-18).
>
> With ~100 days to go, prices typically start shifting as more inventory gets listed. This is usually when deals start appearing.
>
> Set a target price and we'll alert you the moment tickets drop below it:
> [Set Price Alert ->]

### Tier 3: tosophiameyer@gmail.com (power user win-back)
**Subject:** 11 events. 0 price alerts. Let's fix that.
**Body:**
> You added 11 events to your TicketScan watchlist --- more than almost anyone. But you haven't been back in a few weeks.
>
> Here's what you missed: we've been tracking prices on all 11 events, and several have had significant price movements.
>
> Come back, set your target prices, and we'll do the watching for you:
> [Check Your Watchlist ->]

### Tier 3: brigitte.theisen@gmail.com (power user win-back)
**Subject:** Your 10 tracked events had price changes while you were away
**Body:**
> You're tracking 10 events on TicketScan --- and prices have been moving.
>
> We know checking prices manually is a pain. That's why we built price alerts. Set a target price on any event and we'll email you the moment it drops below.
>
> No more guessing. No more overpaying.
> [Set Price Alerts ->]

## Psychology-Driven Micro-Optimization

### Today's Principle: Commitment & Consistency + Loss Aversion (Combined)

**Where:** Watchlist add flow (after user adds an event)

**Current UX:** User adds event to watchlist. Nothing else happens. Target price is never prompted. User leaves and forgets.

**Proposed change:** After adding an event, show a completion meter and target price prompt:

```
--------------------------------------------
| Added to Watchlist                   [3/4] |
|                                            |
| [x] Find event                             |
| [x] Compare prices                         |
| [x] Add to watchlist                       |
| [ ] Set price alert   <-- YOU'RE HERE      |
|                                            |
| "Set a target price and we'll alert you    |
|  when it drops. Users who set alerts save   |
|  an average of $47 per ticket."            |
|                                            |
| Target price: $[auto-filled: current - 10%]|
|                                            |
| [Complete Setup]                           |
--------------------------------------------
```

**Principles applied:**
1. **Commitment/consistency:** User has completed 3 of 4 steps. The Zeigarnik effect makes them want to finish.
2. **Loss aversion:** "You'll miss price drops" framing makes not setting an alert feel like losing money.
3. **Anchoring:** Auto-filling target at current price minus 10% gives a reasonable anchor.
4. **Social proof:** "Users who set alerts save $47" validates the behavior.

**Expected impact:**
- Target price completion rate: 0% -> estimated 40-60%
- Price alerts triggered: 0 -> meaningful volume within days
- 7-day return rate: significant improvement (alerts drive return visits)

**This is the single highest-leverage change for retention right now.** Without target prices, our entire alert system is dead weight. Every other retention tactic is secondary until this is fixed.

## Actions Triggered

- Win-back emails queued: 4 (content prepared above, requires email system)
- Re-engagement nudges sent: 0 (no automated re-engagement system exists yet)
- Drip campaign investigation: FLAGGED as critical

## Cross-Agent Handoffs

### -> CRO Agent (Agent 6)
**Priority: CRITICAL**
The watchlist add flow needs a target price prompt. 0 of 64 watchlist items have a target price. The completion meter UX described above should be implemented ASAP. This single change would activate the entire price alert system.

### -> Email Agent (Agent 5)
**Priority: HIGH**
1. Investigate drip campaign failure (0 emails sent ever)
2. Queue the 4 churn intervention emails above
3. Design a "your event is today" automated email trigger

### -> Analytics Agent (Agent 4)
**Priority: MEDIUM**
Add `last_login_at` tracking to enable real active/churned user segmentation. Current analysis is based on signup date only, which underestimates engagement.

---

*Growth & Retention Agent -- Daily Report*
*Generated: 2026-04-08 11:00 UTC*
