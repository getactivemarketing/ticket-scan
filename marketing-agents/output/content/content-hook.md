## Today's Content Hook — 2026-04-29 (Wednesday)

### Hook 1: WC 2026 inventory snapshot is today's news/timely deliverable, in production
**Topic:** Today's draft — `world-cup-2026-general-sale-closing-april-2026` — lands at T-43 from the June 11 opener and builds directly on the 4/22 FIFA resale draft (38-of-58 = 65.5% FIFA-most-expensive across 27 days of cross-platform tracking) plus the 4/7 published $10,990 dynamic-pricing piece. **Verified before writing:** `web/src/data/worldcup.ts` does NOT encode a specific FIFA-committed phase-1 close date. Sunday's plan and yesterday's Hook 3 both flagged that gap; the body honors it by reframing the news angle from "phase 1 closes today" (unverifiable) to "the Last-Minute Sales Phase has been live almost four weeks, the lottery is closed, FIFA's pricing engine is fully active, here's the inventory snapshot at T-43, here's the country-of-venue split that decides where to check first." Slug honored from Sunday's plan despite the angle reframe — the post is still positioned as the "general-sale-phase-winding-down" snapshot, just without a fabricated FIFA date. Excerpt 165 chars. Category `news`. Word count ~1100. Internal links to `/world-cup-2026`, `/compare`, `/watchlist`, plus references to the 4/7 and 4/22 pieces.
**Angle:** In-production, news-pegged. Hits the "World Cup 2026 tickets" search-volume window that yesterday's Hook 3 forward-flagged as the highest-value publish of the week.
**Target keyword:** "World Cup 2026 tickets late April," "FIFA resale 2026," "World Cup 2026 resale tickets," "cheapest World Cup 2026 tickets"
**Content type:** Blog post (today's deliverable)
**Priority:** High (in-flight, news-pegged window)

### Hook 2: Day-22 publish-velocity zero-streak — backlog grows to 10 with today's draft
**Topic:** Last published post: 2026-04-07 (`world-cup-2026-final-ticket-10990-dynamic-pricing`). Today is 2026-04-29. **Day 22.** With today's WC piece, the unpublished queue is now **ten drafts**: 4/8 (recommended archive, still un-archived), 4/14, 4/15, 4/16, 4/21, 4/22, 4/23, 4/27, 4/28, 4/29. Sunday's plan opened Action #1 with "PUBLISH THE BACKLOG." That action has now opened Item #1 of three consecutive Sunday plans without execution. Yesterday's Hook 2 framed this as "the publish bottleneck is now the largest non-revenue blocker to organic growth." That framing is now four days deeper. The publish script exists, frontmatter on every draft is valid, the Vercel pipeline is functional. The single remaining gate is one human running `./marketing-agents/scripts/publish-draft.sh` ten times.
**Angle:** Re-escalation, Day 22. The piece writing today is the strongest news-pegged publish of the week and is going into a pipeline that hasn't moved in three weeks. If the queue clears Friday morning, the WC piece still hits a useful chunk of its T-43 search-volume window. Past Friday, the freshness curve starts decaying fast.
**Target keyword:** n/a — pipeline issue
**Content type:** Lead Architect escalation, third Sunday-plan-opener carry
**Priority:** High (operational, 22-day streak)

### Hook 3: SEO Ask 2 (FAQ audit) — Day 2 overdue
**Topic:** The FAQ audit (16 questions, 40–100 words each, deliver to `marketing-agents/output/content-faq-audit-2026-04-27.md` plus in-place edits to `web/src/app/faq/page.tsx`) was due 2026-04-27. Today is 2026-04-29. **Day 2 overdue.** Yesterday's Hook 5 explicitly re-prioritized this for "Wednesday morning, ahead of the WC general-sale-closing piece — the FAQ audit is faster than a blog draft." The FAQ audit did not ship; the WC piece is shipping. The slip pattern is consistent: cross-agent obligations are systematically losing the slot fight against blog drafts even when the cross-agent work is the smaller scope. **Hard recommendation: Thursday morning, the FAQ audit ships before the SH-vs-VS comparison piece.** Estimated 3–4 hours of focused read-and-expand work; no new research required.
**Angle:** Cross-agent debt flag, Day 2 overdue. Slip pattern. Schedule it explicitly to Thursday's first morning block or it slips into Friday's venue-refresh slot, where it will get squeezed out again.
**Target keyword:** n/a — operational obligation, SEO debt
**Content type:** SEO cross-agent obligation, Day 2 overdue
**Priority:** High (overdue + slip pattern forming)

### Hook 4: Thursday SH-vs-VS piece is the comparison-series capstone — slot pre-flag
**Topic:** Tomorrow's comparison/listicle slot is `stubhub-vs-vivid-seats-2026` — the StubHub vs Vivid Seats fee/inventory/protection breakdown. Sunday's plan pulled it forward four days from its original 5/04 SEO Ask 5 Post 2 due date. It completes the Q2 comparison series (4/16 best-comparison-sites overview → 4/23 TM-vs-SG fees → 4/30 SH-vs-VS), all three of which feed the `/compare` hub-and-spoke link graph SEO Agent has been asking for since 4/19. **The Thursday slot is heavier production than today's** — Vivid Seats fee math, FanProtect vs 100% Buyer Guarantee comparison, and the "which platform wins for what use case" verdict require fresh research, not assembly of existing data. Allocate the morning to the FAQ audit (Hook 3), then the SH-vs-VS draft after lunch. Do NOT carry the FAQ audit into Friday — Friday is the SoFi venue refresh per Sunday's plan.
**Angle:** Forward-flag, slot defense. Tomorrow's content load is the heaviest of the week. Pre-flagging now so the FAQ audit doesn't lose the slot fight a third time.
**Target keyword:** "StubHub vs Vivid Seats," "Vivid Seats fees 2026," "Vivid Seats buyer protection"
**Content type:** Tomorrow's blog production trigger + cross-agent coordination flag
**Priority:** Medium (next-day forward-flag)

### Hook 5: nmcnamee99 case hits its one-week anniversary — funnel still converts despite the queue
**Topic:** Yesterday's content hook flagged lilianamasyrubi@gmail.com signing up at 05:24 UTC, breaking a 60+ hour zero-streak. The nmcnamee99 case (4/22 signup ~30h before a Raptors playoff tip-off looking for price intelligence, churned with no price data because the cron has been silent since 4/8) is now exactly **one week old**. That same week saw at least one new signup, zero published blog content, and ten queued drafts written. The nmcnamee99 case became Tuesday's `same-day-nba-playoff-tickets-6-hour-playbook` piece — which itself is now sitting unpublished ~36 hours. **The signal:** the platform is converting top-of-funnel without the content engine pulling weight. Once the content engine starts pulling weight, the same vector should compound rather than stay flat. The asymmetry between "drafts written" and "drafts shipped" is now the cleanest single argument for prioritizing the publish backlog above any new content work this week.
**Angle:** Funnel-defense flag, one-week milestone on the most informative user-product incident we have. Compounding loss is the framing.
**Target keyword:** n/a — funnel/operational signal
**Content type:** Cross-agent intelligence (Email + CRO + Lead Architect)
**Priority:** Medium
