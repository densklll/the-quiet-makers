'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHandHoldingHeart, FaUsers, FaLeaf, FaPaw, FaHeartbeat, FaShieldAlt, FaMoneyBillWave, FaRegClock, FaRegLightbulb, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useI18n } from '@/lib/i18n/I18nContext';

// Типы вопросов и ответов
interface QuizOption {
  id: string;
  text: string;
  icon?: React.ReactNode;
  value: string;
}

interface QuizQuestionType {
  id: string;
  question: string;
  options: QuizOption[];
}

export default function QuizPage() {
  const router = useRouter();
  const { t } = useI18n();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
  // Вопросы строим из словаря
  const quizQuestions: QuizQuestionType[] = [
    {
      id: 'category',
      question: t('quiz.q.category.question'),
      options: [
        { id: 'people', text: t('quiz.q.category.people'), icon: <FaUsers className="text-blue-500" />, value: 'people' },
        { id: 'animals', text: t('quiz.q.category.animals'), icon: <FaPaw className="text-amber-500" />, value: 'animals' },
        { id: 'nature', text: t('quiz.q.category.nature'), icon: <FaLeaf className="text-green-500" />, value: 'nature' }
      ]
    },
    {
      id: 'goal',
      question: t('quiz.q.goal.question'),
      options: [
        { id: 'education', text: t('quiz.q.goal.education'), icon: <FaRegLightbulb className="text-yellow-500" />, value: 'education' },
        { id: 'health', text: t('quiz.q.goal.health'), icon: <FaHeartbeat className="text-pink-500" />, value: 'health' },
        { id: 'environment', text: t('quiz.q.goal.environment'), icon: <FaLeaf className="text-green-500" />, value: 'environment' }
      ]
    },
    {
      id: 'format',
      question: t('quiz.q.format.question'),
      options: [
        { id: 'one-time', text: t('quiz.q.format.oneTime'), icon: <FaMoneyBillWave className="text-green-500" />, value: 'one-time' },
        { id: 'recurring', text: t('quiz.q.format.recurring'), icon: <FaRegClock className="text-blue-500" />, value: 'recurring' }
      ]
    },
    {
      id: 'result',
      question: t('quiz.q.result.question'),
      options: [
        { id: 'concrete', text: t('quiz.q.result.concrete'), icon: <FaRegLightbulb className="text-yellow-500" />, value: 'concrete' },
        { id: 'general', text: t('quiz.q.result.general'), icon: <FaHandHoldingHeart className="text-purple-500" />, value: 'general' }
      ]
    },
    {
      id: 'project_type',
      question: t('quiz.q.projectType.question'),
      options: [
        { id: 'animal_help', text: t('quiz.q.projectType.animal_help'), icon: <FaPaw className="text-amber-500" />, value: 'animal_help' },
        { id: 'education_support', text: t('quiz.q.projectType.education_support'), icon: <FaRegLightbulb className="text-blue-500" />, value: 'education_support' },
        { id: 'eco_initiatives', text: t('quiz.q.projectType.eco_initiatives'), icon: <FaLeaf className="text-green-500" />, value: 'eco_initiatives' }
      ]
    }
  ];

  const totalQuestions = quizQuestions.length;
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  
  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };
  
  const handleNextQuestion = () => {
    if (selectedOption) {
      const questionId = currentQuestion.id;
      const optionValue = currentQuestion.options.find(opt => opt.id === selectedOption)?.value || '';
      
      setAnswers((prev) => {
        const newAnswers = { ...prev };
        if (!newAnswers[questionId]) {
          newAnswers[questionId] = [];
        }
        newAnswers[questionId] = [...newAnswers[questionId], optionValue];
        return newAnswers;
      });
      
      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedOption(null);
      } else {
        handleQuizComplete();
      }
    }
  };
  
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedOption(null);
    }
  };
  
  const handleQuizComplete = () => {
    const queryParams = new URLSearchParams();
    queryParams.append('quiz', 'true');
    
    if (answers.category) {
      queryParams.append('categories', answers.category.join(','));
    }
    if (answers.goal) {
      queryParams.append('goals', answers.goal.join(','));
    }
    if (answers.format) {
      queryParams.append('format', answers.format.join(','));
    }
    if (answers.result) {
      queryParams.append('results', answers.result.join(','));
    }
    if (answers.project_type) {
      queryParams.append('project_types', answers.project_type.join(','));
    }
    router.push(`/projects?${queryParams.toString()}`);
  };
  
  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 mb-4">
              {t('quiz.title')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('quiz.subtitle')}
            </p>
          </div>
          
          {/* Прогресс-бар */}
          <div className="mb-10">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>{t('quiz.questionOf', { n: String(currentQuestionIndex + 1), total: String(totalQuestions) })}</span>
              <span>{t('quiz.progress', { percent: String(Math.round(progress)) })}</span>
            </div>
            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-primary-500 to-secondary-500" 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              ></motion.div>
            </div>
          </div>
          
          {/* Вопрос и варианты ответов */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestionIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="p-8 md:p-10"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                  {currentQuestion.question}
                </h2>
                
                <div className="space-y-4">
                  {currentQuestion.options.map((option) => (
                    <motion.button
                      key={option.id}
                      onClick={() => setSelectedOption(option.id)}
                      className={`w-full flex items-center p-5 rounded-xl border-2 transition-all duration-300 ${
                        selectedOption === option.id
                          ? 'border-primary-500 bg-primary-50 shadow-md shadow-primary-100'
                          : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                      }`}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full ${
                        selectedOption === option.id ? 'bg-primary-100' : 'bg-gray-100'
                      }`}>
                        {option.icon}
                      </div>
                      <span className={`ml-4 text-lg font-medium ${
                        selectedOption === option.id ? 'text-primary-700' : 'text-gray-700'
                      }`}>
                        {option.text}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Кнопки навигации */}
          <div className="flex justify-between">
            <motion.button
              onClick={handlePrevQuestion}
              disabled={currentQuestionIndex === 0}
              className={`flex items-center py-3 px-6 rounded-xl transition-colors ${
                currentQuestionIndex === 0
                  ? 'text-gray-300 cursor-not-allowed'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
              whileHover={currentQuestionIndex !== 0 ? { scale: 1.03 } : {}}
              whileTap={currentQuestionIndex !== 0 ? { scale: 0.97 } : {}}
            >
              <FaArrowLeft className="mr-2" />
              {t('common.actions.back')}
            </motion.button>
            
            <motion.button
              onClick={handleNextQuestion}
              disabled={!selectedOption}
              className={`flex items-center py-3 px-8 rounded-xl font-medium transition-all ${
                selectedOption
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-md hover:shadow-lg'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
              whileHover={selectedOption ? { scale: 1.03 } : {}}
              whileTap={selectedOption ? { scale: 0.97 } : {}}
            >
              {currentQuestionIndex < totalQuestions - 1 ? (
                <>
                  {t('common.actions.next')}
                  <FaArrowRight className="ml-2" />
                </>
              ) : (
                t('quiz.btnShowResults')
              )}
            </motion.button>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
} 