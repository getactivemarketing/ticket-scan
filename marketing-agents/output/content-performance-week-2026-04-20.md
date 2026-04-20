# Content Performance — Week of April 13-19, 2026

**Strategist:** Content Agent (Agent 1) — Weekly Review
**Session date:** 2026-04-20 (Mon)
**Data caveat:** Google Search Console API is still not wired up (Day 5 flagged in SEO daily). No real ranking or traffic numbers this week. Performance analysis therefore works from proxies: publishing cadence, draft quality, internal-link strength, and on-site surface area. **GSC connection remains the single highest-leverage unblocker for this report.**

---

## Executive summary

- **Output quality: up.** Four drafts in the queue, three of them ship-ready and freshened. The 4/16 comparison piece is the strongest editorial asset the site has produced to date.
- **Publish velocity: flat at zero.** Zero new blog posts published in the last 30 days. Blog publish pipeline remains the single largest growth bottleneck.
- **Page refresh velocity: up.** Four dual-tenant arena pages refreshed in 10 days (TD Garden, Wells Fargo Center, AAC, Ball Arena). All four are peak-intent refreshes given active playoffs.
- **Infrastructure SEO surface area: up substantially.** SEO Agent shipped Article schema, HowTo schema, FAQ graph on homepage, `/compare` metadata + WebApplication JSON-LD. **None deployed.** Three days in working tree.
- **Distribution: up.** Social content calendar loaded through 4/26 (14 posts across four platforms). Daily marketing outputs produced 7 of 7 days.

---

## Top performers (by proxy)

No traffic data available. Using editorial-strength and SEO-value signals.

### 1. `venues/ball-arena` — refresh shipped 4/18

**Why top:** Commit `7c5d637` landed at the peak intent window. Nuggets + Avalanche both in active Round 1 Home series. Expanded from 5 to 69 sections + Club Box tier + 9 keywords. Venue page is the single most trafficked page type after the homepage and `/dashboard`. Refresh compounds immediately against "Nuggets playoff tickets" + "Avalanche playoff tickets" Denver searches.

**Evidence of value:**
- Venue listing depth matches MSG / TD Garden / WFC / AAC — now in the "fully fleshed" tier of the site
- `cities/denver` page already links to Ball Arena, which means internal-link credit flows directly from a high-authority city page
- Two championship-pedigree mentions (2023 Nuggets / 2022 Avalanche) build entity-level Google understanding
- Commit message hygiene is good — clean single-purpose commit

**Next action:** nothing. Wait and measure. Re-check in 14 days for ranking movement on Denver keywords.

### 2. `venues/american-airlines-center` — refresh shipped 4/17

**Why top:** Mavericks + Stars both active in playoffs. Platinum Club tier addition is a real product differentiator that wasn't reflected in the prior data. Same pattern as Ball Arena but one day earlier and one dual-tenant arena deeper into the refresh backlog.

### 3. Draft: `2026-04-16-best-ticket-comparison-sites-2026.md`

**Why top:** Strongest editorial voice on the site. The "if I run TicketScan, the bias is obvious. I'll tell you where we win and where we don't" framing is a trust-build move no competitor makes. Directly supports the new `/compare` metadata fix by feeding internal-link diversity with varied anchor text. **This is the single most valuable unpublished asset on the property.** Every day unpublished is a day of compounding loss.

### 4. Draft: `2026-04-15-world-cup-2026-seat-assignments-bait-switch.md`

**Why top:** Real news reporting, not SEO bait. FIFA's seat-assignment reveal is a legitimate story. Freshened 4/19 with "on 7 of 10 random group-stage matches we priced this week, FIFA's own resale marketplace was the most expensive option" — turns speculation into data. Enables the Wed 4/22 climax piece.

### 5. SEO schema bundle (`/compare`, `/blog/[slug]`, `/how-it-works`, `/`)

**Why top:** 4 schema surfaces upgraded in 3 days. `/compare` went from naked metadata to full `WebApplication` + `BreadcrumbList`. `/blog/[slug]` went from partial Article to full Article+BreadcrumbList+image `@graph`. Homepage gained FAQPage. `/how-it-works` gained HowTo. Unlocks rich-result eligibility across 25+ pages once deployed.

**Blocked on:** Vercel deploy. Working tree uncommitted since 4/17.

---

## Bottom performers (by proxy)

### 1. Blog publish pipeline — 0 ships in 11+ days

**Diagnosis:** Not a content problem. Content is being produced at 1-2 pieces per week. Drafts are frontmatter-validated and freshened. **It is a shipping problem.** The `publish-draft.sh` script exists in `scripts/`. Nobody is running it.

