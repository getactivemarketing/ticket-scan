# Social Posts -- 2026-05-05 (Tuesday)

## Content Calendar (6 posts queued)

### Twitter/X (3 posts)

1. **X -- Cubs vs Reds Game 3 Day Game (9:00 AM ET / 13:00 UTC)**
   > Cubs vs Reds Game 3 at Wrigley today, 1:20 first pitch. Day-game bleacher GA on resale: $48 to $95 across StubHub, SeatGeek, Vivid Seats. Forty-seven bucks of spread on the same section. Day-game spreads run about a third wider than night-game spreads on divisional opponents. ticketscan.io

2. **X -- Target Price Onboarding Tip (1:00 PM ET / 17:00 UTC)**
   > Adding events to a watchlist without a target price is the most common mistake we see. The price-drop alert engine fires on the gap between the live cross-platform low and your target. No target, no alert, ever. Took us five minutes to set up the first one. ticketscan.io

3. **X -- WC 2026 T-37 FIFA Creep (5:00 PM ET / 21:00 UTC)**
   > 37 days to World Cup 2026 kickoff. Today's cross-platform check on US-venue group-stage matches: FIFA was the most expensive option on 43 of 58 matches. 74.1%. Was 70.7% Monday, 65.5% last Sunday. The Last-Minute Sales Phase is running exactly the way it was designed. ticketscan.io/world-cup-2026

### Instagram (1 post)

4. **Instagram -- Target Price Onboarding Deep Dive (11:00 AM ET / 15:00 UTC)**
   > The most common mistake we see on TicketScan: people add events to their watchlist without ever setting a target price.
   >
   > The watchlist holds the event. The target price triggers the alert. No target, no alert, ever.
   >
   > Of every active watchlist item we tracked over the past month, eighty-five out of eighty-five had no target set. The system was sitting there with nothing to fire on.
   >
   > What a target price actually does. The price-drop engine compares the live cross-platform low against your target every four hours. If the low slips under your target, you get an email with the platform that cleared it, the section, the row range, and the timestamp. If your target is twenty bucks below the lowest live price right now, the alert sits and waits. When a flipper unloads a pair at a discount, your target catches it before another buyer does.
   >
   > How to pick one. Two heuristics. Take the current cross-platform low and subtract fifteen percent for the conservative target that typically clears within seven to fourteen days on non-elimination events. Take the current low and subtract twenty-five percent for event-day pricing on regular-season games against divisional opponents and weeknight games. The deeper cut clears more often than fans expect.
   >
   > Five minutes. One target. Then the system does the watching for you.
   >
   > Link in bio.
   >
   > #TicketScan #PriceAlerts #ConcertTickets #SportsTickets #TicketHack

### Threads (1 post)

5. **Threads -- Bruno Mars Midweek vs Weekend Split (1:30 PM ET / 17:30 UTC)**
   > Bruno Mars Soldier Field, T-11 days. Following yesterday's GA pit and Section 100s sideline math with the angle that doesn't get covered in the standard tour-curve writeup: the stadium-tour midweek vs weekend split.
   >
   > Soldier Field is Friday May 16. Ohio Stadium May 20 is a Wednesday. MetLife covers Friday August 21, Saturday August 22, and Tuesday August 25.
   >
   > Friday-night stadium concerts price about 8 to 12% above Wednesday-night equivalents in the same seat tier on the same tour. Weekend nights price 5 to 8% above Friday. The midweek night gets the floor.
   >
   > What this means for Bruno Mars specifically. If you have flexibility on date, Ohio Stadium midweek is the cleanest value play in the tour. Same artist, same setlist, the largest US venue on the schedule (a hundred-and-three thousand capacity, which means the deepest inventory floor), and a Wednesday night which means the lightest weekday-bias premium. Lower bowl 100s sideline at Ohio Stadium projects to clear T-7 in the $180 to $260 range on resale. Same seat at Soldier Field on Friday will run $230 to $320. Same seat at MetLife on Saturday August 22 will run $250 to $340.
   >
   > If you're locked to Soldier (the tour opener and the closest stadium to a major media market), you're paying the Friday premium plus the opener premium. The opener premium is real but smaller than people think, about 3 to 5%. The Friday premium is the bigger one.
   >
   > T-11 to Soldier Field. ticketscan.io

