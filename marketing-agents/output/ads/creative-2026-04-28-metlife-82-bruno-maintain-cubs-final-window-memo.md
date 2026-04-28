# Ad Creative — 2026-04-28
## Angles: MetLife Stadium WC Final 82-Day (MAINTAINED LEAD, Day 4), Bruno Mars Romantic Tour Multi-Venue (MAINTAINED Variation B, Day 3), Cubs Wrigley Final-Window Memo (NEW Variation C — campaign-ready spec, NOT launchable)

_3 variations driven by today's three structural findings: (1) **The dr.altvater Email 2 transition LANDED at Apr 27 14:08 UTC and the cron did not send.** Predicted-and-observed both ways; the drip cron is now confirmed dead by direct deterministic test, not just inferred dead from absence of writes. **For paid creative:** every "we send price drop alerts to your email" claim is now refuted by direct test on the email-side delivery surface, in addition to the 21-day silence on the price-data side. The alert-promise keyword class joins the same-day-urgency class as DO-NOT-BID hardened with closed-loop loss confirmation. (2) **Cubs hard write deadline tightens to +2 days (Apr 30 23:59 UTC); Wrigley LP STILL 404 (Day 5 of content gap)**. The conditional Wrigley paid-budget shelf flagged yesterday now has a 48-hour usable runway. If Wrigley LP ships within 48h AND price-history cron writes by Apr 30, the Cubs cluster paid case becomes deployable for the May 1–6 in-stand window. If either gate fails, the conditional shelf collapses entirely on May 1 — paid would be acquiring users for events already in progress, the failure mode the same-day-urgency hardening is designed to avoid. **Variation C today is NOT a launchable angle**; it is a campaign-ready spec for the 48h Wrigley LP window, structured as a "ready-to-deploy-when-X-Y-Z-clear" artifact with explicit DO-NOT-LAUNCH gates listed. (3) **Summer Concert Tour 2026 blog STILL 404; Hook 1 third Monday slip kill-trigger fires today** per yesterday's social agent plan. Variation D Summer Concert blog-LP routing is functionally dead; only the maintained-with-decrement `/compare` fallback for the head-term keyword survives the 3-day shelf to May 1. The kill-trigger removes one possible LP-build resolution; the calendar removes the angle entirely in 3 days._

_Apr 27 Variation A (MetLife WC Final 83-day) becomes today's MAINTAINED LEAD with countdown decrement only (82 days). Apr 27 Variation B (Bruno Mars Romantic Tour Multi-Venue) is **MAINTAINED unchanged in copy** with a hardened launch-condition annotation re: the deterministic drip-cron-dead test. Apr 27 Variation C (FIFA Resale Stability fourth-check) is **PAUSED for today's rotation slot** — no fresh data pull, frame and numbers carry forward unchanged; today's rotation slot pivots to the Cubs Wrigley Final-Window Memo because the time fuse on that case is materially shorter (48h vs evergreen for FIFA stability). Apr 25 Variation C (Summer Concert window) is **MAINTAINED-WITH-DECREMENT (3 days now)** plus today's kill-trigger annotation flagged in the Actions Taken list of `ads-daily-2026-04-28.md` rather than spending a Creative slot on it. Apr 23 Variation A (Cubs Wrigley May Homestand cron-gated launch) is **REPLACED today by Variation C below** — the Cubs Wrigley Final-Window Memo subsumes the prior Cubs cron-gated creative and adds the explicit 48h LP-build fuse + DO-NOT-LAUNCH gate documentation. Apr 23 Variation B (TM vs SG Fee Flip) is **MAINTAINED unchanged** — TM-vs-SG fees blog **Day 5 unpublished**, LP still `/compare` fallback. Apr 22 Variation C (FIFA Mexico/Canada counter-flip) is maintained unchanged. Apr 21 Variation C (Dashboard Search Unlock) remains gated on `/dashboard/layout.tsx` deploy (Day 7)._

