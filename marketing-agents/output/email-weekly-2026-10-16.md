# TicketScan Email Marketing — Weekly Report

**Date:** 2026-10-16  
**Audience:** Email Marketing / Growth / CRO  
**Status:** Drafts ready for review; no emails sent by this report

## Executive summary

The live admin API reports 266 registered users, 256 watchlist items, and 7 active newsletter subscribers. The drip table contains **zero sends**, so there is no reliable open-rate, click-through-rate, or conversion winner to optimize. The current email templates also contain price-alert and price-tracking claims that must not be sent while those product features are down.

Recommended action: pause the current five-email drip, replace it with the compliant copy below, and add delivery/open/click/conversion instrumentation before evaluating performance.

## Drip performance

| Email | Scheduled day | Sends recorded | Open rate | CTR | Conversions | Finding |
|---|---:|---:|---:|---:|---:|---|
| 1 | 3 | 0 | Not instrumented | Not instrumented | Not instrumented | No performance winner exists |
| 2 | 7 | 0 | Not instrumented | Not instrumented | Not instrumented | Current copy promotes unsupported timing/data claims |
| 3 | 14 | 0 | Not instrumented | Not instrumented | Not instrumented | Current copy promotes unavailable comparison data |
| 4 | 21 | 0 | Not instrumented | Not instrumented | Not instrumented | Safest existing topic: venue guidance |
| 5 | 30 | 0 | Not instrumented | Not instrumented | Not instrumented | Use for re-engagement around event discovery |

The `/api/admin/drip-stats` response returned an empty `stats` array and 20 pending users (the endpoint caps the pending list at 20). The schedule remains days 3, 7, 14, 21, and 30.

## Weakest-email decision and optimized replacement

There is no measured weakest performer. For operational purposes, replace Email 1 first because it is the earliest exposure and its current subject/body make unsupported price-alert promises.

### Subject-line test

1. **Find your next event in under a minute** (recommended)
2. Your next great night starts here
3. Concerts, games, shows: start with one search

**Preview text:** Search events, save the ones you care about, and get venue tips before you buy.

### Email 1 — Day 3 replacement

**Subject:** Find your next event in under a minute

Hi {{first_name}},

You signed up for TicketScan because you have an event in mind—or because you do not want to miss the next one. Start with one search: your favorite team, artist, venue, or city.

TicketScan helps you find upcoming events and the places selling tickets. Once you find something interesting, save it to your watchlist so it is easy to come back to.

Before you buy, check the all-in total, confirm the event date and venue, and compare the seller’s fees. If the listing is marked speculative, make sure you understand exactly what is—and is not—guaranteed.

