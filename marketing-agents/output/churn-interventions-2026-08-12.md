## Churn Intervention Queue — 2026-08-12

Status: copy prepared; no emails sent. The current admin API has no individualized win-back endpoint, and production last-seen telemetry is unavailable.

### Tier 1 — Gentle nudge (7–10 days inactive)

**Subject:** Prices changed on {{watchlist_event_count}} events you’re tracking

Hi {{first_name}},

A quick heads-up: prices moved on {{event_name}} since your last visit. TicketScan is still watching {{watchlist_event_count}} event{{plural}} for you, so you don’t have to keep refreshing ticket sites like it’s a part-time job.

Come take a look at the latest comparison and decide whether the move is worth acting on.

{{event_summary}}

See my watchlist: {{watchlist_url}}

— TicketScan

**Timing:** Next weekday at 10:00 AM recipient local time.

### Tier 2 — Value reminder (10–14 days inactive)

**Subject:** You may have missed price drops on {{changed_event_count}} events

Hi {{first_name}},

While you were away, {{changed_event_count}} event{{plural}} on your watchlist had price changes. The biggest observed move was {{largest_change}} on {{event_name}}.

TicketScan compares marketplaces and tracks the trend so you can skip the panic-buy tax. Check your watchlist before the next price move.

Review the changes: {{watchlist_url}}

— TicketScan

**Timing:** Next weekday at 9:00 AM recipient local time.

### Tier 3 — Win-back (14+ days inactive)

**Subject:** We miss you — here’s what happened while you were away

Hi {{first_name}},

Your watchlist kept working while you were gone. {{changed_event_count}} tracked event{{plural}} changed, and {{notable_event}} is the one worth a fresh look.

No guilt trip, no fake countdown clock: just current prices, marketplace comparisons, and a clearer read on whether to buy or wait.

Catch up on your watchlist: {{watchlist_url}}

— TicketScan

**Timing:** Saturday at 11:00 AM recipient local time, with a 30-day suppression after send.

### Queue disposition

- Tier 1 queued: 0
- Tier 2 queued: 0
- Tier 3 queued: 0
- Email Agent handoff: use these templates only after `last_seen_at`, price-change summaries, and consent/suppression checks are available.
