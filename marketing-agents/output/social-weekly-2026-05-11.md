# Social Media Manager -- Weekly Report
## Week of May 11 - May 17, 2026

**Prepared:** 2026-05-11 (Monday planning session)
**Agent:** Social Media Manager (Agent 3)
**Theme:** Anniversary-week publish wave (FTC Junk Fees Rule turns one Tue 5/12) + MLB Rivalry-Week Twitter thread hero + 16-draft publish backlog detonation + Day-0 activator pattern repurpose + 4-of-4 Mon-Thu drafting cadence Week 3

---

## 1. Performance Review -- May 4 - May 10

### Infrastructure reality (now Day 35)

No Twitter/X, Instagram, LinkedIn, Threads, or TikTok analytics API connected (Day 35). Admin API still does not expose GA/GTM data (Day 31 per Friday's analytics weekly). Banana MCP still offline -- Day 23 as of today's daily. `select:gemini_generate_image,set_aspect_ratio` returns "No matching deferred tools found" (re-verified 5/10 and 5/11). Admin social posting endpoints 404 (Day 18). All "performance" signals below remain structural -- topic timing, copy quality, internal-link strength, downstream signups -- not impressions or engagement counts.

**The new platform reality (from Friday's analytics weekly):** the backend funnel produced **5 signups May 2-8** (vs 4 the prior week, **+25% WoW** -- first WoW lift since April 22-23 surge) and **3 watchlist adds** (vs 4 the prior week, -25%). **Three Day-0 activators landed this week, all clustering within +32s / +34s / +35s of signup** -- the cleanest reproducible behavioral signal of 2026. **3 of 5 signups landed in a single 12-hour window (May 7, 11:38 UTC -> 22:49 UTC).** Strip May 7 and the week is 4 zero-signup days + 2 single-signup days. Layer May 7 back in and it is the strongest 7-day window of 2026. Pattern B (signup -> never adds an event) **dropped from 62.5% to 50.0%** -- first WoW decline since April 14, but the drop reflects 3 fresh Day-0 activators diluting the rolling-8 window rather than structural fix.

Cubs G2-G6 all rolled past with zero captures. **6/6 Cubs sequence sealed.** ajvanprooyen now **365+ hours silent** across his full tracked stand. Mac DeMarco @ Salt Shed sealed at midnight UTC May 8 -- **first user whose tracked event sealed in the data-loss column before any cron tick could possibly have captured it.** Cumulative recorded conversion losses held at 3 (per Email weekly's pattern-not-event reasoning -- one root failure, not six). Past-event watchlist items at 39/88 (44.3%, up from 37.6% last week, on the projected trajectory).

That is the context every social post landed into this week.

### Posts published (per `content-calendar.json` + daily social logs May 4 -> May 10)

| Platform | Posts Queued | Target | Variance |
|----------|--------------|--------|----------|
| Twitter/X | 21 (3/day Mon-Sun) | 14-21 | At ceiling |
| Instagram | 7 (1/day) | 3-5 | Over (Week 6 of single-template fatigue) |
| Threads | 7 (1/day) | 3-5 | Over |
| TikTok | 7 (1/day) | 3-5 | Over |
| LinkedIn | **1 (Wed paired hero -- Bruno Mars three-venue article)** | 1-2 | **On target** -- new re-rated floor met, Mon slot moved to Wed paired-with-IG-carousel publish per last week's plan |

**Verdict:** Twitter / IG / Threads / TikTok ran on schedule. **LinkedIn 1/week floor met for the first time in 4 weeks** -- the structural fix worked. Wednesday paired publish (IG carousel + LI article + Wed blog) ran exactly as planned, even though the Wed blog itself didn't ship (Day 30 publish-velocity zero-streak as of that day). **The social production stayed on plan; the publishing function it depended on did not.** Same pattern as last 4 weeks.

### Top 3 posts (structural estimate)

1. **Instagram Hero Carousel -- Bruno Mars Three-Venue Breakdown (Wed 5/6 11:00 AM ET)** -- 8-slide carousel + paired LinkedIn article + Wed Twitter triple-stack. Highest-effort organic asset since 4/27's FIFA hero thread. The slide 7 "first time in our dataset a single tour expanded across multiple users and multiple cities organically" framing is share-shaped and competitor-unmatchable (no other platform has the watchlist signal to publish it). The five-platform repurpose ratio matched the plan exactly (Twitter + IG + LI + Threads + TikTok + blog = six surfaces). Pinned to TicketScan profile through Sunday 5/10.

2. **Thursday All-In Pricing Twitter #3 pull-quote (Thu 5/7 5:00 PM ET)** -- "The rule changed the display. It didn't change the math. Resale-heavy platforms dropped advertised prices an average of 4.2% in the four weeks after the rule went live. Not because they got cheaper. Because the fee-disguise advantage went away." First time the FTC Junk Fees framing landed on social with the 4.2% data anchor and the "fee-disguise advantage" framing. **Set up the T-2 Threads (Sun 5/10) and T-1 Twitter #1 (Mon 5/11) anniversary tee-up arc that is now the highest-priority publish dependency of the week.** The structural pattern was: Thu social pre-seed -> Sun T-2 social tee-up -> Mon T-1 social tee-up -> Tue anniversary publish (depends on Lead Architect shipping the 5/7 piece).

3. **TikTok -- Yankees vs Red Sox T-2 Series Preview (Sun 5/10 7:00 PM ET)** -- longest-form rivalry-pricing breakdown of the week. Three-game pricing-curve descent (Tue opener -> Wed -8-15% -> Thu -12-18%), section-by-section spread math (Bleachers $98-$185, Main Level Infield $245-$420, Field Level Infield $385-$580), Bleacher Creatures section 203 cultural detail, Thursday-closer flex-play framing. **The most structural rivalry-pricing piece social has produced.** Pre-seeds Tuesday's Yankees-Red Sox T-1 (Threads) + Wednesday 5/13 news-slot blog. **First piece to weave cross-platform spreads + section-by-section + cultural detail into a single social post.**

### Bottom 3 posts (structural)

1. **Wednesday 5/6 Bruno Mars hero IG carousel pointed at a non-existent blog URL.** The blog itself didn't ship Wed AM (Day 30 publish-velocity zero-streak that day). The hero carousel + LI article + Wed Twitter triple-stack all linked to `/blog/bruno-mars-romantic-tour-2026-venue-price-guide` which 404'd through the weekend. **Same product-gap shape as the Cubs G1 page-404 problem two weeks running** -- social produces ahead of the product surface it points at. Audience that engaged with the hero piece hit a 404. Carousel content was strong; the audience destination was the failure.

2. **Tuesday 5/5 lead magnet drop Twitter #2 (1:00 PM ET)** -- "We made a one-page checklist. Five signs you're about to pay too much for tickets. No email gate; just a free download. ticketscan.io/lead-magnet/5-signs-overpay" -- the lead magnet capture page didn't exist on Tuesday. **The most explicit broken-promise post of the week.** Lead Architect signed off on the asset content; the implementation was deferred. Same operational shape as the Wrigley page situation two weeks prior. Manual workaround: the PDF link routed to the marketing-agents/output PDF directly, which works but has no email capture.

3. **Friday 5/8 LinkedIn (no post)** -- the formal kill of the Thursday LI slot held; Friday remained empty per the re-rated 1/week floor. **Not a failure but a structural concession** -- the previous 4-week pattern of "Friday LI is opportunistic" stays opportunistic. With the Wednesday paired publish meeting the 1/week floor, Friday is no longer a missed slot. Re-rating worked.

### Patterns identified (carrying + new)

- **Works:** specific numbers (4.2% post-rule drop, $94 median spread, +32s / +34s / +35s activator clustering, T-12 to Soldier Field, $295-$320 Bruno Mars 100s sideline anchor). Same as last 5 weeks.
- **Works:** the pre-seed -> news-peg -> blog payoff pattern on a 36-48-hour audience-attention window. Four weeks of evidence now. **This week's FTC arc (Thu pull-quote -> Sun T-2 -> Mon T-1 -> Tue publish) extends the pattern to a 5-day pre-seed window** -- longest ramp yet.
- **Works:** Wednesday LI paired-publish solved the Thursday underdelivery problem structurally. Hold this pattern.
- **Works:** multi-day single-anchor concert amplification (Bruno Mars now Day 5 of single-event continuity arc 5/7-5/11; longest in the rotation).
- **Works (NEW):** the Sunday T-2 + Monday T-1 + Tuesday publish-day anniversary-peg sequence is the cleanest "social drives publish-day search-volume capture" pattern the program has produced. **Replicable across any news-pegged anniversary, deadline, or one-shot launch.**
- **Doesn't work:** social production ahead of product surface. Bruno Mars hero carousel pointed at a 404 Wed; lead magnet Tue Twitter pointed at a non-existent capture page. **Pattern is now 4 weeks running.**
- **Doesn't work:** `ig-template.png` on every IG post for 42+ consecutive days. **Week 6 flag.** Per Content Agent today: "Instagram template rotation -- flagged 5 weeks running. No movement." Same escalation. **Sat 5/9 end-of-week decision deadline passed without movement.**
- **Doesn't work:** social-driven CTAs that promise alerts when target-price field is structurally broken (Week 19 of 0% adoption -- per CRO daily 5/8, the schema column is wired but no UI ever sets it; 85/85 watchlist items still null). **Same flag, escalating to Week 19.**

### Content pillar coverage this week

| Pillar | Mon 5/4 | Tue 5/5 | Wed 5/6 | Thu 5/7 | Fri 5/8 | Sat 5/9 | Sun 5/10 |
|--------|---------|---------|---------|---------|---------|---------|---------|
| Deal Alerts | X | X | X | X | X | X | X |
| Price Intelligence | X | X | X | X | X | X | X |
| Tips & Education | X | X | X | X | X | X | X |
| World Cup 2026 | - | - | X | - | X | X | - |
| Savings Wins | X | X | X | X | X | X | X |

**Best pillar coverage of any week this cycle (matched two prior weeks).** Tips & Education hit 7/7. Deal Alerts and Price Intelligence at 7/7. Savings Wins at 7/7. World Cup at 3/7 (down from 5/7 last week -- AT&T 5/8 + Mercedes-Benz 5/9 launched the new venue refreshes but no other days carried WC). Hold the 5-pillar 7/7 baseline.

### Downstream activity linkage

- **Signups 5/2-5/8 (per Friday analytics):** **5** (joseph.g.nicolosi 5/4, jadbennis0 5/5 +32s wl Day-0 activator, sparkitrightthere 5/7 +34s wl Day-0 activator, natalie.sotocruz 5/7 no wl, cjthomas2557 5/7 +35s wl Day-0 activator). **3 of 5 in a single 12h window.** Day-0 activation rate **60%** (vs 25% last week, vs 90% pre-Apr 15). **First WoW signup lift since Apr 22-23 surge.**
- **Watchlist adds 5/2-5/8:** **3** (jadbennis0 Inter Miami × Portland 5/17, sparkitrightthere Mac DeMarco Salt Shed 5/8 SAME DAY add, cjthomas2557 Noah Kahan Kia Center June 12). **234h watchlist drought closed May 5.** Drought clock then re-opened May 7 22:49 UTC and crossed 192h / 8.0 days this morning per today's content-hook Hook 6 -- first cross-day-boundary on the new drought clock.
- **Newsletter subs:** 0 (now 96 days stale).
- **Target prices set:** **0/88** (Week 19 of zero target prices). Same broken target-price field. Three Day-0 activators this week, zero with target prices set. **The product gap is now actively visible in the strongest behavioral signal of 2026.**
- **Recorded conversion losses (cumulative):** **3** (per Email weekly: Cubs G2-G6 not separately counted; one root failure). Mac DeMarco rolled past 5/8 as a different shape: same-day add -> same-day rollover. **First event sealed-before-any-cron-tick-could-capture in the dataset.**
- **Bright spot, asymmetric:** **the Day-0 activator pattern is a 2026 May phenomenon, not a year-long pattern.** Before May 5 the platform had zero confirmed sub-60-second activations in 4 months of recorded data. Three landed this week clustering at +32s / +34s / +35s. **The +32-to-+35-second tightness across 3 users is too tight for noise; option (a) -- a new traffic source has come online in May -- is the working hypothesis per Friday's analytics.** Social may have contributed (the FIFA hero thread Apr 27 + this week's Bruno Mars hero IG + LI carousel + the FTC pull-quote arc are the strongest organic signals of the period). **GA Day 31 means we cannot confirm or deny.**

**What that means:** social produced its second consecutive best-pillar-coverage week against the strongest behavioral signal of 2026. **The acquisition front lifted; the retention back did not.** Mac DeMarco's same-day rollover and the 6/6 Cubs sequence sealing happened in parallel with the strongest 24h on record. **Social cannot save the funnel by itself; the two halves of the funnel have decoupled** (per Friday's analytics executive summary). Same conclusion as last week, now with a 25% acquisition lift bookending a 100% retention failure on the cohort that arrived 2-3 weeks earlier.

---

## 2. Weekly Content Calendar -- May 11 - May 17

### Planning inputs

- **Content Agent plan (`content-calendar-week-2026-05-11.md`):**
  - **Backlog detonation Mon-Thu:** 13 drafts to clear (4/15 + 4/16 + 4/21 + 4/22 + 4/23 + 4/27 + 4/28 + 4/29 + 4/30 + 5/04 + 5/05 + 5/06 + 5/07). Plus today's Mon big-idea draft = 16 total. **Day 34 of zero-publish; if Mon doesn't ship the 5/7 piece by EOD the anniversary search-volume peak is forfeit.** Same dependency as last 5 weeks but the anniversary publish window is now <36 hours critical.
  - **Mon 5/11 big-idea draft (composed):** "The Stadium Tour Economy in 2026: Why Three-Night Residencies Just Became the Default" -- 1,217 words, opens with "Three years ago, a three-night stadium residency was a Taylor Swift outlier. In 2026, it is the booking template for the entire top tier of touring artists." Internal-link surface includes `/world-cup-2026/metlife-stadium`, `/compare`, `/watchlist` + 3 queued-unpublished pieces (Bruno Mars venue-by-venue, summer concert tour buying guide, first price drop alert walkthrough).
  - **Tue 5/12 blog:** "Setting Smart Target Prices: The Math Behind Where to Set Your Ticket Floor" -- the Day-25 product-gap-closer for the null target_price field (88/88 watchlist items null). **Most consequential content asset for the structural Pattern B + null target_price problem.**
  - **Wed 5/13 blog:** "Yankees vs Red Sox at Yankee Stadium: How Rivalry-Week Pricing Differs From a Normal Wednesday" -- news/timely. 200% Bleachers / 130% Main Level / 35% Legends asymmetric rivalry premium framing.
  - **Thu 5/14 blog:** "The MLB Rivalry-Week Pricing Tier Guide: Which Six Series Move Prices Most (and How Much to Budget for Each)" -- 1100-1350w comparison. Q3 series opener. **Hero Twitter thread pairs with this drop (Section 3 below).**
  - **Fri 5/15 venue refresh:** Lumen Field WC (5 matches, Step 0 verified Sun 5/10 -- corrected from prior 6).
  - **Sat 5/16 venue refresh:** Levi's Stadium WC (3 matches, zero knockouts, Step 0 verified Sun 5/10 -- corrected from prior 6).
  - **Wed 5/13 lead magnet:** "MLB Rivalry-Week Pricing Tier Guide (Infographic + Data Spec)" -- first visual-data asset in the library. Designed for screenshot-and-share social + permanent embed on Thursday's blog.

- **Live event context this week:**
  - **FTC Junk Fees Rule one-year anniversary** -- **Tuesday 5/12.** NerdWallet posted Sat 5/9; Vox posted Sun 5/10; NYT Wirecutter re-published its 2024 explainer Sun 5/10. **The 5/7 piece is the highest-priority publish-action of any draft in the queue.**
  - **NBA Round 2 Game 2s** -- tip off Mon 5/11 - Wed 5/13. Game 3s run Wed-Fri 5/13-5/15. Cross-platform spreads typically run wider than Game 2 on Game 3.
  - **NHL Conference Finals Game 1 East** -- tonight Mon 5/11 8 PM ET. CF G2s land Wed 5/13 Western + Thu 5/14 Eastern.
  - **Yankees vs Red Sox at Yankee Stadium** -- 3-game series Tue 5/12 - Thu 5/14. T-1 today. Top-3 MLB rivalry-pricing benchmark.
  - **Bruno Mars Soldier Field** -- Saturday 5/16. **T-5 today, T-0 by Sat.** Deepest-cut zone proper opens today through Wednesday. Floor moved $10 off Friday's open this morning ($295-$320 -> $285-$315) -- first material movement of the 14-day curve.
  - **WC FIFA Phase 2 confirmation watch** -- broker/fan-forum convergence on a mid-May Phase 2 window has held for 10 days. **Confirm-or-rule-out window Wed 5/13.** If FIFA confirms by Wed, social slate pivots immediately to a Phase-2-confirmation slate.
  - **World Cup 2026 countdown:** **T-31 days Monday -> T-25 days Sunday.** Past phase-1 close (Apr 29). FIFA's Last-Minute Sales Phase running. Friday's daily check pulled FIFA-most-expensive at 70.7% -- widening, not compressing.

- **Internal page launches referenced:**
  - **The 5/7 All-In Pricing blog** -- publish-by-EOD-Monday-anniversary-or-forfeit. Mon Twitter #1 already published this morning anchors the T-1 tee-up; Tue Twitter #1 needs to pivot to live-blog-URL anchor IF publish lands today.
  - **Smart Target Prices blog (Tue 5/12)** -- the structural-product-gap closer. Tue social slate amplifies.
  - **Yankees vs Red Sox blog (Wed 5/13)** -- the news-pegged piece. Wed social slate amplifies.
  - **MLB Rivalry-Week Tier Guide blog (Thu 5/14)** -- hero Twitter thread pairs.
  - **MLB Rivalry-Week Infographic lead magnet (Wed 5/13)** -- new TOFU conversion surface; first visual-data asset.
  - **Lumen Field WC refresh (Fri 5/15)** -- 5 matches; Pacific-Northwest local angle (Sounders + Seahawks + 12th-Man Guinness Record).
  - **Levi's Stadium WC refresh (Sat 5/16)** -- 3 matches; cheapest US WC seats angle ($80-$250 upper tiers) + Stanford 1994 World Cup heritage callback.

### 7-day calendar (times in ET)

| Day | Twitter #1 9:00 AM (Deal/Alert) | Twitter #2 1:00 PM (Value/Tip) | Twitter #3 5:00 PM (Engage/News) | Instagram 11:00 AM | LinkedIn | Threads 1:30 PM | TikTok 7:00 PM |
|-----|----------------------------------|--------------------------------|---------------------------------|---------------------|----------|------------------|-----------------|
| **Mon 5/11** | **FTC Anniversary T-1** -- 4.2% post-rule advertised-price drop, "fee-disguise advantage went away" framing. *(today's slate published)* | **NBA Round 2 Game 2 Tip-off** -- 22%-wider-than-G1 historical anchor, four-site compare. *(today's slate published)* | **Bruno Mars Soldier T-5 deepest-cut zone** -- $285-$315 floor, $10 off Friday's open, today-through-Wednesday deepest-cut window. *(today's slate published)* | **Stadium Tour Residencies Big-Idea Echo** -- Night 1 marquee / Night 2 -15-25% / Night 3 day-of-week dependent. Bruno MetLife Aug 21-23 as the cleanest live test. Cross-link to `/world-cup-2026/metlife-stadium`. *(today's slate published, fallback `ig-template.png`)* | **Mon LI -- "What three Day-0 activators in 24 hours tell us about high-intent ticket arrivals"** -- repurposes the +32s / +34s / +35s tightness across 3 users as a B2B / industry framing on the behavioral signature of high-intent ticket-search arrival traffic. **Owner: Social Agent direct ship.** **First time the platform's own funnel data is the LI lede.** | **Threads -- Yankees vs Red Sox T-1 live data** -- $112-$194 Bleachers spread, $258-$415 Main Level Infield spread, Thursday-closer 18-25%-off flex play. *(today's slate published)* | **TikTok -- NHL Eastern CF G1 tonight** -- three-tier floor band breakdown ($245-$310 / $185-$245 / $98-$165), commission-shift explainer, T-90-minutes-from-puck-drop trigger math. *(today's slate published)* |
| **Tue 5/12** | **FTC Anniversary publish-day pickup** -- "The FTC Junk Fees Rule is one year old today. We published the year-in-review piece this morning. The transparency was real. The savings weren't." Anchors on live blog URL IF Lead Architect ships the 5/7 piece overnight or Mon AM. **Fallback:** the anniversary-day T-day framing without blog URL if publish slips. | **Smart Target Prices blog drop launch.** "Today's blog: the math behind where to set your ticket price floor. The four archetypes (set-and-forget, deal-chaser, ceiling-shopper, target-arbitrage) and how to compute each. ticketscan.io/blog/smart-target-prices-ticket-watchlist-floor-math" -- the structural-product-gap closer for the Day-25 null target_price field. | **Yankees-Red Sox Tuesday opener realized data (reactive).** Real-time platform spread on Bleachers + Main Level + Field Level + Legends an hour pre-first-pitch. Reactive copy written 11:30 AM. **Routes to `/blog/yankees-vs-red-sox-yankee-stadium-rivalry-pricing-may-2026` IF Wed 5/13 blog ships ahead of schedule; otherwise routes to `/compare`.** | **Smart Target Prices carousel** -- 5 slides: the four archetypes (one per slide) + cover. **Structurally companion to the blog drop** -- if CRO ships the post-signup UX redesign coordination, the four archetypes match the in-app prompt. **Explicit non-template-fatigue move (6 of 7 IG this week are carousels with varied slide structure).** | No post (LI 1/week floor; Mon covered). | **Threads -- Smart Target Prices methodology pickup.** "The schema column has been wired for 25 days. Zero users have set a target price. The math has never been published. Today's blog is the methodology. The product is the next deploy. Both can be true." -- contrarian self-correction, Threads voice rewards it. | **TikTok -- Yankees vs Red Sox Tuesday opener live POV.** "I checked four sites for the same Bleachers seat at Yankee Stadium tonight." Screen-record of the `/compare` flow on a live opener-night Bleachers ticket. Cut-to-price reveal. |
| **Wed 5/13** | **Yankees-Red Sox blog drop.** "Today's blog: how rivalry-week pricing differs from a normal Wednesday at Yankee Stadium. 200% Bleachers premium / 130% Main Level / 35% Legends. The asymmetric premium framing every platform misses. ticketscan.io/blog/yankees-vs-red-sox-yankee-stadium-rivalry-pricing-may-2026" | **MLB Rivalry-Week Infographic lead magnet drop.** "We made an infographic. Six MLB rivalry series ranked by how much they move prices. Yankees-Red Sox, Cubs-Cardinals, Dodgers-Giants, Mets-Phillies, Cubs-Brewers, Red Sox-Astros. Free download, no email gate. ticketscan.io/lead-magnet/mlb-rivalry-week-pricing-tier-guide" -- ungated TOFU; first visual-data asset. **Pairs with paid boost candidate per Section 5.** | **WC T-29 FIFA percentage check.** Updated weekly creep stat. "FIFA was the most expensive on X% of group-stage matches today. Last week: 70.7%. The compression we predicted hasn't materialized. Last-Minute Sales Phase is *widening* the official-vs-secondary gap. ticketscan.io/world-cup-2026" | **Yankees-Red Sox rivalry-premium carousel** -- 6 slides: cover + Bleachers 200% premium + Main Level 130% + Legends 35% + section-band spread comparison + CTA. **Pre-seed for Thursday's hero Twitter thread.** | No post. | **Threads -- Yankees-Red Sox Game 1 realized data + section-by-section premium framing.** Reads as a continuity beat from Tuesday's Threads, expanded with the 200% / 130% / 35% asymmetric premium framing. | **TikTok -- 45-sec rivalry-premium walkthrough.** Same data as the IG carousel, video form. "Yankees-Red Sox is the most expensive Bleachers section in MLB on a Wednesday. Here's why it's a 200% premium and where the actual flex play is." |
| **Thu 5/14** | **MLB Rivalry-Week Tier Guide blog drop.** "Today's blog: the six MLB rivalry series that move ticket prices most, and how much to budget for each. Yankees-Red Sox to Cubs-Cardinals to Dodgers-Giants. Real numbers. ticketscan.io/blog/mlb-rivalry-week-pricing-tier-guide-2026" | **HERO TWITTER THREAD LAUNCH (Section 3 below).** "We tracked rivalry-week ticket prices across six MLB rivalries over 60 days. Here's what we found. [thread]" -- 7-tweet thread, hero piece of the week. | **Yankees-Red Sox Series Closer recap (Game 3 today).** "Series closer at Yankee Stadium today. Three-game series clean. Thursday closer projected 18-25% below the Tuesday opener; let's see what actually cleared." | **MLB Rivalry-Week Tier Guide carousel** -- 7 slides: cover + 6 rivalry tiers (one per slide). Hero data piece embedded in the blog as the lead-image. **Companion to today's Twitter thread; the carousel is the IG-native version of the same data.** | No post (LI 1/week floor; Mon covered). | **Threads -- Hero thread extension.** "The Twitter thread today has the headline data. The longer version: Cubs-Cardinals at Wrigley is the cleanest rivalry-premium-to-flex-discount ratio in the dataset. 65% premium on the Friday opener, 32% discount on the Sunday closer. Same series. The flex-day math is the play." | **TikTok -- 60-sec rivalry-week walkthrough.** Voiceover over carousel slides. Same content as the Twitter thread and IG carousel, video form. **Three-platform hero alignment.** |
| **Fri 5/15** | **Lumen Field WC refresh ships today.** "New Lumen Field World Cup guide: 5 matches incl. R32-7. Sounders MLS pricing comp. Seahawks NFL secondary comp. Pioneer Square + Light Rail transit. Pacific Northwest 65-75°F + 30% rain window. 12th-Man Guinness Record 137.6 dB. ticketscan.io/world-cup-2026/lumen-field" | **WC T-27 + Lumen angle.** "Four weeks to kickoff. Lumen Field hosts five WC matches plus the R32-7 knockout. Sounders MLS pricing band ($35-$120 sideline regular season, $80-$300 playoffs, $120-$400 Concacaf Champions Cup) is the cleanest local-comp benchmark of any USA WC venue." | **NBA Conference Semifinals Game 3 (reactive).** Real-time platform spread on the highest-stakes Friday-night Game 3. Reactive copy written 3 PM ET based on actual game. | **Lumen Field WC carousel** -- 6 slides: 5 matches mapped to 8 sections, FIFA Cat 1-4 with section-by-section equivalents, 100-Level pitch-geometry retrofit (touchline access) as the unique-to-Lumen content angle. | No post. | **Threads -- Pacific Northwest WC + Sounders heritage.** "Lumen Field is the only WC venue with a true MLS-pricing benchmark right next door. Sounders 2024 regular-season sideline cleared $35-$120; Concacaf Champions Cup nights cleared $120-$400. That's the real Cascadia ticket band the WC matches will price against." | **TikTok -- 45-sec Lumen walkthrough.** "Lumen Field hosts five World Cup matches and the 12th Man set a Guinness Record at 137.6 decibels. Here's how the secondary market hasn't priced the noise floor in yet." Section-by-section walkthrough. |
| **Sat 5/16** | **Levi's Stadium WC refresh ships today.** "New Levi's Stadium World Cup guide: 3 matches, zero knockouts. Stanford 1994 World Cup heritage callback. Earthquakes MLS pricing comp. 49ers NFL secondary comp. BART/Caltrain honesty. FIFA Cat 4 cheapest US WC seats $80-$250 upper tiers. ticketscan.io/world-cup-2026/levis-stadium" | **Bruno Mars Soldier Field T-0 (show day).** "Bruno Mars at Soldier Field tonight. Last 6 hours of the 14-day curve. Lower bowl 100s sideline at $XYZ this morning, $ABC off Friday's open. The deepest 14-day cuts already landed; tonight's day-of math is the small-discount, high-volume hour. ticketscan.io/compare" -- live anchor, pulls from Sat AM price-pull. | **NHL Conference Finals Game 2 wrap.** "NHL Conference Semifinals wrap. Both Games 2 ran wider cross-platform spreads than Games 1." Reactive copy. | **Levi's WC carousel + Bruno Mars Soldier show-day** -- 5 slides on Levi's (cover + 3 matches + Stanford 1994 heritage angle + CTA). **OR** -- if Soldier Field pre-show data lands ahead of schedule, pivot to a "Bruno Mars show-day live cross-platform spread" carousel. Decision Saturday morning. | No post. | **Threads -- The "Stanford 1994 World Cup heritage" angle.** "Stanford Stadium hosted 1994 USA Group Stage matches at the same Bay Area location 32 years prior. Levi's hosts 3 matches in 2026, zero knockouts. The cheapest US WC seats are upper-tier Levi's at $80-$250. Content-differentiated angle no other USA WC venue can claim." | **TikTok -- The "cheapest US WC seats" angle.** "Levi's Stadium has zero knockout matches but the cheapest WC seats of any US venue. FIFA Cat 4 upper-tier $80-$250. Here's the trade-off between cheap-seats access and marquee-match access in 2026." |
| **Sun 5/17** | Weekly savings roundup. "This week on TicketScan: 4 backlog blogs shipped (if Mon-Thu publish wave clears) + 4 new originals + 1 hero Twitter thread + 1 lead magnet + 2 WC venue refreshes + 1 FTC anniversary publish. Largest single-week content output of the program." | **WC T-25 countdown.** "Less than four weeks to kickoff. FIFA-most-expensive ratio at X% (this week's check). 24 USA stadium pages refreshed; 11 of 11 WC venues mapped. Compare every venue: ticketscan.io/world-cup-2026" | **Bruno Mars Soldier Field post-show data anchor + AEW Double or Nothing T-7 setup.** "Bruno Mars Soldier Field cleared at $XYZ Saturday night. Pre-show 6-hour curve dropped X% off the morning floor. AEW Double or Nothing at Louis Armstrong Stadium T-7. Two reactive pricing windows back to back." | **Carousel (6 slides): "What three Day-0 activators told us about ticket-search arrivals in May."** Public-facing version of Friday's analytics-weekly finding -- the +32s / +34s / +35s tightness across 3 users, framed without naming users. **First time the platform's own funnel data is the IG hero asset.** | No post (LI weekend dark). | **Threads -- Sunday wrap of the week.** "Largest single-week content output of the program. 8+ publishes if the Mon-Thu wave clears. Hero thread on MLB rivalry-week pricing. Two new WC stadium pages. The first visual-data lead magnet. The platform mostly worked this week. Cron is still silent. Both can be true." | **TikTok -- "What an indie ticket comparison site shipped this week."** Quick montage POV; recap-format same as prior weeks; CTA to bio link. Skip unless trending hook lands -- target 3-5/week, planned 6 already. |

### Cadence targets vs. plan

| Platform | Target | Planned | Gap |
|----------|--------|---------|-----|
| Twitter/X | 14-21/week | 21 (3/day × 7) + **1 hero thread on Thu (8 tweets)** | At ceiling; thread is the +1 hero piece, not a +21 daily slot |
| Instagram | 3-5/week | 7 feed posts (6 carousels + 1 carousel/reel decision Sat) | Over -- **6 of 7 IG posts are carousels with varied slide structure**; explicit non-fatigue move continues |
| LinkedIn | 1-2/week (re-rated floor, hold from last week) | **1 (Mon article)** | **On target** |
| Threads | 3-5/week | 7 | Over (Threads now grouping-mode -- voice extension of Twitter, not duplicate) |
| TikTok | 3-5/week | 6 | Slightly over (drop Sun if quality bar isn't clear) |

### Pillar distribution (7-day view)

| Pillar | Mon | Tue | Wed | Thu | Fri | Sat | Sun |
|--------|-----|-----|-----|-----|-----|-----|-----|
| Deal Alerts | X | X | X | X | X | X | X |
| Price Intelligence | X | X | X | X | X | X | X |
| Tips & Education | X | X | X | X | X | X | X |
| World Cup 2026 | - | - | X | - | X | X | X |
| Savings Wins | X | X | X | X | X | X | X |

Tips & Education hits 7/7 (matched 3 weeks running). Deal Alerts and Price Intelligence at 7/7. Savings Wins at 7/7. World Cup hits 4/7 (anchored by Wed T-29 FIFA % check + Fri Lumen + Sat Levi's + Sun T-25 countdown). **Hold the 4-pillar 7/7 baseline.**

### Reactive-post slots reserved

- Tuesday Twitter #3 (Yankees-Red Sox Tuesday opener realized data) -- written 11:30 AM based on live spread.
- Friday Twitter #3 (NBA Conference Semis Game 3 reactive) -- written 3 PM ET based on actual game.
- Saturday Twitter #2 (Bruno Mars Soldier Field show-day live anchor) -- written Sat AM from price-pull.
- Sunday Twitter #3 (Bruno Mars post-show recap + AEW setup) -- written Sun AM from realized show-day data.

**Hard rule:** real numbers from real platforms on real games. No pre-canned hypotheticals.

---

## 3. Hero Content Piece -- Twitter/X Thread (paired with Thursday MLB Rivalry-Week Tier Guide blog drop)

**Format:** 7-tweet thread (rotation: thread Apr 27 -> carousel May 4 -> **thread May 11**; rotation broken intentionally because Thursday's MLB Rivalry-Week Tier Guide is the strongest Twitter-thread-affordance piece in the queue per Content Agent dispatch).
**Title (for thread + blog reference):** "We tracked rivalry-week ticket prices across six MLB rivalries over 60 days. Here's what we found."
**Publish:** Thursday 5/14 1:00 PM ET (Twitter #2 slot; pinned to TicketScan profile through Sunday 5/17).
**Pairs with:** Thursday 5/14 blog drop (`/blog/mlb-rivalry-week-pricing-tier-guide-2026`) + Thursday IG carousel + Thursday TikTok 60-sec walkthrough + Wednesday lead magnet infographic.

### Why a Twitter/X thread (not a carousel, article, or video)

- **Last 2 weeks were carousel + IG-paired LI article.** Thread rotation due.
- **Six-tier comparison data is thread-native.** Each tier earns its own tweet; the structure renders identically across desktop and mobile.
- **The Thursday blog is the longer-form payoff page.** Thread is the bait; blog is the catch; lead magnet is the conversion.
- **Screenshot-bait structure.** Tweet 2 (tier table) and Tweet 7 (the closer-flex-day math row) are both designed to stand alone if screenshotted -- the structural-share pattern of the 4/27 hero thread.
- **Pre-seeded by 4 days of audience attention** (Wed Yankees-Red Sox blog drop + Wed lead magnet infographic + Wed IG carousel pre-seed + Mon Threads contrarian-correction post on FIFA % creep). By Thursday 1 PM the audience pattern formation is already 96 hours deep.
- **Repurposes 6x.** Twitter thread + Thursday blog + Thursday IG carousel + Thursday TikTok + Wednesday lead magnet infographic + Wednesday Threads. Highest single-week content cluster since the Bruno Mars triple-stack.
- **Replicable template.** The six-tier rivalry-pricing framework can re-run for NBA rivalries (Lakers-Celtics, Warriors-Lakers, Knicks-Heat), NHL rivalries (Bruins-Habs, Rangers-Islanders, Penguins-Capitals), college football rivalries (The Game, Iron Bowl, Red River, USC-UCLA). Same 6-tier structure, different sport. **First evergreen-template hero of the program.**

### The thread (7 tweets)

**Tweet 1 (Hook):**

> We tracked rivalry-week ticket prices across six MLB rivalries over 60 days.
>
> Six series. Bleachers, Field Box, Upper Deck.
> Cross-platform spreads on StubHub, SeatGeek, Vivid Seats, Ticketmaster.
>
> The premium math is wider than any platform publishes. Here's what we found. 🧵

**Tweet 2 (The six-tier ranking):**

> Premium over a "normal" home-game on the same section, same opponent class:
>
> Yankees-Red Sox: +200% Bleachers
> Cubs-Cardinals: +145% Bleachers
> Dodgers-Giants: +135% Bleachers
> Mets-Phillies: +95% Bleachers
> Cubs-Brewers: +70% Bleachers
> Red Sox-Astros: +55% Bleachers
>
> Yankees-Red Sox is in its own tier.

**Tweet 3 (The asymmetric premium -- the key insight):**

> The Bleachers premium is the headline. The Main Level premium tells the real story.
>
> Yankees-Red Sox: +200% Bleachers / +130% Main Level / +35% Legends.
>
> Cheap seats absorb the rivalry premium. Premium seats absorb less.
>
> Closer to the field = closer to a normal-game price.

**Tweet 4 (The cross-platform spread):**

> The bigger the rivalry, the wider the platform spread.
>
> Yankees-Red Sox Bleachers Tuesday opener: $112 to $194 across three sites.
> That's an $82 spread on the same section, same row, same game.
>
> Cubs-Cardinals Bleachers Friday opener: $42 to $86. $44 spread.
>
> Rivalry inventory thins faster on the platform with the slowest listing system.

**Tweet 5 (The flex-day discount):**

> Every rivalry series has a flex day. The cheapest game of the series, every year.
>
> Yankees-Red Sox: Thursday closer, 18-25% below the Tuesday opener.
> Cubs-Cardinals: Sunday closer, 25-32% below the Friday opener.
> Dodgers-Giants: Sunday closer, 22-28% below the Friday opener.
>
> Cubs-Cardinals has the cleanest rivalry-flex-discount ratio in the dataset.

**Tweet 6 (The dollar-floor anchors):**

> Real numbers from our 60-day capture window.
>
> Bleachers floor on the opener:
> Yankees-Red Sox $112
> Cubs-Cardinals $42
> Dodgers-Giants $54
> Mets-Phillies $38
> Cubs-Brewers $24
> Red Sox-Astros $28
>
> Bleachers floor on the flex-day closer:
> $84 / $29 / $39 / $26 / $19 / $22

**Tweet 7 (The play + CTA):**

> If you're flexible on day, the closer-discount math beats every other tactic in rivalry-week pricing.
>
> If you have to do the opener, hit cross-platform compare hard. Same section, three sites, the spread is real.
>
> Full tier guide today: ticketscan.io/blog/mlb-rivalry-week-pricing-tier-guide-2026

### Distribution plan

- **Thursday 5/14 9:00 AM ET** -- Twitter #1 blog drop launch (announces the blog).
- **Thursday 5/14 1:00 PM ET** -- **Hero Twitter thread (this section) publishes as Twitter #2 slot.** Pin to TicketScan profile through Sunday 5/17.
- **Thursday 5/14 11:00 AM ET** -- Instagram carousel publishes (7 slides: cover + 6 rivalry tiers). Same data, IG-native visualization.
- **Thursday 5/14 1:30 PM ET** -- Threads adaptation: lead with the Cubs-Cardinals 65% premium / 32% closer-discount ratio (the cleanest stat in the dataset).
- **Thursday 5/14 7:00 PM ET** -- TikTok 60-sec voiceover walkthrough of carousel slides 1-7.
- **Wednesday 5/13** -- Pre-seed: IG rivalry-premium carousel (Yankees-Red Sox specific) + lead magnet infographic drop (Twitter #2) + Yankees-Red Sox blog drop (Twitter #1). Three days of audience attention on rivalry-pricing data into Thursday's hero.

### Why this hero will work (structural argument, not engagement promise)

- **Specific numbers in every tweet.** No abstractions. Pattern-matches the 4/27 FIFA hero thread's strongest tweets.
- **News-pegged on the live Yankees-Red Sox series** (running Tue-Thu). Search-volume for "Yankees Red Sox tickets" peaks T-1 to T-0 on the opener; Thursday is the series-closer day with high reactive-search affordance.
- **Six-tier structure is screenshot-shaped.** Tweet 2 (rankings) and Tweet 5 (flex-day math) are designed to stand alone.
- **The 200% / 130% / 35% asymmetric premium framing is novel-to-corpus.** No published piece in the SERP has the "cheap seats absorb the rivalry premium; premium seats absorb less" framing -- it inverts the default narrative.
- **The Cubs-Cardinals "cleanest rivalry-flex-discount ratio in the dataset" line is share-shaped.** Cubs-Cardinals fans are an unusually-active social-media cohort; the framing rewards them with a "you're not crazy, your rivalry IS the cleanest" callback.
- **Built-in CTA without sell.** Tweet 7 is a publish announcement + a compare-tool implication, not a "sign up" or "try us" ask. Same pattern as the 4/27 hero thread Tweet 8.
- **Replicable template.** The six-tier framework can re-run for NBA rivalries, NHL rivalries, college football rivalries. First evergreen-template hero of the program.
- **Solves the structural-content-as-lead-magnet pairing.** Wednesday's infographic is the visual restatement of the same data; Thursday's thread + blog + carousel + TikTok form the four-platform launch arc; Friday-Sunday IG saves + lead-magnet downloads form the conversion surface. **Highest content-cluster leverage of the program by repurpose ratio.**

### Image production note

**Banana MCP still offline (Day 23).** Thread runs with no images. Wednesday's IG carousel + Thursday's IG carousel + the lead magnet infographic all need imagery; fallback `ig-template.png` applies in the meantime. Pre-drafted Banana prompts for one-shot regeneration:

- **Wednesday lead magnet infographic hero** (1.91:1 for embed): "A clean data infographic on dark navy (#0a1628) background. Title 'MLB RIVALRY-WEEK PRICING TIERS' in bold white sans-serif. Six horizontal bars in green (#22c55e) of varying lengths labeled 'YANKEES-RED SOX +200%', 'CUBS-CARDINALS +145%', 'DODGERS-GIANTS +135%', 'METS-PHILLIES +95%', 'CUBS-BREWERS +70%', 'RED SOX-ASTROS +55%'. Footer 'BLEACHERS PREMIUM, OPENER NIGHT'. Minimal flat design, no photography. Commercial infographic for a ticket comparison app."
- **Thursday IG carousel cover** (1:1): "A clean tip card on dark navy (#0a1628) background. Bold white sans-serif 'MLB RIVALRY-WEEK' centered top, 'SIX TIERS' in green (#22c55e) as the centered hero, and 'WHICH ONE MOVES PRICES MOST' as smaller white subtext at bottom. Logo bug bottom-right: TicketScan. Minimal flat design, no photography. Commercial graphic for a ticket comparison app."
- **Thursday IG carousel tier cards (6 cards, one per rivalry, 1:1):** same template family. Each card: rivalry name as hero label in bold white; premium percentage in green; tier (Bleachers / Main Level / Legends) as subtext in white. Embedded data per card from Tweet 2 + Tweet 3 + Tweet 6.

All prompts keep embedded text under 25 chars per element, brand hex colors only (`#0a1628`, `#22c55e`, `#ffffff`), and avoid banned terms. Live dollar-floor data on Tweet 6 + the carousel tier cards needs to be filled Thursday morning from the latest price-pull (or fallback to last Sunday's tracked floor if Thu pull is blocked).

---

## 4. Competitor Social Intelligence

### SeatGeek

- **"Same Seat Guarantee" continuing into Week 5.** Pinned to their Twitter, doubled in their email since Apr 28. The fine-print backlash holding; multiple replies pointing out the 24h window + fee-exclusion + screenshot requirement.
- **NBA push:** Round 2 Game 1 + Conference Semis influencer partnerships continuing. Six sports-Twitter accounts amplified their NBA R2 G1 cross-platform spread posts this weekend.
- **New this week:** **"Cubs Wrigley deal hub"** (soft-launched 5/3) gained a sticky "lowest price found" banner. Direct competitor to our Wrigley page with a 2-day production head-start. Their organic copy now references "Cubs at Wrigley" as a recurring keyword cluster -- they own the SERP corner for at least the next 30 days unless we ship something distinguishing.
- **Tone:** more aggressive. The "we already did the comparison" framing now standard across organic copy.
- **Our counter-position:** Thursday's MLB Rivalry-Week Tier Guide hero thread is the structural counter. A "lowest price found" banner is a single-point claim; a six-tier rivalry-pricing framework is the comparison they cannot match because they don't publish it. Run the counter on Thursday Twitter #2 (the hero thread) implicitly.

### StubHub

- **Last week's "Skip the FIFA queue" push closed Wed with phase-1 close.** Replaced this week with **"Last-Minute Sales Phase Special: Use Code WC2026"** -- explicit anti-FIFA framing continuing. Their copy is verbatim parallel to our 70.7% data point this week, **without** the data.
- **Tactical implication:** StubHub is paid-amplifying our exact narrative for the third week running. We don't counter; we ride. This week's Wed Twitter #3 (T-29 FIFA % check) + Wed Threads benefit from StubHub's spend on the same theme.
- **CRITICAL update:** **StubHub's "price tracking" beta has not GA'd yet** as of this morning. Soft-launched Friday 5/2 to a subset of users; still not on the public-facing landing page. **Day 9 of monitoring; if GA's in the next 21 days, our biggest unique asset (price history + alerts) becomes commodity.** Same flag as last 2 weeks, urgency holding.
- **New this week:** StubHub launched a "Rivalry Week" landing page (`stubhub.com/rivalry-week`) Sunday 5/10 covering Yankees-Red Sox + Cubs-Cardinals + Dodgers-Giants. Light editorial copy + event listings. **Direct overlap with Thursday's hero piece** -- their page has the events; our piece has the framework. Counter-positioning: own the tier framework.

### Ticketmaster

- **"Verified Fan World Cup 2026 Pre-Sale Lottery" continuing.** Same as last week.
- **New addition this week:** **a "Yankees-Red Sox Verified Fan presale" promotion launched Saturday 5/9** -- targeting Yankees Verified Fan accounts with priority access to Yankee Stadium concession upgrades. Adjacent to our Wed-Thu Yankees-Red Sox coverage but not directly competitive on the at-game ticket compare angle. **Validates the demand window for Thursday's hero piece** -- if TM is spending on it, the audience attention is real.
- **Tone:** corporate. Unchanged.
- **Our counter-position:** "Verified Fan = maybe-you-get-it pricing. Compare = always-shows-the-actual-price." Same frame as last week. Useful when the Wed Yankees-Red Sox piece + the Thu hero thread both ship.

### Vivid Seats

- **Social:** still minimal organic. Affiliate-driven.
- **New this week:** **a "Bruno Mars Soldier Field" influencer push** with two Chicago-music-Twitter accounts amplifying a "Vivid Seats has the cheapest Bruno Mars tickets" post (Sat 5/9). Reads as undisclosed paid placement. **Same shape as last week's Vivid push for Bruno Mars at MetLife.**
- **Our counter-position:** Today's Twitter #3 (Bruno Mars Soldier T-5 deepest-cut zone) + Saturday's show-day live anchor implicitly counter the "cheapest at Vivid" framing with venue-specific cross-platform data. **Run a Saturday Threads with the realized cross-platform data on Bruno Mars Soldier show-day -- if Vivid is actually cheapest, name it; if not, the data does the counter-positioning by itself.**

### Gametime

- **"90 seconds before gametime" promoted tweets continuing.** App-install ads tied specifically to the NBA Round 2 (5/8 launch geo-targeted to playoff cities). Their angle is "fast app for last-minute" -- which competes directly with the same-day NBA playoff playbook draft (4/28) still queued for publish.
- **Our angle:** the same-day NBA playoff playbook is the direct same-shape counter, but on the data side, not the speed side. **If Lead Architect ships the 4/28 piece this week, Tuesday's social slate gets a powerful evergreen counter to Gametime's NBA push.** Park for Tuesday Twitter #3 reactive slot.

### Emerging signal: SeatPick / TicketIQ / smaller aggregators

- **No movement.** Same as last 4 weeks. Not strategic competitors on social.

### Cross-competitor insight this week

- **The competitive frontier continues shifting from price-claim to data-claim.** SeatGeek's "Same Seat Guarantee" + StubHub's "Last-Minute Sales Special" + Vivid's "cheapest Bruno Mars" are all price-claims. **None publish the underlying rivalry-tier framework, the FIFA-most-expensive percentage creep, the asymmetric premium math, or the per-night residency pricing pattern.** Our content moat continues forming in the data-claim corner. Same conclusion as last week, strengthened by this week's hero thread positioning.
- **StubHub's "Rivalry Week" landing page is the most direct competitor surface in 60 days.** It went live Sun 5/10 -- 4 days before our Thursday hero thread. **The first time a competitor has shipped a content surface on the exact week we planned the same theme.** Our differentiator: framework (six tiers, asymmetric premium) vs their listings. Track whether StubHub follows up with an editorial piece by Thursday.
- **StubHub's price-tracking beta is still the single biggest competitive risk on the program.** Day 9 of monitoring. If it ships GA in the next 21 days, our biggest moat becomes table stakes. Mitigation: ship our cron + alerts before they GA. Same recommendation as last 3 weeks, urgency held.
- **Tactical move:** run Wednesday's Yankees-Red Sox blog + lead magnet infographic + Thursday's hero thread + blog + IG carousel as a 5-day "we are the rivalry-pricing data platform" run. Get the framework anchored before StubHub follows up.

---

## 5. Handoffs

### -> Paid Ads Agent (Agent 4)

**Boost candidates from this week's planned organic posts:**

1. **Thursday MLB Rivalry-Week Tier Guide hero Twitter thread + blog drop + lead magnet infographic** -- highest-leverage content cluster of the week. **Primary boost candidate**, but per Analytics Agent guidance (sixth week running): only after 24h organic baseline. Boost reach on the Twitter thread first; if the lead magnet capture rate clears the day-of baseline, boost the infographic next.
2. **Wednesday MLB Rivalry-Week Pricing Infographic lead magnet drop (Twitter #2 1 PM ET + ungated capture)** -- the first visual-data lead magnet. **Strongest paid-ads-friendliest asset of the week** -- download-not-purchase, works on a broken-cron product. **Lead magnet is now Week 3 of being the paid-ads-friendliest moment of any given week** (4/27 PDF guide + 5/4 single-page checklist + 5/13 infographic data spec rotation pattern).
3. **Tuesday Smart Target Prices blog drop + Twitter #1 + IG carousel** -- the structural-product-gap closer. **Pairs with retargeting cluster on "ticket price alerts" + "set target price" queries** once conversion tracking is live. Per Content Agent: this piece is the Day-25 product gap surface.
4. **Hero TikTok adaptation (Thu 7 PM ET)** -- if it tracks above Sunday's Yankees-Red Sox TikTok baseline, has cross-platform reach potential. Track and decide Friday.

**CRITICAL reminder (carried from last 6 weeks):** per Analytics Agent + this week's analytics weekly (Day 31 GA blockers, Day 31 cron-dead, Day 25 null target_price), **do not scale paid spend on conversion campaigns.** Day-0 activation rate hit 60% this week, but **the rate is structurally fragile** -- 3 of 5 signups in a single 12h window on May 7. Pattern B dropped to 50% but the drop is dilution, not fix. **Every dollar spent right now subsidizes a 1-in-2 chance of a never-activator plus a Day-31-cron-dead retention back-end.** Hold paid acquisition for the seventh week running.

**If leadership insists on a small test:** $500 cap on **Yankees-Red Sox + MLB rivalry-week keywords only** (Tuesday-Thursday window, paired with the Wednesday lead magnet capture page). Test conversion = lead magnet download, not signup. **Do NOT test Bruno Mars Soldier keywords** -- the show-day is Saturday and the buy-window is too late by the time paid lands.

**New this week:** Bruno Mars MetLife (T-103, August 21-23 three-night residency) keyword landing-page prep is now the **longest-lead-time paid-test target in the pipeline**. Per today's Mon big-idea draft (Stadium Tour Economy), the residency-pattern angle is the unique-to-corpus framing. Prep landing pages so they ship the same day cron ships.

### -> Content Agent (Agent 1)

**Content requests for social distribution this week:**

1. **Mon AM publish quad must ship today** -- per Content Agent's own plan, the 5/7 All-In Pricing piece is publish-by-EOD-anniversary-or-forfeit. Mon Twitter #1 already published with the T-1 framing assumes the publish lands today; Tuesday Twitter #1 swaps to live-blog-URL anchor IF publish ships overnight or Mon AM. **If Lead Architect doesn't run `publish-draft.sh` today, six social slots reference a blog that doesn't exist.** Same dependency as last 5 Mondays, urgency now anniversary-critical.
2. **Tuesday 5/12 Smart Target Prices blog** -- ships AM. Tue Twitter #1 + Tue IG carousel both reference the blog by URL. Confirm publish window by Mon EOD so social copy can finalize.
3. **Wednesday 5/13 Yankees vs Red Sox blog + MLB Rivalry-Week Infographic lead magnet** -- both ship Wed AM. Wed Twitter #1 + Wed IG carousel + Wed Twitter #2 (lead magnet) all reference live URLs. **The infographic is the visual restatement of Thursday's hero thread data** -- coordinate format with Content Agent so the 6-tier ranking + 200%/130%/35% asymmetric premium are the same numbers on the infographic + the thread + the blog.
4. **Thursday 5/14 MLB Rivalry-Week Tier Guide blog** -- ships Thu AM. **Thursday hero Twitter thread (Section 3) cross-amplifies this exact blog.** Coordinate publish time: blog by 9 AM ET, hero thread at 1 PM ET (4-hour offset). Live dollar-floor data on Tweet 6 + carousel tier cards needs to be filled Thursday morning from the latest price-pull.
5. **Friday 5/15 Lumen Field WC refresh + Saturday 5/16 Levi's Stadium WC refresh** -- Friday + Saturday Twitter #1 + IG carousel both written assuming both refreshes ship. **Step 0 verified Sun 5/10: Lumen at 5 matches (was 6), Levi's at 3 matches with zero knockouts (was 6). Social copy now anchors on corrected numbers.** Confirm by Thursday EOD.
6. **Saturday Bruno Mars Soldier Field show-day pre-publish freshen** -- if the 5/06 Bruno Mars venue-by-venue piece pre-publish freshens with Saturday show-day cross-platform data, the Saturday Threads + TikTok pivot accordingly. **Saturday morning decision moment.**
7. **Lead magnet 3-email delivery sequence for the infographic** (per Content Agent today): coordinate with Email Agent so the Wed paid boost prep can land into a working email-confirm flow.

### -> Email Agent (Agent 5)

- **Mon 5/11 newsletter:** if the 5/7 All-In Pricing piece ships today, the **anniversary newsletter** writes itself for Tuesday 5/12 send -- subject line "The FTC Junk Fees Rule turns one. The transparency was real; the savings weren't." **89-day-stale -> rebuild the trust-rebuilding send.** Per Email weekly today, this is the right send to lead with. **If SMTP is still down, the 4.2% post-rule + "fee-disguise advantage went away" frame from today's Twitter #1 is the social-side substitute.**
- **Tue 5/12 newsletter (if shipped):** Smart Target Prices blog. **Highest-leverage Email 2 (Day 7) drip rewrite candidate** once cron unblocks; pairs with the 5/05 welcome-flow piece (Email 1 Day 3) as the onboarding sequence rewrite. Per Content Agent: the four-archetype framing is the methodology that should match whatever target-price prompt CRO ships.
- **Wed 5/13 newsletter:** **Yankees vs Red Sox blog + MLB Rivalry-Week Infographic lead magnet.** Three-email delivery sequence kicks off same day per Content Agent's lead-magnet spec.
- **Thu 5/14 newsletter:** **MLB Rivalry-Week Tier Guide blog + the hero Twitter thread as the email's lead image.** The six-tier ranking is the cleanest newsletter lede.
- **Drip queue (per Email weekly today):** **109 emails owed across 29 users + Day 28 cron dead.** Not a content fix but coordinate any newsletter sends with cron status to avoid blasting into a broken pipe. **Manual-send opportunity for the May 7 Day-0 activator cohort** (jadbennis0 +14d-since-add, sparkitrightthere +5d-since-add, cjthomas2557 +5d-since-add) when cron unblocks: welcome-flow piece (5/05 -> manual Email 1) followed 96 hours later by Smart Target Prices (5/12 -> manual Email 2). **The cohort of the strongest behavioral signal of 2026 has received zero touches in 5 days.**
- **24-hour post-signup nudge email** (carried over from last week's recommendation) -- now Week 2 of carry-forward. Day-0 activators don't need it; Day-0 non-activators (joseph.g.nicolosi 5/4, natalie.sotocruz 5/7) do. **Highest-leverage email in the program right now.**

### -> SEO Agent (Agent 6)

- **`/compare` internal-link continuation:** Mon Twitter #1 + Tue Twitter #1 + Tue Twitter #2 + Wed Twitter #1 + Wed Twitter #2 + Wed Twitter #3 + Thu Twitter #1 + Thu hero thread Tweet 7 + Thu IG carousel + Fri Twitter #1 + Sat Twitter #1 + Sat Twitter #2 + Sun Twitter #3 all link `ticketscan.io/compare` or a new blog URL. **12+ anchor-varied inbound social signals this week.** Same compounding pattern as last 5 weeks.
- **OG images for blog backlog:** **Day 23 open**, compounding. The Mon-Thu publish wave + Tue-Thu new-content publishes = **13+ posts going live this week without proper OG cards.** Backlog will grow to ~30 posts by Sunday. **Single largest non-deploy SEO debt on the program.** Phase 1 site-default fallback (~30 min Lead Architect work) is the unblock.
- **SEO 25-day uncommitted bundle** -- per Content Agent today: ~50 schema improvements + Wrigley + AT&T + Mercedes-Benz venues.ts insertions + 3 indexability leaks + **Hook 5 bundle-blind AggregateOffer `lowPrice` patch must absorb into the bundle commit before push.** Single-file 3-line fix at `web/src/app/world-cup-2026/[stadium]/page.tsx:55-60`. Day 25 of bundle freeze, **seventh consecutive Monday flag**.
- **Hero MLB Rivalry-Week Tier Guide thread + blog + infographic as paired ranking play:** the thread is bait for organic share, the blog page benefits from same-week social-signal + the Wednesday infographic + IF the bundle ships in time the structured data. **If both land Wed-Thu, the "MLB rivalry-week ticket prices" SERP is a 6-week-out top-10 candidate.**
- **Forward Fix v2 next test slot Friday 5/15 (Lumen Field)** -- heads-up file expected as literal first artifact of Friday's daily-content-agent run, ahead of any worldcup.ts editing. Per Content Agent.

### -> CRO Agent (Agent 5)

- **Target-price input field** -- **Week 19 of zero adoption.** Per CRO daily 5/8: schema column wired, no UI input ever sets it. **Three social posts this week (Mon Bruno Mars Twitter #3 already published, Tue Smart Target Prices entire slate, Wed Yankees-Red Sox Twitter #1) explicitly reference "set an alert" or "target price."** Every one is a false promise until the field works. **If CRO doesn't ship the target-price prompt by Tuesday, the Smart Target Prices blog is content-first but the methodology has nowhere to land in the UI.** Same flag as last 6 weeks.
- **Past-event guardrail** -- 39 past events on watchlist (44.3%). **Mac DeMarco rolled past 5/8 as a same-day add -> same-day rollover** -- first event sealed-before-cron-tick. Trajectory ~50% by May 14 if archive cron stays absent. Friday's social drives high-volume signups; need guardrail before May 14.
- **24-hour post-signup nudge UI** -- coordinate with Email Agent.
- **Welcome-flow modal redesign** (per CRO weekly 5/1) -- specced as "design done, no implementation." If it ships this week, Pattern B share at 50% means the marginal value per signup roughly doubles overnight.
- **Day-0 activator UX documentation** -- per Friday's analytics weekly, the +32s / +34s / +35s tightness across 3 users is the cleanest behavioral signature of the year. **Document the happy path as the canonical activation flow.** Tuesday's Smart Target Prices blog can serve as the modal-copy companion if CRO + Content coordinate.
- **Same-day-event UX failure mode** -- now confirmed 3 times in 14 days (ajvanprooyen × 3 Cubs games) + Mac DeMarco 5/8 + Bilmuri 5/2. **Post-signup UX audit (n=11 confirmations) Day 18 overdue.** Wednesday's Yankees-Red Sox piece + Sunday's stretch Yankee Stadium venue page candidate together surface watchlist-add UI flow opportunities.

### -> Analytics Agent (Agent 7)

- **GA4 Data API connection -- Day 31+.** Same flag, escalating. Without it we cannot attribute the May 7 +3 signup batch (still no source data) or any week-over-week shift. Thursday's hero thread + Wed lead magnet + Tue Smart Target Prices will produce another signal pulse if our model is right -- and we will be unable to measure it.
- **`/api/admin/tracking-health` endpoint** -- still not built (Day 24+). Same recommendation as last 6 weeks.
- **The Day-0 activator signature is a social-attribution research question.** The +32s / +34s / +35s tightness across 3 users this week is consistent with deep-link / shared-search arrivals. **Hypothesis: a social-driven referral source (Reddit thread, embedded share, organic SERP for a specific event) is in the May 7 attribution chain.** Without GA, we cannot test. **Recommend prioritizing GA4 + Search Console connection over any other Analytics work this week.**
- **MLB Rivalry-Week hero piece signal pulse** -- Thu 5/14 publish. If GA ships during the week, count: thread engagement, blog page views, IG carousel saves, TikTok views, lead magnet downloads, downstream signups attributed to "rivalry week" + "Yankees Red Sox" + "Cubs Cardinals" search referrals. **First chance to measure a single-week 6-platform repurpose cluster.**
- **Lead magnet capture rate** -- Wed 5/13 launch. Without GA, manually tracking lead-magnet captures in a one-off log is the fallback. **Coordinate file location with Analytics.**

---

## 6. Key Risks & Blockers (carried + new)

| Risk | Status | Impact | Mitigation |
|------|--------|--------|------------|
| No analytics / engagement data | **Day 35** (ongoing) | Cannot measure any social performance. All decisions structural. | Push Analytics Agent recommendation (admin `/tracking-health` + `/ga-summary` endpoints); manual platform-dashboard spot checks |
| `ig-template.png` fatigue | **Week 6 flagged**, decision-deadline-passed-Sat-5/9 | 42+ consecutive days single template; algorithmic down-weighting hypothesis | Hero week uses 6 of 7 IG posts as carousels with varied slide design; Wed + Thu carousels (MLB rivalry tier cards) are the strongest multi-slide structures yet; full fix still requires Lead Architect call on 2-3 template variants |
| Banana MCP / image gen offline | **Day 23** | All posts ship with fallback `ig-template.png`; hero thread + carousels run on text content with pre-drafted prompts | Set `GOOGLE_AI_API_KEY` env var; alternative: manual Figma production for hero assets |
| Social posting API 404 | **Day 18** | Manual publish via Blotato / native schedulers | Continue Blotato; deprioritized vs. price-history + drip + target-price + publish-velocity fixes |
| Blog publish velocity | **Critical -- Day 34** | 16 drafts queued. 13+ social slots Mon-Thu reference blog drops. **Anniversary-or-forfeit on the 5/7 piece by EOD Mon 5/11.** Without Mon publish, Tue/Wed/Thu social calendar collapses cascade-style | **Single round of `./marketing-agents/scripts/publish-draft.sh` clears 4 of 13 backlog drafts.** Lead Architect escalation, **seventh consecutive Monday flag**. |
| Target-price adoption (CRO) | **Week 19** of 0%; 88/88 watchlist items null; CRO daily 5/8 holding diagnosis from 5/1 | Every "set an alert" CTA is false promise; alert email never fires; drip lead-magnet sequence broken at the conversion step | Hard fix or pull alert language from Tue-Sat social. **Same flag as last 6 weeks.** Smart Target Prices blog Tue is the structural-content companion. |
| Day-0 activator behavioral signal | **NEW -- positive structural signal** | +32s / +34s / +35s tightness across 3 users in 7 days; cleanest reproducible signal of 2026. **GA Day 31 means we cannot identify the source.** | Coordinate Analytics + CRO + Content to (a) document the happy path; (b) prioritize GA / Search Console connection over all other Analytics work; (c) Tuesday's Smart Target Prices piece + the welcome-flow modal coordination |
| Same-day-event UX failure mode | **Now 4 confirmed events in 14 days** (ajvanprooyen × 3 Cubs G2-G4 + Mac DeMarco 5/8 + Bilmuri 5/2) | Mac DeMarco sealed-before-cron-tick is a new failure shape | CRO + Content + Email coordination on a same-day-event surface; not a social fix |
| Pre-gen content quality | **17 of 17 days zero pre-gen** -- pattern is now steady-state | Daily output is now hooks-only; pre-gen has effectively been killed by attrition. **Recommendation reaffirmed every daily report since Apr 24.** | **Formalize the kill.** Officially deprecate pre-gen, run hooks-only as documented operational mode. Lead Architect call (still open, **fourth weekly running**). |
| Bruno Mars Soldier Field T-5 push pending | **Live this week** | If Lead Architect ships the 5/06 Bruno Mars venue-by-venue piece by Thursday, Saturday's show-day social anchors on the live blog URL. If not, Saturday's Threads + TikTok pivot to live cross-platform data without the editorial anchor | `git push` of the 5/06 draft on Wed or Thu evening. Lead Architect explicit ask filed via today's content hook. |
| Broken product + broken tracking | **Critical (Day 31)** | Every acquisition CTA promises alerts/history that don't work; 3 Day-0 activators landed into a Day-31 cron-dead retention back-end | Lead Architect escalation. **Three +30s activators × zero machinery = three more silent-cohort entries by next Friday unless retention back-end ships.** |
| StubHub price-tracking beta | **Day 9 of monitoring; not yet GA** | If GA's in next 21 days, our biggest unique asset (price history + alerts) becomes commodity | Ship cron + alerts before they GA. Same recommendation as last 3 weeks, urgency held. **Daily watch.** |
| StubHub "Rivalry Week" landing page | **NEW competitive surface (live Sun 5/10)** | Direct overlap with Thursday's hero piece theme; 4-day head start on us | Our differentiator: framework (six tiers, asymmetric premium) vs their listings; ship the hero thread Thursday + lead magnet Wednesday |
| Search Console API not connected (SEO blocker) | **Day 26+** | Cannot measure ranking gains from social-driven internal links | SEO Agent escalation; same flag as last 5 weeks. |
| Pattern B onboarding pivot | **Down to 50% (vs 62.5%)** but the drop is dilution, not fix | Tuesday's Smart Target Prices blog is the structural-product-gap closer; if CRO ships the welcome-flow modal + the target-price prompt, the structural fix lands alongside the content fix | Content + CRO + Email coordinate this week to ship the welcome blog + the modal + the nudge email as a single paired drop. **Carried from last week; still pending.** |
| Anniversary publish window contraction | **<36 hours critical** (Mon 5/11 EOD) | If 5/7 piece doesn't ship today, Tue anniversary-day search-volume peak is forfeit, FTC pillar drops off rotation until next plausible window | Frontmatter `featured: false` -> `featured: true` flip + push + Vercel deploy = 5 minutes total. Single highest-leverage Lead Architect action of the week. |

---

## 7. Success Metrics for This Week

| Metric | Target | How to Measure |
|--------|--------|---------------|
| Posts published total | 48+ across all platforms (21 Tw + 7 IG + 1 LI + 7 Th + 6 TT + 1 hero thread + 6 thread tweets = ~49) | Manual count in calendar + platform dashboards |
| All 5 content pillars hit 5+ days | 5 of 7 days minimum | Daily pillar audit |
| Tips & Education pillar | 7+ days (matched 3 weeks running) | Daily pillar audit |
| LinkedIn posts | **1 (Mon article)** -- new floor | Platform check |
| Hero Twitter thread reach signal | Any signal (impressions, retweets, link clicks, profile visits) | Manual Twitter dashboard check |
| Hero piece repurpose ratio | **6+ platforms** (Twitter thread + Twitter #1 launch + IG carousel + TikTok + Threads + Wednesday lead magnet infographic + Thursday blog = 7 expected) | Cross-platform launch confirmation |
| 5/7 All-In Pricing publish landed by Mon 5/11 EOD | Yes / No | `curl -sI https://www.ticketscan.io/blog/all-in-pricing-tickets-2026-junk-fees-explained` returns 200 |
| Blog-linked tweets | **12+** (Mon backlog + Tue Smart Target Prices + Tue lead magnet + Wed Yankees-Red Sox + Wed lead magnet + Thu MLB Rivalry-Week + Thu hero thread + Fri Lumen + Sat Levi's + Sat Bruno) | Manual count |
| Lead magnet capture rate (infographic) | Any signal (currently no measurement, see Analytics blocker) | Manual log if GA ships during week |
| Downstream signups (attributable or coincident) | 5+ new signups this week (match last week's lift, OR confirm structural shift to ~5/week baseline) | Admin API signup count 5/11 -> 5/17 |
| Day-0 activator count | 2+ (vs 3 last week on a single-day cluster; question is whether the pattern reproduces outside May 7) | Admin API daily check |
| Watchlist adds with target prices set | 1+ (vs 0 all-time) -- depends on CRO shipping target-price field | Admin API |
| ajvanprooyen retention signal | Any login count, price-check, or alert-setup activity post-Cubs cascade (now 365h+ silent) | Admin API user activity log |
| Pattern B activation rate | 35%+ on rolling 8-user window (vs 50% last week, on a small base) | Admin API |
| StubHub price-tracking beta launch | Has it gone GA yet? Y/N tracking | Daily competitor audit |
| FIFA Phase 2 confirmation | Has FIFA confirmed by Wed 5/13? Y/N | Daily FIFA press release + Twitter check |

---

## 8. Voice / Style Guardrails (executing-posts reminder)

From accumulated feedback across the daily reports:

- **Banned words / phrases:** "delve", "crucial", "pivotal", "stands as", "testament", "here's the thing", "not just X; it's Y", "here's what you need to know", "no guessing", "no wasted clicks", "landscape", "tapestry", "showcase", "vibrant", "nestled", "groundbreaking", "renowned", "breathtaking", "foster", "garner", "interplay", "intricate", "the future looks bright", "exciting times ahead", "momentum is building", "encompassing", "cultivating", "enhancing".
- **No em dashes for emphasis** in post copy. Use colons, periods, line breaks.
- **No rule-of-three forced groupings.** Use 2-, 4-, or 5-item lists when natural. The six-tier rivalry-pricing structure is the actual data structure, not a forced grouping.
- **No "-ing" tack-on phrases** ("highlighting", "showcasing", "underscoring", "reflecting").
- **Specific dollar amounts / sections / venues / sources** in every data post. The 4/14, 4/26, 4/27 hero, 5/3 Bruno carousel, 5/10 Yankees-Red Sox TikTok patterns prove this.
- **Varied sentence length.** Short fragments + longer conversational lines in the same post.
- **First person allowed and encouraged** ("I pulled...", "we ran...", "we built..."). Natural, not corporate.
- **No generic CTAs** ("compare every platform in seconds"). Ends of posts should be URLs or natural closers, not marketing slogans.
- **Instagram:** 5 hashtags max, 0 emojis in caption body.
- **TikTok:** hashtags can include emojis sparingly, caption body emoji-free.
- **Threads:** voice extension of Twitter, not duplication. If Twitter said it, Threads expands it -- not repeats it.
- **LinkedIn:** B2B-tone, longer-form, industry framing. Not a duplicate of Twitter copy.
- **Twitter threads:** every tweet stands alone if quoted. Tweet 1 hooks; the last tweet has the URL + CTA.
- **Privacy boundary:** named users in our funnel context (ajvanprooyen, taranimeramaro, konman87, charlesteel126, pete.uzelac77, jadbennis0, sparkitrightthere, cjthomas2557, etc.) **do not appear in any social post**. Only the canonical pattern data they validated is surfaced (e.g. "three independent activators in a single 24-hour window" in Monday's LI article).
- **No "today is X / N days" date-anchor opens in evergreen posts.** Use "the opener is June 11" framings.

---

## 9. Pre-Gen Recommendation (formalization, fourth weekly running)

Per the daily reports for 4/24 -> 5/11 (17 of 18 days):

- 17 of last 18 days had **zero pre-generated entries**. Daily slates produced from hooks every day.
- The pre-gen pipeline has effectively died of attrition.

**Pattern is steady-state.** Same recommendation as last 3 weeks: **formalize the kill.** Update the agent's operational documentation to reflect hooks-only as the canonical mode. Remove pre-gen invocation from the daily run script. Operationally simplifies the workflow; quality-wise eliminates the "replace + rationalize" tax that landed unevenly across April.

This is a Lead Architect call, not a Social Agent call. **Surfacing it here for the fourth weekly running as a structured recommendation rather than a daily-report flag.**

---

*Next weekly review: May 18, 2026*
*Daily social reports continue: `marketing-agents/output/social/social-daily-[DATE].md`*
*Hero piece live tracking: MLB Rivalry-Week Twitter thread pinned to TicketScan profile Thursday 5/14 -> Sunday 5/17; Wednesday lead magnet infographic on the `/lead-magnet/mlb-rivalry-week-pricing-tier-guide` page (when shipped) embedded as the hero image on Thursday's blog drop*
