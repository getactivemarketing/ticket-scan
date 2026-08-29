import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact TicketScan - Support & Questions',
  description: 'Get in touch with the TicketScan team. Questions about comparing ticket prices, price alerts, World Cup 2026 tickets, or your account? Here is how to reach us.',
  keywords: 'contact ticketscan, ticketscan support, ticket price comparison help',
  alternates: {
    canonical: 'https://www.ticketscan.io/contact',
  },
  openGraph: {
    title: 'Contact TicketScan - Support & Questions',
    description: 'Reach the TicketScan team with questions about price comparison, alerts, or World Cup 2026 tickets.',
    type: 'website',
    url: 'https://www.ticketscan.io/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact TicketScan - Support & Questions',
    description: 'Reach the TicketScan team with questions about price comparison, alerts, or World Cup 2026 tickets.',
  },
};

// NOTE: support@ticketscan.io is the conventional support alias. Confirm this
// mailbox/alias is live before this page is committed and deployed.
const SUPPORT_EMAIL = 'support@ticketscan.io';

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://www.ticketscan.io/contact',
  url: 'https://www.ticketscan.io/contact',
  name: 'Contact TicketScan',
  description: 'How to reach the TicketScan team for support and questions.',
  mainEntity: {
    '@type': 'Organization',
    name: 'TicketScan',
    url: 'https://www.ticketscan.io',
    email: SUPPORT_EMAIL,
    sameAs: [
      'https://x.com/ticketscan_io',
      'https://instagram.com/ticketscanapp',
      'https://threads.net/@ticketscanapp',
      'https://tiktok.com/@ticketscan_io',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: SUPPORT_EMAIL,
        availableLanguage: ['English'],
      },
    ],
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ticketscan.io' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.ticketscan.io/contact' },
  ],
};

const faqs = [
  {
    q: 'How do I set a price alert?',
    a: 'Search for your event on the dashboard, add it to your watchlist, and set a target price. We email you the moment any platform drops to your target.',
  },
  {
    q: 'Does TicketScan sell tickets?',
    a: 'No. TicketScan is a price-comparison tool. We show you live prices from Ticketmaster, SeatGeek, StubHub, and more so you can buy from the source with the best deal.',
  },
  {
    q: 'Is TicketScan free?',
    a: 'Yes. Comparing prices, tracking events, and price-drop alerts are completely free.',
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <div className="bg-gradient-to-br from-navy via-brand to-teal text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Contact TicketScan
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Questions about comparing prices, price alerts, or World Cup 2026 tickets?
              We&apos;re here to help.
            </p>
          </div>
        </div>

        {/* Contact methods */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Email */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="text-4xl mb-4">📧</div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-3">
                Email Support
              </h2>
              <p className="text-gray-600 mb-4">
                The fastest way to reach us. We typically reply within one business day.
              </p>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="inline-block bg-brand text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors"
              >
                {SUPPORT_EMAIL}
              </a>
            </div>

            {/* Social */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="text-4xl mb-4">💬</div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-3">
                Social Media
              </h2>
              <p className="text-gray-600 mb-4">
                Follow along for ticket deals and price-drop tips, or send us a DM.
              </p>
              <div className="flex flex-col gap-2 text-brand font-medium">
                <a href="https://x.com/ticketscan_io" target="_blank" rel="noopener noreferrer" className="hover:text-brand-dark transition-colors">
                  X (Twitter) → @ticketscan_io
                </a>
                <a href="https://instagram.com/ticketscanapp" target="_blank" rel="noopener noreferrer" className="hover:text-brand-dark transition-colors">
                  Instagram → @ticketscan_io
                </a>
                <a href="https://tiktok.com/@ticketscan_io" target="_blank" rel="noopener noreferrer" className="hover:text-brand-dark transition-colors">
                  TikTok → @ticketscan_io
                </a>
              </div>
            </div>
          </div>

          {/* Quick answers */}
          <div className="mt-12">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
              Before you write — quick answers
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white rounded-xl border border-gray-100 p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mt-6">
              More questions? See our{' '}
              <Link href="/faq" className="text-brand font-medium hover:text-brand-dark">
                full FAQ
              </Link>{' '}
              or learn{' '}
              <Link href="/how-it-works" className="text-brand font-medium hover:text-brand-dark">
                how TicketScan works
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-gray-50 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-500 text-center">
              TicketScan is not a ticket seller and cannot process orders, refunds, or
              transfers. For issues with a ticket purchase, contact the platform you
              bought from (Ticketmaster, SeatGeek, StubHub, etc.) directly.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
