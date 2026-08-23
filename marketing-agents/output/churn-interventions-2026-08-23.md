# Churn Intervention Drafts — 2026-08-23

No messages were queued. The production API does not expose visit recency or a targeted send queue. These are ready-to-personalize drafts for Email Agent 5 once eligibility and suppression checks are available.

## Tier 1 — Gentle nudge (7–10 days inactive)

**Subject:** Prices changed on {{watchlist_event_count}} events you’re tracking

**Send timing:** 10:00–11:00 AM recipient local time, after a verified price change.

Hi {{first_name}},

Quick heads-up: prices moved on {{event_name}} at {{venue}}. TicketScan is watching it so you don’t have to keep opening six tabs like it’s 2009.

See the latest comparison and your target price: {{watchlist_url}}

— TicketScan

## Tier 2 — Value reminder (10–14 days inactive)

**Subject:** You may have missed {{price_change_count}} price changes

**Send timing:** 10:00 AM recipient local time, Tuesday or Wednesday; maximum one message per seven days.

Hi {{first_name}},

While you were away, {{price_change_count}} event{{plural}} on your watchlist changed price. The biggest move was {{event_name}}: {{price_delta}} ({{old_price}} → {{new_price}}).

Your watchlist is still doing the boring work. Take a look before you buy: {{watchlist_url}}

— TicketScan

## Tier 3 — Win-back (14+ days inactive)

**Subject:** We saved your watchlist. The tickets did not sit still.

**Send timing:** 6:00 PM recipient local time, Thursday; maximum one win-back per 30 days.

Hi {{first_name}},

Your TicketScan watchlist is still here. Since your last visit, {{changed_event_count}} tracked event{{plural}} had price movement{{plural}}. We compare Ticketmaster, SeatGeek, and StubHub so you can see whether today’s price is a deal—or just wearing a tiny deal costume.

Review your events: {{watchlist_url}}

If you’re no longer shopping, {{unsubscribe_url}}.

— TicketScan

## Safety rules

- Suppress users with a recent login, recent alert click, recent purchase-intent click, or unsubscribe.
- Send only when a verified event/price fact is available; never fabricate a price movement.
- Cap at one retention email per seven days and one Tier 3 win-back per 30 days.
