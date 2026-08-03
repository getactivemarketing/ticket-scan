# Paid Ads Weekly Report — Week of July 27–August 2, 2026

**Prepared:** August 3, 2026  
**Owner:** Agent 4 — Paid Ads Manager  
**Status:** Launch-ready planning package; no paid campaign was published because platform access, budget approval, conversion tracking, and UTM attribution are not connected.

## Summary

| Metric | This Week | Last Week | Change |
|---|---:|---:|---:|
| Total spend | N/A — no ad account feed | N/A | N/A |
| Impressions | N/A | N/A | N/A |
| Clicks | N/A | N/A | N/A |
| CTR | N/A | N/A | N/A |
| Conversions | N/A | N/A | N/A |
| CPA | N/A | N/A | N/A |
| ROAS | N/A | N/A | N/A |

**Important:** “N/A” means unmeasured, not zero. No campaign, platform, or creative winner can be declared from the available workspace data.

## By campaign

| Campaign | Platform | Status | Spend | Primary conversion | Result |
|---|---|---|---:|---|---|
| Core ticket comparison | Google Search | Draft | N/A | `compare_completed` | Not launched |
| NFL preseason comparison | Google Search | Draft | N/A | `compare_completed` | Not launched |
| Compare-first retargeting | Meta | Draft | N/A | `signup_completed` / `watchlist_added` | Not launched |

## By platform

**Google Search:** No account connection, budgets, search-term report, auction insights, or Quality Scores were accessible. Recommended first live test is the narrow Core ticket comparison campaign after event QA.

**Meta:** No Business Manager, Pixel/CAPI, audience, spend, or placement data was accessible. Defer prospecting and retargeting until consent, event deduplication, and audience sizes are validated.

## Key insights

1. The strongest creative signal available is concrete, all-in-price education. Social’s July 27–August 2 proxy review identified the `$30.07 vs. $38.19` example as the strongest click-intent candidate, but it is an editorial proxy, not paid performance.
2. “Set a ceiling” and “compare first” are differentiated consumer-control angles. They avoid unsupported “lowest price” and guaranteed-savings claims.
3. NFL preseason is the most relevant seasonal acquisition hook for August. World Cup urgency should remain retired because the tournament ended July 19, 2026.
4. The paid funnel is not launch-safe: `/compare` redirects anonymous users to login, UTM persistence is not verified, core conversion events are missing or unconfirmed, price history is stale, and `/api/admin/alerts` was recently returning HTTP 500.

## Budget recommendation

**Hold paid spend at $0 until the launch gate is met.** Do not reallocate or scale unverified budget. Once the gate is cleared, start with a controlled Google Search test at **$30/day for 7 days** ($210 maximum), split 70/30 between Core comparison and NFL preseason. Do not add Meta prospecting spend in the first week.

Provisional success criteria for the first clean test:

- Primary: `compare_completed` CPA ≤ **$12** after at least 20 attributed conversions.
- Activation guardrail: `signup_completed` rate from qualified landing sessions ≥ **8%**.
- Secondary: `watchlist_added` CPA ≤ **$25** and `watchlist_added / signup_completed` ≥ **25%**.
- Pause or revise a variant after **100 clicks or 3 full days**, whichever comes later, unless it violates policy or tracking is broken.
- ROAS is not a valid launch KPI until TicketScan records attributable outbound purchase value; optimize to qualified product actions first.

## New campaign / significant test

### Campaign: Google Search — Compare NFL Ticket Prices

**Launch status:** Created as a launch-ready brief; not published. Human setup is required.

**Hypothesis:** Searchers with explicit NFL ticket-comparison intent will complete a comparison more often than generic “tickets” searchers because the ad promise matches a specific decision they are already making. The strongest message should be “compare the same event across sources,” not an unsupported cheapest-price claim.

**Audience:** U.S. users searching for NFL preseason and team-ticket terms, with exact and phrase match only at launch. Start with a small set of locations covered by current event inventory; expand only after query quality is proven.

**Initial keyword groups:**

- `[compare NFL ticket prices]`
- `"NFL ticket price comparison"`
- `[compare football tickets]`
- `"compare Ticketmaster SeatGeek StubHub"`
- `[NFL tickets price tracker]` — use only after alert flow is verified

**Negative-keyword queue:** `free tickets`, `ticket refund`, `sell tickets`, `ticket transfer`, `ticket template`, `ticket jobs`, `ticket office`, `ticket scam`, `print ticket`, `lost ticket`.

**Landing page:** `/dashboard` for a public search experience. If anonymous comparison remains gated, use `/` temporarily and do not launch the campaign until the destination is QA-approved. Do not send cold traffic to `/login`.

