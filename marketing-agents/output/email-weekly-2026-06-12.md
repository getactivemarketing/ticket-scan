# Email Weekly — 2026-06-12 (Agent 5)

**Discipline note:** Admin stats endpoints (`/api/admin/newsletter`, `/api/admin/drip-stats`) return **401** — the real `ADMIN_SECRET` is not in this repo, so I have **no access to opens, CTR, conversions, or list size**. I am not estimating or inventing them. The `email-sequence` / `cold-email` skills named in the task spec are not installed in this environment; work below is done directly.

---

## 1. Reality check (verified today)

| Check | Result | Source |
|---|---|---|
| API health | UP, 200 in ~0.3s | `curl /` |
| Admin stats auth | 401 (no secret in repo) | `curl /api/admin/*` |
| Event feed | Returns real events (names/dates/venues)… | `/api/events/search` |
| …but `priceRanges` | **`null`** on live events | same call |
| Drip code | Present & structurally sound (`index.js:517–910`) | read |

Two of these are the whole story for email this week:

1. **Prices are null platform-wide.** Any newsletter "prices up/down X%" or "$X saved" line is unbackable. (Re-confirms `[[price-history-empty-alerts-broken]]`, `[[social-agent-price-ledger-fabrication]]`.)
2. **Drip has never sent** (`[[drip-campaign-never-sends]]`). The code is fine; the blocker is upstream delivery/config, not copy. **Optimizing drip copy this week changes nothing until a single email is confirmed delivered.** That is the one task worth escalating.

---

## 2. Drip "weakest performer" — cannot rank by data

No stats access → I cannot pick a weakest email by open/CTR. Instead, a **copy-integrity** pass surfaced the real risk in the existing templates: they assert numbers the platform cannot stand behind.

- **Email 1** (`index.js:538`): *"save an average of $127 per ticket"* — invented; no price data exists to support it.
- **Email 3** (`index.js:642`): *"Lakers vs Celtics … $189 on Ticketmaster but $156 on SeatGeek"* — fabricated example.

**Recommendation (shippable, copy-only):** replace fabricated figures with honest mechanism-based copy. Suggested Email 1 swap for `index.js:538`:

> Old: "Our users save an average of **$127 per ticket** by tracking prices…"
> New: "We watch the price for you across Ticketmaster, SeatGeek and StubHub, and email you the moment it drops below the number you set — so you never overpay by checking at the wrong time."

This keeps the value prop, drops the liability, and works even while price history is empty. (Same treatment for the Email 3 example block.) **I am not rewriting all five with invented A/B "winners."**

---

## 3. Newsletter draft (verifiable facts only)

No price trends included — none are real. Uses event names/dates from the live feed and the World Cup calendar.

```
Subject: The World Cup is here — and the ticket math just got real
Preview: It kicked off yesterday. Here's how to not overpay for the rest.

## This Week in Tickets
The 2026 World Cup kicked off June 11 across the US, Canada and Mexico —
the biggest ticketed event the continent has hosted. With 104 matches over
five weeks, resale prices will move a lot. The play is to compare before you buy.

## On Right Now
- The World Cup is underway (June 11 – July 19) across 16 stadiums.
  → Compare across stadiums: ticketscan.io/world-cup-2026
- Plenty of summer concerts + theatre still on sale near you (e.g. Blue Man
  Group, Orlando). → Search your city: ticketscan.io/dashboard

## Ticket Tip of the Week
Before you check out, open the same seat on a second site. Listing prices for
the same section regularly differ between platforms — comparing takes 30
seconds and is the single highest-ROI habit in ticket buying.

## World Cup 2026
The tournament is live. Browse stadium-by-stadium guides and track listings
as knockout matchups firm up: ticketscan.io/world-cup-2026

## From the Blog
"FIFA Just Pushed a World Cup Final Ticket to $10,990. Here's How to Not Get
Played." → ticketscan.io/blog/world-cup-2026-final-ticket-10990-dynamic-pricing

---
Unsubscribe | ticketscan.io
```

**Caveat for whoever sends it:** do not add specific WC fixtures/match counts — `worldcup.ts` data is stale/wrong (`[[worldcup-schedule-stale-predraw]]`). Keep WC copy at the "tournament is live, compare stadiums" altitude only.

---

## 4. New sequence this week — Post-Signup Activation (B)

Chosen deliberately: it targets the **registered-but-no-watchlist** gap, which is the same root cause severing price alerts (`[[watchlist-no-targets-alerts-cant-arm]]`). Copy is mechanism-based, no invented stats.

**Trigger:** user registered AND has zero watchlist rows. Stop sequence on first watchlist add. Success metric: % who add a watchlist item with a `target_price` set (the metric that actually arms alerts).

- **Day 1 — Subject:** "Your TicketScan is set up — here's the 30-second next step"
  Body: one event search → Add to Watchlist → **set a target price**. CTA: ticketscan.io/dashboard
- **Day 3 — Subject:** "Pick one event. We'll watch the price so you don't have to."
  Body: explain the alert mechanism (we compare 3 sites, email when it drops below your target). CTA: same.
- **Day 7 — Subject:** "You haven't set a price target yet — here's why it matters"
  Body: without a target, there's nothing to alert on. Walk through setting one. CTA: same.

**Note:** this sequence only delivers value once drip delivery itself is unblocked (§1). It's ready to ship behind that gate, not before.

---

## 5. List health & segmentation

**Cannot perform.** Requires admin/DB access (401) for bounces, opens, and last-activity. No `last_login`/open-tracking columns exist to segment on (`[[growth-agent-spiral]]`). Reporting segment sizes here would be fiction, so I'm not. If the real `ADMIN_SECRET` is provided, this becomes a 10-min task.

---

## Cross-agent handoffs

- **→ Human / infra:** Confirm one drip email actually delivers (check Resend/SMTP config + that the daily 10:00 UTC cron fired). This is the #1 blocker; all drip work is inert until then.
- **→ CRO (Agent 6):** Activation sequence (§4) depends on users setting `target_price`. If the watchlist UI doesn't make target-price prominent, the sequence can't convert — see `[[watchlist-no-targets-alerts-cant-arm]]`.
- **→ Content (Agent 1):** No new lead-magnet request this week.
- **→ Growth (Agent 8):** Win-back sequence deferred — can't identify inactive users without activity data.

## What I did NOT do (and why)
- No drip open/CTR/conversion table — endpoint 401, no real data.
- No "prices up X%" newsletter lines — live feed prices are null.
- No list segment sizes — no DB/analytics access.
- No specific WC fixtures — source data stale.
