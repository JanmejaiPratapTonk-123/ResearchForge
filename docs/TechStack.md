# Tech Stack

> **Status: ✅ Finalized — Milestone 1 (August 2026)**  
> The ResearchForge tech stack is frozen for Milestone 1. Each technology was selected against criteria of maintainability, contributor accessibility, and long-term scalability.  
> For system topology and service interactions, see **[docs/Architecture.md](Architecture.md)**.

---

## Table of Contents

- [Selection Criteria](#selection-criteria)
- [Frontend](#frontend)
  - [Next.js (React)](#nextjs-react)
  - [TypeScript](#typescript)
  - [Tailwind CSS](#tailwind-css)
  - [shadcn/ui](#shadcnui)
  - [TanStack Query](#tanstack-query)
  - [React Hook Form + Zod](#react-hook-form--zod)
  - [Lucide React](#lucide-react)
- [Backend](#backend)
  - [Express.js](#expressjs)
  - [Authentication Strategy](#authentication-strategy)
- [Database](#database)
  - [PostgreSQL](#postgresql)
  - [Prisma ORM](#prisma-orm)
  - [pgvector](#pgvector)
- [AI Service](#ai-service)
  - [FastAPI](#fastapi)
  - [sentence-transformers](#sentence-transformers)
- [DevOps & Tooling](#devops--tooling)
  - [Docker & Docker Compose](#docker--docker-compose)
  - [GitHub Actions](#github-actions)
  - [pnpm](#pnpm)
  - [uv](#uv)
  - [ESLint & Prettier](#eslint--prettier)
- [Testing](#testing)
  - [Vitest & React Testing Library](#vitest--react-testing-library)
  - [Jest](#jest)
  - [Pytest](#pytest)
- [API Documentation](#api-documentation)
  - [OpenAPI / Swagger](#openapi--swagger)
- [Deferred Technologies](#deferred-technologies)

---

## Selection Criteria

All technology choices were evaluated against the following criteria:

| Criterion | Description |
|---|---|
| **Maintainability** | Can the primary maintainer maintain this independently? |
| **Contributor accessibility** | Can IEEE SoC contributors contribute with existing skills? |
| **Learning gradient** | Does this allow gradual, incremental learning? |
| **Long-term scalability** | Will this still be appropriate at 10× current scope? |
| **No unnecessary complexity** | Does this earn its place at MVP scale? |

---

## Frontend

---

### Next.js (React)

| Field | Value |
|---|---|
| **Purpose** | Web application framework — routing, rendering, and frontend infrastructure |
| **Ownership** | Frontend contributors (`frontend/`) |
| **Version** | Current stable major (Next.js 15 / React 19) |
| **Decision Date** | August 2026 |
| **Status** | ✅ Finalized |

**Why selected:**  
The maintainer has existing React experience. Next.js extends React with file-system routing, server-side rendering, and a structured project convention — reducing the number of architectural decisions contributors need to make. It has the largest contributor familiarity in the frontend ecosystem.

**Alternatives considered:**

| Alternative | Reason not chosen |
|---|---|
| SvelteKit | Excellent performance, but requires contributors to learn Svelte syntax. Smaller contributor pool. |
| Vue / Nuxt | Solid framework but narrower contributor base among IEEE SoC participants. |
| Vite + React (SPA) | No file-system routing or SSR. More configuration with fewer conventions. |

**Learning resources:**
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)

**Contributor difficulty:** 🟡 Intermediate (requires React familiarity)

---

### TypeScript

| Field | Value |
|---|---|
| **Purpose** | Static typing for all JavaScript code (frontend and backend) |
| **Ownership** | All contributors working in `frontend/` and `backend/` |
| **Version** | Current stable |
| **Decision Date** | August 2026 |
| **Status** | ✅ Finalized |

**Why selected:**  
TypeScript provides compile-time type safety, enabling IDE autocompletion and catching errors before runtime. It is adopted incrementally — contributors comfortable with JavaScript can contribute and add types gradually. The maintainer's TypeScript learning goal is a direct fit.

**Alternatives considered:**

| Alternative | Reason not chosen |
|---|---|
| Plain JavaScript | No type safety; harder to maintain at scale across multiple contributors |
| JSDoc-only types | Partial solution; not enforced at compile time |

**Learning resources:**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

**Contributor difficulty:** 🟢 Beginner (gradual adoption; JavaScript knowledge transfers directly)

---

### Tailwind CSS

| Field | Value |
|---|---|
| **Purpose** | Utility-first CSS framework for consistent UI styling |
| **Ownership** | Frontend contributors (`frontend/`) |
| **Version** | Current stable |
| **Decision Date** | August 2026 |
| **Status** | ✅ Finalized |

**Why selected:**  
Tailwind eliminates per-component CSS files and naming conflicts across contributors. Design consistency is enforced through a shared configuration file. Integrates natively with Next.js and shadcn/ui.

**Alternatives considered:**

| Alternative | Reason not chosen |
|---|---|
| CSS Modules | Naming inconsistency across contributors; does not enforce design system |
| Styled Components | Runtime CSS-in-JS adds bundle overhead; no compile-time optimization |
| Vanilla CSS | Highest contributor inconsistency risk in an open-source project |

**Learning resources:**
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

**Contributor difficulty:** 🟢 Beginner

---

### shadcn/ui

| Field | Value |
|---|---|
| **Purpose** | Accessible, composable UI component library built on Radix UI primitives |
| **Ownership** | Frontend contributors (`frontend/components/`) |
| **Version** | Current stable |
| **Decision Date** | August 2026 |
| **Status** | ✅ Finalized |

**Why selected:**  
shadcn/ui components are copied into the project rather than installed as a dependency, giving full ownership and customizability. Components are built on Radix UI for accessibility compliance. Styling is done via Tailwind, maintaining a single styling system.

**Alternatives considered:**

| Alternative | Reason not chosen |
|---|---|
| Material UI | Opinionated visual style that conflicts with custom design; larger bundle |
| Chakra UI | Separate styling system conflicts with Tailwind-first approach |
| Building from scratch | Significant time cost; accessibility is non-trivial |

**Learning resources:**
- [shadcn/ui Docs](https://ui.shadcn.com)
- [Radix UI Docs](https://www.radix-ui.com)

**Contributor difficulty:** 🟢 Beginner

---

### TanStack Query

| Field | Value |
|---|---|
| **Purpose** | Server-state management — data fetching, caching, synchronization |
| **Ownership** | Frontend contributors |
| **Version** | Current stable (v5) |
| **Decision Date** | August 2026 |
| **Status** | ✅ Finalized |

**Why selected:**  
At MVP, ResearchForge's frontend state is almost entirely server state (papers, search results, workspaces). TanStack Query handles loading states, error states, caching, and background refetching declaratively. It eliminates the boilerplate of manual `useEffect` + `fetch` patterns and does not require a global store.

**Alternatives considered:**

| Alternative | Reason not chosen |
|---|---|
| Redux Toolkit | Overkill for MVP; steep learning curve for contributors; designed for complex client-side state |
| Zustand | Good lightweight option, but unnecessary when server state is the primary concern |
| SWR | Similar to TanStack Query but less feature-complete; TanStack Query has better devtools |

**Learning resources:**
- [TanStack Query Docs](https://tanstack.com/query/latest)

**Contributor difficulty:** 🟢 Beginner

---

### React Hook Form + Zod

| Field | Value |
|---|---|
| **Purpose** | Form state management (React Hook Form) and runtime input validation with static typing (Zod) |
| **Ownership** | Frontend contributors; Zod schemas also used in `backend/` |
| **Version** | Current stable |
| **Decision Date** | August 2026 |
| **Status** | ✅ Finalized |

**Why selected:**  
React Hook Form provides performant, uncontrolled form management with minimal re-renders. Zod provides schema-based validation with TypeScript type inference — a single Zod schema validates a form on the frontend and can validate request bodies on the backend, reducing duplication.

**Alternatives considered:**

| Alternative | Reason not chosen |
|---|---|
| Formik + Yup | Older ecosystem; more verbose; slower re-render performance |
| Manual validation | Error-prone; duplicated across frontend and backend |

**Learning resources:**
- [React Hook Form Docs](https://react-hook-form.com)
- [Zod Docs](https://zod.dev)

**Contributor difficulty:** 🟢 Beginner

---

### Lucide React

| Field | Value |
|---|---|
| **Purpose** | Icon library — consistent icon set across the UI |
| **Ownership** | Frontend contributors |
| **Version** | Current stable |
| **Decision Date** | August 2026 |
| **Status** | ✅ Finalized |

**Why selected:**  
Lucide React is the default icon set used by shadcn/ui. Consistent, well-maintained, MIT-licensed, and tree-shakeable (only imported icons are bundled).

**Contributor difficulty:** 🟢 Beginner

**Learning resources:**
- [Lucide Icons](https://lucide.dev)

---

## Backend

---

### Express.js

| Field | Value |
|---|---|
| **Purpose** | HTTP API server — request routing, middleware, and API orchestration |
| **Ownership** | Backend contributors (`backend/`) |
| **Version** | Current stable |
| **Decision Date** | August 2026 |
| **Status** | ✅ Finalized |

**Why selected:**  
The maintainer has existing Node.js + Express experience. Express is the most widely known Node.js server framework, maximizing contributor familiarity. At MVP scale, Express provides everything required without imposing a steep structural learning curve.

The backend's role in ResearchForge is coordination — accepting requests, querying the database, delegating to the AI service, and returning responses. Express is well-suited for this responsibility without the overhead of more opinionated frameworks.

**Alternatives considered:**

| Alternative | Reason not chosen |
|---|---|
| FastAPI (Python) | Correct choice for the AI service layer; not for the backend API, where JS/TS contributor pool is broader |
| NestJS | More structured and scalable, but the abstraction overhead is not justified at MVP; considered for v1.0 if codebase grows complex |
| Fastify | Slightly faster than Express; but Express has broader contributor familiarity and more documentation |
| Hono | Modern and fast; but smaller ecosystem and less contributor familiarity |

**Learning resources:**
- [Express.js Docs](https://expressjs.com)

**Contributor difficulty:** 🟡 Intermediate (requires Node.js familiarity)

---

### Authentication Strategy

| Field | Value |
|---|---|
| **Purpose** | User authentication — session management and access control |
| **Ownership** | Backend contributors (`backend/`) |
| **Approach** | JWT tokens stored in HTTP-only cookies |
| **Decision Date** | August 2026 |
| **Status** | ✅ Finalized |

**Why this approach:**  
JWT stored in HTTP-only cookies provides a secure authentication pattern without exposing tokens to client-side JavaScript. HTTP-only cookies are inaccessible to XSS attacks. This approach is library-agnostic — the specific implementation library will be confirmed during M1.5 scaffolding.

**What is NOT yet decided:** The specific authentication library (e.g. a dedicated auth library, custom middleware, or session management package) will be finalized in M1.5.

**Alternatives considered:**

| Alternative | Reason not chosen |
|---|---|
| Managed auth SaaS (e.g. Auth0, Clerk) | Adds vendor dependency and billing before the project has users; not appropriate for an open-source project |
| localStorage token storage | Vulnerable to XSS; HTTP-only cookies are the more secure pattern |
| Session-based auth (server sessions) | Requires stateful server or session store (Redis); introduces infrastructure complexity not justified at MVP |

**Contributor difficulty:** 🟡 Intermediate

---

## Database

---

### PostgreSQL

| Field | Value |
|---|---|
| **Purpose** | Primary relational database — users, papers, workspaces, metadata |
| **Ownership** | Backend contributors and database engineers (`database/`) |
| **Version** | Current stable |
| **Decision Date** | August 2026 |
| **Status** | ✅ Finalized |

**Why selected:**  
The maintainer has existing PostgreSQL experience. PostgreSQL supports `pgvector` for vector similarity search and `Apache AGE` for graph queries — meaning all three storage patterns (relational, vector, graph) can be served from a single database system. This eliminates the operational complexity of running multiple database services at MVP.

**Alternatives considered:**

| Alternative | Reason not chosen |
|---|---|
| MongoDB | No advantage for ResearchForge's structured data model; relational is the right fit |
| SQLite | Not appropriate for a multi-user web application |
| MySQL | Lacks pgvector and graph extensions; weaker extensibility path |

**Learning resources:**
- [PostgreSQL Docs](https://www.postgresql.org/docs)

**Contributor difficulty:** 🟡 Intermediate

---

### Prisma ORM

| Field | Value |
|---|---|
| **Purpose** | Database schema management, migrations, and type-safe query client |
| **Ownership** | Backend contributors (`database/`, `backend/`) |
| **Version** | Current stable |
| **Decision Date** | August 2026 |
| **Status** | ✅ Finalized |

**Why selected:**  
The maintainer has existing Prisma experience. Prisma's schema-first approach produces human-readable schema files that are immediately understandable to contributors without deep SQL knowledge. Migrations are explicit, reviewable files. TypeScript type inference from the Prisma client aligns with the project's TypeScript-first approach.

**Note on pgvector:** Prisma does not have native pgvector support. Vector similarity search queries will use `prisma.$queryRaw` for raw SQL. Prisma handles all other CRUD operations.

**Alternatives considered:**

| Alternative | Reason not chosen |
|---|---|
| Drizzle ORM | TypeScript-native and performant; considered for v2.0 if Prisma performance is a bottleneck |
| TypeORM | Decorator-heavy and more complex; less ergonomic than Prisma |
| Raw SQL (pg) | Too low-level; loses type safety and schema documentation benefits |

**Learning resources:**
- [Prisma Docs](https://www.prisma.io/docs)

**Contributor difficulty:** 🟢 Beginner (schema is very readable)

---

### pgvector

| Field | Value |
|---|---|
| **Purpose** | Vector similarity search — stores and queries paper embeddings inside PostgreSQL |
| **Ownership** | Backend contributors, database engineers |
| **Version** | Current stable |
| **Decision Date** | August 2026 |
| **Status** | ✅ Finalized |

**Why selected:**  
`pgvector` runs as a PostgreSQL extension, enabling vector similarity search without operating a separate database service. At MVP scale, this eliminates a significant infrastructure dependency. IVFFlat indexes in pgvector are sufficient for tens of thousands to low millions of vectors.

**Alternatives considered:**

| Alternative | Reason not chosen |
|---|---|
| Qdrant | Superior ANN performance at scale; deferred until pgvector proves insufficient |
| Weaviate | Same rationale as Qdrant; adds operational complexity not justified at MVP |
| Elasticsearch (kNN) | Very large operational footprint; overkill for MVP |

**Learning resources:**
- [pgvector GitHub](https://github.com/pgvector/pgvector)

**Contributor difficulty:** 🟡 Intermediate (requires understanding of vector embeddings)

---

## AI Service

---

### FastAPI

| Field | Value |
|---|---|
| **Purpose** | Python web framework for the AI microservice — serving embedding and inference endpoints |
| **Ownership** | AI/ML contributors (`ai-services/`) |
| **Version** | Current stable |
| **Decision Date** | August 2026 |
| **Status** | ✅ Finalized |

**Why selected:**  
Python is the native language of the ML/AI ecosystem. FastAPI is the right framework for exposing Python-based AI pipelines via HTTP. It generates automatic OpenAPI documentation, has native async support for concurrent inference requests, and is the most widely adopted Python API framework in the AI/ML community. The maintainer's FastAPI learning goal is correctly scoped to this isolated microservice.

**Alternatives considered:**

| Alternative | Reason not chosen |
|---|---|
| Flask | Synchronous by default; FastAPI's async support and automatic type validation are superior |
| Django | Overkill for a focused microservice with 3–5 endpoints |
| LangChain / LlamaIndex as serving layer | These are orchestration frameworks, not service frameworks; they can be used inside the service but should not replace FastAPI |

**Learning resources:**
- [FastAPI Docs](https://fastapi.tiangolo.com)

**Contributor difficulty:** 🔴 Advanced (requires Python and ML familiarity)

---

### sentence-transformers

| Field | Value |
|---|---|
| **Purpose** | Local text embedding — converts paper text into vector representations for semantic search |
| **Ownership** | AI/ML contributors (`ai-services/`) |
| **Model** | `all-MiniLM-L6-v2` |
| **Decision Date** | August 2026 |
| **Status** | ✅ Finalized |

**Why selected:**  
`all-MiniLM-L6-v2` is small enough to run on CPU (no GPU required), fast enough for MVP-scale ingestion, and produces good quality embeddings for academic text. Critically, it requires no API key — contributors can run the full application locally without any external service dependency.

**Alternatives considered:**

| Alternative | Reason not chosen |
|---|---|
| OpenAI Embeddings API | Requires API key and incurs cost per embedding; excludes contributors without credentials |
| Cohere Embed | Same issue as OpenAI |
| Large open models (E5-large, BGE-large) | Higher quality but too large for CPU-only development environments |

**Upgrade path:** The embedding model can be swapped for a larger or API-based model in M3 without changing the service API contract.

**Learning resources:**
- [sentence-transformers Docs](https://www.sbert.net)
- [HuggingFace Model Card — all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)

**Contributor difficulty:** 🔴 Advanced

---

## DevOps & Tooling

---

### Docker & Docker Compose

| Field | Value |
|---|---|
| **Purpose** | Containerization — consistent local development environment across all contributors |
| **Ownership** | DevOps contributors, maintainer |
| **Version** | Current stable |
| **Decision Date** | August 2026 |
| **Status** | ✅ Finalized |

**Why selected:**  
Docker Compose provides a single `docker compose up` command that starts all four services (frontend, backend, AI service, PostgreSQL) in a consistent environment. This eliminates "works on my machine" problems and ensures every contributor has an identical local setup.

**Alternatives considered:**

| Alternative | Reason not chosen |
|---|---|
| Podman | Compatible but smaller documentation ecosystem; Docker is the standard for contributor documentation |
| devcontainers | Adds VS Code coupling; Docker Compose is more universal |
| Manual local setup only | Each service requires separate setup steps; too much friction for new contributors |

**Learning resources:**
- [Docker Docs](https://docs.docker.com)
- [Docker Compose Docs](https://docs.docker.com/compose)

**Contributor difficulty:** 🔴 Advanced (for authoring); 🟢 Beginner (for using `docker compose up`)

---

### GitHub Actions

| Field | Value |
|---|---|
| **Purpose** | CI/CD — automated linting, type checking, and testing on every pull request |
| **Ownership** | Maintainer, DevOps contributors (`.github/workflows/`) |
| **Version** | Current |
| **Decision Date** | August 2026 |
| **Status** | ✅ Finalized |

**Why selected:**  
The repository is hosted on GitHub. GitHub Actions requires no additional infrastructure and integrates directly with pull requests. Automated checks reduce maintainer review burden and catch errors before they reach `main`.

**Learning resources:**
- [GitHub Actions Docs](https://docs.github.com/en/actions)

**Contributor difficulty:** 🔴 Advanced (for authoring workflows); 🟢 Beginner (results are automatic)

---

### pnpm

| Field | Value |
|---|---|
| **Purpose** | Node.js package manager — faster and more efficient than npm |
| **Ownership** | All Node.js contributors |
| **Version** | Current stable |
| **Decision Date** | August 2026 |
| **Status** | ✅ Finalized |

**Why selected:**  
pnpm uses a content-addressable store that reduces `node_modules` size and installation time. It is a drop-in replacement for npm — contributors who know npm commands will use pnpm with no learning overhead.

**Learning resources:**
- [pnpm Docs](https://pnpm.io)

**Contributor difficulty:** 🟢 Beginner

---

### uv

| Field | Value |
|---|---|
| **Purpose** | Python package manager — fast, deterministic dependency management for the AI service |
| **Ownership** | AI/ML contributors (`ai-services/`) |
| **Version** | Current stable |
| **Decision Date** | August 2026 |
| **Status** | ✅ Finalized |

**Note on early onboarding:** Contributors unfamiliar with `uv` may use a standard `venv` + `pip` setup during early M1.5 onboarding. `uv` is the recommended standard for the project.

**Why selected:**  
`uv` replaces `pip` + `virtualenv` + `pip-tools` with a single, dramatically faster tool. `uv sync` creates the virtual environment and installs all dependencies from a lockfile in one step.

**Learning resources:**
- [uv Docs](https://docs.astral.sh/uv)

**Contributor difficulty:** 🟢 Beginner

---

### ESLint & Prettier

| Field | Value |
|---|---|
| **Purpose** | Code quality — linting (ESLint) and formatting (Prettier) for all TypeScript/JavaScript |
| **Ownership** | All frontend and backend contributors |
| **Version** | Current stable |
| **Decision Date** | August 2026 |
| **Status** | ✅ Finalized |

**Why selected:**  
ESLint enforces code quality rules; Prettier enforces consistent formatting. Together they eliminate formatting debates in code review and catch common errors early. Both are industry standards in the JavaScript/TypeScript ecosystem.

**Learning resources:**
- [ESLint Docs](https://eslint.org)
- [Prettier Docs](https://prettier.io)

**Contributor difficulty:** 🟢 Beginner (runs automatically via CI)

---

## Testing

---

### Vitest & React Testing Library

| Field | Value |
|---|---|
| **Purpose** | Frontend unit and component testing |
| **Ownership** | Frontend contributors |
| **Version** | Current stable |
| **Decision Date** | August 2026 |
| **Status** | ✅ Finalized |

**Why selected:**  
Vitest is the natural test runner for Next.js / Vite projects — faster than Jest with near-identical API. React Testing Library provides component testing that focuses on user behavior rather than implementation details.

**Learning resources:**
- [Vitest Docs](https://vitest.dev)
- [React Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro)

**Contributor difficulty:** 🟡 Intermediate

---

### Jest

| Field | Value |
|---|---|
| **Purpose** | Backend unit and integration testing |
| **Ownership** | Backend contributors |
| **Version** | Current stable |
| **Decision Date** | August 2026 |
| **Status** | ✅ Finalized |

**Learning resources:**
- [Jest Docs](https://jestjs.io)

**Contributor difficulty:** 🟡 Intermediate

---

### Pytest

| Field | Value |
|---|---|
| **Purpose** | AI service testing |
| **Ownership** | AI/ML contributors |
| **Version** | Current stable |
| **Decision Date** | August 2026 |
| **Status** | ✅ Finalized |

**Learning resources:**
- [Pytest Docs](https://docs.pytest.org)

**Contributor difficulty:** 🟡 Intermediate

---

## API Documentation

---

### OpenAPI / Swagger

| Field | Value |
|---|---|
| **Purpose** | REST API documentation — interactive API explorer served at `/api/docs` |
| **Ownership** | Backend contributors |
| **Implementation** | `swagger-jsdoc` (spec generation) + `swagger-ui-express` (interactive UI) |
| **Decision Date** | August 2026 |
| **Status** | ✅ Finalized |

**Why selected:**  
OpenAPI is the industry standard for documenting REST APIs. `swagger-jsdoc` generates the OpenAPI spec from JSDoc comments in route files, keeping documentation co-located with code. FastAPI generates its own OpenAPI spec automatically.

**Note:** Specific API endpoint names and contracts are not documented here. The API specification will be finalized in M1.5.

**Learning resources:**
- [OpenAPI Specification](https://swagger.io/specification)
- [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc)

**Contributor difficulty:** 🟡 Intermediate

---

## Deferred Technologies

The following technologies are intentionally **not** included in M1. They will only be introduced when justified by specific, measurable project requirements.

| Technology | Category | Deferred Until | Reason |
|---|---|---|---|
| **Qdrant** | Vector Database | M3 (if needed) | pgvector is sufficient at MVP scale. Introduce only if vector search latency exceeds acceptable thresholds under real load. |
| **Weaviate** | Vector Database | M3 (if needed) | Same rationale as Qdrant. |
| **Neo4j** | Graph Database | M3 | Knowledge graph is a M3 feature. Apache AGE (PostgreSQL extension) will be evaluated first to keep infrastructure unified. |
| **LangChain** | AI Orchestration | M3 | Direct `sentence-transformers` pipeline is sufficient for M2 semantic search. LangChain adds abstraction complexity before pipeline requirements are clear. |
| **LlamaIndex** | RAG Framework | M3 | Same rationale as LangChain. Introduce when retrieval-augmented generation is a confirmed feature requirement. |
| **Redis** | Cache / Queue | M3 | PostgreSQL is sufficient at MVP scale. Introduce when query latency or background job requirements justify a caching layer. |
| **Kafka** | Event Streaming | Post v1.0 | ResearchForge has no real-time event streaming requirement at any currently planned milestone. |
| **Kubernetes** | Container Orchestration | Post v1.0 | Docker Compose is appropriate for development and small-scale deployment. Kubernetes adds operational complexity with no benefit until the project requires multi-node deployment. |
| **GraphQL** | API Query Language | v1.0 (if needed) | REST is universally understood and sufficient for all planned features. GraphQL will only be considered if the plugin/extension API in v1.0 genuinely requires flexible query composition. |

---

👉 **Next Step:** Review the system architecture in **[docs/Architecture.md](Architecture.md)** *(⏱️ ~4 min read)*!
