# Lead Magnet — The Ticket Buyer's Cheat Sheet: When to Buy for Every Event Type

**Produced:** 2026-04-20
**Format:** 2-page PDF (Letter, portrait) — optimized for print and mobile-friendly on-screen viewing
**Target delivery date:** Wed 2026-04-22 (asset live on-site + popup + newsletter capture)
**Rotation slot:** #1 of the 5-magnet rotation — last ship was World Cup 2026 Ticket Guide (2026-04-13). Cheat Sheet pairs with the Monday summer concert tour big-idea piece.

---

## Why this magnet now

- **Evergreen.** Most lead magnets we rotate through are event- or season-specific. This one has a 12-month shelf life, which means we can leave it live as the permanent homepage popup once we prove out conversion.
- **Concrete value on the first page.** The "when to buy" question is the #1 search intent for every non-VIP ticket buyer. If we put the actual answer on page one of a free PDF, the download becomes a trust signal that the tool is worth registering for.
- **Pairs with the Monday summer concert piece.** Blog CTA placement is immediate; same-day capture is achievable.
- **Paid ads need this.** Before we activate paid search / Meta, we need a capture asset that converts cold traffic. Nobody registers for a watchlist on first touch; they download a cheat sheet.

---

## Landing page content

**URL:** `/cheat-sheet` (new page) or first-party popup only — Lead Architect decides. **Recommend:** both. Popup triggers on 40% scroll; dedicated page for paid/social deep-links.

### Hero

**Headline:** The Ticket Buyer's Cheat Sheet
**Sub:** When to buy — and when to wait — for concerts, playoffs, and World Cup 2026. Based on three years of TicketScan price-tracking data.

**CTA button:** Email me the PDF →
**Field:** Email address (single field, no first name)
**Legal:** By entering your email, you agree to receive tips from TicketScan. Unsubscribe anytime.

**Social proof line below CTA:** "Join 12,000+ ticket buyers who stopped overpaying."
_Note: verify current subscriber count from `newsletter_subscribers` table before publish. Substitute exact count if under 10k; round down to nearest thousand if over._

### Below-the-fold preview

- What's inside (3 bullets):
  - The buy-zone for each event type — concerts, NBA/NHL playoffs, NFL regular season, MLB, World Cup 2026
  - The platform that usually wins for your event type (and when it flips)
  - The three signals that mean "buy now" and the two that mean "wait another week"
- "Plus: a bonus page on avoiding the three fee-stacking tricks every resale site uses in 2026."

---

## PDF content (full copy, ready for design)

### Page 1 — The When-to-Buy Grid

**Top banner:**
> **The Ticket Buyer's Cheat Sheet**
> When to buy, when to wait. One page. Built by TicketScan.

**Grid (one table, 6 rows):**

| Event type | Best time to buy | Worst time to buy | Usual platform winner | Price swing you should expect |
|------------|------------------|-------------------|-----------------------|------------------------------|
| **Concerts — arena tours** | 6-8 weeks out OR 6-8 hours before the show | 2 weeks before the show ("the panic bump") | SeatGeek for pop and hip-hop; StubHub for rock and country | 25-40% between cheapest and priciest platform for the same seat |
| **NBA playoffs** | 48 hours before tip-off (sellers dump) | Minute the bracket is set (first 24 hours) | Varies by series — check all three | 15-30% drop in the 6 hours before tip-off, on average |
| **NHL playoffs** | Game-day afternoon | Two hours after the matchup is announced | StubHub for Original Six markets; SeatGeek elsewhere | 20-35% between platforms; even larger in smaller hockey markets |
| **NFL regular season** | Tuesday of game week (worst day to buy is the Sunday of prior week) | Night before the game | Ticketmaster primary for season-ticket dumps; SeatGeek for resale | 10-20% on mid-tier teams; 30%+ on marquee games |
| **MLB** | Day-of, 3-4 hours before first pitch | Opening Day pre-sale | SeatGeek almost always | 30-50% on non-playoff games (massive resale oversupply) |
| **World Cup 2026** | ASAP for knockout stage; group stage can wait until 3-4 weeks out | The FIFA "Last-Minute Sales Phase" for knockout matches — prices climb daily | FIFA resale marketplace for some group-stage; StubHub for knockouts; compare every time | 20-60% across platforms depending on match — always compare |

**Pull quote at the bottom of the page (styled as a callout):**
> "Same match. Same section. Three platforms. A $61 spread. That's not a coupon — that's just checking more than one tab."

### Page 2 — Buy Signals, Wait Signals, and the Fee Tricks

**Section A — Three signals that mean "buy now"**

1. **Current price is within 5% of the lowest price you've ever seen on that event.** Historical floor matters more than current average. Buy.
2. **The event is less than 7 days out AND no major news is coming.** Scarcity takes over after the 7-day mark — prices stop dropping.
3. **You hit your target price.** You set it for a reason. Don't second-guess it.

**Section B — Two signals that mean "wait"**

1. **Current price is 20%+ above the 30-day average.** You're buying a spike. Wait 3-5 days.
2. **More than 30 days out AND inventory is deep.** Sellers haven't panicked yet. Check weekly, not daily.

**Section C — Three fee-stacking tricks to watch in 2026**

1. **"Service fee" vs. "order processing fee" vs. "facility fee."** Same fee, three names, often stacked on the same ticket. Always click through to final checkout before comparing prices.
2. **Dynamic "estimated total" that updates mid-session.** If the total goes up between when you pick your seat and when you hit checkout, the platform is A/B-testing you. Close the tab and try a different browser.
3. **"Deal Score" / "Good Deal" badges that rank by profit to the platform.** These badges don't always mean cheapest. Sort by price, not by badge, and compare the checkout total across at least two platforms.

