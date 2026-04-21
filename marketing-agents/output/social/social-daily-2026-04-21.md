# Social Posts -- 2026-04-21

## Content Calendar (6 posts queued)

### Twitter/X (3 posts)

1. **X -- Warriors G2 Chase Center (9:00 AM ET / 13:00 UTC)**
   > Warriors G2 at Chase Center last night, 400-level: $74 on Ticketmaster, $68 on SeatGeek, all-in. Six bucks on a cheap seat is 9%. Compound that across a seven-game series and it adds up. ticketscan.io

2. **X -- FIFA Resale 20 Days / 8-of-10 (1:00 PM ET / 17:00 UTC)**
   > FIFA's resale marketplace hit 20 days live yesterday. Spot-checked ten group-stage matches at MetLife, SoFi, and Lincoln Financial: FIFA resale was more expensive than StubHub on eight. Same Category 3 seat. Official isn't cheapest. ticketscan.io/world-cup-2026

3. **X -- NBA G2 Platform Flip (5:00 PM ET / 21:00 UTC)**
   > Watch this play out in 48 hours. Warriors G2: SeatGeek $68, Ticketmaster $74, SeatGeek wins. Rockets G2: SeatGeek $62, Ticketmaster $51, Ticketmaster wins. Same playoff round. Opposite platform winners. The cheapest site changes by matchup. ticketscan.io

### Instagram (1 post)

4. **Instagram -- NBA G2 Double (11:00 AM ET / 15:00 UTC)**
   > NBA Round 1 Game 2s this weekend and the cheapest-platform story flipped inside 48 hours.
   >
   > Warriors at Chase Center, 400-level: $74 on Ticketmaster, $68 on SeatGeek. SeatGeek wins by six bucks.
   >
   > Rockets at Toyota Center, similar level: $51 on Ticketmaster, $62 on SeatGeek. Ticketmaster wins by eleven.
   >
   > Same playoff round, same nightly inventory drops, opposite platform winners. That's the case for actually checking both every time. A 30-second compare before you click.
   >
   > Link in bio.
   >
   > #TicketScan #NBAPlayoffs #Round1 #TicketDeals #Basketball

### Threads (1 post)

5. **Threads -- FIFA Resale Twenty Days (1:30 PM ET / 17:30 UTC)**
   > FIFA's resale marketplace has been live twenty days as of yesterday. Pulled the spot-check we ran on 4/16 and refreshed it.
   >
   > Ten group stage matches at MetLife, SoFi, and Lincoln Financial. Category 3 seat on each. FIFA resale was more expensive than StubHub on eight of them.
   >
   > Two outliers? Both Mexico host-city matches where resale supply is still thin.
   >
   > Official marketplace, higher prices. That still surprises me. 51 days to the opener. ticketscan.io/world-cup-2026

### TikTok (1 post)

6. **TikTok -- NBA G2 Platform Flip (7:00 PM ET / 23:00 UTC)**
   > NBA Round 1 Game 2s just dropped and the platform flip is wild
   >
   > Warriors G2 at Chase Center 400-level: $74 on Ticketmaster, $68 on SeatGeek. SeatGeek wins.
   >
   > Then Rockets G2 at Toyota Center similar category: $51 on Ticketmaster, $62 on SeatGeek. Ticketmaster wins.
   >
   > Same playoff round. Same weekend. Opposite cheapest platform. This is why you can't just pick a site and stick with it. Inventory swaps, prices swap, sometimes inside 24 hours.
   >
   > 30-second compare before every click. Link in bio.
   >
   > #NBAPlayoffs #NBARound1 #TicketHack #TicketScan #Warriors #Rockets #TicketTok

## Publishing Status
- **API posting**: Social posting endpoints not confirmed on production API. Content saved to `content-calendar.json`.
- **Image generation**: GOOGLE_AI_API_KEY still not configured (`~/.banana/config.json` absent, env var unset). Banana MCP tools still not surfaced via ToolSearch (`gemini_generate_image` / `set_aspect_ratio` not available via `select:` lookup or keyword search). Same blocker as 4/19. Fallback template (`ig-template.png`) used on all Twitter, Instagram, and Threads posts. TikTok posts have no image per spec.
- **To enable AI images**: set `GOOGLE_AI_API_KEY` in env or `~/.banana/config.json`, then re-run. Per-post prompts are pre-drafted below for when generation comes back online.

