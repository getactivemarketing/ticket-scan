# TicketScan Social Daily — 2026-09-30

Created six posts for September 30 and appended them to `marketing-agents/content-calendar.json`:

- 3 Twitter/X posts at 9:00 AM, 1:00 PM, and 5:00 PM ET
- 1 Instagram post at 11:00 AM ET
- 1 Threads post at 9:30 AM ET
- 1 TikTok description at 12:00 PM ET

Five unique images were generated and reviewed at delivery dimensions:

- `2026-09-30-twitter-compare-every-time.png`
- `2026-09-30-twitter-ask-seatGeek.png`
- `2026-09-30-twitter-buy-signal.png`
- `2026-09-30-instagram-watchlist.png`
- `2026-09-30-threads-price-check.png`

The copy uses verified data from today’s analytics dashboard: 260 registered users, 254 watchlist items, and current watchlist interest around Harry Styles, Ariana Grande, and an NBA Finals listing. Current price-history data is stale, so no current dollar prices or savings claims were invented.

## Publishing check

The supplied production endpoints were tested with an empty payload to avoid accidental publication:

- Typefully post: HTTP 404, endpoint unavailable
- Typefully daily tip: HTTP 404, endpoint unavailable
- Instagram post: HTTP 404, endpoint unavailable
- Instagram daily tip: HTTP 400, route exists and requires `image_url`

No post was confirmed publicly published. The calendar and generated assets are ready for the downstream scheduler.

## Validation

- Calendar parses as valid JSON.
- Exactly six entries dated `2026-09-30` are present.
- All five visual posts have unique live-site media URLs.
- TikTok has no image URL and includes the requested publishing target.
- All five generated assets exist and passed visual inspection.
