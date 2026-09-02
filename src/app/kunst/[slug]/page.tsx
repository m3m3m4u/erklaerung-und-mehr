import { redirect } from 'next/navigation';

export default async function KunstSlugRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/kunst-und-kuenstler/${slug}`);
}
