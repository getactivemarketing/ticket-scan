# SEO Technical Audit Report — Week of 2026-04-13

**Agent:** SEO Specialist (Agent 2)
**Site:** https://www.ticketscan.io
**Date:** April 13, 2026
**Severity Scale:** P0 (Critical) > P1 (High) > P2 (Medium) > P3 (Low)

---

## Executive Summary

TicketScan has a **severe indexation problem**. Despite having 100+ pages in the sitemap, Google shows only **2 indexed pages** (`site:ticketscan.io`). This means 98%+ of our SEO pages — all 24 venues, 37 cities, 17 World Cup pages — are invisible to search. This is the single highest-priority issue and must be resolved before any other SEO work matters.

---

## Findings by Priority

### P0 — CRITICAL: Near-Zero Google Indexation

**Finding:** `site:ticketscan.io` returns only 2 results:
1. Homepage: `https://www.ticketscan.io/`
2. Concerts page: `https://www.ticketscan.io/tickets/concerts`

**Impact:** 98% of programmatic SEO pages (venues, cities, World Cup) are NOT indexed. All SEO investment in these pages is currently wasted.

**Likely Causes:**
1. **www vs non-www mismatch**: Sitemap uses `https://ticketscan.io` (no www) but the live site serves from `https://www.ticketscan.io`. If Vercel isn't properly redirecting non-www to www (or vice versa), Google may be confused about the canonical domain.
2. **Thin content signals**: Programmatic pages may lack enough unique content for Google to consider them index-worthy.
3. **Crawl budget**: Google may not be discovering pages — internal linking from the 2 indexed pages to the rest of the site needs verification.
4. **Rendering issues**: Pages using `'use client'` may not be server-rendering enough content for Googlebot.

**Action Items:**
- [ ] **URGENT**: Verify Vercel redirect config — ensure `ticketscan.io` 301-redirects to `www.ticketscan.io` (or vice versa, pick one canonical)
- [ ] Update `sitemap.ts` BASE_URL to match the canonical domain (currently `https://ticketscan.io`, should be `https://www.ticketscan.io` if that's canonical)
- [ ] Submit sitemap manually in Google Search Console
- [ ] Check Google Search Console for indexation errors, crawl stats, and coverage report
- [ ] Request indexing for top-priority pages manually

---

### P1 — HIGH: Sitemap URL Mismatch

**Finding:** `sitemap.ts` line 8 defines `const BASE_URL = 'https://ticketscan.io'` (no www), but the live site is served at `https://www.ticketscan.io`.

**Impact:** Every URL in the sitemap points to the non-www version. If Google sees these as different from the www URLs it discovers via crawling, it may ignore the sitemap entirely or create duplicate URL confusion.

**Fix:** Change `sitemap.ts` line 8:
```typescript
const BASE_URL = 'https://www.ticketscan.io';
```
Also update `robots.ts` line 17:
```typescript
sitemap: 'https://www.ticketscan.io/sitemap.xml',
```

---

### P1 — HIGH: No Explicit Canonical Tags

**Finding:** No `<link rel="canonical">` tags found in any page template. OpenGraph `url` properties exist but are not a substitute for canonical tags.

**Impact:** Without canonical tags, Google must guess the canonical URL for each page. Combined with the www/non-www issue, this amplifies indexation confusion.

**Fix:** Add canonical URL to all `generateMetadata()` functions:
```typescript
alternates: {
  canonical: `https://www.ticketscan.io/venues/${slug}`,
},
```

---

### P1 — HIGH: No BreadcrumbList Structured Data

**Finding:** Breadcrumb navigation is rendered visually on venue, city, blog, and World Cup pages, but there's no corresponding `BreadcrumbList` JSON-LD schema.

**Impact:** Google uses BreadcrumbList schema to display breadcrumb trails in search results. Missing this loses SERP real estate and click-through rate.

**Fix:** Add BreadcrumbList JSON-LD to all pages with visual breadcrumbs. Example for venue pages:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ticketscan.io" },
    { "@type": "ListItem", "position": 2, "name": "Orlando", "item": "https://www.ticketscan.io/tickets/orlando" },
    { "@type": "ListItem", "position": 3, "name": "Kia Center" }
  ]
}
```

---

### P2 — MEDIUM: No Hreflang for Multi-Country Content

**Finding:** World Cup pages cover USA, Canada, and Mexico venues but no `hreflang` tags exist.

**Impact:** Low for now (all content is English), but if we ever add Spanish content for Mexico venues or French for Canada, we'll need this. Not urgent but worth noting.

---

