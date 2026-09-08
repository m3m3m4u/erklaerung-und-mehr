import type { Metadata } from 'next';
import { technikTopics, technikCategories } from '@/lib/technik-data';
import { resolveSubjectCatchAll, buildSubjectMetadata } from '@/lib/catchall-resolver';
import SubjectCatchAllView from '@/components/SubjectCatchAllView';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    technikTopics,
    technikCategories,
    'Technik',
    '/technik'
  );

  return buildSubjectMetadata(result, 'Technik', '/technik');
}

export default async function TechnikCatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    technikTopics,
    technikCategories,
    'Technik',
    '/technik'
  );

  return (
    <SubjectCatchAllView
      result={result}
      subjectTitle="Technik"
      subjectPath="/technik"
      summaryTitle="Wichtige technische Grundlagen, Funktionsweisen und Sicherheitsregeln"
    />
  );
}
