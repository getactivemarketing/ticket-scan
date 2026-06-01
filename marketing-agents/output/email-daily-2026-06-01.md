# Email Daily — 2026-06-01

> **Day 56 of SMTP/drip outage. Day 120 newsletter flatline. Day 125 of 100% null `target_price` (115/115).** First report after a **9-day reporting gap** (last daily: May 22). The arithmetic position is unchanged in shape but worse in magnitude: **93 users, 0 drip emails ever sent, 0 alerts ever triggered, 3 newsletter subscribers (2 of them test rows; last organic signup Feb 1).** Today is a **dual-Tier-0 day**: **coleesparrago's Don Toliver (Toronto, Jun 5, 4 days out)** and **officialrizk72's NBA Finals Knicks GM1 (MSG, Jun 8, 7 days out)** — both owned by 2-day-old accounts, both null-target, both drip-incompatible by signup recency. Today's threshold crossings: **4 silent** (E1 ×2: coleesparrago 22:25, mattfleischer4 15:44; E3 ×2: eduardo 00:48, 9440111 19:09). The probes are identical to Day 46: `drip-run` dry-probe → HTTP 000 after 35s; `drip-health` → 404.

## Drip Campaign
- Emails sent (24h): **0**
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 logged (no sends attempted)
- `/api/admin/drip-stats` still returns `stats: []` after **Day 56.** **93 of 93 users have never received a drip email.**
- **Probe today (Day 56):** `POST /api/admin/drip-run?limit=1&dryRun=true` → **HTTP 000 after 35.15s** (timeout). **Identical failure shape to Days 11–46.** No diagnostic movement in 8 weeks. Even the dry-run path hangs — this is not an SMTP-credential symptom alone; the handler itself never returns, pointing at a synchronous blocking call (likely `transporter.verify()` or an un-timed-out per-user send) at the top of the route before any dry-run branch.
- `/api/admin/drip-health` probe → `404 "Endpoint not found"`. **Day 25 of that ask unmet** (P0 since May 7). Available endpoints surfaced by the 404 confirm no health/diagnostic route has shipped.

### Eligibility breakdown (20 most-recent returned by `/drip-stats`)
| Threshold | Days | Count today | Note |
|-----------|------|-------------|------|
| E1 | ≥3d | **19 of 20** | only officialrizk72 (2d) below; coleesparrago + mattfleischer4 cross E1 today |
| E2 | ≥7d | **15 of 20** | unchanged threshold; 5 newest below 7d |
| E3 | ≥14d | **12 of 20** | 9440111 + eduardo cross E3 today |
| E4 | ≥21d | **1 of 20** | jmoriarty13 (22d) crossed E4 May 30 silent |
| E5 | ≥30d | **0 of 20** | oldest visible record is 22d — cap still hides everything older |

**Visible backlog (in returned 20):** 19 E1 + 15 E2 + 12 E3 + 1 E4 = **47 emails owed in the pendingUsers cohort** (was 43 on May 22). The `/drip-stats` cap still truncates at the 20 most-recent and the oldest visible record is **jmoriarty13 at 22 days** — every user older than that (the entire Jan–early-May graveyard cohort, dozens of accounts visible in the watchlist table back to Jan 29) is invisible to this endpoint while remaining at 0 sends. **True backlog ≈ 110+ owed sends.**

### Today's threshold crossings (Jun 1) — all silent
| Time (UTC) | User | Threshold | Pattern | Notes |
|------------|------|-----------|---------|-------|
| 00:48 | **eduardo** | **E3** | B (0 watchlist) | multi-threshold E1+E2+E3 silent; 14-day backlog |
| 15:44 | **mattfleischer4** | **E1** | Tier-2/3 (WC R16 ×2 @ Arthur Ashe, Sep) | first canonical email, silent |
| 19:09 | **9440111** | **E3** | B (0 watchlist) | multi-threshold E1+E2+E3 silent |
| 22:25 | **coleesparrago** | **E1** | **Tier-0 / drip-incompatible** (Don Toliver Jun 5) | E1 fires today, event in 4 days — only the welcome lands before the show |

### Tomorrow's forecast crossings (Jun 2)
| Time (UTC) | User | Threshold | Pattern | Notes |
|------------|------|-----------|---------|-------|
| 00:10 | officialrizk72 | E1 | **Tier-0** (NBA Finals GM1 Jun 8) | E1 fires 7 days before event; full cadence still incompatible |

