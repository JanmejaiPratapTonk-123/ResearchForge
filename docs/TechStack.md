# Tech Stack

> **Status: Under Evaluation**  
> No technology has been formally selected for ResearchForge. This document explains the evaluation process, the criteria being used, and the options under consideration for each layer. A final decision will be documented here once the community discussion concludes.

---

## Table of Contents

- [Why Document This Before Deciding?](#why-document-this-before-deciding)
- [Evaluation Criteria](#evaluation-criteria)
- [Layers Under Evaluation](#layers-under-evaluation)
  - [Frontend](#frontend)
  - [Backend API](#backend-api)
  - [AI / ML Services](#ai--ml-services)
  - [Database](#database)
  - [Infrastructure & DevOps](#infrastructure--devops)
- [Decision Timeline](#decision-timeline)
- [How to Participate in Tech Stack Decisions](#how-to-participate-in-tech-stack-decisions)

---

## Why Document This Before Deciding?

Documenting the evaluation process before making decisions serves three purposes:

1. **Transparency** — Contributors and stakeholders can see what's being considered and why.
2. **Collaboration** — Community members with relevant experience can contribute to the decision.
3. **Accountability** — Once a decision is made, the rationale is preserved here.

This is not a document of what has been built. It is a document of what is being thoughtfully considered.

---

## Evaluation Criteria

All technology choices will be evaluated against the following criteria:

| Criterion | Description |
|---|---|
| **Open-source licensing** | Tools must be open-source or have a free tier suitable for an open-source project |
| **Contributor familiarity** | Preference for technologies that lower the barrier for contributors |
| **Community & maturity** | Active community, good documentation, long-term viability |
| **Performance at target scale** | Suitable for a research-scale workload (thousands of papers, tens of users initially) |
| **IEEE SoC scope** | Realistic to implement meaningful functionality within the programme timeline |
| **Extensibility** | The choice should not close off future capabilities |

---

## Layers Under Evaluation

### Frontend

**Responsibility:** The web interface that researchers interact with directly.

| Option | Notes |
|---|---|
| React (with Next.js) | Large ecosystem, strong SSR/SSG support, widely known |
| Vue (with Nuxt) | Approachable syntax, growing ecosystem |
| SvelteKit | Excellent performance, simpler model, smaller ecosystem |
| Plain HTML/JS | Simplest to start, limited scalability for complex UI |

**Key considerations:**
- How complex will the UI be at MVP? (Knowledge graph visualization, search interface, workspace views)
- What do the majority of potential contributors know?
- Does the choice support real-time collaboration features in the future?

**Status:** Under discussion — no decision made.

---

### Backend API

**Responsibility:** Core application server — business logic, authentication, data access, AI service coordination.

| Option | Notes |
|---|---|
| Python + FastAPI | Excellent for AI-adjacent projects, async support, auto-generated API docs |
| Python + Django | More opinionated, batteries-included, larger ecosystem |
| Node.js + Express | Familiar to frontend developers, large ecosystem |
| Node.js + Fastify | High-performance alternative to Express |

**Key considerations:**
- Does the backend language align with the AI services layer (Python synergy)?
- What level of structure and convention do we want the framework to impose?
- How important is auto-generated API documentation at this stage?

**Status:** Under discussion — no decision made.

---

### AI / ML Services

**Responsibility:** Text embedding for semantic search, paper summarization, entity and relationship extraction.

| Component | Options Under Consideration |
|---|---|
| **Embedding model** | `sentence-transformers` (HuggingFace), OpenAI `text-embedding-3`, Cohere Embed |
| **Summarization** | Local open models (Mistral, Llama), OpenAI GPT-4o, Cohere Command |
| **NLP / entity extraction** | SpaCy, NLTK, custom fine-tuned models |
| **Serving** | Python script (MVP), FastAPI microservice, dedicated model server |

**Key considerations:**
- Self-hosted models vs. API-based models (cost, privacy, contributor accessibility)
- Can contributors run AI features locally without GPU hardware at MVP scale?
- How do we handle API key management for contributors?

**Status:** Under discussion — no decision made.

---

### Database

**Responsibility:** Persistent storage for all application data.

ResearchForge likely requires multiple storage patterns:

| Storage need | Options Under Consideration |
|---|---|
| **Relational (users, metadata)** | PostgreSQL, SQLite (development) |
| **Vector search (embeddings)** | `pgvector` (Postgres extension), Weaviate, Qdrant, Chroma |
| **Graph (knowledge graph)** | Neo4j, Apache AGE (Postgres extension), TigerGraph |
| **Full-text search** | PostgreSQL FTS, Elasticsearch, MeiliSearch |

**Key considerations:**
- Can we reduce operational complexity by using fewer database systems (e.g., PostgreSQL + pgvector + Apache AGE)?
- What is the expected data volume at MVP vs. long-term?
- What database tooling do most contributors have experience with?

**Status:** Under discussion — no decision made.

---

### Infrastructure & DevOps

**Responsibility:** Local development environment, CI/CD, and (eventually) deployment.

| Area | Options Under Consideration |
|---|---|
| **Local dev** | Docker Compose, native (no containers), devcontainers |
| **CI/CD** | GitHub Actions (default for GitHub projects) |
| **Deployment (future)** | Self-hosted VPS, Railway, Render, Fly.io, Kubernetes |
| **Secrets management** | `.env` files (dev), GitHub Secrets (CI), Vault (prod — future) |

**Status:** GitHub Actions for CI is near-certain. Local dev and deployment decisions are deferred.

---

## Decision Timeline

| Phase | Target | Decision |
|---|---|---|
| M0 — Repo Setup | August 2026 | None — evaluation in progress |
| M1 — Architecture Finalization | TBD | Tech stack decisions finalized and documented here |
| M2 — Core Implementation | TBD | All tech in use; this doc reflects actual stack |

---

## How to Participate in Tech Stack Decisions

Your experience and perspective matter. If you have worked with any of these technologies, we want to hear from you.

1. Open a GitHub Issue using the **Question** or **Feature Request** template
2. Describe your experience with the specific technology
3. Explain the trade-offs you see for this project specifically
4. Tag the issue with `discussion`

The maintainer will synthesize community input and make a documented final decision for each layer in Milestone 1.

---

*Last updated: August 2026*  
*See also: [Architecture.md](Architecture.md) · [Roadmap.md](Roadmap.md)*
