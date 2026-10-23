# Churn intervention drafts — 2026-10-23

No emails were queued or sent. The admin API cannot identify inactivity, and the product has no safe lifecycle-email queue or delivery audit. These drafts are send-ready only after consent, suppression, last-seen, idempotency, and delivery tracking checks are available.

All copy below avoids claims about price tracking, price history, price movements, alerts, or buy/wait recommendations.

## Tier 1 — Gentle nudge (7–10 days inactive)

**Subject:** Your saved events are still here

**Timing:** Weekday around 10:00 AM recipient local time.

Hi {{first_name}},

You saved {{event_count}} event{{plural}} to TicketScan. Your list is still a handy place to check onsale or presale timing, venue details, and links to buy when you’re ready.

{{event_name}} at {{venue}} is waiting in your list. Take another look, or find a new event happening near you.

**CTA:** Review my saved events

— TicketScan

## Tier 2 — Value reminder (10–14 days inactive)

**Subject:** A quick way to make your ticket search less annoying

**Timing:** Weekday around 6:00 PM recipient local time.

Hi {{first_name}},

Your TicketScan list has {{event_count}} saved event{{plural}}. Before you buy, use it as a checklist: confirm the onsale time, read the venue guide, compare the all-in total, and avoid listings that don’t clearly explain delivery.

Your next useful click: {{event_name}} at {{venue}}.

**CTA:** Open my ticket list

— TicketScan

## Tier 3 — Win-back (14+ days inactive)

**Subject:** We saved your ticket list (because tabs multiply)

**Timing:** Tuesday or Wednesday around 11:00 AM recipient local time.

Hi {{first_name}},

Ticket shopping is still needlessly theatrical, but your saved events make the next search easier. Come back to check upcoming onsale information, venue seating guidance, and direct links to ticket sellers for {{event_name}} and the rest of your list.

No pressure and no mystery promises—just a cleaner place to start.

**CTA:** See my saved events

— TicketScan

### Personalization and safety rules

- Use only a saved event that is still upcoming and present in the current feed; otherwise use the generic list copy.
- Do not insert a price, price movement, alert status, “savings,” scarcity claim, or recommendation.
- Suppress unsubscribed, bounced, complaint, and recently contacted recipients.
- Record message id, template version, send time, delivery, click, and unsubscribe events.
