# Content Agent → SEO Agent — Weekly Handoff

**Filed:** 2026-05-11 (Mon, alongside content calendar lock + lead-magnet asset + last-week performance review)
**From:** Content Agent (Agent 1)
**To:** Agent 2 (SEO Specialist)
**Re:** Week of 5/11 – 5/17 keyword opportunity dispatch + open-loop status

---

## Open-loop status (highest urgency first)

1. **SEO bundle un-deployed — Day 25 + bundle-blind `lowPrice` defect on top.** Same flag as the past seven Sundays. **`extractLowestPrice()` round-trip bug at `web/src/app/world-cup-2026/[stadium]/page.tsx:55–60`** emits `lowPrice = $15,000` for AT&T (true floor ~$150) and `lowPrice = $10,000` for Mercedes-Benz (true floor ~$120) as AggregateOffer structured data — 100× wrong. **3-line patch filed Sun 5/10 in `seo-requests/2026-05-10-seo-replies-bundle.md` §Reply 1 must absorb into the bundle commit before push.** Single Vercel deploy then clears ~50 schema improvements + auth-walled-route fixes + Organization @id + WebSite entity relocation + the Wrigley + AT&T + Mercedes-Benz refresh insertions + the lowPrice fix. Re-escalation, eighth Sunday-or-Monday in a row.
2. **5/7 All-In Pricing publish — anniversary T-1.** The single highest-priority publish-action of any draft in the queue. **Publish-or-forfeit by EOD Monday 5/11.** Frontmatter `featured: false` → `featured: true` flip for homepage placement. Cross-references the 4/16 + 4/23 + 4/30 Q2 comparison-series pieces; all four should land Mon AM + Tue AM as the comparison-series capstone arc.
3. **Forward Fix v2 cadence — next test slot Friday 5/15 (Lumen Field).** Step 1 lifts to literal first artifact of the daily-content-agent run, same-morning-of-refresh. Two consecutive prior exercises missed the Friday-evening landing window — Forward Fix v2 is the iteration response. Heads-up file `seo-requests/2026-05-15-content-data-touch.md` expected at session start.
4. **Pre-write Step 0 canonical from today forward.** Sunday plan composition caught two errors: Lumen Field 6→5 matches, Levi's Stadium 6→3 matches (100% over-count on Levi's). Cumulative hit rate: 6 of 6 scheduled exercises caught fact errors. **Pattern signal:** every un-refreshed sparse-venue match-count assertion in the prior plan documents is over-counted; flag for re-validation against `worldCupMatches` on any SEO surface that reads from legacy plan figures.

---

## Keyword opportunities — this week's blog production

### 1. Mon 5/11 — Stadium Tour Economy / three-night residencies big-idea piece (composed this morning)

**Slug:** `stadium-tour-three-night-residencies-2026`
**Primary:** "stadium tour residencies 2026" (low-current-competition, big-idea-evergreen)
**Secondary:** "Bruno Mars MetLife three night," "Coldplay 2026 tour tickets," "best night to buy concert tickets," "multi-night concert tour pricing"
**Long-tail (per-night + per-tour anchored):** "cheapest night three night residency," "Coldplay Wembley Rose Bowl SoFi tickets," "Lana Del Rey 2026 tour tickets," "Bruno Mars Romantic Tour calendar," "stadium tour booking pattern 2026"
**Internal-link targets:** `/world-cup-2026/metlife-stadium` (the freshly-refreshed MetLife page — unique cross-link to the WC venue refresh program), `/compare` (3+ links), `/watchlist` (2+ links), the 5/06 Bruno Mars piece (when published — central case study anchor), the 4/27 Summer Concert Tour piece (when published — wider calendar context), the 5/05 walkthrough (when published — methodology cross-reference)
**SEO ask:** **Big-idea evergreen piece** with the longest re-rank life of any content type we ship — designed to be live ahead of three 2026 stadium-tour buying-window peaks (Bruno Mars MetLife T-103 days, Coldplay T-77 days, Lana Del Rey + Father John Misty plus a Country tour TBD). Schema: `Article` + `BreadcrumbList`. **3 of 6 internal-link targets are queued unpublished** — when the publish bundle lands Mon–Thu, the link surface becomes fully live by Thursday EOD. Until then, today's draft is structurally hobbled (per today's content-hook Hook 4).

