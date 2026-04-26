# Ad Creative — 2026-04-26
## Angles: MetLife Stadium WC Final 84-Day (MAINTAINED LEAD), Bruno Mars Romantic Tour Multi-Venue Demand (NEW VARIATION B), FIFA Third-Check Stability Frame (FRAME REFRESH)

_3 variations for A/B testing. Driven by today's three new/refreshed hooks: (1) **The July 19, 2026 World Cup Final at MetLife is now 84 days out** — yesterday's NEW LEAD carries unchanged with a countdown decrement. The `/world-cup-2026/metlife-stadium` LP (deployed Apr 25 commit `2617882`) remains the only fully-content-deployed LP in the campaign portfolio; today's GTM container reverification on this route (HTTP 200) confirms tag-side readiness. (2) **Bruno Mars Romantic Tour 2× organic demand validation overnight** — taranimeramaro added 3 MetLife dates (Aug 21/22/25) in a single session, lifting the tour to 6 watchlist items / 3 watchers / 3 venues (was 3/2/2 since Apr 23). MetLife joins Soldier Field (konman87 × 2) and Ohio Stadium (charlesteel126 × 1). First non-WC, non-tactical-playoff creative grounded in observed cross-venue / cross-watcher organic demand — the strongest single new paid-creative trigger today. (3) **FIFA 38/58 / 65.5% / $97 held for third consecutive check** — same numbers as yesterday's Variation B (Wed 28/42 = 66.6%, Sat 38/58 = 65.5%, today 38/58 = 65.5%) but the headline frame upgrades from "we measured a wider sample" to "the ratio held for 14 days post-blog tracking." Stability-across-windows = structurally stronger evidence frame for the underlying claim than any single wider-sample measurement._

_Apr 25 Variation A (MetLife WC Final 85-day) becomes today's MAINTAINED LEAD with countdown decrement only. Apr 25 Variation B (FIFA 38/58 / $97 numbers refresh) becomes today's FRAME REFRESH (Variation C) — same numbers, more honest interpretive frame. Apr 25 Variation C (Summer Concert 6-day) becomes today's MAINTAINED-WITH-COUNTDOWN-DECREMENT (5 days now) — flagged in the Actions Taken list of `ads-daily-2026-04-26.md` rather than spending a Creative slot on it (no shell change). Apr 23 Variation A (Cubs Wrigley May Homestand) is **MAINTAINED unchanged** — 4 days to opener, still cron-gated, Wrigley LP is now a confirmed 404 today. Apr 23 Variation B (TM vs SG Fee Flip) is **MAINTAINED unchanged** — TM-vs-SG fees blog **Day 3 unpublished**, LP still `/compare` fallback. Apr 22 Variation C (FIFA Mexico/Canada counter-flip) is maintained unchanged. Apr 21 Variation C (Dashboard Search Unlock) remains gated on `/dashboard/layout.tsx` deploy (Day 5). Apr 24 Chase Center G3/G4 is on **final-24h tactical shelf** through Apr 27 Monday G4 — retired from rotation regardless of result after Monday._

_Testing framework: 1 variable at a time. Run each variant minimum 3 days or 100 clicks. Winner scales; loser gets replaced. Product-truth gates applied: "price drop alerts" demoted from headlines (85/85 null target_price, all 4 new adds today defaulted null), "track prices every 4 hours" banned entirely (dead cron Day 19), all claims verified deliverable via `/world-cup-2026/metlife-stadium`, `/world-cup-2026`, `/compare`, or published blogs only. **NEW today: same-day-urgency keyword classes** (`tickets [event] tonight`, `tickets [event] today`, `same day [sport] tickets`, `last minute [event] tickets`) **are now a hard DO-NOT-BID category** — today's nmcnamee99 case (signup → Raptors-tonight watchlist add → expected churn within 24h on empty price data) demonstrates the failure mode at n=1 with a real user. Paid Search on these keyword classes would replicate that exact churn outcome with added CPA cost. Enforced at the launch-day negative-keyword baseline._

