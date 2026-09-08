import type { Metadata } from 'next';
import { religionTopics, religionCategories } from '@/lib/religion-data';
import { resolveSubjectCatchAll, buildSubjectMetadata } from '@/lib/catchall-resolver';
import SubjectCatchAllView from '@/components/SubjectCatchAllView';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    religionTopics,
    religionCategories,
    'Religion',
    '/religion'
  );

  return buildSubjectMetadata(result, 'Religion', '/religion');
}

export default async function ReligionCatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    religionTopics,
    religionCategories,
    'Religion',
    '/religion'
  );

  return (
    <SubjectCatchAllView
      result={result}
      subjectTitle="Religion"
      subjectPath="/religion"
      summaryTitle="Wichtige Grundlagen, Fakten und Traditionen"
    />
  );
}
