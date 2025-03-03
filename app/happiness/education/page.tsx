'use client';

import React from 'react';
import Link from 'next/link';
import { FaGraduationCap, FaBook, FaVideo, FaPodcast } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function EducationPage() {
  return (
    <main>
      <Header />
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Образовательные материалы</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Изучите, как добрые дела влияют на наше психологическое благополучие и помогают найти смысл жизни
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <FaBook className="text-indigo-500 text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Статьи и исследования</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Научные статьи и исследования о влиянии благотворительности на психологическое благополучие человека.
              </p>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <h3 className="font-bold text-gray-800 mb-1">Нейробиология альтруизма</h3>
                    <p className="text-gray-600 text-sm">Как помощь другим активирует центры удовольствия в мозге</p>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <h3 className="font-bold text-gray-800 mb-1">Психология счастья</h3>
                    <p className="text-gray-600 text-sm">Исследование связи между благотворительностью и уровнем счастья</p>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <h3 className="font-bold text-gray-800 mb-1">Эффект помощи</h3>
                    <p className="text-gray-600 text-sm">Как помощь другим снижает уровень стресса и тревоги</p>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mr-4">
                  <FaVideo className="text-rose-500 text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Видеокурсы</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Образовательные видеокурсы о том, как найти счастье через помощь другим и создание смысла.
              </p>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <h3 className="font-bold text-gray-800 mb-1">Путь к счастью через доброту</h3>
                    <p className="text-gray-600 text-sm">6-недельный курс от психологов и философов</p>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <h3 className="font-bold text-gray-800 mb-1">Практики осознанной благотворительности</h3>
                    <p className="text-gray-600 text-sm">Как сделать помощь другим частью своей жизни</p>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <h3 className="font-bold text-gray-800 mb-1">Философия счастья</h3>
                    <p className="text-gray-600 text-sm">Лекции от ведущих философов о счастье и смысле жизни</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <FaPodcast className="text-amber-500 text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Подкасты</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Интервью и дискуссии о счастье, смысле и влиянии благотворительности на жизнь.
              </p>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <h3 className="font-bold text-gray-800 mb-1">Разговоры о счастье</h3>
                    <p className="text-gray-600 text-sm">Еженедельные интервью с экспертами о счастье</p>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <h3 className="font-bold text-gray-800 mb-1">Истории тихих героев</h3>
                    <p className="text-gray-600 text-sm">Подкаст о людях, которые меняют мир своими действиями</p>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <h3 className="font-bold text-gray-800 mb-1">Философия благотворительности</h3>
                    <p className="text-gray-600 text-sm">Дискуссии о моральных и этических аспектах помощи</p>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                  <FaGraduationCap className="text-emerald-500 text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Практические руководства</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Пошаговые руководства о том, как начать помогать и найти свой путь в благотворительности.
              </p>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <h3 className="font-bold text-gray-800 mb-1">Как начать помогать</h3>
                    <p className="text-gray-600 text-sm">Руководство для начинающих в благотворительности</p>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <h3 className="font-bold text-gray-800 mb-1">Создание локальных инициатив</h3>
                    <p className="text-gray-600 text-sm">Как организовать благотворительный проект в своем районе</p>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <h3 className="font-bold text-gray-800 mb-1">Эффективная благотворительность</h3>
                    <p className="text-gray-600 text-sm">Как максимизировать положительное влияние ваших действий</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 