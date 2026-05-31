# Content Calendar — Week of June 1 – 7, 2026

## This Week's Audit (May 25 – 31)

### What shipped

| Date | Type | Title/Action | Status |
|------|------|--------------|--------|
| Mon May 25 | Big-idea blog | "The Three Cheapest US World Cup Venues: Why Levi's, Gillette, and Lincoln Financial Are Where the Group-Stage Bargains Live" | **Drafted, NOT published** (`featured: true`) |
| Tue May 26 | Tactical blog | "Harry Styles at MSG: Seven Nights in Fifteen Days. Here's the Per-Night Pricing Map." | **Drafted, NOT published** |
| Wed May 27 | News blog | "World Cup 2026 at T-15 Days: The Cheap Seats Aren't Moving. The Expensive Ones Are the Bargain." | **Drafted, NOT published** |
| Thu May 28 | Comparison blog | "2026 NBA Finals vs Stanley Cup Finals: Which Championship Series Is Actually the Better Ticket Value?" | **Drafted, NOT published** |
| Fri May 29 | Venue refresh | NRG Stadium — retractable roof angle, Group E twice (M9/M57), METRORail transit-positive, R16-7 | **Committed (`0e3c4ce`)** |
| Sat May 30 | Venue refresh | Arrowhead Stadium — Guinness loudest-stadium record, Group G twice (M13/M61), I-70 transit-honesty, R16-8 primetime | **Committed (`b9d8002`)** |
| Sun May 31 | Audit + plan + content-hook | This document + content-hook + cross-agent summary | **In progress** |

### What worked

