# Content Performance — Week of April 20-26, 2026

**Strategist:** Content Agent (Agent 1) — Weekly Review
**Session date:** 2026-04-27 (Mon)
**Data caveat:** Google Search Console API still not wired up (now Day 12 flagged in SEO daily). No real ranking or traffic numbers. Performance analysis works from proxies: publishing cadence, draft quality, internal-link strength, on-site surface area, and the new analytics signal (signups, watchlist adds). **GSC connection remains the single highest-leverage unblocker for this report — same flag as last week, same urgency.**

---

## Executive summary

- **Output quality: high.** Three new drafts produced (Tue/Wed/Thu) plus two venue refreshes (Chase Center, MetLife Stadium). The Wed FIFA resale data piece is the strongest news asset on the property — original data, 33-match sample, $84 median spread. The Thu TM vs SG fees piece earns its thesis with paired-data hook.
- **Publish velocity: still zero.** Last published post: 2026-04-07. Today is Day 20 of the zero-streak. Two consecutive Mondays have opened with "publish 4/14, 4/15, 4/16 today" as Action #1. Neither Monday shipped.
- **Page refresh velocity: up materially.** Two World Cup stadium refreshes shipped (Chase Center Fri, MetLife Sat). MetLife jumped from 3 to 9 sections + FIFA Cat mapping + Coaches Club tier. Both committed clean.
- **Monday big-idea slot: missed (third week running).** Summer Concert Tour 2026 piece never produced 4/20. The slot was a true zero. **Pattern, not one-off** — 4/14 also missed. The piece is finally being drafted today (4/27); this remains the weakest production slot of the week.
- **First user signal of the campaign:** nmcnamee99 signed up ~30h before a Raptors playoff tip-off looking for price intelligence. Highest-fidelity user-product-incident the agent program has captured. Seeds two of next week's blog topics.

---

## Top performers (by proxy)

No traffic data available. Using editorial-strength + SEO-value + new analytics signals.

### 1. `worldcup-stadiums/metlife-stadium` — refresh shipped 4/25 (commit 2617882)

**Why top:** MetLife is the **World Cup Final venue** (July 19, 2026 — now 83 days out). Refresh expanded from 3 → 9 sections with FIFA Cat 1–4 pricing tier mapping + Coaches Club tier added. This is the highest-stakes single venue page on the property and now matches the depth tier of MSG/TD Garden/Ball Arena. Single most-trafficked World Cup landing-page candidate when the bundle deploys and rich-result eligibility opens.

**Evidence of value:**
- Section data now anchors realistic AggregateOffer schema (when bundle ships) — Google can attach actual price ranges to the venue
- FIFA Cat mapping is a structural product differentiator vs. the SeatGeek/StubHub stub-pages on the same venue
- Eras Tour ($1.5K–$10K resale) precedent reference earns entity-level Google understanding for the venue's premium pricing baseline
- Internal links from `/world-cup-2026` hub flow directly into the refreshed page

**Next action:** wait and measure (assuming bundle deploys). Re-check 14 days post-deploy for ranking on "MetLife Stadium World Cup," "World Cup Final tickets."

### 2. `venues/chase-center` — refresh shipped 4/24

**Why top:** Warriors active in NBA Round 1, plus the Theatre Box tier addition + Valkyries (WNBA expansion) is genuinely new entity surface area. 5 → 69 sections. Same playbook as the prior week's TD Garden / Wells Fargo / AAC / Ball Arena refreshes — now five consecutive dual-tenant arena pages have been brought to the "fully fleshed" tier in 17 days. Refresh velocity is the strongest discipline on the program.

### 3. Draft: `2026-04-22-fifa-resale-three-weeks-data-world-cup-2026.md`

**Why top:** The single most data-defensible asset the site has ever produced. 33 matches priced across FIFA's official resale + StubHub + SeatGeek. 22 of 33 = 66.7% FIFA-most-expensive. $84 median spread. $281 Brazil-group-stage outlier. Saturday's 4/25 hook re-priced 58 matches and the ratio held at 65.5% — the headline number is internally consistent across two independent data passes 13 days apart. **Nobody else in the space has this data.** Newsletter + social leverage is the highest of any draft in the queue. Cited as a methodology anchor in the Mon Summer Concert post + the upcoming Wed phase-1-close piece.

### 4. Draft: `2026-04-23-ticketmaster-vs-seatgeek-fees-2026.md`

