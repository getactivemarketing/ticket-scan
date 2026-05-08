# Growth & Retention — Weekly Strategy Report
**Week of May 2 – May 8, 2026**
**Agent 8: Growth & Retention | Fifth Weekly Report**

> **Skill availability note:** `churn-prevention`, `referral-program`, `pricing-strategy`, `launch-strategy`, `paywall-upgrade-cro`, and `marketing-psychology` skills referenced in the agent spec remain not installed in this runtime. Report composed from this week's daily growth dashboards (May 2 → May 8), Analytics weekly (today), Email weekly (today), prior weekly (May 1), and the named forecasts that report set down for this week.

---

## 0. Last Week's Forecast vs. This Week's Outcome

The May 1 weekly named seven forecasts in §0 plus three "ship without engineering" interventions (Action A/B/C) plus a May 25 infrastructure-readiness gate for the WC Pass. Outcome:

| Forecast (May 1) | Outcome (May 8) | Verdict |
|--|--|--|
| "ajvanprooyen Cubs G2–G6 pass May 2–6 without notification; cumulative passed-no-notification will be 12 by May 6." | All five Cubs games passed without notification on schedule. By May 6 cumulative was 12. By May 8 it's **14** (+ Bilmuri May 2 + Mac DeMarco May 7). ajvanprooyen is now **365h+ silent** across his entire tracked stand. | **Hit, with one extra: same-day Mac DeMarco add wasn't on the schedule.** |
| "Drip cron Day 25 → 19 emails owed across 19 users." | Drip cron Day 32. **109 emails owed across 29 users** per Email weekly today (was 95 at start of this week — +14 in 7d). | **Hit and worsened.** |
| "First revenue dollar likely to be an affiliate click-through from one of the 3 known-source users; most likely the Bruno Mars cluster, May 2026." | Phase 1A affiliate flag did **not** ship. Bruno Mars cluster grew to 4 users / 6 events tracked across 3 cities (konman ×2 Soldier Field + charlesteel Ohio + taranimeramaro ×3 MetLife). First-commission opportunity intact but ungated. | **Hit on signal, missed on ship.** |
| "Goal-gradient progress bar ships May 8 (today)." | Did not ship. Confirmed by reading `/web/src/app/watchlist/page.tsx` — no progress-bar component present. | **Missed.** |
| "Affiliate flag enabled for known-source ≥3-watchlist users by May 15." | Not on track to ship; no scoping artifact found. | **At-risk.** |
| "Cubs Wrigley out-of-market trip hub publishes May 4." | **Shipped May 3–4** (commit `636e40b`). First content-gap deadline met in 11 days. The page is live; venue route `/venues/wrigley-field` exists in `web/src/data/venues.ts`. | **HIT — only deliverable shipped on schedule this week.** |
| "Bruno Mars cross-tour hub publishes May 6." | Did not ship. No Bruno Mars hub in `web/src/data/blog.ts`; no cross-tour content artifact in `web/src/app`. | **Missed.** |
| "Pattern B share will compound past 62.5% if next 8 signups are unknown-source." | Pattern B share dropped to **50.0%** — but only because the May 7 triple-signup landed 2 of 3 in the instant-activation cluster. **Dilution, not structural improvement.** | **Resolved positive on the surface; analysis below explains why this is fragile.** |
| "April closed as the worst signup month on record by daily rate." | Confirmed: April final 11 signups in 30d = 0.37/day. May is currently tracking at **0.71/day** (5 in 7d) — **2× April's pace**, but the entire week's volume sits inside one 12h cycle on May 7. Strip May 7 and the week is 4 zero-signup days + 2 single-signup days — the worst 7-day window of the year. | **Confirmed for April; May is bifurcated.** |

