# Email Agent Handoff — Retention Interventions — 2026-10-22

Status: **draft only; nothing sent or queued**.

No user can be safely assigned to a churn tier because the admin API has no last-seen/login timestamp, consent/suppression lookup, or delivery/click telemetry. These drafts use only currently supported TicketScan value: event discovery, saved events, onsale details, venue information, and outbound purchase links.

## Tier 1 — Gentle nudge (7–10 days inactive)

**Subject:** Keep your next ticket search handy

Hi {{first_name}},

You saved {{event_count}} event{{event_plural}} on TicketScan. If you’re still planning to go, your saved events keep the date, venue, onsale details, and official ticket links in one place.

Take another look: {{saved_events_url}}

No pressure—ticket planning is already enough of a sport.

— TicketScan

Send once at 10:00 AM recipient-local time after consent and suppression checks pass.

## Tier 2 — Value reminder (10–14 days inactive)

**Subject:** Your saved events are still one click away

Hi {{first_name}},

Your TicketScan saved events are still ready when you are. Check the latest event details, onsale timing, venue information, and official places to buy before your plans get calendar-crushed.

Open your saved events: {{saved_events_url}}

— TicketScan

Send once at 10:00 AM recipient-local time with a seven-day suppression window.

## Tier 3 — Win-back (14+ days inactive)

**Subject:** We saved your ticket-search shortcut

Hi {{first_name}},

It’s been a while. TicketScan is still useful when you want to find an event, check onsale details, or get oriented on a venue before buying.

Pick up where you left off: {{saved_events_url}}

If you’re done with TicketScan emails, unsubscribe here: {{unsubscribe_url}}

— TicketScan

Send once at 10:00 AM recipient-local time; suppress further win-back sends for 30 days.

Before production use: add consent/suppression checks, an idempotency key per user and tier, delivery logging, unsubscribe handling, and a dry-run preview. Do not reuse legacy drip copy that promotes price alerts.
