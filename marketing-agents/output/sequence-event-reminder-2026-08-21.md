# Event Reminder Sequence

**Trigger:** A user has an active watchlist item with an event date 14, 7, or 3 calendar days away.  
**Audience:** Authenticated users who opted into product email; exclude unsubscribes, hard bounces, cancelled/past events, and users who received a price-alert email in the previous 24 hours.  
**Primary success metric:** Comparison session or purchase-intent click before the event.  
**Secondary metrics:** Target-price save, alert trigger, click-to-watchlist, unsubscribe, and complaint rate.

## Email 1 — 14 days out

**Subject:** {{event_name}} is two weeks away—check your price target  
**Preview:** Compare today’s listings and decide what you’re willing to pay.

Hi {{first_name|there}},

{{event_name}} is two weeks away. This is a good time to check your saved event, compare the available marketplaces, and make sure your target price still matches your budget and preferred section.

Prices can move as inventory and demand change. A target price gives you a clear decision point instead of making you refresh listings without a plan.

**[Compare {{event_name}} →]({{compare_url}}?utm_source=event-reminder&utm_medium=email&utm_campaign=14-day&utm_content=primary-cta)**

If you have not set a target yet, add one from your watchlist and we’ll notify you when the tracked price reaches it.

## Email 2 — 7 days out

**Subject:** One week until {{event_name}}—buy now or keep watching?  
**Preview:** Let the current price, timing, and seat tradeoff guide you.

Hi {{first_name|there}},

You’re one week from {{event_name}}. Review the current all-in price, seat quality, and seller terms side by side. If the price is at or below your ceiling, buying now reduces the risk of losing the right inventory. If it is above your ceiling, keep watching only if you’re comfortable with fewer choices later.

**[Open your comparison →]({{compare_url}}?utm_source=event-reminder&utm_medium=email&utm_campaign=7-day&utm_content=primary-cta)**

## Email 3 — 3 days out

**Subject:** Three days left to compare {{event_name}}  
**Preview:** Make your final ticket decision with the latest available listings.

Hi {{first_name|there}},

{{event_name}} is three days away. This is your final reminder to compare inventory, delivery timing, fees, and refund terms before you buy. If your target has been reached, act while the listing is still available; if not, decide whether flexibility on section or quantity changes your ceiling.

**[Final price check →]({{compare_url}}?utm_source=event-reminder&utm_medium=email&utm_campaign=3-day&utm_content=primary-cta)**

## Logic and QA

- Enqueue at 14/7/3 days using the event’s stored timezone; send at 10:00 local time.
- Cancel the remaining sequence after purchase-intent confirmation, a price alert, event cancellation, or watchlist removal.
- Use live API data only if its timestamp is less than 24 hours old; otherwise use neutral copy.
- Add a signed `{{unsubscribe_url}}` to every template.
- Add a `sequence_sends` table or extend delivery telemetry with sequence name, step, provider message ID, and event ID.