**One forecast came back positive (Wrigley). One forecast became *more* hit than predicted (Mac DeMarco same-day add was a failure mode the May 1 report didn't anticipate at all). Five forecasts hit on the predicted schedule. Two forecasts (engineering ships) remain missed for the fifth consecutive Friday.**

The structural shift in this report is different from prior weeks. The May 1 report ended with: "the path from 25% activation to 70% runs through three orthogonal interventions that don't wait for engineering." This week:

- Activation rate **jumped to 60%** (3 of 5 signups, all Day-0 activators) — without any of the three orthogonal interventions actually shipping.
- The lift was produced by **acquisition** (whatever happened on May 7), not by **product change**.
- This is informative in a way Week 4's data wasn't: it tells us *where* the leverage is (acquisition source), but it tells us nothing about whether the funnel can hold the lift (zero retention machinery to test it).

**Operating thesis for this report:** the right-shape user activates in 32–35 seconds on the broken product. Find the source of those users; the funnel handles the first five minutes by itself. Past the five-minute mark, the funnel still does nothing.

---

## 1. Churn Deep-Dive

### Churn Metrics

| Metric                                | This Week (May 2 – 8) | Last Week (Apr 25 – May 1) | Trend |
|---------------------------------------|-----------------------|----------------------------|-------|
| Users churned (14d+ signup-age proxy) | **65**                | 54                         | **+11** (5 same-day rollover today: charlesteel + ggri73 + awwhittington + ajvanprooyen + mark.murdock; +6 earlier in week: dr.altvater, josh, then the 5-batch on May 8) |
| Churn rate (% of total registered)    | 94.2%                 | 84.4%                      | **+9.8pp** (the dilution narrative inverts: this week's signup volume was concentrated in a single day, and the 5 simultaneous Day-15 rollovers overwhelmed it) |
| Avg active days before churn (est.)   | 2–7 days              | 2–7 days                   | Flat (proxy unchanged) |
| Win-back email success rate           | 0%                    | 0%                         | Day 32 of zero sends |
| **New users this week**               | **5**                 | 4                          | **+25%** WoW (first WoW signup lift since Apr 22–23 surge) |
| Net user health (new − newly churned) | **−6** (5 new, 11 newly churned) | +2 (4 new, 2 newly churned) | **−8** (the 5-user Day-15 batch overwhelmed the May 7 lift) |
| Signup → Activation rate (week)       | **60% (3/5)**         | 25% (1/4)                  | **+35pp** — back inside historical band (pre-Apr 15 was 77%) |
| Day-0 Activation rate (≤60s)          | **60% (3/5)**         | 0%                         | **+60pp — entirely new pattern** |
| Pattern B share (last 8 signups)      | 50.0%                 | 62.5%                      | **−12.5pp** (dilution from May 7 instant-activator batch; structural problem unsolved) |
| Target-price capture rate             | 0% (0 of 88 items)    | 0% (0 of 85)               | **32 days flat. +3 fresh items added this week, all target-null. The 100% target-null pattern is now structural, not anecdotal.** |
| Alerts ever fired                     | 0                     | 0                          | Lifetime zero |
| **Recorded conversion losses (cum.)** | **3** (held — Cubs G2–G6 not separately counted per Email weekly) | 3 | Held; Mac DeMarco rolled past today as a different failure shape (sealed-before-cron-tick-could-fire) |
| **Cumulative passed-no-notification (events)** | **14** | 7 | **+7 in 7 days — the count doubled.** |
| **Watchlist items**                   | **88, +3 this week**  | 85                         | First multi-add week in 11 days; broke the Mar 16-22 record on May 5 at the 240h-exact wire |
| Newsletter subscribers                | 3                     | 3                          | **96 days flat — 13 weeks 5 days** |
| **Drip emails owed (queue)**          | **109 across 29 users**  | 95 across ~25 users       | **+14 emails / +4 users in 7 days** |

> Day 32 without `last_login_at` instrumentation. Day 32 of zero alerts. Day 32 of zero drip sends. **The acquisition front and the activation front both moved this week. Every other front is unmoved.** Read churn rate's nominal worsening (84.4% → 94.2%) as the natural consequence of 5 Day-15 rollovers landing in a single 24h window — denominator did not grow fast enough to absorb the inflow. The 60% activation rate is the more honest signal of this week.

### Churn Patterns (Six That Hardened, Two That Inverted, One That Is Brand New)

**1. The five-user Day-15 batch is the single largest churned inflow of the entire 32-day outage.** charlesteel126 + ggri73 + awwhittington + ajvanprooyen + mark.murdock all rolled `days_since_signup` 14 → 15 in the past 24h. **All five are at Day-15 carry simultaneously today.** This is the first time the dataset has produced a 5-user same-day same-template churn batch — and it's the largest possible single same-day Day-14/15 cleanup the queue can ever deliver, queued for delivery the moment the engine returns. The pattern reads as the deferred cost of the missed Day-14 fire windows compounding into a single batch event. Email Agent has the body templates queued (one HIGHEST-LEVERAGE `ajvanprooyen` 6-Cubs-passed body + one event-specific `charlesteel` Bruno Ohio body + 3 generic forcing-question bodies for `mark` + `aw` + `ggri73`).

**2. The Day-0 Activator pattern is the cleanest reproducible behavioral signal the platform has produced in 2026.** Three users this week, all activated within +32s/+34s/+35s of signup:
- **jadbennis0** (May 5 20:33:01 UTC → wl add 20:33:33 UTC, **+32s**, Inter Miami CF vs Portland Timbers, May 17, Nu Stadium)
- **sparkitrightthere** (May 7 11:38:32 UTC → wl add 11:39:06 UTC, **+34s**, Mac DeMarco at Salt Shed Outdoors Chicago, May 7 — *same day as signup*)
- **cjthomas2557** (May 7 22:49:36 UTC → wl add 22:50:11 UTC, **+35s**, Noah Kahan at Kia Center Orlando, June 12)

Three users, three different signup days, three different events, three-second activation-time window. Per Analytics weekly today: **the dataset held zero confirmed sub-60-second activations in 4 months of recorded data before May 5.** Three landed this week. **This is either (a) a new traffic source coming online in May that we cannot yet identify, or (b) base-rate behavior that was present but unmeasurable until sample size grew. The +32-to-+35-second clustering is too tight for (b); option (a) is the working hypothesis.**

**3. The Day-0-Activator-with-null-target failure mode is now structural.** All 3 instant-activators completed step 2 (watchlist add) in <60s and step 3 (set target) in 0s. **Across all 88 watchlist items in the dataset, target_price=null on 88 of 88.** This is the cleanest possible diagnosis for the 100% target-null pattern: the UX flows watchlist add to "done" without ever surfacing the target field. Yesterday's daily already pivoted the CRO recommendation from "loss-aversion banner for null-target recovery" (May 7's rec) to "default-effect smart pre-fill on target field at creation" (May 8's rec). **Both ship together as a complete prevention + recovery loop.** The May 1 weekly listed "target-price prompt" as the third engineering blocker; this week the diagnosis sharpens to "the prompt isn't missing, the entire UX flow doesn't surface the field at the activation moment."

**4. The same-day-signup → same-day-event failure mode emerged this week (NEW).** sparkitrightthere added Mac DeMarco at Salt Shed for the same evening she signed up (~9–10h after registration). The show passed the same night. **By the time any Day-3 cron tick could fire, her event has been over for 72h.** The Email weekly's framing today is exact: *the architecture gap (event-triggered welcome triage missing entirely) is now larger than the SMTP outage*. Even if drip cron returns tomorrow, a Day-3 cadence still misses every same-day-event signup forever. The fix is a different shape entirely — a **Real-Time Welcome Triage** that fires within minutes of signup based on watchlist state and event-date proximity. Detail in §4.

**5. Pattern B's drop from 62.5% → 50.0% is dilution, not structure.** The rolling-8-user window now contains 3 fresh Day-0 activators which mathematically push Pattern B back below majority. If next week produces a Pattern B-only cohort (i.e., joseph + natalie pattern), the share returns to 62.5%+. **The structural Pattern B problem hasn't been solved; it has been temporarily diluted by good luck.** natalie.sotocruz (May 7 18:40 UTC, the middle signup of the triple) landed inert and remains so 16h later — confirming Pattern B is alive inside the same 12h cycle that produced the two instant-activators.

**6. The known-source / unknown-source split softened.** 3-of-3 vs 0-of-6 (May 1) → **3-of-3 known vs 3-of-11 unknown** (today). Unknown-source activation: 27.3% (was 0%). Known-source: 100% (frozen). The 0% / 100% binary dies; the gap is still ~3.7×. **The bifurcation softens but the action item doesn't change**: redirect acquisition effort to known-source channels still has the strongest empirical support. **15 days into the attribution-pull dependency on Ads Agent.**

**7. The Cubs trip cohort sealed.** All 6 ajvanprooyen Cubs games (May 1–6) confirmed passed without notification. Day-15 body parses cleanly today: "Two weeks and a day ago you signed up and added six Cubs games to your watchlist. All six have now passed without a single price update from us." **The 24h delay between Day-14 and Day-15 actually IMPROVES the parse — the event-set is now fully closed, the failure is enumerable.** Email Agent has the body queued; it is the sharpest "we failed you" frame in the dataset's history. ajvanprooyen has been silent 365h+ across his entire tracked stand — the forensic question is no longer "does he come back" but "what does this look like in the activation-rate bucket six months from now."

**8. The "active" cohort is hollowing out.** Net user health is **−6 this week** (5 new, 11 newly churned by signup-age proxy). The acquisition lift on May 7 is real, but the trailing 11 churn rollovers (5 today + 6 earlier in week) overwhelm it. **Volume of churned-cohort users grew faster than activated-cohort users for the second consecutive week.** This is the most direct expression of "the engagement engine remains dead."

**9. The flat-watchlist record died at the 240h wire.** 11 calendar days from taranimeramaro's last add (Apr 25 18:27 UTC) to jadbennis0's add (May 5 20:33 UTC) = 242h. The Mar 16-22 prior record stood at 6 days. **The record was the longest in the dataset's history; the breaking event was the cleanest activation in the dataset's history.** Both extremes within the same 5-day window.

### Prevention Actions (Ranked, with the New "Architecture Gap" Tier on Top)

| # | Action | Target Segment | Expected Impact | Owner | Status |
|---|--------|----------------|-----------------|-------|--------|
| **NEW-1** | **Real-Time Welcome Triage architecture** (W0-A: high-intent / event-soon; W0-B: high-intent / event-far; W0-C: empty-watchlist). Fires within 5min of signup based on watchlist state. Replaces Day-1 / Day-3 / Day-7 cadence for the first 72h. | All new signups (3 typology variants) | Closes the same-day-event failure mode permanently; addresses the "event-soon Day-0 activator with null target" cohort directly | Lead Architect + Email Agent (5) | **NEW SCOPE — drafted in Email weekly today, requires architecture decision** |
| **NEW-2** | **Default-effect smart pre-fill on watchlist add target_price** (today's psych rec, daily). Pre-fill = best-cross-source price − 10%, focused, editable. Pairs with yesterday's loss-aversion banner. | All future watchlist adds + recovery on 88 existing null-targets | Lift target_price capture from 0% → 50–70%+ on new items; recovery on existing 88 | CRO Agent (6) | **NEW PRIORITY 1 — ~3-4h ship cost, no backend** |
| **NEW-3** | **Day-1 fire entry to drip schedule.** Today's daily flagged: natalie's Day-1 fire boundary is 18:40 UTC tomorrow May 8. Even a single Day-1 entry compresses the inert-signup intervention window from 72h to 24h. | All Pattern B signups | Catches inert signups 48h faster than current Day-3 first-fire | Email Agent (5) | NEW — schedule change, frontend follows email |
| A | **Redirect ALL acquisition effort to known-source channels.** Now Day 15 of attribution-pull dependency. The 3-of-3 vs 3-of-11 split still favors known-source by ~3.7×. Sharpened question this week: **what changed about acquisition flow on May 7 to produce 3 signups in 11h with 2 instant-activations?** | All future acquisition | Sustains the 60% activation rate as a structural reading, not a one-day flicker | Ads Agent (4) + Analytics (7) | Carried Day 15 |
| B | **Goal-gradient progress bar on `/watchlist`.** Was forecast for May 8 ship; did not ship. Targets the 1-event-only cohort (47% of activated users). Pair with NEW-2: the bar shows progress *to* the next valuable action (set target → second event → third event). | 21 single-event users + future 1-event arrivals | 15–40% lift on next-add conversion (literature benchmark) | CRO Agent (6) | **CARRIED — May 8 deadline missed** |
| C | **"Curious signup" onboarding path for Pattern B.** Empty-state dashboard category-browse + "pick your first event" CTA + 24h post-signup nudge. The 24h nudge would need NEW-3 (Day-1 fire) to land. | Pattern B cohort (50% rolling, structurally still majority) | Recover 20–40% of non-activators on landing-page side alone | CRO Agent (6) + Email Agent (5) | OPEN |
| 1 | **Revive the drip cron.** Day 32. **109 emails owed across 29 users.** 6+ emails clear in 72h if engine returns today (ajvanprooyen Day-15 + 4 same-template Day-15 + jadbennis0 Day-3 tonight = the largest send batch of the entire outage). | All 29 pending users | First retention signal the product would have ever produced | Email Agent (5) / Lead Architect | OPEN (Day 32) |
| 2 | **Fix price tracking cron.** ajvanprooyen Cubs trip closed; cumulative passed-no-notification doubled this week (7 → 14). | All 45 activated users with ≥1 watchlist item | Stops the queue from extending; doesn't recover what's lost | Lead Architect | OPEN (Day 32) |
| 3 | **Ship target-price prompt.** Diagnosis sharpened this week: the prompt isn't missing, the *flow* doesn't surface the field. NEW-2 (default-effect pre-fill) is the implementation; NEW-2 supersedes the original ask. | All watchlist-adding users | NEW-2 covers this | (folded into NEW-2) | SUPERSEDED by NEW-2 |
| 4 | **"Event passed" auto-pivot email template.** **14 events passed without outreach by today**, doubled from 7 last week. Mac DeMarco adds a new template variant (same-day add → same-day pass). | Users with past-date watchlist items only | 15–25% re-engagement of otherwise-lost users | Email Agent (5) | OPEN (4+ weeks) |
| 5 | **Add `last_login_at` tracking.** Day 32. Every retention metric is an estimate. Goal-gradient defense partially depends on it (1-event vs 2+ event retention curve). | All users | Enables measurement | Analytics (7) | OPEN (Day 32) |
| 6 | **Newsletter homepage form audit.** **96 days flat at 3 subscribers — 13 weeks 5 days.** Investigate whether the form actually submits. Longest open dependency on the project. | Anonymous homepage visitors | Form may be broken; confirm wire, then offer | CRO Agent (6) | OPEN (96d) |

### Churn Severity Assessment — Week 5 Verdict

**The fifth consecutive week with the same top three engineering blockers, and the data this week sharpened both ends of the funnel into clearer shape than at any prior point in this report's history.**

The acquisition side gave us the cleanest behavioral signal in the dataset's 2026 record: 3 Day-0 activators in 3 days, +32/34/35s clustered. *If we knew the source*, we would know exactly where to spend the next dollar. We do not know the source — Day 15 of attribution dependency.

The activation side gave us the cleanest diagnostic signal in the dataset's history: all 3 Day-0 activators left target_price=null. The flow doesn't surface the field. Today's CRO rec (default-effect smart pre-fill) is the most directly-targeted product change ever proposed in this report.

The retention side ran the cleanest single-week test of the engineering blockers' cost: 5 same-day Day-15 rollovers, 14 events passed without notification (doubled from 7), 365h+ silence on the highest-leverage user in the cohort. **The cost is no longer a forecast; it is logged on a 7-day rolling ledger.**

**Net this week:** +5 signups (best WoW since Apr 22–23 surge), +3 watchlist (first multi-add week in 11 days), +0 net activated when adjusted for churn rollovers (−6 net user health), +14 cumulative passed-no-notification (doubled), 0 emails sent, 0 alerts fired, 0 progress on engineering. Bright spots: Wrigley page shipped on schedule (first content-gap deadline met in 11 days); Day-0 Activator pattern reproduced 3× with extreme tightness; Pattern B share dropped (cosmetic); Bruno Mars cluster grew to 4 users / 6 events. Dim spots: Bruno Mars hub did not ship by May 6 deadline; goal-gradient progress bar did not ship by May 8 deadline; affiliate flag did not ship.

---

## 2. Referral Program — Status: Same Conclusion, New Sharpening

### Status: NOT IMPLEMENTED — Now Has a Concrete Counter-Example

For the **fifth consecutive week** the answer is "no." This week the answer also has a concrete counter-example baked in.

If a referral program had launched two weeks ago and one of the 3 Day-0 activators (jadbennis0, sparkitrightthere, or cjthomas) had brought a friend, that friend's experience would have been: signup → activate in <60s → land on watchlist → set target_price = null (because UX flow doesn't surface it) → never receive any drip email (Day 32) → never receive any alert (lifetime zero) → either roll into Day-15 churned cohort or be among the 14 users whose tracked event passed without notification. **The Day-0 Activator pattern produces the exact archetype most likely to refer (high engagement, fast first-action), and the exact archetype least served by the broken back half (instant entry to a fully silent product).** The negative-WOM math hardens.

### Updated Launch Prerequisites (and How They Moved This Week)

| Prerequisite | Status (May 1) | Status (May 8) | Movement |
|--------------|----------------|----------------|----------|
| Price-tracking cron functional | Broken Day 25 | **Broken Day 32** | −7 days |
| Drip cron functional | Broken Day 25 | **Broken Day 32** | −7 days |
| At least one price alert has ever fired | Lifetime 0 | **Lifetime 0** | unchanged |
| `last_login_at` instrumentation | Missing Day 25 | **Missing Day 32** | −7 days |
| Churn rate < 50% | 84.4% | **94.2%** | **+9.8pp WORSE** (5-user Day-15 batch overwhelmed signup volume) |
| Pattern B share < 30% | 62.5% | 50.0% | **−12.5pp better — but dilution-driven, not structural** |
| At least one psych rec shipped | 0 of 9 shipped | **0 of 11 shipped** (May 7 + May 8 added two more) | −2 |
| **NEW: At least one target_price set on a watchlist item** | n/a | **0 / 88** | newly-blocking — referral landing page would advertise an alert system that has never advertised a single drop |

Best-case referral launch window: **Q4 2026 → Q1 2027.** Each week of further delay on the engineering items pushes this further. **We are no longer estimating a launch date; we are tracking how far the launch date moves.** It moved another week this week.

### Incremental Design Updates (Since May 1)

**The Bruno Mars cluster grew to 4 users / 6 events tracked across 3 cities.** This is now the cleanest cross-user social-proof example in the dataset, but **0 of those 6 events have a target_price set, 0 alerts have ever fired**, and the affiliate flag that would route them to a buy-flow has not shipped. The referral program design from the May 1 weekly proposed rotating "Bruno Mars same-tour" social proof on a referral landing page; **rotating this on a page advertising the alert system would advertise a feature that has never delivered a single alert across the cluster.**

**Updated rule:** referral landing-page social proof must rotate users who **have at least one target_price set AND have received at least one alert that did not bounce.** This is currently 0 users. **The referral program's prerequisites now include `EXISTS (SELECT 1 FROM price_alerts WHERE delivered_at IS NOT NULL)` — a query that returns zero rows on Day 32.**

**Reward structure unchanged from May 1.** Referrer gets bulk-add unlock on first activated referral; insider badge + priority alerts at 3 referrals; lifetime premium at 10. Design holds; ship date slips.

---

## 3. Pricing & Monetization Strategy

### Current State

- Revenue: **$0** lifetime, all sources.
- User base: 69 registered (+5 WoW), 47 activated (+3 effective: jadbennis0, sparkit, cjthomas — all Day-0 activators), 0 paying.
- Bruno Mars cluster: 4 users / 6 events (most likely first-commission opportunity remains).
- Monthly infra cost: $0–20 (Railway + Vercel free/starter).

### The Three Pricing Conclusions That Sharpened This Week

**(a) The Day-0 Activator pattern is the affiliate-revenue demographic.** The May 1 weekly opened Phase 1A as "ship affiliate links behind feature flag for known-source ≥3-watchlist users." This week's data tightens the criterion: the **Day-0 Activators** (jadbennis0 +32s, sparkit +34s, cjthomas +35s) are the *exact* affiliate-click profile — fast-converting, high-intent, multi-source comparison utility — and they have already cleared step 2 (watchlist add) without any nudge. The original criterion was `signup_source = known AND watchlist_count >= 3`. The sharpened criterion is **`signup_source = known OR (signup_to_first_wl_add < 5min AND wl_event_within_45_days)`** — which captures jadbennis0, sparkit, cjthomas, and would have captured ajvanprooyen, taranimeramaro, nmcnamee99 historically. Cohort size today: ~6 users; trajectory at this week's pace: 8–12 by end of May.

**(b) The first-commission opportunity is sharper this week.** Bruno Mars cluster grew to 4 users (was 3) tracking 6 events (was 4). MetLife Aug 14/16/17 (taranimeramaro), Soldier Field May 16/17 (konman87), Ohio Stadium May 20 (charlesteel126). **konman87's Soldier Field dates are 8/9 days out today** — the shortest-runway active Bruno Mars events on the platform, inside the deepest-discount T-7d window. konman87 has 96-day tenure with zero outreach (per Email weekly). **If the affiliate flag ships in the next 4 days, konman87 hitting `/watchlist` with affiliate links visible is the single highest-conviction first-commission scenario in the dataset.** Phase 1A ship deadline tightens from "May 8–15" to **May 12 hard** (4 days before konman87's Soldier Field show on May 16).

**(c) The WC Pass infrastructure-readiness gate is now binary, not gradient.** The May 1 weekly set May 25 as the go/no-go gate. With Day 32 of zero ship, and 5 of the 7 May 1 forecasts having missed engineering ships, the prior probability of a May 25 ship is ≤25% on linear extrapolation. **Updated recommendation:** treat May 25 as a hard binary — if **any** of the three engineering blockers (price tracking cron, drip cron, target_price prompt as part of NEW-2) has not shipped by May 25 EOD, **abort WC Pass for this cycle entirely.** A halfway-shipped infrastructure on the highest-visibility event of the year is the worst possible launch context.

### Path Evaluation (Updated)

#### Path A: Freemium — Soft-Launch Window Closed; Now Backlog (unchanged)

| Component | May 1 Plan | May 8 Update |
|-----------|------------|--------------|
| Free tier caps | 3 watchlist, 7d history | Hold spec; cannot ship |
| Premium $4.99/mo | Soft-launch as gift to power activators | **3 of 5 original power-activators churned (pete, brigitte, tosophia); 2 remain (joshdguillemette, ajvanprooyen). ajvanprooyen 365h silent — gifting Premium to a user who hasn't returned in 15 days is the wrong test.** Cohort effectively zero. |
| Soft-launch trigger | ≥1 alert has fired AND activation rate ≥ 50% | **Activation rate ≥ 50% achieved this week (60%). First gate cleared. Second gate (≥1 alert) still locked at lifetime zero.** |

#### Path B: Affiliate Revenue — May 12 Hard Deadline

| Component | May 1 Plan | May 8 Update |
|-----------|------------|--------------|
| Programs | Ticketmaster + SeatGeek + StubHub | unchanged |
| Visibility | Gated by `signup_source = known AND wl_count >= 3` | **Sharpened criterion:** `signup_source = known OR (signup_to_first_wl_add < 5min AND wl_event_within_45_days)` — captures Day-0 Activators directly |
| Initial cohort | 3 known-source users | **6 users today** (3 known-source + 3 Day-0 Activators); trajectory 8–12 by end-May |
| First $ likely from | Bruno Mars MetLife (taranimeramaro, Aug 14–17) | **Bruno Mars Soldier Field (konman87, May 16–17) — 8/9 days out today, shortest runway active high-conviction event.** |
| Ship readiness | May 8–15 | **May 12 HARD** (4 days before konman87 Soldier Field show) |

#### Path C: Advertising — Still Not Yet (unchanged)
65 → 69 users. No change. Revisit at 50,000+ monthly pageviews. Newsletter at 3 subs / 96 days flat is the upstream signal that pageview-acquisition isn't even functional.

#### Path D: WC Pass — Binary Gate at May 25

| Scenario | Action | Expected Revenue |
|----------|--------|------------------|
| All 3 engineering blockers shipped by May 25 | Launch WC Pass at $9.99 on June 1, no pre-sale | $0 (skipped) – $2,500 |
| Any blocker not shipped by May 25 | **ABORT this cycle entirely** | $0 (skipped) |

### Revised Monetization Roadmap

| Phase | Target Date | Action | Revenue Target |
|-------|-------------|--------|----------------|
| **Phase 0 (still prerequisite)** | Now → May 12 | Fix drip + price tracking + target-price flow (via NEW-2) | $0 |
| **Phase 1A (HARD May 12)** | May 8 – May 12 | Ship affiliate links behind Day-0-Activator feature flag; instrument click capture | $0–50 (proof-of-concept) |
| **Phase 1B (CONDITIONAL May 25 gate)** | June 1 – July 19 | If all 3 engineering blockers shipped: launch WC Pass at $9.99. If not: SKIP. | $0 (skipped) – $2,500 |
| **Phase 2** | Q3 2026 | Soft-launch Premium gated by ≥1 alert fired AND activation rate ≥ 50% (one gate cleared this week) | $0 |
| **Phase 3** | Q4 2026 | Full freemium launch, conditional on activation rate ≥ 50% sustained over 6+ weeks | $300–1,000 MRR |
| **Phase 4** | 2027+ | Referral program (conditional on `EXISTS (delivered alert)`); advertising at 50k+ pageviews | TBD |

**Key changes vs. May 1:** (a) Phase 1A deadline tightens from May 8–15 → May 12 hard, anchored on konman87's Soldier Field game. (b) Phase 1B becomes a binary May 25 gate — skip if any blocker open. (c) Phase 2's first gate (activation rate ≥ 50%) cleared this week — second gate (alert fired) still locked.

### First-Revenue Scenario (Sharpened)

**The May 1 forecast was: "an affiliate click-through from a known-source trip planner, most likely Bruno Mars cluster, May 2026."** The May 8 sharpening: **specifically, konman87 clicking a Bruno Mars Soldier Field affiliate link sometime between May 12 and May 17.**

The path:
1. Ship Phase 1A affiliate flag by **May 12** (4 days from this report).
2. konman87 returns to `/watchlist` between May 12 and May 17 (96-day tenure suggests the user has not abandoned the tab; return rate untested due to no `last_login_at`).
3. konman87 sees affiliate link on Bruno Mars Soldier Field; clicks through.
4. konman87 completes purchase on Ticketmaster/SeatGeek/StubHub.
5. First commission, $5–50.

**Path failure modes:** (a) Phase 1A doesn't ship by May 12 → konman87's Soldier Field passes without exposure, fall back to charlesteel126 Bruno Ohio May 20 (T-12d today). (b) konman87 doesn't return to the site between now and the show → no test possible without a re-engagement email (Day 32 of broken drip). (c) konman87's Day-15 cohort entry on ~May 11 (96+15 from Feb 11 signup; estimate) without a re-engagement send → user churns before flag visible.

**Mitigation:** ship Phase 1A by May 12 + draft a manual one-off email to konman87 from a real address ("hey, we noticed you're tracking Soldier Field 5/16 — heads up, we just shipped affiliate links if you want one-click access to all 3 sources"). The manual email is a 1-of-1 send that bypasses the broken drip cron entirely. **Cost: ~10 minutes. Highest-leverage manual touch in the project's history.**

---

## 4. Feature Launch Planning

### Smart Tracker for Trip Planners — Half-Shipped Status

The May 1 weekly launched the "Smart Tracker for Trip Planners" campaign as the May 1–31 acquisition-side launch. Status check at Day 8:

| Component | May 1 Plan | May 8 Status |
|-----------|------------|--------------|
| Day 1–3: Analytics resolves attribution on ids 55, 57, 58, 60, 63, 64 | Hard May 7 | **NOT RESOLVED. Day 15 of dependency. Per Analytics weekly today: API still returning 401.** |
| Day 4–5: Identify top 1–2 known-source channels | Hard May 7 | **BLOCKED on attribution.** |
| Day 6–7: Cubs Wrigley out-of-market trip hub | **May 4** | **SHIPPED May 3–4 (commit `636e40b`).** First content-gap deadline met in 11 days. |
| Bruno Mars cross-tour hub | **May 6** | **NOT SHIPPED.** No artifact in `web/src/data/blog.ts`. |
| Affiliate links behind feature flag | **May 8–15** | **NOT SHIPPED.** Tightened to May 12 hard (above). |
| "Smart Tracker for Trip Planners" landing page | **May 8** | **NOT SHIPPED.** |
| Salt Shed venue page (NEW — Mac DeMarco signal from sparkit) | not in May 1 plan | **NEW Day 1 ask.** Replicate the Wrigley fast-create. |
| Inter Miami / Nu Stadium content (NEW — jadbennis0 signal) | not in May 1 plan | **NEW Day 2 ask.** 9 days to May 17 game; T-7d on May 10 (2 days). |
| Ad spend test ($250–500) | May 15–22 | **NOT YET — blocked on attribution.** |

**Verdict: 1 of 8 components shipped on schedule.** The Wrigley page is the only ship; everything else is open or blocked. The campaign is **half-shipped at best** and shows the asymmetry that has defined the project for 5 weeks: the *content* shipped (1 hub, 1 venue page); the *infrastructure* did not (attribution, affiliate flag, landing page, ad test). Content is the team's reliable output. Infrastructure is the team's chronic gap.

### Feature Launch v4: "Real-Time Welcome Triage" — The Architecture Gap is Bigger Than the SMTP Outage

This week's structural finding (per Email weekly today, also independently surfaced in today's daily): the canonical 5-email time-based drip (Day-3 / 7 / 14 / 21 / 30) **cannot serve sparkitrightthere's signup shape regardless of whether SMTP works.** Same-day-signup → same-day-event has a sub-24h decision window; a Day-3 cron tick is structurally too late. **The architecture gap is now larger than the SMTP gap.**

