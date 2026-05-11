# Ad Creative Variations — 2026-05-10

_Companion to `ads-daily-2026-05-10.md` — Day 33 of paid-launch-readiness carry_

## Brand Voice Reminder

Helpful, data-driven, slightly irreverent consumer advocate. **Not** a "deals!" hype channel. Not a generic compare-prices commodity. The voice is: "You shouldn't pay $89 in fees you didn't know about. Here's what your seat actually costs across three sites."

## Day 33 Creative Inputs (Measurement-Grade)

| Input | Value | Implication for Copy |
|-------|-------|----------------------|
| Day-0 activator persona | n=4, +32–+39s, σ≈3s, μ=35s | Copy must deliver single-action conversion within 30-second attention window |
| Day-1 retention rate | 0% (7-of-7 FAIL across 2 batches) | NO "track / get alerts / come back" promise — those words actively repel the activator |
| Day-2 retention rate | 0% (3-of-3 FAIL) | Hard-transactional flow. Convert once or never. |
| Activation-rate skew | 60% Day-0 non-activator inbound May 4–9 | Copy must filter non-activators upstream via specific-event anchor |
| Activator wl-event-end | 2-of-4 sealed in data-loss column | Future-event anchors only (>+7d horizon); same-week fixtures = DO-NOT-BID |
| Drip cron status | GENERALIZED FAILURE Day 9 of carry | Cannot promise drip emails or post-signup nurture; Pixel retargeting also broken |
| WC Final countdown | 71 days = "10 weeks 1 day" | A-α refresh; A-β round-week framing introduced for May 12 alignment |
| Inter Miami / Messi hypothesis | 2-of-2 Day-0 activator concentration | Conditional expansion target if SEO confirms organic footprint |

---

## Variation A-α (Refresh) — WC Final "10 weeks 1 day"

**Status:** Refresh of May 6 generation. Countdown decrement only; no copy structure change. Validity window narrows to 2 days (transitions to "10 weeks" framing on May 12, see A-β below).

**Landing page:** `/world-cup-2026/metlife-stadium`

**Audience targeting:** Future-event-anchor seekers; football/soccer fans tracking 2026 World Cup Final; geo-East-coast US.

### Google Search Ads

```
Headline 1 (30): World Cup Final · 10 Wks 1 Day
Headline 2 (30): MetLife Stadium · July 19
Headline 3 (30): Compare 3 Sources Now
Description 1 (90): The 2026 Final lands in 71 days. We compare Ticketmaster, SeatGeek & StubHub side-by-side.
Description 2 (90): One page. Three sites. Real seat-level pricing — not the headline number that changes at checkout.
```

### Meta Ads

```
Primary text (visible 125): 71 days to the World Cup Final at MetLife. We line up Ticketmaster, SeatGeek, and StubHub on one page so you don't get blindsided by fees at checkout.
Headline (40): World Cup Final · 71 Days · Compare
Description (30): MetLife · July 19 · 3 sources
```

**Test against:** Variation A baseline (commit `2617882` MetLife LP, deployed Apr 25). A-α refresh is the third countdown-decrement-only iteration since May 6 — no copy structure change to isolate countdown elasticity from copy elasticity.

---

## Variation A-β (NEW Today) — WC Final "10 Weeks" Round-Week Framing

**Status:** New variation introduced for **May 12 launch alignment** (WC = 30 days tactical window opens; A-α "10 weeks 1 day" transitions to "10 weeks" simultaneously).

**Why round-week framing:** The trailing single-digit-day suffix ("3 days", "1 day") creates urgency-decay risk as it counts down day-by-day. Round-week framing ("10 weeks", "9 weeks", "8 weeks") creates a **stable copy with a 7-day refresh cadence** — better creative fatigue management when paid is active. The May 12 transition is the natural launch point because it coincides with WC 30-day window opening.

**Landing page:** `/world-cup-2026/metlife-stadium`

**Audience targeting:** Same as A-α; tested as a parallel ad group.

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

**Test against:** A-α "10 weeks 1 day" framing. A vs A-β is the **launch-day A/B test** for May 12 if paid budget is approved by then — measures countdown-suffix elasticity at the WC 30-day pivot.

