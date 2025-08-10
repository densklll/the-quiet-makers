"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaEnvelope, FaInstagram, FaTelegram, FaFacebook, FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useI18n } from "@/lib/i18n/I18nContext";

export default function ContactsPage() {
  const { t } = useI18n();
  return (
    <>
      <Header />
      <main className="pt-28 sm:pt-32 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
              {t("contacts.title")}
            </h1>
            <p className="text-gray-600 text-base sm:text-lg">
              {t("contacts.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <motion.a
              href="mailto:info@quietmakers.org"
              className="flex items-center p-5 sm:p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all"
              whileHover={{ y: -4 }}
            >
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <FaEnvelope className="text-primary-600" />
              </div>
              <div className="min-w-0">
                <div className="text-sm text-gray-500">{t("contacts.emailUs")}</div>
                <div className="font-semibold text-gray-800 truncate">info@quietmakers.org</div>
              </div>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/quietmakers?igsh=MWp0d3o3M2FkaGZtNQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-5 sm:p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all"
              whileHover={{ y: -4 }}
            >
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <FaInstagram className="text-pink-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-800">Instagram</div>
                <div className="text-sm text-gray-500">@quietmakers</div>
              </div>
            </motion.a>

            <motion.a
              href="#"
              className="flex items-center p-5 sm:p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all"
              whileHover={{ y: -4 }}
            >
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <FaTelegram className="text-sky-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-800">Telegram</div>
                <div className="text-sm text-gray-500">@quietmakers</div>
              </div>
            </motion.a>

            <motion.a
              href="https://www.tiktok.com/@quietmakers?_t=ZS-8uQdoCfpwNY&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-5 sm:p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all"
              whileHover={{ y: -4 }}
            >
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <FaTiktok className="text-gray-800" />
              </div>
              <div>
                <div className="font-semibold text-gray-800">TikTok</div>
                <div className="text-sm text-gray-500">@quietmakers</div>
              </div>
            </motion.a>

            <motion.a
              href="#"
              className="flex items-center p-5 sm:p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all"
              whileHover={{ y: -4 }}
            >
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <FaTwitter className="text-blue-500" />
              </div>
              <div>
                <div className="font-semibold text-gray-800">Twitter (X)</div>
                <div className="text-sm text-gray-500">@quietmakers</div>
              </div>
            </motion.a>

            <motion.a
              href="#"
              className="flex items-center p-5 sm:p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all"
              whileHover={{ y: -4 }}
            >
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <FaFacebook className="text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-800">Facebook</div>
                <div className="text-sm text-gray-500">The Quiet Makers</div>
              </div>
            </motion.a>
          </div>

          <div className="text-center mt-10">
            <Link href="mailto:info@quietmakers.org" className="inline-flex items-center justify-center py-3 px-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl font-semibold shadow-sm hover:shadow">
              {t("contacts.email")}: info@quietmakers.org
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}