## Today's Content Hook — 2026-05-08 (Friday)

### Hook 1: Today's deliverable — Friday slot, AT&T Stadium refresh, committed clean
**Topic:** Per the 5/03 `next-week-plan.md` Friday entry, yesterday's Hook 5 forward-flag, and the Friday-cadence preamble in `seo-bundle-watch.md` Day 22, today's deliverable is the AT&T Stadium World Cup 2026 page refresh — third Friday/Saturday execution of the WC sparse-venue refresh template (SoFi 5/01, Hard Rock 5/02, AT&T today; MetLife 4/25). **Committed at `305cb11 Content refresh: att-stadium`** (1 file, +20 / -10), shape-matched to the wrigley-field precedent (`636e40b`, 5/05) — clean isolated source-code commit with a `Content refresh:` prefix, push deferred to the EOD daily-marketing-output cycle per CLAUDE.md.

**Step 0 catch:** the 5/03 plan asserted AT&T hosts **9 matches**. `grep -n "venue: 'att-stadium'" worldcup.ts | grep "round: '"` returns **7**. Same upstream-counting-drift error class as the 5/01 SoFi Third-Place mistake and the 5/02 MetLife off-by-one. Caught pre-commit. **Step 0 has now caught a fact error on three of three uses since being added 5/02 — paying for itself.** Description, ticketTips, sections, and keywords all anchor to the verified match list: 4 group stage (M5/M20/M36/M53) + R32-3 (June 30) + R16-3 (July 4 Independence Day) + QF-3 (July 10 Quarter-Final).

**Refresh scope shipped:**
- Description: 1-sentence stub → rich paragraph with 7-match volume framing, QF-3 placement, July 4 R16 demand bump, retractable-roof + AC fan-comfort advantage over outdoor venues for the M36 13:00 CT slot and the four 16:00 CT knockout slots, Cowboys + WrestleMania 32 (101,763 attendance, $300–$2,000+ resale) + Super Bowl XLV ($2,500–$10,000+ resale) + Canelo-era boxing-megafight resale comps, soccer pitch geometry (sidelines parallel 105–115 / 137–147; goals behind 116–118 / 134–136), DART Trinity Lakes (opened 2024) transit, cross-platform CTA. Folds in SEO Ask 1 (venue page openers, due 5/01, 7 days overdue) — opener rewrite scope absorbed.
- Sections: 3 → 9 with FIFA Cat 1–4 mapping (100-Level Sideline / Corner / Endline; Hall of Fame Club; Star Suites; 200s Mezz Sideline; 300s Upper Sideline; 400s Upper Cat 4 floor at $130; AT&T Suite Level ceiling at $50K+).
- TicketTips: 4 → 8 AT&T-specific entries.
- Keywords: 5 → 12 entries adding Quarter-Final, July 4, seating chart, cheapest, Hall of Fame Club, July 10 2026, World Cup 2026 explicit form.

**Verification:** `npx tsc --noEmit` exit 0; `git diff --numstat` = 20/10 (single-file); cross-check against `worldCupMatches` array confirms all match-count, round-name, date, and start-time references accurate. Full per-section breakdown in `marketing-agents/output/content/refresh-log.md` 2026-05-08 entry.

**Angle:** Friday slot executed, refresh-checklist (Steps 0 + 1 + 2 + 3 + 4 + 5) ran clean except Step 5b which slipped (see Hook 4).
**Target keyword:** "AT&T Stadium World Cup 2026 tickets," "AT&T Stadium quarter-final tickets," "AT&T Stadium July 4 World Cup," "World Cup quarter-final July 10 2026"
**Content type:** Page refresh — committed clean
**Priority:** High — shipped

### Hook 2: Day 31 publish-velocity zero-streak — backlog still 13 drafts after two decay-shelves yesterday
**Topic:** Last published post: 2026-04-07. Today: 2026-05-08. **Day 31.** Yesterday's Hook 2 decay-shelved two drafts (4/29 WC general-sale + 5/4 Cubs vs Reds), bringing the actionable-publish queue from 15 → **13 drafts**: 4/8 (archive recommendation, ninth consecutive week), 4/14, 4/15, 4/16, 4/21, 4/22, 4/23, 4/27, 4/28, 4/30, 5/5, 5/6, 5/7. Today's freshness audit:

