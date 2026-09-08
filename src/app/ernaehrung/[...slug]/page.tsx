import type { Metadata } from 'next';
import { ernaehrungTopics, ernaehrungCategories } from '@/lib/ernaehrung-data';
import { resolveSubjectCatchAll, buildSubjectMetadata } from '@/lib/catchall-resolver';
import SubjectCatchAllView from '@/components/SubjectCatchAllView';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    ernaehrungTopics,
    ernaehrungCategories,
    'Ernährung',
    '/ernaehrung'
  );

  return buildSubjectMetadata(result, 'Ernährung', '/ernaehrung');
}

export default async function ErnaehrungCatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    ernaehrungTopics,
    ernaehrungCategories,
    'Ernährung',
    '/ernaehrung'
  );

  return (
    <SubjectCatchAllView
      result={result}
      subjectTitle="Ernährung"
      subjectPath="/ernaehrung"
      summaryTitle="Wichtige Grundlagen, Regeln und Fakten"
    />
  );
}
