import { redirect } from 'next/navigation';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ToolsBuchtippDetailRedirect({ params }: Props) {
  const { id } = await params;
  redirect(`/buchtipps/${id}`);
}
