# Growth Churn Intervention Drafts — 2026-10-25

Status: drafts only. No recipients were selected and no messages were sent or queued. The admin API does not expose last-seen timestamps, consent segmentation, email clicks, or a safe lifecycle-email queue. These drafts avoid price, price-history, price-alert, and buy-timing claims.

## Tier 1 — Gentle nudge

**Eligibility:** 7–10 days inactive, once last-seen and email consent are available.

**Subject:** Your saved events are still waiting

**Body:**

Hi {{first_name}},

You saved {{event_name}} for {{event_date}} at {{venue}}. TicketScan keeps the event date, venue, onsale details, venue guidance, and official ticket links in one place so you can pick up where you left off.

Browse your saved events: {{saved_events_url}}

— TicketScan

**Timing:** next weekday at 10:00 AM recipient local time, with a frequency cap of one lifecycle email per 7 days.

## Tier 2 — Value reminder

**Eligibility:** 10–14 days inactive, with verified consent and a recent saved event.

**Subject:** A quicker way back to your ticket shortlist

**Body:**

Hi {{first_name}},

Your saved events are a useful shortcut when you’re ready to plan. Reopen {{event_name}} to review the date, venue, seating guidance, onsale details, and official places to buy.

Before checkout, compare the all-in total and confirm the listing is official and transferable.

Open your saved events: {{saved_events_url}}

— TicketScan

**Timing:** Tuesday or Wednesday at 10:00 AM recipient local time; suppress if the user has visited or received another lifecycle email in the prior 7 days.

## Tier 3 — Win-back

**Eligibility:** 14+ days inactive, verified consent, suppression check passed, and a working delivery log.

**Subject:** We kept your ticket shortlist handy

**Body:**

Hi {{first_name}},

Ticket plans have a habit of becoming “I’ll deal with that later.” Your saved events are still available, along with venue guides, onsale and presale timing, and links to official ticket marketplaces.

Come back when you’re ready: {{saved_events_url}}

One small consumer-defense reminder: compare fees using the final checkout total, and be wary of speculative listings.

— TicketScan

**Timing:** Thursday at 10:00 AM recipient local time; send once only, then suppress for 30 days.

## Email Agent handoff

These are send-ready copy drafts, not a send authorization. Before activation, add last-seen, consent, unsubscribe suppression, delivery/open/click logging, and an idempotent queue. Do not use the current drip runner for these cohorts.