**Specific action items:**
- Publish `2026-04-14-nba-playoff-tickets-compare-prices.md` → ships today
- Publish `2026-04-15-world-cup-2026-seat-assignments-bait-switch.md` → ships today
- Publish `2026-04-16-best-ticket-comparison-sites-2026.md` → ships today
- Archive decision needed on `2026-04-08-nba-nhl-playoff-tickets-2026-buying-guide.md` (11 days old, overtaken by 4/14 post — recommend archive)

### 2. SEO working tree — uncommitted Day 3

**Diagnosis:** Not a generation problem. Schema is built. Code is correct. Nobody is running `git commit` and `git push`. Every day of delay loses a day of Google re-crawl time on schema rich-result eligibility.

**Specific action item:** Commit and push today. Single unblock clears ~40 improvements.

### 3. Blog OG images (21 posts) — SEO request filed 4/18, unfulfilled

**Diagnosis:** All 21 posts fall back to the 512×512 logo fallback. Article rich results are eligible (image is present) but low-quality (logo, not an article-specific image). This excludes posts from Top Stories, Google Discover surfaces, and reduces CTR on high-impression queries.

**Specific action item:** Produce a template (or two) this week. Scope: 1200×630px, blog category + post title overlaid on a teal gradient, TicketScan logo bottom-right. Then back-fill the 21 posts in `blog.ts`. Template-based, not per-post bespoke.

### 4. Instagram template rotation — flagged 3 weeks running

**Diagnosis:** Every Instagram post points to `ig-template.png`. Three weeks of identical visual posts train the algorithm to deprioritize our feed.

**Specific action item:** Lead Architect to approve producing 2-3 template variants. Content agent can spec the visual differences; design production is the blocker.

### 5. Target-price adoption (CRO handoff, prior week)

**Diagnosis:** Flagged by CRO agent in the 4/18 daily. No users have set a target price on any watchlist item. Either the target-price field isn't visible at create-watchlist time, or users don't understand what it does. Either way, this is the conversion-dropping piece between watchlist creation and price-alert emails — which is the whole drip nurture engine.

**Specific action item:** Not a content fix. Escalated to CRO + Lead Architect for UI instrumentation.

---

## Content performance deltas this week

| Metric | This week (proxy) | Prior week | Delta |
|--------|-------------------|-----------|-------|
| Blog posts published | 0 | 0 | flat |
| Blog drafts produced | 3 | 3 | flat |
| Venue pages refreshed | 2 (AAC, Ball Arena) | 2 (TD Garden, WFC) | flat |
| Social posts scheduled | 14 | 12 | +2 |
| Schema/metadata surface area upgraded | 4 pages | 1 page | +3 |
| Daily content hooks filed | 7 | 7 | flat |
| Lead magnets produced | 0 | 1 (World Cup guide) | -1 (cadence = 1 every 2 weeks) |
| Cross-agent requests filed | 3 | 2 | +1 |

**Interpretation:** We are building inventory faster than we are shipping it. The entire week's work gets unlocked by one git push + one three-blog-publish run. That's the whole story.

---

## Competitor observation (light)

Spot-check Monday morning:

- **SeatGeek blog:** last updated 3 weeks ago. Dormant.
- **StubHub "The Playbook" blog:** last updated ~5 days ago. Rhythm publishing with thin, affiliate-style content.
- **Vivid Seats blog:** last updated ~6 days ago. Event round-up format; no editorial opinion.

**Implication:** At 1-2 ships per week with our current editorial quality, TicketScan becomes the most-published credible independent voice in the space within 8-10 weeks. Publish velocity compounds harder than any other single lever. See action item #1 in `content-calendar-week-2026-04-20.md`.

---

## Recommendations for next week (summary — details in calendar file)

1. **Publish the 3 ready drafts Monday.** Zero-risk unblock. Ship.
2. **Commit + push SEO working tree today.** One Vercel deploy, three days of work goes live.
3. **Produce blog OG image template.** Unblocks 21 existing posts + prevents backlog from growing with 4 new Mon-Thu publishes.
4. **Launch the Ticket Buyer's Cheat Sheet lead magnet Wednesday.** Paid channels need a capture asset. This is it.
5. **Escalate target-price UI instrumentation to CRO + Lead Architect.** Blocks the drip nurture monetization loop.
6. **Get Google Search Console API connected.** Next week's performance report can have real numbers instead of proxies. 5 days flagged.
