# Sub-project A: Enable StubHub in price tracking

## Goal

Wire the existing `fetchStubHubEventPrice()` function into the price tracking cron and admin endpoint so every tracked event gets prices from all 3 platforms (Ticketmaster, SeatGeek, StubHub) instead of just 2.

## Context

`fetchStubHubEventPrice()` is implemented at `index.js:2906-2951` but never called. The cron job `trackWatchlistPrices()` (around `index.js:3061`) and the admin endpoint `POST /api/admin/price-track` (around `index.js:3141`) both fetch from Ticketmaster and SeatGeek, then skip StubHub. Marketing copy on the site claims StubHub is part of the comparison — this gap is a credibility risk.

## Changes

### 1. Cron loop in `trackWatchlistPrices()`

After the SeatGeek block (around `index.js:3090`), add a StubHub block:

- Call `fetchStubHubEventPrice(event.event_name, event.venue, eventDate)`
- Log the result (mirroring the TM and SG log lines)
- If a result comes back with `minPrice`, insert into `price_history` with `source = 'stubhub'`
- Update the `lowestPrice` variable so price alerts pick up StubHub-low prices

### 2. Admin endpoint `POST /api/admin/price-track`

After the SeatGeek block (around `index.js:3182`), add the same StubHub block:

- Call `fetchStubHubEventPrice(event.event_name, event.venue, eventDate)`
- Store on `eventResult.prices.stubhub`
- Insert into `price_history` if `minPrice` exists

## Risks

- **OAuth credentials:** If `STUBHUB_APP_KEY` or `STUBHUB_API_KEY` aren't set in Railway, the function returns `null` silently. Safe but no data. Verify env vars are set after deploy.
- **Rate limits:** StubHub may rate-limit. The existing try/catch in `fetchStubHubEventPrice` handles this — failures don't break the loop.
- **Match quality:** StubHub matching uses date + first-token-of-event-name. Sparse matches expected. Match quality improvements are scoped to sub-project C.

## What this does NOT do

- Does not add fees to comparisons (sub-project B)
- Does not add section-level matching (sub-project C)
- Does not change the schema (`price_history` already has `source` column accepting 'stubhub')
- Does not change the comparison UI (consumers querying `price_history` by source will automatically pick up StubHub data)

## Files to modify

| File | Change |
|------|--------|
| `index.js` | Add StubHub fetch block in `trackWatchlistPrices()` cron loop |
| `index.js` | Add StubHub fetch block in `POST /api/admin/price-track` handler |

## Verification

After deploy:
1. Verify `STUBHUB_APP_KEY` and `STUBHUB_API_KEY` env vars are set in Railway.
2. Hit `POST /api/admin/price-track` with admin key.
3. Confirm response includes `stubhub` entries in `eventResult.prices` for at least some events.
4. Query `SELECT DISTINCT source FROM price_history` and confirm `stubhub` appears.
