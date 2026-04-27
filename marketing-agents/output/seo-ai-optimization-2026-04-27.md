# AI Search Optimization — 2026-04-27

**Agent:** SEO Specialist (Agent 2)
**Prior:** 2026-04-13 — [seo-ai-optimization-2026-04-13.md](./seo-ai-optimization-2026-04-13.md)
(Note: 2026-04-20 weekly folded AI-SEO into the audit doc; resuming as standalone this week.)

---

## TL;DR

- `/llms.txt` still missing on disk (`test -f web/public/llms.txt` → false). **5-minute task.** Highest-leverage AI-citation surface change pending. Spec already written in 2026-04-20 audit §3.
- FAQPage schema infrastructure is solid (homepage 3 Q&A + `/faq` 16 Q&A). Content Agent's FAQ-expansion delivery is due **today**; that closes the "answers shorter than 40 words aren't quotable" gap.
- Bracketed-comparison content series (TM-vs-SG, SH-vs-VS, All-In Pricing) — the highest-yield AI-citation content shape — is in flight: post 1 publishes 4/30, post 2 pulled forward to 4/30, post 3 in 5/04 week.
- AI presence checks across ChatGPT/Perplexity/Gemini/Google AI Overviews **deferred to post-deploy week**. Measuring presence with the canonical-domain mismatch still live would just baseline the broken state.
- Two new findings this week: (1) the bundle's `Organization` `@id` cross-reference architecture is a meaningful AI-extraction win (entity disambiguation); (2) the WC stadium pages are missing `Place.geo` lat/long, which AI assistants and Google's Map Pack both use for geographic-entity grounding.

---

## What helps AI assistants cite us (re-stated for continuity)

Established framework, unchanged:

1. **Quotable answer paragraphs** — 40–80 words, self-contained, opening the content section.
2. **Entity clarity** — `Organization`, `WebSite`, `WebApplication`, `FAQPage`, `Article` schema, with `@id` cross-references so a single canonical entity is referenced consistently across pages.
3. **Original data and concrete numbers** — "Prices drop 18% in the final 72 hours" beats "prices usually drop closer to the event."
4. **Structured FAQ content** — FAQPage schema with rich (40–100-word) Q→A pairs.
5. **`llms.txt`** — emerging convention; cheap to publish.
6. **Internal linking that names the comparator** — Posts and pages that explicitly compare named platforms (Ticketmaster vs SeatGeek, StubHub vs Vivid Seats) are disproportionately retrieved by AI assistants because users phrase queries that way.

**New addition for this week:** entity `@id` consistency (`https://ticketscan.io/#organization`, `https://ticketscan.io/#website`) across all pages collapses the entity graph for AI extractors. The bundle's `Organization` `@id` references and the queued `WebSite`-relocation work directly support this. **Once committed, RAG-style retrieval will see one canonical "TicketScan" entity instead of N near-duplicate Organization blocks scoped per page.** That's a notable durability signal in citation behavior.

---

## Current state assessment (2026-04-27)

### On production right now

| Signal | Status | Source |
|--------|--------|--------|
| Organization schema with `sameAs` | ✓ Live | `layout.tsx` |
| FAQPage on `/faq` (16 Q&A) | ✓ Live (some answers <40 words) | `faq/page.tsx` |
| FAQPage on homepage (3 Q&A) | ✗ In bundle (uncommitted) | `page.tsx` mod |
| Article schema on blog posts | Partial (single object, not @graph) | `blog/[slug]/page.tsx` mod in bundle |
| `Place`/`StadiumOrArena` on venues | ✓ Live | `venues/[slug]/page.tsx` |
| `SportsEvent` on `/world-cup-2026` | ✓ Live | `world-cup-2026/page.tsx` |
| `WebApplication` on `/compare` | ✗ In bundle | `compare/layout.tsx` (untracked) |
| `HowTo` on `/how-it-works` | ✗ In bundle (with step-anchor bug) | `how-it-works/page.tsx` mod |
| `/llms.txt` | ✗ Missing | `web/public/` empty |

### Gaps and fixes

#### P1 — `/llms.txt` (carried from 2026-04-13, 2026-04-20; STILL UNSHIPPED)

5-minute task. Spec from 2026-04-20 audit §3 is copy-paste-ready. **Bundle this in the canonical-domain commit.**

#### P1 — Quotable opener paragraphs on programmatic templates (carried)

Content Agent Ask 1 (filed 2026-04-20, due 2026-05-01): 24 × 60-word venue-page openers. Status per Content Agent's 2026-04-27 handoff: "Not started — content load this week is heavy; will pull forward to early 5/04 week." **Slip noted.** Acceptable — content load this week is genuinely heavy with the dual 4/30 publish, the FAQ audit due today, and 2 venue refreshes.

#### P2 — FAQ answer length (Content Agent Ask 2, due TODAY)

Content Agent confirmed FAQ audit ships today: "Content Agent producing `content-faq-audit-2026-04-27.md` + in-place edits to `web/src/app/faq/page.tsx` this morning." When delivered, SEO will:
1. Verify all 16 Q&A pairs have 40–100 word answers.
2. Verify FAQPage JSON-LD reflects new answer text (regenerated from same source so should be automatic).
3. Spot-check one or two for AI-assistant-shaped quotability (entity-named, declarative, no marketing language).

Sign-off filed as `2026-04-27-content-faq-signoff.md`.

#### P2 — Bracketed-comparison series in flight

