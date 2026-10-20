# Churn Intervention Drafts — 2026-10-20

These are send-ready drafts, not queued messages. No user can be assigned to a tier until last-seen data, marketing consent, suppression status, and delivery logging are available. Do not use these drafts to imply price tracking, price history, price changes, alerts, or savings.

## Tier 1 — Gentle nudge, 7–10 days inactive

**Subject:** Keep [EVENT NAME] handy

Hi [FIRST NAME],

You saved **[EVENT NAME]** at **[VENUE]**. TicketScan keeps the event date, onsale details, venue information, and official ticket links together so you can pick up where you left off.

When you’re ready, open your saved events and check the current official ticket options. Before buying, compare the all-in total and confirm the seller’s delivery terms—ticketing fees have a talent for hiding in the last act.

[View my saved events]

— TicketScan

**Timing:** weekday late morning in the recipient’s local time, after consent and suppression checks.

## Tier 2 — Value reminder, 10–14 days inactive

**Subject:** Your saved events are still waiting

Hi [FIRST NAME],

You have [COUNT] saved event[s], including **[EVENT NAME]**. Return to TicketScan when you want the practical details in one place: dates, venues, onsale information, seating guidance, and links to official ticket sources.

If you’re shopping today, compare the final checkout total—not just the headline ticket number—and be cautious with listings that do not clearly say the tickets are in hand.

[Review my saved events]

— TicketScan

**Timing:** weekday early evening in the recipient’s local time, after engagement and suppression checks.

## Tier 3 — Win-back, 14+ days inactive

**Subject:** A quick way back to your ticket search

Hi [FIRST NAME],

It’s been a while. Your saved events are still here, including **[EVENT NAME]** at **[VENUE]**. TicketScan can help you rediscover the event details and jump to the available official ticket sources without starting from scratch.

You can also browse venue guides for seating sections, capacity, and practical arrival tips. No mystery meat marketing—just the details that help you make a less annoying ticket decision.

[Return to TicketScan]

— TicketScan

**Timing:** Tuesday or Wednesday late morning in the recipient’s local time, only for a verified opted-in, non-suppressed user.

## Queueing recommendation

Queue count: **0**. Build an idempotent lifecycle-email queue first, with per-user consent, suppression, deduplication, unsubscribe handling, delivery status, and audit logs. The existing drip runner was not invoked because those controls are not verifiable from the current admin surface.
