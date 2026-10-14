## Tracking Validation — 2026-10-14

Requested `analytics-tracking` skill: unavailable in this workspace; validation used direct source inspection, deployed HTML spot-checks, and admin API responses.

### Results

| Check | Result | Evidence |
|---|---|---|
| GTM loads on homepage | PASS (presence check) | Deployed HTML contains `googletagmanager` and `dataLayer`; container `GTM-T476F9S4` |
| GTM loads on dashboard | PASS (presence check) | Same container markers present |
| GTM loads on compare | PASS (presence check) | Same container markers present |
| GTM loads on watchlist | PASS (presence check) | Same container markers present |
| GTM loads on World Cup page | PASS (presence check) | Same container markers present |
| Signup conversion event | NOT VERIFIED | No frontend event call found; API has one signup in the prior UTC day |
| Watchlist-add conversion event | NOT VERIFIED | Watchlist API action exists, but no analytics event call found; no adds in the prior seven days |
| Price-comparison conversion event | NOT VERIFIED | No exposed event stream or admin metric |
| Newsletter-subscribe conversion event | NOT VERIFIED | Subscribe API exists, but no analytics event call found |
| UTM capture | NOT VERIFIED | No accessible attribution report or stored UTM field |

### Immediate follow-up

Instrument the four conversion actions in the GTM data layer and expose a read-only daily export for pageviews, users, source/medium, UTM values, and bounce rate. Separately repair `/api/admin/alerts`; do not infer alert volume from the stale price-history table.
