# Tracking Validation — 2026-06-10

Method: static inspection of `web/src` + live admin-API spot-checks. (The `analytics-tracking` skill named in the task spec is not installed in this environment, so validation was done manually.)

## GTM container
- ✅ **Loaded site-wide.** `GTM-T476F9S4` is injected in `web/src/app/layout.tsx` (head script + `<noscript>` iframe), so it ships on every App-Router page.

## Conversion events
| Event              | Firing? | Evidence |
|--------------------|---------|----------|
| Signup             | ❌ No   | No `dataLayer.push` / `gtag(` anywhere in `src/` |
| Watchlist add      | ❌ No   | same |
| Price comparison   | ❌ No   | same |
| Newsletter subscribe | ❌ No | same |

**Finding:** `grep -rinE "dataLayer.push|gtag\(|track\("` over `web/src` returns **zero** matches. GTM loads but no custom events are pushed — only default pageview/auto-tracking, if any tags are configured container-side. **Every conversion in the funnel is invisible to analytics.** This is the root reason the dashboard's Traffic Sources / Top Pages / Comparisons-Run rows are `n/a`: there is no event or reporting layer to source them from.

**This is not a new break** — conversion events have never been instrumented. Flagging it as the standing top tracking gap, not a regression.

## UTM capture
- ❌ No UTM parsing or persistence in-app. Paid/social attribution cannot be measured from platform data. (Relevant once Paid Ads agent has live spend — currently $0, no accounts.)

## API health spot-check
- `/api/admin/stats` → 200, 0.38s ✅
- `/api/admin/users`, `/watchlist`, `/newsletter`, `/activity`, `/popular-events`, `/drip-stats`, `/price-history` → 200 ✅
- `/api/admin/alerts` → **500 `Failed to get alerts`** ❌ (broken endpoint — re-confirmed today)

## Recommendation (unchanged, carry-forward)
1. Add `dataLayer.push` on the 4 core conversions (signup, watchlist add, compare, subscribe) — smallest change that makes the dashboard's funnel rows real.
2. Fix/replace the `/api/admin/alerts` 500.
3. Capture referrer + UTM server-side at signup so source attribution exists without a GA4 dependency.
