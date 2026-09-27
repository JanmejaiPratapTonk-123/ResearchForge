# Backend API Service (`backend/`)

> **Role:** REST API server, business logic coordination, and authentication controller.  
> **Status:** Scaffolding complete — Express.js + TypeScript server running on port `4000`.

---

## Purpose

The `backend/` service handles HTTP request orchestration for ResearchForge. It manages user authentication, paper metadata ingestion, workspace management, database interactions via Prisma, and delegates AI embedding requests to `ai-services/`.

---

## Tech Stack

- **Framework:** Express.js
- **Language:** TypeScript
- **Database Access:** Prisma ORM
- **Port:** `4000` (default)

---

## How to Run Locally

```bash
# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env

# Run development server with hot-reload
pnpm dev

# Check health endpoint
curl http://localhost:4000/health

# Fetch paper metadata by arXiv ID
curl http://localhost:4000/api/papers/arxiv/1706.03762
```

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/health` | Server health check and timestamp |
| `GET` | `/api/papers/arxiv/:id` | Fetches and parses paper metadata directly from arXiv API |

---

## Planned Contributor Infrastructure Issues

Contributors can take on backend infrastructure tasks:
- Configure Swagger / OpenAPI interactive documentation (`/api/docs`)
- Configure Zod request validation middleware
- Implement JWT authentication with HTTP-only cookies
