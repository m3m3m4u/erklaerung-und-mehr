import type { Metadata } from 'next';
import { geschichteTopics, geschichteCategories } from '@/lib/geschichte-data';
import { resolveSubjectCatchAll, buildSubjectMetadata } from '@/lib/catchall-resolver';
import SubjectCatchAllView from '@/components/SubjectCatchAllView';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    geschichteTopics,
    geschichteCategories,
    'Geschichte',
    '/geschichte'
  );

  return buildSubjectMetadata(result, 'Geschichte', '/geschichte');
}

export default async function GeschichteCatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    geschichteTopics,
    geschichteCategories,
    'Geschichte',
    '/geschichte'
  );

  return (
    <SubjectCatchAllView
      result={result}
      subjectTitle="Geschichte"
      subjectPath="/geschichte"
      summaryTitle="Wichtige Daten, Fakten und Zusammenhänge"
    />
  );
}
