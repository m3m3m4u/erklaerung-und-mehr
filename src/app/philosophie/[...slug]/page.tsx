import type { Metadata } from 'next';
import { philosophieTopics, philosophieCategories } from '@/lib/philosophie-data';
import { resolveSubjectCatchAll, buildSubjectMetadata } from '@/lib/catchall-resolver';
import SubjectCatchAllView from '@/components/SubjectCatchAllView';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    philosophieTopics,
    philosophieCategories,
    'Philosophie',
    '/philosophie'
  );

  return buildSubjectMetadata(result, 'Philosophie', '/philosophie');
}

export default async function PhilosophieCatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    philosophieTopics,
    philosophieCategories,
    'Philosophie',
    '/philosophie'
  );

  return (
    <SubjectCatchAllView
      result={result}
      subjectTitle="Philosophie"
      subjectPath="/philosophie"
      summaryTitle="Zentrale Thesen, Begriffe und Gedankengänge"
    />
  );
}
