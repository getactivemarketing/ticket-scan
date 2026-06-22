# CRO Weekly — 2026-06-22

**Status: CONVERGED. Bottleneck is shipping, not analysis.**

The audit has produced no new findings for 6+ weeks. The same three P0s are verified-real and unshipped. This report re-verifies them against current source (with line numbers) and ships nothing new to "analyze." The single ask this week: **ship one fix.**

## Funnel data: unavailable (honest)
No GA4, no conversion events. `layout.tsx:133` loads a **GTM container only** — no events fire on search, compare, signup, or watchlist-add. Every funnel %, drop-off rate, and "X users tracking" figure is therefore **n/a / cannot be measured**. Do not trust any report (including past CRO dailies) that cites them. Unlocking funnel analytics requires GA4 + conversion events wired into the existing GTM container.

## The 3 verified P0s (re-checked today against source)

### P0-1 — Compare page hard-redirects anon visitors to /login
`web/src/app/compare/page.tsx:87-90`
```tsx
if (!authLoading && !user) {
  router.push('/login');
  return null;
}
```
The page is SEO-indexed and linked from footer/blog, yet logged-out visitors see zero value before being bounced to login. Highest-impact CRO fix. **Un-gate = shipping task, not a study.**

### P0-2 — Watchlist adds can't arm alerts (no target-price input)
`web/src/components/EventCard.tsx:43-49` — the add call sends `eventId, eventName, eventDate, venue, city` and **no `targetPrice`**. The API client already supports it (`lib/api.ts:169` → `targetPrice?: number`). Result: 149 watchlist items, `activeAlerts = 0`. The core product promise (price-drop alerts) cannot fire for any user. Fix is **one small front-end input** — see ship-ready spec below.

### P0-3 — Event proof page orphaned + login-gated
`web/src/app/event/[id]/page.tsx` — the chart + buy-recommendation page (the actual "proof" of value) redirects anon to /login and has no link from EventCard/search. Only reachable from authed /watchlist. Fix as a pair: link from EventCard + allow an anon preview.

## Ship ONE this week — recommended: P0-2 (smallest, unblocks core promise)

Self-contained, single-file, API already supports it. Add an optional target-price input to `EventCard` and pass it through:

```tsx
// EventCard.tsx — add state
const [targetPrice, setTargetPrice] = useState('');

// in handleAddToWatchlist, include it:
await api.addToWatchlist({
  eventId: event.id,
  eventName: event.name,
  eventDate: event.date,
  venue: event.venue,
  city: event.city,
  targetPrice: targetPrice ? Number(targetPrice) : undefined,
});

// in the card UI, near the "Track" button (logged-in only):
<input
  type="number"
  inputMode="decimal"
  placeholder="Alert me below $…"
  value={targetPrice}
  onChange={(e) => setTargetPrice(e.target.value)}
  className="w-full mt-2 px-2 py-1 text-sm border border-gray-300 rounded"
/>
```
No backend change, no migration, no new dependency. This is the literal blocker between "149 tracked items" and "alerts that fire."

## A/B test (one, tied to the biggest shippable drop-off)
**Test: Un-gate the compare page**
- **Page:** /compare
- **Hypothesis:** If anon visitors see the full price comparison instead of a login redirect, compare→signup conversion rises, because value precedes the ask (current flow asks before showing anything).
- **Control:** Current — `router.push('/login')` for logged-out users (page.tsx:87-90).
- **Variant:** Render the comparison for everyone; gate only the *persisted* actions (save/track) behind a soft signup prompt (the EventCard pattern already does this with `showSignUpPrompt`).
- **Primary metric:** signups originating from /compare. **Cannot be measured until GA4 events exist** — so instrument first or judge by raw registration lift.
- **Secondary:** /compare bounce, watchlist adds from compare.
- **Sample / duration:** N/A without analytics; run ≥14 days once a conversion event exists.
- **Implementation:** Remove the redirect block; reuse EventCard's existing soft-prompt for save actions.

## Popup / onboarding / signup-flow
No change from prior weeks — all gated behind the same reality: **none of it can be measured or meaningfully tuned without analytics, and the funnel is already broken upstream by P0-1/P0-2.** Fixing measurement + the two gates comes before popup timing or onboarding wireframes. Deferred intentionally, not skipped.

## Handoffs
- **→ Engineering / shipping owner:** Ship P0-2 this week (code above). Then P0-1.
- **→ Analytics (Agent 7):** No funnel %s exist; GTM container fires no events. Wiring GA4 conversion events is the prerequisite for every A/B test in this doc.
- **→ Content (Agent 1):** No new copy needs — un-gating reuses existing components.
- **→ Growth (Agent 8):** Onboarding redesign stays parked until P0-1/P0-2 ship and measurement exists.

---
*Re-verified against source 2026-06-22: compare/page.tsx:87-90, EventCard.tsx:43-49, lib/api.ts:169, layout.tsx:133. No fabricated metrics in this report.*
