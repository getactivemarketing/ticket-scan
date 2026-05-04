# AI Search Optimization — Status Update 2026-05-04

**Format:** Short status note. Full file still at [seo-ai-optimization-2026-04-27.md](./seo-ai-optimization-2026-04-27.md).
**Why short:** Per the audit's consolidation commitment while the bundle is unshipped.

---

## `/llms.txt` — still missing, Day 22
`test -f web/public/llms.txt` returns false. The copy-paste-ready spec lives in `seo-audit-week-2026-04-20.md` §3. **5-minute task.** Bundled with the [Lead-Architect escalation](./seo-requests/2026-05-04-bundle-deploy-lead-architect-escalation.md) as item #4 of the 8-item commit composition.

This remains the single highest-leverage AI-citation surface change available to us. Every week without it, ChatGPT's web tool, Perplexity's crawler, and Anthropic's Claude crawler index the site without the explicit allow/disallow + content map that `/llms.txt` would provide. The cost is opaque but non-zero.

---

## FAQ expansion (Content Agent Ask 2) — delivered, signed off, awaiting deploy
- Content Agent delivered 16 expanded FAQ answers (40–100 words each) on 2026-04-27 per the prior handoff.
- SEO sign-off filed: `seo-requests/2026-04-27-content-faq-signoff.md`.
- **Status today:** Modifications are in `web/src/app/faq/page.tsx`, sitting in the working tree. **Bundle-blocked for deploy.** Same blocker as everything else.

---

## Bracketed-comparison blog series — published as planned
- TM-vs-SG and SH-vs-VS dual-publish landed Thu 2026-04-30 per Content Agent's commitment.
- Articles include comparison-table structured data + `Article` schema (specs filed 2026-04-27).
- All-In Pricing slot from 2026-05-04 week — content-calendar shows it scheduled for Wed 2026-05-06.
- **AI-citation impact:** unmeasurable until presence checks resume (post-bundle).

---

## AI-presence checks — still deferred
ChatGPT, Perplexity, Gemini, and Google AI Overviews have not been spot-checked for TicketScan citations this week.

**Reason for deferral, unchanged from 2026-04-27:** Running presence checks before the canonical-domain fix lands and indexation propagates would just baseline the broken state. The signal/noise ratio is poor.

**Will resume in week 2026-05-11** *if* the bundle ships by 2026-05-08. Otherwise deferred again — and the deferral itself becomes a flag in the Lead-Architect escalation.

---

## What's working in source today (worth preserving)
- FAQ on homepage (in working tree): well-structured for AI extraction — short questions, answer paragraphs lead with the answer fact, then context. Format matches what ChatGPT/Perplexity tend to quote.
- Blog `Article` @graph (in working tree): includes `author`, `publisher`, `datePublished`, `dateModified`, `headline` — all required for high-signal AI ingestion.
- World Cup hub copy (in working tree): leads with quotable comparison facts ("TicketScan compares prices across 4 platforms — Ticketmaster, SeatGeek, StubHub, Vivid Seats — for every World Cup match"). Quotable answer paragraphs are the unit of AI citation.

**All three of the above are in the unshipped bundle.** They exist locally; they aren't on production.

---

## New this week — none
No new AI-SEO findings this week. The work is content-shaped (FAQ expansion, comparison series) and is moving forward on Content Agent's side; the SEO contribution is bundled and waiting.

---

## Next rotation actions
1. If bundle ships → run the deferred presence checks across ChatGPT, Perplexity, Gemini, Google AI Overviews for 10 anchor queries: "compare ticket prices," "World Cup 2026 ticket tips," "cheapest way to buy NFL tickets," "best time to buy concert tickets," etc.
2. Establish a baseline citation count and re-check fortnightly.
3. If `/llms.txt` is live by 2026-05-11, run a separate check for explicit Anthropic / OpenAI / Perplexity user-agent fetches in Vercel logs to confirm crawler discovery.
