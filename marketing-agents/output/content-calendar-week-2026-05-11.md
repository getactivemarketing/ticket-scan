# Content Calendar — Week of May 11 – 17, 2026

**Strategist:** Content Agent (Agent 1) — Weekly Planning Session
**Session date:** 2026-05-11 (Mon)
**Covers:** Monday 5/11 → Sunday 5/17
**Carry-over source:** `content/next-week-plan.md` (produced Sun 5/10 by Sunday session). This document locks the slots from that plan, integrates today's content hook (the 5/7 anniversary publish window contracting to <36 hours, the Mon big-idea draft already shipped this morning at `content/2026-05-11-stadium-tour-three-night-residencies-2026.md`, and the upstream Step 0 catches on Lumen 6→5 + Levi's 6→3), and dispatches to other agents.

---

## Environment check (what changed since Sunday's plan)

- **The Mon big-idea draft executed on schedule this morning.** `2026-05-11-stadium-tour-three-night-residencies-2026.md` is composed, frontmatter clean (slug `stadium-tour-three-night-residencies-2026`, excerpt 191 chars, `category: guides`, `featured: false`), 1,217 words, opens with "Three years ago, a three-night stadium residency was a Taylor Swift outlier. In 2026, it is the booking template for the entire top tier of touring artists." Internal-link surface includes `/world-cup-2026/metlife-stadium` (verified live), `/compare`, `/watchlist` (both verified live), plus three queued-unpublished pieces (`/blog/bruno-mars-romantic-tour-2026-venue-price-guide`, `/blog/summer-concert-tour-2026-ticket-buying-guide`, `/blog/first-price-drop-alert-five-minutes-ticketscan-walkthrough`). **Third consecutive week with the Mon big-idea slot landing — the cadence is now structural.**
- **The 5/7 All-In Pricing piece's anniversary publish window has contracted to <36 hours.** Tomorrow Tue 5/12 is the FTC Junk Fees Rule one-year anniversary. NerdWallet posted Sat 5/9; Vox posted Sun 5/10; NYT Wirecutter re-published its 2024 explainer Sun 5/10 afternoon. **The 5/7 piece is the highest-priority publish-action of any draft in the queue.** Failing to publish by EOD today forfeits the anniversary search-volume peak. (Content-hook Hook 1 today.)
- **Publish backlog at 16 drafts after today's compose** — 15 entering Monday + 1 new. Sunday's plan called for a 13-publish queue-clear across Mon–Thu; the contracted window means the recommended Mon AM bundle (`2026-04-16-best-ticket-comparison-sites-2026.md` + `2026-05-07-all-in-pricing-tickets-2026-junk-fees-explained.md`) is now publish-or-forfeit on the anniversary piece. **Day 34 of the publish-velocity zero-streak** (last ship 2026-04-07). Three drafts are critical-stale: 4/27 (10 days past its referenced May 1 deadline), 4/29 (12 days drift on the date-anchor open, "Today is April 29 / 43 days"), 4/15 ("under two months until the opener" now reads as 32 days, freshen on publish day).
- **Internal-link surface of today's Mon draft is structurally hobbled until 3 queued drafts publish.** Per today's content-hook Hook 4: `/blog/bruno-mars-romantic-tour-2026-venue-price-guide`, `/blog/summer-concert-tour-2026-ticket-buying-guide`, `/blog/first-price-drop-alert-five-minutes-ticketscan-walkthrough` all 404 currently. If Lead Architect ships the anniversary-week publish bundle Mon–Tue, the 5/05 piece publishes Tue and the 5/06 + 4/27 publishes land Wed–Thu — today's Mon draft's internal-link surface becomes fully live by Thursday EOD. **The publish bottleneck is now actively suppressing new-content SEO value at the moment of drafting, not just on past drafts decaying.**
- **Today's news beats:** FTC anniversary T-1 (Tue 5/12). NBA Round 2 Game 2s tip off Mon 5/11–Wed 5/13. NHL CF Game 1 East tonight. Yankees vs Red Sox at Yankee Stadium T-1 (5/12–5/14). Bruno Mars Soldier Field T-5 (Sat 5/16). **Four time-perishable news beats overlap with this week's draft slate — every Mon–Thu draft has a same-week relevance hook.**
- **Upstream Step 0 cross-check caught two errors on today's plan composition** (per content-hook Hook 4): Lumen Field at 5 matches not 6 (last week's plan +1 over-count), Levi's Stadium at 3 matches not 6 (last week's plan +3, 100% over-count). Both venues' refresh scope adjusts accordingly. **Step 0 cumulative hit rate now 6 of 6 scheduled exercises catching fact errors.** Adopting the Sunday-pre-write Step 0 as canonical from this plan composition forward.
- **SEO bundle-blind `lowPrice` patch** — `extractLowestPrice()` round-trip bug in `web/src/app/world-cup-2026/[stadium]/page.tsx:55–60` emits `lowPrice = $15,000` for AT&T and `$10,000` for Mercedes-Benz (true floors ~$150 and ~$120). The SEO bundle's working-tree diff includes the same buggy function. **Day 25 of bundle freeze today.** 3-line patch filed Sun 5/10 in `seo-requests/2026-05-10-seo-replies-bundle.md` §Reply 1 — must absorb into the bundle commit before push. (Content-hook Hook 5 today.)
- **Watchlist drought 192h+ (8.0 days) this morning** — first cross-day-boundary on the drought clock. Last add holds at Apr 25 18:27 UTC. Funnel still sealed at the price-alert step (Email Agent drip queue 105 emails owed across 31 users, Day 28 cron dead). (Content-hook Hook 6 today.)
- **Instagram template rotation — flagged 5 weeks running.** No movement. Same escalation as last week: shipping decision blocker on Instagram channel viability. Sat 5/9 is the end-of-week decision deadline per Sunday's plan.

