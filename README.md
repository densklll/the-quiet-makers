# The Quiet Makers

[![Deploy to GitHub Pages](https://github.com/densklll/the-quiet-makers/actions/workflows/deploy.yml/badge.svg)](https://github.com/densklll/the-quiet-makers/actions/workflows/deploy.yml)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-FF0055?logo=framer&logoColor=white)](https://www.framer.com/motion/)

**[Открыть демо на GitHub Pages](https://densklll.github.io/the-quiet-makers/)**

Платформа для поиска благотворительных проектов, которые совпадают с вашими ценностями и интересами. Соединяем тех, кто хочет помочь, с теми, кому нужна поддержка.

---

## О проекте

The Quiet Makers помогает находить и поддерживать проверенные проекты. Фокус — на персональном подборе через короткий тест и удобном каталоге с фильтрами.

## Возможности

- **Эмоциональный тест** — подбор направлений и проектов по ответам на вопросы
- **Каталог проектов** — фильтрация и карточки с ключевой информацией
- **Страницы проектов** — цели, прогресс, способы поддержки
- **Личный кабинет** — избранное и отслеживание интересующих инициатив

## Технологии

| Слой        | Стек                          |
| ----------- | ----------------------------- |
| **Фреймворк** | Next.js 14 (App Router)       |
| **UI**      | React 18, Tailwind CSS        |
| **Анимации**| Framer Motion                 |
| **Иконки**  | React Icons, Headless UI      |
| **Сборка**  | Статический экспорт (`output: 'export'`) |
| **Деплой**  | GitHub Actions → GitHub Pages |

## Быстрый старт

```bash
git clone https://github.com/densklll/the-quiet-makers.git
cd the-quiet-makers
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

### Скрипты

| Команда      | Назначение              |
| ------------ | ----------------------- |
| `npm run dev`   | Режим разработки     |
| `npm run build` | Продакшен-сборка     |
| `npm run start` | Сервер после сборки  |
| `npm run lint`  | Проверка ESLint      |

## Структура репозитория

```
the-quiet-makers/
├── app/           # страницы и компоненты (App Router)
├── public/        # статика (изображения и др.)
├── lib/           # утилиты и вспомогательный код
└── .github/workflows/
    └── deploy.yml # CI: сборка и публикация на GitHub Pages
```

Маршрут приложения на GitHub Pages использует префикс `/the-quiet-makers` (см. `next.config.js`: `basePath` и `assetPrefix`).

## Вклад

Идеи и правки приветствуются: создавайте issue или pull request. Основная ветка разработки — `dev`, релизная — `main`.
