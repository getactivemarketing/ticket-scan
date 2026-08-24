# Paid Ads Weekly Report — Week of 2026-08-24

**Prepared:** 2026-08-24  
**Owner:** Paid Ads Manager (Agent 4)  
**Platforms:** Google Ads (Search/Display), Meta (Facebook/Instagram)

## Executive summary

This is a measurement-hold week. No authenticated Google Ads or Meta Ads account, spend export, campaign report, search-terms report, budget target, or paid-attribution feed is available in the workspace. Accordingly, spend, impressions, clicks, CTR, conversions, CPA, ROAS, Quality Score, and campaign winners are **N/A—not zero and not estimated**.

The recommended weekly test is a comparison-led, US, non-brand search campaign to `/compare`, pending anonymous-flow QA and conversion instrumentation. It should be launch-ready, but it was **not launched** because account control and measurement are unavailable. No budgets were moved, campaigns paused, or ads uploaded.

Current product totals are useful for operational context only and must not be presented as paid results: **235 users, 227 watchlist items, 5 active newsletter subscribers, and 0 active price alerts** were reported by the Aug 24 CRO handoff. Price history is stale after July 24, and the alert endpoint is failing; ads must not promise live drops, lowest prices, guaranteed savings, or active alerts.

## Weekly performance report

### Summary

| Metric | This Week | Last Week | Change |
|---|---:|---:|---:|
| Total Spend | N/A | N/A | N/A |
| Impressions | N/A | N/A | N/A |
| Clicks | N/A | N/A | N/A |
| CTR | N/A | N/A | N/A |
| Conversions | N/A | N/A | N/A |
| CPA | N/A | N/A | N/A |
| ROAS | N/A | N/A | N/A |

### By campaign

| Campaign / test | Platform | Spend | Clicks | Conversions | CPA | ROAS | Decision |
|---|---|---:|---:|---:|---:|---:|---|
| Existing campaigns | Google + Meta | N/A | N/A | N/A | N/A | N/A | Hold; account data unavailable |
| `Search-Compare-Before-Buy-US-2026-08` | Google Search | Not launched | — | — | — | — | Launch after QA/access |

### By platform

| Platform | Spend | Impressions | Clicks | CTR | Conversions | CPA | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| Google Ads | N/A | N/A | N/A | N/A | N/A | N/A | No account connection/export |
| Meta Ads | N/A | N/A | N/A | N/A | N/A | N/A | No account connection/export |

### Key insights

1. There is no defensible “best” or “worst” campaign. Site totals cannot be attributed to paid traffic without UTM persistence and conversion events.
2. Comparison is the strongest current acquisition promise. Existing social proxy candidates use concrete comparison and fee-context angles, but they are not measured winners: `2026-08-20-twitter-savings-gap`, `2026-08-23-twitter-sunday-baseball-gap`, and `2026-08-18-instagram-preseason-checklist`.
3. Trust and claim discipline are the immediate optimization opportunity. Until price tracking and alerts recover, use “compare,” “check the total,” and “make an informed choice”; avoid numerical savings and real-time price claims.
4. The biggest growth risk is instrumentation, not creative volume: the CRO handoff found no verified `compare_started`, `compare_completed`, signup, watchlist, newsletter, or UTM events in the frontend.

### Budget recommendation

**Keep current budgets unchanged and do not add spend.** There is no approved daily budget, target CPA/ROAS, or verified conversion baseline. Once tracking is repaired, begin with a controlled test budget approved by the account owner, split by platform rather than reallocated from an unknown baseline. Do not apply pause/boost rules until at least three clean attributed days are available.

## New campaign / significant test

**Status: Launch-ready draft; blocked from launch by missing account access and measurement.**

**Campaign:** `Search-Compare-Before-Buy-US-2026-08`  
**Platform:** Google Search  
**Audience:** US users searching for ticket comparison, ticket price comparison, event ticket deals, and venue/event-specific comparison terms. Keep brand terms eligible for defense; separate them into a brand campaign once query data is available.  
**Landing page:** `/compare` after anonymous comparison-flow QA. If visitors are forced to register before seeing comparison value, use `/dashboard` or homepage only as a temporary control.

**Hypothesis:** A neutral “compare before checkout” message will produce higher-quality signup/watchlist behavior than marketplace-style price or urgency claims because it addresses uncertainty without making an unsupported savings promise.

