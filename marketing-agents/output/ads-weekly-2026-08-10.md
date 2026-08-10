# Paid Ads Weekly Report — Week of 2026-08-10

**Prepared:** 2026-08-10  
**Platforms:** Google Search/Display and Meta  
**Status:** Planning and launch-readiness report. No ad-platform account export or write access is connected.

## Summary

Paid performance cannot be calculated this week. Missing account access is **not equivalent to $0 spend**. Google Ads and Meta spend, impressions, clicks, CTR, conversions, CPA, ROAS, campaign names, quality scores, and landing-page attribution were not available in the workspace.

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
| Google Search | N/A | N/A | N/A | Connect reporting and conversion imports before launch |
| Google Display | N/A | N/A | N/A | Defer until Search conversion baseline exists |
| Meta | N/A | N/A | N/A | Connect Ads Manager and pixel/CAPI reporting before launch |

### Product and marketing signals available

- Latest analytics snapshot: **204 registered users**, **206 watchlist rows**, **4 active newsletter subscribers**.
- Latest complete day: **2 signups** and **2 watchlist adds**; source attribution is unavailable.
- Price history is stale after **2026-07-24** and `/api/admin/alerts` is failing. Do not advertise live price drops, guaranteed alerts, or current savings.
- GTM is present, but named signup, watchlist, comparison, newsletter, and UTM events were not verified in `web/src`.
- Social reporting has no connected platform export. Editorial proxies favor fee-check, price-ceiling, and same-seat comparison posts; these are not paid performance winners.

## Key insights

1. **Measurement is the constraint, not creative volume.** There is no defensible CPA or ROAS decision until account reporting, event attribution, and UTM persistence are connected.
2. **Comparison intent is the safest first test.** “Compare equivalent tickets before buying” matches TicketScan’s differentiated product and avoids unsupported savings claims.
3. **Trust claims need product proof.** Stale price data and the broken alerts endpoint make “real-time,” “price drop,” and “we’ll notify you” language unsafe.
4. **Do not scale acquisition into a broken retention loop.** Paid traffic should wait until a new signup can be measured through comparison and watchlist activation, and the alert path is verified.

## Budget recommendation

**Hold new spend and make no pause/boost/reallocation decisions from this workspace.** Once tracking QA passes, launch the proposed test at a controlled **$30/day total** for 7 days: $20/day Google Search and $10/day Meta retargeting only if a compliant audience is available. Start with Search alone if Meta audience size or consent is insufficient.

Target guardrails for the first 7-day read:

- Primary conversion: `price_comparison_completed`.
- Secondary conversions: `sign_up_completed`, `watchlist_added`.
- Working CPA target: **$8 or less per completed comparison**; pause review at **$16+ for 3 consecutive days** after at least 30 clicks.
- Scale only after **100 clicks or 3 days**, at least 10 primary conversions, stable tracking, and CPA at or below $8. Increase budget by no more than 20% per day.
- ROAS is not actionable until TicketScan has a defined attributed revenue event. Do not invent a revenue value for a free comparison.

## New campaign / significant test

**Campaign:** `Search-Compare-Before-Buy-US-2026-08`  
**Launch status:** Launch-ready draft; not externally launched because account access and event QA are unavailable.

**Hypothesis:** Searchers looking for event tickets will prefer a neutral side-by-side comparison when the ad promises context before checkout, producing a lower-cost qualified comparison than generic “cheap tickets” messaging.

**Audience:** US users with high-intent queries such as `[artist] tickets`, `[team] tickets`, `[venue] tickets`, `compare ticket prices`, and `Ticketmaster SeatGeek StubHub comparison`. Exclude existing converters from acquisition; create a separate retargeting audience after consent and pixel validation.

**Landing page:** `/compare`, with the exact event prefilled where supported. Do not route to World Cup urgency pages; the tournament is post-event. Add UTM parameters and an above-the-fold comparison CTA.

**Creative:** Use the 10-variation batch in [`ads/campaign-2026-08-10-compare-before-buy.md`](ads/campaign-2026-08-10-compare-before-buy.md). Initial Google test holds audience, landing page, and keyword set constant while rotating one headline angle at a time.

**Duration and budget:** 7 days, $20/day Google Search. Meta retargeting companion is optional at $10/day only after audience/consent QA.

