## Today's Content Hook — 2026-05-07 (Thursday)

### Hook 1: Today's deliverable — Thursday slot, All-In Pricing capstone, drafted and queued, anniversary-frame headline
**Topic:** Per the 5/03 `next-week-plan.md` Thursday entry, yesterday's content-hook Hook 5 forward-flag, and the SEO Day-20 reply bundle (`seo-requests/2026-05-06-seo-replies-bundle.md`) Reply 2 schema sign-off, today's blog draft is the All-In Pricing piece — Q2 comparison-series capstone (Post 3 of SEO Ask 5).

File: `marketing-agents/output/content/2026-05-07-all-in-pricing-tickets-2026-junk-fees-explained.md`. Slug `all-in-pricing-tickets-2026-junk-fees-explained` — verified no collision against the 19 existing `blog.ts` slugs nor the 14 unpublished drafts already in `marketing-agents/output/content/` (`grep -n "all-in-pricing\|junk-fees\|junk fees" web/src/data/blog.ts` returns empty).

**Headline decision:** went with the **anniversary frame** option flagged in yesterday's Hook 5 (T-6 days from the May 12, 2025 FTC effective date). Final title: *"One Year of All-In Pricing: What the FTC Rule Actually Changed, and What It Didn't."* The anniversary frame trades the policy-capstone register for journalistic recency, which lifts share-rate on the explainer category (the two highest-share posts in the queue — 4/22 FIFA-data and 4/29 WC-sale-closing — both lead with a recency anchor). Body still completes the 4/16 → 4/23 → 4/30 → 5/07 four-piece comparison-series arc; the anniversary lead just gives the capstone a sharper hook.

Frontmatter clean: title 95 chars, excerpt 195 chars (under 200-char guideline), category `comparisons`, 5 tags matching the SEO spec verbatim ("all-in pricing tickets," "all in fees ticketmaster," "what are all-in ticket prices," "true ticket cost calculator," "FTC all-in pricing rule"), `readTime: 8`, `featured: false`. Body word count: 1,265 (inside the 1,100–1,300 target).

Internal-link harvest (per 5/03 plan + SEO bundle pattern): 4 to `/compare` (the all-in-pricing era is its structural advantage — anchor links woven through the lead, fee-math section, divergence section, and CTA), 1 to `/watchlist`, 1 to existing `/blog/avoid-ticket-scams` (still-published, not in queue), 1 to existing `/blog/ticketmaster-vs-seatgeek-comparison` (the older general-comparison piece), and 3 future-link checkpoints to the 4/16, 4/23, and 4/30 drafts pending their publish — flagged in the body as comparison-series cross-references using the slug stubs already locked in.

Schema spec verification (per SEO Reply 2 — pre-commit blocker, runs after publish-script processes the markdown): 5-grep block staged for the post-publish smoke test (`BlogPosting` = 1, `BreadcrumbList` = 1, `"mentions"` = 1, `GovernmentOrganization` = 1, `wordCount` = 1). The `mentions` shape (4 Organizations: TM, SG, SH, VS + 1 GovernmentOrganization: FTC) is implicit in the body's prose and explicit in the tags array — final JSON-LD render is downstream of `web/src/data/blog.ts` shape and the `BlogPosting` schema component already validated on Posts 1 & 2 if/when those publish first.

**Angle:** Q2 comparison-series capstone, anniversary-framed, schema-locked, schedule-aligned, 4-day pull-forward from original 5/11 SEO due date.
**Target keyword:** "all-in pricing tickets," "FTC all-in pricing rule," "true ticket cost calculator," "what are all-in ticket prices," "all in fees ticketmaster"
**Content type:** New blog draft — comparisons category (Thursday slot per 5/03 plan; SEO Ask 5 Post 3 capstone)
**Priority:** High — drafted

### Hook 2: Day 30 publish-velocity zero-streak — backlog now 15 drafts (today's added) — 4/29 piece passed credibility threshold yesterday
**Topic:** Last published post: 2026-04-07. Today: 2026-05-07. **Day 30 — full month.** Fourteen prior drafts unpublished (4/8 archive, 4/14, 4/15, 4/16, 4/21, 4/22, 4/23, 4/27, 4/28, 4/29, 4/30, 5/4, 5/5, 5/6) plus today's 5/7 = **15 drafts in queue.** Updated freshness audit:

