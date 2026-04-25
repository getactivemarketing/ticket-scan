# Ad Creative — 2026-04-25
## Angles: MetLife Stadium World Cup Final 85-Day Anchor (NEW LEAD), FIFA 38/58 / $97 Median (REFRESH), Summer Concert 6-Day Window Close (REFRESH)

_3 variations for A/B testing. Driven by today's three new/refreshed hooks: (1) **The July 19, 2026 World Cup Final at MetLife Stadium is 85 days out today.** Today's content commit (`2617882`, 06:18 UTC) shipped a complete venue-page refresh into production: 9 specific sections mapped to FIFA Cat 1–4 + Coaches Club + MetLife Suites, soccer-config sightline geometry, current $150 resale floor, and the Taylor Swift Eras Tour pricing benchmark ($1,500–$5,000+ across 5 sold-out 2023 nights). **First content-side prod LP unlock in 9 days** — Variation A routes directly to `/world-cup-2026/metlife-stadium`, not the WC hub fallback. (2) FIFA group-stage dataset expanded to **38/58 matches** with FIFA most-expensive ratio holding at 65.5% (was 66.7% on 34/51) and **median US-venue spread widening from $94 → $97**. Stable ratio on a growing dataset = strongest possible validation of the headline claim. (3) Apr 24 Variation C (summer concert "7-day window") sharpens to a **6-day window** — Pollstar evergreen unchanged, countdown one day shorter._

_Apr 24 Variation A (Chase Center G3/G4 Same-Section Spread) is **DEMOTED** to maintained-tactical with 48h residual through Apr 27 Monday G4. Today's MetLife Final angle takes the lead slot — different mechanic than the typical "tactical window expires" rotation: the demotion is driven by today's content-deployed LP unlock that shifts paid-readiness on a 7-keyword cluster simultaneously, making MetLife the highest-quality LP in the entire campaign portfolio (and the only one that actually deployed in the last 9 days). Apr 23 Variation A (Cubs Wrigley May Homestand) is **MAINTAINED unchanged** — 6 days to opener, still cron-gated. Apr 23 Variation B (TM vs SG Fee Flip) is **MAINTAINED unchanged** — TM-vs-SG fees blog **Day 2 unpublished**, LP still `/compare` fallback. Apr 22 Variation C (FIFA Mexico/Canada counter-flip) is maintained unchanged. Apr 21 Variation C (Dashboard Search Unlock) remains gated on `/dashboard/layout.tsx` deploy (Day 4)._

_Testing framework: 1 variable at a time. Run each variant minimum 3 days or 100 clicks. Winner scales; loser gets replaced. Product-truth gates applied: "price drop alerts" demoted from headlines (81/81 null target_price, full-pagination confirmed 2 days running), "track prices every 4 hours" banned entirely (dead cron Day 18), all claims verified deliverable via `/world-cup-2026/metlife-stadium`, `/world-cup-2026`, `/compare`, or published blogs only._

_**Launch condition (all variants):** The post-signup UX audit must land BEFORE any of these go live. Analytics today promoted the audit to "ship this week — not next" after ggri73 confirmed Day 3 non-activator + Email 1 eligible simultaneously (5/8 candidate rate, 0/3 surge-cohort second-day activations). Variation A is the first variation in this campaign portfolio that is **NOT LP-gated** — `/world-cup-2026/metlife-stadium` is live as of today's commit. Variation B is gated on publish of the TM-vs-SG blog for optimal LP routing (still `/compare` fallback). Variation C has no LP gate but is Pixel-gated on Meta for retargeting. **None of these should go live before the cron + audit gates clear; the LP question is no longer a Variation A blocker, but the activation-leak question still is.**_

---

### Variation A — World Cup Final at MetLife: 85 Days, $150 Floor, and the Eras Tour Benchmark