### P2 — MEDIUM: City/Category Sitemap URL Collision Risk

**Finding:** In `sitemap.ts`, both city pages (line 95-100) and category pages (line 103-108) generate URLs under `/tickets/[slug]`. If any city slug matches a category slug, the sitemap would have duplicate URLs.

**Impact:** Potential duplicate entries in sitemap. Verify no slug collisions exist between `cities` and `categories` data.

**Fix:** Audit all slugs in `cities.ts` and `categories.ts` to confirm no overlap. Consider separating URL patterns (e.g., `/tickets/city/[slug]` vs `/tickets/category/[slug]`) in a future refactor.

---

### P2 — MEDIUM: Missing `how-it-works` and `faq` from Navbar

**Finding:** Navbar only links to Dashboard, Blog, World Cup, Compare, Watchlist, Favorites. The `/how-it-works` and `/faq` pages are not in the main navigation.

**Impact:** These are important trust/conversion pages. Without navigation links, they rely solely on footer links and internal page links for discovery. Googlebot follows nav links heavily for priority signals.

**Fix:** Add "How It Works" to the unauthenticated navbar. Consider adding FAQ to footer navigation.

---

### P2 — MEDIUM: World Cup Main Page is `'use client'`

**Finding:** `/world-cup-2026/page.tsx` uses `'use client'` directive, meaning the entire page is client-rendered.

**Impact:** Googlebot can render JavaScript, but server-rendered content is indexed faster and more reliably. For a high-priority landing page with 487 lines of content, this is a missed opportunity.

**Fix:** Refactor the World Cup landing page to be a Server Component, or at minimum use a hybrid approach where the static content is server-rendered and only interactive elements are client components.

---

### P3 — LOW: Login/Register in Sitemap

**Finding:** `/login` and `/register` pages are in the sitemap with priority 0.3.

**Impact:** These pages add no SEO value and clutter the sitemap. Google doesn't penalize for this, but it's wasteful.

**Fix:** Remove `/login` and `/register` from the sitemap. They should still be crawlable but don't need sitemap inclusion.

---

### P3 — LOW: Missing Image Alt Text Audit

**Finding:** Could not verify alt text across all pages from code review alone. Images embedded via CSS backgrounds or inline styles may lack alt text.

**Action:** Run an automated accessibility/alt-text audit using Lighthouse or a similar tool.

---

## Robots.txt Review

**Current config (robots.ts):**
- Allow: `/` (all)
- Disallow: `/watchlist`, `/event/`, `/api/`, `/admin`
- Sitemap: `https://ticketscan.io/sitemap.xml` (WRONG — needs www)

**Assessment:** Mostly correct. Blocking `/watchlist`, `/event/`, `/api/`, `/admin` makes sense (auth-required or API). However:
- `/event/` is blocked but individual event pages could be valuable for SEO if they had unique content
- The sitemap URL must match the canonical domain

---

## Competitive Position

**For "compare ticket prices":**
- SeatPick, TicketWhiz, TixSearcher, Ticket-Compare.com all rank
- TicketScan does NOT appear in top 10

**For "World Cup 2026 tickets compare":**
- SeatPick, fifacollect.info, theworldcupguide.com, Gametime rank
- TicketScan does NOT appear

**For "best time to buy tickets":**
- Gametime, TickPick, SeatGeek, FinanceBuzz rank
- TicketScan does NOT appear

**Root cause:** Indexation. Can't rank if you're not indexed.

---

## Action Priority Matrix

| Priority | Issue | Effort | Impact |
|----------|-------|--------|--------|
| P0 | Fix www/non-www canonical + sitemap BASE_URL | 30 min | Unlocks ALL SEO |
| P0 | Submit sitemap to Google Search Console | 10 min | Accelerates indexing |
| P1 | Add canonical tags to all page types | 2 hrs | Prevents duplicate URL issues |
| P1 | Add BreadcrumbList schema | 2 hrs | Better SERP appearance |
| P2 | Refactor WC landing to server component | 3 hrs | Faster indexation |
| P2 | Add how-it-works to navbar | 15 min | Better discovery |
| P2 | Audit city/category slug collisions | 30 min | Prevent sitemap errors |
| P3 | Remove login/register from sitemap | 5 min | Cleaner sitemap |

---

## Recommendations for Other Agents

**Content Agent (Agent 1):** Hold off on new content until indexation is fixed. Focus on enriching existing thin pages.

**CRO Agent (Agent 6):** Add "How It Works" link to navbar for unauthenticated users. The page exists but isn't discoverable enough.

---

*Next audit: Week of 2026-04-20*
