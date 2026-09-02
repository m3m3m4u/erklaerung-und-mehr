import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import crypto from 'crypto';
import { resolveLegacyRedirect } from './lib/redirect-resolver';

const AUTH_SECRET = process.env.AUTH_SECRET || 'eum-secret-k7p2xN8wLqR3mT5vY9uJ4sA6bC1dE0fG';
const SESSION_COOKIE = 'eum_session';

function verifySessionCookie(token: string): boolean {
  try {
    const [b64, sig] = token.split('.');
    if (!b64 || !sig) return false;
    const expectedSig = crypto
      .createHmac('sha256', AUTH_SECRET)
      .update(b64)
      .digest('base64url');
    return sig === expectedSig;
  } catch {
    return false;
  }
}

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();

  // WebDAV / Hetzner Storage Box rewrites (H5P, html, diagramme_en, diagramme_de, er)
  const webdavPrefixes = [
    '/h5p-content/',
    '/h5p-libraries/',
    '/html/',
    '/diagramme_en/',
    '/diagramme_de/',
    '/er/',
  ];
  if (webdavPrefixes.some((prefix) => url.pathname.startsWith(prefix))) {
    const requestHeaders = new Headers(request.headers);
    // Basic Auth Header für Hetzner (u328723-sub9:Kreuzgasse10@)
    requestHeaders.set('Authorization', 'Basic dTMyODcyMy1zdWI5OktyZXV6Z2Fzc2UxMEA=');

    url.hostname = 'u328723-sub9.your-storagebox.de';
    url.port = '443';
    url.protocol = 'https:';

    return NextResponse.rewrite(url, {
      request: { headers: requestHeaders },
    });
  }

  // Protect dashboard, student progress, and admin pages
  const protectedPaths = ['/dashboard', '/mein-fortschritt', '/admin'];
  const isProtected = protectedPaths.some((p) => url.pathname.startsWith(p));

  if (isProtected) {
    const token = request.cookies.get(SESSION_COOKIE)?.value;
    if (!token || !verifySessionCookie(token)) {
      url.pathname = '/';
      return NextResponse.redirect(url);
    }
  }

  // Legacy SQL Database 301 Redirects
  const redirectTarget = resolveLegacyRedirect(url.pathname, url.searchParams);
  if (redirectTarget) {
    if (redirectTarget.startsWith('http://') || redirectTarget.startsWith('https://')) {
      return NextResponse.redirect(new URL(redirectTarget), 301);
    }
    const targetUrl = new URL(redirectTarget, request.url);
    return NextResponse.redirect(targetUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon\\.ico|favicon\\.png|icon\\.png|apple-touch-icon\\.png|images/|api/).*)',
  ],
};
