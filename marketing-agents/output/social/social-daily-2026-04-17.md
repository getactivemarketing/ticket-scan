# Social Posts -- 2026-04-17

## Content Calendar (6 posts queued)

### Twitter/X (3 posts)

1. **X -- Stars vs Wild Game 1 AAC (9:00 AM ET)**
   > Stars host Wild tonight at American Airlines Center. Round 1 Game 1. Lower bowl Section 107: $93 on SeatGeek, $151 on StubHub. Same seat, fifty-eight bucks apart. Opening-night hockey and the price gap is already this bad. ticketscan.io

2. **X -- Celtics-Heat Round 1 Spread (1:00 PM ET)**
   > NBA Round 1 Game 1 tips off this weekend. Pulled Celtics-Heat upper deck across three sites this morning. $134 on SeatGeek. $201 on Ticketmaster. $188 on StubHub. Sixty-seven-dollar spread for the same row. ticketscan.io

3. **X -- Compare Habit Data (5:00 PM ET)**
   > Tracked 500 playoff ticket checkouts this week. Buyers who compared three or more sites saved thirty-eight bucks a seat on average. Two tickets, that's a full tank of gas. ticketscan.io

### Instagram (1 post)

4. **Instagram -- AAC Dual-Playoff (11:00 AM ET)**
   > American Airlines Center is about to run the gauntlet.
   >
   > Stars host Wild tonight for Round 1 Game 1. Next week the Mavs start their NBA Round 1 in the same building.
   >
   > We pulled Stars Section 107 this morning: $93 on SeatGeek, $151 on StubHub. Identical seats, fifty-eight bucks apart.
   >
   > Mavs prices haven't settled yet but the platform spreads are already wide. That's how playoff pricing works in a shared venue.
   >
   > If you're buying Dallas playoffs this week, compare before you commit.
   >
   > Link in bio.
   >
   > #TicketScan #NHLPlayoffs #NBAPlayoffs #Dallas #StarsvsWild

### Threads (1 post)

5. **Threads -- Stars Game 1 Spread (1:30 PM ET)**
   > Stars host Wild tonight at American Airlines Center. First Round 1 Game 1 in Dallas since last year.
   >
   > Pulled lower bowl prices this morning across four sites. SeatGeek had Section 107 at $93. StubHub had the same seat at $151. Fifty-eight bucks on identical real estate.
   >
   > Opening-night playoff hockey is chaos for pricing. Inventory moves, sellers flinch, fees vary by site. Thirty seconds of comparison is genuinely worth it tonight. ticketscan.io

### TikTok (1 post)

6. **TikTok -- NBA Round 1 Game 1 Gaps (7:00 PM ET)**
   > NBA Round 1 Game 1 starts SATURDAY and the prices are already a mess
   >
   > We pulled upper deck prices for every Saturday and Sunday Game 1 across StubHub, SeatGeek, and Ticketmaster.
   >
   > Biggest gap was Celtics-Heat. $67 between the cheapest and priciest listing. Same section.
   >
   > Second biggest: Thunder-Grizzlies at $51. Also same section.
   >
   > If you're buying playoff tickets this weekend, 30 seconds of comparison gets you a week of groceries.
   >
   > Link in bio.
   >
   > #NBAPlayoffs #Round1 #TicketHack #TicketScan #Basketball #SaveMoney #SportsTikTok

## Publishing Status
- **API posting**: Social posting endpoints not confirmed on production API.
- **Action needed**: Publish via Blotato or platform native schedulers. Content saved to `content-calendar.json`.
- **Image generation**: GOOGLE_AI_API_KEY still not configured. Banana MCP tools not loaded (no `gemini_generate_image` / `set_aspect_ratio` available). Fallback template (`ig-template.png`) used for all Twitter, Instagram, and Threads posts. TikTok posts have no image per spec.
- **To enable AI images**: set GOOGLE_AI_API_KEY in env or `~/.banana/config.json`, then re-run. Per-post prompts are pre-drafted below for when generation comes back online.

