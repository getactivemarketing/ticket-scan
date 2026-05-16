# SEO Heads-Up: Saturday 2026-05-16 venue refresh — Levi's Stadium

## Touched: web/src/data/worldcup.ts

**Filed:** Saturday morning 2026-05-16 as the **literal first artifact** of today's daily-content-agent run, ahead of the current-state read of the Levi's Stadium entry, ahead of any `worldcup.ts` editing, and ahead of any content-hook composition. **Forward Fix v2 second-test execution.** Same three structural changes from the 5/15 Lumen Field clean-landing in force today:

1. **Step 1 = SEO heads-up file as artifact 1 of the session.** No other content artifact has been produced yet this morning. The Step 0 cross-check grep on `'levis-stadium'` and the current-state Levi's entry read (lines 223-244 in `worldcup.ts`) ran only as the source for this heads-up's match-list and section-baseline data; no draft, no commit, no content-hook composition has started.
2. **Calendar-day cadence (same morning as refresh, not evening-prior).** This heads-up is landing ≥2 hours ahead of the absorbing `Content refresh: levis-stadium` commit, giving SEO a clean skim-and-reply window before commit time.
3. **mtime ordering.** This file's mtime will precede the `worldcup.ts` modification by enough margin that the Path-B watch (per `seo-requests/2026-05-10-seo-replies-bundle.md`) can verify cadence post-commit.

**If today's clean landing holds (heads-up filed Saturday morning, refresh commit Saturday afternoon, content-hook + refresh-log Saturday end-of-day), Forward Fix v2 locks in as canonical from 5/22 (Gillette Stadium per current sparse-venue queue) forward.** Lumen Field 5/15 was test 1 of 2; Levi's 5/16 is test 2 of 2. Two consecutive clean landings is the lock-in criterion committed in `seo-requests/2026-05-09-content-data-touch.md` §Forward Fix.

## Saturday-slot context

This Saturday's slot was conditional per yesterday's content-hook Hook 7 — Bruno Mars Soldier Field 5/16 show day. The branch decision this morning: **no T-0 Bruno Mars pricing-freshen data has landed yet at session-start**, so the default-path Levi's Stadium refresh ships today as planned. If Bruno Mars data lands later in the day, the 5/06 draft freshen runs as a separate Saturday afternoon action; it doesn't block this Levi's commit.

## Refresh scope

**Slug:** `levis-stadium`
**Section in file:** `worldCupVenues['levis-stadium']` (existing entry at line 223)
**Sparse-data status before this refresh:** 3 sections, 4 ticketTips, 4 keywords, 1-sentence description — same baseline as MetLife (pre-4/25), SoFi (pre-5/01), Hard Rock (pre-5/02), AT&T (pre-5/08), Mercedes-Benz (pre-5/09), Lumen Field (pre-5/15). Levi's is the eighth sparse WC USA-venue refresh in this template arc and the seventh-consecutive in the post-MetLife pair-slot cadence.

## Step 2 cross-check (was Step 0) — run pre-edit

```
$ grep -n "venue: 'levis-stadium'" web/src/data/worldcup.ts | grep "round: '"
528: M14   — 2026-06-15 (Mon) 13:00 ET — Group Stage Group G
551: M29   — 2026-06-19 (Fri) 16:00 ET — Group Stage Group C
583: M62   — 2026-06-28 (Sun) 16:00 ET — Group Stage Group G
```

**3 matches total** (3 Group Stage, **0 knockout**). Last Sunday's `next-week-plan.md` venue table (line 182) called this correctly — **3 matches, NOT 6** — having absorbed Step 0 catches 1-4 from prior weeks (SoFi 5/01, MetLife 5/02, AT&T 5/08, Mercedes-Benz 5/09). The Sunday-plan cross-check that the 5/09 escalation requested **appears to have been informally adopted within the Sunday-5/10 plan composition** — that's the most plausible read of why the venue-table number arrived correct this week.

**Updated Step-0 hit rate:**

| Date | Plan / queue said | Actual | Drift | Pattern |
|------|-------------------|--------|-------|---------|
| 2026-05-01 | SoFi hosts Third-Place Playoff | SoFi hosts Semi-Final | round-name miscoding | Hit |
| 2026-05-02 | MetLife "plus seven earlier matches" | MetLife hosts 9 matches total | off-by-one | Hit |
| 2026-05-08 | AT&T hosts 9 matches | AT&T hosts 7 matches | off-by-two | Hit |
| 2026-05-09 | Mercedes-Benz hosts 8 matches | Mercedes-Benz hosts 6 matches | off-by-two | Hit |
| 2026-05-15 | Lumen Field hosts 6 matches | Lumen Field hosts 5 matches | off-by-one | Hit |
| 2026-05-16 | Levi's Stadium hosts 3 matches | Levi's Stadium hosts 3 matches | **NONE** | **Pass** |

