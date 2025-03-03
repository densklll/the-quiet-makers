'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHandHoldingHeart, FaUsers, FaLeaf, FaPaw, FaHeartbeat, FaShieldAlt, FaMoneyBillWave, FaRegClock, FaRegLightbulb, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

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

// Вопросы для квиза
const quizQuestions: QuizQuestionType[] = [
  {
    id: 'category',
    question: 'В какой сфере вы хотите оказать помощь?',
    options: [
      { id: 'people', text: 'Люди: поддержка социально уязвимых групп.', icon: <FaUsers className="text-blue-500" />, value: 'people' },
      { id: 'animals', text: 'Животные: защита и уход за бездомными или редкими видами.', icon: <FaPaw className="text-amber-500" />, value: 'animals' },
      { id: 'nature', text: 'Природа: сохранение экосистем и борьба с загрязнением.', icon: <FaLeaf className="text-green-500" />, value: 'nature' }
    ]
  },
  {
    id: 'goal',
    question: 'Какая цель для вас наиболее приоритетна?',
    options: [
      { id: 'education', text: 'Улучшение условий жизни и образования.', icon: <FaRegLightbulb className="text-yellow-500" />, value: 'education' },
      { id: 'health', text: 'Решение вопросов здоровья и безопасности.', icon: <FaHeartbeat className="text-pink-500" />, value: 'health' },
      { id: 'environment', text: 'Восстановление и защита окружающей среды.', icon: <FaLeaf className="text-green-500" />, value: 'environment' }
    ]
  },
  {
    id: 'format',
    question: 'Какой формат поддержки вам удобнее?',
    options: [
      { id: 'one-time', text: 'Разовая финансовая помощь.', icon: <FaMoneyBillWave className="text-green-500" />, value: 'one-time' },
      { id: 'recurring', text: 'Регулярная поддержка выбранного проекта.', icon: <FaRegClock className="text-blue-500" />, value: 'recurring' }
    ]
  },
  {
    id: 'result',
    question: 'Какой результат вы хотите видеть от своего вклада?',
    options: [
      { id: 'concrete', text: 'Конкретные и измеримые результаты.', icon: <FaRegLightbulb className="text-yellow-500" />, value: 'concrete' },
      { id: 'general', text: 'Общий вклад в улучшение выбранной сферы.', icon: <FaHandHoldingHeart className="text-purple-500" />, value: 'general' }
    ]
  },
  {
    id: 'project_type',
    question: 'Какие проекты вы считаете наиболее важными?',
    options: [
      { id: 'animal_help', text: 'Помощь животным: вакцинация, уход, приюты.', icon: <FaPaw className="text-amber-500" />, value: 'animal_help' },
      { id: 'education_support', text: 'Поддержка образования: строительство школ, доступ к обучению.', icon: <FaRegLightbulb className="text-blue-500" />, value: 'education_support' },
      { id: 'eco_initiatives', text: 'Экологические инициативы: очистка территорий, посадка деревьев.', icon: <FaLeaf className="text-green-500" />, value: 'eco_initiatives' }
    ]
  }
];

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const totalQuestions = quizQuestions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  
  // Обработчик выбора варианта ответа
  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };
  
  // Обработчик перехода к следующему вопросу
  const handleNextQuestion = () => {
    if (selectedOption) {
      // Сохраняем ответ
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
      
      // Переходим к следующему вопросу или завершаем квиз
      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedOption(null);
      } else {
        handleQuizComplete();
      }
    }
  };
  
  // Обработчик перехода к предыдущему вопросу
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedOption(null);
    }
  };
  
  // Обработчик завершения квиза
  const handleQuizComplete = () => {
    // Формируем URL с параметрами для страницы проектов
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
    
    // Переходим на страницу проектов с результатами
    router.push(`/projects?${queryParams.toString()}`);
  };
  
  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 mb-4">
              Найди проект, который тебя вдохновит
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ответь на несколько вопросов, и мы подберём для тебя проекты, которые важны именно тебе.
            </p>
          </div>
          
          {/* Прогресс-бар */}
          <div className="mb-10">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Вопрос {currentQuestionIndex + 1} из {totalQuestions}</span>
              <span>{Math.round(progress)}%</span>
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
                      onClick={() => handleOptionSelect(option.id)}
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
              Назад
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
                  Далее
                  <FaArrowRight className="ml-2" />
                </>
              ) : (
                'Показать подходящие проекты'
              )}
            </motion.button>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
} 