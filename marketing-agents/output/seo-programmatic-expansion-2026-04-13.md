# Programmatic SEO Expansion Plan — 2026-04-13

**Agent:** SEO Specialist (Agent 2)
**Status:** BLOCKED — Fix indexation first (see audit report)

---

## Important Note

**Do NOT build new programmatic pages until the P0 indexation issues are resolved.** Our existing 100+ pages are not indexed. Adding more unindexed pages is wasted effort. Resolve www/non-www canonical, sitemap BASE_URL, and Google Search Console submission first.

Once indexation is confirmed working (target: 50%+ pages indexed within 2-3 weeks), proceed with this expansion plan.

---

## Current Programmatic Pages (100+)

| Page Type | Count | Template | Indexed? |
|-----------|-------|----------|----------|
| `/venues/[slug]` | 24 | Venue info + events + price tips | NO |
| `/tickets/[slug]` (cities) | 37 | City + event listings | 1 of 37 |
| `/tickets/[slug]` (categories) | ~10 | Category + listings | 1 of ~10 |
| `/world-cup-2026/[stadium]` | 16 | Stadium + matches + tips | NO |
| `/blog/[slug]` | ~8 | Article | NO |

---

## Expansion Opportunities — Prioritized

### Tier 1: High Priority (Build in Q2 2026)

#### 1. "Best Time to Buy" Pages — `/best-time-to-buy/[category]`
**Search volume:** HIGH — "best time to buy concert tickets" (8K-12K monthly), "best time to buy NFL tickets" (3K-5K monthly)
**Competition:** MEDIUM — Gametime, TickPick, SeatGeek have blog posts but no dedicated landing pages
**Template feasibility:** HIGH — We have the price_history data and recommendation algorithm
**Data requirements:** price_history table data, aggregated by category

**Template Spec:**
```
/best-time-to-buy/concert-tickets
/best-time-to-buy/nfl-tickets
/best-time-to-buy/nba-tickets
/best-time-to-buy/mlb-tickets
/best-time-to-buy/nhl-tickets
/best-time-to-buy/world-cup-2026-tickets
```

**Content structure:**
- H1: "Best Time to Buy [Category] Tickets (2026 Data)"
- Data visualization: price trends by days-before-event
- Key insight paragraph (quotable for AI search)
- Category-specific tips (e.g., NFL: "Buy Monday after schedule release")
- FAQ section with schema markup
- CTA: Set up price alerts
- Related: venue pages, city pages

**Estimated pages:** 8-12
**Unique value:** Data-backed, not opinion-based. Competitors have blog posts; we'd have dedicated data pages.

---

#### 2. Artist/Team Pages — `/artist/[slug]` or `/team/[slug]`
**Search volume:** VERY HIGH — "Taylor Swift tickets" (100K+), "Yankees tickets" (50K+)
**Competition:** VERY HIGH — Ticketmaster, StubHub, SeatGeek dominate
**Template feasibility:** MEDIUM — Requires API data for upcoming events
**Data requirements:** Ticketmaster Discovery API event search by artist/team

**Template Spec:**
```
/tickets/taylor-swift (reuse /tickets/ pattern)
/tickets/new-york-yankees
/tickets/beyonce
```

**Content structure:**
- H1: "[Artist/Team] Tickets — Compare Prices"
- Upcoming events list with prices from multiple sources
- Price history chart (if we have data)
- "Best time to buy [artist] tickets" section
- Venue links for upcoming shows
- FAQ: "How much are [artist] tickets?", "Where to buy cheapest [artist] tickets?"

**Estimated pages:** Start with top 25 artists/teams by search volume
**Challenge:** High competition. But if pages are well-structured with comparison data, we offer something Ticketmaster doesn't (multi-platform comparison).

**Start with World Cup teams** (timely, less competition):
```
/tickets/usmnt-world-cup-2026
/tickets/mexico-world-cup-2026
/tickets/canada-world-cup-2026
/tickets/brazil-world-cup-2026
/tickets/england-world-cup-2026
```

---

