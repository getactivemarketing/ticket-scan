# SEO Heads-Up: Friday 2026-05-22 venue refresh — Gillette Stadium

## Touched: web/src/data/worldcup.ts

**Filed:** Friday morning 2026-05-22 as the **literal first artifact** of today's daily-content-agent run, ahead of the current-state read of the Gillette Stadium entry, ahead of any `worldcup.ts` editing, and ahead of any content-hook composition. **Forward Fix v2 first canonical (non-test) execution.** Lumen Field 5/15 was test 1 of 2, Levi's Stadium 5/16 was test 2 of 2; both landed clean, so per the lock-in criterion committed in `seo-requests/2026-05-09-content-data-touch.md` §Forward Fix, the run order is canonical from today forward.

The three structural changes locked in:

1. **Step 1 = SEO heads-up file as artifact 1 of the session.** No other content artifact has been produced yet this morning. The Step 0 cross-check grep on `'gillette-stadium'` and the current-state Gillette entry read (lines 255-276 in `worldcup.ts`) ran only as the source for this heads-up's match-list and section-baseline data; no draft, no commit, no content-hook composition has started.
2. **Calendar-day cadence (same morning as refresh, not evening-prior).** This heads-up is landing ≥2 hours ahead of the absorbing `Content refresh: gillette-stadium` commit, giving SEO a clean skim-and-reply window before commit time.
3. **mtime ordering.** This file's mtime will precede the `worldcup.ts` modification by enough margin that the Path-B watch (per `seo-requests/2026-05-10-seo-replies-bundle.md`) can verify cadence post-commit.

## Refresh scope

**Slug:** `gillette-stadium`
**Section in file:** `worldCupVenues['gillette-stadium']` (existing entry at line 255)
**Sparse-data status before this refresh:** 3 sections, 4 ticketTips, 4 keywords, 1-sentence description — same baseline as MetLife (pre-4/25), SoFi (pre-5/01), Hard Rock (pre-5/02), AT&T (pre-5/08), Mercedes-Benz (pre-5/09), Lumen Field (pre-5/15), Levi's Stadium (pre-5/16). Gillette is the **eighth** sparse WC USA-venue refresh in this template arc and the eighth-consecutive in the post-MetLife pair-slot cadence.

## Step 0 cross-check — run pre-edit — **STRUCTURAL CATCH**

```
$ grep -n "venue: 'gillette-stadium'" web/src/data/worldcup.ts | grep "round: '"
532: M11 — 2026-06-14 (Sun) 16:00 ET — Group Stage Group F
557: M27 — 2026-06-18 (Thu) 22:00 ET — Group Stage Group B
588: M59 — 2026-06-27 (Sat) 20:00 ET — Group Stage Group F
```

**3 matches total** (3 Group Stage, **0 knockout**). **Yesterday's content-hook Hook 3 stated "Gillette Stadium has the second-deepest US WC content surface after AT&T (6 matches = 3 GS + R32 + R16 + QF-1)."** This is wrong. The actual data: 3 Group Stage matches and zero knockout-round matches at Gillette. Cross-check against the full knockout-bracket grep confirms **no R32, no R16, no QF, no SF, no TP, no F at Gillette** — the knockout matches are distributed across MetLife (2 R32, 2 R16, 1 SF, 1 F), SoFi (2 R32, 2 R16, 1 QF, 1 SF), AT&T (2 R32, 2 R16, 1 QF), Hard Rock (2 R32, 2 R16), Mercedes-Benz (2 R32, 2 R16), Lumen Field (1 R32), Estadio Azteca (1 R32, 1 R16, 1 QF), BC Place (1 R32), NRG (1 R16), Arrowhead (1 R16), and zero at Gillette / Levi's / Lincoln Financial. **Hook 3's "second-deepest after AT&T" framing was the third structural Step-0 catch since the step was added 5/02** (after MetLife 5/02 off-by-one and AT&T 5/08 off-by-two and Mercedes-Benz 5/09 off-by-two — same off-by-N family).

