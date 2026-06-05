# TicketScan Weekly Report — Week of 2026-06-05

_Agent 7 (Analytics & Intelligence), weekly deep-dive. Window: **this week = Sat 05-30 → Fri 06-05**, **last week = Sat 05-23 → Fri 05-29**._

> **Sourcing & honesty note — read first.**
> I could **not** re-pull the admin API live this session: the production `ADMIN_SECRET` is not available to the agent, and the documented placeholder key (`ticketscan-admin-2026`) returns **HTTP 401**. The API itself is **up** (health 200 in 0.54s; `/api/admin/*` correctly returns 401 without a real key).
> All platform numbers below are **reconciled from this week's Agent-7 daily dashboards** (05-29 → 06-05), which had DB access when they ran. They are internally consistent (day-over-day deltas reconcile to the running totals). They are **not** a fresh live pull.
> GA/GTM-dependent metrics — unique visitors, traffic-by-channel, page-level traffic, funnel %, email open/CTR, paid spend/ROAS — are **genuinely not queryable** from this agent (no GA Data API credential, no server-side pageview log exposed). Those cells are left blank **by design**. Inventing them is the failure mode this report exists to avoid.
> The three skills named in this agent's spec (`analytics-tracking`, `customer-research`, `competitor-alternatives`) are **not installed** in this environment; the corresponding sections are done manually with the data actually available.

---

## Executive Summary

- **Acquisition stepped up sharply.** 14 new signups this week vs 2 last week (+600% WoW); registered users 90 → **104**. This is the strongest acquisition week on record in the dailies — driven by **World Cup proximity** (tournament opens **June 11**, six days out).
- **The step-up is real but concentrated and shallow.** Of 18 watchlist adds this week, ~5–11 came from a single user loading the full Ariana Grande Barclays run on 06-05. Net new *activated* users is smaller than the headline. Don't over-read small-N surges.
- **The core value prop is still inert.** `price_history` has been **empty for 58 consecutive days** (every daily this week confirms `total:0`). No price trends → no buy/wait recs → **price alerts structurally cannot fire** (triggered = 0, all week). This is an engineering blocker, not a marketing one, and it caps everything downstream.
- **Owned-channel capture remains broken.** Newsletter flat at **3** subscribers (2 are test addresses, none from any post-launch signup) for the ~123rd straight day. 14 high-intent users acquired this week, **0** captured to email. The fix is a one-line opt-in checkbox on the signup flow (root cause documented).
- **The biggest self-inflicted gap: comparison pages keep getting spec'd and never built.** Specs for `/compare/ticketscan-vs-{seatgeek,stubhub,vivid-seats,gametime}` have been handed to Content across multiple cycles; **all four are still 404** — only the generic `/compare` tool page exists in the repo. Re-speccing a fifth is waste. **Ship one.**

---

## Growth Metrics

| Metric                    | This Week (05-30→06-05) | Last Week (05-23→05-29) | WoW Change | MoM |
|---------------------------|-------------------------|--------------------------|------------|-----|
| Unique Visitors           | n/a¹                    | n/a¹                     | —          | —   |
| New Signups               | **14**                  | 2                        | **+600%**  | ↑²  |
| Total Registered Users    | **104**                 | 90                       | **+14 (+15.6%)** | ↑ |
| Watchlist Items Added      | **18** (net +17)        | 2                        | **+16**    | ↑   |
| Active Watchlist Users (lifetime activators) | **57**³ | 57                       | ~flat³     | →   |
| Price Comparisons Run     | n/a¹                    | n/a¹                     | —          | —   |
| Newsletter Subscribers    | **3** (0 new)           | 3 (0 new)                | **0**      | →   |
| Price Alerts Triggered    | **0**                   | 0                        | **0**      | →   |

¹ Requires GA/GTM Data API access this agent does not have. Not in the DB; left blank rather than fabricated.
² MoM: signups ran ~0–3/day through May; 14 in a week is a clear step-up vs the May weekly run-rate (~2–4/wk). Exact 4-week-prior anchor not pulled, so shown directionally, not as a fake %.
³ Last verified activator count was **57/93 = 61.3%** (05-31 daily). With +14 signups since, the *rate* has almost certainly dipped (57/104 ≈ 54.8% if no new activators), because the denominator grew faster than confirmed activations. Treated as ~flat-to-down pending a fresh live pull — not asserted precisely.

**Running total reconciliation (from dailies):** users 88(05-23) → 90(05-29) → 93 → 95 → 96 → 98 → **104**(06-05); watchlist 108 → 110 → 115 → 116 → 117 → **127**. Deltas tie out. ✓