- **4/27 Summer Concert Tour** — references "Friday May 1 deadline" in opener, now 7 days past. The 1-line freshen still works ("Friday May 1" → "early May"). Publishable through this weekend.
- **5/7 All-In Pricing** — drafted yesterday with the FTC-anniversary lead frame (T-4 days from May 12, 2025 effective date). Anniversary frame is most relevant 5/8–5/13, after which the recency hook decays. **Publishable today through Tuesday 5/12 at the latest.** Recommendation: ship Monday 5/11 to land inside the anniversary window.
- **4/15 / 4/22 / 4/14 / 4/28 / 4/16 / 4/21 / 4/23 / 5/5 / 5/6** — all evergreen-leaning. No freshness-clock pressure today.

**Eleventh consecutive Mon/Tue/Wed/Thu/Sun flagging the publish bottleneck.** Realized loss-to-decay metric (introduced yesterday): 2 of 17 lifetime drafts (11.8%, slightly down from 13.3% on the smaller denominator). **Net realized publish from past 31 days of drafting: 0 of 17.** Lead Architect call still owed; 5/8 marketing-output push will be the 24th consecutive day with no `blog.ts` source-code change.

**Angle:** Re-escalation, Day 31, queue at 13 actionable drafts, anniversary-window pressure on 5/7 piece.
**Target keyword:** n/a — pipeline issue
**Content type:** Lead Architect escalation (eleventh consecutive)
**Priority:** Critical (Day 31; 5/7 piece anniversary window opens today)

### Hook 3: Today's trending events scan — NBA Round 2 weekend + WC opener T-34 days + FTC anniversary T-4
**Topic:** Trending-event scan for Friday 5/8:

1. **NBA Round 2 opens this weekend** (Saturday 5/9 / Sunday 5/10). Final Round 1 elimination games closed yesterday. The 4/14 NBA playoffs draft (Round 1 framing) hits its terminal relevance window today — last-credibility-acceptable publish day. **Recommendation: ship the 4/14 draft today before the Round 2 narrative supplants it tomorrow, OR shelve.** The 4/28 same-day playbook is series-agnostic and carries cleanly into Round 2 — publish before Saturday tip-off. **Content tie-in priority: HIGH** — both already drafted; publish-action only.

2. **World Cup 2026 at T-34 days.** No fresh news cycle today. The page refresh today (Hook 1) lifts AT&T-specific search-intent capture surface ahead of the FIFA-resale-window general-search ramp. **Content tie-in priority: handled inline.**

3. **FTC Junk Fees Rule one-year anniversary T-4 days** (rule effective May 12, 2025; today 5/08/2026). The 5/07 All-In Pricing piece is anniversary-framed and publishable today through Tuesday — see Hook 2 timing recommendation.

4. **NHL Conference Finals open ~5/10–5/12.** No current draft targets this round. The 4/8 archive-recommendation piece had Round 1 framing and is now four rounds and 31 days stale — archive call holds. **Content tie-in priority: NONE.**

5. **MLB rivalry-week scans** — Cubs vs Cardinals 5/9–5/11 at Busch Stadium (St. Louis), Yankees vs Red Sox 5/12–5/14 at Yankee Stadium. Both top-3 MLB rivalry-week pricing benchmarks. Yesterday's Hook 3 forward-flagged this for next Sunday's 5/10 calendar plan as the Wednesday-news-slot for next week. **Content tie-in priority: forward-flag holds.**

6. **Bruno Mars Soldier Field T-8 days** (Saturday 5/16 show). Inside the 14-day pricing-curve discount window per the 5/06 draft. If any first-pull pricing data lands this weekend (watcher purchase or alert-trigger), would justify a 1-line freshen on the 5/06 draft before publish. **Content tie-in priority: monitor only.**

**Angle:** Daily trending scan — six handles, two acquiring publish-action urgency today (4/14 + 4/28 Round-1 → Round-2 supersession; 5/7 anniversary window opens), four carryovers.
**Target keyword:** "NBA playoff tickets Round 2," "FTC junk fees rule anniversary," "Cubs vs Cardinals tickets," "Yankees vs Red Sox tickets"
**Content type:** Mixed — publish-action triage on existing drafts
**Priority:** Medium-High (Round-2-supersession deadline today)

### Hook 4: Step 5b miss-and-late filing — first scheduled exercise of the cc-on-commit cadence slipped
**Topic:** Per yesterday's Hook 4 commitment ("the heads-up file lands tonight"), `seo-requests/2026-05-07-content-data-touch.md` was due Thursday evening 5/07. **It did not file.** SEO Bundle Watch Day 22 entry composed at 07:00 UTC today already logged the no-land observation. **Heads-up file filed instead this morning** at `seo-requests/2026-05-08-content-data-touch.md` — ~8 hours late vs. cadence — before the AT&T commit landed.

