import type { Metadata } from 'next';
import { lehrberufeTopics, lehrberufeCategories } from '@/lib/lehrberufe-data';
import { resolveSubjectCatchAll, buildSubjectMetadata } from '@/lib/catchall-resolver';
import SubjectCatchAllView from '@/components/SubjectCatchAllView';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    lehrberufeTopics,
    lehrberufeCategories,
    'Lehrberufe',
    '/lehrberufe'
  );

  return buildSubjectMetadata(result, 'Lehrberufe', '/lehrberufe');
}

export default async function LehrberufeCatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    lehrberufeTopics,
    lehrberufeCategories,
    'Lehrberufe',
    '/lehrberufe'
  );

  return (
    <SubjectCatchAllView
      result={result}
      subjectTitle="Lehrberufe"
      subjectPath="/lehrberufe"
      summaryTitle="Wichtige Grundlagen, Gesetze und Merksätze"
    />
  );
}
