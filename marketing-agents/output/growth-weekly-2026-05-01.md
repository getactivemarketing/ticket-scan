# Growth & Retention — Weekly Strategy Report
**Week of April 25 – May 1, 2026**
**Agent 8: Growth & Retention | Fourth Weekly Report**

> **Skill availability note:** `churn-prevention`, `referral-program`, `pricing-strategy`, `launch-strategy`, `paywall-upgrade-cro`, and `marketing-psychology` skills referenced in the agent spec are not installed in this runtime. Report composed from this week's daily growth dashboards (Apr 25 → May 1), Analytics weekly (today), Email weekly (today), prior weekly (Apr 24), and the named forecasts that report set down for this week.

---

## 0. Last Week's Forecast vs. This Week's Outcome

The Apr 24 weekly stated a hard deadline: April 30 ship-by, anchored on a real user name (ajvanprooyen) and a real date (his Cubs Game 1 on May 1). Three blockers had to land — drip cron, price tracking cron, target-price prompt. **The deadline was missed on all three.** What follows is the audit.

| Forecast (Apr 24) | Outcome (May 1) | Verdict |
|--|--|--|
| "Three fixes must ship by April 30 to enable May 1 relaunch." | Day 25 of zero drip sends. Day 25 of broken price tracking. 0 of 85 watchlist items have a target price. | **Missed all three.** |
| "If price tracking is still broken on May 1, the most winnable user on the platform experiences product failure on his first real use." | ajvanprooyen's Cubs Game 1 (Wrigley vs Diamondbacks) passed today with zero alerts, zero emails, zero outreach. The other 5 games (May 2–6) cascade through the same outcome over the next 5 days. | **Hit, with names attached.** |
| "tate.sheppard post-mortem #1 — Florence will pass without notification." | Florence + The Machine at State Farm Atlanta passed today. **47-day watchlist relationship, zero emails ever sent, event over.** | **Hit.** |
| "nicklib253 will cross Day 14 and join the churned bucket." | nicklib253 churned today at 22:43 UTC. Day-14 win-back drafted Apr 29, carried Apr 30, **still queued, undelivered.** | **Hit, with the Day-14 email still un-sent.** |
| "pete.uzelac77 will cross Day 21 — the 3-week boundary." | pete crossed Day 21 today. Six events × ~850 cumulative price checks × 0 emails. The drafted Day-21 email is still queued. | **Hit, with three weeks of zero contact behind it.** |
| "Recorded conversion losses will rise from 1 to 3 this week, with 5 more guaranteed by May 6." | Confirmed: Tate Florence + ajvanprooyen Cubs G1 today bring cumulative recorded losses to 3. The 5 follow-on losses (Cubs May 2–6 + Bilmuri May 2) are queued. | **Hit, on schedule.** |

**Summary:** every named forecast in last week's report came true. Zero of the engineering recommendations that would have prevented those outcomes shipped. The week's work was watching the predictions resolve.

---

## 1. Churn Deep-Dive

### Churn Metrics

| Metric                                | This Week (Apr 25 – May 1) | Last Week (Apr 18–24) | Trend |
|---------------------------------------|----------------------------|-----------------------|-------|
| Users churned (14d+ signup-age proxy) | 54                         | 52                    | **+2** (dylanbaldy Apr 29, nicklib253 May 1) |
| Churn rate (% of total registered)    | 84.4%                      | 86.7%                 | **−2.3pp** (dilution from 4 new signups, not retention progress) |
| Avg active days before churn (est.)   | 2–7 days                   | 2–7 days              | Flat |
| Win-back email success rate           | 0%                         | 0%                    | Day 25 of zero sends |
| **New users this week**               | **4**                      | 7                     | **−43%** (April: 11 in 30 days, ~0.37/d — worst signup month on record by daily rate) |
| Net user health (new − newly churned) | +2 (4 new, 2 newly churned) | +2 (7 new, 5 newly churned) | Flat margin, lower volume on both sides |
| Signup → Activation rate (week)       | **25% (1/4)**              | 43% (3/7)             | **−18pp** |
| Signup → Activation (April cohort)    | **47% (7/15)**             | 64% (7/11)            | **−17pp** (April locked at half the pre-April baseline) |
| **Pattern B share (last 8 signups)**  | **62.5%**                  | ~40%                  | **+22pp — non-activator now MAJORITY** |
| Target-price capture rate             | 0% (0 of 85 items)         | 0% (0 of 81)          | 25 days flat |
| Alerts ever fired                     | 0                          | 0                     | Lifetime zero |
| **Recorded conversion losses (cum.)** | **3**                      | 1                     | **+2 this week, +5 guaranteed by May 6** |
| **Watchlist items**                   | **85, flat 6 consecutive days** | 81           | **Ties Mar 16-22 record; tomorrow breaks it** |
| Newsletter subscribers                | 3                          | 3                     | **89 days flat — 12 weeks 5 days** |

> Day 25 without `last_login_at` instrumentation. All churn classifications remain signup-age proxies. Churn rate's nominal "improvement" from 86.7% to 84.4% is dilution from 4 new signups; absolute churned count grew by 2. **Read this row as movement in the wrong direction wearing the costume of progress.**

### Churn Patterns (Five That Hardened This Week)

1. **The Apr 30 deadline missed, and the cost showed up in named users on May 1.** Last week's report named two users (ajvanprooyen and tate) and one date (May 1) as the exact cost of inaction. Today, both users experienced the exact failure described. ajvanprooyen's first Cubs game at Wrigley passed with zero alerts after his entire 6-game cluster spent 8 days flagged in the buy-now algo window. tate's Florence + The Machine at State Farm Atlanta passed as the close-out of a 47-day watchlist relationship that produced zero emails. **These are not retention failures in abstract; they are two specific people who used the product as designed and got nothing in return.** Five more users (the remaining 5 Cubs games + goldy Bilmuri May 2) are queued for the same outcome by May 6. The post-mortem from last week is no longer "case study #1 (tate)"; it is a five-day rolling cascade of identical post-mortems.

