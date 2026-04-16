# StubHub Cron Wiring — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Wire the existing `fetchStubHubEventPrice()` function into both the price tracking cron and the admin endpoint so every tracked event gets prices from all 3 platforms.

**Architecture:** Two minimal additions inside `index.js`, mirroring the existing SeatGeek blocks. No schema changes, no new functions, no dependencies. The StubHub fetch function already exists at `index.js:2906-2951` and returns the same shape `{ source, minPrice, avgPrice, maxPrice }` used by the other fetchers.

**Tech Stack:** Node.js, Express, PostgreSQL, axios (all already in use)

**Spec:** `docs/superpowers/specs/2026-04-16-stubhub-cron-wiring-design.md`

---

### Task 1: Add StubHub fetch to the cron tracking loop

**Files:**
- Modify: `index.js` around line 3090 (inside `trackWatchlistPrices()`)

Add a StubHub block after the SeatGeek block. Mirror the exact structure of the SeatGeek block: fetch, log, insert into price_history, update `lowestPrice`.

- [ ] **Step 1: Locate the insertion point**

Read `index.js` lines 3077-3097 to confirm the current SeatGeek block ends at line 3090, and the alert check begins at line 3092.

Expected structure:
```
Line 3077: // Fetch from SeatGeek
Line 3078-3090: SeatGeek fetch + insert + lowestPrice update
Line 3091: (blank)
Line 3092: // Check for price alerts if we have a price
```

- [ ] **Step 2: Insert the StubHub block**

Using the Edit tool, find this block in `index.js`:

```javascript
      // Fetch from SeatGeek
      const eventDate = event.event_date ? new Date(event.event_date).toISOString().split('T')[0] : null;
      const sgPrice = await fetchSeatGeekEventPrice(event.event_name, event.venue, eventDate);
      console.log(`  SG result:`, sgPrice ? `$${sgPrice.minPrice}-$${sgPrice.maxPrice}` : 'no prices');
      if (sgPrice && sgPrice.minPrice) {
        await pool.query(`
          INSERT INTO price_history (event_id, source, min_price, avg_price, max_price)
          VALUES ($1, $2, $3, $4, $5)
        `, [event.event_id, sgPrice.source, sgPrice.minPrice, sgPrice.avgPrice, sgPrice.maxPrice]);
        tracked++;
        if (!lowestPrice || sgPrice.minPrice < lowestPrice) {
          lowestPrice = sgPrice.minPrice;
        }
      }

      // Check for price alerts if we have a price
```

Replace it with:

```javascript
      // Fetch from SeatGeek
      const eventDate = event.event_date ? new Date(event.event_date).toISOString().split('T')[0] : null;
      const sgPrice = await fetchSeatGeekEventPrice(event.event_name, event.venue, eventDate);
      console.log(`  SG result:`, sgPrice ? `$${sgPrice.minPrice}-$${sgPrice.maxPrice}` : 'no prices');
      if (sgPrice && sgPrice.minPrice) {
        await pool.query(`
          INSERT INTO price_history (event_id, source, min_price, avg_price, max_price)
          VALUES ($1, $2, $3, $4, $5)
        `, [event.event_id, sgPrice.source, sgPrice.minPrice, sgPrice.avgPrice, sgPrice.maxPrice]);
        tracked++;
        if (!lowestPrice || sgPrice.minPrice < lowestPrice) {
          lowestPrice = sgPrice.minPrice;
        }
      }

      // Fetch from StubHub
      const shPrice = await fetchStubHubEventPrice(event.event_name, event.venue, eventDate);
      console.log(`  SH result:`, shPrice ? `$${shPrice.minPrice}-$${shPrice.maxPrice}` : 'no prices');
      if (shPrice && shPrice.minPrice) {
        await pool.query(`
          INSERT INTO price_history (event_id, source, min_price, avg_price, max_price)
          VALUES ($1, $2, $3, $4, $5)
        `, [event.event_id, shPrice.source, shPrice.minPrice, shPrice.avgPrice, shPrice.maxPrice]);
        tracked++;
        if (!lowestPrice || shPrice.minPrice < lowestPrice) {
          lowestPrice = shPrice.minPrice;
        }
      }

      // Check for price alerts if we have a price
```

- [ ] **Step 3: Syntax check**

Run: `node -c /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/index.js`
Expected: no output (valid syntax).

- [ ] **Step 4: Commit**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
git add index.js
git commit -m "Add StubHub fetch to price tracking cron

Wire existing fetchStubHubEventPrice() into trackWatchlistPrices()
loop. Every tracked event now gets prices from TM + SG + SH.
Mirrors the SeatGeek block structure: fetch, log, insert to
price_history, update lowestPrice for alerts.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 2: Add StubHub fetch to the admin price-track endpoint

**Files:**
- Modify: `index.js` around line 3182 (inside `POST /api/admin/price-track` handler)

Mirror the same StubHub block pattern in the admin endpoint. This endpoint returns a detailed result object per event, so the StubHub data goes on `eventResult.prices.stubhub` in addition to the database insert.

