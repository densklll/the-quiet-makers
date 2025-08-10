'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaUser, FaHeart, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/lib/i18n/I18nContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { t, locale, setLocale } = useI18n();
  
  // Определяем, находимся ли мы на главной странице
  const isHomePage = pathname === '/' || pathname === '/the-quiet-makers';
  
  // Отслеживание скролла для изменения стиля хедера
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Варианты анимации для мобильного меню
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };
  
  const navItems = [
    { name: t('common.nav.about'), href: '/about' },
    { name: t('common.nav.how'), href: '/#how' },
    { name: t('common.nav.contact'), href: '/#contact' },
  ];

  const handleToggleLocale = () => {
    setLocale(locale === 'en' ? 'ru' : 'en');
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' 
          : isHomePage 
            ? 'bg-white/80 backdrop-blur-sm py-5' 
            : 'bg-white/95 backdrop-blur-sm py-3'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-10 h-10 mr-3 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl group-hover:shadow-md transition-all duration-300"></div>
              <div className="absolute inset-[3px] bg-white rounded-lg group-hover:inset-[2px] transition-all duration-300"></div>
              <div className="absolute inset-[6px] bg-gradient-to-br from-primary-500 to-secondary-500 rounded-md group-hover:inset-[5px] transition-all duration-300"></div>
            </div>
            <span className={`font-bold text-xl tracking-tight transition-colors duration-300 ${
              isScrolled || !isHomePage ? 'text-gray-800' : 'text-gray-800'
            } group-hover:text-primary-600`}>
              {t('common.brand')}
            </span>
          </Link>
          
          {/* Навигация для десктопа */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              
              return (
                <Link 
                  key={index}
                  href={item.href} 
                  className={`relative px-2 py-1 font-medium transition-all duration-300 ${
                    isScrolled || !isHomePage 
                      ? isActive 
                        ? 'text-primary-600' 
                        : 'text-gray-700 hover:text-primary-600' 
                      : isActive 
                        ? 'text-gray-800' 
                        : 'text-gray-700 hover:text-primary-600'
                  } group`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform duration-300 ${
                    isScrolled || !isHomePage ? 'bg-primary-500' : 'bg-primary-500'
                  } group-hover:scale-x-100 ${isActive ? 'scale-x-100' : ''}`}></span>
                </Link>
              );
            })}
          </nav>
          
          {/* Кнопки: большая CTA, авторизация и переключатель языка для десктопа */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/quiz" 
              className="py-2.5 px-5 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold rounded-lg shadow-sm hover:shadow transition-all"
            >
              {t('common.nav.quiz')}
            </Link>
            <Link 
              href="/favorites" 
              className={`p-2 rounded-full transition-all duration-300 ${
                isScrolled || !isHomePage
                  ? 'text-gray-600 hover:text-primary-500 hover:bg-primary-50' 
                  : 'text-gray-600 hover:text-primary-500 hover:bg-primary-50'
              }`}
              aria-label={t('header.aria.favorites')}
            >
              <FaHeart className="transform hover:scale-110 transition-transform duration-300" />
            </Link>
            <Link 
              href="/login" 
              className={`py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                isScrolled || !isHomePage
                  ? 'text-primary-600 hover:bg-primary-50' 
                  : 'text-primary-600 hover:bg-primary-50'
              }`}
            >
              {t('common.actions.login')}
            </Link>
            <Link 
              href="/register" 
              className="py-2 px-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-medium rounded-lg shadow-sm hover:shadow transition-all duration-300"
            >
              {t('common.actions.register')}
            </Link>
            {/* Переключатель языка */}
            <div className="ml-2">
              <button
                onClick={handleToggleLocale}
                className="py-2 px-3 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                aria-label="Switch language"
              >
                {locale === 'en' ? 'EN' : 'RU'}
              </button>
            </div>
          </div>
          
          {/* Кнопка мобильного меню */}
          <motion.button 
            className="md:hidden p-2 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? t('header.aria.closeMenu') : t('header.aria.openMenu')}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isMenuOpen ? 'close' : 'open'}
                initial={{ opacity: 0, rotate: isMenuOpen ? -90 : 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: isMenuOpen ? 90 : -90 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? (
                  <FaTimes className={isScrolled || !isHomePage ? 'text-gray-800' : 'text-gray-800'} size={24} />
                ) : (
                  <FaBars className={isScrolled || !isHomePage ? 'text-gray-800' : 'text-gray-800'} size={24} />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
      
      {/* Мобильное меню */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-white/95 backdrop-blur-sm shadow-sm overflow-hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-5">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 }}
                >
                  <Link 
                    href="/quiz" 
                    className="py-3 px-4 text-center bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold rounded-xl shadow-sm hover:shadow transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('common.nav.quiz')}
                  </Link>
                </motion.div>
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link 
                        href={item.href} 
                        className={`text-lg font-medium block transition-colors duration-300 ${
                          isActive ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div 
                  className="pt-5 mt-2 border-t border-gray-100 flex flex-col space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link 
                    href="/favorites" 
                    className="text-gray-700 hover:text-primary-600 font-medium flex items-center transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FaHeart className="mr-3 text-primary-500" /> {t('common.labels.favorites')}
                  </Link>
                  <div className="flex flex-col space-y-3 pt-2">
                    <Link 
                      href="/login" 
                      className="py-3 px-4 text-center border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 font-medium rounded-xl transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t('common.actions.login')}
                    </Link>
                    <Link 
                      href="/register" 
                      className="py-3 px-4 text-center bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-medium rounded-xl shadow-sm hover:shadow transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t('common.actions.register')}
                    </Link>
                    {/* Переключатель языка (моб.) */}
                    <button
                      onClick={() => { handleToggleLocale(); setIsMenuOpen(false); }}
                      className="py-3 px-4 text-center border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 font-medium rounded-xl transition-all duration-300"
                    >
                      {locale === 'en' ? 'EN' : 'RU'}
                    </button>
                  </div>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 