**Google Search Ad:**
```
Headline 1: World Cup Final at MetLife — 85 Days
Headline 2: $150 Resale Floor and Climbing
Headline 3: 9 Sections, FIFA Cat 1-4, Compared
Description 1: July 19, 2026. World Cup Final at MetLife Stadium. We mapped all 9 viable section groupings to FIFA Categories 1-4 + Coaches Club + Suites with soccer-config sightlines (which 100-level sections sit behind the goal lines vs along the side).
Description 2: Reference: Taylor Swift played MetLife five sold-out 2023 nights at $1,500-$5,000+ resale. Final demand will be on a different planet. Compare FIFA Resale, SeatGeek, StubHub. Free.
```
- **Final URL:** https://www.ticketscan.io/world-cup-2026/metlife-stadium *(deployed today, commit `2617882`)*
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
  - **AVOID** blanket exact match on `metlife stadium tickets` — cross-contaminates NFL (Giants/Jets) and concert intent (different price math, different ICP). Stick to soccer/Final/World Cup-qualified variants.
- **Geo:** NYC DMA primary (Manhattan + Brooklyn + Queens + Bronx + Staten Island) +25%. Greater NJ + CT + Long Island +20%. Philadelphia + DC +10% (drive-in radius for a Final). National at base (Final has out-of-market and international demand). Soft positive bid on Mexico CDMX/MTY +5%, Canada Toronto/Vancouver +5% (national-team supporter geos with US travel propensity).
- **Device:** Mobile +15% (research browses spike on mobile; final purchase often desktop). Desktop holds for evening/weekend research window.
- **Dayparting:** Continuous — World Cup Final research is high-intent and spreads evenly. Slight evening (7–11pm ET) lift across all DMAs.

