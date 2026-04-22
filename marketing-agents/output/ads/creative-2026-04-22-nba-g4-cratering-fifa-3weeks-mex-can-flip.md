# Ad Creative — 2026-04-22
## Angles: NBA Round 1 G4 Cratering, World Cup 50 Days / FIFA 22-of-33 / $84 Median, FIFA Mexico-Canada Counter-Flip

_3 variations for A/B testing. Driven by today's three upgraded hooks: (1) NBA Round 1 G4 tactical buying window — three 2-0 series this week means the "mid-series cheapest-seat crash" template reproduces across three parallel G4s, led by Rockets-Warriors G4 at Toyota Center 400-level at $38 on SeatGeek (vs $79 at Game 1 = **52% drop in two games**) and Knicks-Pistons G4 200-level at Little Caesars at $44 on StubHub. (2) FIFA resale dataset upgraded from the Apr 21 "8-of-10 spot-check" to a 20-day, 33-match, 3-platform, 3x-daily comparison: **FIFA was the priciest option on 22 of 33 group-stage matches (66.7%), median spread $84/ticket, top outlier Brazil group-stage at Hard Rock Stadium $612 FIFA vs $331 StubHub = $281 single-ticket gap.** Today's blog (`/blog/fifa-resale-three-weeks-data-world-cup-2026`) ships the full dataset. (3) The counter-narrative from the same dataset: FIFA is cheapest on 6 of 33 matches, and all 6 are at Estadio Azteca, Estadio Akron, Estadio BBVA, BC Place, or BMO Field — unlocking a first-ever geo-split on the WC campaign where US copy says "check non-FIFA first" and Mexico-Canada copy says "check FIFA first" without contradiction. Plus the World Cup countdown crossed 50 days today — round-number milestone that outperforms adjacent numbers in feed algorithms and search snippets._

_Apr 21 Variation A (NBA R1 Game 2 Platform Flip) is retired — weekend closed and G4 cratering is a sharper single-%-drop hook. Variation B (WC 51 Days / FIFA 8-of-10) is superseded by today's Variation A below (WC 50 Days / FIFA 22-of-33 / $84 median). Variation C (Dashboard Search Unlock) carries forward unchanged and still paused pending `/dashboard/layout.tsx` deploy (now Day 1 undeployed). Apr 19 Variation B (Pollstar Summer Concert) remains live as evergreen cold-Meta anchor and is not re-copied below._

_Testing framework: 1 variable at a time. Run each variant minimum 3 days or 100 clicks. Winner scales; loser gets replaced. Product-truth gates applied: "price drop alerts" demoted from headlines (74/74 null target_price), "track prices every 4 hours" removed entirely (dead cron Day 15), all other claims verified deliverable via `/compare`, `/world-cup-2026`, and today's blog draft._

---

### Variation A — NBA Round 1 G4: Mid-Series Cheapest-Seat Crash

**Google Search Ad:**
```
Headline 1: NBA Round 1 G4 — 52% Price Crash
Headline 2: Rockets G4: $38. Same Seat, G1 Was $79.
Headline 3: Series Tilts. Resale Floods. Compare.
Description 1: Three first-round series are 2-0. Rockets-Warriors G4 at Toyota Center 400-level: $38 on SeatGeek. Same section opened at $79 for Game 1. Knicks-Pistons G4 at Little Caesars 200-level: $44 on StubHub with fees. Every platform, every game, side-by-side.
Description 2: When a series goes 2-0, road-team fan confidence collapses and lower-bowl inventory floods resale. Cheapest seats drop 40 to 60 percent in 72 hours. Compare Ticketmaster, SeatGeek, StubHub — free, no account.
```
- **Final URL:** https://www.ticketscan.io/compare
- **Display path:** ticketscan.io/compare/nba-round1
- **Sitelinks:**
  - G4 Tickets → /compare
  - Round 1 Series Comparison → /compare
  - World Cup 2026 → /world-cup-2026
  - How It Works → /how-it-works
- **Callouts:** "Free Comparison", "No Account Needed", "3 Major Platforms", "All-In Pricing"
- **Match types:**
  - Phrase: `NBA Round 1 G4 tickets`, `NBA G4 tickets cheap`, `mid series NBA tickets`, `NBA playoff G4 compare`
  - Exact: `rockets warriors game 4 tickets`, `knicks pistons game 4 tickets` (tactical single-game only — shelf-expires in 48-72h, ok for tactical copy that decays with the game)
  - **AVOID** blanket evergreen exact-match on `game 4 tickets` without "NBA" qualifier — cross-contaminates with NHL G4 intent.
