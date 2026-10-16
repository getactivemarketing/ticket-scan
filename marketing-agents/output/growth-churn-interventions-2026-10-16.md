# Growth / Churn Intervention Drafts — 2026-10-16

Status: drafts only. Nothing was sent or queued. The live API does not expose visit recency, consent state, suppression history, or email engagement events. These drafts deliberately avoid claims about price tracking, price history, price drops, alerts, savings, or buy/wait recommendations.

## Tier 1 — Gentle nudge (7–10 days inactive)

**Subject:** Your [event name] shortlist is still here

Hi [first name],

You saved **[event name]** at **[venue]** in [city]. Ticket plans have a habit of disappearing into fifteen browser tabs, so we kept the useful bits together: the event date, venue details, and official places to buy.

When you’re ready, open your saved events and pick up where you left off.

**CTA:** Open my saved events

Send timing: weekday late morning in the recipient’s local time, after visit tracking, consent, and suppression checks are live.

## Tier 2 — Value reminder (10–14 days inactive)

**Subject:** Your next ticket plan, minus the browser-tab chaos

Hi [first name],

Your saved event, **[event name]**, is still in your TicketScan list. We can help you sanity-check the basics before you buy: the venue, the event date, onsale or presale timing when available, and where to find official ticket links.

Quick reminder: compare the all-in total, check the seller, and be suspicious of listings that are vague about seat details. “Cheap” is not a useful adjective if the fees arrive wearing a fake mustache.

**CTA:** Review [event name]

Send timing: 3–5 days after Tier 1, only for a confirmed inactive and consented recipient.

## Tier 3 — Win-back (14+ days inactive)

**Subject:** A cleaner way to plan your next night out

Hi [first name],

We haven’t seen you in a while. If **[event name]** is still on your calendar, TicketScan can help you get oriented with the date, venue, seating guidance, onsale details, and official places to start your ticket search.

If that event is no longer your thing, search for a team, artist, venue, or city that is. If you’d rather not hear from us, you can unsubscribe below—no guilt trip, no tiny-print obstacle course.

**CTA:** Find my next event

Send timing: one message after a confirmed 14+ day inactivity window, with unsubscribe suppression applied.

## Queue Notes for Email Agent 5

- Current send queue: **0**.
- Personalize only from verified saved-event fields: event name, venue, city, date, and onsale/presale data when present.
- Do not insert price, alert, savings, or “we’ll tell you when it drops” language.
- Require a successful SMTP test and delivery/open/click logging before launch.
