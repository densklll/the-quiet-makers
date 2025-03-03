'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaUsers, FaPaw, FaTree, FaArrowRight, FaRegLightbulb, FaRegCheckCircle, FaSearch, FaUserFriends } from 'react-icons/fa';
import Header from './components/Header';
import Footer from './components/Footer';
import MainImage from '@/public/images/main-image.jpeg';

export default function HomePage() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-gray-50 to-white pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-100 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute top-60 -left-20 w-72 h-72 bg-secondary-100 rounded-full opacity-30 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
              <motion.div 
                className="flex-1 w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-6">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
                      Делать добро просто. Найди проект, который вдохновит тебя на помощь.
                    </span>
                  </h1>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-xl leading-relaxed mobile-text-balance text-center mx-auto">
                  The Quiet Makers — это место, где каждый может найти своё счастье в добрых делах. Мы объединяем людей и проекты, делая помощь прозрачной и вдохновляющей.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      href="/quiz" 
                      className="w-full sm:w-auto inline-block py-3 sm:py-4 px-6 sm:px-8 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all text-center"
                    >
                      Найти свой проект
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      href="/about" 
                      className="w-full sm:w-auto inline-block py-3 sm:py-4 px-6 sm:px-8 bg-white text-gray-700 font-bold rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 shadow-sm hover:shadow transition-all text-center"
                    >
                      Узнать больше о платформе
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex-1 relative w-full mt-8 lg:mt-0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={MainImage}
                    alt="Благотворительность"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 pb-20 md:pb-16">
                    <p className="text-white text-xl font-medium">Каждое действие имеет значение</p>
                  </div>
                </div>
                
                <div className="absolute -bottom-10 right-6 md:right-6 bg-white rounded-xl shadow-lg p-3 sm:p-4 max-w-xs">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="bg-green-50 p-2 sm:p-3 rounded-full">
                      <FaRegCheckCircle className="text-green-600 text-base sm:text-xl" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-600">Уже помогли</p>
                      <p className="font-bold text-sm sm:text-base text-gray-800">12,458 человек</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Категории */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-10 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 mobile-text-balance">Выберите направление помощи</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mobile-text-balance">
                Мы поддерживаем проекты в различных сферах, чтобы каждый мог найти то, что резонирует с его ценностями
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <motion.div 
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden shadow-sm border border-blue-100 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Link href="/projects?categories=people" className="block">
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <Image
                      src="https://placehold.co/800x600/3b82f6/FFFFFF?text=Помощь+людям"
                      alt="Помощь людям"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className="bg-white rounded-full p-2 sm:p-3 mr-3 sm:mr-4 shadow-sm">
                        <FaUsers className="text-blue-600 text-lg sm:text-xl" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800">Помощь людям</h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                      Поддержите проекты, которые помогают людям в трудной жизненной ситуации, детям, пожилым и людям с особенностями развития.
                    </p>
                    <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                      Смотреть проекты
                      <FaArrowRight className="ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl overflow-hidden shadow-sm border border-amber-100 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Link href="/projects?categories=animals" className="block">
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <Image
                      src="https://placehold.co/800x600/f59e0b/FFFFFF?text=Помощь+животным"
                      alt="Помощь животным"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className="bg-white rounded-full p-2 sm:p-3 mr-3 sm:mr-4 shadow-sm">
                        <FaPaw className="text-amber-600 text-lg sm:text-xl" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800">Помощь животным</h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                      Поддержите проекты, направленные на защиту и спасение животных, создание приютов и борьбу за права братьев наших меньших.
                    </p>
                    <div className="flex items-center text-amber-600 font-medium group-hover:translate-x-2 transition-transform">
                      Смотреть проекты
                      <FaArrowRight className="ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl overflow-hidden shadow-sm border border-green-100 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Link href="/projects?categories=environment" className="block">
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <Image
                      src="https://placehold.co/800x600/10b981/FFFFFF?text=Экология"
                      alt="Экология"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className="bg-white rounded-full p-2 sm:p-3 mr-3 sm:mr-4 shadow-sm">
                        <FaTree className="text-green-600 text-lg sm:text-xl" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800">Экология</h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                      Поддержите проекты, направленные на защиту окружающей среды, сохранение биоразнообразия и борьбу с изменением климата.
                    </p>
                    <div className="flex items-center text-green-600 font-medium group-hover:translate-x-2 transition-transform">
                      Смотреть проекты
                      <FaArrowRight className="ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Как это работает */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-10 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 mobile-text-balance">Как это работает</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mobile-text-balance">
                Мы упростили процесс поиска и поддержки благотворительных проектов
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              <motion.div 
                className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-primary-600 to-secondary-600 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                  1
                </div>
                <div className="bg-primary-50 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6">
                  <FaRegLightbulb className="text-primary-600 text-xl sm:text-2xl" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Пройдите тест</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Ответьте на несколько простых вопросов, чтобы мы могли определить, какие направления благотворительности вам ближе всего.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-primary-600 to-secondary-600 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                  2
                </div>
                <div className="bg-blue-50 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6">
                  <FaHandHoldingHeart className="text-blue-600 text-xl sm:text-2xl" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Выберите проект</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Изучите подобранные специально для вас проекты и выберите тот, который вдохновляет вас больше всего.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-primary-600 to-secondary-600 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                  3
                </div>
                <div className="bg-green-50 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6">
                  <FaRegCheckCircle className="text-green-600 text-xl sm:text-2xl" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Сделайте вклад</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Поддержите выбранный проект и следите за его прогрессом. Вы всегда будете знать, как используются ваши средства.
                </p>
              </motion.div>
            </div>
            
            <div className="text-center mt-8 sm:mt-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block w-full sm:w-auto"
              >
                <Link 
                  href="/about" 
                  className="inline-flex items-center justify-center w-full sm:w-auto py-3 sm:py-4 px-6 sm:px-8 bg-white text-gray-700 font-bold rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 shadow-sm hover:shadow transition-all"
                >
                  Узнать больше
                  <FaArrowRight className="ml-2" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 sm:py-20">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div 
              className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative p-8 sm:p-12 md:p-16">
                <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FFFFFF" d="M42.8,-65.2C54.9,-56.3,63.7,-42.8,69.2,-28.1C74.7,-13.4,76.9,2.5,73.5,17.7C70.1,32.9,61.1,47.4,48.6,57.3C36.1,67.2,20.1,72.5,3.7,68.8C-12.7,65.1,-29.5,52.4,-42.3,39.2C-55.1,26,-63.9,12.5,-67.1,-3.2C-70.3,-18.9,-67.9,-36.8,-58.3,-48.9C-48.7,-61,-31.9,-67.3,-15.6,-69.1C0.7,-70.9,16.5,-68.2,30.7,-74.1C44.9,-80,57.5,-94.5,42.8,-65.2Z" transform="translate(100 100)" />
                  </svg>
                </div>
                <div className="relative z-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 mobile-text-balance">
                    Начните помогать уже сегодня
                  </h2>
                  <p className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mobile-text-balance">
                    Пройдите короткий тест и найдите проекты, которые соответствуют вашим ценностям и интересам.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto"
                    >
                      <Link 
                        href="/quiz" 
                        className="inline-block w-full sm:w-auto text-center py-3 sm:py-4 px-6 sm:px-8 bg-white text-primary-600 font-bold rounded-xl shadow-md hover:shadow-lg transition-all"
                      >
                        Пройти тест
                      </Link>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto"
                    >
                      <Link 
                        href="/projects" 
                        className="inline-block w-full sm:w-auto text-center py-3 sm:py-4 px-6 sm:px-8 bg-white/10 text-white font-bold rounded-xl border border-white/30 hover:bg-white/20 transition-all"
                      >
                        Смотреть все проекты
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
} 