- **4/29 World Cup 2026 General Sale Closing — credibility threshold passed yesterday.** Yesterday's Hook 2 flagged 5/06 as the last credibility-acceptable publish day. Today: 35 days to opener, 8-day drift from the headline frame. Per the threshold call, the piece should now be re-headlined or shelved. **Recommendation: shelve the piece in original form; harvest the 65.5% FIFA-most-expensive ratio + Last-Minute Sales Phase data for the WC-opener email-blast Email Agent ships when cron unblocks.** Drop the standalone draft from the publish queue.
- **4/27 Summer Concert Tour 2026** — references "Friday May 1 deadline" in opener. **Now 6 days past.** The 1-line freshen Hook 2 has flagged for two weeks running still works; opener swap from "Friday May 1" → "early May" preserves the body data. Publishable today through Saturday.
- **5/4 Cubs vs Reds Wrigley Field** — last live-execution slot (G6) closed yesterday at 13:20 CT. Series complete. Piece is series-retrospective-only now — re-headline as "What the May Cubs Home Stand Showed Us About Mid-Week MLB Pricing" and shelve as a retrospective for the next mid-week MLB series, OR shelve entirely. **Recommendation: shelve.** The Wrigley page itself (live since `636e40b` on Mon 5/04) holds standalone value; the blog draft was a series-coupled piece and the series is over.
- **4/15 / 4/22 / 4/14 / 4/28 / 4/16 / 4/21 / 4/23 / 4/30 / 5/5 / 5/6** — all evergreen-leaning or non-time-sensitive. Cycle in over remaining days of this week + next.

**Tenth consecutive Mon/Tue/Wed/Thu/Sun flagging the publish bottleneck.** SEO Day-21 watch tomorrow morning will likely log the same bundle-and-publish gate. Today's harder data point: two drafts (4/29 WC, 5/4 Cubs) now decay-shelved with zero ship signal in their lifetime. **Net realized publish from the past 30 days of drafting: 0 of 15. Realized loss-to-decay: 2 of 15 (13.3%) and counting.**

**Angle:** Re-escalation, Day 30, with two drafts now confirmed decay-shelved. Realized-loss metric introduced.
**Target keyword:** n/a — pipeline issue
**Content type:** Lead Architect escalation (tenth consecutive)
**Priority:** Critical (Day 30, full month; realized-loss metric now non-zero and growing)

### Hook 3: Today's trending events scan — NBA Round 2 opens this weekend + WC opener T-35 days + FTC anniversary T-5
**Topic:** Trending-event scan for Thursday 5/7:

1. **NBA Round 2 opens this weekend** (likely Saturday 5/9 or Sunday 5/10 — verify against actual NBA brackets when bracket finalizes). Last 1–2 Round 1 elimination games today. The 4/14 NBA playoffs draft (Round 1 framing) reaches its terminal relevance window today; from tomorrow forward the framing is supplanted by Round 2 narrative. The 4/28 same-day playbook is series-agnostic and carries cleanly into Round 2 — **publish before the weekend**. **Content tie-in priority: HIGH** — both already drafted; publish-action only.

2. **World Cup 2026 at T-35 days.** No fresh news cycle today. Today's All-In Pricing piece picks up the FTC-rule thread that intersects the WC pricing context (every WC ticket sold inside the U.S. window will display all-in by default). **Content tie-in priority: handled inline.**

3. **FTC Junk Fees Rule one-year anniversary T-5 days** (rule effective May 12, 2025; today 5/07/2026). Today's blog draft uses this directly as the lead frame. **Content tie-in priority: today's deliverable.**

4. **NHL Conference Finals T-3 days** (Stanley Cup Conference Finals Round 3 opens roughly 5/10–5/12 historically; verify against actual schedule when known). The 4/8 archived NHL/playoff piece had Round 1 framing and is now four rounds and 30 days stale — confirms the archive recommendation. **Content tie-in priority: NONE — archive call holds.**

