# TicketScan content performance — week of October 5, 2026

## Executive result

No defensible traffic or conversion ranking can be produced this week. The October 5 tracking validation found GTM present but no verified events for page views, signups, watchlist adds, newsletter subscriptions, onsale views, or outbound ticket clicks. The admin API exposes user and watchlist counts but not pageviews, channels, sessions, or conversion attribution. Drip statistics are also empty, and `/api/admin/alerts` returns HTTP 500.

This is a measurement gap, not evidence that any page is a top or bottom performer.

## Top 5 pages by traffic and conversion

| Rank | Page | Traffic | Conversion | Status / next action |
|---|---|---:|---:|---|
| — | Not reportable | — | — | Add analytics events and an aggregate export before ranking |
| — | Not reportable | — | — | Do not infer traffic from sitemap presence or admin watchlist counts |
| — | Not reportable | — | — | Do not call a watchlist item a price-tracking conversion |
| — | Not reportable | — | — | Repair outbound-click attribution |
| — | Not reportable | — | — | Re-run after seven days of clean telemetry |

## Candidate pages for immediate review

These are editorial priorities based on verified freshness and seasonal relevance, not measured winners:

1. `/blog/how-ticket-presales-work` — already drafted October 5; publish after final source and product-claim review.
2. `/venues/yankee-stadium` — postseason relevance; refresh proposal exists at `content/refresh-proposals/2026-10-02-yankee-stadium.md`.
3. `/venues/msg` — NBA opening-week relevance; refresh proposal exists at `content/refresh-proposals/2026-10-03-msg.md`.
4. `/onsales` — high-intent surface; verify current onsale/presale labels and timestamp rendering.
5. `/world-cup-2026` — maintain as evergreen reference, but do not frame the tournament as upcoming in October 2026.

## Bottom 5 pages needing attention

“Bottom” cannot be established without pageviews, engagement, and conversions. The following are the five highest-risk areas for review:

| Priority | Area | Evidence | Action |
|---|---|---|---|
| 1 | All pages with old price-tracking language | Product status says tracking has been down since July 24 | Search and replace only after review; use event discovery, onsale, and venue wording |
| 2 | `/compare` | Tracking validation marks comparison conversion unavailable; product status says price comparison is not working | Remove promotional dependency; route users to event discovery until repaired |
| 3 | `/watchlist` | Watchlist is valid for saving events, but it must not be described as price tracking | Clarify “save event and review onsale details” in public copy |
| 4 | `/venues/yankee-stadium` | Current copy contains a broad lowest-price claim; refresh proposal is ready | Apply the sourced proposal manually after review |
| 5 | `/venues/msg` | Current copy uses “tracks” language and lacks current entry guidance | Apply the sourced proposal manually after review |

## What is working qualitatively

- The presale guide has a clear, defensible use case and links to official Ticketmaster guidance.
- The venue refresh process now produces source-backed proposals instead of editing live data automatically.
- Current editorial opportunities line up with real calendar moments: NFL Week 5, early NHL season, NBA opening week, and postseason baseball.
- The best differentiation against competitor guides is neutral preparation and venue-specific utility, not marketplace-specific “best deal” claims.

## Measurement actions

1. Emit normalized events after successful actions: `page_view`, `search_submit`, `onsale_view`, `signup_complete`, `watchlist_add`, `newsletter_subscribe`, and `outbound_ticket_click`.
2. Persist first-touch and last-touch UTM parameters, landing page, and referrer under the consent policy.
3. Export daily page, session, channel, signup, watchlist, newsletter, and outbound-click aggregates.
4. Repair `/api/admin/alerts`; add delivery, open, click, and bounce telemetry for email.
5. Re-run this report after seven days of data and rank by sessions, engaged sessions, signup rate, watchlist-add rate, and outbound-click rate.

## Provisional content decisions

- **Publish:** presale guide, after final fact check.
- **Refresh:** Yankee Stadium and MSG proposals.
- **Create:** October sports calendar and all-in checkout checklist.
- **Hold:** any asset whose core promise depends on price tracking, price history, alerts, or buy timing predictions.
- **Do not kill pages based on this report:** there is no traffic evidence.

## Evidence

- `marketing-agents/output/analytics/tracking-validation-2026-10-05.md`
- `docs/HANDOFF.md`
- `marketing-agents/PRODUCT-STATUS.md`
