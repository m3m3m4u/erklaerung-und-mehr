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
  if (
    normPath.startsWith('/produkt') ||
    normPath.startsWith('/shop') ||
    normPath.startsWith('/warenkorb') ||
    normPath.startsWith('/kasse')
  ) {
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

  // 7. Kopernikus-Wortkiste & Enzyklopädie (/kopernikuswortkiste/..., /encyclopedia/..., /enzyklopaedie/...)
  if (
    normPath.startsWith('/kopernikuswortkiste') ||
    normPath.startsWith('/encyclopedia') ||
    normPath.startsWith('/enzyklopaedie')
  ) {
    const sub = normPath.replace(/^\/(?:kopernikuswortkiste|encyclopedia|enzyklopaedie)\/?/, '').trim();
    if (!sub) {
      return '/deutsch';
    }
    const parts = sub.split('/').filter(Boolean);
    const lastSlug = parts[parts.length - 1];
    if (staticRedirects[`/${lastSlug}`]) {
      return staticRedirects[`/${lastSlug}`];
    }
    if (categoryMap[lastSlug]) {
      return categoryMap[lastSlug];
    }
    return '/deutsch';
  }

  // 8. Medien und Informatik (/medien-und-informatik/...)
  if (normPath.startsWith('/medien-und-informatik')) {
    const sub = normPath.replace(/^\/medien-und-informatik\/?/, '').trim();
    if (!sub) {
      return '/informatik';
    }
    const parts = sub.split('/').filter(Boolean);
    const lastSlug = parts[parts.length - 1];
    if (staticRedirects[`/${lastSlug}`]) {
      return staticRedirects[`/${lastSlug}`];
    }
    if (categoryMap[lastSlug]) {
      return categoryMap[lastSlug];
    }
    return `/informatik/${lastSlug}`;
  }

  // 9. Escape Rooms (/escape-rooms/...)
  if (normPath.startsWith('/escape-rooms')) {
    const sub = normPath.replace(/^\/escape-rooms\/?/, '').trim();
    if (!sub) {
      return '/';
    }
    const parts = sub.split('/').filter(Boolean);
    const lastSlug = parts[parts.length - 1];
    if (lastSlug.includes('geschichte')) return '/geschichte';
    if (lastSlug.includes('geographie')) return '/geographie';
    if (lastSlug.includes('mathematik') || lastSlug.includes('mathe')) return '/mathematik/escape-room-mathematik';
    if (lastSlug.includes('physik')) return '/physik/escape-room-physik';
    if (lastSlug.includes('chemie')) return '/chemie/escape-room-chemie';
    if (lastSlug.includes('informatik')) return '/informatik/escape-room-informatik';
    if (lastSlug.includes('musik')) return '/musik';
    return '/';
  }

  // 10. Geschichte Alt-Verzeichnisse (/geschichte-neu/..., /geschichte-1789-bis-1918/..., /geschichte-3/...)
  if (
    normPath.startsWith('/geschichte-neu') ||
    normPath.startsWith('/geschichte-1789-bis-1918') ||
    normPath.startsWith('/geschichte-3')
  ) {
    const sub = normPath.replace(/^\/(?:geschichte-neu|geschichte-1789-bis-1918|geschichte-3)\/?/, '').trim();
    if (sub) {
      const parts = sub.split('/').filter(Boolean);
      const lastSlug = parts[parts.length - 1];
      if (staticRedirects[`/${lastSlug}`]) {
        return staticRedirects[`/${lastSlug}`];
      }
      if (categoryMap[lastSlug]) {
        return categoryMap[lastSlug];
      }
    }
    return '/geschichte';
  }

  // 11. Ethik Alt-Verzeichnis (/ethik-2/...)
  if (normPath.startsWith('/ethik-2')) {
    const sub = normPath.replace(/^\/ethik-2\/?/, '').trim();
    if (sub) {
      const parts = sub.split('/').filter(Boolean);
      const lastSlug = parts[parts.length - 1];
      if (staticRedirects[`/${lastSlug}`]) {
        return staticRedirects[`/${lastSlug}`];
      }
      if (categoryMap[lastSlug]) {
        return categoryMap[lastSlug];
      }
      return `/ethik/${lastSlug}`;
    }
    return '/ethik';
  }

  // 12. Kunst Alt-Pfade (/kunst/...)
  if (normPath.startsWith('/kunst/')) {
    const sub = normPath.replace(/^\/kunst\/?/, '').trim();
    return `/kunst-und-kuenstler/${sub}`;
  }

  // 13. Verzeichnis-Präfixe aus der alten WordPress-Installation
  const legacyDirMap: Record<string, string> = {
    '/themen': '/',
    '/informationen-fuer-lehrpersonen': '/',
    '/tools-fuer-lehrpersonen': '/',
    '/kontaktiere-uns': '/impressum',
    '/digital-kreativ-von-thomas-felzmann': 'https://thomasfelzmann.at/',
    '/jr': '/musik',
    '/fl': '/musik/epochen-der-musikgeschichte',
    '/die-stimme': '/musik',
    '/musik-memory': '/musik',
    '/schlagzeug-playalongs': '/musik',
    '/drum-playalongs': '/musik',
    '/aktuelles': '/',
    '/kriege-und-revolutionen-uebersicht': '/geschichte',
    '/werde-geschichte-nerd': '/geschichte',
    '/timeline': '/geschichte',
    '/aktuelle-themen-israel': '/geschichte',
    '/das-roemische-reich-2': '/geschichte/das-roemische-reich-republik-und-kaiserzeit',
    '/baustoffe': '/technik',
    '/kraftwerke': '/physik/kraftwerke',
    '/biochemie': '/chemie/biochemie-und-umwelt',
    '/atomphysik': '/physik/atomphysik',
    '/elektromagnetismus-2': '/physik/elektromagnetismus',
    '/dynamik-impuls': '/physik/dynamik-impuls',
    '/optik-2': '/physik/optik',
    '/weltraum': '/physik/astronomie-und-raumfahrt',
    '/grundlegende-chemische-reaktionen-und-prozesse': '/chemie/chemische-reaktionen',
    '/organische-chemie-und-kohlenwasserstoffe': '/chemie/organische-chemie',
    '/organische-verbindungen-und-ihre-anwendungen': '/chemie/organische-chemie',
    '/umweltchemie-und-abfallmanagement': '/chemie/biochemie-und-umwelt',
    '/wasser-und-wasserchemie': '/chemie/wasser-und-wasserchemie',
    '/literarischer-adventskalender': '/deutsch',
    '/german-text-analyzer': '/deutsch',
    '/luft-und-luftverschmutzung': '/klima-und-umwelt',
    '/landkarte-europa-staaten': '/geographie/staaten-europas',
    '/startseite': '/',
    '/schoen-dass-du-da-bist': '/',
    '/erklaerung-und-mehr-herzlich-willkommen': '/',
    '/jl-education': '/',
    '/kahoot': '/',
    '/snake-quiz': '/',
    '/qr-codes': '/',
    '/newsletter-anmeldung': '/',
    '/newsletter-2': '/',
    '/dezimalzahlen': '/mathematik/dezimalzahlen',
    '/symmetrie': '/mathematik/symmetrie',
    '/vorzeichen-2': '/mathematik/negative-zahlen',
    '/ethische-grundlagen': '/ethik/grundlagen-und-theorien-der-ethik',
    '/kunstepochen': '/kunst-und-kuenstler',
    '/beruehmte-kunstwerke': '/kunst-und-kuenstler',
    '/kreativitaet-und-fantasie': '/kunst-und-kuenstler',
    '/arbeitsheft-digitale-grundbildung': '/informatik/arbeitsheft-digitale-grundbildung',
    '/martina-die-kreative-code-kuenstlerin': '/informatik',
    '/excel': '/informatik',
    '/spanisch': '/',
    '/franzoesisch': '/',
    '/strateachy': '/',
  };

  for (const [dirKey, target] of Object.entries(legacyDirMap)) {
    if (normPath === dirKey || normPath.startsWith(dirKey + '/')) {
      const sub = normPath.slice(dirKey.length).replace(/^\/+/, '').trim();
      if (sub) {
        const parts = sub.split('/').filter(Boolean);
        const lastSlug = parts[parts.length - 1];
        if (staticRedirects[`/${lastSlug}`]) {
          return staticRedirects[`/${lastSlug}`];
        }
        if (categoryMap[lastSlug]) {
          return categoryMap[lastSlug];
        }
      }
      return target;
    }
  }

  // 14. Author, Portfolio, Book-Category & Elementor Wildcards
  if (
    normPath.startsWith('/author/') ||
    normPath.startsWith('/portfolio') ||
    normPath.startsWith('/book-category/') ||
    normPath.startsWith('/elementor-')
  ) {
    return '/';
  }

  // 15. Feed & RSS
  if (normPath.endsWith('/feed') || normPath.endsWith('/rss') || normPath === '/feed' || normPath === '/rss') {
    return '/';
  }

  // 16. WordPress login / admin
  if (normPath === '/wp-login.php' || normPath === '/wp-admin' || normPath === '/wp-login') {
    return '/admin';
  }

  // 17. Mehrstufige alte Pfade unter bestehenden Fächern (/biologie/der-mensch/das-herz-und-der-blutkreislauf)
  const knownSubjects = new Set([
    'biologie',
    'chemie',
    'deutsch',
    'die-freiwillige-fahrradpruefung',
    'englisch',
    'ernaehrung',
    'ethik',
    'geographie',
    'geschichte',
    'hauswirtschaft',
    'informatik',
    'kischulgenie',
    'ki-schulgenie',
    'klima-und-umwelt',
    'kunst-und-kuenstler',
    'lehrberufe',
    'mathematik',
    'medien',
    'musik',
    'philosophie',
    'physik',
    'politik-und-gesellschaft',
    'psychologie',
    'religion',
    'soziales-und-emotionales-lernen',
    'sustainable-development-goals',
    'technik',
    'wichtige-persoenlichkeiten-der-geschichte',
    'wirtschaft',
    'beruehmte-persoenlichkeiten',
  ]);

  const pathSegments = normPath.split('/').filter(Boolean);
  if (pathSegments.length > 2 && knownSubjects.has(pathSegments[0])) {
    const subject = pathSegments[0];
    const lastSlug = pathSegments[pathSegments.length - 1];

    if (staticRedirects[`/${lastSlug}`]) {
      return staticRedirects[`/${lastSlug}`];
    }
    if (categoryMap[lastSlug]) {
      return categoryMap[lastSlug];
    }
    return `/${subject}`;
  }

  return null;
}