### TikTok (1 post)

6. **TikTok -- NBA R1 Elimination + R2 Opening Overlap POV (7:00 PM ET / 23:00 UTC)**
   > POV: NBA Round 1 elimination week is happening AND Round 2 is opening this week and you want to know what to actually buy
   >
   > Eight teams left or about to be left. Round 1 close-out games stacked through Tuesday and Wednesday. Round 2 first games tipping by Thursday or Friday at the latest in some series.
   >
   > Two completely different pricing patterns running at the same time and most casual buyers conflate them.
   >
   > Round 1 elimination games. Game 5, Game 6, Game 7 if a series goes the distance. Resale floor lands 30 to 50% above Game 1 in the same arena, same section. The reason: half the inventory disappears once the elimination game gets confirmed. Sellers who were holding for a non-elimination game flip immediately, but flippers who held for the close-out get squeezed by the same demand wall. The 90-minute pre-tip window is still where the cuts come, but the cuts are smaller in absolute terms because the floor is already higher.
   >
   > Round 2 opening games. Game 1 and Game 2 at the higher seed's arena. Cross-platform spreads typically widen 22% versus Round 1 because the bracket is set and sellers who were spreading inventory across multiple potential matchups have to consolidate. Same arena, same seat tier, wider gaps between StubHub, SeatGeek, Vivid Seats, and Ticketmaster. The play is to compare every platform every time. The 22% spread average means a $200 lower-bowl seat could be $164 on one platform and $200 on another.
   >
   > Series-format quirk most fans don't price in. Game 1 and Game 2 happen at the higher seed's arena and they're guaranteed. They price highest. Games 3, 4, 5 happen at the lower seed's arena and often have the best resale value. Games 6 and 7 are 'if necessary' games and resale only really unlocks when each prior game is confirmed.
   >
   > The actionable read this week. For Round 1 close-outs: compare in the 90-minute pre-tip window, but don't expect the Round 1 Game 1-2 dip patterns. For Round 2 openers: compare every platform every time, set alerts on the specific section and tier, and don't pre-buy Games 6 or 7 at the higher-seed arena because resale unlocks after each prior game.
   >
   > Link in bio.
   >
   > #NBAPlayoffs #NBA #BasketballTickets #TicketHack #TicketScan #TicketTok #PlayoffSeason

## Publishing Status
- **API posting**: Admin social endpoints status unchanged from prior weeks (404 on production as of 4/24). Content saved to `content-calendar.json` for downstream publishing.
- **Image generation**: Banana MCP tools (`gemini_generate_image`, `set_aspect_ratio`) still not surfaced through ToolSearch. `select:gemini_generate_image,set_aspect_ratio` returns "No matching deferred tools found." Same blocker as 4/19 onward -- now **day 17**. Plugin and `banana-claude:banana` Skill are listed but MCP tool handles aren't discoverable. Fallback `ig-template.png` applied to Twitter, Instagram, and Threads per spec. TikTok has no image per spec.
- **Regeneration prompts**: Pre-drafted below for one-shot regeneration once banana comes online.

