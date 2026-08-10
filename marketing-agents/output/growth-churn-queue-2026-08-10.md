## Growth Churn Intervention Queue — 2026-08-10

Status: **prepared, not sent**. Candidates are signup-age/watchlist proxies because last-login data is unavailable. Do not send until the user has a real last-seen event, unsubscribe suppression, alert-delivery suppression, and verified price-change data.

### Tier 1 — Gentle nudge (1 proxy candidate)

Eligibility: 7–10 days since signup and at least one watchlist item.

Send timing: next weekday at 10:00 AM recipient local time; fallback 10:00 AM ET.

Subject: `A quick price check on your watchlist`

Body:

> Hi [First name],
>
> You’ve got [Event name] on your TicketScan watchlist. Prices can move around without asking permission, so we’re checking in before the useful comparison gets buried.
>
> **[Verified price movement, or omit this block if none is available]**
>
> Take a look when you have a minute. If the price is right, you’ll know. If it isn’t, walking away is still a perfectly valid financial strategy.
>
> [Review my watchlist]
>
> — TicketScan

### Tier 2 — Value reminder (4 proxy candidates)

Eligibility: 10–14 days since signup and at least one watchlist item.

Send timing: 48 hours after Tier 1 at 10:00 AM recipient local time. Suppress after a visit, purchase signal, recent alert, unsubscribe, or bounce.

Subject: `You may have missed a price move`

Body:

> Hi [First name],
>
> While you were away, [X] event(s) on your watchlist had a **verified** price change. That does not automatically mean “buy now”—it means the market gave you something worth checking.
>
> Your watchlist: [Event name(s)]
>
> Compare current prices, check the all-in total, and set a ceiling that keeps your wallet in the conversation.
>
> [See what changed]
>
> — TicketScan

### Tier 3 — Win-back (110 proxy candidates)

Eligibility: 14+ days since signup and at least one watchlist item.

Send timing: one message at 11:00 AM recipient local time; a final reminder only after 7 days with no visit and no unsubscribe.

Subject: `Your watchlist kept going without you`

Body:

> Hi [First name],
>
> We haven’t seen you in a while. Your watchlist is still here, and ticket prices are still doing their mysterious little shuffle.
>
> Since you left: [Verified update—event movement, new listing, or product improvement. Never invent savings.]
>
> Come back when you’re ready to compare. No fake countdown clock—just clearer ticket math.
>
> [Open TicketScan]
>
> — TicketScan

### Queue summary

- Tier 1 proxy: 1
- Tier 2 proxy: 4
- Tier 3 proxy: 110
- Total copy-ready candidates: 115
- Actually sent: 0
- Supported API queue endpoint: none

