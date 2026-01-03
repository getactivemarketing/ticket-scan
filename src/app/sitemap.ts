import { MetadataRoute } from 'next';
import { venues } from '@/data/venues';

const BASE_URL = 'https://ticketscan.io';

// Cities we support
const cities = [
  'orlando',
  'miami',
  'new-york',
  'los-angeles',
  'chicago',
];

// Event categories
const categories = [
  'nba',
  'nhl',
  'concerts',
  'theater',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

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
  ];

  // Venue pages
  const venuePages: MetadataRoute.Sitemap = Object.keys(venues).map((slug) => ({
    url: `${BASE_URL}/venues/${slug}`,
    lastModified,
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  // City pages
  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/tickets/${city}`,
    lastModified,
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }));

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${BASE_URL}/tickets/${category}`,
    lastModified,
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...venuePages, ...cityPages, ...categoryPages];
}
