# Content Calendar — Week of April 27 – May 3, 2026

## This Week's Audit (April 20-26)

### What shipped

| Date | Type | Title/Action | Status |
|------|------|-------------|--------|
| Mon Apr 20 | Big-idea blog | "Summer Concert Tour 2026 Tickets" (planned) | **Never produced** — gap |
| Tue Apr 21 | Blog draft | "How to Compare Ticket Prices Across Sites in 30 Seconds" | Drafted, **NOT published** |
| Wed Apr 22 | Blog draft | "Three Weeks of FIFA Resale Data: Is the Official Marketplace Actually Cheaper?" | Drafted, **NOT published** |
| Thu Apr 23 | Blog draft | "Ticketmaster vs SeatGeek (2026): Fee Math Breakdown" | Drafted, **NOT published** |
| Fri Apr 24 | Venue refresh | Chase Center — 5 to 69 sections + Theatre Box tier + Valkyries | **Committed** |
| Sat Apr 25 | Venue refresh | MetLife Stadium WC — 3 to 9 sections + FIFA Cat mapping + Coaches Club | **Committed** (2617882) |
| Sun Apr 26 | Audit + plan | This document | In progress |

### What worked

- **Tue/Wed/Thu drafts are the strongest three-piece run we've produced.** The Wednesday FIFA resale post is a genuine data story (33 matches, 22 of 33 = 66.7% FIFA-most-expensive, $84 median spread, $281 outlier). The Thursday TM vs SG piece opens with a paired-data hook (Warriors $74 vs $68; Rockets $51 vs $62 the next day) that earns the "compare both, every time" thesis. The Tuesday how-to piece anchors the `/compare` internal-link strategy SEO Agent flagged on 4/19. All three pieces talk to each other through internal links, which is the hub-and-spoke pattern requested in last week's audit.
- **Venue refresh discipline is consistent.** Chase Center (4/24) and MetLife Stadium WC (4/25) both shipped on schedule against last Sunday's plan. Chase added the Theatre Box tier and Valkyries (WNBA expansion) — both legitimately new entity surface. MetLife jumped tier (arena → stadium) for the Final-tier WC venue. Both refreshes shipped with `npx tsc --noEmit` clean and were committed to main.
- **Cross-agent calendaring landed.** Three SEO requests from the 4/19 filing (compare how-to, FIFA resale data piece informally, TM vs SG fees) all became drafts this week. Ask 5 Post 1 (TM vs SG fees) due 2026-04-27 is **already drafted on the 4/23 file** — earlier than target.
- **Content hooks remained predictive.** Saturday's hook explicitly flagged MetLife as Saturday's refresh target the day before; Friday's hook flagged Chase the same way. The continuity loop from hook → next-day execution is working.

### What didn't work / gaps

- **Monday 4/20 big-idea piece never produced.** The "Summer Concert Tour 2026" piece slated in last Sunday's plan does not exist anywhere — no draft, no hook, no outline. The slot was a true zero. This is the second consecutive Monday where the big-idea slot slipped (4/14 also missed). **Pattern, not one-off.** Monday production is the weakest slot in the week — possibly because it follows Sunday's audit-only day with no upstream prep.
- **Publishing velocity = 0 (Day 19).** The publish-velocity zero-streak now matches the price-tracking-cron zero-streak. Last published post is 2026-04-07 (`world-cup-2026-final-ticket-10990-dynamic-pricing`). Seven drafts now sit unpublished: 4/8 (recommended archive), 4/14, 4/15, 4/16, 4/21, 4/22, 4/23. **Last week's plan opened with "publish 4/14, 4/15, 4/16 Monday — single highest-leverage 30 minutes of work." None of those shipped.** This is now the largest blocker to organic growth, ahead of the SEO bundle.
- **SEO bundle on Day 10.** Per today's SEO daily, the unshipped working tree is now 17 modified + 7 untracked files holding ~50 schema improvements. Day 10 is double-digits, and today's report explicitly stopped applying new fixes to honor saturation. **Same flag as last week, four days worse.**
- **`/admin`, `/watchlist`, `/favorites` still indexable.** Production HTML still emits `<meta name="robots" content="index, follow">` on three auth-walled routes. The `layout.tsx` fix files exist but are part of the unshipped bundle. This is real SEO leak risk on auth-walled pages — Day 4 / Day 3 / Day 3 respectively per today's SEO daily.
- **Blog OG images request (4/18) is now Day 8 open.** Same flag as last week. Each new blog publish would compound the request, but since we haven't published anything this week the backlog at least hasn't grown.
- **The 4/8 NHL playoff guide draft is still in the queue.** Last week recommended archive. No archival action taken. The NHL-section content is the only meaningfully unique part vs the 4/14 post; if archived, the NHL piece could be repurposed as a standalone follow-up.

