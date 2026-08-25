import { Metadata } from 'next';
import Link from 'next/link';
import { worldCupVenues, worldCupCities, featuredTeams } from '@/data/worldcup';
import WorldCupSchedule from './WorldCupSchedule';

export const metadata: Metadata = {
  title: 'FIFA World Cup 2026 — Venues, Schedule & Results',
  description: 'The 2026 FIFA World Cup wrapped on 19 July at MetLife Stadium. Browse the full match schedule and results, and guides to all 16 host stadiums across the USA, Canada and Mexico.',
  keywords: 'FIFA World Cup 2026 results, World Cup 2026 venues, World Cup 2026 schedule, World Cup 2026 host stadiums, World Cup Final 2026, World Cup USA Canada Mexico, World Cup 2026 winner',
  alternates: {
    canonical: 'https://www.ticketscan.io/world-cup-2026',
  },
  openGraph: {
    title: 'FIFA World Cup 2026 — Venues, Schedule & Results | Ticket Scan',
    description: 'The 2026 FIFA World Cup wrapped on 19 July at MetLife Stadium. Browse the full match schedule and results, and guides to all 16 host stadiums across the USA, Canada and Mexico.',
    type: 'website',
    url: 'https://www.ticketscan.io/world-cup-2026',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FIFA World Cup 2026 — Venues, Schedule & Results | Ticket Scan',
    description: 'The 2026 FIFA World Cup wrapped on 19 July at MetLife Stadium. Full schedule, results and guides to all 16 host stadiums.',
  },
};

