import type { Metadata } from 'next';
import { chemieTopics, chemieCategories } from '@/lib/chemie-data';
import { resolveSubjectCatchAll, buildSubjectMetadata } from '@/lib/catchall-resolver';
import SubjectCatchAllView from '@/components/SubjectCatchAllView';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    chemieTopics,
    chemieCategories,
    'Chemie',
    '/chemie'
  );

  return buildSubjectMetadata(result, 'Chemie', '/chemie');
}

export default async function ChemieCatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    chemieTopics,
    chemieCategories,
    'Chemie',
    '/chemie'
  );

  return (
    <SubjectCatchAllView
      result={result}
      subjectTitle="Chemie"
      subjectPath="/chemie"
      summaryTitle="Wichtige Grundlagen, Gesetze und Merksätze"
    />
  );
}
