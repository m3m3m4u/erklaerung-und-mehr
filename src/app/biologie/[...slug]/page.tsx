import type { Metadata } from 'next';
import { biologieTopics, biologieCategories } from '@/lib/biologie-data';
import { resolveSubjectCatchAll, buildSubjectMetadata } from '@/lib/catchall-resolver';
import SubjectCatchAllView from '@/components/SubjectCatchAllView';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    biologieTopics,
    biologieCategories,
    'Biologie',
    '/biologie'
  );

  return buildSubjectMetadata(result, 'Biologie', '/biologie');
}

export default async function BiologieCatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    biologieTopics,
    biologieCategories,
    'Biologie',
    '/biologie'
  );

  return (
    <SubjectCatchAllView
      result={result}
      subjectTitle="Biologie"
      subjectPath="/biologie"
      summaryTitle="Wichtige Grundlagen, Gesetze und Merksätze"
    />
  );
}
