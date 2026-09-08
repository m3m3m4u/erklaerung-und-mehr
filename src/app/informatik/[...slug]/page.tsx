import type { Metadata } from 'next';
import { informatikTopics, informatikCategories } from '@/lib/informatik-data';
import { resolveSubjectCatchAll, buildSubjectMetadata } from '@/lib/catchall-resolver';
import SubjectCatchAllView from '@/components/SubjectCatchAllView';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    informatikTopics,
    informatikCategories,
    'Informatik',
    '/informatik'
  );

  return buildSubjectMetadata(result, 'Informatik', '/informatik');
}

export default async function InformatikCatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    informatikTopics,
    informatikCategories,
    'Informatik',
    '/informatik'
  );

  return (
    <SubjectCatchAllView
      result={result}
      subjectTitle="Informatik"
      subjectPath="/informatik"
      summaryTitle="Wichtige Grundlagen und Merksätze"
    />
  );
}
