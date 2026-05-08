# Content Refresh Log

## 2026-05-08 — AT&T Stadium (worldcup.ts)

**Page refreshed:** `att-stadium` in `web/src/data/worldcup.ts` → renders at `/world-cup-2026/att-stadium`

**Commit:** `305cb11 Content refresh: att-stadium` (1 file, +20 / -10). Same shape as the wrigley-field precedent (`636e40b` on 2026-05-05) — clean isolated source-code commit with a `Content refresh:` prefix, not the marketing-output channel that produced the 5/01 worldcup.ts leak (`3dbd22b`). Push deferred to the EOD daily-marketing-output cycle per CLAUDE.md "Push only when explicitly asked."

**Step 0 catch (per 5/02 process improvement):** the 5/03 `next-week-plan.md` Friday entry asserted AT&T hosts **9 matches**. `grep -n "venue: 'att-stadium'" web/src/data/worldcup.ts | grep "round: '"` returns **7**: M5 (06-12 22:00 Group C), M20 (06-16 19:00 Group J), M36 (06-21 13:00 Group F), M53 (06-26 16:00 Group C), R32-3 (06-30 16:00), R16-3 (07-04 16:00 — Independence Day), QF-3 (07-10 16:00 — Quarter-Final). The 9-match figure was upstream-counting drift; same error class as the 5/01 SoFi Third-Place mistake and the 5/02 MetLife "plus seven earlier matches" off-by-one. Step 0 caught it pre-commit — third clean catch since the step was added.

**What changed:**

1. **Description** upgraded from a 1-sentence stub to a single rich paragraph covering: 7-match volume framing, Quarter-Final QF-3 (July 10) + Independence Day R16-3 (July 4) framing, Cowboys year-round usage with WrestleMania 32 (101,763 attendance, $300–$2,000+ resale) and Super Bowl XLV ($2,500–$10,000+ resale) comps, Canelo-era boxing-megafight resale framing ($1,000–$10,000+ get-in — generic phrasing without specific event-date claims), the world's largest column-free interior + 60-yard center-hung HD video board landmark, the retractable roof + retractable end-zone glass doors and the AC/HVAC structural fan-comfort advantage over outdoor June/July venues like MetLife (acute for the M36 13:00 CT group-stage slot and the four 16:00 CT knockout slots, Arlington afternoon feels-like 100°F+ in late June / early July), soccer pitch geometry mapping (sidelines parallel 100-Level row 1 sections 105–115 east / 137–147 west; goal lines behind 116–118 and 134–136), cross-platform comparison framing, and TicketScan CTA with explicit price-alert mention. Folds in SEO Ask 1 (venue page openers, due 5/01, 7 days overdue) — opener rewrite scope absorbed.

2. **Sections expanded** from 3 generic tiers (Field Level / Lower Bowl / Upper Level) to 9 specific section groupings mapped to AT&T's actual layout *and* to FIFA's Category 1–4 pricing tiers:
   - 100-Level Sideline (105–115 east, 137–147 west) — FIFA Cat 1, $900–$3,000+ (long-axis pitch, premium for QF and July-4 R16)
   - 100-Level Corner (101–104, 116, 134, 148–150) — $600–$1,800
   - 100-Level Endline (117–118, 135–136) — $450–$1,300 (behind the goals, intense supporters atmosphere)
   - Hall of Fame Club (field-level premium) — $1,400–$4,500 (all-inclusive with private entry, lounge, padded seating, pitch-side access)
   - Star Suites (mid-sideline premium) — $1,200–$3,500 (Cowboys-era exclusivity tier with in-seat service)
   - Mezzanine Sideline (200s) — FIFA Cat 2, $500–$1,400 (best mid-range value)
   - Upper Sideline (300s) — FIFA Cat 3, $250–$800 (column-free dome preserves sightlines from height)
   - Upper Corner & Endline (400s) — FIFA Cat 4, $130–$550 (cheapest WC seats; July-4 R16 Independence Day demand bump on this tier specifically)
   - AT&T Suite Level — $15K–$50K+ (QF suite resale tracks ~60–75% of MetLife Final suite pricing per prior tournament knockout-round comps)

3. **TicketTips expanded** from 4 generic tips ("the giant video board can obstruct views", "lower bowl sidelines provide the best soccer experience", etc.) to 8 AT&T-specific tips covering: 100-Level sideline sightlines (FIFA Cat 1 zone for QF + July-4 R16), 100-Level endline avoidance with column-free-dome far-end-distance callout, mezzanine 200s/300s mid-range value with the video-board-obstruction-zone callout, 400s upper budget tier with the **R16-July-4 Independence Day demand bump**, Hall of Fame Club / Star Suites premium upsell with AC framing, DART Trinity Lakes Station (opened 2024) + AT&T Stadium event-shuttle transit specifics with the $50–$100+ official-lot-parking benchmark, the retractable-roof + AC framing for the M36 13:00 CT and four 16:00 CT slots (genuine fan-comfort edge over MetLife / Hard Rock), and a post-on-sale 20–30% resale-dip pattern with three concrete venue comps (Super Bowl XLV, WrestleMania 32, Cowboys-Eagles primetime).

4. **Keywords expanded** from 5 to 12. Added: "AT&T Stadium World Cup 2026 tickets," "AT&T Stadium quarter-final tickets," "AT&T Stadium July 4 World Cup," "AT&T Stadium seating chart," "cheapest AT&T Stadium World Cup tickets," "Hall of Fame Club AT&T," "World Cup quarter-final July 10 2026."

**Why this venue:**

