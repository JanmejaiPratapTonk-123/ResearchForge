<div align="center">
  <img src="assets/banner/banner.png" alt="ResearchForge Banner" width="100%" />
</div>

# ResearchForge

<div align="center">

**An open-source AI-powered research operating system**

_Designed for researchers who need more than a reference manager._

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Project Status](https://img.shields.io/badge/status-runnable%20scaffold-blue.svg)](#current-project-status)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![GitHub Stars](https://img.shields.io/github/stars/JanmejaiPratapTonk-123/ResearchForge?style=social)](https://github.com/JanmejaiPratapTonk-123/ResearchForge/stargazers)
[![GitHub Issues](https://img.shields.io/github/issues/JanmejaiPratapTonk-123/ResearchForge)](https://github.com/JanmejaiPratapTonk-123/ResearchForge/issues)

_IEEE Summer of Code 2026_

</div>

---

## Table of Contents

- [Overview](#overview)
- [Current Project Status](#current-project-status)
- [👋 New Contributor? Start Here](#-new-contributor-start-here)
- [Contributor Skill Matrix](#contributor-skill-matrix)
- [Repository Tour](#repository-tour)
- [Why ResearchForge?](#why-researchforge)
- [Tech Stack](#tech-stack)
- [Planned Features](#planned-features)
- [Roadmap](#roadmap)
- [Documentation Index](#documentation-index)
- [Maintainer Responsiveness SLA](#maintainer-responsiveness-sla)
- [License](#license)

---

## Overview

ResearchForge is an open-source platform being built for researchers, students, and academic teams who are overwhelmed by the volume and fragmentation of scientific literature.

The goal is to combine **semantic search**, **knowledge graphs**, and **AI-assisted workflows** into a single, unified research operating system — helping researchers discover connections across papers, organize their thinking, and collaborate with their team.

---

## Quick Start

### Prerequisites

- Docker Desktop
- Docker Compose
- WSL2 (Windows users) — see [docs/WindowsSetup.md](docs/WindowsSetup.md) for step-by-step instructions
- Git

### Clone Repository

```bash
git clone https://github.com/JanmejaiPratapTonk-123/ResearchForge.git
cd ResearchForge
```

### Run Project

```bash
docker compose up --build
```

### Available Services

- Frontend → [http://localhost:3000](http://localhost:3000)
- Backend Health → [http://localhost:4000/health](http://localhost:4000/health)
- AI Service Health → [http://localhost:8000/health](http://localhost:8000/health)
- PostgreSQL → localhost:5432

### Stop Project

```bash
docker compose down
```

---

## Current Project Status

> 🔵 **ResearchForge is in active development under IEEE Summer of Code 2026.** The tech stack is finalized, project scaffolding is complete, and the runnable scaffold services are available locally through Docker Compose. Core business logic and product features are intentionally not implemented yet and are reserved for IEEE Summer of Code 2026 contributors.

| Area                         | Status         | Active Milestone |
| ---------------------------- | -------------- | ---------------- |
| Repository & Community Setup | ✅ Complete    | M0               |
| Tech Stack & Architecture    | ✅ Finalized   | M1               |
| Project Scaffolding          | ✅ Complete    | M1.5             |
| Core Implementation          | 🔴 Not Started | M2               |
| Alpha Release                | 🔴 Not Started | M3               |

---

## 👋 New Contributor? Start Here

Welcome to IEEE Summer of Code 2026! We welcome contributors of all skill levels — whether you specialize in design, documentation, frontend, backend, or AI/ML.

### ⏱️ 3-Step Onboarding (15 Minutes)

1. **Read the Onboarding Guide:** Start with [docs/GettingStarted.md](docs/GettingStarted.md) — a step-by-step walkthrough for your first contribution.
2. **Review the Contribution Rules:** Read [CONTRIBUTING.md](CONTRIBUTING.md) for branch naming, commit formats, and the PR checklist.
3. **Pick an Issue:** Browse [GitHub Issues](https://github.com/JanmejaiPratapTonk-123/ResearchForge/issues) and look for the `good first issue` label.

### Development Environment

Contributors only need Docker Desktop to run the scaffold locally, and Windows users should enable WSL2 as well. You do not need to manually install Node.js, PostgreSQL, or Python to work with the runnable scaffold.

Docker Compose provides the same development environment across Windows, macOS, and Linux. The updated `.dockerignore` files also avoid the Windows pnpm and `node_modules` symlink issues that can break local setup outside containers.

---

## Contributor Skill Matrix

Match your current skills to contribution opportunities:

| Your Skill                 | Contribution Area              | Difficulty      | Where                   |
| -------------------------- | ------------------------------ | --------------- | ----------------------- |
| **Markdown / Writing**     | Docs, guides, changelogs       | 🟢 Beginner     | `docs/`                 |
| **Git / GitHub**           | PRs, reviews, issue triage     | 🟢 Beginner     | `.github/`              |
| **Graphic Design / Figma** | Logo, banner, UI wireframes    | 🟢 Beginner     | `assets/`               |
| **React / JSX**            | UI components with shadcn/ui   | 🟡 Intermediate | `frontend/components/`  |
| **TypeScript**             | Type definitions, Zod schemas  | 🟡 Intermediate | `frontend/`, `backend/` |
| **Tailwind CSS**           | Component styling              | 🟡 Intermediate | `frontend/`             |
| **Node.js / Express**      | API routes, middleware         | 🟡 Intermediate | `backend/`              |
| **Prisma / SQL**           | Schema definitions, migrations | 🟡 Intermediate | `database/`             |
| **Python**                 | AI service endpoints           | 🔴 Advanced     | `ai-services/`          |
| **FastAPI**                | Embedding & inference routes   | 🔴 Advanced     | `ai-services/`          |
| **Docker / DevOps**        | Compose config, CI workflows   | 🔴 Advanced     | root, `.github/`        |

---

## Repository Tour

| Directory                      | What lives here                      | Primary contributors         |
| ------------------------------ | ------------------------------------ | ---------------------------- |
| [`docs/`](docs/)               | All project documentation            | Everyone                     |
| [`assets/`](assets/)           | Logos, banners, diagrams, wireframes | Designers                    |
| [`frontend/`](frontend/)       | Next.js web application              | Frontend developers          |
| [`backend/`](backend/)         | Express.js API server                | Backend developers           |
| [`ai-services/`](ai-services/) | FastAPI AI microservice              | AI/ML engineers              |
| [`database/`](database/)       | Prisma schema, migrations            | Backend / database engineers |
| [`.github/`](.github/)         | Issue/PR templates, CI workflows     | DevOps, maintainers          |

See [docs/FolderStructure.md](docs/FolderStructure.md) for the full annotated guide.

---

## Why ResearchForge?

Researchers today juggle:

- Multiple disconnected tools (Zotero, Notion, Google Scholar, ChatGPT)
- Manual literature review processes that don't scale
- No structured way to track relationships between concepts across papers
- Collaboration friction in academic teams

ResearchForge provides an integrated, open platform — built in the open, by researchers and developers together.

Read the full vision: [docs/Vision.md](docs/Vision.md)

---

## Tech Stack

The M1 tech stack is finalized. See [docs/TechStack.md](docs/TechStack.md) for full architectural decision rationale.

| Layer                     | Technology                                              |
| ------------------------- | ------------------------------------------------------- |
| **Frontend**              | Next.js · React · TypeScript · Tailwind CSS · shadcn/ui |
| **State / Data Fetching** | TanStack Query · React Hook Form · Zod                  |
| **Backend API**           | Express.js · TypeScript · JWT Auth (HTTP-only Cookies)  |
| **Database**              | PostgreSQL · Prisma ORM · pgvector                      |
| **AI Service**            | FastAPI · Python · sentence-transformers                |
| **DevOps**                | Docker · Docker Compose · GitHub Actions                |
| **Package Managers**      | pnpm (Node) · uv (Python)                               |
| **Code Quality**          | ESLint · Prettier · Vitest · Jest · Pytest              |

---

## Planned Features

> ⚠️ **None of the features below are implemented yet.** This describes what ResearchForge is designed to become.

| Feature                      | Description                                         | Milestone |
| ---------------------------- | --------------------------------------------------- | --------- |
| **Semantic Search**          | Find papers by meaning, not just keywords           | M2        |
| **Knowledge Graph**          | Visualize relationships between concepts and papers | M3        |
| **AI Summarization**         | Generate concise summaries and extract key insights | M3        |
| **Citation Management**      | Export references in BibTeX, APA, MLA               | v1.0      |
| **Collaborative Workspaces** | Share annotated paper collections with teammates    | v1.0      |

Full specification: [docs/Features.md](docs/Features.md)

---

## Roadmap

| Milestone | Focus                                  | Status      |
| --------- | -------------------------------------- | ----------- |
| **M0**    | Repository & Community Setup           | ✅ Complete |
| **M1**    | Tech Stack & Architecture Finalization | ✅ Complete |
| **M1.5**  | Project Scaffolding                    | ✅ Complete |
| **M2**    | MVP Development                        | 🔴 Planned  |
| **M3**    | Alpha Release                          | 🔴 Planned  |
| **v1.0**  | Stable Public Release                  | 🔴 Planned  |

Full milestone detail: [docs/Roadmap.md](docs/Roadmap.md)

---

## Documentation Index

### 🏁 Getting Started & Contributing

- [docs/GettingStarted.md](docs/GettingStarted.md) — 15-minute onboarding walkthrough
- [docs/WindowsSetup.md](docs/WindowsSetup.md) — Windows development setup (WSL2, Docker Desktop, troubleshooting)
- [CONTRIBUTING.md](CONTRIBUTING.md) — Contribution manual, conventions, and policies
- [docs/BranchingStrategy.md](docs/BranchingStrategy.md) — Git branching cheat-sheet
- [docs/CodingStandards.md](docs/CodingStandards.md) — Code style guidelines

### 🏗️ Architecture & Planning

- [docs/Vision.md](docs/Vision.md) — Mission statement and user problems
- [docs/Architecture.md](docs/Architecture.md) — System topology and service design
- [docs/TechStack.md](docs/TechStack.md) — Finalized tech stack with decision rationale
- [docs/DevExperience.md](docs/DevExperience.md) — Developer experience and code organization guide
- [docs/Roadmap.md](docs/Roadmap.md) — Milestone plan and status
- [docs/Features.md](docs/Features.md) — Feature specifications
- [docs/FolderStructure.md](docs/FolderStructure.md) — Repository structure reference

### ⚙️ Developer & Maintainer Guides

- [docs/DeveloperGuide.md](docs/DeveloperGuide.md) — Complete local development workflow and Docker setup
- [docs/MaintainerGuide.md](docs/MaintainerGuide.md) — Maintainer workflows
- [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) — Contributor Covenant
- [SECURITY.md](SECURITY.md) — Security disclosure policy

---

## Maintainer Responsiveness SLA

- **Questions & Discussions:** Acknowledged within **24–48 hours**
- **Issue Triage:** Reviewed and labeled within **48 hours**
- **Pull Request Reviews:** Reviewed within **72 hours**

---

## License

Released under the [MIT License](LICENSE).  
Copyright © 2026 [Janmejai Pratap Tonk](https://github.com/JanmejaiPratapTonk-123).

---

👉 **Next Step:** Ready to contribute? Start with **[docs/GettingStarted.md](docs/GettingStarted.md)** _(⏱️ ~5 min read)_!
