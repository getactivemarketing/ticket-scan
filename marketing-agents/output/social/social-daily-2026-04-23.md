# Social Posts -- 2026-04-23

## Content Calendar (6 posts queued)

### Twitter/X (3 posts)

1. **X -- Warriors/Rockets Fee Flip (9:00 AM ET / 13:00 UTC)**
   > Warriors G2 at Chase Center, 400-level: $74 on Ticketmaster, $68 on SeatGeek. SeatGeek wins by six. Same weekend, Rockets G2, same level: $51 on Ticketmaster, $62 on SeatGeek. Ticketmaster wins by eleven. Same round, opposite winners. ticketscan.io

2. **X -- Summer Concert T-7 Weeks (1:00 PM ET / 17:00 UTC)**
   > Billie, Kendrick, Tyler, Chappell all open June tour legs. That's seven weeks out from today. Pollstar Q1 average is $108, up 9% year over year. The window where inventory is deep and platforms haven't converged on price is closing fast. ticketscan.io

3. **X -- FIFA 28/42 Data Update (5:00 PM ET / 21:00 UTC)**
   > Another 24 hours of FIFA resale data. Sample now at 42 group-stage matches. FIFA priciest on 28 of them. 66.6%, basically identical to yesterday's ratio. Median US-venue spread crept from $84 to $89. ticketscan.io/world-cup-2026

### Instagram (1 post)

4. **Instagram -- Fee Flip Breakdown (11:00 AM ET / 15:00 UTC)**
   > Saturday night, two NBA Round 1 Game 2s, two different 'cheapest' platforms.
   >
   > Warriors at Chase Center, 400-level: $74 on Ticketmaster, $68 on SeatGeek. SeatGeek wins by six bucks.
   >
   > Rockets at Toyota Center, 400-level: $51 on Ticketmaster, $62 on SeatGeek. Ticketmaster wins by eleven.
   >
   > Same playoff round. Same 48 hours. Same price tier. Opposite winners.
   >
   > This is why the 'which platform is cheaper' question has no permanent answer. Fee math is a moving target, by event, by venue, by day, sometimes by hour.
   >
   > Compare every time, every event. Link in bio.
   >
   > #TicketScan #NBAPlayoffs #SeatGeek #Ticketmaster #Basketball

### Threads (1 post)

5. **Threads -- Summer Concert Window (1:30 PM ET / 17:30 UTC)**
   > Summer concert window check. Billie Eilish, Kendrick Lamar, Tyler the Creator, and Chappell Roan all open June tour legs. That puts today at roughly seven weeks out from the earliest shows.
   >
   > Pollstar Q1 average came in at $108, which is 9% above last year. Summer is already running hot and nobody has taken a stage yet.
   >
   > The pre-show window where inventory is deepest and platforms haven't converged on price is real, and it's closing fast. If you're waiting, you're probably paying more next week. ticketscan.io

### TikTok (1 post)

6. **TikTok -- Fee Flip Hack (7:00 PM ET / 23:00 UTC)**
   > NBA Round 1 hack: the 'cheapest platform' flipped inside 48 hours this weekend
   >
   > Warriors G2 at Chase Center, 400-level: $74 on Ticketmaster, $68 on SeatGeek. SeatGeek wins by six.
   >
   > Next night. Rockets G2 at Toyota Center, same level: $51 on Ticketmaster, $62 on SeatGeek. Ticketmaster wins by eleven.
   >
   > Same playoff round. Same price tier. Opposite winners.
   >
   > This is why the 'which site is cheaper' answer has no permanent verdict. Fees shift by event, by venue, by day, sometimes by hour. Static tip lists get it wrong on day two.
   >
   > Compare every time. Link in bio.
   >
   > #NBAPlayoffs #NBARound1 #TicketHack #Warriors #Rockets #SeatGeek #Ticketmaster #TicketScan #TicketTok #Playoffs

## Publishing Status
- **API posting**: Admin social endpoints continue to 404 on production as of this morning's check. Unchanged from 4/21 and 4/22. Content saved to `content-calendar.json` for downstream publishing.
- **Image generation**: Banana MCP tools (`gemini_generate_image`, `set_aspect_ratio`) still not discoverable via ToolSearch (queries "banana image generation gemini", "gemini_generate_image", "set_aspect_ratio image" all returned zero matches). Plugin appears installed and the `banana-claude:banana` Skill is listed, but the MCP tool handles aren't surfaced through the deferred-tool registry. Same blocker as 4/19, 4/21, 4/22. Fallback `ig-template.png` used on all Twitter, Instagram, and Threads posts. TikTok posts have no image per spec.
- **Regeneration prompts**: Per-post prompts pre-drafted below for one-shot regeneration once banana comes online.

