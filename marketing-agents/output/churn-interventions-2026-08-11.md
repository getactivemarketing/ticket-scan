## Churn Intervention Copy — 2026-08-11

No users were assigned to a tier because the production API does not expose last-visit or last-login timestamps. The templates below are ready for Agent 5 once a verified audience and price movement data are available. Do not send to signup-age proxy cohorts.

### Tier 1 — Gentle nudge, 7–10 days inactive

**Subject:** Prices changed on {{watchlist_event_1}} — want a fresh look?

**Send timing:** 10:00–11:00 AM recipient local time, one message only.

Hi {{first_name}},

Your watchlist is still keeping an eye on {{watchlist_event_1}}. Since your last visit, the lowest verified listing moved from {{old_price}} to {{new_price}} ({{direction}} {{percent_change}}%).

Ticket prices are fickle little creatures. Take another look before you decide whether to buy, wait, or keep watching.

**Check my watchlist →** {{watchlist_url}}

— TicketScan

### Tier 2 — Value reminder, 10–14 days inactive

**Subject:** You may have missed {{price_drop_count}} price change{{plural}} on your watchlist

**Send timing:** 6:00–7:00 PM recipient local time, after confirming no recent visit.

Hi {{first_name}},

While you were away, {{price_drop_count}} event{{plural}} on your watchlist changed price. The biggest verified move was {{event_name}}: {{old_price}} → {{new_price}}, a potential difference of {{savings}} before fees.

No hype, no “buy now or regret everything.” Just a fresh comparison so you can make the call.

**See the changes →** {{watchlist_url}}

— TicketScan

### Tier 3 — Win-back, 14+ days inactive

**Subject:** We miss you — here’s what changed while you were away

**Send timing:** Tuesday or Thursday, 5:00–6:00 PM recipient local time; suppress if no verified value change.

Hi {{first_name}},

Your TicketScan watchlist has been quiet, but the ticket market has not. Since your last visit, {{changed_event_count}} event{{plural}} changed price, including {{headline_event}} at {{headline_price}}.

Come back for a quick comparison across Ticketmaster, SeatGeek, and StubHub. If nothing looks good, waiting is still a perfectly respectable answer.

**Review my watchlist →** {{watchlist_url}}

You can adjust alert preferences or unsubscribe anytime.

— TicketScan

### Sending guardrails

- Require `last_seen_at`, unsubscribe status, bounce status, and a verified price-history delta.
- Cap retention email volume at one intervention per user per seven days.
- Add open, click, return-visit, and watchlist-add events before judging the sequence.
- Never claim savings or scarcity unless the underlying comparison data supports it.

