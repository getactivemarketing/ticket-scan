## TicketScan Tracking Validation — 2026-08-16

### Checks

| Check | Result | Evidence |
|---|---|---|
| GTM loads on site | PASS (static/live presence) | `web/src/app/layout.tsx` includes `GTM-T476F9S4`; live `https://www.ticketscan.io/` returned HTTP 200 and included the same container ID. |
| Signup event | PARTIAL | Two signups occurred in the reporting window and backend activity supports signup records, but no explicit frontend `dataLayer.push` conversion event was found. |
| Watchlist-add event | PARTIAL | One watchlist add occurred in the reporting window, but no explicit frontend conversion event was found. |
| Price-comparison event | FAIL / UNVERIFIABLE | No event series or explicit frontend instrumentation was found. |
| Newsletter-subscribe event | FAIL / UNVERIFIABLE | The subscriber endpoint exists, but no frontend conversion event or daily reporting series was found. |
| UTM capture | FAIL / UNVERIFIABLE | No UTM persistence or source aggregation was found in the checked frontend/API code. |
| New-page coverage | PARTIAL | GTM is mounted in the App Router root layout, so ordinary pages inherit it; runtime tag firing and all route coverage require Tag Assistant/GA4 access. |
| Alert endpoint | FAIL | `/api/admin/alerts?limit=1000` returned HTTP 500: `Failed to get alerts`. |
| Price-tracking freshness | FAIL | `/api/admin/price-history?limit=10000` returned 202 records, but the newest is 2026-07-24 20:01 UTC. |
| Drip send logging | FAIL / AT RISK | `/api/admin/drip-stats` returned no sent-statistics rows and 20 pending users, including users aged beyond the Day 3 threshold. |

### Recommended fixes

1. Add named `dataLayer` events for `signup`, `watchlist_add`, `price_comparison`, and `newsletter_subscribe`, with event IDs and consent-safe UTM/session context.
2. Add durable analytics storage and an admin aggregation endpoint for visitors, sources, pages, bounce, comparisons, and conversions.
3. Repair `/api/admin/alerts` and investigate the price-tracking cron/API failure after July 24.
4. Verify the 10:00 UTC drip cron, SMTP delivery, and `drip_emails_sent` writes before sending additional campaign traffic.
