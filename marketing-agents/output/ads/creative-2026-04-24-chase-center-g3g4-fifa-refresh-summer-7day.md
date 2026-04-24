# Ad Creative — 2026-04-24
## Angles: Chase Center G3/G4 Same-Section Spread (NEW TACTICAL), FIFA 34/51 / $94 Median (REFRESH), Summer Concert 7-Day Window Close (REFRESH)

_3 variations for A/B testing. Driven by today's three new/refreshed hooks: (1) Warriors Round 1 returns to Chase Center for G3 Saturday and G4 Monday — 200-level seats price at **$98 SG / $140 TM for G3** and **$62 SG / $85 TM for G4**, a **$30–40 drop on identical seats 48 hours apart**, a structural argument stronger than yesterday's two-venue G4-only spread. (2) FIFA group-stage dataset expanded from 28/42 to **34/51 matches** (ratio stable at 66.7% — "FIFA resale most expensive") with **median US-venue spread widening from $89 to $94** (SoFi + MetLife group-stage inventory still creeping up). A stable ratio on a growing dataset is the strongest possible validation of a headline claim; numbers-only refresh is all it earns. (3) Apr 19 Variation B (Pollstar $108.63 summer-concert evergreen) sharpens with a "one week left" urgency overlay — the 6-week pre-show inventory mark hits next Friday (May 1), same day as the Cubs opener, the natural wind-down date for both campaigns._

_Apr 23 Variation C (NBA G4 Cratering Day 2) is **RETIRED** — today's Chase Center G3/G4 same-venue same-section angle is a stronger structural argument than the Apr 23 two-venue spread (Rockets G4 at Toyota + Knicks-Pistons G4 at Little Caesars). Apr 23 Variation A (Cubs Wrigley May Homestand) is **MAINTAINED unchanged** — 7 days to opener, still cron-gated, copy holds. Apr 23 Variation B (TM vs SG Fee Flip) is **MAINTAINED unchanged** — TM-vs-SG fees blog Day 1 unpublished, LP still `/compare` fallback. Apr 22 Variation C (FIFA Mexico/Canada counter-flip) is maintained unchanged. Apr 21 Variation C (Dashboard Search Unlock) remains gated on `/dashboard/layout.tsx` deploy (Day 3)._

_Testing framework: 1 variable at a time. Run each variant minimum 3 days or 100 clicks. Winner scales; loser gets replaced. Product-truth gates applied: "price drop alerts" demoted from headlines (81/81 null target_price, full-pagination confirmed today), "track prices every 4 hours" banned entirely (dead cron Day 17), all claims verified deliverable via `/compare`, `/world-cup-2026`, or published blogs only._

_**Launch condition (all variants):** The post-signup UX audit must land BEFORE any of these go live. Analytics today confirmed 5/8 candidate non-activation rate on the April cohort — paid acquisition into that rate would scale a 62% leak. Variation A is also explicitly gated on the Chase Center venue-page refresh (or falls back to `/compare`); Variation B is gated on publish of the TM-vs-SG blog for optimal LP routing; Variation C has no LP gate but is Pixel-gated on Meta for retargeting. **None of these should go live before the commit-deploy-publish sequence clears.**_

---

### Variation A — Chase Center G3 vs G4: Same Seats, $30-40 Cheaper 48 Hours Later

**Google Search Ad:**
```
Headline 1: Warriors G3 $140 TM / $98 SG
Headline 2: G4 Same Seats: $85 TM / $62 SG
Headline 3: Compare Before Saturday Tip-Off
Description 1: Warriors Round 1 returns to Chase Center — G3 Saturday, G4 Monday. 200-level upper bowl: $98–128 on SeatGeek vs $118–140 on Ticketmaster (TM Platinum active). Same section G4: $62–85 on SeatGeek vs $71–96 on Ticketmaster.
Description 2: Same venue, same seats, 48 hours apart, $30–40 cheaper on G4. Playoff pricing is a curve, not a fixed number. Compare Ticketmaster, SeatGeek, StubHub in one pass. Free, no account.
```
- **Final URL:** https://www.ticketscan.io/venues/chase-center *(if today's venue refresh publishes)* OR https://www.ticketscan.io/compare *(fallback)*
- **Display path:** ticketscan.io/compare/chase-center
- **Sitelinks:**
  - G3 Saturday Tickets → /compare
  - G4 Monday Tickets → /compare
  - Chase Center Seating → /venues/chase-center *(post-refresh)* or /compare
  - How It Works → /how-it-works
