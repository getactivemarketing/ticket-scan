# TicketScan Email Weekly — 2026-10-23

## Executive summary

Do not send the existing drip or price-alert templates this week. The live admin API reports no recorded drip sends, no performance rows, and no email engagement telemetry. More importantly, the current templates promise price tracking, price alerts, price comparisons, and savings claims that are not currently supportable.

This deliverable replaces those claims with verified event discovery, onsale information, watchlists as a way to save events for later, venue guides, and general ticket-buying advice.

## 1. Drip sequence performance

Source checked: deployed `/api/admin/drip-stats` on 2026-10-23.

| Email | Scheduled | Sends recorded | Opens | CTR | Conversions | Decision |
|---|---:|---:|---:|---:|---:|---|
| E1 | Day 3 | 0 | Not instrumented | Not instrumented | Not instrumented | Rewrite before resuming |
| E2 | Day 7 | 0 | Not instrumented | Not instrumented | Not instrumented | Pause; existing copy makes timing/price claims |
| E3 | Day 14 | 0 | Not instrumented | Not instrumented | Not instrumented | Pause; existing copy claims live comparisons |
| E4 | Day 21 | 0 | Not instrumented | Not instrumented | Not instrumented | Safe concept, but add telemetry first |
| E5 | Day 30 | 0 | Not instrumented | Not instrumented | Not instrumented | Rewrite; existing copy mentions alerts |

There is no statistically defensible weakest performer because no email has a recorded send. The priority weak point is E1: it is the first conversion opportunity and currently contains the most direct unsupported promises. The replacement below is ready for an `index.js` template update, but should not be activated until SMTP delivery and event tracking are verified.

### E1 replacement: post-signup orientation

**Subject variants**

1. Your next ticket search starts here
2. Find the event. Check the details. Save it for later.
3. A simpler way to plan your next night out

**Preview text:** Search upcoming events, check onsale details, and save the ones you may want to revisit.

**Body copy**

Hi {{first_name}},

Ticket buying gets easier when you separate discovery from checkout.

TicketScan helps you find upcoming concerts, sports, theater, and other events, then check the practical details before you buy: the event date, venue, onsale or presale information, and where tickets are available.

Start with one event you are considering:

1. Search by city, team, artist, or venue.
2. Open the event page and confirm the date and location.
3. Save it to your watchlist if you want a quick way back to it.
4. Before checkout, compare the all-in total, seat location, seller, and buyer protections.

One useful rule: a low headline price is not the same thing as a low final total. Review fees and delivery details before you commit, and be cautious with listings marked speculative.

**CTA:** Find an event

**CTA URL:** `https://www.ticketscan.io/dashboard`

**Send timing:** Day 3 after signup, at the user's local morning hour if available; otherwise 10:00 UTC. Keep the existing Day 3 timing for the first test.

**Personalization:** Use first name only until event-preference and location fields are reliably stored. Do not imply that a watchlist item is being price-monitored.

**Success metrics:** delivered rate, unique open rate, CTA click rate, first event search, first watchlist add, and unsubscribe rate. Add these events to analytics before declaring a winner.

## 2. Weekly newsletter — ready for send

**Subject:** The ticket details worth checking before you buy

**Preview text:** Live event listings, venue guides, and a safer checkout checklist for this week.

### This Week in Tickets

Late October is a good time to plan around the events already on your calendar: confirm the date and venue, check whether a presale or public onsale applies, and compare the complete checkout total before buying. TicketScan can help you find events and the places selling them; the final seller page is the source of truth for availability, fees, and buyer protections.

### Featured live listings this week

These are examples returned by the deployed event-search endpoint for October 23, 2026. No price trend or TicketScan price statistic is included.

