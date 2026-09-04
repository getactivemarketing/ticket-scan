// Generates the initial roster seed by walking Ticketmaster's attractions for
// each league classification. Run once, review the output, commit it as
// src/data/teams.ts, then own that file by hand.
//
// Deliberately NOT scheduled: regenerating rosters on every run is what makes
// resolution depend on whatever the attractions endpoint ranks highest today.
import { writeFileSync } from 'node:fs';
import { LEAGUE_CLASSIFICATION, teamSlug } from '../src/lib/team-resolve.mjs';

const KEY = process.env.TICKETMASTER_API_KEY;
if (!KEY) {
  console.error('TICKETMASTER_API_KEY is required. Export it from the repo root .env.');
  process.exit(1);
}

const OUT = new URL('../src/data/teams.ts', import.meta.url);
const COLLEGE_MIN_EVENTS = 3;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function attractionsPage(league, page) {
  const { genre, subGenre } = LEAGUE_CLASSIFICATION[league];
  const url =
    `https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=${KEY}` +
    `&classificationName=${encodeURIComponent(subGenre)}` +
    `&size=200&page=${page}&countryCode=US`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${league} page ${page}`);
  const json = await res.json();
  const list = (json._embedded && json._embedded.attractions) || [];
  return list.filter((a) =>
    (a.classifications || []).some(
      (c) => c.genre && c.genre.name === genre && c.subGenre && c.subGenre.name === subGenre,
    ),
  );
}

async function collect(league) {
  const out = [];
  for (let page = 0; page < 5; page += 1) {
    const list = await attractionsPage(league, page);
    if (!list.length) break;
    out.push(...list);
    await sleep(250);
  }
  const min = league === 'college-football' ? COLLEGE_MIN_EVENTS : 1;
  const seen = new Set();
  return out
    .filter((a) => ((a.upcomingEvents && a.upcomingEvents._total) || 0) >= min)
    .filter((a) => {
      const s = teamSlug(a.name);
      if (!s || seen.has(s)) return false;
      seen.add(s);
      return true;
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

const entries = [];
for (const league of Object.keys(LEAGUE_CLASSIFICATION)) {
  const list = await collect(league);
  console.log(`${league}: ${list.length}`);
  for (const a of list) entries.push({ slug: teamSlug(a.name), name: a.name, league });
}

const body = entries
  .map(
    (t) =>
      `  '${t.slug}': { slug: '${t.slug}', name: ${JSON.stringify(t.name)}, league: '${t.league}' },`,
  )
  .join('\n');

writeFileSync(
  OUT,
  `// Roster seed. Generated once by scripts/seed-teams.mjs, reviewed by hand, and
// owned by hand from then on — it is NOT regenerated on a schedule. Only
// teams.generated.json refreshes. Add homeVenueSlug where a venue guide exists
// in src/data/venues.ts; the team page links to it.
export interface Team {
  slug: string;
  name: string;
  league: string;
  /** Slug in src/data/venues.ts, when this team's home venue has a guide. */
  homeVenueSlug?: string;
}

export const teams: Record<string, Team> = {
${body}
};

export function getTeamBySlug(slug: string): Team | undefined {
  return teams[slug];
}

export function getAllTeams(): Team[] {
  return Object.values(teams);
}

export function getTeamsByLeague(league: string): Team[] {
  return getAllTeams().filter((t) => t.league === league);
}
`,
);
console.log(`Wrote ${entries.length} teams`);
