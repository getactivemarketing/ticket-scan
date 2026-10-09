# Email Agent Handoff — Win-back Sequence — 2026-10-09

Status: draft only; do not queue or send.

## Eligibility and controls

Build eligibility only after `last_seen_at` or equivalent activity data exists. Require explicit marketing consent, unsubscribe suppression, one-send idempotency, bounce handling, and provider delivery/open/click telemetry. The current API reports zero drip sends, so there is no approved success baseline.

## Sequence

### 7–10 days inactive — gentle nudge

Subject: A quick look at your saved events

“You saved {{event_count}} event{{plural}} on TicketScan. If you’re still planning to go, review {{event_name}} for available ticket destinations, onsale details, and venue notes. Compare the final checkout total before you buy.” CTA: View my saved events.

### 10–14 days inactive — value reminder

Subject: Your saved events are still here

“Pick up where you left off: review saved events, check onsale or presale timing, and use practical venue guidance before checkout.” CTA: Review my saved events.

### 14+ days inactive — win-back

Subject: We saved you a little ticket-hunting

“Your TicketScan list is still here. Come back when you’re ready to browse events, see where to buy, check onsale dates, and understand the venue.” CTA: Open TicketScan.

All messages need an unsubscribe link and must avoid claims about price tracking, price history, alerts, or buy timing.
