# Paid Ads Weekly Report — Week of 2026-10-05

**Prepared:** 2026-10-05  
**Owner:** Paid Ads Manager (Agent 4)  
**Platforms:** Google Ads (Search + Display), Meta (Facebook + Instagram)

## Summary

This is a **measurement hold**. The workspace has no authenticated Google Ads or Meta Ads reporting/control connection, platform export, approved budget, search-terms report, or paid-attribution feed. The metrics below are therefore **N/A, not zero and not estimated**. No campaign was uploaded, launched, paused, boosted, or re-budgeted.

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

| Platform | Spend | Impressions | Clicks | CTR | Conversions | CPA | ROAS | Decision |
|---|---:|---:|---:|---:|---:|---:|---:|---|
| Google Ads | N/A | N/A | N/A | N/A | N/A | N/A | N/A | Hold; connect account/export |
| Meta Ads | N/A | N/A | N/A | N/A | N/A | N/A | N/A | Hold; connect account/export |

### By campaign

| Campaign | Status | Spend | Conversions | CPA | ROAS | Decision |
|---|---|---:|---:|---:|---:|---|
| Existing campaigns | Not measurable | N/A | N/A | N/A | N/A | No change |
| `Search-Venue-Event-Discovery-US-2026-10` | Draft only | — | — | — | — | Launch after access + measurement QA |

## Key insights

1. There is no defensible top or worst performer. Site totals and organic drafts cannot be attributed to paid traffic.
2. The safest current acquisition promise is event discovery and buyer preparation: find the exact event, verify onsale/presale details, review venue information, and follow seller links.
3. Comparison-led spend should wait until `outbound_ticket_click` and comparison events are instrumented and verified. The current CRO handoff recommends an event-discovery or seller-click primary conversion.
4. Product-status guardrail: public ads must not mention price tracking, price history/trends, price-drop or target alerts, buy/wait calls, lowest-price claims, or TicketScan-derived savings statistics.

## Budget recommendation

Keep budgets unchanged and do not add spend. No approved daily cap, target CPA, conversion value, or reliable baseline exists. After access and instrumentation are available, start one controlled Google Search test at the account owner's approved cap for seven days; judge only after at least three clean attributed days and a sufficient click sample. Do not use ROAS until a revenue or approved proxy-value event exists.

## New campaign / significant test

**Status: Launch-ready draft; not launched.** External launch is blocked by missing account control and measurement.

- **Campaign:** `Search-Venue-Event-Discovery-US-2026-10`
- **Platform:** Google Search
- **Objective:** qualified event discovery and outbound seller clicks
- **Audience:** US users searching for a specific event, venue, onsale date, presale date, or venue guide
- **Landing page:** matching event page or verified `/venues/[slug]` guide; `/dashboard` for broad event-discovery queries
- **Hypothesis:** event- and venue-specific intent will produce more qualified traffic than broad “cheap tickets” messaging because the landing page can answer the exact event, venue, sale-window, and practical buyer questions.
- **Test budget:** account owner to approve. Suggested guardrail is a small seven-day test at no more than the approved minimum daily cap; no dollar amount was entered or authorized.
- **Primary success event:** `outbound_ticket_click`
- **Secondary events:** `signup_completed`, `watchlist_added`, `newsletter_subscribe`
- **Winner rule:** meet the approved CPA and maintain a qualified downstream-action rate at least as good as the control. If no approved target exists, report volume only and do not scale.

### Initial ad groups

1. **Event discovery:** `[artist/team] tickets`, `[event] tickets`, `[event] schedule`.
2. **Venue intent:** `[venue] tickets`, `[venue] seating guide`, `[venue] events`.
3. **Onsale/presale:** `[event] presale`, `[artist] onsale time`, `[venue] presale`.

Start with phrase and exact match. Review actual search terms before adding negatives. Keep event, team, artist, venue, TicketScan, onsale, presale, and ticket-finding intent eligible.

## Creative refresh

Eleven compliant variations are in [`ads/creative-2026-10-05.md`](ads/creative-2026-10-05.md). The batch covers five Google Search angles, three Meta variants, and three display/social concepts. Test one variable at a time, preserve UTMs, and do not judge on CTR alone.

## Competitive ad intelligence

