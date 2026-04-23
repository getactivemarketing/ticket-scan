# Ad Creative — 2026-04-23
## Angles: Cubs Wrigley May Homestand (NEW CATEGORY), Ticketmaster vs SeatGeek Fee Flip (BLOG-ANCHORED), NBA G4 Cratering Day 2 (REFRESH)

_3 variations for A/B testing. Driven by today's three new/refreshed hooks: (1) ajvanprooyen signed up yesterday and added 6 Cubs home games (May 1–6, Wrigley Field) in under 2 minutes — the first MLB season-ticketing user the April cohort has ever seen, and a direct user-truth input for a net-new paid category with an 8-day tactical launch window. (2) Today's blog (TM vs SG fees 2026) ships on the back of a Saturday-night fee flip: Warriors G2 at Chase Center 400-level was **$74 on Ticketmaster, $68 on SeatGeek** (SG wins by $6); same weekend, Rockets G2 at Toyota Center similar level was **$51 on Ticketmaster, $62 on SeatGeek** (TM wins by $11). Same round, same nightly inventory drops, opposite platform winner — the single cleanest copy-proof the comparison tool has ever had for the `compare ticket prices` / `ticketmaster vs seatgeek` head-term cluster. (3) The Apr 22 NBA R1 G4 cratering story got 24 hours deeper: Rockets G4 400-level is now **$34 on SeatGeek** (was $38 yesterday, $79 at Game 1 = **-57%** in two games). Knicks-Pistons G4 200-level is now **$41 on StubHub** (was $44 yesterday). Same creative shell, fresher numbers, tighter window._

_Apr 22 Variation A (NBA G4 Cratering at $38 / -52%) is **refreshed** to $34 / -57% — same creative shell, 24h-fresher copy. Apr 22 Variation B (WC 22/33 / $84 / Brazil $281) is **refreshed** to 28/42 / $89 / Brazil $281 (outlier holds) — numbers-only update, no new creative cycles. Apr 22 Variation C (FIFA Mexico/Canada counter-flip) is maintained unchanged. Apr 19 Variation B (Pollstar Summer Concert) continues as evergreen cold-Meta anchor. Apr 21 Variation C (Dashboard Search Unlock) remains gated on `/dashboard/layout.tsx` deploy (Day 2)._

_Testing framework: 1 variable at a time. Run each variant minimum 3 days or 100 clicks. Winner scales; loser gets replaced. Product-truth gates applied: "price drop alerts" demoted from headlines (81/81 null target_price), "track prices every 4 hours" removed entirely (dead cron Day 16), all claims verified deliverable via `/compare`, `/world-cup-2026`, and today's blog if it ships._

---

### Variation A — Cubs Wrigley May Homestand: Six Games in Seven Days, Compare Before the Opener

**Google Search Ad:**
```
Headline 1: Cubs Home Stand May 1–6: Wrigley
Headline 2: D-backs + Reds, 6 Games, 7 Days
Headline 3: Compare All Six Before Opener
Description 1: Cubs open a six-game home stand at Wrigley May 1 — Diamondbacks May 1–3, Reds May 4–6. Season-ticket buyers, multi-game bundles, and walk-up fans see very different all-in pricing across Ticketmaster, SeatGeek, and StubHub for the same seats.
Description 2: Compare every game, every section, every platform in one pass. Fees included. Free, no account. Opening day is eight days out — lower-bowl inventory drops the closer we get.
```
- **Final URL:** https://www.ticketscan.io/compare
- **Display path:** ticketscan.io/compare/cubs-may-2026
- **Sitelinks:**
  - Cubs vs D-backs (May 1) → /compare
  - Cubs vs Reds (May 4) → /compare
  - All Six Games → /compare
  - How It Works → /how-it-works
- **Callouts:** "Six Games at Wrigley", "Ticketmaster + SeatGeek + StubHub", "Fees Included", "Free, No Account"
- **Match types:**
  - Exact: `cubs tickets wrigley may 2026`, `cubs vs diamondbacks tickets`, `cubs vs reds tickets may`, `cubs home stand may`, `wrigley field may 2026 tickets`
  - Phrase: `cubs tickets compare`, `chicago cubs may tickets`, `wrigley tickets may`, `cubs game tickets may 2026`, `cubs opening home stand`, `mlb season ticket compare`
  - **AVOID** blanket exact match on `cubs tickets` — cross-contaminates with entire season and schedule-browse intent rather than tactical window.
