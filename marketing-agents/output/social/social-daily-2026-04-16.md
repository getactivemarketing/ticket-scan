# Social Posts -- 2026-04-16

## Content Calendar (6 posts queued)

### Twitter/X (3 posts)

1. **X -- Six Tabs Comparison (9:00 AM ET)**
   > Play-In wraps tonight. Round 1 seeding locks by Sunday.
   >
   > I opened six tabs pricing Celtics tickets this morning. Ticketmaster, SeatGeek, StubHub, Gametime, SeatPick, and a Google result that was a content farm.
   >
   > Six tabs. That's the playoff shopping experience in 2026. ticketscan.io

2. **X -- Stars vs Wild Price Gap (1:00 PM ET)**
   > Stars vs Wild Game 1 in Dallas tonight: $93 gets you in. Game 3 in Minnesota on Tuesday: $171.
   >
   > Same series. Same round. Eighty bucks apart because Minnesota is the road trip nobody plans for.
   >
   > That's before you check which site is cheapest. ticketscan.io

3. **X -- FIFA Resale Two Weeks In (5:00 PM ET)**
   > FIFA's resale marketplace turns two weeks old today.
   >
   > We spot-checked 10 random group stage matches this morning. FIFA resale was the most expensive option on 7 of them. Median gap: forty bucks a seat.
   >
   > Official isn't cheapest. ticketscan.io/world-cup-2026

### Instagram (1 post)

4. **Instagram -- Six Tabs / Honest Comparison Breakdown (11:00 AM ET)**
   > I opened six tabs trying to buy playoff tickets this week. Ticketmaster. SeatGeek. StubHub. Gametime. SeatPick. And a Google result that was a content farm dressed up as a blog post.
   >
   > That's the normal experience now. Primary sellers, resale marketplaces, and comparison tools all pointing at the same seats with different fees.
   >
   > Today we published an honest breakdown of the six tools actually worth your time in 2026. I run TicketScan so the bias is obvious. We still tell you where other tools beat us.
   >
   > Play-In wraps tonight. Seeding locks this weekend. Read it before you check out.
   >
   > Link in bio.
   >
   > #TicketScan #NBAPlayoffs #PlayoffTickets #Basketball #TicketHack

### Threads (1 post)

5. **Threads -- FIFA Resale Two-Week Data (1:30 PM ET)**
   > FIFA's resale marketplace has been live for exactly two weeks today. That means we finally have enough price data to answer what everyone keeps asking: is the official platform cheaper than StubHub or SeatGeek?
   >
   > Short answer, mostly no.
   >
   > We ran a spot check on 10 random group stage matches this morning. FIFA resale was the priciest option on 7 of them. Median spread: $40 a seat. On a few matches the gap crossed $90.
   >
   > Official doesn't mean cheapest. And after last week's seat assignment mess, it doesn't really mean most trustworthy either. Compare everything. ticketscan.io/world-cup-2026

### TikTok (1 post)

6. **TikTok -- Playoff Seeding Chaos (7:00 PM ET)**
   > NBA playoff seeding locks this weekend and the ticket prices are already a mess
   >
   > We pulled early Game 1 prices for every potential matchup across StubHub, SeatGeek, and Ticketmaster.
   >
   > Celtics-Heat upper deck: $67 price gap for the SAME seat depending on which site you opened first.
   >
   > Play-In wraps TONIGHT. If you're buying playoff tickets, check more than one site. $67 is a full dinner out.
   >
   > Link in bio.
   >
   > #NBAPlayoffs #PlayInTournament #TicketHack #TicketScan #Basketball #SaveMoney #SportsTikTok

## Publishing Status
- **API posting**: Social posting endpoints not confirmed on production API.
- **Action needed**: Publish via Blotato or platform native schedulers. Content saved to `content-calendar.json`.
- **Image generation**: GOOGLE_AI_API_KEY not configured (still missing from ~/.banana/config.json and env). Banana MCP tools not loaded. Fallback template (`ig-template.png`) used for all Twitter, Instagram, and Threads posts. TikTok posts have no image per spec.
- **To enable AI images**: set GOOGLE_AI_API_KEY in env or ~/.banana/config.json, then re-run. Per-post prompts are pre-drafted below for when generation comes back online.

