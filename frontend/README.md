# Frontend Web Application (`frontend/`)

> **Role:** Researcher-facing web application UI.  
> **Status:** Scaffolding complete — Next.js 14 + React 18 + Tailwind CSS running on port `3000`.

---

## Purpose

The `frontend/` module provides the web UI for ResearchForge. It communicates exclusively with `backend/` via REST API calls for searching papers, managing reading lists, visualizing knowledge graphs, and handling user settings.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Library:** React
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Port:** `3000` (default)

---

## How to Run Locally

```bash
# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local

# Run development server
pnpm dev

# Open browser at http://localhost:3000
```

---

## Planned Contributor Infrastructure Issues

Contributors can take on frontend infrastructure tasks:
- Configure shadcn/ui component library primitives
- Set up TanStack Query (v5) QueryClientProvider wrapper
- Configure Vitest and React Testing Library setup
- Implement React Hook Form + Zod form validation pattern
