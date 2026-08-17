# Paid Ads Weekly Report — Week of 2026-08-17

**Prepared:** 2026-08-17  
**Platforms:** Google Search + Display, Meta (Facebook + Instagram)  
**Status:** Launch-ready planning package; no external campaign was launched because ad-account access and conversion reporting are not connected to this workspace.

## Summary

Google Ads and Meta Ads exports/API data were unavailable. Spend, impressions, clicks, CTR, conversions, CPA, ROAS, campaign ranking, Quality Score, and Meta relevance data are **unmeasured—not zero**. The product data below is directional and cannot be attributed to paid media.

| Metric | This Week | Last Week | Change |
|---|---:|---:|---:|
| Total Spend | N/A | N/A | N/A |
| Impressions | N/A | N/A | N/A |
| Clicks | N/A | N/A | N/A |
| CTR | N/A | N/A | N/A |
| Conversions | N/A | N/A | N/A |
| CPA | N/A | N/A | N/A |
| ROAS | N/A | N/A | N/A |

### By platform

| Platform | Spend | Conversions | CPA | Decision |
|---|---:|---:|---:|---|
| Google Search | N/A | N/A | N/A | Hold until tracking and read access are verified |
| Google Display | N/A | N/A | N/A | Defer; establish Search baseline first |
| Meta | N/A | N/A | N/A | Hold until Pixel/CAPI and consent checks pass |

### Product signals available

- Latest analytics report: **212 registered users**, **209 watchlist rows**, and **124 users with a watchlist**.
- The latest seven-day signup cohort contains **12 signups**, with **5 activation-proxy users** and **7 unactivated users**.
- Active newsletter subscribers: **4**; all-time verified price alerts: **0**.
- Price history is stale after **2026-07-24 20:01 UTC**; `/api/admin/alerts` remains unhealthy.
- Named signup, comparison, watchlist, newsletter, and UTM events are not verified in the frontend/admin reporting.

## Key insights

1. **Measurement is the gating issue.** No paid winner, loser, CPA, ROAS, or budget pacing decision is defensible without platform exports and product-event attribution.
2. **Comparison intent is the safest acquisition angle.** It maps directly to TicketScan’s differentiation and does not require a claim that TicketScan is always cheapest.
3. **Activation is the immediate funnel opportunity.** Seven of the latest twelve signups lack a watchlist item; post-signup onboarding should be fixed before scaling traffic.
4. **Alert messaging is not launch-safe yet.** Stale price history, zero target-price coverage, and the broken alerts endpoint make “live price drop” and “guaranteed alert” claims premature.

## Budget recommendation

Keep new spend on hold until the release gate below passes. Then run a controlled 7-day test:

- Google Search: **$20/day** using comparison-intent terms.
- Meta retargeting: **$10/day maximum**, only if the audience, consent, Pixel/CAPI, and audience-size checks pass.
- Google Display: **$0/day** until Search establishes a conversion baseline.

Operating guardrails: primary conversion `price_comparison_completed`; secondary conversions `signup_completed` and `watchlist_added`; working target CPA **≤ $8 per completed comparison**; review/pause at **>$16 for three consecutive days after at least 30 clicks**; scale by no more than 20% per day after 10+ primary conversions and stable tracking. ROAS remains N/A until an attributed revenue event exists.

## New campaign / significant test

**Campaign:** `Search-Compare-Before-Buy-US-2026-08`  
**Launch status:** Not externally launched; launch-ready draft in [`ads-creative-batch-2026-08-17.md`](ads-creative-batch-2026-08-17.md).

**Hypothesis:** Users searching for event tickets will respond better to neutral, side-by-side comparison than generic “cheap tickets” messaging, producing more completed comparisons and stronger signup-to-watchlist activation.

**Audience and keywords:** US high-intent searches including `[artist] tickets`, `[team] tickets`, `[venue] tickets`, `compare ticket prices`, `ticket price comparison`, and `Ticketmaster SeatGeek StubHub comparison`. Exclude existing converters from acquisition. Do not add competitor-brand bidding until the brand-search report confirms policy, volume, and economics.

