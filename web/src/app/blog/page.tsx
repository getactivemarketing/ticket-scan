import { Metadata } from 'next';
import Link from 'next/link';
import { getAllBlogPosts, getFeaturedPosts } from '@/data/blog';
import NewsletterSignup from '@/components/NewsletterSignup';

export const metadata: Metadata = {
  title: 'Ticket Buying Tips & Guides',
  description: 'Expert tips on finding cheap tickets, best times to buy, and strategies for concerts, sports, and events. Save money on every purchase.',
  keywords: 'ticket tips, cheap tickets, buying guide, concert tickets, sports tickets, save money',
  alternates: {
    canonical: 'https://www.ticketscan.io/blog',
  },
  openGraph: {
    title: 'Ticket Scan Blog - Expert Ticket Buying Tips',
    description: 'Learn how to find the best ticket deals with our expert guides and tips.',
    type: 'website',
    url: 'https://www.ticketscan.io/blog',
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

const categoryColors = {
  guides: 'bg-blue-100 text-blue-700',
  tips: 'bg-green-100 text-green-700',
  news: 'bg-brand/10 text-brand-dark',
  comparisons: 'bg-amber-100 text-amber-700',
};

const categoryLabels = {
  guides: 'Guide',
  tips: 'Tips',
  news: 'News',
  comparisons: 'Comparison',
};

export default function BlogPage() {
  const allPosts = getAllBlogPosts();
  const featuredPosts = getFeaturedPosts();
  const regularPosts = allPosts.filter(p => !p.featured);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://www.ticketscan.io/blog#collectionpage',
        name: 'Ticket Scan Blog',
        description: 'Expert tips and guides for buying tickets to concerts, sports, and events.',
        url: 'https://www.ticketscan.io/blog',
        publisher: {
          '@type': 'Organization',
          name: 'Ticket Scan',
          url: 'https://www.ticketscan.io',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.ticketscan.io/blog#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ticketscan.io' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.ticketscan.io/blog' },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <div className="bg-navy text-white py-16 pt-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm mb-4">
              <Link href="/" className="text-gray-400 hover:text-white">Home</Link>
              <span className="mx-2 text-gray-500">/</span>
              <span>Blog</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Ticket Buying Tips & Guides
            </h1>
            <p className="text-xl text-white/50 max-w-2xl">
              Expert advice on finding the best ticket deals. Learn when to buy,
              how to compare prices, and strategies to save money.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold font-heading text-navy mb-8">Featured Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {featuredPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-brand/30 transition-colors group"
                  >
                    <div className="h-3 bg-gradient-to-r from-brand to-navy-light"></div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${categoryColors[post.category]}`}>
                          {categoryLabels[post.category]}
                        </span>
                        <span className="text-xs text-gray-500">{post.readTime} min read</span>
                      </div>
                      <h3 className="text-lg font-bold font-heading text-gray-900 mb-2 group-hover:text-brand transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <p className="text-xs text-gray-400">
                        {formatDate(post.publishedAt)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* All Posts */}
          <section>
            <h2 className="text-2xl font-bold font-heading text-navy mb-8">All Articles</h2>
            <div className="space-y-6">
              {regularPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block bg-white rounded-xl border border-gray-200 p-6 hover:border-brand/30 transition-colors group"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${categoryColors[post.category]}`}>
                          {categoryLabels[post.category]}
                        </span>
                        <span className="text-xs text-gray-500">{post.readTime} min read</span>
                      </div>
                      <h3 className="text-xl font-bold font-heading text-gray-900 mb-2 group-hover:text-brand transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{formatDate(post.publishedAt)}</span>
                        <span>By {post.author}</span>
                      </div>
                    </div>
                    <div className="md:text-right">
                      <span className="inline-flex items-center text-brand font-medium group-hover:text-brand-dark">
                        Read More
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="mt-16">
            <NewsletterSignup source="blog-index" />
          </section>
        </div>
      </div>
    </>
  );
}