- **4/4 blog drafts shipped Mon–Thu for the FIFTH consecutive week.** Mon `2026-05-25-three-cheapest-us-world-cup-2026-venues-group-stage.md` (big-idea, the no-knockout-premium framework on a structurally-final 3-venue cluster, 1,961 words), Tue `2026-05-26-harry-styles-msg-seven-night-residency-pricing-playbook.md` (tactical per-night pricing-curve case study converting the cross-user concentration signal, 1,234 words), Wed `2026-05-27-world-cup-2026-t-15-days-category-pricing-stability.md` (news/timely — the "cheap seats don't move, expensive seats do" category-divergence finding, 1,340 words), Thu `2026-05-28-nba-finals-vs-stanley-cup-finals-2026-ticket-value-comparison.md` (cross-league comparison, the strongest social-shareable format, 1,341 words). **The Wed news piece pivoted from the placeholder "T-15 pricing curve OR Conf Finals Game 6/7" to a sharper category-pricing-stability angle** — a better, more proprietary thesis than either placeholder, and exactly the kind of editorial upgrade the Tuesday-evening decision rule exists to allow.
- **2/2 refreshes shipped Fri + Sat with the SIXTH consecutive Friday/Saturday pair-slot pattern.** NRG Stadium (Fri 5/29, `0e3c4ce`) and Arrowhead Stadium (Sat 5/30, `b9d8002`) — **the US World Cup venue arc is now COMPLETE: all 11 US WC venues have full, Cat-by-Cat price-guide pages, 12 days before kickoff.** Both refreshes ran the canonical Forward Fix v2 order-of-operations with the SEO heads-up filed as session-artifact-1 (`seo-requests/2026-05-29-content-data-touch.md`, `2026-05-30-content-data-touch.md`). Six consecutive Fri/Sat pair-slots makes sparse-venue refresh the single most reliable production lever in the program.
- **Step 0 gate proved itself at the cross-Sunday boundary it was designed for.** The pre-composition Step 0 grep gate (added 5/24) ran this morning BEFORE this plan was composed and caught BOTH next-week refresh targets off-spec: **BMO Field 6→3 matches, BC Place 7→4 matches** (both off by three vs last week's forward-look memory). This is the **first cross-Sunday application** of the gate — last week's catches (NRG, Arrowhead) were same-session corrections of that same morning's composition; this week the gate caught errors that had been sitting in the forward-look document for seven days. **The gate now demonstrably closes the prior-plan-memory drift that produced every prior off-spec refresh brief.** Corrected match data flows into the Friday + Saturday briefs below.
- **Frontmatter discipline: 4/4 clean.** All four drafts validated this audit: slugs URL-safe, excerpts 163/189/173/166 chars (all under the 200 limit), categories correct (`guides`/`tips`/`news`/`comparisons` — full rotation), no unescaped backticks or `${}` in bodies. **The `featured: true` flag on the Monday flagship is the only featured placement of the week** — correct, as the "Three Cheapest Venues" piece is the WC content-cluster anchor.
- **Honest `Content refresh:` commit prefix held NINE consecutive venue refreshes.** Adds NRG (`0e3c4ce`) and Arrowhead (`b9d8002`) to the streak. **Twelve consecutive clean marketing-output commits** since the Day-17 channel-leak precedent. Freeze-period source-commit hygiene remains the strongest discipline metric in the program.
- **Cross-agent artifact density at a high.** This week filed: `harry-styles-msg-canonical` (5/26), `wc-category-pricing-canonical` (5/27), a `wc-lowprice-erratum` (5/27 — caught and corrected a shipped low-price error), two Forward Fix v2 `content-data-touch` files (5/29, 5/30), and a `tickets-dedup-backend-followup` (5/29). The erratum + canonical pairing shows the Step-0-style fact-gate discipline now extends past venue match-counts into on-page pricing claims.

### What didn't work / gaps

- **Publishing velocity = 0 (Day 54, +7 days vs last week).** Last published post: 2026-04-07 (`c0dcf5a`). Today: 2026-05-31. **Fifty-four days.** Backlog at **27 drafts** (4 new Mon–Thu + 23 pre-existing). **Seventeenth consecutive Sunday flagging the publish bottleneck.** Drafting:publishing ratio holds at Δ +4 drafts/week : 0 publishes/week for the **eleventh consecutive week.**
- **Realized loss-to-decay converted: the 5/21 Memorial Day Weekend listicle is now a CONFIRMED loss (#3).** Last week it was "in motion" with the window closing Monday 5/25 evening; with zero publishes since, the window closed unpublished. **Realized losses now 3 of 27 (11.1%):** 4/14 NBA Round-1 (SHELVED), 5/07 All-In Pricing FTC-anniversary (forfeited), 5/21 Memorial Day Weekend (forfeited). The underlying listicle content is partially salvageable as an evergreen "summer events worth tracking" reframe, but the holiday-weekend placement is gone.
- **World Cup draft freshen-burden compounding fast as kickoff approaches.** Three WC backlog drafts now carry hard date anchors that decay daily: 4/15 seat-assignments ("under three weeks" → now under two weeks), 4/22 FIFA-resale ("three weeks of data" → now 40+ days), 4/29 general-sale ("Today is April 29… 43 days" → fully stale, needs the date-anchored opener dropped entirely). **At T-11 days, every day unpublished raises the freshen cost AND shrinks the addressable pre-tournament window.** These were the WC T-15 triple-publish candidates in last week's plan; that window has now passed.
- **`archived/` folder still doesn't exist.** Thirteenth consecutive week. 4/8 (NBA/NHL Round-1) and 4/14 (NBA Round-1 compare) need to land in archive; ~60 seconds of `mkdir` + `git mv`.
- **`extractLowestPrice` patch — Day 21 unabsorbed, now EIGHT stadium pages affected** (AT&T, Mercedes-Benz, Lumen, Levi's, Gillette, Lincoln Financial, + NRG and Arrowhead shipped into it this week). The 3-line patch filed 5/10 in `seo-requests/2026-05-10-seo-replies-bundle.md` §Reply 1 remains unabsorbed. With the US venue arc now complete, the bug's blast radius is also complete — every US WC stadium page is affected. ~90-min Lead Architect session clears the publish queue + this patch + the bundle merge in one window.
- **CRO Day 45 of 100% null `target_price`.** No movement. The 5/12 + 5/19 watchlist content pair remains shipped at the content layer; the UI fix is upstream.
- **Email cron Day 54 dead.** Drip queue continues to accumulate net-new triggers each 10:00 UTC tick against a non-firing cron.

### Copy review of queued drafts (27 unpublished)

**This week's 4 drafts (reviewed — all 4 ready, frontmatter clean, light notes only):**

- `2026-05-25-three-cheapest-us-world-cup-2026-venues-group-stage.md` — Frontmatter clean (`featured: true`, excerpt 163 chars). Voice strong; the $10,990-Final-vs-$80-floor cold open is the best lead of the four. **Note:** ran to 1,961 words vs the planned 1,000–1,200 — long, but it carries two data tables and the no-knockout-premium framework needs the room; no cut required. **Verdict: publish-ready, no edits. Strongest window: now through WC kickoff (June 11) — peak relevance every day of the pre-tournament window. This is the Monday flagship + the cross-link hub for the entire WC content cluster; publish FIRST when bandwidth opens.**
- `2026-05-26-harry-styles-msg-seven-night-residency-pricing-playbook.md` — Frontmatter clean (excerpt 189 chars — close to the 200 limit but valid). Per-night pricing-curve table present. **Verdict: publish-ready, no edits. Fully evergreen (residency runs Aug 26 – Sep 9). Strongest pair-publish: alongside the 5/11 Stadium Tour Three-Night Residencies framework piece — framework + live-demand-signal case study.**
- `2026-05-27-world-cup-2026-t-15-days-category-pricing-stability.md` — Frontmatter clean (excerpt 173 chars). **Mild freshen call:** title and lead anchor "T-15 days"; today is T-11. The category-divergence thesis (cheap seats static, expensive seats repricing) is fully evergreen and unaffected, but the T-15 number is now 4 days stale. **~1-line freshen** to "T-11 days" (or reframe to "the final two weeks") on publish. **Verdict: publish within the next few days with the T-number freshen, OR reframe the title to drop the specific day-count for a fully-evergreen WC-pricing-psychology piece. Strongest window: now through T-7 (June 4).**
- `2026-05-28-nba-finals-vs-stanley-cup-finals-2026-ticket-value-comparison.md` — Frontmatter clean (excerpt 166 chars). **Time-sensitive:** both Finals tip off ~June 4–7; this piece is at peak relevance THIS WEEK and decays sharply once Game 1 of each series fires. **Verdict: publish-ready, no edits. Highest time-urgency of the four — publish Mon/Tue 6/1–6/2 to capture the full pre-Finals pricing-decision window. Pairs with the 5/18 + 5/20 + 4/28 playoff-pricing cluster.**

**Stylistic note across all four (non-blocking):** the excerpts and leads lean on em-dashes (3–4 per excerpt). On-brand for the established TicketScan voice, but worth watching for AI-tell over-patterning if this compounds across the cluster — a future copy pass could vary punctuation rhythm. No edits required this week.

**Pre-existing backlog (23 drafts) — decay/freshen status as of T-11:**

- **ARCHIVE (2):** `2026-04-08-nba-nhl-playoff-tickets-2026-buying-guide.md` (54d) and `2026-04-14-nba-playoff-tickets-compare-prices.md` (47d, SHELVED) → both to `archived/` once the folder exists. Thirteenth-week recommendation.
- **WC — HIGH freshen-burden, publish ASAP (3):** `2026-04-15-world-cup-2026-seat-assignments-bait-switch.md` (~2-line freshen), `2026-04-22-fifa-resale-three-weeks-data-world-cup-2026.md` (~3-line freshen + dataset count update), `2026-04-29-world-cup-2026-general-sale-closing-april-2026.md` (~5-line freshen, drop the date-anchored opener). **All three decay daily until kickoff — publish this week or accept partial forfeit.**
- **Evergreen comparison series, publish-ready (4):** `2026-04-16-best-ticket-comparison-sites-2026.md` (the foundation `/compare` graph seed — publish FIRST among these), `2026-04-21-how-to-compare-ticket-prices-30-seconds.md`, `2026-04-23-ticketmaster-vs-seatgeek-fees-2026.md`, `2026-04-30-stubhub-vs-vivid-seats-2026.md`. No edits required.
- **Playoff/Finals timely, publish-ready (1):** `2026-04-28-same-day-nba-playoff-tickets-6-hour-playbook.md` — Finals start ~June 4; publish alongside the 5/28 NBA-vs-NHL piece.
- **Evergreen tactical/venue, no edits (10):** `2026-04-27-summer-concert-tour` (minor seasonal freshen), `2026-05-04-cubs-vs-reds-wrigley` (~2-line generalize), `2026-05-05-first-price-drop-alert-walkthrough`, `2026-05-06-bruno-mars-romantic-tour`, `2026-05-07-all-in-pricing-junk-fees` (forfeited anniversary, evergreen body, no featured), `2026-05-11-stadium-tour-three-night-residencies`, `2026-05-12-smart-target-prices-floor-math`, `2026-05-13-yankees-vs-red-sox` (~1-line freshen), `2026-05-14-mlb-rivalry-week-tier-guide`, `2026-05-18-conference-finals-pricing-window`. Publish anytime in next 14–30 days; pair-publish per the established Wed→Thu / framework→case-study structures.
- **Conf Finals timely (2):** `2026-05-19-three-minute-watchlist-audit` and `2026-05-20-conference-finals-game-2-cross-platform` — both now reframe-to-evergreen as the Conf Finals series have largely resolved; the 5/20 piece needs a 2-line lead reframe from "Game 2 is two nights away" to a retrospective frame.

**Highest-leverage publish order if Lead Architect bandwidth opens this week:**
1. **`2026-04-16-best-ticket-comparison-sites`** — foundation `/compare` graph seed for every comparison cross-link.
2. **`2026-05-25-three-cheapest-venues`** (Mon flagship) + **`2026-05-28-nba-vs-stanley-cup`** (highest time-urgency, Finals tip ~June 4).
3. **WC T-11 triple:** 4/15 + 4/22 + 4/29 (with freshens) — decaying daily until kickoff.
4. **`2026-05-27-WC-T-15`** (with T-number freshen) + **`2026-05-26-harry-styles`** + the 5/11 residency framework as a pair.

### Cross-Agent output review

- **SEO Agent (Agent 2):** Today's daily check confirms comprehensive, well-formed JSON-LD on all 12 templates — no schema defects. Filed `2026-05-31-keyword-opportunities.md` with three asks: (1) venue `geo`+`streetAddress` enrichment in `venues.ts`, (2) per-stadium FAQ blocks on WC pages to unlock `FAQPage` schema, (3) long-tail fee/resale FAQ additions to `/faq`. **Ask 2 is absorbed into next week's BMO Field + BC Place refreshes** (FAQ blocks become a refresh requirement — see plan below). `extractLowestPrice` patch now Day 21, all 8 US WC stadium pages affected. `seo-bundle-watch.md` freeze Day 39.
- **Email Agent (Agent 5):** Cron Day 54 dead. The "Cheapest Get-In at All 11 US WC Venues" PDF lead magnet is ready to gate now that the US arc is complete (flagged in today's content-hook); a Canadian-venue v2 can follow the BMO/BC Place refreshes.
- **CRO Agent:** Day 45 of 100% null `target_price`. Content-layer mitigation (5/12 + 5/19 + 5/05 trio) shipped; UI fix upstream.
- **Analytics Agent:** Friday 5/29 weekly ran (`09b08e7`). Funnel halves continue to diverge; WC pre-tournament window is the single largest organic-demand surface for the next 11 days — all four next-week blog slots are WC-weighted in response.
- **Social Agent:** Daily outputs ran through the week. The completed US venue arc gives 11 stadium pages + the new "all-venues price map" Mon piece as a high-share carousel/thread opportunity. Instagram template-rotation question remains open (now 8th reporting week).
- **Paid Ads Agent:** Continue holding. Sealed-funnel CAC math unchanged.

---

## Next Week's Blog Plan (June 1 – 7) — WC T-10 to T-4 week

The opener is **June 11**. This week sits at T-10 → T-4, the highest organic-search-volume World Cup window of the entire campaign. **All four blog slots are WC-weighted**, with the Wed slot holding an NBA/NHL Finals option via the standing decision rule. NBA Finals + Stanley Cup Finals both tip ~June 4–7, overlapping this week.

### Monday, June 1 (WC T-10) — Big-idea blog: The Complete US World Cup Venue Price Map

**Title:** "All 11 US World Cup 2026 Venues, Ranked by Cheapest Get-In: The Complete Price Map"
**Slug:** `all-11-us-world-cup-2026-venues-ranked-cheapest-get-in`
**Category:** `guides` (evergreen capstone on a now-complete, structurally-final dataset)
**Angle:** With the US venue arc complete as of 5/30 (Arrowhead was the last), TicketScan is the only platform with a full, honest, Cat-by-Cat price map of every US WC venue. This is the capstone ranking piece the entire venue-refresh program has been building toward — the Mon 5/25 "Three Cheapest" piece covered the bargain tier; this ranks **all 11** by Cat-4 floor (Levi's $80 → … → NRG $135), and pairs each with its un-glamorous truth (no rail at Arrowhead; worst transit at Levi's; best at Lincoln Financial via SEPTA; only retractable roof at NRG). The honest-broker framing is the moat: a single table no competitor blog has built.
**Why now:** T-10. Peak pre-tournament "where should I go / what's cheapest" search intent. Doubles as the on-site companion to the gated PDF lead magnet (flagged to Email Agent). Cross-links all 11 venue pages + the 5/25 flagship for a reciprocal cluster.
**Target keywords:** "cheapest US World Cup 2026 venue," "World Cup 2026 stadiums ranked," "cheapest World Cup tickets by venue," "which World Cup venue is cheapest," "World Cup 2026 venue price comparison"
**Length:** 1,100–1,300 words. Three H2s (the ranking, the transit/weather honesty layer, the buyer playbook). Tables: the master 11-venue table (Cat-4 floor / match count / transit grade / roof), and a top-3-vs-bottom-3 get-in spread.
**CTA:** "Compare prices at any US World Cup venue on TicketScan" + "Set a free price alert on the match you want."

### Tuesday, June 2 (WC T-9) — Tactical blog: The Last-10-Days Buying Playbook

**Title:** "The Last-10-Days World Cup Buying Playbook: What to Do This Week Before Prices Lock"
**Slug:** `world-cup-2026-last-10-days-buying-playbook`
**Category:** `tips`
**Angle:** Converts Wednesday's category-divergence finding (cheap seats static, expensive seats repricing) into a day-by-day action plan for the final stretch. The thesis: at T-9, the Cat-4 floor is a buy-or-lose (it's not dropping), while Cat-1/2 buyers should hold and watch for resale softening. A concrete checklist — set alerts now, decide your category, know FIFA-direct vs resale tradeoffs, watch the Thursday FIFA inventory refresh.
**Why now:** T-9. The "what do I actually do this week" companion to Monday's map. Direct CRO support (drives alert/watchlist setup at the highest-intent moment of the year).
**Target keywords:** "when to buy World Cup 2026 tickets," "World Cup tickets last minute," "should I wait to buy World Cup tickets," "World Cup ticket buying tips 2026"
**Length:** 700–900 words. Two H2s + one H3 checklist callout.
**CTA:** "Set price alerts across Ticketmaster, SeatGeek, and StubHub in one sweep on TicketScan."

### Wednesday, June 3 (WC T-8 / Finals Game 1) — News/timely blog: decision rule

**Title (placeholder — Tuesday-evening decision):** "World Cup 2026 at T-8: The Resale Snapshot" **OR** "NBA Finals Game 1 Pricing: The Cross-Platform Spread, Section by Section"
**Slug (placeholder):** `world-cup-2026-t-8-resale-snapshot` OR `nba-finals-game-1-2026-cross-platform-pricing`
**Category:** `news`
**Decision rule (Tue 6/2, 06:00 ET):** If NBA Finals Game 1 has fired or is imminent (within 24h) AND Google Trends shows "nba finals tickets" > "world cup 2026 tickets," run the Finals Game 1 cross-platform piece (it captures the live single-event variance angle the 5/28 comparison piece set up). Otherwise default to the WC T-8 resale snapshot (FIFA-direct inventory thinning vs resale-platform dominance inside the final week).
**Why now:** Wed is the structurally highest-search-volume day of the week, sitting at the intersection of WC T-8 and the Finals tip-off window.
**Target keywords (WC):** "World Cup 2026 resale prices," "World Cup tickets one week out," "FIFA resale vs StubHub." **(Finals):** "NBA Finals 2026 Game 1 tickets," "NBA Finals cross-platform pricing," "cheapest NBA Finals Game 1 tickets."
**Length:** 700–900 words. Two H2s + one H3 callout.
**CTA:** context-matched alert/compare CTA.

### Thursday, June 4 (WC T-7) — Comparison blog: Is FIFA Actually Cheaper?

**Title:** "FIFA-Direct vs Resale Platforms at T-7: Is Buying Straight From FIFA Actually the Cheapest?"
**Slug:** `fifa-direct-vs-resale-platforms-t-7-world-cup-2026`
**Category:** `comparisons`
**Angle:** The single highest-intent WC comparison question, answered with a T-7 dataset. Head-to-head: FIFA's official platform vs Ticketmaster/SeatGeek/StubHub resale, by category, inside the final week. The honest finding (set up by Wednesday's category piece): FIFA-direct is cheapest for Cat-4 floor seats that haven't moved, but resale undercuts FIFA on the over-priced Cat-1/2 inventory as sellers panic near kickoff. The cross-platform data is the structural advantage no single-source competitor can replicate.
**Why now:** T-7. Peak "where do I actually buy" decision moment. Strongest social-shareable format. Caps the WC content week.
**Target keywords:** "is FIFA cheaper than StubHub," "FIFA direct vs resale World Cup," "where to buy World Cup 2026 tickets cheapest," "FIFA official vs resale prices"
**Length:** 900–1,100 words. Three H2s + a per-category comparison table.
**CTA:** "Compare FIFA-direct and resale prices side by side on TicketScan."

### Friday, June 5 — Venue refresh: BMO Field, Toronto (FIRST non-US WC venue)

**File:** `web/src/data/worldcup.ts` — `bmo-field` entry

**Step 0 verified clean against `worldcup.ts` THIS SUNDAY MORNING (pre-composition):** BMO Field = **3 matches, ALL Group Stage** — **M12 Sun 6/14 19:00 ET Group F (Canada vs TBD), M31 Fri 6/19 22:00 ET Group D, M60 Sat 6/27 20:00 ET Group F.** **No knockout matches.** Last Sunday's forward-look stated "6 matches" — off by three; the gate caught it before this composition. **BMO Field is the first non-US PURE-Group-Stage WC venue** — it extends the no-knockout-premium bargain framework (Levi's/Gillette/Lincoln Financial) across the border. Group F plays twice here (M12 + M60) — the same single-group-twice supporters pattern seen at NRG/Arrowhead/Lincoln Financial.

**Expansion target:** generic sections → 8–10 specific sections with FIFA Cat 1–4 mapping; 4 → 7–8 ticketTips; 4 → 10–12 keywords; thin description → rich paragraph. **NEW this week: add a 4–6 item FAQ block** (parking, getting there, best seats, cheapest get-in, weather) to satisfy SEO Agent Ask 2 — this is what unlocks `FAQPage` schema on the WC stadium template.

**Differentiated content angles (uncontested at depth):**
- **Canada's only soccer-specific WC stadium** — BMO Field was built for soccer (Toronto FC's home), being expanded for the WC. Soccer-first geometry (vs the football-config honesty needed at NRG/Arrowhead/AT&T) is a genuine sightline-quality positive.
- **First non-US pure-Group-Stage bargain venue** — the cross-border extension of the Mon 5/25 framework. Cat-4 floor here is a structural bargain candidate; no knockout-premium spillover.
- **Cross-border CAD↔USD resale-pricing variance** — first venue where the FIFA resale price is quoted in CAD; the USD-buyer's effective price swings with FX. Genuinely ownable consumer-advocate angle no competitor has surfaced.
- **Canada hosts on home soil** — M12 features Canada (Group F); home-nation demand premium on that specific match vs the two non-host matches.
- **Toronto transit** — TTC streetcar/GO Transit access to Exhibition Place; compare honestly to the SEPTA/METRORail transit-positive leaders and the Levi's/Arrowhead transit-negatives.