---

## This week's content items (locked)

### Priority 1 — Publish the backlog (Mon AM is anniversary-or-forfeit)

**FIFTEEN drafts ready to ship + today's Mon draft = 16. The cadence below clears 13 actionable drafts across Mon–Thu and shelves two Round-1 NBA pieces.**

| Slot | File | Category | Hub link | Status |
|------|------|----------|----------|--------|
| **Mon 5/11 AM** | `2026-05-07-all-in-pricing-tickets-2026-junk-fees-explained.md` | comparisons | `/compare`, `/blog/best-ticket-comparison-sites-2026` | **PUBLISH BY EOD MONDAY** — anniversary T-1. Flip `featured: false` → `featured: true` for homepage placement. No body edits required (reviewed clean Sunday). |
| Mon 5/11 AM | `2026-04-16-best-ticket-comparison-sites-2026.md` | comparisons | `/compare` | Ready, 25d old, fully evergreen. Strongest publish to seed `/compare` graph for the 5/7 piece's 3+ internal links. |
| Tue 5/12 AM | `2026-04-23-ticketmaster-vs-seatgeek-fees-2026.md` | comparisons | `/compare`, `/blog/best-ticket-comparison-sites-2026` | Ready, 18d old. Q2 comparison-series anchor. |
| Tue 5/12 AM | `2026-04-30-stubhub-vs-vivid-seats-2026.md` | comparisons | `/compare`, `/blog/ticketmaster-vs-seatgeek-fees-2026` | Ready, 11d old. Q2 comparison-series companion. |
| Tue 5/12 AM | `2026-05-05-first-price-drop-alert-five-minutes-ticketscan-walkthrough.md` | tips | `/watchlist`, `/how-it-works` | Ready, 6d old. Pairs with Tuesday's new Smart Target Prices draft as the onboarding-arc pair. |
| Tue 5/12 PM | `2026-04-28-same-day-nba-playoff-tickets-6-hour-playbook.md` | tips | `/compare`, `/watchlist` | Ready, 13d old. NBA Round 2 Game 2 cluster Tue/Wed — high relevance. Round-1 framing was retired Saturday; piece is series-agnostic. |
| Wed 5/13 AM | `2026-04-22-fifa-resale-three-weeks-data-world-cup-2026.md` | news | `/world-cup-2026`, stadium pages | Ready, 19d old. Lifts to top-of-queue if FIFA confirms Phase 2 this week. |
| Wed 5/13 AM | `2026-04-29-world-cup-2026-general-sale-closing-april-2026.md` | news | `/world-cup-2026` | Ready WITH freshen — drop "Today is April 29 / 43 days" opener → "The World Cup opener is a month out. Here's the honest state of the resale and FIFA-direct pipelines." 12d old. |
| Wed 5/13 AM | `2026-04-15-world-cup-2026-seat-assignments-bait-switch.md` | news | `/world-cup-2026` | Ready WITH freshen — "under two months until the opener" → "32 days from the opener." 26d old. Pairs naturally with the 4/29 piece. |
| Thu 5/14 AM | `2026-05-04-cubs-vs-reds-wrigley-field-pricing-48-hours-may-2026.md` | news | `/venues/wrigley-field`, `/compare` | Ready WITH 1-line freshen — open lead from "the Cubs are home through Wednesday for a mid-week set against the Reds" → "When the Cubs play a mid-week series at Wrigley — like the Reds set this week, or the Brewers / Cardinals series later this month —" then untouched. 7d old. |
| Thu 5/14 AM | `2026-05-06-bruno-mars-romantic-tour-2026-venue-price-guide.md` | comparisons | `/compare`, `/world-cup-2026/metlife-stadium`, today's Stadium Tour Economy piece | Ready, 5d old. Pre-publish freshen opportunity Wed evening if Soldier Field 5/16 pre-show data lands; otherwise publish as-is. |
| Thu 5/14 AM | `2026-04-21-how-to-compare-ticket-prices-30-seconds.md` | tips | `/compare`, `/how-it-works` | Ready, 20d old. `/compare` graph reinforcement once 4/16 + the comparison-series-triplet are live. |
| Thu 5/14 AM | `2026-04-27-summer-concert-tour-2026-ticket-buying-guide.md` | guide | `/compare`, `/watchlist`, today's Stadium Tour Economy piece | Ready WITH 1-line freshen — "Friday May 1 deadline" → "the early-May deepest-inventory window has closed; the mid-May second-tier window is what matters now." 14d old. |

