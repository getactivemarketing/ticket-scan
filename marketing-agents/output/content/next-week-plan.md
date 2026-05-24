# Content Calendar — Week of May 25 – 31, 2026

## This Week's Audit (May 18 – May 24)

### What shipped

| Date | Type | Title/Action | Status |
|------|------|--------------|--------|
| Mon May 18 | Big-idea blog | "The Conference Finals Pricing Window: Why Game 1 and Game 5 Are the Two Cheapest Tickets of Any Seven-Game Series" | **Drafted, NOT published** |
| Tue May 19 | Tactical blog | "The 3-Minute Watchlist Audit: Cull Your Stale Alerts Before Memorial Day Weekend" | **Drafted, NOT published** |
| Wed May 20 | News blog | "Conference Finals Game 2: How a Single Section Spread $42 Across Three Platforms" | **Drafted, NOT published** |
| Thu May 21 | Comparison blog | "Memorial Day Weekend 2026: 8 Sports and Concert Events Worth Tracking by Price" | **Drafted, NOT published** — publish window now actively closing this weekend |
| Fri May 22 | Venue refresh | Gillette Stadium — 3 to 9 sections + FIFA Cat mapping + Patriots SB LIII comp + I-95 commuter rail honesty | **Committed (`3465cc5`)** |
| Sat May 23 | Venue refresh | Lincoln Financial Field — 3 to 9 sections + FIFA Cat mapping + SEPTA transit-positive + 2024 Copa America Group D comp | **Committed (`4414322`)** |
| Sun May 24 | Audit + plan + content-hook | This document + content-hook + cross-agent SEO heads-up | **In progress** |

### What worked

- **4/4 blog drafts shipped Mon–Thu for the FOURTH consecutive week.** Mon `2026-05-18-conference-finals-pricing-window-game-1-game-5-cheapest.md` (big-idea, 7-game-series pricing-curve framework with 3-season historical data), Tue `2026-05-19-three-minute-watchlist-audit-cull-stale-alerts-2026.md` (tactical 4-archetype cleanup checklist), Wed `2026-05-20-conference-finals-game-2-cross-platform-pricing-may-2026.md` (news/timely cross-platform single-event variance piece), Thu `2026-05-21-memorial-day-weekend-2026-events-worth-tracking-by-price.md` (8-event listicle with cross-platform pricing). **The Mon→Wed framework→news pair-publish structural pattern executed for the second consecutive week** (after the 5/11→5/13/5/14 cluster) — Mon framework piece + Wed news piece + Thu comparison listicle = a coherent 4-day Conf Finals + Memorial Day content arc.
- **2/2 refreshes shipped Fri + Sat with the FIFTH consecutive Friday/Saturday pair-slot pattern.** Gillette Stadium (Fri 5/22, `3465cc5`) expanded from 3 generic sections to 9 specific sections with FIFA Cat 1-4 mapping, Patriots Super Bowl LIII pricing comp, Revolution Open Cup three-final stack, I-95 commuter rail transit-honesty disclosure. Lincoln Financial Field (Sat 5/23, `4414322`) expanded from 3 to 9 sections, **SEPTA Broad Street Line direct subway service as the structurally-uncontested USA-WC-venue transit-positive angle**, 2024 Copa America Group D at this exact venue pricing comp, Group E bookends (M10 Matchday 1 + M58 Matchday 3 stakes-aligned finale, two-trip supporters angle), Philadelphia June peak-heat-and-humidity weather honesty for all three afternoon matches. **Five consecutive Fri/Sat pair-slots now establishes the sparse-venue refresh pattern as the most reliable production lever in the program.**
- **Forward Fix v2 second canonical execution shipped clean.** Lincoln Financial Saturday refresh ran the canonical order-of-operations: Step 1 SEO heads-up file as session-artifact-1 (`seo-requests/2026-05-23-content-data-touch.md`), same-morning cadence (not evening-prior), mtime ordering preserved. Gillette Friday refresh ran the same pattern. **Two consecutive non-test executions ran clean — Forward Fix v2 is canonical from 5/22 forward.**
- **Step 0 cross-check produced TWO catches in 2 days (Gillette off-by-three on 5/22, Lincoln Financial off-by-two on 5/23).** Both catches were downstream (Step 0 ran inside the Friday and Saturday refresh sessions, AFTER the venue rows were already wrong in the upstream Sunday plan). This established the structural finding that the upstream Sunday-plan-composition cross-check absorption (supposed to land 5/10) had NOT actually held — the Levi's 5/16 PASS was an isolated clean pass against 3 misses in 4 Sundays. **Yesterday's recommended fix** (file the pre-composition Step 0 grep as a hard gate at Sunday session start) **executed cleanly today** — both NRG and Arrowhead were caught BEFORE the next-week plan composition, off-spec corrections flowed into Friday + Saturday briefs without downstream refresh-execution hits.
- **Three pure-Group-Stage US WC venues confirmed final** at exactly Levi's + Gillette + Lincoln Financial. NRG and Arrowhead are the last two US WC venues without prior knockout-content audits; today's grep confirms both have R16 assignments (NRG R16-7, Arrowhead R16-8). **The "three cheapest US WC venues" content cluster anchor is now structurally final, not provisional.** Cascading correction landed cleanly across the 5/16 Levi's "only" overstatement and the 5/22 Gillette "one of two" overstatement.
- **First organic cross-user concentration signal validated** per the analytics weekly (Friday 5/22): cutekitten1234's 7-item Harry Styles MSG residency burst (May 16) exactly overlapped 7-of-11 of tosophiameyer's March 10 adds. **First non-duplicate-event-ID cross-user concentration on the platform.** Currently 8 days uncaptured by content (no Harry Styles MSG residency draft in queue, no `/concerts/harry-styles-msg-residency` SEO page) — this is the strongest demand-signal-to-content gap the program has produced and is named as Tue 5/26 tactical slot in this week's plan (below).
- **Honest `Content refresh:` commit prefix held SEVEN consecutive venue refreshes.** Wrigley (5/04 `636e40b`), AT&T (5/08 `305cb11`), Mercedes-Benz (5/09 `40b75bf`), Lumen Field (5/15 `be62734`), Levi's (5/16 `1f32826`), Gillette (5/22 `3465cc5`), Lincoln Financial (5/23 `4414322`). **Ten consecutive clean marketing-output commits** since the Day-17 channel-leak precedent. The freeze-period source-code-commit hygiene remains the strongest discipline metric in the program.

### What didn't work / gaps

