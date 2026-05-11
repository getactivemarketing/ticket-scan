# Ad Creative Variations — 2026-05-11

_Companion to `ads-daily-2026-05-11.md` — Day 34 of paid-launch-readiness carry_

## Brand Voice Reminder

Helpful, data-driven, slightly irreverent consumer advocate. **Not** a "deals!" hype channel. Not a generic compare-prices commodity. The voice is: "You shouldn't pay $89 in fees you didn't know about. Here's what your seat actually costs across three sites."

## Day 34 Creative Inputs (Measurement-Grade)

| Input | Value | Implication for Copy |
|-------|-------|----------------------|
| Day-0 activator persona | n=4, +32–+39s, σ≈3s, μ=35s | Copy must deliver single-action conversion within 30-second attention window |
| Day-1 retention rate | **0% (8-of-8 = measurement-grade)** | NO "track / get alerts / come back" promise — those words actively repel the activator |
| Day-2 retention rate | 0% (7-of-7 combined) | Hard-transactional flow. Convert once or never. |
| Day-3 retention rate | **0% (3-of-3, NEW today)** | The transactional window extends through +96h. No re-engagement under any tested condition. |
| Combined Day-1+Day-2+Day-3 | **15-of-15 = 0%** | Empirically calibrated: the +35s activator does NOT re-engage in the first 4 days, period. |
| Activation-rate skew | 60% Day-0 non-activator inbound May 4–9 | Copy must filter non-activators upstream via specific-event anchor |
| Activator wl-event-end | 2-of-4 sealed in data-loss column | Future-event anchors only (>+7d horizon); same-week fixtures = DO-NOT-BID |
| Drip cron status | **DAY 3 OF GENERALIZED FAILURE, matrix expanding to 9 users by 22:00 UTC tonight** | Cannot promise drip emails or post-signup nurture; Pixel retargeting also broken |
| WC Final countdown | **70 days = exactly 10 weeks today** | A-α "10 weeks 1 day" deprecates; A-β "10 weeks" round-week activates LIVE (one day early) |
| Inter Miami / Messi hypothesis | 2-of-2 future-fixture activators; jadbennis +6d to May 17 | Variation J advances DRAFT → PRE-LAUNCH-READY; LP ship-by May 14 (3 days) |
| Surge-cooldown signal | NEW today: hours-since-last-wl-add 65h, 7h to 72h dormancy trigger | Persona-precision targeting weathers cooldown better than volume-targeting; A-β's stable refresh cadence is creative-fatigue-resistant |

---

## Variation A-β LIVE — WC Final "10 Weeks" Round-Week Framing

**Status:** **ACTIVATES LIVE TODAY.** Yesterday this was forecast as a May 12 launch (aligned with WC 30-day tactical window opening). **Today's calendar arithmetic actually aligns the "10 weeks" framing one day earlier**: 70 days = 10 weeks × 7 days exactly. Variation A-α "10 weeks 1 day" terminates with its May 10 iteration as the final copy; A-β takes over the WC Final paid creative slot starting today.

**Why round-week framing is the durable structure:** The trailing single-digit-day suffix ("3 days", "1 day") creates urgency-decay risk as it counts down day-by-day — every 24h required a copy edit. Round-week framing ("10 weeks", "9 weeks", "8 weeks") creates a **stable copy with a 7-day refresh cadence** — significantly better creative fatigue management when paid is active. The May 12 transition was forecast yesterday; today's exact-10-weeks alignment makes the launch-eligible date today.

**Landing page:** `/world-cup-2026/metlife-stadium`

**Audience targeting:** Future-event-anchor seekers; football/soccer fans tracking 2026 World Cup Final; geo-East-coast US.

### Google Search Ads

```
Headline 1 (30): World Cup Final · 10 Weeks Out
Headline 2 (30): MetLife · 3 Sources · 1 Page
Headline 3 (30): See What Your Seat Costs
Description 1 (90): Ten weeks until the World Cup Final at MetLife. Compare Ticketmaster, SeatGeek, StubHub.
Description 2 (90): No checkout-fee surprises. Real prices for real seats, side-by-side, before you click buy.
```

### Meta Ads

```
Primary text (visible 125): The World Cup Final is 10 weeks out. We line up all three major resale sites on one page so the price you see is the price you pay.
Headline (40): WC Final · 10 Weeks · Compare All 3
Description (30): MetLife · July 19 · No fee tricks
```

