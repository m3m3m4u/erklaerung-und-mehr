import type { Metadata } from 'next';
import { sportTopics, sportCategories } from '@/lib/sport-data';
import { resolveSubjectCatchAll, buildSubjectMetadata } from '@/lib/catchall-resolver';
import SubjectCatchAllView from '@/components/SubjectCatchAllView';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    sportTopics,
    sportCategories,
    'Sport & Bewegung',
    '/sport'
  );

  return buildSubjectMetadata(result, 'Sport & Bewegung', '/sport');
}

export default async function SportCatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    sportTopics,
    sportCategories,
    'Sport & Bewegung',
    '/sport'
  );

  return (
    <SubjectCatchAllView
      result={result}
      subjectTitle="Sport & Bewegung"
      subjectPath="/sport"
      summaryTitle="Wichtige Grundlagen, Regeln und Merksätze"
    />
  );
}
