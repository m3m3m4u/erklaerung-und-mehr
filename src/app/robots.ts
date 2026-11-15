import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://erklaerung-und-mehr.org';

  const disallowed = [
    '/admin',
    '/admin/',
    '/dashboard',
    '/dashboard/',
    '/mein-fortschritt',
    '/mein-fortschritt/',
    '/forgot-password',
    '/reset-password',
    '/api/',
  ];

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: disallowed,
      },
      // AI Crawlers & Generative Engine Optimization (GEO)
      {
        userAgent: ['GPTBot', 'OAI-SearchBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'Applebot-Extended'],
        allow: '/',
        disallow: disallowed,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
