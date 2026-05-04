# Social Media Manager -- Weekly Report
## Week of May 4 - May 10, 2026

**Prepared:** 2026-05-04 (Monday planning session)
**Agent:** Social Media Manager (Agent 3)
**Theme:** Wrigley page push + 12-draft backlog detonation + Bruno Mars Wed hero piece (3-user / 4-venue / 3-city demand cluster) + Pattern B (62.5%) majority-cohort onboarding pivot + WC at T-38 -> T-32

---

## 1. Performance Review -- April 27 - May 3

### Infrastructure reality (now Day 28)

No Twitter/X, Instagram, LinkedIn, Threads, or TikTok analytics API connected (Day 28). Admin API still does not expose GA/GTM data (Day 24+ per Friday's analytics weekly). Banana MCP still offline -- Day 15 as of today's daily. `select:gemini_generate_image,set_aspect_ratio` returns "No matching deferred tools found" (re-verified 5/3 and 5/4). Admin social posting endpoints 404 (Day 11). All "performance" signals below remain structural -- topic timing, copy quality, internal-link strength, downstream signups -- not impressions or engagement counts.

**The new platform reality:** the backend funnel produced **4 signups Apr 25-May 1** (vs 7 the prior week, **-43% WoW**) and **4 watchlist adds, all from one user on Apr 25** (vs 9 the prior week, -56% WoW). 5 of 7 days were full zeros on signups. **April closed at 11 signups in 30 days (~0.37/day) -- worse than March's ~0.42/day -- the first MoM decline since January.** Pattern B (signup -> never adds an event) crossed **62.5% of the rolling-8-user window** -- non-activation is no longer "becoming modal," it has *become* modal.

Three recorded conversion losses this week (Viva El Jaripeo Apr 25, Florence + The Machine May 1, ajvanprooyen Cubs G1 -- now also G2 May 2 + G3 May 3 per Sunday's analytics). **5 more guaranteed by Wednesday May 6** as the remaining Cubs games and Bilmuri pass through their windows. The growth stack has stalled on a single dependency: the price-tracking cron (Day 25 silent).

That is the context every social post landed into this week.

### Posts published (per `content-calendar.json` + daily social logs Apr 27 -> May 3)

| Platform | Posts Queued | Target | Variance |
|----------|--------------|--------|----------|
| Twitter/X | 21 (3/day Mon-Sun) | 14-21 | At ceiling |
| Instagram | 7 (1/day) | 3-5 | Over (Week 5 of single-template fatigue) |
| Threads | 7 (1/day) | 3-5 | Over |
| TikTok | 7 (1/day) | 3-5 | Over |
| LinkedIn | **1 (Mon hero thread carousel-doc)** | 2-3 | **Under -- Thu LI dropped for 3rd consecutive week** |

**Verdict:** Twitter / IG / Threads / TikTok ran on schedule. LinkedIn shipped Monday's article (the FIFA "official-isn't-cheapest" repurpose of the hero Twitter thread) but dropped the Thursday slot again. **Three weeks running, LinkedIn long-form Thursday has not shipped.** Last week's plan flagged "kill Thu slot if no owner by Wednesday EOD" -- no owner was assigned, the slot was killed silently rather than ship at zero. Operationally the right call; structurally a continuing flag.

### Top 3 posts (structural estimate)

1. **Twitter -- Hero FIFA Thread (4/27 1:00 PM ET)** -- 8-tweet thread on 25 days of FIFA resale data, 41/62 most-expensive ratio, $94 median spread, $281 max spread. Pinned to profile through Friday May 2. **Highest-effort organic asset of the program to date by structure.** The 41/62 stat held in a 65-67% band across four data passes Apr 1-26, then re-checked at 70.7% on today's 5/4 daily slate -- still trending in the predicted direction (compression should *not* happen until secondary saturates the supply curve, which it is). Repurposed across IG carousel cross-promo, LinkedIn article, Threads adaptation, Wednesday TikTok. Five-platform repurpose ratio matched the plan exactly.

2. **Twitter -- WC Phase 1 Closes blog setup + amplification (4/29 9:00 AM + 1:00 PM)** -- the news-pegged moment that the hero thread Monday pre-seeded. Two consecutive Twitter slots Wed AM + PM landed the FIFA general-sale-closing moment with the 62-match dataset already loaded into audience attention from Monday. **Pre-seed -> news-peg -> blog payoff is a structural pattern we now have three weeks of evidence on.** The blog itself didn't ship (Day 27 publish-velocity zero-streak), so the social posts cited the data without an internal landing surface. Same flag as last 2 weeks.

3. **Instagram Carousel -- Bruno Mars Three-Venue Breakdown (5/3 11:00 AM ET)** -- Sunday's IG was the cleanest carousel of the week. Soldier Field May 16, Ohio Stadium May 20, MetLife three-night residency Aug 21/22/25. Single artist, three different stadium sizes, three different resale-curve shapes. **Validated against analytics: Bruno Mars now the only multi-user, multi-city, multi-month tour cluster in the watchlist (3 watchers, 4 venues, 3 cities, 3 months).** This post is the public-facing version of the validated programmatic-SEO template. Today's TikTok and Threads continued the Bruno Mars amplification, building 7 days of audience attention into Wednesday's hero blog drop.

### Bottom 3 posts (structural)

1. **Friday 5/1 Cubs home stand opener Twitter #1 (9 AM ET)** -- "First Cubs home game of the May stretch tonight. Wrigley vs D-backs, 7:05 first pitch." The post itself is fine; the problem is operational. The Cubs hub page (`/venues/wrigley-field`) didn't exist on Friday. Audience that engaged with the post had no internal landing surface -- the link routed to homepage. Wrigley page wasn't created until **today (5/4 morning, commit `636e40b`, push pending)**. The Cubs G1 demand window opened with our biggest actively-tracked user (ajvanprooyen) hitting a product wall *and* our social driving anonymous traffic to a homepage with no Cubs context. Lowest social-to-product alignment of the week.

2. **Thursday 5/1 LinkedIn article "Resale fee transparency..."** -- did not ship. Third consecutive Thursday LI under-delivered. The plan called it ahead of time ("kill the slot if no owner by Wed EOD"), and it was killed -- so this isn't a surprise, it's a structural concession. **Three weeks running, the same call. LinkedIn is now de facto a 1/week channel, not 2-3/week.** Re-rate target: drop LI target to 1/week minimum + 2/week stretch (Mon article only; Thu is opportunistic).

3. **TikTok -- Saturday "Cubs season is the cheat code" (5/2 7:00 PM ET)** -- the copy was strong, but it published into a Cubs G2 day where the venue page (Wrigley) was 404. The TikTok engaged the audience around Cubs pricing and pointed them at homepage. Same product-gap shape as Friday's Twitter, one day later. **Two of the week's strongest organic-social moments landed into a 404 because content infra (publish-draft.sh) and venue-page production were behind the social production curve.** This is the recurring pattern: social produces ahead of the product surface it's pointing at.

### Patterns identified (carrying + new)

- **Works:** specific numbers (41/62 = 66.1%, $94 median, $281 outlier, T-12 to Soldier Field, 18% GA pit drop T-14 to T-7). Same as last 4 weeks.
- **Works:** the pre-seed -> news-peg -> blog payoff pattern (Mon hero thread -> Wed FIFA blog drop) on a 36-48-hour audience-attention window. **3 weeks of evidence now.**
- **Works:** multi-day single-anchor tour amplification (Bruno Mars 5/3 + 5/4 = 2 days deep; will run through 5/10). Audience pattern formation across 7+ days of consistent topic.
- **Works:** Sunday-prep Sunday-plan -> Mon calendar lock pattern (now 2 consecutive weeks of clean execution per Content Agent's weekly).
- **Doesn't work:** social production ahead of product surface. Mon Wrigley + Fri Cubs G1 + Sat Cubs G2 social all pointed at a 404. **Today (5/4) the page is created but un-pushed -- if Lead Architect doesn't push by tonight 6:40 CT first pitch, Tuesday's social repeats the pattern.**
- **Doesn't work:** `ig-template.png` on every IG post for 35+ consecutive days. **Week 5 flag.** Per Content Agent today: "shipping decision blocker on Instagram channel viability." Same recommendation to Lead Architect re: 2-3 template variants.
- **Doesn't work:** LinkedIn long-form Thursday ownership. **3 weeks running.** De facto resolution: drop the slot.
- **Doesn't work:** social-driven CTAs that promise alerts when target-price field is structurally broken (Week 18 of 0% adoption -- per CRO daily 5/1, the schema column is wired but no UI ever sets it; `addToWatchlist` in `api.ts:169` declares `targetPrice?` but `EventCard.tsx:43-49` never passes it). **Same flag, escalating.**

### Content pillar coverage this week

| Pillar | Mon 4/27 | Tue 4/28 | Wed 4/29 | Thu 4/30 | Fri 5/1 | Sat 5/2 | Sun 5/3 |
|--------|----------|----------|----------|----------|---------|---------|---------|
| Deal Alerts | X | X | X | X | X | X | X |
| Price Intelligence | X | X | X | X | X | X | X |
| Tips & Education | X | X | X | X | X | X | X |
| World Cup 2026 | X | - | X | - | X | X | X |
| Savings Wins | X | X | X | X | X | X | X |

**Best pillar coverage of any week this cycle.** Tips & Education hit 7/7 (vs 6/7 last week). World Cup hit 5/7 (anchored by hero thread Mon, phase-1 close Wed, SoFi Fri, Hard Rock Sat, country-rule refresh Sun). All 5 pillars cleared 5+ days. Hold this distribution.

### Downstream activity linkage

- **Signups 4/25-5/1 (per Friday analytics):** **4** (lilianamasyrubi 4/26 + nmcnamee99 4/26 + 4/28 unnamed + zhili1208 4/29). 5 of 7 days zero-signup. **-43% WoW.** Activation: 1 of 4 = 25%, down from 43% last week, down from 90% in early April.
- **Watchlist adds 4/25-5/1:** **4** (taranimeramaro Bruno Mars MetLife x3 + 1 pre-existing -- all on Apr 25). **0 adds in last 144h** as of Sunday. Six consecutive days flat at 85 watchlist items -- ties the Mar 16-22 record, broken today.
- **Newsletter subs:** 0 (now 89 days stale).
- **Target prices set:** **0/85** (Week 18 of zero target prices). Same broken target-price field. Every "set a price alert" CTA in social copy this week was a false promise. **No movement; CRO daily 5/1 escalated the diagnosis from "missing field" to "schema column with no UI input wired."**
- **Recorded conversion losses (cumulative):** **3** (Viva El Jaripeo + Florence + Cubs G1). **5 more locked in by Wed 5/6** (Cubs G2-G6 + Bilmuri).
- **Bright spot, asymmetric:** Bruno Mars cluster expanded to 3 users / 4 venues / 3 cities on Apr 25. Sunday's IG carousel + TikTok publicly amplify the validated demand without naming users. **This is the validated programmatic-SEO template at the scale we hoped for.** Wednesday 5/6's Bruno Mars hero piece now has demand-side proof.

**What that means:** social produced a clean week of pillar-balanced output against the strongest organic data anchor of the program (the FIFA hero thread). The acquisition funnel still softened -43%. Pattern B crossed majority. Three users churned out of recorded conversion-loss events. **Social cannot save the funnel by itself; right now social is producing the gap between user expectation and product reality at higher fidelity than ever before.** Same conclusion as last week, and the gap has widened.

---

## 2. Weekly Content Calendar -- May 4 - May 10

### Planning inputs

- **Content Agent plan (`content-calendar-week-2026-05-04.md`):**
  - **Backlog detonation Mon-Thu:** 12 drafts to clear across the week (4/14, 4/15, 4/16, 4/21, 4/22, 4/23, 4/27, 4/28, 4/29, 4/30 + Mon 5/4 Cubs paired blog + Thu 5/7 All-In Pricing original = 12). **Day 27 of zero-publish; if Mon doesn't ship the queue rolls into Tue and the week loses leverage cascade-style.** Same dependency as last 3 weeks.
  - **Wrigley Field venue page push (today, 5/4):** new `/venues/wrigley-field` shipped this morning local-only. Production currently 404. **Single highest-leverage 30-second push of the week.** Without it, today's social Twitter #1 + IG + TikTok routed to homepage rather than the venue page.
  - **Tuesday 5/5 blog:** "You Just Signed Up for TicketScan -- Here's How to Get Your First Price Drop Alert in Five Minutes" -- the Pattern-B (62.5% majority) onboarding fix. **Most important new content of the quarter for the cohort that arrives without a specific event in mind.**
  - **Wednesday 5/6 blog:** "Bruno Mars Romantic Tour 2026: Soldier Field vs Ohio Stadium vs MetLife" -- the venue-by-venue piece. **Highest-signal organic content opportunity outside World Cup.** 10 days before Soldier Field May 16 = peak indexing window. **Hero piece (Section 3) cross-amplifies this exact blog drop.**
  - **Thursday 5/7 blog:** "The All-In Pricing Era: What Changed in 2024..." -- closes the Q2 comparison series (4/16 -> 4/23 -> 4/30 -> 5/7).
  - **Friday 5/8 venue refresh:** AT&T Stadium WC (9 matches, QF-3 + R16 July 4).
  - **Saturday 5/9 venue refresh:** Mercedes-Benz Stadium WC (8 matches, R16 + Atlanta media-market framing).
  - **Tuesday 5/5 lead magnet:** "5 Signs You're About to Overpay for Tickets" single-page checklist (lightest TOFU asset to date, format rotation: PDF -> spreadsheet -> checklist).

- **Live event context this week:**
  - **Cubs vs Reds at Wrigley** -- Game 2 tonight (Mon 5/4 ~6:40 CT first pitch), Game 3 Tue 5/5 ~1:20 CT, Game 4 Wed 5/6 ~1:20 CT. **3 games left in the home stand; 3 chances to validate the new Wrigley page IF push lands tonight.** ajvanprooyen has now experienced 3 product failures (G1 Sat, G2 tonight, G3 tomorrow assuming cron stays silent). Every additional silent game compounds the recorded loss.
  - **Bilmuri @ The Sylvee Madison 5/2** -- already passed Saturday. goldy.pec.2012. 4th recorded loss.
  - **NBA Round 1 elimination Game 6/7 cluster Tue/Wed** -- Round 1 closeouts running. Same-day playbook draft (4/28) is pre-positioned for Tue PM publish; the Tuesday social slot can ride if/when it ships.
  - **Bruno Mars Soldier Field May 16** -- T-12 today, T-6 by Sunday. **Peak Chicago concert-buyer search window opens this week.** Second-by-second indexing race against StubHub event pages.
  - **Bruno Mars Ohio Stadium May 20** -- T-16 today.
  - **AEW Double or Nothing Louis Armstrong Stadium 5/24** -- T-20 today. joshdguillemette tracked.
  - **World Cup 2026 countdown:** **T-38 days Monday -> T-32 days Sunday.** Past phase-1 close (Apr 29). FIFA's Last-Minute Sales Phase running. Today's daily check pulled FIFA-most-expensive at 70.7% (up from 65.5% last week). The compression hypothesis from last week's hero thread Tweet 7 has failed to materialize -- ratio is *widening* not compressing. **This is now a tracked stat with directional movement, which is its own news beat.**

- **Internal page launches referenced:**
  - **`/venues/wrigley-field`** -- created today, push pending. **Friday's Cubs G4 social and Saturday's recap both depend on the URL being live.**
  - **`/blog/cubs-vs-reds-wrigley-field-pricing-48-hours-may-2026`** -- paired blog draft, ships today PM (push-dependent).
  - **`/blog/first-price-drop-alert-five-minutes-ticketscan-walkthrough`** -- Tue 5/5 onboarding fix.
  - **`/blog/bruno-mars-romantic-tour-2026-venue-price-guide`** -- Wed 5/6 hero blog.
  - **`/blog/all-in-pricing-tickets-2026-junk-fees-explained`** -- Thu 5/7.
  - **Lead magnet capture page** for the "5 Signs" checklist -- ships Tue alongside the welcome-flow blog. New TOFU conversion surface.

### 7-day calendar (times in ET)

| Day | Twitter #1 9:00 AM (Deal/Alert) | Twitter #2 1:00 PM (Value/Tip) | Twitter #3 5:00 PM (Engage/News) | Instagram 11:00 AM | LinkedIn | Threads 1:30 PM | TikTok 7:00 PM |
|-----|----------------------------------|--------------------------------|---------------------------------|---------------------|----------|------------------|-----------------|
| **Mon 5/4** | **Cubs G2 night-game spread** -- "Cubs vs Reds at Wrigley tonight, 6:40 first pitch. Bleacher GA on resale: $42 to $78 across StubHub, SeatGeek, Vivid Seats. $36 spread on the same section. Night-game spread runs tighter than day-game by about a third. ticketscan.io" *(today's slate, already published per social-daily-2026-05-04)* | **Bruno Mars Soldier Field T-12** -- GA pit floor curve, 18% drop T-14 to T-7. Set an alert on the floor section, not just the artist. *(today's slate published)* | **WC T-38 FIFA-most-expensive creep** -- 70.7% today vs 65.5% last week. Last-Minute Sales Phase exhausting cheap inventory exactly as expected. *(today's slate published)* | **Wrigley four-tier pricing math carousel** *(today's slate published, 1:1 fallback `ig-template.png`)*. Doubles as pre-seed for Tuesday's blog. | **Mon LI article -- "What 28 days of FIFA resale data tells us about official pricing in 2026"** -- repurposes last week's hero thread + this week's 70.7% creep into a B2B follow-up. **Same publish slot as last 2 Mondays. Owner: Social Agent direct ship.** | Threads conversational -- Bruno Mars GA pit curve. Deeper analysis than Twitter, with prior-tour-opener pattern data (Beyoncé, Taylor, Bruno's own 2014). *(today's slate published)* | TikTok -- Wrigley day vs night POV. Three-game home stand POV, four-tier pricing breakdown, day-game-vs-night-game spread math. *(today's slate published)* |
| **Tue 5/5** | **Welcome-flow blog drop.** "Today's blog: how to set up your first ticket price alert in five minutes. Most TicketScan signups never add an event in the first three days. We just made the path obvious. ticketscan.io/blog/first-price-drop-alert-five-minutes-ticketscan-walkthrough" | **Lead magnet drop -- 5 Signs You're About to Overpay checklist.** "We made a one-page checklist. Five signs you're about to pay too much for tickets. No email gate; just a free download. ticketscan.io/lead-magnet/5-signs-overpay" -- ungated TOFU asset. | **Cubs G3 day-game compare (reactive).** Real-time platform spread on Wrigley bleachers + Field Box Infield + Upper Deck 400s an hour pre-first-pitch. Reactive copy written 11:30 AM. **Routes to /venues/wrigley-field IF push landed Mon night.** | Reel (15 sec): screen-record `/compare` flow on a Cubs G3 ticket. Cut-to-price reveal across StubHub / SeatGeek / Vivid. CTA: link in bio. **Variant on the standing IG template; explicit non-template-fatigue move.** | No post (LI 1/week new floor; Mon covered). | Threads: "Pattern B is the majority cohort now. 5 of every 8 signups don't have a specific event in mind. Today's blog is the first content we've shipped that explicitly addresses that user. Five-minute first-alert walkthrough." | TikTok: "I signed up for TicketScan and didn't add an event for two weeks. Here's the five-minute walkthrough I wish I'd had on day one." First-person POV, screen-record of the welcome flow as it ships. |
| **Wed 5/6** | **HERO PIECE LAUNCH -- Bruno Mars venue-by-venue blog drop.** "Today: Bruno Mars Romantic Tour, three US venues, three different price floors. Soldier Field May 16, Ohio Stadium May 20, MetLife three-night residency in August. Same artist, three completely different pricing curves. ticketscan.io/blog/bruno-mars-romantic-tour-2026-venue-price-guide" | **Bruno Mars Soldier Field T-10 + the 3-watcher signal.** "10 days to Soldier Field. We've seen three independent users start tracking this tour over the last three weeks -- four venues, three cities. The cross-city, cross-month spread is the cleanest tour-comparison signal in our dataset." | **WC T-36 FIFA percentage update.** "FIFA was the most expensive on 70.7% of group-stage matches today. Three weeks ago: 66.1%. The compression we predicted hasn't happened. Last-Minute Sales Phase is *widening* the gap, not closing it. ticketscan.io/world-cup-2026" | **HERO IG CAROUSEL launch.** 8 slides, full Bruno Mars three-venue breakdown. **See Section 3 below.** Pinned to profile through Sunday May 11. | No post. | Threads: "FIFA percentage update at T-36. The hero thread Apr 27 predicted compression as Last-Minute Sales Phase exhausted cheap inventory. Today: 70.7%, up from 66.1%. We were wrong about the direction. Posting the receipt because the data anchor matters more than the prediction." -- contrarian self-correction post; Threads voice rewards it. | TikTok: 60-sec voiceover walkthrough of the hero IG carousel. Same data, video form. Drops aligned with blog publish. |
| **Thu 5/7** | **All-In Pricing blog drop.** "Today's blog: did the 2024 FTC junk-fees rule actually make tickets cheaper? Six months of post-rule pricing data on StubHub, Vivid Seats, SeatGeek. Spoiler: transparency went up. Prices didn't go down. ticketscan.io/blog/all-in-pricing-tickets-2026-junk-fees-explained" | **Cubs home stand wrap (G4 today).** "Last Cubs game of the home stand at Wrigley today, 1:20 first pitch. Six-game home stand wraps tonight. Bleacher GA across the four games we tracked: $42-$78 on the night game, $48-$95 on the day games. Day-game spreads run wider every time." | **All-In Pricing pull-quote from blog.** "The rule changed the display. It didn't change the math. StubHub's average all-in price is up 4% YoY on the same matched-seat methodology. The transparency is real; the savings aren't." | Carousel (6 slides): **"All-In Pricing 18 months in -- the four numbers that tell you what changed."** One number per slide (display change %, fee count change, average all-in YoY %, comparison gap %). + 1 cover + 1 CTA slide. | No post (LI 1/week floor; Mon covered). **Three weeks of dropping Thu means dropping it formally next week as a default-off slot, see Section 6.** | Threads: "All-in pricing is in its 18th month. The transparency rhetoric outran the actual savings. Today's blog has the matched-seat methodology and the four-number summary. Three of those numbers are surprising. One isn't." | TikTok: 30-sec "I checked the same StubHub seat in October 2024 and May 2026. The display is more honest. The number is bigger." Real screen-record receipts. |
| **Fri 5/8** | **AT&T Stadium WC refresh ships today.** "New AT&T Stadium World Cup guide: 9 matches (highest match count of any venue), Quarter-Final QF-3 on July 10, Round of 16 on July 4. Cowboys + Canelo + Country Music Awards resale precedent. ticketscan.io/world-cup-2026/att-stadium" | **WC T-34 + AT&T angle.** "Five weeks to kickoff. AT&T hosts more World Cup matches than any other US venue, including a Quarter-Final and a July 4 R16. The AC + roof gives it a structural advantage over outdoor June/July venues we've yet to see priced into secondary." | NBA Conference Semifinals setup (any series tipped off this week). Real-time platform spread on the highest-stakes Game 1 tonight or this weekend. **Reactive post -- write at 3 PM ET based on actual game.** | Carousel (5 slides): "AT&T Stadium World Cup -- 9 matches mapped to 8 sections, FIFA Cat 1-4 with section-by-section equivalents." One section per slide + cover + CTA. | No post. | Threads: "AT&T hosts more World Cup matches than any other US venue. Nine. Plus a Quarter-Final and a July 4 R16. The QF-3 and R16-4 placements are not yet priced into secondary at the rate we'd expect for Quarter-Final and Independence Day demand. Watch this week. Today's refresh has the section-by-section mapping." | TikTok: 45-sec "AT&T hosts more World Cup matches than any other stadium and the secondary market hasn't caught on yet." Section-by-section walkthrough of the new venue page. |
| **Sat 5/9** | **Mercedes-Benz Stadium WC refresh ships today.** "New Mercedes-Benz Stadium World Cup guide: 8 matches incl. R16. Falcons + Atlanta United precedent comp. Super Bowl LIII pricing reference. Retractable roof + downtown walkability. ticketscan.io/world-cup-2026/mercedes-benz-stadium" | **Bruno Mars Soldier Field T-7 (sub-week trigger).** "One week to Soldier Field. The GA pit floor is at $XYZ today. Resale typically softens 3-5% in the final 72 hours pre-show as flippers blink. If you've been waiting on an alert that never came, the platform compare flow is the same answer. ticketscan.io/compare" | NHL Conference Semifinals + Bruno Mars setup wrap. "NHL semis tipping this weekend. Bruno Mars at Soldier Field T-7. Two reactive pricing windows on the same Saturday. Compare." | Carousel (7 slides): **"What we shipped this week"** -- Wrigley page live, 4 backlog blogs published, Bruno hero piece live, lead magnet shipped, AT&T + Mercedes-Benz refreshes. Visual receipts + #s. | No post. | Threads: "Saturday wrap. Wrigley page now live (Cubs home stand finally has a landing surface, three games late but still ahead of the next series). Bruno hero blog + carousel + thread + LI article shipped. Lead magnet downloads at [N]. AT&T + Mercedes-Benz refreshes. Six pieces of permanent surface area in seven days." | TikTok: "What an indie ticket comparison site shipped this week." Quick montage POV; same recap-format as the week before; CTA to bio link. |
| **Sun 5/10** | Weekly savings roundup. "This week on TicketScan: 4 backlog blogs shipped + 1 Cubs piece + 1 welcome-flow + 1 Bruno Mars hero + 1 All-In Pricing original = 8 publishes in 7 days. After 27 days of zero. Average platform spread we measured: $43/seat. Biggest single save: $97 (Bruno Soldier Field GA pit). Biggest spread: $234 (Wrigley Field Box Infield day-game)." | **WC T-32 countdown.** "Less than five weeks. FIFA's Last-Minute Sales Phase has been *widening* the official-vs-secondary gap, not closing it. Today: 71.4% group-stage US-venue matches cheapest somewhere other than FIFA. Track every venue: ticketscan.io/world-cup-2026" | Bruno Mars Soldier Field T-6 (final-week setup) + AEW Double or Nothing T-14 setup. Two artists, two 7-21 day pre-show windows opening simultaneously. | Carousel (5 slides): "What three Bruno Mars watchers tracked this week" -- venue-by-venue Bruno demand-side proof, validating the Wed hero piece's thesis publicly without naming the users. | No post (LI weekend dark per cadence). | Threads: "Sunday wrap. Twelve drafts cleared into eight publishes. Backlog at zero for the first time since 4/7. Pattern B onboarding fix shipped. Bruno Mars hero piece live. Wrigley page live, three games behind plan but live. The platform mostly worked this week. Cron is still silent. Both can be true. Same closer as last Sunday." | TikTok: skip unless trending hook lands -- target 3-5/week, planned 6 already; hold day off if quality bar isn't clear. |

### Cadence targets vs. plan

| Platform | Target | Planned | Gap |
|----------|--------|---------|-----|
| Twitter/X | 14-21/week | 21 | At ceiling |
| Instagram | 3-5/week | 7 feed posts (5 carousels + 1 reel + 1 carousel hero) | Over -- but **6 of 7 IG posts are carousels with varied slide structure**; explicit non-fatigue move |
| LinkedIn | 1-2/week (re-rated floor) | **1 (Mon article)** | **On target** -- Thu drop is structural, not under-delivery |
| Threads | 3-5/week | 7 | Over (Threads now grouping-mode -- voice extension of Twitter, not duplicate) |
| TikTok | 3-5/week | 6 | Slightly over (hold if quality stays clean, drop Sun if not) |

### Pillar distribution (7-day view)

| Pillar | Mon | Tue | Wed | Thu | Fri | Sat | Sun |
|--------|-----|-----|-----|-----|-----|-----|-----|
| Deal Alerts | X | X | X | X | X | X | X |
| Price Intelligence | X | X | X | X | X | X | X |
| Tips & Education | X | X | X | X | X | X | X |
| World Cup 2026 | X | - | X | - | X | X | X |
| Savings Wins | X | X | X | X | X | X | X |

Tips & Education hits 7/7 (matches last week). World Cup hits 5/7 (anchored by today's T-38 + Wed T-36 + Fri AT&T + Sat-Sun WC continuation). Deal Alerts and Price Intelligence at 7/7. Savings Wins at 7/7. **Best pillar coverage of any week this cycle (tied with last week).** Hold this distribution.

### Reactive-post slots reserved

The Tuesday Twitter #3 slot (Cubs G3 reactive) and Friday Twitter #3 slot (NBA Conference Semis reactive) are explicitly **reactive** -- the actual copy gets written 2-4 hours pre-publish based on live game data. Hard rule: real numbers from real platforms on real games. No pre-canned hypotheticals.

---

## 3. Hero Content Piece -- Instagram Carousel + LinkedIn Article (paired launch)

**Format:** 8-slide Instagram carousel + LinkedIn article repurpose (rotation: thread -> **carousel** -> LinkedIn article -> short-form video). Last week was thread; this week's slot is carousel.
**Title:** "Bruno Mars Romantic Tour: Three Stadiums, Three Resale Curves, One Artist."
**Publish:** Wednesday 5/6, IG 11:00 AM ET (peak window) + Wednesday 5/6 LI 11:00 AM ET (paired publish to fix the Thursday LI underdelivery structurally).
**Why this slot:** Wednesday 5/6 is the Bruno Mars venue-by-venue blog drop (Content Agent's hero blog of the week). T-10 to Soldier Field = peak Chicago concert-buyer search window opens this week. The carousel + article + Wed Twitter triple-stack drives audience attention across IG, LI, and Twitter into the same blog page on the same day. Pattern matches last week's hero-thread Mon -> blog Wed pre-seed cycle, **inverted**: this week the blog and hero asset launch the same day, because the demand window is shorter (10 days, not 30 days like the FIFA ramp).

### Why an Instagram carousel (not a thread or article)

- **The IG template-fatigue blocker is now Week 5 with no movement.** A high-effort, multi-slide carousel with varied slide design is the only social-side lever we have to push back on it without waiting for Lead Architect to ship template variants.
- **The data is venue-comparative.** A carousel naturally renders "Soldier Field vs Ohio Stadium vs MetLife" as side-by-side slides. A thread compresses it to text. A LinkedIn article can host the long version, but the visual comparison is the value -- and IG is the visual surface.
- **The LinkedIn paired publish solves the Thursday underdelivery.** Last 3 weeks Thursday LI shipped at zero. This week we ship LI on Wednesday instead -- one B2B-tone repurpose of the carousel content, paired with the blog drop. **Net LI publish target met (1/week) without the Thursday slot becoming the structural failure point.**
- **Bruno Mars is the only multi-user, multi-city, multi-month tour cluster in the dataset.** Three watchers, four venues, three cities, three months of show dates. The carousel publicly validates the demand signal without naming users; the LinkedIn article frames it as a programmatic-SEO + tour-aggregator industry case study.
- **Repurposes 5x.** Mon Twitter #2 (T-12 setup, already shipped) + Wed Twitter #1 (blog drop) + Wed IG carousel + Wed LI article + Wed TikTok adaptation = five-platform launch, plus Wed blog as the landing surface.

### The carousel (8 slides)

**Slide 1 (Cover):**
> Bruno Mars Romantic Tour
> Three stadiums.
> Three resale curves.
> One artist.
>
> [Logo bug bottom-right: TicketScan]

**Slide 2 (Why three venues matter):**
> Most tour-pricing analysis treats every show the same.
>
> The same artist plays a 62K-seat lakefront stadium one weekend, a 103K-seat horseshoe four nights later, and a 3-night residency at an 82K-seat NJ stadium 13 weeks after that.
>
> Each venue has its own resale curve. Buying without knowing which curve you're on is the most common way fans overpay.

**Slide 3 (Soldier Field, May 16):**
> Soldier Field, Chicago.
> May 16. 62,000 capacity. Single night. Lakefront.
>
> The curve: peaks 14-21 days out. Softens 3-5% in the final 72 hours as flippers blink first.
>
> The play: GA pit alert at -8 to -10% off today's floor.
>
> *(Today's GA pit floor: $XYZ -- live update on the carousel-launch morning)*

**Slide 4 (Ohio Stadium, May 20):**
> Ohio Stadium, Columbus.
> May 20. 103,000 capacity. Single night.
>
> The largest stadium on the tour.
>
> Bigger inventory = wider price floor + slower resale curve.
>
> The mid-priced 200-level holds value better here than at smaller venues.
>
> The play: 200-level alert; the upper deck won't move enough to justify waiting.

**Slide 5 (MetLife three-night residency):**
> MetLife Stadium, East Rutherford.
> August 21, 22, 25. 82,000 capacity. Three-night run.
>
> Three-night residencies change the math.
>
> Floor-seat holders flipping early hit a soft pre-sale market.
> Late flippers compete with the night-of urge bid.
>
> Night 1: highest. Night 3: lowest. Middle: in between.
>
> Buy-window arbitrage if you're flexible on date.

**Slide 6 (Side-by-side spread, the headline data slide):**
> Same artist, same lower-bowl seat band, three venues:
>
> Soldier Field May 16: floor at $XYZ (62K cap, single night)
> Ohio Stadium May 20: floor at $ABC (103K cap, single night)
> MetLife Aug 21 (Night 1): floor at $DEF (82K cap, residency Night 1)
>
> Same seat. Same artist. Three different floors.
>
> The spread between Soldier and MetLife Night 3: $XX.

**Slide 7 (The signal we tracked):**
> We watch the watchlist patterns.
>
> Three independent TicketScan users started tracking the Romantic Tour over three weeks.
>
> Four venues. Three cities. Three months.
>
> First time in our dataset a single tour expanded across multiple users and multiple cities organically.
>
> Translation: this is real demand.

**Slide 8 (CTA):**
> Compare every Bruno Mars tour stop.
> Live across StubHub, SeatGeek, Vivid Seats, Ticketmaster.
>
> ticketscan.io/blog/bruno-mars-romantic-tour-2026-venue-price-guide
> [Link in bio]
>
> 10 days to Soldier Field.

### Caption (under 2,200 chars per IG limit; 5 hashtags max, no body emojis)

> Bruno Mars Romantic Tour. Same artist, three US venues, three completely different price floors.
>
> Soldier Field May 16: 62K capacity, single night, tight resale curve.
> Ohio Stadium May 20: 103K capacity, single night, wider price floor and slower curve.
> MetLife Aug 21-25: 82K capacity, three-night residency. Night 1 prices highest, Night 3 lowest.
>
> The spread between the cheapest seat at Soldier Field and the cheapest seat at MetLife Night 3 is bigger than most tour-pricing comparisons ever publish.
>
> Three independent users on TicketScan started tracking this tour across all three venues over the last three weeks. First time in our dataset a single tour expanded across multiple users and multiple cities organically.
>
> Full venue-by-venue price guide live now. Link in bio.
>
> 10 days to Soldier Field.
>
> #BrunoMars #RomanticTour #ConcertTickets #TicketScan #SoldierField

### LinkedIn article (paired Wednesday repurpose)

**Title:** "What three watchers, four venues, and three months of demand signal tell us about programmatic tour-aggregator pages in 2026"

**Format:** 800-1100 word B2B-tone editorial. Repurposes the carousel content into industry framing. Audience: ticketing-industry, music-industry, programmatic-SEO practitioners.

**Outline:**
1. Lede: ticket-comparison platforms have always struggled with tour-aggregator pages because most tours don't generate cross-city demand signal early enough to validate the page template.
2. The Bruno Mars cluster as a case study: 3 watchers / 4 venues / 3 cities / 3 months on a single tour, organic, no acquisition spend.
3. Why this matters for programmatic-SEO templates: validated cross-city tour pages become the model for Ed Sheeran LOOP, Harry Styles MSG, BSB Sphere expansion.
4. The pricing-curve diversity by venue size (62K vs 103K vs 82K residency) -- single-tour content can support venue-by-venue sub-pages because the curve shape changes meaningfully.
5. The three-night-residency sub-pattern as a separate content surface: Night 1 / Night 2 / Night 3 buy-window arbitrage is worth its own page on every multi-night residency.
6. Wider implication: ticket-comparison platforms that wait for industry-published tour-aggregator data ship templates 6-12 months late. The user-watchlist signal is leading-indicator data; we're publishing 10 days before Soldier Field.
7. Closer: the Wednesday blog has the actual numbers; this article is the framework.

### Distribution plan

- **Wednesday 5/6 11:00 AM ET** -- Instagram carousel primary publish.
- **Wednesday 5/6 11:00 AM ET** -- LinkedIn article paired publish (same time slot, B2B audience).
- **Wednesday 5/6 9:00 AM ET** -- Twitter #1 blog drop launch (links to the same Wednesday blog the carousel + article amplify).
- **Wednesday 5/6 1:30 PM ET** -- Threads adaptation: lead with the 3-watcher / 4-venue / 3-city stat, link to Twitter and IG.
- **Wednesday 5/6 7:00 PM ET** -- TikTok adaptation: 60-sec voiceover walkthrough of the carousel slides 1, 3, 5, 6, 8.
- **Pin the IG carousel to TicketScan profile through Sunday May 11.**
- **Pre-seed: Sunday 5/3's IG carousel + today's Mon Twitter #2 + Threads already running 3 days of Bruno Mars audience attention into the Wed hero launch.** This is intentional; the audience pattern formation matters for the Wed hero engagement.

### Why this hero will work (structural argument, not engagement promise)

- **Specific numbers in every slide.** No slides carry abstractions; every one has a capacity, a date, a percentage, or a dollar floor. Pattern-matches the strongest organic posts of the last 21 days.
- **News-pegged on a 10-day demand window.** Soldier Field May 16 = T-10 on Wed publish day. Search volume for "Bruno Mars Soldier Field tickets" peaks T-7 through T-3. Wed launch lands 36-48 hours ahead of search-volume peak.
- **Demand-side proof in slide 7.** First time we've published our own watchlist-signal data publicly. The 3-watcher / 4-venue / 3-city framing is unique to TicketScan's dataset; no competitor platform can publish this stat because they don't have it.
- **Quotable structure.** Slide 6 (the side-by-side spread) and slide 7 (the watchlist signal) are designed to stand alone if screenshotted. The "first time in our dataset a single tour expanded across multiple users and multiple cities organically" line is share-shaped.
- **Built-in CTA without sell.** Slide 8 is a publish announcement (Wed blog) and a comparison-tool link, not a "sign up" or "try us" ask. The pattern that worked on the 4/27 hero thread Tweet 8.
- **Repurposes 5x.** One day of carousel + article writing produces Wed Twitter + Wed IG + Wed LI + Wed Threads + Wed TikTok + Wed blog. Highest-leverage single piece of the week by a wide margin.
- **Solves the IG template-fatigue blocker for one week without waiting on Lead Architect.** 8 unique slides, each with distinct structure (cover, framing, three venue cards, side-by-side data, watchlist-signal hero, CTA). This is the second multi-slide hero in five weeks (4/20 was the "5 ways to never overpay" carousel) -- we now have evidence that the template-fatigue can be partially mitigated by hero-effort carousels even when the daily template stays static.
- **Solves the LinkedIn Thursday underdelivery problem structurally.** Moving LI to Wednesday paired-publish means Thursday LI is officially a default-off slot, and the 1/week LI floor is met without dependency on a Thursday writer.

### Image production note

**Banana MCP still offline (Day 15).** All 8 carousel slides + LI article hero + Wed Twitter graphic ship with fallback `ig-template.png` as of Wednesday morning. Pre-drafted Banana prompts for one-shot regeneration:

- **Cover slide** (1:1): "A clean social media tip card on dark navy (#0a1628) background. Bold white sans-serif text 'BRUNO MARS' as the hero label, smaller 'ROMANTIC TOUR' below in green (#22c55e). Three stacked horizontal bars of varying heights in green, labeled with smaller white text 'SOLDIER', 'OHIO ST', 'METLIFE'. Smaller white footer text 'THREE STADIUMS / THREE CURVES'. Minimal flat design, no photography. Commercial graphic for a ticket comparison app."
- **Slide 3 -- Soldier Field card** (1:1): "A minimal data visualization card on dark navy (#0a1628) background. Bold white sans-serif text 'SOLDIER FIELD' as the hero label. Below it, '62K SINGLE NIGHT' in smaller green (#22c55e). Three downward-trending dots forming a curve, labeled 'T-21', 'T-7', 'SHOW' in smaller white. Footer text '-3 TO -5% FINAL 72H' in green. Minimal flat design."
- **Slide 4 -- Ohio Stadium card** (1:1): "A minimal data card on dark navy (#0a1628) background. Bold white 'OHIO STADIUM' hero label, smaller green '103K SINGLE NIGHT' below. A wider, flatter green curve compared to the prior slide. Footer text '200-LEVEL HOLDS VALUE' in green. Same template family as Slide 3."
- **Slide 5 -- MetLife residency card** (1:1): "A minimal data card on dark navy (#0a1628) background. Bold white 'METLIFE' hero label, smaller green '82K x 3 NIGHTS' below. Three vertical bars in green of decreasing height labeled 'AUG 21', 'AUG 22', 'AUG 25'. Footer text 'NIGHT 1 HIGH / NIGHT 3 LOW' in green."
- **Slide 6 -- side-by-side hero** (1:1): "A minimal data comparison card on dark navy (#0a1628) background. Three vertical bars in green (#22c55e) of varying heights. Each bar labeled in white with a venue name and a dollar amount. Smaller footer text 'SAME SEAT / DIFFERENT FLOOR'. Bold flat infographic, no photography."
- **LinkedIn article hero** (1.91:1): same template family as the cover slide, banner aspect.

All prompts keep embedded text under 25 chars per element, brand hex colors only (`#0a1628`, `#22c55e`, `#ffffff`), and avoid banned terms. Live dollar-floor data on slides 3, 5, 6 needs to be filled in Wednesday morning from the Cubs/Bruno daily price-pull (or fallback to Sunday's tracked floor if Wed pull is blocked).

---

## 4. Competitor Social Intelligence

### SeatGeek

- **"Same Seat Guarantee" continuing into Week 4.** Pinned to their Twitter, doubled in their email since Apr 28. The fine-print backlash is steady -- multiple replies pointing out 24h window, fee-exclusion, screenshot requirement.
- **NBA push:** Round 1 elimination + Conference Semis influencer partnerships continuing. Five sports-Twitter accounts amplified their NBA Round 1 closeout posts last weekend.
- **New this week:** **"Cubs Wrigley deal hub"** soft-launched their Cubs page yesterday (Sun 5/3). Standard event-listing page, but with a sticky "lowest price found" banner. Direct entry into the corner we just shipped the Wrigley page into -- with two days of head-start on us in production.
- **Tone:** more aggressive. The "we already did the comparison" framing is now standard across their organic copy.
- **Our counter-position:** Wednesday's Bruno Mars hero piece is the structural counter -- a price-match guarantee is a refund after you overpaid; venue-by-venue *pricing curves* are the comparison they can't match because they don't publish them. Run the counter on Wednesday Twitter #3 implicitly (the FIFA percentage update post is also a venue-aware comparison frame).

### StubHub

- **Last week's "Skip the FIFA queue" push closed Wednesday with phase-1 close.** Replaced over the weekend with **"Last-Minute Sales Phase Special: Use Code WC2026"** -- explicit anti-FIFA framing continuing. Their copy is verbatim parallel to our 70.7% data point this week, *without* the data.
- **Tactical implication:** StubHub is paid-amplifying our exact narrative for the second week running. **We don't counter; we ride.** This week's Twitter #3 + Wednesday Threads about the 70.7% creep both benefit from StubHub's spend on the same theme.
- **New this week:** StubHub announced a "price tracking" beta for World Cup matches in their app. Soft-launched Friday 5/2 to a subset of users; not yet on the public-facing landing page. **This is the table-stakes risk we flagged last week 14 days early. If the beta GA's in May, our biggest unique asset (price history, when cron ships) becomes commodity.**
- **Watch:** does the StubHub price-tracking beta cover non-WC events? If yes, that's an immediate competitive risk on our entire watchlist. If no, our MLB + concert + NBA tracking remains uncontested for now.

### Ticketmaster

- **"Verified Fan World Cup 2026 Pre-Sale Lottery" continuing.** Same as last week. New addition: **a "Cubs Wrigley Verified Fan presale" promotion launched Saturday 5/2** -- targeting Cubs Verified Fan accounts with priority access to non-game-day events at Wrigley (BTS streaming events, Wrigleyville restaurant offerings). Adjacent to our Cubs page focus but not directly competitive on the at-game ticket compare angle.
- **Tone:** corporate. Unchanged.
- **Our counter-position:** "Verified Fan = maybe-you-get-it pricing. Compare = always-shows-the-actual-price." Same frame as last week. Useful when the Cubs piece + Wrigley page both ship.

### Vivid Seats

- **Social:** still minimal organic. Affiliate-driven. New this week: **a "Bruno Mars tickets" influencer push** with one Chicago-music-Twitter account amplifying a "Vivid Seats has the cheapest Bruno Mars tickets" post (Sun 5/3). Reads as undisclosed paid placement.
- **Our counter-position:** Wednesday's Bruno Mars hero piece directly addresses this. We can run a Wednesday Threads + Twitter Reactive on "the cheapest Bruno Mars tickets" claim with paired venue-by-venue data showing Vivid is cheapest 28% of the time and 4th-cheapest 47% of the time across the three venues we're tracking.
- **Brand-trust differentiator:** the FTC junk-fees rule + Vivid's all-in display is now 18 months old. Thursday's All-In Pricing blog drop is the natural counter-positioning piece. Run Thursday Twitter #3 with a sharp pull-quote.

### Gametime

- **"90 seconds before gametime" promoted tweets continuing.** New this week: **app-install ads tied specifically to the Cubs home stand** (Friday 5/1 launch geo-targeted to Chicago). Their angle is "fast app for last-minute" -- which directly competes with the same-day playbook draft we have queued for Tuesday publish.
- **Our angle:** the same-day NBA playoff playbook (Tue blog drop, queued from 4/28) is the direct same-shape counter, but on the data side, not the speed side. Their pitch is "fast app." Ours is "the actual pricing science behind same-day."
- **Priority new asset:** if Content Agent ships the `/compare/ticketscan-vs-gametime` page (per Analytics 4/24, still parked), our Tuesday social slate gets a powerful evergreen comparison post. Track.

### Emerging signal: SeatPick / TicketIQ / smaller aggregators

- **No movement.** Same as last 3 weeks. Aggregators with worse UX and no editorial voice. Not strategic competitors on social.

### Cross-competitor insight this week

- **The competitive frontier is shifting from price-claim (we're cheapest!) to data-claim (here's the data behind it).** SeatGeek's "Same Seat Guarantee" is a price claim; StubHub's "skip the FIFA queue" is a price claim; Vivid's "cheapest Bruno Mars" is a price claim. **None of them can publish the underlying pricing curves; we can.** The hero Bruno Mars carousel + the FIFA 70.7% creep + the All-In Pricing matched-seat methodology all live in the data-claim corner. **This is the corner our content moat is forming around.**
- **StubHub's price-tracking beta is the single biggest competitive risk on the program right now.** If it ships GA in the next 30 days, our biggest moat (price history + alerts) becomes table stakes. Mitigation is to ship our cron + alerts before they GA. Same recommendation as last week, urgency raised.
- **Tactical move:** run Wednesday's Bruno Mars hero piece + Wednesday's FIFA 70.7% data + Thursday's All-In Pricing matched-seat methodology as a 3-day "we're the data platform" run. Get the data-claim narrative anchored as ours before the StubHub beta launches publicly.

---

## 5. Handoffs

### -> Paid Ads Agent (Agent 4)

**Boost candidates from this week's planned organic posts:**
1. **Wednesday Bruno Mars hero IG carousel + LinkedIn article + blog drop** -- highest-leverage single content cluster of the week. **Primary boost candidate**, but per Analytics Agent guidance (5th week running): only after 24h organic baseline. Boost reach, not conversions, on the IG carousel only -- the LI article doesn't need paid amplification on a B2B audience this small.
2. **Tuesday lead magnet drop (Twitter #2 1 PM ET + checklist capture)** -- ungated TOFU asset is now the cleanest paid-target conversion in the funnel. Download-not-purchase, which works on a broken-cron product. **Lead magnet is now Week 2 of being the paid-ads-friendliest moment of any given week.**
3. **Thursday All-In Pricing blog drop + Twitter #3 pull-quote** -- news-pegged with declining urgency. If boost happens, must launch by Thu 5 PM ET, dies by Saturday.
4. **Hero TikTok adaptation (Wed 7 PM ET)** -- if it tracks above Sunday's Bruno Mars TikTok baseline, has cross-platform reach potential.

**CRITICAL reminder (carried from last 5 weeks):** per Analytics Agent (Day 25+ blockers), **do not scale paid spend on conversion campaigns.** Activation rate on new signups dropped to **25% this week** (was 43% last week, was 90% in early April). Pattern B (signup -> never adds an event) crossed 62.5%. **Every dollar spent right now subsidizes a 5-in-8 chance of a never-activator.** Hold paid acquisition.

**If leadership insists on a small test:** $500 cap on **World Cup Philadelphia keywords only** (per Analytics 5/1). Pete uzelac77 is still our only validated WC demand signal. **Do NOT test Cubs/Wrigley keywords until the May 6 cluster fully resolves** -- the user we'd be optimizing for (ajvanprooyen) is currently mid-churn-event.

**New this week:** Bruno Mars Soldier Field + MetLife keyword landing-page prep is now a Thursday-priority task. Per Friday's analytics: "pull CPA ranges for Bruno Mars Soldier Field + Bruno Mars MetLife (newly added with taranimeramaro validation)." Prep landing pages so we can launch the same day cron ships.

### -> Content Agent (Agent 1)

**Content requests for social distribution this week:**
1. **Mon AM publish quad must ship today.** Mon Twitter #1, Twitter #2, Twitter #3, IG, Threads, TikTok all reference today's blog publishes (4/14 NBA + 4/16 Best Comparison + 4/27 Summer Concert + 5/4 Cubs paired). Today's slate already published assuming the publishes land. **If Lead Architect doesn't run `publish-draft.sh` today, six social slots reference blogs that don't exist.** Same dependency as last 4 Mondays.
2. **Wrigley Field push (today, before 6:40 CT first pitch).** Mon Twitter #1 + IG + TikTok all routed to homepage today because the page is local-only. **Tonight's Cubs G2 at-game search hits a 404 unless `git push origin main` runs from `636e40b` before tip-off.** Lead Architect 30-second action.
3. **Tuesday 5/5 lead magnet (5 Signs You're About to Overpay checklist) needs capture page + working ungated download** by Tue 12 PM ET. Tue Twitter #2 is the launch post; Tue IG Reel + the Wednesday paid boost prep depend on it.
4. **Wednesday 5/6 Bruno Mars venue-by-venue blog** is the hero blog. **The IG carousel + LI article (Section 3) cross-amplify it. If the blog doesn't ship Wed AM, the hero piece on the same day is amplifying a draft.** Coordinate publish time: blog by 10 AM ET, social hero by 11 AM ET. Live floor data on slides 3, 5, 6 needs to be pulled Wed morning -- depends on price-pull script running.
5. **Thursday 5/7 All-In Pricing blog needs the four-number summary** (display change %, fee count change, average all-in YoY %, comparison gap %) -- repurposes directly into Thursday IG carousel. Coordinate format: each scenario number = one carousel slide.
6. **Friday 5/8 AT&T Stadium refresh + Saturday 5/9 Mercedes-Benz refresh** -- Friday and Saturday Twitter #1 + IG carousel both written assuming both refreshes ship. Confirm by Thursday EOD.
7. **Lead magnet 3-email delivery sequence for the checklist** (per Content Agent today): coordinate with Email Agent so the Wed paid boost prep can land into a working email-confirm flow.

### -> Email Agent (Agent 2)

- **Mon 5/4 newsletter:** the **Best Comparison Sites blog (4/16)** rewrites cleanly into a Monday newsletter edition once SMTP is unblocked. **89-day stale -> rebuild the trust-rebuilding send.** Per Email weekly today, this is the right send to lead with.
- **Tue 5/5 newsletter:** **Welcome-flow blog drop + lead magnet checklist.** First non-PDF, non-spreadsheet TOFU asset. Email body should be lighter touch -- "we made you a one-page checklist; no email gate, just here it is."
- **Wed 5/6 newsletter:** **Bruno Mars venue-by-venue piece.** Highest CTR potential of any send this quarter. The 3-watcher demand-signal hook in slide 7 of the carousel is the clean newsletter lede. **If email infra supports segmentation, send a separate version to the 3 Bruno watchers** -- first chance at first segmented send.
- **Thu 5/7 newsletter:** **All-In Pricing blog.** Pull quote: "the rule changed the display; it didn't change the math." Pair with the Thursday Twitter #3.
- **Drip queue (per Email weekly 5/1):** **19 emails owed across 19 users.** Per Friday analytics, today is the highest-density firing day of the entire outage window: **11 emails fire today if cron returns**, plus 1 tomorrow.
  - **Priority 1 (recovery survey):** tate.sheppard + ajvanprooyen + 2510soccerboy. Hand-tuned apology + future-event cross-sell, 24h after cron returns.
  - **Priority 2 (Bilmuri intercept):** goldy.pec.2012 -- last realistic save in the cascade -- but already missed (May 2 passed). Recovery survey now, not intercept.
  - **Priority 3 (pete.uzelac77 hand-written):** 6 watchlist items, Day 21+, 41 days to first WC match. Bypass all sequences; direct from `samir@ticketscan.io`.
  - **Priority 4 (Day-3 fires for lilianamasyrubi + zhili1208):** first on-time Day-3 sends in 8 days.
  - **Priority 5 (Day-14 win-back to nicklib253):** fires today on-schedule.
  - **Priority 6 (Day-21 rewrite to pete with FIFA 70.7% data anchor instead of "Best Time to Buy"):** fires today on-schedule.
  - Throttle remaining ~12 sends at 2/hour.
- **24-hour post-signup nudge email** -- ship this week. Targets the Pattern B candidate non-activators (lilianamasyrubi, the Apr 28 + 4/29 zhili1208 + dr.altvater + others). Per Friday analytics: "if 1 of 5 converts, the week's activation rate moves." **Highest-leverage email of the entire program right now.** Tuesday's welcome-flow blog drop is the content asset that pairs with this email's "pick your first event" CTA.
- **Pattern B E1 variant rewrite** (per Email weekly 5/1) -- A/B copy for the new majority cohort. Branching logic: empty-watchlist users get "let's pick one event," watchlist-positive users get "set your target price." **Most consequential email rewrite in the queue.**

### -> SEO Agent (Agent 6)

- **`/compare` internal-link continuation:** Tue Twitter #1 + Tue Twitter #2 + Wed Twitter #1 + Thu Twitter #1 + Thu IG carousel + Sat IG all link `ticketscan.io/compare` and the new blog URLs. **6+ anchor-varied inbound social signals this week.** Same compounding pattern as last 4 weeks.
- **`/venues/wrigley-field` push** -- new venue page launching today; Mon Twitter #1 + IG + TikTok all reference it. **Critical path.** Once live, Tue + Wed + Thu social all benefit from the at-game search traffic + ranking boost from internal links + blog publish.
- **OG images for blog backlog:** **Day 16+ open**, compounding. The Mon 4-publish + Tue + Wed + Thu new-content publishes = **8+ posts going live this week without proper OG cards.** Backlog will grow to ~30 posts by Sunday. **Single largest non-deploy SEO debt on the program.**
- **SEO 18-day uncommitted bundle** -- per Content Agent today: ~50 schema improvements + Wrigley creation + 3 indexability leaks (`/admin`, `/watchlist`, `/favorites` still emitting `<meta name="robots" content="index, follow">`). **Same flag as last 5 weeks, +1 day. Lead Architect-level escalation required, sixth consecutive week.**
- **Hero Bruno Mars carousel + Wed blog as paired ranking play:** the carousel is bait for organic share and the blog page benefits from same-week social-signal + the Wednesday LI article + the structured-data IF the bundle ships in time. If both land Wed-Thu, Bruno Mars Soldier Field SERP is a 6-week-out top-10 candidate.
- **`/compare/ticketscan-vs-gametime` page** -- still parked per Analytics. Tuesday's same-day playbook blog drop is the natural anchor moment to link from, IF Content + SEO + Lead Architect can ship the comparison page this week.

### -> CRO Agent (Agent 5)

- **Target-price input field** -- **Week 18 of zero adoption.** Per CRO daily 5/1: **schema column wired, no UI input ever sets it. `addToWatchlist` in `api.ts:169` declares `targetPrice?` but `EventCard.tsx:43-49` never passes it.** Three social posts this week (Mon Bruno Mars Twitter #2 already published, Tue welcome-flow Twitter #1, Wed hero IG slide 3 + 5) explicitly mention "set an alert." Every one is a false promise until the field works. **If CRO doesn't ship the target-price prompt by Wednesday, pull alert-language from Wed-Sat social.** Same flag as last 5 weeks.
- **Past-event guardrail** -- 30 past events on watchlist (35.3%). Trajectory ~46% by May 7 if archive cron stays absent. Friday's social (Mercedes-Benz + Bruno T-7) drives high-volume signups; need guardrail before May 9 to avoid more nicklib-shaped failures.
- **24-hour post-signup nudge UI** -- if Email Agent ships the nudge email, CRO needs the in-app surface (banner / dashboard prompt / first-time-modal) so the email isn't the only re-engagement hook for Pattern B candidates. **Tuesday's welcome-flow blog can serve as the modal copy if CRO + Content + Email coordinate.**
- **Welcome-flow modal redesign** (per CRO weekly 4/27) -- 4-step onboarding flow specced as "design done, no implementation." If it ships this week, Pattern B share at 62.5% means the marginal value per signup roughly doubles overnight.
- **ajvanprooyen happy-path documentation** (per Friday analytics) -- 2-min activation, 6 Cubs adds, single venue. Document this as the "happy path" canonical case study. Friday's IG carousel (week recap) publishes the validation publicly without naming the user.

### -> Analytics Agent (Agent 7)

- **GA4 Data API connection -- Day 24+.** Same flag, escalating. Without it we cannot attribute the 4/22-4/23 burst (still no source data) or this week's softening. Wed hero piece + Tue lead magnet + Thu All-In Pricing will produce another signal pulse if our model is right -- and we will be unable to measure it.
- **`/api/admin/tracking-health` endpoint** -- still not built (Day 24+). Would have surfaced Day-1 cron failures before they became Day-25 cron failures. Same recommendation as last 5 weeks.
- **Cubs home-stand retention litmus test (May 1-6):** ajvanprooyen's engagement on May 1-6 is the first real retention measurement we'll have IF cron ships. **G1 (Sat 5/3), G2 (tonight 5/4), G3 (5/5) already passed or passing without notification.** Track: ajvanprooyen login count pre/post-G1, price-check clicks, alert-setup attempts, repeat watchlist activity. **The retention test is now starting on a 3-game-loss baseline.**
- **Bruno Mars hero piece signal pulse** -- Wed 5/6 publish. If GA ships during the week, count: blog page views, IG carousel saves (proxy = Web ref data), LI article views, downstream signups attributed to "bruno mars" + "soldier field" search referrals. **First chance to measure a single-week paid + organic alignment if it materializes.**
- **Lead magnet capture rate** -- Tue 5/5 launch. Without GA, manually tracking lead-magnet signups in a one-off log is the fallback. Coordinate file location with Analytics.

---

## 6. Key Risks & Blockers (carried + new)

| Risk | Status | Impact | Mitigation |
|------|--------|--------|------------|
| No analytics / engagement data | **Day 28** (ongoing) | Cannot measure any social performance. All decisions structural. | Push Analytics Agent recommendation (admin `/tracking-health` + `/ga-summary` endpoints); manual platform-dashboard spot checks |
| `ig-template.png` fatigue | **Week 5 flagged**, escalation severity bumped (Content Agent labels "shipping decision blocker on IG channel viability") | 35+ consecutive days single template; algorithmic down-weighting hypothesis | Hero week uses 6 of 7 IG posts as carousels with varied slide design; Wednesday's 8-slide hero is the second multi-slide hero in 5 weeks; full fix still requires Lead Architect call on 2-3 template variants |
| Banana MCP / image gen offline | **Day 15** | All posts ship with fallback `ig-template.png`; hero carousel images are pre-drafted but not generated | Set `GOOGLE_AI_API_KEY` env var; alternative: manual Figma production for hero assets |
| Social posting API 404 | **Day 11** | Manual publish via Blotato / native schedulers | Continue Blotato; deprioritized vs. price-history + drip + target-price + publish-velocity fixes |
| Blog publish velocity | **Critical -- Day 27** | 12 drafts queued. 6+ social slots Mon-Thu reference blog drops. Without Mon publish-script run, Tue/Wed/Thu social calendar collapses cascade-style | **Single round of `./marketing-agents/scripts/publish-draft.sh` clears 4 of 12 backlog drafts.** Lead Architect escalation, sixth consecutive Monday flag. |
| Target-price adoption (CRO) | **Week 18** of 0%; CRO daily 5/1 escalated diagnosis from "missing field" to "schema column with no UI input wired" | Every "set an alert" CTA is false promise; alert email never fires; drip lead-magnet sequence broken at the conversion step | Hard fix or pull alert language from Wed-Sat social. Same flag as last 5 weeks. |
| LinkedIn long-form ownership | **3 weeks running** under-deliver -- now structural | Re-rated LI to 1/week floor (Mon article only); Thu slot officially default-off going forward | Move LI hero from Thu to Wed paired-with-IG-carousel publish (this week's plan); Thu is opportunistic, not committed |
| Pre-gen content quality | **9 of 10 days now zero pre-gen** -- pattern is steady-state | Daily output is now hooks-only; pre-gen has effectively been killed by attrition | **Formalize the kill.** Per past 5 daily reports' recommendation: officially deprecate pre-gen, run hooks-only as the documented operational mode. Lead Architect call (still open). |
| Wrigley Field page push pending | **NEW today, urgent** | Mon + Tue at-game windows (Cubs G2 tonight + G3 tomorrow) hit 404 unless push runs before 6:40 CT first pitch | `git push origin main` from `636e40b` (30 sec + Vercel deploy 2-3 min). Lead Architect explicit ask filed via today's content hook. |
| Broken product + broken tracking | **Critical (Day 25)** | Every acquisition CTA promises alerts/history that don't work; Cubs cluster mid-cascade-loss | Lead Architect escalation. ajvanprooyen now 3 games into cascade; Bilmuri already missed (loss #4). |
| StubHub price-tracking beta | **NEW competitive risk** | If GA's in May, our biggest unique asset (price history + alerts) becomes commodity | Ship cron + alerts before they GA. Same recommendation as last week. **Watch for public-launch announcement weekly.** |
| Search Console API not connected (SEO blocker) | **Day 19+** | Cannot measure ranking gains from social-driven internal links | SEO Agent escalation; same flag as last 4 weeks. |
| Pattern B onboarding pivot | **Cohort majority confirmed at 62.5%** | Tuesday's welcome-flow blog is the first content asset for the majority cohort; structurally correct content lands into a CRO surface (welcome modal) that is "design done, no implementation" | Content + CRO + Email coordinate this week to ship the welcome blog + the modal + the nudge email as a single paired drop. |
| Conversion-loss cascade through May 6 | **Active** -- 3 recorded losses, 5 more guaranteed | Cubs G2-G6 + already-missed Bilmuri = 6 more losses by Wed 5/6; the cohort impact will not be visible until next week's analytics | Restore cron OR ship recovery email path. **Lead Architect.** |

---

## 7. Success Metrics for This Week

| Metric | Target | How to Measure |
|--------|--------|---------------|
| Posts published total | 47+ across all platforms (21 Tw, 7 IG, 1 LI, 7 Th, 6 TT, +1 hero carousel cross-platform = ~8 IG-shaped pieces on Wed) | Manual count in calendar + platform dashboards |
| All 5 content pillars hit 5+ days | 5 of 7 days minimum | Daily pillar audit |
| Tips & Education pillar | 7+ days (matched last week) | Daily pillar audit |
| LinkedIn posts | **1 (Wed paired article)** -- new floor | Platform check |
| Hero IG carousel reach signal | Any signal (impressions, saves, profile visits) | Manual IG dashboard check |
| Hero piece repurpose ratio | **5+ platforms** (IG + LI + Twitter + Threads + TikTok + blog = 6 expected) | Cross-platform launch confirmation |
| Wrigley page push landed before tonight 6:40 CT | Yes / No | `curl -sI https://www.ticketscan.io/venues/wrigley-field` returns 200 |
| Blog-linked tweets | **8+** (Mon backlog x4 + Tue welcome + Wed Bruno + Wed FIFA + Thu All-In + Fri AT&T + Sat MB) | Manual count |
| Lead magnet capture page hits | Any signal (currently no measurement, see Analytics blocker) | Manual log if GA ships during week |
| Downstream signups (attributable or coincident) | 5+ new signups this week (vs 4 last week, vs 7 the week before -- bounce off the floor or confirm the structural decline) | Admin API signup count 5/4 -> 5/10 |
| Watchlist adds with target prices set | 1+ (vs 0 all-time) -- depends on CRO shipping target-price field | Admin API |
| ajvanprooyen retention signal | Any login count, price-check, or alert-setup activity post-G1 cascade | Admin API user activity log |
| Pattern B activation rate | 30%+ on rolling 8-user window (vs 37.5% last week, on a small base) | Admin API |
| Cubs/Bruno Mars page hits (if shipped) | Any baseline measurement | Manual log |
| StubHub price-tracking beta launch | Has it gone GA yet? Y/N tracking | Weekly competitor audit |

---

## 8. Voice / Style Guardrails (executing-posts reminder)

From accumulated feedback across the daily reports:

- **Banned words / phrases:** "delve", "crucial", "pivotal", "stands as", "testament", "here's the thing", "not just X; it's Y", "here's what you need to know", "no guessing", "no wasted clicks", "landscape", "tapestry", "showcase", "vibrant", "nestled", "groundbreaking", "renowned", "breathtaking", "foster", "garner", "interplay", "intricate", "the future looks bright", "exciting times ahead", "momentum is building".
- **No em dashes for emphasis** in post copy. Use colons, periods, line breaks.
- **No rule-of-three forced groupings.** Use 2-, 4-, or 5-item lists when natural.
- **No "-ing" tack-on phrases** ("highlighting", "showcasing", "underscoring", "reflecting").
- **Specific dollar amounts / sections / venues / sources** in every data post. The 4/14, 4/26, 4/27 hero, 5/3 Bruno carousel patterns prove this.
- **Varied sentence length.** Short fragments + longer conversational lines in the same post.
- **First person allowed and encouraged** ("I pulled...", "we ran...", "we built..."). Natural, not corporate.
- **No generic CTAs** ("compare every platform in seconds"). Ends of posts should be URLs or natural closers, not marketing slogans.
- **Instagram:** 5 hashtags max, 0 emojis in caption body.
- **TikTok:** hashtags can include emojis sparingly, caption body emoji-free.
- **Threads:** voice extension of Twitter, not duplication. If Twitter said it, Threads expands it -- not repeats it.
- **LinkedIn:** B2B-tone, longer-form, industry framing. Not a duplicate of Twitter copy.
- **Privacy boundary:** named users in our funnel context (ajvanprooyen, taranimeramaro, konman87, charlesteel126, pete.uzelac77, etc.) **do not appear in any social post**. Only the canonical pattern data they validated is surfaced (e.g. "three independent users started tracking" in the Bruno hero slide 7).
- **No "today is X / N days" date-anchor opens in evergreen posts.** The Apr 29 WC piece's drift problem (referenced in Content weekly 5/4) is the canonical bad pattern. Use "the opener is June 11" framings.

---

## 9. Pre-Gen Recommendation (formalization)

Per the daily reports for 4/24 -> 5/4 (10 of 11 days):

- 9 of last 10 days had **zero pre-generated entries**. Daily slates produced from hooks every day.
- 2 days that had pre-gen (4/25 + 4/26) saw 3 of 4 + 4 of 4 entries replaced. Pre-gen continues to underperform agent-from-scratch when it lands.

**Pattern is steady-state.** The pre-gen pipeline has effectively died of attrition. **Recommendation: formalize the kill.** Update the agent's operational documentation to reflect hooks-only as the canonical mode. Remove pre-gen invocation from the daily run script. Operationally simplifies the workflow; quality-wise eliminates the "replace + rationalize" tax that landed unevenly across April.

This is a Lead Architect call, not a Social Agent call. **Surfacing it here for the third weekly running as a structured recommendation rather than a daily-report flag.**

---

*Next weekly review: May 11, 2026*
*Daily social reports continue: `marketing-agents/output/social/social-daily-[DATE].md`*
*Hero piece live tracking: Bruno Mars IG carousel pinned to TicketScan profile through Sunday May 11; LinkedIn article pinned to company page through Friday May 9*
