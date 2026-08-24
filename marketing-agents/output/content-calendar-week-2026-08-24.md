# TicketScan Content Calendar — Week of 2026-08-24

**Prepared:** 2026-08-24  
**Planning window:** Monday Aug 24–Sunday Aug 30, 2026  
**Primary goal:** turn seasonal ticket research into completed comparisons and first watchlist adds.

## Planning basis

This plan uses the current site inventory, the Aug 17 content/performance reports, daily product audits through Aug 24, and live public checks. Search Console, GA4 page traffic, bounce rate, and page-level conversion exports are unavailable; demand rankings are therefore **opportunity hypotheses, not measured traffic rankings**.

The 2026 US Open is active Aug 23–Sep 13, with the main draw beginning Aug 30. NFL preseason is still producing immediate event inventory and the regular season is the next major buying window. The 2026 World Cup ended July 19 and should now be treated as an evergreen archive, not a current acquisition theme.

## Priority plan

| Priority | Day | Topic / working title | Format | Target keyword | Target page / section | Primary CTA |
|---|---|---|---|---|---|---|
| P0 | Mon Aug 24 | **US Open Tickets This Week: Day vs. Night Sessions, Grounds Passes, and What to Compare** | New blog guide / refresh existing US Open coverage | US Open tickets 2026; US Open day vs night session | `/blog`; link to `/tickets/new-york`, `/compare` | Compare a session |
| P0 | Tue Aug 25 | **NFL Tickets 2026: Compare Preseason Prices Before the Regular Season Starts** | Existing-page refresh + comparison module | NFL tickets 2026; when to buy NFL tickets | `/blog/nfl-ticket-buying-guide` | Watchlist a game |
| P1 | Wed Aug 26 | **The Ticket Buyer's Cheat Sheet: When to Buy by Event Type** | Lead magnet PDF + crawlable landing page | when to buy concert tickets; best time to buy sports tickets | New `/ticket-buyers-cheat-sheet` | Send me the cheat sheet |
| P1 | Thu Aug 27 | **Ticketmaster vs SeatGeek vs StubHub: How to Compare the Checkout Total** | Existing comparison refresh | Ticketmaster vs SeatGeek vs StubHub fees | `/blog/ticketmaster-vs-seatgeek-comparison`; `/compare` | Compare equivalent listings |
| P1 | Fri Aug 28 | **Late-Summer Concert Ticket Check: Set a Price Ceiling Before You Browse** | New practical blog post / checklist | concert ticket price tracker; concert price ceiling | `/blog`; link to tracker asset and `/watchlist` | Save the event |
| P2 | Sat Aug 29 | **New York Ticket Weekend: US Open, MSG, and Late-Summer Events** | City-page refresh + social carousel | New York tickets August 2026; NYC event tickets | `/tickets/new-york`; `/venues/msg-tickets-guide` | Search New York events |
| P2 | Sun Aug 30 | **Main Draw Buying Guide: Match Session, Seat Area, Total, and Time Checked** | Short update + social/email recap | US Open main draw tickets; US Open session tickets | US Open guide; `/compare` | Run a comparison |

## Refresh queue

1. **US Open / New York:** add an Aug 24 freshness note, session-type decision table, transport/accessibility links, and a comparison CTA. Use the official schedule and ticket pages as source links; do not publish live prices without a timestamp.
2. **NFL guide:** distinguish preseason from regular-season inventory, add “compare three sources” workflow, and replace unsupported savings claims with an all-in-total checklist.
3. **Ticketmaster / SeatGeek comparison:** expand the title and table to include StubHub; compare event, section, quantity, delivery, fee treatment, total, and timestamp.
4. **Best-time-to-buy-concert-tickets:** retain the article but date-stamp methodology, add event-type caveats, and make the tracker/watchlist CTA the next step.
5. **New York and MSG pages:** add one event-search module, one comparison CTA, and one lead-magnet CTA; remove duplicate generic copy.
6. **World Cup pages:** change “upcoming” language to completed/archive language, link to a post-tournament lessons article, and stop allocating weekly acquisition slots to them.

## Competitive content gaps to own

- **Comparable-price methodology:** SeatGeek emphasizes discovery, seat maps, Deal Score, and alerts; StubHub emphasizes marketplace breadth. TicketScan can own the independent checklist: same event, equivalent seat, same quantity, fee treatment, delivery, final total, and timestamp.
- **Decision support without a lowest-price promise:** explain when a lower headline listing is not a lower checkout total and when an apparent spread means the listings are not equivalent.
- **Session-level sports guidance:** current competitor pages answer “where to buy”; TicketScan should answer “which session fits the experience and budget?”
- **Activation content:** competitors lead buyers to checkout; TicketScan should lead them from guide → comparison → watchlist → target price.
- **Transparent freshness:** every example should show source and checked-at time. This is especially important while TicketScan’s price-history data remains stale.

## Weekly mix

- 2 new editorial assets: US Open session guide and price-ceiling concert post.
- 3 high-intent refreshes: NFL, three-way marketplace comparison, and New York/MSG.
- 1 lead magnet plus landing-page copy and delivery sequence.
- 7–10 social derivatives: session choice, fee reality, price ceiling, equivalent-seat comparison, and archive lesson.
- 1 email delivery campaign for the cheat sheet, with a watchlist-activation branch.

## Measurement gates

Before calling any item a winner, instrument and report `page_view`, `compare_started`, `price_comparison_completed`, `signup_completed`, `watchlist_added`, `target_price_set`, `newsletter_submitted`, and `outbound_ticket_click`, with page and UTM fields. Do not use “live price drop” or “guaranteed alert” as a headline claim until price history and `/api/admin/alerts` are healthy.

## Sources checked

- [Official US Open tournament schedule](https://www.usopen.org/en_US/about/eventschedule.html)
- [SeatGeek US Open ticket page](https://seatgeek.com/us-open-tennis-tickets)
- [SeatGeek NFL ticket page](https://seatgeek.com/nfl-tickets)
- [StubHub NFL ticket page](https://www.stubhub.com/nfl-tickets/grouping/126/)
- Local evidence: [Aug 17 calendar](content-calendar-week-2026-08-17.md), [Aug 17 performance report](content-performance-week-2026-08-17.md), and [Aug 24 CRO audit](cro-daily-2026-08-24.md)