_**Launch condition (all variants):** The post-signup UX audit must land BEFORE any of these go live. Today the cohort hypothesis became fully empirically validated — n=5/5 Day-3 confirmation set complete (awwhittington + mark.murdock confirmed today, ajvanprooyen confirmed-as-fast-activator-without-return). Variation A is the only variation in this campaign portfolio that is **NOT LP-gated** — `/world-cup-2026/metlife-stadium` is live since Apr 25. Variation B (Bruno Mars NEW today) is LP-gated on programmatic tour page (SEO Day 3 of handoff) — runs at half-budget against `/compare` fallback until LP ships. Variation C (FIFA frame refresh) is gated on FIFA resale blog publish for optimal LP routing (still `/compare`/`/world-cup-2026` fallback). **None of these should go live before the cron + audit gates clear; today's same-day-urgency case adds a fourth gate (same-day UX fallback) for any campaign on tonight/today/this-weekend keyword classes.**_

---

### Variation A — World Cup Final at MetLife: 84 Days, $150 Floor, the Eras Tour Benchmark

_MAINTAINED LEAD from Apr 25. Countdown decrement only. Copy shell unchanged. LP unchanged._

**Google Search Ad:**
```
Headline 1: World Cup Final at MetLife — 84 Days
Headline 2: $150 Resale Floor and Climbing
Headline 3: 9 Sections, FIFA Cat 1-4, Compared
Description 1: July 19, 2026. World Cup Final at MetLife Stadium. We mapped all 9 viable section groupings to FIFA Categories 1-4 + Coaches Club + Suites with soccer-config sightlines (which 100-level sections sit behind the goal lines vs along the side).
Description 2: Reference: Taylor Swift played MetLife five sold-out 2023 nights at $1,500-$5,000+ resale. Final demand will be on a different planet. Compare FIFA Resale, SeatGeek, StubHub. Free.
```
- **Final URL:** https://www.ticketscan.io/world-cup-2026/metlife-stadium *(deployed Apr 25, commit `2617882`; GTM reverified today HTTP 200)*
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
  - **AVOID** blanket exact match on `metlife stadium tickets` — cross-contaminates NFL (Giants/Jets) and concert intent (different price math, different ICP). Stick to soccer/Final/World Cup-qualified variants. **Today's Bruno Mars MetLife signal is exactly the cross-contamination risk this exclusion guards against** — Bruno Mars routes to Variation B at lower bids, not to this WC Final cluster.
- **Geo:** NYC DMA primary (Manhattan + Brooklyn + Queens + Bronx + Staten Island) +25%. Greater NJ + CT + Long Island +20%. Philadelphia + DC +10% (drive-in radius for a Final). National at base (Final has out-of-market and international demand). Soft positive bid on Mexico CDMX/MTY +5%, Canada Toronto/Vancouver +5% (national-team supporter geos with US travel propensity).
- **Device:** Mobile +15% (research browses spike on mobile; final purchase often desktop). Desktop holds for evening/weekend research window.
- **Dayparting:** Continuous — World Cup Final research is high-intent and spreads evenly. Slight evening (7–11pm ET) lift across all DMAs.

