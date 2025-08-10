'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useI18n } from './I18nProvider';
import { SUPPORTED_LOCALES, SupportedLocale } from '@/lib/i18n';

export default function LanguageSwitcher() {
  const { locale, t } = useI18n();
  const pathname = usePathname();
  const router = useRouter();

  const handleSwitch = (target: SupportedLocale) => {
    if (!pathname) return;
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length === 0) {
      router.push(`/${target}`);
      return;
    }
    if (SUPPORTED_LOCALES.includes(segments[0] as SupportedLocale)) {
      segments[0] = target;
    } else {
      segments.unshift(target);
    }
    router.push('/' + segments.join('/'));
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleSwitch('en')}
        className={`text-sm px-2 py-1 rounded ${locale === 'en' ? 'text-primary-600 font-semibold' : 'text-gray-600 hover:text-primary-600'}`}
        aria-label={t.common.misc.english}
      >
        EN
      </button>
      <span className="text-gray-300">|</span>
      <button
        onClick={() => handleSwitch('ru')}
        className={`text-sm px-2 py-1 rounded ${locale === 'ru' ? 'text-primary-600 font-semibold' : 'text-gray-600 hover:text-primary-600'}`}
        aria-label={t.common.misc.russian}
      >
        RU
      </button>
    </div>
  );
}