**Cause:** Thursday's content-hook composition wrapped without spawning the heads-up file step; Step 5b was visible in Hook 5 ("(NEW — first exercise per Hook 4)") but not actioned in the same session. The accreted refresh-checklist labels (Step 0, 1, 2, 3, 4, 5, 5b) ordered the heads-up file as a sub-step of Step 5, which fired on Friday — too late. Hook 6 from yesterday already proposed renumbering to put the heads-up at Step 1; today's miss is the data point arguing for it.

**Forward fix (committed today):** Step 5b moves to **Step 1** in tomorrow's Mercedes-Benz refresh slot. Mercedes-Benz heads-up file is due tonight Friday 5/8 evening, drafted as the first artifact of the Saturday-refresh flow rather than the last. The renumbering proposal from yesterday's Hook 6 is adopted in spirit if not yet in label order — the new effective order is:
- Step 1 (was Step 5b): SEO heads-up file (Thursday evening for Friday refresh; Friday evening for Saturday refresh)
- Step 2 (was Step 0): Cross-check `worldCupMatches` array
- Step 3 (was Step 1): Edit `worldcup.ts`
- Step 4 (was Step 2): Verify against Step 2 cross-check
- Step 5 (was Step 3): `npx tsc --noEmit`
- Step 6 (was Step 4): `git diff --stat` scope check
- Step 7 (was Step 5): Explicit `Content refresh:` commit

Will hold this label order through tomorrow's Mercedes-Benz slot. If clean, the renumbering becomes the canonical refresh-checklist starting next Sunday's 5/10 calendar plan.

**Calibration carryover:** the Thursday-evening heads-up step needs a stronger session-spawn signal in the content-hook template. Yesterday's Hook 4 had the commitment buried at the end of an ack-only paragraph; today's content-hook will end with an explicit `### Tonight: Mercedes-Benz heads-up file due` action item to test whether a more visible cue catches it next slot.

**Angle:** Process miss on first scheduled exercise of new cadence; root cause identified, forward fix committed, calibration carryover to next slot.
**Target keyword:** n/a — operational
**Content type:** Cross-agent process learning
**Priority:** Medium

### Hook 5: Tomorrow's Saturday slot forward-flag — Mercedes-Benz Stadium refresh
**Topic:** Saturday 5/9 is the second consecutive page-refresh slot per the agent schedule. Per the 5/03 plan: Mercedes-Benz Stadium (`mercedes-benz-stadium` in `web/src/data/worldcup.ts`). **Why this venue:** hosts 8 World Cup matches (verify via Step 2 cross-check before drafting) including a Round of 16 — currently sparse data in line with pre-refresh AT&T (3 sections, 4 keywords, 1-paragraph description). Atlanta is the largest WC media market in the Southeast US after Hard Rock's Florida market. Mercedes-Benz hosts Atlanta United (MLS) which gives a soccer-specific precedent comp (MLS Cup, Concacaf Champions League pricing data — Atlanta United's 2018 MLS Cup Final at this venue cleared $400–$1,800 sideline resale). Super Bowl LIII (Feb 2019, Patriots 13 Rams 3) at $2,500–$8,000+ resale is the direct NFL-Final pricing comp. Falcons regular usage, the retractable pinwheel roof / transit walkability via MARTA, and the much-publicized "$2 hot dog" food-and-beverage pricing program are differentiated content surfaces.