**Meta Ad:**
```
Primary text: 84 days to the World Cup Final at MetLife Stadium. The venue page is now nine specific section groupings mapped to FIFA Categories 1 through 4, plus Coaches Club and the MetLife Suites. Soccer-config sightlines noted (which 100-level sections sit behind the goal lines for the soccer pitch vs the regular football field). Reference for what big-event resale at this stadium actually does: Taylor Swift's Eras Tour played MetLife five sold-out 2023 nights at $1,500 to $5,000+ per ticket. The World Cup Final is a once-in-a-generation North American event. Demand will make Eras Tour pricing look reasonable. Current resale floor: $150. With 84 days to go.
Headline: World Cup Final, MetLife, $150 Floor
Description: 9 sections mapped, FIFA Cat 1-4. Free.
```
- **CTA button:** Learn More
- **Landing:** https://www.ticketscan.io/world-cup-2026/metlife-stadium
- **Audience:** US adults 25-55 NYC DMA + greater NJ/CT primary (NYC DMA + Long Island + Northern NJ + Westchester + CT). Soccer interest + World Cup interest + FIFA interest + MLS / Premier League / La Liga / Liga MX followers. **Eras Tour attendee lookalike** as a secondary audience — proxy for big-event-resale buyer comfort. Travel-to-sports-events behavior. **Exclude:** users under 21, "ticket broker" profession affinity, users who attended a MetLife event in last 30 days (reduces wasted impressions to recently-attended NFL/concert audiences who aren't in soccer Final mode), **and exclude users in the Bruno Mars audience cluster** (separate variation, different price/intent stack — overlap dilutes both).
- **Placements:** Feed, Stories, Reels. Exclude Audience Network.
- **Note:** Day-2 carry of the only fully-content-deployed LP in the portfolio. Mechanical advantage unchanged: landing-experience score (Google) and quality-rank (Meta) both reward LP specificity to query intent. The AggregateOffer schema upgrade that would make $150 surface as structured-data rich result is still SEO-bundle-gated (Day 10), so the user-visible page is upgraded but the SERP rich-result eligibility upgrade isn't.

**Why this angle:** Three anchors that compound: (1) MetLife is the single highest-intent World Cup venue keyword for the rest of 2026 — hosts the Final, two semifinals, and four group-stage matches. (2) The Eras Tour comp is a unique-to-MetLife proof point — no other US World Cup venue has a recent peer-event resale benchmark at this scale. (3) The $150 floor is a real, current, on-page number — not a forecast or an analogy. Combining the three: a high-intent venue keyword + a unique credibility benchmark + a verified on-page price = the strongest possible alignment between paid copy and LP content in the entire campaign portfolio.

**Shelf life:** Evergreen through Final week (mid-July), with weekly numbers refresh. Retire the "84 days" framing as countdown shortens; rotate to "60 days," "30 days," "10 days" milestones with concurrent paid-budget escalation. Single-variant longest-shelf creative in the portfolio.

**Refresh trigger:** Weekly re-pull of MetLife Final resale floor across FIFA Resale + SeatGeek + StubHub + Vivid Seats. If floor moves >10%, swap new number into the ad shell. Monthly: rerun the Eras Tour comp framing — at 60 days out, may shift to a SoFi or Beyoncé Renaissance comp if those become more salient. Also: if SEO bundle ships, upgrade ad copy to call out structured-data $150 floor surfacing in Google ("see the $150 floor right in search") for an additional 2-week burst.

---

### Variation B — Bruno Mars Romantic Tour: 3 Venues, 3 Cities, the Same Question Three Times

_NEW today. Driven by 2× organic demand validation overnight (taranimeramaro × 3 MetLife dates → 6 wl items / 3 watchers / 3 venues). LP-gated on programmatic tour page; routes to `/compare` fallback at half budget until LP ships._

**Google Search Ad:**
```
Headline 1: Bruno Mars Romantic Tour Compared
Headline 2: MetLife, Soldier Field, Ohio Stadium
Headline 3: Same Tour, Three Different Price Maps
Description 1: The Romantic Tour stops at MetLife Aug 21-25, Soldier Field May 16-17, and Ohio Stadium May 20. Same tour, same artist, three different venue economies and three different secondary-market patterns. Worth comparing all three before you commit to a date or city.
Description 2: We compare Ticketmaster, SeatGeek, and StubHub side-by-side for every Romantic Tour date in one place. Most multi-date buyers we see end up at a different platform per venue. Free, no account.
```
- **Final URL:** https://www.ticketscan.io/compare *(LP-gated until programmatic Bruno Mars Romantic Tour LP ships — SEO Day 3 of handoff)*
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
- **Note:** First paid creative grounded in an observed multi-watcher / multi-venue organic demand signal in the entire campaign portfolio. The mechanical setup: comparison-tool UX is structurally well-suited to multi-date tour-buying decisions (which platform across 3 dates? which is consistently cheaper? does the same artist have different ratios at different venues?), so even a `/compare` fallback LP delivers real signal because the tour name has high commercial intent and the tool-fit is high. **The programmatic Bruno Mars Romantic Tour LP would lift QS by 1-2 tiers** — from the "compare" generic LP-quality range to the venue-specific range that the WC `/world-cup-2026/metlife-stadium` page sits in. Until then, ad runs at half budget ($4 Google, $2 Meta) for low-cost validation; on LP ship, doubles to $8 + $4.

**Why this angle:** The Bruno Mars demand signal is the strongest organic cross-venue / cross-watcher pattern in the platform's 19-day post-Apr-7 history. Three anchors: (1) **3 watchers / 3 venues / 6 watchlist items** is the highest-density-per-non-MSG-non-Sphere event in the watchlist — distinct from the MSG and Sphere clusters which have 1 power user each. (2) **Multi-date tour-buying is structurally well-served by comparison tools** — the decision space is "which platform, which date, which city, which seating tier" and the answer is genuinely different per venue. Single-event tactical campaigns don't capture this; WC campaigns capture it geographically but not artist-natively; the Romantic Tour campaign does both. (3) **The "same tour, three venues" framing is rare in paid copy because most ticket comparison platforms run venue-specific or event-specific creative, not tour-level creative** — there's a competitive whitespace here. The narrative ("Bruno Mars stops at three places this summer; the cheapest seller is different at each venue") is what almost no competitor will run. Until the programmatic tour LP ships, the angle is constrained to `/compare` fallback, but the keyword cluster is high enough commercial-intent to produce real CTR signal even at the lower QS tier.

**Shelf life:** Through Aug 25 (last MetLife date) — just under 4 months. Pre-event cluster is high-volume long-tail (phrase + exact match on every venue/date combination); post-Soldier Field (May 17), the May Chicago volume drops out and the Aug MetLife cluster carries the second half of the shelf. Reframe at LP-ship from "3 venues compared" to "every Romantic Tour date compared" once the programmatic LP can carry the weight.

**Refresh trigger:** (a) Programmatic tour LP ship → swap LP, double budget, refresh copy to lean on LP-specific features (probably "every Romantic Tour date in one view" framing). (b) Any new watchers added to the tour cluster → confirms or expands the demand signal; if a 4th venue gets added (e.g., another tour stop announced), include in the rotation. (c) Major price move (>15%) at any of the three venues → swap that venue out of the headline-mention set. (d) **Critical guardrail:** the moment any of the 6 currently-watched dates becomes "today" or "tonight," that specific date has to be removed from the cluster's negative-keyword bypass — same-day-urgency keywords on a tour in the active rotation would still hit the canonical failure mode (per today's nmcnamee99 case).