Three posts as filed 2026-04-20 (Content Agent Ask 5):
- Post 1 — "Ticketmaster vs SeatGeek: Fees, Selection & UX (2026)" — drafted 4/23, publishing **Thu 4/30**
- Post 2 — "StubHub vs Vivid Seats: Which Resale Site Is Cheaper?" — pulled forward 4 days, publishing **Thu 4/30** (dual publish)
- Post 3 — "All-In Pricing: Why the Sticker Price Isn't Real" — slot in 5/04 week

**Schema asks** filed as `2026-04-27-content-comparison-schema.md`:
- `Article` schema (or upgrade to `BlogPosting`) with `wordCount`, `dateModified`, `author` `@id` reference.
- Comparison-table structured data: `Table` schema as a child of `mainEntity`, OR — better for Google rich-result eligibility — break each compared platform into a `SoftwareApplication` or `Organization` entity with `aggregateRating` if ratings exist.
- `keywords` field with the bracketed comparator phrases ("Ticketmaster vs SeatGeek fees", "StubHub vs Vivid Seats fees" — exact-match the queries).
- BreadcrumbList: Home → Blog → [Post Title].

#### P2 — NEW: WC stadium `Place.geo` missing

Spot-checked `web/src/app/world-cup-2026/[stadium]/page.tsx` — `StadiumOrArena` JSON-LD includes `address` but no `geo: { latitude, longitude }`. Both AI assistants (when answering "what stadiums host World Cup matches near me?") and Google's Map Pack use `Place.geo` for geographic-entity grounding.

**Fix:** add `geo: { '@type': 'GeoCoordinates', latitude, longitude }` to each stadium's JSON-LD. Coordinates source: each `worldCupVenues` entry needs lat/lng added (16 stadiums × ~2-line addition each in `worldcup.ts`). Daily report flagged this as the more general "Add `geo: { latitude, longitude }` to `Venue` and `WorldCupVenue` interfaces" — this is the AI-SEO framing of the same item.

**Effort:** ~30 min (look up 16 lat/lngs from Wikipedia or Google Maps, add to data file). Post-bundle.

#### P2 — Entity `@id` cross-references (bundle-pending)

Once the bundle ships and the `WebSite` block moves to root layout, all 109 pages will share:
- `Organization` `@id: https://ticketscan.io/#organization`
- `WebSite` `@id: https://ticketscan.io/#website`
- Cross-references: `WebSite.publisher = { '@id': 'https://ticketscan.io/#organization' }`, `Article.publisher = { '@id': '#organization' }`, etc.

**This is the AI-extraction win the bundle delivers.** Today every page emits its own `Organization` block — to a RAG retriever, that looks like potentially-divergent entity claims across pages. After deploy, every page references the canonical Organization once. **Don't block on getting this perfect; the bundle's current shape is the right direction.**

#### P3 — Manual presence checks (DEFERRED)

Defer to the week post-deploy. Running queries today against ChatGPT, Perplexity, Gemini, Claude.ai, and Google AI Overviews would baseline the broken-canonical state. The data point is more useful captured 7–10 days *after* the canonical fix lands and Google has had a crawl pass.

**Queries to run when scheduled:**
1. "compare ticket prices" (broad)
2. "where can I compare ticket prices across sites" (long-form)
3. "Ticketmaster vs SeatGeek fees 2026" (bracketed comp, post 1 target)
4. "StubHub vs Vivid Seats" (bracketed comp, post 2 target)
5. "all-in pricing tickets" (bracketed comp, post 3 target)
6. "cheapest way to buy World Cup 2026 tickets"
7. "World Cup 2026 ticket prices by stadium"
8. "best time to buy concert tickets" (Phase 1c target)
9. "best time to buy NFL tickets"
10. "MetLife Stadium World Cup tickets" (programmatic-page target)
11. "are concert ticket prices going up 2026"
12. "ticket price comparison tool" (homepage target)

Track in a presence-tracking table in next-month's audit. Each query × each assistant = cell ∈ {cited, mentioned, neither}.

---

## Action items (AI-SEO scope, rolling)

Priority-ordered, this week + next 30 days:

| # | Priority | Item | Owner | Effort | Bundle? |
|---|----------|------|-------|--------|---------|
| 1 | P1 | Publish `/llms.txt` per 2026-04-20 spec | Eng | 5 min | **Yes — same commit as P0** |
| 2 | P1 | SEO sign-off on Content Agent FAQ-expansion delivery | SEO | 30 min | Today |
| 3 | P1 | Schema specs for Thu 4/30 dual blog publish (TM-vs-SG, SH-vs-VS) | Content | filed | Today |
| 4 | P2 | Verify entity `@id` cross-references in bundle before deploy | SEO | 20 min | Pre-flight |
| 5 | P2 | `geo: { latitude, longitude }` on WC stadium pages (16 entries to `worldcup.ts`) | Eng | 30 min | Post-bundle |
| 6 | P2 | Quotable opener paragraphs on 24 venue pages (Ask 1, slipped) | Content | new ETA 5/04 wk | Independent |
| 7 | P2 | Article schema upgrade: `Article` → `BlogPosting` + `wordCount` (Daily LOW carry) | Eng | 15 min | Post-bundle |
| 8 | P3 | Manual AI presence check across 5 assistants × 12 queries | SEO | 2 hrs | Post-deploy week |
| 9 | P3 | Add `keywords` field with exact-match comparator phrases on the 3 comp posts | Content | per post | Per publish |

---

*Next review: 2026-05-04 — pending bundle ship.*
