# Fee Estimates Per Platform — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Surface estimated all-in price (base + platform fees) as the primary number across the app — comparison UI, recommendations, alerts, and history.

**Architecture:** Single `PLATFORM_FEES` constant + `withFees(basePrice, source)` helper at the top of `index.js`. All price-reading endpoints add `*_with_fees` fields at response time (no schema change). Frontend displays with-fees as primary, base as small subtext.

**Tech Stack:** Node.js (backend), Next.js + React + TypeScript (frontend), PostgreSQL (no schema change)

**Spec:** `docs/superpowers/specs/2026-04-16-fee-estimates-design.md`

---

### Task 1: Add PLATFORM_FEES constant and withFees() helper

**Files:**
- Modify: `index.js` near line 951 (after `STUBHUB_API_KEY` declaration, before `JWT_SECRET`)

This is the foundation — all subsequent tasks use this helper.

- [ ] **Step 1: Locate insertion point**

Read `index.js` lines 947-955 to confirm the structure:
```javascript
const TICKETMASTER_API_KEY = process.env.TICKETMASTER_API_KEY || '';
const SEATGEEK_CLIENT_ID = process.env.SEATGEEK_CLIENT_ID || '';
// (blank or comment)
const STUBHUB_APP_KEY = process.env.STUBHUB_APP_KEY || '';
const STUBHUB_API_KEY = process.env.STUBHUB_API_KEY || '';
const JWT_SECRET = process.env.JWT_SECRET;
```

- [ ] **Step 2: Insert the constant and helper**

Using the Edit tool, find this exact line in `index.js`:

```javascript
const STUBHUB_API_KEY = process.env.STUBHUB_API_KEY || '';
const JWT_SECRET = process.env.JWT_SECRET;
```

Replace it with:

```javascript
const STUBHUB_API_KEY = process.env.STUBHUB_API_KEY || '';

// Estimated all-in service fees by platform.
// Sources: TicketScan blog "Ticketmaster vs SeatGeek" (Apr 2026), public published fee structures.
// Conservative midpoints — actual fees vary by event and state.
// Update once or twice a year as platforms adjust.
const PLATFORM_FEES = {
  ticketmaster: 0.27,  // 15-25% service fee + facility charge
  stubhub: 0.24,       // ~24% all-in service fee
  seatgeek: 0.20,      // 10-20% service fee
};

function withFees(basePrice, source) {
  if (basePrice == null) return null;
  const key = String(source || '').toLowerCase();
  const fee = PLATFORM_FEES[key] ?? 0;
  return Math.round(parseFloat(basePrice) * (1 + fee) * 100) / 100;
}

const JWT_SECRET = process.env.JWT_SECRET;
```

The helper handles three cases defensively:
- `null`/`undefined` price → returns `null` (price columns can be null)
- Unknown source → returns base price unchanged (safe default for new platforms)
- String prices from PostgreSQL DECIMAL → parsed via `parseFloat`

The `.toLowerCase()` matters because `events/compare` returns sources like `"Ticketmaster"` (capitalized) while the cron and DB store `"ticketmaster"` (lowercase).

- [ ] **Step 3: Syntax check**

Run: `node -c /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/index.js`
Expected: no output (valid syntax).

- [ ] **Step 4: Quick sanity test**

Run inline:
```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan && node -e "
const PLATFORM_FEES = { ticketmaster: 0.27, stubhub: 0.24, seatgeek: 0.20 };
function withFees(basePrice, source) {
  if (basePrice == null) return null;
  const key = String(source || '').toLowerCase();
  const fee = PLATFORM_FEES[key] ?? 0;
  return Math.round(parseFloat(basePrice) * (1 + fee) * 100) / 100;
}
console.log('TM 100:', withFees(100, 'ticketmaster'));   // 127
console.log('SH 100:', withFees(100, 'stubhub'));        // 124
console.log('SG 100:', withFees(100, 'seatgeek'));       // 120
console.log('TM null:', withFees(null, 'ticketmaster')); // null
console.log('Unknown:', withFees(100, 'vividseats'));    // 100
console.log('Capitalized:', withFees(100, 'Ticketmaster')); // 127
"
```
Expected output:
```
TM 100: 127
SH 100: 124
SG 100: 120
TM null: null
Unknown: 100
Capitalized: 127
```

- [ ] **Step 5: Commit**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
git add index.js
git commit -m "Add PLATFORM_FEES constant and withFees() helper

Foundation for sub-project B (fee estimates). Single source of truth
for platform service fee percentages. Helper handles null prices,
unknown sources, string-typed DECIMALs, and capitalization variants.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 2: Add with-fees fields to price history endpoint

**Files:**
- Modify: `index.js` lines 3261-3284 (`GET /api/prices/history/:eventId`)

