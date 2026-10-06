## Churn Intervention Drafts — 2026-10-06

These drafts are **not queued or sent**. The production API exposes no last-seen data or personalized email queue. They intentionally avoid claims about price movement, price history, alerts, savings, or buy/wait recommendations, which are currently unavailable.

### Tier 1 — gentle nudge, 7–10 days inactive

**Subject:** Your ticket shortlist is still waiting

**Send timing:** Tuesday or Wednesday, 10:00–11:00 a.m. recipient local time.

**Body:**

Hi {{first_name}},

You saved {{event_name}} to your TicketScan watchlist. If you’re still considering it, the event page has the latest onsale or presale details, venue information, and links to check availability.

Worth a quick look before your plans get buried under 47 open tabs?

**Open my watchlist →** {{watchlist_url}}

— TicketScan

P.S. We’ll keep the ticket-search busywork; you keep the snacks.

### Tier 2 — value reminder, 10–14 days inactive

**Subject:** Your saved events, in one less place to remember

**Send timing:** Thursday, 10:00–11:00 a.m. recipient local time.

**Body:**

Hi {{first_name}},

Your TicketScan watchlist has {{watchlist_count}} saved event{{plural_s}}. Come back when you’re ready to check the next step for each one: onsale timing, venue sections, and where tickets are available.

No mystery meat, no “trust us” countdown clock—just the event details and links so you can make the call.

**Review my saved events →** {{watchlist_url}}

— TicketScan

### Tier 3 — win-back, 14+ days inactive

**Subject:** We found your ticket shortlist

**Send timing:** Sunday, 5:00–6:00 p.m. recipient local time.

**Body:**

Hi {{first_name}},

You set aside {{event_name}} on TicketScan. If it’s still on your calendar, reopen your watchlist for the current event details, onsale information, venue guide, and purchase links.

If your plans changed, that’s fine too. Remove the event and save something you actually want to attend—future-you will appreciate the cleanup.

**Open TicketScan →** {{watchlist_url}}

— TicketScan

### Suppression and launch rules

- Do not send until `last_seen_at`, per-user event state, and unsubscribe/bounce suppression are available.
- Do not personalize with price movement, savings, alert delivery, or “we were watching” language.
- One message per tier maximum; stop the sequence after any authenticated return or unsubscribe.
- Add an idempotent queue key such as `user_id:tier:campaign_date` before launch.
