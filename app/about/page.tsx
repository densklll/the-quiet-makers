'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaLightbulb, FaShieldAlt, FaChartLine, FaSearch, FaRegCreditCard, FaRegChartBar, FaLeaf, FaPaw } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      
      <main className="overflow-hidden pt-20">
        {/* Hero секция */}
        <section className="py-12 md:py-20 relative bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Мы делаем благотворительность <span className="text-primary-300">доступной и прозрачной</span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
                    Наша миссия — соединять людей с проверенными благотворительными проектами, которые им действительно близки.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/quiz" 
                      className="inline-block py-3 px-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 transform text-center"
                    >
                      Пройти тест
                    </Link>
                    <Link 
                      href="/projects" 
                      className="inline-block py-3 px-6 bg-white text-primary-600 font-bold rounded-xl border border-primary-200 shadow-sm hover:shadow-md transition-all hover:scale-105 transform text-center"
                    >
                      Смотреть проекты
                    </Link>
                  </div>
                </motion.div>
              </div>
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative z-10">
                    <img 
                      src="/images/about-hero.jpg" 
                      alt="Люди помогают друг другу" 
                      className="rounded-2xl shadow-xl"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary-100 rounded-full z-0"></div>
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-100 rounded-full z-0"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Секция Миссия и Видение */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <motion.div 
                className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="bg-primary-50 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm">
                  <FaHandHoldingHeart className="text-primary-600 text-2xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-600 mb-4">Наша миссия</h3>
                <p className="text-gray-700 text-base sm:text-lg">
                  Мы стремимся сделать благотворительность доступной и прозрачной для каждого. Наша платформа соединяет людей с проверенными проектами, которые соответствуют их ценностям и интересам. Мы верим, что технологии могут сделать помощь другим простой, безопасной и эффективной.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="bg-secondary-50 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm">
                  <FaLeaf className="text-secondary-600 text-2xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-600 mb-4">Наше видение</h3>
                <p className="text-gray-700 text-base sm:text-lg">
                  Мы видим мир, где каждый человек может легко найти и поддержать благотворительные проекты, которые резонируют с его личными ценностями. Мы стремимся создать экосистему, где благотворительность становится частью повседневной жизни, а каждое пожертвование имеет измеримое влияние.
                </p>
              </motion.div>
            </div>
            
            <div className="mt-16">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-600 mb-6">Наши ценности</h2>
                <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
                  Принципы, которыми мы руководствуемся в нашей работе
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <motion.div 
                  className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 sm:p-8 shadow-sm border border-primary-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm">
                    <FaPaw className="text-primary-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-600 mb-4">Доверие и прозрачность</h3>
                  <p className="text-gray-700 text-base">
                    Мы тщательно проверяем каждый проект и обеспечиваем полную прозрачность использования средств. Вы всегда знаете, куда идут ваши пожертвования и какое влияние они оказывают.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl p-6 sm:p-8 shadow-sm border border-secondary-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm">
                    <FaHandHoldingHeart className="text-secondary-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-600 mb-4">Персонализация</h3>
                  <p className="text-gray-700 text-base">
                    Мы верим, что благотворительность должна быть личной. Наша платформа помогает найти проекты, которые соответствуют вашим ценностям и интересам, делая опыт благотворительности более значимым.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 sm:p-8 shadow-sm border border-amber-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm">
                    <FaChartLine className="text-amber-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-600 mb-4">Технологии, которые работают на вас</h3>
                  <p className="text-gray-700 text-base">
                    Мы используем современные решения, чтобы сделать благотворительность удобной, безопасной и персонализированной. Платформа сама подберёт проекты, которые вам близки, и покажет их влияние.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Секция Как это работает */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-600 mb-6">Как это работает</h2>
              <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
                Мы упростили процесс поиска и поддержки благотворительных проектов
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-primary-600 to-secondary-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                  1
                </div>
                <div className="bg-primary-50 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                  <FaLightbulb className="text-primary-600 text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-600 mb-3">Короткий тест интересов</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Несколько простых вопросов помогают понять, какие направления благотворительности вам ближе.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-primary-600 to-secondary-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                  2
                </div>
                <div className="bg-blue-50 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                  <FaSearch className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-600 mb-3">Подбор проектов</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Платформа подбирает список проверенных проектов, которые соответствуют вашим ответам.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-primary-600 to-secondary-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                  3
                </div>
                <div className="bg-green-50 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                  <FaShieldAlt className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-600 mb-3">Прозрачность и отчётность</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  У каждого проекта открыто описаны цели и прогресс, чтобы было понятно, куда направляется поддержка.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-primary-600 to-secondary-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                  4
                </div>
                <div className="bg-purple-50 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                  <FaRegCreditCard className="text-purple-600 text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-600 mb-3">Простое пожертвование</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Выберите проект и сделайте пожертвование всего за несколько кликов через удобную платёжную систему.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-primary-600 to-secondary-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                  5
                </div>
                <div className="bg-amber-50 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                  <FaRegChartBar className="text-amber-600 text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-600 mb-3">Измеримый результат</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Мы показываем, как ваш вклад меняет жизни. Следите за прогрессом и будьте уверены в своём выборе.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Секция CTA */}
        <section className="py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div 
              className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative p-8 md:p-12 lg:p-16">
                <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FFFFFF" d="M42.8,-65.2C54.9,-56.3,63.7,-42.8,69.2,-28.1C74.7,-13.4,76.9,2.5,73.5,17.7C70.1,32.9,61.1,47.4,48.6,57.3C36.1,67.2,20.1,72.5,3.7,68.8C-12.7,65.1,-29.5,52.4,-42.3,39.2C-55.1,26,-63.9,12.5,-67.1,-3.2C-70.3,-18.9,-67.9,-36.8,-58.3,-48.9C-48.7,-61,-31.9,-67.3,-15.6,-69.1C0.7,-70.9,16.5,-68.2,30.7,-74.1C44.9,-80,57.5,-94.5,42.8,-65.2Z" transform="translate(100 100)" />
                  </svg>
                </div>
                <div className="relative z-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    Узнайте, как легко вы можете помочь. Ответьте на несколько вопросов и выберите проект.
                  </h2>
                  <p className="text-white text-base sm:text-lg mb-8 max-w-2xl">
                    Пройдите короткий тест и найдите проекты, которые вам действительно близки.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/quiz" 
                      className="inline-block py-3 sm:py-4 px-6 sm:px-8 bg-white text-primary-600 font-bold rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 transform text-center"
                    >
                      Начать тест
                    </Link>
                    <Link 
                      href="/projects" 
                      className="inline-block py-3 sm:py-4 px-6 sm:px-8 bg-white/10 text-white font-bold rounded-xl border border-white/30 hover:bg-white/20 transition-all hover:scale-105 transform text-center"
                    >
                      Посмотреть все проекты
                    </Link>
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