- [ ] **Step 1: Update the response to enrich each row**

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

    res.json({
      success: true,
      eventId,
      count: result.rows.length,
      priceHistory: result.rows
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

- [ ] **Step 2: Syntax check**

Run: `node -c /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/index.js`
Expected: no output.

- [ ] **Step 3: Commit**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
git add index.js
git commit -m "Add *_with_fees fields to GET /api/prices/history/:eventId

Each row in the priceHistory response now includes
min_price_with_fees, avg_price_with_fees, max_price_with_fees
computed via withFees(). Base prices stay in the response for
transparency.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 3: Add with-fees fields to price trend endpoint

**Files:**
- Modify: `index.js` lines 3287-3348 (`GET /api/prices/trend/:eventId`)

- [ ] **Step 1: Update sources rows and trend calculation**

Find this block in `index.js`:

```javascript
    // Calculate trend
    const currentPrices = result.rows;
    const previousPrices = previousResult.rows;

    let trend = { direction: 'stable', percentChange: 0 };

    if (currentPrices.length > 0 && previousPrices.length > 0) {
      const currentMin = Math.min(...currentPrices.map(p => parseFloat(p.current_min)));
      const previousMin = Math.min(...previousPrices.map(p => parseFloat(p.previous_min)));

      if (previousMin > 0) {
        const change = ((currentMin - previousMin) / previousMin * 100);
        trend = {
          direction: change > 1 ? 'up' : change < -1 ? 'down' : 'stable',
          percentChange: Math.round(change * 10) / 10,
          currentMinPrice: currentMin,
          previousMinPrice: previousMin
        };
      }
    }

    res.json({
      success: true,
      eventId,
      trend,
      sources: currentPrices
    });
```

Replace with:

```javascript
    // Calculate trend (using with-fees prices for consistency with UI)
    const currentPrices = result.rows;
    const previousPrices = previousResult.rows;

    let trend = { direction: 'stable', percentChange: 0 };

    if (currentPrices.length > 0 && previousPrices.length > 0) {
      const currentMinWithFees = Math.min(
        ...currentPrices.map(p => withFees(p.current_min, p.source))
      );
      const previousMinWithFees = Math.min(
        ...previousPrices.map(p => withFees(p.previous_min, p.source))
      );

      if (previousMinWithFees > 0) {
        const change = ((currentMinWithFees - previousMinWithFees) / previousMinWithFees * 100);
        trend = {
          direction: change > 1 ? 'up' : change < -1 ? 'down' : 'stable',
          percentChange: Math.round(change * 10) / 10,
          currentMinPrice: currentMinWithFees,
          previousMinPrice: previousMinWithFees
        };
      }
    }

    const sourcesWithFees = currentPrices.map(row => ({
      ...row,
      current_min_with_fees: withFees(row.current_min, row.source),
      current_avg_with_fees: withFees(row.current_avg, row.source),
    }));

    res.json({
      success: true,
      eventId,
      trend,
      sources: sourcesWithFees
    });
```

- [ ] **Step 2: Syntax check**

Run: `node -c /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/index.js`
Expected: no output.

- [ ] **Step 3: Commit**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
git add index.js
git commit -m "Use with-fees prices in trend calculation and sources

Trend currentMinPrice/previousMinPrice now reflect all-in prices.
Sources array gets current_min_with_fees and current_avg_with_fees
fields per row.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 4: Use with-fees in buy recommendation endpoint

**Files:**
- Modify: `index.js` lines 3351-3461 (`GET /api/prices/recommendation/:eventId`)

The recommendation algorithm compares current price to lowest/avg/highest recorded and to the user's target. All comparisons should use with-fees values so the algorithm matches what the user sees in the UI.

The DB queries currently aggregate base prices without source info, which is wrong for fee math. Need to add source to the queries and apply fees per row before aggregating.

- [ ] **Step 1: Replace the entire endpoint**

Find this block in `index.js`:

```javascript
app.get('/api/prices/recommendation/:eventId', authenticateToken, async (req, res) => {
  try {
    const { eventId } = req.params;

    // Get event info and price statistics
    const eventInfo = await pool.query(
      'SELECT event_name, event_date, target_price FROM watchlist WHERE event_id = $1 LIMIT 1',
      [eventId]
    );

    const stats = await pool.query(`
      SELECT
        MIN(min_price) as lowest_ever,
        MAX(min_price) as highest_ever,
        AVG(min_price) as average_price
      FROM price_history
      WHERE event_id = $1
    `, [eventId]);

    const currentPrice = await pool.query(`
      SELECT min_price FROM price_history
      WHERE event_id = $1
      ORDER BY checked_at DESC
      LIMIT 1
    `, [eventId]);

    const event = eventInfo.rows[0];
    const priceStats = stats.rows[0];
    const current = currentPrice.rows[0]?.min_price;

    if (!current || !priceStats.lowest_ever) {
      return res.json({
        success: true,
        eventId,
        recommendation: {
          action: 'hold',
          confidence: 'low',
          reason: 'Not enough price history yet. Check back soon.',
          stats: null
        }
      });
    }

    const lowestEver = parseFloat(priceStats.lowest_ever);
    const highestEver = parseFloat(priceStats.highest_ever);
    const avgPrice = parseFloat(priceStats.average_price);
    const currentMin = parseFloat(current);

    // Calculate days until event
    let daysUntilEvent = null;
    if (event?.event_date) {
      daysUntilEvent = Math.ceil((new Date(event.event_date) - new Date()) / (1000 * 60 * 60 * 24));
    }

    // Recommendation logic
    let action = 'hold';
    let confidence = 'medium';
    let reason = 'Prices are within normal range.';

    if (currentMin <= lowestEver * 1.05) {
      action = 'buy_now';
      confidence = 'high';
      reason = 'Price is at or near the lowest recorded!';
    } else if (daysUntilEvent !== null && daysUntilEvent <= 3) {
      action = 'buy_now';
      confidence = 'medium';
      reason = 'Event is very soon - prices typically rise last minute.';
    } else if (daysUntilEvent !== null && daysUntilEvent <= 7) {
      action = 'buy_now';
      confidence = 'low';
      reason = 'Event is within a week. Consider buying soon.';
    } else if (currentMin >= avgPrice * 1.2) {
      action = 'wait';
      confidence = 'medium';
      reason = 'Current price is 20%+ above average. Wait for a drop.';
    } else if (currentMin >= highestEver * 0.95) {
      action = 'wait';
      confidence = 'high';
      reason = 'Price is near the highest recorded. Wait for better deals.';
    }

    // Check against target price
    if (event?.target_price && currentMin <= parseFloat(event.target_price)) {
      action = 'buy_now';
      confidence = 'high';
      reason = `Price is at or below your target of $${event.target_price}!`;
    }

    res.json({
      success: true,
      eventId,
      eventName: event?.event_name,
      recommendation: {
        action,
        confidence,
        reason,
        stats: {
          currentPrice: currentMin,
          lowestRecorded: lowestEver,
          highestRecorded: highestEver,
          averagePrice: Math.round(avgPrice * 100) / 100,
          daysUntilEvent,
          targetPrice: event?.target_price ? parseFloat(event.target_price) : null
        }
      }
    });
  } catch (error) {
    console.error('Recommendation error:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});
```

Replace with:

```javascript
app.get('/api/prices/recommendation/:eventId', authenticateToken, async (req, res) => {
  try {
    const { eventId } = req.params;

    // Get event info
    const eventInfo = await pool.query(
      'SELECT event_name, event_date, target_price FROM watchlist WHERE event_id = $1 LIMIT 1',
      [eventId]
    );

    // Pull all price history rows with source so we can apply fees per row.
    // Aggregating before fees would be wrong because each platform has a
    // different fee multiplier.
    const allRows = await pool.query(`
      SELECT min_price, source, checked_at
      FROM price_history
      WHERE event_id = $1
      ORDER BY checked_at DESC
    `, [eventId]);

    const event = eventInfo.rows[0];
    const rows = allRows.rows;

    if (rows.length === 0) {
      return res.json({
        success: true,
        eventId,
        recommendation: {
          action: 'hold',
          confidence: 'low',
          reason: 'Not enough price history yet. Check back soon.',
          stats: null
        }
      });
    }

    // Compute with-fees price for every row, then aggregate
    const withFeesPrices = rows
      .map(r => withFees(r.min_price, r.source))
      .filter(p => p != null);

    if (withFeesPrices.length === 0) {
      return res.json({
        success: true,
        eventId,
        recommendation: {
          action: 'hold',
          confidence: 'low',
          reason: 'Not enough price history yet. Check back soon.',
          stats: null
        }
      });
    }

    const lowestEverWithFees = Math.min(...withFeesPrices);
    const highestEverWithFees = Math.max(...withFeesPrices);
    const avgPriceWithFees = withFeesPrices.reduce((a, b) => a + b, 0) / withFeesPrices.length;
    // rows is ordered DESC by checked_at, so first row is most recent
    const currentMinWithFees = withFees(rows[0].min_price, rows[0].source);

    // Also compute base aggregates for transparency in stats response
    const basePrices = rows.map(r => parseFloat(r.min_price)).filter(p => !isNaN(p));
    const lowestEverBase = Math.min(...basePrices);
    const highestEverBase = Math.max(...basePrices);
    const avgPriceBase = basePrices.reduce((a, b) => a + b, 0) / basePrices.length;
    const currentMinBase = parseFloat(rows[0].min_price);

    // Calculate days until event
    let daysUntilEvent = null;
    if (event?.event_date) {
      daysUntilEvent = Math.ceil((new Date(event.event_date) - new Date()) / (1000 * 60 * 60 * 24));
    }

    // Recommendation logic — operates on with-fees prices
    let action = 'hold';
    let confidence = 'medium';
    let reason = 'Prices are within normal range.';

    if (currentMinWithFees <= lowestEverWithFees * 1.05) {
      action = 'buy_now';
      confidence = 'high';
      reason = 'Price is at or near the lowest recorded!';
    } else if (daysUntilEvent !== null && daysUntilEvent <= 3) {
      action = 'buy_now';
      confidence = 'medium';
      reason = 'Event is very soon - prices typically rise last minute.';
    } else if (daysUntilEvent !== null && daysUntilEvent <= 7) {
      action = 'buy_now';
      confidence = 'low';
      reason = 'Event is within a week. Consider buying soon.';
    } else if (currentMinWithFees >= avgPriceWithFees * 1.2) {
      action = 'wait';
      confidence = 'medium';
      reason = 'Current price is 20%+ above average. Wait for a drop.';
    } else if (currentMinWithFees >= highestEverWithFees * 0.95) {
      action = 'wait';
      confidence = 'high';
      reason = 'Price is near the highest recorded. Wait for better deals.';
    }

    // Target price comparison: target is treated as the all-in price the
    // user is willing to pay, so we compare it against currentMinWithFees.
    if (event?.target_price && currentMinWithFees <= parseFloat(event.target_price)) {
      action = 'buy_now';
      confidence = 'high';
      reason = `Price is at or below your target of $${event.target_price}!`;
    }

    res.json({
      success: true,
      eventId,
      eventName: event?.event_name,
      recommendation: {
        action,
        confidence,
        reason,
        stats: {
          // With-fees primary
          currentPrice: currentMinWithFees,
          lowestRecorded: lowestEverWithFees,
          highestRecorded: highestEverWithFees,
          averagePrice: Math.round(avgPriceWithFees * 100) / 100,
          // Base prices for transparency
          currentPriceBase: currentMinBase,
          lowestRecordedBase: lowestEverBase,
          highestRecordedBase: highestEverBase,
          averagePriceBase: Math.round(avgPriceBase * 100) / 100,
          daysUntilEvent,
          targetPrice: event?.target_price ? parseFloat(event.target_price) : null
        }
      }
    });
  } catch (error) {
    console.error('Recommendation error:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});
```

- [ ] **Step 2: Syntax check**

Run: `node -c /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/index.js`
Expected: no output.

- [ ] **Step 3: Commit**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
git add index.js
git commit -m "Use with-fees prices in buy recommendation algorithm

Pull all price_history rows with source, compute fees per row, then
aggregate (avoids the bug of averaging mixed-fee base prices). All
algorithm thresholds (lowest * 1.05, avg * 1.2, etc.) now operate on
all-in prices. stats response includes both with-fees primary fields
and *Base counterparts for transparency.

target_price is treated as the all-in price the user is willing to
pay, matching what they see in the UI.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 5: Add with-fees fields to watchlist/with-prices endpoint

**Files:**
- Modify: `index.js` lines 3464-3540 (`GET /api/watchlist/with-prices`)

- [ ] **Step 1: Read the current endpoint to find the return shape**

Read `index.js` lines 3517-3535 to see the exact `return { ... }` block inside the `Promise.all` map. The current shape includes `current_min_price`, `current_max_price`, `source`, `last_checked`, `percent_change`, `direction`.

- [ ] **Step 2: Update the return shape and percent_change calc**

Find this block in `index.js`:

```javascript
      const current = priceChange.rows[0]?.current_price;
      const previous = priceChange.rows[0]?.previous_price;

      let percentChange = null;
      let direction = 'stable';
      if (current && previous) {
        percentChange = Math.round(((current - previous) / previous * 100) * 10) / 10;
        direction = percentChange > 1 ? 'up' : percentChange < -1 ? 'down' : 'stable';
      }

      return {
        ...item,
        current_min_price: latestPrice.rows[0]?.min_price || null,
        current_max_price: latestPrice.rows[0]?.max_price || null,
        source: latestPrice.rows[0]?.source || null,
        last_checked: latestPrice.rows[0]?.checked_at || null,
        percent_change: percentChange,
```

Replace with:

```javascript
      const current = priceChange.rows[0]?.current_price;
      const previous = priceChange.rows[0]?.previous_price;
      const latestSource = latestPrice.rows[0]?.source || null;

      // Use with-fees prices for percent_change so it matches UI display
      const currentWithFees = withFees(current, latestSource);
      const previousWithFees = withFees(previous, latestSource);

      let percentChange = null;
      let direction = 'stable';
      if (currentWithFees && previousWithFees) {
        percentChange = Math.round(((currentWithFees - previousWithFees) / previousWithFees * 100) * 10) / 10;
        direction = percentChange > 1 ? 'up' : percentChange < -1 ? 'down' : 'stable';
      }

      return {
        ...item,
        current_min_price: latestPrice.rows[0]?.min_price || null,
        current_max_price: latestPrice.rows[0]?.max_price || null,
        current_min_price_with_fees: withFees(latestPrice.rows[0]?.min_price, latestSource),
        current_max_price_with_fees: withFees(latestPrice.rows[0]?.max_price, latestSource),
        source: latestSource,
        last_checked: latestPrice.rows[0]?.checked_at || null,
        percent_change: percentChange,
```

- [ ] **Step 3: Syntax check**

Run: `node -c /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/index.js`
Expected: no output.

- [ ] **Step 4: Commit**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
git add index.js
git commit -m "Add with-fees fields to watchlist/with-prices endpoint

Each watchlist item gains current_min_price_with_fees and
current_max_price_with_fees. percent_change uses with-fees prices
on both sides so it matches what the UI displays.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 6: Add with-fees fields to events/compare endpoint

**Files:**
- Modify: `index.js` lines 1656-1751 (`GET /api/events/compare`)

This endpoint doesn't read from `price_history` — it pulls live from Ticketmaster and SeatGeek APIs. The `source` values returned are `"Ticketmaster"` and `"SeatGeek"` (capitalized). The `withFees()` helper handles capitalization, so it just works.

- [ ] **Step 1: Update the Ticketmaster mapping to include with-fees fields**

Find this block in `index.js`:

```javascript
    // Parse Ticketmaster results
    const rawTmEvents = results[0].status === 'fulfilled'
      ? (results[0].value.data._embedded?.events || []).map(e => ({
          id: e.id,
          name: e.name,
          date: e.dates.start.localDate,
          time: e.dates.start.localTime || 'TBA',
          venue: e._embedded?.venues?.[0]?.name,
          city: e._embedded?.venues?.[0]?.city?.name,
          minPrice: e.priceRanges?.[0]?.min || null,
          maxPrice: e.priceRanges?.[0]?.max || null,
          priceRange: e.priceRanges?.[0] ? `$${e.priceRanges[0].min} - $${e.priceRanges[0].max}` : 'N/A',
          url: e.url,
          image: e.images?.[0]?.url,
          source: 'Ticketmaster'
        }))
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

- [ ] **Step 2: Update the SeatGeek mapping**

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

- [ ] **Step 3: Syntax check**

Run: `node -c /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/index.js`
Expected: no output.

- [ ] **Step 4: Commit**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
git add index.js
git commit -m "Add with-fees fields to events/compare endpoint

Both Ticketmaster and SeatGeek mapped events now include
minPriceWithFees, maxPriceWithFees (and avgPriceWithFees for SG).
TM also gets priceRangeWithFees as a pre-formatted display string.
Frontend will use these for the primary comparison display.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 7: Add with-fees fields to admin price-history endpoint

**Files:**
- Modify: `index.js` lines 3225-3256 (`GET /api/admin/price-history`)

- [ ] **Step 1: Update the response to enrich rows**

Find this block in `index.js`:

```javascript
    const result = await pool.query(query, params);
    res.json({ success: true, priceHistory: result.rows, total: result.rowCount });
```

Replace with:

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

- [ ] **Step 2: Syntax check**

Run: `node -c /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/index.js`
Expected: no output.

- [ ] **Step 3: Commit**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
git add index.js
git commit -m "Add with-fees fields to admin price-history endpoint

Each row gains min_price_with_fees, avg_price_with_fees,
max_price_with_fees for admin debugging visibility.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 8: Update price drop alert logic to compare against with-fees

**Files:**
- Modify: `index.js` lines 2996-3039 (`checkPriceAlerts()` function)
- Modify: `index.js` line 461+ (`sendPriceDropEmail()` function — add base price arg)

The cron passes the `currentMinPrice` (base, no source info) to `checkPriceAlerts`. We need to know the source to apply fees correctly. Update the call site in the cron to pass source, and the function signature to accept it.

- [ ] **Step 1: Look at the cron call sites**

Read `index.js` lines 3092-3094 to see the current call:
```javascript
      // Check for price alerts if we have a price
      if (lowestPrice) {
        await checkPriceAlerts(event.event_id, lowestPrice);
        alertsChecked++;
      }
```

The `lowestPrice` here is the base price from whichever platform won. We need to track which source produced it.

- [ ] **Step 2: Track lowest source in the cron loop**

Find this block in `index.js` (the `trackWatchlistPrices()` cron loop, after Task A's StubHub block was added):

```javascript
    for (const event of events) {
      let lowestPrice = null;
      console.log(`\n📍 Tracking: ${event.event_name} (${event.event_id})`);
```

Replace with:

```javascript
    for (const event of events) {
      let lowestPrice = null;
      let lowestSource = null;
      console.log(`\n📍 Tracking: ${event.event_name} (${event.event_id})`);
```

Then find each `lowestPrice` update in the loop. There are three. Update each to also track the source.

For Ticketmaster, find:
```javascript
        tracked++;
        lowestPrice = tmPrice.minPrice;
      }
```
Replace with:
```javascript
        tracked++;
        lowestPrice = tmPrice.minPrice;
        lowestSource = tmPrice.source;
      }
```

For SeatGeek, find:
```javascript
        if (!lowestPrice || sgPrice.minPrice < lowestPrice) {
          lowestPrice = sgPrice.minPrice;
        }
      }
```
Replace with:
```javascript
        if (!lowestPrice || sgPrice.minPrice < lowestPrice) {
          lowestPrice = sgPrice.minPrice;
          lowestSource = sgPrice.source;
        }
      }