### Forecast Jun 3–5
- **Jun 3**: brockedwardnelson → E3, zhouyilinbest → E3, keegansmith18 → E3 (the May 20 three-signup cohort produces a synchronous 3-user E3 wave 14 days later — same cohort-effect mechanic flagged May 22)
- **Jun 4**: samvirsujan → E2, pika4696 → E2
- **Jun 5**: Don Toliver event day (coleesparrago) — Tier-0 window closes

## Price Alerts
- Alerts triggered (24h): **0**
- Active alerts: **0**
- Triggered alerts (all time): **0**
- **Day 125 of 100% null-on-add. 115/115 watchlist items have a null `target_price`** (was 108/108 on May 22; +7 adds in 10 days, all null). **No user has ever set a target price.** The alert engine has nothing to compare against, so even a full SMTP restore produces **zero** alert emails until the target-price UX ships.
- **Today's cost frame:** both Tier-0 events (Don Toliver Jun 5, NBA Finals GM1 Jun 8) are null-target adds. The interlock is absolute — alert capability is gated on target_price, target_price is 100% null, and these are the highest-intent events on the platform right now (4 and 7 days out).

## Subscriber Growth
- New subscribers (24h): **0**
- Unsubscribes (24h): **0**
- Net: **0**
- Total active: **3** (`roos_leeuwen` homepage Feb 1; `samir.sgpatel` test Jan 27; `test@example.com` api-test Jan 4)
- **Stall duration: 120 days** since the last organic signup (`roos_leeuwen`, 2026-02-01).
- **Of 3 "subscribers," only 1 is a real organic capture.** Against +5 new *registered users* this week, the newsletter surface captured **0**. This is the [[newsletter-conversion-rootcause]] failure persisting: the signup form lives only on the homepage; blog and footer CTAs are dead-end redirects, so registration traffic never reaches a working capture form. **120 consecutive days flat** regardless of acquisition volume.

## Platform Context
- Total users: **93** (was 88 on May 22 → **+5 in 10 days**, ~0.5/day)
- Users today (rolling 24h): **0** (last signup officialrizk72, May 30 00:10 UTC)
- Users this week (rolling 7d): **5**
- Watchlist items: **115** (was 108 → +7)
- Past-dated watchlist items: **48 of 115 (41.7%)** — flat vs. May 22 (45/108, 41.7%). The bloat ratio is structurally stuck near 42%; oldest dead item is a Jan 29 Nuggets/Nets game. Fix unchanged: `status` column + auto-expiry cron.
- Empty-watchlist cohort: **36 of 93 (38.7%)** — 57 unique users hold watchlist items; 36 registered users track nothing.
- Favorites: 0 | Active alerts: 0 | Triggered alerts: 0

---

## Watchlist Digest Prep — Tier-Compressed (anchored to Jun 1)

### TIER 0 — Last-Realistic-Intercept (≤7 days)
| Event | Date | Days Out | User | Days on Platform | Drip Stage | Note |
|-------|------|----------|------|------------------|------------|------|
| **Don Toliver: Octane Tour** (Scotiabank Arena, Toronto) | Jun 5 | **4** | coleesparrago | 2 | E1 fires today 22:25 silent | **Drip-incompatible.** Only the welcome can land pre-show. Manual single-send: welcome + Toronto resale read, today. |
| **NBA Finals: Knicks RD4 GM1** (MSG) | Jun 8 | **7** | officialrizk72 | 2 | pre-E1 (fires Jun 2 00:10) | **Drip-incompatible.** E1 fires 6 days before the game; canonical cadence never catches up. Manual welcome + Finals-resale-curve read. |

