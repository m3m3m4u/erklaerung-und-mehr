import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path: pathSegments } = await params;
  const filename = pathSegments[pathSegments.length - 1];

  if (!filename) {
    return new NextResponse('Datei nicht gefunden', { status: 404 });
  }

  // 1. Suche in public/[filename]
  const publicFilePath = path.join(process.cwd(), 'public', filename);
  if (fs.existsSync(publicFilePath)) {
    const fileBuffer = fs.readFileSync(publicFilePath);
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': filename.endsWith('.docx')
          ? 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
          : filename.endsWith('.doc')
          ? 'application/msword'
          : filename.endsWith('.pdf')
          ? 'application/pdf'
          : 'application/octet-stream',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    });
  }

  // 2. Suche in bilder/[filename]
  const bilderFilePath = path.join(process.cwd(), 'bilder', filename);
  if (fs.existsSync(bilderFilePath)) {
    const fileBuffer = fs.readFileSync(bilderFilePath);
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    });
  }

  return new NextResponse('Datei nicht gefunden', { status: 404 });
}