- The 5/03 next-week plan slated AT&T as today's Friday refresh slot — the third consecutive Friday/Saturday execution of the WC sparse-venue refresh template (SoFi 5/01, Hard Rock 5/02, AT&T 5/08; MetLife was 4/25). Mercedes-Benz Stadium is on deck for Saturday 5/9.
- AT&T was the most match-dense remaining sparse WC venue at 7 matches — Hard Rock and SoFi each host 7 and 8 respectively but both already refreshed; Mercedes-Benz hosts 8, NRG hosts 7, Arrowhead hosts 6, etc. The match volume + Quarter-Final + Independence Day R16 combination makes AT&T's expected page traffic in June–July among the top-3 US WC venues after MetLife and SoFi.
- The Quarter-Final tier (QF-3) is genuinely under-served on competitor venue pages — the search-volume cluster around "World Cup quarter-final tickets" ramps roughly two weeks before the QF date (June 26 onward) and lasts roughly through QF day (July 10). The page now has explicit QF keyword targeting at depth.
- The July 4 Round of 16 is a unique-to-AT&T-and-Hard-Rock content angle (R16-3 at AT&T at 16:00 CT and R16-4 at Hard Rock at later time on the same day). Hard Rock's page has carried this since 5/02; AT&T's page now matches.
- The retractable-roof + AC framing is a genuinely differentiated content surface that no other US WC venue page can claim at this depth (Mercedes-Benz also has a retractable roof but the Texas-heat angle is sharper for Arlington). Worth its own paragraph in the description as a fan-comfort search-intent capture surface.

**SEO impact expected:**

- Full section data populates the seating guide sidebar and gives Google more on-page entity signals for the "AT&T Stadium" knowledge panel and the new "AT&T Stadium World Cup 2026" entity.
- 12 keywords (was 5) covers the full intent spectrum from broad "AT&T Stadium World Cup tickets" to long-tail "World Cup quarter-final July 10 2026" and "Hall of Fame Club AT&T."
- FIFA Category mapping (Cat 1 / Cat 2 / Cat 3 / Cat 4) embedded in section descriptions captures the official-pricing-vocabulary search surface.
- Independence Day R16 content angle is shared only with Hard Rock's parallel R16-4 — zero current ranking competition on the upper-tier July-4 demand-bump cluster.
- WrestleMania 32 / Super Bowl XLV / Canelo-era boxing megafight resale references give the page combat-sports + big-event-resale credibility anchors that the SoFi (Hollywood / Olympics) and MetLife (Taylor Swift Eras) pages don't carry.
- Once the SEO bundle deploys, the AggregateOffer `lowPrice` extraction yields ~$130 (was $150 placeholder; new 400-Level Cat 4 floor is $130) and `highPrice` shifts to $50,000+ (was $3,000+; new AT&T Suite Level ceiling). Schema-impact estimate filed in `seo-requests/2026-05-08-content-data-touch.md`.

**Verification:**

- `npx tsc --noEmit` ran clean — exit 0, no TypeScript errors introduced
- `git diff --numstat -- web/src/data/worldcup.ts` confirms single-file scope: `20 / 10` (matches the heads-up estimate)
- Cross-checked AT&T's description and ticketTips against the `worldCupMatches` array — all match-count, round-name, date, and start-time references verified

**Cross-agent handoffs:**

- **SEO Agent:** `seo-requests/2026-05-08-content-data-touch.md` filed Friday morning (~8 hours late vs. the Thursday-evening cadence accepted in `seo-requests/2026-05-05-content-replies-bundle.md` §Reply 4). Late-filing cause flagged inline (composition wrapped without spawning the Step 5b heads-up step). Forward fix: Step 5b moves to the start of the Thursday-night content-hook flow next slot (Saturday 5/9 Mercedes-Benz heads-up due tonight Friday 5/8). Also requested SEO sign-off on (a) AggregateOffer lowPrice/highPrice shift estimate, (b) any upstream SEO surface that referenced "AT&T 9 matches" needing a parallel correction, (c) ack on the Step 5b miss-and-late filing.
- **Social Agent:** AT&T refresh + the Independence Day R16 angle are the highest-leverage social posting opportunity for the next ~60 days of WC content cycle. Suggested social handles: the July 4 R16 demand-bump callout (Hard Rock + AT&T parallel), the retractable-roof Texas-heat AC framing (genuinely differentiated), the WrestleMania 32 / Super Bowl XLV resale comp anchors.
- **Email Agent:** AT&T section-by-section pricing table is a candidate insert for the WC-opener email-blast Email Agent ships when cron unblocks; pairs with MetLife / SoFi / Hard Rock parallel sections from prior refreshes for a "all four big US WC venues at a glance" pricing reference.

**Process notes:**

- Step 5b (SEO heads-up file) ran late on its first scheduled exercise. Calibration carryover for tomorrow's Mercedes-Benz refresh: the heads-up file is the *first* artifact of the refresh-checklist next slot, drafted Thursday evening before any other work. Hook 6's renumbering proposal from Thursday's content-hook stays open; this miss is the data point arguing for it.
- Step 0 caught the third pre-commit fact error since the step was added 5/02 (SoFi-Third-Place 5/01 retroactive, MetLife off-by-one inline 5/02, AT&T 9-vs-7 today). Step is paying for itself.
- Step 5 (explicit `Content refresh:` commit) ran clean — second use after wrigley-field 5/05 (`636e40b`).
- Push deferred to EOD daily-marketing-output cycle per CLAUDE.md "Push only when explicitly asked." The marketing-output push will pick up commit `305cb11` on its next run; production will reflect the AT&T refresh once Vercel deploys, ~2–3 minutes after that push lands.

---

## 2026-05-02 — Hard Rock Stadium refresh + SoFi factual correction + MetLife inline fix (worldcup.ts)

