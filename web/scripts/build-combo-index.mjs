// Probes every city × category combo against the public events API and writes
// the qualifying set to src/data/combos.generated.json.
//
// This runs on a SCHEDULE, not at build time. generateStaticParams reads the
// committed JSON, so a slow or rate-limited API can never silently drop pages
// from the sitemap mid-build.
import { readFileSync, writeFileSync } from 'node:fs';

const API = process.env.NEXT_PUBLIC_API_URL || 'https://tickethawk-api-production.up.railway.app';
const THRESHOLD = 5;
const OUT = new URL('../src/data/combos.generated.json', import.meta.url);

// Read the slugs straight out of the data files rather than importing TS.
const slugsFrom = (file) => {
  const src = readFileSync(new URL(`../src/data/${file}`, import.meta.url), 'utf8');
  return [...src.matchAll(/^ {2}'([a-z0-9-]+)': \{/gm)].map((m) => m[1]);
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Load the previous index so a transient probe error doesn't deindex a page
// that was live yesterday and would be live again tomorrow. page.tsx calls
// notFound() for anything outside this index, so simply omitting an errored
// combo — the previous behaviour — 404s a real page for up to a day.
let previousCombos = new Map();
try {
  const prev = JSON.parse(readFileSync(OUT, 'utf8'));
  for (const c of prev.combos || []) {
    previousCombos.set(`${c.city}/${c.category}`, c);
  }
} catch {
  // No previous index yet (first run) — nothing to carry forward.
}

async function countEvents(city, category) {
  const res = await fetch(`${API}/api/public/events?city=${city}&category=${category}&limit=50`);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${city}/${category}`);
  const data = await res.json();
  // A 200 whose body is the wrong shape must count as an error, not as zero
  // events. Coercing it to zero would silently drop a real combo from the
  // index without ever tripping the error guard below.
  if (!Array.isArray(data.events)) {
    throw new Error(`malformed body for ${city}/${category}: events is ${typeof data.events}`);
  }
  return data.events.length;
}

const cities = slugsFrom('cities.ts');
const categories = slugsFrom('categories.ts');
console.log(`Probing ${cities.length} cities x ${categories.length} categories = ${cities.length * categories.length} combos`);

const combos = [];
let errors = 0;
for (const city of cities) {
  for (const category of categories) {
    try {
      const eventCount = await countEvents(city, category);
      if (eventCount >= THRESHOLD) combos.push({ city, category, eventCount });
      process.stdout.write(eventCount >= THRESHOLD ? '.' : '-');
    } catch {
      errors++;
      const prev = previousCombos.get(`${city}/${category}`);
      if (prev) {
        // Carry the previous entry forward rather than dropping it — an
        // errored probe is not evidence the combo stopped qualifying.
        combos.push(prev);
        process.stdout.write('c');
      } else {
        process.stdout.write('!');
      }
    }
    await sleep(120); // stay well inside the upstream rate limit
  }
}
console.log('');

// A partial index is worse than a stale one: it would deindex real pages.
// Fail loudly and leave the previous file untouched.
const total = cities.length * categories.length;
if (errors > total * 0.05) {
  console.error(`\nFAILED: ${errors}/${total} probes errored (>5%). Previous index left intact.`);
  process.exit(1);
}
if (combos.length === 0) {
  console.error('\nFAILED: zero combos qualified. Previous index left intact.');
  process.exit(1);
}

combos.sort(
  (a, b) =>
    b.eventCount - a.eventCount ||
    a.city.localeCompare(b.city) ||
    a.category.localeCompare(b.category)
);
writeFileSync(OUT, JSON.stringify({ generatedAt: new Date().toISOString(), threshold: THRESHOLD, combos }, null, 2) + '\n');
console.log(`Wrote ${combos.length} qualifying combos (${errors} probe errors) to ${OUT.pathname}`);