- **Callouts:** "3 Platforms Compared", "Fees Included", "G3 + G4 Weekend", "Free, No Account"
- **Match types:**
  - Exact: `warriors g3 tickets chase center`, `warriors g4 tickets chase center`, `chase center playoff tickets`, `warriors round 1 tickets`, `warriors rockets g3 tickets`, `warriors rockets g4 tickets`, `chase center seating chart`
  - Phrase: `warriors playoff tickets compare`, `chase center playoff compare`, `warriors g3 g4 tickets`, `chase center cheap tickets`, `warriors round 1 200 level`
  - **AVOID** blanket exact match on `warriors tickets` — cross-contaminates regular-season and next-round browsing. Stick to G3/G4/Round 1 specific variants.
- **Geo:** Bay Area primary (SF/Oakland DMA + greater Bay + Marin/Sonoma +15%). Sacramento + Central Valley +10% (drive-in fans). LA/SoCal +5% (Warriors travel fan). National at base (Warriors have out-of-market fanbase but the high-intent search is local).
- **Device:** Mobile +20% (gameday walk-up and near-venue intent spikes Saturday afternoon and Monday evening). Desktop holds for Thursday/Friday research window.
- **Dayparting:** Push Fri evening + all-day Saturday + all-day Monday. Dial back Sunday (no game, lower search-intent density). 6am–11pm PT window.

**Meta Ad:**
```
Primary text: Warriors Round 1 comes home this weekend. G3 Saturday, G4 Monday, same Chase Center. 200-level upper bowl Saturday: $98 on SeatGeek, $140 on Ticketmaster (TM Platinum active on the lower bowl). Same exact section Monday: $62 on SeatGeek, $85 on Ticketmaster. Same seats. Same venue. Same series. 48 hours apart. $30–40 cheaper on G4. Playoff "premium" is a curve, not a fixed number — and if you're going to both games, the G3-to-G4 fee math is real money. Compare Ticketmaster, SeatGeek, and StubHub in one pass. Fees included. No account needed.
Headline: Same Seats, 48 Hours, $40 Cheaper
Description: Compare G3 + G4 before you click buy.
```
- **CTA button:** Learn More
- **Landing:** https://www.ticketscan.io/venues/chase-center *(if refresh ships today)* OR https://www.ticketscan.io/compare *(fallback)*
- **Audience:** SF/Oakland DMA primary, NBA-fan interest affinity (high): Warriors, Dub Nation, NBA Playoffs, Klay Thompson, Steph Curry, Draymond Green, Jimmy Butler (active Warriors roster). Secondary: Chase Center page-followers, season-ticket-holder lookalikes (broad). **Exclude:** users with "season ticket holder" affinity (already committed to TM-direct for playoffs), users who attended an event in last 7 days, users whose primary interest is WNBA/Valkyries (we haven't built positive Valkyries targeting yet and don't want Chase Center broad match leaking into an unprepared bucket).
- **Placements:** Feed, Stories, Reels. Exclude Audience Network.
- **Note:** This variation supersedes Apr 23 Variation C (NBA G4 Cratering Day 2) as the anchor for NBA R1 tactical paid. Structural argument is stronger: Apr 23 showed two different venues + two different series at the same price tier (Rockets G4 $34 at Toyota, Knicks-Pistons G4 $41 at Little Caesars). Today's angle shows **the same venue, the same section, the same series, 48 hours apart** — every variable controlled except the game number. The copy hits because the only moving part is the playoff pricing curve itself, which is the exact value-prop the comparison tool encodes. Tactical shelf life is 72 hours (Sat–Mon), making this a burst campaign not an evergreen.

**Why this angle:** Apr 23 Variation C's "same tier, two venues, two series" framing sold the road-team resale-collapse pattern, which works but requires the viewer to bridge two different contexts. Today's Chase G3/G4 angle collapses the framing to **identical seats 48 hours apart** — the cleanest possible "playoff pricing is a curve" proof and the single most paid-friendly copy we've had on NBA playoffs this campaign. Three mechanical advantages: (1) **Controlled variables** make the delta legible to a non-expert reader (same venue, same section, same series — one variable changes). (2) **Dollar deltas are memorable** ($30–40 range is concrete without being round-numbered enough to feel manipulated). (3) **Both games need tickets** — a non-zero fraction of the audience is buying G3 and G4, which is a direct doubling of the comparison-tool ROI per click. Bay Area geo focus also yields lower CPCs than national NBA Round 1 terms while preserving high click-intent.

