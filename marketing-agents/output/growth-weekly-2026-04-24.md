# Growth & Retention — Weekly Strategy Report
**Week of April 18–24, 2026**
**Agent 8: Growth & Retention | Third Weekly Report**

---

## 1. Churn Deep-Dive

### Churn Metrics

| Metric                                | This Week (Apr 18–24) | Last Week (Apr 11–17) | Trend |
|---------------------------------------|-----------------------|-----------------------|-------|
| Users churned (14d+ signup-age proxy) | 52                    | 47                    | +5 (worse in absolute terms) |
| Churn rate (% of total registered)    | 86.7%                 | 90.4%                 | **-3.7pp** (better — but purely denominator-driven) |
| Avg active days before churn (est.)   | 2–7 days              | 2–7 days              | Flat |
| Win-back email success rate           | 0%                    | 0%                    | No emails sent (Day 18) |
| New users this week                   | **7**                 | 1                     | +600% (two-day burst, not a trend) |
| Net user health (new - newly churned) | +2 (7 new, 5 newly churned) | 0 (1 new, 3 newly churned) | Improving, marginal |
| Signup → Activation rate (week)       | 43% (3/7)             | 0% (0/1)              | +43pp |
| Signup → Activation (April cohort)    | **64% (7/11)**        | 88.9% (8/9)           | -24.9pp |
| Target-price capture rate             | 0% (0 of 81 items)    | 0% (0 of 72 items)    | 18 days flat |
| Alerts ever fired                     | 0                     | 0                     | Lifetime zero |

> Day 18 without `last_login_at` instrumentation. All churn classifications remain signup-age proxies. Churn-rate improvement from 90.4% to 86.7% is dilution from 8 new signups, not retention progress — the *absolute* churned count grew by 5.

### Churn Patterns

1. **Biggest single-day churn event on record happened this morning.** pete.uzelac77 (Day 14, 6 WC + Darts items), goldy.pec (Day 14, Bilmuri May 2), blubberboi (Day 15, Ed Sheeran Aug 8) all crossed into churned on Apr 24. Three users spent their entire 7-day at-risk window with the drip engine off. pete is the highest-item churn we've logged in a single day — his 6-event cluster on Lincoln Financial Field + MSG had been silently running ~780 cross-market price checks with zero emails sent. The Day-14 drip threshold for his account fires today with the engine still dead. This was the highest-leverage queued send in project history.

2. **Activation is splitting into two populations, and the split is legible for the first time.** Seven signups this week produced three activations — all three at the extreme fast end (joshdguillemette 28 seconds, ajvanprooyen 2 minutes, charlesteel ~40 minutes) — and four non-activations (dr.altvater Day 4, ggri73 Day 1+, awwhittington Day 1, mark.murdock Day 1). The April cohort activation rate is now **64% (7/11)**, down from a pre-April baseline of 77–90%. Three more non-activators (the Day-0/1 trio) have a live activation-window closing at Apr 26; if none of them activate, the cohort drops to **55%**. The single-user dylanbaldy failure mode flagged two weeks ago is now a confirmed five-user pattern. The product works for users who arrive with an event in mind. It doesn't work for users who arrive curious.

3. **ajvanprooyen is the most winnable user on the platform and his first algo-flip is tomorrow.** Signed up Apr 23, added all 6 Cubs home games (May 1–6) within 2 minutes — 6 events × clear trip intent (out-of-market .edu domain, 5-day concentrated run). He is Day 1 today, not yet eligible for any scheduled drip. His first game (May 1 vs. Diamondbacks) crosses into the 7-day "buy now" algo window tomorrow; the other five flip daily through May 6. Standard Day-3 email would fire Apr 26 — by then half his trip has algo-flipped. Pull-forward send is drafted and queued for today; delivery depends on drip engine revival. **If he experiences a passed-event with zero alerts fired on May 6, the churn write-up is the worst we'll have.**

4. **tate.sheppard Florence post-mortem finalized today.** Florence + The Machine at State Farm Atlanta crossed inside the 7-day "buy now" window this morning. Nine consecutive days of flagging "URGENT." Draft queued seven consecutive days. Zero sends. The post-mortem write-up is going into Monday's retro as the lead case study. This is now the cleanest, single-user example we can point to of "the retention system you've described does not exist." Same post-mortem is arriving in slow motion for goldy.pec tomorrow (Bilmuri May 2 crosses) and ajvanprooyen (Cubs May 1) the day after.

5. **World Cup demand signal we just validated one week ago is already churned.** pete.uzelac77's 4-match Philadelphia WC cluster was declared the first validated WC demand on the platform last Friday. Six days later he's churned. The only thing that changed between "validation" and "churn" was six days of nothing happening on his account. This is the shortest validation-to-loss interval we've logged.

6. **Passed-event overhang grew from 7 events to 9 events this week.** The cumulative count of watchlist events that have passed without any price data, any alert, or any "event passed" email rose from 7 to 9 with nicklib253's Apr 17 Phillies game and one other. Nicklib is now at Day 7 at-risk today with his only tracked event already over — the Day-7 drip would be the wrong copy even if the engine worked, because the event he cared about has happened.

7. **Newsletter form: 82 days flat at 3 subscribers.** Longest unbroken dead stretch on record. The homepage form has produced zero signups across Q1 and Q2-so-far. It's not a funnel stage; it's a decoration.

### Prevention Actions (Ranked)

