# Content Refresh Log

## 2026-04-25 — MetLife Stadium (worldcup.ts)

**Page refreshed:** `metlife-stadium` in `web/src/data/worldcup.ts` → renders at `/world-cup-2026/metlife-stadium`

**File-target correction:** Sunday's next-week plan slated MetLife as today's refresh target in `venues.ts`. MetLife is not in `venues.ts` (that file is 24 NBA/NHL arenas only — no NFL stadiums) — it lives in `worldcup.ts` with a different `WorldCupVenue` schema (`{name, priceRange, description}` sections + `ticketTips` + `teams` instead of the `{name, tier}` arena schema). Refresh principle is the same; future plans should target `worldcup.ts` for any of the 16 World Cup stadium pages.

**What changed:**
1. **Sections expanded** from 3 generic tiers (Field 100s / Mezz 200s / Upper 300s) to 9 specific section groupings mapped to MetLife's actual layout *and* to FIFA's Category 1-4 pricing tiers:
   - 1 Field Level Sideline grouping (101-115, 134-150) — FIFA Category 1, long-axis pitch views
   - 1 Field Level Endline grouping (116-118, 134-136) — behind the goals, lower price tier
   - 1 Coaches Club grouping — premium mid-sideline club with indoor lounge access (entirely new tier — wasn't represented in prior data despite being one of MetLife's most-searched seat products)
   - 1 Mezzanine Sideline grouping (201-217, 235-250) — FIFA Category 2
   - 1 Mezzanine Corner grouping (218-220, 232-234) — sub-tier between sideline and endline
   - 1 Mezzanine Endline grouping (221-231) — supporters-section vibe for traveling fan groups
   - 1 Upper Level Sideline grouping (301-317, 334-350) — FIFA Category 3
   - 1 Upper Level Corner & Endline grouping (318-333) — FIFA Category 4, cheapest seats
   - 1 MetLife Suite Level grouping — Final-only on resale, $15K-$50K+ range to anchor the AggregateOffer high end
2. **Description** upgraded from a 2-sentence generic blurb to a single rich paragraph covering: World Cup Final date (July 19, 2026), the seven additional matches at MetLife, second-largest US stadium framing, NFL Giants/Jets year-round usage, the Taylor Swift Eras Tour 2023 pricing reference ($1.5K-$5K+ across five sold-out nights — a credibility anchor for "what big-event resale at MetLife looks like"), the soccer-vs-football pitch reconfiguration with specific section-number geometry (long sidelines parallel 100-level row 1; goal lines behind sections 116-118 and 134-136), cross-platform comparison callout (Ticketmaster, SeatGeek, StubHub, FIFA resale), the live $200-$500 platform-spread data point from the 4/22 FIFA resale post, and a price-alert CTA
3. **TicketTips expanded** from 4 generic tips to 8 MetLife-specific tips covering: best soccer sightlines (101-115, 134-150), goal-line sections to avoid for two-end visibility (116-118, 134-136), best mid-range value (mezz corners 218-220 / 232-234 at $400-$700), Final vs group-stage upper-deck pricing, NJ Transit specifics (Penn Station + Secaucus → Meadowlands Station), why driving to the Final is broken, Coaches Club as the New Jersey-July-humidity hedge, and the 20-30% post-on-sale resale dip pattern from prior MetLife major events
4. **Keywords** expanded from 4 to 10, adding: "World Cup Final tickets," "MetLife Stadium seating chart," "MetLife World Cup Final," "cheapest MetLife World Cup tickets," "Coaches Club MetLife," "World Cup Final July 19 2026"

**Why this venue:**
- **The single highest-intent World Cup ticket query for the rest of 2026.** "World Cup Final tickets" is the peak query of the entire tournament arc and MetLife is the venue. Refreshing this page at T-85 days lands directly in the resale-search ramp window. Every prior arena refresh was timed to active home playoff games (search ramp of weeks); this one is timed to the Final ramp (search ramp of months).
- **Sparse data was the worst in the World Cup file.** 3 generic sections vs 9 now. SoFi (which hosts other knockout matches) had the same sparse-3-sections problem and is the natural next refresh target after the playoff-arena queue clears.
- **AggregateOffer schema compounding.** SEO Agent's unshipped `web/src/app/world-cup-2026/[stadium]/page.tsx` rewrite extracts `lowPrice` from the lowest section in `venue.sections` and emits it in StadiumOrArena → SportsEvent → AggregateOffer JSON-LD. Today's expanded sections give that schema a real $150 floor (was $150 before but with no upper-tier breakdown to support it; now backed by 9 grouped sections and a $50,000+ ceiling that signals premium availability). The schema gain only lands when the 19-file SEO bundle ships — flagged in Hook 2 today.
- **Sunday's next-week plan slated MetLife as today's target.** Executed as planned, with the file-target correction noted above.
- **Compounds with Wednesday's 4/22 FIFA resale data blog.** That post is built around the platform-spread story; today's MetLife description embeds the live $200-$500 spread data point and the FIFA-most-expensive 65-67% ratio, giving the venue page a direct internal-link reason to cite the blog and vice versa.