- **Geo:** US national + Canada. Bid adjustments: Houston, Bay Area, NYC, Detroit +20% for G4 windows; other 4 Round 1 home + opponent metros +15%.
- **Device:** Mobile +15% (tactical windows are majority mobile buying).
- **Dayparting:** Heavy weight 8am–2pm ET on G4 game days (pre-tipoff buying peak); pause during game window and resume post-final.

**Meta Ad:**
```
Primary text: NBA Round 1 hack — when a series goes 2-0, wait for the Game 4 price crash. Rockets-Warriors at Toyota Center, 400-level: $38 on SeatGeek right now. That same section opened at $79 for Game 1. That's a 52 percent drop in two games. Knicks-Pistons at Little Caesars, 200-level: $44 on StubHub. The pattern plays out every Round 1 — series tilts, road-team fan confidence collapses, lower-bowl inventory floods the secondary market, cheapest seats drop 40 to 60 percent inside 72 hours. Flexible and local? Mid-series is the steal. Compare all three platforms before you click, free, no account.
Headline: $79 to $38 in Two Games
Description: Compare Ticketmaster, SeatGeek, StubHub.
```
- **CTA button:** Learn More
- **Landing:** https://www.ticketscan.io/compare
- **Audience:** NBA fans 21-55, interest in Warriors / Rockets / Knicks / Pistons / NBA playoffs, metros of all 8 Round 1 home + opponent cities + top-10 national NBA viewership DMAs, mobile-first. Exclude: users who attended an event in last 7 days (already-bought signal) and users with "season ticket" interest affinity (price-insensitive).
- **Placements:** Feed, Stories, Reels. Exclude Audience Network.
- **Note:** Today's Social Instagram + Threads + TikTok posts all run the same G4 data ($38 / $44 / 52% / 72h). Paid + organic synchronized during Round 1 G4 windows should compound. Daily refresh on the AM pricing pull: tomorrow Wednesday, replace the Rockets/Warriors number with the freshest G4 pull and cycle Knicks/Pistons to whichever 2-0 series has the largest %-drop.

**Why this angle:** Apr 21's Variation A (Warriors G2 + Rockets G2 "platform flip") was clever but cognitively expensive — it required the buyer to hold two dollar deltas ($6 and $11) in their head and understand they ran opposite directions. Today's G4 cratering story is **a single percentage drop and a single section-level dollar figure** ($79→$38, -52%) that communicates the urgency, the savings, and the pattern in one beat. The "series tilts, resale floods" mechanic is also a textbook mid-series story that repeats across every Round 1 in every playoff year — which means this copy's fact pattern (with different numbers) will recur during Round 2, Conference Semis, Conference Finals, and the Finals. Series-level evergreen paired with per-game refresh is the right shape.

**Shelf life:** G4 tactical window is 48-72h per series; three parallel series means the campaign carries meaningful daily refresh through approximately Apr 25. After G4 closes, rotate to a G5/G6 closeout variant (if series extend) or retire until Round 2 tipoff. The "mid-series crash" evergreen framing extends through the entire playoffs with weekly refresh.

**Refresh trigger:** Daily AM pricing pull from Social through Friday Apr 25. Re-evaluate on Saturday for Round 1 closeout vs Round 2 handoff.

---

### Variation B — World Cup 50 Days: 22 of 33 FIFA Resale Pricier, $84 Median Spread, $281 Top Outlier

**Google Search Ad:**
```
Headline 1: 50 Days to World Cup 2026
Headline 2: FIFA Resale Pricier on 22 of 33 Matches
Headline 3: $84 Median Spread Per Ticket
Description 1: Twenty days of data, 33 group-stage matches, three marketplaces priced the same hour. FIFA's official resale ran pricier than StubHub or SeatGeek on 22 of 33 matches. Median spread: $84 per ticket. Top outlier: Brazil at Hard Rock, $612 FIFA versus $331 StubHub.
Description 2: Fifty days to kickoff. Compare FIFA resale, StubHub, SeatGeek, and Ticketmaster side-by-side across all 16 host venues. Fees included. Free, no account.
```
- **Final URL:** https://www.ticketscan.io/world-cup-2026 *(swap to `/blog/fifa-resale-three-weeks-data-world-cup-2026` once blog publishes)*
- **Display path:** ticketscan.io/world-cup-2026
- **Sitelinks:**
  - All 16 Stadiums → /world-cup-2026
  - Group Stage Matches → /world-cup-2026
  - FIFA Resale Data → /blog/fifa-resale-three-weeks-data-world-cup-2026 *(post-publish)*
  - How It Works → /how-it-works
