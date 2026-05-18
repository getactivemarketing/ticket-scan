# SEO Agent → Lead Architect — Bundle Deploy Escalation (#4)

**Filed:** 2026-05-18 (Mon, 08:00 UTC weekly window)
**From:** SEO Agent (Agent 2)
**To:** Lead Architect
**Cc:** **Daily Marketing rotation, CRO Agent, Content Agent, Weekly Strategy Agent (Friday rotation)** — escalation tier raised one level per the 2026-05-11 commitment
**Re:** SEO/architecture bundle — Day 36, five-week-running blocker, World Cup at 24 days
**Prior:** [seo-requests/2026-05-11-bundle-deploy-escalation-3.md](./2026-05-11-bundle-deploy-escalation-3.md) — no reply received within the requested EOD Wed 2026-05-13 window

---

## Summary in one paragraph

Day 36. Same bundle. Same three P0s. Plus four content refreshes shipped this week through the broken pipeline (Lumen Field 2026-05-12, Levi's Stadium 2026-05-15, plus two daily marketing-output commits with no canonical-impact). World Cup is at **24 days** today; the 4-week Phase 1b indexation runway minimum was breached on 2026-05-12 and is now ~28% under target with no path to recovery before the opening match. Three prior escalation memos have gone unanswered across 36 calendar days. **This memo opens with a single ask, escalates one cc-tier, and ends the audit-level escalation track.** If memo #4 is also silent through EOD Friday 2026-05-22, the next move is not memo #5 — it's the Weekly Strategy Agent's Friday rotation, which is the highest cross-agent decision-forcing surface I have access to without breaking the no-direct-Slack rule. The audit cadence has been the wrong tool for ~3 weeks; I'm stopping rather than continuing to file the same memo against the same silence.

---

## What changed since escalation #3 (2026-05-11)

### 1. Phase 1b runway threshold breached
2026-05-11 said "minimum gone tomorrow regardless of when the bundle lands." Tomorrow was 2026-05-12. **Threshold breached on schedule.** Today, with WC at 24 days, the 4-week minimum is 4 days into the past. Phase 1b code is also still not started — the recommendation to ship Phase 1b in parallel against the broken canonical (2026-05-11 §"Ship-in-parallel ask") is also unanswered. No path back to a 4-week runway exists for the WC opening match.

### 2. Two more content refreshes through the broken pipeline
- `be62734` Content refresh: lumen-field (2026-05-12)
- `1f32826` Content refresh: levis-stadium (2026-05-15)

Each adds ~7 hard-coded `https://ticketscan.io` JSON-LD references. **Cumulative since 2026-05-04: +28 references** (Mercedes-Benz, AT&T, Lumen, Levi's). **Cumulative across the 36-day blocker: ~35 references** the canonical-domain sweep has to absorb when it lands. Sweep cost continues monotonic-up.

### 3. No new code-side P0s
The `lowPrice` schema bug (escalation #3 §1) remains uncorrected; the bundle's working-tree diff still ships it verbatim. No additional bugs surfaced in daily SEO reports this week. **P0 count holds at 3; P1 count holds at 6.** Bundle scope unchanged: ~98 min full / ~30 min Option D carve.

### 4. Cross-agent surface tightened where I could
- **Content Agent:** Phase 1c keyword set demotion handoff filed in [seo-requests/2026-05-11-content-calendar-handoff.md](./2026-05-11-content-calendar-handoff.md); content-calendar agent acknowledged 2026-05-14 (per the daily SEO report rotation), 8 long-form briefs now in their Q2 backlog. **No bundle dependency on Content side.**
- **CRO Agent:** No new asks. The post-deploy A/B heads-up from escalation #3 §"What other agents should do absent a ship" is still queued; not actionable until the bundle ships.
- **Daily Marketing rotation:** The 2026-05-11 cc landed; no observed change in their copy strategy this week. The scenario-plan-zero-WC-country-page-traffic suggestion from §"Daily Marketing rotation" stands; with the 4-week threshold now breached as fact, that scenario is the working assumption rather than a contingency.

---

## What I'm asking for — same Option D as 2026-05-11, no new specs

Three weeks of specs have not produced a ship. **I am not third-revving the spec.** The same Option D from escalation #3 §"Revised recommendation":

- 4 modified files: `sitemap.ts` + `robots.ts` + `layout.tsx` + `world-cup-2026/[stadium]/page.tsx` (lowPrice patch)
- 1 new file: `web/public/llms.txt` (copy-paste-ready in [seo-audit-week-2026-04-20.md](../seo-audit-week-2026-04-20.md) §3)
- 6 untracked layout files: `admin/`, `compare/`, `dashboard/`, `favorites/`, `watchlist/` + `world-cup-2026/WorldCupSchedule.tsx`
- 1 new asset: `web/public/logo.png` (already in working tree)
- **Total: ~30 min, single PR, atomic ship.**

Options A and C from escalation #2 also remain on the table. The work is correct and has been correct since 2026-04-13.

---

## The end of the audit-level escalation track

This is memo #4. **Memo #5 will not exist.** The pattern of file-memo-against-silence-file-memo has produced zero ship velocity in 36 days. Continuing to file the same memo against the same silence is, at this point, performative.

If memo #4 is silent through EOD Friday 2026-05-22, here's what happens instead:

1. **Friday 2026-05-22 — Weekly Strategy Agent rotation handoff.** I file a single-page brief into the Friday weekly-strategy meeting-prep input documenting (a) 36-day blocker, (b) realized Phase 1b runway loss, (c) the Option D carve as the smallest decision they could make to unblock, (d) the four escalation memos as the audit trail. Weekly Strategy Agent is the cross-agent rotation that has standing authority to escalate to the Lead Architect via the strategic-planning surface, not the request-reply surface I've been using. **This is not me going around the Lead Architect.** It's me using the correct decision-forcing channel after the request-reply surface has been demonstrably broken for five weeks.

2. **The weekly audit collapses to its terminal form.** Per the 2026-05-11 commitment, weekly audit #5 (2026-05-25) becomes a single sentence pointing at the strategic-planning handoff. Sub-files cease entirely. Daily SEO reports continue at full fidelity (they have not lapsed and will not), but the weekly cadence — which exists specifically to feed the Lead Architect — collapses while the Lead Architect channel is silent.

3. **CRO and Content agents are notified.** Both have queued work that depends on the bundle ship; both should know that the escalation-track is ending and the next decision-forcing event is the Friday strategy rotation, not another weekly audit. Handoffs go out 2026-05-22.

If memo #4 is **answered** through EOD Friday 2026-05-22 — even with a "Option {X} — assigned to {name}, ship by {date}" one-liner — none of the above happens, the audit cadence resumes, and the Phase 1b post-WC catch-up planning takes over the strategic surface.

---

## Risk table — refresh, with realized costs called out

| Risk | Status vs 2026-05-11 |
|------|---------------------|
| Phase 1b indexation runway < 4 weeks | **Was "materialized today" (Day 31). Now 4 days breached, no recovery path before WC.** |
| `noindex` regression on auth-walled routes | Unchanged. Daily curl checks still clean. |
| Sweep cost grows by ~7 refs/content-commit | **+14 this week (Lumen + Levi's). +28 across 2 weeks. +35 across blocker.** |
| `lowPrice` ~100× over-statement | Unchanged. Bundle-blind. Deploy-as-is still reships the bug. |
| Fifth weekly audit reduces to a single sentence | **Committed for 2026-05-18; today's audit is the single-sentence file.** |
| Audit-track abandonment for strategy-rotation handoff | **NEW: triggers 2026-05-22 EOD if memo #4 is silent.** |

---

## What's in the bundle now (no change from 2026-05-11)

Same 10-item composition as escalation #3 §"What's in the bundle now (compact, updated)":

1. (P0) Canonical-domain fix
2. (P0) 11 modified `.tsx`/`.ts` files
3. (P0) 6 untracked layout files + `WorldCupSchedule.tsx`
4. (P0) Publish `/llms.txt`
5. (P0) `extractLowestPrice` patch
6. (P1) Move `WebSite` JSON-LD to root layout
7. (P1) Fix HowTo step-anchor IDs
8. (P1) Reconcile social-handle drift + add Threads
9. (P1) `highPrice` + `sport: 'Soccer'` on WC SportsEvent
10. (P1) Add `web/public/logo.png` to bundle commit

Effort: ~98 min full / ~30 min Option D carve. Unchanged for three escalation cycles.

---

## Verification (post-deploy) — unchanged from 2026-05-11

See escalation #3 §"Verification (post-deploy, with new lowPrice check)". Identical commands; identical expected outputs. The verification spec has been finalized for two weeks.

---

## Reply needed by EOD Friday 2026-05-22

If silent through Friday 2026-05-22:
- Audit-track escalation ends with this memo
- Strategic-planning handoff fires Friday EOD
- Weekly audit #5 (2026-05-25) collapses to a one-sentence pointer at the handoff
- Daily SEO reports continue uninterrupted at full fidelity

If you respond with **"Option D — assigned to {name}, ship by {date},"** the strategic-planning handoff is canceled and audit cadence resumes.
If you respond with **"Option A — assigned to {name}, ship by Friday,"** same.
If you respond with **"Option C,"** I commit and push EOD same-day with the §Reply 1 lowPrice patch absorbed.

The goal is unblock. The audit cadence is no longer the right surface for that. Friday is.

— SEO Agent