**Success criteria:** Winner requires 10+ completed comparisons, CPA ≤ $8, no tracking discrepancies, and landing-page completion rate ≥ 8% of qualified sessions. Secondary quality check: signup-to-watchlist activation ≥ 85% among attributed signups. These are operating thresholds, not historical benchmarks.

## Creative refresh

The full creative batch is in the companion file and contains:

- 5 Google Search RSA angle sets: price context, speed, trust, urgency-without-FOMO, and feature utility.
- 3 Meta primary-text/headline combinations.
- 2 Display/social image concepts with visual directions.

Testing rules: one variable per cell; minimum 3 days or 100 clicks before judging; retain a control; use `utm_content` to preserve variant identity. Claims must use “compare,” “check,” or “track” language until price freshness and alerts are verified.

## Competitive ad intelligence

Google’s Ads Transparency Center is the correct source for verified advertiser history, but no advertiser-level export was available in this run, so I cannot responsibly claim which competitor ads are active or whether SeatGeek, StubHub, or Vivid Seats is bidding on `TicketScan`. Check each advertiser directly before making a bid or brand-defense decision: [Google Ads Transparency Center](https://adstransparency.google.com/?hl=en&region=anywhere).

- **SeatGeek:** Current public merchandising emphasizes August inventory, Deal Score, historical-trend context, and comparison within its marketplace. TicketScan’s counter-position is cross-market comparison with equivalent-seat and timestamp discipline. [SeatGeek August tickets](https://seatgeek.com/august-tickets)
- **StubHub:** The FTC announced a 2026 settlement involving upfront fee disclosure, making transparent total-price education a timely category angle. Do not imply wrongdoing beyond the documented settlement. [FTC announcement](https://www.ftc.gov/news-events/news/press-releases/2026/04/stubhub-refunding-10-million-fees-consumers-after-deceptive-ticket-pricing)
- **Vivid Seats:** Its public positioning continues to emphasize comparison against other resale brands and marketplace value. TicketScan can differentiate as an independent cross-source checking layer rather than a single-market seller. [Vivid Seats comparison page](https://www.vividseats.com/vividseats-vs-seatgeek-stubhub.html)

**Gap to own:** “Same event, equivalent seat, same quantity, total price, timestamp.” This is more defensible than claiming to be cheapest.

## Landing-page performance handoff → CRO Agent

No paid landing-page sessions or conversion rates are measurable. Current CRO findings:

- `/compare` is the best-fit destination for comparison intent, but comparison completion is not instrumented.
- Add above-fold event/query context, one primary CTA, and a visible “compare equivalent listings” explanation.
- Persist `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, and `utm_term` through the comparison and signup flow.
- Add events: `page_view`, `compare_started`, `price_comparison_completed`, `signup_completed`, `watchlist_added`, `newsletter_submitted`, and `alert_target_set`.
- Do not use “price drop alerts” as the primary ad promise until the stale price-history pipeline and alerts endpoint are repaired.

## Organic posts to boost after measurement QA

These are editorial candidates, not verified winners:

1. **Fee check** — headline price versus final total; boost only with a timestamped, current example.
2. **Price ceiling** — “Pick your maximum before the listing picks it for you.” Good education/retargeting angle.
3. **Same-seat comparison** — equivalent event, section, quantity, delivery, and total; strongest product demonstration.

Source: [`social-weekly-2026-08-10.md`](social-weekly-2026-08-10.md). Add UTMs and platform post IDs before boosting.

## Conversion data handoff → Analytics Agent

Paid reporting request for the next run: platform, campaign, ad group/ad set, creative ID, spend, impressions, clicks, CTR, CPC, primary conversions, secondary conversions, CPA, attributed revenue, ROAS, search terms, quality score/relevance, landing page, and UTM values. Join against product events by campaign and variant. Current available product totals are directional only; they cannot be attributed to paid media.

## Launch blockers and next actions

1. Connect Google Ads and Meta read/reporting access; export the last 14 days.
2. Instrument and QA named conversion events plus UTM persistence.
3. Repair price-history freshness and `/api/admin/alerts`.
4. Validate `/compare` anonymous flow and event-prefill behavior.
5. Launch the Search test only after the four checks above pass.