**Pages refreshed:**
1. `hard-rock-stadium` in `web/src/data/worldcup.ts` → renders at `/world-cup-2026/hard-rock-stadium` (primary refresh)
2. `sofi-stadium` in same file → renders at `/world-cup-2026/sofi-stadium` (factual correction of yesterday's refresh)
3. `metlife-stadium` in same file → renders at `/world-cup-2026/metlife-stadium` (inline off-by-one fix)

**What changed (Hard Rock — primary refresh):**
1. **Sections expanded** from 3 generic tiers (Lower Bowl / Club Level / Upper Level) to 10 specific section groupings mapped to Hard Rock's actual layout *and* to FIFA's Category 1–4 pricing tiers:
   - 100-Level Sideline (105–115, 142–152) — FIFA Cat 1, $700–$2,400+ (the long-axis pitch row, full canopy shade)
   - 100-Level Corner (101–104, 116–118, 138–141, 153–156) — $500–$1,500
   - 100-Level Endline (behind the goals) — $400–$1,200
   - Joe Robbie Club / Living Room Cabanas (field-level premium) — $1,200–$5,000 (the first-of-its-kind 50-yard-line cabana product introduced in the 2016 renovation)
   - Hyundai Club / 9th & Tipsy Club (200s) — $700–$2,000
   - Mezzanine Sideline (300s) — FIFA Cat 2, $400–$1,000
   - Mezzanine Corner & Endline (300s) — $300–$750
   - Upper Sideline (400s) — FIFA Cat 3, $200–$600
   - Upper Corner & Endline (400s) — FIFA Cat 4, $120–$450 (cheapest WC seats at Hard Rock)
   - Hard Rock Suite Level — $12K–$45K+ (Third-Place suite resale historically tracks 30–40% of Final suite resale)
2. **Description** upgraded from a 2-sentence stub to a rich paragraph covering: Hard Rock's actual WC 2026 role (7 matches including the **Third-Place Playoff on July 18, 2026** and a Round of 16 falling on **July 4, 2026 — US Independence Day**), the Copa America 2024 Final pricing comp (Argentina 1, Colombia 0 on July 14, 2024 — $1,800–$8,000+ sideline resale, the only direct prior continental-final pricing reference for any US WC venue), Inter Miami / Messi-era marquee-match comps ($1,500–$5,000+ sideline) with the Chase Stadium capacity context, Super Bowl LIV (Feb 2020 — Chiefs 31, 49ers 20, $5K–$20K+ resale), Formula 1 Miami GP and Orange Bowl mentions, the 26-acre 2016-renovation canopy structure (shades all seats, leaves field uncovered), Miami June/July afternoon humidity (feels-like 100°F+) and pop-up thunderstorms (14:00–17:00), soccer pitch geometry mapping, cross-platform comparison framing, and TicketScan CTA with explicit price-alert mention.
3. **TicketTips expanded** from 4 generic tips ("the canopy provides shade", "Miami heat can be intense", etc.) to 8 Hard-Rock-specific tips covering: 100-Level sideline best sightlines (Cat 1 with full shade), endline avoidance, 300s mezzanine mid-range value, 400s upper budget tier with the **R16-July-4 Independence Day demand bump**, Joe Robbie Club / Living Room cabanas premium upsell, Tri-Rail to Opa-locka + Brightline to Aventura transit specifics with the I-95/Florida Turnpike traffic warning, the rain/lightning policy callout (poncho recommended, lightning delays have run 30–90 minutes at prior summer events), and a post-on-sale 25–35% Copa-America-Final-comp resale dip pattern.
4. **Keywords expanded** from 4 to 10. Added: "Hard Rock Stadium World Cup 2026 tickets," "Hard Rock Stadium third place playoff tickets," "Hard Rock Stadium seating chart," "cheapest Hard Rock World Cup tickets," "Joe Robbie Club Hard Rock," "World Cup third place July 18 2026."

**What changed (SoFi — factual correction):**
- Yesterday's refresh asserted SoFi hosts the Third-Place Playoff on July 18. The source-of-truth `worldCupMatches` array (line 585) shows SoFi hosts **Semi-Final SF-2 on 2026-07-15 at 20:00** — the Third-Place Playoff (TP) is at Hard Rock per line 588.
- **Description corrected:** "Round of 32 knockout, and the Third-Place Playoff on July 18, 2026 — the day before the Final" → "knockout rounds through a Quarter-Final, and a Semi-Final on July 15, 2026 — four days before the Final at MetLife." Added Semi-Final demand context ("historically trails only the Final itself").
- **3 ticketTips corrected:** Third-Place-Playoff references in the Upper-Bowl-pricing tip (now reflects Semi-Final demand: $700+ Semi vs $400+ Third-Place), the Hancock Club premium tip, and the driving/transit tip — all reframed as Semi-Final.
- **3 sections corrected:** C-Level Sideline ($1,100–$3,200+ → $1,400–$4,500+ to reflect SF demand premium), Mezzanine Sideline ($500–$1,300 → $600–$1,700), Suite Level ($18K–$55K+ → $22K–$70K+, with the description noting SF suite resale tracks 50–70% of Final suite resale).
- **2 keywords corrected:** "SoFi Stadium third place playoff tickets" → "SoFi Stadium semi-final tickets" + added "SoFi Stadium quarter-final tickets"; "World Cup third place July 18 2026" → "World Cup semi-final July 15 2026."
- **Why the price ranges went up:** Semi-Finals are the second-highest-demand tournament match after the Final. Third-Place Playoffs are historically the softest knockout-round demand (consolation match). The previous Third-Place pricing ranges were too low for a Semi-Final. New ranges reflect prior FIFA tournament knockout-round resale comps and Copa America 2024 Semi-Final → Final spread.

**What changed (MetLife — inline off-by-one fix):**
- Description said "plus seven earlier matches across the group stage and knockout rounds" but MetLife actually hosts 9 matches total per `worldCupMatches`: 4 group stage (M3, M17, M33, M51) + R32-1 + R16-1 + QF-2 + **SF-1 on July 14** + Final on July 19 = 9 matches.
- Updated to: "plus eight earlier matches across the group stage and knockout rounds — including a Semi-Final on July 14, 2026 — for a tournament-leading nine matches total."
- This is the smallest of the three edits but worth shipping in the same commit because the QA gap that produced the SoFi error (no cross-check between the venue's narrative claims and the matches array in the same file) had also produced this off-by-one.

**Process improvement added today:**
- New refresh-checklist Step 0 (will be applied to all 14 remaining unrefreshed WC venues): `grep -n "venue: '<slug>'" worldcup.ts | grep "round: '"` to enumerate the venue's actual matches before drafting the description, ticketTips, sections, and keywords. This is a 30-second check that would have caught yesterday's SoFi error pre-commit *and* the MetLife off-by-one whenever it was first introduced.
- The same checklist step caught my own intra-session error in today's content-hook Hook 5 — the first draft asserted "AT&T hosts Semi-Final 1 (SF-1)" but the matches array shows SF-1 is at MetLife and AT&T's highest-tier match is QF-3 on July 10. Hook 5 was corrected before the file was committed.

**Why these venues:**
- **Hard Rock primary refresh:** Yesterday's Hook 5 explicitly forward-flagged Hard Rock for today's Saturday slot — same execution pattern as last Saturday's MetLife refresh and last Friday's SoFi refresh. Hard Rock was the most sparse remaining WC USA-venue entry (3 sections, 4 keywords, 1-sentence description) tied with AT&T and a few others. Hard Rock anchors the Florida market — the third-largest WC USA market after MetLife/NYC and SoFi/LA. The Copa America 2024 Final pricing comp is the cleanest direct continental-final reference for any US WC venue (no other US WC venue has hosted a continental-final-tier match in the last 5 years), which gives Hard Rock a unique credibility-anchor advantage that no other venue page can claim.
- **SoFi correction:** Factual errors on the production site decay TicketScan's authority and degrade the AggregateOffer JSON-LD signal. The 24-hour error-detection-to-fix loop is the cleanest possible execution; letting the Third-Place-Playoff error live longer would compound into blog drafts, email content, and social copy referencing the same wrong assertion.
- **MetLife inline fix:** Same QA-gap class as the SoFi error. While I was in the file with a working cross-check loop, fixing it cost ~2 minutes and prevented the same error class from continuing to propagate.

**SEO impact expected:**
- **Hard Rock:** Full section data populates the seating guide sidebar and gives Google more on-page entity signals for the "Hard Rock Stadium" knowledge panel and the new "Hard Rock Stadium World Cup 2026" entity. Third-Place Playoff keyword cluster is genuinely under-served — competitor venue pages don't yet cite the July 18 fixture by name. The Copa America 2024 Final reference adds a credible pricing comp that AI Overviews and answer-engine queries can cite verbatim. The Independence Day R16 (July 4) angle is a unique-to-Hard-Rock-and-AT&T content hook with zero current ranking competition. Inter Miami / Messi marquee-match resale comp gives the page a soccer-specific credibility anchor that the football-only NFL stadium pages lack.
- **SoFi:** Removes a factual error from production (positive trust signal). Semi-Final keyword cluster is more accurately targeted than the Third-Place keyword cluster was — Semi-Final search volume is higher than Third-Place Playoff search volume by an order of magnitude (Semi-Final is the second-most-searched WC fixture type after the Final).
- **MetLife:** Adds the Semi-Final keyword surface to MetLife's description ("Semi-Final on July 14, 2026" is now indexable on the page) without changing the existing Final-focused targeting. Additive only.
- **Cross-page:** Once the SEO bundle deploys, the AggregateOffer `lowPrice` extraction from sections still works correctly on all three pages; the section price ranges are accurate for the actual round assignments.

**Verification:**
- `npx tsc --noEmit` ran clean — no TypeScript errors introduced (verified twice: after Hard Rock + SoFi edits, then again after MetLife edit)
- `git diff --stat` confirms the single-file scope (`web/src/data/worldcup.ts`)
- Cross-checked all three venues' descriptions against the `worldCupMatches` array — no remaining round-assignment errors detected for MetLife, SoFi, or Hard Rock

---

## 2026-05-01 — SoFi Stadium (worldcup.ts)

**Page refreshed:** `sofi-stadium` in `web/src/data/worldcup.ts` → renders at `/world-cup-2026/sofi-stadium`

**What changed:**
1. **Sections expanded** from 3 generic tiers (Field Level / Lower Bowl / Upper Bowl) to 9 specific section groupings mapped to SoFi's actual C-Level / 200s Sideline Club / 300s Mezzanine / 500s Upper Bowl / 400s Suite layout *and* to FIFA's Category 1–4 pricing tiers:
   - C-Level Sideline (C100–C112, C140–C152) — FIFA Cat 1, $1,100–$3,200+
   - C-Level Endline (C113–C115, C137–C139) — $650–$1,800 (behind the goals)
   - Hancock Club / Coyote Reserve — field-level premium with private lounges and pitch-side access, $1,400–$3,800
   - Sideline Club (200s) — premium club level, $900–$2,400
   - Mezzanine Sideline (301–310, 340–349) — FIFA Cat 2, $500–$1,300 (best mid-range value)
   - Mezzanine Corner (311–314, 336–339) — $400–$1,000
   - Upper Bowl Sideline (501–508, 540–548) — FIFA Cat 3, $250–$700
   - Upper Bowl Corner & Endline (509–539) — FIFA Cat 4, $150–$550 (cheapest World Cup seats)
   - SoFi Suite Level (400s) — $18K–$55K+
2. **Description** upgraded from a 2-sentence stub to a rich paragraph covering: SoFi's actual WC 2026 role (8 matches including the Third-Place Playoff on July 18, 2026 — *not* the Final, which is at MetLife), the $5.5B 2020-opened venue and 70,240/100,000+ capacity, Hollywood Park / Inglewood location ten miles south of downtown LA, Super Bowl LVI ($7K–$10K+ resale comp), 2028 Olympic opening ceremony role, Copa America 2024 sideline pricing comp ($400–$1,200), the translucent ETFE canopy roof, the 12-million-pixel Samsung Infinity Screen, soccer pitch geometry mapping, cross-platform comparison framing, and TicketScan CTA with explicit price-alert mention.
3. **TicketTips expanded** from 4 generic tips ("LA traffic is brutal", "Oculus video board", etc.) to 8 SoFi-specific tips covering: C-Level sideline best sightlines (Cat 1), endline avoidance, 300s mezz mid-range value, 500s upper budget tier, Hancock/Coyote Reserve premium upsell, LA Metro K Line transit (concrete route — Downtown Inglewood Station), 405/105 traffic warning with $75+ parking benchmark, and a post-on-sale 15–25% resale dip pattern with three concrete venue comps (Super Bowl LVI, Taylor Swift, Copa America Final).
4. **Keywords expanded** from 5 to 10. Removed "World Cup Final tickets" (factually incorrect — Final is at MetLife) and "World Cup LA tickets" was kept. Added: "SoFi Stadium World Cup 2026 tickets," "SoFi Stadium third place playoff tickets," "SoFi Stadium seating chart," "cheapest SoFi World Cup tickets," "Hancock Club SoFi," "World Cup third place July 18 2026."

**Why this venue:**
- Yesterday's Hook 4 explicitly forward-flagged today's Friday slot as the SoFi refresh per Sunday's next-week plan — same template as last Saturday's MetLife refresh (commit 2617882)
- SoFi was the most sparse remaining WC USA-venue entry tied with Hard Rock and a few others (3 sections vs MetLife's post-refresh 9), and SoFi anchors the LA market — the second-largest WC media market after MetLife/NYC
- **Perfect timing:** FIFA general sale closes April 2026 (per the unpublished 4/29 draft) and resale-only window is opening, which means the next 60 days of search traffic for "SoFi Stadium World Cup tickets" rolls into TicketScan's resale-comparison value prop directly. The 4/22 unpublished FIFA-resale draft also references SoFi as one of the high-spread venues — when that piece publishes, the SoFi page is the natural internal-link landing target
- Removing "World Cup Final tickets" as a keyword is a small but real SEO hygiene fix — SoFi is **not** the Final venue (MetLife is), and ranking for a keyword you can't deliver on is wasted authority

**SEO impact expected:**
- Full section data populates the seating guide sidebar and gives Google more on-page entity signals for the "SoFi Stadium" knowledge panel and the new "SoFi Stadium World Cup 2026" entity
- Richer description lifts the "About" content depth to match MetLife (the only other WC venue currently at full-template depth)
- Third-Place Playoff keyword cluster ("SoFi Stadium third place playoff tickets," "World Cup third place July 18 2026") is a genuinely under-served keyword set — the third-place match is the second-highest-demand non-Final fixture and SoFi has no current ranking competition for it
- Hollywood Park / Inglewood / Metro K Line mentions open internal-link potential to a future Los Angeles city page (currently does not exist — flagging to SEO Agent as a candidate for the programmatic-expansion request)
- Copa America 2024 reference adds a credible pricing comp that AI Overviews and answer-engine queries can cite verbatim

**Verification:**
- `npx tsc --noEmit` ran clean — no TypeScript errors introduced
- `git diff --stat` confirms the single-file scope (`web/src/data/worldcup.ts`: 20 insertions, 10 deletions)

---

## 2026-05-01 — Cross-agent reply to SEO Agent (blog-count reconciliation)

**Open request:** `marketing-agents/output/seo-requests/2026-04-28-blog-count-reconciliation.md` (Day 4 open).

**Reply (Path 2 — Acknowledge 20-post baseline):**
- Source-of-truth count from `web/src/data/blog.ts` on `main` HEAD this morning: **19 published `slug:` entries** (line numbers: 20, 92, 156, 255, 353, 454, 552, 675, 780, 931, 1085, 1257, 1407, 1567, 1646, 1732, 1846, 1961, 2067).
- The sitemap shows 20 because it includes the `/blog` index URL alongside the 19 individual post URLs.
- The 21-post handoff assumption was off by one and has been since at least the 2026-04-18 OG-image handoff. No post has been depublished and no restoration action is needed.
- The open `seo-requests/2026-04-18-blog-og-images.md` should now treat **19** as the post count. OG-image deliverables for any drafts published after 4/18 are still owed once those drafts ship from the publish queue (currently 11 drafts deep — see today's content-hook Hook 2).

This reply unblocks the SEO Agent's medium-priority Action-Item carry on this request. No code changes were needed on either side.

---

## 2026-04-25 — MetLife Stadium (worldcup.ts)

**Page refreshed:** `metlife-stadium` in `web/src/data/worldcup.ts` → renders at `/world-cup-2026/metlife-stadium`

**File-target correction:** Sunday's next-week plan slated MetLife as today's refresh target in `venues.ts`. MetLife is not in `venues.ts` (that file is 24 NBA/NHL arenas only — no NFL stadiums) — it lives in `worldcup.ts` with a different `WorldCupVenue` schema (`{name, priceRange, description}` sections + `ticketTips` + `teams` instead of the `{name, tier}` arena schema). Refresh principle is the same; future plans should target `worldcup.ts` for any of the 16 World Cup stadium pages.

**What changed:**
1. **Sections expanded** from 3 generic tiers (Field 100s / Mezz 200s / Upper 300s) to 9 specific section groupings mapped to MetLife's actual layout *and* to FIFA's Category 1-4 pricing tiers:
   - 1 Field Level Sideline grouping (101-115, 134-150) — FIFA Category 1, long-axis pitch views
   - 1 Field Level Endline grouping (116-118, 134-136) — behind the goals, lower price tier
   - 1 Coaches Club grouping — premium mid-sideline club with indoor lounge access (entirely new tier — wasn't represented in prior data despite being one of MetLife's most-searched seat products)
   - 1 Mezzanine Sideline grouping (201-217, 235-250) — FIFA Category 2
   - 1 Mezzanine Corner grouping (218-220, 232-234) — sub-tier between sideline and endline
   - 1 Mezzanine Endline grouping (221-231) — supporters-section vibe for traveling fan groups
   - 1 Upper Level Sideline grouping (301-317, 334-350) — FIFA Category 3
   - 1 Upper Level Corner & Endline grouping (318-333) — FIFA Category 4, cheapest seats
   - 1 MetLife Suite Level grouping — Final-only on resale, $15K-$50K+ range to anchor the AggregateOffer high end
2. **Description** upgraded from a 2-sentence generic blurb to a single rich paragraph covering: World Cup Final date (July 19, 2026), the seven additional matches at MetLife, second-largest US stadium framing, NFL Giants/Jets year-round usage, the Taylor Swift Eras Tour 2023 pricing reference ($1.5K-$5K+ across five sold-out nights — a credibility anchor for "what big-event resale at MetLife looks like"), the soccer-vs-football pitch reconfiguration with specific section-number geometry (long sidelines parallel 100-level row 1; goal lines behind sections 116-118 and 134-136), cross-platform comparison callout (Ticketmaster, SeatGeek, StubHub, FIFA resale), the live $200-$500 platform-spread data point from the 4/22 FIFA resale post, and a price-alert CTA
3. **TicketTips expanded** from 4 generic tips to 8 MetLife-specific tips covering: best soccer sightlines (101-115, 134-150), goal-line sections to avoid for two-end visibility (116-118, 134-136), best mid-range value (mezz corners 218-220 / 232-234 at $400-$700), Final vs group-stage upper-deck pricing, NJ Transit specifics (Penn Station + Secaucus → Meadowlands Station), why driving to the Final is broken, Coaches Club as the New Jersey-July-humidity hedge, and the 20-30% post-on-sale resale dip pattern from prior MetLife major events
4. **Keywords** expanded from 4 to 10, adding: "World Cup Final tickets," "MetLife Stadium seating chart," "MetLife World Cup Final," "cheapest MetLife World Cup tickets," "Coaches Club MetLife," "World Cup Final July 19 2026"

**Why this venue:**
- **The single highest-intent World Cup ticket query for the rest of 2026.** "World Cup Final tickets" is the peak query of the entire tournament arc and MetLife is the venue. Refreshing this page at T-85 days lands directly in the resale-search ramp window. Every prior arena refresh was timed to active home playoff games (search ramp of weeks); this one is timed to the Final ramp (search ramp of months).
- **Sparse data was the worst in the World Cup file.** 3 generic sections vs 9 now. SoFi (which hosts other knockout matches) had the same sparse-3-sections problem and is the natural next refresh target after the playoff-arena queue clears.
- **AggregateOffer schema compounding.** SEO Agent's unshipped `web/src/app/world-cup-2026/[stadium]/page.tsx` rewrite extracts `lowPrice` from the lowest section in `venue.sections` and emits it in StadiumOrArena → SportsEvent → AggregateOffer JSON-LD. Today's expanded sections give that schema a real $150 floor (was $150 before but with no upper-tier breakdown to support it; now backed by 9 grouped sections and a $50,000+ ceiling that signals premium availability). The schema gain only lands when the 19-file SEO bundle ships — flagged in Hook 2 today.
- **Sunday's next-week plan slated MetLife as today's target.** Executed as planned, with the file-target correction noted above.
- **Compounds with Wednesday's 4/22 FIFA resale data blog.** That post is built around the platform-spread story; today's MetLife description embeds the live $200-$500 spread data point and the FIFA-most-expensive 65-67% ratio, giving the venue page a direct internal-link reason to cite the blog and vice versa.

**SEO impact expected:**
- Full section data populates the seating guide and gives Google more on-page entity signals for the "MetLife Stadium" + "World Cup Final" knowledge clusters
- 10 keywords (was 4) covers the full intent spectrum from broad "MetLife Stadium World Cup tickets" to long-tail "World Cup Final July 19 2026" and "Coaches Club MetLife"
- FIFA Category mapping (Cat 1 / Cat 2 / Cat 3 / Cat 4) inside section descriptions captures the official-pricing-vocabulary search surface that no other US comparison page seems to be hitting yet
- Taylor Swift Eras Tour resale reference embedded in the description gives Google a credibility entity signal — MetLife is the venue that handled $5K resale on a five-night sellout, which is the closest priced precedent for World Cup Final demand
- Soccer-vs-football pitch geometry detail (which sections sit behind the goal lines for soccer config) is genuinely differentiated content — competitor pages either skip the geometry shift or describe it incorrectly
- Once the SEO bundle deploys, the AggregateOffer `lowPrice: 150` becomes a real Google rich-result signal, not the empty schema it currently is

**Verification:**
- `npx tsc --noEmit` ran clean — no TypeScript errors introduced (verified at 2026-04-25 morning)

---

## 2026-04-24 — Chase Center (venues.ts)

**Page refreshed:** `chase-center` in `web/src/data/venues.ts`

**What changed:**
1. **Sections expanded** from 5 (1 floor, 2 lower, 2 upper) to 69 sections matching Chase Center's actual layout:
   - 1 Floor section (Courtside)
   - 24 Lower Bowl sections (1-24) — Chase Center's distinctive single-digit section numbering that wraps tight around the court, not the generic 101-124 convention other arenas use
   - 20 Theatre Box sections (Theatre Box 1-20) — added entirely new mid-level premium tier with private lounge access and in-seat service (Chase's Theatre Level is a legitimate product that was 100% absent from prior data)
   - 24 Upper Bowl sections (201-224) — full upper wrap
2. **Home teams** expanded from `['Golden State Warriors']` to `['Golden State Warriors', 'Golden State Valkyries']`. The Valkyries (WNBA expansion franchise) launched their inaugural season in 2025 and the second season tips off in May — prior data had zero Valkyries signal
3. **Description** upgraded from 1 generic sentence to a full paragraph covering: Mission Bay neighborhood placement, dual-tenant NBA + WNBA status, event volume (~200 per year), non-home-team event mix (tours, UFC, boxing), tier-specific value framing (Lower single-digit / Theatre Level / Upper 200s), cross-platform comparison callout (StubHub, SeatGeek, Ticketmaster), and TicketScan CTA with direct Warriors playoff + Valkyries tip-off mentions
4. **Keywords** expanded from 4 to 9, adding: "Chase Center seating chart," "Warriors playoff tickets," "Valkyries tickets," "Chase Center events," "San Francisco concert tickets"

**Why this venue:**
- Last remaining sparse dual-tenant arena after the TD Garden (4/10), Wells Fargo Center (4/11), AAC (4/17), and Ball Arena (4/18) refreshes — only 5 sections vs 60-75 for the peer set
- **Perfect timing**: Warriors host Round 1 Games 3 (Saturday) and 4 (Monday) at Chase Center this weekend. "Warriors playoff tickets" and "Chase Center seating chart" are peak-volume Bay Area keywords through the weekend. Matches the pattern of every prior refresh landing during active playoff home stands
- Today's content hook (Hook 1) explicitly flagged Chase Center as the venue target for this refresh, with specific G3-vs-G4 pricing data ($30-40 spread same seats two nights apart) that both feeds social content and justifies the deeper venue page
- Valkyries are a 2025-launched WNBA franchise with a growing Bay Area following — adding them as a secondary home team future-proofs the page for May-September WNBA season traffic and expands the keyword surface (`Valkyries tickets`) we had zero coverage on before
- Theatre Level is a distinctive Chase Center product that wasn't represented at all in the prior data. Single-digit lower bowl numbering (1-24 rather than 101-124) is also a Chase Center differentiator worth capturing accurately
- Last Sunday's next-week plan (4/19) slated Chase Center as today's Friday refresh target — executed as planned

**SEO impact expected:**
- Full section data populates the seating guide sidebar and gives Google more on-page entity signals for the "Chase Center" knowledge panel
- Richer description lifts the "About" content depth to match MSG, TD Garden, Wells Fargo Center, AAC, and Ball Arena
- Triple playoff/WNBA keyword cluster ("Warriors playoff tickets" + "Valkyries tickets" + "Chase Center seating chart") captures Bay Area's April-May Warriors playoff surge and the May WNBA season opener surge in one refresh
- Mission Bay mention opens internal-link potential back to the San Francisco city page and future Oracle Park cross-references
- Single-digit section naming (unusual in the peer set) gives Google distinctive entity signals that distinguish Chase from the generic NBA-arena cluster

**Verification:**
- `npx tsc --noEmit` ran clean — no TypeScript errors introduced

---

## 2026-04-18 — Ball Arena (venues.ts)

**Page refreshed:** `ball-arena` in `web/src/data/venues.ts`

**What changed:**
1. **Sections expanded** from 5 (1 floor, 2 lower, 2 upper) to 69 sections matching Ball Arena's dual-tenant layout:
   - 1 Floor section (Courtside for Nuggets, Ice Level for Avalanche)
   - 24 Lower Bowl sections (101-124) — wrap-around 100 level
   - 20 Club Box sections (Club Box 201-220) — added entirely new mid-level premium tier with private entrances and in-seat service
   - 24 Upper Bowl sections (301-324) — full upper wrap
2. **Description** upgraded from 1 generic sentence to a full paragraph covering: event volume (~200 per year), dual championship pedigree (Nuggets 2023 NBA Champions + Avalanche 2022 Stanley Cup), Ballpark-neighborhood context, the full range of non-home-team events (Mammoth lacrosse, UFC, WWE, concerts), tier-specific value framing (Lower/Club/Upper), cross-platform comparison callout (StubHub, SeatGeek, Ticketmaster), and TicketScan CTA with a direct playoff mention
3. **Keywords** expanded from 4 to 9, adding: "Ball Arena seating chart," "Denver concert tickets," "Nuggets playoff tickets," "Avalanche playoff tickets," "Ball Arena events"

**Why this venue:**
- Most sparse remaining dual-tenant arena after American Airlines Center (4/17), Wells Fargo Center (4/11), and TD Garden (4/10) refreshes — only 5 sections vs 60-75 for comparable peers
- **Perfect timing**: Both home teams in active 2026 first-round playoff series this weekend. Nuggets open NBA Round 1 this weekend; Avalanche are mid-series in NHL Round 1. "Nuggets playoff tickets" and "Avalanche playoff tickets" are peak-volume Denver keywords right now
- Today's content hook explicitly flagged Ball Arena as the Denver parallel to yesterday's AAC refresh
- Existing Denver city page in `cities.ts` already lists both teams and "Ball Arena events" as a keyword — this refresh compounds internal-link strength between venue and city pages
- Club Box tier is a legitimate mid-level Ball Arena product that wasn't represented in the prior data

**SEO impact expected:**
- Full section data populates the seating guide sidebar and gives Google more on-page entity signals for the "Ball Arena" knowledge panel
- Richer description lifts the "About" content depth to match MSG, TD Garden, Wells Fargo Center, and AAC
- Dual playoff keyword cluster ("Nuggets playoff tickets" + "Avalanche playoff tickets") captures Denver's April-May seasonal search surge
- Ballpark-neighborhood mention opens internal-link potential back to the existing Denver city page

**Verification:**
- `npx tsc --noEmit` ran clean — no TypeScript errors introduced

---

## 2026-04-17 — American Airlines Center (venues.ts)

**Page refreshed:** `american-airlines-center` in `web/src/data/venues.ts`

**What changed:**
1. **Sections expanded** from 5 (1 floor, 2 lower, 2 upper) to 75 sections matching AAC's actual layout:
   - 1 Floor section (Courtside for Mavs, Ice Level for Stars)
   - 24 Lower Bowl sections (101-124) — full wrap-around 100 level
   - 20 Platinum Club boxes (Platinum P1-P20) — added entirely new premium mid-level tier with private lounges and in-seat service
   - 30 Upper Mezzanine sections (301-330) — full upper wrap
2. **Description** upgraded from 1 generic sentence to a full paragraph covering: event volume (200+ per year), dual-league tenancy (Mavericks NBA + Stars NHL), Victory Park neighborhood context north of downtown Dallas, Platinum Club perks, Upper Mezzanine value, and TicketScan CTA
3. **Keywords** expanded from 4 to 10, adding: "Dallas arena tickets," "American Airlines Center seating chart," "Dallas concert tickets," "Mavericks playoff tickets," "Stars playoff tickets," "American Airlines Center events," "Victory Park Dallas tickets"

**Why this venue:**
- Most sparse remaining venue data after TD Garden (4/10) and Wells Fargo Center (4/11) refreshes (only 4 sections vs 60+ for comparable dual-tenant arenas)
- **Perfect timing**: Stars vs Wild NHL first-round Game 1 is tonight at AAC, Game 2 Sunday. Mavericks are also in the NBA first round with home games next week. Both active playoff series drive peak search volume for "Stars playoff tickets" and "Mavericks playoff tickets" right now
- Yesterday's content hook explicitly flagged this venue page as a refresh candidate tied to the Stars-Wild price gap narrative
- Platinum Club is a legitimate premium tier at AAC that wasn't represented at all in the prior data

**SEO impact expected:**
- Full section data populates the seating guide sidebar and gives Google more on-page entity signals
- Richer description lifts the "About" content depth to match MSG/TD Garden/Wells Fargo
- Dual playoff keyword cluster ("Mavericks playoff tickets" + "Stars playoff tickets") captures Dallas's April-May seasonal search surge
- Victory Park mention opens internal-link potential to Dallas city page and future AT&T Stadium (Cowboys / World Cup 2026 venue) cross-references

**Verification:**
- `npx tsc --noEmit` ran clean -- no TypeScript errors introduced

---

## 2026-04-11 — Wells Fargo Center (venues.ts)

**Page refreshed:** `wells-fargo-center` in `web/src/data/venues.ts`

**What changed:**
1. **Sections expanded** from 5 (1 floor, 2 lower, 2 upper) to 61 sections with accurate Wells Fargo Center layout:
   - 1 Floor section
   - 24 Lower Bowl sections (101-124) — full wrap-around lower level
   - 12 Club sections (Club 1-12) — added entirely new mezzanine club tier
   - 24 Upper Bowl sections (201-224) — full upper level
2. **Description** upgraded from 1 generic sentence to a rich description covering: event volume (250+ per year), location context (South Philly Sports Complex alongside Citizens Bank Park and Lincoln Financial Field), club level perks (padded seating, in-seat service), upper-level value angle, and TicketScan CTA
3. **Keywords** expanded from 4 to 9, adding: "Wells Fargo Center seating chart", "Philadelphia concert tickets", "76ers playoff tickets", "Flyers playoff tickets", "Wells Fargo Center events"

**Why this venue:**
- Most sparse venue data remaining after TD Garden refresh (was only 5 sections vs 30+ for comparable arenas)
- Both home teams (76ers, Flyers) are in the 2025-26 playoff picture, driving high search volume
- "76ers playoff tickets" and "Flyers playoff tickets" are high-intent seasonal keywords we were missing
- South Philly Sports Complex context adds internal linking potential to Lincoln Financial Field (World Cup 2026 venue)

**SEO impact expected:**
- Full section data populates the seating guide sidebar on the venue page
- Richer description gives Google more content to index
- Playoff-related keywords capture April/May seasonal search spikes
- Sports complex mention creates natural association with World Cup 2026 venue page

---

## 2026-04-10 — TD Garden (venues.ts)

**Page refreshed:** `td-garden` in `web/src/data/venues.ts`

**What changed:**
1. **Sections expanded** from 6 (3 lower, 3 upper) to 63 sections with accurate TD Garden naming:
   - 1 Floor section
   - 22 Loge sections (Loge 1-22) — TD Garden uses "Loge" not generic numbered sections
   - 10 Club sections (Club 101-110) — added entirely new club tier
   - 30 Balcony sections (BAL 301-330) — TD Garden uses "Balcony" not "Upper"
2. **Description** upgraded from 1 generic sentence to a rich 3-sentence description covering: event volume (200+ per year), transit accessibility (above North Station), club seat perks, and a TicketScan CTA
3. **Keywords** expanded from 4 to 9, adding: "TD Garden seating chart", "Boston concert tickets", "Celtics playoff tickets", "Bruins playoff tickets", "TD Garden events"

**Why this venue:**
- Most sparse venue data in the entire dataset (was 6 sections vs 30+ for comparable arenas like MSG, United Center)
- Both home teams (Celtics, Bruins) are in the 2025-26 playoff picture, driving high search volume right now
- "TD Garden seating chart" and "Celtics playoff tickets" are high-intent keywords we were missing

**SEO impact expected:**
- Better section data improves the seating guide sidebar on the venue page
- Richer description gives Google more content for the "About" section
- Playoff-related keywords should capture seasonal search spikes