- [ ] **Step 1: Locate the insertion point**

Read `index.js` lines 3172-3186 to confirm the current admin endpoint's SeatGeek block ends at line 3182.

Expected structure:
```
Line 3172: // Fetch from SeatGeek
Line 3173-3182: SeatGeek fetch + store on eventResult.prices.seatgeek + insert
Line 3183: (blank)
Line 3184: results.push(eventResult);
```

- [ ] **Step 2: Insert the StubHub block**

Using the Edit tool, find this block in `index.js`:

```javascript
      // Fetch from SeatGeek
      const eventDate = event.event_date ? new Date(event.event_date).toISOString().split('T')[0] : null;
      const sgPrice = await fetchSeatGeekEventPrice(event.event_name, event.venue, eventDate);
      eventResult.prices.seatgeek = sgPrice;
      if (sgPrice && sgPrice.minPrice) {
        await pool.query(`
          INSERT INTO price_history (event_id, source, min_price, avg_price, max_price)
          VALUES ($1, $2, $3, $4, $5)
        `, [event.event_id, sgPrice.source, sgPrice.minPrice, sgPrice.avgPrice, sgPrice.maxPrice]);
        tracked++;
      }

      results.push(eventResult);
```

Replace it with:

```javascript
      // Fetch from SeatGeek
      const eventDate = event.event_date ? new Date(event.event_date).toISOString().split('T')[0] : null;
      const sgPrice = await fetchSeatGeekEventPrice(event.event_name, event.venue, eventDate);
      eventResult.prices.seatgeek = sgPrice;
      if (sgPrice && sgPrice.minPrice) {
        await pool.query(`
          INSERT INTO price_history (event_id, source, min_price, avg_price, max_price)
          VALUES ($1, $2, $3, $4, $5)
        `, [event.event_id, sgPrice.source, sgPrice.minPrice, sgPrice.avgPrice, sgPrice.maxPrice]);
        tracked++;
      }

      // Fetch from StubHub
      const shPrice = await fetchStubHubEventPrice(event.event_name, event.venue, eventDate);
      eventResult.prices.stubhub = shPrice;
      if (shPrice && shPrice.minPrice) {
        await pool.query(`
          INSERT INTO price_history (event_id, source, min_price, avg_price, max_price)
          VALUES ($1, $2, $3, $4, $5)
        `, [event.event_id, shPrice.source, shPrice.minPrice, shPrice.avgPrice, shPrice.maxPrice]);
        tracked++;
      }

      results.push(eventResult);
```

- [ ] **Step 3: Syntax check**

Run: `node -c /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/index.js`
Expected: no output (valid syntax).

- [ ] **Step 4: Commit**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
git add index.js
git commit -m "Add StubHub fetch to admin price-track endpoint

Mirror the new cron StubHub block in POST /api/admin/price-track.
Response now includes eventResult.prices.stubhub alongside
ticketmaster and seatgeek for easier admin-side verification.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 3: Verify environment and deploy

**Files:** None (verification only)

- [ ] **Step 1: Verify StubHub env vars are set locally**

Run: `grep -E '^STUBHUB_(APP_KEY|API_KEY)=' /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan/.env`
Expected: both keys are set with non-empty values.

If either is missing, stop and tell the user — StubHub fetches will silently return null without these.

- [ ] **Step 2: Verify env vars are set on Railway**

The user must verify this manually in the Railway dashboard. Remind them to check:
1. Open Railway dashboard for `tickethawk-api-production`
2. Go to Variables tab
3. Confirm `STUBHUB_APP_KEY` and `STUBHUB_API_KEY` are present with non-empty values

- [ ] **Step 3: Push to Railway**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/Sites/ticketscan
git push origin main
```

Railway auto-deploys from git push. Wait ~1-2 minutes for deploy to complete.

- [ ] **Step 4: Trigger admin price-track and inspect response**

```bash
curl -X POST https://tickethawk-api-production.up.railway.app/api/admin/price-track \
  -H "x-admin-key: ticketscan-admin-2026" \
  -H "Content-Type: application/json"
```

Expected: JSON response with `success: true`, a `results` array, and at least some entries where `prices.stubhub` is not `null`.

If every `prices.stubhub` is `null`, it means either:
- StubHub env vars aren't set (see Step 2)
- StubHub match quality is zero for the current watchlist events (known limitation, fix scoped to sub-project C)

- [ ] **Step 5: Confirm stubhub rows in the database**

The admin endpoint inserts into `price_history`. After running it, query the DB:

```sql
SELECT source, COUNT(*) FROM price_history
WHERE checked_at > NOW() - INTERVAL '10 minutes'
GROUP BY source;
```

Run this via whatever DB inspection tool the user uses (Railway dashboard SQL, pgAdmin, etc.). Expected: `stubhub` appears as a row alongside `ticketmaster` and `seatgeek`.

If the user doesn't have a DB tool handy, they can skip this — the curl response from Step 4 is sufficient evidence.
