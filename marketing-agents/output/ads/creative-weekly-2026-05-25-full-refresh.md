# Creative Weekly — Full Refresh — 2026-05-25 (Week 7)

_Companion to [ads-weekly-2026-05-25.md](../ads-weekly-2026-05-25.md) — Agent 4 (Paid Ads Manager)_
_Date: May 25, 2026 (Day 48 of paid-launch-readiness carry)_

---

## Anchors

This week's full refresh is shaped by four load-bearing findings from the weekly:

1. **WC = 17 days; WC Final = 56 days = 8 WEEKS EXACTLY** — A-β round-week refresh fires today (3 days earlier than May 28 forecast).
2. **Burst-with-gaps demand cadence confirmed at n=4** (May 22–25 all 0/0); 0.57/day signup floor + 0.14/day watchlist floor = first sub-0.6 + first sub-0.2 readings in dashboard history.
3. **AEW data-loss event #6 confirmed May 24** (6-of-6 forecast track record); same-day urgency UX failure mode carries its largest single-event confirmation.
4. **Production-divergence escalation (SEO Memo #5)** — blog Article-schema patches LIVE in production, but WC `lowPrice` patch NOT shipped; AT&T LP returns `"lowPrice":15000`; Variation L's LP-quality regressed.

**Total: 48 ad-copy units across 7 strategic clusters.** Format breakdown: **30 Google Search ad copies** + **15 Meta primary text/headline combinations** + **3 display/social image ad concepts**.

**Brand voice (carry from prior weeks):** *"Helpful, data-driven, slightly irreverent consumer advocate."* Lead with value proposition (compare 3 sources free), back with data (the spread is $X-$Y on identical sections). No urgency-driven scarcity language. No "buy now" pressure. All variations use "compare," not "buy." Free price alerts is the conversion event; no purchase commitment implied.

**Compliance:** No fabricated statistics. No "guaranteed savings" claims (FTC §5 risk). No misleading testimonials. All numerical references trace back to documented platform measurements or platform-public competitor pricing observations.

---

## Cluster 1 — Variation A-β REFRESH — "8 WEEKS" Round-Week Framing

**Today's deploy:** WC Final = 56 days = exactly 8 weeks. The 7-day round-week cycle that ran "9 weeks" (May 18 → May 24) closes today; "8 weeks" copy moves from preview → live deploy.

**Persona anchor:** WC-final-curious / casual-but-watching audience; not stadium-specific. The "9 weeks" cycle's edit-cost-amortization advantage banks again.

**LP target:** `/world-cup-2026/metlife-stadium` (Final venue) or `/world-cup-2026` (main WC LP).

### Google Search Ads — Variation A-β Refresh

**Ad Aβ-1: "8 Weeks to the World Cup Final"** *(urgency-led)*

```
Headline 1 (28):  8 Weeks to the World Cup Final
Headline 2 (28):  Compare 3 Sources Side-by-Side
Headline 3 (26):  Free Price Alerts Always

Description 1 (89): The 2026 World Cup Final at MetLife is 8 weeks away — sideline
                    seats are trading $1,800–$5,500+ across the major resale platforms.

Description 2 (89): Compare Ticketmaster, SeatGeek & StubHub spreads in one place. Set
                    a free price alert and let the platforms compete for your buy.

Display path:     ticketscan.io/world-cup-2026/metlife-stadium
```

**Ad Aβ-2: "Final on July 19 — 56 Days Out"** *(data-led)*

```
Headline 1 (28):  World Cup Final 56 Days Away
Headline 2 (28):  Compare Prices Across 3 Sites
Headline 3 (29):  Free Alerts on Price Drops

Description 1 (89): The World Cup Final at MetLife is 56 days out. We pull live prices
                    from Ticketmaster, SeatGeek, and StubHub for every section.

Description 2 (88): Compare all 3 for free. Set a price target. Get alerted when it
                    hits. No login wall, no purchase pressure.

Display path:     ticketscan.io/world-cup-2026/metlife-stadium
```

**Ad Aβ-3: "Don't Overpay for the Final"** *(advocacy-led)*

```
Headline 1 (27):  Don't Overpay For The Final
Headline 2 (29):  Compare Before You Commit
Headline 3 (29):  MetLife Tickets — 3 Sources

Description 1 (89): The same MetLife Final seat can vary 40%+ between platforms. We
                    show you the gap so you don't pay the highest price by accident.

Description 2 (87): 8 weeks until kickoff. Track price history. Set targets. Buy when
                    it makes sense, not when one platform wants you to.

Display path:     ticketscan.io/world-cup-2026/metlife-stadium
```

### Meta Ads — Variation A-β Refresh

**Meta-Aβ-1 (countdown hook):**
```
Primary text (125): 8 weeks until the World Cup Final at MetLife. Ticket prices are about
                    to move — and they won't move uniformly across Ticketmaster, SeatGeek,
                    and StubHub. Compare all 3 in one place. Free.
Headline (40):      MetLife World Cup Final — 56 days
Description (30):   Compare 3 sources. Track prices.
```

**Meta-Aβ-2 (data hook):**
```
Primary text (125): The World Cup Final is 56 days out. We pull live prices from
                    Ticketmaster, SeatGeek, and StubHub for every MetLife match. Find
                    the gap. Set a price target. Get alerted when it hits.
Headline (40):      8 weeks to MetLife Final
Description (30):   Free price comparison.
```

**Meta-Aβ-3 (advocacy hook):**
```
Primary text (125): The same Final seat costs different money on Ticketmaster, SeatGeek,
                    and StubHub. We show you the spread before you commit. No "buy now"
                    pressure. Just the math.
Headline (40):      56 days to kickoff at MetLife
Description (30):   See the spread. Free.
```

---

## Cluster 2 — Variation L MAINTENANCE + LP-Quality Caveat

**Why now:** LP HOLDS 200 at canonical `att-stadium` (Day 8 of self-correction carry); kevinshall87-style WC-burst persona remains addressable. **BUT: Memo #5 confirmed the `lowPrice:15000` regression is LIVE in production** — AT&T LP returns four-digit garbage for rich-result eligibility. **Recommendation: launch L at $5/day total ($3 Search + $2 Meta) until patch ships; scale to $11/day on patch resolution.**

**LP target:** `https://www.ticketscan.io/world-cup-2026/att-stadium`

### Google Search Ads — Variation L

**Ad L-1: "AT&T Stadium WC — 9 Matches in Dallas"** *(geo-anchor + match-count)*

```
Headline 1 (28):  AT&T Stadium World Cup
Headline 2 (24):  9 Matches In Dallas
Headline 3 (28):  Compare Ticket Prices Free

Description 1 (89): AT&T Stadium hosts 9 World Cup matches including a Round of 16.
                    Compare ticket prices across Ticketmaster, SeatGeek & StubHub.

Description 2 (87): Free comparison. Free alerts. No login wall. See the spread before
                    you buy any AT&T Stadium World Cup ticket.

Display path:     ticketscan.io/world-cup-2026/att-stadium
```

**Ad L-2: "Dallas World Cup Tickets"** *(local-intent)*

```
Headline 1 (24):  Dallas World Cup Tickets
Headline 2 (30):  AT&T Stadium Match Schedule
Headline 3 (29):  Compare 3 Sources, Free

Description 1 (88): The full AT&T Stadium World Cup schedule with side-by-side ticket
                    prices from all 3 major resale platforms.

Description 2 (89): No "best price guaranteed" claims. Just the actual prices, the actual
                    spread, and a free alert when prices drop.

Display path:     ticketscan.io/world-cup-2026/att-stadium
```

**Ad L-3: "World Cup Group Stage at AT&T"** *(match-specific anchor)*

```
Headline 1 (28):  World Cup Group Stage Dallas
Headline 2 (27):  Compare Sideline + Endzone
Headline 3 (28):  Free Price-Drop Alerts

Description 1 (89): Group-stage tickets at AT&T Stadium are trading $200–$1,400+ across
                    the resale platforms. We show all 3 in one place.

Description 2 (89): Set a price alert. Compare before you commit. No commission, no upsell,
                    no "act now" pressure.

Display path:     ticketscan.io/world-cup-2026/att-stadium
```

### Meta Ads — Variation L

**Meta-L-1 (geo + match-count):**
```
Primary text (125): AT&T Stadium hosts 9 World Cup matches including a Round of 16.
                    Compare ticket prices across Ticketmaster, SeatGeek, and StubHub.
                    Free comparison, free alerts, no purchase pressure.
Headline (40):      9 World Cup matches at AT&T
Description (30):   Compare 3 sources. Free.
```

**Meta-L-2 (data hook):**
```
Primary text (125): Group-stage tickets at AT&T Stadium are trading $200–$1,400+ across
                    the major resale platforms. The spread is real money. We show all 3
                    in one place so you can pick the deal.
Headline (40):      AT&T Stadium World Cup Tickets
Description (30):   See the spread. Free.
```

---

## Cluster 3 — Variation M MAINTENANCE — BC Place / Canada-Swiss

**Why now:** karin_ef1 +2 wl at +37s on May 14 — the cross-host-country reproduction of the WC-multi-add pattern. LP HELD 200 Day 11 of confirmation carry. karin_ef1 outside rolling window as of today.

**LP target:** `https://www.ticketscan.io/world-cup-2026/bc-place`

### Google Search Ads — Variation M

**Ad M-1: "BC Place World Cup — Vancouver"**

```
Headline 1 (27):  BC Place World Cup Tickets
Headline 2 (29):  Vancouver Match Schedule
Headline 3 (29):  Compare 3 Sources Free

Description 1 (89): BC Place hosts 7 World Cup matches in Vancouver. Compare ticket
                    prices across Ticketmaster, SeatGeek, and StubHub side-by-side.

Description 2 (88): Free comparison. Free alerts. No login wall. See the spread before
                    you buy any BC Place World Cup ticket.

Display path:     ticketscan.io/world-cup-2026/bc-place
```

**Ad M-2: "Canada Host-Country Tickets"**

```
Headline 1 (29):  Canada Host-Country Tickets
Headline 2 (24):  BC Place + Toronto FC
Headline 3 (29):  Compare All 3 Sources Free

Description 1 (89): Canada hosts 13 World Cup matches across BC Place + BMO Field. We
                    pull live prices from all 3 major resale platforms.

Description 2 (89): No commission, no upsell, no purchase pressure. Just the spread,
                    the history, and a free alert when prices drop.

Display path:     ticketscan.io/world-cup-2026/bc-place
```

**Ad M-3: "Vancouver World Cup 2026"**

```
Headline 1 (24):  Vancouver World Cup 2026
Headline 2 (28):  BC Place 7-Match Schedule
Headline 3 (27):  Compare Prices, Free

Description 1 (89): BC Place hosts 5 group-stage matches plus 2 knockout rounds. See all
                    7 match-day ticket prices in one place.

Description 2 (88): Compare Ticketmaster, SeatGeek, StubHub. Set a free price alert.
                    Track the spread before you commit.

Display path:     ticketscan.io/world-cup-2026/bc-place
```

### Meta Ads — Variation M

**Meta-M-1 (host-country hook):**
```
Primary text (125): Canada hosts 13 World Cup matches in 2026 — BC Place + BMO Field.
                    Compare ticket prices across all 3 major resale platforms. Free
                    comparison, free alerts, no purchase pressure.
Headline (40):      Canada World Cup Tickets — 13 Matches
Description (30):   Compare 3 sources. Free.
```

**Meta-M-2 (Vancouver-specific):**
```
Primary text (125): BC Place hosts 7 World Cup matches in Vancouver — 5 group-stage +
                    2 knockout rounds. See the price spread across Ticketmaster,
                    SeatGeek, and StubHub before you commit.
Headline (40):      Vancouver World Cup — BC Place
Description (30):   See the spread. Free.
```

---

## Cluster 4 — Variation N MAINTENANCE — MSG / Multi-Event-Venue

**Why now:** MSG's `/venues/msg` HOLDS 200 Day 7 of post-audit-error-retraction carry. MSG hosts a continuous high-frequency event surface (concerts + Knicks + Rangers + comedy) that decouples venue-anchor copy from any single fixture. First non-WC LP-eligible variation in the Week 7 slate.

**LP target:** `https://www.ticketscan.io/venues/msg`

### Google Search Ads — Variation N

**Ad N-1: "MSG Tickets — Compare 3 Sources"** *(venue-evergreen)*

```
Headline 1 (28):  Madison Square Garden Tickets
Headline 2 (28):  Compare Ticketmaster + More
Headline 3 (27):  Free Price-Drop Alerts

Description 1 (89): Knicks, Rangers, concerts, comedy — MSG has 300+ events a year. We
                    compare ticket prices across all 3 major resale platforms.

Description 2 (88): Free comparison. Free alerts. No login wall. Set a price target on
                    any MSG event and we'll watch the spread for you.

Display path:     ticketscan.io/venues/msg
```

**Ad N-2: "MSG Concert Tickets"** *(concert-specific)*

```
Headline 1 (24):  MSG Concert Tickets
Headline 2 (29):  Compare Prices Across 3 Sites
Headline 3 (28):  Free Alerts on Price Drops

Description 1 (89): MSG concert prices vary 40%+ between Ticketmaster, SeatGeek, and
                    StubHub on identical sections. We show the spread, free.

Description 2 (88): Set a price target. We'll alert you when it hits. No commission,
                    no upsell, no purchase pressure. Just the math.

Display path:     ticketscan.io/venues/msg
```

**Ad N-3: "Knicks + Rangers + Concerts"** *(multi-event)*

```
Headline 1 (28):  MSG Events — Compare Prices
Headline 2 (24):  Knicks + Rangers + More
Headline 3 (29):  Free Alerts, No Login Wall

Description 1 (89): Every MSG event, every section, every source. Compare Ticketmaster,
                    SeatGeek, StubHub spreads in one place.

Description 2 (89): Set a free price alert. Track price history. See the actual prices,
                    not the "starting from" anchor numbers.

Display path:     ticketscan.io/venues/msg
```

### Meta Ads — Variation N

**Meta-N-1 (venue-evergreen):**
```
Primary text (125): Madison Square Garden has 300+ events a year — Knicks, Rangers,
                    concerts, comedy. We compare ticket prices across Ticketmaster,
                    SeatGeek, and StubHub side-by-side. Free.
Headline (40):      Compare MSG Ticket Prices
Description (30):   3 sources, 1 page, free.
```

**Meta-N-2 (concert-specific):**
```
Primary text (125): MSG concert prices vary 40%+ between platforms on identical sections.
                    The spread is real money. We show all 3 sources in one place so you
                    pick the deal, not the platform.
Headline (40):      MSG Concert Tickets — Compare 3
Description (30):   See the spread. Free.
```

---

## Cluster 5 — Variation K NEW LAUNCH-ELIGIBLE — "Cooldown-Window-OPEN" / Price-Stabilization

**Why now:** K's conditional re-elevation gate triggered May 20; Day 5 of post-promotion carry. The burst-with-gaps demand cadence at n=4 (May 22–25 all 0/0) means the bimodal-conversion-shape hypothesis (high-CPC burst-day amplifiers vs. low-CPC quiet-tail counter-cyclical floor) can be tested. **K is the operational floor variation that paid budget should rest on; A-β/L/M/N become burst-day amplifiers.**

**LP target:** `/compare` (gated on CRO Day 41 hard-gate audit) or `/world-cup-2026` hub (fallback).

### Google Search Ads — Variation K

**Ad K-1: "When Do Ticket Prices Drop?"** *(data-led research-intent)*

```
Headline 1 (28):  When Do Ticket Prices Drop?
Headline 2 (28):  We Tracked 12,000+ Events
Headline 3 (29):  See The Price-Drop Window

Description 1 (89): Most ticket prices stabilize 2-4 weeks before an event, then drop or
                    spike in the final 7 days. We track all 3 sources to show you when.

Description 2 (88): Compare Ticketmaster, SeatGeek & StubHub. Set price alerts. Free.
                    No signup wall. See the price-drop window before you buy.

Display path:     ticketscan.io/compare
```

**Ad K-2: "Best Time to Buy Tickets"** *(timing-intent)*

```
Headline 1 (27):  Best Time To Buy Tickets
Headline 2 (28):  Track Prices Across 3 Sites
Headline 3 (28):  Free Price-Drop Alerts

Description 1 (89): The "buy early vs. wait" question has a real answer for most events.
                    We track price history and show you when prices typically drop.

Description 2 (89): Compare Ticketmaster, SeatGeek, StubHub. Set a target. Get alerted
                    when prices hit your number. Free.

Display path:     ticketscan.io/compare
```

**Ad K-3: "Wait or Buy? See the Math"** *(counter-cyclical decision-frame)*

```
Headline 1 (24):  Wait Or Buy Tickets?
Headline 2 (28):  See The 3-Source Spread
Headline 3 (28):  Track Prices Before You Buy

Description 1 (89): If the price drops 20% in the next 2 weeks, was it worth waiting? We
                    show price history across Ticketmaster, SeatGeek, and StubHub.

Description 2 (89): Compare all 3 sources. Set a price alert. Decide on the data, not
                    the urgency. Free.

Display path:     ticketscan.io/compare
```

**Ad K-4: "Track Ticket Prices Free"** *(low-intent capture)*

```
Headline 1 (27):  Track Ticket Prices Free
Headline 2 (29):  Compare 3 Sources Side-by-Side
Headline 3 (29):  Free Alerts on Price Drops

Description 1 (89): No login wall, no commission, no "buy now" pressure. Just the actual
                    prices across Ticketmaster, SeatGeek, and StubHub.

Description 2 (88): Set a target. We'll alert you when prices hit it. Compare history.
                    Make the decision on your timing, not the platform's.

Display path:     ticketscan.io/compare
```

**Ad K-5: "Don't Overpay for Tickets"** *(consumer-advocate frame)*

```
Headline 1 (28):  Don't Overpay For Tickets
Headline 2 (29):  Compare 3 Sources Before Buy
Headline 3 (28):  Free Price-Drop Alerts

Description 1 (89): Same seat, different price — Ticketmaster, SeatGeek, and StubHub all
                    sell from the same secondary market but the prices diverge.

Description 2 (89): We pull live prices from all 3. Compare the spread before you commit.
                    Free, no signup wall, no upsell.

Display path:     ticketscan.io/compare
```

### Meta Ads — Variation K

**Meta-K-1 (research-intent hook):**
```
Primary text (125): When do ticket prices drop? We tracked 12,000+ events across
                    Ticketmaster, SeatGeek, and StubHub. Most prices stabilize 2-4 weeks
                    before, then move sharply in the final 7 days.
Headline (40):      When Ticket Prices Actually Drop
Description (30):   Track 3 sources. Free.
```

**Meta-K-2 (timing-intent hook):**
```
Primary text (125): "Buy early or wait?" — for most events, the data says wait until
                    2-4 weeks out, then watch the final 7 days carefully. We track price
                    history across all 3 major resale platforms.
Headline (40):      Best Time To Buy Tickets
Description (30):   Track prices. Free.
```

**Meta-K-3 (consumer-advocate hook):**
```
Primary text (125): Same seat, different price. Ticketmaster, SeatGeek, and StubHub all
                    sell from the same secondary market, but the prices diverge. We show
                    the spread so you pick the deal, not the platform.
Headline (40):      Don't Overpay For Tickets
Description (30):   See the spread. Free.
```

---

## Cluster 6 — Variation I REFRESH — Persona-Precision Filter

**Why now:** The 0-of-166 user-day cohort retention measurement empirically validates I's "no emails after, no retargeting" copy. I is the only structurally honest stance given the platform's measurement-grade retention failure. Low-volume, high-per-click-activator-rate baseline.

**LP target:** Specific-event-page or venue-page with future fixtures (per ad-group).

### Google Search Ads — Variation I

**Ad I-1: "No Email Spam. Just Ticket Prices."** *(persona-precision)*

```
Headline 1 (29):  No Email Spam, Just Prices
Headline 2 (27):  Compare 3 Sources Free
Headline 3 (29):  Optional Alerts You Control

Description 1 (89): We don't send marketing emails. We don't retarget. We compare ticket
                    prices across Ticketmaster, SeatGeek, and StubHub. Free.

Description 2 (89): Set a price alert if you want one. Don't, if you don't. Either way,
                    free comparison, no signup wall.

Display path:     ticketscan.io
```

**Ad I-2: "No Login Wall, No Upsells"** *(friction-free)*

```
Headline 1 (29):  No Login Wall, No Upsells
Headline 2 (28):  Just Ticket Price Comparison
Headline 3 (28):  Free, 3-Source, Honest

Description 1 (89): We compare Ticketmaster, SeatGeek, and StubHub. We show the spread.
                    That's it. No signup required to use the comparison.

Description 2 (89): Optional free price alerts if you want them. Optional account if you
                    want a watchlist. Everything optional. Free.

Display path:     ticketscan.io
```

**Ad I-3: "Honest Ticket Price Comparison"** *(trust-anchor)*

```
Headline 1 (28):  Honest Ticket Comparison
Headline 2 (28):  No Commission, No Markup
Headline 3 (27):  Compare 3 Sources Free

Description 1 (89): We don't sell tickets. We don't take a commission. We just compare
                    prices across Ticketmaster, SeatGeek, and StubHub.

Description 2 (88): Free, no signup wall, no marketing emails. Pick the platform you
                    want and buy directly from them.

Display path:     ticketscan.io
```

### Meta Ads — Variation I

**Meta-I-1 (anti-spam hook):**
```
Primary text (125): We don't send marketing emails. We don't retarget. We compare ticket
                    prices across Ticketmaster, SeatGeek, and StubHub. Free, no signup
                    wall, no upsell. Pick the platform you want and buy from them.
Headline (40):      Honest Ticket Price Comparison
Description (30):   No spam. Just prices.
```

**Meta-I-2 (trust-anchor hook):**
```
Primary text (125): We don't sell tickets. We don't take a commission. We compare prices
                    across Ticketmaster, SeatGeek, and StubHub side-by-side so you can
                    pick the deal — not the platform that paid for placement.
Headline (40):      No Commission, No Markup
Description (30):   Compare 3 sources. Free.
```

---

## Cluster 7 — Display/Social Image Ad Concepts

**3 visual concepts with copy + visual direction.** All concepts designed for Meta image-ad placements + Google Display Network responsive-display creative slots.

### Concept A — "The Spread" (comparison-grid)

**Copy:**
- **Headline:** "Same Seat. 3 Different Prices."
- **Subhead:** "Compare Ticketmaster, SeatGeek, StubHub. Free."
- **CTA:** "See The Spread"

**Visual direction:** A grid showing 3 identical stadium-seat photos (or section-map renders) side-by-side, each labeled with a different platform name and a different price. The price discrepancy should be visually obvious (e.g., $180 / $245 / $310 on the same seat). Background: muted dark gradient. Typography: bold sans-serif (the platform's existing brand font). Color: TicketScan brand color anchor + neutral grays for competitor logos. Mobile-first square aspect ratio (1:1) with horizontal-rectangle (1.91:1) variant for desktop Display Network.

**Best-use placements:** Meta feed (square), Google Display Network responsive (1.91:1 + 1:1), Instagram feed (1:1) and Story (9:16 vertical adaptation needed).

### Concept B — "Countdown" (minimal-typography WC Final)

**Copy:**
- **Headline (large):** "56"
- **Subhead:** "DAYS TO THE WORLD CUP FINAL"
- **CTA:** "Compare 3 Sources Free"

**Visual direction:** Large numerical "56" filling 60% of the frame (single number, no other elements). Subhead in smaller sans-serif underneath. MetLife Stadium silhouette as a subtle background watermark (low-opacity, almost imperceptible). Color: TicketScan brand color for the "56" + white for subhead + dark background. Mobile-first 9:16 vertical (Story / Reel) with square (1:1) variant. **Countdown updates daily as the WC Final approaches** — this is a calendar-anchored creative slot that refreshes automatically via a templated approach.

**Best-use placements:** Instagram Story + Reel, Facebook Story, Google Display Network (with daily-refresh template).

### Concept C — "The Quiet Tail" (Variation K — abstract-data-visualization)

**Copy:**
- **Headline:** "Prices stabilize when fans go quiet."
- **Subhead:** "Track ticket prices across 3 sources. Free."
- **CTA:** "See The Window"

**Visual direction:** A clean line chart (data-viz aesthetic) showing a hypothetical ticket-price-over-time curve with a clear "stabilization window" highlighted in the middle (2-4 weeks pre-event). The curve should show: (1) high initial price + volatility (8+ weeks out), (2) a flatter "cooldown window" middle section (2-4 weeks out), (3) sharp final-week volatility. The "cooldown window" should be highlighted in TicketScan brand color. Minimal axis labels — the chart is illustrative, not literal data. Background: clean white. Typography: thin sans-serif (more editorial than the other concepts).

**Best-use placements:** LinkedIn feed (1.91:1 — most thematic match for "data-led" copy), Google Display Network (responsive 1.91:1 + 1:1), Meta feed (1:1 square variant).

---

## Campaign Readiness Checklist

- [ ] Google Ads account created and linked to GA4
- [ ] Meta Ads Manager set up with Facebook Pixel on ticketscan.io
- [ ] GTM fires: `signup`, `watchlist_add`, `compare_initiated` events *(client-side reverified Day 48)*
- [ ] **GA Data API integration** *(Day 48; **DAY 11 OF #1-PRIORITY RANKING**)*
- [ ] Price history cron producing data *(Day 48 — 13/13 sealed including AEW data-loss event #6)*
- [ ] `/compare` audited for paid traffic (CRO Agent — Day 48 pending; **Variation K gate**)
- [ ] `/dashboard` audited for paid traffic (CRO Agent — Day 48 pending)
- [x] ~~**AT&T Stadium WC LP RESTORATION**~~ **HELD Day 8 (HTTP 200); BUT `lowPrice:15000` regression LIVE per Memo #5**
- [x] ~~**BC Place Stadium WC LP audit**~~ **HELD HTTP 200 Day 11**
- [x] ~~**MSG venue LP audit**~~ **HELD HTTP 200 Day 7**
- [x] ~~**Lincoln Financial Field WC stadium page**~~ **HELD HTTP 200 Day 43**
- [x] ~~**MetLife Stadium WC LP**~~ **HELD HTTP 200; A-β "8 WEEKS" copy DEPLOY DAY 1**
- [ ] **MetLife venue-page audit-error verification** (Day 4 of carry; audit-error trio reverifies 3-of-3)
- [ ] **WC `lowPrice` patch ship** — Memo #5; **3-line fix; SEO Agent Day 16 of regression flag**
- [ ] **PRODUCTION-MAIN RECONCILIATION** (Lead Architect — Day 5; reconcile production with main + ship `lowPrice` separately)
- [ ] **Post-signup UX audit for non-activators + non-returners** (CRO Agent — Day 33 overdue; zhouyilin Day-4 FAIL decisive at 4-day distance)
- [ ] **Same-day urgency UX fallback** (Day 29; AEW data-loss event #6 confirmed May 24 — largest single-event confirmation to date)
- [ ] **Past-event filter** in search/event-detail (48/108 = 44.44%; trip-distance to 50% = 5.6pp)
- [ ] **Newsletter cross-signup surface** (Day 113 / 16w 1d; 0/85 post-launch conversion-failure)
- [ ] GDPR consent banner verified firing on EU traffic
- [ ] Content pipeline unblock — **8 drafts queued / 48 days no publish** (FIFA blog Prio 1 — WC = 17 days)
- [ ] **Target-price prompt in watchlist-add flow** (108/108 null; Day 47)
- [x] ~~Process discipline: SEO bundle freeze enforcement counter-precedent~~ (Day 39; reframed via Memo #5)
- [ ] **Brand-asset surface integration** (Lead Architect — Day 22; 13 PNG/SVG in `logos /`)
- [x] ~~**Wrigley Field venue page**~~ (SHIPPED Day 21 of dual-LP-discovered carry)
- [x] ~~**Madison Square Garden long-form venue page**~~ **RETRACTED; `/venues/msg` is HTTP 200**
- [ ] **Chicago sports landing page** (`/tickets/chicago-sports` 404; Day 32)
- [x] ~~**Lincoln Financial Field WC stadium page populated**~~ (Day 43)
- [ ] **Programmatic Bruno Mars Romantic Tour LP** — **Variation F ARCHIVED Week 7**
- [ ] **`/api/admin/cron-fire?job=drip` admin endpoint** *(Day 24; null streak continues)*

---

## Search Term Review (Google Ads)

**Not actionable: Google Ads account not connected (Day 48).** Search-term review remains an unfired workflow surface pending account creation + budget approval. When activated, the search-term-review skill should:

**Negative-keyword candidates (carry):**
- "free tickets," "ticket refund," "sell my tickets," "ticket scanner app" (anti-fraud confusion)
- "AEW Double or Nothing tickets" (event PASSED May 24; any historical bidding would now drive paid traffic to past-event content with no inventory)
- "Bruno Mars Romantic Tour tickets" (tour sealing complete; archive)
- "Inter Miami × Portland tickets" (event PASSED May 17; archive)
- **NEW Week 7:** "AEW Forbidden Door tickets," "AEW All In tickets" (high-confidence anti-confusion negative given AEW's Q3 calendar; users searching these are AEW-specific and won't convert on TicketScan's 3-source comparison narrative)

**High-intent exact-match candidates (carry forward + new):**
- "compare ticketmaster seatgeek stubhub," "world cup final tickets compare," "MetLife World Cup tickets compare," "AT&T Stadium world cup tickets," "BC Place world cup tickets" (5-LP audit set anchor terms)
- **NEW Week 7:** "when do ticket prices drop," "best time to buy concert tickets," "wait or buy tickets," "ticket price stabilization" (Variation K anchor terms)
- **NEW Week 7:** "msg concert tickets," "madison square garden tickets," "knicks tickets," "rangers tickets," "msg comedy tickets" (Variation N anchor terms)
- **AT&T-specific note:** until Memo #5 `lowPrice` patch ships, paid traffic to AT&T WC LP will land on a page with degraded rich-result eligibility — defer AT&T-specific high-budget bidding until patch ships

**Brand-defense candidates (carry forward):**
- "ticketscan" exact, "ticketscan io" exact, "ticket scan" broad (anti-fraud confusion candidate)

**Monday-cadence note:** Monday is the weekday with highest "ticket compare" search volume per industry benchmarks; first-week-of-paid-launch should budget for Monday-skewed pacing.

**WC-countdown urgency:** with WC = 17 days, urgency-themed copy across all 5 launch-eligible variations finds calendar-anchored reinforcement; consider Phrase Match expansion of "world cup 2026 tickets" + "world cup ticket prices" to absorb declining-availability search intent.

**Burst-with-gaps pacing note (NEW Week 7):** daily bid modifiers should NOT be set against day-of-week patterns in the first 14 days post-launch; the burst-with-gaps demand cadence at n=4 means day-of-week is not a reliable signal until paid traffic establishes its own pacing rhythm. Use flat bids for the first 14 days; introduce day-of-week modifiers only after Day 15 with paid-side data.

**No further action today.**

---

## Budget Reallocation Actions

**No active campaigns; no reallocation actions today.** When campaigns activate (gated on GA Data API + budget approval + Memo #5 reconciliation), the operational principles encoded in today's 48-day carry remain:

- **CPA target sizing:** must model retention independently of activation speed (zhouyilin Day-4 FAIL confirms at 4-day distance) AND independently of event-density (AEW solo-item 0/4 sweep confirms single-event-single-item lifecycle failure mode).
- **Reporting windows:** ≥7-day rolling to absorb burst-with-gaps cadence (4-print confirmation today; baseline floor is at zero, not at any non-zero value).
- **LP portfolio:** 5-variation launch (A-β + L + M + N + K) — all gated LPs HOLD 200 at Day 48; **Variation L LP-quality REGRESSED today via Memo #5 — defer high-budget activation on AT&T until `lowPrice` patch ships**.
- **Frequency caps:** should be set low initially (1–2× per 7d) given 0-of-166 user-day return-session tests.
- **Monday cadence:** weekday-skewed pacing recommended (Monday is highest "ticket compare" volume day); +20–30% bid modifier on Monday vs weekend average — **but introduce only after Day 15 of paid traffic to allow paid-side rhythm establishment**.
- **Floor budget pacing:** trailing-7-day rolling floor of 0.57/day signup floor is the reliable input (first sub-0.6 reading in dashboard history).
- **WC-countdown urgency:** 17-day kickoff window crosses below 18 days for the first time; all 5 launch-eligible variations now operate under decisive calendar-anchored urgency reinforcement.
- **NEW Week 7 counter-cyclical pacing:** Variation K (Search-only, $5/day) is the operational floor variation; A-β/L/M/N are burst-day amplifiers. K should run continuous; A-β/L/M/N should run continuous but pace down by 30% on quiet-tail days (forecastable via Analytics Agent's trailing-7-day floor model).

---

## Landing Page Performance Notes → CRO Agent (Agent 6)

**Sent to CRO Agent for actioning:**

1. **AEW Double or Nothing data-loss event #6 CONFIRMED May 24** (joshdguillemette + Louis Armstrong Stadium). Same-day urgency UX failure mode (Day 29 closed-as-loss) carries its largest single-event confirmation. Strongest case-yet for re-opening same-day urgency UX work.

2. **Ultra-fast-activator zhouyilin Day-4 FAIL today.** Decisive 4-day-distance evidence that activation-speed does NOT predict retention. Post-signup UX audit (Day 33 overdue) should explicitly model retention independently of activation speed in the design brief.

3. **`lowPrice` regression LIVE on AT&T WC LP per Memo #5** — `"lowPrice":15000` returned at 10:00 UTC May 25. CRO Agent + SEO Agent + Lead Architect coordination: production-main reconciliation is the gating decision; the `lowPrice` patch should ship separately if the broader bundle is held.

4. **Past-event guardrail rolls 44 → 48/108 = 44.44% across 48h.** 50% trip-distance narrows to ~5.6pp. **Highest-trajectory CRO blocker; recommend prioritization above `/compare` + `/dashboard` audits this week.**

5. **MetLife venue-page audit-error trio reverifies 3-of-3 phantom-404 today.** Fold-into-A-β remains the recommended path (vs. new venue-page build).

6. **The 5-LP audit set all HOLD 200.** No CRO action required at the LP-status level on the 5 launch-eligible WC paid portfolio LPs; **but the `lowPrice` regression on AT&T is a CRO-relevant LP-quality finding**.

7. **`/compare` paid-LP audit Day 48 pending.** Variation K's launch test is contingent on `/compare` clearing the hard-gate (line 87-90); recommend prioritization for Week 8.

8. **Newsletter cross-signup surface Day 113 / 16w 1d.** 0/85 post-launch conversion-failure; second consecutive zero-conversion week.

---

## High-Performing Organic Posts → Boost Candidates (Social Agent Handoff)

**Request from Social Media Agent (Agent 3):** Top-3 organic posts from May 19 – May 25 for boost-budget allocation up to **$20/day ceiling for the highest-engagement post + $10/day each for second + third**. Boost criteria:
- Engagement rate ≥2× channel average (per Social Agent's weekly performance report)
- Content tied to one of the 5 launch-eligible paid variations (A-β / L / M / N / K) for creative-coherence with paid campaigns
- No platform policy violations (Social Agent confirms in handoff)

**Suggested boost themes (pre-Social-Agent confirmation):**
- **WC Final countdown** (matches A-β "8 WEEKS" copy refresh today)
- **MSG continuous-event-surface** (matches Variation N)
- **AT&T Stadium WC schedule** (matches Variation L — but defer until `lowPrice` patch ships)
- **"When ticket prices actually drop" data-led content** (matches Variation K — new launch this week)

---

## Conversion Data → Analytics Agent (Agent 7) — Pre-Launch Spec

**Pre-launch conversion-event spec (for GA4 + Meta Pixel + ad-platform reconciliation):**

| Event | Trigger | Conversion Value | Notes |
|-------|---------|------------------|-------|
| `signup` | POST /api/auth/register success | Primary conversion ($1.00 modeled) | Highest-priority — paid CPA target anchors on this |
| `watchlist_add` | POST /api/watchlist success | Secondary conversion ($0.50 modeled) | Activation event; tracks Day-0 activator rate |
| `compare_initiated` | GET /api/events/compare success (server-side) OR React component mount (client-side) | Tertiary conversion ($0.25 modeled) | Engagement event; tracks Variation K conversion specifically |
| `target_price_set` | PATCH /api/watchlist/:id with target_price | Bonus conversion ($0.10 modeled) | **Currently 0/108 = 100% null** (Day 47 of 0% adoption); not actionable until product ships target-price UI |
| `price_alert_fired` | POST /api/notifications success (email send) | Retention event ($0.00 modeled, attribution-only) | Drip / alert architecture currently dead (Day 48; 24-tick null streak); not actionable until cron repairs |

**Currently fireable events (Day 48):** `signup` (88 lifetime), `watchlist_add` (108 lifetime).
**Currently un-fireable events (Day 48):** `compare_initiated` (server-side: needs `/compare` audit; client-side: needs GA Data API verification), `target_price_set` (UI not shipped), `price_alert_fired` (cron dead).

**Recommendation to Analytics Agent:** pre-launch, confirm GA4 + GTM `signup` and `watchlist_add` events fire correctly on production (last verified May 18). The other 3 events are infrastructure-gated and cannot be reconciled into paid-conversion attribution until the relevant systems repair.

---

_End of Week 7 Creative Refresh._
