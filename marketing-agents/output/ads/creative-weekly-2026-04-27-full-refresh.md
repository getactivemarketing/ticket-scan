# Ad Creative — Weekly Full Refresh — 2026-04-27
## 12 Variations: MetLife WC Final (NEW LEAD), TM-vs-SG Fee Flip, FIFA Fourth-Check, Bruno Mars Romantic Tour, Brand Defense + 5 Meta + 2 Display

_Full weekly creative batch. Produced for Agent 4 (Paid Ads Manager) weekly strategy session, 2026-04-27. Companion file: [`ads-weekly-2026-04-27.md`](../ads-weekly-2026-04-27.md)._

_Testing framework: 1 variable at a time. Run each variant minimum 3 days or 100 clicks. Winner scales; loser gets replaced. Full testing calendar in weekly report Section 4._

_Product-truth gates applied to every variation:_
- _**Demoted from headlines:** "price drop alerts" (85/85 null target_price)_
- _**Banned entirely:** "track prices every 4 hours" (dead cron Day 20), "daily price history" (same), "tickets tonight / same-day / last-minute / [event] tickets in 2 hours / walk up" (HARDENED DO-NOT-BID post-nmcnamee99 closed-loss), "track historical pricing / best time to buy" (NEW second-session-utility class)_
- _**Verified deliverable today:** "Compare Ticketmaster, SeatGeek, StubHub in one search" (`/compare`), "Free, no account required" (`/api/events/compare`), "16 World Cup 2026 host stadiums" (`/world-cup-2026` + stadium pages), and **NEW** "MetLife Stadium World Cup Final — 9 sections, FIFA Cat 1-4, $150 floor" (`/world-cup-2026/metlife-stadium`, deployed Apr 25 commit `2617882`), and "FIFA Resale runs more expensive in 66% of group-stage matches we measure, $94 median spread, 17-day fourth-check stability" (17-day social tracking + FIFA blog gated on publish)_

_**Launch condition (all variants, sharpened today):** Variation A is the only variation that is NOT LP-gated. All others are LP-gated, cron-gated, blog-publish-gated, or audit-gated. None should go live before the cron + audit gates clear; today's Apr 25 cohort 0/2 second-session-return finding is a NEW launch gate added to the existing list._

---

## Google Search Ads (5 Variations)

### Variation A — MetLife Stadium World Cup Final (NEW LEAD, Launch Day 1)

**Google Search Ad:**
```
Headline 1: World Cup Final at MetLife — 83 Days
Headline 2: $150 Resale Floor and Climbing
Headline 3: 9 Sections, FIFA Cat 1-4, Compared
Description 1: July 19, 2026. World Cup Final at MetLife Stadium. We mapped all 9 viable section groupings to FIFA Categories 1-4 + Coaches Club + Suites with soccer-config sightlines (which 100-level sections sit behind the goal lines vs along the side).
Description 2: Reference: Taylor Swift played MetLife five sold-out 2023 nights at $1,500-$5,000+ resale. Final demand will be on a different planet. Compare FIFA Resale, SeatGeek, StubHub. Free.
```

- **Final URL:** https://www.ticketscan.io/world-cup-2026/metlife-stadium *(deployed Apr 25, commit `2617882`; GTM healthy on this route HTTP 200)*
- **Display path:** ticketscan.io/world-cup-2026/metlife-stadium
- **Sitelinks:**
  - All 16 World Cup Stadiums → /world-cup-2026
  - Final + Semifinal Matches → /world-cup-2026/metlife-stadium *(MetLife hosts both)*
  - Compare Any Match → /compare *(note: anonymous traffic hits hard gate today; sitelink only, not a primary destination)*
  - How It Works → /how-it-works
- **Callouts:** "9 Section Breakdown", "FIFA Cat 1-4 Mapped", "Soccer Sightlines", "Free Comparison"
- **Match types:**
  - Exact: `metlife stadium world cup tickets`, `world cup final tickets`, `world cup final july 19 2026`, `metlife stadium seating chart`, `metlife stadium soccer tickets`, `world cup final metlife`, `2026 world cup final tickets`
  - Phrase: `world cup final tickets price`, `metlife stadium world cup seating`, `cheapest world cup final tickets`, `world cup final new jersey tickets`, `world cup final cat 1 tickets`, `metlife stadium soccer seating chart`, `fifa coaches club metlife`
  - **AVOID** blanket exact match on `metlife stadium tickets` — cross-contaminates NFL (Giants/Jets) and concert intent. Stick to soccer/Final/World Cup-qualified variants. Bruno Mars MetLife signal routes to Variation D at lower bids.
- **Geo:** NYC DMA primary (Manhattan + Brooklyn + Queens + Bronx + Staten Island) +25%. Greater NJ + CT + Long Island +20%. Philadelphia + DC +10% (drive-in radius for a Final). National at base. Soft positive Mexico CDMX/MTY +5%, Canada Toronto/Vancouver +5% (national-team supporter geos with US travel propensity).
- **Device:** Mobile +15% (research browses spike on mobile; final purchase often desktop). Desktop holds for evening/weekend research window.
- **Dayparting:** Continuous — World Cup Final research is high-intent and spreads evenly. Slight evening (7-11pm ET) lift across all DMAs.
- **Negative keywords (campaign-specific):** MetLife Stadium parking, MetLife Stadium directions, MetLife Stadium concessions, MetLife Stadium tour, MetLife Stadium NFL tickets, MetLife Stadium Giants tickets, MetLife Stadium Jets tickets, MetLife Stadium Taylor Swift tickets (Eras Tour ended)