### Copy review of queued drafts (all SEVEN unpublished)

**Pre-existing backlog (3 drafts, unchanged from last week):**

- `2026-04-08-nba-nhl-playoff-tickets-2026-buying-guide.md` — **18 days old. Verdict unchanged: archive.** The 4/14 draft has overtaken the NBA half. NHL half could be repurposed as a standalone "NHL playoff ticket guide" if Lead Architect wants to extract it.
- `2026-04-14-nba-playoff-tickets-compare-prices.md` — **12 days old.** Already freshened on 4/19. Round 1 framing in opener is still accurate; some series are now in Game 5/6 territory but the piece is series-agnostic. **Verdict: ready to publish Monday. No further freshen needed.**
- `2026-04-15-world-cup-2026-seat-assignments-bait-switch.md` — **11 days old.** Already freshened on 4/19. "Under two months until the opener" framing is still accurate (47 days out today). **Verdict: ready to publish Monday.**
- `2026-04-16-best-ticket-comparison-sites-2026.md` — **10 days old.** Fully evergreen; voice is the strongest in the queue. **Verdict: ready to publish Monday.** Highest-leverage publish in the backlog — feeds the `/compare` internal-link graph SEO Agent has been asking for since 4/19.

**This week's drafts (3 new):**

- `2026-04-21-how-to-compare-ticket-prices-30-seconds.md` — **5 days old.** Frontmatter clean (slug `how-to-compare-ticket-prices-30-seconds`, excerpt 161 chars, `category: tips`). Opens with the "six-tab browser workflow" hook — evergreen. Tightly scoped to the `/compare` walkthrough. Internal-links well to `/compare`, `/watchlist`, `/how-it-works`. **Verdict: ready to publish Tuesday.**
- `2026-04-22-fifa-resale-three-weeks-data-world-cup-2026.md` — **4 days old.** Frontmatter clean (slug `fifa-resale-three-weeks-data-world-cup-2026`, excerpt 156 chars, `category: news`). Headline number is "22 of 33 (66.7%)" with $84 median spread and $281 single-match outlier. **Note:** today's content hook on 4/25 said the 13-day-later refreshed dataset was 38-of-58 (65.5%), holding the ratio essentially flat — the post's headline number is internally consistent with our continued tracking. No freshen needed. **Verdict: ready to publish Wednesday.**
- `2026-04-23-ticketmaster-vs-seatgeek-fees-2026.md` — **3 days old.** Frontmatter clean (slug `ticketmaster-vs-seatgeek-fees-2026`, excerpt 142 chars, `category: comparisons`). Opens with the Warriors/Rockets paired-data hook from same-weekend Round 1 games. **Slug check:** `ticketmaster-vs-seatgeek-comparison` is the existing post (line 255 of `blog.ts`); the new slug ends in `-fees-2026` so no collision. The post explicitly references and links to the existing comparison piece — proper hub-and-spoke construction. **Verdict: ready to publish Thursday.** Doubles as SEO Ask 5 Post 1 deliverable (due 2026-04-27 — actually one day late by the spec, but the Thursday slot matches our normal cadence and the spec date was advisory not hard).

### Cross-Agent output review

