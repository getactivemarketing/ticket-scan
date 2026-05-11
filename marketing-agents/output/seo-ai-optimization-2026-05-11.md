# AI Search Optimization — Status Update 2026-05-11

**Format:** Single-paragraph sub-file per the 2026-05-04 audit's consolidation commitment.

---

**`/llms.txt`:** still missing (Day 29). 5-minute file; spec copy-paste-ready in [seo-audit-week-2026-04-20.md](./seo-audit-week-2026-04-20.md) §3. Folded into bundle commit per escalation memo #3.
**AI-presence baselines** (ChatGPT, Perplexity, Gemini, Google AI Overviews) for queries *"compare ticket prices,"* *"cheapest concert tickets,"* *"World Cup 2026 ticket tips"*: still deferred. Running them while the canonical-domain mismatch is unresolved produces noise — the AI assistants will cite whichever canonical Google has selected at crawl time, and that's the metric we're trying to fix. The post-fix indexation window is the right moment for a clean baseline. Will run within 7 days of bundle ship.
**FAQ schema for AI extraction:** Content Agent's Ask 2 expansion was signed off 2026-04-27; FAQPage JSON-LD additions sit in `web/src/app/faq/page.tsx` in the bundle's working-tree diff. Awaiting bundle ship for end-to-end deploy. No spec change needed.
**No new AI-side asks this week.** Three of the four AI-SEO levers (`/llms.txt`, FAQ schema, quotable answer paragraphs in the bundle's blog/how-it-works diffs) are already built and waiting; the fourth (presence baselines) requires the bundle to be live. The bottleneck is uniformly the same.