## Content Pillars Hit Today
- [x] Deal Alerts (Twitter #1 -- Warriors G2 $74 vs $68 9% delta on cheap seat)
- [x] Price Intelligence (Twitter #3 -- platform-flip across Warriors G2 and Rockets G2 within 48 hours)
- [x] Tips & Education (TikTok -- "30-second compare" anchored to the G2 platform-flip data)
- [x] World Cup 2026 (Twitter #2, Threads -- FIFA resale 20-day mark, 8-of-10 most expensive spot-check, 51-day countdown)
- [x] Savings Wins (Instagram -- rolled up G2 double spread with dollar deltas)

Pillars skipped today: none.

## Changes from Pre-Generated Posts
- Dropped all 4 pre-generated 4/21 entries:
  - Twitter AM said "Monday morning price drops" -- today is Tuesday, copy was wrong.
  - Twitter PM was generic "Game 3 home teams shifting" filler with no data and no specific matchup.
  - Instagram was a generic "MLB 162 games" piece with invented "20 games, $27 average" numbers and no news hook.
  - Threads said "Start your week" / "Monday" -- wrong day, also pure vibes with no data.
- Replaced with 6 fresh posts pinned to today's real hooks (per `content-hook.md`):
  - NBA Round 1 Game 2 platform-flip (Warriors G2 Chase Center: $74 TM / $68 SG; Rockets G2 Toyota Center: $51 TM / $62 SG). Two data pairs, opposite winners inside 48 hours -- the cleanest "check both platforms" social proof we've had this week. Covers Twitter #1, Twitter #3, Instagram, and TikTok.
  - FIFA resale 20-day mark (8 of 10 group-stage matches at MetLife/SoFi/Lincoln Financial were pricier than StubHub on the same Category 3 seat). Up from 7 of 10 in the 4/16 spot-check. Covers Twitter #2 and Threads.
- Added TikTok post for 4/21 (pre-gen had none). Aligns with the platform-flip Twitter/IG hooks for pillar consistency.
- Twitter cadence now 9 AM / 1 PM / 5 PM ET per spec (pre-gen was 9 AM / 5 PM only, no midday).
- Instagram cadence unchanged (11 AM ET).
- Threads at 1:30 PM ET (30 min after Twitter #2), adapting the FIFA resale angle because Twitter #2 is the most conversational and has the clearest "still surprises me" human reaction beat.

## Image Prompts (queued for when banana MCP comes online)

All prompts follow the brand pillar mapping in the agent spec. 16:9 for Twitter, 1:1 for Instagram and Threads. Targets saved to `web/public/social/generated/YYYY-MM-DD-platform-topic.png` on regeneration.

- **Tw #1** (Deal Alerts, 16:9): "A clean social media infographic card on dark navy (#0a1628) background. Bold white and green (#22c55e) sans-serif typography showing '$74 vs $68' with a small green '9% OFF' tag. Minimal flat design, no photography, no gradients. Commercial graphic design for a ticket comparison app."
- **Tw #2** (World Cup 2026, 16:9): "A large modern soccer stadium exterior at golden hour, World Cup 2026 flags and banners visible, fans walking toward the entrance gates. Warm natural sunlight, shallow depth of field on the crowd. Captured with Sony A7R IV, 24mm wide-angle lens at f/2.8. Sports editorial photography for a magazine cover."
- **Tw #3** (Price Intelligence, 16:9): "A minimal data visualization card on dark navy (#0a1628) background. Two horizontal bars side by side, one labeled 'WARRIORS G2' and one labeled 'ROCKETS G2'. Each bar has a green (#22c55e) checkmark on a different side. Clean white sans-serif typography. No photography. Commercial infographic for a ticket app."
- **IG** (Deal Alerts, 1:1): "A clean social media infographic card on dark navy (#0a1628) background. Two stacked rows of price comparisons: 'GSW G2  $74 / $68' and 'HOU G2  $51 / $62' in bold white and green (#22c55e) sans-serif typography, with a small green checkmark next to the lower number in each row. Minimal flat design, no photography. Commercial graphic for a ticket comparison app."
- **Threads** (World Cup 2026, 1:1): "A minimal data visualization card on dark navy (#0a1628) background. Bold white '8 / 10' centered with smaller label 'FIFA RESALE PRICIER' below and '51 DAYS TO OPENER' in subtle green (#22c55e) at the bottom. Clean flat design, no photography. Commercial infographic for a ticket app."

All prompts keep embedded text under 25 chars, use only brand hex colors, and avoid banned terms ("8K", "masterpiece", "ultra-realistic", "high resolution", "hyper-detailed").

## Voice Check
- No banned words used: no "delve", "crucial", "pivotal", "landscape", "tapestry", "testament", "underscore", "showcase", "vibrant", "groundbreaking", "foster", "garner", "interplay", "intricate", "enhancing", "encompassing".
- No banned phrases: no "stands as", "serves as", "reflects broader trends", "here's the thing", "let's break this down", "here's what you need to know", "no guessing", "no wasted clicks", "not just X; it's Y", "the real question is".
- No em dashes for emphasis in post copy. Periods, colons, and commas used instead. (Spec markdown uses `--` in headers which is fine.)
- Varied sentence length throughout. Short fragments ("SeatGeek wins.", "Same playoff round.", "That still surprises me.") alongside longer conversational lines.
- Specific dollar amounts on every post: $74, $68, $51, $62, six bucks, eleven bucks. Plus the 9%, 8-of-10, 51-day, and 20-day data points.
- Opinionated framing: "Watch this play out in 48 hours", "The cheapest site changes by matchup", "Official isn't cheapest", "That still surprises me", "platform flip is wild".
- First person used naturally on Twitter #2, Threads, TikTok ("Spot-checked ten", "Pulled the spot-check we ran on 4/16", "That still surprises me").
- Natural URL placement, no generic "Compare every platform in seconds" CTAs.
- Instagram at exactly 5 hashtags, 0 emojis (matches brand guideline).
- No rule-of-three forced groupings. No "-ing" tacked-on phrases ("highlighting", "showcasing", "underscoring", "reflecting"). No generic wrap-ups ("the future looks bright").
- TikTok uses hashtags only (emoji-free caption body, per spec).

## Notes
- **NBA Round 1 Game 2 data**: From `content-hook.md` Hook 1 (Warriors G2 at Chase Center: $74 TM / $68 SG all-in; Rockets G2 at Toyota Center: $51 TM / $62 SG). Two data pairs in one weekend with opposite platform winners -- the strongest single illustration we've had this week for the multi-platform-compare thesis. Used across 4 of the 6 posts today. Content Agent's tactical draft ("how to compare prices in 30 seconds") uses the same matchups, so social + blog cross-reinforce.
- **FIFA resale 20-day mark**: From `content-hook.md` Hook 2. Count moved from 7 of 10 (4/16 spot-check) to 8 of 10 (today). Mexico host-city matches remain the two outliers due to thin resale supply. Full data drop is slotted for the Wednesday 4/22 blog ("Three Weeks of FIFA Resale Data" per `next-week-plan.md`); today's Twitter #2 and Threads tee that up without burning the headline.
- **World Cup countdown math**: June 11, 2026 - April 21, 2026 = 51 days. Cited in Threads post.
- **Chappell Roan stadium dates** (Hook 4): Reporting is still chatter-stage, no formal announcement. Holding for Wednesday or Thursday per hook file's "watch-and-wait" priority. The four-of-six WC venue overlap is a strong cross-sell angle when it lands.
- **Florence + The Machine (May 1, 10 days out)**: Will cover tomorrow (Wednesday 4/22) as a 9-day countdown with State Farm Arena section data. Today's slots were stronger anchored to the playoff G2 and FIFA resale hooks.
- **Publishing pipeline risk** (Hook 3): Three blog drafts (4/14, 4/15, 4/16) and today's tactical draft are still unshipped per SEO agent's Day 5 escalation. Today's social posts stand alone without the blog links, but would cross-reinforce much harder if the blog backlog publishes today or tomorrow. Twitter #1, #3, Instagram, and TikTok all leave room for internal links to the tactical post once it's live.
- **Tomorrow ideas** (Wednesday 4/22):
  - FIFA resale Wednesday blog support -- 2-3 social posts if the three-week data blog ships.
  - NBA Round 1 Game 3 swap to road cities: inventory drops Tuesday night, prices re-settle Wednesday AM -- good Twitter AM angle.
  - Florence + The Machine 9-day countdown with State Farm Arena section data.
  - If Chappell Roan stadium presale confirms overnight, pivot one Twitter slot (probably PM) to the announcement with the four-of-six WC venue cross-sell.
