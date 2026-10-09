# Event Reminder Sequence — 2026-10-09

**Audience:** Users with an active watchlist item whose event date is approaching  
**Entry trigger:** Event date is 14 days away and the item has a valid future date  
**Exit conditions:** Event date passes, item is removed, user unsubscribes, hard bounce, or sequence completes  
**Guardrail:** This sequence promotes event details, venue guidance, seller terms, and checkout safety. It does not promise price tracking, alerts, price history, recommendations, or savings.

## Email 1 — 14 days before

**Subject:** Your event is two weeks away — check the details

**Preview:** Confirm the date, venue, section, and seller terms before the day gets close.

Hi {{first_name}},

Your event is about two weeks away. Take a minute now to confirm the details you’ll want on hand:

- Date, start time, city, and venue
- Entry rules and the correct gate or entrance
- Section layout and sightlines
- Delivery, transfer, refund, and buyer-protection terms

**[Review your event →](https://www.ticketscan.io/watchlist)**

**Trigger logic:** Send 14–15 days before the event if the watchlist item is still active and the user is subscribed.  
**Success metric:** Event-detail view; secondary metric is venue-guide click.

## Email 2 — 7 days before

**Subject:** One week out: make sure your ticket details match

**Preview:** Check the venue map, delivery method, and final checkout terms.

Hi {{first_name}},

One week out, verify that the ticket you’re considering matches the event you intend to attend. Check the exact date, venue, admission or seat section, delivery method, and final all-in total.

If you’re unfamiliar with the building, open the venue guide before choosing a section. A few minutes of preparation can prevent a frustrating surprise at the gate.

**[Open your watchlist →](https://www.ticketscan.io/watchlist)**

**Trigger logic:** Send 7–8 days before the event if the item remains active, the event has not been cancelled, and no unsubscribe or hard bounce is recorded.  
**Success metric:** Venue-guide click or outbound seller click.

## Email 3 — 3 days before

**Subject:** Three days to go: save the information you’ll need

**Preview:** Keep your ticket, entry instructions, and venue plan easy to find.

Hi {{first_name}},

With three days to go, save your ticket confirmation and check the latest entry instructions from the seller or venue. Confirm how the ticket will be delivered, whether a transfer is required, and what identification or bag rules apply.

**[Review event details →](https://www.ticketscan.io/watchlist)**

**Trigger logic:** Send 3–4 days before the event if the watchlist item remains active and the event date is still in the future.  
**Success metric:** Event-detail view or outbound seller click; guard against sends after the event date.

## Measurement

Track per user and step: delivered, bounced, opened, clicked, event-detail view, venue-guide click, outbound seller click, watchlist removal, unsubscribe, and complaint. Do not label this sequence a revenue or savings win until provider delivery and conversion telemetry exists.
