# Comparison Page Spec: TicketScan vs Vivid Seats

**Route:** `/compare/ticketscan-vs-vivid-seats`  
**Owner:** Content Agent (Agent 1)  
**Purpose:** capture comparison-intent searches while positioning TicketScan as a pre-purchase intelligence layer, not a seller.

## Primary message

**Vivid Seats helps you complete a protected purchase. TicketScan helps you compare the market before you choose where and when to buy.**

## Page structure

1. H1: `TicketScan vs Vivid Seats: Which Is Better for Comparing Ticket Prices?`
2. Neutral short answer with “best for” split.
3. Feature matrix: marketplace inventory, checkout, all-in display, Buyer Guarantee, Rewards, Lowest Price Guarantee, cross-market comparison, price history, target-price alerts, buy/wait recommendation, seat maps, delivery/support.
4. “Use both” workflow: search TicketScan → compare equivalent listings → inspect timestamp/history → choose a marketplace for checkout.
5. Fees and comparison methodology: same event/date/venue/section/row/quantity, total-price basis, timestamp, and source limitations.
6. FAQ: Is TicketScan a seller? Does TicketScan guarantee tickets? What does Vivid’s Buyer Guarantee cover? What is Rewards? What is the Lowest Price Guarantee? Can TicketScan alert me when a target is reached?
7. CTA: `Compare this event`; secondary `Track a price` only after alert QA passes.

## Accuracy rules

- Do not claim TicketScan has Vivid’s inventory, checkout, guarantee, Rewards, app, or customer support.
- Do not claim TicketScan is cheaper without a live, timestamped equivalent-listing comparison.
- Do not imply Vivid’s guarantee covers every scenario; link to its current terms.
- Do not promise alerts while the price tracker is stale or `/api/admin/alerts` is broken.

## SEO

- Primary: `TicketScan vs Vivid Seats`
- Secondary: `Vivid Seats alternative`, `compare Vivid Seats prices`, `Vivid Seats fees`, `ticket price comparison`
- Link to `/compare`, `/how-it-works`, fee explainer, and a live event comparison.
- Add FAQ schema only for visible factual answers.

## Measurement

Track `comparison_page_view`, `compare_cta_click`, `search_submit`, `compare_view`, `signup_complete`, `watchlist_add`, and `outbound_ticket_click` with `competitor=vivid-seats`, landing path, and UTM fields. These events are currently not verified in the frontend and require Analytics/Engineering coordination.