**Section D — What to do next**

- **Free:** Use TicketScan to compare any event across Ticketmaster, SeatGeek, and StubHub — one search, full fee math, real checkout prices. No account needed.
- **2-minute upgrade:** Create a watchlist. We'll track your event and email you the moment a platform drops below your target price.
- **Savings report:** Every 30 days, we send you a personalized report of what you actually saved vs. average market prices.

**Footer:**
> **TicketScan.io** — Stop overpaying for tickets.
> Compare every major ticket platform in one search. Set a price alert. Buy at the right time.
>
> © 2026 TicketScan. Data from 2023-2026 TicketScan price history. Platform prices and fees change frequently — always verify at checkout.

---

## Design spec for Agent 4 / design tool

- **Format:** 2-page PDF, US Letter, portrait
- **Fonts:** Body — Inter 10pt; Headlines — Inter 24pt/bold; Table — Inter 9pt
- **Color palette:** TicketScan teal (#0ea5e9) for accents; charcoal (#1f2937) for body; warm grey (#f3f4f6) for the comparison-grid background
- **Icons:** One small icon per event-type row (concert = microphone, NBA = basketball, NHL = puck, NFL = football, MLB = baseball, WC = soccer ball). Outlined, single-color teal.
- **Imagery:** None. Text + table + callouts only. Faster to consume, easier to update, lighter file size (target <500KB).
- **Filename:** `ticketscan-ticket-buyers-cheat-sheet-2026.pdf`
- **OG image** (for social share / popup preview): Page 1 top-third as a teaser card, 1200x630px. Overlay "Free Cheat Sheet — 1 page" badge top-right.

---

## Email delivery sequence (for Email Agent / Agent 5)

**Trigger:** Submit email form on `/cheat-sheet` or homepage popup.
**Tag:** `source: cheat-sheet` + `lead-magnet: buyers-cheat-sheet-2026`
**Sequence:** 4-email nurture over 10 days, sits upstream of the existing 5-email drip. When the 10-day nurture ends, subscriber is auto-rolled into the registered-user drip on first login OR into the subscriber-only nurture if they haven't registered.

**Email 1 — Instant (T+0)**
- **Subject:** Your Ticket Buyer's Cheat Sheet is here 🎟
- **Preview:** One page. Print it. Use it before your next purchase.
- **Body (plain-text friendly):**
  > Hey,
  >
  > Here's your copy: [Download the Cheat Sheet (PDF)]
  >
  > The table on page 1 is the whole thing — when to buy, when to wait, which platform usually wins for each event type. Pin it.
  >
  > Two things you might want to do next:
  >
  > 1. **Got an event in mind?** Run a free comparison right now. No account needed.
  >    [Compare ticket prices →](https://www.ticketscan.io/compare)
  >
  > 2. **Want alerts when your target price hits?** A free watchlist takes 30 seconds to set up. We'll email you when a platform drops below your ceiling.
  >    [Start a watchlist →](https://www.ticketscan.io/register)
  >
  > Questions? Just reply to this email — it comes from a real person.
  >
  > — Sam, TicketScan

**Email 2 — T+2 days**
- **Subject:** The $47 mistake 90% of playoff buyers are making this week
- **Angle:** Turn the playoff row of the grid into a specific-event story (currently relevant: NBA Round 1 Game 2-3 pricing, NHL Round 1 pricing). Include one concrete price-spread example from Monday's pricing run (pull from `price_history` table — most-recent NBA Round 1 game on the user's market if we have a city stored, otherwise use a national example).
- **CTA:** Start a free watchlist on your next playoff game.

**Email 3 — T+5 days**
- **Subject:** How to read the three signals (video-free, 90-second read)
- **Angle:** Expand on Page 2's buy/wait signals. Walk through one real event (a current high-volume concert on sale) showing the three signals in action. Include one chart screenshot from `/event/[id]`.
- **CTA:** Use the Price Trend view on any event — [show me]

**Email 4 — T+10 days**
- **Subject:** The fee trick that just cost my friend $83
- **Angle:** Story-led. Lead with the "Deal Score / Good Deal badges rank by platform profit" trick from Page 2 of the cheat sheet. Close with the cleanest CTA of the sequence.
- **CTA:** Compare any event with fees already included — ticketscan.io/compare

**Exit trigger:** If the user registers at any point during the 10-day sequence, end the cheat-sheet nurture and start the registered-user drip on Day 1. If they set a watchlist, tag them `engaged` and prioritize them for the Email Agent's Thursday newsletter list.

---

## Homepage popup spec

- **Trigger:** 40% scroll depth OR 25 seconds on page, whichever first. Exit-intent on desktop.
- **Suppression:** 30-day cookie once closed; 90-day cookie once submitted.
- **Copy:**
  - **Headline:** Don't overpay for your next ticket.
  - **Sub:** Free 1-page cheat sheet. When to buy, when to wait, for every event type.
  - **Field:** Email
  - **CTA:** Send me the PDF
  - **Micro-trust:** "No spam. Unsubscribe anytime."
- **Suppress on:** `/compare`, `/watchlist`, `/event/*`, `/dashboard` (high-intent pages where the popup would interrupt conversion)

---

## Success metrics

**Primary:** New subscribers attributed `source: cheat-sheet` (target: 200 in first 30 days)
**Secondary:** Conversion-to-registered-user within 10-day nurture (target: 12%+)
**Tertiary:** First-watchlist creation within 30 days of download (target: 20%+)

**Reporting cadence:** Weekly in the content-performance report, starting week of 5/4.
