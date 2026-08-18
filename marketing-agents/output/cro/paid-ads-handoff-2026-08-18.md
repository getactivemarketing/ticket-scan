# Paid Ads → CRO Handoff — 2026-08-18

## Evidence

- Production smoke check: `/`, `/compare`, `/dashboard`, and `/register` returned HTTP 200.
- The analytics dashboard recorded 4 signups and 3 watchlist adds in the preceding 24 hours, but paid/source attribution is unavailable.
- GTM loads, while explicit conversion events and UTM persistence are not verifiable.
- Price history is stale after 2026-07-24; target-price rows and recorded alerts are 0; `/api/admin/alerts` returns HTTP 500.

## Recommended CRO queue

1. P0: Allow anonymous users to search and compare; require signup only for watchlists and alerts, preserving event context through auth.
2. P0: Add `compare_started`, `signup_completed`, `watchlist_added`, `target_price_set`, and `newsletter_subscribed` events plus first/last-touch UTM storage.
3. P0: Repair price tracking and alert reporting before advertising live alerts or price-drop claims.
4. P1: Change the homepage hero CTA to “Compare ticket prices” and link directly to the comparison experience.

**Paid-media implication:** Keep acquisition spend in measurement hold until these changes make conversion attribution and the advertised alert loop trustworthy.