| # | Action | Target Segment | Expected Impact | Owner | Status |
|---|--------|----------------|-----------------|-------|--------|
| 1 | **Revive the drip cron.** Day 18. 12 drafted emails ready to send. 4 separate drip thresholds converging in today's firing window alone. | All pending-queue users | First retention signal the product would have ever produced | Lead Architect / Email Agent (5) | OPEN (Day 18) |
| 2 | **Fix price tracking cron.** ajvanprooyen's May 1 is a hard deadline — 7 days from today. If it's still broken on May 1, the fastest-activating user in the April cohort experiences product failure on his first real use. | All 41 activated users with ≥1 watchlist item | 9 events have passed this month with zero price data captured | Lead Architect | OPEN (Day 18) |
| 3 | **Target-price prompt on watchlist add (completion-meter UX).** 0 of 81 items have a target. The alert system has existed for months and has never fired. This is a UX bug. | All watchlist-adding users | 40–60% target completion unlocks the entire alert-driven retention story | CRO Agent (6) | OPEN |
| 4 | **Build the "curious signup" onboarding path.** 4 of 7 signups this week activated zero watchlist items. The five-user non-activation pattern is no longer an outlier. Needs a 24-hour post-signup nudge + category-browse funnel + "pick your first event" email. | Users with 0 watchlist items at 24h post-signup | Recover 20–40% of non-activators; lift cohort rate back toward 80% | CRO Agent (6) + Email Agent (5) | NEW |
| 5 | **Send pull-forward email to ajvanprooyen today (not Apr 26).** Power-activator with 6 events and the first game flipping tomorrow. Standard Day-3 cadence is too slow for his timeline. | 1 user, today | Preserve the most winnable account on the platform | Email Agent (5) | IMMEDIATE |
| 6 | **Send goldy.pec pre-flip email today.** Bilmuri algo flips tomorrow. Eight days of runway compressed into one. | 1 user, today | 1 save, validates the "real-time intervention" loop | Email Agent (5) | IMMEDIATE |
| 7 | **Send pete.uzelac77 Day-14 email today.** Just churned this morning; threshold fires today; 6-event re-engagement hook is the strongest single available. | 1 user, today | 1 power-user save attempt | Email Agent (5) | IMMEDIATE |
| 8 | **"Event passed" auto-pivot email.** 9 events have now passed with zero outreach to the users who tracked them. Template: "your [event] is in the books — here's how this works next time." | Users with past-date watchlist items and nothing else | 15–25% re-engagement of otherwise-lost users | Email Agent (5) | OPEN (3 weeks) |
| 9 | **Add `last_login_at` tracking.** Every retention metric is an estimate without it. Day 18. | All users | Enables measurement; unblocks attribution | Analytics Agent (7) | OPEN (Day 18) |
| 10 | **Referrer attribution pull on ids 57–60.** Apr 22–23 signup burst (4 signups in 20h after 3 zero days) is the most valuable acquisition data point of the month and we have no source info. | Infrastructure | If repeatable source: scale it. If one-off: we know to stop hoping. | Analytics Agent (7) | NEW / HIGHEST |

### Churn Severity Assessment — Week 3 Verdict

**The macro picture did not change; the tactical picture got substantially sharper.**

For three weeks running the top three priorities have been the same: fix drip, fix price tracking, add target-price prompt. None shipped. The execution gap from the Apr 17 report is now a 25-day execution gap from the Apr 6 flag.

What *did* change this week: the cost of inaction acquired three specific faces. pete (just churned, 6-item power user, WC demand signal), ajvanprooyen (first activation this week who will hit broken infrastructure on May 1), tate (post-mortem filed). Abstract retention debt has become concrete named retention debt. The Apr 17 report said "every day this stays broken, the 'TicketScan doesn't do what it says' problem compounds invisibly." As of this week that compounding is *visible* — each of the three users above is a scheduled-in-advance credibility failure.

Separately: the activation pattern cracked open. Three weeks ago we had a 100% activation rate and one outlier; two weeks ago we had one confirmed non-activator; this week we have five. The hypothesis from the Apr 17 report ("signup-without-an-event-in-mind is a real failure mode") is now a pattern, not a data point. This is a product-discovery win — we found a real failure mode in the funnel — but it's also an unrecovered cost: four signups this week did not activate, and three of them haven't crossed their Day-3 threshold yet.

**Net this week:** +7 new users (best week of April), +9 watchlist adds, +5 newly churned, 0 target prices set, 0 emails sent, 0 alerts fired. The acquisition funnel delivered its best week of the month directly into the retention funnel's worst.

---

## 2. Referral Program — Still Deferred; Design Updates Driven by New Patterns

### Status: NOT IMPLEMENTED — Launch Prerequisite Not Met

Same verdict as weeks 1 and 2. Launch prerequisite remains: churn rate < 50% AND price tracking functional AND at least one price alert has ever fired. As of today: 86.7% churn, price tracking broken Day 18, lifetime alert count 0. Not close.

Referring users into this funnel would do the following, in order of harm:
- Burn the social capital of the referrer (power users, most of whom are currently churned)
- Convert the referee into a non-activator (our actual measured modal outcome for curious signups)
- Produce a second data point that TicketScan is a brand that does not deliver what it advertises
- Create negative WOM (most dangerous) — the referrer's friend telling two other people "that thing Pete sent me did nothing"

### Incremental Design Updates (Since Apr 17)

**New behavioral pattern: the 48-second-to-2-minute power activator.**

This week added two new data points to the power-user-behavior theory:
- **joshdguillemette** — 28 seconds from signup to first watchlist add (AEW Double or Nothing)
- **ajvanprooyen** — 2 minutes from signup to 6 Cubs home games added

