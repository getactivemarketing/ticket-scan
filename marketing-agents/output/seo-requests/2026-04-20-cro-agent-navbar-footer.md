# CRO Agent Handoff — Week of 2026-04-20

**From:** SEO Specialist (Agent 2)
**To:** CRO Agent (Agent 6)
**Source:** `seo-audit-week-2026-04-20.md` §6

Three asks, ordered by impact. The first two are trivial diffs with outsized SEO + UX upside.

---

## Ask 1 — Add "How It Works" to the unauthenticated navbar

**Why:**
- `/how-it-works` carries HowTo JSON-LD (pending deploy of the working-tree bundle) and is a trust/conversion page.
- It is not linked from the main navigation, only from footer and homepage CTAs. Nav links carry disproportionate PageRank weight and Google uses nav membership as a priority signal.
- Every other page in our navigation (Dashboard, Compare, Blog, World Cup) is either product or content. How-It-Works is the product explainer; it belongs beside them.

**Implementation:** `web/src/components/Navbar.tsx`.

**Desktop nav — unauthenticated branch (lines 87–107):**
Insert "How It Works" between "Blog" and "World Cup 2026":
```tsx
<Link href="/blog" className="text-white/80 hover:text-white transition-colors text-sm">
  Blog
</Link>
<Link href="/how-it-works" className="text-white/80 hover:text-white transition-colors text-sm">
  How It Works
</Link>
<Link href="/world-cup-2026" className="..."> ... </Link>
```

**Mobile nav — unauthenticated branch (lines 168–190):**
Same insertion between "Blog & Tips" and "World Cup 2026":
```tsx
<Link href="/how-it-works" className="block text-white hover:text-white/80 py-2 transition-colors" onClick={closeMenu}>
  How It Works
</Link>
```

**Effort:** ~10 lines of diff, 15-minute task including a quick visual QA on desktop + mobile.
**Priority:** HIGH — ship with the next deploy.

---

## Ask 2 — Add "FAQ" to the Footer

**Why:**
- `/faq` has 16 Q&A with `FAQPage` JSON-LD. It's rich-results-eligible but mostly unlinked from the main site.
- Footer links don't carry the weight of nav links, but they supply sitewide crawlability and are the standard place users look for support content.

**Implementation:** `web/src/components/Footer.tsx` (please audit existing column structure — I haven't inspected it this week, but the request is straightforward).

- If a "Help" / "Support" column exists: add "FAQ" and "How It Works" links there.
- If it doesn't: add one as the rightmost column. Include "FAQ", "How It Works", and (optionally) "Contact" / "Support".

**Effort:** ~15 min.
**Priority:** MEDIUM.

---

## Ask 3 — Resolve the `/dashboard` vs `/compare` CTA ambiguity (A/B test proposal)

**Why:** Users landing on the homepage see two near-peer CTAs — "Search" and "Compare" — without clear guidance on which to click. Qualitatively this feels like friction; quantitatively we'd want analytics data before committing. This is CRO's domain, not SEO's, but flagging because the nav structure implications intersect with the site-architecture recommendations in `seo-audit-week-2026-04-20.md` §4.

**Proposal:** Consider a homepage hero A/B test —
- **Variant A (control):** current two CTAs.
- **Variant B:** single "Find & Compare Tickets" button → `/dashboard` with an inline toggle/tab to `/compare`.

**Metrics to track:**
- CTR on hero CTA
- % of users who reach `/compare` at all (funnel)
- Newsletter signup rate (downstream conversion)
- Bounce rate on `/dashboard` and `/compare`

**Effort:** Depends on A/B infrastructure. If we have GrowthBook or similar: ~1 day. If not: defer.
**Priority:** LOW (out of SEO-scope, observational flag only).

---

## Not a CRO ask, but for awareness

The SEO audit §7 also files a backend request for a `price-history/aggregate` endpoint. That unblocks Phase 1c programmatic pages (`/best-time-to-buy/[category]`), which in turn will offer CRO significantly more conversion surface than the existing pages. Heads-up so CRO can plan any experiment design for those pages in May.
