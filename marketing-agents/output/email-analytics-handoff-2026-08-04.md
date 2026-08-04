# Email → Analytics Handoff — 2026-08-04

## Production snapshot

- Users: 197 total; 7 signed up in the last 7 days; 1 today
- Watchlist: 200 items
- Active target-price alerts: 0
- Triggered price alerts: 0
- Active newsletter subscribers: 4
- Newsletter adds today: 0
- Net subscriber growth today: 0
- Drip send records returned: 0
- Price history freshness: latest row 2026-07-24 20:01 UTC; 202 rows, Ticketmaster only

## Analytics implications

1. Do not calculate open rate, click rate, bounce rate, or alert-email conversion from today’s API response; those fields are not exposed.
2. Treat “0 drip sends” as “0 recorded,” not proof that SMTP sent zero messages.
3. The absence of target prices means the current watchlist cannot generate meaningful buy-now/hold conversion analysis.
4. The stale price feed is the main measurement risk: a digest based on it could create false price-drop claims.

## Suggested dashboard events/fields

- `email_sent`: `campaign`, `email_number`, `recipient_hash`, `sent_at`, `provider_message_id`, `success`
- `email_engaged`: `campaign`, `email_number`, `event_type` (open/click), `link_id`, `occurred_at`
- `price_alert`: `event_id`, `watchlist_id`, `triggered_price`, `target_price`, `email_sent`, `sent_at`
- `watchlist_digest`: `items_count`, `fresh_price_items`, `upcoming_14d_items`, `cta_clicks`

## Handoff request

Please flag the `/api/admin/alerts` 500 and the 11-day price-history freshness gap as instrumentation/data-quality issues before using email performance or alert conversion in channel reporting.
