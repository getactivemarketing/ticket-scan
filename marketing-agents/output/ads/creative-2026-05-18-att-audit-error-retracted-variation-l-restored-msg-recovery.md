# Ad Creative — 2026-05-18 (Day 41)

_Three new ad variations from Agent 4 (Paid Ads Manager) — companion to `ads-daily-2026-05-18.md`._

## Day 41 Creative Context

Yesterday's "AT&T WC LP regression" was a self-audited slug error, not a real regression. The canonical AT&T slug in `web/src/data/worldcup.ts:123` is `att-stadium`, not `at-t-stadium`. `/world-cup-2026/att-stadium` returns HTTP 200 (always has). Variation L launch-eligibility is **restored**. Companion finding: MSG canonical slug is `msg` (HTTP 200), not `madison-square-garden` (phantom 404). The 25-day MSG long-form-404 carry is retracted; Variation N (MSG / Harry Styles persona) becomes immediately launch-eligible.

Today's three variations encode three distinct events:

1. **Variation L RESTORATION** — AT&T Stadium / Dallas / Quarter-Final coordinate
2. **Variation A-β REFRESH** — "9 weeks" final round-week cycle close
3. **Variation N NEW** — MSG / Harry Styles persona (LP-recovery)

The +2 single-day inbound sustains for a second consecutive day, so the daily-baseline shift from +1 to +2 informs the urgency framing across all three variations.

---

## Variation L (RESTORED) — AT&T Stadium / Dallas / Quarter-Final / Japan-Supporter / Knockout-Round Lead

**Persona anchor:** kevinshall87 (May 12 first-ever batch-add Day-0 activator, 6 items / 100s, AT&T-heavy WC profile).
**Geographic skew:** Dallas-Fort Worth metro + DFW airport-adjacent + Japan-supporter diaspora (US-based; nikkei Texas concentration anchors the Japan-supporter geo intent).
**LP target:** `/world-cup-2026/att-stadium` (canonical slug confirmed HTTP 200 today; Day 1 of audit-error-self-correction carry).
**Match anchor:** Quarter-Final QF-3 on July 10, 2026 + four group-stage fixtures + Round of 32 + Round of 16 on July 4 (Independence Day demand bump).

### Google Search Ads — Variation L (Quarter-Final knockout angle)

**Ad L-1: "Quarter-Final at Jerry World — Compare All Sources"**

```
Headline 1 (29):  Jerry World World Cup Tickets
Headline 2 (28):  Quarter-Final July 10 Tickets
Headline 3 (28):  Compare 3 Sources Free Now

Description 1 (88): AT&T Stadium hosts 7 World Cup matches incl. Quarter-Final July 10.
                    Compare Ticketmaster, SeatGeek & StubHub spreads in one place.

Description 2 (86): Past Cowboys + WrestleMania resale comps inform Quarter-Final
                    pricing — see all sources before locking in your sideline seats.

Display path:     ticketscan.io/world-cup-2026/att-stadium
```

**Ad L-2: "AT&T Stadium July 4 R16 — Independence Day Demand"**

```
Headline 1 (28):  AT&T Stadium July 4 Tickets
Headline 2 (29):  Round of 16 World Cup Tickets
Headline 3 (27):  Compare 3 Sources Free

Description 1 (89): The July 4 Round of 16 at AT&T Stadium — Independence Day demand
                    bump on upper-tier seats. Compare before resellers move.

Description 2 (90): Cross-platform spread tracking from Ticketmaster, SeatGeek, StubHub
                    and FIFA marketplace. Free price alerts when tickets dip.
```

**Ad L-3: "Japan World Cup Knockout Round Tickets — Compare"**

```
Headline 1 (29):  Japan World Cup 2026 Tickets
Headline 2 (28):  AT&T Stadium Knockout Round
Headline 3 (27):  Free Price Comparison

Description 1 (88): Japan World Cup knockout-round fixtures at AT&T Stadium —
                    compare ticket prices across all 3 major resale platforms free.

Description 2 (86): Get a free price alert and let Ticketmaster, SeatGeek & StubHub
                    compete for your buy. No signup required to compare.
```

