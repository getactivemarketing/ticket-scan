# Social Posts -- 2026-04-22

## Content Calendar (6 posts queued)

### Twitter/X (3 posts)

1. **X -- FIFA Three Weeks Data (9:00 AM ET / 13:00 UTC)**
   > Pulled three weeks of FIFA resale data across 33 group-stage matches. FIFA was the most expensive on 22 of them. Median spread: $84 a ticket. Biggest gap was a Brazil match at Hard Rock, where FIFA sat at $612 and StubHub was $331. ticketscan.io/world-cup-2026

2. **X -- NBA Round 1 G4 Cratering (1:00 PM ET / 17:00 UTC)**
   > Three NBA first-round series are already 2-0 and the road-team Game 4 prices are cratering. Rockets-Warriors G4 at Toyota Center, 400-level: $38 on SeatGeek. Same seats opened at $79 for Game 1. Knicks-Pistons G4 at Little Caesars, 200-level: $44 on StubHub. Series tilts, resale floods. ticketscan.io

3. **X -- FIFA Mexico/Canada Outlier + 50 Days (5:00 PM ET / 21:00 UTC)**
   > Odd pattern in the FIFA resale data. Official marketplace is cheaper than StubHub or SeatGeek on six matches. All six are at Mexico or Canada host venues. US host-city matches? FIFA was pricier every time. 50 days to kickoff. ticketscan.io/world-cup-2026

### Instagram (1 post)

4. **Instagram -- NBA G4 Price Crash (11:00 AM ET / 15:00 UTC)**
   > NBA Round 1 is two games in and the road-team Game 4 prices are already in free fall.
   >
   > Rockets-Warriors G4 at Toyota Center, 400-level: $38 on SeatGeek. Same section opened at $79 for Game 1. 52% drop in two games.
   >
   > Knicks-Pistons G4 at Little Caesars, 200-level: $44 on StubHub.
   >
   > Classic mid-series playbook. A series tilts 2-0, fan confidence for the road team collapses, lower-bowl inventory floods resale, cheapest seats drop 40 to 60% in about 72 hours.
   >
   > If you're flexible and don't care who wins, this window is the steal.
   >
   > Link in bio.
   >
   > #NBAPlayoffs #Round1 #TicketScan #Rockets #Knicks

### Threads (1 post)

5. **Threads -- NBA G4 Cratering (1:30 PM ET / 17:30 UTC)**
   > Three NBA first-round series are already 2-0 and the road-team Game 4 price crash is underway.
   >
   > Rockets-Warriors G4 at Toyota Center: 400-level at $38 on SeatGeek. Same section opened at $79 for Game 1. 52% drop in two games.
   >
   > Knicks-Pistons G4 at Little Caesars: 200-level at $44 on StubHub.
   >
   > This pattern plays out every Round 1. A series tilts, fan confidence for the road team collapses, lower-bowl inventory floods resale. Cheapest-seat prices drop 40 to 60% in about 72 hours.
   >
   > Flexible and local? Mid-series is the steal. ticketscan.io

### TikTok (1 post)

6. **TikTok -- NBA Mid-Series Hack (7:00 PM ET / 23:00 UTC)**
   > NBA Round 1 hack: when a series goes 2-0, wait for the road-team Game 4 price crash
   >
   > Right now: Rockets-Warriors G4 at Toyota Center, 400-level at $38 on SeatGeek. Same section opened at $79 for Game 1. That's a 52% drop in two games.
   >
   > Knicks-Pistons G4 at Little Caesars: 200-level at $44 on StubHub.
   >
   > The pattern: series tilts, fan confidence collapses for the road team, lower-bowl inventory floods resale, cheapest-seat prices drop 40 to 60% in about 72 hours.
   >
   > Flexible and local? Mid-series is the steal. Link in bio.
   >
   > #NBAPlayoffs #NBARound1 #TicketHack #Rockets #Warriors #Knicks #Pistons #TicketScan #TicketTok

## Publishing Status
- **API posting**: Admin social endpoints still return 404 on production (`/api/admin/typefully/post` tested at 13:00 UTC). Unchanged from 4/21. Content saved to `content-calendar.json` for downstream publishing.
- **Image generation**: Banana MCP tools (`gemini_generate_image`, `set_aspect_ratio`) still not surfaced via ToolSearch. Plugin is installed (`~/.claude/plugins/cache/banana-claude-marketplace/banana-claude/1.4.1/`) and the Skill tool lists `banana-claude:banana`, but the MCP tool handles aren't discoverable. Same blocker as 4/19 and 4/21. Fallback template (`ig-template.png`) used on all Twitter, Instagram, and Threads posts. TikTok posts have no image per spec.
- **To enable AI images**: verify banana MCP server is registered and its tools are advertised through the deferred-tool registry. Per-post prompts are pre-drafted below for immediate regeneration once online.

