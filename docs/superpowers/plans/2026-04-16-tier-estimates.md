# Tier-Labeled Price Estimates — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add per-tier price estimates (upper/lower/club/floor) to comparison responses, computed by interpolating between each platform's aggregate min/max using each venue's typical pricing pattern. Also tighten event matching so the comparisons attach to the right events.

**Architecture:** Backend gets a new `tierProportionsByVenue.js` data file (mirrors `web/src/data/venues.ts` tier multipliers), an `estimateTierPrices()` helper, and a `resolveVenueSlug()` lookup. These enrich responses from `/api/events/compare`, `/api/prices/history/:eventId`, and `/api/admin/price-history`. Cross-platform event matching (frontend `compare/page.tsx`) tightens to require time-of-day match + bidirectional name match. Backend `deduplicateEvents()` excludes more non-game events.

**Tech Stack:** Node.js (backend), Next.js + React + TypeScript (frontend), no schema change

**Spec:** `docs/superpowers/specs/2026-04-16-tier-estimates-design.md`

---

### Task 1: Create tierProportionsByVenue.js

**Files:**
- Create: `tierProportionsByVenue.js` (project root, alongside `index.js`)

This file mirrors the per-venue tier coverage from `web/src/data/venues.ts`. Each venue lists which tiers exist for it, mapped to the global multipliers.

- [ ] **Step 1: Read the venues data**

Read `web/src/data/venues.ts` to identify:
1. The 24 venue slugs (the keys of the `venues` object — one entry per venue at lines starting `'<slug>': {`)
2. Each venue's `name` field (for the slug-to-name map in Task 2)
3. Each venue's `sections` array — the unique `tier` values across sections tell you which tiers that venue has

The global tier multipliers from `venues.ts:569-575`:
```
floor:  3.0
lower:  1.5
club:   2.0
upper:  1.0
suite:  4.0
```

- [ ] **Step 2: Generate the data using a one-off Node script**

Run this script to extract per-venue tier sets and print the resulting JS object:

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan && node -e "
const fs = require('fs');
const src = fs.readFileSync('web/src/data/venues.ts', 'utf8');

const TIER_MULT = { floor: 3.0, lower: 1.5, club: 2.0, upper: 1.0, suite: 4.0 };

// Match each venue block: '<slug>': { ... sections: [...] ... },
// sections array can span many lines. Use a non-greedy match for the sections content.
const venueRegex = /'([a-z0-9-]+)':\s*\{[\s\S]*?sections:\s*\[([\s\S]*?)\][\s\S]*?\},/g;
const tierRegex = /tier:\s*'(floor|lower|club|upper|suite)'/g;

const result = {};
let m;
while ((m = venueRegex.exec(src)) !== null) {
  const slug = m[1];
  const sectionsBlock = m[2];
  const tiers = new Set();
  let t;
  while ((t = tierRegex.exec(sectionsBlock)) !== null) {
    tiers.add(t[1]);
  }
  if (tiers.size >= 2) {
    const obj = {};
    ['upper', 'lower', 'club', 'floor', 'suite'].forEach(tier => {
      if (tiers.has(tier)) obj[tier] = TIER_MULT[tier];
    });
    result[slug] = obj;
  }
}

console.log('module.exports = ' + JSON.stringify(result, null, 2) + ';');
"
```

Expected: prints a JS object literal with all 24 venue slugs, each mapped to an object of tier→multiplier (only the tiers the venue actually has).

- [ ] **Step 3: Save the output to `tierProportionsByVenue.js`**

Take the output from step 2 and prepend a comment header. The file content should be:

```javascript
// Per-venue tier multipliers, mirrored from web/src/data/venues.ts.
// Used by index.js's estimateTierPrices() to interpolate per-tier prices
// from each platform's aggregate min/max.
//
// IMPORTANT: Keep this file in sync with web/src/data/venues.ts.
// When adding venues or changing tier coverage there, regenerate this file
// using the script in docs/superpowers/plans/2026-04-16-tier-estimates.md Task 1.

module.exports = {
  // ... paste the JSON output from step 2 here, preserving the same structure
};
```

The actual content of the `module.exports` object comes from the script output in step 2 — that's the source of truth. Do not hand-edit it.

- [ ] **Step 4: Verify the file loads correctly**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan && node -e "
const t = require('./tierProportionsByVenue');
const slugs = Object.keys(t);
console.log('Venue count:', slugs.length);
console.log('Sample (msg):', JSON.stringify(t.msg));
console.log('Sample (kia-center):', JSON.stringify(t['kia-center']));
console.log('All slugs:', slugs.join(', '));
"
```

Expected: 24 venues (or close to it — some may have been filtered for having fewer than 2 tiers), each shows tier→multiplier mapping. `msg` and `kia-center` should appear.

- [ ] **Step 5: Commit**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
git add tierProportionsByVenue.js
git commit -m "Add tierProportionsByVenue.js for tier-estimate inference

Mirrors per-venue tier coverage from web/src/data/venues.ts.
Backend reads this to interpolate per-tier prices from each
platform's aggregate min/max. Generated via the script in the
implementation plan; kept manually in sync with venues.ts.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 2: Add estimateTierPrices(), VENUE_NAME_TO_SLUG, resolveVenueSlug() to index.js

