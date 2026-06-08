# SEO Weekly Deep-Dive — Week of 2026-06-08

**Agent:** SEO Specialist (Agent 2)
**Site:** https://www.ticketscan.io
**Date:** Monday, 2026-06-08
**Prior weekly:** [seo-audit-week-2026-06-01.md](./seo-audit-week-2026-06-01.md)
**WC opening match:** **3 days out** (2026-06-11)
**Method:** Every finding re-verified against current working-tree source (file:line cited) and a clean `npm run build`. No live-network/GSC claims are asserted as fact — those are labeled UNVERIFIED.

> Note on skills: the Agent-2 task references `seo-audit`, `ai-seo`, `programmatic-seo`, and `site-architecture` skills. Those skills are **not installed** in this environment, so they could not be invoked. This audit was done directly against source — which is also the correction the [stale-escalation spiral](../../../.claude/...) memory demands.

---

## TL;DR — this week I shipped instead of re-specced

Last week's audit ended with a 5-item ship train and two follow-up specs (hub pages, llms.txt). The recurring failure mode of this agent has been **writing the same fixes every week and never landing them**. So this week, after re-verifying state, I **applied the safe, high-value changes directly to the working tree** and verified them with a full production build.

**Shipped to working tree this week (build-verified, NOT yet committed):**

| Fix | Files | Impact |
|---|---|---|
| `/contact` page created (was a **live 404** linked in the global footer on every page) | `src/app/contact/page.tsx` | Kills a sitewide broken internal link; adds ContactPage + Organization JSON-LD (E-E-A-T / AI-SEO) |
| `/venues` hub page built (24 → directory of all 25 venue guides, grouped by state) | `src/app/venues/page.tsx` | De-orphans 25 venue pages; CollectionPage + ItemList JSON-LD |
| `/tickets` hub page built (cities + categories directory) | `src/app/tickets/page.tsx` | De-orphans 37 city/category pages; CollectionPage + ItemList JSON-LD |
| `/llms.txt` published | `public/llms.txt` | AI-search discoverability |
| Hubs + contact added to sitemap | `src/app/sitemap.ts` | Indexable |
| Hub links added to global footer | `src/components/Footer.tsx` | Every page → hubs → all 62 programmatic pages (internal PageRank flow) |
| `/login` + `/register` removed from sitemap, added to robots disallow | `sitemap.ts`, `robots.ts` | Stops indexing auth pages |

**Verification:** `npx tsc --noEmit` clean; `npm run build` exit 0; new routes `/contact`, `/venues`, `/tickets` all prerender as static. See §6.

**The one thing blocking all of this from reaching users → §1.**

---

## 1. P0 (process, not code) — a full PR of verified SEO fixes is sitting UNCOMMITTED

This is the single most important finding of the week.

**Evidence:** The canonical-host fix, `alternates.canonical` on all 4 programmatic templates, and WC-stadium `BreadcrumbList` — the work recorded as "fixed 2026-06-03" — are all present in the working tree but **uncommitted**:
- `git log` for `web/src/app/{sitemap,layout}.ts` and the templates shows the last commit is `f2cf194 "Rebrand frontend to new design system"`. No SEO commit since.
- `git diff --stat web/src/app/` shows 12 modified template files (508 insertions) as **working-tree changes vs HEAD**.
- The only recent commits are the daily marketing-agent output commits, which touch `marketing-agents/` — **not** `web/`.

**What this means:** Production (Vercel, built from `git push`) is running the **pre-fix** code. So if anyone checks live HTML and sees no `alternates.canonical`, no WC breadcrumb, apex URLs, login/register in the sitemap — that is **expected**, because the fixes were never committed. This is almost certainly the real, mundane explanation behind the old "production diverges from git" escalation: production is *behind* the working tree, not ahead of it.

**Action (the actual blocker):** commit and push `web/` to deploy. Per project rules I do not push autonomously — **this needs a human/architect to run it.** Suggested single commit:
```bash
git add web/src web/public
git commit -m "SEO: canonical host, self-canonicals, WC breadcrumbs, hub pages, /contact, llms.txt, sitemap/robots cleanup"
git push    # triggers Vercel deploy
```
Until this happens, every weekly audit will keep "finding" fixes that already exist in the tree. **Shipping = committing.**

