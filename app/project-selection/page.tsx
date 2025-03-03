'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectTags from '../components/ProjectTags';

export default function ProjectSelectionPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);
  
  const handleTagSelect = (tag: string) => {
    setSelectedTags(prev => {
      if (prev.includes(tag)) {
        return prev.filter(t => t !== tag);
      } else {
        return [...prev, tag];
      }
    });
  };
  
  const handleCategorySelect = (category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };
  
  const handleFormatSelect = (format: string) => {
    setSelectedFormat(format);
  };
  
  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Перенаправление на страницу проектов с параметрами
      let queryParams = new URLSearchParams();
      
      if (selectedTags.length > 0) {
        queryParams.append('tags', selectedTags.join(','));
      }
      
      if (selectedCategories.length > 0) {
        queryParams.append('categories', selectedCategories.join(','));
      }
      
      if (selectedFormat) {
        queryParams.append('format', selectedFormat);
      }
      
      queryParams.append('quiz', 'true');
      
      router.push(`/projects?${queryParams.toString()}`);
    }
  };
  
  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  
  const categories = [
    { id: 'animals', label: 'Помощь животным', description: 'Проекты, направленные на помощь бездомным животным, приютам и ветеринарным программам.' },
    { id: 'people', label: 'Помощь людям', description: 'Проекты, направленные на поддержку людей в трудной жизненной ситуации, детей, пожилых и людей с особенностями.' },
    { id: 'environment', label: 'Экология', description: 'Проекты, направленные на защиту окружающей среды, очистку территорий и экологическое просвещение.' },
    { id: 'education', label: 'Образование', description: 'Проекты, направленные на поддержку образовательных инициатив, доступ к знаниям и развитие навыков.' }
  ];
  
  const formats = [
    { id: 'one-time', label: 'Разовая поддержка', description: 'Единовременное пожертвование на конкретный проект или цель.' },
    { id: 'regular', label: 'Регулярная поддержка', description: 'Ежемесячные пожертвования для долгосрочной поддержки проектов.' }
  ];
  
  // Проверка, должна ли кнопка "Далее" быть отключена
  const isNextButtonDisabled = 
    (step === 1 && selectedTags.length === 0) ||
    (step === 2 && selectedCategories.length === 0) ||
    (step === 3 && !selectedFormat);
  
  return (
    <>
      <Header />
      
      <section className="pt-32 pb-12 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="mb-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Подбор проектов
              </h1>
              <p className="text-xl text-gray-600">
                Ответьте на несколько вопросов, чтобы мы могли подобрать проекты, которые вам близки
              </p>
            </div>
            
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-500">Шаг {step} из 3</span>
                <span className="text-sm font-medium text-gray-500">{Math.round((step / 3) * 100)}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: `${(step / 3) * 100}%` }}></div>
              </div>
            </div>
            
            {step === 1 && (
              <div className="mb-8">
                <ProjectTags 
                  onTagSelect={handleTagSelect} 
                  selectedTags={selectedTags} 
                />
                <p className="text-gray-500 mt-4 text-sm">
                  Выберите теги, которые вызывают у вас наиболее сильный отклик. Это поможет нам подобрать проекты, которые будут вам близки.
                </p>
              </div>
            )}
            
            {step === 2 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Какие направления благотворительности вам интересны?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {categories.map((category) => {
                    const isSelected = selectedCategories.includes(category.id);
                    
                    return (
                      <div
                        key={category.id}
                        className={`
                          p-4 rounded-xl cursor-pointer transition-all
                          ${isSelected 
                            ? 'bg-gray-100 border-2 border-sky-500' 
                            : 'bg-white border border-gray-200 hover:border-sky-300'}
                        `}
                        onClick={() => handleCategorySelect(category.id)}
                      >
                        <h4 className="text-lg font-medium text-gray-800 mb-1">{category.label}</h4>
                        <p className="text-gray-600 text-sm">{category.description}</p>
                      </div>
                    );
                  })}
                </div>
                <p className="text-gray-500 mt-4 text-sm">
                  Выберите одно или несколько направлений, которые вам интересны. Вы можете выбрать несколько вариантов.
                </p>
              </div>
            )}
            
            {step === 3 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Какой формат поддержки вам ближе?
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {formats.map((format) => {
                    const isSelected = selectedFormat === format.id;
                    
                    return (
                      <div
                        key={format.id}
                        className={`
                          p-4 rounded-xl cursor-pointer transition-all
                          ${isSelected 
                            ? 'bg-gray-100 border-2 border-sky-500' 
                            : 'bg-white border border-gray-200 hover:border-sky-300'}
                        `}
                        onClick={() => handleFormatSelect(format.id)}
                      >
                        <h4 className="text-lg font-medium text-gray-800 mb-1">{format.label}</h4>
                        <p className="text-gray-600">{format.description}</p>
                      </div>
                    );
                  })}
                </div>
                <p className="text-gray-500 mt-4 text-sm">
                  Выберите предпочтительный формат поддержки проектов. Это поможет нам подобрать проекты, которые соответствуют вашим предпочтениям.
                </p>
              </div>
            )}
            
            <div className="flex justify-between">
              {step > 1 ? (
                <button 
                  onClick={handlePrevStep} 
                  className="btn btn-secondary"
                  type="button"
                >
                  Назад
                </button>
              ) : (
                <div></div>
              )}
              
              <button 
                onClick={handleNextStep} 
                className={`btn btn-primary ${isNextButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isNextButtonDisabled}
                type="button"
              >
                {step < 3 ? 'Далее' : 'Показать результаты'}
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
} 