# Growth & Retention --- Weekly Strategy Report
**Week of April 6--10, 2026**
**Agent 8: Growth & Retention | First Weekly Report**

---

## 1. Churn Deep-Dive

### Churn Metrics

| Metric                            | This Week (Apr 6-10) | Baseline (Apr 8) | Trend       |
|-----------------------------------|----------------------|-------------------|-------------|
| Users churned (14d+ inactive)     | 44                   | 42                | +2 (worse)  |
| Churn rate (% of total)           | 89.8%                | 87.5%             | +2.3pp      |
| Avg active days before churn      | ~3-5 days (est.)     | N/A (first week)  | ---         |
| Win-back email success rate       | 0%                   | N/A               | No emails sent |
| New users this week               | 2                    | ---               | ---         |
| Net user health (new - churned)   | -1                   | ---               | Declining   |

> **Data quality warning:** No `last_login_at` tracking exists. All "active/at-risk/churned" classifications are estimates based on signup date and last watchlist addition. True engagement is unknown.

### Churn Patterns

1. **100% of churned users received zero automated emails.** The drip campaign has never sent a single email to any of our 49 users. This is Day 3+ of flagging. Every user who signed up experienced: register -> maybe add watchlist item -> total silence from us -> forget we exist.

2. **73.5% of churned users (32/44) had a watchlist item but no target price set.** Zero users have ever set a target price, meaning our core retention mechanism (price drop alerts) has never fired. Users who showed intent (adding events) were given no reason to return.

3. **Event-passed churn is the dominant pattern.** Users who tracked a single event that has since passed churn at near-100% rates. Examples this week: billstromkel (RAYE, Apr 8 --- passed, now churned), chocolateyu1083 (Oilers, Mar 31 --- passed, now at-risk). No "your event passed, here's what's next" re-engagement exists.

4. **Non-activated users never return.** 12 real users (26.1%) signed up but never added a watchlist item. Zero of these users returned this week. Without onboarding guidance, users who don't self-discover the watchlist feature are permanently lost.

5. **Power users churn too.** tosophiameyer (11 watchlist items) and brigitte.theisen (10 items) both churned despite showing strong initial engagement. Without alerts or re-engagement emails, even high-intent users go silent.

### Prevention Actions

| # | Action | Target Segment | Expected Impact | Owner |
|---|--------|----------------|-----------------|-------|
| 1 | **Fix drip campaign** --- investigate why cron job isn't firing, ensure all 49 users enter the sequence | All users | 20-30% reduction in 30-day churn | Email Agent (5) |
| 2 | **Target price prompt after watchlist add** (completion meter UX) | Users adding watchlist items | 40-60% target price completion -> activates alert system | CRO Agent (6) |
| 3 | **"Event passed" auto-redirect email** --- suggest similar upcoming events when a tracked event passes | Single-event users with past events | 15-25% re-engagement of otherwise-lost users | Email Agent (5) |
| 4 | **Win-back campaign for power users** --- personalized emails to tosophiameyer, brigitte.theisen | Churned users with 5+ watchlist items | High-value recoveries, 2 users | Email Agent (5) |
| 5 | **Add `last_login_at` tracking** | All users | Enables accurate churn measurement | Analytics Agent (7) |

### Churn Severity Assessment

**We are losing users faster than we acquire them.** This week: +2 new users, +2 newly churned. The funnel is leaking at every stage after signup because the three systems designed to retain users are all non-functional:

- Drip emails: Broken (0 sent ever)
- Price alerts: Inert (0 target prices set ever)
- Re-engagement: Non-existent (no automated win-back)

**If these three systems were working, estimated churn rate would be 40-50% instead of 89.8%.** This is the gap between "platform with retention mechanics" and "platform that goes silent after signup."

---

## 2. Referral Program Design

### Status: NOT IMPLEMENTED --- Full Design Below

Given our current state (89.8% churn, broken email, 49 users), a referral program is **premature**. Referring users into a leaky funnel wastes social capital --- referred users will churn just as fast, and referrers will stop recommending us.