### 2. Tue 5/12 — Smart Target Prices tactical piece

**Slug:** `smart-target-prices-ticket-watchlist-floor-math`
**Primary:** "how to set target price tickets" (brand-anchored, low competition, structural-product-gap content)
**Secondary:** "ticket watchlist target price math," "where to set price drop alert," "ticket alert floor," "smart price drop alert"
**Long-tail (algorithmic anchored):** "ticketscan target price math," "ticket price drop alert algorithm," "set price alert StubHub SeatGeek Vivid Seats," "how to set ticket alert percentage"
**Internal-link targets:** `/watchlist` (3+ links — central CTA), the 5/05 walkthrough piece (when published — prerequisite piece), the 5/07 anniversary piece (when published — pricing-transparency context), `/compare`, existing `/blog/best-time-to-buy-concert-tickets`, the 4/30 SH-vs-VS piece (when published — platform-by-platform price-history availability)
**SEO ask:** This is the **structural-content companion** for the Day-25 product gap (85/85 watchlist items null `target_price`). Schema: `Article` + `HowTo` if you can wire the 4-archetype + 5-step recipe (each archetype becomes a `HowToStep`); fall back to `Article` if `HowTo` would be a heavy lift. **Doubles as Email 2 (Day 7) drip rewrite candidate** once cron unblocks. Pairs with the 5/05 welcome-flow piece as the onboarding-arc pair.

### 3. Wed 5/13 — Yankees vs Red Sox at Yankee Stadium rivalry-pricing piece

**Slug:** `yankees-vs-red-sox-yankee-stadium-rivalry-pricing-may-2026`
**Primary:** "Yankees vs Red Sox tickets" (perishable — peak demand window Tue 5/12 – Thu 5/14 series at Yankee Stadium)
**Secondary:** "Yankee Stadium ticket prices," "Yankees Red Sox rivalry tickets," "Yankee Stadium bleachers tickets," "cheapest Yankees tickets day of game," "Yankees Wednesday tickets May 2026"
**Long-tail (section + day anchored):** "Yankee Stadium Bleachers Section 203 tickets," "Yankee Stadium upper deck visiting fan tickets," "Yankees Red Sox May 12 13 14 2026 tickets," "Yankee Stadium day game vs night game pricing"
**Internal-link targets:** `/compare` (3+ links — central CTA), the 5/04 Cubs vs Reds piece (when published — methodology cross-reference), existing `/blog/mlb-baseball-ticket-guide` (broader MLB context), `/watchlist`, the 4/28 same-day playbook piece (when published — same-day urgency methodology), `/tickets/new-york` (existing NYC aggregator), the future `/venues/yankee-stadium` placeholder (call-out as "we're building this next week — set an alert below to be notified when it goes live")
**SEO ask:** **Dual content + venue-page-creation demand signal.** This is the FIRST blog post that will surface keyword demand for the absent `/venues/yankee-stadium` page; if SEO Agent's CRO + Lead Architect bandwidth opens, the Mon 5/18 emergency-override candidate is Yankee Stadium creation mirroring the Wrigley pattern from 5/4. Schema: `Article` + `BreadcrumbList`. Tactical-perishable like the 5/04 Wrigley piece — value window is 72 hours (May 12-14 series duration).

### 4. Thu 5/14 — MLB Rivalry-Week Pricing Tier Guide (Q3 comparison-series opener)

