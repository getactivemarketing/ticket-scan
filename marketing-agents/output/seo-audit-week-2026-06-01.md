# SEO Weekly Deep-Dive — Week of 2026-06-01

**Agent:** SEO Specialist (Agent 2)
**Site:** https://www.ticketscan.io
**Date:** Monday, 2026-06-01 (weekly window; Tuesday cadence pulled forward one day)
**Prior weekly:** [seo-audit-week-2026-05-25.md](./seo-audit-week-2026-05-25.md)
**WC opening match:** 10 days out (2026-06-11)
**Method:** Every finding below was re-verified against the **current working-tree source** today (file:line cited). Claims I could not verify without live network/GSC access are labeled UNVERIFIED.

---

## TL;DR — what changed in how this audit is written

The last five weekly audits routed almost all substance into an escalation narrative ("Memo #1–#5", a mysterious "partial-deploy path", "production diverges from git"). Re-reading the actual source today, **three of those audits' flagship blockers are already fixed in git**, and a fourth never existed. The simplest explanation is not a rogue deploy pipeline — it is that the audits stopped re-reading the code and kept re-escalating stale findings.

This week I reset to evidence. I re-read every template, debunked the stale items, and reduced the real open list to a short, shippable set. I am explicitly **retiring the "Memo #5 / partial-deploy" framing** until someone produces a reproducible diff between a current-`main` build and live HTML. See §6.

**Severity:** P0 (Critical) > P1 (High) > P2 (Medium) > P3 (Low)

---

## 1. Closed / debunked since last audit

| Prior claim | Prior severity | Reality today | Evidence |
|---|---|---|---|
| `lowPrice` four-digit regression (~$15k) | P0 "Day 16" | **FIXED.** `extractLowestPrice()` scans every section for the true minimum; a code comment documents that it fixed the suite-tier ~$15k bug. | `world-cup-2026/[stadium]/page.tsx:59-68` |
| `/dashboard` naked metadata, no layout | P1 "Day 36" | **FIXED.** `dashboard/layout.tsx` exists and sets metadata incl. `alternates`. | `dashboard/layout.tsx` |
| City/category slug collision (3 shadowed pages, "104 vs 107") | P1 NEW | **DOES NOT EXIST.** `comm -12` of 24 city slugs ∩ 13 category slugs = **0 overlaps**. The 37 `/tickets/[slug]` params are all distinct. | `cities.ts` (24) / `categories.ts` (13), zero intersection |
| Blog Article schema "only live via partial deploy" | P0 evidence | Article + BreadcrumbList + WebPage + ImageObject + Organization JSON-LD are all **present in git**. | `blog/[slug]/page.tsx` `@graph` |

**Action:** these are closed. The prior agent's own errata (`seo-requests/2026-05-27-wc-lowprice-erratum.md`, `2026-06-01-worldcup-data-erratum.md`) already started this correction; this audit completes it.

---

## 2. Verified current inventory

| Page type | Count | Source |
|---|---|---|
| Static (sitemap) | 10 | `sitemap.ts:15-76` |
| Blog posts | 19 | `blog.ts` |
| Venues `/venues/[slug]` | 25 | `venues.ts` (note: was 24 in CLAUDE.md; one added) |
| City pages `/tickets/[slug]` | 24 | `cities.ts` |
| Category pages `/tickets/[slug]` | 13 | `categories.ts` |
| World Cup main | 1 | `sitemap.ts:111-118` |
| World Cup stadiums | 16 | `worldcup.ts` |
| **Total emitted** | **88** | distinct, no collisions |

CLAUDE.md says "24 venues / 78 SEO pages" — both stale. True SEO-page count is **88**. Recommend updating CLAUDE.md §"SEO Pages".

---

## 3. Real open issues (re-verified, ranked by impact ÷ effort)

### P1 — Canonical-host inconsistency (apex vs www)
**Evidence:** Primary domain per CLAUDE.md is `https://www.ticketscan.io`, but the code emits the **apex** everywhere:
- `layout.tsx:41` `metadataBase: new URL("https://ticketscan.io")`
- `sitemap.ts:8` `BASE_URL = 'https://ticketscan.io'`
- `robots.ts:18` `sitemap: 'https://ticketscan.io/sitemap.xml'`
- **73** hard-coded `https://ticketscan.io` (non-www) refs across 14 files in `src/app/` (JSON-LD `@id`/`url`, OG `url`, BreadcrumbList items).
- `next.config.ts` contains **no** redirect — any apex→www (or www→apex) redirect is configured at the Vercel domain level, which I **cannot verify from here (UNVERIFIED)**.