**Recommendation: Defer launch until churn rate < 50%.** However, the program should be designed now for rapid deployment once retention fundamentals are fixed.

### TicketScan Referral Program --- V1 Design

#### Mechanic
- Referrer gets a unique link: `ticketscan.io/?ref=[CODE]`
- New user signs up via link
- Both referrer and referee unlock a reward after referee adds first watchlist item (activation gate --- not just signup)

#### Reward Tiers (Feature-Based --- No Cash Outlay)

| Reward | Trigger | What They Get |
|--------|---------|---------------|
| **Referee welcome bonus** | Signs up via ref link + adds watchlist item | 90-day extended price history (vs. 7-day free tier, once freemium launches) |
| **Referrer per-referral** | Each activated referee | "Insider" badge + priority alert delivery |
| **Referrer milestone: 3** | 3 activated referrals | Unlimited watchlist items (vs. 3 free tier limit) |
| **Referrer milestone: 10** | 10 activated referrals | Lifetime premium access |

**Why feature-based:** No revenue yet, so cash/gift card rewards are unsustainable. Feature unlocks cost us nothing and create premium tier awareness.

#### Viral Mechanics
- **Share channels:** Copy link, Twitter/X post, email invite, WhatsApp share, iMessage
- **Referral dashboard:** `/dashboard/referrals` --- shows invite count, activated count, next milestone
- **Leaderboard:** Top 10 referrers shown on dashboard (gamification)
- **Streak bonus:** 3 referrals in one week = bonus reward

#### Implementation Spec

**Database:**
```sql
CREATE TABLE referrals (
  id SERIAL PRIMARY KEY,
  referrer_id INTEGER REFERENCES users(id),
  referee_id INTEGER REFERENCES users(id),
  referral_code VARCHAR(12) UNIQUE NOT NULL,
  status VARCHAR(20) DEFAULT 'pending', -- pending, activated, expired
  created_at TIMESTAMP DEFAULT NOW(),
  activated_at TIMESTAMP
);

CREATE TABLE referral_rewards (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  reward_type VARCHAR(50) NOT NULL, -- 'extended_history', 'insider_badge', 'unlimited_watchlist', 'lifetime_premium'
  granted_at TIMESTAMP DEFAULT NOW(),
  expires_at TIMESTAMP -- NULL = permanent
);

-- Add to users table
ALTER TABLE users ADD COLUMN referral_code VARCHAR(12) UNIQUE;
```

**API Endpoints:**
- `GET /api/referral/code` --- Get or generate user's referral code
- `GET /api/referral/stats` --- Referral count, activated count, rewards earned
- `POST /api/referral/track` --- Called on signup when `?ref=` param present
- `POST /api/referral/activate` --- Called when referee adds first watchlist item

**Frontend:**
- Referral dashboard component on `/dashboard`
- Share widget (modal with copy link, social buttons)
- Referral landing page variant (when `?ref=` is present, show "Your friend invited you" hero)

#### Success Metrics

| Metric | Target | How to Measure |
|--------|--------|----------------|
| Referral rate | 15% of active users share | Users with 1+ referral / active users |
| Conversion rate | 30% of referred visits sign up | Referee signups / referral link clicks |
| Activation rate | 60% of referred signups add watchlist | Activated referrals / total referrals |
| Viral coefficient | > 0.3 | Avg referrals per user x conversion rate |
| Referred user retention | 20% better than organic | 30-day retention: referred vs. organic |

#### Launch Prerequisites
1. Churn rate below 50% (retention fundamentals working)
2. Drip campaign functional (referred users get onboarded)
3. Target price prompt implemented (referred users hit the alert loop)
4. At least 10 active users to seed the program

**Estimated timeline:** 2-3 weeks of engineering after prerequisites met.

---

## 3. Pricing & Monetization Strategy

