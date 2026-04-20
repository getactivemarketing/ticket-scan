# Content Agent Handoff — Week of 2026-04-20

**From:** SEO Specialist (Agent 2)
**To:** Content Agent (Agent 1)
**Source:** `seo-audit-week-2026-04-20.md` §5

This is the weekly content request bundle. Six asks, ordered by urgency. Each has a target delivery date and an acceptance spec.

---

## Ask 1 — AI-citation opener paragraphs for venue pages

**Why:** AI assistants (ChatGPT, Perplexity, Gemini, Google AI Overviews) preferentially cite short, quotable, entity-naming, number-heavy paragraphs at the top of a page. Our `/venues/[slug]` pages currently open with visual hero blocks; the first piece of prose is lower down. Add a 60-word opener that leads the page body.

**Spec — one 60-word paragraph per venue, following this template:**

> "[Venue Name] is a [capacity]-seat [arena/stadium/theater] in [City], home to [primary tenants]. Tickets at [venue] range from about $[low] for upper-level seats to $[high] for floor sections at marquee events, with the cheapest typical listings for [weeknight categories — e.g., weeknight concerts and NHL games]. Most fans save 15–25% by comparing prices across Ticketmaster, SeatGeek, and StubHub before buying."

**Constraints:**
- Must name the venue, city, and at least 2 price comparator platforms.
- Must cite at least 2 concrete numbers (capacity + a price range, or a savings percentage + a price range).
- 50–70 words. No marketing fluff.

**Deliverable:** 23 paragraphs, one per venue slug in `web/src/data/venues.ts`.
**Output file:** `marketing-agents/output/content-venue-openers-2026-05-01.md` (markdown table: slug | opener paragraph).
**Target:** 2026-05-01.
**Priority:** HIGH.

---

## Ask 2 — FAQ expansion audit on `/faq`

**Why:** The `/faq` page has 16 Q&A across 5 categories with `FAQPage` schema. AI retrieval pulls richer answer blocks better than one-sentence answers. Audit all 16 answers; expand any shorter than 40 words to 40–100 words. Each answer should stand alone as a quotable paragraph.

**Constraints:**
- Preserve the existing question wording unless there's a strong rewrite case (if so, note the rewrite).
- Answer length: 40–100 words.
- Prefer concrete examples over abstract promises. "Price alerts fire when we see a SeatGeek listing 10% below your target price" beats "Price alerts notify you of deals."
- Don't fabricate numbers — ask SEO Agent if unsure.

**Deliverable:** A diff-ready markdown doc listing each question + (old answer) + (new answer). If any answer is already fine, mark it "KEEP."
**Output file:** `marketing-agents/output/content-faq-audit-2026-04-27.md`.
**Target:** 2026-04-27.
**Priority:** HIGH.

---

## Ask 3 — World Cup country page copy (10 countries)

**Why:** Phase 1b of the Tier 1 programmatic expansion. 10 new pages at `/tickets/[country]-world-cup-2026`. Pages are templated; the custom content is a 150-word intro plus 5–7 FAQ Q&A pairs per country.

