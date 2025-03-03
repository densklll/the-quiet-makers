'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

interface Option {
  id: string;
  text: string;
  icon?: React.ReactNode;
}

interface QuizQuestionProps {
  question: string;
  options: Option[];
  onSelect: (optionId: string) => void;
  currentStep: number;
  totalSteps: number;
}

const QuizQuestion = ({ question, options, onSelect, currentStep, totalSteps }: QuizQuestionProps) => {
  const progressPercentage = (currentStep / totalSteps) * 100;
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    onSelect(optionId);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="max-w-2xl mx-auto"
    >
      <div className="mb-10">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-500">Вопрос {currentStep} из {totalSteps}</span>
          <span className="text-sm font-medium text-primary-500">{Math.round(progressPercentage)}% завершено</span>
        </div>
        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden shadow-inner">
          <motion.div 
            className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"
            initial={{ width: `${((currentStep - 1) / totalSteps) * 100}%` }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
      </div>
      
      <motion.h2 
        className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {question}
      </motion.h2>
      
      <div className="grid grid-cols-1 gap-4">
        {options.map((option, index) => (
          <motion.button
            key={option.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              y: -5
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleOptionSelect(option.id)}
            className={`quiz-option group ${selectedOption === option.id ? 'selected' : ''}`}
          >
            <div className="flex items-center w-full">
              {option.icon && (
                <div className="quiz-option-icon">
                  {option.icon}
                </div>
              )}
              <div className="flex-1">
                <span className="text-lg font-medium text-gray-800 group-hover:text-primary-700 transition-colors duration-200">{option.text}</span>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 ${selectedOption === option.id ? 'border-primary-500 bg-primary-500' : 'border-gray-300 bg-white group-hover:border-primary-500 group-hover:bg-primary-50'} flex items-center justify-center transition-all duration-200 ml-4`}>
                <FaCheck className={`${selectedOption === option.id ? 'text-white scale-100' : 'text-primary-500 scale-0 group-hover:scale-75'} transform transition-transform duration-200`} />
              </div>
            </div>
          </motion.button>
        ))}
      </div>
      
      <motion.div 
        className="mt-10 text-center text-sm text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        {selectedOption ? (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-primary-600 font-medium"
          >
            Отличный выбор! Нажмите "Далее" для продолжения
          </motion.span>
        ) : (
          "Выберите один из вариантов, чтобы продолжить"
        )}
      </motion.div>
    </motion.div>
  );
};

export default QuizQuestion; 