### TIER 1 — Mid-Window (8–21 days)
| Event | Date | Days Out | User | Days on Platform | Drip Stage |
|-------|------|----------|------|------------------|------------|
| **Noah Kahan: The Great Divide Tour** | Jun 12 | 11 | cjthomas2557 | ~25 | E1+E2+E3 silent (hidden beyond cap) |
| **WC Match 11 (Netherlands), MetLife/AT&T cluster** | Jun 14 | 13 | **kevinshall87** | ~29 | Pattern A++ — E1+E2+E3 silent |
| **WC Match 9 (Ivory Coast)** | Jun 14 | 13 | **pete.uzelac77** | ~52 | longest-silent WC user — full traversal silent |
| **NBA Finals Knicks GM3** ×3 | Jun 16 | 15 | officialrizk72 / samvirsujan / joseph.g.nicolosi | 2 / 4 / ~5 | E1-stage or pre-E1 |
| **JOJI: SOLARIS** (Prudential) | Jun 16 | 15 | lisallam | 14 | E1+E2 silent; E3 crossed May 31 |
| **WC Match 22 (England)** | Jun 17 | 16 | kevinshall87 | ~29 | Pattern A++ cluster |
| **WC Match 29 (Brazil)** | Jun 19 | 18 | pete.uzelac77 | ~52 | WC cluster |

**Tier-1 is no longer empty** (it was a 2-day empty bucket on May 22). The Jun 11–19 World Cup kickoff window is now pulling the AT&T/MetLife and Lincoln Financial clusters (kevinshall87, pete.uzelac77) into the actionable mid-window. **This is the single highest-leverage digest tier on the platform** — real events, 11–18 days out, owned by long-tenured silent users. Every one is drip-arrears + null-target.

### TIER 2 — Long-Lead Canonical (22–62 days) — 25 items
- **WC knockout clusters**: karin_ef1 (Switzerland Jun 24 + R16 Jul 7, BC Place — Pattern A++), kevinshall87 (Japan Jun 25 + R16 Jul 6 + SF Jul 14), pete.uzelac77 (Croatia Jun 27 + R16 Jul 4 + Darts ×2 — Lincoln Financial)
- **brigitte.theisen — Backstreet Boys ×11 dates (Jul 16 → Aug 6)**: new high-density single-user cluster (11 watchlist rows, same tour). Pattern A canonical, long-lead. **Highest-volume single-user watchlist on the platform.**
- laye.aurelien — Shakira ×2 (Jul 20/23); samueltrogers — Alan Jackson (Jun 27); lvasub6 / krusesin2023 — Flyleaf ×2 each (Jul 17/18)

### TIER 3 — Long-Long-Lead (63+ days) — 31 items
- **Harry Styles MSG cluster**: cutekitten1234 ×7 + **tosophiameyer ×10** (Aug 26 → Sep 16). tosophiameyer is a new Pattern A++ candidate (10-date single-venue cluster). Pattern A++ trio (kevinshall87 / karin_ef1 / cutekitten1234) is now plausibly a **quartet** pending source-data confirmation on tosophiameyer.
- Bruno Mars ×3 (taranimeramaro), Ed Sheeran SoFi (blubberboi), Matt Rife (kevinshall87), Olivia Dean, Avenged Sevenfold, Motionless In White ×2, mattfleischer4 WC R16 ×2 (Arthur Ashe Sep)

### TIER 4 — Apology / Catch-Up (event already passed, user never emailed)
**48 past-dated items across the graveyard.** Highest-leverage recoveries where a *future* asset still exists for the same user:
- **laye.aurelien** — Shakira still upcoming (Jul); recoverable.
- **kevinshall87 / pete.uzelac77 / karin_ef1** — WC future-heavy; no dead events, all forward.
- Pure apology-only (all events past, no forward asset): konman87 (Bruno Mars ×3, last May 17), charlesteel126 (Bruno Mars May 20), belder4308 (SEC Baseball, May 21/22), zhouyilinbest (Thunder/Spurs May 22), joshdguillemette (AEW May 24), ajvanprooyen (Cubs ×6, all past), sparkitrightthere, liambot62, nicklib253, bhaygood728, goldy.pec.2012.

### TIER 5 — Drip-Incompatible by Design (signup <72h pre-event)
- **coleesparrago** (Don Toliver Jun 5) — new today
- **officialrizk72** (NBA Finals GM1 Jun 8) — new today
- Historic: zhouyilinbest, belder4308, sparkitrightthere, liambot62 (all events now past)

**2 of the 3 most-recent signups (officialrizk72, coleesparrago) are Tier-5 drip-incompatible.** The case for a real-time welcome triage at signup (W0-A/B/C architecture) is reinforced — the canonical 3/7/14/21/30 cadence mis-serves every short-fuse high-intent signup.

---

## Subject Line A/B Tests (today's queue, for send the moment SMTP returns)

