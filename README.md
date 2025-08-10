# The Quiet Makers

This project uses Next.js 14 with the App Router and Tailwind CSS.

## Localization (i18n)

- The site is available in two languages: English (default) and Russian
- Locale-prefixed routes are used: `/en/...` and `/ru/...`
- The root path `/` redirects to `/en`
- A language switcher is shown in the top-right of the header and preserves the current path when switching

## Development

- Install dependencies and run dev server:

```bash
npm install
npm run dev
```

The app is served under the base path `/the-quiet-makers`. 