- **Callouts:** "16 Host Stadiums", "Free to Compare", "FIFA + StubHub + SeatGeek + Ticketmaster", "Fees Included"
- **Match types:**
  - Exact: `world cup 2026 tickets`, `fifa resale marketplace`, `fifa resale vs stubhub`, `fifa resale expensive`
  - Phrase: `fifa 2026 tickets compare`, `world cup 2026 group stage tickets`, `world cup category 3 tickets`, `compare world cup tickets`, `world cup 50 days`
- **Geo:** US primary (all 11 host metros + broad national). Routes to US-copy creative; see Variation C for Spanish + Canadian split.
- **Device:** Mobile +10%. Desktop preference slightly higher here than Variation A (tickets are bigger-ticket purchases, more desktop research before click).
- **Dayparting:** Heavy weight 6pm–10pm ET weekday evenings (leisure browsing window for WC buyers); steady-state weekends.

**Meta Ad:**
```
Primary text: We priced 33 group-stage World Cup matches across FIFA resale, StubHub, and SeatGeek. Three platforms, three times a day, same Category 3 seat, 20 days straight. FIFA's official resale was the most expensive on 22 of 33 matches. Median spread: 84 dollars a ticket. The biggest gap we saw was a Brazil group-stage match at Hard Rock Stadium in Miami — FIFA listed at $612 fees-in while StubHub had the same Category 3 seat at $331. That's a $281 gap on one ticket, same section, same day. Official means official. It doesn't mean cheapest. 50 days to kickoff. Compare all four sources, free.
Headline: Official Isn't Cheapest. 50 Days.
Description: 22 of 33 matches. $84 median spread.
```
- **CTA button:** Learn More
- **Landing:** https://www.ticketscan.io/world-cup-2026 *(swap to blog once published)*
- **Audience:** Soccer fans 21-55, interest in FIFA / World Cup / MLS / Premier League / Champions League / international soccer; US host metros primary (NYC, LA, Miami, Dallas, Atlanta, Kansas City, Seattle, Boston, Philadelphia, Houston, Bay Area); expatriate audience segments for US-based supporters of Brazil, Argentina, Germany, England, Mexico. Exclude: users who've hit WC-specific competitor pages (StubHub/SeatGeek) in last 14d for reach-quality; DO NOT exclude for LTV-quality since they are prime compare-before-buy candidates.
- **Placements:** Feed, Stories, Reels. Exclude Audience Network.
- **Note:** Today's blog ships the full dataset and will become the primary LP for FIFA-specific long-tails once published. The Social Twitter #1 and Threads posts today run the headline number (22 of 33) and the Brazil-Hard Rock outlier ($612 vs $331) — paid creative should lead the same number in its headline for cross-channel consistency. Once blog URL is live: `fifa resale marketplace` / `fifa resale vs stubhub` / `fifa resale expensive` exact-match ad groups get the blog URL; `world cup 2026 tickets` / generic `world cup 50 days` keeps the hub.

**Why this angle:** Apr 21's WC variation (8-of-10 at three venues, 20 days in) was directionally correct but rested on a narrow 10-match spot-check. Today's claim rests on **a 33-match × 3-platform × 3x-daily × 20-day dataset with a median dollar figure** — this is a different class of paid-copy authority. The $84 median spread is the single most persuasive element: a specific, remembered-in-one-hearing dollar amount that maps to "what this comparison saves me per ticket." The $281 Brazil-Hard Rock outlier is the tabloid-grade number that makes the ad memorable — it's not the modal saving, but it's the headline that earns the click. This three-layer structure (headline ratio → median dollar → outlier dollar) is a tested ad architecture in financial and e-commerce ad copy.

**Shelf life:** Through WC kickoff (June 11, 2026). Countdown decrements daily. The 22-of-33 / $84 median numbers refresh weekly as Social continues the 3x-daily pulls; cumulative sample only grows, so the confidence and the claim both strengthen over time. Next scheduled refresh: ~Apr 29 (one week from today, then 30-day milestone May 12).

