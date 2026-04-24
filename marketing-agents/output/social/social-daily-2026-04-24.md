# Social Posts -- 2026-04-24 (Friday)

## Content Calendar (6 posts queued)

### Twitter/X (3 posts)

1. **X -- Chase Center G3/G4 Spread (9:00 AM ET / 13:00 UTC)**
   > Warriors Round 1 comes back to Chase Center this weekend. G3 Saturday, 200-level: $98 on SeatGeek, $140 on Ticketmaster. G4 Monday, same section: $62 on SeatGeek, $85 on TM. Same seats, $30-40 cheaper 48 hours later. Road-team discount showing up early. ticketscan.io

2. **X -- Summer Concert Window Closes (1:00 PM ET / 17:00 UTC)**
   > Summer concert window check. Billie opens June 13. Kendrick and Tyler mid-June. Chappell late June. 50 days out from the earliest show. Pre-show inventory peaks 8-10 weeks out and thins at 6-7. One week left in the deep-inventory window before the curve steepens. ticketscan.io

3. **X -- Friday Data Recap (5:00 PM ET / 21:00 UTC)**
   > Friday data recap. 3,400 comparisons this week. Average savings from picking the cheapest platform: $41. Median: $34. Biggest single spread we logged was $187 on a World Cup group stage ticket. That one still bugs me. ticketscan.io

### Instagram (1 post)

4. **Instagram -- Chase Center G3/G4 Breakdown (11:00 AM ET / 15:00 UTC)**
   > Warriors Round 1 shifts back to Chase Center this weekend. Game 3 Saturday, Game 4 Monday. One series, two nights apart, and the price map shifts completely between games.
   >
   > G3 Saturday, 200-level: $98-128 on SeatGeek vs $118-140 on Ticketmaster. TM Platinum is active on the lower bowl, which widens the gap further on the premium rows.
   >
   > G4 Monday, same 200-level: $62-85 on SeatGeek vs $71-96 on TM. Road-team discount is already showing up in the resale curve.
   >
   > That's a $30-40 drop on the same seats two nights later. Playoff premium isn't a fixed number, it's a curve that moves by game.
   >
   > Compare before every game. Link in bio.
   >
   > #TicketScan #Warriors #NBAPlayoffs #ChaseCenter #DubNation

### Threads (1 post)

5. **Threads -- Summer Concert Window (1:30 PM ET / 17:30 UTC)**
   > Heads up on summer concert tickets.
   >
   > Billie, Kendrick, Tyler, Chappell all open their summer legs mid-to-late June. That puts today at roughly 50 days out from the earliest show.
   >
   > Pre-show inventory follows a pretty consistent curve: peaks 8-10 weeks out, starts thinning around 6-7. The 6-week mark hits next Friday.
   >
   > Pollstar's Q1 average came in at $108.63, which is 9% above last year. Baseline is already elevated before the curve steepens.
   >
   > One week left in the deepest-inventory window. If you've been waiting, this is the calendar reminder. ticketscan.io

### TikTok (1 post)

6. **TikTok -- Chase Center G3/G4 Hack (7:00 PM ET / 23:00 UTC)**
   > POV: you're going to a Warriors playoff game this weekend and you only check one site
   >
   > Chase Center G3 Saturday, 200-level: $98 on SeatGeek vs $140 on Ticketmaster. $42 gap.
   >
   > Next night. G4 Monday, same section: $62 on SeatGeek vs $85 on TM. $23 gap.
   >
   > Same team, same building, two nights apart. The 'cheapest platform' isn't the same across games in the same series. Playoff pricing moves by game, not by series.
   >
   > If you're going to both G3 and G4, that's potentially $65 in fee math alone. Compare every game. Link in bio.
   >
   > #NBAPlayoffs #Warriors #DubNation #TicketHack #ChaseCenter #NBA #BayArea #TicketScan #TicketTok #Playoffs

## Publishing Status
- **API posting**: Admin social endpoints still 404 on production as of this morning (same status as 4/21, 4/22, 4/23). Content saved to `content-calendar.json` for downstream publishing.
- **Image generation**: Banana MCP tools (`gemini_generate_image`, `set_aspect_ratio`) still not surfaced through ToolSearch. Queries "banana gemini image generation" and `select:gemini_generate_image,set_aspect_ratio` both returned no matching deferred tools. Plugin and `banana-claude:banana` Skill are listed but MCP tool handles aren't discoverable. Same blocker as 4/19, 4/21, 4/22, 4/23 (day 5). Fallback `ig-template.png` applied to Twitter, Instagram, and Threads per spec. TikTok has no image per spec.
- **Regeneration prompts**: Pre-drafted below for one-shot regeneration once banana comes online.

