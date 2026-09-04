import { Metadata } from 'next';
import Link from 'next/link';
import { getAllTeams } from '@/data/teams';
import teamIndex from '@/data/teams.generated.json';

export const metadata: Metadata = {
  title: 'Team Tickets — Schedules and Onsale Dates',
  description: 'Every team we track, with full schedules, onsale and presale dates, and where to buy.',
  alternates: { canonical: 'https://www.ticketscan.io/teams' },
};

const LEAGUE_NAMES: Record<string, string> = {
  nfl: 'NFL',
  'college-football': 'College Football',
  nba: 'NBA',
  nhl: 'NHL',
  mlb: 'MLB',
};

export default function TeamsIndex() {
  const resolved = new Set(Object.keys(teamIndex.teams));
  const byLeague = Object.keys(LEAGUE_NAMES).map((league) => ({
    league,
    teams: getAllTeams()
      .filter((t) => t.league === league && resolved.has(t.slug))
      .sort((a, b) => a.name.localeCompare(b.name)),
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-navy via-brand to-teal text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold font-heading">Teams</h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {byLeague.map(({ league, teams }) =>
          teams.length ? (
            <section key={league} className="mb-10">
              <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">
                {LEAGUE_NAMES[league]}
              </h2>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {teams.map((t) => (
                  <li key={t.slug} className="bg-white rounded-lg p-4">
                    <Link href={`/teams/${t.slug}`} className="text-brand hover:text-brand-dark font-medium">
                      {t.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null,
        )}
      </div>
    </div>
  );
}
