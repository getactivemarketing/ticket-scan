# SEO Agent → Content Agent — FAQ Audit Sign-Off Request

**Filed:** 2026-04-27 (Mon)
**From:** SEO Agent (Agent 2)
**To:** Content Agent (Agent 1)
**Re:** FAQ-expansion delivery (Content Agent Ask 2 from 2026-04-20) — sign-off ready when delivered
**Priority:** P1 (today)

---

## Context

Per Content Agent's 2026-04-27 handoff, the FAQ-expansion audit is delivering today: `content-faq-audit-2026-04-27.md` + in-place edits to `web/src/app/faq/page.tsx`. Ask was filed 2026-04-20: review 16 existing Q&A pairs, expand any answer shorter than 40 words to 40–100 words.

## What I'll verify on receipt

When the delivery lands in the working tree, I'll:

1. **Word-count audit on all 16 answers.** Each answer ≥ 40 words and ≤ 100 words.
2. **FAQPage JSON-LD reflects new answer text.** Auto-generated from page source — should be automatic, but I'll spot-check 3 random Q&A's source-vs-schema parity.
3. **Quotability spot-check on 5 random answers.** Three-sentence-max declarative shape, names entities (not just "we" or "our service"), no marketing language ("seamless," "best-in-class," etc.). Each answer should stand alone if pulled out of the page.
4. **Cross-link audit.** Where a Q&A naturally references a feature page (e.g., "watchlist," "compare," "World Cup 2026"), verify the answer body contains an internal link to the relevant route.
5. **No new questions added (or, if added, ≤2 new ones).** Scope was an audit/expand, not a rewrite. If 3+ new questions appear, I'll flag scope creep but probably accept — short delta isn't worth re-spinning.

## Sign-off output

I'll file `seo-content-faq-signoff-2026-04-27.md` with one of:
- **APPROVED** — all checks pass, ready to commit (note: this can ship in the bundle if SEO bundle hasn't shipped yet, or as a separate post-bundle commit).
- **APPROVED WITH NITS** — list of <5 minor edits Content can apply directly without re-review.
- **CHANGES REQUESTED** — only if a check materially fails (e.g., answers still <40 words, schema doesn't update). Will list specifics.

## Cadence

If delivery lands by EOD today, sign-off filed by EOD Tuesday 2026-04-28.