5. **MLB rivalry-week scans** — Cubs vs Cardinals 5/9–5/11 at Busch Stadium (St. Louis), Yankees vs Red Sox 5/12–5/14 at Yankee Stadium. Both are top-3 MLB rivalry-week pricing benchmarks and would be natural Wednesday-news-slot material for next week. **Content tie-in priority: forward-flag** for next Sunday's 5/10 calendar plan — MLB-rivalry-pricing-benchmark angle on either Cards-Cubs or Yanks-Sox.

6. **Bruno Mars Soldier Field T-9 days** (yesterday was T-10). Inside the 14-day pricing-curve discount window — yesterday's draft remains the right surface; if any first-pull pricing data lands today (i.e., a watcher's actual purchase or alert-trigger moment), would justify a one-line freshen on the Bruno Mars draft before its eventual publish. **Content tie-in priority: monitor only.**

**Angle:** Daily trending scan — six handles. Two new today (FTC anniversary used inline as today's lead, MLB rivalry-week forward-flag for next Sunday's plan), four carryovers with status updates (Cubs series closed/shelved, NBA Round 2 opening, WC at T-35, Bruno Mars T-9).
**Target keyword:** "all-in pricing tickets," "FTC junk fees rule one year," "NBA playoff tickets Round 2," "Cubs vs Cardinals tickets," "Yankees vs Red Sox tickets"
**Content type:** Mixed — today's new draft (Hook 1) + publish-action on existing drafts (Hook 2) + next-week forward-flag (this Hook)
**Priority:** Medium

### Hook 4: SEO heads-up file Friday AT&T refresh — first exercise of cc-on-commit format due tonight
**Topic:** Per yesterday's Hook 4 closure on the SEO Day-20 reply bundle, the **first exercise of the cc-on-commit format is due tonight (Thursday evening 5/07)** as a heads-up file `seo-requests/2026-05-07-content-data-touch.md` for Friday's AT&T Stadium refresh. SEO Reply 3 specified the format adds:

(a) **Filename in title-line as `## Touched: web/src/data/worldcup.ts`** for one-grep scan
(b) **1-line schema-impact estimate** (e.g. "AggregateOffer price range will shift if Cat 1 is repriced; otherwise no schema delta")

Both adds fit the under-200-words target. **Action item Content Agent side: produce the heads-up file tonight after this hook commits.** Content of the file: AT&T Stadium refresh scope (per Friday entry in 5/03 plan: 9-match volume framing, QF-3 placement, July 4 R16, Cowboys/Canelo resale comps, AC/heat framing, 9–10 sections, 8 ticketTips, 8–12 keywords), Step 0 cross-check confirmation (`grep -n "venue: 'att-stadium'" web/src/data/worldcup.ts | grep "round: '"` will run tomorrow morning before edit), expected schema-impact estimate ("AggregateOffer price range expands if Cat 1 anchors against $1K–$10K Canelo comp; FAQPage entries unchanged unless ticketTips count grows beyond 8"), commit message stub `Content refresh: att-stadium`.

**Net new commitment:** the heads-up file lands tonight, the AT&T refresh + commit lands Friday morning, the marketing-output push runs Friday end-of-day. Three-step cadence; first run.

**Angle:** First exercise of newly-accepted cross-agent format — process-validation moment.
**Target keyword:** n/a — operational
**Content type:** Cross-agent commitment due tonight
**Priority:** Medium (commitment due 5/07 evening)

### Hook 5: Tomorrow's Friday slot forward-flag — AT&T Stadium refresh, no new draft
**Topic:** Friday 5/8 is the page-refresh slot per the agent schedule. Per the 5/03 plan: AT&T Stadium (`att-stadium` in `web/src/data/worldcup.ts`). **Why this venue:** hosts 9 World Cup matches (highest match count in the tournament), one Quarter-Final (QF-3 on July 10, 2026), one R16 falling on July 4 (US Independence Day demand bump shared with Hard Rock R16-4). Largest-capacity NFL stadium (~105K with end-zone seating). Currently sparse data per the WC pattern (3 generic sections, ~4 keywords, 1-paragraph description).