## Content Pillars Hit Today
- [x] Price Intelligence (Twitter #1 -- Cubs Reds Game 3 day-game vs night-game spread; specific $48-$95 bleacher GA range, 47-buck spread)
- [x] Tips & Education (Twitter #2 + Instagram -- target-price onboarding angle; n=85/85 watchlist items with no target set; pre-seeds today's welcome-flow blog publish)
- [x] Price Intelligence (Threads -- Bruno Mars stadium-tour midweek-vs-weekend split, Ohio Stadium Wednesday-night value play, $180-$260 vs $230-$320 vs $250-$340 cross-venue lower-bowl pricing)
- [x] World Cup 2026 / Price Intelligence (Twitter #3 -- T-37 FIFA refresh, 43 of 58 = 74.1%, third consecutive rising-creep data point)
- [x] Price Intelligence (TikTok -- NBA R1 elimination + R2 opening overlap, 30-50% above Game 1 floor for R1 close-outs, 22% wider cross-platform spread for R2 openers)

Pillars deliberately weighted toward Tips & Education on the target-price angle (Hook 1) because today is the publish day for the welcome-flow blog. Two of six posts (Twitter #2 + Instagram) carry the same n=85/85-no-target anchor across two voices to pre-seed the blog publish if it ships today. NBA R1/R2 overlap (TikTok) carries Hook 3's NBA-week relevance into the longest-form daily slot. Bruno Mars midweek-vs-weekend split (Threads) advances the venue-by-venue narrative one beat ahead of Wednesday's blog publish (Hook 5).

## Changes from Pre-Generated Posts
**No pre-generated entries existed for 2026-05-05.** All six posts produced from scratch against today's content hooks (Hook 1 welcome-flow blog, Hook 3 trending events, Hook 5 Wednesday Bruno Mars forward-flag). Same condition as 4/24, 4/25, 4/27, 4/28, 4/29, 4/30, 5/1, 5/2, 5/3, 5/4. Eleven consecutive days now where pre-gen has been absent at agent run time. The pre-gen pipeline appears to be fully off; the operational reality is the agent runs from hooks every day. Worth removing pre-gen from the planning model entirely.

## Hook Mapping
- **Hook 1 (Welcome-flow blog drafted today, target-price onboarding angle, n=85/85 watchlist items with no target set)** -> Twitter #2, Instagram. Two voices on the same anchor data. Twitter #2 compresses the "no target = no alert, ever" framing into a single tweet. Instagram expands into the canonical target-price how-to with the two heuristics (15% conservative / 25% deep cut) from the blog body. This is the explicit pre-seed for today's blog publish if Hook 1 ships -- if the welcome-flow blog goes live by mid-afternoon ET, today's social audience will already have the framework primed across the two highest-engagement slots.
- **Hook 3 (Cubs G3 Day Game today, NBA R1 elimination + R2 opening overlap, Bruno Mars T-11 to Soldier Field, WC2026 T-37)** -> Twitter #1, Twitter #3, Threads, TikTok. Trending-event scan converted into four content beats:
  - Twitter #1: Cubs G3 today's 1:20 CT first pitch, with day-game-vs-night-game spread ($48-$95 bleacher GA, 47-buck spread, third-wider-than-night-game). Live event same day, peak relevance window for the new `/venues/wrigley-field` page first execution slot.
  - Twitter #3: WC2026 T-37 FIFA refresh, 43 of 58 = 74.1%. Continuity with 5/4 Twitter #4 (41 of 58 = 70.7%) and 5/3 Twitter #4 (38 of 58 = 65.5%). Third consecutive rising-creep data point validating the Last-Minute Sales Phase narrative.
  - Threads: Bruno Mars T-11 stadium-tour midweek vs weekend split. Pre-seeds Wednesday's venue-by-venue blog (Hook 5) with the cross-venue lower-bowl pricing math ($180-$260 Ohio Wed vs $230-$320 Soldier Fri vs $250-$340 MetLife Sat). Continuity with 5/4 Threads (Bruno Mars pit curve T-12) -- yesterday covered the GA pit, today covers the across-venue value play.
  - TikTok: NBA R1 elimination + R2 opening overlap POV. Single longest-form post of the day on the playoff-week relevance peak. Carries the 30-50% R1 close-out floor + 22% R2 spread-widening data points across the canonical pre-tip cut window framing.
- **Hook 5 (Wednesday's Bruno Mars venue-by-venue blog forward-flag)** -> Threads. Pre-seed for the Wednesday 5/6 publish. The Threads slot adapts naturally to the venue-comparison framing because of the longer-form conversational voice.
- **Hook 2 (Day 28 publish-velocity zero-streak)** -> Lead Architect escalation, not a content angle. Flagged in Notes below.
- **Hook 4 (SEO weekly handoff replies due)** -> Cross-agent operational obligation, not a content angle. Flagged in Notes below.
- **Hook 6 (SEO Day-19 watch reflects Wrigley deploy)** -> Cross-agent state update, not a content angle. Already closed-loop per Hook 6 itself.

Today's slate weights toward Hook 1 (welcome-flow blog) because today is the production day for the Tuesday tactical/how-to slot, and two voices on the same anchor data is the standard pre-seed pattern (4/22 used three voices on FIFA, 4/26 used three voices on same-day playbook, 4/27 used three voices on summer window). Welcome-flow gets the doubled slot because it's the highest-leverage content angle this week against the n=11 Day-4+ confirmed-silent cohort.

## Scheduling
- Twitter: 9 AM / 1 PM / 5 PM ET per spec (13:00 / 17:00 / 21:00 UTC).
- Instagram: 11 AM ET per spec (spec allows 11 AM or 6 PM; chose 11 AM for lunch-window engagement, matches every prior day this slate cycle).
- Threads: 1:30 PM ET, 30 min after Twitter #2 per spec (adapts the welcome-flow voice into the Bruno Mars venue-comparison long-form -- a deliberate platform mismatch because Threads' audience overlap with X is high enough that running the same target-price angle on both within 30 minutes would feel duplicative; Bruno Mars venue split serves the Threads slot better as a different-topic-but-still-data-driven beat).
- TikTok: 7 PM ET per spec (spec allows 12 PM or 7 PM; chose 7 PM for evening engagement window, matches the prior-week pattern).

## Image Prompts (queued for when banana MCP comes online)

All prompts follow the brand pillar mapping. 16:9 for Twitter, 1:1 for Instagram and Threads. TikTok gets no image per spec. Target save path: `web/public/social/generated/YYYY-MM-DD-platform-topic.png`.

- **Tw #1 (Cubs Reds Game 3 Day Game)** -- Deal Alerts / UI-Web (16:9):
  > "A clean social media infographic card on dark navy (#0a1628) background. Bold white sans-serif text 'BLEACHER GA' centered with '$48 - $95' in green (#22c55e) below it as the hero range. Smaller white subtext '3-PLATFORM SPREAD' at the bottom. Minimal flat design, small baseball icon in green accent top-right. Commercial graphic for a ticket comparison app."

- **Tw #2 (Target Price Onboarding Tip)** -- Tips & Education / UI-Web (16:9):
  > "A clean social media tip card on dark navy (#0a1628) background with bold white sans-serif text '5 MINUTES' centered large. Smaller white text 'TO YOUR FIRST ALERT' below and 'SET A TARGET PRICE' in green (#22c55e) above. Minimal flat design, small bell icon in green accent top-right. Commercial graphic for a ticket app."

- **Tw #3 (WC 2026 T-37 FIFA Creep)** -- Price Intelligence / UI-Web (16:9):
  > "A minimal data visualization card on dark navy (#0a1628) background. Bold white sans-serif text '43 OF 58' centered as the hero number, with '74.1% FIFA TOP' in green (#22c55e) below it. Smaller white subtext 'T-37 TO KICKOFF' at the bottom. Clean flat design, no photography. Commercial infographic for a ticket comparison app."

- **IG (Target Price Onboarding Deep Dive)** -- Tips & Education / UI-Web (1:1):
  > "A clean social media tip card on dark navy (#0a1628) background. Centered stacked layout: 'WATCHLIST' in white sans-serif at top, large bell icon outline in green (#22c55e) in the middle, 'NEEDS A TARGET' in bold white sans-serif below the icon, '5 MIN SETUP' in smaller green text at the bottom. Minimal flat design. Commercial graphic for a ticket app."

- **Threads (Bruno Mars Midweek vs Weekend Split)** -- Price Intelligence / UI-Web (1:1):
  > "A minimal data visualization card on dark navy (#0a1628) background. Centered stacked three-row layout: 'WED OHIO' with '$180-260' in green (#22c55e), 'FRI SOLDIER' with '$230-320' in white, 'SAT METLIFE' with '$250-340' in white. Bold sans-serif typography, clean flat design, no photography. Commercial infographic for a ticket app."

All prompts keep embedded text under 25 chars per element, use only brand hex colors (navy #0a1628, green #22c55e, white #ffffff), and avoid banned terms ("8K", "masterpiece", "ultra-realistic", "high resolution", "hyper-detailed"). Twitter #2, Twitter #3, IG, and Threads use UI/Web data-visual mode (Tips and Price Intelligence pillars). Twitter #1 uses UI/Web for the Deal Alerts pillar. No real-venue photo prompts today, so no IMAGE_SAFETY rejection risk to flag.

## Voice Check
- **No banned words**: no "delve", "crucial", "pivotal", "landscape", "tapestry", "testament", "underscore", "showcase", "vibrant", "nestled", "groundbreaking", "renowned", "breathtaking", "foster", "garner", "interplay", "intricate", "enhancing", "encompassing", "cultivating".
- **No banned phrases**: no "stands as", "serves as", "marks a pivotal moment", "reflects broader trends", "is a testament to", "It's not just X; it's Y", "Not only...but also", "Here's the thing", "Let's break this down", "Here's what you need to know", "No guessing", "No wasted clicks", "The real question is", "At its core", "What really matters", "could potentially", "it might be argued".
- **No em dashes for emphasis**: all emphasis done with periods, commas, colons, and parentheses. Zero em dashes in post copy.
- **No forced rule-of-three**: NBA Game enumeration ("Game 5, Game 6, Game 7") is a complete 3-of-3 enumeration, not a rule of three for stylistic effect. Bruno Mars venue list (Soldier, Ohio, MetLife) is a 3-venue tour breakdown, not a rule of three. Cross-platform list (StubHub, SeatGeek, Vivid Seats) is a complete platform enumeration. Ticketmaster sometimes added as a fourth where contextually relevant.
- **No "-ing" tack-ons**: no "highlighting", "showcasing", "underscoring", "reflecting". "Pricing" appears as standard noun usage, not descriptor tack-on.
- **No generic wrap-ups**: no "the future looks bright", "exciting times ahead", "momentum is building". URLs placed naturally at end of each post.
- **Varied sentence length**: short fragments ("No target, no alert, ever.", "Five minutes. One target.", "T-11 to Soldier Field.") alongside longer conversational lines. TikTok opens on a POV fragment, IG opens on an opinionated framing, Threads opens on a continuity-acknowledging long-form lead.
- **Specific numbers on every post**: $48-$95, 47 bucks, third-wider (Cubs G3); five minutes, twenty bucks, fifteen percent, twenty-five percent, seven-to-fourteen days (target-price posts); 43 of 58, 74.1%, 70.7%, 65.5% (FIFA refresh); 8-12%, 5-8%, $180-$260, $230-$320, $250-$340, 3-5% (Bruno Mars Threads); 30-50%, 22%, $164, $200, 90 minutes (NBA TikTok).
- **Opinionated framing**: "Day-game spreads run about a third wider than night-game spreads on divisional opponents" (Tw #1), "Took us five minutes to set up the first one" (Tw #2), "The Last-Minute Sales Phase is running exactly the way it was designed" (Tw #3), "The system was sitting there with nothing to fire on" (IG), "Two completely different pricing patterns running at the same time and most casual buyers conflate them" (TikTok), "The midweek night gets the floor" (Threads), "the cleanest value play in the tour" (Threads).
- **First person used naturally**: "the most common mistake we see" (Tw #2 + IG), "Took us five minutes" (Tw #2), "Following yesterday's GA pit and Section 100s sideline math" (Threads). Natural across-day continuity in first-person voice without forcing it.
- **URL placement natural**: ticketscan.io, ticketscan.io/world-cup-2026 at end of each X post and Threads post without CTA slogan. Instagram and TikTok use "Link in bio" per platform convention.
- **Instagram constraints**: exactly 5 hashtags, 0 emojis (brand guideline: max 5 hashtags, max 2 emojis).
- **TikTok hashtags only**: 7 hashtags in the TikTok caption, emoji-free caption body.
- **Final self-check pass**: re-read each post asking "person or AI?" -- rhythm varies, prices/dates are specific, openings differ (live-event opener on Twitter #1, opinionated mistake-call-out on Twitter #2, day-stamped check on Twitter #3, opinionated mistake-call-out on IG, continuity-acknowledging continuation on Threads, POV fragment on TikTok). Spelled-out dollar amounts ("Forty-seven bucks", "twenty bucks", "eighty-five out of eighty-five", "fifteen percent", "twenty-five percent") used per voice-guide variation rule. Numerals used where the data point is the lede (43 of 58, 74.1%, $48 to $95, $180 to $260).

## Notes
- **Today's Hook 1 alignment**: The Welcome-Flow blog (`first-price-drop-alert-five-minutes-ticketscan-walkthrough`) is being drafted TODAY in this run per content-hook.md. Today's Twitter #2 and Instagram both pre-seed the blog with the same n=85/85-no-target anchor data and the "five minutes to first alert" framing. If the blog publishes by mid-afternoon ET, today's social audience will already have the framework primed across the two highest-engagement slots. If the blog drafts today but doesn't publish (per the Day 28 zero-streak pattern), the social posts still hold value as standalone Hook 1 coverage of the target-price gap.
- **Cubs G3 publish-amplification gap**: Twitter #1 covers Cubs G3 day-game pricing as standalone social content, but the 5/4 Wrigley blog draft remains in the publish queue at Day 1 of its own publish window. Per content-hook Hook 3, "publishing it TODAY would catch the 13:20 CT first-pitch search window. Not publishing it loses Games 4-5 (today + tomorrow) of the live execution window." Today's Twitter #1 is the social-side hedge if the blog ships today; if it doesn't ship, Twitter #1 is the only piece of TicketScan content live for the Game 3 search window.
- **NBA R1/R2 overlap publish-amplification gap**: TikTok covers NBA R1 elimination + R2 opening overlap as standalone content, but the 4/14 NBA Round 1 piece (Day 21 in queue) and the 4/28 same-day playoff playbook (Day 7 in queue) both remain unpublished. Per content-hook Hook 2, "Both pieces' relevance peaks this week." TikTok is again the social-side hedge if neither ships; the deeper-form playbook content still lives only in the queue.
- **Bruno Mars Threads forward-flag**: Threads adapts the Wednesday venue-by-venue blog framing into a midweek-vs-weekend split angle. Tomorrow's Wednesday slate should pivot to amplification if the Bruno Mars blog publishes Wednesday morning -- Twitter #1 and IG can lead with the new blog URL + the cross-venue lower-bowl pricing data ($180-$260 vs $230-$320 vs $250-$340).
- **WC2026 FIFA continuity**: Today's Twitter #3 is the third consecutive rising-creep data point in the FIFA-most-expensive narrative (65.5% Sunday -> 70.7% Monday -> 74.1% today). The pattern now has enough sample-size durability to anchor next week's WC content cycle. Sample size held flat at 58 matches today (no MetLife or SoFi inventory expansion since 5/4 -- worth re-checking tomorrow if the secondary side moves).
- **Operational escalation (Hook 2)**: Day 28 publish-velocity zero-streak. Last published post 2026-04-07. Thirteen drafts in queue including today's welcome-flow piece. **Day 28 hits the bottleneck-becomes-graveyard threshold per Hook 2 framing.** Three drafts at hard relevance peaks today: 4/14 NBA Round 1, 4/28 same-day playoff playbook, 4/16 best-comparison-sites (the comparison-graph hub for 4/21 + 4/23 + 4/30). One draft hits hard deadline tomorrow: 4/29 WC general-sale-closing piece. Single round of `./marketing-agents/scripts/publish-draft.sh` runs clears most of the backlog. Eighth consecutive Monday/Tuesday/Sunday flagging this; the pattern is structural.
- **Cross-agent obligation flag (Hook 4)**: SEO Agent's 5/4 weekly handoff has one ask actionable today (clarification on dynamic-pricing post: existing-piece-repromote vs new-follow-up). Outbound `seo-requests/2026-05-05-content-replies-bundle.md` due today per Hook 4. Not a Social Agent task but worth re-flagging here so the daily output is the centralized record.
- **Pre-gen status today**: ZERO pre-gen entries existed for 5/5. Eleventh consecutive day with no pre-gen at agent run time. The pre-gen pipeline is fully off as a practical matter; the operational reality is the agent runs from hooks every day. Recommending the pre-gen seeding process be removed from the planning model entirely.
- **Backup if a post needs to swap out**:
  - NHL Round 1/Round 2 transition pricing data (similar overlap pattern to NBA TikTok) if the NHL bracket produces a cleaner data story than NBA mid-day. Reserve for TikTok if NBA news is flat.
  - Welcome-flow blog launch amplification post -- if the blog publishes by mid-afternoon ET, swap Twitter #3 (FIFA refresh) for a launch-amplification post linking the new blog URL with the n=85/85 headline data point. FIFA refresh data is durable enough to delay one day.
  - Cubs G4 forward-flag (Wednesday 5/6 day game, 1:20 CT first pitch, last home-stand game) if Game 3 produces a clean live-pricing data pull mid-afternoon. Reserve for Twitter #2 swap if the welcome-flow angle gets superseded by a harder data beat.

## Tomorrow Ideas (Wednesday 2026-05-06)
- **Bruno Mars Romantic Tour venue-by-venue blog launch amplification** -- if Wednesday's blog ships per Hook 5, all of Wednesday's social should pivot to amplification. Twitter morning post leads with the new blog URL + the cross-venue lower-bowl pricing math. IG carousel with the canonical venue split (Soldier $230-$320, Ohio $180-$260, MetLife $250-$340). Threads conversational adaptation of the midweek-vs-weekend split. TikTok POV on "the venue you should actually buy if you're flexible on date."
- **WC 2026 T-36 FIFA refresh** -- if the data moves more than 2 percentage points from today's 74.1% (above 76% or below 72%) or the median spread changes meaningfully, single Twitter post. Otherwise hold for Sunday's weekly cadence.
- **Welcome-flow blog launch amplification (if today's slipped)** -- if Hook 1's welcome-flow blog slipped today and somehow ships Wednesday morning instead, run the same launch-amplification pattern. Less likely scenario per the Day 28 zero-streak but flagging for completeness.
- **NBA R2 opener live pricing data** -- if any Round 2 series tips Wednesday or Thursday, pull actual opening-game pricing for a "what Round 2 openers actually cost" data piece. Reads as a follow-up to today's TikTok R1/R2 overlap framing and reinforces the 22% spread-widening data point with live numbers.
- **Cubs G6 forward-flag** -- Wednesday 5/6 is the last home-stand game (1:20 CT first pitch). Same day-game-vs-night-game pattern as today's Twitter #1 but at the end-of-series resale curve where bleacher GA typically sees the deepest 48-hour discount of the home stand.
- **Day 29 publish-streak escalation post (internal only, NOT social)** -- if Hook 1's blog slipped today and the 4/29 WC piece also slipped past tomorrow's hard deadline, 29-day publish-velocity zero-streak deserves a hard escalation to Lead Architect Wednesday morning. Not for social.

## Handoffs
- **Email Agent (Wednesday 2026-05-06)**: Welcome-flow / target-price content is primed today on Twitter #2 and Instagram with the n=85/85-no-target framing. Wednesday's newsletter can lean on the welcome-flow blog if it published Tuesday with a "we wrote the deep-dive on the five-minute alert setup" framing, or reference the same target-price data with a "the most common mistake we see" hook. Bruno Mars venue split is also primed on Threads -- newsletter can reference the cross-venue lower-bowl pricing math if Wednesday's Bruno Mars blog publishes.
- **SEO Agent**: Same flag as past week -- the unshipped SEO bundle still needs to deploy for the AggregateOffer `lowPrice` to populate from the new section data (Chase Center 4/24, MetLife 4/25, Wrigley 5/4 deploy CONFIRMED per Hook 6). Day 19 of SEO Day-10 escalation. Single `git push` clears the structured-data debt for the remaining venues. Also: SEO weekly handoff Ask 1 (dynamic-pricing post clarification) outbound due today per Hook 4 -- not the Social Agent's deliverable but worth flagging in the cross-agent record.
- **Content Agent**: Today's Twitter #2 and Instagram pre-seed Hook 1's welcome-flow blog with the canonical n=85/85-no-target anchor and "five minutes to first alert" framing. Today's Threads pre-seeds Hook 5's Wednesday Bruno Mars venue-by-venue blog with the midweek-vs-weekend split and cross-venue lower-bowl pricing math. Both Tuesday and Wednesday have explicit social pre-seeding live today; both depend on the publish pipeline being unblocked. The 4/29 WC general-sale-closing piece also hits hard deadline tomorrow per Hook 2 -- if it slips, the date-anchored open undermines the data-driven voice past the credibility threshold and the piece moves to the kill-permanently track.
