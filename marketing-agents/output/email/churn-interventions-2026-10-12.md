## Churn intervention drafts — 2026-10-12

No messages were queued or sent. Production has no last-seen field, engagement events, email click/open data, or lifecycle-email queue endpoint. These are compliant, send-ready drafts for Email Agent review once audience selection and suppression controls exist.

The product-status restriction means these drafts do not mention price movement, price history, alerts, savings, or buy/wait recommendations.

### Tier 1 — Gentle nudge (7–10 days inactive)

**Subject:** Your saved ticket list is still here

**Timing:** Tuesday or Wednesday, 10:00–11:00 AM recipient local time.

**Body:**

Hi {{first_name}},

You saved **{{event_name}}** at {{venue}} for {{event_date}}. TicketScan keeps the useful details in one place: onsale and presale timing, venue guidance, and links to check availability when you’re ready.

Open your saved event: {{event_url}}

Not looking anymore? You can remove it from your ticket list anytime.

— TicketScan

### Tier 2 — Value reminder (10–14 days inactive)

**Subject:** A quick look at your {{watchlist_count}} saved event(s)

**Timing:** Thursday, 10:00–11:00 AM recipient local time.

**Body:**

Hi {{first_name}},

You have {{watchlist_count}} event(s) in your TicketScan list. A quick review can help you confirm the date, venue details, onsale timing, and where to check tickets before plans sneak up on you.

Review your ticket list: {{watchlist_url}}

If these events are no longer on your calendar, remove them and keep the list tidy.

— TicketScan

### Tier 3 — Win-back (14+ days inactive)

**Subject:** We saved your ticket list for you

**Timing:** Tuesday, 10:00–11:00 AM recipient local time, with a 30-day cooldown.

**Body:**

Hi {{first_name}},

It’s been a while. Your saved TicketScan events are still available to review, including venue tips, onsale information, and links to ticket marketplaces.

Come back to your list: {{watchlist_url}}

Prefer a clean slate? Remove the events you no longer want and keep only what matters.

— TicketScan

### Launch requirements

- Add `last_seen_at` or equivalent authenticated activity timestamp.
- Add delivery, bounce, open, click, complaint, and unsubscribe events.
- Build an idempotent, parameterized lifecycle-email queue with suppression checks.
- Never send a tier based only on signup date or watchlist presence.
