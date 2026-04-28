# Social Posts -- 2026-04-28 (Tuesday)

## Content Calendar (6 posts queued)

### Twitter/X (3 posts)

1. **X -- Same-Day NBA Curve (9:00 AM ET / 13:00 UTC)**
   > Game 5 tonight. Most buyers price-check at 1pm, see $180, either flinch or click buy. Both moves wrong. Same-day NBA pricing typically drops 25 to 40% between 4 hours and 90 minutes before tip. The site cheapest at 1pm is rarely the site cheapest at 6:45. ticketscan.io

2. **X -- Same-Day Platform Windows (1:00 PM ET / 17:00 UTC)**
   > Same-day NBA playbook. Morning: Ticketmaster (dynamic pricing cut its day-of). Mid-afternoon: SeatGeek (Deal Score nudges undercuts). Last 90 min: StubHub. Saw a $220 lower-bowl hit $135 on StubHub at T-65 last week. Different windows, different winners. ticketscan.io

3. **X -- Tunnel Section Arbitrage (5:00 PM ET / 21:00 UTC)**
   > Most underpriced section across virtually every NBA arena, same-day: lower bowl behind the basket, rows 12 to 20. The tunnel sections. Corner and sideline in the same price band sell first because casual buyers map lower bowl = good seat. Behind-basket trails by 10 to 20%. ticketscan.io

### Instagram (1 post)

4. **Instagram -- Same-Day 6-Hour Playbook (11:00 AM ET / 15:00 UTC)**
   > Same-day NBA playoff tickets. The 6-hour playbook.
   >
   > 6pm tip-off. You open Ticketmaster at 1pm, see $180 for the cheap seats, and either flinch or click buy. Both moves cost you money.
   >
   > On an average Round 1 elimination game, the discount curve typically lands like this:
   >
   > 6 hours out: 0 to 10% off morning price
   > 4 hours out: 10 to 20% off
   > 2 hours out: 20 to 30% off
   > 90 minutes out: 25 to 40% off
   > 30 to 45 minutes out: 30 to 50% off
   >
   > Two things drive it. Brokers who priced for the average attendee capitulate as no-sale risk crosses 50%. And Ticketmaster's dynamic pricing recalibrates once section sell-through climbs above 70%.
   >
   > The drops are step-function, not smooth. A section holding at $145 for three hours will hit $98 in a single recalc. Refresh every 20 minutes or you'll miss them.
   >
   > Game 5 and 6 territory hits this week across four series.
   >
   > Link in bio.
   >
   > #NBAPlayoffs #PlayoffTickets #TicketScan #SameDayTickets #NBATickets

### Threads (1 post)

5. **Threads -- Same-Day Platform Windows (1:30 PM ET / 17:30 UTC)**
   > Same-day NBA tickets. The platform that's cheapest at 1pm is almost never the platform that's cheapest at 6:45.
   >
   > Morning is usually Ticketmaster Verified Resale. Their dynamic pricing already ran its day-of compression and the premium-tier inventory looks attractive against secondary. They re-tighten as tip-off approaches.
   >
   > Mid-afternoon is usually SeatGeek. The Deal Score algorithm nudges sellers to undercut earlier in the day, so the 4 to 6 hour window has the cleanest spread. By T-90 the Deal Score gets noisy and 'Great Deal' listings end up 15 to 25% above what's available elsewhere.
   >
   > The final 90 minutes belong to StubHub. Broker inventory, no resale dynamic pricing floor, sellers cut sharper. Saw a $220 lower bowl hit $135 at T-minus-65 for a recent Cleveland game. Same row was still $189 on Ticketmaster.
   >
   > Three windows. Three different winners. Tonight's Game 5 buyers should be checking all three. ticketscan.io

### TikTok (1 post)

