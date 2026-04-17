# Growth & Retention --- Weekly Strategy Report
**Week of April 11--17, 2026**
**Agent 8: Growth & Retention | Second Weekly Report**

---

## 1. Churn Deep-Dive

### Churn Metrics

| Metric                          | This Week (Apr 11-17) | Last Week (Apr 6-10) | Trend       |
|---------------------------------|-----------------------|----------------------|-------------|
| Users churned (14d+ inactive)   | 47                    | 44                   | +3 (worse)  |
| Churn rate (% of total users)   | 90.4%                 | 89.8%                | +0.6pp      |
| Avg active days before churn    | 2-7 days (est.)       | 3-5 days (est.)      | Roughly flat |
| Win-back email success rate     | 0%                    | 0%                   | No emails sent (Day 10) |
| New users this week             | 1                     | 2                    | -50%        |
| Net user health (new - churned) | -2                    | -1                   | Declining   |
| Signup → activation rate        | 0% (0/1)              | 100% (2/2)           | -100pp      |

> Day 10 of flagging `last_login_at` as missing. All "active/at-risk/churned" classifications remain estimates derived from signup dates and watchlist timestamps. True login/session data does not exist.

### Churn Patterns

1. **Activation cracked for the first time.** dylanbaldy (registered Apr 15, 18:24 UTC) has been on the platform 48+ hours without adding a watchlist item. Every previous April signup activated within 10 minutes. The April cohort's activation rate dropped from 100% (8/8) to 88.9% (8/9) with a single data point. This is the first hard evidence that signup-without-an-event-in-mind is a failure mode we never previously had to handle.

2. **laye.aurelien crossed to churned Apr 16.** Predicted Apr 15. Flagged as "URGENT: last day before churned" in the daily report. No intervention triggered. Two Shakira shows (Jul 20 UBS, Jul 23 Barclays) remain 95+ days out --- salvageable, but the cheap save window closed.

3. **bhaygood728 will churn tomorrow.** 13 days inactive at report time. Cardi B passed Apr 12 (5 days ago). Second consecutive day flagged urgent. Same pattern as laye.aurelien --- if the intervention doesn't fire today, we document churn #48 in tomorrow's daily.

4. **tate.sheppard: Day 7 of urgent tag, Florence + The Machine 14 days out.** Documenting the same unsent email every day is now the test case for whether the "urgent" label means anything. This user is in the highest-value pre-event intervention window possible (14 days out = peak price volatility) and we have watched the window open and begin to close.

5. **7 watched events have passed this week with zero price data captured.** Each one represents a user who added an event expecting us to track it and got nothing. Silent churn across 5+ users this way (Cardi B, RAYE, NCAA Final Four, Hawks-Celtics, Oilers-Kraken, NBA dates, BAD OMENS). These users are filed under "activated" but are functionally indistinguishable from churned.

6. **World Cup is now a real demand signal.** pete.uzelac77 added 4 WC Philadelphia matches Apr 10. First user-validated WC demand in the entire dataset. He's 7 days post-signup, still active by our estimation, and the drip queue holds no email for him. If he churns before the tournament (55 days out), we lose our only confirmed WC convert.

### Prevention Actions (Ranked)

| # | Action | Target Segment | Expected Impact | Owner | Status |
|---|--------|----------------|-----------------|-------|--------|
| 1 | **Ship the drip campaign fix.** Day 10. 22+ users pending. This remains the #1 blocker for every other retention lever. | All users with signup 3+ days ago | 20-30% reduction in 30-day churn | Lead Architect | OPEN |
| 2 | **Fix price tracking cron.** 7 watched events have passed with zero price history captured. Fixing this is what converts watchlist adds into return visits. | All 34 users with ≥1 watchlist item | 15-25% improvement in 14-day retention | Lead Architect | OPEN |
| 3 | **Add 24-hour post-signup "pick your first event" email.** dylanbaldy would have been the first recipient today. Cheap build, high leverage. | Users 24h post-signup with 0 watchlist items | Activation rate recovery from 88.9% toward 95%+ | Email Agent (5) | NEW |
| 4 | **Send the bhaygood728 post-event pivot today.** This is the test of whether we can act on a flagged intervention before it becomes unnecessary. | 1 user, today | 1 retention save (small but proves the loop) | Email Agent (5) | IMMEDIATE |
| 5 | **Power user re-engagement: tosophiameyer, brigitte.theisen.** 36d and 49d churned. 21 combined watchlist items. Harry Styles MSG + BSB Sphere. Highest-value wins available. | 2 users | Recover 2 power users; precedent for future | Email Agent (5) | OPEN |
| 6 | **Build target-price prompt.** 0/72 items have a target. The alert system is fully built and has never fired. This is not a user-preference signal --- it's a UX bug. | All watchlist-adding users | 40-60% target completion unlocks alert-driven retention | CRO Agent (6) | OPEN |
| 7 | **"Event passed" auto-pivot email.** 7 events have passed this week without outreach. Template: "your [event] is in the books, here's what's next." | Users with past-date watchlist items | 15-25% re-engagement of otherwise-lost users | Email Agent (5) | OPEN |
| 8 | **Add `last_login_at` tracking.** Every retention decision is an estimate without it. | All users | Enables measurement, unblocks attribution | Analytics Agent (7) | OPEN (Day 10) |