_Testing framework: 1 variable at a time. Run each variant minimum 3 days or 100 clicks. Winner scales; loser gets replaced. Product-truth gates applied: "price drop alerts" demoted from headlines (85/85 null target_price, no new adds in 24h, **drip cron confirmed dead by deterministic test today**), "track prices every 4 hours" banned entirely (dead cron Day 21), "we'll email you when prices drop" banned entirely (drip cron confirmed dead today), all claims verified deliverable via `/world-cup-2026/metlife-stadium`, `/world-cup-2026`, `/compare`, or published blogs only. **NEW today: alert-promise keyword classes join same-day-urgency as HARDENED DO-NOT-BID** — the drip-cron deterministic-test failure (dr.altvater Email 2 threshold crossed Apr 27 14:08 UTC, 0 sends) refutes the alert-delivery claim by direct test on the email side. Adjacent classes (`price drop alert email`, `ticket price alert app`, `concert ticket price alert`, `send me ticket alerts`) inherit the same exclusion. **Re-evaluate when (a) cron writes for ≥7 days AND (b) drip cron sends a deterministic test email that lands in inbox** — both gates required, not either-or._

_**Launch condition (all variants, hardened today):** (a) The post-signup UX audit must land BEFORE any of these go live — n=7 Day-4+ non-returner set, n=9 tomorrow when Apr 25 cohort crosses Day 4, lilianamasyrubi Day-0 starting the n=8 replication in real time today. (b) Variation A is the only variation in this campaign portfolio that is **NOT LP-gated** — `/world-cup-2026/metlife-stadium` is live since Apr 25. (c) Variation B is LP-gated on programmatic tour page (SEO Day 5 of handoff) — runs at half-budget against `/compare` fallback until LP ships. (d) Variation C is **TRIPLE-GATED** on (i) Wrigley LP build within 48h, (ii) price-history cron writes by Apr 30, (iii) same-day UX fallback ships from CRO; today's variant is a campaign-ready spec NOT a launchable angle. (e) None of these should go live before the cron + audit + drip-write gates clear; today's deterministic drip-cron-dead test is a NEW launch gate added to the existing list._

---

### Variation A — World Cup Final at MetLife: 82 Days, $150 Floor, the Eras Tour Benchmark

_MAINTAINED LEAD from Apr 25/26/27, Day 4 of carry. Countdown decrement only (83 → 82). Copy shell unchanged. LP unchanged._