---

## Funnel Conversion Rates

| Step                      | This Week | Last Week | Notes |
|---------------------------|-----------|-----------|-------|
| Visit → Search            | n/a       | n/a       | No GA/GTM read access; no server-side pageview log exposed. |
| Search → Compare          | n/a       | n/a       | Same — front-end events not queryable from this agent. |
| Compare → Signup          | n/a       | n/a       | Same. |
| Signup → Watchlist Add    | ~61% lifetime³ | ~61% | Derivable from DB historically (57/93). This week's 14 signups not yet fully resolved into activators; current-cohort rate pending live pull. |
| Watchlist → Return Visit  | n/a       | n/a       | **Not measurable at all** — there is no `last_login`/session table in the schema. Any "return visit" number would be invented. |

**Bottom line on the funnel:** with no analytics layer wired in, four of five funnel steps are unobservable. **The single highest-leverage analytics fix remains wiring a GA4 Data API service-account key into the admin layer.** Until then this section cannot be populated, and no agent should cite a funnel % as fact.

---

## Traffic by Channel

**Not available.** Requires GA/GTM. Attribution is not captured in the DB — do **not** infer channel splits from signup counts or names. Flagged as a capability gap, not reported as zero.

## Content Performance

**Page-level traffic / top-pages / conversion-by-page: not available** (same GA limitation). What *is* observable is demand signal from what users are tracking — see Event Trends. The only repo-side content fact worth flagging: the four `ticketscan-vs-*` comparison pages that have been spec'd repeatedly **do not exist** (404); they would be obvious organic-capture pages and remain unbuilt.

---

## Event Trends

From the 06-05 daily's `/api/admin/popular-events` read (most recent available; teams/dates are verified facts, **no price figures** — price feed returns null prices, so any $ is fabrication):

- **World Cup group stage is the dominant new-demand signal.** Adds this week skew to WC group-stage matches at Hard Rock (Miami), Mercedes-Benz (Atlanta), AT&T (Dallas), Estadio Akron. Tournament opens **June 11**.
- **Ariana Grande — Eternal Sunshine Tour @ Barclays Center** — a single user added the full multi-date run on 06-05 (the bulk of the watchlist spike).
- **Steady catalog interest:** Harry Styles @ MSG, Flyleaf 20th Anniversary @ House of Blues Chicago, NBA Finals (Knicks run) @ MSG.

⚠️ **WC data caveat (standing):** `worldcup.ts` holds **pre-draw placeholder fixtures** — venue match counts/groups/dates are wrong vs real FIFA. Use popular-events (real user adds) for demand, **not** `worldcup.ts`, for any fixture claim. See [[worldcup-schedule-stale-predraw]].

**"Biggest price movements" / "new events gaining traction by price":** cannot be produced — `price_history` is empty. Omitted rather than faked.

---

## Email Performance

- **Drip campaign:** **0 emails sent, ever** (Day 58+). 7+ users are past Day-3/7/14 thresholds with `last_email_sent=0`. **Do not blind-trigger `/drip-run`** to move the metric — it risks blasting real inboxes. Build/QA item for the email owner. See [[drip-campaign-never-sends]].
- **Newsletter:** 3 subs, 0 new this week, ~123 days flat. Capture is broken at the form level (only the homepage form works; blog/footer CTAs dead-end). See [[newsletter-conversion-rootcause]].
- **Open/CTR/engagement:** **not available** — no ESP analytics endpoint wired in, and with 0 sends there's nothing to measure. Not fabricated. See [[email-weekly-spiral]].
- **Price-alert emails:** 0 — structurally cannot fire while `price_history` is empty. See [[price-history-empty-alerts-broken]].

## Paid Media Summary

**$0 spend / no live ad accounts** — paid is blocked at human account-setup, not running. No CPA/ROAS to report (reporting any would be fiction). See [[paid-ads-agent-spiral]].

---

## Customer Behavior Analysis

_Done from DB-derivable signals only; no per-user "engagement firing patterns" are invented (that fabrication mode is documented in [[email-weekly-spiral]])._

**Segments (grounded):**
- **Activators (~57 lifetime):** registered users who added ≥1 watchlist item. Historic activation ~61% of the pre-this-week base — genuinely healthy for the funnel stage; the product's "track an event" action lands when users reach it.
- **This week's new cohort (14):** acquisition-driven by WC proximity. Activation of this cohort is **not yet resolved** — flagging as the thing to watch next week, not asserting a number.
- **Power-user concentration:** the week's watchlist spike is one user loading a full tour run. Real, but it inflates the aggregate — net broad demand this week is ~6–7 adds, still above trend on WC interest.
- **Newsletter-only:** effectively **0 functional** — the 3 subs are pre-launch/test, none converted from a registered user. The signup→subscribe path is severed.

