# Popup & Modal Strategy — Week 5 Ship-List

Date: 2026-05-25 (Monday) • Companion to `cro-weekly-2026-05-25.md` §4 • Long-form spec: `cro-weekly-2026-05-04--popup-strategy.md` (still load-bearing)

> **This is a compressed tactical ship-list.** The full popup-type catalog and code spec (exit-intent, scroll-soft-capture, compare-card, welcome-back) lives in the 5/4 long-form. This file lists what is shippable this week with file paths and line numbers. **T-17 to WC kickoff: the WC Kickoff Countdown Popup (P1) is now the most time-sensitive change on the platform — every week of delay forfeits ~100–250 emails.**

---

## 1. Brief correction (Week 6 of carrying this)

The agent brief states: **"Newsletter signup popup exists."**

Verification today, 2026-05-25:

```
grep -rln "Popup" web/src/        →  0 matches
grep -rln "Modal" web/src/        →  EventCard.tsx (anon-state sign-up overlay, not a popup component)
grep -rln "useEffect.*scroll" web/src/  →  0 matches
grep -rln "exitIntent" web/src/   →  0 matches
```

**No popup file exists. No exit-intent handler exists. No scroll-trigger logic exists.** Only modal-like surface on the site is `EventCard.tsx:80–104` — a card-internal overlay shown after clicking the watchlist `+` button on a card while anon. It is not a popup; it is a card-overlay sign-up gate.

The brief is wrong. **Correct upstream.** (Week 6 of noting this.)

## 2. Current popup inventory (verified production state)

| Surface | Type | Location | Trigger | Status |
|---|---|---|---|---|
| `EventCard` sign-up overlay | Card-internal modal | `EventCard.tsx:80–104` | Click watchlist `+` while anon | **Live.** Only modal-like surface on the site. |
| Newsletter card | Inline section | `page.tsx:285` (`/`) | Always rendered, below the fold | Live but not a popup. |
| Newsletter footer card | Inline section | `page.tsx:314` (`/`, in the inline-footer block) | Always rendered | Live but not a popup; also the surface duplicated by the double-footer regression (see `cro-weekly-2026-05-25.md` §1 item 9). |
| **Anything else** | — | — | — | **Does not exist.** |

## 3. Popup ship-list (this week)

### P1: WC Kickoff Countdown Popup *(carryover from 5/18, leverage escalated at T-17)*

**Why this popup, this week:** With 17 days to WC kickoff and the drip campaign now losing one drip per week as the window compresses, the platform's only remaining lever to capture WC interest is a synchronous capture surface that does not depend on the drip funnel completing. P1 captures email-only with `source = 'wc_countdown_popup'`; even if the user never registers, never sets a price target, never visits again — the email lands in `newsletter_subscribers` and can be batch-emailed about the tournament closer to kickoff.

**Math at T-17:** ~500 daily homepage visitors × 17 days × 3–7% capture rate = **255–595 emails pre-kickoff.** vs `activeSubscribers: 3` flat 15 days = a 100×+ subscriber-growth opportunity from one popup. **Each week of delay forfeits ~100–250 emails.** Last week (T-24) the upper bound was 840; this week it is 595. The single highest-leverage 2-hour change on the platform between now and 6/11.

```
Surface: / (homepage), anon visitors only
Trigger:
  - Condition A: !document.cookie.includes('ts_token') (not logged in)
  - Condition B: !localStorage.getItem('ts_dismissed_wc_countdown')
  - Condition C: 8 seconds after first scroll event below 30% page depth (intent signal)
  - Condition D: localStorage 'ts_last_wc_popup_shown' is null OR > 7 days ago (frequency cap)
Copy:
  Headline: "World Cup starts in 17 days"
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
  At ~500 daily homepage visitors, ~15–35 captures/day for 17 days = 255–595 emails pre-kickoff
```

**Implementation:** ~2 hours.

- New component `web/src/components/WCCountdownPopup.tsx` (~60 lines)
- Mount inside `web/src/app/layout.tsx` so it's globally available but client-gated to render only on `/` (use `usePathname() === '/'`)
- Reuse the existing `NewsletterSignup` POST handler logic; just a different `source` value
- localStorage gating prevents annoyance; cookie check prevents showing to logged-in users
- Countdown integer computed from `Math.floor((new Date('2026-06-11T20:00:00Z') - new Date()) / 86400000)` — same logic used by item 7 in `cro-weekly-2026-05-25.md` §1

**Copy needs from Content Agent:** see `cro-weekly-2026-05-25.md` §6 — headline/body/CTA/dismiss in <30 words total, with three variant headlines for an A/B subtest down the line.

### P1-prereq: Drip cron `newsletter_subscribers` UNION

**This is not a popup. It is the load-bearing dependency for P1 to produce ROI.** Today's daily and §1 item 8 both flag it.

```
File: index.js (drip-campaign cron, ~line 874)
Change: replace the cron's source query — currently SELECT FROM users — with a UNION over users + newsletter_subscribers, deduplicated by email, marking each row's source so the drip emails can fork copy if needed.
Effort: 1 hour (query change + drip-emails-sent table schema check for FK against email vs user_id).
Days unresolved: 36.
Why bundled here: P1 deposits emails into newsletter_subscribers. Without this fix, those emails sit in the table with zero drip outreach. P1 + this fix are now load-bearing as a bundle. Ship them in the same sprint.
```

### P2: WC Stadium Reminder Popup *(carryover from 5/11, Day +14 unbuilt)*

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
  At ~50 daily visitors per stadium × 16 stadiums = 800 daily triggers → 32–64 captures/day for 17 days = 544–1,088 emails pre-kickoff
