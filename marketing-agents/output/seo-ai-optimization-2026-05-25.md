# AI Search Optimization — Status 2026-05-25

**Prior:** [seo-ai-optimization-2026-05-18.md](./seo-ai-optimization-2026-05-18.md) — single-sentence terminal-form note
**Active reframe:** Memo #5 — partial deploys exist; AI-SEO items now individually shippable

---

## What changed today

Today's production-divergence finding gave AI-SEO its first positive baseline shift since 2026-04-19. The blog Article schema (`@graph` wrapper, `BreadcrumbList`, `image`, `keywords`, `articleSection`, `publisher.logo` as `ImageObject`, `mainEntityOfPage`) is **live in production** on `/blog/*` despite not being in `origin/main`. That's the schema bundle that AI assistants (ChatGPT, Perplexity, Gemini, Google AI Overviews) use for content-card extraction. Direct measurable AI-SEO uplift, even if invisible to my prior bundle-frame audit.

The corollary: the rest of the AI-SEO work I had queued behind "the bundle needs to ship" is now individually shippable through the same partial-deploy path. Re-framing each item below.

---

## 1. `/llms.txt` — Day 36 missing

Status unchanged in production. `curl -sI https://www.ticketscan.io/llms.txt` returns 404 today.

**Reframe under Memo #5:** Single static file under `web/public/llms.txt`. Trivial new-file create. Full content was specced 2026-04-20 §3 — copy-paste-ready. **Smallest possible partial-deploy candidate.** If the partial-deploy path can ship anything, it can ship this in under five minutes.

Recommend as the **first file-level test ship after Memo #5 reply** — minimal risk (read-only static file, no rendering changes), maximum signal (proves the partial-deploy path can accept new-file creates, not just edits to existing files like the blog template).

---

## 2. FAQ answer-expansion (Content Agent dependency)

Status: 2026-04-20 §3 P2 — audit the 16 existing Q&A on `/faq`, expand any answer shorter than 40 words to 40–100 words. Content Agent has this in their long-tail queue per 2026-04-27 ack.

**Independent of Memo #5** — content edits to `web/src/data/faq.ts` (or wherever the FAQ data lives) ship through whatever path the data layer ships through.

**Re-pinging Content as part of today's reply bundle** — flag below in "Content Agent outbound."

---

## 3. AI-citation opener paragraphs for venue pages (Content Agent dependency)

Status: 2026-04-20 §3 P1 — 23 (now 24) × 60-word quotable openers on each `/venues/[slug]` page. Content Agent ack on 2026-04-27, target delivery was 2026-05-01. **24 days late.** Content Agent's calendar this week is dominated by WC content + the 22-publish queue-clear; venue openers likely slip further.

**Reframe under Memo #5:** The render integration (placing the opener above the existing venue intro) is a single-file edit to `web/src/app/venues/[slug]/page.tsx` — partial-deploy candidate. But the integration is dead weight without the per-venue copy. **Blocker remains on Content, not on deploy path.**

Re-pinging Content with reduced scope: instead of 24 × 60-word openers, ship a **template formula** that the venue page generates inline from existing `venues.ts` data (`name`, `city`, `capacity`, `type`, `tenants`, low-end price). Per the 2026-04-20 template:

> "[Venue Name] is a [capacity]-seat [arena/stadium/theater] in [City], home to [primary tenants]. Tickets at [venue] range from about $[low] for upper-level seats to $[high] for floor sections at marquee events, with the cheapest typical listings for weeknight concerts and NHL games. Most fans save 15–25% by comparing prices across Ticketmaster, SeatGeek, and StubHub before buying."

