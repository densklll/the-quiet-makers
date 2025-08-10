"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Locale = "en" | "ru";

export type Messages = Record<string, any>;

interface I18nContextValue {
  locale: Locale;
  messages: Messages;
  t: (key: string, vars?: Record<string, string | number>) => string;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name: string, value: string, days = 365) {
  if (typeof document === "undefined") return;
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function getPath(object: any, path: string): any {
  return path.split(".").reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), object);
}

export function I18nProvider({ initialLocale = "en", children }: { initialLocale?: Locale; children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [messages, setMessages] = useState<Messages>({});

  useEffect(() => {
    const cookieLocale = getCookie("locale");
    if (cookieLocale === "en" || cookieLocale === "ru") {
      setLocaleState(cookieLocale);
    }
  }, []);

  useEffect(() => {
    async function loadMessages() {
      try {
        const dict = await (locale === "ru"
          ? import("./dictionaries/ru").then(m => m.default)
          : import("./dictionaries/en").then(m => m.default));
        setMessages(dict);
      } catch (e) {
        console.error("Failed to load messages for locale:", locale, e);
        setMessages({});
      }
    }
    loadMessages();
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const setLocale = (loc: Locale) => {
    setLocaleState(loc);
    setCookie("locale", loc);
  };

  const t = useMemo(() => {
    return (key: string, vars?: Record<string, string | number>) => {
      const template = getPath(messages, key) ?? key;
      if (typeof template !== "string") return key;
      if (!vars) return template;
      return template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ""));
    };
  }, [messages]);

  const value = useMemo<I18nContextValue>(() => ({ locale, messages, t, setLocale }), [locale, messages, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}