2. **Pattern B (signup → never adds an event) crossed majority.** 5 of the last 8 signups are 0-watchlist users (62.5%). Three weeks ago this number was ~40%. The hypothesis from Week 3 ("signup-without-an-event-in-mind is a real failure mode") is no longer a hypothesis or a trend — it is the modal outcome. **Restated: the signup flow is now optimized for a minority of arrivals.** This is the single most important framing shift in this report. Prior to today, "fix the funnel" meant "ship the three blockers." Starting today, "fix the funnel" means "the three blockers are necessary but not sufficient — Pattern B is its own discrete problem and would persist after a cron fix."

3. **The known-source / unknown-source split is now the strongest correlation in the data.** 3 of 3 known-source signups in the last 9 days activated immediately, multi-event each (ajvanprooyen 6 Cubs, nmcnamee99 2 Raptors, taranimeramaro 3 Bruno Mars). 6 of 6 unknown-source signups in the same window have 0 watchlist items. **This is a 100% / 0% bifurcation across 9 data points carried into Day 8 of the Analytics dependency, which is now the highest-leverage open ask in the entire growth stack.** It is also the first finding in this project where a marketing intervention can ship *before* the engineering does — see §2 monetization and §4 launch sections for the practical implication.

4. **April closed as the worst signup month on record by daily rate.** 11 signups in 30 days = 0.37/day. March was 0.42/day; February 0.50/day; January 0.61/day. **Strip the two burst windows (Apr 9–10 and Apr 22–23) and April is 3 signups in 26 days** — less than Feb's worst week. The signup engine isn't just degrading; it is degrading *while* having two of the best 48h windows of the year. The bursts disguise a flat baseline that has gotten quieter.

5. **Watchlist items have been flat at 85 for six consecutive days, tying the Mar 16-22 record.** Tomorrow morning breaks it. The activation engine is silent on every dimension at once: 6 days flat at 85 watchlist, 25 days zero drip, 25 days zero alerts, 89 days flat at 3 newsletter subscribers, 3 days flat at 72.1% activation rate, 2 days flat at 0 signups. **Every forward-looking metric has stalled in unison.** Three weeks ago the inertia could be read as "system at rest waiting on infrastructure." Today's reading is structural: the system has no remaining moving parts.

### Prevention Actions (Ranked, with the New "Doesn't Wait for Engineering" Tier on Top)

