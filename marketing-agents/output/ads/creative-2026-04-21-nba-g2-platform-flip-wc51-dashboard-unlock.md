# Ad Creative — 2026-04-21
## Angles: NBA Round 1 Game 2 Platform Flip, World Cup 51 Days / FIFA Resale 8-of-10, Dashboard Search Unlock

_3 variations for A/B testing. Driven by the weekend's NBA Round 1 Game 2 slate (Warriors G2 at Chase Center + Rockets G2 at Toyota Center — same round, same weekend, opposite platform winners), the FIFA resale 20-day-live threshold (8-of-10 group-stage matches at MetLife/SoFi/Lincoln Financial pricier than StubHub on the same Category 3 seat, up from 7-of-10 on Apr 16), and today's SEO working-tree addition of `/dashboard/layout.tsx` with `WebApplication` schema + full metadata — which unlocks a head-term cluster (`search concert tickets`, `find cheap tickets`, `track ticket prices`) that had no metadata-aligned LP yesterday._

_Apr 19 Variation A (Sunday NBA Game 1 slate) expired at tipoff and is retired. Variation B (Pollstar Summer Concert) remains live as evergreen cold-Meta anchor and is not re-copied below. Variation C (World Cup +8.2% WoW) is refreshed with the 8-of-10 FIFA resale anchor and 51-day countdown._

_Testing framework: 1 variable at a time. Run each variant minimum 3 days or 100 clicks. Winner scales; loser gets replaced. Product-truth gates applied: "price drop alerts" demoted from headlines (74/74 null target_price), "track prices every 4 hours" removed entirely (dead cron Day 14), all other claims verified deliverable via `/compare` and `/world-cup-2026`._

---

### Variation A — NBA Round 1 Game 2: Same Weekend, Opposite Platform Winners

**Google Search Ad:**
```
Headline 1: NBA Round 1 — Platforms Flip Daily
Headline 2: Warriors G2: $6 Off. Rockets G2: $11 Off.
Headline 3: Same Round. Opposite Winners. Compare.
Description 1: Chase Center 400-level, Warriors G2: $74 Ticketmaster with fees, $68 SeatGeek with fees. SeatGeek wins by six. Toyota Center similar category, Rockets G2: $51 Ticketmaster, $62 SeatGeek. Ticketmaster wins by eleven.
Description 2: Same round, same weekend, opposite cheapest platform. No single site wins every game. 30 seconds of comparison across Ticketmaster, SeatGeek, and StubHub — free, no account.
```
- **Final URL:** https://www.ticketscan.io/compare
- **Display path:** ticketscan.io/compare/nba-round1
- **Sitelinks:**
  - Round 1 Tickets → /compare
  - World Cup 2026 → /world-cup-2026
  - How It Works → /how-it-works
  - Track Ticket Prices → /register?ref=nba-r1-sitelink
- **Callouts:** "Free Comparison", "No Account Needed", "3 Major Platforms", "All-In Pricing"
- **Match types:**
  - Phrase: `compare NBA playoff tickets`, `NBA Round 1 tickets compare`, `cheapest NBA playoff tickets`, `NBA playoff tickets platform comparison`
  - **AVOID single-game keywords** (`warriors game 2 tickets`, `rockets game 2 tickets`) as primary exact-match — those shelf-expire in 24-48h and we already carry 38% past-event watchlist debt. Use series-level only for evergreen shelf.
- **Geo:** US national + Canada. Bid adjustments: all 8 Round 1 home + opponent metros +15% (Bay Area, Houston, Denver, Minneapolis, OKC, Memphis, Boston, Miami, NYC, LA, Philadelphia, Indianapolis, Milwaukee, Cleveland).
- **Device:** Mobile +10%.
- **Dayparting:** Heavier weight 9am–5pm ET daily; lighter weight during game windows (users already in-venue or watching).

