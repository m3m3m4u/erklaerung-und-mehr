import type { Metadata } from 'next';
import { physikTopics, physikCategories } from '@/lib/physik-data';
import { resolveSubjectCatchAll, buildSubjectMetadata } from '@/lib/catchall-resolver';
import SubjectCatchAllView from '@/components/SubjectCatchAllView';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    physikTopics,
    physikCategories,
    'Physik',
    '/physik'
  );

  return buildSubjectMetadata(result, 'Physik', '/physik');
}

export default async function PhysikCatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    physikTopics,
    physikCategories,
    'Physik',
    '/physik'
  );

  return (
    <SubjectCatchAllView
      result={result}
      subjectTitle="Physik"
      subjectPath="/physik"
      summaryTitle="Wichtige Gesetze, Formeln und Merksätze"
    />
  );
}
