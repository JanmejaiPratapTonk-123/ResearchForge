# Roadmap

> **Status: Active Development (IEEE Summer of Code 2026)**  
> This roadmap reflects the development plan for ResearchForge. Each milestone builds on the previous one with clear, verifiable deliverables.

---

## Table of Contents

- [Milestone Summary](#milestone-summary)
- [M0 — Repository & Community Setup](#m0--repository--community-setup)
- [M1 — Tech Stack & Architecture Finalization](#m1--tech-stack--architecture-finalization)
- [M1.5 — Project Scaffolding](#m15--project-scaffolding)
- [M2 — MVP Development](#m2--mvp-development)
- [M3 — Alpha Release](#m3--alpha-release)
- [v1.0 — Stable Public Release](#v10--stable-public-release)

---

## Milestone Summary

| Milestone | Focus Area | Target Timeline | Status |
|---|---|---|---|
| **M0 — Repo & Community Setup** | Documentation, onboarding, community structure | Q3 2026 | ✅ Complete |
| **M1 — Tech Stack & Architecture** | Stack finalization, ADRs, architecture docs | Q3 2026 | ✅ Complete |
| **M1.5 — Project Scaffolding** | Runnable service skeletons, Docker Compose, CI | Q3–Q4 2026 | 🟡 In Progress |
| **M2 — MVP Development** | Core paper ingestion, search API, basic UI | Q4 2026 | 🔴 Planned |
| **M3 — Alpha Release** | Knowledge graph, summarization, deployment | Q1 2027 | 🔴 Planned |
| **v1.0 — Stable Release** | Collaboration, citation export, security audit | Q2 2027 | 🔴 Planned |

---

## M0 — Repository & Community Setup

**Goal:** Make the repository welcoming for first-time contributors and establish community infrastructure.

**Deliverables:**

- [x] Initial repository structure (`frontend/`, `backend/`, `ai-services/`, `database/`, `docs/`, `assets/`)
- [x] MIT License & Security Policy (`LICENSE`, `SECURITY.md`)
- [x] README — landing page with Skill Matrix, Repository Tour, and maintainer SLAs
- [x] CONTRIBUTING.md — canonical contribution guide with issue assignment workflow
- [x] CODE_OF_CONDUCT.md — Contributor Covenant v2.1
- [x] CHANGELOG.md — Keep a Changelog format
- [x] `docs/Vision.md` — project mission and user problem statement
- [x] `docs/Architecture.md` — planned system topology
- [x] `docs/TechStack.md` — technology evaluation and decision records
- [x] `docs/Roadmap.md` — milestone release plan
- [x] `docs/Features.md` — planned feature specifications
- [x] `docs/GettingStarted.md` — 15-minute onboarding walkthrough with Skill Matrix
- [x] `docs/DeveloperGuide.md` — local development guide
- [x] `docs/MaintainerGuide.md` — maintainer workflows
- [x] `docs/FolderStructure.md` — annotated folder guide
- [x] `docs/CodingStandards.md` — style & quality guidelines
- [x] `docs/BranchingStrategy.md` — git command cheat-sheet
- [x] GitHub issue templates (bug, feature, question, docs improvement)
- [x] GitHub PR template
- [x] Automated GitHub link-check action (`.github/workflows/link-check.yml`)

**Status:** ✅ Complete

---

## M1 — Tech Stack & Architecture Finalization

**Goal:** Freeze the technology stack, finalize architecture documentation, and prepare all architectural decision records.

**Deliverables:**

- [x] Tech stack finalized and documented ([docs/TechStack.md](TechStack.md))
- [x] Architecture document finalized ([docs/Architecture.md](Architecture.md))
- [x] Architectural decision records (ADRs) written for every technology layer
- [x] Deferred technologies documented with rationale
- [x] Developer experience guide written ([docs/DevExperience.md](DevExperience.md))
- [x] Onboarding documentation updated to reflect finalized stack
- [x] Contributor Skill Matrix updated with real technologies
- [x] Repository status updated to reflect completed milestones

**Status:** ✅ Complete

---

## M1.5 — Project Scaffolding

**Goal:** Create a runnable skeleton of all four services with Docker Compose, CI, and developer tooling configured. No production features — just a working local development environment.

**Deliverables:**

- [ ] pnpm workspace configured at the repository root
- [ ] Next.js frontend scaffold (TypeScript, Tailwind CSS, shadcn/ui configured)
- [ ] Express.js backend scaffold (TypeScript, Prisma connected, Swagger enabled)
- [ ] FastAPI AI service scaffold (Python, sentence-transformers installed, health endpoint)
- [ ] PostgreSQL with pgvector extension ready in Docker
- [ ] `docker-compose.yml` starting all four services
- [ ] `.env.example` files for each service
- [ ] ESLint and Prettier configured for frontend and backend
- [ ] `ruff` configured for AI service
- [ ] GitHub Actions CI pipeline (lint, type-check, test)
- [ ] README updated with `docker compose up` quick-start instructions

**Status:** 🟡 In Progress

---

## M2 — MVP Development

**Goal:** Build a working end-to-end paper search and management experience.

**Planned Scope:**
- [ ] User registration and authentication
- [ ] Paper ingestion via DOI / arXiv ID (metadata fetch + embedding)
- [ ] Semantic search over ingested papers
- [ ] Paper detail view and abstract reader
- [ ] Personal reading list workspace

**Status:** 🔴 Planned

---

## M3 — Alpha Release

**Goal:** Deploy a publicly accessible alpha instance with expanded AI capabilities.

**Planned Scope:**
- [ ] Deployed public alpha instance
- [ ] Knowledge graph visualization (Apache AGE evaluation)
- [ ] AI-assisted paper summarization
- [ ] User feedback and reporting mechanism
- [ ] Performance evaluation of pgvector (Qdrant migration decision point)

**Status:** 🔴 Planned

---

## v1.0 — Stable Public Release

**Goal:** Polished, production-ready release for academic teams and individual researchers.

**Planned Scope:**
- [ ] Collaborative workspaces and shared annotations
- [ ] Citation export (BibTeX, APA, MLA)
- [ ] Plugin extension API
- [ ] Comprehensive test suite and security audit
- [ ] Full deployment and monitoring setup

**Status:** 🔴 Planned

---

👉 **Next Step:** Explore planned feature specifications in **[docs/Features.md](Features.md)** *(⏱️ ~4 min read)*!
