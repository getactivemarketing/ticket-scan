# Social Posts -- 2026-04-27 (Monday)

## Content Calendar (6 posts queued)

### Twitter/X (3 posts)

1. **X -- Summer Window Four Days Left (9:00 AM ET / 13:00 UTC)**
   > Four days until the Friday May 1 cutoff on summer concert deep inventory. Kendrick opens June 6. Tyler June 12. Billie June 13. Chappell June 14. Pollstar Q1 average ticket sits at $108.63, nine percent above last year. The window narrows after Friday. ticketscan.io

2. **X -- NBA Round 1 Elimination Week (1:00 PM ET / 17:00 UTC)**
   > NBA Round 1 hits Game 5 and 6 territory this week. Thunder-Grizzlies, Cavs-Magic, Knicks-Pistons, Nuggets-Clippers all in close-out range. Elimination-game cheapest-seat pricing typically lands 30-50% above series openers. Inventory thins fast. Compare 90 minutes pre-tip. ticketscan.io

3. **X -- FIFA Monday Refresh (5:00 PM ET / 21:00 UTC)**
   > Monday FIFA refresh. Sample now at 62 group-stage matches. FIFA priciest on 41 of them. 66.1%, fourth straight check landing in the 65 to 67 band. Median US-venue spread holding near $94. Two-thirds of group-stage matches are cheaper somewhere else. ticketscan.io/world-cup-2026

### Instagram (1 post)

4. **Instagram -- Summer Window Four Days Left (11:00 AM ET / 15:00 UTC)**
   > Four days until the summer concert window slams shut.
   >
   > Friday May 1 is the cutoff. After that the deep-inventory band where platforms haven't converged on price closes hard.
   >
   > Kendrick Lamar opens June 6. Tyler the Creator June 12. Billie Eilish June 13. Chappell Roan June 14. Sabrina, Olivia, the whole Lana run all in the same six-week stretch.
   >
   > Pollstar Q1 2026 average ticket: $108.63. Nine percent above last year. Summer is already running hot and nobody has hit the stage yet.
   >
   > Same artist, same venue, same row, four sites. 20 to 50% spread is normal at this stage. That's a hundred bucks on a typical lower-bowl seat.
   >
   > Wait two weeks and the floor moves up.
   >
   > Link in bio.
   >
   > #TicketScan #SummerConcerts #BillieEilish #ConcertTickets #PriceCompare

### Threads (1 post)

5. **Threads -- NBA Game 5/6 Elimination Week (1:30 PM ET / 17:30 UTC)**
   > NBA Round 1 hits Game 5 and 6 territory across multiple series this week.
   >
   > Thunder-Grizzlies, Cavs-Magic, Knicks-Pistons, Nuggets-Clippers. All in close-out range, all stacked through Tuesday and Wednesday.
   >
   > The pricing pattern at Game 5 and 6 is its own thing. Elimination-game lower-bowl typically lands 30 to 50% above the series openers because resale inventory thins fast. Same-day pricing gets weirder, not cleaner. Buyers who waited for the Game 4 dip get squeezed on the close-out games.
   >
   > Search volume peaks Tuesday morning around 'Thunder Game 5 tickets' and 'Knicks Game 6 cheap.' That's also the worst time to buy on instinct. The 90-minute pre-tip window is still where the cuts come.
   >
   > Compare every platform in the final 60 to 90 minutes. ticketscan.io

### TikTok (1 post)

6. **TikTok -- Summer Window POV (7:00 PM ET / 23:00 UTC)**
   > POV: it's Monday April 27 and you have four days left to buy summer concert tickets before the price floor shifts up
   >
   > The window: Friday May 1 is the cutoff. That's the last weekday before the first major June tours go live. Kendrick opens June 6. Tyler June 12. Billie June 13. Chappell June 14.
   >
   > Pollstar Q1 2026 numbers landed last week. Average concert ticket: $108.63. That's 9% above last year. The summer slate is already pricing aggressively and nobody has hit the stage yet.
   >
   > What happens after May 1: platforms converge on price. Inventory thins. Fees stop varying as much across sites. The 20 to 50% spread you can find right now collapses to 5 to 15%.
   >
   > We track every platform so you can see the full picture in 30 seconds.
   >
   > Link in bio.
   >
   > #SummerConcerts #ConcertTickets #BillieEilish #KendrickLamar #TylerTheCreator #ChappellRoan #TicketHack #TicketScan #TicketTok

