# Growth & Retention — Weekly Strategy Report
**Week of May 23 – May 29, 2026**
**Agent 8: Growth & Retention | Eighth Weekly Report**

> **Skill availability note (Week 8).** The `churn-prevention`, `referral-program`, `pricing-strategy`, `launch-strategy`, `paywall-upgrade-cro`, and `marketing-psychology` skills named in the agent spec remain not installed in this runtime — 8th consecutive Friday on the same gap. Report composed from this week's daily growth dashboards (May 23 → May 29), today's Analytics weekly (Agent 7), today's Email weekly (Agent 5, triage shape — Section 6 collapse continued for 2nd consecutive week per the 5/22 conditional), the CRO weekly + 4 sister docs from May 25 (Agent 6), the Social/Ads/Content weeklies from May 25, and direct frontend/admin probes where the documented `ADMIN_SECRET` key still returns 401 (**Day 29** of the rotate-or-document regression — Analytics weekly today escalates this as Day 29 vs Day 22 last Friday).

---

## 0. Last Week's Forecast vs. This Week's Outcome

The May 22 weekly named 13 forecasts/deadlines for the May 23 – 29 window. Outcome:

| Forecast / Deadline (May 22) | Outcome (May 29) | Verdict |
|---|---|---|
| "NEW-1 Implementation-intention 'Set a target by [time]' CTA (Gollwitzer 1999) — lowest-cost fix in 14-stack at ~3-5h; ENGINE-INDEPENDENT; rescues zhouyilin Game 3 tonight on ship." | **Did not ship.** Game 3 played May 22 ~02 UTC silent → permanent-loss event **#5**. CRO weekly today carries the same 14-stack (now expanded to 16 with today's "data-loss-as-social-proof" addition); zero ships in 8 weeks. | **Missed; rescue window closed inside 12h of last report.** |
| "NEW-2 Harry Styles MSG residency page + cross-user concentration content surface." | Did not ship. **Day 13 of the crystallized opportunity sitting un-converted.** No `/concerts/harry-styles-msg-residency` route in `web/src/app/`. No Harry Styles MSG social posts in May 18-24 (per Social weekly 5/25). | **Missed for 13th consecutive day.** |
| "NEW-3 Manual Game 3 target-prompt send to zhouyilinbest TODAY — ~5h window before doors. Highest-EV individual send in dataset history." | **Not sent.** Game 3 played silent. **zhouyilin's 1-item single-event lifecycle is now structurally closed**; user enters apology-only territory at +7d post-event today. | **Missed; user permanently demoted from active to apology-only.** |
| "NEW-4 Manual cjthomas2557 Day-15 + Noah Kahan T-21d compound send TONIGHT — first concurrent compound-send opportunity in dataset history (~22:49 UTC). One email carries both frames." | **Not sent.** Compound moment passed. cjthomas now Day-22 today; Day-21 missed silently May 28. **Noah Kahan still 14d out, target=null, T-7d fires June 5 — second compound moment opens then.** | **Missed first compound moment; second opens June 5.** |
| "NEW-5 Manual charlesteel Bruno post-event apology TODAY before 23:30 UTC. Apology window closes ~12h from report." | **Not sent.** Apology window expired May 23 ~03:30 UTC. **charlesteel platform-tenure now at 38 days with zero outreach lifetime; first 30-day-tenure user to receive zero touches across the whole post-signup arc.** | **Missed; apology window now hard-decayed.** |
| "NEW-6 Domain-class welcome routing. n=14 lifetime, zero contradictions. ~2h." | Did not ship. **This week's 2 signups (pika gmail + samvirsujan gmail) are both modern-domain class — both held 0 contradictions through Day-1.** **n=20 lifetime, modern 9/14 = 64.3%, legacy/opaque 0/6 = 0%; hypothesis remains unfalsified at expanded sample.** | **Missed; hypothesis at +n=2 still unfalsified.** |
| "Phase 1A-WC affiliate flag ships before June 7 HARD — anchored on kevinshall Match 11 T-7d." | 9 days from deadline. **Backend artifact in `index.js` still zero; no `affiliate_program_id`, no `affiliate_url`, no buy-link injection on `/event/[id]`. Trajectory: zero builds in 8 weeks; if pace holds, June 7 will be the third consecutive hard-deadline miss.** | **At-risk → near-certain miss.** |
| "Phase 1F cluster-affiliate frontend ship HARD August 19 — Harry Styles MSG cutekitten+tosophia trigger." | 82 days from deadline; not at-risk this week but no scoping moved either. Day 13 of crystallization. | **Open / not-yet-triggered.** |
| "WC vertical share of new wl adds: 40%+ sustain by end-May." | **0 of 2 wl adds this week were WC** (both NBA Finals MSG G3). **First WC-vertical-zero week since Email weekly began tracking the metric.** Cumulative WC share of total inventory: 18/110 = 16.4% (was 16.7% on 5/22 — first decrease in 6 weeks). | **Missed — first time gate failed at 0% inside the measurement window.** |
| "WC power-user count: 5+ by June 11 (currently 6 lifetime; 2 WC-themed)." | **6 power-users lifetime, unchanged.** 2 WC-themed (kevinshall + karin). karin crossed Day-14 May 28 ~28h HARD EDGE = **first power-user to enter churned-bucket.** **WC sub-cohort gate failed for 6th consecutive week.** | **Missed; WC power-user cohort now stalled at n=2 for 15 days.** |
| "Multi-session retention non-zero by July 1." | **0 of 193 user-day return-session tests across 16 cohorts.** n×1.48 expansion from last week's 130. Day-0-or-never cohort count: **16 of 16** (was 15/15). Strongest empirical pattern on the platform. | **Massively missed; signal hardened to measurement-grade.** |
| "Activation rate sustained ≥ 50% over 4 weeks." | Lifetime 60.00% today (was 59.09% May 22) — **broke back above 60% floor May 28 for first time in 8 days**. Counter at **1 of 4 weeks** toward Phase 2 gate 1. **First post-Apr rebound from a sub-60% floor in 2026.** | **Conditionally cleared (week 1 of 4); first recovery move in 12 weeks.** |
| "First affiliate click-through between May 17 and June 7." | Impossible — Phase 1A flag never enabled; engine dark Day 53. **All 3 plausible trigger users this week (kevinshall, karin, joseph) sat target=null with no click path.** | **Missed.** |

**0 of 11 ship deadlines executed.** **2 of 13 forecasted ratios cleared (activation rate week-1-of-4 recovery + domain-split unfalsified at expanded n).** **Eighth consecutive Friday of identical top engineering blockers (drip cron, price tracking cron, target-price flow, W0 architecture); this Friday adds the 6th (admin API regression Day 29 — Analytics agent now treats it as standard probe-failure baseline).**

**But the data this week did not stand still. The week opened with the lowest-energy 5-day stretch in dashboard history and closed with three structural firsts:**

