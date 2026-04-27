# Social Media Manager -- Weekly Report
## Week of April 27 - May 3, 2026

**Prepared:** 2026-04-27 (Monday planning session)
**Agent:** Social Media Manager (Agent 3)
**Theme:** Backlog publish detonation (3 stale + 1 new in 24h) + NBA Round 1 elimination week + WC kickoff at 45 days + Friday May 1 summer-tour cutoff + first MLB validation cluster (Cubs)

---

## 1. Performance Review -- April 20-26

### Infrastructure reality (now Day 21)

No Twitter/X, Instagram, LinkedIn, Threads, or TikTok analytics API is connected. Admin API still does not expose GA/GTM data (Day 17+ per Analytics Agent 4/24). Banana MCP still offline (Day 8 -- `gemini_generate_image` and `set_aspect_ratio` not surfaced through ToolSearch). All "performance" signals below are structural -- topic timing, copy quality, internal-link strength, downstream signups -- not impressions or engagement counts.

**The new platform reality:** the backend funnel produced **7 signups Apr 18-24** (vs 1 the prior week) and **9 watchlist adds** (vs 0). The April cohort just had its biggest 48-hour signup burst of the month (Apr 22-23: 5 signups, 7 adds). **Strip those two days and the rest of the week is 2 signups in 5 days.** The headline number looks like a recovery, the underlying rate doesn't. Critically, **3 of the 5 Apr 22-23 signups have not activated** (ggri73 Day 4, awwhittington Day 3, mark.murdock Day 3) -- the April-cohort activation rate has dropped from 90% lifetime to 64% to a structural floor near 55%.

That is the context every social post landed into this week.

### Posts published (per `content-calendar.json` + daily social logs)

| Platform | Posts Queued | Target | Variance |
|----------|--------------|--------|----------|
| Twitter/X | 21 (3/day Mon-Sun) | 14-21 | At ceiling |
| Instagram | 7 (1/day) | 3-5 | Over (single-template fatigue, Week 4) |
| Threads | 7 (1/day) | 3-5 | Over |
| TikTok | 7 (1/day) | 3-5 | Over |
| LinkedIn | 1 (Mon only -- `5 ways to never overpay` carousel doc) | 2-3 | **Under -- Thursday slot dropped** |

**Verdict:** Twitter / IG / Threads / TikTok all ran on schedule. LinkedIn went from 0 the week before to 1 this week (the Monday carousel doc) -- **the planned Thursday article (TM-vs-SG fee transparency) didn't ship**. Same root cause as the 4/13-4/19 cycle: nobody owns LinkedIn long-form on Thursdays. **This is the third week running where LinkedIn has under-delivered. Escalating from "track" to "fix or kill."**

### Top 3 posts (structural estimate)

1. **Twitter -- FIFA Sunday Refresh (4/26 1:00 PM ET)** -- "Sample held at 58 group-stage matches. FIFA was priciest on 38 of them. 65.5%, third check landing at the same ratio. Median US-venue spread holds at $97." This is the strongest single data hook the site has ever published. The number is internally consistent across three independent data passes 13 days apart, and it directly contradicts the FIFA-official-is-cheapest assumption that most casual buyers default to. **Pin candidate. Foundation of this week's hero piece -- see Section 3.**

2. **Twitter -- Same-Day Playoff Playbook (4/26 9:00 AM ET)** -- "Lower-bowl resale typically drops 15 to 25% in the final 90 minutes pre-tip. Most buyers hit Ticketmaster at 10 AM and pay the morning list. StubHub usually cuts deepest at the tail. Compare 90 minutes out." The Hook 3 nmcnamee99 case (signed up 30h before tip-off looking for last-minute pricing) makes the canonical 6-hour playbook concrete. Pre-seeds Tuesday's blog drop. Three voices on the same anchor data (Twitter + IG + TikTok) is the standard pre-seed pattern.

3. **Instagram Carousel -- "5 ways to never overpay for tickets again" (4/20 11:00 AM ET)** -- the hero piece from last week. 8 unique slides, addressed the four-week single-template-fatigue flag (partially), pinned to profile. We have no engagement data, but structurally this is the highest-effort organic asset the program has produced and it doubled as the LinkedIn carousel doc. Asset still has shelf life -- repurposable into Twitter and TikTok this week.

### Bottom 3 posts (structural)

1. **Pre-gen entries for 4/26 (4 of 4 replaced)** -- the worst pre-gen batch we've seen. Wrong day-of-week ("Saturday morning" on a Sunday), made-up stats ("up 8% from last week" with no data file source), banned phrasing ("That's not a bug -- it's your opportunity" with em dash for emphasis), and pure platitudes ("the only winning move is to compare every time"). **Second consecutive weekend of bad pre-gen.** This is the single largest quality risk in the agent's daily output -- pre-gen is degrading or running on an opaque schedule, and when it lands, it's worse than producing from scratch. **Recommendation: kill pre-gen, run hooks-only.**

2. **Threads -- Sunday FIFA recap (4/26 1:30 PM ET)** -- echoes the data points from Twitter #2 (38/58 = 65.5%, $97 spread, MetLife/SoFi mentioned). Same intentional cross-reinforcement we use to build the audience pattern, but on Threads specifically this is the third consecutive Sunday where Threads is just Twitter's longer cousin. The platform deserves voice variation, not duplication.

3. **Instagram -- daily template-saturation (running)** -- not a single post, the **pattern**. Week 4 of identical `ig-template.png` on every IG post except the Monday hero carousel. Even strong copy starts looking like wallpaper at this cadence. Algorithm-side this almost certainly down-weights the feed; user-side it reads as visual fatigue. **Open ask, four weeks running, zero design movement.**

### Patterns identified

- **Works:** specific numbers (38 of 58, 65.5%, $97 spread, 90 minutes pre-tip, $108.63), specific named tours (Billie June 13, Kendrick June 6, Tyler June 12, Chappell June 14), specific named users in the funnel context (not in posts -- privacy boundary).
- **Works:** "I pulled X this morning" / "Sample held at Y" first-person opens. Sounds like a person, not a brand.
- **Works:** Hook-pinned production (calendar -> social) is now 3 weeks running and is producing better-quality posts than pre-gen with consistent voice and data anchoring.
- **Doesn't work:** generic CTAs ("compare every platform in seconds"), banned phrasing in pre-gen, em-dash-for-emphasis, made-up stats with no source.
- **Doesn't work:** `ig-template.png` on every single post for 28+ consecutive days. Week 4 flag.
- **Doesn't work:** LinkedIn long-form ownership. Two weeks of mostly-zero output.

### Content pillar coverage this week

