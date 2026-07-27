import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/watchlist',
          '/favorites',
          '/event/',
          '/api/',
          '/admin',
          '/login',
          '/register',
        ],
      },
    ],
    sitemap: 'https://www.ticketscan.io/sitemap.xml',
  };
}
