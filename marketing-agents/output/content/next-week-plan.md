# Content Calendar — Week of April 20-26, 2026

## This Week's Audit (April 14-20)

### What shipped

| Date | Type | Title/Action | Status |
|------|------|-------------|--------|
| Apr 14 (Mon) | — | No Monday big-idea piece produced | **Gap** (schedule slipped by one day) |
| Apr 14 (Tue) | Blog draft | "NBA Playoff Tickets 2026: How to Compare Prices and Actually Save Money" | Drafted, **NOT published** |
| Apr 15 (Wed) | Blog draft | "FIFA Sold You Category 1 Seats. Then They Moved the Categories." | Drafted, **NOT published** |
| Apr 16 (Thu) | Blog draft | "Best Ticket Comparison Sites in 2026: An Honest Breakdown" | Drafted, **NOT published** |
| Apr 17 (Fri) | Venue refresh | American Airlines Center — 5 to 75 sections + Platinum Club tier | **Committed** (7c5d637 wait — actually 7c5d637 is Ball Arena; AAC commit was earlier) |
| Apr 18 (Sat) | Venue refresh | Ball Arena — 5 to 69 sections + Club Box tier | **Committed** (7c5d637) |
| Apr 19 (Sun) | Audit + plan | This document | Done |

### What worked

- **Content-hook continuity.** Daily hooks this week correctly identified venue-refresh opportunities 24h ahead (AAC Thursday → refreshed Friday; Ball Arena Friday → refreshed Saturday). That's the loop working as designed.
- **Venue refreshes are compounding.** Four dual-tenant arenas now have full section data: TD Garden (4/10), Wells Fargo Center (4/11), AAC (4/17), Ball Arena (4/18). All four align with active April-May NBA + NHL playoff home games, meaning each refresh landed at peak search intent. AAC and Ball Arena both added premium mid-tier clubs (Platinum Club, Club Box) that didn't exist in prior data.
- **Blog-draft quality is high.** The 4/16 comparison piece ("Best Ticket Comparison Sites in 2026") is the strongest piece in the queue — voice is on-brand (honest about where we lose), structure is scannable, and it directly supports the new `/compare` metadata SEO Agent shipped today. The 4/15 FIFA seat-assignment piece is real news coverage, not SEO bait.
- **SEO alignment.** This week's drafts hit three SEO-requested keyword clusters: "NBA playoff tickets compare prices" (Tue), "World Cup 2026 seat assignments" (Wed), "best ticket comparison sites" (Thu). All three were in the open SEO requests queue.

### What didn't work / gaps

- **Publishing velocity = 0 new blogs.** Four drafts are in `marketing-agents/output/content/` — the 4/8 playoff guide (11 days old), 4/14 NBA compare, 4/15 FIFA bait-switch, and 4/16 comparison sites. Zero were published this week. Last week's plan ended with the same "publish the 4/8 draft immediately" callout. **This is now the single biggest blocker to organic growth.**
- **Monday 4/14 big-idea piece missing.** Schedule called for the World Cup timing guide. Didn't happen. Schedule slipped and the next day's Play-In tactical post absorbed the slot.
- **SEO working-tree uncommitted for 3 days.** Today's SEO daily flags ~40 schema/metadata improvements stuck in the working tree since 4/17. One Vercel deploy unblocks three days of work. Related to the publish-velocity problem above: it's a deployment bottleneck, not a content bottleneck.
- **Blog OG images (SEO request, 4/18) not produced.** All 21 posts still use the 512×512 logo fallback. Unlocks Article rich-result *eligibility* but not *quality* (Top Stories, Discover). Unblocked — just needs time.
- **The 4/8 playoff guide has aged out.** Opener says "kicked off this week." Playoffs are now in Round 1 full swing. Recommend archive rather than freshen — the 4/14 post is the newer, tighter version.

### Copy review of queued drafts (all four unpublished)

**`2026-04-08-nba-nhl-playoff-tickets-2026-buying-guide.md` — 11 days old**
- Title says "Just Started." Opener says "kicked off this week." Both are stale.
- Category flagged as `news` in the draft; last week's plan recommended changing to `guides`. Still correct.
- Content is solid for NHL coverage, which the 4/14 post doesn't have.
- **Verdict: Recommend archive, not publish.** The 4/14 post has overtaken the NBA half, and the NHL half isn't worth freshening when we have three fresher drafts ready to ship. Lead Architect makes the final call.

