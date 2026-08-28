# Design 2.0 Rollout — Foundation and App Surface

**Date:** 2026-08-28
**Status:** Approved design, ready for implementation planning
**Source of truth:** `DESIGN.md` (2.0 direction, "The Concourse"). This spec does not
re-open the visual direction. It says how to build what `DESIGN.md` already
specifies, and records the decisions `DESIGN.md` left open.

---

## 1. Context

`DESIGN.md` was committed on 2026-08-27 as a complete 2.0 design system and marked
"proposed, not yet implemented". The codebase is still on 1.0:

- `web/src/app/globals.css` is 61 lines carrying the 1.0 token set.
- `web/src/app/layout.tsx` still loads Poppins as the display face and Geist Mono
  as the mono face.
- `web/src/components/OnsaleRow.tsx` exists and cites `DESIGN.md`. It follows the
  status triad and uses tabular figures, but is built on light surfaces
  (`bg-gray-100`, `text-gray-500`) instead of Raised Navy, and is wired into the
  onsale calendar only.

Across 46 `.tsx` files: 33 reference `bg-white`, 29 reference `brand`, 27 reference
`font-heading`, 18 reference `navy`.

**Stack:** Next 16.1.1 (App Router), React 19.2.3, Tailwind v4 (CSS-first `@theme`),
`@tailwindcss/typography`, Recharts 3.6. TypeScript on the frontend.

---

## 2. Goal

Implement the foundation of `DESIGN.md` 2.0 and invert the app surface to navy,
following the migration order `DESIGN.md` §7 prescribes. The app surface is chosen
first because it is where density pays off and where the fewest SEO pages are at
risk.

### In scope

1. Token foundation in `globals.css`.
2. Typography swap in `layout.tsx`.
3. `OnsaleRow` rebuilt to spec and wired into the app surface.
4. App surface inverted to navy: `dashboard`, `watchlist`, `event/[id]`.
5. Shared chrome (`Navbar`, `Footer`) given the 2.0 visual treatment, links unchanged.
6. Interaction and state quality pass on everything touched.

### Explicitly out of scope

Deferred to a later pass, and must not be modified by this work:

- The 60+ content and SEO pages: `venues/[slug]`, `tickets/[slug]`, `blog`,
  `world-cup-2026`, and their index pages.
- The homepage (`app/page.tsx`).
- Navigation **links** and information architecture. `DESIGN.md` §4 calls for the nav
  to be reduced to Events · Venues · Onsales · Blog and for Compare and World Cup to
  be dropped. That is an internal-linking change with SEO weight and is deferred.
- The weekly email rendering (backend, `index.js`).
- Any backend change. This work is frontend-only.

### Non-goals

- No framework, styling-library, or dependency migration. Tailwind v4 stays.
- No re-derivation of the visual direction.
- No refactor unrelated to the rollout.

---

## 3. Constraints

- **The brand hues are fixed.** `#1E63FF`, `#0D1B3D`, `#22C1C3`, `#16C784`. Everything
  added is a tint or shade within those hues. No new colour families.
- **Additive, not a rewrite.** The 1.0 tokens stay defined so the ~33 untouched files
  continue to render correctly. 1.0 and 2.0 tokens coexist until the content surface
  migrates.
- **Do not break functionality.** Auth, search, watchlist CRUD, price charts, and the
  events API all keep working. Verify after each change.
- **Status is never carried by colour alone.** Every status pill pairs its colour with
  a word.

---

## 4. Token foundation — `web/src/app/globals.css`

Add to the existing `@theme inline` block. Nothing existing is removed.

**Navy family (surface hierarchy — depth by stacked tonal layers, not borders or shadows):**

| Token | Hex | Role |
|---|---|---|
| `--color-deep-void` | `#070F26` | Page background behind everything |
| `--color-navy` | `#0D1B3D` | Level 1 — sections, page headers, nav (already defined in 1.0) |
| `--color-navy-raised` | `#162D5A` | Level 2 — cards, rows, widgets on Level 1 |
| `--color-navy-hairline` | `#1F3A6B` | Borders only where genuinely required (inputs, table rules) |

**Blue family (the light source):**

| Token | Value | Role |
|---|---|---|
| `--color-beacon` | `#4A82FF` | Hover and pressed; link colour on light grounds |
| `--color-blue-glow` | `rgba(30, 99, 255, 0.18)` | Ambient glow — replaces drop shadows on dark |
| `--color-blue-wash` | `rgba(30, 99, 255, 0.10)` | Selected rows, active filter chips |

**Avoid duplicate tokens.** Two of the values above already exist under 1.0 names:
`--color-navy-light` is already `#162D5A` (the Raised Navy value) and
`--color-brand-light` is already `#4A82FF` (the Beacon Blue value). Define the 2.0
name as an alias of the existing variable rather than declaring the hex twice, so
the two token sets cannot drift apart while they coexist.

