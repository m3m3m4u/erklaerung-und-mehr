import type { Metadata } from 'next';
import { musikTopics, musikCategories } from '@/lib/musik-data';
import { resolveSubjectCatchAll, buildSubjectMetadata } from '@/lib/catchall-resolver';
import SubjectCatchAllView from '@/components/SubjectCatchAllView';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    musikTopics,
    musikCategories,
    'Musik',
    '/musik'
  );

  return buildSubjectMetadata(result, 'Musik', '/musik');
}

export default async function MusikCatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    musikTopics,
    musikCategories,
    'Musik',
    '/musik'
  );

  return (
    <SubjectCatchAllView
      result={result}
      subjectTitle="Musik"
      subjectPath="/musik"
      summaryTitle="Wichtige Merkmale, Epochen-Wissen und Grundlagen"
    />
  );
}
