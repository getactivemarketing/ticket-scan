# TicketScan Content Performance — Week of 2026-08-17

## Measurement status

No GA4, Search Console, pageview, bounce-rate, page-level conversion, or email-engagement export is available in the workspace. A numeric top-five/bottom-five ranking would therefore be fabricated. The lists below distinguish verified product proxies from editorial hypotheses.

## Verified product and audience signals

| Signal | Latest available evidence | Content implication |
|---|---:|---|
| Registered users | 216 on Aug 16 daily snapshot; 212 in Aug 14 weekly snapshot | Acquisition exists; focus on activation |
| Active watchlist items | 215 on Aug 16 | Watchlist is the strongest available content-adjacent product signal |
| Recent signup volume | 2 on Aug 16; 7-day average 1.86 | Signup demand is roughly stable |
| Watchlist adds | 1 on Aug 16; 7-day average 1.29, down 22% vs average | Improve post-signup and content CTAs |
| Newsletter subscribers | 4 active | Lead-magnet delivery needs a measurable test |
| Target-price coverage | 0 watchlist items | Price-alert promise is not yet realized |
| Price-history freshness | Latest row Jul 24, 2026 20:01 UTC | Avoid fresh price claims until tracker is repaired |
| Repeated watchlist clusters | Noah Kahan, Harry Styles, Flyleaf, Ariana Grande, Philadelphia 76ers | Use as demand-informed topics, not traffic winners |

## Provisional top five content bets

These are not traffic rankings. They are the five assets most likely to earn qualified attention or conversion this week.

| Rank | Asset | Evidence / rationale | Next measurement |
|---|---|---|---|
| 1 | 2026 US Open ticket guide | Official event begins Aug 23; immediate session intent | Organic impressions, compare clicks, watchlist adds |
| 2 | NFL ticket guide refresh | 2026 regular season begins Sep 9; strong seasonal intent | Guide CTA clicks and target-price setup |
| 3 | Ticketmaster vs SeatGeek vs StubHub comparison | Direct commercial comparison matches the core product | `compare_view` and outbound ticket click |
| 4 | New York / MSG refresh | Supports US Open plus Harry Styles and Citi Field demand signals | City-page landing sessions and event searches |
| 5 | Overpay checklist lead magnet | Converts active buyers before purchase and fills the weak newsletter funnel | Form completion, download, signup, watchlist add |

## Provisional bottom five / attention list

| Asset | Why it needs attention | Action this week | Decision |
|---|---|---|---|
| World Cup 2026 landing pages | Tournament window has passed; “upcoming” framing is stale | Add archive/status language, recap links, and evergreen buying lessons | Keep as reference; stop expansion |
| `best-time-to-buy-concert-tickets` | Published Jan 2 and contains broad timing claims without visible current methodology | Add evidence date, event-type caveats, and tracker CTA | Keep and refresh |
| `ticketmaster-vs-seatgeek-comparison` | Current title omits StubHub and does not center all-in checkout totals | Expand to three sources; timestamp examples | Keep and refresh |
| `nfl-ticket-buying-guide` | High seasonal value but requires 2026 freshness and activation path | Update kickoff timing, examples, and watchlist CTA | Keep and refresh |
| Broad venue/city pages without event CTA | Conversion risk is plausible but traffic/bounce is unmeasured | Add one compare module and one watchlist CTA; avoid duplicate copy | Keep; measure before merging/killing |

## What appears to be working

- **Topic:** event-specific and commercial content is a better hypothesis than generic ticket advice because it maps to an identifiable event and next action.
- **Format:** comparison tables and checklists should reduce decision friction more effectively than long, undifferentiated guides.
- **Product fit:** watchlist language is supported by 215 active watchlist items, but target-price behavior is absent, so the alert loop needs product and analytics repair.
- **Seasonality:** US Open and NFL coverage have a near-term reason to exist; World Cup acquisition content no longer does.

## What cannot yet be concluded

- No page can be called the traffic leader or loser.
- No page can be called high-bounce or high-converting.
- No channel can be named the acquisition winner.
- Zero reported alerts is not proof of zero delivery: the alerts endpoint is failing and the tracker is stale.
- Existing price-history claims should not be republished as current until a fresh row is verified.

## Action list for underperformer and measurement recovery

1. Add `page_view`, `signup_complete`, `newsletter_subscribe`, `compare_view`, `watchlist_add`, `target_price_set`, and `outbound_ticket_click` events.
2. Persist first-touch and last-touch UTM values plus landing page.
3. Repair the four-hour price tracker and `/api/admin/alerts`; verify with a fresh `price_history` row.
4. Add one consistent CTA block to the NFL, comparison, New York, and venue pages.
5. Reclassify World Cup pages as evergreen archive pages and update title/intro copy.
6. Run a 28-day baseline after instrumentation; rank pages by sessions, engaged sessions, assisted conversions, and direct conversion rate.

## Handoffs

### SEO Agent

- `2026 US Open tickets` → `/blog/us-open-2026-tickets-guide`
- `US Open tickets New York` → `/tickets/new-york`
- `when to buy NFL tickets 2026` → existing NFL guide
- `Ticketmaster vs SeatGeek vs StubHub fees` → existing comparison post
- `concert ticket price tracker` → tracker landing page
- `signs you are overpaying for tickets` → `/ticket-overpay-checklist`
- `how to set a ticket price alert` → `/how-it-works`

### Email Agent

Use [the overpay checklist lead magnet](lead-magnet-ticket-overpay-checklist-2026-08-17.md). Deliver immediately, then branch Day 5 activation messaging based on whether the user created a watchlist. Suppress the reminder when `target_price_set` is present.

### Social Agent

- “The US Open starts Aug 23: compare the same session and seat area before buying.”
- “NFL kickoff is Sep 9. Set a ceiling before the urgency starts.”
- “Five overpay warning signs: urgency, mismatched seats, unclear fees, one-site shopping, and no target price.”
- “TicketScan watchlists show repeated interest in Noah Kahan, Harry Styles, Flyleaf, Ariana Grande, and 76ers games—compare before checkout.”

## Bottom line

TicketScan has enough product demand to justify targeted event content, but not enough instrumentation to report content performance honestly. This week’s highest-value work is a US Open/NFL seasonal push, a three-way comparison refresh, the overpay checklist, and measurement repair so next Monday’s report can contain actual page rankings.
