# Design System: TicketScan

**Project:** ticketscan.io
**Status:** 2.0 — foundation and app surface **implemented** 2026-08-28 (tokens, type, `OnsaleRow`, shared chrome, dashboard, watchlist, event detail). The content and SEO pages, the homepage and the nav IA are **not yet migrated** — see `docs/superpowers/plans/2026-08-28-design-2-0-followups.md`. Three colour roles below were corrected during implementation after measuring contrast; those corrections are marked **[amended 2026-08-28]**.
**Hard constraint:** the brand hues are fixed. They match the logo and do not change. Everything below adds tints, shades and usage rules *within* those hues; it introduces no new colour families.

---

## 1. Visual Theme & Atmosphere

**The creative north star: "The Concourse."**

The feeling to design for is the ten minutes before doors open — the building lit but not yet full, signage glowing, everyone checking their phone for the moment tickets or gates release. Anticipation, not transaction.

The current site is airy, white and safe: a light page with blue buttons that would sit equally well on a project-management tool. Nothing about it is wrong, and nothing about it is TicketScan. The 2.0 direction inverts the ground. **Navy becomes the primary surface rather than a decoration used in the hero and footer**, and the brand blue stops being a button fill and becomes a light source.

The atmosphere is **dense, luminous and confident**. Deep navy carries the page; blue and teal behave like signage in a dark concourse — they glow, they signal, they never merely decorate. Type is tight and editorial at large sizes, quiet and readable at small ones. Data — dates, section numbers, capacities, onsale times — is always monospaced, because on this site the numbers *are* the product.

Two surfaces, one system, different volumes:

- **Content surface** (venue guides, city and category pages, blog): long-form reading. Navy is used for chrome, hero and interstitial bands; the reading column itself sits on a light ground for legibility. Loud where you arrive, quiet where you read.
- **App surface** (dashboard, watchlist, event detail): navy throughout. Dense, data-forward, status-led.

---

## 2. Color Palette & Roles

Four brand hues are fixed. The extensions are all tints and shades of those same hues — no new families are introduced.

### Fixed brand colours

| Descriptive name | Hex | Functional role |
|---|---|---|
| **Signal Blue** (`#1E63FF`) | `#1E63FF` | The brand. Primary actions, active states, the light source in every glow. Never used as a large flat fill in 2.0 — it earns attention by being scarce. |
| **Concourse Navy** (`#0D1B3D`) | `#0D1B3D` | The primary ground. Was chrome, is now the page itself. |
| **Marquee Teal** (`#22C1C3`) | `#22C1C3` | The second signal. Reserved for presale — the thing the product knows that others do not. |
| **Gate Green** (`#16C784`) | `#16C784` | Live/on-sale-now status only. Never decorative, never a button. |

### Navy family — surface hierarchy

Depth comes from stacked tonal layers, not from borders or drop shadows.

| Descriptive name | Hex | Functional role |
|---|---|---|
| **Deep Void** | `#070F26` | Page background behind everything. Darker than the brand navy so that navy itself can read as a raised surface. |
| **Concourse Navy** | `#0D1B3D` | Level 1 — content sections, page headers, nav. |
| **Raised Navy** | `#162D5A` | Level 2 — cards, rows, modular widgets sitting on Level 1. |
| **Raised Navy Hover** | `#17356A` | **[added 2026-08-28]** The opaque hover ground for a Raised Navy row — Raised Navy with 10% Signal Blue already composited in. Must be opaque: a translucent `background-color` *replaces* the row's ground rather than layering on it, so on a light page the row's text disappears. |
| **Hairline Navy** | `#1F3A6B` | Borders where a border is genuinely required (inputs, table rules). Never a section divider. |

### Blue family — the light source

