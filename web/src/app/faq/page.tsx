import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions',
  description: 'Get answers to common questions about Ticket Scan. Learn how to compare ticket prices, track events, and get price alerts.',
  keywords: 'ticket scan FAQ, ticket comparison help, price tracking questions',
};

const faqs = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'What is Ticket Scan?',
        a: 'Ticket Scan is a free ticket price comparison tool that helps you find the best deals on concert, sports, and theater tickets. We compare prices from Ticketmaster, SeatGeek, StubHub, and other major ticket platforms so you can see all your options in one place.',
      },
      {
        q: 'Is Ticket Scan free to use?',
        a: 'Yes, Ticket Scan is completely free. Create an account to access all features including price tracking, watchlist, and email alerts when prices drop.',
      },
      {
        q: 'Do I buy tickets through Ticket Scan?',
        a: 'No, we don\'t sell tickets directly. When you find the best price, we redirect you to the ticket platform (like Ticketmaster or SeatGeek) where you can complete your purchase with their buyer protection.',
      },
    ],
  },
  {
    category: 'Price Tracking & Alerts',
    questions: [
      {
        q: 'How do price alerts work?',
        a: 'When you add an event to your watchlist, you can set a target price. We\'ll monitor ticket prices across all platforms and send you an email notification when prices drop to or below your target.',
      },
      {
        q: 'How often are prices updated?',
        a: 'We check prices multiple times throughout the day to ensure you have access to the most current pricing information available.',
      },
      {
        q: 'Can I track multiple events?',
        a: 'Yes! You can add as many events as you want to your watchlist. Set different target prices for each event and track them all from your dashboard.',
      },
    ],
  },
  {
    category: 'Comparing Prices',
    questions: [
      {
        q: 'Which ticket sites do you compare?',
        a: 'We compare prices from major ticket platforms including Ticketmaster, SeatGeek, StubHub, Vivid Seats, and more. Our goal is to show you every available option so you can make the best choice.',
      },
      {
        q: 'Do prices include fees?',
        a: 'We display the base ticket price shown by each platform. Service fees vary by platform and are typically shown at checkout. We recommend checking the total cost on each platform before purchasing.',
      },
      {
        q: 'Why are prices different on each platform?',
        a: 'Each ticket platform sets its own prices based on seller inventory, demand, and their fee structures. This is exactly why comparing prices is so important - the same seat can vary by 20% or more between platforms.',
      },
    ],
  },
  {
    category: 'Account & Watchlist',
    questions: [
      {
        q: 'How do I create an account?',
        a: 'Click "Sign Up" in the top right corner. Enter your email address and create a password. That\'s it - you\'re ready to start tracking prices!',
      },
      {
        q: 'Can I save my favorite teams or artists?',
        a: 'Yes! Use the Favorites feature to save your favorite teams, artists, and venues. We\'ll highlight relevant events and make it easier to find what you\'re looking for.',
      },
      {
        q: 'How do I unsubscribe from email alerts?',
        a: 'You can manage your email preferences from your account settings, or click the unsubscribe link at the bottom of any alert email.',
      },
    ],
  },
  {
    category: 'Ticket Buying Tips',
    questions: [
      {
        q: 'When is the best time to buy tickets?',
        a: 'Generally, ticket prices are highest at the moment they go on sale, then drop over time. The sweet spot is often 2-3 weeks before the event when resellers start lowering prices. However, this varies by event - check out our blog for detailed guides.',
      },
      {
        q: 'Are resale tickets safe to buy?',
        a: 'When you buy through reputable platforms like Ticketmaster, SeatGeek, or StubHub, your purchase is protected by their buyer guarantees. Always stick to established platforms and avoid buying from random social media sellers.',
      },
      {
        q: 'What if an event is sold out?',
        a: 'Don\'t worry! Sold out events often have tickets available on resale platforms. Set a price alert on Ticket Scan and we\'ll notify you when tickets become available at your target price.',
      },
    ],
  },
];

// Generate JSON-LD structured data
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.flatMap((category) =>
    category.questions.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-purple-100">
              Everything you need to know about finding the best ticket deals
            </p>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Quick Links */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="font-bold text-gray-900 mb-4">Jump to Section</h2>
            <div className="flex flex-wrap gap-2">
              {faqs.map((category) => (
                <a
                  key={category.category}
                  href={`#${category.category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm hover:bg-purple-100 transition-colors"
                >
                  {category.category}
                </a>
              ))}
            </div>
          </div>

          {/* FAQ Sections */}
          {faqs.map((category) => (
            <div
              key={category.category}
              id={category.category.toLowerCase().replace(/\s+/g, '-')}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl shadow-sm p-6"
                  >
                    <h3 className="font-bold text-gray-900 mb-3">
                      {item.q}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Still Have Questions */}
          <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-purple-100 mb-6">
              Check out our blog for detailed guides and ticket-buying tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-purple-50 transition-colors"
              >
                Read Our Guides
              </Link>
              <Link
                href="/how-it-works"
                className="bg-purple-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-400 transition-colors"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
