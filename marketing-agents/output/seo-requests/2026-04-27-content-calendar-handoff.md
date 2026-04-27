# Content Agent → SEO Agent — Weekly Handoff

**Filed:** 2026-04-27 (Mon)
**From:** Content Agent (Agent 1)
**To:** SEO Agent (Agent 2)
**Re:** Week of 4/27 – 5/3 keyword opportunity dispatch + open-loop status

---

## Open-loop status (highest urgency first)

1. **SEO bundle un-deployed — Day 11.** ~50 schema improvements + 3 auth-walled-route indexability fixes (`/admin`, `/watchlist`, `/favorites` still emit `index, follow` on prod) + Organization `@id` + WebSite entity relocation. **One Vercel deploy clears it all.** Re-escalation: this is a content-multiplier blocker, not a content-generation problem.
2. **Ask 2 (FAQ audit) due TODAY.** Content Agent producing `content-faq-audit-2026-04-27.md` + in-place edits to `web/src/app/faq/page.tsx` this morning. 16 questions, expand any answer under 40 words to 40–100 words. Will file confirmation when delivered.
3. **Ask 5 Post 1 (TM vs SG fees) due TODAY.** Already drafted as `content/2026-04-23-ticketmaster-vs-seatgeek-fees-2026.md`. Publishing Thursday 4/30 per cadence. **Functional delivery today, calendar publish Thursday.**
4. **Blog OG images request — Day 9 open.** Backlog will grow by 6–8 posts this week if planned publishes execute. Template needed: 1200×630px, blog category + post title overlaid on teal gradient, TicketScan logo bottom-right. Lead Architect call.

---

## Keyword opportunities — this week's blog production

### 1. Mon 4/27 — Summer Concert Tour 2026 piece (in-flight today)
**Slug:** `summer-concert-tour-2026-ticket-buying-guide`
**Primary:** "summer concert tour 2026 tickets" (estimated low-mid competition; high seasonality through May–August)
**Secondary:** "when to buy concert tickets 2026," "cheapest summer concert tickets 2026," "concert ticket prices 2026"
**Long-tail (entity-rich):** "Billie Eilish tour 2026 tickets," "Kendrick Lamar tour tickets cheapest," "Tyler the Creator tour 2026 prices," "Chappell Roan tour tickets when to buy"
**Internal-link targets:** `/compare`, `/watchlist`, existing `/blog/best-time-to-buy-concert-tickets`, existing `/blog/taylor-swift-eras-tour-tickets`
**SEO ask:** Verify `Article` + `BreadcrumbList` schema on publish. AggregateOffer if you want to attach a price range from the Pollstar $108.63 anchor.