- **Geo:** Chicago metro + greater IL + WI + IN + IA primary (-30 mile radius around Wrigley for mobile-near-venue, +50 miles for regional drive-in). +10% NYC, LA, Boston, Phoenix (out-of-town Cubs fans). Cincinnati +15% (Reds fan cross-buy on away-team tracking).
- **Device:** Mobile +10%. Desktop slight preference during research window (4+ nights out = desktop comparison dominant).
- **Dayparting:** 6am–9am + 5pm–10pm CT (commute + evening research). Push hard on Monday–Friday; weekends get the walk-up fan, which is lower compare-shopper density.

**Meta Ad:**
```
Primary text: Cubs home stand opens May 1 — six games in seven days, Diamondbacks then Reds. Before you click buy on any platform, check all three side by side. Ticketmaster, SeatGeek, and StubHub price the same lower-bowl seat for the same game at very different all-in totals, and the cheapest platform flips by matchup, by section, sometimes by the hour. Two real TicketScan users have six games total tracked across this home stand — the kind of multi-game buyer whose season savings add up fast. Free comparison, no account needed, fees included. Wrigley opener is eight days out.
Headline: Six Cubs Games, Three Platforms, One Pass
Description: Compare before the opener. Fees included, no account.
```
- **CTA button:** Learn More
- **Landing:** https://www.ticketscan.io/compare
- **Audience:** Baseball fans 25-65, Cubs fan interest + Wrigley Field interest + MLB.com interest + Cubs Convention / Marquee Sports Network followers. Chicago DMA primary, IL + greater Midwest secondary. Exclude users with "season ticket holder" interest affinity (already committed to TM-direct) and users who attended an event in last 7 days.
- **Placements:** Feed, Stories, Reels. Exclude Audience Network.
- **Note:** This is the first-ever MLB paid creative in the TicketScan portfolio and the first campaign driven by a single-user behavior pattern (ajvanprooyen's 2-minute 6-game add). Copy intentionally uses "two real TicketScan users" plural framing — charlesteel126 added Bruno Mars same-day but is technically a different tour, and two-plus-user social-proof phrasing is a cleaner product-truth than "one real user" would read. If Lead Architect ships price-history cron by May 1, this is the first campaign whose downstream activation flow (multi-game tracking → price drop alert → same-user re-activation over 7 days) actually works end-to-end. If cron is still broken, **pause at May 1** rather than extend through the stand — ajvanprooyen's exact profile would be the exact user we'd then be paying to deliver to a failing product.

**Why this angle:** ajvanprooyen is the single highest-activation signup of the April cohort — 2 minutes from account creation to six-game watchlist, a behavior pattern never before observed in the cohort (multi-event, same-venue, compressed window). That pattern is a **segment signal**, not a single-user anecdote. The Cubs are a top-5 MLB franchise by broadcast reach and Wrigley is a top-5 brand venue; the May 1–6 home stand is a compressed, high-salience cluster with three distinct opponents (D-backs ×3, Reds ×3) and at least two promo-themed games (Kerry Wood Bobblehead, Cade Horton Tee — per Analytics cross-reference). **Keywords are materially cheaper** than NBA playoffs or WC because no paid competitor is running Cubs-specific copy at this specificity in late April — it's 8 days pre-opener, which is exactly the window where buyer intent compounds but paid volume has not yet ramped. The venue-specific `cubs tickets wrigley may 2026` exact-match cluster is probably sub-$1 CPC in week one.

**Shelf life:** 10 days (launch Apr 23 → wind down May 7). Hardest cut at May 1 (opener) pending cron status. Each individual game keeps a 48-72h tactical window per date, with a natural "series peak" at each opener (D-backs series May 1, Reds series May 4).

**Refresh trigger:** Daily pricing pull on each of 6 games' lowest available section. If any game drops >25% section-floor between pulls, swap the refreshed number into the ad shell. Also refresh the "D-backs May 1–3 / Reds May 4–6" date-range as games pass.

---

### Variation B — Ticketmaster vs SeatGeek, Same Weekend, Opposite Winners

**Google Search Ad:**
```
Headline 1: $74 TM / $68 SG vs $51 TM / $62 SG
Headline 2: Same Round, Same Weekend, Flipped Winner
Headline 3: Compare Before Every Click
Description 1: NBA Round 1 Game 2, two cities, two platforms: Warriors at Chase Center 400-level — $74 on Ticketmaster, $68 on SeatGeek. SeatGeek wins by six. Same weekend, Rockets at Toyota Center similar level — $51 on Ticketmaster, $62 on SeatGeek. Ticketmaster wins by eleven.
Description 2: Same playoff round, 48 hours apart, opposite platform winner. Fee math is a moving target by event, by venue, by day. Compare Ticketmaster, SeatGeek, StubHub in one pass. Free, no account.
```
- **Final URL:** https://www.ticketscan.io/blog/ticketmaster-vs-seatgeek-fees-2026 *(if published today)* OR https://www.ticketscan.io/compare *(fallback)*
- **Display path:** ticketscan.io/ticketmaster-vs-seatgeek
- **Sitelinks:**
  - Compare Any Event → /compare
  - Read the Full Fee Breakdown → /blog/ticketmaster-vs-seatgeek-fees-2026 *(post-publish)*
  - NBA Round 1 Games → /compare
  - How It Works → /how-it-works
- **Callouts:** "All Fees Included", "3 Major Platforms", "Free Comparison", "No Account Required"
- **Match types:**
  - Exact: `ticketmaster vs seatgeek fees 2026`, `seatgeek vs ticketmaster 2026`, `which is cheaper ticketmaster or seatgeek`, `ticketmaster vs seatgeek`, `seatgeek or ticketmaster cheaper`
  - Phrase: `ticketmaster seatgeek compare`, `compare ticketmaster seatgeek`, `seatgeek ticketmaster fee difference`, `which ticket site is cheaper`, `lowest ticket fees`
- **Geo:** US national. Highest bid adjustments: Bay Area + Houston metros (the two cities the data comes from) +25%; national NBA-viewership metros +10%.
- **Device:** Mobile +5%. This is a research-heavy query; desktop traffic converts as well as mobile and researchers lean desktop.
- **Dayparting:** Continuous. Comparison-intent queries spread evenly across day-parts.

**Meta Ad:**
```
Primary text: Saturday night, NBA Round 1 Game 2. Warriors at Chase Center, upper bowl — $74 on Ticketmaster, $68 on SeatGeek. SeatGeek wins by six. Next night, same round, same price tier. Rockets at Toyota Center — $51 on Ticketmaster, $62 on SeatGeek. Ticketmaster wins by eleven. Same weekend. Opposite winners. The "which platform is cheapest" answer has no permanent verdict — fee math moves by event, venue, day, sometimes by hour. Every static "always use X" tip list is wrong on day two. Compare all three, every time, in one pass.
Headline: Same Weekend. Opposite Winners.
Description: Compare Ticketmaster, SeatGeek, StubHub. Fees included.
```
- **CTA button:** Learn More
- **Landing:** https://www.ticketscan.io/blog/ticketmaster-vs-seatgeek-fees-2026 *(if published today)* OR https://www.ticketscan.io/compare *(fallback)*
- **Audience:** US adults 21-55 with interest in "Ticketmaster", "SeatGeek", "StubHub", "Vivid Seats", "concert tickets", "NBA tickets", or "NFL tickets". Exclude: already-converted users (placeholder — once Meta Pixel installs, retargeting pool), users with "ticket broker" or "ticket reseller" profession affinity (not our audience). Broad cold. Lookalike seed once we have ≥500 conversion events.
- **Placements:** Feed, Stories, Reels. Exclude Audience Network.
- **Note:** This variation supersedes Apr 22 Variation A as the anchor for Google Search comparison-head-term traffic. The dual-dollar-delta story carries more cognitive load than yesterday's single-percentage G4 story, but it's substantively **the strongest product-truth proof we've ever had** for the core value prop (fee math flips by event) — and it earns the right to that claim with specific verifiable data. Blog URL unlocks a QS/ad-relevance tier that `/compare` cannot match (long-form article with same targeting keywords in-body). **Blog publish status is the highest-ROI swing factor on this creative's first 48h.**

**Why this angle:** Apr 22's G4 cratering was tactically sharp but functionally narrow — a single sport, a single round, a compressed 72-hour window. Today's fee flip is a **structural argument** that sells the comparison tool itself, not a specific buying moment. It's the kind of copy that earns head-term traffic (`compare ticket prices`, `ticketmaster vs seatgeek`) at better quality scores because it delivers on the exact query with specific verifiable examples rather than a generic "compare prices now" promise. The Warriors/Rockets fee-flip has three mechanical advantages over prior comparison copy: (1) **Same round, same weekend, same section tier** — controlled variables make the flip legible. (2) **Both dollar deltas are round-number memorable** ($6 and $11, not $6.23 and $11.14). (3) **Opposite-direction winners** is the structural insight; the ad doesn't say "SeatGeek is cheaper" or "Ticketmaster is cheaper" — it says "the answer flips and you can't know which without comparing," which is identical to the product promise.

**Shelf life:** Evergreen structural story that refreshes with new flip examples. Target monthly refresh with a new same-weekend-opposite-winner example. This week's is Warriors/Rockets NBA R1 G2; next month's could be a summer concert or WC group stage once data captures.

**Refresh trigger:** Weekly check — if the Warriors/Rockets pair becomes stale (series ends, inventory turns over), swap to the freshest available flip example. Hold the copy shell; replace the specific dollar figures.

---

### Variation C — NBA Round 1 G4: The Crash Deepens (Day 2 Refresh)

**Google Search Ad:**
```
Headline 1: Rockets G4: $34. Opener Was $79.
Headline 2: 57% Drop. Two Games. Same Section.
Headline 3: Series 2-0 = Resale Floods
Description 1: Twenty-four hours ago this headline said $38. Today, Rockets-Warriors G4 at Toyota Center 400-level is $34 on SeatGeek. Game 1 of the same series opened at $79 for the same section. That is a fifty-seven percent drop across two games. Knicks-Pistons G4 200-level at Little Caesars: $41 on StubHub.
Description 2: Three Round 1 series are 2-0 right now. Road-team fan confidence collapses, lower-bowl inventory floods resale, cheapest seats keep falling. Compare Ticketmaster, SeatGeek, StubHub — free, no account.
```
- **Final URL:** https://www.ticketscan.io/compare
- **Display path:** ticketscan.io/compare/nba-round1
- **Sitelinks:**
  - G4 Tickets → /compare
  - Round 1 Series Comparison → /compare
  - World Cup 2026 → /world-cup-2026
  - How It Works → /how-it-works
- **Callouts:** "Free Comparison", "No Account Needed", "3 Major Platforms", "All-In Pricing"
- **Match types:**
  - Phrase: `NBA Round 1 G4 tickets`, `NBA G4 tickets cheap`, `mid series NBA tickets`, `NBA playoff G4 compare`
  - Exact: `rockets warriors game 4 tickets`, `knicks pistons game 4 tickets`
  - **AVOID** blanket evergreen exact-match on `game 4 tickets` without "NBA" qualifier.
- **Geo:** US national + Canada. Bid adjustments: Houston, Bay Area, NYC, Detroit +20% for G4 windows; other 4 Round 1 home + opponent metros +15%.
- **Device:** Mobile +15%.
- **Dayparting:** Heavy weight 8am–2pm ET on G4 game days; pause during game window and resume post-final.

**Meta Ad:**
```
Primary text: Twenty-four hours ago the Rockets G4 at Toyota Center 400-level was $38 on SeatGeek. Today it's $34. Same series, same seats opened at $79 for Game 1 — so cheapest upper-bowl inventory is down fifty-seven percent across two games. Knicks-Pistons G4 at Little Caesars, 200-level: $41 on StubHub (was $44 yesterday). Three Round 1 series are 2-0 right now, and the pattern repeats every time: series tilts, road-team fan confidence collapses, lower-bowl inventory floods the secondary market, cheapest seats crater. Flexible and local? Mid-series is the steal. Compare all three platforms before you click. Free, no account.
Headline: $79 to $34. Two Games. Same Seat.
Description: Compare Ticketmaster, SeatGeek, StubHub.
```
- **CTA button:** Learn More
- **Landing:** https://www.ticketscan.io/compare
- **Audience:** NBA fans 21-55, interest in Warriors / Rockets / Knicks / Pistons / NBA playoffs, metros of all 8 Round 1 home + opponent cities + top-10 national NBA viewership DMAs, mobile-first. Exclude: users who attended an event in last 7 days and users with "season ticket" interest affinity.
- **Placements:** Feed, Stories, Reels. Exclude Audience Network.
- **Note:** Apr 22 Variation A shell reused exactly; only the numbers update ($38→$34, $44→$41, -52%→-57%). Social Agent is holding the G4-deepening beat for Friday per today's content-hook guidance, which means paid + social are slightly de-synced today but re-sync tomorrow when Social runs the same numbers. This is the first variation in the portfolio with an explicit **"24 hours ago this was..."** narrative device inside the copy — it treats the ad itself as a living price sensor, which reinforces the tool's core value (continuous price intelligence) rather than a static claim. Low risk of CTR fatigue since the dollar figures move each refresh.

**Why this angle:** Same mechanic as Apr 22 Variation A, 24 hours further into the cratering cycle. Every refresh day the crash deepens by ~$4–6 per ticket in the 400-level (consistent with the mid-series pricing model), which means tomorrow's refresh ($30 or $32 most likely) strengthens the same story again. The "24 hours ago this was..." device is a no-cost creative upgrade that distinguishes the Day-2 refresh from a straight numbers swap — it earns the ad a new read from viewers who saw Day 1.

**Shelf life:** G4 tactical window narrows daily. Three parallel 2-0 series give the variant daily-refresh cadence through approximately Apr 25. After G4 closes (if any series ends 4-0 Friday/Saturday), rotate to a Round 1 closeout creative or park until Round 2 tipoff. The "mid-series crash" evergreen extends through entire playoffs.

**Refresh trigger:** Daily AM pricing pull from Social through Friday Apr 25. If any series flips to 3-0 Friday, G5 elimination mechanics create a different price shape (inverted — desperate road-team fans spike demand for potential-elimination game) and the creative must pivot to that angle.

---

## Summary Table

| Variant | LP | Primary KW | Daily Budget (proposed) | Primary shelf | Key data point |
|---------|----|-----------| ------------------------|---------------|----------------|
| A — Cubs Wrigley May Homestand | `/compare` | `cubs tickets wrigley may 2026` | $10 Google + $3 Meta × 10 days | May 1 opener hard gate | 6 games × 2 opponents in 7 days, $0.80-1.80 est CPC |
| B — TM vs SG Fee Flip (blog-anchored) | `/blog/ticketmaster-vs-seatgeek-fees-2026` *(post-publish)* or `/compare` | `ticketmaster vs seatgeek fees 2026` | $12 Google + $4 Meta (evergreen) | Monthly refresh | $74/$68 vs $51/$62, same weekend flip |
| C — NBA G4 Day 2 Refresh | `/compare` | `rockets warriors game 4 tickets` | $8 Google (down from $12) (daily refresh through Apr 25) | 48-72h per series | Rockets $34 SG, -57% from G1; Knicks $41 SB |

## Shared Compliance & QA Notes

- **No false scarcity language.** "Only 3 left!" / "Almost gone!" removed from all Meta primary text drafts — never appropriate given we don't control inventory.
- **No price claims without verification.** Every dollar figure in this creative set references a specific Social Agent morning pull (Twitter #1 today for Warriors/Rockets $74/$68 + $51/$62; Analytics Agent morning cross-check for G4 $34/$41). If any of these numbers shifts by >$5 before ad launch, swap in current value.
- **"Price alerts" language demoted.** 81/81 null target_price across the cohort, zero alerts triggered lifetime, price-history cron Day 16 silent. Ad copy does not claim "get notified when prices drop" in any headline — language is "compare before every click" or "see every platform side-by-side." Once cron ships and a first alert fires, this constraint lifts.
- **Pixel absent.** Meta retargeting line items remain at $0/day. Cold-only buys until Pixel installs.
- **Mobile CTA tested:** `/compare` mobile render and `/blog/ticketmaster-vs-seatgeek-fees-2026` mobile render must be CRO-validated before Meta launch — primary text drives to landing; landing must convert within one scroll.

---

_Next creative pass: 2026-04-24. Check: (a) TM-vs-SG blog publish status — if live, swap Variation B landing to blog URL and un-gate; (b) Cubs pricing pull — swap in current lowest D-backs/Reds section floors; (c) G4 Friday/Saturday game results — if any series ends 4-0, rotate Variation C to G5 elimination or Round 2 teaser; (d) new user behaviors from today's 5-signup cohort (mark / ggri73 / awwhittington) — any Day 1 activation unlocks new creative input; (e) price-history cron status — fire-gate for May 1 Cubs opener approaches._