**Total Mon–Thu queue-clear target: 13 publishes (2 Mon AM + 4 Tue + 3 Wed + 4 Thu).** If only one publishes, it must be the 5/7 piece Mon AM.

**Shelve / archive decisions (Lead Architect call — fourth consecutive week):**
- `2026-04-08-nba-nhl-playoff-tickets-2026-buying-guide.md` — 33 days old. Round-1 framing factually superseded. **Archive** to `marketing-agents/output/content/archived/` (folder needs creation).
- `2026-04-14-nba-playoff-tickets-compare-prices.md` — 27 days old. Round-1 framing factually superseded as of Saturday 5/9 (NBA Round 2 tip-off). **Shelve verdict held from Sunday plan; archive same as 4/8.**

Realized loss-to-decay on shelving 4/14: 3 of 19 drafts (15.8%). **Net realized publish from past 34 days of drafting: 0 of 19 actionable drafts.**

### Priority 2 — New originals (4 pieces, Mon–Thu)

| # | Day | Title | Format | Target keyword | Target URL |
|---|-----|------|--------|----------------|------------|
| 1 | Mon 5/11 | The Stadium Tour Economy in 2026: Why Three-Night Residencies Just Became the Default | 1100–1300w big-idea guide | "stadium tour residencies 2026," "Bruno Mars MetLife three night," "Coldplay 2026 tour tickets," "best night to buy concert tickets," "multi-night concert tour pricing" | `/blog/stadium-tour-three-night-residencies-2026` |
| 2 | Tue 5/12 | Setting Smart Target Prices: The Math Behind Where to Set Your Ticket Floor | 950–1150w tactical tips | "how to set target price tickets," "ticket watchlist target price math," "where to set price drop alert," "ticket alert floor," "smart price drop alert" | `/blog/smart-target-prices-ticket-watchlist-floor-math` |
| 3 | Wed 5/13 | Yankees vs Red Sox at Yankee Stadium: How Rivalry-Week Pricing Differs From a Normal Wednesday | 950–1150w news/timely | "Yankees vs Red Sox tickets," "Yankee Stadium ticket prices," "Yankees Red Sox rivalry tickets," "Yankee Stadium bleachers tickets," "cheapest Yankees tickets day of game" | `/blog/yankees-vs-red-sox-yankee-stadium-rivalry-pricing-may-2026` |
| 4 | Thu 5/14 | The MLB Rivalry-Week Pricing Tier Guide: Which Six Series Move Prices Most (and How Much to Budget for Each) | 1100–1350w comparison | "MLB rivalry week tickets," "Yankees Red Sox vs Cubs Cardinals tickets," "MLB rivalry pricing premium," "best rivalry games to attend MLB 2026," "Dodgers Giants tickets premium" | `/blog/mlb-rivalry-week-pricing-tier-guide-2026` |

