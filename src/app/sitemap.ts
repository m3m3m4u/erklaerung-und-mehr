import type { MetadataRoute } from 'next';
import { allSubjectDatasets } from '@/lib/exercise-catalog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://erklaerung-und-mehr.org';
  const lastModified = new Date();

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/kischulgenie`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];

  const seenUrls = new Set<string>(routes.map((r) => r.url));

  // Subject overview pages and their topic pages
  for (const dataset of allSubjectDatasets) {
    const subjectUrl = `${baseUrl}/${dataset.subjectSlug}`;
    if (!seenUrls.has(subjectUrl)) {
      seenUrls.add(subjectUrl);
      routes.push({
        url: subjectUrl,
        lastModified,
        changeFrequency: 'weekly',
        priority: 0.9,
      });
    }

    for (const [topicKey, topic] of Object.entries(dataset.topics)) {
      const slug = topic.slug || topicKey;
      if (!slug) continue;
      const topicUrl = `${baseUrl}/${dataset.subjectSlug}/${slug}`;
      if (!seenUrls.has(topicUrl)) {
        seenUrls.add(topicUrl);
        routes.push({
          url: topicUrl,
          lastModified,
          changeFrequency: 'monthly',
          priority: 0.8,
        });
      }
    }
  }

  return routes;
}
