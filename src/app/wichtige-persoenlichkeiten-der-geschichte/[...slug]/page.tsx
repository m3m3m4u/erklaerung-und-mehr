import type { Metadata } from 'next';
import { persoenlichkeitenTopics, persoenlichkeitenCategories } from '@/lib/persoenlichkeiten-data';
import { resolveSubjectCatchAll, buildSubjectMetadata } from '@/lib/catchall-resolver';
import SubjectCatchAllView from '@/components/SubjectCatchAllView';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    persoenlichkeitenTopics,
    persoenlichkeitenCategories,
    'Berühmte Persönlichkeiten',
    '/wichtige-persoenlichkeiten-der-geschichte'
  );

  return buildSubjectMetadata(result, 'Berühmte Persönlichkeiten', '/wichtige-persoenlichkeiten-der-geschichte');
}

export default async function WichtigePersoenlichkeitenDerGeschichteCatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    persoenlichkeitenTopics,
    persoenlichkeitenCategories,
    'Berühmte Persönlichkeiten',
    '/wichtige-persoenlichkeiten-der-geschichte'
  );

  return (
    <SubjectCatchAllView
      result={result}
      subjectTitle="Berühmte Persönlichkeiten"
      subjectPath="/wichtige-persoenlichkeiten-der-geschichte"
      summaryTitle="Bedeutende Meilensteine, Werke und Lebensdaten"
    />
  );
}
