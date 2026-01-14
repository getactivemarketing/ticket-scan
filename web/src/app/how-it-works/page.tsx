import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How It Works - Compare Ticket Prices in 3 Easy Steps',
  description: 'Learn how Ticket Scan helps you find the best ticket deals. Search events, compare prices, and get alerts when prices drop.',
  keywords: 'how ticket scan works, compare ticket prices, ticket price alerts',
};

const steps = [
  {
    number: '1',
    title: 'Search for Events',
    description: 'Enter your city, team, artist, or venue to find upcoming events. We search across all major ticket platforms instantly.',
    icon: '🔍',
    details: [
      'Search by city, venue, team, or artist',
      'Filter by date range',
      'See all event types in one place',
    ],
  },
  {
    number: '2',
    title: 'Compare Prices',
    description: 'See prices from Ticketmaster, SeatGeek, StubHub, and more side-by-side. Find the best deal without opening multiple tabs.',
    icon: '📊',
    details: [
      'Compare 5+ ticket platforms at once',
      'See price ranges by section',
      'Identify the best value instantly',
    ],
  },
  {
    number: '3',
    title: 'Track & Get Alerts',
    description: 'Add events to your watchlist and set your target price. We\'ll email you the moment prices drop to your budget.',
    icon: '🔔',
    details: [
      'Set custom price alerts',
      'Get email notifications',
      'Never miss a price drop',
    ],
  },
];

const features = [
  {
    icon: '💰',
    title: 'Save Money',
    description: 'Our users save an average of $127 per ticket by comparing prices and timing their purchase right.',
  },
  {
    icon: '⏱️',
    title: 'Save Time',
    description: 'No more opening 10 browser tabs. See all your options in one clean dashboard.',
  },
  {
    icon: '📈',
    title: 'Price Trends',
    description: 'Understand when prices typically drop so you know the best time to buy.',
  },
  {
    icon: '🎯',
    title: 'Smart Alerts',
    description: 'Set your target price once and let us do the monitoring for you.',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How Ticket Scan Works
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Find the best ticket deals in 3 simple steps. Compare prices, track events, and never overpay again.
          </p>
        </div>
      </div>

      {/* Steps Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-16">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
            >
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                  <span className="text-4xl">{step.icon}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {step.description}
                </p>
                <ul className="space-y-3">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <span className="text-green-500 text-xl">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div className="flex-1">
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  {step.number === '1' && (
                    <div className="space-y-4">
                      <div className="h-12 bg-gray-100 rounded-lg flex items-center px-4 gap-3">
                        <span className="text-gray-400">🔍</span>
                        <span className="text-gray-500">Search events, artists, teams...</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-purple-50 text-purple-700 p-2 rounded text-center text-sm">NBA</div>
                        <div className="bg-purple-50 text-purple-700 p-2 rounded text-center text-sm">Concerts</div>
                        <div className="bg-purple-50 text-purple-700 p-2 rounded text-center text-sm">NHL</div>
                      </div>
                      <div className="border-t pt-4 space-y-2">
                        <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                      </div>
                    </div>
                  )}
                  {step.number === '2' && (
                    <div className="space-y-4">
                      <div className="text-sm text-gray-500 mb-2">Price Comparison</div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
                          <span className="font-medium">SeatGeek</span>
                          <span className="text-green-600 font-bold">$89</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="font-medium">Ticketmaster</span>
                          <span className="text-gray-700 font-bold">$105</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="font-medium">StubHub</span>
                          <span className="text-gray-700 font-bold">$112</span>
                        </div>
                      </div>
                      <div className="text-center text-green-600 font-medium">
                        Save $23 with SeatGeek!
                      </div>
                    </div>
                  )}
                  {step.number === '3' && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="text-green-500">●</span>
                        Tracking enabled
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <div className="font-medium text-gray-900">Lakers vs Celtics</div>
                        <div className="text-sm text-gray-500">Jan 15, 2026</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Target Price:</span>
                        <span className="font-bold text-purple-600">$150</span>
                      </div>
                      <div className="bg-green-100 text-green-700 p-3 rounded-lg text-center font-medium">
                        📧 Alert set! We&apos;ll email you.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Fans Love Ticket Scan
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="text-center p-6"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Platforms We Compare */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            We Compare All Major Ticket Platforms
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-gray-600">
            <span className="bg-white px-6 py-3 rounded-lg shadow-sm">Ticketmaster</span>
            <span className="bg-white px-6 py-3 rounded-lg shadow-sm">SeatGeek</span>
            <span className="bg-white px-6 py-3 rounded-lg shadow-sm">StubHub</span>
            <span className="bg-white px-6 py-3 rounded-lg shadow-sm">Vivid Seats</span>
            <span className="bg-white px-6 py-3 rounded-lg shadow-sm">+ More</span>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-purple-600 to-indigo-700 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Best Deal?
          </h2>
          <p className="text-purple-100 mb-8 text-lg">
            Join thousands of fans who never overpay for tickets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-50 transition-colors"
            >
              Start Searching
            </Link>
            <Link
              href="/register"
              className="bg-purple-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-400 transition-colors"
            >
              Create Free Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