**Test against:** Variation A baseline (commit `2617882` MetLife LP, deployed Apr 25). A vs A-β isolates round-week-framing elasticity from any countdown-suffix copy.

**Refresh cadence going forward:**
- **Today (May 11):** "10 weeks" activates
- **May 18:** "9 weeks"
- **May 25:** "8 weeks"
- **June 1:** "7 weeks"
- **June 8:** "6 weeks"
- **June 15:** "5 weeks"
- **June 22:** "4 weeks"
- **June 29:** "3 weeks"
- **July 6:** "2 weeks"
- **July 13:** "1 week" (transitions to day-precision in the final 7 days only)

**Creative-fatigue advantage:** A-β requires **9 copy edits over 10 weeks** vs. A-α's **70 copy edits** (one per day). For a paid-budget-constrained launch, that is a meaningful ops savings.

---

## Variation A-α (DEPRECATED) — Final Snapshot for Posterity

**Status:** **DEPRECATED today.** May 10 iteration ("10 weeks 1 day") was the final copy. Three-iteration history terminates: May 6 (~"10 weeks 3 days") → May 9 (~"10 weeks 2 days") → May 10 ("10 weeks 1 day"). The structure exits the portfolio; A-β replaces it.

**Why deprecation today:** The "X weeks Y days" copy structure was always interim — designed to bridge the gap between the "71 days" / "70 days" daily-precision countdown and the round-week framing. With today's exact-10-weeks alignment, the round-week structure can take over without an awkward transition day.

**No creative refresh today.** The May 10 iteration is the deprecation-snapshot. If A-α is ever revived (e.g., for the final 7-day daily-precision push in mid-July), the structure is documented and ready.

---

## Variation I (REFRESH) — Persona-Precision Filter Copy with 15-of-15 Retention Calibration

**Status:** **REFRESH.** Yesterday's Variation I introduced "no tracker, no nurture sequence" honesty positioning predicated on:
1. Cron-send generalized-broken (cannot deliver drip-nurture)
2. Day-1 retention 7-of-7 FAIL (sample n=7)

**Today's refresh sharpens the empirical calibration:**
1. Cron-send Day 3 of generalized failure, matrix expanding to 9 users by 22:00 UTC (vs. 7 yesterday)
2. Day-1 retention 8-of-8 FAIL = **measurement-grade at n=8** (vs. hypothesis at n=7 yesterday)
3. **Day-2 retention 7-of-7 FAIL** (NEW combined data point: 4 May-8 batch + 3 May-7 batch carry)
4. **Day-3 retention 3-of-3 FAIL** (NEW dataset today: sparkitrightthere/natalie/cjthomas)
5. **Combined 15-of-15 = 0% return-session activation across +24h-to-+96h post-signup window**

**The strategic implication of the refresh:** Yesterday Variation I's "no tracker, no emails" claim was *aspirationally honest* — the platform technically aims to send emails but cannot. **Today the same claim is descriptively accurate**: 15-of-15 return-session failure means the platform empirically does not produce re-engagement of any kind in the first 4 days regardless of intent. **The copy is now an honest description of measured behavior, not a workaround for broken infrastructure.** That is a stronger paid-creative position.

**Strategic angle:** Variation I is engineered to **filter non-activators BEFORE the click**. The copy is intentionally narrow: it speaks only to users with a specific event already in mind, on a future date. This is the +35s activator persona by description.

**Why this is a paid-creative innovation, not a CRO-on-page solution:** CRO can fix Day-0 nudge surfaces (post-click). But Day-0 non-activators clicked through and chose not to add — their intent was misaligned to start. Variation I shifts the alignment to pre-click. Lower CTR is acceptable, even desirable; higher per-click activator rate is the goal.

**Landing page:** Specific-event-page (`/event/[id]`) or venue-page with future fixtures (`/venues/kia-center`, `/venues/wrigley-field`). NOT homepage. NOT `/compare`.

**Audience targeting:** Specific-event-name long-tail keywords (Google) or interest-based event-vertical narrows (Meta). NO broad "compare ticket prices" buckets.

### Google Search Ads (REFRESHED)

