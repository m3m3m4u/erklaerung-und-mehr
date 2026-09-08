import type { Metadata } from 'next';
import { hauswirtschaftTopics, hauswirtschaftCategories } from '@/lib/hauswirtschaft-data';
import { resolveSubjectCatchAll, buildSubjectMetadata } from '@/lib/catchall-resolver';
import SubjectCatchAllView from '@/components/SubjectCatchAllView';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    hauswirtschaftTopics,
    hauswirtschaftCategories,
    'Hauswirtschaft',
    '/hauswirtschaft'
  );

  return buildSubjectMetadata(result, 'Hauswirtschaft', '/hauswirtschaft');
}

export default async function HauswirtschaftCatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    hauswirtschaftTopics,
    hauswirtschaftCategories,
    'Hauswirtschaft',
    '/hauswirtschaft'
  );

  return (
    <SubjectCatchAllView
      result={result}
      subjectTitle="Hauswirtschaft"
      subjectPath="/hauswirtschaft"
      summaryTitle="Wichtige Grundlagen, Gesetze und Merksätze"
    />
  );
}
