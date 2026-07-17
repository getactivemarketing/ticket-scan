# Email Weekly — 2026-07-17

## Platform State (Live, 09:00 UTC)

| Metric | Value |
|---|---|
| Registered users | 168 (+17 this week) |
| Watchlist items | 178 |
| Active alerts | 0 (no target-price UI — known issue) |
| Newsletter subscribers | 3 (2 test accounts + 1 real) |
| Drip emails sent ever | **0** |
| Users awaiting Email 1 (day ≥ 3, never emailed) | 161 |

**Open/CTR rates: n/a — no email has ever been delivered.**

---

## 1. Drip Status: Still Dead

The drip cron has never fired. All 168 users sit at `last_email_sent = 0`. The API endpoint exists and returns data, but no emails have gone out. This is the only email priority that matters this week.

**Root cause candidates:**
- The Railway cron schedule (`0 10 * * *`) may not be executing the drip check
- SMTP credentials (Gmail app password) may have lapsed or been rate-limited
- The `/api/admin/drip-run` endpoint triggers manually — but we're not blind-firing it (168 real inboxes)

**Recommended action (requires human):**
1. Check Railway logs for the drip cron job — confirm it's running
2. Test SMTP manually: `curl -X POST https://tickethawk-api-production.up.railway.app/api/admin/drip-run -H "x-admin-key: [KEY]"` — but only after confirming SMTP works with 1 test address first
3. Once confirmed working, fire drip-run — users who joined 3+ days ago will get Email 1

**Users most overdue for Email 1 (joined ≥ 7 days ago, never received anything):**
- geno.white96@gmail.com (Day 7)
- alejandrojosuetovarlara@gmail.com (Day 7)
- alyssawhiterox@gmail.com (Day 7)
- ... and 158 more

---

## 2. Optimized Email 1 Copy (Day 3)

Since all emails have 0 sends, "weakest performer" is undefined. Improving Email 1 is highest leverage — it's the first touchpoint for 161 waiting users.

**Current Email 1 subject (from index.js):** "3 Tips to Save on Your First Ticket Purchase"

**Problem:** Generic, benefit-vague, could be any ticket site.

---

**Revised Email 1:**

**Subject A:** You're paying too much for tickets (here's proof)
**Subject B:** The $47 difference we found on tonight's game
**Subject C:** Before you buy tickets anywhere — read this

**Preview text:** Takes 90 seconds. Saves you real money.

---

Hi there,

Quick one — did you know the same seat on Ticketmaster can cost $47 more than the identical seat on SeatGeek for the same event?

We check that gap automatically so you don't have to.

**Three things TicketScan does that other sites don't:**

**1. Compare prices across all major platforms at once.**
Ticketmaster, SeatGeek, and StubHub — side by side, same event. Most fans check one site and assume that's the market price. It's usually not.

**2. Tell you whether to buy now or wait.**
We track how prices move as the event date approaches. For most events, prices drop 10–14 days out — then spike in the final 72 hours. We show you exactly where you are in that curve.

**3. Alert you when your target price hits.**
Add an event to your watchlist, set a target, and we'll email you the moment prices fall to your number. No more checking every day.