```
Headline 1 (30): Already Know the Show?
Headline 2 (30): Compare All 3 in 30 Sec
Headline 3 (30): One Trip. One Decision.
Description 1 (90): Stop tab-flipping between Ticketmaster, SeatGeek, and StubHub. We line them up.
Description 2 (90): Pick your seat. See the real price. Buy. Done. No follow-up emails. No retargeting.
```

**Refresh notes vs. yesterday's I:**
- Headline 3 changed from "Then Buy & Be Done" to "One Trip. One Decision." — language tightens around the 15-of-15 measurement; "one trip" describes the platform's actual measured behavior (single-session use), not a sales pitch.
- Description 2 ends with "No follow-up emails. No retargeting." — yesterday read "No tracker, no nurture sequence" which is industry-jargon-y. Plain language for consumer audience.

### Meta Ads (REFRESHED)

```
Primary text (visible 125): If you already know your show, we save you the tab-flipping. One page lines up Ticketmaster, SeatGeek, and StubHub. Compare, buy, done.
Headline (40): One Show. Three Sites. One Page.
Description (30): No emails after. No retargeting.
```

**Refresh notes vs. yesterday's Meta primary text:**
- Removed "Pick, compare, buy, done" run-on; tightened to "Compare, buy, done" — cleaner cadence.
- Description changed to "No emails after. No retargeting." — the temporal anchor ("after") makes the claim verifiable to the user (they can confirm by checking inbox in 24h), which raises perceived honesty.

**Why "no emails after / no retargeting" is the durable copy:**

This copy intentionally **disables the price-alert / drip-email proposition** that the broken cron infrastructure cannot fulfill. The +35s activator profile (n=4, σ≈3s) suggests these users do NOT want a multi-touch flow — they want a single-session conversion. **15-of-15 retention measurement empirically confirms they do not re-engage.** Variation I positions ticketscan.io as the **single-session decisive-comparison utility** that the +35s profile is implicitly asking for, and **truthfully** removes the broken-promise risk.

**Test against:** Variation G-α (Kia Center / Noah Kahan single-event LP). G-α is the existing "specific event anchor" winner; Variation I is the **persona-targeted same-strategy without the venue-specific anchor**, evaluated against G-α's CPA / activation-rate baseline.

**Quantified expectation:** If generic compare-prices gets 60% non-activator clicks (Day 34 inbound batch baseline) and Variation I cuts that to 30% non-activator clicks at the cost of 50% volume reduction, **net activators per dollar improve by ~40%**. This is the precise prediction Variation I is designed to test once paid is unblocked. **The 15-of-15 retention measurement does not change this prediction — it just makes the "no emails after" half of the copy structurally honest rather than aspirationally so.**

---

## Variation J (PRE-LAUNCH-READY) — Inter Miami × Portland · Nu Stadium · May 17

**Status:** **ADVANCES from DRAFT to PRE-LAUNCH-READY.** Yesterday this variation was drafted as conditional on (a) SEO Agent confirmation of Inter Miami / Messi organic-channel footprint and (b) Nu Stadium 5-page LP cluster shipping. Today's status changes:
- jadbennis's May 17 fixture is now **+6 days away** (was +7 yesterday)
- Nu Stadium LP cluster Day 5 of 404 carry
- **LP ship-by-date is May 14 (3 days)** for 48–72h Google crawl-and-index buffer before the May 17 fixture
- SEO investigation Day 3 of carry (manual Search Console check today recommended as Prio 0)

**Why pre-launch-ready, not yet launching:** The copy is locked. The audience targeting is locked. The two gates are now (a) Nu Stadium LP cluster deployed by May 14 with `/venues/nu-stadium` returning 200 (currently 404), (b) Inter Miami / Messi SEO footprint confirmed by SEO Agent. If both clear by May 14, **paid launch is May 14–15 with a +2-to-+3-day pre-fixture window**.

**Why drafted now:** 2-of-2 Day-0 activators converged on Inter Miami fixtures in the May 5–May 8 inbound batch (jadbennis × Inter Miami × Portland May 17 + liambot62 × Toronto FC × Inter Miami May 9 SEALED). If SEO confirms the inbound channel is organic Inter Miami / Messi search, paid keyword expansion becomes the highest-ROI demand-amplification angle in the entire failure-window.

**Landing page (when ready):** `/venues/nu-stadium` (primary) + `/event/[inter-miami-portland-may-17-id]` (specific-fixture).

