# Sub-project B: Fee estimates per platform

## Goal

Show users the all-in price (base + estimated platform fees) as the primary comparison number, instead of the base price alone. Apply the same fee logic to recommendations, alerts, and savings calculations so the entire app speaks the same language.

## Background

Marketing copy and the FAQ already promise users an all-in price comparison. The code currently only stores and displays base prices, so a "$189 vs $147" comparison may flip after fees (Ticketmaster ~27%, StubHub ~24%, SeatGeek ~20%). The blog post on Ticketmaster vs SeatGeek even cites these fee ranges to readers — but the app itself ignores them.

## Architecture

Single source of truth for fees: a `PLATFORM_FEES` constant in `index.js`. A `withFees(basePrice, source)` helper applies the multiplier. Every endpoint that returns price data adds `*_with_fees` fields. The schema does not change — base prices stay in `price_history`, fees are computed at query time.

This keeps history accurate (base prices recorded as observed) and makes fee tuning a one-line edit.

## 1. Fee constants and helper

In `index.js`, near other top-level constants, add:

```javascript
// Estimated all-in service fees by platform.
// Sources: TicketScan blog post "Ticketmaster vs SeatGeek" (Apr 2026),
// FAQ page entry on fees, public published fee structures.
// Conservative midpoints — actual fees vary by event and state.
const PLATFORM_FEES = {
  ticketmaster: 0.27,  // 15-25% service fee + facility charge
  stubhub: 0.24,       // ~24% all-in service fee
  seatgeek: 0.20,      // 10-20% service fee
};

function withFees(basePrice, source) {
  if (basePrice == null) return null;
  const fee = PLATFORM_FEES[source] ?? 0;
  return Math.round(basePrice * (1 + fee) * 100) / 100;
}
```

The helper handles `null` defensively because price fields can be null in the database. Unknown sources get a 0% fee (no markup), which is the safe default if a new platform is added without updating the constant.

## 2. Backend endpoint changes

Every endpoint that returns price data adds `*_with_fees` fields alongside the base prices. Base prices stay in the response for transparency.

### `GET /api/prices/history/:eventId`
Each row in `priceHistory` gains `min_price_with_fees`, `avg_price_with_fees`, `max_price_with_fees`. Computed in JS after the query, before sending the response.

### `GET /api/prices/trend/:eventId`
The `currentMinPrice` and `previousMinPrice` returned per source use with-fees values. The `percentChange` calculation uses with-fees numbers (since base and all-in % deltas are nearly identical, this is mostly for consistency).

### `GET /api/prices/recommendation/:eventId`
The buy/wait/hold algorithm at `index.js:~1700` (the `if (currentPrice <= lowestRecorded * 1.05) return "buy_now"` block) operates on with-fees prices on both sides of the comparison. Same for `target_price` comparisons. The returned `stats` object includes both base and with-fees aggregates.

### `GET /api/watchlist/with-prices`
Each watchlist item gains `current_min_price_with_fees`. The `percent_change` calculation uses with-fees numbers.

### `GET /api/events/compare`
Each platform's price object gains `min_price_with_fees`, `max_price_with_fees`. The "Save $X" calculation done by the frontend should reference these.

### `GET /api/admin/price-history`
Each row gains the with-fees fields, for admin debugging.

## 3. Price drop alert behavior

`checkPriceAlerts()` (around `index.js:2996`) currently compares `current_min_price` against the user's stored `target_price`. Change it to compare `withFees(current_min_price, source)` against `target_price`.

The user's `target_price` stays stored as they entered it — we don't retroactively interpret their input as "with fees" or "without." We assume their target is what they're willing to pay total, which is the more user-friendly interpretation and matches what they'd see in the UI.

The alert email body shows:
- Their target: `$X`
- Current all-in price: `$Y (with fees)`
- Base price: `$Z`

So the user sees both numbers and can verify the alert.

## 4. Frontend changes

### `web/src/app/compare/page.tsx`

Each platform card displays:
```
$241 with fees
$189 base · $52 in fees
```