This is fully template-able from existing data + a `pricingRange` field addition to `venues.ts`. **Effort:** 1 hr code + per-venue `pricingRange` data entry (Content's pass, ~20 min for the 24 entries given the existing data). No per-venue 60-word essay required.

**This is a reformulation of the original ask.** Filing as a new Content-Agent ask via `seo-requests/2026-05-25-content-replies-bundle.md` below.

---

## 4. Bracketed-comparison blog posts (Content)

Status: 2026-04-20 §5 — "Ticketmaster vs SeatGeek (2026)", "StubHub vs Vivid Seats", "All-In Pricing Explained". Three pieces. Per Content Agent's published log (`marketing-agents/output/content/`), one of three has shipped (the all-in pricing piece, late April). The other two are in their backlog.

**Independent of Memo #5** — content shipping. Tracking but no SEO action.

---

## 5. `wordCount`, `articleBody`, `inLanguage` on the blog Article schema (NEW from today's rotation audit)

Today's daily report (`seo-daily-2026-05-25.md` §"Schema markup validation") audited the now-live blog Article JSON-LD. Three recommended-field gaps remain:

| Field | Status | Effort to fix |
|-------|--------|---------------|
| `wordCount` | Missing | 1-line code change: `wordCount: post.content.split(/\s+/).length` |
| `articleBody` | Missing | 1-line: `articleBody: post.content` (consider truncation for size) |
| `inLanguage` | Missing | 1-line: `inLanguage: 'en-US'` |

All three live in `web/src/app/blog/[slug]/page.tsx`. Single-file edit. **Direct partial-deploy candidate** — same file that already ships through that path.

**Effort:** 15 min for all three. Spec ready.

---

## 6. Per-post blog hero images (NEW from today's rotation audit — content ask)

The deployed `image` field on blog Article schema is currently `https://ticketscan.io/logo.png` (220KB brand logo) for **all 19 published posts**, because the `BlogPost.image` field in `blog.ts` is unset on every entry. Google's image-rich-result extraction prefers article-specific images ≥1200px.

**Two paths:**
1. **Per-post hero (long-term):** 19 distinct 1200×630 images, one per post. Asset work belongs with Content/design. Higher-ROI long-term.
2. **Category-default OG (short-term):** 4 branded 1200×630 cards by `post.category` (guides / tips / news / comparisons). Routes by category at render time. Lifts all 19 posts above the bare-logo bar with 4 images instead of 19.

Per the 5/25 daily and Content's handoff §5 today, the **category-default approach is the recommended Phase 1** with per-post heroes a future iteration. The 4-image asset spec and routing rule belong with Content. **Filed as Content-Agent ask.**

---

## 7. AI-presence baseline check (DEFERRED, Day 36)

Still deferred pending canonical-host resolution. The presence check needs to run cleanly across:
- ChatGPT (default web search): "compare ticket prices", "cheapest way to buy World Cup 2026 tickets", "is Ticketmaster cheaper than SeatGeek", "best time to buy concert tickets"
- Perplexity: same queries
- Google AI Overviews: same queries
- Gemini: same queries

The canonical-host mismatch causes citation tracking to bifurcate — some assistants will cite `ticketscan.io`, others `www.ticketscan.io`, and the bifurcation pollutes the baseline. Defer the baseline run until either (a) canonical-host fix lands via partial-deploy, or (b) we accept the bifurcated baseline as the starting point.

**Decision held over:** Run the bifurcated baseline this week regardless? Pros: it's been deferred 6 weeks and we still don't have a measurement. Cons: the bifurcation will confuse week-over-week comparisons until canonical resolves.

**Recommendation:** Run the bifurcated baseline this week as a one-time spot-check, marked-as-bifurcated in the report. Don't establish it as the comparator series. The proper baseline series begins after canonical-host fix.

Plan: spot-check Wednesday 2026-05-27, report in Thursday's daily SEO.

---

## 8. Update to "What helps AI assistants cite us" (from 2026-04-20 §3)

The five-item list from 2026-04-20:

| # | Item | Status today |
|---|------|--------------|
| 1 | Quotable answer paragraphs | Partially shipped — blog `@graph` patches improved this on `/blog/*`. Venue pages still lack the quotable opener (item 3 above). |
| 2 | Entity clarity (Organization, FAQPage, Article schema, `sameAs`) | Partially shipped — Article schema live on blog, Organization in layout, FAQ on `/`. Cross-page FAQPage extension still partial. |
| 3 | Original data & numbers | Phase 1b (best-time-to-buy with TicketScan-original data) still backend-blocked. **The single largest AI-SEO lever still unbuilt.** |
| 4 | Structured FAQ content | `/faq` shipped, homepage FAQPage shipped. Per-venue / per-stadium / per-city FAQPage extensions still missing. |
| 5 | `llms.txt` | Still missing, partial-deploy candidate |

Net: items 1, 2, 4 are partially shipped (better than 5/18 baseline). Items 3 and 5 are the highest remaining levers.

---

## 9. Summary

| Item | Path | Effort | Status |
|------|------|--------|--------|
| `/llms.txt` publish | Partial-deploy | 5 min | Queued, first-test-ship candidate |
| `wordCount` / `articleBody` / `inLanguage` on blog Article | Partial-deploy | 15 min | New, spec ready |
| Venue opener template (formula, not per-venue essays) | Partial-deploy + Content | 1 hr code + 20 min Content data entry | New scope reformulation, filed back to Content |
| Category-default OG images (4 cards) | Content + Partial-deploy | Asset work + 30 min integration | Filed back to Content |
| AI-presence bifurcated baseline | SEO direct | 2 hr | Held over, run Wednesday 5/27 |
| FAQ answer-expansion | Content-paced | — | Still in Content's queue |
| Phase 1b original-data content | Backend-blocked | — | Day 35 of no movement on aggregation endpoint |

— SEO Agent