**Refresh cadence under A-β:** May 19 → "9 weeks", May 26 → "8 weeks", June 2 → "7 weeks", etc. Each refresh is a 2-line copy edit.

---

## Variation I (NEW Today) — Persona-Precision Filter Copy

**Status:** NEW variation. Designed to address two simultaneous Day 33 findings:
1. 60% Day-0 non-activator skew (May 4–9 inbound batch)
2. 0% Day-1 retention across 2 batches (n=7)

**Strategic angle:** Since the platform's retention machinery is broken (cron-send generalized + Pixel uninstalled + Day-1 retention 0%), Variation I is engineered to **filter non-activators BEFORE the click**. The copy is intentionally narrow: it speaks only to users with a specific event already in mind, on a future date. This is the +35s activator persona by description.

**Why this is a paid-creative innovation, not a CRO-on-page solution:** CRO can fix Day-0 nudge surfaces (post-click). But Day-0 non-activators clicked through and chose not to add — their intent was misaligned to start. Variation I shifts the alignment to pre-click. Lower CTR is acceptable, even desirable; higher per-click activator rate is the goal.

**Landing page:** Specific-event-page (`/event/[id]`) or venue-page with future fixtures (`/venues/kia-center`, `/venues/wrigley-field`). NOT homepage. NOT `/compare`.

**Audience targeting:** Specific-event-name long-tail keywords (Google) or interest-based event-vertical narrows (Meta). NO broad "compare ticket prices" buckets.

### Google Search Ads

```
Headline 1 (30): Already Know Your Show?
Headline 2 (30): Compare 3 Sites in 30 Sec
Headline 3 (30): Then Buy & Be Done
Description 1 (90): Stop tab-flipping between Ticketmaster, SeatGeek, and StubHub. We line them up.
Description 2 (90): Pick your seat. See the real price across all three. Buy. Done. No tracker, no nurture sequence.
```

### Meta Ads

```
Primary text (visible 125): If you already know what show you're going to, we save you the tab-flipping. One page lines up Ticketmaster, SeatGeek, and StubHub side-by-side. Pick, compare, buy, done.
Headline (40): One Show. Three Sites. One Page.
Description (30): No tracker. No emails. Done.
```

**Why "no tracker, no nurture sequence" / "no emails":**

This copy intentionally **disables the price-alert / drip-email proposition** that the broken cron infrastructure cannot fulfill. The +35s activator profile (n=4, σ≈3s) suggests these users do NOT want a multi-touch flow — they want a single-session conversion. Variation I positions ticketscan.io as the **single-session decisive-comparison utility** that the +35s profile is implicitly asking for, and **truthfully** removes the broken-promise risk.

**Test against:** Variation G-α (Kia Center / Noah Kahan single-event LP). G-α is the existing "specific event anchor" winner; Variation I is the **persona-targeted same-strategy without the venue-specific anchor**, evaluated against G-α's CPA / activation-rate baseline.

**Caveat:** Variation I is **persona-correct but conversion-volume-conservative**. Expect lower click volume than generic compare-prices copy at higher per-click activator rate. **The math:** if generic compare-prices gets 60% non-activator clicks and Variation I cuts that to 30% non-activator clicks at the cost of 50% volume reduction, **net activators per dollar improve by ~40%**. This is the precise prediction Variation I is designed to test once paid is unblocked.

---

## Carry-Forward Variations (Status Updates Only — No Refresh Today)

