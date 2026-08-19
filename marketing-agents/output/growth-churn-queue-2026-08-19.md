# Churn Intervention Queue — 2026-08-19

Status: **draft / not sent**. The live system cannot determine last visit, alert clicks, or safe win-back eligibility. Do not send until a consent-aware endpoint applies unsubscribe, bounce, recent-alert, and frequency suppression.

## Tier 1 — Gentle nudge (7–10 days inactive)

**Subject:** A price changed on your TicketScan watchlist

**Timing:** 10:00 AM recipient local time; send once after the first qualifying change.

Hi {{first_name}},

One of the events you’re tracking — **{{event_name}}** — changed price while you were away. Ticket prices have a strange talent for moving when nobody is looking.

See the latest comparison and decide whether it’s worth acting: **{{event_url}}**

No pressure. That’s the point of tracking it.

— TicketScan

## Tier 2 — Value reminder (10–14 days inactive)

**Subject:** You may have missed {{price_change_count}} price changes

**Timing:** 10:00 AM recipient local time; suppress if a Tier 1 message was sent in the previous seven days.

Hi {{first_name}},

While you were away, **{{price_change_count}}** event{{plural}} on your watchlist changed price. The biggest move was **{{event_name}}**, now {{movement_summary}}.

Open your watchlist: **{{watchlist_url}}**

TicketScan is here to do the boring price-watching so you don’t have to.

— TicketScan

## Tier 3 — Win-back (14+ days inactive)

**Subject:** We missed you. Here’s what changed while you were away.

**Timing:** 11:00 AM recipient local time; one message maximum per 30 days, with a plain unsubscribe link.

Hi {{first_name}},

You’ve been away from TicketScan for {{inactive_days}} days. Since then, **{{watchlist_change_count}}** tracked event{{plural}} changed price, including **{{event_name}}**.

Come see the current numbers: **{{watchlist_url}}**

If ticket hunting is no longer your thing, unsubscribe here: **{{unsubscribe_url}}**. No guilt trip — there are already enough fees in ticketing.

— TicketScan

## Queue controls required before sending

- Suppress unsubscribed, hard-bounced, deleted, and recently alerted users.
- Require a real activity timestamp and a qualifying watchlist price movement.
- Enforce one message per tier and a 30-day Tier 3 cap.
- Record queued, delivered, bounced, opened, clicked, and unsubscribed events with message ID.
- Use event-specific data only when current source prices are available; otherwise do not send a fabricated “change.”

## Handoffs

- **Email Agent (Agent 5):** templates and suppression rules are ready for implementation after instrumentation.
- **CRO Agent (Agent 6):** nine of 18 new users lack a watchlist item; prioritize the first-watchlist empty state.
- **Engineering:** fix `/api/admin/alerts` and add `last_seen_at` / email-event telemetry.

