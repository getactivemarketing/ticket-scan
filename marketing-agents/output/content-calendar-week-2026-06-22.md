# Content Calendar — Week of June 22 – 28, 2026

**Strategist:** Content Agent (Agent 1) — Weekly Planning Session
**Session date:** 2026-06-22 (Mon — WC live, Day 12; group stage wraps this week, Round of 32 opens at the weekend)
**Covers:** Monday 6/22 → Sunday 6/28
**Continuity note:** Agent 1's weekly session **did not run on 6/15** — the last calendar on file is the 6/8 plan. This plan bridges two weeks: it reconciles what actually shipped 6/8–6/21 against that plan, then sets this week.

This is the **knockout-transition week.** The group stage is the most-searched-but-fastest-decaying content; the value center of gravity now shifts to **Round-of-32 buy-or-wait** and **live matchday price reporting.** Plan front-loads the knockout pivot and keeps the remaining venue work (Mexico) on the back half.

---

## Reconciliation: what the 6/8 plan promised vs. what shipped (6/8–6/21)

Verified against `git log`, not assumed:

- ✅ **Live-tournament de-stale shipped.** `c9c1429` (Fri 6/19) rewrote the flagship `world-cup-2026-ticket-guide` from pre-sale/lottery framing to live-tournament reality (FIFA Resale 30% fee math, secondary softening press-attributed, corrected MetLife as Final host). **This is exactly the right move now that the tournament is live** — and the first substantive blog.ts edit since the cluster build. Good discipline: refresh-log + content-hook updated alongside.
- ❌ **Mexico venue refreshes did NOT ship.** The 6/8 plan scheduled `estadio-azteca` (Fri 6/12) and `estadio-akron` (Sat 6/13). Neither commit exists. Refreshed venues stop at **11 US + bmo-field (Canada).** Still unrefreshed: **bc-place (Canada), estadio-azteca, estadio-akron, estadio-bbva (Mexico).** Carried forward to this week.
- ⚠️ **New-publish velocity: still zero — Day 76.** Last *new* post remains `c0dcf5a` (2026-04-07). `blog.ts` holds **21 live entries.** The 6/19 commit was a *refresh of an existing entry*, not a new publication — the draft backlog is unrealized. (Status only; the shipping-bandwidth constraint is the CRO/shipping standing note's to own, not re-escalated here.)
- ⚠️ **The April WC drafts and date-anchored June drafts are now terminal.** Kickoff was 6/11; any "buy now or wait *before* the tournament" framing is dead. These should be archived, not carried as live priorities (see performance report).

---

## Environment check (what's true this morning)

- **API is up.** Public events endpoint returned `200` in ~1.2s. Healthy, not timing out.
- **Live funnel pulled fresh today** (admin key from `run-daily.sh`, read-only GET — first live pull in several weeks, not carried-forward):
  - **126 users** (`usersThisWeek: 7`, `usersToday: 1`) — up from 93 on 6/1. **Acquisition is alive and growing through the tournament window.**
  - **156 watchlist items** (up from 115) — adds are healthy.
  - **0 active alerts, 0 alerts ever triggered** — `target_price` arming is still dead in production. The watchlist UI still ships no target-price input; 156 items, none armed. Confirmed live, not inferred.
  - **3 subscribers** (unchanged since launch — all pre-launch/test rows). Newsletter capture is still returning **zero organic signups.** The 6/7 working-tree form fix (blog/footer forms) has **not converted a single email** — consistent with it not having deployed to production yet (`Footer.tsx` still shows as modified-uncommitted in the working tree).
  - **0 favorites.**
  - **Read:** acquisition works; *every* downstream loop (alerts, drip, newsletter) is still sealed by upstream UI/cron/capture defects the content layer cannot touch. No conversion or savings percentages reported — **no analytics is wired (GSC/GA4 still absent), and the price feed returns null.**
- **`worldcup.ts` is still stale (pre-draw placeholders).** Match counts/groups/dates are wrong vs real FIFA. **WC pages stay on evergreen venue facts + Category floor guidance only — no fixture specifics, no stale match-ups asserted.** This applies doubly now that real knockout brackets are forming and the file's placeholders will contradict reality.
- **Price discipline:** every dollar figure in drafts/hooks comes from attributed third-party press — never our null feed. Standing rule.
- **Style watch:** em-dash density in excerpts/leads has been an AI-tell across the WC cluster. Continue varying — period or colon where the dash has gone reflexive. (This file is itself a place to practice it.)

---

## This week's content items

### Priority 1 — The knockout pivot (drafts; publish-gated)

The group stage ends this week. The single highest-relevance question shifts from "is the World Cup worth it" to **"the knockouts are set — buy my team's Round-of-32 seat now, or wait for the bracket to clarify?"**

| Day | Slot | Working title / slug | Category | Hub links | Notes |
|-----|------|----------------------|----------|-----------|-------|
| **Mon 6/22** | Big-idea | "Group Stage Is Ending. Here's the Round-of-32 Ticket Math No One Tells You." — slug `world-cup-2026-round-of-32-buy-or-wait` | guides | 6/19 refreshed flagship, `/world-cup-2026`, `/compare` | Compose today. The structural pivot piece: how resale behaves *between* group stage and knockouts (group-stage floors collapse on elimination; surviving-team knockout seats firm up fast). FIFA Resale 30%-fee math vs secondary. All figures press-attributed. **Keep fixture specifics out** — frame by *round*, not match-up. Continues the Monday flagship cadence. |
| Tue 6/24 | Tactical | "How to Buy a Knockout-Round Ticket When You Don't Know Who's Playing Yet" — slug `world-cup-2026-knockout-tickets-before-bracket-set` | tips | Mon flagship, `/compare`, `/watchlist`, this week's lead magnet | 700–900w. The genuine consumer problem of the week: bracket isn't final, but resale is already moving. Covers conditional/by-venue buying, FIFA-resale vs secondary timing, mobile-transfer gotchas. On-site companion to the lead magnet. **Direct CRO support.** |
| Thu 6/26 | Comparison | "Group-Stage Bargains vs. Knockout Premiums: Where the World Cup Resale Market Is Right Now" — slug `world-cup-2026-group-vs-knockout-price-check` | comparisons | Mon flagship, `/world-cup-2026`, `/compare` | Compose Thu. Reported resale bands only, attributed. Snapshot of how the market has repriced ~2 weeks in. **No feed numbers, no stale-`worldcup.ts` fixture specifics.** |

**Verification rule (carried):** before drafting any timely piece, confirm the actual tournament state that morning — group standings and which knockout slots are set move daily. The *angle* (consumer-advocate buy/wait framing) is the durable asset; the specific bracket state is replaceable and must be re-checked, never carried from a prior draft.

### Priority 2 — Page refreshes (Fri–Sat) — finish the Mexico venues (overdue from 6/8)

| Slot | Target | Scope |
|------|--------|-------|
| Fri 6/26 | `worldcup-stadiums/estadio-azteca` (Mexico City) | **Overdue from 6/12.** Step 0: grep `worldcup.ts` before drafting; treat its counts as wrong until confirmed; **do not assert fixtures the file gets wrong — flag instead.** Evergreen angles only: the most storied WC stadium in history (1970/1986 finals; the only venue ever to host a third tournament), altitude (~2,240m) as a real play-conditions angle, Metro Line 2 access, capacity scale. Add a 4–6 item FAQ block (parking, transit, best seats, cheapest get-in, altitude/weather) to unlock `FAQPage` schema. |
| Sat 6/27 | `worldcup-stadiums/estadio-akron` (Guadalajara) | **Overdue from 6/13.** Same Step-0 grep gate, same fixture-specifics embargo. Evergreen: Chivas home ground, the "volcano" bowl design/sightlines, Guadalajara as a second-city host, honest transit/parking. Same FAQ-block requirement. |

**Refresh checklist (canonical Forward Fix v2):** Step 1 — file `seo-requests/2026-06-26-content-data-touch.md` (Azteca) / `2026-06-27-content-data-touch.md` (Akron) as the **literal first artifact** of the day's run, ≥90 min before the absorbing commit. Step 0 — re-verify match data against `worldcup.ts`; flag, don't assert. Step 2 — edit description/sections/ticketTips/keywords + FAQ block. Step 3 — cross-check vs Step 0. Step 4 — `npx tsc --noEmit`. Step 5 — `git diff --stat -- web/src/data/worldcup.ts` (single-file scope). Step 6 — commit `Content refresh: estadio-azteca` / `Content refresh: estadio-akron`. Remaining after this pair: `estadio-bbva` (Monterrey) + `bc-place` (Vancouver) → next week.

### Priority 3 — Sunday audit + next-week planning
Sunday 6/28 — produce the **Week of June 29 – July 5 plan.** By then the Round of 32 is underway. Center of gravity: **live knockout matchday price reporting + Round-of-16 previews.** Anticipated refresh pair: `estadio-bbva` + `bc-place` (closes the 16-venue arc). Re-confirm the newsletter form deploy status — it remains the precondition for the whole lead-magnet program returning email.

### Priority 4 — Lead magnet (see separate file)
**"The Knockout-Rounds Ticket Cheat Sheet: Buy / Wait Quick-Reference for Every Stage Through the Final."** Full content in `lead-magnet-knockout-rounds-ticket-cheat-sheet.md`. Format rotation: …5/25 comparison chart → 6/1 price-map one-pager → 6/8 checklist → **6/22 cheat sheet (one-pager).** Chosen because a single-page buy/wait quick-reference stays useful for *every remaining round* (R32 → R16 → QF → SF → Final, through July 19) — it's the on-site companion to Tuesday's knockout tactical blog and the highest-reuse asset for the back half of the tournament.

> **⚠️ CAPTURE-SURFACE STATUS (do not re-flag as a *new* bug).** The homepage-only newsletter-form defect was fixed in the working tree 6/7 (blog/footer forms). **But subscribers are still 3 and `Footer.tsx` still shows uncommitted** — the fix has almost certainly not deployed to production. Build the asset (correct and cheap); the gate that actually opens it is **commit + deploy of the form fix**, which is a shipping task, not a content task. Flag, don't own.

---

## Keyword opportunity list → SEO Agent (Agent 2)
Primary targets this week (knockout-transition intent):
- `world cup 2026 round of 32 tickets`
- `world cup 2026 knockout tickets buy now or wait`
- `are world cup 2026 tickets cheaper after group stage`
- `world cup 2026 ticket prices late june`
- `how to buy world cup knockout tickets before bracket set` (Tue tactical piece)
- `world cup 2026 resale prices` (Thu comparison piece)

Strong internal-link cluster: this week's R32 flagship ↔ the 6/19 refreshed flagship (`world-cup-2026-ticket-guide`) ↔ the 6/1 venue-ranking flagship (`all-11-us-world-cup-2026-venues-ranked-cheapest-get-in`) ↔ `/world-cup-2026`.

## Social-ready snippets → Social Agent (Agent 3)
From this week's flagship: **"When a team is eliminated, its fans' tickets flood resale at once — group-stage floors collapse the day standings lock. The opposite happens to surviving teams' knockout seats. Same week, two directions."** Facts/dynamics only; any price figure must be press-attributed. **No invented price arcs, no fabricated "Nth call inside band" streaks** (standing discipline — the feed returns null).

## Lead magnet + subject lines → Email Agent (Agent 5)
- Lead magnet: the Knockout-Rounds Cheat Sheet (this week's asset) for the nurture sequence.
- Subject candidates: "The bracket isn't set — but the prices already moved." / "Buy your knockout seat now, or wait? One page, every round."
- **Do not blind-trigger drip-run** (standing memory: drip has delivered 0 emails ever, 20+ users overdue — a blind trigger risks blasting real inboxes). Cron path is a separate fix.

---

## Backlog hygiene
The April WC drafts (4/15, 4/22, 4/29) and any pre-kickoff "buy or wait before the tournament" June drafts are **terminal** — kickoff was 6/11. **Move them to `archived/` and stop listing them as live priorities;** carrying dead drafts inflates the backlog and every weekly status with no upside. The two April playoff guides (4/08, 4/14) should also archive. If a publish window opens, the only pieces worth shipping are the *live-relevant* ones: this week's R32 flagship and the 6/19 refreshed flagship's companion pieces.