**Landing page:** `/compare`, with event/query prefill where supported. Required QA: anonymous mobile comparison, one above-fold CTA, equivalent-listing explanation, and UTM persistence through signup.

**Budget and duration:** $20/day for 7 days after the release gate passes.

**Success criteria:** 10+ completed comparisons, CPA ≤ $8, comparison completion rate ≥ 8% of qualified sessions, no event/UTM discrepancy, and signup-to-watchlist activation ≥ 85% among attributed signups. These are operating thresholds, not historical results.

## Creative refresh

The companion batch contains 10 variations:

- 5 Google Search angle sets: price context, speed, trust, urgency without FOMO, and feature utility.
- 3 Meta primary-text/headline combinations.
- 2 Display/social image concepts with copy and visual direction.

Testing protocol: retain a control, change one variable per cell, use `utm_content` for variant identity, and evaluate only after at least 3 days or 100 clicks. Alert copy is marked gated; World Cup copy is retained only as a planning/SEO test because the tournament ended July 19, 2026.

## Competitive ad intelligence

The [Google Ads Transparency Center](https://adstransparency.google.com/?hl=en&region=anywhere) was checked as the authoritative lookup point, but the workspace does not provide a reliable advertiser-level export for SeatGeek, StubHub, Vivid Seats, or TicketScan. Therefore, active ad counts, exact offers, landing pages, and TicketScan brand bidding are **not verified**. The Center is an ad archive, not a source for competitor spend, CTR, or conversion data.

Observed public positioning to counter:

- **SeatGeek:** marketplace discovery, buyer protection, event inventory, and in-market price context. Counter with a neutral cross-market comparison: same event, equivalent seat, same quantity, total price, timestamp.
- **StubHub:** trust and marketplace scale remain core category angles. The FTC announced a 2026 settlement requiring $10 million in refunds over deceptive ticket-price disclosure; use this only as a factual transparency context, never as an unsupported attack. [FTC announcement](https://www.ftc.gov/news-events/news/press-releases/2026/04/stubhub-refunding-10-million-fees-consumers-after-deceptive-ticket-pricing).
- **Vivid Seats:** broad inventory, rewards, buyer protection, and value positioning. Counter with independent comparison methodology rather than a lowest-price claim.

**Gap to own:** “Same event. Equivalent inventory. Final total. Checked at a timestamp.”

## Landing-page performance handoff → CRO Agent

Paid landing-page sessions and conversion rates are N/A. Prioritize `/compare`:

1. Verify anonymous mobile comparison works without a login wall.
2. Add one above-fold comparison CTA and visible event/query context.
3. Persist first-touch and last-touch `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, and `utm_term`.
4. Instrument `page_view`, `compare_started`, `price_comparison_completed`, `signup_completed`, `watchlist_added`, `newsletter_submitted`, and `alert_target_set`.
5. Keep price-alert claims out of acquisition until freshness and delivery are repaired.

## Organic posts to boost after QA → Social Agent

Editorial candidates from [`social-weekly-2026-08-17.md`](social-weekly-2026-08-17.md), not verified paid winners:

1. Fee-check post: headline price versus final total.
2. Price-ceiling post: choose a maximum before browsing.
3. Same-seat comparison carousel: event, seat, total, and timestamp.

Boost only after publication status, post ID, UTM routing, and `/compare` conversion events are confirmed.

## Conversion data handoff → Analytics Agent

Request one row per platform/campaign/ad group or ad set/creative/day with spend, impressions, clicks, CTR, CPC, primary and secondary conversions, CPA, attributed revenue, ROAS, search terms, Quality Score or relevance, landing page, and UTM values. Join against the named product events above. Current user/watchlist totals are product snapshots, not paid conversions.

## Release gate

1. Connect Google Ads and Meta read/reporting access or provide exports for 2026-08-10–2026-08-17.
2. Repair event instrumentation and UTM persistence; validate one end-to-end test conversion.
3. Repair price-history freshness and `/api/admin/alerts`.
4. Confirm `/compare` anonymous flow and canonical landing-page URL.
5. Launch Search test; do not activate Display or alert-led creative before these checks pass.