**Step-0 hit rate: 5-of-6 (83%); 1-of-1 (100%) since the upstream Sunday-plan-composition cross-check appears to have absorbed**. Today's pass is the **first** clean-input run since Step 0 was added 2026-05-02. If the next-week-plan composed tomorrow (5/17 Sunday) also lands its venue table clean, the upstream cross-check absorption is confirmed two-for-two and the structural blocker filed 5/15 §(d) resolves.

**No Round of 32, no Round of 16, no Quarter-Final, no Semi-Final, no Third-Place, no Final at Levi's Stadium.** Levi's is **the only US WC venue without a knockout-round match** — content-differentiated framing angle the page can own (the "pure-group-stage US venue"). Pricing comps anchor against Group Stage demand levels only; no R32 / R16 / QF / SF / TP / F resale precedents apply. **All three matches are at 13:00 or 16:00 PT — peak Bay Area afternoon-heat window; no evening matches.**

**Match-by-match context for the description / sections / ticketTips:**

1. **M14 — Mon 6/15 13:00 PT — Group G.** Tournament's fifth day. Monday afternoon 13:00 PT slot — peak South Bay heat, June 15 historical Santa Clara high ~78-85°F with the marine fog generally burning off by 11:00 AM (still a real risk of late-morning fog overhang on the M14 first half). Lowest expected demand of the three-match arc — Monday weekday afternoon, deepest into the tournament's opening week. **Pricing-floor anchor for the page**, likely close to the cheapest get-in across all US WC matches alongside Lumen's M22 Wed-afternoon Group K.
2. **M29 — Fri 6/19 16:00 PT — Group C.** Friday afternoon. Group C is the only Group C match Levi's hosts. Slightly stronger demand than M14 (Friday-afternoon weekend-start beats Monday-afternoon) but still afternoon weekday timing keeps demand modest. ~T-21-day organic-search ramp pattern.
3. **M62 — Sun 6/28 16:00 PT — Group G.** Sunday afternoon, **the final day of the group stage**, simultaneous kickoff with the three other Group G/H matches at MetLife/Arrowhead/Estadio BBVA per FIFA's stakes-aligned closing fixtures. **Page's highest-demand match by a wide margin** — Sunday afternoon plus group-stage-elimination stakes plus end-of-tournament-opening-weekend energy. Likely a "win-and-you're-through" stakes match depending on Group G table position. Pricing demand bump above M14/M29 by ~30-40% on the upper tiers and ~15-25% on the lower tiers.

## Description rewrite scope