**Run order (canonical Forward Fix v2):** Step 1 SEO heads-up file (`seo-requests/2026-06-05-content-data-touch.md`) as artifact 1 → Step 0 re-verify Friday AM → read current `bmo-field` entry → content-hook → edit `worldcup.ts` (incl. new FAQ block) → commit `Content refresh: bmo-field` → refresh-log entry.
**Expected diff shape:** ~22–26 lines added (extra for the FAQ block) / ~10 removed, single file.

### Saturday, June 6 — Venue refresh: BC Place, Vancouver

**File:** `web/src/data/worldcup.ts` — `bc-place` entry

**Step 0 verified clean against `worldcup.ts` THIS SUNDAY MORNING (pre-composition):** BC Place = **4 matches — 3 Group Stage + 1 knockout** — **M8 Sat 6/13 19:00 ET Group D, M28 Fri 6/19 13:00 ET Group B, M56 Fri 6/26 20:00 ET Group D, R32-8 Thu 7/2 20:00 ET (Round of 32).** Last Sunday's forward-look stated "7 matches" — off by three; gate caught it. **BC Place is the knockout-bearing Canadian venue** (the contrast partner to pure-Group-Stage BMO Field) — Group D plays twice here (M8 + M56), plus it carries one of the eight Round of 32 matches.