**The five spec questions, answered honestly:**
1. *Avg time signup → first watchlist add?* Not computable without per-event timestamps joined per user; the admin API exposes counts, not the paired timeline. Needs an activity-join endpoint. **Unknown — not estimated.**
2. *Most popular events, registered vs anonymous?* Only **registered** is observable (popular-events = watchlist rows). Anonymous behavior needs GA. Registered demand = WC group stage + Ariana Grande (above).
3. *Correlation between alert emails and return visits?* **Unmeasurable** — 0 alert emails sent and no session/return tracking exists. No correlation can be claimed.
4. *% of users who set a target price vs browse?* This is the critical one: **127 watchlist items, activeAlerts = 0** → effectively **nobody sets `target_price`**, so the alert loop is severed at the source even if price tracking worked. See [[watchlist-no-targets-alerts-cant-arm]]. **Highest-leverage product fix on the engagement side.**
5. *What do power users do differently?* Observable answer: they add **multiple items / full tour runs**. That's it from the data — anything about "frequency of return" or "daily logins" would be invented (no `last_login`). See [[growth-agent-spiral]].

**Actionable takeaway:** the engagement chain is broken in two independent places — (a) users don't set target prices, and (b) price tracking doesn't run. **Fixing either alone still yields 0 alerts.** Both must ship for the alert value-prop to exist. Arming targets (a target-price modal / default suggestion at watchlist-add) is the cheaper of the two and within CRO's reach.

---

## Competitor Deep-Dive: Vivid Seats — 2026-06-05

_Rotation: last covered = StubHub (cycle 3). Next in order = **Vivid Seats**. This is composed from general market knowledge, **not** a live scrape — no SEO-rank tool or ad-library feed is wired into this agent, so I do not assert their current keyword rankings, live ad copy, or traffic numbers. Where I'd need live data, I say so._

### Product
- **Model:** secondary-market resale marketplace (buy/sell), not a price-comparison meta-tool. Core differentiator vs TicketScan: they *sell* inventory; we *compare across* sellers.
- **Loyalty:** **Vivid Seats Rewards** ("Stack 10 → get 1 free," credit-based) — a genuine retention mechanic TicketScan has no analog for.
- **Buyer guarantee** on every order (a trust lever in resale).
- **Feature they have, we don't:** transactional checkout + loyalty; native mobile app maturity.
- **Feature we have, they don't:** genuine *cross-marketplace* price comparison and price-history/alerting (when our pipeline works). Their pricing is their own inventory only.

### Marketing & Positioning
- **Value prop:** "great deals on tickets" + rewards-driven loyalty; broad sports/concerts/theater coverage.
- **Target:** mainstream resale buyers; rewards skew toward repeat buyers.
- **The honest attack vector (consistent across cycles): fee transparency.** Resale marketplaces are routinely criticized for fees revealed late at checkout. TicketScan's defensible wedge is **all-in / upfront price comparison** — showing the true delivered price across sources *before* checkout. This is the angle the comparison page should lead with.
- **Live SEO/paid/social specifics:** would require a real rank-tracker and ad-library feed. **Not asserted here.** If competitor monitoring is wanted as an ongoing capability, it needs a tool — flagging as a gap rather than inventing rankings.

### Opportunities / Threats
- **Opportunity:** own "true all-in price across SeatGeek + StubHub + Vivid + TM" — a comparison Vivid structurally can't show (it's a seller, not a comparator).
- **Threat:** their rewards loyalty + transactional depth create switching inertia we can't match without a transactional layer. We compete on *decision support*, not on being the place you buy.

### Comparison page spec → Content Agent (Agent 1)
`/compare/ticketscan-vs-vivid-seats` — lead with **fee transparency / all-in price**, then cross-source comparison and price-history/alerts as the differentiators; honest "when to use Vivid" section (loyalty/rewards buyers) for credibility + SEO.
**⚠️ Process flag, not a new ask:** identical specs have been delivered for SeatGeek/StubHub/Vivid/Gametime across prior cycles and **none have been built — all 4 are 404 in production today** (repo confirms only `/compare/page.tsx` exists). **Recommendation: stop generating new comparison-page specs until at least one ships.** Re-spec is motion without progress.

---

## Tracking Audit

