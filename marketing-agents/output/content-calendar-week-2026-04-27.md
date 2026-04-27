# Content Calendar — Week of April 27 – May 3, 2026

**Strategist:** Content Agent (Agent 1) — Weekly Planning Session
**Session date:** 2026-04-27 (Mon)
**Covers:** Monday 4/27 → Sunday 5/3
**Carry-over source:** `content/next-week-plan.md` (produced 4/26 by Sunday session). This document locks the slots from that plan, integrates today's content hook (FAQ audit due today, Summer Concert in production), and dispatches to other agents.

---

## Environment check (what changed since Sunday's plan)

- **Publish backlog grew to SEVEN drafts.** As of this morning: 4/8 (archive recommended), 4/14, 4/15, 4/16, 4/21, 4/22, 4/23 — plus today's 4/27 Summer Concert draft now sitting in `content/`. **Eight drafts, zero ships.** Day 20 of the publish-velocity zero-streak (last ship was 2026-04-07).
- **Today's hard deadline:** SEO Ask 2 (FAQ expansion audit, 16 questions, 40–100 words each) is due **today, 2026-04-27**. Deliverable: `content-faq-audit-2026-04-27.md` + in-place edits to `web/src/app/faq/page.tsx`. Not a blog deliverable but a content-agent obligation. Block this morning before any publish work.
- **Today's news beat:** SEO Ask 5 Post 1 (Ticketmaster vs SeatGeek fees) is also due 2026-04-27 — already drafted in queue as the 4/23 file. Functionally met if the publish runs today. Slip-publishes Thursday per cadence.
- **NBA Round 1 elimination games hit Tue/Wed/Thu** — Thunder/Grizzlies, Cavs/Magic, Knicks/Pistons, Nuggets/Clippers all sitting on potential 5–6 closeout games. Drives same-day search-volume peak — Tuesday's tactical piece needs to publish *Tuesday morning* to capture three consecutive elimination nights.
- **Friday May 1 is the deepest-inventory pre-show window close for summer tours** (Billie Eilish, Kendrick Lamar, Tyler the Creator, Chappell Roan). Today's Summer Concert post must publish today or kill it permanently per the 4/26 plan.
- **World Cup countdown:** 45 days to kickoff (June 11 at Estadio Azteca). FIFA resale marketplace now 25 days live as of Monday — Wednesday's "phase 1 closes" piece hits the lifecycle peak.
- **SEO bundle on Day 11.** Same flag as last week, +1 day. ~50 schema improvements still un-deployed.
- **Instagram template rotation flagged 4 weeks running.** No movement. Escalating as a hard architect-call this week.

---

## This week's content items (locked)

### Priority 1 — Publish the backlog (Monday morning, after FAQ audit)

**SEVEN drafts ready to ship. The Monday-Tuesday-Wednesday-Thursday cadence below clears six of them.**

| Slot | File | Category | Hub link | Status |
|------|------|----------|----------|--------|
| Mon AM (after FAQ audit) | `2026-04-14-nba-playoff-tickets-compare-prices.md` | tips | `/compare`, `/watchlist` | Ready — freshened 4/19, 13d old |
| Mon midday | `2026-04-15-world-cup-2026-seat-assignments-bait-switch.md` | news | `/world-cup-2026` | Ready — freshened 4/19, 12d old |
| Mon PM | `2026-04-16-best-ticket-comparison-sites-2026.md` | comparisons | `/compare` | Ready — fully evergreen, 11d old |
| Tue AM | `2026-04-21-how-to-compare-ticket-prices-30-seconds.md` | tips | `/compare`, `/watchlist`, `/how-it-works` | Ready, 6d old |
| Wed AM | `2026-04-22-fifa-resale-three-weeks-data-world-cup-2026.md` | news | `/world-cup-2026`, individual stadium pages | Ready, 5d old |
| Thu AM | `2026-04-23-ticketmaster-vs-seatgeek-fees-2026.md` | comparisons | `/compare`, existing `/blog/ticketmaster-vs-seatgeek-comparison` | Ready, 4d old; doubles as SEO Ask 5 Post 1 deliverable |

