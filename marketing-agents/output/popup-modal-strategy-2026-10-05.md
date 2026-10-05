# Popup and Modal Strategy — 2026-10-05

## Current state

The repository contains inline newsletter forms on the homepage and footer. No timed, exit-intent, scroll-depth, or return-visitor popup component was found. `EventCard` has an in-card anonymous save dialog, but it is a contextual auth prompt, not a site-wide popup.

## Recommended policy

Use one contextual prompt at a time. Never interrupt the search form or cover a result immediately after search. Cap newsletter prompts by browser/user identity, and keep all copy centered on event discovery, onsale/presale information, venue guides, and ticket-buying tips.

| Surface | Trigger | Copy | Frequency | Mobile treatment | Expected conversion |
|---|---|---|---|---|---|
| Anonymous save prompt | User taps save on an EventCard | **Headline:** Save this event for later. **Body:** Create a free account to revisit the date, venue details, onsale information, and seller links. **CTA:** Create free account. **Dismiss:** Maybe later. | Once per event per session; preserve pending event through signup | Bottom sheet or inline card; no forced focus trap unless implemented accessibly | Baseline first; target 20–35% registration start from save intent |
| Newsletter inline card | Homepage visitor reaches the newsletter section or footer | **Headline:** Get onsale and venue updates. **Body:** Receive presale and onsale dates, venue guides, and practical ticket-buying tips. **CTA:** Subscribe. **Dismiss:** no popup dismiss needed | Inline only; do not duplicate on same page | Full-width form, email field first | Measure; current active list is only 6, so do not assume a benchmark |
| Exit-intent newsletter | Only after newsletter delivery and unsubscribe behavior are verified | **Headline:** Before you go: keep the next onsale on your radar. **Body:** Get event dates, venue guides, and ticket-buying tips by email. **CTA:** Subscribe. **Dismiss:** No thanks | Max once every 14 days; suppress for subscribers, recent dismissals, and registered users | Replace exit intent with a bottom sheet triggered on back navigation or long inactivity; never block browser back | Pilot only; success threshold must be set from baseline |
| Return visitor | User returns to a previously saved event or watchlist | **Headline:** Welcome back. **Body:** Your saved events are here, with current event details and seller links. **CTA:** Open watchlist. **Dismiss:** Continue browsing | Once per 7 days; suppress after click | Inline banner at top of dashboard, not modal | Measure watchlist re-entry; no unverified change claims |

## Do not ship now

- A “set a price alert” popup.
- “We’ll tell you when this drops.”
- A return-visitor claim that prices changed.
- An exit popup that blocks seller links or event discovery.

## Instrumentation

Track `popup_impression`, `popup_primary_click`, `popup_dismiss`, `popup_submit`, `popup_suppressed`, with `popup_id`, `page`, `trigger`, `auth_state`, and `event_id` where applicable. Report registration start and completed save separately; a popup click is not a conversion.

