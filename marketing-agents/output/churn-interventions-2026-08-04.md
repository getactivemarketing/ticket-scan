## Churn Intervention Queue — 2026-08-04

**Status:** Drafts prepared; **0 emails queued or sent**. The current admin API cannot establish inactivity or safely enforce suppression. Replace tokens with verified watchlist/price data at send time.

### Tier 1 — Gentle nudge (7–10 days inactive)

**Eligibility:** `last_seen_at` 7–10 days ago, active consent, no recent campaign send.

**Subject:** Prices changed on your watchlist — quick look?

**Send timing:** Tuesday or Thursday, 10:00–11:00 AM recipient local time.

**Body:**

Hi {{first_name}},

Your TicketScan watchlist moved while you were away. **{{changed_event_count}} event{{plural}} changed**, including {{top_event_name}}: {{price_direction}} from {{old_price}} to {{current_price}} ({{change_percent}}%).

Take a 30-second look before the market changes again: {{watchlist_url}}

No ticket-selling theatrics here — just the numbers, side by side.

— TicketScan

### Tier 2 — Value reminder (10–14 days inactive)

**Eligibility:** `last_seen_at` 10–14 days ago, active consent, no recent campaign send.

**Subject:** You may have missed {{changed_event_count}} price move{{plural}}

**Send timing:** Wednesday, 11:00 AM recipient local time.

**Body:**

Hi {{first_name}},

You’re tracking {{watchlist_count}} event{{plural}}, and {{changed_event_count}} of them changed since your last visit. The biggest move was {{top_event_name}}: {{savings_or_change_summary}}.

TicketScan compares Ticketmaster, SeatGeek, and StubHub so you can see whether a “deal” is actually a deal. Review your watchlist: {{watchlist_url}}

If these alerts are too frequent, adjust your preferences here: {{preferences_url}}

— TicketScan

### Tier 3 — Win-back (14+ days inactive)

**Eligibility:** `last_seen_at` 14+ days ago, active consent, no recent campaign send, no unsubscribe/bounce.

**Subject:** We kept watching your tickets while you were away

**Send timing:** Tuesday, 10:00 AM recipient local time; one follow-up after 7 days maximum.

**Body:**

Hi {{first_name}},

You’ve been gone {{inactive_days}} days. While you were away, {{watchlist_summary}}.

Come back for the useful part: side-by-side prices, price history, and a buy/wait/hold recommendation — without making you open six tabs and perform your own spreadsheet archaeology.

See what changed: {{watchlist_url}}

Not shopping right now? Update your email preferences: {{preferences_url}}

— TicketScan

### Send guardrails

- Do not send while `/api/admin/alerts` is failing or while price history is unavailable.
- Require a valid consent state, a verified recipient, and a suppression check immediately before send.
- Do not claim a price movement unless it is backed by stored before/after observations.
- Add UTM tags and record delivered, opened, clicked, unsubscribed, and bounced events before measuring lift.