- **Publishing velocity = 0 (Day 47, +7 days vs last week).** Last published post: 2026-04-07 (commit `c0dcf5a`). Today: 2026-05-24. **Forty-seven days.** Backlog at **23 drafts** (4 new Mon-Thu drafts + 19 pre-existing). **Sixteenth consecutive Sunday-or-Monday-plan-opener flagging the publish bottleneck.** The drafting:publishing ratio is now Δ +4 drafts/week : 0 publishes/week for the **tenth consecutive week**. **Realized loss-to-decay: 3 of 23 drafts (13.0%)** — the 4/14 NBA Round-1 SHELVED (5/10), the 5/07 All-In Pricing FTC-anniversary forfeited (5/12), and **the 5/21 Memorial Day Weekend Listicle is actively forfeiting RIGHT NOW** with the search-intent window closing through Sunday evening + Monday Memorial Day. **Fourth loss in motion:** the 4/22 FIFA-resale "three weeks of data" framing is now 32-days-stale; ~3-line freshen instead of original 1-line; freshen-burden compounds linearly.
- **`archived/` folder still doesn't exist.** Twelfth consecutive week with the archive recommendation. 4/8 piece (NBA/NHL Round-1) and 4/14 piece (NBA Round-1 compare prices) need to land in archive; folder creation + `git mv` ~60 seconds of Lead Architect time.
- **`extractLowestPrice` patch — Day 14 unabsorbed, SIX stadium pages now affected** (AT&T, Mercedes-Benz, Lumen, Levi's, Gillette, Lincoln Financial). The 3-line patch filed 5/10 in `seo-requests/2026-05-10-seo-replies-bundle.md` §Reply 1 remains unabsorbed; today + this week's Friday + Saturday refreshes (NRG 5/29, Arrowhead 5/30) will be ships #7 and #8 into the bug. Pattern is structural; ~90-min Lead Architect session clears the entire publish queue + this patch + the bundle merge in a single window.
- **CRO Day 38 of 100% null `target_price`.** No movement. The 5/12 + 5/19 watchlist-failure-mode content pair is shipped at the structural-content layer; the UI fix remains upstream.
- **Watchlist drought broken on 5/16 but compressed to 0.29/day floor this week.** Last week's per-day watchlist floor was 1.43/day; this week's collapsed to 0.29/day (-80% step-down in 24h, the largest single-day floor compression in dashboard history). Two adds across the entire 7-day window — lisallam's JOJI add 5/17 + zhouyilin's West Conf Finals add 5/20 at the fastest-ever activation latency (+20 seconds). **All 5 archetypal activators have now empirically failed Day-1+ retention (cutekitten Day-2, karin Day-5, kevinshall Day-7, lisallam Day-5, zhouyilin Day-1)** — the 0-of-130 user-day retention tally is now structural disproof that any acquisition shape predicts return-session behavior.
- **Email Agent drip queue: 6 net new email triggers for today's 10:00 UTC tick** per analytics this morning (3× Email 1 + 2× Email 2 + 1× Email 3 — the first-ever Email 3 fixture fired yesterday against the broken cron). Cron Day 47.
- **Three permanent data-loss events confirmed this week** (Inter Miami × Portland 5/17, Bruno Mars Ohio Stadium 5/20, SEC Baseball Hoover Session 5 5/21) + **two more in motion** (SEC Session 6 and West Conf Finals Game 3 both fired with `/api/admin/price-history` Day 47 silent and `/api/admin/alerts` Day 47 silent). **First 2-concurrent-at-risk-day in dashboard history landed Thursday 5/22.** This is the active driver of accelerating loss — 3 events in the first 4 days of the past week; 2 more in the next 18 hours; rate is doubling, not stabilizing.
- **Harry Styles MSG cross-user concentration signal — Day 8 uncaptured by Content + SEO surfaces.** First non-duplicate-event-ID 2-of-N concentration on the platform; demand-signal validated; content surface = zero; SEO page = zero. **The publish-bottleneck root cause that swallowed Nu Stadium (Jan), Bruno Mars tour-hub (Apr), and the FTC anniversary (May 12) is now also swallowing the platform's first organic concentration signal.** Today's plan composes the Harry Styles residency piece into the Tue 5/26 tactical slot to break the pattern.

### Copy review of queued drafts (all twenty-three unpublished)

**This week's drafts (4 reviewed — 1 critical freshen required for Sunday-afternoon publish window, 3 ready as-is):**

- `2026-05-18-conference-finals-pricing-window-game-1-game-5-cheapest.md` — **6 days old.** Frontmatter clean (slug `conference-finals-pricing-window-game-1-game-5-cheapest`, excerpt under 200 chars, `category: guides`). Body voice strong — 3-season NBA + NHL Conf Finals data + 7-game-series pricing-curve framework. **Verdict: ready to publish, no edits required. Strongest publish-window: any time in next 14 days — peak Conf Finals relevance reactivates with every Games 4-5-6-7 in either NBA or NHL series; NBA Finals (early June) is the second peak relevance window.**
- `2026-05-19-three-minute-watchlist-audit-cull-stale-alerts-2026.md` — **5 days old.** Frontmatter clean. **Mild freshen call:** lead references "Memorial Day weekend" in present-anticipatory tense ("Memorial Day weekend is T-6 days") — today's publication would land mid-weekend; ~1-line freshen from "T-6 days" → "right now / this weekend." Body content (the 3-minute audit framework) is fully evergreen and unaffected. **Verdict: publish today or tomorrow with the 1-line lead freshen; publish anytime in next 21 days as fully-evergreen with the lead reframe to "before any high-traffic weekend." Strongest publish-window: today through Tue 5/26.**
- `2026-05-20-conference-finals-game-2-cross-platform-pricing-may-2026.md` — **4 days old.** Frontmatter clean. Body content references Game 2 specifically (Wed 5/20 publication target was set to capture the post-Game-1 + pre-Game-2 buyer-decision window for Eastern Conf Finals). **Time-frame is now 4 days stale** — Game 2 already fired. **Freshen call:** 2-line lead reframe from "Game 2 is two nights from now and here's the cross-platform spread" → "Eastern Conf Finals Game 2 cleared two nights ago; here's what the cross-platform spread told us and what it means for Game 4 and Game 5." Cross-platform variance methodology + the $42 single-section spread headline number remain unaffected. **Verdict: publish today or tomorrow with the 2-line lead freshen; pair-publish with the 5/18 framework piece for the Conf Finals two-piece cluster. Strongest publish-window: today through Mon 5/25.**
- `2026-05-21-memorial-day-weekend-2026-events-worth-tracking-by-price.md` — **3 days old. ACTIVE DECAY — publish window closes Monday evening 5/25.** Frontmatter clean. Body content references "this weekend" in present-anticipatory tense throughout — today's publication lands MID-WEEKEND. **Critical freshen call:** ~4-line freshen at the top: drop the "we're heading into" preview frame, swap for "Memorial Day Weekend is here. Saturday's Conf Finals Game 3 East already wrapped; here are the seven events still inside the search-intent window through Monday night." Drop the 3 already-past events (#1 Conf Finals East Game 3 fired Sat, three Saturday-night MLB rivalry games fired Sat, Saturday-night NHL fired Sat), retain 5: West Conf Finals Game 3 (tonight), Sunday MLB Yankees-Dodgers + Dodgers-Giants + Cubs-Cardinals Sunday games, Memorial Day Monday matinees, and the Coldplay tour opener / summer-touring kickoff retains for the Monday window. **Verdict: publish TODAY (Sunday 5/24 afternoon) with the 4-line freshen + 3-event dropout, OR forfeit to realized decay loss #3 by Mon evening.** The reframe is roughly 15 minutes of editing time. Lead Architect call.

**Last week's drafts (4 reviewed clean from prior Sunday's audit; verdict carried forward + decay updates):**