**Archive decision required:** `2026-04-08-nba-nhl-playoff-tickets-2026-buying-guide.md` — 19 days old, overtaken by 4/14 piece. Move to `marketing-agents/output/content/archived/` or delete. **Lead Architect call.** NHL section can be salvaged as a standalone piece if pipeline empties.

### Priority 2 — New originals (4 pieces, Mon–Thu)

| # | Day | Title | Format | Target keyword | Target URL |
|---|-----|------|--------|----------------|------------|
| 1 | Mon 4/27 | Summer Concert Tour 2026 Tickets: When to Buy, Platform-by-Platform | 1000–1200w guide | "summer concert tour 2026 tickets," "when to buy concert tickets 2026," "cheapest summer concert tickets 2026" | `/blog/summer-concert-tour-2026-ticket-buying-guide` |
| 2 | Tue 4/28 | Same-Day NBA Playoff Tickets: The 6-Hour Playbook (and Why Most Buyers Pay Too Much) | 800–1000w how-to | "same day NBA playoff tickets," "buy NBA tickets day of game," "last minute playoff tickets" | `/blog/same-day-nba-playoff-tickets-6-hour-playbook` |
| 3 | Wed 4/29 | World Cup 2026 General Sale Phase Closes — Here's What's Left and What It Costs | 1000–1200w news | "World Cup 2026 tickets sold out," "FIFA general sale closed," "cheapest World Cup 2026 tickets after phase 1" | `/blog/world-cup-2026-general-sale-closing-april-2026` |
| 4 | Thu 4/30 | StubHub vs Vivid Seats (2026): Which Resale Site Is Actually Cheaper? | 1100–1300w comparison | "StubHub vs Vivid Seats," "Vivid Seats fees 2026," "is StubHub cheaper than Vivid Seats" | `/blog/stubhub-vs-vivid-seats-2026` |

**Why this mix (validation of 4/26 plan):** Monday's piece has a hard 4-day perishability window (Friday May 1 close). Tuesday's piece has a 72-hour perishability window (Round 1 elimination night cluster). Wednesday is the biggest news beat of the week (FIFA phase-1 close = once-per-tournament-lifecycle event). Thursday completes the Q2 comparison series (4/16 best-comparison-overview → 4/23 TM vs SG → 4/30 SH vs VS) and feeds the `/compare` internal-link graph. **All four pieces have either time-perishable hooks or strategic series anchors. None are filler.**

### Priority 3 — Page refreshes (Fri–Sat)

| # | Day | Target page | Scope |
|---|-----|-------------|-------|
| 5 | Fri 5/01 | `worldcup-stadiums/sofi-stadium` (`web/src/data/worldcup.ts`) | Expand from 3 → 9 sections mapped to FIFA Cat 1–4. Add Coca-Cola Roof / Vista Field Cabanas / 100/200/300/500 levels with FIFA Cat mapping. Description: third-place playoff context, Rams/Chargers usage, Super Bowl LVI ($1.5K–$10K+) precedent, transit/parking, cross-platform comparison. Keywords 4 → 10. Tips 4 → 8 SoFi-specific. |
| 6 | Sat 5/02 | `worldcup-stadiums/att-stadium` (`web/src/data/worldcup.ts`) | 9 World Cup matches (highest match count) + one of two semifinals. 9 section groupings including Hall of Fame Suites + Star Suites for AggregateOffer high-end. Description: 9-match volume framing, semifinal placement, Cowboys + Star concert usage with resale precedent, AC/roof advantages over outdoor June/July venues. Keywords 4 → 10. Tips 4 → 8. |

