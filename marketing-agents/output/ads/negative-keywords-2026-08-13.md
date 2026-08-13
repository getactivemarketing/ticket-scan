# Negative Keyword Additions — 2026-08-13

**Status: Proposed only.** No live Google Ads search-terms export was available, so these terms were not applied.

## Candidate exact / phrase negatives

| Intent to exclude | Terms |
|---|---|
| Free / giveaway | `[free tickets]`, `"free concert tickets"`, `"free sports tickets"`, `"ticket giveaway"` |
| Selling / jobs | `[sell my tickets]`, `"sell concert tickets"`, `"ticket seller jobs"`, `"ticketmaster jobs"` |
| Refund / support | `[ticket refund]`, `"cancel ticket order"`, `"ticketmaster customer service"`, `"stubhub support"` |
| Venue operations | `[ticket scanner]`, `"ticket scanning jobs"`, `"ticket usher jobs"` |
| Templates / fraud | `[ticket template]`, `"printable ticket template"`, `"fake tickets"`, `"counterfeit tickets"` |
| Non-purchase utility | `"ticket barcode generator"`, `"download ticket"`, `"make a ticket"` |

## Guardrails

- Prefer exact or phrase negatives first; do not broad-match this list without query evidence.
- Do not exclude `cheap tickets`, `ticket deals`, `compare tickets`, `ticket prices`, event names, artists, teams, venues, or TicketScan brand terms without review.
- Keep `ticketscan`, `ticketscan tickets`, and `ticketscan compare` eligible for brand defense.
- Import only after the search-terms report is available and query intent is confirmed.