**CTA:** [Search upcoming events](https://www.ticketscan.io/dashboard)

Not sure where to start? Browse our [venue guides](https://www.ticketscan.io/venues) for seating sections, capacity, and practical planning tips.

— The TicketScan Team

**Footer:** TicketScan.io · [Unsubscribe](https://www.ticketscan.io/unsubscribe)

## This week’s newsletter

**Subject:** Your fall ticket-planning checklist: events, venues, and the 2026 World Cup

**Preview text:** Find upcoming events, check the venue, and plan your next ticket purchase with fewer surprises.

### This Week in Tickets

Fall sports are in full swing, concert calendars are filling in, and World Cup planning is moving from “someday” to a real itinerary. This week, start with the event and venue you care about, then verify the date, seller, seat location, and all-in total before checkout.

### 🔥 Events worth browsing this week

- **NBA and NHL season:** Search your team or city to find upcoming games and available sellers. [Browse events →](https://www.ticketscan.io/dashboard)
- **Fall concerts and theater:** Use the event search to check onsale details and compare the final total across sellers before purchasing. [Find a show →](https://www.ticketscan.io/dashboard)
- **Your next venue visit:** Read the venue guide before choosing a section; sightlines, entrances, and upper-level layouts can matter as much as the ticket’s headline price. [Browse venue guides →](https://www.ticketscan.io/venues)

### 💡 Ticket Tip of the Week

Compare the all-in price—not just the first number you see. Add fees, taxes, delivery, and any required membership or parking cost before deciding which listing is actually the better deal.

### 🏟 World Cup 2026 Update

The 2026 FIFA World Cup runs June 11–July 19, 2026, across 16 stadiums in the United States, Canada, and Mexico, with 104 matches. TicketScan’s World Cup hub includes stadium-specific planning information for all 16 venues, including seating context and venue tips.

[Explore the World Cup 2026 guide →](https://www.ticketscan.io/world-cup-2026)

### From the Blog

**FIFA Just Pushed a World Cup Final Ticket to $10,990. Here’s How to Not Get Played.** A consumer-focused guide to variable pricing, official sales, resale listings, and the questions to ask before checkout.

[Read the guide →](https://www.ticketscan.io/blog/world-cup-2026-final-ticket-10990-dynamic-pricing)

---

TicketScan.io · [Unsubscribe](https://www.ticketscan.io/unsubscribe) · [Visit TicketScan](https://www.ticketscan.io)

## New sequence: post-signup activation (compliant version)

This replaces the requested price-alert activation flow with event discovery and watchlist actions until price tracking is restored.

### Trigger and suppression

- Trigger: a registered user has no watchlist item after signup.
- Start: 24 hours after signup.
- Suppress after the user adds a watchlist item, unsubscribes, hard-bounces, or receives all three emails.
- Do not send to contacts without marketing consent.
- Personalize with first name, preferred city, favorite team/artist, or the last search when available; omit empty fields.

### Email 1 — Day 1: Start with one event

**Subject:** Start with one event

**Preview:** Search a team, artist, venue, or city and save what catches your eye.

Hi {{first_name}},

The fastest way to make TicketScan useful is to search for one event you would genuinely attend. Search by team, artist, venue, or city, then save the event to your watchlist so you can find it again without starting over.

**CTA:** [Find an event](https://www.ticketscan.io/dashboard)

### Email 2 — Day 3: Make the shortlist useful

**Subject:** Build a better event shortlist

**Preview:** Save a few real options, then compare dates, venues, and sellers side by side.

Hi {{first_name}},

A useful shortlist is specific: the event, the date, the venue, and the seller. Save the events you are considering, then check the details before you commit. A five-minute comparison can prevent a wrong-date, wrong-venue, or fee surprise.

**CTA:** [Review upcoming events](https://www.ticketscan.io/dashboard)

### Email 3 — Day 7: Know the venue before checkout

**Subject:** One thing to check before you buy

**Preview:** The venue guide can answer seating and arrival questions before checkout.

Hi {{first_name}},

Before you buy, look up the venue. TicketScan venue guides explain seating sections, capacity, entrances, and practical context so you know what a section name means before you pay for it.

**CTA:** [Browse venue guides](https://www.ticketscan.io/venues)

### Success metrics

- Primary: percentage of eligible users who add their first watchlist item within 7 days of signup.
- Secondary: search-to-watchlist rate, email click-to-watchlist rate, return session within 7 days, and unsubscribe rate.
- Guardrails: hard-bounce rate below 2%, complaint rate below 0.1%, and zero unsupported product claims in QA.

## List health and segmentation

### Measured counts

| Segment | Count | Confidence | Notes |
|---|---:|---|---|
| Active newsletter subscribers | 7 | High | Live `/api/admin/newsletter?active_only=true` |
| Total newsletter records | 7 | High | Same admin stats response |
| Registered users | 266 | High | Live `/api/admin/stats` |
| Users with at least one watchlist item | Not available | Low | API exposes item count (256), not a user-level distinct count |
| Watchlist items | 256 | High | Internal product count; do not describe as price tracking |
| Opened in last 30 days | Not instrumented | None | Provider events are not stored |
| No opens in 30–60 days | Not instrumented | None | Cannot classify |
| No opens in 60+ days | Not instrumented | None | Cannot classify |
| World Cup interested | Not instrumented | None | No page-visit/source join exposed |
| High-value users | Not instrumented | None | No comparison or activity event data exposed |
| Hard bounces / invalid emails | Not instrumented | None | No provider delivery-event table exposed |

### Recommendations

1. Do not delete or suppress addresses based on guesses; there is no bounce evidence in the current data.
2. Add provider delivery events for sent, delivered, opened, clicked, bounced, complained, and unsubscribed.
3. Store consent source and campaign source consistently for newsletter subscribers.
4. Add event instrumentation for search, event detail, outbound seller click, watchlist add, and venue-guide visit.
5. After 30 days of events, create the requested active, at-risk, dormant, World Cup, and high-value segments from observed behavior.

## Handoffs

- **Content Agent:** create a lead magnet around “The 2026 World Cup Venue & Ticket Planning Checklist,” using only verified venue and onsale facts; do not promise price alerts or price predictions.
- **CRO Agent:** audit the signup-to-first-watchlist path and ensure the post-signup CTA says “Save an event” rather than “Set a price alert.”
- **Growth Agent:** review the proposed activation sequence and define a reactivation trigger from actual return-session and watchlist events once instrumentation exists.

## Implementation notes

- No code was changed in this run.
- Before sending any drip or World Cup email, remove or quarantine existing templates that mention price alerts, price history, price comparisons, savings statistics, or buy-timing data.
- The current `/api/admin/drip-stats` endpoint cannot support open-rate, CTR, or conversion reporting; those metrics require delivery-provider webhooks and product-event storage.
