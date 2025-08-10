import React from 'react';
import { getProjectById } from '@/lib/api';
import ProjectDetailsClient from '../../../project-details/[id]/ProjectDetailsClient';

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

export default function LocalizedProjectDetailsPage({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);
  if (!project) return null;
  return <ProjectDetailsClient project={project} />;
}