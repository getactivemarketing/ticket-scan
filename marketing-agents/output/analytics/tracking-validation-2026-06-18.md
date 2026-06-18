## Tracking Validation — 2026-06-18

**Method:** Manual endpoint probe. The `analytics-tracking` skill is not available in this environment, so the scripted conversion-event spot-check could not run.

### Admin API health (x-admin-key, HTTP status)
| Endpoint | Status | Notes |
|----------|--------|-------|
| `/api/admin/stats` | 200 | OK, ~0.5s |
| `/api/admin/users` | 200 | OK |
| `/api/admin/newsletter` | 200 | 3 subs (2 test) |
| `/api/admin/activity` | 200 | OK |
| `/api/admin/popular-events` | 200 | OK |
| `/api/admin/drip-stats` | 200 | stats=[] |
| `/api/admin/price-history` | 200 | total=0 (empty) |
| `/api/admin/watchlist` | 200 | OK |
| `/api/admin/alerts` | **500** | "Failed to get alerts" — broken ≥2 days |

### Conversion event tracking
- Signup / watchlist-add / price-compare / newsletter-subscribe events: **not observable** from any endpoint available to this agent. Cannot confirm they fire.
- GTM container: loads per prior checks; **no GA4 read access / event feed** reachable here.
- **Verdict:** funnel conversion is **unmeasurable**, not zero. Do not let downstream agents report conversion %s as fact.

### Action items for backend
1. Fix `/api/admin/alerts` 500.
2. Expose conversion-event counts (or grant GA4 read) so tracking can actually be validated.
3. price_history is empty + 0 target_prices set — instrument/encourage target_price capture so the alert loop can function.
