import type { Metadata } from 'next';
import { sozialesLernenTopics, sozialesLernenCategories } from '@/lib/soziales-lernen-data';
import { resolveSubjectCatchAll, buildSubjectMetadata } from '@/lib/catchall-resolver';
import SubjectCatchAllView from '@/components/SubjectCatchAllView';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    sozialesLernenTopics,
    sozialesLernenCategories,
    'Soziales & emotionales Lernen',
    '/soziales-und-emotionales-lernen'
  );

  return buildSubjectMetadata(result, 'Soziales & emotionales Lernen', '/soziales-und-emotionales-lernen');
}

export default async function SozialesUndEmotionalesLernenCatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    sozialesLernenTopics,
    sozialesLernenCategories,
    'Soziales & emotionales Lernen',
    '/soziales-und-emotionales-lernen'
  );

  return (
    <SubjectCatchAllView
      result={result}
      subjectTitle="Soziales & emotionales Lernen"
      subjectPath="/soziales-und-emotionales-lernen"
      summaryTitle="Wichtige Strategien, Tipps und Merksätze"
    />
  );
}
