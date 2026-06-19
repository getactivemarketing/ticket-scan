# Email Marketing — Weekly (2026-06-19)

**Honest status. No metrics are invented.** Where a number can't be pulled or measured, it's marked `n/a`.

## 0. What's actually measurable this week

| Data | Source | Result |
|---|---|---|
| API up? | `curl /api/admin/newsletter` | ✅ up (HTTP 401 in 0.34s — auth required) |
| List size | `/api/admin/newsletter` | **n/a** — admin key in repo (`ticketscan-admin-2026`) is a placeholder; real `ADMIN_SECRET` not available locally |
| Drip sends | `/api/admin/drip-stats` | **n/a** — same 401 |
| Open rate / CTR per email | code grep | **structurally n/a** — there is **no open/click tracking** in `index.js`. `drip_emails_sent` records *send attempts only* (`user_id`, `email_number`, `sent_at`). No pixel, no click redirect, no webhook. |

**Therefore: any "Email N: X% open, Y% CTR" line is unproduceable and any past weekly that showed one was fiction.** Open/CTR stay `n/a` until tracking is built (see §2).

## 1. The real bottleneck is operational, not creative

Two known, still-open facts (carried, not re-discovered):
- **Drip has delivered ~0 emails historically; users sit overdue.** Send path (`processDripCampaign` → `sendDripEmail` → `sendEmail`) and cron (daily 10:00 UTC, `index.js:3274`) are coded correctly. The gap is upstream: deliverability config (Resend/SMTP creds in prod) and/or no users crossing day-3 with a working sender. → **Growth/infra**, not copy.
- **Price alerts can't arm** — watchlist items have no target price (no target input in the UI). So Email 1's core promise ("we'll email you when prices drop below your target") lands on a feature the user can't actually complete. → CRO ticket already open.

No amount of subject-line tuning moves a sequence that sends 0. Flagging this as the top item again, briefly, and not re-escalating.

## 2. Recommended priority order (so this stops repeating)
1. **Verify drip actually sends** (infra/Growth): confirm prod email creds + run one real `drip-run` against a seeded test user, watch logs. Until this is green, copy work is cosmetic.
2. **Add minimal send→open→click tracking** so future weeklies have real numbers: a 1px open beacon + click-through redirect (`/r?u=…&e=…`) writing to a tiny `email_events` table. Small backend task; unblocks every "optimize the weakest email" instruction permanently.
3. Ship the watchlist **target-price input** (CRO) so Email 1's promise is real.

## 3. One genuinely shippable copy fix (integrity, not A/B)

I can't pick the "weakest performer" by metric (none exist). But two drip emails ship **unverifiable, likely-fabricated savings claims** baked into prod HTML — these are a credibility/legal risk and should be softened now:

- **Email 1** (`index.js:538`): *"save an average of **$127 per ticket**"* — we have no price-history data to support an average savings figure (price_history is empty). Replace with a mechanism claim, not a fabricated stat.
- **Email 3** (`index.js:642`): *"Lakers vs Celtics tickets were $189 on Ticketmaster but only $156 on SeatGeek"* — invented specific example. Replace with a generic, hedged framing.

### Ready-to-paste replacements

**Email 1, line 538** — replace the `<p>` body:
```html
<p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
  The same seat often costs more on one site than another, and prices move daily.
  Set a target price once and we'll watch every source for you — so you buy when it dips, not whenever you happened to check.
</p>
```

**Email 3, lines 640–644** — replace the green "Real example" box:
```html
<div style="background: #dcfce7; border-radius: 12px; padding: 20px; margin: 20px 0;">
  <p style="color: #166534; margin: 0; font-size: 16px;">
    <strong>Why it matters:</strong> the same section can be priced very differently across Ticketmaster, SeatGeek, and StubHub at the same moment. We line them up side by side so you never overpay for a seat you could've gotten cheaper elsewhere.
  </p>
</div>
```

Both keep the design/CTA intact; only the unverifiable claims change. This is the one copy change I'd ship this week.

## 4. New sequence design — Post-Signup Activation (registered, no watchlist)

Chosen because it targets the actual funnel leak (registrations that never create a tracked event). **Dependency:** its payoff requires the target-price input to exist (§2.3); ship copy now, it compounds once that lands.

**Trigger:** user in `users` with **zero** rows in `watchlist`. Stop the sequence the moment they add one. Reuse the `drip_emails_sent`-style guard (suggest a parallel `activation_emails_sent` table) so it can't double-fire.

| # | Send | Subject | Preview | Body gist | CTA |
|---|---|---|---|---|---|
| 1 | Day 1 | You're in — here's the 30-second setup | One search now saves you from overpaying later | One thing to do: search an event, add it, set your max price. | **Track your first event →** `/dashboard` |
| 2 | Day 3 | Pick one event. We'll watch the price. | You don't have to check — we do it for you | Reframe the value: we compare every source and ping you on a dip. | **Add an event →** `/dashboard` |
| 3 | Day 7 | Still deciding? Start with what you already want to see | Even one tracked event beats refreshing tabs | Low-friction nudge + link to a popular guide (World Cup / a venue page). | **Browse popular events →** `/world-cup-2026` |

- **Send window:** 16:00 UTC (≈ lunchtime US).
- **Success metric (once tracking exists, §2.2):** % of enrolled users with ≥1 watchlist item within 10 days. Until then: **n/a** — report enrollment count only, not opens.

## 5. List health & segmentation
**n/a this week** — requires `/api/admin/newsletter` (401). Can't enumerate subscribers, so bounce cleanup and active/at-risk/dormant segmentation are not doable without the real admin key or DB access. No segment sizes invented.

## 6. Hand-offs
- **→ Growth/infra:** verify prod email deliverability + run one monitored `drip-run`; this is the blocker. (carry-over, not new)
- **→ Backend:** build minimal `email_events` open/click tracking so weeklies can report real numbers (§2.2).
- **→ CRO (Agent 6):** watchlist target-price input — Email 1's promise depends on it.
- **→ Content (Agent 1):** no lead-magnet delivery request this week.

---
*Generated 2026-06-19. Metrics marked n/a are genuinely unavailable (no admin auth locally; no email-engagement tracking in code), not omitted. Email-sequence/cold-email skills are not installed in this environment; deliverables produced directly.*