Combined with tosophiameyer, brigitte.theisen, and pete.uzelac77 from prior weeks, we have a confirmed archetype: **arrives with a specific event cluster in mind, adds the entire cluster immediately, expects the system to work on those specific events.** All five are referral candidates. Three of the five are currently churned. Two are newly activated this week and in the active pre-churn window.

This tightens the referral reward structure. The original V1 design rewarded referrers with tiered feature unlocks. The updated design matches the reward to the actual archetypal behavior:

| Reward Tier | Trigger | Update vs. Apr 17 Design |
|-------------|---------|--------------------------|
| **Referee welcome** | Signs up via ref link + adds watchlist item (activation gate) | Unchanged: 90-day extended price history |
| **Referrer: 1st activated referral** | Referee adds ≥1 item | **Updated: "Bulk-add all dates" — unlock one-click add across a full tour/residency/tournament slate.** Directly matches the 5-user archetype behavior: they add 4–11 events at once, manually. Bulk-add is the feature they'd actually use. |
| **Referrer: 3rd activated referral** | Three referees activated | Unchanged: insider badge + priority alert delivery |
| **Referrer: 10th activated referral** | Ten referees activated | Unchanged: lifetime premium access |

**Landing-page variant for `?ref=` URLs** — social proof update:

Once we have the full set of April cohort power activators (with permission), rotate copy like:
- "Pete tracks 4 World Cup matches at Lincoln Financial here. Want to do the same for your trip?"
- "Josh added AEW Double or Nothing in 28 seconds. Give yourself 30."
- "Six Cubs home games. Two minutes. Your friend thought you'd want the same."

Specific beats generic. "Pete + 4 matches" is a concrete signal; "your friend invited you" is noise.

### Ship Prerequisites (Unchanged, Dates Updated)