**Files:**
- Modify: `index.js` near line 952 (right after the `withFees()` helper added in sub-project B)

- [ ] **Step 1: Locate the insertion point**

Read `index.js` around lines 952-980 to find where the `withFees()` helper ends (look for the last `}` of `function withFees` before `const JWT_SECRET`).

- [ ] **Step 2: Insert the new helpers**

Use the Edit tool. Find this block (the end of the `withFees()` function):

```javascript
function withFees(basePrice, source) {
  if (basePrice == null) return null;
  const key = String(source || '').toLowerCase();
  const fee = PLATFORM_FEES[key] ?? 0;
  return Math.round(parseFloat(basePrice) * (1 + fee) * 100) / 100;
}

const JWT_SECRET = process.env.JWT_SECRET;
```

Replace with:

```javascript
function withFees(basePrice, source) {
  if (basePrice == null) return null;
  const key = String(source || '').toLowerCase();
  const fee = PLATFORM_FEES[key] ?? 0;
  return Math.round(parseFloat(basePrice) * (1 + fee) * 100) / 100;
}

// Per-venue tier multipliers (loaded from tierProportionsByVenue.js)
const TIER_PROPORTIONS_BY_VENUE = require('./tierProportionsByVenue');

// Map of API-returned venue names to our internal slugs.
// Add entries as we identify new venues being tracked. Aliases (e.g. rebrandings
// like Staples → Crypto.com Arena) should both point to the same slug.
const VENUE_NAME_TO_SLUG = {
  'kia center': 'kia-center',
  'amway center': 'kia-center',
  'kaseya center': 'kaseya-center',
  'ftx arena': 'kaseya-center',
  'miami-dade arena': 'kaseya-center',
  'madison square garden': 'msg',
  'msg': 'msg',
  'crypto.com arena': 'crypto-arena',
  'staples center': 'crypto-arena',
  'united center': 'united-center',
  'td garden': 'td-garden',
  'wells fargo center': 'wells-fargo-center',
  'american airlines center': 'american-airlines-center',
  'toyota center': 'toyota-center',
  'footprint center': 'footprint-center',
  'talking stick resort arena': 'footprint-center',
  'chase center': 'chase-center',
  'ball arena': 'ball-arena',
  'pepsi center': 'ball-arena',
  'state farm arena': 'state-farm-arena',
  'philips arena': 'state-farm-arena',
  'barclays center': 'barclays-center',
  'capital one arena': 'capital-one-arena',
  'verizon center': 'capital-one-arena',
  'little caesars arena': 'little-caesars-arena',
  'fiserv forum': 'fiserv-forum',
  'target center': 'target-center',
  'smoothie king center': 'smoothie-king-center',
  'scotiabank arena': 'scotiabank-arena',
  'air canada centre': 'scotiabank-arena',
  't-mobile arena': 't-mobile-arena',
  'climate pledge arena': 'climate-pledge-arena',
  'keyarena': 'climate-pledge-arena',
  'prudential center': 'prudential-center',
};

function resolveVenueSlug(venueName) {
  if (!venueName) return null;
  const key = venueName.toLowerCase().trim();
  return VENUE_NAME_TO_SLUG[key] || null;
}

// Estimate per-tier prices from a platform's aggregate min/max.
// Anchors min→cheapest tier, max→most expensive tier, interpolates the rest
// using the venue's known tier multipliers.
// Returns null for unknown venues or missing data — graceful fallback.
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

  const min = parseFloat(minPrice);
  const max = parseFloat(maxPrice);

  return tiers.reduce((acc, tier) => {
    const t = (proportions[tier] - minMult) / span;
    acc[tier] = Math.round(min + t * (max - min));
    return acc;
  }, {});
}

const JWT_SECRET = process.env.JWT_SECRET;
```

Note: the `VENUE_NAME_TO_SLUG` map above includes common aliases. If a venue has no known alias, only its primary name is listed. The implementer should confirm slugs match the keys in `tierProportionsByVenue.js` from Task 1 — if Task 1 produced a different slug list (e.g. a venue was filtered out), update this map accordingly.

- [ ] **Step 3: Syntax check + sanity test**

```bash
node -c /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/index.js && cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan && node -e "
const t = require('./tierProportionsByVenue');

// Inline copy of the helper for testing without booting the full server
function estimateTierPrices(minPrice, maxPrice, venueSlug) {
  if (!minPrice || !maxPrice || !venueSlug) return null;
  const proportions = t[venueSlug];
  if (!proportions) return null;
  const tiers = Object.keys(proportions).sort((a, b) => proportions[a] - proportions[b]);
  if (tiers.length < 2) return null;
  const minMult = proportions[tiers[0]];
  const maxMult = proportions[tiers[tiers.length - 1]];
  const span = maxMult - minMult;
  if (span === 0) return null;
  const min = parseFloat(minPrice);
  const max = parseFloat(maxPrice);
  return tiers.reduce((acc, tier) => {
    const x = (proportions[tier] - minMult) / span;
    acc[tier] = Math.round(min + x * (max - min));
    return acc;
  }, {});
}

console.log('MSG 75-450:', JSON.stringify(estimateTierPrices(75, 450, 'msg')));
console.log('Unknown:', JSON.stringify(estimateTierPrices(75, 450, 'made-up-arena')));
console.log('Null min:', JSON.stringify(estimateTierPrices(null, 450, 'msg')));
console.log('Same min/max:', JSON.stringify(estimateTierPrices(100, 100, 'msg')));
"
```

