import Link from 'next/link';
import { Metadata } from 'next';
import HomeHeroButtons from '@/components/HomeHeroButtons';
import NewsletterSignup from '@/components/NewsletterSignup';
import Logo from '@/components/Logo';
import { TwitterIcon, TikTokIcon, InstagramIcon, ThreadsIcon } from '@/components/SocialIcons';
import { getAllVenues } from '@/data/venues';
import { getAllCities } from '@/data/cities';
import { getAllCategories } from '@/data/categories';
import { getFeaturedPosts } from '@/data/blog';
import BrowseTabsClient from '@/components/BrowseTabsClient';
import UpcomingEvents from '@/components/UpcomingEvents';

export const metadata: Metadata = {
  title: 'TicketScan - Event Search, Venue Guides and Onsale Dates',
  description: 'Search concert, sports and theater events across the major ticket platforms. Browse venue guides, save events to a watchlist, and find out when tickets go on sale.',
  keywords: 'event search, concert tickets, sports tickets, NFL tickets, college football tickets, venue seating guides, ticket onsale dates, presale tickets',
  alternates: {
    canonical: 'https://www.ticketscan.io',
  },
  openGraph: {
    title: 'TicketScan - Find Events, Track Onsales',
    description: 'Search events across the major ticket platforms, save what you care about, and get told when tickets go on sale.',
    type: 'website',
    url: 'https://www.ticketscan.io',
  },
};

const homepageFaqs = [
  { q: 'What does TicketScan actually do?', a: 'TicketScan searches events across the major ticket platforms from one place, publishes venue guides covering seating and access, and tracks when tickets for an event go on sale. Add an event to your watchlist and we tell you when its onsale or presale window opens.' },
  { q: 'Is TicketScan free to use?', a: 'Yes, TicketScan is completely free. Create an account to search events, build a watchlist, and get notified when tickets go on sale.' },
  { q: 'What events can I track with TicketScan?', a: 'Any event listed on the major ticket platforms — concerts, NFL and college football, NBA, NHL, MLB, theater shows and more.' },
];

