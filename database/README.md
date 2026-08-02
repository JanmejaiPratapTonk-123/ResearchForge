# Database Layer (`database/`)

> **Role:** Persistent data store configuration for ResearchForge.  
> **Status:** Scaffolding complete — Prisma initialized with `pgvector` extension.

---

## Purpose

The `database/` module houses the Prisma ORM configuration, schema definitions, and migration files for ResearchForge. It connects to a PostgreSQL instance with the `pgvector` extension enabled for relational, vector, and graph storage patterns.

---

## Service Responsibilities

- **Current (M1.5):** Prisma schema configuration (`prisma/schema.prisma`) targeting PostgreSQL + `pgvector`.
- **Future (M2+):** Database migrations, initial seed data, relational schema definitions (`User`, `Paper`, `Workspace`), and vector index configurations (`PaperEmbedding`).

---

## How to Run & Apply Migrations

```bash
# From the backend/ directory (or root via pnpm):
cd ../backend

# Generate Prisma Client types
pnpm prisma generate

# Create and apply a new migration
pnpm prisma migrate dev --name init
```

---

## Planned Contributor Issues

Contributors can help build the database infrastructure by taking on tasks such as:
- Defining the core `User` and `Workspace` Prisma models
- Defining the `Paper` and `PaperEmbedding` vector models
- Writing database seed scripts for local development testing
