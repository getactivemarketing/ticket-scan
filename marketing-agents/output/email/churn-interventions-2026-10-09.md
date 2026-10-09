# Churn intervention drafts — 2026-10-09

Status: **draft only; nothing queued or sent.** There is no lifecycle-email queue, last-seen signal, or consent/suppression workflow available through the admin API. Personalization tokens below must be populated only after those controls exist.

These drafts intentionally avoid price-drop, price-history, price-alert, and buy-timing claims because those features are currently unavailable.

## Tier 1 — Gentle nudge (7–10 days inactive)

**Subject:** A quick look at your saved events

**Send timing:** Tuesday or Wednesday, 10:00–11:00 AM recipient local time; send once, with suppression for recent activity.

**Body:**

Hi {{first_name}},

You saved {{event_count}} event{{event_count_plural}} on TicketScan. If you’re still planning to go, take another look at {{event_name}} and check the latest ticket options, onsale details, and venue notes in one place.

Before you buy, compare the all-in total, confirm the seller, and watch for speculative listings. Ticket math is already weird enough without mystery fees.

{{primary_cta: View my saved events}}

— TicketScan

## Tier 2 — Value reminder (10–14 days inactive)

**Subject:** Your saved events are still here

**Send timing:** Thursday, 10:00–11:00 AM recipient local time; send once, only to users with at least one future saved event.

**Body:**

Hi {{first_name}},

You have {{event_count}} upcoming event{{event_count_plural}} saved in TicketScan, including {{event_name}}. We can help you pick up where you left off: see where tickets are available, check onsale or presale timing, and get practical venue guidance before checkout.

One useful habit: compare the final checkout total across sellers—not just the headline ticket number.

{{primary_cta: Review my saved events}}

— TicketScan

## Tier 3 — Win-back (14+ days inactive)

**Subject:** We saved you a little ticket-hunting

**Send timing:** Tuesday, 9:00–10:00 AM recipient local time; one message, then a 30-day cooldown.

**Body:**

Hi {{first_name}},

Ticket plans have a habit of changing. Your TicketScan list still has {{event_count}} saved event{{event_count_plural}}, including {{event_name}}.

Come back when you’re ready to browse. TicketScan helps you find events, see where to buy, check onsale and presale dates, and understand the venue before you commit. No ticket scavenger hunt required.

{{primary_cta: Open TicketScan}}

If you’d rather not receive these reminders, {{unsubscribe_link}}.

— TicketScan

## Implementation gate

Do not send these drafts until the Email Agent confirms: explicit marketing consent, suppression against unsubscribed addresses, idempotent send logging, a real last-seen/eligibility query, and delivery telemetry. The current production API reports no drip sends and no triggered alerts, so today’s queued/sent count remains zero.
