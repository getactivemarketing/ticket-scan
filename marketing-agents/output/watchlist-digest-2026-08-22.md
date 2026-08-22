# Watchlist Digest Prep — 2026-08-22

Status: **Do not send as a price-movement digest yet.** Production price history is stale (latest record: 2026-07-24), no watchlist row has a target price, and the alert-detail endpoint returns HTTP 500. The copy below is a transparent reminder draft; it contains no invented prices or recommendations.

## Global framing

Subject A: `Your TicketScan watchlist update — [X] events coming up`

Subject B: `Your tickets are on the clock — here’s what we can verify`

Preview: `We found [X] upcoming events on your watchlist. We’ll flag real price movement when fresh data arrives.`

CTA: `View my watchlist` → https://www.ticketscan.io/watchlist

Use `Hi there,` because the admin API provides email addresses but no display names. Replace `[X]` with the recipient’s count below.

## Recipient-ready content

### alishaoverstreet@live.com — 1 event

You’re watching **The Red Clay Strays** at Moda Center on Aug 29 — 7 days away. We don’t have a fresh price check, so we won’t pretend this is a deal or a dud. No target price is set yet; we’re still tracking it.

### bellsworth08@gmail.com — 1 event

You’re watching **Goose** at Red Rocks Amphitheatre on Aug 27 — 5 days away. Current price movement isn’t verifiable from the stale feed, and no target price is set. We’re still tracking it.

### cutekitten1234@icloud.com — 6 events

You’re watching six **Harry Styles: Together, Together** dates at Madison Square Garden: Aug 26, Aug 28, Aug 29, Sep 2, Sep 4, and Sep 5. They’re 4–14 days away. Price movement is unavailable, and no target price is set on these rows.

### eemorkeviciute@gmail.com — 1 event

You’re watching **Preseason Game 2: Buffalo Bills v Pittsburgh Steelers** at Highmark Stadium on Aug 27 — 5 days away. Fresh pricing is unavailable, so there’s no honest buy/wait call yet. No target price is set.

### fnziman@gmail.com — 1 event

You’re watching **Ishay Ribo with The Israel Philharmonic Orchestra** at Radio City Music Hall on Aug 27 — 5 days away. No verified price movement is available, and no target price is set.

### ginacmccarty@gmail.com — 1 event

You’re watching **Jason Aldean: Songs About Us Tour 2026** at The Wharf Amphitheater on Aug 29 — 7 days away. Fresh marketplace data is pending, so we can’t verify a price change or recommendation. No target price is set.

### jerrykielbasa@gmail.com — 1 event

You’re watching **Florida Gators Football vs. Florida Atlantic University Owls Football** at Ben Hill Griffin Stadium on Sep 5 — 14 days away. We don’t have a current price check to support a recommendation, and no target price is set.

### raylenekfowler@gmail.com — 1 event

You’re watching **BTS WORLD TOUR ‘ARIRANG’ IN LOS ANGELES** at SoFi Stadium on Sep 5 — 14 days away. Price movement is not currently verifiable, and no target price is set.

### rgbarrasso@gmail.com — 1 event

You’re watching **Bruno Mars Wed 8/26/26** at MetLife Stadium Suites on Aug 26 — 4 days away. Current pricing is not verifiable from the stale data feed, and no target price is set.

### savsaurusrex@gmail.com — 1 event

You’re watching **My Chemical Romance The Black Parade 2026** at Coors Field on Aug 27 — 5 days away. We can’t verify price movement yet, and no target price is set.

### spcoog83@gmail.com — 1 event

You’re watching **Olivia Dean: The Art Of Loving Live** at Toyota Center on Aug 25 — 3 days away. We don’t have a current price check to support a recommendation, and no target price is set.

### taranimeramaro@gmail.com — 2 upcoming events

You’re watching **Bruno Mars - The Romantic Tour** at MetLife Stadium on Aug 22 and Aug 25. One event is today and the other is 3 days away. We cannot verify current prices from the stale feed, and no target price is set. Confirm the Aug 22 event has not started before sending.

### themodestduckling@gmail.com — 1 event

You’re watching **My Chemical Romance The Black Parade 2026** at Petco Park on Aug 30 — 8 days away. We don’t have a fresh price check to compare, and no target price is set.

### tosophiameyer@gmail.com — 7 events

You’re watching seven **Harry Styles: Together, Together** rows at Madison Square Garden / MSG Suites: Aug 26, Aug 28 (two venue rows), Aug 29, Sep 2, Sep 4, and Sep 5. They’re 4–14 days away. Price movement is unavailable, and no target price is set. Deduplicate the Aug 28 venue variants before production send if appropriate.

## Send QA

- Do not say prices are down/up, name a dollar amount, or say “buy now” until price tracking is current.
- Use the CTA above the fold: `View my watchlist` → https://www.ticketscan.io/watchlist.
- This is 14 recipients with near-term events, not the entire 135-user watchlist audience.
- After a successful fresh price run, regenerate status lines from `price_history` before sending.