### 2. Tue 4/28 — Same-Day NBA Playoff Tickets (new draft Tue AM)
**Slug:** `same-day-nba-playoff-tickets-6-hour-playbook`
**Primary:** "same day NBA playoff tickets" (perishable — peak demand window is THIS week's Round 1 elimination cluster)
**Secondary:** "buy NBA tickets day of game," "last minute playoff tickets," "cheapest playoff tickets day of"
**Long-tail (entity-rich, time-sensitive):** "Cavs tickets tonight," "Thunder Game 5 tickets cheap," "Knicks Game 6 tickets," "Nuggets vs Clippers tickets tonight"
**Internal-link targets:** `/compare`, `/watchlist`, existing `/blog/how-to-find-cheap-nba-tickets`, existing `/blog/last-minute-ticket-deals-guide`
**SEO ask:** This piece's value-window is 72 hours. **If publish slips a day, half the search volume is gone.** Push for Tuesday morning ship and confirm no schema-validation lag will block.

### 3. Wed 4/29 — World Cup Phase-1 Closes (new draft Wed AM)
**Slug:** `world-cup-2026-general-sale-closing-april-2026`
**Primary:** "World Cup 2026 tickets sold out" (high search volume, lifecycle peak)
**Secondary:** "FIFA general sale closed," "cheapest World Cup 2026 tickets after phase 1," "World Cup 2026 resale tickets"
**Long-tail (stadium-anchored):** "MetLife Stadium World Cup tickets left," "SoFi Stadium World Cup resale," "AT&T Stadium semifinal tickets," "Hard Rock Stadium Brazil match tickets"
**Internal-link targets:** `/world-cup-2026`, individual stadium pages (MetLife, SoFi, BC Place, Lumen Field, Hard Rock, AT&T), `/compare`, the 4/22 FIFA resale piece, the 4/15 seat-assignment piece
**SEO ask:** Newsworthy schema — `NewsArticle` instead of `Article`. Dateline at top. Confirm `BreadcrumbList` chain to `/world-cup-2026` parent. This is the news-cycle-peak piece for the WC keyword cluster.

### 4. Thu 4/30 — StubHub vs Vivid Seats (new draft Thu AM, doubles as SEO Ask 5 Post 2)
**Slug:** `stubhub-vs-vivid-seats-2026`
**Primary:** "StubHub vs Vivid Seats" (mid competition; affiliate-heavy SERP, most pieces stale 2024)
**Secondary:** "Vivid Seats fees 2026," "is StubHub cheaper than Vivid Seats," "Vivid Seats buyer protection," "StubHub vs Vivid Seats fees"
**Long-tail (vertical-specific):** "StubHub vs Vivid Seats for NFL," "StubHub vs Vivid Seats for concerts," "StubHub vs Vivid Seats for MLB"
**Internal-link targets:** `/compare` (prominent), the 4/23 TM-vs-SG piece (when published), the 4/16 best-comparison-sites piece (when published), `/watchlist`, existing `/blog/avoid-ticket-scams`
**SEO ask:** Verify `ComparisonTable` schema if available. Otherwise `Article` + structured comparison content. Hub-and-spoke confirmation: this should link bidirectionally with the 4/23 TM-vs-SG piece (both are Q2 comparison series). **Pulled forward 4 days from original 5/04 schedule.**

---

## Page refreshes this week (Fri-Sat)

### 5. Fri 5/01 — `worldcup-stadiums/sofi-stadium`
**Why:** SoFi hosts 8 WC matches incl. **third-place playoff** + quarterfinal + Round-of-32. Last sparse-3-section venue in the World Cup file after Saturday's MetLife refresh.
**Keyword expansion ask:** Current 4 keywords → 10. Suggested adds: "SoFi Stadium World Cup tickets," "SoFi Stadium third place playoff," "SoFi Stadium quarterfinal tickets," "Los Angeles World Cup 2026," "Inglewood World Cup tickets," "SoFi Stadium FIFA Cat 1," "Rams stadium World Cup," "Super Bowl LVI venue."
**Schema ask:** AggregateOffer with FIFA Cat 1–4 price range mapped from section data. Same template as MetLife.

### 6. Sat 5/02 — `worldcup-stadiums/att-stadium`
**Why:** **9 World Cup matches** (highest match count in the tournament) + **one of two semifinals**. Largest-capacity NFL stadium (105K).
**Keyword expansion ask:** Current 4 → 10. Suggested adds: "AT&T Stadium World Cup tickets," "Cowboys Stadium semifinal," "Arlington World Cup 2026," "AT&T Stadium FIFA tickets," "AT&T Stadium semifinal tickets," "Dallas World Cup 2026," "AT&T Stadium Cat 1," "Star Suite World Cup."
**Schema ask:** AggregateOffer + structured Hall of Fame Suites / Star Suites coverage for premium-tier eligibility. Same template as MetLife.

---

## Long-running SEO requests (status check)

| Ask | Filed | Due | Status as of 4/27 |
|-----|-------|-----|-------------------|
| Ask 1: Venue page openers | 4/20 | 5/01 | Not started — content load this week is heavy; will pull forward to early 5/04 week |
| Ask 2: FAQ audit | 4/20 | **TODAY 4/27** | In production this morning — delivering today |
| Ask 3: World Cup country pages | 4/20 | 5/10 | On track. Will outline in 5/04 week's plan. |
| Ask 4: Best-time-to-buy copy | 4/20 | TBD | **Blocked** on backend price-history endpoint. No movement. |
| Ask 5 Post 1: TM vs SG fees | 4/20 | **TODAY 4/27** | Drafted 4/23, publishing Thu 4/30. Functional delivery today. |
| Ask 5 Post 2: SH vs VS | 4/20 | 5/04 | **Pulling forward 4 days** to Thu 4/30 — see #4 above. |
| Ask 5 Post 3: All-In Pricing | 4/20 | 5/11 | Slot in 5/04 week. Will brief in next-week-plan Sunday 5/03. |

---

## Cross-handoff requests TO SEO Agent (this week)

1. **Confirm schema validation passes for the 6 backlog publishes Mon-Thu.** If any post fails Article schema, bump to your queue same-day so the publish doesn't lose rich-result eligibility.
2. **Re-escalate the SEO bundle deploy to Lead Architect.** Day 11. Two-week-running flag. Single Vercel deploy. Worth a hard escalation in your daily.
3. **Verify auth-walled routes' `<meta name="robots">` after deploy.** `/admin`, `/watchlist`, `/favorites`. Important to confirm fix lands cleanly because indexability errors don't always show in Search Console for weeks.
4. **GSC API connection — Day 12.** Re-flag in your daily. Next week's content performance report should have real numbers.

---

## Forward-look — week of 5/04

Content side will produce:
- Mon big-idea piece (TBD — likely `concert-ticket-fees-explained-all-in-pricing-2026` to slot SEO Ask 5 Post 3 early; alternative is `nhl-playoff-tickets-2026-buying-guide` if we extract from the 4/8 archive material)
- Tue tactical / Wed news / Thu comparison — slots open
- Fri/Sat venue refreshes — likely BMO Field (Toronto) + BC Place (Vancouver) — Canadian WC venues are next sparse-data targets
- Lead magnet — rotation to **infographic** format (NFL/NBA/MLB season ticket comparison) to complete the 4-format rotation (PDF guide → PDF cheat sheet → spreadsheet → infographic)

Will brief fully in next-week-plan Sunday 5/03.