### Tier 2: Medium Priority (Build in Q3 2026)

#### 3. Event Comparison Pages — `/compare/[event-slug]`
**Search volume:** MEDIUM — "cheapest [event name] tickets" (varies)
**Competition:** LOW — No competitor has dedicated comparison landing pages
**Template feasibility:** HIGH — This is our core product
**Data requirements:** Real-time API data from Ticketmaster, SeatGeek, StubHub

**Template Spec:**
```
/compare/world-cup-2026-final
/compare/super-bowl-2027
/compare/taylor-swift-eras-tour-2026
```

**Content structure:**
- H1: "[Event] Tickets — Price Comparison"
- Side-by-side price table: Ticketmaster vs SeatGeek vs StubHub
- Price history chart
- Buy recommendation (buy now / wait / hold)
- Section-by-section price breakdown
- CTA: Add to watchlist for alerts

**Estimated pages:** Dynamic, event-driven. Start with 20-30 high-profile events.
**Challenge:** Content freshness — prices change. Need ISR (Incremental Static Regeneration) or on-demand revalidation.

---

#### 4. City + Venue Combo Pages — `/tickets/[city]/[venue]`
**Search volume:** MEDIUM — "events at Madison Square Garden NYC" (5K+)
**Competition:** LOW-MEDIUM
**Template feasibility:** HIGH — We already have both city and venue data
**Data requirements:** Existing venue.ts + cities.ts data, cross-referenced

**Template Spec:**
```
/tickets/new-york/madison-square-garden
/tickets/los-angeles/crypto-arena
/tickets/orlando/kia-center
```

**Content structure:**
- H1: "Events at [Venue] in [City] — Tickets & Prices"
- Upcoming events at this venue
- Price comparison for next 5 events
- Venue guide (seating tips, parking, etc.)
- Other venues in this city
- Other events in this city

**Estimated pages:** 24 (one per venue, matched to city)
**Note:** These could cannibalize existing `/venues/[slug]` pages. Evaluate carefully — may be better to enrich existing venue pages instead.

---

### Tier 3: Low Priority / Future

#### 5. "Tickets Near Me" Pages — `/tickets/near/[location]`
**Search volume:** HIGH — "concerts near me", "events near me"
**Competition:** VERY HIGH — Google's own event listings dominate
**Feasibility:** LOW — Requires geolocation, hard to do with static pages
**Recommendation:** SKIP for now. Focus on named-city pages instead.

#### 6. Festival Pages — `/festivals/[slug]`
**Search volume:** MEDIUM — "Coachella tickets compare", "Lollapalooza 2026 tickets"
**Competition:** MEDIUM
**Feasibility:** MEDIUM — Need curated festival data
**Recommendation:** Add 5-10 major festivals as a test in late Q3.

---

## Implementation Priority

| Phase | Page Type | Count | Prerequisites |
|-------|-----------|-------|---------------|
| 0 (NOW) | Fix indexation | 0 new | www canonical, sitemap, GSC |
| 1 (May) | Best Time to Buy | 8-12 | price_history data aggregation |
| 2 (May-Jun) | WC Team Pages | 10-15 | Ticketmaster API integration |
| 3 (Jun-Jul) | Event Comparison | 20-30 | Real-time API + ISR |
| 4 (Aug) | Artist/Team Pages | 25 | Top artist/team data |
| 5 (Q4) | City+Venue Combos | 24 | Evaluate cannibalization first |

---

## Template Requirements for Content Agent

**For "Best Time to Buy" pages (Tier 1):**
- Need 300-500 words of unique intro copy per category
- 5-8 FAQ questions per category
- Data-backed "key insight" paragraph (2-3 sentences, quotable)
- Brief for each category to be delivered by Content Agent by May 1

**For WC Team Pages (Tier 1):**
- Team history at World Cup (2-3 paragraphs)
- Group stage schedule
- Key players to watch
- Ticket price expectations
- Brief for each team to be delivered by May 15

---

*Next review: Week of 2026-04-20 (pending indexation fix)*
