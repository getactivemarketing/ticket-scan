# TicketScan Weekly Report — Week of 2026-10-23

## Executive Summary

- Production admin data shows 267 registered users, 256 saved-event rows, 153 users with at least one saved row, and 7 active newsletter subscribers.
- This week added 1 signup, 0 saved-event rows, and 0 newsletter subscribers; the prior week added 2, 0, and 1. The last-30-day totals are 12 signups, 4 saved-event rows, and 1 newsletter subscription versus 20, 25, and 1 in the preceding 30 days.
- Activation and retention cannot be measured reliably because the site has no queryable search, comparison, session-return, seller-click, or email-engagement events. GTM loads, but the core conversion events are not being pushed.
- The price-data and alert path remains unavailable. No price data has been recorded since 2026-07-24; `/api/admin/alerts` returns HTTP 500; no target prices are currently set; and drip stats are empty.
- SeatGeek continues to widen the gap on marketplace ownership and intelligence, with official announcements for conversational search (Ask SeatGeek) and promoter/venue pricing intelligence (TourIQ). TicketScan’s defensible lane remains independent event research, venue context, and onsale/presale information.

## Measurement Scope

Snapshot taken 2026-10-23 from the deployed admin API and repository/deployed-site inspection. Week-over-week uses UTC calendar windows 2026-10-16 through 2026-10-23 and 2026-10-09 through 2026-10-16. “Saved-event rows” is used instead of “events being tracked for price.”

## Growth Metrics

| Metric | This Week | Last Week | WoW Change | MoM Change |
|---|---:|---:|---:|---:|
| Unique Visitors | Not measured | Not measured | — | — |
| New Signups | 1 | 2 | -50% | -40% vs prior 30 days* |
| Total Registered Users | 267 | 266 on prior snapshot | +1 | +12 in last 30 days |
| Saved-Event Rows Added | 0 | 0 | — | -84% (4 vs 25) |
| Active Saved-Event Users | 153 all-time | 153 all-time | 0 | — |
| Price Comparisons | Not measured; price path unavailable | Not measured | — | — |
| Active Newsletter Subscribers | 7 | 7 | 0 | +1 net subscription in last 30 days |
| Price Alerts Triggered | 0 / endpoint returns 500 | 0 / endpoint returns 500 | — | — |

\* “MoM” compares the last 30 days (12 signups) with the preceding 30 days (20 signups), not a same-length completed calendar month.

## Funnel Conversion Rates

| Step | This Week | Last Week | Change |
|---|---:|---:|---:|
| Visit → Search | Not measured | Not measured | — |
| Search → Compare | Not measured | Not measured | — |
| Compare → Signup | Not measured | Not measured | — |
| Signup → Saved-Event Row | 0 of 1 observed this week | 0 of 2 observed last week | Not computable as a useful rate |
| Saved-Event Row → Return Visit | Not measured | Not measured | — |

The one current-week signup had no saved-event row by the snapshot. This is an observation, not a conversion-rate diagnosis, because the event stream and cohort window are incomplete.

## Traffic by Channel

Organic, direct, paid, social, email, and referral traffic are not measurable in the current stack. No GA4 export, pageview table, UTM persistence, or channel-attributed conversion record is available. Do not rank channel quality until first-touch/last-touch UTM capture and first-party conversion events are live.

## Content Performance

Top pages, conversion-rate pages, and high-traffic/low-conversion pages are not measurable. GTM is present, but there are no verified pageview or conversion exports. The immediate content measurement requirement is `event_viewed` plus `seller_outbound_click`, joined to a consent-compliant session ID.

## Event Trends

The all-time popular-events endpoint is tie-heavy, with many event-date rows at two saves. The strongest venue-level saved-event concentrations remain Madison Square Garden (23), Sphere (11), Wrigley Field (8), Barclays Center (8), and AT&T Stadium (8). The strongest city concentrations are New York (31), Chicago (17), Las Vegas (15), Philadelphia (13), and Toronto (11).

There were no saved-event additions this week. Price movement and “new events gaining traction” cannot be reported because price ingestion is stale and no event-view/search trend table exists.

## Email Performance

- Active newsletter subscribers: 7; 0 new subscribers this week, 1 in the prior week.
- Drip campaign stats: empty. The pending-user list shows eligible users, but no sends are recorded.
- Opens, clicks, bounces, unsubscribes, and return visits after email are not instrumented.
- Price-alert engagement is unavailable and must not be used as a performance KPI while the alert path is down.

## Paid Media Summary

Spend, CPA, ROAS, campaign, and platform data were not available in the repository or admin API. No paid-media conclusion is supportable this week.

## Key Insights

1. **Activation is the highest-confidence near-term problem.** One new signup and no saved-event rows were recorded this week, while the system cannot tell whether the user searched, viewed an event, or abandoned before the save action.
2. **The product has a measurable owned audience but no usable attribution loop.** The database contains 267 users and 256 saved-event rows, yet source, page, funnel, seller-click, and return behavior cannot be joined.
3. **Lifecycle email is not currently an operating channel.** Seven subscribers exist, but drip sends are empty and email engagement is not recorded; repair sender health and event logging before optimizing copy.
4. **SeatGeek’s competitive threat is moving up-funnel.** Ask SeatGeek targets consumer discovery, while TourIQ extends SeatGeek’s intelligence positioning to promoters and venues. TicketScan should sharpen its independent research and venue-context position rather than echo unsupported price-intelligence claims.

## Recommendations for Next Week

- **Content team:** Draft `/compare/ticketscan-vs-seatgeek` around research-vs-marketplace differences, venue guidance, onsale timing, and an all-in-price checklist. Avoid claims about TicketScan price tracking, alerts, or savings.
- **SEO team:** Prioritize verified venue/section/access content for high-interest hubs around Madison Square Garden, Sphere, Wrigley Field, Philadelphia venues, and Toronto venues; add internal links from city and team pages.
- **Paid team:** Hold performance conclusions until UTM capture and conversion events exist. Prepare tagged landing-page variants, but do not report CPA or ROAS from unverified data.
- **Email team:** Treat the drip sender as a P0 operational check: verify SMTP, scheduler, suppression, and `drip_emails_sent` inserts. Rewrite any sequence copy that promotes price alerts before sending.
- **CRO team:** Instrument successful signup, saved-event add, event view, newsletter subscription, and outbound seller click. Add an activation checklist to the first logged-in experience.
- **Growth team:** Define 1-day, 7-day, and 30-day cohorts after instrumentation. Segment by saved-event breadth only until return-session behavior is available.

## Strategic Recommendation

Make the next growth decision only after a seven-day telemetry integrity window. The minimum release is a typed client-safe `track()` helper, five success events, first/last-touch UTM capture, date-bounded first-party event queries, and a repaired alert endpoint that distinguishes “zero” from “failed.”

## Linked Deliverables

- [Customer behavior analysis](customer-behavior-2026-10-23.md)
- [SeatGeek competitor deep-dive](competitor-seatgeek-2026-10-23.md)
- [Tracking audit](tracking-audit-2026-10-23.md)
- [SeatGeek comparison-page spec](compare-ticketscan-vs-seatgeek-spec-2026-10-23.md)
- [Channel recommendations](analytics-channel-recommendations-2026-10-23.md)