```

For StubHub (added in Task A's deployment), find:
```javascript
        if (!lowestPrice || shPrice.minPrice < lowestPrice) {
          lowestPrice = shPrice.minPrice;
        }
      }
```
Replace with:
```javascript
        if (!lowestPrice || shPrice.minPrice < lowestPrice) {
          lowestPrice = shPrice.minPrice;
          lowestSource = shPrice.source;
        }
      }
```

Then update the call site:
```javascript
      // Check for price alerts if we have a price
      if (lowestPrice) {
        await checkPriceAlerts(event.event_id, lowestPrice);
        alertsChecked++;
      }
```
Replace with:
```javascript
      // Check for price alerts if we have a price
      if (lowestPrice) {
        await checkPriceAlerts(event.event_id, lowestPrice, lowestSource);
        alertsChecked++;
      }
```

- [ ] **Step 3: Update checkPriceAlerts() to use source for fees**

Find this block in `index.js`:

```javascript
async function checkPriceAlerts(eventId, currentMinPrice) {
  try {
    // Get all users watching this event with a target price
    const watchlistResult = await pool.query(`
      SELECT w.id as watchlist_id, w.user_id, w.event_name, w.event_date, w.target_price, u.email
      FROM watchlist w
      JOIN users u ON w.user_id = u.id
      WHERE w.event_id = $1
        AND w.target_price IS NOT NULL
        AND w.target_price >= $2
        AND w.event_date > NOW()
    `, [eventId, currentMinPrice]);

    for (const item of watchlistResult.rows) {
      // Check if we already sent an alert for this price point
      const existingAlert = await pool.query(`
        SELECT id FROM price_alerts
        WHERE watchlist_id = $1 AND triggered_price <= $2
        AND sent_at > NOW() - INTERVAL '24 hours'
      `, [item.watchlist_id, currentMinPrice]);

      if (existingAlert.rows.length === 0) {
        // Send email alert
        const sent = await sendPriceDropEmail(
          item.email,
          item.event_name,
          currentMinPrice,
          item.target_price,
          item.event_date
        );

        if (sent) {
          // Record the alert
          await pool.query(`
            INSERT INTO price_alerts (user_id, watchlist_id, event_id, triggered_price)
            VALUES ($1, $2, $3, $4)
          `, [item.user_id, item.watchlist_id, eventId, currentMinPrice]);
        }
      }
    }
  } catch (error) {
    console.error('Price alert check error:', error.message);
  }
}
```

Replace with:

```javascript
async function checkPriceAlerts(eventId, currentMinPrice, source) {
  try {
    // Compare with-fees price against the user's target.
    // The user's target is treated as the all-in price they're willing to pay.
    const currentMinWithFees = withFees(currentMinPrice, source);
    if (currentMinWithFees == null) return;

    const watchlistResult = await pool.query(`
      SELECT w.id as watchlist_id, w.user_id, w.event_name, w.event_date, w.target_price, u.email
      FROM watchlist w
      JOIN users u ON w.user_id = u.id
      WHERE w.event_id = $1
        AND w.target_price IS NOT NULL
        AND w.target_price >= $2
        AND w.event_date > NOW()
    `, [eventId, currentMinWithFees]);

    for (const item of watchlistResult.rows) {
      // Check if we already sent an alert for this with-fees price point
      const existingAlert = await pool.query(`
        SELECT id FROM price_alerts
        WHERE watchlist_id = $1 AND triggered_price <= $2
        AND sent_at > NOW() - INTERVAL '24 hours'
      `, [item.watchlist_id, currentMinWithFees]);

      if (existingAlert.rows.length === 0) {
        // Send email alert with both base and with-fees prices for transparency
        const sent = await sendPriceDropEmail(
          item.email,
          item.event_name,
          currentMinWithFees,
          item.target_price,
          item.event_date,
          currentMinPrice,
          source
        );

        if (sent) {
          // Record the alert using the with-fees price (matches what the user saw)
          await pool.query(`
            INSERT INTO price_alerts (user_id, watchlist_id, event_id, triggered_price)
            VALUES ($1, $2, $3, $4)
          `, [item.user_id, item.watchlist_id, eventId, currentMinWithFees]);
        }
      }
    }
  } catch (error) {
    console.error('Price alert check error:', error.message);
  }
}
```

- [ ] **Step 4: Update sendPriceDropEmail signature to accept base price + source**

Read `index.js` line 461 to see the current signature and the email body.

Find this line in `index.js`:

```javascript
async function sendPriceDropEmail(userEmail, eventName, currentPrice, targetPrice, eventDate) {
```

Replace with:

```javascript
async function sendPriceDropEmail(userEmail, eventName, currentPrice, targetPrice, eventDate, basePrice = null, source = null) {
```

The new `basePrice` and `source` args default to null so any other callers (if any) still work. The function uses these to add a small line in the email body showing the base price and platform.

After the signature change, find the email body inside this function (the HTML or text content sent to users). Look for where `currentPrice` is rendered. After that line, insert:

```javascript
  const feeNote = (basePrice && source)
    ? `<p style="font-size: 12px; color: #666; margin-top: 8px;">All-in price including estimated ${source} fees. Base ticket price: $${basePrice}.</p>`
    : '';
```

Then add `${feeNote}` after the price display in the HTML template. The exact placement depends on the email template structure — read lines 461-540 to find the right spot, and add the fee note line right after the price headline.

- [ ] **Step 5: Syntax check**

Run: `node -c /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/index.js`
Expected: no output.

- [ ] **Step 6: Commit**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
git add index.js
git commit -m "Compare price alerts against with-fees prices

Track lowestSource in cron loop so checkPriceAlerts can apply the
right fee multiplier. Alert triggers when with-fees price drops below
the user's target_price (which is treated as the all-in number they're
willing to pay). Email includes both the base and the all-in price
plus the source platform for transparency.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 9: Update compare page UI to show with-fees as primary

**Files:**
- Modify: `web/src/app/compare/page.tsx`

The compare page currently shows `formatPrice(event.seatgeek?.minPrice)` and `event.ticketmaster.priceRange` in several places. Switch all primary displays to with-fees, with base as small subtext.

- [ ] **Step 1: Update the EventResult type interface**

Find this block at `web/src/app/compare/page.tsx` lines 13-22 (or thereabouts — search for the `EventResult` or similar interface):

```typescript
  minPrice?: number | null;
  maxPrice?: number | null;
  ...
  priceRange?: string;
```

Add the with-fees fields. The exact interface name and full surrounding shape depends on the file — read lines 1-50 first to see the existing interfaces.

For each of the existing interfaces that include `minPrice` or `priceRange`, add:
```typescript
  minPriceWithFees?: number | null;
  maxPriceWithFees?: number | null;
  avgPriceWithFees?: number | null;
  priceRangeWithFees?: string;
```

- [ ] **Step 2: Update the parseMinPrice helper to use the new field**

Find at `web/src/app/compare/page.tsx:127`:
```typescript
const parseMinPrice = (priceRange?: string): number | null => {
  if (!priceRange) return null;
  const match = priceRange.match(/\$(\d+)/);
```

Look for everywhere `parseMinPrice(tm.priceRange)` is called (lines 86, 326). Where the goal is to compute the "winning platform" for the savings badge, switch the inputs to with-fees:

At line 86:
```typescript
        const tmMin = parseMinPrice(tm.priceRange);
        const sgMin = match.minPrice || null;
```
Replace with:
```typescript
        const tmMin = tm.minPriceWithFees ?? parseMinPrice(tm.priceRangeWithFees);
        const sgMin = match.minPriceWithFees ?? null;
```

At line 326:
```typescript
                    const tmPrice = event.ticketmaster ? parseMinPrice(event.ticketmaster.priceRange) : null;
                    const sgPrice = event.seatgeek?.minPrice || null;
```
Replace with:
```typescript
                    const tmPrice = event.ticketmaster
                      ? (event.ticketmaster.minPriceWithFees ?? parseMinPrice(event.ticketmaster.priceRangeWithFees))
                      : null;
                    const sgPrice = event.seatgeek?.minPriceWithFees ?? null;
```

- [ ] **Step 3: Update price displays to show with-fees primary, base subtext**

There are 5 price display sites in this file (lines 367, 405-408, 460, 472, 505, 517). Each follows a pattern like:

```tsx
<span>{event.ticketmaster.priceRange || 'Price N/A'}</span>
```
or
```tsx
<span className="font-bold text-green-600">{formatPrice(event.seatgeek?.minPrice)}</span>
```

For each one, replace the single price display with a stacked display:

For Ticketmaster (`event.ticketmaster.priceRange` displays at lines 367, 460, 472):
```tsx
<div className="flex flex-col">
  <span className="font-bold text-green-600">
    {event.ticketmaster.priceRangeWithFees || event.ticketmaster.priceRange || 'Price N/A'}
  </span>
  <span className="text-xs text-gray-500">
    Base: {event.ticketmaster.priceRange || 'N/A'} (~27% fees)
  </span>
</div>
```

For SeatGeek (`formatPrice(event.seatgeek?.minPrice)` displays at lines 405-408, 505):
```tsx
<div className="flex flex-col">
  <span className="font-bold text-green-600">
    {formatPrice(event.seatgeek?.minPriceWithFees)}
    {event.seatgeek?.maxPriceWithFees && (
      <span> - {formatPrice(event.seatgeek.maxPriceWithFees)}</span>
    )}
  </span>
  <span className="text-xs text-gray-500">
    Base: {formatPrice(event.seatgeek?.minPrice)} (~20% fees)
  </span>
</div>
```

For the generic `event.minPrice` and `event.priceRange` cases (lines 472, 517) where source isn't known, just show with-fees if available, else base:
```tsx
<div className="flex flex-col">
  <span className="font-bold text-green-600">
    {formatPrice(event.minPriceWithFees ?? event.minPrice)}
  </span>
  {event.minPriceWithFees && event.minPrice !== event.minPriceWithFees && (
    <span className="text-xs text-gray-500">Base: {formatPrice(event.minPrice)}</span>
  )}
</div>
```

Read each line individually before editing — the surrounding JSX may need slight adjustment to fit the new stacked layout (e.g., a parent element may need flex/min-width adjustments).

- [ ] **Step 4: Update the Pro Tip banner copy**

Find at `web/src/app/compare/page.tsx:553-556`:
```tsx
              <p className="text-sm text-amber-700">
                SeatGeek aggregates prices from 60+ resale sites. If you see a lower price there,
                click through to see options from StubHub, Vivid Seats, and more.
                Always check the final price at checkout as fees may apply.
              </p>
```

Replace with:
```tsx
              <p className="text-sm text-amber-700">
                Prices include estimated platform fees: Ticketmaster ~27%, StubHub ~24%, SeatGeek ~20%.
                SeatGeek aggregates prices from 60+ resale sites. Final fees vary slightly at checkout
                based on event, seat, and delivery.
              </p>
```

- [ ] **Step 5: Run the dev build to confirm no TypeScript errors**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/web
npm run build
```
Expected: build succeeds. If TypeScript errors appear, fix the type interface to include the with-fees fields you reference.

- [ ] **Step 6: Commit**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
git add web/src/app/compare/page.tsx
git commit -m "Show with-fees prices on compare page

Each platform card now leads with the all-in price (base + estimated
fees) and shows the base price as gray subtext. Savings calculation
uses with-fees diff. Pro Tip banner updated to call out the per-
platform fee estimates so users understand where the numbers come from.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 10: Update event detail page UI to use with-fees prices

**Files:**
- Modify: `web/src/app/event/[id]/page.tsx`

This page shows price history (table + chart) and a buy recommendation. Switch all displays to with-fees as primary.

- [ ] **Step 1: Read the page to understand the existing structure**

Read `web/src/app/event/[id]/page.tsx` end-to-end (it's only 275 lines).

Note these interfaces near the top (around lines 14-16, 31-34):
```typescript
  min_price: string;
  avg_price: string;
  max_price: string;
```
and
```typescript
    currentPrice: number;
    lowestRecorded: number;
    highestRecorded: number;
    averagePrice: number;
```

- [ ] **Step 2: Extend the interfaces to include with-fees fields**

In the `PriceHistoryItem` interface (or whatever it's called — see lines 11-20), add:
```typescript
  min_price_with_fees: number | null;
  avg_price_with_fees: number | null;
  max_price_with_fees: number | null;
```

In the recommendation `stats` interface (around lines 25-40), add:
```typescript
    currentPriceBase: number;
    lowestRecordedBase: number;
    highestRecordedBase: number;
    averagePriceBase: number;
```

(`currentPrice`, `lowestRecorded`, `highestRecorded`, `averagePrice` already exist and now hold with-fees values per Task 4.)

- [ ] **Step 3: Update the price chart data series**

Find where the Recharts `LineChart` is configured. The data series likely references `min_price` from each row. Change the data accessor to use `min_price_with_fees ?? min_price` (fall back to base if with-fees is null for some reason).

Add a small caption below the chart:
```tsx
<p className="text-xs text-gray-500 mt-2 text-center">
  Prices include estimated platform fees.
</p>
```

- [ ] **Step 4: Update the price history table**

Find the table around line 239. The current rendering shows:
```tsx
${parseFloat(item.min_price).toFixed(0)}
{item.avg_price ? `$${parseFloat(item.avg_price).toFixed(0)}` : '-'}
{item.max_price ? `$${parseFloat(item.max_price).toFixed(0)}` : '-'}
```

Replace each cell with a stacked layout:

```tsx
<div className="flex flex-col">
  <span className="font-medium">${(item.min_price_with_fees ?? parseFloat(item.min_price)).toFixed(0)}</span>
  <span className="text-xs text-gray-500">base ${parseFloat(item.min_price).toFixed(0)}</span>
</div>
```

Apply the same pattern to the `avg_price` and `max_price` cells.

- [ ] **Step 5: Update the buy recommendation display**

Find where the `stats` object is rendered (look for `currentPrice`, `lowestRecorded`, etc.). These values now reflect with-fees prices automatically — just update the surrounding labels.

Where you see something like:
```tsx
<span>Lowest: ${stats.lowestRecorded}</span>
```
Add a subtext line:
```tsx
<div className="flex flex-col">
  <span>Lowest (with fees): ${stats.lowestRecorded}</span>
  <span className="text-xs text-gray-500">base ${stats.lowestRecordedBase}</span>
</div>
```

Apply the same pattern to current, highest, and average price displays.

- [ ] **Step 6: Build to verify TypeScript**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/web
npm run build
```
Expected: build succeeds.

- [ ] **Step 7: Commit**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
git add web/src/app/event/\[id\]/page.tsx
git commit -m "Show with-fees prices on event detail page

Price history table, chart, and recommendation stats all lead with
all-in prices, base shown as gray subtext. Chart caption notes that
prices include estimated platform fees.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 11: Update FAQ entry about fees

**Files:**
- Modify: `web/src/app/faq/page.tsx` line 65

- [ ] **Step 1: Replace the fee FAQ answer**

Find at `web/src/app/faq/page.tsx:64-66`:
```typescript
      {
        q: 'Do prices include fees?',
        a: 'We display the base ticket price shown by each platform. Service fees vary by platform and are typically shown at checkout. We recommend checking the total cost on each platform before purchasing.',
      },
```

Replace with:
```typescript
      {
        q: 'Do prices include fees?',
        a: 'Yes — we show the estimated all-in price including each platform\'s service fees. Estimates: Ticketmaster ~27%, StubHub ~24%, SeatGeek ~20%. Base prices are shown as a smaller line beneath. Actual fees vary at checkout based on event, seat, and delivery method, but our estimates are based on each platform\'s published fee structure.',
      },
```

- [ ] **Step 2: Build to verify**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/web
npm run build
```
Expected: build succeeds.

- [ ] **Step 3: Commit**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
git add web/src/app/faq/page.tsx
git commit -m "Update fee FAQ to explain all-in price display

FAQ now confirms that prices shown include estimated service fees,
lists the per-platform estimates, and explains that base prices are
also visible.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 12: End-to-end smoke test

**Files:** None (verification only)

- [ ] **Step 1: Run the backend locally**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
npm run dev
```

Wait for "Server running on port 3000" or similar.

- [ ] **Step 2: Hit the events/compare endpoint and verify with-fees fields**

```bash
curl 'http://localhost:3000/api/events/compare?city=NYC&keyword=knicks' | python3 -m json.tool | head -100
```

Expected: response contains `minPriceWithFees` for both Ticketmaster and SeatGeek events. For a TM event with `minPrice: 100`, `minPriceWithFees` should be `127`. For SG, it should be `120`.

- [ ] **Step 3: Hit the prices/history endpoint for any tracked event**

Find an event_id from the watchlist:
```bash
curl 'http://localhost:3000/api/admin/price-history?limit=5' \
  -H 'x-admin-key: ticketscan-admin-2026' | python3 -m json.tool | head -40
```

Expected: each `priceHistory` row includes `min_price_with_fees`, `avg_price_with_fees`, `max_price_with_fees`. Verify a sample row: `min_price_with_fees` should equal `min_price * (1 + fee_for_source)`.

- [ ] **Step 4: Run the frontend dev server and visually verify**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/web
npm run dev
```

Open http://localhost:3001/compare in a browser:
- Cards show "$X" big with "Base: $Y" subtext
- Pro Tip banner mentions per-platform fees

Open http://localhost:3001/event/[some-tracked-id]:
- Price table shows with-fees primary, base subtext
- Chart caption mentions estimated fees
- Recommendation stats show with-fees and base side by side

Open http://localhost:3001/faq:
- The "Do prices include fees?" answer shows the new copy

- [ ] **Step 5: Confirm no regressions in untouched flows**

Click through the watchlist page (uses `getWatchlistWithPrices`). It should display prices for tracked events. With-fees fields are added but the page may still display base by default — that's fine for this iteration unless the watchlist page is in scope (it's not in the spec).

- [ ] **Step 6: Stop dev servers**

Ctrl+C both running processes.
