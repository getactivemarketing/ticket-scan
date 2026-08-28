# Design 2.0 Rollout Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the DESIGN.md 2.0 token and type foundation, rebuild the OnsaleRow component to spec, and invert the app surface (dashboard, watchlist, event detail) plus shared chrome to navy.

**Architecture:** Purely additive at the token layer — the 1.0 tokens stay defined so the ~33 untouched files keep rendering, and 2.0 tokens are added alongside them in the Tailwind v4 `@theme` block. The app pages then opt into the navy ground individually rather than the `<body>` changing, which is what keeps the 60+ content and SEO pages out of the blast radius. There is no test suite in this project, so each task's red/green cycle runs against a new design-invariant checker (`web/scripts/check-design.mjs`) that asserts the rules DESIGN.md states, followed by `npm run build`.

**Tech Stack:** Next 16.1.1 (App Router), React 19.2.3, TypeScript 5, Tailwind v4 (CSS-first `@theme`), `@tailwindcss/typography`, Recharts 3.6, `next/font/google`.

**Spec:** `docs/superpowers/specs/2026-08-28-design-2-0-rollout-design.md`

**Design source of truth:** `DESIGN.md` at the repo root. Read it before Task 1.

---

## Global Constraints

Every task's requirements implicitly include this section.

**Working directory:** all `npm` commands run in `web/`. All paths below are relative to the repo root.

**Fixed brand hues — never changed, never extended into new families:**
`#1E63FF` Signal Blue · `#0D1B3D` Concourse Navy · `#22C1C3` Marquee Teal · `#16C784` Gate Green.

**The status triad is used for nothing else, ever:**
Gate Green `#16C784` = on sale now · Marquee Teal `#22C1C3` = presale open or scheduled · Signal Muted `#8FA3C8` = not yet open. Colour is always paired with a word.

**Surface depth comes from tonal stacking, never from borders or drop shadows:**
Deep Void `#070F26` → Concourse Navy `#0D1B3D` → Raised Navy `#162D5A`. A 1px rule is a last resort and never a section boundary. Drop shadows on navy read as smudge — use a glow.

**Radius is 6px.** Not pill, not 12px+. Status pills are 4px.

**Signal Blue stays scarce.** One primary action per view. Never a large flat fill.

**Type scale (DESIGN.md §3):**

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

Tight negative tracking on large display type is non-negotiable. Body text keeps normal tracking.

**Class translation table — used by Tasks 4, 5, 6 and 7 when inverting a page to navy:**

| 1.0 class | 2.0 replacement | Note |
|---|---|---|
| `bg-white` | `bg-navy-raised` | Card/panel on a navy section |
| `bg-gray-50` | `bg-navy` | Section band on the Deep Void page |
| `text-gray-900` | `text-bone` | Primary text |
| `text-gray-700`, `text-gray-600`, `text-gray-500` | `text-muted` | Secondary text and metadata |
| `text-gray-400`, `text-gray-300` | `text-deep-muted` | Tertiary, disabled, placeholder |
| `border-gray-100`, `border-gray-200`, `border-gray-300` | `border-navy-hairline` | **Only** on inputs and data tables — delete the border elsewhere and let the tonal step do the work |
| `text-red-600`, `bg-red-50` | `text-alert`, `bg-alert/10` | Errors and destructive actions |
| `text-blue-200`, `text-blue-700`, `text-blue-900` | `text-beacon` | Informational text on navy |
| `ring-brand` | `ring-brand` + `ring-offset-deep-void` | Focus ring stays Signal Blue |
| `rounded-xl`, `rounded-lg` | `rounded-[6px]` | Pills are `rounded-[4px]` |
| shadow utilities on navy | delete, or `shadow-[0_0_24px_var(--color-blue-glow)]` | Light, not shade |

**Out of scope — do not modify these files in any task:**
`app/page.tsx` (homepage), `app/venues/**`, `app/tickets/**`, `app/blog/**`, `app/world-cup-2026/**`, `app/faq`, `app/how-it-works`, `app/contact`, `app/privacy`, `app/terms`, `src/data/**`, and the backend `index.js`. Navigation **links** and site structure are unchanged even where a task edits `Navbar.tsx`.

**`npm run lint` is a comparison, not a pass/fail gate.** The repo carries **16 pre-existing
lint problems (7 errors, 9 warnings)** on `main`, in files this plan does not touch —
`compare/page.tsx`, `favorites/page.tsx`, `event/[id]/page.tsx`, `world-cup-2026/**`,
`EventCard.tsx`, `Navbar.tsx`, `PriceChart.tsx`, `AuthContext.tsx`, `lib/api.ts`,
`app/page.tsx`, `scripts/venue-cleanup.js`, and two in `layout.tsx` (a `@ts-ignore`
comment and a Google Tag Manager warning). A task therefore must **introduce no new lint
problems**; requiring a clean exit is impossible and any task that appears to achieve one
has probably linted only its own files. Note that Tasks 5 and 7 do touch `EventCard.tsx`,
`Navbar.tsx`, `event/[id]/page.tsx` and `PriceChart.tsx` — fix the pre-existing problems
in those files when you are already editing them, and say so; leave the rest alone.

**Do not break functionality.** Auth, search, watchlist CRUD, the events API and the price chart all keep working. Verify after every task.

**Commit after every task.** Do not push.

---

### Task 1: Design-invariant checker and the 2.0 token foundation

This project has no test runner, so this task builds the harness the rest of the plan tests against, then makes it pass. The checker is a real safeguard, not ceremony: it is what stops 1.0 tokens creeping back in and catches the two live defects recorded in the spec.

**Files:**
- Create: `web/scripts/check-design.mjs`
- Modify: `web/package.json` (add the `check:design` script)
- Modify: `web/src/app/globals.css` (currently 61 lines)

**Interfaces:**
- Consumes: nothing.
- Produces: `npm run check:design`, a node script exiting 0 on pass and 1 on failure, printing one line per failed rule. Later tasks append rules to the `RULES` array. Also produces every 2.0 colour token named in the table below — including `--color-alert`, which Tasks 5, 6 and 7 all rely on — consumed by Tasks 3–7.

- [ ] **Step 1: Write the failing check**

Create `web/scripts/check-design.mjs`:

