import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import crypto from 'crypto';

const AUTH_SECRET = process.env.AUTH_SECRET || 'fallback-secret-change-me';
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

  // H5P content rewrites (Hetzner Storage Box)
  if (url.pathname.startsWith('/h5p-content/') || url.pathname.startsWith('/h5p-libraries/')) {
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

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/h5p-content/:path*',
    '/h5p-libraries/:path*',
    '/dashboard/:path*',
    '/mein-fortschritt/:path*',
    '/admin/:path*',
  ],
};
