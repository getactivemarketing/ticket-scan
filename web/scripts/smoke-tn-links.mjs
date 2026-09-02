// Samples generated deep links and reports any that do not return 200.
// A silently 404ing destination earns nothing, and without this we would
// never learn it. Deliberately NOT wired into any gate: TicketNetwork being
// slow is not a reason to fail a deploy.
import index from '../src/data/ticketnetwork.generated.json' with { type: 'json' };
import { destinationUrl } from '../src/lib/tn-click.mjs';
import { CATEGORY_MAP } from '../src/lib/tn-slug.mjs';

const SAMPLE = Number(process.env.SAMPLE || 50);
const UA = 'Mozilla/5.0 (compatible; TicketScanSmoke/1.0; +https://www.ticketscan.io)';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function sample(object, n) {
  const values = Object.values(object);
  const picked = [];
  for (let i = 0; i < n && values.length; i += 1) {
    picked.push(values[Math.floor(Math.random() * values.length)]);
  }
  return picked;
}

const targets = [
  ...sample(index.performers, SAMPLE).map((slug) => ['performers', slug]),
  ...sample(index.venues, Math.ceil(SAMPLE / 2)).map((slug) => ['venues', slug]),
  ...Object.values(CATEGORY_MAP).map((t) => [t.kind, t.slug]),
];

let bad = 0;
for (const [kind, slug] of targets) {
  const url = destinationUrl(kind, slug);
  const res = await fetch(url, { headers: { 'user-agent': UA }, redirect: 'follow' });
  if (!res.ok) {
    bad += 1;
    console.log(`  ${res.status}  ${url}`);
  }
  await sleep(200);
}

console.log(`\nTN LINK SMOKE: ${targets.length - bad}/${targets.length} returned 200`);
if (bad) console.log('Non-200s above. If category links fail, the CATEGORY_MAP is stale.');