```js
// Design invariants from DESIGN.md. There is no test runner in this project,
// so this is the red/green cycle for the 2.0 rollout: every rule below is a
// statement DESIGN.md makes, expressed as something greppable.
import { readFileSync } from 'node:fs';

const read = (p) => readFileSync(new URL(`../${p}`, import.meta.url), 'utf8');

const RULES = [
  {
    name: 'globals: 2.0 colour tokens are defined',
    check: () => {
      const css = read('src/app/globals.css');
      const required = [
        ['--color-deep-void', '#070F26'],
        ['--color-navy-raised', '#162D5A'],
        ['--color-navy-hairline', '#1F3A6B'],
        ['--color-beacon', '#4A82FF'],
        ['--color-bone', '#F7F9FC'],
        ['--color-muted', '#8FA3C8'],
        ['--color-deep-muted', '#5A6B8C'],
        ['--color-paper', '#FFFFFF'],
        ['--color-paper-line', '#E1E7F0'],
        ['--color-alert', '#FF6369'],
      ];
      const missing = required.filter(([k, v]) => !css.includes(`${k}: ${v}`));
      return missing.length ? `missing or wrong: ${missing.map((m) => m[0]).join(', ')}` : null;
    },
  },
  {
    name: 'globals: blue glow and wash are defined at the DESIGN.md opacities',
    check: () => {
      const css = read('src/app/globals.css');
      if (!css.includes('--color-blue-glow: rgba(30, 99, 255, 0.18)')) return 'blue-glow wrong';
      if (!css.includes('--color-blue-wash: rgba(30, 99, 255, 0.10)')) return 'blue-wash wrong';
      return null;
    },
  },
  {
    name: 'globals: 2.0 aliases have not drifted from their 1.0 twins',
    check: () => {
      const css = read('src/app/globals.css');
      const hex = (name) => {
        const m = css.match(new RegExp(`${name}:\\s*(#[0-9A-Fa-f]{6})`));
        return m ? m[1].toUpperCase() : null;
      };
      const pairs = [
        ['--color-navy-raised', '--color-navy-light'],
        ['--color-beacon', '--color-brand-light'],
      ];
      for (const [a, b] of pairs) {
        const va = hex(a);
        const vb = hex(b);
        // An unreadable value must fail loudly. Returning undefined for both
        // sides would make the comparison pass and silently retire the guard.
        if (!va) return `${a} is not a literal hex — the drift guard cannot run`;
        if (!vb) return `${b} is not a literal hex — the drift guard cannot run`;
        if (va !== vb) return `${a} ${va} != ${b} ${vb}`;
      }
      return null;
    },
  },
  {
    name: 'globals: no OS dark-mode override (DESIGN.md forbids near-black)',
    check: () => {
      const css = read('src/app/globals.css');
      if (css.includes('prefers-color-scheme')) return 'prefers-color-scheme block still present';
      if (/#0a0a0a/i.test(css)) return '#0a0a0a still present';
      return null;
    },
  },
  {
    name: 'globals: the input colour override no longer uses !important',
    check: () => {
      const css = read('src/app/globals.css');
      const block = (css.match(/input,\s*select,\s*textarea\s*\{[^}]*\}/) || [])[0] || '';
      if (!block) return 'input colour rule missing entirely';
      if (/!important/.test(block)) return '!important still present; navy utilities cannot override it';
      const ph = (css.match(/input::placeholder\s*\{[^}]*\}/) || [])[0] || '';
      if (/!important/.test(ph)) return '!important still present on the placeholder rule';
      return null;
    },
  },
];

let failed = 0;
for (const rule of RULES) {
  let result;
  try {
    result = rule.check();
  } catch (err) {
    result = `threw: ${err.message}`;
  }
  if (result) {
    failed++;
    console.error(`FAIL  ${rule.name}\n      ${result}`);
  } else {
    console.log(`ok    ${rule.name}`);
  }
}
console.log(`\n${RULES.length - failed}/${RULES.length} design invariants hold`);
process.exit(failed ? 1 : 0);
```

Add to the `scripts` block of `web/package.json`, after `"lint": "eslint"`:

```json
"check:design": "node scripts/check-design.mjs"
```

- [ ] **Step 2: Run the check and verify it fails**

Run: `cd web && npm run check:design`
Expected: exit code 1, with all five rules reporting FAIL — the tokens do not exist yet, the `prefers-color-scheme` block is present, and the unscoped input rule is present.

- [ ] **Step 3: Rewrite `web/src/app/globals.css`**

Replace the whole file with:

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";

:root {
  --background: #ffffff;
  --foreground: #2B2F38;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);

  /* Brand Colors — 1.0. Retained until the content surface migrates to 2.0.
     Do not introduce NEW usage of these; see docs/superpowers/plans. */
  --color-brand: #1E63FF;
  --color-brand-dark: #1854D9;
  --color-brand-light: #4A82FF;
  --color-navy: #0D1B3D;
  --color-navy-light: #162D5A;
  --color-teal: #22C1C3;
  --color-teal-light: #4DD4D6;
  --color-success: #16C784;
  --color-gray-light: #E6ECF2;
  --color-charcoal: #2B2F38;

  /* ===== DESIGN.md 2.0 ===== */

  /* Navy family — surface hierarchy. Depth is a tonal step, never a border.
     navy-raised repeats navy-light's hex rather than aliasing it with var(),
     because Tailwind v4 opacity modifiers (bg-navy-raised/50) are more
     reliable against a literal. check-design.mjs asserts the two stay equal. */
  --color-deep-void: #070F26;
  --color-navy-raised: #162D5A;
  --color-navy-hairline: #1F3A6B;

  /* Blue family — the light source. Glow replaces drop shadow on dark. */
  --color-beacon: #4A82FF;
  --color-blue-glow: rgba(30, 99, 255, 0.18);
  --color-blue-wash: rgba(30, 99, 255, 0.10);

  /* Neutrals — every one carries a blue bias. Pure grey next to navy
     reads as dirty. */
  --color-bone: #F7F9FC;
  --color-muted: #8FA3C8;
  --color-deep-muted: #5A6B8C;
  --color-paper: #FFFFFF;
  --color-paper-line: #E1E7F0;

  /* System colours — deliberately NOT part of the status triad. Gate Green,
     Marquee Teal and Signal Muted mean on-sale, presale and not-yet-open and
     nothing else. Alert is a lighter red than the usual #DC2626 because it
     has to read on Deep Void, and desaturated enough not to shout. */
  --color-alert: #FF6369;

  /* Fonts */
  --font-sans: var(--font-inter);
  --font-heading: var(--font-poppins);
  --font-mono: var(--font-geist-mono);
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-inter), Inter, sans-serif;
}

/* Light-surface default for inputs. The !important is what actually had to go:
   a Tailwind utility class (specificity 0,1,0) outranks this element selector
   (0,0,3), so navy inputs on the app surface override it with text-bone and no
   scoping is needed. Scoping it to a .surface-content class instead would make
   the rule dead — nothing in the codebase carries that class — and would
   silently drop every content-page input to the UA default. */
input,
select,
textarea {
  color: #2B2F38;
}

input::placeholder {
  color: #9ca3af;
}

/* Navbar scroll behavior */
.navbar-transparent {
  background: transparent !important;
}

.navbar-solid {
  background: #0D1B3D !important;
}
```

