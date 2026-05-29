# SEO Heads-Up: Friday 2026-05-29 venue refresh — NRG Stadium

## Touched: web/src/data/worldcup.ts

**Filed:** Friday morning 2026-05-29 as the **literal first artifact** of today's daily-content-agent run, ahead of the current-state read of the NRG Stadium entry, ahead of any `worldcup.ts` editing, and ahead of any content-hook composition. **Forward Fix v2 third canonical (non-test) execution** — Gillette 5/22 was canonical execution 1, Lincoln Financial 5/23 was canonical execution 2, NRG is canonical execution 3. Five consecutive clean pair-slot heads-up filings now (Lumen 5/15 + Levi's 5/16 + Gillette 5/22 + Lincoln Financial 5/23 + today).

The three structural changes locked in remain:

1. **Step 1 = SEO heads-up file as artifact 1 of the session.** No other content artifact has been produced yet this morning. The Step 0 re-verification grep on `'nrg-stadium'` and the current-state NRG entry read (lines 319-340 in `worldcup.ts`) ran only as the source for this heads-up's match-list and section-baseline data; no draft, no commit, no content-hook composition has started.
2. **Calendar-day cadence (same morning as refresh, not evening-prior).**
3. **mtime ordering.** This file's mtime will precede the `worldcup.ts` modification by enough margin that the Path-B watch (per `seo-requests/2026-05-10-seo-replies-bundle.md`) can verify cadence post-commit.

## Refresh scope

**Slug:** `nrg-stadium`
**Section in file:** `worldCupVenues['nrg-stadium']` (existing entry at line 319)
**Sparse-data status before this refresh:** 3 sections, 4 ticketTips, 4 keywords, 1-sentence description — same baseline as MetLife (pre-4/25), SoFi (pre-5/01), Hard Rock (pre-5/02), AT&T (pre-5/08), Mercedes-Benz (pre-5/09), Lumen Field (pre-5/15), Levi's Stadium (pre-5/16), Gillette (pre-5/22), Lincoln Financial (pre-5/23). NRG is the **tenth** sparse WC USA-venue refresh in this template arc and the tenth-consecutive in the post-MetLife pair-slot cadence. Arrowhead Stadium tomorrow (Sat 5/30) is the eleventh and final US WC venue refresh in this arc.

## Step 0 cross-check — run pre-edit — **CLEAN PASS** (against today's verified Sunday-plan composition)

```
$ grep -n "venue: 'nrg-stadium'" web/src/data/worldcup.ts
546: M9   — 2026-06-13 (Sat) 22:00 ET — Group Stage Group E
568: M23  — 2026-06-17 (Wed) 16:00 ET — Group Stage Group L
590: M39  — 2026-06-21 (Sun) 22:00 ET — Group Stage Group H
604: M57  — 2026-06-27 (Sat) 16:00 ET — Group Stage Group E
632: R16-7 — 2026-07-06 (Mon) 16:00 ET — Round of 16
```

**5 matches total** (4 Group Stage, 1 Round of 16). **Today's brief composes against verified ground truth**, not against prior-plan-document memory — the upstream Sunday 5/24 plan composition ran the Step 0 grep gate at session start before composing the NRG/Arrowhead venue rows, and both were corrected before Friday's brief landed. **First Sunday-plan-composition-against-verified-ground-truth refresh execution.**

**Historical contrast worth noting in the SEO architecture review.** Last Sunday's 5/17 plan (composed pre-Step-0-gate) stated "NRG = 5 matches (3 GS + R32 + R16)" — match-count correct by coincidence, round composition wrong (R32 fabricated, 1 GS undercounted, actual is 4 GS + R16). The 5/17 plan's NRG row was off-spec; this week's 5/24 plan caught it pre-composition; today's brief composes against the corrected venue row.

**Updated Step-0 hit rate:**