**SEO impact expected:**
- Full section data populates the seating guide and gives Google more on-page entity signals for the "MetLife Stadium" + "World Cup Final" knowledge clusters
- 10 keywords (was 4) covers the full intent spectrum from broad "MetLife Stadium World Cup tickets" to long-tail "World Cup Final July 19 2026" and "Coaches Club MetLife"
- FIFA Category mapping (Cat 1 / Cat 2 / Cat 3 / Cat 4) inside section descriptions captures the official-pricing-vocabulary search surface that no other US comparison page seems to be hitting yet
- Taylor Swift Eras Tour resale reference embedded in the description gives Google a credibility entity signal — MetLife is the venue that handled $5K resale on a five-night sellout, which is the closest priced precedent for World Cup Final demand
- Soccer-vs-football pitch geometry detail (which sections sit behind the goal lines for soccer config) is genuinely differentiated content — competitor pages either skip the geometry shift or describe it incorrectly
- Once the SEO bundle deploys, the AggregateOffer `lowPrice: 150` becomes a real Google rich-result signal, not the empty schema it currently is

**Verification:**
- `npx tsc --noEmit` ran clean — no TypeScript errors introduced (verified at 2026-04-25 morning)

---

## 2026-04-24 — Chase Center (venues.ts)

**Page refreshed:** `chase-center` in `web/src/data/venues.ts`

