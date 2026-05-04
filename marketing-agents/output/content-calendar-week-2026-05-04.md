# Content Calendar — Week of May 4 – 10, 2026

**Strategist:** Content Agent (Agent 1) — Weekly Planning Session
**Session date:** 2026-05-04 (Mon)
**Covers:** Monday 5/4 → Sunday 5/10
**Carry-over source:** `content/next-week-plan.md` (produced 5/3 by Sunday session). This document locks the slots from that plan, integrates today's content hook (Wrigley Field venue page creation + paired Cubs vs Reds blog draft both shipped this morning), and dispatches to other agents.

---

## Environment check (what changed since Sunday's plan)

- **The Sunday plan's Monday emergency override executed cleanly this morning.** `web/src/data/venues.ts` now includes a `wrigley-field` entry (14 sections, 14 keywords, rich Federal-League-through-1060-Project description, first MLB stadium in the dataset). Committed as `636e40b Content refresh: wrigley-field venue page creation` per the new refresh-checklist Step 5. The paired blog draft `2026-05-04-cubs-vs-reds-wrigley-field-pricing-48-hours-may-2026.md` is also written, frontmatter clean, 1,068 words. **Push pending — Lead Architect ask filed.**
- **Cubs Game 1 went past last night without a live `/venues/wrigley-field` page.** The 3-game live-page-execution window (Games 4/5/6 May 4–6 in last week's plan; Games 2/3/4 in today's calendar after Game 1's Sat 5/3 pass) is now a **3-game window with Game 2 tonight (~18:40 CT first pitch).** Without the explicit push today, tonight's at-game search slips and the window collapses to 2 of an originally-planned 4-game capture cycle.
- **Publish backlog grew to TWELVE drafts.** As of this morning: 4/8 (archive recommended), 4/14, 4/15, 4/16, 4/21, 4/22, 4/23, 4/27, 4/28, 4/29, 4/30 — plus today's 5/4 Cubs vs Reds draft. **Twelve drafts, zero ships. Day 27 of the publish-velocity zero-streak** (last ship was 2026-04-07). Three drafts now critical-stale: 4/27 (3 days past its referenced May 1 deadline), 4/29 (5 days drift on the "43 days" date-anchor open and growing +1/day), 4/15 (2 weeks safe-window before "under two months" frame breaks).
- **Today's news beats:** Cubs G2 tonight (covered by today's blog + Wrigley page). NBA Round 1 Game 6/7 elimination cluster running through Tuesday/Wednesday (covered by 4/14 + 4/28 drafts in queue — publishing them this week catches the cluster). World Cup at T-38 days (covered by 4/15 + 4/22 + 4/29 drafts in queue). **Three news beats, three queued drafts, zero publishes.**
- **Bruno Mars demand signal compounded again.** Per Friday's analytics weekly: 3 watchers, 6 items, 3 venues — first cross-user / cross-city / cross-month tour cluster on record. **Wednesday 5/6's Bruno Mars venue-by-venue piece (per Sunday's plan) is the highest-signal organic content opportunity outside World Cup, and it publishes 10 days before Soldier Field May 16 — peak indexing window.**
- **Conversion losses now 3 recorded, 5 more guaranteed by Wednesday 5/6** per Friday's analytics. Tate Florence (Atlanta May 1, 47-day silent watchlist) + ajvanprooyen Cubs G1 (Sat 5/3, 6 items) joined Viva El Jaripeo (Apr 25). May 2-6 Cubs G1-G6 + Bilmuri May 2 lock in the next 5. **Tuesday 5/5's welcome-flow piece is the structural content fix; everything else is mitigation.**
- **SEO bundle on Day 18.** Same flag as last week, +1 day. ~50 schema improvements still un-deployed, +13 Wrigley-creation insertions added to bundle scope as of `636e40b`.
- **Instagram template rotation — flagged 5 weeks running.** No movement. Re-escalating from "hard architect-call" (last week's framing) to "shipping decision blocker on Instagram channel viability."

---

## This week's content items (locked)

### Priority 1 — Publish the backlog (every morning, all week)

**TWELVE drafts ready to ship. The cadence below clears all twelve across Mon–Thu in line with Sunday's plan.**

| Slot | File | Category | Hub link | Status |
|------|------|----------|----------|--------|
| Mon AM | `2026-04-16-best-ticket-comparison-sites-2026.md` | comparisons | `/compare` | Ready, 18d old, fully evergreen — recommended FIRST publish to seed `/compare` graph |
| Mon AM | `2026-04-14-nba-playoff-tickets-compare-prices.md` | tips | `/compare`, `/watchlist` | Ready — freshened 4/19, 20d old |
| Mon PM | `2026-04-27-summer-concert-tour-2026-ticket-buying-guide.md` | guide | `/compare`, `/watchlist` | Ready WITH 1-line freshen (open paragraph: drop "Friday May 1" deadline phrasing, swap to "the deepest-inventory window has closed") — 7d old |
| Mon PM | `2026-05-04-cubs-vs-reds-wrigley-field-pricing-48-hours-may-2026.md` | news | `/venues/wrigley-field`, `/compare` | Drafted today; ready as soon as Wrigley page is live (push dependency, see env check) |
| Tue AM | `2026-04-15-world-cup-2026-seat-assignments-bait-switch.md` | news | `/world-cup-2026` | Ready — freshened 4/19, 19d old |
| Tue AM | `2026-04-21-how-to-compare-ticket-prices-30-seconds.md` | tips | `/compare`, `/watchlist`, `/how-it-works` | Ready, 13d old |
| Tue PM | `2026-04-28-same-day-nba-playoff-tickets-6-hour-playbook.md` | tips | `/compare`, `/watchlist` | Ready, 6d old; high-relevance for Round 1 elimination week (Game 6/7 tip-offs Tue/Wed) |
| Wed AM | `2026-04-22-fifa-resale-three-weeks-data-world-cup-2026.md` | news | `/world-cup-2026`, individual stadium pages | Ready, 12d old |
| Wed AM | `2026-04-29-world-cup-2026-general-sale-closing-april-2026.md` | news | `/world-cup-2026` | Ready WITH 1-line freshen (open: drop "Today is April 29 / 43 days" → "The opener is June 11. Here's the honest state of the world.") — 5d old |
| Thu AM | `2026-04-23-ticketmaster-vs-seatgeek-fees-2026.md` | comparisons | `/compare`, `/blog/ticketmaster-vs-seatgeek-comparison` | Ready, 11d old; fulfilled SEO Ask 5 Post 1 |
| Thu AM | `2026-04-30-stubhub-vs-vivid-seats-2026.md` | comparisons | `/compare` | Ready, 4d old; fulfilled SEO Ask 5 Post 2 (4 days early) |

**Archive decision still pending:** `2026-04-08-nba-nhl-playoff-tickets-2026-buying-guide.md` — 26 days old, overtaken by 4/14 piece. Move to `marketing-agents/output/content/archived/` (folder needs creation) or delete. **Lead Architect call — third consecutive week.** NHL section can be salvaged as a standalone piece if pipeline empties.

### Priority 2 — New originals (4 pieces, Mon–Thu, all per Sunday plan)

| # | Day | Title | Format | Target keyword | Target URL |
|---|-----|------|--------|----------------|------------|
| 1 | Mon 5/4 | Cubs vs Reds at Wrigley: How Pricing Moves in the Final 48 Hours of a Mid-Week Series | 800–1100w tactical news | "Cubs vs Reds tickets," "Wrigley Field standing room tickets," "cheapest Cubs tickets day of game," "Cubs ticket prices May 2026," "Wrigley Field bleacher seats price" | `/blog/cubs-vs-reds-wrigley-field-pricing-48-hours-may-2026` |
| 2 | Tue 5/5 | You Just Signed Up for TicketScan — Here's How to Get Your First Price Drop Alert in Five Minutes | 800–1000w onboarding tips | "how to use TicketScan," "set up ticket price alerts," "track concert ticket prices," "ticket watchlist guide," "first price drop alert," "ticketscan walkthrough" | `/blog/first-price-drop-alert-five-minutes-ticketscan-walkthrough` |
| 3 | Wed 5/6 | Bruno Mars Romantic Tour 2026: Soldier Field vs Ohio Stadium vs MetLife — A Venue-by-Venue Price Guide | 1000–1300w comparison | "Bruno Mars Romantic Tour tickets," "Bruno Mars Soldier Field tickets," "Bruno Mars Ohio Stadium tickets," "Bruno Mars MetLife tickets," "cheapest Bruno Mars tickets 2026," "Bruno Mars residency MetLife" | `/blog/bruno-mars-romantic-tour-2026-venue-price-guide` |
| 4 | Thu 5/7 | The All-In Pricing Era: What Changed in 2024, Why StubHub and Vivid Seats Switched, and Whether Tickets Actually Got Cheaper | 1100–1300w explainer/comparison | "all-in pricing tickets," "FTC junk fees rule tickets," "StubHub all-in pricing," "Vivid Seats all-in pricing," "ticket fees 2026," "are tickets cheaper with all-in pricing," "junk fees ticket comparison" | `/blog/all-in-pricing-tickets-2026-junk-fees-explained` |

**Why this mix (validation of 5/3 plan):** Monday's piece has a 3-game perishability window (May 4–6 home stand, two games left after tonight). Tuesday's piece directly addresses the Pattern B 62.5%-of-recent-cohort pattern Friday's analytics confirmed has crossed majority. Wednesday's Bruno Mars piece publishes 10 days before Soldier Field May 16 — the strongest organic-signal anchor event outside the World Cup. Thursday's All-In Pricing piece pulls forward 4 days from SEO Ask 5 Post 3's 5/11 due date and completes the four-piece Q2 comparison series (4/16 → 4/23 → 4/30 → 5/7) all hub-and-spoking off `/compare`. **All four pieces have time-perishable hooks, structural-product-signal anchors, or strategic series capstones. None are filler.**

### Priority 3 — Page refreshes (Fri–Sat)

| # | Day | Target page | Scope |
|---|-----|-------------|-------|
| 5 | Fri 5/8 | `worldcup-stadiums/att-stadium` (`web/src/data/worldcup.ts`) | 9 World Cup matches (highest match count) + Quarter-Final QF-3 on July 10 + R16 on July 4 (Independence Day demand bump). Sections 3 → 9–10 mapped to Field Suite Level / 100s sideline / 100s endline / Hall of Fame Suites / Star Suites / 200s mezzanine / 300s upper / 400s upper budget tier / Standing Room with FIFA Cat 1–4 mapping. Description: 9-match volume framing, QF-3 placement, July 4 R16, Cowboys + Canelo + Country Music Awards usage with resale precedent, AC + roof advantage over outdoor June/July venues, transit (DART Trinity Lakes, parking lots). Keywords 4 → 8–12. Tips 4 → 8 AT&T-specific. |
| 6 | Sat 5/9 | `worldcup-stadiums/mercedes-benz-stadium` (`web/src/data/worldcup.ts`) | 8 WC matches incl. Round of 16. Sections 3 → 8–10. Description: Atlanta media-market framing, Falcons + Atlanta United (MLS soccer-precedent comp via MLS Cup / Concacaf Champions League), Super Bowl LIII pricing comp ($2.5K–$8K+), retractable roof + downtown transit walkability. Keywords 4 → 8–10. Tips 4 → 6–8 Mercedes-Benz-specific. |

**Backup target if Mercedes-Benz finishes faster than expected:** Lumen Field (Seattle, 6 matches, soccer-specific Sounders precedent comp).

**Refresh-checklist for both slots (per Step 5 added Sat 5/2 and exercised cleanly today on Wrigley):**
- Step 0: `grep -n "venue: '<slug>'" web/src/data/worldcup.ts | grep "round: '"` to enumerate match assignments before drafting
- Step 1: edit description, sections, ticketTips, keywords on the venue entry
- Step 2: verify against Step 0 cross-check (no Third-Place / Final / Semi-Final misattribution — same error class as the Fri 5/1 SoFi correction)
- Step 3: `npx tsc --noEmit`
- Step 4: `git diff --stat -- web/src/data/worldcup.ts` to confirm scope is single-file
- Step 5: explicit commit `git commit -m "Content refresh: <slug>"` BEFORE the daily marketing-output push runs

### Priority 4 — Strategic asset (lead magnet, see separate file)

**Lead magnet — "5 Signs You're About to Overpay for Tickets" (Checklist).** Full content in `lead-magnet-5-signs-overpay-checklist.md`. Format rotation continues: 4/13 PDF guide (WC), 4/20 PDF cheat sheet, 4/27 spreadsheet, 5/4 rotates to **single-page checklist** — the lightest possible asset, designed for top-of-funnel popup capture and the social-share-to-screenshot pattern. Checklists outperform PDFs and spreadsheets on capture rate (40–60% vs 15–25% historical industry benchmark) but underperform on long-engagement; this rotation is intentional to keep the asset library covering the full short-and-long engagement spectrum.

Asset should ship Tuesday alongside the welcome-flow blog publish (the checklist is the most direct visual restatement of the welcome-flow piece's central thesis: most buyers don't notice they're overpaying because they don't have a comparison reference). Newsletter + popup activation Wednesday paired with the FIFA resale piece publish (the data-driven WC angle reinforces the checklist's "no comparison = overpay" framing).

### Priority 5 — Sunday audit + next-week planning

Sunday 5/10 — produce `next-week-plan.md` for week of 5/11–5/17. Same structure as today's source plan. Anticipated slots:
- Mon 5/11: SEO Ask 3 (World Cup country pages) due 5/10 — Sunday session ships the country-page outline; Mon publish target either programmatic-page batch or the country-page rollout blog post depending on SEO Agent confirmation by Sat
- Tue 5/12: Pattern B churn anatomy post-mortem — depends on cron unblock + sufficient distance from Apr 25 + Apr 28-29 cohorts
- Wed 5/13: First Bruno Mars Soldier Field follow-up post-show data piece (Soldier Field show is May 16 — but the prior weekend's pricing-curve actuals could ship Tue/Wed if dataset is captured)
- Thu 5/14: Open slot — likely SEO Ask 5 Post 4 candidate or a new evergreen comparison piece
- Fri 5/15 + Sat 5/16: Two more WC stadium refreshes (Lumen Field + NRG Stadium remaining as tied-most-sparse venues)

### Priority 6 — Today's blocking deliverable (operational, not blog)

**Wrigley Field push to production** — `git push origin main` from `636e40b`, then verify HTTP 200 on `https://www.ticketscan.io/venues/wrigley-field` (today's pre-commit baseline is 404). Without this push, tonight's Cubs G2 at Wrigley passes through the live-page-execution window with the page still un-deployed. **Lead Architect ask filed via today's content hook Hook 2.** Estimated time: 30 seconds + 2-3 minute Vercel deploy wait.

---

## Content gap analysis vs. competitors

Spot-check vs. top ranker for four target queries we're writing against this week:

- **"Cubs vs Reds tickets" / "Wrigley Field standing room" (Mon target):** SERP is dominated by Cubs.com primary inventory, StubHub's event-specific pages, SeatGeek's Wrigley Field hub, and a thin SeatGeek "fans guide to Wrigley." **Gap:** no independent multi-platform mid-week pricing-curve piece exists with the bleacher-vs-grandstand split + standing-room-workaround framing. The 1060 Project standing-room capacity (~30K above seated) is a structural product detail no comparison platform currently leverages in content. TicketScan owns this corner immediately.
- **"How to use TicketScan" / "set up ticket price alerts" (Tue target):** SERP for branded onboarding queries is dominated by SeatGeek's mobile-app onboarding videos and a few StubHub help-center pages. **Gap:** zero "5-minute walkthrough"-format onboarding content in the comparison-tool space. The Pattern B (signup → never adds an event) cohort is structural across every comparison platform; we're the first to write content directly addressing it. Doubles as in-product onboarding copy if/when CRO ships the welcome-modal redesign.
- **"Bruno Mars Soldier Field tickets" / "Bruno Mars MetLife tickets" (Wed target):** SERP is Cubs.com-style event pages from Ticketmaster + StubHub + Vivid Seats event-listing pages. **Gap:** no venue-by-venue cross-platform price comparison exists for any major 2026 tour. The 3-night MetLife residency premium-curve framing (night 1 vs night 2/3 pricing) is a unique data angle. Three-watcher organic signal validates the demand. Strong programmatic-SEO precedent for an aggregator page if SEO Agent confirms the keyword volume.
- **"All-in pricing tickets" / "FTC junk fees rule" (Thu target):** SERP is dominated by FTC press releases, Bloomberg/Variety policy coverage from late 2024, and a few affiliate sites with stale data. **Gap:** no current 2026-vintage "did the rule actually make tickets cheaper" piece exists. The transparency-not-suppression framing + the "comparison is more honest than ever" angle is a comparison-platform-only argument. Same playbook as the 4/16 → 4/23 → 4/30 series; expected top-10 eligibility within 4–6 weeks.

**Gap we're NOT filling this week (parking lot):**
- **"NHL playoff tickets 2026"** — only worth backfilling from the 4/8 archive material if pipeline empties. Same recommendation as last three weeks.
- **"Are StubHub fees worth it"** — adjacent to last week's 4/30 SH-vs-VS piece; split off in mid-May.
- **"Resale vs primary market for concerts"** — explainer; conceptually overlaps with Mon Bruno Mars and the 4/27 Summer Concert pieces. Park for May 18 big-idea slot.
- **"How to sell tickets on StubHub vs SeatGeek"** — seller-intent. Not our ICP.
- **"Cubs vs Cardinals rivalry tickets pricing" / "Cubs vs Brewers rivalry"** — natural follow-on to today's piece, but only worth writing once Cubs vs Cardinals or Cubs vs Brewers home stand lands on the 2026 schedule (next Cardinals series at Wrigley June 17–19; Brewers June 27–29). Park for the week prior to whichever lands first.

---

## Cross-agent dispatch

- **SEO Agent (Agent 2):** Full keyword opportunity list filed at `seo-requests/2026-05-04-content-calendar-handoff.md` (filing today, see appendix below). Three of four new blog posts target open SEO requests (Tue welcome-flow → onboarding-keyword cluster, Wed Bruno Mars → tour-aggregator candidate flag, Thu All-In Pricing → SEO Ask 5 Post 3 fulfillment 4 days early). The 4/18 blog OG images request is now Day 16 — still unfulfilled, will compound by 6+ posts this week if publishing runs as planned. Day 18 SEO bundle un-deployed; today's Wrigley creation added 13 venues.ts insertions to bundle scope.
- **Social Agent (Agent 3):** Monday's two-publish wave (4/14 + 4/16, plus 4/27 + Wrigley evening) is the largest social anchor of the week — four posts in a single day earns thread coverage on Twitter/X + Threads + Instagram carousel of the comparison-data hook. Today's Cubs Game 2 first-pitch (~23:40 UTC) is a live-event posting moment for the Wrigley page launch IF the push lands. Wednesday's Bruno Mars piece is the strongest social hook of the week (2 weeks pre-Soldier Field = peak Chicago concert-buyer audience) — 3-post treatment recommended. Thursday's All-In Pricing piece works for Twitter + Threads single posts. Friday's AT&T refresh + Saturday's Mercedes-Benz refresh both deserve their own Twitter screenshots of the FIFA Cat mapping additions. **Instagram template rotation is now blocking Instagram channel viability — fifth week running.**
- **Email Agent (Agent 5):** When Monday's 2-3 publishes land, queue the 4/16 Best Comparison Sites piece for **Tuesday newsletter** (89 days dormant — if cron unblocks this week, this is the trust-rebuilding send to lead with). Queue Wednesday's Bruno Mars piece for **Thursday newsletter** (the 3-watcher cohort is the first segmented send opportunity if email infra supports it). **New for this week:** lead magnet delivery sequence for the "5 Signs You're About to Overpay" checklist kicks off Wednesday — 3-email sequence specified in the asset file. Coordinate with the existing 5-email drip; this is a parallel sequence triggered by checklist download. **Drip queue at 19 emails owed across 19 users per Friday's analytics; cron Day 27 dead** — not a content fix but coordinate any newsletter sends with cron status to avoid blasting into a broken pipe.
- **Paid Ads Agent (Agent 4):** Continue holding (Day 27, per Friday's analytics 0.37/d signup floor + sealed-funnel framing). Resume trigger remains the cron-fix decision moment. Thursday's All-In Pricing post + Thursday's TM-vs-SG/SH-vs-VS publishes are paired high-intent landing-page candidates for paid search on "FTC junk fees rule," "Vivid Seats fees," "Ticketmaster vs SeatGeek" queries once paid resumes. Lead magnet capture rate from the checklist can be the Thursday paid-test landing page once the asset ships.
- **CRO Agent:** Target-price field investigation now Day 24 open. 85 watchlist items, 100% `target_price = null`. Either invisible or non-functional in the watchlist add UI. **Tuesday 5/5's welcome-flow piece is the first content asset that explicitly tells users to set a target price — this will surface the field as a user-visible product gap if it isn't already.** Coordinate so Tuesday's piece's screenshots match whatever modal or field state CRO ships in any post-signup UX redesign (Day 12 overdue per Friday's analytics).
- **Analytics Agent:** Wrigley/Bruno Mars/welcome-flow blog priority order maps directly to last Friday's weekly handoff (Day 25 cron silence + 3 recorded conversion losses + 5 more locked in by Wed 5/6 + Pattern B crossed majority). The 12-draft publish action is the highest-leverage organic move available this week. Today's analytics daily not yet filed; will integrate when posted.

---

## Priority ranking (if we only ship 5 things this week)

1. **PUSH the Wrigley commit (today, 5/4).** Single highest-leverage 30 seconds of the week. Without it, the new venue page misses tonight's at-game window for Cubs G2. Lead Architect manual action.
2. **PUBLISH the backlog (12 drafts across Mon–Thu).** Three-week-running Action #1. Day 27 zero-streak. The Mon AM 4/16 publish is the highest-leverage single post (evergreen, seeds `/compare` graph, 18 days seasoned).
3. **Wed Bruno Mars venue-by-venue piece + lead-magnet checklist activation.** The 3-watcher cross-city tour cluster is the strongest organic content signal we have outside the World Cup. The checklist is the lightest top-of-funnel capture asset in the library to date.
4. **Tue welcome-flow piece publish (paired with the lead magnet).** Direct content fix for the Pattern B 62.5%-of-recent-cohort majority. Doubles as in-product onboarding copy and Email 1 drip rewrite once cron unblocks.
5. **SEO bundle commit + push (Day 18).** Same flag as last week, +1 day. ~50 schema improvements + the Wrigley creation insertions. **Re-escalate to Lead Architect — sixth consecutive Sunday-or-Monday flag.**

Everything else is reinforcement.

---

## Appendix: Cross-agent file index for this week

- This file: `marketing-agents/output/content-calendar-week-2026-05-04.md`
- Performance review: `marketing-agents/output/content-performance-week-2026-05-04.md`
- Lead magnet: `marketing-agents/output/lead-magnet-5-signs-overpay-checklist.md`
- SEO handoff: `marketing-agents/output/seo-requests/2026-05-04-content-calendar-handoff.md` (filing today)
- Sunday's source plan: `marketing-agents/output/content/next-week-plan.md`
- Today's content hook: `marketing-agents/output/content/content-hook.md`
- Wrigley Field venue page (created Sat 5/2, committed today as `636e40b`, push pending): `web/src/data/venues.ts` `wrigley-field` entry
- Today's Monday paired blog draft: `marketing-agents/output/content/2026-05-04-cubs-vs-reds-wrigley-field-pricing-48-hours-may-2026.md`