**`2026-04-14-nba-playoff-tickets-compare-prices.md` — 5 days old**
- Opener was "The NBA Play-In Tournament started today." **Freshened today** to "Round 1 of the NBA Playoffs is in full swing." One week of shelf life recovered.
- Closing paragraph was "Play-In wraps April 17. Round 1 starts April 18." **Freshened today** to remove the date-stamped lead-in and replaced with evergreen Round 1 framing.
- Removed the dangling reference to "last week's broader playoff buying guide" (which was the 4/8 draft we're now archiving).
- Frontmatter: slug unique (`nba-playoff-tickets-2026-compare-prices`), excerpt 139 chars, `category: tips` correct.
- **Verdict: Ready to publish Monday.**

**`2026-04-15-world-cup-2026-seat-assignments-bait-switch.md` — 4 days old**
- "With 57 days until the opener" **freshened today** to "under two months until the opener" (evergreen; also accurate from 4/19 through 4/25).
- **Added** the 4/16 spot-check data point inline: "on 7 of 10 random group-stage matches we priced this week, FIFA's own resale marketplace was the most expensive option." Makes the resale-reaction section data-backed instead of speculative.
- Frontmatter: slug unique (`world-cup-2026-seat-assignments-bait-switch`), excerpt 140 chars, `category: news` correct.
- **Verdict: Ready to publish Monday.**

**`2026-04-16-best-ticket-comparison-sites-2026.md` — 3 days old**
- Fully evergreen — no date-stamped copy to freshen.
- Voice is the strongest in the backlog. "If I run TicketScan, the bias is obvious. I'll tell you where we win and where we don't." reads correctly.
- `category: comparisons` correct. Slug (`best-ticket-comparison-sites-2026`) unique.
- Strong internal links to `/compare`, `/watchlist`, `/world-cup-2026` — directly supports SEO Agent's new `/compare` metadata work from today.
- **Verdict: Ready to publish Monday. This is the highest-leverage publish of the backlog — feeds directly into the internal-link graph SEO Agent asked for.**

### Cross-Agent output review

- **Social Agent (content-calendar.json):** Loaded through April 26. Voice is consistent and data-driven. Good weekly rhythm with 2-3 Twitter posts per day, one Instagram, one Threads, occasional TikTok. The 4/17-4/18 posts on American Airlines Center and the 4/18 NBA Game 1 rhythm piece are particularly strong — specific prices, specific seats, specific spreads. **Concern:** Every Instagram post still points at `ig-template.png` (flagged last week). No rotation introduced. Still a visual-variety gap. **Verdict: Approved. Escalate IG template rotation again.**
- **SEO Agent (4/19 daily):** High-quality work. Fixed `/compare` naked-metadata problem (added `layout.tsx` with `WebApplication` + `BreadcrumbList` JSON-LD). Flagged 3-day uncommitted working tree. Filed new content request for `/compare`-supporting blog posts (TM vs SG, comparison how-to) — **picked up in next week's Tue + Thu slots below.**
- **Email Agent / CRO Agent:** Not reviewed in detail today. Check their outputs before Monday's blog publish run.

---

## Next Week's Blog Plan (April 20-26)

### Monday, April 20 — Big-Idea Piece
**Title:** "Summer Concert Tour 2026 Tickets: When to Buy, Platform-by-Platform"
**Slug:** `summer-concert-tour-2026-ticket-buying-guide`
**Category:** `guides`
**Angle:** Pollstar's Q1 2026 report pegs the average concert ticket at $108.63 — a five-year high. But that's an average. Platform variance on popular summer tours (Billie Eilish, Kendrick Lamar, Tyler the Creator, Chappell Roan) is 20-50% on the same seat. This piece is the timing + platform guide for summer. Cover: when inventory is deepest (right now, 6-8 weeks pre-show), when the 2-week jump typically hits, which platform tends to win for pop vs. rock vs. hip-hop, fee math, and how to set an alert floor that's anchored to historical venue data instead of hope.
**Why now:** Summer tours start June. The 6-8 week pre-show window opens right now for most of them. Monday is the first buying day of the window.
**Target keywords:** "summer concert tour 2026 tickets," "when to buy concert tickets 2026," "cheapest concert tickets summer 2026"
**Internal links:** `/compare`, `/watchlist`, existing `/blog/best-time-to-buy-concert-tickets`, existing `/blog/taylor-swift-eras-tour-tickets`
**Word count target:** 1000-1200

### Tuesday, April 21 — Tactical/How-To (SEO Agent request)
**Title:** "How to Compare Ticket Prices Across Sites in 30 Seconds"
**Slug:** `how-to-compare-ticket-prices-30-seconds`
**Category:** `tips`
**Angle:** Walk-through of the TicketScan `/compare` flow. Use a current high-volume event (Billie Eilish at Chase Center or a live Round 2 playoff game) as the running example. Show the checkout-price reveal, the section-estimate feature, the trend view. Include "why this beats six tabs" framing. Directly supports today's `/compare` metadata fix by providing internal-link reinforcement with varied anchor text. This is the SEO request #1 from today's filing.
**Why now:** `/compare` page just became eligible to rank (as of today's fix). Internal-link reinforcement now is worth 10x what it will be in a month.
**Target keywords:** "how to compare ticket prices," "ticket price comparison tool," "compare ticket prices"
**Internal links:** `/compare` (3+ in-body), `/watchlist`, `/how-it-works`, existing `/blog/ticketmaster-vs-seatgeek-comparison`
**Word count target:** 800-1000

### Wednesday, April 22 — News/Timely
**Title:** "Three Weeks of FIFA Resale Data: Is the Official Marketplace Actually Cheaper?"
**Slug:** `fifa-resale-three-weeks-data-world-cup-2026`
**Category:** `news`
**Angle:** FIFA's resale marketplace opens April 2 → 20 days live Monday, 22 days by publish day. We now have enough data to answer the question the 4/16 social spot-check teased. Pull real pricing from 20-30 group-stage matches across FIFA resale, StubHub, and SeatGeek. Lead with the data: percent of matches where FIFA was cheapest, median spread, biggest outliers. Use the 4/15 seat-assignment story as context, not the headline. This is the definitive piece of a three-week arc (4/7 dynamic pricing → 4/15 seat assignments → 4/22 resale data).
**Why now:** Two weeks is the "enough data" threshold we teased in social. Three weeks is the "definitive" threshold.
**Target keywords:** "FIFA resale marketplace," "FIFA resale vs StubHub," "cheapest World Cup 2026 tickets where to buy"
**Internal links:** `/world-cup-2026`, individual stadium pages (MetLife, SoFi, BC Place, Lumen Field), `/compare`, existing 4/7 dynamic-pricing post, likely-published-by-then 4/15 bait-switch post
**Word count target:** 900-1100

### Thursday, April 23 — Comparison/Listicle (SEO Agent request)
**Title:** "Ticketmaster vs SeatGeek (2026): The Fee Math Breakdown for Playoff and Concert Tickets"
**Slug:** `ticketmaster-vs-seatgeek-fees-2026`
**Category:** `comparisons`
**Angle:** SEO request #2 from today's filing. Note: `ticketmaster-vs-seatgeek-comparison` already exists in `blog.ts` (line 255). Distinguish by scoping this one to **fee math and platform-wins-by-event-type** — where the existing post is a generic overview. Cover: per-platform fee stack (Ticketmaster 15-27%, SeatGeek 12-20%), who wins for NBA Round 1 vs. Taylor Swift vs. NHL playoffs, what "Platinum pricing" actually does, when SeatGeek's Deal Score mis-ranks, when each platform's buyer protection actually matters. Internal-link to the existing TM-vs-SG post to build a hub-and-spoke cluster around the `/compare` tool.
**Why now:** SEO Agent's `/compare` metadata fix + blog hub-and-spoke strategy. This post is the second spoke; the existing TM-vs-SG post is the hub.
**Target keywords:** "Ticketmaster vs SeatGeek fees," "SeatGeek vs Ticketmaster 2026," "which is cheaper Ticketmaster or SeatGeek"
**Internal links:** `/compare` (prominent), existing `/blog/ticketmaster-vs-seatgeek-comparison` (hub backlink), `/watchlist`, existing `/blog/how-to-find-cheap-nba-tickets`
**Word count target:** 1000-1200

### Friday, April 24 — Page Refresh
**Target:** Chase Center (`chase-center` in `venues.ts`)
**Why:** Still in the refresh backlog — was planned for 4/17 in last week's document but got displaced by American Airlines Center. Warriors are in Round 1 and Round 2 is likely next week. Chase Center section data is thin (same sparse-dual-tenant profile as TD Garden/WFC/AAC/Ball Arena pre-refresh). "Chase Center seating chart" and "Warriors playoff tickets" are peak-volume Bay Area keywords right now.
**Scope:** Expand to ~65 sections (matching Chase Center's actual 100/200/300 layout), rewrite description to include dual-tenant context (Warriors + Valkyries WNBA), add club tier if present at Chase, enhance keywords with "Warriors playoff tickets," "Valkyries tickets," "Chase Center seating chart," "San Francisco concert tickets."

### Saturday, April 25 — Page Refresh
**Target:** MetLife Stadium (`metlife-stadium` in `venues.ts`)
**Why:** World Cup Final is at MetLife on July 19, 2026. Currently 48 days out Saturday. Venue page needs Final-level context + Taylor Swift 2023 pricing reference + Jets/Giants regular usage. Also supports the 4/24 FIFA resale data blog (Wednesday) with internal-link reinforcement. Backup target if MetLife has already been refreshed: Arrowhead Stadium or Gillette Stadium, both group-stage WC venues with likely thin data.
**Scope:** Same pattern as Chase Center. Full section data, dual-usage description (regular season NFL + World Cup 2026 + major tours), keywords for "MetLife Stadium World Cup," "Jets tickets," "Giants tickets," "MetLife concert tickets."

---

## Immediate Actions (Priority Order)

1. **PUBLISH the 4/14, 4/15, and 4/16 drafts Monday morning.** All three are freshened or evergreen and frontmatter-validated. Run `./marketing-agents/scripts/publish-draft.sh 2026-04-14-nba-playoff-tickets-compare-prices.md` etc. for each. **This is the single highest-leverage 30 minutes of work this week.**
2. **Decision needed on the 4/8 draft.** Recommend archive (move to `content/archived/` if that folder exists, or just delete — the 4/14 post covers the NBA half with fresher copy). Lead Architect decides.
3. **COMMIT + PUSH the three-day SEO working tree.** SEO Agent flagged ~40 schema improvements stuck behind the uncommitted state. One Vercel deploy clears three days of work. Not a content task but directly blocks blog schema improvements for published posts.
4. **Social calendar is loaded through 4/26.** Post schedule is live and on-brand. Instagram template rotation still outstanding — escalate to Lead Architect for a 2-3 template set.
5. **Blog OG images (21 posts)** still pending from SEO Agent's 4/18 request. Monday through Thursday next week adds 4 more posts, so this backlog keeps growing until someone produces the template.
6. **Add `image` field** to the frontmatter template requirements for all new drafts. Starting with next Monday's big-idea piece.

## Cross-Agent Notes

- **SEO Agent:** Both of today's `/compare`-supporting requests (how-to + TM vs SG fees) are slotted for Tue + Thu next week. Mark as scheduled. The 4/18 blog OG images request is still open and compounding — each published post adds to the backlog.
- **Social Agent:** Monday's summer concert piece, Wednesday's FIFA resale data piece, and Thursday's TM-vs-SG fee math post each warrant 2-3 supporting social posts on publish day. Wednesday's is the strongest social hook of the week (data story with specific spread numbers).
- **Email Agent:** When the Monday triple-publish lands, the 4/16 comparison sites piece is strong newsletter material — honest, high-trust, and internal-links to the `/compare` tool (the main conversion CTA). Coordinate an email send if the SMTP pipeline is functional.
- **Paid Ads Agent:** The Thursday TM-vs-SG fee math piece is a high-intent landing page candidate for paid search on "Ticketmaster vs SeatGeek" and "SeatGeek fees" queries. Lock it in for the paid test once conversion tracking is live.
- **CRO Agent:** Recap the target-price adoption fix from last week. If still at 0% adoption after blog + social drives watchlist signups, that's where the funnel is leaking next.