| Prerequisite | Status | Target |
|--------------|--------|--------|
| Price-tracking cron functional | Broken Day 18 | Apr 30 (hard deadline: ajvanprooyen's first game is May 1) |
| Drip cron functional | Broken Day 18 | Apr 30 |
| At least one price alert has fired | Never fired | May 5 (target: within 5 days of above fixes) |
| `last_login_at` instrumentation | Missing Day 18 | Apr 30 |
| Churn rate < 50% | 86.7% | Sep 2026 (conditional on relaunch campaign) |

Best-case referral launch window: **Q4 2026**, post-World Cup, post-full-freemium-launch.

---

## 3. Pricing & Monetization Strategy

### Current State (Unchanged)
- Revenue: **$0** from all sources (users, affiliates, ads, sponsorships)
- User base: 60 registered (+8 WoW), 41 activated (+7 WoW), 0 paying (lifetime)
- Monthly infra cost: $0–20 (Railway + Vercel free/starter tiers)

### Key Shift This Week: Day-Specific, Single-User Evidence for Two Pricing Paths

Two new data points changed the pricing discussion in concrete ways this week:

**(a) ajvanprooyen's 6-game Cubs trip is the strongest single case for freemium's 3-watchlist-item free tier limit.** A user who wants to track 6 events and is an out-of-market traveler (crimson.ua.edu = Alabama) is the exact profile that hits a 3-item cap immediately. The cap would be a visible upgrade prompt on event 4. We don't have the cap in place yet, so his 6 items sit in the free tier — but his behavior validates that the cap would produce a forced-upgrade moment on a user with strong pay intent signals (trip logistics cost $1000+, a $4.99/mo tracker is noise).

**(b) pete.uzelac77 just churned with 4 World Cup matches unattended.** He's the first direct evidence that WC demand without WC-specific retention dies in 14 days. This sharpens the Phase 2 WC Pass proposal (below) — not as theoretical revenue but as a *retention mechanism priced to look like a product*. A user who paid $9.99 for a tournament pass has an investment that pulls them back; a user who added 4 free watchlist items does not.

### Path Evaluation

#### Path A: Freemium Model — Still Primary, Now with Calibration

**Pricing unchanged:** $4.99/mo, $39.99/yr (33% annual discount anchors subscription).

**Free tier update — sharper based on this week:**

| Free tier feature | Limit | Rationale |
|-------------------|-------|-----------|
| Watchlist items | **3** (was 3 in prior design, now validated) | ajvanprooyen's 6-item trip would hit cap on item 4 — that is the moment we convert |
| Price history depth | 7 days | Enough to see one trend cycle; not enough to confirm patterns |
| Alert cadence | Daily digest only | Premium gets instant push/SMS/email |
| Price prediction | Not shown | Premium-only "buy/wait/hold" recommendation |
| Multi-date bulk-add | Not available | Exposes as referral reward (see §2) |
| Support | Standard | Premium gets priority |

**Premium tier update:**

| Premium tier feature | |
|----------------------|---|
| Unlimited watchlist | Removes the 3-item cap |
| 90-day price history | Trend analysis beyond a single cycle |
| Real-time alerts (instant email, eventually push/SMS) | The feature users thought they were getting |
| Price prediction ("buy/wait/hold") | Acted on or the feature is wallpaper |
| Bulk-add across dates | Bundles the referral-reward feature |
| Priority support | |
| No ads | |

**Pre-launch rule:** full freemium launch remains blocked on retention fundamentals working. Soft-launch to the 5 power activators (tosophia, brigitte, pete, josh, ajvanprooyen) as a **gift**, no payment required, is the first monetization step. Two of the five (josh, aj) are currently active this week — the cheapest possible pilot is: "we noticed you added [6 Cubs games / AEW]. Here's 90-day price history and bulk-add, on us, for testing."

**Calibration hypothesis from this week:** willingness-to-pay is a function of trip cost, not ticket cost. ajvanprooyen spending ~$1500 on a Cubs trip won't flinch at $4.99/mo. A user tracking one local Bruno Mars show might. The tier needs to sell itself to the trip planner, not the casual tracker.

#### Path B: Affiliate Revenue — Same Recommendation, Same Blocker

No change from Apr 17. Ticketmaster + SeatGeek + StubHub affiliate programs are ~1-day integration work. Revenue projection unchanged: $50–100/mo at current traffic, scaling to $1,000–1,600/mo at 1,000 monthly clicks with 2% purchase rate.

**Same blocker:** ship affiliate links *after* price tracking works, not before. A user clicking through to buy via our link then discovering "price history" was empty produces worse brand damage than them never clicking at all. Phase 1 of the roadmap remains "Phase 0 must complete first."

**New consideration this week:** the Bruno Mars Ohio Stadium signup (charlesteel) is a high-affiliate-commission event (large-venue stadium tour, secondary-market markup of 30–80% typical). The first affiliate revenue dollar is most likely to come from a user exactly like this — local enthusiast, single high-value event, already in the funnel. Don't launch yet, but know the first win comes from segments like Bruno / Cubs / WC, not the long tail.

#### Path C: Advertising — Still Not Yet

Unchanged. 60 users = zero meaningful ad inventory. Revisit at 50,000+ monthly pageviews. Traffic instrumentation (GA Day 18) is the prerequisite-to-the-prerequisite.

### New: World Cup Pass — Updated Pricing and Urgency

**Concept carried forward from Apr 17.** Standalone $9.99 one-time pass, valid June 11 – July 19, 2026. Sold separately from any future subscription.

**Updates this week:**

1. **Pete's churn is a strike against the Pass model specifically.** If WC-demand users (our most likely Pass buyers) churn in 14 days when the product is silent, the Pass must deliver something by Day 3 of purchase. Requirement add: a Day 0 welcome email ("here's your Pass; your first tracked match data is below") and a Day 3 "first movement" update. Without those, the Pass is another product that ghosts the user.

2. **Pre-sale window should open earlier than Apr 17's recommendation.** Original plan: open May 15 (27 days before kickoff). New recommendation: **open April 30**, same day as infrastructure fixes ship. Reason: we get a 6-week pre-sale runway instead of 4, we can offer an "Early Access — $7.99" tier for the first 14 days (anchoring device), and we have more time to test the Stripe one-time payment flow at low volume. $7.99 → $9.99 price lift after May 14 is a standard urgency lever.

3. **Guarantee language sharpened:** "If we don't save you at least $9.99 on your first WC ticket, we refund the Pass." Drafted in Apr 17 weekly; moving to "locked copy" this week.

**Revenue projection (updated):**

| Scenario | WC-interested users | Conversion | Avg price | Gross |
|----------|--------------------|-----------:|----------:|------:|
| Conservative | 500 | 5% | $9.49 (blended $7.99 early + $9.99 main) | **$237** |
| Mid | 2,000 | 7% | $9.49 | **$1,328** |
| Aggressive | 5,000 | 10% | $9.49 | **$4,745** |

At current baseline (60 users, ~1 validated WC demander, zero targeted marketing), we are on the conservative side. The path from conservative → mid goes through getting traffic to the existing 17 WC landing pages, which is Content Agent and SEO territory.

### Revised Monetization Roadmap

| Phase | Timeline | Action | Revenue Target |
|-------|----------|--------|----------------|
| **Phase 0 (prerequisite)** | Now → Apr 30 | Fix drip, fix price tracking, ship target-price prompt | $0 |
| **Phase 1** | **Apr 30 – May 14** (moved earlier) | Soft-launch Premium as gift to 5 power activators; open WC Pass early-access at $7.99; join affiliate programs | $50–300 (early WC Pass + first affiliate) |
| **Phase 2** | **May 15 – Jun 20** | WC Pass at $9.99 (standard); affiliate links live on all comparison pages; Premium waitlist open | $500–2,500 in campaign |
| **Phase 3** | **Jul – Aug 2026** | Full freemium launch at $4.99/$39.99; convert WC Pass holders into annual Premium at $29.99 (first-year loyalty price) | $300–1,000 MRR |
| **Phase 4** | **Aug 2026+** | Evaluate advertising at 50k+ pageviews; begin upsell tests | TBD |

**Key changes vs. Apr 17 plan:** (a) WC Pass pre-sale moved from May 15 to Apr 30, giving us a 6-week runway. (b) Added a $7.99 early-access price point as an anchoring device. (c) Phase 3 gets an explicit WC-Pass-to-Premium conversion offer ($29.99 first-year annual) to capture the installed base before their purchase memory fades.

### First-Revenue Scenario (Unchanged)

The most realistic first-revenue-dollar path: a WC Pass sold at $9.99 in May 2026 to a user who finds `/world-cup-2026/[stadium]` via organic search, lands on a working Pass landing page, clicks Stripe Checkout. Not an affiliate click-through, not a subscription. Single-purchase, tournament-specific, low-friction.

---

## 4. Feature Launch Planning

### Recommendation: Same "Relaunch Over Launch" Thesis, Narrower Scope

The Apr 17 recommendation was "re-launch the product we already have, for the users we already have." That recommendation stands, but compressed: the relaunch must ship by **April 30** and be aimed at a single named user case — ajvanprooyen's May 1 Cubs opener.

The reframe: the relaunch doesn't have to be a broad campaign to all 52 users. It has to be one user, on one date, experiencing working price tracking on one ticket market for the first time in project history. Everything after that is iteration.

### Feature "Launch" v2: The Cubs Opener as Proof of Life

```
## Campaign: "One User, One Game, One Working Alert."

### Pre-Launch Sprint (Apr 25–29)
- Day 1–2: Engineering focus on price-tracking cron revive. Instrumented test runs on ajvanprooyen's 6 events.
- Day 3: Send ajvanprooyen pull-forward Day-3 email TODAY (out of sequence). Subject: "Your Cubs week starts in 7 days — target prices now catch the dips."
- Day 4: Ship target-price prompt UI on watchlist. Goal: ajvanprooyen sets at least one target before May 1.
- Day 5 (Apr 29): dog-food test — set a target with a test account, wait for a fire, confirm end-to-end flow.

### Launch Day (Apr 30 — day before his first game)
- Primary: one price alert fires to ajvanprooyen on the Cubs event that moved most this week.
- Secondary: email him the screenshot of his 6-game tracker working: "price history since you added these."
- Tertiary: send the same "prices are working" email to 5 other active-watchlist users who tracked an event ≥14 days out (blubberboi, joshdguillemette, charlesteel, plus two from the pre-April cohort).
- Blog post: one paragraph on the home page explaining the tracker is live.
- Social: single screenshot per platform of the working price chart.

### Post-Launch (May 1–7)
- May 1: ajvanprooyen experiences either a working game-day buy flow or the worst-case documented churn. Observed either way.
- May 2: goldy.pec algo flip Bilmuri (already churned, survivability unknown).
- May 3–6: cumulative 5 more Cubs algo flips for ajvanprooyen; each a chance to send a smart email.
- May 7: follow-up: "Your Cubs week is over. Here's what we sent, how much we saved (or didn't), and what's next."

### Success Metrics (Narrower This Week)
| Metric | Target | Why |
|--------|--------|-----|
| First price alert fired | Day 1 of launch (Apr 30) | Binary. Never fired before. |
| ajvanprooyen sets ≥1 target price | By Apr 30 | 0/81 today. Evidence the prompt works. |
| Any alert triggers on a real user's tracked event | By May 5 | Proof the loop runs end-to-end. |
| "We fixed it" follow-up email CTR | 10%+ to existing users | Evidence relaunch narrative works. |
| Newly-activated users (activation from the 3 Day-0/1 non-activators) | 1+ of 3 | Saves 33%+ of this week's non-activator cohort. |
```

### Why This Narrower Scope Now

- The broad 52-user re-launch proposed Apr 17 is still the right medium-term move. But in a week where we added three new users whose activation window closes Apr 26 and one user whose first real use happens May 1, the opportunity cost of spending that effort on long-churned users is too high. Ship the narrow relaunch first. Broaden once it works on one user.
- The "we fixed it" narrative is unchanged, but sharper when anchored to a specific named case: "we fixed it the day before one user's first game, and the first price alert in project history fired on his tracker." That's the story. It writes itself — once it's true.

### Launch Content Requests → Content Agent (Agent 1)

| Priority | Item | Deadline |
|----------|------|----------|
| P0 | Cubs Wrigley out-of-market trip hub page (6-game tracker angle, ajvanprooyen implied) | **Apr 26 (weekend publish for SEO momentum)** |
| P1 | Bruno Mars Ohio Stadium preview post (charlesteel cohort signal; tour-wide content play) | Apr 27 |
| P1 | World Cup Lincoln Financial Field preview (pete.uzelac77 cluster + 48-day countdown) | Apr 26 |
| P1 | "We Fixed It" short relaunch post — only publishes once price tracking demonstrably works | **Hold until Apr 30** |
| P2 | WC Pass landing-page copy (Phase 1 launch Apr 30) | Apr 28 |
| P2 | First user savings story (post-May 1, when ajvanprooyen's data exists) | Week of May 4 |

### Launch Social Plan → Social Agent (Agent 3)

| Priority | Item | Deadline |
|----------|------|----------|
| P0 | 48-day WC countdown with new angle (Philadelphia + Lincoln Financial + Pete's 4 matches as social proof) | This week |
| P1 | Bruno Mars Ohio Stadium content drop (tie to charlesteel's signup geography) | This week |
| P1 | Cubs Wrigley trip content (out-of-market traveler angle, tie to aj's cluster) | Apr 26–27 |
| P1 | Relaunch day: one screenshot of working price chart + one alert-fired screenshot (anonymized or permissioned) | **Apr 30** |
| P2 | Harry Styles MSG residency content (tosophia-adjacent acquisition) | Ongoing |

---

## 5. Paywall & Upgrade Flow Design

### Status: Specs Unchanged; One New Touchpoint Added

Full paywall touchpoint specs remain from `growth-weekly-2026-04-10.md` §5, with the Apr 17 reordering (WC Pass first, then freemium touchpoints). One new touchpoint added this week, based on ajvanprooyen's behavior:

### New Touchpoint 6: Bulk-Add Intent Detection

**Trigger condition:** User adds ≥3 watchlist items in a single session (defined as <5 minutes between adds on the same event family — same team, same artist, same tournament).

**Rationale:** This is the power-activator signal. Five users in project history fit this pattern, all of them are high-value. ajvanprooyen added 6 Cubs games in 2 minutes; tosophia added 11 Harry Styles MSG nights; brigitte added 10 BSB Sphere nights; pete added 4 WC matches; today we'd want josh counted if he added a second AEW event. These users show up with extreme intent — the flow should recognize and reward it.

**Copy (inline, appears after the 3rd add in a session):**

```
🎯 Looks like you're tracking a whole run.

We noticed you added 3 Cubs home games in the last minute.
Most people don't know: on Premium, you can set one target price
across all 6 home games with one click — and get an email the moment
any of them drops below your number on Ticketmaster, SeatGeek, or StubHub.

[ Try Premium free for 30 days ]   [ Keep adding individually ]
```

**Design:** Modal, dismissible, non-blocking. Appears once per user ever.

**Positioning:** The offer is a free trial, not a paywall. At zero-revenue state, the job is intent confirmation + email capture, not conversion. The user says yes, we get a real signal; we ship the feature; they come back for the trial.

**Ship cost:** 2–3 hours. Detecting "3 adds in <5 min same event family" is a simple frontend counter; modal is standard.

### Updated Touchpoint Priority (Reflecting This Week)

| # | Touchpoint | Ship Timing | Reason |
|---|------------|-------------|--------|
| 1 | **WC Pass Landing Page** (TP5 from Apr 17) | **Apr 30** (moved earlier) | Phase 1 pre-sale window opens |
| 2 | **Bulk-Add Intent Modal** (TP6, new) | Apr 30–May 7 | ajvanprooyen is the live test case; ship while he's still active |
| 3 | **Post-First-Alert Upgrade Prompt** (TP3) | Ship with Phase 2 freemium launch | Requires first alert to exist |
| 4 | **Watchlist Limit Hit** (TP1) | Ship with freemium | Requires freemium to exist |
| 5 | **Extended History Paywall** (TP2) | Ship with freemium | Same |
| 6 | **Passive Upgrade Banner** (TP4) | Last — only after proven value delivery | Otherwise damages trust |

### WC Pass Landing Page Spec (Unchanged from Apr 17, with Pricing Update)

| Element | Spec |
|---------|------|
| Hero headline | "Every match. Every venue. One price tracker." |
| Subhead | "2026 FIFA World Cup — June 11 to July 19" |
| Social proof | "Pete is tracking 4 Philadelphia matches right now. Be one of the first to get the Pass." (once we have 10+ WC users, rotate through specifics.) |
| Price anchor | **"$7.99 — early access through May 14. $9.99 after."** |
| Scarcity | "Early access closes in X days. Price rises to $9.99 on May 15." |
| Feature comparison | Free vs. Pass table (104 matches unlocked, instant alerts, group-buy coordination, prediction engine) |
| Guarantee | "If we don't save you at least $9.99 on your first WC ticket, we refund the Pass." |
| FAQ | 3 questions max: "What if I don't buy tickets?" / "What if I only care about one match?" / "Does this include the final?" |
| CTA | Single button: **"Get the Pass — $7.99 (early access)"** |

Estimated dev: 3–5 days including Stripe Checkout one-time payment integration. **Hard deadline: Apr 30 for launch.**

### Success Metrics for Phase 1 (Apr 30 – May 14)

| Metric | Target | Rationale |
|--------|--------|-----------|
| WC Pass early-access purchases | 5–15 | Meaningful signal even at small N given baseline of 1 validated WC demander |
| WC Pass landing-page conversion rate | 3–5% | Benchmarked to pre-sale conversion norms for niche B2C product |
| Power-user Premium gift acceptance | 3 of 5 | Offer acceptance = willingness-to-pay signal |
| First affiliate click-through | Single click | Proof the link path works |
| First affiliate commission | $0–25 | Realistic given tiny volume |

---

## 6. Cross-Agent Handoffs

### → Email Agent (Agent 5) — CRITICAL (Day 18)

| Priority | Item | Deadline |
|----------|------|----------|
| P0 | **Revive drip cron.** 18 days off. 12 drafted emails queued. | Immediate |
| P0 | Send **goldy.pec** pre-algo-flip email TODAY (Bilmuri flips tomorrow). | Today 6pm CDT |
| P0 | Send **ajvanprooyen** pull-forward Day-3 email TODAY (first Cubs game flips tomorrow). Do not wait for Apr 26. | Today 10am CDT |
| P0 | Send **pete.uzelac77** Day-14 threshold email TODAY (just churned this morning). | Today 11am EDT |
| P0 | Send **nicklib253** bespoke Day-7 email (past-event reframe — Phillies already happened). | Today 7pm EDT |
| P0 | Send **dylanbaldy** activation nudge (Day 9, 0 watchlist — eighth consecutive day flagged). | Today 11am EDT |
| P1 | Send **blubberboi** Day-14 (long runway, Ed Sheeran Aug 8 — survivable). | Today 6pm PDT |
| P1 | Send **joshdguillemette** Day-5 nudge (AEW Double or Nothing May 24 — 30 days runway). | Today 10am EDT |
| P1 | Send **dr.altvater-70199** late Day-3 (WC-led German copy). | Today fallback 9am CET tomorrow |
| P1 | Pre-queue Day-3 welcomes for **ggri73**, **awwhittington**, **mark.murdock**, **charlesteel126** (Apr 26–27 fires). | Apr 26–27 |
| P1 | Build 24-hour post-signup "curious signup" nudge email for 0-watchlist users. Five-user pattern now. Template with 6 event categories + CTA. | This week |
| P1 | Build "event passed" auto-pivot email template. 9 events have passed cumulatively with zero outreach. | 2 weeks |
| P1 | Draft "We Fixed It. Come Back." campaign emails (3 variants: watchlist users, registered-only, power users). Hold until Apr 30 ship verified. | Draft now, send post-fix |
| P1 | Design WC Pass purchase confirmation sequence (Day 0 welcome, Day 3 first-movement update, Day 7 setup check-in). Block against pete-churn pattern. | Pre-Apr 30 |

### → CRO Agent (Agent 6) — HIGH

| Priority | Item | Deadline |
|----------|------|----------|
| P0 | **Target-price prompt completion-meter UX.** 0/81 items have a target. This is the single UX change with the highest downstream impact in the product. | This week (Apr 30 hard) |
| P0 | **Curious-signup onboarding path.** 4 of 7 signups this week didn't activate. Five-user pattern. Needs: category-browse page after signup, "pick your first event" CTA on empty dashboard, 24h email nudge. | This week |
| P1 | Loss-aversion watchlist card copy (from Apr 24 daily rec): "We've checked this 147 times. 23 price drops matched no target. One number below turns that off." | 2 weeks |
| P1 | Commitment/consistency watchlist flow (from Apr 23 daily rec): two-step UI so first save is trivial and second step is target-setting, not all-or-nothing. | Sequenced before loss-aversion; this week |
| P1 | Bulk-add intent modal (new TP6 spec above). ajvanprooyen is live test case. | Apr 30 – May 7 |
| P2 | Anchoring on compare page (high-to-low reorder with savings badge). Drafted Apr 15, still pending. | 2 weeks |
| P2 | Endowment markers on watchlist page (drafted Apr 16, still pending). | 2 weeks |
| P2 | WC Pass landing-page design (with copy from spec above). | Apr 28 |
| P2 | Newsletter homepage form audit — 82 days flat at 3 subscribers. Investigate whether the form actually submits. | This week |

### → Analytics Agent (Agent 7) — HIGH (Day 18)

| Priority | Item | Deadline |
|----------|------|----------|
| P0 | **Referrer/UTM attribution pull on ids 57–60.** Apr 22–23 signup burst is the single most valuable acquisition data point of the month. Today's zero-signup day makes it a natural-experiment A/B on whatever drove the burst. | Immediate |
| P0 | **Add `last_login_at` tracking.** 18 days flagged. Every growth metric is estimated without it. | This week (Apr 30 hard) |
| P0 | **Connect GA4 Data API.** 18 days. Traffic/channel decisions are guesses. | This week |
| P1 | Draft "drops that matched no target" query for loss-aversion copy (from Apr 24 daily rec): `SELECT COUNT(*) FROM price_history WHERE event_id = ? AND min_price < trailing_7d_avg * 0.85 AND checked_at > watchlist.added_at`. Verify numbers are real before copy ships. | 2 weeks |
| P1 | Day-over-day activation velocity trend dashboard. April cohort rate is 64% and slipping; need to see the slope in real time. | 2 weeks |
| P1 | Referral tracking infrastructure (UTM attribution, conversion stitching, referral_code column) — ahead of eventual launch. | Pre-referral launch (Q4 2026) |
| P1 | Affiliate click tracking — ahead of affiliate program integration. | Pre-affiliate launch (~Apr 30) |
| P1 | WC Pass funnel instrumentation: page-view → landing-page CTA click → Stripe Checkout start → purchase complete. | Pre-Apr 30 |

### → Content Agent (Agent 1)

| Priority | Item | Deadline |
|----------|------|----------|
| P0 | **Cubs Wrigley out-of-market trip hub page.** ajvanprooyen's 6-game cluster + Cubs home-stand context. "Planning a Cubs week? Here's the price-tracker setup." | **Apr 26 weekend publish** |
| P1 | Bruno Mars Ohio Stadium preview (charlesteel signup; tour-wide content cluster play). | Apr 27 |
| P1 | World Cup Lincoln Financial Field preview (pete's 4 matches + 48-day countdown angle). | Apr 26 |
| P1 | "We Fixed It" relaunch post (honest infrastructure post-mortem). Hold until Apr 30 ship confirmed. | Pre-relaunch |
| P2 | WC Pass landing-page supporting copy (FAQs, deep-link from `/world-cup-2026`). | Apr 28 |
| P2 | First user savings story (post-May 1 data). | Week of May 4 |

### → Social Agent (Agent 3)

| Priority | Item | Deadline |
|----------|------|----------|
| P1 | WC 48-day countdown — Philadelphia angle, pete's cluster as proof (with permission) or anonymized. | This week |
| P1 | Bruno Mars Ohio Stadium content drop. | This week |
| P1 | Cubs Wrigley trip content (out-of-market traveler frame, ties to content page). | Apr 26–27 |
| P1 | Relaunch day (Apr 30): single honest "here's a working price chart" screenshot per platform + "first alert fired" proof. | Apr 30 |
| P2 | Harry Styles MSG residency content (tosophia-adjacent acquisition). | Ongoing |

### → Ads Agent (Agent 4)

| Priority | Item | Deadline |
|----------|------|----------|
| P0 | **Hold all general paid spend until Apr 30 infrastructure ship.** Acquisition into a broken funnel burns budget and brand. | Hold until Apr 30 |
| P1 | If leadership insists on a test pre-Apr 30: WC Philadelphia only, $500 cap, landing-page conversion (not purchase) as metric. Still hold if possible. | Decision this week |
| P1 | Post-Apr 30: run a small $250–500 WC Pass awareness test. Narrow targeting: Philadelphia + NYC + LA, 25–44, sports fans. | May 1–14 |
| P2 | Benchmark CPA research: "cheap concert tickets," "ticket price comparison," "World Cup Philadelphia tickets," "Cubs tickets Wrigley." Prep for when we can spend. | Ongoing |
| P2 | Cubs-trip audience seed (out-of-market college-adjacent demographic — ajvanprooyen profile). | Post-Apr 30 |

---

## 7. Executive Summary

### This Week's Headline
**Best acquisition week of April, worst retention week of April, zero movement on the three blockers that connect the two.** 7 signups (+600% WoW), 9 watchlist items (+∞ from zero base), 3 of 7 activations (43%) — every acquisition metric improved. 3 users churned in a single day (record), 5 non-activators in the cohort (pattern confirmed), 0 alerts fired (Day 18), 0 drip emails sent (Day 18). The retention funnel took the acquisition funnel's best output and lost it.

### The April Cohort Story
Three weeks of data now tell a coherent story:

- **Weeks 1–2 of April (Apr 1–14):** Modest acquisition, preserved activation rate (8/9 = 88.9%).
- **Week 3 (Apr 15–17):** One signup, zero activation. First confirmed non-activator (dylanbaldy).
- **Week 4 (Apr 18–24):** Best acquisition week (7 signups), activation rate collapsed to 43%. Non-activator count grew to 5.

The April cohort ends at 64% activation — down from a pre-April baseline of 77–90%. If the three Day-0/1 users from this week's burst don't activate by Apr 26, the cohort drops to 55%. The hypothesis: we're acquiring a new kind of user, and the product was built for a different kind.

### Top 3 Priorities (Unchanged 18 Straight Days, But With Named Deadlines)

1. **Fix price tracking cron by April 30.** Hard deadline now has a name attached: ajvanprooyen's first Cubs game is May 1. If the cron is still broken then, the most winnable user on the platform experiences product failure on his first real use.

2. **Revive drip cron by April 30.** 12 drafted emails are waiting. 4 drip thresholds converge in today's send window alone. Every day the engine stays dead, the "TicketScan does not deliver what it describes" story adds another case study.

3. **Ship target-price prompt UX by April 30.** 0 of 81 items have a target. The alert system works, has never fired, cannot fire until we ask users for a number they were never asked for. Highest-leverage UX change in the product.

**All three must ship by April 30 to enable the May 1 relaunch.** This is not negotiable from a narrative standpoint — if any of the three slip, the "we fixed it" campaign is a press release about work that didn't get done.

### Strategic Outlook (Dates Compressed From Apr 17 Plan)

| Timeframe | Focus | Key Milestone |
|-----------|-------|---------------|
| **Now – Apr 29** | Fix three blockers + ship WC Pass landing page + dog-food end-to-end alert flow | One price alert fires on a real user's tracked event. |
| **Apr 30 – May 14** | "Proof of Life" relaunch. WC Pass early-access ($7.99). Affiliate links live. Power-activator gift-Premium. | First revenue dollar. ≥1 Premium gift accepted. ≥5 WC Pass pre-sales. |
| **May 15 – Jul 19** | Full WC Pass at $9.99. Broader relaunch to existing 52 users. Onboarding path for curious signups. | Activation rate climbs back toward 80%. $500–2,500 WC campaign revenue. |
| **Jul – Aug 2026** | Full freemium launch. WC Pass → annual Premium conversion offer. | $300–1,000 MRR. |
| **Sep 2026+** | Referral launch (conditional: churn < 50%). Advertising evaluation (conditional: 50k+ pageviews). | Viral coefficient > 0.3 target. |

### What Changed This Week

- **Acquisition pattern cracked open.** ajvanprooyen's 2-minute 6-game cluster and joshdguillemette's 28-second activation make five total "power activators" in the system. Three of five are currently churned; two are active this week. Archetype is confirmed.
- **Non-activation pattern confirmed.** One non-activator became five. "Signup without an event in mind" is a real, measurable failure mode, not an outlier.
- **Three churn events landed on a single day.** pete (6-item WC demander), goldy (algo-flip tomorrow), blubberboi (long-runway). Biggest single-day churn event on record.
- **tate.sheppard post-mortem finalized.** First case study of a retention loss we watched happen in real time over 10 days.
- **Pricing path got a named calibration point.** ajvanprooyen's 6-event trip is the exact free-tier-cap-hit profile. If the cap existed, he'd see the upgrade prompt on event 4.

### What's Unchanged (For the Third Consecutive Week)

Drip broken (Day 18). Price tracking broken (Day 18). `/api/admin/alerts` broken (Day 18). GA4 disconnected (Day 18). `last_login_at` missing (Day 18). Target prices at 0%. Newsletter subscribers at 3 (82 days flat). None of the engineering recommendations from the Apr 10 report have shipped. None from Apr 17 have shipped.

The path from 86.7% churn to < 50% is three fixes. Writing that sentence for the third consecutive Friday is no longer an observation — it is the single characterizing fact of the project's current state.

**The three fixes have a hard deadline of Apr 30 not because a strategy document says so, but because a real user named ajvanprooyen will attempt to use the product on May 1.** That date is in six calendar days. Everything in this report is downstream of whether those fixes land by then.

---

*Growth & Retention Agent — Weekly Strategy Report*
*Generated: 2026-04-24 10:00 UTC (Friday Weekly)*
*Next weekly report: 2026-05-01 — the day after the ajvanprooyen deadline*