**Why it matters:** Google needs one unambiguous canonical host. Today every canonical signal the app emits points at the apex; if the served/primary host is `www`, those signals point at the non-primary host. Whether that currently causes a redirect hop is the UNVERIFIED part — but the *inconsistency itself* is real and fixable in code.

**Decision required (this is the actual blocker, not a deploy mystery):** pick the canonical host. Recommendation: **`www`**, since CLAUDE.md and all marketing list `www.ticketscan.io`.

**Fix (≈30 min):** flip the three constants below, then sweep the 73 hard-coded refs (mechanical find/replace `https://ticketscan.io` → `https://www.ticketscan.io`), and add a host redirect.
```ts
// layout.tsx:41
metadataBase: new URL("https://www.ticketscan.io"),
// sitemap.ts:8
const BASE_URL = 'https://www.ticketscan.io';
// robots.ts:18
sitemap: 'https://www.ticketscan.io/sitemap.xml',
```
```ts
// next.config.ts — belt-and-suspenders host redirect (in addition to Vercel domain setting)
async redirects() {
  return [{
    source: '/:path*',
    has: [{ type: 'host', value: 'ticketscan.io' }],
    destination: 'https://www.ticketscan.io/:path*',
    permanent: true,
  }];
}
```
**Verification after ship:** `curl -sI https://ticketscan.io/ | grep -i location` (expect 301→www) and `curl -s https://www.ticketscan.io/sitemap.xml | grep -c '>https://ticketscan.io<'` (expect 0).

### P1 — No self-referencing `alternates.canonical` on programmatic templates
**Evidence:** `alternates` appears only in `dashboard/layout.tsx` and `compare/layout.tsx`. The four high-value programmatic templates set OG `url` but **no canonical** in `generateMetadata`:
- `venues/[slug]/page.tsx:37-52`
- `tickets/[slug]/page.tsx:73-88`
- `world-cup-2026/[stadium]/page.tsx` (metadata block)
- `blog/[slug]/page.tsx`

**Why it matters:** these are the pages most exposed to query-string/tracking-param duplication (the "Track Price" CTAs and ad landing traffic append params). Without explicit canonicals, param variants can dilute or split indexing.

**Fix (≈20 min, per template):** add to each `generateMetadata` return:
```ts
alternates: { canonical: `https://www.ticketscan.io/venues/${slug}` },
```
(adjust path per template). Pairs naturally with the P1 host fix above — do them in one pass.

### P1 — Hub pages `/venues` and `/tickets` 404, and one is referenced in structured data
**Evidence:** neither `app/venues/page.tsx` nor `app/tickets/page.tsx` exists. Meanwhile `tickets/[slug]/page.tsx:207-208` emits a BreadcrumbList ListItem pointing at `https://ticketscan.io/tickets` — **a URL that 404s.** That is a broken link *inside* structured data on up to 37 pages.

**Why it matters:** (a) invalid breadcrumb target can suppress breadcrumb rich results; (b) 88 programmatic pages have no crawlable index/hub — they're reachable only via sitemap and scattered sidebar links, weakening internal PageRank flow. See architecture review §4.

**Fix (≈3 hr):** build two static hub pages listing all venues / all cities+categories with descriptive copy. Full spec in [seo-architecture-review-2026-06-01.md](./seo-architecture-review-2026-06-01.md).

### P2 — World Cup stadium pages have no BreadcrumbList
**Evidence:** `grep -c BreadcrumbList world-cup-2026/[stadium]/page.tsx` → **0**. Venue and city/category templates have breadcrumbs; the 16 WC stadium pages do not. With WC 10 days out these are the highest-traffic pages on the site.
**Fix (≈45 min):** add a 3-level BreadcrumbList (`Home → World Cup 2026 → {Stadium}`) to `stadiumJsonLd`, mirroring the venue template's shape.