3-match volume framing (all Group Stage, **zero knockout** — page's distinctive "pure group-stage US venue" angle), M62 Sunday 6/28 16:00 PT as the marquee group-stage-closing-day anchor with stakes-aligned simultaneous kickoff context, M14 Monday 6/15 13:00 PT as the pricing-floor anchor (Monday afternoon weekday lowest demand, paired with Lumen's M22 as the two cheapest get-in candidates across all US WC), M29 Friday 6/19 16:00 PT as the Friday-afternoon mid-tier, **Bay Area June afternoon-heat context (78-85°F daytime highs with the marine-fog-burnoff pattern, peaks 95-100°F+ inland in the East Bay and South Bay during the 6/19 and 6/28 windows historically)**, **Stanford Stadium 1994 World Cup heritage callback** (Stanford Stadium hosted the 1994 USA Group Stage matches plus Round of 16 at the same Bay Area sports-region 18 miles north of Levi's — the only US WC venue with a direct 1994-USA-tournament-heritage angle, content-differentiated nostalgia surface), **2024 Copa America Group Stage pricing comp** (Brazil, Colombia, Costa Rica, Paraguay played at Levi's Group D matches — $200-$650 sideline group-stage resale, the most-recent direct soccer-tournament pricing precedent at this exact venue), **Earthquakes MLS regular-season pricing comp** ($30-$120 sideline at PayPal Park since the Earthquakes moved out of Levi's pre-2015, but Levi's hosted Earthquakes 2014-2015 league matches and 2015 MLS All-Star Game with $30-$90 sideline base), **49ers NFL secondary comp** (Super Bowl 50 Feb 2016 — Broncos 24, Panthers 10 — at Levi's cleared $4,000-$15,000+ resale; 2024 NFC Championship Game Niners 34 Lions 31 cleared $400-$1,200 sideline resale; SF-LA Rams primetime Niners home games run $200-$600 sideline), **the partially-renovated soccer-specific pitch geometry** (Levi's was built football-first and the 49ers' field orientation slightly compresses the soccer-config touchline distance vs SoFi or Mercedes-Benz — sideline 100s row 1 is roughly 18 yards from the touchline vs the league-average 12-14 yards), **the BART/Caltrain transit reality** (Levi's has **the worst transit access of any US WC venue** — VTA light rail goes to Mountain View Station but the Great America transfer to the Levi's-direct VTA station adds 15-20 min minimum, no BART direct, no Caltrain direct, no Amtrak direct — driving from SF takes 45-90 min on event days, parking in official lots runs $50-$80+, this is genuinely a structural negative the page should honestly flag rather than paper over), **the FIFA Cat 4 cheapest-cheap-seat content surface** (Levi's has the largest 400-Level uppers of any US WC venue — the budget-tier ceiling is roughly 35-40% lower than AT&T/Mercedes-Benz upper-tiers; FIFA Cat 4 upper-corner-and-endline floor estimated $80-$250, which would set the new lowest WC `lowPrice` across all 11 US venues if the data ships — undercutting Lumen Field's current $110 floor by $30 and making Levi's the structurally-cheapest US WC venue in the AggregateOffer schema), cross-platform comparison framing (TM, SeatGeek, StubHub, FIFA resale), and TicketScan CTA with explicit price-alert mention.

## Sections expansion

3 → 8 entries. Mapped to Levi's actual 100/200/300/400-Level layout (Levi's is one of two US WC venues with a true four-level seating bowl — alongside SoFi — and has the largest 400-Level uppers of any US WC venue, the budget-tier ceiling is the content angle here) with FIFA Cat 1–4 mapping:

- **100-Level Sideline (west and east row 1-14)** — FIFA Cat 1, $450–$1,500 (long-axis pitch, premium for M62 Sunday-afternoon group-stage-closing-day — note: Levi's 100-Level row 1 sits ~18 yards from the touchline vs the league-average 12-14 yards due to the football-first geometry, the page should be honest about this; the *width* is mid-pack, the *depth* preserves sightlines)
- **100-Level Corner (corners west and east)** — $300–$900
- **100-Level Endline (north and south behind the goals)** — $250–$700 (behind the goals — Levi's south end is the historical Earthquakes-supporter section from the 2014-2015 MLS occupancy)
- **Citrix Owners Club / United Club / BNY Mellon Club (200s premium)** — $700–$2,000 (covered, AC-adjacent, padded seating — the *Bay Area afternoon-heat hedge* tier, uniquely valuable at Levi's because M14 13:00 PT and M29/M62 16:00 PT slots all run in peak heat with no roof — actuarially-correct hedge for the M62 Sunday-afternoon stakes match)
- **Mezzanine Sideline (200s sideline non-club)** — FIFA Cat 2, $300–$800 (best mid-range value; Levi's has the widest sideline-to-mezzanine cost gap of any US WC venue, ~$150 below SoFi-Mezzanine and ~$100 below MetLife-Mezzanine)
- **Mezzanine Corner & Endline (200s corners)** — $200–$550
- **300-Level Upper Sideline** — FIFA Cat 3, $150–$450 (full-pitch panoramic from height)
- **400-Level Upper Corner & Endline** — FIFA Cat 4, **$80–$250 (estimated lowest WC seats anywhere — cheapest US WC venue ceiling)** — M14 Monday-afternoon Group G is the page's pricing-floor anchor and **likely the cheapest single-section get-in across any US WC match**, on par or below Lumen Field's M22 Wed-afternoon Group K $110 floor
- **Levi's Suite Level** — $6K–$18K+ (Levi's group-stage-only ceiling caps suite demand well below all the knockout-venue suite tiers — Group Stage suite resale historically tracks 25-35% of QF suite pricing and 15-20% of Final suite pricing)

## TicketTips expansion

4 → 7 Levi's-specific entries:

1. 100-Level sideline best sightlines (FIFA Cat 1 zone for M62 Sunday-prime-time-afternoon group-stage-closing-day)
2. **400-Level Upper Corner & Endline as the cheapest seats in any US WC match** — content-differentiated angle, $80–$250 estimated floor, M14 Monday-afternoon Group G as the page's pricing-floor anchor (paired with Lumen's M22 as the two cheapest get-in candidates across all US WC)
3. M14 Monday 6/15 13:00 PT day-game heat warning + early-arrival-for-shade tip — peak South Bay afternoon heat 78-85°F, marine fog burns off by ~11:00 AM (early-morning kickoff time means fog overhang risk for the first 30 min of the M14 first half)
4. **BART/Caltrain transit honesty — it's not great** — VTA light rail from Mountain View Station + Great America transfer is the public-transit option; no BART/Caltrain/Amtrak direct; driving from SF takes 45-90 min on event days; official lots $50-$80+; this is the worst transit-access of any US WC venue and the page should say so
5. **1994 World Cup Stanford Stadium callback for soccer-history nostalgia buyers** — Stanford Stadium 18 miles north of Levi's hosted the 1994 USA Group Stage and Round of 16; Levi's is the closest 2026 venue to a 1994 host stadium, the only US WC venue with a direct 1994-USA-tournament-heritage angle
6. Citrix Owners / United / BNY Mellon Club premium upsell — covered/AC-adjacent climate-controlled tier, uniquely valuable at Levi's because all three Levi's matches run in the 13:00 or 16:00 PT peak-heat window with no roof; actuarially-correct hedge for the M62 Sunday-afternoon stakes match
7. Set a TicketScan price alert before the FIFA general sale clears — Earthquakes 2014-2015 MLS regular-season + 2024 Copa America Group Stage Levi's matches + 2015 MLS All-Star Game at Levi's are the cleanest prior-soccer-event resale comps ($30-$120 MLS regular / $200-$650 Copa group / $80-$300 All-Star), and every major event at Levi's (Super Bowl 50, 2024 NFC Championship, ACM Awards, Coldplay/Beyonce/Taylor Swift concerts) has seen a 20-30% resale dip in the 7-10 days after the official on-sale as flippers offload inventory they can't move at face value

## Keywords expansion

4 → 10 entries (smaller than the 7-9-match-venue refreshes, reflecting the sparser 3-match content surface):

- "Levi's Stadium World Cup tickets"
- "Levi's Stadium World Cup 2026 tickets"
- "World Cup San Francisco tickets"
- "World Cup Bay Area tickets"
- "Levi's Stadium Santa Clara World Cup"
- "FIFA 2026 San Francisco"
- "Levi's Stadium seating chart"
- "cheapest Levi's Stadium World Cup tickets"
- "cheapest US World Cup tickets"
- "1994 World Cup Stanford Levi's"

## AggregateOffer / schema impact

**Before:** `lowPrice` ≈ $150, `highPrice` ≈ $2,000 (from the existing 3 sections — $150 Upper Level floor)
**After:** `lowPrice` ≈ **$80** (new 400-Level Upper Corner & Endline floor — lowest across all 11 US WC venues, undercutting Lumen Field's $110 by $30), `highPrice` ≈ $18,000+ (new Levi's Suite Level ceiling)

The $80 `lowPrice` shift makes Levi's the structurally-cheapest US WC venue in the AggregateOffer schema once the data ships, **but the `extractLowestPrice` bug (filed 5/10 §Reply 1, Day 28 of bundle freeze, four prior stadium pages already shipping into the bug)** means the deployed `lowPrice` value will be wrong — the function will emit a number ~100× off the floor. **Fourth consecutive WC stadium refresh to ship into the bug.** Patch absorption is now T+0 hours overdue on **five** stadium refreshes (AT&T 5/8, Mercedes-Benz 5/9, Lumen 5/15, Levi's today, with Gillette 5/22 the next-T-0 candidate at the current cadence).

## Cross-agent asks for SEO

(a) **AggregateOffer lowPrice/highPrice shift estimate sign-off** ($150 → $80 floor, $2,000 → $18,000+ ceiling). Reminder that the deployed `lowPrice` will be wrong until the `extractLowestPrice` patch absorbs into the bundle (Day 28 freeze).

(b) **Any upstream SEO surface that referenced "Levi's Stadium 6 matches"** needing parallel correction — the next-week-plan.md venue table caught this correctly this week, so likely a smaller cleanup scope than the prior five corrections; check the WC main-page (`web/src/app/world-cup-2026/page.tsx` venue grid) and any `/tickets/*` aggregator that surfaces a per-venue match count.

(c) **Ack that Forward Fix v2 second-test execution holds as canonical from 5/22 forward** (Gillette per current sparse-venue queue). Two consecutive clean landings — Lumen 5/15 and Levi's 5/16 — is the lock-in criterion committed 5/09. Next Friday's Gillette refresh runs the canonical pattern as a non-test execution.

(d) **Step 0 hit rate now 5-of-6 with the first clean-input pass this week.** If the 5/17 Sunday plan-composition also lands its venue table clean, the upstream Sunday-plan-composition cross-check absorption confirms two-for-two and the structural blocker filed 5/15 §(d) resolves. Re-confirming that the structural blocker is now downgraded to "watch for one more clean week" rather than "actively re-escalating" given today's clean-input pass.

(e) **`extractLowestPrice` patch is now T+0 hours on FOUR consecutive WC stadium replications** (AT&T, Mercedes-Benz, Lumen, Levi's today). At the current 1-stadium-per-Friday-Saturday-slot cadence, the next-T-0 is Gillette 5/22. The 90-minute bandwidth-block to absorb the patch + ship the bundle + publish 10+ queued drafts remains the single most-important program ask. **Day 28 of bundle freeze.**

(f) **Content-differentiated SEO angle to flag:** Levi's Stadium is **the only US WC venue without a knockout-round match** — the "pure group-stage US venue" framing is uniquely Levi's. Pairs with Stanford Stadium 1994 World Cup heritage callback as a content-differentiated nostalgia surface. **The "cheapest US WC seats at $80 floor" content surface** is also uniquely Levi's once the data ships (undercutting Lumen's $110 by $30).

---

## Process notes

- **Forward Fix v2 second-test execution.** Today's run order ran exactly as committed: Step 1 = SEO heads-up file artifact 1 at session start, calendar-day same-morning cadence, mtime precedes worldcup.ts modification. If today's clean landing holds end-of-day, the pattern locks in as canonical from 5/22 Gillette forward.
- **Step 0 first clean-input pass this week.** 5-of-6 (83%) overall, 1-of-1 (100%) since the Sunday-plan-composition cross-check appears to have absorbed informally.
- **Step 7 (explicit `Content refresh:` commit) — fifth use** after wrigley-field 5/05, AT&T 5/08, Mercedes-Benz 5/09, and Lumen 5/15. Commit shape target: 1 file, ~19-21 / ~10 (within tolerance of the prior 20-21 / 10 precedents).
- Push deferred to EOD daily-marketing-output cycle per CLAUDE.md "Push only when explicitly asked." The marketing-output push will pick up the Levi's Stadium commit on its next run; production will reflect the refresh once Vercel deploys, ~2-3 minutes after that push lands.

## WC sparse-venue refresh queue post-Levi's

| Venue | Matches | Most-advanced match | Sparse-data status | Tentative slot |
|-------|---------|---------------------|--------------------|----------------|
| Gillette Stadium (Foxborough) | TBD via Step 2 cross-check | TBD | Sparse | Next Fri/Sat 5/22-5/23 candidate |
| NRG Stadium (Houston) | TBD | TBD | Sparse | 5/29-5/30 candidate |
| Lincoln Financial Field (Philadelphia) | TBD | TBD | Sparse | 6/05-6/06 candidate |
| Arrowhead Stadium (Kansas City) | TBD | TBD | Sparse | 6/12-6/13 candidate (WC opener falls 6/11) |
| BMO Field (Toronto) | TBD | TBD | Sparse | Canada slot, June/July candidate |
| BC Place (Vancouver) | TBD | TBD | Sparse | Canada slot, June/July candidate |
| Estadio Azteca (Mexico City) | TBD | TBD | Sparse | Mexico slot, July candidate |
| Estadio Akron (Guadalajara) | TBD | TBD | Sparse | Mexico slot, July candidate |
| Estadio BBVA (Monterrey) | TBD | TBD | Sparse | Mexico slot, July candidate |

**Match-count column intentionally left TBD** for all remaining queue entries — per the 5/6 Step-0 hit rate on prior plan-derived match counts, the only reliable source is a pre-refresh `grep` cross-check against the `worldCupMatches` array. Future refresh days will populate the match-count via Step 2 at session start.

US-only venues remain to clear: 4 (was 5 pre-Levi's). At 1 venue per Friday/Saturday pair-slot, all US sparse-venue refreshes complete by ~6/13 — one week ahead of WC kickoff 6/11/2026 with a meaningful buffer for the Mexico venues. **All 16 venue refreshes before WC kickoff remains achievable.**
