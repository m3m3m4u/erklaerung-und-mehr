import type { Metadata } from 'next';
import { ethikTopics, ethikCategories } from '@/lib/ethik-data';
import { resolveSubjectCatchAll, buildSubjectMetadata } from '@/lib/catchall-resolver';
import SubjectCatchAllView from '@/components/SubjectCatchAllView';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    ethikTopics,
    ethikCategories,
    'Ethik',
    '/ethik'
  );

  return buildSubjectMetadata(result, 'Ethik', '/ethik');
}

export default async function EthikCatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const result = resolveSubjectCatchAll(
    slug,
    ethikTopics,
    ethikCategories,
    'Ethik',
    '/ethik'
  );

  return (
    <SubjectCatchAllView
      result={result}
      subjectTitle="Ethik"
      subjectPath="/ethik"
      summaryTitle="Wichtige Grundlagen, Regeln und ethische Positionen"
    />
  );
}
