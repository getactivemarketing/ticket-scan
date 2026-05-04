# Site Architecture Review — Status Update 2026-05-04

**Format:** Short status note. Full review still at [seo-architecture-review-2026-04-27.md](./seo-architecture-review-2026-04-27.md).
**Why short:** Per the audit's consolidation commitment while the bundle is unshipped.

---

## Structural state today (verified 2026-05-04)

```
ticketscan.io/
├── /                          (homepage — has FAQPage in working tree, not deployed)
├── /dashboard                 (search — has untracked layout.tsx in bundle)
├── /compare                   (comparison — has tracked compare/layout.tsx; canonical/JSON-LD live)
├── /watchlist                 (auth — noindex via working-tree layout, not in source-of-truth)
├── /favorites                 (auth — noindex via working-tree layout, not in source-of-truth)
├── /admin                     (auth — noindex via working-tree layout, not in source-of-truth)
├── /venues/[slug]             (24+1=25 pages — Wrigley added today)
├── /tickets/[slug]            (37 pages: 24 cities + 13 categories)
├── /world-cup-2026/           (17 pages: 1 hub + 16 stadium)
├── /blog/[slug]               (21 posts — Article @graph in working tree)
├── /how-it-works              (HowTo schema in working tree, step-anchor bug pending fix)
├── /faq                       (16 expanded answers in working tree, signed off, awaiting deploy)
├── /privacy + /terms
└── /login + /register         (still in sitemap — P2 carry, scheduled for post-bundle)
```

**Total: 110 pages** (was 109 last week; +1 Wrigley Field via `636e40b`).

---

## What's still missing structurally

Three architectural prereqs from the 2026-04-27 review remain unbuilt:

1. **`/venues` hub** — gates internal-link distribution across 25 venue pages.
2. **`/tickets` hub** — gates internal-link distribution across 37 city/category pages.
3. **`/best-time-to-buy` hub** — Phase 1c, backend-blocked.

All three are bundle-adjacent (need the WC hub refactor as a reference template) and Eng-capacity-blocked.

---

## What changed this week

### One tactical observation: Wrigley Field surfaces an internal-link gap
The new `/venues/wrigley-field` page links to:
- Its parent city page (`/tickets/chicago`) — good
- Other Chicago venues (none, because we have only one Chicago venue page) — N/A
- The homepage — good
- Direct to ticket-comparison page (`/compare`) — good

It does *not* link to:
- Other MLB venue pages — because we don't have any other MLB venue pages yet (Wrigley is the first MLB stadium per the commit message)
- A central `/sports/baseball` or `/sports/mlb` hub — does not exist
- Any sibling Chicago events/team pages — because they don't exist as separate pages

**Architectural implication:** As the venue inventory expands beyond NBA/NHL/NFL into MLB and other sports, the **single-venue-per-sport** state we just entered with Wrigley creates a temporary internal-link dead-end. The Phase 1a `/venues` hub is the durable fix; in the meantime, the post-bundle PR should add a "More baseball stadiums" placeholder section to venue pages even when there's only one MLB stadium in the dataset, so the link target exists when the second one ships.

**Effort:** ~10 min in `venues/[slug]/page.tsx` once the bundle clears. Not blocking. **Filing for follow-up PR, not this week's bundle.**

### One structural carry: WC hub remains the reference template
`world-cup-2026/page.tsx` is still mid-refactor in the bundle (pulls in `WorldCupSchedule.tsx` as a child component for client-side reactivity). Once it ships, it becomes the reference template for the `/venues` and `/tickets` hubs. Until it ships, hub pages cannot start cleanly.

### One observation that is stable, not a change: navbar
Navbar still does not surface `/how-it-works`. CRO Agent has the ask filed (2026-04-20). No change. Bundle-blocked the same way everything else is bundle-blocked.

---

## URL structure — no change recommended this week
The structure is already optimal for crawl + user navigation. No URL restructures recommended; introducing redirects on top of an already-broken canonical situation would compound the canonical-selection problem in GSC. **First fix the canonical domain, then consider any URL changes (and probably don't).**

---

## Internal linking — measurement deferred
A proper internal-link distribution audit (PageRank flow simulation, orphan detection, depth-from-homepage measurement) requires Lighthouse + a crawl tool against production. **Deferred until post-bundle** — there's no point measuring against a build that doesn't have the layout files we know are pending.

The 2026-04-20 review's manual orphan check (zero true orphans, several deep-but-linked pages) is still the working baseline.

---

## Next rotation actions
1. If bundle ships → run a Screaming Frog or `lychee` crawl from the homepage, measure depth-from-home for all 110 URLs, identify any orphans (expected: zero), measure inbound link counts per programmatic page.
2. Build the `/venues` and `/tickets` hubs templated on the post-deploy WC hub.
3. Add the "more sports" placeholder section to single-sport venue pages (Wrigley Field surfaces this gap).
4. If bundle does not ship → architectural review remains a single line next week. The architecture is what it is until the bundle commits the new layouts.
