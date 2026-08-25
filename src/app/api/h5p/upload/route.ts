import { NextRequest, NextResponse } from 'next/server';
import { extractAndSaveH5P } from '@/lib/h5p';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json(
        { error: 'Keine Datei übermittelt' },
        { status: 400 }
      );
    }

    if (!file.name.toLowerCase().endsWith('.h5p')) {
      return NextResponse.json(
        { error: 'Ungültiges Dateiformat. Bitte eine .h5p-Datei hochladen.' },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const record = await extractAndSaveH5P(buffer, file.name);

    return NextResponse.json({
      success: true,
      message: 'H5P-Datei erfolgreich hochgeladen und entpackt',
      data: record,
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : 'Fehler beim Verarbeiten der H5P-Datei',
      },
      { status: 500 }
    );
  }
}
