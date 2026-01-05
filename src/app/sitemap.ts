import { MetadataRoute } from 'next';
import { venues } from '@/data/venues';
import { cities } from '@/data/cities';
import { categories } from '@/data/categories';
import { getAllBlogPosts } from '@/data/blog';

const BASE_URL = 'https://ticketscan.io';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
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
      url: `${BASE_URL}/dashboard`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/compare`,
      lastModified,
      changeFrequency: 'daily',
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
      url: `${BASE_URL}/login`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/register`,
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

  return [...staticPages, ...blogPages, ...venuePages, ...cityPages, ...categoryPages];
}