**Shelf life:** 72 hours (launch Fri evening → wind down Monday night post-G4 tip). If series goes 2-1 after G3, G4 has sharper stakes but similar pricing; if it goes 3-0, G4 flips to "elimination game" mechanics and the pricing shape inverts — prepare a 24h-refresh shell for that scenario. **If Warriors sweep 4-0 Monday**, this creative retires Tuesday morning.

**Refresh trigger:** Post-G3 Saturday night, recheck G4 200-level pricing on both platforms. If G4 prices move >15% between pulls, swap the refreshed number into the ad shell. If it's a 3-0 series going into G4 (road-team elimination), swap from "$30-40 cheaper" framing to "elimination game pricing" framing — different mechanical story, same copy shell.

---

### Variation B — FIFA Resale: 34 of 51 Matches Most Expensive, Median Spread Now $94

**Google Search Ad:**
```
Headline 1: FIFA Resale: 34 of 51 Most Expensive
Headline 2: $94 Median US-Venue Gap (Up From $89)
Headline 3: Compare All 3 Before You Click Buy
Description 1: Updated World Cup 2026 resale data: we checked 51 group-stage matches across FIFA Official Resale, SeatGeek, and StubHub. FIFA's resale marketplace is the most expensive on 34 of 51 — 66.7% of the set. Median US-venue spread widened to $94, up from $89 last week.
Description 2: The "official" marketplace isn't always the cheapest — the pattern holds as the dataset grows. SoFi and MetLife group-stage inventory keeps creeping up. Compare FIFA Resale vs SeatGeek vs StubHub in one pass. Free.
```
- **Final URL:** https://www.ticketscan.io/world-cup-2026
- **Display path:** ticketscan.io/world-cup-2026/compare
- **Sitelinks:**
  - All 16 Stadiums → /world-cup-2026
  - Group Stage Matches → /world-cup-2026
  - Compare Any Event → /compare
  - How It Works → /how-it-works
- **Callouts:** "3 Resale Platforms", "Fees Included", "48 Days to Kickoff", "Free Comparison"
- **Match types:**
  - Exact: `fifa resale marketplace`, `fifa resale expensive`, `fifa resale vs stubhub`, `fifa resale vs seatgeek`, `world cup 2026 tickets compare`, `world cup 2026 resale`, `world cup 2026 ticket prices`
  - Phrase: `fifa resale 2026`, `world cup tickets stubhub`, `world cup tickets seatgeek`, `world cup resale comparison`, `where to buy world cup tickets 2026`, `world cup 2026 cheap tickets`
