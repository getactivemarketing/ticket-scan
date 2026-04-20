# Content Calendar — Week of April 20-26, 2026

**Strategist:** Content Agent (Agent 1) — Weekly Planning Session
**Session date:** 2026-04-20 (Mon)
**Covers:** Monday 4/20 → Sunday 4/26
**Carry-over source:** `content/next-week-plan.md` (produced 4/19). This week's plan locks the slots from that document, resolves the Monday gap, and adds the fresh items unblocked by today's SEO deploy.

---

## Environment check (what changed over the weekend)

- **Publish pipeline status: still 0/4 drafts shipped.** Three freshened blog drafts (4/14 NBA compare, 4/15 FIFA bait-switch, 4/16 comparison sites) are still sitting in `content/`. Same state as yesterday. **Action item #1 for this week — unchanged.**
- **SEO working tree is still 3 days old.** `/compare` layout fix, Article schema overhaul, World Cup schema upgrades all un-pushed. Unblocks rich-result eligibility for 25+ pages on one Vercel deploy.
- **Social calendar loaded through 4/26.** 14 posts staged across X / Instagram / Threads / TikTok. IG template rotation still outstanding (3rd week flagged).
- **Playoff window is now peak-demand.** NBA Round 1 in full swing, NHL Round 1 mid-series, Ball Arena / AAC / Chase Center / TD Garden all hosting home games this week. Supports every refresh + tactical post we plan.
- **World Cup countdown:** 52 days to kickoff (June 11 at Estadio Azteca). FIFA resale marketplace now 18 days live as of Monday, 22 days live by Wednesday — the data-threshold for the Wed news piece.

---

## This week's content items (locked)

### Priority 1 — Publish the backlog (Monday morning)

**Three drafts already freshened and verified. Ship all three Monday.**

| Slot | File | Category | Hub link | Status |
|------|------|----------|----------|--------|
| Mon AM | `2026-04-14-nba-playoff-tickets-compare-prices.md` | tips | `/compare`, `/watchlist` | Ready — freshened 4/19 |
| Mon midday | `2026-04-15-world-cup-2026-seat-assignments-bait-switch.md` | news | `/world-cup-2026` + stadium pages | Ready — freshened 4/19 |
| Mon PM | `2026-04-16-best-ticket-comparison-sites-2026.md` | comparisons | `/compare` (hub), `/watchlist` | Ready — fully evergreen |

**Target keyword recap:**
- Draft 1 — "NBA playoff tickets compare prices," "how to compare playoff ticket prices," "cheapest NBA playoff tickets"
- Draft 2 — "FIFA World Cup 2026 seat assignments," "FIFA resale marketplace," "World Cup Category 1 seats"
- Draft 3 — "best ticket comparison sites 2026," "ticket comparison tool," "TicketScan vs SeatGeek vs Ticketmaster"

### Priority 2 — New originals (4 pieces, Tue–Fri)

| # | Day | Title | Format | Target keyword | Target URL |
|---|-----|------|--------|----------------|------------|
| 1 | Mon 4/20 | Summer Concert Tour 2026 Tickets: When to Buy, Platform-by-Platform | 1000-1200w guide | "summer concert tour 2026 tickets," "when to buy concert tickets 2026" | `/blog/summer-concert-tour-2026-ticket-buying-guide` |
| 2 | Tue 4/21 | How to Compare Ticket Prices Across Sites in 30 Seconds | 800-1000w how-to | "how to compare ticket prices," "ticket price comparison tool" | `/blog/how-to-compare-ticket-prices-30-seconds` |
| 3 | Wed 4/22 | Three Weeks of FIFA Resale Data: Is the Official Marketplace Actually Cheaper? | 900-1100w news | "FIFA resale marketplace," "FIFA resale vs StubHub," "cheapest World Cup 2026 tickets where to buy" | `/blog/fifa-resale-three-weeks-data-world-cup-2026` |
| 4 | Thu 4/23 | Ticketmaster vs SeatGeek (2026): The Fee Math Breakdown for Playoff and Concert Tickets | 1000-1200w comparison | "Ticketmaster vs SeatGeek fees," "SeatGeek vs Ticketmaster 2026" | `/blog/ticketmaster-vs-seatgeek-fees-2026` |

**Why this mix:** one big-idea calendar-anchoring piece (Mon), one tactical `/compare`-supporting piece (Tue), one data-driven news piece (Wed — climax of the three-week World Cup arc), one SEO-request hub-and-spoke comparison piece (Thu). Matches the newsletter-once + social-drumbeat-daily cadence.

### Priority 3 — Page refreshes (Fri–Sat)

