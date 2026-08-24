# TicketScan Content Performance — Week of 2026-08-24

**Prepared:** 2026-08-24  
**Status:** Provisional analysis; no page-level analytics export is connected.

## Measurement status

GA4/Search Console page sessions, impressions, rankings, bounce rate, engaged sessions, and page-level signup/watchlist conversion are unavailable. It would be misleading to publish a literal traffic top five or bottom five. The rankings below combine current product proxies, seasonality, existing coverage, and commercial intent.

## Verified product signals

| Signal | Current snapshot | Interpretation |
|---|---:|---|
| Registered users | 235 | Product demand exists, but source/page attribution is absent |
| Users with a watchlist | 137 (58.3%) | Watchlist is the strongest available activation proxy |
| Watchlist items | 227 | Content should drive event saves, not just pageviews |
| Trailing 7-day cohort | 16 users; 8 activated, 8 unactivated (50.0%) | First-watch activation is the immediate content/CRO opportunity |
| Active newsletter subscribers | 5 | Lead magnet and source-level signup testing are needed |
| Active / triggered alerts | 0 / 0 reported | Not a reliable content outcome while alerts endpoint and price history are unhealthy |
| Price history | Stale after 2026-07-24 20:01 UTC | Avoid current-price or price-drop claims |

Source: [Aug 24 CRO audit](cro-daily-2026-08-24.md) and [Aug 24 daily audit evidence](../logs/daily-2026-08-24.log).

## Provisional top five content opportunities

| Rank | Asset / topic | Why it is likely to perform | Conversion hypothesis | Action |
|---|---|---|---|---|
| 1 | US Open 2026 session guide | Active event window; main draw begins Aug 30; session intent is specific | Session guide → comparison → watchlist | Publish/update immediately; cite official schedule |
| 2 | NFL 2026 buying guide | Preseason inventory is live and regular season is the next major buying cycle | Team/game search → watchlist | Refresh for preseason vs regular season |
| 3 | Three-way ticket-source comparison | Closest match to TicketScan’s core product and commercial intent | Comparison completion → signup | Add StubHub and all-in methodology |
| 4 | New York / MSG coverage | Supports US Open and late-summer city demand while consolidating internal links | City page → event search → watchlist | Refresh with one clear CTA |
| 5 | Ticket buyer’s cheat sheet | Solves weak newsletter volume with a useful, reusable decision tool | Email capture → first watchlist | Launch with crawlable preview and delivery sequence |

These are opportunity rankings, not measured traffic rankings.

## Bottom five pages / content groups needing attention

| Priority | Page / group | Evidence of risk | Decision and specific action |
|---|---|---|---|
| P0 | World Cup 2026 pages | Tournament ended July 19; new acquisition framing is stale | Keep as evergreen archive; update titles/intros, remove upcoming language, add lessons link |
| P0 | `best-time-to-buy-concert-tickets` | Broad timing claims lack visible freshness and event-type caveats | Refresh methodology date, caveats, tracker CTA, and source labels |
| P0 | `ticketmaster-vs-seatgeek-comparison` | Title omits StubHub and page does not foreground checkout total | Expand to three sources; add equivalent-listing table and timestamp field |
| P1 | `nfl-ticket-buying-guide` | Seasonal value is high but 2026/preseason context and activation path need updating | Add 2026 schedule context, event-specific examples, watchlist CTA |
| P1 | Broad venue/city pages without event CTA | Likely conversion leakage; no page-level conversion telemetry to confirm | Add one compare module and one watchlist CTA; measure before merging or killing |

No page is recommended for deletion solely from current evidence. A 28-day instrumented baseline should precede merge/kill decisions.

## What appears to be working

- Event-specific, commercial-intent content is a stronger bet than generic advice.
- Comparison tables, checklists, and session decision tools reduce decision friction.
- Watchlist language fits observed behavior: 137 users have a watchlist and 227 items exist.
- Seasonal coverage should follow active US Open and imminent NFL demand; World Cup content should be maintained as reference.

## What cannot yet be concluded

- No page can be called the traffic leader or loser.
- No page can be called high-bounce or high-converting.
- Zero alerts is not proof of zero delivery because the alerts endpoint returns HTTP 500 and price history is stale.
- No editorial example should claim a current lowest price or current savings amount without a fresh, timestamped source.

## Action list

1. Add conversion events and UTM persistence across guide → compare → signup → watchlist.
2. Repair price-history freshness and `/api/admin/alerts` before publishing alert-led claims.
3. Put one primary CTA on the NFL, US Open, comparison, New York, and venue pages.
4. Launch the buyer cheat sheet and record landing-page view, form start, form success, delivery click, signup, and watchlist add.
5. Re-run the ranking after 28 days of page and event telemetry.

## Handoffs

### SEO Agent

Prioritize `US Open tickets 2026`, `US Open day vs night session`, `NFL tickets 2026`, `when to buy NFL tickets`, `Ticketmaster vs SeatGeek vs StubHub fees`, `concert ticket price tracker`, `when to buy concert tickets`, and `New York event tickets August 2026`.

### Email Agent

Use [the Aug 24 buyer cheat sheet](lead-magnet-ticket-buyers-cheat-sheet-2026-08-24.md). Send the asset immediately, then branch the Day 3/5 activation reminder based on whether `watchlist_added` exists. Suppress price-alert language until the platform can verify fresh data and delivery.

### Social Agent

Use [the Aug 24 social snippets](social-snippets-week-2026-08-24.md). All price examples are illustrative unless replaced with a fresh, timestamped comparison.
