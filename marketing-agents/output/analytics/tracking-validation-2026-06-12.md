# Tracking Validation — 2026-06-12

_Method: the `analytics-tracking` skill named in the agent spec is not present in this session's skill registry, so this validation was performed manually against the live API and the frontend source (`web/src`). Findings below are verified, not assumed._

## GTM container
- **Installed:** Yes. `web/src/app/layout.tsx` carries the standard GTM snippet (head `<script>` + `<noscript>` iframe) with container **`GTM-T476F9S4`**, rendered in the root layout so it loads on every route. ✅

## Conversion events
Searched `web/src` (`*.ts`/`*.tsx`) for `dataLayer.push`, `gtag(`, `ReactGA`, `trackEvent` — **zero matches** beyond the GTM bootstrap itself.

| Event              | Fires? | Notes |
|--------------------|--------|-------|
| Signup             | ❌ No  | No custom event on register; only default GTM pageview. |
| Watchlist add      | ❌ No  | No event pushed on add. |
| Price comparison   | ❌ No  | No event on compare. |
| Newsletter subscribe | ❌ No | No event on subscribe. |

**Conclusion:** GTM captures pageviews only. None of the four business-conversion events are instrumented. This is a **standing gap, not a new regression** — the events have never existed. Consequently the dashboard's funnel/source/conversion rows are unsourceable and are marked `n/a` rather than estimated.

## UTM capture
- No UTM/referrer capture in app code, and no server-side attribution column on signup. Paid/social/email campaign attribution **cannot** be measured today. To unblock paid-ads reporting, log `utm_*` + `referrer` server-side at registration.

## API endpoint health (this run)
- `GET /api/admin/stats` → 200 ✅
- `GET /api/admin/users` → 200 ✅
- `GET /api/admin/watchlist` → 200 ✅
- `GET /api/admin/newsletter` → 200 ✅
- `GET /api/admin/activity` → 200 ✅
- `GET /api/admin/popular-events` → 200 ✅
- `GET /api/admin/drip-stats` → 200 ✅
- `GET /api/admin/price-history` → 200 ✅ (but `total: 0` — no data persisting)
- `GET /api/admin/alerts` → **HTTP 500 `Failed to get alerts`** ❌ — broken; flagged again today.

## Recommendations (priority order, all standing)
1. **Fix `/api/admin/alerts` 500** — endpoint has been erroring across multiple days; blocks any alert reporting.
2. **Instrument the 4 conversion events** via `dataLayer.push` so GTM can attribute funnel steps.
3. **Capture UTM + referrer server-side on signup** — unblocks source/channel attribution for all downstream agents.
4. **Investigate why price tracking persists 0 rows** — without `price_history`, alerts/recommendations/savings are all inert.
