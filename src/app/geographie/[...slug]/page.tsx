import type { Metadata } from 'next';
import { geographieTopics, geographieCategories } from '@/lib/geographie-data';
import { resolveSubjectCatchAll, buildSubjectMetadata } from '@/lib/catchall-resolver';
import SubjectCatchAllView from '@/components/SubjectCatchAllView';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    geographieTopics,
    geographieCategories,
    'Geographie',
    '/geographie'
  );

  return buildSubjectMetadata(result, 'Geographie', '/geographie');
}

export default async function GeographieCatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    geographieTopics,
    geographieCategories,
    'Geographie',
    '/geographie'
  );

  return (
    <SubjectCatchAllView
      result={result}
      subjectTitle="Geographie"
      subjectPath="/geographie"
      summaryTitle="Wichtige Grundlagen, Gesetze und Merksätze"
    />
  );
}
