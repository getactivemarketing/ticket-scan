// Samples resolved teams and asserts two things about each attraction id:
//
// 1. NAME AGREEMENT — the attraction the id actually points to has the same
//    name as the team in teams.ts. This is the check that matters. The two
//    real defects this feature shipped were both a wrong id of the RIGHT
//    league: washington-state-cougars-football resolved to "University of
//    Houston Cougars Football" (Football/College, correct classification,
//    wrong team), and charlotte-hornets resolved to "New Orleans Pelicans"
//    (Basketball/NBA, correct classification, wrong team). A check that only
//    looks at classification would have printed PASS for both. So this check
//    fetches the attraction itself and compares its name against
//    teams.ts by exact string equality after trimming — deliberately exact,
//    not fuzzy, because the seed names were themselves copied from
//    Ticketmaster's attractions, so the correct id returns a byte-identical
//    name today. This comparison MUST NOT reuse nameAgrees() or any other
//    helper from src/lib/team-resolve.mjs: that module is the resolver whose
//    blind spots this check exists to catch, and grading the resolver with
//    its own logic would make the check circular and blind to exactly the
//    bug class it's for.
//
// 2. CLASSIFICATION AGREEMENT — the attraction's events carry the league's
//    expected genre/subGenre, per LEAGUE_CLASSIFICATION. This catches a
//    different failure (id points to something in the wrong sport/league
//    entirely) and is kept even though it would not, alone, have caught
//    either real defect above.
//
// A wrong attraction id renders a working page listing someone else's
// events. No test or type check catches that — this does.
//
// Not wired into any gate: Ticketmaster being slow is not a reason to fail a
// deploy.
import { readFileSync } from 'node:fs';
import { LEAGUE_CLASSIFICATION } from '../src/lib/team-resolve.mjs';

const KEY = process.env.TICKETMASTER_API_KEY;
if (!KEY) { console.error('TICKETMASTER_API_KEY is required.'); process.exit(1); }

const index = JSON.parse(readFileSync(new URL('../src/data/teams.generated.json', import.meta.url), 'utf8'));
const src = readFileSync(new URL('../src/data/teams.ts', import.meta.url), 'utf8');
const teamOf = {};
for (const m of src.matchAll(/^\s*'([a-z0-9-]+)': \{ slug: '[a-z0-9-]+', name: "((?:[^"\\]|\\.)*)", league: '([a-z-]+)'/gm)) {
  teamOf[m[1]] = { name: m[2].replace(/\\(.)/g, '$1'), league: m[3] };
}

const SAMPLE = Number(process.env.SAMPLE || 25);
const slugs = Object.keys(index.teams).sort(() => Math.random() - 0.5).slice(0, SAMPLE);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let wrongTeam = 0;
let wrongClass = 0;
for (const slug of slugs) {
  const { attractionId } = index.teams[slug];
  const team = teamOf[slug];
  const want = LEAGUE_CLASSIFICATION[team.league];

  // 1. Name agreement — fetch the attraction itself.
  const attrRes = await fetch(
    `https://app.ticketmaster.com/discovery/v2/attractions/${attractionId}.json?apikey=${KEY}`,
  );
  const attr = await attrRes.json();
  const attrName = String(attr && attr.name || '').trim();
  if (attrName !== team.name.trim()) {
    wrongTeam += 1;
    console.log(`  WRONG TEAM  ${slug} (${attractionId}) -> "${attrName}" (expected "${team.name}")`);
  }
  await sleep(250);

  // 2. Classification agreement — sample the attraction's events.
  const res = await fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${KEY}&attractionId=${attractionId}&size=3`,
  );
  const json = await res.json();
  const events = (json._embedded && json._embedded.events) || [];
  if (!events.length) {
    console.log(`  no events  ${slug} (${attractionId}) — offseason or stale id`);
  } else {
    const wrong = events.filter((e) => {
      const c = (e.classifications || [])[0] || {};
      return !(c.genre && c.genre.name === want.genre && c.subGenre && c.subGenre.name === want.subGenre);
    });
    if (wrong.length) {
      wrongClass += 1;
      console.log(`  WRONG CLASS  ${slug} (${attractionId}) -> ${wrong[0].name}`);
    }
  }
  await sleep(250);
}

console.log(
  `\nTEAM SMOKE: ${slugs.length} sampled — ${slugs.length - wrongTeam} name matches, ${slugs.length - wrongClass} class matches`,
);
if (wrongTeam) console.log('Any WRONG TEAM line is a real defect: the attraction id points at a different team or program entirely.');
if (wrongClass) console.log('Any WRONG CLASS line is a real defect: that page lists another entity’s events.');
