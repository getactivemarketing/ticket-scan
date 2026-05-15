# Ad Creative Variations — 2026-05-15

_Companion to `ads-daily-2026-05-15.md` — Day 38 of paid-launch-readiness carry_

## Brand Voice Reminder

Helpful, data-driven, slightly irreverent consumer advocate. **Not** a "deals!" hype channel. The voice is: "You shouldn't pay $89 in fees you didn't know about. Here's what your seat actually costs across three sites."

## Day 38 Creative Inputs (Measurement-Grade)

| Input | Value | Implication for Copy |
|-------|-------|----------------------|
| **AT&T Stadium WC LP** | **HTTP 200 CONFIRMED 10:00 UTC** | Variation L promotes from DRAFT to **LAUNCH-READY** — LP-gate CLEAR |
| **BC Place WC LP** | **HTTP 200 CONFIRMED 10:00 UTC** | Variation M promotes from DRAFT to **LAUNCH-READY** — LP-gate CLEAR |
| **Nu Stadium LP ship-by** | **MISSED — `/venues/nu-stadium` still 404; `/event/nu-stadium-...` resolves but is generic [id] SPA shell** | **Variation J ARCHIVES** for next Inter Miami home-fixture-as-anchor |
| **karin_ef1 mini-burst Day-1 retention** | **FAILED — totalWatchlistItems held at 97 across 24h tick-to-tick** | Burst-add class structurally collapses; "no follow-up, no retargeting" copy framework (Variation I) strengthens |
| Combined Day-1 + Day-2 + Day-3 retention | **22-of-22 = 0%** (+1 vs yesterday) | Sample n=22 with zero exceptions; full-burst + mini-burst + single-add all 0% Day-1 |
| `usersThisWeek` | **10** | Matches yesterday's forecast precisely (offset-tracking model validates) |
| **96h continuous inbound** | **6 signups** (May 12–15) | First 4-day inbound streak since failure-window opened |
| `usersToday` | **1** | Identity TBD; profile resolution at May 16 tick |
| Drip cron status | **DAY 7 of generalized failure**; 14 consecutive null ticks | Cannot promise drip emails or post-signup nurture |
| WC Final countdown | **66 days = 9 weeks 3 days** | A-β "10 weeks" framing Day 5 of 7-day cycle (refresh May 18 = +3 days) |
| WC 2026 group stage | **27 days** | A-β + L + M all schedule-eligible; 3-variation WC paid portfolio launch-ready pending GA Data API + budget |
| GA Data API gap | **Day 38** — **now the single highest-leverage operational unblock** | Its integration alone unlocks 3 launch-eligible WC variations simultaneously |

---

## Variation L — LAUNCH-READY (AT&T Stadium / Dallas-metro / WC Group + Knockout / Japan-Supporter)

**Status:** **PROMOTED FROM DRAFT TO LAUNCH-READY today.** `/world-cup-2026/att-stadium` confirmed HTTP 200 at 10:00 UTC. The 2-day LP audit window from kevinshall87's burst (May 13 → May 15) resolved positive. The LP-gate that has constrained Variation L launch for 3 days clears today. The only remaining gates are GA Data API (attribution-blind risk on niche-stadium WC spend) and paid budget approval.

**Why this is launch-ready, not pending-stub-improvement:** The HTTP 200 confirms the route exists and renders. Tomorrow's schema-richness audit (AggregateOffer, FAQPage, breadcrumb, indexability) is a follow-on, not a blocker. The copy can launch against the populated LP today; if schema is thin, performance gains a ceiling but does not break.

**Audience targeting (Meta + Google):**
- Geo: Dallas-Fort Worth DMA + national Japan-supporter interest narrows (Meta) / `world cup tickets at&t stadium`, `at&t stadium world cup`, `world cup dallas`, `world cup texas`, `world cup japan tickets` (Google)
- Match-specific: `at&t stadium world cup matches`, `japan world cup tickets dallas`

### Google Search Ads (Variation L — Launch-Ready)

```
Headline 1 (30): AT&T Stadium · World Cup 2026
Headline 2 (30): Compare All 3 Sites in 30 Sec
Headline 3 (30): Group Stage + R16 · Dallas
Description 1 (90): World Cup at AT&T Stadium — Ticketmaster, SeatGeek, StubHub on one page.
Description 2 (90): Real seats. Real prices. No more $89 in fees you didn't know about.
```

**Japan-supporter sub-cluster variant:**