### Churn Severity Assessment

**The gap between churn rate (90.4%) and the "fixed infrastructure" estimate (~40-50%) is unchanged from last week because nothing from last week shipped.** Every recommendation in the Apr 10 report is still open. The daily reports have documented the same three blockers every day for 10 days straight: drip broken, price tracking broken, target-price prompt missing.

This is no longer a strategy gap. It's an execution gap. The Growth agent's recommendations cannot move the numbers without engineering action --- and the compounding cost of inaction is that every daily report now has a slightly longer list of "flagged yesterday, still not fixed" entries.

**Net this week:** +1 new user, +3 newly churned, 0 watchlist adds, 0 emails sent, 0 alerts triggered. This is not a platform --- it's a database of people who tried something once.

---

## 2. Referral Program --- Deferred; Design Unchanged

### Status: NOT IMPLEMENTED --- Launch Deferred

Same verdict as last week, with sharper justification. At 90.4% churn and zero demonstrated value delivery (no price data captured for any passed event), referrals would:
- Feed into a funnel that converts invitations into unsubscribes
- Burn social capital from the users most likely to refer (power users, who are currently churned)
- Create a second data point for "TicketScan doesn't do what it says" --- which spreads

**Launch prerequisite (unchanged):** churn rate < 50% AND price tracking functional AND at least one price alert has ever fired.

### Incremental Design Updates (Since Apr 10)

**New reward lever identified --- validated by pete.uzelac77's behavior:**

The power user pattern is now confirmed across 3 users (tosophiameyer, brigitte.theisen, pete.uzelac77): all three track the full slate of a single event/artist/tournament at one venue. This is *price shopping across dates* --- exactly what the product is built for.

This suggests a referral reward that actually matches power-user motivation:

| Reward | Trigger | What They Get | Why It Fits |
|--------|---------|---------------|-------------|
| **Multi-date tracker** | 1 activated referral | Unlock "track all dates" one-click across a tour/residency/tournament | Pete had to add 4 WC matches one at a time. A power user earning "bulk-add" for one referral is exactly the upgrade path that matches real behavior. |

This is a better first-milestone reward than the "unlimited watchlist" tier proposed last week, because we don't have a freemium limit yet so "unlimited" is meaningless. "Bulk-add all dates" is a concrete new capability that costs us no engineering until post-launch.

### Full Referral V1 Design (Carried Forward from Apr 10)

Design specs unchanged. See `growth-weekly-2026-04-10.md` sections on mechanic, reward tiers, database schema, API endpoints, and success metrics. One update:

- **Landing page variant** for `?ref=` URLs should show social proof from the power users (with permission): "Pete tracks 4 World Cup matches here. [Your friend] thought you'd want this." Names + numbers beat generic "your friend invited you" copy.

---

## 3. Pricing & Monetization Strategy

### Current State (Unchanged)
- Revenue: $0 from all sources
- User base: 52 registered, ~4 active (est.)
- Monthly infra cost: ~$0-20 (free/starter tiers)

### Key Shift This Week: World Cup Demand Just Became Real

pete.uzelac77's 4-match Philadelphia cluster is the first validated WC demand in the dataset. This changes the pricing calculus on one dimension specifically: the **World Cup Pass** tier is no longer theoretical --- there is at least one user today who would plausibly pay for it if it existed.

### Path Evaluation

#### Path A: Freemium Model --- Still Primary Recommendation
**No change to tier structure or pricing ($4.99/mo, $39.99/yr).** Launch remains conditional on retention fundamentals working.

