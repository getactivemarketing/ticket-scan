# Sub-project C: Tier-labeled price estimates + better event matching

## Goal

Replace the current "lowest price across whatever sections happen to be listed" comparison with per-tier price estimates (upper/lower/club/floor) inferred from each venue's typical pricing pattern. Also tighten cross-platform event matching so the comparisons attach to the right events.

## Background

The original price-accuracy audit recommended "section-aware comparisons" — comparing $189 lower bowl on StubHub against $156 lower bowl on SeatGeek. A follow-up API audit found that none of the three platforms (Ticketmaster, SeatGeek, StubHub) expose per-section or per-listing data through their public APIs. They only return aggregate min/max/avg.

Rather than drop the feature or pay for a per-listing API, this sub-project delivers tier estimates inferred from each venue's known pricing pattern (already encoded in `web/src/data/venues.ts` for 24 venues). Estimates are clearly labeled as estimates, and venues without tier data fall back to the existing aggregate display.

Event matching is improved in the same scope because tier estimates are only useful if attached to the correct cross-platform event match.

## 1. Tier estimation logic

### Helper function

Add `estimateTierPrices(minPrice, maxPrice, venueSlug)` to `index.js`. It returns either `null` (unknown venue or missing data) or an object like `{ upper: 95, lower: 143, club: 190, floor: 285 }`.

```javascript
// Anchor min→cheapest tier, max→most expensive tier, interpolate the rest.
function estimateTierPrices(minPrice, maxPrice, venueSlug) {
  if (!minPrice || !maxPrice || !venueSlug) return null;
  const proportions = TIER_PROPORTIONS_BY_VENUE[venueSlug];
  if (!proportions) return null;

  const tiers = Object.keys(proportions).sort((a, b) => proportions[a] - proportions[b]);
  if (tiers.length < 2) return null;

  const minMult = proportions[tiers[0]];
  const maxMult = proportions[tiers[tiers.length - 1]];
  const span = maxMult - minMult;
  if (span === 0) return null;

  return tiers.reduce((acc, tier) => {
    const t = (proportions[tier] - minMult) / span;
    acc[tier] = Math.round(parseFloat(minPrice) + t * (parseFloat(maxPrice) - parseFloat(minPrice)));
    return acc;
  }, {});
}
```

### Tier proportions data

Backend needs the tier multipliers from `web/src/data/venues.ts`. Two ways to get them:

- Duplicate the data into a new `tierProportions.js` file in the backend root. Pro: clean separation, no cross-folder dependency. Con: drift risk.
- Read `web/src/data/venues.ts` from disk at server start and parse it. Pro: single source of truth. Con: parsing TS from JS is fragile.

**Decision: duplicate the data.** Create `tierProportionsByVenue.js` in the project root with the per-venue multipliers extracted from `venues.ts`. A comment in both files notes that they must stay in sync. This is one of those cases where DRY-cost is lower than parsing-cost.

The extracted shape:
```javascript
// tierProportionsByVenue.js
// Mirrors tierPricing data from web/src/data/venues.ts.
// Update both files together when adding venues or tuning multipliers.
module.exports = {
  'msg': { upper: 1.0, lower: 1.5, club: 2.0, floor: 3.0 },
  'crypto-com-arena': { upper: 1.0, lower: 1.5, club: 2.0, floor: 3.0 },
  // ... all 24 venues with their actual tier multipliers
};
```

If a venue in `venues.ts` doesn't define `tierPricing` per-venue, it inherits the global default at `venues.ts:569-574`. Use those defaults for all 24 venues unless a venue overrides.

## 2. Where tier estimates appear in API responses

Three endpoints add a `tierEstimates` (camelCase) field on each event/row:

### `GET /api/events/compare`
Each TM and SG event in the `results` array gains:
- `tierEstimates`: object or null
  - Computed from the event's `minPrice` and `maxPrice` and the venue (need to map `event.venue` name to a slug — see Section 5)

Frontend uses this to render the tier breakdown card.