Expected output (msg should have at least floor + lower + club + upper based on venues.ts):
- `MSG 75-450:` → object with at least 2 tier keys, e.g. `{"upper":75,"lower":206,"club":300,"floor":450}` (exact values depend on which tiers MSG actually has)
- `Unknown:` → `null`
- `Null min:` → `null`
- `Same min/max:` → all tier values equal to 100

- [ ] **Step 4: Commit**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
git add index.js
git commit -m "Add tier estimation helpers to index.js

Adds:
- TIER_PROPORTIONS_BY_VENUE (loaded from tierProportionsByVenue.js)
- VENUE_NAME_TO_SLUG (API name → internal slug, with aliases)
- resolveVenueSlug(name) — looks up slug from API venue name
- estimateTierPrices(min, max, slug) — interpolates per-tier prices

Returns null for unknown venues/data so callers can render a graceful
fallback to aggregate-only display.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 3: Wire tierEstimates into events/compare endpoint

**Files:**
- Modify: `index.js` lines 1693-1730 (Ticketmaster mapping in `events/compare`)
- Modify: `index.js` lines 1731-1751 (SeatGeek mapping in `events/compare`)

- [ ] **Step 1: Update the Ticketmaster mapping to add tierEstimates**

Find this block in `index.js` (the Ticketmaster mapping that ends with `source: 'Ticketmaster'`):

```javascript
    // Parse Ticketmaster results
    const rawTmEvents = results[0].status === 'fulfilled'
      ? (results[0].value.data._embedded?.events || []).map(e => {
          const min = e.priceRanges?.[0]?.min || null;
          const max = e.priceRanges?.[0]?.max || null;
          const minWithFees = withFees(min, 'ticketmaster');
          const maxWithFees = withFees(max, 'ticketmaster');
          return {
            id: e.id,
            name: e.name,
            date: e.dates.start.localDate,
            time: e.dates.start.localTime || 'TBA',
            venue: e._embedded?.venues?.[0]?.name,
            city: e._embedded?.venues?.[0]?.city?.name,
            minPrice: min,
            maxPrice: max,
            minPriceWithFees: minWithFees,
            maxPriceWithFees: maxWithFees,
            priceRange: e.priceRanges?.[0] ? `$${e.priceRanges[0].min} - $${e.priceRanges[0].max}` : 'N/A',
            priceRangeWithFees: minWithFees && maxWithFees ? `$${minWithFees} - $${maxWithFees}` : 'N/A',
            url: e.url,
            image: e.images?.[0]?.url,
            source: 'Ticketmaster'
          };
        })
      : [];
```

Replace with:

```javascript
    // Parse Ticketmaster results
    const rawTmEvents = results[0].status === 'fulfilled'
      ? (results[0].value.data._embedded?.events || []).map(e => {
          const min = e.priceRanges?.[0]?.min || null;
          const max = e.priceRanges?.[0]?.max || null;
          const minWithFees = withFees(min, 'ticketmaster');
          const maxWithFees = withFees(max, 'ticketmaster');
          const venueName = e._embedded?.venues?.[0]?.name;
          const venueSlug = resolveVenueSlug(venueName);
          return {
            id: e.id,
            name: e.name,
            date: e.dates.start.localDate,
            time: e.dates.start.localTime || 'TBA',
            venue: venueName,
            city: e._embedded?.venues?.[0]?.city?.name,
            minPrice: min,
            maxPrice: max,
            minPriceWithFees: minWithFees,
            maxPriceWithFees: maxWithFees,
            priceRange: e.priceRanges?.[0] ? `$${e.priceRanges[0].min} - $${e.priceRanges[0].max}` : 'N/A',
            priceRangeWithFees: minWithFees && maxWithFees ? `$${minWithFees} - $${maxWithFees}` : 'N/A',
            tierEstimates: estimateTierPrices(minWithFees, maxWithFees, venueSlug),
            url: e.url,
            image: e.images?.[0]?.url,
            source: 'Ticketmaster'
          };
        })
      : [];
```

Note: `tierEstimates` uses the with-fees min/max so the tier values shown to users include estimated fees too — consistent with the rest of the with-fees display.

- [ ] **Step 2: Update the SeatGeek mapping to add tierEstimates**

Find this block in `index.js`:

```javascript
    // Parse SeatGeek results
    const sgEvents = results[1].status === 'fulfilled'
      ? (results[1].value.data.events || []).map(e => ({
          id: String(e.id),
          name: e.title,
          date: e.datetime_local?.split('T')[0],
          time: e.datetime_local?.split('T')[1]?.substring(0, 5) || 'TBA',
          venue: e.venue?.name,
          city: e.venue?.city,
          minPrice: e.stats?.lowest_price || null,
          maxPrice: e.stats?.highest_price || null,
          avgPrice: e.stats?.average_price || null,
          minPriceWithFees: withFees(e.stats?.lowest_price, 'seatgeek'),
          maxPriceWithFees: withFees(e.stats?.highest_price, 'seatgeek'),
          avgPriceWithFees: withFees(e.stats?.average_price, 'seatgeek'),
          listingCount: e.stats?.listing_count || 0,
          url: e.url,
          image: e.performers?.[0]?.image,
          source: 'SeatGeek'
        }))
      : [];
```