Added consideration: **soft-launching premium to the 3 power users first as a gift** (no payment required). Purpose:
- Test premium feature utility with the users most likely to use them
- Collect willingness-to-pay signal without asking for money
- Generate testimonial content for the eventual paid launch

**Power user soft-launch target list:**
| User | Items | Pitch |
|------|-------|-------|
| tosophiameyer | 11 (Harry Styles MSG, Aug-Sep) | "We noticed you're tracking the full tour. Here's 90-day price history and bulk-add, on us." |
| brigitte.theisen | 10 (BSB Sphere, Jul-Aug) | Same framing |
| pete.uzelac77 | 6 (WC Philadelphia) | "World Cup Pass preview --- free until September. Tell us what's missing." |

Two of three are currently churned. This doubles as a win-back touch.

#### Path B: Affiliate Revenue --- Still Secondary, Now Blocked on Price Tracking
**Same recommendation to join Ticketmaster, SeatGeek, StubHub affiliate programs.** Link swap is 1-day work. But:

**New blocker:** affiliate link clicks go against our positioning if price data is still unreliable. A user clicking through to buy via our link, then discovering our "price history" was empty, produces a worse brand impression than if they'd never come. Ship affiliate links after price tracking works, not before.

**Revenue estimate unchanged:** $50-100/mo at current traffic, scaling to $1,000-1,600/mo at 1,000 monthly clicks with 2% purchase rate.

#### Path C: Advertising --- Still Not Yet
Unchanged. 52 users = zero ad revenue. Revisit at 50,000+ monthly pageviews.

### New: World Cup Surcharge Window Pricing

**Time-boxed, campaign-specific monetization lever that doesn't require freemium infrastructure.**

Concept: launch a standalone World Cup Pass ($9.99 one-time, not subscription) sold separately from any Premium tier. Valid June 11 -- July 19, 2026. No subscription management, no recurring billing, simpler to build than freemium.

| Feature Included | Free Tier | WC Pass ($9.99 one-time) |
|------------------|-----------|--------------------------|
| Track WC matches | Up to 3 | All 104 |
| Real-time alerts (when shipped) | Daily digest | Instant |
| Group-buy coordination | No | Yes (up to 6 seats) |
| Price prediction | No | Yes |
| Priority support during tournament | No | Yes |

**Why this works as a first revenue test:**
- Single-purchase flow is 10x simpler than subscription management (no Stripe Customer Portal, no cancellation, no proration)
- Tournament-specific urgency drives conversion windows
- Priced at "cheaper than one parking space at the game" --- trivial for the target buyer
- Revenue projection: if 500 WC-interested users convert at 10%, that's 50 x $9.99 = $499.50. At 5,000 WC users at 5%, $2,497. Gross revenue but also the first unit-economics datapoint.

**Launch window:** Open sales May 15, 2026 (27 days before kickoff). Close June 20 (after group stage pricing volatility peaks).

### Revised Monetization Roadmap

| Phase | Timeline | Action | Expected Revenue |
|-------|----------|--------|------------------|
| **Phase 0 (prerequisite)** | Now | Fix price tracking + drip + alerts | $0 |
| **Phase 1** | Apr 28 - May 10 | Join affiliate programs; swap links (only after Phase 0 done) | $50-100/mo |
| **Phase 2** | May 15 - Jun 20 | **World Cup Pass** ($9.99 one-time, campaign-specific) | $500-2,500 in campaign |
| **Phase 3** | Jul - Aug 2026 | Full freemium launch; carry WC Pass holders to Premium | $300-1,000/mo |
| **Phase 4** | Aug 2026+ | Evaluate advertising if traffic crosses threshold | TBD |

**Key change vs. Apr 10 plan:** inserting the World Cup Pass as Phase 2 lets us book first revenue in June without requiring a full subscription system to ship.

---

## 4. Feature Launch Planning

### Recommendation: Shift Launch Focus

Last week's launch plan was Web Push Notifications + Real-Time Alerts. That recommendation is withdrawn this week, for one reason: **we cannot launch a feature that depends on price alerts when price alerts have never fired.** Launching push notifications on top of broken price tracking would produce the most acute credibility failure to date.

**New launch recommendation: re-launch the product we already have, for the users we already have.**

This is not a new feature. It's a relaunch of the existing event + watchlist + comparison features for the 52 users who already signed up and the 47 who have drifted away. We do this once the price tracking cron is fixed and one price alert has fired.

