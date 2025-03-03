'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaEnvelope, FaLock, FaGoogle, FaVk } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Простая валидация
    if (!email || !password) {
      setError('Пожалуйста, заполните все поля');
      return;
    }
    
    // Здесь будет логика авторизации
    console.log('Авторизация с данными:', { email, password, rememberMe });
    
    // Сбрасываем ошибку
    setError('');
    
    // В реальном приложении здесь был бы редирект на главную страницу
    // или другую страницу в зависимости от роли пользователя
  };
  
  return (
    <>
      <Header />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Вход в аккаунт</h1>
              
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email" className="input-label">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      className="input-field pl-10"
                      placeholder="Введите ваш email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <div className="flex justify-between items-center mb-1">
                    <label htmlFor="password" className="input-label">
                      Пароль
                    </label>
                    <Link href="/forgot-password" className="text-sm text-sky-500 hover:text-sky-600">
                      Забыли пароль?
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
                      placeholder="Введите ваш пароль"
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
                    Запомнить меня
                  </label>
                </div>
                
                <button type="submit" className="btn-primary w-full mb-4">
                  Войти
                </button>
                
                <div className="text-center text-sm text-gray-600 mb-6">
                  Нет аккаунта?{' '}
                  <Link href="/register" className="text-sky-500 hover:text-sky-600">
                    Зарегистрироваться
                  </Link>
                </div>
                
                <div className="relative flex items-center justify-center mb-6">
                  <div className="border-t border-gray-200 absolute w-full"></div>
                  <div className="bg-white px-4 relative z-10 text-sm text-gray-500">или</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="flex items-center justify-center py-2.5 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    <FaGoogle className="text-red-500 mr-2" /> Google
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center py-2.5 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    <FaVk className="text-blue-600 mr-2" /> ВКонтакте
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