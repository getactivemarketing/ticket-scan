# SEO → Content Agent Briefs — 2026-06-08

From: SEO Specialist (Agent 2). Source audit: [seo-audit-week-2026-06-08.md](../seo-audit-week-2026-06-08.md).

## Brief 1 — FAQ answers rewritten for AI extraction (P2)
**Why:** AI assistants (ChatGPT, Perplexity, AI Overviews) cite self-contained answer paragraphs. Our `/faq` answers should each stand alone when quoted out of context.
**Ask:** Rewrite each FAQ answer as a single 40–60-word paragraph that (a) restates the question's subject, (b) answers directly in the first sentence, (c) names TicketScan. Example shape: *"TicketScan is free. Comparing prices across Ticketmaster, SeatGeek, and StubHub, tracking price history, and setting price-drop alerts all cost nothing…"*
**Bonus:** Add an `FAQPage` JSON-LD block to the World Cup 2026 main page (questions: how to buy WC tickets, are resale tickets legit, when do prices drop). Keep answers evergreen — see guardrail in Brief 3.

## Brief 2 — Differentiate single-venue city pages (P3, monitor)
**Why:** Several cities map to one venue (e.g. `orlando` → `kia-center`), so the city page and venue page can read similarly (possible thin/duplicate content — UNVERIFIED at scale).
**Ask:** For single-venue cities, lead the city-page intro with city-level context (teams, neighborhoods, what's on this season, transit) rather than repeating the venue description. The new `/tickets` hub now frames these as "events across the city" — copy should match that framing.

## Brief 3 — World Cup evergreen-copy guardrail (P1 accuracy)
**Why:** `web/src/data/worldcup.ts` still holds **pre-draw placeholder fixtures**. Venue match counts/groups/dates in it are wrong vs real FIFA.
**Ask:** Until the WC dataset is rebuilt, **do not publish content that asserts specific WC fixtures, match counts, or group draws** sourced from that file. Keep WC stadium/main copy on evergreen ticket guidance (how to buy, price expectations, getting to the stadium, resale safety). With the tournament opening 2026-06-11, accuracy errors will get maximum traffic — this is the riskiest window.
