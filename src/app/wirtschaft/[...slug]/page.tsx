import type { Metadata } from 'next';
import { wirtschaftTopics, wirtschaftCategories } from '@/lib/wirtschaft-data';
import { resolveSubjectCatchAll, buildSubjectMetadata } from '@/lib/catchall-resolver';
import SubjectCatchAllView from '@/components/SubjectCatchAllView';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    wirtschaftTopics,
    wirtschaftCategories,
    'Wirtschaft',
    '/wirtschaft'
  );

  return buildSubjectMetadata(result, 'Wirtschaft', '/wirtschaft');
}

export default async function WirtschaftCatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    wirtschaftTopics,
    wirtschaftCategories,
    'Wirtschaft',
    '/wirtschaft'
  );

  return (
    <SubjectCatchAllView
      result={result}
      subjectTitle="Wirtschaft"
      subjectPath="/wirtschaft"
      summaryTitle="Wichtige Grundlagen, Regeln und Fachbegriffe"
    />
  );
}
