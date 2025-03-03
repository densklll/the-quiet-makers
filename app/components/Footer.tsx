'use client';

import React from 'react';
import Link from 'next/link';
import { FaHeart, FaTwitter, FaFacebook, FaInstagram, FaTelegram, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full -translate-y-1/2 translate-x-1/3 opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-100 rounded-full translate-y-1/2 -translate-x-1/3 opacity-50 blur-3xl"></div>
      
      {/* Верхняя часть футера с CTA */}
      <div className="relative z-10 border-b border-gray-200">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
              <div className="max-w-2xl">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 mobile-text-balance">
                  Готовы начать помогать?
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-0 md:pr-8 mobile-text-balance">
                  Пройдите короткий тест и найдите проекты, которые соответствуют вашим ценностям и интересам.
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto"
              >
                <Link 
                  href="/quiz" 
                  className="inline-flex items-center justify-center w-full md:w-auto py-3 sm:py-4 px-6 sm:px-8 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-bold rounded-xl shadow-sm hover:shadow transition-all whitespace-nowrap"
                >
                  Пройти тест
                  <FaArrowRight className="ml-2" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Основная часть футера */}
      <div className="container mx-auto px-4 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center group mb-4 sm:mb-6">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 mr-2 sm:mr-3 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl"></div>
                <div className="absolute inset-[3px] bg-white rounded-lg"></div>
                <div className="absolute inset-[6px] bg-gradient-to-br from-primary-500 to-secondary-500 rounded-md"></div>
              </div>
              <span className="font-bold text-lg sm:text-xl tracking-tight text-gray-800">
                The Quiet Makers
              </span>
            </Link>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed mobile-text-balance">
              Платформа, которая помогает людям находить благотворительные проекты, 
              соответствующие их ценностям и интересам.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-primary-600 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-primary-600 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebook size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-primary-600 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-primary-600 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTelegram size={20} />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-6">Навигация</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/projects" className="text-gray-600 hover:text-primary-600 transition-colors duration-300 inline-flex items-center">
                  <span className="relative">
                    Проекты
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="text-gray-600 hover:text-primary-600 transition-colors duration-300 inline-flex items-center">
                  <span className="relative">
                    Подобрать проект
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary-600 transition-colors duration-300 inline-flex items-center">
                  <span className="relative">
                    О платформе
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-6">Правовая информация</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300 inline-flex items-center">
                  <span className="relative">
                    Условия использования
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300 inline-flex items-center">
                  <span className="relative">
                    Политика конфиденциальности
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300 inline-flex items-center">
                  <span className="relative">
                    Правила пожертвований
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-6">Связаться с нами</h3>
            <div className="space-y-4">
              <a href="mailto:info@quietmakers.org" className="flex items-center text-gray-600 hover:text-primary-600 transition-colors duration-300 group">
                <div className="bg-gray-100 p-2 rounded-full mr-3 group-hover:bg-primary-50 transition-colors duration-300">
                  <FaEnvelope className="text-gray-500 group-hover:text-primary-600 transition-colors duration-300" />
                </div>
                <span>info@quietmakers.org</span>
              </a>
              <p className="text-gray-600 flex items-center">
                <span className="bg-gray-100 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                Москва, Россия
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs sm:text-sm mb-4 md:mb-0 text-center md:text-left">
            &copy; {currentYear} The Quiet Makers. Все права защищены.
          </p>
          <p className="text-gray-500 text-xs sm:text-sm flex items-center">
            Сделано с <FaHeart className="text-primary-500 mx-1" /> для лучшего мира
          </p>
        </div>
      </div>
    </footer>
  );
} 