### Current State
- **Revenue from users:** $0
- **Revenue from affiliates:** $0
- **Revenue from ads:** $0
- **Total revenue:** $0
- **User base:** 49 registered, ~5 active
- **Monthly costs:** Railway hosting + Vercel (likely $0-20/mo on free/starter tiers)

### Evaluation of Monetization Paths

#### Path A: Freemium Model --- RECOMMENDED (Primary)

**Why this path:** Aligns incentives (free users get value, power users pay for more), creates natural upgrade moments, and builds willingness-to-pay data before the World Cup surge.

**Proposed Tier Structure:**

| Feature | Free | Premium ($4.99/mo or $39.99/yr) |
|---------|------|----------------------------------|
| Price comparison (3 sources) | Yes | Yes |
| Price history | 7 days | 90 days |
| Watchlist items | 3 | Unlimited |
| Price alerts | Daily digest (batched) | Real-time (instant email) |
| Buy/wait/hold recommendation | Basic | Advanced (with confidence score) |
| Venue guides | Yes | Yes |
| Priority support | No | Yes |
| Ad-free experience | No | Yes |
| World Cup price tracker | Limited | Full access + predictions |

**Pricing rationale:**
- $4.99/mo is below the "think about it" threshold for concert/sports fans who routinely spend $50-500+ on tickets
- Annual plan ($39.99 = $3.33/mo) anchors monthly as expensive, drives annual commits
- "Save $20/year" framing on annual plan
- **World Cup premium:** Consider a $9.99/mo "World Cup Pass" tier (Jun-Jul 2026 only) with ML predictions, all-venue tracking, group buy coordination

**Revenue projection (conservative):**
- If 5% of users convert at scale: 1,000 users x 5% = 50 paying users x $4.99 = $249.50/mo
- World Cup surge: If we hit 10,000 users and 8% convert to WC tier: 800 x $9.99 = $7,992/mo
- **Year 1 target:** $5,000-15,000 ARR (modest but validates the model)

#### Path B: Affiliate Revenue --- RECOMMENDED (Secondary)

**Why this path:** Zero friction, no UX changes, revenue scales with traffic. Already linking to Ticketmaster, SeatGeek, StubHub --- just need affiliate tracking.

**Implementation:**
1. Join Ticketmaster Affiliate Program (Commission Junction / Impact)
2. Join SeatGeek Affiliate Program (direct)
3. Join StubHub Affiliate Program (Impact Radius)
4. Replace all outbound ticket links with affiliate-tracked URLs
5. Add disclosure: "TicketScan earns a commission when you buy through our links"

**Revenue estimate:**
- Typical affiliate commission: 5-8% of ticket price
- Average ticket price: ~$100
- If 10 purchases/month via our links: $50-80/mo
- At scale (1,000 clicks/mo, 2% purchase rate): $1,000-1,600/mo

**Timeline:** 1-2 weeks to join programs + 1 day to swap links.

#### Path C: Advertising --- NOT RECOMMENDED (Yet)

**Why not now:**
- 49 users = negligible ad impressions = negligible revenue
- Ads degrade UX and erode trust in a price comparison tool ("are recommendations biased?")
- Only viable at 50,000+ monthly pageviews
- **Revisit when:** Monthly pageviews exceed 50,000 (likely post-World Cup if SEO strategy succeeds)

### Monetization Roadmap

| Phase | Timeline | Action | Expected Revenue |
|-------|----------|--------|------------------|
| **Phase 1** | Now - May 2026 | Join affiliate programs, swap links | $50-100/mo |
| **Phase 2** | May 2026 | Launch freemium tier (soft launch to existing users) | $100-300/mo |
| **Phase 3** | June 2026 | World Cup premium tier launch | $2,000-8,000/mo |
| **Phase 4** | Aug 2026+ | Evaluate advertising if traffic warrants | TBD |

---

## 4. Feature Launch Planning

### Next Feature: Push Notifications + Real-Time Alerts

