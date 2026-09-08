import type { Metadata } from 'next';
import { psychologieTopics, psychologieCategories } from '@/lib/psychologie-data';
import { resolveSubjectCatchAll, buildSubjectMetadata } from '@/lib/catchall-resolver';
import SubjectCatchAllView from '@/components/SubjectCatchAllView';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    psychologieTopics,
    psychologieCategories,
    'Psychologie',
    '/psychologie'
  );

  return buildSubjectMetadata(result, 'Psychologie', '/psychologie');
}

export default async function PsychologieCatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    psychologieTopics,
    psychologieCategories,
    'Psychologie',
    '/psychologie'
  );

  return (
    <SubjectCatchAllView
      result={result}
      subjectTitle="Psychologie"
      subjectPath="/psychologie"
      summaryTitle="Wichtige Konzepte, Modelle und Forschungsergebnisse"
    />
  );
}