Three deliberate removals, each recorded in the spec:
- the `@media (prefers-color-scheme: dark)` block, which was forcing `#0a0a0a` onto every light content page for dark-mode visitors;
- the `!important` on the input colour rules, which was what blocked navy inputs; the rules themselves stay global so content-page inputs are untouched;
- the `box-shadow` on `.navbar-solid` — a drop shadow on navy reads as smudge.

- [ ] **Step 4: Run the check and verify it passes**

Run: `cd web && npm run check:design`
Expected: exit 0, `5/5 design invariants hold`.

- [ ] **Step 5: Verify the build and that content pages are unharmed**

Run: `cd web && npm run build`
Expected: build succeeds with no new errors.

Then run `cd web && npm run dev`, and in a browser with the OS set to **dark mode**, open `http://localhost:3000/venues/kia-center`. Expected: the page renders on its light reading surface, not on `#0a0a0a`. This is the defect fix — confirm it visually before committing.

- [ ] **Step 6: Commit**

```bash
git add web/scripts/check-design.mjs web/package.json web/src/app/globals.css
git commit -m "Add the 2.0 colour tokens and a design-invariant checker

Adds the navy family, blue light-source and blue-biased neutrals from
DESIGN.md alongside the 1.0 tokens, which stay until the content surface
migrates.

Removes the prefers-color-scheme block that was forcing #0a0a0a onto
light content pages for dark-mode visitors, and scopes the !important
input colour override to the content surface so navy inputs can exist."
```

---

### Task 2: Typography — Archivo, IBM Plex Mono, and the missing Inter 600

**Files:**
- Modify: `web/src/app/layout.tsx:1-22` (font imports and declarations), `:142` (body className)
- Modify: `web/src/app/globals.css` (`--font-heading`, `--font-data`, `--font-mono`)
- Modify: `web/scripts/check-design.mjs` (append rules)

**Interfaces:**
- Consumes: the `@theme` block from Task 1.
- Produces: CSS variables `--font-archivo`, `--font-inter`, `--font-plex-mono`, and the Tailwind font utilities `font-heading` (Archivo), `font-sans` (Inter) and `font-data` (IBM Plex Mono). Tasks 3–7 use `font-data` on every numeral.

- [ ] **Step 1: Write the failing check**

Append these two rules to the `RULES` array in `web/scripts/check-design.mjs`, before the closing `];`:

```js
  {
    name: 'layout: Archivo and IBM Plex Mono replace Poppins and Geist Mono',
    check: () => {
      const src = read('src/app/layout.tsx');
      if (/Poppins/.test(src)) return 'Poppins still imported';
      if (/Geist_Mono|geist-mono/.test(src)) return 'Geist Mono still imported';
      if (!/Archivo/.test(src)) return 'Archivo not imported';
      if (!/IBM_Plex_Mono/.test(src)) return 'IBM Plex Mono not imported';
      return null;
    },
  },
  {
    name: 'layout: Inter loads weight 600, which the 2.0 scale requires',
    check: () => {
      const src = read('src/app/layout.tsx');
      const block = (src.match(/const inter = Inter\(\{[\s\S]*?\}\);/) || [])[0] || '';
      if (!block) return 'Inter declaration not found';
      if (!/"600"/.test(block)) return 'Inter is missing weight 600';
      const css = read('src/app/globals.css');
      if (!css.includes('--font-heading: var(--font-archivo)')) return 'font-heading not pointed at Archivo';
      if (!css.includes('--font-data: var(--font-plex-mono)')) return 'font-data not defined';
      return null;
    },
  },
```

- [ ] **Step 2: Run the check and verify it fails**

Run: `cd web && npm run check:design`
Expected: exit 1, with the two new rules failing and the five from Task 1 still passing.

- [ ] **Step 3: Swap the fonts**

In `web/src/app/layout.tsx`, replace line 2 and the three font declarations at lines 8–22 with:

```tsx
import { Inter, Archivo, IBM_Plex_Mono } from "next/font/google";
```

```tsx
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  // 600 is required by the 2.0 scale — card titles (17px/600) and caps
  // labels (11px/600). Without it those silently render as 500 and the
  // hierarchy the scale depends on never appears.
  weight: ["400", "500", "600"],
});

// Replaces Poppins. Poppins is a friendly geometric with wide circular
// counters; it reads soft and generic at large sizes, which is exactly
// where a brand is made. Archivo is a grotesque that tightens properly.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["700", "800"],
});

// Dates, times, capacities and section numbers are the substance of this
// site, so they are monospaced and tabular.
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
});
```

Then update the body className at line 142:

```tsx
        className={`${inter.variable} ${archivo.variable} ${plexMono.variable} antialiased bg-gray-50`}
```

Leave `bg-gray-50` on `<body>`. The app pages set their own Deep Void ground in Tasks 5–7; changing the body ground here would repaint all 60+ content pages, which are out of scope.

In `web/src/app/globals.css`, replace the three font lines in the `@theme inline` block with:

```css
  /* Fonts */
  --font-sans: var(--font-inter);
  --font-heading: var(--font-archivo);
  --font-data: var(--font-plex-mono);
  --font-mono: var(--font-plex-mono);
```

- [ ] **Step 4: Run the check and verify it passes**

Run: `cd web && npm run check:design`
Expected: exit 0, `7/7 design invariants hold`.

- [ ] **Step 5: Verify the build and the rendered type**

Run: `cd web && npm run build`
Expected: succeeds. A missing weight in a `next/font/google` call fails the build, so a pass here also confirms Archivo 700/800, Inter 400/500/600 and Plex Mono 400/600 are all real.

Run `cd web && npm run dev` and open `http://localhost:3000/venues/msg`. Expected: headings now render in Archivo, visibly narrower and tighter than Poppins. Confirm no heading has lost its weight.

- [ ] **Step 6: Commit**