| Descriptive name | Hex | Functional role |
|---|---|---|
| **Signal Blue** | `#1E63FF` | Primary buttons, focus rings, active nav, link colour on dark. |
| **Beacon Blue** | `#6192FF` | **[amended 2026-08-28]** Link and accent text on dark grounds; hover and pressed states. Was `#4A82FF`, which measured **3.81:1 on Raised Navy** and failed WCAG AA for text. `#6192FF` preserves the 221° hue and clears 4.5:1 on every navy ground (4.54 Raised, 5.69 Concourse, 6.39 Deep Void). It is no longer the same value as the 1.0 `--color-brand-light`, which stays `#4A82FF` for the light content surface; a checker rule asserts the two must differ. Note Signal Blue itself is only 2.75:1 on Raised Navy and must not be used as text there. |
| **Blue Glow** | `rgba(30, 99, 255, 0.18)` | Ambient glow behind primary CTAs and beneath the active nav item. This is what replaces drop shadows on dark surfaces. |
| **Blue Wash** | `rgba(30, 99, 255, 0.10)` | Tinted backgrounds for selected rows and active filter chips, on a ground known to be navy. **Not** a row-hover ground and never a button fill — use Raised Navy Hover for the former, and DESIGN.md's three button levels for the latter. |

### Neutrals — drawn from the navy hue, not pure grey

Pure grey next to navy reads as dirty. Every neutral carries a blue bias.

| Descriptive name | Hex | Functional role |
|---|---|---|
| **Concourse Bone** | `#F7F9FC` | Primary text on dark; page ground on the content surface. |
| **Signal Muted** | `#8FA3C8` | Secondary text, metadata, venue and city lines. |
| **Deep Muted** | `#5A6B8C` | **[amended 2026-08-28]** Disabled states and decorative icons only. It measures **2.52:1 on Raised Navy and 3.54:1 on Deep Void**, so it fails AA as text; WCAG 1.4.3 exempts disabled controls, and 3.54 clears the 3:1 graphics threshold for icons. Tertiary text and placeholder copy use Signal Muted instead. The value is deliberately unchanged: lightening it to pass would land on `#8796B2`, effectively Signal Muted, collapsing the tier it exists to create. Navy sustains two legible text tiers at AA, not three. |
| **Paper** | `#FFFFFF` | The reading column on content pages only. |
| **Paper Line** | `#E1E7F0` | Rules and card borders on the light reading surface. |

### System colours — outside the palette, outside the triad

| Descriptive name | Hex | Functional role |
|---|---|---|
| **Alert** | `#FF6369` | **[added 2026-08-28]** Errors and destructive actions, and the "price rose" direction. Deliberately not part of the status triad. A lighter red than the usual `#DC2626` because it has to read on Deep Void (6.55:1) and Raised Navy (4.65:1). |

**Price direction is not status.** A price drop uses Signal Blue, a rise uses Alert, and both always carry an arrow and the percentage as text. Gate Green is never used for price movement — the moment green means two things it means nothing.

### The status triad — the most important colour rule on the site

Status is the product. These three signals must be used for nothing else, ever:

- **Gate Green `#16C784` — On sale now.** Tickets are purchasable this second.
- **Marquee Teal `#22C1C3` — Presale open or scheduled.** The differentiated signal.
- **Signal Muted `#8FA3C8` — Not yet open.** Deliberately unexciting; a future date is not an event.

Never carry status by colour alone. Every status pill pairs its colour with a word ("On sale", "Presale Tue", "Opens Fri") so it survives colour blindness, greyscale printing and email clients.

---

## 3. Typography Rules

One removal, one addition, one thing kept.

| Role | Family | Weight & tracking | Why |
|---|---|---|---|
| **Display** | **Archivo** | 700–800, tracking `-0.035em` at 40px+ | Replaces Poppins. Poppins is a friendly geometric with wide, circular counters — it reads soft and generic at large sizes, which is exactly where a brand is made. Archivo is a grotesque with real presence, tightens beautifully, and holds up in condensed settings. |
| **Body** | **Inter** | 400/500, normal tracking | Kept. It is genuinely good at 15–17px, it is already loaded, and replacing it would buy nothing. |
| **Data** | **IBM Plex Mono** | 400/600, `font-variant-numeric: tabular-nums` | New, and the highest-leverage addition. Dates, onsale times, section numbers, row letters and capacities are the substance of this site. Monospacing them makes columns align, makes numbers scannable, and signals precision. |