Replace with:

```javascript
    // Parse SeatGeek results
    const sgEvents = results[1].status === 'fulfilled'
      ? (results[1].value.data.events || []).map(e => {
          const min = e.stats?.lowest_price || null;
          const max = e.stats?.highest_price || null;
          const minWithFees = withFees(min, 'seatgeek');
          const maxWithFees = withFees(max, 'seatgeek');
          const venueSlug = resolveVenueSlug(e.venue?.name);
          return {
            id: String(e.id),
            name: e.title,
            date: e.datetime_local?.split('T')[0],
            time: e.datetime_local?.split('T')[1]?.substring(0, 5) || 'TBA',
            venue: e.venue?.name,
            city: e.venue?.city,
            minPrice: min,
            maxPrice: max,
            avgPrice: e.stats?.average_price || null,
            minPriceWithFees: minWithFees,
            maxPriceWithFees: maxWithFees,
            avgPriceWithFees: withFees(e.stats?.average_price, 'seatgeek'),
            tierEstimates: estimateTierPrices(minWithFees, maxWithFees, venueSlug),
            listingCount: e.stats?.listing_count || 0,
            url: e.url,
            image: e.performers?.[0]?.image,
            source: 'SeatGeek'
          };
        })
      : [];
```

- [ ] **Step 3: Syntax check**

```bash
node -c /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/index.js
```
Expected: no output.

- [ ] **Step 4: Commit**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
git add index.js
git commit -m "Add tierEstimates to events/compare TM and SG events

Each event now includes tierEstimates: object with per-tier prices
(upper/lower/club/floor) interpolated from minPriceWithFees and
maxPriceWithFees using the venue's known tier multipliers. Returns
null for unknown venues so frontend can render aggregate-only.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 4: Wire tier_estimates into history endpoints

**Files:**
- Modify: `index.js` (`GET /api/prices/history/:eventId` around line 3261)
- Modify: `index.js` (`GET /api/admin/price-history` around line 3225)

- [ ] **Step 1: Update prices/history/:eventId**

The history endpoint needs the venue to compute tier estimates. The venue isn't currently in the response; pull it from watchlist by event_id.

Find this block in `index.js`:

```javascript
app.get('/api/prices/history/:eventId', authenticateToken, async (req, res) => {
  try {
    const { eventId } = req.params;
    const { days = 30 } = req.query;

    const result = await pool.query(`
      SELECT source, min_price, avg_price, max_price, checked_at
      FROM price_history
      WHERE event_id = $1
        AND checked_at > NOW() - INTERVAL '1 day' * $2
      ORDER BY checked_at ASC
    `, [eventId, parseInt(days)]);

    const priceHistory = result.rows.map(row => ({
      ...row,
      min_price_with_fees: withFees(row.min_price, row.source),
      avg_price_with_fees: withFees(row.avg_price, row.source),
      max_price_with_fees: withFees(row.max_price, row.source),
    }));

    res.json({
      success: true,
      eventId,
      count: priceHistory.length,
      priceHistory
    });
  } catch (error) {
    console.error('Price history error:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});
```

Replace with:

```javascript
app.get('/api/prices/history/:eventId', authenticateToken, async (req, res) => {
  try {
    const { eventId } = req.params;
    const { days = 30 } = req.query;

    // Look up venue once for tier estimation
    const venueResult = await pool.query(
      'SELECT venue FROM watchlist WHERE event_id = $1 LIMIT 1',
      [eventId]
    );
    const venueSlug = resolveVenueSlug(venueResult.rows[0]?.venue);

    const result = await pool.query(`
      SELECT source, min_price, avg_price, max_price, checked_at
      FROM price_history
      WHERE event_id = $1
        AND checked_at > NOW() - INTERVAL '1 day' * $2
      ORDER BY checked_at ASC
    `, [eventId, parseInt(days)]);

    const priceHistory = result.rows.map(row => {
      const minWithFees = withFees(row.min_price, row.source);
      const maxWithFees = withFees(row.max_price, row.source);
      return {
        ...row,
        min_price_with_fees: minWithFees,
        avg_price_with_fees: withFees(row.avg_price, row.source),
        max_price_with_fees: maxWithFees,
        tier_estimates: estimateTierPrices(minWithFees, maxWithFees, venueSlug),
      };
    });

    res.json({
      success: true,
      eventId,
      count: priceHistory.length,
      priceHistory
    });
  } catch (error) {
    console.error('Price history error:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});
```

- [ ] **Step 2: Update admin/price-history**

The admin endpoint already joins watchlist for the venue — use it.

Find this block in `index.js`:

```javascript
    const result = await pool.query(query, params);
    const priceHistory = result.rows.map(row => ({
      ...row,
      min_price_with_fees: withFees(row.min_price, row.source),
      avg_price_with_fees: withFees(row.avg_price, row.source),
      max_price_with_fees: withFees(row.max_price, row.source),
    }));
    res.json({ success: true, priceHistory, total: result.rowCount });
```

Replace with:

```javascript
    const result = await pool.query(query, params);
    const priceHistory = result.rows.map(row => {
      const minWithFees = withFees(row.min_price, row.source);
      const maxWithFees = withFees(row.max_price, row.source);
      return {
        ...row,
        min_price_with_fees: minWithFees,
        avg_price_with_fees: withFees(row.avg_price, row.source),
        max_price_with_fees: maxWithFees,
        tier_estimates: estimateTierPrices(minWithFees, maxWithFees, resolveVenueSlug(row.venue)),
      };
    });
    res.json({ success: true, priceHistory, total: result.rowCount });
```

- [ ] **Step 3: Syntax check**

```bash
node -c /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/index.js
```

- [ ] **Step 4: Commit**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
git add index.js
git commit -m "Add tier_estimates to history endpoints

GET /api/prices/history/:eventId now looks up the watchlist venue
and includes tier_estimates per row. GET /api/admin/price-history
uses the joined venue from the existing query. Tier estimates are
computed from with-fees prices for consistency with the comparison UI.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 5: Improve deduplicateEvents with time-of-day + expanded exclusions

**Files:**
- Modify: `index.js` lines 1533-1577 (`deduplicateEvents()` function)

- [ ] **Step 1: Update the exclude patterns and dedup key**

Find this block in `index.js` (the entire `deduplicateEvents()` function):

```javascript
function deduplicateEvents(events) {
  // Patterns to exclude (hospitality packages, reseller listings)
  const excludePatterns = [
    /jernigan/i,
    /hospitality/i,
    /vip package/i,
    /suite/i,
    /premium experience/i,
    /meet & greet/i,
    /meet and greet/i
  ];

  // First, filter out obvious hospitality packages
  const filtered = events.filter(event => {
    const name = event.name || '';
    return !excludePatterns.some(pattern => pattern.test(name));
  });

  // Then deduplicate by venue + date + normalized name
  const seen = new Map();

  return filtered.filter(event => {
    const venue = (event.venue || '').toLowerCase().trim();
    const date = event.date || '';

    // Normalize team names for comparison
    // "Orlando Magic vs. Indiana Pacers" and "Pacers vs Magic" should match
    const normalizedName = normalizeEventName(event.name || '');

    const key = `${venue}|${date}|${normalizedName}`;

    if (seen.has(key)) {
      // If we've seen this event, keep the one with the longer/more official name
      const existing = seen.get(key);
      if ((event.name || '').length > (existing.name || '').length) {
        seen.set(key, event);
        return false; // Will be replaced
      }
      return false;
    }

    seen.set(key, event);
    return true;
  });
}
```

Replace with:

```javascript
function deduplicateEvents(events) {
  // Patterns to exclude: hospitality packages, parking, ancillary events
  const excludePatterns = [
    /jernigan/i,
    /hospitality/i,
    /vip package/i,
    /vip reception/i,
    /suite/i,
    /premium experience/i,
    /meet & greet/i,
    /meet and greet/i,
    /pregame/i,
    /post.?game/i,
    /parking/i,
    /fan (event|experience|fest|zone)/i,
    /q.*&.*a/i,
    /pre.?show/i,
    /after.?party/i,
  ];

  // First, filter out obvious non-game / hospitality packages
  const filtered = events.filter(event => {
    const name = event.name || '';
    return !excludePatterns.some(pattern => pattern.test(name));
  });

  // Then deduplicate by venue + date + time-of-day-bucket + normalized name.
  // Time bucket = floor(hours / 2) so events within ~2 hours collapse together
  // (e.g. 7:30 PM and 8:00 PM bucket the same), but a 5 PM pregame event
  // doesn't collapse with the 7:30 PM main event.
  const seen = new Map();

  return filtered.filter(event => {
    const venue = (event.venue || '').toLowerCase().trim();
    const date = event.date || '';
    const time = event.time || '';
    const timeBucket = (() => {
      const m = time.match(/^(\d{1,2}):/);
      if (!m) return 'unknown';
      return String(Math.floor(parseInt(m[1], 10) / 2));
    })();

    const normalizedName = normalizeEventName(event.name || '');

    const key = `${venue}|${date}|${timeBucket}|${normalizedName}`;

    if (seen.has(key)) {
      const existing = seen.get(key);
      if ((event.name || '').length > (existing.name || '').length) {
        seen.set(key, event);
        return false;
      }
      return false;
    }

    seen.set(key, event);
    return true;
  });
}
```

- [ ] **Step 2: Syntax check**

```bash
node -c /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/index.js
```

- [ ] **Step 3: Commit**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
git add index.js
git commit -m "Tighten deduplicateEvents: exclusions + time-of-day bucket

Expand excludePatterns to drop pregame, post-game, parking, fan
events, Q&A, pre-show, after-party. Add a 2-hour time bucket to the
dedup key so a pregame event at 5 PM doesn't collapse with the main
event at 7:30 PM (the loose collapse meant they would compare wrong).

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 6: Tighten cross-platform event matching in compare page

**Files:**
- Modify: `web/src/app/compare/page.tsx` lines 67-117 (`matchEvents` function)

The cross-platform matching happens on the frontend, not the backend. Currently it matches by date + first-word venue, with no name comparison and no time-of-day check. Tighten it.

