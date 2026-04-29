# Social Posts -- 2026-04-29 (Wednesday)

## Content Calendar (6 posts queued)

### Twitter/X (3 posts)

1. **X -- WC T-43 Data Headline (9:00 AM ET / 13:00 UTC)**
   > 27 days of FIFA resale data. 58 group-stage matches tracked across FIFA, StubHub, SeatGeek, fees in. FIFA priciest on 38 of them. 65.5%. Median spread when FIFA loses: $84 per ticket. 43 days to kickoff. ticketscan.io/world-cup-2026

2. **X -- WC T-43 Country Rule (1:00 PM ET / 17:00 UTC)**
   > Where FIFA actually wins on World Cup 2026 resale: 3 matches at Mexican host venues (Azteca, Akron, BBVA). 2 at BC Place. 1 at BMO. US matches? FIFA loses two-thirds of the time across our 58-match sample. Country first, platform second. ticketscan.io/world-cup-2026

3. **X -- WC T-43 Hard Rock Spread (5:00 PM ET / 21:00 UTC)**
   > Biggest single gap we've documented in 27 days of World Cup 2026 tracking: Brazil group-stage at Hard Rock Stadium. FIFA Category 3 listed at $612 fees-in. Same seat band on StubHub: $331. That's $281. Same view, same hour. ticketscan.io/world-cup-2026

### Instagram (1 post)

4. **Instagram -- WC T-43 Country Rule Long-Form (11:00 AM ET / 15:00 UTC)**
   > Forty-three days from World Cup 2026 kickoff. Where things actually stand on tickets right now.
   >
   > We've been pricing the same group-stage matches across FIFA resale, StubHub, and SeatGeek for 27 days. Three checks a day, fees in.
   >
   > 58 matches with comparable data. FIFA was the most expensive option on 38 of them. That's 65.5%, basically unchanged from two weeks ago when it was 66.7%.
   >
   > When FIFA loses, it loses by a median of $84 per ticket. The biggest single gap we've recorded: Brazil group-stage at Hard Rock Stadium, FIFA Category 3 at $612 fees-in vs StubHub at $331. Two hundred eighty-one bucks on the same view.
   >
   > Where FIFA wins: Mexico City, Guadalajara, Monterrey, Vancouver, Toronto. Six of the 58 matches, every one of them at a non-US venue.
   >
   > The rule for the next 43 days is country first, platform second. Match at Azteca or BC Place, check FIFA first. Match at MetLife, AT&T, SoFi, Hard Rock, anywhere else in the US, check FIFA last.
   >
   > Link in bio.
   >
   > #WorldCup2026 #FIFAtickets #WorldCupTickets #TicketScan #FIFA

### Threads (1 post)

5. **Threads -- WC T-43 Country Rule (1:30 PM ET / 17:30 UTC)**
   > World Cup 2026 resale, 43 days out. Where FIFA actually wins matters more than people think.
   >
   > 27 days of cross-platform pricing on 58 group-stage matches. FIFA's official resale was the most expensive option on 38 of them. Two-thirds of the sample.
   >
   > The six matches where FIFA wins are clustered in a specific way: three at Mexican venues (Estadio Azteca, Akron, BBVA), two at BC Place in Vancouver, one at BMO in Toronto. Every one of them outside the United States.
   >
   > The reason is supply. StubHub and SeatGeek are US-focused. Their inventory in Mexico and Canada is thin enough that resale drifts up toward FIFA's listing instead of undercutting it.
   >
   > So the practical rule for the next 43 days is country first, platform second. Mexico match: check FIFA first. US match: check FIFA last. ticketscan.io/world-cup-2026

### TikTok (1 post)

