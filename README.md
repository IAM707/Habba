# Habba

Habba is a planned Arabic-first restaurant decision product for Jeddah. It helps someone move from “where should we go?” to a small, honest shortlist of suitable physical restaurant branches.

> This repository currently contains a minimal Next.js foundation only. Restaurant pages, Supabase, authentication, search, recommendations, favourites, analytics, and merchant tools are planned—not implemented.

## Product principles

- Browse, search, directions, and device-local saves work without an account.
- Habba recommends physical branches and never invents restaurant facts.
- The guided flow returns three explainable choices only when three verified matches exist; otherwise it explains the shortfall and offers one clear relaxation.
- Arabic RTL is the primary experience; English LTR is supported deliberately.
- “Open now” appears only when fresh, complete, computable hours support it.

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The current starter page is at `src/app/page.tsx`.

Available scripts:

- `npm run dev` — start the development server.
- `npm run lint` — run ESLint.
- `npm run build` — create a production build.

## Documentation

- [Product design](docs/PRODUCT_DESIGN.md) — product goal, experience rules, design direction, and route requirements.
- [Development workflow](docs/DEVELOPMENT_WORKFLOW.md) — data, security, architecture, delivery, and release decisions.
- [Catalogue contract](docs/CATALOGUE_CONTRACT.md) — public branch identity, controlled values, provenance, and publication rules.
- `notes/IMPLEMENTATION_BACKLOG.md` — private sprint-by-sprint execution checklist.
- `notes/backend-idea.md` — private Supabase learning capstone; it is not committed product scope.

The `notes/` directory is intentionally private and Git-ignored. Public documents must not rely on it.