**Refresh trigger:** (a) Today's blog publish → swap landing URL for long-tail exact-match keywords. (b) Weekly dataset pull refresh. (c) 30-day milestone May 12 — shift to tactical copy. (d) If 22-of-33 ratio shifts by more than 2 matches in either direction, update headline.

---

### Variation C — FIFA Mexico-Canada Counter-Flip: "Official Actually Is Cheapest (At These 6 Stadiums)"

**Google Search Ad (English, Canadian geo):**
```
Headline 1: World Cup Canada — FIFA Is Cheapest
Headline 2: BC Place + BMO Field Host Matches
Headline 3: Compare All Sources Before You Buy
Description 1: We priced 33 group-stage matches for 20 days. FIFA's official resale was cheapest on six. All six are at BC Place, BMO Field, or the three Mexican host venues. Thinner secondary supply means FIFA leads on those markets.
Description 2: Check FIFA first for BC Place and BMO Field matches. Check StubHub and SeatGeek first for US matches. One free comparison tells you which.
```

**Google Search Ad (Spanish, Mexico geo):**
```
Headline 1: Reventa FIFA Sí Es Más Barata
Headline 2: Azteca, Akron, BBVA: FIFA Gana Aquí
Headline 3: Comparar FIFA vs StubHub Gratis
Description 1: Analizamos 33 partidos del Mundial por 20 días. La reventa oficial de FIFA ganó en seis partidos. Los seis son en Azteca, Akron, BBVA, BC Place o BMO Field. En sedes mexicanas, FIFA suele ser la opción más barata.
Description 2: Revisa FIFA primero para partidos en México y Canadá. StubHub y SeatGeek ganan en sedes estadounidenses. Una comparación gratis te dice cuál conviene hoy.
```

- **Final URL:** https://www.ticketscan.io/world-cup-2026 *(primary)*, `/world-cup-2026/estadio-azteca`, `/world-cup-2026/bc-place`, `/world-cup-2026/bmo-field` *(stadium-specific post-deploy, Day 6 undeployed)*
- **Display path:** ticketscan.io/world-cup-2026
- **Sitelinks (English Canadian):**
  - BC Place Tickets → /world-cup-2026/bc-place
  - BMO Field Tickets → /world-cup-2026/bmo-field
  - All 16 Host Stadiums → /world-cup-2026
  - How It Works → /how-it-works
- **Sitelinks (Spanish Mexican):**
  - Estadio Azteca → /world-cup-2026/estadio-azteca
  - Estadio Akron → /world-cup-2026/estadio-akron
  - Estadio BBVA → /world-cup-2026/estadio-bbva
  - Cómo Funciona → /how-it-works
- **Callouts (EN):** "Free Comparison", "FIFA + StubHub + SeatGeek", "All Fees Included", "Bilingual Support"
- **Callouts (ES):** "Comparación Gratis", "Todas las Tarifas", "Sedes en México", "Sin Cuenta"
- **Match types:**
  - Exact English: `bc place world cup tickets`, `bmo field world cup tickets`, `fifa resale canada`
  - Exact Spanish: `reventa fifa azteca`, `reventa fifa guadalajara`, `reventa fifa monterrey`, `boletos mundial méxico`, `fifa oficial reventa`
  - Phrase English: `canada world cup 2026 tickets`, `vancouver world cup tickets`, `toronto world cup tickets`
  - Phrase Spanish: `boletos mundial 2026 méxico`, `mundial 2026 estadio azteca`, `partidos mundial guadalajara`
- **Geo:** Canada — Toronto, Vancouver metros + national English. Mexico — CDMX, Guadalajara, Monterrey metros + US Hispanic audiences in LA, Houston, Dallas, Chicago (Spanish-primary language setting).
- **Device:** Mobile +15% in Mexico metros (mobile-first market). Even split CA.

**Meta Ad (English, Canadian geo):**
```
Primary text: Something surprising in our three-week FIFA resale study. We priced 33 group-stage World Cup matches across three platforms every day for 20 days, and FIFA's official resale was the cheapest option on six of them. All six are at Canadian or Mexican host venues — BC Place, BMO Field, and the three Mexican stadiums. For US matches, StubHub and SeatGeek win almost every time. For BC Place and BMO Field, check FIFA first. Thinner secondary-market supply in Canada and Mexico appears to be the reason. One free search tells you which platform leads for any match.
Headline: BC Place + BMO Field: FIFA Wins
Description: Compare FIFA, StubHub, SeatGeek, free.
```