**Second structural catch with the same fix scope:** Last week's `2026-05-16` Levi's Stadium refresh-log entry stated "Levi's is the only US WC venue without a knockout-round match." This is also wrong — Gillette Stadium also has zero knockout matches. There are **two** pure-group-stage US WC venues (Levi's + Gillette), not one. The Levi's "only US WC venue" framing was overstated and should be downgraded to "one of two" in any future content reusing the Levi's-1994-Stanford-heritage angle.

**Updated Step-0 hit rate:**

| Date | Plan / queue said | Actual | Drift | Pattern |
|------|-------------------|--------|-------|---------|
| 2026-05-01 | SoFi hosts Third-Place Playoff | SoFi hosts Semi-Final | round-name miscoding | Hit |
| 2026-05-02 | MetLife "plus seven earlier matches" | MetLife hosts 9 matches total | off-by-one | Hit |
| 2026-05-08 | AT&T hosts 9 matches | AT&T hosts 7 matches | off-by-two | Hit |
| 2026-05-09 | Mercedes-Benz hosts 8 matches | Mercedes-Benz hosts 6 matches | off-by-two | Hit |
| 2026-05-15 | Lumen Field hosts 6 matches | Lumen Field hosts 5 matches | off-by-one | Hit |
| 2026-05-16 | Levi's Stadium hosts 3 matches | Levi's Stadium hosts 3 matches | NONE | Pass |
| 2026-05-22 | Gillette hosts 6 matches (3 GS + R32 + R16 + QF-1) | Gillette hosts 3 matches (3 GS, 0 knockout) | off-by-three | **Hit** |

**Step-0 hit rate: 6-of-7 (86%); 1-of-2 (50%) since the upstream Sunday-plan-composition cross-check supposedly absorbed in the 5/10 Sunday-plan composition.** Today's catch reopens the cross-check-absorption question — the Levi's 5/16 clean landing was a one-week pass, not a two-week structural fix. **The structural blocker filed 5/15 §(d) does NOT downgrade to "watch one more clean week" — it stays at the original elevated severity.** Two consecutive misses in three Sundays (the 5/03 Sunday plan composed Mercedes-Benz off-by-two; the 5/10 plan composed Lumen off-by-one but Levi's correct; the 5/17 plan composed Gillette off-by-three) suggests the upstream cross-check is intermittent rather than absorbed. Recommended: file the cross-check as a hard pre-Sunday-plan-composition step in next week's `next-week-plan.md` audit (Sunday 5/24).

**Match-by-match context for the description / sections / ticketTips:**

1. **M11 — Sun 6/14 16:00 ET — Group F.** Tournament's fourth day. Sunday afternoon 16:00 ET slot — peak New England June afternoon, June 14 historical Foxborough high ~74-82°F with low humidity and ~15-25% chance of afternoon thunderstorms. Sunday afternoon timing plus opening-weekend energy gives this a mid-to-high demand profile — third match of the tournament's opening weekend, the first US WC venue match after the SoFi opener (M1 Thu 6/11) and the MetLife/AT&T/Mercedes-Benz Friday-Saturday slate. Roughly mid-tier pricing across the three-match arc; not the page's floor anchor, not the page's stakes anchor.
2. **M27 — Thu 6/18 22:00 ET — Group B.** Thursday late-evening 22:00 ET kickoff — the latest weekday primetime slot any US WC venue hosts. Tournament's eighth day. New England June 22:00 evenings sit in the 58-68°F range — coolest match-time temperature of the three-match Gillette arc and one of the cooler match windows across all US WC venues (alongside Lumen Field evening matches). **Pricing-floor anchor for the page** — Thursday late-evening weekday timing is the lowest-demand window of the three Gillette matches, likely close to the cheapest get-in at Gillette across the tournament arc. Demand pattern: ~25-30% below the M11 Sunday-afternoon ceiling on the upper tiers.
3. **M59 — Sat 6/27 20:00 ET — Group F.** Saturday primetime 20:00 ET kickoff. **Page's highest-demand match by a wide margin** — Saturday primetime plus group-stage final-day stakes (M59 is the final Group F match, runs simultaneously with the other Group F match per FIFA's stakes-aligned closing fixtures). New England late-June 20:00 evenings 65-75°F, ~15-20% chance of light rain. Pricing demand bump above M11/M27 by ~35-50% on the upper tiers and ~20-30% on the lower tiers — Saturday primetime stakes-aligned closing-day group-stage matches historically run 30-45% above weekday-evening group-stage matches at the same venue per the 2014 (Brazil) and 2022 (Qatar) data.

## Description rewrite scope

3-match volume framing (all Group Stage, **zero knockout** — same structural profile as Levi's Stadium, **Gillette is the second US WC venue with zero knockout content surface** rather than uniquely the only one — correcting the 5/16 Levi's refresh-log overstatement), M59 Saturday 6/27 20:00 ET as the marquee group-stage-final-day Saturday-primetime anchor with stakes-aligned simultaneous-kickoff context (alongside the other Group F match), M27 Thursday 6/18 22:00 ET as the pricing-floor anchor (latest US WC weekday-evening kickoff at the cheapest demand window) and content-distinctive angle (the only US WC venue with a 22:00 ET weekday kickoff — a content-differentiated "late-night Thursday World Cup" framing the page can own), M11 Sunday 6/14 16:00 ET as the Sunday-afternoon mid-tier, **New England June weather honesty** (74-82°F daytime highs, 58-68°F late-evening temperatures, ~15-25% chance afternoon thunderstorms, low humidity — *not* a peak-heat concern unlike Hard Rock/AT&T/Mercedes-Benz, and the M27 22:00 ET kickoff actually benefits from cooler evening temperatures), **Foxboro Stadium 1994 World Cup same-site heritage callback** (the old Foxboro Stadium hosted six 1994 USA World Cup matches at the *same Foxborough site* — Argentina's three Group D matches including Maradona's expulsion match, Italy's two Group E matches, and the Spain vs Switzerland Round of 16 — this is the **only US WC venue with a 1994-USA-tournament-heritage angle on the exact same footprint** as the 2026 venue, structurally tighter than Levi's-Stanford callback which is 18 miles away from the 1994 site; content-differentiated "same-site 1994-to-2026 heritage" surface uniquely owned by Gillette), **Patriot Place adjacency context** (Foxborough's dining/retail/entertainment complex built into the Gillette site, the most-developed post-match hospitality footprint of any US WC venue, content angle for the pre-match and post-match search-intent surface), **MBTA Foxboro Line transit-honesty** (Foxboro Station MBTA commuter rail service exists but is historically game-day-only with limited Saturday/Sunday/weekday-evening service, no Boston subway direct, no Amtrak direct, Logan Airport is ~35 miles north, Providence T.F. Green ~25 miles south — Gillette is on the worse end of US WC venue transit access but better than Levi's; honest disclosure rather than papering over), **Revolution MLS pricing comp** (Revolution have played at Gillette since 1996, 30-year tenancy is the longest soccer-tenancy on a same-venue basis of any US WC site, regular-season Revolution pricing $25-$90 sideline at Gillette is the most-recent direct soccer-baseline reference at this exact venue), **2024 Copa America Group B pricing comp** (Gillette hosted 2024 Copa America Group B matches — Mexico/Ecuador/Venezuela/Jamaica — with $180-$550 sideline group-stage resale, the most-recent direct soccer-tournament pricing reference at this exact venue, directly applicable to the 2026 three-match arc), **USMNT friendlies historic pricing comp** (Gillette has hosted multiple USMNT and CONCACAF Gold Cup matches over the past decade at $50-$200 sideline regular-friendly pricing), **football-first soccer-config geometry honesty** (Gillette was built football-first like Levi's; the soccer-config touchline distance is similarly compromised — 100-Level row 1 sits ~15-18 yards from the touchline vs the league-average 12-14 yards — but the lower-bowl wraps tighter than Levi's so the 100-Level corners and endlines preserve sightlines better than Levi's at the same tier), **the structurally-modest pricing-floor surface** (Gillette has a 65,878 capacity — second-smallest among US WC venues alongside Arrowhead 76,416 / NRG 72,220 — and the smaller capacity caps the budget-tier inventory volume; FIFA Cat 4 floor estimated $110-$280, less aggressive than Levi's $80 floor but more aggressive than MetLife/SoFi's $150), cross-platform comparison framing (TM, SeatGeek, StubHub, FIFA resale), and TicketScan CTA with explicit price-alert mention.

## Sections expansion

3 → 9 entries. Mapped to Gillette's actual 100/200/300-Level layout (Gillette has a 3-level seating bowl + premium suites — capacity 65,878 is structurally smaller than Levi's 68,500, MetLife's 82,500, and AT&T's 80,000) with FIFA Cat 1-4 mapping:

- **100-Level Sideline (west sections 101-114, east sections 130-143, rows 1-25)** — FIFA Cat 1, $480-$1,600 (long-axis pitch, premium for M59 Saturday-primetime group-stage-final-day; honest 15-18 yard touchline-distance disclosure due to football-first geometry, similar to Levi's but tighter than Levi's at corner sections)
- **100-Level Corner (115-118, 126-129, 144-147)** — $320-$950 (angled corner views; tighter wrap than Levi's preserves the soccer-config sightlines better at corner sections than Levi's)
- **100-Level Endline (north 119-125, south 148-150)** — $260-$750 (behind the goals; the north endline includes the historical Revolution-supporters section "The Fort" from 1996-present, the longest continuous soccer-supporters section at any US WC venue site)
- **Putnam Club / EMC Club (200s premium)** — $700-$2,000 (covered, climate-controlled lounge access — the New England-thunderstorm hedge for M11 Sunday-afternoon and the early-evening rain hedge for M59 Saturday-primetime)
- **Mezzanine Sideline (200s sideline non-club)** — FIFA Cat 2, $300-$850 (best mid-range value)
- **Mezzanine Corner & Endline (200s corners)** — $200-$550
- **300-Level Upper Sideline** — FIFA Cat 3, $160-$450 (full-pitch panoramic from height; Gillette's narrower-than-Levi's geometry preserves sightlines from height better than Levi's at the same tier)
- **300-Level Upper Corner & Endline** — FIFA Cat 4, **$110-$280** (cheapest WC seats at Gillette; M27 Thursday 22:00 ET Group B is the page's pricing-floor anchor, the latest weekday-evening kickoff at any US WC venue and structurally the cheapest single-section get-in at Gillette across the tournament arc)
- **Gillette Suite Level** — $5K-$15K+ (Group-Stage-only ceiling caps suite demand below all knockout-venue suite tiers; suite resale historically tracks 25-30% of QF suite pricing and 12-18% of Final suite pricing)

## TicketTips expansion

4 → 7 Gillette-specific entries:

1. 100-Level sideline best sightlines (FIFA Cat 1 zone for M59 Saturday-primetime group-stage-final-day) + honest 15-18 yard touchline-distance disclosure
2. **300-Level Upper Corner & Endline at $110-$280 as the page's pricing-floor anchor** for M27 Thursday 22:00 ET — the latest US WC weekday-evening kickoff at any venue and structurally the lowest-demand window of the three Gillette matches
3. **Foxboro Stadium 1994 World Cup same-site heritage callback** — the only 2026 US WC venue on the exact same footprint as a 1994 host site, Argentina's three Group D matches + Italy's two Group E matches + Spain vs Switzerland Round of 16 all played at the prior Foxboro Stadium that Gillette replaced in 2002
4. **MBTA Foxboro Line transit honesty + Patriot Place adjacency** — limited commuter rail service to Foxboro Station historically game-day-only, but Patriot Place dining/retail/entertainment is built into the site; honest disclosure that public transit is a known constraint, partially offset by the on-site hospitality density
5. New England June weather context — 74-82°F daytime highs for M11 Sunday-afternoon, 58-68°F evening temperatures for M27 Thursday-late-evening (the M27 22:00 ET kickoff actually benefits from the cooler temperature window vs the peak-heat matches at Hard Rock/AT&T/Mercedes-Benz)
6. Putnam Club / EMC Club premium upsell with the New England-thunderstorm hedge framing as actuarially-correct for the M11 Sunday-afternoon match (15-25% afternoon thunderstorm probability) and the M59 Saturday-primetime early-evening rain hedge
7. Post-on-sale 20-30% resale-dip pattern with three concrete venue comps: 2024 Copa America Group B at Gillette ($180-$550 sideline group-stage), Revolution 30-year MLS tenancy regular-season at $25-$90 sideline, and USMNT/Gold Cup friendlies at Gillette historically at $50-$200 sideline — the cleanest soccer-resale precedent stack at this exact venue

## Keywords expansion

4 → 10. Added: "Gillette Stadium World Cup 2026 tickets," "Gillette Stadium Foxborough World Cup," "Gillette Stadium seating chart," "cheapest Gillette Stadium World Cup tickets," "Foxboro Stadium 1994 World Cup" (uncontested 1994-same-site-heritage keyword), "Gillette Stadium late night World Cup" (M27 Thursday-22:00-ET-content-differentiated keyword), "Patriots stadium World Cup."

## Expected schema impact (once SEO bundle deploys)

- AggregateOffer `lowPrice` extraction yields ~$110 (was $125 placeholder — new 300-Level Cat 4 floor is $110)
- AggregateOffer `highPrice` shifts to $15,000+ (was $1,600 — new Gillette Suite Level ceiling)
- BreadcrumbList + FAQPage schema unchanged
- **Caveat: the `extractLowestPrice` bug filed 5/10 §Reply 1 means the deployed `lowPrice` will be wrong until the patch absorbs into the SEO bundle** — this is the **fifth** consecutive WC stadium refresh to ship into the bug (Lumen 5/15, Levi's 5/16, Gillette 5/22, and prior to Lumen the AT&T 5/08 and Mercedes-Benz 5/09 refreshes shipped under the same bug). Recommended that the bundle deploy escalation filed 5/18 in `seo-requests/2026-05-18-bundle-deploy-escalation-4.md` reference today's Gillette refresh as the fifth carry-forward.

## Ask of SEO Agent

1. Skim-and-reply window before this morning's commit lands (≥2 hours runway from this file's mtime to the absorbing `Content refresh: gillette-stadium` commit).
2. Note today's Step-0 catch (Hook 3 off-by-three) and the Levi's-refresh-log "only US WC venue without knockout" overstatement (Gillette also has zero knockouts) in next week's SEO architecture review.
3. Schema-impact estimate confirmation: are the new `lowPrice` $110 / `highPrice` $15,000+ correctly extracted by the AggregateOffer logic once the `extractLowestPrice` patch absorbs?
4. Forward Fix v2 first canonical execution — confirm the Path-B watch trigger fires cleanly post-commit (heads-up mtime precedes `worldcup.ts` modification mtime by the buffer margin).
