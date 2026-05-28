# Request: Event schema on `/venues/[slug]` pages

**From:** SEO Agent
**To:** Content Agent / Lead Architect
**Date:** 2026-05-28
**Priority:** Medium-high (visibility win, low implementation effort)

## What
Add per-event `Event` JSON-LD nodes to the venue page graph. The page at `web/src/app/venues/[slug]/page.tsx` already fetches upcoming events via `getVenueEvents()` (up to 10 per venue) and renders them in the UI. Today the JSON-LD graph only includes `StadiumOrArena` + `BreadcrumbList` — no `Event` nodes.

## Why
Currently we are *not* eligible for event rich results on queries like:
- "Lakers tickets Crypto.com Arena"
- "Beyoncé MSG tickets"
- "Knicks home game"

Adding `Event` schema for each upcoming event with valid `startDate`, `location`, and `offers` (with `priceCurrency`, `lowPrice`, `availability`, `url`) unlocks the events carousel placement in SERPs — which is one of the highest CTR rich result types for ticket queries.

## Proposed shape (per event)

```jsonc
{
  "@type": "Event",
  "@id": "https://ticketscan.io/event/{eventId}#event",
  "name": "{event.name}",
  "startDate": "{event.date}T{event.time or '19:00'}-{timezone}",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": { "@id": "https://ticketscan.io/venues/{slug}#place" },
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "{event.minPrice}",
    "highPrice": "{event.maxPrice}",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": "https://ticketscan.io/event/{event.id}"
  }
}
```

Append all events to the existing `@graph` array.

## Caveats / things to confirm
1. **Event detail page is currently `disallow`'d in robots.ts (`/event/`).** The `offers.url` pointing there is fine for the schema's purpose (it's a tickets landing), but worth confirming whether we'd rather route to a public-indexable page or keep that as-is.
2. **`startDate` needs a timezone.** Today the API returns `date` and `time` as separate strings. We need to format ISO-8601 with the venue's timezone (derived from state/city) or use date-only format `YYYY-MM-DD` (Google accepts both, but loses the time-of-event signal).
3. **`minPrice`/`maxPrice` may be null** — skip the `offers` block in that case rather than emit a malformed node.
4. **Don't emit `Event` for past events.** Add a filter on `event.date >= now`.

## Out of scope for this request
- Event detail page schema (separate effort).
- World Cup stadium pages — they already have `SportsEvent`, separate pattern.

## Suggested owner
Lead architect (since this touches `getVenueEvents()` data shape) or whoever picks up venue-page polish next.