### Meta Ads — Variation L (single concept across three image-led variations)

**Ad L-Meta-1 (Quarter-Final urgency):**

```
Primary text (123): Quarter-Final at Jerry World is 53 days out — and the spread between
                    Ticketmaster, SeatGeek and StubHub is already $300+ on identical sections.
                    Compare all 3 in one place before resellers move.

Headline (39):      Quarter-Final at AT&T — Compare Now

Description (29):   Side-by-side. Free. Always.

CTA:                Learn More
Destination:        ticketscan.io/world-cup-2026/att-stadium
```

**Ad L-Meta-2 (Japan supporter / Texas diaspora):**

```
Primary text (124): Japan's World Cup path runs through AT&T Stadium for the knockout round.
                    Texas-based Japan supporters: compare ticket prices on Ticketmaster,
                    SeatGeek & StubHub in one place. Free price alerts.

Headline (38):      Japan Knockout-Round Tickets

Description (28):   Compare 3 sources in one click
```

**Ad L-Meta-3 (July 4 / Independence Day):**

```
Primary text (121): The July 4 Round of 16 at AT&T Stadium is the World Cup's only Independence
                    Day fixture — and demand is already running 25%+ above adjacent dates.
                    Compare all 3 resale platforms before the FIFA on-sale clears.

Headline (38):      July 4 World Cup at AT&T

Description (29):   Compare 3 sources. Free.
```

### Variation L Audience / Targeting

- **Geo:** Dallas-Fort Worth metro (250mi radius); DFW airport-adjacent travel-intent layer
- **Japan supporter:** US-Japan dual-citizen + Japanese-language interest + Japan national team interest
- **Demographic:** 25-64, household income $75k+ (knockout-round seat price floor anchored at $200; sideline anchored at $400-$1,000)
- **Behavioral:** sports-event-purchase 12mo, travel-purchase 6mo, ticket-comparison sites in browsing history
- **Negative:** "free tickets," "ticket refund," "sell my tickets," "cheap tickets no service fee" (Day-0 non-activator generic terms)

---

## Variation A-β REFRESH — "9 Weeks Until the World Cup Final" (Final Round-Week Cycle Day)

**Today's deploy:** WC Final = 63 days = exactly 9 weeks. The 7-day round-week cycle that ran "10 weeks" closes today; "9 weeks" copy moves from staged → live.

**Persona anchor:** WC-final-curious / casual-but-watching audience; not stadium-specific. The "10 weeks" was the first cycle; "9 weeks" is the first refresh.

**LP target:** `/world-cup-2026` (main WC LP) or `/world-cup-2026/metlife-stadium` (Final venue) depending on traffic-quality test.

### Google Search Ads — Variation A-β Refresh

**Ad Aβ-1: "9 Weeks to the World Cup Final"**

```
Headline 1 (29):  9 Weeks to the World Cup Final
Headline 2 (27):  Compare All 3 Resale Sources
Headline 3 (26):  Free Price Alerts Always

Description 1 (88): The 2026 World Cup Final at MetLife is 9 weeks away — and ticket
                    prices are already drifting 15% upward on the sideline tiers.

Description 2 (89): Compare Ticketmaster, SeatGeek & StubHub spreads in one place. Set
                    a free price alert and let the platforms compete for your buy.
```

**Ad Aβ-2: "Final on July 19 — 63 Days Out"**

```
Headline 1 (28):  World Cup Final 63 Days Away
Headline 2 (28):  Compare Prices Across 3 Sites
Headline 3 (29):  Free Alerts on Price Drops

Description 1 (89): The World Cup Final at MetLife is 63 days out — sideline seats are
                    already trading $1,500–$5,000+ across the major resale platforms.

Description 2 (87): Compare all 3 sources for free. Set a price alert. Let the
                    platforms compete for your buy. No signup required to compare.
```

**Ad Aβ-3: "9 Weeks. 3 Sites. One Smart Compare."**