⚠️ **One pre-commit check:** `/contact` publishes `support@ticketscan.io` as the support address (the conventional alias). Confirm that mailbox/alias is live before committing, or swap it for the real address. It's isolated to one constant (`SUPPORT_EMAIL` in `contact/page.tsx`).

---

## 2. Verified current inventory

| Page type | Count | Source / build evidence |
|---|---|---|
| Static (sitemap, post-change) | 13 | `sitemap.ts` (added `/venues`, `/tickets`, `/contact`; removed `/login`, `/register`) |
| Blog posts | 19 | build: `/blog/[slug]` = 19 paths |
| Venues `/venues/[slug]` | 25 | build: `/venues/[slug]` = 25 paths |
| City + category `/tickets/[slug]` | 37 (24 + 13) | build: `/tickets/[slug]` = 37 paths |
| World Cup main + stadiums | 1 + 16 | build: `/world-cup-2026/[stadium]` = 16 paths |
| **New hub pages** | 2 | `/venues`, `/tickets` now static |
| **Total indexable** | **~110** | distinct, no collisions |

CLAUDE.md still says "24 venues / 78 SEO pages" — both stale (true: 25 venues, ~110 pages). Low-priority doc fix; flagged again for the architect.

---

## 3. Open issues remaining (ranked)

### P1 — Deploy the uncommitted PR (see §1). Everything else is downstream of this.

### P2 — `maximumScale: 5` viewport cap
`layout.tsx:29`. Capping zoom is a mobile-usability/accessibility ding. 1-line removal. (Carried from last week; bundle into the same PR.)

### P3 — CLAUDE.md SEO-page counts stale (§2). Doc-only.

### P3 — Thin-content risk on single-venue city pages (UNVERIFIED at scale)
Several `cities.ts` entries map to a single venue (e.g. `orlando` → `kia-center` only). City page and that venue page can read very similarly. Not a confirmed duplicate-content penalty — would need a live crawl/GSC to confirm. **Monitor, don't escalate.** Mitigation if confirmed: differentiate city-page intro copy + add the "events across the city" framing the hub now reinforces. Hand to Content Agent (brief filed).

**No P0 *code* issues found.** The lowPrice regression, dashboard metadata, and slug-collision items from the spiral remain debunked/fixed (see last week §1).

---

## 4. Programmatic SEO — WC is 3 days out; freeze structural changes, ship copy only

With the opening match on **2026-06-11**, this is a traffic-capture window, not a build window. Recommendations:
- **Do NOT** ship new programmatic page *types* this week — no time to index before the tournament. (Country/team pages, `/best-time-to-buy/[category]`, `/compare/[event]` all remain post-tournament backlog — see [seo-programmatic-expansion-2026-06-01.md](./seo-programmatic-expansion-2026-06-01.md), unchanged.)
- **DO** make sure the 16 existing WC stadium pages + main page are deployed with the breadcrumb fix (§1) before the 11th.
- The new `/venues` and `/tickets` hubs are the only structural change worth shipping now because they de-orphan existing, already-indexed pages — pure upside, no new thin pages.

⚠️ **Data-accuracy guardrail:** `worldcup.ts` still contains **pre-draw placeholder fixtures** (per project memory: venue match counts/groups/dates are wrong vs real FIFA). Do not generate WC content that asserts specific fixtures/match counts from that file. Stadium pages should stay on evergreen ticket-guidance copy until the data is rebuilt. (Flagged to Content Agent.)

---

## 5. AI Search Optimization