**Backup target if AT&T finishes faster than expected:** Hard Rock Stadium (Miami, 7 matches incl. Round-of-16; Brazil group-stage match was the $281 outlier in our 4/22 FIFA resale data — strong narrative anchor).

### Priority 4 — Strategic asset (lead magnet, see separate file)

**Lead magnet — Concert Ticket Price Tracker Template (Spreadsheet).** Full content in `lead-magnet-concert-ticket-price-tracker.md`. Format rotation: 4/13 was a PDF guide (World Cup), 4/20 was a PDF cheat sheet, 4/27 rotates to **spreadsheet** — a structurally different deliverable that works as both a capture asset and a long-tail nurture tool (spreadsheet users open it weekly during their buying window).

Asset should ship Tuesday to align with the Summer Concert publish (the lead magnet is the *workbook* for the post's methodology). Newsletter + popup activation Wednesday, paired with the FIFA phase-1 news piece for the second wave.

### Priority 5 — Sunday audit + next-week planning

Sunday 5/03 — produce `next-week-plan.md` for week of 5/04–5/10. Same structure as 4/26's plan. Anticipate slot for SEO Ask 5 Post 3 (All-In Pricing, due 2026-05-11) in the 5/04 week.

### Priority 6 — Today's blocking deliverable

**SEO Ask 2: FAQ audit** — `content-faq-audit-2026-04-27.md` + in-place edits to `web/src/app/faq/page.tsx`. 16 questions, expand any answer under 40 words to 40–100 words. **Due today.** Estimated 3–4 hours. Block this morning before publish work.

---

## Content gap analysis vs. competitors

Spot-check vs. top ranker for four target queries we're writing against this week:

- **"Summer concert tour 2026 tickets" (Mon target):** SERP is dominated by Ticketmaster's tour-listing pages, Setlist.fm's tour aggregators, and Pollstar industry reports. **Gap:** no independent multi-platform comparison piece exists for the 2026 summer touring class with actual price-variance data. TicketScan's "Pollstar $108.63 floor + 20–50% variance on the same seat" framing has no peer in the current top 10.
- **"Same day NBA playoff tickets" (Tue target):** Top SERP is StubHub's own urgency-marketing pages + a Forbes round-up. **Gap:** nobody publishes a 6-hour playbook with platform-by-platform behavior in the final 90 minutes pre-tip. The "lower bowl behind the basket arbitrage" angle is unique to a comparison-platform vantage. Real keyword volume around Round 1 elimination games. Strong long-tail capture.
- **"FIFA general sale closed" / "World Cup 2026 tickets sold out" (Wed target):** SERP is FIFA's own announcement pages + speculation pieces. **Gap:** zero data-driven "what's left and what it costs" coverage. We've now logged 26 days of FIFA resale data — the snapshot piece is a true content-moat opportunity. Same gap as last week's 4/22 piece, four days deeper.
- **"StubHub vs Vivid Seats" (Thu target):** SERP is dominated by affiliate-heavy comparison sites (TicketReviewer, Saving Advice, etc.) — most haven't been updated since 2024. **Gap:** a 2026-current comparison with actual fee-stack math and platform-by-vertical winners. Same playbook as the 4/23 TM vs SG piece. Expected top-10 eligibility within 3–4 weeks of publish.

**Gap we're NOT filling this week (parking lot):**
- **"Are StubHub fees worth it"** — adjacent to Thu post; split off in May.
- **"Resale vs primary market for concerts"** — explainer; conceptually overlaps with Mon Summer Concert piece. Park for May 11 big-idea slot (same recommendation as last week).
- **"How to sell tickets on StubHub vs SeatGeek"** — seller-intent. Not our ICP.
- **"NHL playoff tickets 2026"** — only worth backfilling from the 4/8 archive material if pipeline empties.

---

## Cross-agent dispatch

- **SEO Agent (Agent 2):** Full keyword opportunity list filed at `seo-requests/2026-04-27-content-calendar-handoff.md` (filing today, see appendix below). Three of four new blog posts target open SEO requests. Today's Ask 2 (FAQ audit) is the hard deliverable. The 4/18 blog OG images request is now Day 9 — still unfulfilled, compounds with every publish (and we're about to publish 6+).
- **Social Agent (Agent 3):** Monday triple-publish (4/14 + 4/15 + 4/16) is the main social anchor Monday-Tuesday — three posts in a row earns thread coverage on Twitter/X. Today's Summer Concert publish deserves its own 2-post treatment Monday afternoon (Twitter quote-tweet + Threads). Wednesday FIFA phase-1 piece is the strongest social hook of the week (news-cycle peak) — 3-post treatment (Twitter thread, Instagram carousel with the price-floor data, TikTok explainer). Thursday SH-vs-VS piece works for Twitter + Threads single posts. Tuesday Same-Day Playbook should fire immediately on publish + 2 reactive Twitter posts during Round 1 elimination tip-offs.
- **Email Agent (Agent 5):** When Monday triple-publish lands, queue the 4/16 Best Comparison Sites piece for **Tuesday newsletter** (strongest trust-build piece in the queue, 11 days seasoned, no decay). Queue the 4/22 FIFA resale data piece for **Thursday newsletter** (urgency + data → strongest CTR potential). **New for this week:** lead magnet delivery sequence for the Concert Ticket Price Tracker Template kicks off Wednesday — 4-email sequence specified in the asset file. Coordinate with the existing 5-email drip; this is a parallel sequence triggered by tracker download, not a replacement.
- **Paid Ads Agent (Agent 4):** Thursday SH-vs-VS post + Thursday TM-vs-SG (4/23, publishing same day) are paired high-intent landing-page candidates for paid search on "Vivid Seats fees" and "Ticketmaster vs SeatGeek" queries. Shelve activation until conversion tracking is verified — same flag as last week. Lead magnet capture rate from the tracker template can be the Thursday paid-test landing page once the asset ships.
- **CRO Agent:** Target-price field investigation now Day 8 open from last week. 85 watchlist items, 100% `target_price = null`. Either invisible or non-functional in the watchlist add UI. The Wednesday phase-1-close piece will drive watchlist signups — instrument the target-price flow before the news wave hits.

