# Popup & Modal Strategy — Week 3 (Compressed Ship-List + WC Stadium Reminder)

**Author:** CRO Specialist • **Date:** 2026-05-11 • **Companion to:** `cro-weekly-2026-05-11.md` §4

> **Week 3 on this spec.** The 4-popup catalog (exit-intent, compare-card price-alert, welcome-back, compare-scroll-band) lives in `cro-weekly-2026-05-04--popup-strategy.md` and remains the canonical reference. **Zero popups have shipped.** This week's file compresses to a ship-list and adds **one new popup** that is uniquely time-sensitive: the WC Stadium Reminder.

---

## 1. Current state (verified today)

`grep -r "Popup\|Modal" web/src/components/` returns: zero `*Popup*.tsx` files, zero `*Modal*.tsx` files. The only modal-like UI is the `EventCard` sign-up intercept overlay at `EventCard.tsx:80–104`, which is a register-required interrupt, not an email-capture popup.

**Brief inaccuracy (Week 4 of carrying it).** The agent brief states "Newsletter signup popup exists." It does not. The brief should be corrected upstream.

---

## 2. Ship-list — what should ship this week

Priority order. Each line item names a file path. None are blocked on backend changes; all reuse the existing `/api/newsletter/subscribe` endpoint or the new `/api/watchlist` flow.

| # | Popup | File to create | Effort | Triggered by | Days unresolved |
|---|---|---|---|---|---|
| 1 | **WC Stadium Reminder** (new this week, T-31 to T-0 critical window) | `web/src/components/WCStadiumPopup.tsx` | 1.5 hr | Visit `/world-cup-2026/[stadium]` for ≥10s | 0 (today) |
| 2 | Exit-intent newsletter | `web/src/components/NewsletterPopup.tsx` | 2 hr | Mouseup to top edge (desktop) / 30s timer (mobile) | 7 |
| 3 | Compare-card inline price-alert (after soft-gate) | `web/src/components/PriceAlertModal.tsx` | 2 hr | Click "Notify me when this drops" on `/compare` | 7 (gated on soft-gate) |
| 4 | Welcome-back return-visitor toast | `web/src/components/WelcomeBackToast.tsx` | 1 hr | `localStorage.lastVisitedAt > 7d` + authed + ≥1 watchlist | 7 |

The 4-popup catalog and full code skeletons for #2-#4 are in `cro-weekly-2026-05-04--popup-strategy.md`. They have not changed. **Priority change this week: WC Stadium Reminder moves to #1.**

---

## 3. New: WC Stadium Reminder Popup (this week's new spec)

### 3.1 Why this popup, why now