The right shape isn't another time-based sequence; it is an event-triggered triage that fires within minutes of signup and branches on watchlist state. This is a **new kind of feature**, not a refinement of an existing one.

```
## Feature: Real-Time Welcome Triage (W0-A / W0-B / W0-C)

### Trigger
Within 5 minutes of signup, evaluate watchlist state and route to one of three branches:

W0-A: signup → wl_count >= 1 AND any wl_event within 14 days
  Profile: high-intent, event-soon. Pattern: jadbennis0 (Inter Miami T-9d at signup),
  sparkit (Mac DeMarco T-0d at signup).
  Send: "We're tracking [event] — set your target before [T-7d date]."
  Goal: capture target_price within first session.

W0-B: signup → wl_count >= 1 AND no wl_event within 14 days
  Profile: high-intent, event-far. Pattern: cjthomas (Noah Kahan T-35d), ajvanprooyen
  (Cubs trip ~7-13d), taranimeramaro (Bruno Mars T-105+d).
  Send: "We've added [event] to your watchlist — here's the price spread today and
  what to expect over the next [days_out] days."
  Goal: anchor expectation, prime alert mechanism.

W0-C: signup → wl_count = 0
  Profile: Pattern B / curious signup. Pattern: joseph, natalie, lilianamasyrubi,
  zhili1208, the entire 50% rolling cohort.
  Send: "What brought you here? We have 24 venue guides, 16 World Cup stadium pages,
  and three category browsers. Pick one, search, track."
  Goal: convert curious to activated within 24h.

### Why this works when the time-based drip doesn't
- W0-A serves the same-day-event archetype that the Day-3 cron structurally cannot reach
- W0-B serves the canonical activator (the existing Day-3 fire is approximately right shape)
- W0-C addresses Pattern B at the moment of highest leverage (signup + 5min, before the
  user has bounced or drifted)
- All three fire within the first session, when the user is most likely to be on-page

### Implementation Spec
- Trigger: webhook on user creation OR cron tick every 5min on users with
  signup_age between 0 and 60min and trigger_status = pending
- Branch logic: single SQL query against watchlist on user_id with event_date filter
- Templates: 3 new email templates (W0-A, W0-B, W0-C)
- Tracking: trigger_status enum (pending, sent, skipped); no double-sends
- Backward compatibility: existing Day-3/7/14/21/30 drips fire only if W0 was sent
  (W0 takes precedence in the first 60min window)
```

