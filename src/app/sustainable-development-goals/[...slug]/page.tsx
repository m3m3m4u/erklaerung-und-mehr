import type { Metadata } from 'next';
import { klimaTopics, klimaCategories } from '@/lib/klima-data';
import { resolveSubjectCatchAll, buildSubjectMetadata } from '@/lib/catchall-resolver';
import SubjectCatchAllView from '@/components/SubjectCatchAllView';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    klimaTopics,
    klimaCategories,
    'Klima, Umwelt & SDGs',
    '/sustainable-development-goals'
  );

  return buildSubjectMetadata(result, 'Klima, Umwelt & SDGs', '/sustainable-development-goals');
}

export default async function SustainableDevelopmentGoalsCatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    klimaTopics,
    klimaCategories,
    'Klima, Umwelt & SDGs',
    '/sustainable-development-goals'
  );

  return (
    <SubjectCatchAllView
      result={result}
      subjectTitle="Klima, Umwelt & SDGs"
      subjectPath="/sustainable-development-goals"
      summaryTitle="Wichtige Ziele, Fakten und Handlungsfelder"
    />
  );
}
