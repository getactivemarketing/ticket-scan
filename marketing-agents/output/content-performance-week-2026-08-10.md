# TicketScan Content Performance — Week of 2026-08-10

## Measurement status

No GA4, Search Console, pageview, bounce-rate, or page-level conversion export was available in the workspace. The latest tracking validation explicitly marks traffic, bounce rate, and named signup/watchlist/compare events as unavailable or unverified. Therefore, a numeric top-five/bottom-five ranking would be fabricated.

This report separates **observed product evidence** from **content hypotheses** and gives the measurement work needed before next Monday.

## Observed funnel evidence

| Signal | Latest internal snapshot | Interpretation |
|---|---:|---|
| Registered users | 200 | Audience exists; no acquisition-source split available |
| Watchlist rows | 203 | Tracking has adoption, but row-level quality is unknown |
| Users with a watchlist | 117 of 198 in the latest complete segmentation | About 59.1% activated; the remaining users are an activation opportunity, not proven churn |
| Watchlist rows with target price | 0 | The alert value loop is currently not realized |
| Freshest price-history row | 2026-07-24 20:01:07 UTC | Price-history content claims need a freshness caveat until tracking is repaired |
| Signup/watchlist/compare analytics events | Unverified | Cannot calculate content-assisted conversion |

Source files: `marketing-agents/output/growth-weekly-2026-08-07.md` and `marketing-agents/output/tracking-validation-2026-08-10.md`.

## Provisional top five content bets

These are not traffic rankings. They are the five assets most likely to earn or convert intent this week based on freshness, seasonality, and product fit.

| Rank | Asset | Why it is a strong bet | Conversion test |
|---|---|---|---|
| 1 | US Open 2026 ticket guide | Event begins Aug 23 and has clear date/session intent | Compare click → watchlist add |
| 2 | NFL ticket-buying guide | Preseason and season-planning intent is timely | Guide CTA → target price set |
| 3 | Ticketmaster vs SeatGeek vs StubHub comparison | Direct commercial comparison intent | Article → `/compare` |
| 4 | New York / MSG guide refresh | Supports US Open and year-round NYC event demand | City page → event search |
| 5 | Concert price tracker lead magnet | Captures buyers before they are ready to purchase | Submit → download → account activation |

## Provisional bottom-five attention list

These are pages needing attention based on staleness, unclear current relevance, or missing conversion instrumentation—not measured low-traffic pages.

| Asset | Risk | Action this week | Keep / merge / retire |
|---|---|---|---|
| World Cup 2026 landing pages | Tournament dates have passed; old “upcoming” framing can damage trust | Add post-event status, archive guidance, and links to evergreen comparison content | Keep as evergreen reference; no new expansion |
| `best-time-to-buy-concert-tickets` | Published Jan 2; likely needs current methodology and caveats | Add observed-data date, all-in-price explanation, and tracker CTA | Keep and refresh |
| `ticketmaster-vs-seatgeek-comparison` | Two-platform framing misses StubHub and fee transparency | Make it a three-way comparison with timestamped methodology | Keep and refresh |
| `nfl-ticket-buying-guide` | Seasonal page is valuable but needs 2026 freshness | Update season timing and target-price flow | Keep and refresh |
| Broad venue/city pages without a CTA event | Potentially useful SEO entry points but conversion path is unclear | Add one comparison module, one watchlist module, and event examples only when current | Keep; consolidate only after analytics |

## Content hypotheses to validate

- Practical comparison content should outperform generic advice on downstream `compare_view` because it matches purchase intent.
- Seasonal event guides should earn higher qualified engagement than expired World Cup acquisition pages in August.
- The tracker lead magnet may improve newsletter conversion, but the current event instrumentation cannot prove lift.
- Pages with traffic but zero conversions cannot be identified until GA4/Search Console plus typed conversion events are connected.

## Required measurement fixes

1. Add typed events for `signup_complete`, `newsletter_subscribe`, `compare_view`, `watchlist_add`, `target_price_set`, and `outbound_ticket_click`.
2. Capture landing page and first-touch/last-touch UTM fields.
3. Export weekly page-level sessions, engaged sessions, landing-page conversion rate, and assisted conversions.
4. Repair price-tracker freshness and alert reporting before publishing new numerical price-history claims.
5. Use a 28-day baseline and compare refreshes against the preceding 28 days, not week-over-week noise.

## Action list by owner

- **Content:** ship the US Open guide, refresh NFL/comparison/New York pages, and add the tracker CTA.
- **SEO:** validate query impressions/clicks and canonical URLs for the seven keyword opportunities in the calendar.
- **CRO/engineering:** instrument the funnel and require or strongly prompt for a target price during watchlist setup.
- **Email:** deliver the tracker and branch users who download but do not create a watchlist.
- **Social:** promote the US Open guide, tracker, and “all-in price” explanation with no unsupported savings numbers.

