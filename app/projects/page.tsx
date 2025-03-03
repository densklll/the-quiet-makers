import React, { Suspense } from 'react';
import { getAllProjects } from '@/lib/api';
import ProjectsClient from './ProjectsClient';

// Компонент загрузки для Suspense
function ProjectsLoading() {
  return <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-600">Загрузка проектов...</p>
    </div>
  </div>;
}

export default function ProjectsPage() {
  const projects = getAllProjects();
  
  return (
    <Suspense fallback={<ProjectsLoading />}>
      <ProjectsClient initialProjects={projects} />
    </Suspense>
  );
} 