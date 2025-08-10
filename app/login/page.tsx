'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaEnvelope, FaLock, FaGoogle, FaVk } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useI18n } from '@/lib/i18n/I18nContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const { t } = useI18n();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Простая валидация
    if (!email || !password) {
      setError(t('auth.login.errorFillAll'));
      return;
    }
    
    // Здесь будет логика авторизации
    console.log('Авторизация с данными:', { email, password, rememberMe });
    
    // Сбрасываем ошибку
    setError('');
  };
  
  return (
    <>
      <Header />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t('auth.login.title')}</h1>
              
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email" className="input-label">
                    {t('common.labels.email')}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      className="input-field pl-10"
                      placeholder={t('common.placeholders.enterEmail')}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <div className="flex justify-between items-center mb-1">
                    <label htmlFor="password" className="input-label">
                      {t('common.labels.password')}
                    </label>
                    <Link href="/forgot-password" className="text-sm text-sky-500 hover:text-sky-600">
                      {t('common.labels.forgotPassword')}
                    </Link>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="text-gray-400" />
                    </div>
                    <input
                      type="password"
                      id="password"
                      className="input-field pl-10"
                      placeholder={t('common.placeholders.enterPassword')}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="flex items-center mb-6">
                  <input
                    type="checkbox"
                    id="remember-me"
                    className="h-4 w-4 text-sky-500 border-gray-300 rounded focus:ring-sky-500"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    {t('common.labels.rememberMe')}
                  </label>
                </div>
                
                <button type="submit" className="btn-primary w-full mb-4">
                  {t('auth.login.login')}
                </button>
                
                <div className="text-center text-sm text-gray-600 mb-6">
                  {t('common.labels.noAccount')}{' '}
                  <Link href="/register" className="text-sky-500 hover:text-sky-600">
                    {t('auth.login.register')}
                  </Link>
                </div>
                
                <div className="relative flex items-center justify-center mb-6">
                  <div className="border-t border-gray-200 absolute w-full"></div>
                  <div className="bg-white px-4 relative z-10 text-sm text-gray-500">{t('common.labels.or')}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="flex items-center justify-center py-2.5 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    <FaGoogle className="text-red-500 mr-2" /> {t('auth.login.google')}
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center py-2.5 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    <FaVk className="text-blue-600 mr-2" /> {t('auth.login.vk')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
} 