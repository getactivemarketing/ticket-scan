# TicketScan Weekly Report — Week of September 25–October 2, 2026

_Prepared October 2, 2026 from the deployed admin API, read-only PostgreSQL queries, source inspection, and the SeatGeek public-site review. “This week” means the trailing seven days at report time; the API’s `usersThisWeek` uses the same window._

## Executive Summary

- **Acquisition improved:** 8 new registrations this week versus 3 last week (+167%); total registered users reached 263.
- **Activation remained flat:** 3 watchlist additions this week versus 3 last week. All 3 new signups who added an item did so after signup, but anonymous search and compare conversion are not measurable.
- **The core monitoring/alert loop remains unavailable:** price history has not advanced beyond July 24, the alerts admin endpoint returns an error, there are 0 active target prices, and 0 triggered alerts.
- **Retention instrumentation is still the main blind spot:** GTM loads, but no named conversion events, UTM persistence, GA4 reporting, session/return events, or email delivery/open/click telemetry were verified.
- **SeatGeek is increasing competitive pressure through AI discovery and official primary + resale inventory.** TicketScan’s defensible near-term position is verified event discovery, venue context, onsale information, and source-neutral outbound comparison—without promoting unavailable price intelligence.

## Growth Metrics

| Metric | This Week | Last Week | WoW Change | MoM Change |
|---|---:|---:|---:|---:|
| Unique Visitors | N/A | N/A | — | — |
| New Signups | 8 | 3 | +166.7% | N/A — prior 30-day baseline not stored |
| Total Registered Users | 263 | 255* | +3.1% | N/A |
| Watchlist Items Added | 3 | 3 | 0% | N/A — prior 30-day baseline not stored |
| Active Watchlist Users | 3** | 2** | +50.0% | N/A |
| Price Comparisons | N/A | N/A | — | — |
| Newsletter Subscribers (active) | 6 | 6 | 0% | N/A |
| Price Alerts Triggered | 0 | 0 | 0% | 0 all time |

\* Prior total is reconstructed as current total minus this week’s signups; no historical snapshot table exists.  
\* “Active” here means users who added a watchlist row in the window, not a session-based active-user metric.

### Additional current-state metrics

- Total watchlist rows: **255**.
- Registered users with at least one watchlist row: **153**.
- Registered users with no watchlist row: **110**.
- Power-user proxy (3+ watchlist rows): **17**.
- Casual-user proxy (1–2 watchlist rows): **136**.
- Watchlist rows with a target price: **0/255 (0%)**.
- Triggered alert rows: **0**.
- Drip email send rows: **0** returned by `/api/admin/drip-stats`; 20 users were listed as pending, including users 35 days after signup.

## Funnel Conversion Rates

| Step | This Week | Last Week | Change |
|---|---:|---:|---:|
| Visit → Search | N/A | N/A | No GA4/session data |
| Search → Compare | N/A | N/A | No event instrumentation |
| Compare → Signup | N/A | N/A | No event instrumentation |
| Signup → Watchlist Add | 37.5% (3/8) | N/A | Denominator for last week is not recoverable from the activity endpoint |
| Watchlist → Return Visit | N/A | N/A | No session/return event |

The 3/8 figure is a same-window product proxy: three of this week’s eight signups have a watchlist row created after signup. It is not a complete cohort activation rate because the API does not expose full signup-to-action event history.

## Traffic by Channel

Unavailable. There is no GA4 Reporting API export, channel dimension in the admin API, UTM persistence, or first-/last-touch attribution field. Do not infer Organic, Direct, Paid, Social, Email, or Referral shares from email domains, signup timing, or publishing volume.

## Content Performance

Page traffic, conversion rate, and high-traffic/low-conversion pages are unavailable without GA4 or an equivalent page-event store.

The only safe demand proxy is watchlist activity:

- This week’s three new rows were **Denver Broncos vs. Seattle Seahawks** at Empower Field, **JOHN SUMMIT – CTRL ESCAPE ARENA TOUR** at State Farm Center, and **Philadelphia Eagles v Jacksonville Jaguars** at Tottenham Hotspur Stadium.
- The all-time popular-events endpoint is not time-bounded and currently shows repeated demand for Harry Styles at Madison Square Garden, Ariana Grande at Barclays Center, Noah Kahan dates, World Cup matches, and Flyleaf at House of Blues Chicago. Treat duplicate event/date rows as separate inventory records, not unique demand without normalization.

## Event Trends

- **New traction this week:** one watchlist row each for the three events listed above.
- **Biggest price movements:** unavailable. The latest price-history row is July 24, 2026 at 20:01 UTC; no current comparison is supportable.
- **Most popular tracked events:** available only as an all-time, row-level admin ranking; see the customer behavior report for interpretation.

## Email Performance

- Active newsletter subscribers: **6**; no new subscriptions this week or last week.
- Drip statistics: **empty**; pending list contains **20** users and no sent rows.
- Open rate, click-through rate, delivery, bounce, unsubscribe, and conversion metrics: **not exposed** by the application or connected provider reporting.
- Price-alert engagement: **0 triggered alerts**; the alerts endpoint fails and no current price data exists.

## Paid Media Summary

Spend, CPA, ROAS, campaign, and platform data are unavailable. No active paid campaign was verified in the repository. Hold paid acquisition until analytics events, onboarding email delivery, and the core product-status issues are repaired.

## Key Insights

1. **Registration is up, but activation volume is not.** Signups rose from 3 to 8 while watchlist adds stayed at 3. The team should optimize the first authenticated session and measure search → compare → watchlist explicitly.
2. **The activation path is fast when it happens.** Across 153 users who have ever added a watchlist row, mean signup-to-first-add is 0.198 days, median 0 days, and 151/153 first adds occurred within 24 hours. This is an all-time behavioral signal, not a causal claim.
3. **The monitoring value proposition cannot currently be measured or promoted.** Target-price adoption is 0%, price history is stale, triggered alerts are 0, the alerts route fails, and the drip campaign has no recorded sends.
4. **SeatGeek is moving up-funnel.** Its August 2026 “Ask SeatGeek” launch and March ChatGPT integration put conversational ticket discovery closer to the point where users form intent. TicketScan needs stronger venue/on-sale authority and a clean, measurable comparison workflow to compete for that moment.

## Recommendations for Next Week

- **Content team:** Draft the SeatGeek comparison page from the attached spec, centered on “TicketScan for event discovery and venue/on-sale context; SeatGeek for inventory, seat selection, and checkout.” Do not promise current TicketScan price history or alerts.
- **SEO team:** Prioritize venue + event + onsale/presale queries and refresh pages with verifiable venue facts. Avoid price-statistic claims until the data pipeline is healthy.
- **Paid team:** Keep spend paused; prepare only measurement-first campaign briefs with UTMs and conversion acceptance criteria.
- **Email team:** Repair or verify the drip scheduler and SMTP path before sending new acquisition traffic. Remove unavailable alert/price-drop claims from public sequences.
- **CRO team:** Add a visible first-session path: search → compare available listings → save an event → view onsale/presale details. Instrument each step.
- **Growth team:** Interview 3–5 power-user proxies and 3 recent signups who did not add a watchlist item; use the results to reduce the 110-user no-watchlist segment.

## Sources and Method Notes

- Deployed admin endpoints checked October 2: `/stats`, `/users`, `/watchlist`, `/newsletter`, `/alerts`, `/activity`, `/popular-events`, `/drip-stats`, `/price-history`.
- Read-only PostgreSQL queries against the configured Railway database calculated cohort, segment, and latency metrics.
- Tracking findings are based on `web/src/app/layout.tsx`, frontend source search, and prior audit artifacts; no GA4 property access was available.
- Internal product-status restrictions apply: price tracking, price history, alerts, target-price promises, and buy/wait calls are not public-facing claims while the outage remains unresolved.