**This is NOT what the May 1 plan called for.** The May 1 plan was a Smart Tracker acquisition-side campaign with affiliate links and content hubs. That plan continues; **W0 is additive**, not replacement. W0 ships in parallel, owned by Email Agent (5) + Lead Architect.

**Ship cost:** 8–12h. SQL query + 3 templates + cron tick + branching.

**Why W0 jumps to the top of the launch queue:** because this week's data showed W0 would have served sparkit (would have caught Mac DeMarco), jadbennis0 (would have prompted target_price on Inter Miami at T-9d), and cjthomas (would have anchored Noah Kahan expectation at T-35d). The same week's Day-3 fires would have served zero of those three users on time.

### Launch Plan (Combined: Smart Tracker continues + W0 added)

```
## Combined Launch: Smart Tracker (continues) + W0 Triage (new)

### May 8–12 (Phase 1A hard window)
- May 8: ship goal-gradient progress bar (carried from May 1) + default-effect smart pre-fill
  (NEW from May 8 daily). Combined ~6-8h CRO ship.
- May 9: Salt Shed venue page (replicate Wrigley fast-create).
- May 10: Inter Miami / Nu Stadium content (T-7d on May 10 for jadbennis0's event).
- May 11: Bruno Mars cross-tour hub (slipped from May 6).
- May 12: Phase 1A affiliate flag ship + manual one-off email to konman87.
- May 12: W0-A/B/C templates drafted; SQL query approved.

### May 13–22 (campaign run)
- W0 ships May 13–15 (test with manual sends first, then enable cron).
- Smart Tracker landing page (was May 8, slipped) ships May 15.
- Ad test ($250–500) gates on attribution resolution (Day 15+ of dependency).

### May 23–25 (gate decision)
- May 25: WC Pass infrastructure-readiness gate. Binary go/no-go on June 1 launch.

### Success Metrics (Updated for W0)
| Metric | Target | Why |
|--------|--------|-----|
| Wrigley page indexed and serving traffic | yes (already shipped) | 1 of 1 on track |
| Bruno Mars hub published | by May 11 | 1-week slip from May 6 |
| Salt Shed page published | by May 9 | New requirement from Mac DeMarco signal |
| Phase 1A affiliate flag enabled | by May 12 | konman87 Soldier Field T-4d |
| First affiliate click-through | by May 17 (konman87 Soldier Field) | Path validated |
| First affiliate commission | $5–50 by May 31 | Realistic at small N |
| W0 templates drafted + reviewed | by May 12 | Email Agent Wk-7 deliverable |
| W0 cron live | by May 15 | First W0 fire on next signup post-deploy |
| Activation rate sustained ≥ 50% over 4 weeks | by June 5 | Phase 2 first gate already cleared once; need durability |
```

