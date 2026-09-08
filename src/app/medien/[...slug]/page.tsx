import type { Metadata } from 'next';
import { medienTopics, medienCategories } from '@/lib/medien-data';
import { resolveSubjectCatchAll, buildSubjectMetadata } from '@/lib/catchall-resolver';
import SubjectCatchAllView from '@/components/SubjectCatchAllView';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    medienTopics,
    medienCategories,
    'Medien',
    '/medien'
  );

  return buildSubjectMetadata(result, 'Medien', '/medien');
}

export default async function MedienCatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    medienTopics,
    medienCategories,
    'Medien',
    '/medien'
  );

  return (
    <SubjectCatchAllView
      result={result}
      subjectTitle="Medien"
      subjectPath="/medien"
      summaryTitle="Wichtige Medienkompetenzen, Hintergründe und Leitlinien"
    />
  );
}
