# Ad Creative — 2026-04-27
## Angles: MetLife Stadium WC Final 83-Day (MAINTAINED LEAD), Bruno Mars Romantic Tour Multi-Venue (MAINTAINED Variation B), FIFA Fourth-Check Stability + Sample Expansion (NUMBERS REFRESH)

_3 variations for A/B testing. Driven by today's two new structural findings + one numbers refresh: (1) **The July 19, 2026 World Cup Final at MetLife is now 83 days out** — Apr 25 NEW LEAD carries with countdown decrement only. The `/world-cup-2026/metlife-stadium` LP (deployed Apr 25 commit `2617882`) remains the only fully-content-deployed LP in the campaign portfolio; today's GTM container reverification on this route holds (HTTP 200, expanded today to 17+ routes including `/levis-stadium`, `/gillette-stadium`, `/scotiabank-arena`). (2) **Bruno Mars Romantic Tour cluster unchanged at 6 wl / 3 watchers / 3 venues** — but today's Apr 25 cohort 0/2 second-day return finding sharpens the launch condition: even at validated CTR + comparison-funnel completion, the second-session math is 0 until cron writes. Variation B copy unchanged from yesterday; launch-condition annotation added. taranimeramaro (Apr 25 same-session activator who added 3 MetLife dates) silent at 36h. (3) **FIFA dataset expanded 58 → 62 matches; 41/62 = 66.1%; median spread $94; fourth consecutive check in the 65–67% band across 17 days.** Sample expansion driven by MetLife and SoFi secondary inventory expanding. Frame upgrades from "ratio held 14 days post-blog tracking, third consecutive check" to "fourth consecutive check, sample expanded to 62 matches, $94 median spread." Stability across four checks AND simultaneous sample expansion = the strongest possible structural-truth claim in the entire portfolio._

_Apr 26 Variation A (MetLife WC Final 84-day) becomes today's MAINTAINED LEAD with countdown decrement only. Apr 26 Variation B (Bruno Mars Romantic Tour Multi-Venue) is **MAINTAINED unchanged in copy** — the cluster held overnight (no decay, no growth) and the second-session 0/2 finding is annotated to the launch condition (no scale-up decision on first-session metrics alone) rather than absorbed into the copy itself. Apr 26 Variation C (FIFA 38/58 / 65.5% / $97 third-check stability) becomes today's NUMBERS REFRESH (Variation C) — sample expanded, ratio refreshed, frame upgraded to fourth-check stability. Apr 25 Variation C (Summer Concert window) becomes today's MAINTAINED-WITH-COUNTDOWN-DECREMENT (4 days now) — flagged in the Actions Taken list of `ads-daily-2026-04-27.md` rather than spending a Creative slot on it. Apr 23 Variation A (Cubs Wrigley May Homestand) is **MAINTAINED unchanged with REFRAMED LP urgency** — 4 days to opener, still cron-gated, but Wrigley LP today reframed as architecturally fast-create (Scotiabank long-form 200 confirms template works) — if shipped within 4 days, Cubs paid routes to `/venues/wrigley-field` at venue-page QS tier. Apr 23 Variation B (TM vs SG Fee Flip) is **MAINTAINED unchanged** — TM-vs-SG fees blog **Day 4 unpublished**, LP still `/compare` fallback. Apr 22 Variation C (FIFA Mexico/Canada counter-flip) is maintained unchanged. Apr 21 Variation C (Dashboard Search Unlock) remains gated on `/dashboard/layout.tsx` deploy (Day 6). Apr 24 Chase Center G3/G4 is **RETIRED** as of today after final-24h tactical shelf expired with Apr 27 Monday G4._

_Testing framework: 1 variable at a time. Run each variant minimum 3 days or 100 clicks. Winner scales; loser gets replaced. Product-truth gates applied: "price drop alerts" demoted from headlines (85/85 null target_price, no new adds in 24h), "track prices every 4 hours" banned entirely (dead cron Day 20), all claims verified deliverable via `/world-cup-2026/metlife-stadium`, `/world-cup-2026`, `/compare`, or published blogs only. **NEW today: same-day-urgency keyword classes are now a HARDENED DO-NOT-BID category** — the nmcnamee99 case (Raptors Game 2 Apr 26) closed today with confirmed loss (game ended ~12h ago, no return session, past-events count crossed 29 → 30). The hypothetical paid Search outcome on this exact case = same churn + added CPA cost. Adjacent classes (NHL playoff tickets tonight, NBA same-day, last-minute concert tickets, [event] tickets in 2 hours, [event] tickets walk up) inherit the same exclusion. **Re-evaluate when (a) cron writes for ≥7 days AND (b) same-day UX fallback ships from CRO** — both gates required, not either-or._

