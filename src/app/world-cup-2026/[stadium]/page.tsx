import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { worldCupVenues } from '@/data/worldcup';

interface Props {
  params: Promise<{ stadium: string }>;
}

export async function generateStaticParams() {
  return Object.keys(worldCupVenues).map((stadium) => ({
    stadium,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { stadium } = await params;
  const venue = worldCupVenues[stadium];

  if (!venue) {
    return { title: 'Stadium Not Found' };
  }

  return {
    title: `${venue.name} World Cup 2026 Tickets - ${venue.city}`,
    description: `Find the best deals on World Cup 2026 tickets at ${venue.name} in ${venue.city}. Compare prices, view seating charts, and get ticket tips for FIFA World Cup matches.`,
    keywords: venue.keywords.join(', '),
  };
}

export default async function StadiumPage({ params }: Props) {
  const { stadium } = await params;
  const venue = worldCupVenues[stadium];

  if (!venue) {
    notFound();
  }

  const countryFlag = venue.country === 'USA' ? '🇺🇸' : venue.country === 'Canada' ? '🇨🇦' : '🇲🇽';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/world-cup-2026"
            className="inline-flex items-center gap-2 text-green-200 hover:text-white mb-6"
          >
            ← Back to World Cup 2026
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{countryFlag}</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
              {venue.city}, {venue.state || venue.country}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{venue.name}</h1>
          <p className="text-xl text-green-100 max-w-3xl mb-6">
            World Cup 2026 Host Stadium
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/10 px-4 py-2 rounded-lg">
              <span className="text-green-200 text-sm">Capacity</span>
              <p className="font-bold">{venue.capacity.toLocaleString()}</p>
            </div>
            {venue.teams && (
              <div className="bg-white/10 px-4 py-2 rounded-lg">
                <span className="text-green-200 text-sm">Home Teams</span>
                <p className="font-bold">{venue.teams.join(', ')}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About {venue.name}</h2>
              <p className="text-gray-600 leading-relaxed">{venue.description}</p>
            </div>

            {/* Seating Sections */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Seating & Pricing</h2>
              <div className="space-y-4">
                {venue.sections.map((section, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-lg p-4 flex justify-between items-center"
                  >
                    <div>
                      <p className="font-bold text-gray-900">{section.name}</p>
                      <p className="text-gray-600 text-sm">{section.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">{section.priceRange}</p>
                      <p className="text-gray-500 text-xs">Estimated range</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-4">
                * Prices are estimates based on similar events. Actual World Cup prices will vary by match and demand.
              </p>
            </div>

            {/* Ticket Tips */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ticket Tips for {venue.name}</h2>
              <ul className="space-y-4">
                {venue.ticketTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="text-gray-600">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - CTA */}
          <div className="space-y-6">
            {/* Search CTA */}
            <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl p-6 text-white">
              <h3 className="font-bold text-xl mb-3">Find World Cup Tickets</h3>
              <p className="text-green-100 mb-4 text-sm">
                Compare prices from multiple platforms for {venue.name} matches.
              </p>
              <Link
                href={`/dashboard?keyword=world+cup+${venue.city.toLowerCase().replace(' ', '+')}`}
                className="block w-full bg-white text-green-600 py-3 rounded-lg font-bold text-center hover:bg-green-50 transition-colors"
              >
                Search Tickets
              </Link>
            </div>

            {/* Price Alert CTA */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Get Price Alerts</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Set your target price and we&apos;ll notify you when tickets drop.
              </p>
              <Link
                href="/register"
                className="block w-full bg-green-600 text-white py-3 rounded-lg font-bold text-center hover:bg-green-700 transition-colors"
              >
                Create Free Account
              </Link>
            </div>

            {/* Quick Facts */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Quick Facts</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-gray-500">Stadium</dt>
                  <dd className="text-gray-900 font-medium">{venue.name}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">City</dt>
                  <dd className="text-gray-900 font-medium">{venue.city}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Country</dt>
                  <dd className="text-gray-900 font-medium">{venue.country}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Capacity</dt>
                  <dd className="text-gray-900 font-medium">{venue.capacity.toLocaleString()}</dd>
                </div>
              </dl>
            </div>

            {/* Other Venues */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Other {venue.country} Venues</h3>
              <div className="space-y-2">
                {Object.values(worldCupVenues)
                  .filter((v) => v.country === venue.country && v.slug !== venue.slug)
                  .slice(0, 5)
                  .map((v) => (
                    <Link
                      key={v.slug}
                      href={`/world-cup-2026/${v.slug}`}
                      className="block text-green-600 hover:text-green-800 text-sm"
                    >
                      {v.name} - {v.city} →
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-green-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Experience the World Cup at {venue.name}?
          </h2>
          <p className="text-gray-600 mb-6">
            Start tracking ticket prices now and be first to know when deals are available.
          </p>
          <Link
            href="/world-cup-2026"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
          >
            View All World Cup Venues
          </Link>
        </div>
      </div>
    </div>
  );
}