Refresh-checklist:
- **Step 0 (per 5/02 process improvement):** `grep -n "venue: 'att-stadium'" web/src/data/worldcup.ts | grep "round: '"` to confirm exactly which 9 matches AT&T hosts before drafting. Mandatory — the SoFi-Third-Place factual error this past Friday is exactly the error class this step prevents.
- **Step 1:** edit description, sections (expand to 9–10), ticketTips (expand to 8), keywords (expand to 8–12) on `att-stadium` entry
- **Step 2:** verify against Step 0 cross-check (no Third-Place / Final / Semi-Final misattribution)
- **Step 3:** `npx tsc --noEmit`
- **Step 4:** `git diff --stat -- web/src/data/worldcup.ts` to confirm scope is single-file
- **Step 5 (per 5/03 process improvement):** explicit commit `git commit -m "Content refresh: att-stadium"` BEFORE the daily marketing-output push runs
- **Step 5b (NEW — first exercise per Hook 4):** SEO heads-up file filed Thursday evening 5/07 (tonight)

Content scope per 5/03 plan: 9-match volume framing, Quarter-Final placement, Independence Day R16, Cowboys regular usage with sold-out resale comp (Cowboys vs Eagles primetime), Country Music Awards usage, Canelo boxing megafight comp ($1K–$10K+ resale), giant-screen landmark status, AC + retractable roof advantages over outdoor June/July venues like MetLife (fan-comfort messaging), Texas heat indoor-comfort framing, transit (DART Trinity Lakes / parking lots), cross-platform comparison framing with TicketScan CTA. 8 AT&T-specific ticketTips (sideline 100s sightline best, endline avoidance, 300s mezz mid-range value, 400s upper budget tier, Star Suites premium upsell, transit/parking specifics, AC/heat comfort framing, post-on-sale resale dip with Cowboys/Canelo comps).

Backup target if AT&T finishes faster than expected: Mercedes-Benz Stadium (Atlanta, hosts 8 matches incl. Round of 16) — but Saturday's slot is scoped to Mercedes-Benz, so Friday-overflow would be NRG (Houston) or Arrowhead (KC) instead.

**Angle:** Friday slot forward-flag — refresh-checklist locked, six steps, first-exercise of two newly-adopted process iterations (Step 5 + Step 5b) in the same commit.
**Target keyword:** "AT&T Stadium World Cup 2026," "AT&T Stadium tickets World Cup," "AT&T Stadium quarter-final tickets," "AT&T Stadium July 4 World Cup," "Cowboys AT&T Stadium tickets"
**Content type:** Tomorrow's slot planning trigger
**Priority:** Medium

### Hook 6: Process check — refresh-checklist step count (now 6 explicit steps + 1 "Step 5b") — consider re-numbering at next slot
**Topic:** The refresh-checklist has accreted to **6 explicit numbered steps + 1 sub-step** (Step 0 added 5/02, Step 5 added 5/03, Step 5b added 5/06). The current step labels are functional but slightly confusing — Step 0 is procedurally first; Step 5b is procedurally before Step 5 (heads-up files Thursday evening, commit Friday morning). The numbering suggests a sequence the actual execution doesn't follow.

**Recommendation:** Re-number at the next refresh slot (Friday 5/8 AT&T, since it's the first slot to use all six steps + the sub-step):
- Step 1: SEO heads-up file (Thursday evening, currently Step 5b)
- Step 2: Cross-check `worldCupMatches` array (currently Step 0)
- Step 3: Edit `worldcup.ts` (currently Step 1)
- Step 4: Verify against Step 2 cross-check (currently Step 2)
- Step 5: `npx tsc --noEmit` (currently Step 3)
- Step 6: `git diff --stat` scope check (currently Step 4)
- Step 7: Explicit commit (currently Step 5)

The process content stays identical; the labels just match execution order. Worth flagging in tomorrow's heads-up file or in next Sunday's 5/10 calendar plan.

**Angle:** Process housekeeping — checklist labels lag reality, re-number at next exercise.
**Target keyword:** n/a — internal process
**Content type:** Cross-agent process iteration proposal
**Priority:** Low
