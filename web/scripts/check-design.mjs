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
        ['--color-beacon', '#6192FF'],
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
      // Only navy-raised/navy-light still needs to match: Beacon deliberately
      // diverged from brand-light in Task 8 to clear AA contrast (4.5:1) on
      // Raised Navy — #4A82FF measured 3.81. brand-light stays at #4A82FF
      // because it is a 1.0 token consumed by out-of-scope light content
      // pages, so the two can no longer be the same value.
      const pairs = [
        ['--color-navy-raised', '--color-navy-light'],
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
    name: 'globals: Beacon has deliberately diverged from brand-light',
    check: () => {
      const css = read('src/app/globals.css');
      const hex = (name) => {
        const m = css.match(new RegExp(`${name}:\\s*(#[0-9A-Fa-f]{6})`));
        return m ? m[1].toUpperCase() : null;
      };
      const beacon = hex('--color-beacon');
      const brandLight = hex('--color-brand-light');
      if (!beacon) return '--color-beacon is not a literal hex';
      if (!brandLight) return '--color-brand-light is not a literal hex';
      // These were aliased until Task 8. Beacon moved to #6192FF because
      // #4A82FF measured 3.81:1 on Raised Navy and failed WCAG AA for text;
      // brand-light stays put because 1.0 content pages depend on it.
      // Re-aliasing them would silently undo the contrast fix.
      if (beacon === brandLight) {
        return `beacon and brand-light are equal again (${beacon}) — the AA divergence was undone`;
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
    name: 'globals: the input colour override lives in @layer base, not !important',
    check: () => {
      const css = read('src/app/globals.css');
      // Tailwind v4 emits real cascade layers (theme, base, components,
      // utilities). An unlayered normal declaration beats a normal
      // declaration in ANY layer regardless of specificity, so dropping
      // !important alone does NOT let a navy page's text-bone utility win —
      // the rule must be inside @layer base so the later `utilities` layer
      // outranks it.
      const layerMatch = css.match(/@layer base \{([\s\S]*?)\n\}/);
      const layerBody = layerMatch ? layerMatch[1] : '';
      const block = (layerBody.match(/input,\s*select,\s*textarea\s*\{[^}]*\}/) || [])[0] || '';
      if (!block) return 'input colour rule is not inside @layer base';
      if (/!important/.test(block)) return '!important still present; unnecessary now that the rule is layered';
      const ph = (layerBody.match(/input::placeholder\s*\{[^}]*\}/) || [])[0] || '';
      if (!ph) return 'input::placeholder rule is not inside @layer base';
      if (/!important/.test(ph)) return '!important still present on the placeholder rule';
      return null;
    },
  },
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
  {
    name: 'Navbar: navy ground, active state, no border-bottom',
    check: () => {
      const src = read('src/components/Navbar.tsx');
      if (/border-b(?![-\w])/.test(src)) return 'border-bottom still present; separation comes from the page beneath';
      // usePathname is ALREADY imported in Navbar.tsx for unrelated reasons, so its
      // presence proves nothing. Require the actual active-state markers instead.
      if (!/isActive/.test(src)) return 'no isActive helper marking the current page';
      if (!/after:bg-brand/.test(src)) return 'active item has no Signal Blue underline';
      if (!/focus-visible:ring-brand/.test(src)) return 'no visible focus ring';
      if (/text-white\//.test(src)) return 'text-white/NN opacity classes remain; use text-bone and text-muted';
      return null;
    },
  },
  {
    name: 'app surface: no light-surface classes remain on the navy pages',
    check: () => {
      const pages = [
        'src/app/dashboard/page.tsx',
        'src/components/EventCard.tsx',
        'src/app/watchlist/page.tsx',
        'src/app/event/[id]/page.tsx',
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
  {
    name: 'combos: the generated index exists and is well-formed',
    check: () => {
      let raw;
      try {
        raw = read('src/data/combos.generated.json');
      } catch {
        return 'src/data/combos.generated.json is missing — run npm run build:combos';
      }
      let idx;
      try {
        idx = JSON.parse(raw);
      } catch (err) {
        return `combos.generated.json is not valid JSON: ${err.message}`;
      }
      if (idx.threshold !== 5) return `threshold is ${idx.threshold}, expected 5`;
      if (!Array.isArray(idx.combos) || idx.combos.length === 0) {
        return 'combos array is empty — an empty index would deindex every combo page';
      }
      const bad = idx.combos.find(
        (c) => typeof c.city !== 'string' || typeof c.category !== 'string' || !(c.eventCount >= 5)
      );
      if (bad) return `malformed or below-threshold entry: ${JSON.stringify(bad)}`;
      return null;
    },
  },
  {
    name: 'combo page: derives its facts, and cannot ship an empty shell',
    check: () => {
      let src;
      try {
        src = read('src/app/tickets/[city]/[category]/page.tsx');
      } catch {
        return 'the combo route does not exist';
      }
      if (!/export const revalidate = 21600/.test(src)) {
        return 'combo pages must use a 6-hour ISR window (revalidate = 21600) to stay inside the API budget';
      }
      if (!/generateStaticParams/.test(src)) return 'no generateStaticParams';
      if (!/getComboList/.test(src)) return 'params are not read from the committed combo index';
      if (!/findVenue/.test(src)) return 'venues are not matched against the venue guides';
      // The spec forbids inferring venue-category association from homeTeams.
      if (/homeTeams/.test(src)) {
        return 'page references homeTeams — venue association must be read off the returned events, not inferred';
      }
      if (!/OnsaleRow/.test(src)) return 'events are not rendered with the shared OnsaleRow';
      // No-empty-shell guard: the page must bail when it has nothing real to show.
      if (!/notFound\(\)/.test(src)) return 'page does not call notFound() for non-qualifying combos';
      return null;
    },
  },
  {
    name: 'combo pages are reachable from their city and category parents',
    check: () => {
      const src = read('src/app/tickets/[slug]/page.tsx');
      if (!/combosForCity/.test(src)) return 'city pages do not link to their combos';
      if (!/combosForCategory/.test(src)) return 'category pages do not link to their combos';
      // Orphaned pages are the classic programmatic-SEO failure: in the sitemap,
      // reachable by nobody. The links must be real hrefs, not just imports.
      if (!/tickets\/\$\{[a-zA-Z.]+\}\/\$\{/.test(src)) {
        return 'no nested /tickets/{city}/{category} href is constructed';
      }
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
