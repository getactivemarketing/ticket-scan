# Fresh Ad Creative — 2026-05-30 (Saturday)

_Agent 4 (Paid Ads Manager) — companion to `ads-daily-2026-05-30.md`_

**Brand voice:** Helpful, data-driven, slightly irreverent consumer advocate.
**USP:** Compare ticket prices across Ticketmaster, SeatGeek & StubHub in one place.

**Today's context driving creative:**
- Regime-change re-validated: 2nd inbound cluster in 3 days (+3 signups / +5 WL adds).
- NBA Finals at MSG = 3rd distinct organic adder (officialrizk72 added GM3 + GM1) → series-level intent; Variation N bid modifier restored +20% → +25%.
- WC = 12 days; T-12 "less than 2 weeks" copy fully load-bearing.
- Saturday = weekend buying-decision PEAK (+15-20% weekend bid modifier at launch).
- All creative is launch-staged; campaigns not live (gated on GA Data API + budget + `extractLowestPrice()` fix + production-main reconciliation).

---

## Variation N — NBA Finals at MSG (series-level) | #1 LAUNCH SLOT
**Landing page:** `/venues/msg` (HTTP 200; Place schema + `BreadcrumbList` LIVE Day 5)
**Bid modifier:** +25% on `knicks nba finals`, `nba finals msg`, `madison square garden finals` exact/phrase (restored from +20%; +30% reserved for a 4th organic adder)
**Angle:** Social proof (n=3 organic trackers) + series-level ("every game") + price comparison

### Google Search (RSA)
```
Headline 1 (30): NBA Finals at MSG Tickets
Headline 2 (30): Compare Every Game's Price
Headline 3 (30): TM vs SeatGeek vs StubHub
Headline 4 (30): Track GM1 Through GM7
Headline 5 (30): Don't Overpay at the Garden
Description 1 (90): Knicks Finals at the Garden? Compare all 3 sources in one place before you buy.
Description 2 (90): See every Finals game at MSG side by side. Set a price alert. Buy at the low.
```

### Meta (Facebook/Instagram)
```
Primary text (125): Knicks in the Finals at MSG. Smart buyers are already tracking every game's price across all 3 sources — are you?
Headline (40): Compare Every MSG Finals Game
Description (30): TM · SeatGeek · StubHub
```

### Meta — variant B (urgency + low-price)
```
Primary text (125): NBA Finals tickets at the Garden move fast. Compare Ticketmaster, SeatGeek & StubHub in one tap — and get alerted on the drop.
Headline (40): MSG Finals — Find the Low
Description (30): Price alerts, free
```

---

## Variation M — BC Place / World Cup 2026 | T-12 LIVE
**Landing page:** `/world-cup-2026/bc-place` (HTTP 200; Day 16 of confirmation)
**Bid modifier:** +15-20% Saturday weekend-peak; Canadian-market ad-group candidate (cross-sell w/ Toronto concert persona)
**Angle:** WC countdown urgency ("less than 2 weeks") + compare-all-sources

### Google Search (RSA)
```
Headline 1 (30): World Cup Tickets — 12 Days
Headline 2 (30): Compare Before They Spike
Headline 3 (30): BC Place Match Prices
Headline 4 (30): TM, SeatGeek & StubHub
Headline 5 (30): Less Than 2 Weeks Out
Description 1 (90): World Cup 2026 kicks off in under 2 weeks. Compare BC Place ticket prices now.
Description 2 (90): One search, all 3 sources. Find the lowest World Cup price before kickoff.
```

### Meta (Facebook/Instagram)
```
Primary text (125): World Cup 2026 is less than 2 weeks away. BC Place prices climb as kickoff nears — compare all 3 sources before they spike.
Headline (40): BC Place WC Tickets — Compare
Description (30): 12 days to kickoff
```

### Meta — variant B (Canadian-market cross-sell note)
```
Primary text (125): Heading to BC Place for the World Cup? Compare Ticketmaster, SeatGeek & StubHub in one place — and skip the markup.
Headline (40): Compare WC Tickets — Save
Description (30): All 3 sources, 1 search
```

---

## Variation A-β — MetLife / World Cup 2026 | "8 WEEKS" REFRESH + T-12 HYBRID
**Landing page:** `/world-cup-2026/metlife-stadium` (HTTP 200; "8 WEEKS" copy Day 6)
**Note:** Transitional carry day — next refresh forecast June 1 = "7 WEEKS" exact (2 days out)
**Angle:** Final-window countdown ("less than 2 weeks to first match") + compare value

### Google Search (RSA)
```
Headline 1 (30): MetLife World Cup Tickets
Headline 2 (30): 12 Days to First Match
Headline 3 (30): Compare All 3 Ticket Sites
Headline 4 (30): The Final Is at MetLife
Headline 5 (30): Don't Pay Resale Markup
Description 1 (90): The World Cup Final is at MetLife. Compare prices across 3 sources before they climb.
Description 2 (90): Under 2 weeks to kickoff. One search shows TM, SeatGeek & StubHub side by side.
```

### Meta (Facebook/Instagram)
```
Primary text (125): The 2026 World Cup Final is at MetLife — and it's less than 2 weeks out. Compare all 3 ticket sources before prices peak.
Headline (40): MetLife WC Final — Compare
Description (30): Under 2 weeks to go
```

### Meta — variant B (data/savings)
```
Primary text (125): Resale markups on World Cup tickets are brutal. We put Ticketmaster, SeatGeek & StubHub in one view so you buy at the real low.
Headline (40): Compare. Don't Overpay.
Description (30): MetLife · World Cup 2026
```

---

## Exploratory (staged, not in active rotation) — NEW persona surfaces

> Validated organically today (matt + cole) but **gated behind Variation-A LP-quality ship** (`/tickets/[slug]` ItemList dedup + Capital One Arena citySlug). Do NOT launch until LPs are clean — they currently ship rich-result garbage to these exact personas.

### US Open Tennis (from mattfleischer4, 2 Round-of-16 adds at Arthur Ashe)
```
Google H1 (30): US Open Tickets — Compare
Google H2 (30): Arthur Ashe Round of 16
Meta primary (125): US Open Round of 16 at Arthur Ashe — compare all 3 ticket sources before the marquee sessions sell out.
```

### Toronto Concert / Canadian Market (from coleesparrago, Don Toliver at Scotiabank Arena)
```
Google H1 (30): Scotiabank Arena Tickets
Google H2 (30): Compare Concert Prices
Meta primary (125): Concert at Scotiabank Arena? Compare Ticketmaster, SeatGeek & StubHub in one place — Toronto's smartest ticket move.
```

---

**Creative status:** 3 launch-ready variations (N, M, A-β) + 2 exploratory persona stubs staged. No live campaigns. Activation gated on GA Data API + budget approval + `extractLowestPrice()` direction-flip (L) + production-main reconciliation + ItemList dedup/citySlug ship (Variation A personas).