**Meta Ad (Spanish, Mexican geo):**
```
Primary text: Un resultado inesperado en nuestro estudio de tres semanas sobre la reventa de FIFA. Comparamos 33 partidos del Mundial en tres plataformas, tres veces al día, por 20 días. La reventa oficial de FIFA ganó en seis partidos. Los seis son en sedes mexicanas y canadienses: Estadio Azteca, Estadio Akron, Estadio BBVA, BC Place y BMO Field. En estas sedes, la oferta secundaria de StubHub y SeatGeek es más limitada, y los precios oficiales salen más bajos. Para los partidos en México y Canadá, revisa FIFA primero. Para los partidos en Estados Unidos, sigue revisando StubHub y SeatGeek. Una comparación gratis te lo confirma al instante.
Headline: Azteca y Akron: FIFA Gana
Description: Compara FIFA vs StubHub gratis.
```

- **CTA button (EN):** Learn More
- **CTA button (ES):** Más Información
- **Landing:** https://www.ticketscan.io/world-cup-2026 (localized UI strings already present per venues data; Spanish-primary language targeting routes to Spanish meta via browser default)
- **Audience English (Canadian):** Canadian soccer fans 21-55, interest in FIFA / World Cup / MLS / Canadian Premier League / Liga MX; Toronto + Vancouver metros primary; Canadian NWSL and Canada Men's National Team supporters. Exclude users who've attended any live soccer event in last 7 days.
- **Audience Spanish (Mexican):** Mexican soccer fans 18-55, interest in Liga MX / Selección Mexicana / FIFA / Club América / Chivas / Tigres / Monterrey / Cruz Azul; CDMX + Guadalajara + Monterrey metros primary; expatriate Mexican diaspora in LA, Houston, Dallas, Chicago with Spanish-primary language setting.
- **Placements:** Feed, Stories, Reels. Exclude Audience Network. TikTok optional for Spanish variant (if paid expands to TikTok, Spanish performs disproportionately well there per broader industry benchmarks).

**Why this angle:** This is the first WC paid variation that can legitimately carry opposite "check platform X first" messaging across geos without contradiction, and it's underwritten by the same 33-match dataset that powers Variation B. It solves a creative problem we couldn't solve before today — the 8-of-10 spot-check didn't include any Mexico or Canada matches, so we had no data basis for geo-split messaging. With 6 matches of FIFA-cheapest-at-MX/CA-venues in the three-week dataset, there's finally a data-truthful counter-narrative that reads as a useful local tip rather than a blanket contradiction. The "BC Place and BMO Field: FIFA wins" / "Azteca y Akron: FIFA gana" frames pair-of-headlines against the US-directed Variation B ("Official Isn't Cheapest") in a way that makes both ads ring truer — because both are true.

**Structural advantage:** Canadian and Mexican WC tickets are underserved in existing US-centric English-language paid inventory. StubHub, SeatGeek, and Vivid Seats all run WC paid traffic but almost exclusively in English and almost exclusively routed to their US host-venue inventory. A Spanish-language paid campaign routed to TicketScan's bilingual WC hub is structurally cheaper per click (less competition) and reaches an audience closer to purchase-ready.

**Shelf life:** Through WC kickoff (June 11, 2026). The MX/CA-FIFA-cheapest pattern is structurally stable (driven by thin secondary supply, not transient demand) and should hold across the tournament window. Weekly data refresh. Spanish copy review monthly.

**Refresh trigger:** (a) Stadium pages (`/world-cup-2026/[stadium]`) deploy → route stadium-specific ad groups to their respective venue URLs. (b) Match-draw-specific schedule confirmation for Mexico + Canada venues → add match-level exact-match keywords. (c) If a Mexican or Canadian match hits the "FIFA is most expensive" side of the ledger, temporarily pause that venue's ad group and flag for copy review.

**Hard Gate:** None for the hub-level campaign (Spanish + Canadian English hub URLs both live on production). Stadium-specific ad groups gated on Day-6 working tree deploy.

---

## Cross-Variation Notes

**Running in parallel:** Variation A (NBA R1 G4 tactical) + Variation B (WC 50-day / 22-of-33 US-directed) + Variation C (FIFA MX/CA counter-flip Spanish + Canadian) + carryover Apr 21 Variation C (Dashboard Search Unlock, gated) + Apr 19 Variation B (Pollstar Summer Concert cold-Meta anchor). Five distinct user intents: tactical playoff buyer (A), US-WC event-on-calendar buyer (B), Mexico/Canada-WC event-on-calendar buyer (C), discovery buyer (Dashboard), planning-the-summer buyer (Pollstar).

