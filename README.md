# gefferson-souza-dev

Personal website of Gefferson Souza, backend engineer (Node.js, TypeScript, NestJS). Next.js 14 (App Router), Tailwind CSS, terminal theme.

Live: https://gefferson-souza-dev.vercel.app

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npx tsc --noEmit
npm run build
```

Public profile data (links, location) lives in `lib/profile.ts`. SEO metadata and the schema.org Person JSON-LD live in `app/layout.tsx`.
