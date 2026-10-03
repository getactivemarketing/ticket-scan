import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ticket Buying FAQ - Common Questions Answered',
  description: 'Answers to common questions about finding events, comparing listings, venue guides, and ticket onsale dates on Ticket Scan.',
  keywords: 'ticket buying FAQ, event search help, venue guide questions, onsale dates',
  alternates: {
    canonical: 'https://www.ticketscan.io/faq',
  },
  openGraph: {
    title: 'Ticket Buying FAQ - Common Questions Answered | Ticket Scan',
    description: 'Answers to common questions about finding events, comparing listings, venue guides, and onsale dates.',
    type: 'website',
    url: 'https://www.ticketscan.io/faq',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ticket Buying FAQ - Common Questions Answered | Ticket Scan',
    description: 'Answers to common questions about finding events, comparing listings, venue guides, and onsale dates.',
  },
};

const faqs = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'What is Ticket Scan?',
        a: 'Ticket Scan is a free event search and ticket research tool for concerts, sports, and theater. We help you find events, compare available listings, browse venue guides, and check onsale and presale dates.',
      },
      {
        q: 'Is Ticket Scan free to use?',
        a: 'Yes, Ticket Scan is completely free. Create an account to search events and save them to a personal watchlist.',
      },
      {
        q: 'Do I buy tickets through Ticket Scan?',
        a: 'No, we don\'t sell tickets directly. We help you find an event and link you to the ticket platform (such as Ticketmaster or TicketNetwork) where you can review current availability and complete your purchase.',
      },
    ],
  },
  {
    category: 'Listings & Availability',
    questions: [
      {
        q: 'What can I save to my watchlist?',
        a: 'Save events you want to revisit so they are easier to find from your account. TicketScan currently focuses on event discovery, venue information, and onsale dates.',
      },
      {
        q: 'How current are listing details?',
        a: 'Ticket availability and listing details can change on the third-party seller site. Check the linked seller page for the current inventory and final checkout total.',
      },
      {
        q: 'Can I save multiple events?',
        a: 'Yes. Add events to your watchlist and revisit them from your dashboard whenever you are ready to check availability.',
      },
    ],
  },
  {
    category: 'Listings & Ticket Platforms',
    questions: [
      {
        q: 'Which ticket platforms can I use?',
        a: 'Event pages link to available ticket platforms, including Ticketmaster and TicketNetwork when listings are available. Follow the seller link to review the current inventory and checkout total.',
      },
      {
        q: 'Where can I confirm the final ticket total?',
        a: 'The linked seller is the source of truth for inventory, fees, delivery options, and the final checkout total. Ticket availability can change, so confirm the details there before buying.',
      },
      {
        q: 'How do I choose a section?',
        a: 'Use the venue guide to understand named seating sections, access, and sightline tradeoffs. Always confirm the exact section, row, and view on the seller\'s listing before purchase.',
      },
      {
        q: 'Why can availability differ between platforms?',
        a: 'Each platform has its own inventory, seller relationships, fees, and checkout rules. Compare the event date, section, delivery method, and all-in total on the seller site before choosing.',
      },
    ],
  },
  {
    category: 'Account & Watchlist',
    questions: [
      {
        q: 'How do I create an account?',
        a: 'Click "Sign Up" in the top right corner. Enter your email address and create a password. Then you can save events and favorites to your account.',
      },
      {
        q: 'Can I save my favorite teams or artists?',
        a: 'Yes! Use the Favorites feature to save your favorite teams, artists, and venues. We\'ll highlight relevant events and make it easier to find what you\'re looking for.',
      },
      {
        q: 'How do I manage email preferences?',
        a: 'Use the unsubscribe link at the bottom of a TicketScan marketing email. TicketScan does not currently send ticket price-drop alerts.',
      },
    ],
  },
  {
    category: 'Ticket Buying Tips',
    questions: [
      {
        q: 'When should I buy tickets?',
        a: 'There is no universal best time. Check the onsale or presale date, compare the all-in total, and consider how important the event and seat are to you. For high-demand events, waiting can mean fewer choices.',
      },
      {
        q: 'Are resale tickets safe to buy?',
        a: 'When you buy through reputable platforms like Ticketmaster, SeatGeek, or StubHub, your purchase is protected by their buyer guarantees. Always stick to established platforms and avoid buying from random social media sellers.',
      },
      {
        q: 'What if an event is sold out?',
        a: 'Sold-out events may have inventory on resale platforms. Use the seller links from the event page, compare the same date and section, and verify the all-in total before buying.',
      },
    ],
  },
];

// Generate JSON-LD structured data
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      '@id': 'https://www.ticketscan.io/faq#faqpage',
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
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.ticketscan.io/faq#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ticketscan.io' },
        { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://www.ticketscan.io/faq' },
      ],
    },
  ],
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
        <div className="bg-gradient-to-br from-navy via-brand to-teal text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-100">
              Everything you need to know about finding the best ticket deals
            </p>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Quick Links */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="font-heading font-bold text-gray-900 mb-4">Jump to Section</h2>
            <div className="flex flex-wrap gap-2">
              {faqs.map((category) => (
                <a
                  key={category.category}
                  href={`#${category.category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-blue-50 text-brand-dark px-3 py-1 rounded-full text-sm hover:bg-blue-100 transition-colors"
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
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl shadow-sm p-6"
                  >
                    <h3 className="font-heading font-bold text-gray-900 mb-3">
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
          <div className="bg-gradient-to-br from-brand to-navy rounded-xl p-8 text-white text-center">
            <h2 className="font-heading text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-blue-100 mb-6">
              Check out our blog for detailed guides and ticket-buying tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-white text-brand px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
              >
                Read Our Guides
              </Link>
              <Link
                href="/how-it-works"
                className="bg-brand-light text-white px-6 py-3 rounded-lg font-bold hover:bg-brand transition-colors"
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