- **Los Angeles Lakers vs. LA Clippers** — Oct 23, Crypto.com Arena. [View listing →](https://www.ticketmaster.com/los-angeles-lakers-vs-la-clippers-los-angeles-california-10-23-2026/event/2C00650CC3050DF0)
- **Bluey's Big Play** — Oct 23, Hollywood Pantages Theatre. [View listing →](https://www.ticketmaster.com/blueys-big-play-los-angeles-california-10-23-2026/event/0B00648A7AFC23D0)
- **Rapsody with Live Band** — Oct 23, Blue Note Los Angeles. [View listing →](https://www.ticketweb.com/event/rapsody-with-live-band-blue-note-los-angeles-tickets/14311254)
- **The Banksy Museum New York!** — Oct 23, Banksy Museum New York. [View listing →](https://www.universe.com/events/the-banksy-museum-new-york-tickets-5PKNY0?ref=ticketmaster)

Listings and availability can change. Confirm the date, venue, seller, fees, and ticket terms on the checkout page.

### Ticket Tip of the Week

Compare the all-in total, not the first number you see. Check the same section or seat type across available sellers, then review fees, delivery timing, refund terms, and whether the listing is speculative.

### World Cup 2026 Update

The 2026 FIFA World Cup ran from June 11 through July 19, 2026, so the tournament itself is complete. TicketScan's World Cup pages remain useful as venue references: they cover the 16 host stadiums, seating sections, capacity, and practical venue tips for future events. [Explore the World Cup venue guides →](https://www.ticketscan.io/world-cup-2026)

### From the Blog

**World Cup Final 2026: 5 Ticket Platforms Compared on Price, Fees, and Buyer Protection** — A guide to the questions buyers should ask when comparing official and resale listings, with emphasis on fees and buyer protections. [Read the guide →](https://www.ticketscan.io/blog/world-cup-final-2026-platforms-compared-price-fees-protection)

---

TicketScan.io · [Unsubscribe](https://www.ticketscan.io/) · [Browse events](https://www.ticketscan.io/dashboard)

## 3. New sequence: Post-signup activation without price claims

**Audience:** Registered users who have not added a watchlist item. Exclude users who have unsubscribed or hard-bounced.

### Email 1 — Day 1: Start with one event

**Subject:** What are you planning to see?

**Preview:** Search by city, team, artist, or venue and save an event you may want to revisit.

**Body:**

Hi {{first_name}},

Your first TicketScan search can be simple: choose a city, team, artist, or venue and open an event that interests you. Confirm the date and location, then save it to your watchlist so you can find it again without starting over.

**CTA:** Search events → `https://www.ticketscan.io/dashboard`

**Trigger:** Account created and zero watchlist items.

**Success metric:** First event search and first watchlist add within 48 hours.

### Email 2 — Day 3: Know the venue

**Subject:** The section matters as much as the seat

**Preview:** Use a venue guide to understand sections, sightlines, capacity, and entry considerations.

**Body:**

Before you buy, look up the building—not just the event. TicketScan venue guides explain section names, seating layouts, capacity, and practical tips so you know what a listing means before checkout.

**CTA:** Browse venue guides → `https://www.ticketscan.io/venues`

**Trigger:** Still zero watchlist items, or one event search with no watchlist add.

**Success metric:** Venue-guide view and watchlist add.

### Email 3 — Day 7: Be ready for onsale

**Subject:** Three details to check before onsale

**Preview:** Put the date, access rules, and total budget in one place before tickets go live.

**Body:**

For an upcoming onsale, check three things: the presale or public-onsale time, the seller's checkout rules, and the maximum all-in total you are comfortable paying. Save the event so the date and venue are easy to revisit, then verify everything on the official seller page before buying.

**CTA:** Review upcoming events → `https://www.ticketscan.io/dashboard`

**Trigger:** Still zero watchlist items on Day 7.

**Success metric:** Return session, event detail view, and watchlist add.

**Pause rule:** Do not send the next message after an unsubscribe, hard bounce, or completed watchlist add unless the user has opted into a separate event-reminder product.

## 4. List health and segmentation

### Current counts

- Newsletter subscribers: **7 total; 7 active**.
- Subscriber sources: **site-footer 4, onsales 1, homepage 1, test 1**.
- Registered users: **267**.
- Users with at least one watchlist item: **153**.
- Users with at least three watchlist items: **17**.
- Watchlist items: **256**.
- Drip performance rows: **0**.
- Open, click, conversion, bounce, and complaint telemetry: **not available**.

### Segment status

| Segment | Size | Confidence | Recommendation |
|---|---:|---|---|
| Active email users: opened in last 30 days | Unknown | No open tracking | Add provider event webhooks before segmenting |
| At-risk: no open in 30–60 days | Unknown | No open tracking | Do not infer from signup date |
| Dormant: no open in 60+ days | Unknown | No open tracking | Do not send a win-back sequence yet |
| World Cup interested | 0 explicitly tagged | Source/page history unavailable | Add source and page-interest fields; do not treat all subscribers as interested |
| High-value users: 3+ watchlist items | 17 registered users | Watchlist proxy, not email engagement | Use for an in-product or permissioned activation test, not an email blast without consent mapping |

### Hygiene actions

- **Do not delete records automatically.** `test@example.com` and `api-test` appear in the newsletter list, but there is no bounce telemetry or safe deletion workflow. Confirm test-record ownership, then suppress or remove them deliberately.
- Validate addresses at signup and add hard-bounce suppression before the next send.
- Add `source`, `interest`, `last_opened_at`, `last_clicked_at`, `last_delivered_at`, `bounce_type`, and `unsubscribe_at` fields or provider-backed equivalents.
- Keep the newsletter list separate from registered-user lifecycle mail and document consent for each send.

## 5. Handoffs

- **Content Agent (Agent 1):** no lead-magnet request this week. If requested, create a venue-planning or all-in-ticket-checklist asset; do not use price-alert or price-history promises.
- **CRO Agent (Agent 6):** review the signup-to-first-search and signup-to-first-watchlist path; instrument `signup`, `event_search`, `event_view`, `watchlist_add`, and outbound seller click.
- **Growth Agent (Agent 8):** design win-back only after opens/clicks and delivery status exist; current inactivity cannot be measured from the API.

## Verification notes

- Live API checks performed 2026-10-23: `/api/admin/newsletter`, `/api/admin/drip-stats`, `/api/admin/users`, `/api/admin/watchlist`, `/api/events/search`.
- World Cup dates checked against [FIFA's official schedule](https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/fifa-world-cup-26-match-schedule-revealed).
- The existing `index.js` drip templates were reviewed and contain unsupported price-alert, price-history, comparison, and savings claims; they should be paused pending replacement and measurement.
