# TicketScan Weekly Report — Week of 2026-08-01

**Prepared:** 2026-08-07 UTC  
**Data basis:** authenticated admin snapshots and repository/live-site inspection recorded in the August 1–7 daily dashboards. Visitor, channel, paid-media, pageview, comparison, and email-engagement metrics are **N/A**, not zero, because the current system does not expose them.

## Executive Summary

- The platform ended the week at **200 registered users, 203 watchlist rows, and 4 active newsletter subscribers**. The 7-day user snapshot grew from 196 to 200 (+4); watchlist rows grew from 199 to 203 (+4).
- Activation is the clearest positive signal: the last verified snapshot counted **117 users with at least one watchlist item** (59.1% of 198 users). The remaining users are an onboarding opportunity, not proven churn.
- The core value loop is currently inactive or unmeasurable: **0 of 203 watchlist rows has a target price**, `/api/admin/alerts` returns HTTP 500, and no alert history is verifiable.
- Price intelligence is stale: the newest `price_history` row is **2026-07-24 20:01:07 UTC**, despite the documented four-hour tracker.
- GTM loads, but named conversion events and UTM persistence are absent. No defensible visit → search → compare → signup → watchlist funnel or channel-quality ranking can be produced this week.

## Growth Metrics

| Metric | This Week | Last Week | WoW Change | MoM Change |
|---|---:|---:|---:|---:|
| Unique Visitors | N/A | N/A | N/A | N/A |
| New Signups | 4 observed* | 13 7-day baseline | -69.2%* | N/A |
| Total Registered Users | 200 | 196 | +2.0% | +2.6% vs. Jul 31 (195) |
| Watchlist Items Added | 4 net rows* | 3 net rows* | +33.3%* | +2.5% vs. Jul 31 (198) |
| Active Watchlist Users | 117 last verified Aug 5 | 114 Jul 31 | Directional increase | +2.6% |
| Price Comparisons | N/A | N/A | N/A | N/A |
| Active Newsletter Subscribers | 4 | 4 | 0% | +33.3% vs. Jul 31 (3) |
| Price Alerts Triggered | 0 lifetime reported; detail endpoint broken | 0 reported | Not measurable | Not measurable |

\* Net change between the recorded Aug 1 and Aug 7 platform snapshots; not a complete event-level export. The “last week” signup comparator is the prior seven-day baseline, so use as directional only.

## Funnel Conversion Rates

| Step | This Week | Last Week | Change |
|---|---:|---:|---:|
| Visit → Search | N/A | N/A | N/A |
| Search → Compare | N/A | N/A | N/A |
| Compare → Signup | N/A | N/A | N/A |
| Signup → Watchlist Add | N/A | N/A | N/A |
| Watchlist → Return Visit | N/A | N/A | N/A |

Backend timestamps show that activation often happens on the signup day, but current endpoints do not expose a complete cohort denominator or return sessions. See [customer-behavior-2026-08-07.md](customer-behavior-2026-08-07.md).

## Traffic by Channel

| Channel | Visitors | Signups | Conversion | Quality conclusion |
|---|---:|---:|---:|---|
| Organic | N/A | N/A | N/A | Cannot rank |
| Direct | N/A | N/A | N/A | Cannot rank |
| Paid | N/A | N/A | N/A | Do not scale on attributed performance |
| Social | N/A | N/A | N/A | UTM capture absent |
| Email | N/A | N/A | N/A | Open/click telemetry absent |
| Referral | N/A | N/A | N/A | Referral attribution absent |

## Content and Event Performance

Top pages, top-converting pages, and high-traffic/low-conversion pages are **N/A**: pageview and conversion events are not collected. The watchlist API’s most repeated normalized event names in the latest available analysis were Harry Styles (19 rows), Backstreet Boys (10), Ariana Grande (8), Noah Kahan (7), and Bruno Mars (6). These are watchlist-row signals, not traffic or unique-user rankings; duplicate event IDs must be normalized before publishing.

The latest `/api/admin/popular-events` response also showed tied two-watch listings including Noah Kahan at Kia Center and Citi Field, Harry Styles at Madison Square Garden, Flyleaf at House of Blues Chicago, and Ariana Grande at Barclays Center.

## Email Performance

- Drip: **0 sent rows reported**; `/api/admin/drip-stats` showed 20 pending users, but the list is capped and is not a delivery log.
- Newsletter: 4 active subscribers; opens, clicks, bounces, unsubscribes, and conversions are N/A.
- Price alerts: cannot validate delivery or engagement because `/api/admin/alerts` returns HTTP 500 and no click events are stored.

## Paid Media Summary

Spend, CPA, ROAS, campaign ranking, and platform-level conversion data are **N/A**. Hold conversion-focused scaling until UTM persistence and conversion events are live.

## Key Insights

1. **Activation exists but is shallow.** At least 117 users have tracked an event, while 0 of 203 rows has a target price. The next growth constraint is target-price completion, not another top-of-funnel feature.
2. **The product promise cannot currently be delivered or proved.** A stale price tracker plus a broken alerts endpoint means “track a price and get notified” is not a reliable experience.
3. **The analytics layer is the shared dependency for every team.** GTM is installed, but without event names, UTM storage, and reporting endpoints, paid, SEO, social, email, CRO, and growth decisions are structurally blind.

## Recommendations for Next Week

- **Content:** Publish “TicketScan vs SeatGeek: compare all-in price, deal quality, and price tracking,” using a neutral feature matrix and no unsupported savings claims.
- **SEO:** Create the comparison page and an all-in-fees explainer; use watchlist demand only as a hypothesis until pageview analytics is available.
- **Paid:** Keep spend capped/paused for conversion campaigns. First add UTMs, landing-page IDs, signup and watchlist events, then run a small controlled test.
- **Email:** Do not release overdue drip recipients until SMTP delivery and suppression are verified. Add provider message IDs plus sent/delivered/bounce/open/click events.
- **CRO:** Ship the three-step first-value path: Find event → Track event → Set target price, with explicit success/error events.
- **Growth:** Segment by activation state, not “churn”; add `last_seen_at` or privacy-safe activity events before win-back automation.
- **Engineering:** P0: repair `/api/admin/alerts`; investigate the tracker outage after July 24; add daily metric snapshots and paginated drip health.

## Deliverables and Handoffs

- [Customer behavior analysis](customer-behavior-2026-08-07.md)
- [SeatGeek competitor deep-dive](competitor-seatgeek-2026-08-07.md)
- [Tracking audit](tracking-audit-2026-08-07.md)
- [Comparison page spec for Content Agent](compare-ticketscan-vs-seatgeek-spec-2026-08-07.md)