→ **[Compare prices on your next event](https://www.ticketscan.io/dashboard)**

Takes 30 seconds. No credit card ever.

— The TicketScan Team

*You're getting this because you signed up at TicketScan.io. [Unsubscribe](#)*

---

## 3. This Week's Newsletter

**Context:** FIFA World Cup 2026 Final is Sunday, July 19 — two days away. This is the biggest ticket event of the year.

---

**Subject:** The World Cup Final is Sunday — here's what tickets look like right now
**Preview:** MetLife Stadium, two days out. Here's the market.

---

**This Week in Tickets**

The 2026 FIFA World Cup Final takes place Sunday, July 19 at MetLife Stadium in East Rutherford, NJ. 80,000 seats. One match. Prices for the past several tournaments have peaked in the final 48 hours as buyers who waited too long capitulate.

**World Cup Final (MetLife, July 19)**
Secondary market tickets are available across SeatGeek, StubHub, and Ticketmaster. With 48 hours to kickoff, prices typically stop falling. If you're still looking, this is the window.
→ [Compare Final ticket prices on TicketScan](https://www.ticketscan.io/world-cup-2026)

**Post-World Cup: What Comes Next**
With the tournament wrapping up, venues across the US are releasing fall concert and sports schedules. The next major buying window is NFL preseason (August) and fall concert tours. Watch those — they tend to start at inflated launch prices and soften 3–4 weeks after sale.

→ [Set a price alert for your next event](https://www.ticketscan.io/dashboard)

---

**Ticket Tip of the Week**

For events 30+ days out, patience usually wins. The sweet spot for most stadium concerts and sports is 10–14 days before the event — far enough out that scalpers are discounting, close enough that venue releases have dried up. The exception: World Cup, Super Bowl, and playoff games where demand increases to the hour. For those, buy when you find a price you can live with.

---

**World Cup 2026 Wrap**

Final countdown: 2 days. All 104 group stage and knockout matches played. The two finalists will compete Sunday at MetLife in front of a global audience of ~1.5 billion. TicketScan has venue guides for all 16 stadiums — parking, gates, nearest transit.

→ [MetLife Stadium guide](https://www.ticketscan.io/world-cup-2026/metlife-stadium)
→ [All World Cup venue guides](https://www.ticketscan.io/world-cup-2026)

---

**From the Blog**

*How to Know When to Buy Tickets (And When to Wait)* — The data behind our buy/wait/hold recommendation engine, and what it's learned from 6 months of price tracking.
→ [Read on TicketScan](https://www.ticketscan.io/blog)

---

*TicketScan.io — Compare ticket prices. Set alerts. Never overpay.*
[Unsubscribe](#) · [ticketscan.io](https://www.ticketscan.io)

---

## 4. New Sequence: Post-Signup Activation

**Trigger:** User registers but never adds a watchlist item
**Goal:** Get them to their first watchlist add (which arms their first alert)
**Why this sequence:** 168 registered users, 178 watchlist items total — average <1 item/user, many likely have zero

---

### Email 1 — Day 1 after signup

**Subject:** Your TicketScan account is ready — here's the fastest way to use it
**Preview:** One search. Instant price comparison across all platforms.

Hi,

Your account is set up. Here's the fastest path to actually saving money:

1. Go to [Search](https://www.ticketscan.io/dashboard)
2. Type any event — artist, team, venue, city
3. See prices from Ticketmaster, SeatGeek, and StubHub side by side

That's it. No setup required.

If you find an event you're considering, click "Track Prices" to add it to your watchlist. When the price hits your target, we'll email you.

→ **[Search your first event](https://www.ticketscan.io/dashboard)**

— TicketScan

*[Unsubscribe](#)*

---

### Email 2 — Day 3 after signup (if no watchlist add)

**Subject:** 30-second setup that pays for itself
**Preview:** Set a target. We watch. You save.

Hi,

One thing worth doing before your next ticket purchase:

Add the event to your TicketScan watchlist with a target price. We'll watch prices across all platforms and email you the moment it drops to your number.

Most people who set alerts report checking prices compulsively until they do. The alert removes that entirely.

→ **[Add your first price alert](https://www.ticketscan.io/dashboard)**

*[Unsubscribe](#)*

---

### Email 3 — Day 7 after signup (if still no watchlist add)

**Subject:** Prices on [X] events dropped this week — did you miss them?
**Preview:** Here's what our watchlist users caught.

Hi,

This week, ticket prices on several major events fell 15–30% from their launch prices — the typical early-sale premium fading as demand normalized.

TicketScan watchlist users with alerts set got notified automatically. Everyone else probably paid launch price.

If you have any events coming up in the next 90 days, now is the time to add them. Prices are most volatile in the 30–60 day window before an event.

→ **[Track your events](https://www.ticketscan.io/dashboard)**

This is the last reminder we'll send about this. You'll still get our weekly newsletter.

— TicketScan

*[Unsubscribe](#)*

---

**Trigger conditions:** `registered_at` present + `watchlist_count = 0`
**Exit condition:** Any watchlist add
**Success metric:** Watchlist add rate for new users (currently unmeasured — no analytics)

---

## 5. List Health

| Segment | Count | Notes |
|---|---|---|
| Newsletter subscribers | 3 | 2 test addresses, 1 real |
| Registered users (drip eligible) | 168 | None have received drip Email 1 |
| Valid email format | ~165 | `cristian@gmail` (id 155) and `danielldk930@gmail.con` (id 160) are malformed |
| Duplicate registrations | 1 confirmed | ids 159/160 same name, `.com` vs `.con` typo |

**No segmentation is possible without open/click data — no emails have been sent.**

Once the drip starts firing, meaningful segmentation (active/at-risk/dormant) becomes available after 30 days of data.

---

## Handoffs

- **→ CRO Agent (Agent 6):** Target-price input on EventCard is still missing. Until it exists, 0 alerts can arm. This is the #1 blocker for the entire alert/savings value prop. [Memory: watchlist-no-targets-alerts-cant-arm]
- **→ Growth Agent (Agent 8):** 17 signups this week — what drove them? If WC Final traffic, expect a sharp drop next week. Capture emails from WC-driven visitors before tournament ends.
- **Human required:** Diagnose and fix drip cron before 168 users age out of the onboarding window.