| # | Day | Target page | Scope |
|---|-----|-------------|-------|
| 5 | Fri 4/24 | `venues/chase-center` (`web/src/data/venues.ts`) | Expand to ~65 sections; rewrite description for Warriors + Valkyries WNBA dual-tenant context; add Playoff + club tier language; keywords for "Chase Center seating chart," "Warriors playoff tickets," "Valkyries tickets," "San Francisco concert tickets" |
| 6 | Sat 4/25 | `venues/metlife-stadium` (`web/src/data/venues.ts`) | World Cup Final context (July 19, 2026 — 55 days out Saturday), Jets/Giants regular season, major tour context. Full section data + dual-usage description + keywords "MetLife Stadium World Cup," "Jets tickets," "Giants tickets" |

### Priority 4 — Strategic asset (see separate file)

**Lead magnet — The Ticket Buyer's Cheat Sheet: When to Buy for Every Event Type.** Full content in `lead-magnet-ticket-buyers-cheat-sheet.md`. Asset should ship Wednesday to align with the FIFA resale news piece peak; newsletter + popup activation Thursday.

### Priority 5 — Sunday audit + next-week planning (same pattern)

Sunday 4/26 — publish `next-week-plan.md` for week of 4/27–5/3. Same structure as 4/19's document.

---

## Content gap analysis vs. competitors

Not a deep audit this week — prior weeks covered this. Spot-check vs. top ranker for three target queries we're currently writing against:

- **"Ticketmaster vs SeatGeek fees" (Thu post target):** SeatGeek's own blog doesn't compete on this query (conflict of interest). StubHub's blog stays above the comparison fight. Top 5 SERP is a mix of Reddit threads, Forbes/Business Insider round-ups, and one good TicketReviewer.com post. TicketScan's angle — "where we win, where we don't" honesty — has no direct peer in the current top 5. **Expected: top-10 eligibility within 3 weeks of publish.**
- **"FIFA resale marketplace" (Wed post target):** SERP is dominated by FIFA's own announcement pages + secondary-market aggregator marketing. Nobody has yet published a multi-platform **actual-price** data piece three weeks in. This is a true gap.
- **"How to compare ticket prices" (Tue post target):** Low direct competition. Most hits are Wikipedia-adjacent or affiliate-thin listicles. Strong long-tail capture potential for a 30-second walk-through backed by an actual working tool.

**Gap we're NOT filling this week (parking lot):**
- **"How to sell tickets on StubHub vs SeatGeek"** — seller-intent. Not our ICP (buyer-focused).
- **"Are StubHub fees worth it"** — adjacent to Thu post, worth splitting off as its own piece in May.
- **"Resale vs primary market for concerts"** — good explainer topic; conceptually overlaps with the Mon summer concert piece. Park for May 11 big-idea slot.

---

## Cross-agent dispatch

- **SEO Agent (Agent 2):** Full keyword opportunity list in `seo-requests/2026-04-20-content-calendar-handoff.md` (filed today). Three of four new blog posts target open SEO requests. The 4/18 blog OG images request is still unfulfilled and compounds with every publish.
- **Social Agent (Agent 3):** Use the Monday 3-publish burst as the main social anchor Monday-Tuesday. Wed data piece deserves its own 3-post treatment (Twitter thread, Instagram carousel with the spread data, TikTok explainer). Thu TM-vs-SG piece is best for Twitter + Threads single posts.
- **Email Agent (Agent 5):** Queue the 4/16 Best Comparison Sites piece for Tuesday newsletter (strongest trust-build piece in the backlog). Queue the 4/22 FIFA resale data piece for Thursday newsletter (urgency + data makes strongest CTR). Lead magnet delivery sequence kicks off Wednesday — see dedicated asset file for full email sequence spec.
- **Paid Ads Agent (Agent 4):** Thursday TM-vs-SG post is the high-intent landing-page candidate. Shelve paid activation until conversion tracking is verified in production.
- **CRO Agent:** Target-price adoption still the open loop from last week. If the Monday publish burst drives watchlist signups, instrument the target-price flow before the Wed news wave arrives.

---

## Priority ranking (if we only ship 3 things)

1. **Monday backlog publish (all 3 drafts).** Zero-risk, zero-new-work, immediate SEO + internal-link benefit.
2. **Wednesday FIFA resale data piece.** Only piece that won't exist in the world without us — unique data advantage, 3-week editorial arc climax, highest newsletter + social leverage.
3. **Lead magnet (Ticket Buyer's Cheat Sheet).** Sustained list-growth engine; paid channels need a credible capture asset before activation.

Everything else is reinforcement.