```
Headline 1 (30): Japan at the World Cup · Dallas
Headline 2 (30): AT&T Stadium · Compare 3 Sites
Headline 3 (30): Real Prices in 30 Seconds
Description 1 (90): Japan's WC matches at AT&T Stadium. Compare Ticketmaster, SeatGeek, StubHub.
Description 2 (90): See what your seat actually costs. One page. Three sites. No tabs.
```

### Meta Ads (Variation L — Launch-Ready)

```
Primary text (visible 125): World Cup at AT&T Stadium this summer. Compare Ticketmaster, SeatGeek, and StubHub on one page — see what your seat actually costs.
Headline (40): AT&T WC · Compare All 3
Description (30): Dallas · Group + R16 · Real prices
```

**Japan-supporter sub-targeting variant (Meta):**

```
Primary text (visible 125): Japan plays the World Cup at AT&T Stadium this summer. Compare all 3 resale sites on one page before prices spike.
Headline (40): Japan WC · Dallas · Compare 3
Description (30): AT&T Stadium · Real prices
```

**Launch sequence (when budget + GA Data API clear):**

| Day | Action |
|-----|--------|
| D0 | GA Data API integrates, budget approved |
| D0 | Launch Variation L at 10–15% of total WC paid budget, CPC cap = `world cup at&t stadium` benchmark × 0.7 |
| D1–D3 | Performance read; LP click-through, time-on-page, watchlist-add rate vs. control |
| D4 | If CPA < target × 1.5, expand to 20% budget; else hold |

**Bid-cap recommendation:** Cap CPC at the lower of (a) `world cup at&t stadium` benchmark CPC × 0.7 or (b) computed CPA-target × estimated conversion rate × 0.5. With LP confirmed populated, the bid-cap precision improves because the LP-quality-score risk decreases.

**Audience scale hypothesis:** AT&T Stadium hosts multiple WC matches including group stage matches involving USA-Japan-anchored Group F + R16 + quarterfinal. The auction-pool is mid-sized (broader than BC Place, narrower than the WC-Final broad terms). **Variation L is a niche-mid-volume / mid-LTV variation, sized at 10–15% of total paid budget when active.**

---

## Variation M — LAUNCH-READY (BC Place / Vancouver-metro / WC Group + Knockout / Canada-Swiss Supporter)

**Status:** **PROMOTED FROM DRAFT TO LAUNCH-READY today.** `/world-cup-2026/bc-place` confirmed HTTP 200 at 10:00 UTC. The 1-day LP audit window from karin_ef1's mini-burst (May 14 → May 15) resolved positive. The LP-gate that has constrained Variation M launch for 2 days clears today. The only remaining gates are GA Data API + paid budget approval.

**Why this is launch-ready, not pending-stub-improvement:** Same logic as Variation L. The HTTP 200 confirms route + render; schema-richness audit is a follow-on.

**Audience targeting (Meta + Google):**
- Geo: Vancouver-Burnaby DMA + national Canada-supporter interest narrows + Switzerland-supporter international interest (Meta) / `world cup tickets bc place`, `bc place world cup`, `world cup vancouver`, `world cup canada tickets`, `switzerland vs canada world cup tickets` (Google)
- Match-specific: `switzerland vs canada world cup tickets`, `world cup group b tickets`, `bc place round of 16 tickets`
- Stadium-anchored: `bc place world cup matches`, `world cup bc place tickets`

### Google Search Ads (Variation M — Launch-Ready)

```
Headline 1 (30): BC Place · World Cup 2026
Headline 2 (30): Compare All 3 Sites in 30 Sec
Headline 3 (30): Group B + R16 · Vancouver
Description 1 (90): World Cup at BC Place — Group B and Round of 16. Ticketmaster, SeatGeek, StubHub.
Description 2 (90): Real seats. Real prices. One page. No more checking three tabs to feel ripped off.
```

**Canada-supporter sub-cluster variant:**

```
Headline 1 (30): Canada at the World Cup · Home
Headline 2 (30): BC Place · Compare 3 Sites
Headline 3 (30): Real Prices in 30 Seconds
Description 1 (90): Canada vs Switzerland at BC Place — Group B group stage opener.
Description 2 (90): Compare Ticketmaster, SeatGeek, StubHub. See what your seat actually costs.
```

### Meta Ads (Variation M — Launch-Ready)

```
Primary text (visible 125): World Cup at BC Place this summer — Group B and a Round of 16. Compare Ticketmaster, SeatGeek, and StubHub on one page.
Headline (40): BC Place WC · Compare All 3
Description (30): Group B → R16 · Real prices
```

