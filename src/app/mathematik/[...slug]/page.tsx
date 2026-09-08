import type { Metadata } from 'next';
import { mathTopics, mathCategories } from '@/lib/math-data';
import { resolveSubjectCatchAll, buildSubjectMetadata } from '@/lib/catchall-resolver';
import SubjectCatchAllView from '@/components/SubjectCatchAllView';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    mathTopics,
    mathCategories,
    'Mathematik',
    '/mathematik'
  );

  return buildSubjectMetadata(result, 'Mathematik', '/mathematik');
}

export default async function MathematikCatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    mathTopics,
    mathCategories,
    'Mathematik',
    '/mathematik'
  );

  return (
    <SubjectCatchAllView
      result={result}
      subjectTitle="Mathematik"
      subjectPath="/mathematik"
      summaryTitle="Wichtige Grundlagen und Regeln"
    />
  );
}
