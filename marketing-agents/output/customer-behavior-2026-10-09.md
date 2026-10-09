# Customer Behavior Analysis — 2026-10-09

## Evidence and Limits

Sources: deployed `/api/admin/stats`, `/users`, `/watchlist`, `/popular-events`, `/activity`, `/newsletter`, `/drip-stats`, direct read-only PostgreSQL cohort queries, and the 2026-10-09 tracking validation. Anonymous behavior, pageviews, sessions, searches, comparisons, and return visits are not captured.

## Segments

| Segment | Observed count | Definition / interpretation |
|---|---:|---|
| Power users | 17 | Registered users with 3+ watchlist rows. 9 have 5+ rows; the largest observed user has 9. |
| Casual users | 136 | The remaining 1–2-watchlist users. This is a database segment, not a visit-frequency segment. |
| One-time / inactive registered | 111 | Registered users with no watchlist row. Search history is unavailable, so “one-time” cannot be proven. |
| Newsletter-only | Unknown | 6 active subscribers; there is no reliable join proving whether they also have accounts. |

There are 153 registered users with at least one watchlist row and 256 rows total, or 1.67 rows per participating user. No target price is set on any of the 256 rows.

## Questions Answered

### 1. Average time from signup to first watchlist add

Across the 153 users with a watchlist row, the mean elapsed time is **4.75 hours** and the median is **0.01 hours** (about 36 seconds). The mean is pulled upward by delayed saves; the median indicates that users who activate usually do so immediately after signup.

This is all-time cohort data. The current week has only one signup, so a weekly average would be misleading.

### 2. Popular events, venues, and cities

Only registered watchlist behavior is observable. The top cities by watchlist row are New York (31), Chicago (17), Las Vegas (15), Philadelphia (13), and Toronto (11). The top venues are Madison Square Garden (23), Sphere (11), AT&T Stadium (8), Barclays Center (8), and Wrigley Field (8).

The popular-events endpoint has a tie-heavy distribution: most returned event-date rows have two saves. Repeated titles such as Harry Styles at Madison Square Garden appear across distinct event IDs/dates and should be rolled up by normalized performer + venue only for reporting, never for event identity.

Anonymous users cannot be compared because no anonymous search, event-view, or click table exists.

### 3. Correlation between price-alert emails and return visits

Not measurable. Price-history ingestion has been stale since 2026-07-24, `/api/admin/alerts` returns HTTP 500, `price_alerts` cannot be validated through the admin route, and no session/return-visit event exists. Drip sends are also empty.

### 4. Percentage setting a target price

**0% (0 of 256 watchlist rows).** This is consistent with the current product-status finding that target-price/price-alert functionality is unavailable. Do not frame this as user rejection of an available feature.

### 5. What power users do differently

The strongest observable behavior is breadth and speed: power users save three or more event rows, and the median activated user saves almost immediately after signup. The current dataset cannot prove that power users return daily, compare more often, or receive more email because those events are not recorded.

## Recommended Segmentation Instrumentation

Add first-party events with an anonymous session ID and authenticated user ID when available:

1. `search_submitted` — query, city, category, result count.
2. `event_viewed` — event ID, venue ID, source surface.
3. `watchlist_add_success` — event ID, venue, city, seconds since signup, `has_target_price` (currently false only if the field exists; do not imply alerts work).
4. `seller_outbound_click` — seller, event ID, placement.
5. `newsletter_subscribe_success` — source and UTM fields.
6. `session_started` / `session_returned` — first-party session timestamp, consent-compliant.

Then build cohorts for 1-day, 7-day, and 30-day return, plus a direct join between signup, first save, outbound click, and email delivery.

