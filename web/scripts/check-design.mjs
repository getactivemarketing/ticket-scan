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
    name: 'globals: Beacon and Deep Muted hold their Task 8 AA-contrast values',
    check: () => {
      const css = read('src/app/globals.css');
      const required = [
        ['--color-beacon', '#6192FF'],
        ['--color-deep-muted', '#5A6B8C'],
      ];
      const wrong = required.filter(([k, v]) => !css.includes(`${k}: ${v}`));
      return wrong.length ? `missing or wrong: ${wrong.map((w) => w[0]).join(', ')}` : null;
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