### Scale

| Role | Size | Weight | Tracking | Line height |
|---|---|---|---|---|
| Hero display | 64px | 800 | -0.04em | 1.02 |
| Page title | 40px | 700 | -0.035em | 1.08 |
| Section headline | 26px | 700 | -0.025em | 1.2 |
| Card title | 17px | 600 | -0.015em | 1.3 |
| Body | 16px | 400 | normal | 1.65 |
| Small / meta | 13px | 400 | normal | 1.5 |
| Label (caps) | 11px | 600 | 0.16em | 1.0 |
| Data / numerals | 13–21px | 400–600 | 0.02em | 1.2 |

**The non-negotiable:** tight tracking on large display type. The difference between `-0.035em` and `0` at 40px is the entire difference between "designed" and "default". Body text keeps normal tracking — tightening running text hurts legibility and buys nothing.

**Reading measure:** the content column caps at **68 characters**. The venue guides run 170 words; at full container width they become a wall.

---

## 4. Component Stylings

### Buttons

- **Primary:** Signal Blue fill, Concourse Bone text, **6px corner radius**, `14px 24px` padding. On hover, a Blue Glow spreads behind it at 24px blur rather than the button darkening — light, not shade.
- **Secondary:** transparent fill, 1px Hairline Navy border, Concourse Bone text. On hover the border lifts to Signal Blue.
- **Tertiary:** text only in Beacon Blue, no chrome.
- Radius is deliberately **6px, not pill and not 12px**. Pills read consumer-app; 12px+ reads like every rounded-card template of the last three years. 6px is crisp and slightly architectural — closer to signage than to a chat bubble.

### The Onsale Row — the workhorse component

The single most important component on the site. It appears on the homepage, every venue guide, the onsale calendar, the watchlist and the weekly email, and must be recognisable in all five.

- **Construction:** Raised Navy background, no border, 6px radius, `16px 20px` padding.
- **Left:** date block in IBM Plex Mono, tabular — day numeral at 21px above a 10px uppercase month.
- **Centre:** event name at card-title scale; venue and city beneath in Signal Muted at 13px.
- **Right:** status pill from the triad, colour plus word.
- **Interactive state:** the row lifts one tonal step (Raised Navy → the opaque Raised Navy Hover) and the status pill gains a soft glow of its own colour. No transform, no scale — this is a dense list and jumping rows are nauseating.

### Cards and containers

- Raised Navy on Concourse Navy. **No borders and no drop shadows** — the tonal step is the boundary.
- 6px radius, 20px internal padding.
- On the light content surface only: Paper background with a 1px Paper Line border, since tonal stacking does not work on white.

### Status pills

- 11px uppercase label, `0.16em` tracking, `5px 10px` padding, 4px radius.
- Background is the status colour at 14% opacity; text is the status colour at full strength. On dark grounds this reads as illuminated rather than painted.

### Inputs and forms

- Deep Void fill — inputs sit *below* the surface, not on it.
- 1px Hairline Navy border, 6px radius, 13px Plex Mono placeholder in **Signal Muted** (Deep Muted fails AA as text — see the neutrals table).
- Project-level input rules must live in `@layer base`. Tailwind v4 emits real cascade layers, and an unlayered rule beats a layered utility regardless of specificity — an unlayered `input { color: … }` silently overrode `text-bone` and rendered the search field's text at 1.42:1.
- **Focus:** border becomes Signal Blue plus a 3px Blue Glow ring. Focus must be unmistakable; this is the one place where the glow is functional rather than atmospheric.

### Navigation

- Concourse Navy, no border-bottom. Separation comes from the Deep Void page beneath it.
- Active item: Concourse Bone text with a 2px Signal Blue underline and a faint Blue Glow beneath.
- 2.0 nav is **Events · Venues · Onsales · Blog**. Compare and World Cup are gone.

---

## 5. Layout Principles

