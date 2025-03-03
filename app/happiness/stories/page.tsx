'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaQuoteLeft, FaArrowRight } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function StoriesPage() {
  return (
    <main>
      <Header />
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Истории тихих героев</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Вдохновляющие истории людей, которые нашли счастье и смысл в помощи другим, меняя мир своими небольшими действиями
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-12">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-indigo-100 flex items-center justify-center p-8">
                  <div className="w-48 h-48 rounded-full bg-indigo-200 flex items-center justify-center">
                    <span className="text-indigo-500 font-bold text-xl">Мария К.</span>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="text-indigo-500 mb-2">
                    <FaQuoteLeft size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    "Я нашла свое призвание в помощи бездомным животным"
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Мария, 34 года, бухгалтер из Москвы, пять лет назад начала помогать местному приюту для животных. 
                    Сейчас она координирует сеть волонтеров и говорит, что никогда не была счастливее.
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm text-gray-500">Опубликовано: 15 марта 2023</span>
                    </div>
                    <Link href="/happiness/stories/1" className="flex items-center text-sky-500 font-medium hover:underline">
                      Читать историю <FaArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-emerald-100 flex items-center justify-center p-8">
                  <div className="w-48 h-48 rounded-full bg-emerald-200 flex items-center justify-center">
                    <span className="text-emerald-500 font-bold text-xl">Алексей П.</span>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="text-emerald-500 mb-2">
                    <FaQuoteLeft size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    "Экологические инициативы изменили мою жизнь"
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Алексей, 42 года, IT-специалист из Санкт-Петербурга, организовал движение по очистке парков и лесов. 
                    Его инициатива выросла в крупное сообщество, которое проводит регулярные акции по всему городу.
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm text-gray-500">Опубликовано: 2 апреля 2023</span>
                    </div>
                    <Link href="/happiness/stories/2" className="flex items-center text-sky-500 font-medium hover:underline">
                      Читать историю <FaArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-amber-100 flex items-center justify-center p-8">
                  <div className="w-48 h-48 rounded-full bg-amber-200 flex items-center justify-center">
                    <span className="text-amber-500 font-bold text-xl">Елена С.</span>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="text-amber-500 mb-2">
                    <FaQuoteLeft size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    "Помощь пожилым людям наполнила мою жизнь смыслом"
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Елена, 29 лет, юрист из Казани, начала волонтерскую программу помощи одиноким пожилым людям. 
                    Она рассказывает, как эта деятельность помогла ей преодолеть собственную депрессию и найти новый смысл в жизни.
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm text-gray-500">Опубликовано: 18 мая 2023</span>
                    </div>
                    <Link href="/happiness/stories/3" className="flex items-center text-sky-500 font-medium hover:underline">
                      Читать историю <FaArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-purple-100 flex items-center justify-center p-8">
                  <div className="w-48 h-48 rounded-full bg-purple-200 flex items-center justify-center">
                    <span className="text-purple-500 font-bold text-xl">Дмитрий К.</span>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="text-purple-500 mb-2">
                    <FaQuoteLeft size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    "Образовательные проекты для детей из детских домов"
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Дмитрий, 38 лет, преподаватель из Новосибирска, создал программу дополнительного образования для детей из детских домов. 
                    Он делится тем, как работа с детьми изменила его взгляд на жизнь и профессию.
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm text-gray-500">Опубликовано: 7 июня 2023</span>
                    </div>
                    <Link href="/happiness/stories/4" className="flex items-center text-sky-500 font-medium hover:underline">
                      Читать историю <FaArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/happiness/stories/submit" className="btn-primary">
              Поделиться своей историей
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 