| Date | Plan / queue said | Actual | Drift | Pattern |
|------|-------------------|--------|-------|---------|
| 2026-05-01 | SoFi hosts Third-Place Playoff | SoFi hosts Semi-Final | round-name miscoding | Hit |
| 2026-05-02 | MetLife "plus seven earlier matches" | MetLife hosts 9 matches total | off-by-one | Hit |
| 2026-05-08 | AT&T hosts 9 matches | AT&T hosts 7 matches | off-by-two | Hit |
| 2026-05-09 | Mercedes-Benz hosts 8 matches | Mercedes-Benz hosts 6 matches | off-by-two | Hit |
| 2026-05-15 | Lumen Field hosts 6 matches | Lumen Field hosts 5 matches | off-by-one | Hit |
| 2026-05-16 | Levi's Stadium hosts 3 matches | Levi's Stadium hosts 3 matches | NONE | Pass |
| 2026-05-22 | Gillette hosts 6 matches (3 GS + R32 + R16 + QF-1) | Gillette hosts 3 matches (3 GS, 0 knockout) | off-by-three | Hit |
| 2026-05-23 | Lincoln Financial hosts 5 matches (3 GS + R32 + R16) | Lincoln Financial hosts 3 matches (3 GS, 0 knockout) | off-by-two | Hit |
| 2026-05-29 | NRG hosts 5 matches (4 GS + R16) | NRG hosts 5 matches (4 GS + R16) | NONE | **Pass (composed against gate)** |

**Step-0 hit rate: 7-of-9 (78%); 2-of-3 (67%) since the upstream Sunday-plan-composition cross-check was supposed to absorb on 5/10.** Today's clean pass is the first clean pass that landed *because* the upstream gate ran pre-composition, not by coincidence — qualitatively different from the 5/16 Levi's pass.

**Match-by-match context for the description / sections / ticketTips:**

1. **M9 — Sat 6/13 22:00 ET — Group E.** Tournament's third day. Saturday late-evening 22:00 ET kickoff (20:00 local Central Time) — primetime national broadcast window. Houston June 22:00 evenings sit in the 80-86°F range — peak heat-and-humidity Saturday-primetime kickoff, retractable-roof closed scenario is structurally likely for player and broadcast comfort. Saturday-primetime stakes plus opening-weekend energy gives this a high demand profile — third match of the tournament's opening weekend; runs ~2 hours after the MetLife/AT&T Saturday afternoon matches. Group E supporters' first of two trips to NRG.
2. **M23 — Wed 6/17 16:00 ET — Group L.** Wednesday afternoon 16:00 ET (14:00 local) — peak Houston June afternoon heat. Tournament's seventh day. Houston June 14:00 daytime highs 95-105°F + 60-80% humidity + heat-index 110°F+ midday. **Retractable-roof closed scenario is structurally certain for this match** — no FIFA-approved tournament would expose players or fans to mid-afternoon Houston-summer heat-index 110°F+ in an open-roof config. Wednesday-afternoon weekday timing is **pricing-floor anchor for the page** — the lowest-demand window of the four Group Stage matches, likely close to the cheapest get-in at NRG across the Group Stage. Demand pattern: ~30-40% below the M9 Saturday-primetime ceiling on the upper tiers.
3. **M39 — Sun 6/21 22:00 ET — Group H.** Sunday late-evening 22:00 ET kickoff (20:00 local). Tournament's eleventh day. Sunday-primetime national broadcast window. Houston June 22:00 evenings still 80-86°F with high humidity — retractable-roof-closed-likely scenario. Sunday-primetime gives this a mid-to-high demand profile, second only to M9 Saturday-primetime among the four Group Stage matches.
4. **M57 — Sat 6/27 16:00 ET — Group E.** Saturday afternoon 16:00 ET (14:00 local). Tournament's seventeenth day. Group Stage final-day Saturday-afternoon stakes-aligned closing match (M57 is one of the final Group E matches; runs simultaneously with the other Group E match per FIFA's stakes-aligned closing fixtures). Peak Houston afternoon heat — retractable-roof-closed scenario certain. Group E supporters' second trip to NRG (with M9 as the first) — **two-trip pricing-stack opportunity** for Group E supporters planning the Houston tournament arc. Stakes-aligned closing-day timing puts M57 in the same demand band as M9 Saturday-primetime opener despite the afternoon-vs-primetime difference.
5. **R16-7 — Mon 7/6 16:00 ET — Round of 16.** Mid-day Monday afternoon 16:00 ET (14:00 local) — peak Houston July heat. Tournament's twenty-fifth day. **Page's highest-demand match by a wide margin** — knockout-round elimination math activates here. R16-7 is one of **four US R16 games on Mon 7/6** (alongside Arrowhead R16-8 Mon 7/6 20:00 ET, Lincoln Financial R16-4 — checked separately — and one more US R16). **The four-US-R16-game day is the densest R16 concentration of any US WC hosting year on record** — content angle: "Mon 7/6 is the four-stadium R16 marathon." Knockout-round demand premium runs 60-100% above Group-Stage sideline-tier pricing per the 2014 (Brazil) and 2022 (Qatar) R16 data; pricing-ceiling anchor for the page.