### `GET /api/prices/history/:eventId`
Each row in `priceHistory` gains:
- `tier_estimates` (snake_case to match the row): object or null
  - Computed from `min_price` and `max_price` of that row and the event's venue (looked up from watchlist by event_id)

### `GET /api/admin/price-history`
Same `tier_estimates` field per row, for admin debugging.

## 3. Event matching improvements

Three fixes to `deduplicateEvents()` (around `index.js:1511-1579`) and the cross-platform match logic in `GET /api/events/compare`:

### 3a. Time-of-day match within 2 hours

Currently `deduplicateEvents` matches by name + venue + date. A "Knicks pregame, 5:00 PM" can match a "Knicks at MSG, 7:30 PM" since they share date.

Add time-of-day comparison: if both events have a `time` (Ticketmaster's `dates.start.localTime`, SeatGeek's `datetime_local` time portion), reject the match when the times differ by more than 2 hours. If one event lacks a time, fall back to current name+venue+date logic.

### 3b. Expand exclusion patterns

The existing `excludePatterns` regex (around `index.js:1512-1521`) excludes things like "hospitality" and "vip package." Expand to:

```javascript
const excludePatterns = [
  /jernigan/i,
  /hospitality/i,
  /vip package/i,
  /suite/i,
  /pregame/i,
  /postgame/i,
  /parking/i,
  /meet.*greet/i,
  /fan (event|experience|fest)/i,
  /q.*&.*a/i,
  /vip reception/i,
  /pre.?show/i,
  /after.?party/i,
];
```

These currently pollute matches and confuse tier estimates.

### 3c. Bidirectional name matching in `events/compare`

The current cross-platform match (in `events/compare`) likely uses one-directional substring search. Tighten to require either:
- Exact normalized name match, OR
- Substring match in both directions (TM normalized name contains SG core teams AND SG normalized name contains TM core teams)

AND require venue + date + time-of-day match within 2 hours (per 3a).

This means more rejected matches but each reported match is trustworthy enough to attach a tier comparison to.

## 4. Frontend changes

### Compare page (`web/src/app/compare/page.tsx`)

Each platform card already shows the with-fees price (from sub-project B). Below that, when `tierEstimates` is present, render a small breakdown:

```
Ticketmaster
$241 with fees · Base $189
─────────────────────
Estimated by section:
  Upper bowl  ~$95
  Lower bowl  ~$143
  Club        ~$190
  Floor       ~$285
```

When `tierEstimates` is null, render nothing extra (existing aggregate display only).

A small info icon next to "Estimated by section:" on hover/tap shows: "Estimates inferred from this venue's typical pricing pattern — not live per-section data."

### Event detail page (`web/src/app/event/[id]/page.tsx`)

Add a tier breakdown section above or near the existing price table. Shows the most recent `tier_estimates` per platform. If multiple platforms have tier estimates, show them side-by-side for visual comparison.

### Pro Tip banner update (`web/src/app/compare/page.tsx`)

Current copy already mentions fees (from sub-project B). Add a third sentence:
> "Section estimates are based on each venue's typical pricing distribution, not live per-section data."

### FAQ entry (`web/src/app/faq/page.tsx`)

Add a new entry after the existing fee FAQ:
```typescript
{
  q: 'How do you estimate prices by section?',
  a: 'Public ticket APIs don\'t expose per-section pricing, so we estimate it from each venue\'s typical pricing pattern (upper/lower/club/floor). Estimates are most accurate at the 24 major venues we have detailed data for (MSG, Crypto.com Arena, Chase Center, etc.). For other venues, we show the aggregate price range without section estimates. Live concerts with general admission floors may price differently than the standard pattern — always verify section pricing on the platform before purchase.',
},
```

## 5. Venue name → slug resolution

`venues.ts` keys venues by slug (e.g., `msg`, `crypto-com-arena`). API responses give venue *names* (`Madison Square Garden`, `Crypto.com Arena`). Need a name-to-slug resolver.

