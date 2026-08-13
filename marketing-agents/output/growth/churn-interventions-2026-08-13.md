## Churn Intervention Copy — 2026-08-13

These are drafts, not sends. The admin API does not expose last-seen data, verified price movement, alert clicks, or an individualized send endpoint. Use only after suppression and consent checks are implemented.

### Tier 1 — Gentle nudge (7–10 days inactive)

**Subject:** A quick price check for {{watchlist_event_name}}

**Timing:** Send at 10:00 local time, using the user’s timezone; otherwise 10:00 UTC.

**Body:**

Hi {{first_name}},

You asked TicketScan to keep an eye on **{{watchlist_event_name}}** at {{venue}}. Ticket prices can move while you’re busy doing literally anything more fun than refreshing ticket pages.

Open your watchlist to see the latest comparison and current low price: {{watchlist_url}}

No pressure to buy. The point is knowing whether today is a deal or just ticket-market theater.

— TicketScan

### Tier 2 — Value reminder (10–14 days inactive)

**Subject:** You may have missed a move on your watchlist

**Timing:** Send at 10:00 local time; suppress if a user visited or clicked in the previous 48 hours.

**Body:**

Hi {{first_name}},

While you were away, **{{changed_event_count}}** event{{plural}} on your watchlist changed price. The biggest verified move was **{{event_name}}: {{movement_copy}}**.

See the comparison across sellers: {{watchlist_url}}

Ticket prices are not famous for emotional stability. A two-minute check can tell you whether to buy, wait, or keep your wallet closed.

— TicketScan

### Tier 3 — Win-back (14+ days inactive)

**Subject:** Here’s what happened while you were away

**Timing:** Send Tuesday or Thursday at 10:00 local time; one message maximum per 30 days.

**Body:**

Hi {{first_name}},

Your TicketScan watchlist is still keeping an eye on **{{top_event_name}}** and {{other_event_count}} other event{{plural}}. Since your last visit, **{{changed_event_count}}** tracked event{{plural}} changed price.

Come back for a fresh cross-market check: {{watchlist_url}}

We’ll show the numbers. You decide whether the tickets deserve your money.

— TicketScan

### Send safeguards

- Require `last_seen_at`, active consent, and a stable user ID.
- Suppress users who unsubscribed, bounced, recently purchased, or clicked a prior retention message.
- Do not populate `{{movement_copy}}` until price history is verified; never invent savings or scarcity.