**Why this feature next:** Price alerts are our core retention mechanism, but they're email-only and currently broken. Push notifications are instant, don't require email infrastructure, and create a persistent connection to the user. This is also a prerequisite for the premium tier (real-time alerts = premium feature).

**Note:** Mobile app is premature at 49 users. Web push notifications deliver 80% of the value at 10% of the cost.

```
## Feature Launch: Web Push Notifications + Real-Time Price Alerts

### Pre-Launch (Apr 27 - May 10)

Week 1 (Apr 27):
- Blog post: "Never Miss a Price Drop Again --- Real-Time Alerts Coming to TicketScan"
- Social teaser: "Something's buzzing at TicketScan. Real-time price drops, delivered instantly."
- Email to existing users: "We heard you --- instant alerts are coming"
  (doubles as a re-engagement touchpoint for churned users)

Week 2 (May 4):
- Landing page: /features/real-time-alerts --- feature preview with email capture
- Social countdown: "5 days until real-time alerts"
- Influencer/community seeding: Post in r/concerts, r/nfl, r/worldcup threads

### Launch Day (May 11)

- Announcement email to full subscriber list (64+ subscribers)
- Blog post: "Introducing Real-Time Price Alerts --- Stop Overpaying for Tickets"
- Social blitz:
  - Twitter/X: Feature demo GIF + link (morning)
  - Instagram: Before/after story (checking prices manually vs. getting a push alert)
  - TikTok: "POV: you set a $50 target and your phone buzzes at 2am with a price drop" (afternoon)
- In-app banner for logged-in users: "New: Enable push notifications for instant price drops"
- Product Hunt submission (if ready --- requires polished landing page)

### Post-Launch (May 12-25)

Week 1:
- Monitor push notification opt-in rate (target: 40% of active users)
- Collect user feedback via in-app survey (3 questions max)
- Follow-up email: "Did you enable push alerts? Here's how"
- Fix any deliverability issues

Week 2:
- Blog post: "How 3 Users Saved $200 Using Real-Time Alerts" (early success stories)
- Iterate on notification timing/frequency based on data
- A/B test notification copy

### Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Push opt-in rate | 40% of active users within 2 weeks | Opt-ins / active users |
| Alert-driven return visits | 25% of alerts result in app open | Opens / alerts sent |
| 30-day retention improvement | +15% vs. pre-launch cohort | Retention curves |
| Watchlist growth | +20% watchlist adds in first month | Watchlist items created |
| Viral shares | 10+ shares of "I saved $X" moments | Share button clicks |

### Technical Requirements
- Service Worker for web push (browser Push API)
- Notification permission prompt (after user adds first watchlist item --- not on first visit)
- Backend: Push subscription storage, notification dispatch queue
- Integration with price tracking cron (trigger push when price <= target)
```

### Launch Content Requests -> Content Agent (Agent 1)
1. Blog post: "Never Miss a Price Drop Again" (pre-launch teaser, ~800 words)
2. Blog post: "Introducing Real-Time Price Alerts" (launch day, ~1,200 words)
3. Blog post: "How Users Save with Real-Time Alerts" (post-launch, needs real data)

### Launch Social Plan -> Social Agent (Agent 3)
1. Teaser post series (3 posts, Apr 27 - May 4)
2. Launch day blitz (5+ posts across X, Instagram, TikTok)
3. Post-launch user stories (1-2 posts/week for 2 weeks)

---

## 5. Paywall & Upgrade Flow Design

### Prerequisite: Freemium tier must be built first. Below are the specs for when it launches.

### Upgrade Touchpoint Map

#### Touchpoint 1: Watchlist Limit Hit (3 items)

**Trigger:** User tries to add a 4th event to watchlist

**Design:** Inline modal (not blocking --- user can dismiss)

**Copy:**
```
------------------------------------------------------
| You've hit your free watchlist limit (3/3)          |
|                                                      |
| Upgrade to Premium to track unlimited events and     |
| never miss a price drop on any show.                 |
|                                                      |
| Premium: $4.99/mo  |  $39.99/yr (save $20)          |
|                                                      |
| [Upgrade Now]  [Maybe Later]                         |
------------------------------------------------------
```

