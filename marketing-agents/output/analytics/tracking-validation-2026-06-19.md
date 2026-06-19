# Tracking Validation — 2026-06-19

## Admin API auth
- **CHANGE:** Admin key in the agent prompt now authenticates successfully. Previously logged as permanently 401 (no real key in repo). All `/api/admin/*` endpoints return 200 today **except** `/api/admin/alerts` → **HTTP 500** ("Failed to get alerts"). Flag to backend.

## Conversion event firing
Cannot validate from the data side — no GA4 read access and no server-side event log. GTM (GTM-T476F9S4) is present in the page head but we cannot confirm whether signup / watchlist-add / compare / newsletter events actually fire downstream, because there is no analytics destination we can query.

| Event              | Verifiable today? | Notes |
|--------------------|-------------------|-------|
| Signup             | DB only           | 122 users in DB; can't attribute source |
| Watchlist add      | DB only           | 150 items; can't attribute source |
| Price comparison   | No                | No event capture; `/compare` also login-gated |
| Newsletter subscribe | DB only         | 3 subs (1 real); no event/source attribution |

## GTM coverage
- GTM container loads via layout; not independently re-verified per-page this run.
- **Gap unchanged:** GTM tag fires page views but there is no GA4 property connected for reading. Result = no usable web analytics. This is the single biggest tracking blocker.

## UTM capture
- Cannot verify — no paid campaigns running ($0 spend, no ad accounts) and no analytics store to inspect UTM values against. n/a.

## Recommendation
Unlock real web analytics by connecting/reading a GA4 property (or standing up a lightweight server-side event log). Until then, every traffic/source/funnel number stays n/a. Fix the `/api/admin/alerts` 500 separately.