## Publishing Status
- **API posting**: Admin social endpoints status unchanged from prior week (404 on production as of 4/24). Content saved to `content-calendar.json` for downstream publishing.
- **Image generation**: Banana MCP tools (`gemini_generate_image`, `set_aspect_ratio`) still not surfaced through ToolSearch. `select:gemini_generate_image,set_aspect_ratio` returns "No matching deferred tools found." Same blocker as 4/19 onward -- now **day 8**. Plugin and `banana-claude:banana` Skill are listed but MCP tool handles aren't discoverable. Fallback `ig-template.png` applied to Twitter, Instagram, and Threads per spec. TikTok has no image per spec.
- **Regeneration prompts**: Pre-drafted below for one-shot regeneration once banana comes online.

## Content Pillars Hit Today
- [x] Tips & Education (Twitter #1, Instagram, TikTok -- 4-day Friday May 1 cutoff countdown, Pollstar Q1 $108.63 / +9% YoY anchor, four headline tour openers named for date specificity)
- [x] Price Intelligence (Twitter #2, Threads -- NBA Round 1 Game 5/6 elimination-week pricing pattern, 30-50% above series openers, 90-minute pre-tip cut window)
- [x] Price Intelligence (Twitter #3 -- FIFA Monday refresh, 41 of 62 = 66.1%, fourth straight check in 65-67 band, $94 median spread)
- [x] World Cup 2026 (Twitter #3 carries the 45-day kickoff narrative continuity)

Pillars deliberately weighted toward Tips & Education on the summer-window angle (Hook 1) because today's blog production for `summer-concert-tour-2026-ticket-buying-guide` is the highest-stakes content event of the week. Three of six posts (Twitter #1, IG, TikTok) carry the same anchor data across three voices to pre-seed the blog publish if it ships today. NBA elimination-week Price Intelligence (Twitter #2 + Threads) carries Hook 4's Tuesday Same-Day Playbook into the live Game 5/6 news cycle. FIFA Monday refresh (Twitter #3) is the standard data-continuity beat from Saturday and Sunday.

## Changes from Pre-Generated Posts
**No pre-generated entries existed for 2026-04-27.** All six posts produced from scratch against today's content hooks (Hook 1 Summer Concert blog production, Hook 4 NBA elimination week). Same condition as 4/24 and 4/25 weekend slots when no pre-gen entries existed; standard hook-pinned production playbook applied.

This is the third time in the past two weeks the calendar has been empty for a current-day slot at agent run time. Worth re-flagging to the pre-gen seeding process -- the pattern is that pre-gen content shows up for some days and not others, with no obvious schedule. When pre-gen does show up, quality has been low (wrong day-of-week, made-up stats, banned-phrase usage). When pre-gen is absent, the agent produces the full slate from hooks without issue. The current state suggests the pre-gen pipeline is degrading; the simpler operational path may be to skip pre-gen entirely and let the agent run from hooks every day.

## Hook Mapping
- **Hook 1 (Summer Concert Tour 2026 blog produced today, Friday May 1 cutoff in 4 days, Pollstar Q1 $108.63 / +9% YoY)** -> Twitter #1, Instagram, TikTok. Three voices on the same anchor data. Specific tour-opener dates named on each (Kendrick June 6, Tyler June 12, Billie June 13, Chappell June 14) for date-specificity beats the prior "Billie opens June 13" framing used 4/23 and 4/24. This is also the explicit pre-seed for today's blog publish if Hook 1 ships -- if the blog goes live by mid-afternoon ET, the social audience will already have the framework primed.
- **Hook 4 (NBA Round 1 Game 5/6 territory across Thunder-Grizzlies, Cavs-Magic, Knicks-Pistons, Nuggets-Clippers; Tuesday's Same-Day Playbook publish trigger)** -> Twitter #2, Threads. Twitter post compresses the four matchups + 30-50% pricing pattern into a single tweet. Threads expands into the canonical close-out playbook with the 90-minute pre-tip cut window from yesterday's Hook 3 work. Today's Threads post intentionally rhymes with yesterday's same-day playbook content -- the audience seeing yesterday's IG and TikTok same-day pieces should see the same 90-minute window referenced in today's Threads to set up Tuesday's blog publish.
- **FIFA continuity (62 matches now, 41 priciest = 66.1%, fourth straight check in 65-67 band, $94 spread)** -> Twitter #3. Single-post coverage today; Wednesday's blog publish (still unshipped) would justify the standard two-post FIFA Saturday/Sunday refresh treatment. With Wednesday's blog now sliding to maybe-this-week status, FIFA gets reduced visibility in today's slate (1 post vs 2 yesterday). Sample size up from 58 to 62 matches reflects MetLife and SoFi inventory expanding on the secondary side.
- **Hook 2 (Day 20 publish-velocity zero-streak)** -> Lead Architect escalation, not a content angle. Flagged in Notes below.
- **Hook 3 (SEO Ask 2 FAQ audit due today 4/27)** -> Cross-agent operational obligation, not a content angle. Flagged in Notes below.

Today's slate weights toward Hook 1 (summer concert window) because today is the production day for the Monday big-idea blog, and three voices on the same anchor data is the standard pre-seed pattern (4/22 used three voices on FIFA, 4/26 used three voices on same-day playbook). NBA elimination week (Hook 4-equivalent) gets the standard two-post Twitter+Threads treatment. FIFA continuity drops to single-post rotation today as Hook 4 takes the doubled slot.

## Scheduling
- Twitter: 9 AM / 1 PM / 5 PM ET per spec (13:00 / 17:00 / 21:00 UTC).
- Instagram: 11 AM ET per spec (spec allows 11 AM or 6 PM; chose 11 AM for lunch-window engagement, matches 4/22, 4/23, 4/24, 4/25, 4/26 pattern).
- Threads: 1:30 PM ET, 30 min after Twitter #2 per spec (adapts the NBA elimination-week framing from Twitter #2 into the longer-form Threads voice with the 90-minute pre-tip window from yesterday's Hook 3 same-day playbook content).
- TikTok: 7 PM ET per spec (spec allows 12 PM or 7 PM; chose 7 PM for evening engagement window, matches 4/22, 4/23, 4/24, 4/25, 4/26 pattern).

## Image Prompts (queued for when banana MCP comes online)

All prompts follow the brand pillar mapping. 16:9 for Twitter, 1:1 for Instagram and Threads. TikTok gets no image per spec. Target save path: `web/public/social/generated/YYYY-MM-DD-platform-topic.png`.

- **Tw #1 (Summer Window Four Days Left)** -- Tips & Education / UI-Web (16:9):
  > "A clean social media tip card on dark navy (#0a1628) background with bold white sans-serif text '4 DAYS LEFT' centered large. Smaller white text 'SUMMER CONCERTS' above and 'POLLSTAR Q1 +9%' in green (#22c55e) below. Minimal flat design, small calendar icon in green accent top-right. Commercial graphic for a ticket app."

- **Tw #2 (NBA Round 1 Elimination Week)** -- Price Intelligence / UI-Web (16:9):
  > "A minimal data visualization card on dark navy (#0a1628) background. Bold white sans-serif text 'GAME 5/6' centered as the hero number, with '+30-50% VS G1' in green (#22c55e) below it. Smaller white subtext '90 MIN PRE-TIP' at the bottom. Clean flat design, no photography. Commercial infographic for a ticket comparison app."

- **Tw #3 (FIFA Monday Refresh)** -- Price Intelligence / UI-Web (16:9):
  > "A minimal data visualization card on dark navy (#0a1628) background. Bold white sans-serif text '41 OF 62' centered as the hero number, with '66.1% FIFA TOP' in green (#22c55e) below it. Smaller white subtext '$94 SPREAD HELD' at the bottom. Clean flat design, no photography. Commercial infographic for a ticket comparison app."

- **IG (Summer Window Four Days Left)** -- Hybrid (Cinema + UI overlay) (1:1):
  > "A large outdoor concert amphitheater interior photographed from the upper deck looking down at the stage, dramatic late-afternoon golden-hour stage lighting with the empty stage visible and seats in the foreground out of focus, shallow depth of field. Bold white text '4 DAYS' overlaid in the center with smaller white subtext 'TIL SUMMER WINDOW SHUTS' below. Captured with Canon EOS R5, 35mm lens at f/1.8. Commercial social media photography for an event ticket app."

- **Threads (NBA Game 5/6 Elimination Week)** -- Price Intelligence / UI-Web (1:1):
  > "A minimal data visualization card on dark navy (#0a1628) background. Centered stacked layout: 'ROUND 1' in white sans-serif at top, 'GAME 5/6' large in green (#22c55e) as the hero number, '+30-50% VS G1' in white below, and '90 MIN PRE-TIP' in smaller green text at the bottom. Clean flat design. Commercial infographic for a ticket app."

All prompts keep embedded text under 25 chars per element, use only brand hex colors (navy #0a1628, green #22c55e, white #ffffff), and avoid banned terms ("8K", "masterpiece", "ultra-realistic", "high resolution", "hyper-detailed"). Twitter #2, Twitter #3, and Threads use UI/Web data-visual mode (Price Intelligence pillar). Twitter #1 uses UI/Web (Tips pillar). Instagram uses hybrid photography. Note: IG prompt uses generic "outdoor concert amphitheater" instead of any specific venue name to avoid IMAGE_SAFETY rejections on real-venue prompts (per spec retry guidance).

## Voice Check
- **No banned words**: no "delve", "crucial", "pivotal", "landscape", "tapestry", "testament", "underscore", "showcase", "vibrant", "nestled", "groundbreaking", "renowned", "breathtaking", "foster", "garner", "interplay", "intricate", "enhancing", "encompassing", "cultivating".
- **No banned phrases**: no "stands as", "serves as", "marks a pivotal moment", "reflects broader trends", "is a testament to", "It's not just X; it's Y", "Not only...but also", "Here's the thing", "Let's break this down", "Here's what you need to know", "No guessing", "No wasted clicks", "The real question is", "At its core", "What really matters", "could potentially", "it might be argued".
- **No em dashes for emphasis**: all emphasis done with periods, commas, and colons. Zero em dashes in post copy.
- **No forced rule-of-three**: NBA matchup list (Thunder-Grizzlies, Cavs-Magic, Knicks-Pistons, Nuggets-Clippers) is a four-item enumeration, not a rule of three. Tour openers in Tw #1, IG, TikTok are a four-item list (Kendrick, Tyler, Billie, Chappell), also four items, not three.
- **No "-ing" tack-ons**: no "highlighting", "showcasing", "underscoring", "reflecting". "Pricing" appears as standard noun usage in NBA posts, not descriptor tack-on.
- **No generic wrap-ups**: no "the future looks bright", "exciting times ahead", "momentum is building". URLs placed naturally at end of each post.
- **Varied sentence length**: short fragments ("Inventory thins fast.", "Wait two weeks and the floor moves up.", "Two-thirds of group-stage matches are cheaper somewhere else.") alongside longer conversational lines. TikTok opens on a POV fragment, IG opens on a scene-setter, Threads opens on a Round-1-update beat.
- **Specific numbers on every post**: 4 days, May 1, June 6/12/13/14, $108.63, +9% (summer slate); Game 5/6, 30-50%, 90 minutes, 60-90 minutes, four matchup names (NBA slate); 62 matches, 41 of them, 66.1%, 65-67% band, $94 (FIFA slate).
- **Opinionated framing**: "The window narrows after Friday" (Twitter #1), "Inventory thins fast" (Twitter #2), "Two-thirds of group-stage matches are cheaper somewhere else" (Twitter #3), "Wait two weeks and the floor moves up" (IG), "Same-day pricing gets weirder, not cleaner. Buyers who waited for the Game 4 dip get squeezed on the close-out games" (Threads), "That's also the worst time to buy on instinct" (Threads).
- **First person used naturally**: "We track every platform" (TikTok). No forced "we" where a statement would do. IG and Threads kept third-person observational.
- **URL placement natural**: ticketscan.io and ticketscan.io/world-cup-2026 at end of each X post and Threads post without CTA slogan. Instagram and TikTok use "Link in bio" per platform convention.
- **Instagram constraints**: exactly 5 hashtags, 0 emojis (brand guideline: max 5 hashtags, max 2 emojis).
- **TikTok hashtags only**: 9 hashtags in the TikTok caption, emoji-free caption body.
- **Final self-check pass**: re-read each post asking "person or AI?" -- rhythm varies, prices/dates are specific, openings differ (countdown-first on Twitter #1, beat-update on Twitter #2, day-stamped check on Twitter #3, scene-setter on IG, status-update on Threads, POV fragment on TikTok). Spelled-out dollar amount ("a hundred bucks") used once on IG per voice-guide variation rule. "Forty-five bucks" / "fifty-nine bucks" pattern from prior days deliberately not used today since no specific concert pricing pull was anchored to the data.

## Notes
- **Today's Hook 1 alignment**: The Summer Concert Tour 2026 blog is being produced TODAY in this run per content-hook.md. Today's Twitter #1, IG, and TikTok all pre-seed the blog with the same Friday May 1 / Pollstar $108.63 / +9% YoY anchor data. If the blog publishes by mid-afternoon ET, today's social audience will already have the framework primed. If the blog slips again (third Monday in a row), the kill-permanently trigger from yesterday's plan fires and the angle goes to the graveyard. Social slate today is built to amplify a Monday publish; if no publish happens, the social posts still hold value as standalone Hook 1 coverage.
- **NBA elimination-week alignment**: Twitter #2 + Threads on NBA Round 1 Game 5/6 territory pre-seeds Tuesday's `same-day-nba-playoff-tickets-6-hour-playbook` blog. The 90-minute pre-tip window is the same data point used in 4/26 Twitter #1, IG, and TikTok same-day playbook posts -- intentional cross-day reinforcement so the audience hits Tuesday's blog publish with the framework already primed across Saturday/Sunday/Monday social.
- **FIFA refresh reduction**: Today's FIFA coverage drops from 2 posts (Saturday, Sunday) to 1 post because Hook 1 (summer window) takes the doubled slot. Sample size up from 58 to 62 matches reflects MetLife and SoFi secondary inventory expanding -- consistent with the 4/25 MetLife refresh narrative. The 65-67% band has now held for four consecutive checks; the data continues to reinforce the still-unpublished Wednesday FIFA blog seed.
- **Operational escalation (Hook 2)**: Day 20 uncommitted SEO bundle (per next-week-plan: 17 modified + 7 untracked files holding ~50 schema improvements) still blocking deploy. Day 20 publish-velocity zero-streak (last published post 2026-04-07; eight drafts unshipped: 4/8, 4/14, 4/15, 4/16, 4/21, 4/22, 4/23, plus today's 4/27 once it lands). Day 20 price-tracking-cron zero-streak. Three identical-length zero-streaks now -- structural pattern. **Day 20 is the tipping point where the backlog stops being a queue and starts being a graveyard** per content-hook.md Hook 2 framing. Drafts older than three weeks lose freshness for any news-pegged angles, and the 4/14 NBA Round 1 piece is now drift-aging into Round 2 territory across most series. Single round of `./marketing-agents/scripts/publish-draft.sh` runs clears most of the backlog.
- **Cross-agent obligation flag (Hook 3)**: SEO Ask 2 (FAQ audit, 16 questions, 40-100 words each) is due TODAY 4/27. Yesterday's social log re-flagged this; today's hook surfaces it as a today-or-it's-late deadline. Not a Social Agent task but worth re-flagging here so the daily output is the centralized record. The Monday block must do the FAQ audit AND the Summer Concert blog AND a backlog publish run.
- **Pre-gen status today**: ZERO pre-gen entries existed for 4/27. Same condition as 4/24 and 4/25 weekend slots. The pre-gen pipeline appears to be degrading or running on an opaque schedule -- when it shows up, quality has been low (wrong day-of-week, made-up stats, banned phrasing); when it doesn't, the agent produces a clean slate from hooks. The simpler operational path may be to skip pre-gen entirely and let the agent run from hooks every day. Re-flagging this in the pattern-tracking sense for whoever maintains the pre-gen process.
- **Backup if a post needs to swap out**:
  - Florence + The Machine 4-days-out (May 1 State Farm Arena) with section-specific pricing if a harder summer-concert news beat lands mid-day. Would replace Twitter #1.
  - NHL Round 1 elimination-game cross-series pricing data (Oilers, Maple Leafs, Caps/Pens all likely playing G3 today, G5/6 territory by week's end). Reserve for Twitter #2 if NHL produces a cleaner data story than NBA mid-day.
  - Summer Concert Tour 2026 blog launch amplification post -- if the blog actually publishes by mid-afternoon ET, swap Twitter #3 (FIFA refresh) for a launch-amplification post linking the new blog URL with the headline data point. FIFA refresh data is too flat to lose if the blog ships and the launch-amp opportunity appears.

## Tomorrow Ideas (Tuesday 2026-04-28)
- **Same-Day NBA Playoff Tickets blog launch amplification** -- if Tuesday's `same-day-nba-playoff-tickets-6-hour-playbook` blog actually publishes (highly likely given today's pre-seeding work and the Game 5/6 search-volume window), all of Tuesday's social should pivot to amplification. Twitter morning post leads with the new blog URL + the headline data point (15-25% drop in final 90 minutes). IG carousel with the canonical 6-hour playbook. Threads conversational adaptation. TikTok POV on "the same-day playbook for tonight's Game 5."
- **Summer Concert blog launch amplification (if Monday's slipped)** -- if Hook 1's summer-concert blog slipped today and somehow ships Tuesday morning instead, run the same launch-amplification pattern. Less likely scenario per the kill-permanently trigger but flagging for completeness.
- **NBA Game 5 elimination-game live pricing data** -- if any Round 1 series goes to Game 5 Tuesday or Wednesday, pull actual close-out pricing for a "what elimination games actually cost" data piece. Reads as a follow-up to today's Twitter #2 / Threads NBA elimination-week framing and reinforces Tuesday's blog publish.
- **NHL Round 1 G5/6 wrap-up** -- if Monday or Tuesday NHL G5 produces a clean fee-flip story across matchups, Tuesday afternoon Twitter post with the comparison data.
- **FIFA 24-day refresh** -- if the data moves more than 1 percentage point from today's 66.1% or the median spread changes meaningfully, single Tuesday Twitter post. If movement is flat for the fifth consecutive check, hold the next refresh until Wednesday for the 16-day-post-blog mark.
- **Day 21 publish-streak escalation post (internal only, NOT social)** -- if Hook 1's blog slipped Monday, 21-day publish-velocity zero-streak deserves a hard escalation to Lead Architect Tuesday morning. Not for social.

## Handoffs
- **Email Agent (Tuesday 2026-04-28)**: Summer Concert window content is primed today on Twitter #1, IG, and TikTok with the 4-day Friday May 1 cutoff framing. Tuesday's newsletter can either (a) lean on the Hook 1 blog if it published Monday with a "we wrote the deep-dive on the 4-day window" framing, or (b) reference the same Pollstar $108.63 / +9% YoY data with a "the window closes Friday" countdown framing. NBA Game 5/6 elimination-week pattern is also primed on Twitter #2 + Threads -- newsletter can reference the 30-50% above series openers data and the 90-minute pre-tip cut window if Tuesday's same-day blog publishes.
- **SEO Agent**: Same flag as past week -- the unshipped 17-file SEO bundle still needs to deploy for the AggregateOffer `lowPrice` to populate from the new section data (Chase Center 4/24, MetLife 4/25). Day 11 of SEO Day-10 escalation. Single `git push` clears most of the structured-data debt. Also: SEO Ask 2 (FAQ audit, 16 questions, 40-100 words each) is due today per content-hook.md Hook 3 -- not the Social Agent's deliverable but worth flagging in the cross-agent record.
- **Content Agent**: Today's Twitter #1, IG, and TikTok pre-seed Hook 1's Summer Concert Tour 2026 blog with the canonical Friday May 1 cutoff and Pollstar $108.63 anchor data. Today's Twitter #2 and Threads pre-seed Hook 4's Tuesday Same-Day NBA Playoff Tickets blog with the Game 5/6 elimination-week framing and 90-minute pre-tip cut window. Both Tuesday and the Hook 1 blog have explicit social pre-seeding live today; both depend on the publish pipeline being unblocked Monday morning. The third miss on Hook 1 fires the kill-permanently trigger from yesterday's plan -- if the Summer Concert blog slips again, the angle goes to the graveyard and Tuesday's slate has to pivot entirely to the same-day playbook.
