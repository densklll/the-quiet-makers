'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaInstagram, FaTelegram, FaEnvelope, FaTiktok, FaArrowRight } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useI18n } from '@/lib/i18n/I18nContext';

export default function ContactPage() {
  const { t } = useI18n();
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10 sm:mb-14">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-balance">
              {t('common.nav.contact')}
            </h1>
            <p className="text-gray-600 text-lg mobile-text-balance">
              {t('footer.tagline')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-10">
            <motion.a
              href="mailto:info@quietmakers.org"
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex items-center"
              whileHover={{ y: -3 }}
            >
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <FaEnvelope className="text-gray-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Email</div>
                <div className="text-gray-800 font-semibold">info@quietmakers.org</div>
              </div>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/quietmakers?igsh=MWp0d3o3M2FkaGZtNQ%3D%3D&utm_source=qr"
              target="_blank" rel="noopener noreferrer"
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex items-center"
              whileHover={{ y: -3 }}
            >
              <div className="bg-pink-100 p-3 rounded-full mr-4">
                <FaInstagram className="text-pink-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Instagram</div>
                <div className="text-gray-800 font-semibold">@quietmakers</div>
              </div>
            </motion.a>

            <motion.a
              href="https://t.me/quietmakers"
              target="_blank" rel="noopener noreferrer"
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex items-center"
              whileHover={{ y: -3 }}
            >
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaTelegram className="text-blue-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Telegram</div>
                <div className="text-gray-800 font-semibold">@quietmakers</div>
              </div>
            </motion.a>

            <motion.a
              href="https://www.tiktok.com/@quietmakers?_t=ZS-8uQdoCfpwNY&_r=1"
              target="_blank" rel="noopener noreferrer"
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex items-center"
              whileHover={{ y: -3 }}
            >
              <div className="bg-black/5 p-3 rounded-full mr-4">
                <FaTiktok className="text-black" />
              </div>
              <div>
                <div className="text-sm text-gray-500">TikTok</div>
                <div className="text-gray-800 font-semibold">@quietmakers</div>
              </div>
            </motion.a>
          </div>

          <div className="text-center">
            <Link href="/quiz" className="inline-flex items-center py-3 px-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl font-semibold shadow-sm hover:shadow transition-all">
              {t('common.actions.takeQuiz')}
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
