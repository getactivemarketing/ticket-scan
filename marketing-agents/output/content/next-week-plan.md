# Content Calendar — Week of May 4 – 10, 2026

## This Week's Audit (April 27 – May 3)

### What shipped

| Date | Type | Title/Action | Status |
|------|------|-------------|--------|
| Mon Apr 27 | Big-idea blog | "Summer Concert Tour 2026 Tickets" | **Drafted, NOT published** |
| Tue Apr 28 | Tactical blog | "Same-Day NBA Playoff Tickets — 6-Hour Playbook" | **Drafted, NOT published** |
| Wed Apr 29 | News blog | "World Cup 2026 Tickets, 43 Days From Kickoff" | **Drafted, NOT published** |
| Thu Apr 30 | Comparison blog | "StubHub vs Vivid Seats (2026)" | **Drafted, NOT published** |
| Fri May 1 | Venue refresh | SoFi Stadium — 3 to 9 sections + FIFA Cat mapping | **Committed** |
| Sat May 2 | Venue refresh | Hard Rock Stadium — 3 to 10 sections + Copa America comp + SoFi factual correction + MetLife inline fix | **Committed** |
| Sun May 3 | Audit + plan + SEO replies | This document + content-hook + 3-handoff bundle reply | In progress |

### What worked

- **4/4 blog drafts shipped Mon–Thu against plan.** First time in five weeks of tracking that all four scheduled blog drafts were produced. Mon `2026-04-27-summer-concert-tour-2026-ticket-buying-guide.md`, Tue `2026-04-28-same-day-nba-playoff-tickets-6-hour-playbook.md`, Wed `2026-04-29-world-cup-2026-general-sale-closing-april-2026.md`, Thu `2026-04-30-stubhub-vs-vivid-seats-2026.md`. The Mon big-idea piece (which slipped two consecutive weeks before) landed with the May-1-deadline framing, exactly per last Sunday's plan. Tue's same-day-playoff piece was the literal nmcnamee99-case derivation per last Sunday's reasoning. Wed's WC general-sale-closing piece nailed the news-cycle peak and locked in `NewsArticle` schema framing. Thu's SH-vs-VS piece pulled forward four days from the original SEO Ask 5 Post 2 date (5/04 → 4/30) and completes the Q2 comparison series (4/16 best comparison sites → 4/23 TM vs SG → 4/30 SH vs VS) with all three pieces hub-and-spoking off `/compare`.
- **2/2 refreshes shipped Fri + Sat.** SoFi (Fri 5/1) expanded from 3 to 9 sections, FIFA Cat mapping, Super Bowl LVI pricing comp, ten keywords, eight ticketTips. Hard Rock (Sat 5/2) expanded from 3 to 10 sections, FIFA Cat mapping, Copa America 2024 Final pricing comp (the cleanest direct continental-final reference for any US WC venue), Inter Miami / Messi marquee-match comp, ten keywords, eight ticketTips, and the **Third-Place Playoff July 18 + Independence Day R16 July 4** keyword cluster that no competitor venue page currently targets.
- **In-flight error correction loop ran cleanly.** Saturday's commit also caught and fixed two factual errors on `worldcup.ts`: yesterday's SoFi refresh had asserted Third-Place Playoff (the source-of-truth `worldCupMatches` array shows SoFi hosts Semi-Final SF-2 on July 15; Hard Rock hosts the Third-Place Playoff). All three SoFi-side surfaces (description, three ticketTips, three sections, two keywords) corrected with Semi-Final framing and price ranges adjusted up to reflect SF demand premium. MetLife's "plus seven earlier matches" off-by-one (actual: eight earlier matches across nine total, including SF-1 on July 14) fixed inline same commit. **24-hour error-detection-to-fix loop is the cleanest possible execution.**
- **Process improvement adopted.** Refresh-checklist Step 0 added: `grep -n "venue: '<slug>'" worldcup.ts | grep "round: '"` to enumerate the venue's actual matches before drafting. Will catch the same error class on the 14 remaining sparse WC venues. The same step caught an in-session error in Saturday's content-hook (Hook 5 first draft asserted "AT&T hosts SF-1" — actually QF-3 on July 10) before commit.
- **Cross-agent calendaring landed again.** Saturday's hook explicitly forward-flagged Hard Rock for Saturday's slot (per Friday's hook), which is then the same execution pattern as Friday's SoFi slot (per Thursday's hook). The continuity loop from hook → next-day execution is now a four-week-running pattern.
- **SEO Ask 2 (FAQ audit) shipped Monday 4/27** as committed. Confirmed in the 4/27 sign-off file at `seo-requests/2026-04-27-content-faq-signoff.md`. SEO Ask 5 Post 1 (TM vs SG fees) drafted as the 4/23 file and held for Thursday publish per cadence; functional delivery on the 4/27 due date. SEO Ask 5 Post 2 (SH vs VS) pulled forward 4 days to 4/30. Ask 1 (venue openers) now scheduled in this week's plan below. Ask 3 (WC country pages) outline below. Ask 5 Post 3 (all-in pricing) slotted Thursday 5/7 below.

### What didn't work / gaps

- **Publishing velocity = 0 (Day 26).** Last published post: 2026-04-07. Today: 2026-05-03. Twenty-six days. Eleven drafts unpublished: 4/8 (recommended archive), 4/14, 4/15, 4/16, 4/21, 4/22, 4/23, 4/27, 4/28, 4/29, 4/30. **This is the sixth consecutive Sunday-plan-opener flagging the publish bottleneck.** Four of the eleven are decaying on freshness this week (see content-hook.md Hook 2 for the table) — 4/15, 4/22, 4/27, 4/29. **The 4/27 piece's "Friday May 1 deadline" is now 2 days past; it needs a 1-line freshen on Monday morning before publish.** The 4/29 piece's "43 days from kickoff" framing is 4 days stale today and will be 5 days stale tomorrow; ship by Wed 5/6 at latest. **Publishing the backlog is the highest-leverage 30 minutes of work on the agent program this month, ahead of the SEO bundle commit. Period.**
- **SEO bundle un-deployed — Day 17.** `seo-bundle-watch.md` confirms the bundle remains uncommitted. Process deviation flagged on Day 16: yesterday's `worldcup.ts` edits shipped to production *inside* the daily-marketing-output commit (`3dbd22b`) with no SEO review and no source-bundle commit message. Content Agent acknowledgment + forward fix in today's content-hook Hook 6 (refresh-checklist Step 5 added: explicit `Content refresh: <slug>` commit before automated marketing-output push runs, adopting on next refresh slot 5/8).
- **2/2 Day-4+ non-activators in last 120 hours.** Apr 28 lilianamasyrubi (Day 5, +120h, 0 wl) and Apr 29 zhili1208 (Day 4, +99h, 0 wl). Pattern is now n=11 confirmed Day-4+ silent users (largest cohort of dashboard period). **The content gap is a first-event-tracking welcome-flow guide** — drafted as Tuesday 5/5's slot below.
- **Watchlist drought 180h+ (7.5 days).** New record. Last add: Apr 25 18:27 UTC, taranimeramaro × Bruno Mars MetLife. The funnel is sealed; no inbound watchlist signal in the most recent week. The Bruno Mars Romantic Tour content gap (3 watchers, 6 wl items, 3 venues, all upcoming) is the strongest organic signal we have to work with — Wednesday 5/6's draft below addresses it.
- **`/venues/wrigley-field` 404 reverified — Day 10.** Cubs Game 1 (5/1) and Game 2 (5/2) both rolled past with 0 captures + no live `/venues/wrigley-field` page to capture related search traffic. Cubs Game 3 today; Games 4–6 May 4–6. **Three-game live-page-execution window remaining.** Monday 5/4 emergency override below.
- **Email Agent drip queue at 98 cumulative emails owed across 28 users (+3 in 24h).** Cron Day 26 dead. 8 NEW threshold transitions in last 48h, 0 processed. Not a content problem in scope, but the welcome-flow content Tuesday 5/5 will be the highest-leverage manual send candidate for the Apr 25 cohort + Apr 28–29 cohort once cron lands.
- **Same-day-event UX failure mode confirmed twice this week.** nmcnamee99 case (Apr 25 cohort, Raptors Apr 26, never returned) closed at 168+ hours post-game-end with 0 return sessions. goldy.pec.2012 Bilmuri Madison rolled past Saturday night without return. ajvanprooyen Cubs G1 + G2 both passed without him; G3 today. **The 4/28 same-day NBA playbook draft was literally written for nmcnamee99 and never reached them** (publish bottleneck). High-fidelity content-product loop material — parked as future post-mortem post.

### Copy review of queued drafts (all eleven unpublished)

**Pre-existing backlog (3 drafts, all reviewed clean since 4/19 freshen):**

- `2026-04-08-nba-nhl-playoff-tickets-2026-buying-guide.md` — **25 days old. Verdict unchanged from last two weeks: archive.** The 4/14 draft has overtaken the NBA half. NHL extract option still parked (separate `2026-05-XX-nhl-playoff-tickets-2026-buying-guide.md` not worth doing unless publish pipeline empties).
- `2026-04-14-nba-playoff-tickets-compare-prices.md` — **19 days old.** Already freshened 4/19. Round 1 framing intact. **Verdict: ready to publish Monday 5/4.**
- `2026-04-15-world-cup-2026-seat-assignments-bait-switch.md` — **18 days old.** Already freshened 4/19. "Under two months until the opener" framing still accurate (39 days today, 38 by Monday). **Verdict: ready to publish this week, ideally Tuesday 5/5 alongside the welcome-flow piece since both are evergreen-leaning.**
- `2026-04-16-best-ticket-comparison-sites-2026.md` — **17 days old.** Fully evergreen; voice is the strongest in the queue. **Verdict: ready to publish Monday 5/4 — recommended FIRST publish to seed the `/compare` internal-link graph.**

**Last week's drafts (3 reviewed clean):**

- `2026-04-21-how-to-compare-ticket-prices-30-seconds.md` — **12 days old.** Frontmatter clean (slug `how-to-compare-ticket-prices-30-seconds`, excerpt 161 chars, `category: tips`). Tightly scoped to `/compare` walkthrough. Internal-links well to `/compare`, `/watchlist`, `/how-it-works`. **Verdict: ready to publish Tuesday 5/5.** Pairs naturally with the 4/16 best-comparison-sites publish since both feed the `/compare` internal-link graph.
- `2026-04-22-fifa-resale-three-weeks-data-world-cup-2026.md` — **11 days old.** Frontmatter clean. The headline 22-of-33 (66.7%) figure is internally consistent with this morning's 38-of-58 (65.5%) extension and the 4/29 piece. **Verdict: ready to publish Wednesday 5/6 — pair with the 4/29 publish or stagger 24h.**
- `2026-04-23-ticketmaster-vs-seatgeek-fees-2026.md` — **10 days old.** Frontmatter clean (slug `ticketmaster-vs-seatgeek-fees-2026`; no collision with existing `ticketmaster-vs-seatgeek-comparison`). Warriors/Rockets paired-data hook still strong. **Verdict: ready to publish Thursday 5/7. Doubles as already-fulfilled SEO Ask 5 Post 1.**

**This week's drafts (4 reviewed clean):**

- `2026-04-27-summer-concert-tour-2026-ticket-buying-guide.md` — **6 days old.** Frontmatter clean (slug `summer-concert-tour-2026-ticket-buying-guide`, excerpt 207 chars — **flag: 7 chars over the 200-char excerpt guideline** but the excerpt is under the *blog.ts post.excerpt* rendering soft cap so likely fine; if SEO Agent prefers the strict 200, trim "and how to anchor your alert floor" from the end). Body Pollstar Q1 $108.63 anchor + platform variance on Billie/Kendrick/Tyler/Chappell remains strong. **Open paragraph references "Friday May 1" deadline which is now 2 days past.** Recommended 1-line edit on publish day Monday 5/4: change "If you are buying summer 2026 concert tour tickets and you wait past Friday, May 1" → "If you are still hunting summer 2026 concert tour tickets in early May, the deepest-inventory window has closed — but the second-tier window matters more than you think." Body data still holds. **Verdict: ready to publish Monday 5/4 with the 1-line freshen.**
- `2026-04-28-same-day-nba-playoff-tickets-6-hour-playbook.md` — **5 days old.** Frontmatter clean (slug `same-day-nba-playoff-tickets-6-hour-playbook`, excerpt 167 chars, `category: tips`). NBA Round 1 is in Game 5/6/7 territory now — the piece is series-agnostic and the "1pm vs 6:45pm" pricing-curve frame holds. **Verdict: ready to publish Tuesday 5/5 — high-relevance window for Round 1 elimination games this week.**
- `2026-04-29-world-cup-2026-general-sale-closing-april-2026.md` — **4 days old.** Frontmatter clean (slug ends with `april-2026` so the date frame is encoded; `category: news`, `featured: true`). **Open paragraph: "Today is April 29. The opener is June 11. That gives you 43 days." — 4 days stale today, 5 by Monday, 6 by Tuesday.** Recommended 1-line edit on publish day: change to "The opener is June 11. That gives you a few weeks. Here's the honest state of the world." (drop the date-anchored "Today is April 29 / 43 days" and let the news context carry the recency). Body data on Last-Minute Sales Phase + 65.5% FIFA-most-expensive ratio still holds. **Verdict: ready to publish Wednesday 5/6 with the 1-line freshen — same publish day as the 4/22 FIFA resale piece for cross-link energy.**
- `2026-04-30-stubhub-vs-vivid-seats-2026.md` — **3 days old.** Frontmatter clean (slug `stubhub-vs-vivid-seats-2026`, excerpt 153 chars, `category: comparisons`). Strong opener ("Run the same seat through StubHub and Vivid Seats and you will, more often than not, see the same final number") + the $185 Round-1-NBA-paired comp anchor. **Verdict: ready to publish Thursday 5/7 — same day as the 4/23 TM vs SG fees piece for the Q2 comparison-series capstone.**

### Cross-Agent output review

- **Social Agent:** Daily social outputs ran continuously through the week (`social-daily-2026-04-{27..05-02}.md` all present). Saturday's Hard Rock refresh + the SoFi correction got social handoffs as planned. **Outstanding (now fourth reporting week):** Instagram template rotation. Single-template fatigue is now structural. Lead Architect re-escalation request.
- **SEO Agent:** Day 17 of `seo-bundle-watch.md`. Three open content-agent obligations cleared today via the bundle reply file `seo-requests/2026-05-03-content-replies-bundle.md`: (1) blog-count reconciliation answered (19 posts in `blog.ts`, 20 sitemap blog-related URLs counting `/blog` index, Path 2 baseline acknowledged); (2) `/compare` keyword cluster status — both requested posts (4/21 + 4/23) drafted and queued, awaiting publish bottleneck clearing; (3) per-post OG images — scope corrected to 19 post pages, two-phase unblock proposed (Phase 1 site-default fallback ~30 min Lead Architect work, Phase 2 templated rendering). **Process flag from Day 16:** `worldcup.ts` Saturday edits shipped under marketing-output commit; refresh-checklist Step 5 added (explicit `Content refresh: <slug>` commit).
- **Email Agent:** Drip queue 98 across 28 eligible users (+3 in 24h, +8 in 48h). Cron Day 26 dead. **Highest-leverage NEW send when cron unblocks:** Apr 25 cohort × Email 2 pair (taranimeramaro + nmcnamee99 — both Day-7 silent post-event-end). Tuesday 5/5's welcome-flow piece (below) is the strongest *content* for any future welcome-flow newsletter sequence and the strongest manual-send candidate for the Apr 28–29 Day-4+ non-activator cohort.
- **CRO Agent:** 85 watchlist items, all `target_price = null` (Day 24). Same-day urgency UX failure mode confirmed for nmcnamee99 (closed) + goldy (Bilmuri rolled past last night). Post-signup UX audit (n=11 Day-4+ confirmations) Day 11 overdue. **The Tuesday 5/5 welcome-flow content piece doubles as the in-product onboarding flow content if/when CRO ships the welcome-modal redesign** — coordinate so the piece's screenshots and copy match whatever modal CRO builds.
- **Analytics Agent:** Headline today is the 0.286/day signup floor confirmed (collapsed from 0.57/day exactly as forecast). Live calendar window 6-of-7-days zero. **Wrigley/Bruno Mars/welcome-flow ranked priority order** maps directly to next week's Mon/Wed/Tue slots.
- **Paid Ads Agent:** Continue holding (Day 26). 0.286/day floor + 8-NEW-transitions-stacked-against-dead-cron makes paid spend a CAC multiplier on a sealed funnel. Resume trigger remains the cron-fix decision moment.

---

## Next Week's Blog Plan (May 4 – 10)

### Monday, May 4 — EMERGENCY OVERRIDE: Wrigley Field venue page creation + paired blog draft

**This is not a normal Monday big-idea slot.** Today's content-hook Hook 3 escalates `/venues/wrigley-field` to top content priority based on:
1. Day 10 of the 404 (`/venues/wrigley-field` reverified 404 today)
2. ajvanprooyen's 6 Cubs items (May 1–6 home stand) — Games 1+2 already past, **Games 4–6 May 4–6 are the live-page-execution window**
3. The long-form venue slug pattern (`/venues/scotiabank-arena` reverified 200 today) is the proven build template
4. Cubs-related search traffic has ~70 days/year of native peak, currently with no on-site landing target

**Action 1 (morning, before any blog draft work):** Create the Wrigley Field venue entry in `web/src/data/venues.ts`.

**File:** `web/src/data/venues.ts`
**Slug:** `wrigley-field`
**Construction template:** copy `scotiabank-arena` entry structure exactly. Do NOT invent new fields.
**Fields to populate:**
- `name`: "Wrigley Field"
- `city`: "Chicago, IL"
- `team`: "Chicago Cubs (MLB)"
- `capacity`: ~41,649 (verify against current Cubs media-guide capacity figure)
- `built`: 1914 (Federal League — second-oldest active MLB park after Fenway)
- `address`: "1060 W. Addison St., Chicago, IL 60613"
- `description`: rich paragraph covering Wrigley's 1914 build, ivy outfield walls (planted 1937), manual scoreboard (1937), day-game heritage (lights installed 1988 — first night game Aug 8, 1988), Lakeview/Wrigleyville neighborhood character, the rooftop seats across Sheffield + Waddell, the 2014–2019 1060 Project renovation, and the bleacher culture. Include a sentence mapping typical pricing ranges by section type and a CTA to `/compare` for cross-platform Cubs ticket comparison.
- `sections`: 6–9 entries covering Field Box (100s, $80–$300 typical) / Bullpen Box (premium-adjacent, $200–$600) / Bleachers (all sections, $25–$100, demand-priced day-of) / Upper Deck Box (300s, $40–$150) / Upper Deck Reserved (400s, $25–$80) / Terrace Reserved (200s, $50–$200) / Suite Level (private suites, $5K–$25K) / Standing Room (oversold day-of, $30–$100)
- `ticketTips`: 6–8 entries covering: the day-game-vs-night-game pricing split (day games typically 15–25% premium for tourists; night games premium for working locals), bleachers on rivalry games (Cardinals/Brewers 2x baseline; Dodgers/Yankees interleague 3x baseline), the Sheffield/Waddell rooftop alternative (separately ticketed), the Red Line Addison station vs driving (Cubs' resident-permit zones make street parking impractical), the May Chicago weather window (50–70°F typical, lake wind off Lake Michigan can drop perceived temp 10–15°F), the standing-room workaround when seated tiers sell out, the cross-platform comparison angle (Cubs' MLBPA + season-ticket-holder direct-resale flow vs StubHub/SeatGeek/Vivid Seats secondary, with TicketScan as the comparison surface), the post-on-sale 20–30% resale dip for non-marquee weekday games (typical Cubs 2024 dataset)
- `keywords`: 8–12 entries: "Wrigley Field tickets," "Cubs tickets," "Wrigley Field seating chart," "cheapest Cubs tickets," "Cubs vs Cardinals tickets," "Cubs day game vs night game tickets," "Wrigley Field bleachers tickets," "Wrigley rooftop seats," "Cubs schedule tickets," "Cubs home stand May 2026," "best seats Wrigley Field," "Wrigley Field standing room"
- `nearby`: brief mentions of the Lakeview neighborhood, the Cubby Bear / Murphy's Bleachers / Sluggers bar overflow, and the United Center driving distance (different team/different sport but Chicago sports-fan cross-reference)

**Verification:** `npx tsc --noEmit` — must pass before commit. Then commit explicitly with:
```
git add web/src/data/venues.ts
git commit -m "Content refresh: wrigley-field venue page creation"
git push origin main
```
**Wait for Vercel deploy (~2–3 min), then verify `/venues/wrigley-field` returns 200 via curl.** This is the new refresh-checklist Step 5 (per content-hook Hook 6) being adopted for the first time.

**Action 2 (after Wrigley page is live):** Write the paired Monday blog draft.

**Title:** "Cubs vs Reds at Wrigley: How Pricing Moves in the Final 48 Hours of a Mid-Week Series"
**Slug:** `cubs-vs-reds-wrigley-field-pricing-48-hours-may-2026`
**Category:** `news` (timeliness anchored to the May 4–6 series)
**Angle:** Tactical pricing piece keyed to the May 4–6 Cubs vs Reds Wrigley home stand. Cover: typical mid-week MLB pricing curve (deep discount 6–8 hours pre-first-pitch, flat through the early afternoon, dynamic-pricing creep starting ~3 hours out, last-90-minute compression on the cheapest sections), the Wrigley-specific bleacher-vs-grandstand split (bleachers move first because they're general-admission-feeling even though seated; grandstand 200s/300s hold value because of the obstructed-view risk), platform variance on the same Wrigley section (StubHub historically cheapest for Cubs day games, SeatGeek's "Deal Score" can mis-rank the obstructed-view sections, Vivid Seats' Cubs inventory tends to be thinner mid-week), the standing-room workaround when seated tiers sell out (Wrigley allows ~30K standing-room above capacity per the 2014 renovation), and the cross-platform alert workflow on TicketScan. Cite the new `/venues/wrigley-field` page directly with internal links throughout.
**Why now:** May 4–6 series is the live execution window for the new Wrigley page — every blog publish that drives traffic to the page during a live series is a multiplier on the page's first-week index signal.
**Target keywords:** "Cubs vs Reds tickets," "Wrigley Field standing room tickets," "cheapest Cubs tickets day of game," "Cubs ticket prices May 2026," "Wrigley Field bleacher seats price"
**Internal links:** `/venues/wrigley-field` (the new page — 3+ links), `/compare` (2+ links), `/watchlist` (1 link), `/tickets/chicago` (existing city fallback page — 1 link), the 4/28 same-day NBA playbook (when published — methodology cross-reference)
**Word count target:** 800–1100
**Frontmatter excerpt** (under 200 chars): "Wrigley pricing curves on a mid-week Cubs vs Reds series follow a predictable shape — here's the 48-hour playbook to find the cheapest seat without rolling the dice on standing room."

**File path:** `marketing-agents/output/content/2026-05-04-cubs-vs-reds-wrigley-field-pricing-48-hours-may-2026.md`

### Tuesday, May 5 — Welcome-flow / first-event-tracking guide (addresses Day-4+ non-activator pattern)

**Title:** "You Just Signed Up for TicketScan — Here's How to Get Your First Price Drop Alert in Five Minutes"
**Slug:** `first-price-drop-alert-five-minutes-ticketscan-walkthrough`
**Category:** `tips`
**Angle:** Direct response to today's analytics: 11 Day-4+ confirmed-silent users, 2/2 Day-4+ non-activators in the last 120 hours (lilianamasyrubi Day 5, zhili1208 Day 4), 85/85 watchlist items with `target_price = null` (Day 24). The product has an onboarding gap, and the content gap maps to it — there's no first-event-tracking walkthrough on the site, no "What happens after you sign up" piece, no "Why your watchlist needs at least one event" piece.

Cover (in order): step 1 — search for an event you actually care about (use a real example from this week's data, e.g., "Bruno Mars at Soldier Field May 16" or a Cubs home game); step 2 — add to watchlist (mention the heart icon, the success state, where it lands in the UI); step 3 — set a target price (the math: the average TicketScan-tracked event sees a price drop of 15–35% within 14 days of game/show, but alerts only fire if you've set a floor — this is the single most important step and the one users skip); step 4 — wait for the alert (set realistic expectations: most events get 1–3 price drops in the alert-eligible range, alerts arrive within an hour of the price hitting your floor, the email contains a one-click cross-platform comparison link); step 5 — when the alert arrives, what to actually do (check the comparison, decide between StubHub/SeatGeek/Ticketmaster/Vivid Seats based on fee math, complete the purchase). Close with: "If you signed up in the last week and haven't done step 1 yet, the rest of this email is what you're missing."

This piece doubles as:
- The in-product welcome-modal copy if/when CRO Agent ships the post-signup UX redesign
- The Email 1 (Day 3) drip content rewrite once the cron unblocks
- The newsletter signup-confirmation page primary CTA target

**Why now:** n=11 Day-4+ confirmed-silent cohort is the largest data point we have. 2/2 in the most recent 120h confirms the pattern is structural, not random.
**Target keywords:** "how to use TicketScan," "set up ticket price alerts," "track concert ticket prices," "ticket watchlist guide," "first price drop alert," "ticketscan walkthrough"
**Internal links:** `/dashboard` (the first step — search), `/watchlist` (step 2), `/compare` (step 5), `/how-it-works` (cross-reference), existing `/blog/best-time-to-buy-concert-tickets` (the methodology behind why target prices matter), the 4/16 best-comparison-sites piece (when published — step 5 follow-on reading)
**Word count target:** 800–1000 (intentionally tight — this is a tactical onboarding piece, not a deep dive)
**Frontmatter excerpt** (under 200 chars): "If you just signed up for TicketScan and you're not sure what to do first, this is the five-minute walkthrough — search, watchlist, target price, alert, action."

**File path:** `marketing-agents/output/content/2026-05-05-first-price-drop-alert-five-minutes-ticketscan-walkthrough.md`

### Wednesday, May 6 — Bruno Mars Romantic Tour venue-by-venue price comparison

**Title:** "Bruno Mars Romantic Tour 2026: Soldier Field vs Ohio Stadium vs MetLife — A Venue-by-Venue Price Guide"
**Slug:** `bruno-mars-romantic-tour-2026-venue-price-guide`
**Category:** `comparisons`
**Angle:** Real-signal-driven content. Today's analytics confirms Bruno Mars Romantic Tour as the second-most-tracked watchlist event (6 items / 3 watchers / 3 venues), behind only Harry Styles MSG (single power user). The next deadline is Soldier Field May 16 (+13 days from today). There's no current Bruno Mars page, no `/tickets/bruno-mars`, no concert-specific landing. Three different watchers signing up to track this tour is the strongest organic-signal content discovery we have on any non-WC tour.

Structure: open with the tour overview (10+ stadium dates, 3 of which are on TicketScan watchlists, the Romantic Tour name as a callback to Bruno's "24K Magic" / "Doo-Wops & Hooligans" / "An Evening with Silk Sonic" arc), then a venue-by-venue comparison table (Soldier Field May 16+17 ~62K cap, Ohio Stadium May 20 ~102K cap, MetLife Aug 21+22+25 ~82K cap with 3-night residency dynamics), platform variance on the same row across the three venues (real data — pull current pricing on a comparable lower-bowl seat from each platform for each venue, document the variance percentage; emphasize the MetLife 3-night residency typically sees 15–25% softer pricing on night 2/3 vs night 1 because the marquee fans front-load their purchases). Include the historical Bruno Mars resale curve (24K Magic 2017–2018 + 2022 Las Vegas residency comp data), the multi-night MetLife discount opportunity, and the Soldier Field May 16/17 paired discount (often Saturday cheaper than Friday because of weekday-vs-weekend Chicago concert dynamics). CTA: TicketScan's `/compare` page for live pricing on each Bruno Mars date, plus `/watchlist` to track price drops between now and the show.

**Why now:** Soldier Field May 16 is +13 days. Ohio Stadium May 20 is +17 days. The MetLife Aug 21–25 residency is 3.5 months out so still in the deep-inventory window. Publishing on Wednesday 5/6 gives the piece 10 days of indexing time before Soldier Field May 16 — peak organic signal.
**Target keywords:** "Bruno Mars Romantic Tour tickets," "Bruno Mars Soldier Field tickets," "Bruno Mars Ohio Stadium tickets," "Bruno Mars MetLife tickets," "cheapest Bruno Mars tickets 2026," "Bruno Mars tour 2026 tickets," "Bruno Mars residency MetLife"
**Internal links:** `/compare` (3+ links — the platform-comparison angle is the central CTA), `/watchlist` (2 links), `/world-cup-2026/metlife-stadium` (the freshly-refreshed MetLife venue page — concert overlap angle is novel), existing `/blog/best-time-to-buy-concert-tickets`, `/tickets/chicago` (Soldier Field is in Chicago), the 4/30 SH-vs-VS piece (when published — comparison-series cross-link), the 4/27 Summer Concert Tour piece (when published — Bruno Mars is one of the named summer tour anchors)
**Word count target:** 1000–1300
**Frontmatter excerpt** (under 200 chars): "Bruno Mars's Romantic Tour hits three different stadiums in the next four months — same artist, same setlist, very different prices per platform. Here's the venue-by-venue breakdown."

**File path:** `marketing-agents/output/content/2026-05-06-bruno-mars-romantic-tour-2026-venue-price-guide.md`

### Thursday, May 7 — All-In Pricing Era piece (SEO Ask 5 Post 3, due 5/11)

**Title:** "The All-In Pricing Era: What Changed in 2024, Why StubHub and Vivid Seats Switched, and Whether Tickets Actually Got Cheaper"
**Slug:** `all-in-pricing-tickets-2026-junk-fees-explained`
**Category:** `comparisons`
**Angle:** SEO Ask 5 Post 3, originally scheduled 2026-05-11, pulling forward 4 days to land in the Thursday comparison slot (same pattern as last week pulling SH-vs-VS forward 4 days from 5/04 to 4/30). Cover the FTC's October 2024 "Junk Fees Rule" effective May 12, 2025 (verify exact effective date against current FTC press releases), the ticketing industry's pre-emptive transition to all-in displayed pricing in late 2024 / early 2025 (StubHub Sept 2024, Vivid Seats June 2024, SeatGeek partial 2024 + full 2025, Ticketmaster's slower category-by-category rollout), the consumer-side question of whether prices actually got cheaper (short answer: the displayed price went up by the fee stack but transaction-end totals are within 1–3% of pre-rule averages — the rule was a transparency shift, not a price-suppression measure), the ongoing platform divergence on what counts as a "fee" vs a "service charge" vs a "delivery cost," and the practical buyer takeaway: now that displayed prices are all-in, **cross-platform comparison is more honest than it has ever been** — TicketScan's `/compare` is structurally well-positioned for the post-all-in-pricing era because the head-to-head numbers are now apples-to-apples.

Cite the prior comparison-series posts (4/16 best-comparison-sites overview, 4/23 TM vs SG fees, 4/30 SH vs VS) as the methodology baseline. This is the "policy context" capstone of the Q2 comparison series — completes the 4/16 → 4/23 → 4/30 → 5/07 four-piece arc that hub-and-spokes off `/compare`.

**Why now:** SEO Ask 5 Post 3 due 5/11; pulling forward maintains the Thursday-comparison-slot cadence and lets the piece publish before the original 5/11 SEO target. Also: the all-in pricing topic has been search-volume rising since the FTC announcement and is at a long-tail evergreen plateau now — perpetually publishable, but cleanest to ship while the comparison-series momentum is fresh.
**Target keywords:** "all-in pricing tickets," "FTC junk fees rule tickets," "StubHub all-in pricing," "Vivid Seats all-in pricing," "ticket fees 2026," "are tickets cheaper with all-in pricing," "junk fees ticket comparison"
**Internal links:** `/compare` (3+ links — the all-in pricing angle is the page's structural advantage), the 4/16 best-comparison-sites piece (when published), the 4/23 TM-vs-SG fees piece (when published), the 4/30 SH-vs-VS piece (when published), `/watchlist`, existing `/blog/avoid-ticket-scams`
**Word count target:** 1100–1300
**Frontmatter excerpt** (under 200 chars): "All-in pricing changed how every ticket platform displays its math — but the actual price you pay barely moved. Here's what happened, what didn't, and what to do with it."

**File path:** `marketing-agents/output/content/2026-05-07-all-in-pricing-tickets-2026-junk-fees-explained.md`

### Friday, May 8 — Page Refresh: AT&T Stadium

**Target:** AT&T Stadium (`att-stadium` in `web/src/data/worldcup.ts`)
**Why:** Hosts **9 World Cup matches — the highest match count in the tournament**. Includes one of the two **Quarter-Finals (QF-3 on July 10, 2026)**. Plus an R16 falling on July 4, 2026 (US Independence Day) sharing the demand-bump dynamic with Hard Rock's R16-4. AT&T Stadium is the largest-capacity NFL stadium (~105K with end-zone seating, ~80K base). Currently sparse data per the WC pattern (3 generic sections, ~4 keywords, 1-paragraph description).
**Scope:** Same template as Friday's SoFi and Saturday's Hard Rock work. Step 0 cross-check: `grep -n "venue: 'att-stadium'" web/src/data/worldcup.ts | grep "round: '"` to confirm exactly which 9 matches AT&T hosts before drafting (per refresh-checklist Step 0 added Saturday — the SoFi factual error this past Friday is exactly the error class this step prevents).
**Expected output:**
- Sections: 9–10 mapped to AT&T's actual layout (Field Suite Level / 100s sideline / 100s endline / Hall of Fame Suites / Star Suites / 200s mezzanine / 300s upper / 400s upper budget tier / Standing Room) and FIFA Cat 1–4 mapping
- Description: rich paragraph covering the 9-match volume framing, Quarter-Final QF-3 placement (verify via Step 0), Independence Day R16 (verify via Step 0), Cowboys regular usage (with specific sold-out resale comp e.g. Cowboys vs Eagles primetime), Country Music Awards usage, Canelo boxing megafight comp ($1K–$10K+ resale), the giant-screen landmark status, the AC + roof advantages over outdoor June/July venues like MetLife (relevant for fan-comfort messaging), Texas heat indoor-comfort framing, transit (DART Trinity Lakes / parking lots), and cross-platform comparison framing with TicketScan CTA
- TicketTips: 8 AT&T-specific (sideline 100s sightline best, endline avoidance, 300s mezz mid-range value, 400s upper budget tier, Star Suites premium upsell, transit/parking specifics, AC/heat comfort framing, post-on-sale resale dip pattern with Cowboys/Canelo comps)
- Keywords: 8–12 entries
**Backup target if AT&T is faster than expected:** Mercedes-Benz Stadium (Atlanta, hosts 8 matches incl. Round of 16 — currently sparse with 3 sections / 4 keywords).

**Refresh-checklist for the slot (per process improvement adopted Saturday):**
- Step 0 (NEW Sat 5/2): cross-check `worldCupMatches` array for AT&T's exact match assignments
- Step 1: edit description, sections, ticketTips, keywords on `att-stadium` entry in `worldcup.ts`
- Step 2: verify against the cross-check from Step 0 (no Third-Place / Final / Semi-Final misattribution)
- Step 3: `npx tsc --noEmit`
- Step 4: `git diff --stat -- web/src/data/worldcup.ts` to confirm scope is single-file
- Step 5 (NEW Sun 5/3): explicit commit `git commit -m "Content refresh: att-stadium"` BEFORE the daily marketing-output push runs

### Saturday, May 9 — Page Refresh: Mercedes-Benz Stadium (or AT&T backup)

**Target:** Mercedes-Benz Stadium (`mercedes-benz-stadium` in `web/src/data/worldcup.ts`) — assuming AT&T is the Friday slot.
**Why:** Hosts 8 WC matches incl. Round of 16. Sparse 3-section data, ~4 keywords, 1-sentence description. Currently the most sparse remaining WC USA-venue entry tied with NRG and Arrowhead. Atlanta is the largest WC media market in the Southeast US after Hard Rock's Florida market. Mercedes-Benz hosts Atlanta United (MLS) which gives a soccer-specific precedent comp (MLS Cup / Concacaf Champions League pricing data). Super Bowl LIII (Feb 2019, Patriots 13 Rams 3) at $2,500–$8,000+ resale = direct NFL-Final pricing comp. Falcons regular usage, Atlanta United pricing comp, and the retractable roof / transit walkability are the differentiated content surfaces.
**Scope:** Same template as Hard Rock and AT&T. Apply Step 0 cross-check first. Expand sections to 8–10, description to a rich paragraph, ticketTips to 6–8, keywords to 8–10. Apply refresh-checklist Steps 0–5 including the explicit commit step.
**Backup target if Mercedes-Benz is faster than expected:** Lumen Field, Seattle (hosts 6 WC matches, soccer-specific precedent via Sounders).

---

## Out-of-Schedule / Stretch Production Notes

- **Wrigley Field venue page creation** — Monday 5/4 morning, before any blog draft work. Emergency override per content-hook Hook 3.
- **All-In Pricing piece** (SEO Ask 5 Post 3) — Thursday 5/7 (4-day pull-forward from 5/11 due date), per Q2 comparison series cadence.
- **NHL Playoff Tickets 2026** — parked. Trigger: publish pipeline empty enough to justify backfilling from the 4/8 archive material.
- **Same-day-tickets post-mortem** (nmcnamee99 case study) — parked. Trigger: cron land + 4/28 piece publishes + sufficient distance from the Apr 25 cohort that we can write retrospectively.
- **Welcome-modal in-product copy** — coordination with CRO Agent if/when post-signup UX redesign ships. Tuesday 5/5 piece is the source.
- **Bruno Mars `/tickets/bruno-mars` aggregator page** — programmatic-expansion candidate for SEO Agent. The 5/6 blog piece will surface the demand; if SEO Agent confirms the keyword volume justifies it, an aggregator page could ship in a 5/15+ refresh slot.

---

## Immediate Actions (Priority Order)

1. **PUBLISH THE BACKLOG.** Eleven drafts ready to ship. Recommended cadence:
   - **Mon 5/4 AM:** publish 4/16 (best-comparison-sites — strongest evergreen, seeds `/compare` graph) + 4/14 (NBA playoffs — already freshened)
   - **Mon 5/4 evening:** publish 4/27 (Summer Concert Tour — with the 1-line freshen)
   - **Tue 5/5 AM:** publish 4/15 (WC seat assignments — already freshened) + 4/21 (compare-in-30s — `/compare` graph reinforcement)
   - **Tue 5/5 evening:** publish 4/28 (same-day NBA playbook — high-relevance for Round 1 elimination week)
   - **Wed 5/6 AM:** publish 4/22 (FIFA resale 22-of-33 data) + 4/29 (WC general sale closing — with the 1-line freshen)
   - **Thu 5/7 AM:** publish 4/23 (TM vs SG fees) + 4/30 (SH vs VS) — comparison series capstone day
   - **Thu/Fri:** new drafts from this week's plan (5/4, 5/5, 5/6 drafts) cycle in 24–48h after their generation
   - That clears the queue and keeps a 1–2 day rolling buffer.
2. **ARCHIVE the 4/8 draft.** Same call as last three weeks. Move to `marketing-agents/output/content/archived/` (folder doesn't exist yet — needs creation). **Lead Architect call.**
3. **COMMIT + PUSH the SEO Day-17 bundle.** ~50 schema improvements + auth-walled-route fixes + Organization `@id` + WebSite entity relocation + the Day-16 worldcup.ts edits already shipped under marketing-output commit. **Single Vercel deploy clears it.** Same flag as the past six Sundays.
4. **Lead Architect: build `/api/admin/cron-fire?job={drip|price}` test endpoint.** Today's analytics dashboard reiterates this is the highest-leverage cron-debug move (98 emails owed, 26 days dead, 8 NEW transitions stacked in 48h).
5. **Lead Architect: ship the Wrigley Field venue page** per Monday 5/4 emergency override. 3-game live-page-execution window remaining. Or assign to the daily Content Agent run if Lead Architect bandwidth is tight.
6. **CRO Agent: target-price field investigation.** 85/85 watchlist items still null on Day 24. The Tuesday 5/5 welcome-flow piece will surface this in the in-product flow analogue, but the actual UI fix is upstream.
7. **Instagram template rotation.** Fourth reporting week. Single-template fatigue is structural now. Lead Architect: 2–3 template variations.

## Cross-Agent Notes

- **SEO Agent:** Three open content-agent obligations cleared today via `seo-requests/2026-05-03-content-replies-bundle.md`. Refresh-checklist Step 5 adopted starting Friday 5/8 (explicit `Content refresh: <slug>` commit before marketing-output push). Wrigley Field page creation Monday 5/4 will commit under the same message style. Ask 1 venue-openers due 5/01 still owed — will batch into the 5/04 week's refresh cycle (AT&T Friday + Mercedes-Benz Saturday will get refreshed openers as part of the description-rewrite scope). Ask 3 WC country pages due 5/10 — outline below in the next-week SEO handoff. All-In Pricing piece (Ask 5 Post 3) pulled forward 4 days from 5/11 to Thursday 5/7.
- **Social Agent:** Monday's Wrigley page creation + paired blog draft are the highest-leverage social posting opportunity (Cubs fans are a Chicago-concentrated, locally-organic audience and the May 4–6 Cubs vs Reds series gives 3 native posting moments). Tuesday's welcome-flow piece is the Twitter/X "did you sign up but never use it?" reply-engagement piece. Wednesday's Bruno Mars piece is the Soldier-Field-specific local Chicago-concert post. Thursday's all-in-pricing piece is the high-share-rate explainer. Continue NOT publicly referencing the Day-4+ non-activator pattern, the cron failure, the Cubs data-loss sequence — internal product-failure signals only.
- **Email Agent:** The Tuesday 5/5 welcome-flow content is the single highest-leverage manual-send candidate for the Apr 25 + Apr 28–29 cohorts (Email 1 + Email 2 territory). Once cron lands, this piece becomes the new Email 1 (Day 3) drip content rewrite. The drip queue's 98-emails-owed backlog is the cron-debug conversation, not a content one.
- **CRO Agent:** Tuesday 5/5 welcome-flow piece doubles as the in-product onboarding copy for the post-signup UX redesign that's Day 11 overdue. Coordinate so the piece's screenshots and copy match whatever modal CRO ships. Target-price field investigation still owed — 85/85 null on Day 24.
- **Analytics Agent:** Wrigley/Bruno Mars/welcome-flow blog priority order maps directly to today's analytics handoff: (1) Wrigley = the Day 10 content gap + 3-game window, (2) welcome-flow = the n=11 non-activator cohort + 2/2 Day-4+ in last 120h, (3) Bruno Mars = the strongest organic watchlist signal at 3 watchers / 6 items / 3 venues. The 4-blog-draft cadence respects the Day 26 publish bottleneck — net-net 7-day output target this week is 4 new drafts + 11 backlog publishes = 15 content surfaces shipping, the largest single-week content output of the program if executed.
- **Paid Ads Agent:** Continue holding (Day 26). Resume trigger remains cron-fix decision moment. Today's all-in-pricing-piece-pulled-forward gives a future paid-search landing-page candidate on "all-in pricing tickets" + "FTC junk fees rule" queries, pair with the SH-vs-VS + TM-vs-SG pieces in the same paid-test cluster once conversion tracking is live.

## Long-Running SEO Asks Status (updated)

| Ask | Filed | Due | Status as of 5/3 |
|-----|-------|-----|-------------------|
| Ask 1: Venue page openers | 4/20 | 5/01 | **5 days overdue.** Will batch into AT&T (Fri 5/8) + Mercedes-Benz (Sat 5/9) refresh descriptions as opener-rewrite scope. |
| Ask 2: FAQ audit | 4/20 | 4/27 | **Shipped Mon 4/27** ✓ |
| Ask 3: World Cup country pages | 4/20 | 5/10 | On track. Outline in this week's SEO handoff (filed separately). |
| Ask 4: Best-time-to-buy copy | 4/20 | TBD | **Blocked** on backend price-history endpoint. Day 26 blocker — same gate as price tracking cron. |
| Ask 5 Post 1: TM vs SG fees | 4/20 | 4/27 | **Drafted 4/23, queued unpublished, awaiting backlog clear** (recommended Thu 5/7 publish per cadence above) |
| Ask 5 Post 2: SH vs VS | 4/20 | 5/04 | **Drafted 4/30 (4 days early), queued unpublished** (recommended Thu 5/7 publish per cadence above) |
| Ask 5 Post 3: All-In Pricing | 4/20 | 5/11 | **Pulling forward 4 days to Thu 5/7** per Q2 comparison series cadence |
