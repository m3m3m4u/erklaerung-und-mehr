import type { Metadata } from 'next';

export interface GenericExercise {
  id: string;
  title: string;
  folder: string;
}

export interface GenericAttachment {
  title: string;
  filename: string;
  url?: string;
  exerciseId?: string;
}

export interface GenericTopic {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  keyPoints: string[];
  exercises: GenericExercise[];
  worksheetLink?: string;
  attachments?: GenericAttachment[];
}

export interface ResolveCatchAllSuccessTopic<T> {
  type: 'topic';
  topic: T;
  breadcrumbs: Array<{ label: string; href?: string }>;
}

export interface ResolveCatchAllSuccessCategory<T> {
  type: 'category';
  categoryName: string;
  topics: T[];
  breadcrumbs: Array<{ label: string; href?: string }>;
}

export interface ResolveCatchAllNotFound {
  type: 'not-found';
}

export type ResolveCatchAllResult<T> =
  | ResolveCatchAllSuccessTopic<T>
  | ResolveCatchAllSuccessCategory<T>
  | ResolveCatchAllNotFound;

export function toCleanSlug(text: string): string {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function resolveSubjectCatchAll<T extends GenericTopic>(
  slugInput: string | string[],
  topics: Record<string, T>,
  categories: string[],
  subjectTitle: string,
  subjectPath: string
): ResolveCatchAllResult<T> {
  const segments = Array.isArray(slugInput) ? slugInput : [slugInput];
  if (!segments.length) {
    return { type: 'not-found' };
  }

  const rawLastSlug = decodeURIComponent(segments[segments.length - 1]).toLowerCase();
  const lastSlug = toCleanSlug(rawLastSlug);
  const cleanLastSlug = lastSlug.replace(/^(?:das|der|die)-/, '');

  const stopwords = new Set([
    'das', 'der', 'die', 'dem', 'den', 'des', 'ein', 'eine', 'einer', 'eines', 'und',
  ]);

  const stripArticles = (s: string) =>
    s
      .split('-')
      .filter((w) => w && !stopwords.has(w))
      .join('-');

  const strippedLastSlug = stripArticles(lastSlug);

  // 1. Try matching a topic
  let matchedTopic: T | undefined =
    topics[lastSlug] ||
    topics[rawLastSlug] ||
    topics[cleanLastSlug];

  if (!matchedTopic) {
    for (const t of Object.values(topics)) {
      const ts = t.slug.toLowerCase();
      const cleanTs = toCleanSlug(ts);
      const titleSlug = toCleanSlug(t.title);

      if (
        ts === rawLastSlug ||
        ts === lastSlug ||
        cleanTs === lastSlug ||
        cleanTs === cleanLastSlug ||
        titleSlug === lastSlug ||
        titleSlug === cleanLastSlug ||
        stripArticles(cleanTs) === strippedLastSlug
      ) {
        matchedTopic = t;
        break;
      }
    }
  }

  if (matchedTopic) {
    const breadcrumbs: Array<{ label: string; href?: string }> = [
      { label: 'Startseite', href: '/' },
      { label: subjectTitle, href: subjectPath },
    ];

    if (segments.length > 1) {
      breadcrumbs.push({
        label: matchedTopic.category,
        href: `${subjectPath}#${encodeURIComponent(matchedTopic.category)}`,
      });
    }

    breadcrumbs.push({ label: matchedTopic.title });

    return {
      type: 'topic',
      topic: matchedTopic,
      breadcrumbs,
    };
  }

  // 2. Try matching a category
  let matchedCategory: string | undefined;
  for (const cat of categories) {
    const nCat = toCleanSlug(cat);
    if (nCat === lastSlug || nCat === cleanLastSlug) {
      matchedCategory = cat;
      break;
    }
  }

  // Smart fuzzy category match (e.g. 'der-mensch' in 'der-menschliche-koerper', 'tiere' in 'tiere-zoologie')
  if (!matchedCategory) {
    for (const cat of categories) {
      const nCat = toCleanSlug(cat);
      const rootSlug = lastSlug.replace(/^(?:das|der|die)-/, '');
      if (nCat.includes(rootSlug) || rootSlug.includes(nCat)) {
        matchedCategory = cat;
        break;
      }
    }
  }

  if (matchedCategory) {
    const categoryTopics = Object.values(topics).filter(
      (t) => t.category === matchedCategory
    );

    const breadcrumbs: Array<{ label: string; href?: string }> = [
      { label: 'Startseite', href: '/' },
      { label: subjectTitle, href: subjectPath },
      { label: matchedCategory },
    ];

    return {
      type: 'category',
      categoryName: matchedCategory,
      topics: categoryTopics,
      breadcrumbs,
    };
  }

  return { type: 'not-found' };
}

export function buildSubjectMetadata<T extends GenericTopic>(
  result: ResolveCatchAllResult<T>,
  subjectTitle: string,
  subjectPath: string
): Metadata {
  if (result.type === 'topic') {
    const canonical = `${subjectPath}/${result.topic.slug}`;
    const title = `${result.topic.title} – ${subjectTitle}`;
    const description =
      result.topic.shortDesc ||
      `Lerne alles über "${result.topic.title}" im Fach ${subjectTitle} mit anschaulichen Erklärungen und interaktiven H5P-Übungen.`;

    return {
      title,
      description,
      alternates: {
        canonical,
      },
      openGraph: {
        title: `${title} | Erklärung und mehr`,
        description,
        url: canonical,
        siteName: 'Erklärung und mehr',
        locale: 'de_AT',
        type: 'article',
        images: [
          {
            url: '/images/klasse-1.jpg',
            width: 800,
            height: 480,
            alt: result.topic.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${title} | Erklärung und mehr`,
        description,
        images: ['/images/klasse-1.jpg'],
      },
    };
  }

  if (result.type === 'category') {
    const categorySlug = toCleanSlug(result.categoryName);
    const canonical = `${subjectPath}/${categorySlug}`;
    const title = `${result.categoryName} – ${subjectTitle}`;
    const description = `Alle Themen, Erklärungen und interaktiven Übungen zur Kategorie "${result.categoryName}" im Fach ${subjectTitle}.`;

    return {
      title,
      description,
      alternates: {
        canonical,
      },
      openGraph: {
        title: `${title} | Erklärung und mehr`,
        description,
        url: canonical,
        siteName: 'Erklärung und mehr',
        locale: 'de_AT',
        type: 'website',
        images: [
          {
            url: '/images/klasse-1.jpg',
            width: 800,
            height: 480,
            alt: result.categoryName,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${title} | Erklärung und mehr`,
        description,
        images: ['/images/klasse-1.jpg'],
      },
    };
  }

  return {
    title: 'Seite nicht gefunden',
    robots: {
      index: false,
      follow: false,
    },
  };
}
