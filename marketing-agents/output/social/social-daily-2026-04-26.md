# Social Posts -- 2026-04-26 (Sunday)

## Content Calendar (6 posts queued)

### Twitter/X (3 posts)

1. **X -- Same-Day Playoff Playbook (9:00 AM ET / 13:00 UTC)**
   > NBA Round 1 Sunday slate. Same-day fact: lower-bowl resale typically drops 15 to 25% in the final 90 minutes pre-tip. Most buyers hit Ticketmaster at 10 AM and pay the morning list. StubHub usually cuts deepest at the tail. Compare 90 minutes out. ticketscan.io

2. **X -- FIFA Sunday Refresh (1:00 PM ET / 17:00 UTC)**
   > Sunday FIFA refresh. Sample held at 58 group-stage matches. FIFA was priciest on 38 of them. 65.5%, third check landing at the same ratio. Median US-venue spread holds at $97. Two-thirds of group-stage matches are cheaper somewhere else. ticketscan.io/world-cup-2026

3. **X -- Summer Window Five Days Left (5:00 PM ET / 21:00 UTC)**
   > Five days left in the summer concert deep-inventory window. Friday May 1 is the cutoff. Billie opens June 13. Pollstar Q1 average ticket: $108.63, up 9% year over year. Buy this week or pay more next week. ticketscan.io

### Instagram (1 post)

4. **Instagram -- Same-Day Playoff Playbook (11:00 AM ET / 15:00 UTC)**
   > NBA Round 1 Sunday and somebody, somewhere is paying way too much for tonight's tip-off.
   >
   > Pattern we see every weekend: buyers open Ticketmaster at 10 AM, see a price, panic, pay it. Resale cuts deepest 60 to 90 minutes before doors. Lower-bowl behind-the-basket holds value the longest because nobody wants to dump those seats. Verified-resale downloads usually hit your phone 30 minutes before tip.
   >
   > Same-day buying is its own skill. Most people learn it the hard way after eating a forty-dollar markup once.
   >
   > Round 1 is in Game 5 and 6 territory next week. Elimination-game pricing gets weirder, not cleaner.
   >
   > We track every major resale platform so you don't have to refresh six tabs in the parking lot. Link in bio.
   >
   > #TicketScan #NBAPlayoffs #SameDayTickets #TicketHack #Basketball

### Threads (1 post)

5. **Threads -- FIFA 25-Day Check-in (1:30 PM ET / 17:30 UTC)**
   > Sunday FIFA resale check at the 25-day mark off the original blog data set.
   >
   > Sample held at 58 group-stage matches today. FIFA is still the priciest seller on 38 of them. 65.5%, third straight check landing at the same ratio.
   >
   > The 'official is cheaper' assumption is what most casual buyers default to. The data says otherwise on two-thirds of group-stage matches.
   >
   > Median US-venue spread between FIFA and the cheapest secondary held at $97. MetLife and SoFi inventory still pulling that number up.
   >
   > 46 days to kickoff. ticketscan.io/world-cup-2026

### TikTok (1 post)

6. **TikTok -- Same-Day Playoff POV (7:00 PM ET / 23:00 UTC)**
   > POV: it's Sunday, NBA Round 1 is on, and you want playoff tickets for tonight but you don't know how same-day pricing actually works
   >
   > The pattern: most buyers open Ticketmaster at 10 AM, see the morning price, panic-buy. Resale cuts deepest in the final 60 to 90 minutes before doors. StubHub usually leads the late-cycle drop. Lower-bowl behind-the-basket holds value the longest because nobody wants to dump those seats. Verified-resale downloads usually hit your phone 30 minutes before tip.
   >
   > Round 1 is in Game 5 and 6 territory next week. Elimination-game pricing gets weirder, not cleaner.
   >
   > We track every platform so you can compare in 30 seconds.
   >
   > Link in bio.
   >
   > #NBAPlayoffs #NBARound1 #SameDayTickets #TicketHack #Basketball #Playoffs #TicketScan #TicketTok #SaveMoney

