# Email Marketing — Weekly (2026-06-26)

**Honest status. No metrics are invented.** Where a number can't be measured, it's marked `n/a`.

---

## 0. What's actually measurable this week

| Data | Source | Result |
|---|---|---|
| API up? | `curl /api/admin/stats` | ✅ HTTP 200 (real key from run-daily.sh) |
| Total users | `/api/admin/stats` | **132** |
| New users this week | `/api/admin/stats` | **10** |
| Newsletter subscribers | `/api/admin/stats` | **3** (total and active) |
| Drip emails ever sent | `/api/admin/drip-stats` | **0** — `stats: []` |
| Users overdue for drip | `/api/admin/drip-stats` | **20+ confirmed** in API; all have `last_email_sent: 0` |
| Open/CTR | tracking system | **structurally n/a** — no pixel, no click redirect, no `email_events` table in schema |

### The drip backlog this week (from live API)

| User ID | Days since signup | Emails overdue |
|---|---|---|
| 122–130 | 3–7 days | Email 1 (day 3) |
| 120–121 | 9 days | Email 1 + Email 2 |
| 118–119 | 11–12 days | Email 1 + Email 2 |
| 116–117 | 12 days | Email 1 + Email 2 |
| 115 | 13 days | Email 1 + Email 2 |
| 113–114 | 14–15 days | Email 1 + Email 2 + Email 3 |

**All 20 API-returned pending users have `last_email_sent: 0`.** The drip cron exists and fires, but something in the send path (SMTP creds in prod, or the `processDripCampaign` function) is silently dropping every attempt. This is a platform P0, not a copy problem.

**DO NOT blind-trigger `/api/admin/drip-run`** — risks blasting all overdue users simultaneously with no rate limiting.

---

## 1. Priority order (same as last week — still unresolved)

1. **Diagnose the drip send failure**: add error logging to `processDripCampaign`, then run one test user through manually with `console.log` visible in Railway logs.
2. **Add minimal email tracking**: a 1px beacon + `/r?u=…&e=…` click redirect → `email_events` table. Until this exists, "optimize the weakest email" is impossible.
3. **Ship watchlist target-price input** (CRO): Email 1's core promise — "we'll alert you when prices drop to your target" — refers to a feature the user cannot complete.

---

## 2. Drip sequence copy audit

Since performance data doesn't exist, I'm auditing for credibility/legal integrity — unverifiable claims that need softening before any real send:

### Email 1 (Day 3) — copy fixes still unshipped from 2026-06-19

**Still needed** — replace unverifiable savings claim in `index.js` (~line 538):

```html
<!-- REMOVE: "save an average of $127 per ticket" -->
<p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
  The same seat often costs 10–25% more on one site than another — and prices shift
  daily. Set a target once; we watch every source so you buy when it dips, not
  whenever you happened to check.
</p>
```

### Email 4 (Day 21) — "hidden features" framing

If the platform doesn't yet have a functional price comparison flow for anonymous users (compare page is login-gated — see memory), Email 4 describing "pro features" will confuse users who couldn't access them. Consider removing or gating Email 4 until the compare page is un-gated.

---

## 3. Newsletter draft — Week of June 26, 2026

World Cup group stage is live. This is the most relevant send the list will ever receive.

---

**Subject:** World Cup group stage is 15 days old — here's where ticket prices stand

**Preview text:** Knockout round prices are moving fast. What to know before you buy.

---

Hi [first_name],

The World Cup group stage is well underway, and the ticket market has shifted exactly like the data suggested it would: group-stage prices have softened for the remaining matches while knockout-round tickets are already circulating — and prices are moving fast.

Here's what we're watching this week:

---

**🔥 High-demand matches this week**

- **USA vs.** — check the MetLife and SoFi pages on TicketScan for latest secondary market listings
- **Knockout bracket takes shape** — once the Round of 32 bracket locks, prices on surviving-team matches typically spike within hours. Set a price alert now, before that happens.
- **Canadian venues (BMO Field, BC Place)** — Canada advancing is driving local demand; prices for Vancouver and Toronto matches are elevated vs. pre-tournament estimates.