**Expansion target:** same structural template as BMO Field — 8–10 sections, 7–8 ticketTips, 10–12 keywords, rich paragraph, **+ the new 4–6 item FAQ block** (SEO Ask 2).

**Differentiated content angles (uncontested at depth):**
- **Retractable roof** — BC Place is the only Canadian WC venue with a retractable roof (parallel to NRG among US venues); a weather-management/pricing-stability angle for Vancouver's variable June conditions.
- **Knockout-premium present** — unlike BMO Field, BC Place's R32-8 introduces knockout-premium spillover; the content contrast ("Toronto = pure bargain, Vancouver = bargain + one elimination match") is a clean two-venue Canadian framing.
- **Group D plays twice (M8 + M56)** — single-group-twice supporters pattern; Group D appears at BOTH Canadian venues (M8/M56 at BC Place, M31 at BMO Field) — cross-city Canadian Group D arc.
- **Mountain-and-water setting + Whitecaps/BC Lions dual-tenant** pricing comps (MLS + CFL secondary-market baselines).
- **Vancouver transit** — SkyTrain direct to Stadium–Chinatown station; a transit-positive Canadian counterpart to SEPTA.

**Run order:** same canonical Forward Fix v2 — `seo-requests/2026-06-06-content-data-touch.md` as artifact 1, Step 0 re-verify Saturday AM, current-state read, content-hook, `worldcup.ts` edit (incl. FAQ block), commit `Content refresh: bc-place`, refresh-log entry.
**Expected diff shape:** ~22–26 lines added / ~10 removed, single file.

