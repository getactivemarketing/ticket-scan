## Churn Interventions — 2026-08-26

Status: **copy prepared; 0 emails queued or sent**. The production API does not expose last activity, alert delivery/clicks, or a win-back email queue. Do not send these templates until recipients are selected with activity timestamps, active-email consent, suppression checks, and price-change evidence.

### Tier 1 — Gentle nudge (7–10 days inactive)

**Subject:** Prices changed on your TicketScan watchlist

**Send timing:** 10:00 AM recipient local time; one message only, then suppress for 7 days.

**Body:**

Hi {{first_name}},

Your watchlist has been quiet, but ticket prices rarely are. Since you last checked, **{{event_count}} event(s)** changed price:

{{event_rows: event name — old low → current low; percentage change}}

Open your watchlist to see whether any of those moves are worth acting on: {{watchlist_url}}

TicketScan keeps watching so you don’t have to keep refreshing like it’s 2009.

— TicketScan

P.S. You can adjust alert frequency or unsubscribe here: {{preferences_url}}

### Tier 2 — Value reminder (10–14 days inactive)

**Subject:** You may have missed {{event_count}} ticket price changes

**Send timing:** 10:00 AM recipient local time; suppress if the user received a price alert in the last 72 hours.

**Body:**

Hi {{first_name}},

While you were away, **{{event_count}} event(s)** on your watchlist moved. The biggest verified change was **{{largest_change_event}}: {{change_summary}}**.

That does not automatically mean “buy now”—it means the market changed, and your watchlist has the receipts. Compare current listings across sources here: {{watchlist_url}}

No panic buying. No mystery fees. Just the numbers.

— TicketScan

P.S. Manage alerts anytime: {{preferences_url}}

### Tier 3 — Win-back (14+ days inactive)

**Subject:** We missed you — here’s what changed while you were away

**Send timing:** 10:00 AM recipient local time; one win-back message, with a 14-day cooldown.

**Body:**

Hi {{first_name}},

Ticket prices kept doing their little roller-coaster thing. Your watchlist now has **{{event_count}} tracked event(s)**, including **{{notable_event}}**.

Come back when you’re ready and see the latest comparison: {{watchlist_url}}

If TicketScan is too noisy, choose fewer alerts instead of leaving entirely: {{preferences_url}}

We’ll keep the ticket-market drama to a minimum.

— TicketScan

### Queueing requirements for Email Agent (Agent 5)

Before sending: add last-activity timestamps; log provider message IDs and sent/delivered/bounced/opened/clicked/unsubscribed events; verify active consent and suppression; compute real price deltas from price history; and add a signed preferences link. Current API data is insufficient for personalization or safe dispatch.

