# Customer Behavior Analysis — 2026-10-23

## Evidence and Limits

Sources: live production admin API snapshot on 2026-10-23 (`stats`, paginated `users`, paginated `watchlist`, `newsletter`, `activity`, `popular-events`, `alerts`, and `drip-stats`). The system does not expose anonymous searches, event views, comparisons, seller clicks, sessions, return visits, email opens/clicks, or a complete activity history.

## Observable Segments

| Segment | Count | Definition / interpretation |
|---|---:|---|
| Power users | 17 | Registered users with 3+ saved-event rows; this is breadth, not proven frequency. |
| Casual activated users | 136 | Registered users with 1–2 saved-event rows. |
| Registered users with no saved event | 114 | 267 total users minus users with at least one saved row; search behavior is unknown. |
| Newsletter-only | Unknown | 7 active subscribers; no reliable account join is available. |

There are 153 users with at least one saved-event row and 256 rows total, or 1.67 rows per participating user. No current row has a target price. This is an operational observation while the target/alert path is unavailable, not evidence of user preference.

## Questions Answered

### 1. Average time from signup to first saved-event row

Not recomputed for this week. The current admin endpoints do not provide a complete cohort join or first-save timestamp by user. The previous all-time analysis found a median of roughly 36 seconds and a mean of 4.75 hours among activated users; retain that as historical context, not as a current-week KPI.

### 2. Most popular events, venues, and cities

Only registered saved-event behavior is observable. Top venues are Madison Square Garden (23), Sphere (11), Wrigley Field (8), Barclays Center (8), and AT&T Stadium (8). Top cities are New York (31), Chicago (17), Las Vegas (15), Philadelphia (13), and Toronto (11).

Anonymous users cannot be compared. Repeated event titles may represent distinct event IDs/dates and must not be merged for product identity.

### 3. Correlation between alert emails and return visits

Not measurable. Price ingestion is stale, `/api/admin/alerts` returns HTTP 500, drip sends are empty, and there is no session-return or email-engagement event stream.

### 4. Percentage setting a target price

0% (0 of 256 saved-event rows). Do not frame this as rejection of a functioning feature; the feature is currently unavailable under the product-status guardrail.

### 5. What the most engaged users do differently

The only defensible difference is saved-event breadth: 17 users have 3+ rows. Current telemetry cannot establish that they return more often, search more, compare more, click sellers more, or respond to email more than other users.

## Current-Week Signal

- 1 new signup landed from 2026-10-16 through 2026-10-23 UTC.
- 0 saved-event rows landed in that window.
- 0 newsletter subscriptions landed in that window.
- The previous week had 2 signups, 0 saved-event rows, and 1 newsletter subscription.

This supports an activation-instrumentation investigation, not a measured funnel diagnosis.

## Recommended Segmentation Instrumentation

Add privacy-safe first-party events with an anonymous session ID and authenticated user ID when available:

1. `search_submitted` — query, city, category, result count.
2. `event_viewed` — event ID, venue ID, source surface.
3. `watchlist_add_success` — event ID, venue, city, seconds since signup.
4. `seller_outbound_click` — seller, event ID, placement.
5. `newsletter_subscribe_success` — source and UTM fields.
6. `session_started` / `session_returned` — timestamp and consent state.
7. `email_sent`, `email_delivered`, `email_opened`, `email_clicked`, `email_bounced`, `email_unsubscribed` — provider message ID, campaign, and user ID; never raw email in analytics payloads.

Then build 1-day, 7-day, and 30-day cohorts joining signup → first save → seller click → return session. Do not publish funnel rates until seven full days pass with event-integrity checks.