**Evidence status:** Google Ads Transparency Center searches returned the official center but did not expose verified SeatGeek, StubHub, or Vivid Seats advertiser-specific active creative in this check. Competitor brand positioning was verified from official pages; that is not proof of current paid campaigns or TicketScan brand bidding.

| Competitor | Verified public positioning | Response opportunity |
|---|---|---|
| SeatGeek | Event discovery, seat-view features, all-in pricing, Buyer Guarantee, and Deal Score. | Own the neutral preparation layer: exact event, equivalent seat area, quantity, delivery, and final total. |
| StubHub | Ticket marketplace plus FanProtect buyer-protection language and event urgency. | Use calm education on transfer timing, delivery restrictions, and the complete order summary; do not attack or imply every order is risky. |
| Vivid Seats | Broad event inventory and Vivid Seats Rewards, including a “buy 10, get the 11th on us” framing with exclusions. | Avoid loyalty-copy imitation; emphasize event discovery, venue utility, and clear seller-link context. |

**Brand defense:** no brand campaign or negative keyword was added. Pull auction insights and search terms after account access before deciding whether TicketScan brand defense is warranted.

## Landing-page performance → CRO Agent

No paid landing-page metrics are available. Before spend:

- QA the matching event and venue-guide destination on mobile.
- Instrument `landing_cta_click`, `search_submit`, `comparison_started`, `comparison_completed`, `signup_completed`, `watchlist_added`, `newsletter_subscribe`, and `outbound_ticket_click`.
- Persist first-touch and last-touch `utm_source`, `utm_medium`, `utm_campaign`, and `utm_content` through signup, watchlist, and outbound seller click.
- Use `/compare` only after its anonymous flow and conversion events are verified.
- Keep ad copy to event discovery, onsale/presale information, venue guides, and general ticket-buying education.

## Organic posts to test later → Social Agent

No high-performing organic post is verified. After post IDs and analytics are connected, test:

1. **Instagram hero carousel:** “The presale code is not the whole plan.” — save/share hypothesis.
2. **Presale guide:** checklist-led click test to the official presale explainer.
3. **Ticket Buyer’s Cheat Sheet:** utility-led click and signup test.

These are editorial candidates from the Oct. 5 social handoff, not measured winners. Boost only with confirmed publication IDs, UTMs, and a defined conversion event.

## Conversion data → Analytics Agent

Provide before the next optimization cycle:

- Seven-day Google and Meta exports with campaign/ad-set/ad IDs, spend, impressions, clicks, conversions, value, CPA, ROAS, and status.
- Search terms, placement, auction-insights, and disapproval reports.
- Approved daily budgets and target CPA/ROAS.
- A single conversion taxonomy, with `outbound_ticket_click` as the proposed primary event.
- First- and last-touch UTM attribution and a revenue/proxy-value definition for ROAS.

## Action register

| Priority | Owner | Action | Status |
|---|---|---|---|
| P0 | Ads owner | Provide read/control access or seven-day exports | Blocked |
| P0 | Analytics / Dev | Instrument conversion events and UTM persistence | Blocked pending implementation |
| P1 | CRO | QA matching event/venue landing paths and `/compare` | Pending |
| P1 | Ads | Launch `Search-Venue-Event-Discovery-US-2026-10` | Draft only; not launched |
| P1 | Ads | Pull search terms and auction insights | Pending account access |
| P2 | Social | Provide post IDs and measured click/engagement export | Pending |

## Sources

- [Google Ads Transparency Center](https://adstransparency.google.com/) — official center; competitor-specific creative was not verified in this search.
- [SeatGeek](https://seatgeek.com/is-seatgeek-legit) and [SeatGeek support: how it works](https://support.seatgeek.com/hc/en-us/articles/52321078229139-What-is-SeatGeek-and-how-does-it-work)
- [StubHub FanProtect Guarantee](https://support.stubhub.com/articles/61000276393-stubhubs-fanprotect-guarantee)
- [Vivid Seats Rewards](https://www.vividseats.com/rewards)
- Workspace evidence: `marketing-agents/output/ads-daily-2026-10-05.md`, `marketing-agents/output/social-weekly-2026-10-05.md`, `marketing-agents/output/social-paid-handoff-2026-10-05.md`, `marketing-agents/output/cro/paid-ads-handoff-2026-10-04.md`
