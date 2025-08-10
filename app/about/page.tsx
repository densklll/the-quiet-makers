'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaLightbulb, FaShieldAlt, FaChartLine, FaRobot, FaSearch, FaRegCheckCircle, FaRegCreditCard, FaRegChartBar, FaLeaf, FaPaw } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useI18n } from '@/lib/i18n/I18nContext';

export default function AboutPage() {
  const { t } = useI18n();
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
                    {t('about.hero.title').split('доступной').join('<span class="text-primary-300">доступной</span>')}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
                    {t('about.hero.subtitle')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/quiz" 
                      className="inline-block py-3 px-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 transform text-center"
                    >
                      {t('about.hero.takeQuiz')}
                    </Link>
                    <Link 
                      href="/projects" 
                      className="inline-block py-3 px-6 bg-white text-primary-600 font-bold rounded-xl border border-primary-200 shadow-sm hover:shadow-md transition-all hover:scale-105 transform text-center"
                    >
                      {t('about.hero.viewProjects')}
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
                      alt={t('about.hero.heroAlt')} 
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
                <h3 className="text-xl sm:text-2xl font-bold text-gray-600 mb-4">{t('about.mission.title')}</h3>
                <p className="text-gray-700 text-base sm:text-lg">
                  {t('about.mission.text')}
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
                <h3 className="text-xl sm:text-2xl font-bold text-gray-600 mb-4">{t('about.mission.visionTitle')}</h3>
                <p className="text-gray-700 text-base sm:text-lg">
                  {t('about.mission.visionText')}
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
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-600 mb-6">{t('about.mission.valuesTitle')}</h2>
                <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
                  {t('about.mission.valuesSubtitle')}
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
                  <h3 className="text-xl font-bold text-gray-600 mb-4">{t('about.mission.value1Title')}</h3>
                  <p className="text-gray-700 text-base">
                    {t('about.mission.value1Text')}
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
                  <h3 className="text-xl font-bold text-gray-600 mb-4">{t('about.mission.value2Title')}</h3>
                  <p className="text-gray-700 text-base">
                    {t('about.mission.value2Text')}
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
                  <h3 className="text-xl font-bold text-gray-600 mb-4">{t('about.mission.value3Title')}</h3>
                  <p className="text-gray-700 text-base">
                    {t('about.mission.value3Text')}
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
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-600 mb-6">{t('about.mission.howTitle')}</h2>
              <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
                {t('about.mission.howText')}
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
                  <FaRobot className="text-primary-600 text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-600 mb-3">{t('about.mission.steps.s1Title')}</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  {t('about.mission.steps.s1Text')}
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
                <h3 className="text-lg font-bold text-gray-600 mb-3">{t('about.mission.steps.s2Title')}</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  {t('about.mission.steps.s2Text')}
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
                <h3 className="text-lg font-bold text-gray-600 mb-3">{t('about.mission.steps.s3Title')}</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  {t('about.mission.steps.s3Text')}
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
                <h3 className="text-lg font-bold text-gray-600 mb-3">{t('about.mission.steps.s4Title')}</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  {t('about.mission.steps.s4Text')}
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
                <h3 className="text-lg font-bold text-gray-600 mb-3">{t('about.mission.steps.s5Title')}</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  {t('about.mission.steps.s5Text')}
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
                    {t('about.mission.ctaTitle')}
                  </h2>
                  <p className="text-white text-base sm:text-lg mb-8 max-w-2xl">
                    {t('about.mission.ctaText')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/quiz" 
                      className="inline-block py-3 sm:py-4 px-6 sm:px-8 bg-white text-primary-600 font-bold rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 transform text-center"
                    >
                      {t('about.mission.ctaStart')}
                    </Link>
                    <Link 
                      href="/projects" 
                      className="inline-block py-3 sm:py-4 px-6 sm:px-8 bg-white/10 text-white font-bold rounded-xl border border-white/30 hover:bg-white/20 transition-all hover:scale-105 transform text-center"
                    >
                      {t('about.mission.ctaViewAll')}
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