**Why this angle:** Three anchors that compound: (1) MetLife is the single highest-intent World Cup venue keyword for the rest of 2026 — hosts the Final, two semifinals, and four group-stage matches. (2) The Eras Tour comp is a unique-to-MetLife proof point — no other US World Cup venue has a recent peer-event resale benchmark at this scale. (3) The $150 floor is a real, current, on-page number — not a forecast or an analogy. Combining the three: a high-intent venue keyword + a unique credibility benchmark + a verified on-page price = the strongest possible alignment between paid copy and LP content in the entire campaign portfolio.

**Shelf life:** Evergreen through Final week (mid-July), with weekly numbers refresh. Retire the "83 days" framing as countdown shortens; rotate to "60 days," "30 days," "10 days" milestones with concurrent paid-budget escalation. Single-variant longest-shelf creative in the portfolio.

**Refresh trigger:** Weekly re-pull of MetLife Final resale floor across FIFA Resale + SeatGeek + StubHub + Vivid Seats. If floor moves >10%, swap new number into the ad shell. Monthly: rerun the Eras Tour comp framing — at 60 days out, may shift to a SoFi or Beyoncé Renaissance comp if those become more salient. Also: if SEO bundle ships, upgrade ad copy to call out structured-data $150 floor surfacing in Google ("see the $150 floor right in search") for an additional 2-week burst.

**A/B test variant (Variation A2 — for Week 2 headline isolation):**
```
Headline 1: FIFA Final, MetLife, $150 Floor
Headline 2: 9 Sections Mapped, Cat 1-4 Inside
Headline 3: 83 Days. Compare Free, No Login.
```

---

### Variation B — TM vs SG Fee Flip (Blog-Anchored Head Terms, LP-Gated)

**Google Search Ad:**
```
Headline 1: Ticketmaster Fees vs SeatGeek Fees
Headline 2: Real Math from 60 Real Tickets
Headline 3: One Wins by ~$8 — but Not Always
Description 1: We pulled fee math on 60 actual tickets across Ticketmaster and SeatGeek this month. SeatGeek runs ~$8 cheaper on average — but the result flips on roughly 1 in 4 listings, especially upper-bowl premium and floor seats.
Description 2: The 2026 fee breakdown post compares 60 real tickets, every fee line by line. No more "all-in pricing" marketing-speak. Free comparison tool below.
```

- **Final URL:** https://www.ticketscan.io/blog/ticketmaster-vs-seatgeek-fees-2026 *(gated on publish — Day 4 unpublished as of 2026-04-27)* → falls back to https://www.ticketscan.io/compare
- **Display path:** ticketscan.io/ticketmaster-vs-seatgeek-fees
- **Sitelinks:**
  - Compare Ticket Prices → /compare *(soft-gate caveat: hard gate today)*
  - All Comparison Sites → /blog/best-ticket-comparison-sites-2026
  - World Cup 2026 → /world-cup-2026
  - How It Works → /how-it-works
- **Callouts:** "60 Real Tickets", "Line-by-Line Fees", "1-in-4 Flip Rate", "Free Tool"
- **Match types:**
  - Phrase: `Ticketmaster vs SeatGeek fees`, `Ticketmaster vs SeatGeek 2026`, `seatgeek vs ticketmaster 2026`, `which is cheaper ticketmaster or seatgeek`, `ticketmaster fees vs seatgeek fees`, `seatgeek fees explained`, `ticketmaster fees explained`, `compare ticket fees`
  - **AVOID** broad on `Ticketmaster fees` (informational-intent dominant) and `SeatGeek fees` alone.
- **Geo:** US national. Bid adjustments: NYC/LA/Chicago/Miami/Boston/Dallas +10%.
- **Device:** Desktop +10% (research-intent skews desktop on long-form content).
- **Dayparting:** Continuous, with evening (8pm-12am ET) lift.
- **LP swap on publish:** When TM-vs-SG fees blog ships, all variants in this ad route from `/compare` fallback → `/blog/ticketmaster-vs-seatgeek-fees-2026`. QS uplift expected within 7-14 days of bid traffic landing on the contextually-matched LP.

**Why this angle:** Bracketed comparison queries (X vs Y) are low-competition from a paid-bid perspective — SeatGeek/StubHub/TM don't bid on each other's brand or on "compare ticket prices" because they're positioned as marketplaces, not comparison tools. The blog framing turns research-intent into a product page CTA without violating the educational tone that wins the SERP.

**Shelf life:** Evergreen until either platform changes its fee structure significantly. Refresh the "$8 average" and "1 in 4 flips" data points quarterly.

**Refresh trigger:** Quarterly Pollstar-or-equivalent fee-math re-pull. If platform fees shift > 15%, swap new average. Annual: rebenchmark the bracketed comparison.

---

### Variation C — FIFA Fourth-Check Stability + Sample Expansion

**Google Search Ad:**
```
Headline 1: FIFA Resale More Expensive in 66%
Headline 2: 41 of 62 Group Matches, 17-Day Track
Headline 3: $94 Median Spread vs StubHub/SeatGeek
Description 1: We've now tracked FIFA's official resale marketplace against StubHub and SeatGeek for 17 days post-publication, fourth consecutive check at 66.1% (41/62 matches). FIFA-as-cheaper conventional wisdom is empirically false at this point.
Description 2: $94 median spread, fourth-check stability, sample expanded to 62 group matches. Compare every World Cup 2026 match across FIFA Resale + SeatGeek + StubHub. Free.
```

