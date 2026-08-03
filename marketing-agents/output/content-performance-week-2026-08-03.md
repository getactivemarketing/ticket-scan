# TicketScan Content Performance — Week of August 3, 2026

**Review date:** August 3, 2026  
**Scope:** Prior week through August 2, with current production and repository checks on August 3

## Important measurement note

Page traffic, rankings, bounce rate, page-level signup rate, watchlist conversion by URL, and newsletter conversion by page are **not available**. GA4/Search Console are not connected, and the database does not attribute users to landing pages. Therefore, this report does not claim a traffic top five or bottom five. It uses clearly labeled proxies: freshness, search opportunity, first-party demand, technical correctness, and measurable product activation.

## Measured product signals

The latest available weekly analytics report (July 24–31) records:

- 15 new registrations versus 12 the prior week (+25%).
- 195 registered users total.
- 10 watchlist items added during the week; 114 users have added at least one item overall.
- 0 of 198 watchlist items had a target price; 0 price alerts triggered.
- 4 active newsletter subscribers, flat week over week.
- 202 price-history rows for one Ticketmaster event only; no SeatGeek or StubHub history in that weekly snapshot.
- GA4/Search Console page performance: unavailable.

These figures show that acquisition and initial watchlist activation exist, but they do not identify which content pages caused them.

## Top five content assets by evidence-based proxy

| Rank | Asset | Evidence | What is working | Action this week |
|---:|---|---|---|---|
| 1 | `world-cup-2026-ticket-guide` | Recent live-tournament refresh and a current SEO bridge request | Timely, consumer-first advice; strong cluster hub | Convert to post-event lessons; link to fall sports/concert comparisons |
| 2 | World Cup venue cluster and “cheapest get-in” ranking | Broadest completed venue coverage; strong internal-link surface | Structured comparison, venue intent, concrete buying decisions | Retain evergreen venue facts; remove completed-event inventory language |
| 3 | Event demand around Harry Styles, Backstreet Boys, Ariana Grande, Noah Kahan | Watchlist snapshot shows concentrated first-party demand, though duplicate event IDs exist | Artist/event intent is closer to transaction than generic advice | Build canonical event pages only after deduplicating IDs and verifying inventory |
| 4 | `ticketmaster-vs-seatgeek-comparison` | Existing comparison asset plus August SEO brief identifying a StubHub/event-page gap | Directly matches TicketScan’s differentiation | Refresh with all-in price table, StubHub, FAQs, and comparison CTA |
| 5 | `best-time-to-buy-concert-tickets` and `last-minute-ticket-deals-guide` | Evergreen topics with strong product alignment; no page-level traffic proof | Timing advice naturally supports history and watchlists | Update language to distinguish event types and add measurable CTAs |

**Interpretation:** These are strategic/content proxies, not measured traffic winners. The strongest signal is the combination of search intent and first-party watchlist demand, not an asserted page conversion rate.

## Bottom five / attention queue

| Priority | Asset or group | Why it needs attention | Decision |
|---:|---|---|---|
| 1 | Pre-event World Cup “buy now” and active-inventory copy | Tournament ended July 19; old urgency and offer/schema language can mislead users | Refresh to post-event evergreen lessons or archive/redirect |
| 2 | World Cup stadium pages with stale fixture or offer assumptions | SEO check found completed-event freshness issues; match data has known placeholder risk | Keep venue/travel history; remove unsupported fixtures and active offers |
| 3 | Unrefreshed or thin venue pages | 78 SEO pages need recurring refresh; no traffic data identifies decay | Refresh two per week with FAQs, local intent, seat guidance, and compare CTA |
| 4 | Generic blog posts with no measurable CTA path | Good traffic cannot be confirmed, and page-level conversion is untracked | Add one primary CTA and instrument compare/watchlist/download events |
| 5 | Lead-magnet surfaces | Four subscribers and zero reported organic growth indicate capture is not yet proven | Deploy form, test write path, deliver asset, then measure download-to-signup |

## What is working

- Event-specific and venue-specific intent is closer to a transaction than broad ticket advice.
- The live World Cup refresh demonstrated the value of de-staling a hub when event context changes.
- Users who register tend to add a watchlist quickly: the latest report says 112 of 114 activated users added their first item the same day. This supports strong post-signup content-to-product CTAs.
- Comparison framing is differentiated when it explains same-event, same-seat, all-in totals across multiple marketplaces.

## What is not yet working or cannot be evaluated

- No defensible content-level traffic ranking.
- No defensible bounce-rate ranking.
- No page-level signup or watchlist attribution.
- Target-price adoption is 0% in the latest report, so “set an alert” content promises need a product check.
- Newsletter growth is flat and drip delivery is reported at zero; lead magnets should not be judged until capture and delivery are verified.

## Specific actions

1. **Instrumentation:** add events for page view, comparison start/completion, watchlist add, target-price set, newsletter subscribe, lead-magnet download, and outbound click; include page slug and content type.
2. **Editorial:** ship the World Cup lessons bridge, NFL preseason guide, and overpay checklist this week.
3. **Refresh:** update the Ticketmaster/SeatGeek comparison and two high-demand venue pages.
4. **Pruning:** archive pre-July-19 active World Cup urgency pieces; retain only pages with evergreen search intent or a clear redirect target.
5. **Data quality:** canonicalize duplicate event IDs before using watchlist counts to choose artist/event pages.
6. **Product/CRO handoff:** verify target-price input and alert behavior before promising alerts in new content.

## Next audit requirements

The next report should include, for each public content URL: sessions, organic clicks/impressions, engaged sessions, newsletter subscribes, comparison starts/completions, watchlist adds, target-price sets, and outbound marketplace clicks. Report a page as a true top or bottom performer only when those fields are populated for the same date range.

## Sources

- `marketing-agents/output/analytics-weekly-2026-07-31.md`
- `marketing-agents/output/seo-daily-2026-08-03.md`
- `marketing-agents/output/seo-requests/2026-08-03-seatgeek-event-page-opportunity.md`
- `marketing-agents/output/seo-requests/2026-08-03-world-cup-ticket-lessons.md`
