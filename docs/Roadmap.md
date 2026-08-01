# Roadmap

> **Status: Active Planning**  
> This roadmap reflects the current development plan for ResearchForge under IEEE Summer of Code 2026. Milestones and timelines are estimates. This document will be updated as the project progresses.

---

## Table of Contents

- [Overview](#overview)
- [Milestone Summary](#milestone-summary)
- [M0 — Repository & Community Setup](#m0--repository--community-setup)
- [M1 — Architecture & Tech Stack Finalization](#m1--architecture--tech-stack-finalization)
- [M2 — MVP Development](#m2--mvp-development)
- [M3 — Alpha Release](#m3--alpha-release)
- [v1.0 — Stable Public Release](#v10--stable-public-release)
- [Future (Post v1.0)](#future-post-v10)
- [How to Contribute to Roadmap Planning](#how-to-contribute-to-roadmap-planning)

---

## Overview

ResearchForge follows a phased development approach. Each milestone builds on the previous one and has clear, verifiable deliverables. The project is currently in **Milestone 0** — repository setup and community infrastructure.

No code implementation will begin until Milestone 1 (architecture and tech stack) is complete. This ensures that implementation effort is directed well and that contributors don't build on a moving foundation.

---

## Milestone Summary

| Milestone | Focus | Status |
|---|---|---|
| M0 — Repo & Community Setup | Documentation, contributor onboarding, community files | 🟡 In Progress |
| M1 — Architecture & Tech Stack | Design decisions, architecture docs, stack finalization | 🔴 Not Started |
| M2 — MVP Development | Core implementation: search, paper ingestion, basic UI | 🔴 Not Started |
| M3 — Alpha Release | End-to-end working system, feedback loop | 🔴 Not Started |
| v1.0 — Stable Release | Polished product, documentation complete, community active | 🔴 Not Started |

---

## M0 — Repository & Community Setup

**Goal:** Make the repository welcoming for first-time contributors and set up the community infrastructure that the project will run on.

**Deliverables:**

- [x] Initial repository structure
- [x] MIT License
- [ ] README — professional landing page
- [ ] CONTRIBUTING.md — full contribution guide
- [ ] CODE_OF_CONDUCT.md — Contributor Covenant
- [ ] CHANGELOG.md — Keep a Changelog format
- [ ] docs/Vision.md — mission and problem statement
- [ ] docs/Architecture.md — planned system design
- [ ] docs/TechStack.md — evaluation document
- [ ] docs/Roadmap.md — this document
- [ ] docs/Features.md — planned feature list
- [ ] docs/GettingStarted.md — contributor onboarding
- [ ] docs/MaintainerGuide.md — admin workflows
- [ ] docs/FolderStructure.md — annotated structure
- [ ] docs/CodingStandards.md — conventions
- [ ] docs/BranchingStrategy.md — git workflow
- [ ] GitHub issue templates (bug, feature, question, docs)
- [ ] GitHub PR template
- [ ] Repository labels
- [ ] Starter issues for community engagement

**Status:** In Progress

---

## M1 — Architecture & Tech Stack Finalization

**Goal:** Make all major architectural and technology decisions, document them thoroughly, and prepare the project for implementation.

**Deliverables:**

- [ ] Finalized and documented tech stack (all layers)
- [ ] Detailed architecture document with component diagrams
- [ ] Database schema design (initial)
- [ ] API contract design (endpoints, data models)
- [ ] Development environment setup guide (docs/DeveloperGuide.md)
- [ ] Docker Compose setup for local development
- [ ] Skeleton project structure for each service (empty but scaffolded)
- [ ] CI/CD pipeline (GitHub Actions) — linting, basic checks

**Prerequisites:** M0 complete

**Status:** Not Started

---

## M2 — MVP Development

**Goal:** Build a minimal but working version of ResearchForge's core functionality.

**Planned MVP scope (subject to revision in M1):**

- [ ] User authentication (sign up, log in)
- [ ] Paper ingestion (submit a DOI or URL, store metadata)
- [ ] Basic semantic search (embedding-based retrieval)
- [ ] Paper view (display stored metadata and abstract)
- [ ] Personal workspace (list of saved papers)
- [ ] Basic UI connecting all the above

**Out of scope for MVP:**
- Knowledge graph
- Collaboration features
- AI summarization
- Citation export

**Prerequisites:** M1 complete

**Status:** Not Started

---

## M3 — Alpha Release

**Goal:** Produce a deployable, end-to-end working system for early user feedback.

**Deliverables:**

- [ ] Deployed alpha instance (URL to be determined)
- [ ] End-to-end working: ingest → search → view
- [ ] Basic knowledge graph visualization
- [ ] User feedback mechanism
- [ ] Comprehensive test coverage for core flows
- [ ] Security review of authentication and data handling
- [ ] Public alpha announcement

**Prerequisites:** M2 complete

**Status:** Not Started

---

## v1.0 — Stable Public Release

**Goal:** A polished, stable product ready for real-world use by researchers.

**Planned scope:**

- [ ] All core features stable and tested
- [ ] Collaborative workspaces
- [ ] Citation management and export (BibTeX, APA, MLA)
- [ ] Full documentation suite
- [ ] Performance benchmarks
- [ ] Security audit
- [ ] Community contributor recognition
- [ ] Public release announcement

**Prerequisites:** M3 complete + feedback cycle

**Status:** Not Started

---

## Future (Post v1.0)

These are ideas for after the v1.0 release. They are not committed to and will be shaped by user feedback and contributor interest.

- Research workflow automation (custom pipelines)
- Plugin / extension architecture
- Mobile companion app
- Integration with institutional repositories
- Advanced AI features (hypothesis generation, gap analysis)
- Team and organization accounts

---

## How to Contribute to Roadmap Planning

The roadmap is a living document. If you have ideas about priorities, milestone scope, or features, please contribute:

1. Open a GitHub Issue using the **Feature Request** or **Question** template
2. Tag it with `discussion` and `enhancement`
3. Reference this document and describe your suggestion
4. The maintainer will incorporate community input into milestone planning

---

*Last updated: August 2026*  
*See also: [Vision.md](Vision.md) · [Architecture.md](Architecture.md) · [Features.md](Features.md)*
