# Channel Recommendations — 2026-08-21

## Content / SEO

Publish the Gametime comparison page and an all-in pricing methodology guide. Use the watchlist leaders as editorial hypotheses, not traffic winners. Add timestamps and source labels to every price example.

## Paid

Do not scale based on CPA or ROAS; neither is measurable. After event and UTM QA, test a small comparison-intent campaign around “ticket price comparison” and “Gametime alternative.”

## Email

Suppress test/api-test records, repair delivery telemetry, and gate price-drop copy on current price data. Send a first-value activation message to new registrants with one CTA: add an event, then set a target.

## CRO

Make target-price setup the explicit second step after watchlist add. Add success/error events and a visible confirmation. Test anonymous comparison preview versus the current login gate.

## Growth / Retention

Define inactivity using observed `return_session`, comparison, watchlist, and alert activity—not signup age. Trigger a 24-hour activation nudge for new users without a watchlist item; reserve win-back for users with measured prior activity.

## Engineering / Analytics

P0: restore tracker and `/api/admin/alerts`. P1: add event taxonomy, UTM persistence, email provider events, and daily snapshots. Reconcile admin totals against analytics aggregates before channel optimization.

