export type SupportedLocale = 'en' | 'ru';

export const SUPPORTED_LOCALES: SupportedLocale[] = ['en', 'ru'];
export const DEFAULT_LOCALE: SupportedLocale = 'en';

export interface Dictionary {
  common: {
    appName: string;
    nav: {
      projects: string;
      quiz: string;
      about: string;
      favorites: string;
    };
    auth: {
      login: string;
      register: string;
      logout: string;
    };
    actions: {
      learnMore: string;
      viewProjects: string;
      findProject: string;
      backToProjects: string;
    };
    misc: {
      language: string;
      english: string;
      russian: string;
    };
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
      bannerBottom: string;
      statHelped: string;
      statPeople: string;
    };
    categories: {
      title: string;
      subtitle: string;
      people: { title: string; desc: string; view: string };
      animals: { title: string; desc: string; view: string };
      environment: { title: string; desc: string; view: string };
    };
    howItWorks: {
      title: string;
      subtitle: string;
      steps: {
        search: { title: string; desc: string };
        choose: { title: string; desc: string };
        support: { title: string; desc: string };
      };
    };
  };
  login: {
    title: string;
    email: string;
    password: string;
    rememberMe: string;
    forgotPassword: string;
    submit: string;
    noAccount: string;
    register: string;
    or: string;
    providers: { google: string; vk: string };
    errors: { fillAll: string };
    placeholders: { email: string; password: string };
  };
  register: {
    title: string;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    agreeTerms: string;
    submit: string;
    haveAccount: string;
    login: string;
    errors: { fillAll: string; passwordMismatch: string; mustAgree: string };
    placeholders: { name: string; email: string; password: string; confirmPassword: string };
  };
  projects: {
    title: string;
    fromQuiz: string;
    inCategories: string;
    withFormat: string;
    searchPlaceholder: string;
    filters: { title: string; clear: string };
    formats: { oneTime: string; recurring: string; volunteer: string };
    categories: { people: string; animals: string; nature: string };
    tags: {
      people: string; charity: string; animals: string; environment: string; children: string; nature: string;
    };
  };
  projectDetails: {
    back: string;
    collected: string;
    of: string;
    collectedPercent: string;
    remaining: string;
    about: string;
    donate: string;
    chooseAmount: string;
    monthly: string;
    oneTime: string;
    customAmount: string;
    donateNow: string;
    successTitle: string;
    successText: string;
  };
  favorites: {
    title: string;
    subtitle: string;
    remove: string;
    empty: string;
  };
}

import { en } from './dictionaries/en';
import { ru } from './dictionaries/ru';

export const dictionaries: Record<SupportedLocale, Dictionary> = { en, ru };

export function getDictionary(locale: string): Dictionary {
  if (locale === 'ru') return dictionaries.ru;
  return dictionaries.en;
}