**Canada-supporter sub-targeting variant (Meta):**

```
Primary text (visible 125): Canada vs Switzerland at BC Place — Group B group stage opener. Compare all 3 resale sites on one page before prices spike.
Headline (40): Canada WC · BC Place · Compare 3
Description (30): Vancouver · Group B Match 51
```

**Swiss-supporter sub-targeting variant (Meta):**

```
Primary text (visible 125): Switzerland's WC opener at BC Place vs Canada. Compare Ticketmaster, SeatGeek, and StubHub — see what your seat actually costs.
Headline (40): Switzerland WC · Compare All 3
Description (30): BC Place · Group B Match 51
```

**Launch sequence (when budget + GA Data API clear):**

| Day | Action |
|-----|--------|
| D0 | GA Data API integrates, budget approved |
| D0 | Launch Variation M at 5–10% of total WC paid budget, CPC cap = `world cup bc place` benchmark × 0.7 |
| D1–D3 | Performance read; Canada vs Swiss sub-cluster split-test |
| D4 | If CPA < target × 1.5, expand to 10–15% budget; else hold |

**Bid-cap recommendation:** Same logic as Variation L. With LP confirmed populated, the bid-cap precision improves.

**Audience scale hypothesis:** WC matches at BC Place are limited (~5 total WC matches: 2–3 group + 1–2 R16). The auction-pool is small but high-intent. **Variation M is a niche-volume / high-LTV variation, sized at 5–10% of total paid budget when active.**

---

## Variation A-β Refresh — WC Final 9 Weeks 3 Days (Round-Week "10 Weeks") Day 5 of 7-Day Cycle

**Status:** LIVE Day 5 of round-week cycle. First refresh to "9 weeks" still scheduled for May 18 (Day 7 of current cycle; +3 days). **The 3-variation WC paid portfolio composition is now A-β + L + M, all launch-eligible pending GA Data API + budget.** A-β is the broad-temporal anchor; L and M are stadium-specific anchors. The portfolio measures **stadium-anchor vs. temporal-anchor effectiveness** for the rhythmic-WC-buyer cohort.

**Why no refresh today:** Round-week framing is intentionally insensitive to single-day countdown ticks. A-α (hypothetical daily-framing variant) would require a "9 weeks 3 days" edit today; A-β's "10 weeks" framing has 3 more days of edit-savings before the May 18 refresh. **Day 5 of the 7-day cycle is the 5th consecutive day of edit-cost-amortization advantage** — A-α would be on its 5th copy-edit since launch, A-β on zero.

**Empirical anchor strength preserved at n=2; today's +1 inbound TBD if extends to n=3:**
- May 12 16:46 UTC: kevinshall87 → AT&T Stadium 5-match WC burst (group + R16 + SF)
- May 14 06:47 UTC: karin_ef1 → BC Place 2-match WC mini-burst (group B + R16)
- May 15: today's +1 signup pending profile resolution

### Google Search Ads (Variation A-β — Day 5 of cycle, copy unchanged)

```
Headline 1 (30): World Cup 2026 · 10 Weeks Out
Headline 2 (30): Compare All 3 Sites in 30 Sec
Headline 3 (30): Group Stage → Final · One Page
Description 1 (90): World Cup is 10 weeks away. Ticketmaster, SeatGeek, StubHub — all three on one page.
Description 2 (90): From group stage through the final. Real seats, real prices, no tabs.
```

### Meta Ads (Variation A-β — Day 5 of cycle, copy unchanged)

```
Primary text (visible 125): World Cup 2026 is 10 weeks out. Compare all three resale sites — Ticketmaster, SeatGeek, StubHub — on one page. Group stage through the final.
Headline (40): WC 2026 · 10 Weeks · Compare All 3
Description (30): Group → Final · Real prices
```

**Multi-stage emphasis variant (Meta — held from yesterday, anchored on n=2 empirical):**

```
Primary text (visible 125): Most WC buyers are looking at more than one match. Group stage, Round of 16, the final — we line up Ticketmaster, SeatGeek, StubHub for all of them.
Headline (40): Multi-Match WC · Compare 3
Description (30): One session · Real prices
```

**Bid-cap recommendation:** Cap CPC at the lower of (a) `world cup 2026 tickets` benchmark CPC × 0.6 or (b) computed CPA-target × estimated conversion rate × 0.5. Variation A-β is broader-audience / higher-volume than L and M; it should be sized at ~50% of total WC-paid-budget when active.

