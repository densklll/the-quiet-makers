# The Quiet Makers — Документация

Проект: платформа, помогающая людям находить и поддерживать благотворительные проекты, соответствующие их ценностям и интересам.

## Быстрый старт

```bash
# Установка зависимостей
npm install

# Запуск режима разработки
npm run dev
```

Открыть в браузере: `http://localhost:3000/the-quiet-makers`

Обратите внимание: используется basePath `/the-quiet-makers` (см. конфиг), поэтому корневой URL в dev и на проде отличается от `/`.

## Архитектура и стек

- Next.js 14 (App Router) + статическая генерация (SSG) с `output: 'export'`
- React 18, TypeScript
- Tailwind CSS для стилизации
- Framer Motion для анимаций
- React Icons для иконок
- Простая i18n (английский/русский) через собственный контекст

Ключевые файлы конфигурации:
- `next.config.js`: `output: 'export'`, `basePath` и `assetPrefix` = `/the-quiet-makers`; настройки изображений и remotePatterns
- `tailwind.config.js`: расширения темы, анимации, пути сканирования
- `tsconfig.json`: строгий TS, алиас `@/*` на корень
- `postcss.config.js`: Tailwind + Autoprefixer

## Структура каталогов

- `app/`
  - `page.tsx`: главная страница
  - `about/`, `projects/`, `quiz/`, `register/`, `login/`, `favorites/`, `collaborations/`: страницы
  - `project-details/[id]/`: детали проекта (динамический маршрут)
  - `project-selection/`: альтернативный подбор проектов по шагам
  - `components/`: общие компоненты (`Header`, `Footer`, `ProjectCard`, `ProjectTags`, `QuizQuestion`, `ErrorBoundary`)
  - `globals.css`: глобальные стили Tailwind
- `lib/`
  - `api.ts`: интерфейсы и мок-данные проектов + функции выборки
  - `i18n/`: `I18nContext` и словари `en.ts`/`ru.ts`
- `public/`: статические ресурсы (`noise.svg`, изображения)

## Локализация (i18n)

- Провайдер `I18nProvider` подключён в `app/layout.tsx` и оборачивает всё приложение
- Текущая локаль хранится в cookie `locale`; при переключении обновляется `<html lang>`
- Переключатель языка находится в `Header` (кнопка `EN/RU`)
- Словари: `lib/i18n/dictionaries/en.ts` и `ru.ts`
- Функция перевода `t(key, vars?)` поддерживает плейсхолдеры `{var}`

## Данные и API

Файл `lib/api.ts` содержит:
- Типы `Story` и `Project`
- Массив мок-данных `mockProjects` (3 проекта)
- API-функции:
  - `getAllProjects()` — все проекты
  - `getProjectById(id)` — проект по ID
  - `getProjectsByTags(tags)` — фильтр по тегам

Изображения в мок-данных указываются как пути `"/images/..."`. Для корректной работы нужно добавить соответствующие файлы в `public/images/...` либо заменить на разрешённые внешние URL.

## Страницы и маршруты

- `/the-quiet-makers` — главная (`app/page.tsx`): хиро, категории, «как это работает», CTA
- `/the-quiet-makers/about` — о платформе: миссия/ценности/CTA, i18n
- `/the-quiet-makers/projects` — список проектов:
  - SSR часть (`app/projects/page.tsx`) забирает данные через `getAllProjects`
  - CSR часть (`app/projects/ProjectsClient.tsx`) реализует поиск, выбор тегов, отображение карточек, i18n
- `/the-quiet-makers/project-details/[id]` — детали проекта (динамика, SSG):
  - `generateStaticParams` генерирует статические страницы по известным `id`
  - `ProjectDetailsClient` — теги, прогресс, форма пожертвования (демо), истории, галерея, модалка успеха
- `/the-quiet-makers/quiz` — квиз из 5 шагов; по завершении редирект на `/projects` с query-параметрами
- `/the-quiet-makers/project-selection` — альтернативный подбор: шаги теги → категории → формат; редирект на `/projects`
- `/the-quiet-makers/favorites` — избранное (локальные мок-данные)
- `/the-quiet-makers/collaborations` — коллаборации и мини-проекты
- `/the-quiet-makers/happiness/education|interviews|stories` — контентные страницы
- `/the-quiet-makers/login` и `/the-quiet-makers/register` — формы (валидация на клиенте)

## Стили и UI/UX

- Tailwind + дополнительные утилиты в `app/globals.css` (кнопки, карточки, прогресс-бары, теги, модалки)
- Фон страницы использует `public/noise.svg`
- Анимации — `framer-motion`
- Иконки — `react-icons`

