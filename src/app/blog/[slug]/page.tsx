import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllBlogPosts, getBlogPostBySlug, getRelatedPosts } from '@/data/blog';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all posts
export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: 'Article Not Found' };
  }

  return {
    title: `${post.title} | Ticket Scan Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author],
      url: `https://ticketscan.io/blog/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

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

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);

  // Article structured data
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ticket Scan',
      url: 'https://ticketscan.io',
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://ticketscan.io/blog/${slug}`,
    },
  };

  // FAQ structured data if content has questions
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.tags.slice(0, 3).map(tag => ({
      '@type': 'Question',
      name: `How to find cheap ${tag}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Compare prices across multiple platforms using Ticket Scan to find the best deals on ${tag}.`,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm mb-6">
              <Link href="/" className="text-purple-200 hover:text-white">Home</Link>
              <span className="mx-2 text-purple-300">/</span>
              <Link href="/blog" className="text-purple-200 hover:text-white">Blog</Link>
              <span className="mx-2 text-purple-300">/</span>
              <span className="text-white">{post.title.slice(0, 30)}...</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs px-3 py-1 rounded-full font-medium ${categoryColors[post.category]}`}>
                {categoryLabels[post.category]}
              </span>
              <span className="text-purple-200 text-sm">{post.readTime} min read</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-purple-100">
              <span>By {post.author}</span>
              <span>|</span>
              <span>{formatDate(post.publishedAt)}</span>
              {post.updatedAt && post.updatedAt !== post.publishedAt && (
                <>
                  <span>|</span>
                  <span>Updated {formatDate(post.updatedAt)}</span>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <article className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-md p-6 md:p-10">
                {/* Article Content */}
                <div
                  className="prose prose-lg max-w-none
                    prose-headings:text-gray-900 prose-headings:font-bold
                    prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                    prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                    prose-p:text-gray-800 prose-p:leading-relaxed prose-p:mb-4
                    prose-ul:my-4 prose-li:text-gray-800 prose-li:my-1
                    prose-strong:text-gray-900 prose-strong:font-semibold
                    prose-table:my-6 prose-th:bg-gray-100 prose-th:p-3 prose-th:text-gray-900 prose-td:p-3 prose-td:border prose-td:text-gray-800
                    prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline"
                  dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
                />

                {/* Tags */}
                <div className="mt-10 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-500 mb-3">TAGS</h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-10 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Ready to Find Cheap Tickets?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Start comparing prices across multiple platforms and track your favorite events.
                  </p>
                  <Link
                    href="/register"
                    className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors"
                  >
                    Create Free Account
                  </Link>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
                  <h3 className="font-bold text-gray-900 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="block group"
                      >
                        <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors mb-1">
                          {related.title}
                        </h4>
                        <p className="text-sm text-gray-500">{related.readTime} min read</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Links */}
              <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/dashboard" className="text-purple-600 hover:text-purple-700">
                      Search Events
                    </Link>
                  </li>
                  <li>
                    <Link href="/compare" className="text-purple-600 hover:text-purple-700">
                      Compare Prices
                    </Link>
                  </li>
                  <li>
                    <Link href="/register" className="text-purple-600 hover:text-purple-700">
                      Create Account
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-2">Get More Tips</h3>
                <p className="text-purple-100 text-sm mb-4">
                  Subscribe for ticket buying tips and exclusive deals.
                </p>
                <Link
                  href="/"
                  className="block bg-white text-purple-600 text-center py-2 rounded-lg font-bold hover:bg-purple-50 transition-colors"
                >
                  Subscribe
                </Link>
              </div>
            </aside>
          </div>

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Articles
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

// Simple markdown-like formatting
function formatContent(content: string): string {
  return content
    // Headers
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Lists
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    // Tables (basic support)
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(c => c.trim());
      if (cells.every(c => c.trim().match(/^-+$/))) {
        return ''; // Skip separator row
      }
      const isHeader = match.includes('---');
      const tag = isHeader ? 'th' : 'td';
      return `<tr>${cells.map(c => `<${tag}>${c.trim()}</${tag}>`).join('')}</tr>`;
    })
    .replace(/(<tr>.*<\/tr>\n?)+/g, '<table class="w-full border-collapse">$&</table>')
    // Paragraphs
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[hultop])(.+)$/gm, '<p>$1</p>')
    // Clean up empty paragraphs
    .replace(/<p><\/p>/g, '')
    .replace(/<p>\s*<\/p>/g, '');
}