| # | Action | Target Segment | Expected Impact | Owner | Status |
|---|--------|----------------|-----------------|-------|--------|
| **A** | **Redirect ALL acquisition effort to known-source channels.** The 3-of-3 vs 0-of-6 split is the strongest signal in the data and ships *without* the engineering team's involvement. Identify the channels behind ajvanprooyen / nmcnamee99 / taranimeramaro acquisitions; double down. | All future acquisition | Lift activation from 25% (this week) toward 60%+ (known-source historical) | Ads Agent (4) + Analytics (7) | **NEW PRIORITY 1** |
| **B** | **Ship the goal-gradient progress bar on `/watchlist`** (today's psych rec, Agent 8 Daily). Frontend-only, ~3h to ship, depends on zero crons. Targets the 1-event-only cohort (47% of activated users — 21 of 44). | 21 single-event users + future 1-event arrivals | 15–40% lift on next-add conversion (literature benchmark); compounds across cohort lifecycle | CRO Agent (6) | **NEW PRIORITY 2** |
| **C** | **Build a "curious signup" onboarding path.** Pattern B is now majority. Empty-state dashboard needs a category-browse funnel + "pick your first event" CTA + 24h post-signup nudge email. Frontend + email template; no cron dependency for the frontend half. | Pattern B cohort (now ≥50% of arrivals) | Recover 20–40% of non-activators on landing-page side alone | CRO Agent (6) + Email Agent (5) | OPEN |
| 1 | **Revive the drip cron.** Day 25. **19 emails owed across 19 users**, 11 of which fire on May 1 if the engine returns. | All 19 pending users | First retention signal the product would have ever produced | Email Agent (5) / Lead Architect | OPEN (Day 25) |
| 2 | **Fix price tracking cron.** ajvanprooyen's first game passed today; the remaining 5 follow over May 2–6. The May 6 cumulative passed-no-notification count will be 12. Every day of further delay adds another instance to the post-mortem ledger. | All 44 activated users with ≥1 watchlist item | Stops the queue from extending; doesn't recover what's lost | Lead Architect | OPEN (Day 25) |
| 3 | **Ship target-price prompt.** 0 of 85 items have a target. Without this, the alert system cannot fire even after cron fixes. | All watchlist-adding users | 40–60% target completion unlocks the alert-driven retention loop | CRO Agent (6) | OPEN |
| 4 | **"Event passed" auto-pivot email template.** 7 events have now passed without outreach (5 today + 2 by tomorrow morning); cumulative will be 12 by May 6. | Users with past-date watchlist items only | 15–25% re-engagement of otherwise-lost users | Email Agent (5) | OPEN (3+ weeks) |
| 5 | **Add `last_login_at` tracking.** Day 25. Every retention metric is an estimate without it. | All users | Enables measurement | Analytics (7) | OPEN (Day 25) |
| 6 | **Newsletter homepage form audit.** 89 days flat at 3 subscribers. Investigate whether the form actually submits. 12-weeks-and-5-days unaddressed = longest open dependency on the project. | Anonymous homepage visitors | Either the form is broken or the offer is dead — either is fixable | CRO Agent (6) | OPEN (89d) |

### Churn Severity Assessment — Week 4 Verdict

**The fourth consecutive week with the same top three engineering blockers, but the strategic context shifted decisively this week.** For the first time, the question "what can we do that doesn't depend on the engineering team" has clear answers:

- **Action A** (redirect acquisition to known-source channels) is acquisition-team work that ships without any backend change. The 3/3 vs 0/6 split has now carried 8 days at 100% / 0% extremity. We are statistically confident we should act on it.
- **Action B** (goal-gradient progress bar) is a frontend ship that targets the largest single sub-segment of activated users (47%). It is the first psych rec in the 9-rec sequence that doesn't depend on a cron, schema change, or pipeline.
- **Action C** (Pattern B onboarding path) is half frontend, half email. The frontend half ships independently.

The macro picture didn't move; the *attack surface* changed. Last three weeks: "ship the blockers." Starting this week: "ship the blockers, AND there are three orthogonal interventions that don't wait for them." This is the first non-trivial expansion of the playbook in a month.

**Net this week:** −43% signup velocity, +0 watchlist adds across 6 days, +2 churned, +2 recorded conversion losses, +5 conversion losses queued for next week, 0 emails sent, 0 alerts fired, 0 progress on any engineering item. Bright spot: a third user (taranimeramaro) joined the Bruno Mars cluster, making it the first cross-user / cross-city / cross-month tour cluster on the platform — the demand-shape signal continues to sharpen even as the product's ability to service it does not.

---

## 2. Referral Program — Status Worsened; Not Just Deferred

### Status: NOT IMPLEMENTED — Brand-Damage Risk Materialized This Week

For the fourth consecutive week the answer is "no." This week the answer is also "and the cost of having said yes by now would have been visible in real users' inboxes today."

Specifically: if a referral program had launched two weeks ago and pete.uzelac77's referral code had brought a friend, that friend's experience would have been: signup → never received any drip email (Day 25) → tracked an event → no price alert ever fired (lifetime zero) → eventual churn at Day 14, like nicklib. **Both pete and his hypothetical referee would now be in the churned cohort, with pete having spent his social capital introducing a friend to a product that didn't deliver.** The negative-WOM math is straightforward: most referees mention the experience to ≥2 other people; "Pete sent me this thing and it did nothing" is a worse outcome than no referral at all. The Apr 24 weekly named this as a hypothetical risk; this week makes it a concrete one.

### Updated Launch Prerequisites (and Why They've Hardened)

| Prerequisite | Status (Apr 24) | Status (May 1) | Movement |
|--------------|-----------------|----------------|----------|
| Price-tracking cron functional | Broken Day 18 | **Broken Day 25** | −7 days |
| Drip cron functional | Broken Day 18 | **Broken Day 25** | −7 days |
| At least one price alert has ever fired | Lifetime 0 | **Lifetime 0** | unchanged |
| `last_login_at` instrumentation | Missing Day 18 | **Missing Day 25** | −7 days |
| Churn rate < 50% | 86.7% | 84.4% | dilution-driven, not retention-driven |
| **NEW: Pattern B share < 30%** | n/a | **62.5%** | newly-blocking — the curious signups would also fail referral |
| **NEW: At least one psych rec shipped** | n/a | **0 of 9 shipped** | newly-blocking — onboarding path missing |

Best-case referral launch window: **Q4 2026 → Q1 2027.** Each week of further delay on the engineering items pushes this further. We are no longer estimating a launch date; we are tracking how far the launch date moves.

### Incremental Design Updates (Since Apr 24)

**The "specific beats generic" landing-page copy from last week needs an update.** Last week proposed rotating copy like "Pete tracks 4 World Cup matches at Lincoln Financial here." Pete is now churned (Day 21). Rotating his name into a referral landing page after he has churned is a brand-credibility violation; rotating his name *because* he was a power user is the very inversion the program is supposed to encourage.

**Updated rule:** referral landing-page social proof must rotate users who are still *actively engaged at time of impression*, with a freshness check that auto-disables a name once the user crosses Day 14 inactive. This is a real engineering requirement (cron job that checks user-status before serving the landing page) — and it confirms again that the referral program's prerequisites are deeper than a single crontab fix.

**Reward structure unchanged from Apr 24:** referrer gets bulk-add unlock on first activated referral (matches the 5-user power-activator archetype); insider badge + priority alerts at 3 referrals; lifetime premium at 10. No design change this week.

---

## 3. Pricing & Monetization Strategy

### Current State (Unchanged in Magnitude, Worse in Composition)
- Revenue: **$0** lifetime, all sources.
- User base: 64 registered (+4 WoW), 44 activated (+0 effective WoW; the +4 net signups produced 1 activation), 0 paying.
- Monthly infra cost: $0–20 (Railway + Vercel free/starter).

### The Three Pricing Conclusions That Sharpened This Week

**(a) The freemium pitch can't ship while activation is at 25%.** A free tier with caps is a value-extraction layer on a working product. The product currently delivers no measurable value to the majority of arrivals (Pattern B = 62.5%). Putting up a paywall at the 4th watchlist item against a population whose modal behavior is *0 watchlist items* is not a monetization strategy; it's a friction increase against a funnel that already loses 75% of arrivals. **Freemium soft-launch is now blocked behind activation rate ≥ 50% on new arrivals**, in addition to the prior infrastructure blockers.

**(b) The WC Pass deadline (Apr 30) was missed; the new deadline is harder.** The Apr 24 plan opened pre-sale at $7.99 on Apr 30, lifted to $9.99 on May 14. The pre-sale didn't open. World Cup kickoff is now 41 days out (June 11). The runway compressed from 6 weeks to 5 weeks 5 days. **Three options:**

  - **Option 1 (drop the early-access tier entirely):** open at $9.99 on May 8 — gives 1 week from this report. Loses the anchoring device.
  - **Option 2 (compress the early-access window):** open at $7.99 on May 8, lift to $9.99 on May 18. Ten-day window instead of fourteen.
  - **Option 3 (skip Phase 1 of WC Pass entirely):** no pre-sale; launch the Pass as a proper product on June 1, 10 days before kickoff, single price $9.99. Conservative but consistent with the brand-credibility risk above — pre-selling a Pass against a broken price-tracking pipeline produces a refund cluster on June 12 we don't have the bandwidth to handle.

  **Recommendation: Option 3.** The pre-sale was always a runway-extension play; with infrastructure unfixed, pre-selling a product against it is the same brand-damage risk as launching the referral program. June 1 launch with a working price-tracking pipeline (assumed by then) is the cleanest path. **If infrastructure is *still* broken by mid-May, the Pass should not launch at all** — the WC tournament is exactly the kind of high-visibility event where a product failure compounds into press-mentioned brand damage. Better to skip the cycle than to ship into it broken.

**(c) The known-source / unknown-source split changes the affiliate-revenue priority order.** The Apr 24 plan deferred affiliate links until "Phase 0 must complete first." That logic still holds for users who are *not* converting. But the 3 known-source users this month (ajvanprooyen, nmcnamee99, taranimeramaro) all activated immediately, all added multi-event, all are exactly the demographic that converts on a "Buy Tickets on Ticketmaster" affiliate click. **Revised:** affiliate links can ship behind a feature flag visible only to users with `watchlist_count >= 3` AND `signup_source = known`. This is ~6 users today, will be 10–15 by end of May at current pace. Revenue projection unchanged ($50–100/mo at this size, scaling with cohort growth) — but the gating ensures the affiliate path doesn't hit a Pattern B user during their 0-watchlist phase.

### Path Evaluation (Updated)

#### Path A: Freemium — Soft-Launch Window Closed; Now Backlog

| Component | Apr 24 Plan | May 1 Update |
|-----------|-------------|--------------|
| Free tier caps | 3 watchlist, 7d history | Hold spec; cannot ship |
| Premium $4.99/mo | Soft-launch as gift to 5 power activators | **3 of 5 are now churned** (pete, brigitte, tosophia). Power-activator gift cohort shrinks to 2 (joshdguillemette, ajvanprooyen) — and ajvanprooyen's experience this week is the strongest argument *against* offering Premium to him until the price-tracking pipeline works |
| Soft-launch trigger | Apr 30 | **Conditional: ≥1 alert has fired AND activation rate ≥ 50% on new arrivals.** Likely Q3 2026 |

#### Path B: Affiliate Revenue — Newly Gateable to a Subset

| Component | Apr 24 Plan | May 1 Update |
|-----------|-------------|--------------|
| Programs | Ticketmaster + SeatGeek + StubHub | unchanged |
| Visibility | All users post-launch | **Gated by feature flag: `watchlist_count >= 3 AND signup_source = known`** |
| Initial cohort | n/a | ajvanprooyen, taranimeramaro, joshdguillemette potentially (verify), 1–2 from the pre-April cohort |
| First $ likely from | "WC Pass / single high-value event user" | **Bruno Mars cluster** — 3 users now, MetLife Aug 14/16/17, Ohio Stadium May 20. Tour-wide commission opportunity |
| Ship readiness | Pre-Apr 30 | **No engineering blockers — gate is a frontend feature flag and a `/api/admin/source` query. Could ship next week.** |

#### Path C: Advertising — Still Not Yet
60 → 64 users. No change. Revisit at 50,000+ monthly pageviews. The 89-day-flat newsletter is the upstream signal that pageview-acquisition isn't even functional yet.

#### NEW Path D: WC Pass — Now Conditional on June 1 Infrastructure
The Apr 24 plan assumed Apr 30 infrastructure ship. With that missed, the Pass becomes conditional on a June 1 ship. **If infrastructure is not working by May 25, abort Pass launch entirely for this cycle.** Better outcome: skip the cycle. Worst outcome: launch into a broken product on the highest-visibility event of the year.

### Revised Monetization Roadmap

| Phase | Target Date | Action | Revenue Target |
|-------|-------------|--------|----------------|
| **Phase 0 (still prerequisite)** | Now → May 15 | Fix drip + price tracking + target-price prompt | $0 |
| **Phase 1A (NEW — non-engineering ship)** | May 1 – May 15 | Ship affiliate links behind feature flag for known-source ≥3-watchlist users; track CTR on small N | $0–50 (proof-of-concept) |
| **Phase 1B (CONDITIONAL)** | June 1 – July 19 | If infrastructure works: launch WC Pass at $9.99, no pre-sale. If infrastructure does NOT work: SKIP THIS CYCLE | $0 (skipped) – $2,500 (run) |
| **Phase 2** | Q3 2026 | Soft-launch Premium as gift to surviving power activators (currently 2; by Q3 likely ≤ 2 unless retention recovers) | $0 |
| **Phase 3** | Q4 2026 | Full freemium launch — conditional on activation rate ≥ 50% on new arrivals | $300–1,000 MRR |
| **Phase 4** | 2027+ | Referral program; advertising at 50k+ pageviews | TBD |

**Key changes vs. Apr 24:** (a) WC Pass loses pre-sale; recommendation is **skip-this-cycle if infrastructure isn't ready by May 25.** (b) New Phase 1A ships affiliate links behind a feature flag — first non-zero revenue path that doesn't require the cron fixes. (c) Premium soft-launch slips to Q3 (was Phase 1, May 1–14). (d) Full freemium gets a new prerequisite (activation rate floor).

### First-Revenue Scenario (Revised)

The most realistic first revenue dollar shifted this week. The Apr 24 forecast was a WC Pass sale. The May 1 forecast: **an affiliate click-through from one of the 3 known-source users to a Ticketmaster purchase, sometime in May.** Specifically: taranimeramaro's Bruno Mars MetLife trio (Aug 14/16/17) is the most likely first-commission event — three tickets, three potential clicks, secondary-market markup typical, multi-platform comparison genuinely useful. The path: ship affiliate flag → taranimeramaro returns to `/watchlist` → clicks through to buy → first commission. The path doesn't require any cron to work.

---

## 4. Feature Launch Planning

### Recommendation: The "Proof of Life" Relaunch is Postponed; The "What We Can Ship Without Engineering" Relaunch Replaces It

Last week's plan was "One User, One Game, One Working Alert" — anchored on ajvanprooyen's May 1 game, with the entire campaign contingent on Apr 30 infrastructure shipping. The infrastructure didn't ship. The campaign cannot run as designed.

The replacement campaign reframes around what *can* ship without backend changes.

### Feature "Launch" v3: "Smart Tracker for Trip Planners" (Acquisition-Side Launch)

Rather than relaunch the product to existing 52 users (broken funnel) or to the Apr 30 cohort (impossible — deadline missed), launch a *targeted acquisition campaign* at the cohort that empirically activates: known-source / trip-planner users. This works because:

- Known-source signups activate at 100% lifetime in the April cohort
- We don't know all the channels yet (Day 8 of the Analytics ask), but we know *some* of them (the 3 known-source users this month came from organic SEO + a Reddit mention + a known referrer chain)
- The campaign doesn't require any retention infrastructure — these users activate, add events, and we can serve them affiliate links and useful content even with the cron broken
- It doesn't blow brand capital with already-disappointed users

```
## Campaign: "Smart Tracker for Trip Planners" — May 1–31

### Pre-Launch (May 1–7)
- Day 1–3: Analytics resolves attribution on ids 55, 57, 58, 60, 63, 64 (Day 8 dependency).
  This is the gating step. Without it, the campaign optimizes blind.
- Day 4–5: Identify the top 1–2 known-source channels from the resolved data.
  Hypotheses to confirm: organic search on long-tail trip queries
  ("Cubs Wrigley out-of-market trip"), reddit/r/[team] mentions,
  or specific landing-page URLs that already convert.
- Day 6–7: Ship the Cubs Wrigley out-of-market trip hub page (carried from last week,
  P0). Anchor the content campaign around it.

### Launch Phase (May 8–22)
- Two new content hub pages: Bruno Mars cross-tour tracker (MetLife + Ohio Stadium),
  Cubs out-of-market planner.
- Social: pin the trip-planner angle. Cubs Wrigley + WC Lincoln Financial as
  the two flagship trip examples.
- Ads (small): $250–500 test on the highest-converting known-source channel,
  narrow targeting on trip-planner intent terms.
- Affiliate links go live behind feature flag for the 3 known-source users
  + any new known-source signups.

### Iteration Phase (May 23–31)
- Measure: how many new signups via the campaign? What's their activation rate?
  Does it match the 100% known-source historical pattern?
- If activation rate ≥ 70% on campaign-driven signups: scale.
- If activation rate < 50%: abort and retain budget for June 1 WC Pass decision.

### Success Metrics (Realistic)
| Metric | Target | Why |
|--------|--------|-----|
| Campaign-driven signups (May 8–31) | 8–20 | Doubling current acquisition velocity |
| Campaign signup activation rate | ≥ 70% | Validates known-source pattern is reproducible |
| First affiliate click-through | ≥ 1 | Proof of feature-flag path |
| First affiliate commission | $5–50 | Realistic given small N |
| Watchlist items added by campaign cohort | 20+ | Proof the trip-planner hypothesis runs |
```

### Why This Works When Last Week's Didn't

- **No cron dependencies.** The campaign doesn't need a single backend fix. It needs: hub-page content, source-attribution resolved (~1 SQL query), feature-flagged affiliate links (frontend), and ad budget approval.
- **Acquisition-side intervention.** Last week's "Proof of Life" was retention-side; it died with the deadline. This week's pivot is acquisition-side — the engineering team can stay focused on the cron fixes while the marketing/CRO/analytics teams ship a parallel track.
- **Self-validating.** If campaign-driven signups activate at the expected 70%+ rate, we'll have empirical confirmation that known-source acquisition is the play *and* enough new known-source users to populate the WC Pass pre-sale list (if that ever opens) and the eventual referral program.
- **Loss-bounded.** Worst case: $250–500 ad spend produces zero returns and we abort May 23. That's a smaller blast radius than a full launch into a broken product.

### Launch Content Requests → Content Agent (Agent 1)

| Priority | Item | Deadline |
|----------|------|----------|
| P0 | **Cubs Wrigley out-of-market trip hub page.** Carried from Apr 24 weekly with P0. ajvanprooyen's 6-game cluster is the implicit anchor; out-of-market traveler frame. | **May 4 (publish for SEO + immediate use in campaign)** |
| P0 | **Bruno Mars cross-tour tracker hub page.** New this week — three users now in the cluster. MetLife Aug 14/16/17 + Ohio Stadium May 20. Tour-wide content play. | **May 6** |
| P1 | **"How many events should you track?" hub page.** Surfaced by goal-gradient rec; supports the progress-bar copy that needs the empirical 30%/52% backing. | May 10 |
| P1 | "Smart Tracker for Trip Planners" landing page — campaign anchor, links to Cubs + Bruno hubs. | May 8 |
| P2 | **WC Lincoln Financial Field preview.** Now de-anchored from pete (churned). Frame around the city/venue, not the user. | May 12 |
| P2 | "We Fixed It" relaunch post — **HOLD** until any engineering item ships. Currently no item has shipped. | TBD |

### Launch Social Plan → Social Agent (Agent 3)

| Priority | Item | Deadline |
|----------|------|----------|
| P0 | Cubs Wrigley out-of-market trip content drop — same week as content page lands | **May 4–6** |
| P0 | Bruno Mars cross-tour content drop — three-user demand validation as social proof (anonymized) | **May 6–8** |
| P1 | WC 41-day countdown (today). Frame: city/venue, not pete. | This week |
| P1 | "Trip planner" angle pinned to top of all profiles for May | May 1 |
| P2 | Hold all "we fixed it" content; no engineering items have shipped | Indef |

---

## 5. Paywall & Upgrade Flow

### Status: All Touchpoints Still Pre-Ship; One New Conditional Touchpoint Added

Apr 24 weekly defined six touchpoints (TP1–TP6). All six remain unshipped. One new touchpoint is added this week, conditional on Phase 1A affiliate launch.

### New Touchpoint 7: Affiliate Click-Through Capture

**Trigger condition:** Known-source user with `watchlist_count >= 3` clicks through an affiliate link to Ticketmaster/SeatGeek/StubHub.

**Rationale:** First non-zero revenue moment in project history. Worth instrumenting carefully so the moment is captured cleanly. Also: the user has just experienced the highest-friction moment in the funnel (decision to leave the site for a purchase). A small post-click toast/email gives us a chance to associate "useful tracker" with "real money saved" before they finish checkout elsewhere.

**Copy (post-click toast):**

```
🎯 We'll keep tracking prices for this event.

If you do buy on Ticketmaster, you can add the receipt and we'll
flag if prices drop further (most events keep moving even after
you have tickets — useful to know if you bought 2 and want to
add a 3rd later).

[ Drop a quick note when you've bought ]   [ Maybe later ]
```

**Design:** Non-blocking toast post-click; second touchpoint is a 24-hour follow-up email "did you end up buying?" for users who don't dismiss the toast.

**Ship cost:** 2–3h. Click capture + toast component + a single email template.

### Updated Touchpoint Priority (Reflecting Phase 1A Affiliate Launch)

| # | Touchpoint | Ship Timing | Reason |
|---|------------|-------------|--------|
| 1 | **Affiliate Click-Through Capture (TP7, NEW)** | **May 8–15** (with Phase 1A) | First revenue moment; cheapest ship |
| 2 | **Goal-Gradient Progress Bar** (Agent 8 Daily May 1 rec — not in original 6-touchpoint set, but operationally a paywall-adjacent ship since it accelerates 1→2 event progression) | May 1–8 | Frontend-only; no dependencies |
| 3 | **WC Pass Landing Page (TP5)** | **CONDITIONAL — hold pending May 25 infrastructure-readiness gate** | Pre-sale skipped; landing page only ships if launch is approved |
| 4 | **Bulk-Add Intent Modal (TP6, Apr 24)** | May 8–22 (with Smart Tracker campaign) | ajvanprooyen no longer the live test; now serves taranimeramaro / future trip planners |
| 5 | **Post-First-Alert Upgrade Prompt (TP3)** | Q3 2026 | Requires first alert to exist |
| 6 | **Watchlist Limit Hit (TP1)** | Q4 2026 | Requires freemium |
| 7 | **Extended History Paywall (TP2)** | Q4 2026 | Requires freemium |
| 8 | **Passive Upgrade Banner (TP4)** | Last | Only after proven value delivery |

### WC Pass Landing Page — De-prioritized to Conditional

The Apr 24 spec stands as written if/when launch is approved. **But the spec now has a no-launch fork: if infrastructure is not working by May 25, the landing page is not built.** This is a budget-discipline call: 3–5 days of dev time on a Pass landing page that ships into broken infrastructure is worse than spending the same days on the goal-gradient progress bar + curious-signup onboarding path, both of which ship without backend.

### Success Metrics for Phase 1A (May 8–31)

| Metric | Target | Rationale |
|--------|--------|-----------|
| Goal-gradient progress bar ship date | **May 8** | First psych rec to ship — proof execution path exists |
| Goal-gradient single-event-user → second-event conversion | 15–25% over 4 weeks | Literature benchmark for the mechanism |
| Affiliate flag enabled for known-source users | **May 15** | Phase 1A ship gate |
| First affiliate click-through | ≥ 1 in May | Path validated |
| First affiliate commission | $5–50 | Realistic at small N |
| Smart Tracker campaign signups | 8–20 in May | Doubles current pace |
| Smart Tracker signup activation rate | ≥ 70% | Validates known-source theory |

---

## 6. Cross-Agent Handoffs

### → Analytics Agent (Agent 7) — HIGHEST (Day 25 / Day 8 Compounding)

| Priority | Item | Deadline |
|----------|------|----------|
| **P0** | **RESOLVE source attribution on ids 55, 57, 58, 60, 63, 64.** Day 8 of dependency. The 3-of-3 / 0-of-6 split is the strongest correlation in the data. Acquisition decisions for the entire May campaign hinge on this query. **Single highest-leverage open item in the entire growth stack.** | **This week (May 7 hard)** |
| P0 | **Add `last_login_at` tracking.** Day 25. Every retention metric is estimated. Goal-gradient rec defensibility partially depends on it (1-event vs 2+ event retention curve). | This week (May 7 hard) |
| P0 | **Connect GA4 Data API.** Day 25. Channel decisions are guesses. | This week (May 7 hard) |
| P1 | **Empirical confirmation for goal-gradient milestones.** Confirm 30% (3+ events) / 52% (2+ events) for the progress-bar copy. Plan quarterly recompute. | May 8 (block on goal-gradient ship) |
| P1 | 1-event vs 2+ event retention curve — defensibility for goal-gradient rec. Curve construction; pulls hourly from the user/watchlist tables. | May 15 |
| P1 | Affiliate click tracking instrumentation — UTM + outbound-click capture for Phase 1A flag launch. | May 8 (block on Phase 1A) |
| P2 | Cubs trip post-mortem instrumentation — does ajvanprooyen clean up his watchlist post-trip (May 7+)? Tracer for "did the user attend without us knowing" question. | May 7+ |
| P2 | Newsletter form audit query — verify submissions actually hit the database. 89 days flat is suspicious enough to merit checking the wire, not just the form. | This week |

### → CRO Agent (Agent 6) — HIGH

| Priority | Item | Deadline |
|----------|------|----------|
| **P0** | **Goal-gradient progress bar on `/watchlist`** (today's psych rec). 1-4 event users. ~3h ship cost. **First psych rec to ship — sequence has been blocked for 9 weeks.** | **May 8** |
| **P0** | **"Curious signup" onboarding path.** Pattern B is now majority (62.5%). Empty dashboard category-browse + "pick your first event" CTA. Frontend half ships independently of email half. | **May 15** |
| P0 | **Target-price prompt completion-meter UX.** 0/85 target prices set. The single highest-downstream-impact UX change in the product. | This week (May 7 hard) |
| P1 | **Affiliate click-through toast (TP7, new).** Phase 1A companion. ~2h. | May 15 (with affiliate flag ship) |
| P1 | Carried from prior weeks: implementation-intentions Day-7+ modal (Apr 30 rec), Zeigarnik header (Apr 29), implementation-intentions post-signup screen (Apr 28), anchoring on `/compare` + `/event/[id]` (Apr 27), social-proof EventCard badge (Apr 26), reciprocity dashboard empty-state (Apr 25), loss-aversion target panel (Apr 24), commitment-consistency 2nd-action (Apr 23). | Sequenced over Q2 |
| P1 | Newsletter homepage form audit — **89 days flat** = 12 weeks 5 days. Longest open dependency on the project. | This week |
| P1 | Bulk-add intent modal (TP6 Apr 24). Live test pivots from ajvanprooyen to taranimeramaro / future trip-planner cohort. | May 22 (with Smart Tracker campaign) |

### → Email Agent (Agent 5) — CRITICAL (Day 25)

| Priority | Item | Deadline |
|----------|------|----------|
| **P0** | **Revive drip cron.** **Day 25. 19 emails owed across 19 users.** **11 fire May 1 if engine returns; 12 in 48h.** | **Immediate** |
| P0 | Send TODAY's queue once engine returns: lilianamasyrubi Day-3 (on-schedule), nicklib Day-14 (on-Day-14), pete Day-21 (on-Day-21), mark.murdock Day-7 B2B (24h late), awwhittington Day-7 (24h late), charlesteel Day-7 (48h late), ggri73 Day-7 (48h late), josh Day-7 (5d late), dr.altvater Day-14 forcing (with subject edit), taranimeramaro Day-3 (72h late, last honest day), nmcnamee99 Day-3 (72h late, current-state edit) | Today |
| P0 | Send TOMORROW's queue: zhili1208 Day-3 (on-schedule). | May 2 |
| P1 | Build "event passed" auto-pivot email template. **7 events passed without outreach by tomorrow morning; 12 by May 6.** | This week |
| P1 | Build curious-signup 24h-post-signup nudge email — pairs with CRO's onboarding path. | May 15 |
| P1 | Draft "Smart Tracker for Trip Planners" launch email to known-source cohort + new arrivals from May campaign. | May 8 |
| P1 | German-language drip variant — **Day 6 unanswered** (dr.altvater web.de). | This week |
| P1 | Affiliate click-through follow-up email (TP7 companion). | May 15 |
| P2 | "We Fixed It" campaign — **HOLD** until any engineering item ships. | Indef |

### → Content Agent (Agent 1)

| Priority | Item | Deadline |
|----------|------|----------|
| **P0** | **Cubs Wrigley out-of-market trip hub.** Carried from Apr 24 weekly. **First Cubs game passed today; 5 more pass May 2–6 — ship before the trip's tail to capture residual SEO heat.** | **May 4** |
| **P0** | **Bruno Mars cross-tour hub.** New this week — third user in cluster. MetLife + Ohio Stadium. | **May 6** |
| P1 | "How many events should you track?" — supports goal-gradient rec; anchor on 30% / 52% data | May 10 |
| P1 | "Smart Tracker for Trip Planners" campaign landing page | May 8 |
| P1 | WC Lincoln Financial Field — re-anchor from pete (churned) to city/venue frame | May 12 |
| P2 | "We Fixed It" relaunch post — **HOLD** until engineering ships | Indef |

### → Social Agent (Agent 3)

| Priority | Item | Deadline |
|----------|------|----------|
| P0 | Cubs Wrigley trip content drop — pairs with content hub | May 4–6 |
| P0 | Bruno Mars cross-tour drop — three-user social proof | May 6–8 |
| P1 | "Trip planner" angle pinned to top for May | May 1 |
| P1 | WC 41-day countdown (today's number) — city/venue frame | This week |
| P2 | All "we fixed it" content **HOLD** | Indef |

### → Ads Agent (Agent 4)

| Priority | Item | Deadline |
|----------|------|----------|
| **P0** | **Hold pending Analytics resolution (Day 8).** No paid spend until source attribution returns — running paid acquisition without knowing which channels convert is paying for noise. | Until Analytics ships |
| P1 | **Smart Tracker for Trip Planners** test — $250–500 cap, narrow targeting on whichever known-source channel attribution surfaces. | **May 15–22** (post-attribution) |
| P1 | Cubs out-of-market audience seed (pairs with Cubs hub page) | May 8 |
| P1 | Bruno Mars cross-tour audience seed (pairs with Bruno hub page) | May 8 |
| P2 | Benchmark CPA research: trip-planner intent terms ("Cubs Wrigley road trip," "Bruno Mars MetLife tickets," "World Cup Philadelphia trip"). | Ongoing |

---

## 7. Executive Summary

### This Week's Headline
**The Apr 30 deadline missed; the cost arrived on schedule with names attached; the engineering blockers are now Day 25.** Every named forecast in last week's report came true: ajvanprooyen's first Cubs game passed without notification, tate's Florence passed, nicklib churned at exactly Day 14, pete crossed Day 21, recorded conversion losses tripled (1 → 3) with 5 more guaranteed by May 6. Zero engineering items shipped to prevent any of it. **The week's substantive output was watching the Apr 24 predictions resolve.**

### The April Cohort Final Verdict

Four weeks of data, now closed:

- **Pre-Apr 15:** 90% activation rate, 0.42–0.61 signups/day baseline.
- **Apr 15–17:** First non-activator (dylanbaldy). 1 signup, 0% activation.
- **Apr 18–24:** 7 signups, 43% activation. Five-user non-activation pattern.
- **Apr 25 – May 1:** 4 signups, 25% activation. Pattern B (signup → never adds) crossed majority at 62.5% of last 8.

**Final April figures:** 11 signups in 30 days (worst by daily rate on record), 47% cohort activation rate (exactly half of pre-April baseline), 17 watchlist adds (vs 20 in March, 22 in February). The signup engine *and* the activation engine both degraded in lockstep this month.

### The Three Unchanged Engineering Blockers (Now 25 Days Each)

1. **Price-tracking cron** — Day 25. ajvanprooyen Cubs G1 passed today; G2–G6 pass May 2–6; cumulative passed-no-notification will be 12 by May 6.
2. **Drip cron** — Day 25. 19 emails owed; 11 fire May 1 if engine returns.
3. **Target-price prompt** — never shipped. 0 of 85 watchlist items have a target price.

### What Changed This Week (And Why It Matters Strategically)

1. **Three orthogonal interventions surfaced that don't depend on the engineering team.** This is the structural shift in this week's report. **(A)** Redirect acquisition to known-source channels (Analytics ask, then Ads execution — no backend). **(B)** Ship the goal-gradient progress bar (CRO frontend, ~3h, no backend). **(C)** Build the curious-signup onboarding path (CRO frontend + Email template, no backend). These ship in parallel with the engineering team's work — and unlike Apr 24's "Proof of Life" relaunch, they don't depend on any cron firing.
2. **Pattern B is majority.** 62.5% of the last 8 signups never add an event. The signup flow is structurally optimized for a minority of arrivals. This reframes "fix the funnel" from "ship the cron" to "ship the cron AND fix Pattern B at the funnel layer."
3. **The known-source / unknown-source split is now actionable.** 3-of-3 vs 0-of-6 across 9 data points. Marketing can act on this without waiting for engineering — campaign budget redirects to known-source channels next week, contingent on Analytics resolving the Day 8 attribution ask.
4. **WC Pass pre-sale is dead; the entire launch is now conditional on May 25 infrastructure-readiness.** If infrastructure is still broken May 25, the recommendation is to skip the cycle entirely. The brand-damage risk of launching the highest-visibility product against broken infrastructure on the highest-visibility event of the year exceeds the revenue opportunity.
5. **The first revenue dollar reframed.** Apr 24: "WC Pass to a search-driven WC fan." May 1: "**Affiliate click-through from a known-source trip planner — most likely Bruno Mars cluster, May 2026**." The path is shorter, cheaper, and doesn't require a cron.
6. **Bruno Mars cluster expanded to 3 users.** First-ever cross-user, cross-city, cross-month tour cluster. Demand-shape signal sharpens; product's ability to service it does not.

### Strategic Outlook (Compressed Further From Apr 24 Plan)

| Timeframe | Focus | Key Milestone |
|-----------|-------|---------------|
| **May 1–7** | Analytics attribution; goal-gradient ship; Cubs hub page | Source split resolved; first psych rec ships. |
| **May 8–15** | Phase 1A: affiliate flag for known-source ≥3-watchlist users; curious-signup onboarding path; Bruno hub page | First affiliate click-through. First non-zero revenue path live. |
| **May 16–25** | Smart Tracker campaign run; engineering team on cron fixes | First campaign-driven signups; first $5–50 affiliate commission. |
| **May 25 — INFRASTRUCTURE GO/NO-GO** | Decision: WC Pass launch June 1, or skip-this-cycle | Binary fork on whether June ships at all. |
| **June 1 – July 19** | Conditional: WC Pass launch + tournament marketing | $0 (skipped) – $2,500 (run). |
| **Q3 2026+** | Premium soft-launch to surviving power activators; full freemium gated by activation rate floor | $300–1,000 MRR. |
| **Q4 2026+** | Referral program (conditional on activation rate ≥ 70% on new arrivals) | TBD. |

### What's Unchanged (For the Fourth Consecutive Week)

Drip cron broken (Day 25). Price tracking broken (Day 25). `/api/admin/alerts` broken (Day 25). GA4 disconnected (Day 25). `last_login_at` missing (Day 25). Target prices at 0%. Newsletter at 3 subscribers (89 days flat). Zero psych recs shipped (9 carried). None of the engineering recommendations from Apr 10, 17, or 24 reports have shipped.

**The four weeks of this report can be read as a single arc:**

- **Week 1 (Apr 10):** "Here are the three blockers."
- **Week 2 (Apr 17):** "The three blockers haven't shipped; the cost is starting to compound."
- **Week 3 (Apr 24):** "The three blockers haven't shipped; here are the named users (ajvanprooyen, tate, pete) who will pay the cost on specific dates."
- **Week 4 (May 1, today):** "**The named users paid the cost on the predicted dates. None of the engineering shipped. New plan: ship what doesn't depend on engineering, in parallel with engineering's continued silence.**"

**That last sentence is the operating thesis for this report.** The growth team has spent four weeks waiting on three engineering items. As of today, the team is shipping in parallel — the three orthogonal interventions in §1 (Action A/B/C) are the start. The engineering items remain blockers for the deeper retention loop, but they are no longer blockers for *every* growth lever.

The path from 84.4% churn to < 50% still runs through the three engineering fixes. Writing that sentence on a fourth consecutive Friday is no longer an observation — it is the load-bearing structural fact of the project. **But the path from 25% activation rate (this week) to 70% activation rate runs through the three orthogonal interventions named above.** Those don't wait for engineering. They ship next week.

---

*Growth & Retention Agent — Weekly Strategy Report*
*Generated: 2026-05-01 10:00 UTC (Friday Weekly)*
*Next weekly report: 2026-05-08 — first weekly under the "ship in parallel with engineering" operating mode*