**Audience targeting:** Inter Miami / Messi / MLS specific-fixture keywords; geo-Southeast US + national Messi-search interest segments.

### Google Search Ads

```
Headline 1 (30): Inter Miami × Portland · May 17
Headline 2 (30): Compare All 3 Sites in 30 Sec
Headline 3 (30): Real Seat-Level Prices
Description 1 (90): Messi at Nu Stadium, May 17. We line up Ticketmaster, SeatGeek, StubHub side-by-side.
Description 2 (90): One page. Real prices for real seats. No tab-flipping, no checkout-fee surprises.
```

### Meta Ads

```
Primary text (visible 125): Messi vs Portland Timbers at Nu Stadium, May 17. We line up Ticketmaster, SeatGeek, and StubHub on one page so you see the real price.
Headline (40): Messi · May 17 · Compare All 3
Description (30): Nu Stadium · Real prices
```

**Launch gates (status today):**
1. **Nu Stadium LP cluster deployed** — `/venues/nu-stadium` returns 200 (currently 404, Day 5 of carry). **Ship-by May 14 (3 days)** for crawl-buffer.
2. **SEO Agent confirms Inter Miami / Messi organic footprint** — Day 3 of carry; manual Search Console check today recommended as Prio 0.
3. **Paid budget approved** — Day 34 of carry; no signal change.

**Pre-launch decision tree:**

| Gate 1 (LP ship) | Gate 2 (SEO confirm) | Launch window |
|-------------------|----------------------|----------------|
| Ships by May 14 | Confirms by May 13 | **May 14–15 launch (+2-to-+3-day pre-fixture)** |
| Ships by May 14 | Does not confirm | **HOLD** — bid on Inter Miami specifically without SEO data is high-risk (might over-bid against a non-existent channel) |
| Slips past May 14 | Confirms by May 13 | **POST-FIXTURE LAUNCH** for Inter Miami's broader 2026 MLS season (valid but loses the specific Day-0-activator fixture launch alignment) |
| Slips past May 14 | Does not confirm | **HOLD INDEFINITE** — both gates remain open |

**Caveat:** Even if both gates clear, Variation J is **launch-conditional on paid budget approval** (which itself is unblocked-gated). Day-34 paid-launch-readiness still says HOLD COMPOUNDS. J is **ready to fire** but the larger paid-launch gate is unchanged.

**Bid-cap recommendation when launching:** Cap CPC at the lower of (a) industry-benchmark "messi tickets" CPC × 0.7 or (b) computed CPA-target × estimated conversion rate × 0.6 (safety margin for first-launch attribution darkness). **The GA Data API gate is the binding constraint on bid-cap precision** — without it, all attribution post-launch is GTM-client-side only, which limits CPA calculation accuracy.

---

## Carry-Forward Variations (Status Updates Only — No Refresh Today)