### Sunday, June 7 — Audit + plan + next-week composition

Same task as today. Compose the Week of June 8–14 plan (WC KICKOFF WEEK — the highest content-volume week of the campaign), copy-review the queue, audit Mon–Sat 6/1–6/6, file the cross-agent summary. **Pre-composition Step 0 grep** for next refresh pair (Estadio Azteca + Estadio Akron, the first Mexico WC venues) is mandatory — both will be off prior-memory like every Canadian/US venue before them.

---

## Forward-Look Calendar (June 8 – 21)

- **Week of June 8 – 14 — WC KICKOFF WEEK.** Mon–Thu blog content is fully WC-saturated: opener-day previews (MetLife, Thu 6/11), group-by-group price analysis, matchday-1 cross-platform snapshots. **Thu 6/11 (kickoff) is the single highest content-volume day of the campaign.** Fri 6/12 + Sat 6/13 refresh pair = **Estadio Azteca (Mexico City) + Estadio Akron (Guadalajara)** — first Mexico WC venue refreshes; angles lean into Mexican-soccer culture, three-host-nation framing, MXN↔USD resale variance, and Azteca's historic-venue premium (only stadium to host three World Cups).
- **Week of June 15 – 21 — WC Group Stage Week 1.** Mon–Thu content tracks live-tournament pricing patterns (post-matchday repricing, which groups are cheapest as they resolve). Fri 6/19 + Sat 6/20 = **Estadio BBVA (Monterrey)** + a backup/revisit US venue slot for any venue surfacing fresh live-tournament data.
- **Step 0 gate is mandatory for all three Mexico venue refreshes** — run the pre-composition grep against `worldcup.ts` at each Sunday plan composition. Prior-memory match counts for Mexican venues are unverified and should be treated as wrong until grep-confirmed.

