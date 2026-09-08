import { redirect } from 'next/navigation';

export default async function KunstCatchAllRedirect({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const target = Array.isArray(slug) ? slug.join('/') : slug;
  redirect(`/kunst-und-kuenstler/${target}`);
}
