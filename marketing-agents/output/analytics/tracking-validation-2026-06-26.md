## Tracking Validation Log — 2026-06-26

### GTM Status
- GTM container installed: **Yes** (confirmed in layout.tsx)
- GA4 stream connected: **Unknown** — no read access to GA4 property
- Conversion events configured: **No** — GTM has no conversion event listeners set up

### Conversion Event Audit

| Event               | Expected Trigger         | Firing? | Notes                                      |
|---------------------|-------------------------|---------|--------------------------------------------|
| Signup              | /api/auth/register 200  | Unknown | No GTM listener confirmed in codebase      |
| Watchlist Add       | POST /api/watchlist 201 | Unknown | No GTM listener confirmed in codebase      |
| Price Comparison    | GET /api/events/compare | Unknown | No GTM listener confirmed in codebase      |
| Newsletter Subscribe| POST /api/newsletter    | Unknown | Form exists in blog/footer (fixed 6/7)     |

_Status: All events are "unknown" because there is no GA4 data access and no conversion event dataLayer pushes visible in the frontend source. Cannot verify without GA4 read credentials or browser-side testing._

### UTM Capture
- UTM parameters are not being captured server-side (no UTM logging in `/api/auth/register`)
- No email campaign UTM tracking confirmed
- Cannot verify source attribution without GA4 access

### Pages Missing Tracking
- Cannot enumerate without sitemap + GA4 coverage check
- Known gap: admin pages (`/admin/*`) should be excluded from tracking — unverified

### Action Items
1. Add GA4 read-only credentials to analytics agent environment
2. Add `dataLayer.push()` calls in frontend for: signup, watchlist-add, price-compare, newsletter-subscribe
3. Verify GTM preview mode to confirm tag fires on key actions
4. Add UTM capture to `/api/auth/register` and log to `users` table or separate analytics table