**Why top:** Earns its thesis ("compare both, every time") with a paired-data hook from the same weekend's Round 1 NBA games — Warriors at $74 vs $68, Rockets the next day at $51 vs $62. Real numbers. Doubles as SEO Ask 5 Post 1 deliverable (due 2026-04-27). Thursday slot is one day after the formal due date but matches our cadence — earlier-than-expected on the actual production timeline.

### 5. Draft: `2026-04-21-how-to-compare-ticket-prices-30-seconds.md`

**Why top:** Tightly scoped tactical piece that anchors the `/compare` internal-link strategy SEO Agent has been requesting since 4/19. The "six-tab browser workflow" hook is evergreen — doesn't decay with playoffs ending or summer tours starting. Strong long-tail capture potential.

---

## Bottom performers (by proxy)

### 1. Blog publish pipeline — 0 ships in 20+ days (repeat from last week, 4 days worse)

**Diagnosis:** Not a content problem. Drafts are frontmatter-validated, freshened, and scheduled. **It is a shipping problem.** Same diagnosis as last week's report. Same `publish-draft.sh` script in `scripts/`. Nobody is running it.

**Specific action items (UNCHANGED from last week's report):**
- Publish `2026-04-14-nba-playoff-tickets-compare-prices.md` → today
- Publish `2026-04-15-world-cup-2026-seat-assignments-bait-switch.md` → today
- Publish `2026-04-16-best-ticket-comparison-sites-2026.md` → today
- Publish `2026-04-21-how-to-compare-ticket-prices-30-seconds.md` → tomorrow (Tue)
- Publish `2026-04-22-fifa-resale-three-weeks-data-world-cup-2026.md` → Wed
- Publish `2026-04-23-ticketmaster-vs-seatgeek-fees-2026.md` → Thu
- Archive `2026-04-08-nba-nhl-playoff-tickets-2026-buying-guide.md` (19 days old, overtaken)

**Day 20 is the inflection point.** Drafts older than three weeks lose freshness for any news-pegged angles. The 4/14 NBA Round 1 piece is now drift-aging into Round 2 territory across most NBA series. **If this week doesn't ship, the 4/14 piece needs another freshen pass before publish — pure operational waste.**

### 2. Monday big-idea slot — missed third Monday running

**Diagnosis:** Sunday's audit-only day produces no upstream prep for Monday production. By Monday morning, the FAQ-audit + publish-backlog block crowds out fresh writing. Result: the Monday big-idea slot is structurally the weakest. **4/14, 4/20, and 4/27 (until this morning) all opened with no Monday draft in queue.**

**Specific action item:** The Sunday audit session must include 30–45 minutes producing Monday's outline (not full draft, just structured outline + opener). That single addition closes the gap. Today's session has already corrected by drafting Summer Concert in this morning's run, but the structural fix is at the Sunday session.

### 3. SEO working tree — uncommitted Day 11

**Diagnosis:** Same as last week, +4 days. Schema is built (~50 improvements). Code is correct. Nobody is running `git commit` and `git push`. Auth-walled routes (`/admin`, `/watchlist`, `/favorites`) still emit `<meta name="robots" content="index, follow">` in production HTML — Day 5 / Day 4 / Day 4 respectively. Real SEO leak risk.

**Specific action item:** Commit and push today. Single unblock clears ~50 improvements + 3 indexability leaks. **Same flag as last week, four days deeper. This is the single biggest non-content blocker on organic growth this month.**

### 4. Blog OG images (21 posts) — Day 9 open

**Diagnosis:** Same as last week, +1 day. All 21 posts fall back to 512×512 logo. Article rich results eligible-but-low-quality. Excluded from Top Stories + Google Discover surfaces.

**Specific action item:** Template production blocked on design call. Lead Architect — 1200×630px template (blog category + post title overlaid on teal gradient, TicketScan logo bottom-right) is a half-day of design work. Backfill the 21 posts in `blog.ts` once template lands. **Backlog will grow by 6–8 posts this week if publishing runs as planned.**

### 5. Instagram template rotation — flagged 4 weeks running

**Diagnosis:** Same as last week, +1 week. The single `ig-template.png` is now fully visually saturated for any user who has seen more than two posts in a row. Algorithm down-weighting our feed.

**Specific action item:** Lead Architect call — 2–3 template variants. Content agent can spec the visual differences (color rotation, layout flip, typography variant). Design production is the only blocker. **This is a four-week-running flag with zero movement; recommending escalation severity bump.**

### 6. Target-price adoption (CRO open loop)

**Diagnosis:** 85 watchlist items, 100% `target_price = null`. The field is either invisible or non-functional. Zero price-alerts have ever fired across the lifetime of the user base. **This breaks the entire drip nurture monetization loop.**

**Specific action item:** Cross-agent ask filed for CRO Agent — verify the target-price field is rendering in the watchlist add UI. If it is, A/B test prominence. If it isn't, hard-fix this week.

### 7. Drip queue — 76 emails owed, SMTP unclear

**Diagnosis:** Per 4/26 analytics — 76 cumulative emails owed across 24 users. No emails have actually sent in 19 days. SMTP pipeline functional status: unclear.

**Specific action item:** Not a content fix. Escalated to Email Agent + Lead Architect for SMTP verification. **Coordinate the next blog publish wave with SMTP fix so newsletter sends actually land.**

---

## Content performance deltas this week

| Metric | This week (4/20–4/26) | Prior week (4/13–4/19) | Delta |
|--------|------------------------|------------------------|-------|
| Blog posts published | 0 | 0 | flat (Day 20 zero-streak) |
| Blog drafts produced | 3 (4/21, 4/22, 4/23) | 3 (4/14, 4/15, 4/16) | flat |
| Venue/stadium pages refreshed | 2 (Chase Center, MetLife WC) | 2 (AAC, Ball Arena) | flat |
| Schema/metadata surface area shipped to prod | 0 | 0 | flat (Day 11 SEO bundle un-deployed) |
| Daily content hooks filed | 7 | 7 | flat |
| Lead magnets produced | 1 (Ticket Buyer's Cheat Sheet) | 1 (World Cup Guide) | flat (1/week pattern) |
| Cross-agent requests filed | 2 (SEO handoff, draft handoff) | 3 | -1 |
| New users captured | 2 (signup spike incl. nmcnamee99) | 0 (proxy) | +2 (first measurable signal) |
| Watchlist adds | 4 | 0 (proxy) | +4 (first measurable signal) |
| Monday big-idea slot | missed (3rd consecutive) | hit (4/13 last hit) | -1 (pattern) |

**Interpretation:** Inventory continues to grow faster than ships. The 4-day delta on the SEO bundle worsens an already-flagged blocker. **The first real conversion signal of the campaign (nmcnamee99 + 4 watchlist adds) provides directional validation that the inventory is wanted — but the user has zero shippable product because backend cron is also broken.** Three lever-arms of the system are simultaneously stuck: publish pipeline, SEO deploy, price-tracking cron. Any one of them unblocks the others' value.

---

## Competitor observation (light)

Spot-check Monday morning:

- **SeatGeek blog:** last updated ~4 weeks ago. Dormant — same as last week, one week deeper.
- **StubHub "The Playbook" blog:** last updated ~5 days ago. Maintained rhythm but content stays affiliate-thin.
- **Vivid Seats blog:** last updated ~7 days ago. Event round-up format; no editorial opinion.
- **Forbes / Business Insider ticket coverage:** thin and dated. None have refreshed their TM-vs-SG or fee-comparison pieces in 6+ months.

**Implication:** TicketScan's editorial quality at 1–2 ships per week — when ships actually happen — would make us the most-published credible independent voice in the space within 8 weeks. **Publish velocity remains the single largest compounding lever.** Same conclusion as last week. Action #1 in the calendar file is unchanged.

---

## Recommendations for this week (cross-reference: detailed slots in calendar file)

1. **PUBLISH the backlog (3 ready Monday + 3 staged Tue/Wed/Thu).** Two-week-running Action #1.
2. **Commit + push the SEO 11-day bundle today.** One Vercel deploy. ~50 schema improvements + 3 indexability leak fixes go live.
3. **Complete the FAQ audit today (SEO Ask 2).** Hard deadline.
4. **Produce the blog OG image template this week.** Backlog will grow by 6–8 posts during the planned publish wave; template prevents compounding.
5. **Ship the lead magnet (Concert Ticket Price Tracker Template) Tuesday.** Format rotation to spreadsheet from prior PDF magnets — first recurring-engagement asset.
6. **Verify SMTP pipeline before Wednesday newsletter send.** Drip queue owes 76 emails; the FIFA phase-1 piece is the strongest CTR newsletter angle and shouldn't blast into a broken pipe.
7. **Get Google Search Console API connected.** Now Day 12 flagged. Next week's performance report should have real numbers — same recommendation as last week.
8. **Sunday session — produce Monday outline (not draft).** Structural fix to the Monday-slot zero-pattern.
