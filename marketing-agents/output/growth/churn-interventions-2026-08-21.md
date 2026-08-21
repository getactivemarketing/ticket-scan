## Churn Intervention Copy — 2026-08-21

Drafts only. No users were emailed. Production does not expose last-seen data, verified price movements, alert clicks, or a scoped retention-send endpoint.

### Tier 1 — Gentle nudge (7–10 days inactive)

**Subject:** A quick price check for {{watchlist_event_name}}

**Timing:** 10:00 in the user’s local time; otherwise 10:00 UTC.

Hi {{first_name}},

You asked TicketScan to watch **{{watchlist_event_name}}** at {{venue}}. Prices can move while you’re busy doing literally anything more fun than refreshing ticket pages.

Open your watchlist for the latest verified comparison: {{watchlist_url}}

No pressure to buy. The point is knowing whether today is a deal or just ticket-market theater.

— TicketScan

### Tier 2 — Value reminder (10–14 days inactive)

**Subject:** You may have missed a move on your watchlist

**Timing:** 10:00 local time; suppress after a visit or click in the prior 48 hours.

Hi {{first_name}},

While you were away, **{{changed_event_count}}** event{{plural}} on your watchlist changed price. The biggest verified move was **{{event_name}}: {{movement_copy}}**.

See the comparison across sellers: {{watchlist_url}}

Ticket prices are not famous for emotional stability. A two-minute check tells you whether to buy, wait, or keep your wallet closed.

— TicketScan

### Tier 3 — Win-back (14+ days inactive)

**Subject:** Here’s what happened while you were away

**Timing:** Tuesday or Thursday at 10:00 local time; maximum one retention email per 30 days.

Hi {{first_name}},

Your TicketScan watchlist is still watching **{{top_event_name}}** and {{other_event_count}} other event{{plural}}. Since your last visit, **{{changed_event_count}}** tracked event{{plural}} changed price.

Come back for a fresh cross-market check: {{watchlist_url}}

We’ll show the numbers. You decide whether the tickets deserve your money.

— TicketScan

### Send safeguards

- Require `last_seen_at`, active consent, stable user ID, and a valid unsubscribe path.
- Suppress unsubscribed, bounced, recently purchased, recently alerted, or recently clicked users.
- Do not populate `{{movement_copy}}` until price history is verified; never invent savings or scarcity.
