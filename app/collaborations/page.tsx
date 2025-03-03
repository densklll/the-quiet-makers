'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaHandshake, FaGlobeAmericas, FaUsers, FaArrowRight } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CollaborationsPage() {
  return (
    <main>
      <Header />
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Наши коллаборации</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы сотрудничаем с проверенными фондами и организуем мини-проекты во время поездок, чтобы максимизировать положительное влияние
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mr-4">
                  <FaHandshake className="text-sky-500 text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Коллаборации с фондами</h2>
              </div>
              <p className="text-gray-600 mb-8">
                Мы сотрудничаем с проверенными фондами для создания совместных проектов, которые усиливают миссию обеих сторон. 
                Наши партнеры проходят тщательную проверку; отчёты по проектам публикуются так, чтобы было понятно, как используются ресурсы.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Фонд "Подари жизнь"</h3>
                  <p className="text-gray-600 mb-4">
                    Совместный проект по поддержке детей с онкологическими заболеваниями. Мы помогаем организовывать образовательные программы для детей, находящихся на длительном лечении.
                  </p>
                  <Link href="/collaborations/funds/1" className="flex items-center text-sky-500 font-medium hover:underline">
                    Подробнее <FaArrowRight className="ml-2" />
                  </Link>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">WWF</h3>
                  <p className="text-gray-600 mb-4">
                    Коллаборация по защите исчезающих видов животных. Мы помогаем привлекать внимание к проблеме и собирать средства на конкретные проекты по сохранению биоразнообразия.
                  </p>
                  <Link href="/collaborations/funds/2" className="flex items-center text-sky-500 font-medium hover:underline">
                    Подробнее <FaArrowRight className="ml-2" />
                  </Link>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Фонд "Старость в радость"</h3>
                  <p className="text-gray-600 mb-4">
                    Совместная программа поддержки пожилых людей в домах престарелых. Мы организуем волонтерские визиты и помогаем улучшать условия проживания.
                  </p>
                  <Link href="/collaborations/funds/3" className="flex items-center text-sky-500 font-medium hover:underline">
                    Подробнее <FaArrowRight className="ml-2" />
                  </Link>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Фонд "Линия жизни"</h3>
                  <p className="text-gray-600 mb-4">
                    Коллаборация по поддержке детей с тяжелыми заболеваниями. Мы помогаем собирать средства на высокотехнологичные операции и реабилитацию.
                  </p>
                  <Link href="/collaborations/funds/4" className="flex items-center text-sky-500 font-medium hover:underline">
                    Подробнее <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
              
              <div className="text-center">
                <Link href="/collaborations/funds" className="btn-primary">
                  Все коллаборации с фондами
                </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                  <FaGlobeAmericas className="text-emerald-500 text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Мини-проекты во время поездок</h2>
              </div>
              <p className="text-gray-600 mb-8">
                Мы организуем локальные акции во время поездок: покупка работ ремесленников, помощь детям, поддержка образовательных инициатив. 
                Это позволяет оказывать точечную помощь и создавать прямую связь между дарителями и получателями.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-amber-500 font-bold">Бали</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Поддержка местных ремесленников</h3>
                      <p className="text-sm text-gray-500">Апрель 2023</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Мы организовали закупку изделий у местных ремесленников и помогли им создать онлайн-платформу для продажи своих работ за рубеж.
                  </p>
                  <Link href="/collaborations/travel/1" className="flex items-center text-sky-500 font-medium hover:underline">
                    Подробнее <FaArrowRight className="ml-2" />
                  </Link>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-emerald-500 font-bold">Непал</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Образовательная программа для детей</h3>
                      <p className="text-sm text-gray-500">Июнь 2023</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Мы помогли местной школе с оборудованием и учебными материалами, а также организовали серию онлайн-уроков с преподавателями из России.
                  </p>
                  <Link href="/collaborations/travel/2" className="flex items-center text-sky-500 font-medium hover:underline">
                    Подробнее <FaArrowRight className="ml-2" />
                  </Link>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-purple-500 font-bold">Грузия</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Поддержка приюта для животных</h3>
                      <p className="text-sm text-gray-500">Август 2023</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Мы организовали сбор средств и закупку необходимых материалов для местного приюта для бездомных животных в Тбилиси.
                  </p>
                  <Link href="/collaborations/travel/3" className="flex items-center text-sky-500 font-medium hover:underline">
                    Подробнее <FaArrowRight className="ml-2" />
                  </Link>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-blue-500 font-bold">Шри-Ланка</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Экологическая инициатива</h3>
                      <p className="text-sm text-gray-500">Октябрь 2023</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Мы помогли местной экологической организации с очисткой пляжей от пластика и организовали образовательные мероприятия для местных жителей.
                  </p>
                  <Link href="/collaborations/travel/4" className="flex items-center text-sky-500 font-medium hover:underline">
                    Подробнее <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
              
              <div className="text-center">
                <Link href="/collaborations/travel" className="btn-primary">
                  Все мини-проекты
                </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <FaUsers className="text-indigo-500 text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Присоединяйтесь к нам</h2>
              </div>
              <p className="text-gray-600 mb-8">
                Мы всегда открыты для новых коллабораций и партнерств. Если у вас есть фонд, инициатива или идея проекта, мы будем рады обсудить возможности сотрудничества.
              </p>
              
              <div className="text-center">
                <Link href="/collaborations/join" className="btn-primary">
                  Предложить коллаборацию
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 