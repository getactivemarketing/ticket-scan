# Content Calendar — Week of June 15–21, 2026

The World Cup is live and now alone at the top of the live-event calendar. The NBA Finals closed Saturday (Knicks 4-1 over the Spurs, first NY title since 1973), MLB is in its summer lull, and the tournament moves into Matchday 2 this week with the group stage closing around June 27 and the knockout rounds opening shortly after. Search intent is shifting from "should I buy" to matchup-specific and knockout-round queries. Next week's plan rides that shift.

## This Week's Audit (June 8–14)

### What shipped

| Date | Type | Title/Action | Status |
|------|------|--------------|--------|
| Mon 6/8 | Big-idea blog | "World Cup 2026 Opens Thursday: Buy-or-Wait on Every Seat Tier" (`featured`) | Drafted, not published |
| Tue 6/9 | Tactical blog | "World Cup 2026: The Final 48 Hours Buying Guide" | Drafted, not published |
| Wed 6/10 | News blog | "NBA Finals 2026: MSG vs San Antonio Price Gap" | Drafted, not published |
| Thu 6/11 | Comparison blog | "Opening Weekend Price Check: Bargains vs Overpriced Group-Stage Matches" | Drafted, not published |
| Fri 6/12 | Venue refresh | State Farm Arena — sections + rich description + keywords | Committed (`7e7d7c2`) |
| Sat 6/13 | Venue refresh | Toyota Center — 57 sections + description + keywords (was thinnest in dataset) | Committed (`fd99cba`) |
| Sun 6/14 | Audit + hook | This doc + content-hook (post-Finals demand consolidation / WC Matchday 2) | In progress |

### What worked

- **Full execution: 4 drafts Mon–Thu, full category rotation** (guides / tips / news / comparisons), plus 2 venue refreshes committed Fri/Sat. Seventh-plus straight week at program-high output. The Monday flagship landed the highest-intent WC question of the week ("buy or wait") on the day of kickoff.
- **Both venue refreshes shipped to source** with the honest `Content refresh:` prefix. Toyota Center was the right pick — it was the thinnest venue page in the dataset, and the refresh built it out to 57 sections with real June event anchors. State Farm Arena got the same treatment Friday. The arc keeps converting our weakest pages into the strongest.
- **Fact-gate discipline held.** No WC fixture specifics leaked onto refreshed pages from the stale `worldcup.ts` data, and no dollar figure in any draft or hook came from our null price feed — every number was press-attributed inline. This is the discipline that keeps the cluster trustworthy as the search window peaks.

### Decayed drafts — move to forfeit watch

The tournament is now three days live, which kills two of this week's drafts as written:

- `2026-06-09-world-cup-2026-final-48-hours-buying-guide` — the "final 48 hours" frame referred to pre-kickoff. Dead as a pre-tournament piece. Salvageable only by re-cutting it into an evergreen "last 48 hours before any match" tactical guide, which next week's Tuesday tactical effectively replaces. Recommend retiring it.
- `2026-06-11-...opening-weekend-price-check-bargains-overpriced` — opening weekend has passed. Either reframe as a retrospective ("how opening-weekend resale actually moved") or let it go. Do not ship as live.
- `2026-06-10-nba-finals-2026-msg-vs-san-antonio-price-gap` — the series is over (Knicks in 5). Still publishable as a retrospective data piece on how Finals resale behaved, but the live framing is dead. Lower priority than the WC core.

### Standing blockers (status only — not re-escalated)

- **Publish velocity is still zero.** Last published post: `c0dcf5a` (2026-04-07). `blog.ts` holds 21 live entries; the draft backlog is now ~36. This is a shipping-bandwidth bottleneck, not a drafting one — the CRO/shipping standing note already owns it. Nothing actionable from this seat except keeping the queue clean and prioritized.
- **`worldcup.ts` schedule data is stale (pre-draw placeholders).** A rebuild was requested before further WC refreshes lean on it. Until then, WC pages stay on evergreen venue facts plus Category floor guidance, never fixture specifics. (Note: SEO confirmed the WC stadium schema uses the tournament-wide date window, so the stale data does not leak into structured data.)
- **Price feed returns null; drip/email cron and `target_price` arming are inert.** Every dollar figure this week was third-party press, attributed inline. Keep that discipline.
- **No GSC/GA4.** Every "top/bottom performer" call remains a proxy until analytics is wired. Single highest-leverage unblocker for real performance data. Flag, don't own.