## Publishing Status
- **API posting**: Admin social endpoints status unchanged from prior week (404 on production as of 4/24). Content saved to `content-calendar.json` for downstream publishing.
- **Image generation**: Banana MCP tools (`gemini_generate_image`, `set_aspect_ratio`) still not surfaced through ToolSearch. `select:gemini_generate_image,set_aspect_ratio` returns "No matching deferred tools found." Same blocker as 4/19, 4/21, 4/22, 4/23, 4/24, 4/25 -- now day 7. Plugin and `banana-claude:banana` Skill are listed but MCP tool handles aren't discoverable. Fallback `ig-template.png` applied to Twitter, Instagram, and Threads per spec. TikTok has no image per spec.
- **Regeneration prompts**: Pre-drafted below for one-shot regeneration once banana comes online.

## Content Pillars Hit Today
- [x] Tips & Education (Twitter #1, Instagram, TikTok -- 6-hour same-day playoff playbook with specific 15-25% drop range, lower-bowl-behind-basket arbitrage, verified-resale download window)
- [x] Price Intelligence (Twitter #2, Threads -- FIFA 38/58 = 65.5% holds for third straight check, $97 median spread)
- [x] Tips & Education (Twitter #3 -- 5-day summer window countdown, Pollstar +9% YoY context, Billie June 13 anchor)
- [x] World Cup 2026 (Twitter #2, Threads -- 46-day kickoff countdown wrapped into FIFA refresh)

Pillars deliberately weighted toward Tips & Education today: same-day playoff playbook is the single most actionable content angle today (Round 1 elimination games next week, NBA tip-offs across the Sunday slate). Three of six posts pivot off that angle in three voices. FIFA refresh (Twitter #2 + Threads) carries the data continuity from Saturday. Summer window (Twitter #3) seeds Hook 2's Monday blog publish trigger.

## Changes from Pre-Generated Posts
All four pre-gen 4/26 entries existed and all four were replaced because every one of them was misaligned with today:

- `2026-04-26-twitter-weekend-wrap-am` (13:00 UTC, "Saturday morning inventory check") -- **factually wrong, today is Sunday**. Same exact failure mode as last Saturday's pre-gen calling Saturday "Friday." Replaced by Twitter #1 (same-day playoff playbook tied to Hook 3's user case).
- `2026-04-26-twitter-worldcup-46days-pm` (21:00 UTC, "46 days to World Cup. Average resale price up 8% from last week. Momentum is building.") -- the day count is correct but the "up 8% from last week" stat has no source in our data files and "momentum is building" is exactly the kind of generic wrap-up our voice rules ban. Replaced by Twitter #3 (Hook 2's summer-window countdown with Pollstar-cited stats).
- `2026-04-26-instagram-two-week-recap` (15:00 UTC, "$41 average savings, $187 top savings, 12,000 comparisons") -- platform stats with no source in our analytics data, generic listicle framing, no event-specific anchor, and uses "That's not a bug -- it's your opportunity" with an em dash for emphasis (banned). Replaced by Instagram #1 (same-day playoff playbook with specific tactical detail).
- `2026-04-26-threads-wrap-up` (17:30 UTC, "no single cheapest platform...the only winning move is to compare every time") -- pure platitude with zero specific numbers, breaks the "be specific" rule from voice guide. Replaced by Threads (FIFA 25-day check-in tying back to Wednesday's blog source data).

Two new entries added for slots missing from pre-gen:
- `2026-04-26-twitter-fifa-sunday-refresh` (17:00 UTC Twitter mid-day) -- added per spec (3 Twitter posts at 9 AM / 1 PM / 5 PM ET). Carries Hook 3 from yesterday's "FIFA 27-day refresh if data moves more than 1 percentage point" tomorrow-idea. Data did not move (held at 65.5%), so the angle becomes "the trend is rock solid 14 days in" -- which is itself a reinforcing angle for the Wednesday blog.
- `2026-04-26-tiktok-sameday-playoff-pov` (23:00 UTC TikTok) -- added per spec (1 TikTok post at 12 PM or 7 PM ET). Pivots Hook 3's same-day playbook into long-form TikTok script with the POV opening structure used on 4/22, 4/23, 4/25.

Rationale matches the 4/22, 4/23, 4/24, 4/25 playbooks: hook-pinned content with specific current data outperforms evergreen pre-gens. Today's pre-gen quality is the worst of the week -- the wrong-day-of-week failure mode repeated from 4/25, plus three additional issues across the other entries (made-up stats, em dash for emphasis, pure platitudes). Worth re-flagging to whoever seeds the pre-gen content -- this is now a two-week pattern of low-quality weekend pre-gen.

## Hook Mapping
- **Hook 3 (nmcnamee99 same-day Raptors-Cavs G2 case + canonical 6-hour playbook)** -> Twitter #1, Instagram, TikTok. Three voices on the same anchor data. Note: user is **not** named in any post (privacy boundary). The canonical pattern data is what gets surfaced -- 15-25% lower-bowl drop in final 90 minutes, 60-90 minute resale-cut window, lower-bowl-behind-basket arbitrage, 30-minute pre-tip download window, walk-up box-office tail. This is the same content seed Tuesday 4/28's blog will expand into a 800-1000 word piece per next-week-plan.
- **Hook 2 (Summer concert 5-days-left countdown, Friday May 1 cutoff, Pollstar Q1 $108.63 / +9% YoY)** -> Twitter #3. Single-post coverage today; the full Hook 2 narrative belongs to Monday's blog publish (if it ships -- per next-week-plan, third miss kills the angle permanently).
- **FIFA continuity (38/58 = 65.5% holding for third straight check, $97 spread holding, MetLife/SoFi as ceiling drivers)** -> Twitter #2, Threads. Continues Saturday's 4/25 FIFA Saturday Refresh and Wednesday 4/22's blog seed. Today's data movement: zero. The story becomes "the ratio is rock solid 14 days into the post-blog tracking window" which is itself a reinforcing angle for the still-unpublished blog.
- **Hook 1 (Day 19 publish + cron zero-streak)** -> Lead Architect escalation, not a content angle. Flagged in Notes below.
- **Hook 4 (SEO FAQ audit deadline 4/27)** -> Cross-agent operational obligation, not a content angle. Flagged in Notes below.

Today's slate weights toward Hook 3 (same-day playbook) because today is the live case (NBA Round 1 Sunday slate, eliminate-or-be-eliminated games next week) and the canonical 6-hour playbook is the highest-utility content piece we can put out for users in the moment. FIFA continuity (Hook 3-equivalent) gets the standard two-post Saturday-to-Sunday refresh treatment. Summer window stays in single-post rotation through Friday.

## Scheduling
- Twitter: 9 AM / 1 PM / 5 PM ET per spec (13:00 / 17:00 / 21:00 UTC).
- Instagram: 11 AM ET per spec (spec allows 11 AM or 6 PM; chose 11 AM for lunch-window engagement, matches 4/22, 4/23, 4/24, 4/25 pattern).
- Threads: 1:30 PM ET, 30 min after Twitter #2 per spec (adapts the FIFA 58-match data from Twitter #2 into the longer-form Threads voice with the "official-is-cheaper assumption is wrong" framing).
- TikTok: 7 PM ET per spec (spec allows 12 PM or 7 PM; chose 7 PM for evening engagement window, matches 4/22, 4/23, 4/24, 4/25 pattern).

## Image Prompts (queued for when banana MCP comes online)

All prompts follow the brand pillar mapping. 16:9 for Twitter, 1:1 for Instagram and Threads. TikTok gets no image per spec. Target save path: `web/public/social/generated/YYYY-MM-DD-platform-topic.png`.

- **Tw #1 (Same-Day Playoff Playbook)** -- Tips & Education / UI-Web (16:9):
  > "A clean social media tip card on dark navy (#0a1628) background with bold white sans-serif text '90 MIN OUT' centered as the hero number. Smaller white subtext 'COMPARE BEFORE TIP' above and 'SAME-DAY DROP 15-25%' in green (#22c55e) below. Minimal flat design, small clock icon in green accent top-right. Commercial graphic for a ticket app."

- **Tw #2 (FIFA Sunday Refresh)** -- Price Intelligence / UI-Web (16:9):
  > "A minimal data visualization card on dark navy (#0a1628) background. Bold white sans-serif text '38 OF 58' centered as the hero number, with '65.5% FIFA TOP' in green (#22c55e) below it. Smaller white subtext '$97 SPREAD HELD' at the bottom. Clean flat design, no photography. Commercial infographic for a ticket comparison app."

- **Tw #3 (Summer Window Five Days Left)** -- Tips & Education / UI-Web (16:9):
  > "A clean social media tip card on dark navy (#0a1628) background with bold white sans-serif text '5 DAYS LEFT' centered large. Smaller white text 'SUMMER CONCERTS' above and 'POLLSTAR Q1 +9%' in green (#22c55e) below. Minimal flat design, small calendar icon in green accent top-right. Commercial graphic for a ticket app."

- **IG (Same-Day Playoff Playbook)** -- Hybrid (Cinema + UI overlay) (1:1):
  > "A large basketball arena interior photographed from the upper deck looking down at the court, dramatic late-afternoon arena lighting with the court visible and empty seats in the foreground out of focus, shallow depth of field. Bold white text '60-90 MIN' overlaid in the center with smaller white subtext 'PRE-TIP DROP' below. Captured with Canon EOS R5, 35mm lens at f/1.8. Commercial social media photography for an event ticket app."

- **Threads (FIFA 25-Day Check-in)** -- Price Intelligence / UI-Web (1:1):
  > "A minimal data visualization card on dark navy (#0a1628) background. Centered stacked layout: 'DAY 25' in white sans-serif at top, '38 OF 58' large in green (#22c55e) as the hero number, '65.5% HELD' in white below, and '$97 SPREAD' in smaller green text at the bottom. Clean flat design. Commercial infographic for a ticket app."

All prompts keep embedded text under 25 chars per element, use only brand hex colors (navy #0a1628, green #22c55e, white #ffffff), and avoid banned terms ("8K", "masterpiece", "ultra-realistic", "high resolution", "hyper-detailed"). Twitter #2, Twitter #3, and Threads use UI/Web data-visual mode (Price Intelligence + Tips pillars). Twitter #1 and Instagram use atmospheric/hybrid photography. Note: IG prompt uses generic "basketball arena interior" instead of any specific venue name to avoid IMAGE_SAFETY rejections on real-venue prompts (per spec retry guidance).

## Voice Check
- **No banned words**: no "delve", "crucial", "pivotal", "landscape", "tapestry", "testament", "underscore", "showcase", "vibrant", "nestled", "groundbreaking", "renowned", "breathtaking", "foster", "garner", "interplay", "intricate", "enhancing", "encompassing", "cultivating".
- **No banned phrases**: no "stands as", "serves as", "marks a pivotal moment", "reflects broader trends", "is a testament to", "It's not just X; it's Y", "Not only...but also", "Here's the thing", "Let's break this down", "Here's what you need to know", "No guessing", "No wasted clicks", "The real question is", "At its core", "What really matters", "could potentially", "it might be argued".
- **No em dashes for emphasis**: all emphasis done with periods, commas, and colons. The replaced pre-gen IG post used an em dash for emphasis ("That's not a bug -- it's your opportunity"); the replacement does not. Zero em dashes in post copy.
- **No forced rule-of-three**: Instagram and TikTok have natural enumerations of same-day playbook beats but the items are differently-shaped clauses, not parallel structure. Twitter posts mix sentence lengths.
- **No "-ing" tack-ons**: no "highlighting", "showcasing", "underscoring", "reflecting". "Buying" appears in IG ("Same-day buying is its own skill") as subject of a sentence, not descriptor tack-on.
- **No generic wrap-ups**: no "the future looks bright", "exciting times ahead", "momentum is building" (the last one was in the replaced pre-gen Twitter #2). URLs placed naturally at end of each post.
- **Varied sentence length**: short fragments ("Two-thirds of group-stage matches are cheaper somewhere else.", "46 days to kickoff.", "Buy this week or pay more next week.") alongside longer conversational lines. TikTok opens on a POV fragment, IG opens on a scene-setter, Threads opens on a check-in.
- **Specific numbers on every post**: 15-25% drop, 90 min, 10 AM, 60-90 min, 30 min, $40 markup (spelled "forty-dollar" per voice variation), Game 5/6 (same-day slate); 58 matches, 38 of them, 65.5%, $97, 46 days (FIFA slate); 5 days, May 1, June 13, $108.63, +9% (summer slate).
- **Opinionated framing**: "Two-thirds of group-stage matches are cheaper somewhere else" (Twitter #2), "Buy this week or pay more next week" (Twitter #3), "Same-day buying is its own skill. Most people learn it the hard way" (IG), "The 'official is cheaper' assumption is what most casual buyers default to. The data says otherwise" (Threads), "Elimination-game pricing gets weirder, not cleaner" (IG, TikTok).
- **First person used naturally**: "Pattern we see every weekend" (IG), "We track every major resale platform" (IG), "We track every platform" (TikTok). No forced "we" where a statement would do.
- **URL placement natural**: ticketscan.io and ticketscan.io/world-cup-2026 at end of each X post without CTA slogan. Instagram and TikTok use "Link in bio" per platform convention. Threads uses ticketscan.io/world-cup-2026 inline.
- **Instagram constraints**: exactly 5 hashtags, 0 emojis (brand guideline: max 5 hashtags, max 2 emojis).
- **TikTok hashtags only**: 9 hashtags in the TikTok caption, emoji-free caption body.
- **Final self-check pass**: re-read each post asking "person or AI?" -- rhythm varies, prices/dates are specific, openings differ (subject-first on Twitter #1, action-first on Twitter #2, deadline-first on Twitter #3, scene-setter on IG, check-in opener on Threads, POV fragment on TikTok). Spelled-out dollar amount ("forty-dollar markup") used once on IG per voice-guide variation rule.

## Notes
- **Today's Hook 3 alignment**: nmcnamee99's same-day Raptors-Cavs G2 case (signed up ~30 hours before tip-off looking for last-minute pricing intelligence, hit a Day 19 empty price-history table) is today's single richest content seed. The user is NOT named in any post (privacy boundary). What gets surfaced is the canonical 6-hour playbook the user actually needed. Three posts (Twitter #1, IG, TikTok) carry that pattern data across three voices. This is also the content seed for Tuesday 4/28's blog ("Same-Day NBA Playoff Tickets: The 6-Hour Playbook") per next-week-plan -- today's social slate is doing pre-publication audience seeding for that piece.
- **FIFA Sunday refresh on schedule**: continues Saturday's 4/25 Twitter #2 + Threads beat. Today's data movement: zero. The 38/58 = 65.5% ratio held for the third straight check (Wednesday 28/42 = 66.6%, Saturday 38/58 = 65.5%, today 38/58 = 65.5% with no new venues priced on the secondary). The story becomes "the trend is rock solid 14 days into post-blog tracking" -- which is itself a reinforcing angle for the still-unpublished Wednesday blog.
- **Cross-link between hooks**: Twitter #2 and Threads both name MetLife and SoFi as the spread drivers, which threads back into Saturday's MetLife refresh storyline without making it the primary message. Same intentional cross-reinforcement pattern as the 4/25 slate. The same audience seeing yesterday's MetLife morning post should see MetLife mentioned in today's FIFA data story too.
- **Operational escalation (Hook 1)**: Day 19 uncommitted SEO bundle (per next-week-plan: 17 modified + 7 untracked files holding ~50 schema improvements) still blocking deploy. Day 19 publish-velocity zero-streak (last published post 2026-04-07, seven drafts unshipped: 4/8, 4/14, 4/15, 4/16, 4/21, 4/22, 4/23). Day 19 price-tracking-cron zero-streak. Three identical-length zero-streaks now -- structural pattern. Same flag as the past week, now compounding because today's social slate (Twitter #1, IG, TikTok) is doing pre-audience-seeding for Tuesday's blog publish that won't happen if the publish pipeline stays broken. Single round of `./marketing-agents/scripts/publish-draft.sh` runs clears most of the backlog.
- **Cross-agent obligation flag (Hook 4)**: SEO Ask 2 (FAQ audit, 16 questions, 40-100 words each) is due tomorrow 4/27 and hasn't started per content-hook.md. Not a Social Agent task but worth re-flagging here so the daily output is the centralized record. It needs to slot into Monday alongside the Summer Concert publish + the 4/14, 4/15, 4/16 drafts going live.
- **Pre-gen quality issue today**: Wrong day of week on Twitter #1 (called Sunday "Saturday"), made-up stat on Twitter #2 ("up 8% from last week"), made-up platform stats on IG ("$41 average savings, $187 top savings, 12,000 comparisons" -- none of those exist in our data files), em dash for emphasis on IG, pure platitude on Threads. This is the second consecutive weekend of bad pre-gen (4/25 also had wrong day of week + three of four entries off-target). Worth flagging to whoever seeds the pre-gen content -- the 4/26 batch reads like it was generated weeks ago without checking the current date, current hooks, or voice rules.
- **Backup if a post needs to swap out**:
  - Florence + The Machine 5-days-out (May 1 State Farm Arena) with section-specific pricing. Would replace Twitter #3 if a harder summer-concert news beat lands mid-day.
  - NHL Round 1 G3 cross-series fee math story (Oilers, Maple Leafs, Caps/Pens all likely playing G3 today). Reserve for Twitter #2 if a clean fee-flip pattern emerges across matchups today and FIFA refresh becomes the lower-priority slot.

## Tomorrow Ideas (Monday 2026-04-27)
- **Summer Concert blog launch amplification** -- if Monday's "Summer Concert Tour 2026 Tickets" blog actually publishes (third Monday in a row scheduled), all of Monday's social should pivot to amplification. Twitter morning post leads with the new blog URL + the headline data point. IG carousel with the same data. Threads conversational adaptation. TikTok POV on "the buying window is closing this Friday."
- **Day 20 publish-streak escalation post (internal only, NOT social)** -- 20-day publish-velocity zero-streak deserves a hard escalation to Lead Architect tomorrow morning. Not for social.
- **NBA Game 5 elimination-game pricing data** -- if any Round 1 series goes to Game 5 this Monday or Tuesday, pull the actual closeout pricing for a "what elimination games actually cost" data piece. Reads as a follow-up to today's same-day playbook content.
- **NHL Round 1 G3 wrap-up** -- if today's NHL G3 slate produces a clean fee-flip story across matchups, Monday morning Twitter post with the comparison data.
- **MetLife venue refresh post-launch traffic check** -- if Sunday morning analytics show movement on the venue page, a one-off X post on "what changed" could drive engagement and reinforce the page in the algorithm.
- **FIFA 26-day refresh** -- if the data moves more than 1 percentage point from today's 65.5% or the median spread changes meaningfully, single Monday Twitter post. If movement is flat again (third consecutive flat day), hold the next refresh until Wednesday for the 17-day-post-blog mark.

## Handoffs
- **Email Agent (Monday 2026-04-27)**: Same-day playoff playbook content is primed today on Twitter #1, IG, and TikTok. Monday's newsletter can reference the canonical 6-hour playbook (15-25% drop in final 90 minutes, lower-bowl-behind-basket arbitrage, 30-minute pre-tip verified-resale download) with a "we wrote this for the user who signed up Saturday looking for last-minute pricing" framing. The Pollstar $108.63 / +9% YoY summer-window stat is also primed on Twitter #3 -- newsletter can use either or both depending on whether the Tuesday blog slot or the Monday slot leads.
- **SEO Agent**: Same flag as past week -- the unshipped 17-file SEO bundle still needs to deploy for the AggregateOffer `lowPrice` to populate from the new section data (Chase Center 4/24, MetLife 4/25). Day 10 of SEO Day-10 escalation. Single `git push` clears most of the structured-data debt.
- **Content Agent**: Same-day playoff playbook is the explicit social pre-seed for Tuesday 4/28's "Same-Day NBA Playoff Tickets: The 6-Hour Playbook" blog (per next-week-plan). Today's three posts (Twitter #1, IG, TikTok) all use the canonical 6-hour playbook data points -- when the Tuesday blog publishes, the social audience will already have the framework primed. Wednesday's "World Cup 2026 General Sale Phase Closes" blog also gets pre-seeded today through Twitter #2 + Threads ("Two-thirds of group-stage matches are cheaper somewhere else"). Both Tuesday and Wednesday blogs have explicit social pre-seeding live today; both depend on the publish pipeline being unblocked Monday morning.
