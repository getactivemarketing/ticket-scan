# Tracking Validation — 2026-06-16

## Skill availability
- `analytics-tracking` skill is **not present** in this environment's available skills list. Could not invoke it. Validation below is what is verifiable from the API + repo only.

## Conversion event firing
| Event | Status | Notes |
|-------|--------|-------|
| Signup | ⚠️ Unverifiable | Registrations land in `users` table (confirmed via API), but no GA4 access to confirm a GTM/GA event fires on the client. |
| Watchlist add | ⚠️ Unverifiable | Same — DB writes confirmed (147 items), client event firing not observable. |
| Price comparison | ⚠️ Unverifiable | No server log endpoint exposes this; no GA4. |
| Newsletter subscribe | ⚠️ Unverifiable | 3 subscribers in DB (last new one 2026-02-01); no client-event confirmation. |

## GTM / GA4
- GTM container is installed (per prior verification, `GTM-T476F9S4`).
- **No GA4 read access** → cannot confirm tags fire, cannot read page views, traffic sources, or bounce rates.
- **No conversion events configured** in the source as of last check → even with GA4 access, the funnel would read empty.

## Action items (owner: site/eng, not this agent)
1. Grant GA4 read access (or expose a server-side events log) so conversion firing can actually be validated.
2. Configure GTM conversion triggers for the 4 events above.
3. Fix `/api/admin/alerts` (HTTP 500).
4. Until one of the above lands, all traffic-source / page-level / event-firing rows in the daily dashboard stay `n/a`. Bad data is worse than no data.