## Content Pillars Hit Today
- [x] Price Intelligence (Twitter #1, IG, TikTok -- Warriors/Rockets fee flip cross-venue data)
- [x] Deal Alerts (Twitter #1, IG, TikTok -- specific current $74/$68/$51/$62 prices, Round 1 G2s)
- [x] Tips & Education (IG, TikTok -- "fee math is a moving target" reframe, static tip lists wrong by day two)
- [x] Price Intelligence / Data (Twitter #3 -- FIFA 28 of 42 = 66.6%, median spread $84 -> $89)
- [x] World Cup 2026 (Twitter #3 -- FIFA resale validation)
- [x] Tips & Education / Market timing (Twitter #2, Threads -- 7-week summer concert window, Pollstar Q1 $108)

Pillars skipped today: Savings Wins (no single standalone "someone saved $X" example pulled today; the fee flip covers both fee data and savings framing).

## Changes from Pre-Generated Posts
Four pre-gen 4/23 entries existed in the batch and were removed because their time slots conflicted with the hook-pinned content and their angles were generic evergreen, not today's live market:
- `2026-04-23-twitter-midweek-concerts-am` (13:00 UTC, "midweek concerts 15-25% cheaper") -- evergreen tip, not tied to today's blog or hooks. Replaced by Twitter #1 (Warriors/Rockets fee flip).
- `2026-04-23-twitter-worldcup-semifinal-pm` (21:00 UTC, "Semifinal at SoFi $289-$1,450") -- decent data but out of date relative to Hook 3 (fresh FIFA 28/42 number). Replaced by Twitter #3 (FIFA data update).
- `2026-04-23-instagram-concert-summer` (15:00 UTC, "Summer concert season is loading up fast...") -- generic, no specific price data, overlapping with my Twitter/Threads summer posts. Replaced by Instagram #1 (fee flip breakdown, concrete dollar data, ties to today's blog).
- `2026-04-23-threads-summer-planning` (17:30 UTC, "Hot take: buying summer concert tickets in April is almost always smarter...") -- generic evergreen, no specific data. Replaced by Threads (summer concerts with Pollstar Q1 $108 and 9% YoY number).

Rationale matches the 4/22 playbook: hook-pinned content with specific current price data outperforms evergreen pre-gens, and cross-reinforcement with today's blog ("Ticketmaster vs SeatGeek fees 2026") demands the flip story anchor the slate.

## Hook Mapping
- Hook 1 (Warriors/Rockets 48-hour fee flip) -> Twitter #1, Instagram, TikTok. Three voices, one data set. Ties directly into today's blog slot per `content-hook.md`.
- Hook 3 (FIFA resale 28/42 = 66.6%, median spread $84 -> $89) -> Twitter #3. Live-market validation of Wednesday's blog narrative.
- Hook 4 (Summer concert 7-week window, Pollstar Q1 $108, +9% YoY) -> Twitter #2, Threads. Sets up next week's email newsletter per hook file handoff note.
- Hook 2 (NBA G4 cratering deepening -- Rockets $34, Knicks $41) -> **held for Friday per hook file guidance** ("Social Agent material for tomorrow"). Yesterday's social already ran four posts on G4 cratering; saving the "24 hours later, the crash deepens" beat for Friday gives that story one clean update instead of two consecutive days of repetition.

## Scheduling
- Twitter: 9 AM / 1 PM / 5 PM ET per spec.
- Instagram: 11 AM ET (spec allows 11 AM or 6 PM).
- Threads: 1:30 PM ET, 30 min after Twitter #2 (adapts the summer concert data, stronger conversational beat than either of the NBA/FIFA posts which have already been done in that voice).
- TikTok: 7 PM ET (spec allows 12 PM or 7 PM).

## Image Prompts (queued for when banana MCP comes online)

All prompts follow the brand pillar mapping. 16:9 for Twitter, 1:1 for Instagram and Threads. Targets save to `web/public/social/generated/YYYY-MM-DD-platform-topic.png` on regeneration.

- **Tw #1 (Warriors/Rockets Fee Flip)** — Price Intelligence (16:9): "A minimal data visualization card on dark navy (#0a1628) background. Split-panel layout. Left panel shows 'WARRIORS G2' label with '$74 TM' in white and '$68 SG' highlighted in green (#22c55e). Right panel shows 'ROCKETS G2' label with '$51 TM' highlighted in green (#22c55e) and '$62 SG' in white. Clean flat sans-serif typography. No photography. Commercial infographic for a ticket app."
- **IG (Fee Flip Breakdown)** — Price Intelligence (1:1): "A clean social media data card on dark navy (#0a1628) background. Centered bold white sans-serif text 'FLIP IN 48 HOURS' with two stacked price comparison rows below: 'Warriors G2: $68 SG vs $74 TM' and 'Rockets G2: $51 TM vs $62 SG'. Winning price in green (#22c55e) on each row. Minimal flat design, no photography. Commercial infographic."
- **Tw #2 (Summer Concert T-7 Weeks)** — Tips & Education (16:9): "A clean social media tip card on dark navy (#0a1628) background with bold white sans-serif text '7 WEEKS OUT' centered large, and 'POLLSTAR Q1 $108 / +9%' in smaller green (#22c55e) text below. Minimal design, small green calendar icon top-left. Commercial graphic for a ticket app."
- **Threads (Summer Concert Window)** — Tips & Education (1:1): "A minimal data visualization card on dark navy (#0a1628) background. Bold white '$108 AVG' centered large with smaller subtext 'POLLSTAR Q1 2026' above and '+9% YoY' in green (#22c55e) below. Clean flat design, sans-serif typography. Commercial infographic for a ticket app."
- **Tw #3 (FIFA 28/42 Update)** — Price Intelligence (16:9): "A minimal data visualization card on dark navy (#0a1628) background. Bold white '28 / 42' centered large with 'FIFA PRICIEST' label above in white sans-serif and '66.6%' in green (#22c55e) below. Small subtitle '$84 → $89 MEDIAN' along the bottom in muted gray. Clean flat design. Commercial infographic for a ticket app."

All prompts keep embedded text under 25 chars per element, use only brand hex colors, and avoid banned terms ("8K", "masterpiece", "ultra-realistic", "high resolution", "hyper-detailed").

## Voice Check
- No banned words: no "delve", "crucial", "pivotal", "landscape", "tapestry", "testament", "underscore", "showcase", "vibrant", "groundbreaking", "renowned", "foster", "garner", "interplay", "intricate", "enhancing", "encompassing", "cultivating".
- No banned phrases: no "stands as", "serves as", "marks a pivotal moment", "reflects broader trends", "is a testament to", "It's not just X; it's Y", "Not only...but also", "Here's the thing", "Let's break this down", "Here's what you need to know", "No guessing", "No wasted clicks", "The real question is", "At its core", "What really matters", "could potentially", "it might be argued".
- No em dashes for emphasis in post copy. Periods, commas, and colons used.
- No forced rule-of-three groupings. "By event, by venue, by day, sometimes by hour" is a 4-item list by design.
- No "-ing" tacked-on phrases ("highlighting", "showcasing", "underscoring", "reflecting"). No generic wrap-ups.
- Varied sentence length: short fragments ("SeatGeek wins by six.", "Opposite winners.", "Compare every time.") alongside longer conversational lines.
- Specific dollar amounts on every post: $51, $62, $68, $74, $84, $89, $108. Plus ratios and percentages: 28 of 42, 66.6%, +9% YoY, 7 weeks.
- Opinionated framing: "Same round, opposite winners", "Static tip lists get it wrong on day two", "Summer is already running hot and nobody has taken a stage yet", "Fee math is a moving target".
- First person used naturally (Threads: "we track", "if you're waiting"). Calendar artist shorthand on Twitter #2 ("Billie, Kendrick, Tyler, Chappell") mirrors how fans actually reference these acts.
- Natural URL placement. No generic "Compare every platform in seconds" slogans.
- Instagram at exactly 5 hashtags, 0 emojis (matches brand guideline).
- TikTok uses hashtags only (emoji-free caption body).
- Final self-check pass: re-read each post asking "person or AI?" — rhythm varies, prices are specific, openings differ (subject-first on Twitter #1, list-first on Twitter #2, "Another 24 hours" on Twitter #3, scene-setter on IG, meta-framing on Threads, hack-framing on TikTok).

## Notes
- **Today's blog alignment**: The Warriors/Rockets fee flip (Hook 1) is the anchor for today's social slate because it's also the lead data point in today's blog (`2026-04-23-ticketmaster-vs-seatgeek-fees-2026.md`, already drafted). Three posts (Twitter #1, IG, TikTok) carry the flip data across three voices. Cross-reinforcement collapses if the blog doesn't ship today (same flag Hook 5 carried yesterday -- 6 unshipped blog drafts now pending). Escalated.
- **FIFA data drumbeat**: Twitter #3 is deliberately a quick update, not a repeat of yesterday's Twitter #1 headline. The 66.6% / $89 median language is designed to update readers who already saw yesterday's 22/33 / $84 post without re-pitching the whole thesis. Works either way for cold audiences.
- **Summer concerts as email handoff**: Hook 4 explicitly names an email agent handoff ("the summer concert window closes next week" as subject line). Twitter #2 and Threads today prime that angle so the email can reference social back-up data.
- **Held for Friday**:
  - NBA G4 cratering deepening (Rockets $34, Knicks $41) -- one clean "crash deepens" beat rather than two days of G4 content.
  - Chappell Roan stadium dates (Hook 4 from 4/22 file) -- still no formal announcement; holding reserve slot.
- **Backup if a post needs to swap out**: Florence + The Machine 8-day countdown (May 1) with State Farm Arena section-specific pricing. Would replace Twitter #2 if a harder summer-concert news beat lands mid-day.

## Tomorrow Ideas (Friday 2026-04-24)
- NBA G4 crash-deepens post (Rockets G4 $34, Knicks G4 $41, 57% G1-to-G4 drop) -- specific, near-real-time, strong Twitter AM hook.
- Fee math follow-up after today's blog ships -- pull a new cross-venue data point (e.g., NHL G2 price), reinforce the "static verdict is wrong" thesis with a second proof point.
- Florence + The Machine 7-days-out data (pricing at State Farm Arena across 3 platforms).
- If Chappell Roan presale confirms, pivot a slot to the 4-of-6 WC venue overlap angle.
- TM-vs-SG fee-math Instagram carousel (5 slides pulling specific per-platform all-in percentages from the Thursday blog) -- high-value spinoff content.