**Refresh-checklist (re-ordered effective today per Hook 4):**
- **Step 1 (NEW position): SEO heads-up file** filed Friday evening 5/8 (tonight) at `seo-requests/2026-05-08-content-data-touch-mercedes-benz.md` — drafted as first artifact of the Saturday-refresh flow.
- Step 2: Cross-check `worldCupMatches` array — `grep -n "venue: 'mercedes-benz-stadium'" web/src/data/worldcup.ts | grep "round: '"`. Confirm exact match list before drafting (8 matches expected per 5/03 plan; verify, since AT&T's "9" was wrong).
- Step 3: Edit `worldcup.ts` — description, sections (expand to 8–10), ticketTips (expand to 6–8), keywords (expand to 8–10) on `mercedes-benz-stadium` entry.
- Step 4: Verify against Step 2 cross-check (no Final / Semi-Final / Third-Place misattribution).
- Step 5: `npx tsc --noEmit`.
- Step 6: `git diff --stat -- web/src/data/worldcup.ts` to confirm scope is single-file.
- Step 7: Explicit commit `git commit -m "Content refresh: mercedes-benz-stadium"` BEFORE the daily marketing-output push runs. Push deferred to EOD marketing-output cycle.

Content scope per 5/03 plan: 8-match volume framing (verify), Round of 16 placement (verify), Atlanta United / MLS Cup 2018 pricing comp, Super Bowl LIII NFL-Final pricing comp, retractable pinwheel-roof + MARTA walkability framing, "$2 hot dog" food-pricing program (a unique-to-Mercedes-Benz content angle — competitor venue pages don't reference it). 6–8 Mercedes-Benz-specific ticketTips (sideline 100s sightline best, endline avoidance, 200s/300s mid-range value, 400s upper budget tier, club-level premium upsell, MARTA transit specifics, food-pricing program mention, post-on-sale resale dip pattern). 8–10 keywords.

**Backup target if Mercedes-Benz finishes faster than expected:** Lumen Field, Seattle (hosts 6 WC matches per 5/03 plan; verify via Step 2 — soccer-specific precedent via Sounders MLS / Concacaf Champions League pricing data, peak-volume rainfall June average 1.7" so the open-air-bowl framing matters).

### Tonight: Mercedes-Benz heads-up file due

`seo-requests/2026-05-08-content-data-touch-mercedes-benz.md` to be drafted Friday evening 5/8 — first artifact of the Saturday-refresh flow per the new Step 1 position. Format per SEO Reply 3:
- Title-line `## Touched: web/src/data/worldcup.ts` for one-grep scan
- 1-line schema-impact estimate
- Refresh scope summary
- Commit plan
- SEO sign-off requested

**Composition note for tonight:** if the heads-up file does not file by Friday evening, log the second consecutive miss in tomorrow's content-hook Hook 4 and recommend the renumbering be reverted (the cadence is then proven structurally fragile, not just hook-template-fragile) plus an alternative process — e.g., the heads-up file becomes a session-blocking artifact rather than a same-session-completion artifact.

**Angle:** Saturday slot forward-flag — refresh-checklist re-ordered (Step 1 was Step 5b), heads-up file due tonight as session-end action item.
**Target keyword:** "Mercedes-Benz Stadium World Cup 2026 tickets," "Mercedes-Benz Stadium World Cup tickets," "Atlanta World Cup tickets," "World Cup Mercedes-Benz Stadium"
**Content type:** Tomorrow's slot planning trigger + tonight's session-end action item
**Priority:** Medium-High (cadence-recovery slot)

### Hook 6: Process check — three consecutive WC sparse-venue refreshes shipped on Friday-Saturday cadence
**Topic:** Pattern established this week and last: SoFi (Fri 5/01), Hard Rock (Sat 5/02), AT&T (Fri 5/08), Mercedes-Benz (Sat 5/09 — projected). That's a ~4-venue / ~9-day rolling pace through the Friday-Saturday refresh slots. At this pace, the remaining 11 unrefreshed WC venues (Levi's, Gillette, Lincoln Financial, NRG, Arrowhead, Lumen Field, BMO Field, BC Place, Estadio Azteca, Estadio Akron, Estadio BBVA) clear in roughly 5–6 more weeks of Friday-Saturday slots — i.e., the full WC sparse-venue refresh queue completes by approximately mid-June, well ahead of the June 11 tournament opener.

**The pace is sustainable** if every Friday-Saturday slot is used and Step 0 / Step 5b cadence holds. This week's Step 5b miss is the only material process snag in the streak. Worth flagging today as a data point for next Sunday's 5/10 plan to consider whether the WC venue queue should accelerate (e.g., add Wednesday slots for the 8 sparse US/Canada venues that would otherwise take through mid-June at 2/week) or hold the current 2/week pace and use the freed capacity on blog drafts.

Recommendation: hold 2/week through Mercedes-Benz next Saturday (5/16) — that slot finishes the 4 most-match-dense US WC venues remaining. Re-evaluate then.

**Angle:** Pace audit — Friday-Saturday WC refresh cadence is sustainable, full queue clears by mid-June at current pace, Step 5b cadence is the only fragility.
**Target keyword:** n/a — internal cadence
**Content type:** Process audit
**Priority:** Low