- **Navy first.** The default page ground is Deep Void with Concourse Navy sections. Light grounds are reserved for long-form reading columns.
- **Depth by stacking, not by lines.** Deep Void → Concourse Navy → Raised Navy. A 1px divider is a last resort, never a section boundary.
- **Space is the separator.** 96px between major sections, 24px between related blocks, 12px within a component.
- **Density where it earns its keep.** Marketing moments breathe; the calendar, watchlist and event lists are deliberately tight — someone scanning twenty onsales wants twenty visible, not five.
- **Tabular numerals everywhere numbers stack.** Dates, times, capacities, section numbers. Non-negotiable in any column.
- **Asymmetry is allowed.** Centre the hero if it earns it; do not centre everything by default. Left-aligned headlines with a wide right margin read as considered.
- **Wide content scrolls itself.** Seating tables and schedules get their own `overflow-x: auto`. The page body never scrolls sideways.

---

## 6. Do's and Don'ts

### Do

- Let Signal Blue be scarce. One primary action per view. Its power is entirely in its rarity.
- Pair 11px caps labels directly against 40px display type. The extreme jump is the editorial signature.
- Use glow for elevation on dark and reserve borders for inputs and data tables.
- Write status as colour **and** word, always.

### Don't

- **Don't use pure black or pure grey.** Every dark and every neutral carries the navy hue. Pure `#000` and `#888` flatten the palette instantly.
- **Don't fill large areas with Signal Blue.** A full-width `#1E63FF` band is what made 1.0 read as generic. Blue is a light, not a paint.
- **Don't use Gate Green or Marquee Teal for anything but status.** The moment green becomes a button colour, the status system stops meaning anything.
- **Don't reintroduce drop shadows on navy.** They read as smudge. Use a tonal step or a glow.
- **Don't centre-align long text.** Headlines occasionally; paragraphs never.

---

## 7. Migration Notes

The palette does not change, so this is additive rather than a rewrite. Steps 1–3 and 5 are
**done** as of 2026-08-28; step 4 is partly done and steps 6 onward are the next pass.

1. ~~**Extend the tokens**~~ **Done.** The navy family, blue glow/wash and blue-biased
   neutrals sit alongside the four brand variables in `src/app/globals.css`. Nothing existing
   was removed — the 1.0 tokens stay until the content surface migrates.
2. ~~**Swap the display face.**~~ **Done.** Archivo replaces Poppins. Note Inter also had to
   gain weight 600: the scale calls for it on card titles and caps labels, and Inter was
   loading 400/500 only, so every SemiBold was silently rendering as Medium.
3. ~~**Add IBM Plex Mono**~~ **Done**, as `--font-data`, on every date, time, capacity and
   section number, with `tabular-nums`.
4. **Build the Onsale Row once** — *partly done.* The component is built to spec and renders
   on the onsale calendar. The dashboard card and the watchlist row match its construction
   but do **not** share its code: their data shapes differ (`FeedEvent` vs the dashboard
   `Event` vs `WatchlistItem`), and both carry price information the component has no slot
   for. Unifying them behind one row primitive means agreeing a single shape first.
5. ~~**Invert the app surface**~~ **Done.** Dashboard, watchlist and event detail are on navy
   grounds. Shared chrome (`Navbar`, `Footer`) took the 2.0 visual treatment at the same
   time, with links and site structure deliberately untouched.
6. **Leave the reading column light.** Do not put 170 words of venue guide on navy. Still the
   governing rule for the content pass, which has not started.

### What implementation taught us

Two CSS mechanisms caused Critical defects during the rollout, and neither is obvious:

- **Tailwind v4 uses real cascade layers.** An unlayered declaration beats a layered one no
  matter the specificity, so "a utility class outranks an element selector" is v3 reasoning
  and is wrong here. Project CSS that must lose to utilities belongs in `@layer base`.
- **A `background-color` replaces a ground, it does not overlay one.** A translucent hover
  token on an opaque row lets the *page* show through instead of the row, which inverts the
  intended tonal lift — and on a light page drops the row's text to 1.14:1.

The design system is enforced mechanically by `web/scripts/check-design.mjs`
(`npm run check:design`), which expresses these rules as greppable assertions. Add a rule
when you add a rule here.