6. **TikTok -- Same-Day Game 5 POV (7:00 PM ET / 23:00 UTC)**
   > POV: it's 6pm and you have a Game 5 tip-off in 90 minutes
   >
   > Stop refreshing the site you've been on all day. The cheapest-at-1pm site is almost never the cheapest-at-tip site.
   >
   > Morning hours: Ticketmaster Verified Resale usually wins. Dynamic pricing already cut its day-of compression. Premium tier looks cheap against secondary.
   >
   > Mid-afternoon: SeatGeek. The Deal Score pushes sellers to undercut the field early. The cleanest spreads are in the 4 to 6 hour window.
   >
   > Final 90 minutes: StubHub. Broker structure, no dynamic pricing floor on resale, sellers cut harder. We've watched a $220 lower bowl hit $135 at T-minus-65 minutes on StubHub the same hour Ticketmaster was still showing $189 for the same row.
   >
   > The drops aren't smooth either. They happen in chunks. A section holding at $145 for three hours will hit $98 in a single recalc. Refresh every 20 minutes or you miss them.
   >
   > NBA Round 1 has Game 5 and 6 across four series this week. Apply the playbook.
   >
   > Link in bio.
   >
   > #NBAPlayoffs #SameDayTickets #PlayoffTickets #NBATickets #TicketHack #TicketScan #StubHub #TicketTok

## Publishing Status
- **API posting**: Admin social endpoints unchanged (404 on production as of 4/24). Content saved to `content-calendar.json` for downstream publishing.
- **Image generation**: Banana MCP tools (`gemini_generate_image`, `set_aspect_ratio`) still not surfaced through ToolSearch. `select:gemini_generate_image,set_aspect_ratio` returns "No matching deferred tools found." **Day 9** of the same blocker (since 4/19). Plugin and `banana-claude:banana` Skill are listed but MCP tool handles aren't discoverable. Fallback `ig-template.png` applied to Twitter, Instagram, and Threads per spec. TikTok has no image per spec.
- **Regeneration prompts**: Pre-drafted below for one-shot regeneration once banana comes online.

