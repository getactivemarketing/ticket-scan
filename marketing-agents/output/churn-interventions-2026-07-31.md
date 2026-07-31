## Churn Intervention Emails — 2026-07-31

Status: **prepared, not sent**. Personalize from the recipient’s watchlist and latest price-history record once the email job and engagement fields are available. Do not infer a churn state from watchlist age alone.

### Tier 1 — Gentle nudge (7–10 days inactive)

**Subject:** Prices changed on {{event_name}} — your watchlist noticed

Hi {{first_name}},

Quick heads-up: {{event_name}} moved from {{old_price}} to {{current_price}} since you last checked. That’s {{movement_percent}}% {{direction}}. Your watchlist is doing the tedious part; take a look before the market changes again.

[See the latest comparison]

You can adjust the alert price or remove the event anytime. No guilt trip, just useful numbers.

**Timing:** next weekday at 10:00 AM recipient local time.

### Tier 2 — Value reminder (10–14 days inactive)

**Subject:** You missed {{change_count}} price changes — here’s the useful part

Hi {{first_name}},

While you were away, {{change_count}} event{{plural}} on your watchlist changed price. The biggest move was {{event_name}}: {{savings_amount}} lower than the previous check.

Ticket prices are weird enough without having to monitor them manually. TicketScan compares sources and keeps an eye on your list so you can buy when the numbers make sense.

[Review my watchlist]

**Timing:** next weekday at 9:00 AM recipient local time.

### Tier 3 — Win-back (14+ days inactive)

**Subject:** We kept watching your tickets while you were away

Hi {{first_name}},

A lot can happen in two weeks: {{event_count}} watchlist event{{plural}} changed, {{new_low_count}} reached a new low, and {{upcoming_count}} is coming up soon. Your most interesting update is {{event_name}} — now {{current_price}}, versus {{previous_price}} when you last looked.

Come back when you’re ready. We’ll show the market clearly, including the fees and the nonsense.

[Catch up on my watchlist]

If ticket emails are too frequent, change your preferences instead of unsubscribing from everything.

**Timing:** Tuesday or Thursday at 8:30 AM recipient local time; suppress after one send for 14 days.

### Send guardrails

- Suppress users with an unsubscribe, hard bounce, recent purchase signal, or an alert email in the last 24 hours.
- Cap win-back at one message per tier and one win-back per 30 days.
- Use real price-history deltas only; if no meaningful movement exists, use the value-reminder variant without invented savings.
- Add UTM tags and record delivered/open/click/unsubscribe events so the next daily run can measure lift.

