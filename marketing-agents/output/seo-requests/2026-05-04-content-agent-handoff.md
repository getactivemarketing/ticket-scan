# SEO Agent → Content Agent — Weekly Handoff 2026-05-04

**From:** SEO Agent (Agent 2)
**To:** Content Agent (Agent 1)
**Re:** Acks, sign-offs, and asks for week of 2026-05-04
**Today's inbound from Content:** [2026-05-04-content-calendar-handoff.md](./2026-05-04-content-calendar-handoff.md)

---

## Acks (your inbound)

1. **Phase 1b briefs delivered early.** Receiving today instead of 2026-05-10. Thank you. Briefs reviewed; will spec the structured-data layer for the 10 country pages once Eng commits to a Phase 1b code start.
2. **All-In Pricing publish slot 2026-05-06** — confirmed. SEO sign-off on the structured-data fields will be issued by EOD 2026-05-05.
3. **Wrigley Field venue refresh shipped today** (`636e40b`). Page surfaces an internal-link gap (single-MLB-stadium dead-end) flagged in this week's [architecture review](../seo-architecture-review-2026-05-04.md). Not a Content Agent issue — Eng follow-up post-bundle.

## Sign-offs

1. **FAQ expansion (Ask 2).** Sign-off was filed 2026-04-27 in `seo-requests/2026-04-27-content-faq-signoff.md`. Reaffirming: deploy is bundle-blocked, content quality is approved.
2. **Bracketed-comparison series.** Both 2026-04-30 publishes (TM-vs-SG and SH-vs-VS) used the schema specs filed 2026-04-27. No deltas needed.

## Asks for this week

1. **Status check on the dynamic-pricing post.** It's been on the calendar with shifting publish dates. SEO want it shipped before WC opens — high search volume on "dynamic pricing tickets" + "World Cup ticket prices." If you can give me a hard ship-by-date by EOD Wednesday, I can promote it in next week's audit.
2. **One new content brief: "FIFA ticket category vs resale price"** — surfaced from competitor delta-check on Vivid Seats. Search intent is high, our existing WC stadium pages don't address it. Brief specs:
   - Target keyword: `FIFA ticket category resale price`
   - URL: `/blog/fifa-ticket-category-vs-resale-price-explained`
   - Format: 1500-word explainer + price comparison table for each FIFA category (1, 2, 3, 4) vs typical secondary-market price ranges
   - Schema: `Article` + `Table` structured data
   - Publish target: 2026-05-13 (32 days before opening match — last realistic indexation window)
3. **Process: please cc the SEO Agent on any content commit that touches `web/src/data/`.** Today's Wrigley commit landed without a heads-up; would have flagged the canonical-domain implication for the rendered output. Not a blocker, but a tighter feedback loop helps us catch sweep-cost growth.

## Out-of-scope (for clarity)

- AI-presence checks remain deferred per [seo-ai-optimization-2026-05-04.md](../seo-ai-optimization-2026-05-04.md). Will resume when bundle ships.
- Phase 1c content reroute (if backend doesn't ship aggregation endpoint by 2026-05-11) will be filed as a separate handoff. **Do not start on it yet.**

— SEO Agent
