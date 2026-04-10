import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { marked } from 'marked';
import { getAllBlogPosts, getBlogPostBySlug, getRelatedPosts } from '@/data/blog';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

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

const categoryColors: Record<string, string> = {
  guides: 'bg-blue-100 text-blue-700',
  tips: 'bg-green-100 text-green-700',
  news: 'bg-brand/10 text-brand-dark',
  comparisons: 'bg-amber-100 text-amber-700',
};

const categoryLabels: Record<string, string> = {
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
  const htmlContent = marked.parse(post.content) as string;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Organization', name: post.author },
    publisher: { '@type': 'Organization', name: 'Ticket Scan', url: 'https://ticketscan.io' },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://ticketscan.io/blog/${slug}` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <div className="min-h-screen bg-white">
        {/* Header — solid navy */}
        <div className="bg-navy text-white py-12 pt-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm mb-6">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              <span className="mx-2 text-gray-600">/</span>
              <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
              <span className="mx-2 text-gray-600">/</span>
              <span className="text-white">{post.title.slice(0, 30)}...</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs px-3 py-1 rounded-full font-medium ${categoryColors[post.category]}`}>
                {categoryLabels[post.category]}
              </span>
              <span className="text-gray-400 text-sm">{post.readTime} min read</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold font-heading tracking-tight mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-gray-400 text-sm">
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
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Content — no card wrapper */}
            <article className="lg:col-span-2">
              <div
                className="prose prose-lg max-w-none
                  prose-headings:text-navy prose-headings:font-bold prose-headings:tracking-tight
                  prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-5
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                  prose-ul:my-6 prose-li:text-gray-700 prose-li:my-2
                  prose-strong:text-navy prose-strong:font-semibold
                  prose-table:my-6 prose-th:bg-gray-50 prose-th:p-3 prose-th:text-navy prose-td:p-3 prose-td:border prose-td:text-gray-700
                  prose-a:text-brand prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />

              {/* Tags */}
              <div className="mt-12 pt-6 border-t border-gray-200">
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-gray-50 border border-gray-200 text-gray-500 px-3 py-1 rounded-full text-xs">{tag}</span>
                  ))}
                </div>
              </div>

              {/* CTA — dark navy */}
              <div className="mt-12 bg-navy rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold font-heading text-white mb-2 tracking-tight">Ready to Find Cheap Tickets?</h3>
                <p className="text-white/50 text-sm mb-5">Start comparing prices across multiple platforms and track your favorite events.</p>
                <Link href="/register" className="inline-block bg-gradient-to-r from-brand to-teal text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity">Create Free Account</Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {relatedPosts.length > 0 && (
                <div className="border border-gray-200 rounded-xl p-5 mb-5">
                  <h3 className="font-bold font-heading text-navy text-sm mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((related) => (
                      <Link key={related.slug} href={`/blog/${related.slug}`} className="block group">
                        <h4 className="font-medium text-navy text-sm group-hover:text-brand transition-colors mb-1">{related.title}</h4>
                        <p className="text-xs text-gray-400">{related.readTime} min read</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="border border-gray-200 rounded-xl p-5 mb-5">
                <h3 className="font-bold font-heading text-navy text-sm mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/dashboard" className="text-brand text-sm hover:text-brand-dark">Search Events</Link></li>
                  <li><Link href="/compare" className="text-brand text-sm hover:text-brand-dark">Compare Prices</Link></li>
                  <li><Link href="/register" className="text-brand text-sm hover:text-brand-dark">Create Account</Link></li>
                </ul>
              </div>

              <div className="bg-navy rounded-xl p-5 text-white">
                <h3 className="font-bold font-heading text-sm mb-2">Get More Tips</h3>
                <p className="text-white/50 text-xs mb-4">Subscribe for ticket buying tips and exclusive deals.</p>
                <Link href="/" className="block bg-white text-navy text-center py-2 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors">Subscribe</Link>
              </div>
            </aside>
          </div>

          <div className="mt-12 text-center">
            <Link href="/blog" className="inline-flex items-center text-brand font-medium text-sm hover:text-brand-dark">
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
