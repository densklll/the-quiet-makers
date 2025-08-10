'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaUsers, FaPaw, FaTree, FaArrowRight, FaRegCheckCircle } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainImage from '@/public/images/main-image.jpeg';
import { useI18n } from '../components/I18nProvider';

export default function LocalizedHomePage() {
  const { t } = useI18n();

  return (
    <>
      <Header />

      <main className="min-h-screen">
        <section className="relative bg-gradient-to-b from-gray-50 to-white pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-100 rounded-full opacity-30 blur-3xl" />
            <div className="absolute top-60 -left-20 w-72 h-72 bg-secondary-100 rounded-full opacity-30 blur-3xl" />
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
                      {t.home.hero.title}
                    </span>
                  </h1>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-xl leading-relaxed mobile-text-balance text-center mx-auto">
                  {t.home.hero.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href="/projects" className="w-full sm:w-auto inline-block py-3 sm:py-4 px-6 sm:px-8 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all text-center">
                      {t.home.hero.ctaPrimary}
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href="/about" className="w-full sm:w-auto inline-block py-3 sm:py-4 px-6 sm:px-8 bg-white text-gray-700 font-bold rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 shadow-sm hover:shadow transition-all text-center">
                      {t.home.hero.ctaSecondary}
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
                  <Image src={MainImage} alt="hero" fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 pb-20 md:pb-16">
                    <p className="text-white text-xl font-medium">{t.home.hero.bannerBottom}</p>
                  </div>
                </div>

                <div className="absolute -bottom-10 right-6 md:right-6 bg-white rounded-xl shadow-lg p-3 sm:p-4 max-w-xs">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="bg-green-50 p-2 sm:p-3 rounded-full">
                      <FaRegCheckCircle className="text-green-600 text-base sm:text-xl" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-600">{t.home.hero.statHelped}</p>
                      <p className="font-bold text-sm sm:text-base text-gray-800">{t.home.hero.statPeople}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-10 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 mobile-text-balance">{t.home.categories.title}</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mobile-text-balance">{t.home.categories.subtitle}</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <motion.div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden shadow-sm border border-blue-100 group" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                <Link href="/projects?categories=people" className="block">
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <Image src="https://placehold.co/800x600/3b82f6/FFFFFF?text=People" alt="people" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className="bg-white rounded-full p-2 sm:p-3 mr-3 sm:mr-4 shadow-sm">
                        <FaUsers className="text-blue-600 text-lg sm:text-xl" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800">{t.home.categories.people.title}</h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{t.home.categories.people.desc}</p>
                    <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                      {t.home.categories.people.view}
                      <FaArrowRight className="ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>

              <motion.div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl overflow-hidden shadow-sm border border-amber-100 group" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                <Link href="/projects?categories=animals" className="block">
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <Image src="https://placehold.co/800x600/f59e0b/FFFFFF?text=Animals" alt="animals" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className="bg-white rounded-full p-2 sm:p-3 mr-3 sm:mr-4 shadow-sm">
                        <FaPaw className="text-amber-600 text-lg sm:text-xl" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800">{t.home.categories.animals.title}</h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{t.home.categories.animals.desc}</p>
                    <div className="flex items-center text-amber-600 font-medium group-hover:translate-x-2 transition-transform">
                      {t.home.categories.animals.view}
                      <FaArrowRight className="ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>

              <motion.div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl overflow-hidden shadow-sm border border-green-100 group" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 }} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                <Link href="/projects?categories=environment" className="block">
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <Image src="https://placehold.co/800x600/10b981/FFFFFF?text=Environment" alt="environment" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className="bg-white rounded-full p-2 sm:p-3 mr-3 sm:mr-4 shadow-sm">
                        <FaTree className="text-green-600 text-lg sm:text-xl" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800">{t.home.categories.environment.title}</h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{t.home.categories.environment.desc}</p>
                    <div className="flex items-center text-green-600 font-medium group-hover:translate-x-2 transition-transform">
                      {t.home.categories.environment.view}
                      <FaArrowRight className="ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The rest of sections like How it works could be added similarly using t.home.howItWorks */}
      </main>

      <Footer />
    </>
  );
}