export default async function Home() {
  const venues = getAllVenues();
  const cities = getAllCities();
  const categories = getAllCategories();
  const featuredPosts = getFeaturedPosts().slice(0, 3);

  // The site-wide WebSite node (@id …/#website) is defined once in the root
  // layout (layout.tsx) and renders on every page, including this one. We do NOT
  // redeclare it here — two nodes sharing an @id is a structured-data conflict.
  // No SearchAction is declared: the dashboard is client-side and ignores ?q=,
  // so a Sitelinks Searchbox target would be non-functional. The homepage's only
  // unique structured data is its FAQPage.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        '@id': 'https://www.ticketscan.io/#faq',
        mainEntity: homepageFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="bg-navy text-white pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="flex-1 text-center lg:text-left">
                <p className="text-teal text-xs font-semibold uppercase tracking-[0.2em] mb-4">Events, venues and onsale dates</p>
                <h1 className="text-5xl lg:text-6xl font-heading font-bold tracking-tight leading-[1.1] mb-5">
                  Find it.<br /><span className="text-teal">Track it.</span><br />Don't miss it.
                </h1>
                <p className="text-white/50 text-lg mb-8 max-w-md mx-auto lg:mx-0">Search events across the major ticket platforms, save what you care about, and get told when tickets go on sale — including presales.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Link href="/register" className="inline-block bg-gradient-to-r from-brand to-teal text-white px-7 py-3 rounded-lg font-semibold transition-opacity hover:opacity-90">Get Started Free</Link>
                  <a href="#how-it-works" className="inline-block border border-white/20 text-white px-7 py-3 rounded-lg font-medium hover:bg-white/5 transition-colors text-center">See How It Works</a>
                </div>
              </div>
              <div className="flex-shrink-0 w-full max-w-sm">
                <div className="bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-5 text-charcoal">
                  <p className="font-heading font-bold text-sm text-navy mb-4">Your Watchlist</p>
                  <div className="bg-gray-50 rounded-lg p-3 mb-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-sm text-navy">Chiefs vs Bills</span>
                      <span className="text-xs font-bold bg-success/10 text-success px-2 py-0.5 rounded">ON SALE</span>
                    </div>
                    <svg viewBox="0 0 200 40" className="w-full h-8 mb-1">
                      <polyline points="0,30 25,28 50,32 75,25 100,20 125,22 150,15 175,12 200,8" fill="none" stroke="#1E63FF" strokeWidth="2" />
                      <circle cx="200" cy="8" r="3" fill="#16C784" />
                    </svg>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Tickets available now</span>
                      <span className="text-success">MetLife</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-sm text-navy">Michigan vs Ohio State</span>
                      <span className="text-xs font-bold bg-amber-100 text-amber-600 px-2 py-0.5 rounded">PRESALE</span>
                    </div>
                    <p className="text-xs text-gray-500">Presale opens Tue 10am</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div id="how-it-works" className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-heading font-bold text-center text-navy mb-12 tracking-tight">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-px bg-gray-200" />
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-brand/5 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-brand" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
                </div>
                <h3 className="font-heading font-bold text-navy mb-2">Search</h3>
                <p className="text-gray-500 text-sm">Search Ticketmaster, SeatGeek, and StubHub from one place.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-teal/5 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>
                </div>
                <h3 className="font-heading font-bold text-navy mb-2">Track</h3>
                <p className="text-gray-500 text-sm">Add events to your watchlist and we watch them for you.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-success/5 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-success" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" /></svg>
                </div>
                <h3 className="font-heading font-bold text-navy mb-2">Get Told</h3>
                <p className="text-gray-500 text-sm">Hear the moment tickets go on sale, including presales before the public window.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Up — live Ticketmaster dates at the venues we cover */}
        <UpcomingEvents />

        {/* Popular Venues */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-heading font-bold text-navy mb-8 tracking-tight">Popular Venues</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {venues.map((venue) => (
                <Link key={venue.id} href={`/venues/${venue.id}`} className="bg-white border border-gray-200 hover:border-brand/40 p-4 rounded-xl transition-colors group">
                  <p className="font-medium text-navy text-sm group-hover:text-brand transition-colors">{venue.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{venue.city}, {venue.state}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Browse Tabs */}
        <BrowseTabsClient cities={cities} categories={categories} />

        {/* Blog Section */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-heading font-bold text-navy tracking-tight">Ticket Buying Tips & Guides</h2>
              <Link href="/blog" className="text-brand hover:text-brand-dark font-medium text-sm">View All →</Link>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {featuredPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-brand/30 transition-colors group">
                  <span className="text-xs bg-brand/10 text-brand-dark px-2 py-0.5 rounded-full font-medium">{post.readTime} min read</span>
                  <h3 className="font-bold text-navy text-sm mt-3 mb-2 group-hover:text-brand transition-colors">{post.title}</h3>
                  <p className="text-gray-500 text-xs line-clamp-2">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-heading font-bold text-navy mb-8 text-center tracking-tight">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {homepageFaqs.map((faq) => (
                <div key={faq.q} className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-navy text-sm mb-2">{faq.q}</h3>
                  <p className="text-gray-500 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-white py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <NewsletterSignup source="homepage" />
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4 tracking-tight">Ready to save on your next event?</h2>
            <p className="text-white/40 mb-8">Join thousands of fans who never miss a deal.</p>
            <Link href="/register" className="inline-block bg-gradient-to-r from-brand to-teal text-white px-8 py-4 rounded-lg font-bold text-lg transition-opacity hover:opacity-90">Create Free Account</Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-navy text-gray-400 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-5 gap-8 mb-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <Logo size={28} className="text-white" />
                  <span className="text-white font-heading font-bold text-xl tracking-tight">TicketScan</span>
                </div>
                <p className="text-sm mb-4">Search concerts, sports and theater events across the major ticket platforms, browse venue guides, and know when tickets go on sale.</p>
                <div className="flex gap-3 mb-6">
                  <a href="https://twitter.com/ticketscan" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors"><TwitterIcon /></a>
                  <a href="https://tiktok.com/@ticketscan" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors"><TikTokIcon /></a>
                  <a href="https://instagram.com/ticketscan" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors"><InstagramIcon /></a>
                  <a href="https://threads.net/@ticketscan" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors"><ThreadsIcon /></a>
                </div>
                <NewsletterSignup source="footer" variant="footer" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-4 text-sm">Popular Venues</h3>
                <ul className="space-y-2 text-sm">
                  {venues.slice(0, 5).map((venue) => (
                    <li key={venue.id}><Link href={`/venues/${venue.id}`} className="hover:text-brand-light transition-colors">{venue.name}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-4 text-sm">Cities</h3>
                <ul className="space-y-2 text-sm">
                  {cities.slice(0, 5).map((city) => (
                    <li key={city.slug}><Link href={`/tickets/${city.slug}`} className="hover:text-brand-light transition-colors">{city.name}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-4 text-sm">Categories</h3>
                <ul className="space-y-2 text-sm">
                  {categories.map((category) => (
                    <li key={category.slug}><Link href={`/tickets/${category.slug}`} className="hover:text-brand-light transition-colors">{category.icon} {category.name}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm">&copy; 2026 TicketScan. All rights reserved.</p>
              <div className="flex gap-6 text-sm">
                <Link href="/privacy" className="hover:text-brand-light transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-brand-light transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