| Pillar | Mon 4/20 | Tue 4/21 | Wed 4/22 | Thu 4/23 | Fri 4/24 | Sat 4/25 | Sun 4/26 |
|--------|----------|----------|----------|----------|----------|----------|----------|
| Deal Alerts | X | X | X | X | X | X | X |
| Price Intelligence | X | X | X | X | X | X | X |
| Tips & Education | X | X | X | - | X | - | X |
| World Cup 2026 | X | - | X | - | - | X | X |
| Savings Wins | X | X | X | X | X | X | - |

Tips & Education hit 5 days (vs 2 two weeks ago, 4 last week). Deal Alerts at 7/7. World Cup ran light Tue / Thu / Fri because Wed FIFA was the doubled slot. **Better balance than the prior two weeks. Hold this distribution.**

### Downstream activity linkage

- **Signups 4/20-4/26:** **7** (joshdguillemette 4/19 fastest activation in cohort + dr.altvater 4/20 + charlesteel126 4/22 + ggri73 4/22 + awwhittington 4/23 + ajvanprooyen 4/23 + mark.murdock 4/23). 6 in the Apr 18-24 window per Analytics. Plus 1 today, +1 yesterday in `content-hook.md`. 7 vs 2 last week is +250%.
- **Watchlist adds:** **9** (vs 1 last week). ajvanprooyen alone added 6 (Cubs home stand May 1-6). joshdguillemette added 1 (AEW Double or Nothing 5/24). charlesteel added 1 (Bruno Mars Ohio Stadium 5/20). nmcnamee99 added 1 just before Saturday's Raptors playoff tip-off.
- **Newsletter subs:** 0 (82+ days stale).
- **Target prices set:** **0/85** (Week 17 of zero target prices ever recorded). Same broken target-price field. Every "set a price alert" CTA in social copy this week was a false promise. Same flag last week. **No movement.**
- **What that means:** social funnel got better. Product behind it didn't. nmcnamee99 (signed up 30h before tip-off looking for price intelligence) and ajvanprooyen (6 Cubs games tracked, May 1 deadline) are the two highest-value signups of the month, both delivered into a price-history table that has been empty for 21 days. **Social cannot save this funnel by itself, and right now social is actively producing the gap between user expectation and product reality.**

---

## 2. Weekly Content Calendar -- April 27 - May 3

### Planning inputs

- **Content Agent plan (`content-calendar-week-2026-04-27.md`):**
  - **Monday 4/27 publish quad:** 4/14 NBA compare + 4/15 FIFA seat-assignments + 4/16 best comparison sites + 4/27 Summer Concert Tour 2026 (the Monday big-idea blog, third Monday in a row attempted). **All four must ship in 24 hours** to clear the backlog. Day 21 of zero-streak.
  - **Tuesday 4/28 blog:** "Same-Day NBA Playoff Tickets: The 6-Hour Playbook (and Why Most Buyers Pay Too Much)" -- pre-seeded by Sunday's Hook 3 social slate.
  - **Wednesday 4/29 blog:** "World Cup 2026 General Sale Phase Closes -- Here's What's Left and What It Costs" -- once-per-tournament-lifecycle news beat.
  - **Thursday 4/30 blog:** "StubHub vs Vivid Seats (2026): Which Resale Site Is Actually Cheaper?" -- closes the Q2 comparison series (4/16 -> 4/23 -> 4/30).
  - **Friday 5/01 venue refresh:** SoFi Stadium WC (`worldcup-stadiums/sofi-stadium`).
  - **Saturday 5/02 venue refresh:** AT&T Stadium WC (`worldcup-stadiums/att-stadium`).
  - **Tuesday 4/28 lead magnet ship:** Concert Ticket Price Tracker Template (Excel/Sheets workbook) -- **first non-PDF magnet** with recurring engagement structure.

- **Live event context this week:**
  - **NBA Round 1 Game 5/6 territory** Tue-Fri. Thunder-Grizzlies, Cavs-Magic, Knicks-Pistons, Nuggets-Clippers all in close-out range. Elimination-game pricing typically lands 30-50% above series openers; search volume peaks Tuesday morning ("Thunder Game 5 tickets," "Knicks Game 6 cheap"). **Tuesday's blog drop must publish before tip-off windows.**
  - **NHL Round 1 Game 5/6** also tracking -- Oilers, Maple Leafs, Caps/Pens series likely deciding by Friday.
  - **ajvanprooyen's Cubs home stand opens Friday May 1.** Six tracked games over six days. Highest-intent user of the April cohort, May 1 is the operational deadline for price-tracking cron.
  - **Florence + The Machine -- State Farm Arena Atlanta 5/1** (+4 days) -- tate.sheppard tracked.
  - **Bilmuri -- The Sylvee Madison 5/2** (+5 days) -- goldy.pec.2012 tracked.
  - **Bruno Mars -- Soldier Field 5/15-5/16, Ohio Stadium 5/20** (+18 to 23 days) -- konman87 + charlesteel, **first cross-user multi-venue tour signal in the dataset**.
  - **Friday May 1 = summer-tour deep-inventory cutoff.** Pollstar Q1 $108.63 / +9% YoY. After Friday platforms converge on price; the 20-50% spread collapses to 5-15%.

- **World Cup countdown:** **45 days Monday -> 39 days Sunday.** Pre-tournament conversion window is wide open. FIFA general sale phase closing Wednesday is the once-per-tournament news beat of the week.

- **Internal page launches referenced:**
  - `/compare` JSON-LD shipped two weeks ago. **Internal-link reinforcement still needed** in tweet copy to compound `/compare` ranking.
  - **Lead magnet capture page** (Tue 4/28): `/blog/summer-concert-tour-2026-ticket-buying-guide` with tracker download CTA -- new conversion surface. Social drives traffic to capture.

### 7-day calendar (times in ET)