### Feature "Launch": Welcome Back --- Prices Are Now Moving

```
## Campaign: "We Fixed It. Come Back."

### Pre-Launch (1 week before)
- Internal: verify price_history has ≥ 7 days of data for ≥ 20 events
- Verify at least one price alert has fired end-to-end (dog-food with test account)
- Draft email to all 52 users; personalize around their specific watchlist items
- Draft blog post: "We Were Quiet. Here's What We Were Fixing."
- Social: Single post per platform, no countdown. This isn't a big reveal; it's an apology with receipts.

### Launch Day
- Email 1: personalized "here's what your watchlist looks like now" to all 34 watchlist users
  - Subject: "[Your event] dropped $X this week while you were away"
  - Body includes: actual price history chart, actual lowest recent price, 1-click target price setting
- Email 2: different subject line to 15 registered-no-watchlist users (activation-focused)
  - Subject: "We couldn't show you price history before. Now we can."
- Blog post: short, direct. "Our price tracking was broken for weeks. It's not anymore. Here's the dashboard."
- Social: single screenshot of a working price history chart per platform
- Power user personal outreach: 3 hand-written emails to tosophiameyer, brigitte.theisen, pete.uzelac77 with their specific events' data

### Post-Launch (2 weeks)
- Week 1: monitor return visits, target price setting rate, alert trigger rate
- Week 2: follow-up email to users who returned but didn't set a target price
- Blog post: first success story (whoever saves the most first)

### Success Metrics
| Metric | Target | Measurement |
|--------|--------|-------------|
| Return-visit rate (churned users) | 20% within 14 days | Users who log in / users emailed |
| Target price setting rate | 25% of active watchlist items | Targets set / watchlist items |
| First alert fired | Day 1 post-launch | Binary |
| Power user reactivation | 2 of 3 | Manual |
| Newly-activated users | 5 registered-only users → 1+ watchlist item | Activation count |
```

### Why This Is the Right Launch

- **We have 52 users who signed up expecting a price comparison tool.** Most of them have forgotten we exist. The most efficient acquisition we can do this month is re-acquiring the users we already paid to acquire.
- **Push notifications, mobile app, ML predictions, referral program, freemium tier --- every launch-worthy feature depends on the core loop working.** Shipping any of them on top of a broken core is wasted marketing.
- **The "we fixed it" narrative is authentic and differentiating.** Competitors do not write honest post-mortem posts. Users remember them.
- **Power users are the highest-leverage segment.** 3 users hold 27/72 watchlist items (38%). If we reactivate 2 of them, we double our active-power-user count in one week.

### Launch Content Requests → Content Agent (Agent 1)

| Priority | Item | Deadline |
|----------|------|----------|
| P1 | Blog post: "We Were Quiet. Here's What We Were Fixing." --- honest post-mortem of the broken infrastructure weeks | Launch day |
| P1 | Email copy: 3 variants (watchlist users, registered-only users, power users) | 3 days pre-launch |
| P2 | Follow-up blog post: first user savings story | 2 weeks post-launch, when data exists |
| P2 | World Cup Philadelphia content (Lincoln Financial Field guide, 4-match preview cluster) --- serve pete + acquire lookalikes | Apr 24 |

### Launch Social Plan → Social Agent (Agent 3)

| Priority | Item | Deadline |
|----------|------|----------|
| P1 | Single-post "screenshot of working price history" per platform (X, Instagram, LinkedIn) | Launch day |
| P1 | Thread/carousel: "What we were quiet about." Technical honesty, no spin. | Launch day |
| P2 | World Cup 55-day countdown begins, pete's tracker as proof of concept | This week |
| P2 | Florence + The Machine Atlanta (May 1) pre-event content | Apr 21-25 |

---

## 5. Paywall & Upgrade Flow Design

### Status: Specs Unchanged; Moved Forward One Touchpoint

Full paywall/upgrade touchpoint specs remain as written in `growth-weekly-2026-04-10.md` section 5. One update: reorder touchpoint priority now that World Cup Pass is Phase 2 (before full freemium launch).

**New priority order:**

1. **Touchpoint 5 (World Cup Upsell, seasonal)** --- ship first, around May 15. Standalone flow, doesn't require freemium infrastructure. Appears on:
   - `/world-cup-2026` landing page (hero + sticky CTA)
   - Every `/world-cup-2026/[stadium]` page (inline card above schedule)
   - Inside watchlist for users tracking any WC match
