# Churn Intervention Drafts — 2026-08-17

No messages were sent or queued. The live system does not expose last-visit eligibility, consent/suppression state for this workflow, or an approved intervention-send route. These drafts are ready for Agent 5 after those gates exist.

## Tier 1 — Gentle nudge (7–10 days inactive)

**Subject:** Prices changed on your TicketScan watchlist

**Send timing:** Next weekday at 10:00 local time, after checking suppression and duplicate-send history.

Hi {{first_name}},

Your watchlist is doing the boring work of checking ticket prices. While you were away, **{{changed_event_count}} event{{plural}}** changed price.

The biggest move: **{{event_name}}** at {{venue}} is now {{movement_copy}}. Ticket prices are moody little things, so a quick comparison can save more than another open tab.

[See my watchlist](https://www.ticketscan.io/watchlist)

— TicketScan

P.S. If you already bought, congratulations. You can remove the event and stop the alerts.

## Tier 2 — Value reminder (10–14 days inactive)

**Subject:** You may have missed {{changed_event_count}} watchlist price changes

**Send timing:** Next weekday at 10:00 local time; suppress if a recent session or alert click is recorded.

Hi {{first_name}},

While you were gone, **{{changed_event_count}} events** on your watchlist moved. The useful bit: {{savings_or_movement_summary}}.

We built TicketScan so you don’t have to babysit three ticket marketplaces. Compare the current prices, keep the events worth watching, and ditch the rest.

[Check the changes](https://www.ticketscan.io/watchlist)

— TicketScan

P.S. No hard feelings if your plans changed. Unsubscribe anytime.

## Tier 3 — Win-back (14+ days inactive)

**Subject:** We missed you. Here’s what changed while you were away.

**Send timing:** Tuesday or Wednesday at 10:00 local time; one message maximum until a session or click is observed.

Hi {{first_name}},

You’ve been away for {{inactive_days}} days. Here’s the honest recap: **{{changed_event_count}} watchlist events changed**, including {{headline_change}}.

TicketScan is still here to compare prices and flag meaningful moves, without pretending every ticket is a “deal.” If the events are still on your calendar, your watchlist is the fastest way back in.

[See what happened](https://www.ticketscan.io/watchlist)

If you’re done ticket hunting, [unsubscribe here]({{unsubscribe_url}}). We’d rather lose an address honestly than keep emailing a dead inbox.

— TicketScan

### Personalization and safety rules

- Populate movement copy only from verified price-history rows; never invent savings or scarcity.
- Require active marketing consent, suppression check, idempotency key, and a one-click unsubscribe footer.
- Do not send to users whose event has passed, whose address bounced, or who received another lifecycle email inside the cooldown window.

