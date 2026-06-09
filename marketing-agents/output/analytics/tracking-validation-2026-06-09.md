# Tracking Validation Log — 2026-06-09

**Scope note:** This agent can validate server-side conversion events through their DB side effects via the admin API. It **cannot** read GTM/GA directly (no GA Data API credential), so client-side event firing and tag loading are *not* verifiable from here. Items below are marked accordingly.

| Check | Method | Result |
|-------|--------|--------|
| Signup event → DB write | `/api/admin/users`, `/stats` | ✅ Working. User rows + `usersToday`/`usersThisWeek` update correctly (last confirmed write: user #109, 06-08). |
| Watchlist-add event → DB write | `/api/admin/activity`, `/stats` | ✅ Working. `totalWatchlistItems` and activity log update on add (last: 06-08 01:19 UTC). |
| Newsletter subscribe → DB write | `/api/admin/newsletter` | ✅ Endpoint works, but **0 real subscribes since Feb** — likely a funnel/deploy issue (forms fixed in working tree, not yet deployed), not a tracking break. |
| Price-comparison event | n/a | ⚠️ Not measurable. No server-side comparison counter exists; lives only in GA. Cannot confirm it fires. |
| Price-alert trigger | `/api/admin/alerts` | ❌ Endpoint returns **HTTP 500 (3rd straight day)**. `triggeredAlerts:0` via `/stats` still resolves. Endpoint-level bug; flag to index.js owner. |
| GTM/GA tag loading on pages | n/a | ⚠️ Not verifiable from this agent (no GA API). Recommend a manual spot-check or GA service-account key. |
| UTM capture from paid campaigns | n/a | ⚠️ Not verifiable + moot — no paid campaigns are live ($0 spend, no ad accounts per prior agent status). |

**Carried-over action item:** Wire a GA Data API service-account credential into the admin layer so visitor counts, traffic-source splits, top-pages, and client-side event firing become verifiable. Until then, those rows stay `n/a` by design rather than fabricated.

**Net:** Server-side conversion writes (signup, watchlist) are healthy. The only outright broken endpoint is `/api/admin/alerts` (500). Everything else flagged is a known coverage gap, not a new regression.