**Google Search Ad:**
```
Headline 1: World Cup Final at MetLife — 82 Days
Headline 2: $150 Resale Floor and Climbing
Headline 3: 9 Sections, FIFA Cat 1-4, Compared
Description 1: July 19, 2026. World Cup Final at MetLife Stadium. We mapped all 9 viable section groupings to FIFA Categories 1-4 + Coaches Club + Suites with soccer-config sightlines (which 100-level sections sit behind the goal lines vs along the side).
Description 2: Reference: Taylor Swift played MetLife five sold-out 2023 nights at $1,500-$5,000+ resale. Final demand will be on a different planet. Compare FIFA Resale, SeatGeek, StubHub. Free.
```
- **Final URL:** https://www.ticketscan.io/world-cup-2026/metlife-stadium *(deployed Apr 25, commit `2617882`; GTM healthy on this route HTTP 200, container ID confirmed across 17+ routes)*
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
Primary text: 82 days to the World Cup Final at MetLife Stadium. The venue page is now nine specific section groupings mapped to FIFA Categories 1 through 4, plus Coaches Club and the MetLife Suites. Soccer-config sightlines noted (which 100-level sections sit behind the goal lines for the soccer pitch vs the regular football field). Reference for what big-event resale at this stadium actually does: Taylor Swift's Eras Tour played MetLife five sold-out 2023 nights at $1,500 to $5,000+ per ticket. The World Cup Final is a once-in-a-generation North American event. Demand will make Eras Tour pricing look reasonable. Current resale floor: $150. With 82 days to go.
Headline: World Cup Final, MetLife, $150 Floor
Description: 9 sections mapped, FIFA Cat 1-4. Free.
```
- **CTA button:** Learn More
- **Landing:** https://www.ticketscan.io/world-cup-2026/metlife-stadium
- **Audience:** US adults 25-55 NYC DMA + greater NJ/CT primary (NYC DMA + Long Island + Northern NJ + Westchester + CT). Soccer interest + World Cup interest + FIFA interest + MLS / Premier League / La Liga / Liga MX followers. **Eras Tour attendee lookalike** as a secondary audience — proxy for big-event-resale buyer comfort. Travel-to-sports-events behavior. **Exclude:** users under 21, "ticket broker" profession affinity, users who attended a MetLife event in last 30 days (reduces wasted impressions to recently-attended NFL/concert audiences who aren't in soccer Final mode), **and exclude users in the Bruno Mars audience cluster** (separate variation, different price/intent stack — overlap dilutes both).
- **Placements:** Feed, Stories, Reels. Exclude Audience Network.
- **Note:** Day-4 carry of the only fully-content-deployed LP in the portfolio. Mechanical advantage unchanged: landing-experience score (Google) and quality-rank (Meta) both reward LP specificity to query intent. The AggregateOffer schema upgrade that would make $150 surface as structured-data rich result is still SEO-bundle-gated (Day 12), so the user-visible page is upgraded but the SERP rich-result eligibility upgrade isn't. **Today's drip-cron deterministic-test failure doesn't change Variation A creative directly** — the WC Final is a high-research, multi-week-decision-cycle purchase where users are *expected* to return multiple times before buying. With cron silent AND drip cron confirmed dead, even Variation A's high-quality LP loses second-session value AND post-signup nurture value. **The launch gate moves from "MetLife page deployed AND second-session UX has price data to show → ready" (Apr 27 framing) to "MetLife page deployed AND second-session UX has price data AND drip cron sends test email that lands in inbox → ready" (Apr 28 framing).**

**Why this angle:** Three anchors that compound: (1) MetLife is the single highest-intent World Cup venue keyword for the rest of 2026 — hosts the Final, two semifinals, and four group-stage matches. (2) The Eras Tour comp is a unique-to-MetLife proof point — no other US World Cup venue has a recent peer-event resale benchmark at this scale. (3) The $150 floor is a real, current, on-page number — not a forecast or an analogy. Combining the three: a high-intent venue keyword + a unique credibility benchmark + a verified on-page price = the strongest possible alignment between paid copy and LP content in the entire campaign portfolio.

**Shelf life:** Evergreen through Final week (mid-July), with weekly numbers refresh. Retire the "82 days" framing as countdown shortens; rotate to "60 days," "30 days," "10 days" milestones with concurrent paid-budget escalation. Single-variant longest-shelf creative in the portfolio.

**Refresh trigger:** Weekly re-pull of MetLife Final resale floor across FIFA Resale + SeatGeek + StubHub + Vivid Seats. If floor moves >10%, swap new number into the ad shell. Monthly: rerun the Eras Tour comp framing — at 60 days out, may shift to a SoFi or Beyoncé Renaissance comp if those become more salient. Also: if SEO bundle ships, upgrade ad copy to call out structured-data $150 floor surfacing in Google ("see the $150 floor right in search") for an additional 2-week burst.

---

### Variation B — Bruno Mars Romantic Tour: 3 Venues, 3 Cities, the Same Question Three Times

_MAINTAINED from Apr 26/27, Day 3 of carry. Cluster unchanged at 6/3/3. Copy shell unchanged. LP-gated on programmatic tour page (SEO Day 5 of handoff). Launch-condition annotation hardens today re: drip-cron deterministic-test failure._

**Google Search Ad:**
```
Headline 1: Bruno Mars Romantic Tour Compared
Headline 2: MetLife, Soldier Field, Ohio Stadium
Headline 3: Same Tour, Three Different Price Maps
Description 1: The Romantic Tour stops at MetLife Aug 21-25, Soldier Field May 16-17, and Ohio Stadium May 20. Same tour, same artist, three different venue economies and three different secondary-market patterns. Worth comparing all three before you commit to a date or city.
Description 2: We compare Ticketmaster, SeatGeek, and StubHub side-by-side for every Romantic Tour date in one place. Most multi-date buyers we see end up at a different platform per venue. Free, no account.
```
- **Final URL:** https://www.ticketscan.io/compare *(LP-gated until programmatic Bruno Mars Romantic Tour LP ships — SEO Day 5 of handoff)*
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
- **Note:** Day-3 of this variant. The cluster (6 wl / 3 watchers / 3 venues) held overnight — no decay, no growth. **taranimeramaro silent at 60+ hours is now the longest-silent same-session activator on record** — the 3-MetLife-date intent pattern that ratified this variation 2× a week ago has produced zero second-session activity. **Today's drip-cron deterministic-test failure (dr.altvater Email 2 threshold crossed Apr 27 14:08 UTC, 0 sends) hardens the launch condition specifically for this variation:** the "if first-session metrics validate, scale up against `/compare` fallback while waiting for programmatic LP" framing from yesterday now has no fallback path on the post-signup-nurture side either. Drip cannot lift second-session for taranimeramaro-shaped users any more than the cron-silent product can. **No scale-up decision should be made on first-session metrics alone, AND the LP-ship + cron-write + drip-write triple gate is now the launch condition** — programmatic Bruno Mars Romantic Tour LP would lift QS by 1-2 tiers on ship; runs at half budget ($4 Google, $2 Meta) against `/compare` fallback for low-cost top-of-funnel validation only until LP ships AND cron writes for ≥7 days AND drip cron sends a test email that lands in inbox.

**Why this angle:** Three anchors that compound: (1) The multi-date / multi-venue / multi-watcher cluster is the cleanest organic ICP signal in the campaign portfolio — three different watchers, three different venues, six watchlist items, all on the same tour. The platform's value proposition is empirically self-validating against this exact demand pattern. (2) The "different secondary-market patterns at different venues" claim is product-truth-true — comparison output for each Bruno Mars date already varies in our database. (3) The competitive frame (Ticketmaster fees vary 6–14% depending on host venue) is documentable from public Ticketmaster transaction data and grounds the comparison angle in a falsifiable claim, not a marketing slogan.

**Shelf life:** ~6 months (longer if cluster expands; shorter if it contracts). MetLife dates Aug 21/22/25 anchor the long shelf — these are 115 days out today and the demand pattern compounds as the date approaches. Soldier Field dates May 16/17 are 18-19 days out — short-shelf component. Ohio Stadium May 20 is 22 days out — medium-shelf component.

**Refresh trigger:** Weekly cluster check via `/api/admin/popular-events`. If watchlist depth grows to 9+ items OR adds a 4th venue, frame upgrades from "3 venues, 3 cities" to "4 venues, X items" with refreshed numbers. If cluster contracts to 4 wl OR loses a venue (no Soldier Field bookings), variant downgrades to single-venue MetLife and merges into Variation A overflow. Check secondary-market price spread weekly across the three venues — if the "different patterns at different venues" claim weakens (all three platforms align within 8% on all three venues), the differentiator collapses and the variant retires.

---

### Variation C — Cubs Wrigley Final-Window Memo: 48 Hours to LP-Build, 2 Days to Cubs Opener (CAMPAIGN-READY SPEC, NOT LAUNCHABLE)

_NEW today. Replaces Apr 27 Variation C (FIFA Resale Stability) in this rotation slot. Apr 23 Variation A (Cubs Wrigley May Homestand cron-gated) is subsumed by this variant. Triple-gated on (i) Wrigley LP build within 48h, (ii) price-history cron writes by Apr 30 23:59 UTC, (iii) same-day UX fallback ships from CRO. Today's variant is a campaign-ready spec NOT a launchable angle._

#### Status: DO-NOT-LAUNCH (gate documentation below)

**This variation is the cleanest single creative artifact in the portfolio today** because it sits at the intersection of three time-bounded gates with overlapping deadlines, all of which resolve in the next 48–72 hours:

- **Gate 1 — Wrigley LP build (48h fuse):** `/venues/wrigley-field` → 404 today (re-verified). Day 5 of content gap. Architecturally fast-create with the Scotiabank long-form template (`/venues/scotiabank-arena` 200 confirmed today, third consecutive day). If LP ships **today (Apr 28)** → 2 days of pre-event runway + 7 days in-stand runway. If LP ships **tomorrow (Apr 29)** → 1 day pre-event + 7 days in-stand. If LP ships **Apr 30** → 0 days pre-event + 7 days in-stand (degraded but non-zero). If LP ships **May 1+** → 0 pre-event + degrading in-stand; conditional shelf collapses.
- **Gate 2 — Price-history cron writes (Apr 30 23:59 UTC hard deadline):** Day 21 of cron silence. ajvanprooyen 120+ hours post-signup with 6 active Cubs items, no return session, null target prices, no price data ever captured. If cron writes by Apr 30, the Cubs cluster gets 6 events × 4-hour-cadence captures × ~7 days = ~252 price-history rows by May 7 — enough to make the "we tracked 252 price points across your six Cubs games" post-stand recap product-truth-true. If cron stays dead through May 1, the Cubs cluster joins the 30 past-event corpus with zero data captured — the failure mode that maps the entire May 1–6 stand to the same outcome as the 30 prior past-event captures.
- **Gate 3 — Same-day UX fallback (CRO Day 2):** nmcnamee99 Raptors case CLOSED-AS-LOSS Day 2 of confirmed status. The same-day-urgency UX fallback ("we're collecting prices now, here's the direct vendor link") would be specifically required for ajvanprooyen on May 1 if cron lands but data is too sparse for first-game analysis. Without the fallback, ajvanprooyen's May 1 return-session experience (if any) replicates the nmcnamee99 closed-loop loss at the cluster level rather than the single-event level.

**If all three gates clear within 48–72 hours, the launchable creative is structured below. If any gate fails, the variant retires as a closed-loop study of the May 1–7 Cubs window — the cleanest possible empirical case for "infra unblock leads paid unlock by N days."**

#### Launchable spec (CONDITIONAL, not for deploy today):

**Google Search Ad (deploy ONLY if Gates 1+2+3 clear by Apr 30 12:00 UTC):**
```
Headline 1: Cubs at Wrigley — May 1-6 Stand
Headline 2: 6 Games, 3 Series, Compared
Headline 3: Wrigley Field Section Map + Prices
Description 1: Six home games in seven days: D-backs Friday-Sunday, Reds Monday-Wednesday. We mapped Wrigley Field section by section — bleachers, terrace, club box, marquee, infield box — across Ticketmaster primary, SeatGeek, StubHub, and Vivid Seats. Free.
Description 2: We started tracking these games when the schedule dropped. Day-of-game pricing tends to swing 20-40% inside the last 24 hours. Compare current prices and see the trend before you buy. Free, no account.
```
- **Final URL:** https://www.ticketscan.io/venues/wrigley-field *(LP-gated on Wrigley fast-create within 48h; if LP doesn't ship, variant DOES NOT launch — does not fall back to `/compare` because the same-day-urgency hardening from Apr 27 makes `/compare` fallback for an in-progress May 1+ event class structurally false)*
- **Display path:** ticketscan.io/venues/wrigley-field
- **Sitelinks:**
  - Cubs vs D-backs (May 1-3) → /venues/wrigley-field#dbacks-series
  - Cubs vs Reds (May 4-6) → /venues/wrigley-field#reds-series
  - Wrigley Field Section Map → /venues/wrigley-field#sections
  - Compare Any Cubs Game → /compare
- **Callouts:** "6 Games, 7 Days", "Section-by-Section", "All 4 Platforms", "Free, No Account"
- **Match types:**
  - Exact: `cubs tickets wrigley may 2026`, `cubs vs d-backs tickets`, `cubs vs reds tickets`, `wrigley field tickets may 1`, `wrigley field cubs tickets`, `wrigley field seating chart`, `cubs home stand tickets may`
  - Phrase: `cubs may 2026 home games`, `wrigley field section map`, `cubs vs d-backs wrigley`, `cubs vs reds wrigley may 2026`, `cubs ticket comparison`, `cubs tickets cheapest`, `wrigley field bleacher tickets`, `wrigley field terrace tickets`
  - **AVOID** broad match on `cubs tickets` (cross-contaminates with road games, season-long subscriptions, special-event tickets like Cubs Convention or Spring Training). Stick to home-stand-qualified or Wrigley-qualified variants. **AVOID** `cubs tickets tonight` / `cubs same day tickets` / `cubs walk up tickets` / `cubs tickets in 1 hour` (same-day-urgency class HARDENED DO-NOT-BID; nmcnamee99 case applies).
  - **AVOID** `wrigley field tour booking` / `wrigley rooftop tickets` / `wrigleyville bars` (non-game commercial intent that would dilute LP page ratios).
- **Geo:** Chicago metro primary +30% (Cook + DuPage + Lake + McHenry + Will + Kane Counties). Greater IL + WI Milwaukee/Madison + IN Northwest +20% (drive-in radius for a Cubs game). Cincinnati DMA +10% (Reds away-fan demand for the May 4-6 series specifically). St. Louis +5% (Cardinals-rivals secondary). National at base — Cubs are a national-brand club with significant out-of-market travel demand.
- **Device:** Mobile +20% (game-day decisions skew mobile-heavy; Wrigley-area transit + parking research lives on mobile). Desktop holds for night-before purchase.
- **Dayparting:** Mornings 6–10am ET +15% (Chicago commuter window — when Cubs game-day decisions get made). Evenings 5–10pm ET +10% (post-work browse window). Avoid game-time hours 2pm–7pm ET on game days (would compete with live-game telecasts and cross-contaminate with same-day-urgency searches).

**Meta Ad (deploy ONLY if Gates 1+2+3 clear):**
```
Primary text: Six Cubs home games in seven days at Wrigley Field, May 1-6. D-backs Friday through Sunday, Reds Monday through Wednesday. Same series structure most home stands take — three games, off day, three games — but the price math at Wrigley moves differently than other MLB stadiums because of the bleacher/terrace/club box mix. We mapped every section across Ticketmaster, SeatGeek, StubHub, and Vivid Seats. We've been tracking these specific six games since the schedule dropped. Day-of-game pricing tends to swing 20-40% inside the last 24 hours, and the bleachers behave differently than the box seats. Compare current prices and the trend before you buy. Free, no account.
Headline: Cubs at Wrigley, May 1-6
Description: 6 games, 4 platforms, mapped. Free.
```
- **CTA button:** Learn More
- **Landing:** https://www.ticketscan.io/venues/wrigley-field
- **Audience:** US adults 25-55, Chicago metro primary (Cook + DuPage + Lake + McHenry + Will + Kane). Cubs Baseball + MLB + Wrigleyville + Chicago sports + Chicago lifestyle interests. Secondary lookalike on Cubs season-ticket holders (proxy for high-frequency Wrigley attendance behavior). Tertiary: Out-of-market Cubs fans with travel-to-sports propensity (national lookalike). **Exclude:** users under 21, "ticket broker" profession affinity, users who attended a Cubs game in last 14 days (recently-attended audience won't add 6 more to watchlist), and users in any Cardinals fan cluster (rivalry exclusion for primary; secondary OK for the May 4-6 Reds series).
- **Placements:** Feed, Stories, Reels. Exclude Audience Network.
- **Note:** This Meta variant is the simpler companion to the Google Search variant — the search variant captures high-intent lower-funnel demand; the Meta variant captures comparison-shopping mid-funnel demand. **Both deploy together if Gates 1+2+3 clear; neither deploys if any gate fails.** The +2d Cubs deadline maps directly to the bid-pacing window: 48 hours to ship + verify the LP and cron, then ~5 days of in-stand budget pacing.

**Why this angle:** Three anchors that compound: (1) ajvanprooyen's behavior is the cleanest possible single-watcher signal in the campaign portfolio — one user, six events, one venue, one calendar window. The platform's value proposition either works or fails on this exact case in the next 7 days. (2) The Wrigley section/platform mapping is product-truth-true once the LP ships — bleachers vs terrace vs club box vs marquee level have empirically different price patterns and platform skews. (3) The "we started tracking these games when the schedule dropped" claim becomes product-truth-true the moment the cron writes — the schedule has been in our database since February, the cron just hasn't been writing.

**Shelf life:** 7 days (May 1–7). The shortest-shelf creative in the portfolio. Variant retires fully on May 7 23:59 UTC when the last game (Cubs vs Reds) goes past. Post-shelf, the variant becomes either (a) a closed-loop case study published as a "what we tracked across the May 1–6 Cubs stand" follow-up content piece, OR (b) a closed-loop loss case study if any gate fails — the Cubs cluster joins the 30+ past-event corpus and the variant retires as the canonical illustration of "infra unblock leads paid unlock by N days." Either way, the May 7 sunset is hard.

**Refresh trigger:** Daily price-data freshness check across the 6 games. If cron writes <100 rows/day for the cluster (well below the 6 events × 6 daily checks × 4 platforms = ~144 rows/day theoretical max), the "we tracked 252 price points" post-stand recap framing requires downward adjustment. If a single game's pricing diverges materially from the others (e.g., May 4 Reds Sunday Night Baseball draws disproportionate national demand), break out a single-game variant for the divergent date during the in-stand window.

**Today's gate-status snapshot (DO-NOT-LAUNCH unless all three flip green by Apr 30 12:00 UTC):**

| Gate | Status | Resolution Window | Owner |
|------|--------|-------------------|-------|
| 1. Wrigley LP build (`/venues/wrigley-field` → 200) | :x: 404 (Day 5 of content gap) | 48h fuse | SEO + Content (Apr 27 reframe: fast-create with Scotiabank long-form template) |
| 2. Price-history cron writes (`/api/admin/price-history` → non-empty) | :x: 0 rows (Day 21 of cron silence) | 48h to Apr 30 hard deadline | Lead Architect |
| 3. Same-day UX fallback (CRO ships visit-#2-on-empty-data screen) | :x: Day 2 of CLOSED-AS-LOSS pattern (nmcnamee99 case) | 48–72h | CRO + Lead Architect |

**Decision matrix at Apr 30 12:00 UTC:**

| Gates cleared | Action |
|---------------|--------|
| 3/3 | **LAUNCH** Variation C at $10/day Google + $3/day Meta for 7 days. ajvanprooyen-cohort retargeting (Pixel-blocked currently, but cold-Cubs-fan lookalike works). |
| 2/3 (LP + cron clear; UX fallback pending) | **SOFT LAUNCH** at $4/day Google search-only with `/venues/wrigley-field` LP, no Meta. Search-only because Meta spends without retargeting are pure top-of-funnel and the failure mode requires UX fallback to mitigate. |
| 2/3 (LP + UX clear; cron pending) | **DO NOT LAUNCH.** Without cron writes, the "we've been tracking these games" claim is structurally false; the Wrigley LP would surface zero historical data and the visit-#2 experience would be empty regardless of UX fallback. |
| 2/3 (cron + UX clear; LP pending) | **DO NOT LAUNCH.** Without LP, Cubs paid would route to `/compare` fallback for in-progress May 1+ events — falls into the same-day-urgency DO-NOT-BID pattern by definition. |
| 1/3 or 0/3 | **DO NOT LAUNCH.** Variant retires as closed-loop loss case study; the Cubs cluster joins the 30+ past-event corpus and the campaign portfolio's first highest-leverage time-bounded paid case becomes the cleanest empirical evidence for "paid follows infra by N days, not the reverse." |

**Why this matters even though it's not deploying today:** This memo is the campaign-portfolio's first creative artifact structured as a "ready-to-deploy-when-X-Y-Z-clear" spec rather than a launchable angle. It's the cleanest single document for the Lead Architect, SEO, and CRO agents to act against — three named gates, each with a named owner, each with a named deadline (Apr 30 12:00 UTC), each with a measurable resolution criterion. **If the May 1–6 Cubs window resolves with all three gates cleared and the variant launches on Apr 30, the post-stand recap on May 7 becomes the platform's first end-to-end paid-launch case study with full data captured.** If any gate fails, the May 7 retirement becomes the platform's first end-to-end paid-launch failure case study with the failure mode named ahead of time. Either outcome is more informative than the current 21-day silent stasis.

---

_End of creative rotation. Total active variations: 3 (1 launchable lead, 1 launchable variant gated on LP, 1 campaign-ready spec gated on three deadlines). Total spend if all three clear gates by 48–72h: $108/day base ($91 prior + $13 incremental Cubs Variation C + $4 conditional MSG carry-forward), $126/day max with both conditional shelves activated. Today's net: $0 (no launch). Carry-forward count: 8 active maintained variations + 3 conditionals + 0 retired this cycle._
