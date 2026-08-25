import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  
  // Wenn Bilder, Skripte oder H5P-Dateien angefragt werden
  if (url.pathname.startsWith('/h5p-content/') || url.pathname.startsWith('/h5p-libraries/')) {
    const requestHeaders = new Headers(request.headers);
    // Basic Auth Header für Hetzner setzen (u328723-sub9:Kreuzgasse10@)
    requestHeaders.set('Authorization', 'Basic dTMyODcyMy1zdWI5OktyZXV6Z2Fzc2UxMEA=');
    
    url.hostname = 'u328723-sub9.your-storagebox.de';
    url.port = '443';
    url.protocol = 'https:';

    return NextResponse.rewrite(url, {
      request: {
        headers: requestHeaders,
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  // Nur diese beiden Pfade vom Middleware verarbeiten lassen
  matcher: ['/h5p-content/:path*', '/h5p-libraries/:path*'],
};