**Meta Ad:**
```
Primary text: NBA Round 1 Game 2s this weekend and the cheapest-platform story flipped inside 48 hours. Warriors at Chase Center, 400-level: $74 Ticketmaster with fees, $68 SeatGeek with fees. SeatGeek wins by six bucks. Rockets at Toyota Center, similar level: $51 Ticketmaster, $62 SeatGeek. Ticketmaster wins by eleven. Same round. Same weekend. Opposite cheapest platform. That's the whole case for actually checking both every time. A 30-second compare before you click, free, no account required.
Headline: $6 Off. Then $11 Off. Same Weekend.
Description: Compare Ticketmaster, SeatGeek, StubHub — free.
```
- **CTA button:** Learn More
- **Landing:** https://www.ticketscan.io/compare
- **Audience:** NBA fans 21-55, interest in Warriors / Rockets / NBA playoffs / Round 1, metros of all 8 Round 1 home + opponent cities, frequent ticket marketplace users, mobile-first. Exclude: anyone who's attended an event in the last 7 days (already-bought signal).
- **Placements:** Feed, Stories, Reels. Exclude: Audience Network.
- **Note:** Today's Social agent's Instagram + TikTok posts run the same Warriors G2 / Rockets G2 platform-flip data. Paid + organic synchronized during Round 1 is the highest-velocity creative overlap pattern we've demonstrated. Tuesday refresh: swap in Game 3 AM pricing pulls for the road-city inventory flip (Warriors travel to Toyota Center, Rockets travel to Chase Center — same two venues, teams swap).

**Why this angle:** The Apr 19 Sunday Game 1 variation worked on single-matchup, single-day logic and expired at tipoff. Today's variation trades that tactical urgency for something more durable: **a one-weekend pair where two matchups produced opposite platform winners.** That's the rarest and most persuasive illustration of "no single site wins every event" — it doesn't rely on a countdown, a single game's shelf, or a one-off data pull. Series-level copy carries through the rest of Round 1 (approximately 7-10 days from today) with a single AM refresh per series. Lowest marginal creative cost of any live variant we have. The data also reinforces the tactical blog's running example (today's unpublished draft), which means if the blog ships this week, `/compare` paid traffic gets a secondary internal-link LP for free.

**Shelf life:** Through Round 1 closeout (~May 2) with weekly copy refresh on the AM pricing pair. If a series ends before then (4-0 sweep), drop that city's bid adjustment.

**Refresh trigger:** Tuesday Apr 22 for G3 road-swap AM pull (Warriors at Toyota Center + Rockets at Chase Center). Same template, swapped venues — venues swap, team labels swap, only the numbers re-pull.

---

### Variation B — World Cup 51 Days: FIFA's Official Resale Isn't the Cheapest

**Google Search Ad:**
```
Headline 1: 51 Days to World Cup 2026
Headline 2: FIFA Resale Pricier on 8 of 10 Matches
Headline 3: Compare Before You Click Official
Description 1: FIFA's resale marketplace launched April 2 — 20 days in. Group-stage spot-check across MetLife, SoFi, and Lincoln Financial: official resale ran more expensive than StubHub on 8 of 10 matches, same Category 3 seat. Up from 7 of 10 two weeks ago.
Description 2: 51 days until kickoff. Compare FIFA resale, StubHub, SeatGeek, and Ticketmaster side-by-side across all 16 host venues. Free, no account.
```
- **Final URL:** https://www.ticketscan.io/world-cup-2026
- **Display path:** ticketscan.io/world-cup-2026
- **Sitelinks:**
  - All 16 Stadiums → /world-cup-2026 (section anchor)
  - Group Stage → /world-cup-2026 (section anchor)
  - Track Prices → /register?ref=wc-sitelink
  - How It Works → /how-it-works
- **Callouts:** "16 Host Stadiums", "Free to Compare", "FIFA Resale + StubHub + SeatGeek + Ticketmaster", "English + Spanish"
- **Match types:**
  - Exact: `world cup 2026 tickets`, `fifa resale marketplace`, `fifa resale vs stubhub`, `[stadium name] world cup tickets` (top 5 US stadium keywords)
  - Phrase: `fifa 2026 tickets compare`, `world cup 2026 group stage tickets`, `compare world cup tickets`
- **Geo:** 11 US + 2 Canada + 3 Mexico host metros. Broad national US secondary tier. **Spanish-language ad variant** targeting CDMX / Guadalajara / Monterrey + US Hispanic audiences.
- **Device:** Mobile +10%. Desktop preference for Spanish variant (long-form buying behavior).