6. **TikTok -- WC T-43 POV (7:00 PM ET / 23:00 UTC)**
   > POV: it's 43 days from World Cup 2026 kickoff and you're still trying to buy a ticket
   >
   > The lottery closed weeks ago. FIFA's Last-Minute Sales Phase has been live since April 1. The official resale has been live since April 2. Both run on dynamic pricing.
   >
   > 27 days of cross-platform tracking across FIFA resale, StubHub, and SeatGeek. 58 group-stage matches with comparable data. FIFA was the most expensive option on 38 of them. 65.5% of the sample.
   >
   > When FIFA loses, the median spread is $84 per ticket. The biggest gap we've watched: Brazil group-stage at Hard Rock Stadium. FIFA Category 3 at $612 fees-in. StubHub at $331. Same view, same hour. $281 difference.
   >
   > Where FIFA actually wins: 3 matches at Mexican venues, 2 at BC Place in Vancouver, 1 at BMO in Toronto. Every winner is non-US.
   >
   > The rule for the next 43 days. Country first, platform second. Match at Azteca or Vancouver, check FIFA first. Match anywhere in the US, check FIFA last. Compare every time.
   >
   > Link in bio.
   >
   > #WorldCup2026 #FIFAWorldCup #WorldCupTickets #FIFAtickets #TicketHack #TicketScan #TicketTok #WorldCup

## Publishing Status
- **API posting**: Admin social endpoints unchanged (404 on production as of 4/24). Content saved to `content-calendar.json` for downstream publishing.
- **Image generation**: Banana MCP tools (`gemini_generate_image`, `set_aspect_ratio`) still not surfaced through ToolSearch. `select:gemini_generate_image,set_aspect_ratio` returns "No matching deferred tools found." **Day 10** of the same blocker (since 4/19). Plugin and `banana-claude:banana` Skill are listed but MCP tool handles aren't discoverable. Fallback `ig-template.png` applied to all three Twitter posts, Instagram, and Threads per spec. TikTok has no image per spec.
- **Regeneration prompts**: Pre-drafted below for one-shot regeneration once banana comes online.

