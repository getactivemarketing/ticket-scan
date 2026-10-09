# TicketScan Weekly Report — Week of 2026-10-09

**Reporting window:** 2026-10-02 10:00 UTC through 2026-10-09 10:00 UTC. Database counts are exact for that window. Visitor, page, attribution, comparison, and return-visit metrics are unavailable because the site has GTM installed but no queryable conversion/event export.

## Executive Summary

- The registered base reached **264 users**; **1 signup** landed this week versus 8 last week (-87.5%) and 2 in the comparable week last month (-50%).
- Watchlist growth also slowed to **1 item added** versus 3 last week (-66.7%). This is a watchlist-save signal, not evidence of price tracking.
- The core retention loop is not measurable or operational: **0 of 256 watchlist rows has a target price**, price history is stale at 2026-07-24, `/api/admin/alerts` returns HTTP 500, and the drip table has no sent rows.
- The largest known audience is still registered users who never saved an event: **111 of 264 users** have no watchlist row. Anonymous behavior cannot be measured.
- Tracking is the highest-leverage instrumentation fix: GTM loads, but signup, watchlist-add, comparison, newsletter, outbound-click, UTM, and return-visit events are not implemented or queryable.

## Growth Metrics

| Metric | This Week | Last Week | WoW Change | MoM Change* |
|---|---:|---:|---:|---:|
| Unique Visitors | N/A | N/A | N/A | N/A |
| New Signups | 1 | 8 | -87.5% | -50.0% |
| Total Registered Users | 264 | 263 | +0.4% | +6.5% vs. 248 on Sep 11 |
| Watchlist Items Added | 1 | 3 | -66.7% | -50.0% |
| Active Watchlist Users | 153 total | N/A | N/A | N/A |
| Price Comparisons | N/A | N/A | N/A | N/A |
| Newsletter Subscribers | 0 | 0 | flat | flat |
| Price Alerts Triggered | N/A; endpoint 500 | N/A | N/A | N/A |

\* “MoM” compares this 7-day window with 2026-09-04 10:00 UTC–2026-09-11 10:00 UTC. Total-user change is compared with the prior-period total.

Additional totals: 256 watchlist rows, 6 active newsletter subscribers, 1 favorite, 0 target-price rows, and 0 recorded drip sends.

## Funnel Conversion Rates

| Step | This Week | Last Week | Change |
|---|---:|---:|---:|
| Visit → Search | N/A | N/A | Not instrumented |
| Search → Compare | N/A | N/A | Not instrumented |
| Compare → Signup | N/A | N/A | Not instrumented |
| Signup → Watchlist Add | 0 of 1 observed signup had a watchlist add in the reporting window | Not reliably reconstructable from endpoint | N/A; event-level funnel missing |
| Watchlist → Return Visit | N/A | N/A | No return-visit events |

The apparent 0% signup-to-watchlist result is a one-user database observation, not a conversion rate suitable for optimization; the one watchlist add this week belonged to an existing user.

## Traffic by Channel

Unavailable. No GA4 export, UTM persistence, referrer field, or first-party attribution query exists. Do not rank Organic, Direct, Paid, Social, Email, or Referral by quality this week.

## Content Performance

Top pages, conversion rates, and high-traffic/low-conversion pages are unavailable. There is no pageview or route-level analytics dataset.

## Event Trends

The admin endpoint reports watchlist rows, not anonymous demand or price movement. The most watched normalized locations in the database are New York (31 rows), Chicago (17), Las Vegas (15), Philadelphia (13), and Toronto (11). Top venues are Madison Square Garden (23), Sphere (11), AT&T Stadium (8), Barclays Center (8), and Wrigley Field (8).

The only new watchlist add in the reporting window was **Ringo Starr And His All-Starr Band — Toyota Oakdale Theatre, Wallingford**. No price movement is reported: TicketScan price data has been unavailable since July 24.

## Email Performance

| Area | Finding |
|---|---|
| Drip | `drip_emails_sent` is empty; pending users include accounts 6–40 days old with `last_email_sent = 0`. |
| Newsletter | 6 active subscribers; 0 new this week; newest active subscriber is from 2026-09-18. |
| Price alerts | Cannot validate; `/api/admin/alerts` returns HTTP 500 and price ingestion is down. |

## Paid Media Summary

No paid-media spend, CPA, ROAS, or campaign dataset is connected. Report as N/A, not zero spend.

## Key Insights

1. **Acquisition and activation both softened.** The database recorded one signup and one watchlist add this week, down from 8 and 3 respectively last week. Because visitors and search starts are not measured, the cause is unknown.
2. **Activation is concentrated but shallow.** 153 of 264 registered users have at least one watchlist row; 17 users have 3 or more rows and 9 have 5 or more. 111 registered users have none.
3. **The product’s retention and measurement loops are simultaneously blocked.** Target prices are 0/256, alert history cannot be queried, drip sends are empty, and conversion events are absent. Fixing instrumentation and lifecycle delivery should precede paid acquisition.

## Recommendations for Next Week

- **Content:** Publish a Gametime comparison page focused on last-minute/mobile buying versus TicketScan’s event discovery, venue guides, onsale information, and seller links. Do not promise live TicketScan price comparison, price history, alerts, or buy/wait advice until the outage is resolved.
- **SEO:** Use the existing venue and event-guide inventory to strengthen pages with verified section/capacity/onsale facts; add internal links from high-interest cities and venues into event discovery.
- **Paid:** Keep paid acquisition paused until signup, watchlist, outbound-click, and UTM attribution are queryable and the drip path is tested.
- **Email:** Inspect SMTP and scheduler logs; test a scoped cohort of no more than 10 overdue users after verifying the campaign copy does not promote unavailable price alerts.
- **CRO:** Add a shared typed analytics helper and instrument signup success, watchlist success, comparison attempt/result, newsletter success, and outbound seller click. Add a clear reactivation path for the 111 registered users with no watchlist row.
- **Growth:** Build a first-party weekly metrics query with date-bounded counts. Fix `/api/admin/alerts` and add a health check for stale activity before using alert or retention reporting.

## Data Quality and Product-Status Guardrails

- Price tracking, price history, price-drop alerts, target-price alerts, buy/wait/hold calls, and TicketScan price statistics are not current product capabilities. They are excluded from public recommendations.
- The 256 watchlist rows represent saved events; they are not events with working price tracking.
- `/api/admin/activity` exposes only the latest 20 mixed activity rows, so it cannot provide complete cohort journeys.
