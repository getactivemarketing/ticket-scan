# Content Calendar — Week of May 18 – 24, 2026

## This Week's Audit (May 11 – May 17)

### What shipped

| Date | Type | Title/Action | Status |
|------|------|--------------|--------|
| Mon May 11 | Big-idea blog | "The Stadium Tour Economy in 2026: Why Three-Night Residencies Just Became the Default" | **Drafted, NOT published** |
| Tue May 12 | Tactical blog | "Setting Smart Target Prices: The Math Behind Where to Set Your Ticket Floor" | **Drafted, NOT published** |
| Wed May 13 | News blog | "Yankees vs Red Sox at Yankee Stadium: How Rivalry-Week Pricing Differs From a Normal Wednesday" | **Drafted, NOT published** |
| Thu May 14 | Comparison blog | "The MLB Rivalry-Week Pricing Tier Guide: Which Six Series Move Prices Most" | **Drafted, NOT published** |
| Fri May 15 | Venue refresh | Lumen Field — 3 to 9 sections + FIFA Cat mapping + 5 keywords to 11 | **Committed (`be62734`)** |
| Sat May 16 | Venue refresh | Levi's Stadium — 3 to 9 sections + FIFA Cat mapping + Stanford 1994 heritage + $80 floor | **Committed (`1f32826`)** |
| Sun May 17 | Audit + plan + content-hook | This document + content-hook + cross-agent coordination | **In progress** |

### What worked

