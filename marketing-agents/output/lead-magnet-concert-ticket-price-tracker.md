# Lead Magnet — Concert Ticket Price Tracker Template (Spreadsheet)

**Format:** Google Sheets / Excel (.xlsx) workbook
**Audience:** Concert-goers actively shopping for summer 2026 tour tickets (Billie Eilish, Kendrick Lamar, Tyler the Creator, Chappell Roan, Olivia Rodrigo, Sabrina Carpenter, etc.) — and the broader population of buyers tracking 2+ events at once.
**Conversion goal:** Email capture → 4-email tracker-onboarding sequence → registered user with watchlist → recurring re-engagement (spreadsheet users open their tracker weekly during buying windows; PDF users read once and forget).
**Why this format this week:** Prior two magnets (4/13 World Cup PDF guide; 4/20 Cheat Sheet PDF) both ship-once-read-once. A spreadsheet is a *tool* — the audience opens it repeatedly, which builds product-of-record positioning week-over-week without us sending a single email. It's the first lead magnet in the program with non-zero recurring engagement structure.
**Pairs with:** Monday 4/27 blog publish — *Summer Concert Tour 2026 Tickets: When to Buy, Platform-by-Platform*. The blog teaches the methodology; the tracker *is* the methodology in spreadsheet form. Blog → CTA → tracker capture.
**Production status:** Content + cell layout + formula spec below. Design/build = ~2 hours in Google Sheets (template tab + sample data tab + formulas + conditional formatting + brand styling). Excel export can be derivative.

---

## Asset overview

**Filename:** `TicketScan-Concert-Price-Tracker-2026.xlsx` (and Google Sheets equivalent)
**Tabs (4):**
1. **Start Here** — instructions + the 5-rule methodology
2. **My Concerts** — the live tracker (pre-filled with formulas, blank for user input)
3. **Sample Data** — pre-populated example showing tracker in use
4. **Reference: Avg Concert Prices 2026** — Pollstar Q1 2026 + venue-class price floors (read-only)

**Distribution:**
- Capture form on `/blog/summer-concert-tour-2026-ticket-buying-guide` (CTA: "Download the tracker")
- Inline CTA in 4 evergreen concert posts (existing posts: best-time-to-buy-concert-tickets, taylor-swift-eras-tour-tickets, last-minute-ticket-deals-guide, plus the Monday publish)
- Site-wide popup (delay 30s, exit-intent) — tracker download
- Newsletter feature in Tue 4/28 issue (paired with the Monday Summer Concert blog post send)
- Email signature link on all transactional + drip emails for two weeks

---

## Tab 1: "Start Here" (instructions tab)

### Header (top of sheet)

> # Concert Ticket Price Tracker 2026
> *Built by TicketScan · ticketscan.io*
>
> Stop guessing. Start tracking. Buy at the right time.

### Body copy

**What this is:** A working spreadsheet that does the job a price-comparison platform does — across the platforms it can't fully cover. You enter the show, the seat tier, and the platforms you're tracking. The sheet calculates the spread, flags the leader, and tells you when prices have moved enough to act.

**Who it's for:** Anyone tracking 2+ concerts in 2026. Most concert buyers check Ticketmaster, scroll the resale apps for an hour, and either buy at peak panic or wait too long and pay surge. This sheet replaces that with a 90-second weekly check.

