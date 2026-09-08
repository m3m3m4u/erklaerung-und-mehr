import type { Metadata } from 'next';
import { deutschTopics, deutschCategories } from '@/lib/deutsch-data';
import { resolveSubjectCatchAll, buildSubjectMetadata } from '@/lib/catchall-resolver';
import SubjectCatchAllView from '@/components/SubjectCatchAllView';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    deutschTopics,
    deutschCategories,
    'Deutsch',
    '/deutsch'
  );

  return buildSubjectMetadata(result, 'Deutsch', '/deutsch');
}

export default async function DeutschCatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    deutschTopics,
    deutschCategories,
    'Deutsch',
    '/deutsch'
  );

  return (
    <SubjectCatchAllView
      result={result}
      subjectTitle="Deutsch"
      subjectPath="/deutsch"
      summaryTitle="Wichtige Sprachregeln, Epochen-Merkmale und literarische Hintergründe"
    />
  );
}
