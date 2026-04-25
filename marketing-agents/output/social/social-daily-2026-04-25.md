# Social Posts -- 2026-04-25 (Saturday)

## Content Calendar (6 posts queued)

### Twitter/X (3 posts)

1. **X -- MetLife Final 85 Days Out (9:00 AM ET / 13:00 UTC)**
   > 85 days to the World Cup Final at MetLife. Refreshed our venue page this morning with nine specific section breakdowns mapped to FIFA pricing categories. For comp: Taylor Swift's five 2023 nights at the same building hit $1,500 to $5,000+ on resale. The Final will print money for sellers. ticketscan.io/world-cup-2026/metlife-stadium

2. **X -- FIFA 58-Match Saturday Refresh (1:00 PM ET / 17:00 UTC)**
   > Pulled fresh FIFA resale data this morning. 58 group-stage matches now. FIFA the priciest on 38 of them. 65.5%, basically zero movement from Wednesday's 28-of-42 ratio. Median US-venue spread crept from $94 to $97. MetLife and SoFi group-stage inventory pulling that median up. ticketscan.io/world-cup-2026

3. **X -- Summer Window Six Days Left (5:00 PM ET / 21:00 UTC)**
   > Six days left in the summer concert deep-inventory window. Billie opens June 13. 49 days out today. Pollstar Q1 average is $108, up 9% year over year. Friday is when the curve gets steeper. Buy this week or pay more next week. ticketscan.io

### Instagram (1 post)

4. **Instagram -- MetLife Final Breakdown (11:00 AM ET / 15:00 UTC)**
   > 85 days to the World Cup Final at MetLife Stadium.
   >
   > Refreshed our MetLife venue page this morning. It used to be three generic chunks (field, mezz, upper). Now it breaks down section-by-section: FIFA category mapping, sightlines for the soccer config (which 100-level sections sit behind the goal lines), and current asking prices per tier.
   >
   > Reference for what big-event resale at this stadium actually does: Taylor Swift's Eras Tour played MetLife five sold-out nights in 2023. Resale ran $1,500 to $5,000+ per ticket.
   >
   > World Cup Final demand will be on a different planet. Current floor is $150 and climbing.
   >
   > Link in bio.
   >
   > #TicketScan #WorldCup2026 #WorldCupFinal #MetLife #FIFAWorldCup

### Threads (1 post)

5. **Threads -- FIFA 26-Day Check-in (1:30 PM ET / 17:30 UTC)**
   > Quick FIFA resale data check at the 26-day mark.
   >
   > Sample size is now 58 group-stage matches. FIFA is still the priciest seller on 38 of them. 65.5%, basically identical to Wednesday's 28-of-42 ratio off the original blog. The 'official is cheaper' assumption keeps getting weaker the more data we pull.
   >
   > Median US-venue spread between FIFA and the cheapest secondary nudged from $94 to $97 in 24 hours. MetLife and SoFi group-stage inventory is the ceiling pulling that median up.
   >
   > 47 days to kickoff. ticketscan.io/world-cup-2026

### TikTok (1 post)

6. **TikTok -- MetLife Final / Eras Tour Comp (7:00 PM ET / 23:00 UTC)**
   > POV: you want World Cup Final tickets at MetLife Stadium and you have no idea what big-event resale at MetLife actually looks like
   >
   > Reference point: Taylor Swift's Eras Tour played MetLife five sold-out nights in 2023. Resale prices? $1,500 to $5,000+ per ticket. For a concert.
   >
   > The World Cup Final on July 19, 2026 is a once-in-a-generation event for North America. Demand is going to make Eras Tour pricing look reasonable.
   >
   > Floor on resale right now is $150 with 85 days to go. We refreshed our MetLife venue page this morning with nine specific section breakdowns so you can see which ones to actually target.
   >
   > Link in bio.
   >
   > #WorldCup2026 #WorldCupFinal #MetLifeStadium #TaylorSwift #ErasTour #TicketScan #TicketTok #Soccer #FIFA #WorldCupTickets