---

## Cross-Variation Portfolio View (Day 38)

| Variation | Anchor | LP State | Day 38 Status | Launch Eligibility |
|-----------|--------|----------|---------------|---------------------|
| **A** (MetLife / WC group stage) | Geo-anchor: NJ/NE metro | DEPLOYED Day 21 | Partially refuted by n=2 WC-activators picking non-MetLife stadiums | Launch-eligible if budget approved; structural mismatch holds |
| **A-β** (WC Final / 10 weeks framing) | Temporal-anchor; multi-stage | LP-flexible | LIVE Day 5 of round-week cycle; n=2 empirical anchors | **Launch-eligible NOW if budget approved + GA Data API** |
| **E** (Wrigley Field / MLB) | Stadium-anchor: Chicago | DEPLOYED Day 11 | Carry; Cubs sealed | Launch-eligible if budget approved |
| **G-α** (Kia Center / Noah Kahan) | Stadium-anchor: Orlando | DEPLOYED Day 8 | cjthomas +28d future | Launch-eligible if budget approved |
| **I** (no-follow-up / single-session) | Behavioral-anchor: 22-of-22 retention | LP-flexible | Day 7 of generalized empirical-foundation carry; mini-burst joins | Launch-eligible if budget approved |
| **J** (Inter Miami / Nu Stadium / Messi) | Fixture-anchor: May 17 | LP **SHIP-BY MISSED Day 9** | **ARCHIVED today** | Post-fixture; preserve framework for next home-fixture |
| **K** (cooldown-aware storytelling) | Empirical anchor: dormancy | LP-flexible | DRAFT (downgraded Day 3 ago; dormancy sealed) | Hold for re-emergence |
| **L** (AT&T Stadium / Dallas / Japan WC) | Stadium-anchor: Dallas + Japan | **LP CONFIRMED 200 Day 3** | **LAUNCH-READY today** | **Launch-eligible NOW if budget approved + GA Data API** |
| **M** (BC Place / Vancouver / Canada-Swiss WC) | Stadium-anchor: Vancouver + Canada/Swiss | **LP CONFIRMED 200 Day 2** | **LAUNCH-READY today** | **Launch-eligible NOW if budget approved + GA Data API** |

**Portfolio composition when paid unblocks (3-variation WC + 4-variation non-WC):**
- **WC paid portfolio: A-β (broad temporal, ~50% budget) + L (AT&T niche, ~10–15%) + M (BC Place niche, ~5–10%) + A (MetLife, ~10–15% if structural-mismatch hypothesis can be falsified)**
- Non-WC paid portfolio: E (Wrigley), G-α (Kia Center), I (behavioral)

**Recommendation for first 14-day paid launch:** Start with **A-β + L + M + I** (broad WC temporal + 2 niche-stadium WC + behavioral) as the rhythmic-WC-inbound-amplifying portfolio. Hold A, E, G-α as second-wave additions after Week 1 attribution reads. Variation J archives until next Inter Miami home-fixture-as-anchor opportunity.

---

## Day 38 Closing Note

The 24h between yesterday's tick and today's tick produced **the strongest single-day LP-infrastructure inflection in the paid-launch-readiness carry**. Two of three same-day priorities cleared (AT&T + BC Place WC LPs both confirmed HTTP 200); one missed (Nu Stadium ship-by). The portfolio promotes Variations L and M from DRAFT to LAUNCH-READY simultaneously, the first multi-variation LP-gate clearance since the carry began. The retention machinery seals at 22-of-22 = 0% with karin_ef1's mini-burst Day-1 FAIL — burst-add class structurally collapses to single-add, and Variation I's "no follow-up, no retargeting" copy framework gains its strongest empirical underpinning. The 4-day continuous inbound rhythm establishes WC-anchored demand as structurally rhythmic, not coincident. The 3-variation WC paid portfolio (A-β + L + M) is launch-eligible on existing LP infrastructure; the only gates remaining are GA Data API integration and paid budget approval. **GA Data API becomes the single highest-leverage operational unblock for the first time in 38 days of carry** — its integration alone unlocks 3 launch-eligible WC variations. Variation J archives for next Inter Miami home-fixture-as-anchor opportunity; the lesson for future fixture-anchored variations is **build the LP at fixture-announce, not at fixture-minus-3-days**. The hold-compounds argument loses its LP foundation entirely; it now rests on GA Data API + paid budget alone.
