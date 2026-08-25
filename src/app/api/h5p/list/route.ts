import { NextResponse } from 'next/server';
import { getAllH5PContents } from '@/lib/h5p';

export async function GET() {
  try {
    const contents = await getAllH5PContents();
    return NextResponse.json({ success: true, data: contents });
  } catch (error) {
    console.error('List error:', error);
    return NextResponse.json(
      { error: 'Fehler beim Laden der H5P-Inhalte' },
      { status: 500 }
    );
  }
}
