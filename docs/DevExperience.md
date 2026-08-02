# Developer Experience Guide

> **Status: ✅ Active — Milestone 1**  
> This document defines code organization, naming conventions, and architectural patterns for ResearchForge.  
> Following these conventions ensures consistency across contributions from multiple engineers.

---

## Table of Contents

- [Repository Structure](#repository-structure)
- [Naming Conventions](#naming-conventions)
- [Code Organization](#code-organization)
  - [Frontend](#frontend)
  - [Backend API](#backend-api)
  - [AI Service](#ai-service)
- [State Management Strategy](#state-management-strategy)
- [API Organization](#api-organization)
- [Environment Variable Strategy](#environment-variable-strategy)
- [Shared Types Strategy](#shared-types-strategy)
- [Reusable Component Strategy](#reusable-component-strategy)

---

## Repository Structure

```
ResearchForge/
├── .github/                # GitHub templates, CI workflows
│   ├── ISSUE_TEMPLATE/
│   ├── workflows/
│   └── PULL_REQUEST_TEMPLATE.md
├── ai-services/            # FastAPI AI microservice
│   ├── routers/
│   ├── handlers/
│   ├── models/
│   ├── main.py
│   ├── pyproject.toml
│   └── .env.example
├── assets/                 # Logos, banners, diagrams, wireframes
├── backend/                # Express.js API server
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── middleware/
│   │   ├── schemas/        # Zod validation schemas (source of truth)
│   │   └── index.ts
│   ├── package.json
│   └── .env.example
├── database/               # Prisma schema and migrations
│   ├── schema.prisma
│   └── migrations/
├── docs/                   # All project documentation
├── frontend/               # Next.js web application
│   ├── src/
│   │   ├── app/            # Next.js App Router pages
│   │   ├── components/
│   │   │   ├── ui/         # shadcn/ui base components
│   │   │   └── [feature]/  # Feature-specific components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utilities, API client, helpers
│   │   └── types/          # Shared TypeScript types (frontend)
│   ├── package.json
│   └── .env.example
├── docker-compose.yml
├── pnpm-workspace.yaml
└── README.md
```

---

## Naming Conventions

Consistent naming reduces cognitive load for contributors reading unfamiliar code.

### Files & Directories

| Scope | Convention | Example |
|---|---|---|
| React components | `PascalCase.tsx` | `PaperCard.tsx` |
| Utility files | `kebab-case.ts` | `format-date.ts` |
| API route files | `kebab-case.ts` | `papers.routes.ts` |
| Test files | `[filename].test.ts` | `papers.routes.test.ts` |
| Directories | `kebab-case/` | `components/search-results/` |

### Code

| Scope | Convention | Example |
|---|---|---|
| React components | `PascalCase` | `const PaperCard = () => {}` |
| Functions & variables | `camelCase` | `const fetchPapers = () => {}` |
| TypeScript types / interfaces | `PascalCase` | `type PaperMetadata = {}` |
| Zod schemas | `camelCase` + `Schema` suffix | `const paperSchema = z.object(...)` |
| Constants | `UPPER_SNAKE_CASE` | `const MAX_RESULTS = 20` |
| Database tables (Prisma) | `snake_case` | `paper_metadata`, `user_workspace` |
| Environment variables | `UPPER_SNAKE_CASE` | `DATABASE_URL`, `AI_SERVICE_URL` |

---

## Code Organization

### Frontend

The frontend uses a **feature-based** folder structure, not a type-based structure. Components, hooks, and utilities for a feature live together.

```
frontend/src/
├── app/                    # Next.js App Router — route segments
│   ├── (auth)/             # Auth route group (login, register)
│   ├── search/
│   ├── papers/[id]/
│   └── workspace/
├── components/
│   ├── ui/                 # shadcn/ui base components (do not modify directly)
│   ├── search/             # Search feature components
│   ├── papers/             # Paper detail & card components
│   └── layout/             # Navigation, headers, sidebars
├── hooks/                  # Custom hooks (useSearch, usePaper, etc.)
├── lib/
│   ├── api.ts              # API client (wraps fetch with base URL and auth)
│   └── utils.ts            # General utilities (cn(), formatDate(), etc.)
└── types/
    └── index.ts            # Frontend-specific TypeScript types
```

### Backend API

The backend uses a **layered architecture**: route → controller → service → repository.

```
backend/src/
├── routes/                 # HTTP route definitions (Express Router)
│   ├── papers.routes.ts
│   ├── search.routes.ts
│   └── auth.routes.ts
├── controllers/            # Request/response handling; calls services
│   ├── papers.controller.ts
│   └── search.controller.ts
├── services/               # Business logic; orchestrates calls to DB and AI service
│   ├── papers.service.ts
│   └── search.service.ts
├── middleware/             # Auth middleware, error handlers, request validation
│   ├── auth.middleware.ts
│   └── error.middleware.ts
├── schemas/                # Zod schemas for request body and response validation
│   ├── paper.schema.ts
│   └── search.schema.ts
├── lib/
│   ├── prisma.ts           # Prisma client singleton
│   └── ai-client.ts        # HTTP client for the AI service
└── index.ts                # Express app entry point
```

**Rule:** Controllers do not contain business logic. Services do not touch HTTP objects (req, res). This separation keeps each layer independently testable.

### AI Service

The AI service uses a **router → handler → model** pattern.

```
ai-services/
├── routers/
│   └── embed.py            # FastAPI router for embedding endpoints
├── handlers/
│   └── embed_handler.py    # Request validation and response formatting
├── models/
│   └── embedder.py         # sentence-transformers model loading and inference
└── main.py                 # FastAPI app entry point and router registration
```

---

## State Management Strategy

ResearchForge uses a **layered state model** with no global state store at MVP.

| State Type | Tool | Scope | Example |
|---|---|---|---|
| **Server state** (API data) | TanStack Query | Global (cached) | Papers list, search results, user profile |
| **Auth state** | React Context | Global | `useAuth()` hook providing user and session |
| **Form state** | React Hook Form | Local (component) | Search input, paper submission form |
| **Transient UI state** | `useState` | Local (component) | Modal open/closed, selected tab, loading spinner |

**Decision rules:**
- If data comes from the API → TanStack Query.
- If it's the authenticated user → React Context.
- If it's a form → React Hook Form.
- If it's everything else → `useState`.
- Do not introduce Zustand or Redux until a clear use case emerges in M3.

---

## API Organization

The Backend API is a **versioned REST API**.

| Convention | Value |
|---|---|
| **Base path** | `/api/v1/` |
| **Format** | JSON |
| **Docs** | `/api/docs` (Swagger UI) |
| **Auth** | JWT in HTTP-only cookie |

### Standard Response Shape

All API responses use a consistent envelope:

```typescript
// Success
{ "data": { ... }, "meta": { ... } }

// Error
{ "error": { "code": "PAPER_NOT_FOUND", "message": "..." } }
```

> **Note:** Specific endpoint paths and request/response schemas will be defined and published in the API specification during Milestone 1.5.

### Request Validation

All incoming request bodies are validated with Zod schemas defined in `backend/src/schemas/`. Validation middleware applies the schema before the request reaches the controller.

---

## Environment Variable Strategy

Each service manages its own environment variables independently.

| Service | File | Client-side prefix |
|---|---|---|
| Frontend | `.env.local` | `NEXT_PUBLIC_` (client-accessible) |
| Backend | `.env` | — |
| AI Service | `.env` | — |

**Rules:**
- Never commit `.env` files (all are in `.gitignore`).
- Every variable used in code must be documented in the service's `.env.example`.
- Variables that must be available to the browser must be prefixed `NEXT_PUBLIC_`. All others are server-only.
- Validate environment variables at application startup (not at runtime) using Zod or a dedicated env-validation utility.

---

## Shared Types Strategy

TypeScript types are the most common source of drift between frontend and backend in a service-oriented project.

**Strategy for M1.5 (scaffold phase):**
- Zod schemas in `backend/src/schemas/` are the **authoritative source of truth** for all data shapes.
- The frontend declares its own types in `frontend/src/types/` temporarily.

**Strategy for M2+ (build phase):**
- Create a `packages/types/` shared package in the pnpm workspace.
- Backend Zod schemas export inferred TypeScript types.
- Frontend imports types from `@researchforge/types`.
- This eliminates type duplication without requiring a monorepo build system change.

---

## Reusable Component Strategy

All UI components follow a three-tier model:

| Tier | Location | Description |
|---|---|---|
| **Primitive** | `frontend/src/components/ui/` | shadcn/ui components — do not modify directly; re-run shadcn CLI to update |
| **Composite** | `frontend/src/components/[feature]/` | Feature components built from primitives (e.g. `PaperCard`, `SearchBar`) |
| **Page** | `frontend/src/app/[route]/page.tsx` | Next.js page components that assemble composites into full views |

**Styling rules:**
- All styling via Tailwind utility classes — no inline `style` props.
- Component variants (size, intent) defined using `cva` (class-variance-authority) which ships with shadcn/ui.
- No custom CSS files for application components. Reserve CSS Modules only for cases Tailwind cannot handle.

---

👉 **Next Step:** See the full local development setup in **[docs/DeveloperGuide.md](DeveloperGuide.md)** *(⏱️ ~5 min read)*!
