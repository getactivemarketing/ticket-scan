# Churn Interventions — 2026-08-20

Status: **drafts only; 0 queued and 0 sent**. Production eligibility cannot be computed because visit recency is not exposed. Send at 10:00 AM in the recipient’s local timezone, with consent, unsubscribe, bounce, and deduplication checks.

## Tier 1 — Gentle nudge (7–10 days inactive)

**Subject:** Prices moved on your watchlist

Hi {{first_name}},

Your TicketScan watchlist is doing the boring work so you don’t have to. Prices changed on {{changed_event_count}} tracked event(s), including **{{best_event_name}}**, which moved from **{{old_price}}** to **{{new_price}}**.

Take a quick look before the market changes again: {{watchlist_url}}

— TicketScan

P.S. No pressure to buy. We’re here to help you avoid paying the “because you waited” tax.

## Tier 2 — Value reminder (10–14 days inactive)

**Subject:** You’re missing price drops on {{changed_event_count}} events

Hi {{first_name}},

While you were away, {{changed_event_count}} event(s) on your watchlist changed price. The biggest move was **{{best_event_name}}**: **{{savings_amount}}** below its previous tracked price.

Compare current listings and decide for yourself: {{watchlist_url}}

Keep the alerts, change your target prices, or remove anything you’re no longer watching. Your watchlist should work for you—not become another inbox chore.

— TicketScan

## Tier 3 — Win-back (14+ days inactive)

**Subject:** We missed you. Here’s what changed while you were away

Hi {{first_name}},

Ticket prices moved while you were gone. {{changed_event_count}} event(s) on your watchlist had meaningful changes, led by **{{best_event_name}}** at **{{current_price}}**.

Come see what’s worth watching now: {{watchlist_url}}

TicketScan compares listings across marketplaces so you can spot a real deal—and skip the suspiciously “convenient” one. If these updates aren’t useful, unsubscribe here: {{unsubscribe_url}}.

— TicketScan

## Send guardrails

- Do not send without a verified `last_seen_at` window and a current price-history movement.
- Suppress unsubscribed, bounced, recently contacted, and already-reactivated users.
- Log template, recipient, send time, event IDs, and click-through attribution.