### Publish-priority order (if any window opens)

Unchanged logic, refreshed for the calendar:
1. `2026-06-01-all-11-us-world-cup-2026-venues-ranked-cheapest-get-in` — the flagship. Evergreen through the whole tournament; no date decay; the cross-link hub for the entire cluster. Ship FIRST.
2. `2026-06-08-world-cup-2026-opens-buy-or-wait-every-seat-tier` — still relevant per-tier framework while the group stage runs.
3. Next week's Monday knockout-tickets flagship (below) once drafted — it owns the search volume the closing group stage will create.

Everything date-anchored to opening weekend or kickoff is now forfeit-watch, not "publish ASAP."

### Style watch (non-blocking)
Em-dash density eased slightly this week but is still the cluster's main AI-tell. I trimmed it in today's hook and audit on purpose (periods and colons where the dash had gone reflexive). Carry that into next week's drafts: vary the punctuation, especially in excerpts.

### Backlog hygiene
Recommend actually creating `content/archived/` and moving the two April playoff guides (4/08, 4/14) and the terminal-decay April WC drafts (4/15, 4/22, 4/29) into it this week. They have been flagged as forfeit for three consecutive audits; carrying them as live entries inflates the backlog count and the status with no upside. One-command cleanup, not a content decision.

---

## Next Week's Plan — 4 Blog Topics (Mon–Thu, June 15–18)

The pivot: the group stage closes ~June 27, the knockout bracket fills in, and "how do I buy a ticket to a match before I know who's playing" becomes the highest-volume unanswered WC question. We own it before the spike.

| Day | Slot | Working title | Angle |
|-----|------|---------------|-------|
| Mon 6/15 | Big-idea | "World Cup Knockout Tickets: How to Buy a Round-of-32 Seat Before You Know Who's Playing" | Flagship. Explains conditional/placeholder knockout inventory: what you're actually buying when the matchup is TBD, how FIFA's resale handles it vs the secondary platforms, and why the period right before the bracket sets is a distinct pricing regime. Cross-links the venue-ranking flagship. Evergreen through early July. |
| Tue 6/16 | Tactical | "The Between-Matchdays Dip: When World Cup Resale Prices Actually Soften, and How to Catch One" | Tactical timing piece. Resale prices breathe between a team's matches; the lull after Matchday 2 and before the knockouts is the realistic buy window. Concrete steps: set a price alert on your target match, name your floor, wait for the dip. Direct product CTA (watchlist + alert). |
| Wed 6/17 | News/timely | "World Cup Matchday 2 Price Check: Which This-Week Fixtures Are Overpriced on Resale" | Timely cross-platform read on the marquee Matchday 2 matches (Spain-Cape Verde, Saudi Arabia-Uruguay, Belgium-Egypt and the week's other US-venue draws). **Re-pull the morning of and attribute every figure to press** — our feed is null. Consumer-advocate "fair get-in vs hype" frame. |
| Thu 6/18 | Comparison | "FIFA Official Resale vs the Secondary Market for World Cup Tickets, Now That the Tournament Is Live" | The live-tournament rematch of the pre-kickoff FIFA-direct-vs-resale piece (6/4, which was T-7 and is now stale). Dynamics changed once matches started: FIFA resale inventory, transfer/mobile-ticket gotchas, secondary-market premiums under a live deadline. Distinct angle, distinct slug. |

**Fri 6/19 / Sat 6/20:** venue refreshes. Continue the arc. Candidates: a remaining thin US venue page, or extend the international arc (BC Place, or a Mexico venue — Azteca / Akron / BBVA). **Keep WC fixture specifics off the page until `worldcup.ts` is rebuilt** — venue facts plus Category floor guidance only.

**Sun 6/21:** audit + plan + hook.

### Handoffs
- **Agent 3 (Social):** the post-Finals demand-consolidation angle and the Matchday 2 fixtures are strong standalone snippets. Teams/dates/venues only; any figure press-attributed.
- **Agent 5 (Email):** "The NBA Finals are over, the World Cup is the only game in town" is a ready subject line, and it pairs with the price-alert CTA better than any hook this month.
- **Agent 2 (SEO):** knockout-round keyword intent is the next volume spike (filed in today's content-hook). Worth a pass before the group stage closes ~June 27.
