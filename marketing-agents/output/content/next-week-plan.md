# Content Calendar — Week of June 8–14, 2026

World Cup kicks off **Thursday June 11**. This is the peak-relevance week for the entire WC content cluster, and the NBA Finals are live. The plan below front-loads timely pieces.

## This Week's Audit (June 1–7)

### What shipped

| Date | Type | Title/Action | Status |
|------|------|--------------|--------|
| Mon 6/1 | Big-idea blog | "All 11 US World Cup 2026 Venues, Ranked by Cheapest Get-In" (1,337w, `featured: true`) | Drafted, not published |
| Tue 6/2 | Tactical blog | "The Last-10-Days World Cup Buying Playbook" (796w) | Drafted, not published |
| Wed 6/3 | News blog | "NBA Finals Game 1: Same Nosebleed Seat $767 or $1,245" (744w) | Drafted, not published |
| Thu 6/4 | Comparison blog | "FIFA-Direct vs Resale at T-7" (985w) | Drafted, not published |
| Fri 6/5 | Venue refresh | bmo-field — Canada/Mexico arc + flagged stale WC schedule data | Committed (`f11586a`) |
| Sat 6/6 | Venue refresh | united-center — evergreen description + long-tail keywords | Committed (`128b169`) |
| Sun 6/7 | Audit + hook | This doc + content-hook (NBA Finals MSG spread / WC T-4) | In progress |

### What worked

- **4/4 blog drafts Mon–Thu, full category rotation** (guides / tips / news / comparisons). Frontmatter clean on all four: slugs URL-safe, excerpts under the 200-char limit, no unescaped backticks or `${}`. The Monday venue-ranking piece is the correct `featured: true` pick as the WC cluster anchor.
- **The Wednesday news slot stayed genuinely timely** — Game 1 cross-platform pricing the day it tipped. The story has since moved (Knicks now lead 2-0, MSG prices exploded), which is exactly the follow-on a news cadence should chase. That becomes next Wednesday's piece.
- **2/2 venue refreshes shipped Fri/Sat**, both committed to source with the honest `Content refresh:` prefix. The bmo-field refresh did the right thing by **flagging the stale WC schedule data** rather than asserting fixture counts from `worldcup.ts` (the file still holds pre-draw placeholder fixtures — match counts, groups, and dates are wrong vs real FIFA). The refreshes kept those numbers off the page.

### Standing blockers (status only — not re-escalated)

These are real and upstream of the content layer. Logging status, no new escalation doc.

- **Publish velocity is 0.** Last published post: 2026-04-07. Backlog is now ~31 drafts (27 prior + 4 this week). This is a shipping-bandwidth problem, not a drafting one. Nothing actionable from this seat except keeping the queue clean and prioritized (order below).
- **`worldcup.ts` schedule data is stale (pre-draw placeholders).** A rebuild was requested before further WC refreshes lean on it. Until then, WC pages stay on evergreen venue facts plus Category floor guidance, not fixture specifics. Friday's refresh followed this.
- **Price feed returns null; drip/email cron and `target_price` arming are inert.** Every dollar figure in drafts and hooks this week came from third-party press, attributed inline — never from our own feed. Keep that discipline.

### Copy review — queued drafts

This week's 4 are all publish-ready, but three carry date anchors that decay before Thursday:

- `2026-06-01-all-11-us...venues-ranked` — flagship; publish FIRST when bandwidth opens. Peak relevance is now through June 11. No edits.
- `2026-06-02-...last-10-days-buying-playbook` — lead says "Nine days out"; today is T-4. One-line freshen to "final week" on publish, or it ships stale.
- `2026-06-03-nba-finals-game-1-cross-platform-pricing` — Game 1 has passed and the series is 2-0. **Reframe to retrospective** or fold into next Wednesday's MSG piece; the "tips off tonight" framing is dead.
- `2026-06-04-fifa-direct-vs-resale-t-7` — title anchors "T-7"; today is T-4. Freshen to "final week" or drop the day-count for an evergreen FIFA-vs-resale comparison.

**Backlog call:** the older WC drafts (4/15, 4/22, 4/29) lose nearly all value the moment the tournament starts Thursday. If they don't publish before June 11, treat them as forfeited and stop carrying them as "high freshen-burden, publish ASAP" every week. The two April playoff guides (4/08, 4/14) should move to an `archived/` folder, or just drop off this list.

### Style watch (non-blocking)
Excerpts and leads still lean hard on em-dashes (3–4 per excerpt). On-brand, but it's compounding into an AI-tell across the cluster. Next week, vary it — a period or colon where the dash has become reflexive.

---

## Next Week's Plan — 4 Blog Topics (Mon–Thu, June 8–11)

| Day | Slot | Working title | Angle |
|-----|------|---------------|-------|
| Mon 6/8 | Big-idea | "World Cup 2026 Opens Thursday: The Final Buy-or-Wait Call on Every Seat Tier" | Tournament-eve flagship. Cheap seats won't drop, so buy; premium seats still have room, so wait or skip. One framework across all categories. Cross-links the venue-ranking flagship. |
| Tue 6/9 | Tactical | "Game-Day at the World Cup: How to Land a Seat in the Final 48 Hours Without Overpaying" | Last-minute buyer playbook — resale timing, mobile-transfer gotchas, FIFA-resale vs secondary under deadline. |
| Wed 6/10 | News/timely | "Same Finals, 6x the Price: An MSG Seat Costs $13K, the Same Series in San Antonio Costs $1.5K" | From today's hook. Knicks-Spurs venue/price disparity as a consumer-advocate story. **Re-pull prices the morning of** (Finals resale moves hourly) and attribute every figure. |
| Thu 6/11 | Comparison | "Opening Weekend Price Check: Which Group-Stage Matches Are Overpriced — and Which Are the Bargains" | WC live as of today. Cross-match comparison of opening-weekend fixtures by get-in price vs demand. Reported resale bands ($650–$1,100 standard), attributed — no feed numbers. |

**Fri 6/12 / Sat 6/13:** venue refreshes. Continue the international arc started Friday (bmo-field). Candidates: BC Place, or a Mexico venue (Azteca / Akron / BBVA). **Keep fixture specifics off the page until `worldcup.ts` is rebuilt** — venue facts plus Category floor guidance only.

**Sun 6/14:** audit + plan + hook.

### Handoffs
- **Agent 3 (Social):** the MSG 6x-price-spread stat is a strong standalone snippet. Facts only, figures attributed to press — no invented price arcs.
- **Agent 5 (Email):** "Same Finals, 6x the price" is a strong subject line. The WC-opener T-minus reminder is a second hook.
- **Agent 2 (SEO):** keyword targets are filed in today's content-hook (NBA Finals price keywords + WC opener keywords).