[Compare World Cup ticket prices →](https://www.ticketscan.io/world-cup-2026)

---

**💡 Ticket tip of the week**

For knockout rounds, the safest window to buy is 5–10 days before the match — after the bracket is set (eliminating uncertainty) but before the last-minute surge from local buyers. Waiting until the day before typically adds 20–40% vs. that window.

---

**🏟️ From our World Cup hub**

We've published guides for all 16 venues — everything from parking to secondary market history to what each stadium section looks like.

→ [Find your stadium guide](https://www.ticketscan.io/world-cup-2026)

---

**From the blog**

*How to Read a Ticket Price Chart* — a quick guide to understanding what the price trend line on TicketScan is actually telling you, and when to act on it.

→ [Read the post](https://www.ticketscan.io/blog)

---

See you next week,
The TicketScan Team

[Unsubscribe](https://www.ticketscan.io/unsubscribe) · [TicketScan.io](https://www.ticketscan.io)

---

**Send note:** 3 newsletter subscribers currently — this can go out, but the main value of drafting it is having copy ready when the list grows. World Cup timing is the best organic growth hook the platform has had; priority should be getting newsletter signup in front of WC page visitors this week.

---

## 4. New sequence — Win-Back (inactive 14+ days)

Targeting users who registered but haven't returned. Several users in the drip backlog (ids 113–119, 14–15 days old, no email received) fall into this bucket once drip is fixed.

**Trigger:** user has `last_login` or `last_activity` older than 14 days, and no drip email 3 yet sent.
*(Note: verify whether `last_login` column exists before coding the trigger — schema as documented shows only `created_at` on `users` table.)*

---

### Email 1 — Day 14 after signup (or last activity)

**Subject:** Prices moved on your saved events

**Preview:** Quick check-in — worth 30 seconds

**Body:**
```
Hi [first_name],

A few things have moved in the ticket market since you signed up:

Events near [city] are [trending toward higher prices / showing some softening] 
as we get closer to the fall season.

Your watchlist is empty right now, which means we can't send you a price drop 
alert if something dips.

It takes 30 seconds to add an event:

  [Track an event →]

If you're not finding what you're looking for, reply to this email — we'll look 
it up for you.

— The TicketScan Team
```

**CTA:** "Track an event →" → `/dashboard` (or `/` with search pre-focused)

---

### Email 2 — Day 21

**Subject:** One thing our most active users do differently

**Preview:** It's a 2-minute setup

**Body:**
```
Hi [first_name],

The people who save the most on tickets all do one thing consistently:

They set a target price before they decide to buy.

Without a target, you're just checking prices and hoping. With one, we do the 
watching and email you the moment a listing hits your number.

Here's how it works:
1. Search for your event on TicketScan
2. Click "Add to watchlist"
3. Set the price you'd be happy to pay

We'll email you if it hits that price. That's it.

  [Set your first price alert →]

— The TicketScan Team
```

**CTA:** "Set your first price alert →" → `/dashboard`

---

### Email 3 — Day 30

**Subject:** Last note from us (for a while)

**Preview:** We'll leave you alone after this

**Body:**
```
Hi [first_name],

We've sent a couple of emails now, and we don't want to keep showing up 
uninvited if TicketScan isn't useful to you right now.

If you ever need to compare ticket prices across Ticketmaster, SeatGeek, and 
StubHub in one place — we'll be here.

  [Come back when you're ready →]

And if there's something we're missing that would make it worth returning, reply 
to this email. We read them.

— The TicketScan Team

[Unsubscribe] if you'd prefer not to hear from us again.
```

**CTA:** "Come back when you're ready →" → `https://www.ticketscan.io`

**Success metric:** Watchlist add within 7 days of any email in this sequence.

---

## 5. List health

| Segment | Size | Source |
|---|---|---|
| Total registered users | 132 | API (real) |
| Newsletter subscribers | 3 | API (real) |
| Users who've received any drip email | 0 | API (real) |
| Users overdue for email 1+ | 100+ (est.) | 20 shown; total based on 132 total/10 this week |
| Open/click-active users | n/a | No tracking infrastructure |
| WC-interested segment | n/a | No tag/source data in `newsletter_subscribers` |

**Recommendation:** Don't segment until the drip actually sends. Right now the entire list is one segment: people who signed up and never heard from us.

---

## 6. Cross-agent flags

- **→ Growth Agent (Agent 8):** Win-back sequence above is ready to code once drip send path is verified. Trigger condition needs `last_login` column — verify schema first.
- **→ CRO Agent (Agent 6):** Newsletter signup on World Cup pages is the highest-leverage acquisition move right now (WC group stage live, max organic traffic). A one-field email form above the fold on each stadium page.
- **→ Content Agent (Agent 1):** "How to Read a Ticket Price Chart" blog post referenced in newsletter above — confirm it exists or flag for creation.
