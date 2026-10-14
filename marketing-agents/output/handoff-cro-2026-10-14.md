# CRO Handoff — Activation Gap — 2026-10-14

## Finding

There are **2 users in the last-seven-day signup cohort**, and **0 of 2 have saved an event**. Across all 266 users, 153 have at least one saved event and 113 have none.

## Recommended onboarding change

After the first useful search result, show a single, concrete next step:

> Save one event so it’s ready when you are. We’ll keep the date, venue, and official ticket links together in your saved events.

Primary button: **Save this event**

Empty state: **Your first saved event is one search away — try a team, artist, or venue.**

## Instrumentation needed

Track `search`, `event_view`, `watchlist_add`/saved-event add, and outbound ticket-link click. Add `last_login_at` or equivalent activity events so activation can be separated from repeat engagement and churn.

## Guardrail

Do not use “price tracking,” “price alert,” “price drop,” “savings,” or buy/wait recommendation language in this onboarding treatment while the product-status restriction remains active.