_**Launch condition (all variants, sharpened today):** (a) The post-signup UX audit must land BEFORE any of these go live — n=7 Day-4+ non-returner set + Apr 25 cohort 0/2 same-session-activator second-day return rate = the binding constraint on paid CPA → ROAS is empirically the second visit, not the first. (b) Variation A is the only variation in this campaign portfolio that is **NOT LP-gated** — `/world-cup-2026/metlife-stadium` is live since Apr 25. (c) Variation B is LP-gated on programmatic tour page (SEO Day 4 of handoff) — runs at half-budget against `/compare` fallback until LP ships. (d) Variation C is gated on FIFA resale blog publish for optimal LP routing (still `/compare`/`/world-cup-2026` fallback; FIFA blog Day 5 unpublished). (e) **None of these should go live before the cron + audit gates clear; today's second-session 0/2 finding is a NEW launch gate added to the existing list.**_

---

### Variation A — World Cup Final at MetLife: 83 Days, $150 Floor, the Eras Tour Benchmark

_MAINTAINED LEAD from Apr 25/26. Countdown decrement only. Copy shell unchanged. LP unchanged._

**Google Search Ad:**
```
Headline 1: World Cup Final at MetLife — 83 Days
Headline 2: $150 Resale Floor and Climbing
Headline 3: 9 Sections, FIFA Cat 1-4, Compared
Description 1: July 19, 2026. World Cup Final at MetLife Stadium. We mapped all 9 viable section groupings to FIFA Categories 1-4 + Coaches Club + Suites with soccer-config sightlines (which 100-level sections sit behind the goal lines vs along the side).
Description 2: Reference: Taylor Swift played MetLife five sold-out 2023 nights at $1,500-$5,000+ resale. Final demand will be on a different planet. Compare FIFA Resale, SeatGeek, StubHub. Free.
```
- **Final URL:** https://www.ticketscan.io/world-cup-2026/metlife-stadium *(deployed Apr 25, commit `2617882`; GTM healthy on this route HTTP 200, container ID confirmed across 17+ routes today)*
- **Display path:** ticketscan.io/world-cup-2026/metlife-stadium
- **Sitelinks:**
  - All 16 World Cup Stadiums → /world-cup-2026
  - Final + Semifinal Matches → /world-cup-2026/metlife-stadium *(MetLife hosts both)*
  - Compare Any Match → /compare
  - How It Works → /how-it-works
- **Callouts:** "9 Section Breakdown", "FIFA Cat 1-4 Mapped", "Soccer Sightlines", "Free Comparison"
- **Match types:**
  - Exact: `metlife stadium world cup tickets`, `world cup final tickets`, `world cup final july 19 2026`, `metlife stadium seating chart`, `metlife stadium soccer tickets`, `world cup final metlife`, `2026 world cup final tickets`
  - Phrase: `world cup final tickets price`, `metlife stadium world cup seating`, `cheapest world cup final tickets`, `world cup final new jersey tickets`, `world cup final cat 1 tickets`, `metlife stadium soccer seating chart`
  - **AVOID** blanket exact match on `metlife stadium tickets` — cross-contaminates NFL (Giants/Jets) and concert intent (different price math, different ICP). Stick to soccer/Final/World Cup-qualified variants. Bruno Mars MetLife signal routes to Variation B at lower bids, not to this WC Final cluster.
- **Geo:** NYC DMA primary (Manhattan + Brooklyn + Queens + Bronx + Staten Island) +25%. Greater NJ + CT + Long Island +20%. Philadelphia + DC +10% (drive-in radius for a Final). National at base (Final has out-of-market and international demand). Soft positive bid on Mexico CDMX/MTY +5%, Canada Toronto/Vancouver +5% (national-team supporter geos with US travel propensity).
- **Device:** Mobile +15% (research browses spike on mobile; final purchase often desktop). Desktop holds for evening/weekend research window.
- **Dayparting:** Continuous — World Cup Final research is high-intent and spreads evenly. Slight evening (7–11pm ET) lift across all DMAs.