**Meta Ad:**
```
Primary text: 85 days to the World Cup Final at MetLife Stadium. We refreshed the venue page this morning. Used to be three generic chunks — field, mezz, upper. Now: nine specific sections mapped to FIFA Categories 1 through 4, plus Coaches Club and the MetLife Suites. Soccer-config sightlines noted (which 100-level sections sit behind the goal lines for the soccer pitch vs the regular football field). Reference for what big-event resale at this stadium actually does: Taylor Swift's Eras Tour played MetLife five sold-out 2023 nights at $1,500 to $5,000+ per ticket. The World Cup Final is a once-in-a-generation North American event. Demand will make Eras Tour pricing look reasonable. Current resale floor: $150. With 85 days to go.
Headline: World Cup Final, MetLife, $150 Floor
Description: 9 sections mapped, FIFA Cat 1-4. Free.
```
- **CTA button:** Learn More
- **Landing:** https://www.ticketscan.io/world-cup-2026/metlife-stadium *(deployed today)*
- **Audience:** US adults 25-55 NYC DMA + greater NJ/CT primary (NYC DMA + Long Island + Northern NJ + Westchester + CT). Soccer interest + World Cup interest + FIFA interest + MLS / Premier League / La Liga / Liga MX followers. **Eras Tour attendee lookalike** as a secondary audience — proxy for big-event-resale buyer comfort. Travel-to-sports-events behavior. **Exclude:** users under 21, "ticket broker" profession affinity, users who attended a MetLife event in last 30 days (reduces wasted impressions to recently-attended NFL/concert audiences who aren't in soccer Final mode).
- **Placements:** Feed, Stories, Reels. Exclude Audience Network.
- **Note:** This is the first paid creative in this campaign portfolio that lands on a **content-deployed venue-specific LP** rather than a comparison hub or fallback. The mechanical advantage: landing-experience score (Google) and quality-rank (Meta) both reward LP specificity to query intent — `world cup final tickets` → `/world-cup-2026/metlife-stadium` is materially closer-aligned than `world cup final tickets` → `/world-cup-2026` (hub) or `/compare` (generic). Expect QS lift in the 6.5–8 range vs 5–7 hub-routed equivalents. The AggregateOffer schema upgrade that would make $150 surface as structured-data rich result is still SEO-bundle-gated (Day 9), so the user-visible page is upgraded but the SERP rich-result eligibility upgrade isn't.

**Why this angle:** Three anchors that compound: (1) **MetLife is the single highest-intent World Cup venue keyword for the rest of 2026** — it hosts the Final, two semifinals, and four group-stage matches; the venue-name + "World Cup" combination is a top-5 World Cup query nationally. (2) **The Eras Tour comp is a unique-to-MetLife proof point** — no other US World Cup venue has a recent peer-event resale benchmark at this scale (SoFi Beyoncé/Taylor and Levi's Taylor are close, but MetLife had the longest run and clearest resale data trail). (3) **The $150 floor is a real, current, on-page number** — not a forecast or an analogy. Combining the three: a high-intent venue keyword + a unique credibility benchmark + a verified on-page price = the strongest possible alignment between paid copy and LP content in the entire campaign portfolio. The "85 days" countdown also makes this evergreen-with-decay through July 19 with weekly numbers refresh — same shelf-life pattern as the FIFA dataset variants but with a sharper end-date.

**Shelf life:** Evergreen through Final week (mid-July), with weekly numbers refresh. Retire the "85 days" framing as countdown shortens; rotate to "60 days," "30 days," "10 days" milestones with concurrent paid-budget escalation. Single-variant longest-shelf creative in the portfolio.

**Refresh trigger:** Weekly re-pull of MetLife Final resale floor across FIFA Resale + SeatGeek + StubHub + Vivid Seats. If floor moves >10%, swap new number into the ad shell. Monthly: rerun the Eras Tour comp framing — at 60 days out, may shift to a SoFi or Beyoncé Renaissance comp if those become more salient. Also: if SEO bundle ships, upgrade ad copy to call out structured-data $150 floor surfacing in Google ("see the $150 floor right in search") for an additional 2-week burst.

---

### Variation B — FIFA Resale: 38 of 58 Matches Most Expensive, Median Spread Now $97

**Google Search Ad:**
```
Headline 1: FIFA Resale: 38 of 58 Most Expensive
Headline 2: $97 Median US-Venue Gap (Up From $94)
Headline 3: Compare All 3 Before You Click Buy
Description 1: Updated World Cup 2026 resale data: we checked 58 group-stage matches across FIFA Official Resale, SeatGeek, and StubHub. FIFA's resale marketplace is the most expensive on 38 of 58 — 65.5% of the set. Median US-venue spread widened to $97, up from $94 last week.
Description 2: The "official" marketplace isn't always the cheapest — the pattern holds as the dataset grows. SoFi and MetLife group-stage inventory keeps creeping up. Compare FIFA Resale vs SeatGeek vs StubHub in one pass. Free.
```
- **Final URL:** https://www.ticketscan.io/world-cup-2026
- **Display path:** ticketscan.io/world-cup-2026/compare
- **Sitelinks:**
  - All 16 Stadiums → /world-cup-2026
  - **MetLife Final + Semis → /world-cup-2026/metlife-stadium** *(NEW — leverages today's deployed LP)*
  - Compare Any Event → /compare
  - How It Works → /how-it-works
- **Callouts:** "3 Resale Platforms", "Fees Included", "47 Days to Kickoff", "Free Comparison"
- **Match types:**
  - Exact: `fifa resale marketplace`, `fifa resale expensive`, `fifa resale vs stubhub`, `fifa resale vs seatgeek`, `world cup 2026 tickets compare`, `world cup 2026 resale`, `world cup 2026 ticket prices`
  - Phrase: `fifa resale 2026`, `world cup tickets stubhub`, `world cup tickets seatgeek`, `world cup resale comparison`, `where to buy world cup tickets 2026`, `world cup 2026 cheap tickets`, `is fifa resale expensive`
- **Geo:** US national primary. Bid adjustments: host-stadium metros (NYC/NJ for MetLife, LA for SoFi, Dallas for AT&T, Atlanta for Mercedes-Benz, Seattle for Lumen, SF for Levi's, Boston for Gillette, Philadelphia for Lincoln Financial, Houston for NRG, Kansas City for Arrowhead, Miami for Hard Rock) +20%. Secondary: Canada (Toronto + Vancouver) +10%, Mexico (national) +10%.
- **Device:** Mobile +5%. Research-heavy query, desktop converts well.
- **Dayparting:** Continuous. WC research spreads evenly; slight evening+weekend lift.

**Meta Ad:**
```
Primary text: Updated World Cup 2026 resale data. We checked 58 group-stage matches across FIFA's Official Resale marketplace, SeatGeek, and StubHub. On 38 of the 58, FIFA's marketplace was the most expensive. That's 65.5% — and the ratio hasn't moved as the dataset has grown from 51 matches last week to 58 this week. Median US-venue spread widened from $94 to $97 — SoFi and MetLife group-stage inventory is still creeping up. The "official" marketplace isn't always the cheapest. The pattern keeps validating. 47 days to kickoff. Compare before you click buy.
Headline: FIFA Resale Most Expensive on 38 of 58
Description: Compare FIFA, SeatGeek, StubHub. Free.
```
- **CTA button:** Learn More
- **Landing:** https://www.ticketscan.io/world-cup-2026
- **Audience:** US adults 25-55, soccer interest + World Cup interest + FIFA interest + MLS/Premier League/La Liga followers. Secondary: travel-to-sports-events behavior, season-ticket fans of any major sport (proxy for dedicated buyer). **Exclude:** users under 21 (can't lawfully resell themselves), users currently in-market for a specific group-stage host city (we'll retarget those via Google Search, not cold Meta), "ticket broker" profession affinity.
- **Placements:** Feed, Stories, Reels. Exclude Audience Network.
- **Note:** Same copy shell as Apr 24 Variation B (FIFA 34/51/$94), numbers-only refresh. 34/51 → 38/58; 66.7% → 65.5%; $94 → $97. Ratio stability within the 62–70% band on a growing sample is the strongest possible validation of the headline claim — earns a third week of paid spend with trivial refresh cost. **The `dateModified` field on any WC content will matter when the associated blog (Apr 22 FIFA data post) ships** — right now that blog is **Day 3 unpublished** and the schema stays out-of-date on prod. If the blog publishes this week, swap the LP from `/world-cup-2026` to the blog URL for QS uplift.

**Why this angle:** Apr 22 introduced "28/42 / 66.6% / $84" as the core comparison-tool proof for the World Cup bucket. Two weeks later, both numerator and denominator have grown three times (28→34→38, 42→51→58), the ratio has held inside a 1.2-percentage-point band (66.6% → 66.7% → 65.5%), and the median spread has widened by $13 cumulative. **This is the shape of a claim that's structurally true, not a coincidence** — and it earns a continued week of paid spend with trivial refresh cost. The alternative framings ("FIFA resale is expensive", "WC tickets compare") are saturated; the numbers-anchored headline is still the rarest form of WC comparison ad in the category. **Cross-reference advantage:** today's median creep ($94 → $97) is partly driven by SoFi + MetLife group-stage inventory, which is the same dataset feeding Variation A's MetLife page — natural narrative consistency between the two variations even though they target different keyword clusters.

**Shelf life:** Evergreen through WC kickoff (June 11) with weekly numbers refresh. Retire the "updated" positioning on Jun 4 (one week out) and shift to tactical last-mile pricing.

**Refresh trigger:** Weekly re-pull of the FIFA group-stage set. If ratio moves outside 62–70% band, rewrite copy. If ratio stays 65–68%, swap new numbers into the shell. Also: if either the TM-vs-SG fees blog or the FIFA resale blog publishes, reconsider the LP target (blog URL unlocks QS tier).

---

### Variation C — Six Days Left: Summer Concert Deep-Inventory Window Closes Friday

**Google Search Ad:**
```
Headline 1: Summer Concert Window: 6 Days Left
Headline 2: Billie + Kendrick + Tyler + Chappell
Headline 3: Compare Before the Curve Steepens
Description 1: Pre-show inventory for summer stadium tours peaks 8-10 weeks out and starts thinning at 6-7. Billie Eilish opens June 13. Kendrick and Tyler mid-June. Chappell Roan late June. The 6-week mark hits Friday May 1.
Description 2: Pollstar's Q1 average is $108.63 — 9% above last year, so the baseline is already elevated. Six days until the deep-inventory window closes. Compare Ticketmaster, SeatGeek, StubHub in one pass. Free, no account.
```
- **Final URL:** https://www.ticketscan.io/compare
- **Display path:** ticketscan.io/summer-2026
- **Sitelinks:**
  - Compare Any Event → /compare
  - How It Works → /how-it-works
  - World Cup 2026 → /world-cup-2026
  - **MetLife World Cup Final → /world-cup-2026/metlife-stadium** *(cross-route to today's deployed LP)*
- **Callouts:** "3 Platforms Compared", "Fees Included", "Pollstar +9% YoY", "Free, No Account"
- **Match types:**
  - Exact: `summer concert tickets 2026`, `cheapest summer concert tickets`, `when to buy summer concert tickets`, `billie eilish tickets`, `kendrick lamar tour tickets`, `tyler the creator tour tickets`, `chappell roan tickets`
  - Phrase: `summer concert ticket prices 2026`, `compare summer concert tickets`, `pre-show ticket window`, `concert ticket window 2026`, `when do concert tickets get cheaper`
  - **AVOID** broad match on artist names — high-intent users buy at Ticketmaster directly; we want comparison-curious browsers, not ready-to-buy fans. Phrase match catches the comparison intent without paying for direct-buy intent.
- **Geo:** US national primary. Slight bid lift on host metros for each of the four anchor tours (NYC, LA, Chicago, ATL, NashvilleLA, Houston, Boston, Philly) +10%.
- **Device:** Desktop +10% (research-heavy query). Mobile holds for evening browse.
- **Dayparting:** Continuous through May 1. Evening lift (7–11pm). Wind down all spend by 11:59pm May 1.

**Meta Ad:**
```
Primary text: Six days left in the summer concert deep-inventory window. Pre-show inventory for big stadium tours typically peaks 8 to 10 weeks out and starts thinning at 6 to 7. Billie Eilish opens June 13. Kendrick and Tyler are mid-June. Chappell Roan is late June. The 6-week mark for those tours hits this Friday, May 1. Pollstar's Q1 2026 average is $108.63 — already 9% above 2025. Buy this week or pay more next week. Compare Ticketmaster, SeatGeek, and StubHub in one pass before the curve steepens. Free, no account, fees included.
Headline: Six Days Until Prices Climb
Description: Compare 3 platforms before the window closes.
```
- **CTA button:** Learn More
- **Landing:** https://www.ticketscan.io/compare
- **Audience:** US adults 22-45, music interest + concert-attendee behavior + festival-goer + Billie Eilish OR Kendrick Lamar OR Tyler the Creator OR Chappell Roan interest. Secondary: Pollstar/concert-news-source readers, Spotify/Apple Music heavy-user signal proxies. **Exclude:** users under 21, "music industry" profession affinity (already insiders, won't comparison-shop), users currently in-market for a specific Final or Group-Stage WC match (different intent stack).
- **Placements:** Feed, Stories, Reels. Exclude Audience Network.
- **Note:** Same copy shell as Apr 24 Variation C (7-day window) and Apr 19 Variation B (Pollstar evergreen), countdown one day shorter. Friday May 1 is the wind-down — cross-campaign consistency with Cubs opener date (also May 1), which is coincidence but useful: both campaigns wrap up on the same calendar inflection, simplifying budget reallocation on May 2 (post-Cubs-cron-deadline + post-window-close). If cron writes by May 1, May 2 is also the natural launch date for full Cubs paid; if cron doesn't write, May 2 is the "last warning" day before the Cubs window starts producing zero-data event-day misses.

**Why this angle:** A 6-day window is the sharpest possible time-bounded CTA without crossing into urgency-spam territory. Pollstar's $108.63 + 9% YoY is industry-cited data, not a marketing-team estimate, which gives the headline statistical credibility. Four artist names creates four matchable interest audiences for Meta, but the copy doesn't promise specific tour pricing (which would be a claim-truth risk given dynamic pricing volatility). The window close date being identical to the Cubs opener creates an internal narrative consistency point that paid-team-only sees but that simplifies budget rotation on May 2 — wrapping two campaigns on the same date is operationally clean.

**Shelf life:** 6 days (through May 1, 11:59pm ET). Hard wind-down, no extension. May 2 onward: "buy now" framing with no window narrative becomes the evergreen replacement; the deep-inventory hook is structurally tied to the 6–7 week pre-show mark and won't re-validate until next year's tour cycle.

**Refresh trigger:** Daily countdown decrement only ("6 days" → "5 days" → ... → "1 day left"). No copy refresh otherwise. If any of the four anchor tours have a major price move (>15%) before May 1, swap that artist out of the headline-mention set; otherwise, the four-name framing carries through. If Pollstar publishes Q2 data before May 1, swap to the Q2 number — but Q2 data typically lags by 4-6 weeks so this is unlikely to land in window.

---

## Cross-Variation Notes

**LP Quality Stack (rank-ordered by paid-readiness today):**
1. **`/world-cup-2026/metlife-stadium`** — Variation A. Content-deployed today. 9-section breakdown + Eras Tour comp + $150 floor + Cat 1–4 mapping. Highest-quality LP in the portfolio.
2. **`/world-cup-2026`** — Variation B. WC hub. Generic but functional. AggregateOffer schema upgrade gated on SEO bundle deploy.
3. **`/compare`** — Variation C and most fallback variations. Generic comparison tool. Metadata + WebApp schema upgrade gated on SEO bundle deploy (Day 7).

**Ratio stability across the WC bucket:** Variation B's "65.5% on 38 of 58" is structurally consistent with Apr 22's 66.6% on 28/42, Apr 16's seed at 27/40 = 67.5%, and today's $97 median has now moved $13 higher than the seed $84. **The median creep is more important than the ratio stability** for cross-niche campaign work — it suggests dollar-denominated tightening of the comparison-tool ROI on a per-ticket basis, which is a real input to LTV math when paid eventually launches.

**Newsletter-cross-conversion angle deferred:** Apr 22–23 surge of 5 signups produced 0 newsletter subs (0/5 cross-conversion). Until CRO ships the post-signup newsletter surface, none of these variations should add a "join newsletter" secondary CTA — that path doesn't exist in production today. If/when it ships, all three variations should add a sitelink or callout for newsletter sign-up to capture top-of-funnel non-converters.

**Pixel-gated:** All Meta variations require Pixel install before retargeting layer activates. Cold-prospect creative is launchable without Pixel, but the retargeting follow-up sequence (which is where Meta's CPA math actually gets to ROAS-positive) is gated on Pixel + GDPR consent banner. Variation A's MetLife audience is the highest-LTV segment to start retargeting on once Pixel ships — Final-tickets ICP self-selects for high-spend tolerance.

**Cross-LP routing recommendation when SEO bundle deploys:**
- Variation A: stays at `/world-cup-2026/metlife-stadium` (already optimal post-deploy because AggregateOffer schema activates).
- Variation B: stays at `/world-cup-2026` until FIFA resale blog publishes; then route to blog URL for featured-snippet capture on `is FIFA resale expensive`.
- Variation C: stays at `/compare` until summer-concert blog publishes (Monday May 4 publish date per Content Hook 4); then route to blog URL.

**If any of awwhittington/mark.murdock activate tomorrow Apr 26:** the surge cohort's second-day activation rate moves from 0/3 to 1/3 or 2/3, which would meaningfully soften the candidate-non-activator hypothesis (5/8 candidate rate would adjust to 3-4/8 confirmed). **None of the creative changes** — the activation question is product-side, not copy-side — but the launch-decision math improves: a 50% confirmed-non-activator rate is a meaningfully different paid-acquisition prospect than a 62.5% rate. Flag to Analytics Agent for the Apr 26 dashboard.