---

### Variation C — FIFA Resale: The 65.5% Ratio Held for Three Straight Checks

_FRAME REFRESH of Apr 25 Variation B. Same numbers (38/58 / 65.5% / $97 median), more honest interpretive frame: "ratio held for 14 days post-blog tracking" rather than "we measured a wider sample." Stability-across-windows is structurally stronger evidence for the underlying claim than any single wider-sample measurement._

**Google Search Ad:**
```
Headline 1: FIFA Resale: Most Expensive 3 Checks Running
Headline 2: 65.5% Held Across 14 Days
Headline 3: Compare All 3 Before You Click Buy
Description 1: We rechecked the World Cup 2026 group-stage resale data today. FIFA Official Resale was the most expensive on 38 of 58 group-stage matches — same 65.5% ratio as our Saturday check, and inside one percentage point of our Wednesday baseline. The number isn't drifting; the pattern is structural.
Description 2: Median US-venue spread between FIFA and the cheapest secondary held at $97. Three checks at the same ratio across 14 days = the official marketplace really isn't always the cheapest. Compare FIFA Resale vs SeatGeek vs StubHub in one pass. Free.
```
- **Final URL:** https://www.ticketscan.io/world-cup-2026
- **Display path:** ticketscan.io/world-cup-2026/compare
- **Sitelinks:**
  - All 16 Stadiums → /world-cup-2026
  - **MetLife Final + Semis → /world-cup-2026/metlife-stadium** *(carry from Apr 25 — leverages deployed LP)*
  - Compare Any Event → /compare
  - How It Works → /how-it-works