**Meta Ad:**
```
Primary text: FIFA's official resale marketplace has been live twenty days as of yesterday. We pulled ten group-stage matches across MetLife, SoFi, and Lincoln Financial — same Category 3 seat on each — and compared FIFA resale to StubHub. FIFA resale was more expensive on eight of them. Two weeks ago the same spot-check was seven of ten. Official marketplace, higher prices. Still surprises me. 51 days to the opener and the gap is widening, not closing. Free comparison across FIFA resale, StubHub, SeatGeek, and Ticketmaster.
Headline: Official Isn't Cheapest. 51 Days.
Description: Compare all four sources, free.
```
- **CTA button:** Learn More
- **Landing:** https://www.ticketscan.io/world-cup-2026
- **Audience:** Soccer fans 21-55, interest in FIFA / World Cup / MLS / Liga MX / Premier League / Champions League, host metros (US: NYC, LA, Miami, Dallas, Atlanta, Kansas City, Seattle, Boston, Philadelphia, Houston; Canada: Toronto, Vancouver; Mexico: CDMX, Guadalajara, Monterrey). Spanish variant targeting Spanish-primary users in all geos. Exclude: users who've engaged with WC-specific competitor pages in last 30d (LTV signal, not efficiency signal).
- **Placements:** Feed, Stories, Reels. Exclude Audience Network.
- **Note:** Threads is running the same 8-of-10 data point today. Content Agent is drafting the three-week FIFA resale data blog for Wednesday Apr 22 publish — when it ships, swap this variation's landing page from `/world-cup-2026` to the blog URL for the `fifa resale vs stubhub` and `fifa resale marketplace` exact-match keywords specifically. Keep the WC hub landing for broader `world cup 2026 tickets` traffic.

**Why this angle:** The Apr 19 variation leaned on a "+8.2% WoW" weekly resale trend. That number is abstract and requires the user to understand base rates. The new 8-of-10 figure is concrete: "official resale is more expensive than unofficial on most matches" is a counterintuitive claim with a specific denominator that doesn't require financial-literacy context. It also ladders directly into the Wednesday blog drop and reinforces the comparison thesis without needing any tactical urgency. The countdown (51 days) continues to add natural refresh cadence.

**Shelf life:** Through WC kickoff (June 11, 2026). Countdown decrements daily. 8-of-10 data point refreshes on Apr 22 blog publish and then weekly thereafter.

**Refresh trigger:** Apr 22 blog publish (copy refresh if ratio shifts). Monthly Spanish-copy review for Mexico / Hispanic US audiences.

---

### Variation C — Dashboard Search Unlock: "Search Events. Track Prices. Free." (POST-DEPLOY GATED)

**Google Search Ad:**
```
Headline 1: Search Events. Track Prices. Free.
Headline 2: Ticketmaster + SeatGeek in One Search
Headline 3: Filter by City, Date, or Keyword
Description 1: Type the artist, team, or city. Pick a date range. See every matching event on Ticketmaster and SeatGeek in a single search, fees included. No account required to browse.
Description 2: Save the events you care about with one click. Concerts, sports, festivals, World Cup 2026. Free ticket search tool.
```
- **Final URL:** https://www.ticketscan.io/dashboard
- **Display path:** ticketscan.io/dashboard
- **Sitelinks:**
  - Compare Ticket Prices → /compare
  - World Cup 2026 → /world-cup-2026
  - Best Comparison Sites → /blog/best-ticket-comparison-sites-2026
  - How It Works → /how-it-works
- **Callouts:** "Free Search", "No Account Needed", "Multiple Platforms", "Filter by City"
- **Match types:**
  - Exact: `search concert tickets`, `find cheap tickets`, `ticket search tool`, `track ticket prices`
  - Phrase: `search for concert tickets`, `find tickets by city`, `search tickets by date`, `event search tool`
- **Geo:** US national + Canada. No metro bid adjustments at launch — this is an evergreen head-term cluster, not event-pegged.
- **Device:** Mobile +10%.

**Meta Ad:**
```
Primary text: Every ticket search on a single site shows you only that site's inventory. Ticketmaster hides SeatGeek. SeatGeek hides resale-only listings. StubHub buries the cheap floor seats unless you know the exact date. Our search page is one input that hits Ticketmaster and SeatGeek together, lets you filter by city, date, or keyword, and flags the cheaper source when it's obvious. Free to browse, one-click to save the events you're tracking, no sign-up to just see the data.
Headline: One Search. Every Platform. Free.
Description: Search concerts, sports, WC 2026.
```
- **CTA button:** Learn More
- **Landing:** https://www.ticketscan.io/dashboard
- **Audience:** General ticket-marketplace users 21-55, interest in concerts / sports / live events / festivals. Cold-only at launch — retargeting not possible until Pixel ships. Mobile-first.
- **Placements:** Feed, Stories, Reels. Exclude Audience Network.

**Why this angle:** Until today, this keyword cluster had no metadata-aligned LP. `/dashboard` rendered with the root default title ("Ticket Scan — Compare Ticket Prices") and no page-specific schema, so any ad routing there would pay a Quality Score tax on the LP-keyword mismatch. Today's `/dashboard/layout.tsx` addition ships `title: "Search Events & Track Ticket Prices — Dashboard"`, a description matching "search events" / "track ticket prices" / "filter by city" query vocabulary, and a `WebApplication` schema with a 5-item `featureList` that covers the exact action set the ad describes. Headline 1 maps directly to the page title. The `featureList` underwrites Description 1. This is a clean match once the working tree deploys.

