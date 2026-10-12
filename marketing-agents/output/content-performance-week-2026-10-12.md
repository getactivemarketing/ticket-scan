# TicketScan Content Performance — Week of October 12, 2026

## Executive conclusion

A defensible top-five traffic or conversion ranking is not available this week. The supplied analytics/admin surfaces do not expose pageviews, unique visitors, traffic sources, bounce rate, search queries, comparison starts, newsletter conversions, or watchlist-add events. The latest dashboard reports zeros for new signups and newsletter subscribers in the latest 24-hour window, but that is not enough to infer page performance.

Do not label any page a top performer until GA4/Search Console or equivalent event data is connected.

## Verified operating metrics

Source: `marketing-agents/output/analytics/analytics-daily-2026-10-11.md`.

| Metric | Latest verified value | Interpretation |
|---|---:|---|
| Registered users | 264 | Database total; not a traffic metric |
| Watchlist records | 256 | Raw records; not evidence of price tracking |
| Active newsletter subscribers | 6 | Database total |
| New signups in latest 24h | 0 | Could be a true lull or an instrumentation gap |
| Watchlist additions in latest 24h | 0 | Same limitation |
| Latest price-history record | 2026-07-24 20:01 UTC | Internal outage signal; never use in public copy |
| Pageviews / bounce rate | N/A | Not exposed |
| Conversion rate | N/A | Conversion events are not instrumented |

## Top five: not reportable yet

The requested top-five pages by traffic and conversion cannot be computed from the available data. The following are **priority candidates, not measured winners**, because they combine seasonal relevance with an existing content or data advantage:

1. MLB postseason event and team pages — current October demand and official schedule sources.
2. NFL stadium guides — verified seating/capacity content plus weekly event intent.
3. NBA team and arena pages — opening-week relevance and strong venue-guide fit.
4. NHL arena pages — season-opening and mobile-entry questions.
5. Ticket-buying checklist / fee explainer — best current newsletter-capture opportunity.

## Bottom five: action-needed pages

These are selected by factual risk and freshness, not by measured traffic loss.

| Page / content | Problem | Action this week |
|---|---|---|
| `best-time-to-buy-concert-tickets` | Claims TicketScan analyzed transactions and gives timing guidance from price data | Remove unsupported data claims; replace with general, sourced buying considerations |
| `ticketmaster-vs-seatgeek-comparison` | Contains old cross-market price tables and a “better prices” framing | Remove stale figures; compare checkout fields, delivery, protection, and seat equivalence |
| `world-cup-2026-ticket-guide` | Written as if the tournament is underway and contains live/active language | Archive event status; retain sourced post-event lessons and venue links |
| `world-cup-2026-final-tickets-guide` | Completed-event urgency and price-alert/cross-market claims | Mark historical; remove active CTA and unsupported product claims |
| `world-cup-2026-final-ticket-10990-dynamic-pricing` | Active World Cup framing and price-alert CTA | Archive or rewrite as a sourced post-event explainer; audit every statistic |

## Competitor/content findings

SeatGeek currently covers hidden fees, presale/onsale mechanics, event-specific guides, and timing advice. Ticketmaster owns official event discovery and onsale information. The opportunity is not another generic “cheap tickets” article; it is a verifiable research workflow that combines the event date, venue facts, seller identity, checkout total, delivery, and buyer-protection questions.

## Measurement actions

1. Add a shared analytics helper for `event_search`, `watchlist_save`, `newsletter_signup`, `outbound_ticket_click`, and `lead_magnet_download`.
2. Persist UTM source/medium/campaign for the first-party session or event payload.
3. Expose a weekly report with page path, landing sessions, CTA clicks, signup rate, watchlist-save rate, and outbound-click rate.
4. Re-run this report after seven complete days of instrumented data.
5. Audit the drip campaign before using email performance as evidence; the latest reports contain no sent-stat rows.

