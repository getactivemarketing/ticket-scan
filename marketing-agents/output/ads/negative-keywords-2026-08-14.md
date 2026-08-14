# Negative Keyword Additions — 2026-08-14

**Status:** Proposed only. No live Google Ads search-terms report was available, so these terms were not applied.

Review actual query context first. Prefer exact or phrase negatives before broad matching.

## Candidate negatives

| Intent to exclude | Terms |
|---|---|
| Free / giveaway | `[free tickets]`, `"free concert tickets"`, `"free sports tickets"`, `"ticket giveaway"` |
| Selling / jobs | `[sell my tickets]`, `"sell concert tickets"`, `"ticket seller jobs"`, `"ticketmaster jobs"` |
| Refund / support | `[ticket refund]`, `"cancel ticket order"`, `"ticketmaster customer service"`, `"stubhub support"` |
| Venue operations | `[ticket scanner]`, `"ticket scanning jobs"`, `"ticket usher jobs"` |
| Templates / fraud | `[ticket template]`, `"printable ticket template"`, `"fake tickets"`, `"counterfeit tickets"` |
| Non-purchase utility | `"ticket barcode generator"`, `"download ticket"`, `"make a ticket"` |

## Guardrails

- Do not exclude `cheap tickets`, `ticket deals`, `compare tickets`, `ticket prices`, event names, artists, teams, or venues without query-level evidence.
- Keep `ticketscan`, `ticketscan tickets`, and `ticketscan compare` eligible for brand defense.
- Import only after checking impressions, clicks, and query intent in the live report.
