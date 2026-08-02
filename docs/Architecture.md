# Architecture

> **Status: ✅ Finalized — Milestone 1 (August 2026)**  
> This document describes the finalized system architecture for ResearchForge. For technology decision rationale and alternatives, see **[docs/TechStack.md](TechStack.md)**.

---

## Table of Contents

- [Overview](#overview)
- [Guiding Principles](#guiding-principles)
- [Service Architecture](#service-architecture)
- [Component Responsibilities](#component-responsibilities)
- [Data Flow — Semantic Search](#data-flow--semantic-search)
- [Deferred Infrastructure](#deferred-infrastructure)
- [How to Contribute to Architecture Discussions](#how-to-contribute-to-architecture-discussions)

---

## Overview

ResearchForge is built as a **service-oriented system** with four distinct, loosely-coupled services:

1. **Frontend** — Next.js web application served to the researcher's browser
2. **Backend API** — Express.js server handling business logic, authentication, and data access
3. **AI Service** — FastAPI microservice running embedding and inference pipelines
4. **Database** — PostgreSQL with pgvector for relational data and vector similarity search

Each service has a single, clear responsibility. Services communicate via HTTP. A contributor can work on one service without needing to understand the internals of another.

---

## Guiding Principles

- **Separation of concerns:** Each service owns one domain.
- **API-first:** All inter-service communication uses well-defined HTTP contracts.
- **Contributor accessibility:** Any service can be developed independently with the rest mocked or stubbed.
- **No vendor lock-in:** All components are open-source and self-hostable.
- **Minimum viable infrastructure:** No service is added until it earns its place at the current milestone.

---

## Service Architecture

```
┌───────────────────────────────────┐
│          Frontend                 │
│       (Next.js / React)           │
└────────────────┬──────────────────┘
                 │ REST / HTTP
                 ▼
┌───────────────────────────────────┐
│          Backend API              │
│  (Express.js · TypeScript · ORM)  │
└────────┬──────────────────────────┘
         │                │
   HTTP  │          SQL / ORM
         ▼                ▼
┌──────────────┐  ┌───────────────────┐
│  AI Service  │  │    PostgreSQL      │
│  (FastAPI ·  │  │  + pgvector       │
│   Python)    │  └───────────────────┘
└──────────────┘
```

**Communication pattern:** Frontend → Backend API only. Backend API → AI Service and Database. The AI Service does not directly access the database; it receives text from the backend and returns vectors.

---

## Component Responsibilities

### Frontend (`frontend/`)

- Researcher-facing web application
- Renders UI using Next.js, React, Tailwind CSS, and shadcn/ui
- Manages server state with TanStack Query
- Handles form input and validation with React Hook Form + Zod
- Communicates exclusively with the Backend API via REST

### Backend API (`backend/`)

- Single HTTP entry point for all frontend requests
- Handles user authentication (JWT, HTTP-only cookies)
- Contains all business logic (search orchestration, paper management, workspace operations)
- Queries the database via Prisma ORM
- Delegates embedding and AI tasks to the AI Service via internal HTTP requests
- Serves interactive API documentation via OpenAPI / Swagger

### AI Service (`ai-services/`)

- Python microservice running sentence-transformers
- Accepts text input and returns vector embeddings
- Stateless — no database access; all persistence is handled by the Backend API
- Designed to be extended with additional AI capabilities in M3 (summarization, entity extraction)

### Database (`database/`)

- PostgreSQL with the pgvector extension
- Stores: users, papers, metadata, workspaces, vector embeddings
- Schema managed by Prisma ORM
- Vector similarity search performed via pgvector (raw SQL through Prisma)

---

## Data Flow — Semantic Search

The core data flow for semantic paper search:

```
1. Researcher submits a search query in the Frontend

2. Frontend sends the query to the Backend API

3. Backend API forwards the query text to the AI Service

4. AI Service embeds the text using sentence-transformers
   and returns a vector to the Backend API

5. Backend API performs vector similarity search
   against stored paper embeddings in PostgreSQL (pgvector)

6. Backend API returns ranked results to the Frontend

7. Frontend renders the paper list
```

> **Note:** Specific API endpoint paths are not documented here. The API specification will be defined and published during Milestone 1.5.

---

## Deferred Infrastructure

The following infrastructure components are intentionally excluded from M1 and M2:

| Component | Deferred Until | Reason |
|---|---|---|
| **Knowledge Graph store** | M3 | Apache AGE (PostgreSQL extension) will be evaluated first |
| **Standalone Vector DB** (Qdrant, Weaviate) | M3 if needed | pgvector is sufficient at MVP scale |
| **Caching layer** (Redis) | M3 | PostgreSQL query performance is sufficient at MVP |
| **Message queue** (Kafka, RabbitMQ) | Post v1.0 | No async event streaming requirement at planned milestones |

See [docs/TechStack.md#deferred-technologies](TechStack.md#deferred-technologies) for full rationale.

---

## How to Contribute to Architecture Discussions

Architecture decisions are documented in [docs/TechStack.md](TechStack.md). If you have a question or suggestion about system design:

1. Open a GitHub Issue using the **Question** or **Feature Request** template.
2. Add the `discussion` label.
3. Reference the specific architecture section or technology.

---

👉 **Next Step:** Explore the finalized technology decisions in **[docs/TechStack.md](TechStack.md)** *(⏱️ ~10 min read)*!
