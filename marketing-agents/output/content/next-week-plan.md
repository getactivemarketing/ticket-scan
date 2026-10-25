# TicketScan Content Plan — Week of October 26–November 1, 2026

## Sunday audit — October 25

### What shipped or queued this week

- **Oct. 19:** October concert-buying guide. Useful general advice around event identity, onsale timing, seller links, delivery, and checkout; no defensible page-level performance data is available.
- **Oct. 20:** Low-ticket warning-label guide. Strong consumer-protection format: it explains that scarcity language is not proof of a sale or a good ticket and tells readers to verify the exact listing.
- **Oct. 21:** Calvin Harris 2027 presale-to-onsale guide. Timely and practical, with local-time, ticket-limit, official-link, and checkout checks.
- **Oct. 22:** Zach Bryan 2027 tour guide. Good official-source treatment of artist/local/public onsale windows and the difference between registration and a guaranteed ticket.
- **Oct. 23–24:** Social posts and venue refresh proposals continued the supported product lane: event discovery, onsale information, venue maps, delivery, and all-in totals. No `web/src/` files were changed.

### What worked

- The clearest editorial pattern remains one concrete ticketing problem followed by a short verification checklist.
- Event-specific official sources make timely posts defensible without relying on unavailable TicketScan price data.
- The strongest consumer-advocate framing is still: verify the event, compare like-for-like listings, read delivery and buyer-protection terms, and expand the final checkout total.
- Timely coverage works best when the CTA is to find the event, check onsale details, or read the venue guide—not to set an alert or wait for a price signal.

### What did not work or remains unmeasured

- Pageviews, search queries, seller outbound clicks, newsletter conversions, and page-level saves are still not queryable. Do not label any page a top or bottom performer.
- This week’s analytics snapshot recorded 1 new signup, 0 saved-event rows, and 0 newsletter subscriptions. Those are database counts, not a diagnosis of page performance.
- Drip sends and email engagement remain unrecorded. Keep alert-, price-history-, and data-backed timing emails paused.
- Legacy indexed copy still contains retired price-tracking, price-alert, and buy/wait claims. Do not promote those pages until refreshed.

## Recommended production slate

| Priority | Day | Working title | Format | Primary keyword | Target page or section | CTA |
|---:|---|---|---|---|---|---|
| P0 | Mon 10/26 | **World Series Game 3 Tickets: Verify the Matchup, Venue, and Listing** | Timely guide | `World Series Game 3 tickets 2026` | New blog; link to MLB postseason and Brewers/Rays event pages | Check the exact game and seller terms |
| P1 | Tue 10/27 | **How to Compare Ticket Fees at Checkout** | Evergreen consumer guide | `how to compare ticket fees` | New blog; link to FAQ, venue guides, and event discovery | Review the final all-in total before paying |
| P1 | Wed 10/28 | **Phoebe Bridgers Tickets at Chase Center: Venue, Entry, and Listing Checklist** | Timely venue/event guide | `Phoebe Bridgers Chase Center tickets 2026` | New blog or event-guide module; link to Chase Center guide | Check the event details and venue map |
| P0 | Thu 10/29 | **USMNT vs. Jamaica Tickets: December 13 Match Guide** | Timely sports guide | `USMNT Jamaica tickets 2026` | New blog; link to U.S. Soccer match hub and Fort Lauderdale venue page | Check the official match page and onsale details |

## Editorial briefs and guardrails

### Monday — World Series Game 3

MLB lists Brewers at Rays for Monday, October 26 at 8 p.m. ET after the World Series off-day. Explain how to distinguish a confirmed Game 3 listing from a generic World Series page or a conditional listing. Cover matchup, game number, venue, start time, delivery timing, postponed/canceled-event terms, and seller identity. Do not quote TicketScan price data or tell readers to buy or wait based on price movement.

### Tuesday — ticket fees

Build a durable worksheet for comparing the same event, date, section, quantity, delivery method, and buyer-protection terms across seller pages. Explain ticket amount, mandatory fees, taxes, delivery, order-level charges, and the final total. Attribute current fee-display behavior to the seller's own documentation and add a note that terms can change. TicketScan can send readers to event and seller destinations; it cannot claim a live cross-platform price comparison right now.

### Wednesday — Phoebe Bridgers at Chase Center

Use the venue's official calendar, which lists Phoebe Bridgers for October 27 at 7:30 p.m. Focus on confirming the artist/date/venue, reading the event-specific map, checking entry and transit guidance, and distinguishing a standard ticket from resale, VIP, or non-admission listings. Treat the venue's official event page as the source of truth for timing and access.

### Thursday — USMNT vs. Jamaica

U.S. Soccer lists the match for Sunday, December 13, 2026, at Inter Miami CF Stadium in Fort Lauderdale, with public tickets on sale from October 23. Cover the official match hub, event identity, venue, ticket limit or access language when shown, delivery, and final checkout terms. Do not imply that TicketScan has live inventory, price tracking, or an alert for this match.

## Handoffs

- **SEO:** prioritize `World Series Game 3 tickets 2026`, `how to compare ticket fees`, `Phoebe Bridgers Chase Center tickets 2026`, and `USMNT Jamaica tickets 2026`. Keep supporting terms focused on venue, onsale, presale, delivery, and seating information.
- **Social:** turn the World Series off-day into a game-number verification post; use the Doja Cat/Chase Center hook today and the USMNT match page next week. Every product CTA should point to event discovery, onsale details, or venue guidance.
- **Email:** package the fee-comparison article as a short “before you pay” checklist only after sender health and event telemetry are verified. Do not revive alert-focused drip copy.
- **Analytics/CRO:** instrument `event_viewed`, `event_search`, `saved_event_success`, `newsletter_signup`, `lead_magnet_download`, and `outbound_ticket_click`, with page path and UTM fields, before making content-performance claims.

## Sources checked

- [MLB 2026 postseason schedule](https://www.mlb.com/news/2026-mlb-playoff-and-world-series-schedule)
- [Chase Center events](https://www.chasecenter.com/events/)
- [Phoebe Bridgers at Chase Center](https://www.chasecenter.com/news/phoebe-bridgers-announcement-20261027/)
- [U.S. Soccer USMNT vs. Jamaica announcement](https://www.ussoccer.com/stories/2026/10/usmnt/december-match-vs-jamaica-inter-miami-stadium-florida)
- [U.S. Soccer match hub](https://www.ussoccer.com/competitions/usmnt-matches-2026/matches/united-states-vs-jamaica-tickets-live-score-match-hub-lineups-highlights)
- [SeatGeek buyer help](https://support.seatgeek.com/hc/en-us/articles/360037250494-How-do-I-buy-tickets-on-SeatGeek)
- [StubHub fee-inclusive browsing help](https://support.stubhub.com/articles/61000276832-how-to-include-fees-when-browsing-for-tickets)

## Copy-review status

- Reviewed the week’s four content drafts and recent social summaries against `PRODUCT-STATUS.md`; the current drafts stay within event-discovery, onsale, venue, delivery, and checkout guidance.
- No new blog draft was created on Sunday.
- No files under `web/src/` were changed.
- Legacy price-feature pages remain a cleanup priority and should not be promoted.