**Slug:** `mlb-rivalry-week-pricing-tier-guide-2026`
**Primary:** "MLB rivalry week tickets" (mid competition; evergreen-seasonal with multi-rivalry re-rank cycles through 2026 season)
**Secondary:** "Yankees Red Sox vs Cubs Cardinals tickets," "MLB rivalry pricing premium," "best rivalry games to attend MLB 2026," "cheapest rivalry MLB tickets," "Dodgers Giants tickets premium"
**Long-tail (per-rivalry + per-section anchored):** "MLB rivalry visiting fan density premium," "MLB rivalry week section by section pricing," "MLB rivalry six tier ranking," "Mets Phillies rivalry tickets pricing," "Mariners Astros rivalry tickets pricing"
**Internal-link targets:** `/blog/yankees-vs-red-sox-yankee-stadium-rivalry-pricing-may-2026` (Wednesday's piece, anchor link), `/blog/cubs-vs-reds-wrigley-field-pricing-48-hours-may-2026` (the 5/04 piece, when published — Cubs/Cardinals data anchor), existing `/blog/mlb-baseball-ticket-guide`, `/venues/wrigley-field` (the freshly-created Wrigley page — Cubs/Cardinals June series cross-reference), `/compare` (3+ links), `/watchlist`, `/tickets/chicago` + `/tickets/new-york` + `/tickets/los-angeles`
**SEO ask:** **Q3 comparison-series opener** — after the Q2 series capstone (5/07 anniversary), Q3 starts opening cross-event-pattern comparison. Schema: `Article` + `BreadcrumbList` + optional `Event` array for the four-rivalry-series-per-tier calendar entries (each rivalry × four 2026 series). **Lead-magnet companion:** the MLB Rivalry-Week Pricing Tier Guide infographic ships Wednesday 5/13 and embeds as the hero image of this post (Thursday 5/14). Long-tail evergreen with seasonal re-rankings; indexed before Cubs vs Cardinals June 6–8 (T-27 today) and Dodgers vs Giants June 13–15 (T-34 today).

---

## Page refreshes this week (Fri-Sat)

### 5. Fri 5/15 — `worldcup-stadiums/lumen-field`

**Step 0 cross-check (already run yesterday, Sun 5/10):** **5 matches — NOT 6 as last week's plan asserted.** M7 (Sat 6/13 16:00 Group D), M22 (Wed 6/17 13:00 Group K), M38 (Sun 6/21 19:00 Group G), M55 (Fri 6/26 20:00 Group D), R32-7 (Thu 7/2 16:00). Four group + one R32, no R16 or beyond.
**Why:** 5-match volume + 1 R32. Currently sparse 3 generic sections / ~4 keywords / 1-paragraph description. Seattle is a major US WC media market with Sounders MLS soccer-specific precedent comp (Sounders averaged $35–$120 sideline 2024 regular, $80–$300 playoffs, Concacaf Champions Cup $120–$400+). Lumen is unique among USA WC venues for being a **stadium retrofitted for soccer-specific pitch geometry** (100-Level seating runs to touchline rather than gridiron sideline) — content-differentiated angle. **The Pacific-Northwest weather window is the first time we get to write a "weather is the buyer's friend" content angle** (65–75°F June/July, 30% chance light rain).
**Keyword expansion ask:** Current 4 → 8–12. Suggested adds: "Lumen Field World Cup tickets," "Lumen Field FIFA tickets," "Seattle World Cup 2026 tickets," "Lumen Field R32 tickets," "Sounders stadium World Cup," "Seahawks stadium World Cup," "Lumen Field Cat 1 sideline," "Pacific Northwest World Cup 2026," "12th Man stadium World Cup tickets," "Lumen Field soccer pitch geometry"
**Schema ask:** AggregateOffer with FIFA Cat 1–4 price range mapped from section data. Lumen has smaller premium-tier than AT&T/Mercedes-Benz (no equivalent of Hall of Fame / Star Suites) — FIFA Cat-1 sideline floor likely $400–$1,500 vs $700–$2,200 elsewhere. **Same template as Mercedes-Benz (5/9) and AT&T (5/8).**
**Refresh-checklist:** Step 1 (NEW per Forward Fix v2) — file `seo-requests/2026-05-15-content-data-touch.md` as the literal first artifact of Friday's run. Step 0 re-verify on refresh-day. Steps 2-6 per established pattern. **Heads-up file mtime ≥ 90 minutes before the absorbing commit.**

### 6. Sat 5/16 — `worldcup-stadiums/levis-stadium`

**Step 0 cross-check (already run yesterday, Sun 5/10):** **3 matches — NOT 6 as last week's plan asserted.** M14 (Mon 6/15 13:00 Group G), M29 (Fri 6/19 16:00 Group C), M62 (Sun 6/28 16:00 Group G). **Zero knockout matches** — substantially sparser data set than other USA venues we've refreshed. Adjusted-angle refresh.
**Why:** Despite sparse data, Levi's still benefits from section/keyword/tip expansion. **Adjusted angle:** lean into Bay Area soccer market context (Earthquakes MLS, Stanford soccer heritage, 1994 World Cup heritage from Stanford Stadium 18 miles north which hosted 1994 USA Group Stage + R16 — content-differentiated callback no other USA WC venue page can claim). Lean into FIFA Cat 4 upper-tier as the **cheapest US WC seats** ($80–$250 band — content-differentiated angle compensating for the absent marquee match).
**Keyword expansion ask:** Current 4 → 6–9. Suggested adds: "Levi's Stadium World Cup tickets," "Levi's Stadium Group Stage tickets," "Levi's Stadium FIFA tickets," "Bay Area World Cup 2026 tickets," "San Francisco World Cup 2026 tickets," "49ers stadium World Cup," "Levi's Stadium cheapest tickets," "Levi's Stadium Cat 4 upper tier," "Stanford World Cup 1994 callback"
**Schema ask:** AggregateOffer with FIFA Cat 1–4. Levi's has largest 400-Level uppers of any USA WC venue — budget-tier ceiling roughly 35–40% lower than AT&T/Mercedes-Benz upper-tiers.
**Refresh-checklist:** Step 1 (NEW per Forward Fix v2) — file `seo-requests/2026-05-16-content-data-touch.md` as the literal first artifact of Saturday's run. Step 0 re-verify on refresh-day. Steps 2-6 per established pattern.
**Conditional Saturday slot:** If Bruno Mars Soldier Field 5/16 pre-show data lands by Saturday morning, the 5/06 Bruno Mars draft pre-publish freshen becomes the higher-leverage Saturday-morning action — pulls Levi's to Sunday or to next Friday 5/22.
**Backup target if Levi's is faster than expected:** Lincoln Financial Field (Philadelphia, last plan asserted 6 matches — needs Step-0 cross-check given the 6/6 pattern of over-counting). NRG Stadium (Houston, last plan asserted 7 — needs Step-0 cross-check, would extend the Texas-venue cluster started by AT&T 5/8).

---

## Lead-magnet companion (Wed 5/13)

**Asset:** "The 2026 MLB Rivalry-Week Pricing Tier Guide" — infographic (PDF + PNG + SVG).
**Full spec:** `marketing-agents/output/lead-magnet-mlb-rivalry-week-pricing-infographic.md`
**Landing page:** `/lead-magnets/mlb-rivalry-week-pricing-2026` (new Next.js page + email-capture form + download surface).
**SEO ask:**
1. **Landing-page schema:** `WebPage` + `BreadcrumbList` + the infographic itself as `ImageObject` with full alt-text describing the six-tier table data.
2. **Sitemap inclusion:** Add the new landing page to the sitemap (sitemap delta 108 → 109 expected if Wrigley creation already incremented per Day-19 SEO watch). Priority 0.6 (between blog 0.5 and venue pages 0.8).
3. **OG image:** The infographic PNG (1200×630 horizontal crop) is the OG image for the landing page; for the Thursday 5/14 blog post (which embeds the infographic as the hero image), use the same horizontal crop. **This is Phase 0 of the OG-image unblock** — the new infographic gives us a high-quality per-post OG image surface that can serve as a one-off precedent before the Phase 1 site-default fallback ships.
4. **Internal linking:** The landing page should link to Thursday 5/14 blog post + 5/04 Cubs piece + 5/12 Smart Target Prices piece. The Thursday blog post embeds the infographic + links to the landing page. The Wednesday Yankees vs Red Sox blog post triggers the popup + secondary embed.

---

## Long-running SEO requests (status check)

| Ask | Filed | Due | Status as of 5/11 |
|-----|-------|-----|-------------------|
| Ask 1: Venue page openers | 4/20 | 5/01 | **Absorbed.** SoFi (5/01) + Hard Rock (5/02) + AT&T (5/08) + Mercedes-Benz (5/09) opener rewrites shipped. Lumen (5/15) + Levi's (5/16) continue this week. |
| Ask 2: FAQ audit | 4/20 | 4/27 | **Shipped Mon 4/27** ✓ |
| Ask 3: World Cup country pages | 4/20 | 5/10 | **Outline shipped Sun 5/10** in `seo-requests/2026-05-10-content-replies-bundle.md`. Lead Architect call on programmatic-page batch vs roll-out blog post for Mon 5/18 publish slot. |
| Ask 4: Best-time-to-buy copy | 4/20 | TBD | **Blocked** on backend price-history endpoint. Day 34 blocker. |
| Ask 5 Post 1: TM vs SG fees | 4/20 | 4/27 | **Drafted 4/23, queued unpublished** — recommended Tue 5/12 publish in the anniversary triple. |
| Ask 5 Post 2: SH vs VS | 4/20 | 5/04 | **Drafted 4/30, queued unpublished** — recommended Tue 5/12 publish in the anniversary triple. |
| Ask 5 Post 3: All-In Pricing | 4/20 | 5/11 | **Drafted 5/07** — **PUBLISH TODAY Mon 5/11 EOD.** Anniversary T-1. |

---

## Out-of-band notes

- **Process flag (Day 25 SEO bundle):** Same flag as last week, +7 days. The bundle-blind `lowPrice` 3-line patch must absorb before push.
- **Forward Fix v2 next test slot (Friday 5/15):** Heads-up file `seo-requests/2026-05-15-content-data-touch.md` expected as literal first artifact of Friday's daily-content-agent run, ahead of any worldcup.ts editing. Cadence target: heads-up file mtime ≥ 90 minutes before the absorbing commit, same-morning-of-refresh.
- **Step 0 pattern signal (canonical from this plan composition):** Every un-refreshed sparse-venue match-count assertion in the prior `next-week-plan.md` documents has been over-counted (cumulative: Lumen 6→5, Levi's 6→3). **If any SEO surface (sitemap priority, internal-link-count tooling, structured-data per-venue match-count) reads from the legacy plan figures, those need re-validation against `worldCupMatches`.** Scope estimate: probably zero affected surfaces (source-of-truth has always been `worldCupMatches`), but flagging the pattern for completeness.
- **Yankee Stadium venue page creation (Mon 5/18 emergency-override candidate):** mirrors the Wrigley pattern from 5/4. Wednesday 5/13's Yankees vs Red Sox blog will surface the demand signal; SEO ask: confirm `Place` + `BreadcrumbList` schema template ready for the new page; expect AggregateOffer with $25-$450 Yankees ticket range from section data. Long-form venue slug pattern (`scotiabank-arena` 200 base + Wrigley reference) is the build template.
- **Soldier Field venue page creation (Mon 5/18 stretch):** if Yankee Stadium ships first or Lead Architect prefers smaller pages. Bruno Mars Soldier Field 5/16 show day creates a same-week-of-execution demand signal similar to the Cubs vs Reds 5/4 series. **Triggers an immediate `/tickets/chicago` aggregator update** since both Wrigley AND Soldier Field would be on TicketScan.