```bash
git add web/src/app/layout.tsx web/src/app/globals.css web/scripts/check-design.mjs
git commit -m "Swap in Archivo and IBM Plex Mono; load Inter 600

DESIGN.md replaces Poppins with Archivo for display and adds IBM Plex
Mono for all data. Inter was loading 400 and 500 only, so every 600 in
the 2.0 scale — card titles and caps labels — was silently rendering as
500."
```

---

### Task 3: The date-part helper and the OnsaleRow rebuild

`web/src/components/OnsaleRow.tsx` already exists and cites DESIGN.md, but was built on light surfaces. This task rebuilds it as the workhorse the spec describes.

**One ambiguity in DESIGN.md is resolved here.** §4 specifies a left "date block ... day numeral at 21px above a 10px uppercase month" but does not say *which* date, and the current component shows the onsale time instead. Resolution: the block shows the **event date** (`event.date`), because on the onsale calendar the onsale date is already the group heading and would be redundant, while on the watchlist and dashboard the event date is the fact the user is scanning for. The onsale time is kept as mono metadata in the centre column so no information is lost.

**Files:**
- Modify: `web/src/lib/events.ts` (append the helper)
- Modify: `web/src/components/OnsaleRow.tsx` (full rewrite, currently 56 lines)
- Modify: `web/scripts/check-design.mjs` (append a rule)

**Interfaces:**
- Consumes: `FeedEvent`, `saleStatus`, `SaleStatus`, `formatEtTime` from `@/lib/events` (existing); the colour tokens from Task 1; `font-data` from Task 2.
- Produces:
  - `formatEventDayParts(iso: string): { day: string; month: string } | null` in `@/lib/events` — returns `{ day: '14', month: 'SEP' }` in Eastern time, or `null` for a missing or unparseable date.
  - `OnsaleRow` default export, unchanged props signature `{ event: FeedEvent }`. Tasks 5 and 6 render it.

- [ ] **Step 1: Write the failing check**

Append to the `RULES` array in `web/scripts/check-design.mjs`:

```js
  {
    name: 'OnsaleRow: built on Raised Navy, no border, no light-surface classes',
    check: () => {
      const src = read('src/components/OnsaleRow.tsx');
      const banned = ['bg-white', 'border-gray-200', 'rounded-xl', 'text-gray-500', 'text-gray-400', 'bg-gray-100'];
      const found = banned.filter((c) => src.includes(c));
      if (found.length) return `light-surface classes remain: ${found.join(', ')}`;
      if (!src.includes('bg-navy-raised')) return 'not on Raised Navy';
      if (!src.includes('font-data')) return 'date block is not monospaced';
      if (!src.includes('tabular-nums')) return 'numerals are not tabular';
      if (/scale-|translate-y/.test(src)) return 'row uses a transform; DESIGN.md forbids it on this component';
      return null;
    },
  },
```

- [ ] **Step 2: Run the check and verify it fails**

Run: `cd web && npm run check:design`
Expected: exit 1, the new rule failing with the list of light-surface classes still in the file.

- [ ] **Step 3: Add the date-part helper**

Append to the end of `web/src/lib/events.ts`:

```ts
/**
 * Split an ISO date into the two pieces the OnsaleRow date block renders —
 * a large day numeral above a small uppercase month. Eastern time, to match
 * formatEtDate and formatEtTime; a date rendered in the viewer's own zone
 * would be wrong for most of the country.
 */
export function formatEventDayParts(iso?: string | null): { day: string; month: string } | null {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  const day = d.toLocaleDateString('en-US', { timeZone: ET, day: 'numeric' });
  const month = d.toLocaleDateString('en-US', { timeZone: ET, month: 'short' }).toUpperCase();
  return { day, month };
}
```

- [ ] **Step 4: Rewrite the component**

Replace the whole of `web/src/components/OnsaleRow.tsx` with:

```tsx
import Link from 'next/link';
import { FeedEvent, saleStatus, formatEtTime, formatEventDayParts } from '@/lib/events';

// The workhorse component from DESIGN.md §4. It is the single most important
// component on the site and must be recognisable in all five places it
// appears — the onsale calendar, the homepage, venue guides, the watchlist
// and the weekly email.
//
// Colour follows the DESIGN.md status triad — green on sale, teal presale,
// muted not yet open — and is always paired with a word, never used alone.
//
// Deliberately no transform on hover. This is a dense list and jumping rows
// are nauseating; the row lifts one tonal step instead.

const STATUS_CLASS: Record<string, string> = {
  onsale: 'bg-success/14 text-success',
  presale: 'bg-teal/14 text-teal',
  upcoming: 'bg-muted/14 text-muted',
  unknown: 'bg-muted/14 text-muted',
};

export default function OnsaleRow({ event }: { event: FeedEvent }) {
  const status = saleStatus(event);
  const when = formatEventDayParts(event.date);
  const time = event.onsaleStart ? formatEtTime(event.onsaleStart) : '';
  const place = [event.venue, event.city && event.state ? `${event.city}, ${event.state}` : event.city]
    .filter(Boolean)
    .join(' · ');

  const body = (
    <>
      {/* Date block — day numeral over uppercase month, monospaced and
          tabular so the column aligns down a list of twenty. */}
      <div className="w-14 flex-none text-center font-data">
        <p className="text-[21px] leading-[1.2] font-semibold tracking-[0.02em] tabular-nums text-bone">
          {when ? when.day : '—'}
        </p>
        <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-muted">
          {when ? when.month : ''}
        </p>
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[17px] font-semibold leading-[1.3] tracking-[-0.015em] text-bone line-clamp-2">
          {event.name}
        </p>
        {place && <p className="mt-0.5 truncate text-[13px] text-muted">{place}</p>}
        {time && (
          <p className="mt-0.5 font-data text-[13px] tracking-[0.02em] tabular-nums text-deep-muted">
            On sale {time}
          </p>
        )}
      </div>

      {/* Status pill — colour at 15% behind colour at full strength, so it
          reads illuminated rather than painted. Colour plus word, always. */}
      <span
        className={`flex-none rounded-[4px] px-2.5 py-[5px] text-[11px] font-semibold uppercase leading-none tracking-[0.16em] transition-shadow group-hover:shadow-[0_0_12px_currentColor] ${
          STATUS_CLASS[status.kind]
        }`}
      >
        {status.label}
      </span>
    </>
  );

  const shell =
    'flex items-center gap-5 rounded-[6px] bg-navy-raised px-5 py-4 transition-colors ' +
    'motion-reduce:transition-none';

  // Only link when there is somewhere real to go.
  return event.id ? (
    <Link
      href={`/event/${event.id}`}
      className={`${shell} group hover:bg-blue-wash focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-deep-void`}
    >
      {body}
    </Link>
  ) : (
    <div className={shell}>{body}</div>
  );
}
```

