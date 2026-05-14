# Astro Project — OpenCode Agent Rules

This is an Astro project managed with **pnpm**. Use this file as the primary source of truth for project conventions, structure, and agent behavior.

---

## Package Manager

- **Always use `pnpm`**. Never use `npm` or `yarn`.
- Lockfile: `pnpm-lock.yaml` — do not delete or regenerate without reason.

```bash
pnpm install          # Install dependencies
pnpm dev              # Start dev server (http://localhost:4321)
pnpm build            # Production build → ./dist
pnpm preview          # Preview production build locally
pnpm astro check      # TypeScript + Astro diagnostics
pnpm lint             # ESLint
pnpm format           # Prettier
```

---

## Project Structure

```
/
├── public/                  # Static assets (images, fonts, favicons)
├── src/
│   ├── assets/              # Processed assets (optimized images via <Image />)
│   ├── components/          # Reusable UI components (.astro, .tsx, .svelte)
│   │   ├── ui/              # Primitive components (Button, Input, Card…)
│   │   ├── layout/          # Structural components (Header, Footer, Sidebar)
│   │   └── sections/        # Page-level sections (Hero, Features, CTA…)
│   ├── layouts/             # Astro layout wrappers
│   ├── pages/               # File-based routing (.astro, .md, .mdx)
│   ├── content/             # Content Collections (blog, docs, etc.)
│   ├── styles/              # Global CSS / tokens
│   └── lib/                 # Utilities, helpers, constants
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

---

## Components

### `src/components/ui/`

Primitive, stateless building blocks. Rules:

- One component per file.
- File name matches component name: `Button.astro`, `Badge.astro`.
- Accept only typed `Props` interface — no implicit `any`.
- No business logic. Only rendering + basic interactivity.
- Use Astro's `class:list` directive for conditional classes.
- Never import page-level data directly — receive everything via props.

```astro
---
interface Props {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
}
const { variant = "primary", size = "md", href } = Astro.props;
---
```

---

### `src/components/layout/`

Structural components that wrap page content. Rules:

- `Header.astro`, `Footer.astro`, `Sidebar.astro`, `Nav.astro`.
- May import from `src/lib/` for navigation data or config.
- Should NOT contain page-specific logic.
- Use `<slot />` or named slots (`<slot name="actions" />`).
- Responsive by default — use mobile-first CSS.

---

### `src/components/sections/`

Larger, page-level sections composed of `ui/` primitives. Rules:

- Named after their function: `Hero.astro`, `Features.astro`, `Pricing.astro`.
- May receive complex props or use Astro Content Collections.
- Each section is self-contained — import its own styles if needed.
- Document props with JSDoc when non-obvious.

---

### `src/layouts/`

Astro layout files that wrap entire pages. Rules:

- `Layout.astro` — minimal HTML shell with `<head>` and `<body>`.
- Specialized layouts extend `Layout`: `BlogLayout.astro`, `DocsLayout.astro`.
- Always include `<meta charset>`, `<meta viewport>`, and `<title>`.
- Use `Astro.props.title` to allow per-page title overrides.
- Inject global styles here — not in individual pages.

---

### `src/pages/`

File-based routing. Rules:

- Each `.astro` file = one route.
- Dynamic routes use `[slug].astro` or `[...slug].astro`.
- Pages should be thin — delegate rendering to sections/layouts.
- Static data fetching goes inside the frontmatter (`---` block).
- `getStaticPaths()` is required for dynamic routes.

---

### `src/content/`

Astro Content Collections. Rules:

- Define schemas in `src/content/config.ts` using `zod`.
- Collection names are singular: `blog`, `doc`, `project`.
- Markdown files use kebab-case slugs: `my-first-post.md`.
- Always specify `pubDate`, `title`, and `description` in frontmatter.
- Use `getCollection()` / `getEntry()` — never `import.meta.glob` directly.

---

### `src/styles/`

Global styles and design tokens. Rules:

- `global.css` — resets and base styles only.
- `tokens.css` — CSS custom properties (`--color-primary`, `--spacing-md`…).
- Component-scoped styles go inside the component via `<style>` tag.
- Prefer CSS custom properties over hardcoded values.
- No Tailwind unless already configured — check `astro.config.mjs` first.

---

### `src/lib/`

Utilities and shared logic. Rules:

- Pure TypeScript — no Astro-specific APIs here.
- Each file exports a focused set of related helpers.
- Add JSDoc to exported functions.
- No side effects at module level.

```
src/lib/
├── utils.ts        # General helpers (cn, formatDate, slugify…)
├── constants.ts    # App-wide constants (SITE_URL, NAV_LINKS…)
└── types.ts        # Shared TypeScript types/interfaces
```

---

## Code Standards

- **TypeScript strict mode** — `tsconfig.json` has `"strict": true`.
- All component props must have explicit types via `interface Props`.
- Prefer `const` over `let`; never use `var`.
- Use named exports in `src/lib/`. Default exports only in components and pages.
- Format with **Prettier** before committing (`pnpm format`).
- Lint with **ESLint** (`pnpm lint`) — fix all errors, no disable comments without explanation.

---

## Astro-Specific Conventions

- Use `<Image />` from `astro:assets` — never raw `<img>` for local images.
- Prefer `.astro` components over framework components unless interactivity is needed.
- Client-side scripts use `<script>` with `is:inline` only when truly global; otherwise use framework components with `client:*` directives.
- `client:load` → immediate interactivity. `client:idle` → non-critical. `client:visible` → below the fold.
- Environment variables: prefix with `PUBLIC_` only what needs to be exposed to the browser.

---

## Git Conventions

- Branch: `feat/`, `fix/`, `chore/`, `docs/`
- Commits follow Conventional Commits: `feat: add Hero component`
- Never commit `node_modules/`, `dist/`, or `.env`.

---

## Agent Behavior

- Before editing a component, read its existing props interface and slot usage.
- When adding a new component, place it in the correct subdirectory (`ui/`, `layout/`, or `sections/`).
- Run `pnpm astro check` after any TypeScript or `.astro` change.
- Run `pnpm build` to confirm no build errors before marking a task complete.
- Do not modify `pnpm-lock.yaml` manually.
- If a dependency is missing, install with `pnpm add <pkg>` (or `pnpm add -D <pkg>` for dev deps).