**The 5-rule methodology** (this is the core IP — it's also the structure of the Monday blog post):

**Rule 1 — Track 3 platforms minimum.** Ticketmaster (or AXS / Live Nation depending on tour), one major resale (StubHub or SeatGeek), and one secondary (Vivid Seats or our own `/compare` tool). Never trust a single source — Pollstar Q1 2026 average concert ticket is **$108.63** (5-year high), and the *same* lower-bowl seat shows 20–50% variance across platforms on the same day.

**Rule 2 — Lock the tier, vary the platform.** Compare *the same seat tier* across platforms — not your dream seat on one and the cheap seats on another. The tracker enforces this by giving each row a "tier" column.

**Rule 3 — Watch the curve, not the snapshot.** A single check is useless. Concert resale prices move on a predictable curve: deepest inventory 6–8 weeks pre-show, first major drop 10–14 days out, surge in the final 72 hours. The tracker logs every check so you see the curve, not the snapshot.

**Rule 4 — Set your floor before you start.** Pick the price you'll buy at *before* you start tracking. The "Target Price" column is mandatory. If you don't have a target, you'll buy at peak emotional intensity, not peak value.

**Rule 5 — Use the alert column.** When the lowest tracked price drops below your target, the alert column flips green. When it doesn't, you don't buy. That's the entire decision rule.

**How to use:**
1. Open the **My Concerts** tab.
2. Add a row for each show you're tracking. Fill in artist, venue, date, seat tier, target price.
3. Once a week (Sunday is best — Monday morning = Monday-prime curve compression), open each platform, find the same seat tier, log the price.
4. The "Spread" column tells you the platform delta. The "Action" column tells you what to do.
5. When "Action" reads **BUY** for two consecutive weeks, buy. When it reads **WAIT**, don't.

**Pro move:** Bookmark `ticketscan.io/compare` and let our tool do the cross-platform pull for you in one shot. Then transcribe to the tracker. The tracker's job is the *decision logic*; our job is the *price retrieval*. We work together.

---

## Tab 2: "My Concerts" (the tracker — blank template)

### Column structure

| Col | Header | Format | Purpose |
|-----|--------|--------|---------|
| A | Artist / Tour | Text | "Billie Eilish — Hit Me Hard and Soft Tour" |
| B | Venue | Text | "Chase Center" |
| C | Show Date | Date | "2026-08-14" |
| D | Days Until Show | Formula `=C-TODAY()` | Auto-calc |
| E | Seat Tier | Dropdown | Floor / Lower Bowl / Upper Bowl / Lawn / Pit / VIP |
| F | Target Price ($) | Currency | User-set floor — Rule 4 |
| G | TM Price ($) | Currency | Latest Ticketmaster check |
| H | StubHub Price ($) | Currency | Latest StubHub check |
| I | SeatGeek Price ($) | Currency | Latest SeatGeek check |
| J | Vivid Seats Price ($) | Currency | Optional 4th platform |
| K | Lowest ($) | Formula `=MIN(G:J)` | Auto-calc |
| L | Spread ($) | Formula `=MAX(G:J)-MIN(G:J)` | Auto-calc |
| M | Spread (%) | Formula `=L/K` (formatted %) | Platform-variance signal |
| N | Last Checked | Date | Manual input |
| O | Action | Formula (see below) | BUY / WAIT / HOLD |
| P | Notes | Text | Free-form |

### Cell O (Action) formula

```
=IF(K2<=F2, "BUY",
  IF(D2<=7, "BUY (event soon — prices surge in final 72h)",
    IF(M2>=0.20, "WAIT (≥20% spread — platforms disagree, recheck in 3 days)",
      "HOLD (within range — recheck weekly)")))
```

**Why this formula** (matches the TicketScan recommendation algorithm in `index.js` — same logic the platform uses, exposed as a tool the user can run themselves):

- `K <= F` → lowest tracked price has hit user's target → **BUY**
- `D <= 7` → 7 days or less to show → resale curve is in the surge zone → **BUY** (don't wait for the floor; it's not coming)
- `M >= 0.20` → platforms disagree by 20%+ → **WAIT**, the market hasn't settled
- Else → **HOLD** and recheck

### Conditional formatting

- Cell O background:
  - "BUY*" → green (#059669)
  - "WAIT*" → red (#DC2626)
  - "HOLD*" → amber (#D97706)
- Cell M ≥ 0.20 → bold + red text (highlights platform variance)
- Column N → if `TODAY() - N > 7`, cell turns yellow (the user hasn't checked this row in over a week)

### Pre-filled rows (3, blank — user fills)

Empty template rows ready for the user's first 3 concerts. After that the user copies the row.

---

## Tab 3: "Sample Data" (pre-populated example)

Show the tracker in use with 5 example shows. Use realistic 2026 summer-tour data with platform variance numbers consistent with what we cite in the Monday blog post.

| Artist / Tour | Venue | Show Date | Days Until | Seat Tier | Target | TM | StubHub | SeatGeek | Vivid | Lowest | Spread $ | Spread % | Last Check | Action | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Billie Eilish — Hit Me Hard and Soft | Chase Center | 2026-08-14 | 109 | Lower Bowl | $180 | $245 | $198 | $212 | $225 | $198 | $47 | 24% | 2026-04-25 | WAIT (≥20% spread) | StubHub leading; recheck Sunday |
| Kendrick Lamar — Grand National | SoFi Stadium | 2026-07-19 | 83 | Floor | $300 | $385 | $325 | $340 | $375 | $325 | $60 | 18% | 2026-04-26 | HOLD | Within range; weekly check |
| Tyler, The Creator — Chromakopia | MSG | 2026-09-22 | 148 | Lower Bowl | $200 | $215 | $189 | $205 | $220 | $189 | $31 | 16% | 2026-04-25 | BUY | Below target — pull trigger |
| Chappell Roan — Midwest Princess | Red Rocks | 2026-06-08 | 42 | GA Floor | $150 | $185 | $165 | $172 | $190 | $165 | $25 | 15% | 2026-04-26 | HOLD | 6-week curve; expect Apr 30 drop |
| Sabrina Carpenter — Short n' Sweet | Madison Square Garden | 2026-05-04 | 7 | Lower Bowl | $250 | $310 | $268 | $275 | $295 | $268 | $42 | 16% | 2026-04-26 | BUY (event soon) | Surge starts ~72h pre-show |

Each row is hand-written to demonstrate a different Action outcome:
- Row 1: WAIT (high spread)
- Row 2: HOLD (in range)
- Row 3: BUY (below target)
- Row 4: HOLD (curve patience)
- Row 5: BUY (event-soon override)

---

## Tab 4: "Reference: Avg Concert Prices 2026" (read-only data)

Pre-loaded with industry baselines so users have an external anchor for their target prices.

### Pollstar Q1 2026 baseline

- **Industry average concert ticket: $108.63** (5-year high; up from $98.51 in Q1 2025)
- **Top 100 tours average: $135.92**
- **Stadium-tier average: $186.40**
- **Arena-tier average: $112.85**
- **Theater-tier average: $87.20**
- **Festival single-day average: $164.00**

### Genre baselines (industry data, Q1 2026)

| Genre | Avg ticket | Notes |
|---|---|---|
| Pop (stadium) | $189 | Eilish, Carpenter, Rodrigo set |
| Hip-hop (arena) | $128 | Kendrick is an outlier high; broader average is lower |
| Country (stadium) | $156 | Morgan Wallen / Zach Bryan demand 2x average |
| Rock / alt (arena) | $98 | The lowest-variance genre |
| Indie (theater) | $72 | Highest pre-show inventory depth |
| EDM / festival | $158 | Single-day adjusted |

### Platform fee stack (2026)

| Platform | Buyer fee | Notes |
|---|---|---|
| Ticketmaster | 18–32% (variable) | Highest fee variance; primary issuer |
| Live Nation / AXS | 20–30% | Tour-dependent |
| StubHub | 10–15% | Plus 15% seller fee already priced in |
| SeatGeek | 19–25% | "Deal Score" can mis-rank — verify all-in |
| Vivid Seats | 20–30% | Rewards offset for repeat buyers |
| TicketScan | $0 | We don't sell tickets — we just compare. We're a comparison tool, not a marketplace. |

### When to buy by event type (rule of thumb)

- **Stadium pop tour:** 6–8 weeks pre-show is the deepest inventory. First major drop 10–14 days out. Final 72 hours: surge.
- **Arena hip-hop / rock:** 8–10 weeks pre-show. Drops 7–10 days out. Less surge in final 72 hours than pop.
- **Theater / indie:** Buy at announce — limited capacity, fast sell-through, no resale floor.
- **Festival:** Buy at announce or at the second tier. Late-window resale rarely comes down for festivals because seller pool is thin.
- **Country stadium:** 4–6 weeks. Country resale curves are tighter than pop.

---

## Footer copy (across all tabs)

> Built by [TicketScan](https://www.ticketscan.io) — the ticket comparison platform that compares prices across Ticketmaster, SeatGeek, StubHub, and Vivid Seats. We don't sell tickets. We just help you not overpay for them.
>
> Want this done for you automatically? [Set up a watchlist on TicketScan](https://www.ticketscan.io/watchlist) and we'll track the prices and email you when your target is hit — no spreadsheet required.

---

## Capture form copy (for the landing page)

### Headline
**Stop overpaying for concert tickets. Track prices like a pro.**

### Subhead
The free spreadsheet template that turns a 2-hour platform-hopping ritual into a 90-second weekly check. Plus our 5-rule methodology for when to buy — and when to wait.

### Form fields
- Email address (required)
- First name (optional)
- Are you tracking specific tour(s)? (optional, free text — feeds personalization later)

### CTA button
**Send me the tracker** (NOT "Download" — sends to inbox, builds the email habit immediately)

### Trust line below button
*Used by 12,000+ concert buyers. We don't spam — unsubscribe anytime. We do not sell email addresses.*
*(Note: 12,000 number is aspirational placeholder. Replace with actual number once we hit ~500 active subscribers; for now use "Built by the team behind ticketscan.io.")*

---

## Email delivery sequence (for Email Agent — Agent 5)

**Trigger:** User completes capture form → email confirmation with download link.

This is a **parallel** sequence to the existing 5-email drip (which is triggered by registration, not lead-magnet download). A registered user who also downloads the tracker should receive both sequences. The 4 tracker emails fire on tracker-download timestamps; the 5 drip emails fire on registration timestamps.

### Email 1 — Immediate (transactional + first lesson)
**Subject:** Your Concert Ticket Price Tracker is here — open this first
**Hook:** Deliver the file. Then teach the most important rule (Rule 4 — set your floor before you start).
**Body:** Download link at top. Then 200 words on why "set your target before you check prices" prevents 80% of overpaying — emotional commitment to a show makes buyers anchor on whatever the first price they see is. The tracker enforces a target *before* the user logs a single platform check.
**CTA:** "Open the tracker → fill in target prices for the shows you care about."

### Email 2 — Day 3 (the curve)
**Subject:** When concert ticket prices drop (and when they don't)
**Hook:** The curve. Pre-show pricing is not random; it follows a 4-stage pattern. Teach the pattern.
**Body:** ~350 words walking through deepest-inventory window (6–8 weeks pre-show), first drop (10–14 days out), holding pattern (3–10 days out), final-72-hour surge. Reference the tracker's "Days Until Show" column — the user already has the data, this email teaches them what to do with it.
**CTA:** "See where your shows are on the curve" → tracker link.

### Email 3 — Day 7 (platform variance is real)
**Subject:** The same seat, different prices — here's why
**Hook:** Pollstar's $108.63 average is meaningless because the *same lower-bowl seat* shows 20–50% variance across platforms on the same day.
**Body:** ~400 words. Reference our 4/22 FIFA resale data piece (66.7% FIFA-most-expensive on 33 sampled matches) as the methodology proof — we did the work, here's what we found, your tracker is the same methodology applied to your shows. CTA mid-body to the `/compare` tool with a soft pitch ("we already do this for you across 4 platforms — but the tracker keeps you honest about acting on the data").
**CTA:** "Run a compare" → `/compare` page.

### Email 4 — Day 14 (the watchlist upsell)
**Subject:** Tired of opening the tracker every Sunday? Let us do it for you.
**Hook:** The tracker works, but it requires user effort. Watchlist is the same logic, automated.
**Body:** ~300 words. The tracker is a manual implementation of what TicketScan's watchlist does automatically — we check prices every 4 hours, you set your target, we email when it's hit. Soft pitch the registered-user upgrade. **This is the conversion moment** — tracker users have demonstrated they're high-intent enough to maintain a spreadsheet; watchlist is just the next natural product step.
**CTA:** "Create my first watchlist" → `/dashboard` or `/watchlist` (auth-walled — drives signup).

---

## Production checklist (for Lead Architect / Design)

- [ ] Build Tab 1 (Start Here) in Google Sheets with branded header (teal #0D9488, TicketScan logo top-left)
- [ ] Build Tab 2 (My Concerts) with all formulas, dropdowns (E), and conditional formatting (O, M, N)
- [ ] Build Tab 3 (Sample Data) with the 5 example rows
- [ ] Build Tab 4 (Reference) — read-only, locked range
- [ ] Lock formula columns D, K, L, M, O so users can't accidentally overwrite
- [ ] Test the formula in Action (O) against all 4 outcomes — BUY (target hit), BUY (event soon), WAIT (high spread), HOLD (default)
- [ ] Export to .xlsx for users who don't use Google Sheets
- [ ] Build the capture page at `/concert-ticket-price-tracker` (or as a section on `/blog/summer-concert-tour-2026-ticket-buying-guide`)
- [ ] Coordinate with Email Agent on the 4-email tracker-onboarding sequence (file the spec above to `marketing-agents/output/email/lead-magnet-tracker-sequence-spec.md`)
- [ ] Add the popup CTA to site-wide config (delay 30s + exit-intent triggers)
- [ ] Add tracker CTA inline to the 4 evergreen concert posts in `blog.ts`

**Total production estimate:** 6–8 hours (spreadsheet build = 2h, capture page = 2h, popup wiring = 1h, email sequence build in delivery system = 2h, blog CTA edits = 1h). Targeted ship: **Tuesday 4/28** to align with the Summer Concert publish + Tuesday newsletter wave.