- **The longest silence in dashboard history: 154 hours since last signup at the May 27 06:00 UTC snapshot.** Six consecutive zero-net-input calendar days (May 21 → May 26) with first crossings of the 96h, 100h, 120h, 130h, 140h, and 150h thresholds, all set in five consecutive days. The 7-day signup floor compressed from 0.86/day (May 24) → 0.57/day (May 25) → 0.43/day (May 27), breaking the sub-0.6, sub-0.5, and sub-0.5/day floor records back-to-back.
- **The first-ever lifecycle reactivation in dataset history landed May 27 19:29 UTC.** **joseph.g.nicolosi (User 65, signed up May 4 with 0 wl, dormant 23 days)** added an NBA Finals MSG G3 watchlist item. **The platform has never previously observed a user transition from "dormant 0-wl" to "active" — n=0 across all prior 16 cohorts.** Joseph's reactivation is categorically distinct from cold delayed activation (which remains 0-of-16 cohorts at week close); it is the first measurable data point on the "dormant pool reactivates at some non-zero base rate" hypothesis. Estimated base rate from this single observation: **~0.09% per dormant-user-day across the 36-user 0-wl pool.**
- **The fastest activator in dashboard history landed May 28 07:15 UTC at +19 seconds.** **samvirsujan@gmail.com signed up 07:15:05 UTC and added NBA Finals MSG G3 to her watchlist 19 seconds later** — beating zhouyilin's +20s record (set 8 days earlier May 20 and immediately broken on retention) by one second. **And like every prior fastest-activator record, samvirsujan's Day-1 retention failed at +27h: wl=1 unchanged, zero return-session, target=null.**
- **The 173-hour silence broke at 07:12:56 UTC May 28 with pika4696 (gmail) landing first, samvirsujan landing 02:09 minutes later (07:15:05 UTC).** Two signups in a 173-second band after 173 hours of silence; a **time-symmetric coincidence** that no prior dashboard week has produced. Both gmail-domain, both fresh accounts; pika held 0 wl through 28 consecutive hours (modal Pattern B); samvirsujan added the same event joseph added 12 hours earlier (NBA Finals MSG G3).
- **First-ever non-duplicate-event-ID multi-user 24h concentration on a single playoff fixture.** joseph (May 27 19:29 reactivation) + samvirsujan (May 28 +19s new) both landed on NBA Finals MSG G3 (event_id `G5diZ_7lOeIGI`, event_date 2026-06-16), arriving 11h 46m apart on the same event. **The platform now has TWO organic cross-user event concentrations in 12 days; both are MSG-anchored.** Cross-user concentration #1 (Harry Styles MSG residency, cutekitten + tosophia, May 16) holds at watch_count=2 across 7 nights; cross-user concentration #2 (NBA Finals MSG G3) opens at watch_count=2 in a single fixture.
- **Structural discovery: production divergence from `origin/main`.** Per Analytics weekly today and SEO daily Monday/Tuesday (Memo #5 / Memo #5b): the deployed Vercel build is **not the same code as `origin/main`**. Blog Article-schema patches sitting in the working tree are **already live on production** (verified across 3 blog URLs); the WC `lowPrice` patch in the **same** working-tree bundle is **NOT live**. **Files deploy through some path that bypasses `git main`.** This reframes 16+ consecutive Sunday/Monday "bundle frozen pending architect commit" escalations: the bundle is not frozen — it is selectively reaching production. **If Lead Architect identifies the deploy path, the publish-bottleneck may collapse from "multi-day commit cycle" to "30-minute reconciliation task."** Largest single-week structural finding in 2026.
- **AEW data-loss event #6 confirmed May 24** (joshdguillemette, Louis Armstrong Stadium, target=null, T-1d/event-day dark). **6 confirmed permanent-loss events across the past 17 days; at-risk-to-loss forecast track record now 6-of-6.** Next at-risk: Noah Kahan @ Kia Center June 12 (T-14d today, cjthomas2557 target=null).
- **Multi-session retention disproof scaled to measurement-grade: 0 of 193 user-day tests across 16 cohorts** (was 0/130 across 14 cohorts last week). **Day-0-or-never cohort count: 16/16 (was 15/15).** Joseph's Day-24 reactivation is *not* a counter-example — it's a categorically distinct surface (Day-N+ cold reactivation, n=1) running parallel to the failed Day-0 cold-retention surface.

**Operating thesis for this report (sharpened from May 22).** Last week's read held that "acquisition has structurally widened; retention has structurally failed at measurement-grade depth; they are accelerating apart." **This week the acquisition side compressed to its 2026 floor (2 signups, –78% WoW, lowest weekly inbound the platform has ever recorded), and the retention side held at 0-of-N across every cohort that closed a Day-1 window.** The **structural pattern (acquisition signal coexisting with zero retention) extended for a fourth consecutive week, but compressed in shape: the same gap, narrower channel.** Three structural firsts in one week (longest silence, first-ever reactivation, production-divergence discovery) set the agenda for next week's engineering-side priorities more sharply than any of the prior four weeks did. **The Day-0-or-never hypothesis is now the most reliable observation on the platform; the joseph reactivation is the only crack in the wall and the only signal we should engineer around in the next 7 days.**

---

## 1. Churn Deep-Dive

### Churn Metrics

| Metric | This Week (May 23 – 29) | Last Week (May 16 – 22) | Trend |
|---|---|---|---|
| Users churned (14d+ signup-age proxy) | **78** | 73 | **+5** (vlanza Day-14 cross May 28 13:20 UTC + nunemakerc Day-14 cross today 15:41 UTC + karin_ef1 Day-14 cross May 28 ~28h HARD EDGE — first power-user crossed + sparkit/natalie/cjthomas Day-21 cross batch May 28 = 5 net inside the window) |
| Churn rate (% of total registered) | **86.7%** | 82.4% | **+4.3pp** (denominator effect REVERSED: only +2 new signups failed to dilute the rate; absolute churned-cohort grew by 5) |
| Avg active days before churn (est.) | 2–7 days | 2–7 days | Flat (proxy unchanged; `last_login_at` Day 53 open) |
| Win-back email success rate | 0% | 0% | **Day 53 of zero sends.** Per Email weekly today: **backlog ≈105–110 owed sends across 20+ pending users (50 visible + 19–21 hidden behind 20-cap).** Cap regression Day 23. |
| **New users this week** | **2** | 9 | **−78% WoW**; **lowest weekly signup count since dashboard began tracking weekly.** May at 29 days = 26 signups, 0.90/day average. **Snaps the streak of two consecutive ≥9 weeks.** Both signups (pika 07:12 + samvir 07:15) landed inside a 173-second band on May 28 after 173 hours of silence. |
| Net user health (new − newly churned) | **−3** (2 new, 5 newly churned) | +4 | **−7 WoW; first net-negative week in 3 weeks.** |
| Signup → Activation rate (week) | **50% (1/2)** + **1 reactivator (joseph Day-24)** | 44% (4/9) | **+6pp on n=2; but the absolute activator count fell from 4 → 1.** The reactivator surface (joseph) is a parallel category, not a Day-0 activator. |
| Day-0 Activation rate (≤60s) | **50% (1/2)** (samvirsujan +19s — record) | 22% (2/9) | **+28pp on n=2** |
| Multi-add Day-0 (≥2 wl items at signup) | **0% (0/2)** | 22% (2/9) | **−22pp — first time since week of May 9-15 with zero multi-add Day-0 signal.** |
| **Lifetime activation rate (real users)** | **54/90 = 60.00%** | 59.09% | **+0.91pp — broke back above 60.00% floor May 28 for first time in 8 days.** Trajectory since Q2 start: 77% → 65% → 63% → 62% → 61% → 60% → 59% → **60.00%**. **First post-Apr rebound from a sub-60% floor in 2026.** Counter at week 1 of 4 toward Phase 2 gate 1 (was 0 of 4 last week). |
| Pattern B share (last 8 signups) | **62.5%** (5 inerts in last 8) | 62.5% | **Flat — structural problem unchanged from 5/22; carried 3 consecutive weeks.** |
| Target-price capture rate | **0% (0 of 110 items)** | 0% (0 of 108) | **53 days flat. +2 fresh items this week (1 from samvirsujan + 1 from joseph reactivation), both target-null. Both on the same event (NBA Finals MSG G3).** |
| Alerts ever fired | 0 | 0 | Lifetime zero (Day 53). **`/api/admin/alerts` returns `success:false, error:"Failed to get alerts"` — Day 4 of confirmed hard-fail in addition to Day 53 cumulative.** |
| **Cumulative passed-no-notification (events)** | **22 confirmed** | 19 confirmed (+2 in-flight) | **+3 confirmed in 7 days. Permanent data-loss events #20 SEC Session 6 (May 22, belder), #21 West Conf Finals Game 3 (May 22, zhouyilin), #22 AEW Double or Nothing (May 24, joshdguillemette) — all 3 in-flight on 5/22 locked, plus the new #22 AEW confirmation.** Next at-risk: **Noah Kahan @ Kia Center June 12 (cjthomas, T-14d today)** — would lock #23 if engine still dark June 13. |
| Multi-session retention (n=193, expanded from 130) | **0 / 193 = 0%** | 0 / 130 | **n×1.48 expansion; signal still measurement-grade zero across 16 cohorts.** Pika Day-1 FAIL May 29; samvirsujan Day-1 FAIL May 29 (wl=1 unchanged, zero return-session). **Day-0-or-never cohort count: 16/16 (was 15/15) — strongest empirical pattern on the platform.** |
| Watchlist items | **110, +2 this week** | 108 | **Lowest weekly add in dashboard history (tied).** **Both adds on the same event_id (NBA Finals MSG G3) — first-ever single-event capture of an entire week's inbound.** 0/2 WC vertical = first WC-vertical-zero week. |
| Newsletter subscribers | 3 | 3 | **117 days flat — 16w 5d.** Day 24 of consecutive zero-capture days per Email weekly today. **0/2 cross-conversion this week.** |
| **Drip emails owed (queue)** | **~105–110 across 20+ users** (Email weekly: "50 visible + 19–21 hidden behind 20-cap") | ~95–125 across 28–32 | **Net: cleared 0; backlog growth absorbed by API cap regression visibility gap.** Today's known Day-21 + Day-30 cluster alone is 5 emails inside an 11h11m envelope (sparkit + vlanza + natalie + cjthomas + zhili1208 already missed). |
| **Permanent data-loss events** | **6 confirmed (+1 this week: AEW #22)** | 3 confirmed (+2 in-flight) | **+1 confirmed in 7 days; rate decelerated vs prior week's +3 but `at-risk→loss forecast track record: 6-of-6 across past 17 days.`** |
| **Lifecycle-exhausted users (0/6 Day-1/3/7/14/21/30 sweeps)** | **5 confirmed + 1 incoming inside 6 days** | 1 confirmed + 4 incoming | **+4 net confirmed this week** (dr.altvater + ggri73 + awwhittington + ajvanprooyen + mark.murdock all crossed full traversal; Day-30 sweep complete for all 5). **lilianamasyrubi Day-31 carry-forward at zero return + zhili1208 Day-30 missed this morning ~03:16 UTC → 6th confirmed by tomorrow.** **First-ever 5-user lifecycle-exhausted cohort.** |
| **At-risk bucket (7–14d signup-age proxy)** | **10 users (was 6 last week)** | 6 | **+4 net.** Includes 0 power-users (kevinshall + karin both aged into churned this week — kevinshall Day-14 missed May 26, karin Day-14 missed May 28). **First time the at-risk bucket holds zero power-users since the bucket started tracking — they all aged out.** 10 at-risk = pika (Day 1), samvirsujan (Day 1), brock + keegan (Day 9), 9440111 (Day 11), eduardo (Day 11), lisallam (Day 12), belder (Day 13), cutekitten (Day 13), nunemakerc (Day 14 fires today). |
| **First-ever lifecycle reactivation (NEW METRIC)** | **1 confirmed (joseph.g.nicolosi Day-24)** | 0 | **NEW SURFACE — first time the metric has registered in 2026.** Joseph reactivated May 27 19:29 UTC with NBA Finals MSG G3 (target=null). **+1 base-rate disproof of the "dormant pool is dead" prior; ~0.09% per dormant-user-day single-observation estimate.** |
| **Days since last 30-day-tenure user received any touch** | **38 (charlesteel)** | n/a | **NEW SURFACE.** charlesteel signed up Apr 21 = 38 days lifetime; received zero drip emails, zero apology emails, zero outreach. Bruno Ohio passed silent #18; charlesteel becomes the longest-tenure-zero-touch user the platform has ever produced. |

> Day 53 without `last_login_at` instrumentation. Day 53 of zero alerts. Day 53 of zero drip sends. **Day 29 of admin API 401 regression** (was Day 22 — Analytics weekly today escalates the regression to "standard probe-failure baseline" methodology — meaning the regression is now older than the methodology that documented it). **The acquisition front COLLAPSED to dashboard-low (–78% WoW signups, –82% WoW wl adds), while the retention front held the line at 0-of-193 user-day tests across 16 cohorts. The first-ever reactivation (joseph) is the only positive signal in either direction; the +0.91pp lifetime activation rate is a denominator-thin recovery, not a structural one.**

### Churn Patterns (Twelve That Compounded, Three That Newly Crystallized)

**1. The activator-shape catalog gained a 6th archetype this week but lost depth.** Last week the catalog held 5 archetypes (WC stadium-loyalist, WC bracket-tracker, multi-add concert-residency, multi-add tournament-format-sport, single-add fast-intent NBA-playoffs). **This week added: single-add fastest-ever NBA-Finals shape (samvirsujan, +19s, single item).** samvirsujan's shape is structurally adjacent to zhouyilin's single-add NBA-playoffs but compressed to the absolute latency floor; **the catalog now has two NBA-playoff-class single-add archetypes 8 days apart, both Day-1 FAIL, both target=null.** **And lisallam fills a parallel 6th slot — single-add slower-intent concert.** The platform's archetype count grew from 2 → 5 → 6 in 3 weeks; the per-archetype retention proof of failure grew from 0/15 → 0/130 → 0/193 in the same window. **The widening of the catalog is now structurally decoupled from any retention signal; new shapes are being discovered faster than any can be retained.**

**2. All 6 activator shapes have now empirically failed retention. n=193, zero exceptions, 16 cohorts.** This week's tests:
- **samvirsujan (single-add fastest-ever NBA-Finals, +19s May 28):** Day-1 FAIL at +27h — zero return, wl=1 unchanged, target=null. **Beats zhouyilin's prior +20s record by one second and produces identical Day-1 FAIL result.** **The fastest-activator-immediately-fails-retention pattern is now empirically observed at n=2 with cleanest-possible timing precision.**
- **pika4696 (Pattern B fresh signup May 28, 0 wl carried 28h):** Day-1 FAIL at +27h — wl=0 unchanged. Categorically inert; aligns with brockedwardnelson + keegansmith18 from May 20 3-stack.
- **joseph.g.nicolosi (FIRST-EVER REACTIVATION, Day-24 May 27 +1 wl NBA Finals MSG G3):** Day-1 post-reactivation FAIL at +27h — wl=1 unchanged, target=null, zero return-session. **The reactivation event itself is a positive signal but the post-reactivation arc shape mirrors every other failed cohort.** The single observation does not yet distinguish "reactivation is a meaningful surface" from "reactivation produces the same null trajectory as cold activation."

Cumulative across the 16 cohorts: **0 of 193 user-day tests** (vs 0/130 across 14 cohorts last week — 1.48× expansion in 7 days). **Day-0-or-never cohort count: 16/16. The retention engine simply does not exist; the funnel converts intent without retaining it; new acquisition shapes do not produce a retention exception. The May 8 hypothesis "the right-shape user activates and never returns" is now the single most reliable observation on the platform across every cohort, shape, vertical, domain class, and acquisition speed tested.**

**3. The first-ever lifecycle reactivation is the only structurally new positive signal in 2026 and arrived on the same event-id as the platform's first non-duplicate-event-ID multi-user single-fixture concentration.** **joseph.g.nicolosi (User 65, signup May 4, 0 wl through 23 days) added NBA Finals MSG G3 May 27 19:29 UTC.** **samvirsujan added the same event 11h 46m later at +19s after signup May 28 07:15 UTC.** **The two users do not share a referral path, did not signup in adjacent batches, and have no acquisition-time overlap; what they share is event_id + venue.** **The implication for retention strategy:** the dormant pool may not be uniformly dead — there may be event-specific reactivation pulses tied to upstream demand signals (Knicks in playoffs, MSG as anchor venue, Eastern Conference Finals visibility). **The base-rate estimate from this single observation is ~0.09% per dormant-user-day across the 36-user 0-wl pool;** if the rate is even half that across the broader dormant base (currently ~36 users at signup ages ≥ 14 days), the platform could expect **~1 reactivation every 30 days at steady state.** **This is the single most important hypothesis to retest in the next 60 days.** If a second dormant-pool user reactivates inside 60 days, the surface is real; if not, joseph's reactivation downgrades to a once-off attribution coincidence.

**4. Six consecutive zero-net-input days (May 21 → May 26) is the longest acquisition silence in dashboard history.** Pre-May 21, the platform's longest comparable stretch was 3 days. **The 6-day stretch produced first crossings of the 96h, 100h, 120h, 130h, 140h, and 150h hours-since-last-signup thresholds — all set in 5 consecutive days.** The 7-day signup floor compressed 0.86/day → 0.57/day → 0.43/day → **first sub-0.5/day reading ever**. **The structural read:** the May 16-22 +9-signup burst was a single attributable pulse, not a sustained shift in acquisition floor. **The "modal 1/day" prior is dead; the "bimodal 0 OR burst-day" prior fitted on May 22 evidence is now sharpened to "burst HOUR OR zero WEEK"** — the May 28 inbound landed entirely within a 173-second band; everything else around it produced zero signal. **Implication for forecasting:** any single-day forecast of >0 is now a tail event with ~10-15% per-day probability; weekly forecasts must assume modal zero with a single burst window of 1-3 signups.

**5. The cross-user concentration count doubled from 1 to 2 in 12 days, and both are MSG-anchored.** Harry Styles MSG residency (cutekitten + tosophia, 7-of-7 nights at watch_count=2 — first concentration, May 16) + NBA Finals MSG G3 (joseph + samvirsujan, single fixture at watch_count=2 — second concentration, May 27-28). **Both NYC. Both MSG. Both arrived without paid spend, without TicketScan editorial content, and without internal cross-promotion.** **The "MSG is the platform's strongest organic-pull venue" hypothesis crossed its second independent observation this week.** The page-level surface still to build: `/concerts/harry-styles-msg-residency` (intended Tuesday May 26 Content slot — not shipped per Analytics weekly) + `/playoffs/nba/finals/2026/msg-game-3` (new this week, T-19 days at Friday). **The strategic move:** a `/venues/msg` editorial overhaul that anchors MSG as TicketScan's flagship-venue content surface, with sub-pages for Harry Styles residency, NBA Finals, Knicks regular season, Rangers, comedy residencies. **MSG is now the platform's empirically validated "second city" anchor beneath the WC stadium program.**

**6. The production divergence discovery reframes 16+ consecutive weekly escalations of the publish bottleneck.** Per Analytics weekly today + SEO Memo #5/#5b: the deployed Vercel build is **not the same code as `origin/main`**. Blog Article-schema patches (`@graph`, `BreadcrumbList`, `image`, `keywords`, `articleSection`) sitting in the working tree are **already live on production** (verified across 3 blog URLs); the WC `lowPrice` patch in the **same** working-tree bundle is **NOT live**. **Files deploy through some path that bypasses `git main`.** **This means the bundle was never frozen pending architect commit — it has been selectively reaching production, with the schema-affecting subset deploying and the value-pricing subset stalled.** **If Lead Architect identifies the deploy path, the publish-bottleneck may collapse from "multi-day commit cycle" to "30-minute reconciliation task."** Largest single-week structural finding in 2026 by margin. **For Growth & Retention specifically:** the discovery opens an entirely new operational hypothesis — **the engine outage may also be partially deploy-path-related, not source-code-related.** Worth a 30-minute investigation before assuming the SMTP fix requires a full root-cause cycle.

**7. The first-ever 5-user lifecycle-exhausted cohort confirmed this week.** dr.altvater + ggri73 + awwhittington + ajvanprooyen + mark.murdock all crossed full Day-1/3/7/14/21/30 traversal with every send silent. **All 5 signed up Apr 20-23; all 5 hit Day-30 within an 11-day window May 20-30.** **The "no further automated cadence exists" terminal state is no longer an edge case; it is now the dominant tail outcome of the late-April cohort.** **lilianamasyrubi Day-31 carry-forward at zero return + zhili1208 Day-30 missed this morning ~03:16 UTC → 7th confirmed by tomorrow.** Engineering-fixable upstream; for the 5 already-confirmed candidates, only manual re-engagement remains, and Email weekly today reports zero capacity for that as well.

**8. The first power-user lifecycle-exhaustion candidate crystallized this week.** **ajvanprooyen (Cubs 6-pack power-user, Apr 23 signup, all 6 events PASSED Apr 30 → May 6 silent)** crossed Day-30 May 23 ~00:58 UTC = **first power-user to hit lifecycle exhaustion.** **The 6-pack with 100% past-event composition is structurally unrecoverable — there's no future event to anchor an apology arc on.** **Combined with the first-ever 2 power-user crossings into churned bucket this week (kevinshall Day-14 May 26, karin Day-14 May 28), the power-user cohort retention story is now empirically: 3 of 6 lifetime power-users in failure states (one lifecycle-exhausted, two churned within their power-user retention windows).** **50% power-user failure rate is now the second-strongest single-cohort negative result in the dataset (after the 0/193 broad retention disproof).**

**9. The at-risk bucket emptied of power-users for the first time since the bucket started tracking.** May 22: 2 power-users in at-risk (kevinshall Day-10, karin Day-8). May 26 + May 28: both crossed Day-14 silent. **May 29: 0 power-users in at-risk bucket.** The 10 users now in at-risk are all single-item or zero-item shape: pika + samvirsujan (Day 1, fresh), brock + keegan + 9440111 + eduardo + nunemakerc (zero-item, all Day 7+), lisallam + belder + cutekitten (Day 12+, single-item or burst). **The at-risk bucket no longer holds the highest-EV recovery candidates — they've all aged out into churned territory.** This is a structural emptying, not a stochastic one; without an engine, the bucket fills with fresh signups, fails to recover them, and ages them out at the natural cadence.

**10. The 0/110 target-price-capture rate is now structural at n=110 across 18 activators (lifetime).** Day 53. **The 1 new wl item from samvirsujan + the 1 reactivation item from joseph (both NBA Finals MSG G3, 18 days out) are target=null.** Cumulative: the 10 lifetime Day-0 activators (jadbennis, sparkit, cjthomas, kevinshall, karin, belder, cutekitten, lisallam, zhouyilin, samvirsujan) + 1 reactivator (joseph) added 26 wl items between them with 0 targets. **The modal does not surface the target-price field with enough force to capture it even from the fastest activator in dashboard history (samvirsujan +19s) on an event with 18-day event-time.** Today's CRO daily added the **16th stacked psychology fix** to the activation stack (data-loss-as-social-proof framing). **Zero of 16 stacked fixes have shipped in 8 weeks.** **The 14-stack from May 22 has grown to 16; the ship count has not moved.**

**11. The publish-bottleneck-as-deploy-path-mystery is now Week 1 of operational hypothesis.** This week's Analytics weekly + SEO Memo #5/#5b discovery means every cross-agent escalation since mid-March that read "frozen pending architect commit" needs partial re-attribution. **For Growth specifically:** the win-back campaigns, drip rewrites, and W0 architecture that have all sat undeployed across 8+ weeks may be in one of two states: (a) genuinely waiting on engineering source-code work that nobody has touched, or (b) source-code-ready but never reaching production via the unknown deploy path. **A 30-minute investigation by Lead Architect could discriminate these two states for the entire backlog.** **If the answer is (b), the unblock cost for the entire 8-week backlog could be a single configuration fix.**

**12. NEW — the WC vertical share of new wl adds dropped to 0% for the first time since the metric began tracking.** May 16-22: 5 of 11 wl adds were WC (45.5%, gate cleared). May 23-29: **0 of 2 wl adds were WC** (both NBA Finals MSG G3). **The 40%+ gate dropped from cleared → 0% in one week.** Cumulative WC vertical inventory: 18/110 = **16.4%** (was 16.7% on 5/22 — first decrease in 6 weeks). **The WC structural pull on inbound that defined May 12-22 is no longer producing inbound; the platform's organic concentration signal this week was NBA-playoffs-anchored, not WC-anchored.** **15 days from kickoff and the WC vertical inbound floor sits at zero this week.** **Read with Ads weekly May 25 (Week 7 of HOLD, Day 48 cumulative): zero paid acquisition. The WC inbound depends entirely on organic; this week organic produced zero.**

**13. NEW — the "burst hour OR zero week" forecasting prior is now the dominant model.** The May 22 weekly fitted "burst day OR zero day" on May 19-21 evidence (2 zero days bracketing 1 burst day). **This week's evidence sharpened the prior:** 5 zero days in a row (May 23-26 + May 29), one 2-signup burst hour on May 28 morning, and one solo reactivation event the prior evening. **The signal compressed from "burst day vs zero day" to "burst hour vs zero week."** The May 28 inbound landed entirely within a 173-second band; the rest of the 7-day week produced zero signal. **Methodology revision (per Analytics weekly today):** the modal forecast for any single day is now reliably "zero" with a tail event probability of ~10-15% per day independent of the day-of-week; conventional weekday/weekend partitioning has zero residual signal at the platform's current low-velocity regime.

**14. NEW — same-event reactivation-then-activation arc is the strongest organic-pull surface signal of 2026.** Joseph reactivated on NBA Finals MSG G3 at 19:29 UTC May 27. Samvirsujan signed up and activated on the same event 11h 46m later at 07:15 UTC May 28. **The 11h 46m latency between the two events is too short to be independent random arrivals on a single event_id from a 90-user base; the joint probability under independence assumption is ~0.01-0.05%.** **This means the two events share an upstream source signal — Knicks playoff coverage, an NBC/ESPN clip, a Reddit thread, or a Google search trend.** **For Growth strategy:** if the same source signal produces a third user landing on NBA Finals MSG G3 inside the next 14 days, the source becomes empirically identifiable as a repeatable acquisition channel; if not, it downgrades to "single-attribution coincidence + reactivation pulse." **The next 14 days of monitoring NBA Finals MSG G3 watch_count for any third user is now the highest-leverage 30-second-per-day observation on the platform.**

### Prevention Actions (Re-ranked for Week 8)

| # | Action | Target Segment | Expected Impact | Owner | Status |
|---|---|---|---|---|---|
| **NEW-1 (TODAY)** | **Manual joseph + samvirsujan target-prompt double-send TODAY.** Both users sit on NBA Finals MSG G3 (18d out, T-7d June 9) with target=null. joseph Day-30 fires June 3; samvirsujan Day-3 fires May 31. **Compound the same-event signal in the email body: "You're tracking the same game as another user. Set what you'd pay; we'll watch all three sources side-by-side."** ~20 min hand-send for both. | joseph + samvirsujan (2 users) | First compound-touch leveraging cross-user concentration as social proof; first send to leverage the reactivation surface; converts the +19s record activator from Day-1 FAIL into a Day-2 first-target. | Email Agent (5) | **NEW PRIORITY 1 — ~12h window before samvirsujan Day-2 noon** |
| **NEW-2** | **30-minute production-divergence investigation by Lead Architect.** Identify the deploy path that bypasses `git main`. If the path is found, partial unblock of 8 weeks of stalled cross-agent work may collapse into a single configuration fix. **Read with Email Weekly today §3.** | Cross-agent backlog (W0 architecture, drip rewrites, target-price UX, archive cron, dispatch endpoint) | **Potentially highest-leverage 30-minute task in 2026.** Conditional unblock of the entire 8-week design queue. | Lead Architect | **NEW PRIORITY 2** |
| **NEW-3** | **Implementation-intention "Set a target by [time]" CTA (Gollwitzer 1999) — CARRIED from 5/22 PRIORITY 1.** ENGINE-INDEPENDENT, frontend-only, ~3-5h. **`computeTargetByTime(item)` generates the prompt directly from `(event_date, event_name)` — no manual templating per user.** **If the production-divergence path is confirmed (NEW-2 above), this ships through the bypass path same-day.** | All 54 activated users with target=null (110 items) + all future activators | **0% → ≥15% target capture in 14 days; single most-direct line to the 0/110 metric.** | CRO Agent (6) + Engineering | **CARRIED 7 days from 5/22 — re-prioritized given NEW-2** |
| **NEW-4** | **Watchlist unarmed-state loss-frame badge.** Per today's growth daily (Section "Psychology-driven micro-optimization"). 1 file change in `web/src/app/watchlist/page.tsx`, ~50 lines TSX, completes the 3-touchpoint Cialdini stack (loss-frame search + social-proof event-detail + loss-frame watchlist). | 9 distinct users carrying target=null across 21 watchlist items | **30-50% of target-null items armed within 30 days = 33-55 first-ever armed items = first triggered alert precondition.** **0.0% → 25-40% alert-armed rate.** | CRO Agent (6) | **NEW PRIORITY 4 — completes the Cialdini stack** |
| **NEW-5** | **Watch NBA Finals MSG G3 watch_count for any third-user add inside next 14 days.** ~30 seconds/day observation; conditional escalation trigger. **If third user appears, declare the upstream source identifiable and escalate to Ads + Content for source-attribution + LP build. If no third user by June 12, downgrade joseph reactivation to single-attribution coincidence.** | NBA Finals MSG G3 event_id (`G5diZ_7lOeIGI`) — currently 2 users (joseph + samvirsujan) | Resolves the highest-EV unresolved acquisition question of 2026. Costs ~30s/day. | Growth Agent (8) + Analytics (7) | **NEW DAILY OBSERVATION — Week 1** |
| **NEW-6** | **Harry Styles MSG residency page + cross-user concentration content surface.** **CARRIED from 5/22 PRIORITY 2.** Day 13 of crystallized opportunity. First organic cross-user concentration; cutekitten Day-14 fires May 30 ~23:32 UTC = highest-EV target-capture carry by item-count + window-width. **If MSG-anchored becomes the editorial flagship per the NEW-3 framing, this page is the entry point.** | Anonymous Harry Styles MSG search traffic + cutekitten + tosophia | Programmatic surface validated; converts organic intent to wl-adds. Likely 3-5 third-user adds inside 30 days of ship per modal forecast. | Content Agent (1) + SEO | **CARRIED Day 13** |
| **NEW-7** | **Manual cutekitten Day-14 preempt-send TOMORROW (May 30 ~23:32 UTC).** Highest-EV target-capture carry in the dataset: 7 items, 90-105 days out, target=null. **~84 person-event-days of unrealized target-capture value.** ~5 min hand-send. | cutekitten (1 user, 7 items) | First-ever 7-item target-capture event; bridges Day-14 crossing into Day-15 first-second-session test. | Email Agent (5) | **NEW PRIORITY 7 — ~36h window** |
| **NEW-8** | **Manual kevinshall Match 11 T-7d compound send June 7.** Kevin holds 6 items (5 WC + Matt Rife), target=null, 17d post-signup. Match 11 T-7d on June 7 = first WC T-7d window. **Phase 1A affiliate flag must ship by June 7 HARD.** **Compound body:** target-capture nudge + 3-missed-touches frame + WC vertical anchor. ~5 min hand-send. | kevinshall (1 user, 6 items) | Last chance to capture target on WC-vertical before kickoff; precondition for first affiliate click-through. | Email Agent (5) | **NEW PRIORITY 8 — 9d window** |
| A | **Real-Time Welcome Triage (W0-A/B/C/Day-0)** — carried from May 8. **Day-0 cohort gap newly active this week** (pika + samvirsujan both Day-1, E1 fires May 31 — 4-day silence at signup-on). **W0 Day-0 template designed in Email weekly today §1, not yet drafted.** | All new signups (5 typology variants including W0-A+ cluster + W0 Day-0) | Closes same-day-event failure permanently; catches cluster-at-signup users at landing; eliminates the Day-0/1/2 silence gap | Email Agent (5) + Lead Architect | **CARRIED Day 21** |
| B | **Goal-gradient progress bar on `/watchlist`** — carried from May 1 (Day 28). Targets the 1-event cohort. | 8+ single-event users (samvirsujan + joseph + lisallam + cjthomas + jadbennis + josh + nmcnamee + zhouyilin) | 15–40% lift on next-add conversion | CRO Agent (6) | **CARRIED Day 28** |
| C | **Redirect ALL acquisition effort to known-good-shape channels** (REVISED for Week 8). **The May 22 "WC + multi-night concert residency" framing is now expanded to "WC + multi-night MSG residency + single-fixture NBA-Finals MSG."** | All future paid + organic acquisition | Sustains 1.0 items/activator engagement density this week (down from 2.75 last week, n=1 vs n=4 — single-add fastest-intent shape is dominant in May cohort); MSG-anchored content adds a parallel pull surface | Ads Agent (4) + Content Agent (1) | **REVISED Week 8 — MSG editorial flagship** |
| D | **"Curious signup" onboarding path for Pattern B** — carried from May 8. Pattern B at 62.5% rolling, unchanged from 5/15 + 5/22. **pika is the cleanest Pattern B observation of 2026 — same-burst-minute as samvirsujan, divergent intent expression, structurally inert at Day-1.** | Pattern B cohort | Recover 20-40% of non-activators | CRO Agent (6) + Email Agent (5) | **CARRIED Day 21** |
| E | **Domain-class welcome routing** — carried from May 22 NEW-6. n=20 lifetime now (added pika gmail + samvirsujan gmail this week). Hypothesis still unfalsified. | All future signups | Catches the 58% / 0% split as a structural acquisition filter | CRO Agent (6) + Email Agent (5) | **CARRIED Day 7** |
| 1 | **Revive the drip cron** — Day 53. ~105–110 emails owed across 20+ users. | All 20+ pending users | First retention signal the product ever produces | Email Agent (5) / Lead Architect | OPEN (Day 53) |
| 2 | **Fix price tracking cron** — Day 53. **6 confirmed permanent data-loss events; next at-risk Noah Kahan June 12.** | All 54 activated users with ≥1 wl item | Stops the queue from extending; doesn't recover what's lost | Lead Architect | OPEN (Day 53) — **now producing permanent loss at +1/week steady-state** |
| 3 | **Rotate or document admin API credential** — **Day 29** of regression (was Day 22 on 5/22). Analytics weekly today escalates to "standard probe-failure baseline." | Cross-agent observability | Restores attribution + drip + alert reporting | Lead Architect | **OPEN Day 29 — escalated to baseline-failure methodology** |
| 4 | **"Event passed" auto-pivot email template** — carried. **22 events confirmed; Noah Kahan #23 locks June 13 if engine stays dark.** | Users with past-date wl items only | 15–25% re-engagement of otherwise-lost users | Email Agent (5) | **OPEN 7+ weeks** |
| 5 | **Add `last_login_at` tracking** — Day 53. With 0-of-193 multi-session retention measured indirectly, direct instrumentation is the only way to verify any prevention works. | All users | Enables measurement | Analytics (7) | OPEN (Day 53) |
| 6 | **Newsletter homepage form audit** — Day 117 flat. 16 weeks 5 days. **0/2 cross-conversion this week per Email weekly. Day 24 of consecutive zero-capture days.** | Anonymous homepage visitors | Form may be broken; confirm wire, then offer | CRO Agent (6) | **OPEN 117d — longest dependency in project** |

### Churn Severity Assessment — Week 8 Verdict

**The eighth consecutive week with the same top engineering blockers, AND the lowest weekly acquisition energy in dashboard history, AND the only week in 2026 to produce three structural firsts simultaneously.**

The acquisition side ran the lowest weekly inbound on record: **2 new signups (–78% WoW; lowest weekly signup count since dashboard began tracking weekly), 2 wl items (–82% WoW; lowest tied), 1 Day-0 activator (down from 4 last week; fastest-ever at +19s), 6 consecutive zero-net-input days (May 21-26 = longest in dashboard history), 154-hour silence at May 27 06:00 UTC (longest in dashboard history).** The acquisition front compressed to a single 173-second window inside a 168-hour observation period.

The retention side ran the cleanest extension of the 8-week disproof: **0 of 193 user-day return-session tests across 16 cohorts (1.48× expansion in 7 days, zero exceptions, Day-0-or-never cohort count 16/16), 5 confirmed lifecycle-exhausted users (+4 net; first-ever 5-user lifecycle-exhausted cohort), 1 confirmed permanent data-loss event (AEW #22), 2 power-users crossed into churned bucket (kevinshall + karin), 1 power-user confirmed lifecycle-exhausted (ajvanprooyen).**

But three structural firsts landed simultaneously: **(a) first-ever lifecycle reactivation in 2026 (joseph.g.nicolosi Day-24); (b) fastest-ever activator (samvirsujan +19s — broke the record by 1 second after 8 days); (c) production divergence discovery (deployed Vercel build is not `origin/main`; deploy path bypasses git).** All three open new analytical surfaces; none of the three required engineering activity to land; the production-divergence discovery alone could potentially collapse the 8-week publish backlog if Lead Architect spends 30 minutes investigating it.

**Net this week:** **−7 signups (worst week in dashboard history)**, **−9 watchlist items**, **−3 Day-0 activators**, **+1 first-ever reactivation (joseph)**, **+1 first-ever single-fixture cross-user concentration (NBA Finals MSG G3)**, **+1 fastest-ever activator record (samvirsujan +19s, immediate Day-1 fail)**, **+1 confirmed permanent data-loss event (AEW #22)**, **+4 confirmed lifecycle-exhausted users (+ 1 expected tomorrow)**, **+1 structural deploy-path discovery**, **0 emails sent**, **0 alerts fired**, **0 progress on 16-stack engineering blockers**, **+0.91pp lifetime activation rate (broke back above 60% floor for first time in 8 days — first post-Apr rebound in 2026)**, **−1.7pp WC vertical share gate (cleared 45.5% → 0% in one week)**. **Bright spots:** joseph reactivation surface is structurally novel and the only positive-signal new metric of 2026; samvirsujan +19s validates the fast-intent NBA-playoffs archetype now at n=2; activation rate week-1-of-4 recovery counter started; production-divergence discovery opens a 30-minute unblock path. **Dim spots:** 0 of 11 ship deadlines executed; 14 → 16 stacked CRO fixes at zero ships; first 2 power-users entered churned bucket; first power-user confirmed lifecycle-exhausted; WC vertical inbound floor sat at zero; 5-user lifecycle-exhausted cohort first observed.

---

## 2. Referral Program — Status: Structurally Unchanged

### Status: NOT IMPLEMENTED — n=193 Counter-Demonstration is Definitive

For the **eighth consecutive week** the answer is "no." The 0-of-193 user-day retention disproof at week close is the same load-bearing rationale as 5/22's 0-of-130 reading, hardened by 7 more days of measurement:

1. **The 0-of-193 user-day retention disproof is now n×1.48 vs last week.** Last week's 0-of-130 reading was already dispositive; this week's 0-of-193 across 16 cohorts and 6 archetypal activator shapes (including the fastest-ever +19s shape) is dispositive at higher statistical resolution. **The "most-likely-to-refer" cohort across every shape the platform produces has demonstrated zero base-rate return-session activation.** Asking any of these users to share a referral link in week 1 is asking them to take an action they have not taken for themselves: open the app a second time.

2. **The 2 fresh watchlist items this week — added by the platform's lowest-energy activation window of 2026 — are 2-of-2 target_price=null.** A referee landing-page advertising "TicketScan emails you when prices drop below your target" would advertise a feature that has never produced a single email or alert (Day 53), that 10 lifetime Day-0 activators walked past, that the platform's fastest-ever activator (samvirsujan +19s) did not engage with on an event 18 days out, and that the first-ever reactivator (joseph) did not engage with on the same event_id. **Empirical referee experience:** signup → activate (19-179s) → add wl item (typically 1) → set target=null (because modal doesn't capture it) → never receive any drip (Day 53) → never receive any alert (lifetime zero) → roll to Day-1 NEUTRAL → Day-3 FAIL → Day-7 FAIL → never return. **n=193 user-day disproof; Day-0-or-never cohort count 16/16.**

3. **First power-user crossings into churned-bucket arrived this week (kevinshall + karin).** A referral link sent by either user today would land their referee inside a platform that has just observed the first power-user retention failures in 2026 — meaning the **referrer's own retention example is now negative**. **Negative WOM math:** referee receives 0 product value AND watches the referrer demonstrably disengage. **The referral mechanic would produce empirically-grounded negative network effects today.**

### Updated Launch Prerequisites (and How They Moved This Week)

| Prerequisite | Status (May 22) | Status (May 29) | Movement |
|---|---|---|---|
| Price-tracking cron functional | Broken Day 46 | **Broken Day 53** | **−7 days** |
| Drip cron functional | Broken Day 46 | **Broken Day 53** | **−7 days** |
| At least one price alert has ever fired | Lifetime 0 | **Lifetime 0** | unchanged |
| `last_login_at` instrumentation | Missing Day 46 | **Missing Day 53** | **−7 days** |
| Churn rate < 50% | 82.4% | **86.7%** | **+4.3pp (worse)** — net-negative week + thin denominator |
| Pattern B share < 30% | 62.5% | **62.5%** | **Flat — structural unchanged 3rd week** |
| At least one psych rec shipped | 0 of 14 shipped | **0 of 16 shipped** (stack grew to 16 with today's data-loss-as-social-proof addition) | **0 ships in 8 weeks; stack grew +2** |
| At least one target_price set on a watchlist item | 0 / 108 | **0 / 110** | **−2 more null-targets, including the fastest-ever activator + first-ever reactivator** |
| At least one second-session return | 0 of 130 user-day tests | **0 of 193 user-day tests across 16 cohorts** | **1.48× expansion; zero exceptions; signal now harder than last week** |
| Admin API operational | Broken Day 22 (401) | **Broken Day 29 (401)** | **−7 days; methodology-default baseline** |
| At least one permanent data-loss event prevented | 3 confirmed + 2 in-flight | **6 confirmed (+1 this week: AEW; next at-risk Noah Kahan June 12)** | **Newly-worse — referee would witness 1 confirmed loss per week steady-state** |
| No active lifecycle-exhausted users in cohort | 1 confirmed + 4 in 16h | **5 confirmed + 1 incoming inside 24h** | **Newly-worse — referee landing immediately joins a cohort with 5 demonstrable lifecycle failures + 1 power-user confirmed lifecycle-exhausted (ajvanprooyen)** |
| **NEW: No active power-user retention failures** | n/a | **2 power-users crossed into churned bucket this week (kevinshall + karin) + 1 power-user lifecycle-exhausted (ajvanprooyen)** | **Newly-blocking — referee's potential referrer (any of 6 lifetime power-users) is 50% in retention-failure state** |
| **NEW: Production deploy path is identified** | n/a | **Unknown deploy path; 30-min investigation needed** | **Newly-blocking — until publish bottleneck root cause is understood, referral system frontend ships are unschedulable** |

**Best-case referral launch window: pushed from Q2 2027 to Q3 2027 at the earliest.** **Two new prerequisites added this week (power-user retention floor + deploy-path identification).** **Each week of further delay on engineering compounds; this week added 2 more prerequisites to a list that was already 11 unmet, while the longest-open prerequisites slipped another 7 days.**

### Incremental Design Updates (Since May 22)

**The May 22 rule held that referral landing-page social proof must rotate users who have at least one target_price set AND have received at least one alert that did not bounce AND have demonstrated at least one return-session within 14 days. Current count of qualifying users: 0.**

**Three new design elements this week:**

1. **The reactivation surface as referral content.** The single most novel positive signal of 2026 (joseph Day-24 reactivation on NBA Finals MSG G3) opens the **"come back when something matters to you" frame** for a future referral landing page. Specifically: testimonial content rotated by Knicks playoff fans, MSG residency holders, and World Cup ticket-watchers — three event-anchored personas with empirically-demonstrated organic pull. **Frame: "Set what you'd pay. Walk away. We'll watch all three sources until it matters."** **Currently zero qualifying testimonial users (would need 1+ reactivator who set target + received alert).**

2. **The MSG-anchored design.** With two cross-user concentrations now both MSG-based, the highest-converting referral angle the platform could ship today would be **MSG-vertical-specific**: "Track MSG events with friends. Compare what each of you is willing to pay; we ping when any source crosses any target." **Tied to the MSG editorial flagship recommendation (NEW-3 in §1).** **Currently zero of the prerequisites are met; document the design, ship Q3 2027 conditional on engineering + deploy-path.**

3. **The single-event multi-user concentration mechanic.** NBA Finals MSG G3 (joseph + samvirsujan, 2 users / 1 event) demonstrates a single-fixture pull surface that doesn't require residency-length concentration. **Referral mechanic:** any user can invite a friend to track the same event; both get cluster-alerts when any of them sees a drop below any of their targets. **Lower-friction than residency cluster; broader application.** **Currently zero qualifying triggers (would need both joseph AND samvirsujan to set targets, plus delivered cross-alert).**

**Reward structure unchanged from May 1.** Referrer gets bulk-add unlock on first activated referral; insider badge + priority alerts at 3; lifetime premium at 10. **Design holds. Ship date slips another week.**

---

## 3. Pricing & Monetization Strategy

### Current State

- Revenue: **$0** lifetime, all sources. Same as last 8 weeks.
- User base: 90 registered (+2 WoW), 54 activated (+2 effective), 0 paying.
- WC cohort: **still 2 power-users (kevinshall, karin); both crossed into churned-bucket this week.** WC sub-cohort gate failed for 6th consecutive week.
- Cross-user concentrations: **2 active — Harry Styles MSG residency (cutekitten + tosophia, 7 nights, Day 13 since crystallized) + NBA Finals MSG G3 (joseph + samvirsujan, 1 fixture, Day 1 since crystallized).**
- Lifecycle reactivation: **1 confirmed (joseph) — first-ever in 2026; opens a parallel monetization surface vs cold activation.**
- Monthly infra cost: $0–20 (Railway + Vercel free/starter).

### The Six Pricing Conclusions That Sharpened This Week

**(a) The first-commission scenario rotated again. konman87 path dead Week 6; charlesteel path closed Week 7; zhouyilin Game 3 path closed Week 7 retro; kevinshall WC path remains primary; samvirsujan NBA Finals MSG path emerges as new parallel.** Both Bruno scenarios closed; zhouyilin Game 3 passed silent May 22 closing the third scenario one day inside the 5/22 report window. **The new primary path holds:** kevinshall returns to `/watchlist` between June 7 (T-7d on Match 11 Netherlands × Japan June 14) and July 9 (Match 101 SF). **Sub-primary:** karin returns between June 17 (T-7d on Switz × Canada June 24) and July 7 (R16 Match 96). **Tertiary new this week:** **samvirsujan + joseph return to `/event/G5diZ_7lOeIGI` (NBA Finals MSG G3) between June 9 (T-7d) and June 16 (tipoff).** **Quaternary unchanged:** cutekitten returns between August 19 (T-7d on Harry Styles MSG opening night August 26) and September 9. **First commission window held at June 14 (kevinshall) but a new parallel window opens June 9-16 (samvirsujan + joseph).** **Phase 1A affiliate flag must ship by June 7 HARD for kevinshall + samvirsujan paths to function in tandem.**

**(b) The cross-user concentration #2 opens an event-level affiliate criterion narrower than the Harry Styles residency cluster.** With samvirsujan + joseph tracking NBA Finals MSG G3 (single fixture), the criterion `(event_id IN cross_user_concentration_set AND wl_count >= 1)` from May 22 captures both users immediately. **Total addressable affiliate-flag cohort now: 9 distinct users today** (up from 7 on 5/22: kevinshall + karin WC + cutekitten + tosophia Harry Styles + belder SEC + lisallam JOJI + **joseph + samvirsujan NBA Finals MSG**). The cluster-affiliate frontend ship (NEW Phase 1F, designed 5/22) now has **two distinct event_id clusters validated** before the implementation ships.

**(c) The WC Pass infrastructure-readiness binary gate at May 25 missed and aborted as forecasted.** Per 5/22 plan: "If any blocker is open by May 25, ABORT this cycle entirely." **May 25 closed with all 5 blockers open (drip Day 49, price tracking Day 49, target-price flow Day 49, W0 architecture Day 49, admin API Day 25). WC Pass officially aborted for this cycle.** Confirmed in CRO weekly May 25 + Email weekly May 22 + today's Email weekly Section 6 (8th consecutive triage-shape cycle). **The May 25 decision held; no reverse decision logged.** **Phase 1B (WC Pass at $9.99) is permanently closed for the 2026 tournament cycle.**

**(d) The reactivation surface opens a previously-unconsidered monetization path: pure recovery commission.** joseph reactivated on NBA Finals MSG G3 after 23 days dormant + 0 wl. **If a working price-tracking + alert engine identifies the floor on Knicks Rd4 HM Gm3 inside the next 11 days (T-7d window) AND joseph clicks through to buy at the alert moment, the platform earns its first affiliate commission on a user who literally would have purchased zero tickets without the reactivation.** **Implication:** the reactivation cohort base rate (estimated ~0.09% per dormant-user-day) is small but the commission-per-reactivation is structurally higher than commission-per-cold-activator because the cold-activator may have purchased elsewhere anyway. **Forecasted reactivation cohort across the 36 dormant 0-wl users over a 90-day window:** if joseph's rate replicates at the dormant pool, expect ~3-5 reactivations across 90 days. **Conditional on Phase 1A shipping, the reactivation commission floor over 90 days: $15-200.**

**(e) The cluster-affiliate frontend Phase 1F now has two distinct trigger clusters and an August 19 HARD deadline.** Per 5/22: "Per-cluster affiliate buy-link injection on `/event/[id]` is a frontend-only ship; no email engine, no cron, no `target_price` capture needed. Just: '2 users are tracking this event. Compare current prices.' with affiliate-tagged buy buttons below. ~6-8h Lead Architect ship." **This week's NBA Finals MSG G3 concentration (joseph + samvirsujan) ships the same code path as the Harry Styles MSG cluster.** **The implementation now serves 2 known clusters (covering 14 + 1 = 15 event_ids); ship before June 9 captures the NBA Finals window AND positions for August 19.** **The cluster-affiliate frontend ship is now the first monetization path that has TWO empirical trigger events and zero backend dependencies.**

**(f) NEW — the production-divergence discovery opens a new path: ship affiliate flag frontend-only via the deploy bypass.** Per Analytics weekly today: blog Article-schema patches sitting in the working tree are already live on production despite no `git main` commit. **If the same bypass path can ship the Phase 1F cluster-affiliate frontend, the August 19 HARD deadline collapses from "blocked on git → main → vercel → architect" to "diff the bundle locally, push via the bypass path."** **30-minute investigation by Lead Architect is the precondition; if confirmed, the affiliate frontend ship window shrinks from weeks to hours.**

### Path Evaluation (Updated)

#### Path A: Freemium — Both Gates Still Failing

| Component | May 22 Plan | May 29 Update |
|---|---|---|
| Free tier caps | 3 watchlist, 7d history | Hold spec; cannot ship |
| Premium $4.99/mo | Soft-launch as gift to power activators | **6 power-users lifetime; 3 in failure states this week (kevinshall + karin churned bucket, ajvanprooyen lifecycle-exhausted). Effective gift-recipient cohort: 3 (cutekitten, belder, lisallam) — and all 3 still inside fresh windows.** |
| Soft-launch gate 1: activation rate ≥ 50% | FAILED at 59.09% | **CONDITIONALLY CLEARED — 60.00% lifetime, week 1 of 4 toward Phase 2 gate 1. First positive movement in 12 weeks.** |
| Soft-launch gate 2: ≥1 alert fired | Lifetime 0 | **Lifetime 0** |

#### Path B: Affiliate Revenue — Phase 1A 8-Week Slip; Phase 1F Two-Cluster Validated

| Component | May 22 Plan | May 29 Update |
|---|---|---|
| Programs | Ticketmaster + SeatGeek + StubHub | unchanged |
| Visibility | Triple-criterion (known + WC-multi + cross-user concentration) | **Sharpened to:** `(signup_source = 'known' AND wl_count >= 3)` OR `(wl_vertical = 'WC' AND wl_count >= 2)` OR `(event_id IN cross_user_concentration_set AND wl_count >= 1)`. **Total addressable: 9 distinct users today (was 7).** |
| Initial cohort | 7 distinct users (5 WC + 2 Harry Styles) | **9 distinct users: 2 WC multi-adders (kevinshall + karin) + 2 Harry Styles MSG concentration (cutekitten + tosophia) + 1 SEC cluster (belder, single-criterion) + 1 single-event JOJI (lisallam) + 2 NBA Finals MSG G3 concentration (joseph + samvirsujan) + 1 single-event Noah Kahan (cjthomas)** |
| First $ likely from | kevinshall AT&T June 14 first match (~T-7d June 7) | **kevinshall AT&T June 14 (T-7d June 7) UNCHANGED; PARALLEL NEW: samvirsujan + joseph NBA Finals MSG G3 June 16 (T-7d June 9).** **First-commission window narrowed from June 14 to June 9 if NBA Finals path fires first.** |
| Ship readiness | June 7 HARD (kevinshall AT&T T-7d) AND August 19 HARD (cluster-affiliate Harry Styles MSG) | **Same deadlines; PLUS June 9 HARD (cluster-affiliate NBA Finals MSG G3 T-7d) — same code path as August 19, ships once, fires both.** |

#### Path C: Advertising — Still Not Yet (unchanged)
88 → 90 users. Newsletter 3 subscribers / 117 days flat. **Cross-conversion 0/2 this week per Email weekly.** No change in conclusion. Revisit at 50,000+ monthly pageviews.

#### Path D: WC Pass — ABORTED (per May 25 binary gate decision)

| Scenario | Status |
|---|---|
| WC Pass at $9.99 on June 1 | **ABORTED May 25** — all 5 engineering blockers open at gate trip; per 5/22 plan "ABORT this cycle entirely" decision logged. Path permanently closed for 2026 tournament cycle. |

#### Path E (PROMOTED) — WC Affiliate as Confirmed Primary

| Component | Action | Revenue Target |
|---|---|---|
| Phase 1A affiliate flag (triple-criterion) | Ship before kevinshall's first AT&T WC match T-7d (June 7) HARD | $0 (until June 7) |
| First WC click-through | kevinshall returns to `/watchlist` between June 7 (T-7d) and June 14 (kickoff Match 11 Netherlands × Japan) | $0 |
| First WC commission | $5–100 by June 21 (kevinshall has 5 AT&T matches over 26 days starting June 14) | $25-200 expected |
| Karin's first event | June 24 (Switzerland × Canada Group B at BC Place) — second commission window | $5–50 |

#### Path F (PROMOTED) — Cluster-Affiliate Frontend Two-Cluster Validated

| Component | Action | Revenue Target |
|---|---|---|
| Cluster-affiliate flag | Frontend-only `/event/[id]` buy-link injection where `watch_count >= 2`. ~6-8h Lead Architect ship. **Two clusters now valid: Harry Styles MSG (Aug 19+) AND NBA Finals MSG G3 (Jun 9+).** | $0 (until June 9) |
| First cluster click-through | samvirsujan + joseph return to `/event/G5diZ_7lOeIGI` between June 9 (T-7d) and June 16 (tipoff Knicks Rd4 HM Gm3) | $0 |
| First cluster commission | $10–80 by June 16 (1 fixture × 2 trackers × multiple click windows; same-event multi-user cluster) | $25-150 expected |
| Second cluster commission | cutekitten + tosophia Harry Styles MSG opening Aug 26 (T-7d Aug 19) | $50-400 expected |
| **Critical advantage** | **Frontend-only; doesn't depend on broken backend cron or `target_price` flow. Ships independently of the 8-week engineering blocker chain.** **If production divergence path confirms a deploy bypass, can ship in hours.** | — |

#### Path G (NEW THIS WEEK) — Reactivation Commission Path

| Component | Action | Revenue Target |
|---|---|---|
| Reactivation-trigger affiliate visibility | If user transitions from "dormant 0-wl ≥14 days" to "active +1 wl", inject affiliate buy-link on the next email + the watchlist page next session. **Implementation depends on `last_login_at` tracking (Day 53 missing) OR a server-side wl-add timestamp diff (already present).** | $0 (until joseph T-7d June 9) |
| First reactivation commission | joseph clicks through on NBA Finals MSG G3 buy-link inside T-7d window (June 9-16) | $5–80 expected |
| Reactivation cohort base rate | ~0.09% per dormant-user-day; 36 dormant 0-wl users; ~3-5 reactivations / 90 days at steady state | $15-400 conditional on Phase 1A ship |
| **Critical advantage** | **Pure recovery commission — reactivator would have made zero purchase without TicketScan. Higher commission-per-user than cold-activator path.** | — |

### Revised Monetization Roadmap

| Phase | Target Date | Action | Revenue Target |
|---|---|---|---|
| **Phase 0 (still prerequisite)** | Now → June 7 | Fix drip + price tracking + target-price flow + admin API + W0 architecture. **Plus NEW: 30-min production-divergence investigation by Lead Architect — may collapse Phase 0 prerequisites.** | $0 |
| **Phase 1A-WC (HARD June 7)** | June 7 | Ship triple-criterion affiliate flag; instrument click capture | $0–200 (kevinshall AT&T window) |
| **Phase 1F-NBA (HARD June 9, NEW)** | June 9 | Cluster-affiliate frontend on `/event/G5diZ_7lOeIGI`; same code path as Aug 19 Harry Styles ship. **First-commission acceleration from June 14 → June 9 if NBA Finals path fires first.** | $25-150 (NBA Finals G3 window) |
| **Phase 1G-Reactivation (NEW, CONDITIONAL)** | June 9 | Reactivation-trigger visibility on joseph's NBA Finals MSG G3 affiliate link. Same code path as 1F; piggyback on reactivation surface. | $5-80 (joseph window) |
| **Phase 1F-Harry-Styles (HARD August 19, CARRY)** | Aug 19 | Cluster-affiliate frontend on Harry Styles MSG event_ids; same code path as 1F-NBA; ship once, fires twice | $50-400 (Harry Styles MSG window) |
| **Phase 1B WC Pass** | **ABORTED May 25** | **Permanently closed for 2026 tournament cycle** | $0 (aborted) |
| **Phase 2** | Q4 2026 | Soft-launch Premium gated by activation rate ≥ 50% sustained 4w (**now week 1 of 4 — first non-zero counter in 6 weeks**) AND ≥1 alert fired (lifetime 0) | $0 |
| **Phase 3** | Q1 2027 | Full freemium launch, conditional on activation rate ≥ 50% sustained 6+ weeks | $300–1,000 MRR |
| **Phase 4** | Q3 2027 | Referral program (conditional on `EXISTS (delivered alert)` AND multi-session retention > 0% AND zero active lifecycle-exhausted users AND no active power-user retention failures AND deploy path identified); advertising at 50k+ pageviews | TBD |

**Key changes vs. May 22:** (a) Phase 1B WC Pass officially aborted May 25 (was ≤10% probability last week); (b) Phase 1F-NBA NEW at HARD June 9 — accelerates first-commission opportunity by 5 days; (c) Phase 1G-Reactivation NEW (conditional) — opens parallel commission path on the reactivation surface; (d) Phase 2 gate 1 cleared week 1 of 4 (first non-zero counter in 6 weeks); (e) Phase 4 added 2 new prerequisites (power-user retention floor + deploy path identification) pushing earliest launch from Q2 to Q3 2027; (f) Phase 0 carries a 30-minute investigation task that may collapse the whole prerequisite chain.

### First-Revenue Scenario (Sharpened)

**The May 22 forecast:** "kevinshall AT&T June 14 first match" + "cluster-affiliate parallel August 19." **May 29 outcome:** kevinshall still primary; **NEW parallel path emerges 5 days earlier than kevinshall.**

1. **Primary path (June 7-July 9): kevinshall87 returns to AT&T WC matches.** Unchanged from 5/22. Phase 1A must ship by June 7 HARD.

2. **NEW parallel path (June 9-16): samvirsujan + joseph return to NBA Finals MSG G3.** Two-user cluster on single fixture, target=null on both, T-7d window opens June 9. **First-commission window shifts from June 14 (kevinshall primary) to June 9 (cluster-affiliate fires first if NBA Finals path activates).** **Phase 1F must ship by June 9 HARD; same code path as August 19 Harry Styles ship — ship once.**

3. **Cluster-affiliate carry-forward path (Aug 19 – Sep 9): cutekitten + tosophia return to Harry Styles MSG.** Unchanged from 5/22. Phase 1F-Harry-Styles same code path as 1F-NBA.

4. **NEW reactivation path (June 9-16, conditional): joseph clicks through on NBA Finals MSG G3 affiliate link.** Pure recovery commission. Smaller per-event opportunity but novel cohort surface.

---

## 4. Feature Launch Planning

### Recommendation: Drop Mobile App / Push Notifications / Seat Maps; Launch the MSG Editorial Flagship as the Next "Feature"

**Per the May 22 weekly the next-feature options ranked: cluster affiliate flag, target-price capture UI, mobile app launch, push notifications.** **This week's data sharpens the decision:**

- **Cluster affiliate flag (Phase 1F)** is now reframed as a monetization path, not a feature launch. It ships frontend-only, requires no marketing announcement, and converts when triggered by `event_id` watch_count crossings. **No launch plan needed; ship it silently as a backend feature.**
- **Target-price capture UI** (CRO 14-stack item, now 16-stack) is also no-announcement-needed; it's a friction-reduction fix, not a launchable feature. **Ship it silently as a CRO improvement.**
- **Mobile app launch** — premature; the platform's strongest empirical finding (Day-0-or-never, n=16/16) suggests the friction is not channel-based, it's modal-based. Mobile app duplicates the same modal on a different surface; doesn't address the structural retention problem. **Defer indefinitely.**
- **Push notifications** — premature for the same reason; without `last_login_at` + a working alert engine, push channel is duplicative. **Defer indefinitely.**

**The launch-worthy feature this week is the MSG Editorial Flagship** — a structured editorial surface that anchors `/venues/msg` with sub-pages for Harry Styles residency, NBA Finals MSG G3, Knicks regular season, Rangers, and comedy residencies. **The launch fundamentals:**

```
## Feature Launch: TicketScan's MSG Editorial Flagship

### Why now (May 29 thesis)
- Two organic cross-user concentrations in 12 days; both MSG.
- The strongest empirically-validated "second city" anchor on the platform beneath the WC stadium program.
- NBA Finals MSG G3 + Harry Styles MSG residency = two simultaneous content surfaces, both with active wl-cluster demand and zero programmatic destination beyond the event-id router.
- Production divergence discovery means blog/editorial paths may ship faster than backend paths.

### Pre-Launch (June 1-7)
- Day 1 (June 1): Ship `/venues/msg` editorial overhaul + 2 sub-pages (Harry Styles residency + NBA Finals MSG G3)
- Day 2 (June 2): Email teaser to cutekitten + tosophia (Harry Styles), joseph + samvirsujan (NBA Finals MSG) — total: 4 users. Manual sends; ~10 min each.
- Day 3 (June 3): Social Agent posts to X + IG with "MSG = our flagship venue this summer" frame
- Day 4-7: Build NBA Finals MSG G3 standalone page with countdown to tipoff
- Day 7: Internal QA — verify all 4 users see MSG editorial as a coherent surface, not 4 disconnected pages

### Launch Day (June 8 — T-1d to NBA Finals MSG G3 T-7d)
- Email to full list (90 users): "We've made MSG our flagship venue page — see what's playing"
- Blog post: "Why MSG is TicketScan's anchor venue for 2026"
- Cross-link from /venues page header
- Submit to relevant Reddit threads (NYC sports, MSG residency tracker)

### Post-Launch (June 9-23)
- Watch NBA Finals MSG G3 watch_count for any third-user add (per Prevention Action NEW-5)
- Monitor Harry Styles MSG residency event_ids for any third-user add
- If either crosses to watch_count=3 inside 14 days, escalate to Content Agent for second-iteration page expansion

### Success Metrics
- Adoption rate: 30%+ of active users (16+ of 54 activated) visit /venues/msg in first 14 days
- Watch_count growth: NBA Finals MSG G3 OR any Harry Styles MSG event_id crosses to watch_count=3 inside 14 days
- New wl-adds: ≥3 new wl items added on MSG-anchored events inside 14 days
- Cross-venue clarity: bounce rate from /venues/msg drops below 70% (default Next.js heuristic)
```

**Why this is the next-feature, not a CRO/content improvement:** The MSG editorial flagship synthesizes the two strongest organic signals of 2026 (cross-user concentration #1 and #2) into a single navigable surface. **Without it, both signals continue to sit isolated, and the platform's strongest empirical pull is invisible to its content layer.** **With it, the cluster-affiliate flag (Phase 1F) has a coherent destination, the reactivation surface (Phase 1G) has a coherent anchor, and the next dormant-user reactivation pulse (if it arrives on an MSG event) has a place to land.**

**Owner:** Content Agent (1) leads; CRO Agent (6) supports IA; Social Agent (3) handles announcement; Growth Agent (8) measures.

---

## 5. Paywall & Upgrade Flow — Defer Until Phase 2 Activates

**Per May 22:** "Path A Freemium gates both failing; Phase 2 timeline pushed Q4 2026 at earliest." **This week's clearance of Phase 2 gate 1 week 1 of 4 reopens the possibility but does not yet justify paywall design.**

**Decision:** Defer paywall + upgrade flow design until 2 of 4 conditions hold:
1. Phase 2 gate 1 (activation rate ≥ 50% sustained 4 weeks) crosses week 2 (June 5 at earliest)
2. Phase 2 gate 2 (≥1 alert fired lifetime) is no longer at zero
3. First affiliate commission lands (provides reference revenue per user for premium pricing calibration)
4. Production deploy path identified (no point designing paywall UI that cannot ship)

**Current state:** 1 of 4 conditions trending positive (Phase 2 gate 1 week 1). **Revisit June 5 if gate 1 holds week 2.**

---

## 6. Win-Back Sequence Specs → Email Agent (Agent 5)

Per today's growth daily Section "Win-back emails queued" + this report's Prevention Actions:

### Send-ready queue (priority order):

1. **samvirsujan Day-1 accelerated target-setting + same-event compound (with joseph)** — SEND TODAY ~12h window. Body cross-references joseph's same-event activation as social proof. ~10 min hand-send.
2. **joseph reactivation target-setting + same-event compound (with samvirsujan)** — SEND TODAY ~12h window. Body cross-references samvirsujan's +19s record as social proof on the same fixture. ~10 min hand-send.
3. **cutekitten Day-14 preempt-send** — SEND MAY 30 ~23:32 UTC. Highest-EV target-capture carry (7 items, 90-105d out). ~5 min hand-send.
4. **kevinshall Match 11 T-7d + 3-missed-touches WC compound** — SEND JUNE 7. ~5 min hand-send. **Precondition for Phase 1A first-commission window.**
5. **karin Switz-Canada T-7d + 3-missed-touches WC compound** — SEND JUNE 17 ~T-7d on first match. ~5 min hand-send.
6. **cjthomas Noah Kahan T-7d + Day-21 missed compound** — SEND JUNE 5 ~T-7d window. ~5 min hand-send. **Precondition for preventing data-loss event #23 on June 12.**
7. **Manual josh AEW apology send** — DECAY-WARMING; window closes ~June 1. ~5 min hand-send.
8. **Manual nunemakerc Day-14 preempt-send** — FIRES TODAY 15:41 UTC; window closes ~4.7h from report.

**Total: 8 sends across next 14 days. Total time investment: ~50 minutes of manual outbound. Highest-EV ~50 minutes of work on the platform.**

---

## 7. Onboarding Improvement Specs → CRO Agent (Agent 6)

1. **Watchlist unarmed-state loss-frame badge** (per today's growth daily Section "Psychology-driven micro-optimization"). Completes the 3-touchpoint Cialdini stack. Ship today as the highest-leverage frontend-only fix on the platform. **0.0% → 25-40% alert-armed rate in 30 days expected.**

2. **W0 Day-0 welcome template** (per Email weekly today §1). Eliminates the Day-0/1/2 silence gap that pika + samvirsujan are currently sitting in. ~30 minutes Agent-5 design + ~30 minutes engineering wiring.

3. **Implementation-intention "Set a target by [time]" CTA** (Gollwitzer 1999). Carried from 5/22 NEW-1. ~3-5h frontend ship, engine-independent. Lowest-cost fix in the 16-stack.

4. **Domain-class welcome routing.** Carried from 5/22 NEW-6. ~2h. Hypothesis unfalsified at n=20.

5. **Goal-gradient progress bar on `/watchlist`.** Carried from 5/1. Targets the 8+ single-event users.

---

## 8. Launch Content Requests → Content Agent (Agent 1)

1. **`/venues/msg` editorial flagship overhaul** — anchors the MSG editorial flagship launch (Section 4). Includes top-of-page MSG-as-flagship-venue narrative + downstream links to Harry Styles MSG residency page + NBA Finals MSG G3 page + Knicks regular season + Rangers + comedy residencies. **Highest-EV content ship of 2026.**

2. **`/concerts/harry-styles-msg-residency` page** — carried from 5/22 NEW-2. Day 13 of crystallized opportunity. cutekitten Day-14 fires May 30; ship before end-of-day May 30 to leverage Day-14 moment.

3. **`/playoffs/nba/finals/2026/msg-game-3` page** — new this week. T-19 days to tipoff at Friday. NBA playoff coverage is at its peak Google volume; SERP arrivals on "NBA Finals MSG tickets" are the modal explanation for the May 28 burst. **Ship before June 5 to capture pre-tipoff search demand.**

4. **MSG flagship blog post: "Why MSG is TicketScan's anchor venue for 2026"** — supports Section 4 launch. Ship June 8 alongside the editorial flagship launch.

5. **Salt Shed venue page** — carried from May 9 (now Day 20+ past original deadline). sparkit Day-22 silent; Mac DeMarco passed. Lower priority but still on the backlog.

---

## 9. Launch Social Plan → Social Agent (Agent 3)

1. **MSG editorial flagship announcement (June 8)** — coordinated with Section 4 launch. X + IG + LinkedIn posts. **Frame: "MSG = our flagship venue for the summer."** Cross-link to the editorial overhaul and the two new MSG event pages.

2. **NBA Finals MSG G3 countdown content** — daily countdown posts from June 9 (T-7d) to June 16 (tipoff). Each post anchors a "Set what you'd pay" CTA back to `/event/G5diZ_7lOeIGI`.

3. **Harry Styles MSG residency countdown content** — weekly countdown posts from August 12 (T-14d on opening night) to August 26 (opening). Each post anchors a "Set what you'd pay" CTA back to `/concerts/harry-styles-msg-residency`.

4. **WC kickoff countdown content (T-13d → T-0)** — Match 11 / Match 22 / Match 101 specific posts targeting kevinshall + karin demographic profile. Daily T-7d → T-0 posts on Match 11 specifically (June 7-14).

5. **Reactivation surface narrative content (conditional)** — IF a second dormant-pool user reactivates inside 60 days, build a story arc post: "We watched 1 user come back after 23 days. Here's why." **Holds for now; trigger conditional.**

---

## Operational Notes & Backlog Carry

- **Day 53 of engine outage.** Same top engineering blockers held 8 consecutive Fridays. Each week of further delay compounds; this week added 2 more referral-program prerequisites and 1 more Phase 0 task (production-divergence investigation).
- **Day 29 of admin API regression.** Analytics weekly today escalated to "standard probe-failure baseline" methodology — meaning the regression is now older than the methodology that documented it.
- **Production-divergence discovery** is the largest single-week structural finding in 2026; merits a 30-minute Lead Architect investigation before any further ship cycle on backend or frontend code.
- **Joseph reactivation watch** — daily ~30s observation: watch_count on NBA Finals MSG G3 (event_id `G5diZ_7lOeIGI`); escalate to Ads + Content if third user adds before June 12.
- **Phase 1A affiliate flag June 7 HARD** — 9 days from report.
- **Phase 1F-NBA cluster-affiliate June 9 HARD** — 11 days from report; same code path as August 19 Harry Styles ship.
- **Phase 1F-Harry-Styles August 19 HARD** — 82 days from report; not at-risk this week but no scoping moved either.
- **Next Friday's report (June 5):** Verify Phase 2 gate 1 week 2 (activation rate sustained ≥ 50%). Verify NBA Finals MSG G3 watch_count third-user observation. Verify Phase 1A + 1F ship status (deadlines June 7 + 9 hit during the week).