**Budget:** $21/day for 7 days inside the initial $30/day Google test. One campaign, two ad groups, one conversion objective.

**Bidding:** Start with Maximize Clicks only long enough to validate query and event firing; move to Maximize Conversions after a clean baseline. Set a CPC guardrail during the first 48 hours.

**Success criteria:** `compare_completed` CPA ≤ $12, at least 20 conversions before scale, search-term relevance ≥ 80% by manual review, and no material landing-page or tracking errors.

**Launch checklist:** connect account; approve budget; QA public landing route; implement UTMs; fire and deduplicate `landing_view`, `search_started`, `compare_completed`, `signup_completed`, `watchlist_added`; import the primary conversion; verify a test click through the full funnel.

## Creative refresh — 11 fresh variations

Claims are intentionally conservative. Do not use “cheapest,” fixed savings, “50K+ events,” or guaranteed alerts until substantiated in the ad account and product flow.

### Google Search variants

#### G1 — Price comparison / core

- Headlines: `Compare Ticket Prices` · `See 3 Sources Together` · `Check Before You Buy`
- Descriptions: `Compare Ticketmaster, SeatGeek and StubHub in one place before you buy.` / `Spend less time opening tabs. See your ticket options side by side.`
- Landing page: `/dashboard`

#### G2 — Speed / less tab-hopping

- Headlines: `One Search For Ticket Options` · `Compare Before Checkout` · `Stop Opening Four Tabs`
- Descriptions: `Search an event and review ticket options across major sources in one place.` / `Get market context before you choose where to buy.`
- Landing page: `/dashboard`

#### G3 — Trust / all-in context

- Headlines: `Look Beyond The Headline Price` · `Compare The Ticket Market` · `Shop With More Context`
- Descriptions: `Check equivalent event and seat details before comparing ticket prices.` / `Use a second screen before checkout and make the tradeoff deliberately.`
- Landing page: `/compare` only after anonymous-preview QA; otherwise `/dashboard`

#### G4 — NFL seasonal

- Headlines: `Compare NFL Ticket Prices` · `Check 3 Ticket Sources` · `Shop Smarter For Football`
- Descriptions: `Compare NFL ticket options across Ticketmaster, SeatGeek and StubHub in one search.` / `Before kickoff, check the market side by side, then choose where to buy.`
- Landing page: `/tickets/nfl-tickets` if live and current; otherwise `/dashboard`

#### G5 — Feature / watchlist

- Headlines: `Watch Your Event` · `Track Ticket Prices` · `Set A Target Price`
- Descriptions: `Save an event and keep its price context in one place.` / `Use target-price tracking when the account and alert flow are available.`
- Landing page: `/dashboard` only after target-price and alert QA

### Meta variants

#### M1 — Consumer-control / price ceiling

- Primary text: `Pick your ticket ceiling before the countdown clock picks it for you. Compare the same event across major ticket sources, then decide with more context.`
- Headline: `Set Your Ceiling. Compare First.`
- Description: `A calmer way to shop for tickets.`
- CTA: `Learn More` → `/dashboard`

#### M2 — All-in price education

- Primary text: `The headline price is only one part of the decision. Match the event and seat details, inspect the total, and compare before checkout.`
- Headline: `Check The Total Before You Buy`
- Description: `Compare ticket options side by side.`
- CTA: `Learn More` → `/dashboard`

#### M3 — NFL preseason

- Primary text: `Football is back on the calendar. Before buying your team’s tickets, check what the major ticket sites show in one comparison.`
- Headline: `Compare NFL Tickets First`
- Description: `One search. More context.`
- CTA: `Learn More` → `/tickets/nfl-tickets` if QA-approved, else `/dashboard`

### Display / social image concepts

#### D1 — “Four tabs” split-screen

- Visual: Dark navy background; four browser-tab shapes collapse into one clean comparison panel. Blue accent for TicketScan, warning yellow on the words “before checkout.”
- Overlay: `Same event. More context.`
- Supporting copy: `Compare major ticket sources before you choose where to buy.`
- CTA: `Compare tickets` → `/dashboard`
- Test variable: visual concept only; hold copy constant against D2.

#### D2 — Price-ceiling note card

- Visual: Minimal mobile note reading `My max: $___` beside three equal event-source rows; no invented prices or fake savings badge.
- Overlay: `Set your ceiling first.`
- Supporting copy: `Compare the market, check the total, and keep your buying decision yours.`
- CTA: `See how it works` → `/how-it-works`
- Test variable: price-ceiling visual versus comparison-panel visual.

#### D3 — NFL matchup checklist

