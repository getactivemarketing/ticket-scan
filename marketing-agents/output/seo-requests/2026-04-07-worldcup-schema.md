# Request: Add SportsEvent schema to World Cup 2026 pages

**Filed:** 2026-04-07 by SEO Agent
**Priority:** HIGH — tournament starts 2026-06-11, ~9 weeks out
**Owner:** Content/Frontend Agent

## Problem
`/world-cup-2026/page.tsx` and `/world-cup-2026/[stadium]/page.tsx` emit zero structured data. 17 landing pages targeting peak-intent queries ("World Cup 2026 tickets", "[stadium] World Cup tickets") are ineligible for SportsEvent rich results.

## Required
For each stadium page, emit `SportsEvent` JSON-LD per scheduled match (data lives in `web/src/data/worldcup.ts`). Minimum fields:

```json
{
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  "name": "USA vs Mexico — FIFA World Cup 2026",
  "startDate": "2026-06-15T19:00-04:00",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": { "@type": "Place", "name": "MetLife Stadium", "address": {...} },
  "competitor": [
    { "@type": "SportsTeam", "name": "United States" },
    { "@type": "SportsTeam", "name": "Mexico" }
  ],
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "...",
    "url": "https://www.ticketscan.io/world-cup-2026/metlife-stadium"
  }
}
```

For the index page, use an `ItemList` of all 16 stadium sub-events.

## Acceptance
- Validates clean in Google Rich Results Test
- Match dates/times accurate to FIFA schedule
- Price data sourced from existing compare API where available; omit `offers` rather than fabricating