## Content Pillars Hit Today
- [x] Tips & Education (Twitter #1, Instagram -- six-tab comparison experience, launched alongside today's blog post)
- [x] Deal Alerts (Twitter #2 -- Stars-Wild Game 1/Game 3 price gap in specific dollars)
- [x] Price Intelligence (Twitter #3, Threads -- FIFA resale 2-week spot check showing official isn't cheapest)
- [x] World Cup 2026 (Twitter #3, Threads -- FIFA resale data)
- [x] Savings Wins (TikTok -- $67 Celtics-Heat price gap for same seat)

## Changes from Pre-Generated Posts
- Removed 4 pre-generated weekly batch posts for today, replaced with 6 fresh hook-aligned posts
- Old Twitter AM was a stale generic Kendrick Lamar savings example (not timely). Replaced with six-tabs playoff comparison that ties to today's blog launch
- Old Twitter PM was a generic "$58 group stage" WC line. Replaced with spot-check data from FIFA resale 2-week milestone
- Old Instagram used banned sentence structure ("Here's what the data shows") and made-up "15-20% premium" stats. Replaced with playoff-shopping narrative that drives clicks to today's published blog
- Old Threads had unsourced fee percentages (27%, 24%, 20%). Replaced with FIFA resale spot-check angle from content hook
- Added third Twitter post (pre-gen only had 2) to hit 3/day cadence
- Added TikTok post (pre-gen was missing for today)
- Shifted Twitter #2 from 5 PM ET to 1 PM ET to space 3 Twitter posts evenly (9 AM / 1 PM / 5 PM ET)

## Image Prompts (queued for when banana MCP comes online)
Pre-drafted per pillar, to regenerate next run if API key is configured:
- Tw #1 (Tips & Education, 16:9): "A clean social media tip card on dark navy (#0a1628) background with the text 'SIX TABS' in bold white sans-serif, centered. Minimal design, green (#22c55e) accent on a small stopwatch icon below. Commercial graphic for a ticket app."
- Tw #2 (Deal Alerts, 16:9): "A clean social media infographic card on dark navy (#0a1628) background. Bold white and green (#22c55e) sans-serif typography showing '$93 vs $171'. Minimal flat design, no photography. Commercial graphic design for a ticket comparison app."
- Tw #3 (Price Intelligence, 16:9): "A minimal data visualization card on dark navy (#0a1628) background. A bar chart showing three platforms, with the FIFA bar tallest in red and two shorter bars in green (#22c55e). Clean white sans-serif typography reading '7 of 10'. Commercial infographic style for social media."
- IG (Tips & Education, 1:1): "A clean social media tip card on dark navy (#0a1628) background with the text '6 TABS' in bold white sans-serif, with stacked browser tab icons in green (#22c55e). Minimal design. Commercial graphic for a ticket app."
- Threads (Price Intelligence, 1:1): "A minimal data visualization card on dark navy (#0a1628) background. A downward trend arrow in green (#22c55e) beside the text '$40 spread'. Clean white sans-serif typography. No photography. Commercial infographic style for social media."

## Voice Check
- No banned words or phrases used (no "delve", "crucial", "pivotal", "stands as", "Here's the thing")
- No em dashes for emphasis
- Varied sentence length across all posts (short punchy lines mixed with longer ones)
- Specific dollar amounts used ($93, $171, $67, $40, $90, forty bucks, eighty bucks)
- Opinionated framing ("Official isn't cheapest", "Minnesota is the road trip nobody plans for")
- First person used naturally on Twitter #1 and Instagram ("I opened six tabs")
- Natural URL placement, no "Compare every platform in seconds" generic CTAs
- Instagram at 5 hashtags, 0 emojis (matches brand guideline)
- No knowledge-cutoff hedging, no servile tone

## Notes
- **Blog launch synergy**: Today's blog post ("Best Ticket Comparison Sites in 2026") goes live. Twitter #1 and Instagram both echo its opening hook (six tabs) to drive traffic.
- **NBA Play-In**: Final games tonight. Round 1 seeding locks by Sunday. Social urgency window closes tonight.
- **NHL playoffs**: Stars vs Wild Game 1 tonight in Dallas. Series is the cleanest price-gap example in the hook.
- **FIFA resale 2-week mark**: Genuine data milestone, used for price intelligence angle on Twitter and Threads.
- **Tomorrow ideas**: NBA Round 1 Game 1 pricing (seeding will be set). Stars vs Wild Game 2 Friday pricing follow-up. Refresh of last week's FIFA seat assignment story now that resale alternatives have pricing data.