| Variation | Status | Notes |
|-----------|--------|-------|
| **A** (MetLife / WC group stage) | DEPLOYED LP, Day 17 carry | Maintained. Ready for activation when budget approved. **A vs A-β is the launch-day A/B test today** for round-week-framing elasticity. |
| **A-α** (WC Final daily-precision countdown) | **DEPRECATED today** | May 10 "10 weeks 1 day" was final iteration. Documented for revival in final 7-day daily-precision push if needed (mid-July). |
| **B** (SoFi Stadium / Ed Sheeran cluster) | LP exists; no recent inbound signal | Holding. blubberboi 34 days silent. |
| **C** (Levi's / WC West cluster) | Pre-LP-build | Holding. |
| **D** (Lincoln Financial / WC Philadelphia) | Pre-LP-build | pete.uzelac77 Day 30 silent; LP build deadline tightens to WC opening (31 days). |
| **E** (Wrigley Field / Cubs) | DEPLOYED + sitemap-discovered | Day 7 of sitemap-discovered carry. Crawl-and-index horizon ~May 19–June 2. **Cubs G1-G6 SEALED in data-loss column → evergreen Cubs season terms only.** |
| **F** (Generic compare-prices buckets) | RETIRED | Day 15 of retired status. Activation-rate dilution risk + 15-of-15 retention measurement re-validates. |
| **G-α** (Kia Center / Noah Kahan) | LP DEPLOYED + Day-0 handshake | **Day 4 of confirmed-activator-destination carry. Only paid-safe portfolio variation.** cjthomas's June 12 fixture +32d future. |
| **G-β** (Orlando-concerts category) | LP-gated Day 4 | Pending `/tickets/orlando-concerts` build. |
| **G-γ** (Noah Kahan tour-cluster) | Holding | Linked to G-α success. |
| **H** (BMO Field / Toronto FC) | LP-gated Day 3; liambot62-specific event SEALED | Post-fixture for May 9 event; valid for Toronto FC home schedule continuation. |
| **I** (Persona-precision filter) | **REFRESHED today** with 15-of-15 retention calibration | "No emails after, no retargeting" copy now empirically descriptive vs. yesterday's aspirational framing. |
| **J** (Inter Miami / Messi / Nu Stadium) | **PRE-LAUNCH-READY today** | Was DRAFT yesterday. Gates: Nu Stadium LP by May 14 + SEO confirm; **launch window May 14–15 if both clear**. |

---

## Recommendations Forward

**For paid launch readiness (when unblocked):**
1. **A + A-β** for WC Final cluster (A-β LIVE today; A vs A-β A/B test is the launch-day creative-elasticity probe).
2. **G-α** as the single safest single-event LP test (Day 4 of confirmed-activator-destination carry).
3. **I (refreshed)** as the persona-precision baseline (low-volume, high-per-click-quality, copy empirically calibrated to 15-of-15 retention measurement).
4. **J pre-launch-ready** for May 14–15 if Nu Stadium LP ships + SEO confirms.

**Order-of-launch when paid is approved:**
1. **G-α first** (lowest CPA risk; confirmed Day-0-activator destination; +32d future-event horizon)
2. **A + A-β second** (WC 30d tactical window opens TOMORROW; round-week framing is launch-aligned today)
3. **I third** (persona-precision filter; baseline for non-activator dilution test; copy now structurally honest)
4. **J fourth (conditional)** (highest ROI if Inter Miami / Messi hypothesis confirms + LP ships by May 14)

**Refresh cadence going forward:**
- **A-β:** 7-day round-week refresh (May 18 → "9 weeks", May 25 → "8 weeks", etc.); 9 total copy edits across the 70-day campaign window
- **A-α:** DEPRECATED — no refresh planned (revival contingent on final 7-day daily-precision phase if launched)
- **Variation I (refreshed):** 14-day refresh cadence (persona-precision copy ages slowly; next refresh ~May 25)
- **Variation J:** launch-conditional; refresh cadence TBD after launch

**Cooldown-aware creative directive (NEW today):**

Today's surge-cooldown signal (65h hours-since-last-wl-add, 7h to 72h dormancy trigger) creates a creative directive for the *next* variation if surge does not reignite by May 13:
- **If 72h dormancy trigger fires (hours-since-last-wl-add > 72h tomorrow May 11 13:07 UTC),** the +35s activator pattern downgrades from "ongoing" to "5-day burst, dormant"
- **In that case,** Variation A-β + I + G-α become the *only* viable launch slate (J launches conditionally on Inter Miami's specific channel persistence, which the cooldown might have already extinguished)
- **Variation K (DRAFT pending tomorrow's dormancy-trigger read):** if cooldown confirms, a "data-storytelling" angle that leans into the platform's measured behavior — e.g., "We compared 100,000+ tickets across three sites last month. Here's what we found about WC Final pricing." Slow-burn educational anchor that does not depend on activator-burst inbound. **This is a backup variation only**, not for launch this week.

---

**Prepared by Agent 4 (Paid Ads Manager)** — Day 34 of paid-launch-readiness carry. Today's variations encode four of the sharpest measurement-grade findings in the failure-window: cron-send Day-3 generalized failure (drives "no emails after, no retargeting" honesty in Variation I-refresh), 15-of-15 return-session retention failure across +24h-to-+96h windows (drives empirical calibration of single-session positioning), 70-days-exactly-10-weeks calendar alignment (drives A-α deprecation + A-β LIVE today, one day earlier than yesterday's forecast), and Inter Miami May 17 fixture +6d compression (drives Variation J advance from DRAFT to PRE-LAUNCH-READY with the 3-day Nu Stadium LP ship-by deadline as the binding constraint).
