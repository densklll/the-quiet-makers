'use client';

import React, { useState, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaUsers, FaHandHoldingHeart, FaPaw, FaTree, FaShare, FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Project, Story } from '@/lib/api';
import { useI18n } from '@/lib/i18n/I18nContext';

// Объект для соответствия тегов и их стилей
const buildTagStyles = (t: (k: string)=>string): Record<string, { icon: JSX.Element, color: string }> => ({
  [t('projects.tagMap.Люди')]: { 
    icon: <FaUsers className="mr-1" />, 
    color: 'bg-blue-50 text-blue-700 border-blue-100' 
  },
  [t('projects.tagMap.Благотворительность')]: { 
    icon: <FaHandHoldingHeart className="mr-1" />, 
    color: 'bg-pink-50 text-pink-700 border-pink-100' 
  },
  [t('projects.tagMap.Животные')]: { 
    icon: <FaPaw className="mr-1" />, 
    color: 'bg-amber-50 text-amber-700 border-amber-100' 
  },
  [t('projects.tagMap.Экология')]: { 
    icon: <FaTree className="mr-1" />, 
    color: 'bg-green-50 text-green-700 border-green-100' 
  },
  [t('projects.tagMap.Дети')]: {
    icon: <FaUsers className="mr-1" />,
    color: 'bg-purple-50 text-purple-700 border-purple-100'
  },
  [t('projects.tagMap.Природа')]: {
    icon: <FaTree className="mr-1" />,
    color: 'bg-green-50 text-green-700 border-green-100'
  }
});

export default function ProjectDetailsClient({ project }: { project: Project }) {
  const [donationAmount, setDonationAmount] = useState<number>(0);
  const [customAmount, setCustomAmount] = useState<number>(0);
  const [isRecurring, setIsRecurring] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { t } = useI18n();
  const tagStyles = buildTagStyles(t);
  
  // Обработчик отправки формы пожертвования
  const handleDonation = (e: FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setDonationAmount(0);
      setCustomAmount(0);
      setIsRecurring(false);
    }, 10000);
  };
  
  return (
    <>
      <Header />
      
      <main className="container mx-auto px-4 pt-28 sm:pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Хлебные крошки */}
          <div className="mb-6">
            <Link href="/projects" className="text-gray-500 hover:text-primary-600 flex items-center">
              <FaArrowLeft className="mr-2" />
              <span>{t('details.backToProjects')}</span>
            </Link>
          </div>
          
          {/* Заголовок проекта */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            {project.title}
          </h1>
          
          {/* Основное изображение */}
          <div className="relative w-full h-96 rounded-xl overflow-hidden mb-8">
            <Image 
              src={project.image} 
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          
          {/* Теги проекта */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag: string, index: number) => (
              <span 
                key={index}
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm border ${tagStyles[tag]?.color || 'bg-gray-50 text-gray-700 border-gray-100'}`}
              >
                {tagStyles[tag]?.icon}
                {tag}
              </span>
            ))}
          </div>
          
          {/* Прогресс сбора */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">{t('common.labels.collected')}</span>
              <span className="font-bold text-gray-800">{t('details.collectedOf', { collected: project.collected.toLocaleString(), goal: project.goal.toLocaleString() })}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div 
                className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2.5 rounded-full" 
                style={{ width: `${Math.min(100, (project.collected / project.goal) * 100)}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>{t('details.collectedPercent', { percent: String(Math.round((project.collected / project.goal) * 100)) })}</span>
              <span>{t('details.remaining', { amount: (project.goal - project.collected).toLocaleString() })}</span>
            </div>
          </div>
          
          {/* Описание проекта */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('details.aboutProject')}</h2>
            <div className="prose max-w-none">
              {project.fullDescription.split('\n').map((paragraph: string, index: number) => (
                paragraph.trim() ? <p key={index} className="mb-4">{paragraph}</p> : null
              ))}
            </div>
          </div>
          
          {/* Форма пожертвования */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('details.donate.title')}</h2>
            <form onSubmit={handleDonation}>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">{t('details.donate.chooseAmount')}</label>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {[500, 1000, 2000].map(amount => (
                    <button
                      key={amount}
                      type="button"
                      className={`py-3 px-4 rounded-lg border ${
                        donationAmount === amount 
                          ? 'bg-primary-50 border-primary-500 text-primary-700' 
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                      onClick={() => setDonationAmount(amount)}
                    >
                      {amount.toLocaleString()} ₽
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(parseInt(e.target.value) || 0);
                      setDonationAmount(0);
                    }}
                    placeholder={t('details.donate.otherAmount')}
                    className="w-full py-3 px-4 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                  />
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">₽</span>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isRecurring}
                    onChange={(e) => setIsRecurring(e.target.checked)}
                    className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="ml-2 text-gray-700">{t('details.donate.recurring')}</span>
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
              >
                {isRecurring ? t('details.donate.subscribeRecurring') : t('details.donate.donateOnce')}
              </button>
            </form>
          </div>
          
          {/* Истории успеха */}
          {project.stories && project.stories.length > 0 && (
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('details.storiesTitle')}</h2>
              <div className="space-y-6">
                {project.stories.map((story: Story, index: number) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <div className="relative w-full h-48 rounded-lg overflow-hidden">
                        <Image 
                          src={story.image} 
                          alt={story.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{story.title}</h3>
                      <p className="text-gray-600">{story.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Дополнительные изображения */}
          {project.additionalImages && project.additionalImages.length > 0 && (
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('details.photosTitle')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.additionalImages.map((image: string, index: number) => (
                  <div key={index} className="relative w-full h-64 rounded-lg overflow-hidden">
                    <Image 
                      src={image} 
                      alt={`${project.title} - фото ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      {/* Модальное окно подтверждения транзакции */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 md:p-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <FaCheckCircle className="text-green-600 text-3xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{t('details.modal.thanksTitle')}</h2>
              <p className="text-gray-600">{t('details.modal.thanksText')}</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">{t('details.modal.amount')}</span>
                <span className="font-bold text-gray-800">{(donationAmount || customAmount).toLocaleString()} ₽</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">{t('details.modal.project')}</span>
                <span className="font-bold text-gray-800">{project.title}</span>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('details.modal.tracking')}</h3>
              <a 
                href="#" 
                className="flex items-center text-primary-600 hover:text-primary-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{t('details.modal.viewOnChain')}</span>
                <FaExternalLinkAlt className="ml-2 text-sm" />
              </a>
            </div>
            
            <div className="space-y-3">
              <button 
                onClick={() => setShowSuccess(false)}
                className="w-full py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
              >
                {t('details.modal.backToProject')}
              </button>
              
              {!isRecurring && (
                <button 
                  onClick={() => {
                    setIsRecurring(true);
                    setShowSuccess(false);
                  }}
                  className="w-full py-3 px-4 bg-white border border-primary-600 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                >
                  {t('details.donate.subscribeRecurring')}
                </button>
              )}
              
              <button 
                className="w-full py-3 px-4 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors flex items-center justify-center"
              >
                <FaShare className="mr-2" />
                {t('details.modal.share')}
              </button>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </>
  );
} 