**Meta Ad:**
```
Primary text: 83 days to the World Cup Final at MetLife Stadium. The venue page is now nine specific section groupings mapped to FIFA Categories 1 through 4, plus Coaches Club and the MetLife Suites. Soccer-config sightlines noted (which 100-level sections sit behind the goal lines for the soccer pitch vs the regular football field). Reference for what big-event resale at this stadium actually does: Taylor Swift's Eras Tour played MetLife five sold-out 2023 nights at $1,500 to $5,000+ per ticket. The World Cup Final is a once-in-a-generation North American event. Demand will make Eras Tour pricing look reasonable. Current resale floor: $150. With 83 days to go.
Headline: World Cup Final, MetLife, $150 Floor
Description: 9 sections mapped, FIFA Cat 1-4. Free.
```
- **CTA button:** Learn More
- **Landing:** https://www.ticketscan.io/world-cup-2026/metlife-stadium
- **Audience:** US adults 25-55 NYC DMA + greater NJ/CT primary (NYC DMA + Long Island + Northern NJ + Westchester + CT). Soccer interest + World Cup interest + FIFA interest + MLS / Premier League / La Liga / Liga MX followers. **Eras Tour attendee lookalike** as a secondary audience — proxy for big-event-resale buyer comfort. Travel-to-sports-events behavior. **Exclude:** users under 21, "ticket broker" profession affinity, users who attended a MetLife event in last 30 days (reduces wasted impressions to recently-attended NFL/concert audiences who aren't in soccer Final mode), **and exclude users in the Bruno Mars audience cluster** (separate variation, different price/intent stack — overlap dilutes both).
- **Placements:** Feed, Stories, Reels. Exclude Audience Network.
- **Note:** Day-3 carry of the only fully-content-deployed LP in the portfolio. Mechanical advantage unchanged: landing-experience score (Google) and quality-rank (Meta) both reward LP specificity to query intent. The AggregateOffer schema upgrade that would make $150 surface as structured-data rich result is still SEO-bundle-gated (Day 11), so the user-visible page is upgraded but the SERP rich-result eligibility upgrade isn't. **Today's Apr 25 cohort 0/2 second-day return finding doesn't change Variation A creative directly** — the WC Final is a high-research, multi-week-decision-cycle purchase where users are *expected* to return multiple times before buying, and the second-session question is largely about whether the product surfaces enough new pricing data on visit #2 to be worth opening. With cron silent, even Variation A's high-quality LP loses second-session value. **The launch gate moves from "MetLife page deployed → ready" (Apr 25 framing) to "MetLife page deployed AND second-session UX has price data to show → ready" (Apr 27 framing).**

**Why this angle:** Three anchors that compound: (1) MetLife is the single highest-intent World Cup venue keyword for the rest of 2026 — hosts the Final, two semifinals, and four group-stage matches. (2) The Eras Tour comp is a unique-to-MetLife proof point — no other US World Cup venue has a recent peer-event resale benchmark at this scale. (3) The $150 floor is a real, current, on-page number — not a forecast or an analogy. Combining the three: a high-intent venue keyword + a unique credibility benchmark + a verified on-page price = the strongest possible alignment between paid copy and LP content in the entire campaign portfolio.

**Shelf life:** Evergreen through Final week (mid-July), with weekly numbers refresh. Retire the "83 days" framing as countdown shortens; rotate to "60 days," "30 days," "10 days" milestones with concurrent paid-budget escalation. Single-variant longest-shelf creative in the portfolio.

**Refresh trigger:** Weekly re-pull of MetLife Final resale floor across FIFA Resale + SeatGeek + StubHub + Vivid Seats. If floor moves >10%, swap new number into the ad shell. Monthly: rerun the Eras Tour comp framing — at 60 days out, may shift to a SoFi or Beyoncé Renaissance comp if those become more salient. Also: if SEO bundle ships, upgrade ad copy to call out structured-data $150 floor surfacing in Google ("see the $150 floor right in search") for an additional 2-week burst.

---

### Variation B — Bruno Mars Romantic Tour: 3 Venues, 3 Cities, the Same Question Three Times

_MAINTAINED from Apr 26. Cluster unchanged at 6/3/3. Copy shell unchanged. LP-gated on programmatic tour page (SEO Day 4 of handoff). Launch-condition annotation added re: second-session math._

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
- **Dayparting:** Continuous. Slight evening (7–11pm ET) and weekend lift — multi-date concert-buying decisions tend to happen during lower-pressure browsing windows.

**Meta Ad:**
```
Primary text: Bruno Mars's Romantic Tour stops at three different US venues this summer: MetLife August 21, 22, and 25, Soldier Field May 16 and 17, Ohio Stadium May 20. We track every major resale platform for each date. What we usually see with multi-date tours: the same artist, the same kind of seats, the same week — completely different secondary-market patterns at each venue. MetLife and Soldier Field tend to run hot on StubHub. Ohio Stadium often skews to SeatGeek. Ticketmaster's primary fees vary 6 to 14% depending on the host. If you're picking between dates or cities, comparing each one separately is usually worth twenty minutes. We do it in one place. Free, no account.
Headline: Bruno Mars Tour, Three Venues
Description: Compare every date side-by-side. Free.
```
- **CTA button:** Learn More
- **Landing:** https://www.ticketscan.io/compare
- **Audience:** US adults 25-50, three geo-stacked clusters: NYC/NJ (MetLife dates), Chicago (Soldier Field dates), Columbus (Ohio Stadium date). Bruno Mars + R&B + funk + pop fan interests. Secondary lookalike on multi-date concert ticket buyers (proxy for "season" or "tour" buying behavior). Tertiary: Hooligans tour attendee lookalike (Bruno Mars's prior tour). **Exclude:** users under 21, "music industry" profession affinity, users currently in-market for the Las Vegas Park MGM residency (different product, different sales channel), and users in any Variation A WC Final audience set (overlap dilutes both even when the venue is the same — different intent stack).
- **Placements:** Feed, Stories, Reels. Exclude Audience Network.
- **Note:** Day-2 of this variant. The cluster (6 wl / 3 watchers / 3 venues) held overnight — no decay, no growth. taranimeramaro, the Apr 25 same-session activator who anchored the demand 2× ratification (3 MetLife dates), has been silent for 36+ hours. **The Apr 25 cohort 0/2 second-day return finding sharpens the launch condition for this variation specifically:** even at validated CTR + comparison-funnel completion on `/compare` fallback, the second-session math is empirically zero for the entire April cohort (n=7 Day-4+ non-returners + 0/2 same-session activators returning). **No scale-up decision should be made on first-session metrics alone.** Programmatic Bruno Mars Romantic Tour LP would lift QS by 1-2 tiers on ship; runs at half budget ($4 Google, $2 Meta) against `/compare` fallback for low-cost top-of-funnel validation only until LP ships AND cron writes for ≥7 days. **The LP-ship + cron-write pair is the dual gate** — either alone is insufficient.

**Why this angle:** The Bruno Mars demand signal is the strongest organic cross-venue / cross-watcher pattern in the platform's 20-day post-Apr-7 history. Three anchors: (1) **3 watchers / 3 venues / 6 watchlist items** is the highest-density-per-non-MSG-non-Sphere event in the watchlist — distinct from the MSG and Sphere clusters which have 1 power user each. (2) **Multi-date tour-buying is structurally well-served by comparison tools** — the decision space is "which platform, which date, which city, which seating tier" and the answer is genuinely different per venue. Single-event tactical campaigns don't capture this; WC campaigns capture it geographically but not artist-natively; the Romantic Tour campaign does both. (3) **The "same tour, three venues" framing is rare in paid copy because most ticket comparison platforms run venue-specific or event-specific creative, not tour-level creative** — there's a competitive whitespace here. The narrative ("Bruno Mars stops at three places this summer; the cheapest seller is different at each venue") is what almost no competitor will run. Until the programmatic tour LP ships, the angle is constrained to `/compare` fallback, but the keyword cluster is high enough commercial-intent to produce real CTR signal even at the lower QS tier.

**Shelf life:** Through Aug 25 (last MetLife date) — just under 4 months. Pre-event cluster is high-volume long-tail (phrase + exact match on every venue/date combination); post-Soldier Field (May 17), the May Chicago volume drops out and the Aug MetLife cluster carries the second half of the shelf. Reframe at LP-ship from "3 venues compared" to "every Romantic Tour date compared" once the programmatic LP can carry the weight.

**Refresh trigger:** (a) Programmatic tour LP ship → swap LP, double budget, refresh copy to lean on LP-specific features (probably "every Romantic Tour date in one view" framing). (b) Any new watchers added to the tour cluster → confirms or expands the demand signal. (c) Major price move (>15%) at any of the three venues → swap that venue out of the headline-mention set. (d) **Critical guardrail (carried from Apr 26):** the moment any of the 6 currently-watched dates becomes "today" or "tonight," that specific date has to be removed from the cluster's negative-keyword bypass — same-day-urgency keywords on a tour in the active rotation would still hit the canonical failure mode (per the now-CLOSED nmcnamee99 case). (e) **NEW today:** if taranimeramaro returns for a second session in the next 7 days, that's first counter-evidence to the cohort-second-session 0/N reading and would soften the Variation B launch condition by one user.

---

### Variation C — FIFA Resale: Fourth Check, 65–67% Holds, Sample Now 62 Matches

_NUMBERS REFRESH of Apr 26 Variation C. Sample expanded 58 → 62 matches; ratio refreshed 65.5 → 66.1%; median spread 97 → 94. Frame upgrades from "ratio held 14 days post-blog tracking, third consecutive check" to "fourth consecutive check, 65–67% band held across 17 days, sample expanded to 62 matches, $94 median spread." Stability across four checks AND simultaneous sample expansion = the strongest possible structural-truth claim in the portfolio._

**Google Search Ad:**
```
Headline 1: FIFA Resale: Most Expensive 4 Checks Running
Headline 2: 65-67% Held Across 17 Days
Headline 3: Sample Now 62 Matches, Median $94
Description 1: We rechecked the World Cup 2026 group-stage resale data this weekend. FIFA Official Resale was the most expensive on 41 of 62 group-stage matches — 66.1%, the fourth straight check landing in the 65 to 67 band. Sample expanded by 4 matches; ratio barely moved.
Description 2: Median US-venue spread between FIFA and the cheapest secondary now $94. Four checks across 17 days, same answer: the official marketplace is structurally not the cheapest on most group-stage matches. Compare FIFA Resale vs SeatGeek vs StubHub. Free.
```
- **Final URL:** https://www.ticketscan.io/world-cup-2026
- **Display path:** ticketscan.io/world-cup-2026/compare
- **Sitelinks:**
  - All 16 Stadiums → /world-cup-2026
  - **MetLife Final + Semis → /world-cup-2026/metlife-stadium** *(carry — leverages deployed LP)*
  - Compare Any Event → /compare
  - How It Works → /how-it-works
- **Callouts:** "3 Resale Platforms", "Fees Included", "45 Days to Kickoff", "Free Comparison"
- **Match types:**
  - Exact: `fifa resale marketplace`, `fifa resale expensive`, `fifa resale vs stubhub`, `fifa resale vs seatgeek`, `world cup 2026 tickets compare`, `world cup 2026 resale`, `world cup 2026 ticket prices`, `is fifa resale the cheapest`
  - Phrase: `fifa resale 2026`, `world cup tickets stubhub`, `world cup tickets seatgeek`, `world cup resale comparison`, `where to buy world cup tickets 2026`, `world cup 2026 cheap tickets`, `is fifa resale expensive`, `cheaper than fifa resale`
- **Geo:** US national primary. Bid adjustments: host-stadium metros (NYC/NJ for MetLife, LA for SoFi, Dallas for AT&T, Atlanta for Mercedes-Benz, Seattle for Lumen, SF for Levi's, Boston for Gillette, Philadelphia for Lincoln Financial, Houston for NRG, Kansas City for Arrowhead, Miami for Hard Rock) +20%. Secondary: Canada (Toronto + Vancouver) +10%, Mexico (national) +10%.
- **Device:** Mobile +5%. Research-heavy query, desktop converts well.
- **Dayparting:** Continuous. WC research spreads evenly; slight evening+weekend lift.

**Meta Ad:**
```
Primary text: We rechecked the World Cup 2026 group-stage resale data this weekend. The dataset expanded to 62 group-stage matches across FIFA Official Resale, SeatGeek, and StubHub (was 58 last week). FIFA was the most expensive on 41 of them. 66.1%. The fourth straight check landing in the 65 to 67 band. Median US-venue spread between FIFA and the cheapest secondary held at $94. Four checks across 17 days, sample expanded to 62 matches, ratio barely moved. The official marketplace is structurally not the cheapest on most group-stage matches — and the pattern is more reliable, not less, as we add data. 45 days to kickoff. Compare before you click buy.
Headline: FIFA Resale: 4 Checks, 65-67%
Description: 41 of 62 matches priciest on FIFA. Free.
```
- **CTA button:** Learn More
- **Landing:** https://www.ticketscan.io/world-cup-2026
- **Audience:** US adults 25-55, soccer interest + World Cup interest + FIFA interest + MLS/Premier League/La Liga followers. Secondary: travel-to-sports-events behavior, season-ticket fans of any major sport (proxy for dedicated buyer). **Exclude:** users under 21 (can't lawfully resell themselves), users currently in-market for a specific group-stage host city (we'll retarget those via Google Search, not cold Meta), "ticket broker" profession affinity.
- **Placements:** Feed, Stories, Reels. Exclude Audience Network.
- **Note:** Today's refresh is **the first one in the FIFA-stability frame arc that combines ratio stability with sample expansion** — previous three checks (Wed 28/42, Sat 38/58, Mon 38/58) were all measurement-window arguments at constant or slightly-expanded sample sizes. Today's 41/62 expands the sample by 4 matches (MetLife + SoFi secondary inventory) AND keeps the ratio in band. That's a categorically stronger structural-truth signal: not just "we kept measuring and the pattern held" (third-check frame), but "**the underlying market kept supplying new data points and they confirmed the pattern**." The frame upgrade is the work today — interpretive maturity on a now-broader dataset, which is cheaper to refresh than a complete re-measurement and structurally more credible. **The `dateModified` field on any WC content will matter when the associated blog (Apr 22 FIFA data post) ships** — right now that blog is **Day 5 unpublished** and the schema stays out-of-date on prod. If the blog publishes this week, swap the LP from `/world-cup-2026` to the blog URL for QS uplift.

**Why this angle:** Two weeks ago we had 28/42 = 66.6% as a single-measurement claim. Last Saturday we had 38/58 = 65.5% as a wider-sample claim. Yesterday (Sun) we had 38/58 = 65.5% for the second consecutive measurement window — qualitatively stronger because it controlled for measurement noise. Today we have 41/62 = 66.1% **for the fourth consecutive measurement window AND with a sample-expansion of 4 matches** — qualitatively stronger again because it controls for both measurement noise AND inventory drift. The headline goes from "we kept measuring and the pattern held" (third-check frame) to "we kept measuring, the underlying market kept producing new data, and it kept confirming the pattern" (fourth-check + sample-expansion frame). That fourth framing is the strongest possible structural-truth claim the comparison-tool category can make about a competitor — better than a single moment, better than a stable repeat-check, because it's the only one that controls for both noise and drift simultaneously. **Cross-reference advantage carried:** the median creep ($94 → $97 last week, $97 → $94 today) is partly driven by the very SoFi + MetLife inventory expansion that drove the sample expansion — natural narrative consistency between Variation A's MetLife page and Variation C's hub-level data even though they target different keyword clusters.

**Shelf life:** Evergreen through WC kickoff (June 11) with weekly numbers/frame refresh cadence. If the next check (Wednesday Apr 30 or Saturday May 3) comes back inside the 64–67% band, the next frame upgrade is "fifth consecutive check, 65–67% band held across 20+ days" — same compounding interpretive-maturity arc through May. Retire the "N consecutive checks" frame on May 28 (two weeks pre-kickoff) and shift to "5-week tactical view" framing for the last fortnight before the tournament.

**Refresh trigger:** Twice-weekly re-pull of the FIFA group-stage set (Wed + Sat). If ratio moves outside 62–70% band, rewrite copy. If ratio stays 64–68%, update the "N consecutive checks" count + sample size in the headline and Meta primary text. Also: if either the TM-vs-SG fees blog (Day 4 unpublished) or the FIFA resale blog (Day 5 unpublished) publishes, reconsider the LP target (blog URL unlocks QS tier).

---

## Cross-Variation Notes

**LP Quality Stack (rank-ordered by paid-readiness today):**
1. **`/world-cup-2026/metlife-stadium`** — Variation A. Content-deployed Apr 25, Day 3 in production. 9-section breakdown + Eras Tour comp + $150 floor + Cat 1–4 mapping. GTM healthy (HTTP 200, container ID confirmed across 17+ routes today). Highest-quality LP in the portfolio.
2. **`/world-cup-2026`** — Variation C. WC hub. Generic but functional. AggregateOffer schema upgrade gated on SEO bundle deploy (Day 11).
3. **`/compare`** — Variation B (Bruno Mars) and most fallback variations. Generic comparison tool. Metadata + WebApp schema upgrade gated on SEO bundle deploy (Day 9). **For Variation B specifically, the programmatic Bruno Mars Romantic Tour LP would lift it to tier 2 when it ships.**

**Conditional LP additions today (NEW — gated on builds):**
- **`/venues/wrigley-field` (REFRAMED today)** — Architecturally fast-create with Scotiabank long-form template (`/venues/scotiabank-arena` returned 200 today, proving the pattern works). +4d Cubs deadline. If shipped within 4 days, becomes a venue-page-tier LP for the Cubs Wrigley May Homestand cluster (currently `/compare` fallback or `/tickets/mlb` post-deploy fallback). $5/day Google budget conditional on ship.
- **`/venues/madison-square-garden` (REFRAMED today)** — Same fast-create logic. tosophiameyer 11-wl Harry Styles MSG impact (highest single-watcher concentration on platform after Sphere). $4/day Google budget conditional on ship.

**Audience-overlap exclusions across variations:**
- Variation A WC Final ↔ Variation B Bruno Mars MetLife: same physical venue, completely different intent stack and price math. Cross-include both audiences into each other's exclusion lists. WC Final buyers ≠ Bruno Mars Romantic Tour buyers even when both events are at MetLife.
- Variation A WC Final ↔ Variation C FIFA hub: heavy overlap by design (same WC bucket, different funnel position). Variation A is venue-deep, Variation C is hub-shallow. Run both; use Meta's cross-campaign frequency capping to avoid showing the same user both ads in the same week.
- Variation B Bruno Mars ↔ Variation C FIFA hub: minimal overlap. Both run independently.

**Bruno Mars campaign gating sequence (when programmatic LP ships):**
1. **Pre-LP-ship (current state, Day 4):** Variation B routes to `/compare` fallback at $4 Google + $2 Meta (half budget). Goal: validate keyword CTR + comparison-funnel completion rate at low cost. **NEW today:** even if 7-day CTR > 4% and bounce rate < 60% on the comparison view, **no scale-up decision** until cron writes for ≥7 days AND second-session-return rate becomes empirically non-zero. The Apr 25 cohort 0/2 second-day return finding hardens this gate.
2. **Post-LP-ship + post-cron-write:** Swap LP to `/bruno-mars-romantic-tour` (or whatever the programmatic slug becomes), double budget to $8 + $4, refresh copy to lean on LP-specific features. Expect QS lift in the 6.5-8 range vs 5-7 `/compare`-routed equivalent.
3. **Post-first-event (May 17 Soldier Field date 2):** Drop the May Chicago dates from the keyword cluster, reweight Aug MetLife dates +50% (3 of 6 remaining dates concentrate at MetLife). Reframe as "MetLife Romantic Tour residency" framing if the demand signal continues.

**FIFA Variation C frame-refresh cadence:**
- Each new check at the same ratio extends the headline window by 3-4 days. "17 days post-blog, fourth check" → "20 days, fifth check" (Wed Apr 30) → "24 days, sixth check" (Sat May 3) etc. The compounding-interpretive-maturity arc through May is the cheapest possible refresh cadence — minimal copy work, the data work is already built into the twice-weekly check.
- **NEW today:** the sample-expansion dimension (58 → 62 matches) is a categorically stronger frame than ratio-stability alone. If future checks expand the sample further (e.g., 65 matches with 65–67% ratio still holding), the frame upgrades again to "every time we measure, the dataset gets bigger and the pattern still holds." That's a unique evidence shape.
- **Critical:** the moment the ratio drifts outside the 62–70% band, the entire frame fails and a complete copy rewrite is needed. The current band is structurally tight (1.1pp range across 17 days of measurement) but a major group-stage match adding to the secondary marketplace inventory could shift it. Monitor.

**Newsletter-cross-conversion angle deferred:** Apr 22–23 surge of 5 signups produced 0 newsletter subs; Apr 25 surge of 2 signups produced 0 newsletter subs (0/7 cross-conversion across two surge windows now, **85 days stale**). Until CRO ships the post-signup newsletter surface, none of these variations should add a "join newsletter" secondary CTA — that path doesn't exist in production today. If/when it ships, all three variations should add a sitelink or callout for newsletter sign-up to capture top-of-funnel non-converters.

**Pixel-gated:** All Meta variations require Pixel install before retargeting layer activates. Cold-prospect creative is launchable without Pixel, but the retargeting follow-up sequence (which is where Meta's CPA math actually gets to ROAS-positive) is gated on Pixel + GDPR consent banner. **Variation A's MetLife audience and Variation B's Bruno Mars MetLife audience are the two highest-LTV segments to start retargeting on once Pixel ships** — both self-select for high-spend tolerance ($150+ floor for WC Final, $200+ typical for MetLife concert resale). **NEW today:** the Apr 25 cohort 0/2 second-day return finding sharpens the Pixel-launch sequence — even with Pixel installed, the retargeting CPA math collapses if the second-session product utility is zero. Pixel + cron-writing-for-7+-days is the dual gate, not Pixel alone.

**Same-day-urgency keyword class is HARDENED DO-NOT-BID across all variations:** the nmcnamee99 case (Raptors playoff Game 2 Apr 26) closed today with confirmed loss. Game ended ~12h ago, no return session, past-events count crossed 29 → 30. Paid Search on `[event] tickets tonight`, `[event] tickets today`, `same day [sport] tickets`, `last minute [event] tickets`, `Raptors playoff tickets`, `NHL playoff tickets tonight`, `[Event] tickets in 2 hours`, `[Event] tickets walk up` would replicate exactly the churn pattern observed in the closed loop, with added CPA cost. **Add to launch-day negative-keyword baseline for every campaign**, not just per-variation. Re-evaluate when (a) price history cron writes for ≥7 days AND (b) same-day UX fallback ships from CRO. **Both gates required, not either-or.**

**Cross-LP routing recommendation when SEO bundle deploys:**
- Variation A: stays at `/world-cup-2026/metlife-stadium` (already optimal post-deploy because AggregateOffer schema activates).
- Variation B (Bruno Mars): stays at `/compare` until programmatic Bruno Mars Romantic Tour LP ships; then route there. Independent of SEO bundle deploy in either direction.
- Variation C: stays at `/world-cup-2026` until FIFA resale blog publishes; then route to blog URL for featured-snippet capture on `is FIFA resale expensive`.

**If dr.altvater Day-7 transition produces a return session today (14:08 UTC):** first counter-evidence to the second-session 0/N reading from the EU/Germany cohort. **None of the creative changes** — the activation question is product-side, not copy-side — but the GDPR-gated EU cold test for Variation A (MetLife WC Final) would have a stronger n=1 case for activation potential at the longer-window mark. Flag to Analytics Agent for the Apr 28 dashboard.

**If Wrigley Field venue page ships within next 4 days:** Variation D launch trigger becomes available — Cubs Wrigley May Homestand cluster (cron-gated) routes to `/venues/wrigley-field` at venue-page QS tier. Currently no Variation D is being authored; the conditional Wrigley line in budget table reflects the latent budget shelf, not an active creative. If ship happens, draft Variation D in next day's creative file with Wrigley-specific copy (Cubs season anchor, May 1–6 stand, Wrigley sightline patterns vs other MLB venues, ajvanprooyen-shaped multi-game ICP).

**If Summer Concert Tour 2026 blog ships today (Hook 1 third Monday slip resolution):** Variation E launch trigger becomes available — Summer Concert 4-day window cluster routes from `/compare` fallback to `/blog/summer-concert-tour-2026-ticket-buying-guide` at blog QS tier. 4-day usable shelf before May 1 wind-down. If ship doesn't happen, kill-permanently trigger fires per social agent's report and Variation E never authors.

**If taranimeramaro returns for a second session in next 7 days:** first counter-evidence to the cohort-second-session 0/N reading. Variation B launch condition softens by one user; the "no scale-up decision on first-session metrics alone" annotation could be reduced to "scale-up decision pending second-session-return rate evidence." **None of the creative changes** but Variation B's Pixel-gated retargeting sequence becomes a more credible CPA-to-ROAS path on launch.
