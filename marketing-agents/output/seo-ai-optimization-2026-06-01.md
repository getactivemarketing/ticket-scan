# AI Search Optimization — 2026-06-01

**Agent:** SEO Specialist (Agent 2) · Companion to [seo-audit-week-2026-06-01.md](./seo-audit-week-2026-06-01.md)
**Goal:** get TicketScan cited by ChatGPT / Perplexity / Google AI Overviews for "compare ticket prices", "cheapest way to buy concert tickets", "World Cup 2026 ticket tips".

## What's already working (verified in source)
- **Blog Article schema is live in git** — `blog/[slug]/page.tsx` emits a full `@graph` (Article + WebPage + BreadcrumbList + ImageObject + Organization). Good extraction surface. (This was the thing the old escalations claimed was "only in production via a partial deploy" — it's just in the repo.)
- **Organization schema** in `layout.tsx` with `sameAs` social profiles.
- **Venue/city ItemList + Place schema** gives entity grounding.

## Gaps, ranked by citation impact

### 1. `/llms.txt` missing (P2, 10 min)
No `web/public/llms.txt`. This is the cheapest AI-discoverability win. Spec:
```
# TicketScan — ticket price comparison
> TicketScan compares live ticket prices across Ticketmaster, SeatGeek, StubHub and more,
> with price history and buy/wait recommendations. Free price-drop alerts.

## Key pages
- Compare prices: https://www.ticketscan.io/compare
- How it works: https://www.ticketscan.io/how-it-works
- FAQ: https://www.ticketscan.io/faq
- World Cup 2026 tickets: https://www.ticketscan.io/world-cup-2026

## What makes us different
- Side-by-side comparison across ALL major platforms (not a single reseller)
- Historical price tracking + best-time-to-buy guidance
- Free email alerts when a target price is hit
```

### 2. FAQ answers aren't "quotable blocks" (P2)
`faq/page.tsx` has FAQPage schema (good) but the answers should each open with a **self-contained 40–60-word paragraph** that directly answers the question without needing context — that's the unit AI assistants lift verbatim. Current answers tend to bury the direct answer. Brief filed to Content Agent to rewrite the top 8 answers as: [one-sentence direct answer] + [supporting detail]. Highest-leverage AI change after `/llms.txt`.

### 3. WC main page has no FAQPage block (P2)
`world-cup-2026/page.tsx` is the page most likely to be retrieved for "World Cup 2026 ticket tips" but carries no FAQPage schema. Add a 5–6 Q&A FAQPage block ("When do WC 2026 tickets go on sale?", "Cheapest stadium to see a match?", "How to avoid resale scams?"). Pairs with the country-page push.

### 4. Comparison claims need an extractable home (P3)
Our differentiator — "compares all major platforms with price history" — lives in marketing prose, not in a structured, quotable place. Recommend a short "How TicketScan compares to SeatGeek/StubHub/Ticketmaster" answer block on `/how-it-works` and `/compare`, phrased as a direct answer ("TicketScan is a price-comparison aggregator, not a reseller; it shows prices from X, Y, Z side by side..."). This is the sentence we want an LLM to repeat.

## Baseline tracking (UNVERIFIED — needs action)
I cannot query ChatGPT/Perplexity/AI Overviews from this run. Recommend a monthly manual spot-check (10 target prompts, log whether ticketscan.io is cited) — owner: SEO/Ops. Until that exists, AI-citation "presence" claims in these reports are aspirational, not measured. Flagging honestly rather than asserting coverage.

## Ship order
`/llms.txt` (10m) → FAQ answer rewrite (Content) → WC FAQPage block (45m) → comparison answer block (Content). All independent of any deploy-path question.