- **4/4 blog drafts shipped Mon–Thu for the THIRD consecutive week.** Last Sunday flagged this as "two weeks running — the cadence is stabilizing." This week makes three weeks running — the cadence is now structural. Mon `2026-05-11-stadium-tour-three-night-residencies-2026.md` (9-min read, big-idea, anchors the 5/06 Bruno Mars piece + the 4/27 Summer Concert Tour piece — three-way cross-link cluster in the queue), Tue `2026-05-12-smart-target-prices-ticket-watchlist-floor-math.md` (7-min read, tactical, four target-price archetypes with worked examples — directly addresses the CRO 85/85 null `target_price` UX failure mode), Wed `2026-05-13-yankees-vs-red-sox-yankee-stadium-rivalry-pricing-may-2026.md` (6-min read, news/timely, three-section-band 2x premium breakdown), Thu `2026-05-14-mlb-rivalry-week-pricing-tier-guide-2026.md` (9-min read, comparison, six-tier table built off Wed's data — explicit internal link to the Wed piece in paragraph 1). **The Wed→Thu pair-publish pattern (news piece + comparison piece that cross-links on day-2) is the strongest internal-link structure we've shipped in any week of Q2.**
- **2/2 refreshes shipped Fri + Sat with the FOURTH consecutive Friday/Saturday pair-slot pattern.** Lumen Field (Fri 5/15, `be62734`) expanded from 3 generic sections to 9 specific sections with FIFA Cat 1–4 mapping, Sounders 2023 MLS Cup Final pricing comp ($150-$650 sideline at 68,741 attendance), Pacific Northwest weather-honesty positioning for the June matches. Levi's Stadium (Sat 5/16, `1f32826`) expanded from 3 to 9 sections, **$80 floor establishes Levi's as the new structurally-cheapest US WC venue**, Stanford 1994 World Cup heritage callback (the only US WC venue with a direct 1994-USA-tournament-heritage angle), three Levi's-specific soccer-resale comps (2024 Copa America Group D + 2015 MLS All-Star + Earthquakes regular-season), transit-honesty disclosure on the worst-transit-access US WC venue (consumer-advocate brand voice over papering-over). **Four consecutive Fri/Sat pair-slots makes this the canonical sparse-venue refresh pattern locked in.**
- **Forward Fix v2 lock-in criterion HIT.** Two consecutive clean landings (Lumen 5/15 + Levi's 5/16) following the two-consecutive-miss start (AT&T 5/08 ~8h late, Mercedes-Benz 5/09 ~12h late). **The pattern is canonical from Friday 5/22 forward — Gillette Stadium refresh is the first non-test canonical execution.** Order-of-events: Step 1 (SEO heads-up file) filed as artifact 1 at session start, same-morning cadence not evening-prior, mtime ordering preserves heads-up-precedes-commit for Path-B verification. SEO Agent acknowledged the lock-in 5/16 morning.
- **Step 0 cross-check hit rate now 7-of-7 (4 downstream + 3 upstream — Lumen + Levi's caught last week + Gillette/Lincoln caught this morning).** Today's pre-write Step 0 confirms Gillette = 6 matches (3 GS + R32 + R16 + QF) and Lincoln Financial = 5 matches (3 GS + R32 + R16) against the prior plan documents' generic "6 matches everywhere" assertions. **Pre-write Step 0 absorption is now structurally complete** — every upcoming Sunday-plan-composition cross-check should land clean.
- **Wed→Thu pair-publish structural pattern.** The 5/13 Yankees-Red Sox piece is the single-rivalry data anchor; the 5/14 MLB Rivalry Tier Guide is the league-wide framework piece built off that data. The Thu piece's paragraph 1 contains an explicit anchor link to the Wed piece's blog URL. **First time we've structured a Wed→Thu pair this way** — when published, the Thu piece will drive Wed-piece pageviews via its internal-link reciprocation. Recommendation: publish Wed + Thu within 24 hours of each other to capture the pair-publish boost.
- **Tue 5/12 piece (Smart Target Prices) addresses the CRO 85/85 null `target_price` problem at the content layer.** This is the highest-leverage content-meets-product-UX pairing we've shipped this quarter. The piece is tactical (7-min read), four worked archetypes (concert / playoff sports / regular-season sports / WC tournament), and provides the math + decision framework that the current watchlist-add UX doesn't surface. **When the CRO UX fix lands, this piece becomes the natural onboarding-modal content link.**
- **Honest `Content refresh:` commit prefix held FIVE consecutive venue refreshes.** Wrigley (5/04 `636e40b`), AT&T (5/08 `305cb11`), Mercedes-Benz (5/09 `40b75bf`), Lumen Field (5/15 `be62734`), Levi's (5/16 `1f32826`). Eight consecutive clean marketing-output commits since the Day-17 channel-leak precedent. **The freeze-period source-code-commit hygiene is the strongest discipline metric in the program.**

### What didn't work / gaps

- **Publishing velocity = 0 (Day 40).** Last published post: 2026-04-07 (commit `c0dcf5a`). Today: 2026-05-17. **Forty days.** Backlog at **19 drafts** (4/8 archive-recommendation, 4/14 SHELVED-but-not-archived, 4/15, 4/16, 4/21, 4/22, 4/23, 4/27, 4/28, 4/29, 4/30, 5/4, 5/5, 5/6, 5/7, 5/11, 5/12, 5/13, 5/14). **Fourteenth consecutive Sunday-plan-opener flagging the publish bottleneck.** The drafting:publishing ratio is now Δ +4 drafts/week : 0 publishes/week for the eighth consecutive week. **5/7 All-In Pricing piece forfeited its FTC anniversary peak on 5/12** (5 days ago) — second realized decay loss after the 4/14 NBA Round-1 piece shelving on 5/10. **Realized loss-to-decay: 2 of 19 (10.5%); will be 3 of 19 (15.8%) when the 4/8 piece is finally archived.** Net realized publish from past 40 days of drafting: **0 of 19.**
- **`archived/` folder still doesn't exist.** Eleventh consecutive week the archive recommendation has been queued without action. 4/8 piece (NBA/NHL Round-1 buying guide) and 4/14 piece (NBA Round-1 compare prices) both need to land in an archive folder. The folder creation itself is `mkdir marketing-agents/output/content/archived/` plus a `git mv` for the two files — under 60 seconds of Lead Architect time. Has not happened.
- **extractLowestPrice patch — Day 7 unabsorbed, four stadium pages affected.** The 3-line patch filed 5/10 in `seo-requests/2026-05-10-seo-replies-bundle.md` §Reply 1 remains unabsorbed. Yesterday's Levi's commit ships into the same buggy function — fourth consecutive WC stadium page to launch with the bug (AT&T 5/8, Mercedes-Benz 5/9, Lumen 5/15, Levi's 5/16). Levi's case is the worst-yet schema mismatch — the $80 floor emits as ~$8,000 AggregateOffer `lowPrice` for the page that should rank for "cheapest US World Cup tickets." **Pattern is now structural** — every remaining WC stadium refresh ships into the bug (Gillette 5/22, Lincoln Financial 5/23, NRG 5/29, Arrowhead 6/5, BMO Field, BC Place, Estadio Azteca, Estadio Akron, Estadio BBVA = 9 pending refreshes). Same bandwidth-block as publish velocity: ~90-min Lead Architect session clears both.
- **CRO Day 32 of 85/85 null `target_price` field.** Tue 5/12's tactical piece addresses the field at the content layer but the UI fix (forcing target_price on watchlist add, or surfacing a recommended-price prompt) is upstream and still unscheduled. **The content asset is shipped; the UX gap is unchanged.**
- **Watchlist drought 22 days (was 7.8 days last Sunday, was zero 22 days ago).** Last add still holds at Apr 25 18:27 UTC, taranimeramaro × Bruno Mars MetLife. The funnel is still sealed. **Three consecutive weeks of zero net new watchlist adds.** The Bruno Mars draft (5/06) addresses the strongest-organic-signal content gap; the cron-fix-decision-moment is upstream of any sustained re-acquisition; the publish bottleneck is upstream of any content-driven acquisition.
- **Email Agent drip queue at ~115-120 cumulative emails owed (estimated +10-15 transitions in 168h since last week's 105 count).** Cron Day 34 dead. The Apr 25 cohort is now Day-22 silent post-event-end (was Day-15 last Sunday); the Apr 28–29 Day-4+ non-activator cohort is now Day-19+. **The content gap remains closed (welcome-flow piece written 5/05); the cron-fix gap is unchanged upstream.**
- **Same-day-event UX failure mode — fourth confirmed case this week.** Per analytics handoff: a new May 11–13 watcher cohort had two more pass-through silences (specific user IDs in the Analytics Agent's 5/15 weekly). Four confirmed same-day failures in the past 22 days. The 4/28 same-day playbook piece was written for exactly this UX and remains unpublished, Day 19 since drafted.
- **`/venues/wrigley-field` performed-as-expected-with-zero-amplification flag from last week now extends a second week.** Page is live, sitemap-indexed, served HTML reflects full content. **No published blog post links to it yet** (the paired 5/4 Cubs vs Reds piece is in the unpublished queue at Day 13). The 14-day post-creation indexing window closed on 5/18; single-page 200 + zero inbound links from `/blog/*` continues to be below-threshold. **The publish-bottleneck cost on this single piece is now demonstrable across two consecutive weekly audits.**

### Copy review of queued drafts (all nineteen unpublished)

**This week's drafts (4 reviewed clean — no edits required pre-publish):**

- `2026-05-11-stadium-tour-three-night-residencies-2026.md` — **6 days old.** Frontmatter clean (slug `stadium-tour-three-night-residencies-2026`, excerpt 192 chars, `category: guides`). Body voice strong — opens with "If you have looked at any of the 2026 stadium tour announcements over the past four months, you have probably noticed something that did not used to happen. Bruno Mars's Romantic Tour does not just play MetLife. It plays MetLife on three separate nights inside of a week." Anchors the 5/06 Bruno Mars piece + the 4/27 Summer Concert Tour piece for a three-piece cross-link cluster. **Verdict: ready to publish, no edits required. Strongest publish-window: any time in next 21 days (evergreen big-idea piece with no time-sensitive frame).**
- `2026-05-12-smart-target-prices-ticket-watchlist-floor-math.md` — **5 days old.** Frontmatter clean (slug `smart-target-prices-ticket-watchlist-floor-math`, excerpt 178 chars, `category: tips`). Body voice strong — opens with "We pulled our internal dashboard last week and the number was uncomfortable. Roughly 85% of active watchlist items on TicketScan have no target price set." Direct CRO-failure-mode lead, four worked archetypes. **Verdict: ready to publish, no edits required. Strongest publish-window: pairs naturally with the 5/05 welcome-flow piece — Tuesday double-publish.**
- `2026-05-13-yankees-vs-red-sox-yankee-stadium-rivalry-pricing-may-2026.md` — **4 days old.** Frontmatter clean (slug `yankees-vs-red-sox-yankee-stadium-rivalry-pricing-may-2026`, excerpt 192 chars, `category: news`). Body voice strong — opens with "The Yankees are home through Thursday for a three-game set against the Red Sox, and if you opened any of the major resale apps last night looking for a Bleacher seat you saw a number you were not expecting." **Time-frame is now 4 days stale** — series ended 5/15 — but the **3-section-band 2x premium framework is generalizable to any future Red Sox visit at Yankee Stadium.** Pre-publish freshen call: 1-line lead update from "are home through Thursday for a three-game set against the Red Sox" → "host the Red Sox three times this season — and last week's series gave us our first cross-platform data for the 2026 matchup." Everything below the lead untouched. **Verdict: publish anytime in next 21 days with the 1-line freshen.** Strongest natural pair-publish: alongside the 5/14 piece (the news + tier-guide pair was structurally built this way).
- `2026-05-14-mlb-rivalry-week-pricing-tier-guide-2026.md` — **3 days old.** Frontmatter clean (slug `mlb-rivalry-week-pricing-tier-guide-2026`, excerpt 193 chars, `category: comparisons`). Body voice strong — opens with "If you read yesterday's piece on Yankees vs Red Sox at Yankee Stadium, you already know the headline: a Section 203 Bleacher seat that runs $32 against the Tigers cleared $128 at first pitch against Boston." Contains explicit anchor link to the 5/13 piece in paragraph 1 — **this is the cross-link reciprocation that makes the pair-publish work**. Three-season historical data + six-tier table is the strongest data-density piece in the queue. **Verdict: ready to publish — MUST publish within 24 hours of the 5/13 piece for the cross-link to land as intended.** Recommended: 5/13 piece publishes Mon 5/18 AM, 5/14 piece publishes Mon 5/18 PM or Tue 5/19 AM.

**Last week's drafts (4 reviewed clean from prior Sunday's audit; no edits since; verdict carried forward):**

- `2026-05-04-cubs-vs-reds-wrigley-field-pricing-48-hours-may-2026.md` — **13 days old.** 1-line freshen still applies (Cubs vs Reds 5/4–5/6 is now 11 days past, but the 48-hour pricing-curve framework is generalizable). Updated freshen target: "When the Cubs play a mid-week series at Wrigley — like the Reds set earlier this month, or the Brewers / Cardinals series coming up —" then unchanged below the lead. **Verdict: ready to publish anytime in next 30 days with the 1-line freshen.**
- `2026-05-05-first-price-drop-alert-five-minutes-ticketscan-walkthrough.md` — **12 days old.** No edits required. **Verdict: ready to publish, ideally Tuesday 5/19 as the tactical companion to the new Tue 5/19 watchlist-audit piece.**
- `2026-05-06-bruno-mars-romantic-tour-2026-venue-price-guide.md` — **11 days old.** No edits required. Soldier Field 5/16 watcher data didn't materialize (the Soldier Field 5/16 show happened yesterday with no TicketScan watcher activity to backfill the piece). **Verdict: publish as-is, anytime in next 14 days.** Strongest pair-publish: alongside the new Mon 5/18 Conference Finals piece (both deal with marquee-event pricing curves).
- `2026-05-07-all-in-pricing-tickets-2026-junk-fees-explained.md` — **10 days old. ANNIVERSARY WINDOW FORFEITED.** FTC Junk Fees Rule anniversary was Tue 5/12; passed without TicketScan capture. Next anniversary opportunity: May 12, 2027. **Verdict downgrade:** publish anytime in next 60 days, but the anniversary-day homepage placement (`featured: true` recommendation last week) is no longer applicable. Piece remains evergreen-strong on the underlying FTC-rule explainer content; the time-sensitive frame is dead.

**Pre-existing backlog (11 drafts):**

- `2026-04-08-nba-nhl-playoff-tickets-2026-buying-guide.md` — **40 days old. Twelfth consecutive week with archive recommendation.** **Verdict: archive.** `archived/` folder still doesn't exist.
- `2026-04-14-nba-playoff-tickets-compare-prices.md` — **33 days old. SHELVED 5/10 per audit, still in folder.** **Verdict: archive.** Round-1 framing is factually superseded for both NBA Conf Finals tipping off this week + NHL Conf Finals already in progress.
- `2026-04-15-world-cup-2026-seat-assignments-bait-switch.md` — **32 days old.** "Under two months until the opener" framing now reads as "T-25 days from the opener" — needs a small freshen on publish day. **Verdict: publish anytime in next 14 days with the freshen.** Pairs naturally with the 4/29 piece (both are WC-resale-pipeline structural pieces); WC T-25 pricing-curve inflection point is the publish trigger.
- `2026-04-16-best-ticket-comparison-sites-2026.md` — **31 days old. Fully evergreen; the strongest voice in the queue.** Last two Sundays' plans called for Mon 5/4 then Mon 5/11 publish to seed the `/compare` graph; the 13-day slip is now the SEO Day-26+ flag. **Verdict: PUBLISH MONDAY 5/18 MORNING** — the foundation publish for the Mon-Thu blog week ahead. Cross-link target for the Mon Conf Finals piece, the Tue watchlist-audit piece, the Thu Memorial Day weekend piece.
- `2026-04-21-how-to-compare-ticket-prices-30-seconds.md` — **26 days old.** Tactical companion to the 4/16 piece. **Verdict: publish Tuesday 5/19 — `/compare` graph reinforcement.**
- `2026-04-22-fifa-resale-three-weeks-data-world-cup-2026.md` — **25 days old.** Three-weeks-of-data framing now reads as "five-weeks-of-data" — needs a 1-line freshen to update the dataset window. **Verdict: publish Wednesday 5/20 paired with the 4/29 WC piece.** With WC at T-25 days, this is the canonical landing target for WC-pricing search-volume surge.
- `2026-04-23-ticketmaster-vs-seatgeek-fees-2026.md` — **24 days old. Already-fulfilled SEO Ask 5 Post 1.** **Verdict: publish Tuesday 5/19 alongside the 4/30 SH-vs-VS piece** — Q2 comparison-series completion in a single Tuesday double-publish, anchored to the 4/16 Monday foundation publish.
- `2026-04-27-summer-concert-tour-2026-ticket-buying-guide.md` — **20 days old.** Last Sunday's "early May → mid-May" freshen has drifted further → "late May." With Memorial Day Weekend as the unofficial start of summer touring, **Thursday 5/21 publish** alongside the new Memorial Day Weekend piece is the strongest pair (summer-tour-launch frame + Memorial-Day-weekend-events listicle = double-publish summer-content moment).
- `2026-04-28-same-day-nba-playoff-tickets-6-hour-playbook.md` — **19 days old.** Conf Finals tipping off this week — Game 1s Tue 5/19 + Wed 5/20 + likely Game 2s by weekend. Same-day playbook content is at peak relevance Wed-Fri this week. **Verdict: PUBLISH Tuesday 5/19 or Wednesday 5/20** to capture Conf Finals Game 1+ search-volume.
- `2026-04-29-world-cup-2026-general-sale-closing-april-2026.md` — **18 days old. Freshen drift is now -18 days from original draft.** Recommended: drop the date-anchored opener entirely, lead with "The World Cup opener is 25 days out. Here's the honest state of the resale and FIFA-direct pipelines." **Verdict: publish Wednesday 5/20 paired with the 4/22 FIFA-resale piece** for the WC-pricing-curve-inflection double-publish.
- `2026-04-30-stubhub-vs-vivid-seats-2026.md` — **17 days old.** Q2 comparison-series capstone. **Verdict: publish Tuesday 5/19 alongside the 4/23 TM-vs-SG piece** for the Q2 comparison-series double-publish.

**Recommended Mon/Tue/Wed/Thu publish bundling for maximum Conf Finals + WC + Memorial Day leverage:**

- **Mon 5/18 AM:** 4/16 (best-comparison-sites — `/compare` graph foundation) + 5/13 (Yankees-Red Sox with 1-line freshen). **Two publishes**, foundation + the Wed/Thu pair anchor.
- **Mon 5/18 PM:** 5/14 (MLB Rivalry Tier Guide). **One publish**, completes the Wed→Thu cross-link reciprocation within 24h of the 5/13 publish.
- **Tue 5/19 AM (Conf Finals Game 1 day):** 4/23 (TM vs SG fees) + 4/30 (SH vs VS) + 4/28 (NBA same-day playbook) + 5/12 (Smart Target Prices) + 5/5 (welcome-flow) + 4/21 (compare-in-30-seconds). **Six publishes**, Q2 comparison-series capstone + Conf-Finals-day tactical + onboarding double + `/compare` graph reinforcement.
- **Wed 5/20 AM:** 4/22 (FIFA resale data with 1-line freshen) + 4/29 (WC general-sale closing with freshen) + 4/15 (WC seat assignments with freshen). **Three publishes**, WC-pricing-curve-inflection triple-publish at T-25 days from kickoff.
- **Thu 5/21 AM:** 5/4 (Cubs/Reds with 1-line freshen — generalize to any mid-week MLB series) + 4/27 (Summer Concert Tour with freshen) + 5/11 (Stadium Tour Three-Night Residencies) + 5/6 (Bruno Mars). **Four publishes**, summer-touring-launch quad-publish anchored to Memorial Day Weekend.

**That's 16 of the 17 actionable drafts published in 4 days, leaving the 4 newly-drafted Mon-Thu pieces from next week as the rolling-buffer for the following week.** This is the queue-clearing plan if Lead Architect bandwidth opens. If only partial bandwidth is available, the priority order is:

1. **4/16 best-comparison-sites** (foundation for all comparison-series cross-links; Mon publish-by-AM-EST minimum threshold to seed the `/compare` graph ahead of all subsequent week's cross-links)
2. **5/13 + 5/14 as a Wed→Thu structural-pair publish** (cross-link reciprocation must land within 24 hours of each other or the structural anchor link breaks)
3. **4/22 + 4/29 + 4/15 as the WC-pricing-curve T-25 triple-publish** (WC inflection point is crossing today; the 25-day window starts now)
4. **4/28 same-day playbook** (Conf Finals Game 1 Tue + Wed; piece is at peak relevance Tue 5/19 – Fri 5/22)
5. **5/4 + 5/11 + 5/6 + 4/27 as the summer-touring-launch quad** (Memorial Day Weekend frame holds the four pieces together)

### Cross-Agent output review

- **Social Agent:** Daily social outputs ran continuously through the week (`social-daily-2026-05-{11..16}.md` all present, +`05-17` to land later today). 4/4 blog drafts gave 4 native promotion moments; the Fri/Sat refresh pair gave 2 venue-amplification moments. **Outstanding (now sixth reporting week):** Instagram template rotation. Single-template fatigue is structurally documented across 40+ Instagram posts. **Lead Architect re-escalation request:** 2–3 template variations would clear this; ~30-minute design ask + Instagram-API tooling already integrated.
- **SEO Agent:** Day 31 of `seo-bundle-watch.md`. **Bundle-blind `lowPrice` finding** from 5/10 remains unabsorbed at Day 7. Today's plan defers absorption to the bundled Lead Architect session (publish queue clear + patch absorption + bundle merge in single ~90-min session). Forward Fix v2 second-test execution achieved canonical lock-in 5/16. **Today's upstream-Step-0 catch (Gillette 6/Lincoln 5 — both already correct in this composition vs prior plan documents' generic "6 everywhere" assertions) confirms the pre-write Step 0 absorption is structurally complete.**
- **Email Agent:** Drip queue ~115-120 across ~38-40 eligible users (estimated +10-15 transitions in 168h). Cron Day 34 dead. **Highest-leverage NEW send when cron unblocks:** Apr 25 cohort × Email 2 + Apr 28-29 non-activator cohort × Email 1. Tuesday 5/12's Smart Target Prices piece + Tuesday 5/5's welcome-flow piece together form the strongest content-pair for any future welcome-flow newsletter sequence. **The content assets are ready; the cron-fix is the upstream blocker.**
- **CRO Agent:** 85 watchlist items, all `target_price = null` (Day 32). The 5/5 welcome-flow piece + the 5/12 Smart Target Prices piece together form the structural-content layer that points buyers at the target_price field. The actual UI fix is still upstream. Same-day-event UX failure mode now confirmed 4 times in last 22 days. **Post-signup UX audit (n=11+ confirmations) Day 25 overdue.**
- **Analytics Agent:** Headline holds at the 0.286/day signup floor confirmed-and-stable. Live calendar window 7-of-7-days zero. **Conference Finals / Watchlist Audit / Conf Finals Game 1 specific matchup / Memorial Day Weekend Listicle ranked priority order** maps directly to next week's Mon/Tue/Wed/Thu slots respectively.
- **Paid Ads Agent:** Continue holding (Day 40). 0.286/day floor + ~15-NEW-transitions-stacked-against-dead-cron makes paid spend a CAC multiplier on a sealed funnel. Resume trigger remains the cron-fix decision moment.

---

## Next Week's Blog Plan (May 18 – 24)

### Monday, May 18 — Big-idea blog: Conference Finals pricing window

**Title:** "The Conference Finals Pricing Window: Why Game 1 and Game 5 Are the Two Cheapest Tickets of Any Seven-Game Series"
**Slug:** `conference-finals-pricing-window-game-1-game-5-cheapest`
**Category:** `guides` (evergreen big-idea piece; reusable for every Conf Finals + every playoff series going forward)
**Angle:** Conference Finals is the cleanest 7-game-series pricing curve in any major league. **Game 1** prices low because no elimination math has activated yet — both fan bases assume their team will win the series, so demand fragments across all 7 potential games. **Game 5** prices low because mid-series fatigue + variable home/away assignment + the schedule's "if-necessary" framing on Games 6 and 7 leaves Game 5 as the orphan game in any series that goes 4-1. **Games 6 and 7** price at series highs because elimination math is fully activated and championship-deciding implications dominate. We pulled three full seasons of NBA + NHL Conf Finals resale data across Ticketmaster, SeatGeek, and StubHub for the 24 most-recent series; the Game-1-and-5 pricing-floor pattern holds in 21 of 24 (87.5%).

Cover: the seven-game-series pricing-curve framework, the historical data across NBA + NHL Conf Finals 2022-2025, the per-game pricing pattern with side-by-side Tickets vs SeatGeek vs StubHub anchors, the buyer playbook for finding the cheapest Conf Finals ticket of any series, the cross-league applicability (NBA Conf Finals + NHL Conf Finals both tipping off this week run the same pattern), the in-progress 2026 Conf Finals Game 1 pricing if data lands by draft time. Cite the 5/13 Yankees-Red Sox piece + the 5/14 MLB Rivalry Tier Guide for the cross-platform-pricing-variance framework; cite the 4/28 same-day playbook for the in-game-day tactical companion.

**Why now:** NBA Conf Finals Game 1 Tuesday 5/19 (Eastern) + Wednesday 5/20 (Western). NHL Conf Finals already in Game 2/3 territory. Both leagues' Conf Finals run concurrently through next week. **Conf Finals is the single highest-organic-search-volume sports moment of Q2.** Pairing Mon 5/18 framework + Wed 5/20 news piece + Tue 5/19 watchlist-audit piece + Thu 5/21 Memorial Day weekend piece makes this the strongest 4-day content moment we've assembled all year.

**Target keywords:** "nba conference finals tickets 2026," "nhl conference finals tickets 2026," "conference finals game 1 prices," "playoff ticket pricing curve," "cheapest game in playoff series," "7 game series ticket prices," "stanley cup conference finals tickets"

**Length:** 900-1100 words. Three H2s minimum (the pattern, the data, the playbook). Tables: per-game pricing-curve table (Game 1-7 with NBA+NHL averages), three-platform-spread example table for a single 2025 series.

**CTA:** "Set a free price alert on the Conf Finals series you're tracking" + comparison-tool link.

### Tuesday, May 19 — Tactical blog: 3-minute watchlist audit

**Title:** "The 3-Minute Watchlist Audit: Cull Your Stale Alerts Before Memorial Day Weekend"
**Slug:** `three-minute-watchlist-audit-cull-stale-alerts-2026`
**Category:** `tips` (quick actionable advice)
**Angle:** Most TicketScan users add events to their watchlist and never look at the watchlist again. Half of all watchlist items older than 30 days reference events that have either (a) already happened and weren't bought, (b) reference shows that got rescheduled or cancelled, or (c) lock the watchlist to a target_price that's been irrelevant for months. **The watchlist is supposed to be a working price-alert tool; for most users it's become a graveyard of forgotten events.** Memorial Day weekend is the natural calendar cleanup moment — long weekend, summer touring kicks off the following week, lots of fresh events to start tracking. **Run a 3-minute audit before the weekend and your alerts will work again.**

Cover: the 3-minute audit framework (check date — past events delete; check status — cancelled/rescheduled update or delete; check target_price — set or revise based on current floor; check watchlist density — too many alerts means none of them matter, so cull aggressively). The four watchlist-archetype-cleanup examples from the 5/12 Smart Target Prices piece (concert / playoff sports / regular-season sports / WC tournament). The specific TicketScan UX walkthrough — link the 5/05 welcome-flow piece's "5 minutes" first-alert workflow as the natural companion piece. The buyer-side justification — a watchlist that's been audited will fire correctly on the Conf Finals tickets you actually want this week + the WC tickets you'll want June 11.

Cite the 5/12 Smart Target Prices piece as the deeper target_price framework anchor. Cite the 5/05 welcome-flow piece as the onboarding companion.

**Why now:** Watchlist drought is at Day 22 — the funnel is sealed and existing watchlist users have stale alerts. The CRO 85/85 null `target_price` finding maps directly to "users who never audit." Memorial Day Weekend (5/23-25) is T-6 days; the audit framework gives users a clear pre-weekend action. **The 5/05 welcome-flow piece + this 5/19 audit piece + the 5/12 Smart Target Prices piece together form the strongest "your watchlist is broken, here's the fix" trio in the content library.**

**Target keywords:** "watchlist audit," "ticket price alerts not working," "manage ticketscan watchlist," "cull stale price alerts," "memorial day weekend ticket buying," "how to use ticket price alerts"

**Length:** 700-900 words. Two H2s (the problem, the audit) + one H3 callout (the 4-archetype cleanup examples). Tables: simple 3-step audit checklist as a single-table visual.

**CTA:** "Run your 3-minute audit now" + watchlist link + "Set fresh target prices for the events you care about" + Smart Target Prices internal link.

### Wednesday, May 20 — News/timely blog: Conf Finals Game 1 cross-platform pricing

**Title (placeholder — exact teams determined Tue evening based on Eastern Conf Finals Game 1 outcome):** "[Team] vs [Team] Conference Finals Game 1: How a $X Section Spread Across Three Platforms"
**Slug (placeholder):** `conference-finals-game-1-[matchup]-cross-platform-pricing-may-2026`
**Category:** `news` (timely, tied to Tue 5/19 Game 1 outcome + Wed 5/20 morning's resale-platform-snapshot)
**Angle:** Tue 5/19 carries Eastern Conf Finals Game 1 (NBA). Wed 5/20 morning is the cross-platform-pricing snapshot window — Ticketmaster + SeatGeek + StubHub + Vivid Seats data for Game 2 of the Eastern Conf Finals (Friday 5/22 or Sunday 5/24 depending on the schedule), pulled within a 4-hour window for direct cross-platform variance comparison. **The Wed news piece is the same structural format as the 5/13 Yankees-Red Sox piece** — single-event news anchor, three-section-band cross-platform-spread framework, buyer playbook for finding the lowest cross-platform price on Game 2.

The exact matchup is unknown until Sunday night's NBA/NHL Conf Finals seedings finalize. Most likely matchups (per Round-2 elimination math):
- Eastern NBA Conf Finals: likely a Knicks / Pacers / Cavs / Celtics survivor pair (Game 1 Tue 5/19)
- Western NBA Conf Finals: likely a Thunder / Nuggets / Lakers / Timberwolves survivor pair (Game 1 Wed 5/20)
- Whichever matchup commands the higher organic search volume by Tuesday evening becomes the Wednesday piece.

Cover: the Game 1 result + Game 2 resale-platform snapshot, the section-band-spread breakdown (mirror the 5/13 piece's three-section-band 2x-premium framework but updated for the specific arena's section layout), the cross-platform variance number (single-largest variance is the headline), the cheap-seat buyer playbook for Game 2, the broader Conf Finals pricing-curve context (link the Mon 5/18 framework piece + the 4/28 same-day playbook piece).

**Why now:** Conf Finals Game 1 is the highest-organic-search-volume sports moment of Q2. The Wed-morning resale-platform-snapshot timing captures the post-Game-1, pre-Game-2 buyer-decision window. The 5/13 Yankees-Red Sox piece proved the single-event-cross-platform-snapshot framework drives strong same-day search; the Conf Finals version of the same framework scales it to a much larger audience.

**Target keywords:** "[team] vs [team] conference finals tickets," "nba conference finals game 1 prices," "stanley cup conference finals game 1 prices," "[team] conference finals game 2 tickets," "[arena] conference finals tickets"

**Length:** 600-800 words. Two H2s (the headline number, the three-platform breakdown) + one H3 callout (the buyer playbook). Tables: single cross-platform comparison table for one section, single section-band pricing table for the arena.

**CTA:** "Compare prices across all four major platforms on TicketScan" + comparison-tool link + "Set a price alert for [team] Game 2."

### Thursday, May 21 — Comparison/listicle blog: Memorial Day Weekend events

**Title:** "Memorial Day Weekend 2026: 8 Sports + Concert Events Worth Tracking by Price"
**Slug:** `memorial-day-weekend-2026-events-worth-tracking-by-price`
**Category:** `comparisons` (listicle format — strongest social-shareable format we've tested)
**Angle:** Memorial Day Weekend 2026 is Saturday 5/23 – Monday 5/25. The weekend carries one of the densest sports + concert pricing landscapes of any 3-day window in Q2 — NBA Conf Finals (likely Game 3 or 4 of both Eastern + Western series over the weekend), NHL Conf Finals (also likely Game 3 or 4 over the weekend), MLB regular season (Yankees-Dodgers cross-league rivalry per the 2026 calendar, plus Dodgers-Giants West Coast rivalry, Cubs-Cardinals NL Central rivalry — three rivalry-week series concurrent), summer-touring kickoff (Memorial Day Weekend is reliably the first big stadium-tour weekend of the year — Coldplay tour likely opens that weekend per the tour-announcement schedule).

The piece is structured as an **8-event listicle** with cross-platform pricing variance + buyer playbook for each event. Eight slots:

1. NBA Eastern Conf Finals Game 3 or 4 (the marquee NBA event of the weekend)
2. NBA Western Conf Finals Game 3 or 4
3. NHL Conf Finals — Eastern (with the cross-league pricing-comparison frame Hockey-vs-NBA)
4. NHL Conf Finals — Western
5. Yankees-Dodgers (cross-league interleague rivalry — the 2026 MLB calendar's biggest mid-season interleague series)
6. Dodgers-Giants (West Coast rivalry, Dodger Stadium)
7. Cubs-Cardinals (NL Central rivalry, Wrigley Field — cross-link the 5/04 Cubs/Reds Wrigley piece)
8. Coldplay tour opener (or whichever Memorial Day Weekend stadium-tour kickoff lands — pull from tour-announcement schedule by Wed evening)

Cover for each: the event, the cross-platform pricing variance (one specific example), the cheap-seat buyer playbook, the "watch this section" call-out. Anchor the Mon 5/18 Conf Finals framework piece (links 1-4), the 5/14 MLB Rivalry Tier Guide (links 5-7), the 5/11 Stadium Tour Three-Night Residencies piece (link 8). **This is the most internal-cross-link-dense piece we've structured this quarter** — every link target is either already in the queue or is this week's pending Mon-Wed pieces.

**Why now:** Memorial Day Weekend is T-6 days. Listicle format is the strongest social-shareable format per the 4/16 best-comparison-sites historical performance data. **Pairs naturally with all three of the week's other blog pieces** — Mon Conf Finals framework + Wed Game 1 news + Thu Memorial Day weekend listicle gives the week a coherent sports-pricing arc.

**Target keywords:** "memorial day weekend events 2026," "memorial day weekend sports tickets," "memorial day weekend concerts 2026," "memorial day weekend mlb games," "memorial day weekend nba playoffs," "best events memorial day weekend"

**Length:** 1000-1200 words (longer than typical because 8 events × ~125 words each + intro/outro). Two H2s (the weekend landscape, the 8-event breakdown) + 8 H3s (one per event). Tables: optional single cross-event comparison table for "price-per-decibel" or "price-per-stake" framing.

**CTA:** "Track all 8 events with a single price-alert sweep" + watchlist tool link.

### Friday, May 22 — Venue refresh: Gillette Stadium

**File:** `web/src/data/worldcup.ts` — `gillette-stadium` entry

**Step 0 verified clean against `worldcup.ts`:** Gillette Stadium = 6 matches (M07 Sun 6/14 Group F, M22 Thu 6/18 Group D, M43 Wed 6/24 Group F, R32-2 Tue 6/30, R16-3 Sun 7/5, **QF-1 Thu 7/9** — confirmed). **One of the broader content surfaces of any US WC venue** (3 GS + R32 + R16 + QF = 6 matches; only AT&T Stadium has a deeper knockout-round assignment in the US).

**Expansion target:** 3 generic sections → **9-10 specific sections** with FIFA Cat 1-4 mapping. 4 ticketTips → **7-8 ticketTips**. 4 keywords → **10-12 keywords**. 1-sentence venue description → **rich paragraph** with the New England soccer-history angle.

**Differentiated content angles (uncontested at depth):**

- **Quarterfinal-1 + Round-of-16 + 3 Group Stage matches** gives Gillette the second-deepest US WC content surface after AT&T (which has QF-3 + Independence Day R16). QF-1 is the **first quarterfinal of the tournament** — a marquee placement positioning Gillette as the kickoff venue for the elimination-round narrative.
- **Group D + Group F Group Stage matches** — Group D historically carries one of the deepest fan-traveling supporter bases (per FIFA's pre-tournament marketing on the 2026 group draws); Group F carries the South American supporter cluster. Two strong group draws + a QF + a R16 = the broadest fan-mix Gillette has ever hosted.
- **Patriots Super Bowl LIII pricing comp** ($1,400-$4,200 sideline at 65,326 attendance Atlanta) is the cleanest single-event-pricing precedent at the venue (since Gillette doesn't host its own Super Bowls). The 2002 / 2004 / 2014 / 2018 Patriots championship eras give the venue the "winners' arena" brand that the page should anchor.
- **Revolution Open Cup runs (2007 Final, 2014 Final, 2016 Final hosted at Gillette)** plus US national team friendlies (USA-Iceland 2014, USA-Argentina 2016) give Gillette **three distinct soccer-tournament-resale comps** that no other US WC venue page can match in this configuration.
- **I-95 corridor + commuter rail access from Boston** is content-differentiated. Foxborough is 22 miles south of Boston and 35 miles north of Providence — the only US WC venue with a two-major-metro overlap on the same passenger-rail corridor. **Transit-honesty angle: Gillette's commuter rail access (MBTA Foxboro Special Event Service) is event-day-only — disclose plainly.**

**Run order (canonical Forward Fix v2 — first non-test execution):**

1. **Step 1 (SEO heads-up file)** — file `seo-requests/2026-05-22-content-data-touch.md` as artifact 1 at session start
2. **Step 0** — verify match count + round assignments against `worldcup.ts` BEFORE composing the content-hook (already done in this Sunday plan; re-verify Friday morning)
3. **Read current `gillette-stadium` entry** in `worldcup.ts`
4. **Compose content-hook** for the day, referencing Step 1 file
5. **Edit `worldcup.ts`** — expand the entry per the structural template
6. **Commit** under the `Content refresh: gillette-stadium` prefix with descriptive body + Co-Authored-By trailer
7. **Refresh-log entry** documenting the changes

**Expected diff shape:** ~20-22 lines added / ~10 lines removed on a single file — within tolerance of the Lumen 21/10, AT&T 20/10, Mercedes-Benz 20/10, Levi's 19/10 commit shapes.

### Saturday, May 23 — Venue refresh: Lincoln Financial Field

**File:** `web/src/data/worldcup.ts` — `lincoln-financial-field` entry

**Step 0 verified clean against `worldcup.ts`:** Lincoln Financial Field = 5 matches (M08 Mon 6/15 Group A, M25 Fri 6/19 Group H, M58 Sun 6/27 Group A, R32-5 Wed 7/1, R16-4 Mon 7/6 — confirmed).

**Expansion target:** Same as Gillette structural template — 3 → 9-10 sections, 4 → 7-8 ticketTips, 4 → 10-12 keywords, rich venue paragraph.

**Differentiated content angles (uncontested at depth):**

- **Group A opening-week marquee placement** — Group A traditionally contains the host nation in WC tournaments; in 2026 with three host nations (US, Canada, Mexico), Group A's exact composition is FIFA-dependent but historically commands the highest Group Stage attention. Lincoln Financial hosts the Group A opener M08 (Mon 6/15) as one of the tournament's earliest marquee Group Stage moments.
- **Round-of-16 placement on Monday 7/6** — the second Monday of the knockout rounds is the slow-news-day R16 slot that benefits from concentrated cable broadcast attention. R16-4 at Lincoln Financial is positioned for a strong TV audience and a corresponding resale-demand surge.
- **Eagles Super Bowl LII pricing comp** ($1,800-$5,000 sideline at 67,612 attendance Minneapolis) is the cleanest single-event-pricing precedent at the venue. Pair with the Eagles 2024 NFC Championship Run pricing data + the Eagles 2026 regular-season opener (Sept 14, ~T+88 days post-WC) for a three-event Eagles-anchor pricing comp.
- **Union 2010-onwards MLS Cup-and-final-tournament resale comp** ($60-$220 at the smaller Subaru Park) gives Philly soccer a venue-region resale floor that the page can cite.
- **SEPTA Broad Street Line direct service to Pattison stop** is the strongest USA-WC-venue transit access (better than MetLife's NJT-only setup, better than SoFi's Metro K Line walking-distance, better than AT&T's no-transit-option). **Transit-positive content angle is uncontested.** The page should lead with this — every other US WC venue page is written either neutral-to-positive on transit or honest-about-negatives (per Levi's). Lincoln Financial gets the rare full-positive transit framing.
- **Knockout-round + Group Stage mix** — 5 matches total = 3 GS + R32 + R16. Same shape as Lumen Field. Differentiates from Levi's (3 GS only, no knockout) and from AT&T (5 matches but with QF instead of R16).

**Run order:** Same canonical Forward Fix v2 as Friday — Step 1 SEO heads-up file as artifact 1, Step 0 match-count verification, current-state read, content-hook composition, `worldcup.ts` edit, commit with `Content refresh: lincoln-financial-field` prefix, refresh-log entry.

**Expected diff shape:** ~20-22 lines added / ~10 removed on a single file.

### Sunday, May 24 — Audit + plan + next-week composition

Same task as today. Compose next week's plan (Week of May 25 – 31), copy-review the queued drafts at that point, audit what shipped Mon-Sat 5/18-5/23, file the cross-agent coordination summary, plan the following week's Mon-Thu blog topics + Fri-Sat refresh pair.

**Next week's likely refresh queue (May 29 – May 30):** Fri 5/29 = **NRG Stadium** (Houston, the next sparse US WC venue in the queue). Sat 5/30 = **Arrowhead Stadium** (Kansas City, the next pair-slot US WC venue). Step 0 cross-check on both: NRG = 5 matches (3 GS + R32 + R16 per the 2026 schedule), Arrowhead = 5 matches (3 GS + R32 + R16 per the 2026 schedule). Both verified clean against `worldcup.ts` for the 5/24 Sunday composition.

---

## Forward-Look Calendar (May 25 – June 14)

- **Mon 5/25 (Memorial Day):** Big-idea blog — Memorial Day Weekend recap + summer-touring economic outlook (data piece)
- **Tue 5/26:** Tactical blog — choose based on this week's CRO Agent or Email Agent flag
- **Wed 5/27:** News/timely — Conf Finals Game 6/7 if either series goes the distance + WC T-15 day analytical piece (whichever is higher-organic-search)
- **Thu 5/28:** Comparison — 2026 NBA Finals vs Stanley Cup Finals pricing preview (Finals tip off ~early June)
- **Fri 5/29:** NRG Stadium venue refresh
- **Sat 5/30:** Arrowhead Stadium venue refresh
- **Sun 5/31:** Audit + plan
- **Week of June 1 – 7:** WC T-7 to T-14 day window. Heavy WC-focused content week. Big-idea Mon (WC-pricing-curve-at-T-10-days framework), tactical Tue (last-mile WC buying playbook), news Wed (WC-specific resale snapshot), comparison Thu (FIFA-direct vs major resale platforms head-to-head at T-7). Fri-Sat refresh pair = **BMO Field (Toronto) + BC Place (Vancouver)** = the first non-US WC venue refresh pair.
- **Week of June 8 – 14:** WC kickoff week. Mon-Thu blog content is WC-saturated — opener-day previews, group-by-group analysis, knockout-projection pieces. Fri 6/12 + Sat 6/13 = **Estadio Azteca + Estadio Akron** (first Mexico WC venue refresh pair). **WC kickoff Thursday 6/11 = the highest single content-volume day of Q2.**

---

## Status Summary

- **Drafting cadence: HEALTHY.** 4/4 Mon-Thu blog drafts shipped for the third consecutive week. Wed→Thu pair-publish structural pattern executed cleanly. Tactical Tue piece directly addresses CRO failure mode.
- **Refresh cadence: HEALTHY.** 2/2 Fri/Sat sparse-venue refreshes shipped for the fourth consecutive week. Forward Fix v2 lock-in criterion HIT.
- **Publishing cadence: BROKEN.** Day 40 publish drought, 19-draft backlog, 10.5% realized loss-to-decay. Eighth consecutive week of zero net publishes.
- **Cross-agent dependencies:**
  - SEO: Day 31 of bundle freeze + Day 7 of extractLowestPrice patch unabsorbed
  - Email: Cron Day 34 dead, drip queue ~115-120 owed
  - CRO: Day 32 of 85/85 null `target_price`
  - Watchlist drought: Day 22 (Apr 25 last add)
  - Paid Ads: Day 40 hold

The drafting + refresh halves of the program are running at the strongest cadence they've ever run. The publishing + cross-agent-blocker halves are at the worst cadence they've ever run. **The 90-minute Lead Architect bandwidth block remains the single program-wide unblocker** — same session that absorbs the extractLowestPrice patch, merges the SEO bundle, and clears the 17 highest-priority queued drafts.