## Publishing Status
- **API posting**: Admin social endpoints status unchanged from prior week (404 on production as of 4/24). Content saved to `content-calendar.json` for downstream publishing.
- **Image generation**: Banana MCP tools (`gemini_generate_image`, `set_aspect_ratio`) still not surfaced through ToolSearch. `select:gemini_generate_image,set_aspect_ratio` returns "No matching deferred tools found." Same blocker as 4/19, 4/21, 4/22, 4/23, 4/24 -- now day 6. Plugin and `banana-claude:banana` Skill are listed but MCP tool handles aren't discoverable. Fallback `ig-template.png` applied to Twitter, Instagram, and Threads per spec. TikTok has no image per spec.
- **Regeneration prompts**: Pre-drafted below for one-shot regeneration once banana comes online.

## Content Pillars Hit Today
- [x] World Cup 2026 (Twitter #1, Instagram, TikTok -- MetLife Final 85-day countdown with section refresh)
- [x] Price Intelligence (Twitter #2, Threads -- FIFA 38/58 = 65.5%, spread $94 -> $97)
- [x] Tips & Education (Twitter #3 -- 6-day summer window countdown, Pollstar +9% YoY context)
- [x] Savings Wins (Instagram, TikTok -- Taylor Swift $1,500-$5,000 Eras comp as benchmark for what MetLife resale does at scale)
- [x] Deal Alerts (Twitter #1, Instagram -- $150 current MetLife resale floor)

Pillars deliberately balanced: World Cup is the hero today (3 posts) because the venue page just shipped and Hook 1 explicitly directs the social slate. FIFA refresh (Twitter #2 + Threads) is Hook 3's queued Saturday beat. Summer-window post (Twitter #3) carries Hook 4's deadline narrative without dominating the slate.

## Changes from Pre-Generated Posts
Four pre-gen 4/25 entries existed and all four were replaced because every one of them was misaligned with today:

- `2026-04-25-twitter-friday-rush-am` (13:00 UTC, "Friday morning = sellers pricing for the weekend rush") -- **factually wrong, today is Saturday**. Replaced by Twitter #1 (MetLife Final 85 days, Hook 1).
- `2026-04-25-twitter-playoff-intensity-pm` (21:00 UTC, "Game 5 tickets averaging 35% more than Game 1") -- generic playoff content, no specific event/data anchor, conflicts with Hook 4's summer-window deadline narrative we want to set up for Email Agent's Monday newsletter. Replaced by Twitter #3 (summer 6-day window).
- `2026-04-25-instagram-playoff-guide` (15:00 UTC, "Playoff ticket buying guide: Games 1-2 are the cheapest") -- generic explainer, no current price data, no event-specific anchor, doesn't link to today's MetLife venue refresh. Replaced by Instagram #1 (MetLife Final breakdown with section data + Eras Tour comp).
- `2026-04-25-threads-game-theory` (17:30 UTC, "Elimination game tickets cost 35% more...") -- same generic playoff framing, also uses an em dash for emphasis ("make it count -- and at least save money") which violates voice rules. Replaced by Threads (FIFA 26-day data check-in tying to Wednesday's blog).

Two new entries added for slots missing from pre-gen:
- `2026-04-25-twitter-fifa-58match-saturday` (17:00 UTC Twitter mid-day) -- added per spec (3 Twitter posts at 9 AM / 1 PM / 5 PM ET). Carries Hook 3 directly.
- `2026-04-25-tiktok-metlife-final-eras-comp` (23:00 UTC TikTok) -- added per spec (1 TikTok post at 12 PM or 7 PM ET). Pivots Hook 1 into the long-form TikTok script with the Eras Tour pricing benchmark as the hook.

Rationale matches the 4/22, 4/23, 4/24 playbooks: hook-pinned content with specific current data outperforms evergreen pre-gens. Today's pre-gen was uncharacteristically off (wrong day of week on Twitter #1, generic playoff content with no anchors on three of four entries) -- worth flagging to whoever seeds the pre-gen.

## Hook Mapping
- **Hook 1 (MetLife Stadium World Cup Final, 85 days, page refresh from 3 to 9 sections, $150 floor, Taylor Swift Eras $1,500-$5,000 comp)** -> Twitter #1, Instagram, TikTok. Three voices on the same anchor data set, tied to today's venue refresh.
- **Hook 3 (FIFA 38/58 = 65.5%, Wednesday 28/42 = 66.6%, median spread $94 -> $97, MetLife/SoFi as ceiling drivers)** -> Twitter #2, Threads. Saturday refresh beat for Wednesday's "Three Weeks of FIFA Resale Data" blog post. Cross-references Hook 1 because MetLife inventory is named as the spread driver.
- **Hook 4 (Summer concert 6-day countdown, Friday May 1 hits 6-week mark, Pollstar Q1 $108.63 / +9% YoY)** -> Twitter #3. Single-post coverage today; the heavier Threads/IG slot goes to the Wednesday blog refresh because that's the time-sensitive content (Wednesday post needs Saturday traffic, the summer window can carry through Sunday).
- **Hook 2 (Day 9 uncommitted SEO bundle blocking schema gains)** -> Lead Architect escalation, not a content angle. Flagged in Notes below.

Today's slate weights toward Hooks 1 and 3 because both are time-locked (venue page just shipped, FIFA blog needs the Saturday refresh signal). Hook 4 gets one slot today and stays in rotation through Friday.

## Scheduling
- Twitter: 9 AM / 1 PM / 5 PM ET per spec (13:00 / 17:00 / 21:00 UTC).
- Instagram: 11 AM ET per spec (spec allows 11 AM or 6 PM; chose 11 AM for lunch-window engagement, matches 4/22, 4/23, 4/24 pattern).
- Threads: 1:30 PM ET, 30 min after Twitter #2 per spec (adapts the FIFA 58-match data from Twitter #2 into the longer-form Threads voice with the "official-is-cheaper assumption is wrong" framing).
- TikTok: 7 PM ET per spec (spec allows 12 PM or 7 PM; chose 7 PM for evening engagement window).

## Image Prompts (queued for when banana MCP comes online)

All prompts follow the brand pillar mapping. 16:9 for Twitter, 1:1 for Instagram and Threads. TikTok gets no image per spec. Target save path: `web/public/social/generated/YYYY-MM-DD-platform-topic.png`.

- **Tw #1 (MetLife Final 85 Days)** -- World Cup 2026 / Atmospheric (16:9):
  > "A large American football stadium exterior at golden hour, FIFA World Cup 2026 flags and banners visible at the entrance gates, fans walking toward the stadium silhouetted against the sunset sky. Warm natural sunlight, shallow depth of field on the foreground crowd. Captured with Sony A7R IV, 24mm wide-angle lens at f/2.8. Sports editorial photography for a magazine cover."

- **Tw #2 (FIFA 58-Match Saturday Refresh)** -- Price Intelligence (16:9):
  > "A minimal data visualization card on dark navy (#0a1628) background. Bold white sans-serif text 'FIFA 38/58' centered as the hero number, with '65.5%' in green (#22c55e) below it. Smaller white subtext '$94 -> $97 SPREAD' at the bottom. Clean flat design, no photography. Commercial infographic for a ticket comparison app."

- **Tw #3 (Summer Window Six Days Left)** -- Tips & Education (16:9):
  > "A clean social media tip card on dark navy (#0a1628) background with bold white sans-serif text '6 DAYS LEFT' centered large. Smaller white text 'SUMMER CONCERTS' above and 'POLLSTAR Q1 +9%' in green (#22c55e) below. Minimal flat design, small calendar icon in green accent top-right. Commercial graphic for a ticket app."

- **IG (MetLife Final Breakdown)** -- Hybrid (Cinema + UI overlay) (1:1):
  > "A large American football stadium interior photographed from the upper deck, dramatic late-afternoon lighting falling across the field configured for soccer with goal posts visible, shallow depth of field on the field. Bold white text '85 DAYS' overlaid in the center with smaller white subtext 'WORLD CUP FINAL' below. Captured with Canon EOS R5, 35mm lens at f/1.8. Commercial social media photography for an event ticket app."

- **Threads (FIFA 26-Day Check-in)** -- Price Intelligence (1:1):
  > "A minimal data visualization card on dark navy (#0a1628) background. Centered stacked layout: 'DAY 26' in white sans-serif at top, '38 OF 58' large in green (#22c55e) as the hero number, '65.5% FIFA HIGHEST' in white below, and '$94 -> $97 SPREAD' in smaller green text at the bottom. Clean flat design. Commercial infographic for a ticket app."

All prompts keep embedded text under 25 chars per element, use only brand hex colors (navy #0a1628, green #22c55e, white #ffffff), and avoid banned terms ("8K", "masterpiece", "ultra-realistic", "high resolution", "hyper-detailed"). Twitter #1 and Instagram use atmospheric photography (World Cup pillar / Hybrid pillar per spec); Twitter #2, Twitter #3, and Threads use UI/Web data-visual mode. Note: prompt for Twitter #1 and IG uses generic "American football stadium" instead of "MetLife Stadium" by name to avoid IMAGE_SAFETY rejections on real-venue prompts (per spec retry guidance).

## Voice Check
- **No banned words**: no "delve", "crucial", "pivotal", "landscape", "tapestry", "testament", "underscore", "showcase", "vibrant", "nestled", "groundbreaking", "renowned", "breathtaking", "foster", "garner", "interplay", "intricate", "enhancing", "encompassing", "cultivating".
- **No banned phrases**: no "stands as", "serves as", "marks a pivotal moment", "reflects broader trends", "is a testament to", "It's not just X; it's Y", "Not only...but also", "Here's the thing", "Let's break this down", "Here's what you need to know", "No guessing", "No wasted clicks", "The real question is", "At its core", "What really matters", "could potentially", "it might be argued".
- **No em dashes for emphasis**: all emphasis done with periods, commas, and colons. The replaced pre-gen Threads post did use an em dash; the replacement does not. Zero em dashes in post copy.
- **No forced rule-of-three**: Instagram has a natural enumeration (FIFA mapping, sightlines, asking prices) but the items are differently-shaped clauses, not parallel structure. Twitter posts mix sentence lengths.
- **No "-ing" tack-ons**: no "highlighting", "showcasing", "underscoring", "reflecting". "Climbing" used as a present participle in Instagram ("$150 and climbing") is verb-as-fragment, not descriptor tack-on.
- **No generic wrap-ups**: no "the future looks bright", "exciting times ahead". URLs placed naturally at end of each post.
- **Varied sentence length**: short fragments ("65.5%, basically zero movement from Wednesday's 28-of-42 ratio.", "47 days to kickoff.", "For a concert.") alongside longer conversational lines. TikTok opens on a POV fragment, IG opens on the data hook.
- **Specific numbers on every post**: 85 days, $1,500-$5,000+, $150 floor, 9 sections (MetLife slate); 38/58, 65.5%, 28/42, 66.6%, $94, $97, 26 days, 47 days (FIFA slate); 6 days, June 13, 49 days, $108, +9% (summer slate).
- **Opinionated framing**: "The Final will print money for sellers" (Twitter #1), "The 'official is cheaper' assumption keeps getting weaker the more data we pull" (Threads), "World Cup Final demand will be on a different planet" (IG), "Buy this week or pay more next week" (Twitter #3), "Demand is going to make Eras Tour pricing look reasonable" (TikTok).
- **First person used naturally**: "We refreshed our venue page" (Twitter #1, IG, TikTok), "Pulled fresh FIFA resale data" (Twitter #2), "The more data we pull" (Threads). No forced "we" where a statement would do.
- **URL placement natural**: ticketscan.io and ticketscan.io/world-cup-2026/metlife-stadium at end of each X post without CTA slogan. Instagram and TikTok use "Link in bio" per platform convention. Threads uses ticketscan.io/world-cup-2026 inline.
- **Instagram constraints**: exactly 5 hashtags, 0 emojis (brand guideline: max 5 hashtags, max 2 emojis).
- **TikTok hashtags only**: 10 hashtags in the TikTok caption, emoji-free caption body.
- **Final self-check pass**: re-read each post asking "person or AI?" -- rhythm varies, prices/dates are specific, openings differ (subject-first on Twitter #1, action-first on Twitter #2, deadline-first on Twitter #3, scene-setter on IG, "Quick" check-in on Threads, POV on TikTok).

## Notes
- **Today's venue refresh alignment**: MetLife is the data anchor today because it's the live venue refresh target per `content-hook.md` Hook 1. Three posts (Twitter #1, IG, TikTok) carry the Final data across three voices using the Taylor Swift Eras pricing as the credibility benchmark. Venue page refresh shipped this morning (commit 2617882), so cross-reinforcement is live, not pending.
- **FIFA Saturday refresh on schedule**: Hook 3 was explicitly slated for Saturday by the 4/24 hook file. Twitter #2 and Threads carry the 38/58 update with reference back to Wednesday's "Three Weeks of FIFA Resale Data" blog post. The data movement is so small (66.6% to 65.5%) that the story is "the trend is rock solid 13 days in," which is itself a reinforcing angle for the Wednesday blog.
- **Cross-link between hooks**: Twitter #2 and Threads both name MetLife and SoFi as the spread drivers, which threads back into the MetLife Hook 1 storyline without making it the primary message of those posts. This is intentional cross-reinforcement -- the same audience seeing the MetLife morning post should see MetLife mentioned in the FIFA data story too.
- **Operational escalation (Hook 2)**: Day 9 uncommitted SEO bundle (19 modified/new files, ~50 schema improvements) still blocking deploy. Same flag as the past three days, now compounding because today's MetLife refresh adds to the bundle (the new section data feeds the AggregateOffer `lowPrice` field on World Cup stadium pages, but only once `[stadium]/page.tsx` ships). Plus the 7+ unpublished blog drafts. Both flagged to Lead Architect for the past week. Single `git push` clears the deploy debt.
- **Pre-gen quality issue today**: Three of four pre-gen entries were generic playoff content with no specific anchors, and Twitter #1 was factually wrong (called Saturday "Friday"). This is a step worse than 4/24's pre-gen quality (which was decent on data but missed today's hook angles). Worth flagging to whoever seeds pre-gen content -- the 4/25 batch reads like it was generated days ago without checking the day-of-week or current hook file.
- **Backup if a post needs to swap out**:
  - Florence + The Machine 6-days-out (May 1 State Farm Arena) with section-specific pricing. Would replace Twitter #3 if a harder summer-concert news beat lands mid-day.
  - NHL Round 1 G3 cross-series fee math story (Oilers, Maple Leafs, Caps/Pens all likely playing G3 this weekend). Reserve for Sunday if a clean fee-flip pattern emerges across matchups.

## Tomorrow Ideas (Sunday 2026-04-26)
- **Chase Center G3 post-game pricing recap** -- pull actual closeout prices from Saturday night, compare to Friday's listed numbers for a "did fans actually pay those prices?" data piece. Reads as a follow-up to yesterday's G3/G4 Friday content.
- **NHL Round 1 G3 cross-platform pricing** -- if cheapest-platform flips across matchups this weekend, that's a clean Sunday data story.
- **Summer concert 5-days-left countdown continuation** -- Sunday Twitter or Threads post extending Hook 4 narrative, sets up Monday's blog publish if it actually ships.
- **MetLife venue refresh post-launch traffic check** -- if the venue page shows analytics movement Sunday morning, a one-off X post on "what changed" could drive engagement and reinforce the page in the algorithm.
- **FIFA 27-day refresh** -- if the data moves more than 1 percentage point or the median spread changes meaningfully, single Sunday Twitter post. If movement is flat again, hold the next refresh for Wednesday (full week from the original blog).

## Handoffs
- **Email Agent (Monday 2026-04-27)**: Summer concert 6-day-window content is primed on Twitter #3 today. Monday's newsletter can reference the Pollstar $108.63 / +9% YoY stat with a "the window we flagged Saturday closes Friday" framing, and link back to Friday/Saturday social posts as data proof.
- **SEO Agent**: MetLife venue refresh shipped this morning (commit 2617882). The unshipped 19-file SEO bundle still needs to deploy for the AggregateOffer `lowPrice` to populate from the new section data. If/when SEO bundle ships, the social slate's $150 floor claim auto-validates from structured data.
- **Content Agent**: MetLife venue page is shipped, no further dependency this weekend. Wednesday FIFA blog's `dateModified` should refresh whenever the SEO bundle deploys (still pending from 4/23, 4/24 flags). If Monday's "Summer Concert Tour 2026 Tickets" blog ships per Hook 4, Email Agent's Monday newsletter and the Twitter #3 deadline narrative both auto-amplify.