- **Final URL:** https://www.ticketscan.io/blog/fifa-resale-three-weeks-data-world-cup-2026 *(gated on publish — Day 5 unpublished as of 2026-04-27)* → falls back to https://www.ticketscan.io/world-cup-2026
- **Display path:** ticketscan.io/fifa-resale-stability
- **Sitelinks:**
  - All 16 World Cup Stadiums → /world-cup-2026
  - World Cup Final at MetLife → /world-cup-2026/metlife-stadium
  - Compare Any Match → /compare *(soft-gate caveat)*
  - How It Works → /how-it-works
- **Callouts:** "17-Day Tracking", "62-Match Sample", "$94 Median Spread", "Fourth Check"
- **Match types:**
  - Phrase: `FIFA resale marketplace`, `FIFA resale vs StubHub`, `FIFA resale expensive`, `is FIFA resale cheaper`, `FIFA official resale price`, `FIFA resale 2026`, `FIFA resale price comparison`
  - Exact: `FIFA resale Mexico` (Spanish variant), `FIFA resale Canada` (Canadian variant) — geo-split campaigns
- **Geo:** US national + Canada + Mexico (Spanish creative variants for CDMX/Guadalajara/Monterrey + US Hispanic audiences). Bid adjustments: 11 US + 2 Canada + 3 Mexico host metros +15%.
- **Device:** All. Mobile +5% (FIFA resale researchers skew mobile slightly).
- **Dayparting:** Continuous.
- **LP swap on publish:** When FIFA blog ships, all variants route from `/world-cup-2026` hub → `/blog/fifa-resale-three-weeks-data-world-cup-2026`. The blog post will display the full 62-match table; ad copy "$94 median spread" will be visible above-fold on landing.

**Why this angle:** Stability across four checks AND simultaneous sample expansion = the strongest possible structural-truth claim in the entire portfolio. "FIFA-cheaper-than-resale" is the conventional wisdom we counter; "66.1% / $94 / 17 days / 4 checks / 62 matches" is the data we counter it with. Same paid spend earns a fifth refresh week with minimal copy work.

**Shelf life:** Through World Cup kickoff (June 11, 2026 = 45 days). Refresh weekly as sample expands and fifth/sixth checks land.

**Refresh trigger:** Weekly numbers refresh. **Fifth-check threshold:** if 65-67% band holds at next check (May 4), frame upgrades to "five-check stability." If band breaks, frame shifts to "the FIFA-cheaper claim was true historically; here's what shifted."

---

### Variation D — Bruno Mars Romantic Tour Multi-Venue (Variation B Carry, LP-Gated)

**Google Search Ad:**
```
Headline 1: Bruno Mars Romantic Tour Compared
Headline 2: MetLife, Soldier Field, Ohio Stadium
Headline 3: Same Tour, Three Different Price Maps
Description 1: The Romantic Tour stops at MetLife Aug 21-25, Soldier Field May 16-17, and Ohio Stadium May 20. Same tour, same artist, three different venue economies and three different secondary-market patterns. Worth comparing all three before you commit to a date or city.
Description 2: We compare Ticketmaster, SeatGeek, and StubHub side-by-side for every Romantic Tour date in one place. Most multi-date buyers we see end up at a different platform per venue. Free, no account.
```

- **Final URL:** https://www.ticketscan.io/compare *(LP-gated until programmatic Bruno Mars Romantic Tour LP ships — SEO Day 4 of handoff)*
- **Display path:** ticketscan.io/bruno-mars-romantic-tour
- **Sitelinks:**
  - MetLife Aug 21 / 22 / 25 → /compare
  - Soldier Field May 16 / 17 → /compare
  - Ohio Stadium May 20 → /compare
  - Compare Any Event → /compare
