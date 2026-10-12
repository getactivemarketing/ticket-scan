# A/B Test: Homepage Search-First CTA

**Page:** `/`

**Hypothesis:** If the homepage primary CTA says `Search Events` and links directly to `/dashboard`, then homepage-to-search initiation will increase by at least 20% relative to `Get Started Free`, because it matches the visitor's immediate job and removes premature registration friction.

**Control:** Current hero: primary `Get Started Free` → `/register`; secondary `See How It Works` → `#how-it-works`.

**Variant:** Primary `Search Events` → `/dashboard`; secondary `Create Free Account` → `/register`. Keep the same layout, visual hierarchy, and no price-related claims.

**Primary metric:** `ticket_scan_search_submitted / unique homepage sessions`.

**Secondary metrics:**

- hero CTA click-through rate;
- search-result render rate;
- event-card seller click rate;
- watchlist prompt rate;
- watchlist add rate;
- registration start and completion rate;
- newsletter signup rate;
- bounce/exit rate;
- mobile versus desktop split.

**Guardrails:** Do not ship a variant if seller clicks, watchlist adds per search session, or registration completion falls by more than 10% relative to control. Do not use price-alert, price-history, price-trend, or buy-signal language in either arm.

**Sample size needed:** Baseline is currently unknown. For planning, if search initiation is 10% and the minimum detectable lift is 20% relative (10% → 12%), plan for approximately 3,200 eligible sessions per arm at conventional 95%/80% assumptions. Recalculate from the first 7 days of clean instrumentation before launch; do not stop early on a small apparent win.

**Duration:** Minimum 14 days and one complete weekday/weekend cycle after reaching the required sample. Use a stable 50/50 split, cookie-based assignment, and keep assignment sticky across sessions.

**Implementation:**

1. Add `experiment_id: homepage_search_cta_v1` and `variant: control|search_first` to CTA and search events.
2. Implement the copy/link change in `web/src/app/page.tsx`.
3. Track both hero CTA clicks and the eventual search submission; CTA clicks alone are not the success metric.
4. Exclude admin, internal QA, and bot traffic.
5. Report by device class and landing source, with confidence intervals and the guardrails above.

**Decision rule:** Ship the variant only if the primary metric clears the predeclared threshold and all guardrails pass. Otherwise keep control and test the next friction point after diagnosing the segment split.

