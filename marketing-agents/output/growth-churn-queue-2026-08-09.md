## Growth Churn Intervention Queue — 2026-08-09

Status: **prepared, not sent**. This is a copy queue for Email Agent review. Recipients are selected using signup age plus a non-zero watchlist because last-login data is not available. Do not send until unsubscribe suppression, last-seen data, and alert delivery data are wired.

### Tier 1 — Gentle nudge (3 proxy candidates)

Send timing: next weekday at 10:00 AM recipient local time; fallback 10:00 AM ET. Personalize with the actual watchlist event and a verified price movement only.

Subject: `A quick price check on your watchlist`

Body:

> Hi [First name],
>
> You’ve got [Event name] on your TicketScan watchlist. Prices can move around without asking permission, so we’re checking in before the good comparison gets buried.
>
> **[Price movement or “No verified movement yet”]**
>
> Take a look when you have a minute. If the price is right, you’ll know. If it isn’t, walking away is still a perfectly valid financial strategy.
>
> [Review my watchlist]
>
> — TicketScan

### Tier 2 — Value reminder (4 proxy candidates)

Send timing: 48 hours after Tier 1, at 10:00 AM recipient local time. Suppress if the user has visited, bought, or received a recent alert.

Subject: `You may have missed a price move`

Body:

> Hi [First name],
>
> While you were away, [X] event(s) on your watchlist had a verified price change. That doesn’t automatically mean “buy now”—it means the market gave you something worth checking.
>
> Your watchlist: [Event name(s)]
>
> Compare current prices, check the all-in total, and set a ceiling that keeps your wallet in the conversation.
>
> [See what changed]
>
> — TicketScan

### Tier 3 — Win-back (108 proxy candidates)

Send timing: one message at 11:00 AM recipient local time, then a final reminder 7 days later only if no visit and no unsubscribe. Use a verified new event, price movement, or product improvement; never invent savings.

Subject: `Your watchlist kept going without you`

Body:

> Hi [First name],
>
> We haven’t seen you in a while. Your watchlist is still here, and ticket prices are still doing their mysterious little shuffle.
>
> Since you left: [Verified update—event movement, new listing, or feature]
>
> Come back when you’re ready to compare. No pressure, no fake countdown clock—just clearer ticket math.
>
> [Open TicketScan]
>
> — TicketScan

### Candidate counts

- Tier 1 proxy: 3
- Tier 2 proxy: 4
- Tier 3 proxy: 108
- Total prepared: 115
- Actually sent: 0

