# Churn Intervention Drafts — 2026-08-24

No messages were sent. Eligibility is not measurable because the production API lacks last-visit data. These drafts are ready for a suppression-aware email queue once `last_seen_at`, alert/click data, and current price snapshots are available.

## Tier 1 — Gentle nudge (7–10 days inactive)

**Subject:** Prices changed on {{watchlist_count}} events you saved

**Timing:** Next weekday at 10:00 AM recipient local time.

Hi {{first_name}},

Quick heads-up: prices moved on {{event_names}} while you were away. Your saved events are still being tracked, so you don’t have to keep refreshing ticket pages like it’s a part-time job.

{{price_movement_summary}}

Check your watchlist: {{watchlist_url}}

— TicketScan

## Tier 2 — Value reminder (10–14 days inactive)

**Subject:** You may have missed {{price_drop_count}} price drops

**Timing:** Next weekday at 9:00 AM recipient local time.

Hi {{first_name}},

{{price_drop_count}} event{{plural}} on your watchlist changed since your last visit. The biggest move was {{largest_change}} on {{event_name}}.

Ticket prices are weird enough without checking them manually. Let TicketScan do the watching: {{watchlist_url}}

— TicketScan

## Tier 3 — Win-back (14+ days inactive)

**Subject:** We saved your watchlist — here’s what changed

**Timing:** Tuesday or Thursday at 11:00 AM recipient local time.

Hi {{first_name}},

Your TicketScan watchlist is still here. Since you last checked, {{change_summary}}.

Come back for the latest cross-market comparison and a buy/wait signal on {{top_event}}: {{watchlist_url}}

No guilt trip. Just fewer “I should have bought that earlier” moments.

— TicketScan