2. **Touchpoint 3 (Value Moment --- after first alert fires)** --- ship with Phase 3 freemium launch
3. **Touchpoint 1 (Watchlist limit hit)** --- ship with freemium
4. **Touchpoint 2 (Extended history paywall)** --- ship with freemium
5. **Touchpoint 4 (Passive banner)** --- last; only after value delivery is proven

### World Cup Pass Landing Page Spec (New)

| Element | Spec |
|---------|------|
| Hero | "Every match. Every venue. One price tracker." (under H1: "World Cup 2026") |
| Social proof | "Pete is tracking 4 Philadelphia matches right now. Be one of the few who got prices first." --- once we have 10+ WC users, rotate through specifics. |
| Price anchor | "$9.99. One-time. Ends after the final." |
| Scarcity | "Opens [date] --- pricing rises after group stage" |
| Feature comparison | Free tier vs. WC Pass table (104 matches unlock, instant alerts, group-buy coordination, prediction) |
| Guarantee | "If we don't save you at least $9.99 on your first ticket, we refund it." |
| FAQ | 3 questions max: "What if I don't buy tickets?" "What if I'm tracking only one match?" "Does this include the final?" |
| CTA | Single button: "Get the Pass --- $9.99" |

Estimated dev: 3-5 days including Stripe Checkout one-time payment integration (far simpler than subscription).

---

## 6. Cross-Agent Handoffs

### → Email Agent (Agent 5) --- CRITICAL (Day 10)