| Send | A (recommend) | B |
|------|---------------|---|
| **coleesparrago / Don Toliver Jun 5 (Tier-0, event in 4d)** | `Don Toliver at Scotiabank is 4 days out — here's how Toronto resale usually moves this week.` | `Welcome — your Don Toliver tickets, and the 72-hour pricing pattern for Toronto arena shows.` |
| **officialrizk72 / NBA Finals GM1 Jun 8 (Tier-0, 7d)** | `Knicks Finals Game 1 at MSG is 7 days out — the resale curve for Game 1 vs Game 3, inside.` | `Welcome — you're tracking 2 Finals games at MSG. Here's when each one usually bottoms out.` |
| **kevinshall87 / WC AT&T+MetLife cluster (Pattern A++, Match 11 in 13d)** | `Your first World Cup match is 13 days out — we owe you 3 emails. Here's the one that matters now.` | `Netherlands + England + the knockout cluster — multi-threshold catch-up, AT&T pricing read inside.` |
| **pete.uzelac77 / WC Lincoln Financial cluster (longest-silent WC, Match 9 in 13d)** | `Your World Cup window opens in 13 days — the "don't buy in June" read is now or never.` | `Ivory Coast, Brazil, Croatia + R16 + Darts — 52 days of silence from us, and the resale read you're owed.` |
| **cjthomas2557 / Noah Kahan Jun 12 (Tier-1, 11d)** | `Noah Kahan is 11 days out — we owe you 3 emails. Here's the Kia Center pricing arc.` | `11 days to The Great Divide Tour — multi-threshold catch-up + the read.` |
| **lisallam / JOJI Jun 16 (Tier-1, 15d)** | `JOJI at Prudential is 15 days out — here's how Newark pricing usually moves from here.` | `15 days to SOLARIS — your catch-up + the Prudential resale read.` |
| **brigitte.theisen / Backstreet Boys ×11 (new high-volume cluster, Jul 16+)** | `You're tracking 11 Backstreet Boys nights — here's the same-tour pricing arc across all of them.` | `11 dates, one tour — the cluster pricing read (and which night usually bottoms out cheapest).` |
| **eduardo + 9440111 / E3 silent today (Pattern B, 0 watchlist)** | `Two weeks in, nothing tracked yet? Pick 1 event and we'll do the price-watching for you.` | `Day 14 — 3 events trending on TicketScan right now. Add one, we handle the rest.` |
| **Pattern B-at-E1 (mattfleischer4 has watchlist; pure-B newest signups)** | `Day 3 on TicketScan — the fastest way to test us is to track 1 event.` | `Welcome — here's how to get the most out of TicketScan in your first week.` |
| **Apology-only graveyard (konman87, charlesteel126, ajvanprooyen, joshdguillemette)** | `We owe you an apology — and a real post-event read. Here's what we should have sent.` | `Your event passed and we went quiet. Here's the catch-up, honestly.` |

**CTA conformance:** ~70% route to top-level pages (homepage/watchlist); ~30% event-specific deep-links, justified by Tier-0 proximity (Don Toliver, NBA Finals), multi-event clusters (kevinshall87, brigitte.theisen, pete.uzelac77), or >21-day catch-up. Primary CTA above the fold in every template. **Note:** the digest CTA target ("View your watchlist") is the one capture surface confirmed working — unlike the broken blog/footer newsletter CTAs.

---

## Action Items

### P0 — Critical
1. **SMTP / drip pipeline — DAY 56 (8 weeks).** Dry-run probe still hangs to HTTP 000 — the handler blocks *before* the dry-run branch returns. Recommended fix sequence (carried, unchanged): (a) move/remove any top-of-route `transporter.verify()`; (b) regenerate the Gmail app-specific password; (c) verify Railway egress on port 587; (d) wrap the per-user send loop in `Promise.allSettled` with a per-user timeout; (e) make `?dryRun=true` short-circuit *before* any network call so the route can at least return. **Re-test dry-run first.** 8-week cost: 93 users, 0 sends, ~110+ owed; the Jun 11 World Cup kickoff is the hardest deadline — kevinshall87/pete.uzelac77/karin_ef1 clusters become un-recoverable as each match passes.
2. **Tier-0 manual sends — TODAY.** coleesparrago (Don Toliver, 4d) and officialrizk72 (NBA Finals GM1, 7d) cannot be served by canonical drip. Compose two single-send welcome+resale-read emails and send via whatever path is available. Time-critical: Don Toliver window closes Jun 5.
3. **Target-price UX — DAY 125.** 115/115 null. Until an inline target-price suggestion ships on watchlist-add, the alert engine produces 0 emails even with SMTP fully healthy. Spec: auto-suggest a target at add-time (e.g. current min × 0.9) so the field is never null.