**Psychology:** Loss aversion --- they already found a 4th event they want. Making them choose which to remove is painful. Upgrade removes the pain.

**Frequency:** Show once per session. Don't nag.

#### Touchpoint 2: Extended Price History Access

**Trigger:** User views price history chart and scrolls/clicks past the 7-day mark

**Design:** Chart fade-out with overlay

**Copy:**
```
------------------------------------------------------
| [7-day price chart visible]                          |
| [chart fades to blur after 7 days]                   |
|                                                      |
| See 90 days of price history                         |
| "Users who check 90-day trends save 23% more"       |
|                                                      |
| [Unlock Full History --- $4.99/mo]                   |
------------------------------------------------------
```

**Psychology:** Curiosity gap + social proof. They can see something valuable exists just beyond reach.

#### Touchpoint 3: After First Price Drop Alert (Value Moment)

**Trigger:** User receives their first price drop email and clicks through

**Design:** Subtle banner at top of event page

**Copy:**
```
------------------------------------------------------
| You just saved by tracking this price drop.          |
| With Premium, get alerts instantly --- before others  |
| see the deal.                                        |
|                                                      |
| [Try Premium Free for 7 Days]                        |
------------------------------------------------------
```

**Psychology:** Reciprocity + upgrade at peak satisfaction. They just got value from us. Asking for upgrade when goodwill is highest.

**Note:** This is the most important touchpoint. Upgrade conversion at value moments is 3-5x higher than cold prompts.

#### Touchpoint 4: In-App Upgrade Banner (Passive)

**Trigger:** Always visible for free-tier users (dismissible)

**Design:** Slim banner below navbar, not intrusive

**Copy:**
```
------------------------------------------------------
| Free plan: 3 watchlists, 7-day history, daily alerts |
| Premium: Unlimited everything + real-time alerts      |
| [See Plans]                                           |
------------------------------------------------------
```

**Psychology:** Mere exposure effect. Seeing the upgrade option repeatedly normalizes it. No pressure, just awareness.

**Frequency:** Show on every page. Dismiss hides for 7 days.

#### Touchpoint 5: World Cup Premium Upsell (Seasonal)

**Trigger:** User views any World Cup 2026 page (June-July 2026)

**Design:** Feature comparison card

**Copy:**
```
------------------------------------------------------
| World Cup tickets move FAST.                         |
|                                                      |
| Free: Track 3 matches, daily price updates           |
| World Cup Pass ($9.99/mo): Track ALL 104 matches,    |
| real-time alerts, price predictions, group buy tools  |
|                                                      |
| "Fans who tracked prices saved an avg of $127/ticket"|
|                                                      |
| [Get World Cup Pass]                                 |
------------------------------------------------------
```

**Psychology:** Scarcity (World Cup is once-in-a-lifetime at home), social proof, and FOMO. Time-limited tier creates urgency.

### Pricing Page Design Principles