| Priority | Item | Deadline |
|----------|------|----------|
| P0 | **Fix drip campaign cron.** 22+ users eligible, 0 emails sent in project history. | Immediate |
| P0 | Send bhaygood728 post-event pivot today (otherwise churn #48 tomorrow). | Today |
| P0 | Send dylanbaldy 24-hour activation nudge --- only new signup in 5 days, already failing to activate. | Today |
| P0 | Send tate.sheppard pre-event email (Florence + Machine, 14 days out, Day 7 of flagging). | Today |
| P1 | Build 24-hour post-signup "pick your first event" email for 0-watchlist users. dylanbaldy pattern will repeat. | This week |
| P1 | Design win-back sequence for power users: personalized emails for tosophiameyer, brigitte.theisen. | This week |
| P1 | Build "event passed" auto-pivot email template (7 events passed this week, 0 outreach). | 2 weeks |
| P1 | Draft "We Fixed It. Come Back." campaign emails (3 variants) --- hold until infrastructure ships. | Draft now, send post-fix |

### → CRO Agent (Agent 6) --- HIGH

| Priority | Item | Deadline |
|----------|------|----------|
| P0 | **UX audit of signup-to-first-watchlist path.** dylanbaldy is the first confirmed activation failure. Reproduce blubberboi's successful 2-minute path and document as "happy path." | This week |
| P0 | **Target-price prompt on watchlist add** (completion meter UX). 0/72 items have a target --- this is a UX bug, not user preference. | This week |
| P1 | Endowment markers on watchlist page ("tracking for 23 days, 47 price checks run") --- drafted Apr 16, pending. | 2 weeks |
| P1 | Anchoring on compare page (reorder high-to-low with savings badge) --- drafted Apr 15, pending. | 2 weeks |
| P2 | Paywall touchpoints, World Cup Pass prioritized --- launch with Phase 2. | May 15 |

### → Analytics Agent (Agent 7) --- HIGH (Day 10)

| Priority | Item | Deadline |
|----------|------|----------|
| P0 | **Add `last_login_at` tracking.** 10 days flagged. Every growth metric is estimated without it. | This week |
| P0 | **Connect GA4 Data API.** Traffic/channel data entirely missing --- decisions about where to spend are guesses. | This week |
| P1 | Server-side activity logging (target_price_set, comparison_run, event_view) as GA backup. | 2 weeks |
| P1 | Referral tracking infrastructure (UTM attribution, conversion stitching) --- ahead of eventual launch. | Pre-referral launch |
| P1 | Affiliate click tracking --- ahead of affiliate link swap. | Pre-affiliate launch |

### → Content Agent (Agent 1)

| Priority | Item | Deadline |
|----------|------|----------|
| P1 | "We Fixed It" relaunch blog post (honest infrastructure post-mortem). | Pre-relaunch |
| P1 | Lincoln Financial Field World Cup guide (Philly, 4 matches, pete's validated cluster). | Apr 24 |
| P1 | Florence + The Machine Atlanta preview (May 1, 14 days out). | Apr 21 |
| P2 | World Cup Pass landing page copy (for Phase 2). | May 8 |
| P2 | First user savings story (post-relaunch, when data exists). | 2 weeks after relaunch |

### → Social Agent (Agent 3)

| Priority | Item | Deadline |
|----------|------|----------|
| P1 | World Cup 55-day countdown begins --- real stakes now (pete's cluster as proof point). | This week |
| P1 | Florence + The Machine Atlanta content (2 weeks out). | Apr 21-25 |
| P2 | Relaunch day: single honest "here's a working price chart" screenshot per platform. | Post-fix |
| P2 | Harry Styles MSG 10-night residency coverage (power-user-adjacent). | Ongoing |

### → Ads Agent (Agent 4)

| Priority | Item | Deadline |
|----------|------|----------|
| P0 | **Hold all general paid spend until infrastructure ships.** Acquisition into a broken funnel burns budget and brand. | Until price tracking works |
| P1 | If leadership insists on a test: World Cup Philadelphia only, $500 cap, landing-page conversion as metric (not purchase). | Decision this week |
| P2 | Benchmark CPA research for "cheap concert tickets," "ticket price comparison," "World Cup Philadelphia tickets" --- prep for when we can spend. | Ongoing |

---

## 7. Executive Summary

### This Week's Headline
**Every recommendation from last week is still open. Zero ship in 7 days.** 1 signup, 0 watchlist adds, 0 emails sent, 0 alerts fired, 7 watched events passed with zero price data captured. Churn grew from 89.8% to 90.4%. The activation step --- which had been 100% for 3+ months --- just failed on its first real test.

### Top 3 Priorities (Unchanged for 10 Straight Days)

1. **Fix the price tracking cron.** 7 watched events this week alone passed with no price data. Every day this stays broken, the "TicketScan doesn't do what it says" problem compounds invisibly. This is the single highest-leverage fix in the project.

2. **Fix the drip campaign cron.** 22+ users are eligible for Day 3+ emails. None have received any. dylanbaldy is the 15th user to enter the "registered but never contacted" bucket.

3. **Implement the target-price prompt.** 0 of 72 watchlist items have a target. The alert system works, has never fired, and cannot fire until we ask users for the one piece of information that makes it functional.

### Strategic Outlook (Updated)

| Timeframe | Focus | Key Milestone |
|-----------|-------|---------------|
| **Now - Apr 30** | Fix three blockers (price tracking, drip, target-price UX) | One price alert fires end-to-end. Churn trending < 80%. |
| **May 1-15** | "We Fixed It" relaunch campaign to existing 52 users | 20% return-visit rate. 2 of 3 power users reactivated. |
| **May 15 - Jul 19** | World Cup Pass launch ($9.99 one-time). Affiliate links live. | First revenue dollar. $500-2,500 WC campaign revenue. |
| **Jul - Aug 2026** | Full freemium launch. Premium tier with annual anchor. | $300-1,000 MRR. |
| **Aug 2026+** | Referral program launch (conditional on < 50% churn). Evaluate advertising. | Viral coefficient > 0.3 target. |

### What's New This Week

- **World Cup demand is validated.** pete.uzelac77's 4-match Philadelphia cluster is the first real WC signal. WC Pass monetization path promoted from theoretical to tested-on-one.
- **Activation can fail.** dylanbaldy's 48+ hour non-activation is the first data point that signup-without-an-event-in-mind is a real failure mode.
- **Relaunch thesis locked in.** The next "launch" is not push notifications or a mobile app --- it's re-acquiring the 47 churned users we already paid to acquire, once price tracking is fixed.

### What's Unchanged

Everything else. Drip broken (Day 10). Price tracking broken (Day 10). `/api/admin/alerts` broken (Day 10). GA4 disconnected (Day 10). `last_login_at` missing (Day 10). Target prices at 0%. Newsletter subscribers at 3 (75+ days flat).

**The path from 90.4% churn to < 50% is three fixes, not a strategy overhaul.** Writing this sentence for the second consecutive Friday doesn't make it less true. It makes it more urgent.

---

*Growth & Retention Agent --- Weekly Strategy Report*
*Generated: 2026-04-17 10:00 UTC (Friday Weekly)*
*Next weekly report: 2026-04-24*