The big number is `min_price_with_fees`, formatted as currency. The subtext shows `min_price` and the difference. The "Save $X" badge between platforms uses the with-fees diff. Platform ordering (which one wins) is determined by with-fees price.

The Pro Tip banner copy changes from:
> "Always check the final price at checkout as fees may apply."

to:
> "Prices include estimated platform fees. Final fees vary at checkout — Ticketmaster ~27%, StubHub ~24%, SeatGeek ~20%."

### `web/src/app/event/[id]/page.tsx`

Price history table rows show with-fees price as the primary value with base as subtext (same pattern as compare page).

The Recharts price chart uses `min_price_with_fees` for the data series. A small caption under the chart reads:
> "Prices include estimated platform fees."

The Buy Recommendation box uses with-fees prices in its display (consistent with the algorithm change in the backend).

### `web/src/app/faq/page.tsx`

The fee FAQ entry (currently at line 65) changes from:
> "We display the base ticket price shown by each platform. Service fees vary by platform and are typically shown at checkout..."

to:
> "We show the estimated all-in price including platform service fees. Estimates: Ticketmaster ~27%, StubHub ~24%, SeatGeek ~20%. Actual fees vary at checkout based on event, seat, and delivery method."

## 5. Where else fees flow through

### Drip campaign emails
The 5 drip emails (around `index.js:534-700`) reference savings examples like "$189 on Ticketmaster vs $156 on SeatGeek." These are static marketing examples — leave them alone unless a specific email is doing live price math. None of them currently are.

### Watchlist alerts
Covered in section 3.

### Admin dashboard
Covered (`/api/admin/price-history` returns with-fees fields). The admin frontend at `web/src/app/admin/` doesn't need explicit changes if it just renders whatever the API returns; if it has hardcoded column references, those get updated.

## 6. What this does NOT do

- No real-time fee fetching from platform APIs (they don't expose this)
- No accounting for delivery fees, insurance, or processing add-ons (vary by user/event/state)
- No `price_history` schema change
- No per-section fee variation (sub-project C)
- No retroactive change to `target_price` values users have already saved
- No dollar-perfect accuracy — fees are estimates, advertised as such

## 7. Files to modify

| File | Change |
|------|--------|
| `index.js` | Add `PLATFORM_FEES` constant + `withFees()` helper near top |
| `index.js` | Update 6 endpoints (`history`, `trend`, `recommendation`, `watchlist/with-prices`, `events/compare`, `admin/price-history`) to add `*_with_fees` fields |
| `index.js` | Update `checkPriceAlerts()` to compare with-fees price against target |
| `web/src/app/compare/page.tsx` | Display with-fees as primary, base as subtext, update Pro Tip copy |
| `web/src/app/event/[id]/page.tsx` | Use with-fees in price table, chart, and recommendation box |
| `web/src/app/faq/page.tsx` | Rewrite fee FAQ entry |
| `web/src/lib/api.ts` | Update TypeScript types to include `*_with_fees` fields on price responses |

## 8. Risks

- **Fee values become stale.** Platforms change fees occasionally. Mitigation: comment in code explaining how to update, and periodic review (every 6 months).
- **Some "deals" disappear.** A "$42 saved" claim may shrink to "$18 saved" or flip platforms. This is the point — the previous claim was misleading.
- **Recommendation algorithm thresholds.** The `buy_now` threshold is "within 5% of lowest recorded." With fees applied uniformly to both sides, this stays roughly correct, but worth a sanity check after deploy.

## 9. Verification

After deploy:
1. Hit `GET /api/events/compare?city=NYC&keyword=knicks` and confirm responses include `min_price_with_fees` for each platform.
2. Hit `GET /api/prices/history/:eventId` for any tracked event and confirm `*_with_fees` fields exist.
3. Open `/compare` in the browser and confirm cards show "$X with fees" + base subtext.
4. Open `/event/[id]` for a tracked event and confirm the chart, table, and recommendation all use with-fees numbers.
5. Sanity check: the with-fees number for any row should be `base * (1 + fee_for_source)` rounded to 2 decimals.
