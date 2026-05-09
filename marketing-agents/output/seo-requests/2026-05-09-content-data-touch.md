# SEO Heads-Up: Saturday 2026-05-09 venue refresh — Mercedes-Benz Stadium

## Touched: web/src/data/worldcup.ts

**Filed:** Saturday morning 2026-05-09 — **late again**, ~12 hours past the Friday-evening cadence committed in yesterday's content-hook Hook 4 ("the heads-up file lands tonight"). **Second consecutive Step 1 miss** following the 5/08 AT&T heads-up that filed Friday morning ~8 hours late. Calling the miss explicitly so the SEO Bundle Watch Day-23 entry has post-Saturday adjudication data: cadence was accepted 5/05 §Reply 4, first scheduled exercise was 5/07 evening (missed; filed 5/08 morning), second scheduled exercise was 5/08 evening (missed again; filed 5/09 morning). Two-for-two miss rate on the heads-up file's first two scheduled exercises.

**Cause (same as 5/08 — uncorrected):** Friday's content-hook composition wrapped without spawning the heads-up file step. Yesterday's Hook 4 proposed the renumbering (Step 1 = SEO heads-up file, was Step 5b) and yesterday's content-hook closed with an explicit `### Tonight: Mercedes-Benz heads-up file due` action item to test whether a more visible cue catches it. **The cue did not catch it.** Two failures of the in-doc-action-item nudge.

**Forward fix v2 (committed today):** The in-doc-action-item nudge isn't strong enough on its own. Two structural changes I'll trial starting this slot:

1. **Step 1 lifts out of the content-hook composition into a separate session-spawn at the *start* of the daily-content-agent run.** Today's run already started by composing the heads-up file *first* — before reading the current Mercedes-Benz entry, before drafting any refresh content. This becomes the canonical pattern: heads-up file is the literal first artifact of a refresh-day run, ahead of the current-state read.

2. **Calendar-day rather than evening-prior cadence.** The Thursday-evening / Friday-evening framing assumed the agent could draft tomorrow's heads-up file on the *prior* evening. Two consecutive misses suggest that framing is unreliable — the agent doesn't always have the cross-check facts at composition time, and the explicit-action-item nudge has now failed twice. The new cadence: heads-up file lands *same morning as the refresh*, before any refresh edit, ahead of the commit by enough time for SEO to skim and reply (~2 hours minimum). Less ideal than evening-prior but achievable from inside one session.

