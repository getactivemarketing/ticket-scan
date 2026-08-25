# Churn Intervention Drafts — 2026-08-25

No messages were sent or queued. The API exposes neither last activity nor a suppression-aware retention-send endpoint, and current price history is stale. These are Email Agent drafts with placeholders; do not assert a price movement until a fresh comparison exists.

## Tier 1 — Gentle nudge (7–10 days inactive)

**Subject:** Your tracked events may have moved

**Send timing:** 10:00–11:00 local time, after eligibility is confirmed.

Hi {{first_name}},

Ticket prices have a habit of changing when nobody is looking. Your watchlist is already doing the useful part: keeping {{event_name}} in one place. Open it to compare today’s listings and see whether the number is getting closer to your ceiling.

We won’t call it a deal until the data says so. That’s the whole point.

[Check my watchlist →](https://www.ticketscan.io/dashboard)

## Tier 2 — Value reminder (10–14 days inactive)

**Subject:** You may be missing the next useful price change

**Send timing:** 10:00–11:00 local time, only with fresh price-history data.

Hi {{first_name}},

You saved {{event_count}} event{{plural}} to TicketScan. The next step is simple: check the comparison, decide what you’re willing to pay, and set a target price if you want us to keep watch.

{{#if verified_change}}Since your last check, {{event_name}} moved {{change_summary}}.{{/if}}

[Review my watchlist →](https://www.ticketscan.io/dashboard)

## Tier 3 — Win-back (14+ days inactive)

**Subject:** We miss you — your ticket research can be shorter

**Send timing:** 10:00–11:00 local time, with a 7-day suppression window.

Hi {{first_name}},

Ticket shopping still does not need to be a three-tab endurance event. TicketScan compares marketplaces in one place and lets you keep an event handy while prices do their usual little dance.

Come back when tickets are on your radar. If {{event_name}} is still relevant, start there; if not, search for something new and track it in under a minute.

[Return to TicketScan →](https://www.ticketscan.io/dashboard)

If you no longer want email from us, unsubscribe below. We’ll respect it.

## Required safeguards before send

- Confirm `last_seen_at` eligibility and suppress active users.
- Suppress unsubscribed, bounced, recently alerted, and recently contacted users.
- Populate `{{verified_change}}` only from a fresh comparison; never use signup age as a churn proxy.
- Add stable message IDs plus delivery, open, click, unsubscribe, and complaint tracking.
