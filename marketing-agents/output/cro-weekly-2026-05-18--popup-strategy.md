# Popup & Modal Strategy — Week 4 Ship-List

Date: 2026-05-18 (Monday) • Companion to `cro-weekly-2026-05-18.md` §4 • Long-form spec: `cro-weekly-2026-05-04--popup-strategy.md` (still load-bearing)

> **This is a compressed tactical ship-list.** The full popup-type catalog and code spec (exit-intent, scroll-soft-capture, compare-card, welcome-back) lives in the 5/4 long-form. This file lists what is shippable this week with file paths and line numbers, **plus the WC Kickoff Countdown Popup which is new this week and is the highest-conversion popup the platform can run between now (T-24) and June 11.**

---

## 1. Brief correction (Week 5 of carrying this)

The agent brief states: **"Newsletter signup popup exists."**

Verification today, 2026-05-18:

```
grep -rln "Popup" web/src/        →  0 matches
grep -rln "Modal" web/src/        →  EventCard.tsx:80 (anon-state sign-up *overlay*, not a popup component)
grep -rln "useEffect.*scroll" web/src/  →  0 matches
grep -rln "exitIntent" web/src/   →  0 matches
```

**No popup file exists. No exit-intent handler exists. No scroll-trigger logic exists.** The only modal-like surface on the site is `EventCard.tsx:80–104` — a card-internal overlay shown after clicking the watchlist `+` button on a card while anon. It is not a popup; it is a card-overlay sign-up gate.

The brief is wrong. **Correct upstream.**

## 2. Current popup inventory (verified production state)

| Surface | Type | Location | Trigger | Status |
|---|---|---|---|---|
| `EventCard` sign-up overlay | Card-internal modal | `EventCard.tsx:80–104` | Click watchlist `+` while anon | **Live.** Only modal-like surface on the site. |
| Newsletter card | Inline section | `page.tsx:283–287` (`/`) | Always rendered, below the fold | Live but not a popup. |
| Newsletter footer card | Inline section | `page.tsx:314` (`/`, in the inline-footer block) | Always rendered | Live but not a popup; also the surface duplicated by the double-footer regression (see `cro-weekly-2026-05-18.md` §1 item 9). |
| **Anything else** | — | — | — | **Does not exist.** |

## 3. Popup ship-list (this week)

### P1: WC Kickoff Countdown Popup *(NEW this week, T-24-driven, highest priority)*

**Why this popup, this week:** With 24 days to WC kickoff and the drip campaign no longer fitting before kickoff for new signups (see `cro-weekly-2026-05-18.md` §1), the platform's *only remaining lever to capture WC interest* is a synchronous capture surface that does not depend on the drip funnel completing. A popup that converts anon WC-curious visitors to email subscribers — even if they never register, never set a price target, never visit again — is the highest-leverage 2-hour change on the entire platform between now and June 11.

```
Surface: / (homepage), anon visitors only
Trigger:
  - Condition A: !document.cookie.includes('ts_token') (not logged in)
  - Condition B: !localStorage.getItem('ts_dismissed_wc_countdown')
  - Condition C: 8 seconds after first scroll event below 30% page depth (intent signal)
  - Condition D: localStorage 'ts_last_wc_popup_shown' is null OR > 7 days ago (frequency cap)
Copy:
  Headline: "World Cup starts in 24 days"
  Body: "Set a free price alert before tickets surge. We'll email when prices drop on any of 104 matches."
  CTA: "Get free price alerts" (email-only capture; no password)
  Dismiss: "Maybe later" (small grey text)
Submit:
  POST /api/newsletter/subscribe { email, source: 'wc_countdown_popup' }
  Set localStorage 'ts_dismissed_wc_countdown' on success or dismiss
  Set localStorage 'ts_last_wc_popup_shown' to today
Mobile adaptation:
  Bottom-sheet style (not center modal) on viewports < 768px
  Trigger after 15s of scroll-down activity, not 8s, on mobile (longer dwell window)
Expected conversion:
  3–7% of triggered impressions → email captures (baseline B2C exit-intent floor)
  At ~500 daily homepage visitors, ~15–35 captures/day for 24 days = 360–840 emails pre-kickoff
  vs. current activeSubscribers: 3 (flat 8 days) — a 100×+ subscriber growth from one popup
```

**Implementation:** ~2 hours.

- New component `web/src/components/WCCountdownPopup.tsx` (~60 lines)
- Mount inside `web/src/app/layout.tsx` so it's globally available but client-gated to render only on `/` (use `usePathname() === '/'`)
- Reuse the existing `NewsletterSignup` POST handler logic; just a different `source` value
- localStorage gating prevents annoyance; cookie check prevents showing to logged-in users
- Countdown integer computed from `Math.floor((new Date('2026-06-11T20:00:00Z') - new Date()) / 86400000)` — same logic used by item 7 in `cro-weekly-2026-05-18.md` §1

**Copy needs from Content Agent:** see `cro-weekly-2026-05-18.md` §6 — headline/body/CTA/dismiss in <30 words total, with three variant headlines for an A/B subtest down the line.

### P2: WC Stadium Reminder Popup *(carryover from 5/11, Day +7 unbuilt)*

