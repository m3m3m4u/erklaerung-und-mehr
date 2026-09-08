import type { Metadata } from 'next';
import { politikTopics, politikCategories } from '@/lib/politik-data';
import { resolveSubjectCatchAll, buildSubjectMetadata } from '@/lib/catchall-resolver';
import SubjectCatchAllView from '@/components/SubjectCatchAllView';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    politikTopics,
    politikCategories,
    'Politik & Gesellschaft',
    '/politik-und-gesellschaft'
  );

  return buildSubjectMetadata(result, 'Politik & Gesellschaft', '/politik-und-gesellschaft');
}

export default async function PolitikUndGesellschaftCatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    politikTopics,
    politikCategories,
    'Politik & Gesellschaft',
    '/politik-und-gesellschaft'
  );

  return (
    <SubjectCatchAllView
      result={result}
      subjectTitle="Politik & Gesellschaft"
      subjectPath="/politik-und-gesellschaft"
      summaryTitle="Wichtige Grundlagen, Gesetze und Merksätze"
    />
  );
}