- [ ] **Step 1: Read the current matchEvents function**

Read `web/src/app/compare/page.tsx` lines 62-125 to confirm the structure of the `matchEvents` function and what fields are available on each event (id, name, date, time, venue, etc.).

- [ ] **Step 2: Replace the match condition**

Find this block in `web/src/app/compare/page.tsx`:

```tsx
    tmEvents.forEach(tm => {
      // Try to find matching SeatGeek event
      const tmDate = tm.date;
      const tmVenue = tm.venue?.toLowerCase() || '';

      const match = sgEvents.find(sg => {
        if (usedSG.has(sg.id)) return false;
        const sgDate = sg.date;
        const sgVenue = sg.venue?.toLowerCase() || '';

        // Match by date and venue similarity
        const dateMatch = tmDate === sgDate;
        const venueMatch = tmVenue.includes(sgVenue.split(' ')[0]) ||
                          sgVenue.includes(tmVenue.split(' ')[0]) ||
                          tmVenue === sgVenue;

        return dateMatch && venueMatch;
      });
```

Replace with:

```tsx
    // Helper: extract a normalized core name (drop common suffixes/punctuation)
    const normalizeName = (name: string): string => {
      return name.toLowerCase()
        .replace(/[.,'']/g, '')
        .replace(/\s+/g, ' ')
        .trim();
    };

    // Helper: parse "HH:MM" time string into hours-since-midnight, or null
    const parseTime = (t?: string): number | null => {
      if (!t) return null;
      const m = t.match(/^(\d{1,2}):(\d{2})/);
      if (!m) return null;
      return parseInt(m[1], 10) + parseInt(m[2], 10) / 60;
    };

    tmEvents.forEach(tm => {
      const tmDate = tm.date;
      const tmVenue = tm.venue?.toLowerCase() || '';
      const tmName = normalizeName(tm.name || '');
      const tmTime = parseTime(tm.time);

      const match = sgEvents.find(sg => {
        if (usedSG.has(sg.id)) return false;
        const sgDate = sg.date;
        const sgVenue = sg.venue?.toLowerCase() || '';
        const sgName = normalizeName(sg.name || '');
        const sgTime = parseTime(sg.time);

        // Date must match exactly
        if (tmDate !== sgDate) return false;

        // Venue must match — full equality OR mutual substring (longer than 3 chars)
        const venueMatch =
          tmVenue === sgVenue ||
          (tmVenue.length > 3 && sgVenue.includes(tmVenue)) ||
          (sgVenue.length > 3 && tmVenue.includes(sgVenue));
        if (!venueMatch) return false;

        // Time-of-day must match within 2 hours (when both have a time)
        if (tmTime !== null && sgTime !== null) {
          if (Math.abs(tmTime - sgTime) > 2) return false;
        }

        // Name must match: exact OR mutual substring on the longer-of-two strings
        if (tmName === sgName) return true;
        if (tmName.length > 4 && sgName.includes(tmName)) return true;
        if (sgName.length > 4 && tmName.includes(sgName)) return true;

        return false;
      });
```

- [ ] **Step 3: Build to verify TypeScript**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/web && npm run build 2>&1 | tail -20
```
Expected: build succeeds.

- [ ] **Step 4: Commit**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
git add web/src/app/compare/page.tsx
git commit -m "Tighten cross-platform event matching in compare page

Match condition now requires:
1. Date equality (unchanged)
2. Venue: full match OR mutual substring of length > 3
   (the old 'first-word match' produced too many false positives)
3. Time-of-day within 2 hours (when both have times)
4. Name: exact match OR mutual substring of length > 4

Trades a few false negatives (events with weirdly different
metadata) for far fewer false positives. Tier estimates need
trustworthy matches to be meaningful.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 7: Render tier breakdown on compare page

**Files:**
- Modify: `web/src/app/compare/page.tsx`

Add a small tier breakdown section under each platform card when `tierEstimates` is present.

- [ ] **Step 1: Update the TypeScript interface**

Find the interface containing `minPriceWithFees`, `maxPriceWithFees`. Add:
```typescript
  tierEstimates?: { upper?: number; lower?: number; club?: number; floor?: number; suite?: number } | null;
```

- [ ] **Step 2: Add a TierBreakdown component near the top of the file**

After the existing imports / type definitions and before the main page component, add:

```tsx
const TIER_LABELS: Record<string, string> = {
  upper: 'Upper bowl',
  lower: 'Lower bowl',
  club: 'Club',
  floor: 'Floor',
  suite: 'Suite',
};