**Neutrals (blue-biased — pure grey next to navy reads as dirty):**

| Token | Hex | Role |
|---|---|---|
| `--color-bone` | `#F7F9FC` | Primary text on dark |
| `--color-muted` | `#8FA3C8` | Secondary text, metadata; also the "not yet open" status |
| `--color-deep-muted` | `#5A6B8C` | Tertiary text, disabled, placeholders |
| `--color-paper` | `#FFFFFF` | The reading column, content surface only |
| `--color-paper-line` | `#E1E7F0` | Rules and card borders on the light surface |

### Two existing rules must be corrected

Both are live defects, not merely stylistic mismatches.

1. **Remove the `@media (prefers-color-scheme: dark)` block.** It sets
   `--background: #0a0a0a` and `--foreground: #ededed` globally. This fires on every
   page — including the light content and SEO pages — for any visitor whose browser
   is in dark mode, and `#0a0a0a` is the near-pure black `DESIGN.md` §6 explicitly
   forbids. The 2.0 system is a deliberate two-surface design, not an OS-driven
   theme swap, so this block must go rather than be re-tinted.

2. **Scope the global input colour override.**
   `input, select, textarea { color: #2B2F38 !important }` currently applies site-wide
   and will override any navy input styling, `!important` included. Scope it to the
   light content surface. Navy inputs follow `DESIGN.md` §4: Deep Void fill, 1px
   Hairline Navy border, 6px radius, Plex Mono placeholder in Deep Muted, and a focus
   state of Signal Blue border plus a 3px Blue Glow ring.

---

## 5. Typography — `web/src/app/layout.tsx`

| Role | From | To | Weights |
|---|---|---|---|
| Display | Poppins | **Archivo** | 700, 800 |
| Body | Inter | **Inter** (kept) | 400, 500, **600** |
| Data | Geist Mono | **IBM Plex Mono** | 400, 600 |

Expose IBM Plex Mono as `--font-data`. Apply it, with
`font-variant-numeric: tabular-nums`, to every date, time, capacity, section number,
row letter, and price. On this site the numbers are the product.

**The Inter 600 addition is a correction, not a preference.** The 2.0 scale in
`DESIGN.md` §3 specifies weight 600 for card titles (17px) and caps labels (11px),
but Inter is currently loaded with `weight: ["400", "500"]` only. Without adding 600,
every SemiBold in the scale silently falls back to 500 and the hierarchy the scale
depends on does not appear.

Confirm no remaining references to `--font-geist-mono` before removing it.

**The non-negotiable from `DESIGN.md` §3:** tight negative tracking on large display
type (`-0.035em` at 40px+, `-0.04em` at hero). Body text keeps normal tracking.

---

## 6. `OnsaleRow` — the workhorse component

Rebuild `web/src/components/OnsaleRow.tsx` to `DESIGN.md` §4. It is the single most
important component on the site and must be recognisable everywhere it appears.

- **Ground:** Raised Navy, **no border, no drop shadow**, 6px radius, `16px 20px` padding.
- **Left:** date block in IBM Plex Mono, tabular — day numeral at 21px above a 10px
  uppercase month. This replaces the current time-only `w-20` column.
- **Centre:** event name at card-title scale (17px/600); venue and city beneath in
  Signal Muted at 13px.
- **Right:** status pill from the triad — 11px uppercase, `0.16em` tracking,
  `5px 10px` padding, 4px radius, background at 14% opacity with text at full
  strength, so it reads illuminated rather than painted.
- **Hover:** the row lifts one tonal step via a 6% Blue Wash overlay and the status
  pill gains a soft glow of its own colour. **No transform and no scale** — this is a
  dense list and jumping rows are nauseating.

**Status triad, used for nothing else, ever:** Gate Green `#16C784` = on sale now;
Marquee Teal `#22C1C3` = presale open or scheduled; Signal Muted `#8FA3C8` = not yet
open. Colour always paired with a word.

**Wired into (this pass):** onsale calendar, watchlist, dashboard.
**Deferred:** homepage, venue guides, weekly email.

---

## 7. App surface inversion

Navy throughout — dense, data-forward, status-led. Depth comes from
Deep Void → Concourse Navy → Raised Navy stacking, never from lines.

| File | Lines | Notes |
|---|---|---|
| `app/dashboard/page.tsx` | 214 | Main search. Results adopt `OnsaleRow` where they are event lists. |
| `app/watchlist/page.tsx` | 271 | Tracked events. Target-price inputs follow the navy input spec. |
| `app/event/[id]/page.tsx` | 357 | Event detail. Recharts price chart needs its palette re-tuned for a navy ground — grid lines and axes in Hairline Navy, series in Signal Blue, tooltips on Raised Navy. |

