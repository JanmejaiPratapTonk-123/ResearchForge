# Architecture

> **Status: Under Design**  
> This document describes the planned architecture for ResearchForge. No implementation exists yet. This document will be updated as architectural decisions are made and validated.

---

## Table of Contents

- [Overview](#overview)
- [Guiding Principles](#guiding-principles)
- [High-Level Component Overview](#high-level-component-overview)
- [Component Responsibilities](#component-responsibilities)
- [Planned Data Flow](#planned-data-flow)
- [Key Architectural Decisions Under Discussion](#key-architectural-decisions-under-discussion)
- [What Is Not Yet Decided](#what-is-not-yet-decided)
- [How to Contribute to Architecture Discussions](#how-to-contribute-to-architecture-discussions)

---

## Overview

ResearchForge is planned as a **modular, service-oriented system** with clear boundaries between distinct functional layers. The goal is to allow independent development and testing of each component, and to enable contributors to work on one layer without deep knowledge of the others.

The four planned layers are:

1. **Frontend** — The web application that researchers interact with
2. **Backend API** — The core application server handling business logic and data coordination
3. **AI Services** — Specialized microservices for embedding, summarization, and NLP
4. **Database** — Persistent storage for papers, users, knowledge graphs, and metadata

---

## Guiding Principles

The architecture is being designed around the following principles:

- **Separation of concerns** — Each service has a single, clear responsibility
- **API-first** — All inter-service communication goes through well-defined interfaces
- **Contributor accessibility** — Any contributor should be able to work on one service without running all others
- **No vendor lock-in** — Where possible, use open standards and avoid tight coupling to specific cloud providers or proprietary tools
- **Iterative development** — Start simple, add complexity only when justified

---

## High-Level Component Overview

```
┌─────────────────────────────────────────────────┐
│                   Frontend                       │
│         (Web Application / UI)                   │
└────────────────────┬────────────────────────────┘
                     │ HTTP / REST or GraphQL
                     ▼
┌─────────────────────────────────────────────────┐
│                  Backend API                     │
│      (Business Logic, Auth, Data Access)         │
└──────┬─────────────────────────┬────────────────┘
       │ Internal API            │ Database queries
       ▼                         ▼
┌─────────────────┐   ┌──────────────────────────┐
│   AI Services   │   │        Database           │
│  (Embeddings,   │   │  (Papers, Users, Graph,   │
│  Summarization, │   │   Annotations, Metadata)  │
│  NLP Pipelines) │   └──────────────────────────┘
└─────────────────┘
```

> **Note:** This diagram shows the planned topology. All technology choices within each layer are still under evaluation. See [TechStack.md](TechStack.md).

---

## Component Responsibilities

### Frontend

- Provide the researcher-facing web interface
- Handle routing, state management, and user interaction
- Communicate with the Backend API only (no direct database or AI service calls)
- Render search results, knowledge graphs, paper views, and collaboration features

### Backend API

- Serve as the single point of entry for all frontend requests
- Handle authentication and authorization
- Coordinate between the database and AI services
- Implement core business logic (search orchestration, citation management, workspace management)
- Expose a well-documented API (REST and/or GraphQL — under evaluation)

### AI Services

- Run as one or more independent services focused on ML/NLP tasks
- Provide: text embedding (for semantic search), paper summarization, entity extraction, relationship detection
- Accept requests from the Backend API; return structured results
- Be replaceable or upgradeable without affecting the Backend API contract

### Database

- Store all persistent data: papers and metadata, user accounts, workspaces, annotations, knowledge graph nodes and edges
- The specific database technology is under evaluation (relational, graph, vector, or a combination)
- Migrations and schema versioning will be managed explicitly

---

## Planned Data Flow

### Paper ingestion (planned)

```
User submits paper URL or DOI
        │
        ▼
Backend API validates and queues ingestion
        │
        ▼
AI Services extract text, generate embeddings, extract entities
        │
        ▼
Backend API stores paper + metadata + embeddings in Database
        │
        ▼
Frontend displays paper in user's workspace
```

### Semantic search (planned)

```
User enters a natural language query in Frontend
        │
        ▼
Backend API sends query to AI Services for embedding
        │
        ▼
Backend API queries Database using vector similarity search
        │
        ▼
Backend API ranks, filters, and returns results
        │
        ▼
Frontend renders ranked paper list
```

---

## Key Architectural Decisions Under Discussion

These decisions have not been made. They are being discussed and will be documented here once decided.

| Decision | Options Under Consideration | Status |
|---|---|---|
| Frontend framework | React, Vue, SvelteKit, Next.js | Under Discussion |
| Backend language/framework | Python (FastAPI/Django), Node.js (Express) | Under Discussion |
| API protocol | REST, GraphQL, tRPC | Under Discussion |
| Vector database | pgvector, Weaviate, Qdrant, Chroma | Under Discussion |
| Relational database | PostgreSQL, SQLite (dev) | Under Discussion |
| Graph database | Neo4j, TigerGraph, or embedded in relational | Under Discussion |
| AI model hosting | Self-hosted open models, API-based (OpenAI, Cohere), both | Under Discussion |
| Authentication | JWT, OAuth2, or external provider (Auth0, Supabase Auth) | Under Discussion |
| Container strategy | Docker Compose (dev), Kubernetes (prod — future) | Under Discussion |

---

## What Is Not Yet Decided

The following aspects of the system are explicitly deferred:

- Specific deployment infrastructure (cloud provider, hosting strategy)
- Real-time collaboration mechanism (WebSockets, CRDTs, operational transforms)
- Mobile support
- Plugin / extension API design
- Search ranking algorithm
- Knowledge graph storage and query model

These will be addressed in later milestones once the core system design is stable.

---

## How to Contribute to Architecture Discussions

Architecture decisions at this stage are open for community input. If you have experience with any of the technologies or patterns under consideration, your input is valuable.

To contribute:

1. Open a GitHub Issue using the **Question** or **Feature Request** template
2. Tag it with the `discussion` label
3. Describe your experience, the trade-offs you see, and your recommendation
4. The maintainer will aggregate input and document the final decision here

---

*Last updated: August 2026*  
*See also: [TechStack.md](TechStack.md) · [Vision.md](Vision.md) · [Roadmap.md](Roadmap.md)*
