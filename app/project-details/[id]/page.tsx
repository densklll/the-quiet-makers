import { redirect } from 'next/navigation';

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

export default function ProjectDetailsRedirect({ params }: { params: { id: string } }) {
  redirect(`/en/project-details/${params.id}`);
} 