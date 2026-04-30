## Today's Content Hook — 2026-04-30 (Thursday)

### Hook 1: Today's draft — `stubhub-vs-vivid-seats-2026` — closes the Q2 comparison series
**Topic:** Thursday's comparison/listicle deliverable per Sunday's plan: the StubHub vs Vivid Seats fee + inventory + buyer-protection breakdown. Pulled forward four days from its original 5/04 due date (SEO Ask 5 Post 2). The post completes the three-piece comparison series (4/16 best-comparison-sites overview → 4/23 TM-vs-SG fees → 4/30 SH-vs-VS) that feeds the `/compare` hub-and-spoke link graph SEO Agent has been asking for since 4/19. **Slug collision check:** `ticketmaster-vs-seatgeek-comparison` (line 255 of `blog.ts`) is the only -vs- slug currently in production; `stubhub-vs-vivid-seats-2026` is clean. Frontmatter uses `category: comparisons`. Word count target 1100–1300; actual ~1200. Internal links: `/compare` (3x in body + CTA), `/watchlist`, `/blog/avoid-ticket-scams` (existing), `/blog/ticketmaster-vs-seatgeek-fees-2026` (the 4/23 sibling draft, when published), `/blog/best-time-to-buy-concert-tickets` (existing). Lead with a same-event fee-stack comparison, anchor the verdict by use-case (NBA playoffs / summer concerts / MLB / NFL preseason), don't bury the buyer-protection differential.
**Angle:** Capstone of the comparison series. Doubles as a paid-search landing page for "Vivid Seats fees" / "StubHub vs Vivid Seats" once conversion tracking is live (per Sunday's Paid Ads cross-agent note).
**Target keyword:** "StubHub vs Vivid Seats," "Vivid Seats fees 2026," "is StubHub cheaper than Vivid Seats," "Vivid Seats buyer protection"
**Content type:** Blog post (today's deliverable)
**Priority:** High (in-flight)

### Hook 2: Day-23 publish-velocity zero-streak — backlog now 11 with today's draft
**Topic:** Last published post: 2026-04-07 (`world-cup-2026-final-ticket-10990-dynamic-pricing`). Today is 2026-04-30. **Day 23.** With today's SH-vs-VS draft, the unpublished queue is **eleven drafts**: 4/8 (recommended archive), 4/14, 4/15, 4/16, 4/21, 4/22, 4/23, 4/27, 4/28, 4/29, and now 4/30. Sunday's plan opened Action #1 with "PUBLISH THE BACKLOG." Yesterday's Hook 2 framed Day 22 as "the publish bottleneck is now the largest non-revenue blocker to organic growth, four days deeper than last week's flag." Today is Day 23. The publish script exists, every draft has validated frontmatter, the Vercel pipeline is functional. The only remaining gate is one human running `./marketing-agents/scripts/publish-draft.sh` eleven times. Each additional day on this streak compounds the freshness loss on the news-pegged drafts (4/22 FIFA resale data, 4/29 WC general-sale phase, 4/28 same-day NBA Round 1 playbook) — the WC piece's T-43 search-volume window is now T-42 with no live URL yet.
**Angle:** Re-escalation, Day 23. Same flag as the past three Sunday plans. The pipeline gap is now five days deeper than last week's already-flagged gap.
**Target keyword:** n/a — pipeline issue
**Content type:** Lead Architect escalation, fourth Sunday-plan-opener carry
**Priority:** High (operational, 23-day streak)

### Hook 3: SEO Ask 2 (FAQ audit) — Day 3 overdue, the slip pattern is now confirmed
**Topic:** The FAQ audit (16 questions in `web/src/app/faq/page.tsx`, expand answers under 40 words to 40–100, deliver to `marketing-agents/output/content-faq-audit-2026-04-27.md` plus in-place edits) was due 2026-04-27. Today is 2026-04-30. **Day 3 overdue.** Yesterday's Hook 3 explicitly flagged "Thursday morning, the FAQ audit ships before the SH-vs-VS comparison piece." Thursday morning is the time of writing. The SH-vs-VS piece is the larger production load (1100–1300 words of fresh comparison work); the FAQ audit is 3–4 hours of read-and-expand. **The slip pattern is now load-bearing data:** cross-agent obligations have lost the morning-slot fight three days in a row to blog drafts. Hard recommendation: do the SH-vs-VS draft first today (in production already), then the FAQ audit before EOD, then commit both. If the FAQ audit slips past Thursday it gets squeezed by Friday's SoFi venue refresh and the slip becomes Day 4 by Friday EOD.
**Angle:** Cross-agent debt, Day 3 overdue, pattern confirmed across three days. Lead Architect: this is now a process question, not a workload one — blog drafts are systematically winning slot fights against smaller, faster cross-agent obligations.
**Target keyword:** n/a — operational obligation, SEO debt
**Content type:** SEO cross-agent obligation, Day 3 overdue
**Priority:** High (overdue, pattern confirmed)

### Hook 4: Friday SoFi venue refresh — slot pre-flag
**Topic:** Tomorrow's Friday slot is the SoFi Stadium venue refresh per Sunday's plan: 9 section groupings mapped to FIFA Cat 1–4, expand keywords from 4 to 10, expand `ticketTips` from 4 to 8, description rewrite covering the third-place playoff context, Rams/Chargers regular usage, Super Bowl LVI pricing reference ($1.5K–$10K+ resale), transit/parking, and cross-platform comparison. Same template that worked on MetLife last Saturday (commit 2617882). **Pre-flag the morning block** so SoFi doesn't compete with the FAQ audit if it slips into Friday. Friday is venue-refresh-only per Sunday's plan; if the FAQ audit slips, it goes Friday afternoon, not morning.
**Angle:** Forward-flag, slot defense. Friday is a venue-refresh day, not a blog-draft day; slot mechanics matter more on the page-refresh days because they're committed directly to the repo and trigger Vercel deploys, not held in the unshipped queue.
**Target keyword:** "SoFi Stadium World Cup 2026 tickets," "SoFi Stadium third place playoff tickets," "SoFi Stadium FIFA Cat 1 seats"
**Content type:** Tomorrow's page-refresh trigger
**Priority:** Medium (next-day forward-flag)

### Hook 5: Comparison-series capstone is also the strongest paid-search landing-page candidate
**Topic:** Today's SH-vs-VS draft is, per Sunday's Paid Ads cross-agent note, "a high-intent landing-page candidate for paid search on 'Vivid Seats fees' and 'StubHub vs Vivid Seats' queries. Pair with Thursday's TM-vs-SG piece in the same paid-test cluster once conversion tracking is live." Today's piece is built with that paid-funnel use case in mind: clean H2 structure, single primary CTA repeated three times, unambiguous use-case verdict ("Buy on StubHub if X, buy on Vivid Seats if Y"), and a fee-math table that works as a featured-snippet target. **Cross-agent flag:** when conversion tracking ships (currently blocked on backend per Sunday's plan), this post + the 4/23 TM-vs-SG piece are the two highest-quality paid-search landing pages in the queue. Both still need to be **published** before any of that paid-test value is realized — which loops back to Hook 2.
**Angle:** Funnel value-add, forward-flag for paid agent. The SH-vs-VS + TM-vs-SG pair is the cleanest -vs- search-intent cluster TicketScan has produced.
**Target keyword:** "StubHub vs Vivid Seats," "Vivid Seats fees 2026," "Ticketmaster vs SeatGeek fees" (cluster)
**Content type:** Cross-agent intelligence (Paid Ads + Lead Architect)
**Priority:** Medium
