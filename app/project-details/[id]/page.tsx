import React from 'react';
import { getProjectById } from '@/lib/api';
import ProjectDetailsClient from './ProjectDetailsClient';

// Моковые данные проектов для generateStaticParams
const mockProjects = [
  { id: '1' },
  { id: '2' },
  { id: '3' }
];

// Эта функция необходима для статической генерации страниц при использовании output: 'export'
export function generateStaticParams() {
  // Возвращаем массив объектов с параметрами для каждой страницы
  return mockProjects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetails({ params }: { params: { id: string } }) {
  // Получаем данные проекта по ID
  const project = getProjectById(params.id);
  
  if (!project) {
    return <div>Проект не найден</div>;
  }
  
  return <ProjectDetailsClient project={project} />;
} 