export default function WorldCup2026Page() {
  const sportsEventSchema = {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: 'FIFA World Cup 2026',
    description: 'The 2026 FIFA World Cup, hosted across the United States, Canada, and Mexico. 48 teams compete in 104 matches across 16 stadiums.',
    startDate: '2026-06-11',
    endDate: '2026-07-19',
    eventStatus: 'https://schema.org/EventCompleted',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: [
      ...worldCupCities.usa.map(({ city, venue, state }) => ({
        '@type': 'StadiumOrArena',
        name: worldCupVenues[venue].name,
        address: {
          '@type': 'PostalAddress',
          addressLocality: city,
          addressRegion: state,
          addressCountry: 'US',
        },
      })),
      ...worldCupCities.canada.map(({ city, venue, state }) => ({
        '@type': 'StadiumOrArena',
        name: worldCupVenues[venue].name,
        address: {
          '@type': 'PostalAddress',
          addressLocality: city,
          addressRegion: state,
          addressCountry: 'CA',
        },
      })),
      ...worldCupCities.mexico.map(({ city, venue }) => ({
        '@type': 'StadiumOrArena',
        name: worldCupVenues[venue].name,
        address: {
          '@type': 'PostalAddress',
          addressLocality: city,
          addressCountry: 'MX',
        },
      })),
    ],
    image: 'https://www.ticketscan.io/logo.png',
    organizer: {
      '@type': 'Organization',
      name: 'FIFA',
      url: 'https://www.fifa.com',
    },
    // No `offers` block here on purpose: this tournament hub displays no single
    // authoritative ticket price, so we don't declare one in structured data —
    // same null-safe principle used on /venues/[slug] and /tickets/[slug], where
    // an AggregateOffer is only emitted when a real minPrice exists. The prior
    // hardcoded lowPrice: '50' matched nothing on the page (lowest real section
    // floor in worldcup.ts is $80) and risked a price-mismatch structured-data
    // error. Per-stadium pages carry grounded AggregateOffers from section data.
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.ticketscan.io',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'World Cup 2026',
        item: 'https://www.ticketscan.io/world-cup-2026',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sportsEventSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              June 11 - July 19, 2026
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              2026 FIFA World Cup Tickets
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              The biggest World Cup in history has wrapped. Browse every match and result, and guides to all 16 host stadiums across the USA, Canada and Mexico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dashboard?keyword=world+cup+2026"
                className="bg-white text-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors"
              >
                Explore WC 2026 Prices
              </Link>
              <Link
                href="#schedule"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-400 transition-colors"
              >
                View All Matches
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <p className="text-4xl font-bold">48</p>
              <p className="text-green-200">Teams</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">104</p>
              <p className="text-green-200">Matches</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">16</p>
              <p className="text-green-200">Stadiums</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">3</p>
              <p className="text-green-200">Countries</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Teams */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-gray-900 text-center mb-8">
            Featured Teams
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {featuredTeams.map((team) => (
              <div
                key={team.name}
                className="bg-white rounded-xl px-6 py-4 shadow-sm flex items-center gap-3"
              >
                <span className="text-3xl">{team.flag}</span>
                <div>
                  <p className="font-bold text-gray-900">{team.name}</p>
                  <p className="text-sm text-gray-500">{team.group}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Match Schedule (Client Component) */}
      <WorldCupSchedule />

      {/* USA Venues */}
      <div id="venues" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-4xl">🇺🇸</span>
            <h2 className="font-heading text-3xl font-bold text-gray-900">USA Host Cities</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {worldCupCities.usa.map(({ city, venue, state }) => {
              const venueData = worldCupVenues[venue];
              return (
                <Link
                  key={venue}
                  href={`/world-cup-2026/${venue}`}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow group"
                >
                  <h3 className="font-heading font-bold text-xl text-gray-900 group-hover:text-green-600 mb-2">
                    {city}, {state}
                  </h3>
                  <p className="text-gray-600 mb-3">{venueData.name}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Capacity: {venueData.capacity.toLocaleString()}</span>
                    <span className="text-green-600 font-medium group-hover:underline">View Guide →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Canada Venues */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-4xl">🇨🇦</span>
            <h2 className="font-heading text-3xl font-bold text-gray-900">Canada Host Cities</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {worldCupCities.canada.map(({ city, venue, state }) => {
              const venueData = worldCupVenues[venue];
              return (
                <Link
                  key={venue}
                  href={`/world-cup-2026/${venue}`}
                  className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow group"
                >
                  <h3 className="font-heading font-bold text-xl text-gray-900 group-hover:text-green-600 mb-2">
                    {city}, {state}
                  </h3>
                  <p className="text-gray-600 mb-3">{venueData.name}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Capacity: {venueData.capacity.toLocaleString()}</span>
                    <span className="text-green-600 font-medium group-hover:underline">View Guide →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mexico Venues */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-4xl">🇲🇽</span>
            <h2 className="font-heading text-3xl font-bold text-gray-900">Mexico Host Cities</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {worldCupCities.mexico.map(({ city, venue, state }) => {
              const venueData = worldCupVenues[venue];
              return (
                <Link
                  key={venue}
                  href={`/world-cup-2026/${venue}`}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow group"
                >
                  <h3 className="font-heading font-bold text-xl text-gray-900 group-hover:text-green-600 mb-2">
                    {city}
                  </h3>
                  <p className="text-gray-600 mb-3">{venueData.name}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Capacity: {venueData.capacity.toLocaleString()}</span>
                    <span className="text-green-600 font-medium group-hover:underline">View Guide →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Key Dates */}
      <div className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-gray-900 text-center mb-12">
            Key Tournament Dates
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 flex justify-between items-center">
              <div>
                <p className="font-bold text-gray-900">Tournament Kicks Off</p>
                <p className="text-gray-600">Opening Match</p>
              </div>
              <p className="text-green-600 font-bold text-lg">June 11, 2026</p>
            </div>
            <div className="bg-white rounded-xl p-6 flex justify-between items-center">
              <div>
                <p className="font-bold text-gray-900">Group Stage</p>
                <p className="text-gray-600">48 Teams, 12 Groups</p>
              </div>
              <p className="text-green-600 font-bold text-lg">June 11 - 28</p>
            </div>
            <div className="bg-white rounded-xl p-6 flex justify-between items-center">
              <div>
                <p className="font-bold text-gray-900">Knockout Rounds</p>
                <p className="text-gray-600">Round of 32 through Semifinals</p>
              </div>
              <p className="text-green-600 font-bold text-lg">June 29 - July 15</p>
            </div>
            <div className="bg-white rounded-xl p-6 flex justify-between items-center border-2 border-green-500">
              <div>
                <p className="font-bold text-gray-900">World Cup Final</p>
                <p className="text-gray-600">MetLife Stadium, East Rutherford, NJ</p>
              </div>
              <p className="text-green-600 font-bold text-lg">July 19, 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Knockout Stage */}
      <div id="knockout" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-gray-900 text-center mb-4">
            Knockout Stage Venues
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Group stage ends June 28. Round of 32 runs June 29–July 3 across all 16 host stadiums.
            Later rounds concentrate at the largest venues.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold">Round</th>
                  <th className="text-left px-5 py-3 font-semibold">Dates</th>
                  <th className="text-left px-5 py-3 font-semibold">Key Venues</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-white">
                  <td className="px-5 py-4 font-medium text-gray-900">Round of 32</td>
                  <td className="px-5 py-4 text-gray-600">June 29 – July 3</td>
                  <td className="px-5 py-4 text-gray-600">All 16 host stadiums</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-5 py-4 font-medium text-gray-900">Quarterfinals</td>
                  <td className="px-5 py-4 text-gray-600">July 4–5</td>
                  <td className="px-5 py-4 text-gray-600">
                    <Link href="/world-cup-2026/metlife-stadium" className="text-green-600 hover:underline">MetLife</Link>
                    {', '}
                    <Link href="/world-cup-2026/sofi-stadium" className="text-green-600 hover:underline">SoFi</Link>
                    {', '}
                    <Link href="/world-cup-2026/att-stadium" className="text-green-600 hover:underline">AT&T</Link>
                    {', '}
                    <Link href="/world-cup-2026/hard-rock-stadium" className="text-green-600 hover:underline">Hard Rock</Link>
                    {', '}
                    <Link href="/world-cup-2026/mercedes-benz-stadium" className="text-green-600 hover:underline">Mercedes-Benz</Link>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-5 py-4 font-medium text-gray-900">Semifinals</td>
                  <td className="px-5 py-4 text-gray-600">July 8–9</td>
                  <td className="px-5 py-4 text-gray-600">
                    <Link href="/world-cup-2026/metlife-stadium" className="text-green-600 hover:underline">MetLife Stadium</Link>
                    {' · '}
                    <Link href="/world-cup-2026/sofi-stadium" className="text-green-600 hover:underline">SoFi Stadium</Link>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-5 py-4 font-medium text-gray-900">3rd Place</td>
                  <td className="px-5 py-4 text-gray-600">July 18</td>
                  <td className="px-5 py-4 text-gray-600">
                    <Link href="/world-cup-2026/hard-rock-stadium" className="text-green-600 hover:underline">Hard Rock Stadium</Link>
                    {', Miami'}
                  </td>
                </tr>
                <tr className="bg-white border-t-2 border-green-500">
                  <td className="px-5 py-4 font-bold text-gray-900">Final</td>
                  <td className="px-5 py-4 font-bold text-green-600">July 19</td>
                  <td className="px-5 py-4 font-medium text-gray-900">
                    <Link href="/world-cup-2026/metlife-stadium" className="text-green-600 hover:underline font-bold">MetLife Stadium</Link>
                    {', East Rutherford, NJ'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center mt-6">
            <Link
              href="/blog/world-cup-2026-knockout-tickets"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Knockout Stage Ticket Guide: Prices &amp; Strategy →
            </Link>
          </p>
        </div>
      </div>

      {/* Ticket Tips */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-gray-900 text-center mb-12">
            World Cup Ticket Tips
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-green-100 text-green-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="font-heading font-bold text-gray-900 mb-1">The Tournament Wrapped — Prices Still Tell a Story</h3>
                <p className="text-gray-600">The 2026 World Cup ended July 19. Use our match and stadium guides to see what tickets cost across platforms and spot the pricing patterns worth remembering for the next big event.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-green-100 text-green-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="font-heading font-bold text-gray-900 mb-1">Compare Resale Prices</h3>
                <p className="text-gray-600">Once tickets hit the resale market, prices vary wildly. Use Ticket Scan to compare StubHub, SeatGeek, and Ticketmaster prices.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-green-100 text-green-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="font-heading font-bold text-gray-900 mb-1">Set Onsale Alerts</h3>
                <p className="text-gray-600">Don&apos;t keep checking back. Add an event to your watchlist and we&apos;ll email you when its presale or public onsale opens.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-green-100 text-green-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="font-heading font-bold text-gray-900 mb-1">Consider Group Stage Matches</h3>
                <p className="text-gray-600">Knockout round tickets will be expensive. Group stage matches offer great value and an authentic World Cup experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-green-600 to-emerald-700 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="font-heading text-3xl font-bold mb-4">
            The World Cup Is Over. Don&apos;t Miss What&apos;s Next.
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            Create a free account to follow concerts, football and the next major event — and hear the moment tickets go on sale, including presales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors"
            >
              Create Free Account
            </Link>
            <Link
              href="/dashboard"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-400 transition-colors"
            >
              Find Your Next Event
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
