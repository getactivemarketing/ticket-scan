# TicketScan Weekly Report — Week of July 24–31, 2026

_Generated July 31, 2026. Database figures are live reads from the local app using the Railway PostgreSQL connection; traffic, funnel, channel, paid-media and email engagement figures are unavailable because GTM is not connected to GA4 events._

## Executive Summary

- Growth accelerated modestly: 15 new registrations this week versus 12 last week (+25%); the database now contains 195 users.
- Activation remains the strongest measurable behavior: 114 users have added at least one watchlist item, and 112 of those users added their first item on the same day as signup.
- Retention and monetization loops are blocked: 0 of 198 watchlist items has a target price, 0 alerts have triggered, and `/api/admin/alerts` still returns HTTP 500.
- Demand is concentrated in a small set of music events, with Harry Styles (19 rows across duplicate event records), Backstreet Boys (10), Ariana Grande (8), and Noah Kahan (7) leading the normalized watchlist snapshot.
- Price intelligence is not yet representative: 202 history rows cover one Ticketmaster event only; there is no SeatGeek or StubHub history this week.

## Growth Metrics

| Metric | This Week | Last Week | WoW Change | MoM Change |
|---|---:|---:|---:|---:|
| Unique Visitors | n/a | n/a | n/a | n/a |
| New Signups | 15 | 12 | +25.0% | n/a |
| Total Registered Users | 195 | 180 | +8.3% | n/a |
| Watchlist Items Added | 10 | 10 | 0.0% | n/a |
| Active Watchlist Users | 114 total | n/a | n/a | n/a |
| Price Comparisons | n/a | n/a | n/a | n/a |
| Newsletter Subscribers | 4 active | 4 active | 0.0% | n/a |
| Price Alerts Triggered | 0 | 0 | 0 | 0 |

The admin API does not provide historical active-user counts, so WoW change for this row is intentionally not calculated.

## Funnel Conversion Rates

| Step | This Week | Last Week | Change |
|---|---:|---:|---:|
| Visit → Search | n/a | n/a | n/a |
| Search → Compare | n/a | n/a | n/a |
| Compare → Signup | n/a | n/a | n/a |
| Signup → Watchlist Add | 60.0% (9/15 first-add users) | n/a | n/a |
| Watchlist → Return Visit | n/a | n/a | n/a |

The signup-to-watchlist figure is a database activation proxy, not a complete funnel rate: anonymous visits, searches, comparison runs, and return visits are not logged.

## Traffic by Channel

| Channel | Visitors | Signups | Conversion |
|---|---:|---:|---:|
| Organic | n/a | n/a | n/a |
| Direct | n/a | n/a | n/a |
| Paid | n/a | n/a | n/a |
| Social | n/a | n/a | n/a |
| Email | n/a | n/a | n/a |
| Referral | n/a | n/a | n/a |

GTM container `GTM-T476F9S4` loads on the site, but source inspection found no GA4 configuration or custom conversion events. Do not allocate budget or claim channel quality until this is fixed.

## Content Performance

Page traffic, conversion rates, and high-traffic/low-conversion pages are n/a. The site has a sitemap and content inventory, but no page-view or CTA event data. Prioritize instrumentation before content pruning.

## Event Trends

Top watchlist groups in the current database snapshot:

| Event | Venue / City | Rows |
|---|---|---:|
| Harry Styles: Together, Together | Wembley Stadium / London and duplicate MSG records | 19 |
| Backstreet Boys: Into The Millennium | Sphere / Las Vegas | 10 |
| Ariana Grande - The Eternal Sunshine Tour | State Farm Arena / Atlanta | 8 |
| Noah Kahan: The Great Divide Tour | Citi Field / Queens | 7 |
| Bruno Mars - The Romantic Tour | MetLife Stadium / East Rutherford | 6 |
| Flyleaf with Lacey Sturm — 20th Anniversary Tour | House of Blues Chicago / Chicago | 4 |

The event table is affected by duplicate event IDs: Harry Styles appears as several records, so “19” is a demand signal, not 19 unique normalized event instances. The only tracked price series is `SELENA Tribute DREAMING OF YOU` at Gaslamp Long Beach: $30.07 base / $38.19 with the current Ticketmaster fee estimate, stable across 202 rows.

## Email Performance

- Drip stats: 0 emails sent; 20 users are currently pending in the admin endpoint.
- Newsletter: 4 active subscribers; opens and clicks are not available because the app has no ESP event reporting.
- Price alerts: 0 sent and 0 triggered; all 198 watchlist records have `target_price = null`.
- Do not run the drip backlog manually until rate limiting, deduplication, and delivery monitoring are confirmed.

## Paid Media Summary

Spend, CPA, ROAS, platform delivery, and campaign ranking are n/a. No connected ad-platform reporting is present in the repository.

## Key Insights

1. **Activation is fast when users engage.** Average signup-to-first-watchlist time is 0.27 days, median 0 days, and 112/114 first-add users activated within one day. Make watchlist creation the primary post-signup path.
2. **The alert value proposition is currently nonfunctional.** Target-price adoption is 0%, triggered alerts are 0, and the alert admin route is broken. This is the highest-leverage product/retention fix.
3. **Demand data is directionally useful but structurally noisy.** Music dominates the watchlist, while duplicate event IDs fragment counts; fix canonical event keys before using event trends for paid or editorial decisions.

## Recommendations for Next Week

- **Content team:** Create a SeatGeek comparison page using the attached spec; build event-led pages around Bruno Mars, Ariana Grande, Backstreet Boys, and Noah Kahan only after canonicalization rules are defined.
- **SEO team:** Reconcile the sitemap/page inventory and target “SeatGeek vs TicketScan,” “all-in ticket price comparison,” and “last-minute ticket price tracker” queries.
- **Paid team:** Hold scaling decisions until GA4/UTM capture is verified; prepare a controlled test for high-intent event + city terms afterward.
- **Email team:** Keep the drip backlog paused, add delivery/open/click instrumentation, and ship post-signup activation education focused on the first watchlist add.
- **CRO team:** Add target-price input and a visible “set alert” CTA to EventCard/event detail; instrument signup, search, compare, watchlist add, target-price set, and newsletter subscribe.
- **Growth team:** Segment 14 power users for interviews, then build a same-session activation experiment around the observed 0-day first-add behavior.

## Data Quality / Sources

- Live admin endpoints checked: stats, users, watchlist, newsletter, alerts, activity, popular-events, drip-stats, price-history.
- `/api/admin/alerts` returned `{ success: false, error: "Failed to get alerts" }`.
- No GA4 or GTM event export was available. No visitor, channel, page, funnel, retention, paid, open-rate, or click-rate claims should be inferred from the database counts.
