import { MetadataRoute } from 'next';
import { venues } from '@/data/venues';
import { cities } from '@/data/cities';
import { categories } from '@/data/categories';
import { getAllBlogPosts } from '@/data/blog';
import { worldCupVenues } from '@/data/worldcup';

const BASE_URL = 'https://www.ticketscan.io';

// Stable last-modified for programmatic pages (venues, cities, categories, WC).
// These data files have no per-entity date, so we use a single content-revision
// stamp instead of `new Date()` — otherwise every URL reports "today" on each
// crawl, which trains search engines to ignore our <lastmod>. Bump this when the
// venue/city/category/World Cup data sets are meaningfully revised.
// (Blog posts use their own real publishedAt/updatedAt dates below.)
const CONTENT_LAST_MODIFIED = new Date('2026-07-20');

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = CONTENT_LAST_MODIFIED;
  const blogPosts = getAllBlogPosts();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${BASE_URL}/venues`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/tickets`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/how-it-works`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ];

  // Blog post pages
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Venue pages
  const venuePages: MetadataRoute.Sitemap = Object.keys(venues).map((slug) => ({
    url: `${BASE_URL}/venues/${slug}`,
    lastModified,
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  // City pages
  const cityPages: MetadataRoute.Sitemap = Object.keys(cities).map((slug) => ({
    url: `${BASE_URL}/tickets/${slug}`,
    lastModified,
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }));

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = Object.keys(categories).map((slug) => ({
    url: `${BASE_URL}/tickets/${slug}`,
    lastModified,
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }));

  // World Cup 2026 pages
  const worldCupMainPage: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/world-cup-2026`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  const worldCupVenuePages: MetadataRoute.Sitemap = Object.keys(worldCupVenues).map((slug) => ({
    url: `${BASE_URL}/world-cup-2026/${slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...blogPages, ...venuePages, ...cityPages, ...categoryPages, ...worldCupMainPage, ...worldCupVenuePages];
}
