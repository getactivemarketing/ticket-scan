## CRO Handoff — Activation Gap — 2026-09-30

The production API reports **5** signups in the last 7 days. **3** have no watchlist item; **2** have at least one. New-user activation is therefore **40.0%** for this snapshot. User identities are intentionally omitted from this handoff.

### Recommended onboarding change

On the first authenticated dashboard visit, show:

> You’re 1 step from your first price alert. Search an event, then tap **Track price**.

Use a single CTA to event search. After the first saved event, show:

> Nice — this is now in **your watchlist**. Set a target price and we’ll tell you when the deal is real.

### Measurement request

Instrument these events with user id and timestamp:

1. `signup_completed`
2. `search_started`
3. `compare_opened`
4. `watchlist_added`
5. `target_price_set`

Report signup → watchlist-added conversion daily, split by first-session completion. The current API exposes none of these funnel events, so the reasons behind the 3 activation gaps are unknown.