---

## Priority ranking (if we only ship 5 things this week)

1. **FAQ audit (today, 4/27).** Hard deadline. Operational obligation.
2. **Monday triple-publish (4/14 + 4/15 + 4/16).** Zero-risk, immediate SEO + internal-link benefit. Two consecutive Mondays this has been Action #1; today is the day it ships.
3. **Wednesday FIFA phase-1-close piece.** Once-per-tournament-lifecycle news beat. Highest social + newsletter leverage of the week.
4. **Lead magnet (Concert Ticket Price Tracker Template).** First spreadsheet-format magnet. Spreadsheet downloads have higher recurring-engagement than PDFs (users open them weekly during buying windows). Newsletter activation Wed.
5. **SEO bundle commit + push (Day 11).** Not a content deliverable but a content-multiplier. ~50 schema improvements waiting on one Vercel deploy. **Re-escalate to Lead Architect.**

Everything else is reinforcement.

---

## Appendix: Cross-agent file index for this week

- This file: `marketing-agents/output/content-calendar-week-2026-04-27.md`
- Performance review: `marketing-agents/output/content-performance-week-2026-04-27.md`
- Lead magnet: `marketing-agents/output/lead-magnet-concert-ticket-price-tracker.md`
- SEO handoff: `marketing-agents/output/seo-requests/2026-04-27-content-calendar-handoff.md` (filing today)
- FAQ audit (today's deliverable): `marketing-agents/output/content-faq-audit-2026-04-27.md` (separate non-blog production)
- Sunday's source plan: `marketing-agents/output/content/next-week-plan.md`