function TierBreakdown({ tiers }: { tiers: { upper?: number; lower?: number; club?: number; floor?: number; suite?: number } | null | undefined }) {
  if (!tiers) return null;
  const ordered = ['upper', 'lower', 'club', 'floor', 'suite'].filter(t => tiers[t as keyof typeof tiers] != null);
  if (ordered.length === 0) return null;

  return (
    <div className="mt-2 pt-2 border-t border-gray-200">
      <div className="text-xs text-gray-500 mb-1" title="Estimates inferred from this venue's typical pricing pattern — not live per-section data.">
        Estimated by section ⓘ
      </div>
      <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 text-xs">
        {ordered.map(t => (
          <div key={t} className="flex justify-between">
            <span className="text-gray-600">{TIER_LABELS[t]}</span>
            <span className="font-medium">~${tiers[t as keyof typeof tiers]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Render TierBreakdown in each platform card**

Find the matched-event detail card section (around lines 405-410, where `formatPrice(event.seatgeek?.minPriceWithFees ...)` is rendered). After the price display, add:

```tsx
<TierBreakdown tiers={event.seatgeek?.tierEstimates} />
```

Find the corresponding Ticketmaster section (around line 367, where `event.ticketmaster?.priceRangeWithFees` is rendered). After it, add:

```tsx
<TierBreakdown tiers={event.ticketmaster?.tierEstimates} />
```

(There may be multiple display sites — only add `TierBreakdown` to the main card displays, not to the brief summary rows. Read the surrounding JSX to identify the right insertion points. The matched-event detail card and the unmatched-events single-platform cards are good candidates; the small comparison-summary rows at the bottom are not.)

- [ ] **Step 4: Update the Pro Tip banner**

Find the Pro Tip banner copy (added in sub-project B):

```tsx
              <p className="text-sm text-amber-700">
                Prices include estimated platform fees: Ticketmaster ~27%, StubHub ~24%, SeatGeek ~20%.
                SeatGeek aggregates prices from 60+ resale sites. Final fees vary slightly at checkout
                based on event, seat, and delivery.
              </p>
```

Replace with:

```tsx
              <p className="text-sm text-amber-700">
                Prices include estimated platform fees: Ticketmaster ~27%, StubHub ~24%, SeatGeek ~20%.
                Section estimates (upper/lower/club/floor) are inferred from each venue's typical pricing
                pattern — not live per-section data. Final fees vary slightly at checkout based on event,
                seat, and delivery.
              </p>
```

- [ ] **Step 5: Build**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/web && npm run build 2>&1 | tail -20
```

- [ ] **Step 6: Commit**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
git add web/src/app/compare/page.tsx
git commit -m "Render tier breakdown on compare page

Small TierBreakdown component shows per-tier estimates (upper/lower/
club/floor/suite) in each platform card when tierEstimates is present.
For unknown venues the component renders nothing, preserving the
existing aggregate-only display. Pro Tip banner updated to mention
the section-estimate inference.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 8: Render tier breakdown on event detail page

**Files:**
- Modify: `web/src/app/event/[id]/page.tsx`

- [ ] **Step 1: Update the PriceHistoryItem interface**

Find the `PriceHistoryItem` interface near the top of the file. Add:
```typescript
  tier_estimates?: { upper?: number; lower?: number; club?: number; floor?: number; suite?: number } | null;
```

- [ ] **Step 2: Add a TierBreakdown component**

Add this near the top of the component file (after imports, before the main component):

```tsx
const TIER_LABELS: Record<string, string> = {
  upper: 'Upper bowl',
  lower: 'Lower bowl',
  club: 'Club',
  floor: 'Floor',
  suite: 'Suite',
};

function TierBreakdown({ tiers, source }: {
  tiers: { upper?: number; lower?: number; club?: number; floor?: number; suite?: number } | null | undefined;
  source?: string;
}) {
  if (!tiers) return null;
  const ordered = ['upper', 'lower', 'club', 'floor', 'suite'].filter(t => tiers[t as keyof typeof tiers] != null);
  if (ordered.length === 0) return null;

  return (
    <div className="mt-3 p-3 bg-gray-50 rounded-md">
      <div className="text-xs text-gray-500 mb-2">
        Estimated by section{source ? ` (${source})` : ''}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
        {ordered.map(t => (
          <div key={t} className="flex flex-col">
            <span className="text-xs text-gray-500">{TIER_LABELS[t]}</span>
            <span className="font-medium">~${tiers[t as keyof typeof tiers]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Find a suitable place to render the most recent tier estimates**

Read the event detail page to find where the price history table is rendered. Above or below the table (whichever fits the existing layout), add a section showing the tier estimates from the most recent `priceHistory` row that has them.

Insert this component logic where appropriate (typically near the recommendation/stats area or above the chart):

```tsx
{(() => {
  // Find the most recent row per source that has tier_estimates
  const latestBySource = new Map<string, PriceHistoryItem>();
  for (const item of [...priceHistory].reverse()) {
    if (item.tier_estimates && !latestBySource.has(item.source)) {
      latestBySource.set(item.source, item);
    }
  }
  if (latestBySource.size === 0) return null;
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">Estimated section pricing</h3>
      <p className="text-xs text-gray-500 mb-3">
        Inferred from this venue's typical pricing pattern. Not live per-section data.
      </p>
      {Array.from(latestBySource.entries()).map(([source, item]) => (
        <div key={source}>
          <TierBreakdown tiers={item.tier_estimates} source={source} />
        </div>
      ))}
    </div>
  );
})()}
```

(Note: `priceHistory` is the existing variable that holds the API response rows. Adjust the variable name if the file uses a different name.)

- [ ] **Step 4: Build**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/web && npm run build 2>&1 | tail -20
```

- [ ] **Step 5: Commit**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
git add web/src/app/event/\[id\]/page.tsx
git commit -m "Render tier breakdown on event detail page

Show per-tier price estimates from the most recent price_history
row per source, in a new 'Estimated section pricing' section.
Hidden entirely when no tier estimates are present (unknown venues).

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 9: Add FAQ entry for section estimates

**Files:**
- Modify: `web/src/app/faq/page.tsx`

- [ ] **Step 1: Insert the new FAQ after the existing fee FAQ**

Find this block in `web/src/app/faq/page.tsx`:

```tsx
      {
        q: 'Do prices include fees?',
        a: 'Yes — we show the estimated all-in price including each platform\'s service fees. Estimates: Ticketmaster ~27%, StubHub ~24%, SeatGeek ~20%. Base prices are shown as a smaller line beneath. Actual fees vary at checkout based on event, seat, and delivery method, but our estimates are based on each platform\'s published fee structure.',
      },
```

Add a new entry directly after it (before the closing `]` of `questions`):

```tsx
      {
        q: 'Do prices include fees?',
        a: 'Yes — we show the estimated all-in price including each platform\'s service fees. Estimates: Ticketmaster ~27%, StubHub ~24%, SeatGeek ~20%. Base prices are shown as a smaller line beneath. Actual fees vary at checkout based on event, seat, and delivery method, but our estimates are based on each platform\'s published fee structure.',
      },
      {
        q: 'How do you estimate prices by section?',
        a: 'Public ticket APIs don\'t expose per-section pricing, so we estimate it from each venue\'s typical pricing pattern (upper/lower/club/floor). Estimates are most accurate at the 24 major venues we have detailed data for (MSG, Crypto.com Arena, Chase Center, etc.). For other venues, we show the aggregate price range without section estimates. Live concerts with general admission floors may price differently than the standard pattern — always verify section pricing on the platform before purchase.',
      },
```

- [ ] **Step 2: Build**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/web && npm run build 2>&1 | tail -20
```

- [ ] **Step 3: Commit**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
git add web/src/app/faq/page.tsx
git commit -m "Add FAQ entry explaining section price estimates

Honest disclosure that section estimates are inferred from venue
pricing patterns, not live per-section API data. Notes the
24-venue coverage limitation.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 10: End-to-end smoke test

**Files:** None (verification only)

- [ ] **Step 1: Start the backend locally**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan && lsof -ti:3000 | xargs -r kill -9 2>/dev/null
ADMIN_SECRET="$ADMIN_KEY" PORT=3000 node index.js > /tmp/ticketscan-test.log 2>&1 &
echo "PID: $!"
sleep 2
```

Wait for "Server running" or check `/tmp/ticketscan-test.log` to confirm startup.

- [ ] **Step 2: Hit events/compare and verify tierEstimates**

```bash
curl -s 'http://localhost:3000/api/events/compare?city=NYC&keyword=knicks' | python3 -c "
import sys, json
d = json.load(sys.stdin)
tm = d.get('results', {}).get('ticketmaster', [])
print('TM events:', len(tm))
known_venue_with_tiers = 0
unknown_venue = 0
for e in tm[:10]:
    venue = e.get('venue')
    tiers = e.get('tierEstimates')
    if tiers:
        known_venue_with_tiers += 1
        print(f'  Known venue {venue!r}: {tiers}')
    elif e.get('minPrice') and e.get('maxPrice'):
        unknown_venue += 1
        print(f'  Unknown venue {venue!r}: tierEstimates=None (expected fallback)')
print()
print(f'known venues with tiers: {known_venue_with_tiers}, unknown venues: {unknown_venue}')
"
```

Expected: at least one known-venue event (e.g. Madison Square Garden) shows a `tierEstimates` object with multiple tiers. Unknown venues show `null`.

- [ ] **Step 3: Hit admin/price-history and check tier_estimates**

```bash
curl -s 'http://localhost:3000/api/admin/price-history?limit=10' \
  -H 'x-admin-key: $ADMIN_KEY' | python3 -c "
import sys, json
d = json.load(sys.stdin)
ph = d.get('priceHistory', [])
print('Rows:', len(ph))
for row in ph[:5]:
    print(f'  source={row.get(\"source\")} venue={row.get(\"venue\")!r} tier_estimates={row.get(\"tier_estimates\")}')
"
```

Expected: each row has a `tier_estimates` field. For known-venue rows it's an object; for unknown venues it's null. (Will be empty if local DB has no price_history rows yet — that's OK, the `tier_estimates` key just needs to be in the response shape.)

- [ ] **Step 4: Verify deduplicateEvents excludes the new patterns**

The new exclusions only matter for actual API responses with parking/pregame events. Local quick test instead:

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan && node -e "
const fs = require('fs');
const code = fs.readFileSync('index.js', 'utf8');
// Smoke test: confirm the new patterns are present
const required = ['pregame', 'post.?game', 'parking', 'fan (event|experience|fest|zone)', 'q.*&.*a'];
for (const p of required) {
  if (!code.includes(p)) {
    console.log('MISSING pattern:', p);
    process.exit(1);
  }
}
console.log('All new exclude patterns present');
"
```

Expected: `All new exclude patterns present`.

- [ ] **Step 5: Build the frontend**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/web && npm run build 2>&1 | tail -10
```

Expected: build succeeds.

- [ ] **Step 6: Stop the backend**

```bash
lsof -ti:3000 | xargs -r kill -9 2>/dev/null
echo "backend stopped"
```
