<!-- GitHub Copilot / AI agent guidance for the zwwuu.dev codebase -->

# zwwuu.dev — Agent Instructions

This project is a Next.js (App Router) portfolio located under `src/`.
Keep guidance brief and concrete: reference files, patterns, and commands below.

1. Big picture

- App entry: `src/app` (App Router). Pages are server components by default.
- UI: `src/components` contains reusable components; `src/components/index.ts` is the barrel file used across the app.
- Static data: `src/data/*` holds site data (projects, technologies, titles). These files import images from `public/images` using static imports (StaticImageData).
- Styling: Tailwind CSS (v4). Global styles live in `src/app/globals.css`.

2. Key patterns and conventions

- Prefer React Server Components. Add `"use client"` only when Web APIs, hooks, or local state are required.
- Components are default-exported files in `src/components` (e.g., `HeroSection` lives in `src/components/HeroSection.tsx`). Use the barrel (`src/components/index.ts`) for imports.
- Name files with PascalCase for components and keep folder names lowercase-with-dashes when creating new directories.
- Use TypeScript interfaces for props (project uses interfaces in `src/data/projects.tsx`). Avoid enums; use maps.
- Images are imported from `public/images` and passed as StaticImageData; use Next.js `Image` where appropriate.

3. Build / dev / CI commands

- Development: `npm run dev` (runs `next dev`).
- Build: `npm run build` (runs `next build`).
- Start production server: `npm run start`.
- Quick checks used by CI: `npm run lint` and `npm run typecheck` (`npm run check` runs both).

4. Project-specific integration points

- Environment variables prefixed with `NEXT_PUBLIC_...` are used for metadata and analytics (see `src/app/layout.tsx` and `src/app/manifest.ts`).
- Google Analytics is wired via `@next/third-parties/google` in `src/app/layout.tsx`.
- Web Vitals: `src/components/WebVitals.tsx` is included in the root layout for client-side metrics.

5. Examples of common edits

- Add a new reusable component:
  - Create `src/components/MyWidget.tsx` (default export), add to `src/components/index.ts` barrel, then import via `import { MyWidget } from '@/components'`.
- Add a project entry: update `src/data/projects.tsx` by following the existing `IProject` shape (StaticImageData imports from `public/images`).

6. What to avoid / watch for

- Do not convert large server components to client components unnecessarily — prefer small, focused client wrappers.
- Keep `use client` minimal to preserve RSC performance and fast builds.
- When modifying image imports, preserve StaticImageData typing to avoid runtime image resolution issues.

7. Useful files to inspect

- `src/app/layout.tsx`, `src/app/page.tsx`, `src/components/index.ts`, `src/data/projects.tsx`, `package.json`, `.cursor/rules/project.mdc` (project-specific style rules).

If anything here is unclear or you'd like more examples (component templates, typical PR checklist, or common refactors), tell me which area to expand.