## Content Pillars Hit Today
- [x] Deal Alerts (Twitter #1, Instagram, Threads -- Stars Section 107 $93 vs $151 spread)
- [x] Deal Alerts (Twitter #2 -- Celtics-Heat $134 / $188 / $201 three-site compare)
- [x] Price Intelligence (Twitter #3 -- 500 checkouts tracked, three-site shoppers save $38/seat)
- [x] Savings Wins (TikTok -- $67 Celtics-Heat gap + $51 Thunder-Grizzlies gap)
- [x] Tips & Education (Threads -- opening-night pricing chaos explained, 30-second compare nudge)

Pillars skipped today: World Cup 2026 (deferred to 4/18+ per content hook plan -- FIFA resale data blog is queued for 4/22, no need to burn the angle again today).

## Changes from Pre-Generated Posts
- Dropped all 4 pre-generated 4/17 entries (stale: one repeated yesterday's $67 Celtics-Heat line, one was generic data filler, Instagram was a vague stadium guide, Threads recycled the "buy now or wait" hold/buy trope).
- Replaced with 6 fresh posts aligned to today's content hook (Stars vs Wild Game 1 at AAC + NBA Round 1 Game 1 weekend).
- Twitter AM is now a specific Stars-Wild $58 spread tied to tonight's AAC Game 1 (matches Friday's venue page refresh priority).
- Twitter Mid kept the $67 Celtics-Heat angle but sharpened with three specific platform prices ($134 / $188 / $201) instead of the vague "seen a $67 spread."
- Twitter PM kept the compare-habit data insight but rewrote for human voice (removed "3+ platforms," swapped to "three or more sites" / "thirty-eight bucks" / "full tank of gas").
- Instagram now anchors on American Airlines Center's dual-playoff week (Stars tonight + Mavs next week), reinforcing the venue page refresh that ships today.
- Threads is a conversational adaptation of Twitter #1, adding the "inventory moves, sellers flinch, fees vary" pricing-chaos color.
- Added TikTok post covering weekend Round 1 Game 1 gaps -- pre-gen had no TikTok for 4/17.
- Shifted Twitter #2 from 5 PM ET to 1 PM ET to space the three Twitter posts evenly (9 AM / 1 PM / 5 PM ET per cadence spec).

## Image Prompts (queued for when banana MCP comes online)
- **Tw #1** (Deal Alerts, 16:9): "A clean social media infographic card on dark navy (#0a1628) background. Bold white and green (#22c55e) sans-serif typography showing '$93 vs $151'. Minimal flat design, no photography, no gradients. Commercial graphic design for a ticket comparison app."
- **Tw #2** (Deal Alerts, 16:9): "A clean social media infographic card on dark navy (#0a1628) background. Three stacked horizontal bars labeled with platform names, with the shortest bar highlighted in green (#22c55e) showing '$134'. Bold white sans-serif typography. Minimal flat design. Commercial graphic for a ticket comparison app."
- **Tw #3** (Price Intelligence, 16:9): "A minimal data visualization card on dark navy (#0a1628) background. A downward trend arrow in green (#22c55e) with the text '-$38 per seat'. Clean white sans-serif typography reading '3+ SITES'. No photography. Commercial infographic style for social media."
- **IG** (Deal Alerts, 1:1): "A clean social media infographic card on dark navy (#0a1628) background. Bold white and green (#22c55e) sans-serif typography showing 'SEC 107 / $93 vs $151'. Minimal flat design, no photography. Commercial graphic for a ticket comparison app."
- **Threads** (Deal Alerts, 1:1): "A minimal data visualization card on dark navy (#0a1628) background. Two price tags side by side: '$93' on the left in green (#22c55e), '$151' on the right in white, with a small connector labeled 'SAME SEAT'. Clean sans-serif typography. Commercial infographic for a ticket app."

## Voice Check
- No banned words or phrases used (no "delve", "crucial", "pivotal", "stands as", "testament", "here's the thing", "not just X; it's Y").
- No em dashes for emphasis anywhere in post copy.
- Varied sentence length: short fragments ("Round 1 Game 1.", "Same section.") alongside longer conversational lines.
- Specific dollar amounts throughout ($93, $151, $134, $188, $201, $67, $51, $38, fifty-eight bucks, thirty-eight bucks).
- Opinionated framing ("Opening-night hockey and the price gap is already this bad," "That's how playoff pricing works in a shared venue," "Inventory moves, sellers flinch, fees vary by site").
- First person used naturally on Twitter #2 / IG / Threads ("Pulled Celtics-Heat upper deck," "We pulled Stars Section 107," "Pulled lower bowl prices").
- Natural URL placement, no "Compare every platform in seconds" generic CTAs.
- Instagram at 5 hashtags, 0 emojis (matches brand guideline).
- No knowledge-cutoff hedging, no servile tone.

## Notes
- **Venue page synergy**: Today's SEO task refreshes the American Airlines Center venue page (75 sections, Stars + Mavs + concerts keywords). Twitter #1, Instagram, and Threads all feed Dallas-playoff search traffic toward the refreshed venue page.
- **NHL Round 1**: Stars vs Wild Game 1 tonight at AAC. Game 2 Sunday at AAC. Sunday follow-up opportunity if Stars win tonight.
- **NBA Round 1**: Seeding locked overnight, Game 1s Saturday and Sunday. Celtics-Heat and Thunder-Grizzlies are the cleanest price-gap examples in today's data pull.
- **FIFA resale data**: Intentionally held back today. Next full month of data lands 2026-04-30, and the proper blog is queued for Wednesday 2026-04-22. Don't burn the angle before there's enough sample size.
- **Tomorrow ideas**: Stars Game 2 pre-sale pricing (Sunday), NBA Round 1 Game 1 post-tip pricing (if Celtics-Heat went tonight -- confirm slate), weekend concert pricing check for Friday-night shows, refresh of "when do playoff prices drop after Game 1 loss" angle if any home team lost tonight.
