# SEO Heads-Up — Arrowhead Stadium worldcup.ts Refresh (2026-05-30, Saturday)

**Filed as artifact 1 of the daily session** — Forward Fix v2, same-morning-as-refresh cadence, ahead of the current-state read, ahead of any `worldcup.ts` editing, ahead of content-hook composition.

## What is changing
`arrowhead-stadium` entry in `web/src/data/worldcup.ts` — the **eleventh and final US WC venue sparse-data refresh**, closing the 11-venue US arc (MetLife 4/25 → SoFi 5/01 → Hard Rock 5/02 → AT&T 5/08 → Mercedes-Benz 5/09 → Lumen 5/15 → Levi's 5/16 → Gillette 5/22 → Lincoln Financial 5/23 → NRG 5/29 → **Arrowhead 5/30**).

Stub description (1 sentence) → single rich paragraph. 3 generic ticketTips + 1 → 8 data-anchored tips. 3 placeholder sections → 8 sections with FIFA-category framing and dual Group-Stage / R16 price ranges (Arrowhead hosts an R16, so it uses the NRG dual-range section format, not the pure-Group-Stage single-range format). Keywords 4 → 11.

## Step-0 fact-verification gate — TWO upstream errors caught (please action)

This is the gate's third execution and it caught a **cross-page factual error already shipped in the NRG description (5/29) and propagated through the refresh-log**:

1. **"Four US R16 games on Mon 7/6" is WRONG.** The schedule (`worldcup.ts` lines 636–643) shows the 8 R16 matches run two-per-day across 7/3, 7/4, 7/5, 7/6. **Mon 7/6 has exactly TWO R16 games, both US:** NRG R16-7 (16:00) + Arrowhead R16-8 (20:00). The shipped **NRG description** and **refresh-log lines 40 & 54** state "one of four US R16 games on Mon 7/6 — densest R16 concentration of any US WC hosting year on record." **That superlative is false** — every R16 day has exactly 2 games; no day is denser than any other.
2. **"Lincoln Financial R16-4" is WRONG on two counts.** R16-4 is **Hard Rock Stadium on 7/4**, not Lincoln. **Lincoln Financial hosts ZERO knockout matches** (its own shipped description confirms "all in the Group Stage with zero knockout-round content"). The refresh-log's "Lincoln Financial R16-4" cross-reference (lines 40, 54) is a phantom match.

**Action requested:**
- (a) Sign-off to **correct the NRG description** ("one of four US R16 games on Mon 7/6 — densest R16 concentration…") to the verified "one of two US R16 games on Mon 7/6 (paired with NRG R16-7 16:00 ET), the prime-time closing match of the Round of 16." The Arrowhead page ships with the corrected fact today; NRG should be patched to match to avoid a two-page contradiction.
- (b) Confirm any upstream SEO surface (sitemap descriptions, schema, social copy) that referenced "four US R16 games" or "densest R16 concentration" needs parallel correction.
- (c) **AggregateOffer lowPrice/highPrice shift estimate** — once the SEO bundle deploys, Arrowhead's `lowPrice` extraction moves from the $100 placeholder to ~$110 (new 300-Level Upper Corner Cat 4 Group-Stage floor) and `highPrice` from $1,500 placeholder to ~$24,000+ (new Suite Level ceiling). **Caveat: the `extractLowestPrice` bug (filed 5/10 §Reply 1) means the deployed `lowPrice` will be wrong until the patch lands** — Arrowhead is the **seventh consecutive WC-stadium refresh to ship into the bug** (AT&T 5/08, Mercedes-Benz 5/09, Lumen 5/15, Levi's 5/16, Gillette 5/22, Lincoln Financial 5/23, NRG 5/29 carried it; Arrowhead 5/30 is #8 if NRG counted — re-confirming the carry count with SEO). The 90-minute bandwidth block to absorb the patch remains the single most-important program ask; this closes the US arc and the Canada/Mexico arc (BMO, BC Place, Azteca, Akron, BBVA) begins next, so the patch should land before that arc ships.
- (d) Ack that the Step-0 pre-composition grep gate (added to the 5/24 Sunday plan) is now **2-for-2 on clean execution** (NRG 5/29 + Arrowhead 5/30) AND caught a live shipped error on this run — recommend locking it in as canonical alongside Forward Fix v2.

## Verified facts shipping in the Arrowhead refresh (all grep-confirmed against the schedule)
- **4 matches** (NOT 6 — the refresh-log line 446 "Arrowhead: 6" figure was a next-week-plan error): M13 (6/14 Group G), M26 (6/18 Group A), M61 (6/28 Group G), R16-8 (7/6 Round of 16, matchNumber 80 = the final R16 match of the round).
- **Group G plays twice at Arrowhead** (M13 Matchday 1 + M61 Matchday 3 stakes-aligned closing) — clean "two trips to KC" supporter angle.
- **Group A is the host-nation group (Mexico)** — confirmed by M1 (`team1: 'Mexico'`, group A) — so M26's host-nation-group demand premium is a *verified* fact, an upgrade over Lincoln's speculative "if FIFA draws a host nation into Group A."
- **Most evening-weighted slate of any US WC venue**: 3 of 4 matches are evening (M13 22:00, M26 19:00, R16-8 20:00); only M61 (16:00) is afternoon — a net weather positive vs the all-afternoon Lincoln/Levi's slates.
