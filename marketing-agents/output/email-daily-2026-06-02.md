# Email Daily — 2026-06-02

**One-line status:** No email of any kind has shipped — 0 drip sends ever, 0 alerts ever, newsletter flat at 3 (2 are test rows). Three known blockers (drip pipeline hangs, target_price 100% null, newsletter capture broken) are all unchanged from prior reports. Nothing new broke; nothing got fixed.

> Verified live today against `/api/admin/drip-stats`, `/api/admin/newsletter`, `/api/admin/stats`, `/api/admin/watchlist`, and a `drip-run` dry probe. Real numbers only below.

## Drip Campaign
- Emails sent (24h): **0**
- By email #: E1: 0, E2: 0, E3: 0, E4: 0, E5: 0
- Failures: 0 (no sends attempted)
- `/api/admin/drip-stats` returns `stats: []`; every user in `pendingUsers` has `last_email_sent: 0`. **No drip email has ever sent.**
- Probe today: `POST /api/admin/drip-run?limit=1&dryRun=true` → **HTTP 000, timeout at 15s.** Same hang as prior days — even the dry-run path never returns, so the block is before the dry-run branch (likely a synchronous SMTP/verify call at the top of the route). Unchanged.

**Threshold crossings (from visible pendingUsers, ~Jun 2):**
- E1 (3d): officialrizk72, coleesparrago, mattfleischer4
- E3 (14d): 9440111
- All would-be sends are silent — pipeline is down.

## Price Alerts
- Alerts triggered (24h): **0**
- Active alerts: **0** | Triggered all-time: **0**
- **116/116 watchlist items have `target_price: null`.** No user has ever set a target. Even with SMTP fully restored, the alert engine has nothing to compare against → 0 alert emails until a target-price default/UX ships.

## Subscriber Growth
- New subscribers (24h): **0**
- Unsubscribes (24h): **0**
- Net: **0**
- Total active: **3** — `roos_leeuwen` (homepage, Feb 1), `samir.sgpatel` (test), `test@example.com` (api-test). **Only 1 is a real organic capture; last organic signup was Feb 1.**
- Against +7 registered users this week, the newsletter captured 0. Root cause unchanged: signup form lives only on the homepage; blog/footer CTAs are dead-end redirects. See [[newsletter-conversion-rootcause]].

## Platform Context (from `/api/admin/stats`)
- Total users: **95** | This week: **7** | Today: **2** (mdawg1981 #94, griffin #95)
- Watchlist items: **116** (+1: Twenty One Pilots @ Ohio Stadium, mdawg1981)
- Active alerts: 0 | Triggered alerts: 0 | Favorites: 0

---

## Watchlist Digest Prep — near-term real events
Pulled from `/api/admin/watchlist` (actual rows, not estimates). All targets null, so every line is "still tracking" — no buy/wait signal can be computed without a target or live price pull.

| Event | Date | Days out | User | Note |
|-------|------|----------|------|------|
| Don Toliver: Octane Tour (Scotiabank Arena, Toronto) | Jun 5 | **3** | coleesparrago | Signed up May 29 — too late for canonical drip; only a welcome could land pre-show |
| NBA Finals Knicks GM1 (MSG) | Jun 8 | 6 | officialrizk72 | Same: short-fuse, drip can't catch up |
| NBA Finals Knicks GM3 (MSG) | Jun 16 | 14 | officialrizk72, samvirsujan | |
| WC Round of 16 ×2 (Arthur Ashe) | Sep 6–7 | long | mattfleischer4 | |
| Twenty One Pilots (Ohio Stadium) | Oct 17 | long | mdawg1981 | new add today |

**Reality check:** the digest CTA ("View your watchlist") routes to the one capture surface confirmed working. But there is no send channel — drip is down and no manual-send path is wired — so digest content cannot actually reach these users today.

## Subject Line A/B (ready for the moment a send channel exists)
Two short-fuse welcomes worth a manual single-send if any path is available:
- **coleesparrago / Don Toliver (3d):** A — `Don Toliver in Toronto is 3 days out — how Scotiabank resale usually moves this week` · B — `Welcome — your Don Toliver tickets + the 72-hr Toronto pricing pattern`
- **officialrizk72 / NBA Finals GM1 (6d):** A — `Knicks Finals Game 1 at MSG is 6 days out — the GM1 vs GM3 resale curve` · B — `Welcome — you're tracking 2 Finals games at MSG; here's when each usually bottoms`

Not queuing the full backlog of variants — there is no channel to send them through, and doing so just inflates the report.

---

## Action Items (standing blockers — unchanged, not re-escalated)
1. **Drip pipeline hangs.** `drip-run` dry probe → HTTP 000 timeout. Fix: short-circuit `?dryRun=true` before any network call; move/remove any top-of-route `transporter.verify()`; wrap per-user sends in `Promise.allSettled` with per-user timeout. Re-test the dry-run first — it should return instantly once the block is moved.
2. **target_price 100% null (116/116).** Add an add-time default (e.g. current min × 0.9) so the alert engine has something to compare against.
3. **Newsletter capture broken.** Point blog/footer CTAs at a working subscribe form (or inline it). Cheapest conversion fix on the board. [[newsletter-conversion-rootcause]]

These three are the same items reported previously. They are real and verified again today; the bottleneck is shipping, not analysis. No new diagnostics needed — flagging status, not re-investigating.

## Handoff → Analytics Agent (Agent 7)
- Subscribers: **3** (1 organic), net 0, flat since Feb 1. 0 captured against +7 weekly registered users → structural, not volume.
- Users: **95** (+7 this week, +2 today). Watchlist: **116** (+1), all null-target.
- Drip: 0 sent ever; `drip-run` times out. Alerts: 0 ever, 0 active.
- Near-term tracked events of note: Don Toliver (Jun 5), NBA Finals GM1 (Jun 8) — both short-fuse, both unreachable via current pipeline.
