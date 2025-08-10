import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export function generateStaticParams() {
  return [{}];
}

export default function LocalizedFavoritesPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Favorites</h1>
          <p className="text-gray-600">This page will be localized soon.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}