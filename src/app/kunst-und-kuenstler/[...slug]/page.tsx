import type { Metadata } from 'next';
import { kunstTopics, kunstCategories } from '@/lib/kunst-data';
import { resolveSubjectCatchAll, buildSubjectMetadata } from '@/lib/catchall-resolver';
import SubjectCatchAllView from '@/components/SubjectCatchAllView';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    kunstTopics,
    kunstCategories,
    'Kunst und Künstler',
    '/kunst-und-kuenstler'
  );

  return buildSubjectMetadata(result, 'Kunst und Künstler', '/kunst-und-kuenstler');
}

export default async function KunstUndKuenstlerCatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    kunstTopics,
    kunstCategories,
    'Kunst und Künstler',
    '/kunst-und-kuenstler'
  );

  return (
    <SubjectCatchAllView
      result={result}
      subjectTitle="Kunst und Künstler"
      subjectPath="/kunst-und-kuenstler"
      summaryTitle="Wichtige Merkmale, Techniken und historische Hintergründe"
      defaultWorksheetLink="https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=&t=284"
    />
  );
}