- [ ] **Step 5: Run the check and verify it passes**

Run: `cd web && npm run check:design`
Expected: exit 0, `8/8 design invariants hold`.

- [ ] **Step 6: Verify the build and the rendered row**

Run: `cd web && npm run build && npm run lint`
Expected: both succeed.

Run `cd web && npm run dev` and open `http://localhost:3000/onsales`. Expected: rows sit on Raised Navy with no border; the day numeral and month align in a column down the list; each status pill shows colour **and** a word; hovering a row shifts its ground without any movement. Tab to a row and confirm a visible Signal Blue focus ring.

The `/onsales` page still has its 1.0 light ground at this point, so the navy rows will look like they are floating on a light page. That is expected — Task 7's follow-ups and the deferred content pass fix the surrounding surface. Confirm only that the row itself is correct.

- [ ] **Step 7: Commit**

```bash
git add web/src/lib/events.ts web/src/components/OnsaleRow.tsx web/scripts/check-design.mjs
git commit -m "Rebuild OnsaleRow on Raised Navy per DESIGN.md

Adds the mono date block the spec calls for — day numeral over uppercase
month, tabular so the column aligns — and moves the row onto Raised Navy
with no border, a 6px radius and a blue-wash hover with no transform.

The date block shows the event date; DESIGN.md did not say which date,
and on the calendar the onsale date is already the group heading. The
onsale time is kept as mono metadata so nothing is lost."
```

---

### Task 4: Shared chrome — Navbar and Footer

`Navbar.tsx` (210 lines) and `Footer.tsx` (132 lines) render on both surfaces, so this task changes how all 60+ content pages look. Links and site structure are **not** touched.

**Files:**
- Modify: `web/src/components/Navbar.tsx`
- Modify: `web/src/components/Footer.tsx`
- Modify: `web/scripts/check-design.mjs` (append a rule)

**Interfaces:**
- Consumes: colour tokens (Task 1), `font-heading` and `font-data` (Task 2).
- Produces: no exported API change. Both remain default exports rendered by `app/layout.tsx`.

- [ ] **Step 1: Write the failing check**

Append to the `RULES` array in `web/scripts/check-design.mjs`:

```js
  {
    name: 'Navbar: navy ground, active state, no border-bottom',
    check: () => {
      const src = read('src/components/Navbar.tsx');
      if (/border-b(?![-\w])/.test(src)) return 'border-bottom still present; separation comes from the page beneath';
      if (!/usePathname/.test(src)) return 'no active-page detection';
      if (!/ring-brand|outline-brand/.test(src)) return 'no visible focus ring';
      return null;
    },
  },
```

- [ ] **Step 2: Run the check and verify it fails**

Run: `cd web && npm run check:design`
Expected: exit 1 on the new rule.

- [ ] **Step 3: Apply the 2.0 treatment**

Read `web/src/components/Navbar.tsx` in full first. Then apply, using the class translation table in Global Constraints:

1. **Ground:** Concourse Navy. Remove any `border-b` — DESIGN.md §4 is explicit that separation comes from the Deep Void page beneath, not a rule.
2. **Active item:** import `usePathname` from `next/navigation` and mark the link whose href matches the current path with `text-bone`, a 2px Signal Blue underline, and a faint glow beneath:
   ```tsx
   const pathname = usePathname();
   const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
   ```
   ```tsx
   className={
     isActive(href)
       ? 'relative text-bone after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:bg-brand after:shadow-[0_0_8px_var(--color-blue-glow)]'
       : 'text-muted transition-colors hover:text-bone'
   }
   ```
   `Navbar.tsx` must already be a client component for its scroll behaviour; if it is not marked `'use client'`, add the directive.
3. **Focus:** every link and button gets `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-navy`.
4. **Transitions:** 200ms on colour changes, with `motion-reduce:transition-none`.
5. **Footer:** move to Concourse Navy with `text-muted` links hovering to `text-bone`, same focus treatment, and no drop shadows. Keep every existing link, including the privacy and terms links.

**Do not change any `href`, add a link, or remove one.** The nav reduction to Events · Venues · Onsales · Blog is deferred.

- [ ] **Step 4: Run the check and verify it passes**

Run: `cd web && npm run check:design`
Expected: exit 0, `9/9 design invariants hold`.

- [ ] **Step 5: Verify the build and the content-page regression**

Run: `cd web && npm run build && npm run lint`
Expected: both succeed.

Run `cd web && npm run dev` and check all of:
- `http://localhost:3000/venues/msg` — a content page. The nav and footer are navy; **the page body is unchanged**. Confirm no reading content was restyled.
- `http://localhost:3000/onsales` — the active nav item shows its underline and glow.
- Tab through the nav from the top of the page — every item shows a visible focus ring.

- [ ] **Step 6: Commit**

```bash
git add web/src/components/Navbar.tsx web/src/components/Footer.tsx web/scripts/check-design.mjs
git commit -m "Give the shared chrome the 2.0 treatment

Navy ground with no border-bottom, an active-page underline with a blue
glow, and visible focus rings throughout. Adds the current-page
indication the nav was missing entirely.

Links and site structure are unchanged — the nav reduction DESIGN.md
calls for alters site-wide internal linking and is deferred."
```

---

### Task 5: Invert the dashboard

**Files:**
- Modify: `web/src/app/dashboard/page.tsx` (214 lines)
- Modify: `web/src/components/EventCard.tsx` (176 lines)
- Modify: `web/scripts/check-design.mjs` (append the app-surface rule)

**`EventCard` is in scope for this task.** It is imported by `dashboard/page.tsx` and by nothing else in the codebase — verified with `grep -rl EventCard src --include='*.tsx'` — so restyling it changes no out-of-scope page. It must be restyled here: the dashboard renders its results as `EventCard`, and a `bg-white` card on a Deep Void ground is the single most visible way this task can go wrong.

**Interfaces:**
- Consumes: colour tokens (Task 1), fonts (Task 2), `OnsaleRow` (Task 3).
- Produces: no exported API change.

- [ ] **Step 1: Write the failing check**

Append to the `RULES` array in `web/scripts/check-design.mjs`. This rule is written to cover all three app pages so Tasks 6 and 7 extend the list rather than adding near-duplicate rules:

```js
  {
    name: 'app surface: no light-surface classes remain on the navy pages',
    check: () => {
      const pages = [
        'src/app/dashboard/page.tsx',
        'src/components/EventCard.tsx',
        // Task 6 adds watchlist, Task 7 adds event/[id].
      ];
      const banned = ['bg-white', 'bg-gray-50', 'text-gray-900', 'text-gray-700', 'text-gray-600', 'text-gray-500', 'text-gray-400', 'text-gray-300', 'text-red-600', 'bg-red-50'];
      const problems = [];
      for (const p of pages) {
        const src = read(p);
        const found = banned.filter((c) => src.includes(c));
        if (found.length) problems.push(`${p}: ${found.join(', ')}`);
        // EventCard is a card, not a page — it sits on the ground rather than setting it.
        if (p.endsWith('page.tsx') && !src.includes('bg-deep-void')) {
          problems.push(`${p}: page does not set the Deep Void ground`);
        }
      }
      return problems.length ? problems.join(' | ') : null;
    },
  },
```

- [ ] **Step 2: Run the check and verify it fails**

Run: `cd web && npm run check:design`
Expected: exit 1, listing the light-surface classes still in `dashboard/page.tsx`.

- [ ] **Step 3: Invert the page**

Read `web/src/app/dashboard/page.tsx` in full, then apply the class translation table from Global Constraints. Specifics for this page:

1. **Ground:** the page's outermost wrapper gets `min-h-screen bg-deep-void`. Do not change `<body>` — content pages are out of scope.
2. **Panels and cards:** `bg-white` → `bg-navy-raised` with `rounded-[6px]`, and **delete the border and any shadow** — the tonal step is the boundary.
3. **Search input:** Deep Void fill, `border border-navy-hairline`, `rounded-[6px]`, placeholder in `font-data text-[13px] text-deep-muted`. Focus becomes `focus:border-brand focus:ring-[3px] focus:ring-blue-glow`. DESIGN.md §4 calls this the one place the glow is functional rather than atmospheric, so it must be unmistakable.
4. **Filter chips / category buttons:** the existing `ring-2 ring-brand` selected state becomes `bg-blue-wash text-bone` with the ring kept for focus only.
5. **Results — restyle `EventCard`, do not swap it for `OnsaleRow`.** The dashboard renders `<EventCard key={event.id} event={event} isLoggedIn={!!user} />` at `dashboard/page.tsx:172`. `EventCard` carries price and a logged-in affordance that `OnsaleRow` has no slot for, and the dashboard's `Event` shape is not `FeedEvent`. Restyle the card to the 2.0 construction instead: `bg-navy-raised`, `rounded-[6px]`, no border and no shadow, title at 17px/600 `text-bone` with `tracking-[-0.015em]`, metadata at 13px `text-muted`, every price and date in `font-data tabular-nums`, and a hover that shifts the ground to `bg-blue-wash` rather than lifting a shadow.
6. **Primary button:** exactly one on the page. Signal Blue fill, `text-bone`, `rounded-[6px]`, `px-6 py-3.5`, and on hover a glow behind rather than a darker fill: `hover:shadow-[0_0_24px_var(--color-blue-glow)]`. Add `active:translate-y-px` and `motion-reduce:transition-none`.
7. **Loading state:** replace any spinner with skeleton blocks shaped like the rows they stand in for — `animate-pulse rounded-[6px] bg-navy-raised` at the height of a real row, `motion-reduce:animate-none`.
8. **Empty state:** where a search returns nothing, render a composed panel — a short line in `text-bone` plus a `text-muted` suggestion — not a blank area.
9. **Errors:** `text-red-600` → `text-alert`, defined in Task 1.

- [ ] **Step 4: Run the check and verify it passes**

Run: `cd web && npm run check:design`
Expected: exit 0, `10/10 design invariants hold`.

- [ ] **Step 5: Verify the build and that search still works**

Run: `cd web && npm run build && npm run lint`
Expected: both succeed.

Run `cd web && npm run dev`, open `http://localhost:3000/dashboard`, and confirm functionally:
- a search returns results and they render;
- the loading state shows skeletons, not a spinner;
- a search with no results shows the composed empty state;
- the search input's focus ring is unmistakable;
- tab order reaches every control with a visible ring.

- [ ] **Step 6: Commit**

```bash
git add web/src/app/dashboard/page.tsx web/src/components/EventCard.tsx web/scripts/check-design.mjs
git commit -m "Invert the dashboard to the navy app surface

Deep Void ground with Raised Navy panels, borderless and shadowless so
depth comes from the tonal step. Adds the skeleton loading state and the
composed empty state the page was missing."
```

---

### Task 6: Invert the watchlist

**Files:**
- Modify: `web/src/app/watchlist/page.tsx` (271 lines)
- Modify: `web/scripts/check-design.mjs` (add watchlist to the app-surface page list)

**Interfaces:**
- Consumes: colour tokens (Task 1), fonts (Task 2), `OnsaleRow` (Task 3).
- Produces: no exported API change.

- [ ] **Step 1: Extend the failing check**

In `web/scripts/check-design.mjs`, in the `app surface` rule, change the `pages` array to:

```js
      const pages = [
        'src/app/dashboard/page.tsx',
        'src/components/EventCard.tsx',
        'src/app/watchlist/page.tsx',
        // Task 7 adds event/[id].
      ];
```

- [ ] **Step 2: Run the check and verify it fails**

Run: `cd web && npm run check:design`
Expected: exit 1, listing the light-surface classes in `watchlist/page.tsx`.

- [ ] **Step 3: Invert the page**

Read `web/src/app/watchlist/page.tsx` in full, then apply the class translation table. Specifics for this page:

