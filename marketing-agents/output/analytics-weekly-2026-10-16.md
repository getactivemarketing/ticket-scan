# TicketScan Weekly Report — Week of 2026-10-16

**Reporting window:** 2026-10-09 11:00 UTC–2026-10-16 11:00 UTC. Previous week is the immediately preceding seven-day window. First-party counts were pulled from the production admin API on 2026-10-16. Visitor, pageview, channel, comparison, and return-visit metrics remain unavailable because GTM is present but the site does not expose a queryable conversion/event export.

## Executive Summary

- The registered base reached **266 users**. There were **2 signups** this week, up from 1 last week, but both new accounts still have zero saved events in the current snapshot.
- **0 watchlist rows were added** this week versus 1 last week. This is a saved-event signal only; it is not evidence of price tracking.
- The active newsletter list grew to **7**, including 1 new subscriber this week. Drip stats still show 0 recorded sends, so open, click, and conversion performance cannot be evaluated.
- Activation remains the largest observable gap: **153 of 266 users** have at least one saved event, leaving **113 with none**. Seventeen users have 3+ saved events, but return behavior and comparison activity are not measurable.
- The highest-priority operational work is still measurement and lifecycle reliability: conversion events/UTM capture are not verifiable, `/api/admin/alerts` returns HTTP 500, price history has been stale since July 24, and `/api/admin/drip-stats` is empty.

## Growth Metrics

| Metric | This Week | Last Week | WoW Change | MoM Change* |
|---|---:|---:|---:|---:|
| Unique Visitors | N/A | N/A | N/A | N/A |
| New Signups | 2 | 1 | +100.0% | N/A |
| Total Registered Users | 266 | 264 | +0.8% | +7.3% vs. 248 on Sep 16 |
| Watchlist Items Added | 0 | 1 | -100.0% | -100.0% vs. 7 in prior 30-day window |
| Active Watchlist Users | 153 total | 153 total | flat | N/A |
| Price Comparisons | N/A | N/A | N/A | N/A |
| Newsletter Subscribers Added | 1 | 0 | N/A | N/A |
| Active Newsletter Subscribers | 7 | 6 | +16.7% | +16.7% vs. 6 on Sep 16 |
| Price Alerts Triggered | N/A; endpoint 500 | N/A; endpoint 500 | N/A | N/A |

\* MoM is a point-in-time comparison where a comparable snapshot exists; date-bounded visitor, comparison, and conversion series are not available.

Additional live totals: **256 watchlist rows**, **0 rows with a target price**, **27 favorites**, **0 recorded triggered alerts**, and **202 price-history rows returned**, with the newest record at **2026-07-24 20:01 UTC**. These are internal operational facts; do not use them as public product claims.

## Funnel Conversion Rates

| Step | This Week | Last Week | Change |
|---|---:|---:|---:|
| Visit → Search | N/A | N/A | Not instrumented |
| Search → Compare | N/A | N/A | Not instrumented |
| Compare → Signup | N/A | N/A | Not instrumented |
| Signup → Watchlist Add | 0 of 2 observed new users had a saved event in the snapshot | 0 of 1 | Not a reliable conversion rate |
| Watchlist → Return Visit | N/A | N/A | No session/return event |

The signup-to-watchlist observation is directional only: the admin API has no event-level join, search history, or cohort activity stream.

## Traffic by Channel

Unavailable. No GA4 export, referrer field, UTM persistence, or first-party attribution query is connected. Do not rank Organic, Direct, Paid, Social, Email, or Referral by quality this week.

## Content Performance

Top pages, conversion rates, and high-traffic/low-conversion pages are not reportable. The public site does carry the GTM container on sampled routes, but pageview data is not available to this report. Current priority candidates—not measured winners—are NFL stadium guides, NBA/NHL team and venue pages, onsale/presale guides, and the ticket-buying fee checklist.

## Event Trends

The admin endpoint reports saved-event rows, not anonymous demand or price movement. The most saved city/venue pairs in the full current watchlist are:

| City / venue | Saved rows |
|---|---:|
| New York / Madison Square Garden | 23 |
| Las Vegas / Sphere | 11 |
| Chicago / Wrigley Field | 8 |
| Brooklyn / Barclays Center | 8 |
| Arlington / AT&T Stadium | 8 |

The popular-events endpoint is tie-heavy at two saves per returned event/date row. Repeated Harry Styles entries are separate dates/event IDs and must not be collapsed into one event identity.

No price movement is reported: TicketScan price ingestion has not produced a current record since July 24.

## Email Performance

| Area | Finding |
|---|---|
| Drip | 0 recorded sends; `/api/admin/drip-stats` returns an empty stats array and 20 pending users. Open rate, CTR, and conversion rate are unavailable. |
| Newsletter | 7 active subscribers; 1 added this week; provider delivery/open/click/bounce data is not stored. |
| Price-alert email | Not measurable; `/api/admin/alerts` returns HTTP 500 and the product-status notice says price tracking is down. |

## Paid Media Summary

Spend, CPA, ROAS, campaign, and ad-attribution data are unavailable. Report as **N/A**, not zero spend. Keep paid acquisition paused until signup, saved-event, outbound seller-click, and UTM attribution can be validated.

## Key Insights

1. **Acquisition is present but not activating.** Both signups in the current window have zero saved events in the latest user snapshot. The immediate post-signup path should be treated as the primary CRO hypothesis, not as a proven funnel rate.
2. **Demand is concentrated in recognizable venues.** Madison Square Garden has 23 saved rows, followed by Sphere at 11; venue-guide and event-discovery content can use these destinations as internal-link hubs without making unsupported price claims.
3. **The measurement and lifecycle loops are still blocked.** GTM loads, but event pushes and UTM persistence are not verifiable; drip sends are empty; alert diagnostics fail. Paid and lifecycle optimization would be guesswork until these are repaired.

## Recommendations for Next Week

- **Content team:** Publish the SeatGeek comparison page specified in `comparison-spec-ticketscan-vs-seatgeek-2026-10-16.md`, positioning TicketScan around event research, venue facts, onsale timing, saved events, and seller links. Exclude unavailable price/alert claims.
- **SEO team:** Strengthen internal links from high-demand venue pages—especially Madison Square Garden, Sphere, Wrigley Field, Barclays Center, and AT&T Stadium—to event discovery and venue guides. Add verified onsale/presale facts where available.
- **Paid team:** Keep campaigns paused until `sign_up_success`, `watchlist_add_success`, `seller_outbound_click`, and UTM persistence pass a seven-day production integrity check.
- **Email team:** Quarantine current drip templates that mention price alerts, trends, or data-backed timing. Verify SMTP, cron, consent/suppression, and idempotent send logging with a small internal test cohort before sending.
- **CRO team:** Ship the signup-to-first-save path and instrument it with a deduplicated success event. The two new users without saved events are the current actionable signal.
- **Growth team:** Add `last_seen_at`/session events and a first-party weekly snapshot so “active,” “at-risk,” and “returning” cohorts can be computed rather than inferred.
- **Backend:** Fix `/api/admin/alerts`, investigate stale price ingestion internally, and expose date-bounded event counts without using the broken alert path as a health signal.

## Sources and Data Quality

- Live API snapshot: `/api/admin/stats`, `/users`, `/watchlist`, `/newsletter`, `/alerts`, `/activity`, `/popular-events`, `/drip-stats`, and `/price-history`, pulled 2026-10-16.
- [Tracking validation — 2026-10-16](analytics/tracking-validation-2026-10-16.md)
- [Anomaly alerts — 2026-10-16](analytics/anomaly-alerts-2026-10-16.md)
- [Product status guardrail](../PRODUCT-STATUS.md)

This is an internal report. TicketScan must not publicly claim price tracking, price history, price-drop alerts, target-price alerts, buy/wait/hold calls, or TicketScan price statistics until the outage is cleared.
