import Link from 'next/link';
import { Metadata } from 'next';
import HomeHeroButtons from '@/components/HomeHeroButtons';
import NewsletterSignup from '@/components/NewsletterSignup';
import { getAllVenues } from '@/data/venues';
import { getAllCities } from '@/data/cities';
import { getAllCategories } from '@/data/categories';
import { getFeaturedPosts } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Ticket Scan - Compare Ticket Prices Across Multiple Sites',
  description: 'Find the best deals on concert, sports, and theater tickets. Compare prices from Ticketmaster, SeatGeek, and more. Track price trends and get alerts when prices drop.',
  keywords: 'ticket prices, compare tickets, cheap tickets, concert tickets, sports tickets, NBA tickets, NHL tickets, Ticketmaster, SeatGeek',
  openGraph: {
    title: 'Ticket Scan - Compare Ticket Prices',
    description: 'Never overpay for tickets again. Compare prices across multiple platforms and find the best deals.',
    type: 'website',
    url: 'https://ticketscan.io',
  },
};

export default function Home() {
  const venues = getAllVenues();
  const cities = getAllCities();
  const categories = getAllCategories();
  const featuredPosts = getFeaturedPosts().slice(0, 3);

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ticket Scan',
    url: 'https://ticketscan.io',
    description: 'Compare ticket prices across multiple platforms. Find the best deals on concerts, sports, and theater events.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://ticketscan.io/dashboard?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  // FAQ Schema
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does Ticket Scan help me find cheaper tickets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ticket Scan compares ticket prices from Ticketmaster, SeatGeek, and other major ticket sites in real-time. We track price trends so you can see if prices are going up or down, and alert you when tickets drop to your target price.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Ticket Scan free to use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Ticket Scan is completely free. Create an account to track events, compare prices, and get alerts when prices drop.',
        },
      },
      {
        '@type': 'Question',
        name: 'What events can I track with Ticket Scan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can track any event available on major ticket platforms including concerts, NBA games, NHL hockey, NFL football, MLB baseball, theater shows, and more.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">
                Never Overpay for Tickets Again
              </h1>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Track prices across multiple platforms, get alerts when prices drop,
                and find the best deals on concerts, sports, and theater events.
              </p>
              <HomeHeroButtons />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Ticket Scan?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/dashboard" className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Search Everywhere
              </h3>
              <p className="text-gray-600">
                Search Ticketmaster, SeatGeek, and more from one place.
                Compare prices instantly.
              </p>
            </Link>
            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Track Prices
              </h3>
              <p className="text-gray-600">
                Add events to your watchlist and we&apos;ll monitor prices
                for you around the clock.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="text-4xl mb-4">🔔</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Get Alerts
              </h3>
              <p className="text-gray-600">
                Set your target price and get notified the moment
                tickets drop to your budget.
              </p>
            </div>
          </div>
        </div>

        {/* Popular Venues Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Popular Venues
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {venues.map((venue) => (
                <Link
                  key={venue.id}
                  href={`/venues/${venue.id}`}
                  className="bg-gray-50 hover:bg-purple-50 p-4 rounded-xl transition-colors"
                >
                  <p className="font-medium text-gray-900">{venue.name}</p>
                  <p className="text-sm text-gray-500">{venue.city}, {venue.state}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Browse by City Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Browse by City
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/tickets/${city.slug}`}
                  className="bg-white hover:bg-purple-50 p-4 rounded-xl shadow-sm transition-colors"
                >
                  <p className="font-medium text-gray-900">{city.name}</p>
                  <p className="text-sm text-gray-500">{city.state}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Browse by Category Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Browse by Category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/tickets/${category.slug}`}
                  className="bg-gray-50 hover:bg-purple-50 p-4 rounded-xl text-center transition-colors"
                >
                  <span className="text-3xl block mb-2">{category.icon}</span>
                  <p className="font-medium text-gray-900">{category.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Ticket Buying Tips & Guides
              </h2>
              <Link href="/blog" className="text-purple-600 hover:text-purple-700 font-medium">
                View All &rarr;
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow group"
                >
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium">
                    {post.readTime} min read
                  </span>
                  <h3 className="font-bold text-gray-900 mt-3 mb-2 group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">
                  How does Ticket Scan help me find cheaper tickets?
                </h3>
                <p className="text-gray-600">
                  Ticket Scan compares ticket prices from Ticketmaster, SeatGeek, and other major ticket sites in real-time. We track price trends so you can see if prices are going up or down, and alert you when tickets drop to your target price.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">
                  Is Ticket Scan free to use?
                </h3>
                <p className="text-gray-600">
                  Yes, Ticket Scan is completely free. Create an account to track events, compare prices, and get alerts when prices drop.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">
                  What events can I track with Ticket Scan?
                </h3>
                <p className="text-gray-600">
                  You can track any event available on major ticket platforms including concerts, NBA games, NHL hockey, NFL football, MLB baseball, theater shows, and more.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-white py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <NewsletterSignup source="homepage" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to save on your next event?
            </h2>
            <p className="text-gray-400 mb-8">
              Join thousands of fans who never miss a deal.
            </p>
            <Link
              href="/register"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
            >
              Create Free Account
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-5 gap-8 mb-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl">🎫</span>
                  <span className="text-white font-bold text-xl">Ticket Scan</span>
                </div>
                <p className="text-sm mb-6">
                  Compare ticket prices across multiple platforms and find the best deals on concerts, sports, and events.
                </p>
                <NewsletterSignup source="footer" variant="footer" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-4">Popular Venues</h3>
                <ul className="space-y-2 text-sm">
                  {venues.slice(0, 5).map((venue) => (
                    <li key={venue.id}>
                      <Link href={`/venues/${venue.id}`} className="hover:text-purple-400 transition-colors">
                        {venue.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-4">Cities</h3>
                <ul className="space-y-2 text-sm">
                  {cities.slice(0, 5).map((city) => (
                    <li key={city.slug}>
                      <Link href={`/tickets/${city.slug}`} className="hover:text-purple-400 transition-colors">
                        {city.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-4">Categories</h3>
                <ul className="space-y-2 text-sm">
                  {categories.map((category) => (
                    <li key={category.slug}>
                      <Link href={`/tickets/${category.slug}`} className="hover:text-purple-400 transition-colors">
                        {category.icon} {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm">&copy; 2026 Ticket Scan. All rights reserved.</p>
              <div className="flex gap-6 text-sm">
                <Link href="/privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-purple-400 transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