1. **Ground:** outermost wrapper gets `min-h-screen bg-deep-void`.
2. **Tracked events — match `OnsaleRow`'s construction, do not reuse the component.** The watchlist's own `WatchlistItem` shape (`event_name`, `event_date`, `target_price`, `current_min_price`, declared at `watchlist/page.tsx:10`) is not `FeedEvent`, and it carries no `onsaleStart` or `presales`. Forcing it through `OnsaleRow` would render "Check listing" on every row and would drop the target-versus-current price comparison, which is the entire point of the page. Restyle the existing rows to the same construction instead — Raised Navy ground, `rounded-[6px]`, `px-5 py-4`, the same mono day-numeral-over-month date block, the same 17px/600 title and 13px `text-muted` metadata, the same `hover:bg-blue-wash` with no transform — so the two read as the same component even though they do not yet share code. Unifying them behind a shared row primitive is on the deferred list.
3. **Target-price inputs:** navy input spec — Deep Void fill, `border-navy-hairline`, `rounded-[6px]`, `font-data tabular-nums` for the value, `focus:border-brand focus:ring-[3px] focus:ring-blue-glow`.
4. **The destructive action:** the existing `bg-red-50` / `text-red-600` remove control becomes `text-alert hover:bg-alert/10`. This page is the reason `--color-alert` exists.
5. **Errors:** replace any `window.alert()` or `alert()` call with an inline message rendered next to the control that failed — `text-alert text-[13px]`, active voice, no exclamation mark, e.g. "Couldn't remove that event. Try again." Search the file for `alert(` before assuming there is none.
6. **Empty state:** an empty watchlist gets a composed "getting started" panel pointing at the dashboard search, not a bare line of text.
7. **Prices and dates:** every numeral gets `font-data tabular-nums`.
8. **Green usage:** `watchlist/page.tsx:223` renders `Target: $X` in `text-green-600`. A target price is not on-sale status, and DESIGN.md reserves Gate Green for on-sale status alone. Use `text-brand` (Signal Blue), consistent with the price-direction decision in Task 7 — a price in the user's favour is blue, not green. Check the file for any other non-status green and move it the same way.

- [ ] **Step 4: Run the check and verify it passes**

Run: `cd web && npm run check:design`
Expected: exit 0.

- [ ] **Step 5: Verify the build and that watchlist CRUD still works**

Run: `cd web && npm run build && npm run lint`
Expected: both succeed.

Run `cd web && npm run dev`, log in, open `http://localhost:3000/watchlist`, and confirm:
- adding an event from the dashboard still lands here;
- editing a target price persists across a reload;
- removing an event works, and a forced failure shows an inline message rather than a browser dialog;
- an account with an empty watchlist sees the composed empty state.

- [ ] **Step 6: Commit**

```bash
git add web/src/app/watchlist/page.tsx web/scripts/check-design.mjs
git commit -m "Invert the watchlist to the navy app surface

Reuses OnsaleRow so the watchlist and the calendar render status
identically. Replaces the browser alert with inline errors, adds a
composed empty state, and puts every price and date on tabular figures."
```

---

### Task 7: Invert the event detail page, and resolve the price-direction colour gap

**This task carries a decision DESIGN.md does not cover.** The spec reserves Gate Green for "on sale now" status alone and defines no error or price-direction colour, but this page renders a Recharts price history plus `PriceTrendIndicator` and `BuyRecommendation`, which conventionally use green for a price drop and red for a rise. Using Gate Green there would break the status system: the moment green means two things, it means nothing.