- ✅ **`/llms.txt` shipped this week** (`public/llms.txt`) — concise site summary, key facts, and a "facts for citation" block written in quotable form.
- **Still recommended (Content Agent):** expand FAQ answers to self-contained 40–60-word paragraphs (each answer should make sense quoted out of context) and add an `FAQPage` JSON-LD block to the World Cup main page. Detail unchanged from [seo-ai-optimization-2026-06-01.md](./seo-ai-optimization-2026-06-01.md).
- The new `/contact` page adds `Organization` + `ContactPoint` structured data, which strengthens entity recognition for AI assistants ("is TicketScan legit / how do I contact them").
- **UNVERIFIED:** actual citation presence in ChatGPT/Perplexity/AI Overviews — no live access this run. Don't report ranking/citation numbers we can't pull.

---

## 6. Site Architecture Review

**Before:** 62 programmatic pages (25 venues + 37 tickets) had **no crawlable hub** — reachable only via sitemap and scattered in-page links. Footer also pointed at a non-existent `/contact`. Navigation depth to a venue page from the homepage was effectively >3 clicks (or sitemap-only for bots).

**After (this week's changes):**
```
Home / Footer (every page)
 ├── /venues  (NEW hub)  → all 25 venue guides (grouped by state)
 ├── /tickets (NEW hub)  → 13 categories + 24 cities
 ├── /world-cup-2026     → 16 stadium guides
 ├── /blog               → 19 posts
 └── /contact (NEW)      → real page (was 404)
```
Every programmatic page is now ≤2 clicks from the homepage via the footer, and the ItemList JSON-LD on each hub gives crawlers an explicit index. This is the highest-leverage architecture change available short of a top-nav redesign.

**Remaining architecture recommendation (backlog, post-WC):** add `/venues` and `/tickets` to the top **Navbar** (not just footer) for users; and consider a city↔venue cross-link block on the `[slug]` templates (the data already supports it via `city.venueIds` / `venue.citySlug`).

**Build verification of the new architecture:**
```
○ /contact      (Static)
○ /tickets      (Static)
○ /venues       (Static)
● /tickets/[slug]   37 paths
● /venues/[slug]    25 paths
● /world-cup-2026/[stadium]  16 paths
build exit: 0
```

---

## 7. This week's ship train (one PR — mostly already in the tree)

| # | Pri | Item | Status |
|---|-----|------|--------|
| 1 | P0 | **Commit + push `web/`** (canonical, self-canonicals, WC breadcrumbs from 06-03 + this week's items) | ⬜ needs human (push) |
| 2 | P1 | `/contact` page (fix sitewide 404) | ✅ in tree, build-verified |
| 3 | P1 | `/venues` + `/tickets` hub pages | ✅ in tree, build-verified |
| 4 | P2 | `/llms.txt` | ✅ in tree |
| 5 | P2 | Footer hub links + sitemap entries | ✅ in tree |
| 6 | P3 | Drop `/login`,`/register` from sitemap; add to robots | ✅ in tree |
| 7 | P2 | Remove `maximumScale: 5` | ⬜ 1-line, optional in same PR |
| — | pre | Confirm `support@ticketscan.io` is a live inbox | ⬜ before commit |

---

## 8. Verification commands (re-runnable)
```bash
cd web
ls src/app/contact/page.tsx src/app/venues/page.tsx src/app/tickets/page.tsx public/llms.txt   # all exist
grep -c "/login\|/register" src/app/sitemap.ts          # expect 0
grep -rc "https://ticketscan.io\"" src/app | grep -v ':0' # expect empty (no apex)
npx tsc --noEmit                                          # clean
npm run build                                             # exit 0, /contact /venues /tickets static
# After deploy, confirm the PR actually shipped:
git log --oneline -3 -- web/src                          # expect a new SEO commit
```

## 9. Handoffs filed this week
- **Content Agent (Agent 1):** [seo-requests/2026-06-08-content-agent-briefs.md](./seo-requests/2026-06-08-content-agent-briefs.md) — FAQ answer rewrites for AI extraction; thin city-page differentiation; WC evergreen-copy guardrail.
- **CRO Agent (Agent 6):** [seo-requests/2026-06-08-cro-agent-requests.md](./seo-requests/2026-06-08-cro-agent-requests.md) — hub-page CTA placement; /contact trust signals.

— SEO Agent
