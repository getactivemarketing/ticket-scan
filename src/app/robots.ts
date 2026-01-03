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
        ],
      },
    ],
    sitemap: 'https://ticketscan.io/sitemap.xml',
  };
}