## Content Pillars Hit Today
- [x] Deal Alerts (Twitter #2, Threads -- Rockets G4 $38, Knicks G4 $44, 52% G1 to G4 drop)
- [x] Price Intelligence (Twitter #1 -- 22 of 33 FIFA resale priciest, median $84 spread)
- [x] Tips & Education (TikTok -- "mid-series is the steal" pattern with 40-60% / 72h rule)
- [x] World Cup 2026 (Twitter #1, Twitter #3 -- three-week FIFA data + 50-day countdown + Mexico/Canada outlier)
- [x] Savings Wins (Instagram -- G4 cratering as a buying window with concrete dollar deltas)

Pillars skipped today: none.

## Changes from Pre-Generated Posts
- Dropped the single pre-generated 4/22 Threads entry (ID `2026-04-22-threads-daily`, "takes less than 30 seconds" generic wrap). Replaced with the NBA G4 cratering thread that actually adapts Twitter #2 per spec.
- No other 4/22 entries existed in the pre-gen batch. Authored 5 fresh posts from scratch (Twitter x3, IG, TikTok) pinned to today's real hooks in `content-hook.md`:
  - Hook 1 (FIFA three-week data) -> Twitter #1 (headline 22/33 + median $84 + Brazil at Hard Rock outlier) and Twitter #3 (Mexico/Canada flip side + 50-day countdown).
  - Hook 3 (NBA Round 1 road G4 cratering) -> Twitter #2, IG, Threads, TikTok. Rockets-Warriors G4 $38 on SeatGeek (vs $79 G1 opener = 52%) and Knicks-Pistons G4 $44 on StubHub. Same data paired across four posts in four voices.
- Twitter cadence 9 AM / 1 PM / 5 PM ET per spec.
- Instagram at 11 AM ET.
- Threads at 1:30 PM ET, 30 min after Twitter #2 (adapting the NBA G4 story -- stronger "pattern plays out every Round 1" beat than the FIFA data story, which is already carrying the blog).
- TikTok at 7 PM ET.

## Image Prompts (queued for when banana MCP comes online)

All prompts follow the brand pillar mapping in the agent spec. 16:9 for Twitter, 1:1 for Instagram and Threads. Targets save to `web/public/social/generated/YYYY-MM-DD-platform-topic.png` on regeneration.

- **Tw #1** (Price Intelligence, 16:9): "A minimal data visualization card on dark navy (#0a1628) background. Bold white '22 / 33' centered large with the smaller label 'FIFA RESALE PRICIER' above and '$84 MEDIAN SPREAD' below in green (#22c55e). Clean flat design, sans-serif typography. No photography. Commercial infographic for a ticket app."
- **Tw #2** (Deal Alerts, 16:9): "A clean social media infographic card on dark navy (#0a1628) background. Bold white and green (#22c55e) sans-serif typography showing '$79 to $38' with a small green '-52%' tag. Minimal flat design, no photography, no gradients. Commercial graphic design for a ticket comparison app."
- **Tw #3** (World Cup 2026, 16:9): "A large modern soccer stadium exterior at golden hour, FIFA World Cup 2026 flags and banners visible, fans walking toward the entrance gates, a Mexico City mountain skyline faint in the distance. Warm natural sunlight, shallow depth of field on the crowd. Captured with Sony A7R IV, 24mm wide-angle lens at f/2.8. Sports editorial photography for a magazine cover."
- **IG** (Savings Wins, 1:1): "A basketball arena interior with dramatic stage lighting, shot from the upper deck looking down at the court, shallow depth of field. Bold white text '$38' overlaid in the center. Captured with Canon EOS R5, 35mm lens at f/1.8. Commercial social media photography for an event ticket app."
- **Threads** (Deal Alerts, 1:1): "A minimal data visualization card on dark navy (#0a1628) background. Bold white '52%' centered large with 'G1 TO G4 DROP' in subtle white below and a green (#22c55e) downward arrow beside the number. Clean flat design, sans-serif typography. Commercial infographic for a ticket app."

All prompts keep embedded text under 25 chars, use only brand hex colors, and avoid banned terms ("8K", "masterpiece", "ultra-realistic", "high resolution", "hyper-detailed").

## Voice Check
- No banned words used: no "delve", "crucial", "pivotal", "landscape", "tapestry", "testament", "underscore", "showcase", "vibrant", "groundbreaking", "foster", "garner", "interplay", "intricate", "enhancing", "encompassing", "cultivating".
- No banned phrases: no "stands as", "serves as", "reflects broader trends", "here's the thing", "let's break this down", "here's what you need to know", "no guessing", "no wasted clicks", "not just X; it's Y", "the real question is", "at its core", "what really matters", "could potentially", "it might be argued".
- No em dashes for emphasis in post copy. Periods, commas, and colons used instead. (Spec markdown headers use `--` which is fine.)
- Varied sentence length: short fragments ("Series tilts, resale floods.", "52% drop in two games.", "Mid-series is the steal.") alongside longer conversational lines.
- Specific dollar amounts on every post: $38, $44, $79, $84, $331, $612. Plus percentage and count data: 22 of 33, 52%, 40 to 60%, 72 hours, 50 days.
- Opinionated framing: "Odd pattern in the FIFA resale data", "Classic mid-series playbook", "This window is the steal", "FIFA was pricier every time".
- First person used naturally ("Pulled three weeks of FIFA resale data").
- Natural URL placement, no generic "Compare every platform in seconds" CTAs.
- Instagram at exactly 5 hashtags, 0 emojis (matches brand guideline).
- No rule-of-three forced groupings. No "-ing" tacked-on phrases ("highlighting", "showcasing", "underscoring", "reflecting"). No generic wrap-ups ("the future looks bright", "exciting times ahead").
- TikTok uses hashtags only (emoji-free caption body, per spec).

## Notes
- **FIFA three-week data drop**: From `content-hook.md` Hook 1 (22 of 33 group-stage matches with FIFA resale priciest, median $84 spread, Brazil at Hard Rock biggest outlier at $612 FIFA vs $331 StubHub, 6 reverse-direction matches all at Mexico/Canada venues). Twitter #1 leads with the headline (22/33), Twitter #3 unpacks the cross-border supply outlier and pins the 50-day countdown. Today's social tees up the definitive blog drop without burning the full data reveal. Cross-reinforcement with the Content agent's 4/22 blog piece is the primary goal.
- **NBA Round 1 G4 cratering**: From Hook 3. The 52% drop (G1 $79 to G4 $38) on the Rockets-Warriors 400-level at Toyota Center is the cleanest single comparable we have today. Paired with Knicks-Pistons $44 at Little Caesars for section-level variety. Used on four posts (Twitter #2, IG, Threads, TikTok) because the pattern is both specific and repeatable -- three 2-0 series in flight means the story compounds for Game 4s throughout the week.
- **50-day countdown math**: April 22, 2026 to June 11, 2026 = 50 days (8 remaining in April + 31 in May + 11 in June). Cited in Twitter #3.
- **Chappell Roan stadium dates** (Hook 4): Still watch-and-wait, no formal announcement as of this morning. Continuing to hold the reserve slot for Wednesday or Thursday per hook file. The 4 of 6 WC venue overlap is a strong cross-sell angle when it lands.
- **Florence + The Machine (May 1, 9 days out)**: Considered for a slot today but the G4 cratering data is more newsworthy. Will reconsider for Thursday's content if the FIFA blog ships and the Chappell announcement still hasn't landed.
- **Publishing pipeline risk** (Hook 2): 4 unshipped blog drafts in `marketing-agents/output/content/` (4/14 playoff comparison, 4/15 FIFA bait-switch, 4/16 best-comparison-sites, 4/21 how-to-compare). Today's FIFA three-week piece would bring it to 5. All 3 FIFA social posts today (Twitter #1, Twitter #3) tee up the blog directly -- cross-reinforcement collapses if the blog does not ship today. Flagged here for Lead Architect.
- **Tomorrow ideas** (Thursday 4/23):
  - Florence + The Machine 8-day countdown with State Farm Arena section data if no bigger hooks.
  - NBA Round 1 Game 3 resale-flood data (Tuesday and Wednesday night games priced across platforms) -- good Twitter AM angle.
  - Thursday is the slot for the TM-vs-SG fee math comparison blog (per SEO/content planning) -- social should support with 1-2 fee-delta posts.
  - If Chappell Roan presale confirms, pivot a Twitter slot to the announcement with the 4 of 6 WC venue overlap angle.