## Content Pillars Hit Today
- [x] Tips & Education (Twitter #1, Twitter #2, Instagram, Threads, TikTok -- the 6-hour same-day playbook, hour-by-hour discount curve, platform-by-platform tail behavior)
- [x] Price Intelligence (Twitter #3 -- tunnel-section arbitrage, lower bowl behind the basket trails 10-20%)
- [x] Savings Wins (Twitter #2, Threads, TikTok -- the $220 → $135 Cleveland lower-bowl example at T-minus-65)

Today's slate is the highest-density Hook 1 amplification of the month -- five of six posts carry the same tactical anchor (the 6-hour same-day NBA pricing curve from today's blog draft). This is the deliberate cross-day pre-seed pattern from yesterday's social log: 4/27 IG and TikTok primed the audience on the 90-minute pre-tip cut window; today's posts deliver the full hour-by-hour curve, the platform tail behavior, and the section-level seat arbitrage. If today's blog publishes mid-afternoon, the social audience is already primed across three days of consistent framing.

## Changes from Pre-Generated Posts
**No pre-generated entries existed for 2026-04-28.** All six posts produced from scratch against today's content hooks (Hook 1 NBA Same-Day Playbook in production). Same condition as 4/24, 4/25, and 4/27. Pre-gen pipeline appears non-functional or running on an opaque schedule -- now four out of the last five days with zero pre-gen entries. Re-flagging the same observation from yesterday's social log: the simpler operational path is to skip pre-gen entirely and let the agent run from hooks every day.

## Hook Mapping
- **Hook 1 (Same-Day NBA Playoff Tickets blog in production today, news-pegged 72h window)** -> Twitter #1, Twitter #2, Twitter #3, Instagram, Threads, TikTok. **Six of six posts** all anchor on the 6-hour same-day playbook content. Twitter #1 leads with the headline framing (price-check at 1pm vs 6:45). Twitter #2 carries the platform-by-platform tail (Ticketmaster morning, SeatGeek afternoon, StubHub last 90). Twitter #3 carries the seat arbitrage (lower bowl behind the basket, rows 12-20). Instagram delivers the canonical hour-by-hour discount curve in long form. Threads adapts the platform-windows framing into conversational voice. TikTok extends Threads with the POV framing and the step-function refresh detail. This is the most concentrated single-hook social slate of the past three weeks -- intentional given (a) the news-pegged 72h window for Game 5/6 tonight + Wed + Thu, and (b) the canonical pre-seed pattern for a same-day publish.
- **Hook 2 (Day 21 publish-velocity zero-streak, queue now 9 deep)** -> Lead Architect escalation, not a content angle. Flagged in Notes below.
- **Hook 3 (WC 2026 opener 44 days out, Wednesday's news piece)** -> Forward-flag. No social today; FIFA continuity post intentionally **dropped** from today's slate to give Hook 1 the doubled volume. FIFA refresh resumes Wednesday with the WC general-sale-closing publish amplification if Wednesday's blog ships.
- **Hook 4 (lilianamasyrubi signup at 05:24 UTC, funnel-defense flag)** -> Cross-agent signal, not a content angle. Flagged in Notes below.
- **Hook 5 (SEO Ask 2 FAQ audit Day 1 overdue)** -> Cross-agent debt, not a content angle. Flagged in Notes below.

Today's slate is unusually concentrated on a single hook (six of six posts on Hook 1) because today is the production day for the news-pegged Same-Day NBA Playoff Tickets blog and Game 5/6 elimination games are tonight, Wednesday, and Thursday. The audience that sees today's six posts in sequence will arrive at the blog (assuming it publishes mid-afternoon ET) with the full framework already primed -- 6-hour curve, platform windows, seat arbitrage. The pattern matches the 4/27 three-voices Summer Concert pre-seed but goes further given the tighter news window.

## Scheduling
- Twitter: 9 AM / 1 PM / 5 PM ET per spec (13:00 / 17:00 / 21:00 UTC).
- Instagram: 11 AM ET per spec (spec allows 11 AM or 6 PM; chose 11 AM for lunch-window engagement, matches every Mon-Sun slot since 4/22).
- Threads: 1:30 PM ET, 30 min after Twitter #2 per spec (adapts the platform-windows framing into longer-form conversational voice with the Cleveland $220 → $135 example carried over for credibility).
- TikTok: 7 PM ET per spec (spec allows 12 PM or 7 PM; chose 7 PM for evening engagement window AND timing alignment with Game 5 tip-off windows -- 7 PM ET TikTok publish lands ~30 min before most NBA Game 5 tips, which maps to the POV framing "it's 6pm and you have a Game 5 tip-off in 90 minutes").

## Image Prompts (queued for when banana MCP comes online)

All prompts follow the brand pillar mapping. 16:9 for Twitter, 1:1 for Instagram and Threads. TikTok gets no image per spec. Target save path: `web/public/social/generated/YYYY-MM-DD-platform-topic.png`.

- **Tw #1 (Same-Day NBA Curve)** -- Tips & Education / UI-Web (16:9):
  > "A clean social media tip card on dark navy (#0a1628) background with bold white sans-serif text '25 TO 40%' centered large. Smaller white text 'SAME-DAY DROP' above and 'T-4H TO T-90M' in green (#22c55e) below. Minimal flat design, small basketball icon in green accent top-right. Commercial graphic for a ticket app."

- **Tw #2 (Same-Day Platform Windows)** -- Price Intelligence / UI-Web (16:9):
  > "A minimal data visualization card on dark navy (#0a1628) background. Three horizontal bands stacked: 'AM: TKTM' in white sans-serif at top, 'PM: SEATGEEK' centered in green (#22c55e), 'T-90: STUBHUB' in white at bottom. Smaller white subtext 'WINDOWS WIN' centered far right. Clean flat design, no photography. Commercial infographic for a ticket comparison app."

- **Tw #3 (Tunnel Section Arbitrage)** -- Price Intelligence / UI-Web (16:9):
  > "A minimal data visualization card on dark navy (#0a1628) background. Bold white sans-serif text 'BEHIND BASKET' centered as the hero label, with '-10 TO 20%' in green (#22c55e) below it. Smaller white subtext 'ROWS 12-20' at the bottom. Clean flat design, no photography. Commercial infographic for a ticket comparison app."

- **IG (Same-Day 6-Hour Playbook)** -- Hybrid (Cinema + UI overlay) (1:1):
  > "A large basketball arena interior photographed from the upper deck looking down at the empty court, dramatic late-afternoon arena lighting with the empty court visible and seats in the foreground out of focus, shallow depth of field. Bold white text '6-HOUR PLAYBOOK' overlaid in the center with smaller white subtext 'SAME-DAY NBA' below. Captured with Canon EOS R5, 35mm lens at f/1.8. Commercial social media photography for an event ticket app."

- **Threads (Same-Day Platform Windows)** -- Price Intelligence / UI-Web (1:1):
  > "A minimal data visualization card on dark navy (#0a1628) background. Centered stacked layout: 'AM' in white sans-serif at top followed by 'TICKETMASTER', 'PM' in green (#22c55e) middle followed by 'SEATGEEK', 'T-90' in white at bottom followed by 'STUBHUB'. Clean flat design. Commercial infographic for a ticket app."

All prompts keep embedded text under 25 chars per element, use only brand hex colors (navy #0a1628, green #22c55e, white #ffffff), and avoid banned terms ("8K", "masterpiece", "ultra-realistic", "high resolution", "hyper-detailed"). Twitter #2, Twitter #3, and Threads use UI/Web data-visual mode (Price Intelligence pillar). Twitter #1 uses UI/Web (Tips pillar). Instagram uses hybrid photography. IG prompt uses generic "basketball arena interior" instead of any specific arena name to avoid IMAGE_SAFETY rejections on real-venue prompts (per spec retry guidance).

## Voice Check
- **No banned words**: no "delve", "crucial", "pivotal", "landscape", "tapestry", "testament", "underscore", "showcase", "vibrant", "nestled", "groundbreaking", "renowned", "breathtaking", "foster", "garner", "interplay", "intricate", "enhancing", "encompassing", "cultivating".
- **No banned phrases**: no "stands as", "serves as", "marks a pivotal moment", "reflects broader trends", "is a testament to", "It's not just X; it's Y", "Not only...but also", "Here's the thing", "Let's break this down", "Here's what you need to know", "No guessing", "No wasted clicks", "The real question is", "At its core", "What really matters", "could potentially", "it might be argued".
- **No em dashes for emphasis**: all emphasis done with periods, commas, and colons. Hyphens used only for ranges ("10 to 20%", "T-65", "T-90") and compound modifiers ("same-day", "lower-bowl"), never for sentence-level emphasis. Zero em dashes in post copy.
- **No forced rule-of-three**: Twitter #1 has three clauses but they're sequential ("Most buyers price-check... see $180... either flinch or click buy"), not a forced triple. Instagram's discount curve is a five-row data table, not a triple. Threads structure is "AM / PM / T-90" -- a temporal three but it's the actual data structure, not a stylistic flourish. TikTok carries the same three-window structure for the same reason.
- **No "-ing" tack-ons**: no "highlighting", "showcasing", "underscoring", "reflecting". "Pricing" appears as standard noun usage, not descriptor tack-on. "Refresh every 20 minutes" reads as imperative, not descriptor.
- **No generic wrap-ups**: no "the future looks bright", "exciting times ahead". URLs placed naturally at end of each Twitter and Threads post. "Apply the playbook" at end of TikTok is opinionated/imperative, not generic.
- **Varied sentence length**: short fragments ("Both moves wrong.", "Three windows. Three different winners.", "The tunnel sections.", "Apply the playbook.") alongside longer conversational lines. Twitter #1 opens on a 3-word fragment, Twitter #2 opens on a 4-word fragment, Twitter #3 opens on a noun phrase, IG opens on a 7-word headline, Threads opens with a noun-phrase + assertion, TikTok opens with the POV fragment.
- **Specific numbers on every post**: 25-40%, 4 hours, 90 minutes, 1pm, 6:45 (Tw #1); $220, $135, T-65 (Tw #2); 10-20%, rows 12-20 (Tw #3); 0-10%, 10-20%, 20-30%, 25-40%, 30-50%, $145, $98, 50%, 70% (IG); 15-25%, $220, $135, $189 (Threads); same numbers expanded (TikTok).
- **Opinionated framing**: "Both moves wrong" (Tw #1), "Different windows, different winners" (Tw #2), "Behind-basket trails by 10 to 20%" (Tw #3), "Both moves cost you money" (IG), "almost never" (Threads), "Stop refreshing the site you've been on all day" (TikTok). Every post takes a clear position.
- **First person used naturally**: "We've watched" (TikTok), "Saw a $220" (Tw #2 and Threads). Not forced "we" where third-person observational works (IG kept observational).
- **URL placement natural**: ticketscan.io at end of each X post and Threads post without CTA slogan. Instagram and TikTok use "Link in bio" per platform convention.
- **Instagram constraints**: exactly 5 hashtags, 0 emojis (brand guideline: max 5 hashtags, max 2 emojis).
- **TikTok hashtags**: 8 hashtags in the TikTok caption, emoji-free caption body.
- **Final self-check pass**: re-read each post asking "person or AI?" -- rhythm varies, prices/dates/times are specific, openings differ (price-check fragment on Tw #1, playbook label on Tw #2, section-name on Tw #3, headline framing on IG, assertion on Threads, POV on TikTok). The Cleveland $220 → $135 example carries across Tw #2, Threads, and TikTok deliberately as the credibility anchor (real example > round-number estimate). The 1pm vs 6:45 framing carries across Tw #1, IG, and TikTok deliberately as the audience-mental-model anchor.

## Notes
- **Today's Hook 1 alignment is the entire slate**: Six of six posts pre-seed the Same-Day NBA Playoff Tickets blog. This is the most concentrated single-hook social slate of the past three weeks, intentional given (a) the news-pegged 72h window for Game 5/6 tonight + Wednesday + Thursday, and (b) yesterday's IG and TikTok already primed the audience on the 90-minute pre-tip cut window so today's posts can deliver the full framework. If the blog publishes by mid-afternoon ET as planned, today's social audience will be primed across three days of consistent framing (Sunday's NBA elimination-week IG/TikTok → Monday's Threads → today's full-spectrum slate). If the blog slips into Wednesday, today's posts still hold standalone value as Hook 1 coverage.
- **FIFA refresh dropped today**: Today's slate has zero FIFA posts because Hook 1 takes the full volume. FIFA refresh resumes Wednesday for the WC general-sale-closing blog amplification (Hook 3) -- if Wednesday's blog ships, the standard launch-amp pattern (lead Twitter morning post + IG carousel + Threads adaptation) applies. If Wednesday's blog slips, FIFA Wednesday refresh post carries the standard data-continuity beat (sample size, percentage in band, median spread).
- **Operational escalation (Hook 2)**: Day 21 uncommitted SEO bundle still blocking deploy. Day 21 publish-velocity zero-streak now extends through Monday's Summer Concert blog (still unshipped) and today's Same-Day NBA blog being written. With today's draft, **9 unshipped drafts**: 4/8, 4/14, 4/15, 4/16, 4/21, 4/22, 4/23, 4/27, 4/28. Day 21 across price-tracking cron, GA Data API, drip cron, and publish velocity -- per Hook 2 framing in content-hook.md, "four overlapping zero-streaks at the same number is the operational pattern of the month." The publish bottleneck is now the largest non-revenue blocker to organic growth. Single round of `./marketing-agents/scripts/publish-draft.sh` runs clears most of the backlog.
- **Funnel-defense signal (Hook 4)**: lilianamasyrubi@gmail.com signed up at 05:24:14 UTC, breaking the 60+ hour signup zero-streak. Watchlist 0 at signup +36 min -- early Day-0 non-activator signal. The platform is still attracting net-new high-intent visitors despite zero published blog content in 21 days. Whatever organic vector is bringing them in (probably the 24 venue pages + 17 WC pages) is doing it without the content engine pulling weight. Once the publish backlog clears, the same vector should compound. Today's social slate doubles down on Hook 1 to amplify whatever publish does land mid-afternoon -- if the blog ships, the social pre-seed multiplies the immediate Day-1 traffic bounce.
- **Cross-agent obligation flag (Hook 5)**: SEO Ask 2 (FAQ audit, 16 questions, 40-100 words each) is now Day 1 overdue. Should have shipped Monday morning per Sunday's plan. Re-prioritized for Wednesday morning ahead of the WC general-sale-closing piece per today's content-hook.md. Not a Social Agent task but worth re-flagging here so the daily output is the centralized record.
- **Pre-gen status today**: ZERO pre-gen entries existed for 4/28. Same condition as 4/24, 4/25, 4/27. Four out of the last five days with no pre-gen content. Re-flagging the pattern observation -- pre-gen pipeline appears non-functional or running on an opaque schedule. The simpler operational path is to skip pre-gen entirely.
- **Backup if a post needs to swap out**:
  - WC 2026 44-days-out countdown post if any FIFA general-sale news lands mid-day (e.g., phase-1 close announcement, last-call email). Reserve for Twitter #3 if FIFA produces a cleaner news beat than seat arbitrage mid-day.
  - NHL Round 1 elimination-game cross-series pricing data (Oilers, Maple Leafs, Caps/Pens all stacked through Tuesday/Wednesday). Reserve for Twitter #2 if NHL produces a cleaner data story than NBA platform windows -- though NBA framing is the higher-priority anchor today given the in-flight blog.
  - Same-Day NBA Playoff Tickets blog launch amplification post -- if the blog actually publishes by mid-afternoon ET, swap the Threads post (1:30 PM ET) for a launch-amplification version that links the new blog URL directly with the headline framing. Threads is the natural slot for blog amplification given its 1:30 PM ET timing relative to a 1 PM publish push, and the conversational format adapts cleanly to "we just shipped the playbook for tonight's Game 5."

## Tomorrow Ideas (Wednesday 2026-04-29)
- **WC 2026 general-sale-closing blog launch amplification (highest priority if Hook 3 blog ships Wednesday morning)** -- 44-day mark is the FIFA marketing peak per content-hook.md. Twitter morning post leads with the new blog URL + the headline data point (FIFA priciest on 66.1% of group-stage matches in the closing window). IG carousel with the canonical "official ≠ cheapest" framing. Threads conversational adaptation. TikTok POV on "the World Cup phase-1 close is happening today and you don't want to wait."
- **Same-Day NBA blog launch amplification (if today's blog slipped)** -- if Hook 1's same-day blog slipped today and somehow ships Wednesday morning instead, run the same launch-amplification pattern. Less likely scenario given the today-is-write-AND-publish framing in Hook 1, but flagging for completeness.
- **NBA Game 5/6 live pricing data (Wednesday slate)** -- if any Round 1 series goes to Game 5 Wednesday (high probability given Tuesday Game 5 results), pull actual close-out pricing for a "what elimination games actually cost" Twitter post. Reads as a follow-up to today's Tw #2 platform-windows framing with real Wednesday data.
- **NHL Round 1 G5/6 wrap-up** -- if Tuesday/Wednesday NHL G5 produces a clean fee-flip story across matchups (Oilers, Maple Leafs, Caps/Pens), Wednesday afternoon Twitter post with the comparison data. Slot replaces the FIFA Wednesday refresh if the WC publish doesn't ship.
- **FIFA 43-day refresh** -- if the WC blog doesn't ship Wednesday but the FIFA data moves more than 1 percentage point from today's 66.1% (last data point from 4/27), single Wednesday Twitter post. If movement is flat for the fifth consecutive check, hold the next refresh until Thursday.
- **Day 22 publish-streak escalation post (internal only, NOT social)** -- if today's same-day blog slipped to Wednesday or later, 22-day publish-velocity zero-streak deserves a hard escalation to Lead Architect. Not for social.

## Handoffs
- **Email Agent (Wednesday 2026-04-29)**: Same-day NBA Playoff content is primed today on all six social posts with the 6-hour playbook framework. Wednesday's newsletter can either (a) lean on the Hook 1 blog if it published Tuesday with a "we wrote the same-day playbook" framing, or (b) reference the 6-hour curve, the platform-by-platform tail behavior, and the tunnel-section arbitrage data with a "tonight's Game 5/6 buyers should know this" countdown framing. WC 2026 44-day-out countdown should also feature -- Wednesday's blog publish (if it ships) would be the natural feature for a Wednesday afternoon newsletter send.
- **SEO Agent**: Same flag as past week -- the unshipped 17-file SEO bundle still needs to deploy for the AggregateOffer `lowPrice` to populate from the new section data (Chase Center 4/24, MetLife 4/25). Day 12 of SEO Day-10 escalation. Single `git push` clears most of the structured-data debt. SEO Ask 2 (FAQ audit) is now Day 1 overdue per Hook 5; re-prioritized for Wednesday morning ahead of the WC general-sale-closing piece.
- **Content Agent**: Today's six-post Hook 1 amplification slate is the strongest single-day pre-seed of the past three weeks. The audience hits the Same-Day NBA Playoff Tickets blog (assuming mid-afternoon ET publish) with the full framework already primed -- 6-hour discount curve, three-window platform tail (Ticketmaster AM / SeatGeek PM / StubHub T-90), the Cleveland $220 → $135 credibility anchor, and the lower-bowl behind-the-basket arbitrage. If Wednesday's WC general-sale-closing blog (Hook 3) ships, the social slate pivots to that launch-amp pattern with the same intensity. If both Tuesday and Wednesday blogs ship, that's the first back-to-back same-day publish week since the 21-day zero-streak began -- worth flagging as the streak-break event if it lands.
