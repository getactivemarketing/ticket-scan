import { Metadata } from 'next';
import Link from 'next/link';
import { getAllBlogPosts, getFeaturedPosts } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Ticket Buying Tips & Guides - Ticket Scan Blog',
  description: 'Expert tips on finding cheap tickets, best times to buy, and strategies for concerts, sports, and events. Save money on every purchase.',
  keywords: 'ticket tips, cheap tickets, buying guide, concert tickets, sports tickets, save money',
  openGraph: {
    title: 'Ticket Scan Blog - Expert Ticket Buying Tips',
    description: 'Learn how to find the best ticket deals with our expert guides and tips.',
    type: 'website',
    url: 'https://ticketscan.io/blog',
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
  news: 'bg-purple-100 text-purple-700',
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
    '@type': 'Blog',
    name: 'Ticket Scan Blog',
    description: 'Expert tips and guides for buying tickets to concerts, sports, and events.',
    url: 'https://ticketscan.io/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Ticket Scan',
      url: 'https://ticketscan.io',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm mb-4">
              <Link href="/" className="text-purple-200 hover:text-white">Home</Link>
              <span className="mx-2 text-purple-300">/</span>
              <span>Blog</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ticket Buying Tips & Guides
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl">
              Expert advice on finding the best ticket deals. Learn when to buy,
              how to compare prices, and strategies to save money.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {featuredPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
                  >
                    <div className="h-3 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${categoryColors[post.category]}`}>
                          {categoryLabels[post.category]}
                        </span>
                        <span className="text-xs text-gray-500">{post.readTime} min read</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8">All Articles</h2>
            <div className="space-y-6">
              {regularPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${categoryColors[post.category]}`}>
                          {categoryLabels[post.category]}
                        </span>
                        <span className="text-xs text-gray-500">{post.readTime} min read</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
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
                      <span className="inline-flex items-center text-purple-600 font-medium group-hover:text-purple-700">
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
          <section className="mt-16 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-2">Get Ticket Tips in Your Inbox</h2>
            <p className="text-purple-100 mb-6 max-w-xl mx-auto">
              Subscribe to our newsletter for the latest strategies, deals, and tips
              to save money on concerts, sports, and events.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-purple-50 transition-colors"
            >
              Subscribe Now
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