```

**Implementation:** ~3 hours. Requires the new backend endpoint `POST /api/watchlist/add-lightweight` + schema update (allow `watchlist.user_id IS NULL` when `email` is set) + price-tracking cron change to UNION lightweight rows.

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
Days unresolved: 21.
```

**Special importance this week:** If the hero CTA direct swap ships (item 11 from `cro-weekly-2026-05-25.md` §1), the EventCard intercept becomes the *primary* registration funnel. A 5-minute fix to capture `?returnTo=` is the difference between "swap recovers all intent" and "swap drops users at the post-register `/dashboard` Orlando default." **Bundle P3 with item 11 in the same week.**

### P4–P7: Other popups speced 2026-05-04 *(all unbuilt Day 21)*

| Popup | Surface | Trigger | Status |
|---|---|---|---|
| **Exit-intent** | All pages | `mouseleave` toward top of viewport | Unbuilt Day 21. No `Popup` file exists. |
| **Scroll soft-capture** | Blog post pages | 60% scroll depth + 30s dwell | Unbuilt Day 21 |
| **Compare-card capture** | `/compare` results | After first comparison renders, if anon | Unbuilt Day 21 (also blocked by compare-page hard gate) |
| **Welcome-back** | All pages | First visit after >7 days, if returning visitor cookie present | Unbuilt Day 21 |

**None of these will ship this week.** Recommend they remain in the backlog and the team focuses on P1 + P1-prereq + P3 (highest-leverage bundle between now and 6/11).

## 4. Frequency capping (applies to all popups)

| Trigger | Cap |
|---|---|
| Per-popup-instance | Once per 7 days (localStorage) |
| Per-session | Max 1 popup per session, ever |
| Auth state | Logged-in users see zero popups (unless explicitly opted into product-update popups, none currently exist) |
| Mobile | All popups bottom-sheet style, never blocking, always dismissible with one tap |

## 5. Recommended this-week order

| # | Bundle | Effort |
|---|---|---|
| 1 | **P1 + P1-prereq** — WC Kickoff Countdown Popup + Drip cron UNION. **Load-bearing bundle: P1 without P1-prereq deposits emails into a void; P1-prereq without P1 has no new emails to drip.** | 3 hours |
| 2 | **P3** — EventCard intercept `?returnTo=` capture (5 minutes). Depends on signup-flow S6 shipping first (5 minutes). Bundle these 10 minutes together. | 10 min |
| 3 | **P2 (next week)** — WC Stadium Reminder Popup. Backend dependency; ship next week if P1 + P1-prereq land this week. | 3 hours |

**Total this-week dev time: 3 hr 10 min** (P1 + P1-prereq + S6/P3, assuming both ship).

**If only one bundle ships this week, it must be Bundle 1 (P1 + P1-prereq).** Bundle 2 is 10 minutes but it has zero ROI unless P1 has captured emails for the EventCard-intercept population to feed into. Bundle 1 has positive ROI on its own.

## 6. Sister-agent handoffs

- **Content Agent:** copy for P1 (headline/body/CTA/dismiss + 3 headline variants for future A/B test). See `cro-weekly-2026-05-25.md` §6. Three variants worth pre-writing for next week's A/B subtest within the WC popup:
  - V1: *"World Cup starts in 17 days"* (current, neutral)
  - V2: *"T-17 days · 104 matches · 16 stadiums"* (factual/structural)
  - V3: *"Tickets surge in 17 days. Set a free alert."* (urgency-forward)
- **Analytics Agent:** popup-fired event taxonomy. Once dataLayer ships (Day 48 unresolved), every popup should emit `popup_shown {popup_id, surface}`, `popup_submitted {popup_id, source}`, `popup_dismissed {popup_id, method}`. Without this, P1's readout is just the `newsletter_subscribers` table delta — directionally correct but not attributable.
- **Growth Agent:** post-capture nurture. The `wc_countdown_popup` and `wc_stadium_*` source values will deposit hundreds of new emails in `newsletter_subscribers` between now and 6/11. These users have no drip path other than the broken main drip (which queries `users` not `newsletter_subscribers` — see `cro-weekly-2026-05-25.md` §1 item 8). **P1-prereq above is strictly load-bearing for P1 to produce ROI.** Without P1-prereq, P1 captures emails into a void.
- **Email/Lifecycle Agent (if separate from Growth):** the post-popup drip for the WC-source cohort should fork from the existing 5-email drip. Specifically, the d3/d7/d14 emails for `source = 'wc_countdown_popup'` subscribers should emphasize tournament dates + nearest-stadium recommendations rather than the generic "3 tips to save" template. This is a copy-fork inside the existing cron, not a new cron — ~30 minutes of dev once the cron query union (P1-prereq) ships.

## 7. Compatibility with §1's hero-CTA direct swap

If the hero CTA swap ships (item 11), more cold traffic reaches `/dashboard` without registering. The P1 popup on `/` continues firing for the same anon population; the swap doesn't change the popup's targeting. **The two changes are orthogonal and additive.** Anon traffic now has two acquisition surfaces:

1. **P1 popup on `/`** — captures email-only for the cohort that scrolled but didn't search.
2. **`/dashboard` → EventCard intercept (P3) → `/register?returnTo=...`** — captures full registration for the cohort that searched and tried to track.

Both feed the same downstream funnel; the popup is the lower-friction capture and the EventCard intercept is the higher-intent capture. Together they replace the current single-path "homepage → hardcoded `/register`" funnel with a two-path "intent-based" funnel.