- Visual: Football ticket silhouette with three checks: `same event`, `same seat type`, `total price`; use an event-neutral composition until a verified matchup is selected.
- Overlay: `Compare before kickoff.`
- Supporting copy: `Check NFL ticket options across major sources in one search.`
- CTA: `Search NFL tickets` → `/dashboard`

## Testing framework

- Test one variable at a time: headline angle first, then description, then image or audience.
- Keep each variant live for a minimum of 3 days or 100 clicks before judging, unless policy, broken tracking, or clear query mismatch requires intervention.
- Primary event sequence: `search_started` → `compare_completed` → `signup_completed` → `watchlist_added`.
- Store `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, landing path, event ID, device, auth state, and experiment assignment through signup.
- Scale a winner only after conversion quality is confirmed; replace a loser with the next angle, not multiple simultaneous changes.

## Competitive ad intelligence

### Google Ads Transparency Center

The public Google Ads Transparency Center is advertiser-first and does not provide a reliable keyword-to-all-advertisers view. No verified SeatGeek, StubHub, Vivid Seats, or TicketScan ad record was available from the accessible search results in this run. This is an observation limitation, not evidence that competitors are inactive. The center’s stated purpose is to show active ads by verified advertiser, format, region, and run date: [Google Ads Transparency Center](https://adstransparency.google.com/?region=anywhere), [Google’s overview](https://blog.google/innovation-and-ai/technology/ads/announcing-the-launch-of-the-new-ads-transparency-center/).

### Positioning observed

- **SeatGeek:** Its August 2026 event page emphasizes Deal Score, price filters, seat clarity, price alerts, and timing guidance. The response is to own the cross-market comparison frame: same event, equivalent seat, and total context. Source: [SeatGeek August tickets](https://seatgeek.com/august-tickets).
- **StubHub:** The most material current trust/price signal is regulatory: the FTC announced a $10 million settlement over allegedly deceptive fee presentation. TicketScan should use transparent, timestamped, all-in comparison education and avoid implying that one marketplace is always cheapest. Source: [FTC press release](https://www.ftc.gov/news-events/news/press-releases/2026/04/stubhub-refunding-10-million-fees-consumers-after-deceptive-ticket-pricing).
- **Vivid Seats:** No live ad copy or landing-page record was verified in this run. Add the advertiser to the next manual Google and Meta library check; do not infer offer, creative, or spend.

### Gaps to counter

1. Competitors make it easy to compare options within their own marketplace; TicketScan can differentiate by comparing across marketplaces.
2. Competitor timing advice is conditional. TicketScan can make the condition explicit: set a ceiling, compare equivalent inventory, and use current data rather than countdown pressure.
3. Fee transparency is a timely trust wedge. Use factual all-in-price education, with source and timestamp on any example.

### Brand-term check

Brand bidding for `ticketscan`, `ticketscan tickets`, and `ticketscan compare` could not be verified without a live Google search-terms or auction-insights export. Queue a low-budget brand-defense test after account connection; do not claim competitor conquesting is active.

## Handoffs

### CRO Agent (Agent 6)

- Remove or soften the anonymous `/compare` login redirect; show a comparison preview before gating save/alerts.
- Make `/dashboard` and `/tickets/nfl-tickets` publicly accessible, current, and aligned to ad intent.
- Preserve event context and UTMs through registration and first watchlist setup.
- Repair `/api/admin/alerts` HTTP 500 and verify target-price persistence plus email delivery.
- Add visible comparison and watchlist labels to EventCard; the current icon treatment is too easy to miss.

### Analytics Agent (Agent 7)

- Instrument and deduplicate `landing_view`, `search_started`, `compare_completed`, `signup_started`, `signup_completed`, `watchlist_added`, `target_price_set`, `alert_delivered`, and `outbound_ticket_click`.
- Persist first-touch and last-touch UTMs through account creation.
- Provide weekly platform/campaign/ad/keyword export with spend, impressions, clicks, conversions, conversion value, CPA, ROAS, Quality Score, and search terms.
- Define whether `compare_completed` or `signup_completed` is the first imported Google Ads primary conversion.

### Social Agent (Agent 3)

Test as paid inputs once tracking is live:

1. `$30.07 vs. $38.19` all-in-total post — verify the example is still current and attach timestamp/source.
2. Price-ceiling post — adapt to M1 and compare against a direct comparison CTA.
3. “5 Signs You’re About to Overpay” carousel — use for Meta engagement/retargeting only after publication and UTM measurement.

Do not boost based on proxy rankings alone; platform analytics were unavailable.

## Launch decision

**Decision: Hold; campaign is not launched.** The new NFL Search campaign and 11 creative variations are ready for account setup, but publishing spend without event tracking and a working landing-page path would make CPA and ROAS unknowable. Re-run this report after one clean attributed day and replace all N/A fields with platform exports.

