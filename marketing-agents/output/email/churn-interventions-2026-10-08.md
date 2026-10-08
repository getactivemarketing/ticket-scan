## Churn Intervention Drafts — 2026-10-08

These drafts are **not queued or sent**. No last-seen field, personalized lifecycle queue, or complete unsubscribe/bounce stream is available. They intentionally avoid claims about price movement, savings, alerts, price history, or buy/wait recommendations.

### Tier 1 — gentle nudge, 7–10 days inactive

**Subject:** Your ticket shortlist is still waiting

Hi {{first_name}},

You saved {{event_name}} to your TicketScan watchlist. If you’re still considering it, the event page has the latest onsale or presale details, venue information, and links to check availability.

Worth a quick look before your plans get buried under 47 open tabs?

**Open my watchlist →** {{watchlist_url}}

— TicketScan

### Tier 2 — value reminder, 10–14 days inactive

**Subject:** Your saved events, in one less place to remember

Hi {{first_name}},

Your TicketScan watchlist has {{watchlist_count}} saved event{{plural_s}}. Come back when you’re ready to check the next step for each one: onsale timing, venue sections, and where tickets are available.

No mystery-meat countdown clock—just event details and links so you can make the call.

**Review my saved events →** {{watchlist_url}}

— TicketScan

### Tier 3 — win-back, 14+ days inactive

**Subject:** We found your ticket shortlist

Hi {{first_name}},

You set aside {{event_name}} on TicketScan. If it’s still on your calendar, reopen your watchlist for the current event details, onsale information, venue guide, and purchase links.

If your plans changed, that’s fine too. Remove the event and save something you actually want to attend—future-you will appreciate the cleanup.

**Open TicketScan →** {{watchlist_url}}

— TicketScan

### Send rules

- Do not send until `last_seen_at`, consent, unsubscribe, and bounce suppression are available.
- Stop after an authenticated return or unsubscribe; send at most one message per tier.
- Add an idempotent key such as `user_id:tier:campaign_date`.
- Suggested timing: Tier 1 Tuesday/Wednesday 10–11 a.m.; Tier 2 Thursday 10–11 a.m.; Tier 3 Sunday 5–6 p.m., recipient local time.
