# Churn Intervention Drafts — 2026-10-04

Status: prepared for Email Agent review; not queued or sent. The admin API has no personalized-send or queue endpoint, and last-visit data is unavailable.

The copy below intentionally avoids price movement, price alerts, price history, and buy/wait recommendations because those product features are currently unavailable.

## Tier 1 — Gentle nudge (7–10 days inactive, once inactivity tracking exists)

**Subject:** Still planning a ticket night?

**Timing:** Tuesday or Wednesday, 10:00 AM recipient local time.

Hi there,

Ticket plans have a habit of getting buried under 47 open tabs. Your TicketScan watchlist keeps the event date, venue, onsale details, and buying links together so you can pick up where you left off.

Open your watchlist, check the next event on your calendar, and compare the all-in total before checkout.

**CTA:** Open my watchlist

— TicketScan

## Tier 2 — Value reminder (10–14 days inactive, once inactivity tracking exists)

**Subject:** Your ticket plans are still here

**Timing:** Thursday, 10:00 AM recipient local time.

Hi there,

You saved events for a reason. TicketScan puts the practical details in one place: when the event is on sale, where it is, what the venue sections mean, and where to buy.

Take a quick look before your next ticket search turns into spreadsheet archaeology.

**CTA:** Review my watchlist

— TicketScan

## Tier 3 — Win-back (14+ days inactive, once inactivity tracking exists)

**Subject:** We saved your ticket plans

**Timing:** Tuesday, 10:00 AM recipient local time.

Hi there,

We miss having you around. Your saved events are still available in TicketScan, along with onsale timing, venue guidance, and links to buy. Before you check out anywhere, remember the consumer-advocate basics: compare the all-in total, verify delivery details, and be skeptical of speculative listings.

**CTA:** Return to my watchlist

— TicketScan

### Sending guardrail

Do not send these to a guessed “churned” segment. Instrument last-seen, email delivery/open/click, and unsubscribe events first; then personalize with verified watchlist event name, date, venue, and city only.
