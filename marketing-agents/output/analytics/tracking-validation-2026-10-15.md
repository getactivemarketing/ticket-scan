## TicketScan Tracking Validation — 2026-10-15

Method: deployed HTML checks plus local frontend source inspection. The requested `analytics-tracking` skill was unavailable in this session, so this is a direct validation fallback.

### Results

| Check | Result | Evidence |
|---|---|---|
| GTM on homepage | PASS | `GTM-T476F9S4` present in deployed HTML |
| GTM on dashboard | PASS | `GTM-T476F9S4` present in deployed HTML |
| GTM on compare | PASS | `GTM-T476F9S4` present in deployed HTML |
| GTM on watchlist | PASS | `GTM-T476F9S4` present in deployed HTML |
| GTM on World Cup page | PASS | `GTM-T476F9S4` present in deployed HTML |
| Signup conversion event | **UNVERIFIED / likely missing** | No explicit `dataLayer.push`, `gtag`, or analytics call found around auth UI/source |
| Watchlist-add conversion event | **UNVERIFIED / likely missing** | `EventCard.tsx` calls `api.addToWatchlist`, but no tracking call accompanies it |
| Price-comparison event | **UNVERIFIED / likely missing** | `compare/page.tsx` calls `api.compareEvents`, but no tracking call accompanies it |
| Newsletter conversion event | **UNVERIFIED / likely missing** | `NewsletterSignup.tsx` posts to the API, but no tracking call accompanies it |
| UTM capture | **UNVERIFIED** | No UTM persistence/reporting path found in the checked frontend source; no admin report exposes attribution |

### Immediate follow-up

1. Inspect the GTM container configuration for click/form triggers, then test a real signup, watchlist add, comparison, and newsletter submission in Preview mode.
2. Add a single typed event helper that pushes named conversion events to `dataLayer` after successful API responses.
3. Persist first-touch and last-touch UTM values and expose them in the analytics report.
4. Repair `/api/admin/alerts` and confirm drip delivery against SMTP/provider logs.
