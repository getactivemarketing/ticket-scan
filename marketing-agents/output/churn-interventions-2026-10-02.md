# Churn Intervention Pack — 2026-10-02

No emails were queued or sent. The production admin API has no approved win-back endpoint and does not expose last-visit timestamps, clicks, bounces, or per-user current price data. These are send-ready templates for the Email Agent once segmentation and consent checks are available.

## Tier 1 — Gentle nudge (7–10 days inactive)

**Subject:** Your TicketScan watchlist is waiting

**Timing:** 11:00 AM recipient local time; send once.

**Body:**

Hi {{first_name}},

You saved {{event_name}} at {{venue}}. TicketScan can help you find the event page and the places selling tickets, so you do not have to start the hunt from scratch.

Review the event: {{event_url}}

Compare the all-in total before you buy. Ticket fees enjoy hiding in the bushes. — TicketScan

## Tier 2 — Value reminder (10–14 days inactive)

**Subject:** A quick, honest update on your saved events

**Timing:** 10:00 AM recipient local time; suppress for 14 days after send.

**Body:**

Hi {{first_name}},

You have {{event_count}} saved event{{plural}} in TicketScan. {{event_name}} is still on your list, with {{onsale_or_event_date}} at {{venue}}.

Open your watchlist: {{watchlist_url}}

When you compare listings, check the final all-in total and whether the listing is for an actual seat rather than a speculative promise.

— TicketScan

## Tier 3 — Win-back (14+ days inactive)

**Subject:** We saved your ticket hunt for you

**Timing:** 9:00 AM recipient local time; suppress for 30 days after send.

**Body:**

Hi {{first_name}},

Your saved events are still here. Since you last visited, TicketScan may have new event listings and venue information worth a look.

{{event_name}} at {{venue}} is scheduled for {{event_date}}. Check the latest places to buy tickets and the venue guide before making a decision.

Review your watchlist: {{watchlist_url}}

No fake urgency, no mystery math—just a cleaner way to shop for tickets. — TicketScan

## Sending guardrails

- Require a real `last_seen_at`; do not infer a visit from signup or watchlist creation.
- Check active consent and suppress unsubscribed, hard-bounced, or recently contacted users.
- Do not mention price changes, price history, price alerts, savings, or buy/wait recommendations until product status is restored.
- Cap lifecycle mail at one intervention per 14 days, separate from transactional messages.