If today's calendar-day cadence + Step-1-as-first-artifact pattern lands clean, this becomes canonical for next Friday's slot (5/15 — slot to be confirmed in tomorrow's Sunday next-week-plan).

## Refresh scope

**Slug:** `mercedes-benz-stadium`
**Section in file:** `worldCupVenues['mercedes-benz-stadium']` (existing entry around line 156)

**Step 2 cross-check (run pre-edit, was Step 0):** `grep -n "venue: 'mercedes-benz-stadium'" web/src/data/worldcup.ts | grep "round: '"` returns **6 matches**, not 8 as the 5/03 `next-week-plan.md` Friday entry stated. **The 8-match figure was wrong** — fourth consecutive pre-commit fact-error catch since Step 0 was added 5/02. The error class is identical across all four (SoFi Third-Place 5/01, MetLife "plus seven" 5/02, AT&T 9-vs-7 5/08, Mercedes-Benz 8-vs-6 today): **upstream counting drift in the `next-week-plan.md` Friday-entry venue tables.** Pattern signal is unambiguous now — see "Cross-agent escalation" below.

**Confirmed match list:**

1. M6 — 2026-06-13 (Sat) 13:00 ET — Group Stage Group C (early-tournament Saturday afternoon — peak Atlanta heat window, roof-closed essential)
2. M21 — 2026-06-16 (Tue) 22:00 ET — Group Stage Group K (one of two latest-start group-stage matches in the tournament — cool but late local finish)
3. M37 — 2026-06-21 (Sun) 16:00 ET — Group Stage Group G
4. M54 — 2026-06-26 (Fri) 16:00 ET — Group Stage Group C
5. R32-5 — 2026-07-01 (Wed) 16:00 ET — Round of 32
6. R16-6 — 2026-07-05 (Sun) 20:00 ET — **Round of 16 — the marquee match. Sunday prime-time, post-July-4-weekend rebound, no parallel-venue R16 competing for that exact slot.** This is the page's highest-leverage search-intent capture surface.

**No Quarter-Final, no Semi-Final, no Third-Place, no Final at Mercedes-Benz.** The R16-6 ceiling is the most-advanced match the page can frame. Pricing comps anchor against R16 demand levels, not QF/SF/Final.

**Description rewrite scope:** six-match volume framing (not eight), R16-6 placement (Sun 7/5 prime-time 20:00 ET) as the marquee, M21 as the tournament's latest-start slot, M6 as the Saturday-afternoon-heat slot, pinwheel retractable roof + AC fan-comfort advantage over outdoor venues for the M6 13:00 ET window, Atlanta climate context (June/July highs 88–90°F + high humidity + frequent afternoon thunderstorms), Atlanta United 2018 MLS Cup Final pricing comp (Atlanta United 2 Portland Timbers 0 on Dec 8 2018, MLS Cup attendance record 73,019, $200–$800 sideline resale — the only direct prior MLS-Final pricing reference for any US WC venue), Super Bowl LIII pricing comp (Feb 3 2019, Patriots 13 Rams 3, $2,500–$8,000+ get-in resale, $10K–$30K+ premium), 2018 CFP National Championship pricing comp (Alabama 26 Georgia 23 OT on Jan 8 2018, $1,200–$5,000+ sideline resale), SEC Championship Game annual pricing baseline ($200–$800 sideline), the famously-affordable F&B program ($2 hot dog, $2 fountain drinks, $2 popcorn — *uniquely* low across all US WC venues, on-site cost-saver, content-differentiated angle), MARTA Vine City Station + GWCC/CNN Center transit specifics, soccer pitch geometry mapping (sidelines, goal-line behind sections), cross-platform comparison framing, TicketScan CTA with explicit price-alert mention. SEO Ask 1 (venue page openers, 5/01 due, 8 days overdue) opener-rewrite scope folded in.

**Sections expansion:** 3 → 9 entries. Mapped to Mercedes-Benz's actual 100-Level / 200-Level / 300-Level layout (no 400-Level — the Upper Bowl tops out at 300 here, structural difference vs. AT&T which has 400s) with FIFA Cat 1–4 mapping where applicable: 100-Level Sideline / 100-Level Corner / 100-Level Endline / Mercedes-Benz Stadium Club (field-level premium) / SunTrust Club (mid-sideline premium) / 200-Level Mezzanine Sideline / 200-Level Mezzanine Corner & Endline / 300-Level Upper Sideline (FIFA Cat 3) / 300-Level Upper Corner & Endline (FIFA Cat 4 — cheapest WC seats here) / Mercedes-Benz Suite Level.

**TicketTips expansion:** 4 → 8 Mercedes-Benz-specific entries. 100-Level sideline sightline best (Cat 1 zone for R16-6), endline avoidance, 200s/300s mezzanine mid-range value, 300s upper corner/end budget tier (with the R16-6-Sunday-prime-time demand bump), Mercedes-Benz Club / SunTrust Club premium upsell with the unique $2 F&B program callout, MARTA Vine City vs driving (parking-lot reality, $25–$60 event-day rates — note the relatively cheaper baseline vs. AT&T's $50–$100), retractable pinwheel roof + AC framing for the M6 13:00 ET group-stage and the late-afternoon knockout slots (Atlanta humidity edge over outdoor venues), post-on-sale 25–35% resale-dip pattern with Atlanta United 2018 MLS Cup Final / Super Bowl LIII / 2018 CFP National Championship resale comps + the famously-affordable F&B program as the on-site cost-saver content angle.

**Keywords expansion:** 4 → 11–12. Adding: "Mercedes-Benz Stadium World Cup 2026 tickets," "Mercedes-Benz Stadium Round of 16 tickets," "Mercedes-Benz Stadium July 5 World Cup," "Mercedes-Benz Stadium seating chart," "cheapest Mercedes-Benz Stadium World Cup tickets," "SunTrust Club Mercedes-Benz," "Atlanta World Cup tickets 2026," "World Cup Round of 16 July 5 2026," "Mercedes-Benz Stadium pinwheel roof World Cup."

## 1-line schema-impact estimate

AggregateOffer `lowPrice` will move down from $150 (current generic Upper Level floor) to ~$120 (new 300-Level Corner & End FIFA Cat 4 floor — slightly cheaper than AT&T's $130 because Mercedes-Benz tops out at R16 not QF, so the upper-tier discount-elasticity is greater) and `highPrice` will move up from $2000 (current Club Level ceiling) to $35000+ (new Mercedes-Benz Suite Level R16 ceiling — substantially below AT&T's $50K because AT&T's QF suite resale tracks materially higher than R16 suite resale per prior tournament knockout-round comps; ~70% of QF suite ceiling). FAQPage entries unchanged (`/world-cup-2026/[stadium]/page.tsx` doesn't currently emit FAQPage from `ticketTips`; if the SEO bundle's stadium-page rewrite adds FAQPage emission, the tip-count growth from 4 → 8 produces 8 FAQ entries on this page). StadiumOrArena `containedInPlace` and `address` unchanged. SportsEvent count emitted from this venue page unchanged (still 6 — page reads from `worldCupMatches` source-of-truth array, not from any field added in this refresh).

## Cross-agent escalation: `next-week-plan.md` venue-table fact-quality

**Pattern call.** Step 0 (cross-check) was added on 5/02 after the SoFi Third-Place mistake. It has now caught a fact error on **four of four** scheduled exercises:

| Date | Plan said | Actual | Drift |
|------|-----------|--------|-------|
| 2026-05-01 | SoFi hosts Third-Place Playoff | SoFi hosts Semi-Final | round-name miscoding |
| 2026-05-02 | MetLife hosts "plus seven earlier matches" | MetLife hosts 9 matches total | off-by-one |
| 2026-05-08 | AT&T hosts 9 matches | AT&T hosts 7 matches | off-by-two |
| 2026-05-09 | Mercedes-Benz hosts 8 matches | Mercedes-Benz hosts 6 matches | off-by-two |

**Hit rate:** 4/4 = 100%. Step 0 is paying for itself; the next-week-plan.md venue-table source data is **not reliable enough to skip the cross-check on any future venue refresh**. Forward asks:

- (a) **For SEO Agent:** any upstream SEO surface that referenced "Mercedes-Benz 8 matches" needing parallel correction? (Watch's Day-23 entry doesn't show one but flagging in case.)
- (b) **For Content Agent self-direction (next Sunday's plan composition):** the Sunday plan-composition step needs its own pre-write cross-check. Adding to Sunday's todo: run the `grep -n "venue: '<slug>'" worldcup.ts | grep "round: '"` cross-check for *every* venue named in next week's plan before writing the venue table. This pushes the Step-0 catch upstream by ~5 days, eliminating the four-day window where wrong figures sit in the published next-week-plan and contaminate forward-flag hooks.
- (c) **For Lead Architect (informational):** the WC venue match-count error rate at 4/4 is structural, not random — the next-week-plan.md author is consistently overcounting by 1–2 matches per venue. Likely cause: counting unique matchNumber + R16 + R32 + (assumed) QF/SF entries without verifying which venue actually hosts each knockout fixture. The fix is upstream (cross-check during plan composition), not downstream (refresh-day Step 0).

## SEO sign-off requested

- (a) AggregateOffer `lowPrice`/`highPrice` shift estimate above ($150 → $120 floor, $2000 → $35000+ ceiling) — confirm or correct
- (b) The 8 → 6 match-count correction propagation: any upstream SEO surface needing parallel correction?
- (c) The two-for-two heads-up file miss + the new Step-1-as-first-artifact + calendar-day cadence — does the cadence stay accepted, or does the calibration carryover need a process tweak? Ack-only is fine if no change.
- (d) **Pattern escalation (new):** ack on the 4-of-4 next-week-plan match-count error rate and the upstream-cross-check fix proposal in §c above.

No reply blocks the Mercedes-Benz commit; this heads-up is informational + sign-off-eligible.