**Why this mix (validation of 5/10 plan):** Monday's piece is the **big-idea evergreen** indexed ahead of three 2026 stadium-tour buying-window peaks (Bruno Mars MetLife T-103, Coldplay T-77, plus Lana Del Rey + Father John Misty). Tuesday's piece is the **structural-product-gap closer** for the Day-25 target_price field (85/85 watchlist items null) and pairs as Email 2 (Day 7) drip rewrite candidate. Wednesday's piece captures the **second-largest MLB rivalry-week pricing benchmark** of the year at a stadium that does NOT yet have a `/venues/yankee-stadium` page — content + venue-page-creation demand signal for the 5/18 emergency-override candidate. Thursday's piece is the **Q3 comparison-series opener** that absorbs the 5/04 (Cubs vs Reds) and 5/13 (Yankees vs Red Sox) pieces into a single structural cross-rivalry comparison; indexed before the Cubs vs Cardinals June 6–8 series and Dodgers vs Giants June 13–15. **All four pieces have time-perishable hooks or structural-product-signal anchors. None are filler.**

### Priority 3 — Page refreshes (Fri–Sat)

| # | Day | Target page | Scope |
|---|-----|-------------|-------|
| 5 | Fri 5/15 | `worldcup-stadiums/lumen-field` (`web/src/data/worldcup.ts`) | **5 matches** (Step 0 verified Sun 5/10): M7 Sat 6/13 Group D, M22 Wed 6/17 Group K, M38 Sun 6/21 Group G, M55 Fri 6/26 Group D, R32-7 Thu 7/2. Sections 3 → 5–8 with FIFA Cat 1–4 mapping. Description: 5-match volume framing, unique soccer-specific pitch-geometry retrofit (100-Level seating runs to touchline), Sounders MLS pricing comp ($35–$120 sideline 2024 regular, $80–$300 playoffs, $120–$400+ Concacaf Champions Cup), Seahawks NFL secondary comp, 12th-Man fan-noise legacy (Guinness Record 137.6 dB), Pioneer Square + Stadium District character, Light Rail Stadium Station transit, Pacific-Northwest weather window (65–75°F, 30% chance light rain — fan-comfort messaging). TicketTips 4 → 6–8 Lumen-specific. Keywords 4 → 8–12. |
| 6 | Sat 5/16 | `worldcup-stadiums/levis-stadium` (`web/src/data/worldcup.ts`) | **3 matches** (Step 0 verified Sun 5/10): M14 Mon 6/15 Group G, M29 Fri 6/19 Group C, M62 Sun 6/28 Group G. **Zero knockout matches — sparse-data adjusted scope.** Sections 3 → 5–7. Description: 3-match Group-Stage-only framing, Stanford Stadium 1994 World Cup heritage callback (Stanford hosted 1994 USA Group Stage + R16 at the same Bay Area location 32 years prior — content-differentiated angle no other USA WC venue can claim), Earthquakes MLS pricing comp, 49ers NFL secondary comp (Super Bowl 50 $4K–$15K resale, NFC Championship Game 2024 $400–$1,200 sideline), BART/Caltrain transit honesty (worst transit access of any USA WC venue — flag honestly), 100°F+ South Bay summer heat upside-warning, FIFA Cat 4 **cheapest US WC seats** ($80–$250 upper tiers) as compensating content angle for the absent marquee match. TicketTips 5–7 Levi's-specific. Keywords 6–9. |

**Conditional Saturday slot:** If Bruno Mars Soldier Field 5/16 pre-show data lands by Saturday morning, the 5/06 Bruno Mars draft pre-publish freshen becomes the higher-leverage Saturday-morning action — pulls Levi's to Sunday or to next Friday 5/22.

**Backup target if Levi's is faster than expected:** Lincoln Financial Field (Philadelphia, last plan asserted 6 matches — needs Step-0 cross-check). NRG Stadium (Houston, last plan asserted 7 — needs Step-0 cross-check) is the other candidate; would extend the Texas-venue cluster started by AT&T 5/8.

