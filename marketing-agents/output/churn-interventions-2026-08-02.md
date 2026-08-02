# Churn Intervention Copy — 2026-08-02

These are approved-draft templates, **not sent emails**. Personalize only with verified watchlist and price-history data. Default send time: **10:00 AM in the recipient’s local timezone**; use 11:00 AM local if timezone is unavailable.

## Tier 1 — Gentle nudge (7–10 days inactive)

**Subject:** `A price changed on {{event_name}}`

Hi {{first_name}},

You’re tracking **{{event_name}}** at {{venue}}. TicketScan spotted a change: the lowest verified price moved from **{{old_price}}** to **{{new_price}}** (**{{direction}} {{change_percent}}%**).

That may be a buy signal—or a reason to keep waiting. Open your watchlist to compare the current listings before the market changes again.

**CTA:** Review my watchlist

— TicketScan

## Tier 2 — Value reminder (10–14 days inactive)

**Subject:** `You may have missed {{change_count}} ticket price changes`

Hi {{first_name}},

While you were away, **{{change_count}} event{{plural}}** on your watchlist changed price. The biggest verified move was **{{event_name}}**, down **{{savings_amount}}** to **{{new_price}}**.

TicketScan compares marketplaces so you can decide whether to buy, wait, or ignore the fake urgency. Your watchlist is still here.

**CTA:** See the latest prices

— TicketScan

## Tier 3 — Win-back (14+ days inactive)

**Subject:** `Still waiting for the right ticket price?`

Hi {{first_name}},

You left **{{watchlist_count}} event{{plural}}** in your watchlist. We can keep doing the tedious part—checking marketplaces and showing the price trend—while you decide what’s actually worth your money.

Come back to review **{{event_name}}** and set the price you’d be willing to pay. No panic-buying required.

**CTA:** Reopen my watchlist

If you no longer want price updates, {{unsubscribe_link}}.

— TicketScan

## Send guardrails

- Do not fill price or savings fields unless the same event has current, verified price-history rows.
- Suppress users without a valid active email consent state.
- Record delivery, open, click, return session, watchlist action, and target-price action separately.
- Cap win-back sends at one message per tier and stop the sequence after a return action or unsubscribe.