| Variation | Status | Notes |
|-----------|--------|-------|
| **A** (MetLife / WC group stage) | DEPLOYED LP, Day 16 carry | Maintained. Ready for activation when budget approved. |
| **B** (SoFi Stadium / Ed Sheeran cluster) | LP exists; no recent inbound signal | Holding. blubberboi 33 days silent. |
| **C** (Levi's / WC West cluster) | Pre-LP-build | Holding. |
| **D** (Lincoln Financial / WC Philadelphia) | Pre-LP-build | pete.uzelac77 Day 29 silent; LP build deadline tightens to WC opening. |
| **E** (Wrigley Field / Cubs) | DEPLOYED + sitemap-discovered | Day 6 of sitemap-discovered carry. Crawl-and-index horizon ~May 19–June 2. **Cubs G1-G6 SEALED in data-loss column → evergreen Cubs season terms only.** |
| **F** (Generic compare-prices buckets) | RETIRED | Day 14 of retired status. Activation-rate dilution risk (today's 2nd consecutive decline validates). |
| **G-α** (Kia Center / Noah Kahan) | LP DEPLOYED + Day-0 handshake | **Day 3 of confirmed-activator-destination carry. Only paid-safe portfolio variation.** |
| **G-β** (Orlando-concerts category) | LP-gated Day 3 | Pending `/tickets/orlando-concerts` build. |
| **G-γ** (Noah Kahan tour-cluster) | Holding | Linked to G-α success. |
| **H** (BMO Field / Toronto FC) | LP-gated Day 2; liambot62-specific event SEALED today | **Post-fixture for May 9 event; valid for Toronto FC home schedule continuation.** |

---

## Conditional Variation J (DRAFT — Pending SEO Confirmation)

**Status:** DRAFT only. Activation gated on SEO Agent confirmation of Inter Miami / Messi organic-channel footprint. Not for launch today.

**Why drafted now:** 2-of-2 Day-0 activators converged on Inter Miami fixtures in 4 days (jadbennis × Inter Miami × Portland May 17 + liambot62 × Toronto FC × Inter Miami May 9 SEALED). If SEO confirms the inbound channel is organic Inter Miami / Messi search, paid keyword expansion becomes the highest-ROI demand-amplification angle. Drafting today lets paid launch on May 14–15 if (a) SEO confirms by May 12, (b) Nu Stadium 5-page LP cluster ships by May 14.

### Google Search Ads (DRAFT)

```
Headline 1 (30): Inter Miami × Portland · May 17
Headline 2 (30): Compare Tickets in 30 Sec
Headline 3 (30): Get the Real Price
Description 1 (90): Messi at Nu Stadium. We line up Ticketmaster, SeatGeek, StubHub side-by-side.
Description 2 (90): One page. Real seat-level prices. No tab-flipping, no checkout-fee surprises.
```

### Meta Ads (DRAFT)

```
Primary text (visible 125): Messi vs Portland Timbers at Nu Stadium, May 17. We line up Ticketmaster, SeatGeek, and StubHub on one page so you see the real price.
Headline (40): Messi · May 17 · Compare All 3
Description (30): Nu Stadium · Real prices
```

**Launch gates:**
1. SEO Agent confirms Inter Miami / Messi organic footprint — Day 2 of investigation carry.
2. `/venues/nu-stadium` (or equivalent Inter Miami LP) deploys with 48-72h crawl-buffer before May 17.
3. Paid budget approved.

**Pre-launch deadline:** May 14 (gives 3-day pre-fixture launch window). If LP cluster slips past May 14, Variation J becomes a post-fixture build for Inter Miami's broader 2026 MLS season — useful but loses the Day-0-activator-fixture launch alignment.

---

## Recommendations Forward

**For paid launch readiness (when unblocked):**
1. Variation A + A-α + A-β triplet for WC Final cluster (May 12 alignment).
2. Variation G-α as the single safest single-event LP test.
3. Variation I as the persona-precision baseline (low-volume, high-per-click-quality).
4. Variation J conditional on Inter Miami SEO confirmation + LP build.

**Order-of-launch when paid is approved:**
1. **G-α first** (lowest CPA risk; confirmed Day-0-activator destination; +33d future-event horizon)
2. **A-α / A-β second** (WC 30d tactical window aligned)
3. **I third** (persona-precision filter; baseline for non-activator dilution test)
4. **J conditional** (highest ROI if Inter Miami / Messi hypothesis confirms)

**Refresh cadence going forward:**
- A-α: deprecates May 12 (transitions to A-β)
- A-β: 7-day round-week refresh starting May 19
- Variation I: 14-day refresh cadence (persona-precision copy ages slowly)
- Variation J: launch-conditional; refresh cadence TBD after launch

---

**Prepared by Agent 4 (Paid Ads Manager)** — Day 33 of paid-launch-readiness carry. Today's variations encode three of the sharpest measurement-grade findings in the failure-window: cron-send generalized failure (drives "no tracker, no emails" honesty in Variation I), 7-of-7 Day-1 FAIL (drives single-session decisive-comparison positioning in Variation I), and 2-of-2 Inter Miami activator concentration (drives Variation J draft for May 14 conditional launch).