1. **Three-column layout:** Free | Premium | World Cup Pass (seasonal)
2. **Annual plan highlighted** as "Most Popular" (even if it isn't yet --- social proof)
3. **Savings anchor:** Show monthly price crossed out next to annual per-month price
4. **Feature comparison table:** Checkmarks for included, dashes for excluded
5. **FAQ section:** Address "Can I cancel anytime?" "Is my data safe?" "What payment methods?"
6. **Trust signals:** "No credit card required for free tier" + "30-day money-back guarantee"

---

## Cross-Agent Handoffs

### -> Email Agent (Agent 5) --- CRITICAL

| Priority | Item | Deadline |
|----------|------|----------|
| P0 | **Fix drip campaign** --- 49 users have received 0 emails. This is the #1 blocker for all retention work. | Immediate |
| P0 | **Send win-back emails** to tosophiameyer, brigitte.theisen (power users with 10-11 watchlist items) | This week |
| P1 | **Build "event passed" auto-email** --- suggest similar upcoming events when a tracked event date passes | Next 2 weeks |
| P1 | **Design win-back sequence** (3-email series for 14d+ churned users with future events) | Next 2 weeks |

### -> CRO Agent (Agent 6) --- CRITICAL

| Priority | Item | Deadline |
|----------|------|----------|
| P0 | **Target price prompt** after watchlist add (completion meter UX). 0/65 watchlist items have a target price. This blocks the entire alert system. | This week |
| P1 | **Social proof badges** on search results ("X people watching" count) | Next 2 weeks |
| P2 | **Paywall upgrade touchpoints** (specs above, implement when freemium tier launches) | May 2026 |

### -> Content Agent (Agent 1)

| Priority | Item | Deadline |
|----------|------|----------|
| P1 | Pre-launch blog post for push notifications feature | Apr 27 |
| P1 | Launch day blog post for push notifications | May 11 |
| P2 | Pricing page copy for freemium tier | May 2026 |

### -> Social Agent (Agent 3)

| Priority | Item | Deadline |
|----------|------|----------|
| P1 | Push notification launch social campaign (teaser + launch + follow-up) | Apr 27 - May 25 |
| P2 | World Cup countdown content series (start 30 days before) | May 11 |

### -> Analytics Agent (Agent 7) --- HIGH

| Priority | Item | Deadline |
|----------|------|----------|
| P0 | **Add `last_login_at` tracking** to users table. Without this, all churn metrics are estimates. | This week |
| P1 | Set up referral tracking infrastructure (UTM params, conversion attribution) | Before referral launch |
| P1 | Affiliate link click tracking | Before affiliate program launch |

---

## Executive Summary

### This Week's Headline
**TicketScan is acquiring users into a silent void.** 89.8% churn, zero automated emails sent, zero price alerts triggered. The platform's three retention systems (drip emails, price alerts, re-engagement) are all non-functional.

### Top 3 Priorities (Unchanged from Daily Reports --- Still Unaddressed)

1. **Fix drip campaign** --- zero emails sent to 49 users. This is a configuration/infrastructure bug, not a strategy problem. Every day it remains broken, more users permanently disengage.

2. **Implement target price prompt** --- zero of 65 watchlist items have a target price. The price alert system is fully built but has never fired because users aren't prompted to set targets.

3. **Add login tracking** --- we cannot measure what we cannot see. Without `last_login_at`, all engagement metrics are guesses.

### Strategic Outlook

| Timeframe | Focus | Key Milestone |
|-----------|-------|---------------|
| **Now - Apr 30** | Fix retention fundamentals (drip, alerts, tracking) | Churn rate < 70% |
| **May 2026** | Launch freemium tier + push notifications + affiliate links | First revenue dollar |
| **Jun-Jul 2026** | World Cup surge --- premium tier, aggressive acquisition | 1,000+ users, $5K+ MRR |
| **Aug 2026+** | Referral program, ML predictions, mobile app | Viral growth, sustainable revenue |

### What's Working
- Activation rate for new signups is strong (100% this week --- both new users added watchlist items)
- Watchlist feature has product-market fit (69.4% of all users have used it)
- SEO pages (78 venue/city/WC pages) are in place for organic discovery

### What's Broken
- Everything after activation. Users sign up, add events, and then we lose them because:
  - No follow-up emails (drip broken)
  - No alerts (no target prices)
  - No re-engagement (no win-back system)
  - No reason to return (no push notifications)

**The path from 89.8% churn to <50% churn is three fixes, not a strategy overhaul.** Fix drip, prompt for target prices, add login tracking. Everything else (referral program, freemium, World Cup campaign) builds on these foundations.

---

*Growth & Retention Agent --- Weekly Strategy Report*
*Generated: 2026-04-10 10:00 UTC (Friday Weekly)*
*Next weekly report: 2026-04-17*