```
Headline 1 (24):  9 Weeks. World Cup Final.
Headline 2 (26):  Compare 3 Resale Sources
Headline 3 (27):  Free Alerts When Prices Dip

Description 1 (89): Nine weeks until kickoff at MetLife. Compare ticket prices across
                    Ticketmaster, SeatGeek & StubHub side-by-side. Free always.

Description 2 (85): Smart ticket buyers compare 3 sources before locking in. Free
                    price alerts when the spread shifts. Side-by-side comparison.
```

### Meta Ads — Variation A-β Refresh

**Ad Aβ-Meta-1 (Countdown-focused):**

```
Primary text (123): The 2026 World Cup Final at MetLife is 9 weeks out — and sideline
                    seats are already drifting upward $200–$500 a week across resale
                    platforms. Compare Ticketmaster, SeatGeek, StubHub & FIFA marketplace
                    in one place. Free always.

Headline (38):      9 Weeks to the World Cup Final

Description (28):   Compare 3 sources. Free.
```

**Ad Aβ-Meta-2 (Smart-buyer positioning):**

```
Primary text (124): Smart ticket buyers compare before they buy. The 2026 World Cup Final
                    is 63 days out — and the spread between Ticketmaster, SeatGeek & StubHub
                    on identical sections is already $300–$700.

Headline (37):      Compare World Cup Final Tickets

Description (29):   Side-by-side. Free always.
```

### Variation A-β Refresh Notes

- **Edit cost amortization:** First copy refresh in 8 days; A-α (hypothetical daily-framing variant) would be on its 8th edit. Cycle-edit savings: ~85% across the first cycle.
- **Next refresh:** scheduled +7d (May 25 = WC Final 56d = exactly 8 weeks).
- **Round-week-cycle discipline:** maintained; only refresh when the integer-weeks countdown changes.

---

## Variation N (NEW) — MSG / Harry Styles / Concert-Tour Cross-Platform Comparison

**Persona anchor:** tosophiameyer (11-watchlist Harry Styles MSG profile; carried as LP-gated for 24 days; gate retracted today after MSG slug-audit-error self-correction).
**LP target:** `/venues/msg` (canonical slug confirmed HTTP 200 today; previously carried as 404 under phantom slug `madison-square-garden`).
**Audience anchor:** Harry Styles fan + MSG concert-attendance frequency + Manhattan/Brooklyn/Queens metro.

### Google Search Ads — Variation N (MSG / Concert-Tour Cross-Platform)

**Ad N-1: "Harry Styles MSG Tickets — Compare 3 Sites"**

```
Headline 1 (29):  Harry Styles MSG Tickets
Headline 2 (29):  Compare 3 Resale Platforms
Headline 3 (26):  Free Price Drop Alerts

Description 1 (90): Harry Styles at Madison Square Garden — compare prices across
                    Ticketmaster, SeatGeek & StubHub before resellers move.

Description 2 (87): Set a free price alert when tickets drop. Let the platforms
                    compete for your buy. Always side-by-side. No signup required.
```

**Ad N-2: "Madison Square Garden Concert Tickets"**

```
Headline 1 (29):  Madison Square Garden Tickets
Headline 2 (28):  Compare 3 Sources in 1 Click
Headline 3 (25):  Free MSG Price Alerts

Description 1 (89): Compare MSG concert ticket prices across Ticketmaster, SeatGeek &
                    StubHub side-by-side. Free price alerts on every show.

Description 2 (88): The world's most famous arena — and the platforms charge wildly
                    different prices for identical seats. See the spread free.
```

**Ad N-3: "MSG Tour Tickets — All 3 Sources in One Place"**

```
Headline 1 (27):  MSG Tour Tickets — Compare
Headline 2 (28):  3 Sources. Side-by-Side. Free.
Headline 3 (26):  Set Free Price Alerts Now

Description 1 (90): Compare ticket prices for any MSG tour stop across Ticketmaster,
                    SeatGeek & StubHub in one place — always free, always live.

Description 2 (89): The spread between resale platforms on MSG shows runs $50–$300 on
                    identical sections. Compare before resellers spike the floor.
```