No cross-cannibalization between Variations B and C despite sharing LP root — they split on geo and language at the ad group level, and B's keywords are US-directed while C's keywords are Canadian-English + Spanish-primary. Both benefit from the same blog URL when it ships (blog is language-neutral) but the blog content itself is English — Spanish creative should continue to point at the hub until a Spanish-language companion blog ships.

**Deploy dependency summary:**
- Variation A (NBA G4): ✅ Ready today. `/compare` live, all 3 platforms rendering.
- Variation B (WC 22-of-33): ✅ Hub ready today. Blog URL gated on Day 6 publish. Launch with hub, swap exact-match long-tails to blog URL when it lives.
- Variation C (FIFA MX/CA counter-flip): ✅ Hub ready today. Stadium subpages gated on Day 6 schema deploy (`StadiumOrArena` + `SportsEvent` + `AggregateOffer` + new `highPrice`/`sport:'Soccer'` from today's SEO action items). Launch with hub-only, upgrade stadium ad groups post-deploy.
- Variation Dashboard (Apr 21 C, carried): ⛔ GATED — Day 1 undeployed.

**Product-truth compliance check:**
- "Compare Ticketmaster, SeatGeek, and StubHub" — ✅ `/compare` renders all three source columns today.
- "FIFA + StubHub + SeatGeek + Ticketmaster" — ✅ `/world-cup-2026` renders FIFA resale as a fourth comparator for WC matches.
- "Free, no account" — ✅ `/compare` and `/world-cup-2026` both browseable without auth.
- "$38 SeatGeek Rockets G4 400-level" — ✅ sourced from today's Social AM pull.
- "$79 G1 same section" — ✅ sourced from today's Social reference.
- "52% drop in two games" — ✅ computed ($79→$38 = 51.9% round-up).
- "$44 StubHub Knicks G4 200-level" — ✅ sourced from today's Social AM pull.
- "22 of 33 / $84 median / $281 Brazil-Hard Rock outlier" — ✅ sourced from today's Content blog draft (`/blog/fifa-resale-three-weeks-data-world-cup-2026`) covering 20-day, 33-match, 3-platform, 3x-daily dataset.
- "FIFA cheapest at 6 matches, all at Azteca/Akron/BBVA/BC Place/BMO Field" — ✅ sourced from same blog dataset.
- "Series tilts, resale floods" / "40 to 60% in 72 hours" — ✅ pattern-level claim consistent with Round 1 historical data and today's Social copy; not a specific product claim.
- "Get price alerts" — DEMOTED from all headlines (74/74 null target_price).
- "Track prices every 4 hours" — AVOIDED. Cron dead Day 15.
- "Search events" / "one-click watchlist" — retained only in Variation Dashboard (post-deploy); `featureList` claim.

**Creative testing priority order (when paid launches):**
1. Variation A (NBA G4 Cratering) — highest-confidence tactical, live data, three parallel series, sharpest single-%-drop copy.
2. Variation B (WC 50 Days / 22-of-33) — second-highest, evergreen + countdown + blog amplifier.
3. Variation C (FIFA MX/CA counter-flip Spanish + Canadian) — new structural opportunity, lower competition, bilingual reach. Launch Canadian-English first (copy in brand-native language), add Spanish 3-5 days later once Canadian creative earns baseline CPA signal.
4. Apr 19 Variation B (Pollstar Summer Concert) — maintained cold-Meta anchor.
5. Variation Dashboard (Apr 21 C) — launch the day working tree deploys.
6. Florence + The Machine diagnostic (single-event, 9-day) — $3/day template test.
7. Louis Armstrong Stadium / AEW long-tail diagnostic — $2/day template test.

**Budget snapshot (launch scenario):** $81/day total across all variations and carryovers (+$26 vs Apr 21's $55). See `ads-daily-2026-04-22.md` budget table for full line items.

---

_Next creative review: 2026-04-23. Expected swaps: Wednesday G3/G4 AM pricing refresh on Variation A; FIFA Wednesday blog publish status check on Variation B exact-match LP routing; Variation C Spanish copy review (native-speaker sanity pass before any Mexico-geo launch); un-pause Variation Dashboard if deploy lands; assess whether Round 1 closeout timing warrants a G5/G6 "closeout clutch" variant by Friday Apr 25._
