## Churn Intervention Emails — 2026-08-01

Status: **prepared, not sent**. No users can be safely assigned to an inactivity tier because the admin API has no last-login/last-visit field. Personalize only with real watchlist and price-history values.

### Tier 1 — Gentle nudge (7–10 days inactive)

**Subject:** Prices changed on {{event_name}} — your watchlist noticed

Hi {{first_name}},

Quick heads-up: {{event_name}} moved from {{old_price}} to {{current_price}} since you last checked. That’s {{movement_percent}}% {{direction}}. Your watchlist is doing the tedious part; take a look before the market changes again.

[See the latest comparison]

No guilt trip, just useful numbers.

**Timing:** next weekday at 10:00 AM recipient local time.

### Tier 2 — Value reminder (10–14 days inactive)

**Subject:** You missed {{change_count}} price changes — here’s the useful part

Hi {{first_name}},

While you were away, {{change_count}} event{{plural}} on your watchlist changed price. The biggest move was {{event_name}}: {{savings_amount}} lower than the previous check.

Ticket prices are weird enough without monitoring them manually. TicketScan compares sources and keeps an eye on your list so you can buy when the numbers make sense.

[Review my watchlist]

**Timing:** next weekday at 9:00 AM recipient local time.

### Tier 3 — Win-back (14+ days inactive)

**Subject:** We kept watching your tickets while you were away

Hi {{first_name}},

A lot can happen in two weeks: {{event_count}} watchlist event{{plural}} changed, {{new_low_count}} reached a new low, and {{upcoming_count}} is coming up soon. The most useful update is {{event_name}} — now {{current_price}}, versus {{previous_price}} when you last looked.

Come back when you’re ready. We’ll show the market clearly, including the fees and the nonsense.

[Catch up on my watchlist]

**Timing:** Tuesday or Thursday at 8:30 AM recipient local time; suppress for 14 days after sending.

### Guardrails

- Suppress unsubscribed users, hard bounces, recent purchases, and anyone emailed in the last 24 hours.
- Send at most one message per tier and one win-back per 30 days.
- If price history has no meaningful movement, use a value reminder without invented savings.
- Record delivery, open, click, unsubscribe, and alert-click events with UTM tags.
