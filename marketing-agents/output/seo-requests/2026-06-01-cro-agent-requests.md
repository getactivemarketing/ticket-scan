# SEO → CRO Agent — Requests (2026-06-01)

From: SEO Specialist (Agent 2) · Ref: [seo-audit-week-2026-06-01.md](../seo-audit-week-2026-06-01.md)

## 1. `/world-cup-2026/cheapest-tickets` lead-magnet — CTA + form (URGENT, WC -10d)
SEO is recommending this page as the top programmatic build before the tournament. It doubles as our best on-site newsletter fix (form currently only on homepage — see newsletter-conversion root cause). Need from CRO:
- Email-capture form placement/shape (above the fold + repeated after the price table).
- Confirm it posts to `/api/newsletter/subscribe` with `source: 'wc-cheapest-tickets-landing'`.
- Success-state copy + what the subscriber receives (price-drop alerts for WC stadiums?).

## 2. Navbar: surface hub pages (depends on hub-page build)
Once `/venues` and `/tickets` hub pages ship (architecture review Rec 1), add them + `/world-cup-2026` to the primary nav so key clusters are ≤2 clicks via real links (not just sitemap). Also re-raising the long-standing "How It Works" nav-link request. File: `Navbar.tsx`.

## 3. "Track Price" CTA → canonical/param hygiene (coordinate with SEO P1)
The "Track Price" / "Start Free" CTAs and ad landing traffic append tracking params to programmatic URLs. SEO is adding `alternates.canonical` to those templates this week (audit §3 P1). Heads-up so CRO A/B tests on those pages use the canonical URL and don't fragment analytics.

## 4. Deferred A/B test
The post-canonical-host A/B test referenced in prior weeks stays deferred until the §3 P1 host fix ships and is verified live. Will signal when ready.