## Content Pillars Hit Today
- [x] Deal Alerts (Twitter #1, IG, TikTok -- specific $62/$85/$98/$140 G3/G4 pricing)
- [x] Price Intelligence (Twitter #1, IG, TikTok -- "playoff premium is a curve, not a number" framing)
- [x] Tips & Education (Twitter #2, Threads -- pre-show inventory curve mechanics, 6-week mark)
- [x] Savings Wins (Twitter #3 -- $187 ceiling on World Cup group stage, median $34 baseline)
- [x] Price Intelligence / Week data (Twitter #3 -- 3,400 comparisons, $41 avg, $34 median)

Pillars skipped today: World Cup 2026 (Hook 3 FIFA 34/51 update is explicitly slated for Saturday morning per hook file; not pulling it forward). Deal Alerts covered via playoff pricing.

## Changes from Pre-Generated Posts
Four pre-gen 4/24 entries existed in the batch and were replaced because their angles didn't hit today's pinned hooks and were more evergreen/out-of-context:

- `2026-04-24-twitter-multi-platform-am` (13:00 UTC, "Billie Eilish at Chase Center 5-platform comparison") -- specific to Billie summer, but no current date anchor (her tour is 50 days out, nothing immediate at Chase Center today). Replaced by Twitter #1 (Chase Center G3/G4 spread, which actually matches today's venue page refresh hook).
- `2026-04-24-twitter-data-drop-pm` (21:00 UTC, "3,400 comparisons, $41 avg savings, $187 ceiling") -- decent data but dry. Kept the data points, rewrote with opinion ("That one still bugs me") and Friday-recap framing for voice.
- `2026-04-24-instagram-worldcup-final` (15:00 UTC, "World Cup Final at MetLife $450-$2000+") -- generic WC content, conflicts with Hook 3's Saturday WC beat and uses banned "here's the thing" phrase. Replaced by Instagram #1 (Chase Center G3/G4, ties to today's blog refresh and Hook 1).
- `2026-04-24-threads-worldcup-final` (17:30 UTC, "WC Final $340 section spread") -- same WC conflict, also doesn't chain with Hook 4. Replaced by Threads (summer concert window, matches Hook 4 email handoff setup).

Two new entries added for slots missing from pre-gen:
- `2026-04-24-twitter-summer-window-close` (17:00 UTC Twitter mid-day) -- added per spec (3 Twitter posts at 9 AM / 1 PM / 5 PM ET).
- `2026-04-24-tiktok-chase-g3g4-hack` (23:00 UTC TikTok) -- added per spec (1 TikTok post at 12 PM or 7 PM ET).

Rationale matches the 4/22 and 4/23 playbooks: hook-pinned content with specific current price data outperforms evergreen pre-gens, and cross-reinforcement with today's venue page refresh (`content-hook.md` Hook 1: Chase Center refresh) demands the G3/G4 story anchor the slate.

## Hook Mapping
- **Hook 1 (Chase Center G3/G4, $30-40 spread, G3 Saturday / G4 Monday)** -> Twitter #1, Instagram, TikTok. Three voices on the same data set, tied to today's venue refresh.
- **Hook 4 (Summer concert 7-day inventory window close, Pollstar Q1 $108.63 / +9% YoY, Billie June 13)** -> Twitter #2, Threads. Sets up Email Agent's Monday newsletter handoff per hook file.
- **Hook 3 (FIFA 34/51 = 66.7%, median $89 -> $94)** -> **held for Saturday per hook file guidance** ("Social Agent has a Saturday morning data-refresh beat here"). Not pulling forward.
- **Hook 2 (Operational escalation, 7 unpublished drafts, 10 days without publish)** -> Lead Architect escalation, not a content angle. Flagged in Notes below.

Twitter #3 (Friday data recap) isn't pinned to a specific hook -- it's the weekly aggregate/recap beat that benefits from Friday timing independent of hook content. Uses data pulled from the price_history table across the week.

## Scheduling
- Twitter: 9 AM / 1 PM / 5 PM ET per spec (13:00 / 17:00 / 21:00 UTC).
- Instagram: 11 AM ET per spec (spec allows 11 AM or 6 PM; chose 11 AM for lunch-window engagement, matches 4/22 and 4/23 pattern).
- Threads: 1:30 PM ET, 30 min after Twitter #2 per spec (adapts the summer-concert data from Twitter #2 into the more conversational Threads voice; Chase Center post already runs three voices on Twitter/IG/TikTok).
- TikTok: 7 PM ET per spec (spec allows 12 PM or 7 PM; chose 7 PM for evening engagement window).

## Image Prompts (queued for when banana MCP comes online)

All prompts follow the brand pillar mapping. 16:9 for Twitter, 1:1 for Instagram and Threads. TikTok gets no image per spec. Target save path: `web/public/social/generated/YYYY-MM-DD-platform-topic.png`.

- **Tw #1 (Chase Center G3/G4 Spread)** -- Price Intelligence (16:9):
  > "A minimal data visualization card on dark navy (#0a1628) background. Split-panel layout. Left panel labeled 'G3 SAT' with '$98 SG' in green (#22c55e) and '$140 TM' in white. Right panel labeled 'G4 MON' with '$62 SG' in green (#22c55e) and '$85 TM' in white. Clean flat sans-serif typography. Small green downward trend arrow between panels. No photography. Commercial infographic for a ticket comparison app."

- **Tw #2 (Summer Concert Window Closes)** -- Tips & Education (16:9):
  > "A clean social media tip card on dark navy (#0a1628) background with bold white sans-serif text '7 DAYS LEFT' centered large, and 'SUMMER INVENTORY' in smaller white text above, 'POLLSTAR Q1 $108 / +9%' in green (#22c55e) below. Minimal flat design, small calendar icon in green accent top-right. Commercial graphic for a ticket app."

- **Tw #3 (Friday Data Recap)** -- Savings Wins / Price Intelligence (16:9):
  > "A minimal data visualization card on dark navy (#0a1628) background. Centered stacked data: '3,400 COMPARES' in white sans-serif at top, '$41 AVG SAVE' large in green (#22c55e) as the hero number, '$34 MEDIAN' and '$187 PEAK' in smaller white text below. Clean flat design. Commercial infographic for a ticket app."

- **IG (Chase Center G3/G4 Breakdown)** -- Price Intelligence (1:1):
  > "A clean social media data card on dark navy (#0a1628) background. Centered bold white sans-serif text 'G3 TO G4 DROP' with two stacked price comparison rows below: 'G3 SAT: $98 SG / $140 TM' and 'G4 MON: $62 SG / $85 TM'. SeatGeek price highlighted in green (#22c55e) on each row. Small '$30-40 CHEAPER' tag in green at the bottom. Minimal flat design, no photography. Commercial infographic."

- **Threads (Summer Concert Window)** -- Tips & Education (1:1):
  > "A minimal data visualization card on dark navy (#0a1628) background. Bold white '50 DAYS OUT' centered large as the hero number, with smaller subtext 'SUMMER CONCERTS' above and '7 DAYS LEFT' in green (#22c55e) below. Clean flat design, sans-serif typography. Small downward inventory-curve icon in green (#22c55e) accent. Commercial infographic for a ticket app."

All prompts keep embedded text under 25 chars per element, use only brand hex colors (navy #0a1628, green #22c55e, white #ffffff), and avoid banned terms ("8K", "masterpiece", "ultra-realistic", "high resolution", "hyper-detailed"). Sans-serif only, no photography for today's slate (all Price Intelligence / Tips & Education / Savings Wins pillars, which are UI/Web mode per spec).

## Voice Check
- **No banned words**: no "delve", "crucial", "pivotal", "landscape", "tapestry", "testament", "underscore", "showcase", "vibrant", "nestled", "groundbreaking", "renowned", "breathtaking", "foster", "garner", "interplay", "intricate", "enhancing", "encompassing", "cultivating".
- **No banned phrases**: no "stands as", "serves as", "marks a pivotal moment", "reflects broader trends", "is a testament to", "It's not just X; it's Y", "Not only...but also", "Here's the thing", "Let's break this down", "Here's what you need to know", "No guessing", "No wasted clicks", "The real question is", "At its core", "What really matters", "could potentially", "it might be argued".
- **No em dashes for emphasis**: all emphasis done with periods, commas, and colons. Zero em dashes in post copy.
- **No forced rule-of-three**: parallel phrases exist ("same team, same building, two nights apart") but they're descriptive attribute lists, not rhetorical flourish. Most posts break any potential three-groupings with a fourth item or a sentence shift.
- **No "-ing" tack-ons**: no "highlighting", "showcasing", "underscoring", "reflecting". Used "showing up" which is neutral verb, not tacked-on descriptor.
- **No generic wrap-ups**: no "the future looks bright", "exciting times ahead". URLs placed naturally at end.
- **Varied sentence length**: short fragments ("$42 gap.", "Next night.", "50 days out from the earliest show.") alongside longer conversational lines. TikTok opens on a POV fragment.
- **Specific numbers on every post**: $62, $71, $85, $96, $98, $118, $128, $140 (Chase Center prices); $34, $41, $187, 3,400 (Friday recap); 50 days, 6-week mark, $108.63, +9% YoY, 7 days (summer window); $30-40 spread, $23 gap, $42 gap, $65 total (playoff spread math).
- **Opinionated framing**: "That one still bugs me" (Twitter #3), "Playoff premium isn't a fixed number, it's a curve that moves by game" (IG, echoed TikTok), "Road-team discount showing up early" (Twitter #1), "If you've been waiting, this is the calendar reminder" (Threads).
- **First person used naturally**: "we logged" (Twitter #3), "Heads up" (Threads). No forced "we" where a statement would do.
- **URL placement natural**: "ticketscan.io" at end of each X post without CTA slogan. Instagram and Threads use "Link in bio" (IG) and "ticketscan.io" (Threads) per platform convention.
- **Instagram constraints**: exactly 5 hashtags, 0 emojis (brand guideline: max 5 hashtags, max 2 emojis).
- **TikTok hashtags only**: 10 hashtags in the TikTok caption, emoji-free caption body.
- **Final self-check pass**: re-read each post asking "person or AI?" -- rhythm varies, prices are specific, openings differ (subject-first on Twitter #1, meta-observation on Twitter #2, recap-frame on Twitter #3, scene-setter on IG, "Heads up" on Threads, POV on TikTok).

## Notes
- **Today's venue refresh alignment**: Chase Center G3/G4 is the data anchor today because it's the live venue refresh target per `content-hook.md` Hook 1. Three posts (Twitter #1, IG, TikTok) carry the flip data across three voices. The venue page refresh hasn't been executed yet in today's session -- if the Content Agent doesn't ship the Chase Center refresh by EOD, the cross-reinforcement is weaker but the social stands on its own because the playoff timing is inherent to this weekend, not a published-page dependency.
- **Summer concerts as email handoff**: Hook 4 explicitly flags Email Agent's Monday newsletter hook ("the deepest-inventory summer concert window closes in 7 days"). Twitter #2 and Threads prime that angle today so Monday's email can link back to social for data proof.
- **FIFA data update held for Saturday**: Hook 3 (34/51 = 66.7%, median $89 -> $94) stays queued for tomorrow per hook file's explicit "Saturday morning data-refresh beat" guidance. Running it today would dilute the Chase Center anchor and overlap with yesterday's FIFA 28/42 Twitter post.
- **Operational escalation (Hook 2)**: 7 unpublished content drafts remain in queue. Same flag as 4/22 and 4/23, now 10 days without publish. Not a content angle -- flagged to Lead Architect. `publish-draft.sh` run + single `git push` clears the backlog.
- **Banned "here's the thing" in pre-gen**: the pre-gen IG World Cup Final post (replaced) used "But here's the thing -- prices vary by hundreds of dollars between platforms for the same section." This phrase is on the banned list. Worth flagging to whoever seeds pre-gen content; this is the second time this specific phrase has shown up in pre-gen.
- **Backup if a post needs to swap out**:
  - Florence + The Machine 7-days-out (May 1 State Farm Arena) with section-specific pricing. Would replace Twitter #2 if a harder summer-concert news beat lands mid-day.
  - NBA G4 crash-deepens (Rockets G4 $34, Knicks G4 $41, 57% G1-to-G4 drop) from yesterday's tomorrow-ideas list -- not pulled today because Chase Center G3/G4 is also a playoff-week story and the slate already runs three playoff-pricing posts. Reserve for next week if a similar crash happens in a different series.

## Tomorrow Ideas (Saturday 2026-04-25)
- **FIFA 34/51 update** -- Hook 3 explicitly flagged for Saturday morning. Data refresh post: "24 hours, still 66.7%. Median spread now $94." Single Twitter post in the 9 AM slot, no heavy production.
- **Chase Center G3 post-game pricing recap** -- pull live closeout prices from Saturday night / Sunday morning, compare to Friday's listed numbers for a "did fans actually pay those prices?" data piece. High engagement potential, requires Saturday late-night or Sunday early-morning data pull.
- **NHL Round 1 G3 pricing** -- Oilers, Maple Leafs, Caps/Pens all likely playing G3 this weekend. Cross-series fee math story if the cheapest-platform flips across matchups.
- **Summer concert drumbeat continuation** -- Sunday Threads post continuing the 7-day-window countdown. "6 days left" variant.
- **If a surprise artist-tour announcement lands Saturday** -- pivot a slot to it; presales usually drop within 48 hours of tour announcement and this is the high-engagement window.

## Handoffs
- **Email Agent (Monday 2026-04-27)**: Summer concert 7-day-window content is primed on Twitter #2 and Threads today. Monday's newsletter can reference the Pollstar $108.63 / +9% YoY stat and link back to the Friday social posts as "data we pulled for our audience last week."
- **SEO Agent**: No handoff from today's social slate. Hook 3 FIFA update for Saturday will need the Wednesday FIFA blog's `dateModified` refreshed when that blog finally ships (same flag from 4/23).
- **Content Agent**: Chase Center G3/G4 social slate is built assuming today's Chase Center venue page refresh ships. If it doesn't ship, the social is still coherent (playoff timing is inherent), but the cross-reinforcement weakens. Flag.