### P2 — `/llms.txt` missing (AI SEO)
**Evidence:** no `public/llms.txt`. Detail in [seo-ai-optimization-2026-06-01.md](./seo-ai-optimization-2026-06-01.md).
**Fix (≈10 min):** static file under `web/public/`. Spec in the AI-SEO doc.

### P3 — `/login` and `/register` in sitemap
**Evidence:** `sitemap.ts:52-63` lists both at priority 0.3. Auth pages shouldn't be indexed.
**Fix (2 min):** remove both entries; optionally add `/login`, `/register` to `robots.ts` disallow.

### P3 — `maximumScale: 5` viewport
**Evidence:** `layout.tsx:29`. Capping zoom is an accessibility/mobile-usability ding (minor). Consider removing the cap.

---

## 4. Programmatic SEO — see companion
[seo-programmatic-expansion-2026-06-01.md](./seo-programmatic-expansion-2026-06-01.md). Headline: with WC 10 days out, the only programmatic play with runway is **WC country/team landing pages** (single-file builds). Everything else is post-tournament.

## 5. AI Search Optimization — see companion
[seo-ai-optimization-2026-06-01.md](./seo-ai-optimization-2026-06-01.md). Headline: ship `/llms.txt`, expand FAQ answer paragraphs to quotable 40–60-word blocks, and add an FAQPage block to the WC main page.

## 6. Retiring the "production divergence" escalation

The Memo #1–#5 thread claimed production serves HTML that current `main` cannot produce, implying a deploy path that bypasses git. I'm standing this down because:
1. The three findings it used as evidence of "frozen bundle / partial deploy" are all **present and correct in current git** (§1). A normal `git push → Vercel` deploy explains everything observed.
2. I cannot reproduce the claimed divergence (no verified live-network access from this run), and neither did the escalations attach a clean, current `diff`.
3. Five weeks of memos produced zero shipped fixes. The framing converted shippable 20-minute edits into an unanswerable governance question.

**Replacement, single empirical step (assign to whoever owns deploys):**
```bash
cd web && npm run build && npm start    # build current main
# then compare one route's rendered HTML to live:
diff <(curl -s http://localhost:3000/world-cup-2026/att-stadium | grep -oE '"lowPrice":[0-9]+') \
     <(curl -s 'https://www.ticketscan.io/world-cup-2026/att-stadium?_cb=1' | grep -oE '"lowPrice":[0-9]+')
```
If those match → there is no divergence; resume normal ship cadence. If they differ → *that* is a real finding, file it with the diff attached. Either way, stop blocking SEO fixes on it.

---

## 7. Recommended ship train (one normal PR, ~1.5 hr total)

| # | Pri | Item | Effort | File(s) |
|---|-----|------|--------|---------|
| 1 | P1 | Canonical host → www (3 constants + redirect + 73-ref sweep) | 30m | layout/sitemap/robots/next.config + sweep |
| 2 | P1 | `alternates.canonical` on 4 programmatic templates | 20m | venues/tickets/wc-stadium/blog |
| 3 | P2 | BreadcrumbList on WC stadium pages | 45m | world-cup-2026/[stadium] |
| 4 | P2 | `/llms.txt` | 10m | web/public/llms.txt |
| 5 | P3 | Drop /login,/register from sitemap | 2m | sitemap.ts |

Hub pages (P1, 3 hr) ship as a second PR — see architecture doc.

These are ordinary code changes shippable through normal git→Vercel. No special "path" is required. I have written exact diffs/specs so the architect (or I, on request) can apply them in one sitting.

---

## 8. Verification commands
```bash
# Canonical host consistency (after fix)
grep -rc "https://ticketscan.io" web/src/app | grep -v ':0'   # expect empty
# Hub pages exist
ls web/src/app/venues/page.tsx web/src/app/tickets/page.tsx
# WC breadcrumb present
grep -c BreadcrumbList web/src/app/world-cup-2026/\[stadium\]/page.tsx   # expect >=1
# llms.txt
ls web/public/llms.txt
```

## 9. Handoffs filed this week
- **Content Agent:** [seo-requests/2026-06-01-content-agent-briefs.md](./seo-requests/2026-06-01-content-agent-briefs.md)
- **CRO Agent:** [seo-requests/2026-06-01-cro-agent-requests.md](./seo-requests/2026-06-01-cro-agent-requests.md)

— SEO Agent
