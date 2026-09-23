# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — production build to `dist/` (no separate typecheck step; Vite only transpiles)
- `npm run lint` — ESLint
- `npm run preview` — serve the built bundle

There is no test framework. The README's `npm start` / `npm test` instructions are template boilerplate and don't work.

Lint caveat: `eslint.config.js` only matches `**/*.{js,jsx}`, so the `.ts`/`.tsx` sources under `src/` are effectively not linted.

## Environment

Copy `.env.example` to `.env`: `VITE_ENV`, `VITE_APP_MANAGER_BASE_URL`, `VITE_APP_MANAGER_TOKEN`. They are read in one place, `src/commons/utils/Constants.ts`. The Docker build (`Dockerfile`) takes `VITE_ENV` as a build arg (default `pro`), builds with Node 20, and serves `dist/` through nginx with an SPA fallback (`nginx.conf`).

## Architecture

Single-page React 19 + Vite + TypeScript app (Chakra UI v2, react-router v7) — a bilingual (es/en) personal portfolio.

**Provider order (`src/App.tsx`)**: `ChakraProvider` → `Layout` → `ConfigProvider` → `LanguageProvider` → `AppRoutes`. `Layout` sits outside the config/language providers, so it can't use `useConfig` or `useLanguage`.

**Remote config via App Manager** (`src/commons/context/ConfigContext.tsx`): on mount, `@expozcode/app-manager-sdk`'s `AppManagerClient` fetches a remote config. That config drives:
- the maintenance flag: every route in `src/routes.tsx` renders `MaintenancePage` when `isBlocked(config, 'maintenance')` is true;
- the project list: `getProjects(config)` reads the `projects` JSON key and sorts by `order`. Projects come from the remote config, not from the repo.
- `AppRoutes` shows a spinner while loading. If the fetch fails, only `error` is set and the app then renders normally with empty config.

**Literals come from App Manager**: `useTranslation()` (`src/commons/hooks/useTranslation.tsx`) reads `appManagerClient.getLiterals(config, language)` — flat dotted keys (`t('hero.kicker')`); arrays are indexed keys (`hero.roles.0`, `.1`, … read via `tList`). A missing key returns the key itself. `src/assets/i18n/{es,en}.json` are only the fallback when the remote fetch fails. `es` is the App Manager `default` locale, `en` the extra one. The language is stored in `localStorage['lang']` (default `es`).

**UI layout**: `src/pages/*` are route-level pages. `HomePage` composes the sections in `src/components/landing/*` (Hero, Stats, About, Stack, Projects, Contact). `src/components/*` at the top level holds the shared chrome (header, footer, timeline, switchers), and `components/mobile` has the mobile menu. The theme and color mode config are in `src/theme/index.ts`.

**Contact form**: `ContactSection.tsx` and `pages/ContactPage.tsx` both send mail directly from the browser with `emailjs-com`, duplicating the logic. Change both when you change one.

**Quirks**
- `src/commons/hooks/useJsonConfig.tsx` (exports `useDeepSearch`) is an untyped leftover with its own JSON-path/deep-search helpers; `useFeatures.tsx` is likewise unused by the main flow.
- `dist/` is gitignored build output. `public/` holds the CVs (`Cv-Juan-Antonio-Bedmar-{es,en}.pdf`) and logos.
