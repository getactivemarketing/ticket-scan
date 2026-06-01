# Site Architecture Review — 2026-06-01

**Agent:** SEO Specialist (Agent 2) · Companion to [seo-audit-week-2026-06-01.md](./seo-audit-week-2026-06-01.md)

## Current structure (verified routes)
```
/ (home)
├── /dashboard            (search; has layout.tsx + metadata ✓)
├── /compare              (has layout.tsx + metadata ✓)
├── /watchlist /favorites (auth; disallowed in robots ✓)
├── /venues/[slug]        25 pages
├── /tickets/[slug]       37 pages (24 city + 13 category)
├── /world-cup-2026       hub
│   └── /[stadium]        16 pages
├── /blog + /blog/[slug]  19 posts
├── /how-it-works /faq /login /register /privacy /terms
└── /event/[id] /admin/api  (disallowed in robots ✓)
```

## The one structural problem: missing middle tier

The site is **two-level**: homepage → 88 leaf pages. There are **no hub/index pages** between them.

- `app/venues/page.tsx` → **404**
- `app/tickets/page.tsx` → **404** — and this 404 is referenced as a BreadcrumbList target on up to 37 `/tickets/[slug]` pages (`tickets/[slug]/page.tsx:207-208`). Broken link inside structured data.

Consequences:
1. **Crawl/PageRank flow is weak.** Leaf pages are reachable mainly via the sitemap and a few sidebar links. There's no crawlable directory that links to all 25 venues or all 37 city/category pages, so link equity doesn't distribute well across the namespace.
2. **No browsing entry point** for users who land on a leaf and want siblings.
3. **Breadcrumb rich-result eligibility** is undercut by the 404 target.

## Recommendation 1 (P1) — build the two hub pages
**`/venues` (`app/venues/page.tsx`):** static page listing all 25 venues grouped by city/state, each linking to `/venues/[slug]`; 150–250 words of intro copy; ItemList JSON-LD; self-canonical; add to sitemap (priority 0.7).
**`/tickets` (`app/tickets/page.tsx`):** two sections — "Browse by city" (24) and "Browse by category" (13); same treatment. This also makes the existing breadcrumb target resolve.
**Effort:** ~3 hr for both. Ship as its own PR after the audit's §7 ship train.

## Recommendation 2 (P2) — tighten internal linking between clusters
- Venue pages already link **down** to their city page (`/tickets/{citySlug}`) ✓. City pages link to up to 4 related venues ✓. Good.
- **Missing:** WC stadium pages don't link to the corresponding standard venue page (e.g. `/world-cup-2026/metlife-stadium` ↔ `/venues/metlife-stadium`) or to a country page. Add reciprocal links — concentrates topical authority on the WC cluster right before the event.
- **Missing:** blog posts don't systematically link into venue/city/WC pages. Add contextual links from the high-traffic guides ("best time to buy", "Ticketmaster vs SeatGeek") into relevant hub/leaf pages.

## Recommendation 3 (P3) — depth check
Most leaf pages are within 2 clicks of home **only via the sitemap/footer**, not via crawlable nav. After hub pages land, add `/venues` and `/tickets` (and `/world-cup-2026`) to the primary nav so the important clusters are ≤2 clicks through real links. Coordinate with CRO (Navbar change request filed).

## Proposed target topology
```
Home
├── /venues (hub) ──────────→ 25 venue pages ──→ city pages
├── /tickets (hub) ─────────→ 37 city/category pages ──→ venue pages
├── /world-cup-2026 (hub) ──→ 16 stadium pages ⇄ matching /venues/* 
│                          └→ 12 country pages (proposed) ──→ stadium pages
└── /blog ─────────────────→ 19 posts ──(contextual links)──→ hubs/leaves
```

## Summary
No URL-structure overhaul needed — the slug scheme is clean and collision-free. The single high-value structural fix is **adding the two hub pages** (resolves a real 404-in-structured-data and unlocks PageRank flow), followed by reciprocal WC↔venue linking before 6/11.
