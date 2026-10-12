# Paid Ads Weekly Report — Week of 2026-10-06 to 2026-10-12

**Prepared:** 2026-10-12  
**Owner:** Paid Ads Manager (Agent 4)  
**Platforms:** Google Ads (Search + Display), Meta (Facebook + Instagram)

## Executive summary

This remains a **measurement hold**. No authenticated Google Ads or Meta Ads
reporting/control connection, spend export, approved budget, search-terms report,
or paid-attribution feed is available in the workspace. Paid metrics are **N/A**,
not zero and not estimated. No campaign was uploaded, launched, paused, boosted,
or re-budgeted.

The new test prepared this week is `Search-Onsale-Presale-Planning-US-2026-10`.
It is launch-ready pending account access, approved spend, landing-page QA, and
conversion-event verification. It uses only supported TicketScan claims:
event discovery, onsale/presale information, venue context, and seller links.

## Performance summary

| Metric | This week | Last week | Change |
|---|---:|---:|---:|
| Total spend | N/A | N/A | N/A |
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
| `Search-Venue-Event-Discovery-US-2026-10` | Draft only | — | — | — | — | Superseded as this week's primary test |
| `Search-Onsale-Presale-Planning-US-2026-10` | Launch-ready draft | — | — | — | — | Launch after QA and approval |

## Key insights

1. There is no defensible top or worst performer. Missing account data cannot be
   treated as zero spend or zero conversions.
2. The highest-confidence acquisition promise remains practical ticket
   preparation: find the event, confirm onsale or presale timing, review venue
   details, and continue to a seller page.
3. The CRO audit reports that the homepage currently asks for registration before
   the visitor performs the core search action, and that conversion events are not
   queryable. Paid traffic should wait for the measurement repair or be limited to
   a deliberately approved learning budget.
4. Public ads must not mention price tracking, price history/trends, price-drop or
   target alerts, buy/wait calls, lowest-price claims, or TicketScan-derived
   savings statistics. This follows `marketing-agents/PRODUCT-STATUS.md`.

## Budget recommendation

**Do not spend yet.** No account, budget cap, target CPA, or verified conversion
path is available. If the owner approves a controlled test after QA, use a maximum
of **$15/day for 7 days ($105 total)** on Google Search only. Do not add Meta spend
until a landing-page event and first-party attribution path are verified.

The test should be judged on `outbound_ticket_click` as the proposed primary
conversion, with `signup_completed`, `watchlist_added`, and
`newsletter_subscribe` as secondary events. A CPA winner cannot be declared until
the owner supplies an approved target CPA and the event is attributable.

## New campaign / significant test

**Status: Launch-ready draft; not launched.** External execution is blocked by
missing account control and measurement.

- **Campaign:** `Search-Onsale-Presale-Planning-US-2026-10`
- **Platform:** Google Search
- **Objective:** qualified event discovery and seller-page continuation
- **Audience:** US users searching for a specific artist, team, venue, event,
  onsale date, or presale date
- **Landing page:** the matching event page or `/onsales`; `/dashboard` only for
  broad discovery terms
- **Hypothesis:** users searching for sale-window information will take a more
  qualified next action when the landing page answers the exact event, date,
  venue, and seller-link question.
- **Test budget:** $15/day maximum for 7 days, pending explicit approval
- **Primary success event:** `outbound_ticket_click`
- **Secondary events:** `signup_completed`, `watchlist_added`,
  `newsletter_subscribe`
- **Success criteria:** owner-approved CPA target plus a verified downstream
  action rate; until both exist, report learning and volume only—do not scale.

The full keyword structure, launch checklist, and destination rules are in
[`ads/campaign-2026-10-12-onsale-presale-planning.md`](ads/campaign-2026-10-12-onsale-presale-planning.md).

## Creative refresh

Ten compliant variations are in
[`ads/creative-weekly-2026-10-12-full-refresh.md`](ads/creative-weekly-2026-10-12-full-refresh.md):
five Google Search concepts, three Meta concepts, and two Display/social image
concepts. Test one variable at a time. Keep each variant live for at least three
clean attributed days or 100 clicks before judging, subject to budget.

## Competitive ad intelligence