## Description rewrite scope

5-match volume framing (4 Group Stage + 1 Round of 16 knockout — **the structurally distinct profile from the three-pure-Group-Stage cluster (Levi's/Gillette/Lincoln Financial)**, NRG joins the eight US WC venues that carry knockout-round content), **R16-7 Mon 7/6 16:00 ET as the marquee knockout-round pricing-ceiling anchor with the four-US-R16-game day differentiator**, **M23 Wed 6/17 16:00 ET as the pricing-floor anchor** (peak Houston afternoon heat plus weekday-afternoon timing is the lowest-demand window of the five-match arc), **M9 Sat 6/13 22:00 ET Group E as opening-weekend Saturday-primetime stakes**, **M57 Sat 6/27 16:00 ET Group E as group-stage-final-day stakes-aligned closing match (with the Group E two-trip pricing-stack angle alongside M9)**, **M39 Sun 6/21 22:00 ET Group H as Sunday-primetime mid-tier**, **NRG is the only US WC venue with a retractable roof** (the content-differentiated weather-management angle uniquely owned by NRG in the US WC venue portfolio — the open-air Lincoln Financial/Levi's/Gillette/Arrowhead/Mercedes-Benz/Hard Rock/AT&T heat-vulnerability is the structural backdrop; NRG's retractable roof is the actuarially-correct hedge for the 14:00-16:00 ET afternoon matches), **Houston June peak heat-and-humidity weather honesty** (95-105°F daytime highs, 60-80% humidity, heat-index 110°F+ midday — structurally worse than Hard Rock/Miami Gardens summer and structurally worse than every other US WC venue except Arrowhead and Mercedes-Benz; the retractable-roof closed scenario is structurally certain for all three afternoon matches and likely for the two 22:00 ET evening matches), **Texans NFL secondary-market pricing comp** ($120-$450 sideline regular-season, $450-$1,200 for divisional rivals — the football-pricing anchor analogous to AT&T Stadium's Cowboys baseline), **Houston Dynamo + Houston Dash recent pricing comps** ($45-$180 for Dynamo MLS regular season at the smaller PNC Stadium; $80-$250 sideline for US national team friendlies historically at NRG — the soccer-pricing anchor at the actual NRG footprint and at the closest Dynamo MLS proxy venue), **2017 Gold Cup pricing comp** (NRG hosted 2017 CONCACAF Gold Cup matches with $80-$280 sideline group-stage resale — the most-recent direct soccer-tournament pricing reference at this exact venue), **Light Rail METRORail Red Line direct service from Downtown Houston to NRG Park** is content-differentiated transit-positive — better than every US WC venue except Lincoln Financial's SEPTA Broad Street Line; **Houston METRORail = second-best USA-WC-venue transit access** content angle, complementing the Lincoln Financial transit-positive lead from yesterday's refresh, **football-first soccer-config geometry honesty** (NRG was built football-first; the soccer-config 100-Level row 1 sits ~14-17 yards from the touchline vs the league-average 12-14 yards — slightly better than Levi's/Gillette/Lincoln Financial's 15-19 yards), capacity 72,220 sits mid-pack among US WC venues (smaller than MetLife/AT&T/SoFi/Mercedes-Benz, larger than Gillette/Arrowhead), FIFA Category 4 floor estimated $135-$340 for Group Stage matches and $260-$680 for R16, cross-platform comparison framing (TM, SeatGeek, StubHub, FIFA resale), and TicketScan CTA with explicit price-alert mention.

## Sections expansion

3 → 9-10 entries. Mapped to NRG's actual 100/200/300-Level layout (NRG has a 3-level seating bowl + premium suites — capacity 72,220 sits between Gillette's 65,878 and Mercedes-Benz's 71,000) with FIFA Cat 1-4 mapping. Knockout-round (R16-7) pricing-ceiling tier is included in each band:

- **100-Level Sideline (101-115, 130-144)** — FIFA Cat 1, $520-$1,750 Group Stage / $980-$3,200 R16 (long-axis pitch, premium for M9 Saturday-primetime + M57 stakes-aligned closing + R16-7 knockout)
- **100-Level Corner (116-119, 126-129, 145-148)** — $340-$1,020 GS / $640-$1,950 R16 (angled corner views, mid-pack soccer-config sightlines)
- **100-Level Endline (north 120-125, south 149-150)** — $280-$840 GS / $530-$1,650 R16 (behind the goals, intense atmosphere)
- **Verizon Wireless Club / Diamond Club (200s premium)** — $760-$2,150 GS / $1,400-$3,950 R16 (climate-controlled lounge access; retractable-roof-closed scenarios mean the NRG climate hedge is *redundant* for the four daytime matches but still valuable for in-seat service and accelerated concourse access)
- **Mezzanine Sideline (200s sideline non-club)** — FIFA Cat 2, $330-$920 GS / $620-$1,720 R16 (best mid-range value)
- **Mezzanine Corner & Endline (200s corners)** — $220-$600 GS / $410-$1,150 R16
- **300-Level Upper Sideline** — FIFA Cat 3, $180-$500 GS / $340-$960 R16 (full-pitch panoramic from height)
- **300-Level Upper Corner & Endline** — FIFA Cat 4, **$135-$340 GS / $260-$680 R16** (cheapest WC seats at NRG; M23 Wednesday 16:00 ET Group L is the page's Group-Stage pricing-floor anchor at the cheapest single-section get-in at NRG across the tournament arc)
- **NRG Suite Level** — $7K-$22K+ (1 R16 match lifts NRG suite-tier demand above the three pure-Group-Stage venues — suite resale historically tracks 35-45% of QF suite pricing and 18-25% of Final suite pricing for venues with R16-only knockout content)

## TicketTips expansion

4 → 7-8 NRG-specific entries:

1. 100-Level sideline best sightlines (FIFA Cat 1 zone for M9 Saturday-primetime + M57 stakes-aligned closing + R16-7 knockout) + honest 14-17 yard touchline-distance disclosure
2. **300-Level Upper Corner & Endline at $135-$340 as the page's Group-Stage pricing-floor anchor** for M23 Wednesday 16:00 ET Group L — peak Houston afternoon heat plus weekday-afternoon timing is the lowest-demand window of the five-match arc and structurally the cheapest single-section get-in at NRG across the Group Stage
3. **R16-7 Mon 7/6 16:00 ET as the page's pricing-ceiling anchor** — one of four US R16 games on Mon 7/6 (with Arrowhead R16-8 Mon 7/6 20:00 ET as the prime-time slot of the four); densest R16 concentration of any US WC hosting year on record
4. **Retractable roof = the only US WC venue with structural weather-management hedge** — the four 14:00-16:00 ET / 14:00 local afternoon matches and the two 22:00 ET evening matches will run roof-closed under Houston-June heat-index 110°F+ midday and 80-86°F humid evenings; **Houston is the only US WC city where the venue's climate-control infrastructure makes the actuarially-correct premium upsell case moot for general-bowl seating**
5. **Light Rail METRORail Red Line direct service from Downtown Houston to NRG Park** — second-best transit access in the US WC venue portfolio after Lincoln Financial's SEPTA Broad Street Line; structurally better than MetLife/AT&T/Mercedes-Benz/Levi's/Gillette/Arrowhead. ~25-minute ride from Downtown, $1.25 one-way fare
6. **Group E supporters get two trips to NRG across the Group Stage** — M9 Sat 6/13 22:00 ET Matchday 1 Saturday-primetime opener and M57 Sat 6/27 16:00 ET Matchday 3 stakes-aligned finale; NRG anchors Group E's tournament arc alongside Lincoln Financial (Group E plays at Lincoln M10 Matchday 1 + M58 Matchday 3 — Group E supporters need a Houston-Philadelphia trip pair across the Group Stage)
7. Houston June peak heat-and-humidity weather honesty — 95-105°F daytime highs with 60-80% humidity and heat-index 110°F+ midday; retractable-roof closed scenario structurally certain for all three afternoon matches; 22:00 ET evening matches still 80-86°F humid but tolerable
8. Post-on-sale 20-30% resale-dip pattern with three concrete venue comps: 2017 CONCACAF Gold Cup at NRG ($80-$280 sideline group-stage resale, the most-recent direct soccer-tournament pricing reference at this exact venue), Texans NFL regular-season at $120-$450 sideline / $450-$1,200 divisional, and Houston Dynamo MLS regular-season at $45-$180 sideline at the smaller PNC Stadium as the closest MLS-proxy reference

## Keywords expansion

4 → 11. Added: "NRG Stadium World Cup 2026 tickets," "NRG Stadium Houston World Cup," "NRG Stadium seating chart," "cheapest NRG Stadium World Cup tickets," "NRG Stadium retractable roof" (content-differentiated retractable-roof keyword uniquely owned by NRG in the US WC venue portfolio), "Texans stadium World Cup," "NRG Stadium Round of 16," "Houston METRORail NRG Stadium" (uncontested transit-positive keyword).

## Expected schema impact (once SEO bundle deploys)

- AggregateOffer `lowPrice` extraction yields ~$135 (was $125 placeholder — new 300-Level Cat 4 floor is $135)
- AggregateOffer `highPrice` shifts to $22,000+ (was $1,600 — new NRG Suite Level ceiling with R16 knockout-round demand premium)
- BreadcrumbList + FAQPage schema unchanged
- **Caveat: the `extractLowestPrice` bug filed 5/10 §Reply 1 means the deployed `lowPrice` will be wrong until the patch absorbs into the SEO bundle** — this is the **seventh** consecutive WC stadium refresh to ship into the bug (AT&T 5/08, Mercedes-Benz 5/09, Lumen 5/15, Levi's 5/16, Gillette 5/22, Lincoln Financial 5/23, NRG 5/29). Saturday's Arrowhead refresh will be the eighth carry-forward. The 90-minute Lead Architect bundle-deploy session remains the single program-wide unblocker.

## Ask of SEO Agent

1. Skim-and-reply window before this morning's commit lands (≥2 hours runway from this file's mtime to the absorbing `Content refresh: nrg-stadium` commit).
2. Note today's Step-0 *clean pass against the pre-composition gate* as the first qualitatively-different clean pass (5/16 Levi's was clean by coincidence; today is clean by gate-design). The 5/24 Sunday-plan-composition step that ran the Step 0 grep gate at session start is the architectural lever working as designed.
3. Schema-impact estimate confirmation: are the new `lowPrice` $135 / `highPrice` $22,000+ correctly extracted by the AggregateOffer logic once the `extractLowestPrice` patch absorbs?
4. Forward Fix v2 third canonical execution — confirm the Path-B watch trigger fires cleanly post-commit (heads-up mtime precedes `worldcup.ts` modification mtime by the buffer margin).
5. **Saturday Arrowhead heads-up** will follow this same template tomorrow morning as the eleventh and final US WC venue refresh in this arc.
