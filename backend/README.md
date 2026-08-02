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
```

---

## Planned Contributor Infrastructure Issues

Contributors can take on backend infrastructure tasks:
- Configure Swagger / OpenAPI interactive documentation (`/api/docs`)
- Set up Jest testing framework and health route unit tests
- Configure Zod request validation middleware
- Implement JWT authentication with HTTP-only cookies