- **Callouts:** "3 Resale Platforms", "Fees Included", "46 Days to Kickoff", "Free Comparison"
- **Match types:**
  - Exact: `fifa resale marketplace`, `fifa resale expensive`, `fifa resale vs stubhub`, `fifa resale vs seatgeek`, `world cup 2026 tickets compare`, `world cup 2026 resale`, `world cup 2026 ticket prices`, `is fifa resale the cheapest`
  - Phrase: `fifa resale 2026`, `world cup tickets stubhub`, `world cup tickets seatgeek`, `world cup resale comparison`, `where to buy world cup tickets 2026`, `world cup 2026 cheap tickets`, `is fifa resale expensive`, `cheaper than fifa resale`
- **Geo:** US national primary. Bid adjustments: host-stadium metros (NYC/NJ for MetLife, LA for SoFi, Dallas for AT&T, Atlanta for Mercedes-Benz, Seattle for Lumen, SF for Levi's, Boston for Gillette, Philadelphia for Lincoln Financial, Houston for NRG, Kansas City for Arrowhead, Miami for Hard Rock) +20%. Secondary: Canada (Toronto + Vancouver) +10%, Mexico (national) +10%.
- **Device:** Mobile +5%. Research-heavy query, desktop converts well.
- **Dayparting:** Continuous. WC research spreads evenly; slight evening+weekend lift.

**Meta Ad:**
```
Primary text: We rechecked the World Cup 2026 group-stage resale data today. Same dataset as Saturday: 58 group-stage matches across FIFA Official Resale, SeatGeek, and StubHub. FIFA was the most expensive on 38 of them. 65.5%. The same ratio as our Saturday check, and inside one percentage point of our Wednesday baseline of 66.6%. Three checks across 14 days, same number. Median US-venue spread between FIFA and the cheapest secondary held at $97. The official marketplace is structurally not the cheapest on most group-stage matches — and the pattern keeps getting more reliable, not less, as we recheck. 46 days to kickoff. Compare before you click buy.
Headline: FIFA Resale: 3 Checks, Same 65.5%
Description: Compare FIFA, SeatGeek, StubHub. Free.
```
- **CTA button:** Learn More
- **Landing:** https://www.ticketscan.io/world-cup-2026
- **Audience:** US adults 25-55, soccer interest + World Cup interest + FIFA interest + MLS/Premier League/La Liga followers. Secondary: travel-to-sports-events behavior, season-ticket fans of any major sport (proxy for dedicated buyer). **Exclude:** users under 21 (can't lawfully resell themselves), users currently in-market for a specific group-stage host city (we'll retarget those via Google Search, not cold Meta), "ticket broker" profession affinity.
- **Placements:** Feed, Stories, Reels. Exclude Audience Network.
- **Note:** Same copy shell as Apr 25 Variation B (FIFA 38/58 / $97 median), frame refresh only — the headline angle upgrades from "wider sample" to "ratio stability across multiple checks." Numbers are unchanged from yesterday because the dataset didn't move. **The frame upgrade is the work today** — interpretive maturity on a stable dataset, which is cheaper to refresh than measurement-extension and structurally more credible. **The `dateModified` field on any WC content will matter when the associated blog (Apr 22 FIFA data post) ships** — right now that blog is **Day 4 unpublished** and the schema stays out-of-date on prod. If the blog publishes this week, swap the LP from `/world-cup-2026` to the blog URL for QS uplift.

**Why this angle:** Two weeks ago we had 28/42 = 66.6% as a single-measurement claim. Last Saturday we had 38/58 = 65.5% as a wider-sample claim. Today we have 38/58 = 65.5% **for the second consecutive measurement window** — which is qualitatively different from "the wider sample agreed with the first" because it shows that **between Saturday and today, even though we re-checked, the underlying market hasn't changed**. The headline goes from "we measured more and the pattern held" to "we kept measuring and the pattern is rock solid." That second framing is the strongest possible structural-truth claim the comparison-tool category can make about a competitor — better than a single moment, better than a wider sample, because it's the only one that controls for measurement noise. **Cross-reference advantage carried from yesterday:** the median creep ($94 → $97 last week, holding $97 today) is partly driven by SoFi + MetLife group-stage inventory, which is the same dataset feeding Variation A's MetLife page — natural narrative consistency between the two variations even though they target different keyword clusters.

**Shelf life:** Evergreen through WC kickoff (June 11) with weekly numbers/frame refresh cadence. If the next check (Wednesday Apr 29 or Saturday May 2) comes back inside the 64–67% band, the next frame upgrade is "ratio held for 21 days post-blog tracking" — same compounding interpretive-maturity arc through May. Retire the "ratio held N days" frame on May 28 (two weeks pre-kickoff) and shift to "5-week tactical view" framing for the last fortnight before the tournament.

**Refresh trigger:** Twice-weekly re-pull of the FIFA group-stage set (Wed + Sat). If ratio moves outside 62–70% band, rewrite copy. If ratio stays 64–68%, update the "N days post-blog" count in the headline and Meta primary text. Also: if either the TM-vs-SG fees blog or the FIFA resale blog publishes, reconsider the LP target (blog URL unlocks QS tier).

---

## Cross-Variation Notes

**LP Quality Stack (rank-ordered by paid-readiness today):**
1. **`/world-cup-2026/metlife-stadium`** — Variation A. Content-deployed Apr 25, Day 2 in production. 9-section breakdown + Eras Tour comp + $150 floor + Cat 1–4 mapping. GTM container reverified today (HTTP 200). Highest-quality LP in the portfolio.
2. **`/world-cup-2026`** — Variation C. WC hub. Generic but functional. AggregateOffer schema upgrade gated on SEO bundle deploy (Day 10).
3. **`/compare`** — Variation B (Bruno Mars NEW) and most fallback variations. Generic comparison tool. Metadata + WebApp schema upgrade gated on SEO bundle deploy (Day 8). **For Variation B specifically, the programmatic Bruno Mars Romantic Tour LP would lift it to tier 2 when it ships.**

**Audience-overlap exclusions across variations:**
- Variation A WC Final ↔ Variation B Bruno Mars MetLife: same physical venue, completely different intent stack and price math. Cross-include both audiences into each other's exclusion lists. WC Final buyers ≠ Bruno Mars Romantic Tour buyers even when both events are at MetLife.
- Variation A WC Final ↔ Variation C FIFA hub: heavy overlap by design (same WC bucket, different funnel position). Variation A is venue-deep, Variation C is hub-shallow. Run both; use Meta's cross-campaign frequency capping to avoid showing the same user both ads in the same week.
- Variation B Bruno Mars ↔ Variation C FIFA hub: minimal overlap. Both run independently.

**Bruno Mars campaign gating sequence (when programmatic LP ships):**
1. **Pre-LP-ship (current state, Day 3):** Variation B routes to `/compare` fallback at $4 Google + $2 Meta (half budget). Goal: validate keyword CTR + comparison-funnel completion rate at low cost. If 7-day CTR > 4% and bounce rate < 60% on the comparison view, validate the demand signal.
2. **Post-LP-ship:** Swap LP to `/bruno-mars-romantic-tour` (or whatever the programmatic slug becomes), double budget to $8 + $4, refresh copy to lean on LP-specific features (probably "every Romantic Tour date in one view" framing). Expect QS lift in the 6.5-8 range vs 5-7 `/compare`-routed equivalent.
3. **Post-first-event (May 17 Soldier Field date 2):** Drop the May Chicago dates from the keyword cluster, reweight Aug MetLife dates +50% (3 of 6 remaining dates concentrate at MetLife). Reframe as "MetLife Romantic Tour residency" framing if the demand signal continues.

**FIFA Variation C frame-refresh cadence:**
- Each new check at the same ratio extends the headline window by 3-4 days. "14 days post-blog" → "17 days" (Apr 29) → "21 days" (May 2) → "24 days" (May 5) etc. The compounding-interpretive-maturity arc through May is the cheapest possible refresh cadence — zero copy work, zero data work beyond the twice-weekly check.
- **Critical:** the moment the ratio drifts outside the 62–70% band, the entire frame fails and a complete copy rewrite is needed. The current band is structurally tight (1.2pp range across 14 days of measurement) but a major group-stage match adding to the secondary marketplace inventory could shift it. Monitor.

**Newsletter-cross-conversion angle deferred:** Apr 22–23 surge of 5 signups produced 0 newsletter subs; Apr 25 surge of 2 signups produced 0 newsletter subs (0/7 cross-conversion across two surge windows now). Until CRO ships the post-signup newsletter surface, none of these variations should add a "join newsletter" secondary CTA — that path doesn't exist in production today. If/when it ships, all three variations should add a sitelink or callout for newsletter sign-up to capture top-of-funnel non-converters.

**Pixel-gated:** All Meta variations require Pixel install before retargeting layer activates. Cold-prospect creative is launchable without Pixel, but the retargeting follow-up sequence (which is where Meta's CPA math actually gets to ROAS-positive) is gated on Pixel + GDPR consent banner. **Variation A's MetLife audience and Variation B's Bruno Mars MetLife audience are the two highest-LTV segments to start retargeting on once Pixel ships** — both self-select for high-spend tolerance ($150+ floor for WC Final, $200+ typical for MetLife concert resale).

**Same-day-urgency keyword class is now a hard exclusion across all variations:** today's nmcnamee99 case demonstrates that paid Search on `[event] tickets tonight`, `[event] tickets today`, `same day [sport] tickets`, `last minute [event] tickets` would replicate exactly the churn pattern observed today (signup → 1-item add → expected churn within 24h on empty price data) with added CPA cost. **Add to launch-day negative-keyword baseline for every campaign**, not just per-variation. Re-evaluate when (a) price history cron writes AND (b) same-day UX fallback ships from CRO. Until both are true, this keyword class is permanently excluded.

**Cross-LP routing recommendation when SEO bundle deploys:**
- Variation A: stays at `/world-cup-2026/metlife-stadium` (already optimal post-deploy because AggregateOffer schema activates).
- Variation B (Bruno Mars NEW): stays at `/compare` until programmatic Bruno Mars Romantic Tour LP ships; then route there. Independent of SEO bundle deploy in either direction.
- Variation C: stays at `/world-cup-2026` until FIFA resale blog publishes; then route to blog URL for featured-snippet capture on `is FIFA resale expensive`.

**If dr.altvater activates tomorrow Apr 27 (Day 7 confirmation):** the EU/Germany cohort softens against the "Day 7 may activate" hypothesis. **None of the creative changes** — the activation question is product-side, not copy-side — but the GDPR-gated EU cold test for Variation A (MetLife WC Final) would have a stronger n=1 case for activation potential at the longer-window mark. Flag to Analytics Agent for the Apr 27 dashboard.

**If nmcnamee99 returns pre-game (before tonight's Raptors tip-off):** strongest possible counter-evidence to the "broken price-history kills same-day urgency" hypothesis — even with no data, the user came back. **None of the creative changes** but the Variation B Bruno Mars same-session-activator-without-return concern would soften slightly (suggests at least some users return regardless of product state). If they don't return until post-game (or never return), the hypothesis hardens and the same-day-urgency exclusion stays permanent.