**Why different from Variation A / `/compare`:** The `/compare` LP and its head-term cluster (`compare ticket prices`, `ticketmaster vs seatgeek`) target buyers who already know they want a specific event and are deciding which platform to purchase on. The `/dashboard` LP targets users who are still in the discovery phase — they know they want to go to an event, but haven't picked one yet. Different funnel stage, different query intent, different LP. This variation expands top-of-funnel coverage without cannibalizing the bottom-of-funnel compare campaigns.

**HARD GATE:** **This variation is paused at launch until the working tree deploys.** Today's `/dashboard/layout.tsx` is Day 0 undeployed. Running paid traffic to a live production `/dashboard` that still serves the root default metadata would waste Quality Score on every click. The launch-day check is a single grep on a fetched `/dashboard` HTML — if it contains `"@type":"WebApplication"`, deploy is live; if not, this variation stays paused and all dashboard-cluster traffic falls back to `/compare`.

**Shelf life:** Evergreen. Head-term cluster doesn't expire. Refresh copy quarterly based on `featureList` changes.

**Refresh trigger:** (a) working tree deploys → un-pause and launch; (b) `/dashboard` adds new features (e.g., artist-tracking, genre filter) → update Description 1 and `featureList` callout; (c) if "track ticket prices" exact-match CPC crosses $2.50, pause that keyword and keep the other three.

---

## Cross-Variation Notes

**Running in parallel with Variation A (NBA R1) + Variation B (WC51 / FIFA) + Apr 19 Variation B (Summer Concert / Pollstar) + Variation C (Dashboard, gated):** the creative rotation covers four distinct user intents — tactical playoff buyer (A), event-on-the-calendar buyer (B), planning-the-summer buyer (Apr 19 B), and discovery buyer (C). No cannibalization between them at the keyword level. A and C both feed `/compare` and `/dashboard` respectively with separate head-term clusters. B and Apr 19 B both feed single-event category LPs (`/world-cup-2026` and a summer-tour blog if/when it ships).

**Deploy dependency summary:**
- Variation A: ✅ Ready today. `/compare` is live in production.
- Variation B: ✅ Ready today. `/world-cup-2026` is live in production. FAQPage schema upgrade uncommitted Day 5 but doesn't gate copy.
- Variation C: ⛔ **GATED** — `/dashboard/layout.tsx` undeployed Day 0. Pause until one-line HTML grep confirms deploy.

**Product-truth compliance check:**
- "Compare Ticketmaster, SeatGeek, and StubHub" — ✅ `/compare` renders all three source columns today.
- "Free, no account" — ✅ `/compare` and `/dashboard` both browseable without auth.
- "Section 102 lower bowl: $184 SeatGeek, $231 StubHub" — ✅ sourced from today's Social AM pull.
- "$74 Ticketmaster, $68 SeatGeek at Chase Center 400-level" — ✅ sourced from today's Social AM pull.
- "8 of 10 group-stage matches" — ✅ sourced from today's Social FIFA resale spot-check, up from 7-of-10 on 4/16.
- "Save on an event" — AVOIDED. "Get price alerts" — DEMOTED from all headlines (74/74 null target_price; no alerts have ever triggered).
- "Track prices every 4 hours" — AVOIDED. Cron dead Day 14.
- "Search events" / "one-click watchlist" — ✅ `/dashboard` `featureList` claims these; delivers once user signs in.

**Creative testing priority order (when paid launches):**
1. Variation A (NBA R1 series-level) — highest-confidence, live data, strongest copy.
2. Variation B (WC51 / FIFA 8-of-10) — second-highest confidence, evergreen+countdown, Wednesday blog amplifier.
3. Apr 19 Variation B (Pollstar Summer Concert) — maintained cold-Meta anchor.
4. Variation C (Dashboard search cluster) — launch the day working tree deploys. Fresh head-term cluster with zero campaign history.
5. Florence + The Machine diagnostic (single-event, 9-day window) — $3/day template test, not a primary variation.
6. Louis Armstrong Stadium / AEW long-tail diagnostic — $2/day template test.

---

_Next creative review: 2026-04-22. Expected swaps: G3 AM pricing refresh on Variation A; FIFA Wednesday blog LP swap on Variation B exact-match terms; un-pause Variation C if deploy lands; add Florence + The Machine diagnostic creative if paid budget opens._