**Proposed structure:**

- Ad group 1: generic comparison intent — `compare ticket prices`, `ticket price comparison`, `compare concert tickets`, `compare sports tickets`.
- Ad group 2: tracker/alert intent — hold until price history and alert reporting are healthy.
- Ad group 3: event/venue intent — add only with exact event/venue query and landing-page relevance.
- Negatives: validate against the actual search-terms report before upload; do not blanket-negative `cheap tickets`, `last minute tickets`, `ticket deals`, or event names.

**Budget and duration:** No spend was authorized or entered. On approval, use a small controlled daily budget for 7 days, with each ad variation receiving at least 3 days or 100 clicks before judgment. The account owner must supply the dollar amount and target CPA/ROAS before activation.

**Primary conversion:** `compare_completed` (or the approved equivalent).  
**Secondary conversions:** `signup_complete`, `watchlist_add`, `outbound_ticket_click`.  
**Winner criteria:** target CPA at or below the approved account target, with a qualified downstream action rate no worse than the control. ROAS cannot be evaluated until a revenue/value event is defined.

## Creative refresh — 11 fresh variations

Run one variable at a time. Use `utm_content=v1` through `v11`; preserve first- and last-touch UTMs. Do not scale on CTR alone.

### Google Search — 5 variants

#### V1 — Price context

**Headlines:** Compare Ticket Prices | Check Before You Buy | See More Ticket Context  
**Descriptions:** Compare event details, seat area, quantity, and price across available sources. Make a better-informed ticket decision before checkout.  
**Landing page:** `/compare`

#### V2 — Speed

**Headlines:** Compare Tickets Faster | One Event, More Context | Start Your Ticket Check  
**Descriptions:** Put comparable ticket options side by side, then choose the listing that fits your event, seat, and budget.  
**Landing page:** `/compare`

#### V3 — Trust / transparency

**Headlines:** Ticket Prices Need Context | Compare Like-for-Like | A Clearer Ticket Check  
**Descriptions:** Match the event, session, seat area, quantity, and delivery details before you judge a ticket price.  
**Landing page:** `/compare`

#### V4 — Urgency without FOMO

**Headlines:** Check Tickets Before Checkout | Don’t Trust One Listing | Compare Your Options  
**Descriptions:** The first listing is not the whole market. Take a second look at comparable options before committing.  
**Landing page:** `/compare`

#### V5 — Feature-led

**Headlines:** Search Events and Compare | Save Events to Your Watchlist | Track Your Decision  
**Descriptions:** Find an event, compare available options, and save the one you want to keep watching.  
**Landing page:** `/dashboard` if watchlist flow is required; otherwise `/compare`

### Meta — 3 primary-text/headline combinations

#### V6 — Context

**Primary text:** The first ticket listing is not a verdict. Compare the event, seat area, quantity, and total before you decide.  
**Headline:** Context Before Checkout  
**CTA:** Compare prices

#### V7 — Ceiling rule

**Primary text:** Set your ticket ceiling before the marketplace sets it for you. Compare equivalent options, then decide with the number you actually want to pay.  
**Headline:** Set Your Ticket Ceiling  
**CTA:** Learn more

#### V8 — Fee clarity

**Primary text:** A listing price is only the rough draft. Check whether the event, seats, quantity, delivery, and final total are comparable.  
**Headline:** Check the Total First  
**CTA:** Compare prices

### Display / social image concepts — 3 variants

#### V9 — Split-screen comparison card

**On-image copy:** Same event. Different listing. Compare first.  
**Visual direction:** Two clean listing cards with matching event/session/seat fields; intentionally omit unsupported dollar claims. Use TicketScan palette, high contrast, one clear `/compare` CTA.  
**Format:** 1:1 and 1.91:1.

#### V10 — Five-field checklist

**On-image copy:** Event. Seat. Quantity. Delivery. Total.  
**Visual direction:** Large checklist with the five equivalence fields, subtle ticket-stub motif, no countdown, no “lowest price” badge.  
**Format:** 4:5 and 9:16.

#### V11 — Product workflow

**On-image copy:** Find it. Compare it. Watch it.  
**Visual direction:** Three-step phone/browser mockup: search event, compare options, save to watchlist. Use only UI states that exist in production.  
**Format:** 1:1 and 4:5.