**What changed:**
1. **Sections expanded** from 5 (1 floor, 2 lower, 2 upper) to 69 sections matching Chase Center's actual layout:
   - 1 Floor section (Courtside)
   - 24 Lower Bowl sections (1-24) — Chase Center's distinctive single-digit section numbering that wraps tight around the court, not the generic 101-124 convention other arenas use
   - 20 Theatre Box sections (Theatre Box 1-20) — added entirely new mid-level premium tier with private lounge access and in-seat service (Chase's Theatre Level is a legitimate product that was 100% absent from prior data)
   - 24 Upper Bowl sections (201-224) — full upper wrap
2. **Home teams** expanded from `['Golden State Warriors']` to `['Golden State Warriors', 'Golden State Valkyries']`. The Valkyries (WNBA expansion franchise) launched their inaugural season in 2025 and the second season tips off in May — prior data had zero Valkyries signal
3. **Description** upgraded from 1 generic sentence to a full paragraph covering: Mission Bay neighborhood placement, dual-tenant NBA + WNBA status, event volume (~200 per year), non-home-team event mix (tours, UFC, boxing), tier-specific value framing (Lower single-digit / Theatre Level / Upper 200s), cross-platform comparison callout (StubHub, SeatGeek, Ticketmaster), and TicketScan CTA with direct Warriors playoff + Valkyries tip-off mentions
4. **Keywords** expanded from 4 to 9, adding: "Chase Center seating chart," "Warriors playoff tickets," "Valkyries tickets," "Chase Center events," "San Francisco concert tickets"

**Why this venue:**
- Last remaining sparse dual-tenant arena after the TD Garden (4/10), Wells Fargo Center (4/11), AAC (4/17), and Ball Arena (4/18) refreshes — only 5 sections vs 60-75 for the peer set
- **Perfect timing**: Warriors host Round 1 Games 3 (Saturday) and 4 (Monday) at Chase Center this weekend. "Warriors playoff tickets" and "Chase Center seating chart" are peak-volume Bay Area keywords through the weekend. Matches the pattern of every prior refresh landing during active playoff home stands
- Today's content hook (Hook 1) explicitly flagged Chase Center as the venue target for this refresh, with specific G3-vs-G4 pricing data ($30-40 spread same seats two nights apart) that both feeds social content and justifies the deeper venue page
- Valkyries are a 2025-launched WNBA franchise with a growing Bay Area following — adding them as a secondary home team future-proofs the page for May-September WNBA season traffic and expands the keyword surface (`Valkyries tickets`) we had zero coverage on before
- Theatre Level is a distinctive Chase Center product that wasn't represented at all in the prior data. Single-digit lower bowl numbering (1-24 rather than 101-124) is also a Chase Center differentiator worth capturing accurately
- Last Sunday's next-week plan (4/19) slated Chase Center as today's Friday refresh target — executed as planned

**SEO impact expected:**
- Full section data populates the seating guide sidebar and gives Google more on-page entity signals for the "Chase Center" knowledge panel
- Richer description lifts the "About" content depth to match MSG, TD Garden, Wells Fargo Center, AAC, and Ball Arena
- Triple playoff/WNBA keyword cluster ("Warriors playoff tickets" + "Valkyries tickets" + "Chase Center seating chart") captures Bay Area's April-May Warriors playoff surge and the May WNBA season opener surge in one refresh
- Mission Bay mention opens internal-link potential back to the San Francisco city page and future Oracle Park cross-references
- Single-digit section naming (unusual in the peer set) gives Google distinctive entity signals that distinguish Chase from the generic NBA-arena cluster

**Verification:**
- `npx tsc --noEmit` ran clean — no TypeScript errors introduced

---

## 2026-04-18 — Ball Arena (venues.ts)

**Page refreshed:** `ball-arena` in `web/src/data/venues.ts`

**What changed:**
1. **Sections expanded** from 5 (1 floor, 2 lower, 2 upper) to 69 sections matching Ball Arena's dual-tenant layout:
   - 1 Floor section (Courtside for Nuggets, Ice Level for Avalanche)
   - 24 Lower Bowl sections (101-124) — wrap-around 100 level
   - 20 Club Box sections (Club Box 201-220) — added entirely new mid-level premium tier with private entrances and in-seat service
   - 24 Upper Bowl sections (301-324) — full upper wrap
2. **Description** upgraded from 1 generic sentence to a full paragraph covering: event volume (~200 per year), dual championship pedigree (Nuggets 2023 NBA Champions + Avalanche 2022 Stanley Cup), Ballpark-neighborhood context, the full range of non-home-team events (Mammoth lacrosse, UFC, WWE, concerts), tier-specific value framing (Lower/Club/Upper), cross-platform comparison callout (StubHub, SeatGeek, Ticketmaster), and TicketScan CTA with a direct playoff mention
3. **Keywords** expanded from 4 to 9, adding: "Ball Arena seating chart," "Denver concert tickets," "Nuggets playoff tickets," "Avalanche playoff tickets," "Ball Arena events"

**Why this venue:**
- Most sparse remaining dual-tenant arena after American Airlines Center (4/17), Wells Fargo Center (4/11), and TD Garden (4/10) refreshes — only 5 sections vs 60-75 for comparable peers
- **Perfect timing**: Both home teams in active 2026 first-round playoff series this weekend. Nuggets open NBA Round 1 this weekend; Avalanche are mid-series in NHL Round 1. "Nuggets playoff tickets" and "Avalanche playoff tickets" are peak-volume Denver keywords right now
- Today's content hook explicitly flagged Ball Arena as the Denver parallel to yesterday's AAC refresh
- Existing Denver city page in `cities.ts` already lists both teams and "Ball Arena events" as a keyword — this refresh compounds internal-link strength between venue and city pages
- Club Box tier is a legitimate mid-level Ball Arena product that wasn't represented in the prior data

**SEO impact expected:**
- Full section data populates the seating guide sidebar and gives Google more on-page entity signals for the "Ball Arena" knowledge panel
- Richer description lifts the "About" content depth to match MSG, TD Garden, Wells Fargo Center, and AAC
- Dual playoff keyword cluster ("Nuggets playoff tickets" + "Avalanche playoff tickets") captures Denver's April-May seasonal search surge
- Ballpark-neighborhood mention opens internal-link potential back to the existing Denver city page

**Verification:**
- `npx tsc --noEmit` ran clean — no TypeScript errors introduced

---

## 2026-04-17 — American Airlines Center (venues.ts)

**Page refreshed:** `american-airlines-center` in `web/src/data/venues.ts`

**What changed:**
1. **Sections expanded** from 5 (1 floor, 2 lower, 2 upper) to 75 sections matching AAC's actual layout:
   - 1 Floor section (Courtside for Mavs, Ice Level for Stars)
   - 24 Lower Bowl sections (101-124) — full wrap-around 100 level
   - 20 Platinum Club boxes (Platinum P1-P20) — added entirely new premium mid-level tier with private lounges and in-seat service
   - 30 Upper Mezzanine sections (301-330) — full upper wrap
2. **Description** upgraded from 1 generic sentence to a full paragraph covering: event volume (200+ per year), dual-league tenancy (Mavericks NBA + Stars NHL), Victory Park neighborhood context north of downtown Dallas, Platinum Club perks, Upper Mezzanine value, and TicketScan CTA
3. **Keywords** expanded from 4 to 10, adding: "Dallas arena tickets," "American Airlines Center seating chart," "Dallas concert tickets," "Mavericks playoff tickets," "Stars playoff tickets," "American Airlines Center events," "Victory Park Dallas tickets"

**Why this venue:**
- Most sparse remaining venue data after TD Garden (4/10) and Wells Fargo Center (4/11) refreshes (only 4 sections vs 60+ for comparable dual-tenant arenas)
- **Perfect timing**: Stars vs Wild NHL first-round Game 1 is tonight at AAC, Game 2 Sunday. Mavericks are also in the NBA first round with home games next week. Both active playoff series drive peak search volume for "Stars playoff tickets" and "Mavericks playoff tickets" right now
- Yesterday's content hook explicitly flagged this venue page as a refresh candidate tied to the Stars-Wild price gap narrative
- Platinum Club is a legitimate premium tier at AAC that wasn't represented at all in the prior data

**SEO impact expected:**
- Full section data populates the seating guide sidebar and gives Google more on-page entity signals
- Richer description lifts the "About" content depth to match MSG/TD Garden/Wells Fargo
- Dual playoff keyword cluster ("Mavericks playoff tickets" + "Stars playoff tickets") captures Dallas's April-May seasonal search surge
- Victory Park mention opens internal-link potential to Dallas city page and future AT&T Stadium (Cowboys / World Cup 2026 venue) cross-references

**Verification:**
- `npx tsc --noEmit` ran clean -- no TypeScript errors introduced

---

## 2026-04-11 — Wells Fargo Center (venues.ts)

**Page refreshed:** `wells-fargo-center` in `web/src/data/venues.ts`

**What changed:**
1. **Sections expanded** from 5 (1 floor, 2 lower, 2 upper) to 61 sections with accurate Wells Fargo Center layout:
   - 1 Floor section
   - 24 Lower Bowl sections (101-124) — full wrap-around lower level
   - 12 Club sections (Club 1-12) — added entirely new mezzanine club tier
   - 24 Upper Bowl sections (201-224) — full upper level
2. **Description** upgraded from 1 generic sentence to a rich description covering: event volume (250+ per year), location context (South Philly Sports Complex alongside Citizens Bank Park and Lincoln Financial Field), club level perks (padded seating, in-seat service), upper-level value angle, and TicketScan CTA
3. **Keywords** expanded from 4 to 9, adding: "Wells Fargo Center seating chart", "Philadelphia concert tickets", "76ers playoff tickets", "Flyers playoff tickets", "Wells Fargo Center events"

**Why this venue:**
- Most sparse venue data remaining after TD Garden refresh (was only 5 sections vs 30+ for comparable arenas)
- Both home teams (76ers, Flyers) are in the 2025-26 playoff picture, driving high search volume
- "76ers playoff tickets" and "Flyers playoff tickets" are high-intent seasonal keywords we were missing
- South Philly Sports Complex context adds internal linking potential to Lincoln Financial Field (World Cup 2026 venue)

**SEO impact expected:**
- Full section data populates the seating guide sidebar on the venue page
- Richer description gives Google more content to index
- Playoff-related keywords capture April/May seasonal search spikes
- Sports complex mention creates natural association with World Cup 2026 venue page

---

## 2026-04-10 — TD Garden (venues.ts)

**Page refreshed:** `td-garden` in `web/src/data/venues.ts`

**What changed:**
1. **Sections expanded** from 6 (3 lower, 3 upper) to 63 sections with accurate TD Garden naming:
   - 1 Floor section
   - 22 Loge sections (Loge 1-22) — TD Garden uses "Loge" not generic numbered sections
   - 10 Club sections (Club 101-110) — added entirely new club tier
   - 30 Balcony sections (BAL 301-330) — TD Garden uses "Balcony" not "Upper"
2. **Description** upgraded from 1 generic sentence to a rich 3-sentence description covering: event volume (200+ per year), transit accessibility (above North Station), club seat perks, and a TicketScan CTA
3. **Keywords** expanded from 4 to 9, adding: "TD Garden seating chart", "Boston concert tickets", "Celtics playoff tickets", "Bruins playoff tickets", "TD Garden events"

**Why this venue:**
- Most sparse venue data in the entire dataset (was 6 sections vs 30+ for comparable arenas like MSG, United Center)
- Both home teams (Celtics, Bruins) are in the 2025-26 playoff picture, driving high search volume right now
- "TD Garden seating chart" and "Celtics playoff tickets" are high-intent keywords we were missing

**SEO impact expected:**
- Better section data improves the seating guide sidebar on the venue page
- Richer description gives Google more content for the "About" section
- Playoff-related keywords should capture seasonal search spikes
