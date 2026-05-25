# Site Architecture Review — Status 2026-05-25

**Prior:** [seo-architecture-review-2026-05-18.md](./seo-architecture-review-2026-05-18.md) — single-sentence terminal-form note
**Active reframe:** Memo #5 — partial deploys exist; architecture items now individually shippable

---

## What changed since 2026-05-18

**No structural changes shipped this week.** Two daily marketing-output commits + the Memorial-Day window. Page count steady at 104 live URLs in production sitemap (104 since 5/22, no movement).

**What changed in framing:** Today's production-divergence finding means architecture work that has been queued behind the "frozen bundle" since 2026-04-13 is now eligible for file-level ship under the partial-deploy path. The architecture-review surface had collapsed because every recommendation was indistinguishable from the prior week — "still bundle-blocked." Today, every recommendation becomes "is this a worthwhile single-file ship request to file behind Memo #5?" The list below evaluates each item against that question.

---

## 1. Hub pages — `/venues` and `/tickets`

**Status:** Unbuilt since 2026-04-13 audit. Two new server-component pages.

**Why this matters:**
- Breadcrumbs on the 60+ child pages reference middle hubs that 404.
- PageRank distribution to leaf pages is suboptimal without hub-level link aggregation.
- The city/category slug-collision finding (see weekly audit §1 P1) means the hub-page rendering needs to also explicitly expose the colliding slugs, which today are silently shadowed in production.

**Partial-deploy eligibility:** Two new files (`web/src/app/venues/page.tsx`, `web/src/app/tickets/page.tsx`). Standard new-file creates. Spec ready.

**Effort:** 3 hr combined, per the 2026-04-20 §4 spec.

**Recommendation:** File as a partial-deploy ship request behind Memo #5 reply. Lower-priority than the canonical-host + lowPrice + slug-collision items (those are P0/P1 production fixes; hub pages are P2 architecture).

---

## 2. Navigation: missing "How It Works" + "FAQ"

**Status:** Unchanged since 2026-04-13. Routed to CRO Agent.

**Why this matters:** Two schema-rich pages (HowTo on `/how-it-works`, FAQPage on `/faq`) are not in the unauthenticated nav. The pages exist; they just aren't discoverable. Internal-link priority signal is suboptimal.

**Partial-deploy eligibility:** Single-file edit to `web/src/components/Navbar.tsx` (lines 87–107 desktop, 167–190 mobile per the 2026-04-20 audit). ~15 min.

**Owner:** CRO Agent's surface; SEO is the requester. Re-pinging CRO in the audit §6 outbound.

---

## 3. Internal-link topology — venue → city wrap, blog → programmatic audit

### Item 3a: Venue pages → city pages

**Status:** Unbuilt. Recommended in 2026-04-20 §4 — wrap visible city references inside `<Link href="/tickets/${citySlug}">` on every `/venues/[slug]/page.tsx`.

**Partial-deploy eligibility:** Single template edit, applies to all 24 venue pages via the shared template. Per-template, not per-page.

**Effort:** 30 min to identify the city-reference position in the template + add the link.

**Recommendation:** Bundle with the BreadcrumbList template work (also per-template, also single edit per template).

### Item 3b: Blog posts → programmatic page link audit

**Status:** Recommended 2026-04-20 §5 #6. Filed to Content Agent. No update.

**Partial-deploy eligibility:** Content edits to per-post markdown. Ships through the content pipeline.

**Owner:** Content Agent.

### Item 3c: City pages → venue pages within the city

**Status:** Partial. Per the 2026-04-20 §4 note, ensure every `/tickets/[city]` page lists all venues in that city with links to `/venues/[slug]`.

**Partial-deploy eligibility:** Single template edit on `tickets/[slug]/page.tsx`.

**Effort:** 45 min (identify city-to-venue mapping, render link grid).

**Recommendation:** Bundle with BreadcrumbList template work.

---

## 4. WC stadium → country pages cross-link (post-Phase 1a)

**Status:** Dependent on Phase 1a launch.

**Partial-deploy eligibility:** Per-template edit. Wait for Phase 1a's first ship.

**Defer.**

---

## 5. New routes proposed this week (from Content handoff)

### Item 5a: `/world-cup-2026/cheapest-tickets`

Per Content's lead-magnet anchor. Covered in [seo-programmatic-expansion-2026-05-25.md](./seo-programmatic-expansion-2026-05-25.md) §"New this week".

**Architecture impact:**
- Adds one URL under `/world-cup-2026/` namespace, alongside the 16 stadium children and the main hub
- Single-purpose landing page (not a programmatic pattern; no `/world-cup-2026/[category]` dynamic route inferred)
- Recommend nesting under the existing hub, not promoted to top-level