**Refresh-checklist for both slots (per Step 5 added Sat 5/2, exercised cleanly on Wrigley/AT&T/Mercedes-Benz the past three Fri/Sat pairs):**
- **Step 1 (NEW per Forward Fix v2):** File `seo-requests/2026-05-15-content-data-touch.md` (Lumen) / `seo-requests/2026-05-16-content-data-touch.md` (Levi's) as the **literal first artifact** of the daily-content-agent run, ahead of any worldcup.ts editing. Heads-up file mtime ≥ 90 minutes before the absorbing commit.
- **Step 0:** Already run today on plan composition (Lumen 5, Levi's 3). Re-verify on refresh-day before drafting.
- **Step 2:** Edit description, sections, ticketTips, keywords on the venue entry.
- **Step 3:** Cross-check vs Step 0 (no Third-Place / Final / Semi-Final misattribution — same error class as the Fri 5/1 SoFi correction).
- **Step 4:** `npx tsc --noEmit`.
- **Step 5:** `git diff --stat -- web/src/data/worldcup.ts` to confirm scope is single-file.
- **Step 6:** Explicit commit `git commit -m "Content refresh: <slug>"` BEFORE the daily marketing-output push runs.

### Priority 4 — Strategic asset (lead magnet, see separate file)

**Lead magnet — "MLB Rivalry-Week Pricing Tier Guide (Infographic + Data Spec)."** Full content in `lead-magnet-mlb-rivalry-week-pricing-infographic.md`. Format rotation continues: 4/13 PDF guide (WC), 4/20 PDF cheat sheet, 4/27 spreadsheet (Concert Tracker), 5/4 single-page checklist (5 Signs Overpay), **5/11 rotates to infographic data spec** — the first visual-data asset in the library, designed for the screenshot-and-share social pattern + permanent embeddable widget on the Thursday Rivalry-Week Tier Guide post.

**Why infographic now:** The Thursday 5/14 piece's six-tier rivalry-pricing table is the strongest visual-data candidate the program has produced — it carries the same six-row structure, the same numerical premium ratios, and the same MLB-2026 calendar anchoring. The infographic is the visual restatement of that piece's central data. **Asset ships Wednesday 5/13 alongside the Yankees vs Red Sox piece publish** (the rivalry premium is the central data point both surfaces share); the Thursday piece embeds the infographic as the hero image and the lead magnet form converts on the post. **Bonus surface:** the data spec doubles as the design brief for the Instagram template rotation (5-week-running flag) — if Lead Architect ships rotation variants this week, the rivalry-week tier table is the first piece of social-content the new variants render.

### Priority 5 — Sunday audit + next-week planning

Sunday 5/17 — produce `next-week-plan.md` for week of 5/18–5/24. Same structure as today's source plan. Anticipated slots:
- **Mon 5/18:** Yankee Stadium venue page creation (emergency-override candidate, mirroring Wrigley 5/4 pattern). Stretch: Soldier Field venue page creation if Yankee Stadium ships first or Lead Architect prefers smaller pages. Mon blog draft = either Yankee Stadium follow-on or a Mother's Day → Father's Day evergreen tactical piece (anchored to Father's Day Sun 6/21, T-35 days).
- **Tue 5/19:** Pattern B churn anatomy post-mortem (parked from prior weeks) — depends on cron unblock + sufficient distance from Apr 25 + Apr 28-29 cohorts.
- **Wed 5/20:** First Bruno Mars Soldier Field post-show data piece (Soldier Field show is Sat 5/16; pricing-curve actuals shippable Mon–Wed if dataset is captured by SEO Agent / scheduler).
- **Thu 5/21:** Q3 comparison series second piece — either "Which platform is cheapest for which sport?" or "Why Vivid Seats has more Cubs inventory than StubHub but vice-versa for Yankees." Decision deferred to Sunday composition.
- **Fri 5/22 + Sat 5/23:** Two more WC stadium refreshes. Current top candidates: NRG Stadium (Houston, last plan asserted 7 matches — Step 0 verify Sunday), Lincoln Financial Field (Philadelphia, last plan asserted 6 — Step 0 verify Sunday). **Continue applying the pattern signal:** every un-refreshed sparse-venue match-count assertion in the prior plan is likely over-counted.

### Priority 6 — Today's blocking deliverable (operational, not blog)

**5/7 All-In Pricing piece publish to production** — the single highest-priority publish-action of any draft in the queue. Anniversary T-1 today, T-0 tomorrow. **Flip `featured: false` → `featured: true` for homepage placement** before push. **Lead Architect ask filed via today's content hook Hook 1.** Estimated time: 5 minutes (frontmatter edit + push + 2–3 minute Vercel deploy wait).

**Bundle commit + push (Day 25)** — paired action. The 3-line `extractLowestPrice` patch (filed in `seo-requests/2026-05-10-seo-replies-bundle.md` §Reply 1) must absorb into the bundle commit before push. Without the patch, the bundle redeploys the bug to production for the next-14-stadium pages.

---

## Content gap analysis vs. competitors

Spot-check vs. top ranker for four target queries we're writing against this week:

- **"FTC junk fees rule anniversary" / "all-in pricing tickets one year" (today's publish target):** SERP top-10 is dominated by NerdWallet (5/9), Vox (5/10), Wirecutter (5/10 republish of 2024), USA Today policy desk (April), and a few FTC press-release re-summaries. **Gap:** zero comparison-platform-perspective pieces in the top-10 — every published piece is from a generalist consumer-tech or policy desk. The 5/7 piece's "transparency is the comparison platform's friend, not its enemy" framing is the unique angle no published piece carries. **TicketScan can own the comparison-platform corner of this SERP within 14 days of publish if the piece lands today.**
- **"Stadium tour residencies 2026" / "Bruno Mars MetLife three night" (Mon target):** SERP is artist-fan-blog roundups + Ticketmaster event pages + a single LiveNation press-release recap. **Gap:** zero pieces frame the residency pattern as a **2026 industry-wide structural shift** with a per-night pricing model. The "night 1 marquee / night 2 softens 15–25% / night 3 day-of-week dependent" framing is novel-to-our-corpus and search-corpus alike. **Strongest evergreen indexing target this week.**
- **"How to set target price tickets" / "ticket watchlist target price math" (Tue target):** SERP for "set target price tickets" is entirely Ticketmaster help-center pages + a few SeatGeek FAQ pages, all generic ("you can set a target price in the app"). **Gap:** zero pieces give a *math-based* answer ("here are the four archetypes and how to compute each"). Direct response to the Day-25 product gap (85/85 watchlist items null `target_price`); doubles as in-product onboarding copy for the next watchlist-add UI revision.
- **"Yankees vs Red Sox tickets" / "Yankee Stadium bleachers tickets" (Wed target):** SERP is Yankees.com primary inventory + StubHub event pages + a thin SeatGeek "guide to Yankee Stadium" piece (last updated 2023). **Gap:** no independent **rivalry-week-specific pricing piece** exists with section-band-by-section visiting-fan-density-premium breakdown. The 200% Bleachers / 130% Main Level / 35% Legends asymmetric premium framing is structural to the rivalry and absent from competitor coverage. Doubles as the demand-signal capture for the Mon 5/18 Yankee Stadium venue-page-creation candidate.

**Gap we're NOT filling this week (parking lot):**
- **"Bruno Mars Soldier Field tickets"** — adjacent to the 5/06 piece, conditional on data landing. Park for Wed 5/20 follow-on if Soldier Field 5/16 pricing-curve dataset is captured.
- **"Mother's Day → Father's Day ticket gifting"** — evergreen, Father's Day Sun 6/21 T-42 today. Park for week of 5/18 Mon slot.
- **"NHL Conference Finals tickets quick-tactical"** — parked. Conservative call: defer to week of 5/18 if bandwidth + ratings exceed projections.
- **"WC Phase 2 confirmation rapid-response piece"** — conditional on FIFA confirming between today and Wed 5/13. If it lands, the 4/22 FIFA-resale draft jumps to same-day publish, Phase-2-confirmation paragraph appended.
- **"How to gift concert tickets the right way" (evergreen)** — parked for week of 5/18, anchored to Father's Day.

---

## Cross-agent dispatch

- **SEO Agent (Agent 2):** Full keyword opportunity list filed at `seo-requests/2026-05-11-content-calendar-handoff.md` (filing today, see appendix below). Three of four new blog posts target open SEO requests (Mon Stadium Tour Economy → big-idea tour-aggregator candidate flag, Tue Smart Target Prices → onboarding-keyword cluster + structural-product-gap surface, Wed Yankees/Red Sox → Yankee Stadium venue-page demand-signal). **Day 25 of bundle freeze + bundle-blind `lowPrice` 3-line patch must absorb before push** — escalated in `seo-requests/2026-05-10-seo-replies-bundle.md` §Reply 1. Forward Fix v2 next test slot Friday 5/15 (Lumen Field) — heads-up file expected as literal first artifact of Friday's daily-content-agent run. Pre-write Step 0 caught Lumen 6→5 + Levi's 6→3 (canonical from today forward). The 4/18 blog OG images request is Day 23 — Phase 1 site-default fallback (~30 min Lead Architect work) is the unblock; Phase 2 templated per-post can wait. Bundle now adds 13 venues.ts insertions from Wrigley + AT&T + Mercedes-Benz refreshes plus the `lowPrice` patch.
- **Social Agent (Agent 3):** Monday's Stadium Tour Economy piece is the **strongest Twitter/X share-bait of the week** — residency-pattern-economic-shift framing has share-meme potential. Tuesday's Smart Target Prices is the **LinkedIn-card piece** (data-driven, methodology-forward; four-archetype framing screenshots cleanly). Wednesday's Yankees/Red Sox is the **local NYC + Boston organic posting opportunity** (Yankees-Red-Sox visiting-fan-density premium framing is regional-share native). Thursday's MLB Rivalry-Week Tier Guide is the **Twitter/X-thread piece of the week** — six-tier table is screenshot-friendly and the rivalry-pricing-premium framing has thread-format affordance. Friday's Lumen refresh is the **Pacific-Northwest local angle** (Sounders + Seahawks fan bases both active on Twitter/X; 12th-Man-loudness Guinness Record is screenshot-bait). Saturday's Levi's refresh hooks into the **cheapest US WC seats** angle if Bruno Mars data doesn't land; if Bruno Mars data lands, the freshen + Soldier Field show-day thread becomes the higher-leverage Saturday post. **Instagram template rotation now blocking Instagram channel viability — fifth week running; end-of-week Sat 5/9 decision deadline per Sunday plan held.** Continue NOT publicly referencing the same-day-event UX failures, the cron failure, the bundle-blind defect.
- **Email Agent (Agent 5):** When Monday's anniversary-week publish wave lands, queue the **5/7 All-In Pricing piece for Tuesday newsletter** — anniversary-day subject line writes itself. **Tuesday 5/12's Smart Target Prices piece is the highest-leverage Email 2 (Day 7) drip rewrite candidate** once cron unblocks; pairs with the 5/05 welcome-flow piece (Email 1 Day 3) as the onboarding sequence rewrite. **Lead magnet sequence — new this week:** "MLB Rivalry-Week Pricing Tier Guide (Infographic)" delivery kicks off Wednesday 5/13 — 3-email sequence specified in the asset file. **Drip queue at 105 emails owed across 31 users + Day 28 cron dead — not a content fix but coordinate any newsletter sends with cron status to avoid blasting into a broken pipe.** Manual-send opportunity for the Apr 25 + Apr 28-29 cohorts when cron unblocks: welcome-flow piece (5/05 → manual Email 1) followed 96 hours later by Smart Target Prices (5/12 → manual Email 2).
- **Paid Ads Agent (Agent 4):** Continue holding (Day 33). 0.286/day signup floor + 11-NEW-transitions-stacked-against-dead-cron makes paid spend a CAC multiplier on a sealed funnel. Resume trigger remains the cron-fix decision moment. **When paid resumes:** Monday's 5/7 anniversary publish + Tuesday's Q2 comparison-series triple-publish (4/23 + 4/30 + 5/7) are paired high-intent landing-page candidates for paid search on "FTC junk fees rule," "Vivid Seats fees," "Ticketmaster vs SeatGeek." Tuesday's Smart Target Prices piece + the 5/05 welcome-flow piece together form a strong **retargeting cluster** on "ticket price alerts" + "set target price" queries when conversion tracking is live. Lead magnet capture rate from the infographic can be the Wed/Thu paid-test landing page once the asset ships.
- **CRO Agent:** Target-price field investigation now Day 25 open. 85/85 watchlist items, 100% `target_price = null`. **Tuesday 5/12's Smart Target Prices piece is the structural-content companion for the post-signup UX redesign that's Day 18 overdue.** Coordinate so the piece's four archetypes + worked examples match whatever target-price prompt CRO ships. Same coordination pattern as last week with the welcome-flow piece — content-first, UI-aligns-to-content. **Same-day-event UX failure mode now confirmed 3 times this week** (ajvanprooyen × 3 Cubs games), 4 times in last 14 days. **Post-signup UX audit (n=11 confirmations) Day 18 overdue.** Wednesday's Yankees/Red Sox piece + Sunday's stretch Yankee Stadium venue page candidate together surface watchlist-add UI flow opportunities.
- **Analytics Agent:** Stadium Tour Economy / Smart Target Prices / Yankees-Red-Sox / Rivalry-Week Pricing maps directly to today's content-hook + last Sunday's plan composition. The 4-blog-draft cadence respects the Day 34 publish bottleneck — net-net 7-day output target this week is 4 new drafts + 13 backlog publishes (if bandwidth opens) = up to 17 content surfaces shipping. **Largest single-week content output of the program if executed.** Today's analytics daily not yet filed; will integrate when posted.

---

## Priority ranking (if we only ship 5 things this week)

1. **PUBLISH the 5/7 All-In Pricing piece (today, EOD).** Anniversary T-1. The highest-priority publish-action of any draft in the queue. Single highest-leverage 5 minutes of the week (frontmatter `featured: true` flip + push + Vercel deploy). Without it, Tuesday's anniversary search-volume peak is forfeit.
2. **PUBLISH the anniversary-week comparison-series triple (Tue 5/12): 4/23 + 4/30 + 5/7-already-live + 5/05 welcome-flow.** Tuesday is anchor-day; the Q2 series capstone needs to land as a four-piece arc to maximize internal-link reinforcement of `/compare`.
3. **PUBLISH the Wed–Thu queue-clear (4/22, 4/29, 4/15, 5/04, 5/06, 4/21, 4/27).** Continues the 13-publish queue-clear target. After Thu, queue contracts to 4 (just the new Mon–Thu drafts from this week's cycle).
4. **Wed 5/13 lead-magnet infographic activation.** The first visual-data asset in the library, designed for screenshot-and-share social + permanent embed on the Thursday Rivalry-Week piece. 3-email delivery sequence kicks off same day.
5. **SEO bundle commit + push (Day 25) WITH `extractLowestPrice` patch absorbed.** Single Vercel deploy clears ~50 schema improvements + 3 indexability leak fixes + the Wrigley + AT&T + Mercedes-Benz refresh insertions + the 100×-wrong AggregateOffer `lowPrice` bug fix. **Same flag as past seven Sundays. Re-escalate to Lead Architect — seventh consecutive Sunday-or-Monday flag.**

Everything else is reinforcement.

---

## Appendix: Cross-agent file index for this week

- This file: `marketing-agents/output/content-calendar-week-2026-05-11.md`
- Performance review: `marketing-agents/output/content-performance-week-2026-05-11.md`
- Lead magnet: `marketing-agents/output/lead-magnet-mlb-rivalry-week-pricing-infographic.md`
- SEO handoff: `marketing-agents/output/seo-requests/2026-05-11-content-calendar-handoff.md` (filing today)
- SEO bundle escalation (carryover): `marketing-agents/output/seo-requests/2026-05-10-seo-replies-bundle.md` §Reply 1 (`extractLowestPrice` 3-line patch)
- Sunday's source plan: `marketing-agents/output/content/next-week-plan.md` (produced 5/10)
- Today's content hook: `marketing-agents/output/content/content-hook.md`
- Today's Monday big-idea blog draft (composed this morning): `marketing-agents/output/content/2026-05-11-stadium-tour-three-night-residencies-2026.md`

## Long-running SEO asks status (updated)

| Ask | Filed | Due | Status as of 5/11 |
|-----|-------|-----|--------------------|
| Ask 1: Venue page openers | 4/20 | 5/01 | **Absorbed.** SoFi (5/01) + Hard Rock (5/02) + AT&T (5/08) + Mercedes-Benz (5/09) opener rewrites shipped as part of the description-rewrite scope. Lumen (5/15) + Levi's (5/16) continue. |
| Ask 2: FAQ audit | 4/20 | 4/27 | **Shipped Mon 4/27** ✓ |
| Ask 3: World Cup country pages | 4/20 | 5/10 | **Outline filed yesterday** in `seo-requests/2026-05-10-content-replies-bundle.md` (per Sunday session). Lead Architect call on programmatic-page batch vs roll-out blog post for Mon 5/18 publish slot. |
| Ask 4: Best-time-to-buy copy | 4/20 | TBD | **Blocked** on backend price-history endpoint. Day 34 blocker. |
| Ask 5 Post 1: TM vs SG fees | 4/20 | 4/27 | **Drafted 4/23, queued unpublished** — recommended Tue 5/12 publish for the anniversary triple-publish. |
| Ask 5 Post 2: SH vs VS | 4/20 | 5/04 | **Drafted 4/30, queued unpublished** — recommended Tue 5/12 publish for the anniversary triple-publish. |
| Ask 5 Post 3: All-In Pricing | 4/20 | 5/11 | **Drafted 5/07, queued unpublished** — **PUBLISH TODAY Mon 5/11 EOD.** Anniversary T-1. |
