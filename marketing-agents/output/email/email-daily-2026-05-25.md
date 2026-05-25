# Email Daily — 2026-05-25

> **Day 49 of SMTP outage. Probe HTTP 000 40s timeout — 5th consecutive baseline-failure cycle (Day 41/42/43/44/49).** **Report gap: no daily output May 21-24 — five days unattended.** During the gap, every forecast crossing from the May 20 report fired silent and every Tier-0 event aged past unintercepted. **Confirmed silent: charlesteel126 Bruno Mars Columbus event-day (May 20), belder4308 SEC Baseball Sessions 5 & 6 (May 21-22), joshdguillemette AEW Double or Nothing event-day (May 24 — Pattern A full-traversal silent-through-event REALIZED), lisallam E1 (May 20 14:05 UTC, cleanest canonical fit lost), zhili1208 E4 (Pattern B 4-cross SECOND instance — NEW CLASS now repeating), eduardo E1, karin_ef1 E2 (Pattern A++ 2-cross at E2 SECOND instance), vlanza E2, 9440111 E1, mark.murdock E5 (May 23 — third full-traversal silent send).** **Total: 11 silent crossings during the gap, including 1 full-traversal-completion (mark.murdock) and 2 Tier-0 events fully aged past silent.** **5-day signup drought** — last 3 signups all on May 20 (brockedwardnelson, zhouyilinbest, keegansmith18); zero signups May 21-25. **88 total users, +3 vs May 20.** **108 watchlist items, +1 vs May 20** (zhouyilinbest's NBA Western Conf Finals — already aged past). **Past-event share now 48/108 (44.4%) — up from 40.2% on May 20**, the largest single-period ratio jump in the report stream as 5 days of Tier-0 events crossed the past line. **Day 118 of 100% null-target streak (108/108). Day 113 of newsletter flatline.** **No events in any user's watchlist within the next 7 days for the first time in the report stream** — the entire Tier-0 layer has emptied through unintercepted event aging.

## Drip Campaign
- Emails sent (24h): **0**
- Emails sent (5d gap May 21-25): **0**
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 logged (no sends attempted)
- `/api/admin/drip-stats` returns `stats: []` after **Day 49.** **88 of 88 users have never received a drip email** (every user's `last_email_sent: 0`).
- **Probe today (Day 49):** `POST /api/admin/drip-run?limit=1&dryRun=true` returned **HTTP 000 (gateway timeout at 40.07s)** — **5th consecutive baseline-failure cycle (Day 41/42/43/44/49).** The probe behavior remains fully stable at "hangs until gateway cutoff." **Five cycles now confirm the May 16 HTTP 502 was a single-cycle transient. The diagnostic surface produced exactly once in 38 days has not returned.**
- **Asks for engineering (urgency reordered Day 49):**
  1. **Railway log-pull window for 2026-05-16 10:30-10:42 UTC is now ~9.4 days old.** **This ask is presumed infeasible** unless Railway retains beyond standard ~72h. Recovery probability ≈ 0 unless engineering paid for extended retention. **Stop relying on this as the primary diagnostic path.**
  2. **Permanently wrap the `/api/admin/drip-run` handler in `try { ... } catch (e) { log; return res.status(500).json({error: e.message, stack: e.stack}) }`.** **This is now the SINGULAR remaining path back to root-cause visibility.** Each additional outage day extends the cost of not having this wrap, while five consecutive 000-timeout cycles confirm the failure mode is stable and reproducible the moment the wrap ships.
  3. Check Railway service status / restart history for May 15-16 and any restarts in the past 9 days that might have produced new transient diagnostic surfaces — five cycles confirm whatever produced the 502 was not a permanent state.
- `/api/admin/drip-health` → still `404 "Endpoint not found"`. **Day 18 of that ask unmet** (P0 since May 7). Probe today confirmed 404 again with full `availableEndpoints` payload listing only `/api/test/ticketmaster`, `/api/test/seatgeek`, `/api/search`, `/api/setup/database`, root `/`. **The admin namespace remains absent from the route table for this endpoint name.**

### Eligibility breakdown (20 most-recent returned by `/drip-stats`)
| Threshold | Days | Count today | Δ vs May 20 |
|-----------|------|-------------|-------------|
| E1 | ≥3d | **20 of 20** | unchanged |
| E2 | ≥7d | **17 of 20** | +4 (5 days aged in — eduardo, lisallam, 9440111 now E2-eligible; karin_ef1, vlanza past E2 silent during gap) |
| E3 | ≥14d | **8 of 20** | +5 (jadbennis0, jmoriarty13, emmacmather, kevinkid94, jfgalzin all aged into E3 during gap) |
| E4 | ≥21d | **0 of 20 visible** | unchanged (hidden cohort holds the E4 mass) |
| E5 | ≥30d | **0 of 20 visible** | unchanged at zero |

**Truncation horizon at 20 holds.** **Hidden cohort grows to ≥18-20 users** with mark.murdock now full-traversal silent (E5 fired May 23) joining dr.altvater + joshdguillemette as confirmed full-traversal cases. **Day 19 of API-cap regression** — the cap now hides all 3 confirmed full-traversal completions and the entire E3+E4 deep tail.

### Threshold crossings confirmed silent during May 21-25 gap (10 confirmed silent + 0 forecast pending)
| Date | User | Threshold | Pattern | Channel | Notes |
|------|------|-----------|---------|---------|-------|
| **May 20 ~14:05 UTC** | **lisallam** | **E1** | **Pattern A canonical (cleanest fit)** | **silent confirmed** | The cleanest canonical Pattern A signup in the backlog. JOJI Newark Jun 16 still 22 days out today — restoration still possible at E2 (May 24 silent) framing. |
| **May 20 ~variable UTC** | **zhili1208** | **E4** | **Pattern B 4-cross at E4 (SECOND instance — CLASS NOW REPEATING)** | **silent confirmed** | Converts NEW CLASS (lilianamasyrubi) from "first ever" to "first repeating class" within 1 day. |
| **May 20 ~event-day** | **charlesteel126** | **Bruno Mars Columbus** | **Tier-0 silent-through-event REALIZED** | **silent through event** | Third real-time Pattern A loss-in-progress completion in the report stream (after konman87, jadbennis0). Now post-event sunset only. |
| **May 21 00:48 UTC** | **eduardo** | **E1** | **Pattern B-at-E1 (8th)** | **silent confirmed** | |
| **May 21 06:46 UTC** | **karin_ef1** | **E2** | **Pattern A++ 2-cross at E2 (SECOND instance — CLASS NOW REPEATING)** | **silent confirmed** | Second NEW CLASS converted to repeating within 3 days of activation. |
| **May 21 13:20 UTC** | **vlanza** | **E2** | **Pattern B 2-cross at E2** | **silent confirmed** | |
| **May 21 19:09 UTC** | **9440111** | **E1** | **Pattern B-at-E1 (9th)** | **silent confirmed** | |
| **May 21-22 event-day** | **belder4308** | **SEC Sessions 5 & 6** | **Tier-0 E1-after-event silent-through-event** | **silent through events** | E1 already silent before event; both Tier-0 sessions completed unintercepted. Now post-event sunset. |
| **May 23 ~variable UTC** | **mark.murdock** | **E5** | **Pattern B full-traversal silent send (THIRD instance — NEW CLASS now thrice-repeating)** | **silent confirmed** | Third full-traversal silent send completion. Dr.altvater (P-B), joshdguillemette (P-A variant), mark.murdock (P-B) — full-traversal class is now structurally established as a recurring failure mode of the SMTP outage. |
| **May 24 event-day** | **joshdguillemette** | **AEW Double or Nothing** | **Pattern A full-traversal silent-through-event REALIZED** | **silent through event** | Tactical-fit watchlist item completed past event with E1-E5 all silent. The Pattern A full-traversal class's tactical leg now also silent-through-event. **No more event-side decay risk** on this user. |

### Today's threshold horizon (next 24-72h)
| Date | User | Threshold | Pattern | Channel | Notes |
|------|------|-----------|---------|---------|-------|
| **May 25-26 (today/tomorrow)** | brockedwardnelson | E1 | Pattern B-at-E1 (Day 5) | **silent forecast** | 10th confirmed P-B-at-E1 instance if not restored by May 27. |
| **May 25-26** | zhouyilinbest | E1 | Pattern B-at-E1 + immediate-event loss (Day 5, 1 wl Western Conf Finals already past May 22) | **silent forecast** | NBA event aged past at Day 2 of platform tenure — Pattern A loss-in-progress completed at signup window. |
| **May 25-26** | keegansmith18 | E1 | Pattern B-at-E1 (Day 5, 0 wl) | **silent forecast** | 11th confirmed P-B-at-E1 instance. |

**Visible backlog (in returned 20):** 20 E1 + 17 E2 + 8 E3 + 0 E4 visible + 0 E5 visible = **45 emails owed in pendingUsers cohort** (+9 vs May 20's 36 — the gap aged 5 days of crossings into the visible window). Plus hidden cohort (≥18-20 users including mark.murdock as new full-traversal completion). **True backlog ≈ 95+ emails across all eligible users** (+10 vs May 20's 85+).

## Price Alerts
- Alerts triggered (24h): 0
- Alerts triggered (5d gap): 0
- Active alerts: 0
- Triggered alerts (all time): 0
- **Day 118 of 100% null-on-add. 108/108 watchlist items have null `target_price`.** **5 consecutive zero-add days (May 21-25).** The one new item during the gap (zhouyilinbest's NBA Western Conf Finals, added May 20 19:00 UTC) was already past-dated by May 23. **The spec-validation surface is now hyper-saturated — 19 high-intent items captured null in the report stream's history with zero offsetting velocity for five days.**

## Subscriber Growth
- New subscribers (24h): 0
- New subscribers (5d gap): 0
- Unsubscribes (24h): 0
- Net: 0
- Total active: 3 (unchanged — roos_leeuwen, samir.sgpatel, test@example.com)
- **Stall duration: 113 days** since last organic newsletter signup (roos_leeuwen, 2026-02-01). **Day 20 of consecutive zero-capture days.** **0 user signups in last 5 days / 0 newsletter signups in same window.** **+3 user signups in last 10 days (all May 20) / 0 newsletter signups in same window.** Cross-channel structural break holds for 20th consecutive day. **Footer regression Day 29; popup spec Day 25 unbuilt.**

## Platform Context
- Total users: **88** (+3 vs May 20; all 3 signed up May 20 — brockedwardnelson, zhouyilinbest, keegansmith18)
- Users today (rolling 24h): **0** — **5th consecutive zero-signup 24h window**
- Users this week (rolling 7d): **4** (per `/admin/stats` — the 3 May 20 signups + 9440111 from May 18)
- Watchlist items: **108** (+1 vs May 20 — zhouyilinbest NBA, now past)
- Past-dated watchlist items: **48 of 108 (44.4%)** — **up sharply from 43/107 (40.2%) on May 20.** Five days of unintercepted Tier-0 events aged past during the gap: Bruno Mars Columbus (May 20), SEC Sessions 5 & 6 (May 21-22), NBA Western Conf Finals (May 22), AEW (May 24). **The largest single-period ratio jump in the report stream's history.**
- Favorites: 0
- Active alerts: 0
- Triggered alerts: 0

## New-Signup Pattern Analysis — 5-day cohort (May 20)

**All 3 May 20 signups happened within a 2h18m window (17:39-19:58 UTC) — a tight burst followed by 5 days of nothing.** This is the first multi-signup-burst-then-silence pattern in the report stream.

| User | Signed up | Days | Watchlist | Pattern | Note |
|------|-----------|------|-----------|---------|------|
| brockedwardnelson | May 20 19:58 UTC | 5 | 0 | Pattern B (0 wl, Day 5 silent) | E1 fires May 23 14:58 UTC → already 48h past silent today. |
| zhouyilinbest | May 20 19:00 UTC | 5 | 1 (NBA Western Conf Finals, event May 22 — already past at Day 2) | Pattern A loss-in-progress (event aged past during onboarding) | Highest-decay shape: signup at T-2 days to event, item aged past before E1 even due. Now post-event sunset on his single watchlist item. |
| keegansmith18 | May 20 17:39 UTC | 5 | 0 | Pattern B (0 wl, Day 5 silent) | E1 fires May 23 13:39 UTC → already 48h past silent today. |

**Updated pattern mix across rolling 10 signups (May 12 → May 20):** kevinshall87, pattyglvz, c_calingasan, karin_ef1, vlanza, nunemakerc, belder4308, cutekitten1234, lisallam, eduardo, 9440111, keegansmith18, zhouyilinbest, brockedwardnelson — **the rolling-10 window now spans 13 days** because of the signup drought.

- **Pattern A++ canonical: 4 of 10 (40%)** — kevinshall87, karin_ef1, cutekitten1234, belder4308. **A++ density held at 40% — now 9 consecutive days at this rate** (4 days at 40% as of May 20 + 5 days of zero-signup = held by absence). **The pulse hypothesis is structurally untested by 5 days of zero signups; the rolling-10 read is functionally frozen.**
- **Pattern A: 1 of 10 (10%)** — lisallam. **Held from May 20 (8 days).**
- **Pattern B forming/confirmed: 4 of 10 (40%)** — 9440111, eduardo, nunemakerc, vlanza (c_calingasan now aged out as window shifted).
- **Pattern A loss-in-progress: 1 of 10 (10%)** — zhouyilinbest (NEW SHAPE: event aged past during onboarding window; first time this shape appears in the rolling-10).
- Drip-incompatible (past-event-at-signup): 1 of 10 (10%) — **first non-zero drip-incompatible signup in 17 days** (zhouyilinbest's only watchlist item aged past at Day 2 of platform tenure).

**Confirmation gate ("3 of next 5 signups A++") progress: 0 of 3 in the 3-signup gap cohort.** **One more non-A++ signup falsifies the hypothesis.** **The 2h18m signup-burst-then-drought pattern itself contradicts the "high-quality acquisition pulse" hypothesis** — pulses don't behave like this. **Tentatively: pulse hypothesis falsified by behavior signature, awaiting one more signup for formal confirmation.**

---

## Three Full-Traversal Silent Send Class Now Structurally Established

**As of mark.murdock's May 23 E5 silent crossing, the full-traversal silent send class is now thrice-repeating.** dr.altvater (P-B, May 19), joshdguillemette (P-A variant, May 19), mark.murdock (P-B, May 23) — three instances in 5 days. **Per the prior framing: "first ever" → "first repeating" → now "structurally established failure mode."**

### mark.murdock — third full-traversal silent send (May 23 E5)
- E1+E2+E3+E4+E5 ALL silent. Day 31 today, 0 wl.
- **Template operational (carry-over from dr.altvater pattern):**
  - Subject A: `Four-plus weeks, five missed emails, and we still haven't said hi — let's actually start over.`
  - Subject B: `31 days on TicketScan, 5 silent sends, here's the clean restart you deserve`
  - CTA: `/dashboard` (event-discovery; 0 wl means no deep-link possible).
- **Strategic note:** mark.murdock joins dr.altvater as second 0-watchlist full-traversal case. Both share template framing. **Next escalation:** awwhittington, ggri73 (~33d each, 0 wl) — both could become 4th/5th full-traversal instances within ~3-5 days if SMTP not restored.

### joshdguillemette — Pattern A full-traversal silent-through-event REALIZED (May 24)
- E1+E2+E3+E4+E5 ALL silent. AEW event past on May 24. **Tactical leg has now also failed.**
- **Template must update from "catch-up before AEW" to "post-event apology + next-event discovery":**
  - Subject A: `AEW Double or Nothing was last night — and we still haven't said hi after 5 weeks. Here's the real restart.`
  - Subject B: `36 days, 5 silent sends, 1 missed AEW night — a real apology + your next move`
  - CTA: `/dashboard` (no future-fit deep-link remaining on this user).
- **Status now identical to konman87's post-event sunset class** structurally, just with full-traversal added. **The Pattern A variant of full-traversal silent-through-event is the highest-value-loss case in the report stream's history.**

### dr.altvater — historic upper-bound case, Day 12 invisible
- Subject A locked permanently from May 19 ("five missed emails" anchor doesn't decay).
- Day-count axis in Subject B shifted: was "28 days," now "33 days." Subject A remains dominant variant.

---

## Watchlist Digest Prep — Tier-Compressed

### Past-Event Cleanup
**48 of 108 (44.4%) past-dated** at report time. **+5 items aged past during May 21-25 gap** — Bruno Mars Columbus (charlesteel126), SEC Sessions 5+6 (belder4308 ×2), NBA Western Conf Finals (zhouyilinbest), AEW Double or Nothing (joshdguillemette). **The auto-archive cron remains unshipped — Day 42 of unaddressed P1 ask.** **Today's specific cost:** past/future signal/noise ratio degraded to **1:1.25** (48 past : 60 future) — first time in the report stream's history the past side outweighs the future side. **The future side is now the minority.**

### TIER 0 — Last-Realistic-Intercept (within 7 days)
| Event | Date | Days Out | User | Days on Platform | Drip Stage | Note |
|-------|------|----------|------|------------------|------------|------|
| **(none)** | — | — | — | — | — | **EMPTY for the first time in the report stream.** All Tier-0 events from prior reports aged past during the gap. Next future-side event is JOJI on Jun 16 (22 days out — Tier 2). |

### TIER 1 — Mid-Window (8–21 days)
| Event | Date | Days Out | User | Days on Platform | Drip Stage |
|-------|------|----------|------|------------------|------------|
| (none) | — | — | — | — | — |

**Tier 1 empty for 8th consecutive day.**

### TIER 2 — Long-Lead Canonical (22+ days)
| Event | Date | Days Out | User | Days on Platform | Drip Stage |
|-------|------|----------|------|------------------|------------|
| **JOJI: SOLARIS Prudential Center Newark** | **Jun 16** | **22** | **lisallam** | **8** | **E1 silent (May 20) + E2 silent (May 24)** |
| Noah Kahan Kia Center Orlando | Jun 12 | 18 | cjthomas2557 | 18 | E1+E2 silent + E3 silent during gap (3-cross at E3 now) |
| **World Cup ×5 at AT&T Stadium + Matt Rife Sep 26** | Jun 14 → Sep 26 | 20 → 124 | **kevinshall87** | **13** | **E1+E2 silent + E3 silent during gap (Pattern A++ 3-cross at E3)** |
| pete.uzelac77 WC Lincoln Financial ×4 + Darts ×2 | Jun 14 → Jul 4 | 20 → 40 | pete.uzelac77 | 45 | E5 full-traversal Day 15 |
| **WC ×2 at BC Place Vancouver** | Jun 24 + Jul 7 | 30 + 43 | **karin_ef1** | **11** | **E1 silent + E2 silent (May 21) + E3 silent (May 25 today, Pattern A++ 3-cross at E3 THIRD CLASS instance)** |
| Shakira ×2 NYC | Jul 20–23 | 56–59 | laye.aurelien | 53 | E5 silent + 23 days post-E5 |
| Bruno Mars MetLife ×3 | Aug 21–25 | 88–92 | taranimeramaro | 30 | E4 silent during gap (4-cross at E4 — Pattern A 4-cross NEW CLASS) |
| Ed Sheeran SoFi | Aug 8 | 75 | blubberboi | 46 | E5 full-traversal Day 15 |
| **Harry Styles ×7 at MSG Aug 26 → Sep 9** | Aug 26 → Sep 9 | 93 → 107 | **cutekitten1234** | **9** | **E1 silent (May 19) + E2 silent during gap (Pattern A++ cluster 2-cross at E2 NEW CLASS variant)** |

### TIER 3 — Pattern B Variants (cohort ~33 of 88 users ≈ 37.5%, **share grew**)
- **mark.murdock — FULL TRAVERSAL COMPLETED May 23 ~variable UTC.** Day 2 since completion. Third full-traversal silent send.
- **dr.altvater — FULL TRAVERSAL Day 6 (May 19), Day 12 invisible.** Historic upper-bound.
- **zhili1208 — Pattern B 4-cross at E4 SECOND instance** (May 20). Day 5 since activation.
- **lilianamasyrubi — Pattern B 4-cross at E4 FIRST instance** (May 19). Day 6.
- **joseph.g.nicolosi — Pattern B 3-cross at E3** (May 18). Day 7.
- **Pattern B-at-E1 batch (Day 5 silent):** brockedwardnelson, keegansmith18 — 10th & 11th P-B-at-E1 instances upon E1 fire today/tomorrow.
- **eduardo, 9440111** — Pattern B-at-E1 silent confirmed May 21. Now E2 silent during gap (Pattern B 2-cross at E2 batch).
- **nunemakerc, c_calingasan, pattyglvz, vlanza** — Pattern B 2-cross at E2 confirmed during gap.

**Empty-watchlist cohort total: 33 of 88 (37.5%).** **+3 vs May 20's 30/85 (35.3%)** as all 3 new signups except zhouyilinbest came in with 0 watchlist. **Pattern B share grew during the gap.**

### TIER 4 — Apology / Catch-Up (>21d silent backlog, below truncation horizon)
- **mark.murdock — full-traversal, Day 33, 0 wl** — third historic case.
- **dr.altvater — full-traversal, Day 33, 0 wl** — historic upper-bound.
- **joshdguillemette — full-traversal + post-event AEW, Day 36, 1 wl past** — Pattern A full-traversal silent-through-event REALIZED.
- **charlesteel126 — Tier-0 silent-through-event REALIZED (May 20), 33d, 1 wl past** — third real-time Pattern A loss-in-progress completion confirmed.
- **belder4308 — Tier-0 silent-through-event REALIZED (Sessions 5+6), 9d, 2 wl past** — fast-track template never sent.
- **nicklib253 — E4 silent May 9, 37d** — Pattern A loss + E4 silent.
- **goldy.pec.2012, blubberboi, pete.uzelac77** — full-traversal cases Day 15 of historic record.
- **bhaygood728, laye.aurelien, awwhittington, ggri73** — apology/sunset cohort.

### TIER 5 — Drip-Incompatible by Design
- **konman87 (111d, Bruno Mars past)** — Day 8 of sunset.
- **jadbennis0 (19d, Inter Miami past)** — Day 8 of sunset.
- **charlesteel126 (33d, Bruno Mars Columbus past May 20)** — Day 5 of sunset.
- **belder4308 (9d, SEC Sessions 5+6 past)** — Day 3 of sunset.
- **zhouyilinbest (5d, NBA Western Conf Finals past)** — Day 3 of sunset. **New shape: post-event sunset within 5 days of signup.**
- **sparkitrightthere, liambot62** — multi-threshold + Pattern C × past-event.

**1 of 10 most-recent signups (10%) drip-incompatible today** — first non-zero drip-incompatible signup share in 17 days (broke the 12+ day streak). **zhouyilinbest's signup-at-T-2-days-to-event shape is novel.**

---

## Subject Line A/B Tests (Today's Active Drafts — 5 days of decay applied)

| Send | A | B | Recommend |
|------|---|---|-----------|
| **dr.altvater / full-traversal HISTORIC UPPER-BOUND** | `Four-plus weeks, five missed emails, and we still haven't said hi — let's actually start over.` | `33 days on TicketScan, 5 silent sends, here's the clean restart you deserve` | **A** *(REVISED: "three weeks" → "four-plus weeks" after 5 days of decay; B day-count 28→33)* |
| **mark.murdock / full-traversal THIRD instance** | `Four-plus weeks, five missed emails, and we still haven't said hi — let's actually start over.` | `31 days on TicketScan, 5 silent sends, here's the clean restart you deserve` | **A** *(reuses dr.altvater template — class now structurally established as recurring failure mode)* |
| **joshdguillemette / FULL-TRAVERSAL SILENT-THROUGH-EVENT REALIZED** | `AEW Double or Nothing was last night — and we still haven't said hi after 5 weeks. Here's the real restart.` | `36 days, 5 silent sends, 1 missed AEW night — a real apology + your next move` | **A** *(REVISED: pivots from "AEW in 4 days" anchor to "AEW was last night" post-event anchor — the tactical-fit subject decayed entirely during gap)* |
| **belder4308 / Tier-0 silent-through-event REALIZED** | `Both SEC Baseball sessions are past — and we never said hi. Here's the unvarnished restart.` | `9 days, 2 missed sends, 2 missed sessions — a real apology + the post-tournament read` | **A** *(REVISED: full pivot to post-event sunset framing; Sessions 5+6 both aged past during gap)* |
| **charlesteel126 / Tier-0 silent-through-event REALIZED (Day 5 of sunset)** | `Bruno Mars at Ohio Stadium was 5 days ago — and we owed you 2 emails. Here's the unvarnished apology.` | `5 days post-Bruno Mars + 2 missed sends + 33 days from us — a real reset` | **A** *(REVISED: "tonight" → "5 days ago"; final pivot to sunset)* |
| **lisallam / Pattern A canonical — E1 silent May 20** | `Welcome — your JOJI date at Prudential is 22 days out, and we already owe you 2 emails.` | `Welcome to TicketScan — JOJI June 16, here's the pricing playbook + an apology for the silence` | **A** *(REVISED: day-out tightens 28→22; E2 silent during gap means template now acknowledges 2 missed emails not 1)* |
| **cutekitten1234 / Pattern A++ cluster 2-cross at E2 NEW CLASS variant** | `Welcome — your 7 Harry Styles MSG dates + 2 emails we owe you from your first week` | `Welcome to TicketScan — Aug 26 through Sep 9 at MSG, residency-pricing read + apology` | **A** *(REVISED: cluster framing + 2-missed-emails acknowledgment; E2 silent during gap)* |
| **kevinshall87 / Pattern A++ 3-cross at E3 (THIRD CLASS instance)** | `Your AT&T Stadium World Cup cluster + 3 missed emails from your first 2 weeks. The full read is below.` | `Day 13 with TicketScan — we still haven't said hi, and we owe you 3 emails. Here's the AT&T cluster pricing.` | **A** *(REVISED: 2-cross → 3-cross; cluster framing + 3-missed-emails)* |
| **karin_ef1 / Pattern A++ 3-cross at E3 THIRD instance (~today)** | `Welcome — your 2 BC Place WC tickets + 3 missed emails from your first 11 days.` | `11 days, 3 missed emails, 2 BC Place WC matches — let's catch up properly` | **A** *(REVISED: 2-cross → 3-cross; class is now THRICE repeating after kevinshall87 reached 3-cross)* |
| **zhili1208 / Pattern B 4-cross at E4 SECOND instance** | `Three weeks, four missed emails, here's the unvarnished truth — let's fix this together.` | `25 days, 0 events tracked, 4 missed sends — let's fix all three together` | **A** *(carries — B day-count 21→25)* |
| **lilianamasyrubi / Pattern B 4-cross at E4 FIRST** | `Three weeks, four missed emails, here's the unvarnished truth — let's fix this together.` | `26 days, 0 events tracked, 4 missed sends — let's fix all three together` | **A** *(B day-count 21→26)* |
| **joseph.g.nicolosi / Pattern B 3-cross at E3** | `Two weeks in, three missed emails, no events tracked — let's start over with a clean reset.` | `19 days, 3 silent sends, 0 events tracked — here's what TicketScan looks like when it works` | **A** *(B day-count 14→19)* |
| **taranimeramaro / Pattern A 4-cross at E4 NEW CLASS** | `3 Bruno Mars dates at MetLife + 4 missed sends — here's the cluster read and the catch-up.` | `MetLife ×3 in 88-92 days, 4 missed sends — let's fix this properly` | **A** *(REVISED: 3-cross → 4-cross; first Pattern A 4-cross instance — Pattern A users typically have tactical fit which prevents reaching E4 silent; this is a structural break in the Pattern A class)* |
| **brockedwardnelson / Pattern B-at-E1 Day 5 silent (10th instance)** | `Welcome to TicketScan — pick 1 event today and we'll do the rest` | `What event are you watching? Here's how TicketScan helps from Day 1.` | **A** *(carries — Pattern B batch template; 10th instance)* |
| **keegansmith18 / Pattern B-at-E1 Day 5 silent (11th instance)** | `Welcome to TicketScan — pick 1 event today and we'll do the rest` | `What event are you watching? Here's how TicketScan helps from Day 1.` | **A** *(carries — 11th instance)* |
| **zhouyilinbest / NEW SHAPE: event aged past at Day 2** | `Welcome to TicketScan — your Western Conf Finals night was 3 days ago. Let's set up the next one.` | `Day 5 with TicketScan, 1 missed event, 0 sends from us — here's the honest restart` | **A** *(NEW TEMPLATE: post-event-at-onboarding shape; CTA `/dashboard` since only wl item past)* |
| **eduardo / Pattern B 2-cross at E2** | `Week 1 on TicketScan — we've been quieter than we should have been. Here are 3 events worth tracking.` | `2 missed sends + 3 events trending — let's reset` | **A** *(REVISED: E2 silent during gap upgrades from P-B-at-E1 to P-B 2-cross)* |
| **9440111 / Pattern B 2-cross at E2** | `Week 1 on TicketScan — we've been quieter than we should have been. Here are 3 events worth tracking.` | `2 missed sends + 3 events trending — let's reset` | **A** *(REVISED: same as eduardo)* |
| **vlanza, nunemakerc, c_calingasan, pattyglvz / Pattern B 2-cross at E2 batch** | `It's been a week+ — we've been quieter than we should have been. Here are 3 events worth tracking.` | `2 missed emails + 3 events trending on TicketScan` | **A** *(carries)* |
| cjthomas2557 / Noah Kahan 18d + 3-cross at E3 | `Noah Kahan / Kia Center — 18 days out, and we owe you 3 sends, sorry` | `3 missed emails + Noah Kahan in 18 days: catching you up properly` | A *(REVISED: 2-cross → 3-cross; 23d → 18d)* |
| pete.uzelac77 / WC ×4 E5 graveyard Day 15 (tactical fit, 20-40d) | `4 World Cup matches at Lincoln Financial + 5 missed emails — here's the cluster read` | `Lincoln Financial ×4 in 20-40 days, and we owe you a real catch-up` | A *(REVISED: 25-45d → 20-40d)* |
| laye.aurelien Shakira ×2 (E5 + 23d post-E5) | `Shakira at MetLife — 56 days out and we owe you a real 23-day-late catch-up` | `2 Shakira dates, 56-59 days, and 53+ silent days from us — here's the read` | A *(REVISED: 61d → 56d; post-E5 tail 18→23 days)* |
| **konman87 / Day 8 of sunset** | `Both Bruno Mars nights are past — and 111 days of silence from us is unforgivable. Here's what we'd do differently.` | `110 days of silence + 2 silent Bruno Mars nights — a real apology + your next move` | **A** *(REVISED: 106→111 days)* |
| **jadbennis0 / Day 8 of sunset** | `Inter Miami v Portland was 8 days ago — and we owe you 2 emails from your first 2 weeks. Here's all 3.` | `19 days, 2 missed emails, 1 missed match — a real apology + an honest restart` | **A** *(REVISED: "3 days ago" → "8 days ago"; day-count 14→19)* |

**Template inventory:** **24 distinct shapes today** (vs 27 on May 20). Net change: **+3 new shapes** (Pattern A 4-cross NEW CLASS via taranimeramaro; full-traversal-silent-through-event via joshdguillemette; post-event-at-onboarding via zhouyilinbest), **−6 deactivated/aged into other classes** as Tier-0 templates became sunset templates. **The inventory contraction confirms the natural-ceiling thesis from May 20 — the inventory shrinks as silent-through-event collapses multiple template shapes into the unified sunset/apology shape.**

**CTA conformance:** 12 of 24 (50%) top-level routes; 12 of 24 (50%) event-specific deep-links. **Deep-link share holds at 50% — equal-split for first time in report stream.**

---

## Action Items

### P0 — Critical (Day 49 of outage)

1. **SMTP / drip pipeline — DAY 49. Probe HTTP 000 40s timeout. Five consecutive probe cycles confirm baseline failure mode is fully stable.** Today's priority order Day 49:
   1. **Permanently wrap the `/api/admin/drip-run` handler in `try { ... } catch (e) { res.status(500).json({error: e.message, stack: e.stack}) }`.** **Five consecutive 000-timeout cycles confirm this is the SINGULAR remaining diagnostic path back to root cause.** The log-pull window is presumed closed (~9.4 days old, past Railway free/starter retention). **This ask now has zero offsetting alternatives. Cost-of-not-shipping grows by 1 day per cycle.**
   2. Stop relying on the May 16 Railway log-pull ask — assume window closed. **Pivot all engineering attention to wrap-ask.**
   3. If wrap reveals `EAUTH` / Gmail auth: regenerate app password.
   4. If wrap reveals `ECONNREFUSED:587`: Railway egress hypothesis confirmed.
   5. If wrap reveals `relation does not exist`: schema drift on `drip_emails_sent`.

2. **DEADLINE TRACKING — today's stack (note: all near-term Tier-0 horizons collapsed during gap):**
   - **brockedwardnelson, keegansmith18 E1 fired silent ~48h ago (Day 5 today)** — 10th & 11th P-B-at-E1 instances mathematically confirmed.
   - **zhouyilinbest E1 fired silent ~48h ago** — NEW SHAPE: post-event-at-Day-2 sunset already in place.
   - **awwhittington, ggri73 E5 forecast** — both ~33d; would become 4th/5th full-traversal silent sends within ~3 days if SMTP not restored. **The full-traversal failure class is now fully recurring and the queue keeps extending.**
   - **No Tier-0 events** in any user's watchlist for the first time in the report stream — **the queue of pre-event silent-failure horizons has been entirely consumed by the outage.**

3. **Target-price UX (Day 118 — 108/108 null; 5 consecutive zero-add days).** Spec-validation surface is hyper-saturated. **Spec ready to build:** inline auto-suggest at add-time with `current_price × 0.85` as default, single-tap to set. **Five days of zero-add velocity means the dataset is fully aged and there's no offsetting velocity validation cost.**

### P1 — High

4. **Past-event watchlist cleanup (44.4% bloat — first crossover of the 50/50 line).** 48 of 108 past. **Past/future ratio: 1:1.25** for the first time in report stream history. **Day 42 of unaddressed P1 ask.** Same fix as Apr 29: `status` column + daily expiry cron.

5. **`/drip-stats` cap / pagination (Day 19 of regression).** Hidden cohort grew to ≥18-20 users including all 3 confirmed full-traversal cases (dr.altvater, joshdguillemette, mark.murdock). Same fix: `offset` parameter or raise cap to 100.

6. **Backlog catch-up plan when SMTP returns — Day 49 priority:**
   1. **dr.altvater + mark.murdock + joshdguillemette (3 full-traversal silent send cases) — class is now structurally established; same template variant for first two, special post-event variant for joshdguillemette**
   2. **lisallam (Pattern A canonical; E1+E2 silent; JOJI 22 days out — still tactical)**
   3. **cutekitten1234 (Pattern A++ cluster 2-cross at E2; 7-MSG cluster; deep-link still actionable)**
   4. **kevinshall87 (Pattern A++ 3-cross at E3; AT&T cluster)**
   5. **karin_ef1 (Pattern A++ 3-cross at E3 — THIRD class instance; BC Place ×2)**
   6. **taranimeramaro (Pattern A 4-cross at E4 NEW CLASS; Bruno Mars MetLife ×3)**
   7. **cjthomas2557 (3-cross at E3; Noah Kahan 18 days out)**
   8. **charlesteel126, belder4308 (Tier-0 silent-through-event REALIZED — sunset/apology only)**
   9. konman87, jadbennis0 (post-event sunset Day 8)
   10. **zhouyilinbest (NEW SHAPE — Day 2 event-aged-past sunset)**
   11. brockedwardnelson, keegansmith18 (Pattern B-at-E1 Day 5; canonical batch)
   12. eduardo, 9440111, vlanza, nunemakerc, c_calingasan, pattyglvz (Pattern B 2-cross at E2 batch)
   13. lilianamasyrubi, zhili1208 (Pattern B 4-cross at E4 — repeating class)
   14. joseph.g.nicolosi (Pattern B 3-cross at E3)
   15. blubberboi, pete.uzelac77, goldy.pec.2012 (full-traversal apology — Day 15+)
   16. laye.aurelien (E5 + 23d post-E5; Shakira 56d out)

7. **Newsletter growth — Day 113 milestone.** **+3 user registrations (all May 20) / 0 newsletter signups in last 10 days.** **Cross-channel structural break Day 20.** Footer regression Day 29; popup spec Day 25 unbuilt.

8. **`W0-A/B/C/D/E` real-time welcome triage architecture — 6th concrete justification today.** Yesterday's 5-route framing now needs a 6th route: **W0-F (event-aged-past-at-onboarding)** for zhouyilinbest's shape. Pattern A loss-in-progress at Day 2 of platform tenure is now an empirical case.

### P1.5 — Acquisition-quality signal (Day 11 of hypothesis, structurally untested 5 days; tentatively falsified)

9. **Acquisition-quality channel investigation (Day 11 — pulse hypothesis tentatively falsified by 5-day signup drought).** A++ density holds at 40% by absence (no new signups to refresh the rolling-10). **The 2h18m signup-burst-then-5-day-drought signature is NOT pulse behavior — pulses produce sustained or follow-on velocity.** Pulse hypothesis status: **structural falsification pending one more non-A++ signup.** **Falsification gate becomes trivially met if next signup is non-A++.**

### P2 — Medium

10. **`drip-health` endpoint — DAY 18 of unmet ask.** Spec unchanged. Today's continued 000 + 5 consecutive cycles means this endpoint would have eliminated 4 days of manual probe diagnostics.

11. **pete.uzelac77 World Cup re-engagement** — 45 days on platform, 6 items, 20 days to first match. The "in May" framing decayed to expiry during the gap (today is May 25 → "in May" only has 6 days of validity left).

12. **Watchlist digest endpoint — still manual.** **24 distinct send templates** (vs 27 on May 20). Net contraction confirms natural-ceiling thesis — Tier-0 templates collapse into sunset/apology shape upon silent-through-event realization.

13. **Viva El Jaripeo post-mortem — 29 DAYS OVERDUE.**

### Tracking metrics

- **Tactical-window degradation:** Day 49. **Next pre-event silent-failure forecast:** NONE within 7 days for the first time in the report stream — **all near-term Tier-0 horizons collapsed during the gap.** The queue refills only via new acquisition.
- **CTA simplification rule conformance:** 50% top-level (12 of 24); 50% deep-link. **Equal-split for first time.**
- **Pattern mix in rolling 10-user cohort (frozen at May 20 read):** **A++ 40% / A 10% / B 40% / drip-incompatible 10% (NEW — zhouyilinbest).**
- **Pattern A++ cluster acquisition rate:** **4 in 13 days** (kevinshall87, karin_ef1, cutekitten1234, belder4308). **Rate decay continuing: 4 in 6d → 7d → 8d → now 13d.** No new A++ signup since May 16.
- **Template inventory:** **24 shapes today** (down from 27 on May 20). Inventory contraction confirms natural-ceiling thesis as silent-through-event collapses templates into unified sunset shape.
- **Full-traversal silent send count:** **3 (dr.altvater P-B, joshdguillemette P-A variant, mark.murdock P-B).** Class is now structurally established and thrice-repeating. **awwhittington + ggri73 imminent for 4th/5th.**
- **Silent-through-event count:** **3** (konman87 Bruno Mars NY ×2, charlesteel126 Bruno Mars Columbus, belder4308 SEC Sessions 5+6, joshdguillemette AEW — actually 5 events across 4 users; the count is event-instances). Was 2 user-level cases on May 20; now **5 event-level realizations.**

---

## Handoff → Analytics Agent (Agent 7)

- **Subscriber total:** 3 active, 0 net change in 5 days. **113 consecutive days flat.** Day 20 of zero-capture under signup velocity. **Cross-channel break Day 20.**
- **User signups (5d gap):** **0 net new — 3 backfill from May 20** (brockedwardnelson, zhouyilinbest, keegansmith18). **88 total users.** 7d rolling = 4.
- **New watchlist items (5d gap):** **1** (zhouyilinbest NBA, immediately aged past). Total **108**. 108/108 null target.
- **Drip pipeline:** UN-SHIPPED. **Day 49. 0 sends ever. 88 of 88 users never received a drip email.** Backlog: 45 visible + 18-20 hidden ≈ **95+ owed sends**.
- **Probe signal cycle today:** drip-run probe returned HTTP 000 40s timeout — 5th consecutive baseline-failure cycle. **The May 16 502 transient remains an isolated unrepeated event 38 days post-occurrence.**
- **Threshold crossings during May 21-25 gap (10 confirmed silent):**
  - May 20 14:05 UTC lisallam → E1 silent (Pattern A canonical cleanest fit)
  - May 20 ~variable UTC zhili1208 → E4 silent (Pattern B 4-cross SECOND — class repeating)
  - May 20 event-day charlesteel126 → Bruno Mars Columbus silent-through-event (Tier-0 REALIZED)
  - May 21 00:48 UTC eduardo → E1 silent (Pattern B-at-E1 8th)
  - May 21 06:46 UTC karin_ef1 → E2 silent (Pattern A++ 2-cross at E2 SECOND — class repeating)
  - May 21 13:20 UTC vlanza → E2 silent (Pattern B 2-cross at E2)
  - May 21 19:09 UTC 9440111 → E1 silent (Pattern B-at-E1 9th)
  - May 21-22 event-day belder4308 → SEC Sessions 5+6 silent-through-event (Tier-0 ×2 REALIZED)
  - May 23 ~variable UTC mark.murdock → E5 silent (Pattern B full-traversal THIRD — class structurally established)
  - May 24 event-day joshdguillemette → AEW silent-through-event (Pattern A full-traversal silent-through-event REALIZED)
- **Forecast today/tomorrow (3 silent in 48-72h):** brockedwardnelson E1, keegansmith18 E1, zhouyilinbest E1.
- **Price alerts:** 0 ever triggered. **108/108 watchlist null. Day 118.** 0 new adds in 5 days.
- **Watchlist composition:** 108 items, **48 past-dated (44.4%) — crossover of past/future to 1:1.25.** **Zero events within next 7 days** for first time in report stream. Future-side queue starts at JOJI Jun 16 (22 days out).
- **Empty-watchlist cohort:** 33 of 88 (37.5% — +3 vs 35.3% May 20). Pattern B share grew.
- **Pattern mix in rolling 10-user cohort:** **A++ 40% / A 10% / B 40% / drip-incompatible 10%.** First non-zero drip-incompatible signup in 17 days (zhouyilinbest).
- **Acquisition-quality pulse hypothesis (Day 11, tentatively falsified):** A++ density holds at 40% by absence; the 2h18m-burst-then-5d-drought signature contradicts pulse behavior. **Pending one more non-A++ signup for formal falsification.**
- **NEW CLASSES confirmed during gap:**
  - **Pattern B full-traversal silent send THIRD instance** (mark.murdock — class structurally established)
  - **Pattern A full-traversal silent-through-event REALIZED** (joshdguillemette — Pattern A variant of the full-traversal class now also goes past event)
  - **Pattern A 4-cross at E4 NEW CLASS** (taranimeramaro — Bruno Mars MetLife ×3; first Pattern A user to reach E4 silent)
  - **Pattern A++ 3-cross at E3 NEW CLASS, THIRD instance** (kevinshall87, karin_ef1 + cutekitten1234 cluster-2-cross variant — class now thrice-repeating)
  - **Post-event-at-onboarding NEW SHAPE** (zhouyilinbest — Day 2 platform tenure, watchlist item past Day 4)
- **Most useful single observation today:** **the report gap of May 21-25 produced the report stream's most consequential consolidation event** — 10 silent crossings, 5 event-level silent-through-event realizations, the full-traversal class going thrice-repeating (structurally established), Pattern A reaching its first 4-cross instance, and the Tier-0 queue emptying entirely as every prior Tier-0 horizon aged past unintercepted. **The 5-day-zero-signup drought combined with 5 event-level realizations confirms the outage is now operating against itself: no new acquisition to test the failure modes against, but every existing tactical horizon collapses through aging.** **The past/future watchlist ratio crossing 50/50 to 1:1.25 is the most concrete signal that the system's "future-side" queue is being consumed faster than it is being refilled.** The Pattern A 4-cross NEW CLASS (taranimeramaro) is structurally novel: Pattern A users were thought to be protected from full-traversal by their tactical-fit watchlist providing intercept windows, but a 90-day-out tactical window (Bruno Mars MetLife Aug 21-25) is long enough that even E4 fires before the tactical decay protects. **This implies the full-traversal class will eventually reach 100% of long-lead Pattern A users if SMTP outage extends past their E5 trigger dates.**