**Evidence status:** The official [Google Ads Transparency Center](https://adstransparency.google.com/?platform=SEARCH&region=US&safe=active)
was checked, but this environment did not expose verified advertiser-specific
active creative for SeatGeek, StubHub, or Vivid Seats. Their current paid status,
offers, landing pages, and TicketScan brand bidding are therefore **unverified**.
No competitor claim below is presented as proof of a live ad.

| Competitor | Public positioning signal | Response opportunity |
|---|---|---|
| SeatGeek | Official public materials and the current intelligence notes emphasize event discovery, seat views, all-in pricing, Buyer Guarantee, Deal Score, and newer conversational/search intelligence. | Own the neutral preparation layer: exact event identity, venue context, sale timing, seller link, delivery, and checkout questions. |
| StubHub | Public materials emphasize marketplace inventory, buyer protection, event urgency, all-in pricing education, and seat-view features. | Use calm education on event identity, transfer timing, delivery restrictions, and the complete order summary. |
| Vivid Seats | Public materials emphasize broad inventory and rewards/loyalty messaging. | Avoid loyalty-copy imitation; emphasize useful venue guides, sale-window clarity, and seller-link context. |

**Brand defense:** no brand campaign or negative keyword was added. Pull auction
insights and search terms after account access before deciding whether brand
defense is warranted.

## Landing-page performance → CRO Agent

No paid landing-page performance data is available. The latest CRO audit identifies
these pre-spend actions:

- Make event search the primary homepage action rather than sending every new
  visitor to registration.
- Repair the guest compare dead-end or provide a clear return path.
- Instrument and QA `search_submitted`, `event_viewed`, `signup_completed`,
  `watchlist_added`, `newsletter_subscribed`, and `outbound_ticket_click`.
- Persist first-touch and last-touch `utm_source`, `utm_medium`,
  `utm_campaign`, and `utm_content` through signup, watchlist, and seller click.
- Route venue-intent ads only to a verified matching `/venues/[slug]` page.

There is no measured landing-page winner to pass to CRO.

## Organic posts to boost → Social Agent

No high-performing organic post is verified because X, Instagram, and LinkedIn
analytics exports are not connected. The Oct. 12 social report identifies these
as test candidates, not winners:

1. Conditional-playoff event identity thread.
2. Ticket Buyer's Cheat Sheet carousel.
3. Venue-guide utility post.

Do not boost any of them until the post ID, publication status, UTM, and downstream
event are confirmed.

## Conversion data → Analytics Agent

The latest admin dashboard reports 265 registered users, 256 watchlist records,
7 active newsletter subscribers, 1 new signup, 0 watchlist additions, and 1 new
newsletter subscription in the latest 24-hour window. These are product totals,
not paid-attributed conversions. Visitor, source, pageview, paid, comparison,
and outbound-click metrics remain unavailable.

Analytics should provide before the next optimization cycle:

- Seven-day Google and Meta exports with campaign/ad-set/ad IDs, spend,
  impressions, clicks, conversions, value, CPA, ROAS, and status.
- Search terms, placement, auction-insights, and disapproval reports.
- Approved daily budgets and target CPA/ROAS.
- A single conversion taxonomy and first-/last-touch UTM attribution.
- A revenue or approved proxy-value definition before anyone reports ROAS.

## Action register

| Priority | Owner | Action | Status |
|---|---|---|---|
| P0 | Ads owner | Provide read/control access or seven-day exports | Blocked |
| P0 | Analytics / Dev | Instrument conversion events and UTM persistence | Blocked pending implementation |
| P0 | Ads owner | Approve $15/day, 7-day Google Search test cap | Pending |
| P1 | CRO | QA `/onsales`, matching event pages, venue routes, and guest search path | Pending |
| P1 | Ads | Upload `Search-Onsale-Presale-Planning-US-2026-10` | Not launched |
| P1 | Ads | Pull search terms and auction insights | Pending account access |
| P2 | Social | Provide post IDs and measured click/engagement export | Pending |

## Sources

- [Google Ads Transparency Center](https://adstransparency.google.com/?platform=SEARCH&region=US&safe=active)
- [Google Ads help: report an ad](https://support.google.com/google-ads/answer/7660847/how-to-report-an-ad)
- Workspace evidence: `marketing-agents/output/ads-daily-2026-10-12.md`
- Workspace evidence: `marketing-agents/output/analytics/analytics-daily-2026-10-12.md`
- Workspace evidence: `marketing-agents/output/cro-weekly-2026-10-12.md`
- Workspace evidence: `marketing-agents/output/social-weekly-2026-10-12.md`