- **Callouts:** "3 Venues, 3 Cities", "Multi-Date Comparison", "Fees Included", "Free, No Account"
- **Match types:**
  - Exact: `bruno mars romantic tour tickets`, `bruno mars metlife tickets`, `bruno mars soldier field tickets`, `bruno mars ohio stadium tickets`, `bruno mars metlife august 2026`, `bruno mars chicago may 2026`, `bruno mars columbus may 2026`
  - Phrase: `bruno mars romantic tour compare`, `bruno mars multi-date tickets`, `bruno mars romantic tour cheapest`, `bruno mars romantic tour seating`, `bruno mars metlife seating`, `bruno mars romantic tour price`, `bruno mars best venue romantic tour`
  - **AVOID** broad match on `bruno mars tickets` (cross-contaminates with the Las Vegas Park MGM residency, which sells through a different channel and isn't in our comparison set). **AVOID** `bruno mars meet and greet` / `bruno mars VIP package` (premium hospitality, typically Ticketmaster-exclusive, no comparison value).
- **Geo:** Three primary metros tied to the three venues, each with bid lift: NYC DMA + Northern NJ +25% (MetLife Aug 21/22/25). Chicago metro + IL/WI/IN +20% (Soldier Field May 16/17). Columbus + Central Ohio +20% (Ohio Stadium May 20). Secondary national +5% for travel-tour fans.
- **Device:** Mobile +10% (multi-date browse pattern lives more on mobile than single-event high-intent; comparison-shopping spans sessions). Desktop holds for the actual purchase.
- **Dayparting:** Continuous. Slight evening (7-11pm ET) and weekend lift — multi-date concert-buying decisions tend to happen during lower-pressure browsing windows.

**Launch condition:** Runs at half-budget ($4 Google) against `/compare` fallback for low-cost top-of-funnel validation only until LP ships AND cron writes for ≥7 days. **No scale-up decision on first-session metrics alone** (per Apr 25 cohort 0/2 finding — taranimeramaro's 3-MetLife-date intent did not produce a second-session return at 36h+).

**Why this angle:** The Bruno Mars cluster (6 wl / 3 watchers / 3 venues, including taranimeramaro's 3-date MetLife add) is the cleanest "TicketScan-shaped product-market fit" demand signal in the campaign portfolio. Multi-date / cross-watcher / cross-venue is the demand shape that most cleanly maps to TicketScan's value prop. **The same shape that signals product fit also signals the second-session collapse pattern** — taranimeramaro is silent at 36h+ despite the demand profile.

**Shelf life:** Through MetLife Aug 21-25 dates (116 days out). Refresh creative monthly as venues sell down. Single-venue ads (Soldier Field, Ohio Stadium) retire 1 week post-event.

**Refresh trigger:** Weekly cluster-size check. If watchlist grows beyond 6/3/3, scale budget. If cluster decays (events pass without conversion), retire single-venue ads.

---

### Variation E — Brand Defense (Insurance, Carry from Week 2)

**Google Search Ad:**
```
Headline 1: TicketScan — Official Site
Headline 2: Compare Ticket Prices Free
Headline 3: Ticketmaster + SeatGeek + StubHub
Description 1: You found us. TicketScan compares ticket prices across every major platform in one search. Free. No account needed.
Description 2: Search any concert, sport, or World Cup 2026 match. Side-by-side prices in seconds. Add events to your watchlist for free price-drop alerts (when target-price prompt ships).
```

- **Final URL:** https://www.ticketscan.io/
- **Display path:** ticketscan.io
- **Sitelinks:**
  - Compare Prices → /compare *(soft-gate caveat)*
  - World Cup 2026 → /world-cup-2026
  - How It Works → /how-it-works
  - Venue Guides → /venues
- **Callouts:** "Free Tool", "No Account Needed", "3+ Platforms", "All-In Pricing"
- **Match types:** Exact on `ticketscan`, `ticket scan`, `ticketscan.io`, `ticket scan io`, `ticketscan compare`, `ticketscan reviews`, `ticketscan login`.
- **Geo:** US + Canada national.
- **Device:** All.
- **Dayparting:** Continuous.

**Rationale:** Cheap insurance ($2/day). Prevents competitor bid-squatting on brand as our search volume grows. No CPA target — defensive. Should never exceed $2/day.

---

## Meta Ads (5 Variations)

### Variation 6 — MetLife Stadium WC Final (NEW LEAD)

```
Primary text: 83 days to the World Cup Final at MetLife Stadium. The venue page is now nine specific section groupings mapped to FIFA Categories 1 through 4, plus Coaches Club and the MetLife Suites. Soccer-config sightlines noted (which 100-level sections sit behind the goal lines for the soccer pitch vs the regular football field). Reference for what big-event resale at this stadium actually does: Taylor Swift's Eras Tour played MetLife five sold-out 2023 nights at $1,500 to $5,000+ per ticket. The World Cup Final is a once-in-a-generation North American event. Demand will make Eras Tour pricing look reasonable. Current resale floor: $150. With 83 days to go.
Headline: World Cup Final, MetLife, $150 Floor
Description: 9 sections mapped, FIFA Cat 1-4. Free.
CTA: Learn More
```

- **Landing:** https://www.ticketscan.io/world-cup-2026/metlife-stadium *(deployed)*
- **Audience:** US adults 25-55 NYC DMA + greater NJ/CT primary (NYC DMA + Long Island + Northern NJ + Westchester + CT). Soccer interest + World Cup interest + FIFA interest + MLS / Premier League / La Liga / Liga MX followers. **Eras Tour attendee lookalike** as a secondary audience — proxy for big-event-resale buyer comfort. Travel-to-sports-events behavior. **Exclude:** users under 21, "ticket broker" profession affinity, users who attended a MetLife event in last 30 days (recently-attended NFL/concert audiences not in soccer Final mode), users in the Bruno Mars audience cluster (separate variation, different price/intent stack — overlap dilutes both).
- **Placements:** Feed, Stories, Reels. Exclude Audience Network.
- **Format:** Single image (Variation 11 — MetLife 83-day countdown infographic). Reels concept on Banana MCP availability.
- **Shelf life:** Evergreen through Final week (mid-July).
- **Refresh:** Weekly numbers refresh. Monthly Eras Tour comp re-pull.

**Note:** The AggregateOffer schema upgrade that would make $150 surface as structured-data rich result is still SEO-bundle-gated (Day 11), so the user-visible page is upgraded but the SERP rich-result eligibility upgrade isn't. Today's Apr 25 cohort 0/2 second-day return finding doesn't change Variation 6 creative directly — the WC Final is a high-research, multi-week-decision-cycle purchase where users are *expected* to return multiple times before buying. With cron silent, even Variation 6's high-quality LP loses second-session value. **The launch gate moves from "MetLife page deployed → ready" (Apr 25 framing) to "MetLife page deployed AND second-session UX has price data to show → ready" (Apr 27 framing).**

---

### Variation 7 — Bruno Mars Romantic Tour Multi-Venue (Carry from Apr 26)

```
Primary text: Bruno Mars's Romantic Tour stops at three different US venues this summer: MetLife August 21, 22, and 25, Soldier Field May 16 and 17, Ohio Stadium May 20. We track every major resale platform for each date. What we usually see with multi-date tours: the same artist, the same kind of seats, the same week — completely different secondary-market patterns at each venue. MetLife and Soldier Field tend to run hot on StubHub. Ohio Stadium often skews to SeatGeek. Ticketmaster's primary fees vary 6 to 14% depending on the host. If you're picking between dates or cities, comparing each one separately is usually worth twenty minutes. We do it in one place. Free, no account.
Headline: Bruno Mars Tour, Three Venues
Description: Compare every date side-by-side. Free.
CTA: Learn More
```

- **Landing:** https://www.ticketscan.io/compare *(LP-gated until programmatic Bruno Mars Romantic Tour LP ships)*
- **Audience:** US 25-50, three geo-stacked clusters: NYC/NJ (MetLife dates), Chicago (Soldier Field dates), Columbus (Ohio Stadium date). Bruno Mars + R&B + funk + pop fan interests. Secondary lookalike on multi-date concert ticket buyers (proxy for "season" or "tour" buying behavior). Tertiary: Hooligans tour attendee lookalike (Bruno Mars's prior tour). **Exclude:** users under 21, "music industry" profession affinity, users currently in-market for the Las Vegas Park MGM residency (different product, different sales channel), and users in any Variation 6 WC Final audience set (overlap dilutes both even when the venue is the same — different intent stack).
- **Placements:** Feed, Stories, Reels. Exclude Audience Network.
- **Format:** Single image (split card showing 3 venue logos / 3 date ranges / 3 platform-winner badges).
- **Launch condition:** half-budget ($2/day Meta) until LP ships AND cron writes ≥7 days.

**Note:** Day-3 of this variant. The cluster (6 wl / 3 watchers / 3 venues) held overnight — no decay, no growth. taranimeramaro, the Apr 25 same-session activator who anchored the demand 2× ratification (3 MetLife dates), has been silent for 36+ hours. **The Apr 25 cohort 0/2 second-day return finding sharpens the launch condition for this variation specifically:** even at validated CTR + comparison-funnel completion on `/compare` fallback, the second-session math is empirically zero for the entire April cohort. **No scale-up decision should be made on first-session metrics alone.**

---

### Variation 8 — FIFA Fourth-Check Stability (Numbers-Refresh of Apr 20 Variation 7)

```
Primary text: 17 days ago we tracked FIFA's official resale marketplace against StubHub and SeatGeek across all 62 World Cup 2026 group-stage matches we could pull at the time. FIFA was more expensive in 38 of 58 matches — about 65 percent. That was the third check; we'd been tracking weekly. Today's pull: 41 of 62 matches, 66.1 percent. Median spread: $94 per ticket. Fourth consecutive check in the 65-67 percent band, sample now expanded to 62 matches as MetLife and SoFi secondary inventory came online. The "official resale is the cheap option" conventional wisdom is empirically false in roughly two-thirds of all matches we measure, and the spread is $94. Compare every match across FIFA Resale, SeatGeek, StubHub before you click "buy."
Headline: 4 Checks. 17 Days. 66.1% FIFA-Higher.
Description: Median spread: $94. Compare free.
CTA: Learn More
```

- **Landing:** https://www.ticketscan.io/world-cup-2026 *(swap to FIFA blog on publish)*
- **Audience:** Soccer/football fans 25-55, interest in FIFA / World Cup / MLS / Premier League / La Liga / Liga MX, US + Canada + Mexico (English + Spanish creative variants), travel-intent signal, mobile-first.
- **Placements:** Feed, Stories, Reels. Exclude Audience Network.
- **Format:** Single image (Variation 12 — FIFA Fourth-Check Stability infographic).
- **Refresh trigger:** Apr 22 FIFA-resale 3-week blog publishes (Day 5 unpublished as of 2026-04-27). On publish, swap landing URL to blog. Weekly numbers refresh as sample expands.

**Spanish variant (Liga MX / CDMX / GDL / MTY targeting):**
```
Primary text: Hace 17 días empezamos a comparar el mercado oficial de reventa de FIFA contra StubHub y SeatGeek en los 62 partidos de fase de grupos del Mundial 2026 que pudimos extraer ese día. FIFA salió más caro en 38 de 58 partidos — alrededor del 65%. Hoy: 41 de 62 partidos, 66.1%. Diferencia mediana: $94 USD por boleto. Cuarta verificación consecutiva en la banda 65-67%, muestra ampliada a 62 partidos. La idea de que "la reventa oficial es la opción barata" es empíricamente falsa en ~2/3 de los partidos. Compara cada partido en FIFA Resale, SeatGeek, StubHub antes de comprar.
Headline: 4 Verificaciones. 17 Días. 66.1% FIFA Más Caro.
Description: Diferencia mediana: $94 USD. Compara gratis.
```

---

### Variation 9 — NBA Round 1 G5/G6 Elimination (NEW Low-Risk Extension)

```
Primary text: Round 1 of the NBA playoffs is moving to elimination range this week. Thunder-Grizzlies, Cavs-Magic, Knicks-Pistons, Nuggets-Clippers — all in Game 5 / Game 6 territory by the weekend. Elimination-game pricing has its own pattern: lower-bowl floors hold until the morning, then crater hard if the home team is down 2-3. Upper deck stays sticky until the announcement. Tonight or tomorrow night could be the cheapest seat you'll ever see for a Game 6 in your home arena, or the most expensive — depending on which side bounces back. We compare every Round 1 G5/G6 across Ticketmaster, SeatGeek, StubHub. Free, no account, takes 10 seconds.
Headline: NBA Round 1 G5/G6 — Compared
Description: Same seat, three platforms, big gaps.
CTA: Learn More
```

- **Landing:** https://www.ticketscan.io/compare
- **Audience:** Sports fans 21-50 in NYC / OKC / Cleveland / Denver DMAs (Knicks-Pistons, Thunder-Grizzlies, Cavs-Magic, Nuggets-Clippers home metros). NBA / Knicks / Thunder / Cavs / Nuggets fan interest. Recent NBA Tickets purchase lookalike. **Exclude:** any same-day-urgency keyword cohort lookalike (the Apr 25 nmcnamee99 case is an exclusion criterion now).
- **Placements:** Feed, Stories, Reels. Exclude Audience Network.
- **Format:** Carousel — one card per series (4 cards), each showing $X-$Y range.
- **Shelf life:** 5 days (through this week's elimination games). Natural retirement at series-close.
- **Note:** Although this targets playoff games, the framing is series-level (G5/G6 elimination range), NOT same-day. Avoids the nmcnamee99 churn pattern by leaving 24-72h of decision time before tip-off. **Do NOT extend ad rotation to within 24h of any individual G5/G6 — kill the geo on game day.**

---

### Variation 10 — Pollstar Summer Concert Window (4 Days, Carry with Decrement)

```
Primary text: Pollstar Q1 2026 just put the average concert ticket at $108.63 — a five-year high. But the sharpest savings window for summer tour dates is closing. Six to eight weeks before a tour date is when inventory is deepest and platforms haven't matched each other on the same seat yet. After that the gaps converge and the math gets boring. May 1 is when most major summer tours cross the eight-week threshold and the buying-window-closes math kicks in. Billie Eilish, Kendrick Lamar, Tyler the Creator, Chappell Roan, Bruno Mars — every one of them has dates inside the next eight weeks where SeatGeek, Ticketmaster, and StubHub are still telling different stories. Four days left. Compare before the gap closes.
Headline: Summer Tour Buying Window: 4 Days
Description: Pollstar $108.63 avg. Compare before May 1.
CTA: Learn More
```

- **Landing:** https://www.ticketscan.io/compare *(LP swap to `/blog/summer-concert-tour-2026-ticket-buying-guide` if Hook 1 publishes today before kill-trigger fires)*
- **Audience:** Concert-goers 22-50, interest in touring artists (Billie Eilish, Kendrick Lamar, Tyler the Creator, Chappell Roan, Bruno Mars, Sabrina Carpenter, Morgan Wallen — broad), frequent ticket marketplace users, national US, mobile-first. Exclude: anyone who attended a concert in the last 14 days (already-bought signal).
- **Placements:** Feed, Stories, Reels. Exclude Audience Network.
- **Format:** Single image (Pollstar $108.63 anchor card per Apr 20 Variation 11 design).
- **Shelf life:** 4 days. **Hard retirement May 1.** Will not re-enter rotation until Pollstar Q2 number drops or a new evergreen anchor emerges.

---

## Display / Social Image Concepts (2 Variations)

### Variation 11 — MetLife World Cup Final 83-Day Countdown

**Copy on image:**
- Top-center (oversized, bold white): **"83"**
- Below it (smaller, same color): "DAYS TO WORLD CUP FINAL"
- Sub-label (smaller, gold accent): "MetLife Stadium · July 19, 2026"
- Second row (large): **"$150 FLOOR · 9 SECTIONS · FIFA CAT 1-4"**
- Bottom: small Eras Tour comp tag — "Eras Tour at MetLife: $1,500-$5,000+"
- Bottom-right CTA button (gold #f59e0b): **"Compare Final Tickets"**
- Logo bottom-left: ticketscan.io

**Visual direction:** World Cup green (#064e3b) background with gold accents (#f59e0b). Bold typography. Editorial / sports-documentary aesthetic. No photography — illustration + type. Shared design language with deployed `/world-cup-2026/metlife-stadium` page.

**Sizes:**
- 1080×1080 (Instagram feed)
- 1200×628 (Facebook feed, LinkedIn)
- 1080×1920 (Instagram Story / Reels cover)

**Use:** Pairs with Variation 6 (Meta MetLife). Refresh cadence: countdown number weekly, $150 floor weekly, Eras Tour comp monthly.

**Alternate creative direction (if Banana MCP comes online):** MetLife Stadium exterior at golden hour, FIFA World Cup 2026 flags visible, fans walking toward entrance with national-team jerseys (Brazil, Argentina, Mexico, France). Warm natural sunlight, shallow DOF on crowd, stadium lights just turning on. Sony A7R IV aesthetic, 24mm wide-angle at f/2.8. Sports editorial photography style.

**Reels concept (15s, MetLife-specific):**
- 0-3s: Close-up of crowd in mixed national-team jerseys, golden-hour light. Type overlay: "83 days."
- 3-7s: Wide shot of stadium with FIFA flags. Type: "World Cup Final at MetLife. July 19, 2026."
- 7-11s: Animated graphic — 9 section labels appear sequentially over a stadium silhouette. Type: "9 sections. FIFA Cat 1-4 mapped."
- 11-15s: End card with $150 floor + Eras Tour comp + CTA "Compare Final tickets free."
- Audio: ambient stadium roar, no music, single voice-over line at 7s: "We mapped them all."

---

### Variation 12 — FIFA Fourth-Check Stability Infographic

**Copy on image:**
- Top-center (large, bold white): **"66.1%"**
- Sub-label (smaller, muted gray): "FIFA RESALE > STUBHUB/SEATGEEK"
- Second row (large): **"41 / 62"**
- Sub-label: "GROUP-STAGE MATCHES, 17-DAY TRACK"
- Third row (small grid): four checkmark icons in a horizontal row, labeled:
  - "CHECK 1 · 65.5%"
  - "CHECK 2 · 65.8%"
  - "CHECK 3 · 65.5%"
  - "CHECK 4 · 66.1%"
- Bottom: **"$94 MEDIAN SPREAD"**
- Bottom-right CTA button (white): "Compare World Cup Tickets"
- Logo bottom-left: ticketscan.io

**Visual direction:** Minimal infographic card. Dark navy background (#0a1628). High-contrast white typography. Single green accent (#10b981) on the four-check stability row. No photography. Flat design. Echoes the Apr 20 Variation 11 Pollstar card aesthetic.

**Sizes:**
- 1080×1080 (Instagram feed)
- 1200×628 (Facebook feed, LinkedIn)
- 1080×1920 (Story / Reel cover)

**Use:** Pairs with Variation 8 (Meta FIFA Fourth-Check). Refresh cadence: weekly when sample expands. **Fifth-check refresh** (planned May 4): swap "4" → "5" with new percentage if 65-67% band holds.

**Spanish variant:** swap top label to "FIFA RESALE MÁS CARO QUE STUBHUB/SEATGEEK"; bottom label to "DIFERENCIA MEDIANA: $94 USD"; CTA to "Compara Boletos Mundial 2026".

---

## Testing Calendar

| Week | Test | Primary Metric | Decision Rule |
|------|------|---------------|---------------|
| 1 (Apr 30 - May 6, on launch unblock) | **Variations A + 6 (MetLife WC Final Search + Meta) at $17/day Scenario B minimum viable launch.** Hold all other variants pending bundle deploy + cron. | CTR + Quality Score + **Day-2 return rate (NEW)** | Pause if CTR < 2% after 500 imp / QS < 6 / **Day-2 return < 2% after 7 days**. |
| 2 (May 7-13) | On full launch unblock: add Variations B (TM-vs-SG, blog publish-gated), C (FIFA Fourth-Check), D (Bruno Mars half-budget), E (Brand Defense). Add Meta Variations 7-10. | CPA | Scale winners if CPA < $5. Kill if > $7 after 200 clicks. |
| 3 (May 14-20) | Headline isolation on Variation A vs A2 — "World Cup Final at MetLife — 83 Days" (control) vs. "FIFA Final, MetLife, $150 Floor" (alternate). Static (Variation 11) vs. video (Banana stadium concept) on Variation 6. | Conversion rate | Swap weakest component. Lock control creative. |
| 4 (May 21-27) | If second-session-return-rate ≥ 5% across cohort: scale top 3 variants 25%. If < 2%: **HALT all paid spend until cron writes for ≥14 days**. If 2-5%: hold spend, run new audit on what's working vs. failing. | Day-2 + Day-7 return rate | **Binary scale-or-halt decision.** |

---

## Creative Product-Truth Gates (Updated 2026-04-27)

**What paid creative MUST NOT claim until the product delivers it:**

| Claim | Why It's Banned | Re-Evaluation Gate |
|-------|----------------|---------------------|
| "Price drop alerts" (in headlines) | 85/85 null target_price. 0 alerts ever fired. | Target-price prompt ships in watchlist-add flow. |
| "Track prices every 4 hours" | Dead cron Day 20. 0 records. | Cron writes for ≥7 days. |
| "Daily price history across all platforms" | Same as above. | Same. |
| "Tickets tonight / same-day / last-minute / [event] in 2 hours / walk up" | nmcnamee99 case CLOSED today as confirmed loss. | (a) cron writes ≥7 days AND (b) same-day UX fallback ships from CRO. **Both required.** |
| "Track historical pricing / price history / best time to buy [event]" (NEW THIS WEEK) | Second-session-utility keyword class. Empty price history would replicate the nmcnamee99 case at the second-session level. | Same as cron-write gate. |

**What paid creative CAN claim (delivered today):**

| Claim | Verified Via |
|-------|--------------|
| "Compare Ticketmaster, SeatGeek, StubHub in one search" | `/compare` (note: hard-gate caveat for anonymous users — soft-gate spec is implementation-ready). |
| "Free. No account required to compare" | Unauthenticated `/api/events/compare` endpoint. |
| Specific platform spreads from same-morning data pulls | Social agent morning rotation. |
| "16 World Cup 2026 host stadiums covered" | `/world-cup-2026` + 16 stadium pages (6 with deployed content; 10 with working-tree content awaiting deploy). |
| **NEW THIS WEEK:** "MetLife Stadium World Cup Final — 9 sections, FIFA Cat 1-4, $150 floor" | Deployed `/world-cup-2026/metlife-stadium` (Apr 25, commit `2617882`). |
| **NEW:** "FIFA Resale runs more expensive in 66% of group-stage matches we measure, $94 median spread, 17-day fourth-check stability" | 17-day social tracking + (gated on publish) FIFA blog. |

---

## Launch Conditions (All Variants)

**Pre-launch gates that MUST clear before any variant goes live:**

1. **Google Ads account + GTM tracking confirmed firing** (Variation A + 6 only require this; Scenario B minimum viable launch).
2. **Meta Pixel installed + GDPR consent banner verified** (Variations 6-10 Meta require this).
3. **`/blog/ticketmaster-vs-seatgeek-fees-2026` published** (Variation B unlocks blog-anchored LP).
4. **`/blog/fifa-resale-three-weeks-data-world-cup-2026` published** (Variation C unlocks blog LP).
5. **Programmatic Bruno Mars Romantic Tour LP shipped** (Variation D + 7 unlock venue-page tier).
6. **Compare hard-gate → soft-gate shipped** (any sitelink to `/compare` becomes safe for anonymous traffic).
7. **Past-event filter shipped** (no campaign with single-event keywords goes live without it).
8. **Target-price prompt shipped** (any variant mentioning "price alerts" requires this).
9. **Price history cron writes ≥7 days** (Variations C, 8, B all reference data; cron-gated).
10. **Same-day urgency UX fallback shipped** (gates all hardened DO-NOT-BID re-evaluation).
11. **Second-session UX audit landed** (NEW THIS WEEK; gates scale-up decisions).

**Scenario B (minimum viable launch) requires only gates 1.** Variation A + 6 are LP-deployed and ready.

---

## What Changed from Apr 20 Full Refresh

| Variation | Apr 20 Status | Apr 27 Status | Change |
|-----------|---------------|---------------|--------|
| Variation 1 (Comparison Head Terms — Google Search) | NEW TOP PRIORITY | **Demoted to Tier 2 (gated on `/compare` schema deploy + soft-gate)** | `/compare` schema bundle Day 9 uncommitted; CRO Day 14 hard gate |
| Variation 2 (NBA Round 1 Evergreen — Google Search) | Active | **Replaced by NBA G5/G6 elimination Cold (Variation 9, Meta)** | Round 1 moves to elimination range this week |
| Variation 3 (World Cup 52 days + Resale +8.2% — Google) | Active | **Subsumed into MetLife WC Final lead (Variation A) + WC hub** | MetLife deploy reframes WC paid-LP hierarchy |
| Variation 4 (Summer Concert Tour — Google Search) | Active | **Demoted to Variation 10 Meta only, 4-day shelf** | Hook 1 third Monday slip; kill-trigger fires today |
| Variation 5 (Brand Defense — Google Search) | Active | **Carry as Variation E** | Unchanged |
| Variation 6 (Pollstar + Billie Eilish $65 — Meta Cold) | Cold evergreen anchor | **Subsumed into Variation 10 (Pollstar Summer 4-day window)** | Window closing |
| Variation 7 (World Cup 52 days — Meta Cold) | Active | **Replaced by Variation 6 (MetLife WC Final, Meta)** | MetLife venue-page targeting supersedes hub-tier |
| Variation 8 ($65 Billie Eilish specific — Meta Cold) | Active | **Retired** | Window expired; subsumed into Variation 10 |
| Variation 9 (Retargeting — Meta) | Pixel-blocked | **Carry as launch-ready, Pixel-gated** | Same status |
| Variation 10 (FOMO / Overpaying — Meta Cold) | Active | **Retired (2x decay; Variations 6, 8, 9 deliver more concrete frames)** | Replaced by data-anchored variants |
| Variation 11 (Pollstar Infographic) | Active | **Replaced by Variation 11 (MetLife 83-day Countdown)** | MetLife is higher LP-quality |
| Variation 12 (WC 52-day Countdown) | Active | **Replaced by Variation 12 (FIFA Fourth-Check Stability)** | Fourth-check stability is stronger structural-truth claim |
| **Variation A (NEW THIS WEEK — MetLife WC Final, Search)** | — | **NEW LEAD** | First fully-deployed paid LP in project history |
| **Variation D (NEW THIS WEEK — Bruno Mars Romantic Tour, Search)** | — | **NEW** | Cluster ratification by taranimeramaro × 3 MetLife dates |
| **Variation 6 (NEW THIS WEEK — MetLife WC Final, Meta)** | — | **NEW LEAD** | Deployed-LP cold targeting |
| **Variation 7 (NEW THIS WEEK — Bruno Mars Romantic Tour, Meta)** | — | **NEW** | Multi-venue cluster |
| **Variation 8 (NEW NUMBERS-REFRESH — FIFA Fourth-Check, Meta)** | — | **NEW** | Fourth-check stability across 17 days |
| **Variation 9 (NEW THIS WEEK — NBA G5/G6 Elimination, Meta)** | — | **NEW** | Low-risk extension of Round 1 series-level frame |

---

_Companion file: [`ads-weekly-2026-04-27.md`](../ads-weekly-2026-04-27.md). Daily creative refresh continues at 06:00 UTC._
_Next weekly creative refresh: 2026-05-04. **Variation A (MetLife WC Final) is the only launch-ready variant in the entire portfolio that does not require any further infrastructure unblock.** Scenario B at $17/day on Variation A + 6 is the cleanest single test in 20 days._