The 2026 FIFA World Cup kicks off **June 11, 2026 — T-31 days from today**. The site has 17 WC landing pages (1 main + 16 stadiums) under `/world-cup-2026/[stadium]`. These pages get organic search traffic from "[stadium name] world cup tickets" queries, paid ad traffic from the WC campaign (Ad agent's domain), and direct traffic from social posts.

Today these pages have **no email-capture popup, no price-alert capture, no urgency banner.** A visitor arrives at `/world-cup-2026/metlife`, reads the venue guide, leaves. **No part of the WC traffic funnel converts to retained intent.**

At T-31 we are in the high-leverage window:
- T-31 to T-14: research phase. Visitors are learning about venues. Price-alert capture has highest leverage here.
- T-14 to T-7: decision phase. Visitors compare prices, look for deals. Urgency-first messaging works.
- T-7 to T-0: panic-buy phase. The popup needs to switch copy to "Last chance" framing.
- T+0 to T+38 (tournament): "Watch the next match's prices" framing.

A single popup component, with copy variants by `T - daysToKickoff`, covers the entire arc.

### 3.2 Component spec

**File:** `web/src/components/WCStadiumPopup.tsx` (new, ~140 lines).

**Mount:** `/world-cup-2026/[stadium]/page.tsx`, inside the layout, below the main content tree.

**Trigger logic (priority order):**

1. **Already subscribed?** Don't fire. Check `localStorage.wcAlertsSubscribed_[stadiumId] === '1'`.
2. **Already dismissed this session?** Don't fire. Check `sessionStorage.wcPopupDismissed_[stadiumId] === '1'`.
3. **Time on page ≥10s.** Use `setTimeout(showPopup, 10000)`.
4. **Scroll depth ≥40% of page.** Use `IntersectionObserver` on a sentinel element placed at 40%-depth.

Either #3 or #4 fires the popup (whichever comes first). Both being required → too restrictive on long pages; either alone → too aggressive on short pages.

**Frequency cap:** once per session per stadium. After dismissal, do not refire for 7 days (set a 7-day cookie).

**Mobile adaptation:** full-screen overlay on `<sm`; centered modal max-width 480px on `≥sm`. Dismiss tap target ≥48px.

**Copy variants (by days-to-kickoff):**

```ts
type CopyArc = {
  headline: string;
  body: string;
  cta: string;
  dismissText: string;
};

function getCopyArc(daysToKickoff: number, stadiumName: string, matchCount: number): CopyArc {
  if (daysToKickoff > 21) {
    return {
      headline: `${matchCount} World Cup matches at ${stadiumName}`,
      body: `Kickoff is in ${daysToKickoff} days. Get a price alert when tickets drop for any match at this venue.`,
      cta: 'Get price alerts',
      dismissText: 'Maybe later',
    };
  }
  if (daysToKickoff > 7) {
    return {
      headline: `${daysToKickoff} days until ${stadiumName} hosts the World Cup`,
      body: `Prices are moving fast this close to kickoff. Get alerts when match prices drop.`,
      cta: 'Alert me',
      dismissText: 'No thanks',
    };
  }
  if (daysToKickoff > 0) {
    return {
      headline: `Less than a week to ${stadiumName} kickoff`,
      body: `Last-minute price drops happen daily. Get notified the moment prices drop for any remaining match.`,
      cta: 'Track last-minute drops',
      dismissText: 'Skip',
    };
  }
  // Tournament in progress
  return {
    headline: `${stadiumName} — track the next match's prices`,
    body: `Get a price alert before the next match here. Tournament prices move minute-by-minute.`,
    cta: 'Alert me on the next match',
    dismissText: 'Skip',
  };
}
```

The headline and body use the stadium's actual `matchCount` from `web/src/data/worldcup.ts`. The `daysToKickoff` is computed at component render time: `Math.floor((new Date('2026-06-11T00:00:00Z') - Date.now()) / 86400000)`.

**Submit handler:**

```ts
async function handleSubmit(email: string, stadiumId: string) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || '...';
  const response = await fetch(`${apiUrl}/api/newsletter/subscribe`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      source: `wc-stadium-${stadiumId}`,
      tags: ['wc-2026', `wc-stadium-${stadiumId}`],
    }),
  });
  // On success
  localStorage.setItem(`wcAlertsSubscribed_${stadiumId}`, '1');
  setStatus('success');
  // dataLayer.push wc_alert_subscribed event
}
```

The `tags` array is the structured-personalization mechanism. The newsletter agent (Agent 5) can then send WC-stadium-specific emails based on `tags`. If the backend's `/api/newsletter/subscribe` does not currently accept `tags`, the frontend stores them; backend can ingest later.

### 3.3 Expected impact

Estimated, pre-instrumentation:

- WC landing page → popup view rate: 40–55% (visitors who stay ≥10s or scroll 40%).
- Popup view → email capture rate: 6–10% (urgency-driven, single-field).
- Net: 2.5–5.5% of WC landing-page visitors converted to email capture.

The funnel value per capture is high: WC-tagged subscribers are pre-qualified for high-volume drip campaigns through the tournament window. **Estimated 6-week LTV per subscriber: 4–8× the average newsletter signup.**

### 3.4 Risk and mitigations

- **Popup fatigue.** Don't stack with the exit-intent popup. Add `WCStadiumPopup` to the exit-intent popup's suppression list (don't fire exit-intent if WC popup already fired).
- **Accessibility.** Modal must trap focus; ESC dismisses; ARIA labels on dismiss; readable contrast on the navy/teal palette.
- **Mobile bounce risk.** A 10s timer on mobile is short. Test the 10s vs 20s vs 30s threshold. The 2026-05-04 exit-intent popup spec'd 30s for mobile — be consistent or articulate why WC differs (urgency motivates shorter timing).

---

## 4. Stale items (Week 3 of being unbuilt)

These were specified in `cro-weekly-2026-05-04--popup-strategy.md`:

- **Exit-intent newsletter popup** (`NewsletterPopup.tsx`) — full spec exists. Ship.
- **Compare-card price-alert modal** (`PriceAlertModal.tsx`) — full spec exists. Ship after soft-gate.
- **Welcome-back return-visitor toast** (`WelcomeBackToast.tsx`) — full spec exists. Ship.
- **Compare-page scroll soft-capture band** — full spec exists. Ship after soft-gate.

None has shipped. Recommend bundling all four (plus the new WC Stadium Reminder) into a single "Popup Sprint" — total dev work ~7-8 hours, can fit in a single day.

---

## 5. Handoffs

- **Content Agent (Agent 1):** the four copy variants in §3.2 are first drafts. Refine for brand voice. The T-7-to-T-0 "Last chance" framing in particular should be reviewed (avoid manipulative urgency; the FOMO is real, the copy doesn't need to fabricate it).
- **Newsletter Agent (Agent 5):** plan a WC-tagged drip sequence keyed off the `wc-2026` + `wc-stadium-[id]` tags. T-31 to T-0 timeline = ~31 days; recommend 6 emails (T-30 welcome, T-21 stadium guide, T-14 ticket-buying tips, T-7 last-call, T-2 hotel/transit, T-0 game-day prep).
- **Ad Agent (Agent 2):** the WC popup multiplies the value of paid traffic to `/world-cup-2026/[stadium]` pages. Re-evaluate paid-bid ceiling for these surfaces if the popup's email-capture rate matches the §3.3 estimate.
- **Analytics Agent (Agent 7):** instrument `wc_popup_shown`, `wc_alert_subscribed`, `wc_popup_dismissed` events. These will be required for the bid-ceiling re-evaluation in the Ad agent handoff.