Add a helper in `index.js`:
```javascript
// Build name→slug map at server startup from tier proportions data.
// Maintained alongside venues.ts entries.
const VENUE_NAME_TO_SLUG = {
  'madison square garden': 'msg',
  'msg': 'msg',
  'crypto.com arena': 'crypto-com-arena',
  'staples center': 'crypto-com-arena',  // pre-rename alias
  // ... entries for each of the 24 venues + common aliases
};

function resolveVenueSlug(venueName) {
  if (!venueName) return null;
  return VENUE_NAME_TO_SLUG[venueName.toLowerCase().trim()] || null;
}
```

The resolver is the single point of failure for matching API venue names to our tier data. Document common aliases (rebrandings like Staples → Crypto.com).

For watchlist-stored events (used in `prices/history` enrichment), the venue name comes from the `watchlist.venue` column — same resolver works.

## 6. What this does NOT do

- Doesn't fetch real per-section data from any API (verified not available)
- Doesn't change the cron tracking schema (estimates computed at response time)
- Doesn't auto-populate `venues.ts` from API data (manual data entry remains)
- Doesn't show tier estimates for unknown venues (graceful fallback to aggregate)
- Doesn't replace the with-fees display from sub-project B (additive)
- Doesn't add a tier-over-time chart (would need stored tier estimates, out of scope)

## 7. Files to modify

| File | Change |
|------|--------|
| `tierProportionsByVenue.js` (new) | Duplicate tier multipliers from venues.ts for backend use |
| `index.js` | Add `estimateTierPrices()` helper + `resolveVenueSlug()` + `VENUE_NAME_TO_SLUG` map |
| `index.js` | Add `tierEstimates` to `GET /api/events/compare` event objects |
| `index.js` | Add `tier_estimates` to `GET /api/prices/history/:eventId` rows |
| `index.js` | Add `tier_estimates` to `GET /api/admin/price-history` rows |
| `index.js` | Update `deduplicateEvents()`: time-of-day match + expanded exclusions |
| `index.js` | Update `events/compare` cross-platform matching: bidirectional substring + time-of-day |
| `web/src/app/compare/page.tsx` | Render tier breakdown when `tierEstimates` present |
| `web/src/app/event/[id]/page.tsx` | Render tier breakdown section |
| `web/src/app/faq/page.tsx` | Add "How do you estimate prices by section?" FAQ |

## 8. Risks

- **Tier estimates may mislead for atypical pricing patterns.** General admission concerts, festivals, and theaters don't follow the upper/lower/club/floor pattern. Mitigation: prominent "Estimated" label, FAQ explanation, only show for known major-venue arenas/stadiums where the pattern holds.
- **Stricter event matching trades false positives for false negatives.** Some valid matches will be rejected (e.g., a TM event listed as "Knicks v Celtics" and SG as "Celtics @ Knicks" with slightly different venue strings). False negatives are safer than false positives — no data shown vs wrong data shown.
- **VENUE_NAME_TO_SLUG drift.** Platforms occasionally rename venues (Staples → Crypto.com). The map will need updates. Mitigation: a script that logs unresolved venue names for the top-N events tracked, so we can catch new aliases.
- **24-venue coverage.** Many users will hit untracked venues and see only aggregate prices. Acceptable for v1; the FAQ explains it. Future work: expand `venues.ts` based on actual user traffic.

## 9. Verification

After deploy:
1. `curl 'https://api/events/compare?city=NYC&keyword=knicks'` → response includes `tierEstimates` object on TM and SG events at known venues (e.g., MSG).
2. Same call for an unknown venue (e.g., a small theater) → `tierEstimates` is null on those events.
3. Open `/compare` for NYC + Knicks → tier breakdown card visible per platform.
4. Open the event detail page for a tracked MSG event → tier breakdown section visible.
5. Trigger admin price-track and confirm `tier_estimates` field present on each row in the response.
6. Verify excluded events (search a venue with parking listings) → parking events no longer appear in matched results.
7. Confirm time-of-day filter: if a venue has both an early afternoon and evening event, they appear as separate matches in `/api/events/compare`.
