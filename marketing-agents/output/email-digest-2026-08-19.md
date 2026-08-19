## Watchlist Digest — 2026-08-19

Status: **Ready for send after a fresh price refresh.** The API returned no current price comparisons, no target prices, and stale price history. Replace the pending-price line with a verified price movement before sending.

### Reusable Email

**Subject A:** Your Ticket Watchlist Update: [X] events need a look  
**Subject B:** [Event] is [X] days away — check prices before they move  
**Preview:** We’re checking the market so you don’t have to guess.

Hi [Name],

Here’s today’s update on the tickets you’re watching:

🟡 **[Event]** — Live price check pending — [X] days until the event — **Refresh prices before buying**

We’re refreshing marketplace data before making a buy/wait call. Ticket prices are slippery little creatures; a stale number is worse than no number.

**[View my watchlist](https://www.ticketscan.io/watchlist)**

### Urgency Queue

| Recipient | Events tracked in next 14 days | Earliest event | Send note |
|---|---:|---|---|
| sunny_d27@yahoo.com | 1 | Backstreet Boys: Into The Millennium — Aug 20, Sphere | 1 day; highest urgency |
| taranimeramaro@gmail.com | 3 | Bruno Mars — Aug 21/22/25, MetLife Stadium | 3-date cluster |
| rgbarrasso@gmail.com | 1 | Bruno Mars Wed 8/26/26 — Aug 26, MetLife Stadium Suites | Verify hospitality exclusion |
| cutekitten1234@icloud.com | 4 | Harry Styles — Aug 26/28/29/Sep 2, Madison Square Garden | 4-date cluster |
| tosophiameyer@gmail.com | 5 | Harry Styles — Aug 26/28/29/Sep 2, MSG / MSG Suites | Verify suite listing; 5-date cluster |
| spcoog83@gmail.com | 1 | Olivia Dean — Aug 25, Toyota Center | 6 days |
| bellsworth08@gmail.com | 1 | Goose — Aug 27, Red Rocks Amphitheatre | 8 days |
| eemorkeviciute@gmail.com | 1 | Bills v Steelers — Aug 27, Highmark Stadium | 8 days |
| fnziman@gmail.com | 1 | Ishay Ribo — Aug 27, Radio City Music Hall | 8 days |
| savsaurusrex@gmail.com | 1 | My Chemical Romance — Aug 27, Coors Field | 8 days |
| alishaoverstreet@live.com | 1 | The Red Clay Strays — Aug 29, Moda Center | 10 days |
| ginacmccarty@gmail.com | 1 | Jason Aldean — Aug 29, The Wharf Amphitheater | 10 days |
| themodestduckling@gmail.com | 1 | My Chemical Romance — Aug 30, Petco Park | 11 days |

### Send Rules

- Send only after the tracker writes fresh observations.
- Use Subject B for the urgency queue; use Subject A for users outside the urgency segment.
- Do not send a target-hit or buy-now claim while all targets are null.
- Deduplicate same-event multi-date rows only if the email template clearly lists every date.
