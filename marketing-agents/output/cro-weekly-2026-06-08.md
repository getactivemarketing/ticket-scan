# CRO Weekly — 2026-06-08 (Mon)

Agent: CRO Specialist • Weekly deep-dive.
**Format: converged-status, not full re-audit.** Per the 06-01 weekly's §8 and project memory ([[cro-weekly-converged-ship-not-analyze]]), this audit converged 6+ weeks ago. The findings are verified-real and verified-unshipped. Re-emitting a 7th full deep-dive with regenerated companion specs would be motion-as-progress — the exact stale-escalation pattern this project has been burned by ([[seo-audit-stale-escalation-spiral]]). The current, still-accurate specs live in the 06-01 companion files; nothing in them has changed because nothing has shipped to change them.

---

## 1. Ship status since last weekly (the only line that moved)

The one metric a converged audit should report is **what shipped**.

```
git log --since=2026-06-01 -- web/src
  128b169  Content refresh: united-center venue page
  f11586a  Content refresh: bmo-field + flag stale WC schedule data
```

**Two commits, both content refreshes. Zero funnel P0s shipped.** Frontend funnel code is byte-identical to last week.

**Open funnel P0 count: 3** (compare/event gate, target-price input, analytics) — unchanged for 6+ weeks.

---

## 2. The new fact this week: the cheapest fix is now stranded, not just unbuilt

Last week the blocker was "nobody has written the fix." That's no longer true for the newsletter capture. The 06-07 daily wired real `<NewsletterSignup>` forms into the **global footer, blog index, and blog posts** (the fix for the 0-of-90 subscriber problem — [[newsletter-conversion-rootcause]]). Verified today in the working tree:

```
git status --short -- web/src
  M web/src/components/Footer.tsx
  M web/src/app/blog/page.tsx
  M web/src/app/blog/[slug]/page.tsx
  ... (+ other uncommitted edits)
```

These edits are **written, tsc-clean, and uncommitted** for a second straight day. Production `activeSubscribers` is still **3** (admin stats, 06-08 ~11:00 UTC: `totalUsers: 109`, `activeSubscribers: 3`). The subscriber line **cannot** move until this is committed and Vercel redeploys.

> **Highest-leverage action this week is `git commit && push`, not analysis or new code.** It is the only item in the entire CRO backlog that is already built and one command from production.

---

## 3. Open P0s — re-verified against HEAD today (proof they're still real, not stale)

No percentages: the site has **zero analytics instrumentation**, so any funnel rate would be fabricated ([[price-history-empty-alerts-broken]]). These are *mechanism* findings — code that structurally blocks users — which are verifiable without analytics.

| P0 | Claim | Verified at HEAD (2026-06-08) |
|---|---|---|
| Compare hard-gate | `/compare` redirects anon users to `/login` | **Real** — `compare/page.tsx:88` |
| Event-detail hard-gate | `/event/[id]` redirects anon users to `/login` | **Real** — `event/[id]/page.tsx:110` |
| No target-price UI | watchlist add payload omits `targetPrice` → every row stores `target_price = NULL` → alert engine is dead code | **Real** — `EventCard.tsx:43–49` (payload has eventId/name/date/venue/city; no targetPrice). Confirmed by live `activeAlerts: 0` ([[watchlist-no-targets-alerts-cant-arm]]) |
| No analytics | no gtag/dataLayer/posthog/plausible anywhere | **Real** — precondition for any rate readout |
| No onboarding route | `/onboarding` | **Real** — directory does not exist |

All five re-read from source this morning. This is **not** the SEO-audit failure mode where "blockers" turned out already-fixed in git — here verification confirms every one is still live.

---

## 4. A/B test — still none, still by design

No page-event analytics ⇒ no readable result surface. A cohort test without measurement is theater. **Not recommending one.** The single highest-ROI instrumentation task remains a 3-line `dataLayer.push` in the `NewsletterSignup` success handler and at `register/page.tsx` post-submit — until one fires, no test in this report set can be read out. (Carried to Analytics / Agent 7; unchanged from 06-01.)

The first change worth shipping *as a measured production cutover* (not a cohort split) is still the **Compare ungate** — full spec in `cro-weekly-2026-06-01--abtest-spec.md`, still current.

---

## 5. Signup / Popup / Onboarding specs — unchanged, see 06-01 companions

These are **not regenerated** this week on purpose. The specs are complete and nothing has shipped against them, so the 06-01 versions are the live spec:

- Signup flow ship-list → `cro-weekly-2026-06-01--signup-flow.md` (autocomplete attrs, password-reveal, `?returnTo=`, drop confirm-password, defer SSO)
- Popup strategy → `cro-weekly-2026-06-01--popup-strategy.md` (WC exit-intent email capture; **depends on the drip-table fix `index.js:874`**)
- Onboarding 3-step → `cro-weekly-2026-06-01--onboarding-flow.md` (depends on the §3 target-price input)

One newly-actionable item surfaced in the 06-08 daily worth folding into the signup spec: **add a checked-by-default newsletter opt-in checkbox to `register/page.tsx`** — registrants are the highest-intent audience and are never asked to subscribe (the last open gap in [[newsletter-conversion-rootcause]], ~15 min).

---

## 6. Cross-agent handoffs (carried; no new asks)

| To | What | Status |
|---|---|---|
| **Dev backlog (do first)** | Commit + push the 06-07 newsletter forms (`Footer.tsx`, `blog/page.tsx`, `blog/[slug]/page.tsx`) | 🔴 built, stranded — 1 command |
| **Dev backlog** | Ungate `/compare` + `/event/[id]` (delete the `/login` redirect, gate only the save action); add `targetPrice` input to watchlist add | 🔴 converged P0s |
| **Content (Agent 1)** | Replace fabricated homepage proof — "$127 Avg. Savings" / "50K+" stats bar (`page.tsx:118–120`) and the invented $-claim testimonials (`:226–228`) with citable copy | 🟠 carried (FTC/trust exposure) |
| **Analytics (Agent 7)** | 3-line `dataLayer.push` at newsletter-success + register-success — unblocks every downstream readout | 🔴 precondition |
| **Growth (Agent 8)** | After Compare ungate, expect `usersToday` to dip while `totalWatchlistItems` rises — watch the latter, don't revert on the former | carried |

---

## 7. Recommendation — hold cadence, ship one thing

Standing recommendation from 06-01 is reaffirmed: **the weekly deep-dive stays paused-in-place until a frontend P0 merges.** This file is the one-line status it called for. The deep-dive resumes the week after the first P0 ships, when there's an actual delta to analyze.

**If exactly one thing happens this week, make it the commit in §2** — it's the only fix that's already written, it's one command, and it unblocks the only acquisition→retention metric (subscribers) that's currently frozen. The two carried P0s (ungate, target-price) are next, ~1–2 hr each.

The needle moves on a `git push`, not another audit. **T-3 days to World Cup kickoff (Jun 11)** — the pre-kickoff email-capture window closes this week, which makes the §2 commit time-sensitive, not just overdue.

---

_Deliverables index: this file + the four still-current 06-01 companion specs (intentionally not regenerated). No funnel percentages reported (no analytics exists). No fabricated counts — all platform figures are live admin-stats reads._