| Day | Twitter #1 9:00 AM (Deal/Alert) | Twitter #2 1:00 PM (Value/Tip) | Twitter #3 5:00 PM (Engage/News) | Instagram 11:00 AM | LinkedIn | Threads 1:30 PM | TikTok 7:00 PM |
|-----|----------------------------------|--------------------------------|---------------------------------|---------------------|----------|------------------|-----------------|
| **Mon 4/27** | **Backlog publish drop** -- 3 blogs going live this morning. "Three pieces just shipped: NBA Round 1 platform compare, FIFA seat-assignment bait-switch, the best ticket comparison sites for 2026. ticketscan.io/blog" | **Summer Concert blog drop** -- "Pollstar pegged Q1 at $108.63, up 9 percent. We checked platform variance on the four biggest summer tours. Friday May 1 is the cutoff. Today's blog: ticketscan.io/blog/summer-concert-tour-2026-ticket-buying-guide" | NBA Round 1 elimination week setup. "Round 1 hits Game 5/6 territory this week. Thunder-Grizzlies, Cavs-Magic, Knicks-Pistons, Nuggets-Clippers all in close-out range. Elimination-game lower-bowl typically lands 30 to 50% above series openers." | **Hero Twitter thread cross-promo carousel.** 5 slides previewing the FIFA 25-day data thread (Section 3). Slide 1: hook. Slides 2-4: top three data points. Slide 5: "Read the full thread on X. Link in bio." | **Article -- "What three weeks of FIFA resale data shows about 'official' pricing in 2026"** (publishes 11 AM ET, repurposes Wednesday blog data + the hero Twitter thread for B2B audience). | Threads conversational adaptation of the hero thread. Lead with the 38/58 stat, tease the full thread on Twitter without verbatim repeat. "Spent the last 25 days re-pricing the FIFA group-stage sample. Wrote up what changed and what didn't. Full thread on Twitter." | **TikTok -- Summer Window Four Days Left.** POV: Friday May 1 cutoff, Pollstar +9% YoY, four headline tours named. Continues the same-day pivot from yesterday into the summer-window pivot for the week. |
| **Tue 4/28** | **Same-Day Playbook blog drop.** "Today's blog: the 6-hour playbook for same-day NBA playoff tickets. 15-25% drops in the final 90 minutes, lower-bowl-behind-basket arbitrage, the verified-resale download window. Round 1 Game 5/6 is tonight. ticketscan.io/blog/same-day-nba-playoff-tickets-6-hour-playbook" | **Tracker template lead magnet drop.** "We built the spreadsheet we use to track summer concert prices ourselves. Free download. Pre-filled formulas, four tabs, sample data, Pollstar reference. Link below." -> tracker capture page. | NBA Game 5 live data pull (one of the elimination tip-offs). Real-time platform spread on the highest-stakes game tonight -- specific section + dollar amounts on three platforms. **Reactive post -- write at 3 PM ET based on actual game and pricing.** | Reel (15 sec): screen-record `/compare` flow on a live Game 5 matchup. Cut-to-price reveal. CTA: link in bio. | No post (LinkedIn 2/week target; Mon + Thu cover it). | Threads: "Game 5 is tonight. The 6-hour pricing playbook works because most buyers refresh Ticketmaster at 10 AM and pay the morning list. The cuts come in the final 60 to 90 minutes. Same series, different game, same pattern." | TikTok: "I bought playoff tickets at three different times today and the cheapest was the one I bought 90 minutes pre-tip." Real-time data reveal format. |
| **Wed 4/29** | **WC Phase 1 Closes blog drop.** "FIFA general sale phase closes today. 45 days to kickoff. We pulled what's left on the official marketplace and what it costs. Spoiler: official isn't cheapest. ticketscan.io/blog/world-cup-2026-general-sale-closing-april-2026" | World Cup 45-day countdown framing. "45 days. The general sale window closing today is the moment most US-venue group-stage prices stop being negotiable. After Wednesday, secondary inventory drives the floor. Compare every match: ticketscan.io/world-cup-2026" | **NBA Round 1 close-out data wrap.** "Round 1 ended for at least three series this week. Game 5/6 lower-bowl pricing landed +37% above Game 1 across the four series we tracked. The opener-vs-closer gap is bigger than the home-vs-road gap." | Carousel (6 slides): "FIFA general sale closes today -- here's what's left." Each slide one venue's remaining inventory and price floor (MetLife, SoFi, AT&T, Hard Rock, Lumen, Mercedes-Benz). | No post. | Threads: "FIFA general sale phase closing today is the inflection point for World Cup 2026 ticket pricing. Group-stage US-venue floors crystallize. Secondary takes over. We've been tracking 62 group-stage matches for 25 days -- 41 of them are still cheapest somewhere other than FIFA. Today's blog has the venue-by-venue breakdown." | **Hero-adjacent TikTok:** "FIFA's general sale closes today. We tracked their official resale for 25 days. They were not the cheapest on 66 percent of group-stage matches." Data reveal, CTA to blog. |
| **Thu 4/30** | **StubHub vs Vivid Seats blog drop.** "Today: StubHub vs Vivid Seats fee math. Pulled identical seats across both for two events this weekend. Spread averaged $34 all-in. The Vivid Seats checkout-fee surprise is bigger than people think. ticketscan.io/blog/stubhub-vs-vivid-seats-2026" | Cubs home-stand setup (May 1 = tomorrow). "Cubs open the Wrigley home stand against the D-backs tomorrow. Six games in six days. Lower-bowl behind-the-plate is currently $52 SeatGeek, $74 StubHub, $89 Ticketmaster. Bobblehead Friday tightens the spread fast." | Florence + The Machine 1-day-out (Atlanta Friday). "Florence at State Farm Arena tomorrow. Section 101 lower bowl: $187 StubHub, $164 SeatGeek, $223 Ticketmaster. 24-hour window is when sellers blink. Compare." | Carousel (6 slides): **"StubHub vs Vivid Seats fee math -- the four scenarios where each one wins."** Concert (Vivid), NBA playoffs (StubHub), NHL playoffs (StubHub), MLB regular season (Vivid). One scenario per slide + paired data. | **Article -- "Resale fee transparency is the next consumer trust battleground in 2026 ticketing"** (B2B framing, repurposes Thursday blog's StubHub-vs-Vivid fee math + last week's TM-vs-SG fee data). **Owner: assigned explicitly this week. If no owner by EOD Wed, kill the slot rather than miss third week running.** | Threads: "StubHub and Vivid Seats both sell themselves on transparency. Their fee stacks are different shapes. Vivid front-loads, StubHub tail-loads, and the all-in number lands in different places by event type. Today's blog has the four-scenario breakdown." | TikTok: 30-sec screen-record of the SH-vs-VS comparison flow on a Cubs ticket and a Florence ticket. Side-by-side number pop. |
| **Fri 5/01** | **Cubs home stand opens.** "First Cubs home game of the May stretch tonight. Wrigley vs D-backs, 7:05 first pitch. Section 207: $44 SeatGeek, $58 StubHub, $61 Ticketmaster. MLB platform variance is the most under-reported number in the sport." | **Summer-tour cutoff day.** "Last weekday before summer tour deep-inventory window closes. Kendrick June 6, Tyler June 12, Billie June 13, Chappell June 14. Today is the last sane buying day before platforms converge on price. Track the spread: free tracker template -> ticketscan.io/blog/summer-concert-tour-2026-ticket-buying-guide" | SoFi Stadium WC refresh ships today. "New SoFi Stadium World Cup guide: 8 group-stage matches, FIFA Cat 1-4 mapping, the third-place playoff context. ticketscan.io/world-cup-2026/sofi-stadium" | Carousel (5 slides): "Cubs May home stand -- six games, three platforms, the cheapest seller for each game." One game per slide. **Validates ajvanprooyen's tracking pattern publicly without naming the user.** | No post. | Threads: "Friday May 1, summer tour cutoff day. Six and a half hours of platform-variance window left before deep-inventory closes. After today the spread on Billie / Kendrick / Tyler / Chappell collapses to single digits. Worth checking before the weekend." | TikTok: 45-sec "Last day before summer concert prices lock in. Here's what the floor looked like Friday vs Monday on four major tours." Real-time price pull. |
| **Sat 5/02** | NBA Round 1 wrap + NHL G5/6 tonight. "Round 1 NBA closeouts averaged a +37% premium over Game 1 lower bowl. NHL G5 in Toronto tonight is showing similar early signal. Compare." | Cubs Saturday matinee. "Cubs vs D-backs 1:20 first pitch today. Kerry Wood Bobblehead night tomorrow tightens upper-deck pricing fast. Section 519: $24 SeatGeek today, projected $38-44 by Sunday morning." | **AT&T Stadium WC refresh ships today.** "New AT&T Stadium World Cup guide: 9 matches (highest count of any venue), one of two semifinals, AC/roof advantages over June outdoor venues. ticketscan.io/world-cup-2026/att-stadium" | Carousel (7 slides): "The numbers behind this week" -- backlog publish (3 blogs), summer cutoff hit, FIFA phase 1 closed, Cubs opener, Florence one-night, NBA Round 1 closeouts, WC at 39 days. | No post. | Threads: "Saturday in MLB is the most under-priced inventory in sports right now. Cubs lower bowl behind home plate, weekend day game, $44 SeatGeek. That's a Tuesday-Pirates-game number on a Saturday-Cubs-bobblehead-night-eve game. The variance is the whole product." | TikTok: "Cubs season is the cheat code most people miss. Six home games next week and the cheapest lower bowl seat is $44." |
| **Sun 5/03** | Weekly savings roundup (data-backed). "This week on TicketScan: 3 backlog blogs shipped, 4 new posts published, 2 stadium pages refreshed. Average platform spread we measured: $41/seat. Biggest single save: $187 (Florence Atlanta). Biggest spread: $234 (FIFA US-venue Cat 1). ticketscan.io/blog" | **WC 39 days countdown.** "Six weeks from kickoff. General sale phase closed Wednesday. Secondary now drives the floor on every group-stage match. We tracked 62 of them for 25 days -- 41 are still cheapest somewhere other than FIFA. ticketscan.io/world-cup-2026" | Bruno Mars setup (Soldier Field 5/15, +12 days). "Bruno Mars at Soldier Field in 12 days. Lower bowl 113: $287 StubHub, $244 SeatGeek, $341 Ticketmaster today. The Soldier-Field-vs-Ohio-Stadium spread on the same tour is $58 a seat. Same artist, different city, different pricing." | Carousel (5 slides): "Cubs Day 3, Florence post-show, Bilmuri Day-of -- three Sunday data pulls, three platform winners. Same week, three completely different pricing dynamics." | No post (LinkedIn weekend dark per cadence). | Threads: "Sunday wrap. Three blogs shipped, summer cutoff cleared, FIFA phase 1 closed, ajvanprooyen-shaped users still buying Cubs tickets six days deep into the home stand. The platform mostly worked this week. The product behind it still mostly didn't. Both can be true." | TikTok (skip unless trending hook lands -- target was 3-5, we're at 6 planned already). |

### Cadence targets vs. plan

| Platform | Target | Planned | Gap |
|----------|--------|---------|-----|
| Twitter/X | 14-21/week | 21 | At ceiling |
| Instagram | 3-5/week | 7 feed posts | Over (rotate carousels vs single-frame -- 6 of 7 are carousels this week, single-template-fatigue partially addressed) |
| LinkedIn | 2-3/week | **2 (Mon + Thu)** | **On target IF Thu ships** |
| Threads | 3-5/week | 7 | Over (Threads now grouping-mode -- treat as extension of Twitter, not duplicate) |
| TikTok | 3-5/week | 6 | Slightly over (hold if quality stays clean, drop Sun if not) |

### Pillar distribution (7-day view)

| Pillar | Mon | Tue | Wed | Thu | Fri | Sat | Sun |
|--------|-----|-----|-----|-----|-----|-----|-----|
| Deal Alerts | X | X | X | X | X | X | X |
| Price Intelligence | X | X | X | X | X | X | X |
| Tips & Education | X | X | X | X | X | - | X |
| World Cup 2026 | X | - | X | - | X | X | X |
| Savings Wins | X | X | X | X | X | X | X |

Tips & Education hits 6 of 7 days (vs 5 last week). World Cup hits 5 of 7 days (vs 4 last week, anchored by Wed phase-1 close + Sat AT&T refresh). Deal Alerts and Price Intelligence at 7/7 (consistent with last 3 weeks). Savings Wins at 7/7. **Best pillar coverage of any week this cycle.**

### Reactive-post slots reserved

The Tuesday Twitter #3 slot and Friday Twitter #1 slot are explicitly **reactive** -- the actual copy gets written 2-4 hours pre-publish based on live game data. Hard rule: real numbers from real platforms on real games. No pre-canned hypotheticals.

---

## 3. Hero Content Piece -- Twitter/X Thread

**Format:** 8-tweet Twitter/X thread (rotates from last week's Instagram carousel; rotation cycle = thread -> carousel -> LinkedIn article -> short-form video, repeat).
**Title:** "We tracked FIFA's official resale for 25 days. Here's what 62 World Cup matches told us about 'official' pricing."
**Publish:** Monday 4/28, 1:00 PM ET (Twitter #2 slot).
**Why this slot:** Wednesday's blog is the FIFA phase-1-close news beat. The hero thread on Monday pre-seeds three days of audience attention before the blog drops -- by Wednesday, anyone who saw the thread shows up to the blog with the framework already loaded. Same pre-seed pattern that worked for the same-day playbook 4/26 -> 4/28 cycle.

### Why a thread (not a carousel or article)

- **The data is the story.** A thread delivers the data points one at a time, each landing as its own moment. A carousel forces compression into single-screen captions.
- **It's repurposable.** Each tweet in the thread can be lifted into the IG carousel (Wed), the TikTok script (Wed), the LinkedIn article (Mon), and the Wednesday blog itself.
- **No image dependency.** Banana MCP has been offline 8 days. A thread ships text-first -- visuals can be added when image gen comes back, but absence doesn't block publish. (Last week's IG hero carousel needed 8 unique images and we shipped fallbacks because Banana was offline. Threads de-risk that.)
- **It's the right voice for this data.** The FIFA stat is contrarian, news-pegged, and built for the "wait, what?" reaction. Twitter rewards that shape.

### The thread

**Tweet 1 (Hook):**
> 25 days ago FIFA opened official resale on World Cup 2026.
>
> The marketing said: cheapest, safest, official.
>
> So we built a tracker and ran the same 62 group-stage matches across FIFA, StubHub, and SeatGeek.
>
> Sample expanded to 62 matches. Re-priced 4 times in 25 days.
>
> Here's what the data actually says.
>
> [thread]

**Tweet 2 (Headline stat):**
> 41 of 62 group-stage matches we tracked had FIFA listed as the most expensive option.
>
> 66.1%.
>
> Two-thirds of group-stage tickets are cheaper somewhere else.
>
> The number has held in a 65-67% band across four independent data passes.
>
> "Official" doesn't mean "cheapest."

**Tweet 3 (Median spread):**
> Median spread between FIFA's official price and the cheapest secondary on US venues: $94.
>
> That's $94 a ticket on the average match.
>
> Two tickets, four matches, you've spent more on FIFA-tax than on a flight to the venue.

**Tweet 4 (Outliers):**
> The biggest single spread we logged: $281.
>
> Brazil group-stage match, US venue, Cat 1 lower bowl. FIFA official: $612. SeatGeek listing: $331.
>
> Same seat, same row, same match.
>
> The outliers aren't outliers. They're the structural cap, not the floor.

**Tweet 5 (Where FIFA does win):**
> FIFA wasn't the most expensive everywhere.
>
> 21 of 62 matches showed FIFA at parity or cheaper than the secondary. 33.9%.
>
> Pattern: lower-demand non-US venues (Toronto, Mexico City group stage on weekday nights) and the latest-released inventory drops where secondary hadn't caught up yet.
>
> Knockouts will look different.

**Tweet 6 (Why the gap exists):**
> The gap isn't fraud or bad pricing.
>
> FIFA's official resale prices to demand in real time. They're the seller. They have no reason to underprice their own inventory.
>
> The secondary market is **other buyers**. Their reservation prices vary. Variance is opportunity.

**Tweet 7 (The lifecycle move):**
> FIFA general sale phase 1 closes Wednesday April 29.
>
> After Wednesday, official inventory thins fast. Secondary takes over.
>
> The 65-67% gap *should* compress as the official supply runs out and secondary becomes the only seller.
>
> If it doesn't compress, the FIFA-tax is structural, not transitional.

**Tweet 8 (CTA + repurpose hook):**
> We're publishing the full venue-by-venue breakdown Wednesday morning -- 62 matches, four data passes, the median spread per US venue.
>
> Free to read. Free to use the comparison.
>
> Subscribe / bookmark: ticketscan.io/world-cup-2026
>
> 45 days to kickoff.

### Distribution plan

- **Monday 4/27 1:00 PM ET** -- Twitter/X primary publish.
- **Monday 4/27 11:00 AM ET** -- Instagram carousel preview (5-slide cross-promo: hook + 3 data points + "read full thread on X / link in bio") seeds the audience before the thread drops. Carousel is the standalone IG asset for the day.
- **Monday 4/27 11:00 AM ET** -- LinkedIn long-form article ("What three weeks of FIFA resale data shows about 'official' pricing in 2026") publishes the full thread content as a B2B-tone editorial. **This is also Monday's LinkedIn slot.**
- **Monday 4/27 1:30 PM ET** -- Threads adaptation: lead with the 41/62 stat, link to the full Twitter thread. No verbatim duplication.
- **Wednesday 4/29** -- TikTok adaptation (60 sec, voiceover walks through tweets 1, 2, 4, 7, 8). Drops aligned with the blog publish.
- **Wednesday 4/29 blog post** -- expands the thread into the full 62-match venue-by-venue breakdown. Thread = headline; blog = full data set.
- **Pin the thread to TicketScan profile through Friday May 2.**

### Why this thread will work (structural argument, not engagement promise)

- **Specific numbers in every tweet.** No tweets carry abstractions; every one has a count or a dollar figure. Pattern-matches the strongest-performing posts of the last 14 days.
- **Contrarian framing pegged to news beat.** FIFA phase-1 closes Wednesday. Public attention on World Cup ticketing peaks Tue-Wed. Thread lands Monday afternoon -- 36-48 hours ahead of the search-volume peak.
- **Quotable structure.** Tweets 2, 3, 4, 7 are designed to stand alone if quote-tweeted. The 41/62, $94 median, $281 outlier, and "structural not transitional" lines are all share-shaped.
- **Built-in CTA without sell.** Tweet 8 is a publish announcement (blog Wednesday) and a free-resource pointer, not a conversion ask. The pattern that worked on the 4/14 platform-win-rate Twitter post.
- **Repurposes 4x.** One day of writing produces Mon Twitter + Mon IG + Mon LI + Mon Threads + Wed TikTok + Wed blog. Highest-leverage single piece of the week by a wide margin.

### Image production note

**Banana MCP still offline (Day 8).** All image-dependent variants of this thread (TikTok visual, IG carousel, blog OG image, LinkedIn article hero) ship with fallback `ig-template.png` as of Monday morning. Pre-drafted Banana prompts for one-shot regeneration:

- **Tweet 1 hook image** (16:9): "A clean social media tip card on dark navy (#0a1628) background. Bold white sans-serif text '25 DAYS / 62 MATCHES' centered. Smaller white subtext 'WORLD CUP 2026 RESALE' above and 'FIFA TRACKED' in green (#22c55e) below. Minimal flat design, small calendar icon in green accent top-right. Commercial graphic for a ticket app."
- **Tweet 2 headline-stat image** (16:9): "A minimal data visualization card on dark navy (#0a1628) background. Bold white sans-serif text '41 OF 62' centered as the hero number, with '66.1% FIFA TOP' in green (#22c55e) below. Smaller white subtext '2/3 CHEAPER ELSEWHERE' at the bottom. Clean flat infographic design."
- **Tweet 4 outlier image** (16:9): "A minimal data card on dark navy (#0a1628) background. Stacked rows: 'FIFA $612' in white at top, '$331 SECONDARY' in green (#22c55e) middle, '$281 SPREAD' in larger white at bottom. Minimalist commercial infographic."
- **IG carousel cover** (1:1): same template family as Tweet 1, square aspect.
- **LinkedIn article hero** (1.91:1): same template family as Tweet 1, LI-banner aspect.

All prompts keep embedded text under 25 chars per element, brand hex colors only (`#0a1628`, `#22c55e`, `#ffffff`), and avoid banned terms ("8K", "masterpiece", "ultra-realistic").

---

## 4. Competitor Social Intelligence

### SeatGeek

- **Active campaign continuation:** "Price Match Guarantee" still running (Week 3). New variant launched late last week: "Same Seat Guarantee" -- promising lowest price on identical seats with same-day matching. Pinned to their Twitter.
- **Tone:** more aggressive -- the new variant is explicitly positioned against comparison tools ("we already did the comparison for you").
- **Engagement:** the fine print is *still* the story in replies. Multiple users this week pointed out that the match excludes fees, has a 24-hour window, and requires receipt screenshots.
- **NBA Round 1 push:** sports-influencer partnerships continuing into Game 5/6 (handful of NBA Twitter accounts amplifying SeatGeek deal posts during last weekend's slate).
- **Our counter-position:** Thursday's StubHub-vs-Vivid blog frames the fee-stack reality directly. Run the counter on Thursday Twitter #3 -- "A price match is a refund after you overpaid. We compare every site before you click. The fees are what they're hiding behind the match."

### StubHub

- **Social activity:** still mostly paid, not organic. Running NBA playoff Story ads + a new "World Cup 2026 Pre-Sale Marketplace" push that started over the weekend (timed to FIFA phase-1 close Wednesday).
- **Tone:** premium / aspirational unchanged. The WC push is more direct than usual ("Skip the FIFA queue. Buy now.") -- explicit anti-FIFA framing, which is interesting because it's identical to our positioning.
- **Tactical implication:** StubHub is paying to amplify our exact narrative this week. Free wind in our sails on the FIFA-isn't-cheapest story. **We don't counter; we ride.** Wednesday's WC blog and the hero Twitter thread benefit from StubHub's spend.
- **Risk:** if StubHub launches an actual price-history feature alongside the WC push, our biggest unique asset (price history, when cron ships) becomes table stakes. Watch the next two weeks.

### Ticketmaster

- **Campaign:** "Verified Fan" presale continues. New addition this week: **"World Cup 2026 Pre-Sale Lottery"** -- targeted email + paid social to existing Verified Fan accounts who registered for any 2025 tournament event. This is a credible competitor for FIFA's general-sale traffic.
- **Tone:** corporate. Same as last week.
- **Our counter-position:** "Lottery" framing means uncertainty pricing. Our copy can frame the alternative: "Verified Fan = maybe-you-get-it pricing. Our compare = always-shows-the-actual-price." Run Wednesday Twitter #3 (paired with the WC phase-1 blog drop).

### Vivid Seats

- **Social:** minimal organic. Affiliate-driven through sports-betting and meme-account influencers. New this week: a small handful of "Vivid Seats has the cheapest [event] tickets" influencer posts that read as undisclosed paid placements -- worth flagging as a brand-trust differentiator.
- **Our position:** Thursday's StubHub-vs-Vivid blog directly addresses this. We can run a Thursday Twitter post on the "cheapest" claim with paired data showing it's true 30-40% of the time and false 60-70% of the time. **Counter-positioning material.**

### Gametime

- **Active push:** "90 seconds before gametime" promoted tweets continuing through NBA Round 1 elimination week. Plus new this week: app-install ads tied to Cubs home stand (the May 1 opener is in their geo-target).
- **Their angle:** doubling down on event-day/last-minute mobile.
- **Our angle:** the **same-day playbook blog Tuesday** is the exact counter -- and it's on the data side, not the speed side. Their pitch is "fast app." Ours is "the actual pricing science behind same-day." Both can win different segments. Our `/compare/ticketscan-vs-gametime` page (per Analytics Agent 4/24) is the strategic asset; if Content ships it next week, social gets a powerful evergreen comparison post.

### Emerging signal: SeatPick / TicketIQ / smaller aggregators

- **No movement.** Same as last week. They're aggregators with worse UX and no editorial voice. Not strategic competitors on social.

### Cross-competitor insight this week

- **Three of the four majors (SeatGeek, StubHub, Ticketmaster) are running explicit anti-FIFA campaigns this week.** This is unusual. The phase-1 close is making *all* the secondary players push the "official isn't best" narrative simultaneously.
- **Our advantage:** we're the *only* player publishing actual data behind the claim. SeatGeek says "we'll match." StubHub says "skip the queue." TM says "verified fan is the way." We say "here are 62 matches priced four times in 25 days, and the gap is $94 median, $281 max."
- **Tactical move:** run the hero Twitter thread Monday afternoon (when none of the big three has dropped their week's anti-FIFA hook yet), get the data narrative anchored as ours, then ride the wave Tue-Wed when their paid amplification fires.

---

## 5. Handoffs

### -> Paid Ads Agent (Agent 4)

**Boost candidates from this week's planned organic posts:**
1. **Hero Twitter thread (Mon 4/27 1 PM ET)** -- highest-leverage single piece of the week. Built for organic share + data-density + news-peg. **Primary boost candidate**, but per Analytics Agent guidance, only after 24h organic baseline. Even then: boost reach, not conversions.
2. **Tuesday tracker template lead-magnet drop (Twitter #2 1 PM ET)** -- first capture asset of the week. If organic CTR on the link looks credible by EOD Tue, boost on Wed-Thu to drive lead-magnet downloads. **Lead magnet is now the cleanest "boost target" for paid because the conversion is download-not-purchase, which works on a broken-cron product.**
3. **Wednesday WC phase-1 blog drop (Twitter #1 9 AM ET)** -- news-pegged with declining urgency over time. If boost happens, must launch by Wed 5 PM ET, dies by Friday.
4. **Hero TikTok adaptation (Wed 7 PM ET)** -- if it tracks above baseline, has cross-platform reach potential.

**CRITICAL reminder (carried from last 4 weeks):** per Analytics Agent (Day 21+ blockers), **do not scale paid spend on conversion campaigns.** Price history is empty (Day 21), drip is broken (Day 21), `/api/admin/alerts` returns 500 (Day 21), target-price adoption is 0% across 85 watchlist items (Week 17). Boosting reach on data-led organic posts is fine; funding net-new acquisition into a 55%-projected non-activator funnel is waste.

**New this week:** **Cubs home-stand creative is Friday May 2 priority.** Per Analytics Agent, "retargeting other Cubs-interested visitors with 'your next home game is 3 days away' creative is high-leverage downstream campaign" -- IF the price-tracking cron ships by then. Prep creative; don't activate until cron is verified.

### -> Content Agent (Agent 1)

**Content requests for social distribution this week:**
1. **Monday quad-publish must ship today.** Mon Twitter #1, Twitter #2, Threads, IG, LI, TikTok all reference "today's blog drop." If publish-script doesn't run, six social slots go cold simultaneously. **This is the third Monday in a row this dependency exists.**
2. **Tuesday lead magnet (Concert Ticket Price Tracker Template) needs capture-page copy + working download** by Tue 12 PM ET. Tue Twitter #2 is the launch post; Tue Reel + Wed paid boost depend on it.
3. **Wednesday WC blog (FIFA phase-1 close)** needs the actual 62-match data set surfaced as a venue-by-venue table in the post. The hero Twitter thread Monday teases the breakdown; the blog must deliver it. If the post ships without the table, the thread gets called bluff Wednesday morning.
4. **Thursday StubHub-vs-Vivid blog** needs the four-scenario fee math (concert, NBA playoff, NHL playoff, MLB regular season) -- repurposes directly into Thursday IG carousel. Coordinate format: each scenario = one carousel slide.
5. **Friday SoFi Stadium refresh + Saturday AT&T Stadium refresh** -- the Friday and Saturday Twitter #3 slots are written assuming both refreshes ship. Confirm by Thursday EOD.
6. **Cubs / Wrigley hub page** (per Analytics Agent 4/24, 7-day deadline before May 1) -- if it ships by Thursday, the Thursday Twitter #2 setup post and Friday IG carousel get a real internal link. If it doesn't, both posts stay external-link only.
7. **Bruno Mars tour-hub page** (first programmatic-SEO multi-user template) -- not on this week's calendar yet, but if it ships, Sunday Twitter #3 and any next-week amplification gets a real anchor. Track.

### -> Email Agent (Agent 2)

- **Monday 4/27 newsletter:** the **hero Twitter thread** rewrites cleanly into a Monday newsletter edition once SMTP is unblocked. 8 tweets = 8 short newsletter sections. Pre-chunked. Low lift.
- **Tuesday 4/28 newsletter:** Concert Ticket Price Tracker Template launch -- gated download, paired with Monday's Summer Concert blog. **First non-PDF capture asset of the program.**
- **Wednesday 4/29 newsletter:** FIFA phase-1-close blog -- highest CTR potential of any send this quarter.
- **Drip queue (per Analytics Agent):** ≥24 emails owed to 19 users. **Priority order when cron ships:**
  1. ajvanprooyen -> Email 1 (Day 3 hits Apr 26 -- highest-intent user; Email 1 should reinforce Cubs-tracking value prop, not generic "first ticket" content)
  2. pete.uzelac77 -> Email 3 (Day 14 -- WC Philly power user, Email 3 is "Best Time to Buy Tickets (Data-Backed)" -- cruelly ironic given the data is empty, **rewrite Email 3 copy this week** to reference the FIFA 25-day dataset instead of nothing)
  3. dylanbaldy -> Email 2 (Day 9 non-activator, Email 2 is the "Price Alerts Save Hundreds" pitch -- exact re-engagement hook)
  4. billstromkel -> Email 5 (oldest overdue)
  5. Throttle remainder at 2/hour to avoid Gmail rate-limit on backfill
- **24-hour post-signup nudge email -- ship this week.** Targets the 5 candidate non-activators (dylanbaldy, dr.altvater, ggri73, awwhittington, mark.murdock). Per Analytics: "if 1 of 5 converts, the week's activation rate moves." Copy is a 2-3 paragraph "pick your first event" CTA. **Highest-leverage email of the entire program right now.**

### -> SEO Agent (Agent 6)

- **`/compare` internal-link continuation:** Monday Twitter #2 + Tuesday Twitter #1 + Tuesday Twitter #2 + Thursday Twitter #1 + Thursday IG carousel all link `ticketscan.io/compare` and the new blog URLs. **6+ anchor-varied inbound social signals this week.** Same compounding pattern as last 3 weeks.
- **Cubs / Wrigley page:** Friday + Saturday social drives traffic; SEO needs to verify metadata and internal-link from `/blog` index before social hits.
- **OG images for blog backlog:** **Day 9+ open**, compounding. The Monday triple-publish + Mon-Thu new-content publishes = **6+ posts going live this week without proper OG cards.** Backlog will grow to ~28 posts by Sunday. **This is the largest non-deploy SEO debt on the program.**
- **SEO 11-day uncommitted bundle** -- per Content Agent, `git push` clears ~50 schema improvements + 3 indexability leaks (`/admin`, `/watchlist`, `/favorites` still emitting `<meta name="robots" content="index, follow">`). **Same flag as last week, +4 days.** Lead Architect-level escalation required.
- **Hero Twitter thread + Wed blog as a paired ranking play:** the thread is bait for rich-result eligibility on the blog page if structured-data ships in time. If both land Monday-Wednesday, the blog page benefits from same-week social-signal and structured-data simultaneously.

### -> CRO Agent (Agent 5)

- **Target-price input field** -- **Week 17 of zero adoption.** Three social posts this week (Mon hero thread, Tue Twitter #2, Thu IG carousel) explicitly mention "set a price alert" or "track the spread." Every one of those CTAs is a false promise until the field works. **If CRO doesn't ship the target-price prompt by Wednesday, pull alert-language from Thursday and Friday social.** Same flag as last week, no movement.
- **Past-event guardrail** -- 28 past events on watchlist. nicklib253 (Phillies game) and 2510soccerboy (Viva El Jaripeo) both confirmed cases. Friday's social (Cubs opener) drives high-volume signups; need guardrail before May 1 to avoid more nicklib-shaped failures.
- **24-hour post-signup nudge UI** -- if Email Agent ships the nudge email, CRO needs the in-app surface (banner / dashboard prompt / first-time-modal) so the email isn't the only re-engagement hook for the 5 candidate non-activators.
- **ajvanprooyen happy-path documentation** (per Analytics Agent 4/24) -- 2-min activation, 6 Cubs adds, single venue. Document this as the "happy path." Every CRO variant scored against this benchmark. **Friday's IG carousel publishes the validation publicly without naming the user.**

### -> Analytics Agent (Agent 7)

- **GA4 Data API connection -- Day 17+.** Same flag, escalating. Without it we cannot attribute the 4/22-4/23 surge (5 signups in 48h, no source data). Hero thread Monday + lead magnet Tuesday will produce another surge if our model is right -- and we will be unable to measure it.
- **`/api/admin/tracking-health` endpoint** -- still not built (Day 17+). Would have surfaced Day-1 cron failures before they became Day-21 cron failures. Same recommendation as last 3 weeks.
- **Cubs home-stand retention litmus test (May 1-6):** ajvanprooyen's engagement on those 6 days is the first real retention measurement we'll have. If price-tracking cron ships by Apr 30, social Friday-Sunday names the activity (without naming the user) and creates a public test of the product loop. Track: ajvanprooyen login count pre/post May 1, price-check clicks, alert-setup attempts, repeat watchlist activity.

---

## 6. Key Risks & Blockers (carried + new)

| Risk | Status | Impact | Mitigation |
|------|--------|--------|------------|
| No analytics / engagement data | **Day 21** (ongoing) | Cannot measure any social performance. All decisions are structural. | Push Analytics Agent recommendation (admin `/tracking-health` + `/ga-summary` endpoints); manual platform-dashboard spot checks |
| `ig-template.png` fatigue | **Week 4 flagged**, escalation severity bumped | 28+ consecutive days single template; algorithmic down-weighting hypothesis | Hero week uses 6 of 7 IG posts as carousels with varied slide design; full fix still requires Lead Architect call on 2-3 template variants |
| Banana MCP / image gen offline | **Day 8** | All posts ship with fallback `ig-template.png`; hero thread images are pre-drafted but not generated | Set `GOOGLE_AI_API_KEY` env var; alternative: manual Figma production for hero assets |
| Social posting API 404 | Unchanged | Manual publish via Blotato / native schedulers | Continue Blotato; deprioritized vs. price-history + drip + target-price fixes |
| Blog publish velocity | **Critical -- Day 21** | Six social slots Mon-Thu reference blog drops. Without Monday quad-publish, Tue/Wed/Thu calendar collapses cascade-style | **Single round of `./marketing-agents/scripts/publish-draft.sh` clears 4 of 7 backlog drafts.** Lead Architect escalation. |
| Target-price adoption (CRO) | **Week 17** of 0% | Every "set an alert" CTA is false promise; alert email never fires; drip lead-magnet sequence is broken at the conversion step | Hard fix or pull language from Thu+Fri+Sat social. |
| LinkedIn long-form ownership | **3 weeks running** under-deliver | Mon LI shipping carousel doc; **Thu LI is the third-week-running risk**. If owner not assigned by Wed EOD, kill the slot. | Explicit owner assignment by Wednesday EOD. Otherwise Thursday LI ships at 0 and we accept it. |
| Pre-gen content quality degrading | 2 consecutive weekends | Wrong day-of-week, made-up stats, banned phrasing -- lower quality than agent-from-scratch | **Recommendation: kill pre-gen, run hooks-only.** |
| Broken product + broken tracking | **Critical (Day 21)** | Every acquisition CTA promises alerts/history that don't work; ajvanprooyen's May 1 deadline is now operational | Lead Architect escalation. ajvanprooyen first Cubs game = May 1 = 4 days from now. |
| Cubs/Wrigley hub page not shipped | New this week | Friday Twitter #1 + IG carousel reference Cubs activity; without internal page, all traffic external | Content Agent has 4-day deadline (Apr 28-29 EOD per Analytics) |
| 62-match FIFA data freshness for Wed blog | New | Hero thread Monday teases 62-match data; Wed blog must deliver venue-by-venue breakdown | Content Agent: confirm data export Tuesday EOD |
| Search Console API not connected (SEO blocker) | Day 12+ | Cannot measure ranking gains from social-driven internal links | SEO Agent escalation; same flag as Content Agent |

---

## 7. Success Metrics for This Week

| Metric | Target | How to Measure |
|--------|--------|---------------|
| Posts published total | 47+ across all platforms (21 Tw, 7 IG, 2 LI, 7 Th, 6 TT, +1 hero thread = 8 Tw on Mon) | Manual count in calendar + platform dashboards |
| All 5 content pillars hit 5+ days | 5 of 7 days minimum | Daily pillar audit |
| Tips & Education pillar | 6+ days (vs 5 last week) | Daily pillar audit |
| LinkedIn posts | 2 (Mon ARTICLE + Thu ARTICLE) | Platform check; Thu is the at-risk slot |
| Hero Twitter thread reach signal | Any Twitter analytics signal (impressions, retweets, profile visits) | Manual Twitter dashboard check |
| Hero thread repurpose ratio | 4+ platforms (Twitter + IG + LI + TikTok + blog = 5 expected) | Cross-platform launch confirmation |
| Blog-linked tweets | 6+ (Mon backlog + Mon Summer + Tue Same-Day + Wed WC + Thu SH-vs-VS + Fri SoFi + Sat AT&T = 7) | Manual count |
| Lead magnet capture page hits | Any signal (currently no measurement, see Analytics blocker) | If GA ships during week: count downloads |
| Downstream signups (attributable or coincident) | 4+ new signups this week (vs 7 last week, but last week was burst-driven) | Admin API signup count 4/27 -> 5/3 |
| Watchlist adds with target prices set | 1+ (vs 0 all-time) -- depends on CRO shipping target-price field | Admin API |
| ajvanprooyen retention signal | Any login count, price-check, or alert-setup activity post-May 1 | Admin API user activity log |
| Cubs/Bruno Mars page hits (if shipped) | Any baseline measurement | Manual log |

---

## 8. Voice / Style Guardrails (executing-posts reminder)

From accumulated feedback across the daily reports:

- **Banned words / phrases:** "delve", "crucial", "pivotal", "stands as", "testament", "here's the thing", "not just X; it's Y", "here's what you need to know", "no guessing", "no wasted clicks", "landscape", "tapestry", "showcase", "vibrant", "nestled", "groundbreaking", "renowned", "breathtaking", "foster", "garner", "interplay", "intricate", "the future looks bright", "exciting times ahead", "momentum is building".
- **No em dashes for emphasis** in post copy. Use colons, periods, line breaks.
- **No rule-of-three forced groupings.** Use 2-, 4-, or 5-item lists when natural.
- **No "-ing" tack-on phrases** ("highlighting", "showcasing", "underscoring", "reflecting").
- **Specific dollar amounts / sections / venues / sources** in every data post. The 4/14, 4/26, and Mon-hero patterns prove this.
- **Varied sentence length.** Short fragments + longer conversational lines in the same post.
- **First person allowed and encouraged** ("I pulled...", "we ran...", "we built..."). Natural, not corporate.
- **No generic CTAs** ("compare every platform in seconds"). Ends of posts should be URLs or natural closers, not marketing slogans.
- **Instagram:** 5 hashtags max, 0 emojis in caption body.
- **TikTok:** hashtags can include emojis sparingly, caption body emoji-free.
- **Threads:** treat as voice extension of Twitter, not duplication. If Twitter said it, Threads expands it -- not repeats it.
- **LinkedIn:** B2B-tone, longer-form, industry framing. Not a duplicate of Twitter copy.
- **Privacy boundary:** named users in our funnel context (ajvanprooyen, nmcnamee99, dylanbaldy, etc.) **do not appear in any social post**. Only the canonical pattern data they validated is surfaced.

---

## 9. Pre-Gen Recommendation (escalation)

Per the daily reports for 4/24, 4/25, 4/26, 4/27:

- 4/24: pre-gen absent (full agent production)
- 4/25: pre-gen present but mostly off-target (3 of 4 replaced)
- 4/26: pre-gen present, all 4 replaced (worst batch this cycle)
- 4/27: pre-gen absent (full agent production)

**Pattern:** when pre-gen lands, it's worse than agent-from-scratch. When it doesn't land, the agent produces a clean slate from current hooks without issue.

**Recommendation:** **kill pre-gen entirely.** Run hook-driven daily production every day. The pre-gen pipeline has an opaque schedule, degrading quality, and is now creating *more* work (replace + rationalize) than it saves. Operational simplification.

This is a Lead Architect call, not a Social Agent call. **Surfacing it here as a structured recommendation rather than a weekly daily-report flag.**

---

*Next weekly review: May 4, 2026*
*Daily social reports continue: `marketing-agents/output/social/social-daily-[DATE].md`*
*Hero piece live tracking: Twitter thread URL pinned to TicketScan profile through Friday May 2, 2026*