Layout rules from `DESIGN.md` §5 that apply here: 96px between major sections, 24px
between related blocks, 12px within a component; density is deliberate on lists —
someone scanning twenty onsales wants twenty visible, not five; wide tables get their
own `overflow-x: auto` and the page body never scrolls sideways.

Buttons per §4: primary is Signal Blue fill with Bone text at **6px radius** and
`14px 24px` padding, hovering to a 24px Blue Glow behind rather than darkening —
light, not shade. Signal Blue stays scarce: one primary action per view.

---

## 8. Shared chrome

`Navbar` (210 lines) and `Footer` (132 lines) are rendered on both surfaces.

**Decision:** apply the 2.0 visual treatment; **defer all link and IA changes.**

- Concourse Navy ground, **no border-bottom** — separation comes from the Deep Void
  page beneath.
- Active item: Bone text with a 2px Signal Blue underline and a faint Blue Glow
  beneath. This also resolves the "no indication of current page" gap.
- Reconcile with the existing `.navbar-transparent` / `.navbar-solid` scroll
  behaviour in `globals.css`; the solid state's `box-shadow` becomes a glow or is
  dropped, since drop shadows on navy read as smudge.
- Nav links, footer links, and site structure are **unchanged**. Rationale: the
  visual change is safe on content pages, but reducing the nav to
  Events · Venues · Onsales · Blog alters site-wide internal linking, which carries
  SEO weight and belongs to a deliberate, separately-measured change.

---

## 9. Quality pass

Applied to every component this work touches. Derived from the `redesign-existing-projects`
audit, and each item is a real gap in the current code rather than a generic checklist.

- **Focus rings.** Visible keyboard focus everywhere. Accessibility requirement, not optional.
- **Active/pressed feedback.** `scale(0.98)` or `translateY(1px)` on press — except on
  `OnsaleRow`, which is explicitly exempt from transforms.
- **Transitions.** 200–300ms on interactive elements. Animate `transform` and `opacity`
  only, never `top`/`left`/`width`/`height`.
- **Loading states.** Skeleton loaders shaped like the content they replace, not
  circular spinners.
- **Empty states.** Composed "getting started" views for an empty watchlist and an
  empty search, not blank panels.
- **Error states.** Inline, direct, active voice. No `window.alert()`, no "Oops!", no
  exclamation marks in success messages.
- **Reduced motion.** Honour `prefers-reduced-motion` on the glow and reveal effects.
- **Semantic HTML.** `<nav>`, `<main>`, `<section>` over div soup on pages being rewritten.
- **Contrast.** Verify Signal Muted and Deep Muted against Deep Void and Raised Navy
  meet WCAG AA at their intended sizes. Deep Muted on Raised Navy is the pair most at
  risk and must be measured, not assumed.

---

## 10. Risks

| Risk | Mitigation |
|---|---|
| Shared chrome changes appear on 60+ live SEO pages. | Visual only; links and structure untouched. Review the rendered content pages before committing. |
| The `!important` input rule silently defeats navy input styling. | Scope it in the same change that introduces navy inputs, and verify a navy input renders correctly. |
| Recharts inherits light-surface defaults and becomes unreadable on navy. | Re-tune the chart palette explicitly as part of `event/[id]`. |
| 1.0 and 2.0 tokens coexisting invites drift and accidental mixing. | Deliberate and temporary. The content-surface pass retires the 1.0 tokens; until then, do not introduce new 1.0 token usage. |
| Removing the dark-mode block changes appearance for dark-mode visitors on content pages. | Intended. It restores the light reading surface those pages were designed for. |

---

## 11. Verification

Evidence before assertions. No step is complete on inspection alone.

1. `npm run build` in `web/` passes with no new type or lint errors.
2. Each touched route renders and its core interaction still works: search returns
   results, watchlist add/remove/target-price persists, event detail loads its chart.
3. Auth still round-trips: register, login, token persistence, protected routes.
4. Keyboard-only pass over the app surface — every interactive element is reachable
   and its focus state visible.
5. Contrast measured on the at-risk text/ground pairs in §9.
6. Content pages spot-checked to confirm only the shared chrome changed.
7. Dark-mode browser check confirming content pages now render on the light surface.

---

## 12. Follow-up work (not this pass)

1. Content surface migration — venue guides, city and category pages, blog. Navy for
   chrome, hero, and interstitial bands; the reading column stays light, capped at a
   68-character measure. `DESIGN.md` §7.6: do not put 170 words of venue guide on navy.
2. Homepage rebuild around The Concourse.
3. `OnsaleRow` into the homepage, venue guides, and the weekly email — the remaining
   two of the five places it must be identical.
4. Nav IA reduction to Events · Venues · Onsales · Blog, measured for SEO impact.
5. Retire the 1.0 tokens once no file references them.
