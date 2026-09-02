import legacyData from './legacy-redirects.json';

interface LegacyRedirectsConfig {
  static_redirects: Record<string, string>;
  post_id_redirects: Record<string, string>;
  category_map: Record<string, string>;
}

const config: LegacyRedirectsConfig = legacyData as LegacyRedirectsConfig;

const staticRedirects: Record<string, string> = config.static_redirects || {};
const postIdRedirects: Record<string, string> = config.post_id_redirects || {};
const categoryMap: Record<string, string> = config.category_map || {};

/**
 * Normalizes a URL path by ensuring leading slash, removing trailing slash,
 * and decoding URI components.
 */
export function normalizePath(rawPath: string): string {
  if (!rawPath) return '/';
  let p = rawPath.trim();
  try {
    p = decodeURIComponent(p);
  } catch {
    // Keep raw if decoding fails
  }
  if (!p.startsWith('/')) {
    p = '/' + p;
  }
  if (p.length > 1 && p.endsWith('/')) {
    p = p.slice(0, -1);
  }
  return p.toLowerCase();
}

/**
 * Resolves an incoming pathname and query parameters to a 301 redirection target.
 * Returns null if no redirection is needed.
 */
export function resolveLegacyRedirect(
  pathname: string,
  searchParams?: URLSearchParams | Record<string, string | string[] | undefined>
): string | null {
  const normPath = normalizePath(pathname);

  // Skip favicon files, common static web assets and images
  if (
    normPath === '/favicon.ico' ||
    normPath === '/favicon.png' ||
    normPath === '/icon.png' ||
    normPath === '/apple-touch-icon.png' ||
    normPath === '/robots.txt' ||
    normPath === '/sitemap.xml' ||
    normPath.startsWith('/images/') ||
    normPath.startsWith('/bilder/')
  ) {
    return null;
  }

  // 1. Check Query Parameters (?p=123, ?page_id=123, ?cat=123)
  if (searchParams) {
    let pId: string | null = null;
    let pageId: string | null = null;
    let catId: string | null = null;

    if (searchParams instanceof URLSearchParams) {
      pId = searchParams.get('p');
      pageId = searchParams.get('page_id');
      catId = searchParams.get('cat');
    } else {
      const pVal = searchParams.p;
      pId = Array.isArray(pVal) ? pVal[0] : pVal || null;
      const pageVal = searchParams.page_id;
      pageId = Array.isArray(pageVal) ? pageVal[0] : pageVal || null;
      const catVal = searchParams.cat;
      catId = Array.isArray(catVal) ? catVal[0] : catVal || null;
    }

    const targetId = pId || pageId;
    if (targetId && postIdRedirects[targetId]) {
      const target = postIdRedirects[targetId];
      if (normalizePath(target) !== normPath) {
        return target;
      }
    }

    if (catId && categoryMap[catId]) {
      return categoryMap[catId];
    }
  }

  // 2. Exact match in static redirects
  const directMatch = staticRedirects[normPath];
  if (directMatch) {
    if (directMatch.startsWith('http://') || directMatch.startsWith('https://')) {
      return directMatch;
    }
    const cleanTgt = normalizePath(directMatch);
    if (cleanTgt !== normPath) {
      return directMatch;
    }
  }

  // 3. Product / Shop wildcard
  if (normPath.startsWith('/produkt') || normPath.startsWith('/shop') || normPath.startsWith('/warenkorb') || normPath.startsWith('/kasse')) {
    return 'https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org';
  }

  // 4. Category URLs (/category/...)
  if (normPath.startsWith('/category/')) {
    const sub = normPath.replace('/category/', '').trim();
    const parts = sub.split('/').filter(Boolean);
    for (const part of parts.reverse()) {
      if (categoryMap[part]) {
        return categoryMap[part];
      }
    }
    return '/';
  }

  // 5. Tag URLs (/tag/...)
  if (normPath.startsWith('/tag/')) {
    const sub = normPath.replace('/tag/', '').trim();
    const parts = sub.split('/').filter(Boolean);
    for (const part of parts.reverse()) {
      if (categoryMap[part]) {
        return categoryMap[part];
      }
    }
    return '/';
  }

  // 6. LearnPress courses & lessons (/courses/..., /kurs/..., /lp_course/..., /lp_lesson/..., /lp_quiz/...)
  if (
    normPath.startsWith('/courses/') ||
    normPath.startsWith('/kurs/') ||
    normPath.startsWith('/lp_course/') ||
    normPath.startsWith('/lp_lesson/') ||
    normPath.startsWith('/lp_quiz/')
  ) {
    const parts = normPath.split('/').filter(Boolean);
    const lastSlug = parts[parts.length - 1];
    if (staticRedirects[`/${lastSlug}`]) {
      return staticRedirects[`/${lastSlug}`];
    }
    if (categoryMap[lastSlug]) {
      return categoryMap[lastSlug];
    }
    return '/';
  }

  // 7. Encyclopedia URLs (/encyclopedia/...)
  if (normPath.startsWith('/encyclopedia/')) {
    const sub = normPath.replace('/encyclopedia/', '').trim();
    const cleanSub = normalizePath(`/${sub}`);
    if (staticRedirects[cleanSub]) {
      return staticRedirects[cleanSub];
    }
    return '/';
  }

  // 8. Feed & RSS
  if (normPath.endsWith('/feed') || normPath.endsWith('/rss') || normPath === '/feed' || normPath === '/rss') {
    return '/';
  }

  // 9. WordPress login / admin
  if (normPath === '/wp-login.php' || normPath === '/wp-admin' || normPath === '/wp-login') {
    return '/admin';
  }

  return null;
}
