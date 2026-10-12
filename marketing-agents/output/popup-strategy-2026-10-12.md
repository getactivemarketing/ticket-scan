# Popup and Modal Strategy — 2026-10-12

The strategy should support discovery and onsale/presale information. A price-alert popup is not approved while price tracking is down.

| Surface | Trigger | Copy | CTA / dismiss | Frequency and mobile behavior | Success metric |
|---|---|---|---|---|---|
| Newsletter inline/card | Keep as embedded form; no forced modal on first page view. | Headline: `Get onsale dates and ticket-buying tips`. Body: `A short email with presale windows, public onsales, venue guides, and practical buying tips.` | `Subscribe`; dismiss is simply leaving the form. | Embedded forms: one submission opportunity per surface. On mobile stack input/button. | Newsletter subscribe rate by source. |
| Newsletter modal | Exit intent on desktop or 45-second dwell after meaningful scroll (50%) on content pages only. | Headline: `Before you go: keep the next onsale on your radar`. Body: `Get onsale and presale dates, venue guides, and ticket-buying tips in your inbox.` | `Get onsale updates`; dismiss `No thanks`. | Once per 14 days; suppress for subscribers, logged-in users, `/register`, `/login`, `/dashboard`, and `/compare`. Mobile: use bottom sheet only after 60 seconds or 70% scroll; never block back navigation. | Modal submit rate; close rate; downstream unsubscribe rate. |
| Save-event prompt | Guest clicks the watchlist icon on an event card. | Headline: `Save this event`. Body: `Create a free account to revisit the event, onsale details, and seller links.` | `Create free account`; dismiss `Maybe later`. | Show only on the clicked card. Do not repeat for the same event for 7 days after dismissal. | Signup start and completion from prompt; watchlist add after signup. |
| Compare access fallback | Guest opens compare or is sent to compare from a result. | Headline: `Compare listings without losing your search`. Body: `Search for an event, review available seller details, and save the ones you want to revisit.` | Preferred: `Continue to compare`; secondary `Sign up to save`. If guest compare is not ready, `Back to search`. | No repeated modal loop. Preserve query parameters. | Compare search completion; return-to-search rate. |
| Return visitor banner | On second visit within 30 days, only when there is a saved event or prior search context. | Headline: `Welcome back`. Body: `Pick up where you left off with your saved events and upcoming onsale details.` | `Open my watchlist`; dismiss `Start a new search`. | Once per session, max once per 7 days. Mobile: inline banner, not a modal. | Return-session watchlist/search click-through. |

## Explicitly rejected for now

- “Set a price alert” popup;
- “We’ll tell you when it drops” exit intent;
- price-change or “prices changed” return-visitor copy;
- urgency badges based on unavailable TicketScan price data.

## Implementation notes

Use one reusable client component with route, device, auth, subscriber, dismissal timestamp, and source-surface inputs. Store only a non-sensitive dismissal/subscriber flag in local storage. Add accessible dialog semantics, Escape handling, focus restoration, and a visible close button. Do not create a second newsletter backend or add a popup dependency.

