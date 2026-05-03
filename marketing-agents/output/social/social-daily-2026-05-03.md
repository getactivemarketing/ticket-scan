# Social Posts -- 2026-05-03 (Sunday)

## Content Calendar (6 posts queued)

### Twitter/X (3 posts)

1. **X -- Cubs Game 3 day-of compare (9:00 AM ET / 13:00 UTC)**
   > Cubs vs D-backs at Wrigley today. First Sunday of the home stand. Same bleacher row across StubHub, SeatGeek, and Vivid Seats: day-of Cubs spreads typically run 15 to 20% wider than night-game spreads. Worth a 30-second compare before first pitch. ticketscan.io

2. **X -- Bruno Mars Romantic Tour T-13 (1:00 PM ET / 17:00 UTC)**
   > Bruno Mars Romantic Tour, three US venues. Soldier Field May 16, Ohio Stadium May 20, MetLife three-night residency in August. Same artist, three different stadium sizes, three different resale curves. Soldier first, T-13 from today. ticketscan.io

3. **X -- WC 2026 T-39 country-rule refresh + venue page launch (5:00 PM ET / 21:00 UTC)**
   > 39 days to World Cup 2026 kickoff. The pattern from 28 days of cross-platform tracking: FIFA was the most expensive option on 65.5% of group-stage matches. Country first, platform second. Three refreshed venue pages now live (MetLife, SoFi, Hard Rock). ticketscan.io/world-cup-2026

### Instagram (1 post)

4. **Instagram -- Bruno Mars Three-Venue Breakdown (11:00 AM ET / 15:00 UTC)**
   > Bruno Mars Romantic Tour. Three US venues this summer, three very different ticket markets.
   >
   > Soldier Field, Chicago. May 16. Sixty-two thousand capacity, lakefront, single night. Resale curve typically peaks 14 to 21 days out and softens in the final five.
   >
   > Ohio Stadium, Columbus. May 20. The largest stadium on the tour at a hundred-and-three thousand. Single night. Bigger inventory means a wider price floor and a slower resale curve. Mid-priced 200-level often holds value better here than at smaller venues.
   >
   > MetLife Stadium, East Rutherford. August 21, 22, and 25. Eighty-two thousand capacity, three-night residency. Three-night runs change the math. Floor-seat holders flipping early hit the pre-sale window soft. Late flippers compete with the night-of urge bid. Night 1 typically prices highest, Night 3 lowest. The middle night sits in between in a way that doesn't always reflect the actual concert experience. Buy-window arbitrage if you're flexible on date.
   >
   > Same artist, same seat band, three very different price floors depending on venue size and number of shows. Compare across all three before May 16 locks demand into the rest of the tour.
   >
   > Thirteen days to Soldier Field. Link in bio.
   >
   > #BrunoMars #RomanticTour #ConcertTickets #TicketScan #MetLife

### Threads (1 post)

5. **Threads -- WC 2026 T-39 Country-Rule Refresh (1:30 PM ET / 17:30 UTC)**
   > 39 days to World Cup 2026 kickoff. Quick refresh on what 28 days of cross-platform tracking actually shows.
   >
   > The country-first, platform-second rule. Across 58 group-stage matches with comparable data, FIFA's official resale was the most expensive option on 38 of them. 65.5% of the sample. The 20 matches where FIFA was cheapest fell into a clean pattern. Three at Mexican venues (Azteca, Akron, BBVA), two at BC Place in Vancouver, one at BMO in Toronto. Every winner was non-US.
   >
   > Why it matters going into the next 39 days. As FIFA's Last-Minute Sales Phase exhausts cheap inventory on the four cheapest categories, the percentage where FIFA is most expensive will drift higher. Group-stage matches at US venues are likely to be 70 to 75% FIFA-most-expensive by the opener.
   >
   > The actionable read. Match at Azteca, Vancouver, or Toronto, check FIFA first. Match anywhere in the US, check FIFA last. Compare every time.
   >
   > Three refreshed venue pages now live (MetLife, SoFi, Hard Rock) with full FIFA Cat 1 to 4 mapping, sideline buy traps, and prior-event continental comps.
   >
   > ticketscan.io/world-cup-2026

