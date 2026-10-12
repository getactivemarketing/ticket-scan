# TicketScan Content Calendar — Week of October 12–18, 2026

**Owner:** Agent 1, Content Strategist  
**Planning date:** October 12, 2026  
**Primary goal:** Capture fall event-discovery intent and turn it into event searches, newsletter signups, and useful watchlist saves.

## Measurement note

The current admin surface reports totals but not pageviews, traffic sources, bounce rate, or conversion events. This calendar is therefore based on verified seasonality, current event calendars, existing-site gaps, and competitor coverage—not measured search or conversion performance. Engineering should instrument page view, search, watchlist save, newsletter signup, and outbound-ticket-click events before the next performance review.

## Priority plan

| Priority | Day | Topic / working title | Format | Target keyword | Target page or section | CTA |
|---:|---|---|---|---|---|---|
| 1 | Mon 10/12 | **2026 MLB Playoff Tickets: Dates, Venues, and How to Buy Safely** | Timely guide | `2026 MLB playoff tickets` | New blog post; link to MLB team and venue pages | Search a playoff event |
| 2 | Tue 10/13 | **NBA Opening Week Tickets: What to Check Before You Buy** | Buying guide | `NBA opening week tickets 2026` | New blog post; link to NBA team venues | Find an NBA event |
| 3 | Wed 10/14 | **The Ticket Buyer’s Cheat Sheet: 5 Checks Before Checkout** | Lead magnet + checklist post | `ticket buying checklist` | Blog CTA, newsletter landing page, popup | Download the checklist |
| 4 | Thu 10/15 | **NHL Tickets 2026–27: Presales, Venue Sections, and Mobile Entry** | FAQ / seasonal refresh | `NHL tickets 2026 2027` | Refresh NHL guide; link to arena guides | Search a hockey event |
| 5 | Fri 10/16 | **Halloween Events: A City-by-City Ticket Buying Checklist** | Local-intent roundup template | `Halloween events [city] 2026` | City pages and blog; only include verified events | Browse events in your city |
| 6 | Sat 10/17 | **NFL Week 7 Venue Guide Sprint** | Two venue-page refreshes | `[team] tickets 2026` | Two verified NFL stadium pages with upcoming schedules | View venue guide / search event |
| 7 | Sun 10/18 | **Presale and Onsale Explainer: What the Labels Actually Mean** | Evergreen explainer + social package | `presale vs onsale tickets` | Blog; link from event and category pages | Join the newsletter |

## Refresh queue

1. **`web/src/data/blog.ts`:** audit and rewrite the older posts that claim TicketScan has live price history, alerts, tracked lows, or buy/wait calls. The product-status file makes those claims unsafe.
2. **World Cup posts and hub:** convert active-event language to an archival guide. The tournament ended July 19, 2026; remove future/active inventory language and retain only sourced venue and buyer lessons.
3. **`ticketmaster-vs-seatgeek-comparison`:** remove unsupported price tables and add a neutral “what to compare” table: seat location, all-in total, delivery, refund terms, and seller identity. Do not imply TicketScan currently returns working cross-market prices.
4. **NHL guide:** update the season label, mobile-entry advice, arena links, and current onsale/presale terminology.
5. **Two NFL venue pages:** select only pages with verified upcoming events in the feed; add seating sections, capacity source, transit/parking, and a current event link.

## Competitor gap and editorial edge

SeatGeek has strong single-artist presale guides, fee explainers, and “when to buy” content. StubHub and marketplace pages are strong at inventory capture. TicketScan should avoid repeating generic “cheapest ticket” promises and own a more useful neutral layer:

- a same-event checklist for comparing official and resale listings;
- venue-specific seating and entry guidance backed by first-party venue data;
- onsale/presale dates with a source and last-checked date;
- city pages that explain where to start, without inventing availability or prices;
- a clear distinction between event discovery, a saved watchlist item, and live price data.

## Weekly mix

| Format | Count | Purpose |
|---|---:|---|
| New guides / explainers | 4 | Capture timely sports and ticket-buying questions |
| Lead magnet | 1 | Give newsletter visitors a practical download |
| Page refreshes | 2–4 | Remove stale claims and add verified venue/event facts |
| Social packages | 1 package | Repurpose the checklist and playoff guide |

## Handoffs

- **SEO:** use `keyword-opportunities-week-2026-10-12.md`; prioritize pages with a verified event or venue data source.
- **Email:** deliver `lead-magnet-ticket-buyers-checklist-2026-10-12.md`; replace old drip copy that promotes price alerts.
- **Social:** use `social-snippets-week-2026-10-12.md`; do not add price statistics or claims about TicketScan tracking.

## Sources checked

- [MLB 2026 postseason schedule](https://www.mlb.com/news/2026-mlb-playoff-and-world-series-schedule)
- [SeatGeek sports tickets](https://seatgeek.com/sports-tickets)
- [SeatGeek ticket-buying guides](https://seatgeek.com/blog/how-to-avoid-hidden-fees-when-buying-concert-tickets)
- [SeatGeek presale guides](https://seatgeek.com/blog/noah-kahan-presale-and-onsale-guide-maximize-your-chances-for-the-great-divide-tour-tickets)
- [Ticketmaster sports discovery](https://www.ticketmaster.com/discover/sports)
- [NHL tickets](https://www.nhl.com/tickets/)