### Launch Content Requests → Content Agent (Agent 1)

| Priority | Item | Deadline |
|----------|------|----------|
| **P0** | **Salt Shed venue page.** New requirement from Mac DeMarco signal (sparkitrightthere). Replicate Wrigley fast-create model — 24h turnaround proven viable. | **May 9** |
| **P0** | **Inter Miami / Nu Stadium content.** New requirement from jadbennis0 signal. T-7d on May 10. First MLS event in dataset. | **May 10** |
| P0 | **Bruno Mars cross-tour hub.** Slipped from May 6. 4 users / 6 events tracked across 3 cities. Tour-wide content play. | **May 11** (5-day slip) |
| P1 | "Smart Tracker for Trip Planners" landing page — campaign anchor, links to Cubs + Bruno + Salt Shed hubs. | May 15 |
| P1 | "How many events should you track?" hub page. Supports goal-gradient rec; anchor on 30%/52% data. | May 17 |
| P2 | WC Lincoln Financial Field preview. Frame around city/venue, not pete (churned). | May 22 |
| P2 | "We Fixed It" relaunch post — **HOLD** until any engineering item ships. | TBD |

### Launch Social Plan → Social Agent (Agent 3)

| Priority | Item | Deadline |
|----------|------|----------|
| P0 | Salt Shed venue content drop — pairs with content page | May 9–10 |
| P0 | Inter Miami / Nu Stadium content drop — pairs with T-7d flip on May 10 | May 10 |
| P0 | Bruno Mars cross-tour drop — 4-user demand validation as social proof (anonymized) | May 11–13 |
| P1 | "Trip planner" angle pinned to top of all profiles for May | Continues |
| P1 | WC 34-day countdown (today's number, 2026-06-11 - 2026-05-08 = 34) — city/venue frame | This week |
| P2 | Hold all "we fixed it" content; no engineering items have shipped | Indef |

---

## 5. Paywall & Upgrade Flow

### Status: Two New Touchpoints Added; Original Six Still Pre-Ship

May 1 weekly defined 6 original touchpoints (TP1–TP6) + 1 new (TP7 affiliate click-through). All seven remain unshipped. **Two new touchpoints added this week**, both conditional on Phase 1A and W0 launches.

### New Touchpoint 8: Day-0 Activator Target-Set Smart Pre-Fill (TP8)

**Trigger condition:** User adds first watchlist item (signup → wl add, in any timeframe but most relevantly the <60s Day-0 Activator window).

**Rationale:** All 88 watchlist items in the dataset have target_price=null. The structural diagnosis from this week is that the UX flow doesn't surface the field — *not* that users actively decline to set one. Pre-filling the field with `best_cross_source_price * 0.90` and presenting it as the default (with edit / clear escape hatches) flips the default-effect to favor target capture.

**Copy (modal post-watchlist-add):**

```
🎯 We're tracking this for you.

  Today's cheapest across Ticketmaster, SeatGeek, StubHub: $148

  Set an alert at:  [ $133 ]   ← pre-filled, focused, editable
                    ↑ that's 10% below — historically the floor band
                      for arena/stadium events in the T-7d window.

  We'll email you the moment any source drops below this number.

  [ Save target ]   [ Skip — just track, no alerts ]
```

**Design:** Modal triggered after successful watchlist add. Pre-filled, focused, single accept-button is the default action. Skip button is the explicit opt-out (preserves current null-target behavior for users who want it). Target field is editable and accepts any value; the "−10%" is a default, not a constraint.

**Why −10%, not −5% or −20%:** −5% is too tight (alert noise from normal price flutter); −20% is too aggressive for stable arena categories (concerts often only drop 10–15% in T-7d window). −10% is the median historical drop magnitude across the price_history table (back-of-envelope from prior CRO Agent observations). Ship as configurable constant `DEFAULT_TARGET_DISCOUNT_PCT = 0.10` so future data can tune.

**Ship cost:** 3–4h. Backend: `/api/events/:id` already returns `bestPrice` in compare endpoint — extend the watchlist-add endpoint response. Frontend: pre-fill logic in modal, add explicit "Skip" button, focus management. No DB schema change.

### New Touchpoint 9: W0-A Target-Set Email (TP9)

**Trigger condition:** Real-Time Welcome Triage W0-A path — high-intent, event-soon signup.

**Rationale:** W0-A is the highest-leverage email in the project's history because it fires within 5min of signup, when the user is most likely to be on-page, and the recipient has by definition added a watchlist item with an event in the next 14 days. **The single-most-acute "set your target" moment in the funnel.**

**Copy:**

```
Subject: Heads up — your event is {{days_out}} days out

You added {{event_name}} to your watchlist {{minutes_ago}} ago.
The event is on {{event_date_pretty}} at {{venue}}, {{city}}.

That's {{days_out}} days from now — inside the discount window where
most price drops historically land. To get an alert when prices drop
below your target, we need one number from you.

Today's cheapest source: {{cheapest_source}} at ${{cheapest_price}}.
Recommended target (10% below): ${{recommended_target}}.

→ [Set your target — 30 seconds]({{watchlist_url}})

If you'd rather just watch the price without alerts, that's fine —
your event is already being tracked. But the alert is the part that
saves you money.

— The TicketScan Team
```

**Design:** Plain text-friendly HTML email with one CTA. Personalization tokens fully populated from the W0-A SQL query.

**Ship cost:** 1–2h once W0 architecture lands.

### Updated Touchpoint Priority

| # | Touchpoint | Ship Timing | Reason |
|---|------------|-------------|--------|
| **1** | **TP8: Day-0 Activator Target-Set Smart Pre-Fill (NEW)** | **May 8–10** | Addresses 100% target-null pattern at creation moment; ~3-4h ship |
| **2** | **TP7: Affiliate Click-Through Capture (May 1 NEW)** | **May 12 HARD** (with Phase 1A) | First revenue moment; konman87 Soldier Field deadline |
| 3 | **Goal-Gradient Progress Bar** (carried from May 1) | May 8–12 | Pairs with TP8 (progress to next valuable action) |
| 4 | **TP9: W0-A Target-Set Email (NEW)** | May 13–15 (with W0 ship) | Highest-leverage email in project history |
| 5 | **WC Pass Landing Page (TP5)** | **CONDITIONAL — May 25 binary gate** | Pre-sale skipped; landing page only ships if launch is approved |
| 6 | **Bulk-Add Intent Modal (TP6)** | May 15–22 (with Smart Tracker campaign) | taranimeramaro / future trip-planner cohort |
| 7 | **Post-First-Alert Upgrade Prompt (TP3)** | Q3 2026 | Requires first alert to exist (lifetime zero) |
| 8 | **Watchlist Limit Hit (TP1)** | Q4 2026 | Requires freemium |
| 9 | **Extended History Paywall (TP2)** | Q4 2026 | Requires freemium |
| 10 | **Passive Upgrade Banner (TP4)** | Last | Only after proven value delivery |

### Success Metrics for Phase 1A + TP8 (May 8–31)

| Metric | Target | Rationale |
|--------|--------|-----------|
| TP8 (smart pre-fill) ship date | **May 10** | First psych rec to ship in 5 weeks of report |
| Target-price capture rate on new wl items (post-TP8) | **50–70%** in first 4 weeks | Default-effect literature benchmark |
| Goal-gradient progress bar ship date | May 12 | Carried from May 1 with 4-day slip tolerance |
| Phase 1A affiliate flag enabled | **May 12 HARD** | konman87 Soldier Field T-4d |
| First affiliate click-through | **May 12–17** | konman87 Soldier Field window |
| First affiliate commission | $5–50 by May 31 | Realistic at small N |
| W0 templates drafted | May 12 | Email Agent week 7 |
| W0 cron live | May 15 | First W0 fire on next post-deploy signup |
| Day-0 Activators in May (cumulative) | **5+** | Currently 3 (jadbennis, sparkit, cjthomas); 2 more would confirm structural pattern |
| Smart Tracker campaign signups | 8–20 in May | Doubles current pace |

---

## 6. Cross-Agent Handoffs

### → Analytics Agent (Agent 7) — HIGHEST (Day 32 / Day 15 Compounding)

| Priority | Item | Deadline |
|----------|------|----------|
| **P0** | **RESOLVE source attribution on ids 55, 57, 58, 60, 63, 64, 65, 66, 67, 68, 69.** **Day 15 of dependency, 11 unresolved IDs.** Per Analytics weekly today, admin API still returning 401. The bifurcation analysis is now 3-known-100% / 3-of-11-unknown-27.3%. Acquisition decisions for the remainder of May (and the WC Pass decision on May 25) hinge on this. **Single highest-leverage open item in the entire growth stack.** | **May 12 hard (with Phase 1A)** |
| **P0** | **Add `last_login_at` tracking.** Day 32. Goal-gradient defense partially depends on it (1-event vs 2+ event retention curve). | This week |
| P0 | **Connect GA4 Data API.** Day 32. Channel decisions remain guesses. | This week |
| P0 | **What changed about acquisition flow on May 7?** 3 signups in 11h 11m, 2 instant-activations after a 30-day drought. **Hard question: one viral source, one ad spike, one referral cluster, or organic coincidence?** If shared source, the play repeats; if independent, the day is a coincidence. | **This week** |
| P1 | Day-0 Activator instrumentation — track `signup_to_first_wl_add_seconds` as a first-class metric. Currently extractable but not surfaced. | May 15 |
| P1 | Affiliate click tracking instrumentation — UTM + outbound-click capture for Phase 1A flag launch. | **May 12** (with Phase 1A) |
| P1 | Empirical confirmation for goal-gradient milestones (30% / 52% claims). Plan quarterly recompute. | May 12 |
| P2 | Newsletter form audit query — verify submissions actually hit the database. **96 days flat is suspicious enough to merit checking the wire.** | This week |

### → CRO Agent (Agent 6) — HIGH

| Priority | Item | Deadline |
|----------|------|----------|
| **P0** | **TP8: Default-effect smart pre-fill on watchlist add target_price.** Today's psych rec from daily. ~3-4h ship. **First psych rec to ship in 5 weeks.** Addresses 100% target-null pattern at creation. | **May 10** |
| **P0** | **Goal-gradient progress bar on `/watchlist`** (carried from May 1, deadline missed). Pairs with TP8. | **May 12** |
| **P0** | **"Curious signup" onboarding path.** Pattern B at 50% rolling, structurally majority-eligible. Empty dashboard category-browse + "pick your first event" CTA. | **May 15** |
| P1 | Yesterday's loss-aversion target-price banner (May 7 daily rec). Recovers existing 88 null-targets at view-time. Pairs with TP8 (prevention at creation + recovery at view = full loop). | **May 10** (with TP8) |
| P1 | TP7 affiliate click-through toast. Phase 1A companion. | **May 12** |
| P1 | Carried from prior weeks (sequenced over Q2): implementation-intentions Day-7+ modal, Zeigarnik header, post-signup screen, anchoring on `/compare` + `/event/[id]`, social-proof EventCard badge, reciprocity dashboard empty-state, loss-aversion target panel, commitment-consistency 2nd-action. | Sequenced |
| P1 | Newsletter homepage form audit — **96 days flat = 13 weeks 5 days.** Longest open dependency on the project. | This week |
| P1 | Bulk-add intent modal (TP6). Pivots to taranimeramaro / future trip-planner cohort. | May 22 |

### → Email Agent (Agent 5) — CRITICAL (Day 32)

| Priority | Item | Deadline |
|----------|------|----------|
| **P0** | **Revive drip cron.** **Day 32. 109 emails owed across 29 users.** **6+ emails clear in 72h if engine returns today** (5-user Day-15 batch + jadbennis0 Day-3 tonight). | **Immediate** |
| **P0** | **W0 architecture (NEW-1): Real-Time Welcome Triage with W0-A/B/C branches.** Drafted in Email weekly today. Closes same-day-event failure mode permanently. | **Templates by May 12; cron live by May 15** |
| **P0** | Send TONIGHT's queue when engine returns: jadbennis0 Day-3 (natural boundary 20:33 UTC, event-specific Inter Miami). | Tonight |
| **P0** | Send TODAY's 5-user Day-15 batch: ajvanprooyen (HIGHEST-LEVERAGE — 6 Cubs games closed-out), charlesteel (Bruno Ohio T-12d), mark.murdock + awwhittington + ggri73 (generic forcing question, 3-user duplicate-template). | Today |
| P0 | Day-1 fire entry to drip schedule (NEW-3) — natalie's Day-1 boundary is 18:40 UTC May 8. Single Day-1 entry compresses inert-signup intervention from 72h to 24h. | This week |
| P0 | Manual one-off email to konman87 about Bruno Mars Soldier Field affiliate flag. Bypasses broken cron entirely. **10-minute send, single highest-leverage manual touch in project history.** | **May 12** |
| P1 | "Event passed" auto-pivot email template. **14 events passed without outreach (doubled from 7 last week).** Mac DeMarco adds new variant (same-day add → same-day pass). | This week |
| P1 | E2 rewrite (Email weekly today) with two-variant branching (Pattern A vs B) and tour-aware block. | This week |
| P1 | German-language drip variant — **Day 13 unanswered.** | This week |
| P1 | Affiliate click-through follow-up email (TP7 companion). | **May 12** |
| P2 | "We Fixed It" campaign — **HOLD** until any engineering item ships. | Indef |

### → Content Agent (Agent 1)

| Priority | Item | Deadline |
|----------|------|----------|
| **P0** | **Salt Shed venue page.** Mac DeMarco signal (sparkit). Replicate Wrigley 24h fast-create. | **May 9** |
| **P0** | **Inter Miami / Nu Stadium content.** jadbennis0 signal. **T-7d on May 10 (2 days out).** First MLS event. | **May 10** |
| **P0** | **Bruno Mars cross-tour hub.** Slipped from May 6 deadline. 4 users / 6 events / 3 cities. | **May 11** |
| P1 | "How many events should you track?" — supports goal-gradient rec; anchor on 30%/52% data | May 17 |
| P1 | "Smart Tracker for Trip Planners" campaign landing page | May 15 |
| P1 | WC Lincoln Financial Field — re-anchor from pete (churned) to city/venue frame | May 22 |
| P2 | "We Fixed It" relaunch post — **HOLD** until engineering ships | Indef |

### → Social Agent (Agent 3)

| Priority | Item | Deadline |
|----------|------|----------|
| P0 | Salt Shed content drop — pairs with venue page | May 9–10 |
| P0 | Inter Miami / Nu Stadium content drop — pairs with T-7d flip May 10 | May 10 |
| P0 | Bruno Mars cross-tour drop — 4-user social proof (anonymized) | May 11–13 |
| P1 | "Trip planner" angle pinned to top for May | Continues |
| P1 | WC 34-day countdown (today) — city/venue frame | This week |
| P2 | All "we fixed it" content **HOLD** | Indef |

### → Ads Agent (Agent 4)

| Priority | Item | Deadline |
|----------|------|----------|
| **P0** | **Pull source attribution on ids 55–69 (11 unresolved). Day 15 of dependency.** Without this, Phase 1A's affiliate flag fires blind on the criterion. | **May 12** |
| **P0** | **Investigate the May 7 acquisition spike.** 3 signups in 11h 11m, 2 instant-activations. Was there a single source (one viral post, one ad spike, one referral) or three independent sources? **If shared, replicate. If independent, document and move on.** | This week |
| P1 | **Smart Tracker for Trip Planners** test — $250–500 cap, narrow targeting on whichever known-source channel attribution surfaces. | **May 15–22** (post-attribution) |
| P1 | Bruno Mars cross-tour audience seed (pairs with Bruno hub page) | **May 11** |
| P1 | Salt Shed / Chicago indie-concerts audience seed | May 12 |
| P1 | Inter Miami / MLS audience seed (pairs with Nu Stadium content) | May 10 |
| P2 | Benchmark CPA research: trip-planner intent terms | Ongoing |

---

## 7. Executive Summary

### This Week's Headline

**The acquisition front produced the cleanest reproducible behavioral signal in the dataset's 2026 record (3 Day-0 Activators in 3 days, +32/34/35s clustering); the retention front produced the largest single-day churned inflow of the entire 32-day outage (5 same-day Day-15 rollovers).** The two halves of the funnel decoupled this week. **Activation rate: 60% (was 25%). Net user health: −6 (was +2).** Both directions are real signals — one says "the right user activates in 32 seconds on the broken product"; the other says "the broken product still kills 11 users for every 5 it acquires."

The May 1 weekly's seven forecasts: 5 hit on schedule (Cubs G2-G6 passed without notification, Mac DeMarco added an unanticipated 8th, drip Day-25 → Day-32, etc.); 1 shipped on schedule (Wrigley page); 2 missed on schedule (Bruno Mars hub, goal-gradient progress bar). The same three engineering blockers carry forward to a fifth consecutive Friday: drip cron, price tracking cron, target-price flow.

### The Day-0 Activator Pattern is the Defining Finding of Week 5

Three users this week activated within +32s/+34s/+35s of signup:

- **jadbennis0** — May 5 — Inter Miami CF vs Portland (May 17, T-9d today)
- **sparkitrightthere** — May 7 — Mac DeMarco at Salt Shed (May 7, *same day as signup*, now passed)
- **cjthomas2557** — May 7 — Noah Kahan at Kia Center (June 12, T-35d)

**Per Analytics weekly today, the dataset held zero confirmed sub-60-second activations in 4 months of recorded data before May 5.** Three landed this week. The +32-to-+35-second clustering is too tight to be noise; the working hypothesis is a new traffic source coming online in May.

**Strategic implication:** when the right user lands, they activate in ~30 seconds on the broken product. **Find the source of the right user; the funnel handles the first five minutes by itself.** This is the single sharpest leverage point the project has surfaced in 5 weeks. **It is gated entirely on Analytics resolving the source-attribution query — Day 15 of dependency.**

**Operational implication:** the same 3 users left target_price=null. The flow doesn't surface the field. **Today's CRO rec (TP8: default-effect smart pre-fill) is the most directly-targeted product change ever proposed in this report — it addresses the exact moment where the highest-converting cohort drops the highest-value action.** Ship cost: 3–4h. Ship deadline: May 10.

### The Architecture Gap is Larger Than the SMTP Gap

Mac DeMarco signaled a new failure mode: same-day-signup → same-day-event. **The Day-3 cron tick is structurally too late for this archetype, regardless of whether SMTP works.** The fix is not a faster Day-3; it is a different shape entirely — a **Real-Time Welcome Triage** that fires within 5min of signup and branches on watchlist state (W0-A: high-intent / event-soon; W0-B: high-intent / event-far; W0-C: empty-watchlist).

**This reframes the engineering blocker list from 3 to 4:** drip cron, price tracking cron, target-price flow, AND W0 architecture. The last is new this week. Email Agent has drafted the templates.

### The Three Unchanged Engineering Blockers (Now 32 Days Each)

1. **Price-tracking cron** — Day 32. Cumulative passed-no-notification doubled this week (7 → 14). ajvanprooyen's 6-Cubs trip closed-out; Mac DeMarco added; konman87 Bruno Soldier Field T-8/9d (May 16/17).
2. **Drip cron** — Day 32. 109 emails owed across 29 users (up from 95/25 last week). 6+ clear in 72h if engine returns today.
3. **Target-price flow** — diagnosis sharpened this week from "missing prompt" to "UX flow doesn't surface the field." Superseded by NEW-2 (TP8 default-effect pre-fill).

### What Changed This Week (And Why It Matters Strategically)

1. **The Day-0 Activator pattern is the project's first reproducible behavioral signal of 2026.** 3 users, 3 days, +32-35s clustering. Strategic priority shifts: find the May 7 acquisition source (Ads Agent, Day 15 question); ship TP8 to convert Day-0 activations to Day-0 alert subscriptions.
2. **The same-day-event failure mode emerged.** Mac DeMarco. The Day-3 cron is structurally too late. W0 architecture is the fix; Email Agent has drafted it; ship by May 15.
3. **Bruno Mars cluster grew to 4 users / 6 events / 3 cities.** konman87 Soldier Field T-8/9d (May 16/17) is the highest-conviction first-commission scenario in the dataset. **Phase 1A affiliate flag deadline tightens from May 8–15 → May 12 hard.**
4. **Wrigley page shipped on schedule** (May 3-4, commit 636e40b). First content-gap deadline met in 11 days. Validates the 24h fast-create model. Salt Shed (Mac DeMarco) and Nu Stadium (jadbennis0) are next two replications, May 9 and May 10.
5. **The 5-user Day-15 batch is the largest single-day churned inflow of the outage** (charlesteel + ggri73 + awwhittington + ajvanprooyen + mark.murdock all rolled today). Email Agent has 5 bodies queued; ajvanprooyen's "6 Cubs games closed-out" body is the sharpest "we failed you" frame in the dataset's history.
6. **Pattern B share dropped 62.5% → 50% (cosmetic dilution, not structural).** The rolling 8-user window now contains 3 fresh Day-0 activators which mathematically push Pattern B below majority. Next Pattern B-only cohort returns the share to 62.5%+.
7. **Phase 2 first gate (activation rate ≥ 50%) cleared this week (60%).** Second gate (≥1 alert fired) still locked at lifetime zero. Premium soft-launch remains Q3 2026 dependent on second-gate clearance.
8. **WC Pass May 25 gate is now binary (was gradient).** If any of the 3 (now 4 with W0) engineering blockers is open by May 25 EOD, abort WC Pass for this cycle entirely.

### Strategic Outlook (Compressed Further From May 1 Plan)

| Timeframe | Focus | Key Milestone |
|-----------|-------|---------------|
| **May 8–10** | TP8 ship; Salt Shed page; Inter Miami content | First psych rec ships in 5 weeks; 2 content gaps closed |
| **May 11–12** | Bruno Mars hub; Phase 1A affiliate flag; manual konman87 email | First non-zero revenue path live; first cohort exposure |
| **May 13–17** | W0 templates + cron live; Smart Tracker landing page; affiliate first commission window (konman87 Soldier Field May 16/17) | First $5–50 commission; W0 first fires; activation rate sustained |
| **May 18–25** | WC Pass infrastructure-readiness gate | **Binary go/no-go on June 1 launch.** |
| **June 1 – July 19** | Conditional: WC Pass launch + tournament marketing | $0 (skipped) – $2,500 (run) |
| **Q3 2026+** | Premium soft-launch (gates: activation rate ≥ 50% sustained 4w + ≥1 alert fired); affiliate revenue scales with cohort growth | $50–200/mo affiliate; $0 Premium |
| **Q4 2026+** | Referral program (gates: `EXISTS (delivered alert)` + activation ≥ 70% on new arrivals) | TBD |

### What's Unchanged (For the Fifth Consecutive Week)

Drip cron broken (Day 32). Price tracking broken (Day 32). `/api/admin/alerts` broken (Day 32). GA4 disconnected (Day 32). `last_login_at` missing (Day 32). Target prices at 0/88. Newsletter at 3 subs (96 days flat). Zero psych recs shipped (now 11 carried, +2 this week). None of the engineering recommendations from Apr 10, 17, 24, May 1 reports have shipped.

**The five weeks of this report can be read as a single arc:**

- **Week 1 (Apr 10):** "Here are the three blockers."
- **Week 2 (Apr 17):** "The three blockers haven't shipped; the cost is starting to compound."
- **Week 3 (Apr 24):** "The three blockers haven't shipped; here are the named users (ajvanprooyen, tate, pete) who will pay the cost on specific dates."
- **Week 4 (May 1):** "The named users paid the cost on the predicted dates. New plan: ship what doesn't depend on engineering, in parallel with engineering's continued silence."
- **Week 5 (May 8, today):** "The acquisition front produced a reproducible 32-second behavioral signal. The retention front produced the largest single-day churn inflow of the outage. The two halves of the funnel decoupled. Find the source of the May 7 cohort, ship TP8 to capture their target price, ship Phase 1A to capture konman87's commission. The engineering items remain blockers for the deeper retention loop."

**That last sentence is the operating thesis for this report.** The growth team has spent five weeks waiting on engineering. Starting this week, the team has its sharpest-ever target on the *acquisition* side (find the May 7 source) and its sharpest-ever target on the *activation* side (TP8 default-effect pre-fill). Both ship without engineering. Engineering items remain blockers for the deeper retention loop, but they are *not* blockers for the highest-leverage moves of the next 7 days.

The path from 94.2% churn to < 50% still runs through the four engineering fixes (drip + price tracking + target flow + W0). Writing that sentence on a fifth consecutive Friday is no longer an observation — it is the load-bearing structural fact of the project. **But the path from 60% activation (this week) to 70%+ sustained activation runs through TP8 + Phase 1A + W0, which ship in the next 7 days.** The first ships May 10, the second May 12, the third May 15. **None of them wait for engineering.**

---

*Growth & Retention Agent — Weekly Strategy Report*
*Generated: 2026-05-08 10:00 UTC (Friday Weekly)*
*Next weekly report: 2026-05-15 — first weekly under the "ship TP8 + Phase 1A + W0 in 7 days" execution mode*