### P1 — High
4. **Newsletter capture is structurally broken — DAY 120.** [[newsletter-conversion-rootcause]]: form only on homepage; blog/footer CTAs dead-end. +5 registered users this week → 0 newsletter captures. Fix the footer/blog CTA to point at a working subscribe form (or inline the form). This is the single cheapest conversion fix on the board.
5. **`/drip-stats` pagination — DAY 25 of cap regression.** Endpoint truncates at 20 most-recent (oldest visible 22d). The entire Jan–early-May graveyard cohort (40+ accounts, all 0-send) is invisible to ops. Add `offset` or raise the cap to 100.
6. **`/api/admin/drip-health` — DAY 25 unmet.** Ship `GET /api/admin/drip-health → {smtp, db, lastSendAt, pendingCount}` so the outage is observable without a 35s timeout probe.
7. **Past-event watchlist cleanup — 41.7% bloat (48/115).** Dead items back to Jan 29 still counted. Add `status` column + auto-expiry cron.
8. **Reporting cadence — 9-day gap (May 23–31).** The daily email report stopped after May 22 and resumed today. Re-verify the launchd/cron job that drives this agent; silent reporting gaps compound every downstream consequence.

### P2 — Medium
9. **W0-A/B/C real-time welcome triage at signup.** 2 of 3 most-recent signups are Tier-5 drip-incompatible. Branch the welcome on watchlist-state + nearest-event-proximity at signup, gated behind the SMTP fix.
10. **Pattern A++ — possible quartet.** New candidate **tosophiameyer** (Harry Styles MSG ×10, single-venue cluster) matches the kevinshall87/karin_ef1/cutekitten1234 profile. Pull referrer/source data on all four; test whether they share a venue/tour-specific acquisition surface.
11. **Viva El Jaripeo post-mortem — 37 DAYS OVERDUE** (event Apr 25).

---

## Handoff → Analytics Agent (Agent 7)
- **Subscriber total:** 3 active (only 1 organic), 0 net change. **120 consecutive days flat.** Newsletter capture = 0 against +5 registered users this week → structural, not volume-driven ([[newsletter-conversion-rootcause]]).
- **User signups (10d):** +5 (88 → 93), ~0.5/day; 0 in last 24h.
- **New watchlist items (10d):** +7 (108 → 115), all null-target.
- **Drip pipeline:** UN-SHIPPED. **Day 56.** 0 sends ever; 93/93 users never emailed. Backlog ≈ 47 visible + ~63 hidden ≈ **110+ owed.**
- **Threshold crossings today (Jun 1):** 4 silent — eduardo E3, 9440111 E3, mattfleischer4 E1, coleesparrago E1.
- **Threshold crossings tomorrow (Jun 2):** 1 — officialrizk72 E1. Jun 3 brings a 3-user synchronous E3 wave (brock/zhou/keegan, the May 20 cohort).
- **Price alerts:** 0 ever triggered. **115/115 null target_price. Day 125.**
- **Watchlist tiers:** T0=2, T1=7+, T2=25, T3=31, Past=48 (41.7%). Tier-1 is now populated by the Jun 11 World Cup kickoff window — highest-leverage tier on the platform.
- **Highest-density single-user clusters:** brigitte.theisen (Backstreet Boys ×11), tosophiameyer (Harry Styles ×10), pete.uzelac77 (WC + Darts ×7) — all 0-send, all null-target.
- **Most useful single observation today:** the **World Cup kickoff (Jun 11) is now inside the Tier-1 window**, which means the platform's longest-tenured, highest-value silent users (kevinshall87, pete.uzelac77, karin_ef1) hit their hardest-deadline events in 13–18 days — and the drip + alert + newsletter systems that should be working those users are all at zero on Day 56/Day 120/Day 125 simultaneously. The WC window converts the outage from "accumulating backlog" to "expiring inventory."