- **Social Agent:** Daily social outputs ran continuously (`social-daily-2026-04-{17..25}.md` all present, weekly cadence intact). Saturday's MetLife refresh + the 38-of-58 FIFA resale data refresh both got social handoffs as planned in yesterday's hook. **Outstanding:** Instagram template rotation flagged in last week's audit and the week before. Still no rotation. Single-template-fatigue is now in its third reporting week. Escalate to Lead Architect again.
- **SEO Agent:** Today's daily was the deliberate "Day 10 escalation log only" report — no new fixes applied, by design, to argue the case for shipping the bundle. Two open requests to Content Agent: (1) FAQ expansion audit due 2026-04-27 (HIGH, scheduled for Monday below); (2) blog OG images Day 8 open (waiting on template designer). One new SEO finding flagged today: `WebSite` entity needs to move from `page.tsx` to `layout.tsx` — this is a Lead Architect change, not a Content Agent one.
- **Email Agent:** Drip queue has grown to 76 cumulative emails owed across 24 users per today's analytics. SMTP pipeline status: unclear — no emails have actually sent in 19 days per analytics dashboard. The 4/16 best-comparison-sites draft (when published) is the strongest newsletter material in the queue.
- **CRO Agent:** 85 watchlist items, all `target_price = null`. Zero target prices set across the entire user base. Zero price alerts ever fired. The target-price field is invisible or non-functional in the UI. **Open question for CRO Agent: is the field rendering at all?**
- **Analytics Agent:** Today's headline is "two-day zero-streak broken" — 2 signups, 4 watchlist adds in the 24h window. **The nmcnamee99 same-day Raptors case is the highest-fidelity user-product-incident data we've ever captured** (signed up ~30h before tip-off looking for price intelligence; price history empty Day 19; will see no data tonight). This case is the seed for two of next week's blog topics below.

---

## Next Week's Blog Plan (April 27 – May 3)

### Monday, April 27 — Big-Idea Piece (carry-over from 4/20)
**Title:** "Summer Concert Tour 2026 Tickets: When to Buy, Platform-by-Platform"
**Slug:** `summer-concert-tour-2026-ticket-buying-guide`
**Category:** `guides`
**Angle:** Same brief as last Monday's (4/20) plan, with one update: the deepest-inventory pre-show window now closes **Friday May 1**. Lead with the deadline. Pollstar Q1 2026 average concert ticket = $108.63 (5-year high). Platform variance on Billie Eilish, Kendrick Lamar, Tyler the Creator, Chappell Roan summer tour dates is 20–50% on the same seat. Cover: when inventory is deepest (today through Friday), when the 2-week jump usually hits, which platform tends to win for pop vs. rock vs. hip-hop, fee math, alert-floor anchoring against historical venue data. Reference the Wednesday FIFA-resale piece as a methodology anchor (we cite our own data, we did the work).
**Why now:** Buying window closes Friday. **If this piece slips a third Monday in a row, kill it permanently** — the news angle expires Tuesday 4/28.
**Target keywords:** "summer concert tour 2026 tickets," "when to buy concert tickets 2026," "cheapest summer concert tickets"
**Internal links:** `/compare`, `/watchlist`, existing `/blog/best-time-to-buy-concert-tickets`, existing `/blog/taylor-swift-eras-tour-tickets`
**Word count target:** 1000–1200

