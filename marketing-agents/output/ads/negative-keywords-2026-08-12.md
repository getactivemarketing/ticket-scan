# Negative Keyword Additions — 2026-08-12

**Status: Proposed only.** No Google Ads search-terms export was available, so these were not applied. Review actual query context before adding them at campaign level.

## Candidate exact / phrase negatives

| Intent to exclude | Terms |
|---|---|
| Free / giveaway | `[free tickets]`, `"free concert tickets"`, `"free sports tickets"`, `"ticket giveaway"` |
| Selling / employment | `[sell my tickets]`, `"sell concert tickets"`, `"ticket seller jobs"`, `"ticketmaster jobs"` |
| Refund / support | `[ticket refund]`, `"cancel ticket order"`, `"ticketmaster customer service"`, `"stubhub support"` |
| Scanning / venue operations | `[ticket scanner]`, `"ticket scanning jobs"`, `"ticket usher jobs"` |
| Templates / fake documents | `[ticket template]`, `"printable ticket template"`, `"fake tickets"`, `"counterfeit tickets"` |
| Non-purchase research | `"ticket barcode generator"`, `"download ticket"`, `"make a ticket"` |

## Guardrails

- Do not negative-match `cheap tickets`, `ticket deals`, `compare tickets`, `ticket prices`, event names, artists, teams, or venues without query-level evidence.
- Keep `ticketscan`, `ticketscan tickets`, and `ticketscan compare` eligible for brand defense.
- Prefer exact or phrase negatives first; do not add broad negatives from this list without reviewing the search-terms report.