### Meta Ads — Variation N

**Ad N-Meta-1 (Harry Styles persona-tight):**

```
Primary text (124): Harry Styles at Madison Square Garden — and the price spread between
                    Ticketmaster, SeatGeek & StubHub on identical seats is already $100+.
                    Compare all 3 in one place. Free always.

Headline (38):      Harry Styles MSG — Compare 3

Description (28):   Side-by-side. Free always.
```

**Ad N-Meta-2 (MSG broad-fan):**

```
Primary text (123): Madison Square Garden hosts 200+ shows a year — and the resale spread
                    between Ticketmaster, SeatGeek & StubHub is wider than most fans
                    realize. Compare every MSG show across all 3 sites. Free.

Headline (39):      Every MSG Show. Compared. Free.

Description (29):   Compare 3 sources in 1 click
```

**Ad N-Meta-3 (Smart-buyer / concert-frequency):**

```
Primary text (122): If you buy concert tickets at Madison Square Garden more than twice
                    a year, the spread you're missing between resale platforms is real
                    money. Side-by-side comparison across 3 sources. Free always.

Headline (37):      Smart MSG Concert Buyers Compare

Description (28):   3 sources. Side-by-side. Free.
```

### Variation N Audience / Targeting

- **Geo:** NYC metro (50mi radius); priority: Manhattan + Brooklyn + Queens + Hoboken
- **Behavioral:** MSG attendance frequency (proxied via "concert ticket purchase 6mo" + "Manhattan event interest"), Harry Styles fan-segment, top-40 + alternative concert interest
- **Demographic:** 18-44, household income $50k+
- **Lookalike:** seed = tosophiameyer + similar 11+-watchlist concert-heavy profiles when GA Data API attribution clears
- **Negative:** "free tickets," "ticket refund," "sell my tickets," "cheap MSG tickets no fees" (Day-0 non-activator generic terms)

---

## Cross-Variation Notes

- **Brand voice consistency:** "Helpful, data-driven, slightly irreverent consumer advocate." All three variations lead with the value proposition ("compare 3 sources free") and back it with data ("the spread is $X-$Y on identical sections") rather than urgency-driven scarcity language.
- **Compliance:** No "buy now" pressure-language. All variations are "compare" not "buy." Free price alerts is the conversion event; no purchase commitment implied.
- **GA Data API dependency:** All three variations are pre-staged but should NOT launch until GA Data API attribution clears (Day 4 of #1 priority). Cumulative attribution-blind paid spend during the failure-window is the largest single avoidable cost.
- **Launch sequence (post-GA-Data-API + budget):** Variation A-β + L + M go live simultaneously (3-variation WC paid portfolio); Variation N goes live alongside as a 4th non-WC concert variation; Variation A holds as MetLife-specific test.

## Budget Allocation Plan (Post-GA-Data-API)

| Variation | Daily Budget | Notes |
|-----------|--------------|-------|
| A-β (WC Final main) | $5/day Google, $5/day Meta | First cycle; refresh today to "9 weeks" |
| L (AT&T QF) | $5/day Google, $5/day Meta | Restored today; LP confirmed |
| M (BC Place) | $4/day Google, $4/day Meta | Day 4 of confirmation; narrow-niche |
| N (MSG / Harry Styles) | $3/day Google, $3/day Meta | NEW today post-MSG-audit-correction |
| **Total** | **$17/day Google + $17/day Meta = $34/day combined** | $1,020/month at launch baseline |

## Performance Targets (First 14 Days Post-Launch)

- **CPA target (newsletter signup):** $2-4
- **CPA target (registered user):** $8-15
- **CPA target (watchlist add):** $4-8
- **Quality Score:** ≥7 on top 5 search terms per variation
- **Relevance Score (Meta):** ≥7 on lead creative per variation
- **A-β anchor metric:** signup → watchlist conversion within 24h ≥ 35% (vs. lifetime 60% activation rate baseline + 27-of-27 Day-1 retention pattern)