- `2026-05-11-stadium-tour-three-night-residencies-2026.md` — **13 days old.** No edits required. Fully-evergreen big-idea piece. **Verdict: publish anytime in next 30 days.** Strongest pair-publish: alongside the new Tue 5/26 Harry Styles MSG residency piece — the 5/11 framework + a Harry Styles MSG case-study = perfect two-piece anchor on the multi-night-residency thesis with a live-and-validated demand signal.
- `2026-05-12-smart-target-prices-ticket-watchlist-floor-math.md` — **12 days old.** No edits required. **Verdict: publish anytime in next 30 days.** Strongest pair-publish: alongside the new Tue 5/26 Watchlist Audit follow-up piece (if any) or the existing 5/19 Watchlist Audit piece — the 5/12 + 5/19 pair forms the watchlist-failure-mode trio with the 5/05 welcome-flow piece. **Tuesday 5/26 publish would land alongside the 6 email-trigger queue (3× Email 1 + 2× Email 2 + 1× Email 3) — the strongest manual-send candidate-set day of Q2 if cron unblocks.**
- `2026-05-13-yankees-vs-red-sox-yankee-stadium-rivalry-pricing-may-2026.md` — **11 days old.** Last week's 1-line freshen call carried forward — series ended 5/15 so the "are home through Thursday" lead is now 11 days stale. Updated freshen target unchanged from last week. **Verdict: publish anytime in next 21 days with the 1-line freshen.** Natural pair-publish: alongside 5/14 piece per the original Wed→Thu pair-publish structural design.
- `2026-05-14-mlb-rivalry-week-pricing-tier-guide-2026.md` — **10 days old.** No edits required. **Verdict: publish anytime in next 21 days — MUST publish within 24 hours of the 5/13 piece for the cross-link reciprocation to land.** Strongest pair-publish: Wed-Thu of any week in next 21 days.

**Pre-existing backlog (15 drafts; freshen-burden updates as of today):**

- `2026-04-08-nba-nhl-playoff-tickets-2026-buying-guide.md` — **47 days old. Thirteenth consecutive week with archive recommendation.** **Verdict: ARCHIVE.** `archived/` folder still doesn't exist.
- `2026-04-14-nba-playoff-tickets-compare-prices.md` — **40 days old. SHELVED 5/10 per audit, still in folder.** **Verdict: ARCHIVE.**
- `2026-04-15-world-cup-2026-seat-assignments-bait-switch.md` — **39 days old.** Freshen-burden upgrade: "under two months until the opener" → "under three weeks until the opener." ~2-line freshen. **Verdict: publish anytime in next 14 days with the freshen.** Strongest pair-publish: alongside 4/22 + 4/29 in a WC T-18-to-T-14 triple-publish.
- `2026-04-16-best-ticket-comparison-sites-2026.md` — **38 days old. Fully evergreen; the strongest voice in the queue.** **Verdict: PUBLISH MONDAY 5/25 MORNING.** Sixteenth consecutive Sunday/Monday flag — the foundation publish that seeds `/compare` graph for the entire remaining queue.
- `2026-04-21-how-to-compare-ticket-prices-30-seconds.md` — **33 days old.** No edits required. Tactical companion to the 4/16 piece. **Verdict: publish Tuesday 5/26 — `/compare` graph reinforcement.**
- `2026-04-22-fifa-resale-three-weeks-data-world-cup-2026.md` — **32 days old. FRESHEN-BURDEN UPGRADED.** "For the last 20 days we've been pricing..." → "for the last 50+ days we've been pricing..." plus dataset citation may need a numerical refresh from 33 matches → updated count. ~3-line freshen instead of original 1-line. **Verdict: publish Wednesday 5/27 paired with 4/29 + 4/15 for the WC T-15 triple-publish.**
- `2026-04-23-ticketmaster-vs-seatgeek-fees-2026.md` — **31 days old. Already-fulfilled SEO Ask 5 Post 1.** No edits required. **Verdict: publish Tuesday 5/26 alongside the 4/30 SH-vs-VS piece** for the Q2 comparison-series double-publish.
- `2026-04-27-summer-concert-tour-2026-ticket-buying-guide.md` — **27 days old.** Freshen-burden upgrade from "early May" / "mid-May" → "late-May / Memorial-Day-weekend frame." **Verdict: publish Thursday 5/28 paired with the new Thu 5/28 comparison piece** for the Memorial-Day-recap + summer-touring-kickoff frame.
- `2026-04-28-same-day-nba-playoff-tickets-6-hour-playbook.md` — **26 days old.** No edits required. Conf Finals Games 4-7 still imminent over the next week + NBA Finals starts early June. **Verdict: publish Tuesday 5/26 or Wednesday 5/27** to capture Conf Finals Game 4/5/6 + NBA Finals search-volume.
- `2026-04-29-world-cup-2026-general-sale-closing-april-2026.md` — **25 days old. FRESHEN-BURDEN UPGRADED.** "Today is April 29. The opener is June 11. That gives you 43 days." → "Today is [date]. The opener is June 11. That gives you [N] days." Drop the date-anchored opener entirely + reframe to "T-N days from kickoff." Dataset cites "27 days now, three times a day" — needs update to current ~52 days. ~5-line freshen + section-heading recompose. **Verdict: publish Wednesday 5/27 paired with 4/22 + 4/15** for the WC T-15 triple-publish.
- `2026-04-30-stubhub-vs-vivid-seats-2026.md` — **24 days old.** No edits required. Q2 comparison-series capstone. **Verdict: publish Tuesday 5/26 alongside 4/23.**
- `2026-05-04-cubs-vs-reds-wrigley-field-pricing-48-hours-may-2026.md` — **20 days old.** Freshen-burden upgrade: original "Cubs vs Reds 5/4-5/6" frame → generalize to "any mid-week Wrigley series this season." ~2-line freshen. **Verdict: publish Thursday 5/28 with the freshen** as the Wrigley venue-page inbound-link unblock.
- `2026-05-05-first-price-drop-alert-five-minutes-ticketscan-walkthrough.md` — **19 days old.** No edits required. **Verdict: publish Tuesday 5/26** as the tactical onboarding companion to the new Tue 5/26 Harry Styles MSG residency piece (if user discovers a new event to track, the welcome-flow piece is the natural next step).
- `2026-05-06-bruno-mars-romantic-tour-2026-venue-price-guide.md` — **18 days old.** No edits required. **Verdict: publish anytime in next 14 days.** Strongest pair-publish: alongside the new Tue 5/26 Harry Styles MSG residency piece (both single-artist multi-venue/multi-night pricing playbooks).
- `2026-05-07-all-in-pricing-tickets-2026-junk-fees-explained.md` — **17 days old. ANNIVERSARY WINDOW FORFEITED.** Realized decay loss #2. The underlying FTC-rule explainer content remains evergreen-publishable; the anniversary placement (featured + homepage) is no longer applicable. **Verdict: publish anytime in next 60 days, no edits required, no featured-placement.**

