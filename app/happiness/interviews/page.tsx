'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaQuoteLeft, FaArrowRight } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function InterviewsPage() {
  return (
    <main>
      <Header />
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Интервью с экспертами</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Беседы с философами, психологами и духовными лидерами о том, что такое счастье и как его достичь через помощь другим
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-12">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-blue-100 flex items-center justify-center p-8">
                  <div className="w-48 h-48 rounded-full bg-blue-200 flex items-center justify-center">
                    <span className="text-blue-500 font-bold text-xl">Проф. Иванов А.С.</span>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="text-blue-500 mb-2">
                    <FaQuoteLeft size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    "Нейробиология счастья: как альтруизм влияет на мозг"
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Профессор нейробиологии Александр Иванов рассказывает о том, как акты доброты и помощи другим активируют центры удовольствия в мозге и способствуют выработке гормонов счастья.
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm text-gray-500">Опубликовано: 10 февраля 2023</span>
                    </div>
                    <Link href="/happiness/interviews/1" className="flex items-center text-sky-500 font-medium hover:underline">
                      Читать интервью <FaArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-purple-100 flex items-center justify-center p-8">
                  <div className="w-48 h-48 rounded-full bg-purple-200 flex items-center justify-center">
                    <span className="text-purple-500 font-bold text-xl">Др. Петрова Е.В.</span>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="text-purple-500 mb-2">
                    <FaQuoteLeft size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    "Психология счастья: почему помощь другим делает нас счастливее"
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Доктор психологических наук Елена Петрова объясняет психологические механизмы, которые связывают благотворительность и ощущение счастья, и как это влияет на наше психологическое благополучие.
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm text-gray-500">Опубликовано: 5 марта 2023</span>
                    </div>
                    <Link href="/happiness/interviews/2" className="flex items-center text-sky-500 font-medium hover:underline">
                      Читать интервью <FaArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-amber-100 flex items-center justify-center p-8">
                  <div className="w-48 h-48 rounded-full bg-amber-200 flex items-center justify-center">
                    <span className="text-amber-500 font-bold text-xl">Лама Дорже</span>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="text-amber-500 mb-2">
                    <FaQuoteLeft size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    "Буддийский взгляд на счастье и сострадание"
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Лама Дорже делится буддийским пониманием счастья, объясняя, почему сострадание и помощь другим являются ключевыми элементами достижения внутренней гармонии и истинного счастья.
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm text-gray-500">Опубликовано: 20 апреля 2023</span>
                    </div>
                    <Link href="/happiness/interviews/3" className="flex items-center text-sky-500 font-medium hover:underline">
                      Читать интервью <FaArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-emerald-100 flex items-center justify-center p-8">
                  <div className="w-48 h-48 rounded-full bg-emerald-200 flex items-center justify-center">
                    <span className="text-emerald-500 font-bold text-xl">Проф. Смирнов В.Д.</span>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="text-emerald-500 mb-2">
                    <FaQuoteLeft size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    "Философия счастья: от Аристотеля до современности"
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Профессор философии Владимир Смирнов прослеживает эволюцию понимания счастья в философии от античности до наших дней, и как концепция служения другим всегда была центральной в этих размышлениях.
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm text-gray-500">Опубликовано: 15 мая 2023</span>
                    </div>
                    <Link href="/happiness/interviews/4" className="flex items-center text-sky-500 font-medium hover:underline">
                      Читать интервью <FaArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/happiness/interviews/all" className="btn-primary">
              Все интервью
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 