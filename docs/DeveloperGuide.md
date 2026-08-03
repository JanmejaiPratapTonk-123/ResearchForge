# Developer Guide

> **Status: ✅ Tech stack finalized (M1). Project scaffolding in progress (M1.5).**  
> Runnable service code will be available once Milestone 1.5 scaffolding is complete.  
> This guide reflects confirmed technology choices.

---

## Table of Contents

- [Technology Stack Summary](#technology-stack-summary)
- [Service Directory Map](#service-directory-map)
- [Local Development Setup](#local-development-setup)
  - [Option A — Docker Compose (Recommended)](#option-a--docker-compose-recommended)
  - [Option B — Manual Setup](#option-b--manual-setup)
- [Running Tests](#running-tests)
- [Environment Variables](#environment-variables)
- [How to Contribute Today](#how-to-contribute-today)

---

## Technology Stack Summary

| Service | Technology |
|---|---|
| **Frontend** | Next.js · React · TypeScript · Tailwind CSS · shadcn/ui |
| **Backend API** | Express.js · TypeScript · Prisma ORM · JWT Auth |
| **AI Service** | FastAPI · Python · sentence-transformers |
| **Database** | PostgreSQL · pgvector extension |
| **DevOps** | Docker · Docker Compose · GitHub Actions |
| **Node package manager** | pnpm |
| **Python package manager** | uv |

For full decision rationale, see [docs/TechStack.md](TechStack.md).

---

## Service Directory Map

| Directory | Technology | Responsibility |
|---|---|---|
| [`frontend/`](../frontend/) | Next.js · React · TypeScript · Tailwind | Web application UI |
| [`backend/`](../backend/) | Express.js · TypeScript · Prisma | REST API, auth, business logic |
| [`ai-services/`](../ai-services/) | FastAPI · Python · sentence-transformers | Embedding & AI inference |
| [`database/`](../database/) | Prisma schema · PostgreSQL migrations | Schema definitions and migrations |

---

## Local Development Setup

> **Prerequisites:**
> - Git
> - Docker Desktop (for Option A)
> - Node.js (current LTS) + pnpm (for Option B frontend)
> - Python 3.12+ + uv (for Option B AI service)
>
> - **Windows users:** See **[docs/WindowsSetup.md](WindowsSetup.md)** for a complete step-by-step guide covering WSL2 installation, Docker Desktop configuration, and troubleshooting common issues.

### Option A — Docker Compose (Recommended)

Docker Compose starts all four services — frontend, backend, AI service, and PostgreSQL — with a single command. This is the recommended path for all contributors.

> ⚠️ **Available from M1.5 onwards.** The `docker-compose.yml` file will be added during the M1.5 scaffolding milestone.

```bash
# Clone the repository
git clone https://github.com/JanmejaiPratapTonk-123/ResearchForge.git
cd ResearchForge

# Copy environment variable templates
cp frontend/.env.example frontend/.env.local
cp backend/.env.example backend/.env
cp ai-services/.env.example ai-services/.env

# Start all services
docker compose up
```

Services will be available at:
- **Frontend:** `http://localhost:3000`
- **Backend API:** `http://localhost:4000`
- **Backend API Docs:** `http://localhost:4000/api/docs`
- **AI Service:** `http://localhost:8000`

To stop: `docker compose down`

---

### Option B — Manual Setup

Use this option if Docker is not available on your system, or if you are working on a single service in isolation.

**Frontend (Next.js)**
```bash
cd frontend
pnpm install
pnpm dev
# Runs on http://localhost:3000
```

**Backend (Express.js)**
```bash
cd backend
pnpm install
pnpm dev
# Runs on http://localhost:4000
```

**AI Service (FastAPI)**
```bash
cd ai-services
uv sync           # or: python -m venv .venv && pip install -r requirements.txt
uv run uvicorn main:app --reload
# Runs on http://localhost:8000
```

**Database (PostgreSQL)**  
You will need a local PostgreSQL instance with the `pgvector` extension installed. See the [pgvector installation guide](https://github.com/pgvector/pgvector#installation). Then run Prisma migrations:
```bash
cd backend
pnpm prisma migrate dev
```

---

## Running Tests

```bash
# Frontend (Vitest)
cd frontend
pnpm test

# Backend (Jest)
cd backend
pnpm test

# AI Service (Pytest)
cd ai-services
uv run pytest
```

---

## Environment Variables

Each service has an `.env.example` file at its root listing all required environment variables with descriptions. Copy the example file and fill in the values for your local setup.

| Service | File to copy |
|---|---|
| Frontend | `frontend/.env.example` → `frontend/.env.local` |
| Backend | `backend/.env.example` → `backend/.env` |
| AI Service | `ai-services/.env.example` → `ai-services/.env` |

> ⚠️ **Never commit `.env` files.** They are listed in `.gitignore` and must stay local.

For the full environment variable strategy, see [docs/DevExperience.md](DevExperience.md#environment-variable-strategy).

---

## How to Contribute Today

While M1.5 scaffolding is in progress, the most impactful contribution areas are:

- **Documentation:** Improving guides, fixing broken links, refining onboarding material — `docs/`
- **Design:** Project logo, README banner, UI wireframes — `assets/`
- **Architecture discussions:** Opening GitHub Issues tagged `discussion` to refine service contracts and API design
- **Tech stack research:** Contributing implementation notes to [docs/TechStack.md](TechStack.md)

Browse [GitHub Issues](https://github.com/JanmejaiPratapTonk-123/ResearchForge/issues) for `good first issue` tasks.

---

👉 **Next Step:** See **[docs/GettingStarted.md](GettingStarted.md)** *(⏱️ ~5 min read)* for the full contributor onboarding walkthrough!
