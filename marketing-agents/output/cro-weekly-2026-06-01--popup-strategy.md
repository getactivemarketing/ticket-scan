# Popup & Modal Strategy — 2026-06-01

## Correction (verified, carried)
The brief says "Newsletter signup popup exists." **It does not.** `grep -ri "popup|modal" web/src` → 0 matches. `NewsletterSignup` is two inline forms, homepage only (`page.tsx:285`, `:314`). There is no capture surface on any other page. This is the verified mechanism behind the newsletter conversion gap (project memory: form only on homepage; blog/footer CTAs elsewhere dead-end). **Recommend the brief be corrected upstream.**

## Hard dependency before building any email-capture popup
Captured emails land in `newsletter_subscribers`. The drip campaign reads `SELECT … FROM users` (`index.js:874`) and **never reads `newsletter_subscribers`** — so popup-captured emails get zero follow-up. **Ship the drip UNION (`users` ∪ `newsletter_subscribers`) in the same PR as the first popup, or the popup captures into a void.**

## Popups to build (priority order)

### P1 — Email capture, homepage + `/world-cup-2026/*`
- **Trigger:** exit-intent (desktop) / scroll-depth 60% (mobile), once per visitor via `localStorage` flag.
- **Copy:** email-only (no password). Headline ≤8 words, one benefit line, one CTA, visible dismiss. (Content Agent to supply.)
- **Frequency:** once per visitor; suppress for 30 days after dismiss.
- **Expected:** modest at current traffic; the value is building the first non-homepage capture surface, not a big absolute number.

### P2 — EventCard sign-up intercept (already exists, extend it)
The overlay at `EventCard.tsx:80–104` already fires when an anonymous user clicks track. Extend it to carry `?returnTo=/watchlist?event_id=X` into the register link so the user lands back on the event post-signup (depends on signup-flow fix #4).

### P3+ — welcome-back / price-changed-since-last-visit
Defer until analytics + a returning-visitor signal exist.

## WC timing note
Kickoff **2026-06-11 (T-10)**. The pre-kickoff capture window is short and a new signup today only receives drips 1–2 before kickoff. Build P1 + the drip UNION now or treat WC-specific drip copy as out of scope for this tournament.

> Long-form catalog: `cro-weekly-2026-05-04--popup-strategy.md`.
