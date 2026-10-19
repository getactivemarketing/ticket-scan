# Paid Ads Weekly Report — Week of 2026-10-19

## Executive status

**Measurement hold; launch-ready test prepared, not uploaded.** No authenticated
Google Ads or Meta Ads connection, platform export, approved budget, or verified
paid conversion events is available in this workspace. No spend, campaign,
audience, or budget changes were made.

The product-status guardrail also applies to all ad copy: TicketScan must not
promise price tracking, price history, price trends, price-drop or target-price
alerts, buy/wait calls, savings statistics, or TicketScan price data. This
week's positioning is event discovery, onsale/presale timing, venue guidance,
and links to Ticketmaster/TicketNetwork or the relevant seller page.

## Summary

| Metric | This Week | Last Week | Change |
|---|---:|---:|---:|
| Total spend | N/A | N/A | N/A |
| Impressions | N/A | N/A | N/A |
| Clicks | N/A | N/A | N/A |
| CTR | N/A | N/A | N/A |
| Conversions | N/A | N/A | N/A |
| CPA | N/A | N/A | N/A |
| ROAS | N/A | N/A | N/A |

These are unavailable, not zero. The workspace contains no platform delivery
data and GTM events for signup, watchlist add, newsletter success, search, or
outbound seller clicks are not verified.

## By platform

| Platform | Spend | CTR | Conversions | CPA | ROAS | Decision |
|---|---:|---:|---:|---:|---:|---|
| Google Search/Display | N/A | N/A | N/A | N/A | N/A | Hold; connect reporting and attribution |
| Meta Facebook/Instagram | N/A | N/A | N/A | N/A | N/A | Hold; connect reporting and attribution |

## By campaign

No active campaign list or campaign-level export was available. Top and bottom
performers cannot be identified. No campaigns were paused, boosted, or
reallocated.

## Key insights

1. The binding issue is measurement, not creative volume: without spend,
   campaign IDs, and conversion events, CPA/ROAS optimization would be guesswork.
2. A cold-traffic test should lead with the supported job—find an event and
   see where to buy it—and land on `/dashboard` or a matching event page.
3. `/compare` should not be the primary paid destination while price-led product
   behavior is unavailable. `/onsales`, venue guides, and event pages are safer
   message matches for the current product.
4. The first test should use one audience and one landing page while changing
   only the ad angle. Do not scale until outbound seller-click and signup events
   are visible with persisted UTMs.

## Budget recommendation

**Do not spend yet.** First connect read-only reporting and verify attribution.
After that, request approval for a controlled test cap of **$15/day total for
7 days**: $10/day Google Search and $5/day Meta retargeting only if a compliant
visitor audience exists. Do not activate retargeting without consent and a
populated audience. No budget increase should occur until there are at least
100 clicks or 3 days of observable data, whichever is later, and a verified
conversion definition.

## New campaign/test

### Proposed campaign: Event Discovery — Onsale & Venue Intent

- **Launch status:** Ready for account-owner review; not launched because no ad
  account write access is connected.
- **Hypothesis:** Searchers looking for an event's onsale date, venue details,
  or where to buy will engage with a factual event-discovery message and click
  through to a relevant event or onsale page.
- **Audience:** US users searching specific event, artist, team, venue,
  `onsale`, `presale`, or “where to buy” terms. Exclude support, seller, job,
  and ticket-template intent after query-level confirmation.
- **Landing page:** `/onsales` for sale-window queries; matching event page
  when an event URL is available; `/dashboard` as broad fallback.
- **Format:** Google Search responsive search ads first. Meta version is a
  later retargeting test only after the audience and consent requirements are met.
- **Test budget:** $10/day, 7 days, capped at $70; no automatic scaling.
- **Success criteria:** At least 100 clicks, valid UTM attribution, observable
  `search_submit` and `outbound_ticket_click`, and a landing-page conversion
  rate that beats the pre-registered baseline. Set a target CPA only after a
  real baseline exists; do not manufacture a threshold now.
- **Stop conditions:** Pause if tracking is missing, destination pages fail,
  ads are disapproved, or the test accumulates spend without a measurable
  conversion event.

### Setup checklist

- [ ] Connect read-only Google Ads and Meta reporting first.
- [ ] Record account, campaign, ad-group, budget, and target definitions.
- [ ] Persist `utm_source`, `utm_medium`, `utm_campaign`, and `utm_content`.
- [ ] Verify `search_submit`, `signup_complete`, `watchlist_add`,
  `newsletter_success`, and `outbound_ticket_click` in production.
- [ ] Add the proposed negatives only at the narrowest relevant scope after
  reviewing real search terms.
- [ ] Confirm `/onsales` and event-page message match on mobile.

## Search-term controls

The dated proposal in `negative-keywords-2026-10-19.md` remains review-only.
Do not make account-wide exclusions for `price`, `compare`, `ticketmaster`,
`ticketnetwork`, `onsale`, `presale`, event, venue, team, artist, or `ticketscan`.

## CRO handoff

- Put the event date, onsale/presale time, venue, and primary seller links above
  the fold.
- Use one primary CTA: **Find events** or **See where to buy**.
- Add: “Confirm fees, delivery method, section, availability, and final total
  on the seller site.”
- Keep the page factual; do not use unsupported “save,” “lowest,” alert, or
  buy-timing claims.
- Send page-level landing-page metrics to the CRO agent once attribution works.

## Competitive ad intelligence

### Verified platform context

- Google states that its Ads Transparency Center is a searchable repository of
  ads served by verified advertisers across Google platforms. It supports
  advertiser, region, date, and format inspection, but the public text result
  here did not expose advertiser-specific SeatGeek, StubHub, or Vivid Seats
  creatives.
- Meta's official Ad Library is the relevant public source for active ads, but
  advertiser-level results require an interactive library search or API access.

### This week's finding

**No competitor-specific creative, offer, landing page, or TicketScan brand-bid
finding is verified in this run.** Do not claim that any competitor is bidding
on TicketScan or that a competitor is using a particular offer without saving an
ad-library record or screenshot.

### Manual check to complete when access is available

Search `SeatGeek`, `StubHub`, `Vivid Seats`, and `ticketscan.io` in:

- [Google Ads Transparency Center](https://adstransparency.google.com/?platform=SEARCH&region=US&safe=active)
- [Meta Ad Library](https://www.facebook.com/ads/library/?country=US&ad_type=all)

Record advertiser name, active dates, format, headline/primary text, CTA,
destination domain, and a screenshot. Compare only claims that TicketScan can
truthfully answer with event discovery, onsale timing, venue facts, and seller
links.

## Organic-to-paid handoff

No Social Agent performance export was available. Do not boost an organic post
until its post ID, reach, link clicks, and destination conversion events are
available. Candidate content angles for later testing are venue seating-guide
posts and verified onsale/presale explainers.

## Next action

Connect read-only Google Ads/Meta exports and production conversion events. Then
replace the N/A table with seven-day delivery data and decide whether to approve
the $10/day Google Search test.
