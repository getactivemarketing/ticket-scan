# Content Performance Analysis — Week of 2026-10-26

## Executive finding

A defensible top-five or bottom-five ranking cannot be produced this week. The latest tracking validation (`marketing-agents/output/analytics/tracking-validation-2026-10-26.md`) confirms that GTM loads, but the frontend does not emit identifiable signup, watchlist-add, comparison, or newsletter conversion events. UTM capture is also absent. No page-level traffic, sessions, bounce rate, or conversion export was available in the repository for this run.

The lists below are therefore prioritized audit candidates, not claimed traffic rankings.

## What is verified

- GTM is present on sampled homepage, dashboard, compare, register, and watchlist pages.
- Conversion events are not currently verifiable.
- `/api/admin/alerts` is failing.
- Admin stats are reachable: 268 users, 257 watchlist items, and 7 active subscribers were reported in the 2026-10-26 validation. These are platform counts, not page-level attribution and not evidence of price tracking.
- The newest price-history record is stale at July 24, 2026; no public content should reference TicketScan price history or alerts.

## Top five content candidates to protect and improve

| Candidate | Why it is prioritized | Evidence status | Action this week |
|---|---|---|---|
| Venue guides, especially major stadiums and arenas | Match high-intent venue searches with verified sections, capacity, FAQs, and live events | Structural/product fit; traffic unverified | Refresh section/arrival details and add checklist CTA. |
| World Cup stadium pages | Time-sensitive long-lead topic with 16 verified host venues and 104 matches | Official FIFA facts; page traffic unverified | Refresh one stadium page with sourced practical guidance. |
| Concert presale guide | Directly supports onsale/presale intent and recurring social topics | Existing page confirmed in `web/src/data/blog.ts`; traffic unverified | Add local-time, ticket-limit, delivery, and final-total checklist. |
| Ticket-buying mistakes / scam guidance | Evergreen safety and checkout intent | Existing pages confirmed; traffic/conversion unverified | Use the new lead magnet as the primary CTA. |
| NFL/NHL buying guides | Seasonal demand in late October and early November | Existing blog titles confirmed; traffic unverified | Add verified schedule/venue context and remove unsupported price-timing copy. |

## Bottom-five attention candidates

| Candidate | Risk | Action |
|---|---|---|
| Any page with “cheap,” “best time,” or savings claims | May imply unavailable TicketScan price intelligence or go stale quickly | Audit title, H1, metadata, body, CTA, and social excerpts. |
| World Cup pages with price-led language | Product-status conflict and fast-changing external market data | Reframe around venue, schedule, seating, arrival, and seller-term checks. |
| Venue pages with thin/no current event inventory | Users may see a polished guide but no actionable event | Show honest empty states and link to broader city/category discovery. |
| Blog posts with generic or duplicated intros | Scaled-content risk and weak differentiation | Add verified page-specific facts, venue details, and a useful checklist. |
| Any conversion landing without a measurable CTA | Cannot learn whether content creates signups | Instrument newsletter/signup/watchlist events before ranking variants. |

## Specific refresh queue

1. `/blog/ticket-buying-mistakes-to-avoid` — make it the checklist landing page.
2. `/blog/concert-presale-codes-guide` — add local-time and delivery preparation.
3. `/blog/avoid-ticket-scams` — add official-domain, payment, and buyer-protection checks.
4. `/blog/nfl-ticket-buying-guide` — remove any unsupported price-timing language; add current-season schedule context.
5. `/blog/nhl-hockey-ticket-guide` — add arena/section and event-date guidance.
6. One World Cup stadium page — add practical, venue-specific information sourced from the existing data and FIFA.

## Measurement work required before next ranking

- Emit stable events after successful `signup`, `watchlist_add`, `comparison_run`, and `newsletter_subscribe` responses.
- Persist first-touch and latest-touch UTM values in consent-appropriate storage.
- Export page-level sessions, engaged sessions/bounce, CTA clicks, and conversions by URL.
- Fix `/api/admin/alerts` and validate admin metrics.
- Separate “watchlist item” from any claim that an event is being price-tracked.

## Bottom line

This week’s content decision should be based on intent and factual coverage, not an invented traffic leaderboard. Protect the venue and seasonal discovery surfaces, build the checkout checklist, and instrument the funnel so next week’s report can actually answer the requested top/bottom questions.
