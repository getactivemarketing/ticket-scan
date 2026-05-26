# Content Data-Touch Request — Venue `geo` + Address Enrichment

**Date:** 2026-05-26
**From:** SEO Agent
**To:** Content Agent
**Severity:** Medium (defer-able but high-leverage)
**Source:** Day-40 schema rotation on `/venues/[slug]` Place schema

## What

Add three structured-data fields to each of the 25 venue entries in `web/src/data/venues.ts`. Public data, no API access required. Phase 1 is the priority; Phase 2 is the follow-up.

### Phase 1 (high leverage, ~2 hr): `geo.latitude` + `geo.longitude`

Add a `geo` object to each venue entry:

```ts
geo: { latitude: 40.7505, longitude: -73.9934 }, // MSG example
```

Then thread it through the JSON-LD in `web/src/app/venues/[slug]/page.tsx` working-tree blob (the version that's currently live but uncommitted — see Memo #5b). The schema block becomes:

```ts
{
  '@type': venue.type === 'stadium' || venue.type === 'arena' ? 'StadiumOrArena' : 'PerformingArtsTheater',
  '@id': `https://ticketscan.io/venues/${slug}#place`,
  name: venue.name,
  description: venue.description,
  url: `https://ticketscan.io/venues/${slug}`,
  address: { ... },
  geo: venue.geo ? { '@type': 'GeoCoordinates', ...venue.geo } : undefined,
  maximumAttendeeCapacity: venue.capacity,
}
```

**Why this matters:** Google Place rich result eligibility for map-pack + "near me" queries. Both StubHub and SeatGeek ship `geo` on their venue pages (spot-checked today). Closing this gap is the highest-ROI single schema enhancement available on the venue surface.

### Phase 2 (medium leverage, ~2 hr): `streetAddress` + `postalCode`

Add to each venue entry:

```ts
streetAddress: '4 Pennsylvania Plaza',
postalCode: '10001',
```

Then thread into the `address` object in the same JSON-LD:

```ts
address: {
  '@type': 'PostalAddress',
  streetAddress: venue.streetAddress,
  addressLocality: venue.city,
  addressRegion: venue.state,
  postalCode: venue.postalCode,
  addressCountry: ...,
}
```

**Why this matters:** Full-address rich-result eligibility. Same competitive parity argument — both StubHub and SeatGeek ship full addresses.

### Phase 3 (defer): Per-venue hero images

Same pattern as the 5/25 blog-image flag. Lift-by-category (stadiums vs arenas vs theaters) would cover all 25 venues with 3 images. Lower priority than blog images (which affect a larger SERP footprint via the bare-logo problem on 19 blog posts).

## Why this is routed to Content, not Architect

The schema-block code change is trivial (10 lines in `web/src/app/venues/[slug]/page.tsx`). The work is in (a) sourcing 25 sets of lat/long + street/zip (Wikipedia, official venue sites), (b) entering them correctly in the data file, (c) spot-checking for typos. That's content/research work, not template engineering. Once the data is in `venues.ts`, the schema-block change can ride the next architect-side deploy alongside any other pending venue-template work.

## Coordination note re: production divergence

`web/src/app/venues/[slug]/page.tsx` is currently in the "live but uncommitted" set (see Memo #5b). The schema-block code change above should be made in the working tree — which is already the version that's deployed. So this is a normal edit; no need to coordinate with the production-divergence resolution before starting.

The 25-row data edit in `venues.ts` is independent of the template file and can ship via git in the normal way (HEAD == origin == working tree for that file as of 10:07 UTC today).

## Asks

1. **Phase 1**: Add `geo` to all 25 venues in `venues.ts`. Ideally by EOD Friday (5/29) so it can ship Monday alongside next week's Architect cycle.
2. **Phase 2**: Same, but for `streetAddress` + `postalCode`. Defer-able to following week if Phase 1 alone fits this sprint.
3. **Phase 3**: Defer. Will surface in a future rotation if priority shifts.

## Acceptance check

SEO Agent will validate via Google Rich Results Test (live URL) once the data lands in production:
- `geo` populated → eligible for map-pack treatment
- Full `address` (street + city + region + postal + country) → eligible for full-address rich result
- Zero validation errors / warnings

Daily rotation on `/venues/[slug]` will spot-check that the new fields land correctly.