**Resolution, to be implemented as written:** price direction uses **Signal Blue for a drop** (good news, and the site's own accent) and **`--color-alert` for a rise** — the system colour defined in Task 1, explicitly outside the status triad. Each is paired with an arrow glyph and a percentage, so direction never depends on colour alone. Gate Green is not used.

**Files:**
- Modify: `web/src/app/event/[id]/page.tsx` (357 lines)
- Modify: `web/src/components/PriceChart.tsx`, `web/src/components/PriceTrendIndicator.tsx`, `web/src/components/BuyRecommendation.tsx`
- Modify: `web/scripts/check-design.mjs`

**Interfaces:**
- Consumes: colour tokens (Task 1), fonts (Task 2).
- Produces: no exported API change.

- [ ] **Step 1: Write the failing check**

In `web/scripts/check-design.mjs`, add `'src/app/event/[id]/page.tsx'` to the `pages` array in the `app surface` rule, and append this rule:

```js
  {
    name: 'system colours exist and Gate Green is reserved for status',
    check: () => {
      const css = read('src/app/globals.css');
      if (!css.includes('--color-alert: #FF6369')) return '--color-alert not defined';
      const trend = read('src/components/PriceTrendIndicator.tsx');
      if (/text-success|#16C784/.test(trend)) return 'price trend uses Gate Green, which DESIGN.md reserves for on-sale status';
      return null;
    },
  },
```

- [ ] **Step 2: Run the check and verify it fails**

Run: `cd web && npm run check:design`
Expected: exit 1 on both the app-surface rule and the new system-colour rule.

- [ ] **Step 3: Invert the page and re-tune the chart**

Read all four files in full first. Then:

1. **Ground:** outermost wrapper of `event/[id]/page.tsx` gets `min-h-screen bg-deep-void`; the `bg-gray-50` sub-sections become `bg-navy`; `bg-white` cards become `bg-navy-raised` with `rounded-[6px]`, no border, no shadow.
2. **Recharts palette** in `PriceChart.tsx` — Recharts inherits nothing useful on a dark ground and will otherwise render near-invisible grey on navy:
   - `CartesianGrid` stroke `#1F3A6B` (Hairline Navy);
   - axis ticks and labels `#8FA3C8` (Signal Muted) at 11px, with `tick={{ fontSize: 11, fill: '#8FA3C8' }}`;
   - the price series stroke `#1E63FF` (Signal Blue) with any fill as a gradient from `rgba(30, 99, 255, 0.18)` to transparent;
   - `Tooltip` `contentStyle` on `#162D5A` (Raised Navy) with `border: '1px solid #1F3A6B'`, `borderRadius: 6`, and `color: '#F7F9FC'`;
   - all numeric labels in the tooltip use tabular figures.
3. **`PriceTrendIndicator.tsx`:** drop → `text-brand` with a down arrow; rise → `text-alert` with an up arrow; flat → `text-muted`. Every state renders the percentage as text, so the direction survives greyscale.
4. **`BuyRecommendation.tsx`:** the buy/wait/hold advice is **not** status — do not colour it with the triad. Use `text-bone` for the verdict with `text-muted` supporting copy, and let a single Signal Blue element carry the emphasis.
5. **Data:** every price, date, time and section number gets `font-data tabular-nums`.
6. **Wide tables:** any seating or price table gets its own `overflow-x-auto` wrapper. The page body never scrolls sideways.
7. **Loading and error:** skeletons shaped like the chart and the detail rows; inline error copy in `text-alert`, active voice, no `window.alert()`.

- [ ] **Step 4: Run the check and verify it passes**

Run: `cd web && npm run check:design`
Expected: exit 0.

- [ ] **Step 5: Verify the build and the chart**

Run: `cd web && npm run build && npm run lint`
Expected: both succeed.

Run `cd web && npm run dev` and open an event detail page with real price history — find one via `http://localhost:3000/dashboard`. Confirm:
- the chart is legible on navy: grid, axes, tooltip and series all readable;
- the trend indicator shows an arrow and a number, not colour alone;
- the page does not scroll sideways at 375px width;
- the buy recommendation still renders its advice correctly.

- [ ] **Step 6: Commit**

```bash
git add "web/src/app/event/[id]/page.tsx" web/src/components/PriceChart.tsx web/src/components/PriceTrendIndicator.tsx web/src/components/BuyRecommendation.tsx web/scripts/check-design.mjs
git commit -m "Invert event detail to navy and re-tune the price chart

Recharts inherits nothing useful on a dark ground, so the grid, axes,
series and tooltip are given explicit 2.0 colours.

Adds --color-alert as a system colour outside the status triad, and moves
price direction onto Signal Blue for a drop and alert for a rise. Gate
Green stays reserved for on-sale status — the moment green means two
things it means nothing. Direction is always paired with an arrow and a
number so it never depends on colour."
```

---

### Task 8: Accessibility, contrast and regression pass

The final gate. Nothing here is cosmetic — each item is a specific claim the earlier tasks made that has not yet been measured.

**Files:**
- Modify: whichever files the findings require.
- Modify: `web/scripts/check-design.mjs` (append the final rule)

**Interfaces:**
- Consumes: everything from Tasks 1–7.
- Produces: a verified surface. No API change.

- [ ] **Step 1: Write the failing check**

Append to the `RULES` array in `web/scripts/check-design.mjs`:

```js
  {
    name: 'no window.alert on the app surface, and motion is reducible',
    check: () => {
      const files = [
        'src/app/dashboard/page.tsx',
        'src/app/watchlist/page.tsx',
        'src/app/event/[id]/page.tsx',
        'src/components/OnsaleRow.tsx',
      ];
      const problems = [];
      for (const f of files) {
        const src = read(f);
        if (/(^|[^.\w])alert\(/.test(src)) problems.push(`${f}: window.alert`);
        if (/(animate-pulse|transition-)/.test(src) && !/motion-reduce/.test(src)) {
          problems.push(`${f}: animates without a motion-reduce escape`);
        }
      }
      return problems.length ? problems.join(' | ') : null;
    },
  },
```

- [ ] **Step 2: Run the check and verify it fails**

Run: `cd web && npm run check:design`
Expected: exit 1 if any file still calls `alert(` or animates without a `motion-reduce` variant. If it passes immediately, the earlier tasks did their job — record that and move to Step 3.

- [ ] **Step 3: Fix whatever it caught, then measure contrast**

Measure these pairs and record the ratio for each. DESIGN.md asserts these neutrals work on navy; that assertion has not been tested, and the last pair is the one most likely to fail.

| Foreground | Background | Required |
|---|---|---|
| `#F7F9FC` Bone | `#070F26` Deep Void | 4.5:1 (body) |
| `#F7F9FC` Bone | `#162D5A` Raised Navy | 4.5:1 |
| `#8FA3C8` Signal Muted | `#070F26` Deep Void | 4.5:1 at 13px |
| `#8FA3C8` Signal Muted | `#162D5A` Raised Navy | 4.5:1 at 13px |
| `#5A6B8C` Deep Muted | `#162D5A` Raised Navy | 4.5:1 — **most at risk** |
| `#FF6369` Alert | `#070F26` Deep Void | 4.5:1 |
| `#1E63FF` Signal Blue | `#070F26` Deep Void | 3:1 (non-text, focus ring) |

Use Chrome DevTools' contrast readout, or any WCAG contrast checker. **If Deep Muted on Raised Navy falls below 4.5:1**, do not silently accept it: either restrict Deep Muted to text at 16px+ (where 3:1 applies), or lighten it within the navy hue and update the token plus `DESIGN.md`. Record which you chose in the commit message.

- [ ] **Step 4: Keyboard and regression pass**

Run `cd web && npm run dev` and walk through each, fixing anything that fails:

1. **Keyboard only, no mouse.** Tab from the top of `/dashboard`, `/watchlist` and an event detail page. Every interactive element must be reachable, in a sensible order, with a visible focus ring. Nothing may be reachable but invisible.
2. **Reduced motion.** Enable it at the OS level (macOS: System Settings → Accessibility → Display → Reduce motion), reload, and confirm the glows, pulses and transitions are stilled.
3. **Content-page regression.** Open `/venues/msg`, `/tickets/orlando-concerts` and a blog post. Only the nav and footer may look different. If any reading content changed, an out-of-scope file was edited — revert it.
4. **Dark-mode regression.** With the OS in dark mode, reload `/venues/msg`. It must render on its light reading surface. This confirms the Task 1 defect fix held.
5. **Mobile.** At 375px width, confirm no page scrolls sideways and no wide table breaks the body.
6. **Auth round-trip.** Register, log out, log in, and confirm a protected route still redirects correctly when logged out.

- [ ] **Step 5: Run the full verification**

```bash
cd web && npm run check:design && npm run lint && npm run build
```
Expected: all three pass. Paste the actual output into the task record — evidence before assertions.

- [ ] **Step 6: Commit**

```bash
git add -A web/
git commit -m "Accessibility and contrast pass over the 2.0 app surface

Measures the neutral-on-navy pairs DESIGN.md asserted but never tested,
confirms keyboard reachability and reduced-motion behaviour across the
app surface, and verifies the content and SEO pages changed only in
their shared chrome."
```

---

## Deferred — not this plan

Recorded so they are not lost, and so no task quietly pulls them in:

1. **Content surface migration** — venue guides, city and category pages, blog. Navy for chrome, hero and interstitial bands; the reading column stays light, capped at a 68-character measure. DESIGN.md §7.6 is explicit: do not put 170 words of venue guide on navy.
2. **Homepage rebuild** around The Concourse.
3. **`OnsaleRow` into the homepage, venue guides, the watchlist and the weekly email** — the remaining four of the five places it must be identical. Only the onsale calendar renders the component itself after this plan; the dashboard card and the watchlist row match its construction without sharing its code, for the shape reasons recorded in Tasks 5 and 6. The email lives in the backend `index.js`.
4. **Nav IA reduction** to Events · Venues · Onsales · Blog, dropping Compare and World Cup, measured for SEO impact.
5. **A shared row primitive** behind `OnsaleRow`, the restyled `EventCard` and the watchlist row. All three render the same construction after this plan but do not share code, because their data shapes differ (`FeedEvent` vs the dashboard `Event` vs `WatchlistItem`). Unifying them means agreeing one row shape first.
6. **Retiring the 1.0 tokens** once no file references them, and adding a check rule that fails if they reappear.
