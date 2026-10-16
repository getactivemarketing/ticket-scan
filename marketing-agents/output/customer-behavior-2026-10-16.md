# Customer Behavior Analysis — 2026-10-16

## Evidence and Limits

Sources: live production admin API snapshot on 2026-10-16 (`stats`, `users`, `watchlist`, `activity`, `newsletter`, `popular-events`, `alerts`, and `drip-stats`). The API does not expose anonymous searches, pageviews, sessions, comparisons, seller clicks, email opens/clicks, or complete activity history.

## Observable Segments

| Segment | Count | Definition / interpretation |
|---|---:|---|
| Power users | 17 | Registered users with 3+ saved watchlist rows. Database breadth only; daily return behavior is not proven. |
| Casual activated users | 136 | Registered users with 1–2 saved rows. This is not a visit-frequency segment. |
| Registered users with no saved event | 113 | 266 total users minus 153 users with at least one watchlist row. Search or event-view behavior is unknown. |
| Newsletter-only | Unknown | 7 active subscribers; no reliable join proves whether they also have accounts. |

Watchlist distribution: 112 users have 1 row, 24 have 2, 5 have 3, 3 have 4, 1 has 5, 3 have 6, 1 has 7, 2 have 9, 1 has 10, and 1 has 11. No current row has a target price.

## Questions Answered

### 1. Average time from signup to first saved event

Not recomputed as a weekly metric because the admin activity endpoint exposes only the latest 20 mixed events and does not provide a complete cohort join. The prior all-time analysis found a median of roughly 36 seconds and mean of 4.75 hours among activated users, but that should not be treated as a current-week result.

### 2. Popular events, venues, and cities

Only registered saved-event behavior is observable. Current top city/venue pairs are:

1. New York / Madison Square Garden — 23 rows
2. Las Vegas / Sphere — 11
3. Chicago / Wrigley Field — 8
4. Brooklyn / Barclays Center — 8
5. Arlington / AT&T Stadium — 8

The popular-events endpoint returns several events tied at two saves. Repeated titles can represent distinct event dates/IDs and should not be merged for product identity.

Anonymous users cannot be compared because no anonymous search, event-view, or click table exists.

### 3. Correlation between alert emails and return visits

Not measurable. Price ingestion is stale, `/api/admin/alerts` returns HTTP 500, drip sends are empty, and no session/return-visit event exists.

### 4. Percentage setting a target price

**0% (0 of 256 saved rows).** This is an operational observation while the target/alert path is unavailable; it must not be framed as user rejection of a functioning feature.

### 5. What power users do differently

The only defensible difference is breadth: 17 users have 3+ saved events and 5 have 6+ rows. Current telemetry cannot prove they return more often, compare more, click sellers more, or respond to email more than other users.

## Current-Week Behavior Signal

- 2 new signups landed from Oct 9–16 UTC.
- 0 new watchlist rows landed in that window.
- The latest user snapshot shows both new signups with zero saved rows.
- 1 newsletter subscriber joined in the same window.

This supports a focused activation investigation, not a claim of a measured conversion rate.

## Recommended Instrumentation

Add privacy-safe first-party events with an anonymous session ID and authenticated user ID when available:

1. `search_submitted` — query, city, category, result count.
2. `event_viewed` — event ID, venue ID, source surface.
3. `watchlist_add_success` — event ID, venue, city, seconds since signup.
4. `seller_outbound_click` — seller, event ID, placement.
5. `newsletter_subscribe_success` — source and UTM fields.
6. `session_started` / `session_returned` — timestamp and consent state.
7. `email_sent`, `email_delivered`, `email_opened`, `email_clicked`, `email_bounced`, `email_unsubscribed` — provider message ID, campaign, and user ID; never raw email in analytics payloads.

Then build 1-day, 7-day, and 30-day cohorts and join signup → first save → seller click → return session. Do not publish funnel rates until seven full days pass with event-integrity checks.
