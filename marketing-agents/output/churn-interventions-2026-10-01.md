# Churn Intervention Pack — 2026-10-01

No emails were queued or sent. The production admin API has no approved win-back endpoint and does not expose last-visit timestamps, click data, or per-user price movement. These are send-ready templates for the Email Agent once those fields and consent checks are available.

## Tier 1 — Gentle nudge (7–10 days inactive)

**Subject:** Prices changed on your TicketScan watchlist

**Timing:** 11:00 AM recipient local time, one message only.

**Body:**

Hi {{first_name}},

Your watchlist is supposed to do the remembering for you. Since you last checked, **{{event_name}}** moved from {{old_price}} to {{new_price}} ({{direction}} {{change}}).

See the latest comparison before the market changes again: {{event_url}}

No hype, just the numbers. — TicketScan

## Tier 2 — Value reminder (10–14 days inactive)

**Subject:** You’re missing price drops on {{event_count}} watchlist event{{plural}}

**Timing:** 10:00 AM recipient local time; suppress if a price-alert email was sent in the last 72 hours.

**Body:**

Hi {{first_name}},

While you were away, {{event_count}} event{{plural}} on your watchlist changed price. The biggest move was **{{event_name}}**, down {{change}} to {{new_price}}.

Open your watchlist: {{watchlist_url}}

Ticket prices are weird. That’s why we track them. — TicketScan

## Tier 3 — Win-back (14+ days inactive)

**Subject:** We missed you — here’s what changed while you were away

**Timing:** 9:00 AM recipient local time; suppress for 14 days after send.

**Body:**

Hi {{first_name}},

Your TicketScan watchlist kept watch while you were busy. Since your last visit:

- {{drop_count}} tracked event{{drop_plural}} had a price drop
- The largest drop was **{{event_name}}**: {{old_price}} → {{new_price}}
- {{new_event_count}} new comparable event{{new_plural}} are now available

Take another look: {{watchlist_url}}

If ticket hunting is no longer useful, you can manage alerts here: {{preferences_url}}

— TicketScan

## Sending guardrails

- Check `is_active` and suppress anyone who unsubscribed or hard-bounced.
- Require a real `last_seen_at`; do not treat watchlist creation as a visit.
- Personalize only with verified price-history rows; omit a claim when data is missing.
- Cap lifecycle mail at one intervention per seven days, separate from transactional price alerts.