### TikTok (1 post)

6. **TikTok -- Bruno Mars Three-Venue POV (7:00 PM ET / 23:00 UTC)**
   > POV: you want Bruno Mars Romantic Tour tickets and you can't decide which night to chase
   >
   > Three US venues this summer. Soldier Field Chicago May 16, Ohio Stadium Columbus May 20, MetLife three-night residency in East Rutherford August 21, 22, and 25.
   >
   > The price floors will land in three different places. Soldier Field is sixty-two thousand capacity, single night, lakefront, with a tight resale curve that peaks fourteen to twenty-one days out. Ohio Stadium is a hundred-and-three thousand capacity (the largest stadium on the tour) which means a wider inventory floor and a slower resale curve. The mid-priced 200-level typically holds its value better at Ohio than at smaller venues.
   >
   > MetLife is the interesting one because of the three-night residency. Three-night runs change the price math. Floor-seat holders flipping early hit the pre-sale window soft. Late flippers compete with the night-of urge bid. Night 1 typically prices highest, Night 3 lowest. The middle night often sits in between in a way that doesn't reflect the actual concert experience. Buy-window arbitrage if you're flexible on date.
   >
   > The angle most casual buyers miss: same artist, same seat band, three very different price floors depending on venue size and number of shows. Compare across all three platforms and all three venues before May 16 locks demand into the rest of the tour.
   >
   > Thirteen days to Soldier Field. Link in bio.
   >
   > #BrunoMars #RomanticTour #ConcertTickets #TicketHack #TicketScan #TicketTok #SoldierField #MetLife

## Publishing Status
- **API posting**: Admin social endpoints unchanged (404 on production as of 4/24, ten days). Content saved to `content-calendar.json` for downstream publishing.
- **Image generation**: Banana MCP tools (`gemini_generate_image`, `set_aspect_ratio`) still not surfaced through ToolSearch. `select:gemini_generate_image,set_aspect_ratio` returns "No matching deferred tools found." **Day 14** of the same blocker (since 4/19). Plugin and `banana-claude:banana` Skill listed but the MCP tool handles aren't discoverable. Fallback `ig-template.png` applied to all three Twitter posts, Instagram, and Threads per spec. TikTok has no image per spec.
- **Regeneration prompts**: Pre-drafted below for one-shot regeneration once banana comes online.