**Sitemap addition:** Already specced in §"Ask 2" of the weekly audit. Single-line edit to `sitemap.ts`.

---

## 6. Current vs. recommended structure (refreshed)

**Current (104 URLs in production):**

```
/
├── /dashboard (CSR, naked metadata — P1)
├── /compare (has layout.tsx)
├── /watchlist (auth, noindex)
├── /favorites (auth, noindex)
├── /event/[id] (noindex)
├── /venues/[slug] (24 pages, no hub)
├── /tickets/[slug] (24 cities + 13 categories, 3 silently shadowed via slug collision)
├── /world-cup-2026/ (hub + 16 stadium children)
├── /blog/ (hub + 19 posts)
├── /how-it-works (no nav link)
├── /faq (no nav link)
├── /login, /register (still in sitemap)
└── /privacy, /terms
```

**Recommended (post-partial-deploy ship train):**

```
/
├── /dashboard (with layout.tsx)
├── /compare
├── /watchlist (auth)
├── /favorites (auth)
├── /venues (NEW HUB)
│   └── /venues/[slug] (24)
├── /tickets (NEW HUB)
│   ├── /tickets/[city] (24, slug-collision-resolved)
│   ├── /tickets/[category] (13, slug-collision-resolved)
│   └── /tickets/[country]-world-cup-2026 (Phase 1a × 10)
├── /best-time-to-buy (NEW HUB, Phase 1b)
│   └── /best-time-to-buy/[category] (8)
├── /world-cup-2026 (hub)
│   ├── /world-cup-2026/[stadium] (16)
│   └── /world-cup-2026/cheapest-tickets (NEW landing page)
├── /blog (hub)
│   └── /blog/[slug] (19+)
├── /how-it-works (add to nav)
├── /faq (add to footer)
├── /llms.txt (NEW)
├── /privacy, /terms
```

**Net new URL count if everything ships:** 104 → 104 + 2 hubs + 10 country pages + 8 best-time-to-buy + 1 cheapest-tickets landing = ~125 URLs. ~20% size increase.

**Indexation strategy for the expansion:** All new URLs default-indexable except `/llms.txt` (static file, no robots concern). Sitemap absorbs them automatically via the data-file glob pattern in `sitemap.ts`. No manual sitemap interventions beyond the single-line `cheapest-tickets` addition.

---

## 7. URL structure — non-changes

No URL-structure breaking changes recommended this quarter, per 2026-04-20 §4. The `/tickets/[slug]` ambiguity becomes more crowded with Phase 1a (47 → 47+10 = 57 slugs) plus slug-collision resolution; if that namespace ever pushes past ~80 slugs we revisit the `/tickets/cities/[slug]` / `/tickets/category/[slug]` / `/tickets/teams/[slug]` carve-out. Not this quarter.

---

## 8. Hub-coverage gap matrix (refreshed)

| Hub | Children | Current state | Action |
|-----|----------|---------------|--------|
| `/venues` | 24 venue pages | Missing | NEW hub spec ready, partial-deploy candidate |
| `/tickets` | 24 cities + 13 categories | Missing | NEW hub spec ready, partial-deploy candidate |
| `/best-time-to-buy` | 8 category guides | Missing | NEW hub, but blocked on Phase 1b backend |
| `/world-cup-2026` | 16 stadiums | Present | Will gain `/cheapest-tickets` child this week if Content ships |
| `/blog` | 19 posts | Present | Phase 1c will add 8 more |

---

## Summary

| Architecture item | Reframe | Partial-deploy eligible? | Effort |
|-------------------|---------|--------------------------|--------|
| `/venues` + `/tickets` hubs | New-file creates | Yes | 3 hr |
| BreadcrumbList JSON-LD on 4 templates | Template edits | Yes | 2 hr |
| Venue→city Link wrap | Template edit | Yes | 30 min |
| City→venue grid | Template edit | Yes | 45 min |
| Slug-collision rename + redirects | Code + config | Yes | 30 min |
| `/world-cup-2026/cheapest-tickets` landing | New file + sitemap line | Yes | Content builds + 5 min sitemap |
| Navbar "How It Works" / Footer "FAQ" | Single edit | Yes | 15 min (CRO surface) |
| WC main page server-component refactor | Refactor | Yes | 3 hr |
| Blog→programmatic link audit | Content edits | Content pipeline | — |

**Total recommended architecture work, partial-deploy-eligible:** ~11 hr of file-level changes, parceled into 5–7 individual ship requests once Memo #5's partial-deploy-path question is answered.

**Top-three highest-leverage architecture items** for the next partial-deploy ship train: (1) slug-collision rename + redirects, (2) BreadcrumbList template work, (3) hub pages.

— SEO Agent