**Recommended Mon-Sat publish bundling for maximum Conf Finals Game 4-7 + NBA Finals + WC T-15 + Memorial Day Tuesday-after-holiday leverage:**

- **Sun 5/24 PM (TODAY, if Lead Architect bandwidth opens):** Memorial Day Weekend listicle (with 4-line freshen + 3-event dropout per the §"Copy review" §last-week's-drafts above). **The single highest-leverage publish in the queue today; closes by Monday evening.** Single publish, ~15-minute total time investment.
- **Mon 5/25 (Memorial Day) AM:** `2026-04-16-best-ticket-comparison-sites-2026.md` (foundation publish — `/compare` graph seed for the entire week's cross-link surface) + the new Mon 5/25 big-idea draft "Three Cheapest US WC Venues" piece. **Two publishes**, Memorial Day morning, foundation + big-idea anchor for the WC T-17-to-T-14 content week.
- **Tue 5/26 AM (Tuesday post-Memorial-Day work-week resumption — strongest WC-pricing + summer-tour-kickoff Tuesday of the year):** the new Tue 5/26 Harry Styles MSG residency piece + 4/23 (TM vs SG fees) + 4/30 (SH vs VS) + 5/05 (welcome-flow) + 5/12 (Smart Target Prices) + 4/21 (compare-in-30s) + 4/28 (NBA same-day playbook). **Seven publishes**, the largest single-Tuesday publish day in program history.
- **Wed 5/27 AM:** the new Wed 5/27 news piece (Conf Finals Games 6/7 cross-platform OR NBA Finals T-7 pricing preview, whichever has higher organic search volume by Wed 06:00 ET) + 4/22 (FIFA resale data with 3-line freshen) + 4/29 (WC general-sale closing with 5-line freshen) + 4/15 (WC seat assignments with 2-line freshen). **Four publishes**, WC T-15 triple-publish + Wed news.
- **Thu 5/28 AM:** the new Thu 5/28 comparison piece + 5/04 (Cubs/Reds Wrigley with 2-line freshen) + 4/27 (Summer Concert Tour with freshen) + 5/06 (Bruno Mars) + 5/11 (Stadium Tour Three-Night Residencies) + 5/13 (Yankees-Red Sox with 1-line freshen) + 5/14 (MLB Rivalry Tier Guide). **Seven publishes**, summer-touring + MLB-rivalry septuple-publish.

**That's 22 of the 23 actionable drafts published in 6 days (Sun→Thu), leaving only the 5/07 All-In Pricing piece for a follow-up week + 4 of next week's new Mon-Thu drafts as the rolling-buffer.** This is the queue-clearing plan if Lead Architect bandwidth opens. Priority order if only partial bandwidth available:

1. **TODAY 5/24 PM: Memorial Day Weekend listicle** (closes by Monday evening — single highest-leverage publish today)
2. **Mon 5/25 AM: 4/16 best-comparison-sites** (foundation for all comparison-series cross-links + new Mon Three Cheapest Venues big-idea anchor)
3. **Wed 5/27 AM: 4/22 + 4/29 + 4/15 WC T-15 triple-publish** (highest-organic-search-volume window of Q2 for WC content)
4. **Tue 5/26 AM: new Harry Styles MSG residency piece** (captures the 9-day-uncaptured cross-user concentration signal before it cools)
5. **5/13 + 5/14 as Wed→Thu structural-pair publish** (still publishable; pair-publish boost holds)

### Cross-Agent output review

- **Social Agent:** Daily social outputs ran continuously through the week (`social-daily-2026-05-{18..23}.md` all present; 5/24 lands later today). 4/4 blog drafts gave 4 native promotion moments; the Fri/Sat refresh pair gave 2 venue-amplification moments. **Outstanding (now seventh reporting week):** Instagram template rotation. **The Wed 5/20 "pull-from-active-channel-mix decision deadline" was missed.** Re-escalating: recommend pulling Instagram from active channel mix Mon 5/25 if Lead Architect ships no template variants by EOD Sunday. Reallocate effort to Threads + X + LinkedIn until variants land. **The new Conf Finals Pricing Playbook PDF lead magnet from week of 5/18 provides a high-share-affordance asset to test rotation variants against immediately if Lead Architect ships any variants.**
- **SEO Agent:** Day 32 of `seo-bundle-watch.md`. `extractLowestPrice` patch Day 14 unabsorbed. **Pre-composition Step 0 grep gate added today** (`seo-requests/2026-05-24-content-data-touch.md` filed as session-artifact-1 at 06:15 ET, before any next-week-plan composition). NRG + Arrowhead both off-spec vs last Sunday's plan; both caught BEFORE composition; corrected match data flows into Friday + Saturday refresh briefs below. **Step 0 hit rate updates to 9-of-10 (90%); 2-of-5 (40%) since the upstream cross-check was supposed to absorb on 5/10.** The gate makes Sunday-plan composition compose-against-grep-ground-truth rather than compose-against-prior-document-memory.
- **Email Agent:** Drip queue ~6 net new triggers for today's 10:00 UTC tick (3× Email 1 brock/zhouyilin/keegansmith Day-3 + 2× Email 2 cutekitten/belder Day-7 + 1× Email 3 jmoriarty13 Day-14). Cron Day 47 dead. **Tuesday 5/26's content-package** (Smart Target Prices + Watchlist Audit + Welcome Flow + Harry Styles MSG residency) **is the strongest single-day Email-newsletter-send candidate set in the program history** if cron unblocks.
- **CRO Agent:** Day 38 of 100% null `target_price`. Day 31 post-signup UX audit overdue. **Content side closed via the 5/12 + 5/19 + 5/05 trio.** The UI fix Lead Architect call remains the upstream blocker.
- **Analytics Agent:** **Watchlist floor collapse to 0.29/day** + **first sub-1.0/day signup floor in dashboard history** + **fourth zero-net day in 5-day window** + **0-of-130 user-day retention measurement-grade zero.** The two halves of the funnel are accelerating apart — acquisition shipped its best Day-0 burst of 2026 the same week retention shipped 0-of-130. Conf Finals / Memorial Day Weekend / WC T-18 / Harry Styles MSG = next week's four prioritized content surfaces; all are direct demand-signal-to-content responses.
- **Paid Ads Agent:** Continue holding (Day 42). The 0.86/day signup floor + 0.29/day watchlist floor + 4-of-5 zero-net days + 5 confirmed data-loss events make paid spend an even worse CAC multiplier than last week on a still-sealed funnel.

---

## Next Week's Blog Plan (May 25 – 31)

### Monday, May 25 (Memorial Day) — Big-idea blog: The Three Cheapest US World Cup Venues

**Title:** "The Three Cheapest US World Cup Venues: Why Levi's, Gillette, and Lincoln Financial Are Where the Group-Stage Bargains Live"
**Slug:** `three-cheapest-us-world-cup-2026-venues-group-stage`
**Category:** `guides` (evergreen big-idea piece anchored on a structurally-final dataset)
**Angle:** Today's Step 0 grep on NRG + Arrowhead confirmed the pure-Group-Stage US WC venue cluster is structurally final at exactly 3: **Levi's Stadium ($80 floor, Bay Area), Gillette Stadium ($110 floor, Foxboro), Lincoln Financial Field ($125 floor, Philadelphia).** All three host exactly 3 Group Stage matches each, zero knockout. **The no-knockout-premium framework** means each venue's pricing ceiling is structurally capped by zero elimination-round content — every other US WC venue has knockout-premium spillover into Group Stage pricing via the venue's marketing of knockout-round content.

Cover: the three-venue cluster anchor (9 matches total, 3 per venue), the FIFA Cat 4 pricing floors at each ($80/$110/$125), the no-knockout-premium framework with side-by-side comparison to the 8 knockout-bearing US WC venues' equivalent FIFA Cat 4 floors, the buyer playbook for fans optimizing on price (target one of the three pure-Group-Stage venues for cheapest possible US WC experience), the structurally-uncontested-to-competitors framing (the three-venue cluster is final per `worldcup.ts`; no future schedule revision can break the cluster without FIFA reassigning knockout-round matches). Anchor the 5/16 Levi's refresh, 5/22 Gillette refresh, 5/23 Lincoln Financial refresh, and 4/16 best-comparison-sites piece for reciprocal cross-link cluster.

**Why now:** WC T-17 days from kickoff. The "three cheapest venues" angle captures the price-optimizing buyer segment at peak relevance + Memorial Day Monday is a search-low-but-content-seed window (the piece publishes Memorial Day morning to seed reciprocal cross-links for the entire WC T-14 to T-7 content runway). **No competitor currently owns "cheapest US World Cup tickets" search surface** at this structural-claim depth — TickPick / Vivid / SeatGeek blog posts haven't surfaced a 3-venue-cluster framework.

**Target keywords:** "cheapest world cup 2026 tickets," "cheapest US world cup venue," "world cup group stage tickets," "Levi's vs Gillette vs Lincoln Financial World Cup tickets," "world cup ticket bargains 2026," "world cup 2026 group stage only," "FIFA Category 4 World Cup tickets"

**Length:** 1000-1200 words. Three H2s minimum (the three-venue cluster, the no-knockout-premium framework, the buyer playbook). Tables: per-venue match table (9 matches, 3 per venue with date/time/group/category), cross-venue FIFA Cat 4 floor table (3 pure-Group-Stage vs 8 knockout-bearing US WC venues).

**CTA:** "Compare prices across Levi's, Gillette, and Lincoln Financial on TicketScan" + comparison-tool link + "Set a free price alert on the Group Stage match you want to attend."

### Tuesday, May 26 — Tactical blog: Harry Styles MSG seven-night residency case study

**Title:** "Harry Styles at MSG: Seven Nights in Fifteen Days — Where the Per-Night Pricing Bargains Live"
**Slug:** `harry-styles-msg-seven-night-residency-2026-pricing-playbook`
**Category:** `tips` (single-artist single-venue tactical case study; demand-signal-validated)
**Angle:** Harry Styles plays Madison Square Garden seven times across August 26, 28, 29, September 2, 4, 5, 9 — a 15-calendar-day window with one of the longest multi-night-residency arcs at MSG in any year of the venue's history. **The 5/11 Stadium Tour Three-Night Residencies piece's "Night 1 marquee / Night 2 softens 15–25% / Night 3 day-of-week dependent" framework extends naturally to a 7-night residency** with predictable per-night pricing curves: Night 1 (Aug 26, Wednesday — Tour Opener premium), Nights 2-3 (Aug 28-29, Friday-Saturday — Weekend premium), Nights 4-7 (Sept 2-5-9, mid-week + weekend mix — softer pricing band).

Cover: the seven-night residency itself, the per-night pricing-curve forecast structured on the 5/11 framework, the buyer playbook for finding the cheapest of the 7 nights (Wednesday September 2 + Wednesday September 9 are the structural pricing-floor candidates; Saturday August 29 is the structural pricing-ceiling), the cross-platform pricing comparison methodology applied to a single-artist single-venue dataset, the broader "stadium tour to MSG residency to single-arena multi-night" trend that defines 2026 touring (this is the case study; the 5/11 piece is the framework). Anchor the 5/11 Stadium Tour Three-Night Residencies piece + the 4/16 best-comparison-sites piece + the existing `/venues/msg` page (creates first inbound `/blog/*` link to that venue page in 2026).

**Why now:** **Cross-user concentration signal Day 9 uncaptured** — cutekitten1234's 7-item Day-0 burst (May 16) exactly matches 7-of-11 of tosophiameyer's March 10 adds. Two real users care enough about exactly the same 7 nights to add them all to TicketScan watchlists. **First non-duplicate-event-ID 2-of-N concentration on the platform.** The piece converts the demand signal into content surface and seeds the `/concerts/harry-styles-msg-residency` SEO surface that no competitor currently owns. **Highest demand-signal-to-content-conversion opportunity in the program** — the demand signal is validated; the framework is already drafted in the 5/11 piece; the SEO upside is uncontested.

**Target keywords:** "Harry Styles MSG tickets 2026," "Harry Styles Madison Square Garden 2026," "Harry Styles 7 night MSG residency," "Harry Styles MSG August September 2026," "Harry Styles MSG cheapest night," "MSG residency tickets 2026"

**Length:** 700-900 words. Two H2s minimum (the residency itself, the per-night pricing-curve forecast) + one H3 callout (the buyer playbook). Tables: per-night pricing-curve forecast table (Night 1-7 with day-of-week + tier framework + expected pricing band).

**CTA:** "Track all 7 Harry Styles MSG nights with a single price-alert sweep" + watchlist tool link + "Compare prices across Ticketmaster, SeatGeek, and StubHub on TicketScan."

### Wednesday, May 27 — News/timely blog: WC T-15 days pricing curve OR Conf Finals Game 6/7

**Title (placeholder — Tuesday evening decision):** "World Cup 2026 T-15 Days: Where the Final Two Weeks of Pricing Movement Lives" **OR** "Conference Finals Game 6/7 Pricing Window: How the Elimination Math Reverses the Curve"
**Slug (placeholder):** `world-cup-2026-t-15-days-final-two-weeks-pricing` OR `conference-finals-game-6-game-7-pricing-elimination-math`
**Category:** `news` (timely, tied to Wed 5/27 publication of either the WC T-15 inflection-point window OR the Conf Finals decisive-game pricing window — whichever has higher organic search volume by Tue 06:00 ET)
**Angle (WC option):** The T-21 to T-7 window is the single highest-organic-search-volume WC-pricing window of Q2. T-15 falls dead-center in the window — the inflection point where FIFA-direct Last-Minute Sales inventory thins fastest and resale-platform-only listings dominate. Cover the inflection point itself, the typical pricing-movement patterns inside T-15 to T-7 windows (per prior FIFA tournament data), the buyer playbook for fans deciding "buy now vs wait two weeks," the cross-platform variance frame (FIFA-direct vs resale platforms inside the T-15 window).
**Angle (Conf Finals option):** Whichever Conf Finals series reaches Games 6 or 7 by Wed 5/27 gets the pricing-elimination-math frame. The 5/18 framework piece established Games 1 and 5 as the structural pricing-floor candidates; the Games 6/7 piece is the structural-pricing-ceiling counterpart. **Elimination math fully activated = structural pricing-ceiling** is the headline thesis.

**Decision rule:** Tuesday 5/26 06:00 ET — check Google Trends for "world cup 2026 tickets" vs "nba conference finals tickets" + check NBA + NHL Conf Finals series scores. If either series is 3-2 (Game 6 imminent) or 3-3 (Game 7 imminent), the Conf Finals piece is structurally higher-leverage. If both series are settled (4-1 or 4-2 with no Game 6/7), default to the WC T-15 piece.

**Why now:** Wed 5/27 is structurally the highest-organic-search-volume Wednesday of Q2 (post-Memorial-Day work-week resumption + WC T-15 inflection-point + Conf Finals Game-6-or-7 window). The piece is the news-timely anchor for the week.

**Target keywords (WC):** "world cup 2026 tickets t-15," "world cup 2026 last minute sales," "fifa resale t-15 days," "world cup pricing inflection point"
**Target keywords (Conf Finals):** "nba conference finals game 6 tickets," "nba conference finals game 7 tickets," "nhl conference finals game 7 tickets," "elimination math tickets," "conference finals decisive game pricing"

**Length:** 700-900 words. Two H2s + one H3 callout. Tables: pricing-curve table (T-21 / T-15 / T-7 framework with WC matches OR Games 1-7 framework with eliminated-game-removed math).

**CTA:** "Set a price alert for [WC matches you're tracking / Game 6 or 7 outcomes]" + comparison-tool link.

### Thursday, May 28 — Comparison blog: 2026 NBA Finals vs Stanley Cup Finals Pricing Preview

**Title:** "2026 NBA Finals vs Stanley Cup Finals: Which Championship Series Is Actually the Better Ticket Value?"
**Slug:** `nba-finals-vs-stanley-cup-finals-2026-ticket-value-comparison`
**Category:** `comparisons` (comparison + listicle hybrid, strongest social-shareable format)
**Angle:** NBA Finals tip off ~June 4-6 (depending on Conf Finals series length); Stanley Cup Finals start ~June 4-7 (similar). Both Championship series run concurrently for ~3 weeks; both peak in organic search volume in early-to-mid June. **The cross-league pricing comparison** is structurally underwritten in competitor content (StubHub + SeatGeek blogs both cover each in isolation; no comparison blog has built the cross-league pricing comparison at depth). **TicketScan's cross-platform pricing data uniquely enables the comparison** — comparing 4 platforms × 7 games × 2 series at the same data window is the structural advantage no competitor blog can replicate.

Cover the cross-league comparison framework (NBA Finals pricing benchmarks vs Stanley Cup Finals pricing benchmarks at equivalent series stages), the seven-section-band-per-arena comparison framework, the venue-specific premium math (NBA Finals tends to land in marquee-venue cities — Madison Square Garden / Crypto.com Arena / TD Garden; Stanley Cup Finals can land in less-prestigious arenas — Bell Centre / Climate Pledge / Honda Center), the buyer playbook for fans deciding between cross-league championship ticket investment, the cross-platform variance frame (which platform is structurally cheapest for which series — TicketMaster owns the NBA Verified Resale surface while StubHub owns the NHL surface).

**Why now:** NBA Finals tip-off in ~7-10 days; Stanley Cup Finals tip-off in ~7-10 days. **Thu 5/28 publish lands at peak pre-Finals search-volume window** — fans are pricing out potential Game 1-4 ticket purchases this week before either series tips off. Pairs with the 5/18 Conf Finals framework piece + the 5/20 Conf Finals Game 2 cross-platform piece + the 4/28 same-day-playoff playbook piece for a 4-piece Q2 playoff-pricing content cluster.

**Target keywords:** "nba finals 2026 ticket prices," "stanley cup finals 2026 ticket prices," "nba vs stanley cup tickets," "championship series ticket value," "nba finals cross-platform pricing," "stanley cup finals stubhub vs ticketmaster"

**Length:** 900-1100 words. Three H2s (the comparison framework, the venue-premium math, the buyer playbook) + 2 H3 callouts (per-league pricing benchmark + per-league cross-platform structural advantage). Tables: cross-league comparison table (NBA Finals vs Stanley Cup Finals per Game 1-7 + ticket-pricing band), cross-platform structural-advantage table (which platform owns which league's verified resale + price spread).

**CTA:** "Compare NBA Finals + Stanley Cup Finals ticket prices across all major platforms on TicketScan" + comparison-tool link + "Set a price alert for [series you're tracking]."

### Friday, May 29 — Venue refresh: NRG Stadium

**File:** `web/src/data/worldcup.ts` — `nrg-stadium` entry

**Step 0 verified clean against `worldcup.ts` THIS SUNDAY MORNING (pre-composition):** NRG Stadium = **5 matches (M9 Sat 6/13 22:00 ET Group E, M23 Wed 6/17 16:00 ET Group L, M39 Sun 6/21 22:00 ET Group H, M57 Sat 6/27 16:00 ET Group E, R16-7 Mon 7/6 16:00 ET).** Last Sunday's 5/17 plan stated "NRG = 5 matches (3 GS + R32 + R16)" — match-count correct by coincidence; round composition wrong (R32 fabricated, 1 GS undercounted, actual is 4 GS + R16). **Pre-composition Step 0 catch is canonical for this week's brief** (this is the first refresh brief composed against verified ground truth, not against prior-plan memory).

**Expansion target:** 3 generic sections → **9-10 specific sections** with FIFA Cat 1-4 mapping. 4 ticketTips → **7-8 ticketTips**. 4 keywords → **10-12 keywords**. 1-sentence venue description → **rich paragraph** with the Houston soccer-history + retractable-roof angles.

**Differentiated content angles (uncontested at depth):**

- **NRG is the only US WC venue with a retractable roof** — content-differentiated weather-management angle that no other US WC venue page can claim. Houston June peak heat-and-humidity (95-105°F + 60-80% humidity + heat-index 110°F+ midday) makes the retractable roof a structural pricing-floor stabilizer for the 4 GS matches (vs the open-roof Lincoln Financial / Levi's heat-vulnerability). **Retractable-roof premium upsell is the actuarially-correct hedge** for the 16:00 ET afternoon matches.
- **Group E plays twice at NRG (M9 + M57)** — same supporters-get-two-trips pattern as Lincoln Financial's Group E. **NRG and Lincoln Financial together host Group E across 4 of its 6 GS matches** — the cross-city Group E supporters market is anchored on these two venues. Content angle: "Group E supporters need to plan a Houston-Philadelphia trip pair."
- **R16-7 on Mon 7/6 at 16:00 ET** — one of four US R16 games on Mon 7/6 (alongside Arrowhead R16-8, Lincoln Financial R16-4, and a fourth TBD). **The four-US-R16-game day is the densest R16 concentration of any US WC hosting year on record** — content angle: "Mon 7/6 is the four-stadium R16 marathon."
- **Houston Dynamo + Houston Dash recent international friendly pricing comps** at NRG ($45-$180 for Dynamo MLS regular season at the smaller PNC Stadium; $80-$250 sideline for US national team friendlies at NRG) give the page two distinct soccer-resale precedents.
- **Texans NFL secondary-market pricing comp** ($120-$450 sideline for regular-season, $450-$1,200 for divisional rivals) anchors the football-first soccer-config geometry honesty (similar to AT&T Stadium's Cowboys-NFL secondary baseline).
- **Light Rail METRORail Red Line direct service from Downtown Houston to NRG Park** is content-differentiated transit-positive — better than every US WC venue except Lincoln Financial's SEPTA Broad Street Line. **Houston METRORail = second-best USA-WC-venue transit access** content angle, complementing the Lincoln Financial transit-positive lead.

**Run order (canonical Forward Fix v2):**

1. **Step 1 (SEO heads-up file)** — file `seo-requests/2026-05-29-content-data-touch.md` as artifact 1 at session start
2. **Step 0** — verify match count + round assignments against `worldcup.ts` (already done this Sunday; re-verify Friday morning)
3. **Read current `nrg-stadium` entry** in `worldcup.ts`
4. **Compose content-hook** for the day, referencing Step 1 file
5. **Edit `worldcup.ts`** — expand the entry per the structural template
6. **Commit** under the `Content refresh: nrg-stadium` prefix with descriptive body + Co-Authored-By trailer
7. **Refresh-log entry** documenting the changes

**Expected diff shape:** ~20-22 lines added / ~10 lines removed on a single file.

### Saturday, May 30 — Venue refresh: Arrowhead Stadium

**File:** `web/src/data/worldcup.ts` — `arrowhead-stadium` entry

**Step 0 verified clean against `worldcup.ts` THIS SUNDAY MORNING (pre-composition):** Arrowhead Stadium = **4 matches (M13 Sun 6/14 22:00 ET Group G, M26 Thu 6/18 19:00 ET Group A, M61 Sun 6/28 16:00 ET Group G, R16-8 Mon 7/6 20:00 ET).** Last Sunday's 5/17 plan stated "Arrowhead = 5 matches (3 GS + R32 + R16)" — off-by-one (4 actual vs 5 said) + R32 fabricated. **Pre-composition Step 0 catch is canonical for this week's brief.**

**Expansion target:** Same as NRG structural template — 3 → 9-10 sections, 4 → 7-8 ticketTips, 4 → 10-12 keywords, rich venue paragraph.

**Differentiated content angles (uncontested at depth):**

- **Arrowhead Stadium is the loudest stadium in the world** — Guinness World Record holder (142.2 dB set by Chiefs fans October 2014, breaking Seattle's Lumen Field 137.6 dB record). **Twelfth-man fan-noise content angle** parallel to Lumen Field's 12th-Man legacy, with the structural advantage of holding the actual Guinness Record. Content-differentiated angle uniquely owned by Arrowhead at depth in the US WC venue portfolio.
- **Group G plays twice at Arrowhead (M13 + M61)** — same supporters-get-two-trips pattern as Lincoln Financial / NRG. **Arrowhead is the third US WC venue with a single-group-twice pattern.** Content angle: "Group G supporters get a single-stadium tournament arc at Arrowhead — fly to Kansas City twice, don't travel."
- **R16-8 on Mon 7/6 at 20:00 ET** — completes the four-US-R16-game day. **Arrowhead R16-8 is the prime-time slot of the four** (20:00 ET = primetime national broadcast window). Content angle: "Arrowhead R16-8 carries the densest broadcast-attention window of any US R16 game."
- **Chiefs Super Bowl LIV + LVII + LVIII pricing comps** ($1,800-$4,500 sideline at the various Super Bowl venues + Chiefs' 2024 Super Bowl-LVIII-second-consecutive run pricing data) give Arrowhead three distinct championship-precedent pricing comps. The 2024-Chiefs-three-Super-Bowls-in-five-years dynasty era is the strongest US-sports-championship-precedent any US WC venue page can claim.
- **Sporting Kansas City + Kansas City Current recent USL pricing comps** at the smaller Children's Mercy Park ($35-$140 for regular season; $80-$220 for KC-derbies). **Sporting KC's 2013 + 2017 MLS Cup wins** give the page a distinct MLS-championship-precedent pricing anchor.
- **I-70 highway corridor + limited mass-transit access** is the structural transit-honesty disclosure — KCATA bus service runs on event days only with limited route coverage. **Transit-negative honesty framing** (parallel to Levi's transit-honesty) — disclose plainly rather than papering-over. Highway-corridor-only access means $45-$80 game-day parking is the structural transportation cost.
- **Kansas City June weather** (75-85°F average highs, 50-65% humidity, 25% thunderstorm probability) is structurally milder than Houston (NRG) but warmer than Foxboro (Gillette) or San Francisco Bay (Levi's). **Mild-weather framing** = the structural climate-comfort middle of the US WC venue portfolio.

**Run order:** Same canonical Forward Fix v2 as Friday — Step 1 SEO heads-up file as artifact 1, Step 0 match-count verification (already done this Sunday + re-verify Saturday morning), current-state read, content-hook composition, `worldcup.ts` edit, commit with `Content refresh: arrowhead-stadium` prefix, refresh-log entry.

**Expected diff shape:** ~20-22 lines added / ~10 removed on a single file.

### Sunday, May 31 — Audit + plan + next-week composition

Same task as today. Compose next week's plan (Week of June 1 – 7), copy-review the queued drafts at that point, audit what shipped Mon-Sat 5/25-5/30, file the cross-agent coordination summary, plan the following week's Mon-Thu blog topics + Fri-Sat refresh pair.

**Next week's likely refresh queue (June 5 – 6):** Fri 6/5 = **BMO Field, Toronto** (first non-US WC venue refresh). Sat 6/6 = **BC Place, Vancouver** (second non-US, first West-Coast Canada). **Pre-composition Step 0 grep** for both should run as part of the next-Sunday (5/31) plan composition — gate is now structural. BMO Field and BC Place are the first non-US WC venues to refresh; the differentiated content angles will lean into Canadian-soccer-culture (Canadian Soccer Association + Whitecaps + Toronto FC), Canada-USA-Mexico three-host-nation framing, and cross-border resale-pricing-variance (FIFA resale prices in CAD vs USD).

---

## Forward-Look Calendar (June 1 – 21)

- **Mon 6/1 (WC T-10):** Big-idea blog — WC-pricing-curve-at-T-10-days framework (the data-density companion to the Mon 5/25 "Three Cheapest Venues" piece)
- **Tue 6/2:** Tactical blog — last-mile WC buying playbook (T-9 days, what to do this week)
- **Wed 6/3:** News/timely — WC-specific resale snapshot OR NBA Finals Game 1 cross-platform pricing (whichever has higher organic search volume)
- **Thu 6/4:** Comparison — FIFA-direct vs major resale platforms head-to-head at T-7 (the "is FIFA actually cheaper" piece updated for T-7 dataset)
- **Fri 6/5:** BMO Field venue refresh (first non-US WC venue; Toronto, 6 matches per Step 0 cross-check next Sunday)
- **Sat 6/6:** BC Place venue refresh (Vancouver, 7 matches per Step 0 cross-check next Sunday)
- **Sun 6/7:** Audit + plan
- **Week of June 8 – 14:** WC kickoff week. Mon-Thu blog content is WC-saturated — opener-day previews, group-by-group analysis, knockout-projection pieces. Fri 6/12 + Sat 6/13 = **Estadio Azteca + Estadio Akron** (first Mexico WC venue refresh pair). **WC kickoff Thursday 6/11 = the highest single content-volume day of Q2.**
- **Week of June 15 – 21:** WC Group Stage Week 1. Mon-Thu content tracks live-tournament-pricing patterns; Fri 6/19 + Sat 6/20 = **Estadio BBVA** refresh (Monterrey, last Mexico WC venue) + a backup US WC venue refresh slot for any venue surfacing new content (e.g., revisit Wrigley Field venue page if Cubs make a deep playoff push, or revisit a MetLife / SoFi / AT&T page if their venue-specific WC content surfaces fresh data).

---

## Status Summary

- **Drafting cadence: ALL-TIME HIGH SUSTAINED.** 4/4 Mon-Thu blog drafts shipped for the **fourth consecutive week**. Mon→Wed framework→news pair-publish pattern executed second consecutive week. Tactical Tue pieces directly address CRO failure modes; comparison Thu pieces drive social-shareable formats.
- **Refresh cadence: ALL-TIME HIGH SUSTAINED.** 2/2 Fri/Sat sparse-venue refreshes shipped for the **fifth consecutive week**. Forward Fix v2 canonical from 5/22 forward; two consecutive non-test executions ran clean.
- **Step 0 gate: STRUCTURAL.** Pre-composition Step 0 grep gate added today caught both NRG + Arrowhead off-spec BEFORE the next-week plan was composed. The corrected match data flows directly into Friday + Saturday refresh briefs without downstream Step 0 hits. **First Sunday with composition-against-grep-ground-truth rather than composition-against-prior-document-memory.** Recommended as permanent architectural requirement in today's `seo-requests/2026-05-24-content-data-touch.md`.
- **Three-pure-Group-Stage-US-WC-venue cluster: FINAL.** Levi's + Gillette + Lincoln Financial confirmed final per today's grep on NRG + Arrowhead (both have R16 assignments). The "Three Cheapest Venues" big-idea piece composes to Mon 5/25 slot.
- **Harry Styles MSG residency demand signal: CAPTURED to Tue 5/26 slot** (9-day uncaptured signal → composed into tactical Tuesday piece in this Sunday's plan).
- **Publishing cadence: BROKEN.** Day 47 publish drought, 23-draft backlog, 13.0% realized loss-to-decay (4/14 SHELVED, 5/07 ANNIVERSARY FORFEIT, 5/21 MEMORIAL DAY WEEKEND IN MOTION). **Memorial Day Weekend listicle is the single most-urgent publish in the queue today** — closes by Monday evening with a ~15-minute freshen.
- **Cross-agent dependencies:**
  - SEO: Day 32 of bundle freeze + Day 14 of `extractLowestPrice` patch unabsorbed (now 6 stadium pages affected)
  - Email: Cron Day 47 dead, 6 net new triggers queued for today's 10:00 UTC tick
  - CRO: Day 38 of 100% null `target_price`, Day 31 post-signup UX audit overdue
  - Analytics: 0.86/day signup floor (sub-1.0 first time), 0.29/day watchlist floor (-80% step-down 24h), 4-of-5 zero-net days, 5 confirmed data-loss events
  - Paid Ads: Day 42 hold (CAC multiplier indefensible on 0-of-130 retention denominator)
  - Social: Instagram template rotation Day 36 unaddressed; recommend pull-from-active-channel-mix decision tomorrow if no variants ship by EOD Sunday

The drafting + refresh + Sunday-plan-composition halves of the program are now running at structural all-time highs (Mon-Thu 4/4 fourth week, Fri/Sat 2/2 fifth week, Step 0 gate canonical from today forward). **The publishing + cross-agent-blocker halves are at the worst cadence they've ever run** — and Memorial Day Weekend forfeit converts in <24 hours. **The 90-minute Lead Architect bandwidth block remains the single program-wide unblocker** — same session absorbs the `extractLowestPrice` patch, merges the SEO bundle, clears the 22 highest-priority queued drafts, and converts the Memorial Day Weekend listicle from realized-loss to publish.