```
Surface: /world-cup-2026/[stadium] (all 16 stadium pages)
Trigger:
  - Condition A: !document.cookie.includes('ts_token')
  - Condition B: !localStorage.getItem(`ts_dismissed_stadium_${stadiumId}`)
  - Condition C: 5 seconds after page load OR scroll past first <h2> (whichever first)
Copy:
  Headline: "Kickoff at {Stadium} in {N} days"
  Body: "Set a price alert before they sell out."
  CTA: "Email me when prices drop"
  Dismiss: "No thanks"
Submit:
  POST /api/newsletter/subscribe { email, source: `wc_stadium_${stadiumId}` }
  POST /api/watchlist/add-lightweight { event_id: `wc-2026-${stadiumId}`, target_price: null }
    (the lightweight watchlist row records intent without requiring a registered user)
Mobile adaptation:
  Bottom-sheet on mobile
Expected conversion:
  4–8% of triggered impressions (slightly higher than P1 because the user is already on a stadium page — high intent)
  At ~50 daily visitors per stadium × 16 stadiums = 800 daily triggers → 32–64 captures/day for 24 days = 768–1,536 emails pre-kickoff
```

**Implementation:** ~3 hours.

- Reuse `WCCountdownPopup.tsx` component; pass stadium-specific props
- Requires a new backend endpoint `POST /api/watchlist/add-lightweight` (~30 LOC in `index.js`) that creates a `watchlist` row tied to a session cookie OR email (not requiring a `user_id`)
- Schema change: add `lightweight_watchlist (id, email, event_id, target_price, created_at)` table OR allow `watchlist.user_id IS NULL` if `email` is set — pick the second; smaller migration
- Cron change: price-tracking cron's drop-alert query must UNION the lightweight rows by email instead of by `user_id`

This is the higher-impact popup but it requires backend work. **P1 is the right one to ship this week; P2 is the right one to ship next week.**

### P3: EventCard Watchlist Intercept *(already exists; tighten this week)*

```
Surface: any EventCard rendered for anon visitors (search results, dashboard, event listings)
Trigger: click on watchlist + button while anon
Current state: EventCard.tsx:80–104 — overlay with copy "Track This Event / Create a free account to track prices and get alerts when they drop"
Issue (carryover): the "Sign Up Free" link href is hardcoded /register with no ?returnTo= or ?event_id= captured. After signup, user lands on /dashboard with Orlando default — completely lost from the event they were tracking.
Fix (carryover, also speced in onboarding-flow file):
  EventCard.tsx:90 — change href="/register" to:
    href={`/register?returnTo=/watchlist?action=add-target&event_id=${event.id}&source=eventcard`}
  Depends on register flow's `?returnTo=` capture (S6 in signup-flow file).
Effort: 5 minutes.
Days unresolved: 14.
```

### P4–P7: Other popups speced 2026-05-04 *(all unbuilt Day 14)*

| Popup | Surface | Trigger | Status |
|---|---|---|---|
| **Exit-intent** | All pages | `mouseleave` toward top of viewport | Unbuilt Day 14. No `Popup` file exists. |
| **Scroll soft-capture** | Blog post pages | 60% scroll depth + 30s dwell | Unbuilt Day 14 |
| **Compare-card capture** | `/compare` results | After first comparison renders, if anon | Unbuilt Day 14 (also blocked by compare-page hard gate) |
| **Welcome-back** | All pages | First visit after >7 days, if returning visitor cookie present | Unbuilt Day 14 |

**None of these will ship this week.** Recommend they remain in the backlog and the team focuses on P1 (highest-leverage between now and 6/11).

## 4. Frequency capping (applies to all popups)

| Trigger | Cap |
|---|---|
| Per-popup-instance | Once per 7 days (localStorage) |
| Per-session | Max 1 popup per session, ever |
| Auth state | Logged-in users see zero popups (unless explicitly opted into product-update popups, none currently exist) |
| Mobile | All popups bottom-sheet style, never blocking, always dismissible with one tap |

## 5. Recommended this-week order

1. **P1 (WC Kickoff Countdown Popup)** — 2 hours. Highest-leverage popup the platform can ship pre-tournament. Day 0 unresolved.
2. **P3 (EventCard intercept `?returnTo=`)** — 5 minutes. Depends on S6 from `cro-weekly-2026-05-18--signup-flow.md` shipping first.
3. **P2 (WC Stadium Reminder Popup)** — 3 hours. Backend dependency; ship next week if P1 lands this week.

**Total this-week dev time: 2 hr 5 min** (P1 + P3, assuming S6 ships).

## 6. Sister-agent handoffs

- **Content Agent:** copy for P1 (headline/body/CTA/dismiss + 3 headline variants for future A/B test). See `cro-weekly-2026-05-18.md` §6.
- **Analytics Agent:** popup-fired event taxonomy. Once dataLayer ships, every popup should emit `popup_shown {popup_id, surface}`, `popup_submitted {popup_id, source}`, `popup_dismissed {popup_id, method}`. Without this, P1's readout is just `newsletter_subscribers` table delta — directionally correct but not attributable.
- **Growth Agent:** post-capture nurture. The `wc_countdown_popup` and `wc_stadium_*` source values will deposit hundreds of new emails in `newsletter_subscribers` between now and 6/11. These users have no drip path other than the broken main drip (which queries `users` not `newsletter_subscribers` — see `cro-weekly-2026-05-18.md` §1 item 8). **Fix #8 in the main weekly is now strictly load-bearing for the popups in this file to produce ROI.** Without #8, P1 captures emails into a void.
