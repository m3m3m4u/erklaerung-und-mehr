import type { Metadata } from 'next';
import { verkehrTopics, verkehrCategories } from '@/lib/verkehr-data';
import { resolveSubjectCatchAll, buildSubjectMetadata } from '@/lib/catchall-resolver';
import SubjectCatchAllView from '@/components/SubjectCatchAllView';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    verkehrTopics,
    verkehrCategories,
    'Fahrradprüfung & Verkehr',
    '/die-freiwillige-fahrradpruefung'
  );

  return buildSubjectMetadata(result, 'Fahrradprüfung & Verkehr', '/die-freiwillige-fahrradpruefung');
}

export default async function DieFreiwilligeFahrradpruefungCatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    verkehrTopics,
    verkehrCategories,
    'Fahrradprüfung & Verkehr',
    '/die-freiwillige-fahrradpruefung'
  );

  return (
    <SubjectCatchAllView
      result={result}
      subjectTitle="Fahrradprüfung & Verkehr"
      subjectPath="/die-freiwillige-fahrradpruefung"
      summaryTitle="Wichtige Grundlagen, Gesetze und Merksätze"
    />
  );
}