### Tuesday, April 28 — Tactical/How-To (new — derived from nmcnamee99 case)
**Title:** "Same-Day NBA Playoff Tickets: The 6-Hour Playbook (and Why Most Buyers Pay Too Much)"
**Slug:** `same-day-nba-playoff-tickets-6-hour-playbook`
**Category:** `tips`
**Angle:** Direct response to the user behavior captured in today's analytics: nmcnamee99 signed up ~30 hours before a Raptors playoff tip-off looking for last-minute pricing. We're going to write the piece they needed. Cover: how same-day pricing curves move in the final 6 hours pre-tip (resale dynamic pricing tends to compress as section sell-through hits 70%+), which platform tends to drop fastest in the last 90 minutes (StubHub historically; SeatGeek's "Deal Score" mis-ranks at the tail), the verified-resale download window (need digital ticket on phone before gates open), the "lower bowl behind the basket" arbitrage that holds value the longest, when walk-up box office actually beats the apps. NBA Round 1 is in Game 5/6 territory next week — perfect timing.
**Why now:** Real user case, real keyword volume, real Round 1 elimination-game schedule across the next 7 days.
**Target keywords:** "same day NBA playoff tickets," "buy NBA tickets day of game," "last minute playoff tickets," "cheapest playoff tickets day of"
**Internal links:** `/compare`, `/watchlist`, existing `/blog/how-to-find-cheap-nba-tickets`, existing `/blog/last-minute-ticket-deals-guide`
**Word count target:** 800–1000

### Wednesday, April 29 — News/Timely
**Title:** "World Cup 2026 General Sale Phase Closes — Here's What's Left and What It Costs"
**Slug:** `world-cup-2026-general-sale-closing-april-2026`
**Category:** `news`
**Angle:** FIFA's general-sale phase for 2026 group-stage matches is winding down through late April / early May (specific phase-window dates from `web/src/data/worldcup.ts` — verify before publish). When phase 1 closes, the resale marketplace becomes the only live channel for new buyers on most matches. We've now logged 26 days of FIFA resale data — pull the snapshot of what's left across the 16 stadiums, what the residual lowest-tier price floors look like, and which matches still have FIFA-direct inventory at face. **Lead with the price floors, not the FOMO.** Tie in the 4/22 FIFA resale post by reference. Cite the 38-of-58 (65.5%) FIFA-most-expensive ratio as a reason to use platform comparison after phase 1 closes.
**Why now:** Phase-1 close is a once-in-a-lifecycle news beat for the 2026 tournament. Hits the news-cycle peak for "World Cup 2026 tickets" search volume.
**Target keywords:** "World Cup 2026 tickets sold out," "FIFA general sale closed," "cheapest World Cup 2026 tickets after phase 1," "World Cup 2026 resale tickets"
**Internal links:** `/world-cup-2026`, individual stadium pages (MetLife, SoFi, BC Place, Lumen Field, Hard Rock, AT&T), `/compare`, the 4/22 FIFA resale post (when published), the 4/15 seat-assignment post (when published)
**Word count target:** 1000–1200

### Thursday, April 30 — Comparison/Listicle
**Title:** "StubHub vs Vivid Seats (2026): Which Resale Site Is Actually Cheaper?"
**Slug:** `stubhub-vs-vivid-seats-2026`
**Category:** `comparisons`
**Angle:** SEO Ask 5 Post 2 from the 4/20 content brief, originally scheduled 2026-05-04. Pulling forward by 4 days to land in the Thursday comparison slot. Cover: per-platform fee stack (StubHub 10–15% buyer fee + 15% seller fee; Vivid Seats variable 20–30% all-in but with rewards program offsets), inventory differences (StubHub's larger NBA + concert breadth, Vivid Seats' MLB + NFL strength), buyer protection policies (StubHub's FanProtect vs Vivid's 100% Buyer Guarantee), mobile UX, and the "which is cheaper for what" verdict — playoff basketball, summer concerts, MLB, NFL preseason. Reference the existing 4/23 TM-vs-SG piece as the prior in the comparison series.
**Why now:** Completes the Q2 comparison series (4/16 best comparison sites overview → 4/23 TM vs SG → 4/30 SH vs VS). All three pieces feed the `/compare` page hub-and-spoke graph that SEO Agent flagged as the highest-leverage internal-link work. Pulling forward also lets us fill the Thursday slot with a SEO-sanctioned brief instead of inventing one.
**Target keywords:** "StubHub vs Vivid Seats," "Vivid Seats fees 2026," "is StubHub cheaper than Vivid Seats," "Vivid Seats buyer protection"
**Internal links:** `/compare` (prominent), the 4/23 TM-vs-SG piece (when published), the 4/16 best-comparison-sites piece (when published), `/watchlist`, existing `/blog/avoid-ticket-scams`
**Word count target:** 1100–1300

### Friday, May 1 — Page Refresh
**Target:** SoFi Stadium (`sofi-stadium` in `worldcup.ts`)
**Why:** Last sparse-3-section venue in the World Cup file after Saturday's MetLife refresh. SoFi hosts 8 World Cup matches including the **third-place playoff** plus quarterfinal and Round-of-32 fixtures — second-tier importance after MetLife's Final, ahead of the group-stage-only US venues. Same arena-tier-of-attention pattern as MetLife: the AggregateOffer schema gain only realizes once the SEO bundle ships, but the section-data-grounding work compounds either way. SoFi was a Super Bowl LVI host (Feb 2022) — strong precedent pricing data ($1.5K–$10K+ resale) to anchor the description against, parallel to the MetLife/Eras Tour reference. LA + SoCal market is the largest WC ticket market on the West Coast.
**Scope:** Same template as MetLife. Expand to ~9 specific section groupings mapped to SoFi's actual layout *and* to FIFA Cat 1–4 pricing tiers. Add Coca-Cola Roof / Vista Field Cabanas / 100/200/300/500 levels with FIFA Cat mapping. Description rewrite covering the third-place playoff context, Rams/Chargers regular usage, Super Bowl LVI pricing reference, transit/parking, and cross-platform comparison. Expand `keywords` from current 4 to 10. Expand `ticketTips` from generic 4 to 8 SoFi-specific tips.

### Saturday, May 2 — Page Refresh
**Target:** AT&T Stadium (`att-stadium` in `worldcup.ts`)
**Why:** Hosts **9 World Cup matches** — the highest match count in the tournament. Includes one of the two **semifinals**. AT&T Stadium is the largest-capacity NFL stadium (105K) and the largest expected single-match attendances of the tournament will land here. Currently sparse data per the WC pattern. Cowboys regular usage + Country Music Awards + boxing megafights (Canelo) gives a deep precedent-pricing reference set for the description.
**Scope:** Same template as MetLife and Friday's SoFi work. 9 section groupings mapped to AT&T's actual layout (including the legendary Hall of Fame Suites and Star Suites for the AggregateOffer high-end). Description coverage of: 9-match volume framing, semifinal placement, Cowboys + Star concert usage with specific resale precedent, the venue's giant-screen landmark status, AC + roof advantages over outdoor June/July venues like MetLife (relevant for fan comfort messaging), and cross-platform comparison. Expand `keywords` from 4 to 10. Expand `ticketTips` from 4 to 8 AT&T-specific tips. **Backup target if AT&T refreshes faster than expected:** Hard Rock Stadium (Miami, 7 matches incl. Round-of-16; Brazil group-stage match was the $281 outlier in our 4/22 FIFA resale data).

---

## Immediate Actions (Priority Order)

1. **PUBLISH THE BACKLOG.** Six drafts ready to ship (4/14, 4/15, 4/16, 4/21, 4/22, 4/23). All frontmatter validated. Recommended cadence: Monday morning publishes the first three (the carry-over from last Monday's untaken action), Tuesday/Wednesday/Thursday the new three. Tuesday/Wednesday/Thursday's *new* drafts (the ones produced in next week's Mon–Thu plan above) then queue behind. **Two-week pipeline of stockpiled pre-published drafts plus four new drafts coming = ten posts ready to go through the publish script in seven days.** That cleans the queue.
2. **ARCHIVE the 4/8 draft.** Last decision in last week's plan. No action taken yet. Either delete or move to `marketing-agents/output/content/archived/` (folder doesn't exist yet — needs creation). **Lead Architect call.**
3. **COMMIT + PUSH the SEO 10-day bundle.** ~50 schema improvements + 3 auth-walled-routes-leaking-`index, follow` fixes + Organization `@id` reference resolution + WebSite entity relocation. One Vercel deploy clears it. **Same flag as last week, four days worse.** This is the single biggest non-content blocker on organic growth this month.
4. **Complete SEO Ask 2 (FAQ audit) by 2026-04-27.** Due tomorrow. Estimated 3–4 hours: read 16 questions in `web/src/app/faq/page.tsx`, expand any answer under 40 words to 40–100 words, deliver diff-ready audit at `marketing-agents/output/content-faq-audit-2026-04-27.md`, also commit the in-place edits to `faq/page.tsx`. **Schedule for Monday morning before publishing the first three drafts** — both fit in a 4-hour block.
5. **Investigate the target-price field in the watchlist UI.** 85 watchlist items, all `target_price = null`. The field is either invisible or non-functional in the UI. Cross-agent ask to CRO Agent — log in `marketing-agents/output/seo-requests/` (or open new `cro-requests/` folder) tomorrow.
6. **Archive question for the 4/8 draft.** The NHL section is the only meaningfully unique content vs the 4/14 draft. If we want it salvaged, extract as `2026-05-XX-nhl-playoff-tickets-2026-buying-guide.md` and re-write to be NHL-only, with current Round 2 (or wherever the NHL playoffs are by then) framing. Not a priority — only worth doing if the publish pipeline gets so empty we need fillers.
7. **Instagram template rotation.** Third reporting week with the same flag. The single `ig-template.png` is now visually saturated for any user who's seen more than two posts. Lead Architect: 2–3 template variations would unlock an immediate freshness signal across the social calendar.

## Cross-Agent Notes

- **SEO Agent:** FAQ audit (Ask 2) scheduled for Monday — confirmed in #4 above. TM-vs-SG piece (Ask 5 Post 1) is already drafted as the 4/23 file, due Sunday but publishing Thursday — flag the calendar-vs-publish-date difference. SH-vs-VS piece (Ask 5 Post 2) pulled forward from 5/04 to 4/30 — same week, three days early. Venue openers (Ask 1) due 5/01 still on track for next-week-after-this. World Cup country pages (Ask 3) due 5/10. Best-time-to-buy copy (Ask 4) blocked on backend price-history endpoint.
- **Social Agent:** Monday's Summer Concert publish, Tuesday's same-day NBA playoff piece, Wednesday's WC phase-1-close piece, and Thursday's SH-vs-VS piece each warrant 2–3 supporting social posts on publish day. Wednesday's piece is the strongest social hook (news cycle peak for "World Cup 2026 tickets"). Tuesday's same-day playoff piece is the strongest tactical-anchor hook for Twitter/X during NBA Round 1 elimination games — schedule immediately after publish.
- **Email Agent:** When the Monday triple-publish lands (4/14, 4/15, 4/16), the 4/16 best-comparison-sites piece is the highest-trust newsletter angle in the queue — honest about platform bias, internal-links to `/compare`, and 10 days seasoned without going stale. Coordinate a send on Tuesday if SMTP is functional. The drip queue's 76-emails-owed backlog needs a separate fix conversation; that's an SMTP-pipeline conversation, not a content one.
- **CRO Agent:** New ask flagged in #5 above — 85 watchlist items with 100% `target_price = null` across the lifetime of the user base. Either the field doesn't render in the watchlist add UI, or it's there but non-obvious enough that nobody fills it in. Either way, the price-alerts feature has a structural zero-funnel problem upstream of the broken cron.
- **Analytics Agent:** The nmcnamee99 case study is content material twice over — Tuesday's same-day playbook is the evergreen tactical version; the post-mortem version waits for the price-cron fix. Coordinate the post-mortem publish for whenever the cron unblocks, with the data this week generated.
- **Paid Ads Agent:** Thursday's SH-vs-VS piece is a high-intent landing-page candidate for paid search on "Vivid Seats fees" and "StubHub vs Vivid Seats" queries. Pair with Thursday's TM-vs-SG piece in the same paid-test cluster once conversion tracking is live.

## Stretch / Out-of-Schedule Production Notes

- **`content-faq-audit-2026-04-27.md`** — separate non-blog deliverable, due Monday.
- **Same-day-tickets post-mortem** — parked. Trigger: price-history cron fixed.
- **NHL Playoff Tickets 2026** — parked. Trigger: publish pipeline empty enough to justify backfilling from the 4/8 archive material.
- **All-In Pricing post** (SEO Ask 5 Post 3, due 2026-05-11) — slot in week of 5/04 once we confirm the publish backlog is clearing.