## Competitive ad intelligence

### Evidence status

The Google Ads Transparency Center was checked on Aug 24, but the public scrape did not return advertiser-specific SeatGeek, StubHub, or Vivid Seats creative. Therefore, competitor ad presence, active copy, landing pages, and TicketScan brand-term bidding are **unverified**. This is an access/evidence limitation, not evidence that competitors are inactive.

### Positioning themes and counter-position

| Competitor | Public positioning to monitor | TicketScan response |
|---|---|---|
| SeatGeek | Event discovery, buyer guarantee, seat-view experience, upfront pricing / deals | Own the neutral second-screen comparison: same event, equivalent seat area, quantity, total, and timestamp. |
| StubHub | Large resale inventory, buyer protection, event urgency, fulfillment reassurance | Educate on delivery timing, transfer restrictions, seller details, and what protection language does and does not mean. |
| Vivid Seats | Broad event inventory, deals/rewards, search-led acquisition | Counter with transparent like-for-like comparison and avoid unsupported “save $X” claims. |

**Brand defense:** Do not add `ticketscan` as a negative keyword. Pull Google search terms and auction insights first, then decide whether a low-budget brand-defense campaign is warranted. No evidence currently confirms competitor bidding on TicketScan terms.

## Landing-page performance → CRO Agent

- Route comparison-led ads to `/compare` only after anonymous-flow and mobile QA.
- Test a direct “Compare ticket prices” CTA against registration-first traffic; the current homepage CTA sends new users to registration before they experience the core value.
- Instrument and report `landing_cta_click`, `search_submit`, `compare_started`, `compare_completed`, `signup_complete`, `watchlist_add`, and `outbound_ticket_click`.
- Persist UTMs across landing, signup, watchlist, and outbound click.
- Fix the duplicate homepage footer and repeated newsletter placements identified by CRO.
- Treat 235 users, 227 watchlist items, 5 active subscribers, and 0 active alerts as product totals, not paid landing-page performance.

## Organic posts to boost → Social Agent

No organic post is a verified high performer because platform IDs and analytics are not connected. After IDs and click data are available, the first boost candidates are:

1. `2026-08-20-twitter-savings-gap` — concrete comparison/click hypothesis.
2. `2026-08-23-twitter-sunday-baseball-gap` — simple one-extra-check value proposition.
3. `2026-08-18-instagram-preseason-checklist` — save/share-oriented fee-check format.

These are proxy candidates from the Aug 17–23 editorial queue, not measured winners. Boost only with UTMs and a defined conversion event.

## Conversion data → Analytics Agent

Please provide before the next optimization cycle:

- Seven-day Google Ads and Meta exports with campaign/ad-set/ad IDs, spend, impressions, clicks, conversions, and placement/search-term detail.
- Approved daily budgets and target CPA/ROAS by campaign.
- A single conversion taxonomy, with `compare_completed` as the proposed primary event.
- First- and last-touch UTM attribution, including `utm_content`.
- Revenue or proxy-value definitions required to calculate ROAS.

## Action register

| Priority | Owner | Action | Status |
|---|---|---|---|
| P0 | Analytics / Dev | Repair conversion events, UTM persistence, and attribution | Blocked pending implementation |
| P0 | Ads owner | Provide read/control access or seven-day exports | Blocked |
| P1 | CRO | QA anonymous `/compare` path and direct CTA variant | Pending |
| P1 | Ads | Launch `Search-Compare-Before-Buy-US-2026-08` after P0/P1 checks | Draft only; not launched |
| P1 | Ads | Review search terms, auction insights, and brand defense | Pending account access |
| P2 | Social | Provide post IDs and measured click/engagement export | Pending |

## Sources and workspace evidence

- [Google Ads Transparency Center](https://adstransparency.google.com/) — public center checked; advertiser-specific creative was not exposed in the scrape.
- [SeatGeek](https://seatgeek.com/), [StubHub](https://www.stubhub.com/), [Vivid Seats](https://www.vividseats.com/) — public positioning references for monitoring.
- `marketing-agents/output/ads/ads-daily-2026-08-23.md`
- `marketing-agents/output/cro-daily-2026-08-24.md`
- `marketing-agents/output/social-weekly-2026-08-24.md`
- `marketing-agents/output/social-snippets-week-2026-08-24.md`

