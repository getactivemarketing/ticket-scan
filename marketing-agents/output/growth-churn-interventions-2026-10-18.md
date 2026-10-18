# Churn Intervention Drafts — 2026-10-18

Status: **draft only; nothing sent or queued**.

The admin API does not expose last-seen/login time, email consent history, suppression state, or delivery/click telemetry. No user can therefore be safely assigned to a churn tier today. These drafts also avoid disabled product claims about price tracking, price history, price movement, or price alerts.

## Tier 1 — Gentle nudge (7–10 days inactive)

**Subject:** Keep your next ticket search handy

Hi {{first_name}},

You saved {{event_count}} event{{event_plural}} on TicketScan. If you’re still planning to go, your saved events keep the date, venue, and official ticket links in one place.

Take another look: {{saved_events_url}}

No pressure—ticket planning is already enough of a sport.

— TicketScan

**Timing:** send on the next weekday at 10:00 AM recipient-local time, only after consent and suppression checks pass.

## Tier 2 — Value reminder (10–14 days inactive)

**Subject:** Your saved events are still one click away

Hi {{first_name}},

Your TicketScan saved events are still ready when you are. Check the latest event details, onsale timing, venue information, and official places to buy before your plans get calendar-crushed.

Open your saved events: {{saved_events_url}}

— TicketScan

**Timing:** send once at 10:00 AM recipient-local time, with a seven-day suppression window.

## Tier 3 — Win-back (14+ days inactive)

**Subject:** We saved your ticket-search shortcut

Hi {{first_name}},

It’s been a while. TicketScan is still useful when you want to find an event, check the onsale details, or get oriented on a venue before buying.

Pick up where you left off: {{saved_events_url}}

If you’re done with TicketScan emails, you can unsubscribe here: {{unsubscribe_url}}

— TicketScan

**Timing:** one message at 10:00 AM recipient-local time; suppress further win-back sends for 30 days.

## Email Agent handoff

Before production use, add: explicit consent/suppression lookup, idempotency key per user and campaign tier, delivery logging, unsubscribe handling, and a dry-run preview. Do not reuse the old drip copy that promotes price alerts while product tracking is down.
