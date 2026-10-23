# Email Agent Handoff — Win-Back Sequence

## Sending gate

Do not send from signup age alone. First add `last_seen_at`, consent and suppression checks, hard-bounce handling, provider delivery IDs, open/click/unsubscribe events, and an idempotent queue. The current drip endpoint has 20 pending users but zero recorded sends.

## Sequence

### Email 1 — 7–10 days after measured inactivity

Subject: **Your saved ticket list is still here**

Preview: Review the dates, venues, and event details you saved.

Body angle: remind the user of saved event names and invite them to review onsale timing, venue guidance, and seller links.

CTA: **Review your saved events**

### Email 2 — 14 days after measured inactivity

Subject: **A quick look at your saved events**

Preview: Keep the events you care about and remove the rest.

Body angle: invite list cleanup and planning; do not mention price movement or alerts.

CTA: **Open your ticket list**

### Email 3 — 30 days after measured inactivity

Subject: **Keep only the events that matter**

Preview: A clean saved list makes the next ticket decision easier.

Body angle: offer a clean-slate review and preference control.

CTA: **Manage your saved events**

## Suppression and measurement

Suppress after return, unsubscribe, hard bounce, complaint, or a recent lifecycle send. Measure delivered, opened, clicked, saved-page view, seller click, return session, unsubscribe, and complaint rate. No price or savings claims.
