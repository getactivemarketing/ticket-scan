## TicketScan Daily Dashboard — 2026-08-01

Window: rolling 24 hours ending approximately 2026-08-01 10:00 UTC. Seven-day averages use the preceding seven rolling 24-hour windows. Data source: authenticated admin API, plus code/live-site tracking checks.

### Key Metrics (24h)

| Metric | Today | Yesterday | 7-Day Avg | Trend |
|---|---:|---:|---:|:---:|
| Unique Visitors | N/A | N/A | N/A | — |
| New Signups | 1 | 4 | 1.86 | ↓ |
| Watchlist Items Added | 1 | 2 | 1.29 | → |
| Price Comparisons Run | N/A | N/A | N/A | — |
| Newsletter Subscribers | 0 | 0 | 0.00 | → |
| Price Alerts Triggered | 0* | 0* | 0* | → |
| Drip Emails Sent | 0 | 0 | N/A | — |

\* The alerts endpoint returned HTTP 500, so zero is the platform total currently reported by `/api/admin/stats`, not a fully validated 24-hour event count.

### Totals

- Total registered users: **196**
- Total active watchlist items: **199**
- Total newsletter subscribers (active): **4**
- Total price history records returned: **202**
- Total triggered alerts: **0** (stats endpoint)

### Traffic Sources (24h)

Not available. The current backend has no visitor, source, UTM, or attributed-signup dataset exposed through the admin API.

### Top Pages (24h)

Not available. No pageview or bounce-rate data is exposed by the current analytics integration/API.

### Popular Events Being Tracked

All five leaders are tied at two watchlist records:

1. Noah Kahan: The Great Divide Tour — Kia Center, Orlando
2. Harry Styles: Together, Together — Madison Square Garden, New York
3. Flyleaf with Lacey Sturm - 20th Anniversary Tour — House of Blues Chicago
4. Ariana Grande - The Eternal Sunshine Tour — Barclays Center, Brooklyn
5. Noah Kahan: The Great Divide Tour — Citi Field, Queens

### 🚨 Anomalies & Alerts

- **Tracking gap — high priority:** GTM container `GTM-T476F9S4` is present in the shared Next.js layout and appeared on live `/`, `/dashboard`, `/compare`, `/watchlist`, and `/world-cup-2026` responses. However, no explicit `dataLayer.push` conversion events were found for signup, watchlist add, price comparison, or newsletter subscription.
- **UTM gap — high priority:** No frontend UTM capture or persistence logic was found. Paid/email attribution cannot currently be trusted.
- **Price tracking stale — high priority:** `/api/admin/price-history?limit=500` returned 202 records; newest `checked_at` was 2026-07-24 20:01 UTC, roughly 7.5 days old at dashboard time. Expected four-hour tracking is not being met.
- **Alerts monitoring broken — high priority:** `/api/admin/alerts` returned HTTP 500. Investigate the route/database column mismatch before treating alert counts as reliable.
- **Drip campaign inactive:** `/api/admin/drip-stats` returned no sent rows; total sent is 0 while 20 users are listed as pending in the endpoint response.
- **Growth signal:** rolling-24-hour signups are 46% below the preceding seven-day average (1 vs 1.86), but the sample is too small for a strong conclusion.

### Competitor Quick Check

- SeatGeek: its Smart Pricing feature is documented as dynamically updating seller listing prices using recent sales, demand, and inventory data. This reinforces TicketScan's price-history and cross-market comparison positioning.
- StubHub: its newsroom is highlighting summer 2026 event trends and a Chicago Stars FC partnership; no clearly new buyer-facing pricing feature was confirmed in the quick scan.
- Vivid Seats: Rewards remains a visible loyalty lever, including reward credits/perks in the app. No material new promotion was confirmed from an authoritative source.
- Market/regulatory watch: recent reporting says Washington, D.C. legislation would cap resale markups at 10% and require original-price disclosure, with StubHub and SeatGeek opposing the measure. This is relevant to TicketScan's consumer-advocacy messaging but needs legal/editorial review before publication.

### Agent Handoff

- Content: use the five tied events above as a small “what fans are tracking” signal; avoid claiming visitor popularity.
- SEO: organic landing-page performance is unavailable until pageview/source reporting is wired.
- Social/Paid/Email: do not use current conversion or attribution numbers for optimization; UTM and event tracking are missing.
- CRO: prioritize instrumenting signup, watchlist add, compare completion, and newsletter success events.
- Growth: retention/churn cannot be calculated from the exposed endpoints.

