# Acuity Hacks Website

The official website for Acuity Hacks, a two-day hybrid hackathon for middle and high school students organized by CASPA Youth.

## Local development

Requirements: Node.js 18 or newer and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production bundle is generated in `dist/`.

## Deployment

This project is ready for Vercel with the following settings:

- Framework preset: Vite
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`

No environment variables are required. The site uses section anchors rather than client-side path routing, so no SPA rewrite configuration is needed.

## Project structure

- `src/components/` — page sections and shared UI
- `src/data/` — event content and site configuration
- `public/` — static logos and cursor artwork
- `src/index.css` — global styles and Tailwind layers
