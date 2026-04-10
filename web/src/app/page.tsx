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

export const metadata: Metadata = {
  title: 'TicketScan - Compare Ticket Prices Across Multiple Sites',
  description: 'Find the best deals on concert, sports, and theater tickets. Compare prices from Ticketmaster, SeatGeek, and more. Track price trends and get alerts when prices drop.',
  keywords: 'ticket prices, compare tickets, cheap tickets, concert tickets, sports tickets, NBA tickets, NHL tickets, Ticketmaster, SeatGeek',
  openGraph: {
    title: 'TicketScan - Compare Ticket Prices',
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TicketScan',
    url: 'https://ticketscan.io',
    description: 'Compare ticket prices across multiple platforms. Find the best deals on concerts, sports, and theater events.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://ticketscan.io/dashboard?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How does TicketScan help me find cheaper tickets?', acceptedAnswer: { '@type': 'Answer', text: 'TicketScan compares ticket prices from Ticketmaster, SeatGeek, and other major ticket sites in real-time. We track price trends so you can see if prices are going up or down, and alert you when tickets drop to your target price.' } },
      { '@type': 'Question', name: 'Is TicketScan free to use?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, TicketScan is completely free. Create an account to track events, compare prices, and get alerts when prices drop.' } },
      { '@type': 'Question', name: 'What events can I track with TicketScan?', acceptedAnswer: { '@type': 'Answer', text: 'You can track any event available on major ticket platforms including concerts, NBA games, NHL hockey, NFL football, MLB baseball, theater shows, and more.' } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="bg-navy text-white pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="flex-1 text-center lg:text-left">
                <p className="text-teal text-xs font-semibold uppercase tracking-[0.2em] mb-4">Real-time price intelligence</p>
                <h1 className="text-5xl lg:text-6xl font-heading font-bold tracking-tight leading-[1.1] mb-5">
                  Compare.<br /><span className="text-teal">Track.</span><br />Save.
                </h1>
                <p className="text-white/50 text-lg mb-8 max-w-md mx-auto lg:mx-0">Real-time prices from every major ticket platform. Get alerts when prices drop.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Link href="/register" className="inline-block bg-gradient-to-r from-brand to-teal text-white px-7 py-3 rounded-lg font-semibold transition-opacity hover:opacity-90">Get Started Free</Link>
                  <a href="#how-it-works" className="inline-block border border-white/20 text-white px-7 py-3 rounded-lg font-medium hover:bg-white/5 transition-colors text-center">See How It Works</a>
                </div>
              </div>
              <div className="flex-shrink-0 w-full max-w-sm">
                <div className="bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-5 text-charcoal">
                  <p className="font-heading font-bold text-sm text-navy mb-4">Price Tracker</p>
                  <div className="bg-gray-50 rounded-lg p-3 mb-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-sm text-navy">NBA Finals G1</span>
                      <span className="text-xs font-bold bg-success/10 text-success px-2 py-0.5 rounded">BUY</span>
                    </div>
                    <svg viewBox="0 0 200 40" className="w-full h-8 mb-1">
                      <polyline points="0,30 25,28 50,32 75,25 100,20 125,22 150,15 175,12 200,8" fill="none" stroke="#1E63FF" strokeWidth="2" />
                      <circle cx="200" cy="8" r="3" fill="#16C784" />
                    </svg>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>$340 → <span className="text-success font-bold">$198</span></span>
                      <span className="text-success">▼ 42%</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-sm text-navy">Kendrick Lamar</span>
                      <span className="text-xs font-bold bg-amber-100 text-amber-600 px-2 py-0.5 rounded">HOLD</span>
                    </div>
                    <p className="text-xs text-gray-500">$156 avg · trending down</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-white py-10 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center gap-16 md:gap-24 text-center">
              <div><div className="text-3xl font-heading font-bold text-brand">50K+</div><div className="text-gray-500 text-xs mt-1">Events Tracked</div></div>
              <div><div className="text-3xl font-heading font-bold text-brand">$127</div><div className="text-gray-500 text-xs mt-1">Avg. Savings</div></div>
              <div><div className="text-3xl font-heading font-bold text-brand">5+</div><div className="text-gray-500 text-xs mt-1">Sites Compared</div></div>
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
                <p className="text-gray-500 text-sm">Add events to your watchlist and we monitor prices 24/7.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-success/5 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-success" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" /></svg>
                </div>
                <h3 className="font-heading font-bold text-navy mb-2">Save</h3>
                <p className="text-gray-500 text-sm">Get alerts when prices drop to your target and buy at the right time.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trending Deals */}
        <div className="bg-white py-12 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-heading font-bold text-navy mb-8 tracking-tight">Trending Deals</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { name: 'Lakers vs Celtics', date: 'Fri, Jun 12', venue: 'Crypto.com Arena', price: '$89', change: '▼ 12%', changeColor: 'text-success', sources: ['TM', 'SG', 'SH'] },
                { name: 'Taylor Swift', date: 'Sat, Jul 5', venue: 'SoFi Stadium', price: '$245', change: '▲ 8%', changeColor: 'text-red-500', sources: ['TM', 'SG'] },
                { name: 'World Cup — USA vs Mexico', date: 'Jun 15', venue: 'MetLife Stadium', price: '$175', change: '▼ 5%', changeColor: 'text-success', sources: ['TM', 'SG', 'SH'] },
              ].map((deal) => (
                <div key={deal.name} className="border border-gray-200 rounded-xl p-5 hover:border-brand/30 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-navy text-sm">{deal.name}</h3>
                      <p className="text-xs text-gray-400 mt-0.5">{deal.date} · {deal.venue}</p>
                    </div>
                    <span className={`text-sm font-bold ${deal.changeColor}`}>{deal.change}</span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-heading font-bold text-navy">{deal.price}</span>
                    <div className="flex gap-1">
                      {deal.sources.map((s) => (
                        <span key={s} className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded font-medium">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

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

        {/* World Cup Banner */}
        <div className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-navy rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-teal">
              <div>
                <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-2">June 11 – July 19, 2026</p>
                <h3 className="text-white text-2xl font-heading font-bold tracking-tight">FIFA World Cup 2026</h3>
                <p className="text-white/50 text-sm mt-1">16 stadiums · 104 matches · Compare prices across all venues</p>
              </div>
              <Link href="/world-cup-2026" className="bg-gradient-to-r from-brand to-teal text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">Explore Venues</Link>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-navy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-heading font-bold text-center text-white mb-12 tracking-tight">What Fans Are Saying</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { quote: 'Saved $200 on Lakers tickets by waiting for the price drop alert. This tool pays for itself!', name: 'Marcus T.', location: 'Los Angeles, CA', initial: 'M', initialBg: 'bg-brand/20 text-brand-light' },
                { quote: 'Finally, one place to compare all the ticket sites. No more opening 10 tabs to find the best deal.', name: 'Sarah K.', location: 'Chicago, IL', initial: 'S', initialBg: 'bg-teal/20 text-teal-light' },
                { quote: 'Got floor seats to a concert for less than upper deck prices. The price alerts are a game changer.', name: 'Jason R.', location: 'Miami, FL', initial: 'J', initialBg: 'bg-success/20 text-success' },
              ].map((t) => (
                <div key={t.name} className="border border-white/10 rounded-xl p-6">
                  <p className="text-white/80 text-base leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold ${t.initialBg}`}>{t.initial}</div>
                    <div>
                      <div className="font-medium text-white text-sm">{t.name}</div>
                      <div className="text-xs text-white/40">{t.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

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
              {[
                { q: 'How does TicketScan help me find cheaper tickets?', a: 'TicketScan compares ticket prices from Ticketmaster, SeatGeek, and other major ticket sites in real-time. We track price trends so you can see if prices are going up or down, and alert you when tickets drop to your target price.' },
                { q: 'Is TicketScan free to use?', a: 'Yes, TicketScan is completely free. Create an account to track events, compare prices, and get alerts when prices drop.' },
                { q: 'What events can I track with TicketScan?', a: 'You can track any event available on major ticket platforms including concerts, NBA games, NHL hockey, NFL football, MLB baseball, theater shows, and more.' },
              ].map((faq) => (
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
                <p className="text-sm mb-4">Compare ticket prices across multiple platforms and find the best deals on concerts, sports, and events.</p>
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
