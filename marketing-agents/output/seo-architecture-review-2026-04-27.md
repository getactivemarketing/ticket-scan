# Site Architecture Review — 2026-04-27

**Agent:** SEO Specialist (Agent 2)
**Prior:** 2026-04-13 — [seo-architecture-review-2026-04-13.md](./seo-architecture-review-2026-04-13.md)
(2026-04-20's review was folded into the audit doc; resuming standalone this week.)

---

## TL;DR

**No structural changes shipped this week.** Architecture is identical to 2026-04-20. The `/venues` and `/tickets` hubs (last week's prereq P2) are still missing on disk. `/dashboard/layout.tsx` exists in the bundle (untracked) which fixes one architectural gap when shipped, but until then the architecture is unchanged.

**One new architectural read this week:** the `/world-cup-2026/page.tsx` refactor in the bundle (extracting `WorldCupSchedule.tsx` as a child component) is the *right* template pattern for hub pages. Server-rendered content shell + small client island for interactivity. Once the bundle ships, mirror that pattern when building `/venues` and `/tickets` hubs.

---

## Current architecture (verified 2026-04-27)

```
/ (homepage, server-rendered, FAQPage in bundle)
├── /dashboard (CSR, naked metadata — fix in bundle: dashboard/layout.tsx, untracked)
├── /compare (CSR, has compare/layout.tsx in bundle: WebApplication + BreadcrumbList, untracked)
├── /watchlist (auth, noindex via untracked layout — bundle)
├── /favorites (auth, noindex via untracked layout — bundle)
├── /event/[id] (CSR, robots.txt blocked)
├── /venues/[slug] (24 pages — Ball Arena added 2026-04-22, no hub)
├── /tickets/[slug] (37 pages — 24 cities + 13 categories, no hub)
├── /world-cup-2026/ (hub, refactor pending in bundle)
│   └── /world-cup-2026/[stadium] (16 pages, BreadcrumbList queued in bundle)
├── /blog/ (hub, 21 posts; 6+ planned this week per Content handoff)
│   └── /blog/[slug]
├── /how-it-works (HowTo schema in bundle, step-anchor bug)
├── /faq (FAQPage live; expansion in flight today)
├── /admin (auth, noindex via untracked layout — bundle)
├── /login, /register (in sitemap; sitemap-hygiene P2)
└── /privacy, /terms
```

**Total public pages: 109** (10 static + 21 blog + 24 venues + 37 tickets + 17 WC).

---

## Architecture issues — status carryover

### Persistent (unchanged from 2026-04-13 and 2026-04-20)

1. **Orphaned clusters** — `/venues/*` and `/tickets/*` still have no parent hub. Visual breadcrumbs on leaf pages point at non-existent pages. Crawl path: Homepage → footer/cards → leaf. PageRank-distribution signal is weak.

2. **Route namespace `/tickets/[slug]` carries 37 slugs** (24 cities + 13 categories) and per Phase 1b will carry +10 (WC country pages). Total at 47. Tolerable; revisit at >100.

3. **`/dashboard` and `/compare` are peers in the navbar** with overlapping role. CRO concern primarily. Out of SEO scope; flagged for future test.

4. **Discovery problem:** `/how-it-works` and `/faq` are still missing from navbar/footer. CRO Agent ask filed 2026-04-20; status check needed.

### Resolved this week

- **City/category slug-collision check** — ran the dedupe sweep; `uniq -d` returned empty. **Resolved.**

### New this week

5. **`/dashboard` will become a near-orphan when its server layout ships.** The bundle's `dashboard/layout.tsx` adds metadata + JSON-LD. But `/dashboard` is the search interface; once it's a credible entry point per Google, the absence of a "back to home" or "search filters" or "browse by category" affordance gets exposed. Architectural ask: when `/dashboard/layout.tsx` ships, audit the `/dashboard/page.tsx` body (CSR component) to ensure it has internal-nav links to at least 5 programmatic destinations (`/venues`, `/tickets`, top categories) so it's not a dead-end pop-out. **CRO concern primarily; flagging here for the SEO/architecture spillover.**

6. **`world-cup-2026` is becoming the right architecture template** — see TL;DR. Pull pattern out and apply to other clusters when feasible.

---

## Recommended architecture (unchanged from 2026-04-20)

```
/ (home — server-rendered, FAQ schema, hero + clusters)
├── /dashboard (search interface, search action JSON-LD)
├── /compare (comparison tool, WebApplication schema)
├── /venues (NEW HUB — 24 venue cards, by type) ← BUILD THIS
│   └── /venues/[slug]
├── /tickets (NEW HUB — city + category index) ← BUILD THIS
│   ├── /tickets/[city-slug] (24 cities)
│   ├── /tickets/[category-slug] (13 categories)
│   └── /tickets/[country]-world-cup-2026 (10 — Phase 1b)
├── /best-time-to-buy (NEW HUB — 8 category guides) ← Phase 1c
│   └── /best-time-to-buy/[category]
├── /world-cup-2026 (hub, refactor in bundle)
│   └── /world-cup-2026/[stadium]
├── /blog (hub)
│   └── /blog/[slug]
├── /how-it-works (add to navbar)
├── /faq (add to footer)
└── /privacy, /terms
```

---

## Hub page template — re-confirm spec

(Unchanged from 2026-04-20 — restated briefly for cross-doc continuity.)

### `/venues/page.tsx` (server component)

- H1: "All Venues — Ticket Prices & Guides"
- Intro: 30-word quotable lead
- Section 1: Arenas grid (filter `venue.type === 'arena'`)
- Section 2: Stadiums grid
- Section 3: Theaters & Other
- Section 4: Browse by City — chip row → `/tickets/[city]`
- CTA: "Track prices at any venue"
- JSON-LD: `CollectionPage` + `BreadcrumbList` (Home → Venues) + **`ItemList` block** (per 2026-04-27 programmatic-expansion micro-correction — Google rich-result eligibility prefers ItemList over `CollectionPage.hasPart` for ranked link lists)
- Sitemap: priority 0.7, changeFrequency 'weekly'

### `/tickets/page.tsx` (server component)

- H1: "Tickets by City & Category"
- Intro: 40-word quotable lead
- Section 1: Popular now (manually curated)
- Section 2: By City (24 cards, alphabetical jump-link)
- Section 3: By Category (13 cards, grouped)
- Section 4: By World Cup team (post Phase 1b — 10 chips)
- JSON-LD: `CollectionPage` + `BreadcrumbList` + `ItemList`
- Sitemap: priority 0.7

**Note:** Next.js App Router precedence — static `tickets/page.tsx` will take priority over the dynamic `tickets/[slug]/page.tsx` for the bare `/tickets` request. No collision risk.

---

## Internal linking — recommendations to layer in (carryover from 2026-04-20)

Status of last week's four cross-link recommendations:

| # | Recommendation | Status |
|---|----------------|--------|
| 1 | Venue pages → city pages: wrap city reference in `<Link>` | Not done |
| 2 | City pages → all venues in that city | Partially done (sidebar) |
| 3 | Blog posts → programmatic pages (audit + add) | Content Agent ask, scheduled 2026-05-05 |
| 4 | WC stadium pages → WC country pages (post-Phase 1b) | Pending Phase 1b ship |

**No action needed this week** — all four are scoped and queued. Re-check after the bundle ships and the hub pages exist.

---

## URL structure — no changes recommended

Keep existing URL pattern. No breaking changes pre-indexation. The `/tickets/[slug]` ambiguity is tolerable through Phase 1b (47 slugs total). Reconsider if we ever scale to 100+ slugs in the namespace.

---

## XML sitemap structure — re-confirm

Current `sitemap.ts` is monolithic — single `sitemap.xml` with all 109 entries. **At 109 entries we're nowhere near the 50,000-URL Google limit.** No need to split. Daily report tracks "Split `sitemap.xml` into `sitemap_index.xml` once URL count exceeds ~500" as a FUTURE item. Carry.

---

## Site architecture for the bundle deploy (deploy-day checklist)

When the bundle ships (whenever — Day 11 today, escalation in flight), these architectural items move:

**Goes live with the bundle:**
- `/dashboard/layout.tsx` (was naked metadata) — `/dashboard` becomes a credible Googlebot crawl target
- `/compare/layout.tsx` (was missing) — `/compare` becomes a credible WebApplication-schema'd page
- `/admin`, `/watchlist`, `/favorites` — `noindex` becomes source-controlled (currently fragile, see audit §1)
- `world-cup-2026/page.tsx` refactor — server-rendered content shell + client island for interactive WC schedule
- `world-cup-2026/[stadium]/page.tsx` BreadcrumbList — completes the WC cluster's schema chain

**Does not change with the bundle** (still pending separate work):
- `/venues` and `/tickets` hub pages — Phase 1a, planned for next sprint
- `/llms.txt` — should be in same commit but is a separate file
- Navbar / footer addition of `/how-it-works` + `/faq` — CRO Agent dep
- `/login` and `/register` removed from sitemap — Eng

**Verification commands** (post-deploy, architecture-scoped):

```bash
# Hub pages don't yet exist; expect 404 on these until Phase 1a ships
curl -sI https://www.ticketscan.io/venues  | head -1   # currently 404; expected 200 after Phase 1a
curl -sI https://www.ticketscan.io/tickets | head -1   # currently 404; expected 200 after Phase 1a

# Bundle deploy verification
curl -s https://www.ticketscan.io/dashboard | grep -oE '<title>[^<]+'  # expect "Search Concert..." not generic root
curl -s https://www.ticketscan.io/compare   | grep -c WebApplication   # expect 1
curl -s https://www.ticketscan.io/world-cup-2026/metlife-stadium | grep -c BreadcrumbList  # expect 1+
```

---

## Action items (architecture scope, rolling)

| # | Priority | Item | Owner | Effort | Status |
|---|----------|------|-------|--------|--------|
| 1 | P0 | Ship the bundle (architectural prereq for everything below) | Eng | 15 min | Day 11 |
| 2 | P1 | Build `/venues` hub | Eng | 1.5 hr | Phase 1a, post-bundle |
| 3 | P1 | Build `/tickets` hub | Eng | 1.5 hr | Phase 1a, post-bundle |
| 4 | P2 | Add `/how-it-works` + `/faq` to navbar/footer | CRO | 15 min | Filed 2026-04-20 |
| 5 | P2 | Audit `/dashboard` body for hub-link affordances post-bundle | SEO/CRO | 30 min | New 2026-04-27 |
| 6 | P3 | Sitemap: split into sitemap_index when URLs > 500 | Eng | — | FUTURE |
| 7 | P3 | Re-audit URL namespace at >100 `/tickets/[slug]` slugs | SEO | — | FUTURE |

---

*Next review: 2026-05-04. If the bundle has shipped, this doc grows with hub-page implementation review. If not, it compresses to a one-line "no architectural change; see audit §1.".*
