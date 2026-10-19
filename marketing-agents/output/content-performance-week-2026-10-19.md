# TicketScan Content Performance — Week of October 19, 2026

## Executive conclusion

A defensible top-five traffic or conversion ranking is still unavailable. The current admin/API surfaces do not expose pageviews, unique visitors, bounce rate, search queries, comparison starts, newsletter conversions by page, or outbound-ticket clicks. The latest daily report shows zero signups, saved-event additions, and newsletter subscriptions in the most recent 24-hour window, but that is not enough to rank content.

The immediate content objective is therefore to improve the quality and freshness of high-intent pages while engineering closes the measurement gap.

## Verified operating metrics

| Metric | Latest verified value | Interpretation |
|---|---:|---|
| Registered users | 266 | Database total; not a traffic metric |
| Watchlist records | 256 | Saved items; not evidence of price tracking |
| Active newsletter subscribers | 7 | Database total |
| New signups, latest 24h | 0 | Could be a lull; no page attribution |
| Watchlist additions, latest 24h | 0 | No event-level attribution |
| Drip emails sent | 0 recorded | Delivery and send logging need verification |
| Pageviews / bounce rate | N/A | Not exposed |
| Conversion rate | N/A | Success events are not instrumented |

## Top five: not reportable yet

These are **priority candidates, not measured winners**:

1. **Madison Square Garden / New York pages** — 23 saved rows in the current full watchlist snapshot and NBA opening-week relevance.
2. **NBA city/category and arena pages** — season-opening intent and strong internal-link fit.
3. **NFL stadium guides** — weekly event intent, verified seating/capacity content, and current schedule relevance.
4. **NHL arena and category pages** — active season, mobile-entry questions, and schedule-change opportunities.
5. **Ticket-buying checklist content** — strongest current lead-magnet fit because it solves an immediate, general buyer problem without relying on unavailable product data.

The remaining full-watchlist concentrations—Sphere (11), Wrigley Field (8), Barclays Center (8), and AT&T Stadium (8)—are useful internal-link hubs, not proof of page traffic or conversion.

## Bottom five: action needed

| Page / content | Risk | Action this week |
|---|---|---|
| `best-time-to-buy-concert-tickets` | Title and body imply TicketScan analyzed price data and can advise timing | Rewrite as general planning guidance; remove data-driven, low-price, and buy/wait claims |
| `ticketmaster-vs-seatgeek-comparison` | Old price tables and “better prices” framing are unsupported | Replace with a neutral comparison of seat details, fees, delivery, seller, and buyer terms |
| `world-cup-2026-ticket-guide` | Past-event page can read as active inventory | Mark historical, update date language, retain only sourced venue and buyer lessons |
| `world-cup-2026-final-tickets-guide` | Completed-event urgency and live-buying language | Archive active CTA and rewrite as a retrospective guide |
| `world-cup-final-2026-platforms-compared-price-fees-protection` | Implies current cross-market price evidence | Remove price comparisons; preserve a general checklist for evaluating marketplace terms |

## What is working conceptually

The strongest editorial direction is practical verification: event identity, local onsale time, venue sections, listing type, delivery method, and final checkout total. It matches current buyer intent and can be supported by event/venue facts without making unavailable product claims.

## Specific actions

1. Publish the two-page buyer cheat sheet and attach it to the checklist article and newsletter form.
2. Add internal links from MSG, Sphere, Wrigley Field, Barclays Center, and AT&T Stadium guides to relevant city/category pages.
3. Rewrite the five risky pages above before any further social or email promotion.
4. Add a visible “last checked” date and source link to every onsale/presale block.
5. Instrument `event_search`, `saved_event_success`, `newsletter_signup`, `lead_magnet_download`, and `outbound_ticket_click`, with page path and UTM fields.
6. Do not call a page a top performer until seven complete days of page-level data are available.

## Data-quality warnings

- Price history is stale since July 24, 2026 and must not be used in public content.
- `/api/admin/alerts` returns HTTP 500; alert counts are not a reliable performance metric.
- Drip stats are empty even though pending users exist; email open, click, and conversion rates are unavailable.
- Current watchlist totals represent saved events, not active price tracking.