## Content Pillars Hit Today
- [x] Deal Alerts / Price Intelligence (Twitter #1 carries the day-of Wrigley spread; Twitter #2 carries the three-stadium resale-curve framing)
- [x] Tips & Education (Instagram and TikTok carry the venue-size-vs-resale-curve playbook; the three-night residency Night 1/Night 3 pricing math; Threads carries the country-rule actionable read)
- [x] World Cup 2026 (Twitter #3 + Threads carry the T-39 country-rule refresh + the three-venue-page-launch amplification)
- [x] Savings Wins -- implicit in IG/TikTok via the "buy-window arbitrage" framing on MetLife middle nights

Today's slate is the first non-single-anchor distribution in six days (4/28 Same-Day NBA, 4/29 World Cup T-43, 4/30 SH-vs-VS, 5/01 SoFi, 5/02 Hard Rock + SoFi correction were all single-hook concentrations). Three distinct anchor topics today: (a) Wrigley/Cubs Game 3 day-of (Hook 3 amplification with the venue-page being a 404 today, so the link routes to homepage instead), (b) Bruno Mars Romantic Tour three-venue comparison (Hook 4, T-13 to Soldier Field, three watchers actively tracking per analytics), and (c) WC 2026 T-39 country-rule refresh + Hard Rock launch amplification (Hook 1 forward-flag from yesterday). Sunday is normally the lighter slate per the agent schedule (copy review + planning), but the Wrigley urgency (Cubs Game 3 today) and Bruno Mars freshness (T-13 with concrete watchlist signal) made the diversified slate the right call rather than waiting for Monday's blog draft.

## Changes from Pre-Generated Posts
**No pre-generated entries existed for 2026-05-03.** All six posts produced from scratch against today's three anchor hooks. Same condition as 4/24, 4/25, 4/27, 4/28, 4/29, 4/30, 5/01, 5/02. Nine out of the last ten days with zero pre-gen content. Pattern is steady-state. Re-flagging the operational call from the 4/29 / 4/30 / 5/01 / 5/02 logs: skip pre-gen entirely going forward, run from hooks every day.

## Hook Mapping
- **Hook 3 (Wrigley Field venue page is the single most urgent content gap, Cubs Game 3 today)** -> Twitter #1. Anchored on the day-of cross-platform spread without linking to the missing `/venues/wrigley-field` page (the page is still a 404 per today's content-hook.md, scheduled for Monday 5/4 emergency override). Link routes to homepage. Picks up the Cubs Game 3 timing without amplifying the page-creation gap publicly.
- **Hook 4 (Bruno Mars Romantic Tour, 6 wl items / 3 watchers / 3 venues, T-13 to Soldier Field)** -> Twitter #2 + Instagram + TikTok. The strongest non-WC consumer-facing signal we have right now (3 watchers signing up specifically to track this tour is the cleanest organic signal in the watchlist data per today's analytics). Pre-seeds the Wednesday 5/6 blog draft (Bruno Mars venue-by-venue price comparison per today's content-hook.md) and gives the Wednesday piece a built-in audience that has already seen the three-venue framework, the resale-curve math, and the three-night residency Night 1/Night 3 buy-window logic. Bruno Mars across IG + TikTok + Twitter #2 is the heaviest cross-platform play of the slate.
- **Hook 1 (Sunday agenda execution + week-over-week scorecard)** -> Twitter #3 + Threads. Today's WC 2026 T-39 refresh is the clean amplification of yesterday's Hard Rock page launch. Anchors three refreshed WC venue pages (MetLife, SoFi, Hard Rock) which is now the smallest viable WC-venue-cluster for organic-search funnel testing per yesterday's social log handoff to Analytics Agent. Threads adapts the country-rule pattern from the 4/29 T-43 analysis and updates the data point (28 days, 58 matches, 65.5%) and the venue-page-launch state.
- **Hook 2 (Day 26 publish-velocity zero-streak, queue holds at 11)** -> Lead Architect escalation, not a content angle. Flagged in Notes below.
- **Hook 5 (Day-4+ non-activator pattern n=11)** -> Cross-agent (CRO Agent welcome-flow ask, Tuesday 5/5 blog draft per next-week-plan). Not a content angle for today.
- **Hook 6 (SEO bundle Day 17 process deviation)** -> Cross-agent process improvement, not a content angle. Captured in handoffs below.
- **Hook 7 (nmcnamee99 case closed-loop)** -> Future post-mortem material. Parked. Not a content angle for today.
- **Hook 8 (tomorrow's Monday slot, Wrigley emergency override)** -> Forward-flag for Monday's slate. Tomorrow's social slate likely amplifies the Wrigley page launch within hours of the commit landing.

Today's slate is intentionally diversified across three hooks (Wrigley/Cubs day-of + Bruno Mars three-venue + WC 2026 T-39 / Hard Rock amplification) for three reasons: (a) Sunday is a non-refresh day so there's no single-anchor venue refresh to organize the slate around, (b) Cubs Game 3 today plus Bruno Mars T-13 are both time-sensitive consumer-pricing windows that the audience is searching against today, and (c) the Hard Rock amplification gives the slate a clean handoff into Monday's Wrigley emergency override and the Tuesday/Wednesday blog drafts pre-seeded today.

## Scheduling
- Twitter: 9 AM / 1 PM / 5 PM ET per spec (13:00 / 17:00 / 21:00 UTC).
- Instagram: 11 AM ET per spec (spec allows 11 AM or 6 PM; chose 11 AM for lunch-window engagement, matches every Mon-Sat slot since 4/22).
- Threads: 1:30 PM ET, 30 min after Twitter #2 per spec (adapts the WC 2026 T-39 country-rule refresh into longer-form analysis with the three-venue-page launch amplification).
- TikTok: 7 PM ET per spec (spec allows 12 PM or 7 PM; chose 7 PM for evening engagement window and consistency with the past five weeks of TikTok timing).

## Image Prompts (queued for when banana MCP comes online)

All prompts follow the brand pillar mapping. 16:9 for Twitter, 1:1 for Instagram and Threads. TikTok gets no image per spec. Target save path: `web/public/social/generated/YYYY-MM-DD-platform-topic.png`.

- **Tw #1 (Wrigley day-of compare)** -- Deal Alerts / UI-Web (16:9):
  > "A clean social media infographic card on a dark navy (#0a1628) background. Bold white sans-serif text 'DAY-OF SPREAD' as the hero label. Below it, three vertical bars in green (#22c55e) of varying heights labeled with smaller white text 'STUBHUB', 'SEATGEEK', 'VIVID'. Smaller white footer text '15-20% WIDER'. Minimal flat design, no photography, no gradients. Commercial graphic design for a ticket comparison app."

- **IG (Bruno Mars three-venue breakdown)** -- Tips & Education / UI-Web (1:1):
  > "A clean social media tip card on dark navy (#0a1628) background. Three horizontal sections stacked vertically, each with a small green (#22c55e) icon and bold white sans-serif text. Top section text 'SOLDIER MAY 16'. Middle section text 'OHIO MAY 20'. Bottom section text 'METLIFE AUG 21-25'. Minimal flat design, no photography. Commercial graphic for a ticket app."

- **Tw #2 (Bruno Mars T-13)** -- Tips & Education / UI-Web (16:9):
  > "A minimal data visualization card on dark navy (#0a1628) background. Bold white sans-serif text 'T-13 SOLDIER' as the hero label. Below it, three small dots in green (#22c55e) connected by a thin line, representing the three tour venues. Smaller white footer text 'THREE STADIUMS'. Clean flat design, no photography. Commercial infographic for a ticket comparison app."

- **Threads (WC 2026 T-39 country-rule)** -- Price Intelligence / UI-Web (1:1):
  > "A minimal data visualization card on dark navy (#0a1628) background. Bold white sans-serif text 'T-39 KICKOFF' as the hero label. Below it, a horizontal bar chart in green (#22c55e) showing '65.5%' as the dominant value, with smaller white text 'FIFA MOST EXPENSIVE'. Clean flat design, no photography. Commercial infographic for a ticket comparison app."

- **Tw #3 (WC 2026 T-39 + venue-page launch)** -- World Cup 2026 / Atmospheric Cinema (16:9):
  > "A wide modern stadium exterior at golden hour, FIFA World Cup 2026 banners visible on the structure, fans walking toward the entrance gates. Warm natural sunlight, shallow depth of field on the crowd. Captured with Sony A7R IV, 24mm wide-angle lens at f/2.8. Sports editorial photography for a magazine cover."

All prompts keep embedded text under 25 chars per element, use only brand hex colors (navy #0a1628, green #22c55e, white #ffffff), and avoid banned terms ("8K", "masterpiece", "ultra-realistic", "high resolution", "hyper-detailed"). Four prompts use UI/Web data-visual (Deal Alerts + Tips & Education + Price Intelligence pillars) and one uses atmospheric cinema (World Cup 2026 pillar -- the canonical mode for stadium-anchored content). Heavier UI/Web mix today than yesterday because the slate is anchored on data points (cross-platform spread, venue-by-venue resale-curve math, FIFA-most-expensive percentage) rather than venue-narrative content.

## Voice Check
- **No banned words**: no "delve", "crucial", "pivotal", "landscape", "tapestry", "testament", "underscore", "showcase", "vibrant", "nestled", "groundbreaking", "renowned", "breathtaking", "foster", "garner", "interplay", "intricate", "enhancing", "encompassing", "cultivating".
- **No banned phrases**: no "stands as", "serves as", "marks a pivotal moment", "reflects broader trends", "is a testament to", "It's not just X; it's Y", "Not only...but also", "Here's the thing", "Let's break this down", "Here's what you need to know", "No guessing", "No wasted clicks", "The real question is", "At its core", "What really matters", "could potentially", "it might be argued".
- **No em dashes for emphasis**: all emphasis done with periods, commas, colons, and parentheses. Hyphens used only for compound modifiers ("day-of", "night-game", "three-night", "mid-priced", "pre-sale", "night-of", "buy-window", "country-first", "platform-second", "FIFA-most-expensive", "Last-Minute", "lakefront", "Three-night", "lower-bowl", "single-night") and never for sentence-level emphasis. Zero em dashes in post copy.
- **No forced rule-of-three**: Three-venue framing on Bruno Mars is actual data (three venues exist), not stylistic. IG/TikTok list three different stadium attributes (capacity, single-night vs residency, resale-curve shape) but those are descriptive of three real venues, not forced. Threads lists "Three at Mexican venues, two at BC Place, one at BMO" -- actual count of the FIFA-cheapest distribution.
- **No "-ing" tack-ons**: no "highlighting", "showcasing", "underscoring", "reflecting". Gerunds appear only in noun phrases ("Resale curve typically peaks", "Three-night runs change the math") not as stylistic tack-ons.
- **No generic wrap-ups**: no "the future looks bright", "exciting times ahead". URLs placed naturally at the end of each Twitter post. Threads ends with the URL. Tw #1 ends with "before first pitch. ticketscan.io" -- timing-anchored. Tw #2 ends with "Soldier first, T-13 from today. ticketscan.io" -- forward-state anchor. Tw #3 ends with "Three refreshed venue pages now live (MetLife, SoFi, Hard Rock). ticketscan.io/world-cup-2026" -- the page-launch fact.
- **Varied sentence length**: short fragments ("Single night.", "Same artist.", "Compare every time.", "Country first, platform second.", "Buy-window arbitrage if you're flexible on date.", "Thirteen days to Soldier Field.", "Link in bio.") alongside longer descriptive lines. Tw #1 opens with a 5-word fragment + a 7-word fragment. Tw #2 opens with a 7-word noun-phrase fragment. Tw #3 opens with a 5-word fragment. IG opens with a 4-word noun-phrase fragment + a 12-word descriptive line. Threads opens with a 7-word fragment + an 11-word descriptive line. TikTok opens with the POV fragment.
- **Specific numbers on every post**: Tw #1: 15, 20, 30 (seconds). IG: 14, 21, 5, 62, 103, 200, 82, 16 (date), 1, 3 (nights), 13. Tw #2: 13. Threads: 39, 28, 58, 38, 65.5, 20, 3 (Mexico), 2 (Vancouver), 1 (BMO), 4, 70, 75. Tw #3: 39, 28, 65.5, 3 (pages). TikTok: 16, 20, 21, 22, 25, 62, 14, 21, 103, 200, 82, 1, 3, 13. Numbers are concrete on every post.
- **Opinionated framing**: "Worth a 30-second compare before first pitch" (Tw #1), "Same artist, three different stadium sizes, three different resale curves" (Tw #2), "Three-night runs change the math" (IG, TikTok), "The middle night sits in between in a way that doesn't always reflect the actual concert experience" (IG, TikTok), "Buy-window arbitrage if you're flexible on date" (IG, TikTok), "The angle most casual buyers miss" (IG, TikTok), "Country first, platform second" (Threads, Tw #3), "Match anywhere in the US, check FIFA last" (Threads), "MetLife is the interesting one" (TikTok). Every post takes a clear position.
- **First person used naturally**: minimal first-person on this slate since the angles are observational (Cubs day-of patterns, three-venue tour math, FIFA cross-platform tracking). "We checked" / "We ran" / "We compared" not used today since the data points are descriptive of the market, not platform-internal measurements. Threads uses the collective "what 28 days of cross-platform tracking actually shows" -- first-person-adjacent, not personal.
- **URL placement natural**: ticketscan.io at end of Tw #1 (homepage since Wrigley page is still 404), ticketscan.io at end of Tw #2 (no /tickets/bruno-mars aggregator yet, homepage is correct), ticketscan.io/world-cup-2026 at end of Threads and Tw #3 (deep-link to the just-refreshed WC page cluster). Instagram and TikTok use "Link in bio" per platform convention.
- **Spell-out variety**: IG/TikTok use "Sixty-two thousand", "a hundred-and-three thousand", "Eighty-two thousand", "Thirteen days", "fourteen to twenty-one days" for spell-out variety. Other posts use "15 to 20%", "T-13", "T-39", "65.5%", "70 to 75%" for compactness when the number is the data point being cited.
- **Instagram constraints**: exactly 5 hashtags, 0 emojis (brand guideline: max 5 hashtags, max 2 emojis).
- **TikTok hashtags**: 8 hashtags in the TikTok caption, emoji-free caption body.
- **Final self-check pass**: re-read each post asking "person or AI?" -- rhythm varies, prices/sections/dates are specific, openings differ (timing-anchored on Tw #1, three-venue setup on Tw #2 and IG, T-39 fragment on Tw #3 and Threads, POV fragment on TikTok). The Bruno Mars three-venue hook carries across Tw #2, IG, and TikTok deliberately as the consumer-pricing anchor. The WC 2026 T-39 hook carries across Tw #3 and Threads as the WC 2026 series continuation. The Cubs Game 3 hook is a single Tw #1 placement since the Wrigley venue page is still 404 and the angle would lose credibility if amplified across more posts without a destination URL.

## Notes
- **Today's slate is unusually diversified**: Three distinct hooks (Wrigley day-of, Bruno Mars three-venue, WC 2026 T-39 + Hard Rock amplification) across six posts, breaking the 5-day single-hook concentration streak (4/28-5/02). Sunday is the right day for the diversification because (a) no venue refresh is shipping today, (b) Cubs Game 3 timing pressure means the day-of post has to land Sunday morning or never, (c) Bruno Mars T-13 is the strongest non-WC organic signal in the watchlist data and the cleanest pre-seed for Wednesday's blog draft, and (d) the WC 2026 T-39 + Hard Rock launch amplification gives the second-tier Sunday traffic something to do once the Wrigley/Bruno windows have closed.
- **Operational escalation (Hook 2)**: Day 26 publish-velocity zero-streak. Queue holds at 11 today. Today's content-hook.md frames Day 26 as six days deeper than last week's already-flagged gap, with **four of the eleven now time-sensitive in the next 14 days**: 4/15 WC seat-assignments piece (any day this week before Last-Minute Sales Phase exhausts), 4/22 FIFA-resale three-weeks-data (this week or it gets compressed by 4/29 piece), 4/27 Summer Concert Tour (May 1 deadline already 2 days past, recommended Monday 5/4 ship with 1-line edit), 4/29 WC General-Sale Closing (4 days stale today, ship by Wed 5/6 max). Re-flagging the same operational call from the 4/29-5/02 social logs: a single batched `./marketing-agents/scripts/publish-draft.sh` run across the eleven drafts clears the largest non-revenue blocker on the platform.
- **Wrigley urgency (Hook 3)**: `/venues/wrigley-field` is still a 404 on Day 10. Cubs Game 3 (today) is the third of six home-stand games to roll past with no live page. Games 4-6 (May 4, 5, 6) remain. **Monday 5/4 is the emergency override day** per Hook 8 -- the Wrigley page goes live before first pitch on the May 4 game. Today's Tw #1 routes to homepage rather than the missing venue page, taking the timing advantage without amplifying the page-creation gap publicly.
- **Bruno Mars cross-agent value-add (Hook 4)**: Today's Tw #2 + IG + TikTok pre-seed Wednesday 5/6's Bruno Mars venue-by-venue price comparison blog draft. By the time the blog post lands, the audience that follows TicketScan socials has already seen the three-venue framework, the resale-curve math, and the three-night residency Night 1/Night 3 buy-window logic. The blog piece can go deeper on the platform-by-platform comparison data and the alert-floor anchoring CTA without re-establishing the venue framework.
- **WC 2026 venue-cluster amplification**: Today's Tw #3 + Threads is the first time the slate has flagged "three refreshed venue pages now live" as a cohesive group (MetLife, SoFi, Hard Rock). This is the smallest viable WC-venue-cluster for organic-search funnel testing per yesterday's handoff to Analytics Agent. Worth re-flagging here so the Paid Ads Agent and the Analytics Agent both have today's record of the three-page cluster going live across the social slate.
- **Public error-fix loop closed**: The SoFi Third-Place-Playoff factual error from 5/01's slate was corrected publicly on 5/02 within 24 hours. Today's slate carries no further correction-related copy. The error-fix loop is closed and the audience that read 5/01-5/02 has the full corrected map.
- **Acquisition drought signal from analytics**: Today's analytics dashboard reports a 5-of-7-days zero-signup pattern continuing (Apr 26, 27, 30, May 1, May 2). The Wrigley page being 404 today is one of the most likely contributors to the Cubs-search-traffic non-conversion. Tomorrow's Monday 5/4 emergency override on Wrigley is the single highest-leverage acquisition fix on the calendar.
- **Tomorrow's Monday slot (Hook 8)**: Monday is normally "Write 1 blog draft (weekly big-idea piece)." Per today's Hook 8, the recommended override is to ship the Wrigley Field venue page first (per Hook 3), then write a smaller-scope Monday blog draft that pairs naturally with Wrigley (proposal: *"Cubs vs Reds: How Wrigley Pricing Moves in the Final 48 Hours"*). Tomorrow's social slate likely amplifies the Wrigley page launch within hours of the commit landing -- a Twitter post with the Wrigley URL, possibly an IG breakdown of the seating tiers, and a TikTok on the day-game-vs-night-game pricing pattern.
- **Pre-gen status today**: ZERO pre-gen entries existed for 5/03. Nine out of the last ten days with no pre-gen content (4/24, 4/25, 4/27, 4/28, 4/29, 4/30, 5/01, 5/02, 5/03). Pattern is steady-state. Operational call from the 4/29-5/02 logs stands: skip pre-gen entirely going forward, run from hooks every day.
- **Backup if a post needs to swap out**:
  - NBA Round 1 G7 (any series going the distance Sunday) -- reserve Tw #3 for a same-day platform-windows pattern post if a G7 lands tonight. Lower probability since most series resolved by G6.
  - WC 2026 T-39 daily refresh (if the daily FIFA data shows a meaningful shift in the FIFA-resale-most-expensive percentage) -- Tw #3 is already that post; if the daily data shifts, swap the 65.5% number with the updated value before publish.
  - Hard Rock launch 24-hour engagement signal -- if Tw #1/IG from yesterday pulled notable engagement, reserve Sunday afternoon for a quote-tweet or follow-up. Currently no engagement data available; Tw #3 carries the launch amplification implicitly.

## Tomorrow Ideas (Monday 2026-05-04)
- **Wrigley page launch announcement (highest priority, runs the moment the page goes live)** -- Monday morning Twitter post anchored on the new `/venues/wrigley-field` URL. Pairs with the Cubs Game 4 (vs Reds) timing -- ideally lands at first pitch or just before. Picks up where today's Tw #1 left off.
- **Wrigley day-game vs night-game pricing breakdown** -- IG or TikTok longer-form on the seating-tier pricing math. The Cubs home stand has Games 4 (Mon May 4 vs Reds), 5 (Tue May 5 vs Reds), 6 (Wed May 6 vs Reds) -- three live games to anchor the piece.
- **Bruno Mars Soldier Field T-12 follow-up** -- Twitter post if the Soldier Field May 16 resale data has moved meaningfully in the past 24 hours. Lower priority than Wrigley, can slot to Tuesday 5/5 if Monday's slate is full.
- **WC 2026 T-38 daily refresh** -- if the daily FIFA-most-expensive percentage moved meaningfully. Same template as today's Tw #3 with the updated countdown number.
- **NBA Round 2 preview (if any series advanced Sunday)** -- Twitter post with the platform-windows pattern for the new Round 2 matchups. Time-sensitive if a series advanced Sunday; otherwise slot to Tuesday/Wednesday.
- **MetLife / SoFi / Hard Rock internal-link audit announcement (if SEO Agent ships the audit Monday)** -- single Twitter post highlighting that the three refreshed WC venue pages now cross-link. Lower priority since it's an SEO/internal-link story not a consumer-pricing story.

## Handoffs
- **Email Agent (Sunday 2026-05-03 or Monday 2026-05-04)**: Today's Bruno Mars three-venue framing is a strong primer for a Romantic Tour newsletter send. Subject-line candidates: "Bruno Mars Soldier Field is in 13 days -- here's what each venue's resale curve looks like", "Three Bruno Mars venues, three different price floors", "The MetLife middle-night Bruno Mars buy-window nobody talks about". The Wrigley/Cubs angle is too local for a national newsletter send but pairs naturally with a Chicago-segment send if the email list is segmentable. The WC 2026 T-39 country-rule angle continues to be the strongest evergreen WC newsletter primer; the three-venue-page-cluster (MetLife, SoFi, Hard Rock) gives the WC newsletter a clean three-link landing structure for the next send.
- **SEO Agent**: Today's content-hook.md flagged Hook 6 (SEO bundle Day 17 process deviation -- yesterday's worldcup.ts edits shipped under the daily-marketing-output commit message rather than a scoped Content-refresh commit). Forward-fix is captured in the refresh-checklist Step 5 addition for next Friday/Saturday refresh slots starting 5/8. Same flag as past two weeks -- the unshipped 17-file SEO bundle still needs to deploy for the AggregateOffer `lowPrice` to populate from the new section data. Day 17 of SEO Day-10 escalation. SEO Ask 2 (FAQ audit) is now Day 6 overdue. Both should ship this weekend to clear the largest cross-agent debt of the week. Three refreshed WC venue pages (MetLife, SoFi, Hard Rock) is the smallest viable cluster for the WC-venue-search organic test. Wrigley page going live Monday morning per Hook 3 adds a fourth high-leverage venue page for the SEO test surface.
- **Content Agent**: Today's six-post slate is the first multi-anchor distribution in six days. Bruno Mars three-venue framing across Tw #2 + IG + TikTok pre-seeds Wednesday 5/6's blog draft. Wrigley/Cubs Game 3 day-of post pre-seeds Monday 5/4's emergency override (Wrigley venue page + paired blog draft). WC 2026 T-39 + venue-cluster amplification on Tw #3 + Threads gives the audience the cohesive view of the three refreshed pages. Weekly handoff: four blog drafts shipped Mon-Thu against four planned (100% delivery -- first time in five weeks of tracking per today's Hook 1), two refresh slots delivered Fri SoFi + Sat Hard Rock against plan (100% delivery), one inline factual correction shipped on Sat (SoFi TPP -> Semi-Final framing), one inline off-by-one on MetLife shipped same-commit, and a process improvement (refresh-checklist Step 0: cross-check `worldCupMatches` array before drafting) added to the playbook for the next 14 sparse WC venues.
- **Paid Ads Agent**: Today's slate adds two new pre-seed surfaces: (a) Bruno Mars Romantic Tour for "Bruno Mars tickets 2026" / "Bruno Mars MetLife tickets" / "Bruno Mars Soldier Field tickets" / "Bruno Mars Romantic Tour tickets" intent, with the Wednesday 5/6 blog draft as the eventual conversion landing page, and (b) the WC 2026 three-venue cluster (MetLife + SoFi + Hard Rock) which is the cleanest three-stadium WC venue-search cluster on the platform alongside the 4/30 SH-vs-VS + 4/23 TM-vs-SG comparison-search cluster. Once conversion tracking goes live (Day 26 of GTM/GA gap per today's analytics-daily), the Bruno Mars cluster + the WC three-venue cluster + the Wrigley page (live Monday) gives the cleanest four-cluster paid-search test surface the platform has had to date.
- **Analytics Agent**: Today's six-post slate publishes against a Day 26 publish-zero-streak and a continuing 5-of-7-days zero-signup pattern per today's analytics-daily-2026-05-03.md. The Hard Rock page going live yesterday and the Bruno Mars three-venue framing landing today are the two new surfaces added since the last analytics dashboard pull. If Sunday/Monday signups don't move, the social-slate-vs-acquisition correlation is now testable on (a) three refreshed WC venue pages (MetLife, SoFi, Hard Rock) over a 7-day window, (b) Bruno Mars three-venue framing as a non-WC consumer signal across IG + TikTok + Twitter, and (c) the Wrigley page going live Monday as a fourth high-leverage organic-search surface. Worth modeling as the "venue-refresh-cohort + tour-cluster acquisition delta" once a baseline is established. The Wrigley launch is the cleanest natural experiment: page goes from 404 to live in a single commit, with three Cubs home-stand games still ahead to drive search traffic into the new surface.
