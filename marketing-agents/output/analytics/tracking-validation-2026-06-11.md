# Tracking Validation — 2026-06-11

Spot-check of conversion-event tracking and data-availability. Scope is limited to what is observable from the admin API and the repo; the agent has **no GTM/GA4 reporting read path**, so client-side event firing cannot be directly confirmed here.

## API health
| Endpoint | Status | Latency | Note |
|----------|--------|---------|------|
| `/api/admin/stats` | 200 | 0.38s | OK |
| `/api/admin/users` | 200 | ~0.3s | OK |
| `/api/admin/watchlist` | 200 | ~0.3s | OK |
| `/api/admin/newsletter` | 200 | 0.31s | OK |
| `/api/admin/activity` | 200 | ~0.3s | OK |
| `/api/admin/popular-events` | 200 | ~0.3s | OK |
| `/api/admin/drip-stats` | 200 | ~0.3s | OK |
| `/api/admin/price-history` | 200 | 0.31s | Returns `total: 0` (empty — known) |
| `/api/admin/alerts` | **500** | 0.31s | `Failed to get alerts` — persistent server error |

## Conversion events
- **Signup** — ✅ recording server-side. 2 new users in trailing 24h reflected in `users` + `activity` + `stats.usersToday`.
- **Watchlist add** — ✅ recording server-side. 9 adds (user #112) reflected in `watchlist`, `activity`, and `totalWatchlistItems` 136→145.
- **Price comparison run** — ⚠️ **no server-side counter exists.** Cannot validate; not exposed by any admin endpoint.
- **Newsletter subscribe** — ⚠️ no new events to validate (list flat at 3). Forms are live in repo (blog/footer) but no organic subscribe has reached the list.

## Gaps (unchanged from 06-10)
1. **No analytics query layer.** GTM is installed but there is no GA4/GTM reporting integration the agent can read → traffic source, pageview, bounce, and funnel rows are permanently `n/a` until a read path is granted.
2. **No UTM/referrer capture on signup.** Paid/social attribution cannot be measured server-side.
3. **`/api/admin/alerts` 500.** Endpoint has returned 500 across multiple days; needs a backend fix independent of the (also broken) alert-arming pipeline.

**Verdict:** Server-side signup/watchlist tracking is trustworthy. Everything visit/funnel/attribution-based remains unmeasurable — left `n/a` by design, not estimated.