**Countries (10):**
1. USMNT (United States men's national team)
2. Mexico
3. Canada
4. Brazil
5. Argentina
6. England
7. France
8. Germany
9. Spain
10. Portugal

**Per-country deliverable (repeat 10×):**

**A. 150-word intro** — Name the team, summarize their qualifying path or form, mention their WC 2022 result (if relevant), preview the 2026 group stage in 1–2 sentences. Must name at least one opposing group-stage opponent and one stadium where they play. Quotable and human.

**B. 5–7 FAQ Q&A pairs** — 40–100 words each. Standard questions to cover per country:
1. "Where can I buy [country] World Cup 2026 tickets?"
2. "How much do [country] World Cup 2026 tickets cost?"
3. "Are [country] group-stage tickets sold out?"
4. "Which sections do [country] fans sit in?"
5. "What stadiums does [country] play at in the 2026 World Cup?"
6. (Country-specific, 1–2 questions — e.g., "Can I buy USMNT tickets through the FIFA lottery if I'm a non-US citizen?")

**C. Shared "How to buy" block (write once, used on all 10 pages)** — 200 words covering: FIFA official ticket lottery windows (registration dates, allocation system), FIFA phase-2 sales, resale platforms we compare, fan-token allocations for qualified nations. Factual, no affiliate push.

**Reference data:** `web/src/data/worldcup.ts` for match schedules and stadium assignments. Match schedules by team can be derived from the stadium pages.

**Constraints:**
- No fabrication. If you don't know a fact, write `[TK — verify]` and flag.
- Avoid betting odds or predictive claims ("England will win" / "Brazil is the favorite") — this isn't a betting site.
- AP style, American English.
- Names: use FIFA's official English-language team naming convention (e.g., "United States men's national soccer team" on first reference, "USMNT" on subsequent).

**Deliverable:** 10 × (150w intro + 5–7 FAQ pairs) + 1 × shared "How to buy" block.
**Output file:** `marketing-agents/output/content-wc-country-copy-2026-05-10.md`.
**Target:** 2026-05-10 (launch scheduled 2026-05-15).
**Priority:** HIGH (revenue-linked to World Cup campaign).

---

## Ask 4 — Best Time to Buy copy (8 categories)

**BLOCKED until backend delivers the price-history aggregation endpoint** (ETA end of April, per `seo-audit-week-2026-04-20.md` §7).

**Why:** Phase 1c of programmatic expansion. Each `/best-time-to-buy/[category]` page pairs a data visualization with 3 pieces of custom copy.

**Categories (8):** `concert-tickets`, `nfl-tickets`, `nba-tickets`, `mlb-tickets`, `nhl-tickets`, `broadway-tickets`, `world-cup-2026-tickets`, `college-football-tickets`.

**Per-category deliverable:**

**A. Quotable insight paragraph (40–60 words)** — Opens the page. Templated against data the backend will supply; you'll fill in the numbers from the aggregation response. Template:
> "Based on TicketScan's price history of [X events] tracked in 2025–26, [category] tickets are cheapest in the [best-window days] before the event, when prices drop [pct]% from release-day highs. The worst time to buy is [worst-window days] out, when prices run [pct]% above baseline."

**B. Category playbook — 4–6 tactical tips** — Each tip is 30–60 words, standalone, actionable. Examples:
- NFL: "Buy Mondays after the schedule release — primary prices drop 6–8% in the first 48 hours of general availability."
- Concerts: "Verified-resale prices typically bottom out within 24 hours of the show. If you can hold, walk-in prices average 22% below release-day."
- Broadway: "Tuesday and Wednesday evening performances are 30%+ cheaper than Friday or Saturday at the same theater."

Tips should be category-specific and data-backed where possible (backend data supports, we'll share queryable metrics).

**C. 5 FAQ Q&A with FAQPage schema eligibility** — 40–100 words each. Standard questions:
1. "When is the cheapest time to buy [category] tickets?"
2. "Should I buy [category] tickets on release day?"
3. "Do [category] ticket prices drop closer to the event?"
4. "Is it cheaper to buy [category] tickets from Ticketmaster or SeatGeek?"
5. Category-specific (e.g., NFL: "How do playoffs affect regular-season pricing?")

**Deliverable:** 8 × (quotable + 4–6 tips + 5 FAQ).
**Output file:** `marketing-agents/output/content-best-time-to-buy-2026-05-15.md`.
**Target:** 2026-05-15.
**Priority:** HIGH (blocks Phase 1c launch).

---

## Ask 5 — Bracketed-comparison blog posts (3 posts)

**Why:** AI SEO. Assistants answering "Ticketmaster vs SeatGeek fees" need a named-entity comparison source. Our competitors (SeatGeek, Gametime) have these; we don't.

**Post 1: "Ticketmaster vs SeatGeek: Fees, Selection & User Experience (2026 Guide)"**
- **Target length:** 1,500 words.
- **Structure:** Intro (150w quotable) → Fee comparison table (primary + resale) → Selection comparison → UX comparison → "When to use each" → Conclusion with CTA to `/compare`.
- **Must include:** Real fee percentages (both companies disclose these — primary ~20–30%, resale varies), at least one screenshot of each platform's checkout flow (Content Agent can source publicly available screenshots or reference them).
- **Schema:** `BlogPosting` (or `Article` if preserving existing schema shape) with `about: [Ticketmaster, SeatGeek]` entities.
- **Publish target:** 2026-04-27.

**Post 2: "StubHub vs Vivid Seats: Which Resale Site Is Cheaper?"**
- **Target length:** 1,200 words.
- **Structure:** Intro → Fee comparison → Buyer protection policies → Mobile experience → "Cheaper for what" verdict.
- **Publish target:** 2026-05-04.

**Post 3: "All-In Pricing: Why the Sticker Price Isn't Real"**
- **Target length:** 1,000 words.
- **Angle:** Educational — service fees, delivery fees, convenience fees, dynamic pricing. References the 2024 FTC all-in-pricing rulemaking. TicketScan's "all-in price" display is the protagonist.
- **Publish target:** 2026-05-11.

**Deliverable:** 3 blog posts ready to publish to `web/src/data/blog.ts`.
**Priority:** MEDIUM (multi-week impact, not launch-blocking).

---

## Ask 6 — Blog-to-programmatic internal link audit

**Why:** Internal linking from blog posts to programmatic pages is a documented ranking signal. We have 21 posts; many likely reference venues, cities, or event categories without linking.

**Task:**
1. Read each of the 21 blog posts in `web/src/data/blog.ts`.
2. Identify every mention of: a venue in `venues.ts`, a city in `cities.ts`, a category in `categories.ts`, a World Cup stadium in `worldcup.ts`.
3. For each mention, recommend whether to wrap it in a link to the corresponding programmatic page. Skip if the mention is already linked, if it's in a quoted block, or if the link would feel forced.
4. Deliver a diff-ready markdown file listing each recommendation: blog slug | text snippet | proposed link href.

**Constraints:**
- Don't over-link — one link per unique entity per post is the ceiling.
- Prefer natural anchor text ("Madison Square Garden") over generic ("click here").

**Deliverable:** `marketing-agents/output/content-blog-linking-2026-05-05.md`.
**Target:** 2026-05-05.
**Priority:** MEDIUM.

---

## Dependencies & sequencing

```
Week of 2026-04-20
  Ask 2 (FAQ audit)  → 2026-04-27
  Ask 1 (venue openers) → 2026-05-01
  Ask 5 post 1 (TM vs SG) → 2026-04-27

Week of 2026-04-27
  Ask 6 (blog linking) → 2026-05-05
  Ask 5 post 2 (SH vs VS) → 2026-05-04

Week of 2026-05-04
  Ask 3 (WC country copy) → 2026-05-10
  Ask 5 post 3 (all-in pricing) → 2026-05-11

Week of 2026-05-11
  Ask 4 (best-time-to-buy) → 2026-05-15   [unblocks Phase 1c ship on 2026-05-22]
```

---

## Acceptance criteria (all asks)

- Markdown output at the specified `marketing-agents/output/` path.
- No fabricated facts, numbers, or dates. Use `[TK]` for anything needing verification.
- AP style, American English, conversational but not breezy.
- No emoji unless the existing template already uses them.
- If a constraint in this brief conflicts with something in `content-calendar.json`, flag the conflict — don't unilaterally resolve it.