## Content Pillars Hit Today
- [x] World Cup 2026 (all 6 posts -- Twitter #1, Twitter #2, Twitter #3, Instagram, Threads, TikTok)
- [x] Price Intelligence (Twitter #1, Instagram, Threads, TikTok carry the 65.5% / $84-median data anchor)
- [x] Savings Wins (Twitter #3, Instagram, TikTok carry the Hard Rock $612 vs $331 = $281 real example as the credibility anchor)

Today's slate is the second six-of-six single-hook concentration in three days (4/28 was Hook 1 Same-Day NBA, today is Hook 1 World Cup T-43). Both intentional. Today's case is even cleaner than 4/28 because the WC T-43 piece is the strongest news-pegged publish of the week and the FIFA resale data has been pre-seeded across nine consecutive Tuesday and Wednesday posts since 4/12. The audience that has been seeing the daily FIFA refresh now arrives at the full T-43 framework already primed on the 65.5% number, the $84 spread, and the country-of-venue split.

## Changes from Pre-Generated Posts
**No pre-generated entries existed for 2026-04-29.** All six posts produced from scratch against today's content hooks (Hook 1 WC 2026 T-43 piece in production). Same condition as 4/24, 4/25, 4/27, 4/28. Five out of the last six days with zero pre-gen content. Pattern is now a steady-state observation, not a flag -- the agent has run from hooks alone every day for the past week and the slate quality is materially better than the historical pre-gen output. Re-flagging the operational call from yesterday's log: skip pre-gen entirely going forward.

## Hook Mapping
- **Hook 1 (WC 2026 T-43, news-pegged in-production blog `world-cup-2026-general-sale-closing-april-2026`)** -> All 6 posts. Twitter #1 leads with the 27-day data headline (58 matches, 65.5%, $84 median). Twitter #2 carries the country-of-venue rule (Mexico/Canada FIFA wins, US FIFA loses). Twitter #3 carries the Hard Rock $281 single-gap example. Instagram delivers the canonical long-form with the data, the credibility anchor, and the country rule. Threads adapts the country rule into conversational voice with the supply-side reasoning. TikTok extends Threads with POV framing and the full 27-day data set. Six-of-six on a single hook, intentional given (a) the news-pegged T-43 publish window, (b) nine consecutive Tuesday/Wednesday FIFA refresh posts since 4/12 that have already primed the audience on the data, and (c) Hook 1 in today's content-hook.md being the only content angle on the table -- Hooks 2/3/5 are operational/cross-agent, Hook 4 is a forward-flag for tomorrow.
- **Hook 2 (Day 22 publish-velocity zero-streak, queue now 10 deep with today's draft)** -> Lead Architect escalation, not a content angle. Flagged in Notes below. The 10-draft queue means today's WC T-43 social slate may publish into a vacuum if the blog itself doesn't ship -- mitigated by linking to `/world-cup-2026` (live page) instead of the in-production blog URL on every external link.
- **Hook 3 (SEO Ask 2 FAQ audit Day 2 overdue)** -> Cross-agent debt, not a content angle. Flagged in Notes below.
- **Hook 4 (Tomorrow's StubHub vs Vivid Seats blog)** -> Forward-flag. Tomorrow's social slate pivots back to comparison-series voice if the SH-vs-VS blog ships Thursday.
- **Hook 5 (nmcnamee99 case one-week anniversary, funnel-defense)** -> Cross-agent intelligence, not a content angle. Flagged in Notes below.

Today's slate is unusually concentrated on a single hook (six of six posts on Hook 1) because today is the production day for the news-pegged WC T-43 blog and the FIFA T-43 publish window is the highest-value news peg of the week. The audience that sees today's six posts in sequence will arrive at the blog (assuming mid-afternoon ET publish) with the full framework already primed -- 27-day data baseline, 65.5% headline, $84 median spread, $281 Hard Rock single-gap, country-of-venue rule. The pattern matches the 4/28 six-of-six Same-Day NBA pre-seed but is even tighter because nine prior FIFA refresh posts have done the long pre-seed work since 4/12.

## Scheduling
- Twitter: 9 AM / 1 PM / 5 PM ET per spec (13:00 / 17:00 / 21:00 UTC).
- Instagram: 11 AM ET per spec (spec allows 11 AM or 6 PM; chose 11 AM for lunch-window engagement, matches every Mon-Sun slot since 4/22).
- Threads: 1:30 PM ET, 30 min after Twitter #2 per spec (adapts the country-rule framing into conversational voice with the supply-side reasoning expanded).
- TikTok: 7 PM ET per spec (spec allows 12 PM or 7 PM; chose 7 PM for evening engagement window and consistency with the past three weeks of TikTok timing).

## Image Prompts (queued for when banana MCP comes online)

All prompts follow the brand pillar mapping. 16:9 for Twitter, 1:1 for Instagram and Threads. TikTok gets no image per spec. Target save path: `web/public/social/generated/YYYY-MM-DD-platform-topic.png`.

- **Tw #1 (WC T-43 Data Headline)** -- Price Intelligence / UI-Web (16:9):
  > "A clean social media data card on dark navy (#0a1628) background. Bold white sans-serif text '65.5%' centered hero. Smaller white text 'FIFA PRICIEST' above and 'OF 58 MATCHES' below. A green (#22c55e) downward arrow accent in the right third. Minimal flat design, no photography, no gradients. Commercial infographic for a ticket comparison app."

- **Tw #2 (WC T-43 Country Rule)** -- Price Intelligence / UI-Web (16:9):
  > "A minimal data visualization card on dark navy (#0a1628) background. Bold white sans-serif text 'COUNTRY FIRST' centered as the hero label, with 'PLATFORM SECOND' in green (#22c55e) below it. Smaller white subtext '43 DAYS OUT' at the bottom. Clean flat design, no photography. Commercial infographic for a ticket comparison app."

- **Tw #3 (WC T-43 Hard Rock Spread)** -- Savings Wins / Hybrid (16:9):
  > "A large stadium interior at twilight, shot from the upper deck looking down at the empty pitch, dramatic floodlight wash, shallow depth of field with the empty seats in the foreground out of focus. Bold white text '$281' overlaid in the center with smaller white subtext 'ON THE SAME VIEW' below. Captured with Canon EOS R5, 35mm lens at f/1.8. Commercial social media photography for an event ticket app."

- **IG (WC T-43 Country Rule Long-Form)** -- World Cup 2026 / Atmospheric (1:1):
  > "A large soccer stadium exterior at golden hour, FIFA World Cup 2026 flags and banners visible, fans walking toward the entrance gates. Warm natural sunlight, shallow depth of field on the crowd. Captured with Sony A7R IV, 24mm wide-angle lens at f/2.8. Sports editorial photography for a magazine cover."

- **Threads (WC T-43 Country Rule)** -- Price Intelligence / UI-Web (1:1):
  > "A minimal data visualization card on dark navy (#0a1628) background. Two-column layout. Left column white sans-serif: 'MEXICO CANADA' header, 'CHECK FIFA FIRST' subtext below. Right column green (#22c55e) sans-serif: 'UNITED STATES' header, 'CHECK FIFA LAST' subtext below. Clean flat design. Commercial infographic for a ticket app."

All prompts keep embedded text under 25 chars per element, use only brand hex colors (navy #0a1628, green #22c55e, white #ffffff), and avoid banned terms ("8K", "masterpiece", "ultra-realistic", "high resolution", "hyper-detailed"). Tw #1, Tw #2, and Threads use UI/Web data-visual mode (Price Intelligence pillar). Instagram uses Atmospheric photography (World Cup 2026 pillar) per spec, with generic "soccer stadium" framing instead of a specific real venue name to avoid IMAGE_SAFETY rejections. Tw #3 uses Hybrid (Savings Wins pillar) with generic "large stadium interior" framing for the same reason.

## Voice Check
- **No banned words**: no "delve", "crucial", "pivotal", "landscape", "tapestry", "testament", "underscore", "showcase", "vibrant", "nestled", "groundbreaking", "renowned", "breathtaking", "foster", "garner", "interplay", "intricate", "enhancing", "encompassing", "cultivating".
- **No banned phrases**: no "stands as", "serves as", "marks a pivotal moment", "reflects broader trends", "is a testament to", "It's not just X; it's Y", "Not only...but also", "Here's the thing", "Let's break this down", "Here's what you need to know", "No guessing", "No wasted clicks", "The real question is", "At its core", "What really matters", "could potentially", "it might be argued".
- **No em dashes for emphasis**: all emphasis done with periods, commas, and colons. Hyphens used only for compound modifiers ("US-focused", "fees-in", "group-stage", "non-US", "T-43") and never for sentence-level emphasis. Zero em dashes in post copy.
- **No forced rule-of-three**: Tw #1 lists three platforms (FIFA, StubHub, SeatGeek) -- actual data structure, not stylistic flourish. Tw #2 lists three Mexican venues (Azteca, Akron, BBVA) -- actual data, not stylistic. IG lists five cities for FIFA wins (Mexico City, Guadalajara, Monterrey, Vancouver, Toronto) and four US venues (MetLife, AT&T, SoFi, Hard Rock) -- both actual data, not stylistic three-counts. Threads structure carries the same three Mexican venues + two BC Place + one BMO -- the actual 6-match breakdown, not a triple. TikTok carries the same data points.
- **No "-ing" tack-ons**: no "highlighting", "showcasing", "underscoring", "reflecting". "Tracking" appears as standard noun usage. "Walking toward" appears in IG image prompt only, not in post copy. Imperatives like "Compare every time" are direct, not descriptor tack-ons.
- **No generic wrap-ups**: no "the future looks bright", "exciting times ahead". URLs placed naturally at end of each Twitter and Threads post. "Country first, platform second" at end of Tw #2 is the actual rule, opinionated and specific. "Compare every time" at end of TikTok is imperative, not generic.
- **Varied sentence length**: short fragments ("Two-thirds of the sample.", "Same view, same hour.", "65.5%.", "$281 difference.", "Country first, platform second.", "Link in bio.") alongside longer conversational lines. Tw #1 opens on a 5-word fragment, Tw #2 opens on a noun phrase, Tw #3 opens on a long descriptive clause, IG opens with a 7-word headline, Threads opens with a noun-phrase + assertion, TikTok opens with the POV fragment.
- **Specific numbers on every post**: 27 days, 58 matches, 38, 65.5%, $84, 43 days (Tw #1); 3 venues, 2 BC Place, 1 BMO, 58-match, two-thirds (Tw #2); 27 days, $612, $331, $281 (Tw #3); 27 days, 58 matches, 38, 65.5%, 66.7%, $84, $612, $331, "two hundred eighty-one bucks" (IG -- spell-out used per spec for variety); 27 days, 58 matches, 38, two-thirds, 6 matches (Threads); 27 days, 58 matches, 38, 65.5%, $84, $612, $331, $281, 43 days (TikTok).
- **Opinionated framing**: "FIFA loses" (Tw #1), "Country first, platform second" (Tw #2), "Same view, same hour" (Tw #3), "matters more than people think" (Threads), "every winner is non-US" (TikTok). Every post takes a clear position.
- **First person used naturally**: "We've been pricing" (IG), "we've recorded" (IG), "we've documented" (Tw #3), "we've watched" (TikTok). First person used for credibility on data claims, not forced where third-person observational works.
- **URL placement natural**: ticketscan.io/world-cup-2026 at end of each X post and Threads post without CTA slogan. Instagram and TikTok use "Link in bio" per platform convention.
- **Spell-out variety**: IG uses "Two hundred eighty-one bucks" instead of "$281" once for the brand-voice variety the spec calls for. Other posts retain "$281" for compactness.
- **Instagram constraints**: exactly 5 hashtags, 0 emojis (brand guideline: max 5 hashtags, max 2 emojis).
- **TikTok hashtags**: 8 hashtags in the TikTok caption, emoji-free caption body.
- **Final self-check pass**: re-read each post asking "person or AI?" -- rhythm varies, prices/dates/venues are specific, openings differ (data fragment on Tw #1, noun-phrase on Tw #2, descriptive clause on Tw #3, headline framing on IG, assertion on Threads, POV on TikTok). The Hard Rock $612 vs $331 example carries across Tw #3, IG, and TikTok deliberately as the credibility anchor (real example > round-number estimate). The country-of-venue rule carries across Tw #2, Threads, and TikTok deliberately as the audience-takeaway anchor.

## Notes
- **Today's Hook 1 alignment is the entire slate**: Six of six posts pre-seed the WC T-43 piece. Second consecutive day with full single-hook concentration (4/28 was Same-Day NBA, today is World Cup). Both intentional given news-pegged blog production. Today's case is supported by nine prior FIFA refresh posts since 4/12 that have already primed the audience on the data lineage -- the 65.5% figure today is a meaningful data-point delta from the 66.6% on 4/22 and the 66.1% on 4/27, and the audience has seen each of those refreshes in sequence.
- **Operational escalation (Hook 2)**: Day 22 publish-velocity zero-streak. With today's WC draft, the unshipped queue is now 10 drafts: 4/8, 4/14, 4/15, 4/16, 4/21, 4/22, 4/23, 4/27, 4/28, 4/29. Three consecutive Sunday plans have opened with "PUBLISH THE BACKLOG" without execution. Today's WC T-43 piece is the strongest news-pegged publish of the week and is going into a pipeline that hasn't moved in three weeks. **If the queue clears Friday morning**, the WC piece still hits a useful chunk of its T-43 search-volume window. Past Friday, the freshness curve starts decaying fast. The social slate today links to `/world-cup-2026` (live page) on every external link, not to a blog URL that doesn't exist yet -- so the slate retains standalone value if the blog never ships, but loses the launch-amp multiplier if it doesn't.
- **Cross-agent obligation flag (Hook 3)**: SEO Ask 2 (FAQ audit, 16 questions, 40-100 words each) is now Day 2 overdue. Today's content-hook.md hard-recommends Thursday morning as the new ship slot ahead of the SH-vs-VS comparison piece. Not a Social Agent task but worth re-flagging here so the daily output is the centralized record.
- **Funnel-defense signal (Hook 5)**: nmcnamee99 case hits one-week anniversary today. Yesterday's lilianamasyrubi signup at 05:24 UTC broke the 60+ hour signup zero-streak. The platform is converting top-of-funnel without the content engine pulling weight. Once the content engine starts pulling weight (publish backlog clears), the same vector should compound. Today's social slate doubles down on Hook 1 to amplify whatever publish does land mid-afternoon -- if the blog ships, the social pre-seed multiplies the immediate Day-1 traffic bounce.
- **Tomorrow's slot fight (Hook 4)**: The SH-vs-VS comparison piece is tomorrow's content load and it's heavier production than today's WC piece. Today's content-hook.md hard-recommends the morning go to the FAQ audit (Hook 3) and the SH-vs-VS draft after lunch. Tomorrow's social slate pivots back to comparison-series voice if SH-vs-VS ships -- the third installment in the Q2 comparison series after the 4/16 best-comparison-sites overview and the 4/23 TM-vs-SG fees piece.
- **Pre-gen status today**: ZERO pre-gen entries existed for 4/29. Five out of the last six days with no pre-gen content (4/24, 4/25, 4/27, 4/28, 4/29). Pattern is steady-state. Operational call from yesterday's log stands: skip pre-gen entirely going forward, run from hooks every day.
- **Backup if a post needs to swap out**:
  - NBA Round 1 elimination-game pricing data from Tuesday Game 5 results. If Tuesday Game 5 produced a clean fee-flip story across multiple matchups, reserve for Twitter #2 if the country-rule framing produces less engagement than a same-day NBA continuation.
  - NHL Round 1 pricing data from Wednesday Game 5/6 if the slate produces a cleaner story than the WC country-rule. Lower probability than NBA backup.
  - Same-Day NBA Playoff Tickets blog launch amplification post -- if yesterday's blog publishes Wednesday morning instead of Tuesday afternoon, swap the Threads post (1:30 PM ET) for a delayed launch-amplification version that links the new blog URL directly. Threads is the natural slot for that swap given its 1:30 PM ET timing.

## Tomorrow Ideas (Thursday 2026-04-30)
- **StubHub vs Vivid Seats blog launch amplification (highest priority if Hook 4 blog ships Thursday afternoon)** -- third installment in the Q2 comparison series. Twitter morning post with the Vivid Seats fee math headline (whatever the blog produces as the topline number). IG carousel with the FanProtect vs 100% Buyer Guarantee comparison. Threads conversational adaptation. TikTok POV on "the StubHub vs Vivid Seats math is closer than the marketing makes it look."
- **WC 2026 T-42 refresh (if Hook 4 blog doesn't ship Thursday)** -- 42-day countdown with whatever the daily FIFA data shows. If the 65.5% figure moves more than 1 percentage point from today's reading, refresh post anchored on the new number. If the figure is flat (sixth consecutive check in the 65-67 band), single Twitter post on the consistency itself ("ten consecutive checks in the same band, the FIFA-priciest pattern is stable").
- **NBA Round 1 elimination-week wrap (if Tuesday/Wednesday Game 5 results produce clean cross-series data)** -- Thursday afternoon Twitter post on the platform-windows pattern from Tuesday/Wednesday G5/G6 actuals. Reads as a follow-up to 4/28 Tw #2.
- **NHL Round 1 G6/G7 wrap-up** -- if the Round 1 NHL slate hits Game 6/7 territory across Oilers, Maple Leafs, Caps/Pens with clean fee-flip data, Thursday post comparing the spread vs the NBA Round 1 same-stage data.
- **Day 23 publish-streak escalation post (internal only, NOT social)** -- if today's WC blog slipped to Thursday or later, 23-day publish-velocity zero-streak deserves a hard escalation to Lead Architect. Not for social.

## Handoffs
- **Email Agent (Thursday 2026-04-30)**: Today's WC T-43 social slate primes the Wednesday/Thursday newsletter. Thursday's send can lean on (a) the Hook 1 blog if it published Wednesday with a "we just shipped the 27-day data" framing, or (b) the 65.5% headline plus the country-of-venue rule with a "World Cup 2026 is 42 days out, here's what 27 days of cross-platform tracking actually shows" countdown framing. The Hard Rock $612 vs $331 example is the strongest single credibility anchor for any WC-themed newsletter this week.
- **SEO Agent**: Same flag as past week -- the unshipped 17-file SEO bundle still needs to deploy for the AggregateOffer `lowPrice` to populate from the new section data. Day 13 of SEO Day-10 escalation. Single `git push` clears most of the structured-data debt. SEO Ask 2 (FAQ audit) is now Day 2 overdue per Hook 3; today's content-hook.md hard-recommends Thursday morning as the ship slot. The SEO bundle and the FAQ audit shipping together Thursday would clear the largest cross-agent debt of the week.
- **Content Agent**: Today's six-post Hook 1 amplification slate is the second consecutive single-hook concentration (4/28 Same-Day NBA, today WC T-43). The audience hits the WC T-43 blog (assuming mid-afternoon ET publish) with the full framework already primed -- 27-day data baseline, 65.5% headline, $84 median spread, $281 Hard Rock single-gap, country-of-venue rule. If the WC blog ships and the SH-vs-VS blog ships Thursday, that's the first back-to-back consecutive same-day publish since the 22-day zero-streak began -- worth flagging as the streak-break event if it lands. If the blog backlog clears Friday in a single push (10 drafts in one batch), the social slate this week becomes the strongest Day-0/Day-1 traffic multiplier of the year.