---

## Status Summary

- **Drafting cadence: ALL-TIME HIGH SUSTAINED.** 4/4 Mon–Thu drafts shipped for the **fifth consecutive week**, full category rotation (guides/tips/news/comparisons), 4/4 frontmatter clean. The Wed editorial pivot to category-pricing-stability beat both placeholder options.
- **Refresh cadence: ALL-TIME HIGH SUSTAINED.** 2/2 Fri/Sat refreshes for the **sixth consecutive week**. **The US World Cup venue arc is COMPLETE — all 11 US venues now have full price-guide pages, 12 days before kickoff.** Next: the two Canadian venues (Fri/Sat), then the three Mexican venues.
- **Step 0 gate: PROVEN AT THE CROSS-SUNDAY BOUNDARY.** First time the pre-composition gate ran at the Sunday→Sunday boundary it was built for — caught BMO Field (6→3) and BC Place (7→4) off-spec, errors that had sat in the forward-look for seven days. The gate now demonstrably closes prior-plan-memory drift. Corrected match data flows into the Fri/Sat briefs.
- **SEO synergy captured:** SEO Ask 2 (per-stadium FAQ blocks → `FAQPage` schema) is absorbed into the BMO Field + BC Place refreshes as a standing requirement from this week forward.
- **Publishing cadence: BROKEN — WORSENING AT THE WORST POSSIBLE TIME.** Day 54 drought, 27-draft backlog, realized loss #3 confirmed (Memorial Day Weekend). **Three WC drafts decay daily until the June 11 kickoff** — every unpublished day at T-11 is both a freshen-cost increase and an addressable-window shrink. The 90-minute Lead Architect bandwidth block remains the single program-wide unblocker: one session clears the queue, absorbs the `extractLowestPrice` patch (now all 8 US WC pages), merges the SEO bundle, and converts the decaying WC drafts before kickoff.
- **Cross-agent dependencies:**
  - SEO: bundle freeze Day 39; `extractLowestPrice` patch Day 21, all 8 US WC stadium pages affected; FAQ-schema ask absorbed into refreshes.
  - Email: cron Day 54 dead; "All 11 US Venues" PDF lead magnet ready to gate.
  - CRO: Day 45 of 100% null `target_price`; content-layer mitigation shipped, UI fix upstream.
  - Analytics: funnel halves diverging; WC pre-tournament window is the largest organic-demand surface for 11 days.
  - Social: completed US venue arc + Monday all-venues map = high-share carousel/thread asset; Instagram template rotation still open.
  - Paid Ads: continue hold.

The drafting, refresh, and Sunday-plan-composition halves are at structural all-time highs (5th/6th consecutive weeks, Step 0 gate proven at the cross-Sunday boundary, US arc complete). **The publishing half is at its worst-ever cadence — and the World Cup kickoff in 11 days converts the WC backlog from "decaying" to "forfeited" if the publish bottleneck doesn't clear this week.**