## Запуск, сборка, предпросмотр

- Dev:
  ```bash
  npm run dev
  # открыть http://localhost:3000/the-quiet-makers
  ```
- Сборка (SSG):
  ```bash
  npm run build
  # результат в каталоге out/
  ```
- Предпросмотр статики:
  ```bash
  npx serve out
  # или npm i -g serve && serve out
  ```

Важно: при `output: 'export'` команда `next start` неприменима для каталога `out/`. Используйте любой статический сервер.

## Деплой на GitHub Pages

- Настройки уже подготовлены под GitHub Pages (подпуть репозитория):
  - `basePath: '/the-quiet-makers'`
  - `assetPrefix: '/the-quiet-makers'`
- Процесс:
  1) Выполнить `npm run build` — получим `out/`
  2) Задеплоить содержимое `out/` в ветку `gh-pages`
  3) Включить GitHub Pages (Source: `gh-pages`)

После деплоя сайт будет доступен по адресу вида:
`https://<owner>.github.io/the-quiet-makers/`

## Расширение функциональности

- Добавить проект:
  1) Добавить элемент в `mockProjects` в `lib/api.ts`
  2) Обновить `generateStaticParams` в `app/project-details/[id]/page.tsx` (добавить новый `id` для SSG)
  3) Добавить изображения в `public/images/...` или указать внешний URL
- Добавить страницу: создать `app/<route>/page.tsx` (Next App Router подключит автоматически)
- Добавить перевод: добавить ключ в оба словаря `en.ts` и `ru.ts`; использовать `t('путь.к.ключу')`
- Изменить стиль: редактировать `globals.css` и компоненты; Tailwind классы доступны во всех JSX

## Известные ограничения и рекомендации

1) Соответствие тегов и локализации:
   - В `mockProjects` теги на русском (например, `"Люди"`), а при англоязычном UI `t()` возвращает `"People"`. Фильтрация по тегам проводится по строкам и перестаёт работать в EN.
   - Рекомендация: хранить теги как стабильные ID (`people`, `animals`, `nature`, `children`, `ecology`) и переводить только при отображении; либо маппить выбранные переводы обратно к исходным значениям перед фильтрацией.

2) Изображения из мок-данных:
   - Пути вида `"/images/..."` требуют существования файлов в `public/images/...`. Сейчас часть путей отсутствует.
   - Рекомендация: добавить изображения в репозиторий либо использовать внешние источники (например, `https://placehold.co/...`, разрешён в конфиге).

3) Подсветка слова в `about`:
   - Использование `split().join('<span ...>')` выведет HTML-теги как текст.
   - Рекомендация: разметить слово в JSX (разбить строку на части) или применять `dangerouslySetInnerHTML` (с осторожностью).

4) BasePath и фон `noise.svg`:
   - В `globals.css` указан `url('/noise.svg')`. На GitHub Pages требуется `'/the-quiet-makers/noise.svg'`.
   - Рекомендации: импортировать SVG и использовать через `next/image` или инлайн-data URL; либо вычислять путь с учётом `basePath`.

5) Предпросмотр статики:
   - `next start` не подходит для каталога `out/`. Используйте `serve out` или иной статический сервер.

6) Разнородные мок-данные:
   - Страница `favorites` использует собственный набор моков (не из `lib/api.ts`).
   - Рекомендация: унифицировать источник данных через `lib/api.ts`.

7) Неиспользуемые переводы проектов:
   - В `en.ts` есть раздел `projectsData` для локализации проектов по `id`, но он не применяется.
   - Рекомендация: задействовать его при выводе данных проектов или удалить.

## Роадмап улучшений

- Нормализовать теги (ID + перевод)
- Добавить/исправить изображения проектов в `public/images`
- Вынести «Избранное» на общий источник данных + сохранить в `localStorage`/бекенде
- Корректно подсветить слово на странице `about`
- Обновить обработку путей с учётом `basePath` (фон/ассеты)
- Интегрировать реальный API (SSR/ISR для списков и деталей)
- Локализовать содержимое проектов (использовать `projectsData`)

## FAQ

- Где глобальные стили? — `app/globals.css`
- Как добавить новый маршрут? — создать `app/<route>/page.tsx`
- Как добавить перевод? — обновить `lib/i18n/dictionaries/en.ts` и `ru.ts`
- Как отрисовывать новые поля проекта? — расширить интерфейс `Project` и компоненты отображения (`ProjectsClient`, `ProjectDetailsClient`)
- Как собрать и задеплоить на GitHub Pages? — `npm run build` → содержимое `out/` в ветку `gh-pages`, настроить Pages

## Лицензия

Смотрите `README.md` (MIT).