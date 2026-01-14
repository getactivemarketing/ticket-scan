import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/watchlist',
          '/event/',
          '/api/',
          '/admin',
        ],
      },
    ],
    sitemap: 'https://ticketscan.io/sitemap.xml',
  };
}
