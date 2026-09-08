import type { Metadata } from 'next';
import { englischTopics, englischCategories } from '@/lib/englisch-data';
import { resolveSubjectCatchAll, buildSubjectMetadata } from '@/lib/catchall-resolver';
import SubjectCatchAllView from '@/components/SubjectCatchAllView';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    englischTopics,
    englischCategories,
    'Englisch',
    '/englisch'
  );

  return buildSubjectMetadata(result, 'Englisch', '/englisch');
}

export default async function EnglischCatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    englischTopics,
    englischCategories,
    'Englisch',
    '/englisch'
  );

  return (
    <SubjectCatchAllView
      result={result}
      subjectTitle="Englisch"
      subjectPath="/englisch"
      summaryTitle="Grammar Rules, Signal Words and Key Points"
    />
  );
}
