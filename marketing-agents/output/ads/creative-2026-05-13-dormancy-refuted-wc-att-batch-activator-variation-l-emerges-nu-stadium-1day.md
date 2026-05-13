# Ad Creative Variations — 2026-05-13

_Companion to `ads-daily-2026-05-13.md` — Day 36 of paid-launch-readiness carry_

## Brand Voice Reminder

Helpful, data-driven, slightly irreverent consumer advocate. **Not** a "deals!" hype channel. The voice is: "You shouldn't pay $89 in fees you didn't know about. Here's what your seat actually costs across three sites."

## Day 36 Creative Inputs (Measurement-Grade)

| Input | Value | Implication for Copy |
|-------|-------|----------------------|
| Day-0 activator persona | **n=5 (was n=4)**; +32–79s range, μ_new=43s, σ_new=20s | Burst-add subclass expands the activator window; "compare in 30 seconds" timing claim still anchors but with softer μ |
| **Burst-add activator (NEW class)** | **n=1 (kevinshall87): 6 items in 100s, μ=18s between adds** | First multi-add activator on record; validates "single-session decisive-comparison" positioning |
| **WC-heavy activator concentration (NEW)** | **5-of-26 = 19.2% of all activator-wl items** (was 0% before today) | Variation A-β receives first empirical user-side anchor in 36 days |
| **AT&T Stadium concentration (NEW)** | **5-of-95 = 5.3% of all wl items** (was 0% before today) | Variation L (Dallas-metro / AT&T) emerges as new candidate |
| **Japan-supporter sub-cluster (NEW)** | 3-of-5 WC items in kevinshall87's burst involve Japan | Variation L sub-targeting: Japan-supporter geo + interest narrows |
| Day-1 retention rate | **0% (8-of-8)** — kevinshall87 Day-1 threshold opens **+6h post-tick today** | Burst-add subclass first test of Day-1 retention; single highest-value observation point of failure-window in next 24h |
| Day-2 retention rate | **0% (7-of-7)** | Carries unchanged |
| Day-3 retention rate | **0% (5-of-5, +1 vs yesterday: jmoriarty13 FAIL)** | jmoriarty13 +96h with wl_count=0 |
| Combined Day-1+Day-2+Day-3 | **20-of-20 = 0%** (+1 vs yesterday's 19-of-19) | Sample n=20 with zero exceptions through entire +96h horizon |
| **Day-0 non-activator (NEW data point)** | pattyglvz (id=75, +0 wl items as of +19h post-registration) | First Day-0 non-activator since May 5 inbound window opened; activation rate -0.4pp |
| **Dormancy trigger** | **REFUTED at May 12 16:46 UTC** by kevinshall87's burst-add | Variation K loses its empirical anchor; downgrades from DRAFT-ACTIVE back to DRAFT |
| `usersThisWeek` | **10** (held; jadbennis rolled out May 12 20:33 UTC offset by inbound pulse) | First time inbound pulse offset a forecasted rollout; tomorrow May 14 = triple-rollout day absent fresh inbound |
| Drip cron status | **DAY 5 of generalized failure**; 31 cumulative missed windows; 27 attempts on today's tick | Cannot promise drip emails or post-signup nurture |
| WC Final countdown | **68 days = 9 weeks 5 days** | A-β "10 weeks" framing Day 3 of 7-day cycle |
| WC 2026 group stage | **29 days = tactical window minus-1** | A and A-β both schedule-eligible; **AT&T Stadium WC LP audit suddenly Prio 1** |
| Inter Miami / Messi hypothesis | jadbennis fixture +4d; Nu Stadium LP ship-by May 14 = **1 DAY** | Variation J advances PRE-LAUNCH-CRITICAL → PRE-LAUNCH-TERMINAL |
| GA Data API gap | **Today's highest-pain blocker** — kevinshall87's 6-event burst flew through GTM blind | Variation L launch-readiness depends on attribution; current gate is GA Data API not budget |

---

## NEW Variation L (DRAFT) — AT&T Stadium / Dallas-metro / WC Group + Knockout Cluster

**Status:** **NEW DRAFT today.** Emerges from kevinshall87's 6-item burst at AT&T Stadium (May 12 16:46–16:47 UTC). First-ever WC-heavy + first-ever AT&T Stadium + first-ever batch-add activator coincident. Variation L is the variation candidate that converts this triple-novelty signal into paid-creative.

**Why a new variation, not a sub-cluster of A or A-β:**
- Variation A is anchored to MetLife Stadium (NE / NJ metro), populated with Bruno Mars + WC group-stage NE-region matches. kevinshall87 did NOT pick MetLife — he picked AT&T (Dallas-metro). The geo-anchor is different.
- Variation A-β is anchored to "WC Final / 10 weeks out" framing at SoFi (LA). kevinshall87's picks span group stage (June 14, June 17, June 25), knockout Round of 16 (July 6), and Semifinals (July 14, Match 101). The temporal-anchor is different (multi-stage, not just Final).
- Variation L is anchored to **AT&T Stadium / Dallas-metro / multi-stage WC cluster with Japan-supporter sub-cluster**. The match selection (5 of 6 items at AT&T, 3 of 5 WC items Japan-involved) suggests a Japan-supporter persona with a Dallas-metro geo anchor.

**Strategic angle:** The first WC-anchored activator on record picked a specific stadium (AT&T) and a specific national team (Japan) across multiple stages of the tournament. This is **stadium-anchored fandom-driven multi-stage WC buying** — exactly the persona that "compare across Ticketmaster, SeatGeek, StubHub for AT&T Stadium WC matches" copy targets. The Variation L copy positions ticketscan as the **stadium-specific WC pricing reference**, with stage-level granularity (group, R16, SF).

**Landing page (when ready):** `/world-cup-2026/att-stadium` (primary, audit-pending Prio 1 today) + `/event/[wc-att-match-id]` (specific-fixture LPs).

**Audience targeting:**
- Geo: Dallas-Fort Worth DMA + national Japan-supporter interest narrows (Meta) / `att stadium world cup`, `world cup dallas`, `world cup texas` (Google)
- Match-specific: `japan vs sweden world cup`, `netherlands vs japan world cup`, `world cup semifinals tickets at&t`
- Stadium-anchored: `att stadium world cup matches`, `world cup at&t stadium tickets`

### Google Search Ads (Variation L — DRAFT)

```
Headline 1 (30): AT&T Stadium · World Cup 2026
Headline 2 (30): Compare All 3 Sites in 30 Sec
Headline 3 (30): Group, R16, Semis · 5 Matches
Description 1 (90): 5 World Cup matches at AT&T Stadium. We line up Ticketmaster, SeatGeek, StubHub.
Description 2 (90): Real seats. Real prices. From group stage to the semifinal. One page, no tabs.
```

### Meta Ads (Variation L — DRAFT)

```
Primary text (visible 125): 5 World Cup matches at AT&T Stadium this summer — group stage, Round of 16, and a semifinal. Compare Ticketmaster, SeatGeek, and StubHub on one page.
Headline (40): AT&T Stadium WC · Compare All 3
Description (30): Group → Semis · Real prices
```

**Japan-supporter sub-targeting variant (Meta):**

```
Primary text (visible 125): Japan's group stage games at AT&T Stadium — Netherlands and Sweden. Compare all 3 resale sites on one page. Real seats, real prices.
Headline (40): Japan WC Matches · Compare All 3
Description (30): AT&T Stadium · Dallas-metro
```

**Launch gates (status today):**
1. **`/world-cup-2026/att-stadium` LP audit** — Prio 1 today; SEO + Content to verify populated state. **Same-day audit feasibility = HIGH** (LP route exists; question is whether it's populated/schema-rich).
2. **GA Data API for source-channel attribution** — Day 36 of carry; **today's highest-pain blocker**. Without it, Variation L cannot answer "did kevinshall87 come from organic, social, direct, or referral?" — the question that determines whether Variation L's paid spend would amplify a discoverable channel or duplicate an organic one.
3. **Paid budget approved** — Day 36 of carry; no signal change.

**Pre-launch decision tree:**

| AT&T LP audit | GA Data API | Launch window |
|---------------|-------------|----------------|
| LP populated + schema-rich | API integrated | **Launch-eligible May 15+** (alongside Variation A-β; 29-day window) |
| LP populated + schema-rich | Not integrated | **HOLD** — bid on AT&T WC without attribution risks duplicating organic channel |
| LP thin / not populated | API integrated | LP build joins queue (~3h Wrigley-pattern replication); launch May 16+ |
| LP thin / not populated | Not integrated | **HOLD INDEFINITE** — both gates open |

**Caveat:** Variation L is launch-conditional on broader paid-launch-readiness which itself is unblocked-gated at Day 36. L joins A-β + G-α + I + J in the launch-eligible portfolio when paid unblocks.

**Bid-cap recommendation when launching:** Cap CPC at the lower of (a) `world cup at&t stadium` benchmark CPC × 0.7 (high-intent specific-stadium WC keywords likely trade at premium) or (b) computed CPA-target × estimated conversion rate × 0.5 (extra safety margin for first-launch attribution darkness on a brand-new stadium signal). **GA Data API is the binding constraint on bid-cap precision** for Variation L specifically — even more than for other variations, because the AT&T Stadium signal is single-user-derived and high source-channel uncertainty is the dominant risk.

**Audience scale hypothesis:** WC matches at AT&T Stadium are limited (kevinshall87 hit 5 of the ~5–6 group + knockout matches at AT&T). The auction-pool is small but high-intent. **Variation L is a niche-volume / high-LTV variation, not a scale variation.** It should be sized at ~10–15% of total paid budget when active, not a primary spend channel.

**Test against:** Variation A-β. A-β is broad WC-Final / temporal framing; L is stadium-and-stage-specific. Same WC audience, two strategy approaches.

**Dormancy-trigger implication for Variation L:** the dormancy trigger refutation today **creates** Variation L as a candidate. If dormancy had persisted, Variation L would not exist because kevinshall87 would not have signed up. The relationship between Variation L and the dormancy trigger is **causally inverted**: the dormancy refutation IS the kevinshall87 burst that birthed Variation L.

---

## Variation J (PRE-LAUNCH-TERMINAL) — Inter Miami × Portland · Nu Stadium · May 17

**Status:** **ADVANCES from PRE-LAUNCH-CRITICAL to PRE-LAUNCH-TERMINAL.** Yesterday this variation was at "LP ship-by 2 days = May 14". Today's status changes:
- jadbennis's May 17 fixture compresses to **+4 days away** (was +5 yesterday)
- Nu Stadium LP cluster Day 7 of 404 carry
- **LP ship-by deadline = 1 DAY (May 14 23:59 UTC)** (was 2 days yesterday)
- SEO investigation Day 5 of carry — manual Search Console check today is Prio 0

**Why PRE-LAUNCH-TERMINAL, not yet launching:** The copy is locked. The audience targeting is locked. **The single binding constraint is now the 1-day Nu Stadium LP ship-by deadline.** If LP cluster does not deploy by May 14 23:59 UTC, the 48–72h Google crawl-and-index buffer before the May 17 fixture closes, and Variation J becomes post-fixture for that specific event.

**Why the copy itself does not need a refresh:** Yesterday's locked copy referenced "Nu Stadium" and "Messi vs Portland Timbers" — both anchors unchanged. The +4d fixture proximity is implicit, not explicit.

**However, the launch-decision tree updates because the binding constraint compressed:**
- Yesterday: "ship by 23:59 UTC May 14 (2 days), SEO confirm by 23:59 UTC May 13 (1 day), launch May 14 18:00 UTC at earliest"
- Today: "ship by 23:59 UTC May 14 (today is the LAST FULL DAY), SEO confirm by 23:59 UTC May 13 (TODAY), launch May 14 18:00 UTC at earliest IF both gates clear by end-of-day today"

**Landing page (when ready):** `/venues/nu-stadium` (primary) + `/event/[inter-miami-portland-may-17-id]` (specific-fixture).

**Audience targeting:** Inter Miami / Messi / MLS specific-fixture keywords; geo-Southeast US + national Messi-search interest segments.

### Google Search Ads (locked from May 11 — copy unchanged)

```
Headline 1 (30): Inter Miami × Portland · May 17
Headline 2 (30): Compare All 3 Sites in 30 Sec
Headline 3 (30): Real Seat-Level Prices
Description 1 (90): Messi at Nu Stadium, May 17. We line up Ticketmaster, SeatGeek, StubHub side-by-side.
Description 2 (90): One page. Real prices for real seats. No tab-flipping, no checkout-fee surprises.
```

### Meta Ads (locked from May 11 — copy unchanged)

```
Primary text (visible 125): Messi vs Portland Timbers at Nu Stadium, May 17. We line up Ticketmaster, SeatGeek, and StubHub on one page so you see the real price.
Headline (40): Messi · May 17 · Compare All 3
Description (30): Nu Stadium · Real prices
```

**Launch gates (status today):**
1. **Nu Stadium LP cluster deployed** — `/venues/nu-stadium` returns 200 (currently Day 7 of 404). **Ship-by 23:59 UTC May 14 = 1 DAY = TODAY is the last full day.**
2. **SEO Agent confirms Inter Miami / Messi organic footprint** — Day 5 of carry. **Confirm-by 23:59 UTC May 13 = TODAY** for paid-launch May 14 18:00 UTC.
3. **Paid budget approved** — Day 36 of carry; no signal change.

**Pre-launch decision tree (FINAL):**

| Gate 1 (LP ship by 23:59 UTC May 14) | Gate 2 (SEO confirm by 23:59 UTC May 13) | Launch window |
|--------------------------------------|------------------------------------------|----------------|
| Ships today/tomorrow | Confirms today | **May 14 18:00 UTC launch (+1-to-+2-day pre-fixture window)** |
| Ships today/tomorrow | Does not confirm | **HOLD** — bid on Inter Miami without SEO confirmation is high-risk; downgrade to broader Inter Miami home-schedule cluster |
| Slips past May 14 23:59 UTC | Confirms today | **POST-FIXTURE LAUNCH** for Inter Miami's broader 2026 MLS season (valid but loses specific Day-0-activator-fixture alignment) |
| Slips past May 14 23:59 UTC | Does not confirm | **HOLD INDEFINITE** — both gates remain open; Variation J becomes a post-fixture broader-Miami variation in the future |

**Caveat:** Variation J is **launch-conditional on paid budget approval** (which itself is unblocked-gated). Day-36 paid-launch-readiness still says HOLD CONTINUES (on infra grounds). J is ready to fire but the larger paid-launch gate is unchanged.

**Bid-cap recommendation when launching:** Cap CPC at the lower of (a) industry-benchmark "messi tickets" CPC × 0.7 or (b) computed CPA-target × estimated conversion rate × 0.6 (safety margin for first-launch attribution darkness). **GA Data API gate (today's highest-pain blocker) is the binding constraint on bid-cap precision.**

**Dormancy-trigger implication for Variation J:** the dormancy trigger refutation today **does not change Variation J's launch-readiness** because J targets a specific-fixture-anchored audience, not broad-channel demand. J's launch eligibility is identical to yesterday's reading; only the binding-constraint timing has compressed by 1 day.

---

## Variation A-β (REFRESH) — WC Final 9 weeks 5 days / Round-Week "10 Weeks" Framing

**Status:** **REFRESH (rationale-only).** Yesterday's Variation A-β was at "10 weeks framing, Day 2 of 7-day round-week cycle, no copy refresh". Today's refresh:
1. **Day 3 of 7-day round-week cycle** — A-α's hypothetical daily framing would have required a "9 weeks 5 days" edit today; A-β requires no edit
2. **First empirical user-side anchor in 36 days of carry** — kevinshall87's 5 WC items at AT&T Stadium include a Semifinals match
3. **29-day WC tactical window minus-1** — schedule-eligible
4. **WC concentration 19.2% of activator-wl items** (was 0% before today) — Variation A-β now has empirical support, not just temporal hypothesis

**The strategic implication of the refresh:** Yesterday Variation A-β was a "temporal framing on a hypothesis" — the hypothesis being that WC-Final buyers respond to round-week countdowns at 10+ weeks out. Today, **the hypothesis is empirically anchored** — kevinshall87 picked a Semifinal match (Match 101, July 14) in his 100-second burst. The WC Final concentration is 0-of-5 in his picks (he chose Semis, not Final), but the **multi-stage knockout-and-group cluster** validates the multi-stage WC-buyer persona that A-β targets.

**Why the copy itself does not need substantive change:** Yesterday's A-β copy framed WC Final at "10 weeks out". Today's copy is unchanged — the round-week framing is structurally measurement-stable across Day 1-7 of the cycle. **The refresh today is rationale-only, not copy.**

**Landing page:** `/world-cup-2026` (primary) + `/world-cup-2026/sofi-stadium` (SoFi-anchored Final hosting) + `/world-cup-2026/metlife-stadium` (alternative Final candidate, currently the deployed MetLife variation).

**Audience targeting:** WC Final + multi-stage knockout buyers; geo-broad US-East-coast + LA/SF + Dallas; interest narrows for FIFA / national-team-fandom.

### Google Search Ads (Variation A-β — REFRESHED rationale, copy unchanged)

```
Headline 1 (30): World Cup Final · 10 Weeks Out
Headline 2 (30): Compare 3 Sites Side-by-Side
Headline 3 (30): Real Seats. Real Prices.
Description 1 (90): WC 2026 Final at SoFi or MetLife. Ticketmaster, SeatGeek, StubHub on one page.
Description 2 (90): 10 weeks. Plenty of time to see what your seat actually costs across three sites.
```

### Meta Ads (Variation A-β — REFRESHED rationale, copy unchanged)

```
Primary text (visible 125): The World Cup 2026 Final is 10 weeks away. We line up Ticketmaster, SeatGeek, and StubHub so you can see what your seat actually costs.
Headline (40): WC 2026 Final · 10 Weeks · Compare All 3
Description (30): Real prices. One page.
```

**No copy edits vs. yesterday.** Same reasoning — the empirical foundation strengthens from "hypothesis" to "kevinshall87's Semifinals pick", but the user-facing claim ("10 weeks out, compare 3 sites") is unchanged. **The refresh today is rationale-only.** This is a structural strength of A-β's round-week framing: it is designed to be measurement-stable across daily enrichment.

**Test against:** Variation A (MetLife / WC group stage) and Variation L (AT&T Stadium / Dallas-metro / WC multi-stage). A-β is the broad temporal-framing; A is geo-anchored; L is stadium-and-stage-specific. Three creative approaches to the same WC audience.

**Quantified expectation:** If A-β captures the broad "WC Final 10 weeks out" search-intent at scale and A + L capture stadium-specific high-intent traffic at lower volume, the combined portfolio's per-dollar activator yield should outperform any single variation by 20–40% — IF GA Data API attribution closes (today's blocker). **Without GA Data API, the cross-variation attribution will be GTM-client-side-only and the comparison test cannot run cleanly.**

**Dormancy-trigger implication for Variation A-β:** the dormancy trigger refutation today **strengthens A-β's foundation**. Yesterday A-β was "live in a dormant channel"; today A-β is "live in a refuted-dormancy channel with first WC-anchored empirical validation". The "10 weeks out" framing's strategic anchor moves from temporal-hypothesis to empirically-anchored-multi-stage-WC-cluster.

---

## Carry-Forward Variations (Status Updates Only — No Refresh Today)

| Variation | Status | Notes |
|-----------|--------|-------|
| **A** (MetLife / WC group stage) | DEPLOYED LP, Day 19 carry | **Partially refuted today** — kevinshall87 picked AT&T, not MetLife. Maintained as Northeast-region WC anchor. |
| **A-α** (WC Final daily-precision countdown) | DEPRECATED | May 10 "10 weeks 1 day" was final iteration. |
| **A-β** (WC Final round-week "10 weeks") | **REFRESHED rationale today** | Day 3 of 7-day cycle; first empirical user-side anchor on record. Next refresh: May 18 → "9 weeks". |
| **B** (SoFi Stadium / Ed Sheeran cluster) | LP exists; no recent inbound signal | Holding. blubberboi 36 days silent. |
| **C** (Levi's / WC West cluster) | Pre-LP-build | Holding. |
| **D** (Lincoln Financial / WC Philadelphia) | Pre-LP-build | pete.uzelac77 Day 32 silent; LP build deadline tightens to WC opening (29 days). |
| **E** (Wrigley Field / Cubs) | DEPLOYED + sitemap-discovered Day 9 | Crawl-and-index horizon ~May 20–June 3. Evergreen Cubs season terms only. |
| **F** (Generic compare-prices buckets) | RETIRED Day 17 | Activation-rate dilution risk; broad-match `compare ticket prices` remains downgrade-not-bid-active. |
| **G-α** (Kia Center / Noah Kahan) | LP DEPLOYED + Day-0 handshake; Day 6 of confirmed-activator-destination carry | **Only paid-safe portfolio variation pre-WC.** cjthomas June 12 fixture +30d future. |
| **G-β** (Orlando-concerts category) | LP-gated Day 6 | Pending `/tickets/orlando-concerts` build. |
| **G-γ** (Noah Kahan tour-cluster) | Holding | Linked to G-α success. |
| **H** (BMO Field / Toronto FC) | LP-gated Day 5; liambot62-specific event sealed | Toronto FC home schedule continues. |
| **I** (Persona-precision filter) | Carried unchanged | 20-of-20 retention calibration; copy stable. Last refreshed May 12 rationale-only. |
| **J** (Inter Miami / Nu Stadium / Messi May 17) | **PRE-LAUNCH-TERMINAL today** | LP ship-by deadline = 1 DAY (May 14 23:59 UTC). Today is last full day. |
| **K** (Cooldown-aware data-storytelling) | **DOWNGRADES from DRAFT-ACTIVE to DRAFT** | Dormancy trigger refuted today; K loses its empirical anchor. Maintained for re-emergence. |
| **L (NEW)** (AT&T Stadium / Dallas / WC group + knockout) | **NEW DRAFT today** | First WC-heavy + first AT&T + first batch-add activator coincident. Launch-eligible if AT&T WC LP populated + GA Data API integrated. |

---

## Recommendations Forward

**For paid launch readiness (when unblocked):**
1. **A-β + L** for WC Final + multi-stage cluster (29-day tactical window minus-1; A-β LIVE Day 3; L DRAFT Day 1; together cover broad-temporal and stadium-specific WC audiences).
2. **G-α** as the single safest single-event LP test (Day 6 of confirmed-activator-destination carry).
3. **I (carried unchanged)** as the persona-precision baseline (copy stable across n=15 → n=20 measurement enrichment).
4. **J pre-launch-terminal** for May 14 18:00 UTC if Nu Stadium LP ships + SEO confirms by end-of-day TODAY.

**Order-of-launch when paid is approved:**
1. **G-α first** (lowest CPA risk; confirmed Day-0-activator destination; +30d future-event horizon)
2. **A-β + L second** (WC 29d tactical window minus-1; round-week framing live; multi-stage WC cluster empirically anchored; AT&T Stadium signal first-ever; A-β + L launched in tandem covers temporal-broad + stadium-specific WC audiences with complementary, not overlapping, keyword sets)
3. **I third** (persona-precision filter; n=20 calibration; structurally honest claim under retention measurement)
4. **J fourth (conditional)** (highest immediate ROI if Inter Miami / Messi hypothesis confirms + LP ships by today 23:59 UTC; binding 1-day constraint)
5. **K (DOWNGRADED to DRAFT, not launch this week)** — slow-burn data-storytelling angle; maintained for cooldown re-emergence

**Refresh cadence going forward:**
- **A-β:** 7-day round-week refresh (May 18 → "9 weeks"); 9 total copy edits across 70-day campaign window
- **A-α:** DEPRECATED — no refresh planned
- **Variation I:** 14-day refresh cadence; next refresh ~May 25 (or earlier if kevinshall87 Day-1 retention test today changes the 20-of-20 = 0% calibration)
- **Variation J:** launch-conditional; refresh cadence TBD after launch (or post-fixture pivot to broader Inter Miami home schedule if LP slips past May 14 23:59 UTC)
- **Variation K:** maintained for re-emergence; first refinement target ~May 20 if cooldown re-fires
- **Variation L (NEW):** 14-day initial refresh cadence; first refresh target ~May 27 IF launched; otherwise pre-launch refinement on AT&T Stadium WC LP audit findings

**Dormancy-refutation-aware creative directive (UPDATED today):**

Today's dormancy-trigger refutation (kevinshall87 batch-add at May 12 16:46 UTC = 26h after yesterday's 10:00 UTC tick) materially changes the creative-portfolio risk posture vs. yesterday:
- **The +35s activator burst is REVIVED but EXPANDED** (μ_new=43s, σ_new=20s; burst-add subclass introduced). Variations A, A-β, G-α, I, J, L — all of which target specific-event, persona-precision, or stadium-anchored audiences — **benefit from the revival** because their audiences are not the broad-channel inbound rhythm but specific-fixture or anchor-driven cohorts.
- **Variation F (generic compare-prices broad-match) remains downgrade-not-bid-active.** The revival is single-data-point and Japan-supporter-burst-driven; it does not validate broad-match broad-channel demand.
- **Variation K downgrades from DRAFT-ACTIVE back to DRAFT.** The dormancy refutation removes K's empirical anchor. Maintained for re-emergence if cooldown re-fires.
- **Variation L (NEW) emerges as the highest-priority new candidate.** It is the variation that converts today's triple-novelty signal (WC-heavy + AT&T + batch-add) into paid creative.

The launch-readiness slate when paid unblocks:
- **Standard portfolio:** A-β + G-α + I (3 variations, dormancy-refutation-friendly + retention-calibrated)
- **Stadium-specific portfolio:** A (MetLife) + L (AT&T) — geographically complementary WC anchors
- **Conditional portfolio:** J (binding 1-day LP ship-by gate)
- **Maintained-not-launched portfolio:** K (cooldown re-emergence backup)

---

**Prepared by Agent 4 (Paid Ads Manager)** — Day 36 of paid-launch-readiness carry. Today's variations encode three of the sharpest measurement-grade findings of the failure-window: dormancy-trigger DECISIVE REFUTATION (drives Variation K's DRAFT-ACTIVE → DRAFT downgrade — anchor softens), first-ever WC-heavy + AT&T + batch-add activator triple-novelty (drives Variation L's NEW DRAFT emergence with stadium-and-stage-specific positioning), and Nu Stadium LP ship-by deadline compression to 1 DAY (drives Variation J's PRE-LAUNCH-CRITICAL → PRE-LAUNCH-TERMINAL advance with today-is-the-last-full-day binding-constraint). The hold-continues case reaches its 36th-day reading with the demand-side argument flipping from "structurally cooled" yesterday to **"first WC-anchored empirical validation on record" today** — but the infra gates remain identically blocking, so hold continues on infra grounds only. **GA Data API is today's highest-pain blocker because the first WC-anchored activator + first AT&T Stadium signal flew through GTM client-side with zero source-channel attribution downstream.**
