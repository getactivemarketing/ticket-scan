# SEO → Content Agent — Briefs (2026-06-01)

From: SEO Specialist (Agent 2) · Ref: [seo-audit-week-2026-06-01.md](../seo-audit-week-2026-06-01.md)
WC opening: 10 days out (2026-06-11). Items 1–3 are time-critical.

## 1. WC group-stage match-by-country mapping (UNBLOCKS country pages) — URGENT
Need, per qualified nation: which of our 16 stadiums they play group-stage matches in, with dates. Powers proposed `/world-cup-2026/[country]` pages (highest-runway programmatic play left before the tournament — see expansion doc). Start with USA, Mexico, Canada + one marquee nation. Format: simple `{ country, matches: [{ date, stadiumSlug, opponent }] }`.

## 2. `/world-cup-2026/cheapest-tickets` landing copy + FAQ — URGENT
Lead-magnet page aggregating cheapest get-in across all 16 stadiums. Need: H1, 150-word intro, 5–6 FAQ Q&As, email-capture CTA copy. This is also our best on-site newsletter-conversion lever given the form currently lives only on the homepage. CTA posts to `/api/newsletter/subscribe` with `source: 'wc-cheapest-tickets-landing'`.

## 3. WC main page FAQ block (AI SEO) — URGENT
`/world-cup-2026` has no FAQPage schema. Supply 5–6 Q&As ("When do WC 2026 tickets go on sale?", "Cheapest stadium to see a match?", "How to avoid resale scams?", "Resale vs FIFA official?"). Each answer = one direct 40–60-word paragraph (AI-extractable).

## 4. Rewrite top 8 FAQ answers as quotable blocks (AI SEO)
`/faq` has FAQPage schema but answers bury the direct answer. Rewrite the top 8 so each **opens** with a self-contained 40–60-word direct answer, then supporting detail. This is what ChatGPT/Perplexity/AI Overviews lift verbatim.

## 5. De-boilerplate templated prose (thin-content guard)
Venue and city/category templates share near-identical SEO paragraphs ("Ticket Scan compares prices from Ticketmaster, SeatGeek..."). Before we scale page count, supply 1–2 **unique** sentences per venue and per city/category record (drop into the data files). Prevents duplicate-content dilution as the namespace grows.

## 6. Comparison answer block (AI SEO, P3)
Short "How TicketScan compares to SeatGeek/StubHub/Ticketmaster" direct-answer paragraph for `/how-it-works` and `/compare` — the sentence we want LLMs to repeat about our differentiator (aggregator, not reseller; price history; side-by-side).