| Check | Status |
|-------|--------|
| Signup event → DB | ✅ Firing — new users land in `/users` + `/activity` in real time (reconciled via dailies). |
| Watchlist-add event → DB | ✅ Firing — this week's adds present with user attribution. |
| Newsletter-subscribe | ⚠️ Write path historically intact (3 rows persist) but **no successful new conversion to validate**; non-homepage CTAs dead-end. |
| Price-comparison event | ❌ Unverifiable — client-side only, no server log, no GA. |
| Price-history cron write | 🚨 **Failing** — `price_history` empty 58 days. Highest-severity data gap. |
| `/api/admin/alerts` | 🚨 **Erroring** — returns `{"success":false,"error":"Failed to get alerts"}` (route/query bug, not just empty). |
| GTM container / UTM capture | ❌ Unverifiable from this agent (client-side; no GA API). Needs a manual browser spot-check or GA service-account key. |
| UTM structure across campaigns | ❌ Can't audit — paid isn't running and no analytics layer captures UTMs server-side. |
| GTM vs admin-API discrepancy | ❌ Can't compute — one side (GA) is unreadable. |

**New events to add (once GA is wired):** `target_price_set` (currently the invisible severed-alert step), `comparison_run`, `alert_email_clicked`. Until GA exists, prioritize **server-side** logging of `target_price_set` so question #4 above becomes answerable from the DB alone.

---

## Key Insights

1. **WC proximity is doing the acquisition work — and it has a six-day fuse.** The +600% signup week tracks the June-11 kickoff, not a durable channel improvement. Plan for a post-tournament cliff; the durable fixes (owned-channel capture, alerts) need to be live *before* the WC traffic leaves.
2. **The platform acquires intent it cannot retain.** 14 new high-intent users this week → 0 newsletter captures, 0 armed alerts, 0 emails sent. Every retention surface (email, drip, alerts) is offline simultaneously. Acquisition without a working retention layer is a leaky bucket at its widest.
3. **Analysis is not the bottleneck — shipping is.** The same blockers (empty price_history, no target prices, 404 comparison pages, severed newsletter) have been correctly diagnosed for *weeks*. Re-diagnosing them is the spiral. The week's most useful output is a short build list, not a longer report. See [[cro-weekly-converged-ship-not-analyze]].

---

## Recommendations for Next Week

- **Engineering (not a marketing team, but the true critical path):** (1) fix the price-tracking cron so `price_history` writes; (2) fix the erroring `/api/admin/alerts` route; (3) rotate + document a real `ADMIN_SECRET` so analytics agents can actually pull live. Nothing downstream compounds until #1 lands.
- **CRO team:** ship the **target-price modal / default suggestion at watchlist-add** — cheapest fix that arms the alert loop from the user side (127 items, 0 with targets). [[watchlist-no-targets-alerts-cant-arm]]
- **Email team:** add the **one-line opt-in checkbox** to the signup flow to stop bleeding owned-channel capture (14 users uncaptured this week). Do **not** force a drip send to fix the 0-sends metric.
- **Content team:** **build ONE** `ticketscan-vs-*` page (suggest Vivid Seats, fee-transparency lead) end-to-end before any new comparison spec is written. Four specs, zero pages = stop the spec treadmill.
- **SEO team:** capitalize on live WC group-stage demand now (real user adds confirm it); re-verify any "blocker" against git before escalating. [[seo-audit-stale-escalation-spiral]]
- **Social team:** post only verified facts (teams/dates/venues) for WC + Ariana Grande NYC run; **no price/savings figures** (price feed returns null prices). [[social-agent-price-ledger-fabrication]]
- **Growth team:** ride WC acquisition but pull stats fresh each run; never invent visit/segment data (no `last_login` exists). [[growth-agent-spiral]]
- **Paid team:** still blocked at account setup — write the short honest "$0 / not live" status, don't fabricate spend. [[paid-ads-agent-spiral]]

---

### Unresolved-issue tracker (carried, not re-escalated)
| Issue | Days open | Owner |
|-------|-----------|-------|
| `price_history` empty / cron not writing | 58+ | Engineering |
| `/api/admin/alerts` erroring | ongoing | Engineering |
| Drip campaign 0 sends | 58+ | Email |
| Newsletter signup→subscribe severed | ~123 | CRO/Email |
| 0 watchlist items with target_price | ongoing | CRO |
| 4× `ticketscan-vs-*` pages 404 (specs delivered) | multi-cycle | Content |
| No GA4 Data API / no live `ADMIN_SECRET` for agents | ongoing | Engineering |

_All status above is reconciled from this week's daily dashboards, not a fresh live admin pull (production key unavailable to the agent). Numbers that depend on GA/GTM are left blank rather than estimated._
