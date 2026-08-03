# Churn Intervention Queue — 2026-08-03

**Status: PREPARED, NOT QUEUED OR SENT**

The current admin API does not expose `last_login_at`/`last_seen_at`, email delivery or click events, bounce status, or a working alert history endpoint (`/api/admin/alerts` = HTTP 500). Therefore no user can be safely assigned to Tier 1, 2, or 3, and no email is being claimed as queued.

## Tier 1 — Gentle nudge (7–10 days inactive)

**Eligibility:** last seen 7–10 days ago, subscribed/transactionally eligible, no send in the prior 24 hours.  
**Timing:** next weekday at 10:00 AM recipient local time.

**Subject:** Prices moved on your watchlist

Hi [First name],

Your watchlist is doing the boring work so you don’t have to. Prices changed on [Event name], and the current lowest listing is [Current low] ([Change] vs. the last check).

Take a quick look before the market changes again. Ticket prices have the emotional stability of a group chat.

[Check my watchlist →]

— TicketScan

**Personalization fields required:** event name, current low, prior low, direction/percentage change, event URL.

## Tier 2 — Value reminder (10–14 days inactive)

**Eligibility:** last seen 10–14 days ago, at least one watchlist event with a verified price movement, eligible to receive email.  
**Timing:** next weekday at 10:00 AM recipient local time; suppress if a Tier 1 send occurred within 72 hours.

**Subject:** You missed [X] price changes while you were away

Hi [First name],

While you were away, [X] event[s] on your watchlist moved. [Event name] is now [Current low], down [Savings] from the last recorded check.

You set the list up once. Let it keep doing its job.

[See the price changes →]

— TicketScan

**Personalization fields required:** count of changed events, event names, verified price deltas, watchlist URL.

## Tier 3 — Win-back (14+ days inactive)

**Eligibility:** last seen 14+ days ago, no unsubscribe/bounce/recent purchase, and a verified new reason to return.  
**Timing:** Tuesday or Thursday at 10:00 AM recipient local time; one win-back per 30 days.

**Subject:** We kept watching your tickets while you were away

Hi [First name],

Ticket prices kept doing their little dance. Since your last visit, [X] event[s] on your watchlist changed, including [Event name] at [Current low].

Come back when you’re ready. We’ll compare the marketplaces and show you whether the current number looks sensible — which is more than most ticket pages manage.

[Reopen my watchlist →]

— TicketScan

**Personalization fields required:** verified price movement or a new product feature, event name, current price, unsubscribe link, and suppression status.

## Queue rules once instrumentation exists

- Never send to an inactive subscriber, hard bounce, recent purchaser, or anyone contacted in the last 24 hours.
- Require a real price-history delta for Tier 1/2; never manufacture a “price changed” claim.
- Record `campaign_id`, `user_id`, `sent_at`, delivery, open, click, unsubscribe, and alert-click events.
- Use one primary CTA and UTM tags: `utm_source=email&utm_medium=retention&utm_campaign=churn_2026_08_03`.

## Email Agent handoff

These drafts are ready for templating, but the send state remains **blocked on data instrumentation**, not on copy. Activation-gap users are a separate onboarding/CRO segment and should not receive a churn email based on signup age alone.