- **Geo:** US national primary. Bid adjustments: host-stadium metros (NYC/NJ for MetLife, LA for SoFi, Dallas for AT&T, Atlanta for Mercedes-Benz, Seattle for Lumen, SF for Levi's, Boston for Gillette, Philadelphia for Lincoln Financial, Houston for NRG, Kansas City for Arrowhead, Miami for Hard Rock) +20%. Secondary: Canada (Toronto + Vancouver) +10%, Mexico (national) +10%.
- **Device:** Mobile +5%. Research-heavy query, desktop converts well.
- **Dayparting:** Continuous. WC research spreads evenly; slight evening+weekend lift.

**Meta Ad:**
```
Primary text: Updated World Cup 2026 resale data. We checked 51 group-stage matches across FIFA's Official Resale marketplace, SeatGeek, and StubHub. On 34 of the 51, FIFA's marketplace was the most expensive. That's 66.7% — and the ratio hasn't moved as the dataset has grown from 42 matches last week to 51 this week. Median US-venue spread widened from $89 to $94 — SoFi and MetLife group-stage inventory is still creeping up. The "official" marketplace isn't always the cheapest. The pattern keeps validating. 48 days to kickoff. Compare before you click buy.
Headline: FIFA Resale Most Expensive on 34 of 51
Description: Compare FIFA, SeatGeek, StubHub. Free.
```
- **CTA button:** Learn More
- **Landing:** https://www.ticketscan.io/world-cup-2026
- **Audience:** US adults 25-55, soccer interest + World Cup interest + FIFA interest + MLS/Premier League/La Liga followers. Secondary: travel-to-sports-events behavior, season-ticket fans of any major sport (proxy for dedicated buyer). **Exclude:** users under 21 (can't lawfully resell themselves), users currently in-market for a specific group-stage host city (we'll retarget those via Google Search, not cold Meta), "ticket broker" profession affinity.
- **Placements:** Feed, Stories, Reels. Exclude Audience Network.
- **Note:** Same copy shell as Apr 22 Variation B (FIFA scandal/comparison anchor), numbers-only refresh. 28/42 → 34/51; 66.6% → 66.7%; $89 → $94. Ratio stability on a growing sample is the strongest possible validation of the headline claim — this is the kind of copy that earns featured-snippet consideration on queries like "is FIFA resale expensive" because the answer holds stable across expansions. **The `dateModified` field on any WC content will matter when the associated blog (Apr 22 FIFA data post) ships** — right now that blog is Day 2 unpublished and the schema stays out-of-date on prod.

**Why this angle:** Apr 22 introduced the "28/42 / 66.6% / $84" framing as the core comparison-tool proof for the World Cup bucket. One week later, both the numerator (28 → 34) and denominator (42 → 51) grew, the ratio barely moved (66.6% → 66.7%), and the median spread widened by $5. This is the shape of a claim that's structurally true, not a coincidence — and it earns a second week of paid spend with trivial refresh cost. The alternative framings ("FIFA resale is expensive", "WC tickets compare") are already saturated; the numbers-anchored headline is still the rarest form of WC comparison ad in the category.

**Shelf life:** Evergreen through WC kickoff (June 11) with weekly numbers refresh. Retire the "updated" positioning on Jun 4 (one week out) and shift to tactical last-mile pricing.

**Refresh trigger:** Weekly re-pull of the FIFA group-stage set. If ratio moves outside 62–70% band, rewrite copy. If ratio stays 65–68%, swap new numbers into the shell. Also: if the TM-vs-SG fees blog publishes and a FIFA-specific blog also ships, reconsider the LP target (blog URL unlocks QS tier similar to Variation B in Apr 23's set).

---

### Variation C — One Week Left: Summer Concert Deep-Inventory Window Closes Friday

**Google Search Ad:**
```
Headline 1: Summer Concert Window Closes Friday
Headline 2: Billie + Kendrick + Tyler + Chappell
Headline 3: Compare Before the Curve Steepens
Description 1: Pre-show inventory for summer stadium tours peaks 8-10 weeks out and starts thinning at 6-7. Billie Eilish opens June 13. Kendrick and Tyler mid-June. Chappell Roan late June. The 6-week mark hits next Friday.
Description 2: Pollstar's Q1 average is $108.63 — 9% above last year, so the baseline is already elevated. One week until the deep-inventory window closes. Compare Ticketmaster, SeatGeek, StubHub in one pass. Free, no account.
```
- **Final URL:** https://www.ticketscan.io/compare
- **Display path:** ticketscan.io/summer-2026
- **Sitelinks:**
  - Compare Any Event → /compare
  - How It Works → /how-it-works
  - World Cup 2026 → /world-cup-2026
  - Best Comparison Sites → /blog/best-ticket-comparison-sites-2026
- **Callouts:** "3 Platforms Compared", "Fees Included", "Pollstar-Backed Data", "Free, No Account"
- **Match types:**
  - Exact: `summer concert tickets 2026`, `cheapest summer concert tickets`, `billie eilish tour tickets 2026`, `kendrick lamar tour tickets 2026`, `tyler the creator tour tickets 2026`, `chappell roan tour tickets 2026`
  - Phrase: `summer tour compare`, `summer stadium tour tickets`, `cheap stadium tour tickets`, `summer concert compare`, `2026 summer tour`, `when to buy summer concert tickets`
  - **AVOID** broad match on artist names (`billie tickets`, `kendrick tickets`) — leaks into old-tour and unrelated-venue queries. Stick to `[artist] tour tickets 2026` variants.
- **Geo:** US national. Bid adjustments: summer tour host-city metros (NYC, LA, Chicago, Austin, Seattle, Atlanta, Houston, Boston, DC, Denver, Phoenix) +15%. Canada (Toronto, Vancouver, Montreal) +5% if artists have Canadian dates.
- **Device:** Mobile +15% (concert-research skews mobile; in-feed Reels/Stories conversions climb). Desktop still works for the research-comparison portion.
- **Dayparting:** Continuous. Concert-buying intent distributes across all hours; slight Thursday-Sunday lift.

**Meta Ad:**
```
Primary text: One week left before the summer concert window closes. Billie Eilish opens her summer leg ~June 13. Kendrick and Tyler mid-June. Chappell Roan late June. Pre-show inventory peaks 8-10 weeks out and thins at 6-7. The 6-week mark hits next Friday. Pollstar's Q1 average is $108.63, 9% above last year — baseline's already elevated, and the curve steepens from here. If you've been waiting, this is the calendar reminder. Compare Ticketmaster, SeatGeek, and StubHub in one pass before inventory tightens. Free, no account.
Headline: One Week Until Inventory Tightens
Description: Compare 3 platforms. Fees included. Free.
```
- **CTA button:** Learn More
- **Landing:** https://www.ticketscan.io/compare
- **Audience:** US adults 18-45, concert-attendee behavior + stadium-concert interest + specific-artist page-followers (Billie Eilish, Kendrick Lamar, Tyler the Creator, Chappell Roan, Sabrina Carpenter as proxy for cohort). Secondary: Pollstar readers, Setlist.fm visitors, music-festival attendees. **Exclude:** users with "ticket broker" affinity, users who already attended a stadium concert in last 14 days, users under 18 (legal/consent).
- **Placements:** Feed, Stories, Reels. Exclude Audience Network.
- **Note:** Refresh of Apr 19 Variation B (Pollstar $108.63 summer concert evergreen). Same copy shell, sharper time-bounded CTA. The "one week" urgency gives this a natural wind-down (next Friday = May 1 = same day as Cubs opener — convenient cross-campaign consistency, not coincidence because 6-week pre-show math falls where it falls). Pairs with Email Agent's Monday newsletter and Friday/Sunday social beats. **This is the only creative in today's set that's explicitly time-bounded** — Chase G3/G4 is tactical (72h) and FIFA is evergreen; Summer 7-Day Window closes itself on May 1 and needs a successor creative for the post-May 1 window ("the curve steepens — 6 weeks to Billie's opener").

**Why this angle:** Apr 19 Variation B sold the Pollstar $108.63 stat as an evergreen summer-concert cold-Meta anchor. The weakness was the lack of urgency — "it's expensive" is less actionable than "it's expensive and getting more expensive starting Friday." Today's sharpened version fixes that by adding a concrete date and explaining *why* that date matters (6-week pre-show inventory mechanic), which upgrades the copy from a descriptive stat to a decision-forcing CTA. Three mechanical advantages: (1) **Date-anchored urgency beats open-ended "compare prices"** for cold Meta, which depends on thumb-stop language. (2) **Multi-artist framing** (Billie + Kendrick + Tyler + Chappell) maximizes affinity-match coverage in a single creative — cheaper than running four separate artist-specific ads, and the comparison-tool pitch is artist-agnostic anyway. (3) **Pollstar 9%-above-last-year stat** provides the "why this matters" hook that generic summer-concert ads lack, and it's externally sourced (not a TicketScan claim), which is an additional trust shortcut.

**Shelf life:** 7 days (launch Apr 25 → wind down May 1 at "one week left → window closes"). Successor creative on May 2 pivots to "6 weeks to Billie's opener — the pre-show curve just steepened, here's what to expect from here."

**Refresh trigger:** Daily countdown update in copy (`one week left` → `5 days left` → `closes tomorrow`). Pollstar Q2 data drops late May; swap in Q2 number once available. If any of the four headline artists announces an additional date or sells out the opener, swap that artist's framing to a "sold out at opener" angle mid-flight.

---

## Creative Refresh Schedule

| Variation | Last Refresh | Next Refresh | Retire Trigger |
|-----------|--------------|--------------|----------------|
| A — Chase Center G3/G4 Same-Section Spread | Apr 24 (new) | Apr 26 (post-G3 pricing pull) | Warriors sweep 4-0 Monday OR series flips to elimination game (3-0 scenario) |
| B — FIFA 34/51 / $94 Median | Apr 24 (numbers refresh; shell from Apr 22) | May 1 (weekly numbers pull) | Ratio moves outside 62-68% band |
| C — Summer Concert 7-Day Window | Apr 24 (urgency overlay; shell from Apr 19) | Apr 28 ("3 days left" update) | May 1 (window closes → successor creative "6 weeks to Billie") |

## Retired From Prior Set

- **Apr 23 Variation C (NBA G4 Cratering Day 2 — Rockets $34 / Knicks $41):** Superseded by today's Variation A (Chase Center G3/G4 same-section spread). Same underlying road-team-resale-collapse mechanic; today's framing is structurally tighter (one variable vs three).

## Maintained From Prior Set (No Changes This Cycle)

- **Apr 23 Variation A — Cubs Wrigley May Homestand:** 7 days to opener. Copy holds; cron-gated launch condition unchanged. If price history cron writes before Apr 30, this campaign launches Apr 30 evening for a 10-day run through May 3 (end of D-backs series) with a mid-run refresh Apr 5 for the Reds series.
- **Apr 23 Variation B — Ticketmaster vs SeatGeek Fee Flip:** TM-vs-SG fees blog Day 1 unpublished. Copy holds; LP still `/compare` fallback. If blog publishes today/tomorrow, swap LP to blog URL mid-flight.
- **Apr 22 Variation C — FIFA Mexico/Canada Counter-Flip:** Geo-split creative unchanged. 6-of-42 → 6-of-51 cheapest-at-MX-CA matches (ratio holds at ~12%).
- **Apr 21 Variation C — Dashboard Search Unlock:** `/dashboard/layout.tsx` Day 3 undeployed. Paused at launch; activate on first green post-deploy build.

## Success Metrics (Baseline, at Launch)

_Metrics below are launch-scenario targets calibrated against the TicketScan category norm (no active campaign baseline). They assume the full infrastructure readiness checklist has cleared before any campaign goes live._

**Google Search Ads — Variation A (Chase Center G3/G4):**
- Target CTR: 5.5% (higher than NBA R1 norm due to venue-specific high-intent queries)
- Target CPA ≤ $12 (signup); ≤ $18 (watchlist_add — the better optimizer target given 62% non-activation)
- Target Quality Score: ≥ 7/10 post-deploy of `/venues/chase-center` refresh
- ROAS gate: pause at day 3 if CPA > $24 (signup) or $36 (watchlist_add)

**Google Search Ads — Variation B (FIFA 34/51):**
- Target CTR: 3.5% (WC-adjacent comparison query norm)
- Target CPA ≤ $15 (signup); ≤ $22 (watchlist_add)
- Target Quality Score: ≥ 6/10 (rises to ≥ 7/10 if FIFA blog publishes + WC hub updates with 34/51/$94 above-the-fold)
- ROAS gate: pause at day 3 if CPA > $30 (signup)

**Google Search Ads — Variation C (Summer Concert 7-Day):**
- Target CTR: 4.5% (summer-concert affinity norm)
- Target CPA ≤ $14 (signup); ≤ $20 (watchlist_add)
- Target Quality Score: ≥ 6/10
- ROAS gate: pause at day 3 if CPA > $28 (signup). Natural wind-down May 1 regardless.

**Meta Ads — All Three Variations:**
- Target CTR: 1.2-1.8% (cold Meta norm; higher-end for Variation A's tactical framing)
- Target CPA ≤ $18 (signup); ≤ $26 (watchlist_add)
- Target Relevance Score: ≥ 7/10 (3-day target post-launch)
- ROAS gate: pause at day 4 if CPA > $36 (signup) or Relevance Score < 5/10

**Attribution caveat (carried):** GA Data API Day 17 blocks server-side attribution. Rely on Meta Pixel + Google Ads conversion import only. `watchlist_add` should be the primary conversion optimizer, not `signup` — the 62% candidate non-activation rate makes signup a lagging indicator of real funnel health.

---

_Next creative refresh: 2026-04-25. Triggers to watch: (a) Chase Center venue refresh publishes → Variation A LP swap to `/venues/chase-center`; (b) TM-vs-SG fees blog publishes → Apr 23 Variation B LP swap to blog URL; (c) working-tree deploy clears → 18 files of schema/metadata + 3 indexing leaks resolved; (d) G3 Saturday night pricing pull → Variation A number refresh; (e) price history cron writes → Cubs Wrigley campaign unblocks for Apr 30 launch; (f) post-signup UX audit lands → paid-hold condition satisfies; (g) any of the 7 unpublished content drafts publish → LP-routing recalibration across multiple variations._
