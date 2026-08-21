# Watchlist Digest Prep — 2026-08-21

Status: **Do not send as a price-movement digest yet.** The newest price-history record is 2026-07-24, all 21 upcoming rows lack target prices, and the alert-detail endpoint is failing. The copy below is safe to send as a transparent watchlist reminder after confirming the email provider is healthy.

## Global email framing

Subject A: `Your TicketScan watchlist update — [X] events coming up`

Subject B: `Your tickets are on the clock — here’s what we can verify`

Preview: `We found [X] upcoming events on your watchlist. We’ll flag real price movement as soon as fresh data arrives.`

CTA: `View my watchlist` → https://www.ticketscan.io/watchlist

## Recipient-ready variants

Use `Hi there,` because the API provides email addresses but no display names. Replace `[X]` with the recipient’s event count.

### bellsworth08@gmail.com — 1 event

Hi there,

You’re watching Goose at Red Rocks Amphitheatre on Aug 27 — 6 days away. We don’t have fresh enough price data to call this a deal or a dud yet, and no target price is set. We’ll keep tracking it.

View my watchlist: https://www.ticketscan.io/watchlist

### alishaoverstreet@live.com — 1 event

You’re watching The Red Clay Strays at Moda Center on Aug 29 — 8 days away. Current price movement is unavailable because the latest data check is stale. No target price is set, so there is no buy trigger to report.

View my watchlist: https://www.ticketscan.io/watchlist

### ginacmccarty@gmail.com — 1 event

You’re watching Jason Aldean: Songs About Us Tour 2026 at The Wharf Amphitheater on Aug 29 — 8 days away. We can’t verify a price change yet; fresh marketplace data is pending. No target price is set.

View my watchlist: https://www.ticketscan.io/watchlist

### savsaurusrex@gmail.com — 1 event

You’re watching My Chemical Romance The Black Parade 2026 at Coors Field on Aug 27 — 6 days away. Price movement is not verifiable from the current data feed, and no target price is set. We’re still tracking it.

View my watchlist: https://www.ticketscan.io/watchlist

### themodestduckling@gmail.com — 1 event

You’re watching My Chemical Romance The Black Parade 2026 at Petco Park on Aug 30 — 9 days away. We don’t have a fresh price check to compare, and no target price is set.

View my watchlist: https://www.ticketscan.io/watchlist

### fnziman@gmail.com — 1 event

You’re watching Ishay Ribo with The Israel Philharmonic Orchestra at Radio City Music Hall on Aug 27 — 6 days away. No verified price movement is available yet, and no target price is set.

View my watchlist: https://www.ticketscan.io/watchlist

### eemorkeviciute@gmail.com — 1 event

You’re watching Preseason Game 2: Buffalo Bills v Pittsburgh Steelers at Highmark Stadium on Aug 27 — 6 days away. Fresh price data is unavailable, so we won’t pretend a buy recommendation exists. No target price is set.

View my watchlist: https://www.ticketscan.io/watchlist

### cutekitten1234@icloud.com — 5 events

You’re watching five Harry Styles: Together, Together dates at Madison Square Garden: Aug 26, Aug 28, Aug 29, and Sep 2. The Aug 26 show is 5 days away; the others are 7, 8, and 12 days away. Current price movement is unavailable, and no target price is set on these rows.

View my watchlist: https://www.ticketscan.io/watchlist

### taranimeramaro@gmail.com — 3 events

You’re watching three Bruno Mars dates at MetLife Stadium: Aug 21, Aug 22, and Aug 25. The Aug 21 show is today; the others are 1 and 4 days away. We cannot verify current prices from the stale feed, and no target price is set.

View my watchlist: https://www.ticketscan.io/watchlist

### tosophiameyer@gmail.com — 5 events

You’re watching five Harry Styles: Together, Together rows: Aug 26, Aug 28 (two venue rows, including MSG Suites), Aug 29, and Sep 2. These are 5–12 days away. Price movement is currently unavailable, and no target price is set.

View my watchlist: https://www.ticketscan.io/watchlist

### spcoog83@gmail.com — 1 event

You’re watching Olivia Dean: The Art Of Loving Live at Toyota Center on Aug 25 — 4 days away. We don’t have a current price check to support a recommendation, and no target price is set.

View my watchlist: https://www.ticketscan.io/watchlist

### rgbarrasso@gmail.com — 1 event

You’re watching Bruno Mars Wed 8/26/26 at MetLife Stadium Suites on Aug 26 — 5 days away. Current pricing is not verifiable from the stale data feed, and no target price is set.

View my watchlist: https://www.ticketscan.io/watchlist

## QA notes

- Do not use “prices down,” “buy now,” “target hit,” or dollar amounts until price tracking is current.
- The Aug 21 Bruno Mars event is same-day; if sent, add a clear “today” label and verify the event has not started in the recipient’s timezone.
- The two `tosophiameyer@gmail.com` Aug 28 rows may be duplicate/venue variants; deduplicate before production send.
