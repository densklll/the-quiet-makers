'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaHeart, FaTrash, FaSmile, FaHandHoldingHeart, FaLeaf, FaPaw, FaGraduationCap, FaRegClock } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Объект для соответствия тегов и их стилей
const tagStyles: Record<string, { icon: React.ReactNode, color: string }> = {
  'животные': { icon: <FaPaw className="mr-1" />, color: 'bg-amber-50 text-amber-700 border-amber-100' },
  'приюты': { icon: <FaHandHoldingHeart className="mr-1" />, color: 'bg-sky-50 text-sky-700 border-sky-100' },
  'здоровье': { icon: <FaHeart className="mr-1" />, color: 'bg-pink-50 text-pink-700 border-pink-100' },
  'разовая поддержка': { icon: <FaRegClock className="mr-1" />, color: 'bg-indigo-50 text-indigo-700 border-indigo-100' },
  'быстрый эффект': { icon: <FaSmile className="mr-1" />, color: 'bg-yellow-50 text-yellow-700 border-yellow-100' },
  'образование': { icon: <FaGraduationCap className="mr-1" />, color: 'bg-indigo-50 text-indigo-700 border-indigo-100' },
  'природа': { icon: <FaLeaf className="mr-1" />, color: 'bg-green-50 text-green-700 border-green-100' },
  'люди': { icon: <FaHandHoldingHeart className="mr-1" />, color: 'bg-purple-50 text-purple-700 border-purple-100' },
  'социальная поддержка': { icon: <FaHandHoldingHeart className="mr-1" />, color: 'bg-blue-50 text-blue-700 border-blue-100' },
  'регулярная поддержка': { icon: <FaRegClock className="mr-1" />, color: 'bg-teal-50 text-teal-700 border-teal-100' },
  'долгосрочное влияние': { icon: <FaLeaf className="mr-1" />, color: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
};

// Моковые данные проектов (такие же, как в projects/page.tsx)
const mockProjects = [
  {
    id: '1',
    title: 'Помощь приюту для бездомных животных',
    description: 'Сбор средств на корм, лекарства и обустройство приюта для бездомных животных в Москве.',
    image: 'https://placehold.co/600x400/sky/white?text=Приют+для+животных',
    category: 'animals',
    subcategory: 'health',
    format: 'one-time',
    result: 'concrete',
    importance: 'animal-care',
    collected: 75000,
    goal: 150000,
    tags: ['животные', 'приюты', 'здоровье', 'разовая поддержка', 'быстрый эффект']
  },
  {
    id: '3',
    title: 'Образовательная программа для детей из малообеспеченных семей',
    description: 'Организация дополнительных занятий для детей из малообеспеченных семей для повышения их образовательного уровня.',
    image: 'https://placehold.co/600x400/purple/white?text=Образование',
    category: 'people',
    subcategory: 'education',
    format: 'regular',
    result: 'general',
    importance: 'education-support',
    collected: 120000,
    goal: 300000,
    tags: ['люди', 'образование', 'социальная поддержка', 'регулярная поддержка', 'долгосрочное влияние']
  }
];

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [favoriteProjects, setFavoriteProjects] = useState<any[]>([]);
  
  // Имитация загрузки избранных проектов из localStorage
  useEffect(() => {
    // В реальном приложении здесь был бы запрос к API или чтение из localStorage
    const savedFavorites = ['1', '3']; // Имитация сохраненных ID проектов
    setFavorites(savedFavorites);
    
    // Фильтруем проекты, чтобы показать только избранные
    const projects = mockProjects.filter(project => savedFavorites.includes(project.id));
    setFavoriteProjects(projects);
  }, []);
  
  // Функция для удаления проекта из избранного
  const removeFromFavorites = (projectId: string) => {
    const updatedFavorites = favorites.filter(id => id !== projectId);
    setFavorites(updatedFavorites);
    
    // Обновляем список отображаемых проектов
    const updatedProjects = favoriteProjects.filter(project => project.id !== projectId);
    setFavoriteProjects(updatedProjects);
    
    // В реальном приложении здесь был бы запрос к API или обновление localStorage
  };
  
  return (
    <>
      <Header />
      
      {/* Заголовок страницы */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Избранное</h1>
            <p className="text-xl text-gray-600">
              Проекты, которые вы сохранили для будущей поддержки
            </p>
          </div>
        </div>
      </section>
      
      {/* Список избранных проектов */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {favoriteProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {favoriteProjects.map(project => (
                <div key={project.id} className="project-card">
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover project-card-image"
                    />
                    <button 
                      className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50 transition-colors"
                      onClick={() => removeFromFavorites(project.id)}
                      aria-label="Удалить из избранного"
                    >
                      <FaTrash className="text-red-500" />
                    </button>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {project.description}
                    </p>
                    
                    {/* Отображение тегов */}
                    {project.tags && project.tags.length > 0 && (
                      <div className="mb-4 flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag: string, index: number) => {
                          const tagStyle = tagStyles[tag] || { 
                            icon: null, 
                            color: 'bg-primary-50 text-primary-700 border-primary-100' 
                          };
                          
                          return (
                            <span 
                              key={index} 
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${tagStyle.color}`}
                            >
                              {tagStyle.icon}
                              {tag}
                            </span>
                          );
                        })}
                        {project.tags.length > 3 && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-50 text-gray-600 border border-gray-200">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Собрано</span>
                        <span className="font-medium">{project.collected.toLocaleString()} ₽</span>
                      </div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Цель</span>
                        <span className="font-medium">{project.goal.toLocaleString()} ₽</span>
                      </div>
                      <div className="progress-bar mt-2">
                        <div 
                          className="progress-bar-fill" 
                          style={{ width: `${(project.collected / project.goal) * 100}%` }}
                        ></div>
                      </div>
                      <div className="text-right text-sm mt-1">
                        <span className="font-medium">
                          {Math.round((project.collected / project.goal) * 100)}%
                        </span>
                      </div>
                    </div>
                    <Link href={`/project-details/${project.id}`} className="btn-primary w-full">
                      Поддержать
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHeart className="text-gray-400 text-3xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">У вас пока нет избранных проектов</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Добавляйте проекты в избранное, чтобы вернуться к ним позже и поддержать их
              </p>
              <Link href="/projects" className="btn-primary">
                Найти проекты
              </Link>
            </div>
          )}
        </div>
      </section>
      
      {/* Рекомендуемые проекты */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Возможно, вам понравятся</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Проекты, которые могут вас заинтересовать на основе ваших предпочтений
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="project-card">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="https://placehold.co/600x400/green/white?text=Экология" 
                  alt="Экологическая инициатива"
                  fill
                  className="object-cover project-card-image"
                />
                <button 
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-pink-50 transition-colors"
                  aria-label="Добавить в избранное"
                >
                  <FaHeart className="text-gray-400 hover:text-pink-500" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Экологическая инициатива по очистке парков
                </h3>
                <p className="text-gray-600 mb-4">
                  Организация волонтерских акций по очистке парков и лесопарковых зон от мусора.
                </p>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Собрано</span>
                    <span className="font-medium">30 000 ₽</span>
                  </div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Цель</span>
                    <span className="font-medium">50 000 ₽</span>
                  </div>
                  <div className="progress-bar mt-2">
                    <div 
                      className="progress-bar-fill" 
                      style={{ width: '60%' }}
                    ></div>
                  </div>
                  <div className="text-right text-sm mt-1">
                    <span className="font-medium">60%</span>
                  </div>
                </div>
                <Link href="/project-details/5" className="btn-primary w-full">
                  Поддержать
                </Link>
              </div>
            </div>
            
            <div className="project-card">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="https://placehold.co/600x400/amber/white?text=Помощь+пожилым" 
                  alt="Помощь пожилым людям"
                  fill
                  className="object-cover project-card-image"
                />
                <button 
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-pink-50 transition-colors"
                  aria-label="Добавить в избранное"
                >
                  <FaHeart className="text-gray-400 hover:text-pink-500" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Помощь пожилым людям
                </h3>
                <p className="text-gray-600 mb-4">
                  Организация помощи пожилым людям, оказавшимся в трудной жизненной ситуации.
                </p>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Собрано</span>
                    <span className="font-medium">85 000 ₽</span>
                  </div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Цель</span>
                    <span className="font-medium">100 000 ₽</span>
                  </div>
                  <div className="progress-bar mt-2">
                    <div 
                      className="progress-bar-fill" 
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                  <div className="text-right text-sm mt-1">
                    <span className="font-medium">85%</span>
                  </div>
                </div>
                <Link href="/project-details/4" className="btn-primary w-full">
                  Поддержать
                </Link>
              </div>
            </div>
            
            <div className="project-card">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="https://placehold.co/600x400/teal/white?text=Вакцинация" 
                  alt="Вакцинация бездомных животных"
                  fill
                  className="object-cover project-card-image"
                />
                <button 
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-pink-50 transition-colors"
                  aria-label="Добавить в избранное"
                >
                  <FaHeart className="text-gray-400 hover:text-pink-500" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Вакцинация бездомных животных
                </h3>
                <p className="text-gray-600 mb-4">
                  Программа вакцинации бездомных животных от опасных заболеваний в Санкт-Петербурге.
                </p>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Собрано</span>
                    <span className="font-medium">45 000 ₽</span>
                  </div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Цель</span>
                    <span className="font-medium">100 000 ₽</span>
                  </div>
                  <div className="progress-bar mt-2">
                    <div 
                      className="progress-bar-fill" 
                      style={{ width: '45%' }}
                    ></div>
                  </div>
                  <div className="text-right text-sm mt-1">
                    <span className="font-medium">45%</span>
                  </div>
                </div>
                <Link href="/project-details/2" className="btn-primary w-full">
                  Поддержать
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}